import { randomUUID } from "node:crypto";
import { prisma } from "./prisma.js";
function normalizarTexto(valor) {
    return valor?.trim() ?? "";
}
export async function listarInstrumentos() {
    return prisma.instrumento.findMany({
        orderBy: [
            {
                seccion: {
                    familia: {
                        nombre: "asc",
                    },
                },
            },
            {
                seccion: {
                    nombre: "asc",
                },
            },
            {
                nombre: "asc",
            },
        ],
        include: {
            seccion: {
                select: {
                    id: true,
                    nombre: true,
                    familia: {
                        select: {
                            id: true,
                            nombre: true,
                        },
                    },
                },
            },
        },
    });
}
export async function crearInstrumento(input) {
    const nombre = normalizarTexto(input.nombre);
    const seccionId = normalizarTexto(input.seccionId);
    const descripcion = normalizarTexto(input.descripcion);
    if (!nombre) {
        throw new Error("El nombre del instrumento es obligatorio.");
    }
    if (!seccionId) {
        throw new Error("La sección es obligatoria.");
    }
    const seccion = await prisma.seccion.findUnique({
        where: {
            id: seccionId,
        },
        select: {
            id: true,
        },
    });
    if (!seccion) {
        throw new Error("La sección seleccionada no existe.");
    }
    const existente = await prisma.instrumento.findUnique({
        where: {
            seccionId_nombre: {
                seccionId,
                nombre,
            },
        },
        select: {
            id: true,
        },
    });
    if (existente) {
        throw new Error("Ya existe un instrumento con ese nombre dentro de la sección seleccionada.");
    }
    return prisma.instrumento.create({
        data: {
            id: randomUUID(),
            nombre,
            seccionId,
            descripcion: descripcion || null,
            activo: true,
            updatedAt: new Date(),
        },
        include: {
            seccion: {
                select: {
                    id: true,
                    nombre: true,
                    familia: {
                        select: {
                            id: true,
                            nombre: true,
                        },
                    },
                },
            },
        },
    });
}
export async function editarInstrumento(id, input) {
    const nombre = normalizarTexto(input.nombre);
    const seccionId = normalizarTexto(input.seccionId);
    const descripcion = normalizarTexto(input.descripcion);
    if (!nombre) {
        throw new Error("El nombre del instrumento es obligatorio.");
    }
    if (!seccionId) {
        throw new Error("La sección es obligatoria.");
    }
    const instrumento = await prisma.instrumento.findUnique({
        where: {
            id,
        },
        select: {
            id: true,
            activo: true,
        },
    });
    if (!instrumento) {
        throw new Error("El instrumento no existe.");
    }
    const seccion = await prisma.seccion.findUnique({
        where: {
            id: seccionId,
        },
        select: {
            id: true,
        },
    });
    if (!seccion) {
        throw new Error("La sección seleccionada no existe.");
    }
    const duplicado = await prisma.instrumento.findFirst({
        where: {
            seccionId,
            nombre,
            NOT: {
                id,
            },
        },
        select: {
            id: true,
        },
    });
    if (duplicado) {
        throw new Error("Ya existe otro instrumento con ese nombre dentro de la sección seleccionada.");
    }
    return prisma.instrumento.update({
        where: {
            id,
        },
        data: {
            nombre,
            seccionId,
            descripcion: descripcion || null,
            activo: input.activo ?? instrumento.activo,
            updatedAt: new Date(),
        },
        include: {
            seccion: {
                select: {
                    id: true,
                    nombre: true,
                    familia: {
                        select: {
                            id: true,
                            nombre: true,
                        },
                    },
                },
            },
        },
    });
}
//# sourceMappingURL=configuracion-instrumentos.js.map