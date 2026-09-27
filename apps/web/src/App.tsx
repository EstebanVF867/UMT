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
import Alumnos from "./pages/Miembros/Alumnos/Alumnos";
import NuevoAlumno from "./pages/Miembros/Alumnos/NuevoAlumno";
import EditarAlumno from "./pages/Miembros/Alumnos/EditarAlumno";
import AlumnoExpediente from "./pages/Miembros/Alumnos/AlumnoExpediente";
import DarDeBajaAlumno from "./pages/Miembros/Alumnos/DarDeBajaAlumno";
import NuevoMusico from "./pages/Miembros/Musicos/NuevoMusico";
import MusicoExpediente from "./pages/Miembros/Musicos/MusicoExpediente";
import EditarMusico from "./pages/Miembros/Musicos/EditarMusico";
import DarDeBajaMusico from "./pages/Miembros/Musicos/DarDeBajaMusico";
import Directores from "./pages/Miembros/Directores/Directores";
import NuevoDirector from "./pages/Miembros/Directores/NuevoDirector";
import DirectorExpediente from "./pages/Miembros/Directores/DirectorExpediente";
import Configuracion from "./pages/Configuracion/Configuracion";
import Instrumentos from "./pages/Configuracion/Instrumentos";
import Agrupaciones from "./pages/Configuracion/Agrupaciones";
import Aulas from "./pages/Configuracion/Aulas";

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
          : "No se ha podido cerrar la sesiÃ³n.",
      );
    } finally {
      setCerrandoSesion(false);
    }
  }

  if (comprobandoSesion) {
    return <main>Comprobando sesiÃ³n...</main>;
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

          <Route path="/miembros/musicos" element={<Musicos />} />
          <Route path="/miembros/musicos/nuevo" element={<NuevoMusico />} 
	  />
	  <Route
 		 path="/miembros/musicos/:id/editar"
  		element={<EditarMusico />}
          />
          <Route
                 path="/miembros/musicos/:id/dar-de-baja"
                 element={<DarDeBajaMusico />}
	   />
          <Route path="/miembros/musicos/:id" element={<MusicoExpediente />} />
          <Route path="/miembros/alumnos" element={<Alumnos />} />
          <Route path="/miembros/alumnos/nuevo" element={<NuevoAlumno />} />
      <Route path="/miembros/alumnos/:id" element={<AlumnoExpediente />} />
      <Route path="/miembros/alumnos/:id/dar-de-baja" element={<DarDeBajaAlumno />} />
      <Route path="/miembros/alumnos/:id/editar" element={<EditarAlumno />} />
          <Route path="/miembros/directores" element={<Directores />} />
          <Route path="/miembros/directores/nuevo" element={<NuevoDirector />} />
          <Route path="/miembros/directores/:id" element={<DirectorExpediente />} />
          <Route path="/profesores" element={<Placeholder />} />
          <Route path="/cuotas" element={<Placeholder />} />
          <Route path="/rrhh/contratos" element={<Placeholder />} />
          <Route path="/rrhh/nominas" element={<Placeholder />} />
          <Route path="/rrhh/asistencia" element={<Placeholder />} />
          <Route path="/rrhh/reparto" element={<Placeholder />} />
          <Route path="/contabilidad" element={<Placeholder />} />
          <Route path="/bancos-finanzas" element={<Placeholder />} />
          <Route path="/proveedores/facturas" element={<Placeholder />} />
          <Route path="/proveedores/pagos" element={<Placeholder />} />
          <Route path="/clientes/facturas" element={<Placeholder />} />
          <Route path="/clientes/cobros" element={<Placeholder />} />
          <Route path="/nextcloud" element={<Placeholder />} />
          <Route path="/auditoria" element={<Placeholder />} />

          <Route path="/configuracion" element={<Configuracion />} />
          <Route
            path="/configuracion/instrumentos"
            element={<Instrumentos />}
          />
          <Route
            path="/configuracion/agrupaciones"
            element={<Agrupaciones />}
          />
          <Route
            path="/configuracion/aulas"
            element={<Aulas />}
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;











