import { randomUUID } from "node:crypto";
import { prisma } from "./prisma.js";

type EditarMusicoInput = {
  musicoId: string;

  nombre: string;
  apellidos: string;
  dni?: string | null;
  fechaNacimiento?: Date | null;
  email?: string | null;
  telefono?: string | null;
  observacionesPersona?: string | null;

  instrumentoPrincipalId?: string | null;
  segundoInstrumentoId?: string | null;
  agrupacionId?: string | null;

  observacionesMusico?: string | null;

  observacionesPeriodo?: string | null;
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

function obtenerFechaHoy(): Date {
  return normalizarFecha(new Date());
}

export async function editarMusico(input: EditarMusicoInput) {
  const nombre = input.nombre.trim();
  const apellidos = input.apellidos.trim();

  if (!nombre) {
    throw new Error("El nombre es obligatorio.");
  }

  if (!apellidos) {
    throw new Error("Los apellidos son obligatorios.");
  }

  if (
    input.instrumentoPrincipalId &&
    input.segundoInstrumentoId &&
    input.instrumentoPrincipalId === input.segundoInstrumentoId
  ) {
    throw new Error(
      "El instrumento principal y el segundo instrumento no pueden ser el mismo.",
    );
  }

  const instrumentoIds = [
    input.instrumentoPrincipalId,
    input.segundoInstrumentoId,
  ].filter((id): id is string => Boolean(id));

  return prisma.$transaction(async (tx) => {
    const musico = await tx.musico.findUnique({
      where: {
        id: input.musicoId,
      },
      include: {
        persona: true,
        musicoperiodo: {
          orderBy: {
            fechaInicio: "desc",
          },
          take: 1,
        },
      },
    });

    if (!musico) {
      throw new Error("El músico no existe.");
    }

    if (instrumentoIds.length > 0) {
      const instrumentos = await tx.instrumento.findMany({
        where: {
          id: {
            in: instrumentoIds,
          },
          activo: true,
        },
        select: {
          id: true,
        },
      });

      if (instrumentos.length !== instrumentoIds.length) {
        throw new Error(
          "Uno de los instrumentos seleccionados no existe o está inactivo.",
        );
      }
    }

    if (input.agrupacionId) {
      const agrupacion = await tx.agrupacion.findUnique({
        where: {
          id: input.agrupacionId,
        },
        select: {
          id: true,
          activo: true,
        },
      });

      if (!agrupacion || !agrupacion.activo) {
        throw new Error(
          "La agrupación seleccionada no existe o está inactiva.",
        );
      }
    }

    const hoy = obtenerFechaHoy();

    await tx.persona.update({
      where: {
        id: musico.personaId,
      },
      data: {
        nombre,
        apellidos,
        dni: input.dni?.trim() || null,
        fechaNacimiento: input.fechaNacimiento
          ? normalizarFecha(input.fechaNacimiento)
          : null,
        email: input.email?.trim() || null,
        telefono: input.telefono?.trim() || null,
        observaciones: input.observacionesPersona?.trim() || null,
        updatedAt: new Date(),
      },
    });

    await tx.musico.update({
      where: {
        id: input.musicoId,
      },
      data: {
        observaciones: input.observacionesMusico?.trim() || null,
      },
    });

    const periodoActual = musico.musicoperiodo[0] ?? null;

    if (periodoActual) {
      await tx.musicoperiodo.update({
        where: {
          id: periodoActual.id,
        },
        data: {
          observaciones: input.observacionesPeriodo?.trim() || null,
          updatedAt: new Date(),
        },
      });
    }

    const instrumentosActuales = await tx.personainstrumento.findMany({
      where: {
        personaId: musico.personaId,
        fechaFin: null,
      },
      orderBy: {
        principal: "desc",
      },
    });

    const instrumentoPrincipalActual =
      instrumentosActuales.find((instrumento) => instrumento.principal) ?? null;

    const segundoInstrumentoActual =
      instrumentosActuales.find((instrumento) => !instrumento.principal) ?? null;

    if (
      instrumentoPrincipalActual?.instrumentoId !==
      (input.instrumentoPrincipalId ?? null)
    ) {
      if (instrumentoPrincipalActual) {
        await tx.personainstrumento.update({
          where: {
            id: instrumentoPrincipalActual.id,
          },
          data: {
            fechaFin: hoy,
            updatedAt: new Date(),
          },
        });
      }

      if (input.instrumentoPrincipalId) {
        await tx.personainstrumento.create({
          data: {
            id: randomUUID(),
            personaId: musico.personaId,
            instrumentoId: input.instrumentoPrincipalId,
            principal: true,
            fechaInicio: hoy,
            fechaFin: null,
            updatedAt: new Date(),
          },
        });
      }
    }

    if (
      segundoInstrumentoActual?.instrumentoId !==
      (input.segundoInstrumentoId ?? null)
    ) {
      if (segundoInstrumentoActual) {
        await tx.personainstrumento.update({
          where: {
            id: segundoInstrumentoActual.id,
          },
          data: {
            fechaFin: hoy,
            updatedAt: new Date(),
          },
        });
      }

      if (input.segundoInstrumentoId) {
        await tx.personainstrumento.create({
          data: {
            id: randomUUID(),
            personaId: musico.personaId,
            instrumentoId: input.segundoInstrumentoId,
            principal: false,
            fechaInicio: hoy,
            fechaFin: null,
            updatedAt: new Date(),
          },
        });
      }
    }

    const agrupacionActual = await tx.personaagrupacion.findFirst({
      where: {
        personaId: musico.personaId,
        activo: true,
        fechaBaja: null,
      },
      orderBy: {
        fechaAlta: "desc",
      },
    });

    if (
      agrupacionActual?.agrupacionId !== (input.agrupacionId ?? null)
    ) {
      if (agrupacionActual) {
        await tx.personaagrupacion.update({
          where: {
            id: agrupacionActual.id,
          },
          data: {
            fechaBaja: hoy,
            activo: false,
            updatedAt: new Date(),
          },
        });
      }

      if (input.agrupacionId) {
        await tx.personaagrupacion.create({
          data: {
            id: randomUUID(),
            personaId: musico.personaId,
            agrupacionId: input.agrupacionId,
            fechaAlta: hoy,
            fechaBaja: null,
            activo: true,
            updatedAt: new Date(),
          },
        });
      }
    }

    return tx.musico.findUniqueOrThrow({
      where: {
        id: input.musicoId,
      },
      include: {
        persona: true,
        musicoperiodo: {
          orderBy: {
            fechaInicio: "asc",
          },
        },
      },
    });
  });
}