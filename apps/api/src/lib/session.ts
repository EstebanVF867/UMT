import { createHash, randomBytes, randomUUID } from "node:crypto";
import { prisma } from "./prisma.js";

const SESSION_DURATION_MS = 8 * 60 * 60 * 1000;

function hashToken(token: string) {
  return createHash("sha256").update(token).digest("hex");
}

export async function crearSesion(
  userId: string,
  ipAddress?: string,
  userAgent?: string,
) {
  const token = randomBytes(32).toString("hex");
  const tokenHash = hashToken(token);

  const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);

  const session = await prisma.sesion.create({
    data: {
      id: randomUUID(),
      userId,
      tokenHash,
      expiresAt,
      ipAddress: ipAddress ?? null,
      userAgent: userAgent ?? "",
    },
    select: {
      id: true,
      userId: true,
      expiresAt: true,
      createdAt: true,
    },
  });

  return {
    token,
    session,
  };
}

export async function validarSesion(token: string) {
  const tokenHash = hashToken(token);

  const session = await prisma.sesion.findFirst({
    where: {
      tokenHash,
      revokedAt: null,
      expiresAt: {
        gt: new Date(),
      },
    },
    select: {
      id: true,
      userId: true,
      expiresAt: true,
    },
  });

  if (!session) {
    return null;
  }

  return session;
}

export async function revocarSesion(token: string) {
  const tokenHash = hashToken(token);

  const result = await prisma.sesion.updateMany({
    where: {
      tokenHash,
      revokedAt: null,
    },
    data: {
      revokedAt: new Date(),
    },
  });

  return result.count > 0;
}
