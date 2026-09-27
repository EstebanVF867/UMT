import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { crearAgrupacion, editarAgrupacion, listarAgrupaciones, } from "./configuracion-agrupaciones.js";
import { prisma } from "./prisma.js";
describe("configuración de agrupaciones", () => {
    const idsCreados = [];
    beforeAll(async () => {
        await prisma.agrupacion.deleteMany({
            where: {
                nombre: {
                    startsWith: "TEST Agrupación ",
                },
            },
        });
    });
    afterAll(async () => {
        if (idsCreados.length > 0) {
            await prisma.agrupacion.deleteMany({
                where: {
                    id: {
                        in: idsCreados,
                    },
                },
            });
        }
        await prisma.$disconnect();
    });
    it("crea una agrupación correctamente", async () => {
        const agrupacion = await crearAgrupacion({
            nombre: "TEST Agrupación Adultos",
            descripcion: "Agrupación de prueba",
        });
        idsCreados.push(agrupacion.id);
        expect(agrupacion.nombre).toBe("TEST Agrupación Adultos");
        expect(agrupacion.descripcion).toBe("Agrupación de prueba");
        expect(agrupacion.activo).toBe(true);
    });
    it("rechaza un nombre obligatorio vacío", async () => {
        await expect(crearAgrupacion({
            nombre: "   ",
        })).rejects.toThrow("El nombre de la agrupación es obligatorio.");
    });
    it("impide agrupaciones duplicadas", async () => {
        const primera = await crearAgrupacion({
            nombre: "TEST Agrupación Duplicada",
        });
        idsCreados.push(primera.id);
        await expect(crearAgrupacion({
            nombre: "TEST Agrupación Duplicada",
        })).rejects.toThrow("Ya existe una agrupación con ese nombre.");
    });
    it("edita una agrupación correctamente", async () => {
        const agrupacion = await crearAgrupacion({
            nombre: "TEST Agrupación Editar",
            descripcion: "Descripción inicial",
        });
        idsCreados.push(agrupacion.id);
        const editada = await editarAgrupacion(agrupacion.id, {
            nombre: "TEST Agrupación Editada",
            descripcion: "Descripción modificada",
        });
        expect(editada.nombre).toBe("TEST Agrupación Editada");
        expect(editada.descripcion).toBe("Descripción modificada");
        expect(editada.activo).toBe(true);
    });
    it("permite activar y desactivar una agrupación", async () => {
        const agrupacion = await crearAgrupacion({
            nombre: "TEST Agrupación Estado",
        });
        idsCreados.push(agrupacion.id);
        const desactivada = await editarAgrupacion(agrupacion.id, {
            nombre: agrupacion.nombre,
            activo: false,
        });
        expect(desactivada.activo).toBe(false);
        const activada = await editarAgrupacion(agrupacion.id, {
            nombre: agrupacion.nombre,
            activo: true,
        });
        expect(activada.activo).toBe(true);
    });
    it("no reactiva accidentalmente una agrupación inactiva al editar otros datos", async () => {
        const agrupacion = await crearAgrupacion({
            nombre: "TEST Agrupación Inactiva",
        });
        idsCreados.push(agrupacion.id);
        await editarAgrupacion(agrupacion.id, {
            nombre: agrupacion.nombre,
            activo: false,
        });
        const editada = await editarAgrupacion(agrupacion.id, {
            nombre: "TEST Agrupación Inactiva Editada",
            descripcion: "Nueva descripción",
        });
        expect(editada.nombre).toBe("TEST Agrupación Inactiva Editada");
        expect(editada.descripcion).toBe("Nueva descripción");
        expect(editada.activo).toBe(false);
    });
    it("rechaza editar una agrupación inexistente", async () => {
        await expect(editarAgrupacion("00000000-0000-0000-0000-000000000000", {
            nombre: "TEST Agrupación Inexistente",
        })).rejects.toThrow("La agrupación no existe.");
    });
    it("lista las agrupaciones", async () => {
        const agrupacion = await crearAgrupacion({
            nombre: "TEST Agrupación Lista",
        });
        idsCreados.push(agrupacion.id);
        const agrupaciones = await listarAgrupaciones();
        expect(agrupaciones.some((item) => item.id === agrupacion.id)).toBe(true);
    });
});
//# sourceMappingURL=configuracion-agrupaciones.test.js.map