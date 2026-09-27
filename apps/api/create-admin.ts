import argon2 from "argon2";
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { prisma } from "./src/lib/prisma.js";

const rl = createInterface({ input, output });

try {
  const username = "administrador";

  const existente = await prisma.usuario.findUnique({
    where: { username },
  });

  if (existente) {
    throw new Error(`El usuario "${username}" ya existe.`);
  }

  const password = await new Promise<string>((resolve) => {
    process.stdout.write("Contraseña inicial del administrador: ");

    const stdin = process.stdin;

    stdin.setRawMode?.(true);
    stdin.resume();
    stdin.setEncoding("utf8");

    let value = "";

    const onData = (chunk: string) => {
      for (const char of chunk) {
        if (char === "\r" || char === "\n") {
          stdin.setRawMode?.(false);
          stdin.pause();
          stdin.removeListener("data", onData);
          process.stdout.write("\n");
          resolve(value);
          return;
        }

        if (char === "\u0003") {
          stdin.setRawMode?.(false);
          stdin.pause();
          stdin.removeListener("data", onData);
          process.stdout.write("\n");
          process.exit(1);
        }

        if (char === "\u007f") {
          if (value.length > 0) {
            value = value.slice(0, -1);
          }
          continue;
        }

        value += char;
      }
    };

    stdin.on("data", onData);
  });

  if (!password) {
    throw new Error("La contraseña no puede estar vacía.");
  }

  const passwordHash = await argon2.hash(password, {
    type: argon2.argon2id,
  });

  const resultado = await prisma.$transaction(async (tx) => {
    const persona = await tx.persona.create({
      data: {
        nombre: "Administración",
        apellidos: "UMT",
        activo: true,
      },
    });

    let rol = await tx.rolFuncional.findUnique({
      where: {
        codigo: "ADMINISTRADOR",
      },
    });

    if (!rol) {
      rol = await tx.rolFuncional.create({
        data: {
          codigo: "ADMINISTRADOR",
          nombre: "Administrador",
          descripcion: "Administrador del ERP de la Unión Musical de Tenorio.",
          activo: true,
        },
      });
    }

    await tx.personaRolFuncional.create({
      data: {
        personaId: persona.id,
        rolFuncionalId: rol.id,
      },
    });

    const usuario = await tx.usuario.create({
      data: {
        personaId: persona.id,
        username,
        passwordHash,
        activo: true,
      },
      select: {
        id: true,
        personaId: true,
        username: true,
        activo: true,
      },
    });

    return {
      persona,
      usuario,
      rol,
    };
  });

  console.log("\nAdministrador creado correctamente.");
  console.log(`Usuario: ${resultado.usuario.username}`);
  console.log(`Persona: ${resultado.persona.nombre} ${resultado.persona.apellidos}`);
  console.log(`Rol: ${resultado.rol.nombre}`);
} finally {
  rl.close();
  await prisma.$disconnect();
}