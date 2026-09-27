import { prisma } from './prisma.js';

export interface FiltrosListarMusicos {
  estado?: 'ACTIVO' | 'BAJA' | 'TODOS';
  busqueda?: string;
}

export async function listarMusicos(filtros: FiltrosListarMusicos = {}) {
  const personaConditions: any[] = [];

  if (filtros.estado === 'ACTIVO') {
    personaConditions.push({ activo: true });
  } else if (filtros.estado === 'BAJA') {
    personaConditions.push({ activo: false });
  }

  if (filtros.busqueda && filtros.busqueda.trim() !== '') {
    const busqueda = filtros.busqueda.trim();
    personaConditions.push({
      OR: [
{ nombre: { contains: busqueda } },
{ apellidos: { contains: busqueda } },
{ dni: { contains: busqueda } },
      ],
    });
  }

  const whereCondition: any = {};
  if (personaConditions.length > 0) {
    whereCondition.persona = {
      AND: personaConditions,
    };
  }

  const musicos = await prisma.musico.findMany({
    where: whereCondition,
    include: {
      persona: true,
      musicoperiodo: {
        orderBy: {
          fechaInicio: 'desc',
        },
        take: 1,
      },
    },
    orderBy: {
      persona: {
        apellidos: 'asc',
      },
    },
  });

  return musicos.map((m) => {
    const periodoActual = m.musicoperiodo[0] || null;
    return {
      id: m.id,
      personaId: m.personaId,
      nombre: m.persona.nombre,
      apellidos: m.persona.apellidos,
      dni: m.persona.dni,
      activo: m.persona.activo,
      fechaAlta: m.fechaAlta,
      periodoActual: periodoActual
        ? {
            id: periodoActual.id,
            fechaInicio: periodoActual.fechaInicio,
            fechaFin: periodoActual.fechaFin,
            motivoBaja: periodoActual.motivoBaja,
          }
        : null,
    };
  });
}