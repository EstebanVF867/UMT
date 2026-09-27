import { randomUUID } from "node:crypto";
import { afterEach, describe, expect, it } from "vitest";
import { prisma } from "./prisma.js";
import {
  cerrarPeriodoMusico,
  crearPeriodoMusico,
  obtenerPeriodoActivoMusico,
  reactivarMusico,
} from "./periodos-musico.js";
import { crearMusico } from "./crear-musico.js";

const personasDePrueba: string[] = [];
const musicosDePrueba: string[] = [];

async function crearMusicoDePrueba() {
  const resultado = await crearMusico({
    nombre: "Test",
    apellidos: `Periodos ${randomUUID()}`,
    fechaInicio: new Date("2026-09-01"),
  });

  personasDePrueba.push(resultado.personaId);
  musicosDePrueba.push(resultado.id);

  return resultado;
}

async function limpiarDatosDePrueba() {
  for (const musicoId of musicosDePrueba.splice(0)) {
    await prisma.musicoperiodo.deleteMany({
      where: { musicoId },
    });

    await prisma.musico.delete({
      where: { id: musicoId },
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
}

afterEach(async () => {
  await limpiarDatosDePrueba();
});

describe("periodos-musico", () => {
  it("crea un período válido", async () => {
    const musico = await crearMusicoDePrueba();

    await cerrarPeriodoMusico(
      musico.id,
      new Date("2026-09-10"),
      "BAJA_VOLUNTARIA",
    );

    const nuevoPeriodo = await crearPeriodoMusico({
      musicoId: musico.id,
      fechaInicio: new Date("2026-09-11"),
    });

    expect(nuevoPeriodo.fechaInicio).toEqual(new Date("2026-09-11"));
    expect(nuevoPeriodo.fechaFin).toBeNull();
  });

  it("rechaza un período que se solapa con otro", async () => {
    const musico = await crearMusicoDePrueba();

    await expect(
      crearPeriodoMusico({
        musicoId: musico.id,
        fechaInicio: new Date("2026-09-05"),
      }),
    ).rejects.toThrow();
  });

  it("permite comenzar un nuevo período al día siguiente del anterior", async () => {
    const musico = await crearMusicoDePrueba();

    await cerrarPeriodoMusico(
      musico.id,
      new Date("2026-09-10"),
      "BAJA_VOLUNTARIA",
    );

    const nuevoPeriodo = await crearPeriodoMusico({
      musicoId: musico.id,
      fechaInicio: new Date("2026-09-11"),
    });

    expect(nuevoPeriodo.fechaInicio).toEqual(new Date("2026-09-11"));
  });

  it("rechaza un músico inexistente", async () => {
    await expect(
      crearPeriodoMusico({
        musicoId: randomUUID(),
        fechaInicio: new Date("2026-09-22"),
      }),
    ).rejects.toThrow("El músico indicado no existe.");
  });

  it("cerrar período sincroniza el período, el músico y la Persona", async () => {
    const musico = await crearMusicoDePrueba();

    await cerrarPeriodoMusico(
      musico.id,
      new Date("2026-09-22"),
      "BAJA_VOLUNTARIA",
    );

    const periodo = await prisma.musicoperiodo.findFirst({
      where: { musicoId: musico.id },
      orderBy: { fechaInicio: "desc" },
    });

    const musicoActualizado = await prisma.musico.findUnique({
      where: { id: musico.id },
      select: {
        activo: true,
        fechaBaja: true,
        personaId: true,
      },
    });

    const personaActualizada = await prisma.persona.findUnique({
      where: { id: musico.personaId },
      select: {
        activo: true,
        fechaBaja: true,
      },
    });

    expect(periodo?.fechaFin).toEqual(new Date("2026-09-22"));
    expect(periodo?.motivoBaja).toBe("BAJA_VOLUNTARIA");

    expect(musicoActualizado?.activo).toBe(true);
    expect(musicoActualizado?.fechaBaja).toEqual(new Date("2026-09-22"));

    expect(personaActualizada?.activo).toBe(true);
    expect(personaActualizada?.fechaBaja).toEqual(new Date("2026-09-22"));
  });

  it("reactiva un músico creando un nuevo período abierto", async () => {
    const musico = await crearMusicoDePrueba();

    await cerrarPeriodoMusico(
      musico.id,
      new Date("2026-09-10"),
      "BAJA_VOLUNTARIA",
    );

    const nuevoPeriodo = await reactivarMusico(
      musico.id,
      new Date("2026-09-11"),
    );

    expect(nuevoPeriodo.fechaInicio).toEqual(new Date("2026-09-11"));
    expect(nuevoPeriodo.fechaFin).toBeNull();

    const periodoActivo = await obtenerPeriodoActivoMusico(musico.id);

    const musicoActualizado = await prisma.musico.findUnique({
      where: { id: musico.id },
      select: {
        activo: true,
        fechaBaja: true,
      },
    });

    const personaActualizada = await prisma.persona.findUnique({
      where: { id: musico.personaId },
      select: {
        activo: true,
        fechaBaja: true,
      },
    });

    expect(periodoActivo?.id).toBe(nuevoPeriodo.id);
    expect(musicoActualizado?.activo).toBe(true);
    expect(musicoActualizado?.fechaBaja).toBeNull();
    expect(personaActualizada?.activo).toBe(true);
    expect(personaActualizada?.fechaBaja).toBeNull();
  });

  it("rechaza reactivar un músico que ya tiene un período abierto", async () => {
    const musico = await crearMusicoDePrueba();

    await expect(
      reactivarMusico(
        musico.id,
        new Date("2026-09-22"),
      ),
    ).rejects.toThrow(
      "El músico ya tiene un período de actividad abierto.",
    );
  });
});
