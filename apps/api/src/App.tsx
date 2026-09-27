@'
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import { cerrarSesion, obtenerSesion } from "./lib/api";
import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Placeholder from "./pages/Placeholder/Placeholder";
import Musicos from "./pages/Miembros/Musicos/Musicos";
import NuevoMusico from "./pages/Miembros/Musicos/NuevoMusico";
import Configuracion from "./pages/Configuracion/Configuracion";

function App() {
  const [comprobandoSesion, setComprobandoSesion] = useState(true);
  const [sesionActiva, setSesionActiva] = useState(false);
  const [cerrandoSesion, setCerrandoSesion] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function comprobarSesion() {
      try {
        const usuario = await obtenerSesion();
        setSesionActiva(usuario !== null);
      } catch {
        setSesionActiva(false);
      } finally {
        setComprobandoSesion(false);
      }
    }

    void comprobarSesion();
  }, []);

  async function handleLogout() {
    setError("");
    setCerrandoSesion(true);

    try {
      await cerrarSesion();
      setSesionActiva(false);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No se ha podido cerrar la sesión.",
      );
    } finally {
      setCerrandoSesion(false);
    }
  }

  if (comprobandoSesion) {
    return <main>Comprobando sesión...</main>;
  }

  if (!sesionActiva) {
    return <Login />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <AppLayout
              onLogout={handleLogout}
              cerrandoSesion={cerrandoSesion}
              error={error}
            />
          }
        >
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/miembros/musicos"
            element={<Musicos />}
          />
          <Route
            path="/miembros/musicos/nuevo"
            element={<NuevoMusico />}
          />
          <Route
            path="/miembros/alumnos"
            element={<Placeholder />}
          />
          <Route
            path="/miembros/director"
            element={<Placeholder />}
          />

          <Route
            path="/profesores"
            element={<Placeholder />}
          />

          <Route
            path="/cuotas"
            element={<Placeholder />}
          />

          <Route
            path="/rrhh/contratos"
            element={<Placeholder />}
          />
          <Route
            path="/rrhh/nominas"
            element={<Placeholder />}
          />
          <Route
            path="/rrhh/asistencia"
            element={<Placeholder />}
          />
          <Route
            path="/rrhh/reparto"
            element={<Placeholder />}
          />

          <Route
            path="/contabilidad"
            element={<Placeholder />}
          />

          <Route
            path="/bancos-finanzas"
            element={<Placeholder />}
          />

          <Route
            path="/proveedores/facturas"
            element={<Placeholder />}
          />
          <Route
            path="/proveedores/pagos"
            element={<Placeholder />}
          />

          <Route
            path="/clientes/facturas"
            element={<Placeholder />}
          />
          <Route
            path="/clientes/cobros"
            element={<Placeholder />}
          />

          <Route
            path="/nextcloud"
            element={<Placeholder />}
          />

          <Route
            path="/auditoria"
            element={<Placeholder />}
          />

          <Route
            path="/configuracion"
            element={<Configuracion />}
          />

          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
'@ | Set-Content "C:\Users\Esteb\Desktop\UMT-ERP\apps\web\src\App.tsx" -Encoding UTF8