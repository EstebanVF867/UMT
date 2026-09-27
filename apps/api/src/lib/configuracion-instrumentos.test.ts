import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { randomUUID } from "node:crypto";
import { prisma } from "./prisma.js";
import {
  crearInstrumento,
  editarInstrumento,
  listarInstrumentos,
} from "./configuracion-instrumentos.js";

describe("configuracion de instrumentos", () => {
  let familiaId = "";
  let seccionIds: string[] = [];
  let instrumentoIds: string[] = [];

  async function crearSeccionTest(nombre: string) {
    const seccion = await prisma.seccion.create({
      data: {
        id: randomUUID(),
        nombre,
        familiaId,
        updatedAt: new Date(),
      },
    });

    seccionIds.push(seccion.id);
    return seccion;
  }

  async function crearInstrumentoTest(
    nombre: string,
    seccionId: string,
  ) {
    const instrumento = await crearInstrumento({
      nombre,
      seccionId,
    });

    instrumentoIds.push(instrumento.id);
    return instrumento;
  }

  function obtenerSeccionIdTest(): string {
    const seccionId = seccionIds[0];

    if (!seccionId) {
      throw new Error("No existe una sección de prueba.");
    }

    return seccionId;
  }

  beforeEach(async () => {
    familiaId = "";
    seccionIds = [];
    instrumentoIds = [];

    const familia = await prisma.familia.create({
      data: {
        id: randomUUID(),
        nombre: `Familia test ${randomUUID()}`,
        updatedAt: new Date(),
      },
    });

    familiaId = familia.id;

    await crearSeccionTest(`Sección test ${randomUUID()}`);
  });

  afterEach(async () => {
    if (instrumentoIds.length > 0) {
      await prisma.instrumento.deleteMany({
        where: {
          id: {
            in: instrumentoIds,
          },
        },
      });
    }

    if (seccionIds.length > 0) {
      await prisma.seccion.deleteMany({
        where: {
          id: {
            in: seccionIds,
          },
        },
      });
    }

    if (familiaId) {
      await prisma.familia.delete({
        where: {
          id: familiaId,
        },
      });
    }
  });

  it("crea un instrumento correctamente", async () => {
    const instrumento = await crearInstrumentoTest(
      "Flauta 1",
      obtenerSeccionIdTest(),
    );

    expect(instrumento.nombre).toBe("Flauta 1");
    expect(instrumento.seccionId).toBe(obtenerSeccionIdTest());
    expect(instrumento.activo).toBe(true);
    expect(instrumento.seccion.nombre).toBeDefined();
    expect(instrumento.seccion.familia.id).toBe(familiaId);
  });

  it("rechaza datos obligatorios incorrectos", async () => {
    await expect(
      crearInstrumento({
        nombre: "",
        seccionId: obtenerSeccionIdTest(),
      }),
    ).rejects.toThrow("El nombre del instrumento es obligatorio.");

    await expect(
      crearInstrumento({
        nombre: "Flauta 1",
      }),
    ).rejects.toThrow("La sección es obligatoria.");

    await expect(
      crearInstrumento({
        nombre: "Flauta 1",
        seccionId: randomUUID(),
      }),
    ).rejects.toThrow("La sección seleccionada no existe.");
  });

  it("impide duplicados dentro de la misma sección", async () => {
    await crearInstrumentoTest("Flauta 1", obtenerSeccionIdTest());

    await expect(
      crearInstrumento({
        nombre: "Flauta 1",
        seccionId: obtenerSeccionIdTest(),
      }),
    ).rejects.toThrow(
      "Ya existe un instrumento con ese nombre dentro de la sección seleccionada.",
    );
  });

  it("permite el mismo nombre en secciones diferentes", async () => {
    await crearInstrumentoTest("Flauta 1", obtenerSeccionIdTest());

    const segundaSeccion = await crearSeccionTest(
      `Segunda sección test ${randomUUID()}`,
    );

    const segundo = await crearInstrumentoTest(
      "Flauta 1",
      segundaSeccion.id,
    );

    expect(segundo.nombre).toBe("Flauta 1");
    expect(segundo.seccionId).toBe(segundaSeccion.id);
  });

  it("edita un instrumento y permite cambiarlo de sección", async () => {
    const instrumento = await crearInstrumentoTest(
      "Flauta 1",
      obtenerSeccionIdTest(),
    );

    const segundaSeccion = await crearSeccionTest(
      `Segunda sección test ${randomUUID()}`,
    );

    const editado = await editarInstrumento(instrumento.id, {
      nombre: "Flauta 2",
      seccionId: segundaSeccion.id,
      descripcion: "Instrumento de prueba",
    });

    expect(editado.nombre).toBe("Flauta 2");
    expect(editado.seccionId).toBe(segundaSeccion.id);
    expect(editado.descripcion).toBe("Instrumento de prueba");
  });

  it("permite activar y desactivar un instrumento", async () => {
    const instrumento = await crearInstrumentoTest(
      "Flauta 1",
      obtenerSeccionIdTest(),
    );

    const desactivado = await editarInstrumento(instrumento.id, {
      nombre: instrumento.nombre,
      seccionId: instrumento.seccionId,
      activo: false,
    });

    expect(desactivado.activo).toBe(false);

    const reactivado = await editarInstrumento(instrumento.id, {
      nombre: instrumento.nombre,
      seccionId: instrumento.seccionId,
      activo: true,
    });

    expect(reactivado.activo).toBe(true);
  });

  it("no reactiva accidentalmente un instrumento inactivo al editar otros datos", async () => {
    const instrumento = await crearInstrumentoTest(
      "Flauta 1",
      obtenerSeccionIdTest(),
    );

    await editarInstrumento(instrumento.id, {
      nombre: instrumento.nombre,
      seccionId: instrumento.seccionId,
      activo: false,
    });

    const editado = await editarInstrumento(instrumento.id, {
      nombre: instrumento.nombre,
      seccionId: instrumento.seccionId,
      descripcion: "Descripción modificada",
    });

    expect(editado.activo).toBe(false);
    expect(editado.descripcion).toBe("Descripción modificada");
  });

  it("rechaza editar un instrumento inexistente", async () => {
    await expect(
      editarInstrumento(randomUUID(), {
        nombre: "Flauta 1",
        seccionId: obtenerSeccionIdTest(),
      }),
    ).rejects.toThrow("El instrumento no existe.");
  });

  it("lista los instrumentos incluyendo sección y familia", async () => {
    const instrumento = await crearInstrumentoTest(
      "Flauta 1",
      obtenerSeccionIdTest(),
    );

    const instrumentos = await listarInstrumentos();

    const encontrado = instrumentos.find(
      (item) => item.id === instrumento.id,
    );

    expect(encontrado).toBeDefined();
    expect(encontrado?.seccion.id).toBe(obtenerSeccionIdTest());
    expect(encontrado?.seccion.familia.id).toBe(familiaId);
  });
});



