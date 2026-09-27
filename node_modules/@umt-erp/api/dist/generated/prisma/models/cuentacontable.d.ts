import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model cuentacontable
 *
 */
export type cuentacontableModel = runtime.Types.Result.DefaultSelection<Prisma.$cuentacontablePayload>;
export type AggregateCuentacontable = {
    _count: CuentacontableCountAggregateOutputType | null;
    _avg: CuentacontableAvgAggregateOutputType | null;
    _sum: CuentacontableSumAggregateOutputType | null;
    _min: CuentacontableMinAggregateOutputType | null;
    _max: CuentacontableMaxAggregateOutputType | null;
};
export type CuentacontableAvgAggregateOutputType = {
    nivel: number | null;
};
export type CuentacontableSumAggregateOutputType = {
    nivel: number | null;
};
export type CuentacontableMinAggregateOutputType = {
    id: string | null;
    codigo: string | null;
    nombre: string | null;
    tipo: $Enums.cuentacontable_tipo | null;
    naturaleza: $Enums.cuentacontable_naturaleza | null;
    nivel: number | null;
    agrupadora: boolean | null;
    movimiento: boolean | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    activa: boolean | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CuentacontableMaxAggregateOutputType = {
    id: string | null;
    codigo: string | null;
    nombre: string | null;
    tipo: $Enums.cuentacontable_tipo | null;
    naturaleza: $Enums.cuentacontable_naturaleza | null;
    nivel: number | null;
    agrupadora: boolean | null;
    movimiento: boolean | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    activa: boolean | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CuentacontableCountAggregateOutputType = {
    id: number;
    codigo: number;
    nombre: number;
    tipo: number;
    naturaleza: number;
    nivel: number;
    agrupadora: number;
    movimiento: number;
    fechaInicio: number;
    fechaFin: number;
    activa: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CuentacontableAvgAggregateInputType = {
    nivel?: true;
};
export type CuentacontableSumAggregateInputType = {
    nivel?: true;
};
export type CuentacontableMinAggregateInputType = {
    id?: true;
    codigo?: true;
    nombre?: true;
    tipo?: true;
    naturaleza?: true;
    nivel?: true;
    agrupadora?: true;
    movimiento?: true;
    fechaInicio?: true;
    fechaFin?: true;
    activa?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CuentacontableMaxAggregateInputType = {
    id?: true;
    codigo?: true;
    nombre?: true;
    tipo?: true;
    naturaleza?: true;
    nivel?: true;
    agrupadora?: true;
    movimiento?: true;
    fechaInicio?: true;
    fechaFin?: true;
    activa?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CuentacontableCountAggregateInputType = {
    id?: true;
    codigo?: true;
    nombre?: true;
    tipo?: true;
    naturaleza?: true;
    nivel?: true;
    agrupadora?: true;
    movimiento?: true;
    fechaInicio?: true;
    fechaFin?: true;
    activa?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CuentacontableAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which cuentacontable to aggregate.
     */
    where?: Prisma.cuentacontableWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cuentacontables to fetch.
     */
    orderBy?: Prisma.cuentacontableOrderByWithRelationInput | Prisma.cuentacontableOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.cuentacontableWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cuentacontables from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cuentacontables.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned cuentacontables
    **/
    _count?: true | CuentacontableCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CuentacontableAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CuentacontableSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CuentacontableMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CuentacontableMaxAggregateInputType;
};
export type GetCuentacontableAggregateType<T extends CuentacontableAggregateArgs> = {
    [P in keyof T & keyof AggregateCuentacontable]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCuentacontable[P]> : Prisma.GetScalarType<T[P], AggregateCuentacontable[P]>;
};
export type cuentacontableGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cuentacontableWhereInput;
    orderBy?: Prisma.cuentacontableOrderByWithAggregationInput | Prisma.cuentacontableOrderByWithAggregationInput[];
    by: Prisma.CuentacontableScalarFieldEnum[] | Prisma.CuentacontableScalarFieldEnum;
    having?: Prisma.cuentacontableScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CuentacontableCountAggregateInputType | true;
    _avg?: CuentacontableAvgAggregateInputType;
    _sum?: CuentacontableSumAggregateInputType;
    _min?: CuentacontableMinAggregateInputType;
    _max?: CuentacontableMaxAggregateInputType;
};
export type CuentacontableGroupByOutputType = {
    id: string;
    codigo: string;
    nombre: string;
    tipo: $Enums.cuentacontable_tipo;
    naturaleza: $Enums.cuentacontable_naturaleza;
    nivel: number;
    agrupadora: boolean;
    movimiento: boolean;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    activa: boolean;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CuentacontableCountAggregateOutputType | null;
    _avg: CuentacontableAvgAggregateOutputType | null;
    _sum: CuentacontableSumAggregateOutputType | null;
    _min: CuentacontableMinAggregateOutputType | null;
    _max: CuentacontableMaxAggregateOutputType | null;
};
export type GetCuentacontableGroupByPayload<T extends cuentacontableGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CuentacontableGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CuentacontableGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CuentacontableGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CuentacontableGroupByOutputType[P]>;
}>>;
export type cuentacontableWhereInput = {
    AND?: Prisma.cuentacontableWhereInput | Prisma.cuentacontableWhereInput[];
    OR?: Prisma.cuentacontableWhereInput[];
    NOT?: Prisma.cuentacontableWhereInput | Prisma.cuentacontableWhereInput[];
    id?: Prisma.StringFilter<"cuentacontable"> | string;
    codigo?: Prisma.StringFilter<"cuentacontable"> | string;
    nombre?: Prisma.StringFilter<"cuentacontable"> | string;
    tipo?: Prisma.Enumcuentacontable_tipoFilter<"cuentacontable"> | $Enums.cuentacontable_tipo;
    naturaleza?: Prisma.Enumcuentacontable_naturalezaFilter<"cuentacontable"> | $Enums.cuentacontable_naturaleza;
    nivel?: Prisma.IntFilter<"cuentacontable"> | number;
    agrupadora?: Prisma.BoolFilter<"cuentacontable"> | boolean;
    movimiento?: Prisma.BoolFilter<"cuentacontable"> | boolean;
    fechaInicio?: Prisma.DateTimeNullableFilter<"cuentacontable"> | Date | string | null;
    fechaFin?: Prisma.DateTimeNullableFilter<"cuentacontable"> | Date | string | null;
    activa?: Prisma.BoolFilter<"cuentacontable"> | boolean;
    observaciones?: Prisma.StringNullableFilter<"cuentacontable"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"cuentacontable"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"cuentacontable"> | Date | string;
    cuentafinanciera?: Prisma.CuentafinancieraListRelationFilter;
    facturacliente?: Prisma.FacturaclienteListRelationFilter;
    facturaproveedor?: Prisma.FacturaproveedorListRelationFilter;
    lineaasiento?: Prisma.LineaasientoListRelationFilter;
};
export type cuentacontableOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    naturaleza?: Prisma.SortOrder;
    nivel?: Prisma.SortOrder;
    agrupadora?: Prisma.SortOrder;
    movimiento?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    cuentafinanciera?: Prisma.cuentafinancieraOrderByRelationAggregateInput;
    facturacliente?: Prisma.facturaclienteOrderByRelationAggregateInput;
    facturaproveedor?: Prisma.facturaproveedorOrderByRelationAggregateInput;
    lineaasiento?: Prisma.lineaasientoOrderByRelationAggregateInput;
    _relevance?: Prisma.cuentacontableOrderByRelevanceInput;
};
export type cuentacontableWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    codigo?: string;
    AND?: Prisma.cuentacontableWhereInput | Prisma.cuentacontableWhereInput[];
    OR?: Prisma.cuentacontableWhereInput[];
    NOT?: Prisma.cuentacontableWhereInput | Prisma.cuentacontableWhereInput[];
    nombre?: Prisma.StringFilter<"cuentacontable"> | string;
    tipo?: Prisma.Enumcuentacontable_tipoFilter<"cuentacontable"> | $Enums.cuentacontable_tipo;
    naturaleza?: Prisma.Enumcuentacontable_naturalezaFilter<"cuentacontable"> | $Enums.cuentacontable_naturaleza;
    nivel?: Prisma.IntFilter<"cuentacontable"> | number;
    agrupadora?: Prisma.BoolFilter<"cuentacontable"> | boolean;
    movimiento?: Prisma.BoolFilter<"cuentacontable"> | boolean;
    fechaInicio?: Prisma.DateTimeNullableFilter<"cuentacontable"> | Date | string | null;
    fechaFin?: Prisma.DateTimeNullableFilter<"cuentacontable"> | Date | string | null;
    activa?: Prisma.BoolFilter<"cuentacontable"> | boolean;
    observaciones?: Prisma.StringNullableFilter<"cuentacontable"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"cuentacontable"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"cuentacontable"> | Date | string;
    cuentafinanciera?: Prisma.CuentafinancieraListRelationFilter;
    facturacliente?: Prisma.FacturaclienteListRelationFilter;
    facturaproveedor?: Prisma.FacturaproveedorListRelationFilter;
    lineaasiento?: Prisma.LineaasientoListRelationFilter;
}, "id" | "codigo">;
export type cuentacontableOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    naturaleza?: Prisma.SortOrder;
    nivel?: Prisma.SortOrder;
    agrupadora?: Prisma.SortOrder;
    movimiento?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.cuentacontableCountOrderByAggregateInput;
    _avg?: Prisma.cuentacontableAvgOrderByAggregateInput;
    _max?: Prisma.cuentacontableMaxOrderByAggregateInput;
    _min?: Prisma.cuentacontableMinOrderByAggregateInput;
    _sum?: Prisma.cuentacontableSumOrderByAggregateInput;
};
export type cuentacontableScalarWhereWithAggregatesInput = {
    AND?: Prisma.cuentacontableScalarWhereWithAggregatesInput | Prisma.cuentacontableScalarWhereWithAggregatesInput[];
    OR?: Prisma.cuentacontableScalarWhereWithAggregatesInput[];
    NOT?: Prisma.cuentacontableScalarWhereWithAggregatesInput | Prisma.cuentacontableScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"cuentacontable"> | string;
    codigo?: Prisma.StringWithAggregatesFilter<"cuentacontable"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"cuentacontable"> | string;
    tipo?: Prisma.Enumcuentacontable_tipoWithAggregatesFilter<"cuentacontable"> | $Enums.cuentacontable_tipo;
    naturaleza?: Prisma.Enumcuentacontable_naturalezaWithAggregatesFilter<"cuentacontable"> | $Enums.cuentacontable_naturaleza;
    nivel?: Prisma.IntWithAggregatesFilter<"cuentacontable"> | number;
    agrupadora?: Prisma.BoolWithAggregatesFilter<"cuentacontable"> | boolean;
    movimiento?: Prisma.BoolWithAggregatesFilter<"cuentacontable"> | boolean;
    fechaInicio?: Prisma.DateTimeNullableWithAggregatesFilter<"cuentacontable"> | Date | string | null;
    fechaFin?: Prisma.DateTimeNullableWithAggregatesFilter<"cuentacontable"> | Date | string | null;
    activa?: Prisma.BoolWithAggregatesFilter<"cuentacontable"> | boolean;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"cuentacontable"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"cuentacontable"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"cuentacontable"> | Date | string;
};
export type cuentacontableCreateInput = {
    id: string;
    codigo: string;
    nombre: string;
    tipo: $Enums.cuentacontable_tipo;
    naturaleza: $Enums.cuentacontable_naturaleza;
    nivel: number;
    agrupadora?: boolean;
    movimiento?: boolean;
    fechaInicio?: Date | string | null;
    fechaFin?: Date | string | null;
    activa?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cuentafinanciera?: Prisma.cuentafinancieraCreateNestedManyWithoutCuentacontableInput;
    facturacliente?: Prisma.facturaclienteCreateNestedManyWithoutCuentacontableInput;
    facturaproveedor?: Prisma.facturaproveedorCreateNestedManyWithoutCuentacontableInput;
    lineaasiento?: Prisma.lineaasientoCreateNestedManyWithoutCuentacontableInput;
};
export type cuentacontableUncheckedCreateInput = {
    id: string;
    codigo: string;
    nombre: string;
    tipo: $Enums.cuentacontable_tipo;
    naturaleza: $Enums.cuentacontable_naturaleza;
    nivel: number;
    agrupadora?: boolean;
    movimiento?: boolean;
    fechaInicio?: Date | string | null;
    fechaFin?: Date | string | null;
    activa?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cuentafinanciera?: Prisma.cuentafinancieraUncheckedCreateNestedManyWithoutCuentacontableInput;
    facturacliente?: Prisma.facturaclienteUncheckedCreateNestedManyWithoutCuentacontableInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedCreateNestedManyWithoutCuentacontableInput;
    lineaasiento?: Prisma.lineaasientoUncheckedCreateNestedManyWithoutCuentacontableInput;
};
export type cuentacontableUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentacontable_tipoFieldUpdateOperationsInput | $Enums.cuentacontable_tipo;
    naturaleza?: Prisma.Enumcuentacontable_naturalezaFieldUpdateOperationsInput | $Enums.cuentacontable_naturaleza;
    nivel?: Prisma.IntFieldUpdateOperationsInput | number;
    agrupadora?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    movimiento?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cuentafinanciera?: Prisma.cuentafinancieraUpdateManyWithoutCuentacontableNestedInput;
    facturacliente?: Prisma.facturaclienteUpdateManyWithoutCuentacontableNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUpdateManyWithoutCuentacontableNestedInput;
    lineaasiento?: Prisma.lineaasientoUpdateManyWithoutCuentacontableNestedInput;
};
export type cuentacontableUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentacontable_tipoFieldUpdateOperationsInput | $Enums.cuentacontable_tipo;
    naturaleza?: Prisma.Enumcuentacontable_naturalezaFieldUpdateOperationsInput | $Enums.cuentacontable_naturaleza;
    nivel?: Prisma.IntFieldUpdateOperationsInput | number;
    agrupadora?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    movimiento?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cuentafinanciera?: Prisma.cuentafinancieraUncheckedUpdateManyWithoutCuentacontableNestedInput;
    facturacliente?: Prisma.facturaclienteUncheckedUpdateManyWithoutCuentacontableNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedUpdateManyWithoutCuentacontableNestedInput;
    lineaasiento?: Prisma.lineaasientoUncheckedUpdateManyWithoutCuentacontableNestedInput;
};
export type cuentacontableCreateManyInput = {
    id: string;
    codigo: string;
    nombre: string;
    tipo: $Enums.cuentacontable_tipo;
    naturaleza: $Enums.cuentacontable_naturaleza;
    nivel: number;
    agrupadora?: boolean;
    movimiento?: boolean;
    fechaInicio?: Date | string | null;
    fechaFin?: Date | string | null;
    activa?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type cuentacontableUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentacontable_tipoFieldUpdateOperationsInput | $Enums.cuentacontable_tipo;
    naturaleza?: Prisma.Enumcuentacontable_naturalezaFieldUpdateOperationsInput | $Enums.cuentacontable_naturaleza;
    nivel?: Prisma.IntFieldUpdateOperationsInput | number;
    agrupadora?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    movimiento?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cuentacontableUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentacontable_tipoFieldUpdateOperationsInput | $Enums.cuentacontable_tipo;
    naturaleza?: Prisma.Enumcuentacontable_naturalezaFieldUpdateOperationsInput | $Enums.cuentacontable_naturaleza;
    nivel?: Prisma.IntFieldUpdateOperationsInput | number;
    agrupadora?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    movimiento?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cuentacontableOrderByRelevanceInput = {
    fields: Prisma.cuentacontableOrderByRelevanceFieldEnum | Prisma.cuentacontableOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type cuentacontableCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    naturaleza?: Prisma.SortOrder;
    nivel?: Prisma.SortOrder;
    agrupadora?: Prisma.SortOrder;
    movimiento?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type cuentacontableAvgOrderByAggregateInput = {
    nivel?: Prisma.SortOrder;
};
export type cuentacontableMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    naturaleza?: Prisma.SortOrder;
    nivel?: Prisma.SortOrder;
    agrupadora?: Prisma.SortOrder;
    movimiento?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type cuentacontableMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    naturaleza?: Prisma.SortOrder;
    nivel?: Prisma.SortOrder;
    agrupadora?: Prisma.SortOrder;
    movimiento?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type cuentacontableSumOrderByAggregateInput = {
    nivel?: Prisma.SortOrder;
};
export type CuentacontableNullableScalarRelationFilter = {
    is?: Prisma.cuentacontableWhereInput | null;
    isNot?: Prisma.cuentacontableWhereInput | null;
};
export type CuentacontableScalarRelationFilter = {
    is?: Prisma.cuentacontableWhereInput;
    isNot?: Prisma.cuentacontableWhereInput;
};
export type Enumcuentacontable_tipoFieldUpdateOperationsInput = {
    set?: $Enums.cuentacontable_tipo;
};
export type Enumcuentacontable_naturalezaFieldUpdateOperationsInput = {
    set?: $Enums.cuentacontable_naturaleza;
};
export type cuentacontableCreateNestedOneWithoutCuentafinancieraInput = {
    create?: Prisma.XOR<Prisma.cuentacontableCreateWithoutCuentafinancieraInput, Prisma.cuentacontableUncheckedCreateWithoutCuentafinancieraInput>;
    connectOrCreate?: Prisma.cuentacontableCreateOrConnectWithoutCuentafinancieraInput;
    connect?: Prisma.cuentacontableWhereUniqueInput;
};
export type cuentacontableUpdateOneWithoutCuentafinancieraNestedInput = {
    create?: Prisma.XOR<Prisma.cuentacontableCreateWithoutCuentafinancieraInput, Prisma.cuentacontableUncheckedCreateWithoutCuentafinancieraInput>;
    connectOrCreate?: Prisma.cuentacontableCreateOrConnectWithoutCuentafinancieraInput;
    upsert?: Prisma.cuentacontableUpsertWithoutCuentafinancieraInput;
    disconnect?: Prisma.cuentacontableWhereInput | boolean;
    delete?: Prisma.cuentacontableWhereInput | boolean;
    connect?: Prisma.cuentacontableWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cuentacontableUpdateToOneWithWhereWithoutCuentafinancieraInput, Prisma.cuentacontableUpdateWithoutCuentafinancieraInput>, Prisma.cuentacontableUncheckedUpdateWithoutCuentafinancieraInput>;
};
export type cuentacontableCreateNestedOneWithoutFacturaclienteInput = {
    create?: Prisma.XOR<Prisma.cuentacontableCreateWithoutFacturaclienteInput, Prisma.cuentacontableUncheckedCreateWithoutFacturaclienteInput>;
    connectOrCreate?: Prisma.cuentacontableCreateOrConnectWithoutFacturaclienteInput;
    connect?: Prisma.cuentacontableWhereUniqueInput;
};
export type cuentacontableUpdateOneWithoutFacturaclienteNestedInput = {
    create?: Prisma.XOR<Prisma.cuentacontableCreateWithoutFacturaclienteInput, Prisma.cuentacontableUncheckedCreateWithoutFacturaclienteInput>;
    connectOrCreate?: Prisma.cuentacontableCreateOrConnectWithoutFacturaclienteInput;
    upsert?: Prisma.cuentacontableUpsertWithoutFacturaclienteInput;
    disconnect?: Prisma.cuentacontableWhereInput | boolean;
    delete?: Prisma.cuentacontableWhereInput | boolean;
    connect?: Prisma.cuentacontableWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cuentacontableUpdateToOneWithWhereWithoutFacturaclienteInput, Prisma.cuentacontableUpdateWithoutFacturaclienteInput>, Prisma.cuentacontableUncheckedUpdateWithoutFacturaclienteInput>;
};
export type cuentacontableCreateNestedOneWithoutFacturaproveedorInput = {
    create?: Prisma.XOR<Prisma.cuentacontableCreateWithoutFacturaproveedorInput, Prisma.cuentacontableUncheckedCreateWithoutFacturaproveedorInput>;
    connectOrCreate?: Prisma.cuentacontableCreateOrConnectWithoutFacturaproveedorInput;
    connect?: Prisma.cuentacontableWhereUniqueInput;
};
export type cuentacontableUpdateOneWithoutFacturaproveedorNestedInput = {
    create?: Prisma.XOR<Prisma.cuentacontableCreateWithoutFacturaproveedorInput, Prisma.cuentacontableUncheckedCreateWithoutFacturaproveedorInput>;
    connectOrCreate?: Prisma.cuentacontableCreateOrConnectWithoutFacturaproveedorInput;
    upsert?: Prisma.cuentacontableUpsertWithoutFacturaproveedorInput;
    disconnect?: Prisma.cuentacontableWhereInput | boolean;
    delete?: Prisma.cuentacontableWhereInput | boolean;
    connect?: Prisma.cuentacontableWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cuentacontableUpdateToOneWithWhereWithoutFacturaproveedorInput, Prisma.cuentacontableUpdateWithoutFacturaproveedorInput>, Prisma.cuentacontableUncheckedUpdateWithoutFacturaproveedorInput>;
};
export type cuentacontableCreateNestedOneWithoutLineaasientoInput = {
    create?: Prisma.XOR<Prisma.cuentacontableCreateWithoutLineaasientoInput, Prisma.cuentacontableUncheckedCreateWithoutLineaasientoInput>;
    connectOrCreate?: Prisma.cuentacontableCreateOrConnectWithoutLineaasientoInput;
    connect?: Prisma.cuentacontableWhereUniqueInput;
};
export type cuentacontableUpdateOneRequiredWithoutLineaasientoNestedInput = {
    create?: Prisma.XOR<Prisma.cuentacontableCreateWithoutLineaasientoInput, Prisma.cuentacontableUncheckedCreateWithoutLineaasientoInput>;
    connectOrCreate?: Prisma.cuentacontableCreateOrConnectWithoutLineaasientoInput;
    upsert?: Prisma.cuentacontableUpsertWithoutLineaasientoInput;
    connect?: Prisma.cuentacontableWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cuentacontableUpdateToOneWithWhereWithoutLineaasientoInput, Prisma.cuentacontableUpdateWithoutLineaasientoInput>, Prisma.cuentacontableUncheckedUpdateWithoutLineaasientoInput>;
};
export type cuentacontableCreateWithoutCuentafinancieraInput = {
    id: string;
    codigo: string;
    nombre: string;
    tipo: $Enums.cuentacontable_tipo;
    naturaleza: $Enums.cuentacontable_naturaleza;
    nivel: number;
    agrupadora?: boolean;
    movimiento?: boolean;
    fechaInicio?: Date | string | null;
    fechaFin?: Date | string | null;
    activa?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturacliente?: Prisma.facturaclienteCreateNestedManyWithoutCuentacontableInput;
    facturaproveedor?: Prisma.facturaproveedorCreateNestedManyWithoutCuentacontableInput;
    lineaasiento?: Prisma.lineaasientoCreateNestedManyWithoutCuentacontableInput;
};
export type cuentacontableUncheckedCreateWithoutCuentafinancieraInput = {
    id: string;
    codigo: string;
    nombre: string;
    tipo: $Enums.cuentacontable_tipo;
    naturaleza: $Enums.cuentacontable_naturaleza;
    nivel: number;
    agrupadora?: boolean;
    movimiento?: boolean;
    fechaInicio?: Date | string | null;
    fechaFin?: Date | string | null;
    activa?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturacliente?: Prisma.facturaclienteUncheckedCreateNestedManyWithoutCuentacontableInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedCreateNestedManyWithoutCuentacontableInput;
    lineaasiento?: Prisma.lineaasientoUncheckedCreateNestedManyWithoutCuentacontableInput;
};
export type cuentacontableCreateOrConnectWithoutCuentafinancieraInput = {
    where: Prisma.cuentacontableWhereUniqueInput;
    create: Prisma.XOR<Prisma.cuentacontableCreateWithoutCuentafinancieraInput, Prisma.cuentacontableUncheckedCreateWithoutCuentafinancieraInput>;
};
export type cuentacontableUpsertWithoutCuentafinancieraInput = {
    update: Prisma.XOR<Prisma.cuentacontableUpdateWithoutCuentafinancieraInput, Prisma.cuentacontableUncheckedUpdateWithoutCuentafinancieraInput>;
    create: Prisma.XOR<Prisma.cuentacontableCreateWithoutCuentafinancieraInput, Prisma.cuentacontableUncheckedCreateWithoutCuentafinancieraInput>;
    where?: Prisma.cuentacontableWhereInput;
};
export type cuentacontableUpdateToOneWithWhereWithoutCuentafinancieraInput = {
    where?: Prisma.cuentacontableWhereInput;
    data: Prisma.XOR<Prisma.cuentacontableUpdateWithoutCuentafinancieraInput, Prisma.cuentacontableUncheckedUpdateWithoutCuentafinancieraInput>;
};
export type cuentacontableUpdateWithoutCuentafinancieraInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentacontable_tipoFieldUpdateOperationsInput | $Enums.cuentacontable_tipo;
    naturaleza?: Prisma.Enumcuentacontable_naturalezaFieldUpdateOperationsInput | $Enums.cuentacontable_naturaleza;
    nivel?: Prisma.IntFieldUpdateOperationsInput | number;
    agrupadora?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    movimiento?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturacliente?: Prisma.facturaclienteUpdateManyWithoutCuentacontableNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUpdateManyWithoutCuentacontableNestedInput;
    lineaasiento?: Prisma.lineaasientoUpdateManyWithoutCuentacontableNestedInput;
};
export type cuentacontableUncheckedUpdateWithoutCuentafinancieraInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentacontable_tipoFieldUpdateOperationsInput | $Enums.cuentacontable_tipo;
    naturaleza?: Prisma.Enumcuentacontable_naturalezaFieldUpdateOperationsInput | $Enums.cuentacontable_naturaleza;
    nivel?: Prisma.IntFieldUpdateOperationsInput | number;
    agrupadora?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    movimiento?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturacliente?: Prisma.facturaclienteUncheckedUpdateManyWithoutCuentacontableNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedUpdateManyWithoutCuentacontableNestedInput;
    lineaasiento?: Prisma.lineaasientoUncheckedUpdateManyWithoutCuentacontableNestedInput;
};
export type cuentacontableCreateWithoutFacturaclienteInput = {
    id: string;
    codigo: string;
    nombre: string;
    tipo: $Enums.cuentacontable_tipo;
    naturaleza: $Enums.cuentacontable_naturaleza;
    nivel: number;
    agrupadora?: boolean;
    movimiento?: boolean;
    fechaInicio?: Date | string | null;
    fechaFin?: Date | string | null;
    activa?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cuentafinanciera?: Prisma.cuentafinancieraCreateNestedManyWithoutCuentacontableInput;
    facturaproveedor?: Prisma.facturaproveedorCreateNestedManyWithoutCuentacontableInput;
    lineaasiento?: Prisma.lineaasientoCreateNestedManyWithoutCuentacontableInput;
};
export type cuentacontableUncheckedCreateWithoutFacturaclienteInput = {
    id: string;
    codigo: string;
    nombre: string;
    tipo: $Enums.cuentacontable_tipo;
    naturaleza: $Enums.cuentacontable_naturaleza;
    nivel: number;
    agrupadora?: boolean;
    movimiento?: boolean;
    fechaInicio?: Date | string | null;
    fechaFin?: Date | string | null;
    activa?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cuentafinanciera?: Prisma.cuentafinancieraUncheckedCreateNestedManyWithoutCuentacontableInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedCreateNestedManyWithoutCuentacontableInput;
    lineaasiento?: Prisma.lineaasientoUncheckedCreateNestedManyWithoutCuentacontableInput;
};
export type cuentacontableCreateOrConnectWithoutFacturaclienteInput = {
    where: Prisma.cuentacontableWhereUniqueInput;
    create: Prisma.XOR<Prisma.cuentacontableCreateWithoutFacturaclienteInput, Prisma.cuentacontableUncheckedCreateWithoutFacturaclienteInput>;
};
export type cuentacontableUpsertWithoutFacturaclienteInput = {
    update: Prisma.XOR<Prisma.cuentacontableUpdateWithoutFacturaclienteInput, Prisma.cuentacontableUncheckedUpdateWithoutFacturaclienteInput>;
    create: Prisma.XOR<Prisma.cuentacontableCreateWithoutFacturaclienteInput, Prisma.cuentacontableUncheckedCreateWithoutFacturaclienteInput>;
    where?: Prisma.cuentacontableWhereInput;
};
export type cuentacontableUpdateToOneWithWhereWithoutFacturaclienteInput = {
    where?: Prisma.cuentacontableWhereInput;
    data: Prisma.XOR<Prisma.cuentacontableUpdateWithoutFacturaclienteInput, Prisma.cuentacontableUncheckedUpdateWithoutFacturaclienteInput>;
};
export type cuentacontableUpdateWithoutFacturaclienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentacontable_tipoFieldUpdateOperationsInput | $Enums.cuentacontable_tipo;
    naturaleza?: Prisma.Enumcuentacontable_naturalezaFieldUpdateOperationsInput | $Enums.cuentacontable_naturaleza;
    nivel?: Prisma.IntFieldUpdateOperationsInput | number;
    agrupadora?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    movimiento?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cuentafinanciera?: Prisma.cuentafinancieraUpdateManyWithoutCuentacontableNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUpdateManyWithoutCuentacontableNestedInput;
    lineaasiento?: Prisma.lineaasientoUpdateManyWithoutCuentacontableNestedInput;
};
export type cuentacontableUncheckedUpdateWithoutFacturaclienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentacontable_tipoFieldUpdateOperationsInput | $Enums.cuentacontable_tipo;
    naturaleza?: Prisma.Enumcuentacontable_naturalezaFieldUpdateOperationsInput | $Enums.cuentacontable_naturaleza;
    nivel?: Prisma.IntFieldUpdateOperationsInput | number;
    agrupadora?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    movimiento?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cuentafinanciera?: Prisma.cuentafinancieraUncheckedUpdateManyWithoutCuentacontableNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedUpdateManyWithoutCuentacontableNestedInput;
    lineaasiento?: Prisma.lineaasientoUncheckedUpdateManyWithoutCuentacontableNestedInput;
};
export type cuentacontableCreateWithoutFacturaproveedorInput = {
    id: string;
    codigo: string;
    nombre: string;
    tipo: $Enums.cuentacontable_tipo;
    naturaleza: $Enums.cuentacontable_naturaleza;
    nivel: number;
    agrupadora?: boolean;
    movimiento?: boolean;
    fechaInicio?: Date | string | null;
    fechaFin?: Date | string | null;
    activa?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cuentafinanciera?: Prisma.cuentafinancieraCreateNestedManyWithoutCuentacontableInput;
    facturacliente?: Prisma.facturaclienteCreateNestedManyWithoutCuentacontableInput;
    lineaasiento?: Prisma.lineaasientoCreateNestedManyWithoutCuentacontableInput;
};
export type cuentacontableUncheckedCreateWithoutFacturaproveedorInput = {
    id: string;
    codigo: string;
    nombre: string;
    tipo: $Enums.cuentacontable_tipo;
    naturaleza: $Enums.cuentacontable_naturaleza;
    nivel: number;
    agrupadora?: boolean;
    movimiento?: boolean;
    fechaInicio?: Date | string | null;
    fechaFin?: Date | string | null;
    activa?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cuentafinanciera?: Prisma.cuentafinancieraUncheckedCreateNestedManyWithoutCuentacontableInput;
    facturacliente?: Prisma.facturaclienteUncheckedCreateNestedManyWithoutCuentacontableInput;
    lineaasiento?: Prisma.lineaasientoUncheckedCreateNestedManyWithoutCuentacontableInput;
};
export type cuentacontableCreateOrConnectWithoutFacturaproveedorInput = {
    where: Prisma.cuentacontableWhereUniqueInput;
    create: Prisma.XOR<Prisma.cuentacontableCreateWithoutFacturaproveedorInput, Prisma.cuentacontableUncheckedCreateWithoutFacturaproveedorInput>;
};
export type cuentacontableUpsertWithoutFacturaproveedorInput = {
    update: Prisma.XOR<Prisma.cuentacontableUpdateWithoutFacturaproveedorInput, Prisma.cuentacontableUncheckedUpdateWithoutFacturaproveedorInput>;
    create: Prisma.XOR<Prisma.cuentacontableCreateWithoutFacturaproveedorInput, Prisma.cuentacontableUncheckedCreateWithoutFacturaproveedorInput>;
    where?: Prisma.cuentacontableWhereInput;
};
export type cuentacontableUpdateToOneWithWhereWithoutFacturaproveedorInput = {
    where?: Prisma.cuentacontableWhereInput;
    data: Prisma.XOR<Prisma.cuentacontableUpdateWithoutFacturaproveedorInput, Prisma.cuentacontableUncheckedUpdateWithoutFacturaproveedorInput>;
};
export type cuentacontableUpdateWithoutFacturaproveedorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentacontable_tipoFieldUpdateOperationsInput | $Enums.cuentacontable_tipo;
    naturaleza?: Prisma.Enumcuentacontable_naturalezaFieldUpdateOperationsInput | $Enums.cuentacontable_naturaleza;
    nivel?: Prisma.IntFieldUpdateOperationsInput | number;
    agrupadora?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    movimiento?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cuentafinanciera?: Prisma.cuentafinancieraUpdateManyWithoutCuentacontableNestedInput;
    facturacliente?: Prisma.facturaclienteUpdateManyWithoutCuentacontableNestedInput;
    lineaasiento?: Prisma.lineaasientoUpdateManyWithoutCuentacontableNestedInput;
};
export type cuentacontableUncheckedUpdateWithoutFacturaproveedorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentacontable_tipoFieldUpdateOperationsInput | $Enums.cuentacontable_tipo;
    naturaleza?: Prisma.Enumcuentacontable_naturalezaFieldUpdateOperationsInput | $Enums.cuentacontable_naturaleza;
    nivel?: Prisma.IntFieldUpdateOperationsInput | number;
    agrupadora?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    movimiento?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cuentafinanciera?: Prisma.cuentafinancieraUncheckedUpdateManyWithoutCuentacontableNestedInput;
    facturacliente?: Prisma.facturaclienteUncheckedUpdateManyWithoutCuentacontableNestedInput;
    lineaasiento?: Prisma.lineaasientoUncheckedUpdateManyWithoutCuentacontableNestedInput;
};
export type cuentacontableCreateWithoutLineaasientoInput = {
    id: string;
    codigo: string;
    nombre: string;
    tipo: $Enums.cuentacontable_tipo;
    naturaleza: $Enums.cuentacontable_naturaleza;
    nivel: number;
    agrupadora?: boolean;
    movimiento?: boolean;
    fechaInicio?: Date | string | null;
    fechaFin?: Date | string | null;
    activa?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cuentafinanciera?: Prisma.cuentafinancieraCreateNestedManyWithoutCuentacontableInput;
    facturacliente?: Prisma.facturaclienteCreateNestedManyWithoutCuentacontableInput;
    facturaproveedor?: Prisma.facturaproveedorCreateNestedManyWithoutCuentacontableInput;
};
export type cuentacontableUncheckedCreateWithoutLineaasientoInput = {
    id: string;
    codigo: string;
    nombre: string;
    tipo: $Enums.cuentacontable_tipo;
    naturaleza: $Enums.cuentacontable_naturaleza;
    nivel: number;
    agrupadora?: boolean;
    movimiento?: boolean;
    fechaInicio?: Date | string | null;
    fechaFin?: Date | string | null;
    activa?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cuentafinanciera?: Prisma.cuentafinancieraUncheckedCreateNestedManyWithoutCuentacontableInput;
    facturacliente?: Prisma.facturaclienteUncheckedCreateNestedManyWithoutCuentacontableInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedCreateNestedManyWithoutCuentacontableInput;
};
export type cuentacontableCreateOrConnectWithoutLineaasientoInput = {
    where: Prisma.cuentacontableWhereUniqueInput;
    create: Prisma.XOR<Prisma.cuentacontableCreateWithoutLineaasientoInput, Prisma.cuentacontableUncheckedCreateWithoutLineaasientoInput>;
};
export type cuentacontableUpsertWithoutLineaasientoInput = {
    update: Prisma.XOR<Prisma.cuentacontableUpdateWithoutLineaasientoInput, Prisma.cuentacontableUncheckedUpdateWithoutLineaasientoInput>;
    create: Prisma.XOR<Prisma.cuentacontableCreateWithoutLineaasientoInput, Prisma.cuentacontableUncheckedCreateWithoutLineaasientoInput>;
    where?: Prisma.cuentacontableWhereInput;
};
export type cuentacontableUpdateToOneWithWhereWithoutLineaasientoInput = {
    where?: Prisma.cuentacontableWhereInput;
    data: Prisma.XOR<Prisma.cuentacontableUpdateWithoutLineaasientoInput, Prisma.cuentacontableUncheckedUpdateWithoutLineaasientoInput>;
};
export type cuentacontableUpdateWithoutLineaasientoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentacontable_tipoFieldUpdateOperationsInput | $Enums.cuentacontable_tipo;
    naturaleza?: Prisma.Enumcuentacontable_naturalezaFieldUpdateOperationsInput | $Enums.cuentacontable_naturaleza;
    nivel?: Prisma.IntFieldUpdateOperationsInput | number;
    agrupadora?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    movimiento?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cuentafinanciera?: Prisma.cuentafinancieraUpdateManyWithoutCuentacontableNestedInput;
    facturacliente?: Prisma.facturaclienteUpdateManyWithoutCuentacontableNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUpdateManyWithoutCuentacontableNestedInput;
};
export type cuentacontableUncheckedUpdateWithoutLineaasientoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentacontable_tipoFieldUpdateOperationsInput | $Enums.cuentacontable_tipo;
    naturaleza?: Prisma.Enumcuentacontable_naturalezaFieldUpdateOperationsInput | $Enums.cuentacontable_naturaleza;
    nivel?: Prisma.IntFieldUpdateOperationsInput | number;
    agrupadora?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    movimiento?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cuentafinanciera?: Prisma.cuentafinancieraUncheckedUpdateManyWithoutCuentacontableNestedInput;
    facturacliente?: Prisma.facturaclienteUncheckedUpdateManyWithoutCuentacontableNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedUpdateManyWithoutCuentacontableNestedInput;
};
/**
 * Count Type CuentacontableCountOutputType
 */
export type CuentacontableCountOutputType = {
    cuentafinanciera: number;
    facturacliente: number;
    facturaproveedor: number;
    lineaasiento: number;
};
export type CuentacontableCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cuentafinanciera?: boolean | CuentacontableCountOutputTypeCountCuentafinancieraArgs;
    facturacliente?: boolean | CuentacontableCountOutputTypeCountFacturaclienteArgs;
    facturaproveedor?: boolean | CuentacontableCountOutputTypeCountFacturaproveedorArgs;
    lineaasiento?: boolean | CuentacontableCountOutputTypeCountLineaasientoArgs;
};
/**
 * CuentacontableCountOutputType without action
 */
export type CuentacontableCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuentacontableCountOutputType
     */
    select?: Prisma.CuentacontableCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CuentacontableCountOutputType without action
 */
export type CuentacontableCountOutputTypeCountCuentafinancieraArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cuentafinancieraWhereInput;
};
/**
 * CuentacontableCountOutputType without action
 */
export type CuentacontableCountOutputTypeCountFacturaclienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaclienteWhereInput;
};
/**
 * CuentacontableCountOutputType without action
 */
export type CuentacontableCountOutputTypeCountFacturaproveedorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaproveedorWhereInput;
};
/**
 * CuentacontableCountOutputType without action
 */
export type CuentacontableCountOutputTypeCountLineaasientoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lineaasientoWhereInput;
};
export type cuentacontableSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    codigo?: boolean;
    nombre?: boolean;
    tipo?: boolean;
    naturaleza?: boolean;
    nivel?: boolean;
    agrupadora?: boolean;
    movimiento?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    activa?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cuentafinanciera?: boolean | Prisma.cuentacontable$cuentafinancieraArgs<ExtArgs>;
    facturacliente?: boolean | Prisma.cuentacontable$facturaclienteArgs<ExtArgs>;
    facturaproveedor?: boolean | Prisma.cuentacontable$facturaproveedorArgs<ExtArgs>;
    lineaasiento?: boolean | Prisma.cuentacontable$lineaasientoArgs<ExtArgs>;
    _count?: boolean | Prisma.CuentacontableCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cuentacontable"]>;
export type cuentacontableSelectScalar = {
    id?: boolean;
    codigo?: boolean;
    nombre?: boolean;
    tipo?: boolean;
    naturaleza?: boolean;
    nivel?: boolean;
    agrupadora?: boolean;
    movimiento?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    activa?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type cuentacontableOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "codigo" | "nombre" | "tipo" | "naturaleza" | "nivel" | "agrupadora" | "movimiento" | "fechaInicio" | "fechaFin" | "activa" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["cuentacontable"]>;
export type cuentacontableInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cuentafinanciera?: boolean | Prisma.cuentacontable$cuentafinancieraArgs<ExtArgs>;
    facturacliente?: boolean | Prisma.cuentacontable$facturaclienteArgs<ExtArgs>;
    facturaproveedor?: boolean | Prisma.cuentacontable$facturaproveedorArgs<ExtArgs>;
    lineaasiento?: boolean | Prisma.cuentacontable$lineaasientoArgs<ExtArgs>;
    _count?: boolean | Prisma.CuentacontableCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $cuentacontablePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "cuentacontable";
    objects: {
        cuentafinanciera: Prisma.$cuentafinancieraPayload<ExtArgs>[];
        facturacliente: Prisma.$facturaclientePayload<ExtArgs>[];
        facturaproveedor: Prisma.$facturaproveedorPayload<ExtArgs>[];
        lineaasiento: Prisma.$lineaasientoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        codigo: string;
        nombre: string;
        tipo: $Enums.cuentacontable_tipo;
        naturaleza: $Enums.cuentacontable_naturaleza;
        nivel: number;
        agrupadora: boolean;
        movimiento: boolean;
        fechaInicio: Date | null;
        fechaFin: Date | null;
        activa: boolean;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["cuentacontable"]>;
    composites: {};
};
export type cuentacontableGetPayload<S extends boolean | null | undefined | cuentacontableDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$cuentacontablePayload, S>;
export type cuentacontableCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<cuentacontableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CuentacontableCountAggregateInputType | true;
};
export interface cuentacontableDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['cuentacontable'];
        meta: {
            name: 'cuentacontable';
        };
    };
    /**
     * Find zero or one Cuentacontable that matches the filter.
     * @param {cuentacontableFindUniqueArgs} args - Arguments to find a Cuentacontable
     * @example
     * // Get one Cuentacontable
     * const cuentacontable = await prisma.cuentacontable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cuentacontableFindUniqueArgs>(args: Prisma.SelectSubset<T, cuentacontableFindUniqueArgs<ExtArgs>>): Prisma.Prisma__cuentacontableClient<runtime.Types.Result.GetResult<Prisma.$cuentacontablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Cuentacontable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cuentacontableFindUniqueOrThrowArgs} args - Arguments to find a Cuentacontable
     * @example
     * // Get one Cuentacontable
     * const cuentacontable = await prisma.cuentacontable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cuentacontableFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, cuentacontableFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__cuentacontableClient<runtime.Types.Result.GetResult<Prisma.$cuentacontablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cuentacontable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentacontableFindFirstArgs} args - Arguments to find a Cuentacontable
     * @example
     * // Get one Cuentacontable
     * const cuentacontable = await prisma.cuentacontable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cuentacontableFindFirstArgs>(args?: Prisma.SelectSubset<T, cuentacontableFindFirstArgs<ExtArgs>>): Prisma.Prisma__cuentacontableClient<runtime.Types.Result.GetResult<Prisma.$cuentacontablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cuentacontable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentacontableFindFirstOrThrowArgs} args - Arguments to find a Cuentacontable
     * @example
     * // Get one Cuentacontable
     * const cuentacontable = await prisma.cuentacontable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cuentacontableFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, cuentacontableFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__cuentacontableClient<runtime.Types.Result.GetResult<Prisma.$cuentacontablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Cuentacontables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentacontableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cuentacontables
     * const cuentacontables = await prisma.cuentacontable.findMany()
     *
     * // Get first 10 Cuentacontables
     * const cuentacontables = await prisma.cuentacontable.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cuentacontableWithIdOnly = await prisma.cuentacontable.findMany({ select: { id: true } })
     *
     */
    findMany<T extends cuentacontableFindManyArgs>(args?: Prisma.SelectSubset<T, cuentacontableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cuentacontablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Cuentacontable.
     * @param {cuentacontableCreateArgs} args - Arguments to create a Cuentacontable.
     * @example
     * // Create one Cuentacontable
     * const Cuentacontable = await prisma.cuentacontable.create({
     *   data: {
     *     // ... data to create a Cuentacontable
     *   }
     * })
     *
     */
    create<T extends cuentacontableCreateArgs>(args: Prisma.SelectSubset<T, cuentacontableCreateArgs<ExtArgs>>): Prisma.Prisma__cuentacontableClient<runtime.Types.Result.GetResult<Prisma.$cuentacontablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Cuentacontables.
     * @param {cuentacontableCreateManyArgs} args - Arguments to create many Cuentacontables.
     * @example
     * // Create many Cuentacontables
     * const cuentacontable = await prisma.cuentacontable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends cuentacontableCreateManyArgs>(args?: Prisma.SelectSubset<T, cuentacontableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Cuentacontable.
     * @param {cuentacontableDeleteArgs} args - Arguments to delete one Cuentacontable.
     * @example
     * // Delete one Cuentacontable
     * const Cuentacontable = await prisma.cuentacontable.delete({
     *   where: {
     *     // ... filter to delete one Cuentacontable
     *   }
     * })
     *
     */
    delete<T extends cuentacontableDeleteArgs>(args: Prisma.SelectSubset<T, cuentacontableDeleteArgs<ExtArgs>>): Prisma.Prisma__cuentacontableClient<runtime.Types.Result.GetResult<Prisma.$cuentacontablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Cuentacontable.
     * @param {cuentacontableUpdateArgs} args - Arguments to update one Cuentacontable.
     * @example
     * // Update one Cuentacontable
     * const cuentacontable = await prisma.cuentacontable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends cuentacontableUpdateArgs>(args: Prisma.SelectSubset<T, cuentacontableUpdateArgs<ExtArgs>>): Prisma.Prisma__cuentacontableClient<runtime.Types.Result.GetResult<Prisma.$cuentacontablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Cuentacontables.
     * @param {cuentacontableDeleteManyArgs} args - Arguments to filter Cuentacontables to delete.
     * @example
     * // Delete a few Cuentacontables
     * const { count } = await prisma.cuentacontable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends cuentacontableDeleteManyArgs>(args?: Prisma.SelectSubset<T, cuentacontableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Cuentacontables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentacontableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cuentacontables
     * const cuentacontable = await prisma.cuentacontable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends cuentacontableUpdateManyArgs>(args: Prisma.SelectSubset<T, cuentacontableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Cuentacontable.
     * @param {cuentacontableUpsertArgs} args - Arguments to update or create a Cuentacontable.
     * @example
     * // Update or create a Cuentacontable
     * const cuentacontable = await prisma.cuentacontable.upsert({
     *   create: {
     *     // ... data to create a Cuentacontable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cuentacontable we want to update
     *   }
     * })
     */
    upsert<T extends cuentacontableUpsertArgs>(args: Prisma.SelectSubset<T, cuentacontableUpsertArgs<ExtArgs>>): Prisma.Prisma__cuentacontableClient<runtime.Types.Result.GetResult<Prisma.$cuentacontablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Cuentacontables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentacontableCountArgs} args - Arguments to filter Cuentacontables to count.
     * @example
     * // Count the number of Cuentacontables
     * const count = await prisma.cuentacontable.count({
     *   where: {
     *     // ... the filter for the Cuentacontables we want to count
     *   }
     * })
    **/
    count<T extends cuentacontableCountArgs>(args?: Prisma.Subset<T, cuentacontableCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CuentacontableCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Cuentacontable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentacontableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CuentacontableAggregateArgs>(args: Prisma.Subset<T, CuentacontableAggregateArgs>): Prisma.PrismaPromise<GetCuentacontableAggregateType<T>>;
    /**
     * Group by Cuentacontable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentacontableGroupByArgs} args - Group by arguments.
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
    groupBy<T extends cuentacontableGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: cuentacontableGroupByArgs['orderBy'];
    } : {
        orderBy?: cuentacontableGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, cuentacontableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuentacontableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the cuentacontable model
     */
    readonly fields: cuentacontableFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for cuentacontable.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__cuentacontableClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cuentafinanciera<T extends Prisma.cuentacontable$cuentafinancieraArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cuentacontable$cuentafinancieraArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cuentafinancieraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    facturacliente<T extends Prisma.cuentacontable$facturaclienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cuentacontable$facturaclienteArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturaclientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    facturaproveedor<T extends Prisma.cuentacontable$facturaproveedorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cuentacontable$facturaproveedorArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturaproveedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    lineaasiento<T extends Prisma.cuentacontable$lineaasientoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cuentacontable$lineaasientoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lineaasientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the cuentacontable model
 */
export interface cuentacontableFieldRefs {
    readonly id: Prisma.FieldRef<"cuentacontable", 'String'>;
    readonly codigo: Prisma.FieldRef<"cuentacontable", 'String'>;
    readonly nombre: Prisma.FieldRef<"cuentacontable", 'String'>;
    readonly tipo: Prisma.FieldRef<"cuentacontable", 'cuentacontable_tipo'>;
    readonly naturaleza: Prisma.FieldRef<"cuentacontable", 'cuentacontable_naturaleza'>;
    readonly nivel: Prisma.FieldRef<"cuentacontable", 'Int'>;
    readonly agrupadora: Prisma.FieldRef<"cuentacontable", 'Boolean'>;
    readonly movimiento: Prisma.FieldRef<"cuentacontable", 'Boolean'>;
    readonly fechaInicio: Prisma.FieldRef<"cuentacontable", 'DateTime'>;
    readonly fechaFin: Prisma.FieldRef<"cuentacontable", 'DateTime'>;
    readonly activa: Prisma.FieldRef<"cuentacontable", 'Boolean'>;
    readonly observaciones: Prisma.FieldRef<"cuentacontable", 'String'>;
    readonly createdAt: Prisma.FieldRef<"cuentacontable", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"cuentacontable", 'DateTime'>;
}
/**
 * cuentacontable findUnique
 */
export type cuentacontableFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which cuentacontable to fetch.
     */
    where: Prisma.cuentacontableWhereUniqueInput;
};
/**
 * cuentacontable findUniqueOrThrow
 */
export type cuentacontableFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which cuentacontable to fetch.
     */
    where: Prisma.cuentacontableWhereUniqueInput;
};
/**
 * cuentacontable findFirst
 */
export type cuentacontableFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which cuentacontable to fetch.
     */
    where?: Prisma.cuentacontableWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cuentacontables to fetch.
     */
    orderBy?: Prisma.cuentacontableOrderByWithRelationInput | Prisma.cuentacontableOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cuentacontables.
     */
    cursor?: Prisma.cuentacontableWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cuentacontables from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cuentacontables.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cuentacontables.
     */
    distinct?: Prisma.CuentacontableScalarFieldEnum | Prisma.CuentacontableScalarFieldEnum[];
};
/**
 * cuentacontable findFirstOrThrow
 */
export type cuentacontableFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which cuentacontable to fetch.
     */
    where?: Prisma.cuentacontableWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cuentacontables to fetch.
     */
    orderBy?: Prisma.cuentacontableOrderByWithRelationInput | Prisma.cuentacontableOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cuentacontables.
     */
    cursor?: Prisma.cuentacontableWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cuentacontables from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cuentacontables.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cuentacontables.
     */
    distinct?: Prisma.CuentacontableScalarFieldEnum | Prisma.CuentacontableScalarFieldEnum[];
};
/**
 * cuentacontable findMany
 */
export type cuentacontableFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which cuentacontables to fetch.
     */
    where?: Prisma.cuentacontableWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cuentacontables to fetch.
     */
    orderBy?: Prisma.cuentacontableOrderByWithRelationInput | Prisma.cuentacontableOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing cuentacontables.
     */
    cursor?: Prisma.cuentacontableWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cuentacontables from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cuentacontables.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cuentacontables.
     */
    distinct?: Prisma.CuentacontableScalarFieldEnum | Prisma.CuentacontableScalarFieldEnum[];
};
/**
 * cuentacontable create
 */
export type cuentacontableCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a cuentacontable.
     */
    data: Prisma.XOR<Prisma.cuentacontableCreateInput, Prisma.cuentacontableUncheckedCreateInput>;
};
/**
 * cuentacontable createMany
 */
export type cuentacontableCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many cuentacontables.
     */
    data: Prisma.cuentacontableCreateManyInput | Prisma.cuentacontableCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * cuentacontable update
 */
export type cuentacontableUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a cuentacontable.
     */
    data: Prisma.XOR<Prisma.cuentacontableUpdateInput, Prisma.cuentacontableUncheckedUpdateInput>;
    /**
     * Choose, which cuentacontable to update.
     */
    where: Prisma.cuentacontableWhereUniqueInput;
};
/**
 * cuentacontable updateMany
 */
export type cuentacontableUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update cuentacontables.
     */
    data: Prisma.XOR<Prisma.cuentacontableUpdateManyMutationInput, Prisma.cuentacontableUncheckedUpdateManyInput>;
    /**
     * Filter which cuentacontables to update
     */
    where?: Prisma.cuentacontableWhereInput;
    /**
     * Limit how many cuentacontables to update.
     */
    limit?: number;
};
/**
 * cuentacontable upsert
 */
export type cuentacontableUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the cuentacontable to update in case it exists.
     */
    where: Prisma.cuentacontableWhereUniqueInput;
    /**
     * In case the cuentacontable found by the `where` argument doesn't exist, create a new cuentacontable with this data.
     */
    create: Prisma.XOR<Prisma.cuentacontableCreateInput, Prisma.cuentacontableUncheckedCreateInput>;
    /**
     * In case the cuentacontable was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.cuentacontableUpdateInput, Prisma.cuentacontableUncheckedUpdateInput>;
};
/**
 * cuentacontable delete
 */
export type cuentacontableDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which cuentacontable to delete.
     */
    where: Prisma.cuentacontableWhereUniqueInput;
};
/**
 * cuentacontable deleteMany
 */
export type cuentacontableDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which cuentacontables to delete
     */
    where?: Prisma.cuentacontableWhereInput;
    /**
     * Limit how many cuentacontables to delete.
     */
    limit?: number;
};
/**
 * cuentacontable.cuentafinanciera
 */
export type cuentacontable$cuentafinancieraArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuentafinanciera
     */
    select?: Prisma.cuentafinancieraSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cuentafinanciera
     */
    omit?: Prisma.cuentafinancieraOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cuentafinancieraInclude<ExtArgs> | null;
    where?: Prisma.cuentafinancieraWhereInput;
    orderBy?: Prisma.cuentafinancieraOrderByWithRelationInput | Prisma.cuentafinancieraOrderByWithRelationInput[];
    cursor?: Prisma.cuentafinancieraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CuentafinancieraScalarFieldEnum | Prisma.CuentafinancieraScalarFieldEnum[];
};
/**
 * cuentacontable.facturacliente
 */
export type cuentacontable$facturaclienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.facturaclienteWhereInput;
    orderBy?: Prisma.facturaclienteOrderByWithRelationInput | Prisma.facturaclienteOrderByWithRelationInput[];
    cursor?: Prisma.facturaclienteWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FacturaclienteScalarFieldEnum | Prisma.FacturaclienteScalarFieldEnum[];
};
/**
 * cuentacontable.facturaproveedor
 */
export type cuentacontable$facturaproveedorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.facturaproveedorWhereInput;
    orderBy?: Prisma.facturaproveedorOrderByWithRelationInput | Prisma.facturaproveedorOrderByWithRelationInput[];
    cursor?: Prisma.facturaproveedorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FacturaproveedorScalarFieldEnum | Prisma.FacturaproveedorScalarFieldEnum[];
};
/**
 * cuentacontable.lineaasiento
 */
export type cuentacontable$lineaasientoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineaasiento
     */
    select?: Prisma.lineaasientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineaasiento
     */
    omit?: Prisma.lineaasientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineaasientoInclude<ExtArgs> | null;
    where?: Prisma.lineaasientoWhereInput;
    orderBy?: Prisma.lineaasientoOrderByWithRelationInput | Prisma.lineaasientoOrderByWithRelationInput[];
    cursor?: Prisma.lineaasientoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LineaasientoScalarFieldEnum | Prisma.LineaasientoScalarFieldEnum[];
};
/**
 * cuentacontable without action
 */
export type cuentacontableDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=cuentacontable.d.ts.map