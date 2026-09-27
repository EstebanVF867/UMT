export declare function crearSesion(userId: string, ipAddress?: string, userAgent?: string): Promise<{
    token: string;
    session: {
        id: string;
        createdAt: Date;
        expiresAt: Date;
        userId: string;
    };
}>;
export declare function validarSesion(token: string): Promise<{
    id: string;
    expiresAt: Date;
    userId: string;
} | null>;
export declare function revocarSesion(token: string): Promise<boolean>;
//# sourceMappingURL=session.d.ts.map