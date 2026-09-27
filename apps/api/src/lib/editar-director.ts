import { prisma } from "./prisma.js";

export type EditarDirectorInput = {
  directorId: string;
  nombre: string;
  apellidos: string;
  dni?: string | null;
  fechaNacimiento?: Date | null;
  email?: string | null;
  telefono?: string | null;
  observacionesPersona?: string | null;
  observacionesDirector?: string | null;
  agrupacionIds: string[];
  observacionesPeriodo?: string | null;
};

export async function editarDirector(input: EditarDirectorInput) {
  const nombre = input.nombre.trim();
  const apellidos = input.apellidos.trim();

  if (!nombre) {
    throw new Error("El nombre es obligatorio.");
  }

  if (!apellidos) {
    throw new Error("Los apellidos son obligatorios.");
  }

  const agrupacionIds = [
    ...new Set(
      input.agrupacionIds
        .map((id) => id.trim())
        .filter((id) => id.length > 0),
    ),
  ];

  if (agrupacionIds.length === 0) {
    throw new Error("Debes seleccionar al menos una agrupación.");
  }

  return prisma.$transaction(async (tx) => {
    const director = await tx.director.findUnique({
      where: {
        id: input.directorId,
      },
      include: {
        persona: true,
      },
    });

    if (!director) {
      throw new Error("El director no existe.");
    }

    if (!director.activo || !director.persona.activo) {
      throw new Error(
        "No se puede editar el período actual de un director dado de baja.",
      );
    }

    const periodoActual = await tx.directorperiodo.findFirst({
      where: {
        directorId: director.id,
        fechaFin: null,
      },
      orderBy: {
        fechaInicio: "desc",
      },
    });

    if (!periodoActual) {
      throw new Error(
        "El director no tiene un período de actividad abierto.",
      );
    }

    const agrupaciones = await tx.agrupacion.findMany({
      where: {
        id: {
          in: agrupacionIds,
        },
        activo: true,
      },
      select: {
        id: true,
      },
    });

    if (agrupaciones.length !== agrupacionIds.length) {
      throw new Error(
        "Una o más agrupaciones indicadas no existen o están inactivas.",
      );
    }

    const fechaActualizacion = new Date();

    const persona = await tx.persona.update({
      where: {
        id: director.personaId,
      },
      data: {
        nombre,
        apellidos,
        dni: input.dni?.trim() || null,
        fechaNacimiento: input.fechaNacimiento ?? null,
        email: input.email?.trim() || null,
        telefono: input.telefono?.trim() || null,
        observaciones: input.observacionesPersona?.trim() || null,
        updatedAt: fechaActualizacion,
      },
    });

    const directorActualizado = await tx.director.update({
      where: {
        id: director.id,
      },
      data: {
        observaciones: input.observacionesDirector?.trim() || null,
      },
    });

    await tx.directorperiodo.update({
      where: {
        id: periodoActual.id,
      },
      data: {
        observaciones: input.observacionesPeriodo?.trim() || null,
        updatedAt: fechaActualizacion,
      },
    });

    await tx.directorperiodoagrupacion.deleteMany({
      where: {
        directorPeriodoId: periodoActual.id,
      },
    });

    await tx.directorperiodoagrupacion.createMany({
      data: agrupacionIds.map((agrupacionId) => ({
        id: crypto.randomUUID(),
        directorPeriodoId: periodoActual.id,
        agrupacionId,
        updatedAt: fechaActualizacion,
      })),
    });

    return {
      director: directorActualizado,
      periodoId: periodoActual.id,
      persona,
      agrupacionIds,
    };
  });
}
