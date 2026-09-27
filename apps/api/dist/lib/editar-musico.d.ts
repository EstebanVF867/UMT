type EditarMusicoInput = {
    musicoId: string;
    nombre: string;
    apellidos: string;
    dni?: string | null;
    fechaNacimiento?: Date | null;
    email?: string | null;
    telefono?: string | null;
    observacionesPersona?: string | null;
    instrumentoPrincipalId?: string | null;
    segundoInstrumentoId?: string | null;
    agrupacionId?: string | null;
    observacionesMusico?: string | null;
    observacionesPeriodo?: string | null;
};
export declare function editarMusico(input: EditarMusicoInput): Promise<{
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
//# sourceMappingURL=editar-musico.d.ts.map