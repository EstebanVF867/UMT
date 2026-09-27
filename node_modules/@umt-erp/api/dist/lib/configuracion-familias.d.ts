type CrearFamiliaInput = {
    nombre?: string | undefined;
};
type EditarFamiliaInput = {
    nombre?: string | undefined;
};
export declare function listarFamilias(): Promise<({
    _count: {
        seccion: number;
    };
} & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nombre: string;
})[]>;
export declare function crearFamilia(input: CrearFamiliaInput): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nombre: string;
}>;
export declare function editarFamilia(id: string, input: EditarFamiliaInput): Promise<{
    id: string;
    createdAt: Date;
    updatedAt: Date;
    nombre: string;
}>;
export {};
//# sourceMappingURL=configuracion-familias.d.ts.map