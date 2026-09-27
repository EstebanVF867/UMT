import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model cobro
 *
 */
export type cobroModel = runtime.Types.Result.DefaultSelection<Prisma.$cobroPayload>;
export type AggregateCobro = {
    _count: CobroCountAggregateOutputType | null;
    _avg: CobroAvgAggregateOutputType | null;
    _sum: CobroSumAggregateOutputType | null;
    _min: CobroMinAggregateOutputType | null;
    _max: CobroMaxAggregateOutputType | null;
};
export type CobroAvgAggregateOutputType = {
    importeTotal: runtime.Decimal | null;
};
export type CobroSumAggregateOutputType = {
    importeTotal: runtime.Decimal | null;
};
export type CobroMinAggregateOutputType = {
    id: string | null;
    fechaCobro: Date | null;
    clienteId: string | null;
    importeTotal: runtime.Decimal | null;
    cuentaFinancieraId: string | null;
    medioPago: $Enums.cobro_medioPago | null;
    concepto: string | null;
    referencia: string | null;
    observaciones: string | null;
    movimientoFinancieroId: string | null;
    asientoId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CobroMaxAggregateOutputType = {
    id: string | null;
    fechaCobro: Date | null;
    clienteId: string | null;
    importeTotal: runtime.Decimal | null;
    cuentaFinancieraId: string | null;
    medioPago: $Enums.cobro_medioPago | null;
    concepto: string | null;
    referencia: string | null;
    observaciones: string | null;
    movimientoFinancieroId: string | null;
    asientoId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CobroCountAggregateOutputType = {
    id: number;
    fechaCobro: number;
    clienteId: number;
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
export type CobroAvgAggregateInputType = {
    importeTotal?: true;
};
export type CobroSumAggregateInputType = {
    importeTotal?: true;
};
export type CobroMinAggregateInputType = {
    id?: true;
    fechaCobro?: true;
    clienteId?: true;
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
export type CobroMaxAggregateInputType = {
    id?: true;
    fechaCobro?: true;
    clienteId?: true;
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
export type CobroCountAggregateInputType = {
    id?: true;
    fechaCobro?: true;
    clienteId?: true;
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
export type CobroAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which cobro to aggregate.
     */
    where?: Prisma.cobroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cobros to fetch.
     */
    orderBy?: Prisma.cobroOrderByWithRelationInput | Prisma.cobroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.cobroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cobros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cobros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned cobros
    **/
    _count?: true | CobroCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CobroAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CobroSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CobroMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CobroMaxAggregateInputType;
};
export type GetCobroAggregateType<T extends CobroAggregateArgs> = {
    [P in keyof T & keyof AggregateCobro]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCobro[P]> : Prisma.GetScalarType<T[P], AggregateCobro[P]>;
};
export type cobroGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cobroWhereInput;
    orderBy?: Prisma.cobroOrderByWithAggregationInput | Prisma.cobroOrderByWithAggregationInput[];
    by: Prisma.CobroScalarFieldEnum[] | Prisma.CobroScalarFieldEnum;
    having?: Prisma.cobroScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CobroCountAggregateInputType | true;
    _avg?: CobroAvgAggregateInputType;
    _sum?: CobroSumAggregateInputType;
    _min?: CobroMinAggregateInputType;
    _max?: CobroMaxAggregateInputType;
};
export type CobroGroupByOutputType = {
    id: string;
    fechaCobro: Date;
    clienteId: string;
    importeTotal: runtime.Decimal;
    cuentaFinancieraId: string;
    medioPago: $Enums.cobro_medioPago;
    concepto: string;
    referencia: string | null;
    observaciones: string | null;
    movimientoFinancieroId: string;
    asientoId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CobroCountAggregateOutputType | null;
    _avg: CobroAvgAggregateOutputType | null;
    _sum: CobroSumAggregateOutputType | null;
    _min: CobroMinAggregateOutputType | null;
    _max: CobroMaxAggregateOutputType | null;
};
export type GetCobroGroupByPayload<T extends cobroGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CobroGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CobroGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CobroGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CobroGroupByOutputType[P]>;
}>>;
export type cobroWhereInput = {
    AND?: Prisma.cobroWhereInput | Prisma.cobroWhereInput[];
    OR?: Prisma.cobroWhereInput[];
    NOT?: Prisma.cobroWhereInput | Prisma.cobroWhereInput[];
    id?: Prisma.StringFilter<"cobro"> | string;
    fechaCobro?: Prisma.DateTimeFilter<"cobro"> | Date | string;
    clienteId?: Prisma.StringFilter<"cobro"> | string;
    importeTotal?: Prisma.DecimalFilter<"cobro"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId?: Prisma.StringFilter<"cobro"> | string;
    medioPago?: Prisma.Enumcobro_medioPagoFilter<"cobro"> | $Enums.cobro_medioPago;
    concepto?: Prisma.StringFilter<"cobro"> | string;
    referencia?: Prisma.StringNullableFilter<"cobro"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"cobro"> | string | null;
    movimientoFinancieroId?: Prisma.StringFilter<"cobro"> | string;
    asientoId?: Prisma.StringNullableFilter<"cobro"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"cobro"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"cobro"> | Date | string;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.clienteWhereInput>;
    cuentafinanciera?: Prisma.XOR<Prisma.CuentafinancieraScalarRelationFilter, Prisma.cuentafinancieraWhereInput>;
    movimientofinanciero?: Prisma.XOR<Prisma.MovimientofinancieroScalarRelationFilter, Prisma.movimientofinancieroWhereInput>;
    liquidacioncobro?: Prisma.LiquidacioncobroListRelationFilter;
};
export type cobroOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fechaCobro?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
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
    cliente?: Prisma.clienteOrderByWithRelationInput;
    cuentafinanciera?: Prisma.cuentafinancieraOrderByWithRelationInput;
    movimientofinanciero?: Prisma.movimientofinancieroOrderByWithRelationInput;
    liquidacioncobro?: Prisma.liquidacioncobroOrderByRelationAggregateInput;
    _relevance?: Prisma.cobroOrderByRelevanceInput;
};
export type cobroWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    movimientoFinancieroId?: string;
    AND?: Prisma.cobroWhereInput | Prisma.cobroWhereInput[];
    OR?: Prisma.cobroWhereInput[];
    NOT?: Prisma.cobroWhereInput | Prisma.cobroWhereInput[];
    fechaCobro?: Prisma.DateTimeFilter<"cobro"> | Date | string;
    clienteId?: Prisma.StringFilter<"cobro"> | string;
    importeTotal?: Prisma.DecimalFilter<"cobro"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId?: Prisma.StringFilter<"cobro"> | string;
    medioPago?: Prisma.Enumcobro_medioPagoFilter<"cobro"> | $Enums.cobro_medioPago;
    concepto?: Prisma.StringFilter<"cobro"> | string;
    referencia?: Prisma.StringNullableFilter<"cobro"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"cobro"> | string | null;
    asientoId?: Prisma.StringNullableFilter<"cobro"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"cobro"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"cobro"> | Date | string;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.clienteWhereInput>;
    cuentafinanciera?: Prisma.XOR<Prisma.CuentafinancieraScalarRelationFilter, Prisma.cuentafinancieraWhereInput>;
    movimientofinanciero?: Prisma.XOR<Prisma.MovimientofinancieroScalarRelationFilter, Prisma.movimientofinancieroWhereInput>;
    liquidacioncobro?: Prisma.LiquidacioncobroListRelationFilter;
}, "id" | "movimientoFinancieroId">;
export type cobroOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fechaCobro?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
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
    _count?: Prisma.cobroCountOrderByAggregateInput;
    _avg?: Prisma.cobroAvgOrderByAggregateInput;
    _max?: Prisma.cobroMaxOrderByAggregateInput;
    _min?: Prisma.cobroMinOrderByAggregateInput;
    _sum?: Prisma.cobroSumOrderByAggregateInput;
};
export type cobroScalarWhereWithAggregatesInput = {
    AND?: Prisma.cobroScalarWhereWithAggregatesInput | Prisma.cobroScalarWhereWithAggregatesInput[];
    OR?: Prisma.cobroScalarWhereWithAggregatesInput[];
    NOT?: Prisma.cobroScalarWhereWithAggregatesInput | Prisma.cobroScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"cobro"> | string;
    fechaCobro?: Prisma.DateTimeWithAggregatesFilter<"cobro"> | Date | string;
    clienteId?: Prisma.StringWithAggregatesFilter<"cobro"> | string;
    importeTotal?: Prisma.DecimalWithAggregatesFilter<"cobro"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId?: Prisma.StringWithAggregatesFilter<"cobro"> | string;
    medioPago?: Prisma.Enumcobro_medioPagoWithAggregatesFilter<"cobro"> | $Enums.cobro_medioPago;
    concepto?: Prisma.StringWithAggregatesFilter<"cobro"> | string;
    referencia?: Prisma.StringNullableWithAggregatesFilter<"cobro"> | string | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"cobro"> | string | null;
    movimientoFinancieroId?: Prisma.StringWithAggregatesFilter<"cobro"> | string;
    asientoId?: Prisma.StringNullableWithAggregatesFilter<"cobro"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"cobro"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"cobro"> | Date | string;
};
export type cobroCreateInput = {
    id: string;
    fechaCobro: Date | string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago: $Enums.cobro_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cliente: Prisma.clienteCreateNestedOneWithoutCobroInput;
    cuentafinanciera: Prisma.cuentafinancieraCreateNestedOneWithoutCobroInput;
    movimientofinanciero: Prisma.movimientofinancieroCreateNestedOneWithoutCobroInput;
    liquidacioncobro?: Prisma.liquidacioncobroCreateNestedManyWithoutCobroInput;
};
export type cobroUncheckedCreateInput = {
    id: string;
    fechaCobro: Date | string;
    clienteId: string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId: string;
    medioPago: $Enums.cobro_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    movimientoFinancieroId: string;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacioncobro?: Prisma.liquidacioncobroUncheckedCreateNestedManyWithoutCobroInput;
};
export type cobroUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCobro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago?: Prisma.Enumcobro_medioPagoFieldUpdateOperationsInput | $Enums.cobro_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.clienteUpdateOneRequiredWithoutCobroNestedInput;
    cuentafinanciera?: Prisma.cuentafinancieraUpdateOneRequiredWithoutCobroNestedInput;
    movimientofinanciero?: Prisma.movimientofinancieroUpdateOneRequiredWithoutCobroNestedInput;
    liquidacioncobro?: Prisma.liquidacioncobroUpdateManyWithoutCobroNestedInput;
};
export type cobroUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCobro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId?: Prisma.StringFieldUpdateOperationsInput | string;
    medioPago?: Prisma.Enumcobro_medioPagoFieldUpdateOperationsInput | $Enums.cobro_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    movimientoFinancieroId?: Prisma.StringFieldUpdateOperationsInput | string;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacioncobro?: Prisma.liquidacioncobroUncheckedUpdateManyWithoutCobroNestedInput;
};
export type cobroCreateManyInput = {
    id: string;
    fechaCobro: Date | string;
    clienteId: string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId: string;
    medioPago: $Enums.cobro_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    movimientoFinancieroId: string;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type cobroUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCobro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago?: Prisma.Enumcobro_medioPagoFieldUpdateOperationsInput | $Enums.cobro_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cobroUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCobro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId?: Prisma.StringFieldUpdateOperationsInput | string;
    medioPago?: Prisma.Enumcobro_medioPagoFieldUpdateOperationsInput | $Enums.cobro_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    movimientoFinancieroId?: Prisma.StringFieldUpdateOperationsInput | string;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CobroListRelationFilter = {
    every?: Prisma.cobroWhereInput;
    some?: Prisma.cobroWhereInput;
    none?: Prisma.cobroWhereInput;
};
export type cobroOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type cobroOrderByRelevanceInput = {
    fields: Prisma.cobroOrderByRelevanceFieldEnum | Prisma.cobroOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type cobroCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fechaCobro?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
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
export type cobroAvgOrderByAggregateInput = {
    importeTotal?: Prisma.SortOrder;
};
export type cobroMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fechaCobro?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
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
export type cobroMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fechaCobro?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
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
export type cobroSumOrderByAggregateInput = {
    importeTotal?: Prisma.SortOrder;
};
export type CobroScalarRelationFilter = {
    is?: Prisma.cobroWhereInput;
    isNot?: Prisma.cobroWhereInput;
};
export type CobroNullableScalarRelationFilter = {
    is?: Prisma.cobroWhereInput | null;
    isNot?: Prisma.cobroWhereInput | null;
};
export type cobroCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.cobroCreateWithoutClienteInput, Prisma.cobroUncheckedCreateWithoutClienteInput> | Prisma.cobroCreateWithoutClienteInput[] | Prisma.cobroUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.cobroCreateOrConnectWithoutClienteInput | Prisma.cobroCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.cobroCreateManyClienteInputEnvelope;
    connect?: Prisma.cobroWhereUniqueInput | Prisma.cobroWhereUniqueInput[];
};
export type cobroUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.cobroCreateWithoutClienteInput, Prisma.cobroUncheckedCreateWithoutClienteInput> | Prisma.cobroCreateWithoutClienteInput[] | Prisma.cobroUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.cobroCreateOrConnectWithoutClienteInput | Prisma.cobroCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.cobroCreateManyClienteInputEnvelope;
    connect?: Prisma.cobroWhereUniqueInput | Prisma.cobroWhereUniqueInput[];
};
export type cobroUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.cobroCreateWithoutClienteInput, Prisma.cobroUncheckedCreateWithoutClienteInput> | Prisma.cobroCreateWithoutClienteInput[] | Prisma.cobroUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.cobroCreateOrConnectWithoutClienteInput | Prisma.cobroCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.cobroUpsertWithWhereUniqueWithoutClienteInput | Prisma.cobroUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.cobroCreateManyClienteInputEnvelope;
    set?: Prisma.cobroWhereUniqueInput | Prisma.cobroWhereUniqueInput[];
    disconnect?: Prisma.cobroWhereUniqueInput | Prisma.cobroWhereUniqueInput[];
    delete?: Prisma.cobroWhereUniqueInput | Prisma.cobroWhereUniqueInput[];
    connect?: Prisma.cobroWhereUniqueInput | Prisma.cobroWhereUniqueInput[];
    update?: Prisma.cobroUpdateWithWhereUniqueWithoutClienteInput | Prisma.cobroUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.cobroUpdateManyWithWhereWithoutClienteInput | Prisma.cobroUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.cobroScalarWhereInput | Prisma.cobroScalarWhereInput[];
};
export type cobroUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.cobroCreateWithoutClienteInput, Prisma.cobroUncheckedCreateWithoutClienteInput> | Prisma.cobroCreateWithoutClienteInput[] | Prisma.cobroUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.cobroCreateOrConnectWithoutClienteInput | Prisma.cobroCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.cobroUpsertWithWhereUniqueWithoutClienteInput | Prisma.cobroUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.cobroCreateManyClienteInputEnvelope;
    set?: Prisma.cobroWhereUniqueInput | Prisma.cobroWhereUniqueInput[];
    disconnect?: Prisma.cobroWhereUniqueInput | Prisma.cobroWhereUniqueInput[];
    delete?: Prisma.cobroWhereUniqueInput | Prisma.cobroWhereUniqueInput[];
    connect?: Prisma.cobroWhereUniqueInput | Prisma.cobroWhereUniqueInput[];
    update?: Prisma.cobroUpdateWithWhereUniqueWithoutClienteInput | Prisma.cobroUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.cobroUpdateManyWithWhereWithoutClienteInput | Prisma.cobroUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.cobroScalarWhereInput | Prisma.cobroScalarWhereInput[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type Enumcobro_medioPagoFieldUpdateOperationsInput = {
    set?: $Enums.cobro_medioPago;
};
export type cobroCreateNestedManyWithoutCuentafinancieraInput = {
    create?: Prisma.XOR<Prisma.cobroCreateWithoutCuentafinancieraInput, Prisma.cobroUncheckedCreateWithoutCuentafinancieraInput> | Prisma.cobroCreateWithoutCuentafinancieraInput[] | Prisma.cobroUncheckedCreateWithoutCuentafinancieraInput[];
    connectOrCreate?: Prisma.cobroCreateOrConnectWithoutCuentafinancieraInput | Prisma.cobroCreateOrConnectWithoutCuentafinancieraInput[];
    createMany?: Prisma.cobroCreateManyCuentafinancieraInputEnvelope;
    connect?: Prisma.cobroWhereUniqueInput | Prisma.cobroWhereUniqueInput[];
};
export type cobroUncheckedCreateNestedManyWithoutCuentafinancieraInput = {
    create?: Prisma.XOR<Prisma.cobroCreateWithoutCuentafinancieraInput, Prisma.cobroUncheckedCreateWithoutCuentafinancieraInput> | Prisma.cobroCreateWithoutCuentafinancieraInput[] | Prisma.cobroUncheckedCreateWithoutCuentafinancieraInput[];
    connectOrCreate?: Prisma.cobroCreateOrConnectWithoutCuentafinancieraInput | Prisma.cobroCreateOrConnectWithoutCuentafinancieraInput[];
    createMany?: Prisma.cobroCreateManyCuentafinancieraInputEnvelope;
    connect?: Prisma.cobroWhereUniqueInput | Prisma.cobroWhereUniqueInput[];
};
export type cobroUpdateManyWithoutCuentafinancieraNestedInput = {
    create?: Prisma.XOR<Prisma.cobroCreateWithoutCuentafinancieraInput, Prisma.cobroUncheckedCreateWithoutCuentafinancieraInput> | Prisma.cobroCreateWithoutCuentafinancieraInput[] | Prisma.cobroUncheckedCreateWithoutCuentafinancieraInput[];
    connectOrCreate?: Prisma.cobroCreateOrConnectWithoutCuentafinancieraInput | Prisma.cobroCreateOrConnectWithoutCuentafinancieraInput[];
    upsert?: Prisma.cobroUpsertWithWhereUniqueWithoutCuentafinancieraInput | Prisma.cobroUpsertWithWhereUniqueWithoutCuentafinancieraInput[];
    createMany?: Prisma.cobroCreateManyCuentafinancieraInputEnvelope;
    set?: Prisma.cobroWhereUniqueInput | Prisma.cobroWhereUniqueInput[];
    disconnect?: Prisma.cobroWhereUniqueInput | Prisma.cobroWhereUniqueInput[];
    delete?: Prisma.cobroWhereUniqueInput | Prisma.cobroWhereUniqueInput[];
    connect?: Prisma.cobroWhereUniqueInput | Prisma.cobroWhereUniqueInput[];
    update?: Prisma.cobroUpdateWithWhereUniqueWithoutCuentafinancieraInput | Prisma.cobroUpdateWithWhereUniqueWithoutCuentafinancieraInput[];
    updateMany?: Prisma.cobroUpdateManyWithWhereWithoutCuentafinancieraInput | Prisma.cobroUpdateManyWithWhereWithoutCuentafinancieraInput[];
    deleteMany?: Prisma.cobroScalarWhereInput | Prisma.cobroScalarWhereInput[];
};
export type cobroUncheckedUpdateManyWithoutCuentafinancieraNestedInput = {
    create?: Prisma.XOR<Prisma.cobroCreateWithoutCuentafinancieraInput, Prisma.cobroUncheckedCreateWithoutCuentafinancieraInput> | Prisma.cobroCreateWithoutCuentafinancieraInput[] | Prisma.cobroUncheckedCreateWithoutCuentafinancieraInput[];
    connectOrCreate?: Prisma.cobroCreateOrConnectWithoutCuentafinancieraInput | Prisma.cobroCreateOrConnectWithoutCuentafinancieraInput[];
    upsert?: Prisma.cobroUpsertWithWhereUniqueWithoutCuentafinancieraInput | Prisma.cobroUpsertWithWhereUniqueWithoutCuentafinancieraInput[];
    createMany?: Prisma.cobroCreateManyCuentafinancieraInputEnvelope;
    set?: Prisma.cobroWhereUniqueInput | Prisma.cobroWhereUniqueInput[];
    disconnect?: Prisma.cobroWhereUniqueInput | Prisma.cobroWhereUniqueInput[];
    delete?: Prisma.cobroWhereUniqueInput | Prisma.cobroWhereUniqueInput[];
    connect?: Prisma.cobroWhereUniqueInput | Prisma.cobroWhereUniqueInput[];
    update?: Prisma.cobroUpdateWithWhereUniqueWithoutCuentafinancieraInput | Prisma.cobroUpdateWithWhereUniqueWithoutCuentafinancieraInput[];
    updateMany?: Prisma.cobroUpdateManyWithWhereWithoutCuentafinancieraInput | Prisma.cobroUpdateManyWithWhereWithoutCuentafinancieraInput[];
    deleteMany?: Prisma.cobroScalarWhereInput | Prisma.cobroScalarWhereInput[];
};
export type cobroCreateNestedOneWithoutLiquidacioncobroInput = {
    create?: Prisma.XOR<Prisma.cobroCreateWithoutLiquidacioncobroInput, Prisma.cobroUncheckedCreateWithoutLiquidacioncobroInput>;
    connectOrCreate?: Prisma.cobroCreateOrConnectWithoutLiquidacioncobroInput;
    connect?: Prisma.cobroWhereUniqueInput;
};
export type cobroUpdateOneRequiredWithoutLiquidacioncobroNestedInput = {
    create?: Prisma.XOR<Prisma.cobroCreateWithoutLiquidacioncobroInput, Prisma.cobroUncheckedCreateWithoutLiquidacioncobroInput>;
    connectOrCreate?: Prisma.cobroCreateOrConnectWithoutLiquidacioncobroInput;
    upsert?: Prisma.cobroUpsertWithoutLiquidacioncobroInput;
    connect?: Prisma.cobroWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cobroUpdateToOneWithWhereWithoutLiquidacioncobroInput, Prisma.cobroUpdateWithoutLiquidacioncobroInput>, Prisma.cobroUncheckedUpdateWithoutLiquidacioncobroInput>;
};
export type cobroCreateNestedOneWithoutMovimientofinancieroInput = {
    create?: Prisma.XOR<Prisma.cobroCreateWithoutMovimientofinancieroInput, Prisma.cobroUncheckedCreateWithoutMovimientofinancieroInput>;
    connectOrCreate?: Prisma.cobroCreateOrConnectWithoutMovimientofinancieroInput;
    connect?: Prisma.cobroWhereUniqueInput;
};
export type cobroUncheckedCreateNestedOneWithoutMovimientofinancieroInput = {
    create?: Prisma.XOR<Prisma.cobroCreateWithoutMovimientofinancieroInput, Prisma.cobroUncheckedCreateWithoutMovimientofinancieroInput>;
    connectOrCreate?: Prisma.cobroCreateOrConnectWithoutMovimientofinancieroInput;
    connect?: Prisma.cobroWhereUniqueInput;
};
export type cobroUpdateOneWithoutMovimientofinancieroNestedInput = {
    create?: Prisma.XOR<Prisma.cobroCreateWithoutMovimientofinancieroInput, Prisma.cobroUncheckedCreateWithoutMovimientofinancieroInput>;
    connectOrCreate?: Prisma.cobroCreateOrConnectWithoutMovimientofinancieroInput;
    upsert?: Prisma.cobroUpsertWithoutMovimientofinancieroInput;
    disconnect?: Prisma.cobroWhereInput | boolean;
    delete?: Prisma.cobroWhereInput | boolean;
    connect?: Prisma.cobroWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cobroUpdateToOneWithWhereWithoutMovimientofinancieroInput, Prisma.cobroUpdateWithoutMovimientofinancieroInput>, Prisma.cobroUncheckedUpdateWithoutMovimientofinancieroInput>;
};
export type cobroUncheckedUpdateOneWithoutMovimientofinancieroNestedInput = {
    create?: Prisma.XOR<Prisma.cobroCreateWithoutMovimientofinancieroInput, Prisma.cobroUncheckedCreateWithoutMovimientofinancieroInput>;
    connectOrCreate?: Prisma.cobroCreateOrConnectWithoutMovimientofinancieroInput;
    upsert?: Prisma.cobroUpsertWithoutMovimientofinancieroInput;
    disconnect?: Prisma.cobroWhereInput | boolean;
    delete?: Prisma.cobroWhereInput | boolean;
    connect?: Prisma.cobroWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cobroUpdateToOneWithWhereWithoutMovimientofinancieroInput, Prisma.cobroUpdateWithoutMovimientofinancieroInput>, Prisma.cobroUncheckedUpdateWithoutMovimientofinancieroInput>;
};
export type cobroCreateWithoutClienteInput = {
    id: string;
    fechaCobro: Date | string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago: $Enums.cobro_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cuentafinanciera: Prisma.cuentafinancieraCreateNestedOneWithoutCobroInput;
    movimientofinanciero: Prisma.movimientofinancieroCreateNestedOneWithoutCobroInput;
    liquidacioncobro?: Prisma.liquidacioncobroCreateNestedManyWithoutCobroInput;
};
export type cobroUncheckedCreateWithoutClienteInput = {
    id: string;
    fechaCobro: Date | string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId: string;
    medioPago: $Enums.cobro_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    movimientoFinancieroId: string;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacioncobro?: Prisma.liquidacioncobroUncheckedCreateNestedManyWithoutCobroInput;
};
export type cobroCreateOrConnectWithoutClienteInput = {
    where: Prisma.cobroWhereUniqueInput;
    create: Prisma.XOR<Prisma.cobroCreateWithoutClienteInput, Prisma.cobroUncheckedCreateWithoutClienteInput>;
};
export type cobroCreateManyClienteInputEnvelope = {
    data: Prisma.cobroCreateManyClienteInput | Prisma.cobroCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type cobroUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.cobroWhereUniqueInput;
    update: Prisma.XOR<Prisma.cobroUpdateWithoutClienteInput, Prisma.cobroUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.cobroCreateWithoutClienteInput, Prisma.cobroUncheckedCreateWithoutClienteInput>;
};
export type cobroUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.cobroWhereUniqueInput;
    data: Prisma.XOR<Prisma.cobroUpdateWithoutClienteInput, Prisma.cobroUncheckedUpdateWithoutClienteInput>;
};
export type cobroUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.cobroScalarWhereInput;
    data: Prisma.XOR<Prisma.cobroUpdateManyMutationInput, Prisma.cobroUncheckedUpdateManyWithoutClienteInput>;
};
export type cobroScalarWhereInput = {
    AND?: Prisma.cobroScalarWhereInput | Prisma.cobroScalarWhereInput[];
    OR?: Prisma.cobroScalarWhereInput[];
    NOT?: Prisma.cobroScalarWhereInput | Prisma.cobroScalarWhereInput[];
    id?: Prisma.StringFilter<"cobro"> | string;
    fechaCobro?: Prisma.DateTimeFilter<"cobro"> | Date | string;
    clienteId?: Prisma.StringFilter<"cobro"> | string;
    importeTotal?: Prisma.DecimalFilter<"cobro"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId?: Prisma.StringFilter<"cobro"> | string;
    medioPago?: Prisma.Enumcobro_medioPagoFilter<"cobro"> | $Enums.cobro_medioPago;
    concepto?: Prisma.StringFilter<"cobro"> | string;
    referencia?: Prisma.StringNullableFilter<"cobro"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"cobro"> | string | null;
    movimientoFinancieroId?: Prisma.StringFilter<"cobro"> | string;
    asientoId?: Prisma.StringNullableFilter<"cobro"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"cobro"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"cobro"> | Date | string;
};
export type cobroCreateWithoutCuentafinancieraInput = {
    id: string;
    fechaCobro: Date | string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago: $Enums.cobro_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cliente: Prisma.clienteCreateNestedOneWithoutCobroInput;
    movimientofinanciero: Prisma.movimientofinancieroCreateNestedOneWithoutCobroInput;
    liquidacioncobro?: Prisma.liquidacioncobroCreateNestedManyWithoutCobroInput;
};
export type cobroUncheckedCreateWithoutCuentafinancieraInput = {
    id: string;
    fechaCobro: Date | string;
    clienteId: string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago: $Enums.cobro_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    movimientoFinancieroId: string;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacioncobro?: Prisma.liquidacioncobroUncheckedCreateNestedManyWithoutCobroInput;
};
export type cobroCreateOrConnectWithoutCuentafinancieraInput = {
    where: Prisma.cobroWhereUniqueInput;
    create: Prisma.XOR<Prisma.cobroCreateWithoutCuentafinancieraInput, Prisma.cobroUncheckedCreateWithoutCuentafinancieraInput>;
};
export type cobroCreateManyCuentafinancieraInputEnvelope = {
    data: Prisma.cobroCreateManyCuentafinancieraInput | Prisma.cobroCreateManyCuentafinancieraInput[];
    skipDuplicates?: boolean;
};
export type cobroUpsertWithWhereUniqueWithoutCuentafinancieraInput = {
    where: Prisma.cobroWhereUniqueInput;
    update: Prisma.XOR<Prisma.cobroUpdateWithoutCuentafinancieraInput, Prisma.cobroUncheckedUpdateWithoutCuentafinancieraInput>;
    create: Prisma.XOR<Prisma.cobroCreateWithoutCuentafinancieraInput, Prisma.cobroUncheckedCreateWithoutCuentafinancieraInput>;
};
export type cobroUpdateWithWhereUniqueWithoutCuentafinancieraInput = {
    where: Prisma.cobroWhereUniqueInput;
    data: Prisma.XOR<Prisma.cobroUpdateWithoutCuentafinancieraInput, Prisma.cobroUncheckedUpdateWithoutCuentafinancieraInput>;
};
export type cobroUpdateManyWithWhereWithoutCuentafinancieraInput = {
    where: Prisma.cobroScalarWhereInput;
    data: Prisma.XOR<Prisma.cobroUpdateManyMutationInput, Prisma.cobroUncheckedUpdateManyWithoutCuentafinancieraInput>;
};
export type cobroCreateWithoutLiquidacioncobroInput = {
    id: string;
    fechaCobro: Date | string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago: $Enums.cobro_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cliente: Prisma.clienteCreateNestedOneWithoutCobroInput;
    cuentafinanciera: Prisma.cuentafinancieraCreateNestedOneWithoutCobroInput;
    movimientofinanciero: Prisma.movimientofinancieroCreateNestedOneWithoutCobroInput;
};
export type cobroUncheckedCreateWithoutLiquidacioncobroInput = {
    id: string;
    fechaCobro: Date | string;
    clienteId: string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId: string;
    medioPago: $Enums.cobro_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    movimientoFinancieroId: string;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type cobroCreateOrConnectWithoutLiquidacioncobroInput = {
    where: Prisma.cobroWhereUniqueInput;
    create: Prisma.XOR<Prisma.cobroCreateWithoutLiquidacioncobroInput, Prisma.cobroUncheckedCreateWithoutLiquidacioncobroInput>;
};
export type cobroUpsertWithoutLiquidacioncobroInput = {
    update: Prisma.XOR<Prisma.cobroUpdateWithoutLiquidacioncobroInput, Prisma.cobroUncheckedUpdateWithoutLiquidacioncobroInput>;
    create: Prisma.XOR<Prisma.cobroCreateWithoutLiquidacioncobroInput, Prisma.cobroUncheckedCreateWithoutLiquidacioncobroInput>;
    where?: Prisma.cobroWhereInput;
};
export type cobroUpdateToOneWithWhereWithoutLiquidacioncobroInput = {
    where?: Prisma.cobroWhereInput;
    data: Prisma.XOR<Prisma.cobroUpdateWithoutLiquidacioncobroInput, Prisma.cobroUncheckedUpdateWithoutLiquidacioncobroInput>;
};
export type cobroUpdateWithoutLiquidacioncobroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCobro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago?: Prisma.Enumcobro_medioPagoFieldUpdateOperationsInput | $Enums.cobro_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.clienteUpdateOneRequiredWithoutCobroNestedInput;
    cuentafinanciera?: Prisma.cuentafinancieraUpdateOneRequiredWithoutCobroNestedInput;
    movimientofinanciero?: Prisma.movimientofinancieroUpdateOneRequiredWithoutCobroNestedInput;
};
export type cobroUncheckedUpdateWithoutLiquidacioncobroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCobro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId?: Prisma.StringFieldUpdateOperationsInput | string;
    medioPago?: Prisma.Enumcobro_medioPagoFieldUpdateOperationsInput | $Enums.cobro_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    movimientoFinancieroId?: Prisma.StringFieldUpdateOperationsInput | string;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cobroCreateWithoutMovimientofinancieroInput = {
    id: string;
    fechaCobro: Date | string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago: $Enums.cobro_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cliente: Prisma.clienteCreateNestedOneWithoutCobroInput;
    cuentafinanciera: Prisma.cuentafinancieraCreateNestedOneWithoutCobroInput;
    liquidacioncobro?: Prisma.liquidacioncobroCreateNestedManyWithoutCobroInput;
};
export type cobroUncheckedCreateWithoutMovimientofinancieroInput = {
    id: string;
    fechaCobro: Date | string;
    clienteId: string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId: string;
    medioPago: $Enums.cobro_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacioncobro?: Prisma.liquidacioncobroUncheckedCreateNestedManyWithoutCobroInput;
};
export type cobroCreateOrConnectWithoutMovimientofinancieroInput = {
    where: Prisma.cobroWhereUniqueInput;
    create: Prisma.XOR<Prisma.cobroCreateWithoutMovimientofinancieroInput, Prisma.cobroUncheckedCreateWithoutMovimientofinancieroInput>;
};
export type cobroUpsertWithoutMovimientofinancieroInput = {
    update: Prisma.XOR<Prisma.cobroUpdateWithoutMovimientofinancieroInput, Prisma.cobroUncheckedUpdateWithoutMovimientofinancieroInput>;
    create: Prisma.XOR<Prisma.cobroCreateWithoutMovimientofinancieroInput, Prisma.cobroUncheckedCreateWithoutMovimientofinancieroInput>;
    where?: Prisma.cobroWhereInput;
};
export type cobroUpdateToOneWithWhereWithoutMovimientofinancieroInput = {
    where?: Prisma.cobroWhereInput;
    data: Prisma.XOR<Prisma.cobroUpdateWithoutMovimientofinancieroInput, Prisma.cobroUncheckedUpdateWithoutMovimientofinancieroInput>;
};
export type cobroUpdateWithoutMovimientofinancieroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCobro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago?: Prisma.Enumcobro_medioPagoFieldUpdateOperationsInput | $Enums.cobro_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.clienteUpdateOneRequiredWithoutCobroNestedInput;
    cuentafinanciera?: Prisma.cuentafinancieraUpdateOneRequiredWithoutCobroNestedInput;
    liquidacioncobro?: Prisma.liquidacioncobroUpdateManyWithoutCobroNestedInput;
};
export type cobroUncheckedUpdateWithoutMovimientofinancieroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCobro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId?: Prisma.StringFieldUpdateOperationsInput | string;
    medioPago?: Prisma.Enumcobro_medioPagoFieldUpdateOperationsInput | $Enums.cobro_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacioncobro?: Prisma.liquidacioncobroUncheckedUpdateManyWithoutCobroNestedInput;
};
export type cobroCreateManyClienteInput = {
    id: string;
    fechaCobro: Date | string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId: string;
    medioPago: $Enums.cobro_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    movimientoFinancieroId: string;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type cobroUpdateWithoutClienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCobro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago?: Prisma.Enumcobro_medioPagoFieldUpdateOperationsInput | $Enums.cobro_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cuentafinanciera?: Prisma.cuentafinancieraUpdateOneRequiredWithoutCobroNestedInput;
    movimientofinanciero?: Prisma.movimientofinancieroUpdateOneRequiredWithoutCobroNestedInput;
    liquidacioncobro?: Prisma.liquidacioncobroUpdateManyWithoutCobroNestedInput;
};
export type cobroUncheckedUpdateWithoutClienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCobro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId?: Prisma.StringFieldUpdateOperationsInput | string;
    medioPago?: Prisma.Enumcobro_medioPagoFieldUpdateOperationsInput | $Enums.cobro_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    movimientoFinancieroId?: Prisma.StringFieldUpdateOperationsInput | string;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacioncobro?: Prisma.liquidacioncobroUncheckedUpdateManyWithoutCobroNestedInput;
};
export type cobroUncheckedUpdateManyWithoutClienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCobro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    cuentaFinancieraId?: Prisma.StringFieldUpdateOperationsInput | string;
    medioPago?: Prisma.Enumcobro_medioPagoFieldUpdateOperationsInput | $Enums.cobro_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    movimientoFinancieroId?: Prisma.StringFieldUpdateOperationsInput | string;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cobroCreateManyCuentafinancieraInput = {
    id: string;
    fechaCobro: Date | string;
    clienteId: string;
    importeTotal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago: $Enums.cobro_medioPago;
    concepto: string;
    referencia?: string | null;
    observaciones?: string | null;
    movimientoFinancieroId: string;
    asientoId?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type cobroUpdateWithoutCuentafinancieraInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCobro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago?: Prisma.Enumcobro_medioPagoFieldUpdateOperationsInput | $Enums.cobro_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.clienteUpdateOneRequiredWithoutCobroNestedInput;
    movimientofinanciero?: Prisma.movimientofinancieroUpdateOneRequiredWithoutCobroNestedInput;
    liquidacioncobro?: Prisma.liquidacioncobroUpdateManyWithoutCobroNestedInput;
};
export type cobroUncheckedUpdateWithoutCuentafinancieraInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCobro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago?: Prisma.Enumcobro_medioPagoFieldUpdateOperationsInput | $Enums.cobro_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    movimientoFinancieroId?: Prisma.StringFieldUpdateOperationsInput | string;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacioncobro?: Prisma.liquidacioncobroUncheckedUpdateManyWithoutCobroNestedInput;
};
export type cobroUncheckedUpdateManyWithoutCuentafinancieraInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCobro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    importeTotal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    medioPago?: Prisma.Enumcobro_medioPagoFieldUpdateOperationsInput | $Enums.cobro_medioPago;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    movimientoFinancieroId?: Prisma.StringFieldUpdateOperationsInput | string;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type CobroCountOutputType
 */
export type CobroCountOutputType = {
    liquidacioncobro: number;
};
export type CobroCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    liquidacioncobro?: boolean | CobroCountOutputTypeCountLiquidacioncobroArgs;
};
/**
 * CobroCountOutputType without action
 */
export type CobroCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CobroCountOutputType
     */
    select?: Prisma.CobroCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CobroCountOutputType without action
 */
export type CobroCountOutputTypeCountLiquidacioncobroArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.liquidacioncobroWhereInput;
};
export type cobroSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fechaCobro?: boolean;
    clienteId?: boolean;
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
    cliente?: boolean | Prisma.clienteDefaultArgs<ExtArgs>;
    cuentafinanciera?: boolean | Prisma.cuentafinancieraDefaultArgs<ExtArgs>;
    movimientofinanciero?: boolean | Prisma.movimientofinancieroDefaultArgs<ExtArgs>;
    liquidacioncobro?: boolean | Prisma.cobro$liquidacioncobroArgs<ExtArgs>;
    _count?: boolean | Prisma.CobroCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cobro"]>;
export type cobroSelectScalar = {
    id?: boolean;
    fechaCobro?: boolean;
    clienteId?: boolean;
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
export type cobroOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fechaCobro" | "clienteId" | "importeTotal" | "cuentaFinancieraId" | "medioPago" | "concepto" | "referencia" | "observaciones" | "movimientoFinancieroId" | "asientoId" | "createdAt" | "updatedAt", ExtArgs["result"]["cobro"]>;
export type cobroInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.clienteDefaultArgs<ExtArgs>;
    cuentafinanciera?: boolean | Prisma.cuentafinancieraDefaultArgs<ExtArgs>;
    movimientofinanciero?: boolean | Prisma.movimientofinancieroDefaultArgs<ExtArgs>;
    liquidacioncobro?: boolean | Prisma.cobro$liquidacioncobroArgs<ExtArgs>;
    _count?: boolean | Prisma.CobroCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $cobroPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "cobro";
    objects: {
        cliente: Prisma.$clientePayload<ExtArgs>;
        cuentafinanciera: Prisma.$cuentafinancieraPayload<ExtArgs>;
        movimientofinanciero: Prisma.$movimientofinancieroPayload<ExtArgs>;
        liquidacioncobro: Prisma.$liquidacioncobroPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        fechaCobro: Date;
        clienteId: string;
        importeTotal: runtime.Decimal;
        cuentaFinancieraId: string;
        medioPago: $Enums.cobro_medioPago;
        concepto: string;
        referencia: string | null;
        observaciones: string | null;
        movimientoFinancieroId: string;
        asientoId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["cobro"]>;
    composites: {};
};
export type cobroGetPayload<S extends boolean | null | undefined | cobroDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$cobroPayload, S>;
export type cobroCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<cobroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CobroCountAggregateInputType | true;
};
export interface cobroDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['cobro'];
        meta: {
            name: 'cobro';
        };
    };
    /**
     * Find zero or one Cobro that matches the filter.
     * @param {cobroFindUniqueArgs} args - Arguments to find a Cobro
     * @example
     * // Get one Cobro
     * const cobro = await prisma.cobro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cobroFindUniqueArgs>(args: Prisma.SelectSubset<T, cobroFindUniqueArgs<ExtArgs>>): Prisma.Prisma__cobroClient<runtime.Types.Result.GetResult<Prisma.$cobroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Cobro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cobroFindUniqueOrThrowArgs} args - Arguments to find a Cobro
     * @example
     * // Get one Cobro
     * const cobro = await prisma.cobro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cobroFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, cobroFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__cobroClient<runtime.Types.Result.GetResult<Prisma.$cobroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cobro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cobroFindFirstArgs} args - Arguments to find a Cobro
     * @example
     * // Get one Cobro
     * const cobro = await prisma.cobro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cobroFindFirstArgs>(args?: Prisma.SelectSubset<T, cobroFindFirstArgs<ExtArgs>>): Prisma.Prisma__cobroClient<runtime.Types.Result.GetResult<Prisma.$cobroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cobro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cobroFindFirstOrThrowArgs} args - Arguments to find a Cobro
     * @example
     * // Get one Cobro
     * const cobro = await prisma.cobro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cobroFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, cobroFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__cobroClient<runtime.Types.Result.GetResult<Prisma.$cobroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Cobros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cobroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cobros
     * const cobros = await prisma.cobro.findMany()
     *
     * // Get first 10 Cobros
     * const cobros = await prisma.cobro.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cobroWithIdOnly = await prisma.cobro.findMany({ select: { id: true } })
     *
     */
    findMany<T extends cobroFindManyArgs>(args?: Prisma.SelectSubset<T, cobroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cobroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Cobro.
     * @param {cobroCreateArgs} args - Arguments to create a Cobro.
     * @example
     * // Create one Cobro
     * const Cobro = await prisma.cobro.create({
     *   data: {
     *     // ... data to create a Cobro
     *   }
     * })
     *
     */
    create<T extends cobroCreateArgs>(args: Prisma.SelectSubset<T, cobroCreateArgs<ExtArgs>>): Prisma.Prisma__cobroClient<runtime.Types.Result.GetResult<Prisma.$cobroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Cobros.
     * @param {cobroCreateManyArgs} args - Arguments to create many Cobros.
     * @example
     * // Create many Cobros
     * const cobro = await prisma.cobro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends cobroCreateManyArgs>(args?: Prisma.SelectSubset<T, cobroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Cobro.
     * @param {cobroDeleteArgs} args - Arguments to delete one Cobro.
     * @example
     * // Delete one Cobro
     * const Cobro = await prisma.cobro.delete({
     *   where: {
     *     // ... filter to delete one Cobro
     *   }
     * })
     *
     */
    delete<T extends cobroDeleteArgs>(args: Prisma.SelectSubset<T, cobroDeleteArgs<ExtArgs>>): Prisma.Prisma__cobroClient<runtime.Types.Result.GetResult<Prisma.$cobroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Cobro.
     * @param {cobroUpdateArgs} args - Arguments to update one Cobro.
     * @example
     * // Update one Cobro
     * const cobro = await prisma.cobro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends cobroUpdateArgs>(args: Prisma.SelectSubset<T, cobroUpdateArgs<ExtArgs>>): Prisma.Prisma__cobroClient<runtime.Types.Result.GetResult<Prisma.$cobroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Cobros.
     * @param {cobroDeleteManyArgs} args - Arguments to filter Cobros to delete.
     * @example
     * // Delete a few Cobros
     * const { count } = await prisma.cobro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends cobroDeleteManyArgs>(args?: Prisma.SelectSubset<T, cobroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Cobros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cobroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cobros
     * const cobro = await prisma.cobro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends cobroUpdateManyArgs>(args: Prisma.SelectSubset<T, cobroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Cobro.
     * @param {cobroUpsertArgs} args - Arguments to update or create a Cobro.
     * @example
     * // Update or create a Cobro
     * const cobro = await prisma.cobro.upsert({
     *   create: {
     *     // ... data to create a Cobro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cobro we want to update
     *   }
     * })
     */
    upsert<T extends cobroUpsertArgs>(args: Prisma.SelectSubset<T, cobroUpsertArgs<ExtArgs>>): Prisma.Prisma__cobroClient<runtime.Types.Result.GetResult<Prisma.$cobroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Cobros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cobroCountArgs} args - Arguments to filter Cobros to count.
     * @example
     * // Count the number of Cobros
     * const count = await prisma.cobro.count({
     *   where: {
     *     // ... the filter for the Cobros we want to count
     *   }
     * })
    **/
    count<T extends cobroCountArgs>(args?: Prisma.Subset<T, cobroCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CobroCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Cobro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CobroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CobroAggregateArgs>(args: Prisma.Subset<T, CobroAggregateArgs>): Prisma.PrismaPromise<GetCobroAggregateType<T>>;
    /**
     * Group by Cobro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cobroGroupByArgs} args - Group by arguments.
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
    groupBy<T extends cobroGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: cobroGroupByArgs['orderBy'];
    } : {
        orderBy?: cobroGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, cobroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCobroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the cobro model
     */
    readonly fields: cobroFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for cobro.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__cobroClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cliente<T extends Prisma.clienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.clienteDefaultArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    cuentafinanciera<T extends Prisma.cuentafinancieraDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cuentafinancieraDefaultArgs<ExtArgs>>): Prisma.Prisma__cuentafinancieraClient<runtime.Types.Result.GetResult<Prisma.$cuentafinancieraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    movimientofinanciero<T extends Prisma.movimientofinancieroDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.movimientofinancieroDefaultArgs<ExtArgs>>): Prisma.Prisma__movimientofinancieroClient<runtime.Types.Result.GetResult<Prisma.$movimientofinancieroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    liquidacioncobro<T extends Prisma.cobro$liquidacioncobroArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cobro$liquidacioncobroArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$liquidacioncobroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the cobro model
 */
export interface cobroFieldRefs {
    readonly id: Prisma.FieldRef<"cobro", 'String'>;
    readonly fechaCobro: Prisma.FieldRef<"cobro", 'DateTime'>;
    readonly clienteId: Prisma.FieldRef<"cobro", 'String'>;
    readonly importeTotal: Prisma.FieldRef<"cobro", 'Decimal'>;
    readonly cuentaFinancieraId: Prisma.FieldRef<"cobro", 'String'>;
    readonly medioPago: Prisma.FieldRef<"cobro", 'cobro_medioPago'>;
    readonly concepto: Prisma.FieldRef<"cobro", 'String'>;
    readonly referencia: Prisma.FieldRef<"cobro", 'String'>;
    readonly observaciones: Prisma.FieldRef<"cobro", 'String'>;
    readonly movimientoFinancieroId: Prisma.FieldRef<"cobro", 'String'>;
    readonly asientoId: Prisma.FieldRef<"cobro", 'String'>;
    readonly createdAt: Prisma.FieldRef<"cobro", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"cobro", 'DateTime'>;
}
/**
 * cobro findUnique
 */
export type cobroFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cobro
     */
    select?: Prisma.cobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cobro
     */
    omit?: Prisma.cobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cobroInclude<ExtArgs> | null;
    /**
     * Filter, which cobro to fetch.
     */
    where: Prisma.cobroWhereUniqueInput;
};
/**
 * cobro findUniqueOrThrow
 */
export type cobroFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cobro
     */
    select?: Prisma.cobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cobro
     */
    omit?: Prisma.cobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cobroInclude<ExtArgs> | null;
    /**
     * Filter, which cobro to fetch.
     */
    where: Prisma.cobroWhereUniqueInput;
};
/**
 * cobro findFirst
 */
export type cobroFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cobro
     */
    select?: Prisma.cobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cobro
     */
    omit?: Prisma.cobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cobroInclude<ExtArgs> | null;
    /**
     * Filter, which cobro to fetch.
     */
    where?: Prisma.cobroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cobros to fetch.
     */
    orderBy?: Prisma.cobroOrderByWithRelationInput | Prisma.cobroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cobros.
     */
    cursor?: Prisma.cobroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cobros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cobros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cobros.
     */
    distinct?: Prisma.CobroScalarFieldEnum | Prisma.CobroScalarFieldEnum[];
};
/**
 * cobro findFirstOrThrow
 */
export type cobroFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cobro
     */
    select?: Prisma.cobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cobro
     */
    omit?: Prisma.cobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cobroInclude<ExtArgs> | null;
    /**
     * Filter, which cobro to fetch.
     */
    where?: Prisma.cobroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cobros to fetch.
     */
    orderBy?: Prisma.cobroOrderByWithRelationInput | Prisma.cobroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cobros.
     */
    cursor?: Prisma.cobroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cobros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cobros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cobros.
     */
    distinct?: Prisma.CobroScalarFieldEnum | Prisma.CobroScalarFieldEnum[];
};
/**
 * cobro findMany
 */
export type cobroFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cobro
     */
    select?: Prisma.cobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cobro
     */
    omit?: Prisma.cobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cobroInclude<ExtArgs> | null;
    /**
     * Filter, which cobros to fetch.
     */
    where?: Prisma.cobroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cobros to fetch.
     */
    orderBy?: Prisma.cobroOrderByWithRelationInput | Prisma.cobroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing cobros.
     */
    cursor?: Prisma.cobroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cobros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cobros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cobros.
     */
    distinct?: Prisma.CobroScalarFieldEnum | Prisma.CobroScalarFieldEnum[];
};
/**
 * cobro create
 */
export type cobroCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cobro
     */
    select?: Prisma.cobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cobro
     */
    omit?: Prisma.cobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cobroInclude<ExtArgs> | null;
    /**
     * The data needed to create a cobro.
     */
    data: Prisma.XOR<Prisma.cobroCreateInput, Prisma.cobroUncheckedCreateInput>;
};
/**
 * cobro createMany
 */
export type cobroCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many cobros.
     */
    data: Prisma.cobroCreateManyInput | Prisma.cobroCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * cobro update
 */
export type cobroUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cobro
     */
    select?: Prisma.cobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cobro
     */
    omit?: Prisma.cobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cobroInclude<ExtArgs> | null;
    /**
     * The data needed to update a cobro.
     */
    data: Prisma.XOR<Prisma.cobroUpdateInput, Prisma.cobroUncheckedUpdateInput>;
    /**
     * Choose, which cobro to update.
     */
    where: Prisma.cobroWhereUniqueInput;
};
/**
 * cobro updateMany
 */
export type cobroUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update cobros.
     */
    data: Prisma.XOR<Prisma.cobroUpdateManyMutationInput, Prisma.cobroUncheckedUpdateManyInput>;
    /**
     * Filter which cobros to update
     */
    where?: Prisma.cobroWhereInput;
    /**
     * Limit how many cobros to update.
     */
    limit?: number;
};
/**
 * cobro upsert
 */
export type cobroUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cobro
     */
    select?: Prisma.cobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cobro
     */
    omit?: Prisma.cobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cobroInclude<ExtArgs> | null;
    /**
     * The filter to search for the cobro to update in case it exists.
     */
    where: Prisma.cobroWhereUniqueInput;
    /**
     * In case the cobro found by the `where` argument doesn't exist, create a new cobro with this data.
     */
    create: Prisma.XOR<Prisma.cobroCreateInput, Prisma.cobroUncheckedCreateInput>;
    /**
     * In case the cobro was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.cobroUpdateInput, Prisma.cobroUncheckedUpdateInput>;
};
/**
 * cobro delete
 */
export type cobroDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cobro
     */
    select?: Prisma.cobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cobro
     */
    omit?: Prisma.cobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cobroInclude<ExtArgs> | null;
    /**
     * Filter which cobro to delete.
     */
    where: Prisma.cobroWhereUniqueInput;
};
/**
 * cobro deleteMany
 */
export type cobroDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which cobros to delete
     */
    where?: Prisma.cobroWhereInput;
    /**
     * Limit how many cobros to delete.
     */
    limit?: number;
};
/**
 * cobro.liquidacioncobro
 */
export type cobro$liquidacioncobroArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * cobro without action
 */
export type cobroDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cobro
     */
    select?: Prisma.cobroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cobro
     */
    omit?: Prisma.cobroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cobroInclude<ExtArgs> | null;
};
//# sourceMappingURL=cobro.d.ts.map