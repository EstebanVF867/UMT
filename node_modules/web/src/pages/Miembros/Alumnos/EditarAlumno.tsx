import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  editarAlumno,
  listarConfiguracionAgrupaciones,
  listarConfiguracionInstrumentos,
  obtenerAlumno,
} from "../../../lib/api";
import type {
  ConfiguracionAgrupacion,
  ConfiguracionInstrumento,
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

function formatearFechaParaInput(
  fecha: string | null | undefined,
): string {
  if (!fecha) {
    return "";
  }

  return fecha.slice(0, 10);
}

function EditarAlumno() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [instrumentos, setInstrumentos] = useState<
    ConfiguracionInstrumento[]
  >([]);
  const [agrupaciones, setAgrupaciones] = useState<
    ConfiguracionAgrupacion[]
  >([]);

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [dni, setDni] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [observacionesPersona, setObservacionesPersona] = useState("");
  const [observacionesAlumno, setObservacionesAlumno] = useState("");

  const [instrumentoPrincipalId, setInstrumentoPrincipalId] =
    useState("");
  const [segundoInstrumentoId, setSegundoInstrumentoId] =
    useState("");
  const [agrupacionId, setAgrupacionId] = useState("");

  const [fechaInicio, setFechaInicio] = useState("");
  const [observacionesPeriodo, setObservacionesPeriodo] =
    useState("");

  const [cargando, setCargando] = useState(true);
  const [cargandoCatalogos, setCargandoCatalogos] = useState(true);
  const [guardando, setGuardando] = useState(false);

  const [error, setError] = useState("");
  const [errorCatalogos, setErrorCatalogos] = useState("");

  useEffect(() => {
    if (!id) {
      setError("No se ha indicado el alumno que se quiere editar.");
      setCargando(false);
      return;
    }

    const alumnoId = id;
    let activo = true;

    async function cargarAlumno() {
      setCargando(true);
      setError("");

      try {
        const alumno = await obtenerAlumno(alumnoId);

        if (!activo) {
          return;
        }

        if (!alumno) {
          setError("No se ha encontrado el alumno.");
          return;
        }

        setNombre(alumno.persona.nombre);
        setApellidos(alumno.persona.apellidos);
        setDni(alumno.persona.dni ?? "");
        setFechaNacimiento(
          formatearFechaParaInput(
            alumno.persona.fechaNacimiento,
          ),
        );
        setEmail(alumno.persona.email ?? "");
        setTelefono(alumno.persona.telefono ?? "");
        setObservacionesPersona(
          alumno.persona.observaciones ?? "",
        );
        setObservacionesAlumno(
          alumno.alumno.observaciones ?? "",
        );

        const instrumentosActivos = alumno.instrumentos.filter(
          (instrumento) => instrumento.fechaFin === null,
        );

        const instrumentoPrincipal = instrumentosActivos.find(
          (instrumento) => instrumento.principal,
        );

        const segundoInstrumento = instrumentosActivos.find(
          (instrumento) => !instrumento.principal,
        );

        setInstrumentoPrincipalId(
          instrumentoPrincipal?.instrumento.id ?? "",
        );
        setSegundoInstrumentoId(
          segundoInstrumento?.instrumento.id ?? "",
        );

        const agrupacionActual = alumno.agrupaciones.find(
          (agrupacion) =>
            agrupacion.activo && agrupacion.fechaBaja === null,
        );

        setAgrupacionId(
          agrupacionActual?.agrupacion.id ?? "",
        );

        const periodoActual =
          alumno.periodos.find(
            (periodo) => periodo.fechaFin === null,
          ) ?? alumno.periodos[0];

        setFechaInicio(
          formatearFechaParaInput(
            periodoActual?.fechaInicio,
          ),
        );

        setObservacionesPeriodo(
          periodoActual?.observaciones ?? "",
        );
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

  useEffect(() => {
    let activo = true;

    async function cargarCatalogos() {
      setCargandoCatalogos(true);
      setErrorCatalogos("");

      try {
        const [
          instrumentosData,
          agrupacionesData,
        ] = await Promise.all([
          listarConfiguracionInstrumentos(),
          listarConfiguracionAgrupaciones(),
        ]);

        if (!activo) {
          return;
        }

        setInstrumentos(
          instrumentosData.filter(
            (instrumento) => instrumento.activo,
          ),
        );

        setAgrupaciones(
          agrupacionesData.filter(
            (agrupacion) => agrupacion.activo,
          ),
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

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (!id) {
      setError("No se ha indicado el alumno que se quiere editar.");
      return;
    }

    setError("");

    const nombreNormalizado = nombre.trim();
    const apellidosNormalizados = apellidos.trim();

    if (!nombreNormalizado || !apellidosNormalizados) {
      setError("El nombre y los apellidos son obligatorios.");
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
      await editarAlumno(id, {
        nombre: nombreNormalizado,
        apellidos: apellidosNormalizados,
        dni: dni.trim() || undefined,
        fechaNacimiento: fechaNacimiento || undefined,
        email: email.trim() || undefined,
        telefono: telefono.trim() || undefined,
        observacionesPersona:
          observacionesPersona.trim() || undefined,
        instrumentoPrincipalId:
          instrumentoPrincipalId || undefined,
        segundoInstrumentoId:
          segundoInstrumentoId || undefined,
        agrupacionId: agrupacionId || undefined,
        observacionesAlumno:
          observacionesAlumno.trim() || undefined,
        observacionesPeriodo:
          observacionesPeriodo.trim() || undefined,
      });

      navigate(`/miembros/alumnos/${id}`);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "No se ha podido editar el alumno.",
      );
    } finally {
      setGuardando(false);
    }
  }

  function handleCancelar() {
    if (guardando) {
      return;
    }

    if (id) {
      navigate(`/miembros/alumnos/${id}`);
    } else {
      navigate("/miembros/alumnos");
    }
  }

  const instrumentosAgrupados =
    agruparInstrumentosPorFamiliaYSeccion(instrumentos);

  if (cargando) {
    return (
      <section className="nuevo-alumno-page">
        <div className="nuevo-alumno-header">
          <div className="nuevo-alumno-breadcrumb">
            MIEMBROS UMT / ALUMNOS
          </div>

          <h1>Editar alumno</h1>

          <p>Cargando los datos del alumno...</p>
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

          <h1>Editar alumno</h1>

          <p>
            Modifica los datos actuales del alumno. El historial
            de períodos anteriores no se modifica desde esta
            pantalla.
          </p>
        </div>
      </div>

      {error && (
        <div className="nuevo-alumno-error" role="alert">
          <strong>No se ha podido editar el alumno</strong>
          <span>{error}</span>
        </div>
      )}

      {errorCatalogos && (
        <div className="nuevo-alumno-error" role="alert">
          <strong>
            No se han podido cargar los catálogos
          </strong>
          <span>{errorCatalogos}</span>
        </div>
      )}

      <form
        className="nuevo-alumno-form"
        onSubmit={handleSubmit}
      >
        <fieldset
          disabled={guardando}
          className="nuevo-alumno-section"
        >
          <legend>Datos personales</legend>

          <div className="nuevo-alumno-section-description">
            Información básica de la persona.
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
                onChange={(event) =>
                  setNombre(event.target.value)
                }
                required
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
                onChange={(event) =>
                  setApellidos(event.target.value)
                }
                required
              />
            </div>

            <div className="nuevo-alumno-field">
              <label htmlFor="dni">
                DNI / documento
              </label>

              <input
                id="dni"
                name="dni"
                type="text"
                value={dni}
                onChange={(event) =>
                  setDni(event.target.value)
                }
              />
            </div>

            <div className="nuevo-alumno-field">
              <label htmlFor="fechaNacimiento">
                Fecha de nacimiento
              </label>

              <input
                id="fechaNacimiento"
                name="fechaNacimiento"
                type="date"
                value={fechaNacimiento}
                onChange={(event) =>
                  setFechaNacimiento(event.target.value)
                }
              />
            </div>

            <div className="nuevo-alumno-field">
              <label htmlFor="email">Email</label>

              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
              />
            </div>

            <div className="nuevo-alumno-field">
              <label htmlFor="telefono">
                Teléfono
              </label>

              <input
                id="telefono"
                name="telefono"
                type="tel"
                value={telefono}
                onChange={(event) =>
                  setTelefono(event.target.value)
                }
              />
            </div>

            <div className="nuevo-alumno-field nuevo-alumno-field-full">
              <label htmlFor="observacionesPersona">
                Observaciones de Persona
              </label>

              <textarea
                id="observacionesPersona"
                name="observacionesPersona"
                value={observacionesPersona}
                onChange={(event) =>
                  setObservacionesPersona(
                    event.target.value,
                  )
                }
                rows={4}
              />
            </div>
          </div>
        </fieldset>

        <fieldset
          disabled={guardando || cargandoCatalogos}
          className="nuevo-alumno-section"
        >
          <legend>Perfil del alumno</legend>

          <div className="nuevo-alumno-section-description">
            Modifica el instrumento, el segundo instrumento y
            la agrupación actual del alumno.
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
                  setInstrumentoPrincipalId(
                    event.target.value,
                  )
                }
              >
                <option value="">Sin instrumento</option>

                {instrumentosAgrupados.map((familia) => (
                  <optgroup
                    key={familia.familia}
                    label={familia.familia}
                  >
                    {familia.secciones.flatMap(
                      (seccion) => [
                        <option
                          key={`${familia.familia}-${seccion.seccion}-separador`}
                          disabled
                        >
                          — {seccion.seccion} —
                        </option>,

                        ...seccion.instrumentos.map(
                          (instrumento) => (
                            <option
                              key={instrumento.id}
                              value={instrumento.id}
                            >
                              {instrumento.nombre}
                            </option>
                          ),
                        ),
                      ],
                    )}
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
                  setSegundoInstrumentoId(
                    event.target.value,
                  )
                }
              >
                <option value="">
                  Sin segundo instrumento
                </option>

                {instrumentosAgrupados.map((familia) => (
                  <optgroup
                    key={familia.familia}
                    label={familia.familia}
                  >
                    {familia.secciones.flatMap(
                      (seccion) => [
                        <option
                          key={`${familia.familia}-${seccion.seccion}-separador`}
                          disabled
                        >
                          — {seccion.seccion} —
                        </option>,

                        ...seccion.instrumentos.map(
                          (instrumento) => (
                            <option
                              key={instrumento.id}
                              value={instrumento.id}
                            >
                              {instrumento.nombre}
                            </option>
                          ),
                        ),
                      ],
                    )}
                  </optgroup>
                ))}
              </select>
            </div>

            <div className="nuevo-alumno-field">
              <label htmlFor="agrupacion">
                Agrupación
              </label>

              <select
                id="agrupacion"
                value={agrupacionId}
                onChange={(event) =>
                  setAgrupacionId(event.target.value)
                }
              >
                <option value="">
                  Sin agrupación
                </option>

                {agrupaciones.map((agrupacion) => (
                  <option
                    key={agrupacion.id}
                    value={agrupacion.id}
                  >
                    {agrupacion.nombre}
                  </option>
                ))}
              </select>
            </div>

            <div className="nuevo-alumno-field nuevo-alumno-field-full">
              <label htmlFor="observacionesAlumno">
                Observaciones del alumno
              </label>

              <textarea
                id="observacionesAlumno"
                name="observacionesAlumno"
                value={observacionesAlumno}
                onChange={(event) =>
                  setObservacionesAlumno(event.target.value)
                }
                rows={4}
              />
            </div>
          </div>
        </fieldset>

        <fieldset
          disabled={guardando}
          className="nuevo-alumno-section"
        >
          <legend>Datos del período actual</legend>

          <div className="nuevo-alumno-section-description">
            Consulta la fecha de inicio del período actual y
            modifica únicamente sus observaciones. El
            historial de períodos anteriores permanece intacto.
          </div>

          <div className="nuevo-alumno-fields">
            <div className="nuevo-alumno-field nuevo-alumno-field-small">
              <label htmlFor="fechaInicio">
                Fecha de inicio
              </label>

              <input
                id="fechaInicio"
                name="fechaInicio"
                type="date"
                value={fechaInicio}
                readOnly
              />
            </div>

            <div className="nuevo-alumno-field nuevo-alumno-field-full">
              <label htmlFor="observacionesPeriodo">
                Observaciones del período
              </label>

              <textarea
                id="observacionesPeriodo"
                name="observacionesPeriodo"
                value={observacionesPeriodo}
                onChange={(event) =>
                  setObservacionesPeriodo(
                    event.target.value,
                  )
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
            disabled={
              guardando || cargandoCatalogos
            }
          >
            {guardando
              ? "Guardando..."
              : "Guardar cambios"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default EditarAlumno;
