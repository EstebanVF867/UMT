import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listarMusicos, type MusicoListado } from "../../../lib/api";
import "./Musicos.css";

function Musicos() {
  const navigate = useNavigate();

  const [musicos, setMusicos] = useState<MusicoListado[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [filtroEstado, setFiltroEstado] = useState<
    "TODOS" | "ACTIVO" | "BAJA"
  >("TODOS");
const [menuAccionesAbierto, setMenuAccionesAbierto] = useState<string | null>(
  null,
);

  useEffect(() => {
    async function cargarMusicos() {
      try {
        setError("");

        const resultado = await listarMusicos();
        setMusicos(resultado);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "No se ha podido cargar el listado de músicos.",
        );
      } finally {
        setCargando(false);
      }
    }

    void cargarMusicos();
  }, []);

  const musicosFiltrados = useMemo(() => {
    const termino = busqueda.trim().toLocaleLowerCase();

    return musicos.filter((musico) => {
      const coincideEstado =
        filtroEstado === "TODOS" ||
        (filtroEstado === "ACTIVO" && musico.activo) ||
        (filtroEstado === "BAJA" && !musico.activo);

      if (!coincideEstado) {
        return false;
      }

      if (!termino) {
        return true;
      }

      const nombreCompleto =
        `${musico.nombre} ${musico.apellidos}`
          .toLocaleLowerCase();

      const documento = musico.dni?.toLocaleLowerCase() ?? "";

      return (
        nombreCompleto.includes(termino) ||
        documento.includes(termino)
      );
    });
  }, [busqueda, filtroEstado, musicos]);

  const activos = musicos.filter((musico) => musico.activo).length;


  return (
    <section className="musicos-page">
      <div className="musicos-page-header">
        <div>
          <div className="musicos-breadcrumb">MIEMBROS UMT</div>

          <h1>Músicos</h1>

          <p>
            Gestión de las personas registradas como músicos de la
            Unión Musical de Tenorio.
          </p>
        </div>

        <button
          type="button"
          className="musicos-primary-button"
          onClick={() => navigate("/miembros/musicos/nuevo")}
        >
          <span aria-hidden="true">+</span>
          Nuevo músico
        </button>
      </div>

      <div className="musicos-summary">
        <strong>
          {musicos.length}{" "}
          {musicos.length === 1 ? "músico" : "músicos"}
        </strong>

        <span>·</span>

        <span>{activos} activos</span>
      </div>

      <div className="musicos-toolbar">
        <div className="musicos-search">
          <span className="musicos-search-icon" aria-hidden="true">
            ⌕
          </span>

          <input
            id="busqueda-musicos"
            type="search"
            value={busqueda}
            onChange={(event) => setBusqueda(event.target.value)}
            placeholder="Buscar por nombre, apellidos o documento..."
            aria-label="Buscar músicos"
          />
        </div>

        <button
          type="button"
          className={`musicos-filter-button ${
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
        <div className="musicos-filters">
          <div className="musicos-filter-group">
            <label htmlFor="filtro-estado">Estado</label>
            <select
              id="filtro-estado"
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
        <div className="musicos-state">
          <div className="musicos-state-title">Cargando músicos...</div>
          <div className="musicos-state-text">
            Estamos obteniendo la información de la Unión Musical de
            Tenorio.
          </div>
        </div>
      )}

      {!cargando && error && (
        <div className="musicos-state musicos-state-error" role="alert">
          <div className="musicos-state-title">
            No se ha podido cargar el listado
          </div>

          <div className="musicos-state-text">{error}</div>
        </div>
      )}

      {!cargando && !error && musicos.length === 0 && (
        <div className="musicos-state">
          <div className="musicos-state-title">
            No hay músicos registrados
          </div>

          <div className="musicos-state-text">
            Cuando se registre el primer músico aparecerá aquí.
          </div>

          <button
            type="button"
            className="musicos-secondary-button"
            onClick={() => navigate("/miembros/musicos/nuevo")}
          >
            Registrar primer músico
          </button>
        </div>
      )}

      {!cargando &&
        !error &&
        musicos.length > 0 &&
        musicosFiltrados.length === 0 && (
          <div className="musicos-state">
            <div className="musicos-state-title">
              No se han encontrado músicos
            </div>

            <div className="musicos-state-text">
              Prueba con otro nombre o modifica la búsqueda.
            </div>
          </div>
        )}

      {!cargando &&
        !error &&
        musicosFiltrados.length > 0 && (
          <div className="musicos-table-card">
            <div className="musicos-table-wrapper">
              <table className="musicos-table">
                <thead>
                  <tr>
                    <th>Músico</th>
                    <th>Instrumento principal</th>
                    <th>2.º instrumento</th>
                    <th>Agrupación</th>
                    <th>Estado</th>
                    <th className="musicos-actions-column">
                      Acciones
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {musicosFiltrados.map((musico) => (
                    <tr key={musico.id}>
                      <td>
                        <button
                          type="button"
                          className="musicos-person-link"
                          onClick={() =>
                            navigate(`/miembros/musicos/${musico.id}`)
                          }
                        >
                          <span className="musicos-person-name">
                            {musico.nombre}{" "}
                            {musico.apellidos}
                          </span>
                        </button>
                      </td>

                      <td>
                        {musico.instrumentoPrincipal?.nombre ?? "—"}
                      </td>

                      <td>
                        {musico.segundoInstrumento?.nombre ?? "—"}
                      </td>

                      <td>{musico.agrupacion?.nombre ?? "—"}</td>

                      <td>
                        <span
                          className={`musicos-status ${
                            musico.activo
                              ? "musicos-status-active"
                              : "musicos-status-inactive"
                          }`}
                        >
                          <span
                            className="musicos-status-dot"
                            aria-hidden="true"
                          />
                          {musico.activo ? "Activo" : "Inactivo"}
                        </span>
                      </td>

                      <td className="musicos-actions-column">
  <div className="musicos-actions">
    <button
      type="button"
      className="musicos-action-button"
      onClick={() =>
        setMenuAccionesAbierto(
          menuAccionesAbierto === musico.id ? null : musico.id,
        )
      }
      aria-label={`Acciones para ${musico.nombre} ${musico.apellidos}`}
      aria-expanded={menuAccionesAbierto === musico.id}
    >
      ⋮
    </button>

    {menuAccionesAbierto === musico.id && (
      <div className="musicos-actions-menu">
        <button
          type="button"
          onClick={() => {
            setMenuAccionesAbierto(null);
            navigate(`/miembros/musicos/${musico.id}`);
          }}
        >
          Ver expediente
        </button>

        <button
          type="button"
          onClick={() => {
            setMenuAccionesAbierto(null);
            navigate(`/miembros/musicos/${musico.id}/editar`);
          }}
        >
          Editar
        </button>

        {musico.activo && (
          <button
            type="button"
            onClick={() => {
              setMenuAccionesAbierto(null);
              navigate(`/miembros/musicos/${musico.id}/dar-de-baja`);
            }}
          >
            Dar de baja
          </button>
        )}

        <button
          type="button"
          className="musicos-actions-menu-danger"
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

export default Musicos;








