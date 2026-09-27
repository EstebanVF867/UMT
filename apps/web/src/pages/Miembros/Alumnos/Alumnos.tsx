import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listarAlumnos, type AlumnoListado } from "../../../lib/api";
import "./Alumnos.css";

function Alumnos() {
  const navigate = useNavigate();

  const [alumnos, setAlumnos] = useState<AlumnoListado[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [filtroEstado, setFiltroEstado] = useState<
    "TODOS" | "ACTIVO" | "BAJA"
  >("TODOS");
  const [menuAccionesAbierto, setMenuAccionesAbierto] = useState<
    string | null
  >(null);

  useEffect(() => {
    async function cargarAlumnos() {
      try {
        setError("");

        const resultado = await listarAlumnos();
        setAlumnos(resultado);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "No se ha podido cargar el listado de alumnos.",
        );
      } finally {
        setCargando(false);
      }
    }

    void cargarAlumnos();
  }, []);

  const alumnosFiltrados = useMemo(() => {
    const termino = busqueda.trim().toLocaleLowerCase();

    return alumnos.filter((alumno) => {
      const coincideEstado =
        filtroEstado === "TODOS" ||
        (filtroEstado === "ACTIVO" && alumno.activo) ||
        (filtroEstado === "BAJA" && !alumno.activo);

      if (!coincideEstado) {
        return false;
      }

      if (!termino) {
        return true;
      }

      const nombreCompleto =
        `${alumno.nombre} ${alumno.apellidos}`.toLocaleLowerCase();

      const documento = alumno.dni?.toLocaleLowerCase() ?? "";

      return (
        nombreCompleto.includes(termino) ||
        documento.includes(termino)
      );
    });
  }, [alumnos, busqueda, filtroEstado]);

  const activos = alumnos.filter((alumno) => alumno.activo).length;

  return (
    <section className="alumnos-page">
      <div className="alumnos-page-header">
        <div>
          <div className="alumnos-breadcrumb">MIEMBROS UMT</div>

          <h1>Alumnos</h1>

          <p>
            Gestión de las personas registradas como alumnos de la
            Unión Musical de Tenorio.
          </p>
        </div>

        <button
          type="button"
          className="alumnos-primary-button"
          onClick={() => navigate("/miembros/alumnos/nuevo")}
        >
          <span aria-hidden="true">+</span>
          Nuevo alumno
        </button>
      </div>

      <div className="alumnos-summary">
        <strong>
          {alumnos.length}{" "}
          {alumnos.length === 1 ? "alumno" : "alumnos"}
        </strong>

        <span>·</span>

        <span>{activos} activos</span>
      </div>

      <div className="alumnos-toolbar">
        <div className="alumnos-search">
          <span className="alumnos-search-icon" aria-hidden="true">
            ⌕
          </span>

          <input
            id="busqueda-alumnos"
            type="search"
            value={busqueda}
            onChange={(event) => setBusqueda(event.target.value)}
            placeholder="Buscar por nombre, apellidos o documento..."
            aria-label="Buscar alumnos"
          />
        </div>

        <button
          type="button"
          className={`alumnos-filter-button ${
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
        <div className="alumnos-filters">
          <div className="alumnos-filter-group">
            <label htmlFor="filtro-estado-alumnos">Estado</label>

            <select
              id="filtro-estado-alumnos"
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
        </div>
      )}

      {cargando && (
        <div className="alumnos-state">
          <div className="alumnos-state-title">Cargando alumnos...</div>

          <div className="alumnos-state-text">
            Estamos obteniendo la información de la Unión Musical de
            Tenorio.
          </div>
        </div>
      )}

      {!cargando && error && (
        <div className="alumnos-state alumnos-state-error" role="alert">
          <div className="alumnos-state-title">
            No se ha podido cargar el listado
          </div>

          <div className="alumnos-state-text">{error}</div>
        </div>
      )}

      {!cargando && !error && alumnos.length === 0 && (
        <div className="alumnos-state">
          <div className="alumnos-state-title">
            No hay alumnos registrados
          </div>

          <div className="alumnos-state-text">
            Cuando se registre el primer alumno aparecerá aquí.
          </div>

          <button
            type="button"
            className="alumnos-secondary-button"
            onClick={() => navigate("/miembros/alumnos/nuevo")}
          >
            Registrar primer alumno
          </button>
        </div>
      )}

      {!cargando &&
        !error &&
        alumnos.length > 0 &&
        alumnosFiltrados.length === 0 && (
          <div className="alumnos-state">
            <div className="alumnos-state-title">
              No se han encontrado alumnos
            </div>

            <div className="alumnos-state-text">
              Prueba con otro nombre o modifica la búsqueda.
            </div>
          </div>
        )}

      {!cargando &&
        !error &&
        alumnosFiltrados.length > 0 && (
          <div className="alumnos-table-card">
            <div className="alumnos-table-wrapper">
              <table className="alumnos-table">
                <thead>
                  <tr>
                    <th>Alumno</th>
                    <th>Instrumento principal</th>
                    <th>2.º instrumento</th>
                    <th>Agrupación</th>
                    <th>Estado</th>
                    <th className="alumnos-actions-column">
                      Acciones
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {alumnosFiltrados.map((alumno) => (
                    <tr key={alumno.id}>
                      <td>
                        <button
                          type="button"
                          className="alumnos-person-link"
                          onClick={() =>
                            navigate(`/miembros/alumnos/${alumno.id}`)
                          }
                        >
                          <span className="alumnos-person-name">
                            {alumno.nombre} {alumno.apellidos}
                          </span>
                        </button>
                      </td>

                      <td>
                        {alumno.instrumentoPrincipal?.nombre ?? "—"}
                      </td>

                      <td>
                        {alumno.segundoInstrumento?.nombre ?? "—"}
                      </td>

                      <td>{alumno.agrupacion?.nombre ?? "—"}</td>

                      <td>
                        <span
                          className={`alumnos-status ${
                            alumno.activo
                              ? "alumnos-status-active"
                              : "alumnos-status-inactive"
                          }`}
                        >
                          <span
                            className="alumnos-status-dot"
                            aria-hidden="true"
                          />

                          {alumno.activo ? "Activo" : "Inactivo"}
                        </span>
                      </td>

                      <td className="alumnos-actions-column">
                        <div className="alumnos-actions">
                          <button
                            type="button"
                            className="alumnos-action-button"
                            onClick={() =>
                              setMenuAccionesAbierto(
                                menuAccionesAbierto === alumno.id
                                  ? null
                                  : alumno.id,
                              )
                            }
                            aria-label={`Acciones para ${alumno.nombre} ${alumno.apellidos}`}
                            aria-expanded={
                              menuAccionesAbierto === alumno.id
                            }
                          >
                            ⋮
                          </button>

                          {menuAccionesAbierto === alumno.id && (
                            <div className="alumnos-actions-menu">
                              <button
                                type="button"
                                onClick={() => {
                                  setMenuAccionesAbierto(null);
                                  navigate(
                                    `/miembros/alumnos/${alumno.id}`,
                                  );
                                }}
                              >
                                Ver expediente
                              </button>

                              <button
                                type="button"
                                onClick={() => {
                                  setMenuAccionesAbierto(null);
                                  navigate(
                                    `/miembros/alumnos/${alumno.id}/editar`,
                                  );
                                }}
                              >
                                Editar
                              </button>

                              {alumno.activo && (
                                <button
                                  type="button"
                                  onClick={() => {
                                    setMenuAccionesAbierto(null);
                                    navigate(
                                      `/miembros/alumnos/${alumno.id}/dar-de-baja`,
                                    );
                                  }}
                                >
                                  Dar de baja
                                </button>
                              )}

                              <button
                                type="button"
                                className="alumnos-actions-menu-danger"
                                onClick={() => {
                                  setMenuAccionesAbierto(null);
                                }}
                              >
                                Eliminar
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

export default Alumnos;