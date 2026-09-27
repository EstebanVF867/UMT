type CrearMusicoInput = {
    personaId?: string | null | undefined;
    nombre?: string | undefined;
    apellidos?: string | undefined;
    dni?: string | null | undefined;
    fechaNacimiento?: Date | null | undefined;
    email?: string | null | undefined;
    telefono?: string | null | undefined;
    observacionesPersona?: string | null | undefined;
    fechaInicio: Date;
    fechaFin?: Date | null | undefined;
    motivoBaja?: "BAJA_VOLUNTARIA" | "DEJA_DE_PERTENECER_UMT" | "OTRO" | null | undefined;
    instrumentoPrincipalId?: string | null | undefined;
    segundoInstrumentoId?: string | null | undefined;
    agrupacionId?: string | null | undefined;
    observacionesPeriodo?: string | null | undefined;
    observacionesMusico?: string | null | undefined;
};
export declare function crearMusico(input: CrearMusicoInput): Promise<{
    persona: {
        id: string;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
        nombre: string;
        apellidos: string;
        dni: string | null;
        fechaNacimiento: Date | null;
        email: string | null;
        telefono: string | null;
        observaciones: string | null;
        fechaBaja: Date | null;
    };
    musicoperiodo: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        observaciones: string | null;
        fechaInicio: Date;
        musicoId: string;
        fechaFin: Date | null;
        motivoBaja: import("../generated/prisma/enums.js").musicoperiodo_motivoBaja | null;
    }[];
} & {
    id: string;
    activo: boolean;
    personaId: string;
    observaciones: string | null;
    fechaBaja: Date | null;
    fechaAlta: Date;
}>;
export {};
//# sourceMappingURL=crear-musico.d.ts.map