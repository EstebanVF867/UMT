import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { obtenerDirector } from "../../../lib/api";
import type { DirectorExpediente as DirectorExpedienteData } from "../../../lib/api";
import "./DirectorExpediente.css";

function formatearFecha(fecha: string | null | undefined) {
  if (!fecha) return "—";

  const valor = fecha.slice(0, 10);
  const partes = valor.split("-");

  if (partes.length !== 3) return valor;

  return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

function DirectorExpediente() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [director, setDirector] =
    useState<DirectorExpedienteData | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargarExpediente() {
      if (!id) {
        setError("No se ha indicado el director.");
        setCargando(false);
        return;
      }

      try {
        setError("");
        const resultado = await obtenerDirector(id);
        setDirector(resultado);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "No se ha podido cargar el expediente del director.",
        );
      } finally {
        setCargando(false);
      }
    }

    void cargarExpediente();
  }, [id]);

  if (cargando) {
    return (
      <section className="musico-expediente-page">
        <div className="musico-expediente-header">
          <div>
            <div className="musico-expediente-breadcrumb">
              MIEMBROS UMT / DIRECTORES
            </div>
            <h1>Expediente del director</h1>
            <p>Cargando información...</p>
          </div>
        </div>

        <div className="musico-expediente-feedback">
          Cargando expediente...
        </div>
      </section>
    );
  }

  if (error || !director) {
    return (
      <section className="musico-expediente-page">
        <div className="musico-expediente-header">
          <div>
            <button
              type="button"
              className="musico-expediente-back-button"
              onClick={() => navigate("/miembros/directores")}
            >
              ← Atrás
            </button>

            <div className="musico-expediente-breadcrumb">
              MIEMBROS UMT / DIRECTORES
            </div>

            <h1>Expediente del director</h1>
          </div>
        </div>

        <div className="musico-expediente-error" role="alert">
          {error || "No se ha encontrado el director."}
        </div>
      </section>
    );
  }

  const periodoActual =
    director.periodos.find((periodo) => periodo.fechaFin === null) ?? null;

  return (
    <section className="musico-expediente-page">
      <div className="musico-expediente-header">
        <div>
          <button
            type="button"
            className="musico-expediente-back-button"
            onClick={() => navigate("/miembros/directores")}
          >
            ← Atrás
          </button>

          <div className="musico-expediente-breadcrumb">
            MIEMBROS UMT / DIRECTORES
          </div>

          <div className="musico-expediente-title-row">
            <div>
              <h1>
                {director.persona.nombre} {director.persona.apellidos}
              </h1>
              <p>Expediente del director</p>
            </div>

            <span
              className={
                director.director.activo
                  ? "musico-expediente-status activo"
                  : "musico-expediente-status inactivo"
              }
            >
              {director.director.activo ? "Activo" : "Inactivo"}
            </span>
          </div>
        </div>
      </div>

      <div className="musico-expediente-grid">
        <section className="musico-expediente-card">
          <div className="musico-expediente-card-header">
            <div>
              <span className="musico-expediente-level">PERSONA</span>
              <h2>Datos personales</h2>
            </div>
          </div>

          <div className="musico-expediente-data-grid">
            <div>
              <span>Nombre</span>
              <strong>{director.persona.nombre}</strong>
            </div>

            <div>
              <span>Apellidos</span>
              <strong>{director.persona.apellidos}</strong>
            </div>

            <div>
              <span>DNI / Documento</span>
              <strong>{director.persona.dni || "—"}</strong>
            </div>

            <div>
              <span>Fecha de nacimiento</span>
              <strong>
                {formatearFecha(director.persona.fechaNacimiento)}
              </strong>
            </div>

            <div>
              <span>Email</span>
              <strong>{director.persona.email || "—"}</strong>
            </div>

            <div>
              <span>Teléfono</span>
              <strong>{director.persona.telefono || "—"}</strong>
            </div>

            <div className="musico-expediente-data-full">
              <span>Observaciones</span>
              <strong>{director.persona.observaciones || "—"}</strong>
            </div>
          </div>
        </section>

        <section className="musico-expediente-card">
          <div className="musico-expediente-card-header">
            <div>
              <span className="musico-expediente-level">DIRECTOR</span>
              <h2>Información como director</h2>
            </div>
          </div>

          <div className="musico-expediente-data-grid">
            <div>
              <span>Fecha de alta</span>
              <strong>{formatearFecha(director.director.fechaAlta)}</strong>
            </div>

            <div>
              <span>Fecha de baja</span>
              <strong>{formatearFecha(director.director.fechaBaja)}</strong>
            </div>

            <div>
              <span>Estado</span>
              <strong>
                {director.director.activo ? "Activo" : "Inactivo"}
              </strong>
            </div>

            <div className="musico-expediente-data-full">
              <span>Observaciones</span>
              <strong>{director.director.observaciones || "—"}</strong>
            </div>
          </div>
        </section>

        <section className="musico-expediente-card">
          <div className="musico-expediente-card-header">
            <div>
              <span className="musico-expediente-level">AGRUPACIONES</span>
              <h2>Agrupaciones actuales</h2>
            </div>
          </div>

          {periodoActual ? (
            <div className="musico-expediente-list">
              <div className="musico-expediente-period-summary">
                <span>Desde</span>
                <strong>{formatearFecha(periodoActual.fechaInicio)}</strong>
              </div>

              <div className="musico-expediente-tags">
                {periodoActual.agrupaciones.map((asignacion) => (
                  <span
                    key={asignacion.id}
                    className="musico-expediente-tag"
                  >
                    {asignacion.agrupacion.nombre}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="musico-expediente-empty">
              No tiene un período de actividad abierto.
            </div>
          )}
        </section>

        <section className="musico-expediente-card">
          <div className="musico-expediente-card-header">
            <div>
              <span className="musico-expediente-level">ROLES</span>
              <h2>Roles funcionales</h2>
            </div>
          </div>

          {director.roles.filter((rol) => rol.activo).length > 0 ? (
            <div className="musico-expediente-tags">
              {director.roles
                .filter((rol) => rol.activo)
                .map((rol) => (
                  <span key={rol.id} className="musico-expediente-tag">
                    {rol.nombre}
                  </span>
                ))}
            </div>
          ) : (
            <div className="musico-expediente-empty">
              No tiene roles funcionales activos.
            </div>
          )}
        </section>

        <section className="musico-expediente-card">
          <div className="musico-expediente-card-header">
            <div>
              <span className="musico-expediente-level">HISTORIAL</span>
              <h2>Períodos como director</h2>
            </div>
          </div>

          {director.periodos.length > 0 ? (
            <div className="musico-expediente-history">
              {director.periodos.map((periodo) => (
                <article
                  key={periodo.id}
                  className="musico-expediente-history-item"
                >
                  <div className="musico-expediente-history-header">
                    <div>
                      <strong>
                        {formatearFecha(periodo.fechaInicio)}
                        {" → "}
                        {periodo.fechaFin
                          ? formatearFecha(periodo.fechaFin)
                          : "Actualidad"}
                      </strong>
                    </div>

                    <span
                      className={
                        periodo.fechaFin
                          ? "musico-expediente-status inactivo"
                          : "musico-expediente-status activo"
                      }
                    >
                      {periodo.fechaFin ? "Finalizado" : "Activo"}
                    </span>
                  </div>

                  <div className="musico-expediente-history-content">
                    <div>
                      <span>Agrupaciones</span>

                      <div className="musico-expediente-tags">
                        {periodo.agrupaciones.length > 0 ? (
                          periodo.agrupaciones.map((asignacion) => (
                            <span
                              key={asignacion.id}
                              className="musico-expediente-tag"
                            >
                              {asignacion.agrupacion.nombre}
                            </span>
                          ))
                        ) : (
                          <strong>—</strong>
                        )}
                      </div>
                    </div>

                    <div>
                      <span>Motivo de baja</span>
                      <strong>{periodo.motivoBaja || "—"}</strong>
                    </div>

                    <div>
                      <span>Observaciones</span>
                      <strong>{periodo.observaciones || "—"}</strong>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="musico-expediente-empty">
              No existen períodos registrados.
            </div>
          )}
        </section>
      </div>
    </section>
  );
}

export default DirectorExpediente;