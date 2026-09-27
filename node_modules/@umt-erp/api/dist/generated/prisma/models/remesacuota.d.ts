import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model remesacuota
 *
 */
export type remesacuotaModel = runtime.Types.Result.DefaultSelection<Prisma.$remesacuotaPayload>;
export type AggregateRemesacuota = {
    _count: RemesacuotaCountAggregateOutputType | null;
    _avg: RemesacuotaAvgAggregateOutputType | null;
    _sum: RemesacuotaSumAggregateOutputType | null;
    _min: RemesacuotaMinAggregateOutputType | null;
    _max: RemesacuotaMaxAggregateOutputType | null;
};
export type RemesacuotaAvgAggregateOutputType = {
    importe: runtime.Decimal | null;
};
export type RemesacuotaSumAggregateOutputType = {
    importe: runtime.Decimal | null;
};
export type RemesacuotaMinAggregateOutputType = {
    id: string | null;
    remesaId: string | null;
    cuotaId: string | null;
    importe: runtime.Decimal | null;
    createdAt: Date | null;
};
export type RemesacuotaMaxAggregateOutputType = {
    id: string | null;
    remesaId: string | null;
    cuotaId: string | null;
    importe: runtime.Decimal | null;
    createdAt: Date | null;
};
export type RemesacuotaCountAggregateOutputType = {
    id: number;
    remesaId: number;
    cuotaId: number;
    importe: number;
    createdAt: number;
    _all: number;
};
export type RemesacuotaAvgAggregateInputType = {
    importe?: true;
};
export type RemesacuotaSumAggregateInputType = {
    importe?: true;
};
export type RemesacuotaMinAggregateInputType = {
    id?: true;
    remesaId?: true;
    cuotaId?: true;
    importe?: true;
    createdAt?: true;
};
export type RemesacuotaMaxAggregateInputType = {
    id?: true;
    remesaId?: true;
    cuotaId?: true;
    importe?: true;
    createdAt?: true;
};
export type RemesacuotaCountAggregateInputType = {
    id?: true;
    remesaId?: true;
    cuotaId?: true;
    importe?: true;
    createdAt?: true;
    _all?: true;
};
export type RemesacuotaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which remesacuota to aggregate.
     */
    where?: Prisma.remesacuotaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of remesacuotas to fetch.
     */
    orderBy?: Prisma.remesacuotaOrderByWithRelationInput | Prisma.remesacuotaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.remesacuotaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` remesacuotas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` remesacuotas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned remesacuotas
    **/
    _count?: true | RemesacuotaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: RemesacuotaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: RemesacuotaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RemesacuotaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RemesacuotaMaxAggregateInputType;
};
export type GetRemesacuotaAggregateType<T extends RemesacuotaAggregateArgs> = {
    [P in keyof T & keyof AggregateRemesacuota]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRemesacuota[P]> : Prisma.GetScalarType<T[P], AggregateRemesacuota[P]>;
};
export type remesacuotaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.remesacuotaWhereInput;
    orderBy?: Prisma.remesacuotaOrderByWithAggregationInput | Prisma.remesacuotaOrderByWithAggregationInput[];
    by: Prisma.RemesacuotaScalarFieldEnum[] | Prisma.RemesacuotaScalarFieldEnum;
    having?: Prisma.remesacuotaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RemesacuotaCountAggregateInputType | true;
    _avg?: RemesacuotaAvgAggregateInputType;
    _sum?: RemesacuotaSumAggregateInputType;
    _min?: RemesacuotaMinAggregateInputType;
    _max?: RemesacuotaMaxAggregateInputType;
};
export type RemesacuotaGroupByOutputType = {
    id: string;
    remesaId: string;
    cuotaId: string;
    importe: runtime.Decimal;
    createdAt: Date;
    _count: RemesacuotaCountAggregateOutputType | null;
    _avg: RemesacuotaAvgAggregateOutputType | null;
    _sum: RemesacuotaSumAggregateOutputType | null;
    _min: RemesacuotaMinAggregateOutputType | null;
    _max: RemesacuotaMaxAggregateOutputType | null;
};
export type GetRemesacuotaGroupByPayload<T extends remesacuotaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RemesacuotaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RemesacuotaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RemesacuotaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RemesacuotaGroupByOutputType[P]>;
}>>;
export type remesacuotaWhereInput = {
    AND?: Prisma.remesacuotaWhereInput | Prisma.remesacuotaWhereInput[];
    OR?: Prisma.remesacuotaWhereInput[];
    NOT?: Prisma.remesacuotaWhereInput | Prisma.remesacuotaWhereInput[];
    id?: Prisma.StringFilter<"remesacuota"> | string;
    remesaId?: Prisma.StringFilter<"remesacuota"> | string;
    cuotaId?: Prisma.StringFilter<"remesacuota"> | string;
    importe?: Prisma.DecimalFilter<"remesacuota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"remesacuota"> | Date | string;
    cuota?: Prisma.XOR<Prisma.CuotaScalarRelationFilter, Prisma.cuotaWhereInput>;
    remesa?: Prisma.XOR<Prisma.RemesaScalarRelationFilter, Prisma.remesaWhereInput>;
};
export type remesacuotaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    remesaId?: Prisma.SortOrder;
    cuotaId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    cuota?: Prisma.cuotaOrderByWithRelationInput;
    remesa?: Prisma.remesaOrderByWithRelationInput;
    _relevance?: Prisma.remesacuotaOrderByRelevanceInput;
};
export type remesacuotaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.remesacuotaWhereInput | Prisma.remesacuotaWhereInput[];
    OR?: Prisma.remesacuotaWhereInput[];
    NOT?: Prisma.remesacuotaWhereInput | Prisma.remesacuotaWhereInput[];
    remesaId?: Prisma.StringFilter<"remesacuota"> | string;
    cuotaId?: Prisma.StringFilter<"remesacuota"> | string;
    importe?: Prisma.DecimalFilter<"remesacuota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"remesacuota"> | Date | string;
    cuota?: Prisma.XOR<Prisma.CuotaScalarRelationFilter, Prisma.cuotaWhereInput>;
    remesa?: Prisma.XOR<Prisma.RemesaScalarRelationFilter, Prisma.remesaWhereInput>;
}, "id">;
export type remesacuotaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    remesaId?: Prisma.SortOrder;
    cuotaId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.remesacuotaCountOrderByAggregateInput;
    _avg?: Prisma.remesacuotaAvgOrderByAggregateInput;
    _max?: Prisma.remesacuotaMaxOrderByAggregateInput;
    _min?: Prisma.remesacuotaMinOrderByAggregateInput;
    _sum?: Prisma.remesacuotaSumOrderByAggregateInput;
};
export type remesacuotaScalarWhereWithAggregatesInput = {
    AND?: Prisma.remesacuotaScalarWhereWithAggregatesInput | Prisma.remesacuotaScalarWhereWithAggregatesInput[];
    OR?: Prisma.remesacuotaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.remesacuotaScalarWhereWithAggregatesInput | Prisma.remesacuotaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"remesacuota"> | string;
    remesaId?: Prisma.StringWithAggregatesFilter<"remesacuota"> | string;
    cuotaId?: Prisma.StringWithAggregatesFilter<"remesacuota"> | string;
    importe?: Prisma.DecimalWithAggregatesFilter<"remesacuota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"remesacuota"> | Date | string;
};
export type remesacuotaCreateInput = {
    id: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    cuota: Prisma.cuotaCreateNestedOneWithoutRemesacuotaInput;
    remesa: Prisma.remesaCreateNestedOneWithoutRemesacuotaInput;
};
export type remesacuotaUncheckedCreateInput = {
    id: string;
    remesaId: string;
    cuotaId: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type remesacuotaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cuota?: Prisma.cuotaUpdateOneRequiredWithoutRemesacuotaNestedInput;
    remesa?: Prisma.remesaUpdateOneRequiredWithoutRemesacuotaNestedInput;
};
export type remesacuotaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    remesaId?: Prisma.StringFieldUpdateOperationsInput | string;
    cuotaId?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type remesacuotaCreateManyInput = {
    id: string;
    remesaId: string;
    cuotaId: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type remesacuotaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type remesacuotaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    remesaId?: Prisma.StringFieldUpdateOperationsInput | string;
    cuotaId?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RemesacuotaListRelationFilter = {
    every?: Prisma.remesacuotaWhereInput;
    some?: Prisma.remesacuotaWhereInput;
    none?: Prisma.remesacuotaWhereInput;
};
export type remesacuotaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type remesacuotaOrderByRelevanceInput = {
    fields: Prisma.remesacuotaOrderByRelevanceFieldEnum | Prisma.remesacuotaOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type remesacuotaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    remesaId?: Prisma.SortOrder;
    cuotaId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type remesacuotaAvgOrderByAggregateInput = {
    importe?: Prisma.SortOrder;
};
export type remesacuotaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    remesaId?: Prisma.SortOrder;
    cuotaId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type remesacuotaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    remesaId?: Prisma.SortOrder;
    cuotaId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type remesacuotaSumOrderByAggregateInput = {
    importe?: Prisma.SortOrder;
};
export type remesacuotaCreateNestedManyWithoutCuotaInput = {
    create?: Prisma.XOR<Prisma.remesacuotaCreateWithoutCuotaInput, Prisma.remesacuotaUncheckedCreateWithoutCuotaInput> | Prisma.remesacuotaCreateWithoutCuotaInput[] | Prisma.remesacuotaUncheckedCreateWithoutCuotaInput[];
    connectOrCreate?: Prisma.remesacuotaCreateOrConnectWithoutCuotaInput | Prisma.remesacuotaCreateOrConnectWithoutCuotaInput[];
    createMany?: Prisma.remesacuotaCreateManyCuotaInputEnvelope;
    connect?: Prisma.remesacuotaWhereUniqueInput | Prisma.remesacuotaWhereUniqueInput[];
};
export type remesacuotaUncheckedCreateNestedManyWithoutCuotaInput = {
    create?: Prisma.XOR<Prisma.remesacuotaCreateWithoutCuotaInput, Prisma.remesacuotaUncheckedCreateWithoutCuotaInput> | Prisma.remesacuotaCreateWithoutCuotaInput[] | Prisma.remesacuotaUncheckedCreateWithoutCuotaInput[];
    connectOrCreate?: Prisma.remesacuotaCreateOrConnectWithoutCuotaInput | Prisma.remesacuotaCreateOrConnectWithoutCuotaInput[];
    createMany?: Prisma.remesacuotaCreateManyCuotaInputEnvelope;
    connect?: Prisma.remesacuotaWhereUniqueInput | Prisma.remesacuotaWhereUniqueInput[];
};
export type remesacuotaUpdateManyWithoutCuotaNestedInput = {
    create?: Prisma.XOR<Prisma.remesacuotaCreateWithoutCuotaInput, Prisma.remesacuotaUncheckedCreateWithoutCuotaInput> | Prisma.remesacuotaCreateWithoutCuotaInput[] | Prisma.remesacuotaUncheckedCreateWithoutCuotaInput[];
    connectOrCreate?: Prisma.remesacuotaCreateOrConnectWithoutCuotaInput | Prisma.remesacuotaCreateOrConnectWithoutCuotaInput[];
    upsert?: Prisma.remesacuotaUpsertWithWhereUniqueWithoutCuotaInput | Prisma.remesacuotaUpsertWithWhereUniqueWithoutCuotaInput[];
    createMany?: Prisma.remesacuotaCreateManyCuotaInputEnvelope;
    set?: Prisma.remesacuotaWhereUniqueInput | Prisma.remesacuotaWhereUniqueInput[];
    disconnect?: Prisma.remesacuotaWhereUniqueInput | Prisma.remesacuotaWhereUniqueInput[];
    delete?: Prisma.remesacuotaWhereUniqueInput | Prisma.remesacuotaWhereUniqueInput[];
    connect?: Prisma.remesacuotaWhereUniqueInput | Prisma.remesacuotaWhereUniqueInput[];
    update?: Prisma.remesacuotaUpdateWithWhereUniqueWithoutCuotaInput | Prisma.remesacuotaUpdateWithWhereUniqueWithoutCuotaInput[];
    updateMany?: Prisma.remesacuotaUpdateManyWithWhereWithoutCuotaInput | Prisma.remesacuotaUpdateManyWithWhereWithoutCuotaInput[];
    deleteMany?: Prisma.remesacuotaScalarWhereInput | Prisma.remesacuotaScalarWhereInput[];
};
export type remesacuotaUncheckedUpdateManyWithoutCuotaNestedInput = {
    create?: Prisma.XOR<Prisma.remesacuotaCreateWithoutCuotaInput, Prisma.remesacuotaUncheckedCreateWithoutCuotaInput> | Prisma.remesacuotaCreateWithoutCuotaInput[] | Prisma.remesacuotaUncheckedCreateWithoutCuotaInput[];
    connectOrCreate?: Prisma.remesacuotaCreateOrConnectWithoutCuotaInput | Prisma.remesacuotaCreateOrConnectWithoutCuotaInput[];
    upsert?: Prisma.remesacuotaUpsertWithWhereUniqueWithoutCuotaInput | Prisma.remesacuotaUpsertWithWhereUniqueWithoutCuotaInput[];
    createMany?: Prisma.remesacuotaCreateManyCuotaInputEnvelope;
    set?: Prisma.remesacuotaWhereUniqueInput | Prisma.remesacuotaWhereUniqueInput[];
    disconnect?: Prisma.remesacuotaWhereUniqueInput | Prisma.remesacuotaWhereUniqueInput[];
    delete?: Prisma.remesacuotaWhereUniqueInput | Prisma.remesacuotaWhereUniqueInput[];
    connect?: Prisma.remesacuotaWhereUniqueInput | Prisma.remesacuotaWhereUniqueInput[];
    update?: Prisma.remesacuotaUpdateWithWhereUniqueWithoutCuotaInput | Prisma.remesacuotaUpdateWithWhereUniqueWithoutCuotaInput[];
    updateMany?: Prisma.remesacuotaUpdateManyWithWhereWithoutCuotaInput | Prisma.remesacuotaUpdateManyWithWhereWithoutCuotaInput[];
    deleteMany?: Prisma.remesacuotaScalarWhereInput | Prisma.remesacuotaScalarWhereInput[];
};
export type remesacuotaCreateNestedManyWithoutRemesaInput = {
    create?: Prisma.XOR<Prisma.remesacuotaCreateWithoutRemesaInput, Prisma.remesacuotaUncheckedCreateWithoutRemesaInput> | Prisma.remesacuotaCreateWithoutRemesaInput[] | Prisma.remesacuotaUncheckedCreateWithoutRemesaInput[];
    connectOrCreate?: Prisma.remesacuotaCreateOrConnectWithoutRemesaInput | Prisma.remesacuotaCreateOrConnectWithoutRemesaInput[];
    createMany?: Prisma.remesacuotaCreateManyRemesaInputEnvelope;
    connect?: Prisma.remesacuotaWhereUniqueInput | Prisma.remesacuotaWhereUniqueInput[];
};
export type remesacuotaUncheckedCreateNestedManyWithoutRemesaInput = {
    create?: Prisma.XOR<Prisma.remesacuotaCreateWithoutRemesaInput, Prisma.remesacuotaUncheckedCreateWithoutRemesaInput> | Prisma.remesacuotaCreateWithoutRemesaInput[] | Prisma.remesacuotaUncheckedCreateWithoutRemesaInput[];
    connectOrCreate?: Prisma.remesacuotaCreateOrConnectWithoutRemesaInput | Prisma.remesacuotaCreateOrConnectWithoutRemesaInput[];
    createMany?: Prisma.remesacuotaCreateManyRemesaInputEnvelope;
    connect?: Prisma.remesacuotaWhereUniqueInput | Prisma.remesacuotaWhereUniqueInput[];
};
export type remesacuotaUpdateManyWithoutRemesaNestedInput = {
    create?: Prisma.XOR<Prisma.remesacuotaCreateWithoutRemesaInput, Prisma.remesacuotaUncheckedCreateWithoutRemesaInput> | Prisma.remesacuotaCreateWithoutRemesaInput[] | Prisma.remesacuotaUncheckedCreateWithoutRemesaInput[];
    connectOrCreate?: Prisma.remesacuotaCreateOrConnectWithoutRemesaInput | Prisma.remesacuotaCreateOrConnectWithoutRemesaInput[];
    upsert?: Prisma.remesacuotaUpsertWithWhereUniqueWithoutRemesaInput | Prisma.remesacuotaUpsertWithWhereUniqueWithoutRemesaInput[];
    createMany?: Prisma.remesacuotaCreateManyRemesaInputEnvelope;
    set?: Prisma.remesacuotaWhereUniqueInput | Prisma.remesacuotaWhereUniqueInput[];
    disconnect?: Prisma.remesacuotaWhereUniqueInput | Prisma.remesacuotaWhereUniqueInput[];
    delete?: Prisma.remesacuotaWhereUniqueInput | Prisma.remesacuotaWhereUniqueInput[];
    connect?: Prisma.remesacuotaWhereUniqueInput | Prisma.remesacuotaWhereUniqueInput[];
    update?: Prisma.remesacuotaUpdateWithWhereUniqueWithoutRemesaInput | Prisma.remesacuotaUpdateWithWhereUniqueWithoutRemesaInput[];
    updateMany?: Prisma.remesacuotaUpdateManyWithWhereWithoutRemesaInput | Prisma.remesacuotaUpdateManyWithWhereWithoutRemesaInput[];
    deleteMany?: Prisma.remesacuotaScalarWhereInput | Prisma.remesacuotaScalarWhereInput[];
};
export type remesacuotaUncheckedUpdateManyWithoutRemesaNestedInput = {
    create?: Prisma.XOR<Prisma.remesacuotaCreateWithoutRemesaInput, Prisma.remesacuotaUncheckedCreateWithoutRemesaInput> | Prisma.remesacuotaCreateWithoutRemesaInput[] | Prisma.remesacuotaUncheckedCreateWithoutRemesaInput[];
    connectOrCreate?: Prisma.remesacuotaCreateOrConnectWithoutRemesaInput | Prisma.remesacuotaCreateOrConnectWithoutRemesaInput[];
    upsert?: Prisma.remesacuotaUpsertWithWhereUniqueWithoutRemesaInput | Prisma.remesacuotaUpsertWithWhereUniqueWithoutRemesaInput[];
    createMany?: Prisma.remesacuotaCreateManyRemesaInputEnvelope;
    set?: Prisma.remesacuotaWhereUniqueInput | Prisma.remesacuotaWhereUniqueInput[];
    disconnect?: Prisma.remesacuotaWhereUniqueInput | Prisma.remesacuotaWhereUniqueInput[];
    delete?: Prisma.remesacuotaWhereUniqueInput | Prisma.remesacuotaWhereUniqueInput[];
    connect?: Prisma.remesacuotaWhereUniqueInput | Prisma.remesacuotaWhereUniqueInput[];
    update?: Prisma.remesacuotaUpdateWithWhereUniqueWithoutRemesaInput | Prisma.remesacuotaUpdateWithWhereUniqueWithoutRemesaInput[];
    updateMany?: Prisma.remesacuotaUpdateManyWithWhereWithoutRemesaInput | Prisma.remesacuotaUpdateManyWithWhereWithoutRemesaInput[];
    deleteMany?: Prisma.remesacuotaScalarWhereInput | Prisma.remesacuotaScalarWhereInput[];
};
export type remesacuotaCreateWithoutCuotaInput = {
    id: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    remesa: Prisma.remesaCreateNestedOneWithoutRemesacuotaInput;
};
export type remesacuotaUncheckedCreateWithoutCuotaInput = {
    id: string;
    remesaId: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type remesacuotaCreateOrConnectWithoutCuotaInput = {
    where: Prisma.remesacuotaWhereUniqueInput;
    create: Prisma.XOR<Prisma.remesacuotaCreateWithoutCuotaInput, Prisma.remesacuotaUncheckedCreateWithoutCuotaInput>;
};
export type remesacuotaCreateManyCuotaInputEnvelope = {
    data: Prisma.remesacuotaCreateManyCuotaInput | Prisma.remesacuotaCreateManyCuotaInput[];
    skipDuplicates?: boolean;
};
export type remesacuotaUpsertWithWhereUniqueWithoutCuotaInput = {
    where: Prisma.remesacuotaWhereUniqueInput;
    update: Prisma.XOR<Prisma.remesacuotaUpdateWithoutCuotaInput, Prisma.remesacuotaUncheckedUpdateWithoutCuotaInput>;
    create: Prisma.XOR<Prisma.remesacuotaCreateWithoutCuotaInput, Prisma.remesacuotaUncheckedCreateWithoutCuotaInput>;
};
export type remesacuotaUpdateWithWhereUniqueWithoutCuotaInput = {
    where: Prisma.remesacuotaWhereUniqueInput;
    data: Prisma.XOR<Prisma.remesacuotaUpdateWithoutCuotaInput, Prisma.remesacuotaUncheckedUpdateWithoutCuotaInput>;
};
export type remesacuotaUpdateManyWithWhereWithoutCuotaInput = {
    where: Prisma.remesacuotaScalarWhereInput;
    data: Prisma.XOR<Prisma.remesacuotaUpdateManyMutationInput, Prisma.remesacuotaUncheckedUpdateManyWithoutCuotaInput>;
};
export type remesacuotaScalarWhereInput = {
    AND?: Prisma.remesacuotaScalarWhereInput | Prisma.remesacuotaScalarWhereInput[];
    OR?: Prisma.remesacuotaScalarWhereInput[];
    NOT?: Prisma.remesacuotaScalarWhereInput | Prisma.remesacuotaScalarWhereInput[];
    id?: Prisma.StringFilter<"remesacuota"> | string;
    remesaId?: Prisma.StringFilter<"remesacuota"> | string;
    cuotaId?: Prisma.StringFilter<"remesacuota"> | string;
    importe?: Prisma.DecimalFilter<"remesacuota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"remesacuota"> | Date | string;
};
export type remesacuotaCreateWithoutRemesaInput = {
    id: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    cuota: Prisma.cuotaCreateNestedOneWithoutRemesacuotaInput;
};
export type remesacuotaUncheckedCreateWithoutRemesaInput = {
    id: string;
    cuotaId: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type remesacuotaCreateOrConnectWithoutRemesaInput = {
    where: Prisma.remesacuotaWhereUniqueInput;
    create: Prisma.XOR<Prisma.remesacuotaCreateWithoutRemesaInput, Prisma.remesacuotaUncheckedCreateWithoutRemesaInput>;
};
export type remesacuotaCreateManyRemesaInputEnvelope = {
    data: Prisma.remesacuotaCreateManyRemesaInput | Prisma.remesacuotaCreateManyRemesaInput[];
    skipDuplicates?: boolean;
};
export type remesacuotaUpsertWithWhereUniqueWithoutRemesaInput = {
    where: Prisma.remesacuotaWhereUniqueInput;
    update: Prisma.XOR<Prisma.remesacuotaUpdateWithoutRemesaInput, Prisma.remesacuotaUncheckedUpdateWithoutRemesaInput>;
    create: Prisma.XOR<Prisma.remesacuotaCreateWithoutRemesaInput, Prisma.remesacuotaUncheckedCreateWithoutRemesaInput>;
};
export type remesacuotaUpdateWithWhereUniqueWithoutRemesaInput = {
    where: Prisma.remesacuotaWhereUniqueInput;
    data: Prisma.XOR<Prisma.remesacuotaUpdateWithoutRemesaInput, Prisma.remesacuotaUncheckedUpdateWithoutRemesaInput>;
};
export type remesacuotaUpdateManyWithWhereWithoutRemesaInput = {
    where: Prisma.remesacuotaScalarWhereInput;
    data: Prisma.XOR<Prisma.remesacuotaUpdateManyMutationInput, Prisma.remesacuotaUncheckedUpdateManyWithoutRemesaInput>;
};
export type remesacuotaCreateManyCuotaInput = {
    id: string;
    remesaId: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type remesacuotaUpdateWithoutCuotaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    remesa?: Prisma.remesaUpdateOneRequiredWithoutRemesacuotaNestedInput;
};
export type remesacuotaUncheckedUpdateWithoutCuotaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    remesaId?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type remesacuotaUncheckedUpdateManyWithoutCuotaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    remesaId?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type remesacuotaCreateManyRemesaInput = {
    id: string;
    cuotaId: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type remesacuotaUpdateWithoutRemesaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cuota?: Prisma.cuotaUpdateOneRequiredWithoutRemesacuotaNestedInput;
};
export type remesacuotaUncheckedUpdateWithoutRemesaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cuotaId?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type remesacuotaUncheckedUpdateManyWithoutRemesaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cuotaId?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type remesacuotaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    remesaId?: boolean;
    cuotaId?: boolean;
    importe?: boolean;
    createdAt?: boolean;
    cuota?: boolean | Prisma.cuotaDefaultArgs<ExtArgs>;
    remesa?: boolean | Prisma.remesaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["remesacuota"]>;
export type remesacuotaSelectScalar = {
    id?: boolean;
    remesaId?: boolean;
    cuotaId?: boolean;
    importe?: boolean;
    createdAt?: boolean;
};
export type remesacuotaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "remesaId" | "cuotaId" | "importe" | "createdAt", ExtArgs["result"]["remesacuota"]>;
export type remesacuotaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cuota?: boolean | Prisma.cuotaDefaultArgs<ExtArgs>;
    remesa?: boolean | Prisma.remesaDefaultArgs<ExtArgs>;
};
export type $remesacuotaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "remesacuota";
    objects: {
        cuota: Prisma.$cuotaPayload<ExtArgs>;
        remesa: Prisma.$remesaPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        remesaId: string;
        cuotaId: string;
        importe: runtime.Decimal;
        createdAt: Date;
    }, ExtArgs["result"]["remesacuota"]>;
    composites: {};
};
export type remesacuotaGetPayload<S extends boolean | null | undefined | remesacuotaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$remesacuotaPayload, S>;
export type remesacuotaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<remesacuotaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RemesacuotaCountAggregateInputType | true;
};
export interface remesacuotaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['remesacuota'];
        meta: {
            name: 'remesacuota';
        };
    };
    /**
     * Find zero or one Remesacuota that matches the filter.
     * @param {remesacuotaFindUniqueArgs} args - Arguments to find a Remesacuota
     * @example
     * // Get one Remesacuota
     * const remesacuota = await prisma.remesacuota.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends remesacuotaFindUniqueArgs>(args: Prisma.SelectSubset<T, remesacuotaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__remesacuotaClient<runtime.Types.Result.GetResult<Prisma.$remesacuotaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Remesacuota that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {remesacuotaFindUniqueOrThrowArgs} args - Arguments to find a Remesacuota
     * @example
     * // Get one Remesacuota
     * const remesacuota = await prisma.remesacuota.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends remesacuotaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, remesacuotaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__remesacuotaClient<runtime.Types.Result.GetResult<Prisma.$remesacuotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Remesacuota that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remesacuotaFindFirstArgs} args - Arguments to find a Remesacuota
     * @example
     * // Get one Remesacuota
     * const remesacuota = await prisma.remesacuota.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends remesacuotaFindFirstArgs>(args?: Prisma.SelectSubset<T, remesacuotaFindFirstArgs<ExtArgs>>): Prisma.Prisma__remesacuotaClient<runtime.Types.Result.GetResult<Prisma.$remesacuotaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Remesacuota that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remesacuotaFindFirstOrThrowArgs} args - Arguments to find a Remesacuota
     * @example
     * // Get one Remesacuota
     * const remesacuota = await prisma.remesacuota.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends remesacuotaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, remesacuotaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__remesacuotaClient<runtime.Types.Result.GetResult<Prisma.$remesacuotaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Remesacuotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remesacuotaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Remesacuotas
     * const remesacuotas = await prisma.remesacuota.findMany()
     *
     * // Get first 10 Remesacuotas
     * const remesacuotas = await prisma.remesacuota.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const remesacuotaWithIdOnly = await prisma.remesacuota.findMany({ select: { id: true } })
     *
     */
    findMany<T extends remesacuotaFindManyArgs>(args?: Prisma.SelectSubset<T, remesacuotaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$remesacuotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Remesacuota.
     * @param {remesacuotaCreateArgs} args - Arguments to create a Remesacuota.
     * @example
     * // Create one Remesacuota
     * const Remesacuota = await prisma.remesacuota.create({
     *   data: {
     *     // ... data to create a Remesacuota
     *   }
     * })
     *
     */
    create<T extends remesacuotaCreateArgs>(args: Prisma.SelectSubset<T, remesacuotaCreateArgs<ExtArgs>>): Prisma.Prisma__remesacuotaClient<runtime.Types.Result.GetResult<Prisma.$remesacuotaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Remesacuotas.
     * @param {remesacuotaCreateManyArgs} args - Arguments to create many Remesacuotas.
     * @example
     * // Create many Remesacuotas
     * const remesacuota = await prisma.remesacuota.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends remesacuotaCreateManyArgs>(args?: Prisma.SelectSubset<T, remesacuotaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Remesacuota.
     * @param {remesacuotaDeleteArgs} args - Arguments to delete one Remesacuota.
     * @example
     * // Delete one Remesacuota
     * const Remesacuota = await prisma.remesacuota.delete({
     *   where: {
     *     // ... filter to delete one Remesacuota
     *   }
     * })
     *
     */
    delete<T extends remesacuotaDeleteArgs>(args: Prisma.SelectSubset<T, remesacuotaDeleteArgs<ExtArgs>>): Prisma.Prisma__remesacuotaClient<runtime.Types.Result.GetResult<Prisma.$remesacuotaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Remesacuota.
     * @param {remesacuotaUpdateArgs} args - Arguments to update one Remesacuota.
     * @example
     * // Update one Remesacuota
     * const remesacuota = await prisma.remesacuota.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends remesacuotaUpdateArgs>(args: Prisma.SelectSubset<T, remesacuotaUpdateArgs<ExtArgs>>): Prisma.Prisma__remesacuotaClient<runtime.Types.Result.GetResult<Prisma.$remesacuotaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Remesacuotas.
     * @param {remesacuotaDeleteManyArgs} args - Arguments to filter Remesacuotas to delete.
     * @example
     * // Delete a few Remesacuotas
     * const { count } = await prisma.remesacuota.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends remesacuotaDeleteManyArgs>(args?: Prisma.SelectSubset<T, remesacuotaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Remesacuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remesacuotaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Remesacuotas
     * const remesacuota = await prisma.remesacuota.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends remesacuotaUpdateManyArgs>(args: Prisma.SelectSubset<T, remesacuotaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Remesacuota.
     * @param {remesacuotaUpsertArgs} args - Arguments to update or create a Remesacuota.
     * @example
     * // Update or create a Remesacuota
     * const remesacuota = await prisma.remesacuota.upsert({
     *   create: {
     *     // ... data to create a Remesacuota
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Remesacuota we want to update
     *   }
     * })
     */
    upsert<T extends remesacuotaUpsertArgs>(args: Prisma.SelectSubset<T, remesacuotaUpsertArgs<ExtArgs>>): Prisma.Prisma__remesacuotaClient<runtime.Types.Result.GetResult<Prisma.$remesacuotaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Remesacuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remesacuotaCountArgs} args - Arguments to filter Remesacuotas to count.
     * @example
     * // Count the number of Remesacuotas
     * const count = await prisma.remesacuota.count({
     *   where: {
     *     // ... the filter for the Remesacuotas we want to count
     *   }
     * })
    **/
    count<T extends remesacuotaCountArgs>(args?: Prisma.Subset<T, remesacuotaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RemesacuotaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Remesacuota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemesacuotaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RemesacuotaAggregateArgs>(args: Prisma.Subset<T, RemesacuotaAggregateArgs>): Prisma.PrismaPromise<GetRemesacuotaAggregateType<T>>;
    /**
     * Group by Remesacuota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remesacuotaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends remesacuotaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: remesacuotaGroupByArgs['orderBy'];
    } : {
        orderBy?: remesacuotaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, remesacuotaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRemesacuotaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the remesacuota model
     */
    readonly fields: remesacuotaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for remesacuota.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__remesacuotaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cuota<T extends Prisma.cuotaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cuotaDefaultArgs<ExtArgs>>): Prisma.Prisma__cuotaClient<runtime.Types.Result.GetResult<Prisma.$cuotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    remesa<T extends Prisma.remesaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.remesaDefaultArgs<ExtArgs>>): Prisma.Prisma__remesaClient<runtime.Types.Result.GetResult<Prisma.$remesaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the remesacuota model
 */
export interface remesacuotaFieldRefs {
    readonly id: Prisma.FieldRef<"remesacuota", 'String'>;
    readonly remesaId: Prisma.FieldRef<"remesacuota", 'String'>;
    readonly cuotaId: Prisma.FieldRef<"remesacuota", 'String'>;
    readonly importe: Prisma.FieldRef<"remesacuota", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"remesacuota", 'DateTime'>;
}
/**
 * remesacuota findUnique
 */
export type remesacuotaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the remesacuota
     */
    select?: Prisma.remesacuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the remesacuota
     */
    omit?: Prisma.remesacuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.remesacuotaInclude<ExtArgs> | null;
    /**
     * Filter, which remesacuota to fetch.
     */
    where: Prisma.remesacuotaWhereUniqueInput;
};
/**
 * remesacuota findUniqueOrThrow
 */
export type remesacuotaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the remesacuota
     */
    select?: Prisma.remesacuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the remesacuota
     */
    omit?: Prisma.remesacuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.remesacuotaInclude<ExtArgs> | null;
    /**
     * Filter, which remesacuota to fetch.
     */
    where: Prisma.remesacuotaWhereUniqueInput;
};
/**
 * remesacuota findFirst
 */
export type remesacuotaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the remesacuota
     */
    select?: Prisma.remesacuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the remesacuota
     */
    omit?: Prisma.remesacuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.remesacuotaInclude<ExtArgs> | null;
    /**
     * Filter, which remesacuota to fetch.
     */
    where?: Prisma.remesacuotaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of remesacuotas to fetch.
     */
    orderBy?: Prisma.remesacuotaOrderByWithRelationInput | Prisma.remesacuotaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for remesacuotas.
     */
    cursor?: Prisma.remesacuotaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` remesacuotas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` remesacuotas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of remesacuotas.
     */
    distinct?: Prisma.RemesacuotaScalarFieldEnum | Prisma.RemesacuotaScalarFieldEnum[];
};
/**
 * remesacuota findFirstOrThrow
 */
export type remesacuotaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the remesacuota
     */
    select?: Prisma.remesacuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the remesacuota
     */
    omit?: Prisma.remesacuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.remesacuotaInclude<ExtArgs> | null;
    /**
     * Filter, which remesacuota to fetch.
     */
    where?: Prisma.remesacuotaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of remesacuotas to fetch.
     */
    orderBy?: Prisma.remesacuotaOrderByWithRelationInput | Prisma.remesacuotaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for remesacuotas.
     */
    cursor?: Prisma.remesacuotaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` remesacuotas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` remesacuotas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of remesacuotas.
     */
    distinct?: Prisma.RemesacuotaScalarFieldEnum | Prisma.RemesacuotaScalarFieldEnum[];
};
/**
 * remesacuota findMany
 */
export type remesacuotaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the remesacuota
     */
    select?: Prisma.remesacuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the remesacuota
     */
    omit?: Prisma.remesacuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.remesacuotaInclude<ExtArgs> | null;
    /**
     * Filter, which remesacuotas to fetch.
     */
    where?: Prisma.remesacuotaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of remesacuotas to fetch.
     */
    orderBy?: Prisma.remesacuotaOrderByWithRelationInput | Prisma.remesacuotaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing remesacuotas.
     */
    cursor?: Prisma.remesacuotaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` remesacuotas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` remesacuotas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of remesacuotas.
     */
    distinct?: Prisma.RemesacuotaScalarFieldEnum | Prisma.RemesacuotaScalarFieldEnum[];
};
/**
 * remesacuota create
 */
export type remesacuotaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the remesacuota
     */
    select?: Prisma.remesacuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the remesacuota
     */
    omit?: Prisma.remesacuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.remesacuotaInclude<ExtArgs> | null;
    /**
     * The data needed to create a remesacuota.
     */
    data: Prisma.XOR<Prisma.remesacuotaCreateInput, Prisma.remesacuotaUncheckedCreateInput>;
};
/**
 * remesacuota createMany
 */
export type remesacuotaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many remesacuotas.
     */
    data: Prisma.remesacuotaCreateManyInput | Prisma.remesacuotaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * remesacuota update
 */
export type remesacuotaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the remesacuota
     */
    select?: Prisma.remesacuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the remesacuota
     */
    omit?: Prisma.remesacuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.remesacuotaInclude<ExtArgs> | null;
    /**
     * The data needed to update a remesacuota.
     */
    data: Prisma.XOR<Prisma.remesacuotaUpdateInput, Prisma.remesacuotaUncheckedUpdateInput>;
    /**
     * Choose, which remesacuota to update.
     */
    where: Prisma.remesacuotaWhereUniqueInput;
};
/**
 * remesacuota updateMany
 */
export type remesacuotaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update remesacuotas.
     */
    data: Prisma.XOR<Prisma.remesacuotaUpdateManyMutationInput, Prisma.remesacuotaUncheckedUpdateManyInput>;
    /**
     * Filter which remesacuotas to update
     */
    where?: Prisma.remesacuotaWhereInput;
    /**
     * Limit how many remesacuotas to update.
     */
    limit?: number;
};
/**
 * remesacuota upsert
 */
export type remesacuotaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the remesacuota
     */
    select?: Prisma.remesacuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the remesacuota
     */
    omit?: Prisma.remesacuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.remesacuotaInclude<ExtArgs> | null;
    /**
     * The filter to search for the remesacuota to update in case it exists.
     */
    where: Prisma.remesacuotaWhereUniqueInput;
    /**
     * In case the remesacuota found by the `where` argument doesn't exist, create a new remesacuota with this data.
     */
    create: Prisma.XOR<Prisma.remesacuotaCreateInput, Prisma.remesacuotaUncheckedCreateInput>;
    /**
     * In case the remesacuota was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.remesacuotaUpdateInput, Prisma.remesacuotaUncheckedUpdateInput>;
};
/**
 * remesacuota delete
 */
export type remesacuotaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the remesacuota
     */
    select?: Prisma.remesacuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the remesacuota
     */
    omit?: Prisma.remesacuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.remesacuotaInclude<ExtArgs> | null;
    /**
     * Filter which remesacuota to delete.
     */
    where: Prisma.remesacuotaWhereUniqueInput;
};
/**
 * remesacuota deleteMany
 */
export type remesacuotaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which remesacuotas to delete
     */
    where?: Prisma.remesacuotaWhereInput;
    /**
     * Limit how many remesacuotas to delete.
     */
    limit?: number;
};
/**
 * remesacuota without action
 */
export type remesacuotaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the remesacuota
     */
    select?: Prisma.remesacuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the remesacuota
     */
    omit?: Prisma.remesacuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.remesacuotaInclude<ExtArgs> | null;
};
//# sourceMappingURL=remesacuota.d.ts.map