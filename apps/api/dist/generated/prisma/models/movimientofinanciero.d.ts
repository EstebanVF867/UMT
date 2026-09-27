import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model movimientofinanciero
 *
 */
export type movimientofinancieroModel = runtime.Types.Result.DefaultSelection<Prisma.$movimientofinancieroPayload>;
export type AggregateMovimientofinanciero = {
    _count: MovimientofinancieroCountAggregateOutputType | null;
    _avg: MovimientofinancieroAvgAggregateOutputType | null;
    _sum: MovimientofinancieroSumAggregateOutputType | null;
    _min: MovimientofinancieroMinAggregateOutputType | null;
    _max: MovimientofinancieroMaxAggregateOutputType | null;
};
export type MovimientofinancieroAvgAggregateOutputType = {
    importe: runtime.Decimal | null;
};
export type MovimientofinancieroSumAggregateOutputType = {
    importe: runtime.Decimal | null;
};
export type MovimientofinancieroMinAggregateOutputType = {
    id: string | null;
    cuentaFinancieraId: string | null;
    fecha: Date | null;
    tipo: $Enums.movimientofinanciero_tipo | null;
    concepto: string | null;
    importe: runtime.Decimal | null;
    referencia: string | null;
    conciliacion: $Enums.movimientofinanciero_conciliacion | null;
    fechaConciliacion: Date | null;
    conciliadoPor: string | null;
    grupoTransferencia: string | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MovimientofinancieroMaxAggregateOutputType = {
    id: string | null;
    cuentaFinancieraId: string | null;
    fecha: Date | null;
    tipo: $Enums.movimientofinanciero_tipo | null;
    concepto: string | null;
    importe: runtime.Decimal | null;
    referencia: string | null;
    conciliacion: $Enums.movimientofinanciero_conciliacion | null;
    fechaConciliacion: Date | null;
    conciliadoPor: string | null;
    grupoTransferencia: string | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MovimientofinancieroCountAggregateOutputType = {
    id: number;
    cuentaFinancieraId: number;
    fecha: number;
    tipo: number;
    concepto: number;
    importe: number;
    referencia: number;
    conciliacion: number;
    fechaConciliacion: number;
    conciliadoPor: number;
    grupoTransferencia: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MovimientofinancieroAvgAggregateInputType = {
    importe?: true;
};
export type MovimientofinancieroSumAggregateInputType = {
    importe?: true;
};
export type MovimientofinancieroMinAggregateInputType = {
    id?: true;
    cuentaFinancieraId?: true;
    fecha?: true;
    tipo?: true;
    concepto?: true;
    importe?: true;
    referencia?: true;
    conciliacion?: true;
    fechaConciliacion?: true;
    conciliadoPor?: true;
    grupoTransferencia?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MovimientofinancieroMaxAggregateInputType = {
    id?: true;
    cuentaFinancieraId?: true;
    fecha?: true;
    tipo?: true;
    concepto?: true;
    importe?: true;
    referencia?: true;
    conciliacion?: true;
    fechaConciliacion?: true;
    conciliadoPor?: true;
    grupoTransferencia?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MovimientofinancieroCountAggregateInputType = {
    id?: true;
    cuentaFinancieraId?: true;
    fecha?: true;
    tipo?: true;
    concepto?: true;
    importe?: true;
    referencia?: true;
    conciliacion?: true;
    fechaConciliacion?: true;
    conciliadoPor?: true;
    grupoTransferencia?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MovimientofinancieroAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which movimientofinanciero to aggregate.
     */
    where?: Prisma.movimientofinancieroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of movimientofinancieros to fetch.
     */
    orderBy?: Prisma.movimientofinancieroOrderByWithRelationInput | Prisma.movimientofinancieroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.movimientofinancieroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` movimientofinancieros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` movimientofinancieros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned movimientofinancieros
    **/
    _count?: true | MovimientofinancieroCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MovimientofinancieroAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MovimientofinancieroSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MovimientofinancieroMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MovimientofinancieroMaxAggregateInputType;
};
export type GetMovimientofinancieroAggregateType<T extends MovimientofinancieroAggregateArgs> = {
    [P in keyof T & keyof AggregateMovimientofinanciero]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMovimientofinanciero[P]> : Prisma.GetScalarType<T[P], AggregateMovimientofinanciero[P]>;
};
export type movimientofinancieroGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.movimientofinancieroWhereInput;
    orderBy?: Prisma.movimientofinancieroOrderByWithAggregationInput | Prisma.movimientofinancieroOrderByWithAggregationInput[];
    by: Prisma.MovimientofinancieroScalarFieldEnum[] | Prisma.MovimientofinancieroScalarFieldEnum;
    having?: Prisma.movimientofinancieroScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MovimientofinancieroCountAggregateInputType | true;
    _avg?: MovimientofinancieroAvgAggregateInputType;
    _sum?: MovimientofinancieroSumAggregateInputType;
    _min?: MovimientofinancieroMinAggregateInputType;
    _max?: MovimientofinancieroMaxAggregateInputType;
};
export type MovimientofinancieroGroupByOutputType = {
    id: string;
    cuentaFinancieraId: string;
    fecha: Date;
    tipo: $Enums.movimientofinanciero_tipo;
    concepto: string;
    importe: runtime.Decimal;
    referencia: string | null;
    conciliacion: $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion: Date | null;
    conciliadoPor: string | null;
    grupoTransferencia: string | null;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: MovimientofinancieroCountAggregateOutputType | null;
    _avg: MovimientofinancieroAvgAggregateOutputType | null;
    _sum: MovimientofinancieroSumAggregateOutputType | null;
    _min: MovimientofinancieroMinAggregateOutputType | null;
    _max: MovimientofinancieroMaxAggregateOutputType | null;
};
export type GetMovimientofinancieroGroupByPayload<T extends movimientofinancieroGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MovimientofinancieroGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MovimientofinancieroGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MovimientofinancieroGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MovimientofinancieroGroupByOutputType[P]>;
}>>;
export type movimientofinancieroWhereInput = {
    AND?: Prisma.movimientofinancieroWhereInput | Prisma.movimientofinancieroWhereInput[];
    OR?: Prisma.movimientofinancieroWhereInput[];
    NOT?: Prisma.movimientofinancieroWhereInput | Prisma.movimientofinancieroWhereInput[];
    id?: Prisma.StringFilter<"movimientofinanciero"> | string;
    cuentaFinancieraId?: Prisma.StringFilter<"movimientofinanciero"> | string;
    fecha?: Prisma.DateTimeFilter<"movimientofinanciero"> | Date | string;
    tipo?: Prisma.Enummovimientofinanciero_tipoFilter<"movimientofinanciero"> | $Enums.movimientofinanciero_tipo;
    concepto?: Prisma.StringFilter<"movimientofinanciero"> | string;
    importe?: Prisma.DecimalFilter<"movimientofinanciero"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.StringNullableFilter<"movimientofinanciero"> | string | null;
    conciliacion?: Prisma.Enummovimientofinanciero_conciliacionFilter<"movimientofinanciero"> | $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Prisma.DateTimeNullableFilter<"movimientofinanciero"> | Date | string | null;
    conciliadoPor?: Prisma.StringNullableFilter<"movimientofinanciero"> | string | null;
    grupoTransferencia?: Prisma.StringNullableFilter<"movimientofinanciero"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"movimientofinanciero"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"movimientofinanciero"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"movimientofinanciero"> | Date | string;
    asientomovimiento?: Prisma.AsientomovimientoListRelationFilter;
    cobro?: Prisma.XOR<Prisma.CobroNullableScalarRelationFilter, Prisma.cobroWhereInput> | null;
    cuentafinanciera?: Prisma.XOR<Prisma.CuentafinancieraScalarRelationFilter, Prisma.cuentafinancieraWhereInput>;
    pago?: Prisma.XOR<Prisma.PagoNullableScalarRelationFilter, Prisma.pagoWhereInput> | null;
};
export type movimientofinancieroOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cuentaFinancieraId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    referencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    conciliacion?: Prisma.SortOrder;
    fechaConciliacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    conciliadoPor?: Prisma.SortOrderInput | Prisma.SortOrder;
    grupoTransferencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    asientomovimiento?: Prisma.asientomovimientoOrderByRelationAggregateInput;
    cobro?: Prisma.cobroOrderByWithRelationInput;
    cuentafinanciera?: Prisma.cuentafinancieraOrderByWithRelationInput;
    pago?: Prisma.pagoOrderByWithRelationInput;
    _relevance?: Prisma.movimientofinancieroOrderByRelevanceInput;
};
export type movimientofinancieroWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.movimientofinancieroWhereInput | Prisma.movimientofinancieroWhereInput[];
    OR?: Prisma.movimientofinancieroWhereInput[];
    NOT?: Prisma.movimientofinancieroWhereInput | Prisma.movimientofinancieroWhereInput[];
    cuentaFinancieraId?: Prisma.StringFilter<"movimientofinanciero"> | string;
    fecha?: Prisma.DateTimeFilter<"movimientofinanciero"> | Date | string;
    tipo?: Prisma.Enummovimientofinanciero_tipoFilter<"movimientofinanciero"> | $Enums.movimientofinanciero_tipo;
    concepto?: Prisma.StringFilter<"movimientofinanciero"> | string;
    importe?: Prisma.DecimalFilter<"movimientofinanciero"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.StringNullableFilter<"movimientofinanciero"> | string | null;
    conciliacion?: Prisma.Enummovimientofinanciero_conciliacionFilter<"movimientofinanciero"> | $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Prisma.DateTimeNullableFilter<"movimientofinanciero"> | Date | string | null;
    conciliadoPor?: Prisma.StringNullableFilter<"movimientofinanciero"> | string | null;
    grupoTransferencia?: Prisma.StringNullableFilter<"movimientofinanciero"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"movimientofinanciero"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"movimientofinanciero"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"movimientofinanciero"> | Date | string;
    asientomovimiento?: Prisma.AsientomovimientoListRelationFilter;
    cobro?: Prisma.XOR<Prisma.CobroNullableScalarRelationFilter, Prisma.cobroWhereInput> | null;
    cuentafinanciera?: Prisma.XOR<Prisma.CuentafinancieraScalarRelationFilter, Prisma.cuentafinancieraWhereInput>;
    pago?: Prisma.XOR<Prisma.PagoNullableScalarRelationFilter, Prisma.pagoWhereInput> | null;
}, "id">;
export type movimientofinancieroOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cuentaFinancieraId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    referencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    conciliacion?: Prisma.SortOrder;
    fechaConciliacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    conciliadoPor?: Prisma.SortOrderInput | Prisma.SortOrder;
    grupoTransferencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.movimientofinancieroCountOrderByAggregateInput;
    _avg?: Prisma.movimientofinancieroAvgOrderByAggregateInput;
    _max?: Prisma.movimientofinancieroMaxOrderByAggregateInput;
    _min?: Prisma.movimientofinancieroMinOrderByAggregateInput;
    _sum?: Prisma.movimientofinancieroSumOrderByAggregateInput;
};
export type movimientofinancieroScalarWhereWithAggregatesInput = {
    AND?: Prisma.movimientofinancieroScalarWhereWithAggregatesInput | Prisma.movimientofinancieroScalarWhereWithAggregatesInput[];
    OR?: Prisma.movimientofinancieroScalarWhereWithAggregatesInput[];
    NOT?: Prisma.movimientofinancieroScalarWhereWithAggregatesInput | Prisma.movimientofinancieroScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"movimientofinanciero"> | string;
    cuentaFinancieraId?: Prisma.StringWithAggregatesFilter<"movimientofinanciero"> | string;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"movimientofinanciero"> | Date | string;
    tipo?: Prisma.Enummovimientofinanciero_tipoWithAggregatesFilter<"movimientofinanciero"> | $Enums.movimientofinanciero_tipo;
    concepto?: Prisma.StringWithAggregatesFilter<"movimientofinanciero"> | string;
    importe?: Prisma.DecimalWithAggregatesFilter<"movimientofinanciero"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.StringNullableWithAggregatesFilter<"movimientofinanciero"> | string | null;
    conciliacion?: Prisma.Enummovimientofinanciero_conciliacionWithAggregatesFilter<"movimientofinanciero"> | $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Prisma.DateTimeNullableWithAggregatesFilter<"movimientofinanciero"> | Date | string | null;
    conciliadoPor?: Prisma.StringNullableWithAggregatesFilter<"movimientofinanciero"> | string | null;
    grupoTransferencia?: Prisma.StringNullableWithAggregatesFilter<"movimientofinanciero"> | string | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"movimientofinanciero"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"movimientofinanciero"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"movimientofinanciero"> | Date | string;
};
export type movimientofinancieroCreateInput = {
    id: string;
    fecha: Date | string;
    tipo: $Enums.movimientofinanciero_tipo;
    concepto: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: string | null;
    conciliacion?: $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Date | string | null;
    conciliadoPor?: string | null;
    grupoTransferencia?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    asientomovimiento?: Prisma.asientomovimientoCreateNestedManyWithoutMovimientofinancieroInput;
    cobro?: Prisma.cobroCreateNestedOneWithoutMovimientofinancieroInput;
    cuentafinanciera: Prisma.cuentafinancieraCreateNestedOneWithoutMovimientofinancieroInput;
    pago?: Prisma.pagoCreateNestedOneWithoutMovimientofinancieroInput;
};
export type movimientofinancieroUncheckedCreateInput = {
    id: string;
    cuentaFinancieraId: string;
    fecha: Date | string;
    tipo: $Enums.movimientofinanciero_tipo;
    concepto: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: string | null;
    conciliacion?: $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Date | string | null;
    conciliadoPor?: string | null;
    grupoTransferencia?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    asientomovimiento?: Prisma.asientomovimientoUncheckedCreateNestedManyWithoutMovimientofinancieroInput;
    cobro?: Prisma.cobroUncheckedCreateNestedOneWithoutMovimientofinancieroInput;
    pago?: Prisma.pagoUncheckedCreateNestedOneWithoutMovimientofinancieroInput;
};
export type movimientofinancieroUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tipo?: Prisma.Enummovimientofinanciero_tipoFieldUpdateOperationsInput | $Enums.movimientofinanciero_tipo;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conciliacion?: Prisma.Enummovimientofinanciero_conciliacionFieldUpdateOperationsInput | $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    conciliadoPor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupoTransferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asientomovimiento?: Prisma.asientomovimientoUpdateManyWithoutMovimientofinancieroNestedInput;
    cobro?: Prisma.cobroUpdateOneWithoutMovimientofinancieroNestedInput;
    cuentafinanciera?: Prisma.cuentafinancieraUpdateOneRequiredWithoutMovimientofinancieroNestedInput;
    pago?: Prisma.pagoUpdateOneWithoutMovimientofinancieroNestedInput;
};
export type movimientofinancieroUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cuentaFinancieraId?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tipo?: Prisma.Enummovimientofinanciero_tipoFieldUpdateOperationsInput | $Enums.movimientofinanciero_tipo;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conciliacion?: Prisma.Enummovimientofinanciero_conciliacionFieldUpdateOperationsInput | $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    conciliadoPor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupoTransferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asientomovimiento?: Prisma.asientomovimientoUncheckedUpdateManyWithoutMovimientofinancieroNestedInput;
    cobro?: Prisma.cobroUncheckedUpdateOneWithoutMovimientofinancieroNestedInput;
    pago?: Prisma.pagoUncheckedUpdateOneWithoutMovimientofinancieroNestedInput;
};
export type movimientofinancieroCreateManyInput = {
    id: string;
    cuentaFinancieraId: string;
    fecha: Date | string;
    tipo: $Enums.movimientofinanciero_tipo;
    concepto: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: string | null;
    conciliacion?: $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Date | string | null;
    conciliadoPor?: string | null;
    grupoTransferencia?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type movimientofinancieroUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tipo?: Prisma.Enummovimientofinanciero_tipoFieldUpdateOperationsInput | $Enums.movimientofinanciero_tipo;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conciliacion?: Prisma.Enummovimientofinanciero_conciliacionFieldUpdateOperationsInput | $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    conciliadoPor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupoTransferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type movimientofinancieroUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cuentaFinancieraId?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tipo?: Prisma.Enummovimientofinanciero_tipoFieldUpdateOperationsInput | $Enums.movimientofinanciero_tipo;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conciliacion?: Prisma.Enummovimientofinanciero_conciliacionFieldUpdateOperationsInput | $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    conciliadoPor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupoTransferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MovimientofinancieroScalarRelationFilter = {
    is?: Prisma.movimientofinancieroWhereInput;
    isNot?: Prisma.movimientofinancieroWhereInput;
};
export type MovimientofinancieroListRelationFilter = {
    every?: Prisma.movimientofinancieroWhereInput;
    some?: Prisma.movimientofinancieroWhereInput;
    none?: Prisma.movimientofinancieroWhereInput;
};
export type movimientofinancieroOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type movimientofinancieroOrderByRelevanceInput = {
    fields: Prisma.movimientofinancieroOrderByRelevanceFieldEnum | Prisma.movimientofinancieroOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type movimientofinancieroCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cuentaFinancieraId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    referencia?: Prisma.SortOrder;
    conciliacion?: Prisma.SortOrder;
    fechaConciliacion?: Prisma.SortOrder;
    conciliadoPor?: Prisma.SortOrder;
    grupoTransferencia?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type movimientofinancieroAvgOrderByAggregateInput = {
    importe?: Prisma.SortOrder;
};
export type movimientofinancieroMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cuentaFinancieraId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    referencia?: Prisma.SortOrder;
    conciliacion?: Prisma.SortOrder;
    fechaConciliacion?: Prisma.SortOrder;
    conciliadoPor?: Prisma.SortOrder;
    grupoTransferencia?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type movimientofinancieroMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cuentaFinancieraId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    referencia?: Prisma.SortOrder;
    conciliacion?: Prisma.SortOrder;
    fechaConciliacion?: Prisma.SortOrder;
    conciliadoPor?: Prisma.SortOrder;
    grupoTransferencia?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type movimientofinancieroSumOrderByAggregateInput = {
    importe?: Prisma.SortOrder;
};
export type movimientofinancieroCreateNestedOneWithoutAsientomovimientoInput = {
    create?: Prisma.XOR<Prisma.movimientofinancieroCreateWithoutAsientomovimientoInput, Prisma.movimientofinancieroUncheckedCreateWithoutAsientomovimientoInput>;
    connectOrCreate?: Prisma.movimientofinancieroCreateOrConnectWithoutAsientomovimientoInput;
    connect?: Prisma.movimientofinancieroWhereUniqueInput;
};
export type movimientofinancieroUpdateOneRequiredWithoutAsientomovimientoNestedInput = {
    create?: Prisma.XOR<Prisma.movimientofinancieroCreateWithoutAsientomovimientoInput, Prisma.movimientofinancieroUncheckedCreateWithoutAsientomovimientoInput>;
    connectOrCreate?: Prisma.movimientofinancieroCreateOrConnectWithoutAsientomovimientoInput;
    upsert?: Prisma.movimientofinancieroUpsertWithoutAsientomovimientoInput;
    connect?: Prisma.movimientofinancieroWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.movimientofinancieroUpdateToOneWithWhereWithoutAsientomovimientoInput, Prisma.movimientofinancieroUpdateWithoutAsientomovimientoInput>, Prisma.movimientofinancieroUncheckedUpdateWithoutAsientomovimientoInput>;
};
export type movimientofinancieroCreateNestedOneWithoutCobroInput = {
    create?: Prisma.XOR<Prisma.movimientofinancieroCreateWithoutCobroInput, Prisma.movimientofinancieroUncheckedCreateWithoutCobroInput>;
    connectOrCreate?: Prisma.movimientofinancieroCreateOrConnectWithoutCobroInput;
    connect?: Prisma.movimientofinancieroWhereUniqueInput;
};
export type movimientofinancieroUpdateOneRequiredWithoutCobroNestedInput = {
    create?: Prisma.XOR<Prisma.movimientofinancieroCreateWithoutCobroInput, Prisma.movimientofinancieroUncheckedCreateWithoutCobroInput>;
    connectOrCreate?: Prisma.movimientofinancieroCreateOrConnectWithoutCobroInput;
    upsert?: Prisma.movimientofinancieroUpsertWithoutCobroInput;
    connect?: Prisma.movimientofinancieroWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.movimientofinancieroUpdateToOneWithWhereWithoutCobroInput, Prisma.movimientofinancieroUpdateWithoutCobroInput>, Prisma.movimientofinancieroUncheckedUpdateWithoutCobroInput>;
};
export type movimientofinancieroCreateNestedManyWithoutCuentafinancieraInput = {
    create?: Prisma.XOR<Prisma.movimientofinancieroCreateWithoutCuentafinancieraInput, Prisma.movimientofinancieroUncheckedCreateWithoutCuentafinancieraInput> | Prisma.movimientofinancieroCreateWithoutCuentafinancieraInput[] | Prisma.movimientofinancieroUncheckedCreateWithoutCuentafinancieraInput[];
    connectOrCreate?: Prisma.movimientofinancieroCreateOrConnectWithoutCuentafinancieraInput | Prisma.movimientofinancieroCreateOrConnectWithoutCuentafinancieraInput[];
    createMany?: Prisma.movimientofinancieroCreateManyCuentafinancieraInputEnvelope;
    connect?: Prisma.movimientofinancieroWhereUniqueInput | Prisma.movimientofinancieroWhereUniqueInput[];
};
export type movimientofinancieroUncheckedCreateNestedManyWithoutCuentafinancieraInput = {
    create?: Prisma.XOR<Prisma.movimientofinancieroCreateWithoutCuentafinancieraInput, Prisma.movimientofinancieroUncheckedCreateWithoutCuentafinancieraInput> | Prisma.movimientofinancieroCreateWithoutCuentafinancieraInput[] | Prisma.movimientofinancieroUncheckedCreateWithoutCuentafinancieraInput[];
    connectOrCreate?: Prisma.movimientofinancieroCreateOrConnectWithoutCuentafinancieraInput | Prisma.movimientofinancieroCreateOrConnectWithoutCuentafinancieraInput[];
    createMany?: Prisma.movimientofinancieroCreateManyCuentafinancieraInputEnvelope;
    connect?: Prisma.movimientofinancieroWhereUniqueInput | Prisma.movimientofinancieroWhereUniqueInput[];
};
export type movimientofinancieroUpdateManyWithoutCuentafinancieraNestedInput = {
    create?: Prisma.XOR<Prisma.movimientofinancieroCreateWithoutCuentafinancieraInput, Prisma.movimientofinancieroUncheckedCreateWithoutCuentafinancieraInput> | Prisma.movimientofinancieroCreateWithoutCuentafinancieraInput[] | Prisma.movimientofinancieroUncheckedCreateWithoutCuentafinancieraInput[];
    connectOrCreate?: Prisma.movimientofinancieroCreateOrConnectWithoutCuentafinancieraInput | Prisma.movimientofinancieroCreateOrConnectWithoutCuentafinancieraInput[];
    upsert?: Prisma.movimientofinancieroUpsertWithWhereUniqueWithoutCuentafinancieraInput | Prisma.movimientofinancieroUpsertWithWhereUniqueWithoutCuentafinancieraInput[];
    createMany?: Prisma.movimientofinancieroCreateManyCuentafinancieraInputEnvelope;
    set?: Prisma.movimientofinancieroWhereUniqueInput | Prisma.movimientofinancieroWhereUniqueInput[];
    disconnect?: Prisma.movimientofinancieroWhereUniqueInput | Prisma.movimientofinancieroWhereUniqueInput[];
    delete?: Prisma.movimientofinancieroWhereUniqueInput | Prisma.movimientofinancieroWhereUniqueInput[];
    connect?: Prisma.movimientofinancieroWhereUniqueInput | Prisma.movimientofinancieroWhereUniqueInput[];
    update?: Prisma.movimientofinancieroUpdateWithWhereUniqueWithoutCuentafinancieraInput | Prisma.movimientofinancieroUpdateWithWhereUniqueWithoutCuentafinancieraInput[];
    updateMany?: Prisma.movimientofinancieroUpdateManyWithWhereWithoutCuentafinancieraInput | Prisma.movimientofinancieroUpdateManyWithWhereWithoutCuentafinancieraInput[];
    deleteMany?: Prisma.movimientofinancieroScalarWhereInput | Prisma.movimientofinancieroScalarWhereInput[];
};
export type movimientofinancieroUncheckedUpdateManyWithoutCuentafinancieraNestedInput = {
    create?: Prisma.XOR<Prisma.movimientofinancieroCreateWithoutCuentafinancieraInput, Prisma.movimientofinancieroUncheckedCreateWithoutCuentafinancieraInput> | Prisma.movimientofinancieroCreateWithoutCuentafinancieraInput[] | Prisma.movimientofinancieroUncheckedCreateWithoutCuentafinancieraInput[];
    connectOrCreate?: Prisma.movimientofinancieroCreateOrConnectWithoutCuentafinancieraInput | Prisma.movimientofinancieroCreateOrConnectWithoutCuentafinancieraInput[];
    upsert?: Prisma.movimientofinancieroUpsertWithWhereUniqueWithoutCuentafinancieraInput | Prisma.movimientofinancieroUpsertWithWhereUniqueWithoutCuentafinancieraInput[];
    createMany?: Prisma.movimientofinancieroCreateManyCuentafinancieraInputEnvelope;
    set?: Prisma.movimientofinancieroWhereUniqueInput | Prisma.movimientofinancieroWhereUniqueInput[];
    disconnect?: Prisma.movimientofinancieroWhereUniqueInput | Prisma.movimientofinancieroWhereUniqueInput[];
    delete?: Prisma.movimientofinancieroWhereUniqueInput | Prisma.movimientofinancieroWhereUniqueInput[];
    connect?: Prisma.movimientofinancieroWhereUniqueInput | Prisma.movimientofinancieroWhereUniqueInput[];
    update?: Prisma.movimientofinancieroUpdateWithWhereUniqueWithoutCuentafinancieraInput | Prisma.movimientofinancieroUpdateWithWhereUniqueWithoutCuentafinancieraInput[];
    updateMany?: Prisma.movimientofinancieroUpdateManyWithWhereWithoutCuentafinancieraInput | Prisma.movimientofinancieroUpdateManyWithWhereWithoutCuentafinancieraInput[];
    deleteMany?: Prisma.movimientofinancieroScalarWhereInput | Prisma.movimientofinancieroScalarWhereInput[];
};
export type Enummovimientofinanciero_tipoFieldUpdateOperationsInput = {
    set?: $Enums.movimientofinanciero_tipo;
};
export type Enummovimientofinanciero_conciliacionFieldUpdateOperationsInput = {
    set?: $Enums.movimientofinanciero_conciliacion;
};
export type movimientofinancieroCreateNestedOneWithoutPagoInput = {
    create?: Prisma.XOR<Prisma.movimientofinancieroCreateWithoutPagoInput, Prisma.movimientofinancieroUncheckedCreateWithoutPagoInput>;
    connectOrCreate?: Prisma.movimientofinancieroCreateOrConnectWithoutPagoInput;
    connect?: Prisma.movimientofinancieroWhereUniqueInput;
};
export type movimientofinancieroUpdateOneRequiredWithoutPagoNestedInput = {
    create?: Prisma.XOR<Prisma.movimientofinancieroCreateWithoutPagoInput, Prisma.movimientofinancieroUncheckedCreateWithoutPagoInput>;
    connectOrCreate?: Prisma.movimientofinancieroCreateOrConnectWithoutPagoInput;
    upsert?: Prisma.movimientofinancieroUpsertWithoutPagoInput;
    connect?: Prisma.movimientofinancieroWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.movimientofinancieroUpdateToOneWithWhereWithoutPagoInput, Prisma.movimientofinancieroUpdateWithoutPagoInput>, Prisma.movimientofinancieroUncheckedUpdateWithoutPagoInput>;
};
export type movimientofinancieroCreateWithoutAsientomovimientoInput = {
    id: string;
    fecha: Date | string;
    tipo: $Enums.movimientofinanciero_tipo;
    concepto: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: string | null;
    conciliacion?: $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Date | string | null;
    conciliadoPor?: string | null;
    grupoTransferencia?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cobro?: Prisma.cobroCreateNestedOneWithoutMovimientofinancieroInput;
    cuentafinanciera: Prisma.cuentafinancieraCreateNestedOneWithoutMovimientofinancieroInput;
    pago?: Prisma.pagoCreateNestedOneWithoutMovimientofinancieroInput;
};
export type movimientofinancieroUncheckedCreateWithoutAsientomovimientoInput = {
    id: string;
    cuentaFinancieraId: string;
    fecha: Date | string;
    tipo: $Enums.movimientofinanciero_tipo;
    concepto: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: string | null;
    conciliacion?: $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Date | string | null;
    conciliadoPor?: string | null;
    grupoTransferencia?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cobro?: Prisma.cobroUncheckedCreateNestedOneWithoutMovimientofinancieroInput;
    pago?: Prisma.pagoUncheckedCreateNestedOneWithoutMovimientofinancieroInput;
};
export type movimientofinancieroCreateOrConnectWithoutAsientomovimientoInput = {
    where: Prisma.movimientofinancieroWhereUniqueInput;
    create: Prisma.XOR<Prisma.movimientofinancieroCreateWithoutAsientomovimientoInput, Prisma.movimientofinancieroUncheckedCreateWithoutAsientomovimientoInput>;
};
export type movimientofinancieroUpsertWithoutAsientomovimientoInput = {
    update: Prisma.XOR<Prisma.movimientofinancieroUpdateWithoutAsientomovimientoInput, Prisma.movimientofinancieroUncheckedUpdateWithoutAsientomovimientoInput>;
    create: Prisma.XOR<Prisma.movimientofinancieroCreateWithoutAsientomovimientoInput, Prisma.movimientofinancieroUncheckedCreateWithoutAsientomovimientoInput>;
    where?: Prisma.movimientofinancieroWhereInput;
};
export type movimientofinancieroUpdateToOneWithWhereWithoutAsientomovimientoInput = {
    where?: Prisma.movimientofinancieroWhereInput;
    data: Prisma.XOR<Prisma.movimientofinancieroUpdateWithoutAsientomovimientoInput, Prisma.movimientofinancieroUncheckedUpdateWithoutAsientomovimientoInput>;
};
export type movimientofinancieroUpdateWithoutAsientomovimientoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tipo?: Prisma.Enummovimientofinanciero_tipoFieldUpdateOperationsInput | $Enums.movimientofinanciero_tipo;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conciliacion?: Prisma.Enummovimientofinanciero_conciliacionFieldUpdateOperationsInput | $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    conciliadoPor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupoTransferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cobro?: Prisma.cobroUpdateOneWithoutMovimientofinancieroNestedInput;
    cuentafinanciera?: Prisma.cuentafinancieraUpdateOneRequiredWithoutMovimientofinancieroNestedInput;
    pago?: Prisma.pagoUpdateOneWithoutMovimientofinancieroNestedInput;
};
export type movimientofinancieroUncheckedUpdateWithoutAsientomovimientoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cuentaFinancieraId?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tipo?: Prisma.Enummovimientofinanciero_tipoFieldUpdateOperationsInput | $Enums.movimientofinanciero_tipo;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conciliacion?: Prisma.Enummovimientofinanciero_conciliacionFieldUpdateOperationsInput | $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    conciliadoPor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupoTransferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cobro?: Prisma.cobroUncheckedUpdateOneWithoutMovimientofinancieroNestedInput;
    pago?: Prisma.pagoUncheckedUpdateOneWithoutMovimientofinancieroNestedInput;
};
export type movimientofinancieroCreateWithoutCobroInput = {
    id: string;
    fecha: Date | string;
    tipo: $Enums.movimientofinanciero_tipo;
    concepto: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: string | null;
    conciliacion?: $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Date | string | null;
    conciliadoPor?: string | null;
    grupoTransferencia?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    asientomovimiento?: Prisma.asientomovimientoCreateNestedManyWithoutMovimientofinancieroInput;
    cuentafinanciera: Prisma.cuentafinancieraCreateNestedOneWithoutMovimientofinancieroInput;
    pago?: Prisma.pagoCreateNestedOneWithoutMovimientofinancieroInput;
};
export type movimientofinancieroUncheckedCreateWithoutCobroInput = {
    id: string;
    cuentaFinancieraId: string;
    fecha: Date | string;
    tipo: $Enums.movimientofinanciero_tipo;
    concepto: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: string | null;
    conciliacion?: $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Date | string | null;
    conciliadoPor?: string | null;
    grupoTransferencia?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    asientomovimiento?: Prisma.asientomovimientoUncheckedCreateNestedManyWithoutMovimientofinancieroInput;
    pago?: Prisma.pagoUncheckedCreateNestedOneWithoutMovimientofinancieroInput;
};
export type movimientofinancieroCreateOrConnectWithoutCobroInput = {
    where: Prisma.movimientofinancieroWhereUniqueInput;
    create: Prisma.XOR<Prisma.movimientofinancieroCreateWithoutCobroInput, Prisma.movimientofinancieroUncheckedCreateWithoutCobroInput>;
};
export type movimientofinancieroUpsertWithoutCobroInput = {
    update: Prisma.XOR<Prisma.movimientofinancieroUpdateWithoutCobroInput, Prisma.movimientofinancieroUncheckedUpdateWithoutCobroInput>;
    create: Prisma.XOR<Prisma.movimientofinancieroCreateWithoutCobroInput, Prisma.movimientofinancieroUncheckedCreateWithoutCobroInput>;
    where?: Prisma.movimientofinancieroWhereInput;
};
export type movimientofinancieroUpdateToOneWithWhereWithoutCobroInput = {
    where?: Prisma.movimientofinancieroWhereInput;
    data: Prisma.XOR<Prisma.movimientofinancieroUpdateWithoutCobroInput, Prisma.movimientofinancieroUncheckedUpdateWithoutCobroInput>;
};
export type movimientofinancieroUpdateWithoutCobroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tipo?: Prisma.Enummovimientofinanciero_tipoFieldUpdateOperationsInput | $Enums.movimientofinanciero_tipo;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conciliacion?: Prisma.Enummovimientofinanciero_conciliacionFieldUpdateOperationsInput | $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    conciliadoPor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupoTransferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asientomovimiento?: Prisma.asientomovimientoUpdateManyWithoutMovimientofinancieroNestedInput;
    cuentafinanciera?: Prisma.cuentafinancieraUpdateOneRequiredWithoutMovimientofinancieroNestedInput;
    pago?: Prisma.pagoUpdateOneWithoutMovimientofinancieroNestedInput;
};
export type movimientofinancieroUncheckedUpdateWithoutCobroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cuentaFinancieraId?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tipo?: Prisma.Enummovimientofinanciero_tipoFieldUpdateOperationsInput | $Enums.movimientofinanciero_tipo;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conciliacion?: Prisma.Enummovimientofinanciero_conciliacionFieldUpdateOperationsInput | $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    conciliadoPor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupoTransferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asientomovimiento?: Prisma.asientomovimientoUncheckedUpdateManyWithoutMovimientofinancieroNestedInput;
    pago?: Prisma.pagoUncheckedUpdateOneWithoutMovimientofinancieroNestedInput;
};
export type movimientofinancieroCreateWithoutCuentafinancieraInput = {
    id: string;
    fecha: Date | string;
    tipo: $Enums.movimientofinanciero_tipo;
    concepto: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: string | null;
    conciliacion?: $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Date | string | null;
    conciliadoPor?: string | null;
    grupoTransferencia?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    asientomovimiento?: Prisma.asientomovimientoCreateNestedManyWithoutMovimientofinancieroInput;
    cobro?: Prisma.cobroCreateNestedOneWithoutMovimientofinancieroInput;
    pago?: Prisma.pagoCreateNestedOneWithoutMovimientofinancieroInput;
};
export type movimientofinancieroUncheckedCreateWithoutCuentafinancieraInput = {
    id: string;
    fecha: Date | string;
    tipo: $Enums.movimientofinanciero_tipo;
    concepto: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: string | null;
    conciliacion?: $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Date | string | null;
    conciliadoPor?: string | null;
    grupoTransferencia?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    asientomovimiento?: Prisma.asientomovimientoUncheckedCreateNestedManyWithoutMovimientofinancieroInput;
    cobro?: Prisma.cobroUncheckedCreateNestedOneWithoutMovimientofinancieroInput;
    pago?: Prisma.pagoUncheckedCreateNestedOneWithoutMovimientofinancieroInput;
};
export type movimientofinancieroCreateOrConnectWithoutCuentafinancieraInput = {
    where: Prisma.movimientofinancieroWhereUniqueInput;
    create: Prisma.XOR<Prisma.movimientofinancieroCreateWithoutCuentafinancieraInput, Prisma.movimientofinancieroUncheckedCreateWithoutCuentafinancieraInput>;
};
export type movimientofinancieroCreateManyCuentafinancieraInputEnvelope = {
    data: Prisma.movimientofinancieroCreateManyCuentafinancieraInput | Prisma.movimientofinancieroCreateManyCuentafinancieraInput[];
    skipDuplicates?: boolean;
};
export type movimientofinancieroUpsertWithWhereUniqueWithoutCuentafinancieraInput = {
    where: Prisma.movimientofinancieroWhereUniqueInput;
    update: Prisma.XOR<Prisma.movimientofinancieroUpdateWithoutCuentafinancieraInput, Prisma.movimientofinancieroUncheckedUpdateWithoutCuentafinancieraInput>;
    create: Prisma.XOR<Prisma.movimientofinancieroCreateWithoutCuentafinancieraInput, Prisma.movimientofinancieroUncheckedCreateWithoutCuentafinancieraInput>;
};
export type movimientofinancieroUpdateWithWhereUniqueWithoutCuentafinancieraInput = {
    where: Prisma.movimientofinancieroWhereUniqueInput;
    data: Prisma.XOR<Prisma.movimientofinancieroUpdateWithoutCuentafinancieraInput, Prisma.movimientofinancieroUncheckedUpdateWithoutCuentafinancieraInput>;
};
export type movimientofinancieroUpdateManyWithWhereWithoutCuentafinancieraInput = {
    where: Prisma.movimientofinancieroScalarWhereInput;
    data: Prisma.XOR<Prisma.movimientofinancieroUpdateManyMutationInput, Prisma.movimientofinancieroUncheckedUpdateManyWithoutCuentafinancieraInput>;
};
export type movimientofinancieroScalarWhereInput = {
    AND?: Prisma.movimientofinancieroScalarWhereInput | Prisma.movimientofinancieroScalarWhereInput[];
    OR?: Prisma.movimientofinancieroScalarWhereInput[];
    NOT?: Prisma.movimientofinancieroScalarWhereInput | Prisma.movimientofinancieroScalarWhereInput[];
    id?: Prisma.StringFilter<"movimientofinanciero"> | string;
    cuentaFinancieraId?: Prisma.StringFilter<"movimientofinanciero"> | string;
    fecha?: Prisma.DateTimeFilter<"movimientofinanciero"> | Date | string;
    tipo?: Prisma.Enummovimientofinanciero_tipoFilter<"movimientofinanciero"> | $Enums.movimientofinanciero_tipo;
    concepto?: Prisma.StringFilter<"movimientofinanciero"> | string;
    importe?: Prisma.DecimalFilter<"movimientofinanciero"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.StringNullableFilter<"movimientofinanciero"> | string | null;
    conciliacion?: Prisma.Enummovimientofinanciero_conciliacionFilter<"movimientofinanciero"> | $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Prisma.DateTimeNullableFilter<"movimientofinanciero"> | Date | string | null;
    conciliadoPor?: Prisma.StringNullableFilter<"movimientofinanciero"> | string | null;
    grupoTransferencia?: Prisma.StringNullableFilter<"movimientofinanciero"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"movimientofinanciero"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"movimientofinanciero"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"movimientofinanciero"> | Date | string;
};
export type movimientofinancieroCreateWithoutPagoInput = {
    id: string;
    fecha: Date | string;
    tipo: $Enums.movimientofinanciero_tipo;
    concepto: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: string | null;
    conciliacion?: $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Date | string | null;
    conciliadoPor?: string | null;
    grupoTransferencia?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    asientomovimiento?: Prisma.asientomovimientoCreateNestedManyWithoutMovimientofinancieroInput;
    cobro?: Prisma.cobroCreateNestedOneWithoutMovimientofinancieroInput;
    cuentafinanciera: Prisma.cuentafinancieraCreateNestedOneWithoutMovimientofinancieroInput;
};
export type movimientofinancieroUncheckedCreateWithoutPagoInput = {
    id: string;
    cuentaFinancieraId: string;
    fecha: Date | string;
    tipo: $Enums.movimientofinanciero_tipo;
    concepto: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: string | null;
    conciliacion?: $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Date | string | null;
    conciliadoPor?: string | null;
    grupoTransferencia?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    asientomovimiento?: Prisma.asientomovimientoUncheckedCreateNestedManyWithoutMovimientofinancieroInput;
    cobro?: Prisma.cobroUncheckedCreateNestedOneWithoutMovimientofinancieroInput;
};
export type movimientofinancieroCreateOrConnectWithoutPagoInput = {
    where: Prisma.movimientofinancieroWhereUniqueInput;
    create: Prisma.XOR<Prisma.movimientofinancieroCreateWithoutPagoInput, Prisma.movimientofinancieroUncheckedCreateWithoutPagoInput>;
};
export type movimientofinancieroUpsertWithoutPagoInput = {
    update: Prisma.XOR<Prisma.movimientofinancieroUpdateWithoutPagoInput, Prisma.movimientofinancieroUncheckedUpdateWithoutPagoInput>;
    create: Prisma.XOR<Prisma.movimientofinancieroCreateWithoutPagoInput, Prisma.movimientofinancieroUncheckedCreateWithoutPagoInput>;
    where?: Prisma.movimientofinancieroWhereInput;
};
export type movimientofinancieroUpdateToOneWithWhereWithoutPagoInput = {
    where?: Prisma.movimientofinancieroWhereInput;
    data: Prisma.XOR<Prisma.movimientofinancieroUpdateWithoutPagoInput, Prisma.movimientofinancieroUncheckedUpdateWithoutPagoInput>;
};
export type movimientofinancieroUpdateWithoutPagoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tipo?: Prisma.Enummovimientofinanciero_tipoFieldUpdateOperationsInput | $Enums.movimientofinanciero_tipo;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conciliacion?: Prisma.Enummovimientofinanciero_conciliacionFieldUpdateOperationsInput | $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    conciliadoPor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupoTransferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asientomovimiento?: Prisma.asientomovimientoUpdateManyWithoutMovimientofinancieroNestedInput;
    cobro?: Prisma.cobroUpdateOneWithoutMovimientofinancieroNestedInput;
    cuentafinanciera?: Prisma.cuentafinancieraUpdateOneRequiredWithoutMovimientofinancieroNestedInput;
};
export type movimientofinancieroUncheckedUpdateWithoutPagoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cuentaFinancieraId?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tipo?: Prisma.Enummovimientofinanciero_tipoFieldUpdateOperationsInput | $Enums.movimientofinanciero_tipo;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conciliacion?: Prisma.Enummovimientofinanciero_conciliacionFieldUpdateOperationsInput | $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    conciliadoPor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupoTransferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asientomovimiento?: Prisma.asientomovimientoUncheckedUpdateManyWithoutMovimientofinancieroNestedInput;
    cobro?: Prisma.cobroUncheckedUpdateOneWithoutMovimientofinancieroNestedInput;
};
export type movimientofinancieroCreateManyCuentafinancieraInput = {
    id: string;
    fecha: Date | string;
    tipo: $Enums.movimientofinanciero_tipo;
    concepto: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: string | null;
    conciliacion?: $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Date | string | null;
    conciliadoPor?: string | null;
    grupoTransferencia?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type movimientofinancieroUpdateWithoutCuentafinancieraInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tipo?: Prisma.Enummovimientofinanciero_tipoFieldUpdateOperationsInput | $Enums.movimientofinanciero_tipo;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conciliacion?: Prisma.Enummovimientofinanciero_conciliacionFieldUpdateOperationsInput | $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    conciliadoPor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupoTransferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asientomovimiento?: Prisma.asientomovimientoUpdateManyWithoutMovimientofinancieroNestedInput;
    cobro?: Prisma.cobroUpdateOneWithoutMovimientofinancieroNestedInput;
    pago?: Prisma.pagoUpdateOneWithoutMovimientofinancieroNestedInput;
};
export type movimientofinancieroUncheckedUpdateWithoutCuentafinancieraInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tipo?: Prisma.Enummovimientofinanciero_tipoFieldUpdateOperationsInput | $Enums.movimientofinanciero_tipo;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conciliacion?: Prisma.Enummovimientofinanciero_conciliacionFieldUpdateOperationsInput | $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    conciliadoPor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupoTransferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asientomovimiento?: Prisma.asientomovimientoUncheckedUpdateManyWithoutMovimientofinancieroNestedInput;
    cobro?: Prisma.cobroUncheckedUpdateOneWithoutMovimientofinancieroNestedInput;
    pago?: Prisma.pagoUncheckedUpdateOneWithoutMovimientofinancieroNestedInput;
};
export type movimientofinancieroUncheckedUpdateManyWithoutCuentafinancieraInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tipo?: Prisma.Enummovimientofinanciero_tipoFieldUpdateOperationsInput | $Enums.movimientofinanciero_tipo;
    concepto?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    conciliacion?: Prisma.Enummovimientofinanciero_conciliacionFieldUpdateOperationsInput | $Enums.movimientofinanciero_conciliacion;
    fechaConciliacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    conciliadoPor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    grupoTransferencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type MovimientofinancieroCountOutputType
 */
export type MovimientofinancieroCountOutputType = {
    asientomovimiento: number;
};
export type MovimientofinancieroCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asientomovimiento?: boolean | MovimientofinancieroCountOutputTypeCountAsientomovimientoArgs;
};
/**
 * MovimientofinancieroCountOutputType without action
 */
export type MovimientofinancieroCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovimientofinancieroCountOutputType
     */
    select?: Prisma.MovimientofinancieroCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MovimientofinancieroCountOutputType without action
 */
export type MovimientofinancieroCountOutputTypeCountAsientomovimientoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.asientomovimientoWhereInput;
};
export type movimientofinancieroSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cuentaFinancieraId?: boolean;
    fecha?: boolean;
    tipo?: boolean;
    concepto?: boolean;
    importe?: boolean;
    referencia?: boolean;
    conciliacion?: boolean;
    fechaConciliacion?: boolean;
    conciliadoPor?: boolean;
    grupoTransferencia?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    asientomovimiento?: boolean | Prisma.movimientofinanciero$asientomovimientoArgs<ExtArgs>;
    cobro?: boolean | Prisma.movimientofinanciero$cobroArgs<ExtArgs>;
    cuentafinanciera?: boolean | Prisma.cuentafinancieraDefaultArgs<ExtArgs>;
    pago?: boolean | Prisma.movimientofinanciero$pagoArgs<ExtArgs>;
    _count?: boolean | Prisma.MovimientofinancieroCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["movimientofinanciero"]>;
export type movimientofinancieroSelectScalar = {
    id?: boolean;
    cuentaFinancieraId?: boolean;
    fecha?: boolean;
    tipo?: boolean;
    concepto?: boolean;
    importe?: boolean;
    referencia?: boolean;
    conciliacion?: boolean;
    fechaConciliacion?: boolean;
    conciliadoPor?: boolean;
    grupoTransferencia?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type movimientofinancieroOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cuentaFinancieraId" | "fecha" | "tipo" | "concepto" | "importe" | "referencia" | "conciliacion" | "fechaConciliacion" | "conciliadoPor" | "grupoTransferencia" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["movimientofinanciero"]>;
export type movimientofinancieroInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asientomovimiento?: boolean | Prisma.movimientofinanciero$asientomovimientoArgs<ExtArgs>;
    cobro?: boolean | Prisma.movimientofinanciero$cobroArgs<ExtArgs>;
    cuentafinanciera?: boolean | Prisma.cuentafinancieraDefaultArgs<ExtArgs>;
    pago?: boolean | Prisma.movimientofinanciero$pagoArgs<ExtArgs>;
    _count?: boolean | Prisma.MovimientofinancieroCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $movimientofinancieroPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "movimientofinanciero";
    objects: {
        asientomovimiento: Prisma.$asientomovimientoPayload<ExtArgs>[];
        cobro: Prisma.$cobroPayload<ExtArgs> | null;
        cuentafinanciera: Prisma.$cuentafinancieraPayload<ExtArgs>;
        pago: Prisma.$pagoPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        cuentaFinancieraId: string;
        fecha: Date;
        tipo: $Enums.movimientofinanciero_tipo;
        concepto: string;
        importe: runtime.Decimal;
        referencia: string | null;
        conciliacion: $Enums.movimientofinanciero_conciliacion;
        fechaConciliacion: Date | null;
        conciliadoPor: string | null;
        grupoTransferencia: string | null;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["movimientofinanciero"]>;
    composites: {};
};
export type movimientofinancieroGetPayload<S extends boolean | null | undefined | movimientofinancieroDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$movimientofinancieroPayload, S>;
export type movimientofinancieroCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<movimientofinancieroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MovimientofinancieroCountAggregateInputType | true;
};
export interface movimientofinancieroDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['movimientofinanciero'];
        meta: {
            name: 'movimientofinanciero';
        };
    };
    /**
     * Find zero or one Movimientofinanciero that matches the filter.
     * @param {movimientofinancieroFindUniqueArgs} args - Arguments to find a Movimientofinanciero
     * @example
     * // Get one Movimientofinanciero
     * const movimientofinanciero = await prisma.movimientofinanciero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends movimientofinancieroFindUniqueArgs>(args: Prisma.SelectSubset<T, movimientofinancieroFindUniqueArgs<ExtArgs>>): Prisma.Prisma__movimientofinancieroClient<runtime.Types.Result.GetResult<Prisma.$movimientofinancieroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Movimientofinanciero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {movimientofinancieroFindUniqueOrThrowArgs} args - Arguments to find a Movimientofinanciero
     * @example
     * // Get one Movimientofinanciero
     * const movimientofinanciero = await prisma.movimientofinanciero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends movimientofinancieroFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, movimientofinancieroFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__movimientofinancieroClient<runtime.Types.Result.GetResult<Prisma.$movimientofinancieroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Movimientofinanciero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientofinancieroFindFirstArgs} args - Arguments to find a Movimientofinanciero
     * @example
     * // Get one Movimientofinanciero
     * const movimientofinanciero = await prisma.movimientofinanciero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends movimientofinancieroFindFirstArgs>(args?: Prisma.SelectSubset<T, movimientofinancieroFindFirstArgs<ExtArgs>>): Prisma.Prisma__movimientofinancieroClient<runtime.Types.Result.GetResult<Prisma.$movimientofinancieroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Movimientofinanciero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientofinancieroFindFirstOrThrowArgs} args - Arguments to find a Movimientofinanciero
     * @example
     * // Get one Movimientofinanciero
     * const movimientofinanciero = await prisma.movimientofinanciero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends movimientofinancieroFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, movimientofinancieroFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__movimientofinancieroClient<runtime.Types.Result.GetResult<Prisma.$movimientofinancieroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Movimientofinancieros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientofinancieroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movimientofinancieros
     * const movimientofinancieros = await prisma.movimientofinanciero.findMany()
     *
     * // Get first 10 Movimientofinancieros
     * const movimientofinancieros = await prisma.movimientofinanciero.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const movimientofinancieroWithIdOnly = await prisma.movimientofinanciero.findMany({ select: { id: true } })
     *
     */
    findMany<T extends movimientofinancieroFindManyArgs>(args?: Prisma.SelectSubset<T, movimientofinancieroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$movimientofinancieroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Movimientofinanciero.
     * @param {movimientofinancieroCreateArgs} args - Arguments to create a Movimientofinanciero.
     * @example
     * // Create one Movimientofinanciero
     * const Movimientofinanciero = await prisma.movimientofinanciero.create({
     *   data: {
     *     // ... data to create a Movimientofinanciero
     *   }
     * })
     *
     */
    create<T extends movimientofinancieroCreateArgs>(args: Prisma.SelectSubset<T, movimientofinancieroCreateArgs<ExtArgs>>): Prisma.Prisma__movimientofinancieroClient<runtime.Types.Result.GetResult<Prisma.$movimientofinancieroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Movimientofinancieros.
     * @param {movimientofinancieroCreateManyArgs} args - Arguments to create many Movimientofinancieros.
     * @example
     * // Create many Movimientofinancieros
     * const movimientofinanciero = await prisma.movimientofinanciero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends movimientofinancieroCreateManyArgs>(args?: Prisma.SelectSubset<T, movimientofinancieroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Movimientofinanciero.
     * @param {movimientofinancieroDeleteArgs} args - Arguments to delete one Movimientofinanciero.
     * @example
     * // Delete one Movimientofinanciero
     * const Movimientofinanciero = await prisma.movimientofinanciero.delete({
     *   where: {
     *     // ... filter to delete one Movimientofinanciero
     *   }
     * })
     *
     */
    delete<T extends movimientofinancieroDeleteArgs>(args: Prisma.SelectSubset<T, movimientofinancieroDeleteArgs<ExtArgs>>): Prisma.Prisma__movimientofinancieroClient<runtime.Types.Result.GetResult<Prisma.$movimientofinancieroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Movimientofinanciero.
     * @param {movimientofinancieroUpdateArgs} args - Arguments to update one Movimientofinanciero.
     * @example
     * // Update one Movimientofinanciero
     * const movimientofinanciero = await prisma.movimientofinanciero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends movimientofinancieroUpdateArgs>(args: Prisma.SelectSubset<T, movimientofinancieroUpdateArgs<ExtArgs>>): Prisma.Prisma__movimientofinancieroClient<runtime.Types.Result.GetResult<Prisma.$movimientofinancieroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Movimientofinancieros.
     * @param {movimientofinancieroDeleteManyArgs} args - Arguments to filter Movimientofinancieros to delete.
     * @example
     * // Delete a few Movimientofinancieros
     * const { count } = await prisma.movimientofinanciero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends movimientofinancieroDeleteManyArgs>(args?: Prisma.SelectSubset<T, movimientofinancieroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Movimientofinancieros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientofinancieroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movimientofinancieros
     * const movimientofinanciero = await prisma.movimientofinanciero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends movimientofinancieroUpdateManyArgs>(args: Prisma.SelectSubset<T, movimientofinancieroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Movimientofinanciero.
     * @param {movimientofinancieroUpsertArgs} args - Arguments to update or create a Movimientofinanciero.
     * @example
     * // Update or create a Movimientofinanciero
     * const movimientofinanciero = await prisma.movimientofinanciero.upsert({
     *   create: {
     *     // ... data to create a Movimientofinanciero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movimientofinanciero we want to update
     *   }
     * })
     */
    upsert<T extends movimientofinancieroUpsertArgs>(args: Prisma.SelectSubset<T, movimientofinancieroUpsertArgs<ExtArgs>>): Prisma.Prisma__movimientofinancieroClient<runtime.Types.Result.GetResult<Prisma.$movimientofinancieroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Movimientofinancieros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientofinancieroCountArgs} args - Arguments to filter Movimientofinancieros to count.
     * @example
     * // Count the number of Movimientofinancieros
     * const count = await prisma.movimientofinanciero.count({
     *   where: {
     *     // ... the filter for the Movimientofinancieros we want to count
     *   }
     * })
    **/
    count<T extends movimientofinancieroCountArgs>(args?: Prisma.Subset<T, movimientofinancieroCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MovimientofinancieroCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Movimientofinanciero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovimientofinancieroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovimientofinancieroAggregateArgs>(args: Prisma.Subset<T, MovimientofinancieroAggregateArgs>): Prisma.PrismaPromise<GetMovimientofinancieroAggregateType<T>>;
    /**
     * Group by Movimientofinanciero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {movimientofinancieroGroupByArgs} args - Group by arguments.
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
    groupBy<T extends movimientofinancieroGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: movimientofinancieroGroupByArgs['orderBy'];
    } : {
        orderBy?: movimientofinancieroGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, movimientofinancieroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimientofinancieroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the movimientofinanciero model
     */
    readonly fields: movimientofinancieroFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for movimientofinanciero.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__movimientofinancieroClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    asientomovimiento<T extends Prisma.movimientofinanciero$asientomovimientoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.movimientofinanciero$asientomovimientoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$asientomovimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cobro<T extends Prisma.movimientofinanciero$cobroArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.movimientofinanciero$cobroArgs<ExtArgs>>): Prisma.Prisma__cobroClient<runtime.Types.Result.GetResult<Prisma.$cobroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    cuentafinanciera<T extends Prisma.cuentafinancieraDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cuentafinancieraDefaultArgs<ExtArgs>>): Prisma.Prisma__cuentafinancieraClient<runtime.Types.Result.GetResult<Prisma.$cuentafinancieraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    pago<T extends Prisma.movimientofinanciero$pagoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.movimientofinanciero$pagoArgs<ExtArgs>>): Prisma.Prisma__pagoClient<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the movimientofinanciero model
 */
export interface movimientofinancieroFieldRefs {
    readonly id: Prisma.FieldRef<"movimientofinanciero", 'String'>;
    readonly cuentaFinancieraId: Prisma.FieldRef<"movimientofinanciero", 'String'>;
    readonly fecha: Prisma.FieldRef<"movimientofinanciero", 'DateTime'>;
    readonly tipo: Prisma.FieldRef<"movimientofinanciero", 'movimientofinanciero_tipo'>;
    readonly concepto: Prisma.FieldRef<"movimientofinanciero", 'String'>;
    readonly importe: Prisma.FieldRef<"movimientofinanciero", 'Decimal'>;
    readonly referencia: Prisma.FieldRef<"movimientofinanciero", 'String'>;
    readonly conciliacion: Prisma.FieldRef<"movimientofinanciero", 'movimientofinanciero_conciliacion'>;
    readonly fechaConciliacion: Prisma.FieldRef<"movimientofinanciero", 'DateTime'>;
    readonly conciliadoPor: Prisma.FieldRef<"movimientofinanciero", 'String'>;
    readonly grupoTransferencia: Prisma.FieldRef<"movimientofinanciero", 'String'>;
    readonly observaciones: Prisma.FieldRef<"movimientofinanciero", 'String'>;
    readonly createdAt: Prisma.FieldRef<"movimientofinanciero", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"movimientofinanciero", 'DateTime'>;
}
/**
 * movimientofinanciero findUnique
 */
export type movimientofinancieroFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientofinanciero
     */
    select?: Prisma.movimientofinancieroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the movimientofinanciero
     */
    omit?: Prisma.movimientofinancieroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.movimientofinancieroInclude<ExtArgs> | null;
    /**
     * Filter, which movimientofinanciero to fetch.
     */
    where: Prisma.movimientofinancieroWhereUniqueInput;
};
/**
 * movimientofinanciero findUniqueOrThrow
 */
export type movimientofinancieroFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientofinanciero
     */
    select?: Prisma.movimientofinancieroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the movimientofinanciero
     */
    omit?: Prisma.movimientofinancieroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.movimientofinancieroInclude<ExtArgs> | null;
    /**
     * Filter, which movimientofinanciero to fetch.
     */
    where: Prisma.movimientofinancieroWhereUniqueInput;
};
/**
 * movimientofinanciero findFirst
 */
export type movimientofinancieroFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientofinanciero
     */
    select?: Prisma.movimientofinancieroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the movimientofinanciero
     */
    omit?: Prisma.movimientofinancieroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.movimientofinancieroInclude<ExtArgs> | null;
    /**
     * Filter, which movimientofinanciero to fetch.
     */
    where?: Prisma.movimientofinancieroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of movimientofinancieros to fetch.
     */
    orderBy?: Prisma.movimientofinancieroOrderByWithRelationInput | Prisma.movimientofinancieroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for movimientofinancieros.
     */
    cursor?: Prisma.movimientofinancieroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` movimientofinancieros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` movimientofinancieros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of movimientofinancieros.
     */
    distinct?: Prisma.MovimientofinancieroScalarFieldEnum | Prisma.MovimientofinancieroScalarFieldEnum[];
};
/**
 * movimientofinanciero findFirstOrThrow
 */
export type movimientofinancieroFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientofinanciero
     */
    select?: Prisma.movimientofinancieroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the movimientofinanciero
     */
    omit?: Prisma.movimientofinancieroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.movimientofinancieroInclude<ExtArgs> | null;
    /**
     * Filter, which movimientofinanciero to fetch.
     */
    where?: Prisma.movimientofinancieroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of movimientofinancieros to fetch.
     */
    orderBy?: Prisma.movimientofinancieroOrderByWithRelationInput | Prisma.movimientofinancieroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for movimientofinancieros.
     */
    cursor?: Prisma.movimientofinancieroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` movimientofinancieros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` movimientofinancieros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of movimientofinancieros.
     */
    distinct?: Prisma.MovimientofinancieroScalarFieldEnum | Prisma.MovimientofinancieroScalarFieldEnum[];
};
/**
 * movimientofinanciero findMany
 */
export type movimientofinancieroFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientofinanciero
     */
    select?: Prisma.movimientofinancieroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the movimientofinanciero
     */
    omit?: Prisma.movimientofinancieroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.movimientofinancieroInclude<ExtArgs> | null;
    /**
     * Filter, which movimientofinancieros to fetch.
     */
    where?: Prisma.movimientofinancieroWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of movimientofinancieros to fetch.
     */
    orderBy?: Prisma.movimientofinancieroOrderByWithRelationInput | Prisma.movimientofinancieroOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing movimientofinancieros.
     */
    cursor?: Prisma.movimientofinancieroWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` movimientofinancieros from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` movimientofinancieros.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of movimientofinancieros.
     */
    distinct?: Prisma.MovimientofinancieroScalarFieldEnum | Prisma.MovimientofinancieroScalarFieldEnum[];
};
/**
 * movimientofinanciero create
 */
export type movimientofinancieroCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientofinanciero
     */
    select?: Prisma.movimientofinancieroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the movimientofinanciero
     */
    omit?: Prisma.movimientofinancieroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.movimientofinancieroInclude<ExtArgs> | null;
    /**
     * The data needed to create a movimientofinanciero.
     */
    data: Prisma.XOR<Prisma.movimientofinancieroCreateInput, Prisma.movimientofinancieroUncheckedCreateInput>;
};
/**
 * movimientofinanciero createMany
 */
export type movimientofinancieroCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many movimientofinancieros.
     */
    data: Prisma.movimientofinancieroCreateManyInput | Prisma.movimientofinancieroCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * movimientofinanciero update
 */
export type movimientofinancieroUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientofinanciero
     */
    select?: Prisma.movimientofinancieroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the movimientofinanciero
     */
    omit?: Prisma.movimientofinancieroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.movimientofinancieroInclude<ExtArgs> | null;
    /**
     * The data needed to update a movimientofinanciero.
     */
    data: Prisma.XOR<Prisma.movimientofinancieroUpdateInput, Prisma.movimientofinancieroUncheckedUpdateInput>;
    /**
     * Choose, which movimientofinanciero to update.
     */
    where: Prisma.movimientofinancieroWhereUniqueInput;
};
/**
 * movimientofinanciero updateMany
 */
export type movimientofinancieroUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update movimientofinancieros.
     */
    data: Prisma.XOR<Prisma.movimientofinancieroUpdateManyMutationInput, Prisma.movimientofinancieroUncheckedUpdateManyInput>;
    /**
     * Filter which movimientofinancieros to update
     */
    where?: Prisma.movimientofinancieroWhereInput;
    /**
     * Limit how many movimientofinancieros to update.
     */
    limit?: number;
};
/**
 * movimientofinanciero upsert
 */
export type movimientofinancieroUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientofinanciero
     */
    select?: Prisma.movimientofinancieroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the movimientofinanciero
     */
    omit?: Prisma.movimientofinancieroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.movimientofinancieroInclude<ExtArgs> | null;
    /**
     * The filter to search for the movimientofinanciero to update in case it exists.
     */
    where: Prisma.movimientofinancieroWhereUniqueInput;
    /**
     * In case the movimientofinanciero found by the `where` argument doesn't exist, create a new movimientofinanciero with this data.
     */
    create: Prisma.XOR<Prisma.movimientofinancieroCreateInput, Prisma.movimientofinancieroUncheckedCreateInput>;
    /**
     * In case the movimientofinanciero was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.movimientofinancieroUpdateInput, Prisma.movimientofinancieroUncheckedUpdateInput>;
};
/**
 * movimientofinanciero delete
 */
export type movimientofinancieroDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientofinanciero
     */
    select?: Prisma.movimientofinancieroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the movimientofinanciero
     */
    omit?: Prisma.movimientofinancieroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.movimientofinancieroInclude<ExtArgs> | null;
    /**
     * Filter which movimientofinanciero to delete.
     */
    where: Prisma.movimientofinancieroWhereUniqueInput;
};
/**
 * movimientofinanciero deleteMany
 */
export type movimientofinancieroDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which movimientofinancieros to delete
     */
    where?: Prisma.movimientofinancieroWhereInput;
    /**
     * Limit how many movimientofinancieros to delete.
     */
    limit?: number;
};
/**
 * movimientofinanciero.asientomovimiento
 */
export type movimientofinanciero$asientomovimientoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asientomovimiento
     */
    select?: Prisma.asientomovimientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the asientomovimiento
     */
    omit?: Prisma.asientomovimientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.asientomovimientoInclude<ExtArgs> | null;
    where?: Prisma.asientomovimientoWhereInput;
    orderBy?: Prisma.asientomovimientoOrderByWithRelationInput | Prisma.asientomovimientoOrderByWithRelationInput[];
    cursor?: Prisma.asientomovimientoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AsientomovimientoScalarFieldEnum | Prisma.AsientomovimientoScalarFieldEnum[];
};
/**
 * movimientofinanciero.cobro
 */
export type movimientofinanciero$cobroArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.cobroWhereInput;
};
/**
 * movimientofinanciero.pago
 */
export type movimientofinanciero$pagoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.pagoWhereInput;
};
/**
 * movimientofinanciero without action
 */
export type movimientofinancieroDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the movimientofinanciero
     */
    select?: Prisma.movimientofinancieroSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the movimientofinanciero
     */
    omit?: Prisma.movimientofinancieroOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.movimientofinancieroInclude<ExtArgs> | null;
};
//# sourceMappingURL=movimientofinanciero.d.ts.map