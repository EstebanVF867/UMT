import { randomUUID } from "node:crypto";
import { prisma } from "./prisma.js";

type CrearPeriodoMusicoInput = {
  musicoId: string;
  fechaInicio: Date;
  fechaFin?: Date | null | undefined;
  motivoBaja?:
    | "BAJA_VOLUNTARIA"
    | "DEJA_DE_PERTENECER_UMT"
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
function estaActivoHoy(fechaInicio: Date, fechaFin: Date | null): boolean {
  const hoy = normalizarFecha(new Date());

  return fechaInicio <= hoy && (fechaFin === null || fechaFin >= hoy);
}

function validarPeriodo(input: CrearPeriodoMusicoInput) {
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
export async function listarPeriodosMusico(musicoId: string) {
  return prisma.musicoperiodo.findMany({
    where: {
      musicoId,
    },
    orderBy: {
      fechaInicio: "asc",
    },
  });
}

export async function obtenerPeriodoActivoMusico(musicoId: string) {
  return prisma.musicoperiodo.findFirst({
    where: {
      musicoId,
      fechaFin: null,
    },
    orderBy: {
      fechaInicio: "desc",
    },
  });
}

export async function crearPeriodoMusico(input: CrearPeriodoMusicoInput) {
  const periodo = validarPeriodo(input);
  const musicoExistente = await prisma.musico.findUnique({
    where: {
      id: input.musicoId,
    },
    select: {
      id: true,
    },
  });

  if (!musicoExistente) {
    throw new Error("El músico indicado no existe.");
  }


  const periodosExistentes = await prisma.musicoperiodo.findMany({
    where: {
      musicoId: input.musicoId,
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
      "El período indicado se solapa con otro período de actividad del músico.",
    );
  }

  return prisma.musicoperiodo.create({
    data: {
      id: randomUUID(),
      musicoId: input.musicoId,
      fechaInicio: periodo.fechaInicio,
      fechaFin: periodo.fechaFin,
      motivoBaja: periodo.motivoBaja,
      observaciones: periodo.observaciones,
      updatedAt: new Date(),
    },
  });
}

export async function cerrarPeriodoMusico(
  musicoId: string,
  periodoId: string,
  fechaFin: Date,
  motivoBaja: "BAJA_VOLUNTARIA" | "DEJA_DE_PERTENECER_UMT" | "OTRO",
  observaciones?: string | null | undefined,
) {
  const periodoActivo = await prisma.musicoperiodo.findFirst({
    where: {
      id: periodoId,
      musicoId,
      fechaFin: null,
    },
  });

  if (!periodoActivo) {
    throw new Error(
      "El período de actividad indicado no existe, no pertenece al músico o ya está cerrado.",
    );
  }

  const datos = validarPeriodo({
    musicoId,
    fechaInicio: periodoActivo.fechaInicio,
    fechaFin,
    motivoBaja,
    observaciones,
  });

  return prisma.$transaction(async (tx) => {
    const periodoActualizado = await tx.musicoperiodo.update({
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

    await tx.musico.update({
      where: {
        id: musicoId,
      },
      data: {
        activo: false,
        fechaBaja: datos.fechaFin,
      },
    });

    return periodoActualizado;
  });
}

export async function reactivarMusico(
  musicoId: string,
  fechaInicio: Date,
  observaciones?: string | null | undefined,
) {
  const periodoActivo = await obtenerPeriodoActivoMusico(musicoId);

  if (periodoActivo) {
    throw new Error("El músico ya tiene un período de actividad abierto.");
  }

  const datos = validarPeriodo({
    musicoId,
    fechaInicio,
    fechaFin: null,
    motivoBaja: null,
    observaciones,
  });

  return prisma.$transaction(async (tx) => {
    const musico = await tx.musico.findUnique({
      where: {
        id: musicoId,
      },
      select: {
        id: true,
        personaId: true,
      },
    });

    if (!musico) {
      throw new Error("El músico indicado no existe.");
    }

    const nuevoPeriodo = await tx.musicoperiodo.create({
      data: {
        id: randomUUID(),
        musicoId,
        fechaInicio: datos.fechaInicio,
        fechaFin: null,
        motivoBaja: null,
        observaciones: datos.observaciones,
        updatedAt: new Date(),
      },
    });

    await tx.musico.update({
      where: {
        id: musicoId,
      },
      data: {
        activo: true,
        fechaBaja: null,
      },
    });

    await tx.persona.update({
      where: {
        id: musico.personaId,
      },
      data: {
        activo: true,
        fechaBaja: null,
        updatedAt: new Date(),
      },
    });

    return nuevoPeriodo;
  });
}

