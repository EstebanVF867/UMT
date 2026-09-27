type CrearAgrupacionInput = {
    nombre?: string | undefined;
    descripcion?: string | undefined;
};
type EditarAgrupacionInput = {
    nombre?: string | undefined;
    descripcion?: string | undefined;
    activo?: boolean | undefined;
};
export declare function listarAgrupaciones(): Promise<{
    id: string;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    nombre: string;
    descripcion: string | null;
}[]>;
export declare function crearAgrupacion(input: CrearAgrupacionInput): Promise<{
    id: string;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    nombre: string;
    descripcion: string | null;
}>;
export declare function editarAgrupacion(id: string, input: EditarAgrupacionInput): Promise<{
    id: string;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    nombre: string;
    descripcion: string | null;
}>;
export {};
//# sourceMappingURL=configuracion-agrupaciones.d.ts.map