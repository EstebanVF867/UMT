import type { FastifyInstance } from "fastify";
import { crearMusico } from "./lib/crear-musico.js";
import { editarMusico } from "./lib/editar-musico.js";
import { listarMusicos, obtenerMusico } from "./lib/miembros.js";
import { buscarPersonasDisponiblesParaMusico, buscarPersonasDisponiblesParaAlumno, buscarPersonasDisponiblesParaDirector } from "./lib/personas.js";
import {
  crearPeriodoMusico,
  cerrarPeriodoMusico,
} from "./lib/periodos-musico.js";

import { crearAlumno } from "./lib/crear-alumno.js";
import { editarAlumno } from "./lib/editar-alumno.js";
import { listarAlumnos, obtenerAlumno } from "./lib/alumnos.js";
import {
  crearPeriodoAlumno,
  cerrarPeriodoAlumno,
} from "./lib/periodos-alumno.js";

import { crearDirector } from "./lib/crear-director.js";
import {
  listarDirectores,
  obtenerDirector,
} from "./lib/directores.js";
import {
  crearPeriodoDirector,
  cerrarPeriodoDirector,
  reactivarDirector,
} from "./lib/periodos-director.js";

type ListarMusicosQuery = {
  estado?: string;
  busqueda?: string;
  instrumentoId?: string;
  agrupacionId?: string;
};

type ListarAlumnosQuery = {
  estado?: string;
  busqueda?: string;
  instrumentoId?: string;
  agrupacionId?: string;
};

type PeriodoParams = {
  id: string;
};

type CerrarPeriodoParams = {
  id: string;
  periodoId: string;
};

type CrearMusicoBody = {
  personaId?: string | null;
  nombre?: string;
  apellidos?: string;
  dni?: string | null;
  fechaNacimiento?: string | null;
  email?: string | null;
  telefono?: string | null;
  observacionesPersona?: string | null;
  fechaInicio: string;
  fechaFin?: string | null;
  motivoBaja?:
    | "BAJA_VOLUNTARIA"
    | "DEJA_DE_PERTENECER_UMT"
    | "OTRO"
    | null;
  instrumentoPrincipalId?: string | null;
  segundoInstrumentoId?: string | null;
  agrupacionId?: string | null;
  observacionesPeriodo?: string | null;
  observacionesMusico?: string | null;
};

type CrearAlumnoBody = {
  personaId?: string | null;
  nombre?: string;
  apellidos?: string;
  dni?: string | null;
  fechaNacimiento?: string | null;
  email?: string | null;
  telefono?: string | null;
  observacionesPersona?: string | null;
  fechaInicio: string;
  fechaFin?: string | null;
  motivoBaja?:
    | "FINALIZACION_ESTUDIOS"
    | "BAJA_VOLUNTARIA"
    | "TRASLADO"
    | "ABANDONO"
    | "OTRO"
    | null;
  instrumentoPrincipalId?: string | null;
  segundoInstrumentoId?: string | null;
  agrupacionId?: string | null;
  observacionesPeriodo?: string | null;
  observacionesAlumno?: string | null;
};

function convertirFecha(
  fecha: string | null | undefined,
): Date | null | undefined {
  if (fecha == null || fecha === "") {
    return fecha === null ? null : undefined;
  }

  const partes = fecha.split("-");

  if (partes.length !== 3) {
    throw new Error("El formato de fecha no es válido.");
  }

  const anio = Number(partes[0]);
  const mes = Number(partes[1]);
  const dia = Number(partes[2]);

  if (
    !Number.isInteger(anio) ||
    !Number.isInteger(mes) ||
    !Number.isInteger(dia)
  ) {
    throw new Error("El formato de fecha no es válido.");
  }

  const resultado = new Date(
    Date.UTC(anio, mes - 1, dia),
  );

  if (
    resultado.getUTCFullYear() !== anio ||
    resultado.getUTCMonth() !== mes - 1 ||
    resultado.getUTCDate() !== dia
  ) {
    throw new Error("La fecha indicada no es válida.");
  }

  return resultado;
}

export async function miembrosRoutes(app: FastifyInstance) {
  app.get(
    "/personas-disponibles-para-alumno",
    async (request, reply) => {
      const query = request.query as { busqueda?: string };

      const personas = await buscarPersonasDisponiblesParaAlumno(
        query.busqueda ?? "",
      );

      return reply.send(personas);
    },
  );
  app.get(
    "/personas-disponibles-para-musico",
    async (request, reply) => {
      const query = request.query as { busqueda?: string };

      const personas = await buscarPersonasDisponiblesParaMusico(
        query.busqueda ?? "",
      );

      return reply.send(personas);
    },
  );

  app.get(
    "/personas-disponibles-para-director",
    async (request, reply) => {
      const query = request.query as { busqueda?: string };

      const personas = await buscarPersonasDisponiblesParaDirector(
        query.busqueda ?? "",
      );

      return reply.send(personas);
    },
  );

  app.get<{ Querystring: ListarMusicosQuery }>(
    "/musicos",
    async (request, reply) => {
      try {
        const {
          estado,
          busqueda,
          instrumentoId,
          agrupacionId,
        } = request.query;

        const filtros: Parameters<typeof listarMusicos>[0] = {};

        if (estado !== undefined) {
          filtros.estado = estado as
            | "ACTIVO"
            | "BAJA"
            | "TODOS";
        }

        if (busqueda !== undefined) {
          filtros.busqueda = busqueda;
        }

        if (instrumentoId !== undefined) {
          filtros.instrumentoId = instrumentoId;
        }

        if (agrupacionId !== undefined) {
          filtros.agrupacionId = agrupacionId;
        }

        const musicos = await listarMusicos(filtros);

        return reply.send({
          total: musicos.length,
          musicos,
        });
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message ||
            "Error al obtener la lista de músicos.",
        });
      }
    },
  );

  app.get<{ Params: { id: string } }>(
    "/musicos/:id",
    async (request, reply) => {
      try {
        const musico = await obtenerMusico(request.params.id);

        if (!musico) {
          return reply.code(404).send({
            error: "El músico no existe.",
          });
        }

        return reply.send(musico);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message ||
            "Error al obtener el expediente del músico.",
        });
      }
    },
  );

  app.post("/musicos", async (request, reply) => {
    try {
      const body = request.body as CrearMusicoBody;

      const resultado = await crearMusico({
        ...body,
        fechaNacimiento: convertirFecha(
          body.fechaNacimiento,
        ),
        fechaInicio: convertirFecha(body.fechaInicio) as Date,
        fechaFin: convertirFecha(body.fechaFin),
      });

      return reply.code(201).send(resultado);
    } catch (error: any) {
      return reply.code(400).send({
        error: error.message || "Error al crear el músico.",
      });
    }
  });

  app.patch<{ Params: { id: string } }>(
    "/musicos/:id",
    async (request, reply) => {
      try {
        const body = request.body as {
          nombre: string;
          apellidos: string;
          dni?: string | null;
          fechaNacimiento?: string | null;
          email?: string | null;
          telefono?: string | null;
          observacionesPersona?: string | null;
          instrumentoPrincipalId?: string | null;
          segundoInstrumentoId?: string | null;
          agrupacionId?: string | null;
          observacionesMusico?: string | null;
          observacionesPeriodo?: string | null;
        };

        const resultado = await editarMusico({
          musicoId: request.params.id,
          nombre: body.nombre,
          apellidos: body.apellidos,
          dni: body.dni ?? null,
          fechaNacimiento:
            convertirFecha(body.fechaNacimiento) ?? null,
          email: body.email ?? null,
          telefono: body.telefono ?? null,
          observacionesPersona:
            body.observacionesPersona ?? null,
          instrumentoPrincipalId:
            body.instrumentoPrincipalId ?? null,
          segundoInstrumentoId:
            body.segundoInstrumentoId ?? null,
          agrupacionId: body.agrupacionId ?? null,
          observacionesMusico:
            body.observacionesMusico ?? null,
          observacionesPeriodo:
            body.observacionesPeriodo ?? null,
        });

        return reply.send(resultado);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al editar el músico.",
        });
      }
    },
  );

  app.post<{ Params: PeriodoParams }>(
    "/musicos/:id/periodos",
    async (request, reply) => {
      try {
        const periodo = await crearPeriodoMusico({
          ...(request.body as any),
          musicoId: request.params.id,
        });

        return reply.code(201).send(periodo);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al registrar el período.",
        });
      }
    },
  );

  app.patch<{ Params: CerrarPeriodoParams }>(
    "/musicos/:id/periodos/:periodoId/cerrar",
    async (request, reply) => {
      try {
        const body = request.body as any;

        const periodo = await cerrarPeriodoMusico(
          request.params.id,
          request.params.periodoId,
          new Date(`${body.fechaFin}T00:00:00.000Z`),
          body.motivoBaja,
          body.observaciones,
        );

        return reply.send(periodo);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al cerrar el período.",
        });
      }
    },
  );

  app.get<{ Querystring: ListarAlumnosQuery }>(
    "/alumnos",
    async (request, reply) => {
      try {
        const {
          estado,
          busqueda,
          instrumentoId,
          agrupacionId,
        } = request.query;

        const filtros: Parameters<typeof listarAlumnos>[0] = {};

        if (estado !== undefined) {
          filtros.estado = estado as
            | "ACTIVO"
            | "BAJA"
            | "TODOS";
        }

        if (busqueda !== undefined) {
          filtros.busqueda = busqueda;
        }

        if (instrumentoId !== undefined) {
          filtros.instrumentoId = instrumentoId;
        }

        if (agrupacionId !== undefined) {
          filtros.agrupacionId = agrupacionId;
        }

        const alumnos = await listarAlumnos(filtros);

        return reply.send({
          total: alumnos.length,
          alumnos,
        });
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message ||
            "Error al obtener la lista de alumnos.",
        });
      }
    },
  );

  app.get<{ Params: { id: string } }>(
    "/alumnos/:id",
    async (request, reply) => {
      try {
        const alumno = await obtenerAlumno(request.params.id);

        if (!alumno) {
          return reply.code(404).send({
            error: "El alumno no existe.",
          });
        }

        return reply.send(alumno);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message ||
            "Error al obtener el expediente del alumno.",
        });
      }
    },
  );

  app.post("/alumnos", async (request, reply) => {
    try {
      const body = request.body as CrearAlumnoBody;

      const resultado = await crearAlumno({
        ...body,
        fechaNacimiento: convertirFecha(
          body.fechaNacimiento,
        ),
        fechaInicio: convertirFecha(body.fechaInicio) as Date,
        fechaFin: convertirFecha(body.fechaFin),
      });

      return reply.code(201).send(resultado);
    } catch (error: any) {
      return reply.code(400).send({
        error: error.message || "Error al crear el alumno.",
      });
    }
  });
  app.patch<{ Params: { id: string } }>(
    "/alumnos/:id",
    async (request, reply) => {
      try {
        const body = request.body as {
          nombre: string;
          apellidos: string;
          dni?: string | null;
          fechaNacimiento?: string | null;
          email?: string | null;
          telefono?: string | null;
          observacionesPersona?: string | null;
          instrumentoPrincipalId?: string | null;
          segundoInstrumentoId?: string | null;
          agrupacionId?: string | null;
          observacionesAlumno?: string | null;
          observacionesPeriodo?: string | null;
        };

        const resultado = await editarAlumno({
          alumnoId: request.params.id,
          nombre: body.nombre,
          apellidos: body.apellidos,
          dni: body.dni ?? null,
          fechaNacimiento:
            convertirFecha(body.fechaNacimiento) ?? null,
          email: body.email ?? null,
          telefono: body.telefono ?? null,
          observacionesPersona:
            body.observacionesPersona ?? null,
          instrumentoPrincipalId:
            body.instrumentoPrincipalId ?? null,
          segundoInstrumentoId:
            body.segundoInstrumentoId ?? null,
          agrupacionId: body.agrupacionId ?? null,
          observacionesAlumno:
            body.observacionesAlumno ?? null,
          observacionesPeriodo:
            body.observacionesPeriodo ?? null,
        });

        return reply.send(resultado);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al editar el alumno.",
        });
      }
    },
  );

  app.post<{ Params: PeriodoParams }>(
    "/alumnos/:id/periodos",
    async (request, reply) => {
      try {
        const body = request.body as any;

        const periodo = await crearPeriodoAlumno({
          ...body,
          alumnoId: request.params.id,
          fechaInicio: convertirFecha(body.fechaInicio) as Date,
          fechaFin: convertirFecha(body.fechaFin),
        });

        return reply.code(201).send(periodo);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al registrar el período.",
        });
      }
    },
  );

  app.patch<{ Params: CerrarPeriodoParams }>(
    "/alumnos/:id/periodos/:periodoId/cerrar",
    async (request, reply) => {
      try {
        const body = request.body as any;

        const periodo = await cerrarPeriodoAlumno(
          request.params.id,
          request.params.periodoId,
          new Date(`${body.fechaFin}T00:00:00.000Z`),
          body.motivoBaja,
          body.observaciones,
        );

        return reply.send(periodo);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al cerrar el período.",
        });
      }
    },
  );

  app.get<{ Querystring: {
    estado?: string;
    busqueda?: string;
    agrupacionId?: string;
  } }>(
    "/directores",
    async (request, reply) => {
      try {
        const {
          estado,
          busqueda,
          agrupacionId,
        } = request.query;

        const filtros: Parameters<typeof listarDirectores>[0] = {};

        if (estado !== undefined) {
          filtros.estado = estado as
            | "ACTIVO"
            | "BAJA"
            | "TODOS";
        }

        if (busqueda !== undefined) {
          filtros.busqueda = busqueda;
        }

        if (agrupacionId !== undefined) {
          filtros.agrupacionId = agrupacionId;
        }

        const directores = await listarDirectores(filtros);

        return reply.send({
          total: directores.length,
          directores,
        });
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message ||
            "Error al obtener la lista de directores.",
        });
      }
    },
  );

  app.get<{ Params: { id: string } }>(
    "/directores/:id",
    async (request, reply) => {
      try {
        const director = await obtenerDirector(request.params.id);

        if (!director) {
          return reply.code(404).send({
            error: "El director no existe.",
          });
        }

        return reply.send(director);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message ||
            "Error al obtener el expediente del director.",
        });
      }
    },
  );

  app.post("/directores", async (request, reply) => {
    try {
      const body = request.body as any;

      const resultado = await crearDirector({
        ...body,
        fechaNacimiento: convertirFecha(
          body.fechaNacimiento,
        ),
        fechaInicio: convertirFecha(body.fechaInicio) as Date,
        fechaFin: convertirFecha(body.fechaFin),
      });

      return reply.code(201).send(resultado);
    } catch (error: any) {
      return reply.code(400).send({
        error:
          error.message || "Error al crear el director.",
      });
    }
  });

  app.post<{ Params: PeriodoParams }>(
    "/directores/:id/periodos",
    async (request, reply) => {
      try {
        const body = request.body as any;

        const periodo = await crearPeriodoDirector({
          ...body,
          directorId: request.params.id,
          fechaInicio:
            convertirFecha(body.fechaInicio) as Date,
          fechaFin: convertirFecha(body.fechaFin),
        });

        return reply.code(201).send(periodo);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al registrar el período.",
        });
      }
    },
  );

  app.patch<{ Params: CerrarPeriodoParams }>(
    "/directores/:id/periodos/:periodoId/cerrar",
    async (request, reply) => {
      try {
        const body = request.body as any;

        const periodo = await cerrarPeriodoDirector(
          request.params.id,
          request.params.periodoId,
          convertirFecha(body.fechaFin) as Date,
          body.motivoBaja,
          body.observaciones,
        );

        return reply.send(periodo);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al cerrar el período.",
        });
      }
    },
  );

  app.post<{ Params: { id: string } }>(
    "/directores/:id/reactivar",
    async (request, reply) => {
      try {
        const body = request.body as any;

        const periodo = await reactivarDirector(
          request.params.id,
          convertirFecha(body.fechaInicio) as Date,
          body.agrupacionIds,
          body.observaciones,
        );

        return reply.code(201).send(periodo);
      } catch (error: any) {
        return reply.code(400).send({
          error:
            error.message || "Error al reactivar el director.",
        });
      }
    },
  );
}
