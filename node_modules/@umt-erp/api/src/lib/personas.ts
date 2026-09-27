import { prisma } from "./prisma.js";

export type PersonaDisponibleParaMusico = {
  id: string;
  nombre: string;
  apellidos: string;
  dni: string | null;
  email: string | null;
  telefono: string | null;
  activo: boolean;
  roles: {
    codigo: string;
    nombre: string;
  }[];
};

export async function buscarPersonasDisponiblesParaMusico(
  busqueda: string,
): Promise<PersonaDisponibleParaMusico[]> {
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
  }).then((personas) =>
    personas.map((persona) => ({
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
    })),
  );
}
export async function buscarPersonasDisponiblesParaAlumno(
  busqueda: string,
): Promise<PersonaDisponibleParaMusico[]> {
  const termino = busqueda.trim();

  if (!termino) {
    return [];
  }

  return prisma.persona.findMany({
    where: {
      alumno: null,
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
  }).then((personas) =>
    personas.map((persona) => ({
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
    })),
  );
}
export async function buscarPersonasDisponiblesParaDirector(
  busqueda: string,
): Promise<PersonaDisponibleParaMusico[]> {
  const termino = busqueda.trim();

  if (!termino) {
    return [];
  }

  return prisma.persona.findMany({
    where: {
      director: null,
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
  }).then((personas) =>
    personas.map((persona) => ({
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
    })),
  );
}
