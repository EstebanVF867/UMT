import { prisma } from "./apps/api/src/lib/prisma.js";

const roles = await prisma.rolfuncional.findMany({
  orderBy: {
    codigo: "asc",
  },
});

console.log(JSON.stringify(roles, null, 2));

await prisma.$disconnect();
