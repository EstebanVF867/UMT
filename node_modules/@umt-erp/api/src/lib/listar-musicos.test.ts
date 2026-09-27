import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { prisma } from './prisma.js';
import { crearMusico } from './crear-musico.js';
import { listarMusicos } from './miembros.js';

describe('listarMusicos', () => {
  let musicoId: string;
  let personaId: string;

  beforeEach(async () => {
    const resultado = await crearMusico({
      nombre: 'PruebaLista',
      apellidos: 'TestMusico',
      dni: '99999999Z',
      fechaInicio: new Date('2026-01-01'),
    });

    musicoId = resultado.id;
    personaId = resultado.personaId;

    await prisma.persona.update({
      where: { id: personaId },
      data: { activo: true },
    });
  });

  afterEach(async () => {
    if (personaId) {
      const musicosAsociados = await prisma.musico.findMany({
        where: { personaId },
        select: { id: true },
      });
      const idsMusicos = musicosAsociados.map((m) => m.id);

      if (idsMusicos.length > 0) {
        await prisma.musicoperiodo.deleteMany({
          where: { musicoId: { in: idsMusicos } },
        });
        await prisma.musico.deleteMany({
          where: { id: { in: idsMusicos } },
        });
      }

      await prisma.personarolfuncional.deleteMany({ where: { personaId } });
      await prisma.persona.deleteMany({ where: { id: personaId } });
    }
  });

  it('obtiene el listado de músicos activos incluyendo el período actual', async () => {
    const resultado = await listarMusicos({ estado: 'ACTIVO', busqueda: 'PruebaLista' });
    expect(resultado.length).toBeGreaterThanOrEqual(1);

    const enlazado = resultado.find((m) => m.id === musicoId);
    expect(enlazado).toBeDefined();
    expect(enlazado?.nombre).toBe('PruebaLista');
    expect(enlazado?.periodoActual).not.toBeNull();
  });
});
