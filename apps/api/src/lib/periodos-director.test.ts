import { randomUUID } from "node:crypto";
import { afterEach, describe, expect, it } from "vitest";
import { prisma } from "./prisma.js";
import {
  cerrarPeriodoDirector,
  crearPeriodoDirector,
  obtenerPeriodoActivoDirector,
  reactivarDirector,
} from "./periodos-director.js";
import { crearDirector } from "./crear-director.js";

const personasDePrueba: string[] = [];
const directoresDePrueba: string[] = [];
const agrupacionesDePrueba: string[] = [];

async function crearDirectorDePrueba() {
  const agrupacion = await prisma.agrupacion.create({
    data: {
      id: randomUUID(),
      nombre: `TEST Director ${randomUUID()}`,
      activo: true,
      updatedAt: new Date(),
    },
  });

  agrupacionesDePrueba.push(agrupacion.id);

  const resultado = await crearDirector({
    nombre: "Test",
    apellidos: `Periodos ${randomUUID()}`,
    fechaInicio: new Date("2026-09-01"),
    agrupacionIds: [agrupacion.id],
  });

  personasDePrueba.push(resultado.personaId);
  directoresDePrueba.push(resultado.director.id);

  return resultado;
}

async function limpiarDatosDePrueba() {
  for (const directorId of directoresDePrueba.splice(0)) {
    const periodos = await prisma.directorperiodo.findMany({
      where: { directorId },
      select: { id: true },
    });

    for (const periodo of periodos) {
      await prisma.directorperiodoagrupacion.deleteMany({
        where: { directorPeriodoId: periodo.id },
      });
    }

    await prisma.directorperiodo.deleteMany({
      where: { directorId },
    });

    await prisma.director.delete({
      where: { id: directorId },
    });
  }

  for (const personaId of personasDePrueba.splice(0)) {
    await prisma.personarolfuncional.deleteMany({
      where: { personaId },
    });

    await prisma.persona.delete({
      where: { id: personaId },
    });
  }

  for (const agrupacionId of agrupacionesDePrueba.splice(0)) {
    await prisma.directorperiodoagrupacion.deleteMany({
      where: { agrupacionId },
    });

    await prisma.agrupacion.delete({
      where: { id: agrupacionId },
    });
  }
}

afterEach(async () => {
  await limpiarDatosDePrueba();
});

describe("periodos-director", () => {
  it("crea un período válido", async () => {
    const director = await crearDirectorDePrueba();
    const periodoActivo = await obtenerPeriodoActivoDirector(director.director.id);

    expect(periodoActivo).not.toBeNull();

    await cerrarPeriodoDirector(
      director.director.id,
      periodoActivo!.id,
      new Date("2026-09-10"),
      "BAJA_VOLUNTARIA",
    );

    const nuevoPeriodo = await crearPeriodoDirector({
      directorId: director.director.id,
      fechaInicio: new Date("2026-09-11"),
      agrupacionIds: [agrupacionesDePrueba[0]!],
    });

    expect(nuevoPeriodo.fechaInicio).toEqual(new Date("2026-09-11"));
    expect(nuevoPeriodo.fechaFin).toBeNull();
  });

  it("rechaza un período que se solapa con otro", async () => {
    const director = await crearDirectorDePrueba();

    await expect(
      crearPeriodoDirector({
        directorId: director.director.id,
        fechaInicio: new Date("2026-09-05"),
        agrupacionIds: [agrupacionesDePrueba[0]!],
      }),
    ).rejects.toThrow();
  });

  it("permite comenzar un nuevo período al día siguiente del anterior", async () => {
    const director = await crearDirectorDePrueba();
    const periodoActivo = await obtenerPeriodoActivoDirector(director.director.id);

    expect(periodoActivo).not.toBeNull();

    await cerrarPeriodoDirector(
      director.director.id,
      periodoActivo!.id,
      new Date("2026-09-10"),
      "BAJA_VOLUNTARIA",
    );

    const nuevoPeriodo = await crearPeriodoDirector({
      directorId: director.director.id,
      fechaInicio: new Date("2026-09-11"),
      agrupacionIds: [agrupacionesDePrueba[0]!],
    });

    expect(nuevoPeriodo.fechaInicio).toEqual(new Date("2026-09-11"));
  });

  it("guarda las agrupaciones en un nuevo período", async () => {
    const director = await crearDirectorDePrueba();

    const agrupacion2 = await prisma.agrupacion.create({
      data: {
        id: randomUUID(),
        nombre: `TEST Director Periodo 2 ${randomUUID()}`,
        activo: true,
        updatedAt: new Date(),
      },
    });

    agrupacionesDePrueba.push(agrupacion2.id);

    const periodoActivo = await obtenerPeriodoActivoDirector(director.director.id);
    expect(periodoActivo).not.toBeNull();

    await cerrarPeriodoDirector(
      director.director.id,
      periodoActivo!.id,
      new Date("2026-09-10"),
      "BAJA_VOLUNTARIA",
    );

    const nuevoPeriodo = await crearPeriodoDirector({
      directorId: director.director.id,
      fechaInicio: new Date("2026-09-11"),
      agrupacionIds: [agrupacionesDePrueba[0]!, agrupacion2.id],
    });

    const relaciones = await prisma.directorperiodoagrupacion.findMany({
      where: {
        directorPeriodoId: nuevoPeriodo.id,
      },
      orderBy: {
        agrupacionId: "asc",
      },
    });

    expect(relaciones).toHaveLength(2);
    expect(relaciones.map((item) => item.agrupacionId).sort()).toEqual(
      [agrupacionesDePrueba[0], agrupacion2.id].sort(),
    );
  });

  it("rechaza crear un período sin agrupaciones", async () => {
    const director = await crearDirectorDePrueba();

    const periodoActivo = await obtenerPeriodoActivoDirector(director.director.id);
    expect(periodoActivo).not.toBeNull();

    await cerrarPeriodoDirector(
      director.director.id,
      periodoActivo!.id,
      new Date("2026-09-10"),
      "BAJA_VOLUNTARIA",
    );

    await expect(
      crearPeriodoDirector({
        directorId: director.director.id,
        fechaInicio: new Date("2026-09-11"),
        agrupacionIds: [],
      }),
    ).rejects.toThrow("Debes seleccionar al menos una agrupación.");
  });
  it("rechaza un director inexistente", async () => {
    await expect(
      crearPeriodoDirector({
        directorId: randomUUID(),
        fechaInicio: new Date("2026-09-22"),
        agrupacionIds: [agrupacionesDePrueba[0] ?? randomUUID()],
      }),
    ).rejects.toThrow("El director indicado no existe.");
  });

  it("cerrar período actualiza el período y el Director sin desactivar la Persona", async () => {
    const director = await crearDirectorDePrueba();
    const periodoActivo = await obtenerPeriodoActivoDirector(director.director.id);

    expect(periodoActivo).not.toBeNull();

    await cerrarPeriodoDirector(
      director.director.id,
      periodoActivo!.id,
      new Date("2026-09-22"),
      "BAJA_VOLUNTARIA",
    );

    const periodo = await prisma.directorperiodo.findFirst({
      where: { directorId: director.director.id },
      orderBy: { fechaInicio: "desc" },
    });

    const directorActualizado = await prisma.director.findUnique({
      where: { id: director.director.id },
      select: {
        activo: true,
        fechaBaja: true,
        personaId: true,
      },
    });

    const personaActualizada = await prisma.persona.findUnique({
      where: { id: director.personaId },
      select: {
        activo: true,
        fechaBaja: true,
      },
    });

    expect(periodo?.fechaFin).toEqual(new Date("2026-09-22"));
    expect(periodo?.motivoBaja).toBe("BAJA_VOLUNTARIA");

    expect(directorActualizado?.activo).toBe(false);
    expect(directorActualizado?.fechaBaja).toEqual(
      new Date("2026-09-22"),
    );

    expect(personaActualizada?.activo).toBe(true);
    expect(personaActualizada?.fechaBaja).toBeNull();
  });

  it("reactiva un director creando un nuevo período abierto", async () => {
    const director = await crearDirectorDePrueba();
    const periodoActivo = await obtenerPeriodoActivoDirector(director.director.id);

    expect(periodoActivo).not.toBeNull();

    await cerrarPeriodoDirector(
      director.director.id,
      periodoActivo!.id,
      new Date("2026-09-10"),
      "BAJA_VOLUNTARIA",
    );

    const nuevoPeriodo = await reactivarDirector(
      director.director.id,
      new Date("2026-09-11"),
      [agrupacionesDePrueba[0]!],
    );

    expect(nuevoPeriodo.fechaInicio).toEqual(new Date("2026-09-11"));
    expect(nuevoPeriodo.fechaFin).toBeNull();

    const periodoActivoNuevo = await obtenerPeriodoActivoDirector(
      director.director.id,
    );

    const directorActualizado = await prisma.director.findUnique({
      where: { id: director.director.id },
      select: {
        activo: true,
        fechaBaja: true,
      },
    });

    const personaActualizada = await prisma.persona.findUnique({
      where: { id: director.personaId },
      select: {
        activo: true,
        fechaBaja: true,
      },
    });

    expect(periodoActivoNuevo?.id).toBe(nuevoPeriodo.id);
    expect(directorActualizado?.activo).toBe(true);
    expect(directorActualizado?.fechaBaja).toBeNull();
    expect(personaActualizada?.activo).toBe(true);
    expect(personaActualizada?.fechaBaja).toBeNull();
  });

  it("crea varias agrupaciones en el período inicial", async () => {
    const agrupacion1 = await prisma.agrupacion.create({
      data: {
        id: randomUUID(),
        nombre: `TEST Director Multiple 1 ${randomUUID()}`,
        activo: true,
        updatedAt: new Date(),
      },
    });

    const agrupacion2 = await prisma.agrupacion.create({
      data: {
        id: randomUUID(),
        nombre: `TEST Director Multiple 2 ${randomUUID()}`,
        activo: true,
        updatedAt: new Date(),
      },
    });

    agrupacionesDePrueba.push(agrupacion1.id, agrupacion2.id);

    const resultado = await crearDirector({
      nombre: "Test",
      apellidos: `Multiple ${randomUUID()}`,
      fechaInicio: new Date("2026-09-01"),
      agrupacionIds: [agrupacion1.id, agrupacion2.id],
    });

    personasDePrueba.push(resultado.personaId);
    directoresDePrueba.push(resultado.director.id);

    const relaciones = await prisma.directorperiodoagrupacion.findMany({
      where: {
        directorPeriodoId: resultado.periodo.id,
      },
      orderBy: {
        agrupacionId: "asc",
      },
    });

    expect(relaciones).toHaveLength(2);
    expect(relaciones.map((item) => item.agrupacionId).sort()).toEqual(
      [agrupacion1.id, agrupacion2.id].sort(),
    );
  });

  it("rechaza una agrupación inexistente al crear un director", async () => {
    await expect(
      crearDirector({
        nombre: "Test",
        apellidos: `Inexistente ${randomUUID()}`,
        fechaInicio: new Date("2026-09-01"),
        agrupacionIds: [randomUUID()],
      }),
    ).rejects.toThrow("Una o más agrupaciones indicadas no existen.");
  });

  it("rechaza crear un director sin agrupaciones", async () => {
    await expect(
      crearDirector({
        nombre: "Test",
        apellidos: `Sin agrupacion ${randomUUID()}`,
        fechaInicio: new Date("2026-09-01"),
        agrupacionIds: [],
      }),
    ).rejects.toThrow("Debes seleccionar al menos una agrupación.");
  });

  it("rechaza reactivar un director que ya tiene un período abierto", async () => {
    const director = await crearDirectorDePrueba();

    await expect(
      reactivarDirector(
        director.director.id,
        new Date("2026-09-22"),
        [agrupacionesDePrueba[0]!],
      ),
    ).rejects.toThrow(
      "El director ya tiene un período de actividad abierto.",
    );
  });
});



