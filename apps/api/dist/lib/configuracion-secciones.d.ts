type CrearSeccionInput = {
    nombre?: string | undefined;
    familiaId?: string | undefined;
};
type EditarSeccionInput = {
    nombre?: string | undefined;
    familiaId?: string | undefined;
};
export declare function listarSecciones(): Promise<({
    _count: {
        instrumento: number;
    };
    familia: {
        id: string;
        nombre: string;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nombre: string;
    familiaId: string;
})[]>;
export declare function crearSeccion(input: CrearSeccionInput): Promise<{
    familia: {
        id: string;
        nombre: string;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nombre: string;
    familiaId: string;
}>;
export declare function editarSeccion(id: string, input: EditarSeccionInput): Promise<{
    familia: {
        id: string;
        nombre: string;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nombre: string;
    familiaId: string;
}>;
export {};
//# sourceMappingURL=configuracion-secciones.d.ts.map