import { randomUUID } from "node:crypto";
import { prisma } from "./prisma.js";

type EditarAlumnoInput = {
  alumnoId: string;

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

  observacionesAlumno?: string | null;

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

export async function editarAlumno(input: EditarAlumnoInput) {
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
    const alumno = await tx.alumno.findUnique({
      where: {
        id: input.alumnoId,
      },
      include: {
        persona: true,
        alumnoperiodo: {
          orderBy: {
            fechaInicio: "desc",
          },
          take: 1,
        },
      },
    });

    if (!alumno) {
      throw new Error("El alumno no existe.");
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
        id: alumno.personaId,
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

    await tx.alumno.update({
      where: {
        id: input.alumnoId,
      },
      data: {
        observaciones: input.observacionesAlumno?.trim() || null,
      },
    });

    const periodoActual = alumno.alumnoperiodo[0] ?? null;

    if (periodoActual) {
      await tx.alumnoperiodo.update({
        where: {
          id: periodoActual.id,
        },
        data: {
          observaciones: input.observacionesPeriodo?.trim() || null,
          updatedAt: new Date(),
        },
      });
    }

    const instrumentosActuales =
      await tx.personainstrumento.findMany({
        where: {
          personaId: alumno.personaId,
          fechaFin: null,
        },
        orderBy: {
          principal: "desc",
        },
      });

    const instrumentoPrincipalActual =
      instrumentosActuales.find(
        (instrumento) => instrumento.principal,
      ) ?? null;

    const segundoInstrumentoActual =
      instrumentosActuales.find(
        (instrumento) => !instrumento.principal,
      ) ?? null;

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
            personaId: alumno.personaId,
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
            personaId: alumno.personaId,
            instrumentoId: input.segundoInstrumentoId,
            principal: false,
            fechaInicio: hoy,
            fechaFin: null,
            updatedAt: new Date(),
          },
        });
      }
    }

    const agrupacionActual =
      await tx.personaagrupacion.findFirst({
        where: {
          personaId: alumno.personaId,
          activo: true,
          fechaBaja: null,
        },
        orderBy: {
          fechaAlta: "desc",
        },
      });

    if (
      agrupacionActual?.agrupacionId !==
      (input.agrupacionId ?? null)
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
            personaId: alumno.personaId,
            agrupacionId: input.agrupacionId,
            fechaAlta: hoy,
            fechaBaja: null,
            activo: true,
            updatedAt: new Date(),
          },
        });
      }
    }

    return tx.alumno.findUniqueOrThrow({
      where: {
        id: input.alumnoId,
      },
      include: {
        persona: true,
        alumnoperiodo: {
          orderBy: {
            fechaInicio: "asc",
          },
        },
      },
    });
  });
}
