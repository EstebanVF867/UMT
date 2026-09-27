import { randomUUID } from "node:crypto";
import { prisma } from "./prisma.js";

export type CrearDirectorInput = {
  personaId?: string | null;
  nombre: string;
  apellidos: string;
  dni?: string | null;
  fechaNacimiento?: Date | null;
  email?: string | null;
  telefono?: string | null;
  observacionesPersona?: string | null;
  fechaInicio: Date;
  agrupacionIds: string[];
  observacionesPeriodo?: string | null;
  observacionesDirector?: string | null;
};

function normalizarFecha(fecha: Date): Date {
  return new Date(
    Date.UTC(
      fecha.getUTCFullYear(),
      fecha.getUTCMonth(),
      fecha.getUTCDate(),
    ),
  );
}

export async function crearDirector(input: CrearDirectorInput) {
  const nombre = input.nombre.trim();
  const apellidos = input.apellidos.trim();

  if (!nombre) {
    throw new Error("El nombre es obligatorio.");
  }

  if (!apellidos) {
    throw new Error("Los apellidos son obligatorios.");
  }

  const fechaInicio = normalizarFecha(input.fechaInicio);
  const hoy = normalizarFecha(new Date());

  if (fechaInicio > hoy) {
    throw new Error("La fecha de alta no puede ser futura.");
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
    let persona;

    if (input.personaId) {
      persona = await tx.persona.findUnique({
        where: {
          id: input.personaId,
        },
        include: {
          director: true,
        },
      });

      if (!persona) {
        throw new Error("La persona indicada no existe.");
      }

      if (persona.director) {
        throw new Error("La persona indicada ya es director.");
      }
    } else {
      persona = await tx.persona.create({
        data: {
          id: randomUUID(),
          nombre,
          apellidos,
          dni: input.dni?.trim() || null,
          fechaNacimiento: input.fechaNacimiento ?? null,
          email: input.email?.trim() || null,
          telefono: input.telefono?.trim() || null,
          observaciones: input.observacionesPersona?.trim() || null,
          activo: true,
          updatedAt: new Date(),
        },
        include: {
          director: true,
        },
      });
    }

    const directorExistente = await tx.director.findUnique({
      where: {
        personaId: persona.id,
      },
      select: {
        id: true,
      },
    });

    if (directorExistente) {
      throw new Error("La persona indicada ya es director.");
    }

    const director = await tx.director.create({
      data: {
        id: randomUUID(),
        personaId: persona.id,
        fechaAlta: fechaInicio,
        fechaBaja: null,
        activo: true,
        observaciones: input.observacionesDirector?.trim() || null,
      },
    });

    const rolDirector = await tx.rolfuncional.findUnique({
      where: {
        codigo: "DIRECTOR",
      },
      select: {
        id: true,
      },
    });

    if (!rolDirector) {
      throw new Error("El rol funcional DIRECTOR no existe.");
    }

    const rolExistente = await tx.personarolfuncional.findFirst({
      where: {
        personaId: persona.id,
        rolFuncionalId: rolDirector.id,
      },
      select: {
        id: true,
      },
    });

    if (!rolExistente) {
      await tx.personarolfuncional.create({
        data: {
          id: randomUUID(),
          personaId: persona.id,
          rolFuncionalId: rolDirector.id,
        },
      });
    }

    const agrupaciones = await tx.agrupacion.findMany({
      where: {
        id: {
          in: agrupacionIds,
        },
      },
      select: {
        id: true,
      },
    });

    if (agrupaciones.length !== agrupacionIds.length) {
      throw new Error("Una o más agrupaciones indicadas no existen.");
    }

    const periodo = await tx.directorperiodo.create({
      data: {
        id: randomUUID(),
        directorId: director.id,
        fechaInicio,
        fechaFin: null,
        motivoBaja: null,
        observaciones: input.observacionesPeriodo?.trim() || null,
        updatedAt: new Date(),
      },
    });

    await tx.directorperiodoagrupacion.createMany({
      data: agrupacionIds.map((agrupacionId) => ({
        id: randomUUID(),
        directorPeriodoId: periodo.id,
        agrupacionId,
        updatedAt: new Date(),
      })),
    });

    return {
      director,
      periodo,
      personaId: persona.id,
    };
  });
}

