import { prisma } from './prisma.js';
export async function listarMusicos(filtros = {}) {
    const personaConditions = [];
    const whereCondition = {};
    if (filtros.estado === 'ACTIVO') {
        whereCondition.activo = true;
    }
    else if (filtros.estado === 'BAJA') {
        whereCondition.activo = false;
    }
    if (filtros.busqueda && filtros.busqueda.trim() !== '') {
        const busqueda = filtros.busqueda.trim();
        personaConditions.push({
            OR: [
                { nombre: { contains: busqueda } },
                { apellidos: { contains: busqueda } },
                { dni: { contains: busqueda } },
            ],
        });
    }
    if (filtros.instrumentoId) {
        personaConditions.push({
            personainstrumento: {
                some: {
                    instrumentoId: filtros.instrumentoId,
                    fechaFin: null,
                },
            },
        });
    }
    if (filtros.agrupacionId) {
        personaConditions.push({
            personaagrupacion: {
                some: {
                    agrupacionId: filtros.agrupacionId,
                    activo: true,
                    fechaBaja: null,
                },
            },
        });
    }
    if (personaConditions.length > 0) {
        whereCondition.persona = {
            AND: personaConditions,
        };
    }
    const musicos = await prisma.musico.findMany({
        where: whereCondition,
        include: {
            persona: {
                include: {
                    personainstrumento: {
                        where: {
                            fechaFin: null,
                        },
                        include: {
                            instrumento: true,
                        },
                        orderBy: {
                            principal: 'desc',
                        },
                    },
                    personaagrupacion: {
                        where: {
                            activo: true,
                            fechaBaja: null,
                        },
                        include: {
                            agrupacion: true,
                        },
                        orderBy: {
                            fechaAlta: 'desc',
                        },
                    },
                },
            },
            musicoperiodo: {
                orderBy: {
                    fechaInicio: 'desc',
                },
                take: 1,
            },
        },
        orderBy: {
            persona: {
                apellidos: 'asc',
            },
        },
    });
    return musicos.map((m) => {
        const periodoActual = m.musicoperiodo[0] || null;
        const instrumentos = m.persona.personainstrumento;
        const instrumentoPrincipal = instrumentos.find((instrumento) => instrumento.principal) ?? null;
        const segundoInstrumento = instrumentos.find((instrumento) => !instrumento.principal) ?? null;
        const agrupacion = m.persona.personaagrupacion[0] ?? null;
        return {
            id: m.id,
            personaId: m.personaId,
            nombre: m.persona.nombre,
            apellidos: m.persona.apellidos,
            dni: m.persona.dni,
            activo: m.activo,
            fechaAlta: m.fechaAlta,
            instrumentoPrincipal: instrumentoPrincipal
                ? {
                    id: instrumentoPrincipal.instrumento.id,
                    nombre: instrumentoPrincipal.instrumento.nombre,
                }
                : null,
            segundoInstrumento: segundoInstrumento
                ? {
                    id: segundoInstrumento.instrumento.id,
                    nombre: segundoInstrumento.instrumento.nombre,
                }
                : null,
            agrupacion: agrupacion
                ? {
                    id: agrupacion.agrupacion.id,
                    nombre: agrupacion.agrupacion.nombre,
                }
                : null,
            periodoActual: periodoActual
                ? {
                    id: periodoActual.id,
                    fechaInicio: periodoActual.fechaInicio,
                    fechaFin: periodoActual.fechaFin,
                    motivoBaja: periodoActual.motivoBaja,
                }
                : null,
        };
    });
}
export async function obtenerMusico(id) {
    const musico = await prisma.musico.findUnique({
        where: {
            id,
        },
        include: {
            persona: {
                include: {
                    personainstrumento: {
                        include: {
                            instrumento: true,
                        },
                        orderBy: [
                            {
                                principal: "desc",
                            },
                            {
                                fechaInicio: "desc",
                            },
                        ],
                    },
                    personaagrupacion: {
                        include: {
                            agrupacion: true,
                        },
                        orderBy: {
                            fechaAlta: "desc",
                        },
                    },
                    personarolfuncional: {
                        include: {
                            rolfuncional: true,
                        },
                    },
                },
            },
            musicoperiodo: {
                orderBy: {
                    fechaInicio: "desc",
                },
            },
        },
    });
    if (!musico) {
        return null;
    }
    return {
        id: musico.id,
        personaId: musico.personaId,
        persona: {
            id: musico.persona.id,
            nombre: musico.persona.nombre,
            apellidos: musico.persona.apellidos,
            dni: musico.persona.dni,
            fechaNacimiento: musico.persona.fechaNacimiento,
            email: musico.persona.email,
            telefono: musico.persona.telefono,
            observaciones: musico.persona.observaciones,
            activo: musico.persona.activo,
            fechaBaja: musico.persona.fechaBaja,
        },
        musico: {
            fechaAlta: musico.fechaAlta,
            fechaBaja: musico.fechaBaja,
            activo: musico.activo,
            observaciones: musico.observaciones,
        },
        periodos: musico.musicoperiodo.map((periodo) => ({
            id: periodo.id,
            fechaInicio: periodo.fechaInicio,
            fechaFin: periodo.fechaFin,
            motivoBaja: periodo.motivoBaja,
            observaciones: periodo.observaciones,
        })),
        instrumentos: musico.persona.personainstrumento.map((instrumento) => ({
            id: instrumento.id,
            principal: instrumento.principal,
            fechaInicio: instrumento.fechaInicio,
            fechaFin: instrumento.fechaFin,
            observaciones: instrumento.observaciones,
            instrumento: {
                id: instrumento.instrumento.id,
                nombre: instrumento.instrumento.nombre,
            },
        })),
        agrupaciones: musico.persona.personaagrupacion.map((agrupacion) => ({
            id: agrupacion.id,
            fechaAlta: agrupacion.fechaAlta,
            fechaBaja: agrupacion.fechaBaja,
            activo: agrupacion.activo,
            observaciones: agrupacion.observaciones,
            agrupacion: {
                id: agrupacion.agrupacion.id,
                nombre: agrupacion.agrupacion.nombre,
            },
        })),
        roles: musico.persona.personarolfuncional.map((rol) => ({
            id: rol.id,
            codigo: rol.rolfuncional.codigo,
            nombre: rol.rolfuncional.nombre,
            descripcion: rol.rolfuncional.descripcion,
            activo: rol.rolfuncional.activo,
        })),
    };
}
//# sourceMappingURL=miembros.js.map