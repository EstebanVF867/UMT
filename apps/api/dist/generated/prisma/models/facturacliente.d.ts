import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model facturacliente
 *
 */
export type facturaclienteModel = runtime.Types.Result.DefaultSelection<Prisma.$facturaclientePayload>;
export type AggregateFacturacliente = {
    _count: FacturaclienteCountAggregateOutputType | null;
    _avg: FacturaclienteAvgAggregateOutputType | null;
    _sum: FacturaclienteSumAggregateOutputType | null;
    _min: FacturaclienteMinAggregateOutputType | null;
    _max: FacturaclienteMaxAggregateOutputType | null;
};
export type FacturaclienteAvgAggregateOutputType = {
    base: runtime.Decimal | null;
    iva: runtime.Decimal | null;
    total: runtime.Decimal | null;
};
export type FacturaclienteSumAggregateOutputType = {
    base: runtime.Decimal | null;
    iva: runtime.Decimal | null;
    total: runtime.Decimal | null;
};
export type FacturaclienteMinAggregateOutputType = {
    id: string | null;
    clienteId: string | null;
    contratacionId: string | null;
    actuacionId: string | null;
    numero: string | null;
    fechaFactura: Date | null;
    vencimiento: Date | null;
    concepto: string | null;
    base: runtime.Decimal | null;
    iva: runtime.Decimal | null;
    total: runtime.Decimal | null;
    estado: $Enums.facturacliente_estado | null;
    asientoId: string | null;
    cuentaContableId: string | null;
    centroAnaliticoId: string | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FacturaclienteMaxAggregateOutputType = {
    id: string | null;
    clienteId: string | null;
    contratacionId: string | null;
    actuacionId: string | null;
    numero: string | null;
    fechaFactura: Date | null;
    vencimiento: Date | null;
    concepto: string | null;
    base: runtime.Decimal | null;
    iva: runtime.Decimal | null;
    total: runtime.Decimal | null;
    estado: $Enums.facturacliente_estado | null;
    asientoId: string | null;
    cuentaContableId: string | null;
    centroAnaliticoId: string | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FacturaclienteCountAggregateOutputType = {
    id: number;
    clienteId: number;
    contratacionId: number;
    actuacionId: number;
    numero: number;
    fechaFactura: number;
    vencimiento: number;
    concepto: number;
    base: number;
    iva: number;
    total: number;
    estado: number;
    asientoId: number;
    cuentaContableId: number;
    centroAnaliticoId: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FacturaclienteAvgAggregateInputType = {
    base?: true;
    iva?: true;
    total?: true;
};
export type FacturaclienteSumAggregateInputType = {
    base?: true;
    iva?: true;
    total?: true;
};
export type FacturaclienteMinAggregateInputType = {
    id?: true;
    clienteId?: true;
    contratacionId?: true;
    actuacionId?: true;
    numero?: true;
    fechaFactura?: true;
    vencimiento?: true;
    concepto?: true;
    base?: true;
    iva?: true;
    total?: true;
    estado?: true;
    asientoId?: true;
    cuentaContableId?: true;
    centroAnaliticoId?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FacturaclienteMaxAggregateInputType = {
    id?: true;
    clienteId?: true;
    contratacionId?: true;
    actuacionId?: true;
    numero?: true;
    fechaFactura?: true;
    vencimiento?: true;
    concepto?: true;
    base?: true;
    iva?: true;
    total?: true;
    estado?: true;
    asientoId?: true;
    cuentaContableId?: true;
    centroAnaliticoId?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FacturaclienteCountAggregateInputType = {
    id?: true;
    clienteId?: true;
    contratacionId?: true;
    actuacionId?: true;
    numero?: true;
    fechaFactura?: true;
    vencimiento?: true;
    concepto?: true;
    base?: true;
    iva?: true;
    total?: true;
    estado?: true;
    asientoId?: true;
    cuentaContableId?: true;
    centroAnaliticoId?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FacturaclienteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which facturacliente to aggregate.
     */
    where?: Prisma.facturaclienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of facturaclientes to fetch.
     */
    orderBy?: Prisma.facturaclienteOrderByWithRelationInput | Prisma.facturaclienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.facturaclienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` facturaclientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` facturaclientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned facturaclientes
    **/
    _count?: true | FacturaclienteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: FacturaclienteAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: FacturaclienteSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FacturaclienteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FacturaclienteMaxAggregateInputType;
};
export type GetFacturaclienteAggregateType<T extends FacturaclienteAggregateArgs> = {
    [P in keyof T & keyof AggregateFacturacliente]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFacturacliente[P]> : Prisma.GetScalarType<T[P], AggregateFacturacliente[P]>;
};
export type facturaclienteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaclienteWhereInput;
    orderBy?: Prisma.facturaclienteOrderByWithAggregationInput | Prisma.facturaclienteOrderByWithAggregationInput[];
    by: Prisma.FacturaclienteScalarFieldEnum[] | Prisma.FacturaclienteScalarFieldEnum;
    having?: Prisma.facturaclienteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FacturaclienteCountAggregateInputType | true;
    _avg?: FacturaclienteAvgAggregateInputType;
    _sum?: FacturaclienteSumAggregateInputType;
    _min?: FacturaclienteMinAggregateInputType;
    _max?: FacturaclienteMaxAggregateInputType;
};
export type FacturaclienteGroupByOutputType = {
    id: string;
    clienteId: string;
    contratacionId: string | null;
    actuacionId: string | null;
    numero: string;
    fechaFactura: Date;
    vencimiento: Date | null;
    concepto: string;
    base: runtime.Decimal;
    iva: runtime.Decimal;
    total: runtime.Decimal;
    estado: $Enums.facturacliente_estado;
    asientoId: string | null;
    cuentaContableId: string | null;
    centroAnaliticoId: string | null;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: FacturaclienteCountAggregateOutputType | null;
    _avg: FacturaclienteAvgAggregateOutputType | null;
    _sum: FacturaclienteSumAggregateOutputType | null;
    _min: FacturaclienteMinAggregateOutputType | null;
    _max: FacturaclienteMaxAggregateOutputType | null;
};
export type GetFacturaclienteGroupByPayload<T extends facturaclienteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FacturaclienteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FacturaclienteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FacturaclienteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FacturaclienteGroupByOutputType[P]>;
}>>;
export type facturaclienteWhereInput = {
    AND?: Prisma.facturaclienteWhereInput | Prisma.facturaclienteWhereInput[];
    OR?: Prisma.facturaclienteWhereInput[];
    NOT?: Prisma.facturaclienteWhereInput | Prisma.facturaclienteWhereInput[];
    id?: Prisma.StringFilter<"facturacliente"> | string;
    clienteId?: Prisma.StringFilter<"facturacliente"> | string;
    contratacionId?: Prisma.StringNullableFilter<"facturacliente"> | string | null;
    actuacionId?: Prisma.StringNullableFilter<"facturacliente"> | string | null;
    numero?: Prisma.StringFilter<"facturacliente"> | string;
    fechaFactura?: Prisma.DateTimeFilter<"facturacliente"> | Date | string;
    vencimiento?: Prisma.DateTimeNullableFilter<"facturacliente"> | Date | string | null;
    concepto?: Prisma.StringFilter<"facturacliente"> | string;
    base?: Prisma.DecimalFilter<"facturacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFilter<"facturacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"facturacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFilter<"facturacliente"> | $Enums.facturacliente_estado;
    asientoId?: Prisma.StringNullableFilter<"facturacliente"> | string | null;
    cuentaContableId?: Prisma.StringNullableFilter<"facturacliente"> | string | null;
    centroAnaliticoId?: Prisma.StringNullableFilter<"facturacliente"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"facturacliente"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"facturacliente"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"facturacliente"> | Date | string;
    derechocobro?: Prisma.XOR<Prisma.DerechocobroNullableScalarRelationFilter, Prisma.derechocobroWhereInput> | null;
    actuacion?: Prisma.XOR<Prisma.ActuacionNullableScalarRelationFilter, Prisma.actuacionWhereInput> | null;
    centroanalitico?: Prisma.XOR<Prisma.CentroanaliticoNullableScalarRelationFilter, Prisma.centroanaliticoWhereInput> | null;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.clienteWhereInput>;
    contratacion?: Prisma.XOR<Prisma.ContratacionNullableScalarRelationFilter, Prisma.contratacionWhereInput> | null;
    cuentacontable?: Prisma.XOR<Prisma.CuentacontableNullableScalarRelationFilter, Prisma.cuentacontableWhereInput> | null;
    facturarectificativacliente?: Prisma.FacturarectificativaclienteListRelationFilter;
};
export type facturaclienteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    contratacionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    actuacionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    fechaFactura?: Prisma.SortOrder;
    vencimiento?: Prisma.SortOrderInput | Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    cuentaContableId?: Prisma.SortOrderInput | Prisma.SortOrder;
    centroAnaliticoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    derechocobro?: Prisma.derechocobroOrderByWithRelationInput;
    actuacion?: Prisma.actuacionOrderByWithRelationInput;
    centroanalitico?: Prisma.centroanaliticoOrderByWithRelationInput;
    cliente?: Prisma.clienteOrderByWithRelationInput;
    contratacion?: Prisma.contratacionOrderByWithRelationInput;
    cuentacontable?: Prisma.cuentacontableOrderByWithRelationInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteOrderByRelationAggregateInput;
    _relevance?: Prisma.facturaclienteOrderByRelevanceInput;
};
export type facturaclienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    clienteId_numero?: Prisma.facturaclienteClienteIdNumeroCompoundUniqueInput;
    AND?: Prisma.facturaclienteWhereInput | Prisma.facturaclienteWhereInput[];
    OR?: Prisma.facturaclienteWhereInput[];
    NOT?: Prisma.facturaclienteWhereInput | Prisma.facturaclienteWhereInput[];
    clienteId?: Prisma.StringFilter<"facturacliente"> | string;
    contratacionId?: Prisma.StringNullableFilter<"facturacliente"> | string | null;
    actuacionId?: Prisma.StringNullableFilter<"facturacliente"> | string | null;
    numero?: Prisma.StringFilter<"facturacliente"> | string;
    fechaFactura?: Prisma.DateTimeFilter<"facturacliente"> | Date | string;
    vencimiento?: Prisma.DateTimeNullableFilter<"facturacliente"> | Date | string | null;
    concepto?: Prisma.StringFilter<"facturacliente"> | string;
    base?: Prisma.DecimalFilter<"facturacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFilter<"facturacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"facturacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFilter<"facturacliente"> | $Enums.facturacliente_estado;
    asientoId?: Prisma.StringNullableFilter<"facturacliente"> | string | null;
    cuentaContableId?: Prisma.StringNullableFilter<"facturacliente"> | string | null;
    centroAnaliticoId?: Prisma.StringNullableFilter<"facturacliente"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"facturacliente"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"facturacliente"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"facturacliente"> | Date | string;
    derechocobro?: Prisma.XOR<Prisma.DerechocobroNullableScalarRelationFilter, Prisma.derechocobroWhereInput> | null;
    actuacion?: Prisma.XOR<Prisma.ActuacionNullableScalarRelationFilter, Prisma.actuacionWhereInput> | null;
    centroanalitico?: Prisma.XOR<Prisma.CentroanaliticoNullableScalarRelationFilter, Prisma.centroanaliticoWhereInput> | null;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.clienteWhereInput>;
    contratacion?: Prisma.XOR<Prisma.ContratacionNullableScalarRelationFilter, Prisma.contratacionWhereInput> | null;
    cuentacontable?: Prisma.XOR<Prisma.CuentacontableNullableScalarRelationFilter, Prisma.cuentacontableWhereInput> | null;
    facturarectificativacliente?: Prisma.FacturarectificativaclienteListRelationFilter;
}, "id" | "clienteId_numero">;
export type facturaclienteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    contratacionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    actuacionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    fechaFactura?: Prisma.SortOrder;
    vencimiento?: Prisma.SortOrderInput | Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    cuentaContableId?: Prisma.SortOrderInput | Prisma.SortOrder;
    centroAnaliticoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.facturaclienteCountOrderByAggregateInput;
    _avg?: Prisma.facturaclienteAvgOrderByAggregateInput;
    _max?: Prisma.facturaclienteMaxOrderByAggregateInput;
    _min?: Prisma.facturaclienteMinOrderByAggregateInput;
    _sum?: Prisma.facturaclienteSumOrderByAggregateInput;
};
export type facturaclienteScalarWhereWithAggregatesInput = {
    AND?: Prisma.facturaclienteScalarWhereWithAggregatesInput | Prisma.facturaclienteScalarWhereWithAggregatesInput[];
    OR?: Prisma.facturaclienteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.facturaclienteScalarWhereWithAggregatesInput | Prisma.facturaclienteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"facturacliente"> | string;
    clienteId?: Prisma.StringWithAggregatesFilter<"facturacliente"> | string;
    contratacionId?: Prisma.StringNullableWithAggregatesFilter<"facturacliente"> | string | null;
    actuacionId?: Prisma.StringNullableWithAggregatesFilter<"facturacliente"> | string | null;
    numero?: Prisma.StringWithAggregatesFilter<"facturacliente"> | string;
    fechaFactura?: Prisma.DateTimeWithAggregatesFilter<"facturacliente"> | Date | string;
    vencimiento?: Prisma.DateTimeNullableWithAggregatesFilter<"facturacliente"> | Date | string | null;
    concepto?: Prisma.StringWithAggregatesFilter<"facturacliente"> | string;
    base?: Prisma.DecimalWithAggregatesFilter<"facturacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalWithAggregatesFilter<"facturacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalWithAggregatesFilter<"facturacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoWithAggregatesFilter<"facturacliente"> | $Enums.facturacliente_estado;
    asientoId?: Prisma.StringNullableWithAggregatesFilter<"facturacliente"> | string | null;
    cuentaContableId?: Prisma.StringNullableWithAggregatesFilter<"facturacliente"> | string | null;
    centroAnaliticoId?: Prisma.StringNullableWithAggregatesFilter<"facturacliente"> | string | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"facturacliente"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"facturacliente"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"facturacliente"> | Date | string;
};
export type facturaclienteCreateInput = {
    id: string;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    derechocobro?: Prisma.derechocobroCreateNestedOneWithoutFacturaclienteInput;
    actuacion?: Prisma.actuacionCreateNestedOneWithoutFacturaclienteInput;
    centroanalitico?: Prisma.centroanaliticoCreateNestedOneWithoutFacturaclienteInput;
    cliente: Prisma.clienteCreateNestedOneWithoutFacturaclienteInput;
    contratacion?: Prisma.contratacionCreateNestedOneWithoutFacturaclienteInput;
    cuentacontable?: Prisma.cuentacontableCreateNestedOneWithoutFacturaclienteInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteCreateNestedManyWithoutFacturaclienteInput;
};
export type facturaclienteUncheckedCreateInput = {
    id: string;
    clienteId: string;
    contratacionId?: string | null;
    actuacionId?: string | null;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    centroAnaliticoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    derechocobro?: Prisma.derechocobroUncheckedCreateNestedOneWithoutFacturaclienteInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteUncheckedCreateNestedManyWithoutFacturaclienteInput;
};
export type facturaclienteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    derechocobro?: Prisma.derechocobroUpdateOneWithoutFacturaclienteNestedInput;
    actuacion?: Prisma.actuacionUpdateOneWithoutFacturaclienteNestedInput;
    centroanalitico?: Prisma.centroanaliticoUpdateOneWithoutFacturaclienteNestedInput;
    cliente?: Prisma.clienteUpdateOneRequiredWithoutFacturaclienteNestedInput;
    contratacion?: Prisma.contratacionUpdateOneWithoutFacturaclienteNestedInput;
    cuentacontable?: Prisma.cuentacontableUpdateOneWithoutFacturaclienteNestedInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteUpdateManyWithoutFacturaclienteNestedInput;
};
export type facturaclienteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    contratacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    derechocobro?: Prisma.derechocobroUncheckedUpdateOneWithoutFacturaclienteNestedInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteUncheckedUpdateManyWithoutFacturaclienteNestedInput;
};
export type facturaclienteCreateManyInput = {
    id: string;
    clienteId: string;
    contratacionId?: string | null;
    actuacionId?: string | null;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    centroAnaliticoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type facturaclienteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type facturaclienteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    contratacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FacturaclienteListRelationFilter = {
    every?: Prisma.facturaclienteWhereInput;
    some?: Prisma.facturaclienteWhereInput;
    none?: Prisma.facturaclienteWhereInput;
};
export type facturaclienteOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FacturaclienteScalarRelationFilter = {
    is?: Prisma.facturaclienteWhereInput;
    isNot?: Prisma.facturaclienteWhereInput;
};
export type facturaclienteOrderByRelevanceInput = {
    fields: Prisma.facturaclienteOrderByRelevanceFieldEnum | Prisma.facturaclienteOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type facturaclienteClienteIdNumeroCompoundUniqueInput = {
    clienteId: string;
    numero: string;
};
export type facturaclienteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    contratacionId?: Prisma.SortOrder;
    actuacionId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    fechaFactura?: Prisma.SortOrder;
    vencimiento?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    cuentaContableId?: Prisma.SortOrder;
    centroAnaliticoId?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type facturaclienteAvgOrderByAggregateInput = {
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type facturaclienteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    contratacionId?: Prisma.SortOrder;
    actuacionId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    fechaFactura?: Prisma.SortOrder;
    vencimiento?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    cuentaContableId?: Prisma.SortOrder;
    centroAnaliticoId?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type facturaclienteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    contratacionId?: Prisma.SortOrder;
    actuacionId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    fechaFactura?: Prisma.SortOrder;
    vencimiento?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    cuentaContableId?: Prisma.SortOrder;
    centroAnaliticoId?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type facturaclienteSumOrderByAggregateInput = {
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type facturaclienteCreateNestedManyWithoutActuacionInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutActuacionInput, Prisma.facturaclienteUncheckedCreateWithoutActuacionInput> | Prisma.facturaclienteCreateWithoutActuacionInput[] | Prisma.facturaclienteUncheckedCreateWithoutActuacionInput[];
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutActuacionInput | Prisma.facturaclienteCreateOrConnectWithoutActuacionInput[];
    createMany?: Prisma.facturaclienteCreateManyActuacionInputEnvelope;
    connect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
};
export type facturaclienteUncheckedCreateNestedManyWithoutActuacionInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutActuacionInput, Prisma.facturaclienteUncheckedCreateWithoutActuacionInput> | Prisma.facturaclienteCreateWithoutActuacionInput[] | Prisma.facturaclienteUncheckedCreateWithoutActuacionInput[];
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutActuacionInput | Prisma.facturaclienteCreateOrConnectWithoutActuacionInput[];
    createMany?: Prisma.facturaclienteCreateManyActuacionInputEnvelope;
    connect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
};
export type facturaclienteUpdateManyWithoutActuacionNestedInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutActuacionInput, Prisma.facturaclienteUncheckedCreateWithoutActuacionInput> | Prisma.facturaclienteCreateWithoutActuacionInput[] | Prisma.facturaclienteUncheckedCreateWithoutActuacionInput[];
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutActuacionInput | Prisma.facturaclienteCreateOrConnectWithoutActuacionInput[];
    upsert?: Prisma.facturaclienteUpsertWithWhereUniqueWithoutActuacionInput | Prisma.facturaclienteUpsertWithWhereUniqueWithoutActuacionInput[];
    createMany?: Prisma.facturaclienteCreateManyActuacionInputEnvelope;
    set?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    disconnect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    delete?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    connect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    update?: Prisma.facturaclienteUpdateWithWhereUniqueWithoutActuacionInput | Prisma.facturaclienteUpdateWithWhereUniqueWithoutActuacionInput[];
    updateMany?: Prisma.facturaclienteUpdateManyWithWhereWithoutActuacionInput | Prisma.facturaclienteUpdateManyWithWhereWithoutActuacionInput[];
    deleteMany?: Prisma.facturaclienteScalarWhereInput | Prisma.facturaclienteScalarWhereInput[];
};
export type facturaclienteUncheckedUpdateManyWithoutActuacionNestedInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutActuacionInput, Prisma.facturaclienteUncheckedCreateWithoutActuacionInput> | Prisma.facturaclienteCreateWithoutActuacionInput[] | Prisma.facturaclienteUncheckedCreateWithoutActuacionInput[];
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutActuacionInput | Prisma.facturaclienteCreateOrConnectWithoutActuacionInput[];
    upsert?: Prisma.facturaclienteUpsertWithWhereUniqueWithoutActuacionInput | Prisma.facturaclienteUpsertWithWhereUniqueWithoutActuacionInput[];
    createMany?: Prisma.facturaclienteCreateManyActuacionInputEnvelope;
    set?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    disconnect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    delete?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    connect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    update?: Prisma.facturaclienteUpdateWithWhereUniqueWithoutActuacionInput | Prisma.facturaclienteUpdateWithWhereUniqueWithoutActuacionInput[];
    updateMany?: Prisma.facturaclienteUpdateManyWithWhereWithoutActuacionInput | Prisma.facturaclienteUpdateManyWithWhereWithoutActuacionInput[];
    deleteMany?: Prisma.facturaclienteScalarWhereInput | Prisma.facturaclienteScalarWhereInput[];
};
export type facturaclienteCreateNestedManyWithoutCentroanaliticoInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutCentroanaliticoInput, Prisma.facturaclienteUncheckedCreateWithoutCentroanaliticoInput> | Prisma.facturaclienteCreateWithoutCentroanaliticoInput[] | Prisma.facturaclienteUncheckedCreateWithoutCentroanaliticoInput[];
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutCentroanaliticoInput | Prisma.facturaclienteCreateOrConnectWithoutCentroanaliticoInput[];
    createMany?: Prisma.facturaclienteCreateManyCentroanaliticoInputEnvelope;
    connect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
};
export type facturaclienteUncheckedCreateNestedManyWithoutCentroanaliticoInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutCentroanaliticoInput, Prisma.facturaclienteUncheckedCreateWithoutCentroanaliticoInput> | Prisma.facturaclienteCreateWithoutCentroanaliticoInput[] | Prisma.facturaclienteUncheckedCreateWithoutCentroanaliticoInput[];
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutCentroanaliticoInput | Prisma.facturaclienteCreateOrConnectWithoutCentroanaliticoInput[];
    createMany?: Prisma.facturaclienteCreateManyCentroanaliticoInputEnvelope;
    connect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
};
export type facturaclienteUpdateManyWithoutCentroanaliticoNestedInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutCentroanaliticoInput, Prisma.facturaclienteUncheckedCreateWithoutCentroanaliticoInput> | Prisma.facturaclienteCreateWithoutCentroanaliticoInput[] | Prisma.facturaclienteUncheckedCreateWithoutCentroanaliticoInput[];
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutCentroanaliticoInput | Prisma.facturaclienteCreateOrConnectWithoutCentroanaliticoInput[];
    upsert?: Prisma.facturaclienteUpsertWithWhereUniqueWithoutCentroanaliticoInput | Prisma.facturaclienteUpsertWithWhereUniqueWithoutCentroanaliticoInput[];
    createMany?: Prisma.facturaclienteCreateManyCentroanaliticoInputEnvelope;
    set?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    disconnect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    delete?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    connect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    update?: Prisma.facturaclienteUpdateWithWhereUniqueWithoutCentroanaliticoInput | Prisma.facturaclienteUpdateWithWhereUniqueWithoutCentroanaliticoInput[];
    updateMany?: Prisma.facturaclienteUpdateManyWithWhereWithoutCentroanaliticoInput | Prisma.facturaclienteUpdateManyWithWhereWithoutCentroanaliticoInput[];
    deleteMany?: Prisma.facturaclienteScalarWhereInput | Prisma.facturaclienteScalarWhereInput[];
};
export type facturaclienteUncheckedUpdateManyWithoutCentroanaliticoNestedInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutCentroanaliticoInput, Prisma.facturaclienteUncheckedCreateWithoutCentroanaliticoInput> | Prisma.facturaclienteCreateWithoutCentroanaliticoInput[] | Prisma.facturaclienteUncheckedCreateWithoutCentroanaliticoInput[];
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutCentroanaliticoInput | Prisma.facturaclienteCreateOrConnectWithoutCentroanaliticoInput[];
    upsert?: Prisma.facturaclienteUpsertWithWhereUniqueWithoutCentroanaliticoInput | Prisma.facturaclienteUpsertWithWhereUniqueWithoutCentroanaliticoInput[];
    createMany?: Prisma.facturaclienteCreateManyCentroanaliticoInputEnvelope;
    set?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    disconnect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    delete?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    connect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    update?: Prisma.facturaclienteUpdateWithWhereUniqueWithoutCentroanaliticoInput | Prisma.facturaclienteUpdateWithWhereUniqueWithoutCentroanaliticoInput[];
    updateMany?: Prisma.facturaclienteUpdateManyWithWhereWithoutCentroanaliticoInput | Prisma.facturaclienteUpdateManyWithWhereWithoutCentroanaliticoInput[];
    deleteMany?: Prisma.facturaclienteScalarWhereInput | Prisma.facturaclienteScalarWhereInput[];
};
export type facturaclienteCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutClienteInput, Prisma.facturaclienteUncheckedCreateWithoutClienteInput> | Prisma.facturaclienteCreateWithoutClienteInput[] | Prisma.facturaclienteUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutClienteInput | Prisma.facturaclienteCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.facturaclienteCreateManyClienteInputEnvelope;
    connect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
};
export type facturaclienteUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutClienteInput, Prisma.facturaclienteUncheckedCreateWithoutClienteInput> | Prisma.facturaclienteCreateWithoutClienteInput[] | Prisma.facturaclienteUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutClienteInput | Prisma.facturaclienteCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.facturaclienteCreateManyClienteInputEnvelope;
    connect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
};
export type facturaclienteUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutClienteInput, Prisma.facturaclienteUncheckedCreateWithoutClienteInput> | Prisma.facturaclienteCreateWithoutClienteInput[] | Prisma.facturaclienteUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutClienteInput | Prisma.facturaclienteCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.facturaclienteUpsertWithWhereUniqueWithoutClienteInput | Prisma.facturaclienteUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.facturaclienteCreateManyClienteInputEnvelope;
    set?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    disconnect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    delete?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    connect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    update?: Prisma.facturaclienteUpdateWithWhereUniqueWithoutClienteInput | Prisma.facturaclienteUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.facturaclienteUpdateManyWithWhereWithoutClienteInput | Prisma.facturaclienteUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.facturaclienteScalarWhereInput | Prisma.facturaclienteScalarWhereInput[];
};
export type facturaclienteUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutClienteInput, Prisma.facturaclienteUncheckedCreateWithoutClienteInput> | Prisma.facturaclienteCreateWithoutClienteInput[] | Prisma.facturaclienteUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutClienteInput | Prisma.facturaclienteCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.facturaclienteUpsertWithWhereUniqueWithoutClienteInput | Prisma.facturaclienteUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.facturaclienteCreateManyClienteInputEnvelope;
    set?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    disconnect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    delete?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    connect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    update?: Prisma.facturaclienteUpdateWithWhereUniqueWithoutClienteInput | Prisma.facturaclienteUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.facturaclienteUpdateManyWithWhereWithoutClienteInput | Prisma.facturaclienteUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.facturaclienteScalarWhereInput | Prisma.facturaclienteScalarWhereInput[];
};
export type facturaclienteCreateNestedManyWithoutContratacionInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutContratacionInput, Prisma.facturaclienteUncheckedCreateWithoutContratacionInput> | Prisma.facturaclienteCreateWithoutContratacionInput[] | Prisma.facturaclienteUncheckedCreateWithoutContratacionInput[];
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutContratacionInput | Prisma.facturaclienteCreateOrConnectWithoutContratacionInput[];
    createMany?: Prisma.facturaclienteCreateManyContratacionInputEnvelope;
    connect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
};
export type facturaclienteUncheckedCreateNestedManyWithoutContratacionInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutContratacionInput, Prisma.facturaclienteUncheckedCreateWithoutContratacionInput> | Prisma.facturaclienteCreateWithoutContratacionInput[] | Prisma.facturaclienteUncheckedCreateWithoutContratacionInput[];
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutContratacionInput | Prisma.facturaclienteCreateOrConnectWithoutContratacionInput[];
    createMany?: Prisma.facturaclienteCreateManyContratacionInputEnvelope;
    connect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
};
export type facturaclienteUpdateManyWithoutContratacionNestedInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutContratacionInput, Prisma.facturaclienteUncheckedCreateWithoutContratacionInput> | Prisma.facturaclienteCreateWithoutContratacionInput[] | Prisma.facturaclienteUncheckedCreateWithoutContratacionInput[];
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutContratacionInput | Prisma.facturaclienteCreateOrConnectWithoutContratacionInput[];
    upsert?: Prisma.facturaclienteUpsertWithWhereUniqueWithoutContratacionInput | Prisma.facturaclienteUpsertWithWhereUniqueWithoutContratacionInput[];
    createMany?: Prisma.facturaclienteCreateManyContratacionInputEnvelope;
    set?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    disconnect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    delete?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    connect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    update?: Prisma.facturaclienteUpdateWithWhereUniqueWithoutContratacionInput | Prisma.facturaclienteUpdateWithWhereUniqueWithoutContratacionInput[];
    updateMany?: Prisma.facturaclienteUpdateManyWithWhereWithoutContratacionInput | Prisma.facturaclienteUpdateManyWithWhereWithoutContratacionInput[];
    deleteMany?: Prisma.facturaclienteScalarWhereInput | Prisma.facturaclienteScalarWhereInput[];
};
export type facturaclienteUncheckedUpdateManyWithoutContratacionNestedInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutContratacionInput, Prisma.facturaclienteUncheckedCreateWithoutContratacionInput> | Prisma.facturaclienteCreateWithoutContratacionInput[] | Prisma.facturaclienteUncheckedCreateWithoutContratacionInput[];
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutContratacionInput | Prisma.facturaclienteCreateOrConnectWithoutContratacionInput[];
    upsert?: Prisma.facturaclienteUpsertWithWhereUniqueWithoutContratacionInput | Prisma.facturaclienteUpsertWithWhereUniqueWithoutContratacionInput[];
    createMany?: Prisma.facturaclienteCreateManyContratacionInputEnvelope;
    set?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    disconnect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    delete?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    connect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    update?: Prisma.facturaclienteUpdateWithWhereUniqueWithoutContratacionInput | Prisma.facturaclienteUpdateWithWhereUniqueWithoutContratacionInput[];
    updateMany?: Prisma.facturaclienteUpdateManyWithWhereWithoutContratacionInput | Prisma.facturaclienteUpdateManyWithWhereWithoutContratacionInput[];
    deleteMany?: Prisma.facturaclienteScalarWhereInput | Prisma.facturaclienteScalarWhereInput[];
};
export type facturaclienteCreateNestedManyWithoutCuentacontableInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutCuentacontableInput, Prisma.facturaclienteUncheckedCreateWithoutCuentacontableInput> | Prisma.facturaclienteCreateWithoutCuentacontableInput[] | Prisma.facturaclienteUncheckedCreateWithoutCuentacontableInput[];
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutCuentacontableInput | Prisma.facturaclienteCreateOrConnectWithoutCuentacontableInput[];
    createMany?: Prisma.facturaclienteCreateManyCuentacontableInputEnvelope;
    connect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
};
export type facturaclienteUncheckedCreateNestedManyWithoutCuentacontableInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutCuentacontableInput, Prisma.facturaclienteUncheckedCreateWithoutCuentacontableInput> | Prisma.facturaclienteCreateWithoutCuentacontableInput[] | Prisma.facturaclienteUncheckedCreateWithoutCuentacontableInput[];
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutCuentacontableInput | Prisma.facturaclienteCreateOrConnectWithoutCuentacontableInput[];
    createMany?: Prisma.facturaclienteCreateManyCuentacontableInputEnvelope;
    connect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
};
export type facturaclienteUpdateManyWithoutCuentacontableNestedInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutCuentacontableInput, Prisma.facturaclienteUncheckedCreateWithoutCuentacontableInput> | Prisma.facturaclienteCreateWithoutCuentacontableInput[] | Prisma.facturaclienteUncheckedCreateWithoutCuentacontableInput[];
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutCuentacontableInput | Prisma.facturaclienteCreateOrConnectWithoutCuentacontableInput[];
    upsert?: Prisma.facturaclienteUpsertWithWhereUniqueWithoutCuentacontableInput | Prisma.facturaclienteUpsertWithWhereUniqueWithoutCuentacontableInput[];
    createMany?: Prisma.facturaclienteCreateManyCuentacontableInputEnvelope;
    set?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    disconnect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    delete?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    connect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    update?: Prisma.facturaclienteUpdateWithWhereUniqueWithoutCuentacontableInput | Prisma.facturaclienteUpdateWithWhereUniqueWithoutCuentacontableInput[];
    updateMany?: Prisma.facturaclienteUpdateManyWithWhereWithoutCuentacontableInput | Prisma.facturaclienteUpdateManyWithWhereWithoutCuentacontableInput[];
    deleteMany?: Prisma.facturaclienteScalarWhereInput | Prisma.facturaclienteScalarWhereInput[];
};
export type facturaclienteUncheckedUpdateManyWithoutCuentacontableNestedInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutCuentacontableInput, Prisma.facturaclienteUncheckedCreateWithoutCuentacontableInput> | Prisma.facturaclienteCreateWithoutCuentacontableInput[] | Prisma.facturaclienteUncheckedCreateWithoutCuentacontableInput[];
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutCuentacontableInput | Prisma.facturaclienteCreateOrConnectWithoutCuentacontableInput[];
    upsert?: Prisma.facturaclienteUpsertWithWhereUniqueWithoutCuentacontableInput | Prisma.facturaclienteUpsertWithWhereUniqueWithoutCuentacontableInput[];
    createMany?: Prisma.facturaclienteCreateManyCuentacontableInputEnvelope;
    set?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    disconnect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    delete?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    connect?: Prisma.facturaclienteWhereUniqueInput | Prisma.facturaclienteWhereUniqueInput[];
    update?: Prisma.facturaclienteUpdateWithWhereUniqueWithoutCuentacontableInput | Prisma.facturaclienteUpdateWithWhereUniqueWithoutCuentacontableInput[];
    updateMany?: Prisma.facturaclienteUpdateManyWithWhereWithoutCuentacontableInput | Prisma.facturaclienteUpdateManyWithWhereWithoutCuentacontableInput[];
    deleteMany?: Prisma.facturaclienteScalarWhereInput | Prisma.facturaclienteScalarWhereInput[];
};
export type facturaclienteCreateNestedOneWithoutDerechocobroInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutDerechocobroInput, Prisma.facturaclienteUncheckedCreateWithoutDerechocobroInput>;
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutDerechocobroInput;
    connect?: Prisma.facturaclienteWhereUniqueInput;
};
export type facturaclienteUpdateOneRequiredWithoutDerechocobroNestedInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutDerechocobroInput, Prisma.facturaclienteUncheckedCreateWithoutDerechocobroInput>;
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutDerechocobroInput;
    upsert?: Prisma.facturaclienteUpsertWithoutDerechocobroInput;
    connect?: Prisma.facturaclienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.facturaclienteUpdateToOneWithWhereWithoutDerechocobroInput, Prisma.facturaclienteUpdateWithoutDerechocobroInput>, Prisma.facturaclienteUncheckedUpdateWithoutDerechocobroInput>;
};
export type Enumfacturacliente_estadoFieldUpdateOperationsInput = {
    set?: $Enums.facturacliente_estado;
};
export type facturaclienteCreateNestedOneWithoutFacturarectificativaclienteInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutFacturarectificativaclienteInput, Prisma.facturaclienteUncheckedCreateWithoutFacturarectificativaclienteInput>;
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutFacturarectificativaclienteInput;
    connect?: Prisma.facturaclienteWhereUniqueInput;
};
export type facturaclienteUpdateOneRequiredWithoutFacturarectificativaclienteNestedInput = {
    create?: Prisma.XOR<Prisma.facturaclienteCreateWithoutFacturarectificativaclienteInput, Prisma.facturaclienteUncheckedCreateWithoutFacturarectificativaclienteInput>;
    connectOrCreate?: Prisma.facturaclienteCreateOrConnectWithoutFacturarectificativaclienteInput;
    upsert?: Prisma.facturaclienteUpsertWithoutFacturarectificativaclienteInput;
    connect?: Prisma.facturaclienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.facturaclienteUpdateToOneWithWhereWithoutFacturarectificativaclienteInput, Prisma.facturaclienteUpdateWithoutFacturarectificativaclienteInput>, Prisma.facturaclienteUncheckedUpdateWithoutFacturarectificativaclienteInput>;
};
export type facturaclienteCreateWithoutActuacionInput = {
    id: string;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    derechocobro?: Prisma.derechocobroCreateNestedOneWithoutFacturaclienteInput;
    centroanalitico?: Prisma.centroanaliticoCreateNestedOneWithoutFacturaclienteInput;
    cliente: Prisma.clienteCreateNestedOneWithoutFacturaclienteInput;
    contratacion?: Prisma.contratacionCreateNestedOneWithoutFacturaclienteInput;
    cuentacontable?: Prisma.cuentacontableCreateNestedOneWithoutFacturaclienteInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteCreateNestedManyWithoutFacturaclienteInput;
};
export type facturaclienteUncheckedCreateWithoutActuacionInput = {
    id: string;
    clienteId: string;
    contratacionId?: string | null;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    centroAnaliticoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    derechocobro?: Prisma.derechocobroUncheckedCreateNestedOneWithoutFacturaclienteInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteUncheckedCreateNestedManyWithoutFacturaclienteInput;
};
export type facturaclienteCreateOrConnectWithoutActuacionInput = {
    where: Prisma.facturaclienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaclienteCreateWithoutActuacionInput, Prisma.facturaclienteUncheckedCreateWithoutActuacionInput>;
};
export type facturaclienteCreateManyActuacionInputEnvelope = {
    data: Prisma.facturaclienteCreateManyActuacionInput | Prisma.facturaclienteCreateManyActuacionInput[];
    skipDuplicates?: boolean;
};
export type facturaclienteUpsertWithWhereUniqueWithoutActuacionInput = {
    where: Prisma.facturaclienteWhereUniqueInput;
    update: Prisma.XOR<Prisma.facturaclienteUpdateWithoutActuacionInput, Prisma.facturaclienteUncheckedUpdateWithoutActuacionInput>;
    create: Prisma.XOR<Prisma.facturaclienteCreateWithoutActuacionInput, Prisma.facturaclienteUncheckedCreateWithoutActuacionInput>;
};
export type facturaclienteUpdateWithWhereUniqueWithoutActuacionInput = {
    where: Prisma.facturaclienteWhereUniqueInput;
    data: Prisma.XOR<Prisma.facturaclienteUpdateWithoutActuacionInput, Prisma.facturaclienteUncheckedUpdateWithoutActuacionInput>;
};
export type facturaclienteUpdateManyWithWhereWithoutActuacionInput = {
    where: Prisma.facturaclienteScalarWhereInput;
    data: Prisma.XOR<Prisma.facturaclienteUpdateManyMutationInput, Prisma.facturaclienteUncheckedUpdateManyWithoutActuacionInput>;
};
export type facturaclienteScalarWhereInput = {
    AND?: Prisma.facturaclienteScalarWhereInput | Prisma.facturaclienteScalarWhereInput[];
    OR?: Prisma.facturaclienteScalarWhereInput[];
    NOT?: Prisma.facturaclienteScalarWhereInput | Prisma.facturaclienteScalarWhereInput[];
    id?: Prisma.StringFilter<"facturacliente"> | string;
    clienteId?: Prisma.StringFilter<"facturacliente"> | string;
    contratacionId?: Prisma.StringNullableFilter<"facturacliente"> | string | null;
    actuacionId?: Prisma.StringNullableFilter<"facturacliente"> | string | null;
    numero?: Prisma.StringFilter<"facturacliente"> | string;
    fechaFactura?: Prisma.DateTimeFilter<"facturacliente"> | Date | string;
    vencimiento?: Prisma.DateTimeNullableFilter<"facturacliente"> | Date | string | null;
    concepto?: Prisma.StringFilter<"facturacliente"> | string;
    base?: Prisma.DecimalFilter<"facturacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFilter<"facturacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"facturacliente"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFilter<"facturacliente"> | $Enums.facturacliente_estado;
    asientoId?: Prisma.StringNullableFilter<"facturacliente"> | string | null;
    cuentaContableId?: Prisma.StringNullableFilter<"facturacliente"> | string | null;
    centroAnaliticoId?: Prisma.StringNullableFilter<"facturacliente"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"facturacliente"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"facturacliente"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"facturacliente"> | Date | string;
};
export type facturaclienteCreateWithoutCentroanaliticoInput = {
    id: string;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    derechocobro?: Prisma.derechocobroCreateNestedOneWithoutFacturaclienteInput;
    actuacion?: Prisma.actuacionCreateNestedOneWithoutFacturaclienteInput;
    cliente: Prisma.clienteCreateNestedOneWithoutFacturaclienteInput;
    contratacion?: Prisma.contratacionCreateNestedOneWithoutFacturaclienteInput;
    cuentacontable?: Prisma.cuentacontableCreateNestedOneWithoutFacturaclienteInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteCreateNestedManyWithoutFacturaclienteInput;
};
export type facturaclienteUncheckedCreateWithoutCentroanaliticoInput = {
    id: string;
    clienteId: string;
    contratacionId?: string | null;
    actuacionId?: string | null;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    derechocobro?: Prisma.derechocobroUncheckedCreateNestedOneWithoutFacturaclienteInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteUncheckedCreateNestedManyWithoutFacturaclienteInput;
};
export type facturaclienteCreateOrConnectWithoutCentroanaliticoInput = {
    where: Prisma.facturaclienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaclienteCreateWithoutCentroanaliticoInput, Prisma.facturaclienteUncheckedCreateWithoutCentroanaliticoInput>;
};
export type facturaclienteCreateManyCentroanaliticoInputEnvelope = {
    data: Prisma.facturaclienteCreateManyCentroanaliticoInput | Prisma.facturaclienteCreateManyCentroanaliticoInput[];
    skipDuplicates?: boolean;
};
export type facturaclienteUpsertWithWhereUniqueWithoutCentroanaliticoInput = {
    where: Prisma.facturaclienteWhereUniqueInput;
    update: Prisma.XOR<Prisma.facturaclienteUpdateWithoutCentroanaliticoInput, Prisma.facturaclienteUncheckedUpdateWithoutCentroanaliticoInput>;
    create: Prisma.XOR<Prisma.facturaclienteCreateWithoutCentroanaliticoInput, Prisma.facturaclienteUncheckedCreateWithoutCentroanaliticoInput>;
};
export type facturaclienteUpdateWithWhereUniqueWithoutCentroanaliticoInput = {
    where: Prisma.facturaclienteWhereUniqueInput;
    data: Prisma.XOR<Prisma.facturaclienteUpdateWithoutCentroanaliticoInput, Prisma.facturaclienteUncheckedUpdateWithoutCentroanaliticoInput>;
};
export type facturaclienteUpdateManyWithWhereWithoutCentroanaliticoInput = {
    where: Prisma.facturaclienteScalarWhereInput;
    data: Prisma.XOR<Prisma.facturaclienteUpdateManyMutationInput, Prisma.facturaclienteUncheckedUpdateManyWithoutCentroanaliticoInput>;
};
export type facturaclienteCreateWithoutClienteInput = {
    id: string;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    derechocobro?: Prisma.derechocobroCreateNestedOneWithoutFacturaclienteInput;
    actuacion?: Prisma.actuacionCreateNestedOneWithoutFacturaclienteInput;
    centroanalitico?: Prisma.centroanaliticoCreateNestedOneWithoutFacturaclienteInput;
    contratacion?: Prisma.contratacionCreateNestedOneWithoutFacturaclienteInput;
    cuentacontable?: Prisma.cuentacontableCreateNestedOneWithoutFacturaclienteInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteCreateNestedManyWithoutFacturaclienteInput;
};
export type facturaclienteUncheckedCreateWithoutClienteInput = {
    id: string;
    contratacionId?: string | null;
    actuacionId?: string | null;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    centroAnaliticoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    derechocobro?: Prisma.derechocobroUncheckedCreateNestedOneWithoutFacturaclienteInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteUncheckedCreateNestedManyWithoutFacturaclienteInput;
};
export type facturaclienteCreateOrConnectWithoutClienteInput = {
    where: Prisma.facturaclienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaclienteCreateWithoutClienteInput, Prisma.facturaclienteUncheckedCreateWithoutClienteInput>;
};
export type facturaclienteCreateManyClienteInputEnvelope = {
    data: Prisma.facturaclienteCreateManyClienteInput | Prisma.facturaclienteCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type facturaclienteUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.facturaclienteWhereUniqueInput;
    update: Prisma.XOR<Prisma.facturaclienteUpdateWithoutClienteInput, Prisma.facturaclienteUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.facturaclienteCreateWithoutClienteInput, Prisma.facturaclienteUncheckedCreateWithoutClienteInput>;
};
export type facturaclienteUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.facturaclienteWhereUniqueInput;
    data: Prisma.XOR<Prisma.facturaclienteUpdateWithoutClienteInput, Prisma.facturaclienteUncheckedUpdateWithoutClienteInput>;
};
export type facturaclienteUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.facturaclienteScalarWhereInput;
    data: Prisma.XOR<Prisma.facturaclienteUpdateManyMutationInput, Prisma.facturaclienteUncheckedUpdateManyWithoutClienteInput>;
};
export type facturaclienteCreateWithoutContratacionInput = {
    id: string;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    derechocobro?: Prisma.derechocobroCreateNestedOneWithoutFacturaclienteInput;
    actuacion?: Prisma.actuacionCreateNestedOneWithoutFacturaclienteInput;
    centroanalitico?: Prisma.centroanaliticoCreateNestedOneWithoutFacturaclienteInput;
    cliente: Prisma.clienteCreateNestedOneWithoutFacturaclienteInput;
    cuentacontable?: Prisma.cuentacontableCreateNestedOneWithoutFacturaclienteInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteCreateNestedManyWithoutFacturaclienteInput;
};
export type facturaclienteUncheckedCreateWithoutContratacionInput = {
    id: string;
    clienteId: string;
    actuacionId?: string | null;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    centroAnaliticoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    derechocobro?: Prisma.derechocobroUncheckedCreateNestedOneWithoutFacturaclienteInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteUncheckedCreateNestedManyWithoutFacturaclienteInput;
};
export type facturaclienteCreateOrConnectWithoutContratacionInput = {
    where: Prisma.facturaclienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaclienteCreateWithoutContratacionInput, Prisma.facturaclienteUncheckedCreateWithoutContratacionInput>;
};
export type facturaclienteCreateManyContratacionInputEnvelope = {
    data: Prisma.facturaclienteCreateManyContratacionInput | Prisma.facturaclienteCreateManyContratacionInput[];
    skipDuplicates?: boolean;
};
export type facturaclienteUpsertWithWhereUniqueWithoutContratacionInput = {
    where: Prisma.facturaclienteWhereUniqueInput;
    update: Prisma.XOR<Prisma.facturaclienteUpdateWithoutContratacionInput, Prisma.facturaclienteUncheckedUpdateWithoutContratacionInput>;
    create: Prisma.XOR<Prisma.facturaclienteCreateWithoutContratacionInput, Prisma.facturaclienteUncheckedCreateWithoutContratacionInput>;
};
export type facturaclienteUpdateWithWhereUniqueWithoutContratacionInput = {
    where: Prisma.facturaclienteWhereUniqueInput;
    data: Prisma.XOR<Prisma.facturaclienteUpdateWithoutContratacionInput, Prisma.facturaclienteUncheckedUpdateWithoutContratacionInput>;
};
export type facturaclienteUpdateManyWithWhereWithoutContratacionInput = {
    where: Prisma.facturaclienteScalarWhereInput;
    data: Prisma.XOR<Prisma.facturaclienteUpdateManyMutationInput, Prisma.facturaclienteUncheckedUpdateManyWithoutContratacionInput>;
};
export type facturaclienteCreateWithoutCuentacontableInput = {
    id: string;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    derechocobro?: Prisma.derechocobroCreateNestedOneWithoutFacturaclienteInput;
    actuacion?: Prisma.actuacionCreateNestedOneWithoutFacturaclienteInput;
    centroanalitico?: Prisma.centroanaliticoCreateNestedOneWithoutFacturaclienteInput;
    cliente: Prisma.clienteCreateNestedOneWithoutFacturaclienteInput;
    contratacion?: Prisma.contratacionCreateNestedOneWithoutFacturaclienteInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteCreateNestedManyWithoutFacturaclienteInput;
};
export type facturaclienteUncheckedCreateWithoutCuentacontableInput = {
    id: string;
    clienteId: string;
    contratacionId?: string | null;
    actuacionId?: string | null;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    centroAnaliticoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    derechocobro?: Prisma.derechocobroUncheckedCreateNestedOneWithoutFacturaclienteInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteUncheckedCreateNestedManyWithoutFacturaclienteInput;
};
export type facturaclienteCreateOrConnectWithoutCuentacontableInput = {
    where: Prisma.facturaclienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaclienteCreateWithoutCuentacontableInput, Prisma.facturaclienteUncheckedCreateWithoutCuentacontableInput>;
};
export type facturaclienteCreateManyCuentacontableInputEnvelope = {
    data: Prisma.facturaclienteCreateManyCuentacontableInput | Prisma.facturaclienteCreateManyCuentacontableInput[];
    skipDuplicates?: boolean;
};
export type facturaclienteUpsertWithWhereUniqueWithoutCuentacontableInput = {
    where: Prisma.facturaclienteWhereUniqueInput;
    update: Prisma.XOR<Prisma.facturaclienteUpdateWithoutCuentacontableInput, Prisma.facturaclienteUncheckedUpdateWithoutCuentacontableInput>;
    create: Prisma.XOR<Prisma.facturaclienteCreateWithoutCuentacontableInput, Prisma.facturaclienteUncheckedCreateWithoutCuentacontableInput>;
};
export type facturaclienteUpdateWithWhereUniqueWithoutCuentacontableInput = {
    where: Prisma.facturaclienteWhereUniqueInput;
    data: Prisma.XOR<Prisma.facturaclienteUpdateWithoutCuentacontableInput, Prisma.facturaclienteUncheckedUpdateWithoutCuentacontableInput>;
};
export type facturaclienteUpdateManyWithWhereWithoutCuentacontableInput = {
    where: Prisma.facturaclienteScalarWhereInput;
    data: Prisma.XOR<Prisma.facturaclienteUpdateManyMutationInput, Prisma.facturaclienteUncheckedUpdateManyWithoutCuentacontableInput>;
};
export type facturaclienteCreateWithoutDerechocobroInput = {
    id: string;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionCreateNestedOneWithoutFacturaclienteInput;
    centroanalitico?: Prisma.centroanaliticoCreateNestedOneWithoutFacturaclienteInput;
    cliente: Prisma.clienteCreateNestedOneWithoutFacturaclienteInput;
    contratacion?: Prisma.contratacionCreateNestedOneWithoutFacturaclienteInput;
    cuentacontable?: Prisma.cuentacontableCreateNestedOneWithoutFacturaclienteInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteCreateNestedManyWithoutFacturaclienteInput;
};
export type facturaclienteUncheckedCreateWithoutDerechocobroInput = {
    id: string;
    clienteId: string;
    contratacionId?: string | null;
    actuacionId?: string | null;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    centroAnaliticoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturarectificativacliente?: Prisma.facturarectificativaclienteUncheckedCreateNestedManyWithoutFacturaclienteInput;
};
export type facturaclienteCreateOrConnectWithoutDerechocobroInput = {
    where: Prisma.facturaclienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaclienteCreateWithoutDerechocobroInput, Prisma.facturaclienteUncheckedCreateWithoutDerechocobroInput>;
};
export type facturaclienteUpsertWithoutDerechocobroInput = {
    update: Prisma.XOR<Prisma.facturaclienteUpdateWithoutDerechocobroInput, Prisma.facturaclienteUncheckedUpdateWithoutDerechocobroInput>;
    create: Prisma.XOR<Prisma.facturaclienteCreateWithoutDerechocobroInput, Prisma.facturaclienteUncheckedCreateWithoutDerechocobroInput>;
    where?: Prisma.facturaclienteWhereInput;
};
export type facturaclienteUpdateToOneWithWhereWithoutDerechocobroInput = {
    where?: Prisma.facturaclienteWhereInput;
    data: Prisma.XOR<Prisma.facturaclienteUpdateWithoutDerechocobroInput, Prisma.facturaclienteUncheckedUpdateWithoutDerechocobroInput>;
};
export type facturaclienteUpdateWithoutDerechocobroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUpdateOneWithoutFacturaclienteNestedInput;
    centroanalitico?: Prisma.centroanaliticoUpdateOneWithoutFacturaclienteNestedInput;
    cliente?: Prisma.clienteUpdateOneRequiredWithoutFacturaclienteNestedInput;
    contratacion?: Prisma.contratacionUpdateOneWithoutFacturaclienteNestedInput;
    cuentacontable?: Prisma.cuentacontableUpdateOneWithoutFacturaclienteNestedInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteUpdateManyWithoutFacturaclienteNestedInput;
};
export type facturaclienteUncheckedUpdateWithoutDerechocobroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    contratacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturarectificativacliente?: Prisma.facturarectificativaclienteUncheckedUpdateManyWithoutFacturaclienteNestedInput;
};
export type facturaclienteCreateWithoutFacturarectificativaclienteInput = {
    id: string;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    derechocobro?: Prisma.derechocobroCreateNestedOneWithoutFacturaclienteInput;
    actuacion?: Prisma.actuacionCreateNestedOneWithoutFacturaclienteInput;
    centroanalitico?: Prisma.centroanaliticoCreateNestedOneWithoutFacturaclienteInput;
    cliente: Prisma.clienteCreateNestedOneWithoutFacturaclienteInput;
    contratacion?: Prisma.contratacionCreateNestedOneWithoutFacturaclienteInput;
    cuentacontable?: Prisma.cuentacontableCreateNestedOneWithoutFacturaclienteInput;
};
export type facturaclienteUncheckedCreateWithoutFacturarectificativaclienteInput = {
    id: string;
    clienteId: string;
    contratacionId?: string | null;
    actuacionId?: string | null;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    centroAnaliticoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    derechocobro?: Prisma.derechocobroUncheckedCreateNestedOneWithoutFacturaclienteInput;
};
export type facturaclienteCreateOrConnectWithoutFacturarectificativaclienteInput = {
    where: Prisma.facturaclienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaclienteCreateWithoutFacturarectificativaclienteInput, Prisma.facturaclienteUncheckedCreateWithoutFacturarectificativaclienteInput>;
};
export type facturaclienteUpsertWithoutFacturarectificativaclienteInput = {
    update: Prisma.XOR<Prisma.facturaclienteUpdateWithoutFacturarectificativaclienteInput, Prisma.facturaclienteUncheckedUpdateWithoutFacturarectificativaclienteInput>;
    create: Prisma.XOR<Prisma.facturaclienteCreateWithoutFacturarectificativaclienteInput, Prisma.facturaclienteUncheckedCreateWithoutFacturarectificativaclienteInput>;
    where?: Prisma.facturaclienteWhereInput;
};
export type facturaclienteUpdateToOneWithWhereWithoutFacturarectificativaclienteInput = {
    where?: Prisma.facturaclienteWhereInput;
    data: Prisma.XOR<Prisma.facturaclienteUpdateWithoutFacturarectificativaclienteInput, Prisma.facturaclienteUncheckedUpdateWithoutFacturarectificativaclienteInput>;
};
export type facturaclienteUpdateWithoutFacturarectificativaclienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    derechocobro?: Prisma.derechocobroUpdateOneWithoutFacturaclienteNestedInput;
    actuacion?: Prisma.actuacionUpdateOneWithoutFacturaclienteNestedInput;
    centroanalitico?: Prisma.centroanaliticoUpdateOneWithoutFacturaclienteNestedInput;
    cliente?: Prisma.clienteUpdateOneRequiredWithoutFacturaclienteNestedInput;
    contratacion?: Prisma.contratacionUpdateOneWithoutFacturaclienteNestedInput;
    cuentacontable?: Prisma.cuentacontableUpdateOneWithoutFacturaclienteNestedInput;
};
export type facturaclienteUncheckedUpdateWithoutFacturarectificativaclienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    contratacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    derechocobro?: Prisma.derechocobroUncheckedUpdateOneWithoutFacturaclienteNestedInput;
};
export type facturaclienteCreateManyActuacionInput = {
    id: string;
    clienteId: string;
    contratacionId?: string | null;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    centroAnaliticoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type facturaclienteUpdateWithoutActuacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    derechocobro?: Prisma.derechocobroUpdateOneWithoutFacturaclienteNestedInput;
    centroanalitico?: Prisma.centroanaliticoUpdateOneWithoutFacturaclienteNestedInput;
    cliente?: Prisma.clienteUpdateOneRequiredWithoutFacturaclienteNestedInput;
    contratacion?: Prisma.contratacionUpdateOneWithoutFacturaclienteNestedInput;
    cuentacontable?: Prisma.cuentacontableUpdateOneWithoutFacturaclienteNestedInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteUpdateManyWithoutFacturaclienteNestedInput;
};
export type facturaclienteUncheckedUpdateWithoutActuacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    contratacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    derechocobro?: Prisma.derechocobroUncheckedUpdateOneWithoutFacturaclienteNestedInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteUncheckedUpdateManyWithoutFacturaclienteNestedInput;
};
export type facturaclienteUncheckedUpdateManyWithoutActuacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    contratacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type facturaclienteCreateManyCentroanaliticoInput = {
    id: string;
    clienteId: string;
    contratacionId?: string | null;
    actuacionId?: string | null;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type facturaclienteUpdateWithoutCentroanaliticoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    derechocobro?: Prisma.derechocobroUpdateOneWithoutFacturaclienteNestedInput;
    actuacion?: Prisma.actuacionUpdateOneWithoutFacturaclienteNestedInput;
    cliente?: Prisma.clienteUpdateOneRequiredWithoutFacturaclienteNestedInput;
    contratacion?: Prisma.contratacionUpdateOneWithoutFacturaclienteNestedInput;
    cuentacontable?: Prisma.cuentacontableUpdateOneWithoutFacturaclienteNestedInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteUpdateManyWithoutFacturaclienteNestedInput;
};
export type facturaclienteUncheckedUpdateWithoutCentroanaliticoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    contratacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    derechocobro?: Prisma.derechocobroUncheckedUpdateOneWithoutFacturaclienteNestedInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteUncheckedUpdateManyWithoutFacturaclienteNestedInput;
};
export type facturaclienteUncheckedUpdateManyWithoutCentroanaliticoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    contratacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type facturaclienteCreateManyClienteInput = {
    id: string;
    contratacionId?: string | null;
    actuacionId?: string | null;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    centroAnaliticoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type facturaclienteUpdateWithoutClienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    derechocobro?: Prisma.derechocobroUpdateOneWithoutFacturaclienteNestedInput;
    actuacion?: Prisma.actuacionUpdateOneWithoutFacturaclienteNestedInput;
    centroanalitico?: Prisma.centroanaliticoUpdateOneWithoutFacturaclienteNestedInput;
    contratacion?: Prisma.contratacionUpdateOneWithoutFacturaclienteNestedInput;
    cuentacontable?: Prisma.cuentacontableUpdateOneWithoutFacturaclienteNestedInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteUpdateManyWithoutFacturaclienteNestedInput;
};
export type facturaclienteUncheckedUpdateWithoutClienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contratacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    derechocobro?: Prisma.derechocobroUncheckedUpdateOneWithoutFacturaclienteNestedInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteUncheckedUpdateManyWithoutFacturaclienteNestedInput;
};
export type facturaclienteUncheckedUpdateManyWithoutClienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contratacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type facturaclienteCreateManyContratacionInput = {
    id: string;
    clienteId: string;
    actuacionId?: string | null;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    centroAnaliticoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type facturaclienteUpdateWithoutContratacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    derechocobro?: Prisma.derechocobroUpdateOneWithoutFacturaclienteNestedInput;
    actuacion?: Prisma.actuacionUpdateOneWithoutFacturaclienteNestedInput;
    centroanalitico?: Prisma.centroanaliticoUpdateOneWithoutFacturaclienteNestedInput;
    cliente?: Prisma.clienteUpdateOneRequiredWithoutFacturaclienteNestedInput;
    cuentacontable?: Prisma.cuentacontableUpdateOneWithoutFacturaclienteNestedInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteUpdateManyWithoutFacturaclienteNestedInput;
};
export type facturaclienteUncheckedUpdateWithoutContratacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    derechocobro?: Prisma.derechocobroUncheckedUpdateOneWithoutFacturaclienteNestedInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteUncheckedUpdateManyWithoutFacturaclienteNestedInput;
};
export type facturaclienteUncheckedUpdateManyWithoutContratacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type facturaclienteCreateManyCuentacontableInput = {
    id: string;
    clienteId: string;
    contratacionId?: string | null;
    actuacionId?: string | null;
    numero: string;
    fechaFactura: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturacliente_estado;
    asientoId?: string | null;
    centroAnaliticoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type facturaclienteUpdateWithoutCuentacontableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    derechocobro?: Prisma.derechocobroUpdateOneWithoutFacturaclienteNestedInput;
    actuacion?: Prisma.actuacionUpdateOneWithoutFacturaclienteNestedInput;
    centroanalitico?: Prisma.centroanaliticoUpdateOneWithoutFacturaclienteNestedInput;
    cliente?: Prisma.clienteUpdateOneRequiredWithoutFacturaclienteNestedInput;
    contratacion?: Prisma.contratacionUpdateOneWithoutFacturaclienteNestedInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteUpdateManyWithoutFacturaclienteNestedInput;
};
export type facturaclienteUncheckedUpdateWithoutCuentacontableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    contratacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    derechocobro?: Prisma.derechocobroUncheckedUpdateOneWithoutFacturaclienteNestedInput;
    facturarectificativacliente?: Prisma.facturarectificativaclienteUncheckedUpdateManyWithoutFacturaclienteNestedInput;
};
export type facturaclienteUncheckedUpdateManyWithoutCuentacontableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    contratacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturacliente_estadoFieldUpdateOperationsInput | $Enums.facturacliente_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type FacturaclienteCountOutputType
 */
export type FacturaclienteCountOutputType = {
    facturarectificativacliente: number;
};
export type FacturaclienteCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    facturarectificativacliente?: boolean | FacturaclienteCountOutputTypeCountFacturarectificativaclienteArgs;
};
/**
 * FacturaclienteCountOutputType without action
 */
export type FacturaclienteCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaclienteCountOutputType
     */
    select?: Prisma.FacturaclienteCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * FacturaclienteCountOutputType without action
 */
export type FacturaclienteCountOutputTypeCountFacturarectificativaclienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturarectificativaclienteWhereInput;
};
export type facturaclienteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clienteId?: boolean;
    contratacionId?: boolean;
    actuacionId?: boolean;
    numero?: boolean;
    fechaFactura?: boolean;
    vencimiento?: boolean;
    concepto?: boolean;
    base?: boolean;
    iva?: boolean;
    total?: boolean;
    estado?: boolean;
    asientoId?: boolean;
    cuentaContableId?: boolean;
    centroAnaliticoId?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    derechocobro?: boolean | Prisma.facturacliente$derechocobroArgs<ExtArgs>;
    actuacion?: boolean | Prisma.facturacliente$actuacionArgs<ExtArgs>;
    centroanalitico?: boolean | Prisma.facturacliente$centroanaliticoArgs<ExtArgs>;
    cliente?: boolean | Prisma.clienteDefaultArgs<ExtArgs>;
    contratacion?: boolean | Prisma.facturacliente$contratacionArgs<ExtArgs>;
    cuentacontable?: boolean | Prisma.facturacliente$cuentacontableArgs<ExtArgs>;
    facturarectificativacliente?: boolean | Prisma.facturacliente$facturarectificativaclienteArgs<ExtArgs>;
    _count?: boolean | Prisma.FacturaclienteCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["facturacliente"]>;
export type facturaclienteSelectScalar = {
    id?: boolean;
    clienteId?: boolean;
    contratacionId?: boolean;
    actuacionId?: boolean;
    numero?: boolean;
    fechaFactura?: boolean;
    vencimiento?: boolean;
    concepto?: boolean;
    base?: boolean;
    iva?: boolean;
    total?: boolean;
    estado?: boolean;
    asientoId?: boolean;
    cuentaContableId?: boolean;
    centroAnaliticoId?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type facturaclienteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clienteId" | "contratacionId" | "actuacionId" | "numero" | "fechaFactura" | "vencimiento" | "concepto" | "base" | "iva" | "total" | "estado" | "asientoId" | "cuentaContableId" | "centroAnaliticoId" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["facturacliente"]>;
export type facturaclienteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    derechocobro?: boolean | Prisma.facturacliente$derechocobroArgs<ExtArgs>;
    actuacion?: boolean | Prisma.facturacliente$actuacionArgs<ExtArgs>;
    centroanalitico?: boolean | Prisma.facturacliente$centroanaliticoArgs<ExtArgs>;
    cliente?: boolean | Prisma.clienteDefaultArgs<ExtArgs>;
    contratacion?: boolean | Prisma.facturacliente$contratacionArgs<ExtArgs>;
    cuentacontable?: boolean | Prisma.facturacliente$cuentacontableArgs<ExtArgs>;
    facturarectificativacliente?: boolean | Prisma.facturacliente$facturarectificativaclienteArgs<ExtArgs>;
    _count?: boolean | Prisma.FacturaclienteCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $facturaclientePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "facturacliente";
    objects: {
        derechocobro: Prisma.$derechocobroPayload<ExtArgs> | null;
        actuacion: Prisma.$actuacionPayload<ExtArgs> | null;
        centroanalitico: Prisma.$centroanaliticoPayload<ExtArgs> | null;
        cliente: Prisma.$clientePayload<ExtArgs>;
        contratacion: Prisma.$contratacionPayload<ExtArgs> | null;
        cuentacontable: Prisma.$cuentacontablePayload<ExtArgs> | null;
        facturarectificativacliente: Prisma.$facturarectificativaclientePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        clienteId: string;
        contratacionId: string | null;
        actuacionId: string | null;
        numero: string;
        fechaFactura: Date;
        vencimiento: Date | null;
        concepto: string;
        base: runtime.Decimal;
        iva: runtime.Decimal;
        total: runtime.Decimal;
        estado: $Enums.facturacliente_estado;
        asientoId: string | null;
        cuentaContableId: string | null;
        centroAnaliticoId: string | null;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["facturacliente"]>;
    composites: {};
};
export type facturaclienteGetPayload<S extends boolean | null | undefined | facturaclienteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$facturaclientePayload, S>;
export type facturaclienteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<facturaclienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FacturaclienteCountAggregateInputType | true;
};
export interface facturaclienteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['facturacliente'];
        meta: {
            name: 'facturacliente';
        };
    };
    /**
     * Find zero or one Facturacliente that matches the filter.
     * @param {facturaclienteFindUniqueArgs} args - Arguments to find a Facturacliente
     * @example
     * // Get one Facturacliente
     * const facturacliente = await prisma.facturacliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends facturaclienteFindUniqueArgs>(args: Prisma.SelectSubset<T, facturaclienteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__facturaclienteClient<runtime.Types.Result.GetResult<Prisma.$facturaclientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Facturacliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {facturaclienteFindUniqueOrThrowArgs} args - Arguments to find a Facturacliente
     * @example
     * // Get one Facturacliente
     * const facturacliente = await prisma.facturacliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends facturaclienteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, facturaclienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__facturaclienteClient<runtime.Types.Result.GetResult<Prisma.$facturaclientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Facturacliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturaclienteFindFirstArgs} args - Arguments to find a Facturacliente
     * @example
     * // Get one Facturacliente
     * const facturacliente = await prisma.facturacliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends facturaclienteFindFirstArgs>(args?: Prisma.SelectSubset<T, facturaclienteFindFirstArgs<ExtArgs>>): Prisma.Prisma__facturaclienteClient<runtime.Types.Result.GetResult<Prisma.$facturaclientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Facturacliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturaclienteFindFirstOrThrowArgs} args - Arguments to find a Facturacliente
     * @example
     * // Get one Facturacliente
     * const facturacliente = await prisma.facturacliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends facturaclienteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, facturaclienteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__facturaclienteClient<runtime.Types.Result.GetResult<Prisma.$facturaclientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Facturaclientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturaclienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facturaclientes
     * const facturaclientes = await prisma.facturacliente.findMany()
     *
     * // Get first 10 Facturaclientes
     * const facturaclientes = await prisma.facturacliente.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const facturaclienteWithIdOnly = await prisma.facturacliente.findMany({ select: { id: true } })
     *
     */
    findMany<T extends facturaclienteFindManyArgs>(args?: Prisma.SelectSubset<T, facturaclienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturaclientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Facturacliente.
     * @param {facturaclienteCreateArgs} args - Arguments to create a Facturacliente.
     * @example
     * // Create one Facturacliente
     * const Facturacliente = await prisma.facturacliente.create({
     *   data: {
     *     // ... data to create a Facturacliente
     *   }
     * })
     *
     */
    create<T extends facturaclienteCreateArgs>(args: Prisma.SelectSubset<T, facturaclienteCreateArgs<ExtArgs>>): Prisma.Prisma__facturaclienteClient<runtime.Types.Result.GetResult<Prisma.$facturaclientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Facturaclientes.
     * @param {facturaclienteCreateManyArgs} args - Arguments to create many Facturaclientes.
     * @example
     * // Create many Facturaclientes
     * const facturacliente = await prisma.facturacliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends facturaclienteCreateManyArgs>(args?: Prisma.SelectSubset<T, facturaclienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Facturacliente.
     * @param {facturaclienteDeleteArgs} args - Arguments to delete one Facturacliente.
     * @example
     * // Delete one Facturacliente
     * const Facturacliente = await prisma.facturacliente.delete({
     *   where: {
     *     // ... filter to delete one Facturacliente
     *   }
     * })
     *
     */
    delete<T extends facturaclienteDeleteArgs>(args: Prisma.SelectSubset<T, facturaclienteDeleteArgs<ExtArgs>>): Prisma.Prisma__facturaclienteClient<runtime.Types.Result.GetResult<Prisma.$facturaclientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Facturacliente.
     * @param {facturaclienteUpdateArgs} args - Arguments to update one Facturacliente.
     * @example
     * // Update one Facturacliente
     * const facturacliente = await prisma.facturacliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends facturaclienteUpdateArgs>(args: Prisma.SelectSubset<T, facturaclienteUpdateArgs<ExtArgs>>): Prisma.Prisma__facturaclienteClient<runtime.Types.Result.GetResult<Prisma.$facturaclientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Facturaclientes.
     * @param {facturaclienteDeleteManyArgs} args - Arguments to filter Facturaclientes to delete.
     * @example
     * // Delete a few Facturaclientes
     * const { count } = await prisma.facturacliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends facturaclienteDeleteManyArgs>(args?: Prisma.SelectSubset<T, facturaclienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Facturaclientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturaclienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facturaclientes
     * const facturacliente = await prisma.facturacliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends facturaclienteUpdateManyArgs>(args: Prisma.SelectSubset<T, facturaclienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Facturacliente.
     * @param {facturaclienteUpsertArgs} args - Arguments to update or create a Facturacliente.
     * @example
     * // Update or create a Facturacliente
     * const facturacliente = await prisma.facturacliente.upsert({
     *   create: {
     *     // ... data to create a Facturacliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facturacliente we want to update
     *   }
     * })
     */
    upsert<T extends facturaclienteUpsertArgs>(args: Prisma.SelectSubset<T, facturaclienteUpsertArgs<ExtArgs>>): Prisma.Prisma__facturaclienteClient<runtime.Types.Result.GetResult<Prisma.$facturaclientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Facturaclientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturaclienteCountArgs} args - Arguments to filter Facturaclientes to count.
     * @example
     * // Count the number of Facturaclientes
     * const count = await prisma.facturacliente.count({
     *   where: {
     *     // ... the filter for the Facturaclientes we want to count
     *   }
     * })
    **/
    count<T extends facturaclienteCountArgs>(args?: Prisma.Subset<T, facturaclienteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FacturaclienteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Facturacliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaclienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacturaclienteAggregateArgs>(args: Prisma.Subset<T, FacturaclienteAggregateArgs>): Prisma.PrismaPromise<GetFacturaclienteAggregateType<T>>;
    /**
     * Group by Facturacliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturaclienteGroupByArgs} args - Group by arguments.
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
    groupBy<T extends facturaclienteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: facturaclienteGroupByArgs['orderBy'];
    } : {
        orderBy?: facturaclienteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, facturaclienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturaclienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the facturacliente model
     */
    readonly fields: facturaclienteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for facturacliente.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__facturaclienteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    derechocobro<T extends Prisma.facturacliente$derechocobroArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.facturacliente$derechocobroArgs<ExtArgs>>): Prisma.Prisma__derechocobroClient<runtime.Types.Result.GetResult<Prisma.$derechocobroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    actuacion<T extends Prisma.facturacliente$actuacionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.facturacliente$actuacionArgs<ExtArgs>>): Prisma.Prisma__actuacionClient<runtime.Types.Result.GetResult<Prisma.$actuacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    centroanalitico<T extends Prisma.facturacliente$centroanaliticoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.facturacliente$centroanaliticoArgs<ExtArgs>>): Prisma.Prisma__centroanaliticoClient<runtime.Types.Result.GetResult<Prisma.$centroanaliticoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    cliente<T extends Prisma.clienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.clienteDefaultArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    contratacion<T extends Prisma.facturacliente$contratacionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.facturacliente$contratacionArgs<ExtArgs>>): Prisma.Prisma__contratacionClient<runtime.Types.Result.GetResult<Prisma.$contratacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    cuentacontable<T extends Prisma.facturacliente$cuentacontableArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.facturacliente$cuentacontableArgs<ExtArgs>>): Prisma.Prisma__cuentacontableClient<runtime.Types.Result.GetResult<Prisma.$cuentacontablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    facturarectificativacliente<T extends Prisma.facturacliente$facturarectificativaclienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.facturacliente$facturarectificativaclienteArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturarectificativaclientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the facturacliente model
 */
export interface facturaclienteFieldRefs {
    readonly id: Prisma.FieldRef<"facturacliente", 'String'>;
    readonly clienteId: Prisma.FieldRef<"facturacliente", 'String'>;
    readonly contratacionId: Prisma.FieldRef<"facturacliente", 'String'>;
    readonly actuacionId: Prisma.FieldRef<"facturacliente", 'String'>;
    readonly numero: Prisma.FieldRef<"facturacliente", 'String'>;
    readonly fechaFactura: Prisma.FieldRef<"facturacliente", 'DateTime'>;
    readonly vencimiento: Prisma.FieldRef<"facturacliente", 'DateTime'>;
    readonly concepto: Prisma.FieldRef<"facturacliente", 'String'>;
    readonly base: Prisma.FieldRef<"facturacliente", 'Decimal'>;
    readonly iva: Prisma.FieldRef<"facturacliente", 'Decimal'>;
    readonly total: Prisma.FieldRef<"facturacliente", 'Decimal'>;
    readonly estado: Prisma.FieldRef<"facturacliente", 'facturacliente_estado'>;
    readonly asientoId: Prisma.FieldRef<"facturacliente", 'String'>;
    readonly cuentaContableId: Prisma.FieldRef<"facturacliente", 'String'>;
    readonly centroAnaliticoId: Prisma.FieldRef<"facturacliente", 'String'>;
    readonly observaciones: Prisma.FieldRef<"facturacliente", 'String'>;
    readonly createdAt: Prisma.FieldRef<"facturacliente", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"facturacliente", 'DateTime'>;
}
/**
 * facturacliente findUnique
 */
export type facturaclienteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturacliente
     */
    select?: Prisma.facturaclienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturacliente
     */
    omit?: Prisma.facturaclienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturaclienteInclude<ExtArgs> | null;
    /**
     * Filter, which facturacliente to fetch.
     */
    where: Prisma.facturaclienteWhereUniqueInput;
};
/**
 * facturacliente findUniqueOrThrow
 */
export type facturaclienteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturacliente
     */
    select?: Prisma.facturaclienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturacliente
     */
    omit?: Prisma.facturaclienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturaclienteInclude<ExtArgs> | null;
    /**
     * Filter, which facturacliente to fetch.
     */
    where: Prisma.facturaclienteWhereUniqueInput;
};
/**
 * facturacliente findFirst
 */
export type facturaclienteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturacliente
     */
    select?: Prisma.facturaclienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturacliente
     */
    omit?: Prisma.facturaclienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturaclienteInclude<ExtArgs> | null;
    /**
     * Filter, which facturacliente to fetch.
     */
    where?: Prisma.facturaclienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of facturaclientes to fetch.
     */
    orderBy?: Prisma.facturaclienteOrderByWithRelationInput | Prisma.facturaclienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for facturaclientes.
     */
    cursor?: Prisma.facturaclienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` facturaclientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` facturaclientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of facturaclientes.
     */
    distinct?: Prisma.FacturaclienteScalarFieldEnum | Prisma.FacturaclienteScalarFieldEnum[];
};
/**
 * facturacliente findFirstOrThrow
 */
export type facturaclienteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturacliente
     */
    select?: Prisma.facturaclienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturacliente
     */
    omit?: Prisma.facturaclienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturaclienteInclude<ExtArgs> | null;
    /**
     * Filter, which facturacliente to fetch.
     */
    where?: Prisma.facturaclienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of facturaclientes to fetch.
     */
    orderBy?: Prisma.facturaclienteOrderByWithRelationInput | Prisma.facturaclienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for facturaclientes.
     */
    cursor?: Prisma.facturaclienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` facturaclientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` facturaclientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of facturaclientes.
     */
    distinct?: Prisma.FacturaclienteScalarFieldEnum | Prisma.FacturaclienteScalarFieldEnum[];
};
/**
 * facturacliente findMany
 */
export type facturaclienteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturacliente
     */
    select?: Prisma.facturaclienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturacliente
     */
    omit?: Prisma.facturaclienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturaclienteInclude<ExtArgs> | null;
    /**
     * Filter, which facturaclientes to fetch.
     */
    where?: Prisma.facturaclienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of facturaclientes to fetch.
     */
    orderBy?: Prisma.facturaclienteOrderByWithRelationInput | Prisma.facturaclienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing facturaclientes.
     */
    cursor?: Prisma.facturaclienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` facturaclientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` facturaclientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of facturaclientes.
     */
    distinct?: Prisma.FacturaclienteScalarFieldEnum | Prisma.FacturaclienteScalarFieldEnum[];
};
/**
 * facturacliente create
 */
export type facturaclienteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturacliente
     */
    select?: Prisma.facturaclienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturacliente
     */
    omit?: Prisma.facturaclienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturaclienteInclude<ExtArgs> | null;
    /**
     * The data needed to create a facturacliente.
     */
    data: Prisma.XOR<Prisma.facturaclienteCreateInput, Prisma.facturaclienteUncheckedCreateInput>;
};
/**
 * facturacliente createMany
 */
export type facturaclienteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many facturaclientes.
     */
    data: Prisma.facturaclienteCreateManyInput | Prisma.facturaclienteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * facturacliente update
 */
export type facturaclienteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturacliente
     */
    select?: Prisma.facturaclienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturacliente
     */
    omit?: Prisma.facturaclienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturaclienteInclude<ExtArgs> | null;
    /**
     * The data needed to update a facturacliente.
     */
    data: Prisma.XOR<Prisma.facturaclienteUpdateInput, Prisma.facturaclienteUncheckedUpdateInput>;
    /**
     * Choose, which facturacliente to update.
     */
    where: Prisma.facturaclienteWhereUniqueInput;
};
/**
 * facturacliente updateMany
 */
export type facturaclienteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update facturaclientes.
     */
    data: Prisma.XOR<Prisma.facturaclienteUpdateManyMutationInput, Prisma.facturaclienteUncheckedUpdateManyInput>;
    /**
     * Filter which facturaclientes to update
     */
    where?: Prisma.facturaclienteWhereInput;
    /**
     * Limit how many facturaclientes to update.
     */
    limit?: number;
};
/**
 * facturacliente upsert
 */
export type facturaclienteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturacliente
     */
    select?: Prisma.facturaclienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturacliente
     */
    omit?: Prisma.facturaclienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturaclienteInclude<ExtArgs> | null;
    /**
     * The filter to search for the facturacliente to update in case it exists.
     */
    where: Prisma.facturaclienteWhereUniqueInput;
    /**
     * In case the facturacliente found by the `where` argument doesn't exist, create a new facturacliente with this data.
     */
    create: Prisma.XOR<Prisma.facturaclienteCreateInput, Prisma.facturaclienteUncheckedCreateInput>;
    /**
     * In case the facturacliente was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.facturaclienteUpdateInput, Prisma.facturaclienteUncheckedUpdateInput>;
};
/**
 * facturacliente delete
 */
export type facturaclienteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturacliente
     */
    select?: Prisma.facturaclienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturacliente
     */
    omit?: Prisma.facturaclienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturaclienteInclude<ExtArgs> | null;
    /**
     * Filter which facturacliente to delete.
     */
    where: Prisma.facturaclienteWhereUniqueInput;
};
/**
 * facturacliente deleteMany
 */
export type facturaclienteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which facturaclientes to delete
     */
    where?: Prisma.facturaclienteWhereInput;
    /**
     * Limit how many facturaclientes to delete.
     */
    limit?: number;
};
/**
 * facturacliente.derechocobro
 */
export type facturacliente$derechocobroArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.derechocobroWhereInput;
};
/**
 * facturacliente.actuacion
 */
export type facturacliente$actuacionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actuacion
     */
    select?: Prisma.actuacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the actuacion
     */
    omit?: Prisma.actuacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.actuacionInclude<ExtArgs> | null;
    where?: Prisma.actuacionWhereInput;
};
/**
 * facturacliente.centroanalitico
 */
export type facturacliente$centroanaliticoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * facturacliente.contratacion
 */
export type facturacliente$contratacionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contratacion
     */
    select?: Prisma.contratacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contratacion
     */
    omit?: Prisma.contratacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contratacionInclude<ExtArgs> | null;
    where?: Prisma.contratacionWhereInput;
};
/**
 * facturacliente.cuentacontable
 */
export type facturacliente$cuentacontableArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuentacontable
     */
    select?: Prisma.cuentacontableSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cuentacontable
     */
    omit?: Prisma.cuentacontableOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cuentacontableInclude<ExtArgs> | null;
    where?: Prisma.cuentacontableWhereInput;
};
/**
 * facturacliente.facturarectificativacliente
 */
export type facturacliente$facturarectificativaclienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.facturarectificativaclienteWhereInput;
    orderBy?: Prisma.facturarectificativaclienteOrderByWithRelationInput | Prisma.facturarectificativaclienteOrderByWithRelationInput[];
    cursor?: Prisma.facturarectificativaclienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FacturarectificativaclienteScalarFieldEnum | Prisma.FacturarectificativaclienteScalarFieldEnum[];
};
/**
 * facturacliente without action
 */
export type facturaclienteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturacliente
     */
    select?: Prisma.facturaclienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturacliente
     */
    omit?: Prisma.facturaclienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturaclienteInclude<ExtArgs> | null;
};
//# sourceMappingURL=facturacliente.d.ts.map