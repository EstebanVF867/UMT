import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type Enumalumno_motivoBajaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.alumno_motivoBaja | Prisma.Enumalumno_motivoBajaFieldRefInput<$PrismaModel> | null;
    in?: $Enums.alumno_motivoBaja[] | null;
    notIn?: $Enums.alumno_motivoBaja[] | null;
    not?: Prisma.NestedEnumalumno_motivoBajaNullableFilter<$PrismaModel> | $Enums.alumno_motivoBaja | null;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type Enumalumno_motivoBajaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.alumno_motivoBaja | Prisma.Enumalumno_motivoBajaFieldRefInput<$PrismaModel> | null;
    in?: $Enums.alumno_motivoBaja[] | null;
    notIn?: $Enums.alumno_motivoBaja[] | null;
    not?: Prisma.NestedEnumalumno_motivoBajaNullableWithAggregatesFilter<$PrismaModel> | $Enums.alumno_motivoBaja | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumalumno_motivoBajaNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumalumno_motivoBajaNullableFilter<$PrismaModel>;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type Enumasistencia_tipoActividadFilter<$PrismaModel = never> = {
    equals?: $Enums.asistencia_tipoActividad | Prisma.Enumasistencia_tipoActividadFieldRefInput<$PrismaModel>;
    in?: $Enums.asistencia_tipoActividad[];
    notIn?: $Enums.asistencia_tipoActividad[];
    not?: Prisma.NestedEnumasistencia_tipoActividadFilter<$PrismaModel> | $Enums.asistencia_tipoActividad;
};
export type Enumasistencia_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.asistencia_estado | Prisma.Enumasistencia_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.asistencia_estado[];
    notIn?: $Enums.asistencia_estado[];
    not?: Prisma.NestedEnumasistencia_estadoFilter<$PrismaModel> | $Enums.asistencia_estado;
};
export type Enumasistencia_tipoActividadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.asistencia_tipoActividad | Prisma.Enumasistencia_tipoActividadFieldRefInput<$PrismaModel>;
    in?: $Enums.asistencia_tipoActividad[];
    notIn?: $Enums.asistencia_tipoActividad[];
    not?: Prisma.NestedEnumasistencia_tipoActividadWithAggregatesFilter<$PrismaModel> | $Enums.asistencia_tipoActividad;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumasistencia_tipoActividadFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumasistencia_tipoActividadFilter<$PrismaModel>;
};
export type Enumasistencia_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.asistencia_estado | Prisma.Enumasistencia_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.asistencia_estado[];
    notIn?: $Enums.asistencia_estado[];
    not?: Prisma.NestedEnumasistencia_estadoWithAggregatesFilter<$PrismaModel> | $Enums.asistencia_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumasistencia_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumasistencia_estadoFilter<$PrismaModel>;
};
export type Enumauditlog_actionFilter<$PrismaModel = never> = {
    equals?: $Enums.auditlog_action | Prisma.Enumauditlog_actionFieldRefInput<$PrismaModel>;
    in?: $Enums.auditlog_action[];
    notIn?: $Enums.auditlog_action[];
    not?: Prisma.NestedEnumauditlog_actionFilter<$PrismaModel> | $Enums.auditlog_action;
};
export type Enumauditlog_actionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.auditlog_action | Prisma.Enumauditlog_actionFieldRefInput<$PrismaModel>;
    in?: $Enums.auditlog_action[];
    notIn?: $Enums.auditlog_action[];
    not?: Prisma.NestedEnumauditlog_actionWithAggregatesFilter<$PrismaModel> | $Enums.auditlog_action;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumauditlog_actionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumauditlog_actionFilter<$PrismaModel>;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type Enumclase_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.clase_estado | Prisma.Enumclase_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.clase_estado[];
    notIn?: $Enums.clase_estado[];
    not?: Prisma.NestedEnumclase_estadoFilter<$PrismaModel> | $Enums.clase_estado;
};
export type Enumclase_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.clase_estado | Prisma.Enumclase_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.clase_estado[];
    notIn?: $Enums.clase_estado[];
    not?: Prisma.NestedEnumclase_estadoWithAggregatesFilter<$PrismaModel> | $Enums.clase_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumclase_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumclase_estadoFilter<$PrismaModel>;
};
export type DecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[];
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[];
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type Enumcobro_medioPagoFilter<$PrismaModel = never> = {
    equals?: $Enums.cobro_medioPago | Prisma.Enumcobro_medioPagoFieldRefInput<$PrismaModel>;
    in?: $Enums.cobro_medioPago[];
    notIn?: $Enums.cobro_medioPago[];
    not?: Prisma.NestedEnumcobro_medioPagoFilter<$PrismaModel> | $Enums.cobro_medioPago;
};
export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[];
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[];
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type Enumcobro_medioPagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cobro_medioPago | Prisma.Enumcobro_medioPagoFieldRefInput<$PrismaModel>;
    in?: $Enums.cobro_medioPago[];
    notIn?: $Enums.cobro_medioPago[];
    not?: Prisma.NestedEnumcobro_medioPagoWithAggregatesFilter<$PrismaModel> | $Enums.cobro_medioPago;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcobro_medioPagoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcobro_medioPagoFilter<$PrismaModel>;
};
export type Enumcondicioncuota_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.condicioncuota_tipo | Prisma.Enumcondicioncuota_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.condicioncuota_tipo[];
    notIn?: $Enums.condicioncuota_tipo[];
    not?: Prisma.NestedEnumcondicioncuota_tipoFilter<$PrismaModel> | $Enums.condicioncuota_tipo;
};
export type Enumcondicioncuota_motivoFilter<$PrismaModel = never> = {
    equals?: $Enums.condicioncuota_motivo | Prisma.Enumcondicioncuota_motivoFieldRefInput<$PrismaModel>;
    in?: $Enums.condicioncuota_motivo[];
    notIn?: $Enums.condicioncuota_motivo[];
    not?: Prisma.NestedEnumcondicioncuota_motivoFilter<$PrismaModel> | $Enums.condicioncuota_motivo;
};
export type Enumcondicioncuota_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.condicioncuota_tipo | Prisma.Enumcondicioncuota_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.condicioncuota_tipo[];
    notIn?: $Enums.condicioncuota_tipo[];
    not?: Prisma.NestedEnumcondicioncuota_tipoWithAggregatesFilter<$PrismaModel> | $Enums.condicioncuota_tipo;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcondicioncuota_tipoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcondicioncuota_tipoFilter<$PrismaModel>;
};
export type Enumcondicioncuota_motivoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.condicioncuota_motivo | Prisma.Enumcondicioncuota_motivoFieldRefInput<$PrismaModel>;
    in?: $Enums.condicioncuota_motivo[];
    notIn?: $Enums.condicioncuota_motivo[];
    not?: Prisma.NestedEnumcondicioncuota_motivoWithAggregatesFilter<$PrismaModel> | $Enums.condicioncuota_motivo;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcondicioncuota_motivoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcondicioncuota_motivoFilter<$PrismaModel>;
};
export type Enumcontrato_periodicidadFilter<$PrismaModel = never> = {
    equals?: $Enums.contrato_periodicidad | Prisma.Enumcontrato_periodicidadFieldRefInput<$PrismaModel>;
    in?: $Enums.contrato_periodicidad[];
    notIn?: $Enums.contrato_periodicidad[];
    not?: Prisma.NestedEnumcontrato_periodicidadFilter<$PrismaModel> | $Enums.contrato_periodicidad;
};
export type Enumcontrato_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.contrato_estado | Prisma.Enumcontrato_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.contrato_estado[];
    notIn?: $Enums.contrato_estado[];
    not?: Prisma.NestedEnumcontrato_estadoFilter<$PrismaModel> | $Enums.contrato_estado;
};
export type Enumcontrato_periodicidadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.contrato_periodicidad | Prisma.Enumcontrato_periodicidadFieldRefInput<$PrismaModel>;
    in?: $Enums.contrato_periodicidad[];
    notIn?: $Enums.contrato_periodicidad[];
    not?: Prisma.NestedEnumcontrato_periodicidadWithAggregatesFilter<$PrismaModel> | $Enums.contrato_periodicidad;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcontrato_periodicidadFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcontrato_periodicidadFilter<$PrismaModel>;
};
export type Enumcontrato_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.contrato_estado | Prisma.Enumcontrato_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.contrato_estado[];
    notIn?: $Enums.contrato_estado[];
    not?: Prisma.NestedEnumcontrato_estadoWithAggregatesFilter<$PrismaModel> | $Enums.contrato_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcontrato_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcontrato_estadoFilter<$PrismaModel>;
};
export type Enumcuentacontable_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.cuentacontable_tipo | Prisma.Enumcuentacontable_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.cuentacontable_tipo[];
    notIn?: $Enums.cuentacontable_tipo[];
    not?: Prisma.NestedEnumcuentacontable_tipoFilter<$PrismaModel> | $Enums.cuentacontable_tipo;
};
export type Enumcuentacontable_naturalezaFilter<$PrismaModel = never> = {
    equals?: $Enums.cuentacontable_naturaleza | Prisma.Enumcuentacontable_naturalezaFieldRefInput<$PrismaModel>;
    in?: $Enums.cuentacontable_naturaleza[];
    notIn?: $Enums.cuentacontable_naturaleza[];
    not?: Prisma.NestedEnumcuentacontable_naturalezaFilter<$PrismaModel> | $Enums.cuentacontable_naturaleza;
};
export type Enumcuentacontable_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cuentacontable_tipo | Prisma.Enumcuentacontable_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.cuentacontable_tipo[];
    notIn?: $Enums.cuentacontable_tipo[];
    not?: Prisma.NestedEnumcuentacontable_tipoWithAggregatesFilter<$PrismaModel> | $Enums.cuentacontable_tipo;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcuentacontable_tipoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcuentacontable_tipoFilter<$PrismaModel>;
};
export type Enumcuentacontable_naturalezaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cuentacontable_naturaleza | Prisma.Enumcuentacontable_naturalezaFieldRefInput<$PrismaModel>;
    in?: $Enums.cuentacontable_naturaleza[];
    notIn?: $Enums.cuentacontable_naturaleza[];
    not?: Prisma.NestedEnumcuentacontable_naturalezaWithAggregatesFilter<$PrismaModel> | $Enums.cuentacontable_naturaleza;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcuentacontable_naturalezaFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcuentacontable_naturalezaFilter<$PrismaModel>;
};
export type Enumcuentafinanciera_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.cuentafinanciera_tipo | Prisma.Enumcuentafinanciera_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.cuentafinanciera_tipo[];
    notIn?: $Enums.cuentafinanciera_tipo[];
    not?: Prisma.NestedEnumcuentafinanciera_tipoFilter<$PrismaModel> | $Enums.cuentafinanciera_tipo;
};
export type Enumcuentafinanciera_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cuentafinanciera_tipo | Prisma.Enumcuentafinanciera_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.cuentafinanciera_tipo[];
    notIn?: $Enums.cuentafinanciera_tipo[];
    not?: Prisma.NestedEnumcuentafinanciera_tipoWithAggregatesFilter<$PrismaModel> | $Enums.cuentafinanciera_tipo;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcuentafinanciera_tipoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcuentafinanciera_tipoFilter<$PrismaModel>;
};
export type Enumcuota_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.cuota_estado | Prisma.Enumcuota_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.cuota_estado[];
    notIn?: $Enums.cuota_estado[];
    not?: Prisma.NestedEnumcuota_estadoFilter<$PrismaModel> | $Enums.cuota_estado;
};
export type Enumcuota_motivoDevolucionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.cuota_motivoDevolucion | Prisma.Enumcuota_motivoDevolucionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.cuota_motivoDevolucion[] | null;
    notIn?: $Enums.cuota_motivoDevolucion[] | null;
    not?: Prisma.NestedEnumcuota_motivoDevolucionNullableFilter<$PrismaModel> | $Enums.cuota_motivoDevolucion | null;
};
export type Enumcuota_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cuota_estado | Prisma.Enumcuota_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.cuota_estado[];
    notIn?: $Enums.cuota_estado[];
    not?: Prisma.NestedEnumcuota_estadoWithAggregatesFilter<$PrismaModel> | $Enums.cuota_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcuota_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcuota_estadoFilter<$PrismaModel>;
};
export type Enumcuota_motivoDevolucionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cuota_motivoDevolucion | Prisma.Enumcuota_motivoDevolucionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.cuota_motivoDevolucion[] | null;
    notIn?: $Enums.cuota_motivoDevolucion[] | null;
    not?: Prisma.NestedEnumcuota_motivoDevolucionNullableWithAggregatesFilter<$PrismaModel> | $Enums.cuota_motivoDevolucion | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcuota_motivoDevolucionNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcuota_motivoDevolucionNullableFilter<$PrismaModel>;
};
export type Enumejercicio_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.ejercicio_estado | Prisma.Enumejercicio_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.ejercicio_estado[];
    notIn?: $Enums.ejercicio_estado[];
    not?: Prisma.NestedEnumejercicio_estadoFilter<$PrismaModel> | $Enums.ejercicio_estado;
};
export type Enumejercicio_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ejercicio_estado | Prisma.Enumejercicio_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.ejercicio_estado[];
    notIn?: $Enums.ejercicio_estado[];
    not?: Prisma.NestedEnumejercicio_estadoWithAggregatesFilter<$PrismaModel> | $Enums.ejercicio_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumejercicio_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumejercicio_estadoFilter<$PrismaModel>;
};
export type Enumfacturacliente_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.facturacliente_estado | Prisma.Enumfacturacliente_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.facturacliente_estado[];
    notIn?: $Enums.facturacliente_estado[];
    not?: Prisma.NestedEnumfacturacliente_estadoFilter<$PrismaModel> | $Enums.facturacliente_estado;
};
export type Enumfacturacliente_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.facturacliente_estado | Prisma.Enumfacturacliente_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.facturacliente_estado[];
    notIn?: $Enums.facturacliente_estado[];
    not?: Prisma.NestedEnumfacturacliente_estadoWithAggregatesFilter<$PrismaModel> | $Enums.facturacliente_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumfacturacliente_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumfacturacliente_estadoFilter<$PrismaModel>;
};
export type Enumfacturaproveedor_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.facturaproveedor_estado | Prisma.Enumfacturaproveedor_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.facturaproveedor_estado[];
    notIn?: $Enums.facturaproveedor_estado[];
    not?: Prisma.NestedEnumfacturaproveedor_estadoFilter<$PrismaModel> | $Enums.facturaproveedor_estado;
};
export type Enumfacturaproveedor_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.facturaproveedor_estado | Prisma.Enumfacturaproveedor_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.facturaproveedor_estado[];
    notIn?: $Enums.facturaproveedor_estado[];
    not?: Prisma.NestedEnumfacturaproveedor_estadoWithAggregatesFilter<$PrismaModel> | $Enums.facturaproveedor_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumfacturaproveedor_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumfacturaproveedor_estadoFilter<$PrismaModel>;
};
export type Enumintegracionnextcloud_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.integracionnextcloud_estado | Prisma.Enumintegracionnextcloud_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.integracionnextcloud_estado[];
    notIn?: $Enums.integracionnextcloud_estado[];
    not?: Prisma.NestedEnumintegracionnextcloud_estadoFilter<$PrismaModel> | $Enums.integracionnextcloud_estado;
};
export type Enumintegracionnextcloud_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.integracionnextcloud_estado | Prisma.Enumintegracionnextcloud_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.integracionnextcloud_estado[];
    notIn?: $Enums.integracionnextcloud_estado[];
    not?: Prisma.NestedEnumintegracionnextcloud_estadoWithAggregatesFilter<$PrismaModel> | $Enums.integracionnextcloud_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumintegracionnextcloud_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumintegracionnextcloud_estadoFilter<$PrismaModel>;
};
export type Enumlineanomina_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.lineanomina_tipo | Prisma.Enumlineanomina_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.lineanomina_tipo[];
    notIn?: $Enums.lineanomina_tipo[];
    not?: Prisma.NestedEnumlineanomina_tipoFilter<$PrismaModel> | $Enums.lineanomina_tipo;
};
export type Enumlineanomina_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.lineanomina_tipo | Prisma.Enumlineanomina_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.lineanomina_tipo[];
    notIn?: $Enums.lineanomina_tipo[];
    not?: Prisma.NestedEnumlineanomina_tipoWithAggregatesFilter<$PrismaModel> | $Enums.lineanomina_tipo;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumlineanomina_tipoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumlineanomina_tipoFilter<$PrismaModel>;
};
export type Enummateria_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.materia_tipo | Prisma.Enummateria_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.materia_tipo[];
    notIn?: $Enums.materia_tipo[];
    not?: Prisma.NestedEnummateria_tipoFilter<$PrismaModel> | $Enums.materia_tipo;
};
export type Enummateria_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.materia_tipo | Prisma.Enummateria_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.materia_tipo[];
    notIn?: $Enums.materia_tipo[];
    not?: Prisma.NestedEnummateria_tipoWithAggregatesFilter<$PrismaModel> | $Enums.materia_tipo;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnummateria_tipoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnummateria_tipoFilter<$PrismaModel>;
};
export type Enummovimientofinanciero_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.movimientofinanciero_tipo | Prisma.Enummovimientofinanciero_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.movimientofinanciero_tipo[];
    notIn?: $Enums.movimientofinanciero_tipo[];
    not?: Prisma.NestedEnummovimientofinanciero_tipoFilter<$PrismaModel> | $Enums.movimientofinanciero_tipo;
};
export type Enummovimientofinanciero_conciliacionFilter<$PrismaModel = never> = {
    equals?: $Enums.movimientofinanciero_conciliacion | Prisma.Enummovimientofinanciero_conciliacionFieldRefInput<$PrismaModel>;
    in?: $Enums.movimientofinanciero_conciliacion[];
    notIn?: $Enums.movimientofinanciero_conciliacion[];
    not?: Prisma.NestedEnummovimientofinanciero_conciliacionFilter<$PrismaModel> | $Enums.movimientofinanciero_conciliacion;
};
export type Enummovimientofinanciero_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.movimientofinanciero_tipo | Prisma.Enummovimientofinanciero_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.movimientofinanciero_tipo[];
    notIn?: $Enums.movimientofinanciero_tipo[];
    not?: Prisma.NestedEnummovimientofinanciero_tipoWithAggregatesFilter<$PrismaModel> | $Enums.movimientofinanciero_tipo;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnummovimientofinanciero_tipoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnummovimientofinanciero_tipoFilter<$PrismaModel>;
};
export type Enummovimientofinanciero_conciliacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.movimientofinanciero_conciliacion | Prisma.Enummovimientofinanciero_conciliacionFieldRefInput<$PrismaModel>;
    in?: $Enums.movimientofinanciero_conciliacion[];
    notIn?: $Enums.movimientofinanciero_conciliacion[];
    not?: Prisma.NestedEnummovimientofinanciero_conciliacionWithAggregatesFilter<$PrismaModel> | $Enums.movimientofinanciero_conciliacion;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnummovimientofinanciero_conciliacionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnummovimientofinanciero_conciliacionFilter<$PrismaModel>;
};
export type Enumnomina_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.nomina_estado | Prisma.Enumnomina_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.nomina_estado[];
    notIn?: $Enums.nomina_estado[];
    not?: Prisma.NestedEnumnomina_estadoFilter<$PrismaModel> | $Enums.nomina_estado;
};
export type Enumnomina_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.nomina_estado | Prisma.Enumnomina_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.nomina_estado[];
    notIn?: $Enums.nomina_estado[];
    not?: Prisma.NestedEnumnomina_estadoWithAggregatesFilter<$PrismaModel> | $Enums.nomina_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumnomina_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumnomina_estadoFilter<$PrismaModel>;
};
export type Enumpago_medioPagoFilter<$PrismaModel = never> = {
    equals?: $Enums.pago_medioPago | Prisma.Enumpago_medioPagoFieldRefInput<$PrismaModel>;
    in?: $Enums.pago_medioPago[];
    notIn?: $Enums.pago_medioPago[];
    not?: Prisma.NestedEnumpago_medioPagoFilter<$PrismaModel> | $Enums.pago_medioPago;
};
export type Enumpago_medioPagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pago_medioPago | Prisma.Enumpago_medioPagoFieldRefInput<$PrismaModel>;
    in?: $Enums.pago_medioPago[];
    notIn?: $Enums.pago_medioPago[];
    not?: Prisma.NestedEnumpago_medioPagoWithAggregatesFilter<$PrismaModel> | $Enums.pago_medioPago;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpago_medioPagoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpago_medioPagoFilter<$PrismaModel>;
};
export type Enumparametrosistema_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.parametrosistema_tipo | Prisma.Enumparametrosistema_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.parametrosistema_tipo[];
    notIn?: $Enums.parametrosistema_tipo[];
    not?: Prisma.NestedEnumparametrosistema_tipoFilter<$PrismaModel> | $Enums.parametrosistema_tipo;
};
export type Enumparametrosistema_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.parametrosistema_tipo | Prisma.Enumparametrosistema_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.parametrosistema_tipo[];
    notIn?: $Enums.parametrosistema_tipo[];
    not?: Prisma.NestedEnumparametrosistema_tipoWithAggregatesFilter<$PrismaModel> | $Enums.parametrosistema_tipo;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumparametrosistema_tipoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumparametrosistema_tipoFilter<$PrismaModel>;
};
export type Enumperiodocontable_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.periodocontable_estado | Prisma.Enumperiodocontable_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.periodocontable_estado[];
    notIn?: $Enums.periodocontable_estado[];
    not?: Prisma.NestedEnumperiodocontable_estadoFilter<$PrismaModel> | $Enums.periodocontable_estado;
};
export type Enumperiodocontable_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.periodocontable_estado | Prisma.Enumperiodocontable_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.periodocontable_estado[];
    notIn?: $Enums.periodocontable_estado[];
    not?: Prisma.NestedEnumperiodocontable_estadoWithAggregatesFilter<$PrismaModel> | $Enums.periodocontable_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumperiodocontable_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumperiodocontable_estadoFilter<$PrismaModel>;
};
export type Enumprofesor_motivoBajaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.profesor_motivoBaja | Prisma.Enumprofesor_motivoBajaFieldRefInput<$PrismaModel> | null;
    in?: $Enums.profesor_motivoBaja[] | null;
    notIn?: $Enums.profesor_motivoBaja[] | null;
    not?: Prisma.NestedEnumprofesor_motivoBajaNullableFilter<$PrismaModel> | $Enums.profesor_motivoBaja | null;
};
export type Enumprofesor_motivoBajaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.profesor_motivoBaja | Prisma.Enumprofesor_motivoBajaFieldRefInput<$PrismaModel> | null;
    in?: $Enums.profesor_motivoBaja[] | null;
    notIn?: $Enums.profesor_motivoBaja[] | null;
    not?: Prisma.NestedEnumprofesor_motivoBajaNullableWithAggregatesFilter<$PrismaModel> | $Enums.profesor_motivoBaja | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumprofesor_motivoBajaNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumprofesor_motivoBajaNullableFilter<$PrismaModel>;
};
export type Enumremesa_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.remesa_estado | Prisma.Enumremesa_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.remesa_estado[];
    notIn?: $Enums.remesa_estado[];
    not?: Prisma.NestedEnumremesa_estadoFilter<$PrismaModel> | $Enums.remesa_estado;
};
export type Enumremesa_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.remesa_estado | Prisma.Enumremesa_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.remesa_estado[];
    notIn?: $Enums.remesa_estado[];
    not?: Prisma.NestedEnumremesa_estadoWithAggregatesFilter<$PrismaModel> | $Enums.remesa_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumremesa_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumremesa_estadoFilter<$PrismaModel>;
};
export type Enumreparto_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.reparto_estado | Prisma.Enumreparto_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.reparto_estado[];
    notIn?: $Enums.reparto_estado[];
    not?: Prisma.NestedEnumreparto_estadoFilter<$PrismaModel> | $Enums.reparto_estado;
};
export type Enumreparto_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.reparto_estado | Prisma.Enumreparto_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.reparto_estado[];
    notIn?: $Enums.reparto_estado[];
    not?: Prisma.NestedEnumreparto_estadoWithAggregatesFilter<$PrismaModel> | $Enums.reparto_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumreparto_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumreparto_estadoFilter<$PrismaModel>;
};
export type Enummusicoperiodo_motivoBajaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.musicoperiodo_motivoBaja | Prisma.Enummusicoperiodo_motivoBajaFieldRefInput<$PrismaModel> | null;
    in?: $Enums.musicoperiodo_motivoBaja[] | null;
    notIn?: $Enums.musicoperiodo_motivoBaja[] | null;
    not?: Prisma.NestedEnummusicoperiodo_motivoBajaNullableFilter<$PrismaModel> | $Enums.musicoperiodo_motivoBaja | null;
};
export type Enummusicoperiodo_motivoBajaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.musicoperiodo_motivoBaja | Prisma.Enummusicoperiodo_motivoBajaFieldRefInput<$PrismaModel> | null;
    in?: $Enums.musicoperiodo_motivoBaja[] | null;
    notIn?: $Enums.musicoperiodo_motivoBaja[] | null;
    not?: Prisma.NestedEnummusicoperiodo_motivoBajaNullableWithAggregatesFilter<$PrismaModel> | $Enums.musicoperiodo_motivoBaja | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnummusicoperiodo_motivoBajaNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnummusicoperiodo_motivoBajaNullableFilter<$PrismaModel>;
};
export type Enumdirectorperiodo_motivoBajaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.directorperiodo_motivoBaja | Prisma.Enumdirectorperiodo_motivoBajaFieldRefInput<$PrismaModel> | null;
    in?: $Enums.directorperiodo_motivoBaja[] | null;
    notIn?: $Enums.directorperiodo_motivoBaja[] | null;
    not?: Prisma.NestedEnumdirectorperiodo_motivoBajaNullableFilter<$PrismaModel> | $Enums.directorperiodo_motivoBaja | null;
};
export type Enumdirectorperiodo_motivoBajaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.directorperiodo_motivoBaja | Prisma.Enumdirectorperiodo_motivoBajaFieldRefInput<$PrismaModel> | null;
    in?: $Enums.directorperiodo_motivoBaja[] | null;
    notIn?: $Enums.directorperiodo_motivoBaja[] | null;
    not?: Prisma.NestedEnumdirectorperiodo_motivoBajaNullableWithAggregatesFilter<$PrismaModel> | $Enums.directorperiodo_motivoBaja | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumdirectorperiodo_motivoBajaNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumdirectorperiodo_motivoBajaNullableFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | null;
    notIn?: string[] | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel> | null;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | null;
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[] | null;
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalNullableFilter<$PrismaModel>;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedEnumalumno_motivoBajaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.alumno_motivoBaja | Prisma.Enumalumno_motivoBajaFieldRefInput<$PrismaModel> | null;
    in?: $Enums.alumno_motivoBaja[] | null;
    notIn?: $Enums.alumno_motivoBaja[] | null;
    not?: Prisma.NestedEnumalumno_motivoBajaNullableFilter<$PrismaModel> | $Enums.alumno_motivoBaja | null;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | null;
    notIn?: Date[] | string[] | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedEnumalumno_motivoBajaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.alumno_motivoBaja | Prisma.Enumalumno_motivoBajaFieldRefInput<$PrismaModel> | null;
    in?: $Enums.alumno_motivoBaja[] | null;
    notIn?: $Enums.alumno_motivoBaja[] | null;
    not?: Prisma.NestedEnumalumno_motivoBajaNullableWithAggregatesFilter<$PrismaModel> | $Enums.alumno_motivoBaja | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumalumno_motivoBajaNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumalumno_motivoBajaNullableFilter<$PrismaModel>;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedEnumasistencia_tipoActividadFilter<$PrismaModel = never> = {
    equals?: $Enums.asistencia_tipoActividad | Prisma.Enumasistencia_tipoActividadFieldRefInput<$PrismaModel>;
    in?: $Enums.asistencia_tipoActividad[];
    notIn?: $Enums.asistencia_tipoActividad[];
    not?: Prisma.NestedEnumasistencia_tipoActividadFilter<$PrismaModel> | $Enums.asistencia_tipoActividad;
};
export type NestedEnumasistencia_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.asistencia_estado | Prisma.Enumasistencia_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.asistencia_estado[];
    notIn?: $Enums.asistencia_estado[];
    not?: Prisma.NestedEnumasistencia_estadoFilter<$PrismaModel> | $Enums.asistencia_estado;
};
export type NestedEnumasistencia_tipoActividadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.asistencia_tipoActividad | Prisma.Enumasistencia_tipoActividadFieldRefInput<$PrismaModel>;
    in?: $Enums.asistencia_tipoActividad[];
    notIn?: $Enums.asistencia_tipoActividad[];
    not?: Prisma.NestedEnumasistencia_tipoActividadWithAggregatesFilter<$PrismaModel> | $Enums.asistencia_tipoActividad;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumasistencia_tipoActividadFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumasistencia_tipoActividadFilter<$PrismaModel>;
};
export type NestedEnumasistencia_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.asistencia_estado | Prisma.Enumasistencia_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.asistencia_estado[];
    notIn?: $Enums.asistencia_estado[];
    not?: Prisma.NestedEnumasistencia_estadoWithAggregatesFilter<$PrismaModel> | $Enums.asistencia_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumasistencia_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumasistencia_estadoFilter<$PrismaModel>;
};
export type NestedEnumauditlog_actionFilter<$PrismaModel = never> = {
    equals?: $Enums.auditlog_action | Prisma.Enumauditlog_actionFieldRefInput<$PrismaModel>;
    in?: $Enums.auditlog_action[];
    notIn?: $Enums.auditlog_action[];
    not?: Prisma.NestedEnumauditlog_actionFilter<$PrismaModel> | $Enums.auditlog_action;
};
export type NestedEnumauditlog_actionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.auditlog_action | Prisma.Enumauditlog_actionFieldRefInput<$PrismaModel>;
    in?: $Enums.auditlog_action[];
    notIn?: $Enums.auditlog_action[];
    not?: Prisma.NestedEnumauditlog_actionWithAggregatesFilter<$PrismaModel> | $Enums.auditlog_action;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumauditlog_actionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumauditlog_actionFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | null;
    notIn?: number[] | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedEnumclase_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.clase_estado | Prisma.Enumclase_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.clase_estado[];
    notIn?: $Enums.clase_estado[];
    not?: Prisma.NestedEnumclase_estadoFilter<$PrismaModel> | $Enums.clase_estado;
};
export type NestedEnumclase_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.clase_estado | Prisma.Enumclase_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.clase_estado[];
    notIn?: $Enums.clase_estado[];
    not?: Prisma.NestedEnumclase_estadoWithAggregatesFilter<$PrismaModel> | $Enums.clase_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumclase_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumclase_estadoFilter<$PrismaModel>;
};
export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[];
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[];
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NestedEnumcobro_medioPagoFilter<$PrismaModel = never> = {
    equals?: $Enums.cobro_medioPago | Prisma.Enumcobro_medioPagoFieldRefInput<$PrismaModel>;
    in?: $Enums.cobro_medioPago[];
    notIn?: $Enums.cobro_medioPago[];
    not?: Prisma.NestedEnumcobro_medioPagoFilter<$PrismaModel> | $Enums.cobro_medioPago;
};
export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    in?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[];
    notIn?: runtime.Decimal[] | runtime.DecimalJsLike[] | number[] | string[];
    lt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    lte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gt?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    gte?: runtime.Decimal | runtime.DecimalJsLike | number | string | Prisma.DecimalFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDecimalWithAggregatesFilter<$PrismaModel> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _sum?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _min?: Prisma.NestedDecimalFilter<$PrismaModel>;
    _max?: Prisma.NestedDecimalFilter<$PrismaModel>;
};
export type NestedEnumcobro_medioPagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cobro_medioPago | Prisma.Enumcobro_medioPagoFieldRefInput<$PrismaModel>;
    in?: $Enums.cobro_medioPago[];
    notIn?: $Enums.cobro_medioPago[];
    not?: Prisma.NestedEnumcobro_medioPagoWithAggregatesFilter<$PrismaModel> | $Enums.cobro_medioPago;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcobro_medioPagoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcobro_medioPagoFilter<$PrismaModel>;
};
export type NestedEnumcondicioncuota_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.condicioncuota_tipo | Prisma.Enumcondicioncuota_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.condicioncuota_tipo[];
    notIn?: $Enums.condicioncuota_tipo[];
    not?: Prisma.NestedEnumcondicioncuota_tipoFilter<$PrismaModel> | $Enums.condicioncuota_tipo;
};
export type NestedEnumcondicioncuota_motivoFilter<$PrismaModel = never> = {
    equals?: $Enums.condicioncuota_motivo | Prisma.Enumcondicioncuota_motivoFieldRefInput<$PrismaModel>;
    in?: $Enums.condicioncuota_motivo[];
    notIn?: $Enums.condicioncuota_motivo[];
    not?: Prisma.NestedEnumcondicioncuota_motivoFilter<$PrismaModel> | $Enums.condicioncuota_motivo;
};
export type NestedEnumcondicioncuota_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.condicioncuota_tipo | Prisma.Enumcondicioncuota_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.condicioncuota_tipo[];
    notIn?: $Enums.condicioncuota_tipo[];
    not?: Prisma.NestedEnumcondicioncuota_tipoWithAggregatesFilter<$PrismaModel> | $Enums.condicioncuota_tipo;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcondicioncuota_tipoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcondicioncuota_tipoFilter<$PrismaModel>;
};
export type NestedEnumcondicioncuota_motivoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.condicioncuota_motivo | Prisma.Enumcondicioncuota_motivoFieldRefInput<$PrismaModel>;
    in?: $Enums.condicioncuota_motivo[];
    notIn?: $Enums.condicioncuota_motivo[];
    not?: Prisma.NestedEnumcondicioncuota_motivoWithAggregatesFilter<$PrismaModel> | $Enums.condicioncuota_motivo;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcondicioncuota_motivoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcondicioncuota_motivoFilter<$PrismaModel>;
};
export type NestedEnumcontrato_periodicidadFilter<$PrismaModel = never> = {
    equals?: $Enums.contrato_periodicidad | Prisma.Enumcontrato_periodicidadFieldRefInput<$PrismaModel>;
    in?: $Enums.contrato_periodicidad[];
    notIn?: $Enums.contrato_periodicidad[];
    not?: Prisma.NestedEnumcontrato_periodicidadFilter<$PrismaModel> | $Enums.contrato_periodicidad;
};
export type NestedEnumcontrato_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.contrato_estado | Prisma.Enumcontrato_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.contrato_estado[];
    notIn?: $Enums.contrato_estado[];
    not?: Prisma.NestedEnumcontrato_estadoFilter<$PrismaModel> | $Enums.contrato_estado;
};
export type NestedEnumcontrato_periodicidadWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.contrato_periodicidad | Prisma.Enumcontrato_periodicidadFieldRefInput<$PrismaModel>;
    in?: $Enums.contrato_periodicidad[];
    notIn?: $Enums.contrato_periodicidad[];
    not?: Prisma.NestedEnumcontrato_periodicidadWithAggregatesFilter<$PrismaModel> | $Enums.contrato_periodicidad;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcontrato_periodicidadFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcontrato_periodicidadFilter<$PrismaModel>;
};
export type NestedEnumcontrato_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.contrato_estado | Prisma.Enumcontrato_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.contrato_estado[];
    notIn?: $Enums.contrato_estado[];
    not?: Prisma.NestedEnumcontrato_estadoWithAggregatesFilter<$PrismaModel> | $Enums.contrato_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcontrato_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcontrato_estadoFilter<$PrismaModel>;
};
export type NestedEnumcuentacontable_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.cuentacontable_tipo | Prisma.Enumcuentacontable_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.cuentacontable_tipo[];
    notIn?: $Enums.cuentacontable_tipo[];
    not?: Prisma.NestedEnumcuentacontable_tipoFilter<$PrismaModel> | $Enums.cuentacontable_tipo;
};
export type NestedEnumcuentacontable_naturalezaFilter<$PrismaModel = never> = {
    equals?: $Enums.cuentacontable_naturaleza | Prisma.Enumcuentacontable_naturalezaFieldRefInput<$PrismaModel>;
    in?: $Enums.cuentacontable_naturaleza[];
    notIn?: $Enums.cuentacontable_naturaleza[];
    not?: Prisma.NestedEnumcuentacontable_naturalezaFilter<$PrismaModel> | $Enums.cuentacontable_naturaleza;
};
export type NestedEnumcuentacontable_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cuentacontable_tipo | Prisma.Enumcuentacontable_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.cuentacontable_tipo[];
    notIn?: $Enums.cuentacontable_tipo[];
    not?: Prisma.NestedEnumcuentacontable_tipoWithAggregatesFilter<$PrismaModel> | $Enums.cuentacontable_tipo;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcuentacontable_tipoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcuentacontable_tipoFilter<$PrismaModel>;
};
export type NestedEnumcuentacontable_naturalezaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cuentacontable_naturaleza | Prisma.Enumcuentacontable_naturalezaFieldRefInput<$PrismaModel>;
    in?: $Enums.cuentacontable_naturaleza[];
    notIn?: $Enums.cuentacontable_naturaleza[];
    not?: Prisma.NestedEnumcuentacontable_naturalezaWithAggregatesFilter<$PrismaModel> | $Enums.cuentacontable_naturaleza;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcuentacontable_naturalezaFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcuentacontable_naturalezaFilter<$PrismaModel>;
};
export type NestedEnumcuentafinanciera_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.cuentafinanciera_tipo | Prisma.Enumcuentafinanciera_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.cuentafinanciera_tipo[];
    notIn?: $Enums.cuentafinanciera_tipo[];
    not?: Prisma.NestedEnumcuentafinanciera_tipoFilter<$PrismaModel> | $Enums.cuentafinanciera_tipo;
};
export type NestedEnumcuentafinanciera_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cuentafinanciera_tipo | Prisma.Enumcuentafinanciera_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.cuentafinanciera_tipo[];
    notIn?: $Enums.cuentafinanciera_tipo[];
    not?: Prisma.NestedEnumcuentafinanciera_tipoWithAggregatesFilter<$PrismaModel> | $Enums.cuentafinanciera_tipo;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcuentafinanciera_tipoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcuentafinanciera_tipoFilter<$PrismaModel>;
};
export type NestedEnumcuota_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.cuota_estado | Prisma.Enumcuota_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.cuota_estado[];
    notIn?: $Enums.cuota_estado[];
    not?: Prisma.NestedEnumcuota_estadoFilter<$PrismaModel> | $Enums.cuota_estado;
};
export type NestedEnumcuota_motivoDevolucionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.cuota_motivoDevolucion | Prisma.Enumcuota_motivoDevolucionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.cuota_motivoDevolucion[] | null;
    notIn?: $Enums.cuota_motivoDevolucion[] | null;
    not?: Prisma.NestedEnumcuota_motivoDevolucionNullableFilter<$PrismaModel> | $Enums.cuota_motivoDevolucion | null;
};
export type NestedEnumcuota_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cuota_estado | Prisma.Enumcuota_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.cuota_estado[];
    notIn?: $Enums.cuota_estado[];
    not?: Prisma.NestedEnumcuota_estadoWithAggregatesFilter<$PrismaModel> | $Enums.cuota_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcuota_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcuota_estadoFilter<$PrismaModel>;
};
export type NestedEnumcuota_motivoDevolucionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cuota_motivoDevolucion | Prisma.Enumcuota_motivoDevolucionFieldRefInput<$PrismaModel> | null;
    in?: $Enums.cuota_motivoDevolucion[] | null;
    notIn?: $Enums.cuota_motivoDevolucion[] | null;
    not?: Prisma.NestedEnumcuota_motivoDevolucionNullableWithAggregatesFilter<$PrismaModel> | $Enums.cuota_motivoDevolucion | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumcuota_motivoDevolucionNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumcuota_motivoDevolucionNullableFilter<$PrismaModel>;
};
export type NestedEnumejercicio_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.ejercicio_estado | Prisma.Enumejercicio_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.ejercicio_estado[];
    notIn?: $Enums.ejercicio_estado[];
    not?: Prisma.NestedEnumejercicio_estadoFilter<$PrismaModel> | $Enums.ejercicio_estado;
};
export type NestedEnumejercicio_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ejercicio_estado | Prisma.Enumejercicio_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.ejercicio_estado[];
    notIn?: $Enums.ejercicio_estado[];
    not?: Prisma.NestedEnumejercicio_estadoWithAggregatesFilter<$PrismaModel> | $Enums.ejercicio_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumejercicio_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumejercicio_estadoFilter<$PrismaModel>;
};
export type NestedEnumfacturacliente_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.facturacliente_estado | Prisma.Enumfacturacliente_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.facturacliente_estado[];
    notIn?: $Enums.facturacliente_estado[];
    not?: Prisma.NestedEnumfacturacliente_estadoFilter<$PrismaModel> | $Enums.facturacliente_estado;
};
export type NestedEnumfacturacliente_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.facturacliente_estado | Prisma.Enumfacturacliente_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.facturacliente_estado[];
    notIn?: $Enums.facturacliente_estado[];
    not?: Prisma.NestedEnumfacturacliente_estadoWithAggregatesFilter<$PrismaModel> | $Enums.facturacliente_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumfacturacliente_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumfacturacliente_estadoFilter<$PrismaModel>;
};
export type NestedEnumfacturaproveedor_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.facturaproveedor_estado | Prisma.Enumfacturaproveedor_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.facturaproveedor_estado[];
    notIn?: $Enums.facturaproveedor_estado[];
    not?: Prisma.NestedEnumfacturaproveedor_estadoFilter<$PrismaModel> | $Enums.facturaproveedor_estado;
};
export type NestedEnumfacturaproveedor_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.facturaproveedor_estado | Prisma.Enumfacturaproveedor_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.facturaproveedor_estado[];
    notIn?: $Enums.facturaproveedor_estado[];
    not?: Prisma.NestedEnumfacturaproveedor_estadoWithAggregatesFilter<$PrismaModel> | $Enums.facturaproveedor_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumfacturaproveedor_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumfacturaproveedor_estadoFilter<$PrismaModel>;
};
export type NestedEnumintegracionnextcloud_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.integracionnextcloud_estado | Prisma.Enumintegracionnextcloud_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.integracionnextcloud_estado[];
    notIn?: $Enums.integracionnextcloud_estado[];
    not?: Prisma.NestedEnumintegracionnextcloud_estadoFilter<$PrismaModel> | $Enums.integracionnextcloud_estado;
};
export type NestedEnumintegracionnextcloud_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.integracionnextcloud_estado | Prisma.Enumintegracionnextcloud_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.integracionnextcloud_estado[];
    notIn?: $Enums.integracionnextcloud_estado[];
    not?: Prisma.NestedEnumintegracionnextcloud_estadoWithAggregatesFilter<$PrismaModel> | $Enums.integracionnextcloud_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumintegracionnextcloud_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumintegracionnextcloud_estadoFilter<$PrismaModel>;
};
export type NestedEnumlineanomina_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.lineanomina_tipo | Prisma.Enumlineanomina_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.lineanomina_tipo[];
    notIn?: $Enums.lineanomina_tipo[];
    not?: Prisma.NestedEnumlineanomina_tipoFilter<$PrismaModel> | $Enums.lineanomina_tipo;
};
export type NestedEnumlineanomina_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.lineanomina_tipo | Prisma.Enumlineanomina_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.lineanomina_tipo[];
    notIn?: $Enums.lineanomina_tipo[];
    not?: Prisma.NestedEnumlineanomina_tipoWithAggregatesFilter<$PrismaModel> | $Enums.lineanomina_tipo;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumlineanomina_tipoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumlineanomina_tipoFilter<$PrismaModel>;
};
export type NestedEnummateria_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.materia_tipo | Prisma.Enummateria_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.materia_tipo[];
    notIn?: $Enums.materia_tipo[];
    not?: Prisma.NestedEnummateria_tipoFilter<$PrismaModel> | $Enums.materia_tipo;
};
export type NestedEnummateria_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.materia_tipo | Prisma.Enummateria_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.materia_tipo[];
    notIn?: $Enums.materia_tipo[];
    not?: Prisma.NestedEnummateria_tipoWithAggregatesFilter<$PrismaModel> | $Enums.materia_tipo;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnummateria_tipoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnummateria_tipoFilter<$PrismaModel>;
};
export type NestedEnummovimientofinanciero_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.movimientofinanciero_tipo | Prisma.Enummovimientofinanciero_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.movimientofinanciero_tipo[];
    notIn?: $Enums.movimientofinanciero_tipo[];
    not?: Prisma.NestedEnummovimientofinanciero_tipoFilter<$PrismaModel> | $Enums.movimientofinanciero_tipo;
};
export type NestedEnummovimientofinanciero_conciliacionFilter<$PrismaModel = never> = {
    equals?: $Enums.movimientofinanciero_conciliacion | Prisma.Enummovimientofinanciero_conciliacionFieldRefInput<$PrismaModel>;
    in?: $Enums.movimientofinanciero_conciliacion[];
    notIn?: $Enums.movimientofinanciero_conciliacion[];
    not?: Prisma.NestedEnummovimientofinanciero_conciliacionFilter<$PrismaModel> | $Enums.movimientofinanciero_conciliacion;
};
export type NestedEnummovimientofinanciero_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.movimientofinanciero_tipo | Prisma.Enummovimientofinanciero_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.movimientofinanciero_tipo[];
    notIn?: $Enums.movimientofinanciero_tipo[];
    not?: Prisma.NestedEnummovimientofinanciero_tipoWithAggregatesFilter<$PrismaModel> | $Enums.movimientofinanciero_tipo;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnummovimientofinanciero_tipoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnummovimientofinanciero_tipoFilter<$PrismaModel>;
};
export type NestedEnummovimientofinanciero_conciliacionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.movimientofinanciero_conciliacion | Prisma.Enummovimientofinanciero_conciliacionFieldRefInput<$PrismaModel>;
    in?: $Enums.movimientofinanciero_conciliacion[];
    notIn?: $Enums.movimientofinanciero_conciliacion[];
    not?: Prisma.NestedEnummovimientofinanciero_conciliacionWithAggregatesFilter<$PrismaModel> | $Enums.movimientofinanciero_conciliacion;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnummovimientofinanciero_conciliacionFilter<$PrismaModel>;
    _max?: Prisma.NestedEnummovimientofinanciero_conciliacionFilter<$PrismaModel>;
};
export type NestedEnumnomina_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.nomina_estado | Prisma.Enumnomina_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.nomina_estado[];
    notIn?: $Enums.nomina_estado[];
    not?: Prisma.NestedEnumnomina_estadoFilter<$PrismaModel> | $Enums.nomina_estado;
};
export type NestedEnumnomina_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.nomina_estado | Prisma.Enumnomina_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.nomina_estado[];
    notIn?: $Enums.nomina_estado[];
    not?: Prisma.NestedEnumnomina_estadoWithAggregatesFilter<$PrismaModel> | $Enums.nomina_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumnomina_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumnomina_estadoFilter<$PrismaModel>;
};
export type NestedEnumpago_medioPagoFilter<$PrismaModel = never> = {
    equals?: $Enums.pago_medioPago | Prisma.Enumpago_medioPagoFieldRefInput<$PrismaModel>;
    in?: $Enums.pago_medioPago[];
    notIn?: $Enums.pago_medioPago[];
    not?: Prisma.NestedEnumpago_medioPagoFilter<$PrismaModel> | $Enums.pago_medioPago;
};
export type NestedEnumpago_medioPagoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.pago_medioPago | Prisma.Enumpago_medioPagoFieldRefInput<$PrismaModel>;
    in?: $Enums.pago_medioPago[];
    notIn?: $Enums.pago_medioPago[];
    not?: Prisma.NestedEnumpago_medioPagoWithAggregatesFilter<$PrismaModel> | $Enums.pago_medioPago;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumpago_medioPagoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumpago_medioPagoFilter<$PrismaModel>;
};
export type NestedEnumparametrosistema_tipoFilter<$PrismaModel = never> = {
    equals?: $Enums.parametrosistema_tipo | Prisma.Enumparametrosistema_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.parametrosistema_tipo[];
    notIn?: $Enums.parametrosistema_tipo[];
    not?: Prisma.NestedEnumparametrosistema_tipoFilter<$PrismaModel> | $Enums.parametrosistema_tipo;
};
export type NestedEnumparametrosistema_tipoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.parametrosistema_tipo | Prisma.Enumparametrosistema_tipoFieldRefInput<$PrismaModel>;
    in?: $Enums.parametrosistema_tipo[];
    notIn?: $Enums.parametrosistema_tipo[];
    not?: Prisma.NestedEnumparametrosistema_tipoWithAggregatesFilter<$PrismaModel> | $Enums.parametrosistema_tipo;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumparametrosistema_tipoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumparametrosistema_tipoFilter<$PrismaModel>;
};
export type NestedEnumperiodocontable_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.periodocontable_estado | Prisma.Enumperiodocontable_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.periodocontable_estado[];
    notIn?: $Enums.periodocontable_estado[];
    not?: Prisma.NestedEnumperiodocontable_estadoFilter<$PrismaModel> | $Enums.periodocontable_estado;
};
export type NestedEnumperiodocontable_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.periodocontable_estado | Prisma.Enumperiodocontable_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.periodocontable_estado[];
    notIn?: $Enums.periodocontable_estado[];
    not?: Prisma.NestedEnumperiodocontable_estadoWithAggregatesFilter<$PrismaModel> | $Enums.periodocontable_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumperiodocontable_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumperiodocontable_estadoFilter<$PrismaModel>;
};
export type NestedEnumprofesor_motivoBajaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.profesor_motivoBaja | Prisma.Enumprofesor_motivoBajaFieldRefInput<$PrismaModel> | null;
    in?: $Enums.profesor_motivoBaja[] | null;
    notIn?: $Enums.profesor_motivoBaja[] | null;
    not?: Prisma.NestedEnumprofesor_motivoBajaNullableFilter<$PrismaModel> | $Enums.profesor_motivoBaja | null;
};
export type NestedEnumprofesor_motivoBajaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.profesor_motivoBaja | Prisma.Enumprofesor_motivoBajaFieldRefInput<$PrismaModel> | null;
    in?: $Enums.profesor_motivoBaja[] | null;
    notIn?: $Enums.profesor_motivoBaja[] | null;
    not?: Prisma.NestedEnumprofesor_motivoBajaNullableWithAggregatesFilter<$PrismaModel> | $Enums.profesor_motivoBaja | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumprofesor_motivoBajaNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumprofesor_motivoBajaNullableFilter<$PrismaModel>;
};
export type NestedEnumremesa_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.remesa_estado | Prisma.Enumremesa_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.remesa_estado[];
    notIn?: $Enums.remesa_estado[];
    not?: Prisma.NestedEnumremesa_estadoFilter<$PrismaModel> | $Enums.remesa_estado;
};
export type NestedEnumremesa_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.remesa_estado | Prisma.Enumremesa_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.remesa_estado[];
    notIn?: $Enums.remesa_estado[];
    not?: Prisma.NestedEnumremesa_estadoWithAggregatesFilter<$PrismaModel> | $Enums.remesa_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumremesa_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumremesa_estadoFilter<$PrismaModel>;
};
export type NestedEnumreparto_estadoFilter<$PrismaModel = never> = {
    equals?: $Enums.reparto_estado | Prisma.Enumreparto_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.reparto_estado[];
    notIn?: $Enums.reparto_estado[];
    not?: Prisma.NestedEnumreparto_estadoFilter<$PrismaModel> | $Enums.reparto_estado;
};
export type NestedEnumreparto_estadoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.reparto_estado | Prisma.Enumreparto_estadoFieldRefInput<$PrismaModel>;
    in?: $Enums.reparto_estado[];
    notIn?: $Enums.reparto_estado[];
    not?: Prisma.NestedEnumreparto_estadoWithAggregatesFilter<$PrismaModel> | $Enums.reparto_estado;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumreparto_estadoFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumreparto_estadoFilter<$PrismaModel>;
};
export type NestedEnummusicoperiodo_motivoBajaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.musicoperiodo_motivoBaja | Prisma.Enummusicoperiodo_motivoBajaFieldRefInput<$PrismaModel> | null;
    in?: $Enums.musicoperiodo_motivoBaja[] | null;
    notIn?: $Enums.musicoperiodo_motivoBaja[] | null;
    not?: Prisma.NestedEnummusicoperiodo_motivoBajaNullableFilter<$PrismaModel> | $Enums.musicoperiodo_motivoBaja | null;
};
export type NestedEnummusicoperiodo_motivoBajaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.musicoperiodo_motivoBaja | Prisma.Enummusicoperiodo_motivoBajaFieldRefInput<$PrismaModel> | null;
    in?: $Enums.musicoperiodo_motivoBaja[] | null;
    notIn?: $Enums.musicoperiodo_motivoBaja[] | null;
    not?: Prisma.NestedEnummusicoperiodo_motivoBajaNullableWithAggregatesFilter<$PrismaModel> | $Enums.musicoperiodo_motivoBaja | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnummusicoperiodo_motivoBajaNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnummusicoperiodo_motivoBajaNullableFilter<$PrismaModel>;
};
export type NestedEnumdirectorperiodo_motivoBajaNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.directorperiodo_motivoBaja | Prisma.Enumdirectorperiodo_motivoBajaFieldRefInput<$PrismaModel> | null;
    in?: $Enums.directorperiodo_motivoBaja[] | null;
    notIn?: $Enums.directorperiodo_motivoBaja[] | null;
    not?: Prisma.NestedEnumdirectorperiodo_motivoBajaNullableFilter<$PrismaModel> | $Enums.directorperiodo_motivoBaja | null;
};
export type NestedEnumdirectorperiodo_motivoBajaNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.directorperiodo_motivoBaja | Prisma.Enumdirectorperiodo_motivoBajaFieldRefInput<$PrismaModel> | null;
    in?: $Enums.directorperiodo_motivoBaja[] | null;
    notIn?: $Enums.directorperiodo_motivoBaja[] | null;
    not?: Prisma.NestedEnumdirectorperiodo_motivoBajaNullableWithAggregatesFilter<$PrismaModel> | $Enums.directorperiodo_motivoBaja | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumdirectorperiodo_motivoBajaNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumdirectorperiodo_motivoBajaNullableFilter<$PrismaModel>;
};
//# sourceMappingURL=commonInputTypes.d.ts.map