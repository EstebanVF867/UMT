import { randomUUID } from "node:crypto";
import { prisma } from "./prisma.js";

type CrearPeriodoDirectorInput = {
  directorId: string;
  fechaInicio: Date;
  agrupacionIds: string[];
  fechaFin?: Date | null | undefined;
  motivoBaja?:
    | "BAJA_VOLUNTARIA"
    | "FIN_RELACION"
    | "OTRO"
    | null
    | undefined;
  observaciones?: string | null | undefined;
};

type ValidarPeriodoInput = {
  directorId: string;
  fechaInicio: Date;
  fechaFin?: Date | null | undefined;
  motivoBaja?:
    | "BAJA_VOLUNTARIA"
    | "FIN_RELACION"
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

function validarPeriodo(input: ValidarPeriodoInput) {
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

export async function listarPeriodosDirector(directorId: string) {
  return prisma.directorperiodo.findMany({
    where: {
      directorId,
    },
    orderBy: {
      fechaInicio: "asc",
    },
    include: {
      directorperiodoagrupacion: {
        include: {
          agrupacion: true,
        },
      },
    },
  });
}

export async function obtenerPeriodoActivoDirector(directorId: string) {
  return prisma.directorperiodo.findFirst({
    where: {
      directorId,
      fechaFin: null,
    },
    orderBy: {
      fechaInicio: "desc",
    },
    include: {
      directorperiodoagrupacion: {
        include: {
          agrupacion: true,
        },
      },
    },
  });
}

export async function crearPeriodoDirector(
  input: CrearPeriodoDirectorInput,
) {
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

  const periodo = validarPeriodo(input);

  const directorExistente = await prisma.director.findUnique({
    where: {
      id: input.directorId,
    },
    select: {
      id: true,
    },
  });

  if (!directorExistente) {
    throw new Error("El director indicado no existe.");
  }

  const periodosExistentes = await prisma.directorperiodo.findMany({
    where: {
      directorId: input.directorId,
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
      "El período indicado se solapa con otro período de actividad del director.",
    );
  }

  const agrupaciones = await prisma.agrupacion.findMany({
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

  return prisma.$transaction(async (tx) => {
    const nuevoPeriodo = await tx.directorperiodo.create({
      data: {
        id: randomUUID(),
        directorId: input.directorId,
        fechaInicio: periodo.fechaInicio,
        fechaFin: periodo.fechaFin,
        motivoBaja: periodo.motivoBaja,
        observaciones: periodo.observaciones,
        updatedAt: new Date(),
      },
    });

    await tx.directorperiodoagrupacion.createMany({
      data: agrupacionIds.map((agrupacionId) => ({
        id: randomUUID(),
        directorPeriodoId: nuevoPeriodo.id,
        agrupacionId,
        updatedAt: new Date(),
      })),
    });

    return nuevoPeriodo;
  });
}

export async function cerrarPeriodoDirector(
  directorId: string,
  periodoId: string,
  fechaFin: Date,
  motivoBaja: "BAJA_VOLUNTARIA" | "FIN_RELACION" | "OTRO",
  observaciones?: string | null | undefined,
) {
  const periodoActivo = await prisma.directorperiodo.findFirst({
    where: {
      id: periodoId,
      directorId,
      fechaFin: null,
    },
  });

  if (!periodoActivo) {
    throw new Error(
      "El período de actividad indicado no existe, no pertenece al director o ya está cerrado.",
    );
  }

  const datos = validarPeriodo({
    directorId,
    fechaInicio: periodoActivo.fechaInicio,
    fechaFin,
    motivoBaja,
    observaciones,
  });

  return prisma.$transaction(async (tx) => {
    const periodoActualizado = await tx.directorperiodo.update({
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

    await tx.director.update({
      where: {
        id: directorId,
      },
      data: {
        activo: false,
        fechaBaja: datos.fechaFin,
      },
    });

    return periodoActualizado;
  });
}

export async function reactivarDirector(
  directorId: string,
  fechaInicio: Date,
  agrupacionIds: string[],
  observaciones?: string | null | undefined,
) {
  const agrupacionIdsNormalizados = [
    ...new Set(
      agrupacionIds
        .map((id) => id.trim())
        .filter((id) => id.length > 0),
    ),
  ];

  if (agrupacionIdsNormalizados.length === 0) {
    throw new Error("Debes seleccionar al menos una agrupación.");
  }

  const periodoActivo = await obtenerPeriodoActivoDirector(directorId);

  if (periodoActivo) {
    throw new Error("El director ya tiene un período de actividad abierto.");
  }

  const datos = validarPeriodo({
    directorId,
    fechaInicio,
    fechaFin: null,
    motivoBaja: null,
    observaciones,
  });

  return prisma.$transaction(async (tx) => {
    const director = await tx.director.findUnique({
      where: {
        id: directorId,
      },
      select: {
        id: true,
        personaId: true,
      },
    });

    if (!director) {
      throw new Error("El director indicado no existe.");
    }

    const agrupaciones = await tx.agrupacion.findMany({
      where: {
        id: {
          in: agrupacionIdsNormalizados,
        },
      },
      select: {
        id: true,
      },
    });

    if (agrupaciones.length !== agrupacionIdsNormalizados.length) {
      throw new Error("Una o más agrupaciones indicadas no existen.");
    }

    const nuevoPeriodo = await tx.directorperiodo.create({
      data: {
        id: randomUUID(),
        directorId,
        fechaInicio: datos.fechaInicio,
        fechaFin: null,
        motivoBaja: null,
        observaciones: datos.observaciones,
        updatedAt: new Date(),
      },
    });

    await tx.directorperiodoagrupacion.createMany({
      data: agrupacionIdsNormalizados.map((agrupacionId) => ({
        id: randomUUID(),
        directorPeriodoId: nuevoPeriodo.id,
        agrupacionId,
        updatedAt: new Date(),
      })),
    });

    await tx.director.update({
      where: {
        id: directorId,
      },
      data: {
        activo: true,
        fechaBaja: null,
      },
    });

    await tx.persona.update({
      where: {
        id: director.personaId,
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