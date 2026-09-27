import { useState } from "react";
import type { FormEvent } from "react";
import { iniciarSesion } from "../../lib/api";
import "./Login.css";
import logoUmt from "../../assets/logo-umt.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    const usuario = username.trim();

    if (!usuario || !password) {
      setError("Introduce el usuario y la contraseña.");
      return;
    }

    setCargando(true);

    try {
      await iniciarSesion(usuario, password);
      window.location.reload();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No se ha podido iniciar sesión.",
      );
    } finally {
      setCargando(false);
    }
  }

  return (
    <main className="login-page">
      <section className="login-card" aria-labelledby="login-title">
        <header className="login-header">
          <img
            src={logoUmt}
            alt="Unión Musical de Tenorio"
            className="login-logo"
          />

          <p className="login-brand">UMT-ERP</p>
        </header>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label htmlFor="username">Usuario</label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="username"
              autoFocus
              disabled={cargando}
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              disabled={cargando}
            />
          </div>

          {error && (
            <p className="login-error" role="alert">
              {error}
            </p>
          )}

          <button
            className="login-button"
            type="submit"
            disabled={cargando}
          >
            {cargando ? "Accediendo..." : "Iniciar sesión"}
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
