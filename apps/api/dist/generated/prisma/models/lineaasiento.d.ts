import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model lineaasiento
 *
 */
export type lineaasientoModel = runtime.Types.Result.DefaultSelection<Prisma.$lineaasientoPayload>;
export type AggregateLineaasiento = {
    _count: LineaasientoCountAggregateOutputType | null;
    _avg: LineaasientoAvgAggregateOutputType | null;
    _sum: LineaasientoSumAggregateOutputType | null;
    _min: LineaasientoMinAggregateOutputType | null;
    _max: LineaasientoMaxAggregateOutputType | null;
};
export type LineaasientoAvgAggregateOutputType = {
    debe: runtime.Decimal | null;
    haber: runtime.Decimal | null;
};
export type LineaasientoSumAggregateOutputType = {
    debe: runtime.Decimal | null;
    haber: runtime.Decimal | null;
};
export type LineaasientoMinAggregateOutputType = {
    id: string | null;
    asientoId: string | null;
    cuentaContableId: string | null;
    concepto: string | null;
    debe: runtime.Decimal | null;
    haber: runtime.Decimal | null;
    centroAnaliticoId: string | null;
    referencia: string | null;
    createdAt: Date | null;
};
export type LineaasientoMaxAggregateOutputType = {
    id: string | null;
    asientoId: string | null;
    cuentaContableId: string | null;
    concepto: string | null;
    debe: runtime.Decimal | null;
    haber: runtime.Decimal | null;
    centroAnaliticoId: string | null;
    referencia: string | null;
    createdAt: Date | null;
};
export type LineaasientoCountAggregateOutputType = {
    id: number;
    asientoId: number;
    cuentaContableId: number;
    concepto: number;
    debe: number;
    haber: number;
    centroAnaliticoId: number;
    referencia: number;
    createdAt: number;
    _all: number;
};
export type LineaasientoAvgAggregateInputType = {
    debe?: true;
    haber?: true;
};
export type LineaasientoSumAggregateInputType = {
    debe?: true;
    haber?: true;
};
export type LineaasientoMinAggregateInputType = {
    id?: true;
    asientoId?: true;
    cuentaContableId?: true;
    concepto?: true;
    debe?: true;
    haber?: true;
    centroAnaliticoId?: true;
    referencia?: true;
    createdAt?: true;
};
export type LineaasientoMaxAggregateInputType = {
    id?: true;
    asientoId?: true;
    cuentaContableId?: true;
    concepto?: true;
    debe?: true;
    haber?: true;
    centroAnaliticoId?: true;
    referencia?: true;
    createdAt?: true;
};
export type LineaasientoCountAggregateInputType = {
    id?: true;
    asientoId?: true;
    cuentaContableId?: true;
    concepto?: true;
    debe?: true;
    haber?: true;
    centroAnaliticoId?: true;
    referencia?: true;
    createdAt?: true;
    _all?: true;
};
export type LineaasientoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which lineaasiento to aggregate.
     */
    where?: Prisma.lineaasientoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lineaasientos to fetch.
     */
    orderBy?: Prisma.lineaasientoOrderByWithRelationInput | Prisma.lineaasientoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.lineaasientoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lineaasientos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lineaasientos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned lineaasientos
    **/
    _count?: true | LineaasientoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LineaasientoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LineaasientoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LineaasientoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LineaasientoMaxAggregateInputType;
};
export type GetLineaasientoAggregateType<T extends LineaasientoAggregateArgs> = {
    [P in keyof T & keyof AggregateLineaasiento]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLineaasiento[P]> : Prisma.GetScalarType<T[P], AggregateLineaasiento[P]>;
};
export type lineaasientoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lineaasientoWhereInput;
    orderBy?: Prisma.lineaasientoOrderByWithAggregationInput | Prisma.lineaasientoOrderByWithAggregationInput[];
    by: Prisma.LineaasientoScalarFieldEnum[] | Prisma.LineaasientoScalarFieldEnum;
    having?: Prisma.lineaasientoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LineaasientoCountAggregateInputType | true;
    _avg?: LineaasientoAvgAggregateInputType;
    _sum?: LineaasientoSumAggregateInputType;
    _min?: LineaasientoMinAggregateInputType;
    _max?: LineaasientoMaxAggregateInputType;
};
export type LineaasientoGroupByOutputType = {
    id: string;
    asientoId: string;
    cuentaContableId: string;
    concepto: string | null;
    debe: runtime.Decimal;
    haber: runtime.Decimal;
    centroAnaliticoId: string | null;
    referencia: string | null;
    createdAt: Date;
    _count: LineaasientoCountAggregateOutputType | null;
    _avg: LineaasientoAvgAggregateOutputType | null;
    _sum: LineaasientoSumAggregateOutputType | null;
    _min: LineaasientoMinAggregateOutputType | null;
    _max: LineaasientoMaxAggregateOutputType | null;
};
export type GetLineaasientoGroupByPayload<T extends lineaasientoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LineaasientoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LineaasientoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LineaasientoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LineaasientoGroupByOutputType[P]>;
}>>;
export type lineaasientoWhereInput = {
    AND?: Prisma.lineaasientoWhereInput | Prisma.lineaasientoWhereInput[];
    OR?: Prisma.lineaasientoWhereInput[];
    NOT?: Prisma.lineaasientoWhereInput | Prisma.lineaasientoWhereInput[];
    id?: Prisma.StringFilter<"lineaasiento"> | string;
    asientoId?: Prisma.StringFilter<"lineaasiento"> | string;
    cuentaContableId?: Prisma.StringFilter<"lineaasiento"> | string;
    concepto?: Prisma.StringNullableFilter<"lineaasiento"> | string | null;
    debe?: Prisma.DecimalFilter<"lineaasiento"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: Prisma.DecimalFilter<"lineaasiento"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    centroAnaliticoId?: Prisma.StringNullableFilter<"lineaasiento"> | string | null;
    referencia?: Prisma.StringNullableFilter<"lineaasiento"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"lineaasiento"> | Date | string;
    asiento?: Prisma.XOR<Prisma.AsientoScalarRelationFilter, Prisma.asientoWhereInput>;
    centroanalitico?: Prisma.XOR<Prisma.CentroanaliticoNullableScalarRelationFilter, Prisma.centroanaliticoWhereInput> | null;
    cuentacontable?: Prisma.XOR<Prisma.CuentacontableScalarRelationFilter, Prisma.cuentacontableWhereInput>;
};
export type lineaasientoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    cuentaContableId?: Prisma.SortOrder;
    concepto?: Prisma.SortOrderInput | Prisma.SortOrder;
    debe?: Prisma.SortOrder;
    haber?: Prisma.SortOrder;
    centroAnaliticoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    referencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    asiento?: Prisma.asientoOrderByWithRelationInput;
    centroanalitico?: Prisma.centroanaliticoOrderByWithRelationInput;
    cuentacontable?: Prisma.cuentacontableOrderByWithRelationInput;
    _relevance?: Prisma.lineaasientoOrderByRelevanceInput;
};
export type lineaasientoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.lineaasientoWhereInput | Prisma.lineaasientoWhereInput[];
    OR?: Prisma.lineaasientoWhereInput[];
    NOT?: Prisma.lineaasientoWhereInput | Prisma.lineaasientoWhereInput[];
    asientoId?: Prisma.StringFilter<"lineaasiento"> | string;
    cuentaContableId?: Prisma.StringFilter<"lineaasiento"> | string;
    concepto?: Prisma.StringNullableFilter<"lineaasiento"> | string | null;
    debe?: Prisma.DecimalFilter<"lineaasiento"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: Prisma.DecimalFilter<"lineaasiento"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    centroAnaliticoId?: Prisma.StringNullableFilter<"lineaasiento"> | string | null;
    referencia?: Prisma.StringNullableFilter<"lineaasiento"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"lineaasiento"> | Date | string;
    asiento?: Prisma.XOR<Prisma.AsientoScalarRelationFilter, Prisma.asientoWhereInput>;
    centroanalitico?: Prisma.XOR<Prisma.CentroanaliticoNullableScalarRelationFilter, Prisma.centroanaliticoWhereInput> | null;
    cuentacontable?: Prisma.XOR<Prisma.CuentacontableScalarRelationFilter, Prisma.cuentacontableWhereInput>;
}, "id">;
export type lineaasientoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    cuentaContableId?: Prisma.SortOrder;
    concepto?: Prisma.SortOrderInput | Prisma.SortOrder;
    debe?: Prisma.SortOrder;
    haber?: Prisma.SortOrder;
    centroAnaliticoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    referencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.lineaasientoCountOrderByAggregateInput;
    _avg?: Prisma.lineaasientoAvgOrderByAggregateInput;
    _max?: Prisma.lineaasientoMaxOrderByAggregateInput;
    _min?: Prisma.lineaasientoMinOrderByAggregateInput;
    _sum?: Prisma.lineaasientoSumOrderByAggregateInput;
};
export type lineaasientoScalarWhereWithAggregatesInput = {
    AND?: Prisma.lineaasientoScalarWhereWithAggregatesInput | Prisma.lineaasientoScalarWhereWithAggregatesInput[];
    OR?: Prisma.lineaasientoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.lineaasientoScalarWhereWithAggregatesInput | Prisma.lineaasientoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"lineaasiento"> | string;
    asientoId?: Prisma.StringWithAggregatesFilter<"lineaasiento"> | string;
    cuentaContableId?: Prisma.StringWithAggregatesFilter<"lineaasiento"> | string;
    concepto?: Prisma.StringNullableWithAggregatesFilter<"lineaasiento"> | string | null;
    debe?: Prisma.DecimalWithAggregatesFilter<"lineaasiento"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: Prisma.DecimalWithAggregatesFilter<"lineaasiento"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    centroAnaliticoId?: Prisma.StringNullableWithAggregatesFilter<"lineaasiento"> | string | null;
    referencia?: Prisma.StringNullableWithAggregatesFilter<"lineaasiento"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"lineaasiento"> | Date | string;
};
export type lineaasientoCreateInput = {
    id: string;
    concepto?: string | null;
    debe?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: string | null;
    createdAt?: Date | string;
    asiento: Prisma.asientoCreateNestedOneWithoutLineaasientoInput;
    centroanalitico?: Prisma.centroanaliticoCreateNestedOneWithoutLineaasientoInput;
    cuentacontable: Prisma.cuentacontableCreateNestedOneWithoutLineaasientoInput;
};
export type lineaasientoUncheckedCreateInput = {
    id: string;
    asientoId: string;
    cuentaContableId: string;
    concepto?: string | null;
    debe?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    centroAnaliticoId?: string | null;
    referencia?: string | null;
    createdAt?: Date | string;
};
export type lineaasientoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    debe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asiento?: Prisma.asientoUpdateOneRequiredWithoutLineaasientoNestedInput;
    centroanalitico?: Prisma.centroanaliticoUpdateOneWithoutLineaasientoNestedInput;
    cuentacontable?: Prisma.cuentacontableUpdateOneRequiredWithoutLineaasientoNestedInput;
};
export type lineaasientoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    asientoId?: Prisma.StringFieldUpdateOperationsInput | string;
    cuentaContableId?: Prisma.StringFieldUpdateOperationsInput | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    debe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type lineaasientoCreateManyInput = {
    id: string;
    asientoId: string;
    cuentaContableId: string;
    concepto?: string | null;
    debe?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    centroAnaliticoId?: string | null;
    referencia?: string | null;
    createdAt?: Date | string;
};
export type lineaasientoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    debe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type lineaasientoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    asientoId?: Prisma.StringFieldUpdateOperationsInput | string;
    cuentaContableId?: Prisma.StringFieldUpdateOperationsInput | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    debe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LineaasientoListRelationFilter = {
    every?: Prisma.lineaasientoWhereInput;
    some?: Prisma.lineaasientoWhereInput;
    none?: Prisma.lineaasientoWhereInput;
};
export type lineaasientoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type lineaasientoOrderByRelevanceInput = {
    fields: Prisma.lineaasientoOrderByRelevanceFieldEnum | Prisma.lineaasientoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type lineaasientoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    cuentaContableId?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    debe?: Prisma.SortOrder;
    haber?: Prisma.SortOrder;
    centroAnaliticoId?: Prisma.SortOrder;
    referencia?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type lineaasientoAvgOrderByAggregateInput = {
    debe?: Prisma.SortOrder;
    haber?: Prisma.SortOrder;
};
export type lineaasientoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    cuentaContableId?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    debe?: Prisma.SortOrder;
    haber?: Prisma.SortOrder;
    centroAnaliticoId?: Prisma.SortOrder;
    referencia?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type lineaasientoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    cuentaContableId?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    debe?: Prisma.SortOrder;
    haber?: Prisma.SortOrder;
    centroAnaliticoId?: Prisma.SortOrder;
    referencia?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type lineaasientoSumOrderByAggregateInput = {
    debe?: Prisma.SortOrder;
    haber?: Prisma.SortOrder;
};
export type lineaasientoCreateNestedManyWithoutAsientoInput = {
    create?: Prisma.XOR<Prisma.lineaasientoCreateWithoutAsientoInput, Prisma.lineaasientoUncheckedCreateWithoutAsientoInput> | Prisma.lineaasientoCreateWithoutAsientoInput[] | Prisma.lineaasientoUncheckedCreateWithoutAsientoInput[];
    connectOrCreate?: Prisma.lineaasientoCreateOrConnectWithoutAsientoInput | Prisma.lineaasientoCreateOrConnectWithoutAsientoInput[];
    createMany?: Prisma.lineaasientoCreateManyAsientoInputEnvelope;
    connect?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
};
export type lineaasientoUncheckedCreateNestedManyWithoutAsientoInput = {
    create?: Prisma.XOR<Prisma.lineaasientoCreateWithoutAsientoInput, Prisma.lineaasientoUncheckedCreateWithoutAsientoInput> | Prisma.lineaasientoCreateWithoutAsientoInput[] | Prisma.lineaasientoUncheckedCreateWithoutAsientoInput[];
    connectOrCreate?: Prisma.lineaasientoCreateOrConnectWithoutAsientoInput | Prisma.lineaasientoCreateOrConnectWithoutAsientoInput[];
    createMany?: Prisma.lineaasientoCreateManyAsientoInputEnvelope;
    connect?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
};
export type lineaasientoUpdateManyWithoutAsientoNestedInput = {
    create?: Prisma.XOR<Prisma.lineaasientoCreateWithoutAsientoInput, Prisma.lineaasientoUncheckedCreateWithoutAsientoInput> | Prisma.lineaasientoCreateWithoutAsientoInput[] | Prisma.lineaasientoUncheckedCreateWithoutAsientoInput[];
    connectOrCreate?: Prisma.lineaasientoCreateOrConnectWithoutAsientoInput | Prisma.lineaasientoCreateOrConnectWithoutAsientoInput[];
    upsert?: Prisma.lineaasientoUpsertWithWhereUniqueWithoutAsientoInput | Prisma.lineaasientoUpsertWithWhereUniqueWithoutAsientoInput[];
    createMany?: Prisma.lineaasientoCreateManyAsientoInputEnvelope;
    set?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    disconnect?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    delete?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    connect?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    update?: Prisma.lineaasientoUpdateWithWhereUniqueWithoutAsientoInput | Prisma.lineaasientoUpdateWithWhereUniqueWithoutAsientoInput[];
    updateMany?: Prisma.lineaasientoUpdateManyWithWhereWithoutAsientoInput | Prisma.lineaasientoUpdateManyWithWhereWithoutAsientoInput[];
    deleteMany?: Prisma.lineaasientoScalarWhereInput | Prisma.lineaasientoScalarWhereInput[];
};
export type lineaasientoUncheckedUpdateManyWithoutAsientoNestedInput = {
    create?: Prisma.XOR<Prisma.lineaasientoCreateWithoutAsientoInput, Prisma.lineaasientoUncheckedCreateWithoutAsientoInput> | Prisma.lineaasientoCreateWithoutAsientoInput[] | Prisma.lineaasientoUncheckedCreateWithoutAsientoInput[];
    connectOrCreate?: Prisma.lineaasientoCreateOrConnectWithoutAsientoInput | Prisma.lineaasientoCreateOrConnectWithoutAsientoInput[];
    upsert?: Prisma.lineaasientoUpsertWithWhereUniqueWithoutAsientoInput | Prisma.lineaasientoUpsertWithWhereUniqueWithoutAsientoInput[];
    createMany?: Prisma.lineaasientoCreateManyAsientoInputEnvelope;
    set?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    disconnect?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    delete?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    connect?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    update?: Prisma.lineaasientoUpdateWithWhereUniqueWithoutAsientoInput | Prisma.lineaasientoUpdateWithWhereUniqueWithoutAsientoInput[];
    updateMany?: Prisma.lineaasientoUpdateManyWithWhereWithoutAsientoInput | Prisma.lineaasientoUpdateManyWithWhereWithoutAsientoInput[];
    deleteMany?: Prisma.lineaasientoScalarWhereInput | Prisma.lineaasientoScalarWhereInput[];
};
export type lineaasientoCreateNestedManyWithoutCentroanaliticoInput = {
    create?: Prisma.XOR<Prisma.lineaasientoCreateWithoutCentroanaliticoInput, Prisma.lineaasientoUncheckedCreateWithoutCentroanaliticoInput> | Prisma.lineaasientoCreateWithoutCentroanaliticoInput[] | Prisma.lineaasientoUncheckedCreateWithoutCentroanaliticoInput[];
    connectOrCreate?: Prisma.lineaasientoCreateOrConnectWithoutCentroanaliticoInput | Prisma.lineaasientoCreateOrConnectWithoutCentroanaliticoInput[];
    createMany?: Prisma.lineaasientoCreateManyCentroanaliticoInputEnvelope;
    connect?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
};
export type lineaasientoUncheckedCreateNestedManyWithoutCentroanaliticoInput = {
    create?: Prisma.XOR<Prisma.lineaasientoCreateWithoutCentroanaliticoInput, Prisma.lineaasientoUncheckedCreateWithoutCentroanaliticoInput> | Prisma.lineaasientoCreateWithoutCentroanaliticoInput[] | Prisma.lineaasientoUncheckedCreateWithoutCentroanaliticoInput[];
    connectOrCreate?: Prisma.lineaasientoCreateOrConnectWithoutCentroanaliticoInput | Prisma.lineaasientoCreateOrConnectWithoutCentroanaliticoInput[];
    createMany?: Prisma.lineaasientoCreateManyCentroanaliticoInputEnvelope;
    connect?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
};
export type lineaasientoUpdateManyWithoutCentroanaliticoNestedInput = {
    create?: Prisma.XOR<Prisma.lineaasientoCreateWithoutCentroanaliticoInput, Prisma.lineaasientoUncheckedCreateWithoutCentroanaliticoInput> | Prisma.lineaasientoCreateWithoutCentroanaliticoInput[] | Prisma.lineaasientoUncheckedCreateWithoutCentroanaliticoInput[];
    connectOrCreate?: Prisma.lineaasientoCreateOrConnectWithoutCentroanaliticoInput | Prisma.lineaasientoCreateOrConnectWithoutCentroanaliticoInput[];
    upsert?: Prisma.lineaasientoUpsertWithWhereUniqueWithoutCentroanaliticoInput | Prisma.lineaasientoUpsertWithWhereUniqueWithoutCentroanaliticoInput[];
    createMany?: Prisma.lineaasientoCreateManyCentroanaliticoInputEnvelope;
    set?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    disconnect?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    delete?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    connect?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    update?: Prisma.lineaasientoUpdateWithWhereUniqueWithoutCentroanaliticoInput | Prisma.lineaasientoUpdateWithWhereUniqueWithoutCentroanaliticoInput[];
    updateMany?: Prisma.lineaasientoUpdateManyWithWhereWithoutCentroanaliticoInput | Prisma.lineaasientoUpdateManyWithWhereWithoutCentroanaliticoInput[];
    deleteMany?: Prisma.lineaasientoScalarWhereInput | Prisma.lineaasientoScalarWhereInput[];
};
export type lineaasientoUncheckedUpdateManyWithoutCentroanaliticoNestedInput = {
    create?: Prisma.XOR<Prisma.lineaasientoCreateWithoutCentroanaliticoInput, Prisma.lineaasientoUncheckedCreateWithoutCentroanaliticoInput> | Prisma.lineaasientoCreateWithoutCentroanaliticoInput[] | Prisma.lineaasientoUncheckedCreateWithoutCentroanaliticoInput[];
    connectOrCreate?: Prisma.lineaasientoCreateOrConnectWithoutCentroanaliticoInput | Prisma.lineaasientoCreateOrConnectWithoutCentroanaliticoInput[];
    upsert?: Prisma.lineaasientoUpsertWithWhereUniqueWithoutCentroanaliticoInput | Prisma.lineaasientoUpsertWithWhereUniqueWithoutCentroanaliticoInput[];
    createMany?: Prisma.lineaasientoCreateManyCentroanaliticoInputEnvelope;
    set?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    disconnect?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    delete?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    connect?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    update?: Prisma.lineaasientoUpdateWithWhereUniqueWithoutCentroanaliticoInput | Prisma.lineaasientoUpdateWithWhereUniqueWithoutCentroanaliticoInput[];
    updateMany?: Prisma.lineaasientoUpdateManyWithWhereWithoutCentroanaliticoInput | Prisma.lineaasientoUpdateManyWithWhereWithoutCentroanaliticoInput[];
    deleteMany?: Prisma.lineaasientoScalarWhereInput | Prisma.lineaasientoScalarWhereInput[];
};
export type lineaasientoCreateNestedManyWithoutCuentacontableInput = {
    create?: Prisma.XOR<Prisma.lineaasientoCreateWithoutCuentacontableInput, Prisma.lineaasientoUncheckedCreateWithoutCuentacontableInput> | Prisma.lineaasientoCreateWithoutCuentacontableInput[] | Prisma.lineaasientoUncheckedCreateWithoutCuentacontableInput[];
    connectOrCreate?: Prisma.lineaasientoCreateOrConnectWithoutCuentacontableInput | Prisma.lineaasientoCreateOrConnectWithoutCuentacontableInput[];
    createMany?: Prisma.lineaasientoCreateManyCuentacontableInputEnvelope;
    connect?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
};
export type lineaasientoUncheckedCreateNestedManyWithoutCuentacontableInput = {
    create?: Prisma.XOR<Prisma.lineaasientoCreateWithoutCuentacontableInput, Prisma.lineaasientoUncheckedCreateWithoutCuentacontableInput> | Prisma.lineaasientoCreateWithoutCuentacontableInput[] | Prisma.lineaasientoUncheckedCreateWithoutCuentacontableInput[];
    connectOrCreate?: Prisma.lineaasientoCreateOrConnectWithoutCuentacontableInput | Prisma.lineaasientoCreateOrConnectWithoutCuentacontableInput[];
    createMany?: Prisma.lineaasientoCreateManyCuentacontableInputEnvelope;
    connect?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
};
export type lineaasientoUpdateManyWithoutCuentacontableNestedInput = {
    create?: Prisma.XOR<Prisma.lineaasientoCreateWithoutCuentacontableInput, Prisma.lineaasientoUncheckedCreateWithoutCuentacontableInput> | Prisma.lineaasientoCreateWithoutCuentacontableInput[] | Prisma.lineaasientoUncheckedCreateWithoutCuentacontableInput[];
    connectOrCreate?: Prisma.lineaasientoCreateOrConnectWithoutCuentacontableInput | Prisma.lineaasientoCreateOrConnectWithoutCuentacontableInput[];
    upsert?: Prisma.lineaasientoUpsertWithWhereUniqueWithoutCuentacontableInput | Prisma.lineaasientoUpsertWithWhereUniqueWithoutCuentacontableInput[];
    createMany?: Prisma.lineaasientoCreateManyCuentacontableInputEnvelope;
    set?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    disconnect?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    delete?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    connect?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    update?: Prisma.lineaasientoUpdateWithWhereUniqueWithoutCuentacontableInput | Prisma.lineaasientoUpdateWithWhereUniqueWithoutCuentacontableInput[];
    updateMany?: Prisma.lineaasientoUpdateManyWithWhereWithoutCuentacontableInput | Prisma.lineaasientoUpdateManyWithWhereWithoutCuentacontableInput[];
    deleteMany?: Prisma.lineaasientoScalarWhereInput | Prisma.lineaasientoScalarWhereInput[];
};
export type lineaasientoUncheckedUpdateManyWithoutCuentacontableNestedInput = {
    create?: Prisma.XOR<Prisma.lineaasientoCreateWithoutCuentacontableInput, Prisma.lineaasientoUncheckedCreateWithoutCuentacontableInput> | Prisma.lineaasientoCreateWithoutCuentacontableInput[] | Prisma.lineaasientoUncheckedCreateWithoutCuentacontableInput[];
    connectOrCreate?: Prisma.lineaasientoCreateOrConnectWithoutCuentacontableInput | Prisma.lineaasientoCreateOrConnectWithoutCuentacontableInput[];
    upsert?: Prisma.lineaasientoUpsertWithWhereUniqueWithoutCuentacontableInput | Prisma.lineaasientoUpsertWithWhereUniqueWithoutCuentacontableInput[];
    createMany?: Prisma.lineaasientoCreateManyCuentacontableInputEnvelope;
    set?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    disconnect?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    delete?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    connect?: Prisma.lineaasientoWhereUniqueInput | Prisma.lineaasientoWhereUniqueInput[];
    update?: Prisma.lineaasientoUpdateWithWhereUniqueWithoutCuentacontableInput | Prisma.lineaasientoUpdateWithWhereUniqueWithoutCuentacontableInput[];
    updateMany?: Prisma.lineaasientoUpdateManyWithWhereWithoutCuentacontableInput | Prisma.lineaasientoUpdateManyWithWhereWithoutCuentacontableInput[];
    deleteMany?: Prisma.lineaasientoScalarWhereInput | Prisma.lineaasientoScalarWhereInput[];
};
export type lineaasientoCreateWithoutAsientoInput = {
    id: string;
    concepto?: string | null;
    debe?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: string | null;
    createdAt?: Date | string;
    centroanalitico?: Prisma.centroanaliticoCreateNestedOneWithoutLineaasientoInput;
    cuentacontable: Prisma.cuentacontableCreateNestedOneWithoutLineaasientoInput;
};
export type lineaasientoUncheckedCreateWithoutAsientoInput = {
    id: string;
    cuentaContableId: string;
    concepto?: string | null;
    debe?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    centroAnaliticoId?: string | null;
    referencia?: string | null;
    createdAt?: Date | string;
};
export type lineaasientoCreateOrConnectWithoutAsientoInput = {
    where: Prisma.lineaasientoWhereUniqueInput;
    create: Prisma.XOR<Prisma.lineaasientoCreateWithoutAsientoInput, Prisma.lineaasientoUncheckedCreateWithoutAsientoInput>;
};
export type lineaasientoCreateManyAsientoInputEnvelope = {
    data: Prisma.lineaasientoCreateManyAsientoInput | Prisma.lineaasientoCreateManyAsientoInput[];
    skipDuplicates?: boolean;
};
export type lineaasientoUpsertWithWhereUniqueWithoutAsientoInput = {
    where: Prisma.lineaasientoWhereUniqueInput;
    update: Prisma.XOR<Prisma.lineaasientoUpdateWithoutAsientoInput, Prisma.lineaasientoUncheckedUpdateWithoutAsientoInput>;
    create: Prisma.XOR<Prisma.lineaasientoCreateWithoutAsientoInput, Prisma.lineaasientoUncheckedCreateWithoutAsientoInput>;
};
export type lineaasientoUpdateWithWhereUniqueWithoutAsientoInput = {
    where: Prisma.lineaasientoWhereUniqueInput;
    data: Prisma.XOR<Prisma.lineaasientoUpdateWithoutAsientoInput, Prisma.lineaasientoUncheckedUpdateWithoutAsientoInput>;
};
export type lineaasientoUpdateManyWithWhereWithoutAsientoInput = {
    where: Prisma.lineaasientoScalarWhereInput;
    data: Prisma.XOR<Prisma.lineaasientoUpdateManyMutationInput, Prisma.lineaasientoUncheckedUpdateManyWithoutAsientoInput>;
};
export type lineaasientoScalarWhereInput = {
    AND?: Prisma.lineaasientoScalarWhereInput | Prisma.lineaasientoScalarWhereInput[];
    OR?: Prisma.lineaasientoScalarWhereInput[];
    NOT?: Prisma.lineaasientoScalarWhereInput | Prisma.lineaasientoScalarWhereInput[];
    id?: Prisma.StringFilter<"lineaasiento"> | string;
    asientoId?: Prisma.StringFilter<"lineaasiento"> | string;
    cuentaContableId?: Prisma.StringFilter<"lineaasiento"> | string;
    concepto?: Prisma.StringNullableFilter<"lineaasiento"> | string | null;
    debe?: Prisma.DecimalFilter<"lineaasiento"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: Prisma.DecimalFilter<"lineaasiento"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    centroAnaliticoId?: Prisma.StringNullableFilter<"lineaasiento"> | string | null;
    referencia?: Prisma.StringNullableFilter<"lineaasiento"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"lineaasiento"> | Date | string;
};
export type lineaasientoCreateWithoutCentroanaliticoInput = {
    id: string;
    concepto?: string | null;
    debe?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: string | null;
    createdAt?: Date | string;
    asiento: Prisma.asientoCreateNestedOneWithoutLineaasientoInput;
    cuentacontable: Prisma.cuentacontableCreateNestedOneWithoutLineaasientoInput;
};
export type lineaasientoUncheckedCreateWithoutCentroanaliticoInput = {
    id: string;
    asientoId: string;
    cuentaContableId: string;
    concepto?: string | null;
    debe?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: string | null;
    createdAt?: Date | string;
};
export type lineaasientoCreateOrConnectWithoutCentroanaliticoInput = {
    where: Prisma.lineaasientoWhereUniqueInput;
    create: Prisma.XOR<Prisma.lineaasientoCreateWithoutCentroanaliticoInput, Prisma.lineaasientoUncheckedCreateWithoutCentroanaliticoInput>;
};
export type lineaasientoCreateManyCentroanaliticoInputEnvelope = {
    data: Prisma.lineaasientoCreateManyCentroanaliticoInput | Prisma.lineaasientoCreateManyCentroanaliticoInput[];
    skipDuplicates?: boolean;
};
export type lineaasientoUpsertWithWhereUniqueWithoutCentroanaliticoInput = {
    where: Prisma.lineaasientoWhereUniqueInput;
    update: Prisma.XOR<Prisma.lineaasientoUpdateWithoutCentroanaliticoInput, Prisma.lineaasientoUncheckedUpdateWithoutCentroanaliticoInput>;
    create: Prisma.XOR<Prisma.lineaasientoCreateWithoutCentroanaliticoInput, Prisma.lineaasientoUncheckedCreateWithoutCentroanaliticoInput>;
};
export type lineaasientoUpdateWithWhereUniqueWithoutCentroanaliticoInput = {
    where: Prisma.lineaasientoWhereUniqueInput;
    data: Prisma.XOR<Prisma.lineaasientoUpdateWithoutCentroanaliticoInput, Prisma.lineaasientoUncheckedUpdateWithoutCentroanaliticoInput>;
};
export type lineaasientoUpdateManyWithWhereWithoutCentroanaliticoInput = {
    where: Prisma.lineaasientoScalarWhereInput;
    data: Prisma.XOR<Prisma.lineaasientoUpdateManyMutationInput, Prisma.lineaasientoUncheckedUpdateManyWithoutCentroanaliticoInput>;
};
export type lineaasientoCreateWithoutCuentacontableInput = {
    id: string;
    concepto?: string | null;
    debe?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: string | null;
    createdAt?: Date | string;
    asiento: Prisma.asientoCreateNestedOneWithoutLineaasientoInput;
    centroanalitico?: Prisma.centroanaliticoCreateNestedOneWithoutLineaasientoInput;
};
export type lineaasientoUncheckedCreateWithoutCuentacontableInput = {
    id: string;
    asientoId: string;
    concepto?: string | null;
    debe?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    centroAnaliticoId?: string | null;
    referencia?: string | null;
    createdAt?: Date | string;
};
export type lineaasientoCreateOrConnectWithoutCuentacontableInput = {
    where: Prisma.lineaasientoWhereUniqueInput;
    create: Prisma.XOR<Prisma.lineaasientoCreateWithoutCuentacontableInput, Prisma.lineaasientoUncheckedCreateWithoutCuentacontableInput>;
};
export type lineaasientoCreateManyCuentacontableInputEnvelope = {
    data: Prisma.lineaasientoCreateManyCuentacontableInput | Prisma.lineaasientoCreateManyCuentacontableInput[];
    skipDuplicates?: boolean;
};
export type lineaasientoUpsertWithWhereUniqueWithoutCuentacontableInput = {
    where: Prisma.lineaasientoWhereUniqueInput;
    update: Prisma.XOR<Prisma.lineaasientoUpdateWithoutCuentacontableInput, Prisma.lineaasientoUncheckedUpdateWithoutCuentacontableInput>;
    create: Prisma.XOR<Prisma.lineaasientoCreateWithoutCuentacontableInput, Prisma.lineaasientoUncheckedCreateWithoutCuentacontableInput>;
};
export type lineaasientoUpdateWithWhereUniqueWithoutCuentacontableInput = {
    where: Prisma.lineaasientoWhereUniqueInput;
    data: Prisma.XOR<Prisma.lineaasientoUpdateWithoutCuentacontableInput, Prisma.lineaasientoUncheckedUpdateWithoutCuentacontableInput>;
};
export type lineaasientoUpdateManyWithWhereWithoutCuentacontableInput = {
    where: Prisma.lineaasientoScalarWhereInput;
    data: Prisma.XOR<Prisma.lineaasientoUpdateManyMutationInput, Prisma.lineaasientoUncheckedUpdateManyWithoutCuentacontableInput>;
};
export type lineaasientoCreateManyAsientoInput = {
    id: string;
    cuentaContableId: string;
    concepto?: string | null;
    debe?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    centroAnaliticoId?: string | null;
    referencia?: string | null;
    createdAt?: Date | string;
};
export type lineaasientoUpdateWithoutAsientoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    debe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    centroanalitico?: Prisma.centroanaliticoUpdateOneWithoutLineaasientoNestedInput;
    cuentacontable?: Prisma.cuentacontableUpdateOneRequiredWithoutLineaasientoNestedInput;
};
export type lineaasientoUncheckedUpdateWithoutAsientoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cuentaContableId?: Prisma.StringFieldUpdateOperationsInput | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    debe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type lineaasientoUncheckedUpdateManyWithoutAsientoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cuentaContableId?: Prisma.StringFieldUpdateOperationsInput | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    debe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type lineaasientoCreateManyCentroanaliticoInput = {
    id: string;
    asientoId: string;
    cuentaContableId: string;
    concepto?: string | null;
    debe?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: string | null;
    createdAt?: Date | string;
};
export type lineaasientoUpdateWithoutCentroanaliticoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    debe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asiento?: Prisma.asientoUpdateOneRequiredWithoutLineaasientoNestedInput;
    cuentacontable?: Prisma.cuentacontableUpdateOneRequiredWithoutLineaasientoNestedInput;
};
export type lineaasientoUncheckedUpdateWithoutCentroanaliticoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    asientoId?: Prisma.StringFieldUpdateOperationsInput | string;
    cuentaContableId?: Prisma.StringFieldUpdateOperationsInput | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    debe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type lineaasientoUncheckedUpdateManyWithoutCentroanaliticoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    asientoId?: Prisma.StringFieldUpdateOperationsInput | string;
    cuentaContableId?: Prisma.StringFieldUpdateOperationsInput | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    debe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type lineaasientoCreateManyCuentacontableInput = {
    id: string;
    asientoId: string;
    concepto?: string | null;
    debe?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    centroAnaliticoId?: string | null;
    referencia?: string | null;
    createdAt?: Date | string;
};
export type lineaasientoUpdateWithoutCuentacontableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    debe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asiento?: Prisma.asientoUpdateOneRequiredWithoutLineaasientoNestedInput;
    centroanalitico?: Prisma.centroanaliticoUpdateOneWithoutLineaasientoNestedInput;
};
export type lineaasientoUncheckedUpdateWithoutCuentacontableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    asientoId?: Prisma.StringFieldUpdateOperationsInput | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    debe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type lineaasientoUncheckedUpdateManyWithoutCuentacontableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    asientoId?: Prisma.StringFieldUpdateOperationsInput | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    debe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    haber?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type lineaasientoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    asientoId?: boolean;
    cuentaContableId?: boolean;
    concepto?: boolean;
    debe?: boolean;
    haber?: boolean;
    centroAnaliticoId?: boolean;
    referencia?: boolean;
    createdAt?: boolean;
    asiento?: boolean | Prisma.asientoDefaultArgs<ExtArgs>;
    centroanalitico?: boolean | Prisma.lineaasiento$centroanaliticoArgs<ExtArgs>;
    cuentacontable?: boolean | Prisma.cuentacontableDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lineaasiento"]>;
export type lineaasientoSelectScalar = {
    id?: boolean;
    asientoId?: boolean;
    cuentaContableId?: boolean;
    concepto?: boolean;
    debe?: boolean;
    haber?: boolean;
    centroAnaliticoId?: boolean;
    referencia?: boolean;
    createdAt?: boolean;
};
export type lineaasientoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "asientoId" | "cuentaContableId" | "concepto" | "debe" | "haber" | "centroAnaliticoId" | "referencia" | "createdAt", ExtArgs["result"]["lineaasiento"]>;
export type lineaasientoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asiento?: boolean | Prisma.asientoDefaultArgs<ExtArgs>;
    centroanalitico?: boolean | Prisma.lineaasiento$centroanaliticoArgs<ExtArgs>;
    cuentacontable?: boolean | Prisma.cuentacontableDefaultArgs<ExtArgs>;
};
export type $lineaasientoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "lineaasiento";
    objects: {
        asiento: Prisma.$asientoPayload<ExtArgs>;
        centroanalitico: Prisma.$centroanaliticoPayload<ExtArgs> | null;
        cuentacontable: Prisma.$cuentacontablePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        asientoId: string;
        cuentaContableId: string;
        concepto: string | null;
        debe: runtime.Decimal;
        haber: runtime.Decimal;
        centroAnaliticoId: string | null;
        referencia: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["lineaasiento"]>;
    composites: {};
};
export type lineaasientoGetPayload<S extends boolean | null | undefined | lineaasientoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$lineaasientoPayload, S>;
export type lineaasientoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<lineaasientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LineaasientoCountAggregateInputType | true;
};
export interface lineaasientoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['lineaasiento'];
        meta: {
            name: 'lineaasiento';
        };
    };
    /**
     * Find zero or one Lineaasiento that matches the filter.
     * @param {lineaasientoFindUniqueArgs} args - Arguments to find a Lineaasiento
     * @example
     * // Get one Lineaasiento
     * const lineaasiento = await prisma.lineaasiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lineaasientoFindUniqueArgs>(args: Prisma.SelectSubset<T, lineaasientoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__lineaasientoClient<runtime.Types.Result.GetResult<Prisma.$lineaasientoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Lineaasiento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lineaasientoFindUniqueOrThrowArgs} args - Arguments to find a Lineaasiento
     * @example
     * // Get one Lineaasiento
     * const lineaasiento = await prisma.lineaasiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lineaasientoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, lineaasientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__lineaasientoClient<runtime.Types.Result.GetResult<Prisma.$lineaasientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Lineaasiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lineaasientoFindFirstArgs} args - Arguments to find a Lineaasiento
     * @example
     * // Get one Lineaasiento
     * const lineaasiento = await prisma.lineaasiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lineaasientoFindFirstArgs>(args?: Prisma.SelectSubset<T, lineaasientoFindFirstArgs<ExtArgs>>): Prisma.Prisma__lineaasientoClient<runtime.Types.Result.GetResult<Prisma.$lineaasientoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Lineaasiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lineaasientoFindFirstOrThrowArgs} args - Arguments to find a Lineaasiento
     * @example
     * // Get one Lineaasiento
     * const lineaasiento = await prisma.lineaasiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lineaasientoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, lineaasientoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__lineaasientoClient<runtime.Types.Result.GetResult<Prisma.$lineaasientoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Lineaasientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lineaasientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lineaasientos
     * const lineaasientos = await prisma.lineaasiento.findMany()
     *
     * // Get first 10 Lineaasientos
     * const lineaasientos = await prisma.lineaasiento.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const lineaasientoWithIdOnly = await prisma.lineaasiento.findMany({ select: { id: true } })
     *
     */
    findMany<T extends lineaasientoFindManyArgs>(args?: Prisma.SelectSubset<T, lineaasientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lineaasientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Lineaasiento.
     * @param {lineaasientoCreateArgs} args - Arguments to create a Lineaasiento.
     * @example
     * // Create one Lineaasiento
     * const Lineaasiento = await prisma.lineaasiento.create({
     *   data: {
     *     // ... data to create a Lineaasiento
     *   }
     * })
     *
     */
    create<T extends lineaasientoCreateArgs>(args: Prisma.SelectSubset<T, lineaasientoCreateArgs<ExtArgs>>): Prisma.Prisma__lineaasientoClient<runtime.Types.Result.GetResult<Prisma.$lineaasientoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Lineaasientos.
     * @param {lineaasientoCreateManyArgs} args - Arguments to create many Lineaasientos.
     * @example
     * // Create many Lineaasientos
     * const lineaasiento = await prisma.lineaasiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends lineaasientoCreateManyArgs>(args?: Prisma.SelectSubset<T, lineaasientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Lineaasiento.
     * @param {lineaasientoDeleteArgs} args - Arguments to delete one Lineaasiento.
     * @example
     * // Delete one Lineaasiento
     * const Lineaasiento = await prisma.lineaasiento.delete({
     *   where: {
     *     // ... filter to delete one Lineaasiento
     *   }
     * })
     *
     */
    delete<T extends lineaasientoDeleteArgs>(args: Prisma.SelectSubset<T, lineaasientoDeleteArgs<ExtArgs>>): Prisma.Prisma__lineaasientoClient<runtime.Types.Result.GetResult<Prisma.$lineaasientoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Lineaasiento.
     * @param {lineaasientoUpdateArgs} args - Arguments to update one Lineaasiento.
     * @example
     * // Update one Lineaasiento
     * const lineaasiento = await prisma.lineaasiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends lineaasientoUpdateArgs>(args: Prisma.SelectSubset<T, lineaasientoUpdateArgs<ExtArgs>>): Prisma.Prisma__lineaasientoClient<runtime.Types.Result.GetResult<Prisma.$lineaasientoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Lineaasientos.
     * @param {lineaasientoDeleteManyArgs} args - Arguments to filter Lineaasientos to delete.
     * @example
     * // Delete a few Lineaasientos
     * const { count } = await prisma.lineaasiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends lineaasientoDeleteManyArgs>(args?: Prisma.SelectSubset<T, lineaasientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Lineaasientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lineaasientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lineaasientos
     * const lineaasiento = await prisma.lineaasiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends lineaasientoUpdateManyArgs>(args: Prisma.SelectSubset<T, lineaasientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Lineaasiento.
     * @param {lineaasientoUpsertArgs} args - Arguments to update or create a Lineaasiento.
     * @example
     * // Update or create a Lineaasiento
     * const lineaasiento = await prisma.lineaasiento.upsert({
     *   create: {
     *     // ... data to create a Lineaasiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lineaasiento we want to update
     *   }
     * })
     */
    upsert<T extends lineaasientoUpsertArgs>(args: Prisma.SelectSubset<T, lineaasientoUpsertArgs<ExtArgs>>): Prisma.Prisma__lineaasientoClient<runtime.Types.Result.GetResult<Prisma.$lineaasientoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Lineaasientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lineaasientoCountArgs} args - Arguments to filter Lineaasientos to count.
     * @example
     * // Count the number of Lineaasientos
     * const count = await prisma.lineaasiento.count({
     *   where: {
     *     // ... the filter for the Lineaasientos we want to count
     *   }
     * })
    **/
    count<T extends lineaasientoCountArgs>(args?: Prisma.Subset<T, lineaasientoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LineaasientoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Lineaasiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineaasientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LineaasientoAggregateArgs>(args: Prisma.Subset<T, LineaasientoAggregateArgs>): Prisma.PrismaPromise<GetLineaasientoAggregateType<T>>;
    /**
     * Group by Lineaasiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lineaasientoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends lineaasientoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: lineaasientoGroupByArgs['orderBy'];
    } : {
        orderBy?: lineaasientoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, lineaasientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLineaasientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the lineaasiento model
     */
    readonly fields: lineaasientoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for lineaasiento.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__lineaasientoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    asiento<T extends Prisma.asientoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.asientoDefaultArgs<ExtArgs>>): Prisma.Prisma__asientoClient<runtime.Types.Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    centroanalitico<T extends Prisma.lineaasiento$centroanaliticoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.lineaasiento$centroanaliticoArgs<ExtArgs>>): Prisma.Prisma__centroanaliticoClient<runtime.Types.Result.GetResult<Prisma.$centroanaliticoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    cuentacontable<T extends Prisma.cuentacontableDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cuentacontableDefaultArgs<ExtArgs>>): Prisma.Prisma__cuentacontableClient<runtime.Types.Result.GetResult<Prisma.$cuentacontablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the lineaasiento model
 */
export interface lineaasientoFieldRefs {
    readonly id: Prisma.FieldRef<"lineaasiento", 'String'>;
    readonly asientoId: Prisma.FieldRef<"lineaasiento", 'String'>;
    readonly cuentaContableId: Prisma.FieldRef<"lineaasiento", 'String'>;
    readonly concepto: Prisma.FieldRef<"lineaasiento", 'String'>;
    readonly debe: Prisma.FieldRef<"lineaasiento", 'Decimal'>;
    readonly haber: Prisma.FieldRef<"lineaasiento", 'Decimal'>;
    readonly centroAnaliticoId: Prisma.FieldRef<"lineaasiento", 'String'>;
    readonly referencia: Prisma.FieldRef<"lineaasiento", 'String'>;
    readonly createdAt: Prisma.FieldRef<"lineaasiento", 'DateTime'>;
}
/**
 * lineaasiento findUnique
 */
export type lineaasientoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineaasiento
     */
    select?: Prisma.lineaasientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineaasiento
     */
    omit?: Prisma.lineaasientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineaasientoInclude<ExtArgs> | null;
    /**
     * Filter, which lineaasiento to fetch.
     */
    where: Prisma.lineaasientoWhereUniqueInput;
};
/**
 * lineaasiento findUniqueOrThrow
 */
export type lineaasientoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineaasiento
     */
    select?: Prisma.lineaasientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineaasiento
     */
    omit?: Prisma.lineaasientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineaasientoInclude<ExtArgs> | null;
    /**
     * Filter, which lineaasiento to fetch.
     */
    where: Prisma.lineaasientoWhereUniqueInput;
};
/**
 * lineaasiento findFirst
 */
export type lineaasientoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineaasiento
     */
    select?: Prisma.lineaasientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineaasiento
     */
    omit?: Prisma.lineaasientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineaasientoInclude<ExtArgs> | null;
    /**
     * Filter, which lineaasiento to fetch.
     */
    where?: Prisma.lineaasientoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lineaasientos to fetch.
     */
    orderBy?: Prisma.lineaasientoOrderByWithRelationInput | Prisma.lineaasientoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for lineaasientos.
     */
    cursor?: Prisma.lineaasientoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lineaasientos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lineaasientos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of lineaasientos.
     */
    distinct?: Prisma.LineaasientoScalarFieldEnum | Prisma.LineaasientoScalarFieldEnum[];
};
/**
 * lineaasiento findFirstOrThrow
 */
export type lineaasientoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineaasiento
     */
    select?: Prisma.lineaasientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineaasiento
     */
    omit?: Prisma.lineaasientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineaasientoInclude<ExtArgs> | null;
    /**
     * Filter, which lineaasiento to fetch.
     */
    where?: Prisma.lineaasientoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lineaasientos to fetch.
     */
    orderBy?: Prisma.lineaasientoOrderByWithRelationInput | Prisma.lineaasientoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for lineaasientos.
     */
    cursor?: Prisma.lineaasientoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lineaasientos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lineaasientos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of lineaasientos.
     */
    distinct?: Prisma.LineaasientoScalarFieldEnum | Prisma.LineaasientoScalarFieldEnum[];
};
/**
 * lineaasiento findMany
 */
export type lineaasientoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineaasiento
     */
    select?: Prisma.lineaasientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineaasiento
     */
    omit?: Prisma.lineaasientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineaasientoInclude<ExtArgs> | null;
    /**
     * Filter, which lineaasientos to fetch.
     */
    where?: Prisma.lineaasientoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lineaasientos to fetch.
     */
    orderBy?: Prisma.lineaasientoOrderByWithRelationInput | Prisma.lineaasientoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing lineaasientos.
     */
    cursor?: Prisma.lineaasientoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lineaasientos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lineaasientos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of lineaasientos.
     */
    distinct?: Prisma.LineaasientoScalarFieldEnum | Prisma.LineaasientoScalarFieldEnum[];
};
/**
 * lineaasiento create
 */
export type lineaasientoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineaasiento
     */
    select?: Prisma.lineaasientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineaasiento
     */
    omit?: Prisma.lineaasientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineaasientoInclude<ExtArgs> | null;
    /**
     * The data needed to create a lineaasiento.
     */
    data: Prisma.XOR<Prisma.lineaasientoCreateInput, Prisma.lineaasientoUncheckedCreateInput>;
};
/**
 * lineaasiento createMany
 */
export type lineaasientoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many lineaasientos.
     */
    data: Prisma.lineaasientoCreateManyInput | Prisma.lineaasientoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * lineaasiento update
 */
export type lineaasientoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineaasiento
     */
    select?: Prisma.lineaasientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineaasiento
     */
    omit?: Prisma.lineaasientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineaasientoInclude<ExtArgs> | null;
    /**
     * The data needed to update a lineaasiento.
     */
    data: Prisma.XOR<Prisma.lineaasientoUpdateInput, Prisma.lineaasientoUncheckedUpdateInput>;
    /**
     * Choose, which lineaasiento to update.
     */
    where: Prisma.lineaasientoWhereUniqueInput;
};
/**
 * lineaasiento updateMany
 */
export type lineaasientoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update lineaasientos.
     */
    data: Prisma.XOR<Prisma.lineaasientoUpdateManyMutationInput, Prisma.lineaasientoUncheckedUpdateManyInput>;
    /**
     * Filter which lineaasientos to update
     */
    where?: Prisma.lineaasientoWhereInput;
    /**
     * Limit how many lineaasientos to update.
     */
    limit?: number;
};
/**
 * lineaasiento upsert
 */
export type lineaasientoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineaasiento
     */
    select?: Prisma.lineaasientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineaasiento
     */
    omit?: Prisma.lineaasientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineaasientoInclude<ExtArgs> | null;
    /**
     * The filter to search for the lineaasiento to update in case it exists.
     */
    where: Prisma.lineaasientoWhereUniqueInput;
    /**
     * In case the lineaasiento found by the `where` argument doesn't exist, create a new lineaasiento with this data.
     */
    create: Prisma.XOR<Prisma.lineaasientoCreateInput, Prisma.lineaasientoUncheckedCreateInput>;
    /**
     * In case the lineaasiento was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.lineaasientoUpdateInput, Prisma.lineaasientoUncheckedUpdateInput>;
};
/**
 * lineaasiento delete
 */
export type lineaasientoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineaasiento
     */
    select?: Prisma.lineaasientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineaasiento
     */
    omit?: Prisma.lineaasientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineaasientoInclude<ExtArgs> | null;
    /**
     * Filter which lineaasiento to delete.
     */
    where: Prisma.lineaasientoWhereUniqueInput;
};
/**
 * lineaasiento deleteMany
 */
export type lineaasientoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which lineaasientos to delete
     */
    where?: Prisma.lineaasientoWhereInput;
    /**
     * Limit how many lineaasientos to delete.
     */
    limit?: number;
};
/**
 * lineaasiento.centroanalitico
 */
export type lineaasiento$centroanaliticoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the centroanalitico
     */
    select?: Prisma.centroanaliticoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the centroanalitico
     */
    omit?: Prisma.centroanaliticoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.centroanaliticoInclude<ExtArgs> | null;
    where?: Prisma.centroanaliticoWhereInput;
};
/**
 * lineaasiento without action
 */
export type lineaasientoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineaasiento
     */
    select?: Prisma.lineaasientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineaasiento
     */
    omit?: Prisma.lineaasientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineaasientoInclude<ExtArgs> | null;
};
//# sourceMappingURL=lineaasiento.d.ts.map