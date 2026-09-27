import type { FastifyReply, FastifyRequest } from "fastify";
import { validarSesion } from "./session.js";
import { prisma } from "./prisma.js";

export async function protegerApi(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const token = request.cookies.umt_session;

  if (!token) {
    return reply.code(401).send({
      error: "Autenticación requerida",
    });
  }

  const session = await validarSesion(token);

  if (!session) {
    return reply.code(401).send({
      error: "Sesión no válida",
    });
  }

  request.user = {
    id: session.userId,
  };
}

export async function protegerAdministrador(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const token = request.cookies.umt_session;

  if (!token) {
    return reply.code(401).send({
      error: "Autenticación requerida",
    });
  }

  const session = await validarSesion(token);

  if (!session) {
    return reply.code(401).send({
      error: "Sesión no válida",
    });
  }

  const usuario = await prisma.usuario.findUnique({
    where: {
      id: session.userId,
    },
    select: {
      id: true,
      activo: true,
      persona: {
        select: {
          personarolfuncional: {
            where: {
              rolfuncional: {
                codigo: "ADMINISTRADOR",
                activo: true,
              },
            },
            select: {
              id: true,
            },
            take: 1,
          },
        },
      },
    },
  });

  if (!usuario || !usuario.activo) {
    return reply.code(401).send({
      error: "Usuario no disponible",
    });
  }

  const esAdministrador =
    usuario.persona.personarolfuncional.length > 0;

  if (!esAdministrador) {
    return reply.code(403).send({
      error: "Permisos insuficientes",
    });
  }

  request.user = {
    id: session.userId,
  };
}