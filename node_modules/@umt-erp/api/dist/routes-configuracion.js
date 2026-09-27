import { protegerAdministrador } from "./lib/api-auth.js";
import { crearFamilia, editarFamilia, listarFamilias, } from "./lib/configuracion-familias.js";
import { crearInstrumento, editarInstrumento, listarInstrumentos, } from "./lib/configuracion-instrumentos.js";
import { crearAgrupacion, editarAgrupacion, listarAgrupaciones, } from "./lib/configuracion-agrupaciones.js";
import { crearSeccion, editarSeccion, listarSecciones, } from "./lib/configuracion-secciones.js";
import { crearAula, editarAula, listarAulas, } from "./lib/configuracion-aulas.js";
export async function configuracionRoutes(app) {
    app.get("/secciones", {
        preHandler: protegerAdministrador,
    }, async (_request, reply) => {
        try {
            const secciones = await listarSecciones();
            return reply.send({
                secciones,
            });
        }
        catch (error) {
            return reply.code(400).send({
                error: error.message || "Error al obtener las secciones.",
            });
        }
    });
    app.post("/secciones", {
        preHandler: protegerAdministrador,
    }, async (request, reply) => {
        try {
            const seccion = await crearSeccion(request.body);
            return reply.code(201).send(seccion);
        }
        catch (error) {
            return reply.code(400).send({
                error: error.message || "Error al crear la sección.",
            });
        }
    });
    app.patch("/secciones/:id", {
        preHandler: protegerAdministrador,
    }, async (request, reply) => {
        try {
            const seccion = await editarSeccion(request.params.id, request.body);
            return reply.send(seccion);
        }
        catch (error) {
            return reply.code(400).send({
                error: error.message || "Error al editar la sección.",
            });
        }
    });
    app.get("/familias", {
        preHandler: protegerAdministrador,
    }, async (_request, reply) => {
        try {
            const familias = await listarFamilias();
            return reply.send({
                familias,
            });
        }
        catch (error) {
            return reply.code(400).send({
                error: error.message || "Error al obtener las familias.",
            });
        }
    });
    app.post("/familias", {
        preHandler: protegerAdministrador,
    }, async (request, reply) => {
        try {
            const familia = await crearFamilia(request.body);
            return reply.code(201).send(familia);
        }
        catch (error) {
            return reply.code(400).send({
                error: error.message || "Error al crear la familia.",
            });
        }
    });
    app.patch("/familias/:id", {
        preHandler: protegerAdministrador,
    }, async (request, reply) => {
        try {
            const familia = await editarFamilia(request.params.id, request.body);
            return reply.send(familia);
        }
        catch (error) {
            return reply.code(400).send({
                error: error.message || "Error al editar la familia.",
            });
        }
    });
    app.get("/instrumentos", {
        preHandler: protegerAdministrador,
    }, async (_request, reply) => {
        try {
            const instrumentos = await listarInstrumentos();
            return reply.send({
                instrumentos,
            });
        }
        catch (error) {
            return reply.code(400).send({
                error: error.message || "Error al obtener los instrumentos.",
            });
        }
    });
    app.post("/instrumentos", {
        preHandler: protegerAdministrador,
    }, async (request, reply) => {
        try {
            const instrumento = await crearInstrumento(request.body);
            return reply.code(201).send(instrumento);
        }
        catch (error) {
            return reply.code(400).send({
                error: error.message || "Error al crear el instrumento.",
            });
        }
    });
    app.patch("/instrumentos/:id", {
        preHandler: protegerAdministrador,
    }, async (request, reply) => {
        try {
            const instrumento = await editarInstrumento(request.params.id, request.body);
            return reply.send(instrumento);
        }
        catch (error) {
            return reply.code(400).send({
                error: error.message || "Error al editar el instrumento.",
            });
        }
    });
    app.get("/agrupaciones", {
        preHandler: protegerAdministrador,
    }, async (_request, reply) => {
        try {
            const agrupaciones = await listarAgrupaciones();
            return reply.send({
                agrupaciones,
            });
        }
        catch (error) {
            return reply.code(400).send({
                error: error.message || "Error al obtener las agrupaciones.",
            });
        }
    });
    app.post("/agrupaciones", {
        preHandler: protegerAdministrador,
    }, async (request, reply) => {
        try {
            const agrupacion = await crearAgrupacion(request.body);
            return reply.code(201).send(agrupacion);
        }
        catch (error) {
            return reply.code(400).send({
                error: error.message || "Error al crear la agrupación.",
            });
        }
    });
    app.patch("/agrupaciones/:id", {
        preHandler: protegerAdministrador,
    }, async (request, reply) => {
        try {
            const agrupacion = await editarAgrupacion(request.params.id, request.body);
            return reply.send(agrupacion);
        }
        catch (error) {
            return reply.code(400).send({
                error: error.message || "Error al editar la agrupación.",
            });
        }
    });
    app.get("/aulas", {
        preHandler: protegerAdministrador,
    }, async (_request, reply) => {
        try {
            const aulas = await listarAulas();
            return reply.send({
                aulas,
            });
        }
        catch (error) {
            return reply.code(400).send({
                error: error.message || "Error al obtener las aulas.",
            });
        }
    });
    app.post("/aulas", {
        preHandler: protegerAdministrador,
    }, async (request, reply) => {
        try {
            const aula = await crearAula(request.body);
            return reply.code(201).send(aula);
        }
        catch (error) {
            return reply.code(400).send({
                error: error.message || "Error al crear el aula.",
            });
        }
    });
    app.patch("/aulas/:id", {
        preHandler: protegerAdministrador,
    }, async (request, reply) => {
        try {
            const aula = await editarAula(request.params.id, request.body);
            return reply.send(aula);
        }
        catch (error) {
            return reply.code(400).send({
                error: error.message || "Error al editar el aula.",
            });
        }
    });
}
//# sourceMappingURL=routes-configuracion.js.map