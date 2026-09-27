import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model facturarectificativaproveedor
 *
 */
export type facturarectificativaproveedorModel = runtime.Types.Result.DefaultSelection<Prisma.$facturarectificativaproveedorPayload>;
export type AggregateFacturarectificativaproveedor = {
    _count: FacturarectificativaproveedorCountAggregateOutputType | null;
    _avg: FacturarectificativaproveedorAvgAggregateOutputType | null;
    _sum: FacturarectificativaproveedorSumAggregateOutputType | null;
    _min: FacturarectificativaproveedorMinAggregateOutputType | null;
    _max: FacturarectificativaproveedorMaxAggregateOutputType | null;
};
export type FacturarectificativaproveedorAvgAggregateOutputType = {
    base: runtime.Decimal | null;
    iva: runtime.Decimal | null;
    total: runtime.Decimal | null;
};
export type FacturarectificativaproveedorSumAggregateOutputType = {
    base: runtime.Decimal | null;
    iva: runtime.Decimal | null;
    total: runtime.Decimal | null;
};
export type FacturarectificativaproveedorMinAggregateOutputType = {
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
export type FacturarectificativaproveedorMaxAggregateOutputType = {
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
export type FacturarectificativaproveedorCountAggregateOutputType = {
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
export type FacturarectificativaproveedorAvgAggregateInputType = {
    base?: true;
    iva?: true;
    total?: true;
};
export type FacturarectificativaproveedorSumAggregateInputType = {
    base?: true;
    iva?: true;
    total?: true;
};
export type FacturarectificativaproveedorMinAggregateInputType = {
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
export type FacturarectificativaproveedorMaxAggregateInputType = {
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
export type FacturarectificativaproveedorCountAggregateInputType = {
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
export type FacturarectificativaproveedorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which facturarectificativaproveedor to aggregate.
     */
    where?: Prisma.facturarectificativaproveedorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of facturarectificativaproveedors to fetch.
     */
    orderBy?: Prisma.facturarectificativaproveedorOrderByWithRelationInput | Prisma.facturarectificativaproveedorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.facturarectificativaproveedorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` facturarectificativaproveedors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` facturarectificativaproveedors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned facturarectificativaproveedors
    **/
    _count?: true | FacturarectificativaproveedorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: FacturarectificativaproveedorAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: FacturarectificativaproveedorSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FacturarectificativaproveedorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FacturarectificativaproveedorMaxAggregateInputType;
};
export type GetFacturarectificativaproveedorAggregateType<T extends FacturarectificativaproveedorAggregateArgs> = {
    [P in keyof T & keyof AggregateFacturarectificativaproveedor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFacturarectificativaproveedor[P]> : Prisma.GetScalarType<T[P], AggregateFacturarectificativaproveedor[P]>;
};
export type facturarectificativaproveedorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturarectificativaproveedorWhereInput;
    orderBy?: Prisma.facturarectificativaproveedorOrderByWithAggregationInput | Prisma.facturarectificativaproveedorOrderByWithAggregationInput[];
    by: Prisma.FacturarectificativaproveedorScalarFieldEnum[] | Prisma.FacturarectificativaproveedorScalarFieldEnum;
    having?: Prisma.facturarectificativaproveedorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FacturarectificativaproveedorCountAggregateInputType | true;
    _avg?: FacturarectificativaproveedorAvgAggregateInputType;
    _sum?: FacturarectificativaproveedorSumAggregateInputType;
    _min?: FacturarectificativaproveedorMinAggregateInputType;
    _max?: FacturarectificativaproveedorMaxAggregateInputType;
};
export type FacturarectificativaproveedorGroupByOutputType = {
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
    _count: FacturarectificativaproveedorCountAggregateOutputType | null;
    _avg: FacturarectificativaproveedorAvgAggregateOutputType | null;
    _sum: FacturarectificativaproveedorSumAggregateOutputType | null;
    _min: FacturarectificativaproveedorMinAggregateOutputType | null;
    _max: FacturarectificativaproveedorMaxAggregateOutputType | null;
};
export type GetFacturarectificativaproveedorGroupByPayload<T extends facturarectificativaproveedorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FacturarectificativaproveedorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FacturarectificativaproveedorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FacturarectificativaproveedorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FacturarectificativaproveedorGroupByOutputType[P]>;
}>>;
export type facturarectificativaproveedorWhereInput = {
    AND?: Prisma.facturarectificativaproveedorWhereInput | Prisma.facturarectificativaproveedorWhereInput[];
    OR?: Prisma.facturarectificativaproveedorWhereInput[];
    NOT?: Prisma.facturarectificativaproveedorWhereInput | Prisma.facturarectificativaproveedorWhereInput[];
    id?: Prisma.StringFilter<"facturarectificativaproveedor"> | string;
    facturaOriginalId?: Prisma.StringFilter<"facturarectificativaproveedor"> | string;
    numero?: Prisma.StringFilter<"facturarectificativaproveedor"> | string;
    fechaFactura?: Prisma.DateTimeFilter<"facturarectificativaproveedor"> | Date | string;
    concepto?: Prisma.StringFilter<"facturarectificativaproveedor"> | string;
    base?: Prisma.DecimalFilter<"facturarectificativaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFilter<"facturarectificativaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"facturarectificativaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    asientoId?: Prisma.StringNullableFilter<"facturarectificativaproveedor"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"facturarectificativaproveedor"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"facturarectificativaproveedor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"facturarectificativaproveedor"> | Date | string;
    facturaproveedor?: Prisma.XOR<Prisma.FacturaproveedorScalarRelationFilter, Prisma.facturaproveedorWhereInput>;
};
export type facturarectificativaproveedorOrderByWithRelationInput = {
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
    facturaproveedor?: Prisma.facturaproveedorOrderByWithRelationInput;
    _relevance?: Prisma.facturarectificativaproveedorOrderByRelevanceInput;
};
export type facturarectificativaproveedorWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    facturaOriginalId_numero?: Prisma.facturarectificativaproveedorFacturaOriginalIdNumeroCompoundUniqueInput;
    AND?: Prisma.facturarectificativaproveedorWhereInput | Prisma.facturarectificativaproveedorWhereInput[];
    OR?: Prisma.facturarectificativaproveedorWhereInput[];
    NOT?: Prisma.facturarectificativaproveedorWhereInput | Prisma.facturarectificativaproveedorWhereInput[];
    facturaOriginalId?: Prisma.StringFilter<"facturarectificativaproveedor"> | string;
    numero?: Prisma.StringFilter<"facturarectificativaproveedor"> | string;
    fechaFactura?: Prisma.DateTimeFilter<"facturarectificativaproveedor"> | Date | string;
    concepto?: Prisma.StringFilter<"facturarectificativaproveedor"> | string;
    base?: Prisma.DecimalFilter<"facturarectificativaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFilter<"facturarectificativaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"facturarectificativaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    asientoId?: Prisma.StringNullableFilter<"facturarectificativaproveedor"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"facturarectificativaproveedor"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"facturarectificativaproveedor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"facturarectificativaproveedor"> | Date | string;
    facturaproveedor?: Prisma.XOR<Prisma.FacturaproveedorScalarRelationFilter, Prisma.facturaproveedorWhereInput>;
}, "id" | "facturaOriginalId_numero">;
export type facturarectificativaproveedorOrderByWithAggregationInput = {
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
    _count?: Prisma.facturarectificativaproveedorCountOrderByAggregateInput;
    _avg?: Prisma.facturarectificativaproveedorAvgOrderByAggregateInput;
    _max?: Prisma.facturarectificativaproveedorMaxOrderByAggregateInput;
    _min?: Prisma.facturarectificativaproveedorMinOrderByAggregateInput;
    _sum?: Prisma.facturarectificativaproveedorSumOrderByAggregateInput;
};
export type facturarectificativaproveedorScalarWhereWithAggregatesInput = {
    AND?: Prisma.facturarectificativaproveedorScalarWhereWithAggregatesInput | Prisma.facturarectificativaproveedorScalarWhereWithAggregatesInput[];
    OR?: Prisma.facturarectificativaproveedorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.facturarectificativaproveedorScalarWhereWithAggregatesInput | Prisma.facturarectificativaproveedorScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"facturarectificativaproveedor"> | string;
    facturaOriginalId?: Prisma.StringWithAggregatesFilter<"facturarectificativaproveedor"> | string;
    numero?: Prisma.StringWithAggregatesFilter<"facturarectificativaproveedor"> | string;
    fechaFactura?: Prisma.DateTimeWithAggregatesFilter<"facturarectificativaproveedor"> | Date | string;
    concepto?: Prisma.StringWithAggregatesFilter<"facturarectificativaproveedor"> | string;
    base?: Prisma.DecimalWithAggregatesFilter<"facturarectificativaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalWithAggregatesFilter<"facturarectificativaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalWithAggregatesFilter<"facturarectificativaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    asientoId?: Prisma.StringNullableWithAggregatesFilter<"facturarectificativaproveedor"> | string | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"facturarectificativaproveedor"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"facturarectificativaproveedor"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"facturarectificativaproveedor"> | Date | string;
};
export type facturarectificativaproveedorCreateInput = {
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
    facturaproveedor: Prisma.facturaproveedorCreateNestedOneWithoutFacturarectificativaproveedorInput;
};
export type facturarectificativaproveedorUncheckedCreateInput = {
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
export type facturarectificativaproveedorUpdateInput = {
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
    facturaproveedor?: Prisma.facturaproveedorUpdateOneRequiredWithoutFacturarectificativaproveedorNestedInput;
};
export type facturarectificativaproveedorUncheckedUpdateInput = {
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
export type facturarectificativaproveedorCreateManyInput = {
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
export type facturarectificativaproveedorUpdateManyMutationInput = {
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
export type facturarectificativaproveedorUncheckedUpdateManyInput = {
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
export type FacturarectificativaproveedorListRelationFilter = {
    every?: Prisma.facturarectificativaproveedorWhereInput;
    some?: Prisma.facturarectificativaproveedorWhereInput;
    none?: Prisma.facturarectificativaproveedorWhereInput;
};
export type facturarectificativaproveedorOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type facturarectificativaproveedorOrderByRelevanceInput = {
    fields: Prisma.facturarectificativaproveedorOrderByRelevanceFieldEnum | Prisma.facturarectificativaproveedorOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type facturarectificativaproveedorFacturaOriginalIdNumeroCompoundUniqueInput = {
    facturaOriginalId: string;
    numero: string;
};
export type facturarectificativaproveedorCountOrderByAggregateInput = {
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
export type facturarectificativaproveedorAvgOrderByAggregateInput = {
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type facturarectificativaproveedorMaxOrderByAggregateInput = {
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
export type facturarectificativaproveedorMinOrderByAggregateInput = {
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
export type facturarectificativaproveedorSumOrderByAggregateInput = {
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type facturarectificativaproveedorCreateNestedManyWithoutFacturaproveedorInput = {
    create?: Prisma.XOR<Prisma.facturarectificativaproveedorCreateWithoutFacturaproveedorInput, Prisma.facturarectificativaproveedorUncheckedCreateWithoutFacturaproveedorInput> | Prisma.facturarectificativaproveedorCreateWithoutFacturaproveedorInput[] | Prisma.facturarectificativaproveedorUncheckedCreateWithoutFacturaproveedorInput[];
    connectOrCreate?: Prisma.facturarectificativaproveedorCreateOrConnectWithoutFacturaproveedorInput | Prisma.facturarectificativaproveedorCreateOrConnectWithoutFacturaproveedorInput[];
    createMany?: Prisma.facturarectificativaproveedorCreateManyFacturaproveedorInputEnvelope;
    connect?: Prisma.facturarectificativaproveedorWhereUniqueInput | Prisma.facturarectificativaproveedorWhereUniqueInput[];
};
export type facturarectificativaproveedorUncheckedCreateNestedManyWithoutFacturaproveedorInput = {
    create?: Prisma.XOR<Prisma.facturarectificativaproveedorCreateWithoutFacturaproveedorInput, Prisma.facturarectificativaproveedorUncheckedCreateWithoutFacturaproveedorInput> | Prisma.facturarectificativaproveedorCreateWithoutFacturaproveedorInput[] | Prisma.facturarectificativaproveedorUncheckedCreateWithoutFacturaproveedorInput[];
    connectOrCreate?: Prisma.facturarectificativaproveedorCreateOrConnectWithoutFacturaproveedorInput | Prisma.facturarectificativaproveedorCreateOrConnectWithoutFacturaproveedorInput[];
    createMany?: Prisma.facturarectificativaproveedorCreateManyFacturaproveedorInputEnvelope;
    connect?: Prisma.facturarectificativaproveedorWhereUniqueInput | Prisma.facturarectificativaproveedorWhereUniqueInput[];
};
export type facturarectificativaproveedorUpdateManyWithoutFacturaproveedorNestedInput = {
    create?: Prisma.XOR<Prisma.facturarectificativaproveedorCreateWithoutFacturaproveedorInput, Prisma.facturarectificativaproveedorUncheckedCreateWithoutFacturaproveedorInput> | Prisma.facturarectificativaproveedorCreateWithoutFacturaproveedorInput[] | Prisma.facturarectificativaproveedorUncheckedCreateWithoutFacturaproveedorInput[];
    connectOrCreate?: Prisma.facturarectificativaproveedorCreateOrConnectWithoutFacturaproveedorInput | Prisma.facturarectificativaproveedorCreateOrConnectWithoutFacturaproveedorInput[];
    upsert?: Prisma.facturarectificativaproveedorUpsertWithWhereUniqueWithoutFacturaproveedorInput | Prisma.facturarectificativaproveedorUpsertWithWhereUniqueWithoutFacturaproveedorInput[];
    createMany?: Prisma.facturarectificativaproveedorCreateManyFacturaproveedorInputEnvelope;
    set?: Prisma.facturarectificativaproveedorWhereUniqueInput | Prisma.facturarectificativaproveedorWhereUniqueInput[];
    disconnect?: Prisma.facturarectificativaproveedorWhereUniqueInput | Prisma.facturarectificativaproveedorWhereUniqueInput[];
    delete?: Prisma.facturarectificativaproveedorWhereUniqueInput | Prisma.facturarectificativaproveedorWhereUniqueInput[];
    connect?: Prisma.facturarectificativaproveedorWhereUniqueInput | Prisma.facturarectificativaproveedorWhereUniqueInput[];
    update?: Prisma.facturarectificativaproveedorUpdateWithWhereUniqueWithoutFacturaproveedorInput | Prisma.facturarectificativaproveedorUpdateWithWhereUniqueWithoutFacturaproveedorInput[];
    updateMany?: Prisma.facturarectificativaproveedorUpdateManyWithWhereWithoutFacturaproveedorInput | Prisma.facturarectificativaproveedorUpdateManyWithWhereWithoutFacturaproveedorInput[];
    deleteMany?: Prisma.facturarectificativaproveedorScalarWhereInput | Prisma.facturarectificativaproveedorScalarWhereInput[];
};
export type facturarectificativaproveedorUncheckedUpdateManyWithoutFacturaproveedorNestedInput = {
    create?: Prisma.XOR<Prisma.facturarectificativaproveedorCreateWithoutFacturaproveedorInput, Prisma.facturarectificativaproveedorUncheckedCreateWithoutFacturaproveedorInput> | Prisma.facturarectificativaproveedorCreateWithoutFacturaproveedorInput[] | Prisma.facturarectificativaproveedorUncheckedCreateWithoutFacturaproveedorInput[];
    connectOrCreate?: Prisma.facturarectificativaproveedorCreateOrConnectWithoutFacturaproveedorInput | Prisma.facturarectificativaproveedorCreateOrConnectWithoutFacturaproveedorInput[];
    upsert?: Prisma.facturarectificativaproveedorUpsertWithWhereUniqueWithoutFacturaproveedorInput | Prisma.facturarectificativaproveedorUpsertWithWhereUniqueWithoutFacturaproveedorInput[];
    createMany?: Prisma.facturarectificativaproveedorCreateManyFacturaproveedorInputEnvelope;
    set?: Prisma.facturarectificativaproveedorWhereUniqueInput | Prisma.facturarectificativaproveedorWhereUniqueInput[];
    disconnect?: Prisma.facturarectificativaproveedorWhereUniqueInput | Prisma.facturarectificativaproveedorWhereUniqueInput[];
    delete?: Prisma.facturarectificativaproveedorWhereUniqueInput | Prisma.facturarectificativaproveedorWhereUniqueInput[];
    connect?: Prisma.facturarectificativaproveedorWhereUniqueInput | Prisma.facturarectificativaproveedorWhereUniqueInput[];
    update?: Prisma.facturarectificativaproveedorUpdateWithWhereUniqueWithoutFacturaproveedorInput | Prisma.facturarectificativaproveedorUpdateWithWhereUniqueWithoutFacturaproveedorInput[];
    updateMany?: Prisma.facturarectificativaproveedorUpdateManyWithWhereWithoutFacturaproveedorInput | Prisma.facturarectificativaproveedorUpdateManyWithWhereWithoutFacturaproveedorInput[];
    deleteMany?: Prisma.facturarectificativaproveedorScalarWhereInput | Prisma.facturarectificativaproveedorScalarWhereInput[];
};
export type facturarectificativaproveedorCreateWithoutFacturaproveedorInput = {
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
export type facturarectificativaproveedorUncheckedCreateWithoutFacturaproveedorInput = {
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
export type facturarectificativaproveedorCreateOrConnectWithoutFacturaproveedorInput = {
    where: Prisma.facturarectificativaproveedorWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturarectificativaproveedorCreateWithoutFacturaproveedorInput, Prisma.facturarectificativaproveedorUncheckedCreateWithoutFacturaproveedorInput>;
};
export type facturarectificativaproveedorCreateManyFacturaproveedorInputEnvelope = {
    data: Prisma.facturarectificativaproveedorCreateManyFacturaproveedorInput | Prisma.facturarectificativaproveedorCreateManyFacturaproveedorInput[];
    skipDuplicates?: boolean;
};
export type facturarectificativaproveedorUpsertWithWhereUniqueWithoutFacturaproveedorInput = {
    where: Prisma.facturarectificativaproveedorWhereUniqueInput;
    update: Prisma.XOR<Prisma.facturarectificativaproveedorUpdateWithoutFacturaproveedorInput, Prisma.facturarectificativaproveedorUncheckedUpdateWithoutFacturaproveedorInput>;
    create: Prisma.XOR<Prisma.facturarectificativaproveedorCreateWithoutFacturaproveedorInput, Prisma.facturarectificativaproveedorUncheckedCreateWithoutFacturaproveedorInput>;
};
export type facturarectificativaproveedorUpdateWithWhereUniqueWithoutFacturaproveedorInput = {
    where: Prisma.facturarectificativaproveedorWhereUniqueInput;
    data: Prisma.XOR<Prisma.facturarectificativaproveedorUpdateWithoutFacturaproveedorInput, Prisma.facturarectificativaproveedorUncheckedUpdateWithoutFacturaproveedorInput>;
};
export type facturarectificativaproveedorUpdateManyWithWhereWithoutFacturaproveedorInput = {
    where: Prisma.facturarectificativaproveedorScalarWhereInput;
    data: Prisma.XOR<Prisma.facturarectificativaproveedorUpdateManyMutationInput, Prisma.facturarectificativaproveedorUncheckedUpdateManyWithoutFacturaproveedorInput>;
};
export type facturarectificativaproveedorScalarWhereInput = {
    AND?: Prisma.facturarectificativaproveedorScalarWhereInput | Prisma.facturarectificativaproveedorScalarWhereInput[];
    OR?: Prisma.facturarectificativaproveedorScalarWhereInput[];
    NOT?: Prisma.facturarectificativaproveedorScalarWhereInput | Prisma.facturarectificativaproveedorScalarWhereInput[];
    id?: Prisma.StringFilter<"facturarectificativaproveedor"> | string;
    facturaOriginalId?: Prisma.StringFilter<"facturarectificativaproveedor"> | string;
    numero?: Prisma.StringFilter<"facturarectificativaproveedor"> | string;
    fechaFactura?: Prisma.DateTimeFilter<"facturarectificativaproveedor"> | Date | string;
    concepto?: Prisma.StringFilter<"facturarectificativaproveedor"> | string;
    base?: Prisma.DecimalFilter<"facturarectificativaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFilter<"facturarectificativaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"facturarectificativaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    asientoId?: Prisma.StringNullableFilter<"facturarectificativaproveedor"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"facturarectificativaproveedor"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"facturarectificativaproveedor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"facturarectificativaproveedor"> | Date | string;
};
export type facturarectificativaproveedorCreateManyFacturaproveedorInput = {
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
export type facturarectificativaproveedorUpdateWithoutFacturaproveedorInput = {
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
export type facturarectificativaproveedorUncheckedUpdateWithoutFacturaproveedorInput = {
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
export type facturarectificativaproveedorUncheckedUpdateManyWithoutFacturaproveedorInput = {
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
export type facturarectificativaproveedorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
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
    facturaproveedor?: boolean | Prisma.facturaproveedorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["facturarectificativaproveedor"]>;
export type facturarectificativaproveedorSelectScalar = {
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
export type facturarectificativaproveedorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "facturaOriginalId" | "numero" | "fechaFactura" | "concepto" | "base" | "iva" | "total" | "asientoId" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["facturarectificativaproveedor"]>;
export type facturarectificativaproveedorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    facturaproveedor?: boolean | Prisma.facturaproveedorDefaultArgs<ExtArgs>;
};
export type $facturarectificativaproveedorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "facturarectificativaproveedor";
    objects: {
        facturaproveedor: Prisma.$facturaproveedorPayload<ExtArgs>;
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
    }, ExtArgs["result"]["facturarectificativaproveedor"]>;
    composites: {};
};
export type facturarectificativaproveedorGetPayload<S extends boolean | null | undefined | facturarectificativaproveedorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$facturarectificativaproveedorPayload, S>;
export type facturarectificativaproveedorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<facturarectificativaproveedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FacturarectificativaproveedorCountAggregateInputType | true;
};
export interface facturarectificativaproveedorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['facturarectificativaproveedor'];
        meta: {
            name: 'facturarectificativaproveedor';
        };
    };
    /**
     * Find zero or one Facturarectificativaproveedor that matches the filter.
     * @param {facturarectificativaproveedorFindUniqueArgs} args - Arguments to find a Facturarectificativaproveedor
     * @example
     * // Get one Facturarectificativaproveedor
     * const facturarectificativaproveedor = await prisma.facturarectificativaproveedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends facturarectificativaproveedorFindUniqueArgs>(args: Prisma.SelectSubset<T, facturarectificativaproveedorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__facturarectificativaproveedorClient<runtime.Types.Result.GetResult<Prisma.$facturarectificativaproveedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Facturarectificativaproveedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {facturarectificativaproveedorFindUniqueOrThrowArgs} args - Arguments to find a Facturarectificativaproveedor
     * @example
     * // Get one Facturarectificativaproveedor
     * const facturarectificativaproveedor = await prisma.facturarectificativaproveedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends facturarectificativaproveedorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, facturarectificativaproveedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__facturarectificativaproveedorClient<runtime.Types.Result.GetResult<Prisma.$facturarectificativaproveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Facturarectificativaproveedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturarectificativaproveedorFindFirstArgs} args - Arguments to find a Facturarectificativaproveedor
     * @example
     * // Get one Facturarectificativaproveedor
     * const facturarectificativaproveedor = await prisma.facturarectificativaproveedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends facturarectificativaproveedorFindFirstArgs>(args?: Prisma.SelectSubset<T, facturarectificativaproveedorFindFirstArgs<ExtArgs>>): Prisma.Prisma__facturarectificativaproveedorClient<runtime.Types.Result.GetResult<Prisma.$facturarectificativaproveedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Facturarectificativaproveedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturarectificativaproveedorFindFirstOrThrowArgs} args - Arguments to find a Facturarectificativaproveedor
     * @example
     * // Get one Facturarectificativaproveedor
     * const facturarectificativaproveedor = await prisma.facturarectificativaproveedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends facturarectificativaproveedorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, facturarectificativaproveedorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__facturarectificativaproveedorClient<runtime.Types.Result.GetResult<Prisma.$facturarectificativaproveedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Facturarectificativaproveedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturarectificativaproveedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facturarectificativaproveedors
     * const facturarectificativaproveedors = await prisma.facturarectificativaproveedor.findMany()
     *
     * // Get first 10 Facturarectificativaproveedors
     * const facturarectificativaproveedors = await prisma.facturarectificativaproveedor.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const facturarectificativaproveedorWithIdOnly = await prisma.facturarectificativaproveedor.findMany({ select: { id: true } })
     *
     */
    findMany<T extends facturarectificativaproveedorFindManyArgs>(args?: Prisma.SelectSubset<T, facturarectificativaproveedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturarectificativaproveedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Facturarectificativaproveedor.
     * @param {facturarectificativaproveedorCreateArgs} args - Arguments to create a Facturarectificativaproveedor.
     * @example
     * // Create one Facturarectificativaproveedor
     * const Facturarectificativaproveedor = await prisma.facturarectificativaproveedor.create({
     *   data: {
     *     // ... data to create a Facturarectificativaproveedor
     *   }
     * })
     *
     */
    create<T extends facturarectificativaproveedorCreateArgs>(args: Prisma.SelectSubset<T, facturarectificativaproveedorCreateArgs<ExtArgs>>): Prisma.Prisma__facturarectificativaproveedorClient<runtime.Types.Result.GetResult<Prisma.$facturarectificativaproveedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Facturarectificativaproveedors.
     * @param {facturarectificativaproveedorCreateManyArgs} args - Arguments to create many Facturarectificativaproveedors.
     * @example
     * // Create many Facturarectificativaproveedors
     * const facturarectificativaproveedor = await prisma.facturarectificativaproveedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends facturarectificativaproveedorCreateManyArgs>(args?: Prisma.SelectSubset<T, facturarectificativaproveedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Facturarectificativaproveedor.
     * @param {facturarectificativaproveedorDeleteArgs} args - Arguments to delete one Facturarectificativaproveedor.
     * @example
     * // Delete one Facturarectificativaproveedor
     * const Facturarectificativaproveedor = await prisma.facturarectificativaproveedor.delete({
     *   where: {
     *     // ... filter to delete one Facturarectificativaproveedor
     *   }
     * })
     *
     */
    delete<T extends facturarectificativaproveedorDeleteArgs>(args: Prisma.SelectSubset<T, facturarectificativaproveedorDeleteArgs<ExtArgs>>): Prisma.Prisma__facturarectificativaproveedorClient<runtime.Types.Result.GetResult<Prisma.$facturarectificativaproveedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Facturarectificativaproveedor.
     * @param {facturarectificativaproveedorUpdateArgs} args - Arguments to update one Facturarectificativaproveedor.
     * @example
     * // Update one Facturarectificativaproveedor
     * const facturarectificativaproveedor = await prisma.facturarectificativaproveedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends facturarectificativaproveedorUpdateArgs>(args: Prisma.SelectSubset<T, facturarectificativaproveedorUpdateArgs<ExtArgs>>): Prisma.Prisma__facturarectificativaproveedorClient<runtime.Types.Result.GetResult<Prisma.$facturarectificativaproveedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Facturarectificativaproveedors.
     * @param {facturarectificativaproveedorDeleteManyArgs} args - Arguments to filter Facturarectificativaproveedors to delete.
     * @example
     * // Delete a few Facturarectificativaproveedors
     * const { count } = await prisma.facturarectificativaproveedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends facturarectificativaproveedorDeleteManyArgs>(args?: Prisma.SelectSubset<T, facturarectificativaproveedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Facturarectificativaproveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturarectificativaproveedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facturarectificativaproveedors
     * const facturarectificativaproveedor = await prisma.facturarectificativaproveedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends facturarectificativaproveedorUpdateManyArgs>(args: Prisma.SelectSubset<T, facturarectificativaproveedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Facturarectificativaproveedor.
     * @param {facturarectificativaproveedorUpsertArgs} args - Arguments to update or create a Facturarectificativaproveedor.
     * @example
     * // Update or create a Facturarectificativaproveedor
     * const facturarectificativaproveedor = await prisma.facturarectificativaproveedor.upsert({
     *   create: {
     *     // ... data to create a Facturarectificativaproveedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facturarectificativaproveedor we want to update
     *   }
     * })
     */
    upsert<T extends facturarectificativaproveedorUpsertArgs>(args: Prisma.SelectSubset<T, facturarectificativaproveedorUpsertArgs<ExtArgs>>): Prisma.Prisma__facturarectificativaproveedorClient<runtime.Types.Result.GetResult<Prisma.$facturarectificativaproveedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Facturarectificativaproveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturarectificativaproveedorCountArgs} args - Arguments to filter Facturarectificativaproveedors to count.
     * @example
     * // Count the number of Facturarectificativaproveedors
     * const count = await prisma.facturarectificativaproveedor.count({
     *   where: {
     *     // ... the filter for the Facturarectificativaproveedors we want to count
     *   }
     * })
    **/
    count<T extends facturarectificativaproveedorCountArgs>(args?: Prisma.Subset<T, facturarectificativaproveedorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FacturarectificativaproveedorCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Facturarectificativaproveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturarectificativaproveedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacturarectificativaproveedorAggregateArgs>(args: Prisma.Subset<T, FacturarectificativaproveedorAggregateArgs>): Prisma.PrismaPromise<GetFacturarectificativaproveedorAggregateType<T>>;
    /**
     * Group by Facturarectificativaproveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturarectificativaproveedorGroupByArgs} args - Group by arguments.
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
    groupBy<T extends facturarectificativaproveedorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: facturarectificativaproveedorGroupByArgs['orderBy'];
    } : {
        orderBy?: facturarectificativaproveedorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, facturarectificativaproveedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturarectificativaproveedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the facturarectificativaproveedor model
     */
    readonly fields: facturarectificativaproveedorFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for facturarectificativaproveedor.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__facturarectificativaproveedorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    facturaproveedor<T extends Prisma.facturaproveedorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.facturaproveedorDefaultArgs<ExtArgs>>): Prisma.Prisma__facturaproveedorClient<runtime.Types.Result.GetResult<Prisma.$facturaproveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the facturarectificativaproveedor model
 */
export interface facturarectificativaproveedorFieldRefs {
    readonly id: Prisma.FieldRef<"facturarectificativaproveedor", 'String'>;
    readonly facturaOriginalId: Prisma.FieldRef<"facturarectificativaproveedor", 'String'>;
    readonly numero: Prisma.FieldRef<"facturarectificativaproveedor", 'String'>;
    readonly fechaFactura: Prisma.FieldRef<"facturarectificativaproveedor", 'DateTime'>;
    readonly concepto: Prisma.FieldRef<"facturarectificativaproveedor", 'String'>;
    readonly base: Prisma.FieldRef<"facturarectificativaproveedor", 'Decimal'>;
    readonly iva: Prisma.FieldRef<"facturarectificativaproveedor", 'Decimal'>;
    readonly total: Prisma.FieldRef<"facturarectificativaproveedor", 'Decimal'>;
    readonly asientoId: Prisma.FieldRef<"facturarectificativaproveedor", 'String'>;
    readonly observaciones: Prisma.FieldRef<"facturarectificativaproveedor", 'String'>;
    readonly createdAt: Prisma.FieldRef<"facturarectificativaproveedor", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"facturarectificativaproveedor", 'DateTime'>;
}
/**
 * facturarectificativaproveedor findUnique
 */
export type facturarectificativaproveedorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturarectificativaproveedor
     */
    select?: Prisma.facturarectificativaproveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturarectificativaproveedor
     */
    omit?: Prisma.facturarectificativaproveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturarectificativaproveedorInclude<ExtArgs> | null;
    /**
     * Filter, which facturarectificativaproveedor to fetch.
     */
    where: Prisma.facturarectificativaproveedorWhereUniqueInput;
};
/**
 * facturarectificativaproveedor findUniqueOrThrow
 */
export type facturarectificativaproveedorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturarectificativaproveedor
     */
    select?: Prisma.facturarectificativaproveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturarectificativaproveedor
     */
    omit?: Prisma.facturarectificativaproveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturarectificativaproveedorInclude<ExtArgs> | null;
    /**
     * Filter, which facturarectificativaproveedor to fetch.
     */
    where: Prisma.facturarectificativaproveedorWhereUniqueInput;
};
/**
 * facturarectificativaproveedor findFirst
 */
export type facturarectificativaproveedorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturarectificativaproveedor
     */
    select?: Prisma.facturarectificativaproveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturarectificativaproveedor
     */
    omit?: Prisma.facturarectificativaproveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturarectificativaproveedorInclude<ExtArgs> | null;
    /**
     * Filter, which facturarectificativaproveedor to fetch.
     */
    where?: Prisma.facturarectificativaproveedorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of facturarectificativaproveedors to fetch.
     */
    orderBy?: Prisma.facturarectificativaproveedorOrderByWithRelationInput | Prisma.facturarectificativaproveedorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for facturarectificativaproveedors.
     */
    cursor?: Prisma.facturarectificativaproveedorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` facturarectificativaproveedors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` facturarectificativaproveedors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of facturarectificativaproveedors.
     */
    distinct?: Prisma.FacturarectificativaproveedorScalarFieldEnum | Prisma.FacturarectificativaproveedorScalarFieldEnum[];
};
/**
 * facturarectificativaproveedor findFirstOrThrow
 */
export type facturarectificativaproveedorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturarectificativaproveedor
     */
    select?: Prisma.facturarectificativaproveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturarectificativaproveedor
     */
    omit?: Prisma.facturarectificativaproveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturarectificativaproveedorInclude<ExtArgs> | null;
    /**
     * Filter, which facturarectificativaproveedor to fetch.
     */
    where?: Prisma.facturarectificativaproveedorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of facturarectificativaproveedors to fetch.
     */
    orderBy?: Prisma.facturarectificativaproveedorOrderByWithRelationInput | Prisma.facturarectificativaproveedorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for facturarectificativaproveedors.
     */
    cursor?: Prisma.facturarectificativaproveedorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` facturarectificativaproveedors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` facturarectificativaproveedors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of facturarectificativaproveedors.
     */
    distinct?: Prisma.FacturarectificativaproveedorScalarFieldEnum | Prisma.FacturarectificativaproveedorScalarFieldEnum[];
};
/**
 * facturarectificativaproveedor findMany
 */
export type facturarectificativaproveedorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturarectificativaproveedor
     */
    select?: Prisma.facturarectificativaproveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturarectificativaproveedor
     */
    omit?: Prisma.facturarectificativaproveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturarectificativaproveedorInclude<ExtArgs> | null;
    /**
     * Filter, which facturarectificativaproveedors to fetch.
     */
    where?: Prisma.facturarectificativaproveedorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of facturarectificativaproveedors to fetch.
     */
    orderBy?: Prisma.facturarectificativaproveedorOrderByWithRelationInput | Prisma.facturarectificativaproveedorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing facturarectificativaproveedors.
     */
    cursor?: Prisma.facturarectificativaproveedorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` facturarectificativaproveedors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` facturarectificativaproveedors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of facturarectificativaproveedors.
     */
    distinct?: Prisma.FacturarectificativaproveedorScalarFieldEnum | Prisma.FacturarectificativaproveedorScalarFieldEnum[];
};
/**
 * facturarectificativaproveedor create
 */
export type facturarectificativaproveedorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturarectificativaproveedor
     */
    select?: Prisma.facturarectificativaproveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturarectificativaproveedor
     */
    omit?: Prisma.facturarectificativaproveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturarectificativaproveedorInclude<ExtArgs> | null;
    /**
     * The data needed to create a facturarectificativaproveedor.
     */
    data: Prisma.XOR<Prisma.facturarectificativaproveedorCreateInput, Prisma.facturarectificativaproveedorUncheckedCreateInput>;
};
/**
 * facturarectificativaproveedor createMany
 */
export type facturarectificativaproveedorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many facturarectificativaproveedors.
     */
    data: Prisma.facturarectificativaproveedorCreateManyInput | Prisma.facturarectificativaproveedorCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * facturarectificativaproveedor update
 */
export type facturarectificativaproveedorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturarectificativaproveedor
     */
    select?: Prisma.facturarectificativaproveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturarectificativaproveedor
     */
    omit?: Prisma.facturarectificativaproveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturarectificativaproveedorInclude<ExtArgs> | null;
    /**
     * The data needed to update a facturarectificativaproveedor.
     */
    data: Prisma.XOR<Prisma.facturarectificativaproveedorUpdateInput, Prisma.facturarectificativaproveedorUncheckedUpdateInput>;
    /**
     * Choose, which facturarectificativaproveedor to update.
     */
    where: Prisma.facturarectificativaproveedorWhereUniqueInput;
};
/**
 * facturarectificativaproveedor updateMany
 */
export type facturarectificativaproveedorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update facturarectificativaproveedors.
     */
    data: Prisma.XOR<Prisma.facturarectificativaproveedorUpdateManyMutationInput, Prisma.facturarectificativaproveedorUncheckedUpdateManyInput>;
    /**
     * Filter which facturarectificativaproveedors to update
     */
    where?: Prisma.facturarectificativaproveedorWhereInput;
    /**
     * Limit how many facturarectificativaproveedors to update.
     */
    limit?: number;
};
/**
 * facturarectificativaproveedor upsert
 */
export type facturarectificativaproveedorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturarectificativaproveedor
     */
    select?: Prisma.facturarectificativaproveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturarectificativaproveedor
     */
    omit?: Prisma.facturarectificativaproveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturarectificativaproveedorInclude<ExtArgs> | null;
    /**
     * The filter to search for the facturarectificativaproveedor to update in case it exists.
     */
    where: Prisma.facturarectificativaproveedorWhereUniqueInput;
    /**
     * In case the facturarectificativaproveedor found by the `where` argument doesn't exist, create a new facturarectificativaproveedor with this data.
     */
    create: Prisma.XOR<Prisma.facturarectificativaproveedorCreateInput, Prisma.facturarectificativaproveedorUncheckedCreateInput>;
    /**
     * In case the facturarectificativaproveedor was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.facturarectificativaproveedorUpdateInput, Prisma.facturarectificativaproveedorUncheckedUpdateInput>;
};
/**
 * facturarectificativaproveedor delete
 */
export type facturarectificativaproveedorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturarectificativaproveedor
     */
    select?: Prisma.facturarectificativaproveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturarectificativaproveedor
     */
    omit?: Prisma.facturarectificativaproveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturarectificativaproveedorInclude<ExtArgs> | null;
    /**
     * Filter which facturarectificativaproveedor to delete.
     */
    where: Prisma.facturarectificativaproveedorWhereUniqueInput;
};
/**
 * facturarectificativaproveedor deleteMany
 */
export type facturarectificativaproveedorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which facturarectificativaproveedors to delete
     */
    where?: Prisma.facturarectificativaproveedorWhereInput;
    /**
     * Limit how many facturarectificativaproveedors to delete.
     */
    limit?: number;
};
/**
 * facturarectificativaproveedor without action
 */
export type facturarectificativaproveedorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturarectificativaproveedor
     */
    select?: Prisma.facturarectificativaproveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturarectificativaproveedor
     */
    omit?: Prisma.facturarectificativaproveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturarectificativaproveedorInclude<ExtArgs> | null;
};
//# sourceMappingURL=facturarectificativaproveedor.d.ts.map