import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  crearConfiguracionAula,
  editarConfiguracionAula,
  listarConfiguracionAulas,
} from "../../lib/api";
import type { ConfiguracionAula } from "../../lib/api";
import "./Aulas.css";

type ModalTipo = "crear" | "editar" | null;

function Aulas() {
  const navigate = useNavigate();

  const [aulas, setAulas] = useState<ConfiguracionAula[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modal, setModal] = useState<ModalTipo>(null);

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [capacidad, setCapacidad] = useState("");
  const [aulaEditando, setAulaEditando] =
    useState<ConfiguracionAula | null>(null);

  async function cargarDatos() {
    try {
      setCargando(true);
      setError(null);

      const datos = await listarConfiguracionAulas();
      setAulas(datos);
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
    setCapacidad("");
    setAulaEditando(null);
    setModal("crear");
  }

  function abrirEditar(aula: ConfiguracionAula) {
    setNombre(aula.nombre);
    setDescripcion(aula.descripcion ?? "");
    setCapacidad(aula.capacidad?.toString() ?? "");
    setAulaEditando(aula);
    setModal("editar");
  }

  function cerrarModal() {
    setModal(null);
    setNombre("");
    setDescripcion("");
    setCapacidad("");
    setAulaEditando(null);
  }

  async function guardar() {
    try {
      setError(null);

      const capacidadNormalizada = capacidad.trim()
        ? Number(capacidad)
        : undefined;

      if (
        capacidadNormalizada !== undefined &&
        (!Number.isInteger(capacidadNormalizada) ||
          capacidadNormalizada < 0)
      ) {
        setError(
          "La capacidad debe ser un número entero igual o superior a 0.",
        );
        return;
      }

      if (modal === "crear") {
        await crearConfiguracionAula({
          nombre: nombre.trim(),
          descripcion: descripcion.trim() || undefined,
          capacidad: capacidadNormalizada,
        });
      }

      if (modal === "editar" && aulaEditando) {
        await editarConfiguracionAula(aulaEditando.id, {
          nombre: nombre.trim(),
          descripcion: descripcion.trim() || undefined,
          capacidad: capacidadNormalizada,
          activo: aulaEditando.activo,
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

  async function cambiarEstado(aula: ConfiguracionAula) {
    const accion = aula.activo ? "desactivar" : "activar";

    if (
      !window.confirm(`¿Quieres ${accion} el aula "${aula.nombre}"?`)
    ) {
      return;
    }

    try {
      setError(null);

      await editarConfiguracionAula(aula.id, {
        nombre: aula.nombre,
        descripcion: aula.descripcion ?? undefined,
        capacidad: aula.capacidad ?? undefined,
        activo: !aula.activo,
      });

      await cargarDatos();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "No se ha podido cambiar el estado del aula.",
      );
    }
  }

  if (cargando) {
    return (
      <section className="aulas-page">
        <div className="aulas-header">
          <div>
            <h1>Aulas</h1>
            <p>Gestión de las aulas disponibles para las clases.</p>
          </div>
        </div>

        <div className="aulas-feedback">
          Cargando configuración...
        </div>
      </section>
    );
  }

  return (
    <section className="aulas-page">
      <div className="aulas-header">
        <div>
          <button
            type="button"
            className="aulas-back-button"
            onClick={() => navigate("/configuracion")}
          >
            ← Atrás
          </button>

          <h1>Aulas</h1>
          <p>Gestión de las aulas disponibles para las clases.</p>
        </div>

        <button
          type="button"
          className="aulas-primary-button"
          onClick={abrirCrear}
        >
          + Nueva aula
        </button>
      </div>

      {error && (
        <div className="aulas-error" role="alert">
          {error}
        </div>
      )}

      {aulas.length === 0 ? (
        <div className="aulas-empty">
          <h2>No hay aulas configuradas</h2>
          <p>
            Crea la primera aula para comenzar a gestionar las aulas de
            la Unión Musical de Tenorio.
          </p>
        </div>
      ) : (
        <div className="aulas-list">
          {aulas.map((aula) => (
            <div className="aula-row" key={aula.id}>
              <div className="aula-main">
                <strong>{aula.nombre}</strong>

                {aula.descripcion && (
                  <span>{aula.descripcion}</span>
                )}
              </div>

              <div className="aula-capacidad">
                <span className="aula-capacidad-label">Capacidad</span>
                <strong>
                  {aula.capacidad !== null
                    ? `${aula.capacidad} personas`
                    : "Sin especificar"}
                </strong>
              </div>

              <div className="aula-actions">
                <span
                  className={
                    aula.activo
                      ? "aula-status activo"
                      : "aula-status inactivo"
                  }
                >
                  {aula.activo ? "Activo" : "Inactivo"}
                </span>

                <button
                  type="button"
                  className="aula-action-button"
                  onClick={() => abrirEditar(aula)}
                >
                  Editar
                </button>

                <button
                  type="button"
                  className="aula-action-button"
                  onClick={() => void cambiarEstado(aula)}
                >
                  {aula.activo ? "Desactivar" : "Activar"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {modal && (
        <div className="aulas-modal-backdrop">
          <div
            className="aulas-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="aulas-modal-title"
          >
            <div className="aulas-modal-header">
              <div>
                <span className="aulas-level-label">
                  CONFIGURACIÓN
                </span>

                <h2 id="aulas-modal-title">
                  {modal === "crear" ? "Nueva aula" : "Editar aula"}
                </h2>
              </div>

              <button
                type="button"
                className="aulas-modal-close"
                onClick={cerrarModal}
                aria-label="Cerrar"
              >
                ×
              </button>
            </div>

            <div className="aulas-modal-body">
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

              <label>
                Capacidad
                <input
                  type="number"
                  min="0"
                  step="1"
                  value={capacidad}
                  onChange={(event) =>
                    setCapacidad(event.target.value)
                  }
                  placeholder="Ej.: 30"
                />
              </label>
            </div>

            <div className="aulas-modal-footer">
              <button
                type="button"
                className="aulas-secondary-button"
                onClick={cerrarModal}
              >
                Cancelar
              </button>

              <button
                type="button"
                className="aulas-primary-button"
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

export default Aulas;
