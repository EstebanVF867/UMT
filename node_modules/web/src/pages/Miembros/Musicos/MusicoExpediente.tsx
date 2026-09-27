import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { obtenerMusico } from "../../../lib/api";
import type { MusicoExpediente as MusicoExpedienteData } from "../../../lib/api";
import "./MusicoExpediente.css";

function formatearFecha(fecha: string | null | undefined) {
  if (!fecha) {
    return "—";
  }

  const valor = fecha.slice(0, 10);
  const partes = valor.split("-");

  if (partes.length !== 3) {
    return valor;
  }

  return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

function MusicoExpediente() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [musico, setMusico] = useState<MusicoExpedienteData | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function cargarExpediente() {
      if (!id) {
        setError("No se ha indicado el músico.");
        setCargando(false);
        return;
      }

      try {
        setError("");
        const resultado = await obtenerMusico(id);
        setMusico(resultado);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "No se ha podido cargar el expediente del músico.",
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
              MIEMBROS UMT / MÚSICOS
            </div>
            <h1>Expediente del músico</h1>
            <p>Cargando información...</p>
          </div>
        </div>

        <div className="musico-expediente-feedback">
          Cargando expediente...
        </div>
      </section>
    );
  }

  if (error || !musico) {
    return (
      <section className="musico-expediente-page">
        <div className="musico-expediente-header">
          <div>
            <button
              type="button"
              className="musico-expediente-back-button"
              onClick={() => navigate("/miembros/musicos")}
            >
              ← Atrás
            </button>

            <div className="musico-expediente-breadcrumb">
              MIEMBROS UMT / MÚSICOS
            </div>
            <h1>Expediente del músico</h1>
          </div>
        </div>

        <div className="musico-expediente-error" role="alert">
          {error || "No se ha encontrado el músico."}
        </div>
      </section>
    );
  }

  return (
    <section className="musico-expediente-page">
      <div className="musico-expediente-header">
        <div>
          <button
            type="button"
            className="musico-expediente-back-button"
            onClick={() => navigate("/miembros/musicos")}
          >
            ← Atrás
          </button>

          <div className="musico-expediente-breadcrumb">
            MIEMBROS UMT / MÚSICOS
          </div>

          <div className="musico-expediente-title-row">
            <div>
              <h1>
                {musico.persona.nombre} {musico.persona.apellidos}
              </h1>
              <p>Expediente del músico</p>
            </div>

            <span
              className={
                musico.musico.activo
                  ? "musico-expediente-status activo"
                  : "musico-expediente-status inactivo"
              }
            >
              {musico.musico.activo ? "Activo" : "Inactivo"}
            </span>
          </div>
        </div>
      </div>

      <div className="musico-expediente-grid">
        <section className="musico-expediente-card">
          <div className="musico-expediente-card-header">
            <div>
              <span className="musico-expediente-level">
                PERSONA
              </span>
              <h2>Datos personales</h2>
            </div>
          </div>

          <div className="musico-expediente-data-grid">
            <div className="musico-expediente-data">
              <span>Nombre</span>
              <strong>{musico.persona.nombre}</strong>
            </div>

            <div className="musico-expediente-data">
              <span>Apellidos</span>
              <strong>{musico.persona.apellidos}</strong>
            </div>

            <div className="musico-expediente-data">
              <span>DNI / documento</span>
              <strong>{musico.persona.dni || "—"}</strong>
            </div>

            <div className="musico-expediente-data">
              <span>Fecha de nacimiento</span>
              <strong>
                {formatearFecha(musico.persona.fechaNacimiento)}
              </strong>
            </div>

            <div className="musico-expediente-data">
              <span>Email</span>
              <strong>{musico.persona.email || "—"}</strong>
            </div>

            <div className="musico-expediente-data">
              <span>Teléfono</span>
              <strong>{musico.persona.telefono || "—"}</strong>
            </div>

            <div className="musico-expediente-data musico-expediente-data-full">
              <span>Observaciones</span>
              <strong>{musico.persona.observaciones || "—"}</strong>
            </div>
          </div>
        </section>

        <section className="musico-expediente-card">
          <div className="musico-expediente-card-header">
            <div>
              <span className="musico-expediente-level">
                MÚSICO
              </span>
              <h2>Información como músico</h2>
            </div>
          </div>

          <div className="musico-expediente-data-grid">
            <div className="musico-expediente-data">
              <span>Fecha de alta</span>
              <strong>{formatearFecha(musico.musico.fechaAlta)}</strong>
            </div>

            <div className="musico-expediente-data">
              <span>Fecha de baja</span>
              <strong>{formatearFecha(musico.musico.fechaBaja)}</strong>
            </div>

            <div className="musico-expediente-data musico-expediente-data-full">
              <span>Observaciones</span>
              <strong>{musico.musico.observaciones || "—"}</strong>
            </div>
          </div>
        </section>

        <section className="musico-expediente-card">
          <div className="musico-expediente-card-header">
            <div>
              <span className="musico-expediente-level">
                FORMACIÓN MUSICAL
              </span>
              <h2>Instrumentos</h2>
            </div>
          </div>

          {musico.instrumentos.length === 0 ? (
            <div className="musico-expediente-empty">
              No hay instrumentos registrados.
            </div>
          ) : (
            <div className="musico-expediente-list">
              {musico.instrumentos.map((instrumento) => (
                <div
                  className="musico-expediente-list-row"
                  key={instrumento.id}
                >
                  <div>
                    <strong>{instrumento.instrumento.nombre}</strong>
                    <span>
                      {instrumento.principal ? "Instrumento principal" : "Segundo instrumento"}
                    </span>
                  </div>

                  <div className="musico-expediente-list-meta">
                    <span>
                      Desde {formatearFecha(instrumento.fechaInicio)}
                    </span>
                    {instrumento.fechaFin && (
                      <span>
                        Hasta {formatearFecha(instrumento.fechaFin)}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="musico-expediente-card">
          <div className="musico-expediente-card-header">
            <div>
              <span className="musico-expediente-level">
                PARTICIPACIÓN
              </span>
              <h2>Agrupaciones</h2>
            </div>
          </div>

          {musico.agrupaciones.length === 0 ? (
            <div className="musico-expediente-empty">
              No hay agrupaciones registradas.
            </div>
          ) : (
            <div className="musico-expediente-list">
              {musico.agrupaciones.map((agrupacion) => (
                <div
                  className="musico-expediente-list-row"
                  key={agrupacion.id}
                >
                  <div>
                    <strong>{agrupacion.agrupacion.nombre}</strong>
                    <span>
                      Desde {formatearFecha(agrupacion.fechaAlta)}
                    </span>
                  </div>

                  <div className="musico-expediente-list-meta">
                    <span
                      className={
                        agrupacion.activo
                          ? "musico-expediente-status activo"
                          : "musico-expediente-status inactivo"
                      }
                    >
                      {agrupacion.activo ? "Activo" : "Inactivo"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="musico-expediente-card">
          <div className="musico-expediente-card-header">
            <div>
              <span className="musico-expediente-level">
                ROLES
              </span>
              <h2>Roles funcionales</h2>
            </div>
          </div>

          {musico.roles.length === 0 ? (
            <div className="musico-expediente-empty">
              No hay roles funcionales registrados.
            </div>
          ) : (
            <div className="musico-expediente-list">
              {musico.roles.map((rol) => (
                <div
                  className="musico-expediente-list-row"
                  key={rol.id}
                >
                  <div>
                    <strong>{rol.nombre}</strong>
                    {rol.descripcion && <span>{rol.descripcion}</span>}
                  </div>

                  <div className="musico-expediente-list-meta">
                    <span
                      className={
                        rol.activo
                          ? "musico-expediente-status activo"
                          : "musico-expediente-status inactivo"
                      }
                    >
                      {rol.activo ? "Activo" : "Inactivo"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="musico-expediente-card">
          <div className="musico-expediente-card-header">
            <div>
              <span className="musico-expediente-level">
                HISTORIAL
              </span>
              <h2>Períodos como músico</h2>
            </div>
          </div>

          {musico.periodos.length === 0 ? (
            <div className="musico-expediente-empty">
              No hay períodos registrados.
            </div>
          ) : (
            <div className="musico-expediente-list">
              {musico.periodos.map((periodo) => (
                <div
                  className="musico-expediente-list-row"
                  key={periodo.id}
                >
                  <div>
                    <strong>
                      {formatearFecha(periodo.fechaInicio)} —{" "}
                      {formatearFecha(periodo.fechaFin)}
                    </strong>
                    <span>
                      {periodo.motivoBaja || "Período activo"}
                    </span>
                  </div>

                  <div className="musico-expediente-list-meta">
                    {periodo.observaciones || "—"}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </section>
  );
}

export default MusicoExpediente;
