import { prisma } from "./src/lib/prisma.js";

console.log(
  Object.keys(prisma).filter((key) => key.toLowerCase().includes("rol"))
);

await prisma.$disconnect();
