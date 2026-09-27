import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model pago
 *
 */
export type pagoModel = runtime.Types.Result.DefaultSelection<Prisma.$pagoPayload>;
export type AggregatePago = {
    _count: PagoCountAggregateOutputType | null;
    _avg: PagoAvgAggregateOutputType | null;
    _sum: PagoSumAggregateOutputType | null;
    _min: PagoMinAggregateOutputType | null;
    _max: PagoMaxAggregateOutputType | null;
};
export type PagoAvgAggregateOutputType = {
    importeTotal: runtime.Decimal | null;
};
export type PagoSumAggregateOutputType = {
    importeTotal: runtime.Decimal | null;
};
export type PagoMinAggregateOutputType = {
    id: string | null;
    fechaPago: Date | null;
    proveedorId: string | null;
    importeTotal: runtime.Decimal | null;
    cuentaFinancieraId: string | null;
    medioPago: $Enums.pago_medioPago | null;
    concepto: string | null;
    referencia: string | null;
    observaciones: string | null;
    movimientoFinancieroId: string | null;
    asientoId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PagoMaxAggregateOutputType = {
    id: string | null;
    fechaPago: Date | null;
    proveedorId: string | null;
    importeTotal: runtime.Decimal | null;
    cuentaFinancieraId: string | null;
    medioPago: $Enums.pago_medioPago | null;
    concepto: string | null;
    referencia: string | null;
    observaciones: string | null;
    movimientoFinancieroId: string | null;
    asientoId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PagoCountAggregateOutputType = {
    id: number;
    fechaPago: number;
    proveedorId: number;
    importeTotal: number;
    cuentaFinancieraId: number;
    medioPago: number;
    concepto: number;
    referencia: number;
    observaciones: number;
    movimientoFinancieroId: number;
    asientoId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PagoAvgAggregateInputType = {
    importeTotal?: true;
};
export type PagoSumAggregateInputType = {
    importeTotal?: true;
};
export type PagoMinAggregateInputType = {
    id?: true;
    fechaPago?: true;
    proveedorId?: true;
    importeTotal?: true;
    cuentaFinancieraId?: true;
    medioPago?: true;
    concepto?: true;
    referencia?: true;
    observaciones?: true;
    movimientoFinancieroId?: true;
    asientoId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PagoMaxAggregateInputType = {
    id?: true;
    fechaPago?: true;
    proveedorId?: true;
    importeTotal?: true;
    cuentaFinancieraId?: true;
    medioPago?: true;
    concepto?: true;
    referencia?: true;
    observaciones?: true;
    movimientoFinancieroId?: true;
    asientoId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PagoCountAggregateInputType = {
    id?: true;
    fechaPago?: true;
    proveedorId?: true;
    importeTotal?: true;
    cuentaFinancieraId?: true;
    medioPago?: true;
    concepto?: true;
    referencia?: true;
    observaciones?: true;
    movimientoFinancieroId?: true;
    asientoId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PagoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which pago to aggregate.
     */
    where?: Prisma.pagoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pagos to fetch.
     */
    orderBy?: Prisma.pagoOrderByWithRelationInput | Prisma.pagoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.pagoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pagos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned pagos
    **/
    _count?: true | PagoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PagoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PagoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PagoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PagoMaxAggregateInputType;
};
export type GetPagoAggregateType<T extends PagoAggregateArgs> = {
    [P in keyof T & keyof AggregatePago]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePago[P]> : Prisma.GetScalarType<T[P], AggregatePago[P]>;
};
export type pagoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pagoWhereInput;
    orderBy?: Prisma.pagoOrderByWithAggregationInput | Prisma.pagoOrderByWithAggregationInput[];
    by: Prisma.PagoScalarFieldEnum[] | Prisma.PagoScalarFieldEnum;
    having?: Prisma.pagoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PagoCountAggregateInputType | true;
    _avg?: PagoAvgAggregateInputType;
    _sum?: PagoSumAggregateInputType;
    _min?: PagoMinAggregateInputType;
    _max?: PagoMaxAggregateInputType;
};
export type PagoGroupByOutputType = {
    id: string;
    fechaPago: Date;
    proveedorId: string;
    importeTotal: runtime.Decimal;
    cuentaFinancieraId: string;
    medioPago: $Enums.pago_medioPago;
    concepto: string;
    referencia: string | null;
    observaciones: string | null;
    movimientoFinancieroId: string;
    asientoId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PagoCountAggregateOutputType | null;
    _avg: PagoAvgAggregateOutputType | null;
    _sum: PagoSumAggregateOutputType | null;
    _min: PagoMinAggregateOutputType | null;
    _max: PagoMaxAggregateOutputType | null;
};
export type GetPagoGroupByPayload<T extends pagoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PagoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PagoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PagoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PagoGroupByOutputType[P]>;
}>>;
export type pagoWhereInput = {
    AND?: Prisma.pagoWhereInput | Prisma.pagoWhereInput[];
    OR?: Prisma.pagoWhereInput[];
    NOT?: Prisma.pagoWhereInput | Prisma.pagoWhereInput[];
    id?: Prisma.StringFilter<"pago"> | string;
    fechaPago?: Prisma.DateTimeFilter<"pago"> | Date | string;
    proveedorId?: Prisma.StringFilter<"pago"> | string;
    importeTotal?: Prisma.DecimalFilter<"pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId?: Prisma.StringFilter<"pago"> | string;
    medioPago?: Prisma.Enumpago_medioPagoFilter<"pago"> | $Enums.pago_medioPago;
    concepto?: Prisma.StringFilter<"pago"> | string;
    referencia?: Prisma.StringNullableFilter<"pago"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"pago"> | string | null;
    movimientoFinancieroId?: Prisma.StringFilter<"pago"> | string;
    asientoId?: Prisma.StringNullableFilter<"pago"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"pago"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"pago"> | Date | string;
    liquidacionpago?: Prisma.LiquidacionpagoListRelationFilter;
    cuentafinanciera?: Prisma.XOR<Prisma.CuentafinancieraScalarRelationFilter, Prisma.cuentafinancieraWhereInput>;
    movimientofinanciero?: Prisma.XOR<Prisma.MovimientofinancieroScalarRelationFilter, Prisma.movimientofinancieroWhereInput>;
    proveedor?: Prisma.XOR<Prisma.ProveedorScalarRelationFilter, Prisma.proveedorWhereInput>;
};
export type pagoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fechaPago?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    importeTotal?: Prisma.SortOrder;
    cuentaFinancieraId?: Prisma.SortOrder;
    medioPago?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    referencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    movimientoFinancieroId?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    liquidacionpago?: Prisma.liquidacionpagoOrderByRelationAggregateInput;
    cuentafinanciera?: Prisma.cuentafinancieraOrderByWithRelationInput;
    movimientofinanciero?: Prisma.movimientofinancieroOrderByWithRelationInput;
    proveedor?: Prisma.proveedorOrderByWithRelationInput;
    _relevance?: Prisma.pagoOrderByRelevanceInput;
};
export type pagoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    movimientoFinancieroId?: string;
    AND?: Prisma.pagoWhereInput | Prisma.pagoWhereInput[];
    OR?: Prisma.pagoWhereInput[];
    NOT?: Prisma.pagoWhereInput | Prisma.pagoWhereInput[];
    fechaPago?: Prisma.DateTimeFilter<"pago"> | Date | string;
    proveedorId?: Prisma.StringFilter<"pago"> | string;
    importeTotal?: Prisma.DecimalFilter<"pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId?: Prisma.StringFilter<"pago"> | string;
    medioPago?: Prisma.Enumpago_medioPagoFilter<"pago"> | $Enums.pago_medioPago;
    concepto?: Prisma.StringFilter<"pago"> | string;
    referencia?: Prisma.StringNullableFilter<"pago"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"pago"> | string | null;
    asientoId?: Prisma.StringNullableFilter<"pago"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"pago"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"pago"> | Date | string;
    liquidacionpago?: Prisma.LiquidacionpagoListRelationFilter;
    cuentafinanciera?: Prisma.XOR<Prisma.CuentafinancieraScalarRelationFilter, Prisma.cuentafinancieraWhereInput>;
    movimientofinanciero?: Prisma.XOR<Prisma.MovimientofinancieroScalarRelationFilter, Prisma.movimientofinancieroWhereInput>;
    proveedor?: Prisma.XOR<Prisma.ProveedorScalarRelationFilter, Prisma.proveedorWhereInput>;
}, "id" | "movimientoFinancieroId">;
export type pagoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fechaPago?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    importeTotal?: Prisma.SortOrder;
    cuentaFinancieraId?: Prisma.SortOrder;
    medioPago?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    referencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    movimientoFinancieroId?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.pagoCountOrderByAggregateInput;
    _avg?: Prisma.pagoAvgOrderByAggregateInput;
    _max?: Prisma.pagoMaxOrderByAggregateInput;
    _min?: Prisma.pagoMinOrderByAggregateInput;
    _sum?: Prisma.pagoSumOrderByAggregateInput;
};
export type pagoScalarWhereWithAggregatesInput = {
    AND?: Prisma.pagoScalarWhereWithAggregatesInput | Prisma.pagoScalarWhereWithAggregatesInput[];
    OR?: Prisma.pagoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.pagoScalarWhereWithAggregatesInput | Prisma.pagoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"pago"> | string;
    fechaPago?: Prisma.DateTimeWithAggregatesFilter<"pago"> | Date | string;
    proveedorId?: Prisma.StringWithAggregatesFilter<"pago"> | string;
    importeTotal?: Prisma.DecimalWithAggregatesFilter<"pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId?: Prisma.StringWithAggregatesFilter<"pago"> | string;
    medioPago?: Prisma.Enumpago_medioPagoWithAggregatesFilter<"pago"> | $Enums.pago_medioPago;
    concepto?: Prisma.StringWithAggregatesFilter<"pago"> | string;
    referencia?: Prisma.StringNullableWithAggregatesFilter<"pago"> | string | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"pago"> | string | null;
    movimientoFinancieroId?: Prisma.StringWithAggregatesFilter<"pago"> | string;
    asientoId?: Prisma.StringNullableWithAggregatesFilter<"pago"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"pago"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"pago"> | Date | string;
};
export type pagoCreateInput = {
    id: string;
    fechaPago: Date | string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago: $Enums.pago_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacionpago?: Prisma.liquidacionpagoCreateNestedManyWithoutPagoInput;
    cuentafinanciera: Prisma.cuentafinancieraCreateNestedOneWithoutPagoInput;
    movimientofinanciero: Prisma.movimientofinancieroCreateNestedOneWithoutPagoInput;
    proveedor: Prisma.proveedorCreateNestedOneWithoutPagoInput;
};
export type pagoUncheckedCreateInput = {
    id: string;
    fechaPago: Date | string;
    proveedorId: string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId: string;
    medioPago: $Enums.pago_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    movimientoFinancieroId: string;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUncheckedCreateNestedManyWithoutPagoInput;
};
export type pagoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaPago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago?: Prisma.Enumpago_medioPagoFieldUpdateOperationsInput | $Enums.pago_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUpdateManyWithoutPagoNestedInput;
    cuentafinanciera?: Prisma.cuentafinancieraUpdateOneRequiredWithoutPagoNestedInput;
    movimientofinanciero?: Prisma.movimientofinancieroUpdateOneRequiredWithoutPagoNestedInput;
    proveedor?: Prisma.proveedorUpdateOneRequiredWithoutPagoNestedInput;
};
export type pagoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaPago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proveedorId?: Prisma.StringFieldUpdateOperationsInput | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId?: Prisma.StringFieldUpdateOperationsInput | string;
    medioPago?: Prisma.Enumpago_medioPagoFieldUpdateOperationsInput | $Enums.pago_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    movimientoFinancieroId?: Prisma.StringFieldUpdateOperationsInput | string;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUncheckedUpdateManyWithoutPagoNestedInput;
};
export type pagoCreateManyInput = {
    id: string;
    fechaPago: Date | string;
    proveedorId: string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId: string;
    medioPago: $Enums.pago_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    movimientoFinancieroId: string;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type pagoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaPago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago?: Prisma.Enumpago_medioPagoFieldUpdateOperationsInput | $Enums.pago_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type pagoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaPago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proveedorId?: Prisma.StringFieldUpdateOperationsInput | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId?: Prisma.StringFieldUpdateOperationsInput | string;
    medioPago?: Prisma.Enumpago_medioPagoFieldUpdateOperationsInput | $Enums.pago_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    movimientoFinancieroId?: Prisma.StringFieldUpdateOperationsInput | string;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PagoListRelationFilter = {
    every?: Prisma.pagoWhereInput;
    some?: Prisma.pagoWhereInput;
    none?: Prisma.pagoWhereInput;
};
export type pagoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PagoScalarRelationFilter = {
    is?: Prisma.pagoWhereInput;
    isNot?: Prisma.pagoWhereInput;
};
export type PagoNullableScalarRelationFilter = {
    is?: Prisma.pagoWhereInput | null;
    isNot?: Prisma.pagoWhereInput | null;
};
export type pagoOrderByRelevanceInput = {
    fields: Prisma.pagoOrderByRelevanceFieldEnum | Prisma.pagoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type pagoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fechaPago?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    importeTotal?: Prisma.SortOrder;
    cuentaFinancieraId?: Prisma.SortOrder;
    medioPago?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    referencia?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    movimientoFinancieroId?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type pagoAvgOrderByAggregateInput = {
    importeTotal?: Prisma.SortOrder;
};
export type pagoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fechaPago?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    importeTotal?: Prisma.SortOrder;
    cuentaFinancieraId?: Prisma.SortOrder;
    medioPago?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    referencia?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    movimientoFinancieroId?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type pagoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fechaPago?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    importeTotal?: Prisma.SortOrder;
    cuentaFinancieraId?: Prisma.SortOrder;
    medioPago?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    referencia?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    movimientoFinancieroId?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type pagoSumOrderByAggregateInput = {
    importeTotal?: Prisma.SortOrder;
};
export type pagoCreateNestedManyWithoutCuentafinancieraInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutCuentafinancieraInput, Prisma.pagoUncheckedCreateWithoutCuentafinancieraInput> | Prisma.pagoCreateWithoutCuentafinancieraInput[] | Prisma.pagoUncheckedCreateWithoutCuentafinancieraInput[];
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutCuentafinancieraInput | Prisma.pagoCreateOrConnectWithoutCuentafinancieraInput[];
    createMany?: Prisma.pagoCreateManyCuentafinancieraInputEnvelope;
    connect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
};
export type pagoUncheckedCreateNestedManyWithoutCuentafinancieraInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutCuentafinancieraInput, Prisma.pagoUncheckedCreateWithoutCuentafinancieraInput> | Prisma.pagoCreateWithoutCuentafinancieraInput[] | Prisma.pagoUncheckedCreateWithoutCuentafinancieraInput[];
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutCuentafinancieraInput | Prisma.pagoCreateOrConnectWithoutCuentafinancieraInput[];
    createMany?: Prisma.pagoCreateManyCuentafinancieraInputEnvelope;
    connect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
};
export type pagoUpdateManyWithoutCuentafinancieraNestedInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutCuentafinancieraInput, Prisma.pagoUncheckedCreateWithoutCuentafinancieraInput> | Prisma.pagoCreateWithoutCuentafinancieraInput[] | Prisma.pagoUncheckedCreateWithoutCuentafinancieraInput[];
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutCuentafinancieraInput | Prisma.pagoCreateOrConnectWithoutCuentafinancieraInput[];
    upsert?: Prisma.pagoUpsertWithWhereUniqueWithoutCuentafinancieraInput | Prisma.pagoUpsertWithWhereUniqueWithoutCuentafinancieraInput[];
    createMany?: Prisma.pagoCreateManyCuentafinancieraInputEnvelope;
    set?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    disconnect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    delete?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    connect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    update?: Prisma.pagoUpdateWithWhereUniqueWithoutCuentafinancieraInput | Prisma.pagoUpdateWithWhereUniqueWithoutCuentafinancieraInput[];
    updateMany?: Prisma.pagoUpdateManyWithWhereWithoutCuentafinancieraInput | Prisma.pagoUpdateManyWithWhereWithoutCuentafinancieraInput[];
    deleteMany?: Prisma.pagoScalarWhereInput | Prisma.pagoScalarWhereInput[];
};
export type pagoUncheckedUpdateManyWithoutCuentafinancieraNestedInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutCuentafinancieraInput, Prisma.pagoUncheckedCreateWithoutCuentafinancieraInput> | Prisma.pagoCreateWithoutCuentafinancieraInput[] | Prisma.pagoUncheckedCreateWithoutCuentafinancieraInput[];
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutCuentafinancieraInput | Prisma.pagoCreateOrConnectWithoutCuentafinancieraInput[];
    upsert?: Prisma.pagoUpsertWithWhereUniqueWithoutCuentafinancieraInput | Prisma.pagoUpsertWithWhereUniqueWithoutCuentafinancieraInput[];
    createMany?: Prisma.pagoCreateManyCuentafinancieraInputEnvelope;
    set?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    disconnect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    delete?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    connect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    update?: Prisma.pagoUpdateWithWhereUniqueWithoutCuentafinancieraInput | Prisma.pagoUpdateWithWhereUniqueWithoutCuentafinancieraInput[];
    updateMany?: Prisma.pagoUpdateManyWithWhereWithoutCuentafinancieraInput | Prisma.pagoUpdateManyWithWhereWithoutCuentafinancieraInput[];
    deleteMany?: Prisma.pagoScalarWhereInput | Prisma.pagoScalarWhereInput[];
};
export type pagoCreateNestedOneWithoutLiquidacionpagoInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutLiquidacionpagoInput, Prisma.pagoUncheckedCreateWithoutLiquidacionpagoInput>;
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutLiquidacionpagoInput;
    connect?: Prisma.pagoWhereUniqueInput;
};
export type pagoUpdateOneRequiredWithoutLiquidacionpagoNestedInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutLiquidacionpagoInput, Prisma.pagoUncheckedCreateWithoutLiquidacionpagoInput>;
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutLiquidacionpagoInput;
    upsert?: Prisma.pagoUpsertWithoutLiquidacionpagoInput;
    connect?: Prisma.pagoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.pagoUpdateToOneWithWhereWithoutLiquidacionpagoInput, Prisma.pagoUpdateWithoutLiquidacionpagoInput>, Prisma.pagoUncheckedUpdateWithoutLiquidacionpagoInput>;
};
export type pagoCreateNestedOneWithoutMovimientofinancieroInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutMovimientofinancieroInput, Prisma.pagoUncheckedCreateWithoutMovimientofinancieroInput>;
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutMovimientofinancieroInput;
    connect?: Prisma.pagoWhereUniqueInput;
};
export type pagoUncheckedCreateNestedOneWithoutMovimientofinancieroInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutMovimientofinancieroInput, Prisma.pagoUncheckedCreateWithoutMovimientofinancieroInput>;
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutMovimientofinancieroInput;
    connect?: Prisma.pagoWhereUniqueInput;
};
export type pagoUpdateOneWithoutMovimientofinancieroNestedInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutMovimientofinancieroInput, Prisma.pagoUncheckedCreateWithoutMovimientofinancieroInput>;
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutMovimientofinancieroInput;
    upsert?: Prisma.pagoUpsertWithoutMovimientofinancieroInput;
    disconnect?: Prisma.pagoWhereInput | boolean;
    delete?: Prisma.pagoWhereInput | boolean;
    connect?: Prisma.pagoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.pagoUpdateToOneWithWhereWithoutMovimientofinancieroInput, Prisma.pagoUpdateWithoutMovimientofinancieroInput>, Prisma.pagoUncheckedUpdateWithoutMovimientofinancieroInput>;
};
export type pagoUncheckedUpdateOneWithoutMovimientofinancieroNestedInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutMovimientofinancieroInput, Prisma.pagoUncheckedCreateWithoutMovimientofinancieroInput>;
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutMovimientofinancieroInput;
    upsert?: Prisma.pagoUpsertWithoutMovimientofinancieroInput;
    disconnect?: Prisma.pagoWhereInput | boolean;
    delete?: Prisma.pagoWhereInput | boolean;
    connect?: Prisma.pagoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.pagoUpdateToOneWithWhereWithoutMovimientofinancieroInput, Prisma.pagoUpdateWithoutMovimientofinancieroInput>, Prisma.pagoUncheckedUpdateWithoutMovimientofinancieroInput>;
};
export type Enumpago_medioPagoFieldUpdateOperationsInput = {
    set?: $Enums.pago_medioPago;
};
export type pagoCreateNestedManyWithoutProveedorInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutProveedorInput, Prisma.pagoUncheckedCreateWithoutProveedorInput> | Prisma.pagoCreateWithoutProveedorInput[] | Prisma.pagoUncheckedCreateWithoutProveedorInput[];
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutProveedorInput | Prisma.pagoCreateOrConnectWithoutProveedorInput[];
    createMany?: Prisma.pagoCreateManyProveedorInputEnvelope;
    connect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
};
export type pagoUncheckedCreateNestedManyWithoutProveedorInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutProveedorInput, Prisma.pagoUncheckedCreateWithoutProveedorInput> | Prisma.pagoCreateWithoutProveedorInput[] | Prisma.pagoUncheckedCreateWithoutProveedorInput[];
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutProveedorInput | Prisma.pagoCreateOrConnectWithoutProveedorInput[];
    createMany?: Prisma.pagoCreateManyProveedorInputEnvelope;
    connect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
};
export type pagoUpdateManyWithoutProveedorNestedInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutProveedorInput, Prisma.pagoUncheckedCreateWithoutProveedorInput> | Prisma.pagoCreateWithoutProveedorInput[] | Prisma.pagoUncheckedCreateWithoutProveedorInput[];
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutProveedorInput | Prisma.pagoCreateOrConnectWithoutProveedorInput[];
    upsert?: Prisma.pagoUpsertWithWhereUniqueWithoutProveedorInput | Prisma.pagoUpsertWithWhereUniqueWithoutProveedorInput[];
    createMany?: Prisma.pagoCreateManyProveedorInputEnvelope;
    set?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    disconnect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    delete?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    connect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    update?: Prisma.pagoUpdateWithWhereUniqueWithoutProveedorInput | Prisma.pagoUpdateWithWhereUniqueWithoutProveedorInput[];
    updateMany?: Prisma.pagoUpdateManyWithWhereWithoutProveedorInput | Prisma.pagoUpdateManyWithWhereWithoutProveedorInput[];
    deleteMany?: Prisma.pagoScalarWhereInput | Prisma.pagoScalarWhereInput[];
};
export type pagoUncheckedUpdateManyWithoutProveedorNestedInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutProveedorInput, Prisma.pagoUncheckedCreateWithoutProveedorInput> | Prisma.pagoCreateWithoutProveedorInput[] | Prisma.pagoUncheckedCreateWithoutProveedorInput[];
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutProveedorInput | Prisma.pagoCreateOrConnectWithoutProveedorInput[];
    upsert?: Prisma.pagoUpsertWithWhereUniqueWithoutProveedorInput | Prisma.pagoUpsertWithWhereUniqueWithoutProveedorInput[];
    createMany?: Prisma.pagoCreateManyProveedorInputEnvelope;
    set?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    disconnect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    delete?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    connect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    update?: Prisma.pagoUpdateWithWhereUniqueWithoutProveedorInput | Prisma.pagoUpdateWithWhereUniqueWithoutProveedorInput[];
    updateMany?: Prisma.pagoUpdateManyWithWhereWithoutProveedorInput | Prisma.pagoUpdateManyWithWhereWithoutProveedorInput[];
    deleteMany?: Prisma.pagoScalarWhereInput | Prisma.pagoScalarWhereInput[];
};
export type pagoCreateWithoutCuentafinancieraInput = {
    id: string;
    fechaPago: Date | string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago: $Enums.pago_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacionpago?: Prisma.liquidacionpagoCreateNestedManyWithoutPagoInput;
    movimientofinanciero: Prisma.movimientofinancieroCreateNestedOneWithoutPagoInput;
    proveedor: Prisma.proveedorCreateNestedOneWithoutPagoInput;
};
export type pagoUncheckedCreateWithoutCuentafinancieraInput = {
    id: string;
    fechaPago: Date | string;
    proveedorId: string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago: $Enums.pago_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    movimientoFinancieroId: string;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUncheckedCreateNestedManyWithoutPagoInput;
};
export type pagoCreateOrConnectWithoutCuentafinancieraInput = {
    where: Prisma.pagoWhereUniqueInput;
    create: Prisma.XOR<Prisma.pagoCreateWithoutCuentafinancieraInput, Prisma.pagoUncheckedCreateWithoutCuentafinancieraInput>;
};
export type pagoCreateManyCuentafinancieraInputEnvelope = {
    data: Prisma.pagoCreateManyCuentafinancieraInput | Prisma.pagoCreateManyCuentafinancieraInput[];
    skipDuplicates?: boolean;
};
export type pagoUpsertWithWhereUniqueWithoutCuentafinancieraInput = {
    where: Prisma.pagoWhereUniqueInput;
    update: Prisma.XOR<Prisma.pagoUpdateWithoutCuentafinancieraInput, Prisma.pagoUncheckedUpdateWithoutCuentafinancieraInput>;
    create: Prisma.XOR<Prisma.pagoCreateWithoutCuentafinancieraInput, Prisma.pagoUncheckedCreateWithoutCuentafinancieraInput>;
};
export type pagoUpdateWithWhereUniqueWithoutCuentafinancieraInput = {
    where: Prisma.pagoWhereUniqueInput;
    data: Prisma.XOR<Prisma.pagoUpdateWithoutCuentafinancieraInput, Prisma.pagoUncheckedUpdateWithoutCuentafinancieraInput>;
};
export type pagoUpdateManyWithWhereWithoutCuentafinancieraInput = {
    where: Prisma.pagoScalarWhereInput;
    data: Prisma.XOR<Prisma.pagoUpdateManyMutationInput, Prisma.pagoUncheckedUpdateManyWithoutCuentafinancieraInput>;
};
export type pagoScalarWhereInput = {
    AND?: Prisma.pagoScalarWhereInput | Prisma.pagoScalarWhereInput[];
    OR?: Prisma.pagoScalarWhereInput[];
    NOT?: Prisma.pagoScalarWhereInput | Prisma.pagoScalarWhereInput[];
    id?: Prisma.StringFilter<"pago"> | string;
    fechaPago?: Prisma.DateTimeFilter<"pago"> | Date | string;
    proveedorId?: Prisma.StringFilter<"pago"> | string;
    importeTotal?: Prisma.DecimalFilter<"pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId?: Prisma.StringFilter<"pago"> | string;
    medioPago?: Prisma.Enumpago_medioPagoFilter<"pago"> | $Enums.pago_medioPago;
    concepto?: Prisma.StringFilter<"pago"> | string;
    referencia?: Prisma.StringNullableFilter<"pago"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"pago"> | string | null;
    movimientoFinancieroId?: Prisma.StringFilter<"pago"> | string;
    asientoId?: Prisma.StringNullableFilter<"pago"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"pago"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"pago"> | Date | string;
};
export type pagoCreateWithoutLiquidacionpagoInput = {
    id: string;
    fechaPago: Date | string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago: $Enums.pago_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cuentafinanciera: Prisma.cuentafinancieraCreateNestedOneWithoutPagoInput;
    movimientofinanciero: Prisma.movimientofinancieroCreateNestedOneWithoutPagoInput;
    proveedor: Prisma.proveedorCreateNestedOneWithoutPagoInput;
};
export type pagoUncheckedCreateWithoutLiquidacionpagoInput = {
    id: string;
    fechaPago: Date | string;
    proveedorId: string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId: string;
    medioPago: $Enums.pago_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    movimientoFinancieroId: string;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type pagoCreateOrConnectWithoutLiquidacionpagoInput = {
    where: Prisma.pagoWhereUniqueInput;
    create: Prisma.XOR<Prisma.pagoCreateWithoutLiquidacionpagoInput, Prisma.pagoUncheckedCreateWithoutLiquidacionpagoInput>;
};
export type pagoUpsertWithoutLiquidacionpagoInput = {
    update: Prisma.XOR<Prisma.pagoUpdateWithoutLiquidacionpagoInput, Prisma.pagoUncheckedUpdateWithoutLiquidacionpagoInput>;
    create: Prisma.XOR<Prisma.pagoCreateWithoutLiquidacionpagoInput, Prisma.pagoUncheckedCreateWithoutLiquidacionpagoInput>;
    where?: Prisma.pagoWhereInput;
};
export type pagoUpdateToOneWithWhereWithoutLiquidacionpagoInput = {
    where?: Prisma.pagoWhereInput;
    data: Prisma.XOR<Prisma.pagoUpdateWithoutLiquidacionpagoInput, Prisma.pagoUncheckedUpdateWithoutLiquidacionpagoInput>;
};
export type pagoUpdateWithoutLiquidacionpagoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaPago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago?: Prisma.Enumpago_medioPagoFieldUpdateOperationsInput | $Enums.pago_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cuentafinanciera?: Prisma.cuentafinancieraUpdateOneRequiredWithoutPagoNestedInput;
    movimientofinanciero?: Prisma.movimientofinancieroUpdateOneRequiredWithoutPagoNestedInput;
    proveedor?: Prisma.proveedorUpdateOneRequiredWithoutPagoNestedInput;
};
export type pagoUncheckedUpdateWithoutLiquidacionpagoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaPago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proveedorId?: Prisma.StringFieldUpdateOperationsInput | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId?: Prisma.StringFieldUpdateOperationsInput | string;
    medioPago?: Prisma.Enumpago_medioPagoFieldUpdateOperationsInput | $Enums.pago_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    movimientoFinancieroId?: Prisma.StringFieldUpdateOperationsInput | string;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type pagoCreateWithoutMovimientofinancieroInput = {
    id: string;
    fechaPago: Date | string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago: $Enums.pago_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacionpago?: Prisma.liquidacionpagoCreateNestedManyWithoutPagoInput;
    cuentafinanciera: Prisma.cuentafinancieraCreateNestedOneWithoutPagoInput;
    proveedor: Prisma.proveedorCreateNestedOneWithoutPagoInput;
};
export type pagoUncheckedCreateWithoutMovimientofinancieroInput = {
    id: string;
    fechaPago: Date | string;
    proveedorId: string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId: string;
    medioPago: $Enums.pago_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUncheckedCreateNestedManyWithoutPagoInput;
};
export type pagoCreateOrConnectWithoutMovimientofinancieroInput = {
    where: Prisma.pagoWhereUniqueInput;
    create: Prisma.XOR<Prisma.pagoCreateWithoutMovimientofinancieroInput, Prisma.pagoUncheckedCreateWithoutMovimientofinancieroInput>;
};
export type pagoUpsertWithoutMovimientofinancieroInput = {
    update: Prisma.XOR<Prisma.pagoUpdateWithoutMovimientofinancieroInput, Prisma.pagoUncheckedUpdateWithoutMovimientofinancieroInput>;
    create: Prisma.XOR<Prisma.pagoCreateWithoutMovimientofinancieroInput, Prisma.pagoUncheckedCreateWithoutMovimientofinancieroInput>;
    where?: Prisma.pagoWhereInput;
};
export type pagoUpdateToOneWithWhereWithoutMovimientofinancieroInput = {
    where?: Prisma.pagoWhereInput;
    data: Prisma.XOR<Prisma.pagoUpdateWithoutMovimientofinancieroInput, Prisma.pagoUncheckedUpdateWithoutMovimientofinancieroInput>;
};
export type pagoUpdateWithoutMovimientofinancieroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaPago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago?: Prisma.Enumpago_medioPagoFieldUpdateOperationsInput | $Enums.pago_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUpdateManyWithoutPagoNestedInput;
    cuentafinanciera?: Prisma.cuentafinancieraUpdateOneRequiredWithoutPagoNestedInput;
    proveedor?: Prisma.proveedorUpdateOneRequiredWithoutPagoNestedInput;
};
export type pagoUncheckedUpdateWithoutMovimientofinancieroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaPago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proveedorId?: Prisma.StringFieldUpdateOperationsInput | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId?: Prisma.StringFieldUpdateOperationsInput | string;
    medioPago?: Prisma.Enumpago_medioPagoFieldUpdateOperationsInput | $Enums.pago_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUncheckedUpdateManyWithoutPagoNestedInput;
};
export type pagoCreateWithoutProveedorInput = {
    id: string;
    fechaPago: Date | string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago: $Enums.pago_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacionpago?: Prisma.liquidacionpagoCreateNestedManyWithoutPagoInput;
    cuentafinanciera: Prisma.cuentafinancieraCreateNestedOneWithoutPagoInput;
    movimientofinanciero: Prisma.movimientofinancieroCreateNestedOneWithoutPagoInput;
};
export type pagoUncheckedCreateWithoutProveedorInput = {
    id: string;
    fechaPago: Date | string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId: string;
    medioPago: $Enums.pago_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    movimientoFinancieroId: string;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUncheckedCreateNestedManyWithoutPagoInput;
};
export type pagoCreateOrConnectWithoutProveedorInput = {
    where: Prisma.pagoWhereUniqueInput;
    create: Prisma.XOR<Prisma.pagoCreateWithoutProveedorInput, Prisma.pagoUncheckedCreateWithoutProveedorInput>;
};
export type pagoCreateManyProveedorInputEnvelope = {
    data: Prisma.pagoCreateManyProveedorInput | Prisma.pagoCreateManyProveedorInput[];
    skipDuplicates?: boolean;
};
export type pagoUpsertWithWhereUniqueWithoutProveedorInput = {
    where: Prisma.pagoWhereUniqueInput;
    update: Prisma.XOR<Prisma.pagoUpdateWithoutProveedorInput, Prisma.pagoUncheckedUpdateWithoutProveedorInput>;
    create: Prisma.XOR<Prisma.pagoCreateWithoutProveedorInput, Prisma.pagoUncheckedCreateWithoutProveedorInput>;
};
export type pagoUpdateWithWhereUniqueWithoutProveedorInput = {
    where: Prisma.pagoWhereUniqueInput;
    data: Prisma.XOR<Prisma.pagoUpdateWithoutProveedorInput, Prisma.pagoUncheckedUpdateWithoutProveedorInput>;
};
export type pagoUpdateManyWithWhereWithoutProveedorInput = {
    where: Prisma.pagoScalarWhereInput;
    data: Prisma.XOR<Prisma.pagoUpdateManyMutationInput, Prisma.pagoUncheckedUpdateManyWithoutProveedorInput>;
};
export type pagoCreateManyCuentafinancieraInput = {
    id: string;
    fechaPago: Date | string;
    proveedorId: string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago: $Enums.pago_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    movimientoFinancieroId: string;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type pagoUpdateWithoutCuentafinancieraInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaPago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago?: Prisma.Enumpago_medioPagoFieldUpdateOperationsInput | $Enums.pago_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUpdateManyWithoutPagoNestedInput;
    movimientofinanciero?: Prisma.movimientofinancieroUpdateOneRequiredWithoutPagoNestedInput;
    proveedor?: Prisma.proveedorUpdateOneRequiredWithoutPagoNestedInput;
};
export type pagoUncheckedUpdateWithoutCuentafinancieraInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaPago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proveedorId?: Prisma.StringFieldUpdateOperationsInput | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago?: Prisma.Enumpago_medioPagoFieldUpdateOperationsInput | $Enums.pago_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    movimientoFinancieroId?: Prisma.StringFieldUpdateOperationsInput | string;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUncheckedUpdateManyWithoutPagoNestedInput;
};
export type pagoUncheckedUpdateManyWithoutCuentafinancieraInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaPago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proveedorId?: Prisma.StringFieldUpdateOperationsInput | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago?: Prisma.Enumpago_medioPagoFieldUpdateOperationsInput | $Enums.pago_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    movimientoFinancieroId?: Prisma.StringFieldUpdateOperationsInput | string;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type pagoCreateManyProveedorInput = {
    id: string;
    fechaPago: Date | string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId: string;
    medioPago: $Enums.pago_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    movimientoFinancieroId: string;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type pagoUpdateWithoutProveedorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaPago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago?: Prisma.Enumpago_medioPagoFieldUpdateOperationsInput | $Enums.pago_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUpdateManyWithoutPagoNestedInput;
    cuentafinanciera?: Prisma.cuentafinancieraUpdateOneRequiredWithoutPagoNestedInput;
    movimientofinanciero?: Prisma.movimientofinancieroUpdateOneRequiredWithoutPagoNestedInput;
};
export type pagoUncheckedUpdateWithoutProveedorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaPago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId?: Prisma.StringFieldUpdateOperationsInput | string;
    medioPago?: Prisma.Enumpago_medioPagoFieldUpdateOperationsInput | $Enums.pago_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    movimientoFinancieroId?: Prisma.StringFieldUpdateOperationsInput | string;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUncheckedUpdateManyWithoutPagoNestedInput;
};
export type pagoUncheckedUpdateManyWithoutProveedorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaPago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId?: Prisma.StringFieldUpdateOperationsInput | string;
    medioPago?: Prisma.Enumpago_medioPagoFieldUpdateOperationsInput | $Enums.pago_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    movimientoFinancieroId?: Prisma.StringFieldUpdateOperationsInput | string;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type PagoCountOutputType
 */
export type PagoCountOutputType = {
    liquidacionpago: number;
};
export type PagoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    liquidacionpago?: boolean | PagoCountOutputTypeCountLiquidacionpagoArgs;
};
/**
 * PagoCountOutputType without action
 */
export type PagoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PagoCountOutputType
     */
    select?: Prisma.PagoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PagoCountOutputType without action
 */
export type PagoCountOutputTypeCountLiquidacionpagoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.liquidacionpagoWhereInput;
};
export type pagoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fechaPago?: boolean;
    proveedorId?: boolean;
    importeTotal?: boolean;
    cuentaFinancieraId?: boolean;
    medioPago?: boolean;
    concepto?: boolean;
    referencia?: boolean;
    observaciones?: boolean;
    movimientoFinancieroId?: boolean;
    asientoId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    liquidacionpago?: boolean | Prisma.pago$liquidacionpagoArgs<ExtArgs>;
    cuentafinanciera?: boolean | Prisma.cuentafinancieraDefaultArgs<ExtArgs>;
    movimientofinanciero?: boolean | Prisma.movimientofinancieroDefaultArgs<ExtArgs>;
    proveedor?: boolean | Prisma.proveedorDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.PagoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["pago"]>;
export type pagoSelectScalar = {
    id?: boolean;
    fechaPago?: boolean;
    proveedorId?: boolean;
    importeTotal?: boolean;
    cuentaFinancieraId?: boolean;
    medioPago?: boolean;
    concepto?: boolean;
    referencia?: boolean;
    observaciones?: boolean;
    movimientoFinancieroId?: boolean;
    asientoId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type pagoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fechaPago" | "proveedorId" | "importeTotal" | "cuentaFinancieraId" | "medioPago" | "concepto" | "referencia" | "observaciones" | "movimientoFinancieroId" | "asientoId" | "createdAt" | "updatedAt", ExtArgs["result"]["pago"]>;
export type pagoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    liquidacionpago?: boolean | Prisma.pago$liquidacionpagoArgs<ExtArgs>;
    cuentafinanciera?: boolean | Prisma.cuentafinancieraDefaultArgs<ExtArgs>;
    movimientofinanciero?: boolean | Prisma.movimientofinancieroDefaultArgs<ExtArgs>;
    proveedor?: boolean | Prisma.proveedorDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.PagoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $pagoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "pago";
    objects: {
        liquidacionpago: Prisma.$liquidacionpagoPayload<ExtArgs>[];
        cuentafinanciera: Prisma.$cuentafinancieraPayload<ExtArgs>;
        movimientofinanciero: Prisma.$movimientofinancieroPayload<ExtArgs>;
        proveedor: Prisma.$proveedorPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        fechaPago: Date;
        proveedorId: string;
        importeTotal: runtime.Decimal;
        cuentaFinancieraId: string;
        medioPago: $Enums.pago_medioPago;
        concepto: string;
        referencia: string | null;
        observaciones: string | null;
        movimientoFinancieroId: string;
        asientoId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["pago"]>;
    composites: {};
};
export type pagoGetPayload<S extends boolean | null | undefined | pagoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$pagoPayload, S>;
export type pagoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<pagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PagoCountAggregateInputType | true;
};
export interface pagoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['pago'];
        meta: {
            name: 'pago';
        };
    };
    /**
     * Find zero or one Pago that matches the filter.
     * @param {pagoFindUniqueArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pagoFindUniqueArgs>(args: Prisma.SelectSubset<T, pagoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__pagoClient<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Pago that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pagoFindUniqueOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pagoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, pagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__pagoClient<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Pago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagoFindFirstArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pagoFindFirstArgs>(args?: Prisma.SelectSubset<T, pagoFindFirstArgs<ExtArgs>>): Prisma.Prisma__pagoClient<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Pago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagoFindFirstOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pagoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, pagoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__pagoClient<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagos
     * const pagos = await prisma.pago.findMany()
     *
     * // Get first 10 Pagos
     * const pagos = await prisma.pago.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const pagoWithIdOnly = await prisma.pago.findMany({ select: { id: true } })
     *
     */
    findMany<T extends pagoFindManyArgs>(args?: Prisma.SelectSubset<T, pagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Pago.
     * @param {pagoCreateArgs} args - Arguments to create a Pago.
     * @example
     * // Create one Pago
     * const Pago = await prisma.pago.create({
     *   data: {
     *     // ... data to create a Pago
     *   }
     * })
     *
     */
    create<T extends pagoCreateArgs>(args: Prisma.SelectSubset<T, pagoCreateArgs<ExtArgs>>): Prisma.Prisma__pagoClient<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Pagos.
     * @param {pagoCreateManyArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pago = await prisma.pago.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends pagoCreateManyArgs>(args?: Prisma.SelectSubset<T, pagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Pago.
     * @param {pagoDeleteArgs} args - Arguments to delete one Pago.
     * @example
     * // Delete one Pago
     * const Pago = await prisma.pago.delete({
     *   where: {
     *     // ... filter to delete one Pago
     *   }
     * })
     *
     */
    delete<T extends pagoDeleteArgs>(args: Prisma.SelectSubset<T, pagoDeleteArgs<ExtArgs>>): Prisma.Prisma__pagoClient<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Pago.
     * @param {pagoUpdateArgs} args - Arguments to update one Pago.
     * @example
     * // Update one Pago
     * const pago = await prisma.pago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends pagoUpdateArgs>(args: Prisma.SelectSubset<T, pagoUpdateArgs<ExtArgs>>): Prisma.Prisma__pagoClient<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Pagos.
     * @param {pagoDeleteManyArgs} args - Arguments to filter Pagos to delete.
     * @example
     * // Delete a few Pagos
     * const { count } = await prisma.pago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends pagoDeleteManyArgs>(args?: Prisma.SelectSubset<T, pagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagos
     * const pago = await prisma.pago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends pagoUpdateManyArgs>(args: Prisma.SelectSubset<T, pagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Pago.
     * @param {pagoUpsertArgs} args - Arguments to update or create a Pago.
     * @example
     * // Update or create a Pago
     * const pago = await prisma.pago.upsert({
     *   create: {
     *     // ... data to create a Pago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pago we want to update
     *   }
     * })
     */
    upsert<T extends pagoUpsertArgs>(args: Prisma.SelectSubset<T, pagoUpsertArgs<ExtArgs>>): Prisma.Prisma__pagoClient<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagoCountArgs} args - Arguments to filter Pagos to count.
     * @example
     * // Count the number of Pagos
     * const count = await prisma.pago.count({
     *   where: {
     *     // ... the filter for the Pagos we want to count
     *   }
     * })
    **/
    count<T extends pagoCountArgs>(args?: Prisma.Subset<T, pagoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PagoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PagoAggregateArgs>(args: Prisma.Subset<T, PagoAggregateArgs>): Prisma.PrismaPromise<GetPagoAggregateType<T>>;
    /**
     * Group by Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pagoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends pagoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: pagoGroupByArgs['orderBy'];
    } : {
        orderBy?: pagoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, pagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the pago model
     */
    readonly fields: pagoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for pago.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__pagoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    liquidacionpago<T extends Prisma.pago$liquidacionpagoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.pago$liquidacionpagoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$liquidacionpagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cuentafinanciera<T extends Prisma.cuentafinancieraDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cuentafinancieraDefaultArgs<ExtArgs>>): Prisma.Prisma__cuentafinancieraClient<runtime.Types.Result.GetResult<Prisma.$cuentafinancieraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    movimientofinanciero<T extends Prisma.movimientofinancieroDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.movimientofinancieroDefaultArgs<ExtArgs>>): Prisma.Prisma__movimientofinancieroClient<runtime.Types.Result.GetResult<Prisma.$movimientofinancieroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    proveedor<T extends Prisma.proveedorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.proveedorDefaultArgs<ExtArgs>>): Prisma.Prisma__proveedorClient<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the pago model
 */
export interface pagoFieldRefs {
    readonly id: Prisma.FieldRef<"pago", 'String'>;
    readonly fechaPago: Prisma.FieldRef<"pago", 'DateTime'>;
    readonly proveedorId: Prisma.FieldRef<"pago", 'String'>;
    readonly importeTotal: Prisma.FieldRef<"pago", 'Decimal'>;
    readonly cuentaFinancieraId: Prisma.FieldRef<"pago", 'String'>;
    readonly medioPago: Prisma.FieldRef<"pago", 'pago_medioPago'>;
    readonly concepto: Prisma.FieldRef<"pago", 'String'>;
    readonly referencia: Prisma.FieldRef<"pago", 'String'>;
    readonly observaciones: Prisma.FieldRef<"pago", 'String'>;
    readonly movimientoFinancieroId: Prisma.FieldRef<"pago", 'String'>;
    readonly asientoId: Prisma.FieldRef<"pago", 'String'>;
    readonly createdAt: Prisma.FieldRef<"pago", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"pago", 'DateTime'>;
}
/**
 * pago findUnique
 */
export type pagoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: Prisma.pagoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pago
     */
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pagoInclude<ExtArgs> | null;
    /**
     * Filter, which pago to fetch.
     */
    where: Prisma.pagoWhereUniqueInput;
};
/**
 * pago findUniqueOrThrow
 */
export type pagoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: Prisma.pagoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pago
     */
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pagoInclude<ExtArgs> | null;
    /**
     * Filter, which pago to fetch.
     */
    where: Prisma.pagoWhereUniqueInput;
};
/**
 * pago findFirst
 */
export type pagoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: Prisma.pagoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pago
     */
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pagoInclude<ExtArgs> | null;
    /**
     * Filter, which pago to fetch.
     */
    where?: Prisma.pagoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pagos to fetch.
     */
    orderBy?: Prisma.pagoOrderByWithRelationInput | Prisma.pagoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for pagos.
     */
    cursor?: Prisma.pagoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pagos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of pagos.
     */
    distinct?: Prisma.PagoScalarFieldEnum | Prisma.PagoScalarFieldEnum[];
};
/**
 * pago findFirstOrThrow
 */
export type pagoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: Prisma.pagoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pago
     */
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pagoInclude<ExtArgs> | null;
    /**
     * Filter, which pago to fetch.
     */
    where?: Prisma.pagoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pagos to fetch.
     */
    orderBy?: Prisma.pagoOrderByWithRelationInput | Prisma.pagoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for pagos.
     */
    cursor?: Prisma.pagoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pagos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of pagos.
     */
    distinct?: Prisma.PagoScalarFieldEnum | Prisma.PagoScalarFieldEnum[];
};
/**
 * pago findMany
 */
export type pagoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: Prisma.pagoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pago
     */
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pagoInclude<ExtArgs> | null;
    /**
     * Filter, which pagos to fetch.
     */
    where?: Prisma.pagoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of pagos to fetch.
     */
    orderBy?: Prisma.pagoOrderByWithRelationInput | Prisma.pagoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing pagos.
     */
    cursor?: Prisma.pagoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` pagos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` pagos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of pagos.
     */
    distinct?: Prisma.PagoScalarFieldEnum | Prisma.PagoScalarFieldEnum[];
};
/**
 * pago create
 */
export type pagoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: Prisma.pagoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pago
     */
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pagoInclude<ExtArgs> | null;
    /**
     * The data needed to create a pago.
     */
    data: Prisma.XOR<Prisma.pagoCreateInput, Prisma.pagoUncheckedCreateInput>;
};
/**
 * pago createMany
 */
export type pagoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many pagos.
     */
    data: Prisma.pagoCreateManyInput | Prisma.pagoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * pago update
 */
export type pagoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: Prisma.pagoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pago
     */
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pagoInclude<ExtArgs> | null;
    /**
     * The data needed to update a pago.
     */
    data: Prisma.XOR<Prisma.pagoUpdateInput, Prisma.pagoUncheckedUpdateInput>;
    /**
     * Choose, which pago to update.
     */
    where: Prisma.pagoWhereUniqueInput;
};
/**
 * pago updateMany
 */
export type pagoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update pagos.
     */
    data: Prisma.XOR<Prisma.pagoUpdateManyMutationInput, Prisma.pagoUncheckedUpdateManyInput>;
    /**
     * Filter which pagos to update
     */
    where?: Prisma.pagoWhereInput;
    /**
     * Limit how many pagos to update.
     */
    limit?: number;
};
/**
 * pago upsert
 */
export type pagoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: Prisma.pagoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pago
     */
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pagoInclude<ExtArgs> | null;
    /**
     * The filter to search for the pago to update in case it exists.
     */
    where: Prisma.pagoWhereUniqueInput;
    /**
     * In case the pago found by the `where` argument doesn't exist, create a new pago with this data.
     */
    create: Prisma.XOR<Prisma.pagoCreateInput, Prisma.pagoUncheckedCreateInput>;
    /**
     * In case the pago was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.pagoUpdateInput, Prisma.pagoUncheckedUpdateInput>;
};
/**
 * pago delete
 */
export type pagoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: Prisma.pagoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pago
     */
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pagoInclude<ExtArgs> | null;
    /**
     * Filter which pago to delete.
     */
    where: Prisma.pagoWhereUniqueInput;
};
/**
 * pago deleteMany
 */
export type pagoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which pagos to delete
     */
    where?: Prisma.pagoWhereInput;
    /**
     * Limit how many pagos to delete.
     */
    limit?: number;
};
/**
 * pago.liquidacionpago
 */
export type pago$liquidacionpagoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.liquidacionpagoWhereInput;
    orderBy?: Prisma.liquidacionpagoOrderByWithRelationInput | Prisma.liquidacionpagoOrderByWithRelationInput[];
    cursor?: Prisma.liquidacionpagoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LiquidacionpagoScalarFieldEnum | Prisma.LiquidacionpagoScalarFieldEnum[];
};
/**
 * pago without action
 */
export type pagoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pago
     */
    select?: Prisma.pagoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the pago
     */
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.pagoInclude<ExtArgs> | null;
};
//# sourceMappingURL=pago.d.ts.map