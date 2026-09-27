import argon2 from "argon2";
import { randomUUID } from "node:crypto";
import { prisma } from "./prisma.js";

export async function crearUsuario(
  personaId: string,
  username: string,
  password: string,
) {
  const passwordHash = await argon2.hash(password, {
    type: argon2.argon2id,
  });

  const usuario = await prisma.usuario.create({
    data: {
      id: randomUUID(),
      personaId,
      username,
      passwordHash,
      activo: true,
      updatedAt: new Date(),
    },
    select: {
      id: true,
      personaId: true,
      username: true,
      activo: true,
      ultimoAccesoAt: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return usuario;
}

export async function buscarUsuarioPorUsername(username: string) {
  return prisma.usuario.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
      personaId: true,
      username: true,
      activo: true,
      ultimoAccesoAt: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

export async function buscarUsuarioParaAutenticacion(username: string) {
  return prisma.usuario.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
      personaId: true,
      username: true,
      passwordHash: true,
      activo: true,
    },
  });
}

export async function verificarPassword(
  password: string,
  passwordHash: string,
) {
  return argon2.verify(passwordHash, password);
}
