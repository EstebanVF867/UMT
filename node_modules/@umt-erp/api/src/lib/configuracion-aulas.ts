import { randomUUID } from "node:crypto";
import { prisma } from "./prisma.js";

type CrearAulaInput = {
  nombre?: string | undefined;
  descripcion?: string | undefined;
  capacidad?: number | undefined;
};

type EditarAulaInput = {
  nombre?: string | undefined;
  descripcion?: string | undefined;
  capacidad?: number | undefined;
  activo?: boolean | undefined;
};

function normalizarNombre(nombre: string | undefined): string {
  return nombre?.trim() ?? "";
}

function normalizarDescripcion(
  descripcion: string | undefined,
): string | null {
  const valor = descripcion?.trim() ?? "";
  return valor || null;
}

function normalizarCapacidad(capacidad: number | undefined): number | null {
  if (capacidad === undefined) {
    return null;
  }

  if (!Number.isInteger(capacidad) || capacidad < 0) {
    throw new Error("La capacidad debe ser un número entero igual o superior a 0.");
  }

  return capacidad;
}

export async function listarAulas() {
  return prisma.aula.findMany({
    orderBy: {
      nombre: "asc",
    },
  });
}

export async function crearAula(input: CrearAulaInput) {
  const nombre = normalizarNombre(input.nombre);
  const descripcion = normalizarDescripcion(input.descripcion);
  const capacidad = normalizarCapacidad(input.capacidad);

  if (!nombre) {
    throw new Error("El nombre del aula es obligatorio.");
  }

  const existente = await prisma.aula.findFirst({
    where: {
      nombre,
    },
    select: {
      id: true,
    },
  });

  if (existente) {
    throw new Error("Ya existe un aula con ese nombre.");
  }

  return prisma.aula.create({
    data: {
      id: randomUUID(),
      nombre,
      descripcion,
      capacidad,
      updatedAt: new Date(),
    },
  });
}

export async function editarAula(
  id: string,
  input: EditarAulaInput,
) {
  const nombre = normalizarNombre(input.nombre);
  const descripcion = normalizarDescripcion(input.descripcion);
  const capacidad = normalizarCapacidad(input.capacidad);

  if (!nombre) {
    throw new Error("El nombre del aula es obligatorio.");
  }

  const aula = await prisma.aula.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      activo: true,
    },
  });

  if (!aula) {
    throw new Error("El aula no existe.");
  }

  const duplicada = await prisma.aula.findFirst({
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
    throw new Error("Ya existe otra aula con ese nombre.");
  }

  return prisma.aula.update({
    where: {
      id,
    },
    data: {
      nombre,
      descripcion,
      capacidad,
      activo: input.activo ?? aula.activo,
      updatedAt: new Date(),
    },
  });
}
