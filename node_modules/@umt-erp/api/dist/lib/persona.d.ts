export declare function listarPersonas(): Promise<{
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
}[]>;
export declare function buscarPersonas(termino: string): Promise<{
    id: string;
    nombre: string;
    apellidos: string;
    dni: string | null;
    esMusico: boolean;
}[]>;
//# sourceMappingURL=persona.d.ts.map