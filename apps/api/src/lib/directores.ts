import { prisma } from "./prisma.js";

export interface FiltrosListarDirectores {
  estado?: "ACTIVO" | "BAJA" | "TODOS";
  busqueda?: string;
  agrupacionId?: string;
}

export async function listarDirectores(
  filtros: FiltrosListarDirectores = {},
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

  if (filtros.agrupacionId) {
    whereCondition.directorperiodo = {
      some: {
        fechaFin: null,
        directorperiodoagrupacion: {
          some: {
            agrupacionId: filtros.agrupacionId,
          },
        },
      },
    };
  }

  if (personaConditions.length > 0) {
    whereCondition.persona = {
      AND: personaConditions,
    };
  }

  const directores = await prisma.director.findMany({
    where: whereCondition,
    include: {
      persona: true,
      directorperiodo: {
        orderBy: {
          fechaInicio: "desc",
        },
        take: 1,
        include: {
          directorperiodoagrupacion: {
            include: {
              agrupacion: true,
            },
            orderBy: {
              agrupacion: {
                nombre: "asc",
              },
            },
          },
        },
      },
    },
    orderBy: {
      persona: {
        apellidos: "asc",
      },
    },
  });

  return directores.map((director) => {
    const periodoActual = director.directorperiodo[0] ?? null;

    return {
      id: director.id,
      personaId: director.personaId,
      nombre: director.persona.nombre,
      apellidos: director.persona.apellidos,
      dni: director.persona.dni,
      activo: director.activo,
      fechaAlta: director.fechaAlta,
      agrupaciones: periodoActual
        ? periodoActual.directorperiodoagrupacion.map(
            (asignacion) => ({
              id: asignacion.agrupacion.id,
              nombre: asignacion.agrupacion.nombre,
            }),
          )
        : [],
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

export async function obtenerDirector(id: string) {
  const director = await prisma.director.findUnique({
    where: {
      id,
    },
    include: {
      persona: {
        include: {
          personarolfuncional: {
            include: {
              rolfuncional: true,
            },
          },
        },
      },
      directorperiodo: {
        orderBy: {
          fechaInicio: "desc",
        },
        include: {
          directorperiodoagrupacion: {
            include: {
              agrupacion: true,
            },
            orderBy: {
              agrupacion: {
                nombre: "asc",
              },
            },
          },
        },
      },
    },
  });

  if (!director) {
    return null;
  }

  return {
    id: director.id,
    personaId: director.personaId,

    persona: {
      id: director.persona.id,
      nombre: director.persona.nombre,
      apellidos: director.persona.apellidos,
      dni: director.persona.dni,
      fechaNacimiento: director.persona.fechaNacimiento,
      email: director.persona.email,
      telefono: director.persona.telefono,
      observaciones: director.persona.observaciones,
      activo: director.persona.activo,
      fechaBaja: director.persona.fechaBaja,
    },

    director: {
      fechaAlta: director.fechaAlta,
      fechaBaja: director.fechaBaja,
      activo: director.activo,
      observaciones: director.observaciones,
    },

    periodos: director.directorperiodo.map((periodo) => ({
      id: periodo.id,
      fechaInicio: periodo.fechaInicio,
      fechaFin: periodo.fechaFin,
      motivoBaja: periodo.motivoBaja,
      observaciones: periodo.observaciones,
      agrupaciones: periodo.directorperiodoagrupacion.map(
        (asignacion) => ({
          id: asignacion.id,
          agrupacion: {
            id: asignacion.agrupacion.id,
            nombre: asignacion.agrupacion.nombre,
          },
        }),
      ),
    })),

    roles: director.persona.personarolfuncional.map((rol) => ({
      id: rol.id,
      codigo: rol.rolfuncional.codigo,
      nombre: rol.rolfuncional.nombre,
      descripcion: rol.rolfuncional.descripcion,
      activo: rol.rolfuncional.activo,
    })),
  };
}
