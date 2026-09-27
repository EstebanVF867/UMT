import { randomUUID } from "node:crypto";
import { prisma } from "./prisma.js";
function normalizarTexto(valor) {
    return valor?.trim() ?? "";
}
export async function listarSecciones() {
    return prisma.seccion.findMany({
        orderBy: [
            {
                familia: {
                    nombre: "asc",
                },
            },
            {
                nombre: "asc",
            },
        ],
        include: {
            familia: {
                select: {
                    id: true,
                    nombre: true,
                },
            },
            _count: {
                select: {
                    instrumento: true,
                },
            },
        },
    });
}
export async function crearSeccion(input) {
    const nombre = normalizarTexto(input.nombre);
    const familiaId = normalizarTexto(input.familiaId);
    if (!nombre) {
        throw new Error("El nombre de la sección es obligatorio.");
    }
    if (!familiaId) {
        throw new Error("La familia es obligatoria.");
    }
    const familia = await prisma.familia.findUnique({
        where: {
            id: familiaId,
        },
        select: {
            id: true,
        },
    });
    if (!familia) {
        throw new Error("La familia seleccionada no existe.");
    }
    const existente = await prisma.seccion.findUnique({
        where: {
            familiaId_nombre: {
                familiaId,
                nombre,
            },
        },
        select: {
            id: true,
        },
    });
    if (existente) {
        throw new Error("Ya existe una sección con ese nombre dentro de la familia seleccionada.");
    }
    return prisma.seccion.create({
        data: {
            id: randomUUID(),
            nombre,
            familiaId,
            updatedAt: new Date(),
        },
        include: {
            familia: {
                select: {
                    id: true,
                    nombre: true,
                },
            },
        },
    });
}
export async function editarSeccion(id, input) {
    const nombre = normalizarTexto(input.nombre);
    const familiaId = normalizarTexto(input.familiaId);
    if (!nombre) {
        throw new Error("El nombre de la sección es obligatorio.");
    }
    if (!familiaId) {
        throw new Error("La familia es obligatoria.");
    }
    const seccion = await prisma.seccion.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
        },
    });
    if (!seccion) {
        throw new Error("La sección no existe.");
    }
    const familia = await prisma.familia.findUnique({
        where: {
            id: familiaId,
        },
        select: {
            id: true,
        },
    });
    if (!familia) {
        throw new Error("La familia seleccionada no existe.");
    }
    const duplicada = await prisma.seccion.findFirst({
        where: {
            familiaId,
            nombre,
            NOT: {
                id,
            },
        },
        select: {
            id: true,
        },
    });
    if (duplicada) {
        throw new Error("Ya existe otra sección con ese nombre dentro de la familia seleccionada.");
    }
    return prisma.seccion.update({
        where: {
            id,
        },
        data: {
            nombre,
            familiaId,
            updatedAt: new Date(),
        },
        include: {
            familia: {
                select: {
                    id: true,
                    nombre: true,
                },
            },
        },
    });
}
//# sourceMappingURL=configuracion-secciones.js.map