import { NavLink } from "react-router-dom";
import "./Configuracion.css";

function Configuracion() {
  return (
    <section className="configuracion-page">
      <div className="configuracion-header">
        <div>
          <h1>Configuración</h1>
          <p>
            Gestión de los catálogos y parámetros generales del ERP.
          </p>
        </div>
      </div>

      <div className="configuracion-grid">
        <NavLink
          to="/configuracion/instrumentos"
          className="configuracion-card"
        >
          <span className="configuracion-card-label">Catálogo</span>
          <h2>Instrumentos</h2>
          <p>
            Familias, secciones e instrumentos musicales.
          </p>
        </NavLink>

        <NavLink
          to="/configuracion/agrupaciones"
          className="configuracion-card"
        >
          <span className="configuracion-card-label">Catálogo</span>
          <h2>Agrupaciones</h2>
          <p>
            Agrupaciones en las que pueden participar los miembros de la UMT.
          </p>
        </NavLink>

        <NavLink
          to="/configuracion/aulas"
          className="configuracion-card"
        >
          <span className="configuracion-card-label">Catálogo</span>
          <h2>Aulas</h2>
          <p>
            Espacios disponibles para la realización de clases y actividades
            formativas.
          </p>
        </NavLink>
      </div>
    </section>
  );
}

export default Configuracion;
