import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { prisma } from "./prisma.js";
import { crearDirector } from "./crear-director.js";
import { editarDirector } from "./editar-director.js";

describe("editarDirector", () => {
  let directorId: string;
  let personaId: string;
  let agrupacionId: string;
  let segundaAgrupacionId: string;

  beforeEach(async () => {
    const agrupacion = await prisma.agrupacion.create({
      data: {
        id: crypto.randomUUID(),
        nombre: "AgrupacionTestEditarDirector",
        activo: true,
        updatedAt: new Date(),
      },
    });

    const segundaAgrupacion = await prisma.agrupacion.create({
      data: {
        id: crypto.randomUUID(),
        nombre: "AgrupacionTestEditarDirector2",
        activo: true,
        updatedAt: new Date(),
      },
    });

    agrupacionId = agrupacion.id;
    segundaAgrupacionId = segundaAgrupacion.id;

    const resultado = await crearDirector({
      nombre: "DirectorOriginal",
      apellidos: "ApellidosOriginales",
      dni: "99999997Z",
      fechaInicio: new Date("2026-01-01"),
      agrupacionIds: [agrupacionId],
      observacionesDirector: "Observación original",
      observacionesPeriodo: "Período original",
    });

    directorId = resultado.director.id;
    personaId = resultado.personaId;
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
        where: {
          directorId,
        },
      });

      await prisma.director.deleteMany({
        where: {
          id: directorId,
        },
      });
    }

    if (personaId) {
      await prisma.personarolfuncional.deleteMany({
        where: {
          personaId,
        },
      });

      await prisma.persona.deleteMany({
        where: {
          id: personaId,
        },
      });
    }

    if (agrupacionId) {
      await prisma.agrupacion.deleteMany({
        where: {
          id: agrupacionId,
        },
      });
    }

    if (segundaAgrupacionId) {
      await prisma.agrupacion.deleteMany({
        where: {
          id: segundaAgrupacionId,
        },
      });
    }
  });

  it("actualiza los datos personales y las observaciones del director", async () => {
    await editarDirector({
      directorId,
      nombre: "DirectorEditado",
      apellidos: "ApellidosEditados",
      dni: "12345678A",
      fechaNacimiento: new Date("1990-05-10"),
      email: "director@test.com",
      telefono: "600000000",
      observacionesPersona: "Observación persona editada",
      observacionesDirector: "Observación director editada",
      agrupacionIds: [agrupacionId],
      observacionesPeriodo: "Observación período editada",
    });

    const persona = await prisma.persona.findUnique({
      where: {
        id: personaId,
      },
    });

    const director = await prisma.director.findUnique({
      where: {
        id: directorId,
      },
    });

    const periodo = await prisma.directorperiodo.findFirst({
      where: {
        directorId,
        fechaFin: null,
      },
    });

    expect(persona?.nombre).toBe("DirectorEditado");
    expect(persona?.apellidos).toBe("ApellidosEditados");
    expect(persona?.dni).toBe("12345678A");
    expect(persona?.email).toBe("director@test.com");
    expect(persona?.telefono).toBe("600000000");
    expect(persona?.observaciones).toBe(
      "Observación persona editada",
    );

    expect(director?.observaciones).toBe(
      "Observación director editada",
    );

    expect(periodo?.observaciones).toBe(
      "Observación período editada",
    );
  });

  it("actualiza las agrupaciones del período actual sin modificar su fecha de inicio", async () => {
    const periodoOriginal = await prisma.directorperiodo.findFirst({
      where: {
        directorId,
        fechaFin: null,
      },
    });

    expect(periodoOriginal).not.toBeNull();

    await editarDirector({
      directorId,
      nombre: "DirectorOriginal",
      apellidos: "ApellidosOriginales",
      agrupacionIds: [segundaAgrupacionId],
    });

    const periodo = await prisma.directorperiodo.findUnique({
      where: {
        id: periodoOriginal!.id,
      },
      include: {
        directorperiodoagrupacion: true,
      },
    });

    expect(periodo).not.toBeNull();
    expect(periodo?.fechaInicio).toEqual(periodoOriginal?.fechaInicio);
    expect(periodo?.directorperiodoagrupacion).toHaveLength(1);
    expect(
      periodo?.directorperiodoagrupacion[0]?.agrupacionId,
    ).toBe(segundaAgrupacionId);
  });

  it("permite varias agrupaciones activas en el período actual", async () => {
    await editarDirector({
      directorId,
      nombre: "DirectorOriginal",
      apellidos: "ApellidosOriginales",
      agrupacionIds: [agrupacionId, segundaAgrupacionId],
    });

    const periodo = await prisma.directorperiodo.findFirst({
      where: {
        directorId,
        fechaFin: null,
      },
      include: {
        directorperiodoagrupacion: true,
      },
    });

    expect(periodo?.directorperiodoagrupacion).toHaveLength(2);

    expect(
      periodo?.directorperiodoagrupacion.map(
        (asignacion) => asignacion.agrupacionId,
      ),
    ).toEqual(
      expect.arrayContaining([
        agrupacionId,
        segundaAgrupacionId,
      ]),
    );
  });

  it("rechaza editar sin agrupaciones", async () => {
    await expect(
      editarDirector({
        directorId,
        nombre: "DirectorOriginal",
        apellidos: "ApellidosOriginales",
        agrupacionIds: [],
      }),
    ).rejects.toThrow(
      "Debes seleccionar al menos una agrupación.",
    );
  });

  it("rechaza agrupaciones inactivas", async () => {
    await prisma.agrupacion.update({
      where: {
        id: segundaAgrupacionId,
      },
      data: {
        activo: false,
      },
    });

    await expect(
      editarDirector({
        directorId,
        nombre: "DirectorOriginal",
        apellidos: "ApellidosOriginales",
        agrupacionIds: [segundaAgrupacionId],
      }),
    ).rejects.toThrow(
      "Una o más agrupaciones indicadas no existen o están inactivas.",
    );
  });
});
