import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model cuentafinanciera
 *
 */
export type cuentafinancieraModel = runtime.Types.Result.DefaultSelection<Prisma.$cuentafinancieraPayload>;
export type AggregateCuentafinanciera = {
    _count: CuentafinancieraCountAggregateOutputType | null;
    _min: CuentafinancieraMinAggregateOutputType | null;
    _max: CuentafinancieraMaxAggregateOutputType | null;
};
export type CuentafinancieraMinAggregateOutputType = {
    id: string | null;
    tipo: $Enums.cuentafinanciera_tipo | null;
    nombre: string | null;
    banco: string | null;
    iban: string | null;
    moneda: string | null;
    fechaApertura: Date | null;
    fechaCierre: Date | null;
    activa: boolean | null;
    cuentaContableId: string | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CuentafinancieraMaxAggregateOutputType = {
    id: string | null;
    tipo: $Enums.cuentafinanciera_tipo | null;
    nombre: string | null;
    banco: string | null;
    iban: string | null;
    moneda: string | null;
    fechaApertura: Date | null;
    fechaCierre: Date | null;
    activa: boolean | null;
    cuentaContableId: string | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CuentafinancieraCountAggregateOutputType = {
    id: number;
    tipo: number;
    nombre: number;
    banco: number;
    iban: number;
    moneda: number;
    fechaApertura: number;
    fechaCierre: number;
    activa: number;
    cuentaContableId: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CuentafinancieraMinAggregateInputType = {
    id?: true;
    tipo?: true;
    nombre?: true;
    banco?: true;
    iban?: true;
    moneda?: true;
    fechaApertura?: true;
    fechaCierre?: true;
    activa?: true;
    cuentaContableId?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CuentafinancieraMaxAggregateInputType = {
    id?: true;
    tipo?: true;
    nombre?: true;
    banco?: true;
    iban?: true;
    moneda?: true;
    fechaApertura?: true;
    fechaCierre?: true;
    activa?: true;
    cuentaContableId?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CuentafinancieraCountAggregateInputType = {
    id?: true;
    tipo?: true;
    nombre?: true;
    banco?: true;
    iban?: true;
    moneda?: true;
    fechaApertura?: true;
    fechaCierre?: true;
    activa?: true;
    cuentaContableId?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CuentafinancieraAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which cuentafinanciera to aggregate.
     */
    where?: Prisma.cuentafinancieraWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cuentafinancieras to fetch.
     */
    orderBy?: Prisma.cuentafinancieraOrderByWithRelationInput | Prisma.cuentafinancieraOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.cuentafinancieraWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cuentafinancieras from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cuentafinancieras.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned cuentafinancieras
    **/
    _count?: true | CuentafinancieraCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CuentafinancieraMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CuentafinancieraMaxAggregateInputType;
};
export type GetCuentafinancieraAggregateType<T extends CuentafinancieraAggregateArgs> = {
    [P in keyof T & keyof AggregateCuentafinanciera]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCuentafinanciera[P]> : Prisma.GetScalarType<T[P], AggregateCuentafinanciera[P]>;
};
export type cuentafinancieraGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cuentafinancieraWhereInput;
    orderBy?: Prisma.cuentafinancieraOrderByWithAggregationInput | Prisma.cuentafinancieraOrderByWithAggregationInput[];
    by: Prisma.CuentafinancieraScalarFieldEnum[] | Prisma.CuentafinancieraScalarFieldEnum;
    having?: Prisma.cuentafinancieraScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CuentafinancieraCountAggregateInputType | true;
    _min?: CuentafinancieraMinAggregateInputType;
    _max?: CuentafinancieraMaxAggregateInputType;
};
export type CuentafinancieraGroupByOutputType = {
    id: string;
    tipo: $Enums.cuentafinanciera_tipo;
    nombre: string;
    banco: string | null;
    iban: string | null;
    moneda: string;
    fechaApertura: Date | null;
    fechaCierre: Date | null;
    activa: boolean;
    cuentaContableId: string | null;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CuentafinancieraCountAggregateOutputType | null;
    _min: CuentafinancieraMinAggregateOutputType | null;
    _max: CuentafinancieraMaxAggregateOutputType | null;
};
export type GetCuentafinancieraGroupByPayload<T extends cuentafinancieraGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CuentafinancieraGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CuentafinancieraGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CuentafinancieraGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CuentafinancieraGroupByOutputType[P]>;
}>>;
export type cuentafinancieraWhereInput = {
    AND?: Prisma.cuentafinancieraWhereInput | Prisma.cuentafinancieraWhereInput[];
    OR?: Prisma.cuentafinancieraWhereInput[];
    NOT?: Prisma.cuentafinancieraWhereInput | Prisma.cuentafinancieraWhereInput[];
    id?: Prisma.StringFilter<"cuentafinanciera"> | string;
    tipo?: Prisma.Enumcuentafinanciera_tipoFilter<"cuentafinanciera"> | $Enums.cuentafinanciera_tipo;
    nombre?: Prisma.StringFilter<"cuentafinanciera"> | string;
    banco?: Prisma.StringNullableFilter<"cuentafinanciera"> | string | null;
    iban?: Prisma.StringNullableFilter<"cuentafinanciera"> | string | null;
    moneda?: Prisma.StringFilter<"cuentafinanciera"> | string;
    fechaApertura?: Prisma.DateTimeNullableFilter<"cuentafinanciera"> | Date | string | null;
    fechaCierre?: Prisma.DateTimeNullableFilter<"cuentafinanciera"> | Date | string | null;
    activa?: Prisma.BoolFilter<"cuentafinanciera"> | boolean;
    cuentaContableId?: Prisma.StringNullableFilter<"cuentafinanciera"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"cuentafinanciera"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"cuentafinanciera"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"cuentafinanciera"> | Date | string;
    cobro?: Prisma.CobroListRelationFilter;
    cuentacontable?: Prisma.XOR<Prisma.CuentacontableNullableScalarRelationFilter, Prisma.cuentacontableWhereInput> | null;
    movimientofinanciero?: Prisma.MovimientofinancieroListRelationFilter;
    pago?: Prisma.PagoListRelationFilter;
};
export type cuentafinancieraOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    banco?: Prisma.SortOrderInput | Prisma.SortOrder;
    iban?: Prisma.SortOrderInput | Prisma.SortOrder;
    moneda?: Prisma.SortOrder;
    fechaApertura?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrderInput | Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    cuentaContableId?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    cobro?: Prisma.cobroOrderByRelationAggregateInput;
    cuentacontable?: Prisma.cuentacontableOrderByWithRelationInput;
    movimientofinanciero?: Prisma.movimientofinancieroOrderByRelationAggregateInput;
    pago?: Prisma.pagoOrderByRelationAggregateInput;
    _relevance?: Prisma.cuentafinancieraOrderByRelevanceInput;
};
export type cuentafinancieraWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.cuentafinancieraWhereInput | Prisma.cuentafinancieraWhereInput[];
    OR?: Prisma.cuentafinancieraWhereInput[];
    NOT?: Prisma.cuentafinancieraWhereInput | Prisma.cuentafinancieraWhereInput[];
    tipo?: Prisma.Enumcuentafinanciera_tipoFilter<"cuentafinanciera"> | $Enums.cuentafinanciera_tipo;
    nombre?: Prisma.StringFilter<"cuentafinanciera"> | string;
    banco?: Prisma.StringNullableFilter<"cuentafinanciera"> | string | null;
    iban?: Prisma.StringNullableFilter<"cuentafinanciera"> | string | null;
    moneda?: Prisma.StringFilter<"cuentafinanciera"> | string;
    fechaApertura?: Prisma.DateTimeNullableFilter<"cuentafinanciera"> | Date | string | null;
    fechaCierre?: Prisma.DateTimeNullableFilter<"cuentafinanciera"> | Date | string | null;
    activa?: Prisma.BoolFilter<"cuentafinanciera"> | boolean;
    cuentaContableId?: Prisma.StringNullableFilter<"cuentafinanciera"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"cuentafinanciera"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"cuentafinanciera"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"cuentafinanciera"> | Date | string;
    cobro?: Prisma.CobroListRelationFilter;
    cuentacontable?: Prisma.XOR<Prisma.CuentacontableNullableScalarRelationFilter, Prisma.cuentacontableWhereInput> | null;
    movimientofinanciero?: Prisma.MovimientofinancieroListRelationFilter;
    pago?: Prisma.PagoListRelationFilter;
}, "id">;
export type cuentafinancieraOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    banco?: Prisma.SortOrderInput | Prisma.SortOrder;
    iban?: Prisma.SortOrderInput | Prisma.SortOrder;
    moneda?: Prisma.SortOrder;
    fechaApertura?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrderInput | Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    cuentaContableId?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.cuentafinancieraCountOrderByAggregateInput;
    _max?: Prisma.cuentafinancieraMaxOrderByAggregateInput;
    _min?: Prisma.cuentafinancieraMinOrderByAggregateInput;
};
export type cuentafinancieraScalarWhereWithAggregatesInput = {
    AND?: Prisma.cuentafinancieraScalarWhereWithAggregatesInput | Prisma.cuentafinancieraScalarWhereWithAggregatesInput[];
    OR?: Prisma.cuentafinancieraScalarWhereWithAggregatesInput[];
    NOT?: Prisma.cuentafinancieraScalarWhereWithAggregatesInput | Prisma.cuentafinancieraScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"cuentafinanciera"> | string;
    tipo?: Prisma.Enumcuentafinanciera_tipoWithAggregatesFilter<"cuentafinanciera"> | $Enums.cuentafinanciera_tipo;
    nombre?: Prisma.StringWithAggregatesFilter<"cuentafinanciera"> | string;
    banco?: Prisma.StringNullableWithAggregatesFilter<"cuentafinanciera"> | string | null;
    iban?: Prisma.StringNullableWithAggregatesFilter<"cuentafinanciera"> | string | null;
    moneda?: Prisma.StringWithAggregatesFilter<"cuentafinanciera"> | string;
    fechaApertura?: Prisma.DateTimeNullableWithAggregatesFilter<"cuentafinanciera"> | Date | string | null;
    fechaCierre?: Prisma.DateTimeNullableWithAggregatesFilter<"cuentafinanciera"> | Date | string | null;
    activa?: Prisma.BoolWithAggregatesFilter<"cuentafinanciera"> | boolean;
    cuentaContableId?: Prisma.StringNullableWithAggregatesFilter<"cuentafinanciera"> | string | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"cuentafinanciera"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"cuentafinanciera"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"cuentafinanciera"> | Date | string;
};
export type cuentafinancieraCreateInput = {
    id: string;
    tipo: $Enums.cuentafinanciera_tipo;
    nombre: string;
    banco?: string | null;
    iban?: string | null;
    moneda: string;
    fechaApertura?: Date | string | null;
    fechaCierre?: Date | string | null;
    activa?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cobro?: Prisma.cobroCreateNestedManyWithoutCuentafinancieraInput;
    cuentacontable?: Prisma.cuentacontableCreateNestedOneWithoutCuentafinancieraInput;
    movimientofinanciero?: Prisma.movimientofinancieroCreateNestedManyWithoutCuentafinancieraInput;
    pago?: Prisma.pagoCreateNestedManyWithoutCuentafinancieraInput;
};
export type cuentafinancieraUncheckedCreateInput = {
    id: string;
    tipo: $Enums.cuentafinanciera_tipo;
    nombre: string;
    banco?: string | null;
    iban?: string | null;
    moneda: string;
    fechaApertura?: Date | string | null;
    fechaCierre?: Date | string | null;
    activa?: boolean;
    cuentaContableId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cobro?: Prisma.cobroUncheckedCreateNestedManyWithoutCuentafinancieraInput;
    movimientofinanciero?: Prisma.movimientofinancieroUncheckedCreateNestedManyWithoutCuentafinancieraInput;
    pago?: Prisma.pagoUncheckedCreateNestedManyWithoutCuentafinancieraInput;
};
export type cuentafinancieraUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentafinanciera_tipoFieldUpdateOperationsInput | $Enums.cuentafinanciera_tipo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    banco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaApertura?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cobro?: Prisma.cobroUpdateManyWithoutCuentafinancieraNestedInput;
    cuentacontable?: Prisma.cuentacontableUpdateOneWithoutCuentafinancieraNestedInput;
    movimientofinanciero?: Prisma.movimientofinancieroUpdateManyWithoutCuentafinancieraNestedInput;
    pago?: Prisma.pagoUpdateManyWithoutCuentafinancieraNestedInput;
};
export type cuentafinancieraUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentafinanciera_tipoFieldUpdateOperationsInput | $Enums.cuentafinanciera_tipo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    banco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaApertura?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cobro?: Prisma.cobroUncheckedUpdateManyWithoutCuentafinancieraNestedInput;
    movimientofinanciero?: Prisma.movimientofinancieroUncheckedUpdateManyWithoutCuentafinancieraNestedInput;
    pago?: Prisma.pagoUncheckedUpdateManyWithoutCuentafinancieraNestedInput;
};
export type cuentafinancieraCreateManyInput = {
    id: string;
    tipo: $Enums.cuentafinanciera_tipo;
    nombre: string;
    banco?: string | null;
    iban?: string | null;
    moneda: string;
    fechaApertura?: Date | string | null;
    fechaCierre?: Date | string | null;
    activa?: boolean;
    cuentaContableId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type cuentafinancieraUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentafinanciera_tipoFieldUpdateOperationsInput | $Enums.cuentafinanciera_tipo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    banco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaApertura?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cuentafinancieraUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentafinanciera_tipoFieldUpdateOperationsInput | $Enums.cuentafinanciera_tipo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    banco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaApertura?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CuentafinancieraScalarRelationFilter = {
    is?: Prisma.cuentafinancieraWhereInput;
    isNot?: Prisma.cuentafinancieraWhereInput;
};
export type CuentafinancieraListRelationFilter = {
    every?: Prisma.cuentafinancieraWhereInput;
    some?: Prisma.cuentafinancieraWhereInput;
    none?: Prisma.cuentafinancieraWhereInput;
};
export type cuentafinancieraOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type cuentafinancieraOrderByRelevanceInput = {
    fields: Prisma.cuentafinancieraOrderByRelevanceFieldEnum | Prisma.cuentafinancieraOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type cuentafinancieraCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    banco?: Prisma.SortOrder;
    iban?: Prisma.SortOrder;
    moneda?: Prisma.SortOrder;
    fechaApertura?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    cuentaContableId?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type cuentafinancieraMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    banco?: Prisma.SortOrder;
    iban?: Prisma.SortOrder;
    moneda?: Prisma.SortOrder;
    fechaApertura?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    cuentaContableId?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type cuentafinancieraMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    banco?: Prisma.SortOrder;
    iban?: Prisma.SortOrder;
    moneda?: Prisma.SortOrder;
    fechaApertura?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    cuentaContableId?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type cuentafinancieraCreateNestedOneWithoutCobroInput = {
    create?: Prisma.XOR<Prisma.cuentafinancieraCreateWithoutCobroInput, Prisma.cuentafinancieraUncheckedCreateWithoutCobroInput>;
    connectOrCreate?: Prisma.cuentafinancieraCreateOrConnectWithoutCobroInput;
    connect?: Prisma.cuentafinancieraWhereUniqueInput;
};
export type cuentafinancieraUpdateOneRequiredWithoutCobroNestedInput = {
    create?: Prisma.XOR<Prisma.cuentafinancieraCreateWithoutCobroInput, Prisma.cuentafinancieraUncheckedCreateWithoutCobroInput>;
    connectOrCreate?: Prisma.cuentafinancieraCreateOrConnectWithoutCobroInput;
    upsert?: Prisma.cuentafinancieraUpsertWithoutCobroInput;
    connect?: Prisma.cuentafinancieraWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cuentafinancieraUpdateToOneWithWhereWithoutCobroInput, Prisma.cuentafinancieraUpdateWithoutCobroInput>, Prisma.cuentafinancieraUncheckedUpdateWithoutCobroInput>;
};
export type cuentafinancieraCreateNestedManyWithoutCuentacontableInput = {
    create?: Prisma.XOR<Prisma.cuentafinancieraCreateWithoutCuentacontableInput, Prisma.cuentafinancieraUncheckedCreateWithoutCuentacontableInput> | Prisma.cuentafinancieraCreateWithoutCuentacontableInput[] | Prisma.cuentafinancieraUncheckedCreateWithoutCuentacontableInput[];
    connectOrCreate?: Prisma.cuentafinancieraCreateOrConnectWithoutCuentacontableInput | Prisma.cuentafinancieraCreateOrConnectWithoutCuentacontableInput[];
    createMany?: Prisma.cuentafinancieraCreateManyCuentacontableInputEnvelope;
    connect?: Prisma.cuentafinancieraWhereUniqueInput | Prisma.cuentafinancieraWhereUniqueInput[];
};
export type cuentafinancieraUncheckedCreateNestedManyWithoutCuentacontableInput = {
    create?: Prisma.XOR<Prisma.cuentafinancieraCreateWithoutCuentacontableInput, Prisma.cuentafinancieraUncheckedCreateWithoutCuentacontableInput> | Prisma.cuentafinancieraCreateWithoutCuentacontableInput[] | Prisma.cuentafinancieraUncheckedCreateWithoutCuentacontableInput[];
    connectOrCreate?: Prisma.cuentafinancieraCreateOrConnectWithoutCuentacontableInput | Prisma.cuentafinancieraCreateOrConnectWithoutCuentacontableInput[];
    createMany?: Prisma.cuentafinancieraCreateManyCuentacontableInputEnvelope;
    connect?: Prisma.cuentafinancieraWhereUniqueInput | Prisma.cuentafinancieraWhereUniqueInput[];
};
export type cuentafinancieraUpdateManyWithoutCuentacontableNestedInput = {
    create?: Prisma.XOR<Prisma.cuentafinancieraCreateWithoutCuentacontableInput, Prisma.cuentafinancieraUncheckedCreateWithoutCuentacontableInput> | Prisma.cuentafinancieraCreateWithoutCuentacontableInput[] | Prisma.cuentafinancieraUncheckedCreateWithoutCuentacontableInput[];
    connectOrCreate?: Prisma.cuentafinancieraCreateOrConnectWithoutCuentacontableInput | Prisma.cuentafinancieraCreateOrConnectWithoutCuentacontableInput[];
    upsert?: Prisma.cuentafinancieraUpsertWithWhereUniqueWithoutCuentacontableInput | Prisma.cuentafinancieraUpsertWithWhereUniqueWithoutCuentacontableInput[];
    createMany?: Prisma.cuentafinancieraCreateManyCuentacontableInputEnvelope;
    set?: Prisma.cuentafinancieraWhereUniqueInput | Prisma.cuentafinancieraWhereUniqueInput[];
    disconnect?: Prisma.cuentafinancieraWhereUniqueInput | Prisma.cuentafinancieraWhereUniqueInput[];
    delete?: Prisma.cuentafinancieraWhereUniqueInput | Prisma.cuentafinancieraWhereUniqueInput[];
    connect?: Prisma.cuentafinancieraWhereUniqueInput | Prisma.cuentafinancieraWhereUniqueInput[];
    update?: Prisma.cuentafinancieraUpdateWithWhereUniqueWithoutCuentacontableInput | Prisma.cuentafinancieraUpdateWithWhereUniqueWithoutCuentacontableInput[];
    updateMany?: Prisma.cuentafinancieraUpdateManyWithWhereWithoutCuentacontableInput | Prisma.cuentafinancieraUpdateManyWithWhereWithoutCuentacontableInput[];
    deleteMany?: Prisma.cuentafinancieraScalarWhereInput | Prisma.cuentafinancieraScalarWhereInput[];
};
export type cuentafinancieraUncheckedUpdateManyWithoutCuentacontableNestedInput = {
    create?: Prisma.XOR<Prisma.cuentafinancieraCreateWithoutCuentacontableInput, Prisma.cuentafinancieraUncheckedCreateWithoutCuentacontableInput> | Prisma.cuentafinancieraCreateWithoutCuentacontableInput[] | Prisma.cuentafinancieraUncheckedCreateWithoutCuentacontableInput[];
    connectOrCreate?: Prisma.cuentafinancieraCreateOrConnectWithoutCuentacontableInput | Prisma.cuentafinancieraCreateOrConnectWithoutCuentacontableInput[];
    upsert?: Prisma.cuentafinancieraUpsertWithWhereUniqueWithoutCuentacontableInput | Prisma.cuentafinancieraUpsertWithWhereUniqueWithoutCuentacontableInput[];
    createMany?: Prisma.cuentafinancieraCreateManyCuentacontableInputEnvelope;
    set?: Prisma.cuentafinancieraWhereUniqueInput | Prisma.cuentafinancieraWhereUniqueInput[];
    disconnect?: Prisma.cuentafinancieraWhereUniqueInput | Prisma.cuentafinancieraWhereUniqueInput[];
    delete?: Prisma.cuentafinancieraWhereUniqueInput | Prisma.cuentafinancieraWhereUniqueInput[];
    connect?: Prisma.cuentafinancieraWhereUniqueInput | Prisma.cuentafinancieraWhereUniqueInput[];
    update?: Prisma.cuentafinancieraUpdateWithWhereUniqueWithoutCuentacontableInput | Prisma.cuentafinancieraUpdateWithWhereUniqueWithoutCuentacontableInput[];
    updateMany?: Prisma.cuentafinancieraUpdateManyWithWhereWithoutCuentacontableInput | Prisma.cuentafinancieraUpdateManyWithWhereWithoutCuentacontableInput[];
    deleteMany?: Prisma.cuentafinancieraScalarWhereInput | Prisma.cuentafinancieraScalarWhereInput[];
};
export type Enumcuentafinanciera_tipoFieldUpdateOperationsInput = {
    set?: $Enums.cuentafinanciera_tipo;
};
export type cuentafinancieraCreateNestedOneWithoutMovimientofinancieroInput = {
    create?: Prisma.XOR<Prisma.cuentafinancieraCreateWithoutMovimientofinancieroInput, Prisma.cuentafinancieraUncheckedCreateWithoutMovimientofinancieroInput>;
    connectOrCreate?: Prisma.cuentafinancieraCreateOrConnectWithoutMovimientofinancieroInput;
    connect?: Prisma.cuentafinancieraWhereUniqueInput;
};
export type cuentafinancieraUpdateOneRequiredWithoutMovimientofinancieroNestedInput = {
    create?: Prisma.XOR<Prisma.cuentafinancieraCreateWithoutMovimientofinancieroInput, Prisma.cuentafinancieraUncheckedCreateWithoutMovimientofinancieroInput>;
    connectOrCreate?: Prisma.cuentafinancieraCreateOrConnectWithoutMovimientofinancieroInput;
    upsert?: Prisma.cuentafinancieraUpsertWithoutMovimientofinancieroInput;
    connect?: Prisma.cuentafinancieraWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cuentafinancieraUpdateToOneWithWhereWithoutMovimientofinancieroInput, Prisma.cuentafinancieraUpdateWithoutMovimientofinancieroInput>, Prisma.cuentafinancieraUncheckedUpdateWithoutMovimientofinancieroInput>;
};
export type cuentafinancieraCreateNestedOneWithoutPagoInput = {
    create?: Prisma.XOR<Prisma.cuentafinancieraCreateWithoutPagoInput, Prisma.cuentafinancieraUncheckedCreateWithoutPagoInput>;
    connectOrCreate?: Prisma.cuentafinancieraCreateOrConnectWithoutPagoInput;
    connect?: Prisma.cuentafinancieraWhereUniqueInput;
};
export type cuentafinancieraUpdateOneRequiredWithoutPagoNestedInput = {
    create?: Prisma.XOR<Prisma.cuentafinancieraCreateWithoutPagoInput, Prisma.cuentafinancieraUncheckedCreateWithoutPagoInput>;
    connectOrCreate?: Prisma.cuentafinancieraCreateOrConnectWithoutPagoInput;
    upsert?: Prisma.cuentafinancieraUpsertWithoutPagoInput;
    connect?: Prisma.cuentafinancieraWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cuentafinancieraUpdateToOneWithWhereWithoutPagoInput, Prisma.cuentafinancieraUpdateWithoutPagoInput>, Prisma.cuentafinancieraUncheckedUpdateWithoutPagoInput>;
};
export type cuentafinancieraCreateWithoutCobroInput = {
    id: string;
    tipo: $Enums.cuentafinanciera_tipo;
    nombre: string;
    banco?: string | null;
    iban?: string | null;
    moneda: string;
    fechaApertura?: Date | string | null;
    fechaCierre?: Date | string | null;
    activa?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cuentacontable?: Prisma.cuentacontableCreateNestedOneWithoutCuentafinancieraInput;
    movimientofinanciero?: Prisma.movimientofinancieroCreateNestedManyWithoutCuentafinancieraInput;
    pago?: Prisma.pagoCreateNestedManyWithoutCuentafinancieraInput;
};
export type cuentafinancieraUncheckedCreateWithoutCobroInput = {
    id: string;
    tipo: $Enums.cuentafinanciera_tipo;
    nombre: string;
    banco?: string | null;
    iban?: string | null;
    moneda: string;
    fechaApertura?: Date | string | null;
    fechaCierre?: Date | string | null;
    activa?: boolean;
    cuentaContableId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    movimientofinanciero?: Prisma.movimientofinancieroUncheckedCreateNestedManyWithoutCuentafinancieraInput;
    pago?: Prisma.pagoUncheckedCreateNestedManyWithoutCuentafinancieraInput;
};
export type cuentafinancieraCreateOrConnectWithoutCobroInput = {
    where: Prisma.cuentafinancieraWhereUniqueInput;
    create: Prisma.XOR<Prisma.cuentafinancieraCreateWithoutCobroInput, Prisma.cuentafinancieraUncheckedCreateWithoutCobroInput>;
};
export type cuentafinancieraUpsertWithoutCobroInput = {
    update: Prisma.XOR<Prisma.cuentafinancieraUpdateWithoutCobroInput, Prisma.cuentafinancieraUncheckedUpdateWithoutCobroInput>;
    create: Prisma.XOR<Prisma.cuentafinancieraCreateWithoutCobroInput, Prisma.cuentafinancieraUncheckedCreateWithoutCobroInput>;
    where?: Prisma.cuentafinancieraWhereInput;
};
export type cuentafinancieraUpdateToOneWithWhereWithoutCobroInput = {
    where?: Prisma.cuentafinancieraWhereInput;
    data: Prisma.XOR<Prisma.cuentafinancieraUpdateWithoutCobroInput, Prisma.cuentafinancieraUncheckedUpdateWithoutCobroInput>;
};
export type cuentafinancieraUpdateWithoutCobroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentafinanciera_tipoFieldUpdateOperationsInput | $Enums.cuentafinanciera_tipo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    banco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaApertura?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cuentacontable?: Prisma.cuentacontableUpdateOneWithoutCuentafinancieraNestedInput;
    movimientofinanciero?: Prisma.movimientofinancieroUpdateManyWithoutCuentafinancieraNestedInput;
    pago?: Prisma.pagoUpdateManyWithoutCuentafinancieraNestedInput;
};
export type cuentafinancieraUncheckedUpdateWithoutCobroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentafinanciera_tipoFieldUpdateOperationsInput | $Enums.cuentafinanciera_tipo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    banco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaApertura?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    movimientofinanciero?: Prisma.movimientofinancieroUncheckedUpdateManyWithoutCuentafinancieraNestedInput;
    pago?: Prisma.pagoUncheckedUpdateManyWithoutCuentafinancieraNestedInput;
};
export type cuentafinancieraCreateWithoutCuentacontableInput = {
    id: string;
    tipo: $Enums.cuentafinanciera_tipo;
    nombre: string;
    banco?: string | null;
    iban?: string | null;
    moneda: string;
    fechaApertura?: Date | string | null;
    fechaCierre?: Date | string | null;
    activa?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cobro?: Prisma.cobroCreateNestedManyWithoutCuentafinancieraInput;
    movimientofinanciero?: Prisma.movimientofinancieroCreateNestedManyWithoutCuentafinancieraInput;
    pago?: Prisma.pagoCreateNestedManyWithoutCuentafinancieraInput;
};
export type cuentafinancieraUncheckedCreateWithoutCuentacontableInput = {
    id: string;
    tipo: $Enums.cuentafinanciera_tipo;
    nombre: string;
    banco?: string | null;
    iban?: string | null;
    moneda: string;
    fechaApertura?: Date | string | null;
    fechaCierre?: Date | string | null;
    activa?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cobro?: Prisma.cobroUncheckedCreateNestedManyWithoutCuentafinancieraInput;
    movimientofinanciero?: Prisma.movimientofinancieroUncheckedCreateNestedManyWithoutCuentafinancieraInput;
    pago?: Prisma.pagoUncheckedCreateNestedManyWithoutCuentafinancieraInput;
};
export type cuentafinancieraCreateOrConnectWithoutCuentacontableInput = {
    where: Prisma.cuentafinancieraWhereUniqueInput;
    create: Prisma.XOR<Prisma.cuentafinancieraCreateWithoutCuentacontableInput, Prisma.cuentafinancieraUncheckedCreateWithoutCuentacontableInput>;
};
export type cuentafinancieraCreateManyCuentacontableInputEnvelope = {
    data: Prisma.cuentafinancieraCreateManyCuentacontableInput | Prisma.cuentafinancieraCreateManyCuentacontableInput[];
    skipDuplicates?: boolean;
};
export type cuentafinancieraUpsertWithWhereUniqueWithoutCuentacontableInput = {
    where: Prisma.cuentafinancieraWhereUniqueInput;
    update: Prisma.XOR<Prisma.cuentafinancieraUpdateWithoutCuentacontableInput, Prisma.cuentafinancieraUncheckedUpdateWithoutCuentacontableInput>;
    create: Prisma.XOR<Prisma.cuentafinancieraCreateWithoutCuentacontableInput, Prisma.cuentafinancieraUncheckedCreateWithoutCuentacontableInput>;
};
export type cuentafinancieraUpdateWithWhereUniqueWithoutCuentacontableInput = {
    where: Prisma.cuentafinancieraWhereUniqueInput;
    data: Prisma.XOR<Prisma.cuentafinancieraUpdateWithoutCuentacontableInput, Prisma.cuentafinancieraUncheckedUpdateWithoutCuentacontableInput>;
};
export type cuentafinancieraUpdateManyWithWhereWithoutCuentacontableInput = {
    where: Prisma.cuentafinancieraScalarWhereInput;
    data: Prisma.XOR<Prisma.cuentafinancieraUpdateManyMutationInput, Prisma.cuentafinancieraUncheckedUpdateManyWithoutCuentacontableInput>;
};
export type cuentafinancieraScalarWhereInput = {
    AND?: Prisma.cuentafinancieraScalarWhereInput | Prisma.cuentafinancieraScalarWhereInput[];
    OR?: Prisma.cuentafinancieraScalarWhereInput[];
    NOT?: Prisma.cuentafinancieraScalarWhereInput | Prisma.cuentafinancieraScalarWhereInput[];
    id?: Prisma.StringFilter<"cuentafinanciera"> | string;
    tipo?: Prisma.Enumcuentafinanciera_tipoFilter<"cuentafinanciera"> | $Enums.cuentafinanciera_tipo;
    nombre?: Prisma.StringFilter<"cuentafinanciera"> | string;
    banco?: Prisma.StringNullableFilter<"cuentafinanciera"> | string | null;
    iban?: Prisma.StringNullableFilter<"cuentafinanciera"> | string | null;
    moneda?: Prisma.StringFilter<"cuentafinanciera"> | string;
    fechaApertura?: Prisma.DateTimeNullableFilter<"cuentafinanciera"> | Date | string | null;
    fechaCierre?: Prisma.DateTimeNullableFilter<"cuentafinanciera"> | Date | string | null;
    activa?: Prisma.BoolFilter<"cuentafinanciera"> | boolean;
    cuentaContableId?: Prisma.StringNullableFilter<"cuentafinanciera"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"cuentafinanciera"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"cuentafinanciera"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"cuentafinanciera"> | Date | string;
};
export type cuentafinancieraCreateWithoutMovimientofinancieroInput = {
    id: string;
    tipo: $Enums.cuentafinanciera_tipo;
    nombre: string;
    banco?: string | null;
    iban?: string | null;
    moneda: string;
    fechaApertura?: Date | string | null;
    fechaCierre?: Date | string | null;
    activa?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cobro?: Prisma.cobroCreateNestedManyWithoutCuentafinancieraInput;
    cuentacontable?: Prisma.cuentacontableCreateNestedOneWithoutCuentafinancieraInput;
    pago?: Prisma.pagoCreateNestedManyWithoutCuentafinancieraInput;
};
export type cuentafinancieraUncheckedCreateWithoutMovimientofinancieroInput = {
    id: string;
    tipo: $Enums.cuentafinanciera_tipo;
    nombre: string;
    banco?: string | null;
    iban?: string | null;
    moneda: string;
    fechaApertura?: Date | string | null;
    fechaCierre?: Date | string | null;
    activa?: boolean;
    cuentaContableId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cobro?: Prisma.cobroUncheckedCreateNestedManyWithoutCuentafinancieraInput;
    pago?: Prisma.pagoUncheckedCreateNestedManyWithoutCuentafinancieraInput;
};
export type cuentafinancieraCreateOrConnectWithoutMovimientofinancieroInput = {
    where: Prisma.cuentafinancieraWhereUniqueInput;
    create: Prisma.XOR<Prisma.cuentafinancieraCreateWithoutMovimientofinancieroInput, Prisma.cuentafinancieraUncheckedCreateWithoutMovimientofinancieroInput>;
};
export type cuentafinancieraUpsertWithoutMovimientofinancieroInput = {
    update: Prisma.XOR<Prisma.cuentafinancieraUpdateWithoutMovimientofinancieroInput, Prisma.cuentafinancieraUncheckedUpdateWithoutMovimientofinancieroInput>;
    create: Prisma.XOR<Prisma.cuentafinancieraCreateWithoutMovimientofinancieroInput, Prisma.cuentafinancieraUncheckedCreateWithoutMovimientofinancieroInput>;
    where?: Prisma.cuentafinancieraWhereInput;
};
export type cuentafinancieraUpdateToOneWithWhereWithoutMovimientofinancieroInput = {
    where?: Prisma.cuentafinancieraWhereInput;
    data: Prisma.XOR<Prisma.cuentafinancieraUpdateWithoutMovimientofinancieroInput, Prisma.cuentafinancieraUncheckedUpdateWithoutMovimientofinancieroInput>;
};
export type cuentafinancieraUpdateWithoutMovimientofinancieroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentafinanciera_tipoFieldUpdateOperationsInput | $Enums.cuentafinanciera_tipo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    banco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaApertura?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cobro?: Prisma.cobroUpdateManyWithoutCuentafinancieraNestedInput;
    cuentacontable?: Prisma.cuentacontableUpdateOneWithoutCuentafinancieraNestedInput;
    pago?: Prisma.pagoUpdateManyWithoutCuentafinancieraNestedInput;
};
export type cuentafinancieraUncheckedUpdateWithoutMovimientofinancieroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentafinanciera_tipoFieldUpdateOperationsInput | $Enums.cuentafinanciera_tipo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    banco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaApertura?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cobro?: Prisma.cobroUncheckedUpdateManyWithoutCuentafinancieraNestedInput;
    pago?: Prisma.pagoUncheckedUpdateManyWithoutCuentafinancieraNestedInput;
};
export type cuentafinancieraCreateWithoutPagoInput = {
    id: string;
    tipo: $Enums.cuentafinanciera_tipo;
    nombre: string;
    banco?: string | null;
    iban?: string | null;
    moneda: string;
    fechaApertura?: Date | string | null;
    fechaCierre?: Date | string | null;
    activa?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cobro?: Prisma.cobroCreateNestedManyWithoutCuentafinancieraInput;
    cuentacontable?: Prisma.cuentacontableCreateNestedOneWithoutCuentafinancieraInput;
    movimientofinanciero?: Prisma.movimientofinancieroCreateNestedManyWithoutCuentafinancieraInput;
};
export type cuentafinancieraUncheckedCreateWithoutPagoInput = {
    id: string;
    tipo: $Enums.cuentafinanciera_tipo;
    nombre: string;
    banco?: string | null;
    iban?: string | null;
    moneda: string;
    fechaApertura?: Date | string | null;
    fechaCierre?: Date | string | null;
    activa?: boolean;
    cuentaContableId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cobro?: Prisma.cobroUncheckedCreateNestedManyWithoutCuentafinancieraInput;
    movimientofinanciero?: Prisma.movimientofinancieroUncheckedCreateNestedManyWithoutCuentafinancieraInput;
};
export type cuentafinancieraCreateOrConnectWithoutPagoInput = {
    where: Prisma.cuentafinancieraWhereUniqueInput;
    create: Prisma.XOR<Prisma.cuentafinancieraCreateWithoutPagoInput, Prisma.cuentafinancieraUncheckedCreateWithoutPagoInput>;
};
export type cuentafinancieraUpsertWithoutPagoInput = {
    update: Prisma.XOR<Prisma.cuentafinancieraUpdateWithoutPagoInput, Prisma.cuentafinancieraUncheckedUpdateWithoutPagoInput>;
    create: Prisma.XOR<Prisma.cuentafinancieraCreateWithoutPagoInput, Prisma.cuentafinancieraUncheckedCreateWithoutPagoInput>;
    where?: Prisma.cuentafinancieraWhereInput;
};
export type cuentafinancieraUpdateToOneWithWhereWithoutPagoInput = {
    where?: Prisma.cuentafinancieraWhereInput;
    data: Prisma.XOR<Prisma.cuentafinancieraUpdateWithoutPagoInput, Prisma.cuentafinancieraUncheckedUpdateWithoutPagoInput>;
};
export type cuentafinancieraUpdateWithoutPagoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentafinanciera_tipoFieldUpdateOperationsInput | $Enums.cuentafinanciera_tipo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    banco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaApertura?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cobro?: Prisma.cobroUpdateManyWithoutCuentafinancieraNestedInput;
    cuentacontable?: Prisma.cuentacontableUpdateOneWithoutCuentafinancieraNestedInput;
    movimientofinanciero?: Prisma.movimientofinancieroUpdateManyWithoutCuentafinancieraNestedInput;
};
export type cuentafinancieraUncheckedUpdateWithoutPagoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentafinanciera_tipoFieldUpdateOperationsInput | $Enums.cuentafinanciera_tipo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    banco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaApertura?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cuentaContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cobro?: Prisma.cobroUncheckedUpdateManyWithoutCuentafinancieraNestedInput;
    movimientofinanciero?: Prisma.movimientofinancieroUncheckedUpdateManyWithoutCuentafinancieraNestedInput;
};
export type cuentafinancieraCreateManyCuentacontableInput = {
    id: string;
    tipo: $Enums.cuentafinanciera_tipo;
    nombre: string;
    banco?: string | null;
    iban?: string | null;
    moneda: string;
    fechaApertura?: Date | string | null;
    fechaCierre?: Date | string | null;
    activa?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type cuentafinancieraUpdateWithoutCuentacontableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentafinanciera_tipoFieldUpdateOperationsInput | $Enums.cuentafinanciera_tipo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    banco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaApertura?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cobro?: Prisma.cobroUpdateManyWithoutCuentafinancieraNestedInput;
    movimientofinanciero?: Prisma.movimientofinancieroUpdateManyWithoutCuentafinancieraNestedInput;
    pago?: Prisma.pagoUpdateManyWithoutCuentafinancieraNestedInput;
};
export type cuentafinancieraUncheckedUpdateWithoutCuentacontableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentafinanciera_tipoFieldUpdateOperationsInput | $Enums.cuentafinanciera_tipo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    banco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaApertura?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cobro?: Prisma.cobroUncheckedUpdateManyWithoutCuentafinancieraNestedInput;
    movimientofinanciero?: Prisma.movimientofinancieroUncheckedUpdateManyWithoutCuentafinancieraNestedInput;
    pago?: Prisma.pagoUncheckedUpdateManyWithoutCuentafinancieraNestedInput;
};
export type cuentafinancieraUncheckedUpdateManyWithoutCuentacontableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumcuentafinanciera_tipoFieldUpdateOperationsInput | $Enums.cuentafinanciera_tipo;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    banco?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    moneda?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaApertura?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type CuentafinancieraCountOutputType
 */
export type CuentafinancieraCountOutputType = {
    cobro: number;
    movimientofinanciero: number;
    pago: number;
};
export type CuentafinancieraCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cobro?: boolean | CuentafinancieraCountOutputTypeCountCobroArgs;
    movimientofinanciero?: boolean | CuentafinancieraCountOutputTypeCountMovimientofinancieroArgs;
    pago?: boolean | CuentafinancieraCountOutputTypeCountPagoArgs;
};
/**
 * CuentafinancieraCountOutputType without action
 */
export type CuentafinancieraCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuentafinancieraCountOutputType
     */
    select?: Prisma.CuentafinancieraCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CuentafinancieraCountOutputType without action
 */
export type CuentafinancieraCountOutputTypeCountCobroArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cobroWhereInput;
};
/**
 * CuentafinancieraCountOutputType without action
 */
export type CuentafinancieraCountOutputTypeCountMovimientofinancieroArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.movimientofinancieroWhereInput;
};
/**
 * CuentafinancieraCountOutputType without action
 */
export type CuentafinancieraCountOutputTypeCountPagoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pagoWhereInput;
};
export type cuentafinancieraSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tipo?: boolean;
    nombre?: boolean;
    banco?: boolean;
    iban?: boolean;
    moneda?: boolean;
    fechaApertura?: boolean;
    fechaCierre?: boolean;
    activa?: boolean;
    cuentaContableId?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cobro?: boolean | Prisma.cuentafinanciera$cobroArgs<ExtArgs>;
    cuentacontable?: boolean | Prisma.cuentafinanciera$cuentacontableArgs<ExtArgs>;
    movimientofinanciero?: boolean | Prisma.cuentafinanciera$movimientofinancieroArgs<ExtArgs>;
    pago?: boolean | Prisma.cuentafinanciera$pagoArgs<ExtArgs>;
    _count?: boolean | Prisma.CuentafinancieraCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cuentafinanciera"]>;
export type cuentafinancieraSelectScalar = {
    id?: boolean;
    tipo?: boolean;
    nombre?: boolean;
    banco?: boolean;
    iban?: boolean;
    moneda?: boolean;
    fechaApertura?: boolean;
    fechaCierre?: boolean;
    activa?: boolean;
    cuentaContableId?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type cuentafinancieraOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tipo" | "nombre" | "banco" | "iban" | "moneda" | "fechaApertura" | "fechaCierre" | "activa" | "cuentaContableId" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["cuentafinanciera"]>;
export type cuentafinancieraInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cobro?: boolean | Prisma.cuentafinanciera$cobroArgs<ExtArgs>;
    cuentacontable?: boolean | Prisma.cuentafinanciera$cuentacontableArgs<ExtArgs>;
    movimientofinanciero?: boolean | Prisma.cuentafinanciera$movimientofinancieroArgs<ExtArgs>;
    pago?: boolean | Prisma.cuentafinanciera$pagoArgs<ExtArgs>;
    _count?: boolean | Prisma.CuentafinancieraCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $cuentafinancieraPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "cuentafinanciera";
    objects: {
        cobro: Prisma.$cobroPayload<ExtArgs>[];
        cuentacontable: Prisma.$cuentacontablePayload<ExtArgs> | null;
        movimientofinanciero: Prisma.$movimientofinancieroPayload<ExtArgs>[];
        pago: Prisma.$pagoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tipo: $Enums.cuentafinanciera_tipo;
        nombre: string;
        banco: string | null;
        iban: string | null;
        moneda: string;
        fechaApertura: Date | null;
        fechaCierre: Date | null;
        activa: boolean;
        cuentaContableId: string | null;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["cuentafinanciera"]>;
    composites: {};
};
export type cuentafinancieraGetPayload<S extends boolean | null | undefined | cuentafinancieraDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$cuentafinancieraPayload, S>;
export type cuentafinancieraCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<cuentafinancieraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CuentafinancieraCountAggregateInputType | true;
};
export interface cuentafinancieraDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['cuentafinanciera'];
        meta: {
            name: 'cuentafinanciera';
        };
    };
    /**
     * Find zero or one Cuentafinanciera that matches the filter.
     * @param {cuentafinancieraFindUniqueArgs} args - Arguments to find a Cuentafinanciera
     * @example
     * // Get one Cuentafinanciera
     * const cuentafinanciera = await prisma.cuentafinanciera.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cuentafinancieraFindUniqueArgs>(args: Prisma.SelectSubset<T, cuentafinancieraFindUniqueArgs<ExtArgs>>): Prisma.Prisma__cuentafinancieraClient<runtime.Types.Result.GetResult<Prisma.$cuentafinancieraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Cuentafinanciera that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cuentafinancieraFindUniqueOrThrowArgs} args - Arguments to find a Cuentafinanciera
     * @example
     * // Get one Cuentafinanciera
     * const cuentafinanciera = await prisma.cuentafinanciera.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cuentafinancieraFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, cuentafinancieraFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__cuentafinancieraClient<runtime.Types.Result.GetResult<Prisma.$cuentafinancieraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cuentafinanciera that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentafinancieraFindFirstArgs} args - Arguments to find a Cuentafinanciera
     * @example
     * // Get one Cuentafinanciera
     * const cuentafinanciera = await prisma.cuentafinanciera.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cuentafinancieraFindFirstArgs>(args?: Prisma.SelectSubset<T, cuentafinancieraFindFirstArgs<ExtArgs>>): Prisma.Prisma__cuentafinancieraClient<runtime.Types.Result.GetResult<Prisma.$cuentafinancieraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cuentafinanciera that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentafinancieraFindFirstOrThrowArgs} args - Arguments to find a Cuentafinanciera
     * @example
     * // Get one Cuentafinanciera
     * const cuentafinanciera = await prisma.cuentafinanciera.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cuentafinancieraFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, cuentafinancieraFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__cuentafinancieraClient<runtime.Types.Result.GetResult<Prisma.$cuentafinancieraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Cuentafinancieras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentafinancieraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cuentafinancieras
     * const cuentafinancieras = await prisma.cuentafinanciera.findMany()
     *
     * // Get first 10 Cuentafinancieras
     * const cuentafinancieras = await prisma.cuentafinanciera.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cuentafinancieraWithIdOnly = await prisma.cuentafinanciera.findMany({ select: { id: true } })
     *
     */
    findMany<T extends cuentafinancieraFindManyArgs>(args?: Prisma.SelectSubset<T, cuentafinancieraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cuentafinancieraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Cuentafinanciera.
     * @param {cuentafinancieraCreateArgs} args - Arguments to create a Cuentafinanciera.
     * @example
     * // Create one Cuentafinanciera
     * const Cuentafinanciera = await prisma.cuentafinanciera.create({
     *   data: {
     *     // ... data to create a Cuentafinanciera
     *   }
     * })
     *
     */
    create<T extends cuentafinancieraCreateArgs>(args: Prisma.SelectSubset<T, cuentafinancieraCreateArgs<ExtArgs>>): Prisma.Prisma__cuentafinancieraClient<runtime.Types.Result.GetResult<Prisma.$cuentafinancieraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Cuentafinancieras.
     * @param {cuentafinancieraCreateManyArgs} args - Arguments to create many Cuentafinancieras.
     * @example
     * // Create many Cuentafinancieras
     * const cuentafinanciera = await prisma.cuentafinanciera.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends cuentafinancieraCreateManyArgs>(args?: Prisma.SelectSubset<T, cuentafinancieraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Cuentafinanciera.
     * @param {cuentafinancieraDeleteArgs} args - Arguments to delete one Cuentafinanciera.
     * @example
     * // Delete one Cuentafinanciera
     * const Cuentafinanciera = await prisma.cuentafinanciera.delete({
     *   where: {
     *     // ... filter to delete one Cuentafinanciera
     *   }
     * })
     *
     */
    delete<T extends cuentafinancieraDeleteArgs>(args: Prisma.SelectSubset<T, cuentafinancieraDeleteArgs<ExtArgs>>): Prisma.Prisma__cuentafinancieraClient<runtime.Types.Result.GetResult<Prisma.$cuentafinancieraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Cuentafinanciera.
     * @param {cuentafinancieraUpdateArgs} args - Arguments to update one Cuentafinanciera.
     * @example
     * // Update one Cuentafinanciera
     * const cuentafinanciera = await prisma.cuentafinanciera.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends cuentafinancieraUpdateArgs>(args: Prisma.SelectSubset<T, cuentafinancieraUpdateArgs<ExtArgs>>): Prisma.Prisma__cuentafinancieraClient<runtime.Types.Result.GetResult<Prisma.$cuentafinancieraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Cuentafinancieras.
     * @param {cuentafinancieraDeleteManyArgs} args - Arguments to filter Cuentafinancieras to delete.
     * @example
     * // Delete a few Cuentafinancieras
     * const { count } = await prisma.cuentafinanciera.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends cuentafinancieraDeleteManyArgs>(args?: Prisma.SelectSubset<T, cuentafinancieraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Cuentafinancieras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentafinancieraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cuentafinancieras
     * const cuentafinanciera = await prisma.cuentafinanciera.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends cuentafinancieraUpdateManyArgs>(args: Prisma.SelectSubset<T, cuentafinancieraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Cuentafinanciera.
     * @param {cuentafinancieraUpsertArgs} args - Arguments to update or create a Cuentafinanciera.
     * @example
     * // Update or create a Cuentafinanciera
     * const cuentafinanciera = await prisma.cuentafinanciera.upsert({
     *   create: {
     *     // ... data to create a Cuentafinanciera
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cuentafinanciera we want to update
     *   }
     * })
     */
    upsert<T extends cuentafinancieraUpsertArgs>(args: Prisma.SelectSubset<T, cuentafinancieraUpsertArgs<ExtArgs>>): Prisma.Prisma__cuentafinancieraClient<runtime.Types.Result.GetResult<Prisma.$cuentafinancieraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Cuentafinancieras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentafinancieraCountArgs} args - Arguments to filter Cuentafinancieras to count.
     * @example
     * // Count the number of Cuentafinancieras
     * const count = await prisma.cuentafinanciera.count({
     *   where: {
     *     // ... the filter for the Cuentafinancieras we want to count
     *   }
     * })
    **/
    count<T extends cuentafinancieraCountArgs>(args?: Prisma.Subset<T, cuentafinancieraCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CuentafinancieraCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Cuentafinanciera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuentafinancieraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CuentafinancieraAggregateArgs>(args: Prisma.Subset<T, CuentafinancieraAggregateArgs>): Prisma.PrismaPromise<GetCuentafinancieraAggregateType<T>>;
    /**
     * Group by Cuentafinanciera.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuentafinancieraGroupByArgs} args - Group by arguments.
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
    groupBy<T extends cuentafinancieraGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: cuentafinancieraGroupByArgs['orderBy'];
    } : {
        orderBy?: cuentafinancieraGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, cuentafinancieraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuentafinancieraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the cuentafinanciera model
     */
    readonly fields: cuentafinancieraFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for cuentafinanciera.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__cuentafinancieraClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cobro<T extends Prisma.cuentafinanciera$cobroArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cuentafinanciera$cobroArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cobroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cuentacontable<T extends Prisma.cuentafinanciera$cuentacontableArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cuentafinanciera$cuentacontableArgs<ExtArgs>>): Prisma.Prisma__cuentacontableClient<runtime.Types.Result.GetResult<Prisma.$cuentacontablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    movimientofinanciero<T extends Prisma.cuentafinanciera$movimientofinancieroArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cuentafinanciera$movimientofinancieroArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$movimientofinancieroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    pago<T extends Prisma.cuentafinanciera$pagoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cuentafinanciera$pagoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the cuentafinanciera model
 */
export interface cuentafinancieraFieldRefs {
    readonly id: Prisma.FieldRef<"cuentafinanciera", 'String'>;
    readonly tipo: Prisma.FieldRef<"cuentafinanciera", 'cuentafinanciera_tipo'>;
    readonly nombre: Prisma.FieldRef<"cuentafinanciera", 'String'>;
    readonly banco: Prisma.FieldRef<"cuentafinanciera", 'String'>;
    readonly iban: Prisma.FieldRef<"cuentafinanciera", 'String'>;
    readonly moneda: Prisma.FieldRef<"cuentafinanciera", 'String'>;
    readonly fechaApertura: Prisma.FieldRef<"cuentafinanciera", 'DateTime'>;
    readonly fechaCierre: Prisma.FieldRef<"cuentafinanciera", 'DateTime'>;
    readonly activa: Prisma.FieldRef<"cuentafinanciera", 'Boolean'>;
    readonly cuentaContableId: Prisma.FieldRef<"cuentafinanciera", 'String'>;
    readonly observaciones: Prisma.FieldRef<"cuentafinanciera", 'String'>;
    readonly createdAt: Prisma.FieldRef<"cuentafinanciera", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"cuentafinanciera", 'DateTime'>;
}
/**
 * cuentafinanciera findUnique
 */
export type cuentafinancieraFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which cuentafinanciera to fetch.
     */
    where: Prisma.cuentafinancieraWhereUniqueInput;
};
/**
 * cuentafinanciera findUniqueOrThrow
 */
export type cuentafinancieraFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which cuentafinanciera to fetch.
     */
    where: Prisma.cuentafinancieraWhereUniqueInput;
};
/**
 * cuentafinanciera findFirst
 */
export type cuentafinancieraFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which cuentafinanciera to fetch.
     */
    where?: Prisma.cuentafinancieraWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cuentafinancieras to fetch.
     */
    orderBy?: Prisma.cuentafinancieraOrderByWithRelationInput | Prisma.cuentafinancieraOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cuentafinancieras.
     */
    cursor?: Prisma.cuentafinancieraWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cuentafinancieras from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cuentafinancieras.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cuentafinancieras.
     */
    distinct?: Prisma.CuentafinancieraScalarFieldEnum | Prisma.CuentafinancieraScalarFieldEnum[];
};
/**
 * cuentafinanciera findFirstOrThrow
 */
export type cuentafinancieraFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which cuentafinanciera to fetch.
     */
    where?: Prisma.cuentafinancieraWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cuentafinancieras to fetch.
     */
    orderBy?: Prisma.cuentafinancieraOrderByWithRelationInput | Prisma.cuentafinancieraOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cuentafinancieras.
     */
    cursor?: Prisma.cuentafinancieraWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cuentafinancieras from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cuentafinancieras.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cuentafinancieras.
     */
    distinct?: Prisma.CuentafinancieraScalarFieldEnum | Prisma.CuentafinancieraScalarFieldEnum[];
};
/**
 * cuentafinanciera findMany
 */
export type cuentafinancieraFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which cuentafinancieras to fetch.
     */
    where?: Prisma.cuentafinancieraWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cuentafinancieras to fetch.
     */
    orderBy?: Prisma.cuentafinancieraOrderByWithRelationInput | Prisma.cuentafinancieraOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing cuentafinancieras.
     */
    cursor?: Prisma.cuentafinancieraWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cuentafinancieras from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cuentafinancieras.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cuentafinancieras.
     */
    distinct?: Prisma.CuentafinancieraScalarFieldEnum | Prisma.CuentafinancieraScalarFieldEnum[];
};
/**
 * cuentafinanciera create
 */
export type cuentafinancieraCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a cuentafinanciera.
     */
    data: Prisma.XOR<Prisma.cuentafinancieraCreateInput, Prisma.cuentafinancieraUncheckedCreateInput>;
};
/**
 * cuentafinanciera createMany
 */
export type cuentafinancieraCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many cuentafinancieras.
     */
    data: Prisma.cuentafinancieraCreateManyInput | Prisma.cuentafinancieraCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * cuentafinanciera update
 */
export type cuentafinancieraUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a cuentafinanciera.
     */
    data: Prisma.XOR<Prisma.cuentafinancieraUpdateInput, Prisma.cuentafinancieraUncheckedUpdateInput>;
    /**
     * Choose, which cuentafinanciera to update.
     */
    where: Prisma.cuentafinancieraWhereUniqueInput;
};
/**
 * cuentafinanciera updateMany
 */
export type cuentafinancieraUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update cuentafinancieras.
     */
    data: Prisma.XOR<Prisma.cuentafinancieraUpdateManyMutationInput, Prisma.cuentafinancieraUncheckedUpdateManyInput>;
    /**
     * Filter which cuentafinancieras to update
     */
    where?: Prisma.cuentafinancieraWhereInput;
    /**
     * Limit how many cuentafinancieras to update.
     */
    limit?: number;
};
/**
 * cuentafinanciera upsert
 */
export type cuentafinancieraUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the cuentafinanciera to update in case it exists.
     */
    where: Prisma.cuentafinancieraWhereUniqueInput;
    /**
     * In case the cuentafinanciera found by the `where` argument doesn't exist, create a new cuentafinanciera with this data.
     */
    create: Prisma.XOR<Prisma.cuentafinancieraCreateInput, Prisma.cuentafinancieraUncheckedCreateInput>;
    /**
     * In case the cuentafinanciera was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.cuentafinancieraUpdateInput, Prisma.cuentafinancieraUncheckedUpdateInput>;
};
/**
 * cuentafinanciera delete
 */
export type cuentafinancieraDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which cuentafinanciera to delete.
     */
    where: Prisma.cuentafinancieraWhereUniqueInput;
};
/**
 * cuentafinanciera deleteMany
 */
export type cuentafinancieraDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which cuentafinancieras to delete
     */
    where?: Prisma.cuentafinancieraWhereInput;
    /**
     * Limit how many cuentafinancieras to delete.
     */
    limit?: number;
};
/**
 * cuentafinanciera.cobro
 */
export type cuentafinanciera$cobroArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.cobroOrderByWithRelationInput | Prisma.cobroOrderByWithRelationInput[];
    cursor?: Prisma.cobroWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CobroScalarFieldEnum | Prisma.CobroScalarFieldEnum[];
};
/**
 * cuentafinanciera.cuentacontable
 */
export type cuentafinanciera$cuentacontableArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * cuentafinanciera.movimientofinanciero
 */
export type cuentafinanciera$movimientofinancieroArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.movimientofinancieroWhereInput;
    orderBy?: Prisma.movimientofinancieroOrderByWithRelationInput | Prisma.movimientofinancieroOrderByWithRelationInput[];
    cursor?: Prisma.movimientofinancieroWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MovimientofinancieroScalarFieldEnum | Prisma.MovimientofinancieroScalarFieldEnum[];
};
/**
 * cuentafinanciera.pago
 */
export type cuentafinanciera$pagoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.pagoOrderByWithRelationInput | Prisma.pagoOrderByWithRelationInput[];
    cursor?: Prisma.pagoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PagoScalarFieldEnum | Prisma.PagoScalarFieldEnum[];
};
/**
 * cuentafinanciera without action
 */
export type cuentafinancieraDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=cuentafinanciera.d.ts.map