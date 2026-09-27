type CrearAulaInput = {
    nombre?: string | undefined;
    descripcion?: string | undefined;
    capacidad?: number | undefined;
};
type EditarAulaInput = {
    nombre?: string | undefined;
    descripcion?: string | undefined;
    capacidad?: number | undefined;
    activo?: boolean | undefined;
};
export declare function listarAulas(): Promise<{
    id: string;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    nombre: string;
    descripcion: string | null;
    capacidad: number | null;
}[]>;
export declare function crearAula(input: CrearAulaInput): Promise<{
    id: string;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    nombre: string;
    descripcion: string | null;
    capacidad: number | null;
}>;
export declare function editarAula(id: string, input: EditarAulaInput): Promise<{
    id: string;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    nombre: string;
    descripcion: string | null;
    capacidad: number | null;
}>;
export {};
//# sourceMappingURL=configuracion-aulas.d.ts.map