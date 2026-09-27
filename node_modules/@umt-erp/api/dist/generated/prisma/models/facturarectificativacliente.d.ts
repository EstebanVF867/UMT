import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model facturarectificativacliente
 *
 */
export type facturarectificativaclienteModel = runtime.Types.Result.DefaultSelection<Prisma.$facturarectificativaclientePayload>;
export type AggregateFacturarectificativacliente = {
    _count: FacturarectificativaclienteCountAggregateOutputType | null;
    _avg: FacturarectificativaclienteAvgAggregateOutputType | null;
    _sum: FacturarectificativaclienteSumAggregateOutputType | null;
    _min: FacturarectificativaclienteMinAggregateOutputType | null;
    _max: FacturarectificativaclienteMaxAggregateOutputType | null;
};
export type FacturarectificativaclienteAvgAggregateOutputType = {
    base: runtime.Decimal | null;
    iva: runtime.Decimal | null;
    total: runtime.Decimal | null;
};
export type FacturarectificativaclienteSumAggregateOutputType = {
    base: runtime.Decimal | null;
    iva: runtime.Decimal | null;
    total: runtime.Decimal | null;
};
export type FacturarectificativaclienteMinAggregateOutputType = {
    id: string | null;
    facturaOriginalId: string | null;
    numero: string | null;
    fechaFactura: Date | null;
    concepto: string | null;
    base: runtime.Decimal | null;
    iva: runtime.Decimal | null;
    total: runtime.Decimal | null;
    asientoId: string | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FacturarectificativaclienteMaxAggregateOutputType = {
    id: string | null;
    facturaOriginalId: string | null;
    numero: string | null;
    fechaFactura: Date | null;
    concepto: string | null;
    base: runtime.Decimal | null;
    iva: runtime.Decimal | null;
    total: runtime.Decimal | null;
    asientoId: string | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FacturarectificativaclienteCountAggregateOutputType = {
    id: number;
    facturaOriginalId: number;
    numero: number;
    fechaFactura: number;
    concepto: number;
    base: number;
    iva: number;
    total: number;
    asientoId: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FacturarectificativaclienteAvgAggregateInputType = {
    base?: true;
    iva?: true;
    total?: true;
};
export type FacturarectificativaclienteSumAggregateInputType = {
    base?: true;
    iva?: true;
    total?: true;
};
export type FacturarectificativaclienteMinAggregateInputType = {
    id?: true;
    facturaOriginalId?: true;
    numero?: true;
    fechaFactura?: true;
    concepto?: true;
    base?: true;
    iva?: true;
    total?: true;
    asientoId?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FacturarectificativaclienteMaxAggregateInputType = {
    id?: true;
    facturaOriginalId?: true;
    numero?: true;
    fechaFactura?: true;
    concepto?: true;
    base?: true;
    iva?: true;
    total?: true;
    asientoId?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FacturarectificativaclienteCountAggregateInputType = {
    id?: true;
    facturaOriginalId?: true;
    numero?: true;
    fechaFactura?: true;
    concepto?: true;
    base?: true;
    iva?: true;
    total?: true;
    asientoId?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FacturarectificativaclienteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which facturarectificativacliente to aggregate.
     */
    where?: Prisma.facturarectificativaclienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of facturarectificativaclientes to fetch.
     */
    orderBy?: Prisma.facturarectificativaclienteOrderByWithRelationInput | Prisma.facturarectificativaclienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.facturarectificativaclienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` facturarectificativaclientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` facturarectificativaclientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned facturarectificativaclientes
    **/
    _count?: true | FacturarectificativaclienteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: FacturarectificativaclienteAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: FacturarectificativaclienteSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FacturarectificativaclienteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FacturarectificativaclienteMaxAggregateInputType;
};
export type GetFacturarectificativaclienteAggregateType<T extends FacturarectificativaclienteAggregateArgs> = {
    [P in keyof T & keyof AggregateFacturarectificativacliente]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFacturarectificativacliente[P]> : Prisma.GetScalarType<T[P], AggregateFacturarectificativacliente[P]>;
};
export type facturarectificativaclienteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturarectificativaclienteWhereInput;
    orderBy?: Prisma.facturarectificativaclienteOrderByWithAggregationInput | Prisma.facturarectificativaclienteOrderByWithAggregationInput[];
    by: Prisma.FacturarectificativaclienteScalarFieldEnum[] | Prisma.FacturarectificativaclienteScalarFieldEnum;
    having?: Prisma.facturarectificativaclienteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FacturarectificativaclienteCountAggregateInputType | true;
    _avg?: FacturarectificativaclienteAvgAggregateInputType;
    _sum?: FacturarectificativaclienteSumAggregateInputType;
    _min?: FacturarectificativaclienteMinAggregateInputType;
    _max?: FacturarectificativaclienteMaxAggregateInputType;
};
export type FacturarectificativaclienteGroupByOutputType = {
    id: string;
    facturaOriginalId: string;
    numero: string;
    fechaFactura: Date;
    concepto: string;
    base: runtime.Decimal;
    iva: runtime.Decimal;
    total: runtime.Decimal;
    asientoId: string | null;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: FacturarectificativaclienteCountAggregateOutputType | null;
    _avg: FacturarectificativaclienteAvgAggregateOutputType | null;
    _sum: FacturarectificativaclienteSumAggregateOutputType | null;
    _min: FacturarectificativaclienteMinAggregateOutputType | null;
    _max: FacturarectificativaclienteMaxAggregateOutputType | null;
};
export type GetFacturarectificativaclienteGroupByPayload<T extends facturarectificativaclienteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FacturarectificativaclienteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FacturarectificativaclienteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FacturarectificativaclienteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FacturarectificativaclienteGroupByOutputType[P]>;
}>>;
export type facturarectificativaclienteWhereInput = {
    AND?: Prisma.facturarectificativaclienteWhereInput | Prisma.facturarectificativaclienteWhereInput[];
    OR?: Prisma.facturarectificativaclienteWhereInput[];
    NOT?: Prisma.facturarectificativaclienteWhereInput | Prisma.facturarectificativaclienteWhereInput[];
    id?: Prisma.StringFilter<"facturarectificativacliente"> | string;
    facturaOriginalId?: Prisma.StringFilter<"facturarectificativacliente"> | string;
    numero?: Prisma.StringFilter<"facturarectificativacliente"> | string;
    fechaFactura?: Prisma.DateTimeFilter<"facturarectificativacliente"> | Date | string;
    concepto?: Prisma.StringFilter<"facturarectificativacliente"> | string;
    base?: Prisma.DecimalFilter<"facturarectificativacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFilter<"facturarectificativacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"facturarectificativacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    asientoId?: Prisma.StringNullableFilter<"facturarectificativacliente"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"facturarectificativacliente"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"facturarectificativacliente"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"facturarectificativacliente"> | Date | string;
    facturacliente?: Prisma.XOR<Prisma.FacturaclienteScalarRelationFilter, Prisma.facturaclienteWhereInput>;
};
export type facturarectificativaclienteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    facturaOriginalId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    fechaFactura?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    facturacliente?: Prisma.facturaclienteOrderByWithRelationInput;
    _relevance?: Prisma.facturarectificativaclienteOrderByRelevanceInput;
};
export type facturarectificativaclienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    facturaOriginalId_numero?: Prisma.facturarectificativaclienteFacturaOriginalIdNumeroCompoundUniqueInput;
    AND?: Prisma.facturarectificativaclienteWhereInput | Prisma.facturarectificativaclienteWhereInput[];
    OR?: Prisma.facturarectificativaclienteWhereInput[];
    NOT?: Prisma.facturarectificativaclienteWhereInput | Prisma.facturarectificativaclienteWhereInput[];
    facturaOriginalId?: Prisma.StringFilter<"facturarectificativacliente"> | string;
    numero?: Prisma.StringFilter<"facturarectificativacliente"> | string;
    fechaFactura?: Prisma.DateTimeFilter<"facturarectificativacliente"> | Date | string;
    concepto?: Prisma.StringFilter<"facturarectificativacliente"> | string;
    base?: Prisma.DecimalFilter<"facturarectificativacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFilter<"facturarectificativacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"facturarectificativacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    asientoId?: Prisma.StringNullableFilter<"facturarectificativacliente"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"facturarectificativacliente"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"facturarectificativacliente"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"facturarectificativacliente"> | Date | string;
    facturacliente?: Prisma.XOR<Prisma.FacturaclienteScalarRelationFilter, Prisma.facturaclienteWhereInput>;
}, "id" | "facturaOriginalId_numero">;
export type facturarectificativaclienteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    facturaOriginalId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    fechaFactura?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.facturarectificativaclienteCountOrderByAggregateInput;
    _avg?: Prisma.facturarectificativaclienteAvgOrderByAggregateInput;
    _max?: Prisma.facturarectificativaclienteMaxOrderByAggregateInput;
    _min?: Prisma.facturarectificativaclienteMinOrderByAggregateInput;
    _sum?: Prisma.facturarectificativaclienteSumOrderByAggregateInput;
};
export type facturarectificativaclienteScalarWhereWithAggregatesInput = {
    AND?: Prisma.facturarectificativaclienteScalarWhereWithAggregatesInput | Prisma.facturarectificativaclienteScalarWhereWithAggregatesInput[];
    OR?: Prisma.facturarectificativaclienteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.facturarectificativaclienteScalarWhereWithAggregatesInput | Prisma.facturarectificativaclienteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"facturarectificativacliente"> | string;
    facturaOriginalId?: Prisma.StringWithAggregatesFilter<"facturarectificativacliente"> | string;
    numero?: Prisma.StringWithAggregatesFilter<"facturarectificativacliente"> | string;
    fechaFactura?: Prisma.DateTimeWithAggregatesFilter<"facturarectificativacliente"> | Date | string;
    concepto?: Prisma.StringWithAggregatesFilter<"facturarectificativacliente"> | string;
    base?: Prisma.DecimalWithAggregatesFilter<"facturarectificativacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalWithAggregatesFilter<"facturarectificativacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalWithAggregatesFilter<"facturarectificativacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    asientoId?: Prisma.StringNullableWithAggregatesFilter<"facturarectificativacliente"> | string | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"facturarectificativacliente"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"facturarectificativacliente"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"facturarectificativacliente"> | Date | string;
};
export type facturarectificativaclienteCreateInput = {
    id: string;
    numero: string;
    fechaFactura: Date | string;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturacliente: Prisma.facturaclienteCreateNestedOneWithoutFacturarectificativaclienteInput;
};
export type facturarectificativaclienteUncheckedCreateInput = {
    id: string;
    facturaOriginalId: string;
    numero: string;
    fechaFactura: Date | string;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type facturarectificativaclienteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturacliente?: Prisma.facturaclienteUpdateOneRequiredWithoutFacturarectificativaclienteNestedInput;
};
export type facturarectificativaclienteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    facturaOriginalId?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type facturarectificativaclienteCreateManyInput = {
    id: string;
    facturaOriginalId: string;
    numero: string;
    fechaFactura: Date | string;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type facturarectificativaclienteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type facturarectificativaclienteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    facturaOriginalId?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FacturarectificativaclienteListRelationFilter = {
    every?: Prisma.facturarectificativaclienteWhereInput;
    some?: Prisma.facturarectificativaclienteWhereInput;
    none?: Prisma.facturarectificativaclienteWhereInput;
};
export type facturarectificativaclienteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type facturarectificativaclienteOrderByRelevanceInput = {
    fields: Prisma.facturarectificativaclienteOrderByRelevanceFieldEnum | Prisma.facturarectificativaclienteOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type facturarectificativaclienteFacturaOriginalIdNumeroCompoundUniqueInput = {
    facturaOriginalId: string;
    numero: string;
};
export type facturarectificativaclienteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    facturaOriginalId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    fechaFactura?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type facturarectificativaclienteAvgOrderByAggregateInput = {
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type facturarectificativaclienteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    facturaOriginalId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    fechaFactura?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type facturarectificativaclienteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    facturaOriginalId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    fechaFactura?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type facturarectificativaclienteSumOrderByAggregateInput = {
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type facturarectificativaclienteCreateNestedManyWithoutFacturaclienteInput = {
    create?: Prisma.XOR<Prisma.facturarectificativaclienteCreateWithoutFacturaclienteInput, Prisma.facturarectificativaclienteUncheckedCreateWithoutFacturaclienteInput> | Prisma.facturarectificativaclienteCreateWithoutFacturaclienteInput[] | Prisma.facturarectificativaclienteUncheckedCreateWithoutFacturaclienteInput[];
    connectOrCreate?: Prisma.facturarectificativaclienteCreateOrConnectWithoutFacturaclienteInput | Prisma.facturarectificativaclienteCreateOrConnectWithoutFacturaclienteInput[];
    createMany?: Prisma.facturarectificativaclienteCreateManyFacturaclienteInputEnvelope;
    connect?: Prisma.facturarectificativaclienteWhereUniqueInput | Prisma.facturarectificativaclienteWhereUniqueInput[];
};
export type facturarectificativaclienteUncheckedCreateNestedManyWithoutFacturaclienteInput = {
    create?: Prisma.XOR<Prisma.facturarectificativaclienteCreateWithoutFacturaclienteInput, Prisma.facturarectificativaclienteUncheckedCreateWithoutFacturaclienteInput> | Prisma.facturarectificativaclienteCreateWithoutFacturaclienteInput[] | Prisma.facturarectificativaclienteUncheckedCreateWithoutFacturaclienteInput[];
    connectOrCreate?: Prisma.facturarectificativaclienteCreateOrConnectWithoutFacturaclienteInput | Prisma.facturarectificativaclienteCreateOrConnectWithoutFacturaclienteInput[];
    createMany?: Prisma.facturarectificativaclienteCreateManyFacturaclienteInputEnvelope;
    connect?: Prisma.facturarectificativaclienteWhereUniqueInput | Prisma.facturarectificativaclienteWhereUniqueInput[];
};
export type facturarectificativaclienteUpdateManyWithoutFacturaclienteNestedInput = {
    create?: Prisma.XOR<Prisma.facturarectificativaclienteCreateWithoutFacturaclienteInput, Prisma.facturarectificativaclienteUncheckedCreateWithoutFacturaclienteInput> | Prisma.facturarectificativaclienteCreateWithoutFacturaclienteInput[] | Prisma.facturarectificativaclienteUncheckedCreateWithoutFacturaclienteInput[];
    connectOrCreate?: Prisma.facturarectificativaclienteCreateOrConnectWithoutFacturaclienteInput | Prisma.facturarectificativaclienteCreateOrConnectWithoutFacturaclienteInput[];
    upsert?: Prisma.facturarectificativaclienteUpsertWithWhereUniqueWithoutFacturaclienteInput | Prisma.facturarectificativaclienteUpsertWithWhereUniqueWithoutFacturaclienteInput[];
    createMany?: Prisma.facturarectificativaclienteCreateManyFacturaclienteInputEnvelope;
    set?: Prisma.facturarectificativaclienteWhereUniqueInput | Prisma.facturarectificativaclienteWhereUniqueInput[];
    disconnect?: Prisma.facturarectificativaclienteWhereUniqueInput | Prisma.facturarectificativaclienteWhereUniqueInput[];
    delete?: Prisma.facturarectificativaclienteWhereUniqueInput | Prisma.facturarectificativaclienteWhereUniqueInput[];
    connect?: Prisma.facturarectificativaclienteWhereUniqueInput | Prisma.facturarectificativaclienteWhereUniqueInput[];
    update?: Prisma.facturarectificativaclienteUpdateWithWhereUniqueWithoutFacturaclienteInput | Prisma.facturarectificativaclienteUpdateWithWhereUniqueWithoutFacturaclienteInput[];
    updateMany?: Prisma.facturarectificativaclienteUpdateManyWithWhereWithoutFacturaclienteInput | Prisma.facturarectificativaclienteUpdateManyWithWhereWithoutFacturaclienteInput[];
    deleteMany?: Prisma.facturarectificativaclienteScalarWhereInput | Prisma.facturarectificativaclienteScalarWhereInput[];
};
export type facturarectificativaclienteUncheckedUpdateManyWithoutFacturaclienteNestedInput = {
    create?: Prisma.XOR<Prisma.facturarectificativaclienteCreateWithoutFacturaclienteInput, Prisma.facturarectificativaclienteUncheckedCreateWithoutFacturaclienteInput> | Prisma.facturarectificativaclienteCreateWithoutFacturaclienteInput[] | Prisma.facturarectificativaclienteUncheckedCreateWithoutFacturaclienteInput[];
    connectOrCreate?: Prisma.facturarectificativaclienteCreateOrConnectWithoutFacturaclienteInput | Prisma.facturarectificativaclienteCreateOrConnectWithoutFacturaclienteInput[];
    upsert?: Prisma.facturarectificativaclienteUpsertWithWhereUniqueWithoutFacturaclienteInput | Prisma.facturarectificativaclienteUpsertWithWhereUniqueWithoutFacturaclienteInput[];
    createMany?: Prisma.facturarectificativaclienteCreateManyFacturaclienteInputEnvelope;
    set?: Prisma.facturarectificativaclienteWhereUniqueInput | Prisma.facturarectificativaclienteWhereUniqueInput[];
    disconnect?: Prisma.facturarectificativaclienteWhereUniqueInput | Prisma.facturarectificativaclienteWhereUniqueInput[];
    delete?: Prisma.facturarectificativaclienteWhereUniqueInput | Prisma.facturarectificativaclienteWhereUniqueInput[];
    connect?: Prisma.facturarectificativaclienteWhereUniqueInput | Prisma.facturarectificativaclienteWhereUniqueInput[];
    update?: Prisma.facturarectificativaclienteUpdateWithWhereUniqueWithoutFacturaclienteInput | Prisma.facturarectificativaclienteUpdateWithWhereUniqueWithoutFacturaclienteInput[];
    updateMany?: Prisma.facturarectificativaclienteUpdateManyWithWhereWithoutFacturaclienteInput | Prisma.facturarectificativaclienteUpdateManyWithWhereWithoutFacturaclienteInput[];
    deleteMany?: Prisma.facturarectificativaclienteScalarWhereInput | Prisma.facturarectificativaclienteScalarWhereInput[];
};
export type facturarectificativaclienteCreateWithoutFacturaclienteInput = {
    id: string;
    numero: string;
    fechaFactura: Date | string;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type facturarectificativaclienteUncheckedCreateWithoutFacturaclienteInput = {
    id: string;
    numero: string;
    fechaFactura: Date | string;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type facturarectificativaclienteCreateOrConnectWithoutFacturaclienteInput = {
    where: Prisma.facturarectificativaclienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturarectificativaclienteCreateWithoutFacturaclienteInput, Prisma.facturarectificativaclienteUncheckedCreateWithoutFacturaclienteInput>;
};
export type facturarectificativaclienteCreateManyFacturaclienteInputEnvelope = {
    data: Prisma.facturarectificativaclienteCreateManyFacturaclienteInput | Prisma.facturarectificativaclienteCreateManyFacturaclienteInput[];
    skipDuplicates?: boolean;
};
export type facturarectificativaclienteUpsertWithWhereUniqueWithoutFacturaclienteInput = {
    where: Prisma.facturarectificativaclienteWhereUniqueInput;
    update: Prisma.XOR<Prisma.facturarectificativaclienteUpdateWithoutFacturaclienteInput, Prisma.facturarectificativaclienteUncheckedUpdateWithoutFacturaclienteInput>;
    create: Prisma.XOR<Prisma.facturarectificativaclienteCreateWithoutFacturaclienteInput, Prisma.facturarectificativaclienteUncheckedCreateWithoutFacturaclienteInput>;
};
export type facturarectificativaclienteUpdateWithWhereUniqueWithoutFacturaclienteInput = {
    where: Prisma.facturarectificativaclienteWhereUniqueInput;
    data: Prisma.XOR<Prisma.facturarectificativaclienteUpdateWithoutFacturaclienteInput, Prisma.facturarectificativaclienteUncheckedUpdateWithoutFacturaclienteInput>;
};
export type facturarectificativaclienteUpdateManyWithWhereWithoutFacturaclienteInput = {
    where: Prisma.facturarectificativaclienteScalarWhereInput;
    data: Prisma.XOR<Prisma.facturarectificativaclienteUpdateManyMutationInput, Prisma.facturarectificativaclienteUncheckedUpdateManyWithoutFacturaclienteInput>;
};
export type facturarectificativaclienteScalarWhereInput = {
    AND?: Prisma.facturarectificativaclienteScalarWhereInput | Prisma.facturarectificativaclienteScalarWhereInput[];
    OR?: Prisma.facturarectificativaclienteScalarWhereInput[];
    NOT?: Prisma.facturarectificativaclienteScalarWhereInput | Prisma.facturarectificativaclienteScalarWhereInput[];
    id?: Prisma.StringFilter<"facturarectificativacliente"> | string;
    facturaOriginalId?: Prisma.StringFilter<"facturarectificativacliente"> | string;
    numero?: Prisma.StringFilter<"facturarectificativacliente"> | string;
    fechaFactura?: Prisma.DateTimeFilter<"facturarectificativacliente"> | Date | string;
    concepto?: Prisma.StringFilter<"facturarectificativacliente"> | string;
    base?: Prisma.DecimalFilter<"facturarectificativacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFilter<"facturarectificativacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"facturarectificativacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    asientoId?: Prisma.StringNullableFilter<"facturarectificativacliente"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"facturarectificativacliente"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"facturarectificativacliente"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"facturarectificativacliente"> | Date | string;
};
export type facturarectificativaclienteCreateManyFacturaclienteInput = {
    id: string;
    numero: string;
    fechaFactura: Date | string;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type facturarectificativaclienteUpdateWithoutFacturaclienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type facturarectificativaclienteUncheckedUpdateWithoutFacturaclienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type facturarectificativaclienteUncheckedUpdateManyWithoutFacturaclienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type facturarectificativaclienteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    facturaOriginalId?: boolean;
    numero?: boolean;
    fechaFactura?: boolean;
    concepto?: boolean;
    base?: boolean;
    iva?: boolean;
    total?: boolean;
    asientoId?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    facturacliente?: boolean | Prisma.facturaclienteDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["facturarectificativacliente"]>;
export type facturarectificativaclienteSelectScalar = {
    id?: boolean;
    facturaOriginalId?: boolean;
    numero?: boolean;
    fechaFactura?: boolean;
    concepto?: boolean;
    base?: boolean;
    iva?: boolean;
    total?: boolean;
    asientoId?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type facturarectificativaclienteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "facturaOriginalId" | "numero" | "fechaFactura" | "concepto" | "base" | "iva" | "total" | "asientoId" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["facturarectificativacliente"]>;
export type facturarectificativaclienteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    facturacliente?: boolean | Prisma.facturaclienteDefaultArgs<ExtArgs>;
};
export type $facturarectificativaclientePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "facturarectificativacliente";
    objects: {
        facturacliente: Prisma.$facturaclientePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        facturaOriginalId: string;
        numero: string;
        fechaFactura: Date;
        concepto: string;
        base: runtime.Decimal;
        iva: runtime.Decimal;
        total: runtime.Decimal;
        asientoId: string | null;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["facturarectificativacliente"]>;
    composites: {};
};
export type facturarectificativaclienteGetPayload<S extends boolean | null | undefined | facturarectificativaclienteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$facturarectificativaclientePayload, S>;
export type facturarectificativaclienteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<facturarectificativaclienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FacturarectificativaclienteCountAggregateInputType | true;
};
export interface facturarectificativaclienteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['facturarectificativacliente'];
        meta: {
            name: 'facturarectificativacliente';
        };
    };
    /**
     * Find zero or one Facturarectificativacliente that matches the filter.
     * @param {facturarectificativaclienteFindUniqueArgs} args - Arguments to find a Facturarectificativacliente
     * @example
     * // Get one Facturarectificativacliente
     * const facturarectificativacliente = await prisma.facturarectificativacliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends facturarectificativaclienteFindUniqueArgs>(args: Prisma.SelectSubset<T, facturarectificativaclienteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__facturarectificativaclienteClient<runtime.Types.Result.GetResult<Prisma.$facturarectificativaclientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Facturarectificativacliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {facturarectificativaclienteFindUniqueOrThrowArgs} args - Arguments to find a Facturarectificativacliente
     * @example
     * // Get one Facturarectificativacliente
     * const facturarectificativacliente = await prisma.facturarectificativacliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends facturarectificativaclienteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, facturarectificativaclienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__facturarectificativaclienteClient<runtime.Types.Result.GetResult<Prisma.$facturarectificativaclientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Facturarectificativacliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturarectificativaclienteFindFirstArgs} args - Arguments to find a Facturarectificativacliente
     * @example
     * // Get one Facturarectificativacliente
     * const facturarectificativacliente = await prisma.facturarectificativacliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends facturarectificativaclienteFindFirstArgs>(args?: Prisma.SelectSubset<T, facturarectificativaclienteFindFirstArgs<ExtArgs>>): Prisma.Prisma__facturarectificativaclienteClient<runtime.Types.Result.GetResult<Prisma.$facturarectificativaclientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Facturarectificativacliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturarectificativaclienteFindFirstOrThrowArgs} args - Arguments to find a Facturarectificativacliente
     * @example
     * // Get one Facturarectificativacliente
     * const facturarectificativacliente = await prisma.facturarectificativacliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends facturarectificativaclienteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, facturarectificativaclienteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__facturarectificativaclienteClient<runtime.Types.Result.GetResult<Prisma.$facturarectificativaclientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Facturarectificativaclientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturarectificativaclienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facturarectificativaclientes
     * const facturarectificativaclientes = await prisma.facturarectificativacliente.findMany()
     *
     * // Get first 10 Facturarectificativaclientes
     * const facturarectificativaclientes = await prisma.facturarectificativacliente.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const facturarectificativaclienteWithIdOnly = await prisma.facturarectificativacliente.findMany({ select: { id: true } })
     *
     */
    findMany<T extends facturarectificativaclienteFindManyArgs>(args?: Prisma.SelectSubset<T, facturarectificativaclienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturarectificativaclientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Facturarectificativacliente.
     * @param {facturarectificativaclienteCreateArgs} args - Arguments to create a Facturarectificativacliente.
     * @example
     * // Create one Facturarectificativacliente
     * const Facturarectificativacliente = await prisma.facturarectificativacliente.create({
     *   data: {
     *     // ... data to create a Facturarectificativacliente
     *   }
     * })
     *
     */
    create<T extends facturarectificativaclienteCreateArgs>(args: Prisma.SelectSubset<T, facturarectificativaclienteCreateArgs<ExtArgs>>): Prisma.Prisma__facturarectificativaclienteClient<runtime.Types.Result.GetResult<Prisma.$facturarectificativaclientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Facturarectificativaclientes.
     * @param {facturarectificativaclienteCreateManyArgs} args - Arguments to create many Facturarectificativaclientes.
     * @example
     * // Create many Facturarectificativaclientes
     * const facturarectificativacliente = await prisma.facturarectificativacliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends facturarectificativaclienteCreateManyArgs>(args?: Prisma.SelectSubset<T, facturarectificativaclienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Facturarectificativacliente.
     * @param {facturarectificativaclienteDeleteArgs} args - Arguments to delete one Facturarectificativacliente.
     * @example
     * // Delete one Facturarectificativacliente
     * const Facturarectificativacliente = await prisma.facturarectificativacliente.delete({
     *   where: {
     *     // ... filter to delete one Facturarectificativacliente
     *   }
     * })
     *
     */
    delete<T extends facturarectificativaclienteDeleteArgs>(args: Prisma.SelectSubset<T, facturarectificativaclienteDeleteArgs<ExtArgs>>): Prisma.Prisma__facturarectificativaclienteClient<runtime.Types.Result.GetResult<Prisma.$facturarectificativaclientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Facturarectificativacliente.
     * @param {facturarectificativaclienteUpdateArgs} args - Arguments to update one Facturarectificativacliente.
     * @example
     * // Update one Facturarectificativacliente
     * const facturarectificativacliente = await prisma.facturarectificativacliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends facturarectificativaclienteUpdateArgs>(args: Prisma.SelectSubset<T, facturarectificativaclienteUpdateArgs<ExtArgs>>): Prisma.Prisma__facturarectificativaclienteClient<runtime.Types.Result.GetResult<Prisma.$facturarectificativaclientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Facturarectificativaclientes.
     * @param {facturarectificativaclienteDeleteManyArgs} args - Arguments to filter Facturarectificativaclientes to delete.
     * @example
     * // Delete a few Facturarectificativaclientes
     * const { count } = await prisma.facturarectificativacliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends facturarectificativaclienteDeleteManyArgs>(args?: Prisma.SelectSubset<T, facturarectificativaclienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Facturarectificativaclientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturarectificativaclienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facturarectificativaclientes
     * const facturarectificativacliente = await prisma.facturarectificativacliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends facturarectificativaclienteUpdateManyArgs>(args: Prisma.SelectSubset<T, facturarectificativaclienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Facturarectificativacliente.
     * @param {facturarectificativaclienteUpsertArgs} args - Arguments to update or create a Facturarectificativacliente.
     * @example
     * // Update or create a Facturarectificativacliente
     * const facturarectificativacliente = await prisma.facturarectificativacliente.upsert({
     *   create: {
     *     // ... data to create a Facturarectificativacliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facturarectificativacliente we want to update
     *   }
     * })
     */
    upsert<T extends facturarectificativaclienteUpsertArgs>(args: Prisma.SelectSubset<T, facturarectificativaclienteUpsertArgs<ExtArgs>>): Prisma.Prisma__facturarectificativaclienteClient<runtime.Types.Result.GetResult<Prisma.$facturarectificativaclientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Facturarectificativaclientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturarectificativaclienteCountArgs} args - Arguments to filter Facturarectificativaclientes to count.
     * @example
     * // Count the number of Facturarectificativaclientes
     * const count = await prisma.facturarectificativacliente.count({
     *   where: {
     *     // ... the filter for the Facturarectificativaclientes we want to count
     *   }
     * })
    **/
    count<T extends facturarectificativaclienteCountArgs>(args?: Prisma.Subset<T, facturarectificativaclienteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FacturarectificativaclienteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Facturarectificativacliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturarectificativaclienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacturarectificativaclienteAggregateArgs>(args: Prisma.Subset<T, FacturarectificativaclienteAggregateArgs>): Prisma.PrismaPromise<GetFacturarectificativaclienteAggregateType<T>>;
    /**
     * Group by Facturarectificativacliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturarectificativaclienteGroupByArgs} args - Group by arguments.
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
    groupBy<T extends facturarectificativaclienteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: facturarectificativaclienteGroupByArgs['orderBy'];
    } : {
        orderBy?: facturarectificativaclienteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, facturarectificativaclienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturarectificativaclienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the facturarectificativacliente model
     */
    readonly fields: facturarectificativaclienteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for facturarectificativacliente.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__facturarectificativaclienteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    facturacliente<T extends Prisma.facturaclienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.facturaclienteDefaultArgs<ExtArgs>>): Prisma.Prisma__facturaclienteClient<runtime.Types.Result.GetResult<Prisma.$facturaclientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the facturarectificativacliente model
 */
export interface facturarectificativaclienteFieldRefs {
    readonly id: Prisma.FieldRef<"facturarectificativacliente", 'String'>;
    readonly facturaOriginalId: Prisma.FieldRef<"facturarectificativacliente", 'String'>;
    readonly numero: Prisma.FieldRef<"facturarectificativacliente", 'String'>;
    readonly fechaFactura: Prisma.FieldRef<"facturarectificativacliente", 'DateTime'>;
    readonly concepto: Prisma.FieldRef<"facturarectificativacliente", 'String'>;
    readonly base: Prisma.FieldRef<"facturarectificativacliente", 'Decimal'>;
    readonly iva: Prisma.FieldRef<"facturarectificativacliente", 'Decimal'>;
    readonly total: Prisma.FieldRef<"facturarectificativacliente", 'Decimal'>;
    readonly asientoId: Prisma.FieldRef<"facturarectificativacliente", 'String'>;
    readonly observaciones: Prisma.FieldRef<"facturarectificativacliente", 'String'>;
    readonly createdAt: Prisma.FieldRef<"facturarectificativacliente", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"facturarectificativacliente", 'DateTime'>;
}
/**
 * facturarectificativacliente findUnique
 */
export type facturarectificativaclienteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturarectificativacliente
     */
    select?: Prisma.facturarectificativaclienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturarectificativacliente
     */
    omit?: Prisma.facturarectificativaclienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturarectificativaclienteInclude<ExtArgs> | null;
    /**
     * Filter, which facturarectificativacliente to fetch.
     */
    where: Prisma.facturarectificativaclienteWhereUniqueInput;
};
/**
 * facturarectificativacliente findUniqueOrThrow
 */
export type facturarectificativaclienteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturarectificativacliente
     */
    select?: Prisma.facturarectificativaclienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturarectificativacliente
     */
    omit?: Prisma.facturarectificativaclienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturarectificativaclienteInclude<ExtArgs> | null;
    /**
     * Filter, which facturarectificativacliente to fetch.
     */
    where: Prisma.facturarectificativaclienteWhereUniqueInput;
};
/**
 * facturarectificativacliente findFirst
 */
export type facturarectificativaclienteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturarectificativacliente
     */
    select?: Prisma.facturarectificativaclienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturarectificativacliente
     */
    omit?: Prisma.facturarectificativaclienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturarectificativaclienteInclude<ExtArgs> | null;
    /**
     * Filter, which facturarectificativacliente to fetch.
     */
    where?: Prisma.facturarectificativaclienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of facturarectificativaclientes to fetch.
     */
    orderBy?: Prisma.facturarectificativaclienteOrderByWithRelationInput | Prisma.facturarectificativaclienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for facturarectificativaclientes.
     */
    cursor?: Prisma.facturarectificativaclienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` facturarectificativaclientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` facturarectificativaclientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of facturarectificativaclientes.
     */
    distinct?: Prisma.FacturarectificativaclienteScalarFieldEnum | Prisma.FacturarectificativaclienteScalarFieldEnum[];
};
/**
 * facturarectificativacliente findFirstOrThrow
 */
export type facturarectificativaclienteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturarectificativacliente
     */
    select?: Prisma.facturarectificativaclienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturarectificativacliente
     */
    omit?: Prisma.facturarectificativaclienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturarectificativaclienteInclude<ExtArgs> | null;
    /**
     * Filter, which facturarectificativacliente to fetch.
     */
    where?: Prisma.facturarectificativaclienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of facturarectificativaclientes to fetch.
     */
    orderBy?: Prisma.facturarectificativaclienteOrderByWithRelationInput | Prisma.facturarectificativaclienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for facturarectificativaclientes.
     */
    cursor?: Prisma.facturarectificativaclienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` facturarectificativaclientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` facturarectificativaclientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of facturarectificativaclientes.
     */
    distinct?: Prisma.FacturarectificativaclienteScalarFieldEnum | Prisma.FacturarectificativaclienteScalarFieldEnum[];
};
/**
 * facturarectificativacliente findMany
 */
export type facturarectificativaclienteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturarectificativacliente
     */
    select?: Prisma.facturarectificativaclienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturarectificativacliente
     */
    omit?: Prisma.facturarectificativaclienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturarectificativaclienteInclude<ExtArgs> | null;
    /**
     * Filter, which facturarectificativaclientes to fetch.
     */
    where?: Prisma.facturarectificativaclienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of facturarectificativaclientes to fetch.
     */
    orderBy?: Prisma.facturarectificativaclienteOrderByWithRelationInput | Prisma.facturarectificativaclienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing facturarectificativaclientes.
     */
    cursor?: Prisma.facturarectificativaclienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` facturarectificativaclientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` facturarectificativaclientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of facturarectificativaclientes.
     */
    distinct?: Prisma.FacturarectificativaclienteScalarFieldEnum | Prisma.FacturarectificativaclienteScalarFieldEnum[];
};
/**
 * facturarectificativacliente create
 */
export type facturarectificativaclienteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturarectificativacliente
     */
    select?: Prisma.facturarectificativaclienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturarectificativacliente
     */
    omit?: Prisma.facturarectificativaclienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturarectificativaclienteInclude<ExtArgs> | null;
    /**
     * The data needed to create a facturarectificativacliente.
     */
    data: Prisma.XOR<Prisma.facturarectificativaclienteCreateInput, Prisma.facturarectificativaclienteUncheckedCreateInput>;
};
/**
 * facturarectificativacliente createMany
 */
export type facturarectificativaclienteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many facturarectificativaclientes.
     */
    data: Prisma.facturarectificativaclienteCreateManyInput | Prisma.facturarectificativaclienteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * facturarectificativacliente update
 */
export type facturarectificativaclienteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturarectificativacliente
     */
    select?: Prisma.facturarectificativaclienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturarectificativacliente
     */
    omit?: Prisma.facturarectificativaclienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturarectificativaclienteInclude<ExtArgs> | null;
    /**
     * The data needed to update a facturarectificativacliente.
     */
    data: Prisma.XOR<Prisma.facturarectificativaclienteUpdateInput, Prisma.facturarectificativaclienteUncheckedUpdateInput>;
    /**
     * Choose, which facturarectificativacliente to update.
     */
    where: Prisma.facturarectificativaclienteWhereUniqueInput;
};
/**
 * facturarectificativacliente updateMany
 */
export type facturarectificativaclienteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update facturarectificativaclientes.
     */
    data: Prisma.XOR<Prisma.facturarectificativaclienteUpdateManyMutationInput, Prisma.facturarectificativaclienteUncheckedUpdateManyInput>;
    /**
     * Filter which facturarectificativaclientes to update
     */
    where?: Prisma.facturarectificativaclienteWhereInput;
    /**
     * Limit how many facturarectificativaclientes to update.
     */
    limit?: number;
};
/**
 * facturarectificativacliente upsert
 */
export type facturarectificativaclienteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturarectificativacliente
     */
    select?: Prisma.facturarectificativaclienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturarectificativacliente
     */
    omit?: Prisma.facturarectificativaclienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturarectificativaclienteInclude<ExtArgs> | null;
    /**
     * The filter to search for the facturarectificativacliente to update in case it exists.
     */
    where: Prisma.facturarectificativaclienteWhereUniqueInput;
    /**
     * In case the facturarectificativacliente found by the `where` argument doesn't exist, create a new facturarectificativacliente with this data.
     */
    create: Prisma.XOR<Prisma.facturarectificativaclienteCreateInput, Prisma.facturarectificativaclienteUncheckedCreateInput>;
    /**
     * In case the facturarectificativacliente was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.facturarectificativaclienteUpdateInput, Prisma.facturarectificativaclienteUncheckedUpdateInput>;
};
/**
 * facturarectificativacliente delete
 */
export type facturarectificativaclienteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturarectificativacliente
     */
    select?: Prisma.facturarectificativaclienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturarectificativacliente
     */
    omit?: Prisma.facturarectificativaclienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturarectificativaclienteInclude<ExtArgs> | null;
    /**
     * Filter which facturarectificativacliente to delete.
     */
    where: Prisma.facturarectificativaclienteWhereUniqueInput;
};
/**
 * facturarectificativacliente deleteMany
 */
export type facturarectificativaclienteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which facturarectificativaclientes to delete
     */
    where?: Prisma.facturarectificativaclienteWhereInput;
    /**
     * Limit how many facturarectificativaclientes to delete.
     */
    limit?: number;
};
/**
 * facturarectificativacliente without action
 */
export type facturarectificativaclienteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturarectificativacliente
     */
    select?: Prisma.facturarectificativaclienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturarectificativacliente
     */
    omit?: Prisma.facturarectificativaclienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturarectificativaclienteInclude<ExtArgs> | null;
};
//# sourceMappingURL=facturarectificativacliente.d.ts.map