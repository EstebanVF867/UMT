export interface FiltrosListarMusicos {
    estado?: 'ACTIVO' | 'BAJA' | 'TODOS';
    busqueda?: string;
    instrumentoId?: string;
    agrupacionId?: string;
}
export declare function listarMusicos(filtros?: FiltrosListarMusicos): Promise<{
    id: string;
    personaId: string;
    nombre: string;
    apellidos: string;
    dni: string | null;
    activo: boolean;
    fechaAlta: Date;
    instrumentoPrincipal: {
        id: string;
        nombre: string;
    } | null;
    segundoInstrumento: {
        id: string;
        nombre: string;
    } | null;
    agrupacion: {
        id: string;
        nombre: string;
    } | null;
    periodoActual: {
        id: string;
        fechaInicio: Date;
        fechaFin: Date | null;
        motivoBaja: import("../generated/prisma/enums.js").musicoperiodo_motivoBaja | null;
    } | null;
}[]>;
export declare function obtenerMusico(id: string): Promise<{
    id: string;
    personaId: string;
    persona: {
        id: string;
        nombre: string;
        apellidos: string;
        dni: string | null;
        fechaNacimiento: Date | null;
        email: string | null;
        telefono: string | null;
        observaciones: string | null;
        activo: boolean;
        fechaBaja: Date | null;
    };
    musico: {
        fechaAlta: Date;
        fechaBaja: Date | null;
        activo: boolean;
        observaciones: string | null;
    };
    periodos: {
        id: string;
        fechaInicio: Date;
        fechaFin: Date | null;
        motivoBaja: import("../generated/prisma/enums.js").musicoperiodo_motivoBaja | null;
        observaciones: string | null;
    }[];
    instrumentos: {
        id: string;
        principal: boolean;
        fechaInicio: Date;
        fechaFin: Date | null;
        observaciones: string | null;
        instrumento: {
            id: string;
            nombre: string;
        };
    }[];
    agrupaciones: {
        id: string;
        fechaAlta: Date;
        fechaBaja: Date | null;
        activo: boolean;
        observaciones: string | null;
        agrupacion: {
            id: string;
            nombre: string;
        };
    }[];
    roles: {
        id: string;
        codigo: string;
        nombre: string;
        descripcion: string | null;
        activo: boolean;
    }[];
} | null>;
//# sourceMappingURL=miembros.d.ts.map