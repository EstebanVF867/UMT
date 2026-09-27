import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model contrato
 *
 */
export type contratoModel = runtime.Types.Result.DefaultSelection<Prisma.$contratoPayload>;
export type AggregateContrato = {
    _count: ContratoCountAggregateOutputType | null;
    _avg: ContratoAvgAggregateOutputType | null;
    _sum: ContratoSumAggregateOutputType | null;
    _min: ContratoMinAggregateOutputType | null;
    _max: ContratoMaxAggregateOutputType | null;
};
export type ContratoAvgAggregateOutputType = {
    salarioHora: runtime.Decimal | null;
};
export type ContratoSumAggregateOutputType = {
    salarioHora: runtime.Decimal | null;
};
export type ContratoMinAggregateOutputType = {
    id: string | null;
    profesorId: string | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    salarioHora: runtime.Decimal | null;
    periodicidad: $Enums.contrato_periodicidad | null;
    estado: $Enums.contrato_estado | null;
    observaciones: string | null;
    nextcloudReferencia: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ContratoMaxAggregateOutputType = {
    id: string | null;
    profesorId: string | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    salarioHora: runtime.Decimal | null;
    periodicidad: $Enums.contrato_periodicidad | null;
    estado: $Enums.contrato_estado | null;
    observaciones: string | null;
    nextcloudReferencia: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ContratoCountAggregateOutputType = {
    id: number;
    profesorId: number;
    fechaInicio: number;
    fechaFin: number;
    salarioHora: number;
    periodicidad: number;
    estado: number;
    observaciones: number;
    nextcloudReferencia: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ContratoAvgAggregateInputType = {
    salarioHora?: true;
};
export type ContratoSumAggregateInputType = {
    salarioHora?: true;
};
export type ContratoMinAggregateInputType = {
    id?: true;
    profesorId?: true;
    fechaInicio?: true;
    fechaFin?: true;
    salarioHora?: true;
    periodicidad?: true;
    estado?: true;
    observaciones?: true;
    nextcloudReferencia?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ContratoMaxAggregateInputType = {
    id?: true;
    profesorId?: true;
    fechaInicio?: true;
    fechaFin?: true;
    salarioHora?: true;
    periodicidad?: true;
    estado?: true;
    observaciones?: true;
    nextcloudReferencia?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ContratoCountAggregateInputType = {
    id?: true;
    profesorId?: true;
    fechaInicio?: true;
    fechaFin?: true;
    salarioHora?: true;
    periodicidad?: true;
    estado?: true;
    observaciones?: true;
    nextcloudReferencia?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ContratoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which contrato to aggregate.
     */
    where?: Prisma.contratoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contratoes to fetch.
     */
    orderBy?: Prisma.contratoOrderByWithRelationInput | Prisma.contratoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.contratoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contratoes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contratoes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned contratoes
    **/
    _count?: true | ContratoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ContratoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ContratoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ContratoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ContratoMaxAggregateInputType;
};
export type GetContratoAggregateType<T extends ContratoAggregateArgs> = {
    [P in keyof T & keyof AggregateContrato]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContrato[P]> : Prisma.GetScalarType<T[P], AggregateContrato[P]>;
};
export type contratoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contratoWhereInput;
    orderBy?: Prisma.contratoOrderByWithAggregationInput | Prisma.contratoOrderByWithAggregationInput[];
    by: Prisma.ContratoScalarFieldEnum[] | Prisma.ContratoScalarFieldEnum;
    having?: Prisma.contratoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContratoCountAggregateInputType | true;
    _avg?: ContratoAvgAggregateInputType;
    _sum?: ContratoSumAggregateInputType;
    _min?: ContratoMinAggregateInputType;
    _max?: ContratoMaxAggregateInputType;
};
export type ContratoGroupByOutputType = {
    id: string;
    profesorId: string;
    fechaInicio: Date;
    fechaFin: Date | null;
    salarioHora: runtime.Decimal;
    periodicidad: $Enums.contrato_periodicidad;
    estado: $Enums.contrato_estado;
    observaciones: string | null;
    nextcloudReferencia: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ContratoCountAggregateOutputType | null;
    _avg: ContratoAvgAggregateOutputType | null;
    _sum: ContratoSumAggregateOutputType | null;
    _min: ContratoMinAggregateOutputType | null;
    _max: ContratoMaxAggregateOutputType | null;
};
export type GetContratoGroupByPayload<T extends contratoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContratoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContratoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContratoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContratoGroupByOutputType[P]>;
}>>;
export type contratoWhereInput = {
    AND?: Prisma.contratoWhereInput | Prisma.contratoWhereInput[];
    OR?: Prisma.contratoWhereInput[];
    NOT?: Prisma.contratoWhereInput | Prisma.contratoWhereInput[];
    id?: Prisma.StringFilter<"contrato"> | string;
    profesorId?: Prisma.StringFilter<"contrato"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"contrato"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"contrato"> | Date | string | null;
    salarioHora?: Prisma.DecimalFilter<"contrato"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    periodicidad?: Prisma.Enumcontrato_periodicidadFilter<"contrato"> | $Enums.contrato_periodicidad;
    estado?: Prisma.Enumcontrato_estadoFilter<"contrato"> | $Enums.contrato_estado;
    observaciones?: Prisma.StringNullableFilter<"contrato"> | string | null;
    nextcloudReferencia?: Prisma.StringNullableFilter<"contrato"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"contrato"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"contrato"> | Date | string;
    profesor?: Prisma.XOR<Prisma.ProfesorScalarRelationFilter, Prisma.profesorWhereInput>;
    nomina?: Prisma.NominaListRelationFilter;
};
export type contratoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    profesorId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    salarioHora?: Prisma.SortOrder;
    periodicidad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    nextcloudReferencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    profesor?: Prisma.profesorOrderByWithRelationInput;
    nomina?: Prisma.nominaOrderByRelationAggregateInput;
    _relevance?: Prisma.contratoOrderByRelevanceInput;
};
export type contratoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.contratoWhereInput | Prisma.contratoWhereInput[];
    OR?: Prisma.contratoWhereInput[];
    NOT?: Prisma.contratoWhereInput | Prisma.contratoWhereInput[];
    profesorId?: Prisma.StringFilter<"contrato"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"contrato"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"contrato"> | Date | string | null;
    salarioHora?: Prisma.DecimalFilter<"contrato"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    periodicidad?: Prisma.Enumcontrato_periodicidadFilter<"contrato"> | $Enums.contrato_periodicidad;
    estado?: Prisma.Enumcontrato_estadoFilter<"contrato"> | $Enums.contrato_estado;
    observaciones?: Prisma.StringNullableFilter<"contrato"> | string | null;
    nextcloudReferencia?: Prisma.StringNullableFilter<"contrato"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"contrato"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"contrato"> | Date | string;
    profesor?: Prisma.XOR<Prisma.ProfesorScalarRelationFilter, Prisma.profesorWhereInput>;
    nomina?: Prisma.NominaListRelationFilter;
}, "id">;
export type contratoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    profesorId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    salarioHora?: Prisma.SortOrder;
    periodicidad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    nextcloudReferencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.contratoCountOrderByAggregateInput;
    _avg?: Prisma.contratoAvgOrderByAggregateInput;
    _max?: Prisma.contratoMaxOrderByAggregateInput;
    _min?: Prisma.contratoMinOrderByAggregateInput;
    _sum?: Prisma.contratoSumOrderByAggregateInput;
};
export type contratoScalarWhereWithAggregatesInput = {
    AND?: Prisma.contratoScalarWhereWithAggregatesInput | Prisma.contratoScalarWhereWithAggregatesInput[];
    OR?: Prisma.contratoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.contratoScalarWhereWithAggregatesInput | Prisma.contratoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"contrato"> | string;
    profesorId?: Prisma.StringWithAggregatesFilter<"contrato"> | string;
    fechaInicio?: Prisma.DateTimeWithAggregatesFilter<"contrato"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableWithAggregatesFilter<"contrato"> | Date | string | null;
    salarioHora?: Prisma.DecimalWithAggregatesFilter<"contrato"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    periodicidad?: Prisma.Enumcontrato_periodicidadWithAggregatesFilter<"contrato"> | $Enums.contrato_periodicidad;
    estado?: Prisma.Enumcontrato_estadoWithAggregatesFilter<"contrato"> | $Enums.contrato_estado;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"contrato"> | string | null;
    nextcloudReferencia?: Prisma.StringNullableWithAggregatesFilter<"contrato"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"contrato"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"contrato"> | Date | string;
};
export type contratoCreateInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    salarioHora: runtime.Decimal | runtime.DecimalJsLike | number | string;
    periodicidad: $Enums.contrato_periodicidad;
    estado?: $Enums.contrato_estado;
    observaciones?: string | null;
    nextcloudReferencia?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    profesor: Prisma.profesorCreateNestedOneWithoutContratoInput;
    nomina?: Prisma.nominaCreateNestedManyWithoutContratoInput;
};
export type contratoUncheckedCreateInput = {
    id: string;
    profesorId: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    salarioHora: runtime.Decimal | runtime.DecimalJsLike | number | string;
    periodicidad: $Enums.contrato_periodicidad;
    estado?: $Enums.contrato_estado;
    observaciones?: string | null;
    nextcloudReferencia?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    nomina?: Prisma.nominaUncheckedCreateNestedManyWithoutContratoInput;
};
export type contratoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioHora?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    periodicidad?: Prisma.Enumcontrato_periodicidadFieldUpdateOperationsInput | $Enums.contrato_periodicidad;
    estado?: Prisma.Enumcontrato_estadoFieldUpdateOperationsInput | $Enums.contrato_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextcloudReferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profesor?: Prisma.profesorUpdateOneRequiredWithoutContratoNestedInput;
    nomina?: Prisma.nominaUpdateManyWithoutContratoNestedInput;
};
export type contratoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profesorId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioHora?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    periodicidad?: Prisma.Enumcontrato_periodicidadFieldUpdateOperationsInput | $Enums.contrato_periodicidad;
    estado?: Prisma.Enumcontrato_estadoFieldUpdateOperationsInput | $Enums.contrato_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextcloudReferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nomina?: Prisma.nominaUncheckedUpdateManyWithoutContratoNestedInput;
};
export type contratoCreateManyInput = {
    id: string;
    profesorId: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    salarioHora: runtime.Decimal | runtime.DecimalJsLike | number | string;
    periodicidad: $Enums.contrato_periodicidad;
    estado?: $Enums.contrato_estado;
    observaciones?: string | null;
    nextcloudReferencia?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type contratoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioHora?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    periodicidad?: Prisma.Enumcontrato_periodicidadFieldUpdateOperationsInput | $Enums.contrato_periodicidad;
    estado?: Prisma.Enumcontrato_estadoFieldUpdateOperationsInput | $Enums.contrato_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextcloudReferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type contratoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profesorId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioHora?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    periodicidad?: Prisma.Enumcontrato_periodicidadFieldUpdateOperationsInput | $Enums.contrato_periodicidad;
    estado?: Prisma.Enumcontrato_estadoFieldUpdateOperationsInput | $Enums.contrato_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextcloudReferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type contratoOrderByRelevanceInput = {
    fields: Prisma.contratoOrderByRelevanceFieldEnum | Prisma.contratoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type contratoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profesorId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    salarioHora?: Prisma.SortOrder;
    periodicidad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    nextcloudReferencia?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type contratoAvgOrderByAggregateInput = {
    salarioHora?: Prisma.SortOrder;
};
export type contratoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profesorId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    salarioHora?: Prisma.SortOrder;
    periodicidad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    nextcloudReferencia?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type contratoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profesorId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    salarioHora?: Prisma.SortOrder;
    periodicidad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    nextcloudReferencia?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type contratoSumOrderByAggregateInput = {
    salarioHora?: Prisma.SortOrder;
};
export type ContratoNullableScalarRelationFilter = {
    is?: Prisma.contratoWhereInput | null;
    isNot?: Prisma.contratoWhereInput | null;
};
export type ContratoListRelationFilter = {
    every?: Prisma.contratoWhereInput;
    some?: Prisma.contratoWhereInput;
    none?: Prisma.contratoWhereInput;
};
export type contratoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Enumcontrato_periodicidadFieldUpdateOperationsInput = {
    set?: $Enums.contrato_periodicidad;
};
export type Enumcontrato_estadoFieldUpdateOperationsInput = {
    set?: $Enums.contrato_estado;
};
export type contratoCreateNestedOneWithoutNominaInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutNominaInput, Prisma.contratoUncheckedCreateWithoutNominaInput>;
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutNominaInput;
    connect?: Prisma.contratoWhereUniqueInput;
};
export type contratoUpdateOneWithoutNominaNestedInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutNominaInput, Prisma.contratoUncheckedCreateWithoutNominaInput>;
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutNominaInput;
    upsert?: Prisma.contratoUpsertWithoutNominaInput;
    disconnect?: Prisma.contratoWhereInput | boolean;
    delete?: Prisma.contratoWhereInput | boolean;
    connect?: Prisma.contratoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.contratoUpdateToOneWithWhereWithoutNominaInput, Prisma.contratoUpdateWithoutNominaInput>, Prisma.contratoUncheckedUpdateWithoutNominaInput>;
};
export type contratoCreateNestedManyWithoutProfesorInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutProfesorInput, Prisma.contratoUncheckedCreateWithoutProfesorInput> | Prisma.contratoCreateWithoutProfesorInput[] | Prisma.contratoUncheckedCreateWithoutProfesorInput[];
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutProfesorInput | Prisma.contratoCreateOrConnectWithoutProfesorInput[];
    createMany?: Prisma.contratoCreateManyProfesorInputEnvelope;
    connect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
};
export type contratoUncheckedCreateNestedManyWithoutProfesorInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutProfesorInput, Prisma.contratoUncheckedCreateWithoutProfesorInput> | Prisma.contratoCreateWithoutProfesorInput[] | Prisma.contratoUncheckedCreateWithoutProfesorInput[];
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutProfesorInput | Prisma.contratoCreateOrConnectWithoutProfesorInput[];
    createMany?: Prisma.contratoCreateManyProfesorInputEnvelope;
    connect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
};
export type contratoUpdateManyWithoutProfesorNestedInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutProfesorInput, Prisma.contratoUncheckedCreateWithoutProfesorInput> | Prisma.contratoCreateWithoutProfesorInput[] | Prisma.contratoUncheckedCreateWithoutProfesorInput[];
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutProfesorInput | Prisma.contratoCreateOrConnectWithoutProfesorInput[];
    upsert?: Prisma.contratoUpsertWithWhereUniqueWithoutProfesorInput | Prisma.contratoUpsertWithWhereUniqueWithoutProfesorInput[];
    createMany?: Prisma.contratoCreateManyProfesorInputEnvelope;
    set?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    disconnect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    delete?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    connect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    update?: Prisma.contratoUpdateWithWhereUniqueWithoutProfesorInput | Prisma.contratoUpdateWithWhereUniqueWithoutProfesorInput[];
    updateMany?: Prisma.contratoUpdateManyWithWhereWithoutProfesorInput | Prisma.contratoUpdateManyWithWhereWithoutProfesorInput[];
    deleteMany?: Prisma.contratoScalarWhereInput | Prisma.contratoScalarWhereInput[];
};
export type contratoUncheckedUpdateManyWithoutProfesorNestedInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutProfesorInput, Prisma.contratoUncheckedCreateWithoutProfesorInput> | Prisma.contratoCreateWithoutProfesorInput[] | Prisma.contratoUncheckedCreateWithoutProfesorInput[];
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutProfesorInput | Prisma.contratoCreateOrConnectWithoutProfesorInput[];
    upsert?: Prisma.contratoUpsertWithWhereUniqueWithoutProfesorInput | Prisma.contratoUpsertWithWhereUniqueWithoutProfesorInput[];
    createMany?: Prisma.contratoCreateManyProfesorInputEnvelope;
    set?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    disconnect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    delete?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    connect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    update?: Prisma.contratoUpdateWithWhereUniqueWithoutProfesorInput | Prisma.contratoUpdateWithWhereUniqueWithoutProfesorInput[];
    updateMany?: Prisma.contratoUpdateManyWithWhereWithoutProfesorInput | Prisma.contratoUpdateManyWithWhereWithoutProfesorInput[];
    deleteMany?: Prisma.contratoScalarWhereInput | Prisma.contratoScalarWhereInput[];
};
export type contratoCreateWithoutNominaInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    salarioHora: runtime.Decimal | runtime.DecimalJsLike | number | string;
    periodicidad: $Enums.contrato_periodicidad;
    estado?: $Enums.contrato_estado;
    observaciones?: string | null;
    nextcloudReferencia?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    profesor: Prisma.profesorCreateNestedOneWithoutContratoInput;
};
export type contratoUncheckedCreateWithoutNominaInput = {
    id: string;
    profesorId: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    salarioHora: runtime.Decimal | runtime.DecimalJsLike | number | string;
    periodicidad: $Enums.contrato_periodicidad;
    estado?: $Enums.contrato_estado;
    observaciones?: string | null;
    nextcloudReferencia?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type contratoCreateOrConnectWithoutNominaInput = {
    where: Prisma.contratoWhereUniqueInput;
    create: Prisma.XOR<Prisma.contratoCreateWithoutNominaInput, Prisma.contratoUncheckedCreateWithoutNominaInput>;
};
export type contratoUpsertWithoutNominaInput = {
    update: Prisma.XOR<Prisma.contratoUpdateWithoutNominaInput, Prisma.contratoUncheckedUpdateWithoutNominaInput>;
    create: Prisma.XOR<Prisma.contratoCreateWithoutNominaInput, Prisma.contratoUncheckedCreateWithoutNominaInput>;
    where?: Prisma.contratoWhereInput;
};
export type contratoUpdateToOneWithWhereWithoutNominaInput = {
    where?: Prisma.contratoWhereInput;
    data: Prisma.XOR<Prisma.contratoUpdateWithoutNominaInput, Prisma.contratoUncheckedUpdateWithoutNominaInput>;
};
export type contratoUpdateWithoutNominaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioHora?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    periodicidad?: Prisma.Enumcontrato_periodicidadFieldUpdateOperationsInput | $Enums.contrato_periodicidad;
    estado?: Prisma.Enumcontrato_estadoFieldUpdateOperationsInput | $Enums.contrato_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextcloudReferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profesor?: Prisma.profesorUpdateOneRequiredWithoutContratoNestedInput;
};
export type contratoUncheckedUpdateWithoutNominaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profesorId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioHora?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    periodicidad?: Prisma.Enumcontrato_periodicidadFieldUpdateOperationsInput | $Enums.contrato_periodicidad;
    estado?: Prisma.Enumcontrato_estadoFieldUpdateOperationsInput | $Enums.contrato_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextcloudReferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type contratoCreateWithoutProfesorInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    salarioHora: runtime.Decimal | runtime.DecimalJsLike | number | string;
    periodicidad: $Enums.contrato_periodicidad;
    estado?: $Enums.contrato_estado;
    observaciones?: string | null;
    nextcloudReferencia?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    nomina?: Prisma.nominaCreateNestedManyWithoutContratoInput;
};
export type contratoUncheckedCreateWithoutProfesorInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    salarioHora: runtime.Decimal | runtime.DecimalJsLike | number | string;
    periodicidad: $Enums.contrato_periodicidad;
    estado?: $Enums.contrato_estado;
    observaciones?: string | null;
    nextcloudReferencia?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    nomina?: Prisma.nominaUncheckedCreateNestedManyWithoutContratoInput;
};
export type contratoCreateOrConnectWithoutProfesorInput = {
    where: Prisma.contratoWhereUniqueInput;
    create: Prisma.XOR<Prisma.contratoCreateWithoutProfesorInput, Prisma.contratoUncheckedCreateWithoutProfesorInput>;
};
export type contratoCreateManyProfesorInputEnvelope = {
    data: Prisma.contratoCreateManyProfesorInput | Prisma.contratoCreateManyProfesorInput[];
    skipDuplicates?: boolean;
};
export type contratoUpsertWithWhereUniqueWithoutProfesorInput = {
    where: Prisma.contratoWhereUniqueInput;
    update: Prisma.XOR<Prisma.contratoUpdateWithoutProfesorInput, Prisma.contratoUncheckedUpdateWithoutProfesorInput>;
    create: Prisma.XOR<Prisma.contratoCreateWithoutProfesorInput, Prisma.contratoUncheckedCreateWithoutProfesorInput>;
};
export type contratoUpdateWithWhereUniqueWithoutProfesorInput = {
    where: Prisma.contratoWhereUniqueInput;
    data: Prisma.XOR<Prisma.contratoUpdateWithoutProfesorInput, Prisma.contratoUncheckedUpdateWithoutProfesorInput>;
};
export type contratoUpdateManyWithWhereWithoutProfesorInput = {
    where: Prisma.contratoScalarWhereInput;
    data: Prisma.XOR<Prisma.contratoUpdateManyMutationInput, Prisma.contratoUncheckedUpdateManyWithoutProfesorInput>;
};
export type contratoScalarWhereInput = {
    AND?: Prisma.contratoScalarWhereInput | Prisma.contratoScalarWhereInput[];
    OR?: Prisma.contratoScalarWhereInput[];
    NOT?: Prisma.contratoScalarWhereInput | Prisma.contratoScalarWhereInput[];
    id?: Prisma.StringFilter<"contrato"> | string;
    profesorId?: Prisma.StringFilter<"contrato"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"contrato"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"contrato"> | Date | string | null;
    salarioHora?: Prisma.DecimalFilter<"contrato"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    periodicidad?: Prisma.Enumcontrato_periodicidadFilter<"contrato"> | $Enums.contrato_periodicidad;
    estado?: Prisma.Enumcontrato_estadoFilter<"contrato"> | $Enums.contrato_estado;
    observaciones?: Prisma.StringNullableFilter<"contrato"> | string | null;
    nextcloudReferencia?: Prisma.StringNullableFilter<"contrato"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"contrato"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"contrato"> | Date | string;
};
export type contratoCreateManyProfesorInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    salarioHora: runtime.Decimal | runtime.DecimalJsLike | number | string;
    periodicidad: $Enums.contrato_periodicidad;
    estado?: $Enums.contrato_estado;
    observaciones?: string | null;
    nextcloudReferencia?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type contratoUpdateWithoutProfesorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioHora?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    periodicidad?: Prisma.Enumcontrato_periodicidadFieldUpdateOperationsInput | $Enums.contrato_periodicidad;
    estado?: Prisma.Enumcontrato_estadoFieldUpdateOperationsInput | $Enums.contrato_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextcloudReferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nomina?: Prisma.nominaUpdateManyWithoutContratoNestedInput;
};
export type contratoUncheckedUpdateWithoutProfesorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioHora?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    periodicidad?: Prisma.Enumcontrato_periodicidadFieldUpdateOperationsInput | $Enums.contrato_periodicidad;
    estado?: Prisma.Enumcontrato_estadoFieldUpdateOperationsInput | $Enums.contrato_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextcloudReferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nomina?: Prisma.nominaUncheckedUpdateManyWithoutContratoNestedInput;
};
export type contratoUncheckedUpdateManyWithoutProfesorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioHora?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    periodicidad?: Prisma.Enumcontrato_periodicidadFieldUpdateOperationsInput | $Enums.contrato_periodicidad;
    estado?: Prisma.Enumcontrato_estadoFieldUpdateOperationsInput | $Enums.contrato_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nextcloudReferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ContratoCountOutputType
 */
export type ContratoCountOutputType = {
    nomina: number;
};
export type ContratoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    nomina?: boolean | ContratoCountOutputTypeCountNominaArgs;
};
/**
 * ContratoCountOutputType without action
 */
export type ContratoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContratoCountOutputType
     */
    select?: Prisma.ContratoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ContratoCountOutputType without action
 */
export type ContratoCountOutputTypeCountNominaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.nominaWhereInput;
};
export type contratoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profesorId?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    salarioHora?: boolean;
    periodicidad?: boolean;
    estado?: boolean;
    observaciones?: boolean;
    nextcloudReferencia?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    profesor?: boolean | Prisma.profesorDefaultArgs<ExtArgs>;
    nomina?: boolean | Prisma.contrato$nominaArgs<ExtArgs>;
    _count?: boolean | Prisma.ContratoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contrato"]>;
export type contratoSelectScalar = {
    id?: boolean;
    profesorId?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    salarioHora?: boolean;
    periodicidad?: boolean;
    estado?: boolean;
    observaciones?: boolean;
    nextcloudReferencia?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type contratoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "profesorId" | "fechaInicio" | "fechaFin" | "salarioHora" | "periodicidad" | "estado" | "observaciones" | "nextcloudReferencia" | "createdAt" | "updatedAt", ExtArgs["result"]["contrato"]>;
export type contratoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profesor?: boolean | Prisma.profesorDefaultArgs<ExtArgs>;
    nomina?: boolean | Prisma.contrato$nominaArgs<ExtArgs>;
    _count?: boolean | Prisma.ContratoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $contratoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "contrato";
    objects: {
        profesor: Prisma.$profesorPayload<ExtArgs>;
        nomina: Prisma.$nominaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        profesorId: string;
        fechaInicio: Date;
        fechaFin: Date | null;
        salarioHora: runtime.Decimal;
        periodicidad: $Enums.contrato_periodicidad;
        estado: $Enums.contrato_estado;
        observaciones: string | null;
        nextcloudReferencia: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["contrato"]>;
    composites: {};
};
export type contratoGetPayload<S extends boolean | null | undefined | contratoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$contratoPayload, S>;
export type contratoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<contratoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContratoCountAggregateInputType | true;
};
export interface contratoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['contrato'];
        meta: {
            name: 'contrato';
        };
    };
    /**
     * Find zero or one Contrato that matches the filter.
     * @param {contratoFindUniqueArgs} args - Arguments to find a Contrato
     * @example
     * // Get one Contrato
     * const contrato = await prisma.contrato.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contratoFindUniqueArgs>(args: Prisma.SelectSubset<T, contratoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__contratoClient<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Contrato that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contratoFindUniqueOrThrowArgs} args - Arguments to find a Contrato
     * @example
     * // Get one Contrato
     * const contrato = await prisma.contrato.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contratoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, contratoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__contratoClient<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Contrato that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contratoFindFirstArgs} args - Arguments to find a Contrato
     * @example
     * // Get one Contrato
     * const contrato = await prisma.contrato.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contratoFindFirstArgs>(args?: Prisma.SelectSubset<T, contratoFindFirstArgs<ExtArgs>>): Prisma.Prisma__contratoClient<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Contrato that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contratoFindFirstOrThrowArgs} args - Arguments to find a Contrato
     * @example
     * // Get one Contrato
     * const contrato = await prisma.contrato.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contratoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, contratoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__contratoClient<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Contratoes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contratoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contratoes
     * const contratoes = await prisma.contrato.findMany()
     *
     * // Get first 10 Contratoes
     * const contratoes = await prisma.contrato.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const contratoWithIdOnly = await prisma.contrato.findMany({ select: { id: true } })
     *
     */
    findMany<T extends contratoFindManyArgs>(args?: Prisma.SelectSubset<T, contratoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Contrato.
     * @param {contratoCreateArgs} args - Arguments to create a Contrato.
     * @example
     * // Create one Contrato
     * const Contrato = await prisma.contrato.create({
     *   data: {
     *     // ... data to create a Contrato
     *   }
     * })
     *
     */
    create<T extends contratoCreateArgs>(args: Prisma.SelectSubset<T, contratoCreateArgs<ExtArgs>>): Prisma.Prisma__contratoClient<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Contratoes.
     * @param {contratoCreateManyArgs} args - Arguments to create many Contratoes.
     * @example
     * // Create many Contratoes
     * const contrato = await prisma.contrato.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends contratoCreateManyArgs>(args?: Prisma.SelectSubset<T, contratoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Contrato.
     * @param {contratoDeleteArgs} args - Arguments to delete one Contrato.
     * @example
     * // Delete one Contrato
     * const Contrato = await prisma.contrato.delete({
     *   where: {
     *     // ... filter to delete one Contrato
     *   }
     * })
     *
     */
    delete<T extends contratoDeleteArgs>(args: Prisma.SelectSubset<T, contratoDeleteArgs<ExtArgs>>): Prisma.Prisma__contratoClient<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Contrato.
     * @param {contratoUpdateArgs} args - Arguments to update one Contrato.
     * @example
     * // Update one Contrato
     * const contrato = await prisma.contrato.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends contratoUpdateArgs>(args: Prisma.SelectSubset<T, contratoUpdateArgs<ExtArgs>>): Prisma.Prisma__contratoClient<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Contratoes.
     * @param {contratoDeleteManyArgs} args - Arguments to filter Contratoes to delete.
     * @example
     * // Delete a few Contratoes
     * const { count } = await prisma.contrato.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends contratoDeleteManyArgs>(args?: Prisma.SelectSubset<T, contratoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Contratoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contratoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contratoes
     * const contrato = await prisma.contrato.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends contratoUpdateManyArgs>(args: Prisma.SelectSubset<T, contratoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Contrato.
     * @param {contratoUpsertArgs} args - Arguments to update or create a Contrato.
     * @example
     * // Update or create a Contrato
     * const contrato = await prisma.contrato.upsert({
     *   create: {
     *     // ... data to create a Contrato
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contrato we want to update
     *   }
     * })
     */
    upsert<T extends contratoUpsertArgs>(args: Prisma.SelectSubset<T, contratoUpsertArgs<ExtArgs>>): Prisma.Prisma__contratoClient<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Contratoes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contratoCountArgs} args - Arguments to filter Contratoes to count.
     * @example
     * // Count the number of Contratoes
     * const count = await prisma.contrato.count({
     *   where: {
     *     // ... the filter for the Contratoes we want to count
     *   }
     * })
    **/
    count<T extends contratoCountArgs>(args?: Prisma.Subset<T, contratoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContratoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Contrato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContratoAggregateArgs>(args: Prisma.Subset<T, ContratoAggregateArgs>): Prisma.PrismaPromise<GetContratoAggregateType<T>>;
    /**
     * Group by Contrato.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contratoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends contratoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: contratoGroupByArgs['orderBy'];
    } : {
        orderBy?: contratoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, contratoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContratoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the contrato model
     */
    readonly fields: contratoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for contrato.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__contratoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profesor<T extends Prisma.profesorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.profesorDefaultArgs<ExtArgs>>): Prisma.Prisma__profesorClient<runtime.Types.Result.GetResult<Prisma.$profesorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    nomina<T extends Prisma.contrato$nominaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.contrato$nominaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the contrato model
 */
export interface contratoFieldRefs {
    readonly id: Prisma.FieldRef<"contrato", 'String'>;
    readonly profesorId: Prisma.FieldRef<"contrato", 'String'>;
    readonly fechaInicio: Prisma.FieldRef<"contrato", 'DateTime'>;
    readonly fechaFin: Prisma.FieldRef<"contrato", 'DateTime'>;
    readonly salarioHora: Prisma.FieldRef<"contrato", 'Decimal'>;
    readonly periodicidad: Prisma.FieldRef<"contrato", 'contrato_periodicidad'>;
    readonly estado: Prisma.FieldRef<"contrato", 'contrato_estado'>;
    readonly observaciones: Prisma.FieldRef<"contrato", 'String'>;
    readonly nextcloudReferencia: Prisma.FieldRef<"contrato", 'String'>;
    readonly createdAt: Prisma.FieldRef<"contrato", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"contrato", 'DateTime'>;
}
/**
 * contrato findUnique
 */
export type contratoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contrato
     */
    select?: Prisma.contratoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contrato
     */
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contratoInclude<ExtArgs> | null;
    /**
     * Filter, which contrato to fetch.
     */
    where: Prisma.contratoWhereUniqueInput;
};
/**
 * contrato findUniqueOrThrow
 */
export type contratoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contrato
     */
    select?: Prisma.contratoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contrato
     */
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contratoInclude<ExtArgs> | null;
    /**
     * Filter, which contrato to fetch.
     */
    where: Prisma.contratoWhereUniqueInput;
};
/**
 * contrato findFirst
 */
export type contratoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contrato
     */
    select?: Prisma.contratoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contrato
     */
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contratoInclude<ExtArgs> | null;
    /**
     * Filter, which contrato to fetch.
     */
    where?: Prisma.contratoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contratoes to fetch.
     */
    orderBy?: Prisma.contratoOrderByWithRelationInput | Prisma.contratoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contratoes.
     */
    cursor?: Prisma.contratoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contratoes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contratoes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contratoes.
     */
    distinct?: Prisma.ContratoScalarFieldEnum | Prisma.ContratoScalarFieldEnum[];
};
/**
 * contrato findFirstOrThrow
 */
export type contratoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contrato
     */
    select?: Prisma.contratoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contrato
     */
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contratoInclude<ExtArgs> | null;
    /**
     * Filter, which contrato to fetch.
     */
    where?: Prisma.contratoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contratoes to fetch.
     */
    orderBy?: Prisma.contratoOrderByWithRelationInput | Prisma.contratoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contratoes.
     */
    cursor?: Prisma.contratoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contratoes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contratoes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contratoes.
     */
    distinct?: Prisma.ContratoScalarFieldEnum | Prisma.ContratoScalarFieldEnum[];
};
/**
 * contrato findMany
 */
export type contratoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contrato
     */
    select?: Prisma.contratoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contrato
     */
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contratoInclude<ExtArgs> | null;
    /**
     * Filter, which contratoes to fetch.
     */
    where?: Prisma.contratoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contratoes to fetch.
     */
    orderBy?: Prisma.contratoOrderByWithRelationInput | Prisma.contratoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing contratoes.
     */
    cursor?: Prisma.contratoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contratoes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contratoes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contratoes.
     */
    distinct?: Prisma.ContratoScalarFieldEnum | Prisma.ContratoScalarFieldEnum[];
};
/**
 * contrato create
 */
export type contratoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contrato
     */
    select?: Prisma.contratoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contrato
     */
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contratoInclude<ExtArgs> | null;
    /**
     * The data needed to create a contrato.
     */
    data: Prisma.XOR<Prisma.contratoCreateInput, Prisma.contratoUncheckedCreateInput>;
};
/**
 * contrato createMany
 */
export type contratoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many contratoes.
     */
    data: Prisma.contratoCreateManyInput | Prisma.contratoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * contrato update
 */
export type contratoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contrato
     */
    select?: Prisma.contratoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contrato
     */
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contratoInclude<ExtArgs> | null;
    /**
     * The data needed to update a contrato.
     */
    data: Prisma.XOR<Prisma.contratoUpdateInput, Prisma.contratoUncheckedUpdateInput>;
    /**
     * Choose, which contrato to update.
     */
    where: Prisma.contratoWhereUniqueInput;
};
/**
 * contrato updateMany
 */
export type contratoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update contratoes.
     */
    data: Prisma.XOR<Prisma.contratoUpdateManyMutationInput, Prisma.contratoUncheckedUpdateManyInput>;
    /**
     * Filter which contratoes to update
     */
    where?: Prisma.contratoWhereInput;
    /**
     * Limit how many contratoes to update.
     */
    limit?: number;
};
/**
 * contrato upsert
 */
export type contratoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contrato
     */
    select?: Prisma.contratoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contrato
     */
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contratoInclude<ExtArgs> | null;
    /**
     * The filter to search for the contrato to update in case it exists.
     */
    where: Prisma.contratoWhereUniqueInput;
    /**
     * In case the contrato found by the `where` argument doesn't exist, create a new contrato with this data.
     */
    create: Prisma.XOR<Prisma.contratoCreateInput, Prisma.contratoUncheckedCreateInput>;
    /**
     * In case the contrato was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.contratoUpdateInput, Prisma.contratoUncheckedUpdateInput>;
};
/**
 * contrato delete
 */
export type contratoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contrato
     */
    select?: Prisma.contratoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contrato
     */
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contratoInclude<ExtArgs> | null;
    /**
     * Filter which contrato to delete.
     */
    where: Prisma.contratoWhereUniqueInput;
};
/**
 * contrato deleteMany
 */
export type contratoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which contratoes to delete
     */
    where?: Prisma.contratoWhereInput;
    /**
     * Limit how many contratoes to delete.
     */
    limit?: number;
};
/**
 * contrato.nomina
 */
export type contrato$nominaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nomina
     */
    select?: Prisma.nominaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the nomina
     */
    omit?: Prisma.nominaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.nominaInclude<ExtArgs> | null;
    where?: Prisma.nominaWhereInput;
    orderBy?: Prisma.nominaOrderByWithRelationInput | Prisma.nominaOrderByWithRelationInput[];
    cursor?: Prisma.nominaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NominaScalarFieldEnum | Prisma.NominaScalarFieldEnum[];
};
/**
 * contrato without action
 */
export type contratoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contrato
     */
    select?: Prisma.contratoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contrato
     */
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contratoInclude<ExtArgs> | null;
};
//# sourceMappingURL=contrato.d.ts.map