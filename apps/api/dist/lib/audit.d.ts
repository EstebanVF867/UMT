import { Prisma } from "../generated/prisma/client.js";
export type AuditAction = "CREATE" | "UPDATE" | "DELETE" | "RESTORE" | "LOGIN" | "LOGOUT" | "LOGIN_FAILED" | "EXPORT";
interface RegistrarAuditoriaInput {
    userId?: string;
    action: AuditAction;
    entity: string;
    entityId?: string;
    description?: string;
    metadata?: Prisma.InputJsonValue;
    ipAddress?: string;
    userAgent?: string;
}
export declare function registrarAuditoria(input: RegistrarAuditoriaInput): Promise<{
    id: string;
    createdAt: Date;
    ipAddress: string | null;
    userAgent: string;
    userId: string | null;
    action: import("../generated/prisma/enums.js").auditlog_action;
    entity: string;
    entityId: string | null;
    description: string | null;
    metadata: string | null;
}>;
export {};
//# sourceMappingURL=audit.d.ts.map