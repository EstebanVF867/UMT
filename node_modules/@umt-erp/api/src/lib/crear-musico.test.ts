import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { prisma } from "./prisma.js";
import { crearMusico } from "./crear-musico.js";

describe("crearMusico", () => {
  let personaId: string;

  beforeEach(async () => {
    personaId = "";
  });

  afterEach(async () => {
    if (!personaId) return;

    const musico = await prisma.musico.findUnique({
      where: { personaId },
      select: { id: true },
    });

    if (musico) {
      await prisma.musicoperiodo.deleteMany({
        where: { musicoId: musico.id },
      });

      await prisma.musico.delete({
        where: { id: musico.id },
      });
    }

    await prisma.personarolfuncional.deleteMany({
      where: { personaId },
    });

    await prisma.persona.delete({
      where: { id: personaId },
    });
  });

  it("crea correctamente una Persona, un Músico, su rol y su período", async () => {
    const resultado = await crearMusico({
      nombre: "Juan",
      apellidos: "Pérez",
      dni: "12345678A",
      fechaInicio: new Date("2026-01-01"),
    });

    personaId = resultado.personaId;

    expect(resultado.id).toBeDefined();
    expect(resultado.personaId).toBeDefined();
    expect(resultado.activo).toBe(true);
    expect(resultado.fechaAlta).toEqual(new Date("2026-01-01"));

    const persona = await prisma.persona.findUnique({
      where: { id: resultado.personaId },
    });

    expect(persona).not.toBeNull();
    expect(persona?.nombre).toBe("Juan");
    expect(persona?.apellidos).toBe("Pérez");

    const rol = await prisma.personarolfuncional.findFirst({
      where: {
        personaId: resultado.personaId,
        rolfuncional: {
          codigo: "MUSICO",
        },
      },
    });

    expect(rol).not.toBeNull();

    const periodo = await prisma.musicoperiodo.findFirst({
      where: { musicoId: resultado.id },
    });

    expect(periodo).not.toBeNull();
    expect(periodo?.fechaInicio).toEqual(new Date("2026-01-01"));
    expect(periodo?.fechaFin).toBeNull();
  });

  it("crea correctamente un músico con período cerrado", async () => {
    const resultado = await crearMusico({
      nombre: "Músico",
      apellidos: "Periodo Cerrado",
      fechaInicio: new Date("2026-01-01"),
      fechaFin: new Date("2026-09-22"),
      motivoBaja: "BAJA_VOLUNTARIA",
    });

    personaId = resultado.personaId;

    expect(resultado.activo).toBe(false);
    expect(resultado.fechaBaja).toEqual(new Date("2026-09-22"));

    const periodo = await prisma.musicoperiodo.findFirst({
      where: { musicoId: resultado.id },
    });

    expect(periodo?.fechaInicio).toEqual(new Date("2026-01-01"));
    expect(periodo?.fechaFin).toEqual(new Date("2026-09-22"));
  });

  it("rechaza una persona que ya está registrada como músico", async () => {
    const primero = await crearMusico({
      nombre: "Duplicado",
      apellidos: "Músico",
      fechaInicio: new Date("2026-01-01"),
    });

    personaId = primero.personaId;

    await expect(
      crearMusico({
        personaId: primero.personaId,
        nombre: "Duplicado",
        apellidos: "Músico",
        fechaInicio: new Date("2026-01-01"),
      }),
    ).rejects.toThrow(
      "La persona seleccionada ya está registrada como músico.",
    );
  });
});




