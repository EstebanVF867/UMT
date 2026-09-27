import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model centroanalitico
 *
 */
export type centroanaliticoModel = runtime.Types.Result.DefaultSelection<Prisma.$centroanaliticoPayload>;
export type AggregateCentroanalitico = {
    _count: CentroanaliticoCountAggregateOutputType | null;
    _min: CentroanaliticoMinAggregateOutputType | null;
    _max: CentroanaliticoMaxAggregateOutputType | null;
};
export type CentroanaliticoMinAggregateOutputType = {
    id: string | null;
    codigo: string | null;
    nombre: string | null;
    descripcion: string | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CentroanaliticoMaxAggregateOutputType = {
    id: string | null;
    codigo: string | null;
    nombre: string | null;
    descripcion: string | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CentroanaliticoCountAggregateOutputType = {
    id: number;
    codigo: number;
    nombre: number;
    descripcion: number;
    activo: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CentroanaliticoMinAggregateInputType = {
    id?: true;
    codigo?: true;
    nombre?: true;
    descripcion?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CentroanaliticoMaxAggregateInputType = {
    id?: true;
    codigo?: true;
    nombre?: true;
    descripcion?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CentroanaliticoCountAggregateInputType = {
    id?: true;
    codigo?: true;
    nombre?: true;
    descripcion?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CentroanaliticoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which centroanalitico to aggregate.
     */
    where?: Prisma.centroanaliticoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of centroanaliticos to fetch.
     */
    orderBy?: Prisma.centroanaliticoOrderByWithRelationInput | Prisma.centroanaliticoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.centroanaliticoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` centroanaliticos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` centroanaliticos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned centroanaliticos
    **/
    _count?: true | CentroanaliticoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CentroanaliticoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CentroanaliticoMaxAggregateInputType;
};
export type GetCentroanaliticoAggregateType<T extends CentroanaliticoAggregateArgs> = {
    [P in keyof T & keyof AggregateCentroanalitico]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCentroanalitico[P]> : Prisma.GetScalarType<T[P], AggregateCentroanalitico[P]>;
};
export type centroanaliticoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.centroanaliticoWhereInput;
    orderBy?: Prisma.centroanaliticoOrderByWithAggregationInput | Prisma.centroanaliticoOrderByWithAggregationInput[];
    by: Prisma.CentroanaliticoScalarFieldEnum[] | Prisma.CentroanaliticoScalarFieldEnum;
    having?: Prisma.centroanaliticoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CentroanaliticoCountAggregateInputType | true;
    _min?: CentroanaliticoMinAggregateInputType;
    _max?: CentroanaliticoMaxAggregateInputType;
};
export type CentroanaliticoGroupByOutputType = {
    id: string;
    codigo: string;
    nombre: string;
    descripcion: string | null;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: CentroanaliticoCountAggregateOutputType | null;
    _min: CentroanaliticoMinAggregateOutputType | null;
    _max: CentroanaliticoMaxAggregateOutputType | null;
};
export type GetCentroanaliticoGroupByPayload<T extends centroanaliticoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CentroanaliticoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CentroanaliticoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CentroanaliticoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CentroanaliticoGroupByOutputType[P]>;
}>>;
export type centroanaliticoWhereInput = {
    AND?: Prisma.centroanaliticoWhereInput | Prisma.centroanaliticoWhereInput[];
    OR?: Prisma.centroanaliticoWhereInput[];
    NOT?: Prisma.centroanaliticoWhereInput | Prisma.centroanaliticoWhereInput[];
    id?: Prisma.StringFilter<"centroanalitico"> | string;
    codigo?: Prisma.StringFilter<"centroanalitico"> | string;
    nombre?: Prisma.StringFilter<"centroanalitico"> | string;
    descripcion?: Prisma.StringNullableFilter<"centroanalitico"> | string | null;
    activo?: Prisma.BoolFilter<"centroanalitico"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"centroanalitico"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"centroanalitico"> | Date | string;
    facturacliente?: Prisma.FacturaclienteListRelationFilter;
    facturaproveedor?: Prisma.FacturaproveedorListRelationFilter;
    lineaasiento?: Prisma.LineaasientoListRelationFilter;
};
export type centroanaliticoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    facturacliente?: Prisma.facturaclienteOrderByRelationAggregateInput;
    facturaproveedor?: Prisma.facturaproveedorOrderByRelationAggregateInput;
    lineaasiento?: Prisma.lineaasientoOrderByRelationAggregateInput;
    _relevance?: Prisma.centroanaliticoOrderByRelevanceInput;
};
export type centroanaliticoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    codigo?: string;
    AND?: Prisma.centroanaliticoWhereInput | Prisma.centroanaliticoWhereInput[];
    OR?: Prisma.centroanaliticoWhereInput[];
    NOT?: Prisma.centroanaliticoWhereInput | Prisma.centroanaliticoWhereInput[];
    nombre?: Prisma.StringFilter<"centroanalitico"> | string;
    descripcion?: Prisma.StringNullableFilter<"centroanalitico"> | string | null;
    activo?: Prisma.BoolFilter<"centroanalitico"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"centroanalitico"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"centroanalitico"> | Date | string;
    facturacliente?: Prisma.FacturaclienteListRelationFilter;
    facturaproveedor?: Prisma.FacturaproveedorListRelationFilter;
    lineaasiento?: Prisma.LineaasientoListRelationFilter;
}, "id" | "codigo">;
export type centroanaliticoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.centroanaliticoCountOrderByAggregateInput;
    _max?: Prisma.centroanaliticoMaxOrderByAggregateInput;
    _min?: Prisma.centroanaliticoMinOrderByAggregateInput;
};
export type centroanaliticoScalarWhereWithAggregatesInput = {
    AND?: Prisma.centroanaliticoScalarWhereWithAggregatesInput | Prisma.centroanaliticoScalarWhereWithAggregatesInput[];
    OR?: Prisma.centroanaliticoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.centroanaliticoScalarWhereWithAggregatesInput | Prisma.centroanaliticoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"centroanalitico"> | string;
    codigo?: Prisma.StringWithAggregatesFilter<"centroanalitico"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"centroanalitico"> | string;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"centroanalitico"> | string | null;
    activo?: Prisma.BoolWithAggregatesFilter<"centroanalitico"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"centroanalitico"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"centroanalitico"> | Date | string;
};
export type centroanaliticoCreateInput = {
    id: string;
    codigo: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturacliente?: Prisma.facturaclienteCreateNestedManyWithoutCentroanaliticoInput;
    facturaproveedor?: Prisma.facturaproveedorCreateNestedManyWithoutCentroanaliticoInput;
    lineaasiento?: Prisma.lineaasientoCreateNestedManyWithoutCentroanaliticoInput;
};
export type centroanaliticoUncheckedCreateInput = {
    id: string;
    codigo: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturacliente?: Prisma.facturaclienteUncheckedCreateNestedManyWithoutCentroanaliticoInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedCreateNestedManyWithoutCentroanaliticoInput;
    lineaasiento?: Prisma.lineaasientoUncheckedCreateNestedManyWithoutCentroanaliticoInput;
};
export type centroanaliticoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturacliente?: Prisma.facturaclienteUpdateManyWithoutCentroanaliticoNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUpdateManyWithoutCentroanaliticoNestedInput;
    lineaasiento?: Prisma.lineaasientoUpdateManyWithoutCentroanaliticoNestedInput;
};
export type centroanaliticoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturacliente?: Prisma.facturaclienteUncheckedUpdateManyWithoutCentroanaliticoNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedUpdateManyWithoutCentroanaliticoNestedInput;
    lineaasiento?: Prisma.lineaasientoUncheckedUpdateManyWithoutCentroanaliticoNestedInput;
};
export type centroanaliticoCreateManyInput = {
    id: string;
    codigo: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type centroanaliticoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type centroanaliticoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type centroanaliticoOrderByRelevanceInput = {
    fields: Prisma.centroanaliticoOrderByRelevanceFieldEnum | Prisma.centroanaliticoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type centroanaliticoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type centroanaliticoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type centroanaliticoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CentroanaliticoNullableScalarRelationFilter = {
    is?: Prisma.centroanaliticoWhereInput | null;
    isNot?: Prisma.centroanaliticoWhereInput | null;
};
export type centroanaliticoCreateNestedOneWithoutFacturaclienteInput = {
    create?: Prisma.XOR<Prisma.centroanaliticoCreateWithoutFacturaclienteInput, Prisma.centroanaliticoUncheckedCreateWithoutFacturaclienteInput>;
    connectOrCreate?: Prisma.centroanaliticoCreateOrConnectWithoutFacturaclienteInput;
    connect?: Prisma.centroanaliticoWhereUniqueInput;
};
export type centroanaliticoUpdateOneWithoutFacturaclienteNestedInput = {
    create?: Prisma.XOR<Prisma.centroanaliticoCreateWithoutFacturaclienteInput, Prisma.centroanaliticoUncheckedCreateWithoutFacturaclienteInput>;
    connectOrCreate?: Prisma.centroanaliticoCreateOrConnectWithoutFacturaclienteInput;
    upsert?: Prisma.centroanaliticoUpsertWithoutFacturaclienteInput;
    disconnect?: Prisma.centroanaliticoWhereInput | boolean;
    delete?: Prisma.centroanaliticoWhereInput | boolean;
    connect?: Prisma.centroanaliticoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.centroanaliticoUpdateToOneWithWhereWithoutFacturaclienteInput, Prisma.centroanaliticoUpdateWithoutFacturaclienteInput>, Prisma.centroanaliticoUncheckedUpdateWithoutFacturaclienteInput>;
};
export type centroanaliticoCreateNestedOneWithoutFacturaproveedorInput = {
    create?: Prisma.XOR<Prisma.centroanaliticoCreateWithoutFacturaproveedorInput, Prisma.centroanaliticoUncheckedCreateWithoutFacturaproveedorInput>;
    connectOrCreate?: Prisma.centroanaliticoCreateOrConnectWithoutFacturaproveedorInput;
    connect?: Prisma.centroanaliticoWhereUniqueInput;
};
export type centroanaliticoUpdateOneWithoutFacturaproveedorNestedInput = {
    create?: Prisma.XOR<Prisma.centroanaliticoCreateWithoutFacturaproveedorInput, Prisma.centroanaliticoUncheckedCreateWithoutFacturaproveedorInput>;
    connectOrCreate?: Prisma.centroanaliticoCreateOrConnectWithoutFacturaproveedorInput;
    upsert?: Prisma.centroanaliticoUpsertWithoutFacturaproveedorInput;
    disconnect?: Prisma.centroanaliticoWhereInput | boolean;
    delete?: Prisma.centroanaliticoWhereInput | boolean;
    connect?: Prisma.centroanaliticoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.centroanaliticoUpdateToOneWithWhereWithoutFacturaproveedorInput, Prisma.centroanaliticoUpdateWithoutFacturaproveedorInput>, Prisma.centroanaliticoUncheckedUpdateWithoutFacturaproveedorInput>;
};
export type centroanaliticoCreateNestedOneWithoutLineaasientoInput = {
    create?: Prisma.XOR<Prisma.centroanaliticoCreateWithoutLineaasientoInput, Prisma.centroanaliticoUncheckedCreateWithoutLineaasientoInput>;
    connectOrCreate?: Prisma.centroanaliticoCreateOrConnectWithoutLineaasientoInput;
    connect?: Prisma.centroanaliticoWhereUniqueInput;
};
export type centroanaliticoUpdateOneWithoutLineaasientoNestedInput = {
    create?: Prisma.XOR<Prisma.centroanaliticoCreateWithoutLineaasientoInput, Prisma.centroanaliticoUncheckedCreateWithoutLineaasientoInput>;
    connectOrCreate?: Prisma.centroanaliticoCreateOrConnectWithoutLineaasientoInput;
    upsert?: Prisma.centroanaliticoUpsertWithoutLineaasientoInput;
    disconnect?: Prisma.centroanaliticoWhereInput | boolean;
    delete?: Prisma.centroanaliticoWhereInput | boolean;
    connect?: Prisma.centroanaliticoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.centroanaliticoUpdateToOneWithWhereWithoutLineaasientoInput, Prisma.centroanaliticoUpdateWithoutLineaasientoInput>, Prisma.centroanaliticoUncheckedUpdateWithoutLineaasientoInput>;
};
export type centroanaliticoCreateWithoutFacturaclienteInput = {
    id: string;
    codigo: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturaproveedor?: Prisma.facturaproveedorCreateNestedManyWithoutCentroanaliticoInput;
    lineaasiento?: Prisma.lineaasientoCreateNestedManyWithoutCentroanaliticoInput;
};
export type centroanaliticoUncheckedCreateWithoutFacturaclienteInput = {
    id: string;
    codigo: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturaproveedor?: Prisma.facturaproveedorUncheckedCreateNestedManyWithoutCentroanaliticoInput;
    lineaasiento?: Prisma.lineaasientoUncheckedCreateNestedManyWithoutCentroanaliticoInput;
};
export type centroanaliticoCreateOrConnectWithoutFacturaclienteInput = {
    where: Prisma.centroanaliticoWhereUniqueInput;
    create: Prisma.XOR<Prisma.centroanaliticoCreateWithoutFacturaclienteInput, Prisma.centroanaliticoUncheckedCreateWithoutFacturaclienteInput>;
};
export type centroanaliticoUpsertWithoutFacturaclienteInput = {
    update: Prisma.XOR<Prisma.centroanaliticoUpdateWithoutFacturaclienteInput, Prisma.centroanaliticoUncheckedUpdateWithoutFacturaclienteInput>;
    create: Prisma.XOR<Prisma.centroanaliticoCreateWithoutFacturaclienteInput, Prisma.centroanaliticoUncheckedCreateWithoutFacturaclienteInput>;
    where?: Prisma.centroanaliticoWhereInput;
};
export type centroanaliticoUpdateToOneWithWhereWithoutFacturaclienteInput = {
    where?: Prisma.centroanaliticoWhereInput;
    data: Prisma.XOR<Prisma.centroanaliticoUpdateWithoutFacturaclienteInput, Prisma.centroanaliticoUncheckedUpdateWithoutFacturaclienteInput>;
};
export type centroanaliticoUpdateWithoutFacturaclienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturaproveedor?: Prisma.facturaproveedorUpdateManyWithoutCentroanaliticoNestedInput;
    lineaasiento?: Prisma.lineaasientoUpdateManyWithoutCentroanaliticoNestedInput;
};
export type centroanaliticoUncheckedUpdateWithoutFacturaclienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturaproveedor?: Prisma.facturaproveedorUncheckedUpdateManyWithoutCentroanaliticoNestedInput;
    lineaasiento?: Prisma.lineaasientoUncheckedUpdateManyWithoutCentroanaliticoNestedInput;
};
export type centroanaliticoCreateWithoutFacturaproveedorInput = {
    id: string;
    codigo: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturacliente?: Prisma.facturaclienteCreateNestedManyWithoutCentroanaliticoInput;
    lineaasiento?: Prisma.lineaasientoCreateNestedManyWithoutCentroanaliticoInput;
};
export type centroanaliticoUncheckedCreateWithoutFacturaproveedorInput = {
    id: string;
    codigo: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturacliente?: Prisma.facturaclienteUncheckedCreateNestedManyWithoutCentroanaliticoInput;
    lineaasiento?: Prisma.lineaasientoUncheckedCreateNestedManyWithoutCentroanaliticoInput;
};
export type centroanaliticoCreateOrConnectWithoutFacturaproveedorInput = {
    where: Prisma.centroanaliticoWhereUniqueInput;
    create: Prisma.XOR<Prisma.centroanaliticoCreateWithoutFacturaproveedorInput, Prisma.centroanaliticoUncheckedCreateWithoutFacturaproveedorInput>;
};
export type centroanaliticoUpsertWithoutFacturaproveedorInput = {
    update: Prisma.XOR<Prisma.centroanaliticoUpdateWithoutFacturaproveedorInput, Prisma.centroanaliticoUncheckedUpdateWithoutFacturaproveedorInput>;
    create: Prisma.XOR<Prisma.centroanaliticoCreateWithoutFacturaproveedorInput, Prisma.centroanaliticoUncheckedCreateWithoutFacturaproveedorInput>;
    where?: Prisma.centroanaliticoWhereInput;
};
export type centroanaliticoUpdateToOneWithWhereWithoutFacturaproveedorInput = {
    where?: Prisma.centroanaliticoWhereInput;
    data: Prisma.XOR<Prisma.centroanaliticoUpdateWithoutFacturaproveedorInput, Prisma.centroanaliticoUncheckedUpdateWithoutFacturaproveedorInput>;
};
export type centroanaliticoUpdateWithoutFacturaproveedorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturacliente?: Prisma.facturaclienteUpdateManyWithoutCentroanaliticoNestedInput;
    lineaasiento?: Prisma.lineaasientoUpdateManyWithoutCentroanaliticoNestedInput;
};
export type centroanaliticoUncheckedUpdateWithoutFacturaproveedorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturacliente?: Prisma.facturaclienteUncheckedUpdateManyWithoutCentroanaliticoNestedInput;
    lineaasiento?: Prisma.lineaasientoUncheckedUpdateManyWithoutCentroanaliticoNestedInput;
};
export type centroanaliticoCreateWithoutLineaasientoInput = {
    id: string;
    codigo: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturacliente?: Prisma.facturaclienteCreateNestedManyWithoutCentroanaliticoInput;
    facturaproveedor?: Prisma.facturaproveedorCreateNestedManyWithoutCentroanaliticoInput;
};
export type centroanaliticoUncheckedCreateWithoutLineaasientoInput = {
    id: string;
    codigo: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturacliente?: Prisma.facturaclienteUncheckedCreateNestedManyWithoutCentroanaliticoInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedCreateNestedManyWithoutCentroanaliticoInput;
};
export type centroanaliticoCreateOrConnectWithoutLineaasientoInput = {
    where: Prisma.centroanaliticoWhereUniqueInput;
    create: Prisma.XOR<Prisma.centroanaliticoCreateWithoutLineaasientoInput, Prisma.centroanaliticoUncheckedCreateWithoutLineaasientoInput>;
};
export type centroanaliticoUpsertWithoutLineaasientoInput = {
    update: Prisma.XOR<Prisma.centroanaliticoUpdateWithoutLineaasientoInput, Prisma.centroanaliticoUncheckedUpdateWithoutLineaasientoInput>;
    create: Prisma.XOR<Prisma.centroanaliticoCreateWithoutLineaasientoInput, Prisma.centroanaliticoUncheckedCreateWithoutLineaasientoInput>;
    where?: Prisma.centroanaliticoWhereInput;
};
export type centroanaliticoUpdateToOneWithWhereWithoutLineaasientoInput = {
    where?: Prisma.centroanaliticoWhereInput;
    data: Prisma.XOR<Prisma.centroanaliticoUpdateWithoutLineaasientoInput, Prisma.centroanaliticoUncheckedUpdateWithoutLineaasientoInput>;
};
export type centroanaliticoUpdateWithoutLineaasientoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturacliente?: Prisma.facturaclienteUpdateManyWithoutCentroanaliticoNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUpdateManyWithoutCentroanaliticoNestedInput;
};
export type centroanaliticoUncheckedUpdateWithoutLineaasientoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturacliente?: Prisma.facturaclienteUncheckedUpdateManyWithoutCentroanaliticoNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedUpdateManyWithoutCentroanaliticoNestedInput;
};
/**
 * Count Type CentroanaliticoCountOutputType
 */
export type CentroanaliticoCountOutputType = {
    facturacliente: number;
    facturaproveedor: number;
    lineaasiento: number;
};
export type CentroanaliticoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    facturacliente?: boolean | CentroanaliticoCountOutputTypeCountFacturaclienteArgs;
    facturaproveedor?: boolean | CentroanaliticoCountOutputTypeCountFacturaproveedorArgs;
    lineaasiento?: boolean | CentroanaliticoCountOutputTypeCountLineaasientoArgs;
};
/**
 * CentroanaliticoCountOutputType without action
 */
export type CentroanaliticoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CentroanaliticoCountOutputType
     */
    select?: Prisma.CentroanaliticoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CentroanaliticoCountOutputType without action
 */
export type CentroanaliticoCountOutputTypeCountFacturaclienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaclienteWhereInput;
};
/**
 * CentroanaliticoCountOutputType without action
 */
export type CentroanaliticoCountOutputTypeCountFacturaproveedorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaproveedorWhereInput;
};
/**
 * CentroanaliticoCountOutputType without action
 */
export type CentroanaliticoCountOutputTypeCountLineaasientoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lineaasientoWhereInput;
};
export type centroanaliticoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    codigo?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    facturacliente?: boolean | Prisma.centroanalitico$facturaclienteArgs<ExtArgs>;
    facturaproveedor?: boolean | Prisma.centroanalitico$facturaproveedorArgs<ExtArgs>;
    lineaasiento?: boolean | Prisma.centroanalitico$lineaasientoArgs<ExtArgs>;
    _count?: boolean | Prisma.CentroanaliticoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["centroanalitico"]>;
export type centroanaliticoSelectScalar = {
    id?: boolean;
    codigo?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type centroanaliticoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "codigo" | "nombre" | "descripcion" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["centroanalitico"]>;
export type centroanaliticoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    facturacliente?: boolean | Prisma.centroanalitico$facturaclienteArgs<ExtArgs>;
    facturaproveedor?: boolean | Prisma.centroanalitico$facturaproveedorArgs<ExtArgs>;
    lineaasiento?: boolean | Prisma.centroanalitico$lineaasientoArgs<ExtArgs>;
    _count?: boolean | Prisma.CentroanaliticoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $centroanaliticoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "centroanalitico";
    objects: {
        facturacliente: Prisma.$facturaclientePayload<ExtArgs>[];
        facturaproveedor: Prisma.$facturaproveedorPayload<ExtArgs>[];
        lineaasiento: Prisma.$lineaasientoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        codigo: string;
        nombre: string;
        descripcion: string | null;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["centroanalitico"]>;
    composites: {};
};
export type centroanaliticoGetPayload<S extends boolean | null | undefined | centroanaliticoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$centroanaliticoPayload, S>;
export type centroanaliticoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<centroanaliticoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CentroanaliticoCountAggregateInputType | true;
};
export interface centroanaliticoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['centroanalitico'];
        meta: {
            name: 'centroanalitico';
        };
    };
    /**
     * Find zero or one Centroanalitico that matches the filter.
     * @param {centroanaliticoFindUniqueArgs} args - Arguments to find a Centroanalitico
     * @example
     * // Get one Centroanalitico
     * const centroanalitico = await prisma.centroanalitico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends centroanaliticoFindUniqueArgs>(args: Prisma.SelectSubset<T, centroanaliticoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__centroanaliticoClient<runtime.Types.Result.GetResult<Prisma.$centroanaliticoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Centroanalitico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {centroanaliticoFindUniqueOrThrowArgs} args - Arguments to find a Centroanalitico
     * @example
     * // Get one Centroanalitico
     * const centroanalitico = await prisma.centroanalitico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends centroanaliticoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, centroanaliticoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__centroanaliticoClient<runtime.Types.Result.GetResult<Prisma.$centroanaliticoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Centroanalitico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centroanaliticoFindFirstArgs} args - Arguments to find a Centroanalitico
     * @example
     * // Get one Centroanalitico
     * const centroanalitico = await prisma.centroanalitico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends centroanaliticoFindFirstArgs>(args?: Prisma.SelectSubset<T, centroanaliticoFindFirstArgs<ExtArgs>>): Prisma.Prisma__centroanaliticoClient<runtime.Types.Result.GetResult<Prisma.$centroanaliticoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Centroanalitico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centroanaliticoFindFirstOrThrowArgs} args - Arguments to find a Centroanalitico
     * @example
     * // Get one Centroanalitico
     * const centroanalitico = await prisma.centroanalitico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends centroanaliticoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, centroanaliticoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__centroanaliticoClient<runtime.Types.Result.GetResult<Prisma.$centroanaliticoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Centroanaliticos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centroanaliticoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Centroanaliticos
     * const centroanaliticos = await prisma.centroanalitico.findMany()
     *
     * // Get first 10 Centroanaliticos
     * const centroanaliticos = await prisma.centroanalitico.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const centroanaliticoWithIdOnly = await prisma.centroanalitico.findMany({ select: { id: true } })
     *
     */
    findMany<T extends centroanaliticoFindManyArgs>(args?: Prisma.SelectSubset<T, centroanaliticoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$centroanaliticoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Centroanalitico.
     * @param {centroanaliticoCreateArgs} args - Arguments to create a Centroanalitico.
     * @example
     * // Create one Centroanalitico
     * const Centroanalitico = await prisma.centroanalitico.create({
     *   data: {
     *     // ... data to create a Centroanalitico
     *   }
     * })
     *
     */
    create<T extends centroanaliticoCreateArgs>(args: Prisma.SelectSubset<T, centroanaliticoCreateArgs<ExtArgs>>): Prisma.Prisma__centroanaliticoClient<runtime.Types.Result.GetResult<Prisma.$centroanaliticoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Centroanaliticos.
     * @param {centroanaliticoCreateManyArgs} args - Arguments to create many Centroanaliticos.
     * @example
     * // Create many Centroanaliticos
     * const centroanalitico = await prisma.centroanalitico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends centroanaliticoCreateManyArgs>(args?: Prisma.SelectSubset<T, centroanaliticoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Centroanalitico.
     * @param {centroanaliticoDeleteArgs} args - Arguments to delete one Centroanalitico.
     * @example
     * // Delete one Centroanalitico
     * const Centroanalitico = await prisma.centroanalitico.delete({
     *   where: {
     *     // ... filter to delete one Centroanalitico
     *   }
     * })
     *
     */
    delete<T extends centroanaliticoDeleteArgs>(args: Prisma.SelectSubset<T, centroanaliticoDeleteArgs<ExtArgs>>): Prisma.Prisma__centroanaliticoClient<runtime.Types.Result.GetResult<Prisma.$centroanaliticoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Centroanalitico.
     * @param {centroanaliticoUpdateArgs} args - Arguments to update one Centroanalitico.
     * @example
     * // Update one Centroanalitico
     * const centroanalitico = await prisma.centroanalitico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends centroanaliticoUpdateArgs>(args: Prisma.SelectSubset<T, centroanaliticoUpdateArgs<ExtArgs>>): Prisma.Prisma__centroanaliticoClient<runtime.Types.Result.GetResult<Prisma.$centroanaliticoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Centroanaliticos.
     * @param {centroanaliticoDeleteManyArgs} args - Arguments to filter Centroanaliticos to delete.
     * @example
     * // Delete a few Centroanaliticos
     * const { count } = await prisma.centroanalitico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends centroanaliticoDeleteManyArgs>(args?: Prisma.SelectSubset<T, centroanaliticoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Centroanaliticos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centroanaliticoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Centroanaliticos
     * const centroanalitico = await prisma.centroanalitico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends centroanaliticoUpdateManyArgs>(args: Prisma.SelectSubset<T, centroanaliticoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Centroanalitico.
     * @param {centroanaliticoUpsertArgs} args - Arguments to update or create a Centroanalitico.
     * @example
     * // Update or create a Centroanalitico
     * const centroanalitico = await prisma.centroanalitico.upsert({
     *   create: {
     *     // ... data to create a Centroanalitico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Centroanalitico we want to update
     *   }
     * })
     */
    upsert<T extends centroanaliticoUpsertArgs>(args: Prisma.SelectSubset<T, centroanaliticoUpsertArgs<ExtArgs>>): Prisma.Prisma__centroanaliticoClient<runtime.Types.Result.GetResult<Prisma.$centroanaliticoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Centroanaliticos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centroanaliticoCountArgs} args - Arguments to filter Centroanaliticos to count.
     * @example
     * // Count the number of Centroanaliticos
     * const count = await prisma.centroanalitico.count({
     *   where: {
     *     // ... the filter for the Centroanaliticos we want to count
     *   }
     * })
    **/
    count<T extends centroanaliticoCountArgs>(args?: Prisma.Subset<T, centroanaliticoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CentroanaliticoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Centroanalitico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CentroanaliticoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CentroanaliticoAggregateArgs>(args: Prisma.Subset<T, CentroanaliticoAggregateArgs>): Prisma.PrismaPromise<GetCentroanaliticoAggregateType<T>>;
    /**
     * Group by Centroanalitico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {centroanaliticoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends centroanaliticoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: centroanaliticoGroupByArgs['orderBy'];
    } : {
        orderBy?: centroanaliticoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, centroanaliticoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCentroanaliticoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the centroanalitico model
     */
    readonly fields: centroanaliticoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for centroanalitico.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__centroanaliticoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    facturacliente<T extends Prisma.centroanalitico$facturaclienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.centroanalitico$facturaclienteArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturaclientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    facturaproveedor<T extends Prisma.centroanalitico$facturaproveedorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.centroanalitico$facturaproveedorArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturaproveedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    lineaasiento<T extends Prisma.centroanalitico$lineaasientoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.centroanalitico$lineaasientoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lineaasientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the centroanalitico model
 */
export interface centroanaliticoFieldRefs {
    readonly id: Prisma.FieldRef<"centroanalitico", 'String'>;
    readonly codigo: Prisma.FieldRef<"centroanalitico", 'String'>;
    readonly nombre: Prisma.FieldRef<"centroanalitico", 'String'>;
    readonly descripcion: Prisma.FieldRef<"centroanalitico", 'String'>;
    readonly activo: Prisma.FieldRef<"centroanalitico", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"centroanalitico", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"centroanalitico", 'DateTime'>;
}
/**
 * centroanalitico findUnique
 */
export type centroanaliticoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which centroanalitico to fetch.
     */
    where: Prisma.centroanaliticoWhereUniqueInput;
};
/**
 * centroanalitico findUniqueOrThrow
 */
export type centroanaliticoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which centroanalitico to fetch.
     */
    where: Prisma.centroanaliticoWhereUniqueInput;
};
/**
 * centroanalitico findFirst
 */
export type centroanaliticoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which centroanalitico to fetch.
     */
    where?: Prisma.centroanaliticoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of centroanaliticos to fetch.
     */
    orderBy?: Prisma.centroanaliticoOrderByWithRelationInput | Prisma.centroanaliticoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for centroanaliticos.
     */
    cursor?: Prisma.centroanaliticoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` centroanaliticos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` centroanaliticos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of centroanaliticos.
     */
    distinct?: Prisma.CentroanaliticoScalarFieldEnum | Prisma.CentroanaliticoScalarFieldEnum[];
};
/**
 * centroanalitico findFirstOrThrow
 */
export type centroanaliticoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which centroanalitico to fetch.
     */
    where?: Prisma.centroanaliticoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of centroanaliticos to fetch.
     */
    orderBy?: Prisma.centroanaliticoOrderByWithRelationInput | Prisma.centroanaliticoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for centroanaliticos.
     */
    cursor?: Prisma.centroanaliticoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` centroanaliticos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` centroanaliticos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of centroanaliticos.
     */
    distinct?: Prisma.CentroanaliticoScalarFieldEnum | Prisma.CentroanaliticoScalarFieldEnum[];
};
/**
 * centroanalitico findMany
 */
export type centroanaliticoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which centroanaliticos to fetch.
     */
    where?: Prisma.centroanaliticoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of centroanaliticos to fetch.
     */
    orderBy?: Prisma.centroanaliticoOrderByWithRelationInput | Prisma.centroanaliticoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing centroanaliticos.
     */
    cursor?: Prisma.centroanaliticoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` centroanaliticos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` centroanaliticos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of centroanaliticos.
     */
    distinct?: Prisma.CentroanaliticoScalarFieldEnum | Prisma.CentroanaliticoScalarFieldEnum[];
};
/**
 * centroanalitico create
 */
export type centroanaliticoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a centroanalitico.
     */
    data: Prisma.XOR<Prisma.centroanaliticoCreateInput, Prisma.centroanaliticoUncheckedCreateInput>;
};
/**
 * centroanalitico createMany
 */
export type centroanaliticoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many centroanaliticos.
     */
    data: Prisma.centroanaliticoCreateManyInput | Prisma.centroanaliticoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * centroanalitico update
 */
export type centroanaliticoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a centroanalitico.
     */
    data: Prisma.XOR<Prisma.centroanaliticoUpdateInput, Prisma.centroanaliticoUncheckedUpdateInput>;
    /**
     * Choose, which centroanalitico to update.
     */
    where: Prisma.centroanaliticoWhereUniqueInput;
};
/**
 * centroanalitico updateMany
 */
export type centroanaliticoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update centroanaliticos.
     */
    data: Prisma.XOR<Prisma.centroanaliticoUpdateManyMutationInput, Prisma.centroanaliticoUncheckedUpdateManyInput>;
    /**
     * Filter which centroanaliticos to update
     */
    where?: Prisma.centroanaliticoWhereInput;
    /**
     * Limit how many centroanaliticos to update.
     */
    limit?: number;
};
/**
 * centroanalitico upsert
 */
export type centroanaliticoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the centroanalitico to update in case it exists.
     */
    where: Prisma.centroanaliticoWhereUniqueInput;
    /**
     * In case the centroanalitico found by the `where` argument doesn't exist, create a new centroanalitico with this data.
     */
    create: Prisma.XOR<Prisma.centroanaliticoCreateInput, Prisma.centroanaliticoUncheckedCreateInput>;
    /**
     * In case the centroanalitico was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.centroanaliticoUpdateInput, Prisma.centroanaliticoUncheckedUpdateInput>;
};
/**
 * centroanalitico delete
 */
export type centroanaliticoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which centroanalitico to delete.
     */
    where: Prisma.centroanaliticoWhereUniqueInput;
};
/**
 * centroanalitico deleteMany
 */
export type centroanaliticoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which centroanaliticos to delete
     */
    where?: Prisma.centroanaliticoWhereInput;
    /**
     * Limit how many centroanaliticos to delete.
     */
    limit?: number;
};
/**
 * centroanalitico.facturacliente
 */
export type centroanalitico$facturaclienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * centroanalitico.facturaproveedor
 */
export type centroanalitico$facturaproveedorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * centroanalitico.lineaasiento
 */
export type centroanalitico$lineaasientoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * centroanalitico without action
 */
export type centroanaliticoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=centroanalitico.d.ts.map