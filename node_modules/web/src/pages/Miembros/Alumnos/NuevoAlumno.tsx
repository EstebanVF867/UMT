import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  buscarPersonasDisponiblesParaAlumno,
  crearAlumno,
  listarConfiguracionAgrupaciones,
  listarConfiguracionInstrumentos,
} from "../../../lib/api";
import type {
  ConfiguracionAgrupacion,
  ConfiguracionInstrumento,
  PersonaDisponibleParaMusico,
} from "../../../lib/api";
import "./NuevoAlumno.css";

function agruparInstrumentosPorFamiliaYSeccion(
  instrumentos: ConfiguracionInstrumento[],
) {
  const familias = new Map<
    string,
    Map<string, ConfiguracionInstrumento[]>
  >();

  for (const instrumento of instrumentos) {
    const familiaNombre = instrumento.seccion.familia.nombre;
    const seccionNombre = instrumento.seccion.nombre;

    if (!familias.has(familiaNombre)) {
      familias.set(familiaNombre, new Map());
    }

    const secciones = familias.get(familiaNombre)!;

    if (!secciones.has(seccionNombre)) {
      secciones.set(seccionNombre, []);
    }

    secciones.get(seccionNombre)!.push(instrumento);
  }

  return Array.from(familias.entries())
    .sort(([familiaA], [familiaB]) =>
      familiaA.localeCompare(familiaB, "es"),
    )
    .map(([familia, secciones]) => ({
      familia,
      secciones: Array.from(secciones.entries())
        .sort(([seccionA], [seccionB]) =>
          seccionA.localeCompare(seccionB, "es"),
        )
        .map(([seccion, instrumentosSeccion]) => ({
          seccion,
          instrumentos: [...instrumentosSeccion].sort((a, b) =>
            a.nombre.localeCompare(b.nombre, "es"),
          ),
        })),
    }));
}

function NuevoAlumno() {
  const navigate = useNavigate();

  const [modoPersona, setModoPersona] = useState<"NUEVA" | "EXISTENTE">(
    "NUEVA",
  );
  const [personaSeleccionada, setPersonaSeleccionada] =
    useState<PersonaDisponibleParaMusico | null>(null);
  const [busquedaPersona, setBusquedaPersona] = useState("");
  const [resultadosPersonas, setResultadosPersonas] = useState<
    PersonaDisponibleParaMusico[]
  >([]);
  const [buscandoPersonas, setBuscandoPersonas] = useState(false);

  const [instrumentos, setInstrumentos] = useState<
    ConfiguracionInstrumento[]
  >([]);
  const [agrupaciones, setAgrupaciones] = useState<ConfiguracionAgrupacion[]>(
    [],
  );
  const [cargandoCatalogos, setCargandoCatalogos] = useState(true);

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [dni, setDni] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [observacionesPersona, setObservacionesPersona] = useState("");

  const [instrumentoPrincipalId, setInstrumentoPrincipalId] = useState("");
  const [segundoInstrumentoId, setSegundoInstrumentoId] = useState("");
  const [agrupacionId, setAgrupacionId] = useState("");

  const [fechaInicio, setFechaInicio] = useState("");
  const [observacionesPeriodo, setObservacionesPeriodo] = useState("");

  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");
  const [errorCatalogos, setErrorCatalogos] = useState("");

  useEffect(() => {
    let activo = true;

    async function cargarCatalogos() {
      setCargandoCatalogos(true);
      setErrorCatalogos("");

      try {
        const [instrumentosData, agrupacionesData] = await Promise.all([
          listarConfiguracionInstrumentos(),
          listarConfiguracionAgrupaciones(),
        ]);

        if (!activo) {
          return;
        }

        setInstrumentos(
          instrumentosData.filter((instrumento) => instrumento.activo),
        );
        setAgrupaciones(
          agrupacionesData.filter((agrupacion) => agrupacion.activo),
        );
      } catch (err) {
        if (!activo) {
          return;
        }

        setErrorCatalogos(
          err instanceof Error
            ? err.message
            : "No se han podido cargar los catálogos.",
        );
      } finally {
        if (activo) {
          setCargandoCatalogos(false);
        }
      }
    }

    void cargarCatalogos();

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
        const personas = await buscarPersonasDisponiblesParaAlumno(termino);

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

  function seleccionarPersona(persona: PersonaDisponibleParaMusico) {
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

    if (modo === "NUEVA") {
      setNombre("");
      setApellidos("");
      setDni("");
      setFechaNacimiento("");
      setEmail("");
      setTelefono("");
      setObservacionesPersona("");
    } else {
      setNombre("");
      setApellidos("");
      setDni("");
      setFechaNacimiento("");
      setEmail("");
      setTelefono("");
      setObservacionesPersona("");
    }
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

    if (
      instrumentoPrincipalId &&
      segundoInstrumentoId &&
      instrumentoPrincipalId === segundoInstrumentoId
    ) {
      setError(
        "El instrumento principal y el segundo instrumento no pueden ser el mismo.",
      );
      return;
    }

    setGuardando(true);

    try {
      await crearAlumno({
        personaId: personaSeleccionada?.id,
        instrumentoPrincipalId: instrumentoPrincipalId || undefined,
        segundoInstrumentoId: segundoInstrumentoId || undefined,
        agrupacionId: agrupacionId || undefined,
        nombre: nombreNormalizado,
        apellidos: apellidosNormalizados,
        dni: dni.trim() || undefined,
        fechaNacimiento: fechaNacimiento || undefined,
        email: email.trim() || undefined,
        telefono: telefono.trim() || undefined,
        observacionesPersona:
          observacionesPersona.trim() || undefined,
        fechaInicio: fechaInicioNormalizada,
        observacionesPeriodo:
          observacionesPeriodo.trim() || undefined,
      });

      navigate("/miembros/alumnos");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No se ha podido crear el alumno.",
      );
    } finally {
      setGuardando(false);
    }
  }

  function handleCancelar() {
    if (guardando) {
      return;
    }

    navigate("/miembros/alumnos");
  }

  const datosPersonalesBloqueados =
    modoPersona === "EXISTENTE" && personaSeleccionada !== null;
  const instrumentosAgrupados =
    agruparInstrumentosPorFamiliaYSeccion(instrumentos);

  return (
    <section className="nuevo-alumno-page">
      <div className="nuevo-alumno-header">
        <div>
          <div className="nuevo-alumno-breadcrumb">MIEMBROS UMT / ALUMNOS</div>
          <h1>Nuevo alumno</h1>
          <p>
            Registra una nueva persona o incorpora como alumno a una persona
            que ya pertenece a la UMT.
          </p>
        </div>
      </div>

      {error && (
        <div className="nuevo-alumno-error" role="alert">
          <strong>No se ha podido crear el alumno</strong>
          <span>{error}</span>
        </div>
      )}

      {errorCatalogos && (
        <div className="nuevo-alumno-error" role="alert">
          <strong>No se han podido cargar los catálogos</strong>
          <span>{errorCatalogos}</span>
        </div>
      )}

      <form className="nuevo-alumno-form" onSubmit={handleSubmit}>
        <fieldset disabled={guardando} className="nuevo-alumno-section">
          <legend>Persona</legend>

          <div className="nuevo-alumno-section-description">
            Indica si vas a crear una persona nueva o si vas a incorporar como
            alumno a una persona que ya existe en la UMT.
          </div>

          <div className="nuevo-alumno-persona-options">
            <label className="nuevo-alumno-persona-option">
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

            <label className="nuevo-alumno-persona-option">
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
                  alumno.
                </small>
              </span>
            </label>
          </div>

          {modoPersona === "EXISTENTE" && (
            <div className="nuevo-alumno-persona-search">
              <label htmlFor="busquedaPersona">
                Buscar persona
              </label>

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
                  <div className="nuevo-alumno-search-hint">
                    Escribe al menos 2 caracteres para buscar.
                  </div>
                )}

              {buscandoPersonas && (
                <div className="nuevo-alumno-search-hint">
                  Buscando personas...
                </div>
              )}

              {!personaSeleccionada &&
                !buscandoPersonas &&
                busquedaPersona.trim().length >= 2 &&
                resultadosPersonas.length === 0 && (
                  <div className="nuevo-alumno-search-hint">
                    No se han encontrado personas disponibles.
                  </div>
                )}

              {!personaSeleccionada && resultadosPersonas.length > 0 && (
                <div className="nuevo-alumno-persona-results">
                  {resultadosPersonas.map((persona) => (
                    <button
                      key={persona.id}
                      type="button"
                      className="nuevo-alumno-persona-result"
                      onClick={() => seleccionarPersona(persona)}
                    >
                      <span className="nuevo-alumno-persona-result-main">
                        <strong>
                          {persona.nombre} {persona.apellidos}
                        </strong>
                        <span>
                          {persona.dni || "Sin DNI / documento"}
                        </span>
                      </span>

                      <span className="nuevo-alumno-persona-result-roles">
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
                <div className="nuevo-alumno-persona-selected">
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
                    className="nuevo-alumno-button nuevo-alumno-button-secondary"
                    onClick={limpiarPersonaSeleccionada}
                  >
                    Cambiar persona
                  </button>
                </div>
              )}
            </div>
          )}
        </fieldset>

        <fieldset disabled={guardando} className="nuevo-alumno-section">
          <legend>Datos personales</legend>

          <div className="nuevo-alumno-section-description">
            Información básica de la persona.
            {datosPersonalesBloqueados &&
              " Al tratarse de una persona existente, estos datos no se modifican desde el alta como alumno."}
          </div>

          <div className="nuevo-alumno-fields nuevo-alumno-fields-two">
            <div className="nuevo-alumno-field">
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

            <div className="nuevo-alumno-field">
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

            <div className="nuevo-alumno-field">
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

            <div className="nuevo-alumno-field">
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

            <div className="nuevo-alumno-field">
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

            <div className="nuevo-alumno-field">
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

            <div className="nuevo-alumno-field nuevo-alumno-field-full">
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
          disabled={guardando || cargandoCatalogos}
          className="nuevo-alumno-section"
        >
          <legend>Perfil musical</legend>

          <div className="nuevo-alumno-section-description">
            Selecciona el instrumento principal, un segundo instrumento si
            corresponde y la agrupación a la que pertenece.
          </div>

          <div className="nuevo-alumno-fields nuevo-alumno-fields-two">
            <div className="nuevo-alumno-field">
              <label htmlFor="instrumentoPrincipal">
                Instrumento principal
              </label>

              <select
  id="instrumentoPrincipal"
  value={instrumentoPrincipalId}
  onChange={(event) =>
    setInstrumentoPrincipalId(event.target.value)
  }
>
  <option value="">Sin instrumento</option>

  {instrumentosAgrupados.map((familia) => (
    <optgroup key={familia.familia} label={familia.familia}>
      {familia.secciones.flatMap((seccion) => [
        <option
          key={`${familia.familia}-${seccion.seccion}-separador`}
          disabled
        >
          — {seccion.seccion} —
        </option>,
        ...seccion.instrumentos.map((instrumento) => (
          <option key={instrumento.id} value={instrumento.id}>
            {instrumento.nombre}
          </option>
        )),
      ])}
    </optgroup>
  ))}
</select>
            </div>

            <div className="nuevo-alumno-field">
              <label htmlFor="segundoInstrumento">
                Segundo instrumento
              </label>

              <select
  id="segundoInstrumento"
  value={segundoInstrumentoId}
  onChange={(event) =>
    setSegundoInstrumentoId(event.target.value)
  }
>
  <option value="">Sin segundo instrumento</option>

  {instrumentosAgrupados.map((familia) => (
    <optgroup key={familia.familia} label={familia.familia}>
      {familia.secciones.flatMap((seccion) => [
        <option
          key={`${familia.familia}-${seccion.seccion}-separador`}
          disabled
        >
          — {seccion.seccion} —
        </option>,
        ...seccion.instrumentos.map((instrumento) => (
          <option key={instrumento.id} value={instrumento.id}>
            {instrumento.nombre}
          </option>
        )),
      ])}
    </optgroup>
  ))}
</select>
            </div>

            <div className="nuevo-alumno-field">
              <label htmlFor="agrupacion">Agrupación</label>

              <select
                id="agrupacion"
                value={agrupacionId}
                onChange={(event) => setAgrupacionId(event.target.value)}
              >
                <option value="">Sin agrupación</option>

                {agrupaciones.map((agrupacion) => (
                  <option key={agrupacion.id} value={agrupacion.id}>
                    {agrupacion.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset disabled={guardando} className="nuevo-alumno-section">
          <legend>Alta como alumno</legend>

          <div className="nuevo-alumno-section-description">
            Información correspondiente al inicio de su actividad como alumno
            en la UMT.
          </div>

          <div className="nuevo-alumno-fields">
            <div className="nuevo-alumno-field nuevo-alumno-field-small">
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

            <div className="nuevo-alumno-field nuevo-alumno-field-full">
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
            disabled={guardando || cargandoCatalogos}
          >
            {guardando ? "Creando..." : "Crear alumno"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default NuevoAlumno;




