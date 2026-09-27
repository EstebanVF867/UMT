type CrearPeriodoMusicoInput = {
    musicoId: string;
    fechaInicio: Date;
    fechaFin?: Date | null | undefined;
    motivoBaja?: "BAJA_VOLUNTARIA" | "DEJA_DE_PERTENECER_UMT" | "OTRO" | null | undefined;
    observaciones?: string | null | undefined;
};
export declare function listarPeriodosMusico(musicoId: string): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    observaciones: string | null;
    fechaInicio: Date;
    musicoId: string;
    fechaFin: Date | null;
    motivoBaja: import("../generated/prisma/enums.js").musicoperiodo_motivoBaja | null;
}[]>;
export declare function obtenerPeriodoActivoMusico(musicoId: string): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    observaciones: string | null;
    fechaInicio: Date;
    musicoId: string;
    fechaFin: Date | null;
    motivoBaja: import("../generated/prisma/enums.js").musicoperiodo_motivoBaja | null;
} | null>;
export declare function crearPeriodoMusico(input: CrearPeriodoMusicoInput): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    observaciones: string | null;
    fechaInicio: Date;
    musicoId: string;
    fechaFin: Date | null;
    motivoBaja: import("../generated/prisma/enums.js").musicoperiodo_motivoBaja | null;
}>;
export declare function cerrarPeriodoMusico(musicoId: string, periodoId: string, fechaFin: Date, motivoBaja: "BAJA_VOLUNTARIA" | "DEJA_DE_PERTENECER_UMT" | "OTRO", observaciones?: string | null | undefined): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    observaciones: string | null;
    fechaInicio: Date;
    musicoId: string;
    fechaFin: Date | null;
    motivoBaja: import("../generated/prisma/enums.js").musicoperiodo_motivoBaja | null;
}>;
export declare function reactivarMusico(musicoId: string, fechaInicio: Date, observaciones?: string | null | undefined): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    observaciones: string | null;
    fechaInicio: Date;
    musicoId: string;
    fechaFin: Date | null;
    motivoBaja: import("../generated/prisma/enums.js").musicoperiodo_motivoBaja | null;
}>;
export {};
//# sourceMappingURL=periodos-musico.d.ts.map