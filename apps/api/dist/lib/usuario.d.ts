export declare function crearUsuario(personaId: string, username: string, password: string): Promise<{
    id: string;
    username: string;
    activo: boolean;
    ultimoAccesoAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    personaId: string;
}>;
export declare function buscarUsuarioPorUsername(username: string): Promise<{
    id: string;
    username: string;
    activo: boolean;
    ultimoAccesoAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    personaId: string;
} | null>;
export declare function buscarUsuarioParaAutenticacion(username: string): Promise<{
    id: string;
    username: string;
    passwordHash: string;
    activo: boolean;
    personaId: string;
} | null>;
export declare function verificarPassword(password: string, passwordHash: string): Promise<boolean>;
//# sourceMappingURL=usuario.d.ts.map