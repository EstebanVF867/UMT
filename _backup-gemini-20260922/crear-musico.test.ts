import { randomUUID } from "node:crypto";
import { afterEach, describe, expect, it } from "vitest";
import { prisma } from "./prisma.js";
import { crearMusico } from "./crear-musico.js";

const personasDePrueba: string[] = [];
const musicosDePrueba: string[] = [];

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

describe("crearMusico", () => {
  it("crea correctamente una Persona, un Músico, su rol y su período", async () => {
    const resultado = await crearMusico({
      nombre: "Test",
      apellidos: `Músico ${randomUUID()}`,
      fechaInicio: new Date("2026-09-22"),
    });

    personasDePrueba.push(resultado.personaId);
    musicosDePrueba.push(resultado.id);

    expect(resultado.persona.nombre).toBe("Test");
    expect(resultado.persona.apellidos).toContain("Músico");
    expect(resultado.activo).toBe(true);
    expect(resultado.musicoperiodo).toHaveLength(1);
    expect(resultado.musicoperiodo[0]?.fechaFin).toBeNull();

    const rol = await prisma.personarolfuncional.findFirst({
      where: {
        personaId: resultado.personaId,
        rolfuncional: {
          codigo: "MUSICO",
        },
      },
    });

    expect(rol).not.toBeNull();
  });

  it("rechaza una fecha de inicio futura", async () => {
    await expect(
      crearMusico({
        nombre: "Test",
        apellidos: `Futuro ${randomUUID()}`,
        fechaInicio: new Date("2099-01-01"),
      }),
    ).rejects.toThrow(
      "La fecha de inicio no puede ser posterior a la fecha actual.",
    );
  });

  it("rechaza una fecha de fin anterior al inicio", async () => {
    await expect(
      crearMusico({
        nombre: "Test",
        apellidos: `Fechas ${randomUUID()}`,
        fechaInicio: new Date("2026-09-22"),
        fechaFin: new Date("2026-09-21"),
        motivoBaja: "BAJA_VOLUNTARIA",
      }),
    ).rejects.toThrow(
      "La fecha de fin no puede ser anterior a la fecha de inicio.",
    );
  });

  it("rechaza una fecha de fin sin motivo de baja", async () => {
    await expect(
      crearMusico({
        nombre: "Test",
        apellidos: `Sin motivo ${randomUUID()}`,
        fechaInicio: new Date("2026-09-20"),
        fechaFin: new Date("2026-09-22"),
      }),
    ).rejects.toThrow(
      "Debes indicar un motivo de baja cuando existe una fecha de fin.",
    );
  });

  it("rechaza un motivo de baja sin fecha de fin", async () => {
    await expect(
      crearMusico({
        nombre: "Test",
        apellidos: `Sin fecha ${randomUUID()}`,
        fechaInicio: new Date("2026-09-20"),
        motivoBaja: "BAJA_VOLUNTARIA",
      }),
    ).rejects.toThrow(
      "No se puede indicar un motivo de baja si no existe una fecha de fin.",
    );
  });

  it("rechaza OTRO sin observaciones", async () => {
    await expect(
      crearMusico({
        nombre: "Test",
        apellidos: `Otro ${randomUUID()}`,
        fechaInicio: new Date("2026-09-20"),
        fechaFin: new Date("2026-09-22"),
        motivoBaja: "OTRO",
      }),
    ).rejects.toThrow();
  });

  it("crea correctamente un músico con período cerrado", async () => {
    const resultado = await crearMusico({
      nombre: "Test",
      apellidos: `Baja ${randomUUID()}`,
      fechaInicio: new Date("2026-09-01"),
      fechaFin: new Date("2026-09-22"),
      motivoBaja: "BAJA_VOLUNTARIA",
    });

    personasDePrueba.push(resultado.personaId);
    musicosDePrueba.push(resultado.id);

    expect(resultado.activo).toBe(true);
    expect(resultado.fechaBaja).toEqual(new Date("2026-09-22"));

    const periodo = resultado.musicoperiodo[0];

    expect(periodo?.fechaFin).toEqual(new Date("2026-09-22"));
    expect(periodo?.motivoBaja).toBe("BAJA_VOLUNTARIA");
  });

  it("rechaza una Persona que ya está registrada como músico", async () => {
    const primero = await crearMusico({
      nombre: "Test",
      apellidos: `Duplicado ${randomUUID()}`,
      fechaInicio: new Date("2026-09-22"),
    });

    personasDePrueba.push(primero.personaId);
    musicosDePrueba.push(primero.id);

    await expect(
      crearMusico({
        personaId: primero.personaId,
        fechaInicio: new Date("2026-09-22"),
      }),
    ).rejects.toThrow(
      "La persona seleccionada ya está registrada como músico.",
    );
  });

  it("rechaza una Persona inexistente", async () => {
    await expect(
      crearMusico({
        personaId: randomUUID(),
        fechaInicio: new Date("2026-09-22"),
      }),
    ).rejects.toThrow("La persona seleccionada no existe.");
  });
});
