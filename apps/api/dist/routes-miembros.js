import { crearMusico } from "./lib/crear-musico.js";
import { editarMusico } from "./lib/editar-musico.js";
import { listarMusicos, obtenerMusico } from "./lib/miembros.js";
import { buscarPersonasDisponiblesParaMusico } from "./lib/personas.js";
import { crearPeriodoMusico, cerrarPeriodoMusico, } from "./lib/periodos-musico.js";
function convertirFecha(fecha) {
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
    if (!Number.isInteger(anio) ||
        !Number.isInteger(mes) ||
        !Number.isInteger(dia)) {
        throw new Error("El formato de fecha no es válido.");
    }
    const resultado = new Date(Date.UTC(anio, mes - 1, dia));
    if (resultado.getUTCFullYear() !== anio ||
        resultado.getUTCMonth() !== mes - 1 ||
        resultado.getUTCDate() !== dia) {
        throw new Error("La fecha indicada no es válida.");
    }
    return resultado;
}
export async function miembrosRoutes(app) {
    app.get("/personas-disponibles-para-musico", async (request, reply) => {
        const query = request.query;
        const personas = await buscarPersonasDisponiblesParaMusico(query.busqueda ?? "");
        return reply.send(personas);
    });
    app.get("/musicos", async (request, reply) => {
        try {
            const { estado, busqueda, instrumentoId, agrupacionId } = request.query;
            const filtros = {};
            if (estado !== undefined) {
                filtros.estado = estado;
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
        }
        catch (error) {
            return reply.code(400).send({
                error: error.message || "Error al obtener la lista de músicos.",
            });
        }
    });
    app.get("/musicos/:id", async (request, reply) => {
        try {
            const musico = await obtenerMusico(request.params.id);
            if (!musico) {
                return reply.code(404).send({
                    error: "El músico no existe.",
                });
            }
            return reply.send(musico);
        }
        catch (error) {
            return reply.code(400).send({
                error: error.message || "Error al obtener el expediente del músico.",
            });
        }
    });
    app.post("/musicos", async (request, reply) => {
        try {
            const body = request.body;
            const resultado = await crearMusico({
                ...body,
                fechaNacimiento: convertirFecha(body.fechaNacimiento),
                fechaInicio: convertirFecha(body.fechaInicio),
                fechaFin: convertirFecha(body.fechaFin),
            });
            return reply.code(201).send(resultado);
        }
        catch (error) {
            return reply.code(400).send({
                error: error.message || "Error al crear el músico.",
            });
        }
    });
    app.patch("/musicos/:id", async (request, reply) => {
        try {
            const body = request.body;
            const resultado = await editarMusico({
                musicoId: request.params.id,
                nombre: body.nombre,
                apellidos: body.apellidos,
                dni: body.dni ?? null,
                fechaNacimiento: convertirFecha(body.fechaNacimiento) ?? null,
                email: body.email ?? null,
                telefono: body.telefono ?? null,
                observacionesPersona: body.observacionesPersona ?? null,
                instrumentoPrincipalId: body.instrumentoPrincipalId ?? null,
                segundoInstrumentoId: body.segundoInstrumentoId ?? null,
                agrupacionId: body.agrupacionId ?? null,
                observacionesMusico: body.observacionesMusico ?? null,
                observacionesPeriodo: body.observacionesPeriodo ?? null,
            });
            return reply.send(resultado);
        }
        catch (error) {
            return reply.code(400).send({
                error: error.message || "Error al editar el músico.",
            });
        }
    });
    app.post("/musicos/:id/periodos", async (request, reply) => {
        try {
            const periodo = await crearPeriodoMusico({
                ...request.body,
                musicoId: request.params.id,
            });
            return reply.code(201).send(periodo);
        }
        catch (error) {
            return reply.code(400).send({
                error: error.message || "Error al registrar el período.",
            });
        }
    });
    app.patch("/musicos/:id/periodos/:periodoId/cerrar", async (request, reply) => {
        try {
            const body = request.body;
            const periodo = await cerrarPeriodoMusico(request.params.id, request.params.periodoId, new Date(`${body.fechaFin}T00:00:00.000Z`), body.motivoBaja, body.observaciones);
            return reply.send(periodo);
        }
        catch (error) {
            return reply.code(400).send({
                error: error.message || "Error al cerrar el período.",
            });
        }
    });
}
//# sourceMappingURL=routes-miembros.js.map