import { afterAll, describe, it } from "vitest";
import { prisma } from "./prisma.js";

describe("consulta temporal de roles", () => {
  it("muestra los roles funcionales", async () => {
    const roles = await prisma.rolfuncional.findMany({
      orderBy: { codigo: "asc" },
    });

    console.log(JSON.stringify(roles, null, 2));
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});
