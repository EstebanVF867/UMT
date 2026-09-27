type CrearInstrumentoInput = {
    nombre?: string | undefined;
    seccionId?: string | undefined;
    descripcion?: string | undefined;
};
type EditarInstrumentoInput = {
    nombre?: string | undefined;
    seccionId?: string | undefined;
    descripcion?: string | undefined;
    activo?: boolean | undefined;
};
export declare function listarInstrumentos(): Promise<({
    seccion: {
        id: string;
        nombre: string;
        familia: {
            id: string;
            nombre: string;
        };
    };
} & {
    id: string;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    nombre: string;
    descripcion: string | null;
    seccionId: string;
})[]>;
export declare function crearInstrumento(input: CrearInstrumentoInput): Promise<{
    seccion: {
        id: string;
        nombre: string;
        familia: {
            id: string;
            nombre: string;
        };
    };
} & {
    id: string;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    nombre: string;
    descripcion: string | null;
    seccionId: string;
}>;
export declare function editarInstrumento(id: string, input: EditarInstrumentoInput): Promise<{
    seccion: {
        id: string;
        nombre: string;
        familia: {
            id: string;
            nombre: string;
        };
    };
} & {
    id: string;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    nombre: string;
    descripcion: string | null;
    seccionId: string;
}>;
export {};
//# sourceMappingURL=configuracion-instrumentos.d.ts.map