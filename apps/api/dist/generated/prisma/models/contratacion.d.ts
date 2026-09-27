import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model contratacion
 *
 */
export type contratacionModel = runtime.Types.Result.DefaultSelection<Prisma.$contratacionPayload>;
export type AggregateContratacion = {
    _count: ContratacionCountAggregateOutputType | null;
    _avg: ContratacionAvgAggregateOutputType | null;
    _sum: ContratacionSumAggregateOutputType | null;
    _min: ContratacionMinAggregateOutputType | null;
    _max: ContratacionMaxAggregateOutputType | null;
};
export type ContratacionAvgAggregateOutputType = {
    importeAcordado: runtime.Decimal | null;
};
export type ContratacionSumAggregateOutputType = {
    importeAcordado: runtime.Decimal | null;
};
export type ContratacionMinAggregateOutputType = {
    id: string | null;
    clienteId: string | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    descripcion: string | null;
    importeAcordado: runtime.Decimal | null;
    estado: string | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ContratacionMaxAggregateOutputType = {
    id: string | null;
    clienteId: string | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    descripcion: string | null;
    importeAcordado: runtime.Decimal | null;
    estado: string | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ContratacionCountAggregateOutputType = {
    id: number;
    clienteId: number;
    fechaInicio: number;
    fechaFin: number;
    descripcion: number;
    importeAcordado: number;
    estado: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ContratacionAvgAggregateInputType = {
    importeAcordado?: true;
};
export type ContratacionSumAggregateInputType = {
    importeAcordado?: true;
};
export type ContratacionMinAggregateInputType = {
    id?: true;
    clienteId?: true;
    fechaInicio?: true;
    fechaFin?: true;
    descripcion?: true;
    importeAcordado?: true;
    estado?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ContratacionMaxAggregateInputType = {
    id?: true;
    clienteId?: true;
    fechaInicio?: true;
    fechaFin?: true;
    descripcion?: true;
    importeAcordado?: true;
    estado?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ContratacionCountAggregateInputType = {
    id?: true;
    clienteId?: true;
    fechaInicio?: true;
    fechaFin?: true;
    descripcion?: true;
    importeAcordado?: true;
    estado?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ContratacionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which contratacion to aggregate.
     */
    where?: Prisma.contratacionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contratacions to fetch.
     */
    orderBy?: Prisma.contratacionOrderByWithRelationInput | Prisma.contratacionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.contratacionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contratacions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contratacions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned contratacions
    **/
    _count?: true | ContratacionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ContratacionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ContratacionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ContratacionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ContratacionMaxAggregateInputType;
};
export type GetContratacionAggregateType<T extends ContratacionAggregateArgs> = {
    [P in keyof T & keyof AggregateContratacion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContratacion[P]> : Prisma.GetScalarType<T[P], AggregateContratacion[P]>;
};
export type contratacionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contratacionWhereInput;
    orderBy?: Prisma.contratacionOrderByWithAggregationInput | Prisma.contratacionOrderByWithAggregationInput[];
    by: Prisma.ContratacionScalarFieldEnum[] | Prisma.ContratacionScalarFieldEnum;
    having?: Prisma.contratacionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContratacionCountAggregateInputType | true;
    _avg?: ContratacionAvgAggregateInputType;
    _sum?: ContratacionSumAggregateInputType;
    _min?: ContratacionMinAggregateInputType;
    _max?: ContratacionMaxAggregateInputType;
};
export type ContratacionGroupByOutputType = {
    id: string;
    clienteId: string;
    fechaInicio: Date;
    fechaFin: Date | null;
    descripcion: string;
    importeAcordado: runtime.Decimal | null;
    estado: string;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ContratacionCountAggregateOutputType | null;
    _avg: ContratacionAvgAggregateOutputType | null;
    _sum: ContratacionSumAggregateOutputType | null;
    _min: ContratacionMinAggregateOutputType | null;
    _max: ContratacionMaxAggregateOutputType | null;
};
export type GetContratacionGroupByPayload<T extends contratacionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContratacionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContratacionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContratacionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContratacionGroupByOutputType[P]>;
}>>;
export type contratacionWhereInput = {
    AND?: Prisma.contratacionWhereInput | Prisma.contratacionWhereInput[];
    OR?: Prisma.contratacionWhereInput[];
    NOT?: Prisma.contratacionWhereInput | Prisma.contratacionWhereInput[];
    id?: Prisma.StringFilter<"contratacion"> | string;
    clienteId?: Prisma.StringFilter<"contratacion"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"contratacion"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"contratacion"> | Date | string | null;
    descripcion?: Prisma.StringFilter<"contratacion"> | string;
    importeAcordado?: Prisma.DecimalNullableFilter<"contratacion"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFilter<"contratacion"> | string;
    observaciones?: Prisma.StringNullableFilter<"contratacion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"contratacion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"contratacion"> | Date | string;
    actuacion?: Prisma.ActuacionListRelationFilter;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.clienteWhereInput>;
    facturacliente?: Prisma.FacturaclienteListRelationFilter;
};
export type contratacionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    importeAcordado?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    actuacion?: Prisma.actuacionOrderByRelationAggregateInput;
    cliente?: Prisma.clienteOrderByWithRelationInput;
    facturacliente?: Prisma.facturaclienteOrderByRelationAggregateInput;
    _relevance?: Prisma.contratacionOrderByRelevanceInput;
};
export type contratacionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.contratacionWhereInput | Prisma.contratacionWhereInput[];
    OR?: Prisma.contratacionWhereInput[];
    NOT?: Prisma.contratacionWhereInput | Prisma.contratacionWhereInput[];
    clienteId?: Prisma.StringFilter<"contratacion"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"contratacion"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"contratacion"> | Date | string | null;
    descripcion?: Prisma.StringFilter<"contratacion"> | string;
    importeAcordado?: Prisma.DecimalNullableFilter<"contratacion"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFilter<"contratacion"> | string;
    observaciones?: Prisma.StringNullableFilter<"contratacion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"contratacion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"contratacion"> | Date | string;
    actuacion?: Prisma.ActuacionListRelationFilter;
    cliente?: Prisma.XOR<Prisma.ClienteScalarRelationFilter, Prisma.clienteWhereInput>;
    facturacliente?: Prisma.FacturaclienteListRelationFilter;
}, "id">;
export type contratacionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    importeAcordado?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.contratacionCountOrderByAggregateInput;
    _avg?: Prisma.contratacionAvgOrderByAggregateInput;
    _max?: Prisma.contratacionMaxOrderByAggregateInput;
    _min?: Prisma.contratacionMinOrderByAggregateInput;
    _sum?: Prisma.contratacionSumOrderByAggregateInput;
};
export type contratacionScalarWhereWithAggregatesInput = {
    AND?: Prisma.contratacionScalarWhereWithAggregatesInput | Prisma.contratacionScalarWhereWithAggregatesInput[];
    OR?: Prisma.contratacionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.contratacionScalarWhereWithAggregatesInput | Prisma.contratacionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"contratacion"> | string;
    clienteId?: Prisma.StringWithAggregatesFilter<"contratacion"> | string;
    fechaInicio?: Prisma.DateTimeWithAggregatesFilter<"contratacion"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableWithAggregatesFilter<"contratacion"> | Date | string | null;
    descripcion?: Prisma.StringWithAggregatesFilter<"contratacion"> | string;
    importeAcordado?: Prisma.DecimalNullableWithAggregatesFilter<"contratacion"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringWithAggregatesFilter<"contratacion"> | string;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"contratacion"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"contratacion"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"contratacion"> | Date | string;
};
export type contratacionCreateInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    descripcion: string;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado: string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionCreateNestedManyWithoutContratacionInput;
    cliente: Prisma.clienteCreateNestedOneWithoutContratacionInput;
    facturacliente?: Prisma.facturaclienteCreateNestedManyWithoutContratacionInput;
};
export type contratacionUncheckedCreateInput = {
    id: string;
    clienteId: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    descripcion: string;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado: string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionUncheckedCreateNestedManyWithoutContratacionInput;
    facturacliente?: Prisma.facturaclienteUncheckedCreateNestedManyWithoutContratacionInput;
};
export type contratacionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUpdateManyWithoutContratacionNestedInput;
    cliente?: Prisma.clienteUpdateOneRequiredWithoutContratacionNestedInput;
    facturacliente?: Prisma.facturaclienteUpdateManyWithoutContratacionNestedInput;
};
export type contratacionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUncheckedUpdateManyWithoutContratacionNestedInput;
    facturacliente?: Prisma.facturaclienteUncheckedUpdateManyWithoutContratacionNestedInput;
};
export type contratacionCreateManyInput = {
    id: string;
    clienteId: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    descripcion: string;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado: string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type contratacionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type contratacionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContratacionNullableScalarRelationFilter = {
    is?: Prisma.contratacionWhereInput | null;
    isNot?: Prisma.contratacionWhereInput | null;
};
export type ContratacionListRelationFilter = {
    every?: Prisma.contratacionWhereInput;
    some?: Prisma.contratacionWhereInput;
    none?: Prisma.contratacionWhereInput;
};
export type contratacionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type contratacionOrderByRelevanceInput = {
    fields: Prisma.contratacionOrderByRelevanceFieldEnum | Prisma.contratacionOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type contratacionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    importeAcordado?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type contratacionAvgOrderByAggregateInput = {
    importeAcordado?: Prisma.SortOrder;
};
export type contratacionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    importeAcordado?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type contratacionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    clienteId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    importeAcordado?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type contratacionSumOrderByAggregateInput = {
    importeAcordado?: Prisma.SortOrder;
};
export type contratacionCreateNestedOneWithoutActuacionInput = {
    create?: Prisma.XOR<Prisma.contratacionCreateWithoutActuacionInput, Prisma.contratacionUncheckedCreateWithoutActuacionInput>;
    connectOrCreate?: Prisma.contratacionCreateOrConnectWithoutActuacionInput;
    connect?: Prisma.contratacionWhereUniqueInput;
};
export type contratacionUpdateOneWithoutActuacionNestedInput = {
    create?: Prisma.XOR<Prisma.contratacionCreateWithoutActuacionInput, Prisma.contratacionUncheckedCreateWithoutActuacionInput>;
    connectOrCreate?: Prisma.contratacionCreateOrConnectWithoutActuacionInput;
    upsert?: Prisma.contratacionUpsertWithoutActuacionInput;
    disconnect?: Prisma.contratacionWhereInput | boolean;
    delete?: Prisma.contratacionWhereInput | boolean;
    connect?: Prisma.contratacionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.contratacionUpdateToOneWithWhereWithoutActuacionInput, Prisma.contratacionUpdateWithoutActuacionInput>, Prisma.contratacionUncheckedUpdateWithoutActuacionInput>;
};
export type contratacionCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.contratacionCreateWithoutClienteInput, Prisma.contratacionUncheckedCreateWithoutClienteInput> | Prisma.contratacionCreateWithoutClienteInput[] | Prisma.contratacionUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.contratacionCreateOrConnectWithoutClienteInput | Prisma.contratacionCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.contratacionCreateManyClienteInputEnvelope;
    connect?: Prisma.contratacionWhereUniqueInput | Prisma.contratacionWhereUniqueInput[];
};
export type contratacionUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.contratacionCreateWithoutClienteInput, Prisma.contratacionUncheckedCreateWithoutClienteInput> | Prisma.contratacionCreateWithoutClienteInput[] | Prisma.contratacionUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.contratacionCreateOrConnectWithoutClienteInput | Prisma.contratacionCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.contratacionCreateManyClienteInputEnvelope;
    connect?: Prisma.contratacionWhereUniqueInput | Prisma.contratacionWhereUniqueInput[];
};
export type contratacionUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.contratacionCreateWithoutClienteInput, Prisma.contratacionUncheckedCreateWithoutClienteInput> | Prisma.contratacionCreateWithoutClienteInput[] | Prisma.contratacionUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.contratacionCreateOrConnectWithoutClienteInput | Prisma.contratacionCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.contratacionUpsertWithWhereUniqueWithoutClienteInput | Prisma.contratacionUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.contratacionCreateManyClienteInputEnvelope;
    set?: Prisma.contratacionWhereUniqueInput | Prisma.contratacionWhereUniqueInput[];
    disconnect?: Prisma.contratacionWhereUniqueInput | Prisma.contratacionWhereUniqueInput[];
    delete?: Prisma.contratacionWhereUniqueInput | Prisma.contratacionWhereUniqueInput[];
    connect?: Prisma.contratacionWhereUniqueInput | Prisma.contratacionWhereUniqueInput[];
    update?: Prisma.contratacionUpdateWithWhereUniqueWithoutClienteInput | Prisma.contratacionUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.contratacionUpdateManyWithWhereWithoutClienteInput | Prisma.contratacionUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.contratacionScalarWhereInput | Prisma.contratacionScalarWhereInput[];
};
export type contratacionUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.contratacionCreateWithoutClienteInput, Prisma.contratacionUncheckedCreateWithoutClienteInput> | Prisma.contratacionCreateWithoutClienteInput[] | Prisma.contratacionUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.contratacionCreateOrConnectWithoutClienteInput | Prisma.contratacionCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.contratacionUpsertWithWhereUniqueWithoutClienteInput | Prisma.contratacionUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.contratacionCreateManyClienteInputEnvelope;
    set?: Prisma.contratacionWhereUniqueInput | Prisma.contratacionWhereUniqueInput[];
    disconnect?: Prisma.contratacionWhereUniqueInput | Prisma.contratacionWhereUniqueInput[];
    delete?: Prisma.contratacionWhereUniqueInput | Prisma.contratacionWhereUniqueInput[];
    connect?: Prisma.contratacionWhereUniqueInput | Prisma.contratacionWhereUniqueInput[];
    update?: Prisma.contratacionUpdateWithWhereUniqueWithoutClienteInput | Prisma.contratacionUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.contratacionUpdateManyWithWhereWithoutClienteInput | Prisma.contratacionUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.contratacionScalarWhereInput | Prisma.contratacionScalarWhereInput[];
};
export type contratacionCreateNestedOneWithoutFacturaclienteInput = {
    create?: Prisma.XOR<Prisma.contratacionCreateWithoutFacturaclienteInput, Prisma.contratacionUncheckedCreateWithoutFacturaclienteInput>;
    connectOrCreate?: Prisma.contratacionCreateOrConnectWithoutFacturaclienteInput;
    connect?: Prisma.contratacionWhereUniqueInput;
};
export type contratacionUpdateOneWithoutFacturaclienteNestedInput = {
    create?: Prisma.XOR<Prisma.contratacionCreateWithoutFacturaclienteInput, Prisma.contratacionUncheckedCreateWithoutFacturaclienteInput>;
    connectOrCreate?: Prisma.contratacionCreateOrConnectWithoutFacturaclienteInput;
    upsert?: Prisma.contratacionUpsertWithoutFacturaclienteInput;
    disconnect?: Prisma.contratacionWhereInput | boolean;
    delete?: Prisma.contratacionWhereInput | boolean;
    connect?: Prisma.contratacionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.contratacionUpdateToOneWithWhereWithoutFacturaclienteInput, Prisma.contratacionUpdateWithoutFacturaclienteInput>, Prisma.contratacionUncheckedUpdateWithoutFacturaclienteInput>;
};
export type contratacionCreateWithoutActuacionInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    descripcion: string;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado: string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cliente: Prisma.clienteCreateNestedOneWithoutContratacionInput;
    facturacliente?: Prisma.facturaclienteCreateNestedManyWithoutContratacionInput;
};
export type contratacionUncheckedCreateWithoutActuacionInput = {
    id: string;
    clienteId: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    descripcion: string;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado: string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    facturacliente?: Prisma.facturaclienteUncheckedCreateNestedManyWithoutContratacionInput;
};
export type contratacionCreateOrConnectWithoutActuacionInput = {
    where: Prisma.contratacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.contratacionCreateWithoutActuacionInput, Prisma.contratacionUncheckedCreateWithoutActuacionInput>;
};
export type contratacionUpsertWithoutActuacionInput = {
    update: Prisma.XOR<Prisma.contratacionUpdateWithoutActuacionInput, Prisma.contratacionUncheckedUpdateWithoutActuacionInput>;
    create: Prisma.XOR<Prisma.contratacionCreateWithoutActuacionInput, Prisma.contratacionUncheckedCreateWithoutActuacionInput>;
    where?: Prisma.contratacionWhereInput;
};
export type contratacionUpdateToOneWithWhereWithoutActuacionInput = {
    where?: Prisma.contratacionWhereInput;
    data: Prisma.XOR<Prisma.contratacionUpdateWithoutActuacionInput, Prisma.contratacionUncheckedUpdateWithoutActuacionInput>;
};
export type contratacionUpdateWithoutActuacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.clienteUpdateOneRequiredWithoutContratacionNestedInput;
    facturacliente?: Prisma.facturaclienteUpdateManyWithoutContratacionNestedInput;
};
export type contratacionUncheckedUpdateWithoutActuacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facturacliente?: Prisma.facturaclienteUncheckedUpdateManyWithoutContratacionNestedInput;
};
export type contratacionCreateWithoutClienteInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    descripcion: string;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado: string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionCreateNestedManyWithoutContratacionInput;
    facturacliente?: Prisma.facturaclienteCreateNestedManyWithoutContratacionInput;
};
export type contratacionUncheckedCreateWithoutClienteInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    descripcion: string;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado: string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionUncheckedCreateNestedManyWithoutContratacionInput;
    facturacliente?: Prisma.facturaclienteUncheckedCreateNestedManyWithoutContratacionInput;
};
export type contratacionCreateOrConnectWithoutClienteInput = {
    where: Prisma.contratacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.contratacionCreateWithoutClienteInput, Prisma.contratacionUncheckedCreateWithoutClienteInput>;
};
export type contratacionCreateManyClienteInputEnvelope = {
    data: Prisma.contratacionCreateManyClienteInput | Prisma.contratacionCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type contratacionUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.contratacionWhereUniqueInput;
    update: Prisma.XOR<Prisma.contratacionUpdateWithoutClienteInput, Prisma.contratacionUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.contratacionCreateWithoutClienteInput, Prisma.contratacionUncheckedCreateWithoutClienteInput>;
};
export type contratacionUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.contratacionWhereUniqueInput;
    data: Prisma.XOR<Prisma.contratacionUpdateWithoutClienteInput, Prisma.contratacionUncheckedUpdateWithoutClienteInput>;
};
export type contratacionUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.contratacionScalarWhereInput;
    data: Prisma.XOR<Prisma.contratacionUpdateManyMutationInput, Prisma.contratacionUncheckedUpdateManyWithoutClienteInput>;
};
export type contratacionScalarWhereInput = {
    AND?: Prisma.contratacionScalarWhereInput | Prisma.contratacionScalarWhereInput[];
    OR?: Prisma.contratacionScalarWhereInput[];
    NOT?: Prisma.contratacionScalarWhereInput | Prisma.contratacionScalarWhereInput[];
    id?: Prisma.StringFilter<"contratacion"> | string;
    clienteId?: Prisma.StringFilter<"contratacion"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"contratacion"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"contratacion"> | Date | string | null;
    descripcion?: Prisma.StringFilter<"contratacion"> | string;
    importeAcordado?: Prisma.DecimalNullableFilter<"contratacion"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFilter<"contratacion"> | string;
    observaciones?: Prisma.StringNullableFilter<"contratacion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"contratacion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"contratacion"> | Date | string;
};
export type contratacionCreateWithoutFacturaclienteInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    descripcion: string;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado: string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionCreateNestedManyWithoutContratacionInput;
    cliente: Prisma.clienteCreateNestedOneWithoutContratacionInput;
};
export type contratacionUncheckedCreateWithoutFacturaclienteInput = {
    id: string;
    clienteId: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    descripcion: string;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado: string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionUncheckedCreateNestedManyWithoutContratacionInput;
};
export type contratacionCreateOrConnectWithoutFacturaclienteInput = {
    where: Prisma.contratacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.contratacionCreateWithoutFacturaclienteInput, Prisma.contratacionUncheckedCreateWithoutFacturaclienteInput>;
};
export type contratacionUpsertWithoutFacturaclienteInput = {
    update: Prisma.XOR<Prisma.contratacionUpdateWithoutFacturaclienteInput, Prisma.contratacionUncheckedUpdateWithoutFacturaclienteInput>;
    create: Prisma.XOR<Prisma.contratacionCreateWithoutFacturaclienteInput, Prisma.contratacionUncheckedCreateWithoutFacturaclienteInput>;
    where?: Prisma.contratacionWhereInput;
};
export type contratacionUpdateToOneWithWhereWithoutFacturaclienteInput = {
    where?: Prisma.contratacionWhereInput;
    data: Prisma.XOR<Prisma.contratacionUpdateWithoutFacturaclienteInput, Prisma.contratacionUncheckedUpdateWithoutFacturaclienteInput>;
};
export type contratacionUpdateWithoutFacturaclienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUpdateManyWithoutContratacionNestedInput;
    cliente?: Prisma.clienteUpdateOneRequiredWithoutContratacionNestedInput;
};
export type contratacionUncheckedUpdateWithoutFacturaclienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    clienteId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUncheckedUpdateManyWithoutContratacionNestedInput;
};
export type contratacionCreateManyClienteInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    descripcion: string;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado: string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type contratacionUpdateWithoutClienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUpdateManyWithoutContratacionNestedInput;
    facturacliente?: Prisma.facturaclienteUpdateManyWithoutContratacionNestedInput;
};
export type contratacionUncheckedUpdateWithoutClienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUncheckedUpdateManyWithoutContratacionNestedInput;
    facturacliente?: Prisma.facturaclienteUncheckedUpdateManyWithoutContratacionNestedInput;
};
export type contratacionUncheckedUpdateManyWithoutClienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ContratacionCountOutputType
 */
export type ContratacionCountOutputType = {
    actuacion: number;
    facturacliente: number;
};
export type ContratacionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actuacion?: boolean | ContratacionCountOutputTypeCountActuacionArgs;
    facturacliente?: boolean | ContratacionCountOutputTypeCountFacturaclienteArgs;
};
/**
 * ContratacionCountOutputType without action
 */
export type ContratacionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContratacionCountOutputType
     */
    select?: Prisma.ContratacionCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ContratacionCountOutputType without action
 */
export type ContratacionCountOutputTypeCountActuacionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.actuacionWhereInput;
};
/**
 * ContratacionCountOutputType without action
 */
export type ContratacionCountOutputTypeCountFacturaclienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaclienteWhereInput;
};
export type contratacionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    clienteId?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    descripcion?: boolean;
    importeAcordado?: boolean;
    estado?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    actuacion?: boolean | Prisma.contratacion$actuacionArgs<ExtArgs>;
    cliente?: boolean | Prisma.clienteDefaultArgs<ExtArgs>;
    facturacliente?: boolean | Prisma.contratacion$facturaclienteArgs<ExtArgs>;
    _count?: boolean | Prisma.ContratacionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contratacion"]>;
export type contratacionSelectScalar = {
    id?: boolean;
    clienteId?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    descripcion?: boolean;
    importeAcordado?: boolean;
    estado?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type contratacionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "clienteId" | "fechaInicio" | "fechaFin" | "descripcion" | "importeAcordado" | "estado" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["contratacion"]>;
export type contratacionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actuacion?: boolean | Prisma.contratacion$actuacionArgs<ExtArgs>;
    cliente?: boolean | Prisma.clienteDefaultArgs<ExtArgs>;
    facturacliente?: boolean | Prisma.contratacion$facturaclienteArgs<ExtArgs>;
    _count?: boolean | Prisma.ContratacionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $contratacionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "contratacion";
    objects: {
        actuacion: Prisma.$actuacionPayload<ExtArgs>[];
        cliente: Prisma.$clientePayload<ExtArgs>;
        facturacliente: Prisma.$facturaclientePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        clienteId: string;
        fechaInicio: Date;
        fechaFin: Date | null;
        descripcion: string;
        importeAcordado: runtime.Decimal | null;
        estado: string;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["contratacion"]>;
    composites: {};
};
export type contratacionGetPayload<S extends boolean | null | undefined | contratacionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$contratacionPayload, S>;
export type contratacionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<contratacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContratacionCountAggregateInputType | true;
};
export interface contratacionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['contratacion'];
        meta: {
            name: 'contratacion';
        };
    };
    /**
     * Find zero or one Contratacion that matches the filter.
     * @param {contratacionFindUniqueArgs} args - Arguments to find a Contratacion
     * @example
     * // Get one Contratacion
     * const contratacion = await prisma.contratacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends contratacionFindUniqueArgs>(args: Prisma.SelectSubset<T, contratacionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__contratacionClient<runtime.Types.Result.GetResult<Prisma.$contratacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Contratacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {contratacionFindUniqueOrThrowArgs} args - Arguments to find a Contratacion
     * @example
     * // Get one Contratacion
     * const contratacion = await prisma.contratacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends contratacionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, contratacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__contratacionClient<runtime.Types.Result.GetResult<Prisma.$contratacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Contratacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contratacionFindFirstArgs} args - Arguments to find a Contratacion
     * @example
     * // Get one Contratacion
     * const contratacion = await prisma.contratacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends contratacionFindFirstArgs>(args?: Prisma.SelectSubset<T, contratacionFindFirstArgs<ExtArgs>>): Prisma.Prisma__contratacionClient<runtime.Types.Result.GetResult<Prisma.$contratacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Contratacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contratacionFindFirstOrThrowArgs} args - Arguments to find a Contratacion
     * @example
     * // Get one Contratacion
     * const contratacion = await prisma.contratacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends contratacionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, contratacionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__contratacionClient<runtime.Types.Result.GetResult<Prisma.$contratacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Contratacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contratacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contratacions
     * const contratacions = await prisma.contratacion.findMany()
     *
     * // Get first 10 Contratacions
     * const contratacions = await prisma.contratacion.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const contratacionWithIdOnly = await prisma.contratacion.findMany({ select: { id: true } })
     *
     */
    findMany<T extends contratacionFindManyArgs>(args?: Prisma.SelectSubset<T, contratacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contratacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Contratacion.
     * @param {contratacionCreateArgs} args - Arguments to create a Contratacion.
     * @example
     * // Create one Contratacion
     * const Contratacion = await prisma.contratacion.create({
     *   data: {
     *     // ... data to create a Contratacion
     *   }
     * })
     *
     */
    create<T extends contratacionCreateArgs>(args: Prisma.SelectSubset<T, contratacionCreateArgs<ExtArgs>>): Prisma.Prisma__contratacionClient<runtime.Types.Result.GetResult<Prisma.$contratacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Contratacions.
     * @param {contratacionCreateManyArgs} args - Arguments to create many Contratacions.
     * @example
     * // Create many Contratacions
     * const contratacion = await prisma.contratacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends contratacionCreateManyArgs>(args?: Prisma.SelectSubset<T, contratacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Contratacion.
     * @param {contratacionDeleteArgs} args - Arguments to delete one Contratacion.
     * @example
     * // Delete one Contratacion
     * const Contratacion = await prisma.contratacion.delete({
     *   where: {
     *     // ... filter to delete one Contratacion
     *   }
     * })
     *
     */
    delete<T extends contratacionDeleteArgs>(args: Prisma.SelectSubset<T, contratacionDeleteArgs<ExtArgs>>): Prisma.Prisma__contratacionClient<runtime.Types.Result.GetResult<Prisma.$contratacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Contratacion.
     * @param {contratacionUpdateArgs} args - Arguments to update one Contratacion.
     * @example
     * // Update one Contratacion
     * const contratacion = await prisma.contratacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends contratacionUpdateArgs>(args: Prisma.SelectSubset<T, contratacionUpdateArgs<ExtArgs>>): Prisma.Prisma__contratacionClient<runtime.Types.Result.GetResult<Prisma.$contratacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Contratacions.
     * @param {contratacionDeleteManyArgs} args - Arguments to filter Contratacions to delete.
     * @example
     * // Delete a few Contratacions
     * const { count } = await prisma.contratacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends contratacionDeleteManyArgs>(args?: Prisma.SelectSubset<T, contratacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Contratacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contratacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contratacions
     * const contratacion = await prisma.contratacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends contratacionUpdateManyArgs>(args: Prisma.SelectSubset<T, contratacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Contratacion.
     * @param {contratacionUpsertArgs} args - Arguments to update or create a Contratacion.
     * @example
     * // Update or create a Contratacion
     * const contratacion = await prisma.contratacion.upsert({
     *   create: {
     *     // ... data to create a Contratacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contratacion we want to update
     *   }
     * })
     */
    upsert<T extends contratacionUpsertArgs>(args: Prisma.SelectSubset<T, contratacionUpsertArgs<ExtArgs>>): Prisma.Prisma__contratacionClient<runtime.Types.Result.GetResult<Prisma.$contratacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Contratacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contratacionCountArgs} args - Arguments to filter Contratacions to count.
     * @example
     * // Count the number of Contratacions
     * const count = await prisma.contratacion.count({
     *   where: {
     *     // ... the filter for the Contratacions we want to count
     *   }
     * })
    **/
    count<T extends contratacionCountArgs>(args?: Prisma.Subset<T, contratacionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContratacionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Contratacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContratacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContratacionAggregateArgs>(args: Prisma.Subset<T, ContratacionAggregateArgs>): Prisma.PrismaPromise<GetContratacionAggregateType<T>>;
    /**
     * Group by Contratacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contratacionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends contratacionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: contratacionGroupByArgs['orderBy'];
    } : {
        orderBy?: contratacionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, contratacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContratacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the contratacion model
     */
    readonly fields: contratacionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for contratacion.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__contratacionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    actuacion<T extends Prisma.contratacion$actuacionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.contratacion$actuacionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$actuacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cliente<T extends Prisma.clienteDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.clienteDefaultArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    facturacliente<T extends Prisma.contratacion$facturaclienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.contratacion$facturaclienteArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturaclientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the contratacion model
 */
export interface contratacionFieldRefs {
    readonly id: Prisma.FieldRef<"contratacion", 'String'>;
    readonly clienteId: Prisma.FieldRef<"contratacion", 'String'>;
    readonly fechaInicio: Prisma.FieldRef<"contratacion", 'DateTime'>;
    readonly fechaFin: Prisma.FieldRef<"contratacion", 'DateTime'>;
    readonly descripcion: Prisma.FieldRef<"contratacion", 'String'>;
    readonly importeAcordado: Prisma.FieldRef<"contratacion", 'Decimal'>;
    readonly estado: Prisma.FieldRef<"contratacion", 'String'>;
    readonly observaciones: Prisma.FieldRef<"contratacion", 'String'>;
    readonly createdAt: Prisma.FieldRef<"contratacion", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"contratacion", 'DateTime'>;
}
/**
 * contratacion findUnique
 */
export type contratacionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which contratacion to fetch.
     */
    where: Prisma.contratacionWhereUniqueInput;
};
/**
 * contratacion findUniqueOrThrow
 */
export type contratacionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which contratacion to fetch.
     */
    where: Prisma.contratacionWhereUniqueInput;
};
/**
 * contratacion findFirst
 */
export type contratacionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which contratacion to fetch.
     */
    where?: Prisma.contratacionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contratacions to fetch.
     */
    orderBy?: Prisma.contratacionOrderByWithRelationInput | Prisma.contratacionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contratacions.
     */
    cursor?: Prisma.contratacionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contratacions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contratacions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contratacions.
     */
    distinct?: Prisma.ContratacionScalarFieldEnum | Prisma.ContratacionScalarFieldEnum[];
};
/**
 * contratacion findFirstOrThrow
 */
export type contratacionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which contratacion to fetch.
     */
    where?: Prisma.contratacionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contratacions to fetch.
     */
    orderBy?: Prisma.contratacionOrderByWithRelationInput | Prisma.contratacionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for contratacions.
     */
    cursor?: Prisma.contratacionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contratacions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contratacions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contratacions.
     */
    distinct?: Prisma.ContratacionScalarFieldEnum | Prisma.ContratacionScalarFieldEnum[];
};
/**
 * contratacion findMany
 */
export type contratacionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which contratacions to fetch.
     */
    where?: Prisma.contratacionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of contratacions to fetch.
     */
    orderBy?: Prisma.contratacionOrderByWithRelationInput | Prisma.contratacionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing contratacions.
     */
    cursor?: Prisma.contratacionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` contratacions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` contratacions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of contratacions.
     */
    distinct?: Prisma.ContratacionScalarFieldEnum | Prisma.ContratacionScalarFieldEnum[];
};
/**
 * contratacion create
 */
export type contratacionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a contratacion.
     */
    data: Prisma.XOR<Prisma.contratacionCreateInput, Prisma.contratacionUncheckedCreateInput>;
};
/**
 * contratacion createMany
 */
export type contratacionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many contratacions.
     */
    data: Prisma.contratacionCreateManyInput | Prisma.contratacionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * contratacion update
 */
export type contratacionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a contratacion.
     */
    data: Prisma.XOR<Prisma.contratacionUpdateInput, Prisma.contratacionUncheckedUpdateInput>;
    /**
     * Choose, which contratacion to update.
     */
    where: Prisma.contratacionWhereUniqueInput;
};
/**
 * contratacion updateMany
 */
export type contratacionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update contratacions.
     */
    data: Prisma.XOR<Prisma.contratacionUpdateManyMutationInput, Prisma.contratacionUncheckedUpdateManyInput>;
    /**
     * Filter which contratacions to update
     */
    where?: Prisma.contratacionWhereInput;
    /**
     * Limit how many contratacions to update.
     */
    limit?: number;
};
/**
 * contratacion upsert
 */
export type contratacionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the contratacion to update in case it exists.
     */
    where: Prisma.contratacionWhereUniqueInput;
    /**
     * In case the contratacion found by the `where` argument doesn't exist, create a new contratacion with this data.
     */
    create: Prisma.XOR<Prisma.contratacionCreateInput, Prisma.contratacionUncheckedCreateInput>;
    /**
     * In case the contratacion was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.contratacionUpdateInput, Prisma.contratacionUncheckedUpdateInput>;
};
/**
 * contratacion delete
 */
export type contratacionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which contratacion to delete.
     */
    where: Prisma.contratacionWhereUniqueInput;
};
/**
 * contratacion deleteMany
 */
export type contratacionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which contratacions to delete
     */
    where?: Prisma.contratacionWhereInput;
    /**
     * Limit how many contratacions to delete.
     */
    limit?: number;
};
/**
 * contratacion.actuacion
 */
export type contratacion$actuacionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.actuacionOrderByWithRelationInput | Prisma.actuacionOrderByWithRelationInput[];
    cursor?: Prisma.actuacionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActuacionScalarFieldEnum | Prisma.ActuacionScalarFieldEnum[];
};
/**
 * contratacion.facturacliente
 */
export type contratacion$facturaclienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * contratacion without action
 */
export type contratacionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=contratacion.d.ts.map