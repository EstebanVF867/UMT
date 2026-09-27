import { prisma } from "./prisma.js";
export async function buscarPersonasDisponiblesParaMusico(busqueda) {
    const termino = busqueda.trim();
    if (!termino) {
        return [];
    }
    return prisma.persona.findMany({
        where: {
            musico: null,
            OR: [
                {
                    nombre: {
                        contains: termino,
                    },
                },
                {
                    apellidos: {
                        contains: termino,
                    },
                },
                {
                    dni: {
                        contains: termino,
                    },
                },
            ],
        },
        orderBy: [
            {
                apellidos: "asc",
            },
            {
                nombre: "asc",
            },
        ],
        take: 20,
        select: {
            id: true,
            nombre: true,
            apellidos: true,
            dni: true,
            email: true,
            telefono: true,
            activo: true,
            personarolfuncional: {
                select: {
                    rolfuncional: {
                        select: {
                            codigo: true,
                            nombre: true,
                        },
                    },
                },
            },
        },
    }).then((personas) => personas.map((persona) => ({
        id: persona.id,
        nombre: persona.nombre,
        apellidos: persona.apellidos,
        dni: persona.dni,
        email: persona.email,
        telefono: persona.telefono,
        activo: persona.activo,
        roles: persona.personarolfuncional.map((rol) => ({
            codigo: rol.rolfuncional.codigo,
            nombre: rol.rolfuncional.nombre,
        })),
    })));
}
//# sourceMappingURL=personas.js.map