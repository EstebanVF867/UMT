import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly actuacion: "actuacion";
    readonly actuacionagrupacion: "actuacionagrupacion";
    readonly agrupacion: "agrupacion";
    readonly alumno: "alumno";
    readonly asiento: "asiento";
    readonly asientomovimiento: "asientomovimiento";
    readonly asistencia: "asistencia";
    readonly auditlog: "auditlog";
    readonly aula: "aula";
    readonly centroanalitico: "centroanalitico";
    readonly clase: "clase";
    readonly cliente: "cliente";
    readonly cobro: "cobro";
    readonly condicioncuota: "condicioncuota";
    readonly contratacion: "contratacion";
    readonly contrato: "contrato";
    readonly cuentacontable: "cuentacontable";
    readonly cuentafinanciera: "cuentafinanciera";
    readonly cuota: "cuota";
    readonly derechocobro: "derechocobro";
    readonly director: "director";
    readonly ejercicio: "ejercicio";
    readonly facturacliente: "facturacliente";
    readonly facturaproveedor: "facturaproveedor";
    readonly facturarectificativacliente: "facturarectificativacliente";
    readonly facturarectificativaproveedor: "facturarectificativaproveedor";
    readonly familia: "familia";
    readonly seccion: "seccion";
    readonly instrumento: "instrumento";
    readonly integracionnextcloud: "integracionnextcloud";
    readonly lineaasiento: "lineaasiento";
    readonly lineanomina: "lineanomina";
    readonly lineareparto: "lineareparto";
    readonly liquidacioncobro: "liquidacioncobro";
    readonly liquidacionpago: "liquidacionpago";
    readonly materia: "materia";
    readonly movimientofinanciero: "movimientofinanciero";
    readonly musico: "musico";
    readonly nomina: "nomina";
    readonly obligacioneconomica: "obligacioneconomica";
    readonly pago: "pago";
    readonly parametrosistema: "parametrosistema";
    readonly periodocontable: "periodocontable";
    readonly persona: "persona";
    readonly personaagrupacion: "personaagrupacion";
    readonly personainstrumento: "personainstrumento";
    readonly personarolfuncional: "personarolfuncional";
    readonly profesor: "profesor";
    readonly proveedor: "proveedor";
    readonly remesa: "remesa";
    readonly remesacuota: "remesacuota";
    readonly reparto: "reparto";
    readonly rolfuncional: "rolfuncional";
    readonly sesion: "sesion";
    readonly tarifa: "tarifa";
    readonly usuario: "usuario";
    readonly musicoperiodo: "musicoperiodo";
    readonly alumnoperiodo: "alumnoperiodo";
    readonly profesorperiodo: "profesorperiodo";
    readonly directorperiodo: "directorperiodo";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ActuacionScalarFieldEnum: {
    readonly id: "id";
    readonly ejercicioId: "ejercicioId";
    readonly contratacionId: "contratacionId";
    readonly fecha: "fecha";
    readonly nombre: "nombre";
    readonly lugar: "lugar";
    readonly importeAcordado: "importeAcordado";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ActuacionScalarFieldEnum = (typeof ActuacionScalarFieldEnum)[keyof typeof ActuacionScalarFieldEnum];
export declare const ActuacionagrupacionScalarFieldEnum: {
    readonly id: "id";
    readonly actuacionId: "actuacionId";
    readonly agrupacionId: "agrupacionId";
    readonly createdAt: "createdAt";
};
export type ActuacionagrupacionScalarFieldEnum = (typeof ActuacionagrupacionScalarFieldEnum)[keyof typeof ActuacionagrupacionScalarFieldEnum];
export declare const AgrupacionScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AgrupacionScalarFieldEnum = (typeof AgrupacionScalarFieldEnum)[keyof typeof AgrupacionScalarFieldEnum];
export declare const AlumnoScalarFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly fechaAlta: "fechaAlta";
    readonly fechaBaja: "fechaBaja";
    readonly motivoBaja: "motivoBaja";
    readonly activo: "activo";
    readonly observaciones: "observaciones";
};
export type AlumnoScalarFieldEnum = (typeof AlumnoScalarFieldEnum)[keyof typeof AlumnoScalarFieldEnum];
export declare const AsientoScalarFieldEnum: {
    readonly id: "id";
    readonly numero: "numero";
    readonly ejercicioId: "ejercicioId";
    readonly periodoContableId: "periodoContableId";
    readonly fechaContabilizacion: "fechaContabilizacion";
    readonly concepto: "concepto";
    readonly createdAt: "createdAt";
};
export type AsientoScalarFieldEnum = (typeof AsientoScalarFieldEnum)[keyof typeof AsientoScalarFieldEnum];
export declare const AsientomovimientoScalarFieldEnum: {
    readonly id: "id";
    readonly asientoId: "asientoId";
    readonly movimientoFinancieroId: "movimientoFinancieroId";
    readonly createdAt: "createdAt";
};
export type AsientomovimientoScalarFieldEnum = (typeof AsientomovimientoScalarFieldEnum)[keyof typeof AsientomovimientoScalarFieldEnum];
export declare const AsistenciaScalarFieldEnum: {
    readonly id: "id";
    readonly actuacionId: "actuacionId";
    readonly musicoId: "musicoId";
    readonly tipoActividad: "tipoActividad";
    readonly estado: "estado";
    readonly fechaRegistro: "fechaRegistro";
    readonly origen: "origen";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AsistenciaScalarFieldEnum = (typeof AsistenciaScalarFieldEnum)[keyof typeof AsistenciaScalarFieldEnum];
export declare const AuditlogScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly action: "action";
    readonly entity: "entity";
    readonly entityId: "entityId";
    readonly description: "description";
    readonly metadata: "metadata";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly createdAt: "createdAt";
};
export type AuditlogScalarFieldEnum = (typeof AuditlogScalarFieldEnum)[keyof typeof AuditlogScalarFieldEnum];
export declare const AulaScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly capacidad: "capacidad";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AulaScalarFieldEnum = (typeof AulaScalarFieldEnum)[keyof typeof AulaScalarFieldEnum];
export declare const CentroanaliticoScalarFieldEnum: {
    readonly id: "id";
    readonly codigo: "codigo";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CentroanaliticoScalarFieldEnum = (typeof CentroanaliticoScalarFieldEnum)[keyof typeof CentroanaliticoScalarFieldEnum];
export declare const ClaseScalarFieldEnum: {
    readonly id: "id";
    readonly alumnoId: "alumnoId";
    readonly profesorId: "profesorId";
    readonly materiaId: "materiaId";
    readonly aulaId: "aulaId";
    readonly diaSemana: "diaSemana";
    readonly horaInicio: "horaInicio";
    readonly horaFin: "horaFin";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly estado: "estado";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClaseScalarFieldEnum = (typeof ClaseScalarFieldEnum)[keyof typeof ClaseScalarFieldEnum];
export declare const ClienteScalarFieldEnum: {
    readonly id: "id";
    readonly nombreRazonSocial: "nombreRazonSocial";
    readonly nifCif: "nifCif";
    readonly tipoCliente: "tipoCliente";
    readonly personaContacto: "personaContacto";
    readonly telefono: "telefono";
    readonly email: "email";
    readonly direccionFiscal: "direccionFiscal";
    readonly codigoPostal: "codigoPostal";
    readonly localidad: "localidad";
    readonly provincia: "provincia";
    readonly pais: "pais";
    readonly iban: "iban";
    readonly formaCobro: "formaCobro";
    readonly plazoCobro: "plazoCobro";
    readonly observacionesCobro: "observacionesCobro";
    readonly activo: "activo";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum];
export declare const CobroScalarFieldEnum: {
    readonly id: "id";
    readonly fechaCobro: "fechaCobro";
    readonly clienteId: "clienteId";
    readonly importeTotal: "importeTotal";
    readonly cuentaFinancieraId: "cuentaFinancieraId";
    readonly medioPago: "medioPago";
    readonly concepto: "concepto";
    readonly referencia: "referencia";
    readonly observaciones: "observaciones";
    readonly movimientoFinancieroId: "movimientoFinancieroId";
    readonly asientoId: "asientoId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CobroScalarFieldEnum = (typeof CobroScalarFieldEnum)[keyof typeof CobroScalarFieldEnum];
export declare const CondicioncuotaScalarFieldEnum: {
    readonly id: "id";
    readonly alumnoId: "alumnoId";
    readonly tipo: "tipo";
    readonly valor: "valor";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly motivo: "motivo";
    readonly observaciones: "observaciones";
    readonly activa: "activa";
    readonly autorizadaPor: "autorizadaPor";
    readonly fechaAutorizacion: "fechaAutorizacion";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CondicioncuotaScalarFieldEnum = (typeof CondicioncuotaScalarFieldEnum)[keyof typeof CondicioncuotaScalarFieldEnum];
export declare const ContratacionScalarFieldEnum: {
    readonly id: "id";
    readonly clienteId: "clienteId";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly descripcion: "descripcion";
    readonly importeAcordado: "importeAcordado";
    readonly estado: "estado";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ContratacionScalarFieldEnum = (typeof ContratacionScalarFieldEnum)[keyof typeof ContratacionScalarFieldEnum];
export declare const ContratoScalarFieldEnum: {
    readonly id: "id";
    readonly profesorId: "profesorId";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly salarioHora: "salarioHora";
    readonly periodicidad: "periodicidad";
    readonly estado: "estado";
    readonly observaciones: "observaciones";
    readonly nextcloudReferencia: "nextcloudReferencia";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ContratoScalarFieldEnum = (typeof ContratoScalarFieldEnum)[keyof typeof ContratoScalarFieldEnum];
export declare const CuentacontableScalarFieldEnum: {
    readonly id: "id";
    readonly codigo: "codigo";
    readonly nombre: "nombre";
    readonly tipo: "tipo";
    readonly naturaleza: "naturaleza";
    readonly nivel: "nivel";
    readonly agrupadora: "agrupadora";
    readonly movimiento: "movimiento";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly activa: "activa";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CuentacontableScalarFieldEnum = (typeof CuentacontableScalarFieldEnum)[keyof typeof CuentacontableScalarFieldEnum];
export declare const CuentafinancieraScalarFieldEnum: {
    readonly id: "id";
    readonly tipo: "tipo";
    readonly nombre: "nombre";
    readonly banco: "banco";
    readonly iban: "iban";
    readonly moneda: "moneda";
    readonly fechaApertura: "fechaApertura";
    readonly fechaCierre: "fechaCierre";
    readonly activa: "activa";
    readonly cuentaContableId: "cuentaContableId";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CuentafinancieraScalarFieldEnum = (typeof CuentafinancieraScalarFieldEnum)[keyof typeof CuentafinancieraScalarFieldEnum];
export declare const CuotaScalarFieldEnum: {
    readonly id: "id";
    readonly alumnoId: "alumnoId";
    readonly tarifaId: "tarifaId";
    readonly fecha: "fecha";
    readonly importeBase: "importeBase";
    readonly ajuste: "ajuste";
    readonly importeFinal: "importeFinal";
    readonly motivoAjuste: "motivoAjuste";
    readonly estado: "estado";
    readonly fechaEnvioBanco: "fechaEnvioBanco";
    readonly motivoDevolucion: "motivoDevolucion";
    readonly asientoId: "asientoId";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CuotaScalarFieldEnum = (typeof CuotaScalarFieldEnum)[keyof typeof CuotaScalarFieldEnum];
export declare const DerechocobroScalarFieldEnum: {
    readonly id: "id";
    readonly facturaClienteId: "facturaClienteId";
    readonly importe: "importe";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DerechocobroScalarFieldEnum = (typeof DerechocobroScalarFieldEnum)[keyof typeof DerechocobroScalarFieldEnum];
export declare const DirectorScalarFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly fechaAlta: "fechaAlta";
    readonly fechaBaja: "fechaBaja";
    readonly activo: "activo";
    readonly observaciones: "observaciones";
};
export type DirectorScalarFieldEnum = (typeof DirectorScalarFieldEnum)[keyof typeof DirectorScalarFieldEnum];
export declare const EjercicioScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly estado: "estado";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EjercicioScalarFieldEnum = (typeof EjercicioScalarFieldEnum)[keyof typeof EjercicioScalarFieldEnum];
export declare const FacturaclienteScalarFieldEnum: {
    readonly id: "id";
    readonly clienteId: "clienteId";
    readonly contratacionId: "contratacionId";
    readonly actuacionId: "actuacionId";
    readonly numero: "numero";
    readonly fechaFactura: "fechaFactura";
    readonly vencimiento: "vencimiento";
    readonly concepto: "concepto";
    readonly base: "base";
    readonly iva: "iva";
    readonly total: "total";
    readonly estado: "estado";
    readonly asientoId: "asientoId";
    readonly cuentaContableId: "cuentaContableId";
    readonly centroAnaliticoId: "centroAnaliticoId";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FacturaclienteScalarFieldEnum = (typeof FacturaclienteScalarFieldEnum)[keyof typeof FacturaclienteScalarFieldEnum];
export declare const FacturaproveedorScalarFieldEnum: {
    readonly id: "id";
    readonly proveedorId: "proveedorId";
    readonly numero: "numero";
    readonly fechaFactura: "fechaFactura";
    readonly fechaRegistro: "fechaRegistro";
    readonly vencimiento: "vencimiento";
    readonly concepto: "concepto";
    readonly base: "base";
    readonly iva: "iva";
    readonly total: "total";
    readonly estado: "estado";
    readonly asientoId: "asientoId";
    readonly cuentaContableId: "cuentaContableId";
    readonly centroAnaliticoId: "centroAnaliticoId";
    readonly proyecto: "proyecto";
    readonly actuacionId: "actuacionId";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FacturaproveedorScalarFieldEnum = (typeof FacturaproveedorScalarFieldEnum)[keyof typeof FacturaproveedorScalarFieldEnum];
export declare const FacturarectificativaclienteScalarFieldEnum: {
    readonly id: "id";
    readonly facturaOriginalId: "facturaOriginalId";
    readonly numero: "numero";
    readonly fechaFactura: "fechaFactura";
    readonly concepto: "concepto";
    readonly base: "base";
    readonly iva: "iva";
    readonly total: "total";
    readonly asientoId: "asientoId";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FacturarectificativaclienteScalarFieldEnum = (typeof FacturarectificativaclienteScalarFieldEnum)[keyof typeof FacturarectificativaclienteScalarFieldEnum];
export declare const FacturarectificativaproveedorScalarFieldEnum: {
    readonly id: "id";
    readonly facturaOriginalId: "facturaOriginalId";
    readonly numero: "numero";
    readonly fechaFactura: "fechaFactura";
    readonly concepto: "concepto";
    readonly base: "base";
    readonly iva: "iva";
    readonly total: "total";
    readonly asientoId: "asientoId";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FacturarectificativaproveedorScalarFieldEnum = (typeof FacturarectificativaproveedorScalarFieldEnum)[keyof typeof FacturarectificativaproveedorScalarFieldEnum];
export declare const FamiliaScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FamiliaScalarFieldEnum = (typeof FamiliaScalarFieldEnum)[keyof typeof FamiliaScalarFieldEnum];
export declare const SeccionScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly familiaId: "familiaId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SeccionScalarFieldEnum = (typeof SeccionScalarFieldEnum)[keyof typeof SeccionScalarFieldEnum];
export declare const InstrumentoScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly seccionId: "seccionId";
    readonly descripcion: "descripcion";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type InstrumentoScalarFieldEnum = (typeof InstrumentoScalarFieldEnum)[keyof typeof InstrumentoScalarFieldEnum];
export declare const IntegracionnextcloudScalarFieldEnum: {
    readonly id: "id";
    readonly serverUrl: "serverUrl";
    readonly estado: "estado";
    readonly mensajeEstado: "mensajeEstado";
    readonly ultimaComprobacionAt: "ultimaComprobacionAt";
    readonly activa: "activa";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type IntegracionnextcloudScalarFieldEnum = (typeof IntegracionnextcloudScalarFieldEnum)[keyof typeof IntegracionnextcloudScalarFieldEnum];
export declare const LineaasientoScalarFieldEnum: {
    readonly id: "id";
    readonly asientoId: "asientoId";
    readonly cuentaContableId: "cuentaContableId";
    readonly concepto: "concepto";
    readonly debe: "debe";
    readonly haber: "haber";
    readonly centroAnaliticoId: "centroAnaliticoId";
    readonly referencia: "referencia";
    readonly createdAt: "createdAt";
};
export type LineaasientoScalarFieldEnum = (typeof LineaasientoScalarFieldEnum)[keyof typeof LineaasientoScalarFieldEnum];
export declare const LineanominaScalarFieldEnum: {
    readonly id: "id";
    readonly nominaId: "nominaId";
    readonly tipo: "tipo";
    readonly descripcion: "descripcion";
    readonly importe: "importe";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LineanominaScalarFieldEnum = (typeof LineanominaScalarFieldEnum)[keyof typeof LineanominaScalarFieldEnum];
export declare const LinearepartoScalarFieldEnum: {
    readonly id: "id";
    readonly repartoId: "repartoId";
    readonly musicoId: "musicoId";
    readonly actuacionesComputadas: "actuacionesComputadas";
    readonly importeBruto: "importeBruto";
    readonly porcentajeUMT: "porcentajeUMT";
    readonly complementos: "complementos";
    readonly deducciones: "deducciones";
    readonly importeFinal: "importeFinal";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LinearepartoScalarFieldEnum = (typeof LinearepartoScalarFieldEnum)[keyof typeof LinearepartoScalarFieldEnum];
export declare const LiquidacioncobroScalarFieldEnum: {
    readonly id: "id";
    readonly derechoCobroId: "derechoCobroId";
    readonly cobroId: "cobroId";
    readonly importe: "importe";
    readonly createdAt: "createdAt";
};
export type LiquidacioncobroScalarFieldEnum = (typeof LiquidacioncobroScalarFieldEnum)[keyof typeof LiquidacioncobroScalarFieldEnum];
export declare const LiquidacionpagoScalarFieldEnum: {
    readonly id: "id";
    readonly obligationId: "obligationId";
    readonly paymentId: "paymentId";
    readonly importe: "importe";
    readonly createdAt: "createdAt";
};
export type LiquidacionpagoScalarFieldEnum = (typeof LiquidacionpagoScalarFieldEnum)[keyof typeof LiquidacionpagoScalarFieldEnum];
export declare const MateriaScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly tipo: "tipo";
    readonly descripcion: "descripcion";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MateriaScalarFieldEnum = (typeof MateriaScalarFieldEnum)[keyof typeof MateriaScalarFieldEnum];
export declare const MovimientofinancieroScalarFieldEnum: {
    readonly id: "id";
    readonly cuentaFinancieraId: "cuentaFinancieraId";
    readonly fecha: "fecha";
    readonly tipo: "tipo";
    readonly concepto: "concepto";
    readonly importe: "importe";
    readonly referencia: "referencia";
    readonly conciliacion: "conciliacion";
    readonly fechaConciliacion: "fechaConciliacion";
    readonly conciliadoPor: "conciliadoPor";
    readonly grupoTransferencia: "grupoTransferencia";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MovimientofinancieroScalarFieldEnum = (typeof MovimientofinancieroScalarFieldEnum)[keyof typeof MovimientofinancieroScalarFieldEnum];
export declare const MusicoScalarFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly fechaAlta: "fechaAlta";
    readonly fechaBaja: "fechaBaja";
    readonly activo: "activo";
    readonly observaciones: "observaciones";
};
export type MusicoScalarFieldEnum = (typeof MusicoScalarFieldEnum)[keyof typeof MusicoScalarFieldEnum];
export declare const NominaScalarFieldEnum: {
    readonly id: "id";
    readonly profesorId: "profesorId";
    readonly contratoId: "contratoId";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly fechaPago: "fechaPago";
    readonly salarioBruto: "salarioBruto";
    readonly irpf: "irpf";
    readonly ssTrabajador: "ssTrabajador";
    readonly ssUMT: "ssUMT";
    readonly totalNeto: "totalNeto";
    readonly estado: "estado";
    readonly asientoId: "asientoId";
    readonly origenCalculo: "origenCalculo";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type NominaScalarFieldEnum = (typeof NominaScalarFieldEnum)[keyof typeof NominaScalarFieldEnum];
export declare const ObligacioneconomicaScalarFieldEnum: {
    readonly id: "id";
    readonly ejercicioId: "ejercicioId";
    readonly cuotaId: "cuotaId";
    readonly facturaProveedorId: "facturaProveedorId";
    readonly nominaId: "nominaId";
    readonly repartoId: "repartoId";
    readonly importe: "importe";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ObligacioneconomicaScalarFieldEnum = (typeof ObligacioneconomicaScalarFieldEnum)[keyof typeof ObligacioneconomicaScalarFieldEnum];
export declare const PagoScalarFieldEnum: {
    readonly id: "id";
    readonly fechaPago: "fechaPago";
    readonly proveedorId: "proveedorId";
    readonly importeTotal: "importeTotal";
    readonly cuentaFinancieraId: "cuentaFinancieraId";
    readonly medioPago: "medioPago";
    readonly concepto: "concepto";
    readonly referencia: "referencia";
    readonly observaciones: "observaciones";
    readonly movimientoFinancieroId: "movimientoFinancieroId";
    readonly asientoId: "asientoId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PagoScalarFieldEnum = (typeof PagoScalarFieldEnum)[keyof typeof PagoScalarFieldEnum];
export declare const ParametrosistemaScalarFieldEnum: {
    readonly id: "id";
    readonly codigo: "codigo";
    readonly nombre: "nombre";
    readonly tipo: "tipo";
    readonly valor: "valor";
    readonly descripcion: "descripcion";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ParametrosistemaScalarFieldEnum = (typeof ParametrosistemaScalarFieldEnum)[keyof typeof ParametrosistemaScalarFieldEnum];
export declare const PeriodocontableScalarFieldEnum: {
    readonly id: "id";
    readonly ejercicioId: "ejercicioId";
    readonly nombre: "nombre";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly estado: "estado";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PeriodocontableScalarFieldEnum = (typeof PeriodocontableScalarFieldEnum)[keyof typeof PeriodocontableScalarFieldEnum];
export declare const PersonaScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly apellidos: "apellidos";
    readonly dni: "dni";
    readonly fechaNacimiento: "fechaNacimiento";
    readonly email: "email";
    readonly telefono: "telefono";
    readonly observaciones: "observaciones";
    readonly activo: "activo";
    readonly fechaBaja: "fechaBaja";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PersonaScalarFieldEnum = (typeof PersonaScalarFieldEnum)[keyof typeof PersonaScalarFieldEnum];
export declare const PersonaagrupacionScalarFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly agrupacionId: "agrupacionId";
    readonly fechaAlta: "fechaAlta";
    readonly fechaBaja: "fechaBaja";
    readonly activo: "activo";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PersonaagrupacionScalarFieldEnum = (typeof PersonaagrupacionScalarFieldEnum)[keyof typeof PersonaagrupacionScalarFieldEnum];
export declare const PersonainstrumentoScalarFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly instrumentoId: "instrumentoId";
    readonly principal: "principal";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PersonainstrumentoScalarFieldEnum = (typeof PersonainstrumentoScalarFieldEnum)[keyof typeof PersonainstrumentoScalarFieldEnum];
export declare const PersonarolfuncionalScalarFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly rolFuncionalId: "rolFuncionalId";
};
export type PersonarolfuncionalScalarFieldEnum = (typeof PersonarolfuncionalScalarFieldEnum)[keyof typeof PersonarolfuncionalScalarFieldEnum];
export declare const ProfesorScalarFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly fechaAlta: "fechaAlta";
    readonly fechaBaja: "fechaBaja";
    readonly motivoBaja: "motivoBaja";
    readonly activo: "activo";
    readonly observaciones: "observaciones";
};
export type ProfesorScalarFieldEnum = (typeof ProfesorScalarFieldEnum)[keyof typeof ProfesorScalarFieldEnum];
export declare const ProveedorScalarFieldEnum: {
    readonly id: "id";
    readonly nombreRazonSocial: "nombreRazonSocial";
    readonly nifCif: "nifCif";
    readonly tipoProveedor: "tipoProveedor";
    readonly personaContacto: "personaContacto";
    readonly telefono: "telefono";
    readonly email: "email";
    readonly direccionFiscal: "direccionFiscal";
    readonly codigoPostal: "codigoPostal";
    readonly localidad: "localidad";
    readonly provincia: "provincia";
    readonly pais: "pais";
    readonly iban: "iban";
    readonly formaPago: "formaPago";
    readonly plazoPago: "plazoPago";
    readonly observacionesPago: "observacionesPago";
    readonly activo: "activo";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProveedorScalarFieldEnum = (typeof ProveedorScalarFieldEnum)[keyof typeof ProveedorScalarFieldEnum];
export declare const RemesaScalarFieldEnum: {
    readonly id: "id";
    readonly fecha: "fecha";
    readonly estado: "estado";
    readonly referencia: "referencia";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RemesaScalarFieldEnum = (typeof RemesaScalarFieldEnum)[keyof typeof RemesaScalarFieldEnum];
export declare const RemesacuotaScalarFieldEnum: {
    readonly id: "id";
    readonly remesaId: "remesaId";
    readonly cuotaId: "cuotaId";
    readonly importe: "importe";
    readonly createdAt: "createdAt";
};
export type RemesacuotaScalarFieldEnum = (typeof RemesacuotaScalarFieldEnum)[keyof typeof RemesacuotaScalarFieldEnum];
export declare const RepartoScalarFieldEnum: {
    readonly id: "id";
    readonly ejercicioId: "ejercicioId";
    readonly fechaCierre: "fechaCierre";
    readonly estado: "estado";
    readonly porcentajeUMT: "porcentajeUMT";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RepartoScalarFieldEnum = (typeof RepartoScalarFieldEnum)[keyof typeof RepartoScalarFieldEnum];
export declare const RolfuncionalScalarFieldEnum: {
    readonly id: "id";
    readonly codigo: "codigo";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RolfuncionalScalarFieldEnum = (typeof RolfuncionalScalarFieldEnum)[keyof typeof RolfuncionalScalarFieldEnum];
export declare const SesionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly lastUsedAt: "lastUsedAt";
    readonly revokedAt: "revokedAt";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
};
export type SesionScalarFieldEnum = (typeof SesionScalarFieldEnum)[keyof typeof SesionScalarFieldEnum];
export declare const TarifaScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly importe: "importe";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly activa: "activa";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TarifaScalarFieldEnum = (typeof TarifaScalarFieldEnum)[keyof typeof TarifaScalarFieldEnum];
export declare const UsuarioScalarFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly username: "username";
    readonly passwordHash: "passwordHash";
    readonly activo: "activo";
    readonly ultimoAccesoAt: "ultimoAccesoAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum];
export declare const MusicoperiodoScalarFieldEnum: {
    readonly id: "id";
    readonly musicoId: "musicoId";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly motivoBaja: "motivoBaja";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MusicoperiodoScalarFieldEnum = (typeof MusicoperiodoScalarFieldEnum)[keyof typeof MusicoperiodoScalarFieldEnum];
export declare const AlumnoperiodoScalarFieldEnum: {
    readonly id: "id";
    readonly alumnoId: "alumnoId";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly motivoBaja: "motivoBaja";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AlumnoperiodoScalarFieldEnum = (typeof AlumnoperiodoScalarFieldEnum)[keyof typeof AlumnoperiodoScalarFieldEnum];
export declare const ProfesorperiodoScalarFieldEnum: {
    readonly id: "id";
    readonly profesorId: "profesorId";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly motivoBaja: "motivoBaja";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProfesorperiodoScalarFieldEnum = (typeof ProfesorperiodoScalarFieldEnum)[keyof typeof ProfesorperiodoScalarFieldEnum];
export declare const DirectorperiodoScalarFieldEnum: {
    readonly id: "id";
    readonly directorId: "directorId";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly motivoBaja: "motivoBaja";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DirectorperiodoScalarFieldEnum = (typeof DirectorperiodoScalarFieldEnum)[keyof typeof DirectorperiodoScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const actuacionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly ejercicioId: "ejercicioId";
    readonly contratacionId: "contratacionId";
    readonly nombre: "nombre";
    readonly lugar: "lugar";
    readonly observaciones: "observaciones";
};
export type actuacionOrderByRelevanceFieldEnum = (typeof actuacionOrderByRelevanceFieldEnum)[keyof typeof actuacionOrderByRelevanceFieldEnum];
export declare const actuacionagrupacionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly actuacionId: "actuacionId";
    readonly agrupacionId: "agrupacionId";
};
export type actuacionagrupacionOrderByRelevanceFieldEnum = (typeof actuacionagrupacionOrderByRelevanceFieldEnum)[keyof typeof actuacionagrupacionOrderByRelevanceFieldEnum];
export declare const agrupacionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
};
export type agrupacionOrderByRelevanceFieldEnum = (typeof agrupacionOrderByRelevanceFieldEnum)[keyof typeof agrupacionOrderByRelevanceFieldEnum];
export declare const alumnoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly observaciones: "observaciones";
};
export type alumnoOrderByRelevanceFieldEnum = (typeof alumnoOrderByRelevanceFieldEnum)[keyof typeof alumnoOrderByRelevanceFieldEnum];
export declare const asientoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly ejercicioId: "ejercicioId";
    readonly periodoContableId: "periodoContableId";
    readonly concepto: "concepto";
};
export type asientoOrderByRelevanceFieldEnum = (typeof asientoOrderByRelevanceFieldEnum)[keyof typeof asientoOrderByRelevanceFieldEnum];
export declare const asientomovimientoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly asientoId: "asientoId";
    readonly movimientoFinancieroId: "movimientoFinancieroId";
};
export type asientomovimientoOrderByRelevanceFieldEnum = (typeof asientomovimientoOrderByRelevanceFieldEnum)[keyof typeof asientomovimientoOrderByRelevanceFieldEnum];
export declare const asistenciaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly actuacionId: "actuacionId";
    readonly musicoId: "musicoId";
    readonly origen: "origen";
    readonly observaciones: "observaciones";
};
export type asistenciaOrderByRelevanceFieldEnum = (typeof asistenciaOrderByRelevanceFieldEnum)[keyof typeof asistenciaOrderByRelevanceFieldEnum];
export declare const auditlogOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly entity: "entity";
    readonly entityId: "entityId";
    readonly description: "description";
    readonly metadata: "metadata";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
};
export type auditlogOrderByRelevanceFieldEnum = (typeof auditlogOrderByRelevanceFieldEnum)[keyof typeof auditlogOrderByRelevanceFieldEnum];
export declare const aulaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
};
export type aulaOrderByRelevanceFieldEnum = (typeof aulaOrderByRelevanceFieldEnum)[keyof typeof aulaOrderByRelevanceFieldEnum];
export declare const centroanaliticoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly codigo: "codigo";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
};
export type centroanaliticoOrderByRelevanceFieldEnum = (typeof centroanaliticoOrderByRelevanceFieldEnum)[keyof typeof centroanaliticoOrderByRelevanceFieldEnum];
export declare const claseOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly alumnoId: "alumnoId";
    readonly profesorId: "profesorId";
    readonly materiaId: "materiaId";
    readonly aulaId: "aulaId";
    readonly observaciones: "observaciones";
};
export type claseOrderByRelevanceFieldEnum = (typeof claseOrderByRelevanceFieldEnum)[keyof typeof claseOrderByRelevanceFieldEnum];
export declare const clienteOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombreRazonSocial: "nombreRazonSocial";
    readonly nifCif: "nifCif";
    readonly tipoCliente: "tipoCliente";
    readonly personaContacto: "personaContacto";
    readonly telefono: "telefono";
    readonly email: "email";
    readonly direccionFiscal: "direccionFiscal";
    readonly codigoPostal: "codigoPostal";
    readonly localidad: "localidad";
    readonly provincia: "provincia";
    readonly pais: "pais";
    readonly iban: "iban";
    readonly formaCobro: "formaCobro";
    readonly plazoCobro: "plazoCobro";
    readonly observacionesCobro: "observacionesCobro";
    readonly observaciones: "observaciones";
};
export type clienteOrderByRelevanceFieldEnum = (typeof clienteOrderByRelevanceFieldEnum)[keyof typeof clienteOrderByRelevanceFieldEnum];
export declare const cobroOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly clienteId: "clienteId";
    readonly cuentaFinancieraId: "cuentaFinancieraId";
    readonly concepto: "concepto";
    readonly referencia: "referencia";
    readonly observaciones: "observaciones";
    readonly movimientoFinancieroId: "movimientoFinancieroId";
    readonly asientoId: "asientoId";
};
export type cobroOrderByRelevanceFieldEnum = (typeof cobroOrderByRelevanceFieldEnum)[keyof typeof cobroOrderByRelevanceFieldEnum];
export declare const condicioncuotaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly alumnoId: "alumnoId";
    readonly observaciones: "observaciones";
    readonly autorizadaPor: "autorizadaPor";
};
export type condicioncuotaOrderByRelevanceFieldEnum = (typeof condicioncuotaOrderByRelevanceFieldEnum)[keyof typeof condicioncuotaOrderByRelevanceFieldEnum];
export declare const contratacionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly clienteId: "clienteId";
    readonly descripcion: "descripcion";
    readonly estado: "estado";
    readonly observaciones: "observaciones";
};
export type contratacionOrderByRelevanceFieldEnum = (typeof contratacionOrderByRelevanceFieldEnum)[keyof typeof contratacionOrderByRelevanceFieldEnum];
export declare const contratoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly profesorId: "profesorId";
    readonly observaciones: "observaciones";
    readonly nextcloudReferencia: "nextcloudReferencia";
};
export type contratoOrderByRelevanceFieldEnum = (typeof contratoOrderByRelevanceFieldEnum)[keyof typeof contratoOrderByRelevanceFieldEnum];
export declare const cuentacontableOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly codigo: "codigo";
    readonly nombre: "nombre";
    readonly observaciones: "observaciones";
};
export type cuentacontableOrderByRelevanceFieldEnum = (typeof cuentacontableOrderByRelevanceFieldEnum)[keyof typeof cuentacontableOrderByRelevanceFieldEnum];
export declare const cuentafinancieraOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly banco: "banco";
    readonly iban: "iban";
    readonly moneda: "moneda";
    readonly cuentaContableId: "cuentaContableId";
    readonly observaciones: "observaciones";
};
export type cuentafinancieraOrderByRelevanceFieldEnum = (typeof cuentafinancieraOrderByRelevanceFieldEnum)[keyof typeof cuentafinancieraOrderByRelevanceFieldEnum];
export declare const cuotaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly alumnoId: "alumnoId";
    readonly tarifaId: "tarifaId";
    readonly motivoAjuste: "motivoAjuste";
    readonly asientoId: "asientoId";
    readonly observaciones: "observaciones";
};
export type cuotaOrderByRelevanceFieldEnum = (typeof cuotaOrderByRelevanceFieldEnum)[keyof typeof cuotaOrderByRelevanceFieldEnum];
export declare const derechocobroOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly facturaClienteId: "facturaClienteId";
    readonly observaciones: "observaciones";
};
export type derechocobroOrderByRelevanceFieldEnum = (typeof derechocobroOrderByRelevanceFieldEnum)[keyof typeof derechocobroOrderByRelevanceFieldEnum];
export declare const directorOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly observaciones: "observaciones";
};
export type directorOrderByRelevanceFieldEnum = (typeof directorOrderByRelevanceFieldEnum)[keyof typeof directorOrderByRelevanceFieldEnum];
export declare const ejercicioOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly observaciones: "observaciones";
};
export type ejercicioOrderByRelevanceFieldEnum = (typeof ejercicioOrderByRelevanceFieldEnum)[keyof typeof ejercicioOrderByRelevanceFieldEnum];
export declare const facturaclienteOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly clienteId: "clienteId";
    readonly contratacionId: "contratacionId";
    readonly actuacionId: "actuacionId";
    readonly numero: "numero";
    readonly concepto: "concepto";
    readonly asientoId: "asientoId";
    readonly cuentaContableId: "cuentaContableId";
    readonly centroAnaliticoId: "centroAnaliticoId";
    readonly observaciones: "observaciones";
};
export type facturaclienteOrderByRelevanceFieldEnum = (typeof facturaclienteOrderByRelevanceFieldEnum)[keyof typeof facturaclienteOrderByRelevanceFieldEnum];
export declare const facturaproveedorOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly proveedorId: "proveedorId";
    readonly numero: "numero";
    readonly concepto: "concepto";
    readonly asientoId: "asientoId";
    readonly cuentaContableId: "cuentaContableId";
    readonly centroAnaliticoId: "centroAnaliticoId";
    readonly proyecto: "proyecto";
    readonly actuacionId: "actuacionId";
    readonly observaciones: "observaciones";
};
export type facturaproveedorOrderByRelevanceFieldEnum = (typeof facturaproveedorOrderByRelevanceFieldEnum)[keyof typeof facturaproveedorOrderByRelevanceFieldEnum];
export declare const facturarectificativaclienteOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly facturaOriginalId: "facturaOriginalId";
    readonly numero: "numero";
    readonly concepto: "concepto";
    readonly asientoId: "asientoId";
    readonly observaciones: "observaciones";
};
export type facturarectificativaclienteOrderByRelevanceFieldEnum = (typeof facturarectificativaclienteOrderByRelevanceFieldEnum)[keyof typeof facturarectificativaclienteOrderByRelevanceFieldEnum];
export declare const facturarectificativaproveedorOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly facturaOriginalId: "facturaOriginalId";
    readonly numero: "numero";
    readonly concepto: "concepto";
    readonly asientoId: "asientoId";
    readonly observaciones: "observaciones";
};
export type facturarectificativaproveedorOrderByRelevanceFieldEnum = (typeof facturarectificativaproveedorOrderByRelevanceFieldEnum)[keyof typeof facturarectificativaproveedorOrderByRelevanceFieldEnum];
export declare const familiaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
};
export type familiaOrderByRelevanceFieldEnum = (typeof familiaOrderByRelevanceFieldEnum)[keyof typeof familiaOrderByRelevanceFieldEnum];
export declare const seccionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly familiaId: "familiaId";
};
export type seccionOrderByRelevanceFieldEnum = (typeof seccionOrderByRelevanceFieldEnum)[keyof typeof seccionOrderByRelevanceFieldEnum];
export declare const instrumentoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly seccionId: "seccionId";
    readonly descripcion: "descripcion";
};
export type instrumentoOrderByRelevanceFieldEnum = (typeof instrumentoOrderByRelevanceFieldEnum)[keyof typeof instrumentoOrderByRelevanceFieldEnum];
export declare const integracionnextcloudOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly serverUrl: "serverUrl";
    readonly mensajeEstado: "mensajeEstado";
};
export type integracionnextcloudOrderByRelevanceFieldEnum = (typeof integracionnextcloudOrderByRelevanceFieldEnum)[keyof typeof integracionnextcloudOrderByRelevanceFieldEnum];
export declare const lineaasientoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly asientoId: "asientoId";
    readonly cuentaContableId: "cuentaContableId";
    readonly concepto: "concepto";
    readonly centroAnaliticoId: "centroAnaliticoId";
    readonly referencia: "referencia";
};
export type lineaasientoOrderByRelevanceFieldEnum = (typeof lineaasientoOrderByRelevanceFieldEnum)[keyof typeof lineaasientoOrderByRelevanceFieldEnum];
export declare const lineanominaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nominaId: "nominaId";
    readonly descripcion: "descripcion";
};
export type lineanominaOrderByRelevanceFieldEnum = (typeof lineanominaOrderByRelevanceFieldEnum)[keyof typeof lineanominaOrderByRelevanceFieldEnum];
export declare const linearepartoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly repartoId: "repartoId";
    readonly musicoId: "musicoId";
    readonly observaciones: "observaciones";
};
export type linearepartoOrderByRelevanceFieldEnum = (typeof linearepartoOrderByRelevanceFieldEnum)[keyof typeof linearepartoOrderByRelevanceFieldEnum];
export declare const liquidacioncobroOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly derechoCobroId: "derechoCobroId";
    readonly cobroId: "cobroId";
};
export type liquidacioncobroOrderByRelevanceFieldEnum = (typeof liquidacioncobroOrderByRelevanceFieldEnum)[keyof typeof liquidacioncobroOrderByRelevanceFieldEnum];
export declare const liquidacionpagoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly obligationId: "obligationId";
    readonly paymentId: "paymentId";
};
export type liquidacionpagoOrderByRelevanceFieldEnum = (typeof liquidacionpagoOrderByRelevanceFieldEnum)[keyof typeof liquidacionpagoOrderByRelevanceFieldEnum];
export declare const materiaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
};
export type materiaOrderByRelevanceFieldEnum = (typeof materiaOrderByRelevanceFieldEnum)[keyof typeof materiaOrderByRelevanceFieldEnum];
export declare const movimientofinancieroOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly cuentaFinancieraId: "cuentaFinancieraId";
    readonly concepto: "concepto";
    readonly referencia: "referencia";
    readonly conciliadoPor: "conciliadoPor";
    readonly grupoTransferencia: "grupoTransferencia";
    readonly observaciones: "observaciones";
};
export type movimientofinancieroOrderByRelevanceFieldEnum = (typeof movimientofinancieroOrderByRelevanceFieldEnum)[keyof typeof movimientofinancieroOrderByRelevanceFieldEnum];
export declare const musicoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly observaciones: "observaciones";
};
export type musicoOrderByRelevanceFieldEnum = (typeof musicoOrderByRelevanceFieldEnum)[keyof typeof musicoOrderByRelevanceFieldEnum];
export declare const nominaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly profesorId: "profesorId";
    readonly contratoId: "contratoId";
    readonly asientoId: "asientoId";
    readonly origenCalculo: "origenCalculo";
    readonly observaciones: "observaciones";
};
export type nominaOrderByRelevanceFieldEnum = (typeof nominaOrderByRelevanceFieldEnum)[keyof typeof nominaOrderByRelevanceFieldEnum];
export declare const obligacioneconomicaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly ejercicioId: "ejercicioId";
    readonly cuotaId: "cuotaId";
    readonly facturaProveedorId: "facturaProveedorId";
    readonly nominaId: "nominaId";
    readonly repartoId: "repartoId";
    readonly observaciones: "observaciones";
};
export type obligacioneconomicaOrderByRelevanceFieldEnum = (typeof obligacioneconomicaOrderByRelevanceFieldEnum)[keyof typeof obligacioneconomicaOrderByRelevanceFieldEnum];
export declare const pagoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly proveedorId: "proveedorId";
    readonly cuentaFinancieraId: "cuentaFinancieraId";
    readonly concepto: "concepto";
    readonly referencia: "referencia";
    readonly observaciones: "observaciones";
    readonly movimientoFinancieroId: "movimientoFinancieroId";
    readonly asientoId: "asientoId";
};
export type pagoOrderByRelevanceFieldEnum = (typeof pagoOrderByRelevanceFieldEnum)[keyof typeof pagoOrderByRelevanceFieldEnum];
export declare const parametrosistemaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly codigo: "codigo";
    readonly nombre: "nombre";
    readonly valor: "valor";
    readonly descripcion: "descripcion";
};
export type parametrosistemaOrderByRelevanceFieldEnum = (typeof parametrosistemaOrderByRelevanceFieldEnum)[keyof typeof parametrosistemaOrderByRelevanceFieldEnum];
export declare const periodocontableOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly ejercicioId: "ejercicioId";
    readonly nombre: "nombre";
};
export type periodocontableOrderByRelevanceFieldEnum = (typeof periodocontableOrderByRelevanceFieldEnum)[keyof typeof periodocontableOrderByRelevanceFieldEnum];
export declare const personaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly apellidos: "apellidos";
    readonly dni: "dni";
    readonly email: "email";
    readonly telefono: "telefono";
    readonly observaciones: "observaciones";
};
export type personaOrderByRelevanceFieldEnum = (typeof personaOrderByRelevanceFieldEnum)[keyof typeof personaOrderByRelevanceFieldEnum];
export declare const personaagrupacionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly agrupacionId: "agrupacionId";
    readonly observaciones: "observaciones";
};
export type personaagrupacionOrderByRelevanceFieldEnum = (typeof personaagrupacionOrderByRelevanceFieldEnum)[keyof typeof personaagrupacionOrderByRelevanceFieldEnum];
export declare const personainstrumentoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly instrumentoId: "instrumentoId";
    readonly observaciones: "observaciones";
};
export type personainstrumentoOrderByRelevanceFieldEnum = (typeof personainstrumentoOrderByRelevanceFieldEnum)[keyof typeof personainstrumentoOrderByRelevanceFieldEnum];
export declare const personarolfuncionalOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly rolFuncionalId: "rolFuncionalId";
};
export type personarolfuncionalOrderByRelevanceFieldEnum = (typeof personarolfuncionalOrderByRelevanceFieldEnum)[keyof typeof personarolfuncionalOrderByRelevanceFieldEnum];
export declare const profesorOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly observaciones: "observaciones";
};
export type profesorOrderByRelevanceFieldEnum = (typeof profesorOrderByRelevanceFieldEnum)[keyof typeof profesorOrderByRelevanceFieldEnum];
export declare const proveedorOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombreRazonSocial: "nombreRazonSocial";
    readonly nifCif: "nifCif";
    readonly tipoProveedor: "tipoProveedor";
    readonly personaContacto: "personaContacto";
    readonly telefono: "telefono";
    readonly email: "email";
    readonly direccionFiscal: "direccionFiscal";
    readonly codigoPostal: "codigoPostal";
    readonly localidad: "localidad";
    readonly provincia: "provincia";
    readonly pais: "pais";
    readonly iban: "iban";
    readonly formaPago: "formaPago";
    readonly plazoPago: "plazoPago";
    readonly observacionesPago: "observacionesPago";
    readonly observaciones: "observaciones";
};
export type proveedorOrderByRelevanceFieldEnum = (typeof proveedorOrderByRelevanceFieldEnum)[keyof typeof proveedorOrderByRelevanceFieldEnum];
export declare const remesaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly referencia: "referencia";
    readonly observaciones: "observaciones";
};
export type remesaOrderByRelevanceFieldEnum = (typeof remesaOrderByRelevanceFieldEnum)[keyof typeof remesaOrderByRelevanceFieldEnum];
export declare const remesacuotaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly remesaId: "remesaId";
    readonly cuotaId: "cuotaId";
};
export type remesacuotaOrderByRelevanceFieldEnum = (typeof remesacuotaOrderByRelevanceFieldEnum)[keyof typeof remesacuotaOrderByRelevanceFieldEnum];
export declare const repartoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly ejercicioId: "ejercicioId";
    readonly observaciones: "observaciones";
};
export type repartoOrderByRelevanceFieldEnum = (typeof repartoOrderByRelevanceFieldEnum)[keyof typeof repartoOrderByRelevanceFieldEnum];
export declare const rolfuncionalOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly codigo: "codigo";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
};
export type rolfuncionalOrderByRelevanceFieldEnum = (typeof rolfuncionalOrderByRelevanceFieldEnum)[keyof typeof rolfuncionalOrderByRelevanceFieldEnum];
export declare const sesionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly tokenHash: "tokenHash";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
};
export type sesionOrderByRelevanceFieldEnum = (typeof sesionOrderByRelevanceFieldEnum)[keyof typeof sesionOrderByRelevanceFieldEnum];
export declare const tarifaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly observaciones: "observaciones";
};
export type tarifaOrderByRelevanceFieldEnum = (typeof tarifaOrderByRelevanceFieldEnum)[keyof typeof tarifaOrderByRelevanceFieldEnum];
export declare const usuarioOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly username: "username";
    readonly passwordHash: "passwordHash";
};
export type usuarioOrderByRelevanceFieldEnum = (typeof usuarioOrderByRelevanceFieldEnum)[keyof typeof usuarioOrderByRelevanceFieldEnum];
export declare const musicoperiodoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly musicoId: "musicoId";
    readonly observaciones: "observaciones";
};
export type musicoperiodoOrderByRelevanceFieldEnum = (typeof musicoperiodoOrderByRelevanceFieldEnum)[keyof typeof musicoperiodoOrderByRelevanceFieldEnum];
export declare const alumnoperiodoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly alumnoId: "alumnoId";
    readonly observaciones: "observaciones";
};
export type alumnoperiodoOrderByRelevanceFieldEnum = (typeof alumnoperiodoOrderByRelevanceFieldEnum)[keyof typeof alumnoperiodoOrderByRelevanceFieldEnum];
export declare const profesorperiodoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly profesorId: "profesorId";
    readonly observaciones: "observaciones";
};
export type profesorperiodoOrderByRelevanceFieldEnum = (typeof profesorperiodoOrderByRelevanceFieldEnum)[keyof typeof profesorperiodoOrderByRelevanceFieldEnum];
export declare const directorperiodoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly directorId: "directorId";
    readonly observaciones: "observaciones";
};
export type directorperiodoOrderByRelevanceFieldEnum = (typeof directorperiodoOrderByRelevanceFieldEnum)[keyof typeof directorperiodoOrderByRelevanceFieldEnum];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map