import { randomUUID } from "node:crypto";
import { prisma } from "./prisma.js";
function normalizarNombre(nombre) {
    return nombre?.trim() ?? "";
}
function normalizarDescripcion(descripcion) {
    const valor = descripcion?.trim() ?? "";
    return valor || null;
}
export async function listarAgrupaciones() {
    return prisma.agrupacion.findMany({
        orderBy: {
            nombre: "asc",
        },
    });
}
export async function crearAgrupacion(input) {
    const nombre = normalizarNombre(input.nombre);
    const descripcion = normalizarDescripcion(input.descripcion);
    if (!nombre) {
        throw new Error("El nombre de la agrupación es obligatorio.");
    }
    const existente = await prisma.agrupacion.findFirst({
        where: {
            nombre,
        },
        select: {
            id: true,
        },
    });
    if (existente) {
        throw new Error("Ya existe una agrupación con ese nombre.");
    }
    return prisma.agrupacion.create({
        data: {
            id: randomUUID(),
            nombre,
            descripcion,
            updatedAt: new Date(),
        },
    });
}
export async function editarAgrupacion(id, input) {
    const nombre = normalizarNombre(input.nombre);
    const descripcion = normalizarDescripcion(input.descripcion);
    if (!nombre) {
        throw new Error("El nombre de la agrupación es obligatorio.");
    }
    const agrupacion = await prisma.agrupacion.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            activo: true,
        },
    });
    if (!agrupacion) {
        throw new Error("La agrupación no existe.");
    }
    const duplicada = await prisma.agrupacion.findFirst({
        where: {
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
        throw new Error("Ya existe otra agrupación con ese nombre.");
    }
    return prisma.agrupacion.update({
        where: {
            id,
        },
        data: {
            nombre,
            descripcion,
            activo: input.activo ?? agrupacion.activo,
            updatedAt: new Date(),
        },
    });
}
//# sourceMappingURL=configuracion-agrupaciones.js.map