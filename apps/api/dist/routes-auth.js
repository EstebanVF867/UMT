import { z } from "zod";
import { autenticarUsuario } from "./lib/auth.js";
import { prisma } from "./lib/prisma.js";
import { revocarSesion, validarSesion } from "./lib/session.js";
import { crearSesion } from "./lib/session.js";
const loginSchema = z.object({
    username: z.string().trim().min(1),
    password: z.string().min(1),
});
export async function authRoutes(app) {
    app.post("/auth/login", async (request, reply) => {
        const parsed = loginSchema.safeParse(request.body);
        if (!parsed.success) {
            return reply.code(400).send({
                error: "Datos de acceso no válidos",
            });
        }
        const usuario = await autenticarUsuario(parsed.data.username, parsed.data.password);
        if (!usuario) {
            return reply.code(401).send({
                error: "Usuario o contraseña incorrectos",
            });
        }
        const { token, session } = await crearSesion(usuario.id, request.ip, request.headers["user-agent"]);
        reply.setCookie("umt_session", token, {
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 8 * 60 * 60,
        });
        return reply.send({
            usuario: {
                id: usuario.id,
                personaId: usuario.personaId,
                username: usuario.username,
            },
            sesion: {
                id: session.id,
                expiresAt: session.expiresAt,
            },
        });
    });
    app.get("/auth/me", async (request, reply) => {
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
                personaId: true,
                username: true,
                activo: true,
            },
        });
        if (!usuario || !usuario.activo) {
            return reply.code(401).send({
                error: "Usuario no disponible",
            });
        }
        return reply.send({
            usuario,
            sesion: {
                id: session.id,
                expiresAt: session.expiresAt,
            },
        });
    });
    app.post("/auth/logout", async (request, reply) => {
        const token = request.cookies.umt_session;
        if (token) {
            await revocarSesion(token);
        }
        reply.clearCookie("umt_session", {
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            path: "/",
        });
        return reply.send({
            ok: true,
        });
    });
}
//# sourceMappingURL=routes-auth.js.map