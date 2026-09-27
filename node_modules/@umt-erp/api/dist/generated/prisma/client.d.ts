import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.js";
import * as Prisma from "./internal/prismaNamespace.js";
export * as $Enums from './enums.js';
export * from "./enums.js";
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
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model actuacion
 *
 */
export type actuacion = Prisma.actuacionModel;
/**
 * Model actuacionagrupacion
 *
 */
export type actuacionagrupacion = Prisma.actuacionagrupacionModel;
/**
 * Model agrupacion
 *
 */
export type agrupacion = Prisma.agrupacionModel;
/**
 * Model alumno
 *
 */
export type alumno = Prisma.alumnoModel;
/**
 * Model asiento
 *
 */
export type asiento = Prisma.asientoModel;
/**
 * Model asientomovimiento
 *
 */
export type asientomovimiento = Prisma.asientomovimientoModel;
/**
 * Model asistencia
 *
 */
export type asistencia = Prisma.asistenciaModel;
/**
 * Model auditlog
 *
 */
export type auditlog = Prisma.auditlogModel;
/**
 * Model aula
 *
 */
export type aula = Prisma.aulaModel;
/**
 * Model centroanalitico
 *
 */
export type centroanalitico = Prisma.centroanaliticoModel;
/**
 * Model clase
 *
 */
export type clase = Prisma.claseModel;
/**
 * Model cliente
 *
 */
export type cliente = Prisma.clienteModel;
/**
 * Model cobro
 *
 */
export type cobro = Prisma.cobroModel;
/**
 * Model condicioncuota
 *
 */
export type condicioncuota = Prisma.condicioncuotaModel;
/**
 * Model contratacion
 *
 */
export type contratacion = Prisma.contratacionModel;
/**
 * Model contrato
 *
 */
export type contrato = Prisma.contratoModel;
/**
 * Model cuentacontable
 *
 */
export type cuentacontable = Prisma.cuentacontableModel;
/**
 * Model cuentafinanciera
 *
 */
export type cuentafinanciera = Prisma.cuentafinancieraModel;
/**
 * Model cuota
 *
 */
export type cuota = Prisma.cuotaModel;
/**
 * Model derechocobro
 *
 */
export type derechocobro = Prisma.derechocobroModel;
/**
 * Model director
 *
 */
export type director = Prisma.directorModel;
/**
 * Model ejercicio
 *
 */
export type ejercicio = Prisma.ejercicioModel;
/**
 * Model facturacliente
 *
 */
export type facturacliente = Prisma.facturaclienteModel;
/**
 * Model facturaproveedor
 *
 */
export type facturaproveedor = Prisma.facturaproveedorModel;
/**
 * Model facturarectificativacliente
 *
 */
export type facturarectificativacliente = Prisma.facturarectificativaclienteModel;
/**
 * Model facturarectificativaproveedor
 *
 */
export type facturarectificativaproveedor = Prisma.facturarectificativaproveedorModel;
/**
 * Model familia
 *
 */
export type familia = Prisma.familiaModel;
/**
 * Model seccion
 *
 */
export type seccion = Prisma.seccionModel;
/**
 * Model instrumento
 *
 */
export type instrumento = Prisma.instrumentoModel;
/**
 * Model integracionnextcloud
 *
 */
export type integracionnextcloud = Prisma.integracionnextcloudModel;
/**
 * Model lineaasiento
 *
 */
export type lineaasiento = Prisma.lineaasientoModel;
/**
 * Model lineanomina
 *
 */
export type lineanomina = Prisma.lineanominaModel;
/**
 * Model lineareparto
 *
 */
export type lineareparto = Prisma.linearepartoModel;
/**
 * Model liquidacioncobro
 *
 */
export type liquidacioncobro = Prisma.liquidacioncobroModel;
/**
 * Model liquidacionpago
 *
 */
export type liquidacionpago = Prisma.liquidacionpagoModel;
/**
 * Model materia
 *
 */
export type materia = Prisma.materiaModel;
/**
 * Model movimientofinanciero
 *
 */
export type movimientofinanciero = Prisma.movimientofinancieroModel;
/**
 * Model musico
 *
 */
export type musico = Prisma.musicoModel;
/**
 * Model nomina
 *
 */
export type nomina = Prisma.nominaModel;
/**
 * Model obligacioneconomica
 *
 */
export type obligacioneconomica = Prisma.obligacioneconomicaModel;
/**
 * Model pago
 *
 */
export type pago = Prisma.pagoModel;
/**
 * Model parametrosistema
 *
 */
export type parametrosistema = Prisma.parametrosistemaModel;
/**
 * Model periodocontable
 *
 */
export type periodocontable = Prisma.periodocontableModel;
/**
 * Model persona
 *
 */
export type persona = Prisma.personaModel;
/**
 * Model personaagrupacion
 *
 */
export type personaagrupacion = Prisma.personaagrupacionModel;
/**
 * Model personainstrumento
 *
 */
export type personainstrumento = Prisma.personainstrumentoModel;
/**
 * Model personarolfuncional
 *
 */
export type personarolfuncional = Prisma.personarolfuncionalModel;
/**
 * Model profesor
 *
 */
export type profesor = Prisma.profesorModel;
/**
 * Model proveedor
 *
 */
export type proveedor = Prisma.proveedorModel;
/**
 * Model remesa
 *
 */
export type remesa = Prisma.remesaModel;
/**
 * Model remesacuota
 *
 */
export type remesacuota = Prisma.remesacuotaModel;
/**
 * Model reparto
 *
 */
export type reparto = Prisma.repartoModel;
/**
 * Model rolfuncional
 *
 */
export type rolfuncional = Prisma.rolfuncionalModel;
/**
 * Model sesion
 *
 */
export type sesion = Prisma.sesionModel;
/**
 * Model tarifa
 *
 */
export type tarifa = Prisma.tarifaModel;
/**
 * Model usuario
 *
 */
export type usuario = Prisma.usuarioModel;
/**
 * Model musicoperiodo
 *
 */
export type musicoperiodo = Prisma.musicoperiodoModel;
/**
 * Model alumnoperiodo
 *
 */
export type alumnoperiodo = Prisma.alumnoperiodoModel;
/**
 * Model profesorperiodo
 *
 */
export type profesorperiodo = Prisma.profesorperiodoModel;
/**
 * Model directorperiodo
 *
 */
export type directorperiodo = Prisma.directorperiodoModel;
//# sourceMappingURL=client.d.ts.map