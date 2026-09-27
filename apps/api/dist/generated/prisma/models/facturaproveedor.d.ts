import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model facturaproveedor
 *
 */
export type facturaproveedorModel = runtime.Types.Result.DefaultSelection<Prisma.$facturaproveedorPayload>;
export type AggregateFacturaproveedor = {
    _count: FacturaproveedorCountAggregateOutputType | null;
    _avg: FacturaproveedorAvgAggregateOutputType | null;
    _sum: FacturaproveedorSumAggregateOutputType | null;
    _min: FacturaproveedorMinAggregateOutputType | null;
    _max: FacturaproveedorMaxAggregateOutputType | null;
};
export type FacturaproveedorAvgAggregateOutputType = {
    base: runtime.Decimal | null;
    iva: runtime.Decimal | null;
    total: runtime.Decimal | null;
};
export type FacturaproveedorSumAggregateOutputType = {
    base: runtime.Decimal | null;
    iva: runtime.Decimal | null;
    total: runtime.Decimal | null;
};
export type FacturaproveedorMinAggregateOutputType = {
    id: string | null;
    proveedorId: string | null;
    numero: string | null;
    fechaFactura: Date | null;
    fechaRegistro: Date | null;
    vencimiento: Date | null;
    concepto: string | null;
    base: runtime.Decimal | null;
    iva: runtime.Decimal | null;
    total: runtime.Decimal | null;
    estado: $Enums.facturaproveedor_estado | null;
    asientoId: string | null;
    cuentaContableId: string | null;
    centroAnaliticoId: string | null;
    proyecto: string | null;
    actuacionId: string | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FacturaproveedorMaxAggregateOutputType = {
    id: string | null;
    proveedorId: string | null;
    numero: string | null;
    fechaFactura: Date | null;
    fechaRegistro: Date | null;
    vencimiento: Date | null;
    concepto: string | null;
    base: runtime.Decimal | null;
    iva: runtime.Decimal | null;
    total: runtime.Decimal | null;
    estado: $Enums.facturaproveedor_estado | null;
    asientoId: string | null;
    cuentaContableId: string | null;
    centroAnaliticoId: string | null;
    proyecto: string | null;
    actuacionId: string | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FacturaproveedorCountAggregateOutputType = {
    id: number;
    proveedorId: number;
    numero: number;
    fechaFactura: number;
    fechaRegistro: number;
    vencimiento: number;
    concepto: number;
    base: number;
    iva: number;
    total: number;
    estado: number;
    asientoId: number;
    cuentaContableId: number;
    centroAnaliticoId: number;
    proyecto: number;
    actuacionId: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FacturaproveedorAvgAggregateInputType = {
    base?: true;
    iva?: true;
    total?: true;
};
export type FacturaproveedorSumAggregateInputType = {
    base?: true;
    iva?: true;
    total?: true;
};
export type FacturaproveedorMinAggregateInputType = {
    id?: true;
    proveedorId?: true;
    numero?: true;
    fechaFactura?: true;
    fechaRegistro?: true;
    vencimiento?: true;
    concepto?: true;
    base?: true;
    iva?: true;
    total?: true;
    estado?: true;
    asientoId?: true;
    cuentaContableId?: true;
    centroAnaliticoId?: true;
    proyecto?: true;
    actuacionId?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FacturaproveedorMaxAggregateInputType = {
    id?: true;
    proveedorId?: true;
    numero?: true;
    fechaFactura?: true;
    fechaRegistro?: true;
    vencimiento?: true;
    concepto?: true;
    base?: true;
    iva?: true;
    total?: true;
    estado?: true;
    asientoId?: true;
    cuentaContableId?: true;
    centroAnaliticoId?: true;
    proyecto?: true;
    actuacionId?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FacturaproveedorCountAggregateInputType = {
    id?: true;
    proveedorId?: true;
    numero?: true;
    fechaFactura?: true;
    fechaRegistro?: true;
    vencimiento?: true;
    concepto?: true;
    base?: true;
    iva?: true;
    total?: true;
    estado?: true;
    asientoId?: true;
    cuentaContableId?: true;
    centroAnaliticoId?: true;
    proyecto?: true;
    actuacionId?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FacturaproveedorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which facturaproveedor to aggregate.
     */
    where?: Prisma.facturaproveedorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of facturaproveedors to fetch.
     */
    orderBy?: Prisma.facturaproveedorOrderByWithRelationInput | Prisma.facturaproveedorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.facturaproveedorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` facturaproveedors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` facturaproveedors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned facturaproveedors
    **/
    _count?: true | FacturaproveedorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: FacturaproveedorAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: FacturaproveedorSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FacturaproveedorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FacturaproveedorMaxAggregateInputType;
};
export type GetFacturaproveedorAggregateType<T extends FacturaproveedorAggregateArgs> = {
    [P in keyof T & keyof AggregateFacturaproveedor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFacturaproveedor[P]> : Prisma.GetScalarType<T[P], AggregateFacturaproveedor[P]>;
};
export type facturaproveedorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaproveedorWhereInput;
    orderBy?: Prisma.facturaproveedorOrderByWithAggregationInput | Prisma.facturaproveedorOrderByWithAggregationInput[];
    by: Prisma.FacturaproveedorScalarFieldEnum[] | Prisma.FacturaproveedorScalarFieldEnum;
    having?: Prisma.facturaproveedorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FacturaproveedorCountAggregateInputType | true;
    _avg?: FacturaproveedorAvgAggregateInputType;
    _sum?: FacturaproveedorSumAggregateInputType;
    _min?: FacturaproveedorMinAggregateInputType;
    _max?: FacturaproveedorMaxAggregateInputType;
};
export type FacturaproveedorGroupByOutputType = {
    id: string;
    proveedorId: string;
    numero: string;
    fechaFactura: Date;
    fechaRegistro: Date;
    vencimiento: Date | null;
    concepto: string;
    base: runtime.Decimal;
    iva: runtime.Decimal;
    total: runtime.Decimal;
    estado: $Enums.facturaproveedor_estado;
    asientoId: string | null;
    cuentaContableId: string | null;
    centroAnaliticoId: string | null;
    proyecto: string | null;
    actuacionId: string | null;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: FacturaproveedorCountAggregateOutputType | null;
    _avg: FacturaproveedorAvgAggregateOutputType | null;
    _sum: FacturaproveedorSumAggregateOutputType | null;
    _min: FacturaproveedorMinAggregateOutputType | null;
    _max: FacturaproveedorMaxAggregateOutputType | null;
};
export type GetFacturaproveedorGroupByPayload<T extends facturaproveedorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FacturaproveedorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FacturaproveedorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FacturaproveedorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FacturaproveedorGroupByOutputType[P]>;
}>>;
export type facturaproveedorWhereInput = {
    AND?: Prisma.facturaproveedorWhereInput | Prisma.facturaproveedorWhereInput[];
    OR?: Prisma.facturaproveedorWhereInput[];
    NOT?: Prisma.facturaproveedorWhereInput | Prisma.facturaproveedorWhereInput[];
    id?: Prisma.StringFilter<"facturaproveedor"> | string;
    proveedorId?: Prisma.StringFilter<"facturaproveedor"> | string;
    numero?: Prisma.StringFilter<"facturaproveedor"> | string;
    fechaFactura?: Prisma.DateTimeFilter<"facturaproveedor"> | Date | string;
    fechaRegistro?: Prisma.DateTimeFilter<"facturaproveedor"> | Date | string;
    vencimiento?: Prisma.DateTimeNullableFilter<"facturaproveedor"> | Date | string | null;
    concepto?: Prisma.StringFilter<"facturaproveedor"> | string;
    base?: Prisma.DecimalFilter<"facturaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFilter<"facturaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"facturaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFilter<"facturaproveedor"> | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.StringNullableFilter<"facturaproveedor"> | string | null;
    cuentaContableId?: Prisma.StringNullableFilter<"facturaproveedor"> | string | null;
    centroAnaliticoId?: Prisma.StringNullableFilter<"facturaproveedor"> | string | null;
    proyecto?: Prisma.StringNullableFilter<"facturaproveedor"> | string | null;
    actuacionId?: Prisma.StringNullableFilter<"facturaproveedor"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"facturaproveedor"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"facturaproveedor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"facturaproveedor"> | Date | string;
    actuacion?: Prisma.XOR<Prisma.ActuacionNullableScalarRelationFilter, Prisma.actuacionWhereInput> | null;
    centroanalitico?: Prisma.XOR<Prisma.CentroanaliticoNullableScalarRelationFilter, Prisma.centroanaliticoWhereInput> | null;
    cuentacontable?: Prisma.XOR<Prisma.CuentacontableNullableScalarRelationFilter, Prisma.cuentacontableWhereInput> | null;
    proveedor?: Prisma.XOR<Prisma.ProveedorScalarRelationFilter, Prisma.proveedorWhereInput>;
    facturarectificativaproveedor?: Prisma.FacturarectificativaproveedorListRelationFilter;
    obligacioneconomica?: Prisma.XOR<Prisma.ObligacioneconomicaNullableScalarRelationFilter, Prisma.obligacioneconomicaWhereInput> | null;
};
export type facturaproveedorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    fechaFactura?: Prisma.SortOrder;
    fechaRegistro?: Prisma.SortOrder;
    vencimiento?: Prisma.SortOrderInput | Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    cuentaContableId?: Prisma.SortOrderInput | Prisma.SortOrder;
    centroAnaliticoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    proyecto?: Prisma.SortOrderInput | Prisma.SortOrder;
    actuacionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    actuacion?: Prisma.actuacionOrderByWithRelationInput;
    centroanalitico?: Prisma.centroanaliticoOrderByWithRelationInput;
    cuentacontable?: Prisma.cuentacontableOrderByWithRelationInput;
    proveedor?: Prisma.proveedorOrderByWithRelationInput;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorOrderByRelationAggregateInput;
    obligacioneconomica?: Prisma.obligacioneconomicaOrderByWithRelationInput;
    _relevance?: Prisma.facturaproveedorOrderByRelevanceInput;
};
export type facturaproveedorWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    proveedorId_numero?: Prisma.facturaproveedorProveedorIdNumeroCompoundUniqueInput;
    AND?: Prisma.facturaproveedorWhereInput | Prisma.facturaproveedorWhereInput[];
    OR?: Prisma.facturaproveedorWhereInput[];
    NOT?: Prisma.facturaproveedorWhereInput | Prisma.facturaproveedorWhereInput[];
    proveedorId?: Prisma.StringFilter<"facturaproveedor"> | string;
    numero?: Prisma.StringFilter<"facturaproveedor"> | string;
    fechaFactura?: Prisma.DateTimeFilter<"facturaproveedor"> | Date | string;
    fechaRegistro?: Prisma.DateTimeFilter<"facturaproveedor"> | Date | string;
    vencimiento?: Prisma.DateTimeNullableFilter<"facturaproveedor"> | Date | string | null;
    concepto?: Prisma.StringFilter<"facturaproveedor"> | string;
    base?: Prisma.DecimalFilter<"facturaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFilter<"facturaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"facturaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFilter<"facturaproveedor"> | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.StringNullableFilter<"facturaproveedor"> | string | null;
    cuentaContableId?: Prisma.StringNullableFilter<"facturaproveedor"> | string | null;
    centroAnaliticoId?: Prisma.StringNullableFilter<"facturaproveedor"> | string | null;
    proyecto?: Prisma.StringNullableFilter<"facturaproveedor"> | string | null;
    actuacionId?: Prisma.StringNullableFilter<"facturaproveedor"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"facturaproveedor"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"facturaproveedor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"facturaproveedor"> | Date | string;
    actuacion?: Prisma.XOR<Prisma.ActuacionNullableScalarRelationFilter, Prisma.actuacionWhereInput> | null;
    centroanalitico?: Prisma.XOR<Prisma.CentroanaliticoNullableScalarRelationFilter, Prisma.centroanaliticoWhereInput> | null;
    cuentacontable?: Prisma.XOR<Prisma.CuentacontableNullableScalarRelationFilter, Prisma.cuentacontableWhereInput> | null;
    proveedor?: Prisma.XOR<Prisma.ProveedorScalarRelationFilter, Prisma.proveedorWhereInput>;
    facturarectificativaproveedor?: Prisma.FacturarectificativaproveedorListRelationFilter;
    obligacioneconomica?: Prisma.XOR<Prisma.ObligacioneconomicaNullableScalarRelationFilter, Prisma.obligacioneconomicaWhereInput> | null;
}, "id" | "proveedorId_numero">;
export type facturaproveedorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    fechaFactura?: Prisma.SortOrder;
    fechaRegistro?: Prisma.SortOrder;
    vencimiento?: Prisma.SortOrderInput | Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    cuentaContableId?: Prisma.SortOrderInput | Prisma.SortOrder;
    centroAnaliticoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    proyecto?: Prisma.SortOrderInput | Prisma.SortOrder;
    actuacionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.facturaproveedorCountOrderByAggregateInput;
    _avg?: Prisma.facturaproveedorAvgOrderByAggregateInput;
    _max?: Prisma.facturaproveedorMaxOrderByAggregateInput;
    _min?: Prisma.facturaproveedorMinOrderByAggregateInput;
    _sum?: Prisma.facturaproveedorSumOrderByAggregateInput;
};
export type facturaproveedorScalarWhereWithAggregatesInput = {
    AND?: Prisma.facturaproveedorScalarWhereWithAggregatesInput | Prisma.facturaproveedorScalarWhereWithAggregatesInput[];
    OR?: Prisma.facturaproveedorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.facturaproveedorScalarWhereWithAggregatesInput | Prisma.facturaproveedorScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"facturaproveedor"> | string;
    proveedorId?: Prisma.StringWithAggregatesFilter<"facturaproveedor"> | string;
    numero?: Prisma.StringWithAggregatesFilter<"facturaproveedor"> | string;
    fechaFactura?: Prisma.DateTimeWithAggregatesFilter<"facturaproveedor"> | Date | string;
    fechaRegistro?: Prisma.DateTimeWithAggregatesFilter<"facturaproveedor"> | Date | string;
    vencimiento?: Prisma.DateTimeNullableWithAggregatesFilter<"facturaproveedor"> | Date | string | null;
    concepto?: Prisma.StringWithAggregatesFilter<"facturaproveedor"> | string;
    base?: Prisma.DecimalWithAggregatesFilter<"facturaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalWithAggregatesFilter<"facturaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalWithAggregatesFilter<"facturaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoWithAggregatesFilter<"facturaproveedor"> | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.StringNullableWithAggregatesFilter<"facturaproveedor"> | string | null;
    cuentaContableId?: Prisma.StringNullableWithAggregatesFilter<"facturaproveedor"> | string | null;
    centroAnaliticoId?: Prisma.StringNullableWithAggregatesFilter<"facturaproveedor"> | string | null;
    proyecto?: Prisma.StringNullableWithAggregatesFilter<"facturaproveedor"> | string | null;
    actuacionId?: Prisma.StringNullableWithAggregatesFilter<"facturaproveedor"> | string | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"facturaproveedor"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"facturaproveedor"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"facturaproveedor"> | Date | string;
};
export type facturaproveedorCreateInput = {
    id: string;
    numero: string;
    fechaFactura: Date | string;
    fechaRegistro: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturaproveedor_estado;
    asientoId?: string | null;
    proyecto?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionCreateNestedOneWithoutFacturaproveedorInput;
    centroanalitico?: Prisma.centroanaliticoCreateNestedOneWithoutFacturaproveedorInput;
    cuentacontable?: Prisma.cuentacontableCreateNestedOneWithoutFacturaproveedorInput;
    proveedor: Prisma.proveedorCreateNestedOneWithoutFacturaproveedorInput;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorCreateNestedManyWithoutFacturaproveedorInput;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedOneWithoutFacturaproveedorInput;
};
export type facturaproveedorUncheckedCreateInput = {
    id: string;
    proveedorId: string;
    numero: string;
    fechaFactura: Date | string;
    fechaRegistro: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturaproveedor_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    centroAnaliticoId?: string | null;
    proyecto?: string | null;
    actuacionId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorUncheckedCreateNestedManyWithoutFacturaproveedorInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedOneWithoutFacturaproveedorInput;
};
export type facturaproveedorUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFieldUpdateOperationsInput | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proyecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUpdateOneWithoutFacturaproveedorNestedInput;
    centroanalitico?: Prisma.centroanaliticoUpdateOneWithoutFacturaproveedorNestedInput;
    cuentacontable?: Prisma.cuentacontableUpdateOneWithoutFacturaproveedorNestedInput;
    proveedor?: Prisma.proveedorUpdateOneRequiredWithoutFacturaproveedorNestedInput;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorUpdateManyWithoutFacturaproveedorNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateOneWithoutFacturaproveedorNestedInput;
};
export type facturaproveedorUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proveedorId?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFieldUpdateOperationsInput | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proyecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorUncheckedUpdateManyWithoutFacturaproveedorNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateOneWithoutFacturaproveedorNestedInput;
};
export type facturaproveedorCreateManyInput = {
    id: string;
    proveedorId: string;
    numero: string;
    fechaFactura: Date | string;
    fechaRegistro: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturaproveedor_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    centroAnaliticoId?: string | null;
    proyecto?: string | null;
    actuacionId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type facturaproveedorUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFieldUpdateOperationsInput | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proyecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type facturaproveedorUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proveedorId?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFieldUpdateOperationsInput | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proyecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FacturaproveedorListRelationFilter = {
    every?: Prisma.facturaproveedorWhereInput;
    some?: Prisma.facturaproveedorWhereInput;
    none?: Prisma.facturaproveedorWhereInput;
};
export type facturaproveedorOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type facturaproveedorOrderByRelevanceInput = {
    fields: Prisma.facturaproveedorOrderByRelevanceFieldEnum | Prisma.facturaproveedorOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type facturaproveedorProveedorIdNumeroCompoundUniqueInput = {
    proveedorId: string;
    numero: string;
};
export type facturaproveedorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    fechaFactura?: Prisma.SortOrder;
    fechaRegistro?: Prisma.SortOrder;
    vencimiento?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    cuentaContableId?: Prisma.SortOrder;
    centroAnaliticoId?: Prisma.SortOrder;
    proyecto?: Prisma.SortOrder;
    actuacionId?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type facturaproveedorAvgOrderByAggregateInput = {
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type facturaproveedorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    fechaFactura?: Prisma.SortOrder;
    fechaRegistro?: Prisma.SortOrder;
    vencimiento?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    cuentaContableId?: Prisma.SortOrder;
    centroAnaliticoId?: Prisma.SortOrder;
    proyecto?: Prisma.SortOrder;
    actuacionId?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type facturaproveedorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    proveedorId?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    fechaFactura?: Prisma.SortOrder;
    fechaRegistro?: Prisma.SortOrder;
    vencimiento?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    cuentaContableId?: Prisma.SortOrder;
    centroAnaliticoId?: Prisma.SortOrder;
    proyecto?: Prisma.SortOrder;
    actuacionId?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type facturaproveedorSumOrderByAggregateInput = {
    base?: Prisma.SortOrder;
    iva?: Prisma.SortOrder;
    total?: Prisma.SortOrder;
};
export type FacturaproveedorScalarRelationFilter = {
    is?: Prisma.facturaproveedorWhereInput;
    isNot?: Prisma.facturaproveedorWhereInput;
};
export type FacturaproveedorNullableScalarRelationFilter = {
    is?: Prisma.facturaproveedorWhereInput | null;
    isNot?: Prisma.facturaproveedorWhereInput | null;
};
export type facturaproveedorCreateNestedManyWithoutActuacionInput = {
    create?: Prisma.XOR<Prisma.facturaproveedorCreateWithoutActuacionInput, Prisma.facturaproveedorUncheckedCreateWithoutActuacionInput> | Prisma.facturaproveedorCreateWithoutActuacionInput[] | Prisma.facturaproveedorUncheckedCreateWithoutActuacionInput[];
    connectOrCreate?: Prisma.facturaproveedorCreateOrConnectWithoutActuacionInput | Prisma.facturaproveedorCreateOrConnectWithoutActuacionInput[];
    createMany?: Prisma.facturaproveedorCreateManyActuacionInputEnvelope;
    connect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
};
export type facturaproveedorUncheckedCreateNestedManyWithoutActuacionInput = {
    create?: Prisma.XOR<Prisma.facturaproveedorCreateWithoutActuacionInput, Prisma.facturaproveedorUncheckedCreateWithoutActuacionInput> | Prisma.facturaproveedorCreateWithoutActuacionInput[] | Prisma.facturaproveedorUncheckedCreateWithoutActuacionInput[];
    connectOrCreate?: Prisma.facturaproveedorCreateOrConnectWithoutActuacionInput | Prisma.facturaproveedorCreateOrConnectWithoutActuacionInput[];
    createMany?: Prisma.facturaproveedorCreateManyActuacionInputEnvelope;
    connect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
};
export type facturaproveedorUpdateManyWithoutActuacionNestedInput = {
    create?: Prisma.XOR<Prisma.facturaproveedorCreateWithoutActuacionInput, Prisma.facturaproveedorUncheckedCreateWithoutActuacionInput> | Prisma.facturaproveedorCreateWithoutActuacionInput[] | Prisma.facturaproveedorUncheckedCreateWithoutActuacionInput[];
    connectOrCreate?: Prisma.facturaproveedorCreateOrConnectWithoutActuacionInput | Prisma.facturaproveedorCreateOrConnectWithoutActuacionInput[];
    upsert?: Prisma.facturaproveedorUpsertWithWhereUniqueWithoutActuacionInput | Prisma.facturaproveedorUpsertWithWhereUniqueWithoutActuacionInput[];
    createMany?: Prisma.facturaproveedorCreateManyActuacionInputEnvelope;
    set?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    disconnect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    delete?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    connect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    update?: Prisma.facturaproveedorUpdateWithWhereUniqueWithoutActuacionInput | Prisma.facturaproveedorUpdateWithWhereUniqueWithoutActuacionInput[];
    updateMany?: Prisma.facturaproveedorUpdateManyWithWhereWithoutActuacionInput | Prisma.facturaproveedorUpdateManyWithWhereWithoutActuacionInput[];
    deleteMany?: Prisma.facturaproveedorScalarWhereInput | Prisma.facturaproveedorScalarWhereInput[];
};
export type facturaproveedorUncheckedUpdateManyWithoutActuacionNestedInput = {
    create?: Prisma.XOR<Prisma.facturaproveedorCreateWithoutActuacionInput, Prisma.facturaproveedorUncheckedCreateWithoutActuacionInput> | Prisma.facturaproveedorCreateWithoutActuacionInput[] | Prisma.facturaproveedorUncheckedCreateWithoutActuacionInput[];
    connectOrCreate?: Prisma.facturaproveedorCreateOrConnectWithoutActuacionInput | Prisma.facturaproveedorCreateOrConnectWithoutActuacionInput[];
    upsert?: Prisma.facturaproveedorUpsertWithWhereUniqueWithoutActuacionInput | Prisma.facturaproveedorUpsertWithWhereUniqueWithoutActuacionInput[];
    createMany?: Prisma.facturaproveedorCreateManyActuacionInputEnvelope;
    set?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    disconnect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    delete?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    connect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    update?: Prisma.facturaproveedorUpdateWithWhereUniqueWithoutActuacionInput | Prisma.facturaproveedorUpdateWithWhereUniqueWithoutActuacionInput[];
    updateMany?: Prisma.facturaproveedorUpdateManyWithWhereWithoutActuacionInput | Prisma.facturaproveedorUpdateManyWithWhereWithoutActuacionInput[];
    deleteMany?: Prisma.facturaproveedorScalarWhereInput | Prisma.facturaproveedorScalarWhereInput[];
};
export type facturaproveedorCreateNestedManyWithoutCentroanaliticoInput = {
    create?: Prisma.XOR<Prisma.facturaproveedorCreateWithoutCentroanaliticoInput, Prisma.facturaproveedorUncheckedCreateWithoutCentroanaliticoInput> | Prisma.facturaproveedorCreateWithoutCentroanaliticoInput[] | Prisma.facturaproveedorUncheckedCreateWithoutCentroanaliticoInput[];
    connectOrCreate?: Prisma.facturaproveedorCreateOrConnectWithoutCentroanaliticoInput | Prisma.facturaproveedorCreateOrConnectWithoutCentroanaliticoInput[];
    createMany?: Prisma.facturaproveedorCreateManyCentroanaliticoInputEnvelope;
    connect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
};
export type facturaproveedorUncheckedCreateNestedManyWithoutCentroanaliticoInput = {
    create?: Prisma.XOR<Prisma.facturaproveedorCreateWithoutCentroanaliticoInput, Prisma.facturaproveedorUncheckedCreateWithoutCentroanaliticoInput> | Prisma.facturaproveedorCreateWithoutCentroanaliticoInput[] | Prisma.facturaproveedorUncheckedCreateWithoutCentroanaliticoInput[];
    connectOrCreate?: Prisma.facturaproveedorCreateOrConnectWithoutCentroanaliticoInput | Prisma.facturaproveedorCreateOrConnectWithoutCentroanaliticoInput[];
    createMany?: Prisma.facturaproveedorCreateManyCentroanaliticoInputEnvelope;
    connect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
};
export type facturaproveedorUpdateManyWithoutCentroanaliticoNestedInput = {
    create?: Prisma.XOR<Prisma.facturaproveedorCreateWithoutCentroanaliticoInput, Prisma.facturaproveedorUncheckedCreateWithoutCentroanaliticoInput> | Prisma.facturaproveedorCreateWithoutCentroanaliticoInput[] | Prisma.facturaproveedorUncheckedCreateWithoutCentroanaliticoInput[];
    connectOrCreate?: Prisma.facturaproveedorCreateOrConnectWithoutCentroanaliticoInput | Prisma.facturaproveedorCreateOrConnectWithoutCentroanaliticoInput[];
    upsert?: Prisma.facturaproveedorUpsertWithWhereUniqueWithoutCentroanaliticoInput | Prisma.facturaproveedorUpsertWithWhereUniqueWithoutCentroanaliticoInput[];
    createMany?: Prisma.facturaproveedorCreateManyCentroanaliticoInputEnvelope;
    set?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    disconnect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    delete?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    connect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    update?: Prisma.facturaproveedorUpdateWithWhereUniqueWithoutCentroanaliticoInput | Prisma.facturaproveedorUpdateWithWhereUniqueWithoutCentroanaliticoInput[];
    updateMany?: Prisma.facturaproveedorUpdateManyWithWhereWithoutCentroanaliticoInput | Prisma.facturaproveedorUpdateManyWithWhereWithoutCentroanaliticoInput[];
    deleteMany?: Prisma.facturaproveedorScalarWhereInput | Prisma.facturaproveedorScalarWhereInput[];
};
export type facturaproveedorUncheckedUpdateManyWithoutCentroanaliticoNestedInput = {
    create?: Prisma.XOR<Prisma.facturaproveedorCreateWithoutCentroanaliticoInput, Prisma.facturaproveedorUncheckedCreateWithoutCentroanaliticoInput> | Prisma.facturaproveedorCreateWithoutCentroanaliticoInput[] | Prisma.facturaproveedorUncheckedCreateWithoutCentroanaliticoInput[];
    connectOrCreate?: Prisma.facturaproveedorCreateOrConnectWithoutCentroanaliticoInput | Prisma.facturaproveedorCreateOrConnectWithoutCentroanaliticoInput[];
    upsert?: Prisma.facturaproveedorUpsertWithWhereUniqueWithoutCentroanaliticoInput | Prisma.facturaproveedorUpsertWithWhereUniqueWithoutCentroanaliticoInput[];
    createMany?: Prisma.facturaproveedorCreateManyCentroanaliticoInputEnvelope;
    set?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    disconnect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    delete?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    connect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    update?: Prisma.facturaproveedorUpdateWithWhereUniqueWithoutCentroanaliticoInput | Prisma.facturaproveedorUpdateWithWhereUniqueWithoutCentroanaliticoInput[];
    updateMany?: Prisma.facturaproveedorUpdateManyWithWhereWithoutCentroanaliticoInput | Prisma.facturaproveedorUpdateManyWithWhereWithoutCentroanaliticoInput[];
    deleteMany?: Prisma.facturaproveedorScalarWhereInput | Prisma.facturaproveedorScalarWhereInput[];
};
export type facturaproveedorCreateNestedManyWithoutCuentacontableInput = {
    create?: Prisma.XOR<Prisma.facturaproveedorCreateWithoutCuentacontableInput, Prisma.facturaproveedorUncheckedCreateWithoutCuentacontableInput> | Prisma.facturaproveedorCreateWithoutCuentacontableInput[] | Prisma.facturaproveedorUncheckedCreateWithoutCuentacontableInput[];
    connectOrCreate?: Prisma.facturaproveedorCreateOrConnectWithoutCuentacontableInput | Prisma.facturaproveedorCreateOrConnectWithoutCuentacontableInput[];
    createMany?: Prisma.facturaproveedorCreateManyCuentacontableInputEnvelope;
    connect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
};
export type facturaproveedorUncheckedCreateNestedManyWithoutCuentacontableInput = {
    create?: Prisma.XOR<Prisma.facturaproveedorCreateWithoutCuentacontableInput, Prisma.facturaproveedorUncheckedCreateWithoutCuentacontableInput> | Prisma.facturaproveedorCreateWithoutCuentacontableInput[] | Prisma.facturaproveedorUncheckedCreateWithoutCuentacontableInput[];
    connectOrCreate?: Prisma.facturaproveedorCreateOrConnectWithoutCuentacontableInput | Prisma.facturaproveedorCreateOrConnectWithoutCuentacontableInput[];
    createMany?: Prisma.facturaproveedorCreateManyCuentacontableInputEnvelope;
    connect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
};
export type facturaproveedorUpdateManyWithoutCuentacontableNestedInput = {
    create?: Prisma.XOR<Prisma.facturaproveedorCreateWithoutCuentacontableInput, Prisma.facturaproveedorUncheckedCreateWithoutCuentacontableInput> | Prisma.facturaproveedorCreateWithoutCuentacontableInput[] | Prisma.facturaproveedorUncheckedCreateWithoutCuentacontableInput[];
    connectOrCreate?: Prisma.facturaproveedorCreateOrConnectWithoutCuentacontableInput | Prisma.facturaproveedorCreateOrConnectWithoutCuentacontableInput[];
    upsert?: Prisma.facturaproveedorUpsertWithWhereUniqueWithoutCuentacontableInput | Prisma.facturaproveedorUpsertWithWhereUniqueWithoutCuentacontableInput[];
    createMany?: Prisma.facturaproveedorCreateManyCuentacontableInputEnvelope;
    set?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    disconnect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    delete?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    connect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    update?: Prisma.facturaproveedorUpdateWithWhereUniqueWithoutCuentacontableInput | Prisma.facturaproveedorUpdateWithWhereUniqueWithoutCuentacontableInput[];
    updateMany?: Prisma.facturaproveedorUpdateManyWithWhereWithoutCuentacontableInput | Prisma.facturaproveedorUpdateManyWithWhereWithoutCuentacontableInput[];
    deleteMany?: Prisma.facturaproveedorScalarWhereInput | Prisma.facturaproveedorScalarWhereInput[];
};
export type facturaproveedorUncheckedUpdateManyWithoutCuentacontableNestedInput = {
    create?: Prisma.XOR<Prisma.facturaproveedorCreateWithoutCuentacontableInput, Prisma.facturaproveedorUncheckedCreateWithoutCuentacontableInput> | Prisma.facturaproveedorCreateWithoutCuentacontableInput[] | Prisma.facturaproveedorUncheckedCreateWithoutCuentacontableInput[];
    connectOrCreate?: Prisma.facturaproveedorCreateOrConnectWithoutCuentacontableInput | Prisma.facturaproveedorCreateOrConnectWithoutCuentacontableInput[];
    upsert?: Prisma.facturaproveedorUpsertWithWhereUniqueWithoutCuentacontableInput | Prisma.facturaproveedorUpsertWithWhereUniqueWithoutCuentacontableInput[];
    createMany?: Prisma.facturaproveedorCreateManyCuentacontableInputEnvelope;
    set?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    disconnect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    delete?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    connect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    update?: Prisma.facturaproveedorUpdateWithWhereUniqueWithoutCuentacontableInput | Prisma.facturaproveedorUpdateWithWhereUniqueWithoutCuentacontableInput[];
    updateMany?: Prisma.facturaproveedorUpdateManyWithWhereWithoutCuentacontableInput | Prisma.facturaproveedorUpdateManyWithWhereWithoutCuentacontableInput[];
    deleteMany?: Prisma.facturaproveedorScalarWhereInput | Prisma.facturaproveedorScalarWhereInput[];
};
export type Enumfacturaproveedor_estadoFieldUpdateOperationsInput = {
    set?: $Enums.facturaproveedor_estado;
};
export type facturaproveedorCreateNestedOneWithoutFacturarectificativaproveedorInput = {
    create?: Prisma.XOR<Prisma.facturaproveedorCreateWithoutFacturarectificativaproveedorInput, Prisma.facturaproveedorUncheckedCreateWithoutFacturarectificativaproveedorInput>;
    connectOrCreate?: Prisma.facturaproveedorCreateOrConnectWithoutFacturarectificativaproveedorInput;
    connect?: Prisma.facturaproveedorWhereUniqueInput;
};
export type facturaproveedorUpdateOneRequiredWithoutFacturarectificativaproveedorNestedInput = {
    create?: Prisma.XOR<Prisma.facturaproveedorCreateWithoutFacturarectificativaproveedorInput, Prisma.facturaproveedorUncheckedCreateWithoutFacturarectificativaproveedorInput>;
    connectOrCreate?: Prisma.facturaproveedorCreateOrConnectWithoutFacturarectificativaproveedorInput;
    upsert?: Prisma.facturaproveedorUpsertWithoutFacturarectificativaproveedorInput;
    connect?: Prisma.facturaproveedorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.facturaproveedorUpdateToOneWithWhereWithoutFacturarectificativaproveedorInput, Prisma.facturaproveedorUpdateWithoutFacturarectificativaproveedorInput>, Prisma.facturaproveedorUncheckedUpdateWithoutFacturarectificativaproveedorInput>;
};
export type facturaproveedorCreateNestedOneWithoutObligacioneconomicaInput = {
    create?: Prisma.XOR<Prisma.facturaproveedorCreateWithoutObligacioneconomicaInput, Prisma.facturaproveedorUncheckedCreateWithoutObligacioneconomicaInput>;
    connectOrCreate?: Prisma.facturaproveedorCreateOrConnectWithoutObligacioneconomicaInput;
    connect?: Prisma.facturaproveedorWhereUniqueInput;
};
export type facturaproveedorUpdateOneWithoutObligacioneconomicaNestedInput = {
    create?: Prisma.XOR<Prisma.facturaproveedorCreateWithoutObligacioneconomicaInput, Prisma.facturaproveedorUncheckedCreateWithoutObligacioneconomicaInput>;
    connectOrCreate?: Prisma.facturaproveedorCreateOrConnectWithoutObligacioneconomicaInput;
    upsert?: Prisma.facturaproveedorUpsertWithoutObligacioneconomicaInput;
    disconnect?: Prisma.facturaproveedorWhereInput | boolean;
    delete?: Prisma.facturaproveedorWhereInput | boolean;
    connect?: Prisma.facturaproveedorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.facturaproveedorUpdateToOneWithWhereWithoutObligacioneconomicaInput, Prisma.facturaproveedorUpdateWithoutObligacioneconomicaInput>, Prisma.facturaproveedorUncheckedUpdateWithoutObligacioneconomicaInput>;
};
export type facturaproveedorCreateNestedManyWithoutProveedorInput = {
    create?: Prisma.XOR<Prisma.facturaproveedorCreateWithoutProveedorInput, Prisma.facturaproveedorUncheckedCreateWithoutProveedorInput> | Prisma.facturaproveedorCreateWithoutProveedorInput[] | Prisma.facturaproveedorUncheckedCreateWithoutProveedorInput[];
    connectOrCreate?: Prisma.facturaproveedorCreateOrConnectWithoutProveedorInput | Prisma.facturaproveedorCreateOrConnectWithoutProveedorInput[];
    createMany?: Prisma.facturaproveedorCreateManyProveedorInputEnvelope;
    connect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
};
export type facturaproveedorUncheckedCreateNestedManyWithoutProveedorInput = {
    create?: Prisma.XOR<Prisma.facturaproveedorCreateWithoutProveedorInput, Prisma.facturaproveedorUncheckedCreateWithoutProveedorInput> | Prisma.facturaproveedorCreateWithoutProveedorInput[] | Prisma.facturaproveedorUncheckedCreateWithoutProveedorInput[];
    connectOrCreate?: Prisma.facturaproveedorCreateOrConnectWithoutProveedorInput | Prisma.facturaproveedorCreateOrConnectWithoutProveedorInput[];
    createMany?: Prisma.facturaproveedorCreateManyProveedorInputEnvelope;
    connect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
};
export type facturaproveedorUpdateManyWithoutProveedorNestedInput = {
    create?: Prisma.XOR<Prisma.facturaproveedorCreateWithoutProveedorInput, Prisma.facturaproveedorUncheckedCreateWithoutProveedorInput> | Prisma.facturaproveedorCreateWithoutProveedorInput[] | Prisma.facturaproveedorUncheckedCreateWithoutProveedorInput[];
    connectOrCreate?: Prisma.facturaproveedorCreateOrConnectWithoutProveedorInput | Prisma.facturaproveedorCreateOrConnectWithoutProveedorInput[];
    upsert?: Prisma.facturaproveedorUpsertWithWhereUniqueWithoutProveedorInput | Prisma.facturaproveedorUpsertWithWhereUniqueWithoutProveedorInput[];
    createMany?: Prisma.facturaproveedorCreateManyProveedorInputEnvelope;
    set?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    disconnect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    delete?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    connect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    update?: Prisma.facturaproveedorUpdateWithWhereUniqueWithoutProveedorInput | Prisma.facturaproveedorUpdateWithWhereUniqueWithoutProveedorInput[];
    updateMany?: Prisma.facturaproveedorUpdateManyWithWhereWithoutProveedorInput | Prisma.facturaproveedorUpdateManyWithWhereWithoutProveedorInput[];
    deleteMany?: Prisma.facturaproveedorScalarWhereInput | Prisma.facturaproveedorScalarWhereInput[];
};
export type facturaproveedorUncheckedUpdateManyWithoutProveedorNestedInput = {
    create?: Prisma.XOR<Prisma.facturaproveedorCreateWithoutProveedorInput, Prisma.facturaproveedorUncheckedCreateWithoutProveedorInput> | Prisma.facturaproveedorCreateWithoutProveedorInput[] | Prisma.facturaproveedorUncheckedCreateWithoutProveedorInput[];
    connectOrCreate?: Prisma.facturaproveedorCreateOrConnectWithoutProveedorInput | Prisma.facturaproveedorCreateOrConnectWithoutProveedorInput[];
    upsert?: Prisma.facturaproveedorUpsertWithWhereUniqueWithoutProveedorInput | Prisma.facturaproveedorUpsertWithWhereUniqueWithoutProveedorInput[];
    createMany?: Prisma.facturaproveedorCreateManyProveedorInputEnvelope;
    set?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    disconnect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    delete?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    connect?: Prisma.facturaproveedorWhereUniqueInput | Prisma.facturaproveedorWhereUniqueInput[];
    update?: Prisma.facturaproveedorUpdateWithWhereUniqueWithoutProveedorInput | Prisma.facturaproveedorUpdateWithWhereUniqueWithoutProveedorInput[];
    updateMany?: Prisma.facturaproveedorUpdateManyWithWhereWithoutProveedorInput | Prisma.facturaproveedorUpdateManyWithWhereWithoutProveedorInput[];
    deleteMany?: Prisma.facturaproveedorScalarWhereInput | Prisma.facturaproveedorScalarWhereInput[];
};
export type facturaproveedorCreateWithoutActuacionInput = {
    id: string;
    numero: string;
    fechaFactura: Date | string;
    fechaRegistro: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturaproveedor_estado;
    asientoId?: string | null;
    proyecto?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    centroanalitico?: Prisma.centroanaliticoCreateNestedOneWithoutFacturaproveedorInput;
    cuentacontable?: Prisma.cuentacontableCreateNestedOneWithoutFacturaproveedorInput;
    proveedor: Prisma.proveedorCreateNestedOneWithoutFacturaproveedorInput;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorCreateNestedManyWithoutFacturaproveedorInput;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedOneWithoutFacturaproveedorInput;
};
export type facturaproveedorUncheckedCreateWithoutActuacionInput = {
    id: string;
    proveedorId: string;
    numero: string;
    fechaFactura: Date | string;
    fechaRegistro: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturaproveedor_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    centroAnaliticoId?: string | null;
    proyecto?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorUncheckedCreateNestedManyWithoutFacturaproveedorInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedOneWithoutFacturaproveedorInput;
};
export type facturaproveedorCreateOrConnectWithoutActuacionInput = {
    where: Prisma.facturaproveedorWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaproveedorCreateWithoutActuacionInput, Prisma.facturaproveedorUncheckedCreateWithoutActuacionInput>;
};
export type facturaproveedorCreateManyActuacionInputEnvelope = {
    data: Prisma.facturaproveedorCreateManyActuacionInput | Prisma.facturaproveedorCreateManyActuacionInput[];
    skipDuplicates?: boolean;
};
export type facturaproveedorUpsertWithWhereUniqueWithoutActuacionInput = {
    where: Prisma.facturaproveedorWhereUniqueInput;
    update: Prisma.XOR<Prisma.facturaproveedorUpdateWithoutActuacionInput, Prisma.facturaproveedorUncheckedUpdateWithoutActuacionInput>;
    create: Prisma.XOR<Prisma.facturaproveedorCreateWithoutActuacionInput, Prisma.facturaproveedorUncheckedCreateWithoutActuacionInput>;
};
export type facturaproveedorUpdateWithWhereUniqueWithoutActuacionInput = {
    where: Prisma.facturaproveedorWhereUniqueInput;
    data: Prisma.XOR<Prisma.facturaproveedorUpdateWithoutActuacionInput, Prisma.facturaproveedorUncheckedUpdateWithoutActuacionInput>;
};
export type facturaproveedorUpdateManyWithWhereWithoutActuacionInput = {
    where: Prisma.facturaproveedorScalarWhereInput;
    data: Prisma.XOR<Prisma.facturaproveedorUpdateManyMutationInput, Prisma.facturaproveedorUncheckedUpdateManyWithoutActuacionInput>;
};
export type facturaproveedorScalarWhereInput = {
    AND?: Prisma.facturaproveedorScalarWhereInput | Prisma.facturaproveedorScalarWhereInput[];
    OR?: Prisma.facturaproveedorScalarWhereInput[];
    NOT?: Prisma.facturaproveedorScalarWhereInput | Prisma.facturaproveedorScalarWhereInput[];
    id?: Prisma.StringFilter<"facturaproveedor"> | string;
    proveedorId?: Prisma.StringFilter<"facturaproveedor"> | string;
    numero?: Prisma.StringFilter<"facturaproveedor"> | string;
    fechaFactura?: Prisma.DateTimeFilter<"facturaproveedor"> | Date | string;
    fechaRegistro?: Prisma.DateTimeFilter<"facturaproveedor"> | Date | string;
    vencimiento?: Prisma.DateTimeNullableFilter<"facturaproveedor"> | Date | string | null;
    concepto?: Prisma.StringFilter<"facturaproveedor"> | string;
    base?: Prisma.DecimalFilter<"facturaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFilter<"facturaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFilter<"facturaproveedor"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFilter<"facturaproveedor"> | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.StringNullableFilter<"facturaproveedor"> | string | null;
    cuentaContableId?: Prisma.StringNullableFilter<"facturaproveedor"> | string | null;
    centroAnaliticoId?: Prisma.StringNullableFilter<"facturaproveedor"> | string | null;
    proyecto?: Prisma.StringNullableFilter<"facturaproveedor"> | string | null;
    actuacionId?: Prisma.StringNullableFilter<"facturaproveedor"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"facturaproveedor"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"facturaproveedor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"facturaproveedor"> | Date | string;
};
export type facturaproveedorCreateWithoutCentroanaliticoInput = {
    id: string;
    numero: string;
    fechaFactura: Date | string;
    fechaRegistro: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturaproveedor_estado;
    asientoId?: string | null;
    proyecto?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionCreateNestedOneWithoutFacturaproveedorInput;
    cuentacontable?: Prisma.cuentacontableCreateNestedOneWithoutFacturaproveedorInput;
    proveedor: Prisma.proveedorCreateNestedOneWithoutFacturaproveedorInput;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorCreateNestedManyWithoutFacturaproveedorInput;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedOneWithoutFacturaproveedorInput;
};
export type facturaproveedorUncheckedCreateWithoutCentroanaliticoInput = {
    id: string;
    proveedorId: string;
    numero: string;
    fechaFactura: Date | string;
    fechaRegistro: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturaproveedor_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    proyecto?: string | null;
    actuacionId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorUncheckedCreateNestedManyWithoutFacturaproveedorInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedOneWithoutFacturaproveedorInput;
};
export type facturaproveedorCreateOrConnectWithoutCentroanaliticoInput = {
    where: Prisma.facturaproveedorWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaproveedorCreateWithoutCentroanaliticoInput, Prisma.facturaproveedorUncheckedCreateWithoutCentroanaliticoInput>;
};
export type facturaproveedorCreateManyCentroanaliticoInputEnvelope = {
    data: Prisma.facturaproveedorCreateManyCentroanaliticoInput | Prisma.facturaproveedorCreateManyCentroanaliticoInput[];
    skipDuplicates?: boolean;
};
export type facturaproveedorUpsertWithWhereUniqueWithoutCentroanaliticoInput = {
    where: Prisma.facturaproveedorWhereUniqueInput;
    update: Prisma.XOR<Prisma.facturaproveedorUpdateWithoutCentroanaliticoInput, Prisma.facturaproveedorUncheckedUpdateWithoutCentroanaliticoInput>;
    create: Prisma.XOR<Prisma.facturaproveedorCreateWithoutCentroanaliticoInput, Prisma.facturaproveedorUncheckedCreateWithoutCentroanaliticoInput>;
};
export type facturaproveedorUpdateWithWhereUniqueWithoutCentroanaliticoInput = {
    where: Prisma.facturaproveedorWhereUniqueInput;
    data: Prisma.XOR<Prisma.facturaproveedorUpdateWithoutCentroanaliticoInput, Prisma.facturaproveedorUncheckedUpdateWithoutCentroanaliticoInput>;
};
export type facturaproveedorUpdateManyWithWhereWithoutCentroanaliticoInput = {
    where: Prisma.facturaproveedorScalarWhereInput;
    data: Prisma.XOR<Prisma.facturaproveedorUpdateManyMutationInput, Prisma.facturaproveedorUncheckedUpdateManyWithoutCentroanaliticoInput>;
};
export type facturaproveedorCreateWithoutCuentacontableInput = {
    id: string;
    numero: string;
    fechaFactura: Date | string;
    fechaRegistro: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturaproveedor_estado;
    asientoId?: string | null;
    proyecto?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionCreateNestedOneWithoutFacturaproveedorInput;
    centroanalitico?: Prisma.centroanaliticoCreateNestedOneWithoutFacturaproveedorInput;
    proveedor: Prisma.proveedorCreateNestedOneWithoutFacturaproveedorInput;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorCreateNestedManyWithoutFacturaproveedorInput;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedOneWithoutFacturaproveedorInput;
};
export type facturaproveedorUncheckedCreateWithoutCuentacontableInput = {
    id: string;
    proveedorId: string;
    numero: string;
    fechaFactura: Date | string;
    fechaRegistro: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturaproveedor_estado;
    asientoId?: string | null;
    centroAnaliticoId?: string | null;
    proyecto?: string | null;
    actuacionId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorUncheckedCreateNestedManyWithoutFacturaproveedorInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedOneWithoutFacturaproveedorInput;
};
export type facturaproveedorCreateOrConnectWithoutCuentacontableInput = {
    where: Prisma.facturaproveedorWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaproveedorCreateWithoutCuentacontableInput, Prisma.facturaproveedorUncheckedCreateWithoutCuentacontableInput>;
};
export type facturaproveedorCreateManyCuentacontableInputEnvelope = {
    data: Prisma.facturaproveedorCreateManyCuentacontableInput | Prisma.facturaproveedorCreateManyCuentacontableInput[];
    skipDuplicates?: boolean;
};
export type facturaproveedorUpsertWithWhereUniqueWithoutCuentacontableInput = {
    where: Prisma.facturaproveedorWhereUniqueInput;
    update: Prisma.XOR<Prisma.facturaproveedorUpdateWithoutCuentacontableInput, Prisma.facturaproveedorUncheckedUpdateWithoutCuentacontableInput>;
    create: Prisma.XOR<Prisma.facturaproveedorCreateWithoutCuentacontableInput, Prisma.facturaproveedorUncheckedCreateWithoutCuentacontableInput>;
};
export type facturaproveedorUpdateWithWhereUniqueWithoutCuentacontableInput = {
    where: Prisma.facturaproveedorWhereUniqueInput;
    data: Prisma.XOR<Prisma.facturaproveedorUpdateWithoutCuentacontableInput, Prisma.facturaproveedorUncheckedUpdateWithoutCuentacontableInput>;
};
export type facturaproveedorUpdateManyWithWhereWithoutCuentacontableInput = {
    where: Prisma.facturaproveedorScalarWhereInput;
    data: Prisma.XOR<Prisma.facturaproveedorUpdateManyMutationInput, Prisma.facturaproveedorUncheckedUpdateManyWithoutCuentacontableInput>;
};
export type facturaproveedorCreateWithoutFacturarectificativaproveedorInput = {
    id: string;
    numero: string;
    fechaFactura: Date | string;
    fechaRegistro: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturaproveedor_estado;
    asientoId?: string | null;
    proyecto?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionCreateNestedOneWithoutFacturaproveedorInput;
    centroanalitico?: Prisma.centroanaliticoCreateNestedOneWithoutFacturaproveedorInput;
    cuentacontable?: Prisma.cuentacontableCreateNestedOneWithoutFacturaproveedorInput;
    proveedor: Prisma.proveedorCreateNestedOneWithoutFacturaproveedorInput;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedOneWithoutFacturaproveedorInput;
};
export type facturaproveedorUncheckedCreateWithoutFacturarectificativaproveedorInput = {
    id: string;
    proveedorId: string;
    numero: string;
    fechaFactura: Date | string;
    fechaRegistro: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturaproveedor_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    centroAnaliticoId?: string | null;
    proyecto?: string | null;
    actuacionId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedOneWithoutFacturaproveedorInput;
};
export type facturaproveedorCreateOrConnectWithoutFacturarectificativaproveedorInput = {
    where: Prisma.facturaproveedorWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaproveedorCreateWithoutFacturarectificativaproveedorInput, Prisma.facturaproveedorUncheckedCreateWithoutFacturarectificativaproveedorInput>;
};
export type facturaproveedorUpsertWithoutFacturarectificativaproveedorInput = {
    update: Prisma.XOR<Prisma.facturaproveedorUpdateWithoutFacturarectificativaproveedorInput, Prisma.facturaproveedorUncheckedUpdateWithoutFacturarectificativaproveedorInput>;
    create: Prisma.XOR<Prisma.facturaproveedorCreateWithoutFacturarectificativaproveedorInput, Prisma.facturaproveedorUncheckedCreateWithoutFacturarectificativaproveedorInput>;
    where?: Prisma.facturaproveedorWhereInput;
};
export type facturaproveedorUpdateToOneWithWhereWithoutFacturarectificativaproveedorInput = {
    where?: Prisma.facturaproveedorWhereInput;
    data: Prisma.XOR<Prisma.facturaproveedorUpdateWithoutFacturarectificativaproveedorInput, Prisma.facturaproveedorUncheckedUpdateWithoutFacturarectificativaproveedorInput>;
};
export type facturaproveedorUpdateWithoutFacturarectificativaproveedorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFieldUpdateOperationsInput | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proyecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUpdateOneWithoutFacturaproveedorNestedInput;
    centroanalitico?: Prisma.centroanaliticoUpdateOneWithoutFacturaproveedorNestedInput;
    cuentacontable?: Prisma.cuentacontableUpdateOneWithoutFacturaproveedorNestedInput;
    proveedor?: Prisma.proveedorUpdateOneRequiredWithoutFacturaproveedorNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateOneWithoutFacturaproveedorNestedInput;
};
export type facturaproveedorUncheckedUpdateWithoutFacturarectificativaproveedorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proveedorId?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFieldUpdateOperationsInput | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proyecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateOneWithoutFacturaproveedorNestedInput;
};
export type facturaproveedorCreateWithoutObligacioneconomicaInput = {
    id: string;
    numero: string;
    fechaFactura: Date | string;
    fechaRegistro: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturaproveedor_estado;
    asientoId?: string | null;
    proyecto?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionCreateNestedOneWithoutFacturaproveedorInput;
    centroanalitico?: Prisma.centroanaliticoCreateNestedOneWithoutFacturaproveedorInput;
    cuentacontable?: Prisma.cuentacontableCreateNestedOneWithoutFacturaproveedorInput;
    proveedor: Prisma.proveedorCreateNestedOneWithoutFacturaproveedorInput;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorCreateNestedManyWithoutFacturaproveedorInput;
};
export type facturaproveedorUncheckedCreateWithoutObligacioneconomicaInput = {
    id: string;
    proveedorId: string;
    numero: string;
    fechaFactura: Date | string;
    fechaRegistro: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturaproveedor_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    centroAnaliticoId?: string | null;
    proyecto?: string | null;
    actuacionId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorUncheckedCreateNestedManyWithoutFacturaproveedorInput;
};
export type facturaproveedorCreateOrConnectWithoutObligacioneconomicaInput = {
    where: Prisma.facturaproveedorWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaproveedorCreateWithoutObligacioneconomicaInput, Prisma.facturaproveedorUncheckedCreateWithoutObligacioneconomicaInput>;
};
export type facturaproveedorUpsertWithoutObligacioneconomicaInput = {
    update: Prisma.XOR<Prisma.facturaproveedorUpdateWithoutObligacioneconomicaInput, Prisma.facturaproveedorUncheckedUpdateWithoutObligacioneconomicaInput>;
    create: Prisma.XOR<Prisma.facturaproveedorCreateWithoutObligacioneconomicaInput, Prisma.facturaproveedorUncheckedCreateWithoutObligacioneconomicaInput>;
    where?: Prisma.facturaproveedorWhereInput;
};
export type facturaproveedorUpdateToOneWithWhereWithoutObligacioneconomicaInput = {
    where?: Prisma.facturaproveedorWhereInput;
    data: Prisma.XOR<Prisma.facturaproveedorUpdateWithoutObligacioneconomicaInput, Prisma.facturaproveedorUncheckedUpdateWithoutObligacioneconomicaInput>;
};
export type facturaproveedorUpdateWithoutObligacioneconomicaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFieldUpdateOperationsInput | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proyecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUpdateOneWithoutFacturaproveedorNestedInput;
    centroanalitico?: Prisma.centroanaliticoUpdateOneWithoutFacturaproveedorNestedInput;
    cuentacontable?: Prisma.cuentacontableUpdateOneWithoutFacturaproveedorNestedInput;
    proveedor?: Prisma.proveedorUpdateOneRequiredWithoutFacturaproveedorNestedInput;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorUpdateManyWithoutFacturaproveedorNestedInput;
};
export type facturaproveedorUncheckedUpdateWithoutObligacioneconomicaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proveedorId?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFieldUpdateOperationsInput | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proyecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorUncheckedUpdateManyWithoutFacturaproveedorNestedInput;
};
export type facturaproveedorCreateWithoutProveedorInput = {
    id: string;
    numero: string;
    fechaFactura: Date | string;
    fechaRegistro: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturaproveedor_estado;
    asientoId?: string | null;
    proyecto?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionCreateNestedOneWithoutFacturaproveedorInput;
    centroanalitico?: Prisma.centroanaliticoCreateNestedOneWithoutFacturaproveedorInput;
    cuentacontable?: Prisma.cuentacontableCreateNestedOneWithoutFacturaproveedorInput;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorCreateNestedManyWithoutFacturaproveedorInput;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedOneWithoutFacturaproveedorInput;
};
export type facturaproveedorUncheckedCreateWithoutProveedorInput = {
    id: string;
    numero: string;
    fechaFactura: Date | string;
    fechaRegistro: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturaproveedor_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    centroAnaliticoId?: string | null;
    proyecto?: string | null;
    actuacionId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorUncheckedCreateNestedManyWithoutFacturaproveedorInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedOneWithoutFacturaproveedorInput;
};
export type facturaproveedorCreateOrConnectWithoutProveedorInput = {
    where: Prisma.facturaproveedorWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaproveedorCreateWithoutProveedorInput, Prisma.facturaproveedorUncheckedCreateWithoutProveedorInput>;
};
export type facturaproveedorCreateManyProveedorInputEnvelope = {
    data: Prisma.facturaproveedorCreateManyProveedorInput | Prisma.facturaproveedorCreateManyProveedorInput[];
    skipDuplicates?: boolean;
};
export type facturaproveedorUpsertWithWhereUniqueWithoutProveedorInput = {
    where: Prisma.facturaproveedorWhereUniqueInput;
    update: Prisma.XOR<Prisma.facturaproveedorUpdateWithoutProveedorInput, Prisma.facturaproveedorUncheckedUpdateWithoutProveedorInput>;
    create: Prisma.XOR<Prisma.facturaproveedorCreateWithoutProveedorInput, Prisma.facturaproveedorUncheckedCreateWithoutProveedorInput>;
};
export type facturaproveedorUpdateWithWhereUniqueWithoutProveedorInput = {
    where: Prisma.facturaproveedorWhereUniqueInput;
    data: Prisma.XOR<Prisma.facturaproveedorUpdateWithoutProveedorInput, Prisma.facturaproveedorUncheckedUpdateWithoutProveedorInput>;
};
export type facturaproveedorUpdateManyWithWhereWithoutProveedorInput = {
    where: Prisma.facturaproveedorScalarWhereInput;
    data: Prisma.XOR<Prisma.facturaproveedorUpdateManyMutationInput, Prisma.facturaproveedorUncheckedUpdateManyWithoutProveedorInput>;
};
export type facturaproveedorCreateManyActuacionInput = {
    id: string;
    proveedorId: string;
    numero: string;
    fechaFactura: Date | string;
    fechaRegistro: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturaproveedor_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    centroAnaliticoId?: string | null;
    proyecto?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type facturaproveedorUpdateWithoutActuacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFieldUpdateOperationsInput | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proyecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    centroanalitico?: Prisma.centroanaliticoUpdateOneWithoutFacturaproveedorNestedInput;
    cuentacontable?: Prisma.cuentacontableUpdateOneWithoutFacturaproveedorNestedInput;
    proveedor?: Prisma.proveedorUpdateOneRequiredWithoutFacturaproveedorNestedInput;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorUpdateManyWithoutFacturaproveedorNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateOneWithoutFacturaproveedorNestedInput;
};
export type facturaproveedorUncheckedUpdateWithoutActuacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proveedorId?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFieldUpdateOperationsInput | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proyecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorUncheckedUpdateManyWithoutFacturaproveedorNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateOneWithoutFacturaproveedorNestedInput;
};
export type facturaproveedorUncheckedUpdateManyWithoutActuacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proveedorId?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFieldUpdateOperationsInput | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proyecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type facturaproveedorCreateManyCentroanaliticoInput = {
    id: string;
    proveedorId: string;
    numero: string;
    fechaFactura: Date | string;
    fechaRegistro: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturaproveedor_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    proyecto?: string | null;
    actuacionId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type facturaproveedorUpdateWithoutCentroanaliticoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFieldUpdateOperationsInput | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proyecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUpdateOneWithoutFacturaproveedorNestedInput;
    cuentacontable?: Prisma.cuentacontableUpdateOneWithoutFacturaproveedorNestedInput;
    proveedor?: Prisma.proveedorUpdateOneRequiredWithoutFacturaproveedorNestedInput;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorUpdateManyWithoutFacturaproveedorNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateOneWithoutFacturaproveedorNestedInput;
};
export type facturaproveedorUncheckedUpdateWithoutCentroanaliticoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proveedorId?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFieldUpdateOperationsInput | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proyecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorUncheckedUpdateManyWithoutFacturaproveedorNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateOneWithoutFacturaproveedorNestedInput;
};
export type facturaproveedorUncheckedUpdateManyWithoutCentroanaliticoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proveedorId?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFieldUpdateOperationsInput | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proyecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type facturaproveedorCreateManyCuentacontableInput = {
    id: string;
    proveedorId: string;
    numero: string;
    fechaFactura: Date | string;
    fechaRegistro: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturaproveedor_estado;
    asientoId?: string | null;
    centroAnaliticoId?: string | null;
    proyecto?: string | null;
    actuacionId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type facturaproveedorUpdateWithoutCuentacontableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFieldUpdateOperationsInput | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proyecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUpdateOneWithoutFacturaproveedorNestedInput;
    centroanalitico?: Prisma.centroanaliticoUpdateOneWithoutFacturaproveedorNestedInput;
    proveedor?: Prisma.proveedorUpdateOneRequiredWithoutFacturaproveedorNestedInput;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorUpdateManyWithoutFacturaproveedorNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateOneWithoutFacturaproveedorNestedInput;
};
export type facturaproveedorUncheckedUpdateWithoutCuentacontableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proveedorId?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFieldUpdateOperationsInput | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proyecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorUncheckedUpdateManyWithoutFacturaproveedorNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateOneWithoutFacturaproveedorNestedInput;
};
export type facturaproveedorUncheckedUpdateManyWithoutCuentacontableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    proveedorId?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFieldUpdateOperationsInput | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proyecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type facturaproveedorCreateManyProveedorInput = {
    id: string;
    numero: string;
    fechaFactura: Date | string;
    fechaRegistro: Date | string;
    vencimiento?: Date | string | null;
    concepto: string;
    base: runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva: runtime.Decimal | runtime.DecimalJsLike | number | string;
    total: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.facturaproveedor_estado;
    asientoId?: string | null;
    cuentaContableId?: string | null;
    centroAnaliticoId?: string | null;
    proyecto?: string | null;
    actuacionId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type facturaproveedorUpdateWithoutProveedorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFieldUpdateOperationsInput | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proyecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUpdateOneWithoutFacturaproveedorNestedInput;
    centroanalitico?: Prisma.centroanaliticoUpdateOneWithoutFacturaproveedorNestedInput;
    cuentacontable?: Prisma.cuentacontableUpdateOneWithoutFacturaproveedorNestedInput;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorUpdateManyWithoutFacturaproveedorNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateOneWithoutFacturaproveedorNestedInput;
};
export type facturaproveedorUncheckedUpdateWithoutProveedorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFieldUpdateOperationsInput | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proyecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorUncheckedUpdateManyWithoutFacturaproveedorNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateOneWithoutFacturaproveedorNestedInput;
};
export type facturaproveedorUncheckedUpdateManyWithoutProveedorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaFactura?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    vencimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    base?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    iva?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    total?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumfacturaproveedor_estadoFieldUpdateOperationsInput | $Enums.facturaproveedor_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    centroAnaliticoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proyecto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actuacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type FacturaproveedorCountOutputType
 */
export type FacturaproveedorCountOutputType = {
    facturarectificativaproveedor: number;
};
export type FacturaproveedorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    facturarectificativaproveedor?: boolean | FacturaproveedorCountOutputTypeCountFacturarectificativaproveedorArgs;
};
/**
 * FacturaproveedorCountOutputType without action
 */
export type FacturaproveedorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacturaproveedorCountOutputType
     */
    select?: Prisma.FacturaproveedorCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * FacturaproveedorCountOutputType without action
 */
export type FacturaproveedorCountOutputTypeCountFacturarectificativaproveedorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturarectificativaproveedorWhereInput;
};
export type facturaproveedorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    proveedorId?: boolean;
    numero?: boolean;
    fechaFactura?: boolean;
    fechaRegistro?: boolean;
    vencimiento?: boolean;
    concepto?: boolean;
    base?: boolean;
    iva?: boolean;
    total?: boolean;
    estado?: boolean;
    asientoId?: boolean;
    cuentaContableId?: boolean;
    centroAnaliticoId?: boolean;
    proyecto?: boolean;
    actuacionId?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    actuacion?: boolean | Prisma.facturaproveedor$actuacionArgs<ExtArgs>;
    centroanalitico?: boolean | Prisma.facturaproveedor$centroanaliticoArgs<ExtArgs>;
    cuentacontable?: boolean | Prisma.facturaproveedor$cuentacontableArgs<ExtArgs>;
    proveedor?: boolean | Prisma.proveedorDefaultArgs<ExtArgs>;
    facturarectificativaproveedor?: boolean | Prisma.facturaproveedor$facturarectificativaproveedorArgs<ExtArgs>;
    obligacioneconomica?: boolean | Prisma.facturaproveedor$obligacioneconomicaArgs<ExtArgs>;
    _count?: boolean | Prisma.FacturaproveedorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["facturaproveedor"]>;
export type facturaproveedorSelectScalar = {
    id?: boolean;
    proveedorId?: boolean;
    numero?: boolean;
    fechaFactura?: boolean;
    fechaRegistro?: boolean;
    vencimiento?: boolean;
    concepto?: boolean;
    base?: boolean;
    iva?: boolean;
    total?: boolean;
    estado?: boolean;
    asientoId?: boolean;
    cuentaContableId?: boolean;
    centroAnaliticoId?: boolean;
    proyecto?: boolean;
    actuacionId?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type facturaproveedorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "proveedorId" | "numero" | "fechaFactura" | "fechaRegistro" | "vencimiento" | "concepto" | "base" | "iva" | "total" | "estado" | "asientoId" | "cuentaContableId" | "centroAnaliticoId" | "proyecto" | "actuacionId" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["facturaproveedor"]>;
export type facturaproveedorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actuacion?: boolean | Prisma.facturaproveedor$actuacionArgs<ExtArgs>;
    centroanalitico?: boolean | Prisma.facturaproveedor$centroanaliticoArgs<ExtArgs>;
    cuentacontable?: boolean | Prisma.facturaproveedor$cuentacontableArgs<ExtArgs>;
    proveedor?: boolean | Prisma.proveedorDefaultArgs<ExtArgs>;
    facturarectificativaproveedor?: boolean | Prisma.facturaproveedor$facturarectificativaproveedorArgs<ExtArgs>;
    obligacioneconomica?: boolean | Prisma.facturaproveedor$obligacioneconomicaArgs<ExtArgs>;
    _count?: boolean | Prisma.FacturaproveedorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $facturaproveedorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "facturaproveedor";
    objects: {
        actuacion: Prisma.$actuacionPayload<ExtArgs> | null;
        centroanalitico: Prisma.$centroanaliticoPayload<ExtArgs> | null;
        cuentacontable: Prisma.$cuentacontablePayload<ExtArgs> | null;
        proveedor: Prisma.$proveedorPayload<ExtArgs>;
        facturarectificativaproveedor: Prisma.$facturarectificativaproveedorPayload<ExtArgs>[];
        obligacioneconomica: Prisma.$obligacioneconomicaPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        proveedorId: string;
        numero: string;
        fechaFactura: Date;
        fechaRegistro: Date;
        vencimiento: Date | null;
        concepto: string;
        base: runtime.Decimal;
        iva: runtime.Decimal;
        total: runtime.Decimal;
        estado: $Enums.facturaproveedor_estado;
        asientoId: string | null;
        cuentaContableId: string | null;
        centroAnaliticoId: string | null;
        proyecto: string | null;
        actuacionId: string | null;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["facturaproveedor"]>;
    composites: {};
};
export type facturaproveedorGetPayload<S extends boolean | null | undefined | facturaproveedorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$facturaproveedorPayload, S>;
export type facturaproveedorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<facturaproveedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FacturaproveedorCountAggregateInputType | true;
};
export interface facturaproveedorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['facturaproveedor'];
        meta: {
            name: 'facturaproveedor';
        };
    };
    /**
     * Find zero or one Facturaproveedor that matches the filter.
     * @param {facturaproveedorFindUniqueArgs} args - Arguments to find a Facturaproveedor
     * @example
     * // Get one Facturaproveedor
     * const facturaproveedor = await prisma.facturaproveedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends facturaproveedorFindUniqueArgs>(args: Prisma.SelectSubset<T, facturaproveedorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__facturaproveedorClient<runtime.Types.Result.GetResult<Prisma.$facturaproveedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Facturaproveedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {facturaproveedorFindUniqueOrThrowArgs} args - Arguments to find a Facturaproveedor
     * @example
     * // Get one Facturaproveedor
     * const facturaproveedor = await prisma.facturaproveedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends facturaproveedorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, facturaproveedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__facturaproveedorClient<runtime.Types.Result.GetResult<Prisma.$facturaproveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Facturaproveedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturaproveedorFindFirstArgs} args - Arguments to find a Facturaproveedor
     * @example
     * // Get one Facturaproveedor
     * const facturaproveedor = await prisma.facturaproveedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends facturaproveedorFindFirstArgs>(args?: Prisma.SelectSubset<T, facturaproveedorFindFirstArgs<ExtArgs>>): Prisma.Prisma__facturaproveedorClient<runtime.Types.Result.GetResult<Prisma.$facturaproveedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Facturaproveedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturaproveedorFindFirstOrThrowArgs} args - Arguments to find a Facturaproveedor
     * @example
     * // Get one Facturaproveedor
     * const facturaproveedor = await prisma.facturaproveedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends facturaproveedorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, facturaproveedorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__facturaproveedorClient<runtime.Types.Result.GetResult<Prisma.$facturaproveedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Facturaproveedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturaproveedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Facturaproveedors
     * const facturaproveedors = await prisma.facturaproveedor.findMany()
     *
     * // Get first 10 Facturaproveedors
     * const facturaproveedors = await prisma.facturaproveedor.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const facturaproveedorWithIdOnly = await prisma.facturaproveedor.findMany({ select: { id: true } })
     *
     */
    findMany<T extends facturaproveedorFindManyArgs>(args?: Prisma.SelectSubset<T, facturaproveedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturaproveedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Facturaproveedor.
     * @param {facturaproveedorCreateArgs} args - Arguments to create a Facturaproveedor.
     * @example
     * // Create one Facturaproveedor
     * const Facturaproveedor = await prisma.facturaproveedor.create({
     *   data: {
     *     // ... data to create a Facturaproveedor
     *   }
     * })
     *
     */
    create<T extends facturaproveedorCreateArgs>(args: Prisma.SelectSubset<T, facturaproveedorCreateArgs<ExtArgs>>): Prisma.Prisma__facturaproveedorClient<runtime.Types.Result.GetResult<Prisma.$facturaproveedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Facturaproveedors.
     * @param {facturaproveedorCreateManyArgs} args - Arguments to create many Facturaproveedors.
     * @example
     * // Create many Facturaproveedors
     * const facturaproveedor = await prisma.facturaproveedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends facturaproveedorCreateManyArgs>(args?: Prisma.SelectSubset<T, facturaproveedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Facturaproveedor.
     * @param {facturaproveedorDeleteArgs} args - Arguments to delete one Facturaproveedor.
     * @example
     * // Delete one Facturaproveedor
     * const Facturaproveedor = await prisma.facturaproveedor.delete({
     *   where: {
     *     // ... filter to delete one Facturaproveedor
     *   }
     * })
     *
     */
    delete<T extends facturaproveedorDeleteArgs>(args: Prisma.SelectSubset<T, facturaproveedorDeleteArgs<ExtArgs>>): Prisma.Prisma__facturaproveedorClient<runtime.Types.Result.GetResult<Prisma.$facturaproveedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Facturaproveedor.
     * @param {facturaproveedorUpdateArgs} args - Arguments to update one Facturaproveedor.
     * @example
     * // Update one Facturaproveedor
     * const facturaproveedor = await prisma.facturaproveedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends facturaproveedorUpdateArgs>(args: Prisma.SelectSubset<T, facturaproveedorUpdateArgs<ExtArgs>>): Prisma.Prisma__facturaproveedorClient<runtime.Types.Result.GetResult<Prisma.$facturaproveedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Facturaproveedors.
     * @param {facturaproveedorDeleteManyArgs} args - Arguments to filter Facturaproveedors to delete.
     * @example
     * // Delete a few Facturaproveedors
     * const { count } = await prisma.facturaproveedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends facturaproveedorDeleteManyArgs>(args?: Prisma.SelectSubset<T, facturaproveedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Facturaproveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturaproveedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Facturaproveedors
     * const facturaproveedor = await prisma.facturaproveedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends facturaproveedorUpdateManyArgs>(args: Prisma.SelectSubset<T, facturaproveedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Facturaproveedor.
     * @param {facturaproveedorUpsertArgs} args - Arguments to update or create a Facturaproveedor.
     * @example
     * // Update or create a Facturaproveedor
     * const facturaproveedor = await prisma.facturaproveedor.upsert({
     *   create: {
     *     // ... data to create a Facturaproveedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facturaproveedor we want to update
     *   }
     * })
     */
    upsert<T extends facturaproveedorUpsertArgs>(args: Prisma.SelectSubset<T, facturaproveedorUpsertArgs<ExtArgs>>): Prisma.Prisma__facturaproveedorClient<runtime.Types.Result.GetResult<Prisma.$facturaproveedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Facturaproveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturaproveedorCountArgs} args - Arguments to filter Facturaproveedors to count.
     * @example
     * // Count the number of Facturaproveedors
     * const count = await prisma.facturaproveedor.count({
     *   where: {
     *     // ... the filter for the Facturaproveedors we want to count
     *   }
     * })
    **/
    count<T extends facturaproveedorCountArgs>(args?: Prisma.Subset<T, facturaproveedorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FacturaproveedorCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Facturaproveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacturaproveedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FacturaproveedorAggregateArgs>(args: Prisma.Subset<T, FacturaproveedorAggregateArgs>): Prisma.PrismaPromise<GetFacturaproveedorAggregateType<T>>;
    /**
     * Group by Facturaproveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facturaproveedorGroupByArgs} args - Group by arguments.
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
    groupBy<T extends facturaproveedorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: facturaproveedorGroupByArgs['orderBy'];
    } : {
        orderBy?: facturaproveedorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, facturaproveedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturaproveedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the facturaproveedor model
     */
    readonly fields: facturaproveedorFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for facturaproveedor.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__facturaproveedorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    actuacion<T extends Prisma.facturaproveedor$actuacionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.facturaproveedor$actuacionArgs<ExtArgs>>): Prisma.Prisma__actuacionClient<runtime.Types.Result.GetResult<Prisma.$actuacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    centroanalitico<T extends Prisma.facturaproveedor$centroanaliticoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.facturaproveedor$centroanaliticoArgs<ExtArgs>>): Prisma.Prisma__centroanaliticoClient<runtime.Types.Result.GetResult<Prisma.$centroanaliticoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    cuentacontable<T extends Prisma.facturaproveedor$cuentacontableArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.facturaproveedor$cuentacontableArgs<ExtArgs>>): Prisma.Prisma__cuentacontableClient<runtime.Types.Result.GetResult<Prisma.$cuentacontablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    proveedor<T extends Prisma.proveedorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.proveedorDefaultArgs<ExtArgs>>): Prisma.Prisma__proveedorClient<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    facturarectificativaproveedor<T extends Prisma.facturaproveedor$facturarectificativaproveedorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.facturaproveedor$facturarectificativaproveedorArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturarectificativaproveedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    obligacioneconomica<T extends Prisma.facturaproveedor$obligacioneconomicaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.facturaproveedor$obligacioneconomicaArgs<ExtArgs>>): Prisma.Prisma__obligacioneconomicaClient<runtime.Types.Result.GetResult<Prisma.$obligacioneconomicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the facturaproveedor model
 */
export interface facturaproveedorFieldRefs {
    readonly id: Prisma.FieldRef<"facturaproveedor", 'String'>;
    readonly proveedorId: Prisma.FieldRef<"facturaproveedor", 'String'>;
    readonly numero: Prisma.FieldRef<"facturaproveedor", 'String'>;
    readonly fechaFactura: Prisma.FieldRef<"facturaproveedor", 'DateTime'>;
    readonly fechaRegistro: Prisma.FieldRef<"facturaproveedor", 'DateTime'>;
    readonly vencimiento: Prisma.FieldRef<"facturaproveedor", 'DateTime'>;
    readonly concepto: Prisma.FieldRef<"facturaproveedor", 'String'>;
    readonly base: Prisma.FieldRef<"facturaproveedor", 'Decimal'>;
    readonly iva: Prisma.FieldRef<"facturaproveedor", 'Decimal'>;
    readonly total: Prisma.FieldRef<"facturaproveedor", 'Decimal'>;
    readonly estado: Prisma.FieldRef<"facturaproveedor", 'facturaproveedor_estado'>;
    readonly asientoId: Prisma.FieldRef<"facturaproveedor", 'String'>;
    readonly cuentaContableId: Prisma.FieldRef<"facturaproveedor", 'String'>;
    readonly centroAnaliticoId: Prisma.FieldRef<"facturaproveedor", 'String'>;
    readonly proyecto: Prisma.FieldRef<"facturaproveedor", 'String'>;
    readonly actuacionId: Prisma.FieldRef<"facturaproveedor", 'String'>;
    readonly observaciones: Prisma.FieldRef<"facturaproveedor", 'String'>;
    readonly createdAt: Prisma.FieldRef<"facturaproveedor", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"facturaproveedor", 'DateTime'>;
}
/**
 * facturaproveedor findUnique
 */
export type facturaproveedorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturaproveedor
     */
    select?: Prisma.facturaproveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturaproveedor
     */
    omit?: Prisma.facturaproveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturaproveedorInclude<ExtArgs> | null;
    /**
     * Filter, which facturaproveedor to fetch.
     */
    where: Prisma.facturaproveedorWhereUniqueInput;
};
/**
 * facturaproveedor findUniqueOrThrow
 */
export type facturaproveedorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturaproveedor
     */
    select?: Prisma.facturaproveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturaproveedor
     */
    omit?: Prisma.facturaproveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturaproveedorInclude<ExtArgs> | null;
    /**
     * Filter, which facturaproveedor to fetch.
     */
    where: Prisma.facturaproveedorWhereUniqueInput;
};
/**
 * facturaproveedor findFirst
 */
export type facturaproveedorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturaproveedor
     */
    select?: Prisma.facturaproveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturaproveedor
     */
    omit?: Prisma.facturaproveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturaproveedorInclude<ExtArgs> | null;
    /**
     * Filter, which facturaproveedor to fetch.
     */
    where?: Prisma.facturaproveedorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of facturaproveedors to fetch.
     */
    orderBy?: Prisma.facturaproveedorOrderByWithRelationInput | Prisma.facturaproveedorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for facturaproveedors.
     */
    cursor?: Prisma.facturaproveedorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` facturaproveedors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` facturaproveedors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of facturaproveedors.
     */
    distinct?: Prisma.FacturaproveedorScalarFieldEnum | Prisma.FacturaproveedorScalarFieldEnum[];
};
/**
 * facturaproveedor findFirstOrThrow
 */
export type facturaproveedorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturaproveedor
     */
    select?: Prisma.facturaproveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturaproveedor
     */
    omit?: Prisma.facturaproveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturaproveedorInclude<ExtArgs> | null;
    /**
     * Filter, which facturaproveedor to fetch.
     */
    where?: Prisma.facturaproveedorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of facturaproveedors to fetch.
     */
    orderBy?: Prisma.facturaproveedorOrderByWithRelationInput | Prisma.facturaproveedorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for facturaproveedors.
     */
    cursor?: Prisma.facturaproveedorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` facturaproveedors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` facturaproveedors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of facturaproveedors.
     */
    distinct?: Prisma.FacturaproveedorScalarFieldEnum | Prisma.FacturaproveedorScalarFieldEnum[];
};
/**
 * facturaproveedor findMany
 */
export type facturaproveedorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturaproveedor
     */
    select?: Prisma.facturaproveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturaproveedor
     */
    omit?: Prisma.facturaproveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturaproveedorInclude<ExtArgs> | null;
    /**
     * Filter, which facturaproveedors to fetch.
     */
    where?: Prisma.facturaproveedorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of facturaproveedors to fetch.
     */
    orderBy?: Prisma.facturaproveedorOrderByWithRelationInput | Prisma.facturaproveedorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing facturaproveedors.
     */
    cursor?: Prisma.facturaproveedorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` facturaproveedors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` facturaproveedors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of facturaproveedors.
     */
    distinct?: Prisma.FacturaproveedorScalarFieldEnum | Prisma.FacturaproveedorScalarFieldEnum[];
};
/**
 * facturaproveedor create
 */
export type facturaproveedorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturaproveedor
     */
    select?: Prisma.facturaproveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturaproveedor
     */
    omit?: Prisma.facturaproveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturaproveedorInclude<ExtArgs> | null;
    /**
     * The data needed to create a facturaproveedor.
     */
    data: Prisma.XOR<Prisma.facturaproveedorCreateInput, Prisma.facturaproveedorUncheckedCreateInput>;
};
/**
 * facturaproveedor createMany
 */
export type facturaproveedorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many facturaproveedors.
     */
    data: Prisma.facturaproveedorCreateManyInput | Prisma.facturaproveedorCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * facturaproveedor update
 */
export type facturaproveedorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturaproveedor
     */
    select?: Prisma.facturaproveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturaproveedor
     */
    omit?: Prisma.facturaproveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturaproveedorInclude<ExtArgs> | null;
    /**
     * The data needed to update a facturaproveedor.
     */
    data: Prisma.XOR<Prisma.facturaproveedorUpdateInput, Prisma.facturaproveedorUncheckedUpdateInput>;
    /**
     * Choose, which facturaproveedor to update.
     */
    where: Prisma.facturaproveedorWhereUniqueInput;
};
/**
 * facturaproveedor updateMany
 */
export type facturaproveedorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update facturaproveedors.
     */
    data: Prisma.XOR<Prisma.facturaproveedorUpdateManyMutationInput, Prisma.facturaproveedorUncheckedUpdateManyInput>;
    /**
     * Filter which facturaproveedors to update
     */
    where?: Prisma.facturaproveedorWhereInput;
    /**
     * Limit how many facturaproveedors to update.
     */
    limit?: number;
};
/**
 * facturaproveedor upsert
 */
export type facturaproveedorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturaproveedor
     */
    select?: Prisma.facturaproveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturaproveedor
     */
    omit?: Prisma.facturaproveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturaproveedorInclude<ExtArgs> | null;
    /**
     * The filter to search for the facturaproveedor to update in case it exists.
     */
    where: Prisma.facturaproveedorWhereUniqueInput;
    /**
     * In case the facturaproveedor found by the `where` argument doesn't exist, create a new facturaproveedor with this data.
     */
    create: Prisma.XOR<Prisma.facturaproveedorCreateInput, Prisma.facturaproveedorUncheckedCreateInput>;
    /**
     * In case the facturaproveedor was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.facturaproveedorUpdateInput, Prisma.facturaproveedorUncheckedUpdateInput>;
};
/**
 * facturaproveedor delete
 */
export type facturaproveedorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturaproveedor
     */
    select?: Prisma.facturaproveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturaproveedor
     */
    omit?: Prisma.facturaproveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturaproveedorInclude<ExtArgs> | null;
    /**
     * Filter which facturaproveedor to delete.
     */
    where: Prisma.facturaproveedorWhereUniqueInput;
};
/**
 * facturaproveedor deleteMany
 */
export type facturaproveedorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which facturaproveedors to delete
     */
    where?: Prisma.facturaproveedorWhereInput;
    /**
     * Limit how many facturaproveedors to delete.
     */
    limit?: number;
};
/**
 * facturaproveedor.actuacion
 */
export type facturaproveedor$actuacionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * facturaproveedor.centroanalitico
 */
export type facturaproveedor$centroanaliticoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * facturaproveedor.cuentacontable
 */
export type facturaproveedor$cuentacontableArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * facturaproveedor.facturarectificativaproveedor
 */
export type facturaproveedor$facturarectificativaproveedorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.facturarectificativaproveedorWhereInput;
    orderBy?: Prisma.facturarectificativaproveedorOrderByWithRelationInput | Prisma.facturarectificativaproveedorOrderByWithRelationInput[];
    cursor?: Prisma.facturarectificativaproveedorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FacturarectificativaproveedorScalarFieldEnum | Prisma.FacturarectificativaproveedorScalarFieldEnum[];
};
/**
 * facturaproveedor.obligacioneconomica
 */
export type facturaproveedor$obligacioneconomicaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obligacioneconomica
     */
    select?: Prisma.obligacioneconomicaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the obligacioneconomica
     */
    omit?: Prisma.obligacioneconomicaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.obligacioneconomicaInclude<ExtArgs> | null;
    where?: Prisma.obligacioneconomicaWhereInput;
};
/**
 * facturaproveedor without action
 */
export type facturaproveedorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturaproveedor
     */
    select?: Prisma.facturaproveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturaproveedor
     */
    omit?: Prisma.facturaproveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturaproveedorInclude<ExtArgs> | null;
};
//# sourceMappingURL=facturaproveedor.d.ts.map