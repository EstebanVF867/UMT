import { randomUUID } from "node:crypto";
import { prisma } from "./prisma.js";

type CrearAlumnoInput = {
  personaId?: string | null | undefined;
  nombre?: string | undefined;
  apellidos?: string | undefined;
  dni?: string | null | undefined;
  fechaNacimiento?: Date | null | undefined;
  email?: string | null | undefined;
  telefono?: string | null | undefined;
  observacionesPersona?: string | null | undefined;
  fechaInicio: Date;
  fechaFin?: Date | null | undefined;
  motivoBaja?:
    | "FINALIZACION_ESTUDIOS"
    | "BAJA_VOLUNTARIA"
    | "TRASLADO"
    | "ABANDONO"
    | "OTRO"
    | null
    | undefined;
  instrumentoPrincipalId?: string | null | undefined;
  segundoInstrumentoId?: string | null | undefined;
  agrupacionId?: string | null | undefined;
  observacionesPeriodo?: string | null | undefined;
  observacionesAlumno?: string | null | undefined;
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

function validarDatosPeriodo(input: CrearAlumnoInput) {
  const fechaInicio = normalizarFecha(input.fechaInicio);
  const fechaFin = input.fechaFin
    ? normalizarFecha(input.fechaFin)
    : null;

  const hoy = normalizarFecha(new Date());

  if (fechaInicio > hoy) {
    throw new Error(
      "La fecha de inicio no puede ser posterior a la fecha actual.",
    );
  }

  if (fechaFin && fechaFin < fechaInicio) {
    throw new Error(
      "La fecha de fin no puede ser anterior a la fecha de inicio.",
    );
  }

  if (fechaFin === null && input.motivoBaja != null) {
    throw new Error(
      "No se puede indicar un motivo de baja si no existe una fecha de fin.",
    );
  }

  if (fechaFin !== null && input.motivoBaja == null) {
    throw new Error(
      "Debes indicar un motivo de baja cuando existe una fecha de fin.",
    );
  }

  if (input.motivoBaja === "OTRO" && !input.observacionesPeriodo?.trim()) {
    throw new Error(
      "Cuando el motivo de baja es «OTRO», debes indicar una observación.",
    );
  }

  return {
    fechaInicio,
    fechaFin,
    motivoBaja: input.motivoBaja ?? null,
    observacionesPeriodo: input.observacionesPeriodo?.trim() || null,
  };
}

function estaActivoHoy(
  fechaInicio: Date,
  fechaFin: Date | null,
): boolean {
  const hoy = normalizarFecha(new Date());

  return fechaInicio <= hoy && (fechaFin === null || fechaFin >= hoy);
}

export async function crearAlumno(input: CrearAlumnoInput) {
  const nombre = input.nombre?.trim() ?? "";
  const apellidos = input.apellidos?.trim() ?? "";

  if (!input.personaId && !nombre) {
    throw new Error("El nombre es obligatorio.");
  }

  if (!input.personaId && !apellidos) {
    throw new Error("Los apellidos son obligatorios.");
  }

  const periodo = validarDatosPeriodo(input);

  return prisma.$transaction(async (tx) => {
    const rolAlumno = await tx.rolfuncional.findUnique({
      where: {
        codigo: "ALUMNO",
      },
      select: {
        id: true,
        activo: true,
      },
    });

    if (!rolAlumno || !rolAlumno.activo) {
      throw new Error(
        "El rol funcional «ALUMNO» no está disponible.",
      );
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

    let personaId: string;

    if (input.personaId) {
      const personaExistente = await tx.persona.findUnique({
        where: {
          id: input.personaId,
        },
        select: {
          id: true,
          alumno: {
            select: {
              id: true,
            },
          },
        },
      });

      if (!personaExistente) {
        throw new Error("La persona seleccionada no existe.");
      }

      if (personaExistente.alumno) {
        throw new Error(
          "La persona seleccionada ya está registrada como alumno.",
        );
      }

      personaId = personaExistente.id;
    } else {
      personaId = randomUUID();

      await tx.persona.create({
        data: {
          id: personaId,
          nombre,
          apellidos,
          dni: input.dni?.trim() || null,
          fechaNacimiento: input.fechaNacimiento
            ? normalizarFecha(input.fechaNacimiento)
            : null,
          email: input.email?.trim() || null,
          telefono: input.telefono?.trim() || null,
          observaciones: input.observacionesPersona?.trim() || null,
          activo: estaActivoHoy(
            periodo.fechaInicio,
            periodo.fechaFin,
          ),
          fechaBaja: periodo.fechaFin,
          updatedAt: new Date(),
        },
      });
    }

    const alumnoId = randomUUID();

    await tx.alumno.create({
      data: {
        id: alumnoId,
        personaId,
        fechaAlta: periodo.fechaInicio,
        fechaBaja: periodo.fechaFin,
        motivoBaja: periodo.motivoBaja,
        activo: estaActivoHoy(
          periodo.fechaInicio,
          periodo.fechaFin,
        ),
        observaciones: input.observacionesAlumno?.trim() || null,
      },
    });

    const rolExistente = await tx.personarolfuncional.findUnique({
      where: {
        personaId_rolFuncionalId: {
          personaId,
          rolFuncionalId: rolAlumno.id,
        },
      },
      select: {
        id: true,
      },
    });

    if (!rolExistente) {
      await tx.personarolfuncional.create({
        data: {
          id: randomUUID(),
          personaId,
          rolFuncionalId: rolAlumno.id,
        },
      });
    }

    await tx.alumnoperiodo.create({
      data: {
        id: randomUUID(),
        alumnoId,
        fechaInicio: periodo.fechaInicio,
        fechaFin: periodo.fechaFin,
        motivoBaja: periodo.motivoBaja,
        observaciones: periodo.observacionesPeriodo,
        updatedAt: new Date(),
      },
    });

    if (input.instrumentoPrincipalId) {
      await tx.personainstrumento.create({
        data: {
          id: randomUUID(),
          personaId,
          instrumentoId: input.instrumentoPrincipalId,
          principal: true,
          fechaInicio: periodo.fechaInicio,
          fechaFin: periodo.fechaFin,
          updatedAt: new Date(),
        },
      });
    }

    if (input.segundoInstrumentoId) {
      await tx.personainstrumento.create({
        data: {
          id: randomUUID(),
          personaId,
          instrumentoId: input.segundoInstrumentoId,
          principal: false,
          fechaInicio: periodo.fechaInicio,
          fechaFin: periodo.fechaFin,
          updatedAt: new Date(),
        },
      });
    }

    if (input.agrupacionId) {
      await tx.personaagrupacion.create({
        data: {
          id: randomUUID(),
          personaId,
          agrupacionId: input.agrupacionId,
          fechaAlta: periodo.fechaInicio,
          fechaBaja: periodo.fechaFin,
          activo: estaActivoHoy(
            periodo.fechaInicio,
            periodo.fechaFin,
          ),
          updatedAt: new Date(),
        },
      });
    }

    return tx.alumno.findUniqueOrThrow({
      where: {
        id: alumnoId,
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

