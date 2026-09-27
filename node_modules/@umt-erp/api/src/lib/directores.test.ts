import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { prisma } from "./prisma.js";
import { crearDirector } from "./crear-director.js";
import {
  listarDirectores,
  obtenerDirector,
} from "./directores.js";

describe("directores", () => {
  let directorId: string;
  let personaId: string;
  let agrupacionId: string;

  beforeEach(async () => {
    const agrupacion = await prisma.agrupacion.create({
      data: {
        id: crypto.randomUUID(),
        nombre: "AgrupacionTestDirector",
        activo: true,
        updatedAt: new Date(),
      },
    });

    agrupacionId = agrupacion.id;

    const resultado = await crearDirector({
      nombre: "PruebaDirector",
      apellidos: "TestDirector",
      dni: "99999998Z",
      fechaInicio: new Date("2026-01-01"),
      agrupacionIds: [agrupacionId],
    });

    directorId = resultado.director.id;
    personaId = resultado.personaId;

    await prisma.persona.update({
      where: { id: personaId },
      data: { activo: true },
    });

    await prisma.director.update({
      where: { id: directorId },
      data: { activo: true },
    });
  });

  afterEach(async () => {
    if (directorId) {
      await prisma.directorperiodoagrupacion.deleteMany({
        where: {
          directorperiodo: {
            directorId,
          },
        },
      });

      await prisma.directorperiodo.deleteMany({
        where: { directorId },
      });

      await prisma.director.deleteMany({
        where: { id: directorId },
      });
    }

    if (personaId) {
      await prisma.personarolfuncional.deleteMany({
        where: { personaId },
      });

      await prisma.persona.deleteMany({
        where: { id: personaId },
      });
    }

    if (agrupacionId) {
      await prisma.agrupacion.deleteMany({
        where: { id: agrupacionId },
      });
    }
  });

  it("obtiene el listado de directores activos incluyendo su agrupaciÃ³n actual", async () => {
    const resultado = await listarDirectores({
      estado: "ACTIVO",
      busqueda: "PruebaDirector",
    });

    expect(resultado.length).toBeGreaterThanOrEqual(1);

    const enlazado = resultado.find(
      (director) => director.id === directorId,
    );

    expect(enlazado).toBeDefined();
    expect(enlazado?.nombre).toBe("PruebaDirector");
    expect(enlazado?.periodoActual).not.toBeNull();
    expect(enlazado?.agrupaciones).toHaveLength(1);
    expect(enlazado?.agrupaciones[0]?.id).toBe(agrupacionId);
    expect(enlazado?.agrupaciones[0]?.nombre).toBe(
      "AgrupacionTestDirector",
    );
  });

  it("obtiene el expediente completo del director con sus perÃ­odos y agrupaciones", async () => {
    const resultado = await obtenerDirector(directorId);

    expect(resultado).not.toBeNull();
    expect(resultado?.id).toBe(directorId);
    expect(resultado?.personaId).toBe(personaId);
    expect(resultado?.persona.nombre).toBe("PruebaDirector");
    expect(resultado?.director.activo).toBe(true);

    expect(resultado?.periodos).toHaveLength(1);
    expect(resultado?.periodos[0]?.agrupaciones).toHaveLength(1);
    expect(
      resultado?.periodos[0]?.agrupaciones[0]?.agrupacion.id,
    ).toBe(agrupacionId);
    expect(
      resultado?.periodos[0]?.agrupaciones[0]?.agrupacion.nombre,
    ).toBe("AgrupacionTestDirector");
  });
});
