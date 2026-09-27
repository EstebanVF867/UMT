import type { FastifyInstance } from "fastify";
import { protegerAdministrador } from "./lib/api-auth.js";
import {
  crearFamilia,
  editarFamilia,
  listarFamilias,
} from "./lib/configuracion-familias.js";
import {
  crearInstrumento,
  editarInstrumento,
  listarInstrumentos,
} from "./lib/configuracion-instrumentos.js";
import {
  crearAgrupacion,
  editarAgrupacion,
  listarAgrupaciones,
} from "./lib/configuracion-agrupaciones.js";
import {
  crearSeccion,
  editarSeccion,
  listarSecciones,
} from "./lib/configuracion-secciones.js";
import {
  crearAula,
  editarAula,
  listarAulas,
} from "./lib/configuracion-aulas.js";

export async function configuracionRoutes(app: FastifyInstance) {
  app.get(
    "/secciones",
    {
      preHandler: protegerAdministrador,
    },
    async (_request, reply) => {
      try {
        const secciones = await listarSecciones();

        return reply.send({
          secciones,
        });
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al obtener las secciones.",
        });
      }
    },
  );

  app.post(
    "/secciones",
    {
      preHandler: protegerAdministrador,
    },
    async (request, reply) => {
      try {
        const seccion = await crearSeccion(request.body as any);

        return reply.code(201).send(seccion);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al crear la sección.",
        });
      }
    },
  );

  app.patch<{ Params: { id: string } }>(
    "/secciones/:id",
    {
      preHandler: protegerAdministrador,
    },
    async (request, reply) => {
      try {
        const seccion = await editarSeccion(
          request.params.id,
          request.body as any,
        );

        return reply.send(seccion);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al editar la sección.",
        });
      }
    },
  );

  app.get(
    "/familias",
    {
      preHandler: protegerAdministrador,
    },
    async (_request, reply) => {
      try {
        const familias = await listarFamilias();

        return reply.send({
          familias,
        });
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al obtener las familias.",
        });
      }
    },
  );

  app.post(
    "/familias",
    {
      preHandler: protegerAdministrador,
    },
    async (request, reply) => {
      try {
        const familia = await crearFamilia(request.body as any);

        return reply.code(201).send(familia);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al crear la familia.",
        });
      }
    },
  );

  app.patch<{ Params: { id: string } }>(
    "/familias/:id",
    {
      preHandler: protegerAdministrador,
    },
    async (request, reply) => {
      try {
        const familia = await editarFamilia(
          request.params.id,
          request.body as any,
        );

        return reply.send(familia);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al editar la familia.",
        });
      }
    },
  );

  app.get(
    "/instrumentos",
    {
      preHandler: protegerAdministrador,
    },
    async (_request, reply) => {
      try {
        const instrumentos = await listarInstrumentos();

        return reply.send({
          instrumentos,
        });
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al obtener los instrumentos.",
        });
      }
    },
  );

  app.post(
    "/instrumentos",
    {
      preHandler: protegerAdministrador,
    },
    async (request, reply) => {
      try {
        const instrumento = await crearInstrumento(
          request.body as any,
        );

        return reply.code(201).send(instrumento);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al crear el instrumento.",
        });
      }
    },
  );

  app.patch<{ Params: { id: string } }>(
    "/instrumentos/:id",
    {
      preHandler: protegerAdministrador,
    },
    async (request, reply) => {
      try {
        const instrumento = await editarInstrumento(
          request.params.id,
          request.body as any,
        );

        return reply.send(instrumento);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al editar el instrumento.",
        });
      }
    },
  );

  app.get(
    "/agrupaciones",
    {
      preHandler: protegerAdministrador,
    },
    async (_request, reply) => {
      try {
        const agrupaciones = await listarAgrupaciones();

        return reply.send({
          agrupaciones,
        });
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al obtener las agrupaciones.",
        });
      }
    },
  );

  app.post(
    "/agrupaciones",
    {
      preHandler: protegerAdministrador,
    },
    async (request, reply) => {
      try {
        const agrupacion = await crearAgrupacion(
          request.body as any,
        );

        return reply.code(201).send(agrupacion);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al crear la agrupación.",
        });
      }
    },
  );

  app.patch<{ Params: { id: string } }>(
    "/agrupaciones/:id",
    {
      preHandler: protegerAdministrador,
    },
    async (request, reply) => {
      try {
        const agrupacion = await editarAgrupacion(
          request.params.id,
          request.body as any,
        );

        return reply.send(agrupacion);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al editar la agrupación.",
        });
      }
    },
  );

  app.get(
    "/aulas",
    {
      preHandler: protegerAdministrador,
    },
    async (_request, reply) => {
      try {
        const aulas = await listarAulas();

        return reply.send({
          aulas,
        });
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al obtener las aulas.",
        });
      }
    },
  );

  app.post(
    "/aulas",
    {
      preHandler: protegerAdministrador,
    },
    async (request, reply) => {
      try {
        const aula = await crearAula(
          request.body as any,
        );

        return reply.code(201).send(aula);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al crear el aula.",
        });
      }
    },
  );

  app.patch<{ Params: { id: string } }>(
    "/aulas/:id",
    {
      preHandler: protegerAdministrador,
    },
    async (request, reply) => {
      try {
        const aula = await editarAula(
          request.params.id,
          request.body as any,
        );

        return reply.send(aula);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al editar el aula.",
        });
      }
    },
  );

}



