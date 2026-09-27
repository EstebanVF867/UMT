import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  listarConfiguracionAgrupaciones,
  listarDirectores,
} from "../../../lib/api";
import type {
  ConfiguracionAgrupacion,
  DirectorListado,
} from "../../../lib/api";
import "./Directores.css";

function Directores() {
  const navigate = useNavigate();

  const [directores, setDirectores] = useState<DirectorListado[]>([]);
  const [agrupaciones, setAgrupaciones] = useState<
    ConfiguracionAgrupacion[]
  >([]);
  const [cargando, setCargando] = useState(true);
  const [cargandoAgrupaciones, setCargandoAgrupaciones] = useState(true);
  const [error, setError] = useState("");
  const [errorAgrupaciones, setErrorAgrupaciones] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [filtroEstado, setFiltroEstado] = useState<
    "TODOS" | "ACTIVO" | "BAJA"
  >("TODOS");
  const [filtroAgrupacion, setFiltroAgrupacion] = useState("");
  const [menuAccionesAbierto, setMenuAccionesAbierto] = useState<
    string | null
  >(null);

  useEffect(() => {
    async function cargarDirectores() {
      try {
        setCargando(true);
        setError("");

        const resultado = await listarDirectores({
          estado: filtroEstado,
          busqueda,
          agrupacionId: filtroAgrupacion || undefined,
        });

        setDirectores(resultado);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "No se ha podido cargar el listado de directores.",
        );
      } finally {
        setCargando(false);
      }
    }

    void cargarDirectores();
  }, [filtroEstado, filtroAgrupacion, busqueda]);

  useEffect(() => {
    async function cargarAgrupaciones() {
      try {
        setCargandoAgrupaciones(true);
        setErrorAgrupaciones("");

        const resultado = await listarConfiguracionAgrupaciones();

        setAgrupaciones(
          resultado.filter((agrupacion) => agrupacion.activo),
        );
      } catch (err) {
        setErrorAgrupaciones(
          err instanceof Error
            ? err.message
            : "No se han podido cargar las agrupaciones.",
        );
      } finally {
        setCargandoAgrupaciones(false);
      }
    }

    void cargarAgrupaciones();
  }, []);

  const directoresVisibles = useMemo(() => {
    return directores;
  }, [directores]);

  const activos = directores.filter((director) => director.activo).length;

  return (
    <section className="directores-page">
      <div className="directores-page-header">
        <div>
          <div className="directores-breadcrumb">MIEMBROS UMT</div>

          <h1>Directores</h1>

          <p>
            Gestión de las personas registradas como directores de la Unión
            Musical de Tenorio.
          </p>
        </div>

        <button
          type="button"
          className="directores-primary-button"
          onClick={() => navigate("/miembros/directores/nuevo")}
        >
          <span aria-hidden="true">+</span>
          Nuevo director
        </button>
      </div>

      <div className="directores-summary">
        <strong>
          {directores.length}{" "}
          {directores.length === 1 ? "director" : "directores"}
        </strong>

        <span>·</span>

        <span>{activos} activos</span>
      </div>

      <div className="directores-toolbar">
        <div className="directores-search">
          <span className="directores-search-icon" aria-hidden="true">
            ⌕
          </span>

          <input
            id="busqueda-directores"
            type="search"
            value={busqueda}
            onChange={(event) => setBusqueda(event.target.value)}
            placeholder="Buscar por nombre, apellidos o documento..."
            aria-label="Buscar directores"
          />
        </div>

        <button
          type="button"
          className={`directores-filter-button ${
            mostrarFiltros ? "active" : ""
          }`}
          onClick={() => setMostrarFiltros((actual) => !actual)}
          aria-expanded={mostrarFiltros}
        >
          <span aria-hidden="true">☷</span>
          Filtros
        </button>
      </div>

      {mostrarFiltros && (
        <div className="directores-filters">
          <div className="directores-filter-group">
            <label htmlFor="filtro-estado-directores">Estado</label>

            <select
              id="filtro-estado-directores"
              value={filtroEstado}
              onChange={(event) =>
                setFiltroEstado(
                  event.target.value as "TODOS" | "ACTIVO" | "BAJA",
                )
              }
            >
              <option value="TODOS">Todos</option>
              <option value="ACTIVO">Activos</option>
              <option value="BAJA">Inactivos</option>
            </select>
          </div>

          <div className="directores-filter-group">
            <label htmlFor="filtro-agrupacion-directores">
              Agrupación
            </label>

            <select
              id="filtro-agrupacion-directores"
              value={filtroAgrupacion}
              onChange={(event) =>
                setFiltroAgrupacion(event.target.value)
              }
              disabled={cargandoAgrupaciones || Boolean(errorAgrupaciones)}
            >
              <option value="">Todas</option>

              {agrupaciones.map((agrupacion) => (
                <option key={agrupacion.id} value={agrupacion.id}>
                  {agrupacion.nombre}
                </option>
              ))}
            </select>
          </div>

          {errorAgrupaciones && (
            <div className="directores-filter-error" role="alert">
              {errorAgrupaciones}
            </div>
          )}
        </div>
      )}

      {cargando && (
        <div className="directores-state">
          <div className="directores-state-title">
            Cargando directores...
          </div>

          <div className="directores-state-text">
            Estamos obteniendo la información de la Unión Musical de
            Tenorio.
          </div>
        </div>
      )}

      {!cargando && error && (
        <div className="directores-state directores-state-error" role="alert">
          <div className="directores-state-title">
            No se ha podido cargar el listado
          </div>

          <div className="directores-state-text">{error}</div>
        </div>
      )}

      {!cargando && !error && directores.length === 0 && (
        <div className="directores-state">
          <div className="directores-state-title">
            No hay directores registrados
          </div>

          <div className="directores-state-text">
            Cuando se registre el primer director aparecerá aquí.
          </div>

          <button
            type="button"
            className="directores-secondary-button"
            onClick={() => navigate("/miembros/directores/nuevo")}
          >
            Registrar primer director
          </button>
        </div>
      )}

      {!cargando &&
        !error &&
        directoresVisibles.length > 0 && (
          <div className="directores-table-card">
            <div className="directores-table-wrapper">
              <table className="directores-table">
                <thead>
                  <tr>
                    <th>Director</th>
                    <th>Agrupaciones</th>
                    <th>Inicio</th>
                    <th>Estado</th>
                    <th className="directores-actions-column">
                      Acciones
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {directoresVisibles.map((director) => (
                    <tr key={director.id}>
                      <td>
                        <button
                          type="button"
                          className="directores-person-link"
                          onClick={() =>
                            navigate(`/miembros/directores/${director.id}`)
                          }
                        >
                          <span className="directores-person-name">
                            {director.nombre} {director.apellidos}
                          </span>

                          {director.dni && (
                            <span className="directores-person-document">
                              {director.dni}
                            </span>
                          )}
                        </button>
                      </td>

                      <td>
                        {director.agrupaciones.length > 0 ? (
                          <div className="directores-group-list">
                            {director.agrupaciones.map((agrupacion) => (
                              <span
                                key={agrupacion.id}
                                className="directores-group"
                              >
                                {agrupacion.nombre}
                              </span>
                            ))}
                          </div>
                        ) : (
                          "—"
                        )}
                      </td>

                      <td>
                        {director.periodoActual
                          ? new Date(
                              director.periodoActual.fechaInicio,
                            ).toLocaleDateString("es-ES")
                          : "—"}
                      </td>

                      <td>
                        <span
                          className={`directores-status ${
                            director.activo
                              ? "directores-status-active"
                              : "directores-status-inactive"
                          }`}
                        >
                          <span
                            className="directores-status-dot"
                            aria-hidden="true"
                          />

                          {director.activo ? "Activo" : "Inactivo"}
                        </span>
                      </td>

                      <td className="directores-actions-column">
                        <div className="directores-actions">
                          <button
                            type="button"
                            className="directores-action-button"
                            onClick={() =>
                              setMenuAccionesAbierto(
                                menuAccionesAbierto === director.id
                                  ? null
                                  : director.id,
                              )
                            }
                            aria-label={`Acciones para ${director.nombre} ${director.apellidos}`}
                            aria-expanded={
                              menuAccionesAbierto === director.id
                            }
                          >
                            ⋮
                          </button>

                          {menuAccionesAbierto === director.id && (
                            <div className="directores-actions-menu">
                              <button
                                type="button"
                                onClick={() => {
                                  setMenuAccionesAbierto(null);
                                  navigate(
                                    `/miembros/directores/${director.id}`,
                                  );
                                }}
                              >
                                Ver expediente
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
    </section>
  );
}

export default Directores;
