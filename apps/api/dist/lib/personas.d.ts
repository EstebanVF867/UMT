export type PersonaDisponibleParaMusico = {
    id: string;
    nombre: string;
    apellidos: string;
    dni: string | null;
    email: string | null;
    telefono: string | null;
    activo: boolean;
    roles: {
        codigo: string;
        nombre: string;
    }[];
};
export declare function buscarPersonasDisponiblesParaMusico(busqueda: string): Promise<PersonaDisponibleParaMusico[]>;
//# sourceMappingURL=personas.d.ts.map