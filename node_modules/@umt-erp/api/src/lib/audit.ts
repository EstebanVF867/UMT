import { Prisma } from "../generated/prisma/client.js";
import { randomUUID } from "node:crypto";
import { prisma } from "./prisma.js";

export type AuditAction =
  | "CREATE"
  | "UPDATE"
  | "DELETE"
  | "RESTORE"
  | "LOGIN"
  | "LOGOUT"
  | "LOGIN_FAILED"
  | "EXPORT";

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

export async function registrarAuditoria(
  input: RegistrarAuditoriaInput,
) {
  return prisma.auditlog.create({
    data: {
      id: randomUUID(),
      userId: input.userId ?? null,
      action: input.action,
      entity: input.entity,
      entityId: input.entityId ?? null,
      description: input.description ?? null,
      metadata: input.metadata == null ? null : JSON.stringify(input.metadata),
      ipAddress: input.ipAddress ?? null,
      userAgent: input.userAgent ?? "",
    },
    select: {
      id: true,
      userId: true,
      action: true,
      entity: true,
      entityId: true,
      description: true,
      metadata: true,
      ipAddress: true,
      userAgent: true,
      createdAt: true,
    },
  });
}
