import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { prisma } from "./prisma.js";
import { crearDirector } from "./crear-director.js";

describe("crearDirector", () => {
  let personaId: string;
  let agrupacionIds: string[] = [];

  beforeEach(async () => {
    personaId = "";
    agrupacionIds = [];
  });

  afterEach(async () => {
    if (personaId) {
      const director = await prisma.director.findUnique({
        where: { personaId },
        select: { id: true },
      });

      if (director) {
        const periodos = await prisma.directorperiodo.findMany({
          where: { directorId: director.id },
          select: { id: true },
        });

        const periodoIds = periodos.map((periodo) => periodo.id);

        if (periodoIds.length > 0) {
          await prisma.directorperiodoagrupacion.deleteMany({
            where: { directorPeriodoId: { in: periodoIds } },
          });

          await prisma.directorperiodo.deleteMany({
            where: { id: { in: periodoIds } },
          });
        }

        await prisma.director.delete({
          where: { id: director.id },
        });
      }

      await prisma.personarolfuncional.deleteMany({
        where: { personaId },
      });

      await prisma.persona.delete({
        where: { id: personaId },
      });
    }

    if (agrupacionIds.length > 0) {
      await prisma.agrupacion.deleteMany({
        where: { id: { in: agrupacionIds } },
      });
    }
  });

  async function crearAgrupacion(nombre: string) {
    const agrupacion = await prisma.agrupacion.create({
      data: {
        id: crypto.randomUUID(),
        nombre,
        activo: true,
        updatedAt: new Date(),
      },
    });

    agrupacionIds.push(agrupacion.id);

    return agrupacion;
  }

  it("crea correctamente una Persona, un Director, su rol, su período y su agrupación", async () => {
    const agrupacion = await crearAgrupacion("AgrupacionTestCrearDirector");

    const resultado = await crearDirector({
      nombre: "Juan",
      apellidos: "Pérez",
      dni: "12345678B",
      fechaInicio: new Date("2026-01-01"),
      agrupacionIds: [agrupacion.id],
    });

    personaId = resultado.personaId;

    expect(resultado.director.id).toBeDefined();
    expect(resultado.personaId).toBeDefined();
    expect(resultado.director.activo).toBe(true);
    expect(resultado.director.fechaAlta).toEqual(new Date("2026-01-01"));

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
          codigo: "DIRECTOR",
        },
      },
    });

    expect(rol).not.toBeNull();

    const periodo = await prisma.directorperiodo.findFirst({
      where: { directorId: resultado.director.id },
    });

    expect(periodo).not.toBeNull();
    expect(periodo?.fechaInicio).toEqual(new Date("2026-01-01"));
    expect(periodo?.fechaFin).toBeNull();

    const asignacion = await prisma.directorperiodoagrupacion.findFirst({
      where: {
        directorPeriodoId: resultado.periodo.id,
        agrupacionId: agrupacion.id,
      },
    });

    expect(asignacion).not.toBeNull();
  });

  it("crea correctamente un director con período cerrado", async () => {
    const agrupacion = await crearAgrupacion("AgrupacionTestPeriodoCerrado");

    const resultado = await crearDirector({
      nombre: "Director",
      apellidos: "Periodo Cerrado",
      fechaInicio: new Date("2026-01-01"),
      agrupacionIds: [agrupacion.id],
    });

    personaId = resultado.personaId;

    const periodo = await prisma.directorperiodo.findFirst({
      where: { directorId: resultado.director.id },
    });

    expect(periodo).not.toBeNull();
    expect(periodo?.fechaFin).toBeNull();
  });

  it("rechaza una persona que ya está registrada como director", async () => {
    const agrupacion = await crearAgrupacion("AgrupacionTestDuplicado");

    const primero = await crearDirector({
      nombre: "Duplicado",
      apellidos: "Director",
      fechaInicio: new Date("2026-01-01"),
      agrupacionIds: [agrupacion.id],
    });

    personaId = primero.personaId;

    await expect(
      crearDirector({
        personaId: primero.personaId,
        nombre: "Duplicado",
        apellidos: "Director",
        fechaInicio: new Date("2026-01-01"),
        agrupacionIds: [agrupacion.id],
      }),
    ).rejects.toThrow(
      "La persona indicada ya es director.",
    );
  });

  it("rechaza la creación si no se indica ninguna agrupación", async () => {
    await expect(
      crearDirector({
        nombre: "Sin",
        apellidos: "Agrupacion",
        fechaInicio: new Date("2026-01-01"),
        agrupacionIds: [],
      }),
    ).rejects.toThrow(
      "Debes seleccionar al menos una agrupación.",
    );
  });
});
