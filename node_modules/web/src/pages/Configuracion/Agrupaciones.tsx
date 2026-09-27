import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  crearConfiguracionAgrupacion,
  editarConfiguracionAgrupacion,
  listarConfiguracionAgrupaciones,
} from "../../lib/api";
import type { ConfiguracionAgrupacion } from "../../lib/api";
import "./Agrupaciones.css";

type ModalTipo = "crear" | "editar" | null;

function Agrupaciones() {
  const navigate = useNavigate();

  const [agrupaciones, setAgrupaciones] = useState<
    ConfiguracionAgrupacion[]
  >([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modal, setModal] = useState<ModalTipo>(null);

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [agrupacionEditando, setAgrupacionEditando] =
    useState<ConfiguracionAgrupacion | null>(null);

  async function cargarDatos() {
    try {
      setCargando(true);
      setError(null);

      const datos = await listarConfiguracionAgrupaciones();
      setAgrupaciones(datos);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "No se ha podido cargar la configuración.",
      );
    } finally {
      setCargando(false);
    }
  }

  useEffect(() => {
    void cargarDatos();
  }, []);

  function abrirCrear() {
    setNombre("");
    setDescripcion("");
    setAgrupacionEditando(null);
    setModal("crear");
  }

  function abrirEditar(agrupacion: ConfiguracionAgrupacion) {
    setNombre(agrupacion.nombre);
    setDescripcion(agrupacion.descripcion ?? "");
    setAgrupacionEditando(agrupacion);
    setModal("editar");
  }

  function cerrarModal() {
    setModal(null);
    setNombre("");
    setDescripcion("");
    setAgrupacionEditando(null);
  }

  async function guardar() {
    try {
      setError(null);

      if (modal === "crear") {
        await crearConfiguracionAgrupacion({
          nombre: nombre.trim(),
          descripcion: descripcion.trim() || undefined,
        });
      }

      if (modal === "editar" && agrupacionEditando) {
        await editarConfiguracionAgrupacion(agrupacionEditando.id, {
          nombre: nombre.trim(),
          descripcion: descripcion.trim() || undefined,
          activo: agrupacionEditando.activo,
        });
      }

      cerrarModal();
      await cargarDatos();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "No se ha podido guardar el cambio.",
      );
    }
  }

  async function cambiarEstado(agrupacion: ConfiguracionAgrupacion) {
    const accion = agrupacion.activo ? "desactivar" : "activar";

    if (
      !window.confirm(
        `¿Quieres ${accion} la agrupación "${agrupacion.nombre}"?`,
      )
    ) {
      return;
    }

    try {
      setError(null);

      await editarConfiguracionAgrupacion(agrupacion.id, {
        nombre: agrupacion.nombre,
        descripcion: agrupacion.descripcion ?? undefined,
        activo: !agrupacion.activo,
      });

      await cargarDatos();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "No se ha podido cambiar el estado de la agrupación.",
      );
    }
  }

  if (cargando) {
    return (
      <section className="agrupaciones-page">
        <div className="agrupaciones-header">
          <div>
            <h1>Agrupaciones</h1>
            <p>Gestión de las agrupaciones de la Unión Musical de Tenorio.</p>
          </div>
        </div>

        <div className="agrupaciones-feedback">
          Cargando configuración...
        </div>
      </section>
    );
  }

  return (
    <section className="agrupaciones-page">
      <div className="agrupaciones-header">
        <div>
          <button
            type="button"
            className="agrupaciones-back-button"
            onClick={() => navigate("/configuracion")}
          >
            ← Atrás
          </button>

          <h1>Agrupaciones</h1>
          <p>Gestión de las agrupaciones de la Unión Musical de Tenorio.</p>
        </div>

        <button
          type="button"
          className="agrupaciones-primary-button"
          onClick={abrirCrear}
        >
          + Nueva agrupación
        </button>
      </div>

      {error && (
        <div className="agrupaciones-error" role="alert">
          {error}
        </div>
      )}

      {agrupaciones.length === 0 ? (
        <div className="agrupaciones-empty">
          <h2>No hay agrupaciones configuradas</h2>
          <p>
            Crea la primera agrupación para comenzar a gestionar las
            agrupaciones de la Unión Musical de Tenorio.
          </p>
        </div>
      ) : (
        <div className="agrupaciones-list">
          {agrupaciones.map((agrupacion) => (
            <div className="agrupacion-row" key={agrupacion.id}>
              <div className="agrupacion-main">
                <strong>{agrupacion.nombre}</strong>

                {agrupacion.descripcion && (
                  <span>{agrupacion.descripcion}</span>
                )}
              </div>

              <div className="agrupacion-actions">
                <span
                  className={
                    agrupacion.activo
                      ? "agrupacion-status activo"
                      : "agrupacion-status inactivo"
                  }
                >
                  {agrupacion.activo ? "Activo" : "Inactivo"}
                </span>

                <button
                  type="button"
                  className="agrupacion-action-button"
                  onClick={() => abrirEditar(agrupacion)}
                >
                  Editar
                </button>

                <button
                  type="button"
                  className="agrupacion-action-button"
                  onClick={() => void cambiarEstado(agrupacion)}
                >
                  {agrupacion.activo ? "Desactivar" : "Activar"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {modal && (
        <div className="agrupaciones-modal-backdrop">
          <div
            className="agrupaciones-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="agrupaciones-modal-title"
          >
            <div className="agrupaciones-modal-header">
              <div>
                <span className="agrupaciones-level-label">
                  CONFIGURACIÓN
                </span>

                <h2 id="agrupaciones-modal-title">
                  {modal === "crear"
                    ? "Nueva agrupación"
                    : "Editar agrupación"}
                </h2>
              </div>

              <button
                type="button"
                className="agrupaciones-modal-close"
                onClick={cerrarModal}
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>

            <div className="agrupaciones-modal-body">
              <label>
                Nombre
                <input
                  type="text"
                  value={nombre}
                  onChange={(event) => setNombre(event.target.value)}
                  autoFocus
                />
              </label>

              <label>
                Descripción
                <textarea
                  value={descripcion}
                  onChange={(event) =>
                    setDescripcion(event.target.value)
                  }
                  rows={4}
                />
              </label>
            </div>

            <div className="agrupaciones-modal-footer">
              <button
                type="button"
                className="agrupaciones-secondary-button"
                onClick={cerrarModal}
              >
                Cancelar
              </button>

              <button
                type="button"
                className="agrupaciones-primary-button"
                onClick={() => void guardar()}
                disabled={!nombre.trim()}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Agrupaciones;
