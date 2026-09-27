export declare const cuentafinanciera_tipo: {
    readonly BANCO: "BANCO";
    readonly EFECTIVO: "EFECTIVO";
    readonly OTRO: "OTRO";
};
export type cuentafinanciera_tipo = (typeof cuentafinanciera_tipo)[keyof typeof cuentafinanciera_tipo];
export declare const auditlog_action: {
    readonly CREATE: "CREATE";
    readonly UPDATE: "UPDATE";
    readonly DELETE: "DELETE";
    readonly RESTORE: "RESTORE";
    readonly LOGIN: "LOGIN";
    readonly LOGOUT: "LOGOUT";
    readonly LOGIN_FAILED: "LOGIN_FAILED";
    readonly EXPORT: "EXPORT";
};
export type auditlog_action = (typeof auditlog_action)[keyof typeof auditlog_action];
export declare const condicioncuota_tipo: {
    readonly DESCUENTO_FIJO: "DESCUENTO_FIJO";
    readonly DESCUENTO_PORCENTUAL: "DESCUENTO_PORCENTUAL";
    readonly CUOTA_ESPECIAL: "CUOTA_ESPECIAL";
    readonly EXENCION: "EXENCION";
    readonly RECARGO: "RECARGO";
    readonly AJUSTE_PUNTUAL: "AJUSTE_PUNTUAL";
};
export type condicioncuota_tipo = (typeof condicioncuota_tipo)[keyof typeof condicioncuota_tipo];
export declare const integracionnextcloud_estado: {
    readonly CONFIGURADA: "CONFIGURADA";
    readonly ACTIVA: "ACTIVA";
    readonly ERROR: "ERROR";
    readonly INACTIVA: "INACTIVA";
};
export type integracionnextcloud_estado = (typeof integracionnextcloud_estado)[keyof typeof integracionnextcloud_estado];
export declare const lineanomina_tipo: {
    readonly COMPLEMENTO: "COMPLEMENTO";
    readonly PAGA_EXTRAORDINARIA: "PAGA_EXTRAORDINARIA";
    readonly ANTICIPO: "ANTICIPO";
    readonly DIETA: "DIETA";
    readonly OTROS_CONCEPTOS_RETRIBUTIVOS: "OTROS_CONCEPTOS_RETRIBUTIVOS";
    readonly OTROS_DESCUENTOS: "OTROS_DESCUENTOS";
};
export type lineanomina_tipo = (typeof lineanomina_tipo)[keyof typeof lineanomina_tipo];
export declare const materia_tipo: {
    readonly INSTRUMENTO: "INSTRUMENTO";
    readonly LENGUAJE_MUSICAL: "LENGUAJE_MUSICAL";
    readonly OTRA: "OTRA";
};
export type materia_tipo = (typeof materia_tipo)[keyof typeof materia_tipo];
export declare const remesa_estado: {
    readonly PREPARADA: "PREPARADA";
    readonly ENVIADA: "ENVIADA";
    readonly PROCESADA: "PROCESADA";
    readonly CANCELADA: "CANCELADA";
};
export type remesa_estado = (typeof remesa_estado)[keyof typeof remesa_estado];
export declare const asistencia_tipoActividad: {
    readonly ENSAYO: "ENSAYO";
    readonly ACTUACION: "ACTUACION";
    readonly OTRA: "OTRA";
};
export type asistencia_tipoActividad = (typeof asistencia_tipoActividad)[keyof typeof asistencia_tipoActividad];
export declare const cuentacontable_tipo: {
    readonly ACTIVO: "ACTIVO";
    readonly PASIVO: "PASIVO";
    readonly PATRIMONIO_NETO: "PATRIMONIO_NETO";
    readonly INGRESO: "INGRESO";
    readonly GASTO: "GASTO";
};
export type cuentacontable_tipo = (typeof cuentacontable_tipo)[keyof typeof cuentacontable_tipo];
export declare const movimientofinanciero_tipo: {
    readonly INGRESO: "INGRESO";
    readonly GASTO: "GASTO";
    readonly TRANSFERENCIA: "TRANSFERENCIA";
    readonly AJUSTE: "AJUSTE";
};
export type movimientofinanciero_tipo = (typeof movimientofinanciero_tipo)[keyof typeof movimientofinanciero_tipo];
export declare const parametrosistema_tipo: {
    readonly STRING: "STRING";
    readonly INTEGER: "INTEGER";
    readonly DECIMAL: "DECIMAL";
    readonly BOOLEAN: "BOOLEAN";
    readonly DATE: "DATE";
    readonly JSON: "JSON";
};
export type parametrosistema_tipo = (typeof parametrosistema_tipo)[keyof typeof parametrosistema_tipo];
export declare const reparto_estado: {
    readonly BORRADOR: "BORRADOR";
    readonly CERRADO: "CERRADO";
};
export type reparto_estado = (typeof reparto_estado)[keyof typeof reparto_estado];
export declare const alumno_motivoBaja: {
    readonly FINALIZACION_ESTUDIOS: "FINALIZACION_ESTUDIOS";
    readonly BAJA_VOLUNTARIA: "BAJA_VOLUNTARIA";
    readonly TRASLADO: "TRASLADO";
    readonly ABANDONO: "ABANDONO";
    readonly OTRO: "OTRO";
};
export type alumno_motivoBaja = (typeof alumno_motivoBaja)[keyof typeof alumno_motivoBaja];
export declare const asistencia_estado: {
    readonly PROVISIONAL: "PROVISIONAL";
    readonly ASISTIO: "ASISTIO";
    readonly NO_CONSTA: "NO_CONSTA";
};
export type asistencia_estado = (typeof asistencia_estado)[keyof typeof asistencia_estado];
export declare const cuentacontable_naturaleza: {
    readonly DEUDORA: "DEUDORA";
    readonly ACREEDORA: "ACREEDORA";
};
export type cuentacontable_naturaleza = (typeof cuentacontable_naturaleza)[keyof typeof cuentacontable_naturaleza];
export declare const ejercicio_estado: {
    readonly ABIERTO: "ABIERTO";
    readonly CERRADO: "CERRADO";
};
export type ejercicio_estado = (typeof ejercicio_estado)[keyof typeof ejercicio_estado];
export declare const profesor_motivoBaja: {
    readonly FIN_RELACION: "FIN_RELACION";
    readonly BAJA_VOLUNTARIA: "BAJA_VOLUNTARIA";
    readonly JUBILACION: "JUBILACION";
    readonly OTRO: "OTRO";
};
export type profesor_motivoBaja = (typeof profesor_motivoBaja)[keyof typeof profesor_motivoBaja];
export declare const cobro_medioPago: {
    readonly TRANSFERENCIA: "TRANSFERENCIA";
    readonly EFECTIVO: "EFECTIVO";
    readonly DOMICILIACION: "DOMICILIACION";
    readonly OTRO: "OTRO";
};
export type cobro_medioPago = (typeof cobro_medioPago)[keyof typeof cobro_medioPago];
export declare const contrato_periodicidad: {
    readonly MENSUAL: "MENSUAL";
    readonly SEMANAL: "SEMANAL";
    readonly QUINCENAL: "QUINCENAL";
    readonly OTRA: "OTRA";
};
export type contrato_periodicidad = (typeof contrato_periodicidad)[keyof typeof contrato_periodicidad];
export declare const pago_medioPago: {
    readonly TRANSFERENCIA: "TRANSFERENCIA";
    readonly EFECTIVO: "EFECTIVO";
    readonly DOMICILIACION: "DOMICILIACION";
    readonly OTRO: "OTRO";
};
export type pago_medioPago = (typeof pago_medioPago)[keyof typeof pago_medioPago];
export declare const periodocontable_estado: {
    readonly ABIERTO: "ABIERTO";
    readonly CERRADO: "CERRADO";
};
export type periodocontable_estado = (typeof periodocontable_estado)[keyof typeof periodocontable_estado];
export declare const condicioncuota_motivo: {
    readonly BONIFICACION: "BONIFICACION";
    readonly SITUACION_FAMILIAR: "SITUACION_FAMILIAR";
    readonly BECA: "BECA";
    readonly AUSENCIA_JUSTIFICADA: "AUSENCIA_JUSTIFICADA";
    readonly AUTORIZACION_DIRECTIVA: "AUTORIZACION_DIRECTIVA";
    readonly ERROR_REGULARIZACION: "ERROR_REGULARIZACION";
    readonly OTRO: "OTRO";
};
export type condicioncuota_motivo = (typeof condicioncuota_motivo)[keyof typeof condicioncuota_motivo];
export declare const contrato_estado: {
    readonly ACTIVO: "ACTIVO";
    readonly FINALIZADO: "FINALIZADO";
    readonly ANULADO: "ANULADO";
};
export type contrato_estado = (typeof contrato_estado)[keyof typeof contrato_estado];
export declare const movimientofinanciero_conciliacion: {
    readonly PENDIENTE: "PENDIENTE";
    readonly CONCILIADO: "CONCILIADO";
};
export type movimientofinanciero_conciliacion = (typeof movimientofinanciero_conciliacion)[keyof typeof movimientofinanciero_conciliacion];
export declare const cuota_estado: {
    readonly PENDIENTE: "PENDIENTE";
    readonly ENVIADA_BANCO: "ENVIADA_BANCO";
    readonly PARCIAL: "PARCIAL";
    readonly PAGADA: "PAGADA";
    readonly DEVUELTA: "DEVUELTA";
    readonly ANULADA: "ANULADA";
};
export type cuota_estado = (typeof cuota_estado)[keyof typeof cuota_estado];
export declare const clase_estado: {
    readonly ACTIVA: "ACTIVA";
    readonly FINALIZADA: "FINALIZADA";
    readonly CANCELADA: "CANCELADA";
};
export type clase_estado = (typeof clase_estado)[keyof typeof clase_estado];
export declare const cuota_motivoDevolucion: {
    readonly FONDOS_INSUFICIENTES: "FONDOS_INSUFICIENTES";
    readonly CUENTA_INCORRECTA: "CUENTA_INCORRECTA";
    readonly RECIBO_RECHAZADO: "RECIBO_RECHAZADO";
    readonly CUENTA_CANCELADA: "CUENTA_CANCELADA";
    readonly DEVOLUCION_SOLICITADA: "DEVOLUCION_SOLICITADA";
    readonly OTROS: "OTROS";
};
export type cuota_motivoDevolucion = (typeof cuota_motivoDevolucion)[keyof typeof cuota_motivoDevolucion];
export declare const facturaproveedor_estado: {
    readonly PENDIENTE: "PENDIENTE";
    readonly CONTABILIZADA: "CONTABILIZADA";
    readonly PARCIALMENTE_PAGADA: "PARCIALMENTE_PAGADA";
    readonly PAGADA: "PAGADA";
    readonly ANULADA: "ANULADA";
};
export type facturaproveedor_estado = (typeof facturaproveedor_estado)[keyof typeof facturaproveedor_estado];
export declare const facturacliente_estado: {
    readonly PENDIENTE: "PENDIENTE";
    readonly CONTABILIZADA: "CONTABILIZADA";
    readonly PARCIALMENTE_COBRADA: "PARCIALMENTE_COBRADA";
    readonly COBRADA: "COBRADA";
    readonly ANULADA: "ANULADA";
};
export type facturacliente_estado = (typeof facturacliente_estado)[keyof typeof facturacliente_estado];
export declare const nomina_estado: {
    readonly BORRADOR: "BORRADOR";
    readonly CALCULADA: "CALCULADA";
    readonly REVISADA: "REVISADA";
    readonly ENVIADA_GESTORIA: "ENVIADA_GESTORIA";
    readonly CONFIRMADA: "CONFIRMADA";
    readonly CONTABILIZADA: "CONTABILIZADA";
    readonly ANULADA: "ANULADA";
};
export type nomina_estado = (typeof nomina_estado)[keyof typeof nomina_estado];
export declare const musicoperiodo_motivoBaja: {
    readonly BAJA_VOLUNTARIA: "BAJA_VOLUNTARIA";
    readonly DEJA_DE_PERTENECER_UMT: "DEJA_DE_PERTENECER_UMT";
    readonly OTRO: "OTRO";
};
export type musicoperiodo_motivoBaja = (typeof musicoperiodo_motivoBaja)[keyof typeof musicoperiodo_motivoBaja];
export declare const directorperiodo_motivoBaja: {
    readonly BAJA_VOLUNTARIA: "BAJA_VOLUNTARIA";
    readonly FIN_RELACION: "FIN_RELACION";
    readonly OTRO: "OTRO";
};
export type directorperiodo_motivoBaja = (typeof directorperiodo_motivoBaja)[keyof typeof directorperiodo_motivoBaja];
//# sourceMappingURL=enums.d.ts.map