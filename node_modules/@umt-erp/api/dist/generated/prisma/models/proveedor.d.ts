import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model proveedor
 *
 */
export type proveedorModel = runtime.Types.Result.DefaultSelection<Prisma.$proveedorPayload>;
export type AggregateProveedor = {
    _count: ProveedorCountAggregateOutputType | null;
    _min: ProveedorMinAggregateOutputType | null;
    _max: ProveedorMaxAggregateOutputType | null;
};
export type ProveedorMinAggregateOutputType = {
    id: string | null;
    nombreRazonSocial: string | null;
    nifCif: string | null;
    tipoProveedor: string | null;
    personaContacto: string | null;
    telefono: string | null;
    email: string | null;
    direccionFiscal: string | null;
    codigoPostal: string | null;
    localidad: string | null;
    provincia: string | null;
    pais: string | null;
    iban: string | null;
    formaPago: string | null;
    plazoPago: string | null;
    observacionesPago: string | null;
    activo: boolean | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProveedorMaxAggregateOutputType = {
    id: string | null;
    nombreRazonSocial: string | null;
    nifCif: string | null;
    tipoProveedor: string | null;
    personaContacto: string | null;
    telefono: string | null;
    email: string | null;
    direccionFiscal: string | null;
    codigoPostal: string | null;
    localidad: string | null;
    provincia: string | null;
    pais: string | null;
    iban: string | null;
    formaPago: string | null;
    plazoPago: string | null;
    observacionesPago: string | null;
    activo: boolean | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProveedorCountAggregateOutputType = {
    id: number;
    nombreRazonSocial: number;
    nifCif: number;
    tipoProveedor: number;
    personaContacto: number;
    telefono: number;
    email: number;
    direccionFiscal: number;
    codigoPostal: number;
    localidad: number;
    provincia: number;
    pais: number;
    iban: number;
    formaPago: number;
    plazoPago: number;
    observacionesPago: number;
    activo: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProveedorMinAggregateInputType = {
    id?: true;
    nombreRazonSocial?: true;
    nifCif?: true;
    tipoProveedor?: true;
    personaContacto?: true;
    telefono?: true;
    email?: true;
    direccionFiscal?: true;
    codigoPostal?: true;
    localidad?: true;
    provincia?: true;
    pais?: true;
    iban?: true;
    formaPago?: true;
    plazoPago?: true;
    observacionesPago?: true;
    activo?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProveedorMaxAggregateInputType = {
    id?: true;
    nombreRazonSocial?: true;
    nifCif?: true;
    tipoProveedor?: true;
    personaContacto?: true;
    telefono?: true;
    email?: true;
    direccionFiscal?: true;
    codigoPostal?: true;
    localidad?: true;
    provincia?: true;
    pais?: true;
    iban?: true;
    formaPago?: true;
    plazoPago?: true;
    observacionesPago?: true;
    activo?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProveedorCountAggregateInputType = {
    id?: true;
    nombreRazonSocial?: true;
    nifCif?: true;
    tipoProveedor?: true;
    personaContacto?: true;
    telefono?: true;
    email?: true;
    direccionFiscal?: true;
    codigoPostal?: true;
    localidad?: true;
    provincia?: true;
    pais?: true;
    iban?: true;
    formaPago?: true;
    plazoPago?: true;
    observacionesPago?: true;
    activo?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProveedorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which proveedor to aggregate.
     */
    where?: Prisma.proveedorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of proveedors to fetch.
     */
    orderBy?: Prisma.proveedorOrderByWithRelationInput | Prisma.proveedorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.proveedorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` proveedors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` proveedors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned proveedors
    **/
    _count?: true | ProveedorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProveedorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProveedorMaxAggregateInputType;
};
export type GetProveedorAggregateType<T extends ProveedorAggregateArgs> = {
    [P in keyof T & keyof AggregateProveedor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProveedor[P]> : Prisma.GetScalarType<T[P], AggregateProveedor[P]>;
};
export type proveedorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.proveedorWhereInput;
    orderBy?: Prisma.proveedorOrderByWithAggregationInput | Prisma.proveedorOrderByWithAggregationInput[];
    by: Prisma.ProveedorScalarFieldEnum[] | Prisma.ProveedorScalarFieldEnum;
    having?: Prisma.proveedorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProveedorCountAggregateInputType | true;
    _min?: ProveedorMinAggregateInputType;
    _max?: ProveedorMaxAggregateInputType;
};
export type ProveedorGroupByOutputType = {
    id: string;
    nombreRazonSocial: string;
    nifCif: string | null;
    tipoProveedor: string | null;
    personaContacto: string | null;
    telefono: string | null;
    email: string | null;
    direccionFiscal: string | null;
    codigoPostal: string | null;
    localidad: string | null;
    provincia: string | null;
    pais: string | null;
    iban: string | null;
    formaPago: string | null;
    plazoPago: string | null;
    observacionesPago: string | null;
    activo: boolean;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ProveedorCountAggregateOutputType | null;
    _min: ProveedorMinAggregateOutputType | null;
    _max: ProveedorMaxAggregateOutputType | null;
};
export type GetProveedorGroupByPayload<T extends proveedorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProveedorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProveedorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProveedorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProveedorGroupByOutputType[P]>;
}>>;
export type proveedorWhereInput = {
    AND?: Prisma.proveedorWhereInput | Prisma.proveedorWhereInput[];
    OR?: Prisma.proveedorWhereInput[];
    NOT?: Prisma.proveedorWhereInput | Prisma.proveedorWhereInput[];
    id?: Prisma.StringFilter<"proveedor"> | string;
    nombreRazonSocial?: Prisma.StringFilter<"proveedor"> | string;
    nifCif?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    tipoProveedor?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    personaContacto?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    telefono?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    email?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    direccionFiscal?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    codigoPostal?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    localidad?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    provincia?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    pais?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    iban?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    formaPago?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    plazoPago?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    observacionesPago?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    activo?: Prisma.BoolFilter<"proveedor"> | boolean;
    observaciones?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"proveedor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"proveedor"> | Date | string;
    facturaproveedor?: Prisma.FacturaproveedorListRelationFilter;
    pago?: Prisma.PagoListRelationFilter;
};
export type proveedorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombreRazonSocial?: Prisma.SortOrder;
    nifCif?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipoProveedor?: Prisma.SortOrderInput | Prisma.SortOrder;
    personaContacto?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccionFiscal?: Prisma.SortOrderInput | Prisma.SortOrder;
    codigoPostal?: Prisma.SortOrderInput | Prisma.SortOrder;
    localidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    provincia?: Prisma.SortOrderInput | Prisma.SortOrder;
    pais?: Prisma.SortOrderInput | Prisma.SortOrder;
    iban?: Prisma.SortOrderInput | Prisma.SortOrder;
    formaPago?: Prisma.SortOrderInput | Prisma.SortOrder;
    plazoPago?: Prisma.SortOrderInput | Prisma.SortOrder;
    observacionesPago?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    facturaproveedor?: Prisma.facturaproveedorOrderByRelationAggregateInput;
    pago?: Prisma.pagoOrderByRelationAggregateInput;
    _relevance?: Prisma.proveedorOrderByRelevanceInput;
};
export type proveedorWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.proveedorWhereInput | Prisma.proveedorWhereInput[];
    OR?: Prisma.proveedorWhereInput[];
    NOT?: Prisma.proveedorWhereInput | Prisma.proveedorWhereInput[];
    nombreRazonSocial?: Prisma.StringFilter<"proveedor"> | string;
    nifCif?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    tipoProveedor?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    personaContacto?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    telefono?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    email?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    direccionFiscal?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    codigoPostal?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    localidad?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    provincia?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    pais?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    iban?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    formaPago?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    plazoPago?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    observacionesPago?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    activo?: Prisma.BoolFilter<"proveedor"> | boolean;
    observaciones?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"proveedor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"proveedor"> | Date | string;
    facturaproveedor?: Prisma.FacturaproveedorListRelationFilter;
    pago?: Prisma.PagoListRelationFilter;
}, "id">;
export type proveedorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombreRazonSocial?: Prisma.SortOrder;
    nifCif?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipoProveedor?: Prisma.SortOrderInput | Prisma.SortOrder;
    personaContacto?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccionFiscal?: Prisma.SortOrderInput | Prisma.SortOrder;
    codigoPostal?: Prisma.SortOrderInput | Prisma.SortOrder;
    localidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    provincia?: Prisma.SortOrderInput | Prisma.SortOrder;
    pais?: Prisma.SortOrderInput | Prisma.SortOrder;
    iban?: Prisma.SortOrderInput | Prisma.SortOrder;
    formaPago?: Prisma.SortOrderInput | Prisma.SortOrder;
    plazoPago?: Prisma.SortOrderInput | Prisma.SortOrder;
    observacionesPago?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.proveedorCountOrderByAggregateInput;
    _max?: Prisma.proveedorMaxOrderByAggregateInput;
    _min?: Prisma.proveedorMinOrderByAggregateInput;
};
export type proveedorScalarWhereWithAggregatesInput = {
    AND?: Prisma.proveedorScalarWhereWithAggregatesInput | Prisma.proveedorScalarWhereWithAggregatesInput[];
    OR?: Prisma.proveedorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.proveedorScalarWhereWithAggregatesInput | Prisma.proveedorScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"proveedor"> | string;
    nombreRazonSocial?: Prisma.StringWithAggregatesFilter<"proveedor"> | string;
    nifCif?: Prisma.StringNullableWithAggregatesFilter<"proveedor"> | string | null;
    tipoProveedor?: Prisma.StringNullableWithAggregatesFilter<"proveedor"> | string | null;
    personaContacto?: Prisma.StringNullableWithAggregatesFilter<"proveedor"> | string | null;
    telefono?: Prisma.StringNullableWithAggregatesFilter<"proveedor"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"proveedor"> | string | null;
    direccionFiscal?: Prisma.StringNullableWithAggregatesFilter<"proveedor"> | string | null;
    codigoPostal?: Prisma.StringNullableWithAggregatesFilter<"proveedor"> | string | null;
    localidad?: Prisma.StringNullableWithAggregatesFilter<"proveedor"> | string | null;
    provincia?: Prisma.StringNullableWithAggregatesFilter<"proveedor"> | string | null;
    pais?: Prisma.StringNullableWithAggregatesFilter<"proveedor"> | string | null;
    iban?: Prisma.StringNullableWithAggregatesFilter<"proveedor"> | string | null;
    formaPago?: Prisma.StringNullableWithAggregatesFilter<"proveedor"> | string | null;
    plazoPago?: Prisma.StringNullableWithAggregatesFilter<"proveedor"> | string | null;
    observacionesPago?: Prisma.StringNullableWithAggregatesFilter<"proveedor"> | string | null;
    activo?: Prisma.BoolWithAggregatesFilter<"proveedor"> | boolean;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"proveedor"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"proveedor"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"proveedor"> | Date | string;
};
export type proveedorCreateInput = {
    id: string;
    nombreRazonSocial: string;
    nifCif?: string | null;
    tipoProveedor?: string | null;
    personaContacto?: string | null;
    telefono?: string | null;
    email?: string | null;
    direccionFiscal?: string | null;
    codigoPostal?: string | null;
    localidad?: string | null;
    provincia?: string | null;
    pais?: string | null;
    iban?: string | null;
    formaPago?: string | null;
    plazoPago?: string | null;
    observacionesPago?: string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturaproveedor?: Prisma.facturaproveedorCreateNestedManyWithoutProveedorInput;
    pago?: Prisma.pagoCreateNestedManyWithoutProveedorInput;
};
export type proveedorUncheckedCreateInput = {
    id: string;
    nombreRazonSocial: string;
    nifCif?: string | null;
    tipoProveedor?: string | null;
    personaContacto?: string | null;
    telefono?: string | null;
    email?: string | null;
    direccionFiscal?: string | null;
    codigoPostal?: string | null;
    localidad?: string | null;
    provincia?: string | null;
    pais?: string | null;
    iban?: string | null;
    formaPago?: string | null;
    plazoPago?: string | null;
    observacionesPago?: string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturaproveedor?: Prisma.facturaproveedorUncheckedCreateNestedManyWithoutProveedorInput;
    pago?: Prisma.pagoUncheckedCreateNestedManyWithoutProveedorInput;
};
export type proveedorUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreRazonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    nifCif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipoProveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    personaContacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccionFiscal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoPostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provincia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pais?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formaPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plazoPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observacionesPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturaproveedor?: Prisma.facturaproveedorUpdateManyWithoutProveedorNestedInput;
    pago?: Prisma.pagoUpdateManyWithoutProveedorNestedInput;
};
export type proveedorUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreRazonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    nifCif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipoProveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    personaContacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccionFiscal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoPostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provincia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pais?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formaPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plazoPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observacionesPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturaproveedor?: Prisma.facturaproveedorUncheckedUpdateManyWithoutProveedorNestedInput;
    pago?: Prisma.pagoUncheckedUpdateManyWithoutProveedorNestedInput;
};
export type proveedorCreateManyInput = {
    id: string;
    nombreRazonSocial: string;
    nifCif?: string | null;
    tipoProveedor?: string | null;
    personaContacto?: string | null;
    telefono?: string | null;
    email?: string | null;
    direccionFiscal?: string | null;
    codigoPostal?: string | null;
    localidad?: string | null;
    provincia?: string | null;
    pais?: string | null;
    iban?: string | null;
    formaPago?: string | null;
    plazoPago?: string | null;
    observacionesPago?: string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type proveedorUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreRazonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    nifCif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipoProveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    personaContacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccionFiscal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoPostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provincia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pais?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formaPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plazoPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observacionesPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type proveedorUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreRazonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    nifCif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipoProveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    personaContacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccionFiscal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoPostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provincia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pais?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formaPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plazoPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observacionesPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProveedorScalarRelationFilter = {
    is?: Prisma.proveedorWhereInput;
    isNot?: Prisma.proveedorWhereInput;
};
export type proveedorOrderByRelevanceInput = {
    fields: Prisma.proveedorOrderByRelevanceFieldEnum | Prisma.proveedorOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type proveedorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombreRazonSocial?: Prisma.SortOrder;
    nifCif?: Prisma.SortOrder;
    tipoProveedor?: Prisma.SortOrder;
    personaContacto?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    direccionFiscal?: Prisma.SortOrder;
    codigoPostal?: Prisma.SortOrder;
    localidad?: Prisma.SortOrder;
    provincia?: Prisma.SortOrder;
    pais?: Prisma.SortOrder;
    iban?: Prisma.SortOrder;
    formaPago?: Prisma.SortOrder;
    plazoPago?: Prisma.SortOrder;
    observacionesPago?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type proveedorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombreRazonSocial?: Prisma.SortOrder;
    nifCif?: Prisma.SortOrder;
    tipoProveedor?: Prisma.SortOrder;
    personaContacto?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    direccionFiscal?: Prisma.SortOrder;
    codigoPostal?: Prisma.SortOrder;
    localidad?: Prisma.SortOrder;
    provincia?: Prisma.SortOrder;
    pais?: Prisma.SortOrder;
    iban?: Prisma.SortOrder;
    formaPago?: Prisma.SortOrder;
    plazoPago?: Prisma.SortOrder;
    observacionesPago?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type proveedorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombreRazonSocial?: Prisma.SortOrder;
    nifCif?: Prisma.SortOrder;
    tipoProveedor?: Prisma.SortOrder;
    personaContacto?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    direccionFiscal?: Prisma.SortOrder;
    codigoPostal?: Prisma.SortOrder;
    localidad?: Prisma.SortOrder;
    provincia?: Prisma.SortOrder;
    pais?: Prisma.SortOrder;
    iban?: Prisma.SortOrder;
    formaPago?: Prisma.SortOrder;
    plazoPago?: Prisma.SortOrder;
    observacionesPago?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type proveedorCreateNestedOneWithoutFacturaproveedorInput = {
    create?: Prisma.XOR<Prisma.proveedorCreateWithoutFacturaproveedorInput, Prisma.proveedorUncheckedCreateWithoutFacturaproveedorInput>;
    connectOrCreate?: Prisma.proveedorCreateOrConnectWithoutFacturaproveedorInput;
    connect?: Prisma.proveedorWhereUniqueInput;
};
export type proveedorUpdateOneRequiredWithoutFacturaproveedorNestedInput = {
    create?: Prisma.XOR<Prisma.proveedorCreateWithoutFacturaproveedorInput, Prisma.proveedorUncheckedCreateWithoutFacturaproveedorInput>;
    connectOrCreate?: Prisma.proveedorCreateOrConnectWithoutFacturaproveedorInput;
    upsert?: Prisma.proveedorUpsertWithoutFacturaproveedorInput;
    connect?: Prisma.proveedorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.proveedorUpdateToOneWithWhereWithoutFacturaproveedorInput, Prisma.proveedorUpdateWithoutFacturaproveedorInput>, Prisma.proveedorUncheckedUpdateWithoutFacturaproveedorInput>;
};
export type proveedorCreateNestedOneWithoutPagoInput = {
    create?: Prisma.XOR<Prisma.proveedorCreateWithoutPagoInput, Prisma.proveedorUncheckedCreateWithoutPagoInput>;
    connectOrCreate?: Prisma.proveedorCreateOrConnectWithoutPagoInput;
    connect?: Prisma.proveedorWhereUniqueInput;
};
export type proveedorUpdateOneRequiredWithoutPagoNestedInput = {
    create?: Prisma.XOR<Prisma.proveedorCreateWithoutPagoInput, Prisma.proveedorUncheckedCreateWithoutPagoInput>;
    connectOrCreate?: Prisma.proveedorCreateOrConnectWithoutPagoInput;
    upsert?: Prisma.proveedorUpsertWithoutPagoInput;
    connect?: Prisma.proveedorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.proveedorUpdateToOneWithWhereWithoutPagoInput, Prisma.proveedorUpdateWithoutPagoInput>, Prisma.proveedorUncheckedUpdateWithoutPagoInput>;
};
export type proveedorCreateWithoutFacturaproveedorInput = {
    id: string;
    nombreRazonSocial: string;
    nifCif?: string | null;
    tipoProveedor?: string | null;
    personaContacto?: string | null;
    telefono?: string | null;
    email?: string | null;
    direccionFiscal?: string | null;
    codigoPostal?: string | null;
    localidad?: string | null;
    provincia?: string | null;
    pais?: string | null;
    iban?: string | null;
    formaPago?: string | null;
    plazoPago?: string | null;
    observacionesPago?: string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    pago?: Prisma.pagoCreateNestedManyWithoutProveedorInput;
};
export type proveedorUncheckedCreateWithoutFacturaproveedorInput = {
    id: string;
    nombreRazonSocial: string;
    nifCif?: string | null;
    tipoProveedor?: string | null;
    personaContacto?: string | null;
    telefono?: string | null;
    email?: string | null;
    direccionFiscal?: string | null;
    codigoPostal?: string | null;
    localidad?: string | null;
    provincia?: string | null;
    pais?: string | null;
    iban?: string | null;
    formaPago?: string | null;
    plazoPago?: string | null;
    observacionesPago?: string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    pago?: Prisma.pagoUncheckedCreateNestedManyWithoutProveedorInput;
};
export type proveedorCreateOrConnectWithoutFacturaproveedorInput = {
    where: Prisma.proveedorWhereUniqueInput;
    create: Prisma.XOR<Prisma.proveedorCreateWithoutFacturaproveedorInput, Prisma.proveedorUncheckedCreateWithoutFacturaproveedorInput>;
};
export type proveedorUpsertWithoutFacturaproveedorInput = {
    update: Prisma.XOR<Prisma.proveedorUpdateWithoutFacturaproveedorInput, Prisma.proveedorUncheckedUpdateWithoutFacturaproveedorInput>;
    create: Prisma.XOR<Prisma.proveedorCreateWithoutFacturaproveedorInput, Prisma.proveedorUncheckedCreateWithoutFacturaproveedorInput>;
    where?: Prisma.proveedorWhereInput;
};
export type proveedorUpdateToOneWithWhereWithoutFacturaproveedorInput = {
    where?: Prisma.proveedorWhereInput;
    data: Prisma.XOR<Prisma.proveedorUpdateWithoutFacturaproveedorInput, Prisma.proveedorUncheckedUpdateWithoutFacturaproveedorInput>;
};
export type proveedorUpdateWithoutFacturaproveedorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreRazonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    nifCif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipoProveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    personaContacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccionFiscal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoPostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provincia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pais?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formaPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plazoPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observacionesPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pago?: Prisma.pagoUpdateManyWithoutProveedorNestedInput;
};
export type proveedorUncheckedUpdateWithoutFacturaproveedorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreRazonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    nifCif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipoProveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    personaContacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccionFiscal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoPostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provincia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pais?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formaPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plazoPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observacionesPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    pago?: Prisma.pagoUncheckedUpdateManyWithoutProveedorNestedInput;
};
export type proveedorCreateWithoutPagoInput = {
    id: string;
    nombreRazonSocial: string;
    nifCif?: string | null;
    tipoProveedor?: string | null;
    personaContacto?: string | null;
    telefono?: string | null;
    email?: string | null;
    direccionFiscal?: string | null;
    codigoPostal?: string | null;
    localidad?: string | null;
    provincia?: string | null;
    pais?: string | null;
    iban?: string | null;
    formaPago?: string | null;
    plazoPago?: string | null;
    observacionesPago?: string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturaproveedor?: Prisma.facturaproveedorCreateNestedManyWithoutProveedorInput;
};
export type proveedorUncheckedCreateWithoutPagoInput = {
    id: string;
    nombreRazonSocial: string;
    nifCif?: string | null;
    tipoProveedor?: string | null;
    personaContacto?: string | null;
    telefono?: string | null;
    email?: string | null;
    direccionFiscal?: string | null;
    codigoPostal?: string | null;
    localidad?: string | null;
    provincia?: string | null;
    pais?: string | null;
    iban?: string | null;
    formaPago?: string | null;
    plazoPago?: string | null;
    observacionesPago?: string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturaproveedor?: Prisma.facturaproveedorUncheckedCreateNestedManyWithoutProveedorInput;
};
export type proveedorCreateOrConnectWithoutPagoInput = {
    where: Prisma.proveedorWhereUniqueInput;
    create: Prisma.XOR<Prisma.proveedorCreateWithoutPagoInput, Prisma.proveedorUncheckedCreateWithoutPagoInput>;
};
export type proveedorUpsertWithoutPagoInput = {
    update: Prisma.XOR<Prisma.proveedorUpdateWithoutPagoInput, Prisma.proveedorUncheckedUpdateWithoutPagoInput>;
    create: Prisma.XOR<Prisma.proveedorCreateWithoutPagoInput, Prisma.proveedorUncheckedCreateWithoutPagoInput>;
    where?: Prisma.proveedorWhereInput;
};
export type proveedorUpdateToOneWithWhereWithoutPagoInput = {
    where?: Prisma.proveedorWhereInput;
    data: Prisma.XOR<Prisma.proveedorUpdateWithoutPagoInput, Prisma.proveedorUncheckedUpdateWithoutPagoInput>;
};
export type proveedorUpdateWithoutPagoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreRazonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    nifCif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipoProveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    personaContacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccionFiscal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoPostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provincia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pais?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formaPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plazoPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observacionesPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturaproveedor?: Prisma.facturaproveedorUpdateManyWithoutProveedorNestedInput;
};
export type proveedorUncheckedUpdateWithoutPagoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombreRazonSocial?: Prisma.StringFieldUpdateOperationsInput | string;
    nifCif?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipoProveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    personaContacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccionFiscal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    codigoPostal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    localidad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    provincia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pais?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    iban?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    formaPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plazoPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observacionesPago?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturaproveedor?: Prisma.facturaproveedorUncheckedUpdateManyWithoutProveedorNestedInput;
};
/**
 * Count Type ProveedorCountOutputType
 */
export type ProveedorCountOutputType = {
    facturaproveedor: number;
    pago: number;
};
export type ProveedorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    facturaproveedor?: boolean | ProveedorCountOutputTypeCountFacturaproveedorArgs;
    pago?: boolean | ProveedorCountOutputTypeCountPagoArgs;
};
/**
 * ProveedorCountOutputType without action
 */
export type ProveedorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProveedorCountOutputType
     */
    select?: Prisma.ProveedorCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProveedorCountOutputType without action
 */
export type ProveedorCountOutputTypeCountFacturaproveedorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaproveedorWhereInput;
};
/**
 * ProveedorCountOutputType without action
 */
export type ProveedorCountOutputTypeCountPagoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pagoWhereInput;
};
export type proveedorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombreRazonSocial?: boolean;
    nifCif?: boolean;
    tipoProveedor?: boolean;
    personaContacto?: boolean;
    telefono?: boolean;
    email?: boolean;
    direccionFiscal?: boolean;
    codigoPostal?: boolean;
    localidad?: boolean;
    provincia?: boolean;
    pais?: boolean;
    iban?: boolean;
    formaPago?: boolean;
    plazoPago?: boolean;
    observacionesPago?: boolean;
    activo?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    facturaproveedor?: boolean | Prisma.proveedor$facturaproveedorArgs<ExtArgs>;
    pago?: boolean | Prisma.proveedor$pagoArgs<ExtArgs>;
    _count?: boolean | Prisma.ProveedorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["proveedor"]>;
export type proveedorSelectScalar = {
    id?: boolean;
    nombreRazonSocial?: boolean;
    nifCif?: boolean;
    tipoProveedor?: boolean;
    personaContacto?: boolean;
    telefono?: boolean;
    email?: boolean;
    direccionFiscal?: boolean;
    codigoPostal?: boolean;
    localidad?: boolean;
    provincia?: boolean;
    pais?: boolean;
    iban?: boolean;
    formaPago?: boolean;
    plazoPago?: boolean;
    observacionesPago?: boolean;
    activo?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type proveedorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombreRazonSocial" | "nifCif" | "tipoProveedor" | "personaContacto" | "telefono" | "email" | "direccionFiscal" | "codigoPostal" | "localidad" | "provincia" | "pais" | "iban" | "formaPago" | "plazoPago" | "observacionesPago" | "activo" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["proveedor"]>;
export type proveedorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    facturaproveedor?: boolean | Prisma.proveedor$facturaproveedorArgs<ExtArgs>;
    pago?: boolean | Prisma.proveedor$pagoArgs<ExtArgs>;
    _count?: boolean | Prisma.ProveedorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $proveedorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "proveedor";
    objects: {
        facturaproveedor: Prisma.$facturaproveedorPayload<ExtArgs>[];
        pago: Prisma.$pagoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nombreRazonSocial: string;
        nifCif: string | null;
        tipoProveedor: string | null;
        personaContacto: string | null;
        telefono: string | null;
        email: string | null;
        direccionFiscal: string | null;
        codigoPostal: string | null;
        localidad: string | null;
        provincia: string | null;
        pais: string | null;
        iban: string | null;
        formaPago: string | null;
        plazoPago: string | null;
        observacionesPago: string | null;
        activo: boolean;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["proveedor"]>;
    composites: {};
};
export type proveedorGetPayload<S extends boolean | null | undefined | proveedorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$proveedorPayload, S>;
export type proveedorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<proveedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProveedorCountAggregateInputType | true;
};
export interface proveedorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['proveedor'];
        meta: {
            name: 'proveedor';
        };
    };
    /**
     * Find zero or one Proveedor that matches the filter.
     * @param {proveedorFindUniqueArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends proveedorFindUniqueArgs>(args: Prisma.SelectSubset<T, proveedorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__proveedorClient<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Proveedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {proveedorFindUniqueOrThrowArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends proveedorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, proveedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__proveedorClient<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Proveedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedorFindFirstArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends proveedorFindFirstArgs>(args?: Prisma.SelectSubset<T, proveedorFindFirstArgs<ExtArgs>>): Prisma.Prisma__proveedorClient<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Proveedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedorFindFirstOrThrowArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends proveedorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, proveedorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__proveedorClient<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Proveedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proveedors
     * const proveedors = await prisma.proveedor.findMany()
     *
     * // Get first 10 Proveedors
     * const proveedors = await prisma.proveedor.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const proveedorWithIdOnly = await prisma.proveedor.findMany({ select: { id: true } })
     *
     */
    findMany<T extends proveedorFindManyArgs>(args?: Prisma.SelectSubset<T, proveedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Proveedor.
     * @param {proveedorCreateArgs} args - Arguments to create a Proveedor.
     * @example
     * // Create one Proveedor
     * const Proveedor = await prisma.proveedor.create({
     *   data: {
     *     // ... data to create a Proveedor
     *   }
     * })
     *
     */
    create<T extends proveedorCreateArgs>(args: Prisma.SelectSubset<T, proveedorCreateArgs<ExtArgs>>): Prisma.Prisma__proveedorClient<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Proveedors.
     * @param {proveedorCreateManyArgs} args - Arguments to create many Proveedors.
     * @example
     * // Create many Proveedors
     * const proveedor = await prisma.proveedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends proveedorCreateManyArgs>(args?: Prisma.SelectSubset<T, proveedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Proveedor.
     * @param {proveedorDeleteArgs} args - Arguments to delete one Proveedor.
     * @example
     * // Delete one Proveedor
     * const Proveedor = await prisma.proveedor.delete({
     *   where: {
     *     // ... filter to delete one Proveedor
     *   }
     * })
     *
     */
    delete<T extends proveedorDeleteArgs>(args: Prisma.SelectSubset<T, proveedorDeleteArgs<ExtArgs>>): Prisma.Prisma__proveedorClient<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Proveedor.
     * @param {proveedorUpdateArgs} args - Arguments to update one Proveedor.
     * @example
     * // Update one Proveedor
     * const proveedor = await prisma.proveedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends proveedorUpdateArgs>(args: Prisma.SelectSubset<T, proveedorUpdateArgs<ExtArgs>>): Prisma.Prisma__proveedorClient<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Proveedors.
     * @param {proveedorDeleteManyArgs} args - Arguments to filter Proveedors to delete.
     * @example
     * // Delete a few Proveedors
     * const { count } = await prisma.proveedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends proveedorDeleteManyArgs>(args?: Prisma.SelectSubset<T, proveedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Proveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proveedors
     * const proveedor = await prisma.proveedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends proveedorUpdateManyArgs>(args: Prisma.SelectSubset<T, proveedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Proveedor.
     * @param {proveedorUpsertArgs} args - Arguments to update or create a Proveedor.
     * @example
     * // Update or create a Proveedor
     * const proveedor = await prisma.proveedor.upsert({
     *   create: {
     *     // ... data to create a Proveedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proveedor we want to update
     *   }
     * })
     */
    upsert<T extends proveedorUpsertArgs>(args: Prisma.SelectSubset<T, proveedorUpsertArgs<ExtArgs>>): Prisma.Prisma__proveedorClient<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Proveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedorCountArgs} args - Arguments to filter Proveedors to count.
     * @example
     * // Count the number of Proveedors
     * const count = await prisma.proveedor.count({
     *   where: {
     *     // ... the filter for the Proveedors we want to count
     *   }
     * })
    **/
    count<T extends proveedorCountArgs>(args?: Prisma.Subset<T, proveedorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProveedorCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Proveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProveedorAggregateArgs>(args: Prisma.Subset<T, ProveedorAggregateArgs>): Prisma.PrismaPromise<GetProveedorAggregateType<T>>;
    /**
     * Group by Proveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {proveedorGroupByArgs} args - Group by arguments.
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
    groupBy<T extends proveedorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: proveedorGroupByArgs['orderBy'];
    } : {
        orderBy?: proveedorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, proveedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProveedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the proveedor model
     */
    readonly fields: proveedorFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for proveedor.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__proveedorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    facturaproveedor<T extends Prisma.proveedor$facturaproveedorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.proveedor$facturaproveedorArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturaproveedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    pago<T extends Prisma.proveedor$pagoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.proveedor$pagoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the proveedor model
 */
export interface proveedorFieldRefs {
    readonly id: Prisma.FieldRef<"proveedor", 'String'>;
    readonly nombreRazonSocial: Prisma.FieldRef<"proveedor", 'String'>;
    readonly nifCif: Prisma.FieldRef<"proveedor", 'String'>;
    readonly tipoProveedor: Prisma.FieldRef<"proveedor", 'String'>;
    readonly personaContacto: Prisma.FieldRef<"proveedor", 'String'>;
    readonly telefono: Prisma.FieldRef<"proveedor", 'String'>;
    readonly email: Prisma.FieldRef<"proveedor", 'String'>;
    readonly direccionFiscal: Prisma.FieldRef<"proveedor", 'String'>;
    readonly codigoPostal: Prisma.FieldRef<"proveedor", 'String'>;
    readonly localidad: Prisma.FieldRef<"proveedor", 'String'>;
    readonly provincia: Prisma.FieldRef<"proveedor", 'String'>;
    readonly pais: Prisma.FieldRef<"proveedor", 'String'>;
    readonly iban: Prisma.FieldRef<"proveedor", 'String'>;
    readonly formaPago: Prisma.FieldRef<"proveedor", 'String'>;
    readonly plazoPago: Prisma.FieldRef<"proveedor", 'String'>;
    readonly observacionesPago: Prisma.FieldRef<"proveedor", 'String'>;
    readonly activo: Prisma.FieldRef<"proveedor", 'Boolean'>;
    readonly observaciones: Prisma.FieldRef<"proveedor", 'String'>;
    readonly createdAt: Prisma.FieldRef<"proveedor", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"proveedor", 'DateTime'>;
}
/**
 * proveedor findUnique
 */
export type proveedorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: Prisma.proveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the proveedor
     */
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proveedorInclude<ExtArgs> | null;
    /**
     * Filter, which proveedor to fetch.
     */
    where: Prisma.proveedorWhereUniqueInput;
};
/**
 * proveedor findUniqueOrThrow
 */
export type proveedorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: Prisma.proveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the proveedor
     */
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proveedorInclude<ExtArgs> | null;
    /**
     * Filter, which proveedor to fetch.
     */
    where: Prisma.proveedorWhereUniqueInput;
};
/**
 * proveedor findFirst
 */
export type proveedorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: Prisma.proveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the proveedor
     */
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proveedorInclude<ExtArgs> | null;
    /**
     * Filter, which proveedor to fetch.
     */
    where?: Prisma.proveedorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of proveedors to fetch.
     */
    orderBy?: Prisma.proveedorOrderByWithRelationInput | Prisma.proveedorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for proveedors.
     */
    cursor?: Prisma.proveedorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` proveedors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` proveedors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of proveedors.
     */
    distinct?: Prisma.ProveedorScalarFieldEnum | Prisma.ProveedorScalarFieldEnum[];
};
/**
 * proveedor findFirstOrThrow
 */
export type proveedorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: Prisma.proveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the proveedor
     */
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proveedorInclude<ExtArgs> | null;
    /**
     * Filter, which proveedor to fetch.
     */
    where?: Prisma.proveedorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of proveedors to fetch.
     */
    orderBy?: Prisma.proveedorOrderByWithRelationInput | Prisma.proveedorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for proveedors.
     */
    cursor?: Prisma.proveedorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` proveedors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` proveedors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of proveedors.
     */
    distinct?: Prisma.ProveedorScalarFieldEnum | Prisma.ProveedorScalarFieldEnum[];
};
/**
 * proveedor findMany
 */
export type proveedorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: Prisma.proveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the proveedor
     */
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proveedorInclude<ExtArgs> | null;
    /**
     * Filter, which proveedors to fetch.
     */
    where?: Prisma.proveedorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of proveedors to fetch.
     */
    orderBy?: Prisma.proveedorOrderByWithRelationInput | Prisma.proveedorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing proveedors.
     */
    cursor?: Prisma.proveedorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` proveedors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` proveedors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of proveedors.
     */
    distinct?: Prisma.ProveedorScalarFieldEnum | Prisma.ProveedorScalarFieldEnum[];
};
/**
 * proveedor create
 */
export type proveedorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: Prisma.proveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the proveedor
     */
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proveedorInclude<ExtArgs> | null;
    /**
     * The data needed to create a proveedor.
     */
    data: Prisma.XOR<Prisma.proveedorCreateInput, Prisma.proveedorUncheckedCreateInput>;
};
/**
 * proveedor createMany
 */
export type proveedorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many proveedors.
     */
    data: Prisma.proveedorCreateManyInput | Prisma.proveedorCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * proveedor update
 */
export type proveedorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: Prisma.proveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the proveedor
     */
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proveedorInclude<ExtArgs> | null;
    /**
     * The data needed to update a proveedor.
     */
    data: Prisma.XOR<Prisma.proveedorUpdateInput, Prisma.proveedorUncheckedUpdateInput>;
    /**
     * Choose, which proveedor to update.
     */
    where: Prisma.proveedorWhereUniqueInput;
};
/**
 * proveedor updateMany
 */
export type proveedorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update proveedors.
     */
    data: Prisma.XOR<Prisma.proveedorUpdateManyMutationInput, Prisma.proveedorUncheckedUpdateManyInput>;
    /**
     * Filter which proveedors to update
     */
    where?: Prisma.proveedorWhereInput;
    /**
     * Limit how many proveedors to update.
     */
    limit?: number;
};
/**
 * proveedor upsert
 */
export type proveedorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: Prisma.proveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the proveedor
     */
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proveedorInclude<ExtArgs> | null;
    /**
     * The filter to search for the proveedor to update in case it exists.
     */
    where: Prisma.proveedorWhereUniqueInput;
    /**
     * In case the proveedor found by the `where` argument doesn't exist, create a new proveedor with this data.
     */
    create: Prisma.XOR<Prisma.proveedorCreateInput, Prisma.proveedorUncheckedCreateInput>;
    /**
     * In case the proveedor was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.proveedorUpdateInput, Prisma.proveedorUncheckedUpdateInput>;
};
/**
 * proveedor delete
 */
export type proveedorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: Prisma.proveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the proveedor
     */
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proveedorInclude<ExtArgs> | null;
    /**
     * Filter which proveedor to delete.
     */
    where: Prisma.proveedorWhereUniqueInput;
};
/**
 * proveedor deleteMany
 */
export type proveedorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which proveedors to delete
     */
    where?: Prisma.proveedorWhereInput;
    /**
     * Limit how many proveedors to delete.
     */
    limit?: number;
};
/**
 * proveedor.facturaproveedor
 */
export type proveedor$facturaproveedorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * proveedor.pago
 */
export type proveedor$pagoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * proveedor without action
 */
export type proveedorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the proveedor
     */
    select?: Prisma.proveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the proveedor
     */
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.proveedorInclude<ExtArgs> | null;
};
//# sourceMappingURL=proveedor.d.ts.map