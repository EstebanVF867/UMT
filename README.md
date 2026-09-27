# UMT-ERP V2

Sistema de gestión integral para la **Unión Musical de Tenorio (UMT)**.

UMT-ERP V2 se está desarrollando desde cero con una arquitectura moderna, modular y preparada para crecer hacia la gestión completa de la asociación.

> **Estado:** Desarrollo activo  
> **Versión:** V2  
> **Base de datos:** MariaDB  
> **Plataforma:** Windows  
> **Repositorio local:** `C:\Users\Esteb\Desktop\UMT-ERP`

---

## 📋 Índice

- [Objetivo del proyecto](#-objetivo-del-proyecto)
- [Arquitectura](#-arquitectura)
- [Tecnologías](#-tecnologías)
- [Entorno actual](#-entorno-actual)
- [Principios de desarrollo](#-principios-de-desarrollo)
- [Base de datos](#-base-de-datos)
- [Modelo funcional de personas](#-modelo-funcional-de-personas)
- [Roles](#-roles)
- [Autenticación](#-autenticación)
- [Estructura funcional](#-estructura-funcional-del-erp)
- [Miembros UMT](#-módulo-miembros-umt)
- [Músicos](#-músicos)
- [Alumnos](#-alumnos)
- [Profesores](#-profesores)
- [Director](#-director)
- [Períodos de actividad](#-períodos-de-actividad)
- [Estado activo/inactivo](#-estado-activo--inactivo)
- [Agrupaciones](#-agrupaciones)
- [Instrumentos](#-instrumentos)
- [Aulas](#-aulas)
- [Asistencia](#-asistencia)
- [Frontend](#-frontend)
- [Backend](#-backend)
- [Validación](#-validación)
- [Testing](#-testing)
- [Migraciones](#-migraciones)
- [Seguridad](#-seguridad)
- [Auditoría](#-auditoría)
- [Nextcloud](#-nextcloud)
- [Organización del desarrollo](#-organización-del-desarrollo)
- [Forma de trabajo](#-forma-de-trabajo)
- [Estado actual](#-estado-actual-del-proyecto)
- [Decisiones arquitectónicas](#-principales-decisiones-arquitectónicas)
- [Objetivo a largo plazo](#-objetivo-de-arquitectura-a-largo-plazo)

---

## 🎯 Objetivo del proyecto

UMT-ERP tiene como objetivo centralizar en una única aplicación la gestión administrativa, económica y organizativa de la Unión Musical de Tenorio.

El sistema debe permitir gestionar, entre otras áreas:

- Personas y miembros
- Músicos
- Alumnos
- Profesores
- Director
- Agrupaciones
- Instrumentos
- Cuotas
- Recursos humanos
- Contabilidad
- Bancos y finanzas
- Proveedores
- Clientes y contrataciones
- Facturación
- Cobros y pagos
- Asistencia
- Nextcloud
- Auditoría
- Configuración

El diseño se está realizando pensando en que el ERP sea la **fuente principal de información administrativa de la UMT**, manteniendo el historial y evitando duplicidades.

---

## 🏗️ Arquitectura

El proyecto utiliza una arquitectura de tipo **monorepo**, separando frontend, backend y paquetes compartidos.

```text
UMT-ERP/
│
├── apps/
│   ├── api/          # Backend REST
│   └── web/          # Frontend
│
├── packages/         # Código compartido
│
├── package.json
├── package-lock.json
└── ...
```

Arquitectura general:

```text
┌──────────────────────────────┐
│          Frontend            │
│       React + TypeScript     │
│          apps/web            │
└──────────────┬───────────────┘
               │ HTTP / API
               ▼
┌──────────────────────────────┐
│           Backend            │
│ Fastify + TypeScript + Zod   │
│          apps/api            │
└──────────────┬───────────────┘
               │ Prisma
               ▼
┌──────────────────────────────┐
│           MariaDB            │
│      Base de datos ERP       │
└──────────────────────────────┘
```

---

## 🛠️ Tecnologías

### Frontend

- React
- TypeScript
- Vite
- ESLint

Ubicación:

```text
apps/web
```

### Backend

- Node.js
- TypeScript
- Fastify
- Zod
- tsx
- Vitest

Ubicación:

```text
apps/api
```

### ORM

- Prisma 7

Configuración actual:

```text
schema.prisma
prisma7.config.ts
```

### Base de datos

**MariaDB**

> MariaDB es el motor de base de datos definitivo seleccionado para el proyecto.

---

## 💻 Entorno actual

```text
Windows
Node.js 24.20.0
npm 11.19.0
Git 2.55.0
MariaDB 13.0.2
Prisma 7.10
```

Docker no forma parte actualmente del entorno de desarrollo.

---

## 🧭 Principios de desarrollo

El proyecto sigue criterios de ingeniería orientados a mantener un código sólido y mantenible.

### Código de producción

El código debe incorporar:

- Tipado
- Validaciones
- Manejo de errores
- Separación de responsabilidades
- Validación de datos de entrada
- Código mantenible
- Tests automatizados

### Principios

Se aplican, según corresponda:

- SOLID
- DRY
- KISS
- Separación de responsabilidades
- Modularidad
- Seguridad por defecto

### Desarrollo incremental

Regla principal:

> **Una modificación → una validación.**

No se deben acumular cambios grandes sin comprobar previamente que el cambio anterior funciona.

---

## 🗄️ Base de datos

MariaDB es el motor definitivo de la aplicación.

Prisma se utiliza como ORM y como herramienta para gestionar el esquema y las migraciones.

Migraciones relevantes:

```text
20260920220809_init
20260922203000_add_role_activity_periods
20260924213246_catalogo_instrumentos
```

### Reglas

- No utilizar `prisma db pull` como procedimiento normal.
- No ejecutar `migrate dev` a ciegas.
- Revisar las migraciones antes de aplicarlas.
- Mantener el historial de migraciones.
- Validar los cambios mediante tests.
- Evitar modificaciones destructivas sin comprobar previamente sus consecuencias.

---

## 👤 Modelo funcional de personas

La entidad conceptual central del sistema es:

**Persona**

Una misma persona puede participar en diferentes ámbitos de la UMT.

```text
Persona
   │
   ├── Músico
   ├── Alumno
   ├── Profesor
   └── Director
```

Esto evita crear personas duplicadas.

La creación desde un módulo debe:

1. Buscar si la Persona ya existe.
2. Reutilizarla si existe.
3. Crear la Persona si no existe.
4. Asignar la función correspondiente.
5. Crear el primer período de actividad.
6. Ejecutar la operación dentro de una transacción.

---

## 👥 Roles

Roles funcionales definidos:

```text
ADMINISTRADOR
ALUMNO
DIRECTIVA
DIRECTOR
MUSICO
PROFESOR
```

Los roles representan la función de una persona dentro de la organización.

No existe una pantalla independiente para asignar manualmente roles.

La creación desde cada módulo determina la función correspondiente.

Ejemplo:

```text
+ Nuevo músico
       ↓
Persona
       ↓
Músico
       ↓
Período de actividad
```

---

## 🔐 Autenticación

El sistema dispone actualmente de autenticación mediante sesión.

Endpoints principales:

```text
POST /auth/login
GET  /auth/me
POST /auth/logout
```

Cookie de sesión:

```text
umt_session
```

Las contraseñas se protegen utilizando:

```text
Argon2
```

La autenticación ha sido probada dentro de la API.

---

## 🧭 Estructura funcional del ERP

Menú aprobado:

```text
Dashboard

Miembros UMT
├── Músicos
├── Alumnos
└── Director

Profesores

Cuotas

RRHH
├── Contratos
├── Nóminas
├── Asistencia
└── Reparto

Contabilidad

Bancos y Finanzas

Proveedores
├── Facturas Proveedores
└── Pagos

Clientes / Contrataciones
├── Facturas Clientes
└── Cobros

Nextcloud

Auditoría

Configuración
```

Las secciones principales se muestran diferenciadas de sus opciones hijas.

Las opciones hijas aparecen indentadas.

Las secciones que contienen subsecciones pueden expandirse.

La opción activa queda visualmente resaltada.

---

# 👨‍👩‍👧‍👦 Módulo Miembros UMT

El módulo de miembros está construido alrededor de la entidad central `Persona`.

Tipos principales:

- Músicos
- Alumnos
- Profesores
- Director

Cada tipo mantiene su propio período de actividad.

---

## 🎺 Músicos

El backend dispone actualmente de funcionalidades para:

- Crear músicos
- Listar músicos
- Crear períodos
- Cerrar períodos
- Mantener el historial

Archivos principales:

```text
apps/api/src/lib/persona.ts
apps/api/src/lib/miembros.ts
apps/api/src/lib/crear-musico.ts
apps/api/src/lib/periodos-musico.ts
```

Endpoints:

```text
GET  /miembros/musicos
POST /miembros/musicos
```

Información específica del músico:

- Instrumento principal
- Segundo instrumento opcional
- Agrupación
- Período de actividad

El instrumento principal es obligatorio.

---

## 🎓 Alumnos

Los alumnos utilizan también la entidad central `Persona`.

Pueden disponer de:

- Instrumento
- Agrupación, cuando corresponda
- Aula
- Horario
- Profesor
- Período de actividad

La agrupación no tiene la misma obligatoriedad que en el caso del músico.

La asistencia a clases no se gestionará como un sistema de fichajes dentro del ERP.

---

## 👨‍🏫 Profesores

Los profesores disponen de una función específica y de sus correspondientes períodos de actividad.

La estructura está diseñada para conservar el historial de los períodos durante los cuales una persona ejerce como profesor.

---

## 🎼 Director

El Director se gestiona como una función específica de una Persona.

También utiliza períodos de actividad para conservar el historial.

El desarrollo del módulo de Director se encuentra actualmente en curso.

---

## 📅 Períodos de actividad

El sistema utiliza períodos para representar la relación de una Persona con una determinada función a lo largo del tiempo.

Estructuras existentes:

```text
MusicoPeriodo
AlumnoPeriodo
ProfesorPeriodo
DirectorPeriodo
```

Objetivo:

> Evitar sobrescribir información histórica.

Ejemplo:

```text
Persona
│
├── Músico
│    ├── Período 2024-2025
│    ├── Período 2025-2026
│    └── Período actual
│
└── Alumno
     └── Período actual
```

Los períodos no deben solaparse.

---

## 🔄 Estado Activo / Inactivo

El estado funcional se basa en:

```text
ACTIVO
INACTIVO
```

La interfaz debe mantener un diseño visual coherente con el utilizado actualmente en **Agrupaciones**.

La baja debe conservar el historial.

La eliminación física de una persona solo podrá plantearse después de un período de inactividad configurable y mediante confirmación administrativa.

---

## 🎺 Agrupaciones

Las agrupaciones forman parte de la configuración del sistema.

Agrupaciones definidas actualmente:

```text
Banda UMT
Banda Escuela
```

La denominación de la agrupación principal es **Banda UMT**.

Las agrupaciones se reutilizarán posteriormente desde los módulos de miembros.

---

## 🎻 Instrumentos

Existe un catálogo de instrumentos en:

```text
Configuración → Instrumentos
```

Estructura conceptual:

```text
Viento
├── Madera
└── Metal

Cuerda
├── Pulsada
├── Frotada
└── Percutida

Percusión
```

El instrumento no dispone de un campo de estado propio.

El catálogo está diseñado para ser reutilizado desde los diferentes módulos que necesitan seleccionar instrumentos.

---

## 🏫 Aulas

Las aulas pertenecen a la configuración del ERP.

Se reutilizan para la gestión de clases de alumnos.

Es importante diferenciar:

```text
Aula
```

de:

```text
Lugar de actividad
```

No representan necesariamente el mismo concepto.

---

## ⏱️ Asistencia

La asistencia se diseñará teniendo en cuenta la futura integración con Nextcloud.

Los registros podrán contener:

```text
Músico
Actividad
Fecha
Entrada
Salida
```

La identificación del músico se realizará mediante su identificador del ERP.

El método de fichaje será común para los registros importados.

Las correcciones manuales deberán quedar diferenciadas y trazables.

Una llegada tarde significa que el músico llegó después de la hora prevista.

Las ausencias parciales durante una actividad podrán reflejarse mediante observaciones cuando corresponda.

---

# 🎨 Frontend

Ubicación:

```text
apps/web
```

Tecnologías:

```text
React
TypeScript
Vite
ESLint
```

La interfaz sigue una estructura modular basada en las áreas funcionales del ERP.

Se prioriza:

- Navegación clara
- Consistencia visual
- Formularios reutilizables
- Estados Activo/Inactivo homogéneos
- Tablas de datos
- Filtros
- Validación de formularios
- Mensajes de error claros

Logo oficial:

```text
apps/web/src/assets/logo-umt.png
```

---

# ⚙️ Backend

Ubicación:

```text
apps/api
```

Tecnologías:

```text
Fastify
TypeScript
Zod
Prisma
Vitest
```

La lógica de negocio se separa en módulos específicos.

Ejemplo:

```text
src/
├── lib/
│   ├── persona.ts
│   ├── miembros.ts
│   ├── crear-musico.ts
│   ├── periodos-musico.ts
│   └── ...
│
├── routes-miembros.ts
└── ...
```

La lógica de negocio no debe concentrarse directamente en las rutas HTTP.

---

# ✅ Validación

Zod se utiliza para validar los datos recibidos por la API.

Las reglas de negocio importantes deben validarse en backend aunque exista validación en frontend.

Esto evita depender exclusivamente de la interfaz para garantizar la integridad de los datos.

---

# 🧪 Testing

El proyecto utiliza:

```text
Vitest
```

Los tests cubren diferentes partes de la lógica del backend.

Ejemplos:

```text
crear-musico.test.ts
listar-musicos.test.ts
periodos-director.test.ts
```

Ejecutar tests:

```powershell
npm test -- --run
```

Estado reciente validado:

```text
11 tests passed
```

Los tests forman parte obligatoria del flujo de desarrollo.

---

# 🔧 Configuración de Vitest

Vitest está configurado para excluir contenido que no corresponde a los tests:

```text
node_modules/**
dist/**
```

Esto evita falsos problemas durante la ejecución de la suite.

---

# 🔄 Migraciones

Migraciones registradas actualmente:

```text
20260920220809_init
20260922203000_add_role_activity_periods
20260924213246_catalogo_instrumentos
```

Cada modificación estructural importante de la base de datos debe quedar reflejada mediante una migración.

---

# 🔒 Seguridad

El ERP se desarrolla bajo el principio de **seguridad por defecto**.

Medidas actuales o previstas:

- Contraseñas protegidas mediante Argon2
- Sesiones mediante cookie
- Validación de entradas con Zod
- Separación entre frontend y backend
- Control de acceso
- No confiar en datos enviados por el cliente
- Consultas parametrizadas mediante Prisma
- Trazabilidad de modificaciones importantes
- Auditoría de operaciones administrativas

---

# 📋 Auditoría

El ERP contará con un módulo específico:

```text
Auditoría
```

Su objetivo será proporcionar trazabilidad sobre las operaciones relevantes.

Según el tipo de operación deberá poder determinarse:

- Quién realizó la acción
- Qué acción realizó
- Cuándo la realizó
- Sobre qué entidad
- Qué información relevante fue modificada

---

# ☁️ Nextcloud

Nextcloud forma parte de la arquitectura funcional prevista.

Su integración se utilizará principalmente para determinadas funciones documentales y de asistencia.

Debe mantenerse una separación clara entre:

```text
ERP
```

y:

```text
Nextcloud
```

El ERP continuará siendo responsable de sus datos administrativos y de negocio.

---

# 🔄 Organización del desarrollo

Flujo recomendado:

```text
1. Definir funcionalidad
        ↓
2. Revisar modelo funcional
        ↓
3. Revisar base de datos
        ↓
4. Implementar backend
        ↓
5. Crear / actualizar tests
        ↓
6. Ejecutar tests
        ↓
7. Implementar frontend
        ↓
8. Validar interfaz
        ↓
9. Corregir problemas
        ↓
10. Continuar con la siguiente funcionalidad
```

No se debe avanzar sobre una funcionalidad que todavía tenga errores conocidos.

---

# 💻 Forma de trabajo

El desarrollo se realiza principalmente mediante **PowerShell en Windows**.

No se debe asumir el uso de VS Code.

Ejemplo:

```powershell
cd C:\Users\Esteb\Desktop\UMT-ERP
```

Backend:

```powershell
cd C:\Users\Esteb\Desktop\UMT-ERP\apps\api
```

Se evita:

- Bash
- Comandos destructivos innecesarios
- Reemplazos globales sin revisar
- Modificaciones masivas sin validación
- Cambios basados en suposiciones sobre los archivos existentes

---

# 🔁 Regla de modificación y validación

Regla fundamental:

> **Una modificación → una validación.**

Ciclo:

```text
Modificar
   ↓
Comprobar
   ↓
Testear
   ↓
Confirmar
   ↓
Continuar
```

Si una comprobación falla:

```text
DETENER
   ↓
Analizar
   ↓
Corregir
   ↓
Volver a validar
```

No se deben acumular errores pendientes.

---

# 📊 Estado actual del proyecto

## ✅ Desarrollado / validado

- Monorepo
- Frontend React + TypeScript
- Backend Fastify + TypeScript
- Prisma
- MariaDB
- Autenticación
- Sesiones
- Usuario administrador
- Modelo central Persona
- Roles funcionales
- Períodos de actividad
- Módulo inicial de músicos
- Creación de músicos
- Listado de músicos
- Gestión de períodos de músicos
- Catálogo de instrumentos
- Base del módulo de alumnos
- Base del módulo de profesores
- Base del módulo de Director
- Configuración de Vitest
- Tests automatizados del backend

## 🚧 En desarrollo

- Módulo de Director
- Módulos de miembros
- Frontend de miembros
- Agrupaciones
- Integración completa entre catálogos y miembros
- Refinamiento funcional del expediente de cada miembro

## 📌 Pendiente

- Cuotas
- RRHH
- Contratos
- Nóminas
- Asistencia completa
- Reparto
- Contabilidad
- Bancos y Finanzas
- Proveedores
- Facturas de proveedores
- Pagos
- Clientes
- Contrataciones
- Facturas de clientes
- Cobros
- Nextcloud
- Auditoría completa
- Configuración avanzada

---

# 🏛️ Principales decisiones arquitectónicas

| Área | Decisión |
|---|---|
| Base de datos | MariaDB |
| ORM | Prisma |
| Backend | Fastify + TypeScript |
| Frontend | React + TypeScript + Vite |
| Validación | Zod |
| Tests | Vitest |
| Contraseñas | Argon2 |
| Sesiones | Cookie `umt_session` |
| Modelo de personas | `Persona` como entidad central |
| Arquitectura | Monorepo |
| Desarrollo | Incremental y validado |

---

# 🚀 Objetivo de arquitectura a largo plazo

La arquitectura debe permitir que el ERP crezca sin tener que rehacer los módulos ya desarrollados.

Modelo conceptual:

```text
                    ┌─────────────┐
                    │   Persona   │
                    └──────┬──────┘
                           │
       ┌───────────┬───────┼────────┬───────────┐
       ▼           ▼       ▼        ▼           ▼
    Músico      Alumno  Profesor Director    Directiva
       │           │       │        │
       └───────────┴───────┴────────┴───────────┘
                           │
                           ▼
                  Gestión administrativa
                           │
       ┌───────────┬───────┼────────┬───────────┐
       ▼           ▼       ▼        ▼           ▼
     Cuotas      RRHH  Contabilidad Bancos    Facturación
```

El objetivo final es disponer de un ERP coherente, trazable y mantenible donde los diferentes módulos sean partes de un mismo sistema y no aplicaciones aisladas.

---

# 📅 Estado del README

Este documento representa el estado conocido del proyecto a:

**27 de septiembre de 2026**

Debe actualizarse cuando se produzcan cambios arquitectónicos o funcionales consolidados.

La aparición de una funcionalidad en este README **no implica por sí sola que esté terminada**. Su estado real debe estar respaldado por:

- Código implementado
- Tests
- Validación funcional

---

## 🎵 UMT-ERP V2

**Unión Musical de Tenorio**

`MariaDB` · `Fastify` · `React` · `TypeScript` · `Prisma` · `Vitest`

---
