import { randomUUID } from "node:crypto";
import { prisma } from "./prisma.js";

type CrearFamiliaInput = {
  nombre?: string | undefined;
};

type EditarFamiliaInput = {
  nombre?: string | undefined;
};

function normalizarNombre(nombre: string | undefined): string {
  return nombre?.trim() ?? "";
}

export async function listarFamilias() {
  return prisma.familia.findMany({
    orderBy: {
      nombre: "asc",
    },
    include: {
      _count: {
        select: {
          seccion: true,
        },
      },
    },
  });
}

export async function crearFamilia(input: CrearFamiliaInput) {
  const nombre = normalizarNombre(input.nombre);

  if (!nombre) {
    throw new Error("El nombre de la familia es obligatorio.");
  }

  const existente = await prisma.familia.findUnique({
    where: {
      nombre,
    },
    select: {
      id: true,
    },
  });

  if (existente) {
    throw new Error("Ya existe una familia con ese nombre.");
  }

  return prisma.familia.create({
    data: {
      id: randomUUID(),
      nombre,
      updatedAt: new Date(),
    },
  });
}

export async function editarFamilia(
  id: string,
  input: EditarFamiliaInput,
) {
  const nombre = normalizarNombre(input.nombre);

  if (!nombre) {
    throw new Error("El nombre de la familia es obligatorio.");
  }

  const familia = await prisma.familia.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
    },
  });

  if (!familia) {
    throw new Error("La familia no existe.");
  }

  const duplicada = await prisma.familia.findFirst({
    where: {
      nombre,
      NOT: {
        id,
      },
    },
    select: {
      id: true,
    },
  });

  if (duplicada) {
    throw new Error("Ya existe otra familia con ese nombre.");
  }

  return prisma.familia.update({
    where: {
      id,
    },
    data: {
      nombre,
      updatedAt: new Date(),
    },
  });
}
