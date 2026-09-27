import { buscarUsuarioParaAutenticacion, verificarPassword, } from "./usuario.js";
export async function autenticarUsuario(username, password) {
    const usuario = await buscarUsuarioParaAutenticacion(username);
    if (!usuario || !usuario.activo) {
        return null;
    }
    const passwordValida = await verificarPassword(password, usuario.passwordHash);
    if (!passwordValida) {
        return null;
    }
    return {
        id: usuario.id,
        personaId: usuario.personaId,
        username: usuario.username,
    };
}
//# sourceMappingURL=auth.js.map