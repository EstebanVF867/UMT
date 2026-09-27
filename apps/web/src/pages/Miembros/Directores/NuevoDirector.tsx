import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  buscarPersonasDisponiblesParaDirector,
  crearDirector,
  listarConfiguracionAgrupaciones,
} from "../../../lib/api";
import type {
  ConfiguracionAgrupacion,
  PersonaDisponibleParaDirector,
} from "../../../lib/api";
import "./NuevoDirector.css";

function NuevoDirector() {
  const navigate = useNavigate();

  const [modoPersona, setModoPersona] = useState<"NUEVA" | "EXISTENTE">(
    "NUEVA",
  );
  const [personaSeleccionada, setPersonaSeleccionada] =
    useState<PersonaDisponibleParaDirector | null>(null);
  const [busquedaPersona, setBusquedaPersona] = useState("");
  const [resultadosPersonas, setResultadosPersonas] = useState<
    PersonaDisponibleParaDirector[]
  >([]);
  const [buscandoPersonas, setBuscandoPersonas] = useState(false);

  const [agrupaciones, setAgrupaciones] = useState<ConfiguracionAgrupacion[]>(
    [],
  );
  const [cargandoAgrupaciones, setCargandoAgrupaciones] = useState(true);

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [dni, setDni] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [observacionesPersona, setObservacionesPersona] = useState("");

  const [agrupacionIds, setAgrupacionIds] = useState<string[]>([]);
  const [fechaInicio, setFechaInicio] = useState("");
  const [observacionesPeriodo, setObservacionesPeriodo] = useState("");

  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");
  const [errorAgrupaciones, setErrorAgrupaciones] = useState("");

  useEffect(() => {
    let activo = true;

    async function cargarAgrupaciones() {
      setCargandoAgrupaciones(true);
      setErrorAgrupaciones("");

      try {
        const agrupacionesData = await listarConfiguracionAgrupaciones();

        if (!activo) {
          return;
        }

        setAgrupaciones(
          agrupacionesData.filter((agrupacion) => agrupacion.activo),
        );
      } catch (err) {
        if (!activo) {
          return;
        }

        setErrorAgrupaciones(
          err instanceof Error
            ? err.message
            : "No se han podido cargar las agrupaciones.",
        );
      } finally {
        if (activo) {
          setCargandoAgrupaciones(false);
        }
      }
    }

    void cargarAgrupaciones();

    return () => {
      activo = false;
    };
  }, []);

  useEffect(() => {
    if (modoPersona !== "EXISTENTE") {
      setResultadosPersonas([]);
      return;
    }

    const termino = busquedaPersona.trim();

    if (termino.length < 2) {
      setResultadosPersonas([]);
      return;
    }

    let activo = true;

    const temporizador = window.setTimeout(async () => {
      setBuscandoPersonas(true);

      try {
        const personas = await buscarPersonasDisponiblesParaDirector(termino);

        if (activo) {
          setResultadosPersonas(personas);
        }
      } catch (err) {
        if (activo) {
          setError(
            err instanceof Error
              ? err.message
              : "No se han podido buscar personas.",
          );
          setResultadosPersonas([]);
        }
      } finally {
        if (activo) {
          setBuscandoPersonas(false);
        }
      }
    }, 300);

    return () => {
      activo = false;
      window.clearTimeout(temporizador);
    };
  }, [busquedaPersona, modoPersona]);

  function seleccionarPersona(persona: PersonaDisponibleParaDirector) {
    setPersonaSeleccionada(persona);
    setNombre(persona.nombre);
    setApellidos(persona.apellidos);
    setDni(persona.dni ?? "");
    setEmail(persona.email ?? "");
    setTelefono(persona.telefono ?? "");
    setResultadosPersonas([]);
    setBusquedaPersona("");
    setError("");
  }

  function cambiarModoPersona(modo: "NUEVA" | "EXISTENTE") {
    if (guardando) {
      return;
    }

    setModoPersona(modo);
    setPersonaSeleccionada(null);
    setResultadosPersonas([]);
    setBusquedaPersona("");
    setError("");

    setNombre("");
    setApellidos("");
    setDni("");
    setFechaNacimiento("");
    setEmail("");
    setTelefono("");
    setObservacionesPersona("");
  }

  function limpiarPersonaSeleccionada() {
    if (guardando) {
      return;
    }

    setPersonaSeleccionada(null);
    setNombre("");
    setApellidos("");
    setDni("");
    setFechaNacimiento("");
    setEmail("");
    setTelefono("");
    setObservacionesPersona("");
  }

  function alternarAgrupacion(agrupacionId: string) {
    setAgrupacionIds((actuales) =>
      actuales.includes(agrupacionId)
        ? actuales.filter((id) => id !== agrupacionId)
        : [...actuales, agrupacionId],
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");

    const nombreNormalizado = nombre.trim();
    const apellidosNormalizados = apellidos.trim();
    const fechaInicioNormalizada = fechaInicio.trim();

    if (modoPersona === "EXISTENTE" && !personaSeleccionada) {
      setError("Selecciona una persona existente antes de continuar.");
      return;
    }

    if (!nombreNormalizado || !apellidosNormalizados) {
      setError("El nombre y los apellidos son obligatorios.");
      return;
    }

    if (!fechaInicioNormalizada) {
      setError("La fecha de alta es obligatoria.");
      return;
    }

    if (agrupacionIds.length === 0) {
      setError("Debes seleccionar al menos una agrupación.");
      return;
    }

    setGuardando(true);

    try {
      await crearDirector({
        personaId: personaSeleccionada?.id,
        nombre: nombreNormalizado,
        apellidos: apellidosNormalizados,
        dni: dni.trim() || undefined,
        fechaNacimiento: fechaNacimiento || undefined,
        email: email.trim() || undefined,
        telefono: telefono.trim() || undefined,
        observacionesPersona:
          observacionesPersona.trim() || undefined,
        fechaInicio: fechaInicioNormalizada,
        agrupacionIds,
        observacionesPeriodo:
          observacionesPeriodo.trim() || undefined,
      });

      navigate("/miembros/directores");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No se ha podido crear el director.",
      );
    } finally {
      setGuardando(false);
    }
  }

  function handleCancelar() {
    if (guardando) {
      return;
    }

    navigate("/miembros/directores");
  }

  const datosPersonalesBloqueados =
    modoPersona === "EXISTENTE" && personaSeleccionada !== null;

  return (
    <section className="nuevo-director-page">
      <div className="nuevo-director-header">
        <div>
          <div className="nuevo-director-breadcrumb">
            MIEMBROS UMT / DIRECTORES
          </div>
          <h1>Nuevo director</h1>
          <p>
            Registra una nueva persona o incorpora como director a una
            persona que ya pertenece a la UMT.
          </p>
        </div>
      </div>

      {error && (
        <div className="nuevo-director-error" role="alert">
          <strong>No se ha podido crear el director</strong>
          <span>{error}</span>
        </div>
      )}

      {errorAgrupaciones && (
        <div className="nuevo-director-error" role="alert">
          <strong>No se han podido cargar las agrupaciones</strong>
          <span>{errorAgrupaciones}</span>
        </div>
      )}

      <form className="nuevo-director-form" onSubmit={handleSubmit}>
        <fieldset disabled={guardando} className="nuevo-director-section">
          <legend>Persona</legend>

          <div className="nuevo-director-section-description">
            Indica si vas a crear una persona nueva o si vas a incorporar como
            director a una persona que ya existe en la UMT.
          </div>

          <div className="nuevo-director-persona-options">
            <label className="nuevo-director-persona-option">
              <input
                type="radio"
                name="modoPersona"
                value="NUEVA"
                checked={modoPersona === "NUEVA"}
                onChange={() => cambiarModoPersona("NUEVA")}
              />
              <span>
                <strong>Nueva persona</strong>
                <small>Crear una nueva ficha personal.</small>
              </span>
            </label>

            <label className="nuevo-director-persona-option">
              <input
                type="radio"
                name="modoPersona"
                value="EXISTENTE"
                checked={modoPersona === "EXISTENTE"}
                onChange={() => cambiarModoPersona("EXISTENTE")}
              />
              <span>
                <strong>Persona existente</strong>
                <small>
                  Buscar una persona que todavía no esté registrada como
                  director.
                </small>
              </span>
            </label>
          </div>

          {modoPersona === "EXISTENTE" && (
            <div className="nuevo-director-persona-search">
              <label htmlFor="busquedaPersona">Buscar persona</label>

              <input
                id="busquedaPersona"
                type="search"
                value={busquedaPersona}
                onChange={(event) => setBusquedaPersona(event.target.value)}
                placeholder="Nombre, apellidos o DNI"
                disabled={personaSeleccionada !== null}
              />

              {!personaSeleccionada &&
                busquedaPersona.trim().length === 1 && (
                  <div className="nuevo-director-search-hint">
                    Escribe al menos 2 caracteres para buscar.
                  </div>
                )}

              {buscandoPersonas && (
                <div className="nuevo-director-search-hint">
                  Buscando personas...
                </div>
              )}

              {!personaSeleccionada &&
                !buscandoPersonas &&
                busquedaPersona.trim().length >= 2 &&
                resultadosPersonas.length === 0 && (
                  <div className="nuevo-director-search-hint">
                    No se han encontrado personas disponibles.
                  </div>
                )}

              {!personaSeleccionada && resultadosPersonas.length > 0 && (
                <div className="nuevo-director-persona-results">
                  {resultadosPersonas.map((persona) => (
                    <button
                      key={persona.id}
                      type="button"
                      className="nuevo-director-persona-result"
                      onClick={() => seleccionarPersona(persona)}
                    >
                      <span className="nuevo-director-persona-result-main">
                        <strong>
                          {persona.nombre} {persona.apellidos}
                        </strong>
                        <span>
                          {persona.dni || "Sin DNI / documento"}
                        </span>
                      </span>

                      <span className="nuevo-director-persona-result-roles">
                        {persona.roles.length > 0
                          ? persona.roles
                              .map((rol) => rol.nombre)
                              .join(" · ")
                          : "Sin roles funcionales"}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {personaSeleccionada && (
                <div className="nuevo-director-persona-selected">
                  <div>
                    <strong>
                      {personaSeleccionada.nombre}{" "}
                      {personaSeleccionada.apellidos}
                    </strong>

                    <span>
                      {personaSeleccionada.roles.length > 0
                        ? personaSeleccionada.roles
                            .map((rol) => rol.nombre)
                            .join(" · ")
                        : "Sin roles funcionales"}
                    </span>
                  </div>

                  <button
                    type="button"
                    className="nuevo-director-button nuevo-director-button-secondary"
                    onClick={limpiarPersonaSeleccionada}
                  >
                    Cambiar persona
                  </button>
                </div>
              )}
            </div>
          )}
        </fieldset>

        <fieldset disabled={guardando} className="nuevo-director-section">
          <legend>Datos personales</legend>

          <div className="nuevo-director-section-description">
            Información básica de la persona.
            {datosPersonalesBloqueados &&
              " Al tratarse de una persona existente, estos datos no se modifican desde el alta como director."}
          </div>

          <div className="nuevo-director-fields nuevo-director-fields-two">
            <div className="nuevo-director-field">
              <label htmlFor="nombre">
                Nombre <span>*</span>
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
                required
                readOnly={datosPersonalesBloqueados}
              />
            </div>

            <div className="nuevo-director-field">
              <label htmlFor="apellidos">
                Apellidos <span>*</span>
              </label>
              <input
                id="apellidos"
                name="apellidos"
                type="text"
                value={apellidos}
                onChange={(event) => setApellidos(event.target.value)}
                required
                readOnly={datosPersonalesBloqueados}
              />
            </div>

            <div className="nuevo-director-field">
              <label htmlFor="dni">DNI / documento</label>
              <input
                id="dni"
                name="dni"
                type="text"
                value={dni}
                onChange={(event) => setDni(event.target.value)}
                readOnly={datosPersonalesBloqueados}
              />
            </div>

            <div className="nuevo-director-field">
              <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
              <input
                id="fechaNacimiento"
                name="fechaNacimiento"
                type="date"
                value={fechaNacimiento}
                onChange={(event) => setFechaNacimiento(event.target.value)}
                readOnly={datosPersonalesBloqueados}
              />
            </div>

            <div className="nuevo-director-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                readOnly={datosPersonalesBloqueados}
              />
            </div>

            <div className="nuevo-director-field">
              <label htmlFor="telefono">Teléfono</label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                value={telefono}
                onChange={(event) => setTelefono(event.target.value)}
                readOnly={datosPersonalesBloqueados}
              />
            </div>

            <div className="nuevo-director-field nuevo-director-field-full">
              <label htmlFor="observacionesPersona">Observaciones</label>
              <textarea
                id="observacionesPersona"
                name="observacionesPersona"
                value={observacionesPersona}
                onChange={(event) =>
                  setObservacionesPersona(event.target.value)
                }
                rows={4}
                readOnly={datosPersonalesBloqueados}
              />
            </div>
          </div>
        </fieldset>

        <fieldset
          disabled={guardando || cargandoAgrupaciones}
          className="nuevo-director-section"
        >
          <legend>Agrupaciones</legend>

          <div className="nuevo-director-section-description">
            Selecciona una o varias agrupaciones que dirigirá durante este
            período de actividad.
          </div>

          {agrupaciones.length === 0 && !errorAgrupaciones ? (
            <div className="nuevo-director-search-hint">
              No hay agrupaciones activas disponibles.
            </div>
          ) : (
            <div className="nuevo-director-group-options">
              {agrupaciones.map((agrupacion) => (
                <label
                  key={agrupacion.id}
                  className="nuevo-director-group-option"
                >
                  <input
                    type="checkbox"
                    checked={agrupacionIds.includes(agrupacion.id)}
                    onChange={() => alternarAgrupacion(agrupacion.id)}
                  />
                  <span>{agrupacion.nombre}</span>
                </label>
              ))}
            </div>
          )}
        </fieldset>

        <fieldset disabled={guardando} className="nuevo-director-section">
          <legend>Alta como director</legend>

          <div className="nuevo-director-section-description">
            Información correspondiente al inicio de su actividad como
            director en la UMT.
          </div>

          <div className="nuevo-director-fields">
            <div className="nuevo-director-field nuevo-director-field-small">
              <label htmlFor="fechaInicio">
                Fecha de alta <span>*</span>
              </label>

              <input
                id="fechaInicio"
                name="fechaInicio"
                type="date"
                value={fechaInicio}
                onChange={(event) => setFechaInicio(event.target.value)}
                required
              />
            </div>

            <div className="nuevo-director-field nuevo-director-field-full">
              <label htmlFor="observacionesPeriodo">
                Observaciones del alta
              </label>

              <textarea
                id="observacionesPeriodo"
                name="observacionesPeriodo"
                value={observacionesPeriodo}
                onChange={(event) =>
                  setObservacionesPeriodo(event.target.value)
                }
                rows={4}
              />
            </div>
          </div>
        </fieldset>

        <div className="nuevo-director-actions">
          <button
            type="button"
            className="nuevo-director-button nuevo-director-button-secondary"
            onClick={handleCancelar}
            disabled={guardando}
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="nuevo-director-button nuevo-director-button-primary"
            disabled={guardando || cargandoAgrupaciones}
          >
            {guardando ? "Creando..." : "Crear director"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default NuevoDirector;
