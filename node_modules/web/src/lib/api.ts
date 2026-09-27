export interface LoginResponse {
  usuario: {
    id: string;
    personaId: string;
    username: string;
  };
  sesion: {
    id: string;
    expiresAt: string;
  };
}
export interface SesionUsuario {
  id: string;
  personaId: string;
  username: string;
}

export interface MusicoListado {
  id: string;
  personaId: string;
  nombre: string;
  apellidos: string;
  dni: string | null;
  activo: boolean;
  fechaAlta: string;
  instrumentoPrincipal: {
    id: string;
    nombre: string;
  } | null;
  segundoInstrumento: {
    id: string;
    nombre: string;
  } | null;
  agrupacion: {
    id: string;
    nombre: string;
  } | null;
  periodoActual: {
    id: string;
    fechaInicio: string;
    fechaFin: string | null;
    motivoBaja: string | null;
  } | null;
}
export interface AlumnoListado {
  id: string;
  personaId: string;
  nombre: string;
  apellidos: string;
  dni: string | null;
  activo: boolean;
  fechaAlta: string;
  instrumentoPrincipal: {
    id: string;
    nombre: string;
  } | null;
  segundoInstrumento: {
    id: string;
    nombre: string;
  } | null;
  agrupacion: {
    id: string;
    nombre: string;
  } | null;
  periodoActual: {
    id: string;
    fechaInicio: string;
    fechaFin: string | null;
    motivoBaja: string | null;
  } | null;
}
export interface MusicoExpediente {
  id: string;
  personaId: string;
  persona: {
    id: string;
    nombre: string;
    apellidos: string;
    dni: string | null;
    fechaNacimiento: string | null;
    email: string | null;
    telefono: string | null;
    observaciones: string | null;
    activo: boolean;
    fechaBaja: string | null;
  };
  musico: {
    fechaAlta: string;
    fechaBaja: string | null;
    activo: boolean;
    observaciones: string | null;
  };
  periodos: {
    id: string;
    fechaInicio: string;
    fechaFin: string | null;
    motivoBaja: string | null;
    observaciones: string | null;
  }[];
  instrumentos: {
    id: string;
    principal: boolean;
    fechaInicio: string;
    fechaFin: string | null;
    observaciones: string | null;
    instrumento: {
      id: string;
      nombre: string;
    };
  }[];
  agrupaciones: {
    id: string;
    fechaAlta: string;
    fechaBaja: string | null;
    activo: boolean;
    observaciones: string | null;
    agrupacion: {
      id: string;
      nombre: string;
    };
  }[];
  roles: {
    id: string;
    codigo: string;
    nombre: string;
    descripcion: string | null;
    activo: boolean;
  }[];
}
export interface ConfiguracionAgrupacion {
  id: string;
  nombre: string;
  descripcion: string | null;
  activo: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ConfiguracionAula {
  id: string;
  nombre: string;
  descripcion: string | null;
  capacidad: number | null;
  activo: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface PersonaDisponibleParaMusico {
  id: string;
  nombre: string;
  apellidos: string;
  dni: string | null;
  email: string | null;
  telefono: string | null;
  activo: boolean;
  roles: {
    codigo: string;
    nombre: string;
  }[];
}
export interface CrearAlumnoInput {
  personaId?: string;
  instrumentoPrincipalId?: string;
  segundoInstrumentoId?: string;
  agrupacionId?: string;
  nombre: string;
  apellidos: string;
  dni?: string;
  fechaNacimiento?: string;
  email?: string;
  telefono?: string;
  observacionesPersona?: string;
  fechaInicio: string;
  observacionesPeriodo?: string;
  observacionesAlumno?: string;
}
export interface CrearMusicoInput {
  personaId?: string;
  instrumentoPrincipalId?: string;
  segundoInstrumentoId?: string;
  agrupacionId?: string;  
  nombre: string;
  apellidos: string;
  dni?: string;
  fechaNacimiento?: string;
  email?: string;
  telefono?: string;
  observacionesPersona?: string;
  fechaInicio: string;
  observacionesPeriodo?: string;
  observacionesMusico?: string;
}
export interface EditarMusicoInput {
  nombre: string;
  apellidos: string;
  dni?: string | null;
  fechaNacimiento?: string | null;
  email?: string | null;
  telefono?: string | null;
  observacionesPersona?: string | null;

  instrumentoPrincipalId?: string | null;
  segundoInstrumentoId?: string | null;
  agrupacionId?: string | null;

  observacionesMusico?: string | null;
  observacionesPeriodo?: string | null;
}

export async function iniciarSesion(
  username: string,
  password: string,
): Promise<LoginResponse> {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se ha podido iniciar sesión",
    );
  }

  return data as LoginResponse;
}

export async function obtenerSesion(): Promise<SesionUsuario | null> {
  const response = await fetch("/api/auth/me", {
    method: "GET",
    credentials: "include",
  });

  if (response.status === 401) {
    return null;
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se ha podido comprobar la sesión",
    );
  }

  return data.usuario as SesionUsuario;
}

export async function cerrarSesion(): Promise<void> {
  const response = await fetch("/api/auth/logout", {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    const data = await response.json().catch(() => null);

    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se ha podido cerrar la sesión",
    );
  }
}

export interface FiltrosListarMusicos {
  estado?: "ACTIVO" | "BAJA" | "TODOS";
  instrumentoId?: string;
  agrupacionId?: string;
  busqueda?: string;
}

export async function listarMusicos(
  filtros: FiltrosListarMusicos = {},
): Promise<MusicoListado[]> {
  const params = new URLSearchParams();

  if (filtros.estado && filtros.estado !== "TODOS") {
    params.set("estado", filtros.estado);
  }

  if (filtros.instrumentoId) {
    params.set("instrumentoId", filtros.instrumentoId);
  }

  if (filtros.agrupacionId) {
    params.set("agrupacionId", filtros.agrupacionId);
  }

  if (filtros.busqueda?.trim()) {
    params.set("busqueda", filtros.busqueda.trim());
  }

  const query = params.toString();

  const response = await fetch(
    `/api/miembros/musicos${query ? `?${query}` : ""}`,
    {
      method: "GET",
      credentials: "include",
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se ha podido cargar el listado de músicos",
    );
  }

  return data.musicos as MusicoListado[];
}

export interface FiltrosListarAlumnos {
  estado?: "ACTIVO" | "BAJA" | "TODOS";
  instrumentoId?: string;
  agrupacionId?: string;
  busqueda?: string;
}

export async function listarAlumnos(
  filtros: FiltrosListarAlumnos = {},
): Promise<AlumnoListado[]> {
  const params = new URLSearchParams();

  if (filtros.estado && filtros.estado !== "TODOS") {
    params.set("estado", filtros.estado);
  }

  if (filtros.instrumentoId) {
    params.set("instrumentoId", filtros.instrumentoId);
  }

  if (filtros.agrupacionId) {
    params.set("agrupacionId", filtros.agrupacionId);
  }

  if (filtros.busqueda?.trim()) {
    params.set("busqueda", filtros.busqueda.trim());
  }

  const query = params.toString();

  const response = await fetch(
    `/api/miembros/alumnos${query ? `?${query}` : ""}`,
    {
      method: "GET",
      credentials: "include",
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se ha podido cargar el listado de alumnos.",
    );
  }

  return data.alumnos as AlumnoListado[];
}
export async function listarConfiguracionAgrupaciones(): Promise<
  ConfiguracionAgrupacion[]
> {
  const response = await fetch("/api/configuracion/agrupaciones", {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se han podido cargar las agrupaciones.",
    );
  }

  return data.agrupaciones as ConfiguracionAgrupacion[];
}

export async function crearConfiguracionAgrupacion(input: {
  nombre: string;
  descripcion?: string;
}): Promise<ConfiguracionAgrupacion> {
  const response = await fetch("/api/configuracion/agrupaciones", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(input),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se ha podido crear la agrupación.",
    );
  }

  return data.agrupacion as ConfiguracionAgrupacion;
}

export async function editarConfiguracionAgrupacion(
  id: string,
  input: {
    nombre: string;
    descripcion?: string;
    activo: boolean;
  },
): Promise<ConfiguracionAgrupacion> {
  const response = await fetch(`/api/configuracion/agrupaciones/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(input),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se ha podido editar la agrupación.",
    );
  }

  return data.agrupacion as ConfiguracionAgrupacion;
}

export async function listarConfiguracionAulas(): Promise<
  ConfiguracionAula[]
> {
  const response = await fetch("/api/configuracion/aulas", {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se han podido cargar las aulas.",
    );
  }

  return data.aulas as ConfiguracionAula[];
}

export async function crearConfiguracionAula(input: {
  nombre: string;
  descripcion?: string;
  capacidad?: number;
}): Promise<ConfiguracionAula> {
  const response = await fetch("/api/configuracion/aulas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(input),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se ha podido crear el aula.",
    );
  }

  return data.aula as ConfiguracionAula;
}

export async function editarConfiguracionAula(
  id: string,
  input: {
    nombre: string;
    descripcion?: string;
    capacidad?: number;
    activo: boolean;
  },
): Promise<ConfiguracionAula> {
  const response = await fetch(`/api/configuracion/aulas/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(input),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se ha podido editar el aula.",
    );
  }

  return data.aula as ConfiguracionAula;
}
export async function obtenerMusico(
  id: string,
): Promise<MusicoExpediente> {
  const response = await fetch(`/api/miembros/musicos/${id}`, {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se ha podido cargar el expediente del músico.",
    );
  }

  return data as MusicoExpediente;
}
export interface AlumnoExpediente {
  id: string;
  personaId: string;
  persona: {
    id: string;
    nombre: string;
    apellidos: string;
    dni: string | null;
    fechaNacimiento: string | null;
    email: string | null;
    telefono: string | null;
    observaciones: string | null;
    activo: boolean;
    fechaBaja: string | null;
  };
  alumno: {
    fechaAlta: string;
    fechaBaja: string | null;
    motivoBaja: string | null;
    activo: boolean;
    observaciones: string | null;
  };
  periodos: {
    id: string;
    fechaInicio: string;
    fechaFin: string | null;
    motivoBaja: string | null;
    observaciones: string | null;
  }[];
  instrumentos: {
    id: string;
    principal: boolean;
    fechaInicio: string;
    fechaFin: string | null;
    observaciones: string | null;
    instrumento: {
      id: string;
      nombre: string;
    };
  }[];
  agrupaciones: {
    id: string;
    fechaAlta: string;
    fechaBaja: string | null;
    activo: boolean;
    observaciones: string | null;
    agrupacion: {
      id: string;
      nombre: string;
    };
  }[];
  roles: {
    id: string;
    codigo: string;
    nombre: string;
    descripcion: string | null;
    activo: boolean;
  }[];
}
export interface PersonaBusqueda {
  id: string;
  nombre: string;
  apellidos: string;
  dni: string | null;
  esMusico: boolean;
}

export async function darDeBajaAlumno(
  alumnoId: string,
  periodoId: string,
  input: {
    fechaFin: string;
    motivoBaja: "BAJA_VOLUNTARIA" | "DEJA_DE_PERTENECER_UMT" | "OTRO";
    observaciones?: string | null;
  },
): Promise<void> {
  const response = await fetch(
    `/api/miembros/alumnos/${alumnoId}/periodos/${periodoId}/cerrar`,
    {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se ha podido dar de baja al alumno.",
    );
  }
}
export async function obtenerAlumno(
  id: string,
): Promise<AlumnoExpediente> {
  const response = await fetch(`/api/miembros/alumnos/${id}`, {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se ha podido cargar el expediente del alumno.",
    );
  }

  return data as AlumnoExpediente;
}
export async function buscarPersonas(
  termino: string,
): Promise<PersonaBusqueda[]> {
  const params = new URLSearchParams({
    q: termino,
  });

  const response = await fetch(
    `/api/miembros/personas/buscar?${params.toString()}`,
    {
      method: "GET",
      credentials: "include",
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se han podido buscar personas",
    );
  }

  return data.personas as PersonaBusqueda[];
}
export async function buscarPersonasDisponiblesParaMusico(
  busqueda: string,
): Promise<PersonaDisponibleParaMusico[]> {
  const params = new URLSearchParams();

  if (busqueda.trim()) {
    params.set("busqueda", busqueda.trim());
  }

  const query = params.toString();

  const response = await fetch(
    `/api/miembros/personas-disponibles-para-musico${
      query ? `?${query}` : ""
    }`,
    {
      method: "GET",
      credentials: "include",
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se han podido buscar personas.",
    );
  }

  return data as PersonaDisponibleParaMusico[];
}

export async function buscarPersonasDisponiblesParaAlumno(
  busqueda: string,
): Promise<PersonaDisponibleParaMusico[]> {
  const params = new URLSearchParams();

  if (busqueda.trim()) {
    params.set("busqueda", busqueda.trim());
  }

  const response = await fetch(
    `/api/miembros/personas-disponibles-para-alumno?${params.toString()}`,
    {
      method: "GET",
      credentials: "include",
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se han podido buscar personas disponibles para alumno.",
    );
  }

  return data as PersonaDisponibleParaMusico[];
}
export interface EditarAlumnoInput {
  nombre: string;
  apellidos: string;
  dni?: string;
  fechaNacimiento?: string;
  email?: string;
  telefono?: string;
  observacionesPersona?: string;
  instrumentoPrincipalId?: string;
  segundoInstrumentoId?: string;
  agrupacionId?: string;
  observacionesAlumno?: string;
  observacionesPeriodo?: string;
}
export async function editarAlumno(
  alumnoId: string,
  input: EditarAlumnoInput,
): Promise<AlumnoListado> {
  const response = await fetch(`/api/miembros/alumnos/${alumnoId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(input),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.error || "No se ha podido editar el alumno.",
    );
  }

  return data as AlumnoListado;
}
export async function crearAlumno(
  input: CrearAlumnoInput,
): Promise<unknown> {
  const response = await fetch("/api/miembros/alumnos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(input),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se ha podido crear el alumno",
    );
  }

  return data.alumno;
}
export async function crearMusico(
  input: CrearMusicoInput,
): Promise<unknown> {
  const response = await fetch("/api/miembros/musicos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(input),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se ha podido crear el músico",
    );
  }

  return data.musico;
}

export async function editarMusico(
  musicoId: string,
  input: EditarMusicoInput,
): Promise<unknown> {
  const response = await fetch(`/api/miembros/musicos/${musicoId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => null);

    throw new Error(
      data?.error || "No se ha podido editar el músico.",
    );
  }

  return response.json();
}export interface ConfiguracionFamilia {
  id: string;
  nombre: string;
  _count: {
    seccion: number;
  };
}

export interface ConfiguracionSeccion {
  id: string;
  nombre: string;
  familiaId: string;
  familia: {
    id: string;
    nombre: string;
  };
  _count: {
    instrumento: number;
  };
}

export interface ConfiguracionInstrumento {
  id: string;
  nombre: string;
  seccionId: string;
  descripcion: string | null;
  activo: boolean;
  seccion: {
    id: string;
    nombre: string;
    familia: {
      id: string;
      nombre: string;
    };
  };
}

export interface CrearSeccionInput {
  nombre: string;
  familiaId: string;
}

export interface CrearFamiliaInput {
  nombre: string;
}

export interface CrearInstrumentoInput {
  nombre: string;
  seccionId: string;
  descripcion?: string;
}

export interface EditarInstrumentoInput {
  nombre: string;
  seccionId: string;
  descripcion?: string;
  activo?: boolean;
}

export async function listarConfiguracionSecciones(): Promise<
  ConfiguracionSeccion[]
> {
  const response = await fetch("/api/configuracion/secciones", {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se han podido cargar las secciones.",
    );
  }

  return data.secciones as ConfiguracionSeccion[];
}

export async function listarConfiguracionFamilias(): Promise<
  ConfiguracionFamilia[]
> {
  const response = await fetch("/api/configuracion/familias", {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se han podido cargar las familias.",
    );
  }

  return data.familias as ConfiguracionFamilia[];
}

export async function listarConfiguracionInstrumentos(): Promise<
  ConfiguracionInstrumento[]
> {
  const response = await fetch("/api/configuracion/instrumentos", {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se han podido cargar los instrumentos.",
    );
  }

  return data.instrumentos as ConfiguracionInstrumento[];
}

export async function crearConfiguracionSeccion(
  input: CrearSeccionInput,
): Promise<ConfiguracionSeccion> {
  const response = await fetch("/api/configuracion/secciones", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(input),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se ha podido crear la sección.",
    );
  }

  return data as ConfiguracionSeccion;
}

export async function crearConfiguracionFamilia(
  input: CrearFamiliaInput,
): Promise<ConfiguracionFamilia> {
  const response = await fetch("/api/configuracion/familias", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(input),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se ha podido crear la familia.",
    );
  }

  return data as ConfiguracionFamilia;
}

export async function crearConfiguracionInstrumento(
  input: CrearInstrumentoInput,
): Promise<ConfiguracionInstrumento> {
  const response = await fetch("/api/configuracion/instrumentos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(input),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se ha podido crear el instrumento.",
    );
  }

  return data as ConfiguracionInstrumento;
}

export async function editarConfiguracionInstrumento(
  id: string,
  input: EditarInstrumentoInput,
): Promise<ConfiguracionInstrumento> {
  const response = await fetch(
    `/api/configuracion/instrumentos/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(input),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se ha podido editar el instrumento.",
    );
  }

  return data as ConfiguracionInstrumento;
}

export interface EditarSeccionInput {
  nombre: string;
  familiaId: string;
}

export interface EditarFamiliaInput {
  nombre: string;
}

export async function editarConfiguracionSeccion(
  id: string,
  input: EditarSeccionInput,
): Promise<ConfiguracionSeccion> {
  const response = await fetch(`/api/configuracion/secciones/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(input),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se ha podido editar la sección.",
    );
  }

  return data as ConfiguracionSeccion;
}

export async function editarConfiguracionFamilia(
  id: string,
  input: EditarFamiliaInput,
): Promise<ConfiguracionFamilia> {
  const response = await fetch(`/api/configuracion/familias/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(input),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se ha podido editar la familia.",
    );
  }

  return data as ConfiguracionFamilia;
}
export type MotivoBajaMusico =
  | "BAJA_VOLUNTARIA"
  | "DEJA_DE_PERTENECER_UMT"
  | "OTRO";

export interface DarDeBajaMusicoInput {
  fechaFin: string;
  motivoBaja: MotivoBajaMusico;
  observaciones?: string | null;
}

export async function darDeBajaMusico(
  musicoId: string,
  periodoId: string,
  input: DarDeBajaMusicoInput,
): Promise<unknown> {
  const response = await fetch(
    `/api/miembros/musicos/${musicoId}/periodos/${periodoId}/cerrar`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(input),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      typeof data?.error === "string"
        ? data.error
        : "No se ha podido dar de baja al músico.",
    );
  }

  return data;
}	















