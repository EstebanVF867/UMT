import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model liquidacionpago
 *
 */
export type liquidacionpagoModel = runtime.Types.Result.DefaultSelection<Prisma.$liquidacionpagoPayload>;
export type AggregateLiquidacionpago = {
    _count: LiquidacionpagoCountAggregateOutputType | null;
    _avg: LiquidacionpagoAvgAggregateOutputType | null;
    _sum: LiquidacionpagoSumAggregateOutputType | null;
    _min: LiquidacionpagoMinAggregateOutputType | null;
    _max: LiquidacionpagoMaxAggregateOutputType | null;
};
export type LiquidacionpagoAvgAggregateOutputType = {
    importe: runtime.Decimal | null;
};
export type LiquidacionpagoSumAggregateOutputType = {
    importe: runtime.Decimal | null;
};
export type LiquidacionpagoMinAggregateOutputType = {
    id: string | null;
    obligationId: string | null;
    paymentId: string | null;
    importe: runtime.Decimal | null;
    createdAt: Date | null;
};
export type LiquidacionpagoMaxAggregateOutputType = {
    id: string | null;
    obligationId: string | null;
    paymentId: string | null;
    importe: runtime.Decimal | null;
    createdAt: Date | null;
};
export type LiquidacionpagoCountAggregateOutputType = {
    id: number;
    obligationId: number;
    paymentId: number;
    importe: number;
    createdAt: number;
    _all: number;
};
export type LiquidacionpagoAvgAggregateInputType = {
    importe?: true;
};
export type LiquidacionpagoSumAggregateInputType = {
    importe?: true;
};
export type LiquidacionpagoMinAggregateInputType = {
    id?: true;
    obligationId?: true;
    paymentId?: true;
    importe?: true;
    createdAt?: true;
};
export type LiquidacionpagoMaxAggregateInputType = {
    id?: true;
    obligationId?: true;
    paymentId?: true;
    importe?: true;
    createdAt?: true;
};
export type LiquidacionpagoCountAggregateInputType = {
    id?: true;
    obligationId?: true;
    paymentId?: true;
    importe?: true;
    createdAt?: true;
    _all?: true;
};
export type LiquidacionpagoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which liquidacionpago to aggregate.
     */
    where?: Prisma.liquidacionpagoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of liquidacionpagos to fetch.
     */
    orderBy?: Prisma.liquidacionpagoOrderByWithRelationInput | Prisma.liquidacionpagoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.liquidacionpagoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` liquidacionpagos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` liquidacionpagos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned liquidacionpagos
    **/
    _count?: true | LiquidacionpagoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LiquidacionpagoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LiquidacionpagoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LiquidacionpagoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LiquidacionpagoMaxAggregateInputType;
};
export type GetLiquidacionpagoAggregateType<T extends LiquidacionpagoAggregateArgs> = {
    [P in keyof T & keyof AggregateLiquidacionpago]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLiquidacionpago[P]> : Prisma.GetScalarType<T[P], AggregateLiquidacionpago[P]>;
};
export type liquidacionpagoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.liquidacionpagoWhereInput;
    orderBy?: Prisma.liquidacionpagoOrderByWithAggregationInput | Prisma.liquidacionpagoOrderByWithAggregationInput[];
    by: Prisma.LiquidacionpagoScalarFieldEnum[] | Prisma.LiquidacionpagoScalarFieldEnum;
    having?: Prisma.liquidacionpagoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LiquidacionpagoCountAggregateInputType | true;
    _avg?: LiquidacionpagoAvgAggregateInputType;
    _sum?: LiquidacionpagoSumAggregateInputType;
    _min?: LiquidacionpagoMinAggregateInputType;
    _max?: LiquidacionpagoMaxAggregateInputType;
};
export type LiquidacionpagoGroupByOutputType = {
    id: string;
    obligationId: string;
    paymentId: string;
    importe: runtime.Decimal;
    createdAt: Date;
    _count: LiquidacionpagoCountAggregateOutputType | null;
    _avg: LiquidacionpagoAvgAggregateOutputType | null;
    _sum: LiquidacionpagoSumAggregateOutputType | null;
    _min: LiquidacionpagoMinAggregateOutputType | null;
    _max: LiquidacionpagoMaxAggregateOutputType | null;
};
export type GetLiquidacionpagoGroupByPayload<T extends liquidacionpagoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LiquidacionpagoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LiquidacionpagoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LiquidacionpagoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LiquidacionpagoGroupByOutputType[P]>;
}>>;
export type liquidacionpagoWhereInput = {
    AND?: Prisma.liquidacionpagoWhereInput | Prisma.liquidacionpagoWhereInput[];
    OR?: Prisma.liquidacionpagoWhereInput[];
    NOT?: Prisma.liquidacionpagoWhereInput | Prisma.liquidacionpagoWhereInput[];
    id?: Prisma.StringFilter<"liquidacionpago"> | string;
    obligationId?: Prisma.StringFilter<"liquidacionpago"> | string;
    paymentId?: Prisma.StringFilter<"liquidacionpago"> | string;
    importe?: Prisma.DecimalFilter<"liquidacionpago"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"liquidacionpago"> | Date | string;
    obligacioneconomica?: Prisma.XOR<Prisma.ObligacioneconomicaScalarRelationFilter, Prisma.obligacioneconomicaWhereInput>;
    pago?: Prisma.XOR<Prisma.PagoScalarRelationFilter, Prisma.pagoWhereInput>;
};
export type liquidacionpagoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    obligationId?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    obligacioneconomica?: Prisma.obligacioneconomicaOrderByWithRelationInput;
    pago?: Prisma.pagoOrderByWithRelationInput;
    _relevance?: Prisma.liquidacionpagoOrderByRelevanceInput;
};
export type liquidacionpagoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    obligationId_paymentId?: Prisma.liquidacionpagoObligationIdPaymentIdCompoundUniqueInput;
    AND?: Prisma.liquidacionpagoWhereInput | Prisma.liquidacionpagoWhereInput[];
    OR?: Prisma.liquidacionpagoWhereInput[];
    NOT?: Prisma.liquidacionpagoWhereInput | Prisma.liquidacionpagoWhereInput[];
    obligationId?: Prisma.StringFilter<"liquidacionpago"> | string;
    paymentId?: Prisma.StringFilter<"liquidacionpago"> | string;
    importe?: Prisma.DecimalFilter<"liquidacionpago"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"liquidacionpago"> | Date | string;
    obligacioneconomica?: Prisma.XOR<Prisma.ObligacioneconomicaScalarRelationFilter, Prisma.obligacioneconomicaWhereInput>;
    pago?: Prisma.XOR<Prisma.PagoScalarRelationFilter, Prisma.pagoWhereInput>;
}, "id" | "obligationId_paymentId">;
export type liquidacionpagoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    obligationId?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.liquidacionpagoCountOrderByAggregateInput;
    _avg?: Prisma.liquidacionpagoAvgOrderByAggregateInput;
    _max?: Prisma.liquidacionpagoMaxOrderByAggregateInput;
    _min?: Prisma.liquidacionpagoMinOrderByAggregateInput;
    _sum?: Prisma.liquidacionpagoSumOrderByAggregateInput;
};
export type liquidacionpagoScalarWhereWithAggregatesInput = {
    AND?: Prisma.liquidacionpagoScalarWhereWithAggregatesInput | Prisma.liquidacionpagoScalarWhereWithAggregatesInput[];
    OR?: Prisma.liquidacionpagoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.liquidacionpagoScalarWhereWithAggregatesInput | Prisma.liquidacionpagoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"liquidacionpago"> | string;
    obligationId?: Prisma.StringWithAggregatesFilter<"liquidacionpago"> | string;
    paymentId?: Prisma.StringWithAggregatesFilter<"liquidacionpago"> | string;
    importe?: Prisma.DecimalWithAggregatesFilter<"liquidacionpago"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"liquidacionpago"> | Date | string;
};
export type liquidacionpagoCreateInput = {
    id: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    obligacioneconomica: Prisma.obligacioneconomicaCreateNestedOneWithoutLiquidacionpagoInput;
    pago: Prisma.pagoCreateNestedOneWithoutLiquidacionpagoInput;
};
export type liquidacionpagoUncheckedCreateInput = {
    id: string;
    obligationId: string;
    paymentId: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type liquidacionpagoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateOneRequiredWithoutLiquidacionpagoNestedInput;
    pago?: Prisma.pagoUpdateOneRequiredWithoutLiquidacionpagoNestedInput;
};
export type liquidacionpagoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    obligationId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type liquidacionpagoCreateManyInput = {
    id: string;
    obligationId: string;
    paymentId: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type liquidacionpagoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type liquidacionpagoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    obligationId?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type liquidacionpagoOrderByRelevanceInput = {
    fields: Prisma.liquidacionpagoOrderByRelevanceFieldEnum | Prisma.liquidacionpagoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type liquidacionpagoObligationIdPaymentIdCompoundUniqueInput = {
    obligationId: string;
    paymentId: string;
};
export type liquidacionpagoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    obligationId?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type liquidacionpagoAvgOrderByAggregateInput = {
    importe?: Prisma.SortOrder;
};
export type liquidacionpagoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    obligationId?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type liquidacionpagoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    obligationId?: Prisma.SortOrder;
    paymentId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type liquidacionpagoSumOrderByAggregateInput = {
    importe?: Prisma.SortOrder;
};
export type LiquidacionpagoListRelationFilter = {
    every?: Prisma.liquidacionpagoWhereInput;
    some?: Prisma.liquidacionpagoWhereInput;
    none?: Prisma.liquidacionpagoWhereInput;
};
export type liquidacionpagoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type liquidacionpagoCreateNestedManyWithoutObligacioneconomicaInput = {
    create?: Prisma.XOR<Prisma.liquidacionpagoCreateWithoutObligacioneconomicaInput, Prisma.liquidacionpagoUncheckedCreateWithoutObligacioneconomicaInput> | Prisma.liquidacionpagoCreateWithoutObligacioneconomicaInput[] | Prisma.liquidacionpagoUncheckedCreateWithoutObligacioneconomicaInput[];
    connectOrCreate?: Prisma.liquidacionpagoCreateOrConnectWithoutObligacioneconomicaInput | Prisma.liquidacionpagoCreateOrConnectWithoutObligacioneconomicaInput[];
    createMany?: Prisma.liquidacionpagoCreateManyObligacioneconomicaInputEnvelope;
    connect?: Prisma.liquidacionpagoWhereUniqueInput | Prisma.liquidacionpagoWhereUniqueInput[];
};
export type liquidacionpagoUncheckedCreateNestedManyWithoutObligacioneconomicaInput = {
    create?: Prisma.XOR<Prisma.liquidacionpagoCreateWithoutObligacioneconomicaInput, Prisma.liquidacionpagoUncheckedCreateWithoutObligacioneconomicaInput> | Prisma.liquidacionpagoCreateWithoutObligacioneconomicaInput[] | Prisma.liquidacionpagoUncheckedCreateWithoutObligacioneconomicaInput[];
    connectOrCreate?: Prisma.liquidacionpagoCreateOrConnectWithoutObligacioneconomicaInput | Prisma.liquidacionpagoCreateOrConnectWithoutObligacioneconomicaInput[];
    createMany?: Prisma.liquidacionpagoCreateManyObligacioneconomicaInputEnvelope;
    connect?: Prisma.liquidacionpagoWhereUniqueInput | Prisma.liquidacionpagoWhereUniqueInput[];
};
export type liquidacionpagoUpdateManyWithoutObligacioneconomicaNestedInput = {
    create?: Prisma.XOR<Prisma.liquidacionpagoCreateWithoutObligacioneconomicaInput, Prisma.liquidacionpagoUncheckedCreateWithoutObligacioneconomicaInput> | Prisma.liquidacionpagoCreateWithoutObligacioneconomicaInput[] | Prisma.liquidacionpagoUncheckedCreateWithoutObligacioneconomicaInput[];
    connectOrCreate?: Prisma.liquidacionpagoCreateOrConnectWithoutObligacioneconomicaInput | Prisma.liquidacionpagoCreateOrConnectWithoutObligacioneconomicaInput[];
    upsert?: Prisma.liquidacionpagoUpsertWithWhereUniqueWithoutObligacioneconomicaInput | Prisma.liquidacionpagoUpsertWithWhereUniqueWithoutObligacioneconomicaInput[];
    createMany?: Prisma.liquidacionpagoCreateManyObligacioneconomicaInputEnvelope;
    set?: Prisma.liquidacionpagoWhereUniqueInput | Prisma.liquidacionpagoWhereUniqueInput[];
    disconnect?: Prisma.liquidacionpagoWhereUniqueInput | Prisma.liquidacionpagoWhereUniqueInput[];
    delete?: Prisma.liquidacionpagoWhereUniqueInput | Prisma.liquidacionpagoWhereUniqueInput[];
    connect?: Prisma.liquidacionpagoWhereUniqueInput | Prisma.liquidacionpagoWhereUniqueInput[];
    update?: Prisma.liquidacionpagoUpdateWithWhereUniqueWithoutObligacioneconomicaInput | Prisma.liquidacionpagoUpdateWithWhereUniqueWithoutObligacioneconomicaInput[];
    updateMany?: Prisma.liquidacionpagoUpdateManyWithWhereWithoutObligacioneconomicaInput | Prisma.liquidacionpagoUpdateManyWithWhereWithoutObligacioneconomicaInput[];
    deleteMany?: Prisma.liquidacionpagoScalarWhereInput | Prisma.liquidacionpagoScalarWhereInput[];
};
export type liquidacionpagoUncheckedUpdateManyWithoutObligacioneconomicaNestedInput = {
    create?: Prisma.XOR<Prisma.liquidacionpagoCreateWithoutObligacioneconomicaInput, Prisma.liquidacionpagoUncheckedCreateWithoutObligacioneconomicaInput> | Prisma.liquidacionpagoCreateWithoutObligacioneconomicaInput[] | Prisma.liquidacionpagoUncheckedCreateWithoutObligacioneconomicaInput[];
    connectOrCreate?: Prisma.liquidacionpagoCreateOrConnectWithoutObligacioneconomicaInput | Prisma.liquidacionpagoCreateOrConnectWithoutObligacioneconomicaInput[];
    upsert?: Prisma.liquidacionpagoUpsertWithWhereUniqueWithoutObligacioneconomicaInput | Prisma.liquidacionpagoUpsertWithWhereUniqueWithoutObligacioneconomicaInput[];
    createMany?: Prisma.liquidacionpagoCreateManyObligacioneconomicaInputEnvelope;
    set?: Prisma.liquidacionpagoWhereUniqueInput | Prisma.liquidacionpagoWhereUniqueInput[];
    disconnect?: Prisma.liquidacionpagoWhereUniqueInput | Prisma.liquidacionpagoWhereUniqueInput[];
    delete?: Prisma.liquidacionpagoWhereUniqueInput | Prisma.liquidacionpagoWhereUniqueInput[];
    connect?: Prisma.liquidacionpagoWhereUniqueInput | Prisma.liquidacionpagoWhereUniqueInput[];
    update?: Prisma.liquidacionpagoUpdateWithWhereUniqueWithoutObligacioneconomicaInput | Prisma.liquidacionpagoUpdateWithWhereUniqueWithoutObligacioneconomicaInput[];
    updateMany?: Prisma.liquidacionpagoUpdateManyWithWhereWithoutObligacioneconomicaInput | Prisma.liquidacionpagoUpdateManyWithWhereWithoutObligacioneconomicaInput[];
    deleteMany?: Prisma.liquidacionpagoScalarWhereInput | Prisma.liquidacionpagoScalarWhereInput[];
};
export type liquidacionpagoCreateNestedManyWithoutPagoInput = {
    create?: Prisma.XOR<Prisma.liquidacionpagoCreateWithoutPagoInput, Prisma.liquidacionpagoUncheckedCreateWithoutPagoInput> | Prisma.liquidacionpagoCreateWithoutPagoInput[] | Prisma.liquidacionpagoUncheckedCreateWithoutPagoInput[];
    connectOrCreate?: Prisma.liquidacionpagoCreateOrConnectWithoutPagoInput | Prisma.liquidacionpagoCreateOrConnectWithoutPagoInput[];
    createMany?: Prisma.liquidacionpagoCreateManyPagoInputEnvelope;
    connect?: Prisma.liquidacionpagoWhereUniqueInput | Prisma.liquidacionpagoWhereUniqueInput[];
};
export type liquidacionpagoUncheckedCreateNestedManyWithoutPagoInput = {
    create?: Prisma.XOR<Prisma.liquidacionpagoCreateWithoutPagoInput, Prisma.liquidacionpagoUncheckedCreateWithoutPagoInput> | Prisma.liquidacionpagoCreateWithoutPagoInput[] | Prisma.liquidacionpagoUncheckedCreateWithoutPagoInput[];
    connectOrCreate?: Prisma.liquidacionpagoCreateOrConnectWithoutPagoInput | Prisma.liquidacionpagoCreateOrConnectWithoutPagoInput[];
    createMany?: Prisma.liquidacionpagoCreateManyPagoInputEnvelope;
    connect?: Prisma.liquidacionpagoWhereUniqueInput | Prisma.liquidacionpagoWhereUniqueInput[];
};
export type liquidacionpagoUpdateManyWithoutPagoNestedInput = {
    create?: Prisma.XOR<Prisma.liquidacionpagoCreateWithoutPagoInput, Prisma.liquidacionpagoUncheckedCreateWithoutPagoInput> | Prisma.liquidacionpagoCreateWithoutPagoInput[] | Prisma.liquidacionpagoUncheckedCreateWithoutPagoInput[];
    connectOrCreate?: Prisma.liquidacionpagoCreateOrConnectWithoutPagoInput | Prisma.liquidacionpagoCreateOrConnectWithoutPagoInput[];
    upsert?: Prisma.liquidacionpagoUpsertWithWhereUniqueWithoutPagoInput | Prisma.liquidacionpagoUpsertWithWhereUniqueWithoutPagoInput[];
    createMany?: Prisma.liquidacionpagoCreateManyPagoInputEnvelope;
    set?: Prisma.liquidacionpagoWhereUniqueInput | Prisma.liquidacionpagoWhereUniqueInput[];
    disconnect?: Prisma.liquidacionpagoWhereUniqueInput | Prisma.liquidacionpagoWhereUniqueInput[];
    delete?: Prisma.liquidacionpagoWhereUniqueInput | Prisma.liquidacionpagoWhereUniqueInput[];
    connect?: Prisma.liquidacionpagoWhereUniqueInput | Prisma.liquidacionpagoWhereUniqueInput[];
    update?: Prisma.liquidacionpagoUpdateWithWhereUniqueWithoutPagoInput | Prisma.liquidacionpagoUpdateWithWhereUniqueWithoutPagoInput[];
    updateMany?: Prisma.liquidacionpagoUpdateManyWithWhereWithoutPagoInput | Prisma.liquidacionpagoUpdateManyWithWhereWithoutPagoInput[];
    deleteMany?: Prisma.liquidacionpagoScalarWhereInput | Prisma.liquidacionpagoScalarWhereInput[];
};
export type liquidacionpagoUncheckedUpdateManyWithoutPagoNestedInput = {
    create?: Prisma.XOR<Prisma.liquidacionpagoCreateWithoutPagoInput, Prisma.liquidacionpagoUncheckedCreateWithoutPagoInput> | Prisma.liquidacionpagoCreateWithoutPagoInput[] | Prisma.liquidacionpagoUncheckedCreateWithoutPagoInput[];
    connectOrCreate?: Prisma.liquidacionpagoCreateOrConnectWithoutPagoInput | Prisma.liquidacionpagoCreateOrConnectWithoutPagoInput[];
    upsert?: Prisma.liquidacionpagoUpsertWithWhereUniqueWithoutPagoInput | Prisma.liquidacionpagoUpsertWithWhereUniqueWithoutPagoInput[];
    createMany?: Prisma.liquidacionpagoCreateManyPagoInputEnvelope;
    set?: Prisma.liquidacionpagoWhereUniqueInput | Prisma.liquidacionpagoWhereUniqueInput[];
    disconnect?: Prisma.liquidacionpagoWhereUniqueInput | Prisma.liquidacionpagoWhereUniqueInput[];
    delete?: Prisma.liquidacionpagoWhereUniqueInput | Prisma.liquidacionpagoWhereUniqueInput[];
    connect?: Prisma.liquidacionpagoWhereUniqueInput | Prisma.liquidacionpagoWhereUniqueInput[];
    update?: Prisma.liquidacionpagoUpdateWithWhereUniqueWithoutPagoInput | Prisma.liquidacionpagoUpdateWithWhereUniqueWithoutPagoInput[];
    updateMany?: Prisma.liquidacionpagoUpdateManyWithWhereWithoutPagoInput | Prisma.liquidacionpagoUpdateManyWithWhereWithoutPagoInput[];
    deleteMany?: Prisma.liquidacionpagoScalarWhereInput | Prisma.liquidacionpagoScalarWhereInput[];
};
export type liquidacionpagoCreateWithoutObligacioneconomicaInput = {
    id: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    pago: Prisma.pagoCreateNestedOneWithoutLiquidacionpagoInput;
};
export type liquidacionpagoUncheckedCreateWithoutObligacioneconomicaInput = {
    id: string;
    paymentId: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type liquidacionpagoCreateOrConnectWithoutObligacioneconomicaInput = {
    where: Prisma.liquidacionpagoWhereUniqueInput;
    create: Prisma.XOR<Prisma.liquidacionpagoCreateWithoutObligacioneconomicaInput, Prisma.liquidacionpagoUncheckedCreateWithoutObligacioneconomicaInput>;
};
export type liquidacionpagoCreateManyObligacioneconomicaInputEnvelope = {
    data: Prisma.liquidacionpagoCreateManyObligacioneconomicaInput | Prisma.liquidacionpagoCreateManyObligacioneconomicaInput[];
    skipDuplicates?: boolean;
};
export type liquidacionpagoUpsertWithWhereUniqueWithoutObligacioneconomicaInput = {
    where: Prisma.liquidacionpagoWhereUniqueInput;
    update: Prisma.XOR<Prisma.liquidacionpagoUpdateWithoutObligacioneconomicaInput, Prisma.liquidacionpagoUncheckedUpdateWithoutObligacioneconomicaInput>;
    create: Prisma.XOR<Prisma.liquidacionpagoCreateWithoutObligacioneconomicaInput, Prisma.liquidacionpagoUncheckedCreateWithoutObligacioneconomicaInput>;
};
export type liquidacionpagoUpdateWithWhereUniqueWithoutObligacioneconomicaInput = {
    where: Prisma.liquidacionpagoWhereUniqueInput;
    data: Prisma.XOR<Prisma.liquidacionpagoUpdateWithoutObligacioneconomicaInput, Prisma.liquidacionpagoUncheckedUpdateWithoutObligacioneconomicaInput>;
};
export type liquidacionpagoUpdateManyWithWhereWithoutObligacioneconomicaInput = {
    where: Prisma.liquidacionpagoScalarWhereInput;
    data: Prisma.XOR<Prisma.liquidacionpagoUpdateManyMutationInput, Prisma.liquidacionpagoUncheckedUpdateManyWithoutObligacioneconomicaInput>;
};
export type liquidacionpagoScalarWhereInput = {
    AND?: Prisma.liquidacionpagoScalarWhereInput | Prisma.liquidacionpagoScalarWhereInput[];
    OR?: Prisma.liquidacionpagoScalarWhereInput[];
    NOT?: Prisma.liquidacionpagoScalarWhereInput | Prisma.liquidacionpagoScalarWhereInput[];
    id?: Prisma.StringFilter<"liquidacionpago"> | string;
    obligationId?: Prisma.StringFilter<"liquidacionpago"> | string;
    paymentId?: Prisma.StringFilter<"liquidacionpago"> | string;
    importe?: Prisma.DecimalFilter<"liquidacionpago"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"liquidacionpago"> | Date | string;
};
export type liquidacionpagoCreateWithoutPagoInput = {
    id: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    obligacioneconomica: Prisma.obligacioneconomicaCreateNestedOneWithoutLiquidacionpagoInput;
};
export type liquidacionpagoUncheckedCreateWithoutPagoInput = {
    id: string;
    obligationId: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type liquidacionpagoCreateOrConnectWithoutPagoInput = {
    where: Prisma.liquidacionpagoWhereUniqueInput;
    create: Prisma.XOR<Prisma.liquidacionpagoCreateWithoutPagoInput, Prisma.liquidacionpagoUncheckedCreateWithoutPagoInput>;
};
export type liquidacionpagoCreateManyPagoInputEnvelope = {
    data: Prisma.liquidacionpagoCreateManyPagoInput | Prisma.liquidacionpagoCreateManyPagoInput[];
    skipDuplicates?: boolean;
};
export type liquidacionpagoUpsertWithWhereUniqueWithoutPagoInput = {
    where: Prisma.liquidacionpagoWhereUniqueInput;
    update: Prisma.XOR<Prisma.liquidacionpagoUpdateWithoutPagoInput, Prisma.liquidacionpagoUncheckedUpdateWithoutPagoInput>;
    create: Prisma.XOR<Prisma.liquidacionpagoCreateWithoutPagoInput, Prisma.liquidacionpagoUncheckedCreateWithoutPagoInput>;
};
export type liquidacionpagoUpdateWithWhereUniqueWithoutPagoInput = {
    where: Prisma.liquidacionpagoWhereUniqueInput;
    data: Prisma.XOR<Prisma.liquidacionpagoUpdateWithoutPagoInput, Prisma.liquidacionpagoUncheckedUpdateWithoutPagoInput>;
};
export type liquidacionpagoUpdateManyWithWhereWithoutPagoInput = {
    where: Prisma.liquidacionpagoScalarWhereInput;
    data: Prisma.XOR<Prisma.liquidacionpagoUpdateManyMutationInput, Prisma.liquidacionpagoUncheckedUpdateManyWithoutPagoInput>;
};
export type liquidacionpagoCreateManyObligacioneconomicaInput = {
    id: string;
    paymentId: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type liquidacionpagoUpdateWithoutObligacioneconomicaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pago?: Prisma.pagoUpdateOneRequiredWithoutLiquidacionpagoNestedInput;
};
export type liquidacionpagoUncheckedUpdateWithoutObligacioneconomicaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type liquidacionpagoUncheckedUpdateManyWithoutObligacioneconomicaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    paymentId?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type liquidacionpagoCreateManyPagoInput = {
    id: string;
    obligationId: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
};
export type liquidacionpagoUpdateWithoutPagoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateOneRequiredWithoutLiquidacionpagoNestedInput;
};
export type liquidacionpagoUncheckedUpdateWithoutPagoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    obligationId?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type liquidacionpagoUncheckedUpdateManyWithoutPagoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    obligationId?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type liquidacionpagoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    obligationId?: boolean;
    paymentId?: boolean;
    importe?: boolean;
    createdAt?: boolean;
    obligacioneconomica?: boolean | Prisma.obligacioneconomicaDefaultArgs<ExtArgs>;
    pago?: boolean | Prisma.pagoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["liquidacionpago"]>;
export type liquidacionpagoSelectScalar = {
    id?: boolean;
    obligationId?: boolean;
    paymentId?: boolean;
    importe?: boolean;
    createdAt?: boolean;
};
export type liquidacionpagoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "obligationId" | "paymentId" | "importe" | "createdAt", ExtArgs["result"]["liquidacionpago"]>;
export type liquidacionpagoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    obligacioneconomica?: boolean | Prisma.obligacioneconomicaDefaultArgs<ExtArgs>;
    pago?: boolean | Prisma.pagoDefaultArgs<ExtArgs>;
};
export type $liquidacionpagoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "liquidacionpago";
    objects: {
        obligacioneconomica: Prisma.$obligacioneconomicaPayload<ExtArgs>;
        pago: Prisma.$pagoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        obligationId: string;
        paymentId: string;
        importe: runtime.Decimal;
        createdAt: Date;
    }, ExtArgs["result"]["liquidacionpago"]>;
    composites: {};
};
export type liquidacionpagoGetPayload<S extends boolean | null | undefined | liquidacionpagoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$liquidacionpagoPayload, S>;
export type liquidacionpagoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<liquidacionpagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LiquidacionpagoCountAggregateInputType | true;
};
export interface liquidacionpagoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['liquidacionpago'];
        meta: {
            name: 'liquidacionpago';
        };
    };
    /**
     * Find zero or one Liquidacionpago that matches the filter.
     * @param {liquidacionpagoFindUniqueArgs} args - Arguments to find a Liquidacionpago
     * @example
     * // Get one Liquidacionpago
     * const liquidacionpago = await prisma.liquidacionpago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends liquidacionpagoFindUniqueArgs>(args: Prisma.SelectSubset<T, liquidacionpagoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__liquidacionpagoClient<runtime.Types.Result.GetResult<Prisma.$liquidacionpagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Liquidacionpago that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {liquidacionpagoFindUniqueOrThrowArgs} args - Arguments to find a Liquidacionpago
     * @example
     * // Get one Liquidacionpago
     * const liquidacionpago = await prisma.liquidacionpago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends liquidacionpagoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, liquidacionpagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__liquidacionpagoClient<runtime.Types.Result.GetResult<Prisma.$liquidacionpagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Liquidacionpago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {liquidacionpagoFindFirstArgs} args - Arguments to find a Liquidacionpago
     * @example
     * // Get one Liquidacionpago
     * const liquidacionpago = await prisma.liquidacionpago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends liquidacionpagoFindFirstArgs>(args?: Prisma.SelectSubset<T, liquidacionpagoFindFirstArgs<ExtArgs>>): Prisma.Prisma__liquidacionpagoClient<runtime.Types.Result.GetResult<Prisma.$liquidacionpagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Liquidacionpago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {liquidacionpagoFindFirstOrThrowArgs} args - Arguments to find a Liquidacionpago
     * @example
     * // Get one Liquidacionpago
     * const liquidacionpago = await prisma.liquidacionpago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends liquidacionpagoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, liquidacionpagoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__liquidacionpagoClient<runtime.Types.Result.GetResult<Prisma.$liquidacionpagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Liquidacionpagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {liquidacionpagoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Liquidacionpagos
     * const liquidacionpagos = await prisma.liquidacionpago.findMany()
     *
     * // Get first 10 Liquidacionpagos
     * const liquidacionpagos = await prisma.liquidacionpago.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const liquidacionpagoWithIdOnly = await prisma.liquidacionpago.findMany({ select: { id: true } })
     *
     */
    findMany<T extends liquidacionpagoFindManyArgs>(args?: Prisma.SelectSubset<T, liquidacionpagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$liquidacionpagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Liquidacionpago.
     * @param {liquidacionpagoCreateArgs} args - Arguments to create a Liquidacionpago.
     * @example
     * // Create one Liquidacionpago
     * const Liquidacionpago = await prisma.liquidacionpago.create({
     *   data: {
     *     // ... data to create a Liquidacionpago
     *   }
     * })
     *
     */
    create<T extends liquidacionpagoCreateArgs>(args: Prisma.SelectSubset<T, liquidacionpagoCreateArgs<ExtArgs>>): Prisma.Prisma__liquidacionpagoClient<runtime.Types.Result.GetResult<Prisma.$liquidacionpagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Liquidacionpagos.
     * @param {liquidacionpagoCreateManyArgs} args - Arguments to create many Liquidacionpagos.
     * @example
     * // Create many Liquidacionpagos
     * const liquidacionpago = await prisma.liquidacionpago.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends liquidacionpagoCreateManyArgs>(args?: Prisma.SelectSubset<T, liquidacionpagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Liquidacionpago.
     * @param {liquidacionpagoDeleteArgs} args - Arguments to delete one Liquidacionpago.
     * @example
     * // Delete one Liquidacionpago
     * const Liquidacionpago = await prisma.liquidacionpago.delete({
     *   where: {
     *     // ... filter to delete one Liquidacionpago
     *   }
     * })
     *
     */
    delete<T extends liquidacionpagoDeleteArgs>(args: Prisma.SelectSubset<T, liquidacionpagoDeleteArgs<ExtArgs>>): Prisma.Prisma__liquidacionpagoClient<runtime.Types.Result.GetResult<Prisma.$liquidacionpagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Liquidacionpago.
     * @param {liquidacionpagoUpdateArgs} args - Arguments to update one Liquidacionpago.
     * @example
     * // Update one Liquidacionpago
     * const liquidacionpago = await prisma.liquidacionpago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends liquidacionpagoUpdateArgs>(args: Prisma.SelectSubset<T, liquidacionpagoUpdateArgs<ExtArgs>>): Prisma.Prisma__liquidacionpagoClient<runtime.Types.Result.GetResult<Prisma.$liquidacionpagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Liquidacionpagos.
     * @param {liquidacionpagoDeleteManyArgs} args - Arguments to filter Liquidacionpagos to delete.
     * @example
     * // Delete a few Liquidacionpagos
     * const { count } = await prisma.liquidacionpago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends liquidacionpagoDeleteManyArgs>(args?: Prisma.SelectSubset<T, liquidacionpagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Liquidacionpagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {liquidacionpagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Liquidacionpagos
     * const liquidacionpago = await prisma.liquidacionpago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends liquidacionpagoUpdateManyArgs>(args: Prisma.SelectSubset<T, liquidacionpagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Liquidacionpago.
     * @param {liquidacionpagoUpsertArgs} args - Arguments to update or create a Liquidacionpago.
     * @example
     * // Update or create a Liquidacionpago
     * const liquidacionpago = await prisma.liquidacionpago.upsert({
     *   create: {
     *     // ... data to create a Liquidacionpago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Liquidacionpago we want to update
     *   }
     * })
     */
    upsert<T extends liquidacionpagoUpsertArgs>(args: Prisma.SelectSubset<T, liquidacionpagoUpsertArgs<ExtArgs>>): Prisma.Prisma__liquidacionpagoClient<runtime.Types.Result.GetResult<Prisma.$liquidacionpagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Liquidacionpagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {liquidacionpagoCountArgs} args - Arguments to filter Liquidacionpagos to count.
     * @example
     * // Count the number of Liquidacionpagos
     * const count = await prisma.liquidacionpago.count({
     *   where: {
     *     // ... the filter for the Liquidacionpagos we want to count
     *   }
     * })
    **/
    count<T extends liquidacionpagoCountArgs>(args?: Prisma.Subset<T, liquidacionpagoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LiquidacionpagoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Liquidacionpago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LiquidacionpagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LiquidacionpagoAggregateArgs>(args: Prisma.Subset<T, LiquidacionpagoAggregateArgs>): Prisma.PrismaPromise<GetLiquidacionpagoAggregateType<T>>;
    /**
     * Group by Liquidacionpago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {liquidacionpagoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends liquidacionpagoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: liquidacionpagoGroupByArgs['orderBy'];
    } : {
        orderBy?: liquidacionpagoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, liquidacionpagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLiquidacionpagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the liquidacionpago model
     */
    readonly fields: liquidacionpagoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for liquidacionpago.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__liquidacionpagoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    obligacioneconomica<T extends Prisma.obligacioneconomicaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.obligacioneconomicaDefaultArgs<ExtArgs>>): Prisma.Prisma__obligacioneconomicaClient<runtime.Types.Result.GetResult<Prisma.$obligacioneconomicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    pago<T extends Prisma.pagoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.pagoDefaultArgs<ExtArgs>>): Prisma.Prisma__pagoClient<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the liquidacionpago model
 */
export interface liquidacionpagoFieldRefs {
    readonly id: Prisma.FieldRef<"liquidacionpago", 'String'>;
    readonly obligationId: Prisma.FieldRef<"liquidacionpago", 'String'>;
    readonly paymentId: Prisma.FieldRef<"liquidacionpago", 'String'>;
    readonly importe: Prisma.FieldRef<"liquidacionpago", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"liquidacionpago", 'DateTime'>;
}
/**
 * liquidacionpago findUnique
 */
export type liquidacionpagoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the liquidacionpago
     */
    select?: Prisma.liquidacionpagoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the liquidacionpago
     */
    omit?: Prisma.liquidacionpagoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.liquidacionpagoInclude<ExtArgs> | null;
    /**
     * Filter, which liquidacionpago to fetch.
     */
    where: Prisma.liquidacionpagoWhereUniqueInput;
};
/**
 * liquidacionpago findUniqueOrThrow
 */
export type liquidacionpagoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the liquidacionpago
     */
    select?: Prisma.liquidacionpagoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the liquidacionpago
     */
    omit?: Prisma.liquidacionpagoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.liquidacionpagoInclude<ExtArgs> | null;
    /**
     * Filter, which liquidacionpago to fetch.
     */
    where: Prisma.liquidacionpagoWhereUniqueInput;
};
/**
 * liquidacionpago findFirst
 */
export type liquidacionpagoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the liquidacionpago
     */
    select?: Prisma.liquidacionpagoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the liquidacionpago
     */
    omit?: Prisma.liquidacionpagoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.liquidacionpagoInclude<ExtArgs> | null;
    /**
     * Filter, which liquidacionpago to fetch.
     */
    where?: Prisma.liquidacionpagoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of liquidacionpagos to fetch.
     */
    orderBy?: Prisma.liquidacionpagoOrderByWithRelationInput | Prisma.liquidacionpagoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for liquidacionpagos.
     */
    cursor?: Prisma.liquidacionpagoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` liquidacionpagos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` liquidacionpagos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of liquidacionpagos.
     */
    distinct?: Prisma.LiquidacionpagoScalarFieldEnum | Prisma.LiquidacionpagoScalarFieldEnum[];
};
/**
 * liquidacionpago findFirstOrThrow
 */
export type liquidacionpagoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the liquidacionpago
     */
    select?: Prisma.liquidacionpagoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the liquidacionpago
     */
    omit?: Prisma.liquidacionpagoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.liquidacionpagoInclude<ExtArgs> | null;
    /**
     * Filter, which liquidacionpago to fetch.
     */
    where?: Prisma.liquidacionpagoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of liquidacionpagos to fetch.
     */
    orderBy?: Prisma.liquidacionpagoOrderByWithRelationInput | Prisma.liquidacionpagoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for liquidacionpagos.
     */
    cursor?: Prisma.liquidacionpagoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` liquidacionpagos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` liquidacionpagos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of liquidacionpagos.
     */
    distinct?: Prisma.LiquidacionpagoScalarFieldEnum | Prisma.LiquidacionpagoScalarFieldEnum[];
};
/**
 * liquidacionpago findMany
 */
export type liquidacionpagoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the liquidacionpago
     */
    select?: Prisma.liquidacionpagoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the liquidacionpago
     */
    omit?: Prisma.liquidacionpagoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.liquidacionpagoInclude<ExtArgs> | null;
    /**
     * Filter, which liquidacionpagos to fetch.
     */
    where?: Prisma.liquidacionpagoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of liquidacionpagos to fetch.
     */
    orderBy?: Prisma.liquidacionpagoOrderByWithRelationInput | Prisma.liquidacionpagoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing liquidacionpagos.
     */
    cursor?: Prisma.liquidacionpagoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` liquidacionpagos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` liquidacionpagos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of liquidacionpagos.
     */
    distinct?: Prisma.LiquidacionpagoScalarFieldEnum | Prisma.LiquidacionpagoScalarFieldEnum[];
};
/**
 * liquidacionpago create
 */
export type liquidacionpagoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the liquidacionpago
     */
    select?: Prisma.liquidacionpagoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the liquidacionpago
     */
    omit?: Prisma.liquidacionpagoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.liquidacionpagoInclude<ExtArgs> | null;
    /**
     * The data needed to create a liquidacionpago.
     */
    data: Prisma.XOR<Prisma.liquidacionpagoCreateInput, Prisma.liquidacionpagoUncheckedCreateInput>;
};
/**
 * liquidacionpago createMany
 */
export type liquidacionpagoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many liquidacionpagos.
     */
    data: Prisma.liquidacionpagoCreateManyInput | Prisma.liquidacionpagoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * liquidacionpago update
 */
export type liquidacionpagoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the liquidacionpago
     */
    select?: Prisma.liquidacionpagoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the liquidacionpago
     */
    omit?: Prisma.liquidacionpagoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.liquidacionpagoInclude<ExtArgs> | null;
    /**
     * The data needed to update a liquidacionpago.
     */
    data: Prisma.XOR<Prisma.liquidacionpagoUpdateInput, Prisma.liquidacionpagoUncheckedUpdateInput>;
    /**
     * Choose, which liquidacionpago to update.
     */
    where: Prisma.liquidacionpagoWhereUniqueInput;
};
/**
 * liquidacionpago updateMany
 */
export type liquidacionpagoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update liquidacionpagos.
     */
    data: Prisma.XOR<Prisma.liquidacionpagoUpdateManyMutationInput, Prisma.liquidacionpagoUncheckedUpdateManyInput>;
    /**
     * Filter which liquidacionpagos to update
     */
    where?: Prisma.liquidacionpagoWhereInput;
    /**
     * Limit how many liquidacionpagos to update.
     */
    limit?: number;
};
/**
 * liquidacionpago upsert
 */
export type liquidacionpagoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the liquidacionpago
     */
    select?: Prisma.liquidacionpagoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the liquidacionpago
     */
    omit?: Prisma.liquidacionpagoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.liquidacionpagoInclude<ExtArgs> | null;
    /**
     * The filter to search for the liquidacionpago to update in case it exists.
     */
    where: Prisma.liquidacionpagoWhereUniqueInput;
    /**
     * In case the liquidacionpago found by the `where` argument doesn't exist, create a new liquidacionpago with this data.
     */
    create: Prisma.XOR<Prisma.liquidacionpagoCreateInput, Prisma.liquidacionpagoUncheckedCreateInput>;
    /**
     * In case the liquidacionpago was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.liquidacionpagoUpdateInput, Prisma.liquidacionpagoUncheckedUpdateInput>;
};
/**
 * liquidacionpago delete
 */
export type liquidacionpagoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the liquidacionpago
     */
    select?: Prisma.liquidacionpagoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the liquidacionpago
     */
    omit?: Prisma.liquidacionpagoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.liquidacionpagoInclude<ExtArgs> | null;
    /**
     * Filter which liquidacionpago to delete.
     */
    where: Prisma.liquidacionpagoWhereUniqueInput;
};
/**
 * liquidacionpago deleteMany
 */
export type liquidacionpagoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which liquidacionpagos to delete
     */
    where?: Prisma.liquidacionpagoWhereInput;
    /**
     * Limit how many liquidacionpagos to delete.
     */
    limit?: number;
};
/**
 * liquidacionpago without action
 */
export type liquidacionpagoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the liquidacionpago
     */
    select?: Prisma.liquidacionpagoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the liquidacionpago
     */
    omit?: Prisma.liquidacionpagoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.liquidacionpagoInclude<ExtArgs> | null;
};
//# sourceMappingURL=liquidacionpago.d.ts.map