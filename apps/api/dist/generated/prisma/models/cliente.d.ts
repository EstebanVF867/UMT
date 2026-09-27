import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model cliente
 *
 */
export type clienteModel = runtime.Types.Result.DefaultSelection<Prisma.$clientePayload>;
export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null;
    _min: ClienteMinAggregateOutputType | null;
    _max: ClienteMaxAggregateOutputType | null;
};
export type ClienteMinAggregateOutputType = {
    id: string | null;
    nombreRazonSocial: string | null;
    nifCif: string | null;
    tipoCliente: string | null;
    personaContacto: string | null;
    telefono: string | null;
    email: string | null;
    direccionFiscal: string | null;
    codigoPostal: string | null;
    localidad: string | null;
    provincia: string | null;
    pais: string | null;
    iban: string | null;
    formaCobro: string | null;
    plazoCobro: string | null;
    observacionesCobro: string | null;
    activo: boolean | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClienteMaxAggregateOutputType = {
    id: string | null;
    nombreRazonSocial: string | null;
    nifCif: string | null;
    tipoCliente: string | null;
    personaContacto: string | null;
    telefono: string | null;
    email: string | null;
    direccionFiscal: string | null;
    codigoPostal: string | null;
    localidad: string | null;
    provincia: string | null;
    pais: string | null;
    iban: string | null;
    formaCobro: string | null;
    plazoCobro: string | null;
    observacionesCobro: string | null;
    activo: boolean | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClienteCountAggregateOutputType = {
    id: number;
    nombreRazonSocial: number;
    nifCif: number;
    tipoCliente: number;
    personaContacto: number;
    telefono: number;
    email: number;
    direccionFiscal: number;
    codigoPostal: number;
    localidad: number;
    provincia: number;
    pais: number;
    iban: number;
    formaCobro: number;
    plazoCobro: number;
    observacionesCobro: number;
    activo: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ClienteMinAggregateInputType = {
    id?: true;
    nombreRazonSocial?: true;
    nifCif?: true;
    tipoCliente?: true;
    personaContacto?: true;
    telefono?: true;
    email?: true;
    direccionFiscal?: true;
    codigoPostal?: true;
    localidad?: true;
    provincia?: true;
    pais?: true;
    iban?: true;
    formaCobro?: true;
    plazoCobro?: true;
    observacionesCobro?: true;
    activo?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClienteMaxAggregateInputType = {
    id?: true;
    nombreRazonSocial?: true;
    nifCif?: true;
    tipoCliente?: true;
    personaContacto?: true;
    telefono?: true;
    email?: true;
    direccionFiscal?: true;
    codigoPostal?: true;
    localidad?: true;
    provincia?: true;
    pais?: true;
    iban?: true;
    formaCobro?: true;
    plazoCobro?: true;
    observacionesCobro?: true;
    activo?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClienteCountAggregateInputType = {
    id?: true;
    nombreRazonSocial?: true;
    nifCif?: true;
    tipoCliente?: true;
    personaContacto?: true;
    telefono?: true;
    email?: true;
    direccionFiscal?: true;
    codigoPostal?: true;
    localidad?: true;
    provincia?: true;
    pais?: true;
    iban?: true;
    formaCobro?: true;
    plazoCobro?: true;
    observacionesCobro?: true;
    activo?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ClienteAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which cliente to aggregate.
     */
    where?: Prisma.clienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clientes to fetch.
     */
    orderBy?: Prisma.clienteOrderByWithRelationInput | Prisma.clienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.clienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned clientes
    **/
    _count?: true | ClienteCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType;
};
export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
    [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCliente[P]> : Prisma.GetScalarType<T[P], AggregateCliente[P]>;
};
export type clienteGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.clienteWhereInput;
    orderBy?: Prisma.clienteOrderByWithAggregationInput | Prisma.clienteOrderByWithAggregationInput[];
    by: Prisma.ClienteScalarFieldEnum[] | Prisma.ClienteScalarFieldEnum;
    having?: Prisma.clienteScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClienteCountAggregateInputType | true;
    _min?: ClienteMinAggregateInputType;
    _max?: ClienteMaxAggregateInputType;
};
export type ClienteGroupByOutputType = {
    id: string;
    nombreRazonSocial: string;
    nifCif: string | null;
    tipoCliente: string | null;
    personaContacto: string | null;
    telefono: string | null;
    email: string | null;
    direccionFiscal: string | null;
    codigoPostal: string | null;
    localidad: string | null;
    provincia: string | null;
    pais: string | null;
    iban: string | null;
    formaCobro: string | null;
    plazoCobro: string | null;
    observacionesCobro: string | null;
    activo: boolean;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ClienteCountAggregateOutputType | null;
    _min: ClienteMinAggregateOutputType | null;
    _max: ClienteMaxAggregateOutputType | null;
};
export type GetClienteGroupByPayload<T extends clienteGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClienteGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClienteGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClienteGroupByOutputType[P]>;
}>>;
export type clienteWhereInput = {
    AND?: Prisma.clienteWhereInput | Prisma.clienteWhereInput[];
    OR?: Prisma.clienteWhereInput[];
    NOT?: Prisma.clienteWhereInput | Prisma.clienteWhereInput[];
    id?: Prisma.StringFilter<"cliente"> | string;
    nombreRazonSocial?: Prisma.StringFilter<"cliente"> | string;
    nifCif?: Prisma.StringNullableFilter<"cliente"> | string | null;
    tipoCliente?: Prisma.StringNullableFilter<"cliente"> | string | null;
    personaContacto?: Prisma.StringNullableFilter<"cliente"> | string | null;
    telefono?: Prisma.StringNullableFilter<"cliente"> | string | null;
    email?: Prisma.StringNullableFilter<"cliente"> | string | null;
    direccionFiscal?: Prisma.StringNullableFilter<"cliente"> | string | null;
    codigoPostal?: Prisma.StringNullableFilter<"cliente"> | string | null;
    localidad?: Prisma.StringNullableFilter<"cliente"> | string | null;
    provincia?: Prisma.StringNullableFilter<"cliente"> | string | null;
    pais?: Prisma.StringNullableFilter<"cliente"> | string | null;
    iban?: Prisma.StringNullableFilter<"cliente"> | string | null;
    formaCobro?: Prisma.StringNullableFilter<"cliente"> | string | null;
    plazoCobro?: Prisma.StringNullableFilter<"cliente"> | string | null;
    observacionesCobro?: Prisma.StringNullableFilter<"cliente"> | string | null;
    activo?: Prisma.BoolFilter<"cliente"> | boolean;
    observaciones?: Prisma.StringNullableFilter<"cliente"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"cliente"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"cliente"> | Date | string;
    cobro?: Prisma.CobroListRelationFilter;
    contratacion?: Prisma.ContratacionListRelationFilter;
    facturacliente?: Prisma.FacturaclienteListRelationFilter;
};
export type clienteOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombreRazonSocial?: Prisma.SortOrder;
    nifCif?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipoCliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    personaContacto?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccionFiscal?: Prisma.SortOrderInput | Prisma.SortOrder;
    codigoPostal?: Prisma.SortOrderInput | Prisma.SortOrder;
    localidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    provincia?: Prisma.SortOrderInput | Prisma.SortOrder;
    pais?: Prisma.SortOrderInput | Prisma.SortOrder;
    iban?: Prisma.SortOrderInput | Prisma.SortOrder;
    formaCobro?: Prisma.SortOrderInput | Prisma.SortOrder;
    plazoCobro?: Prisma.SortOrderInput | Prisma.SortOrder;
    observacionesCobro?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    cobro?: Prisma.cobroOrderByRelationAggregateInput;
    contratacion?: Prisma.contratacionOrderByRelationAggregateInput;
    facturacliente?: Prisma.facturaclienteOrderByRelationAggregateInput;
    _relevance?: Prisma.clienteOrderByRelevanceInput;
};
export type clienteWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.clienteWhereInput | Prisma.clienteWhereInput[];
    OR?: Prisma.clienteWhereInput[];
    NOT?: Prisma.clienteWhereInput | Prisma.clienteWhereInput[];
    nombreRazonSocial?: Prisma.StringFilter<"cliente"> | string;
    nifCif?: Prisma.StringNullableFilter<"cliente"> | string | null;
    tipoCliente?: Prisma.StringNullableFilter<"cliente"> | string | null;
    personaContacto?: Prisma.StringNullableFilter<"cliente"> | string | null;
    telefono?: Prisma.StringNullableFilter<"cliente"> | string | null;
    email?: Prisma.StringNullableFilter<"cliente"> | string | null;
    direccionFiscal?: Prisma.StringNullableFilter<"cliente"> | string | null;
    codigoPostal?: Prisma.StringNullableFilter<"cliente"> | string | null;
    localidad?: Prisma.StringNullableFilter<"cliente"> | string | null;
    provincia?: Prisma.StringNullableFilter<"cliente"> | string | null;
    pais?: Prisma.StringNullableFilter<"cliente"> | string | null;
    iban?: Prisma.StringNullableFilter<"cliente"> | string | null;
    formaCobro?: Prisma.StringNullableFilter<"cliente"> | string | null;
    plazoCobro?: Prisma.StringNullableFilter<"cliente"> | string | null;
    observacionesCobro?: Prisma.StringNullableFilter<"cliente"> | string | null;
    activo?: Prisma.BoolFilter<"cliente"> | boolean;
    observaciones?: Prisma.StringNullableFilter<"cliente"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"cliente"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"cliente"> | Date | string;
    cobro?: Prisma.CobroListRelationFilter;
    contratacion?: Prisma.ContratacionListRelationFilter;
    facturacliente?: Prisma.FacturaclienteListRelationFilter;
}, "id">;
export type clienteOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombreRazonSocial?: Prisma.SortOrder;
    nifCif?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipoCliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    personaContacto?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccionFiscal?: Prisma.SortOrderInput | Prisma.SortOrder;
    codigoPostal?: Prisma.SortOrderInput | Prisma.SortOrder;
    localidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    provincia?: Prisma.SortOrderInput | Prisma.SortOrder;
    pais?: Prisma.SortOrderInput | Prisma.SortOrder;
    iban?: Prisma.SortOrderInput | Prisma.SortOrder;
    formaCobro?: Prisma.SortOrderInput | Prisma.SortOrder;
    plazoCobro?: Prisma.SortOrderInput | Prisma.SortOrder;
    observacionesCobro?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.clienteCountOrderByAggregateInput;
    _max?: Prisma.clienteMaxOrderByAggregateInput;
    _min?: Prisma.clienteMinOrderByAggregateInput;
};
export type clienteScalarWhereWithAggregatesInput = {
    AND?: Prisma.clienteScalarWhereWithAggregatesInput | Prisma.clienteScalarWhereWithAggregatesInput[];
    OR?: Prisma.clienteScalarWhereWithAggregatesInput[];
    NOT?: Prisma.clienteScalarWhereWithAggregatesInput | Prisma.clienteScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"cliente"> | string;
    nombreRazonSocial?: Prisma.StringWithAggregatesFilter<"cliente"> | string;
    nifCif?: Prisma.StringNullableWithAggregatesFilter<"cliente"> | string | null;
    tipoCliente?: Prisma.StringNullableWithAggregatesFilter<"cliente"> | string | null;
    personaContacto?: Prisma.StringNullableWithAggregatesFilter<"cliente"> | string | null;
    telefono?: Prisma.StringNullableWithAggregatesFilter<"cliente"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"cliente"> | string | null;
    direccionFiscal?: Prisma.StringNullableWithAggregatesFilter<"cliente"> | string | null;
    codigoPostal?: Prisma.StringNullableWithAggregatesFilter<"cliente"> | string | null;
    localidad?: Prisma.StringNullableWithAggregatesFilter<"cliente"> | string | null;
    provincia?: Prisma.StringNullableWithAggregatesFilter<"cliente"> | string | null;
    pais?: Prisma.StringNullableWithAggregatesFilter<"cliente"> | string | null;
    iban?: Prisma.StringNullableWithAggregatesFilter<"cliente"> | string | null;
    formaCobro?: Prisma.StringNullableWithAggregatesFilter<"cliente"> | string | null;
    plazoCobro?: Prisma.StringNullableWithAggregatesFilter<"cliente"> | string | null;
    observacionesCobro?: Prisma.StringNullableWithAggregatesFilter<"cliente"> | string | null;
    activo?: Prisma.BoolWithAggregatesFilter<"cliente"> | boolean;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"cliente"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"cliente"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"cliente"> | Date | string;
};
export type clienteCreateInput = {
    id: string;
    nombreRazonSocial: string;
    nifCif?: string | null;
    tipoCliente?: string | null;
    personaContacto?: string | null;
    telefono?: string | null;
    email?: string | null;
    direccionFiscal?: string | null;
    codigoPostal?: string | null;
    localidad?: string | null;
    provincia?: string | null;
    pais?: string | null;
    iban?: string | null;
    formaCobro?: string | null;
    plazoCobro?: string | null;
    observacionesCobro?: string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cobro?: Prisma.cobroCreateNestedManyWithoutClienteInput;
    contratacion?: Prisma.contratacionCreateNestedManyWithoutClienteInput;
    facturacliente?: Prisma.facturaclienteCreateNestedManyWithoutClienteInput;
};
export type clienteUncheckedCreateInput = {
    id: string;
    nombreRazonSocial: string;
    nifCif?: string | null;
    tipoCliente?: string | null;
    personaContacto?: string | null;
    telefono?: string | null;
    email?: string | null;
    direccionFiscal?: string | null;
    codigoPostal?: string | null;
    localidad?: string | null;
    provincia?: string | null;
    pais?: string | null;
    iban?: string | null;
    formaCobro?: string | null;
    plazoCobro?: string | null;
    observacionesCobro?: string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cobro?: Prisma.cobroUncheckedCreateNestedManyWithoutClienteInput;
    contratacion?: Prisma.contratacionUncheckedCreateNestedManyWithoutClienteInput;
    facturacliente?: Prisma.facturaclienteUncheckedCreateNestedManyWithoutClienteInput;
};
export type clienteUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreRazonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    nifCif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipoCliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    personaContacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccionFiscal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoPostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provincia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pais?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formaCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plazoCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observacionesCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cobro?: Prisma.cobroUpdateManyWithoutClienteNestedInput;
    contratacion?: Prisma.contratacionUpdateManyWithoutClienteNestedInput;
    facturacliente?: Prisma.facturaclienteUpdateManyWithoutClienteNestedInput;
};
export type clienteUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreRazonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    nifCif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipoCliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    personaContacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccionFiscal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoPostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provincia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pais?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formaCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plazoCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observacionesCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cobro?: Prisma.cobroUncheckedUpdateManyWithoutClienteNestedInput;
    contratacion?: Prisma.contratacionUncheckedUpdateManyWithoutClienteNestedInput;
    facturacliente?: Prisma.facturaclienteUncheckedUpdateManyWithoutClienteNestedInput;
};
export type clienteCreateManyInput = {
    id: string;
    nombreRazonSocial: string;
    nifCif?: string | null;
    tipoCliente?: string | null;
    personaContacto?: string | null;
    telefono?: string | null;
    email?: string | null;
    direccionFiscal?: string | null;
    codigoPostal?: string | null;
    localidad?: string | null;
    provincia?: string | null;
    pais?: string | null;
    iban?: string | null;
    formaCobro?: string | null;
    plazoCobro?: string | null;
    observacionesCobro?: string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type clienteUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreRazonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    nifCif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipoCliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    personaContacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccionFiscal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoPostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provincia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pais?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formaCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plazoCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observacionesCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type clienteUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreRazonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    nifCif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipoCliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    personaContacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccionFiscal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoPostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provincia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pais?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formaCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plazoCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observacionesCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type clienteOrderByRelevanceInput = {
    fields: Prisma.clienteOrderByRelevanceFieldEnum | Prisma.clienteOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type clienteCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombreRazonSocial?: Prisma.SortOrder;
    nifCif?: Prisma.SortOrder;
    tipoCliente?: Prisma.SortOrder;
    personaContacto?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    direccionFiscal?: Prisma.SortOrder;
    codigoPostal?: Prisma.SortOrder;
    localidad?: Prisma.SortOrder;
    provincia?: Prisma.SortOrder;
    pais?: Prisma.SortOrder;
    iban?: Prisma.SortOrder;
    formaCobro?: Prisma.SortOrder;
    plazoCobro?: Prisma.SortOrder;
    observacionesCobro?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type clienteMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombreRazonSocial?: Prisma.SortOrder;
    nifCif?: Prisma.SortOrder;
    tipoCliente?: Prisma.SortOrder;
    personaContacto?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    direccionFiscal?: Prisma.SortOrder;
    codigoPostal?: Prisma.SortOrder;
    localidad?: Prisma.SortOrder;
    provincia?: Prisma.SortOrder;
    pais?: Prisma.SortOrder;
    iban?: Prisma.SortOrder;
    formaCobro?: Prisma.SortOrder;
    plazoCobro?: Prisma.SortOrder;
    observacionesCobro?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type clienteMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombreRazonSocial?: Prisma.SortOrder;
    nifCif?: Prisma.SortOrder;
    tipoCliente?: Prisma.SortOrder;
    personaContacto?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    direccionFiscal?: Prisma.SortOrder;
    codigoPostal?: Prisma.SortOrder;
    localidad?: Prisma.SortOrder;
    provincia?: Prisma.SortOrder;
    pais?: Prisma.SortOrder;
    iban?: Prisma.SortOrder;
    formaCobro?: Prisma.SortOrder;
    plazoCobro?: Prisma.SortOrder;
    observacionesCobro?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClienteScalarRelationFilter = {
    is?: Prisma.clienteWhereInput;
    isNot?: Prisma.clienteWhereInput;
};
export type clienteCreateNestedOneWithoutCobroInput = {
    create?: Prisma.XOR<Prisma.clienteCreateWithoutCobroInput, Prisma.clienteUncheckedCreateWithoutCobroInput>;
    connectOrCreate?: Prisma.clienteCreateOrConnectWithoutCobroInput;
    connect?: Prisma.clienteWhereUniqueInput;
};
export type clienteUpdateOneRequiredWithoutCobroNestedInput = {
    create?: Prisma.XOR<Prisma.clienteCreateWithoutCobroInput, Prisma.clienteUncheckedCreateWithoutCobroInput>;
    connectOrCreate?: Prisma.clienteCreateOrConnectWithoutCobroInput;
    upsert?: Prisma.clienteUpsertWithoutCobroInput;
    connect?: Prisma.clienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.clienteUpdateToOneWithWhereWithoutCobroInput, Prisma.clienteUpdateWithoutCobroInput>, Prisma.clienteUncheckedUpdateWithoutCobroInput>;
};
export type clienteCreateNestedOneWithoutContratacionInput = {
    create?: Prisma.XOR<Prisma.clienteCreateWithoutContratacionInput, Prisma.clienteUncheckedCreateWithoutContratacionInput>;
    connectOrCreate?: Prisma.clienteCreateOrConnectWithoutContratacionInput;
    connect?: Prisma.clienteWhereUniqueInput;
};
export type clienteUpdateOneRequiredWithoutContratacionNestedInput = {
    create?: Prisma.XOR<Prisma.clienteCreateWithoutContratacionInput, Prisma.clienteUncheckedCreateWithoutContratacionInput>;
    connectOrCreate?: Prisma.clienteCreateOrConnectWithoutContratacionInput;
    upsert?: Prisma.clienteUpsertWithoutContratacionInput;
    connect?: Prisma.clienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.clienteUpdateToOneWithWhereWithoutContratacionInput, Prisma.clienteUpdateWithoutContratacionInput>, Prisma.clienteUncheckedUpdateWithoutContratacionInput>;
};
export type clienteCreateNestedOneWithoutFacturaclienteInput = {
    create?: Prisma.XOR<Prisma.clienteCreateWithoutFacturaclienteInput, Prisma.clienteUncheckedCreateWithoutFacturaclienteInput>;
    connectOrCreate?: Prisma.clienteCreateOrConnectWithoutFacturaclienteInput;
    connect?: Prisma.clienteWhereUniqueInput;
};
export type clienteUpdateOneRequiredWithoutFacturaclienteNestedInput = {
    create?: Prisma.XOR<Prisma.clienteCreateWithoutFacturaclienteInput, Prisma.clienteUncheckedCreateWithoutFacturaclienteInput>;
    connectOrCreate?: Prisma.clienteCreateOrConnectWithoutFacturaclienteInput;
    upsert?: Prisma.clienteUpsertWithoutFacturaclienteInput;
    connect?: Prisma.clienteWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.clienteUpdateToOneWithWhereWithoutFacturaclienteInput, Prisma.clienteUpdateWithoutFacturaclienteInput>, Prisma.clienteUncheckedUpdateWithoutFacturaclienteInput>;
};
export type clienteCreateWithoutCobroInput = {
    id: string;
    nombreRazonSocial: string;
    nifCif?: string | null;
    tipoCliente?: string | null;
    personaContacto?: string | null;
    telefono?: string | null;
    email?: string | null;
    direccionFiscal?: string | null;
    codigoPostal?: string | null;
    localidad?: string | null;
    provincia?: string | null;
    pais?: string | null;
    iban?: string | null;
    formaCobro?: string | null;
    plazoCobro?: string | null;
    observacionesCobro?: string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    contratacion?: Prisma.contratacionCreateNestedManyWithoutClienteInput;
    facturacliente?: Prisma.facturaclienteCreateNestedManyWithoutClienteInput;
};
export type clienteUncheckedCreateWithoutCobroInput = {
    id: string;
    nombreRazonSocial: string;
    nifCif?: string | null;
    tipoCliente?: string | null;
    personaContacto?: string | null;
    telefono?: string | null;
    email?: string | null;
    direccionFiscal?: string | null;
    codigoPostal?: string | null;
    localidad?: string | null;
    provincia?: string | null;
    pais?: string | null;
    iban?: string | null;
    formaCobro?: string | null;
    plazoCobro?: string | null;
    observacionesCobro?: string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    contratacion?: Prisma.contratacionUncheckedCreateNestedManyWithoutClienteInput;
    facturacliente?: Prisma.facturaclienteUncheckedCreateNestedManyWithoutClienteInput;
};
export type clienteCreateOrConnectWithoutCobroInput = {
    where: Prisma.clienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.clienteCreateWithoutCobroInput, Prisma.clienteUncheckedCreateWithoutCobroInput>;
};
export type clienteUpsertWithoutCobroInput = {
    update: Prisma.XOR<Prisma.clienteUpdateWithoutCobroInput, Prisma.clienteUncheckedUpdateWithoutCobroInput>;
    create: Prisma.XOR<Prisma.clienteCreateWithoutCobroInput, Prisma.clienteUncheckedCreateWithoutCobroInput>;
    where?: Prisma.clienteWhereInput;
};
export type clienteUpdateToOneWithWhereWithoutCobroInput = {
    where?: Prisma.clienteWhereInput;
    data: Prisma.XOR<Prisma.clienteUpdateWithoutCobroInput, Prisma.clienteUncheckedUpdateWithoutCobroInput>;
};
export type clienteUpdateWithoutCobroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreRazonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    nifCif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipoCliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    personaContacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccionFiscal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoPostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provincia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pais?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formaCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plazoCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observacionesCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contratacion?: Prisma.contratacionUpdateManyWithoutClienteNestedInput;
    facturacliente?: Prisma.facturaclienteUpdateManyWithoutClienteNestedInput;
};
export type clienteUncheckedUpdateWithoutCobroInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreRazonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    nifCif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipoCliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    personaContacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccionFiscal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoPostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provincia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pais?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formaCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plazoCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observacionesCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contratacion?: Prisma.contratacionUncheckedUpdateManyWithoutClienteNestedInput;
    facturacliente?: Prisma.facturaclienteUncheckedUpdateManyWithoutClienteNestedInput;
};
export type clienteCreateWithoutContratacionInput = {
    id: string;
    nombreRazonSocial: string;
    nifCif?: string | null;
    tipoCliente?: string | null;
    personaContacto?: string | null;
    telefono?: string | null;
    email?: string | null;
    direccionFiscal?: string | null;
    codigoPostal?: string | null;
    localidad?: string | null;
    provincia?: string | null;
    pais?: string | null;
    iban?: string | null;
    formaCobro?: string | null;
    plazoCobro?: string | null;
    observacionesCobro?: string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cobro?: Prisma.cobroCreateNestedManyWithoutClienteInput;
    facturacliente?: Prisma.facturaclienteCreateNestedManyWithoutClienteInput;
};
export type clienteUncheckedCreateWithoutContratacionInput = {
    id: string;
    nombreRazonSocial: string;
    nifCif?: string | null;
    tipoCliente?: string | null;
    personaContacto?: string | null;
    telefono?: string | null;
    email?: string | null;
    direccionFiscal?: string | null;
    codigoPostal?: string | null;
    localidad?: string | null;
    provincia?: string | null;
    pais?: string | null;
    iban?: string | null;
    formaCobro?: string | null;
    plazoCobro?: string | null;
    observacionesCobro?: string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cobro?: Prisma.cobroUncheckedCreateNestedManyWithoutClienteInput;
    facturacliente?: Prisma.facturaclienteUncheckedCreateNestedManyWithoutClienteInput;
};
export type clienteCreateOrConnectWithoutContratacionInput = {
    where: Prisma.clienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.clienteCreateWithoutContratacionInput, Prisma.clienteUncheckedCreateWithoutContratacionInput>;
};
export type clienteUpsertWithoutContratacionInput = {
    update: Prisma.XOR<Prisma.clienteUpdateWithoutContratacionInput, Prisma.clienteUncheckedUpdateWithoutContratacionInput>;
    create: Prisma.XOR<Prisma.clienteCreateWithoutContratacionInput, Prisma.clienteUncheckedCreateWithoutContratacionInput>;
    where?: Prisma.clienteWhereInput;
};
export type clienteUpdateToOneWithWhereWithoutContratacionInput = {
    where?: Prisma.clienteWhereInput;
    data: Prisma.XOR<Prisma.clienteUpdateWithoutContratacionInput, Prisma.clienteUncheckedUpdateWithoutContratacionInput>;
};
export type clienteUpdateWithoutContratacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreRazonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    nifCif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipoCliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    personaContacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccionFiscal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoPostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provincia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pais?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formaCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plazoCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observacionesCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cobro?: Prisma.cobroUpdateManyWithoutClienteNestedInput;
    facturacliente?: Prisma.facturaclienteUpdateManyWithoutClienteNestedInput;
};
export type clienteUncheckedUpdateWithoutContratacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreRazonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    nifCif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipoCliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    personaContacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccionFiscal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoPostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provincia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pais?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formaCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plazoCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observacionesCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cobro?: Prisma.cobroUncheckedUpdateManyWithoutClienteNestedInput;
    facturacliente?: Prisma.facturaclienteUncheckedUpdateManyWithoutClienteNestedInput;
};
export type clienteCreateWithoutFacturaclienteInput = {
    id: string;
    nombreRazonSocial: string;
    nifCif?: string | null;
    tipoCliente?: string | null;
    personaContacto?: string | null;
    telefono?: string | null;
    email?: string | null;
    direccionFiscal?: string | null;
    codigoPostal?: string | null;
    localidad?: string | null;
    provincia?: string | null;
    pais?: string | null;
    iban?: string | null;
    formaCobro?: string | null;
    plazoCobro?: string | null;
    observacionesCobro?: string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cobro?: Prisma.cobroCreateNestedManyWithoutClienteInput;
    contratacion?: Prisma.contratacionCreateNestedManyWithoutClienteInput;
};
export type clienteUncheckedCreateWithoutFacturaclienteInput = {
    id: string;
    nombreRazonSocial: string;
    nifCif?: string | null;
    tipoCliente?: string | null;
    personaContacto?: string | null;
    telefono?: string | null;
    email?: string | null;
    direccionFiscal?: string | null;
    codigoPostal?: string | null;
    localidad?: string | null;
    provincia?: string | null;
    pais?: string | null;
    iban?: string | null;
    formaCobro?: string | null;
    plazoCobro?: string | null;
    observacionesCobro?: string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cobro?: Prisma.cobroUncheckedCreateNestedManyWithoutClienteInput;
    contratacion?: Prisma.contratacionUncheckedCreateNestedManyWithoutClienteInput;
};
export type clienteCreateOrConnectWithoutFacturaclienteInput = {
    where: Prisma.clienteWhereUniqueInput;
    create: Prisma.XOR<Prisma.clienteCreateWithoutFacturaclienteInput, Prisma.clienteUncheckedCreateWithoutFacturaclienteInput>;
};
export type clienteUpsertWithoutFacturaclienteInput = {
    update: Prisma.XOR<Prisma.clienteUpdateWithoutFacturaclienteInput, Prisma.clienteUncheckedUpdateWithoutFacturaclienteInput>;
    create: Prisma.XOR<Prisma.clienteCreateWithoutFacturaclienteInput, Prisma.clienteUncheckedCreateWithoutFacturaclienteInput>;
    where?: Prisma.clienteWhereInput;
};
export type clienteUpdateToOneWithWhereWithoutFacturaclienteInput = {
    where?: Prisma.clienteWhereInput;
    data: Prisma.XOR<Prisma.clienteUpdateWithoutFacturaclienteInput, Prisma.clienteUncheckedUpdateWithoutFacturaclienteInput>;
};
export type clienteUpdateWithoutFacturaclienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreRazonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    nifCif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipoCliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    personaContacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccionFiscal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoPostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provincia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pais?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formaCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plazoCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observacionesCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cobro?: Prisma.cobroUpdateManyWithoutClienteNestedInput;
    contratacion?: Prisma.contratacionUpdateManyWithoutClienteNestedInput;
};
export type clienteUncheckedUpdateWithoutFacturaclienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreRazonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    nifCif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipoCliente?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    personaContacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccionFiscal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoPostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provincia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pais?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formaCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plazoCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observacionesCobro?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cobro?: Prisma.cobroUncheckedUpdateManyWithoutClienteNestedInput;
    contratacion?: Prisma.contratacionUncheckedUpdateManyWithoutClienteNestedInput;
};
/**
 * Count Type ClienteCountOutputType
 */
export type ClienteCountOutputType = {
    cobro: number;
    contratacion: number;
    facturacliente: number;
};
export type ClienteCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cobro?: boolean | ClienteCountOutputTypeCountCobroArgs;
    contratacion?: boolean | ClienteCountOutputTypeCountContratacionArgs;
    facturacliente?: boolean | ClienteCountOutputTypeCountFacturaclienteArgs;
};
/**
 * ClienteCountOutputType without action
 */
export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: Prisma.ClienteCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ClienteCountOutputType without action
 */
export type ClienteCountOutputTypeCountCobroArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cobroWhereInput;
};
/**
 * ClienteCountOutputType without action
 */
export type ClienteCountOutputTypeCountContratacionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contratacionWhereInput;
};
/**
 * ClienteCountOutputType without action
 */
export type ClienteCountOutputTypeCountFacturaclienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaclienteWhereInput;
};
export type clienteSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombreRazonSocial?: boolean;
    nifCif?: boolean;
    tipoCliente?: boolean;
    personaContacto?: boolean;
    telefono?: boolean;
    email?: boolean;
    direccionFiscal?: boolean;
    codigoPostal?: boolean;
    localidad?: boolean;
    provincia?: boolean;
    pais?: boolean;
    iban?: boolean;
    formaCobro?: boolean;
    plazoCobro?: boolean;
    observacionesCobro?: boolean;
    activo?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    cobro?: boolean | Prisma.cliente$cobroArgs<ExtArgs>;
    contratacion?: boolean | Prisma.cliente$contratacionArgs<ExtArgs>;
    facturacliente?: boolean | Prisma.cliente$facturaclienteArgs<ExtArgs>;
    _count?: boolean | Prisma.ClienteCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cliente"]>;
export type clienteSelectScalar = {
    id?: boolean;
    nombreRazonSocial?: boolean;
    nifCif?: boolean;
    tipoCliente?: boolean;
    personaContacto?: boolean;
    telefono?: boolean;
    email?: boolean;
    direccionFiscal?: boolean;
    codigoPostal?: boolean;
    localidad?: boolean;
    provincia?: boolean;
    pais?: boolean;
    iban?: boolean;
    formaCobro?: boolean;
    plazoCobro?: boolean;
    observacionesCobro?: boolean;
    activo?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type clienteOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombreRazonSocial" | "nifCif" | "tipoCliente" | "personaContacto" | "telefono" | "email" | "direccionFiscal" | "codigoPostal" | "localidad" | "provincia" | "pais" | "iban" | "formaCobro" | "plazoCobro" | "observacionesCobro" | "activo" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["cliente"]>;
export type clienteInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cobro?: boolean | Prisma.cliente$cobroArgs<ExtArgs>;
    contratacion?: boolean | Prisma.cliente$contratacionArgs<ExtArgs>;
    facturacliente?: boolean | Prisma.cliente$facturaclienteArgs<ExtArgs>;
    _count?: boolean | Prisma.ClienteCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $clientePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "cliente";
    objects: {
        cobro: Prisma.$cobroPayload<ExtArgs>[];
        contratacion: Prisma.$contratacionPayload<ExtArgs>[];
        facturacliente: Prisma.$facturaclientePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nombreRazonSocial: string;
        nifCif: string | null;
        tipoCliente: string | null;
        personaContacto: string | null;
        telefono: string | null;
        email: string | null;
        direccionFiscal: string | null;
        codigoPostal: string | null;
        localidad: string | null;
        provincia: string | null;
        pais: string | null;
        iban: string | null;
        formaCobro: string | null;
        plazoCobro: string | null;
        observacionesCobro: string | null;
        activo: boolean;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["cliente"]>;
    composites: {};
};
export type clienteGetPayload<S extends boolean | null | undefined | clienteDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$clientePayload, S>;
export type clienteCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<clienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClienteCountAggregateInputType | true;
};
export interface clienteDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['cliente'];
        meta: {
            name: 'cliente';
        };
    };
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {clienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clienteFindUniqueArgs>(args: Prisma.SelectSubset<T, clienteFindUniqueArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {clienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clienteFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, clienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clienteFindFirstArgs>(args?: Prisma.SelectSubset<T, clienteFindFirstArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clienteFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, clienteFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     *
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     *
     */
    findMany<T extends clienteFindManyArgs>(args?: Prisma.SelectSubset<T, clienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Cliente.
     * @param {clienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     *
     */
    create<T extends clienteCreateArgs>(args: Prisma.SelectSubset<T, clienteCreateArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Clientes.
     * @param {clienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends clienteCreateManyArgs>(args?: Prisma.SelectSubset<T, clienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Cliente.
     * @param {clienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     *
     */
    delete<T extends clienteDeleteArgs>(args: Prisma.SelectSubset<T, clienteDeleteArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Cliente.
     * @param {clienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends clienteUpdateArgs>(args: Prisma.SelectSubset<T, clienteUpdateArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Clientes.
     * @param {clienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends clienteDeleteManyArgs>(args?: Prisma.SelectSubset<T, clienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends clienteUpdateManyArgs>(args: Prisma.SelectSubset<T, clienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Cliente.
     * @param {clienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends clienteUpsertArgs>(args: Prisma.SelectSubset<T, clienteUpsertArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends clienteCountArgs>(args?: Prisma.Subset<T, clienteCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClienteCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Prisma.Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>;
    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clienteGroupByArgs} args - Group by arguments.
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
    groupBy<T extends clienteGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: clienteGroupByArgs['orderBy'];
    } : {
        orderBy?: clienteGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, clienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the cliente model
     */
    readonly fields: clienteFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for cliente.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__clienteClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cobro<T extends Prisma.cliente$cobroArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cliente$cobroArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cobroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    contratacion<T extends Prisma.cliente$contratacionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cliente$contratacionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contratacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    facturacliente<T extends Prisma.cliente$facturaclienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cliente$facturaclienteArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturaclientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the cliente model
 */
export interface clienteFieldRefs {
    readonly id: Prisma.FieldRef<"cliente", 'String'>;
    readonly nombreRazonSocial: Prisma.FieldRef<"cliente", 'String'>;
    readonly nifCif: Prisma.FieldRef<"cliente", 'String'>;
    readonly tipoCliente: Prisma.FieldRef<"cliente", 'String'>;
    readonly personaContacto: Prisma.FieldRef<"cliente", 'String'>;
    readonly telefono: Prisma.FieldRef<"cliente", 'String'>;
    readonly email: Prisma.FieldRef<"cliente", 'String'>;
    readonly direccionFiscal: Prisma.FieldRef<"cliente", 'String'>;
    readonly codigoPostal: Prisma.FieldRef<"cliente", 'String'>;
    readonly localidad: Prisma.FieldRef<"cliente", 'String'>;
    readonly provincia: Prisma.FieldRef<"cliente", 'String'>;
    readonly pais: Prisma.FieldRef<"cliente", 'String'>;
    readonly iban: Prisma.FieldRef<"cliente", 'String'>;
    readonly formaCobro: Prisma.FieldRef<"cliente", 'String'>;
    readonly plazoCobro: Prisma.FieldRef<"cliente", 'String'>;
    readonly observacionesCobro: Prisma.FieldRef<"cliente", 'String'>;
    readonly activo: Prisma.FieldRef<"cliente", 'Boolean'>;
    readonly observaciones: Prisma.FieldRef<"cliente", 'String'>;
    readonly createdAt: Prisma.FieldRef<"cliente", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"cliente", 'DateTime'>;
}
/**
 * cliente findUnique
 */
export type clienteFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: Prisma.clienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cliente
     */
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.clienteInclude<ExtArgs> | null;
    /**
     * Filter, which cliente to fetch.
     */
    where: Prisma.clienteWhereUniqueInput;
};
/**
 * cliente findUniqueOrThrow
 */
export type clienteFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: Prisma.clienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cliente
     */
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.clienteInclude<ExtArgs> | null;
    /**
     * Filter, which cliente to fetch.
     */
    where: Prisma.clienteWhereUniqueInput;
};
/**
 * cliente findFirst
 */
export type clienteFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: Prisma.clienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cliente
     */
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.clienteInclude<ExtArgs> | null;
    /**
     * Filter, which cliente to fetch.
     */
    where?: Prisma.clienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clientes to fetch.
     */
    orderBy?: Prisma.clienteOrderByWithRelationInput | Prisma.clienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for clientes.
     */
    cursor?: Prisma.clienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of clientes.
     */
    distinct?: Prisma.ClienteScalarFieldEnum | Prisma.ClienteScalarFieldEnum[];
};
/**
 * cliente findFirstOrThrow
 */
export type clienteFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: Prisma.clienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cliente
     */
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.clienteInclude<ExtArgs> | null;
    /**
     * Filter, which cliente to fetch.
     */
    where?: Prisma.clienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clientes to fetch.
     */
    orderBy?: Prisma.clienteOrderByWithRelationInput | Prisma.clienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for clientes.
     */
    cursor?: Prisma.clienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of clientes.
     */
    distinct?: Prisma.ClienteScalarFieldEnum | Prisma.ClienteScalarFieldEnum[];
};
/**
 * cliente findMany
 */
export type clienteFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: Prisma.clienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cliente
     */
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.clienteInclude<ExtArgs> | null;
    /**
     * Filter, which clientes to fetch.
     */
    where?: Prisma.clienteWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clientes to fetch.
     */
    orderBy?: Prisma.clienteOrderByWithRelationInput | Prisma.clienteOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing clientes.
     */
    cursor?: Prisma.clienteWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clientes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clientes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of clientes.
     */
    distinct?: Prisma.ClienteScalarFieldEnum | Prisma.ClienteScalarFieldEnum[];
};
/**
 * cliente create
 */
export type clienteCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: Prisma.clienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cliente
     */
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.clienteInclude<ExtArgs> | null;
    /**
     * The data needed to create a cliente.
     */
    data: Prisma.XOR<Prisma.clienteCreateInput, Prisma.clienteUncheckedCreateInput>;
};
/**
 * cliente createMany
 */
export type clienteCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many clientes.
     */
    data: Prisma.clienteCreateManyInput | Prisma.clienteCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * cliente update
 */
export type clienteUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: Prisma.clienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cliente
     */
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.clienteInclude<ExtArgs> | null;
    /**
     * The data needed to update a cliente.
     */
    data: Prisma.XOR<Prisma.clienteUpdateInput, Prisma.clienteUncheckedUpdateInput>;
    /**
     * Choose, which cliente to update.
     */
    where: Prisma.clienteWhereUniqueInput;
};
/**
 * cliente updateMany
 */
export type clienteUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update clientes.
     */
    data: Prisma.XOR<Prisma.clienteUpdateManyMutationInput, Prisma.clienteUncheckedUpdateManyInput>;
    /**
     * Filter which clientes to update
     */
    where?: Prisma.clienteWhereInput;
    /**
     * Limit how many clientes to update.
     */
    limit?: number;
};
/**
 * cliente upsert
 */
export type clienteUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: Prisma.clienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cliente
     */
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.clienteInclude<ExtArgs> | null;
    /**
     * The filter to search for the cliente to update in case it exists.
     */
    where: Prisma.clienteWhereUniqueInput;
    /**
     * In case the cliente found by the `where` argument doesn't exist, create a new cliente with this data.
     */
    create: Prisma.XOR<Prisma.clienteCreateInput, Prisma.clienteUncheckedCreateInput>;
    /**
     * In case the cliente was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.clienteUpdateInput, Prisma.clienteUncheckedUpdateInput>;
};
/**
 * cliente delete
 */
export type clienteDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: Prisma.clienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cliente
     */
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.clienteInclude<ExtArgs> | null;
    /**
     * Filter which cliente to delete.
     */
    where: Prisma.clienteWhereUniqueInput;
};
/**
 * cliente deleteMany
 */
export type clienteDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which clientes to delete
     */
    where?: Prisma.clienteWhereInput;
    /**
     * Limit how many clientes to delete.
     */
    limit?: number;
};
/**
 * cliente.cobro
 */
export type cliente$cobroArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * cliente.contratacion
 */
export type cliente$contratacionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.contratacionOrderByWithRelationInput | Prisma.contratacionOrderByWithRelationInput[];
    cursor?: Prisma.contratacionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContratacionScalarFieldEnum | Prisma.ContratacionScalarFieldEnum[];
};
/**
 * cliente.facturacliente
 */
export type cliente$facturaclienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * cliente without action
 */
export type clienteDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cliente
     */
    select?: Prisma.clienteSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cliente
     */
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.clienteInclude<ExtArgs> | null;
};
//# sourceMappingURL=cliente.d.ts.map