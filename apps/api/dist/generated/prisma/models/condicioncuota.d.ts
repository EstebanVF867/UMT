import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model condicioncuota
 *
 */
export type condicioncuotaModel = runtime.Types.Result.DefaultSelection<Prisma.$condicioncuotaPayload>;
export type AggregateCondicioncuota = {
    _count: CondicioncuotaCountAggregateOutputType | null;
    _avg: CondicioncuotaAvgAggregateOutputType | null;
    _sum: CondicioncuotaSumAggregateOutputType | null;
    _min: CondicioncuotaMinAggregateOutputType | null;
    _max: CondicioncuotaMaxAggregateOutputType | null;
};
export type CondicioncuotaAvgAggregateOutputType = {
    valor: runtime.Decimal | null;
};
export type CondicioncuotaSumAggregateOutputType = {
    valor: runtime.Decimal | null;
};
export type CondicioncuotaMinAggregateOutputType = {
    id: string | null;
    alumnoId: string | null;
    tipo: $Enums.condicioncuota_tipo | null;
    valor: runtime.Decimal | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    motivo: $Enums.condicioncuota_motivo | null;
    observaciones: string | null;
    activa: boolean | null;
    autorizadaPor: string | null;
    fechaAutorizacion: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CondicioncuotaMaxAggregateOutputType = {
    id: string | null;
    alumnoId: string | null;
    tipo: $Enums.condicioncuota_tipo | null;
    valor: runtime.Decimal | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    motivo: $Enums.condicioncuota_motivo | null;
    observaciones: string | null;
    activa: boolean | null;
    autorizadaPor: string | null;
    fechaAutorizacion: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CondicioncuotaCountAggregateOutputType = {
    id: number;
    alumnoId: number;
    tipo: number;
    valor: number;
    fechaInicio: number;
    fechaFin: number;
    motivo: number;
    observaciones: number;
    activa: number;
    autorizadaPor: number;
    fechaAutorizacion: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CondicioncuotaAvgAggregateInputType = {
    valor?: true;
};
export type CondicioncuotaSumAggregateInputType = {
    valor?: true;
};
export type CondicioncuotaMinAggregateInputType = {
    id?: true;
    alumnoId?: true;
    tipo?: true;
    valor?: true;
    fechaInicio?: true;
    fechaFin?: true;
    motivo?: true;
    observaciones?: true;
    activa?: true;
    autorizadaPor?: true;
    fechaAutorizacion?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CondicioncuotaMaxAggregateInputType = {
    id?: true;
    alumnoId?: true;
    tipo?: true;
    valor?: true;
    fechaInicio?: true;
    fechaFin?: true;
    motivo?: true;
    observaciones?: true;
    activa?: true;
    autorizadaPor?: true;
    fechaAutorizacion?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CondicioncuotaCountAggregateInputType = {
    id?: true;
    alumnoId?: true;
    tipo?: true;
    valor?: true;
    fechaInicio?: true;
    fechaFin?: true;
    motivo?: true;
    observaciones?: true;
    activa?: true;
    autorizadaPor?: true;
    fechaAutorizacion?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CondicioncuotaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which condicioncuota to aggregate.
     */
    where?: Prisma.condicioncuotaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of condicioncuotas to fetch.
     */
    orderBy?: Prisma.condicioncuotaOrderByWithRelationInput | Prisma.condicioncuotaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.condicioncuotaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` condicioncuotas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` condicioncuotas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned condicioncuotas
    **/
    _count?: true | CondicioncuotaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CondicioncuotaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CondicioncuotaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CondicioncuotaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CondicioncuotaMaxAggregateInputType;
};
export type GetCondicioncuotaAggregateType<T extends CondicioncuotaAggregateArgs> = {
    [P in keyof T & keyof AggregateCondicioncuota]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCondicioncuota[P]> : Prisma.GetScalarType<T[P], AggregateCondicioncuota[P]>;
};
export type condicioncuotaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.condicioncuotaWhereInput;
    orderBy?: Prisma.condicioncuotaOrderByWithAggregationInput | Prisma.condicioncuotaOrderByWithAggregationInput[];
    by: Prisma.CondicioncuotaScalarFieldEnum[] | Prisma.CondicioncuotaScalarFieldEnum;
    having?: Prisma.condicioncuotaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CondicioncuotaCountAggregateInputType | true;
    _avg?: CondicioncuotaAvgAggregateInputType;
    _sum?: CondicioncuotaSumAggregateInputType;
    _min?: CondicioncuotaMinAggregateInputType;
    _max?: CondicioncuotaMaxAggregateInputType;
};
export type CondicioncuotaGroupByOutputType = {
    id: string;
    alumnoId: string;
    tipo: $Enums.condicioncuota_tipo;
    valor: runtime.Decimal;
    fechaInicio: Date;
    fechaFin: Date | null;
    motivo: $Enums.condicioncuota_motivo;
    observaciones: string | null;
    activa: boolean;
    autorizadaPor: string | null;
    fechaAutorizacion: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CondicioncuotaCountAggregateOutputType | null;
    _avg: CondicioncuotaAvgAggregateOutputType | null;
    _sum: CondicioncuotaSumAggregateOutputType | null;
    _min: CondicioncuotaMinAggregateOutputType | null;
    _max: CondicioncuotaMaxAggregateOutputType | null;
};
export type GetCondicioncuotaGroupByPayload<T extends condicioncuotaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CondicioncuotaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CondicioncuotaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CondicioncuotaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CondicioncuotaGroupByOutputType[P]>;
}>>;
export type condicioncuotaWhereInput = {
    AND?: Prisma.condicioncuotaWhereInput | Prisma.condicioncuotaWhereInput[];
    OR?: Prisma.condicioncuotaWhereInput[];
    NOT?: Prisma.condicioncuotaWhereInput | Prisma.condicioncuotaWhereInput[];
    id?: Prisma.StringFilter<"condicioncuota"> | string;
    alumnoId?: Prisma.StringFilter<"condicioncuota"> | string;
    tipo?: Prisma.Enumcondicioncuota_tipoFilter<"condicioncuota"> | $Enums.condicioncuota_tipo;
    valor?: Prisma.DecimalFilter<"condicioncuota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio?: Prisma.DateTimeFilter<"condicioncuota"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"condicioncuota"> | Date | string | null;
    motivo?: Prisma.Enumcondicioncuota_motivoFilter<"condicioncuota"> | $Enums.condicioncuota_motivo;
    observaciones?: Prisma.StringNullableFilter<"condicioncuota"> | string | null;
    activa?: Prisma.BoolFilter<"condicioncuota"> | boolean;
    autorizadaPor?: Prisma.StringNullableFilter<"condicioncuota"> | string | null;
    fechaAutorizacion?: Prisma.DateTimeNullableFilter<"condicioncuota"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"condicioncuota"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"condicioncuota"> | Date | string;
    alumno?: Prisma.XOR<Prisma.AlumnoScalarRelationFilter, Prisma.alumnoWhereInput>;
};
export type condicioncuotaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    alumnoId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    autorizadaPor?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaAutorizacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    alumno?: Prisma.alumnoOrderByWithRelationInput;
    _relevance?: Prisma.condicioncuotaOrderByRelevanceInput;
};
export type condicioncuotaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.condicioncuotaWhereInput | Prisma.condicioncuotaWhereInput[];
    OR?: Prisma.condicioncuotaWhereInput[];
    NOT?: Prisma.condicioncuotaWhereInput | Prisma.condicioncuotaWhereInput[];
    alumnoId?: Prisma.StringFilter<"condicioncuota"> | string;
    tipo?: Prisma.Enumcondicioncuota_tipoFilter<"condicioncuota"> | $Enums.condicioncuota_tipo;
    valor?: Prisma.DecimalFilter<"condicioncuota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio?: Prisma.DateTimeFilter<"condicioncuota"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"condicioncuota"> | Date | string | null;
    motivo?: Prisma.Enumcondicioncuota_motivoFilter<"condicioncuota"> | $Enums.condicioncuota_motivo;
    observaciones?: Prisma.StringNullableFilter<"condicioncuota"> | string | null;
    activa?: Prisma.BoolFilter<"condicioncuota"> | boolean;
    autorizadaPor?: Prisma.StringNullableFilter<"condicioncuota"> | string | null;
    fechaAutorizacion?: Prisma.DateTimeNullableFilter<"condicioncuota"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"condicioncuota"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"condicioncuota"> | Date | string;
    alumno?: Prisma.XOR<Prisma.AlumnoScalarRelationFilter, Prisma.alumnoWhereInput>;
}, "id">;
export type condicioncuotaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    alumnoId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    autorizadaPor?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaAutorizacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.condicioncuotaCountOrderByAggregateInput;
    _avg?: Prisma.condicioncuotaAvgOrderByAggregateInput;
    _max?: Prisma.condicioncuotaMaxOrderByAggregateInput;
    _min?: Prisma.condicioncuotaMinOrderByAggregateInput;
    _sum?: Prisma.condicioncuotaSumOrderByAggregateInput;
};
export type condicioncuotaScalarWhereWithAggregatesInput = {
    AND?: Prisma.condicioncuotaScalarWhereWithAggregatesInput | Prisma.condicioncuotaScalarWhereWithAggregatesInput[];
    OR?: Prisma.condicioncuotaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.condicioncuotaScalarWhereWithAggregatesInput | Prisma.condicioncuotaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"condicioncuota"> | string;
    alumnoId?: Prisma.StringWithAggregatesFilter<"condicioncuota"> | string;
    tipo?: Prisma.Enumcondicioncuota_tipoWithAggregatesFilter<"condicioncuota"> | $Enums.condicioncuota_tipo;
    valor?: Prisma.DecimalWithAggregatesFilter<"condicioncuota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio?: Prisma.DateTimeWithAggregatesFilter<"condicioncuota"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableWithAggregatesFilter<"condicioncuota"> | Date | string | null;
    motivo?: Prisma.Enumcondicioncuota_motivoWithAggregatesFilter<"condicioncuota"> | $Enums.condicioncuota_motivo;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"condicioncuota"> | string | null;
    activa?: Prisma.BoolWithAggregatesFilter<"condicioncuota"> | boolean;
    autorizadaPor?: Prisma.StringNullableWithAggregatesFilter<"condicioncuota"> | string | null;
    fechaAutorizacion?: Prisma.DateTimeNullableWithAggregatesFilter<"condicioncuota"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"condicioncuota"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"condicioncuota"> | Date | string;
};
export type condicioncuotaCreateInput = {
    id: string;
    tipo: $Enums.condicioncuota_tipo;
    valor: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivo: $Enums.condicioncuota_motivo;
    observaciones?: string | null;
    activa?: boolean;
    autorizadaPor?: string | null;
    fechaAutorizacion?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno: Prisma.alumnoCreateNestedOneWithoutCondicioncuotaInput;
};
export type condicioncuotaUncheckedCreateInput = {
    id: string;
    alumnoId: string;
    tipo: $Enums.condicioncuota_tipo;
    valor: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivo: $Enums.condicioncuota_motivo;
    observaciones?: string | null;
    activa?: boolean;
    autorizadaPor?: string | null;
    fechaAutorizacion?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type condicioncuotaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcondicioncuota_tipoFieldUpdateOperationsInput | $Enums.condicioncuota_tipo;
    valor?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivo?: Prisma.Enumcondicioncuota_motivoFieldUpdateOperationsInput | $Enums.condicioncuota_motivo;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    autorizadaPor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaAutorizacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUpdateOneRequiredWithoutCondicioncuotaNestedInput;
};
export type condicioncuotaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alumnoId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcondicioncuota_tipoFieldUpdateOperationsInput | $Enums.condicioncuota_tipo;
    valor?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivo?: Prisma.Enumcondicioncuota_motivoFieldUpdateOperationsInput | $Enums.condicioncuota_motivo;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    autorizadaPor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaAutorizacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type condicioncuotaCreateManyInput = {
    id: string;
    alumnoId: string;
    tipo: $Enums.condicioncuota_tipo;
    valor: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivo: $Enums.condicioncuota_motivo;
    observaciones?: string | null;
    activa?: boolean;
    autorizadaPor?: string | null;
    fechaAutorizacion?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type condicioncuotaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcondicioncuota_tipoFieldUpdateOperationsInput | $Enums.condicioncuota_tipo;
    valor?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivo?: Prisma.Enumcondicioncuota_motivoFieldUpdateOperationsInput | $Enums.condicioncuota_motivo;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    autorizadaPor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaAutorizacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type condicioncuotaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alumnoId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcondicioncuota_tipoFieldUpdateOperationsInput | $Enums.condicioncuota_tipo;
    valor?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivo?: Prisma.Enumcondicioncuota_motivoFieldUpdateOperationsInput | $Enums.condicioncuota_motivo;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    autorizadaPor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaAutorizacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CondicioncuotaListRelationFilter = {
    every?: Prisma.condicioncuotaWhereInput;
    some?: Prisma.condicioncuotaWhereInput;
    none?: Prisma.condicioncuotaWhereInput;
};
export type condicioncuotaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type condicioncuotaOrderByRelevanceInput = {
    fields: Prisma.condicioncuotaOrderByRelevanceFieldEnum | Prisma.condicioncuotaOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type condicioncuotaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alumnoId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    autorizadaPor?: Prisma.SortOrder;
    fechaAutorizacion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type condicioncuotaAvgOrderByAggregateInput = {
    valor?: Prisma.SortOrder;
};
export type condicioncuotaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alumnoId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    autorizadaPor?: Prisma.SortOrder;
    fechaAutorizacion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type condicioncuotaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alumnoId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    autorizadaPor?: Prisma.SortOrder;
    fechaAutorizacion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type condicioncuotaSumOrderByAggregateInput = {
    valor?: Prisma.SortOrder;
};
export type condicioncuotaCreateNestedManyWithoutAlumnoInput = {
    create?: Prisma.XOR<Prisma.condicioncuotaCreateWithoutAlumnoInput, Prisma.condicioncuotaUncheckedCreateWithoutAlumnoInput> | Prisma.condicioncuotaCreateWithoutAlumnoInput[] | Prisma.condicioncuotaUncheckedCreateWithoutAlumnoInput[];
    connectOrCreate?: Prisma.condicioncuotaCreateOrConnectWithoutAlumnoInput | Prisma.condicioncuotaCreateOrConnectWithoutAlumnoInput[];
    createMany?: Prisma.condicioncuotaCreateManyAlumnoInputEnvelope;
    connect?: Prisma.condicioncuotaWhereUniqueInput | Prisma.condicioncuotaWhereUniqueInput[];
};
export type condicioncuotaUncheckedCreateNestedManyWithoutAlumnoInput = {
    create?: Prisma.XOR<Prisma.condicioncuotaCreateWithoutAlumnoInput, Prisma.condicioncuotaUncheckedCreateWithoutAlumnoInput> | Prisma.condicioncuotaCreateWithoutAlumnoInput[] | Prisma.condicioncuotaUncheckedCreateWithoutAlumnoInput[];
    connectOrCreate?: Prisma.condicioncuotaCreateOrConnectWithoutAlumnoInput | Prisma.condicioncuotaCreateOrConnectWithoutAlumnoInput[];
    createMany?: Prisma.condicioncuotaCreateManyAlumnoInputEnvelope;
    connect?: Prisma.condicioncuotaWhereUniqueInput | Prisma.condicioncuotaWhereUniqueInput[];
};
export type condicioncuotaUpdateManyWithoutAlumnoNestedInput = {
    create?: Prisma.XOR<Prisma.condicioncuotaCreateWithoutAlumnoInput, Prisma.condicioncuotaUncheckedCreateWithoutAlumnoInput> | Prisma.condicioncuotaCreateWithoutAlumnoInput[] | Prisma.condicioncuotaUncheckedCreateWithoutAlumnoInput[];
    connectOrCreate?: Prisma.condicioncuotaCreateOrConnectWithoutAlumnoInput | Prisma.condicioncuotaCreateOrConnectWithoutAlumnoInput[];
    upsert?: Prisma.condicioncuotaUpsertWithWhereUniqueWithoutAlumnoInput | Prisma.condicioncuotaUpsertWithWhereUniqueWithoutAlumnoInput[];
    createMany?: Prisma.condicioncuotaCreateManyAlumnoInputEnvelope;
    set?: Prisma.condicioncuotaWhereUniqueInput | Prisma.condicioncuotaWhereUniqueInput[];
    disconnect?: Prisma.condicioncuotaWhereUniqueInput | Prisma.condicioncuotaWhereUniqueInput[];
    delete?: Prisma.condicioncuotaWhereUniqueInput | Prisma.condicioncuotaWhereUniqueInput[];
    connect?: Prisma.condicioncuotaWhereUniqueInput | Prisma.condicioncuotaWhereUniqueInput[];
    update?: Prisma.condicioncuotaUpdateWithWhereUniqueWithoutAlumnoInput | Prisma.condicioncuotaUpdateWithWhereUniqueWithoutAlumnoInput[];
    updateMany?: Prisma.condicioncuotaUpdateManyWithWhereWithoutAlumnoInput | Prisma.condicioncuotaUpdateManyWithWhereWithoutAlumnoInput[];
    deleteMany?: Prisma.condicioncuotaScalarWhereInput | Prisma.condicioncuotaScalarWhereInput[];
};
export type condicioncuotaUncheckedUpdateManyWithoutAlumnoNestedInput = {
    create?: Prisma.XOR<Prisma.condicioncuotaCreateWithoutAlumnoInput, Prisma.condicioncuotaUncheckedCreateWithoutAlumnoInput> | Prisma.condicioncuotaCreateWithoutAlumnoInput[] | Prisma.condicioncuotaUncheckedCreateWithoutAlumnoInput[];
    connectOrCreate?: Prisma.condicioncuotaCreateOrConnectWithoutAlumnoInput | Prisma.condicioncuotaCreateOrConnectWithoutAlumnoInput[];
    upsert?: Prisma.condicioncuotaUpsertWithWhereUniqueWithoutAlumnoInput | Prisma.condicioncuotaUpsertWithWhereUniqueWithoutAlumnoInput[];
    createMany?: Prisma.condicioncuotaCreateManyAlumnoInputEnvelope;
    set?: Prisma.condicioncuotaWhereUniqueInput | Prisma.condicioncuotaWhereUniqueInput[];
    disconnect?: Prisma.condicioncuotaWhereUniqueInput | Prisma.condicioncuotaWhereUniqueInput[];
    delete?: Prisma.condicioncuotaWhereUniqueInput | Prisma.condicioncuotaWhereUniqueInput[];
    connect?: Prisma.condicioncuotaWhereUniqueInput | Prisma.condicioncuotaWhereUniqueInput[];
    update?: Prisma.condicioncuotaUpdateWithWhereUniqueWithoutAlumnoInput | Prisma.condicioncuotaUpdateWithWhereUniqueWithoutAlumnoInput[];
    updateMany?: Prisma.condicioncuotaUpdateManyWithWhereWithoutAlumnoInput | Prisma.condicioncuotaUpdateManyWithWhereWithoutAlumnoInput[];
    deleteMany?: Prisma.condicioncuotaScalarWhereInput | Prisma.condicioncuotaScalarWhereInput[];
};
export type Enumcondicioncuota_tipoFieldUpdateOperationsInput = {
    set?: $Enums.condicioncuota_tipo;
};
export type Enumcondicioncuota_motivoFieldUpdateOperationsInput = {
    set?: $Enums.condicioncuota_motivo;
};
export type condicioncuotaCreateWithoutAlumnoInput = {
    id: string;
    tipo: $Enums.condicioncuota_tipo;
    valor: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivo: $Enums.condicioncuota_motivo;
    observaciones?: string | null;
    activa?: boolean;
    autorizadaPor?: string | null;
    fechaAutorizacion?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type condicioncuotaUncheckedCreateWithoutAlumnoInput = {
    id: string;
    tipo: $Enums.condicioncuota_tipo;
    valor: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivo: $Enums.condicioncuota_motivo;
    observaciones?: string | null;
    activa?: boolean;
    autorizadaPor?: string | null;
    fechaAutorizacion?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type condicioncuotaCreateOrConnectWithoutAlumnoInput = {
    where: Prisma.condicioncuotaWhereUniqueInput;
    create: Prisma.XOR<Prisma.condicioncuotaCreateWithoutAlumnoInput, Prisma.condicioncuotaUncheckedCreateWithoutAlumnoInput>;
};
export type condicioncuotaCreateManyAlumnoInputEnvelope = {
    data: Prisma.condicioncuotaCreateManyAlumnoInput | Prisma.condicioncuotaCreateManyAlumnoInput[];
    skipDuplicates?: boolean;
};
export type condicioncuotaUpsertWithWhereUniqueWithoutAlumnoInput = {
    where: Prisma.condicioncuotaWhereUniqueInput;
    update: Prisma.XOR<Prisma.condicioncuotaUpdateWithoutAlumnoInput, Prisma.condicioncuotaUncheckedUpdateWithoutAlumnoInput>;
    create: Prisma.XOR<Prisma.condicioncuotaCreateWithoutAlumnoInput, Prisma.condicioncuotaUncheckedCreateWithoutAlumnoInput>;
};
export type condicioncuotaUpdateWithWhereUniqueWithoutAlumnoInput = {
    where: Prisma.condicioncuotaWhereUniqueInput;
    data: Prisma.XOR<Prisma.condicioncuotaUpdateWithoutAlumnoInput, Prisma.condicioncuotaUncheckedUpdateWithoutAlumnoInput>;
};
export type condicioncuotaUpdateManyWithWhereWithoutAlumnoInput = {
    where: Prisma.condicioncuotaScalarWhereInput;
    data: Prisma.XOR<Prisma.condicioncuotaUpdateManyMutationInput, Prisma.condicioncuotaUncheckedUpdateManyWithoutAlumnoInput>;
};
export type condicioncuotaScalarWhereInput = {
    AND?: Prisma.condicioncuotaScalarWhereInput | Prisma.condicioncuotaScalarWhereInput[];
    OR?: Prisma.condicioncuotaScalarWhereInput[];
    NOT?: Prisma.condicioncuotaScalarWhereInput | Prisma.condicioncuotaScalarWhereInput[];
    id?: Prisma.StringFilter<"condicioncuota"> | string;
    alumnoId?: Prisma.StringFilter<"condicioncuota"> | string;
    tipo?: Prisma.Enumcondicioncuota_tipoFilter<"condicioncuota"> | $Enums.condicioncuota_tipo;
    valor?: Prisma.DecimalFilter<"condicioncuota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio?: Prisma.DateTimeFilter<"condicioncuota"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"condicioncuota"> | Date | string | null;
    motivo?: Prisma.Enumcondicioncuota_motivoFilter<"condicioncuota"> | $Enums.condicioncuota_motivo;
    observaciones?: Prisma.StringNullableFilter<"condicioncuota"> | string | null;
    activa?: Prisma.BoolFilter<"condicioncuota"> | boolean;
    autorizadaPor?: Prisma.StringNullableFilter<"condicioncuota"> | string | null;
    fechaAutorizacion?: Prisma.DateTimeNullableFilter<"condicioncuota"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"condicioncuota"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"condicioncuota"> | Date | string;
};
export type condicioncuotaCreateManyAlumnoInput = {
    id: string;
    tipo: $Enums.condicioncuota_tipo;
    valor: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivo: $Enums.condicioncuota_motivo;
    observaciones?: string | null;
    activa?: boolean;
    autorizadaPor?: string | null;
    fechaAutorizacion?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type condicioncuotaUpdateWithoutAlumnoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcondicioncuota_tipoFieldUpdateOperationsInput | $Enums.condicioncuota_tipo;
    valor?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivo?: Prisma.Enumcondicioncuota_motivoFieldUpdateOperationsInput | $Enums.condicioncuota_motivo;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    autorizadaPor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaAutorizacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type condicioncuotaUncheckedUpdateWithoutAlumnoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcondicioncuota_tipoFieldUpdateOperationsInput | $Enums.condicioncuota_tipo;
    valor?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivo?: Prisma.Enumcondicioncuota_motivoFieldUpdateOperationsInput | $Enums.condicioncuota_motivo;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    autorizadaPor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaAutorizacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type condicioncuotaUncheckedUpdateManyWithoutAlumnoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcondicioncuota_tipoFieldUpdateOperationsInput | $Enums.condicioncuota_tipo;
    valor?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivo?: Prisma.Enumcondicioncuota_motivoFieldUpdateOperationsInput | $Enums.condicioncuota_motivo;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    autorizadaPor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaAutorizacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type condicioncuotaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    alumnoId?: boolean;
    tipo?: boolean;
    valor?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    motivo?: boolean;
    observaciones?: boolean;
    activa?: boolean;
    autorizadaPor?: boolean;
    fechaAutorizacion?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    alumno?: boolean | Prisma.alumnoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["condicioncuota"]>;
export type condicioncuotaSelectScalar = {
    id?: boolean;
    alumnoId?: boolean;
    tipo?: boolean;
    valor?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    motivo?: boolean;
    observaciones?: boolean;
    activa?: boolean;
    autorizadaPor?: boolean;
    fechaAutorizacion?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type condicioncuotaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "alumnoId" | "tipo" | "valor" | "fechaInicio" | "fechaFin" | "motivo" | "observaciones" | "activa" | "autorizadaPor" | "fechaAutorizacion" | "createdAt" | "updatedAt", ExtArgs["result"]["condicioncuota"]>;
export type condicioncuotaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    alumno?: boolean | Prisma.alumnoDefaultArgs<ExtArgs>;
};
export type $condicioncuotaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "condicioncuota";
    objects: {
        alumno: Prisma.$alumnoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        alumnoId: string;
        tipo: $Enums.condicioncuota_tipo;
        valor: runtime.Decimal;
        fechaInicio: Date;
        fechaFin: Date | null;
        motivo: $Enums.condicioncuota_motivo;
        observaciones: string | null;
        activa: boolean;
        autorizadaPor: string | null;
        fechaAutorizacion: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["condicioncuota"]>;
    composites: {};
};
export type condicioncuotaGetPayload<S extends boolean | null | undefined | condicioncuotaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$condicioncuotaPayload, S>;
export type condicioncuotaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<condicioncuotaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CondicioncuotaCountAggregateInputType | true;
};
export interface condicioncuotaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['condicioncuota'];
        meta: {
            name: 'condicioncuota';
        };
    };
    /**
     * Find zero or one Condicioncuota that matches the filter.
     * @param {condicioncuotaFindUniqueArgs} args - Arguments to find a Condicioncuota
     * @example
     * // Get one Condicioncuota
     * const condicioncuota = await prisma.condicioncuota.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends condicioncuotaFindUniqueArgs>(args: Prisma.SelectSubset<T, condicioncuotaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__condicioncuotaClient<runtime.Types.Result.GetResult<Prisma.$condicioncuotaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Condicioncuota that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {condicioncuotaFindUniqueOrThrowArgs} args - Arguments to find a Condicioncuota
     * @example
     * // Get one Condicioncuota
     * const condicioncuota = await prisma.condicioncuota.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends condicioncuotaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, condicioncuotaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__condicioncuotaClient<runtime.Types.Result.GetResult<Prisma.$condicioncuotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Condicioncuota that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {condicioncuotaFindFirstArgs} args - Arguments to find a Condicioncuota
     * @example
     * // Get one Condicioncuota
     * const condicioncuota = await prisma.condicioncuota.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends condicioncuotaFindFirstArgs>(args?: Prisma.SelectSubset<T, condicioncuotaFindFirstArgs<ExtArgs>>): Prisma.Prisma__condicioncuotaClient<runtime.Types.Result.GetResult<Prisma.$condicioncuotaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Condicioncuota that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {condicioncuotaFindFirstOrThrowArgs} args - Arguments to find a Condicioncuota
     * @example
     * // Get one Condicioncuota
     * const condicioncuota = await prisma.condicioncuota.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends condicioncuotaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, condicioncuotaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__condicioncuotaClient<runtime.Types.Result.GetResult<Prisma.$condicioncuotaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Condicioncuotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {condicioncuotaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Condicioncuotas
     * const condicioncuotas = await prisma.condicioncuota.findMany()
     *
     * // Get first 10 Condicioncuotas
     * const condicioncuotas = await prisma.condicioncuota.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const condicioncuotaWithIdOnly = await prisma.condicioncuota.findMany({ select: { id: true } })
     *
     */
    findMany<T extends condicioncuotaFindManyArgs>(args?: Prisma.SelectSubset<T, condicioncuotaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$condicioncuotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Condicioncuota.
     * @param {condicioncuotaCreateArgs} args - Arguments to create a Condicioncuota.
     * @example
     * // Create one Condicioncuota
     * const Condicioncuota = await prisma.condicioncuota.create({
     *   data: {
     *     // ... data to create a Condicioncuota
     *   }
     * })
     *
     */
    create<T extends condicioncuotaCreateArgs>(args: Prisma.SelectSubset<T, condicioncuotaCreateArgs<ExtArgs>>): Prisma.Prisma__condicioncuotaClient<runtime.Types.Result.GetResult<Prisma.$condicioncuotaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Condicioncuotas.
     * @param {condicioncuotaCreateManyArgs} args - Arguments to create many Condicioncuotas.
     * @example
     * // Create many Condicioncuotas
     * const condicioncuota = await prisma.condicioncuota.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends condicioncuotaCreateManyArgs>(args?: Prisma.SelectSubset<T, condicioncuotaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Condicioncuota.
     * @param {condicioncuotaDeleteArgs} args - Arguments to delete one Condicioncuota.
     * @example
     * // Delete one Condicioncuota
     * const Condicioncuota = await prisma.condicioncuota.delete({
     *   where: {
     *     // ... filter to delete one Condicioncuota
     *   }
     * })
     *
     */
    delete<T extends condicioncuotaDeleteArgs>(args: Prisma.SelectSubset<T, condicioncuotaDeleteArgs<ExtArgs>>): Prisma.Prisma__condicioncuotaClient<runtime.Types.Result.GetResult<Prisma.$condicioncuotaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Condicioncuota.
     * @param {condicioncuotaUpdateArgs} args - Arguments to update one Condicioncuota.
     * @example
     * // Update one Condicioncuota
     * const condicioncuota = await prisma.condicioncuota.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends condicioncuotaUpdateArgs>(args: Prisma.SelectSubset<T, condicioncuotaUpdateArgs<ExtArgs>>): Prisma.Prisma__condicioncuotaClient<runtime.Types.Result.GetResult<Prisma.$condicioncuotaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Condicioncuotas.
     * @param {condicioncuotaDeleteManyArgs} args - Arguments to filter Condicioncuotas to delete.
     * @example
     * // Delete a few Condicioncuotas
     * const { count } = await prisma.condicioncuota.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends condicioncuotaDeleteManyArgs>(args?: Prisma.SelectSubset<T, condicioncuotaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Condicioncuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {condicioncuotaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Condicioncuotas
     * const condicioncuota = await prisma.condicioncuota.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends condicioncuotaUpdateManyArgs>(args: Prisma.SelectSubset<T, condicioncuotaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Condicioncuota.
     * @param {condicioncuotaUpsertArgs} args - Arguments to update or create a Condicioncuota.
     * @example
     * // Update or create a Condicioncuota
     * const condicioncuota = await prisma.condicioncuota.upsert({
     *   create: {
     *     // ... data to create a Condicioncuota
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Condicioncuota we want to update
     *   }
     * })
     */
    upsert<T extends condicioncuotaUpsertArgs>(args: Prisma.SelectSubset<T, condicioncuotaUpsertArgs<ExtArgs>>): Prisma.Prisma__condicioncuotaClient<runtime.Types.Result.GetResult<Prisma.$condicioncuotaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Condicioncuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {condicioncuotaCountArgs} args - Arguments to filter Condicioncuotas to count.
     * @example
     * // Count the number of Condicioncuotas
     * const count = await prisma.condicioncuota.count({
     *   where: {
     *     // ... the filter for the Condicioncuotas we want to count
     *   }
     * })
    **/
    count<T extends condicioncuotaCountArgs>(args?: Prisma.Subset<T, condicioncuotaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CondicioncuotaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Condicioncuota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CondicioncuotaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CondicioncuotaAggregateArgs>(args: Prisma.Subset<T, CondicioncuotaAggregateArgs>): Prisma.PrismaPromise<GetCondicioncuotaAggregateType<T>>;
    /**
     * Group by Condicioncuota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {condicioncuotaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends condicioncuotaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: condicioncuotaGroupByArgs['orderBy'];
    } : {
        orderBy?: condicioncuotaGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, condicioncuotaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCondicioncuotaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the condicioncuota model
     */
    readonly fields: condicioncuotaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for condicioncuota.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__condicioncuotaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    alumno<T extends Prisma.alumnoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.alumnoDefaultArgs<ExtArgs>>): Prisma.Prisma__alumnoClient<runtime.Types.Result.GetResult<Prisma.$alumnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the condicioncuota model
 */
export interface condicioncuotaFieldRefs {
    readonly id: Prisma.FieldRef<"condicioncuota", 'String'>;
    readonly alumnoId: Prisma.FieldRef<"condicioncuota", 'String'>;
    readonly tipo: Prisma.FieldRef<"condicioncuota", 'condicioncuota_tipo'>;
    readonly valor: Prisma.FieldRef<"condicioncuota", 'Decimal'>;
    readonly fechaInicio: Prisma.FieldRef<"condicioncuota", 'DateTime'>;
    readonly fechaFin: Prisma.FieldRef<"condicioncuota", 'DateTime'>;
    readonly motivo: Prisma.FieldRef<"condicioncuota", 'condicioncuota_motivo'>;
    readonly observaciones: Prisma.FieldRef<"condicioncuota", 'String'>;
    readonly activa: Prisma.FieldRef<"condicioncuota", 'Boolean'>;
    readonly autorizadaPor: Prisma.FieldRef<"condicioncuota", 'String'>;
    readonly fechaAutorizacion: Prisma.FieldRef<"condicioncuota", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"condicioncuota", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"condicioncuota", 'DateTime'>;
}
/**
 * condicioncuota findUnique
 */
export type condicioncuotaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the condicioncuota
     */
    select?: Prisma.condicioncuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the condicioncuota
     */
    omit?: Prisma.condicioncuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.condicioncuotaInclude<ExtArgs> | null;
    /**
     * Filter, which condicioncuota to fetch.
     */
    where: Prisma.condicioncuotaWhereUniqueInput;
};
/**
 * condicioncuota findUniqueOrThrow
 */
export type condicioncuotaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the condicioncuota
     */
    select?: Prisma.condicioncuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the condicioncuota
     */
    omit?: Prisma.condicioncuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.condicioncuotaInclude<ExtArgs> | null;
    /**
     * Filter, which condicioncuota to fetch.
     */
    where: Prisma.condicioncuotaWhereUniqueInput;
};
/**
 * condicioncuota findFirst
 */
export type condicioncuotaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the condicioncuota
     */
    select?: Prisma.condicioncuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the condicioncuota
     */
    omit?: Prisma.condicioncuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.condicioncuotaInclude<ExtArgs> | null;
    /**
     * Filter, which condicioncuota to fetch.
     */
    where?: Prisma.condicioncuotaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of condicioncuotas to fetch.
     */
    orderBy?: Prisma.condicioncuotaOrderByWithRelationInput | Prisma.condicioncuotaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for condicioncuotas.
     */
    cursor?: Prisma.condicioncuotaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` condicioncuotas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` condicioncuotas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of condicioncuotas.
     */
    distinct?: Prisma.CondicioncuotaScalarFieldEnum | Prisma.CondicioncuotaScalarFieldEnum[];
};
/**
 * condicioncuota findFirstOrThrow
 */
export type condicioncuotaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the condicioncuota
     */
    select?: Prisma.condicioncuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the condicioncuota
     */
    omit?: Prisma.condicioncuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.condicioncuotaInclude<ExtArgs> | null;
    /**
     * Filter, which condicioncuota to fetch.
     */
    where?: Prisma.condicioncuotaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of condicioncuotas to fetch.
     */
    orderBy?: Prisma.condicioncuotaOrderByWithRelationInput | Prisma.condicioncuotaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for condicioncuotas.
     */
    cursor?: Prisma.condicioncuotaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` condicioncuotas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` condicioncuotas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of condicioncuotas.
     */
    distinct?: Prisma.CondicioncuotaScalarFieldEnum | Prisma.CondicioncuotaScalarFieldEnum[];
};
/**
 * condicioncuota findMany
 */
export type condicioncuotaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the condicioncuota
     */
    select?: Prisma.condicioncuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the condicioncuota
     */
    omit?: Prisma.condicioncuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.condicioncuotaInclude<ExtArgs> | null;
    /**
     * Filter, which condicioncuotas to fetch.
     */
    where?: Prisma.condicioncuotaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of condicioncuotas to fetch.
     */
    orderBy?: Prisma.condicioncuotaOrderByWithRelationInput | Prisma.condicioncuotaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing condicioncuotas.
     */
    cursor?: Prisma.condicioncuotaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` condicioncuotas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` condicioncuotas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of condicioncuotas.
     */
    distinct?: Prisma.CondicioncuotaScalarFieldEnum | Prisma.CondicioncuotaScalarFieldEnum[];
};
/**
 * condicioncuota create
 */
export type condicioncuotaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the condicioncuota
     */
    select?: Prisma.condicioncuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the condicioncuota
     */
    omit?: Prisma.condicioncuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.condicioncuotaInclude<ExtArgs> | null;
    /**
     * The data needed to create a condicioncuota.
     */
    data: Prisma.XOR<Prisma.condicioncuotaCreateInput, Prisma.condicioncuotaUncheckedCreateInput>;
};
/**
 * condicioncuota createMany
 */
export type condicioncuotaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many condicioncuotas.
     */
    data: Prisma.condicioncuotaCreateManyInput | Prisma.condicioncuotaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * condicioncuota update
 */
export type condicioncuotaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the condicioncuota
     */
    select?: Prisma.condicioncuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the condicioncuota
     */
    omit?: Prisma.condicioncuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.condicioncuotaInclude<ExtArgs> | null;
    /**
     * The data needed to update a condicioncuota.
     */
    data: Prisma.XOR<Prisma.condicioncuotaUpdateInput, Prisma.condicioncuotaUncheckedUpdateInput>;
    /**
     * Choose, which condicioncuota to update.
     */
    where: Prisma.condicioncuotaWhereUniqueInput;
};
/**
 * condicioncuota updateMany
 */
export type condicioncuotaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update condicioncuotas.
     */
    data: Prisma.XOR<Prisma.condicioncuotaUpdateManyMutationInput, Prisma.condicioncuotaUncheckedUpdateManyInput>;
    /**
     * Filter which condicioncuotas to update
     */
    where?: Prisma.condicioncuotaWhereInput;
    /**
     * Limit how many condicioncuotas to update.
     */
    limit?: number;
};
/**
 * condicioncuota upsert
 */
export type condicioncuotaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the condicioncuota
     */
    select?: Prisma.condicioncuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the condicioncuota
     */
    omit?: Prisma.condicioncuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.condicioncuotaInclude<ExtArgs> | null;
    /**
     * The filter to search for the condicioncuota to update in case it exists.
     */
    where: Prisma.condicioncuotaWhereUniqueInput;
    /**
     * In case the condicioncuota found by the `where` argument doesn't exist, create a new condicioncuota with this data.
     */
    create: Prisma.XOR<Prisma.condicioncuotaCreateInput, Prisma.condicioncuotaUncheckedCreateInput>;
    /**
     * In case the condicioncuota was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.condicioncuotaUpdateInput, Prisma.condicioncuotaUncheckedUpdateInput>;
};
/**
 * condicioncuota delete
 */
export type condicioncuotaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the condicioncuota
     */
    select?: Prisma.condicioncuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the condicioncuota
     */
    omit?: Prisma.condicioncuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.condicioncuotaInclude<ExtArgs> | null;
    /**
     * Filter which condicioncuota to delete.
     */
    where: Prisma.condicioncuotaWhereUniqueInput;
};
/**
 * condicioncuota deleteMany
 */
export type condicioncuotaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which condicioncuotas to delete
     */
    where?: Prisma.condicioncuotaWhereInput;
    /**
     * Limit how many condicioncuotas to delete.
     */
    limit?: number;
};
/**
 * condicioncuota without action
 */
export type condicioncuotaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the condicioncuota
     */
    select?: Prisma.condicioncuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the condicioncuota
     */
    omit?: Prisma.condicioncuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.condicioncuotaInclude<ExtArgs> | null;
};
//# sourceMappingURL=condicioncuota.d.ts.map