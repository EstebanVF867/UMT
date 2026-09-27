import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model liquidacioncobro
 *
 */
export type liquidacioncobroModel = runtime.Types.Result.DefaultSelection<Prisma.$liquidacioncobroPayload>;
export type AggregateLiquidacioncobro = {
    _count: LiquidacioncobroCountAggregateOutputType | null;
    _avg: LiquidacioncobroAvgAggregateOutputType | null;
    _sum: LiquidacioncobroSumAggregateOutputType | null;
    _min: LiquidacioncobroMinAggregateOutputType | null;
    _max: LiquidacioncobroMaxAggregateOutputType | null;
};
export type LiquidacioncobroAvgAggregateOutputType = {
    importe: runtime.Decimal | null;
};
export type LiquidacioncobroSumAggregateOutputType = {
    importe: runtime.Decimal | null;
};
export type LiquidacioncobroMinAggregateOutputType = {
    id: string | null;
    derechoCobroId: string | null;
    cobroId: string | null;
    importe: runtime.Decimal | null;
    createdAt: Date | null;
};
export type LiquidacioncobroMaxAggregateOutputType = {
    id: string | null;
    derechoCobroId: string | null;
    cobroId: string | null;
    importe: runtime.Decimal | null;
    createdAt: Date | null;
};
export type LiquidacioncobroCountAggregateOutputType = {
    id: number;
    derechoCobroId: number;
    cobroId: number;
    importe: number;
    createdAt: number;
    _all: number;
};
export type LiquidacioncobroAvgAggregateInputType = {
    importe?: true;
};
export type LiquidacioncobroSumAggregateInputType = {
    importe?: true;
};
export type LiquidacioncobroMinAggregateInputType = {
    id?: true;
    derechoCobroId?: true;
    cobroId?: true;
    importe?: true;
    createdAt?: true;
};
export type LiquidacioncobroMaxAggregateInputType = {
    id?: true;
    derechoCobroId?: true;
    cobroId?: true;
    importe?: true;
    createdAt?: true;
};
export type LiquidacioncobroCountAggregateInputType = {
    id?: true;
    derechoCobroId?: true;
    cobroId?: true;
    importe?: true;
    createdAt?: true;
    _all?: true;
};
export type LiquidacioncobroAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which liquidacioncobro to aggregate.
     */
    where?: Prisma.liquidacioncobroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of liquidacioncobros to fetch.
     */
    orderBy?: Prisma.liquidacioncobroOrderByWithRelationInput | Prisma.liquidacioncobroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.liquidacioncobroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` liquidacioncobros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` liquidacioncobros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned liquidacioncobros
    **/
    _count?: true | LiquidacioncobroCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LiquidacioncobroAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LiquidacioncobroSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LiquidacioncobroMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LiquidacioncobroMaxAggregateInputType;
};
export type GetLiquidacioncobroAggregateType<T extends LiquidacioncobroAggregateArgs> = {
    [P in keyof T & keyof AggregateLiquidacioncobro]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLiquidacioncobro[P]> : Prisma.GetScalarType<T[P], AggregateLiquidacioncobro[P]>;
};
export type liquidacioncobroGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.liquidacioncobroWhereInput;
    orderBy?: Prisma.liquidacioncobroOrderByWithAggregationInput | Prisma.liquidacioncobroOrderByWithAggregationInput[];
    by: Prisma.LiquidacioncobroScalarFieldEnum[] | Prisma.LiquidacioncobroScalarFieldEnum;
    having?: Prisma.liquidacioncobroScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LiquidacioncobroCountAggregateInputType | true;
    _avg?: LiquidacioncobroAvgAggregateInputType;
    _sum?: LiquidacioncobroSumAggregateInputType;
    _min?: LiquidacioncobroMinAggregateInputType;
    _max?: LiquidacioncobroMaxAggregateInputType;
};
export type LiquidacioncobroGroupByOutputType = {
    id: string;
    derechoCobroId: string;
    cobroId: string;
    importe: runtime.Decimal;
    createdAt: Date;
    _count: LiquidacioncobroCountAggregateOutputType | null;
    _avg: LiquidacioncobroAvgAggregateOutputType | null;
    _sum: LiquidacioncobroSumAggregateOutputType | null;
    _min: LiquidacioncobroMinAggregateOutputType | null;
    _max: LiquidacioncobroMaxAggregateOutputType | null;
};
export type GetLiquidacioncobroGroupByPayload<T extends liquidacioncobroGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LiquidacioncobroGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LiquidacioncobroGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LiquidacioncobroGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LiquidacioncobroGroupByOutputType[P]>;
}>>;
export type liquidacioncobroWhereInput = {
    AND?: Prisma.liquidacioncobroWhereInput | Prisma.liquidacioncobroWhereInput[];
    OR?: Prisma.liquidacioncobroWhereInput[];
    NOT?: Prisma.liquidacioncobroWhereInput | Prisma.liquidacioncobroWhereInput[];
    id?: Prisma.StringFilter<"liquidacioncobro"> | string;
    derechoCobroId?: Prisma.StringFilter<"liquidacioncobro"> | string;
    cobroId?: Prisma.StringFilter<"liquidacioncobro"> | string;
    importe?: Prisma.DecimalFilter<"liquidacioncobro"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"liquidacioncobro"> | Date | string;
    cobro?: Prisma.XOR<Prisma.CobroScalarRelationFilter, Prisma.cobroWhereInput>;
    derechocobro?: Prisma.XOR<Prisma.DerechocobroScalarRelationFilter, Prisma.derechocobroWhereInput>;
};
export type liquidacioncobroOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    derechoCobroId?: Prisma.SortOrder;
    cobroId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    cobro?: Prisma.cobroOrderByWithRelationInput;
    derechocobro?: Prisma.derechocobroOrderByWithRelationInput;
    _relevance?: Prisma.liquidacioncobroOrderByRelevanceInput;
};
export type liquidacioncobroWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    derechoCobroId_cobroId?: Prisma.liquidacioncobroDerechoCobroIdCobroIdCompoundUniqueInput;
    AND?: Prisma.liquidacioncobroWhereInput | Prisma.liquidacioncobroWhereInput[];
    OR?: Prisma.liquidacioncobroWhereInput[];
    NOT?: Prisma.liquidacioncobroWhereInput | Prisma.liquidacioncobroWhereInput[];
    derechoCobroId?: Prisma.StringFilter<"liquidacioncobro"> | string;
    cobroId?: Prisma.StringFilter<"liquidacioncobro"> | string;
    importe?: Prisma.DecimalFilter<"liquidacioncobro"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"liquidacioncobro"> | Date | string;
    cobro?: Prisma.XOR<Prisma.CobroScalarRelationFilter, Prisma.cobroWhereInput>;
    derechocobro?: Prisma.XOR<Prisma.DerechocobroScalarRelationFilter, Prisma.derechocobroWhereInput>;
}, "id" | "derechoCobroId_cobroId">;
export type liquidacioncobroOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    derechoCobroId?: Prisma.SortOrder;
    cobroId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.liquidacioncobroCountOrderByAggregateInput;
    _avg?: Prisma.liquidacioncobroAvgOrderByAggregateInput;
    _max?: Prisma.liquidacioncobroMaxOrderByAggregateInput;
    _min?: Prisma.liquidacioncobroMinOrderByAggregateInput;
    _sum?: Prisma.liquidacioncobroSumOrderByAggregateInput;
};
export type liquidacioncobroScalarWhereWithAggregatesInput = {
    AND?: Prisma.liquidacioncobroScalarWhereWithAggregatesInput | Prisma.liquidacioncobroScalarWhereWithAggregatesInput[];
    OR?: Prisma.liquidacioncobroScalarWhereWithAggregatesInput[];
    NOT?: Prisma.liquidacioncobroScalarWhereWithAggregatesInput | Prisma.liquidacioncobroScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"liquidacioncobro"> | string;
    derechoCobroId?: Prisma.StringWithAggregatesFilter<"liquidacioncobro"> | string;
    cobroId?: Prisma.StringWithAggregatesFilter<"liquidacioncobro"> | string;
    importe?: Prisma.DecimalWithAggregatesFilter<"liquidacioncobro"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"liquidacioncobro"> | Date | string;
};
export type liquidacioncobroCreateInput = {
    id: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    cobro: Prisma.cobroCreateNestedOneWithoutLiquidacioncobroInput;
    derechocobro: Prisma.derechocobroCreateNestedOneWithoutLiquidacioncobroInput;
};
export type liquidacioncobroUncheckedCreateInput = {
    id: string;
    derechoCobroId: string;
    cobroId: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type liquidacioncobroUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cobro?: Prisma.cobroUpdateOneRequiredWithoutLiquidacioncobroNestedInput;
    derechocobro?: Prisma.derechocobroUpdateOneRequiredWithoutLiquidacioncobroNestedInput;
};
export type liquidacioncobroUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    derechoCobroId?: Prisma.StringFieldUpdateOperationsInput | string;
    cobroId?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type liquidacioncobroCreateManyInput = {
    id: string;
    derechoCobroId: string;
    cobroId: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type liquidacioncobroUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type liquidacioncobroUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    derechoCobroId?: Prisma.StringFieldUpdateOperationsInput | string;
    cobroId?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LiquidacioncobroListRelationFilter = {
    every?: Prisma.liquidacioncobroWhereInput;
    some?: Prisma.liquidacioncobroWhereInput;
    none?: Prisma.liquidacioncobroWhereInput;
};
export type liquidacioncobroOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type liquidacioncobroOrderByRelevanceInput = {
    fields: Prisma.liquidacioncobroOrderByRelevanceFieldEnum | Prisma.liquidacioncobroOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type liquidacioncobroDerechoCobroIdCobroIdCompoundUniqueInput = {
    derechoCobroId: string;
    cobroId: string;
};
export type liquidacioncobroCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    derechoCobroId?: Prisma.SortOrder;
    cobroId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type liquidacioncobroAvgOrderByAggregateInput = {
    importe?: Prisma.SortOrder;
};
export type liquidacioncobroMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    derechoCobroId?: Prisma.SortOrder;
    cobroId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type liquidacioncobroMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    derechoCobroId?: Prisma.SortOrder;
    cobroId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type liquidacioncobroSumOrderByAggregateInput = {
    importe?: Prisma.SortOrder;
};
export type liquidacioncobroCreateNestedManyWithoutCobroInput = {
    create?: Prisma.XOR<Prisma.liquidacioncobroCreateWithoutCobroInput, Prisma.liquidacioncobroUncheckedCreateWithoutCobroInput> | Prisma.liquidacioncobroCreateWithoutCobroInput[] | Prisma.liquidacioncobroUncheckedCreateWithoutCobroInput[];
    connectOrCreate?: Prisma.liquidacioncobroCreateOrConnectWithoutCobroInput | Prisma.liquidacioncobroCreateOrConnectWithoutCobroInput[];
    createMany?: Prisma.liquidacioncobroCreateManyCobroInputEnvelope;
    connect?: Prisma.liquidacioncobroWhereUniqueInput | Prisma.liquidacioncobroWhereUniqueInput[];
};
export type liquidacioncobroUncheckedCreateNestedManyWithoutCobroInput = {
    create?: Prisma.XOR<Prisma.liquidacioncobroCreateWithoutCobroInput, Prisma.liquidacioncobroUncheckedCreateWithoutCobroInput> | Prisma.liquidacioncobroCreateWithoutCobroInput[] | Prisma.liquidacioncobroUncheckedCreateWithoutCobroInput[];
    connectOrCreate?: Prisma.liquidacioncobroCreateOrConnectWithoutCobroInput | Prisma.liquidacioncobroCreateOrConnectWithoutCobroInput[];
    createMany?: Prisma.liquidacioncobroCreateManyCobroInputEnvelope;
    connect?: Prisma.liquidacioncobroWhereUniqueInput | Prisma.liquidacioncobroWhereUniqueInput[];
};
export type liquidacioncobroUpdateManyWithoutCobroNestedInput = {
    create?: Prisma.XOR<Prisma.liquidacioncobroCreateWithoutCobroInput, Prisma.liquidacioncobroUncheckedCreateWithoutCobroInput> | Prisma.liquidacioncobroCreateWithoutCobroInput[] | Prisma.liquidacioncobroUncheckedCreateWithoutCobroInput[];
    connectOrCreate?: Prisma.liquidacioncobroCreateOrConnectWithoutCobroInput | Prisma.liquidacioncobroCreateOrConnectWithoutCobroInput[];
    upsert?: Prisma.liquidacioncobroUpsertWithWhereUniqueWithoutCobroInput | Prisma.liquidacioncobroUpsertWithWhereUniqueWithoutCobroInput[];
    createMany?: Prisma.liquidacioncobroCreateManyCobroInputEnvelope;
    set?: Prisma.liquidacioncobroWhereUniqueInput | Prisma.liquidacioncobroWhereUniqueInput[];
    disconnect?: Prisma.liquidacioncobroWhereUniqueInput | Prisma.liquidacioncobroWhereUniqueInput[];
    delete?: Prisma.liquidacioncobroWhereUniqueInput | Prisma.liquidacioncobroWhereUniqueInput[];
    connect?: Prisma.liquidacioncobroWhereUniqueInput | Prisma.liquidacioncobroWhereUniqueInput[];
    update?: Prisma.liquidacioncobroUpdateWithWhereUniqueWithoutCobroInput | Prisma.liquidacioncobroUpdateWithWhereUniqueWithoutCobroInput[];
    updateMany?: Prisma.liquidacioncobroUpdateManyWithWhereWithoutCobroInput | Prisma.liquidacioncobroUpdateManyWithWhereWithoutCobroInput[];
    deleteMany?: Prisma.liquidacioncobroScalarWhereInput | Prisma.liquidacioncobroScalarWhereInput[];
};
export type liquidacioncobroUncheckedUpdateManyWithoutCobroNestedInput = {
    create?: Prisma.XOR<Prisma.liquidacioncobroCreateWithoutCobroInput, Prisma.liquidacioncobroUncheckedCreateWithoutCobroInput> | Prisma.liquidacioncobroCreateWithoutCobroInput[] | Prisma.liquidacioncobroUncheckedCreateWithoutCobroInput[];
    connectOrCreate?: Prisma.liquidacioncobroCreateOrConnectWithoutCobroInput | Prisma.liquidacioncobroCreateOrConnectWithoutCobroInput[];
    upsert?: Prisma.liquidacioncobroUpsertWithWhereUniqueWithoutCobroInput | Prisma.liquidacioncobroUpsertWithWhereUniqueWithoutCobroInput[];
    createMany?: Prisma.liquidacioncobroCreateManyCobroInputEnvelope;
    set?: Prisma.liquidacioncobroWhereUniqueInput | Prisma.liquidacioncobroWhereUniqueInput[];
    disconnect?: Prisma.liquidacioncobroWhereUniqueInput | Prisma.liquidacioncobroWhereUniqueInput[];
    delete?: Prisma.liquidacioncobroWhereUniqueInput | Prisma.liquidacioncobroWhereUniqueInput[];
    connect?: Prisma.liquidacioncobroWhereUniqueInput | Prisma.liquidacioncobroWhereUniqueInput[];
    update?: Prisma.liquidacioncobroUpdateWithWhereUniqueWithoutCobroInput | Prisma.liquidacioncobroUpdateWithWhereUniqueWithoutCobroInput[];
    updateMany?: Prisma.liquidacioncobroUpdateManyWithWhereWithoutCobroInput | Prisma.liquidacioncobroUpdateManyWithWhereWithoutCobroInput[];
    deleteMany?: Prisma.liquidacioncobroScalarWhereInput | Prisma.liquidacioncobroScalarWhereInput[];
};
export type liquidacioncobroCreateNestedManyWithoutDerechocobroInput = {
    create?: Prisma.XOR<Prisma.liquidacioncobroCreateWithoutDerechocobroInput, Prisma.liquidacioncobroUncheckedCreateWithoutDerechocobroInput> | Prisma.liquidacioncobroCreateWithoutDerechocobroInput[] | Prisma.liquidacioncobroUncheckedCreateWithoutDerechocobroInput[];
    connectOrCreate?: Prisma.liquidacioncobroCreateOrConnectWithoutDerechocobroInput | Prisma.liquidacioncobroCreateOrConnectWithoutDerechocobroInput[];
    createMany?: Prisma.liquidacioncobroCreateManyDerechocobroInputEnvelope;
    connect?: Prisma.liquidacioncobroWhereUniqueInput | Prisma.liquidacioncobroWhereUniqueInput[];
};
export type liquidacioncobroUncheckedCreateNestedManyWithoutDerechocobroInput = {
    create?: Prisma.XOR<Prisma.liquidacioncobroCreateWithoutDerechocobroInput, Prisma.liquidacioncobroUncheckedCreateWithoutDerechocobroInput> | Prisma.liquidacioncobroCreateWithoutDerechocobroInput[] | Prisma.liquidacioncobroUncheckedCreateWithoutDerechocobroInput[];
    connectOrCreate?: Prisma.liquidacioncobroCreateOrConnectWithoutDerechocobroInput | Prisma.liquidacioncobroCreateOrConnectWithoutDerechocobroInput[];
    createMany?: Prisma.liquidacioncobroCreateManyDerechocobroInputEnvelope;
    connect?: Prisma.liquidacioncobroWhereUniqueInput | Prisma.liquidacioncobroWhereUniqueInput[];
};
export type liquidacioncobroUpdateManyWithoutDerechocobroNestedInput = {
    create?: Prisma.XOR<Prisma.liquidacioncobroCreateWithoutDerechocobroInput, Prisma.liquidacioncobroUncheckedCreateWithoutDerechocobroInput> | Prisma.liquidacioncobroCreateWithoutDerechocobroInput[] | Prisma.liquidacioncobroUncheckedCreateWithoutDerechocobroInput[];
    connectOrCreate?: Prisma.liquidacioncobroCreateOrConnectWithoutDerechocobroInput | Prisma.liquidacioncobroCreateOrConnectWithoutDerechocobroInput[];
    upsert?: Prisma.liquidacioncobroUpsertWithWhereUniqueWithoutDerechocobroInput | Prisma.liquidacioncobroUpsertWithWhereUniqueWithoutDerechocobroInput[];
    createMany?: Prisma.liquidacioncobroCreateManyDerechocobroInputEnvelope;
    set?: Prisma.liquidacioncobroWhereUniqueInput | Prisma.liquidacioncobroWhereUniqueInput[];
    disconnect?: Prisma.liquidacioncobroWhereUniqueInput | Prisma.liquidacioncobroWhereUniqueInput[];
    delete?: Prisma.liquidacioncobroWhereUniqueInput | Prisma.liquidacioncobroWhereUniqueInput[];
    connect?: Prisma.liquidacioncobroWhereUniqueInput | Prisma.liquidacioncobroWhereUniqueInput[];
    update?: Prisma.liquidacioncobroUpdateWithWhereUniqueWithoutDerechocobroInput | Prisma.liquidacioncobroUpdateWithWhereUniqueWithoutDerechocobroInput[];
    updateMany?: Prisma.liquidacioncobroUpdateManyWithWhereWithoutDerechocobroInput | Prisma.liquidacioncobroUpdateManyWithWhereWithoutDerechocobroInput[];
    deleteMany?: Prisma.liquidacioncobroScalarWhereInput | Prisma.liquidacioncobroScalarWhereInput[];
};
export type liquidacioncobroUncheckedUpdateManyWithoutDerechocobroNestedInput = {
    create?: Prisma.XOR<Prisma.liquidacioncobroCreateWithoutDerechocobroInput, Prisma.liquidacioncobroUncheckedCreateWithoutDerechocobroInput> | Prisma.liquidacioncobroCreateWithoutDerechocobroInput[] | Prisma.liquidacioncobroUncheckedCreateWithoutDerechocobroInput[];
    connectOrCreate?: Prisma.liquidacioncobroCreateOrConnectWithoutDerechocobroInput | Prisma.liquidacioncobroCreateOrConnectWithoutDerechocobroInput[];
    upsert?: Prisma.liquidacioncobroUpsertWithWhereUniqueWithoutDerechocobroInput | Prisma.liquidacioncobroUpsertWithWhereUniqueWithoutDerechocobroInput[];
    createMany?: Prisma.liquidacioncobroCreateManyDerechocobroInputEnvelope;
    set?: Prisma.liquidacioncobroWhereUniqueInput | Prisma.liquidacioncobroWhereUniqueInput[];
    disconnect?: Prisma.liquidacioncobroWhereUniqueInput | Prisma.liquidacioncobroWhereUniqueInput[];
    delete?: Prisma.liquidacioncobroWhereUniqueInput | Prisma.liquidacioncobroWhereUniqueInput[];
    connect?: Prisma.liquidacioncobroWhereUniqueInput | Prisma.liquidacioncobroWhereUniqueInput[];
    update?: Prisma.liquidacioncobroUpdateWithWhereUniqueWithoutDerechocobroInput | Prisma.liquidacioncobroUpdateWithWhereUniqueWithoutDerechocobroInput[];
    updateMany?: Prisma.liquidacioncobroUpdateManyWithWhereWithoutDerechocobroInput | Prisma.liquidacioncobroUpdateManyWithWhereWithoutDerechocobroInput[];
    deleteMany?: Prisma.liquidacioncobroScalarWhereInput | Prisma.liquidacioncobroScalarWhereInput[];
};
export type liquidacioncobroCreateWithoutCobroInput = {
    id: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    derechocobro: Prisma.derechocobroCreateNestedOneWithoutLiquidacioncobroInput;
};
export type liquidacioncobroUncheckedCreateWithoutCobroInput = {
    id: string;
    derechoCobroId: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type liquidacioncobroCreateOrConnectWithoutCobroInput = {
    where: Prisma.liquidacioncobroWhereUniqueInput;
    create: Prisma.XOR<Prisma.liquidacioncobroCreateWithoutCobroInput, Prisma.liquidacioncobroUncheckedCreateWithoutCobroInput>;
};
export type liquidacioncobroCreateManyCobroInputEnvelope = {
    data: Prisma.liquidacioncobroCreateManyCobroInput | Prisma.liquidacioncobroCreateManyCobroInput[];
    skipDuplicates?: boolean;
};
export type liquidacioncobroUpsertWithWhereUniqueWithoutCobroInput = {
    where: Prisma.liquidacioncobroWhereUniqueInput;
    update: Prisma.XOR<Prisma.liquidacioncobroUpdateWithoutCobroInput, Prisma.liquidacioncobroUncheckedUpdateWithoutCobroInput>;
    create: Prisma.XOR<Prisma.liquidacioncobroCreateWithoutCobroInput, Prisma.liquidacioncobroUncheckedCreateWithoutCobroInput>;
};
export type liquidacioncobroUpdateWithWhereUniqueWithoutCobroInput = {
    where: Prisma.liquidacioncobroWhereUniqueInput;
    data: Prisma.XOR<Prisma.liquidacioncobroUpdateWithoutCobroInput, Prisma.liquidacioncobroUncheckedUpdateWithoutCobroInput>;
};
export type liquidacioncobroUpdateManyWithWhereWithoutCobroInput = {
    where: Prisma.liquidacioncobroScalarWhereInput;
    data: Prisma.XOR<Prisma.liquidacioncobroUpdateManyMutationInput, Prisma.liquidacioncobroUncheckedUpdateManyWithoutCobroInput>;
};
export type liquidacioncobroScalarWhereInput = {
    AND?: Prisma.liquidacioncobroScalarWhereInput | Prisma.liquidacioncobroScalarWhereInput[];
    OR?: Prisma.liquidacioncobroScalarWhereInput[];
    NOT?: Prisma.liquidacioncobroScalarWhereInput | Prisma.liquidacioncobroScalarWhereInput[];
    id?: Prisma.StringFilter<"liquidacioncobro"> | string;
    derechoCobroId?: Prisma.StringFilter<"liquidacioncobro"> | string;
    cobroId?: Prisma.StringFilter<"liquidacioncobro"> | string;
    importe?: Prisma.DecimalFilter<"liquidacioncobro"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"liquidacioncobro"> | Date | string;
};
export type liquidacioncobroCreateWithoutDerechocobroInput = {
    id: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    cobro: Prisma.cobroCreateNestedOneWithoutLiquidacioncobroInput;
};
export type liquidacioncobroUncheckedCreateWithoutDerechocobroInput = {
    id: string;
    cobroId: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type liquidacioncobroCreateOrConnectWithoutDerechocobroInput = {
    where: Prisma.liquidacioncobroWhereUniqueInput;
    create: Prisma.XOR<Prisma.liquidacioncobroCreateWithoutDerechocobroInput, Prisma.liquidacioncobroUncheckedCreateWithoutDerechocobroInput>;
};
export type liquidacioncobroCreateManyDerechocobroInputEnvelope = {
    data: Prisma.liquidacioncobroCreateManyDerechocobroInput | Prisma.liquidacioncobroCreateManyDerechocobroInput[];
    skipDuplicates?: boolean;
};
export type liquidacioncobroUpsertWithWhereUniqueWithoutDerechocobroInput = {
    where: Prisma.liquidacioncobroWhereUniqueInput;
    update: Prisma.XOR<Prisma.liquidacioncobroUpdateWithoutDerechocobroInput, Prisma.liquidacioncobroUncheckedUpdateWithoutDerechocobroInput>;
    create: Prisma.XOR<Prisma.liquidacioncobroCreateWithoutDerechocobroInput, Prisma.liquidacioncobroUncheckedCreateWithoutDerechocobroInput>;
};
export type liquidacioncobroUpdateWithWhereUniqueWithoutDerechocobroInput = {
    where: Prisma.liquidacioncobroWhereUniqueInput;
    data: Prisma.XOR<Prisma.liquidacioncobroUpdateWithoutDerechocobroInput, Prisma.liquidacioncobroUncheckedUpdateWithoutDerechocobroInput>;
};
export type liquidacioncobroUpdateManyWithWhereWithoutDerechocobroInput = {
    where: Prisma.liquidacioncobroScalarWhereInput;
    data: Prisma.XOR<Prisma.liquidacioncobroUpdateManyMutationInput, Prisma.liquidacioncobroUncheckedUpdateManyWithoutDerechocobroInput>;
};
export type liquidacioncobroCreateManyCobroInput = {
    id: string;
    derechoCobroId: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type liquidacioncobroUpdateWithoutCobroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    derechocobro?: Prisma.derechocobroUpdateOneRequiredWithoutLiquidacioncobroNestedInput;
};
export type liquidacioncobroUncheckedUpdateWithoutCobroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    derechoCobroId?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type liquidacioncobroUncheckedUpdateManyWithoutCobroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    derechoCobroId?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type liquidacioncobroCreateManyDerechocobroInput = {
    id: string;
    cobroId: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type liquidacioncobroUpdateWithoutDerechocobroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cobro?: Prisma.cobroUpdateOneRequiredWithoutLiquidacioncobroNestedInput;
};
export type liquidacioncobroUncheckedUpdateWithoutDerechocobroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cobroId?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type liquidacioncobroUncheckedUpdateManyWithoutDerechocobroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cobroId?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type liquidacioncobroSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    derechoCobroId?: boolean;
    cobroId?: boolean;
    importe?: boolean;
    createdAt?: boolean;
    cobro?: boolean | Prisma.cobroDefaultArgs<ExtArgs>;
    derechocobro?: boolean | Prisma.derechocobroDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["liquidacioncobro"]>;
export type liquidacioncobroSelectScalar = {
    id?: boolean;
    derechoCobroId?: boolean;
    cobroId?: boolean;
    importe?: boolean;
    createdAt?: boolean;
};
export type liquidacioncobroOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "derechoCobroId" | "cobroId" | "importe" | "createdAt", ExtArgs["result"]["liquidacioncobro"]>;
export type liquidacioncobroInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cobro?: boolean | Prisma.cobroDefaultArgs<ExtArgs>;
    derechocobro?: boolean | Prisma.derechocobroDefaultArgs<ExtArgs>;
};
export type $liquidacioncobroPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "liquidacioncobro";
    objects: {
        cobro: Prisma.$cobroPayload<ExtArgs>;
        derechocobro: Prisma.$derechocobroPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        derechoCobroId: string;
        cobroId: string;
        importe: runtime.Decimal;
        createdAt: Date;
    }, ExtArgs["result"]["liquidacioncobro"]>;
    composites: {};
};
export type liquidacioncobroGetPayload<S extends boolean | null | undefined | liquidacioncobroDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$liquidacioncobroPayload, S>;
export type liquidacioncobroCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<liquidacioncobroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LiquidacioncobroCountAggregateInputType | true;
};
export interface liquidacioncobroDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['liquidacioncobro'];
        meta: {
            name: 'liquidacioncobro';
        };
    };
    /**
     * Find zero or one Liquidacioncobro that matches the filter.
     * @param {liquidacioncobroFindUniqueArgs} args - Arguments to find a Liquidacioncobro
     * @example
     * // Get one Liquidacioncobro
     * const liquidacioncobro = await prisma.liquidacioncobro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends liquidacioncobroFindUniqueArgs>(args: Prisma.SelectSubset<T, liquidacioncobroFindUniqueArgs<ExtArgs>>): Prisma.Prisma__liquidacioncobroClient<runtime.Types.Result.GetResult<Prisma.$liquidacioncobroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Liquidacioncobro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {liquidacioncobroFindUniqueOrThrowArgs} args - Arguments to find a Liquidacioncobro
     * @example
     * // Get one Liquidacioncobro
     * const liquidacioncobro = await prisma.liquidacioncobro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends liquidacioncobroFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, liquidacioncobroFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__liquidacioncobroClient<runtime.Types.Result.GetResult<Prisma.$liquidacioncobroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Liquidacioncobro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {liquidacioncobroFindFirstArgs} args - Arguments to find a Liquidacioncobro
     * @example
     * // Get one Liquidacioncobro
     * const liquidacioncobro = await prisma.liquidacioncobro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends liquidacioncobroFindFirstArgs>(args?: Prisma.SelectSubset<T, liquidacioncobroFindFirstArgs<ExtArgs>>): Prisma.Prisma__liquidacioncobroClient<runtime.Types.Result.GetResult<Prisma.$liquidacioncobroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Liquidacioncobro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {liquidacioncobroFindFirstOrThrowArgs} args - Arguments to find a Liquidacioncobro
     * @example
     * // Get one Liquidacioncobro
     * const liquidacioncobro = await prisma.liquidacioncobro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends liquidacioncobroFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, liquidacioncobroFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__liquidacioncobroClient<runtime.Types.Result.GetResult<Prisma.$liquidacioncobroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Liquidacioncobros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {liquidacioncobroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Liquidacioncobros
     * const liquidacioncobros = await prisma.liquidacioncobro.findMany()
     *
     * // Get first 10 Liquidacioncobros
     * const liquidacioncobros = await prisma.liquidacioncobro.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const liquidacioncobroWithIdOnly = await prisma.liquidacioncobro.findMany({ select: { id: true } })
     *
     */
    findMany<T extends liquidacioncobroFindManyArgs>(args?: Prisma.SelectSubset<T, liquidacioncobroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$liquidacioncobroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Liquidacioncobro.
     * @param {liquidacioncobroCreateArgs} args - Arguments to create a Liquidacioncobro.
     * @example
     * // Create one Liquidacioncobro
     * const Liquidacioncobro = await prisma.liquidacioncobro.create({
     *   data: {
     *     // ... data to create a Liquidacioncobro
     *   }
     * })
     *
     */
    create<T extends liquidacioncobroCreateArgs>(args: Prisma.SelectSubset<T, liquidacioncobroCreateArgs<ExtArgs>>): Prisma.Prisma__liquidacioncobroClient<runtime.Types.Result.GetResult<Prisma.$liquidacioncobroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Liquidacioncobros.
     * @param {liquidacioncobroCreateManyArgs} args - Arguments to create many Liquidacioncobros.
     * @example
     * // Create many Liquidacioncobros
     * const liquidacioncobro = await prisma.liquidacioncobro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends liquidacioncobroCreateManyArgs>(args?: Prisma.SelectSubset<T, liquidacioncobroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Liquidacioncobro.
     * @param {liquidacioncobroDeleteArgs} args - Arguments to delete one Liquidacioncobro.
     * @example
     * // Delete one Liquidacioncobro
     * const Liquidacioncobro = await prisma.liquidacioncobro.delete({
     *   where: {
     *     // ... filter to delete one Liquidacioncobro
     *   }
     * })
     *
     */
    delete<T extends liquidacioncobroDeleteArgs>(args: Prisma.SelectSubset<T, liquidacioncobroDeleteArgs<ExtArgs>>): Prisma.Prisma__liquidacioncobroClient<runtime.Types.Result.GetResult<Prisma.$liquidacioncobroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Liquidacioncobro.
     * @param {liquidacioncobroUpdateArgs} args - Arguments to update one Liquidacioncobro.
     * @example
     * // Update one Liquidacioncobro
     * const liquidacioncobro = await prisma.liquidacioncobro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends liquidacioncobroUpdateArgs>(args: Prisma.SelectSubset<T, liquidacioncobroUpdateArgs<ExtArgs>>): Prisma.Prisma__liquidacioncobroClient<runtime.Types.Result.GetResult<Prisma.$liquidacioncobroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Liquidacioncobros.
     * @param {liquidacioncobroDeleteManyArgs} args - Arguments to filter Liquidacioncobros to delete.
     * @example
     * // Delete a few Liquidacioncobros
     * const { count } = await prisma.liquidacioncobro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends liquidacioncobroDeleteManyArgs>(args?: Prisma.SelectSubset<T, liquidacioncobroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Liquidacioncobros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {liquidacioncobroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Liquidacioncobros
     * const liquidacioncobro = await prisma.liquidacioncobro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends liquidacioncobroUpdateManyArgs>(args: Prisma.SelectSubset<T, liquidacioncobroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Liquidacioncobro.
     * @param {liquidacioncobroUpsertArgs} args - Arguments to update or create a Liquidacioncobro.
     * @example
     * // Update or create a Liquidacioncobro
     * const liquidacioncobro = await prisma.liquidacioncobro.upsert({
     *   create: {
     *     // ... data to create a Liquidacioncobro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Liquidacioncobro we want to update
     *   }
     * })
     */
    upsert<T extends liquidacioncobroUpsertArgs>(args: Prisma.SelectSubset<T, liquidacioncobroUpsertArgs<ExtArgs>>): Prisma.Prisma__liquidacioncobroClient<runtime.Types.Result.GetResult<Prisma.$liquidacioncobroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Liquidacioncobros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {liquidacioncobroCountArgs} args - Arguments to filter Liquidacioncobros to count.
     * @example
     * // Count the number of Liquidacioncobros
     * const count = await prisma.liquidacioncobro.count({
     *   where: {
     *     // ... the filter for the Liquidacioncobros we want to count
     *   }
     * })
    **/
    count<T extends liquidacioncobroCountArgs>(args?: Prisma.Subset<T, liquidacioncobroCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LiquidacioncobroCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Liquidacioncobro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiquidacioncobroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LiquidacioncobroAggregateArgs>(args: Prisma.Subset<T, LiquidacioncobroAggregateArgs>): Prisma.PrismaPromise<GetLiquidacioncobroAggregateType<T>>;
    /**
     * Group by Liquidacioncobro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {liquidacioncobroGroupByArgs} args - Group by arguments.
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
    groupBy<T extends liquidacioncobroGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: liquidacioncobroGroupByArgs['orderBy'];
    } : {
        orderBy?: liquidacioncobroGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, liquidacioncobroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiquidacioncobroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the liquidacioncobro model
     */
    readonly fields: liquidacioncobroFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for liquidacioncobro.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__liquidacioncobroClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cobro<T extends Prisma.cobroDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cobroDefaultArgs<ExtArgs>>): Prisma.Prisma__cobroClient<runtime.Types.Result.GetResult<Prisma.$cobroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    derechocobro<T extends Prisma.derechocobroDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.derechocobroDefaultArgs<ExtArgs>>): Prisma.Prisma__derechocobroClient<runtime.Types.Result.GetResult<Prisma.$derechocobroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the liquidacioncobro model
 */
export interface liquidacioncobroFieldRefs {
    readonly id: Prisma.FieldRef<"liquidacioncobro", 'String'>;
    readonly derechoCobroId: Prisma.FieldRef<"liquidacioncobro", 'String'>;
    readonly cobroId: Prisma.FieldRef<"liquidacioncobro", 'String'>;
    readonly importe: Prisma.FieldRef<"liquidacioncobro", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"liquidacioncobro", 'DateTime'>;
}
/**
 * liquidacioncobro findUnique
 */
export type liquidacioncobroFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the liquidacioncobro
     */
    select?: Prisma.liquidacioncobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the liquidacioncobro
     */
    omit?: Prisma.liquidacioncobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.liquidacioncobroInclude<ExtArgs> | null;
    /**
     * Filter, which liquidacioncobro to fetch.
     */
    where: Prisma.liquidacioncobroWhereUniqueInput;
};
/**
 * liquidacioncobro findUniqueOrThrow
 */
export type liquidacioncobroFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the liquidacioncobro
     */
    select?: Prisma.liquidacioncobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the liquidacioncobro
     */
    omit?: Prisma.liquidacioncobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.liquidacioncobroInclude<ExtArgs> | null;
    /**
     * Filter, which liquidacioncobro to fetch.
     */
    where: Prisma.liquidacioncobroWhereUniqueInput;
};
/**
 * liquidacioncobro findFirst
 */
export type liquidacioncobroFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the liquidacioncobro
     */
    select?: Prisma.liquidacioncobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the liquidacioncobro
     */
    omit?: Prisma.liquidacioncobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.liquidacioncobroInclude<ExtArgs> | null;
    /**
     * Filter, which liquidacioncobro to fetch.
     */
    where?: Prisma.liquidacioncobroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of liquidacioncobros to fetch.
     */
    orderBy?: Prisma.liquidacioncobroOrderByWithRelationInput | Prisma.liquidacioncobroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for liquidacioncobros.
     */
    cursor?: Prisma.liquidacioncobroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` liquidacioncobros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` liquidacioncobros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of liquidacioncobros.
     */
    distinct?: Prisma.LiquidacioncobroScalarFieldEnum | Prisma.LiquidacioncobroScalarFieldEnum[];
};
/**
 * liquidacioncobro findFirstOrThrow
 */
export type liquidacioncobroFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the liquidacioncobro
     */
    select?: Prisma.liquidacioncobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the liquidacioncobro
     */
    omit?: Prisma.liquidacioncobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.liquidacioncobroInclude<ExtArgs> | null;
    /**
     * Filter, which liquidacioncobro to fetch.
     */
    where?: Prisma.liquidacioncobroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of liquidacioncobros to fetch.
     */
    orderBy?: Prisma.liquidacioncobroOrderByWithRelationInput | Prisma.liquidacioncobroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for liquidacioncobros.
     */
    cursor?: Prisma.liquidacioncobroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` liquidacioncobros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` liquidacioncobros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of liquidacioncobros.
     */
    distinct?: Prisma.LiquidacioncobroScalarFieldEnum | Prisma.LiquidacioncobroScalarFieldEnum[];
};
/**
 * liquidacioncobro findMany
 */
export type liquidacioncobroFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the liquidacioncobro
     */
    select?: Prisma.liquidacioncobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the liquidacioncobro
     */
    omit?: Prisma.liquidacioncobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.liquidacioncobroInclude<ExtArgs> | null;
    /**
     * Filter, which liquidacioncobros to fetch.
     */
    where?: Prisma.liquidacioncobroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of liquidacioncobros to fetch.
     */
    orderBy?: Prisma.liquidacioncobroOrderByWithRelationInput | Prisma.liquidacioncobroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing liquidacioncobros.
     */
    cursor?: Prisma.liquidacioncobroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` liquidacioncobros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` liquidacioncobros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of liquidacioncobros.
     */
    distinct?: Prisma.LiquidacioncobroScalarFieldEnum | Prisma.LiquidacioncobroScalarFieldEnum[];
};
/**
 * liquidacioncobro create
 */
export type liquidacioncobroCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the liquidacioncobro
     */
    select?: Prisma.liquidacioncobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the liquidacioncobro
     */
    omit?: Prisma.liquidacioncobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.liquidacioncobroInclude<ExtArgs> | null;
    /**
     * The data needed to create a liquidacioncobro.
     */
    data: Prisma.XOR<Prisma.liquidacioncobroCreateInput, Prisma.liquidacioncobroUncheckedCreateInput>;
};
/**
 * liquidacioncobro createMany
 */
export type liquidacioncobroCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many liquidacioncobros.
     */
    data: Prisma.liquidacioncobroCreateManyInput | Prisma.liquidacioncobroCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * liquidacioncobro update
 */
export type liquidacioncobroUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the liquidacioncobro
     */
    select?: Prisma.liquidacioncobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the liquidacioncobro
     */
    omit?: Prisma.liquidacioncobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.liquidacioncobroInclude<ExtArgs> | null;
    /**
     * The data needed to update a liquidacioncobro.
     */
    data: Prisma.XOR<Prisma.liquidacioncobroUpdateInput, Prisma.liquidacioncobroUncheckedUpdateInput>;
    /**
     * Choose, which liquidacioncobro to update.
     */
    where: Prisma.liquidacioncobroWhereUniqueInput;
};
/**
 * liquidacioncobro updateMany
 */
export type liquidacioncobroUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update liquidacioncobros.
     */
    data: Prisma.XOR<Prisma.liquidacioncobroUpdateManyMutationInput, Prisma.liquidacioncobroUncheckedUpdateManyInput>;
    /**
     * Filter which liquidacioncobros to update
     */
    where?: Prisma.liquidacioncobroWhereInput;
    /**
     * Limit how many liquidacioncobros to update.
     */
    limit?: number;
};
/**
 * liquidacioncobro upsert
 */
export type liquidacioncobroUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the liquidacioncobro
     */
    select?: Prisma.liquidacioncobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the liquidacioncobro
     */
    omit?: Prisma.liquidacioncobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.liquidacioncobroInclude<ExtArgs> | null;
    /**
     * The filter to search for the liquidacioncobro to update in case it exists.
     */
    where: Prisma.liquidacioncobroWhereUniqueInput;
    /**
     * In case the liquidacioncobro found by the `where` argument doesn't exist, create a new liquidacioncobro with this data.
     */
    create: Prisma.XOR<Prisma.liquidacioncobroCreateInput, Prisma.liquidacioncobroUncheckedCreateInput>;
    /**
     * In case the liquidacioncobro was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.liquidacioncobroUpdateInput, Prisma.liquidacioncobroUncheckedUpdateInput>;
};
/**
 * liquidacioncobro delete
 */
export type liquidacioncobroDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the liquidacioncobro
     */
    select?: Prisma.liquidacioncobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the liquidacioncobro
     */
    omit?: Prisma.liquidacioncobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.liquidacioncobroInclude<ExtArgs> | null;
    /**
     * Filter which liquidacioncobro to delete.
     */
    where: Prisma.liquidacioncobroWhereUniqueInput;
};
/**
 * liquidacioncobro deleteMany
 */
export type liquidacioncobroDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which liquidacioncobros to delete
     */
    where?: Prisma.liquidacioncobroWhereInput;
    /**
     * Limit how many liquidacioncobros to delete.
     */
    limit?: number;
};
/**
 * liquidacioncobro without action
 */
export type liquidacioncobroDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the liquidacioncobro
     */
    select?: Prisma.liquidacioncobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the liquidacioncobro
     */
    omit?: Prisma.liquidacioncobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.liquidacioncobroInclude<ExtArgs> | null;
};
//# sourceMappingURL=liquidacioncobro.d.ts.map