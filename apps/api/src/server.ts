import "dotenv/config";
import Fastify from "fastify";
import cookie from "@fastify/cookie";
import { prisma } from "./lib/prisma.js";
import { authRoutes } from "./routes-auth.js";
import { miembrosRoutes } from "./routes-miembros.js";
import { configuracionRoutes } from "./routes-configuracion.js";

const app = Fastify({
  logger: true,
});

await app.register(cookie, {
  hook: "onRequest",
});

await app.register(authRoutes);
await app.register(configuracionRoutes, { prefix: "/configuracion" });
await app.register(miembrosRoutes, { prefix: "/miembros" });

app.get("/health", async () => {
  return {
    status: "ok",
    service: "umt-erp-api",
  };
});

app.addHook("onReady", async () => {
  await prisma.$queryRaw`SELECT 1`;
  app.log.info("Prisma conectado correctamente a MariaDB");
});

app.addHook("onClose", async () => {
  await prisma.$disconnect();
});

const port = Number(process.env.PORT ?? 3000);
const host = process.env.HOST ?? "127.0.0.1";

try {
  await app.listen({ port, host });
} catch (error) {
  app.log.error(error);
  await prisma.$disconnect();
  process.exit(1);
}


