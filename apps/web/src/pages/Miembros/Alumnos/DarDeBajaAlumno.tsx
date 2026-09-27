import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  darDeBajaAlumno,
  obtenerAlumno,
} from "../../../lib/api";
import type { AlumnoExpediente } from "../../../lib/api";
import "./NuevoAlumno.css";

type MotivoBaja =
  | "BAJA_VOLUNTARIA"
  | "DEJA_DE_PERTENECER_UMT"
  | "OTRO";

function obtenerFechaHoy() {
  const hoy = new Date();

  const year = hoy.getFullYear();
  const month = String(hoy.getMonth() + 1).padStart(2, "0");
  const day = String(hoy.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function DarDeBajaAlumno() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [alumno, setAlumno] = useState<AlumnoExpediente | null>(null);
  const [cargando, setCargando] = useState(true);
  const [guardando, setGuardando] = useState(false);

  const [fechaFin, setFechaFin] = useState(obtenerFechaHoy());
  const [motivoBaja, setMotivoBaja] = useState<MotivoBaja>(
    "BAJA_VOLUNTARIA",
  );
  const [observaciones, setObservaciones] = useState("");

  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      setError("No se ha indicado el alumno que se quiere dar de baja.");
      setCargando(false);
      return;
    }

    const alumnoId = id;
    let activo = true;

    async function cargarAlumno() {
      setCargando(true);
      setError("");

      try {
        const datos = await obtenerAlumno(alumnoId);

        if (!activo) {
          return;
        }

        setAlumno(datos);

        if (!datos.alumno.activo) {
          setError("El alumno ya está dado de baja.");
        }

        const periodoActivo = datos.periodos.find(
          (periodo) => periodo.fechaFin === null,
        );

        if (!periodoActivo) {
          setError(
            "El alumno no tiene un período de actividad abierto.",
          );
        }
      } catch (err) {
        if (!activo) {
          return;
        }

        setError(
          err instanceof Error
            ? err.message
            : "No se ha podido cargar el alumno.",
        );
      } finally {
        if (activo) {
          setCargando(false);
        }
      }
    }

    void cargarAlumno();

    return () => {
      activo = false;
    };
  }, [id]);

  function handleCancelar() {
    if (guardando || !id) {
      return;
    }

    navigate(`/miembros/alumnos/${id}`);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    if (!id || !alumno) {
      setError("No se ha podido identificar el alumno.");
      return;
    }

    if (!alumno.alumno.activo) {
      setError("El alumno ya está dado de baja.");
      return;
    }

    const periodoActivo = alumno.periodos.find(
      (periodo) => periodo.fechaFin === null,
    );

    if (!periodoActivo) {
      setError(
        "El alumno no tiene un período de actividad abierto.",
      );
      return;
    }

    if (!fechaFin) {
      setError("La fecha de baja es obligatoria.");
      return;
    }

    const hoy = obtenerFechaHoy();

    if (fechaFin > hoy) {
      setError(
        "La fecha de baja no puede ser posterior a la fecha actual.",
      );
      return;
    }

    if (
      motivoBaja === "OTRO" &&
      !observaciones.trim()
    ) {
      setError(
        "Cuando el motivo de baja es «Otro», debes indicar una observación.",
      );
      return;
    }

    if (fechaFin < periodoActivo.fechaInicio.slice(0, 10)) {
      setError(
        "La fecha de baja no puede ser anterior a la fecha de inicio del período actual.",
      );
      return;
    }

    setGuardando(true);

    try {
      await darDeBajaAlumno(id, periodoActivo.id, {
        fechaFin,
        motivoBaja,
        observaciones: observaciones.trim() || null,
      });

      navigate(`/miembros/alumnos/${id}`);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No se ha podido dar de baja al alumno.",
      );
    } finally {
      setGuardando(false);
    }
  }

  if (cargando) {
    return (
      <section className="nuevo-alumno-page">
        <div className="nuevo-alumno-header">
          <div>
            <div className="nuevo-alumno-breadcrumb">
              MIEMBROS UMT / ALUMNOS
            </div>
            <h1>Dar de baja alumno</h1>
            <p>Cargando los datos del alumno...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="nuevo-alumno-page">
      <div className="nuevo-alumno-header">
        <div>
          <div className="nuevo-alumno-breadcrumb">
            MIEMBROS UMT / ALUMNOS
          </div>

          <h1>Dar de baja alumno</h1>

          <p>
            Finaliza el período actual de actividad del alumno,
            conservando su historial en la UMT.
          </p>
        </div>
      </div>

      {error && (
        <div className="nuevo-alumno-error" role="alert">
          <strong>No se ha podido completar la baja</strong>
          <span>{error}</span>
        </div>
      )}

      {alumno && (
        <form
          className="nuevo-alumno-form"
          onSubmit={handleSubmit}
        >
          <fieldset
            disabled={guardando}
            className="nuevo-alumno-section"
          >
            <legend>Alumno</legend>

            <div className="nuevo-alumno-section-description">
              Comprueba que estás realizando la baja sobre el
              alumno correcto.
            </div>

            <div className="nuevo-alumno-fields">
              <div className="nuevo-alumno-field">
                <label>Nombre completo</label>
                <input
                  type="text"
                  value={`${alumno.persona.nombre} ${alumno.persona.apellidos}`}
                  readOnly
                />
              </div>
            </div>
          </fieldset>

          <fieldset
            disabled={guardando}
            className="nuevo-alumno-section"
          >
            <legend>Baja</legend>

            <div className="nuevo-alumno-section-description">
              Indica cuándo finaliza su actividad y el motivo de
              la baja.
            </div>

            <div className="nuevo-alumno-fields nuevo-alumno-fields-two">
              <div className="nuevo-alumno-field nuevo-alumno-field-small">
                <label htmlFor="fechaFin">
                  Fecha de baja <span>*</span>
                </label>

                <input
                  id="fechaFin"
                  name="fechaFin"
                  type="date"
                  value={fechaFin}
                  onChange={(event) =>
                    setFechaFin(event.target.value)
                  }
                  required
                />
              </div>

              <div className="nuevo-alumno-field">
                <label htmlFor="motivoBaja">
                  Motivo de baja <span>*</span>
                </label>

                <select
                  id="motivoBaja"
                  name="motivoBaja"
                  value={motivoBaja}
                  onChange={(event) =>
                    setMotivoBaja(
                      event.target.value as MotivoBaja,
                    )
                  }
                  required
                >
                  <option value="BAJA_VOLUNTARIA">
                    Baja voluntaria
                  </option>

                  <option value="DEJA_DE_PERTENECER_UMT">
                    Deja de pertenecer a la UMT
                  </option>

                  <option value="OTRO">Otro</option>
                </select>
              </div>

              <div className="nuevo-alumno-field nuevo-alumno-field-full">
                <label htmlFor="observaciones">
                  Observaciones
                  {motivoBaja === "OTRO" && <span> *</span>}
                </label>

                <textarea
                  id="observaciones"
                  name="observaciones"
                  value={observaciones}
                  onChange={(event) =>
                    setObservaciones(event.target.value)
                  }
                  rows={5}
                  placeholder={
                    motivoBaja === "OTRO"
                      ? "Indica el motivo de la baja."
                      : "Observaciones adicionales sobre la baja."
                  }
                  required={motivoBaja === "OTRO"}
                />
              </div>
            </div>
          </fieldset>

          <div className="nuevo-alumno-actions">
            <button
              type="button"
              className="nuevo-alumno-button nuevo-alumno-button-secondary"
              onClick={handleCancelar}
              disabled={guardando}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="nuevo-alumno-button nuevo-alumno-button-primary"
              disabled={guardando || !alumno.alumno.activo}
            >
              {guardando ? "Dando de baja..." : "Confirmar baja"}
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

export default DarDeBajaAlumno;
