import { beforeEach, describe, expect, it, vi } from "vitest";
const prismaMock = vi.hoisted(() => ({
    aula: {
        findMany: vi.fn(),
        findFirst: vi.fn(),
        findUnique: vi.fn(),
        create: vi.fn(),
        update: vi.fn(),
    },
}));
vi.mock("./prisma.js", () => ({
    prisma: prismaMock,
}));
import { crearAula, editarAula, listarAulas, } from "./configuracion-aulas.js";
describe("configuracion-aulas", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });
    it("lista las aulas ordenadas por nombre", async () => {
        const aulas = [
            {
                id: "2",
                nombre: "Aula 2",
                descripcion: null,
                capacidad: 20,
                activo: true,
            },
            {
                id: "1",
                nombre: "Aula 1",
                descripcion: "Aula principal",
                capacidad: 30,
                activo: true,
            },
        ];
        prismaMock.aula.findMany.mockResolvedValue(aulas);
        await expect(listarAulas()).resolves.toEqual(aulas);
        expect(prismaMock.aula.findMany).toHaveBeenCalledWith({
            orderBy: {
                nombre: "asc",
            },
        });
    });
    it("crea un aula correctamente", async () => {
        const aula = {
            id: "aula-1",
            nombre: "Aula 1",
            descripcion: "Aula principal",
            capacidad: 30,
            activo: true,
        };
        prismaMock.aula.findFirst.mockResolvedValue(null);
        prismaMock.aula.create.mockResolvedValue(aula);
        await expect(crearAula({
            nombre: " Aula 1 ",
            descripcion: " Aula principal ",
            capacidad: 30,
        })).resolves.toEqual(aula);
        expect(prismaMock.aula.create).toHaveBeenCalledWith({
            data: expect.objectContaining({
                nombre: "Aula 1",
                descripcion: "Aula principal",
                capacidad: 30,
            }),
        });
    });
    it("rechaza un nombre vacío", async () => {
        await expect(crearAula({
            nombre: "   ",
        })).rejects.toThrow("El nombre del aula es obligatorio.");
        expect(prismaMock.aula.findFirst).not.toHaveBeenCalled();
    });
    it("convierte una descripción vacía en null", async () => {
        const aula = {
            id: "aula-2",
            nombre: "Aula 2",
            descripcion: null,
            capacidad: null,
            activo: true,
        };
        prismaMock.aula.findFirst.mockResolvedValue(null);
        prismaMock.aula.create.mockResolvedValue(aula);
        await crearAula({
            nombre: "Aula 2",
            descripcion: "   ",
        });
        expect(prismaMock.aula.create).toHaveBeenCalledWith({
            data: expect.objectContaining({
                descripcion: null,
                capacidad: null,
            }),
        });
    });
    it("rechaza una capacidad negativa o no entera", async () => {
        await expect(crearAula({
            nombre: "Aula 3",
            capacidad: -1,
        })).rejects.toThrow("La capacidad debe ser un número entero igual o superior a 0.");
        await expect(crearAula({
            nombre: "Aula 3",
            capacidad: 10.5,
        })).rejects.toThrow("La capacidad debe ser un número entero igual o superior a 0.");
        expect(prismaMock.aula.findFirst).not.toHaveBeenCalled();
    });
    it("rechaza un aula duplicada", async () => {
        prismaMock.aula.findFirst.mockResolvedValue({
            id: "existente",
        });
        await expect(crearAula({
            nombre: "Aula 1",
        })).rejects.toThrow("Ya existe un aula con ese nombre.");
        expect(prismaMock.aula.create).not.toHaveBeenCalled();
    });
    it("edita un aula y conserva su estado si no se indica", async () => {
        const aula = {
            id: "aula-1",
            nombre: "Aula Principal",
            descripcion: "Actualizada",
            capacidad: 40,
            activo: false,
        };
        prismaMock.aula.findUnique.mockResolvedValue({
            id: "aula-1",
            activo: false,
        });
        prismaMock.aula.findFirst.mockResolvedValue(null);
        prismaMock.aula.update.mockResolvedValue(aula);
        await expect(editarAula("aula-1", {
            nombre: " Aula Principal ",
            descripcion: " Actualizada ",
            capacidad: 40,
        })).resolves.toEqual(aula);
        expect(prismaMock.aula.update).toHaveBeenCalledWith({
            where: {
                id: "aula-1",
            },
            data: expect.objectContaining({
                nombre: "Aula Principal",
                descripcion: "Actualizada",
                capacidad: 40,
                activo: false,
            }),
        });
    });
    it("rechaza editar un aula inexistente", async () => {
        prismaMock.aula.findUnique.mockResolvedValue(null);
        await expect(editarAula("inexistente", {
            nombre: "Aula",
        })).rejects.toThrow("El aula no existe.");
        expect(prismaMock.aula.findFirst).not.toHaveBeenCalled();
        expect(prismaMock.aula.update).not.toHaveBeenCalled();
    });
    it("permite activar o desactivar un aula", async () => {
        const aula = {
            id: "aula-1",
            nombre: "Aula 1",
            descripcion: null,
            capacidad: null,
            activo: true,
        };
        prismaMock.aula.findUnique.mockResolvedValue({
            id: "aula-1",
            activo: false,
        });
        prismaMock.aula.findFirst.mockResolvedValue(null);
        prismaMock.aula.update.mockResolvedValue(aula);
        await expect(editarAula("aula-1", {
            nombre: "Aula 1",
            activo: true,
        })).resolves.toEqual(aula);
        expect(prismaMock.aula.update).toHaveBeenCalledWith({
            where: {
                id: "aula-1",
            },
            data: expect.objectContaining({
                activo: true,
            }),
        });
    });
    it("rechaza editar con un nombre duplicado", async () => {
        prismaMock.aula.findUnique.mockResolvedValue({
            id: "aula-1",
            activo: true,
        });
        prismaMock.aula.findFirst.mockResolvedValue({
            id: "aula-2",
        });
        await expect(editarAula("aula-1", {
            nombre: "Aula 2",
        })).rejects.toThrow("Ya existe otra aula con ese nombre.");
        expect(prismaMock.aula.update).not.toHaveBeenCalled();
    });
});
//# sourceMappingURL=configuracion-aulas.test.js.map