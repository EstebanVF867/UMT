import { prisma } from "./src/lib/prisma.js";

const musico = await prisma.musico.findUnique({
  where: {
    id: "cbb9173f-37eb-4048-8e52-d7100e876b9a",
  },
  include: {
    persona: true,
    musicoperiodo: true,
  },
});

console.log(JSON.stringify(musico, null, 2));

await prisma.$disconnect();