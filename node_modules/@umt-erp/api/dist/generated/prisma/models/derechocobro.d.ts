import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model derechocobro
 *
 */
export type derechocobroModel = runtime.Types.Result.DefaultSelection<Prisma.$derechocobroPayload>;
export type AggregateDerechocobro = {
    _count: DerechocobroCountAggregateOutputType | null;
    _avg: DerechocobroAvgAggregateOutputType | null;
    _sum: DerechocobroSumAggregateOutputType | null;
    _min: DerechocobroMinAggregateOutputType | null;
    _max: DerechocobroMaxAggregateOutputType | null;
};
export type DerechocobroAvgAggregateOutputType = {
    importe: runtime.Decimal | null;
};
export type DerechocobroSumAggregateOutputType = {
    importe: runtime.Decimal | null;
};
export type DerechocobroMinAggregateOutputType = {
    id: string | null;
    facturaClienteId: string | null;
    importe: runtime.Decimal | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DerechocobroMaxAggregateOutputType = {
    id: string | null;
    facturaClienteId: string | null;
    importe: runtime.Decimal | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DerechocobroCountAggregateOutputType = {
    id: number;
    facturaClienteId: number;
    importe: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DerechocobroAvgAggregateInputType = {
    importe?: true;
};
export type DerechocobroSumAggregateInputType = {
    importe?: true;
};
export type DerechocobroMinAggregateInputType = {
    id?: true;
    facturaClienteId?: true;
    importe?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DerechocobroMaxAggregateInputType = {
    id?: true;
    facturaClienteId?: true;
    importe?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DerechocobroCountAggregateInputType = {
    id?: true;
    facturaClienteId?: true;
    importe?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DerechocobroAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which derechocobro to aggregate.
     */
    where?: Prisma.derechocobroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of derechocobros to fetch.
     */
    orderBy?: Prisma.derechocobroOrderByWithRelationInput | Prisma.derechocobroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.derechocobroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` derechocobros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` derechocobros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned derechocobros
    **/
    _count?: true | DerechocobroCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: DerechocobroAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: DerechocobroSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DerechocobroMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DerechocobroMaxAggregateInputType;
};
export type GetDerechocobroAggregateType<T extends DerechocobroAggregateArgs> = {
    [P in keyof T & keyof AggregateDerechocobro]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDerechocobro[P]> : Prisma.GetScalarType<T[P], AggregateDerechocobro[P]>;
};
export type derechocobroGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.derechocobroWhereInput;
    orderBy?: Prisma.derechocobroOrderByWithAggregationInput | Prisma.derechocobroOrderByWithAggregationInput[];
    by: Prisma.DerechocobroScalarFieldEnum[] | Prisma.DerechocobroScalarFieldEnum;
    having?: Prisma.derechocobroScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DerechocobroCountAggregateInputType | true;
    _avg?: DerechocobroAvgAggregateInputType;
    _sum?: DerechocobroSumAggregateInputType;
    _min?: DerechocobroMinAggregateInputType;
    _max?: DerechocobroMaxAggregateInputType;
};
export type DerechocobroGroupByOutputType = {
    id: string;
    facturaClienteId: string;
    importe: runtime.Decimal;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: DerechocobroCountAggregateOutputType | null;
    _avg: DerechocobroAvgAggregateOutputType | null;
    _sum: DerechocobroSumAggregateOutputType | null;
    _min: DerechocobroMinAggregateOutputType | null;
    _max: DerechocobroMaxAggregateOutputType | null;
};
export type GetDerechocobroGroupByPayload<T extends derechocobroGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DerechocobroGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DerechocobroGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DerechocobroGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DerechocobroGroupByOutputType[P]>;
}>>;
export type derechocobroWhereInput = {
    AND?: Prisma.derechocobroWhereInput | Prisma.derechocobroWhereInput[];
    OR?: Prisma.derechocobroWhereInput[];
    NOT?: Prisma.derechocobroWhereInput | Prisma.derechocobroWhereInput[];
    id?: Prisma.StringFilter<"derechocobro"> | string;
    facturaClienteId?: Prisma.StringFilter<"derechocobro"> | string;
    importe?: Prisma.DecimalFilter<"derechocobro"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.StringNullableFilter<"derechocobro"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"derechocobro"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"derechocobro"> | Date | string;
    facturacliente?: Prisma.XOR<Prisma.FacturaclienteScalarRelationFilter, Prisma.facturaclienteWhereInput>;
    liquidacioncobro?: Prisma.LiquidacioncobroListRelationFilter;
};
export type derechocobroOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    facturaClienteId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    facturacliente?: Prisma.facturaclienteOrderByWithRelationInput;
    liquidacioncobro?: Prisma.liquidacioncobroOrderByRelationAggregateInput;
    _relevance?: Prisma.derechocobroOrderByRelevanceInput;
};
export type derechocobroWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    facturaClienteId?: string;
    AND?: Prisma.derechocobroWhereInput | Prisma.derechocobroWhereInput[];
    OR?: Prisma.derechocobroWhereInput[];
    NOT?: Prisma.derechocobroWhereInput | Prisma.derechocobroWhereInput[];
    importe?: Prisma.DecimalFilter<"derechocobro"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.StringNullableFilter<"derechocobro"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"derechocobro"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"derechocobro"> | Date | string;
    facturacliente?: Prisma.XOR<Prisma.FacturaclienteScalarRelationFilter, Prisma.facturaclienteWhereInput>;
    liquidacioncobro?: Prisma.LiquidacioncobroListRelationFilter;
}, "id" | "facturaClienteId">;
export type derechocobroOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    facturaClienteId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.derechocobroCountOrderByAggregateInput;
    _avg?: Prisma.derechocobroAvgOrderByAggregateInput;
    _max?: Prisma.derechocobroMaxOrderByAggregateInput;
    _min?: Prisma.derechocobroMinOrderByAggregateInput;
    _sum?: Prisma.derechocobroSumOrderByAggregateInput;
};
export type derechocobroScalarWhereWithAggregatesInput = {
    AND?: Prisma.derechocobroScalarWhereWithAggregatesInput | Prisma.derechocobroScalarWhereWithAggregatesInput[];
    OR?: Prisma.derechocobroScalarWhereWithAggregatesInput[];
    NOT?: Prisma.derechocobroScalarWhereWithAggregatesInput | Prisma.derechocobroScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"derechocobro"> | string;
    facturaClienteId?: Prisma.StringWithAggregatesFilter<"derechocobro"> | string;
    importe?: Prisma.DecimalWithAggregatesFilter<"derechocobro"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"derechocobro"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"derechocobro"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"derechocobro"> | Date | string;
};
export type derechocobroCreateInput = {
    id: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturacliente: Prisma.facturaclienteCreateNestedOneWithoutDerechocobroInput;
    liquidacioncobro?: Prisma.liquidacioncobroCreateNestedManyWithoutDerechocobroInput;
};
export type derechocobroUncheckedCreateInput = {
    id: string;
    facturaClienteId: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacioncobro?: Prisma.liquidacioncobroUncheckedCreateNestedManyWithoutDerechocobroInput;
};
export type derechocobroUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturacliente?: Prisma.facturaclienteUpdateOneRequiredWithoutDerechocobroNestedInput;
    liquidacioncobro?: Prisma.liquidacioncobroUpdateManyWithoutDerechocobroNestedInput;
};
export type derechocobroUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    facturaClienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacioncobro?: Prisma.liquidacioncobroUncheckedUpdateManyWithoutDerechocobroNestedInput;
};
export type derechocobroCreateManyInput = {
    id: string;
    facturaClienteId: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type derechocobroUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type derechocobroUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    facturaClienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type derechocobroOrderByRelevanceInput = {
    fields: Prisma.derechocobroOrderByRelevanceFieldEnum | Prisma.derechocobroOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type derechocobroCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    facturaClienteId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type derechocobroAvgOrderByAggregateInput = {
    importe?: Prisma.SortOrder;
};
export type derechocobroMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    facturaClienteId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type derechocobroMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    facturaClienteId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type derechocobroSumOrderByAggregateInput = {
    importe?: Prisma.SortOrder;
};
export type DerechocobroNullableScalarRelationFilter = {
    is?: Prisma.derechocobroWhereInput | null;
    isNot?: Prisma.derechocobroWhereInput | null;
};
export type DerechocobroScalarRelationFilter = {
    is?: Prisma.derechocobroWhereInput;
    isNot?: Prisma.derechocobroWhereInput;
};
export type derechocobroCreateNestedOneWithoutFacturaclienteInput = {
    create?: Prisma.XOR<Prisma.derechocobroCreateWithoutFacturaclienteInput, Prisma.derechocobroUncheckedCreateWithoutFacturaclienteInput>;
    connectOrCreate?: Prisma.derechocobroCreateOrConnectWithoutFacturaclienteInput;
    connect?: Prisma.derechocobroWhereUniqueInput;
};
export type derechocobroUncheckedCreateNestedOneWithoutFacturaclienteInput = {
    create?: Prisma.XOR<Prisma.derechocobroCreateWithoutFacturaclienteInput, Prisma.derechocobroUncheckedCreateWithoutFacturaclienteInput>;
    connectOrCreate?: Prisma.derechocobroCreateOrConnectWithoutFacturaclienteInput;
    connect?: Prisma.derechocobroWhereUniqueInput;
};
export type derechocobroUpdateOneWithoutFacturaclienteNestedInput = {
    create?: Prisma.XOR<Prisma.derechocobroCreateWithoutFacturaclienteInput, Prisma.derechocobroUncheckedCreateWithoutFacturaclienteInput>;
    connectOrCreate?: Prisma.derechocobroCreateOrConnectWithoutFacturaclienteInput;
    upsert?: Prisma.derechocobroUpsertWithoutFacturaclienteInput;
    disconnect?: Prisma.derechocobroWhereInput | boolean;
    delete?: Prisma.derechocobroWhereInput | boolean;
    connect?: Prisma.derechocobroWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.derechocobroUpdateToOneWithWhereWithoutFacturaclienteInput, Prisma.derechocobroUpdateWithoutFacturaclienteInput>, Prisma.derechocobroUncheckedUpdateWithoutFacturaclienteInput>;
};
export type derechocobroUncheckedUpdateOneWithoutFacturaclienteNestedInput = {
    create?: Prisma.XOR<Prisma.derechocobroCreateWithoutFacturaclienteInput, Prisma.derechocobroUncheckedCreateWithoutFacturaclienteInput>;
    connectOrCreate?: Prisma.derechocobroCreateOrConnectWithoutFacturaclienteInput;
    upsert?: Prisma.derechocobroUpsertWithoutFacturaclienteInput;
    disconnect?: Prisma.derechocobroWhereInput | boolean;
    delete?: Prisma.derechocobroWhereInput | boolean;
    connect?: Prisma.derechocobroWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.derechocobroUpdateToOneWithWhereWithoutFacturaclienteInput, Prisma.derechocobroUpdateWithoutFacturaclienteInput>, Prisma.derechocobroUncheckedUpdateWithoutFacturaclienteInput>;
};
export type derechocobroCreateNestedOneWithoutLiquidacioncobroInput = {
    create?: Prisma.XOR<Prisma.derechocobroCreateWithoutLiquidacioncobroInput, Prisma.derechocobroUncheckedCreateWithoutLiquidacioncobroInput>;
    connectOrCreate?: Prisma.derechocobroCreateOrConnectWithoutLiquidacioncobroInput;
    connect?: Prisma.derechocobroWhereUniqueInput;
};
export type derechocobroUpdateOneRequiredWithoutLiquidacioncobroNestedInput = {
    create?: Prisma.XOR<Prisma.derechocobroCreateWithoutLiquidacioncobroInput, Prisma.derechocobroUncheckedCreateWithoutLiquidacioncobroInput>;
    connectOrCreate?: Prisma.derechocobroCreateOrConnectWithoutLiquidacioncobroInput;
    upsert?: Prisma.derechocobroUpsertWithoutLiquidacioncobroInput;
    connect?: Prisma.derechocobroWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.derechocobroUpdateToOneWithWhereWithoutLiquidacioncobroInput, Prisma.derechocobroUpdateWithoutLiquidacioncobroInput>, Prisma.derechocobroUncheckedUpdateWithoutLiquidacioncobroInput>;
};
export type derechocobroCreateWithoutFacturaclienteInput = {
    id: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacioncobro?: Prisma.liquidacioncobroCreateNestedManyWithoutDerechocobroInput;
};
export type derechocobroUncheckedCreateWithoutFacturaclienteInput = {
    id: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacioncobro?: Prisma.liquidacioncobroUncheckedCreateNestedManyWithoutDerechocobroInput;
};
export type derechocobroCreateOrConnectWithoutFacturaclienteInput = {
    where: Prisma.derechocobroWhereUniqueInput;
    create: Prisma.XOR<Prisma.derechocobroCreateWithoutFacturaclienteInput, Prisma.derechocobroUncheckedCreateWithoutFacturaclienteInput>;
};
export type derechocobroUpsertWithoutFacturaclienteInput = {
    update: Prisma.XOR<Prisma.derechocobroUpdateWithoutFacturaclienteInput, Prisma.derechocobroUncheckedUpdateWithoutFacturaclienteInput>;
    create: Prisma.XOR<Prisma.derechocobroCreateWithoutFacturaclienteInput, Prisma.derechocobroUncheckedCreateWithoutFacturaclienteInput>;
    where?: Prisma.derechocobroWhereInput;
};
export type derechocobroUpdateToOneWithWhereWithoutFacturaclienteInput = {
    where?: Prisma.derechocobroWhereInput;
    data: Prisma.XOR<Prisma.derechocobroUpdateWithoutFacturaclienteInput, Prisma.derechocobroUncheckedUpdateWithoutFacturaclienteInput>;
};
export type derechocobroUpdateWithoutFacturaclienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacioncobro?: Prisma.liquidacioncobroUpdateManyWithoutDerechocobroNestedInput;
};
export type derechocobroUncheckedUpdateWithoutFacturaclienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacioncobro?: Prisma.liquidacioncobroUncheckedUpdateManyWithoutDerechocobroNestedInput;
};
export type derechocobroCreateWithoutLiquidacioncobroInput = {
    id: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturacliente: Prisma.facturaclienteCreateNestedOneWithoutDerechocobroInput;
};
export type derechocobroUncheckedCreateWithoutLiquidacioncobroInput = {
    id: string;
    facturaClienteId: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type derechocobroCreateOrConnectWithoutLiquidacioncobroInput = {
    where: Prisma.derechocobroWhereUniqueInput;
    create: Prisma.XOR<Prisma.derechocobroCreateWithoutLiquidacioncobroInput, Prisma.derechocobroUncheckedCreateWithoutLiquidacioncobroInput>;
};
export type derechocobroUpsertWithoutLiquidacioncobroInput = {
    update: Prisma.XOR<Prisma.derechocobroUpdateWithoutLiquidacioncobroInput, Prisma.derechocobroUncheckedUpdateWithoutLiquidacioncobroInput>;
    create: Prisma.XOR<Prisma.derechocobroCreateWithoutLiquidacioncobroInput, Prisma.derechocobroUncheckedCreateWithoutLiquidacioncobroInput>;
    where?: Prisma.derechocobroWhereInput;
};
export type derechocobroUpdateToOneWithWhereWithoutLiquidacioncobroInput = {
    where?: Prisma.derechocobroWhereInput;
    data: Prisma.XOR<Prisma.derechocobroUpdateWithoutLiquidacioncobroInput, Prisma.derechocobroUncheckedUpdateWithoutLiquidacioncobroInput>;
};
export type derechocobroUpdateWithoutLiquidacioncobroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturacliente?: Prisma.facturaclienteUpdateOneRequiredWithoutDerechocobroNestedInput;
};
export type derechocobroUncheckedUpdateWithoutLiquidacioncobroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    facturaClienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type DerechocobroCountOutputType
 */
export type DerechocobroCountOutputType = {
    liquidacioncobro: number;
};
export type DerechocobroCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    liquidacioncobro?: boolean | DerechocobroCountOutputTypeCountLiquidacioncobroArgs;
};
/**
 * DerechocobroCountOutputType without action
 */
export type DerechocobroCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DerechocobroCountOutputType
     */
    select?: Prisma.DerechocobroCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * DerechocobroCountOutputType without action
 */
export type DerechocobroCountOutputTypeCountLiquidacioncobroArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.liquidacioncobroWhereInput;
};
export type derechocobroSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    facturaClienteId?: boolean;
    importe?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    facturacliente?: boolean | Prisma.facturaclienteDefaultArgs<ExtArgs>;
    liquidacioncobro?: boolean | Prisma.derechocobro$liquidacioncobroArgs<ExtArgs>;
    _count?: boolean | Prisma.DerechocobroCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["derechocobro"]>;
export type derechocobroSelectScalar = {
    id?: boolean;
    facturaClienteId?: boolean;
    importe?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type derechocobroOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "facturaClienteId" | "importe" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["derechocobro"]>;
export type derechocobroInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    facturacliente?: boolean | Prisma.facturaclienteDefaultArgs<ExtArgs>;
    liquidacioncobro?: boolean | Prisma.derechocobro$liquidacioncobroArgs<ExtArgs>;
    _count?: boolean | Prisma.DerechocobroCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $derechocobroPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "derechocobro";
    objects: {
        facturacliente: Prisma.$facturaclientePayload<ExtArgs>;
        liquidacioncobro: Prisma.$liquidacioncobroPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        facturaClienteId: string;
        importe: runtime.Decimal;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["derechocobro"]>;
    composites: {};
};
export type derechocobroGetPayload<S extends boolean | null | undefined | derechocobroDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$derechocobroPayload, S>;
export type derechocobroCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<derechocobroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DerechocobroCountAggregateInputType | true;
};
export interface derechocobroDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['derechocobro'];
        meta: {
            name: 'derechocobro';
        };
    };
    /**
     * Find zero or one Derechocobro that matches the filter.
     * @param {derechocobroFindUniqueArgs} args - Arguments to find a Derechocobro
     * @example
     * // Get one Derechocobro
     * const derechocobro = await prisma.derechocobro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends derechocobroFindUniqueArgs>(args: Prisma.SelectSubset<T, derechocobroFindUniqueArgs<ExtArgs>>): Prisma.Prisma__derechocobroClient<runtime.Types.Result.GetResult<Prisma.$derechocobroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Derechocobro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {derechocobroFindUniqueOrThrowArgs} args - Arguments to find a Derechocobro
     * @example
     * // Get one Derechocobro
     * const derechocobro = await prisma.derechocobro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends derechocobroFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, derechocobroFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__derechocobroClient<runtime.Types.Result.GetResult<Prisma.$derechocobroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Derechocobro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {derechocobroFindFirstArgs} args - Arguments to find a Derechocobro
     * @example
     * // Get one Derechocobro
     * const derechocobro = await prisma.derechocobro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends derechocobroFindFirstArgs>(args?: Prisma.SelectSubset<T, derechocobroFindFirstArgs<ExtArgs>>): Prisma.Prisma__derechocobroClient<runtime.Types.Result.GetResult<Prisma.$derechocobroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Derechocobro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {derechocobroFindFirstOrThrowArgs} args - Arguments to find a Derechocobro
     * @example
     * // Get one Derechocobro
     * const derechocobro = await prisma.derechocobro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends derechocobroFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, derechocobroFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__derechocobroClient<runtime.Types.Result.GetResult<Prisma.$derechocobroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Derechocobros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {derechocobroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Derechocobros
     * const derechocobros = await prisma.derechocobro.findMany()
     *
     * // Get first 10 Derechocobros
     * const derechocobros = await prisma.derechocobro.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const derechocobroWithIdOnly = await prisma.derechocobro.findMany({ select: { id: true } })
     *
     */
    findMany<T extends derechocobroFindManyArgs>(args?: Prisma.SelectSubset<T, derechocobroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$derechocobroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Derechocobro.
     * @param {derechocobroCreateArgs} args - Arguments to create a Derechocobro.
     * @example
     * // Create one Derechocobro
     * const Derechocobro = await prisma.derechocobro.create({
     *   data: {
     *     // ... data to create a Derechocobro
     *   }
     * })
     *
     */
    create<T extends derechocobroCreateArgs>(args: Prisma.SelectSubset<T, derechocobroCreateArgs<ExtArgs>>): Prisma.Prisma__derechocobroClient<runtime.Types.Result.GetResult<Prisma.$derechocobroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Derechocobros.
     * @param {derechocobroCreateManyArgs} args - Arguments to create many Derechocobros.
     * @example
     * // Create many Derechocobros
     * const derechocobro = await prisma.derechocobro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends derechocobroCreateManyArgs>(args?: Prisma.SelectSubset<T, derechocobroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Derechocobro.
     * @param {derechocobroDeleteArgs} args - Arguments to delete one Derechocobro.
     * @example
     * // Delete one Derechocobro
     * const Derechocobro = await prisma.derechocobro.delete({
     *   where: {
     *     // ... filter to delete one Derechocobro
     *   }
     * })
     *
     */
    delete<T extends derechocobroDeleteArgs>(args: Prisma.SelectSubset<T, derechocobroDeleteArgs<ExtArgs>>): Prisma.Prisma__derechocobroClient<runtime.Types.Result.GetResult<Prisma.$derechocobroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Derechocobro.
     * @param {derechocobroUpdateArgs} args - Arguments to update one Derechocobro.
     * @example
     * // Update one Derechocobro
     * const derechocobro = await prisma.derechocobro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends derechocobroUpdateArgs>(args: Prisma.SelectSubset<T, derechocobroUpdateArgs<ExtArgs>>): Prisma.Prisma__derechocobroClient<runtime.Types.Result.GetResult<Prisma.$derechocobroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Derechocobros.
     * @param {derechocobroDeleteManyArgs} args - Arguments to filter Derechocobros to delete.
     * @example
     * // Delete a few Derechocobros
     * const { count } = await prisma.derechocobro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends derechocobroDeleteManyArgs>(args?: Prisma.SelectSubset<T, derechocobroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Derechocobros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {derechocobroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Derechocobros
     * const derechocobro = await prisma.derechocobro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends derechocobroUpdateManyArgs>(args: Prisma.SelectSubset<T, derechocobroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Derechocobro.
     * @param {derechocobroUpsertArgs} args - Arguments to update or create a Derechocobro.
     * @example
     * // Update or create a Derechocobro
     * const derechocobro = await prisma.derechocobro.upsert({
     *   create: {
     *     // ... data to create a Derechocobro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Derechocobro we want to update
     *   }
     * })
     */
    upsert<T extends derechocobroUpsertArgs>(args: Prisma.SelectSubset<T, derechocobroUpsertArgs<ExtArgs>>): Prisma.Prisma__derechocobroClient<runtime.Types.Result.GetResult<Prisma.$derechocobroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Derechocobros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {derechocobroCountArgs} args - Arguments to filter Derechocobros to count.
     * @example
     * // Count the number of Derechocobros
     * const count = await prisma.derechocobro.count({
     *   where: {
     *     // ... the filter for the Derechocobros we want to count
     *   }
     * })
    **/
    count<T extends derechocobroCountArgs>(args?: Prisma.Subset<T, derechocobroCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DerechocobroCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Derechocobro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DerechocobroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DerechocobroAggregateArgs>(args: Prisma.Subset<T, DerechocobroAggregateArgs>): Prisma.PrismaPromise<GetDerechocobroAggregateType<T>>;
    /**
     * Group by Derechocobro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {derechocobroGroupByArgs} args - Group by arguments.
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
    groupBy<T extends derechocobroGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: derechocobroGroupByArgs['orderBy'];
    } : {
        orderBy?: derechocobroGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, derechocobroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDerechocobroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the derechocobro model
     */
    readonly fields: derechocobroFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for derechocobro.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__derechocobroClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    facturacliente<T extends Prisma.facturaclienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.facturaclienteDefaultArgs<ExtArgs>>): Prisma.Prisma__facturaclienteClient<runtime.Types.Result.GetResult<Prisma.$facturaclientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    liquidacioncobro<T extends Prisma.derechocobro$liquidacioncobroArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.derechocobro$liquidacioncobroArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$liquidacioncobroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the derechocobro model
 */
export interface derechocobroFieldRefs {
    readonly id: Prisma.FieldRef<"derechocobro", 'String'>;
    readonly facturaClienteId: Prisma.FieldRef<"derechocobro", 'String'>;
    readonly importe: Prisma.FieldRef<"derechocobro", 'Decimal'>;
    readonly observaciones: Prisma.FieldRef<"derechocobro", 'String'>;
    readonly createdAt: Prisma.FieldRef<"derechocobro", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"derechocobro", 'DateTime'>;
}
/**
 * derechocobro findUnique
 */
export type derechocobroFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the derechocobro
     */
    select?: Prisma.derechocobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the derechocobro
     */
    omit?: Prisma.derechocobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.derechocobroInclude<ExtArgs> | null;
    /**
     * Filter, which derechocobro to fetch.
     */
    where: Prisma.derechocobroWhereUniqueInput;
};
/**
 * derechocobro findUniqueOrThrow
 */
export type derechocobroFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the derechocobro
     */
    select?: Prisma.derechocobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the derechocobro
     */
    omit?: Prisma.derechocobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.derechocobroInclude<ExtArgs> | null;
    /**
     * Filter, which derechocobro to fetch.
     */
    where: Prisma.derechocobroWhereUniqueInput;
};
/**
 * derechocobro findFirst
 */
export type derechocobroFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the derechocobro
     */
    select?: Prisma.derechocobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the derechocobro
     */
    omit?: Prisma.derechocobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.derechocobroInclude<ExtArgs> | null;
    /**
     * Filter, which derechocobro to fetch.
     */
    where?: Prisma.derechocobroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of derechocobros to fetch.
     */
    orderBy?: Prisma.derechocobroOrderByWithRelationInput | Prisma.derechocobroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for derechocobros.
     */
    cursor?: Prisma.derechocobroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` derechocobros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` derechocobros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of derechocobros.
     */
    distinct?: Prisma.DerechocobroScalarFieldEnum | Prisma.DerechocobroScalarFieldEnum[];
};
/**
 * derechocobro findFirstOrThrow
 */
export type derechocobroFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the derechocobro
     */
    select?: Prisma.derechocobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the derechocobro
     */
    omit?: Prisma.derechocobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.derechocobroInclude<ExtArgs> | null;
    /**
     * Filter, which derechocobro to fetch.
     */
    where?: Prisma.derechocobroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of derechocobros to fetch.
     */
    orderBy?: Prisma.derechocobroOrderByWithRelationInput | Prisma.derechocobroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for derechocobros.
     */
    cursor?: Prisma.derechocobroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` derechocobros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` derechocobros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of derechocobros.
     */
    distinct?: Prisma.DerechocobroScalarFieldEnum | Prisma.DerechocobroScalarFieldEnum[];
};
/**
 * derechocobro findMany
 */
export type derechocobroFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the derechocobro
     */
    select?: Prisma.derechocobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the derechocobro
     */
    omit?: Prisma.derechocobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.derechocobroInclude<ExtArgs> | null;
    /**
     * Filter, which derechocobros to fetch.
     */
    where?: Prisma.derechocobroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of derechocobros to fetch.
     */
    orderBy?: Prisma.derechocobroOrderByWithRelationInput | Prisma.derechocobroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing derechocobros.
     */
    cursor?: Prisma.derechocobroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` derechocobros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` derechocobros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of derechocobros.
     */
    distinct?: Prisma.DerechocobroScalarFieldEnum | Prisma.DerechocobroScalarFieldEnum[];
};
/**
 * derechocobro create
 */
export type derechocobroCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the derechocobro
     */
    select?: Prisma.derechocobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the derechocobro
     */
    omit?: Prisma.derechocobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.derechocobroInclude<ExtArgs> | null;
    /**
     * The data needed to create a derechocobro.
     */
    data: Prisma.XOR<Prisma.derechocobroCreateInput, Prisma.derechocobroUncheckedCreateInput>;
};
/**
 * derechocobro createMany
 */
export type derechocobroCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many derechocobros.
     */
    data: Prisma.derechocobroCreateManyInput | Prisma.derechocobroCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * derechocobro update
 */
export type derechocobroUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the derechocobro
     */
    select?: Prisma.derechocobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the derechocobro
     */
    omit?: Prisma.derechocobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.derechocobroInclude<ExtArgs> | null;
    /**
     * The data needed to update a derechocobro.
     */
    data: Prisma.XOR<Prisma.derechocobroUpdateInput, Prisma.derechocobroUncheckedUpdateInput>;
    /**
     * Choose, which derechocobro to update.
     */
    where: Prisma.derechocobroWhereUniqueInput;
};
/**
 * derechocobro updateMany
 */
export type derechocobroUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update derechocobros.
     */
    data: Prisma.XOR<Prisma.derechocobroUpdateManyMutationInput, Prisma.derechocobroUncheckedUpdateManyInput>;
    /**
     * Filter which derechocobros to update
     */
    where?: Prisma.derechocobroWhereInput;
    /**
     * Limit how many derechocobros to update.
     */
    limit?: number;
};
/**
 * derechocobro upsert
 */
export type derechocobroUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the derechocobro
     */
    select?: Prisma.derechocobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the derechocobro
     */
    omit?: Prisma.derechocobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.derechocobroInclude<ExtArgs> | null;
    /**
     * The filter to search for the derechocobro to update in case it exists.
     */
    where: Prisma.derechocobroWhereUniqueInput;
    /**
     * In case the derechocobro found by the `where` argument doesn't exist, create a new derechocobro with this data.
     */
    create: Prisma.XOR<Prisma.derechocobroCreateInput, Prisma.derechocobroUncheckedCreateInput>;
    /**
     * In case the derechocobro was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.derechocobroUpdateInput, Prisma.derechocobroUncheckedUpdateInput>;
};
/**
 * derechocobro delete
 */
export type derechocobroDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the derechocobro
     */
    select?: Prisma.derechocobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the derechocobro
     */
    omit?: Prisma.derechocobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.derechocobroInclude<ExtArgs> | null;
    /**
     * Filter which derechocobro to delete.
     */
    where: Prisma.derechocobroWhereUniqueInput;
};
/**
 * derechocobro deleteMany
 */
export type derechocobroDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which derechocobros to delete
     */
    where?: Prisma.derechocobroWhereInput;
    /**
     * Limit how many derechocobros to delete.
     */
    limit?: number;
};
/**
 * derechocobro.liquidacioncobro
 */
export type derechocobro$liquidacioncobroArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.liquidacioncobroWhereInput;
    orderBy?: Prisma.liquidacioncobroOrderByWithRelationInput | Prisma.liquidacioncobroOrderByWithRelationInput[];
    cursor?: Prisma.liquidacioncobroWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LiquidacioncobroScalarFieldEnum | Prisma.LiquidacioncobroScalarFieldEnum[];
};
/**
 * derechocobro without action
 */
export type derechocobroDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the derechocobro
     */
    select?: Prisma.derechocobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the derechocobro
     */
    omit?: Prisma.derechocobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.derechocobroInclude<ExtArgs> | null;
};
//# sourceMappingURL=derechocobro.d.ts.map