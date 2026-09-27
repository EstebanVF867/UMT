import { prisma } from "./prisma.js";

export async function listarPersonas() {
  return prisma.persona.findMany({
    orderBy: [
      { apellidos: "asc" },
      { nombre: "asc" },
    ],
  });
}

export async function buscarPersonas(termino: string) {
  const texto = termino.trim();

  if (texto.length < 2) {
    return [];
  }

  const personas = await prisma.persona.findMany({
    where: {
      OR: [
        {
          nombre: {
            contains: texto,
          },
        },
        {
          apellidos: {
            contains: texto,
          },
        },
        {
          dni: {
            contains: texto,
          },
        },
      ],
    },
    orderBy: [
      { apellidos: "asc" },
      { nombre: "asc" },
    ],
    take: 20,
    select: {
      id: true,
      nombre: true,
      apellidos: true,
      dni: true,
      musico: {
        select: {
          id: true,
        },
      },
    },
  });

  return personas.map((persona) => ({
    id: persona.id,
    nombre: persona.nombre,
    apellidos: persona.apellidos,
    dni: persona.dni,
    esMusico: persona.musico !== null,
  }));
}
