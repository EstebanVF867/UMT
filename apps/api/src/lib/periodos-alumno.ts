import { randomUUID } from "node:crypto";
import { prisma } from "./prisma.js";

type CrearPeriodoAlumnoInput = {
  alumnoId: string;
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
  observaciones?: string | null | undefined;
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

function validarPeriodo(input: CrearPeriodoAlumnoInput) {
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

  if (input.motivoBaja === "OTRO" && !input.observaciones?.trim()) {
    throw new Error(
      "Cuando el motivo de baja es «OTRO», debes indicar una observación.",
    );
  }

  return {
    fechaInicio,
    fechaFin,
    motivoBaja: input.motivoBaja ?? null,
    observaciones: input.observaciones?.trim() || null,
  };
}

export async function listarPeriodosAlumno(alumnoId: string) {
  return prisma.alumnoperiodo.findMany({
    where: {
      alumnoId,
    },
    orderBy: {
      fechaInicio: "asc",
    },
  });
}

export async function obtenerPeriodoActivoAlumno(alumnoId: string) {
  return prisma.alumnoperiodo.findFirst({
    where: {
      alumnoId,
      fechaFin: null,
    },
    orderBy: {
      fechaInicio: "desc",
    },
  });
}

export async function crearPeriodoAlumno(
  input: CrearPeriodoAlumnoInput,
) {
  const periodo = validarPeriodo(input);

  const alumnoExistente = await prisma.alumno.findUnique({
    where: {
      id: input.alumnoId,
    },
    select: {
      id: true,
    },
  });

  if (!alumnoExistente) {
    throw new Error("El alumno indicado no existe.");
  }

  const periodosExistentes = await prisma.alumnoperiodo.findMany({
    where: {
      alumnoId: input.alumnoId,
    },
    select: {
      id: true,
      fechaInicio: true,
      fechaFin: true,
    },
  });

  const solapa = periodosExistentes.some((existente) => {
    const inicioExistente = normalizarFecha(existente.fechaInicio);
    const finExistente = existente.fechaFin
      ? normalizarFecha(existente.fechaFin)
      : null;

    const inicioNuevo = periodo.fechaInicio;
    const finNuevo = periodo.fechaFin;

    const terminaAntes =
      finNuevo !== null && finNuevo < inicioExistente;

    const empiezaDespues =
      finExistente !== null && inicioNuevo > finExistente;

    return !terminaAntes && !empiezaDespues;
  });

  if (solapa) {
    throw new Error(
      "El período indicado se solapa con otro período de actividad del alumno.",
    );
  }

  return prisma.alumnoperiodo.create({
    data: {
      id: randomUUID(),
      alumnoId: input.alumnoId,
      fechaInicio: periodo.fechaInicio,
      fechaFin: periodo.fechaFin,
      motivoBaja: periodo.motivoBaja,
      observaciones: periodo.observaciones,
      updatedAt: new Date(),
    },
  });
}

export async function cerrarPeriodoAlumno(
  alumnoId: string,
  periodoId: string,
  fechaFin: Date,
  motivoBaja:
    | "FINALIZACION_ESTUDIOS"
    | "BAJA_VOLUNTARIA"
    | "TRASLADO"
    | "ABANDONO"
    | "OTRO",
  observaciones?: string | null | undefined,
) {
  const periodoActivo = await prisma.alumnoperiodo.findFirst({
    where: {
      id: periodoId,
      alumnoId,
      fechaFin: null,
    },
  });

  if (!periodoActivo) {
    throw new Error(
      "El período de actividad indicado no existe, no pertenece al alumno o ya está cerrado.",
    );
  }

  const datos = validarPeriodo({
    alumnoId,
    fechaInicio: periodoActivo.fechaInicio,
    fechaFin,
    motivoBaja,
    observaciones,
  });

  return prisma.$transaction(async (tx) => {
    const periodoActualizado = await tx.alumnoperiodo.update({
      where: {
        id: periodoActivo.id,
      },
      data: {
        fechaFin: datos.fechaFin,
        motivoBaja: datos.motivoBaja,
        observaciones: datos.observaciones,
        updatedAt: new Date(),
      },
    });

    await tx.alumno.update({
      where: {
        id: alumnoId,
      },
      data: {
        activo: false,
        fechaBaja: datos.fechaFin,
        motivoBaja: datos.motivoBaja,
      },
    });

    return periodoActualizado;
  });
}

export async function reactivarAlumno(
  alumnoId: string,
  fechaInicio: Date,
  observaciones?: string | null | undefined,
) {
  const periodoActivo = await obtenerPeriodoActivoAlumno(alumnoId);

  if (periodoActivo) {
    throw new Error("El alumno ya tiene un período de actividad abierto.");
  }

  const datos = validarPeriodo({
    alumnoId,
    fechaInicio,
    fechaFin: null,
    motivoBaja: null,
    observaciones,
  });

  return prisma.$transaction(async (tx) => {
    const alumno = await tx.alumno.findUnique({
      where: {
        id: alumnoId,
      },
      select: {
        id: true,
      },
    });

    if (!alumno) {
      throw new Error("El alumno indicado no existe.");
    }

    const nuevoPeriodo = await tx.alumnoperiodo.create({
      data: {
        id: randomUUID(),
        alumnoId,
        fechaInicio: datos.fechaInicio,
        fechaFin: null,
        motivoBaja: null,
        observaciones: datos.observaciones,
        updatedAt: new Date(),
      },
    });

    await tx.alumno.update({
      where: {
        id: alumnoId,
      },
      data: {
        activo: true,
        fechaBaja: null,
        motivoBaja: null,
      },
    });

    return nuevoPeriodo;
  });
}
