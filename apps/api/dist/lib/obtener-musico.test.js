import { describe, expect, it } from "vitest";
import { listarMusicos, obtenerMusico } from "./miembros.js";
describe("obtenerMusico", () => {
    it("devuelve el expediente completo de un m�sico existente", async () => {
        const musicos = await listarMusicos();
        expect(musicos.length).toBeGreaterThan(0);
        const primerMusico = musicos[0];
        if (!primerMusico) {
            throw new Error("El listado no contiene ning�n m�sico.");
        }
        const musico = await obtenerMusico(primerMusico.id);
        expect(musico).not.toBeNull();
        if (!musico) {
            return;
        }
        expect(musico.id).toBe(primerMusico.id);
        expect(musico.persona).toBeDefined();
        expect(musico.musico).toBeDefined();
        expect(Array.isArray(musico.periodos)).toBe(true);
        expect(Array.isArray(musico.instrumentos)).toBe(true);
        expect(Array.isArray(musico.agrupaciones)).toBe(true);
        expect(Array.isArray(musico.roles)).toBe(true);
    });
    it("devuelve null cuando el m�sico no existe", async () => {
        const musico = await obtenerMusico("00000000-0000-0000-0000-000000000000");
        expect(musico).toBeNull();
    });
});
//# sourceMappingURL=obtener-musico.test.js.map