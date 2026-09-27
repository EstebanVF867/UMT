import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Actuacions
   * const actuacions = await prisma.actuacion.findMany()
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.PrismaClientConstructorArgs<Options>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Actuacions
 * const actuacions = await prisma.actuacion.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://pris.ly/d/raw-queries).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://pris.ly/d/raw-queries).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.actuacion`: Exposes CRUD operations for the **actuacion** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Actuacions
  * const actuacions = await prisma.actuacion.findMany()
  * ```
  */
    get actuacion(): Prisma.actuacionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.actuacionagrupacion`: Exposes CRUD operations for the **actuacionagrupacion** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Actuacionagrupacions
      * const actuacionagrupacions = await prisma.actuacionagrupacion.findMany()
      * ```
      */
    get actuacionagrupacion(): Prisma.actuacionagrupacionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.agrupacion`: Exposes CRUD operations for the **agrupacion** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Agrupacions
      * const agrupacions = await prisma.agrupacion.findMany()
      * ```
      */
    get agrupacion(): Prisma.agrupacionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.alumno`: Exposes CRUD operations for the **alumno** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Alumnos
      * const alumnos = await prisma.alumno.findMany()
      * ```
      */
    get alumno(): Prisma.alumnoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.asiento`: Exposes CRUD operations for the **asiento** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Asientos
      * const asientos = await prisma.asiento.findMany()
      * ```
      */
    get asiento(): Prisma.asientoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.asientomovimiento`: Exposes CRUD operations for the **asientomovimiento** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Asientomovimientos
      * const asientomovimientos = await prisma.asientomovimiento.findMany()
      * ```
      */
    get asientomovimiento(): Prisma.asientomovimientoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.asistencia`: Exposes CRUD operations for the **asistencia** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Asistencias
      * const asistencias = await prisma.asistencia.findMany()
      * ```
      */
    get asistencia(): Prisma.asistenciaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.auditlog`: Exposes CRUD operations for the **auditlog** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Auditlogs
      * const auditlogs = await prisma.auditlog.findMany()
      * ```
      */
    get auditlog(): Prisma.auditlogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.aula`: Exposes CRUD operations for the **aula** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Aulas
      * const aulas = await prisma.aula.findMany()
      * ```
      */
    get aula(): Prisma.aulaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.centroanalitico`: Exposes CRUD operations for the **centroanalitico** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Centroanaliticos
      * const centroanaliticos = await prisma.centroanalitico.findMany()
      * ```
      */
    get centroanalitico(): Prisma.centroanaliticoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.clase`: Exposes CRUD operations for the **clase** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Clases
      * const clases = await prisma.clase.findMany()
      * ```
      */
    get clase(): Prisma.claseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.cliente`: Exposes CRUD operations for the **cliente** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Clientes
      * const clientes = await prisma.cliente.findMany()
      * ```
      */
    get cliente(): Prisma.clienteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.cobro`: Exposes CRUD operations for the **cobro** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Cobros
      * const cobros = await prisma.cobro.findMany()
      * ```
      */
    get cobro(): Prisma.cobroDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.condicioncuota`: Exposes CRUD operations for the **condicioncuota** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Condicioncuotas
      * const condicioncuotas = await prisma.condicioncuota.findMany()
      * ```
      */
    get condicioncuota(): Prisma.condicioncuotaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.contratacion`: Exposes CRUD operations for the **contratacion** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Contratacions
      * const contratacions = await prisma.contratacion.findMany()
      * ```
      */
    get contratacion(): Prisma.contratacionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.contrato`: Exposes CRUD operations for the **contrato** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Contratoes
      * const contratoes = await prisma.contrato.findMany()
      * ```
      */
    get contrato(): Prisma.contratoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.cuentacontable`: Exposes CRUD operations for the **cuentacontable** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Cuentacontables
      * const cuentacontables = await prisma.cuentacontable.findMany()
      * ```
      */
    get cuentacontable(): Prisma.cuentacontableDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.cuentafinanciera`: Exposes CRUD operations for the **cuentafinanciera** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Cuentafinancieras
      * const cuentafinancieras = await prisma.cuentafinanciera.findMany()
      * ```
      */
    get cuentafinanciera(): Prisma.cuentafinancieraDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.cuota`: Exposes CRUD operations for the **cuota** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Cuotas
      * const cuotas = await prisma.cuota.findMany()
      * ```
      */
    get cuota(): Prisma.cuotaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.derechocobro`: Exposes CRUD operations for the **derechocobro** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Derechocobros
      * const derechocobros = await prisma.derechocobro.findMany()
      * ```
      */
    get derechocobro(): Prisma.derechocobroDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.director`: Exposes CRUD operations for the **director** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Directors
      * const directors = await prisma.director.findMany()
      * ```
      */
    get director(): Prisma.directorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.ejercicio`: Exposes CRUD operations for the **ejercicio** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Ejercicios
      * const ejercicios = await prisma.ejercicio.findMany()
      * ```
      */
    get ejercicio(): Prisma.ejercicioDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.facturacliente`: Exposes CRUD operations for the **facturacliente** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Facturaclientes
      * const facturaclientes = await prisma.facturacliente.findMany()
      * ```
      */
    get facturacliente(): Prisma.facturaclienteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.facturaproveedor`: Exposes CRUD operations for the **facturaproveedor** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Facturaproveedors
      * const facturaproveedors = await prisma.facturaproveedor.findMany()
      * ```
      */
    get facturaproveedor(): Prisma.facturaproveedorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.facturarectificativacliente`: Exposes CRUD operations for the **facturarectificativacliente** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Facturarectificativaclientes
      * const facturarectificativaclientes = await prisma.facturarectificativacliente.findMany()
      * ```
      */
    get facturarectificativacliente(): Prisma.facturarectificativaclienteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.facturarectificativaproveedor`: Exposes CRUD operations for the **facturarectificativaproveedor** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Facturarectificativaproveedors
      * const facturarectificativaproveedors = await prisma.facturarectificativaproveedor.findMany()
      * ```
      */
    get facturarectificativaproveedor(): Prisma.facturarectificativaproveedorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.familia`: Exposes CRUD operations for the **familia** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Familias
      * const familias = await prisma.familia.findMany()
      * ```
      */
    get familia(): Prisma.familiaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.seccion`: Exposes CRUD operations for the **seccion** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Seccions
      * const seccions = await prisma.seccion.findMany()
      * ```
      */
    get seccion(): Prisma.seccionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.instrumento`: Exposes CRUD operations for the **instrumento** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Instrumentos
      * const instrumentos = await prisma.instrumento.findMany()
      * ```
      */
    get instrumento(): Prisma.instrumentoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.integracionnextcloud`: Exposes CRUD operations for the **integracionnextcloud** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Integracionnextclouds
      * const integracionnextclouds = await prisma.integracionnextcloud.findMany()
      * ```
      */
    get integracionnextcloud(): Prisma.integracionnextcloudDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.lineaasiento`: Exposes CRUD operations for the **lineaasiento** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Lineaasientos
      * const lineaasientos = await prisma.lineaasiento.findMany()
      * ```
      */
    get lineaasiento(): Prisma.lineaasientoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.lineanomina`: Exposes CRUD operations for the **lineanomina** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Lineanominas
      * const lineanominas = await prisma.lineanomina.findMany()
      * ```
      */
    get lineanomina(): Prisma.lineanominaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.lineareparto`: Exposes CRUD operations for the **lineareparto** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Linearepartos
      * const linearepartos = await prisma.lineareparto.findMany()
      * ```
      */
    get lineareparto(): Prisma.linearepartoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.liquidacioncobro`: Exposes CRUD operations for the **liquidacioncobro** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Liquidacioncobros
      * const liquidacioncobros = await prisma.liquidacioncobro.findMany()
      * ```
      */
    get liquidacioncobro(): Prisma.liquidacioncobroDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.liquidacionpago`: Exposes CRUD operations for the **liquidacionpago** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Liquidacionpagos
      * const liquidacionpagos = await prisma.liquidacionpago.findMany()
      * ```
      */
    get liquidacionpago(): Prisma.liquidacionpagoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.materia`: Exposes CRUD operations for the **materia** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Materias
      * const materias = await prisma.materia.findMany()
      * ```
      */
    get materia(): Prisma.materiaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.movimientofinanciero`: Exposes CRUD operations for the **movimientofinanciero** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Movimientofinancieros
      * const movimientofinancieros = await prisma.movimientofinanciero.findMany()
      * ```
      */
    get movimientofinanciero(): Prisma.movimientofinancieroDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.musico`: Exposes CRUD operations for the **musico** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Musicos
      * const musicos = await prisma.musico.findMany()
      * ```
      */
    get musico(): Prisma.musicoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.nomina`: Exposes CRUD operations for the **nomina** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Nominas
      * const nominas = await prisma.nomina.findMany()
      * ```
      */
    get nomina(): Prisma.nominaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.obligacioneconomica`: Exposes CRUD operations for the **obligacioneconomica** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Obligacioneconomicas
      * const obligacioneconomicas = await prisma.obligacioneconomica.findMany()
      * ```
      */
    get obligacioneconomica(): Prisma.obligacioneconomicaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.pago`: Exposes CRUD operations for the **pago** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Pagos
      * const pagos = await prisma.pago.findMany()
      * ```
      */
    get pago(): Prisma.pagoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.parametrosistema`: Exposes CRUD operations for the **parametrosistema** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Parametrosistemas
      * const parametrosistemas = await prisma.parametrosistema.findMany()
      * ```
      */
    get parametrosistema(): Prisma.parametrosistemaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.periodocontable`: Exposes CRUD operations for the **periodocontable** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Periodocontables
      * const periodocontables = await prisma.periodocontable.findMany()
      * ```
      */
    get periodocontable(): Prisma.periodocontableDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.persona`: Exposes CRUD operations for the **persona** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Personas
      * const personas = await prisma.persona.findMany()
      * ```
      */
    get persona(): Prisma.personaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.personaagrupacion`: Exposes CRUD operations for the **personaagrupacion** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Personaagrupacions
      * const personaagrupacions = await prisma.personaagrupacion.findMany()
      * ```
      */
    get personaagrupacion(): Prisma.personaagrupacionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.personainstrumento`: Exposes CRUD operations for the **personainstrumento** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Personainstrumentos
      * const personainstrumentos = await prisma.personainstrumento.findMany()
      * ```
      */
    get personainstrumento(): Prisma.personainstrumentoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.personarolfuncional`: Exposes CRUD operations for the **personarolfuncional** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Personarolfuncionals
      * const personarolfuncionals = await prisma.personarolfuncional.findMany()
      * ```
      */
    get personarolfuncional(): Prisma.personarolfuncionalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.profesor`: Exposes CRUD operations for the **profesor** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Profesors
      * const profesors = await prisma.profesor.findMany()
      * ```
      */
    get profesor(): Prisma.profesorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.proveedor`: Exposes CRUD operations for the **proveedor** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Proveedors
      * const proveedors = await prisma.proveedor.findMany()
      * ```
      */
    get proveedor(): Prisma.proveedorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.remesa`: Exposes CRUD operations for the **remesa** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Remesas
      * const remesas = await prisma.remesa.findMany()
      * ```
      */
    get remesa(): Prisma.remesaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.remesacuota`: Exposes CRUD operations for the **remesacuota** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Remesacuotas
      * const remesacuotas = await prisma.remesacuota.findMany()
      * ```
      */
    get remesacuota(): Prisma.remesacuotaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.reparto`: Exposes CRUD operations for the **reparto** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Repartos
      * const repartos = await prisma.reparto.findMany()
      * ```
      */
    get reparto(): Prisma.repartoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.rolfuncional`: Exposes CRUD operations for the **rolfuncional** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Rolfuncionals
      * const rolfuncionals = await prisma.rolfuncional.findMany()
      * ```
      */
    get rolfuncional(): Prisma.rolfuncionalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.sesion`: Exposes CRUD operations for the **sesion** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Sesions
      * const sesions = await prisma.sesion.findMany()
      * ```
      */
    get sesion(): Prisma.sesionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.tarifa`: Exposes CRUD operations for the **tarifa** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Tarifas
      * const tarifas = await prisma.tarifa.findMany()
      * ```
      */
    get tarifa(): Prisma.tarifaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Usuarios
      * const usuarios = await prisma.usuario.findMany()
      * ```
      */
    get usuario(): Prisma.usuarioDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.musicoperiodo`: Exposes CRUD operations for the **musicoperiodo** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Musicoperiodos
      * const musicoperiodos = await prisma.musicoperiodo.findMany()
      * ```
      */
    get musicoperiodo(): Prisma.musicoperiodoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.alumnoperiodo`: Exposes CRUD operations for the **alumnoperiodo** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Alumnoperiodos
      * const alumnoperiodos = await prisma.alumnoperiodo.findMany()
      * ```
      */
    get alumnoperiodo(): Prisma.alumnoperiodoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.profesorperiodo`: Exposes CRUD operations for the **profesorperiodo** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Profesorperiodos
      * const profesorperiodos = await prisma.profesorperiodo.findMany()
      * ```
      */
    get profesorperiodo(): Prisma.profesorperiodoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.directorperiodo`: Exposes CRUD operations for the **directorperiodo** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Directorperiodos
      * const directorperiodos = await prisma.directorperiodo.findMany()
      * ```
      */
    get directorperiodo(): Prisma.directorperiodoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map