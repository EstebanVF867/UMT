import { prisma } from "./prisma.js";

export interface FiltrosListarAlumnos {
  estado?: "ACTIVO" | "BAJA" | "TODOS";
  busqueda?: string;
  instrumentoId?: string;
  agrupacionId?: string;
}

export async function listarAlumnos(
  filtros: FiltrosListarAlumnos = {},
) {
  const personaConditions: any[] = [];
  const whereCondition: any = {};

  if (filtros.estado === "ACTIVO") {
    whereCondition.activo = true;
  } else if (filtros.estado === "BAJA") {
    whereCondition.activo = false;
  }

  if (filtros.busqueda && filtros.busqueda.trim() !== "") {
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

  const alumnos = await prisma.alumno.findMany({
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
              principal: "desc",
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
              fechaAlta: "desc",
            },
          },
        },
      },
      alumnoperiodo: {
        orderBy: {
          fechaInicio: "desc",
        },
        take: 1,
      },
    },
    orderBy: {
      persona: {
        apellidos: "asc",
      },
    },
  });

  return alumnos.map((a) => {
    const periodoActual = a.alumnoperiodo[0] || null;
    const instrumentos = a.persona.personainstrumento;
    const instrumentoPrincipal =
      instrumentos.find((instrumento) => instrumento.principal) ?? null;
    const segundoInstrumento =
      instrumentos.find((instrumento) => !instrumento.principal) ?? null;
    const agrupacion = a.persona.personaagrupacion[0] ?? null;

    return {
      id: a.id,
      personaId: a.personaId,
      nombre: a.persona.nombre,
      apellidos: a.persona.apellidos,
      dni: a.persona.dni,
      activo: a.activo,
      fechaAlta: a.fechaAlta,
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

export async function obtenerAlumno(id: string) {
  const alumno = await prisma.alumno.findUnique({
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
      alumnoperiodo: {
        orderBy: {
          fechaInicio: "desc",
        },
      },
    },
  });

  if (!alumno) {
    return null;
  }

  return {
    id: alumno.id,
    personaId: alumno.personaId,

    persona: {
      id: alumno.persona.id,
      nombre: alumno.persona.nombre,
      apellidos: alumno.persona.apellidos,
      dni: alumno.persona.dni,
      fechaNacimiento: alumno.persona.fechaNacimiento,
      email: alumno.persona.email,
      telefono: alumno.persona.telefono,
      observaciones: alumno.persona.observaciones,
      activo: alumno.persona.activo,
      fechaBaja: alumno.persona.fechaBaja,
    },

    alumno: {
      fechaAlta: alumno.fechaAlta,
      fechaBaja: alumno.fechaBaja,
      motivoBaja: alumno.motivoBaja,
      activo: alumno.activo,
      observaciones: alumno.observaciones,
    },

    periodos: alumno.alumnoperiodo.map((periodo) => ({
      id: periodo.id,
      fechaInicio: periodo.fechaInicio,
      fechaFin: periodo.fechaFin,
      motivoBaja: periodo.motivoBaja,
      observaciones: periodo.observaciones,
    })),

    instrumentos: alumno.persona.personainstrumento.map(
      (instrumento) => ({
        id: instrumento.id,
        principal: instrumento.principal,
        fechaInicio: instrumento.fechaInicio,
        fechaFin: instrumento.fechaFin,
        observaciones: instrumento.observaciones,
        instrumento: {
          id: instrumento.instrumento.id,
          nombre: instrumento.instrumento.nombre,
        },
      }),
    ),

    agrupaciones: alumno.persona.personaagrupacion.map(
      (agrupacion) => ({
        id: agrupacion.id,
        fechaAlta: agrupacion.fechaAlta,
        fechaBaja: agrupacion.fechaBaja,
        activo: agrupacion.activo,
        observaciones: agrupacion.observaciones,
        agrupacion: {
          id: agrupacion.agrupacion.id,
          nombre: agrupacion.agrupacion.nombre,
        },
      }),
    ),

    roles: alumno.persona.personarolfuncional.map((rol) => ({
      id: rol.id,
      codigo: rol.rolfuncional.codigo,
      nombre: rol.rolfuncional.nombre,
      descripcion: rol.rolfuncional.descripcion,
      activo: rol.rolfuncional.activo,
    })),
  };
}