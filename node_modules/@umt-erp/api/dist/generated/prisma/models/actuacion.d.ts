import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model actuacion
 *
 */
export type actuacionModel = runtime.Types.Result.DefaultSelection<Prisma.$actuacionPayload>;
export type AggregateActuacion = {
    _count: ActuacionCountAggregateOutputType | null;
    _avg: ActuacionAvgAggregateOutputType | null;
    _sum: ActuacionSumAggregateOutputType | null;
    _min: ActuacionMinAggregateOutputType | null;
    _max: ActuacionMaxAggregateOutputType | null;
};
export type ActuacionAvgAggregateOutputType = {
    importeAcordado: runtime.Decimal | null;
};
export type ActuacionSumAggregateOutputType = {
    importeAcordado: runtime.Decimal | null;
};
export type ActuacionMinAggregateOutputType = {
    id: string | null;
    ejercicioId: string | null;
    contratacionId: string | null;
    fecha: Date | null;
    nombre: string | null;
    lugar: string | null;
    importeAcordado: runtime.Decimal | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ActuacionMaxAggregateOutputType = {
    id: string | null;
    ejercicioId: string | null;
    contratacionId: string | null;
    fecha: Date | null;
    nombre: string | null;
    lugar: string | null;
    importeAcordado: runtime.Decimal | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ActuacionCountAggregateOutputType = {
    id: number;
    ejercicioId: number;
    contratacionId: number;
    fecha: number;
    nombre: number;
    lugar: number;
    importeAcordado: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ActuacionAvgAggregateInputType = {
    importeAcordado?: true;
};
export type ActuacionSumAggregateInputType = {
    importeAcordado?: true;
};
export type ActuacionMinAggregateInputType = {
    id?: true;
    ejercicioId?: true;
    contratacionId?: true;
    fecha?: true;
    nombre?: true;
    lugar?: true;
    importeAcordado?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ActuacionMaxAggregateInputType = {
    id?: true;
    ejercicioId?: true;
    contratacionId?: true;
    fecha?: true;
    nombre?: true;
    lugar?: true;
    importeAcordado?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ActuacionCountAggregateInputType = {
    id?: true;
    ejercicioId?: true;
    contratacionId?: true;
    fecha?: true;
    nombre?: true;
    lugar?: true;
    importeAcordado?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ActuacionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which actuacion to aggregate.
     */
    where?: Prisma.actuacionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of actuacions to fetch.
     */
    orderBy?: Prisma.actuacionOrderByWithRelationInput | Prisma.actuacionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.actuacionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` actuacions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` actuacions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned actuacions
    **/
    _count?: true | ActuacionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ActuacionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ActuacionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ActuacionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ActuacionMaxAggregateInputType;
};
export type GetActuacionAggregateType<T extends ActuacionAggregateArgs> = {
    [P in keyof T & keyof AggregateActuacion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateActuacion[P]> : Prisma.GetScalarType<T[P], AggregateActuacion[P]>;
};
export type actuacionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.actuacionWhereInput;
    orderBy?: Prisma.actuacionOrderByWithAggregationInput | Prisma.actuacionOrderByWithAggregationInput[];
    by: Prisma.ActuacionScalarFieldEnum[] | Prisma.ActuacionScalarFieldEnum;
    having?: Prisma.actuacionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ActuacionCountAggregateInputType | true;
    _avg?: ActuacionAvgAggregateInputType;
    _sum?: ActuacionSumAggregateInputType;
    _min?: ActuacionMinAggregateInputType;
    _max?: ActuacionMaxAggregateInputType;
};
export type ActuacionGroupByOutputType = {
    id: string;
    ejercicioId: string;
    contratacionId: string | null;
    fecha: Date;
    nombre: string;
    lugar: string | null;
    importeAcordado: runtime.Decimal | null;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ActuacionCountAggregateOutputType | null;
    _avg: ActuacionAvgAggregateOutputType | null;
    _sum: ActuacionSumAggregateOutputType | null;
    _min: ActuacionMinAggregateOutputType | null;
    _max: ActuacionMaxAggregateOutputType | null;
};
export type GetActuacionGroupByPayload<T extends actuacionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ActuacionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ActuacionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ActuacionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ActuacionGroupByOutputType[P]>;
}>>;
export type actuacionWhereInput = {
    AND?: Prisma.actuacionWhereInput | Prisma.actuacionWhereInput[];
    OR?: Prisma.actuacionWhereInput[];
    NOT?: Prisma.actuacionWhereInput | Prisma.actuacionWhereInput[];
    id?: Prisma.StringFilter<"actuacion"> | string;
    ejercicioId?: Prisma.StringFilter<"actuacion"> | string;
    contratacionId?: Prisma.StringNullableFilter<"actuacion"> | string | null;
    fecha?: Prisma.DateTimeFilter<"actuacion"> | Date | string;
    nombre?: Prisma.StringFilter<"actuacion"> | string;
    lugar?: Prisma.StringNullableFilter<"actuacion"> | string | null;
    importeAcordado?: Prisma.DecimalNullableFilter<"actuacion"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.StringNullableFilter<"actuacion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"actuacion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"actuacion"> | Date | string;
    contratacion?: Prisma.XOR<Prisma.ContratacionNullableScalarRelationFilter, Prisma.contratacionWhereInput> | null;
    ejercicio?: Prisma.XOR<Prisma.EjercicioScalarRelationFilter, Prisma.ejercicioWhereInput>;
    actuacionagrupacion?: Prisma.ActuacionagrupacionListRelationFilter;
    asistencia?: Prisma.AsistenciaListRelationFilter;
    facturacliente?: Prisma.FacturaclienteListRelationFilter;
    facturaproveedor?: Prisma.FacturaproveedorListRelationFilter;
};
export type actuacionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    contratacionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    lugar?: Prisma.SortOrderInput | Prisma.SortOrder;
    importeAcordado?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    contratacion?: Prisma.contratacionOrderByWithRelationInput;
    ejercicio?: Prisma.ejercicioOrderByWithRelationInput;
    actuacionagrupacion?: Prisma.actuacionagrupacionOrderByRelationAggregateInput;
    asistencia?: Prisma.asistenciaOrderByRelationAggregateInput;
    facturacliente?: Prisma.facturaclienteOrderByRelationAggregateInput;
    facturaproveedor?: Prisma.facturaproveedorOrderByRelationAggregateInput;
    _relevance?: Prisma.actuacionOrderByRelevanceInput;
};
export type actuacionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.actuacionWhereInput | Prisma.actuacionWhereInput[];
    OR?: Prisma.actuacionWhereInput[];
    NOT?: Prisma.actuacionWhereInput | Prisma.actuacionWhereInput[];
    ejercicioId?: Prisma.StringFilter<"actuacion"> | string;
    contratacionId?: Prisma.StringNullableFilter<"actuacion"> | string | null;
    fecha?: Prisma.DateTimeFilter<"actuacion"> | Date | string;
    nombre?: Prisma.StringFilter<"actuacion"> | string;
    lugar?: Prisma.StringNullableFilter<"actuacion"> | string | null;
    importeAcordado?: Prisma.DecimalNullableFilter<"actuacion"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.StringNullableFilter<"actuacion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"actuacion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"actuacion"> | Date | string;
    contratacion?: Prisma.XOR<Prisma.ContratacionNullableScalarRelationFilter, Prisma.contratacionWhereInput> | null;
    ejercicio?: Prisma.XOR<Prisma.EjercicioScalarRelationFilter, Prisma.ejercicioWhereInput>;
    actuacionagrupacion?: Prisma.ActuacionagrupacionListRelationFilter;
    asistencia?: Prisma.AsistenciaListRelationFilter;
    facturacliente?: Prisma.FacturaclienteListRelationFilter;
    facturaproveedor?: Prisma.FacturaproveedorListRelationFilter;
}, "id">;
export type actuacionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    contratacionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    lugar?: Prisma.SortOrderInput | Prisma.SortOrder;
    importeAcordado?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.actuacionCountOrderByAggregateInput;
    _avg?: Prisma.actuacionAvgOrderByAggregateInput;
    _max?: Prisma.actuacionMaxOrderByAggregateInput;
    _min?: Prisma.actuacionMinOrderByAggregateInput;
    _sum?: Prisma.actuacionSumOrderByAggregateInput;
};
export type actuacionScalarWhereWithAggregatesInput = {
    AND?: Prisma.actuacionScalarWhereWithAggregatesInput | Prisma.actuacionScalarWhereWithAggregatesInput[];
    OR?: Prisma.actuacionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.actuacionScalarWhereWithAggregatesInput | Prisma.actuacionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"actuacion"> | string;
    ejercicioId?: Prisma.StringWithAggregatesFilter<"actuacion"> | string;
    contratacionId?: Prisma.StringNullableWithAggregatesFilter<"actuacion"> | string | null;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"actuacion"> | Date | string;
    nombre?: Prisma.StringWithAggregatesFilter<"actuacion"> | string;
    lugar?: Prisma.StringNullableWithAggregatesFilter<"actuacion"> | string | null;
    importeAcordado?: Prisma.DecimalNullableWithAggregatesFilter<"actuacion"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"actuacion"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"actuacion"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"actuacion"> | Date | string;
};
export type actuacionCreateInput = {
    id: string;
    fecha: Date | string;
    nombre: string;
    lugar?: string | null;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    contratacion?: Prisma.contratacionCreateNestedOneWithoutActuacionInput;
    ejercicio: Prisma.ejercicioCreateNestedOneWithoutActuacionInput;
    actuacionagrupacion?: Prisma.actuacionagrupacionCreateNestedManyWithoutActuacionInput;
    asistencia?: Prisma.asistenciaCreateNestedManyWithoutActuacionInput;
    facturacliente?: Prisma.facturaclienteCreateNestedManyWithoutActuacionInput;
    facturaproveedor?: Prisma.facturaproveedorCreateNestedManyWithoutActuacionInput;
};
export type actuacionUncheckedCreateInput = {
    id: string;
    ejercicioId: string;
    contratacionId?: string | null;
    fecha: Date | string;
    nombre: string;
    lugar?: string | null;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacionagrupacion?: Prisma.actuacionagrupacionUncheckedCreateNestedManyWithoutActuacionInput;
    asistencia?: Prisma.asistenciaUncheckedCreateNestedManyWithoutActuacionInput;
    facturacliente?: Prisma.facturaclienteUncheckedCreateNestedManyWithoutActuacionInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedCreateNestedManyWithoutActuacionInput;
};
export type actuacionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    lugar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contratacion?: Prisma.contratacionUpdateOneWithoutActuacionNestedInput;
    ejercicio?: Prisma.ejercicioUpdateOneRequiredWithoutActuacionNestedInput;
    actuacionagrupacion?: Prisma.actuacionagrupacionUpdateManyWithoutActuacionNestedInput;
    asistencia?: Prisma.asistenciaUpdateManyWithoutActuacionNestedInput;
    facturacliente?: Prisma.facturaclienteUpdateManyWithoutActuacionNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUpdateManyWithoutActuacionNestedInput;
};
export type actuacionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    contratacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    lugar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacionagrupacion?: Prisma.actuacionagrupacionUncheckedUpdateManyWithoutActuacionNestedInput;
    asistencia?: Prisma.asistenciaUncheckedUpdateManyWithoutActuacionNestedInput;
    facturacliente?: Prisma.facturaclienteUncheckedUpdateManyWithoutActuacionNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedUpdateManyWithoutActuacionNestedInput;
};
export type actuacionCreateManyInput = {
    id: string;
    ejercicioId: string;
    contratacionId?: string | null;
    fecha: Date | string;
    nombre: string;
    lugar?: string | null;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type actuacionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    lugar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type actuacionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    contratacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    lugar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type actuacionOrderByRelevanceInput = {
    fields: Prisma.actuacionOrderByRelevanceFieldEnum | Prisma.actuacionOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type actuacionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    contratacionId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    lugar?: Prisma.SortOrder;
    importeAcordado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type actuacionAvgOrderByAggregateInput = {
    importeAcordado?: Prisma.SortOrder;
};
export type actuacionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    contratacionId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    lugar?: Prisma.SortOrder;
    importeAcordado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type actuacionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    contratacionId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    lugar?: Prisma.SortOrder;
    importeAcordado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type actuacionSumOrderByAggregateInput = {
    importeAcordado?: Prisma.SortOrder;
};
export type ActuacionScalarRelationFilter = {
    is?: Prisma.actuacionWhereInput;
    isNot?: Prisma.actuacionWhereInput;
};
export type ActuacionListRelationFilter = {
    every?: Prisma.actuacionWhereInput;
    some?: Prisma.actuacionWhereInput;
    none?: Prisma.actuacionWhereInput;
};
export type actuacionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ActuacionNullableScalarRelationFilter = {
    is?: Prisma.actuacionWhereInput | null;
    isNot?: Prisma.actuacionWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type actuacionCreateNestedOneWithoutActuacionagrupacionInput = {
    create?: Prisma.XOR<Prisma.actuacionCreateWithoutActuacionagrupacionInput, Prisma.actuacionUncheckedCreateWithoutActuacionagrupacionInput>;
    connectOrCreate?: Prisma.actuacionCreateOrConnectWithoutActuacionagrupacionInput;
    connect?: Prisma.actuacionWhereUniqueInput;
};
export type actuacionUpdateOneRequiredWithoutActuacionagrupacionNestedInput = {
    create?: Prisma.XOR<Prisma.actuacionCreateWithoutActuacionagrupacionInput, Prisma.actuacionUncheckedCreateWithoutActuacionagrupacionInput>;
    connectOrCreate?: Prisma.actuacionCreateOrConnectWithoutActuacionagrupacionInput;
    upsert?: Prisma.actuacionUpsertWithoutActuacionagrupacionInput;
    connect?: Prisma.actuacionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.actuacionUpdateToOneWithWhereWithoutActuacionagrupacionInput, Prisma.actuacionUpdateWithoutActuacionagrupacionInput>, Prisma.actuacionUncheckedUpdateWithoutActuacionagrupacionInput>;
};
export type actuacionCreateNestedOneWithoutAsistenciaInput = {
    create?: Prisma.XOR<Prisma.actuacionCreateWithoutAsistenciaInput, Prisma.actuacionUncheckedCreateWithoutAsistenciaInput>;
    connectOrCreate?: Prisma.actuacionCreateOrConnectWithoutAsistenciaInput;
    connect?: Prisma.actuacionWhereUniqueInput;
};
export type actuacionUpdateOneRequiredWithoutAsistenciaNestedInput = {
    create?: Prisma.XOR<Prisma.actuacionCreateWithoutAsistenciaInput, Prisma.actuacionUncheckedCreateWithoutAsistenciaInput>;
    connectOrCreate?: Prisma.actuacionCreateOrConnectWithoutAsistenciaInput;
    upsert?: Prisma.actuacionUpsertWithoutAsistenciaInput;
    connect?: Prisma.actuacionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.actuacionUpdateToOneWithWhereWithoutAsistenciaInput, Prisma.actuacionUpdateWithoutAsistenciaInput>, Prisma.actuacionUncheckedUpdateWithoutAsistenciaInput>;
};
export type actuacionCreateNestedManyWithoutContratacionInput = {
    create?: Prisma.XOR<Prisma.actuacionCreateWithoutContratacionInput, Prisma.actuacionUncheckedCreateWithoutContratacionInput> | Prisma.actuacionCreateWithoutContratacionInput[] | Prisma.actuacionUncheckedCreateWithoutContratacionInput[];
    connectOrCreate?: Prisma.actuacionCreateOrConnectWithoutContratacionInput | Prisma.actuacionCreateOrConnectWithoutContratacionInput[];
    createMany?: Prisma.actuacionCreateManyContratacionInputEnvelope;
    connect?: Prisma.actuacionWhereUniqueInput | Prisma.actuacionWhereUniqueInput[];
};
export type actuacionUncheckedCreateNestedManyWithoutContratacionInput = {
    create?: Prisma.XOR<Prisma.actuacionCreateWithoutContratacionInput, Prisma.actuacionUncheckedCreateWithoutContratacionInput> | Prisma.actuacionCreateWithoutContratacionInput[] | Prisma.actuacionUncheckedCreateWithoutContratacionInput[];
    connectOrCreate?: Prisma.actuacionCreateOrConnectWithoutContratacionInput | Prisma.actuacionCreateOrConnectWithoutContratacionInput[];
    createMany?: Prisma.actuacionCreateManyContratacionInputEnvelope;
    connect?: Prisma.actuacionWhereUniqueInput | Prisma.actuacionWhereUniqueInput[];
};
export type actuacionUpdateManyWithoutContratacionNestedInput = {
    create?: Prisma.XOR<Prisma.actuacionCreateWithoutContratacionInput, Prisma.actuacionUncheckedCreateWithoutContratacionInput> | Prisma.actuacionCreateWithoutContratacionInput[] | Prisma.actuacionUncheckedCreateWithoutContratacionInput[];
    connectOrCreate?: Prisma.actuacionCreateOrConnectWithoutContratacionInput | Prisma.actuacionCreateOrConnectWithoutContratacionInput[];
    upsert?: Prisma.actuacionUpsertWithWhereUniqueWithoutContratacionInput | Prisma.actuacionUpsertWithWhereUniqueWithoutContratacionInput[];
    createMany?: Prisma.actuacionCreateManyContratacionInputEnvelope;
    set?: Prisma.actuacionWhereUniqueInput | Prisma.actuacionWhereUniqueInput[];
    disconnect?: Prisma.actuacionWhereUniqueInput | Prisma.actuacionWhereUniqueInput[];
    delete?: Prisma.actuacionWhereUniqueInput | Prisma.actuacionWhereUniqueInput[];
    connect?: Prisma.actuacionWhereUniqueInput | Prisma.actuacionWhereUniqueInput[];
    update?: Prisma.actuacionUpdateWithWhereUniqueWithoutContratacionInput | Prisma.actuacionUpdateWithWhereUniqueWithoutContratacionInput[];
    updateMany?: Prisma.actuacionUpdateManyWithWhereWithoutContratacionInput | Prisma.actuacionUpdateManyWithWhereWithoutContratacionInput[];
    deleteMany?: Prisma.actuacionScalarWhereInput | Prisma.actuacionScalarWhereInput[];
};
export type actuacionUncheckedUpdateManyWithoutContratacionNestedInput = {
    create?: Prisma.XOR<Prisma.actuacionCreateWithoutContratacionInput, Prisma.actuacionUncheckedCreateWithoutContratacionInput> | Prisma.actuacionCreateWithoutContratacionInput[] | Prisma.actuacionUncheckedCreateWithoutContratacionInput[];
    connectOrCreate?: Prisma.actuacionCreateOrConnectWithoutContratacionInput | Prisma.actuacionCreateOrConnectWithoutContratacionInput[];
    upsert?: Prisma.actuacionUpsertWithWhereUniqueWithoutContratacionInput | Prisma.actuacionUpsertWithWhereUniqueWithoutContratacionInput[];
    createMany?: Prisma.actuacionCreateManyContratacionInputEnvelope;
    set?: Prisma.actuacionWhereUniqueInput | Prisma.actuacionWhereUniqueInput[];
    disconnect?: Prisma.actuacionWhereUniqueInput | Prisma.actuacionWhereUniqueInput[];
    delete?: Prisma.actuacionWhereUniqueInput | Prisma.actuacionWhereUniqueInput[];
    connect?: Prisma.actuacionWhereUniqueInput | Prisma.actuacionWhereUniqueInput[];
    update?: Prisma.actuacionUpdateWithWhereUniqueWithoutContratacionInput | Prisma.actuacionUpdateWithWhereUniqueWithoutContratacionInput[];
    updateMany?: Prisma.actuacionUpdateManyWithWhereWithoutContratacionInput | Prisma.actuacionUpdateManyWithWhereWithoutContratacionInput[];
    deleteMany?: Prisma.actuacionScalarWhereInput | Prisma.actuacionScalarWhereInput[];
};
export type actuacionCreateNestedManyWithoutEjercicioInput = {
    create?: Prisma.XOR<Prisma.actuacionCreateWithoutEjercicioInput, Prisma.actuacionUncheckedCreateWithoutEjercicioInput> | Prisma.actuacionCreateWithoutEjercicioInput[] | Prisma.actuacionUncheckedCreateWithoutEjercicioInput[];
    connectOrCreate?: Prisma.actuacionCreateOrConnectWithoutEjercicioInput | Prisma.actuacionCreateOrConnectWithoutEjercicioInput[];
    createMany?: Prisma.actuacionCreateManyEjercicioInputEnvelope;
    connect?: Prisma.actuacionWhereUniqueInput | Prisma.actuacionWhereUniqueInput[];
};
export type actuacionUncheckedCreateNestedManyWithoutEjercicioInput = {
    create?: Prisma.XOR<Prisma.actuacionCreateWithoutEjercicioInput, Prisma.actuacionUncheckedCreateWithoutEjercicioInput> | Prisma.actuacionCreateWithoutEjercicioInput[] | Prisma.actuacionUncheckedCreateWithoutEjercicioInput[];
    connectOrCreate?: Prisma.actuacionCreateOrConnectWithoutEjercicioInput | Prisma.actuacionCreateOrConnectWithoutEjercicioInput[];
    createMany?: Prisma.actuacionCreateManyEjercicioInputEnvelope;
    connect?: Prisma.actuacionWhereUniqueInput | Prisma.actuacionWhereUniqueInput[];
};
export type actuacionUpdateManyWithoutEjercicioNestedInput = {
    create?: Prisma.XOR<Prisma.actuacionCreateWithoutEjercicioInput, Prisma.actuacionUncheckedCreateWithoutEjercicioInput> | Prisma.actuacionCreateWithoutEjercicioInput[] | Prisma.actuacionUncheckedCreateWithoutEjercicioInput[];
    connectOrCreate?: Prisma.actuacionCreateOrConnectWithoutEjercicioInput | Prisma.actuacionCreateOrConnectWithoutEjercicioInput[];
    upsert?: Prisma.actuacionUpsertWithWhereUniqueWithoutEjercicioInput | Prisma.actuacionUpsertWithWhereUniqueWithoutEjercicioInput[];
    createMany?: Prisma.actuacionCreateManyEjercicioInputEnvelope;
    set?: Prisma.actuacionWhereUniqueInput | Prisma.actuacionWhereUniqueInput[];
    disconnect?: Prisma.actuacionWhereUniqueInput | Prisma.actuacionWhereUniqueInput[];
    delete?: Prisma.actuacionWhereUniqueInput | Prisma.actuacionWhereUniqueInput[];
    connect?: Prisma.actuacionWhereUniqueInput | Prisma.actuacionWhereUniqueInput[];
    update?: Prisma.actuacionUpdateWithWhereUniqueWithoutEjercicioInput | Prisma.actuacionUpdateWithWhereUniqueWithoutEjercicioInput[];
    updateMany?: Prisma.actuacionUpdateManyWithWhereWithoutEjercicioInput | Prisma.actuacionUpdateManyWithWhereWithoutEjercicioInput[];
    deleteMany?: Prisma.actuacionScalarWhereInput | Prisma.actuacionScalarWhereInput[];
};
export type actuacionUncheckedUpdateManyWithoutEjercicioNestedInput = {
    create?: Prisma.XOR<Prisma.actuacionCreateWithoutEjercicioInput, Prisma.actuacionUncheckedCreateWithoutEjercicioInput> | Prisma.actuacionCreateWithoutEjercicioInput[] | Prisma.actuacionUncheckedCreateWithoutEjercicioInput[];
    connectOrCreate?: Prisma.actuacionCreateOrConnectWithoutEjercicioInput | Prisma.actuacionCreateOrConnectWithoutEjercicioInput[];
    upsert?: Prisma.actuacionUpsertWithWhereUniqueWithoutEjercicioInput | Prisma.actuacionUpsertWithWhereUniqueWithoutEjercicioInput[];
    createMany?: Prisma.actuacionCreateManyEjercicioInputEnvelope;
    set?: Prisma.actuacionWhereUniqueInput | Prisma.actuacionWhereUniqueInput[];
    disconnect?: Prisma.actuacionWhereUniqueInput | Prisma.actuacionWhereUniqueInput[];
    delete?: Prisma.actuacionWhereUniqueInput | Prisma.actuacionWhereUniqueInput[];
    connect?: Prisma.actuacionWhereUniqueInput | Prisma.actuacionWhereUniqueInput[];
    update?: Prisma.actuacionUpdateWithWhereUniqueWithoutEjercicioInput | Prisma.actuacionUpdateWithWhereUniqueWithoutEjercicioInput[];
    updateMany?: Prisma.actuacionUpdateManyWithWhereWithoutEjercicioInput | Prisma.actuacionUpdateManyWithWhereWithoutEjercicioInput[];
    deleteMany?: Prisma.actuacionScalarWhereInput | Prisma.actuacionScalarWhereInput[];
};
export type actuacionCreateNestedOneWithoutFacturaclienteInput = {
    create?: Prisma.XOR<Prisma.actuacionCreateWithoutFacturaclienteInput, Prisma.actuacionUncheckedCreateWithoutFacturaclienteInput>;
    connectOrCreate?: Prisma.actuacionCreateOrConnectWithoutFacturaclienteInput;
    connect?: Prisma.actuacionWhereUniqueInput;
};
export type actuacionUpdateOneWithoutFacturaclienteNestedInput = {
    create?: Prisma.XOR<Prisma.actuacionCreateWithoutFacturaclienteInput, Prisma.actuacionUncheckedCreateWithoutFacturaclienteInput>;
    connectOrCreate?: Prisma.actuacionCreateOrConnectWithoutFacturaclienteInput;
    upsert?: Prisma.actuacionUpsertWithoutFacturaclienteInput;
    disconnect?: Prisma.actuacionWhereInput | boolean;
    delete?: Prisma.actuacionWhereInput | boolean;
    connect?: Prisma.actuacionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.actuacionUpdateToOneWithWhereWithoutFacturaclienteInput, Prisma.actuacionUpdateWithoutFacturaclienteInput>, Prisma.actuacionUncheckedUpdateWithoutFacturaclienteInput>;
};
export type actuacionCreateNestedOneWithoutFacturaproveedorInput = {
    create?: Prisma.XOR<Prisma.actuacionCreateWithoutFacturaproveedorInput, Prisma.actuacionUncheckedCreateWithoutFacturaproveedorInput>;
    connectOrCreate?: Prisma.actuacionCreateOrConnectWithoutFacturaproveedorInput;
    connect?: Prisma.actuacionWhereUniqueInput;
};
export type actuacionUpdateOneWithoutFacturaproveedorNestedInput = {
    create?: Prisma.XOR<Prisma.actuacionCreateWithoutFacturaproveedorInput, Prisma.actuacionUncheckedCreateWithoutFacturaproveedorInput>;
    connectOrCreate?: Prisma.actuacionCreateOrConnectWithoutFacturaproveedorInput;
    upsert?: Prisma.actuacionUpsertWithoutFacturaproveedorInput;
    disconnect?: Prisma.actuacionWhereInput | boolean;
    delete?: Prisma.actuacionWhereInput | boolean;
    connect?: Prisma.actuacionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.actuacionUpdateToOneWithWhereWithoutFacturaproveedorInput, Prisma.actuacionUpdateWithoutFacturaproveedorInput>, Prisma.actuacionUncheckedUpdateWithoutFacturaproveedorInput>;
};
export type actuacionCreateWithoutActuacionagrupacionInput = {
    id: string;
    fecha: Date | string;
    nombre: string;
    lugar?: string | null;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    contratacion?: Prisma.contratacionCreateNestedOneWithoutActuacionInput;
    ejercicio: Prisma.ejercicioCreateNestedOneWithoutActuacionInput;
    asistencia?: Prisma.asistenciaCreateNestedManyWithoutActuacionInput;
    facturacliente?: Prisma.facturaclienteCreateNestedManyWithoutActuacionInput;
    facturaproveedor?: Prisma.facturaproveedorCreateNestedManyWithoutActuacionInput;
};
export type actuacionUncheckedCreateWithoutActuacionagrupacionInput = {
    id: string;
    ejercicioId: string;
    contratacionId?: string | null;
    fecha: Date | string;
    nombre: string;
    lugar?: string | null;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    asistencia?: Prisma.asistenciaUncheckedCreateNestedManyWithoutActuacionInput;
    facturacliente?: Prisma.facturaclienteUncheckedCreateNestedManyWithoutActuacionInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedCreateNestedManyWithoutActuacionInput;
};
export type actuacionCreateOrConnectWithoutActuacionagrupacionInput = {
    where: Prisma.actuacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.actuacionCreateWithoutActuacionagrupacionInput, Prisma.actuacionUncheckedCreateWithoutActuacionagrupacionInput>;
};
export type actuacionUpsertWithoutActuacionagrupacionInput = {
    update: Prisma.XOR<Prisma.actuacionUpdateWithoutActuacionagrupacionInput, Prisma.actuacionUncheckedUpdateWithoutActuacionagrupacionInput>;
    create: Prisma.XOR<Prisma.actuacionCreateWithoutActuacionagrupacionInput, Prisma.actuacionUncheckedCreateWithoutActuacionagrupacionInput>;
    where?: Prisma.actuacionWhereInput;
};
export type actuacionUpdateToOneWithWhereWithoutActuacionagrupacionInput = {
    where?: Prisma.actuacionWhereInput;
    data: Prisma.XOR<Prisma.actuacionUpdateWithoutActuacionagrupacionInput, Prisma.actuacionUncheckedUpdateWithoutActuacionagrupacionInput>;
};
export type actuacionUpdateWithoutActuacionagrupacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    lugar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contratacion?: Prisma.contratacionUpdateOneWithoutActuacionNestedInput;
    ejercicio?: Prisma.ejercicioUpdateOneRequiredWithoutActuacionNestedInput;
    asistencia?: Prisma.asistenciaUpdateManyWithoutActuacionNestedInput;
    facturacliente?: Prisma.facturaclienteUpdateManyWithoutActuacionNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUpdateManyWithoutActuacionNestedInput;
};
export type actuacionUncheckedUpdateWithoutActuacionagrupacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    contratacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    lugar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asistencia?: Prisma.asistenciaUncheckedUpdateManyWithoutActuacionNestedInput;
    facturacliente?: Prisma.facturaclienteUncheckedUpdateManyWithoutActuacionNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedUpdateManyWithoutActuacionNestedInput;
};
export type actuacionCreateWithoutAsistenciaInput = {
    id: string;
    fecha: Date | string;
    nombre: string;
    lugar?: string | null;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    contratacion?: Prisma.contratacionCreateNestedOneWithoutActuacionInput;
    ejercicio: Prisma.ejercicioCreateNestedOneWithoutActuacionInput;
    actuacionagrupacion?: Prisma.actuacionagrupacionCreateNestedManyWithoutActuacionInput;
    facturacliente?: Prisma.facturaclienteCreateNestedManyWithoutActuacionInput;
    facturaproveedor?: Prisma.facturaproveedorCreateNestedManyWithoutActuacionInput;
};
export type actuacionUncheckedCreateWithoutAsistenciaInput = {
    id: string;
    ejercicioId: string;
    contratacionId?: string | null;
    fecha: Date | string;
    nombre: string;
    lugar?: string | null;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacionagrupacion?: Prisma.actuacionagrupacionUncheckedCreateNestedManyWithoutActuacionInput;
    facturacliente?: Prisma.facturaclienteUncheckedCreateNestedManyWithoutActuacionInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedCreateNestedManyWithoutActuacionInput;
};
export type actuacionCreateOrConnectWithoutAsistenciaInput = {
    where: Prisma.actuacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.actuacionCreateWithoutAsistenciaInput, Prisma.actuacionUncheckedCreateWithoutAsistenciaInput>;
};
export type actuacionUpsertWithoutAsistenciaInput = {
    update: Prisma.XOR<Prisma.actuacionUpdateWithoutAsistenciaInput, Prisma.actuacionUncheckedUpdateWithoutAsistenciaInput>;
    create: Prisma.XOR<Prisma.actuacionCreateWithoutAsistenciaInput, Prisma.actuacionUncheckedCreateWithoutAsistenciaInput>;
    where?: Prisma.actuacionWhereInput;
};
export type actuacionUpdateToOneWithWhereWithoutAsistenciaInput = {
    where?: Prisma.actuacionWhereInput;
    data: Prisma.XOR<Prisma.actuacionUpdateWithoutAsistenciaInput, Prisma.actuacionUncheckedUpdateWithoutAsistenciaInput>;
};
export type actuacionUpdateWithoutAsistenciaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    lugar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contratacion?: Prisma.contratacionUpdateOneWithoutActuacionNestedInput;
    ejercicio?: Prisma.ejercicioUpdateOneRequiredWithoutActuacionNestedInput;
    actuacionagrupacion?: Prisma.actuacionagrupacionUpdateManyWithoutActuacionNestedInput;
    facturacliente?: Prisma.facturaclienteUpdateManyWithoutActuacionNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUpdateManyWithoutActuacionNestedInput;
};
export type actuacionUncheckedUpdateWithoutAsistenciaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    contratacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    lugar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacionagrupacion?: Prisma.actuacionagrupacionUncheckedUpdateManyWithoutActuacionNestedInput;
    facturacliente?: Prisma.facturaclienteUncheckedUpdateManyWithoutActuacionNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedUpdateManyWithoutActuacionNestedInput;
};
export type actuacionCreateWithoutContratacionInput = {
    id: string;
    fecha: Date | string;
    nombre: string;
    lugar?: string | null;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    ejercicio: Prisma.ejercicioCreateNestedOneWithoutActuacionInput;
    actuacionagrupacion?: Prisma.actuacionagrupacionCreateNestedManyWithoutActuacionInput;
    asistencia?: Prisma.asistenciaCreateNestedManyWithoutActuacionInput;
    facturacliente?: Prisma.facturaclienteCreateNestedManyWithoutActuacionInput;
    facturaproveedor?: Prisma.facturaproveedorCreateNestedManyWithoutActuacionInput;
};
export type actuacionUncheckedCreateWithoutContratacionInput = {
    id: string;
    ejercicioId: string;
    fecha: Date | string;
    nombre: string;
    lugar?: string | null;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacionagrupacion?: Prisma.actuacionagrupacionUncheckedCreateNestedManyWithoutActuacionInput;
    asistencia?: Prisma.asistenciaUncheckedCreateNestedManyWithoutActuacionInput;
    facturacliente?: Prisma.facturaclienteUncheckedCreateNestedManyWithoutActuacionInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedCreateNestedManyWithoutActuacionInput;
};
export type actuacionCreateOrConnectWithoutContratacionInput = {
    where: Prisma.actuacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.actuacionCreateWithoutContratacionInput, Prisma.actuacionUncheckedCreateWithoutContratacionInput>;
};
export type actuacionCreateManyContratacionInputEnvelope = {
    data: Prisma.actuacionCreateManyContratacionInput | Prisma.actuacionCreateManyContratacionInput[];
    skipDuplicates?: boolean;
};
export type actuacionUpsertWithWhereUniqueWithoutContratacionInput = {
    where: Prisma.actuacionWhereUniqueInput;
    update: Prisma.XOR<Prisma.actuacionUpdateWithoutContratacionInput, Prisma.actuacionUncheckedUpdateWithoutContratacionInput>;
    create: Prisma.XOR<Prisma.actuacionCreateWithoutContratacionInput, Prisma.actuacionUncheckedCreateWithoutContratacionInput>;
};
export type actuacionUpdateWithWhereUniqueWithoutContratacionInput = {
    where: Prisma.actuacionWhereUniqueInput;
    data: Prisma.XOR<Prisma.actuacionUpdateWithoutContratacionInput, Prisma.actuacionUncheckedUpdateWithoutContratacionInput>;
};
export type actuacionUpdateManyWithWhereWithoutContratacionInput = {
    where: Prisma.actuacionScalarWhereInput;
    data: Prisma.XOR<Prisma.actuacionUpdateManyMutationInput, Prisma.actuacionUncheckedUpdateManyWithoutContratacionInput>;
};
export type actuacionScalarWhereInput = {
    AND?: Prisma.actuacionScalarWhereInput | Prisma.actuacionScalarWhereInput[];
    OR?: Prisma.actuacionScalarWhereInput[];
    NOT?: Prisma.actuacionScalarWhereInput | Prisma.actuacionScalarWhereInput[];
    id?: Prisma.StringFilter<"actuacion"> | string;
    ejercicioId?: Prisma.StringFilter<"actuacion"> | string;
    contratacionId?: Prisma.StringNullableFilter<"actuacion"> | string | null;
    fecha?: Prisma.DateTimeFilter<"actuacion"> | Date | string;
    nombre?: Prisma.StringFilter<"actuacion"> | string;
    lugar?: Prisma.StringNullableFilter<"actuacion"> | string | null;
    importeAcordado?: Prisma.DecimalNullableFilter<"actuacion"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.StringNullableFilter<"actuacion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"actuacion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"actuacion"> | Date | string;
};
export type actuacionCreateWithoutEjercicioInput = {
    id: string;
    fecha: Date | string;
    nombre: string;
    lugar?: string | null;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    contratacion?: Prisma.contratacionCreateNestedOneWithoutActuacionInput;
    actuacionagrupacion?: Prisma.actuacionagrupacionCreateNestedManyWithoutActuacionInput;
    asistencia?: Prisma.asistenciaCreateNestedManyWithoutActuacionInput;
    facturacliente?: Prisma.facturaclienteCreateNestedManyWithoutActuacionInput;
    facturaproveedor?: Prisma.facturaproveedorCreateNestedManyWithoutActuacionInput;
};
export type actuacionUncheckedCreateWithoutEjercicioInput = {
    id: string;
    contratacionId?: string | null;
    fecha: Date | string;
    nombre: string;
    lugar?: string | null;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacionagrupacion?: Prisma.actuacionagrupacionUncheckedCreateNestedManyWithoutActuacionInput;
    asistencia?: Prisma.asistenciaUncheckedCreateNestedManyWithoutActuacionInput;
    facturacliente?: Prisma.facturaclienteUncheckedCreateNestedManyWithoutActuacionInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedCreateNestedManyWithoutActuacionInput;
};
export type actuacionCreateOrConnectWithoutEjercicioInput = {
    where: Prisma.actuacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.actuacionCreateWithoutEjercicioInput, Prisma.actuacionUncheckedCreateWithoutEjercicioInput>;
};
export type actuacionCreateManyEjercicioInputEnvelope = {
    data: Prisma.actuacionCreateManyEjercicioInput | Prisma.actuacionCreateManyEjercicioInput[];
    skipDuplicates?: boolean;
};
export type actuacionUpsertWithWhereUniqueWithoutEjercicioInput = {
    where: Prisma.actuacionWhereUniqueInput;
    update: Prisma.XOR<Prisma.actuacionUpdateWithoutEjercicioInput, Prisma.actuacionUncheckedUpdateWithoutEjercicioInput>;
    create: Prisma.XOR<Prisma.actuacionCreateWithoutEjercicioInput, Prisma.actuacionUncheckedCreateWithoutEjercicioInput>;
};
export type actuacionUpdateWithWhereUniqueWithoutEjercicioInput = {
    where: Prisma.actuacionWhereUniqueInput;
    data: Prisma.XOR<Prisma.actuacionUpdateWithoutEjercicioInput, Prisma.actuacionUncheckedUpdateWithoutEjercicioInput>;
};
export type actuacionUpdateManyWithWhereWithoutEjercicioInput = {
    where: Prisma.actuacionScalarWhereInput;
    data: Prisma.XOR<Prisma.actuacionUpdateManyMutationInput, Prisma.actuacionUncheckedUpdateManyWithoutEjercicioInput>;
};
export type actuacionCreateWithoutFacturaclienteInput = {
    id: string;
    fecha: Date | string;
    nombre: string;
    lugar?: string | null;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    contratacion?: Prisma.contratacionCreateNestedOneWithoutActuacionInput;
    ejercicio: Prisma.ejercicioCreateNestedOneWithoutActuacionInput;
    actuacionagrupacion?: Prisma.actuacionagrupacionCreateNestedManyWithoutActuacionInput;
    asistencia?: Prisma.asistenciaCreateNestedManyWithoutActuacionInput;
    facturaproveedor?: Prisma.facturaproveedorCreateNestedManyWithoutActuacionInput;
};
export type actuacionUncheckedCreateWithoutFacturaclienteInput = {
    id: string;
    ejercicioId: string;
    contratacionId?: string | null;
    fecha: Date | string;
    nombre: string;
    lugar?: string | null;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacionagrupacion?: Prisma.actuacionagrupacionUncheckedCreateNestedManyWithoutActuacionInput;
    asistencia?: Prisma.asistenciaUncheckedCreateNestedManyWithoutActuacionInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedCreateNestedManyWithoutActuacionInput;
};
export type actuacionCreateOrConnectWithoutFacturaclienteInput = {
    where: Prisma.actuacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.actuacionCreateWithoutFacturaclienteInput, Prisma.actuacionUncheckedCreateWithoutFacturaclienteInput>;
};
export type actuacionUpsertWithoutFacturaclienteInput = {
    update: Prisma.XOR<Prisma.actuacionUpdateWithoutFacturaclienteInput, Prisma.actuacionUncheckedUpdateWithoutFacturaclienteInput>;
    create: Prisma.XOR<Prisma.actuacionCreateWithoutFacturaclienteInput, Prisma.actuacionUncheckedCreateWithoutFacturaclienteInput>;
    where?: Prisma.actuacionWhereInput;
};
export type actuacionUpdateToOneWithWhereWithoutFacturaclienteInput = {
    where?: Prisma.actuacionWhereInput;
    data: Prisma.XOR<Prisma.actuacionUpdateWithoutFacturaclienteInput, Prisma.actuacionUncheckedUpdateWithoutFacturaclienteInput>;
};
export type actuacionUpdateWithoutFacturaclienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    lugar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contratacion?: Prisma.contratacionUpdateOneWithoutActuacionNestedInput;
    ejercicio?: Prisma.ejercicioUpdateOneRequiredWithoutActuacionNestedInput;
    actuacionagrupacion?: Prisma.actuacionagrupacionUpdateManyWithoutActuacionNestedInput;
    asistencia?: Prisma.asistenciaUpdateManyWithoutActuacionNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUpdateManyWithoutActuacionNestedInput;
};
export type actuacionUncheckedUpdateWithoutFacturaclienteInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    contratacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    lugar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacionagrupacion?: Prisma.actuacionagrupacionUncheckedUpdateManyWithoutActuacionNestedInput;
    asistencia?: Prisma.asistenciaUncheckedUpdateManyWithoutActuacionNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedUpdateManyWithoutActuacionNestedInput;
};
export type actuacionCreateWithoutFacturaproveedorInput = {
    id: string;
    fecha: Date | string;
    nombre: string;
    lugar?: string | null;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    contratacion?: Prisma.contratacionCreateNestedOneWithoutActuacionInput;
    ejercicio: Prisma.ejercicioCreateNestedOneWithoutActuacionInput;
    actuacionagrupacion?: Prisma.actuacionagrupacionCreateNestedManyWithoutActuacionInput;
    asistencia?: Prisma.asistenciaCreateNestedManyWithoutActuacionInput;
    facturacliente?: Prisma.facturaclienteCreateNestedManyWithoutActuacionInput;
};
export type actuacionUncheckedCreateWithoutFacturaproveedorInput = {
    id: string;
    ejercicioId: string;
    contratacionId?: string | null;
    fecha: Date | string;
    nombre: string;
    lugar?: string | null;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacionagrupacion?: Prisma.actuacionagrupacionUncheckedCreateNestedManyWithoutActuacionInput;
    asistencia?: Prisma.asistenciaUncheckedCreateNestedManyWithoutActuacionInput;
    facturacliente?: Prisma.facturaclienteUncheckedCreateNestedManyWithoutActuacionInput;
};
export type actuacionCreateOrConnectWithoutFacturaproveedorInput = {
    where: Prisma.actuacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.actuacionCreateWithoutFacturaproveedorInput, Prisma.actuacionUncheckedCreateWithoutFacturaproveedorInput>;
};
export type actuacionUpsertWithoutFacturaproveedorInput = {
    update: Prisma.XOR<Prisma.actuacionUpdateWithoutFacturaproveedorInput, Prisma.actuacionUncheckedUpdateWithoutFacturaproveedorInput>;
    create: Prisma.XOR<Prisma.actuacionCreateWithoutFacturaproveedorInput, Prisma.actuacionUncheckedCreateWithoutFacturaproveedorInput>;
    where?: Prisma.actuacionWhereInput;
};
export type actuacionUpdateToOneWithWhereWithoutFacturaproveedorInput = {
    where?: Prisma.actuacionWhereInput;
    data: Prisma.XOR<Prisma.actuacionUpdateWithoutFacturaproveedorInput, Prisma.actuacionUncheckedUpdateWithoutFacturaproveedorInput>;
};
export type actuacionUpdateWithoutFacturaproveedorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    lugar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contratacion?: Prisma.contratacionUpdateOneWithoutActuacionNestedInput;
    ejercicio?: Prisma.ejercicioUpdateOneRequiredWithoutActuacionNestedInput;
    actuacionagrupacion?: Prisma.actuacionagrupacionUpdateManyWithoutActuacionNestedInput;
    asistencia?: Prisma.asistenciaUpdateManyWithoutActuacionNestedInput;
    facturacliente?: Prisma.facturaclienteUpdateManyWithoutActuacionNestedInput;
};
export type actuacionUncheckedUpdateWithoutFacturaproveedorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    contratacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    lugar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacionagrupacion?: Prisma.actuacionagrupacionUncheckedUpdateManyWithoutActuacionNestedInput;
    asistencia?: Prisma.asistenciaUncheckedUpdateManyWithoutActuacionNestedInput;
    facturacliente?: Prisma.facturaclienteUncheckedUpdateManyWithoutActuacionNestedInput;
};
export type actuacionCreateManyContratacionInput = {
    id: string;
    ejercicioId: string;
    fecha: Date | string;
    nombre: string;
    lugar?: string | null;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type actuacionUpdateWithoutContratacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    lugar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ejercicio?: Prisma.ejercicioUpdateOneRequiredWithoutActuacionNestedInput;
    actuacionagrupacion?: Prisma.actuacionagrupacionUpdateManyWithoutActuacionNestedInput;
    asistencia?: Prisma.asistenciaUpdateManyWithoutActuacionNestedInput;
    facturacliente?: Prisma.facturaclienteUpdateManyWithoutActuacionNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUpdateManyWithoutActuacionNestedInput;
};
export type actuacionUncheckedUpdateWithoutContratacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    lugar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacionagrupacion?: Prisma.actuacionagrupacionUncheckedUpdateManyWithoutActuacionNestedInput;
    asistencia?: Prisma.asistenciaUncheckedUpdateManyWithoutActuacionNestedInput;
    facturacliente?: Prisma.facturaclienteUncheckedUpdateManyWithoutActuacionNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedUpdateManyWithoutActuacionNestedInput;
};
export type actuacionUncheckedUpdateManyWithoutContratacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    lugar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type actuacionCreateManyEjercicioInput = {
    id: string;
    contratacionId?: string | null;
    fecha: Date | string;
    nombre: string;
    lugar?: string | null;
    importeAcordado?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type actuacionUpdateWithoutEjercicioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    lugar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contratacion?: Prisma.contratacionUpdateOneWithoutActuacionNestedInput;
    actuacionagrupacion?: Prisma.actuacionagrupacionUpdateManyWithoutActuacionNestedInput;
    asistencia?: Prisma.asistenciaUpdateManyWithoutActuacionNestedInput;
    facturacliente?: Prisma.facturaclienteUpdateManyWithoutActuacionNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUpdateManyWithoutActuacionNestedInput;
};
export type actuacionUncheckedUpdateWithoutEjercicioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contratacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    lugar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacionagrupacion?: Prisma.actuacionagrupacionUncheckedUpdateManyWithoutActuacionNestedInput;
    asistencia?: Prisma.asistenciaUncheckedUpdateManyWithoutActuacionNestedInput;
    facturacliente?: Prisma.facturaclienteUncheckedUpdateManyWithoutActuacionNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUncheckedUpdateManyWithoutActuacionNestedInput;
};
export type actuacionUncheckedUpdateManyWithoutEjercicioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contratacionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    lugar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importeAcordado?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ActuacionCountOutputType
 */
export type ActuacionCountOutputType = {
    actuacionagrupacion: number;
    asistencia: number;
    facturacliente: number;
    facturaproveedor: number;
};
export type ActuacionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actuacionagrupacion?: boolean | ActuacionCountOutputTypeCountActuacionagrupacionArgs;
    asistencia?: boolean | ActuacionCountOutputTypeCountAsistenciaArgs;
    facturacliente?: boolean | ActuacionCountOutputTypeCountFacturaclienteArgs;
    facturaproveedor?: boolean | ActuacionCountOutputTypeCountFacturaproveedorArgs;
};
/**
 * ActuacionCountOutputType without action
 */
export type ActuacionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActuacionCountOutputType
     */
    select?: Prisma.ActuacionCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ActuacionCountOutputType without action
 */
export type ActuacionCountOutputTypeCountActuacionagrupacionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.actuacionagrupacionWhereInput;
};
/**
 * ActuacionCountOutputType without action
 */
export type ActuacionCountOutputTypeCountAsistenciaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.asistenciaWhereInput;
};
/**
 * ActuacionCountOutputType without action
 */
export type ActuacionCountOutputTypeCountFacturaclienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaclienteWhereInput;
};
/**
 * ActuacionCountOutputType without action
 */
export type ActuacionCountOutputTypeCountFacturaproveedorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaproveedorWhereInput;
};
export type actuacionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ejercicioId?: boolean;
    contratacionId?: boolean;
    fecha?: boolean;
    nombre?: boolean;
    lugar?: boolean;
    importeAcordado?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    contratacion?: boolean | Prisma.actuacion$contratacionArgs<ExtArgs>;
    ejercicio?: boolean | Prisma.ejercicioDefaultArgs<ExtArgs>;
    actuacionagrupacion?: boolean | Prisma.actuacion$actuacionagrupacionArgs<ExtArgs>;
    asistencia?: boolean | Prisma.actuacion$asistenciaArgs<ExtArgs>;
    facturacliente?: boolean | Prisma.actuacion$facturaclienteArgs<ExtArgs>;
    facturaproveedor?: boolean | Prisma.actuacion$facturaproveedorArgs<ExtArgs>;
    _count?: boolean | Prisma.ActuacionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["actuacion"]>;
export type actuacionSelectScalar = {
    id?: boolean;
    ejercicioId?: boolean;
    contratacionId?: boolean;
    fecha?: boolean;
    nombre?: boolean;
    lugar?: boolean;
    importeAcordado?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type actuacionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ejercicioId" | "contratacionId" | "fecha" | "nombre" | "lugar" | "importeAcordado" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["actuacion"]>;
export type actuacionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contratacion?: boolean | Prisma.actuacion$contratacionArgs<ExtArgs>;
    ejercicio?: boolean | Prisma.ejercicioDefaultArgs<ExtArgs>;
    actuacionagrupacion?: boolean | Prisma.actuacion$actuacionagrupacionArgs<ExtArgs>;
    asistencia?: boolean | Prisma.actuacion$asistenciaArgs<ExtArgs>;
    facturacliente?: boolean | Prisma.actuacion$facturaclienteArgs<ExtArgs>;
    facturaproveedor?: boolean | Prisma.actuacion$facturaproveedorArgs<ExtArgs>;
    _count?: boolean | Prisma.ActuacionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $actuacionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "actuacion";
    objects: {
        contratacion: Prisma.$contratacionPayload<ExtArgs> | null;
        ejercicio: Prisma.$ejercicioPayload<ExtArgs>;
        actuacionagrupacion: Prisma.$actuacionagrupacionPayload<ExtArgs>[];
        asistencia: Prisma.$asistenciaPayload<ExtArgs>[];
        facturacliente: Prisma.$facturaclientePayload<ExtArgs>[];
        facturaproveedor: Prisma.$facturaproveedorPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ejercicioId: string;
        contratacionId: string | null;
        fecha: Date;
        nombre: string;
        lugar: string | null;
        importeAcordado: runtime.Decimal | null;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["actuacion"]>;
    composites: {};
};
export type actuacionGetPayload<S extends boolean | null | undefined | actuacionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$actuacionPayload, S>;
export type actuacionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<actuacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ActuacionCountAggregateInputType | true;
};
export interface actuacionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['actuacion'];
        meta: {
            name: 'actuacion';
        };
    };
    /**
     * Find zero or one Actuacion that matches the filter.
     * @param {actuacionFindUniqueArgs} args - Arguments to find a Actuacion
     * @example
     * // Get one Actuacion
     * const actuacion = await prisma.actuacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends actuacionFindUniqueArgs>(args: Prisma.SelectSubset<T, actuacionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__actuacionClient<runtime.Types.Result.GetResult<Prisma.$actuacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Actuacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {actuacionFindUniqueOrThrowArgs} args - Arguments to find a Actuacion
     * @example
     * // Get one Actuacion
     * const actuacion = await prisma.actuacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends actuacionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, actuacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__actuacionClient<runtime.Types.Result.GetResult<Prisma.$actuacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Actuacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actuacionFindFirstArgs} args - Arguments to find a Actuacion
     * @example
     * // Get one Actuacion
     * const actuacion = await prisma.actuacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends actuacionFindFirstArgs>(args?: Prisma.SelectSubset<T, actuacionFindFirstArgs<ExtArgs>>): Prisma.Prisma__actuacionClient<runtime.Types.Result.GetResult<Prisma.$actuacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Actuacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actuacionFindFirstOrThrowArgs} args - Arguments to find a Actuacion
     * @example
     * // Get one Actuacion
     * const actuacion = await prisma.actuacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends actuacionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, actuacionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__actuacionClient<runtime.Types.Result.GetResult<Prisma.$actuacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Actuacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actuacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actuacions
     * const actuacions = await prisma.actuacion.findMany()
     *
     * // Get first 10 Actuacions
     * const actuacions = await prisma.actuacion.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const actuacionWithIdOnly = await prisma.actuacion.findMany({ select: { id: true } })
     *
     */
    findMany<T extends actuacionFindManyArgs>(args?: Prisma.SelectSubset<T, actuacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$actuacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Actuacion.
     * @param {actuacionCreateArgs} args - Arguments to create a Actuacion.
     * @example
     * // Create one Actuacion
     * const Actuacion = await prisma.actuacion.create({
     *   data: {
     *     // ... data to create a Actuacion
     *   }
     * })
     *
     */
    create<T extends actuacionCreateArgs>(args: Prisma.SelectSubset<T, actuacionCreateArgs<ExtArgs>>): Prisma.Prisma__actuacionClient<runtime.Types.Result.GetResult<Prisma.$actuacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Actuacions.
     * @param {actuacionCreateManyArgs} args - Arguments to create many Actuacions.
     * @example
     * // Create many Actuacions
     * const actuacion = await prisma.actuacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends actuacionCreateManyArgs>(args?: Prisma.SelectSubset<T, actuacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Actuacion.
     * @param {actuacionDeleteArgs} args - Arguments to delete one Actuacion.
     * @example
     * // Delete one Actuacion
     * const Actuacion = await prisma.actuacion.delete({
     *   where: {
     *     // ... filter to delete one Actuacion
     *   }
     * })
     *
     */
    delete<T extends actuacionDeleteArgs>(args: Prisma.SelectSubset<T, actuacionDeleteArgs<ExtArgs>>): Prisma.Prisma__actuacionClient<runtime.Types.Result.GetResult<Prisma.$actuacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Actuacion.
     * @param {actuacionUpdateArgs} args - Arguments to update one Actuacion.
     * @example
     * // Update one Actuacion
     * const actuacion = await prisma.actuacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends actuacionUpdateArgs>(args: Prisma.SelectSubset<T, actuacionUpdateArgs<ExtArgs>>): Prisma.Prisma__actuacionClient<runtime.Types.Result.GetResult<Prisma.$actuacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Actuacions.
     * @param {actuacionDeleteManyArgs} args - Arguments to filter Actuacions to delete.
     * @example
     * // Delete a few Actuacions
     * const { count } = await prisma.actuacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends actuacionDeleteManyArgs>(args?: Prisma.SelectSubset<T, actuacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Actuacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actuacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actuacions
     * const actuacion = await prisma.actuacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends actuacionUpdateManyArgs>(args: Prisma.SelectSubset<T, actuacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Actuacion.
     * @param {actuacionUpsertArgs} args - Arguments to update or create a Actuacion.
     * @example
     * // Update or create a Actuacion
     * const actuacion = await prisma.actuacion.upsert({
     *   create: {
     *     // ... data to create a Actuacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actuacion we want to update
     *   }
     * })
     */
    upsert<T extends actuacionUpsertArgs>(args: Prisma.SelectSubset<T, actuacionUpsertArgs<ExtArgs>>): Prisma.Prisma__actuacionClient<runtime.Types.Result.GetResult<Prisma.$actuacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Actuacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actuacionCountArgs} args - Arguments to filter Actuacions to count.
     * @example
     * // Count the number of Actuacions
     * const count = await prisma.actuacion.count({
     *   where: {
     *     // ... the filter for the Actuacions we want to count
     *   }
     * })
    **/
    count<T extends actuacionCountArgs>(args?: Prisma.Subset<T, actuacionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ActuacionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Actuacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActuacionAggregateArgs>(args: Prisma.Subset<T, ActuacionAggregateArgs>): Prisma.PrismaPromise<GetActuacionAggregateType<T>>;
    /**
     * Group by Actuacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actuacionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends actuacionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: actuacionGroupByArgs['orderBy'];
    } : {
        orderBy?: actuacionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, actuacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActuacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the actuacion model
     */
    readonly fields: actuacionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for actuacion.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__actuacionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    contratacion<T extends Prisma.actuacion$contratacionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.actuacion$contratacionArgs<ExtArgs>>): Prisma.Prisma__contratacionClient<runtime.Types.Result.GetResult<Prisma.$contratacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    ejercicio<T extends Prisma.ejercicioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ejercicioDefaultArgs<ExtArgs>>): Prisma.Prisma__ejercicioClient<runtime.Types.Result.GetResult<Prisma.$ejercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    actuacionagrupacion<T extends Prisma.actuacion$actuacionagrupacionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.actuacion$actuacionagrupacionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$actuacionagrupacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    asistencia<T extends Prisma.actuacion$asistenciaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.actuacion$asistenciaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    facturacliente<T extends Prisma.actuacion$facturaclienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.actuacion$facturaclienteArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturaclientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    facturaproveedor<T extends Prisma.actuacion$facturaproveedorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.actuacion$facturaproveedorArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturaproveedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the actuacion model
 */
export interface actuacionFieldRefs {
    readonly id: Prisma.FieldRef<"actuacion", 'String'>;
    readonly ejercicioId: Prisma.FieldRef<"actuacion", 'String'>;
    readonly contratacionId: Prisma.FieldRef<"actuacion", 'String'>;
    readonly fecha: Prisma.FieldRef<"actuacion", 'DateTime'>;
    readonly nombre: Prisma.FieldRef<"actuacion", 'String'>;
    readonly lugar: Prisma.FieldRef<"actuacion", 'String'>;
    readonly importeAcordado: Prisma.FieldRef<"actuacion", 'Decimal'>;
    readonly observaciones: Prisma.FieldRef<"actuacion", 'String'>;
    readonly createdAt: Prisma.FieldRef<"actuacion", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"actuacion", 'DateTime'>;
}
/**
 * actuacion findUnique
 */
export type actuacionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which actuacion to fetch.
     */
    where: Prisma.actuacionWhereUniqueInput;
};
/**
 * actuacion findUniqueOrThrow
 */
export type actuacionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which actuacion to fetch.
     */
    where: Prisma.actuacionWhereUniqueInput;
};
/**
 * actuacion findFirst
 */
export type actuacionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which actuacion to fetch.
     */
    where?: Prisma.actuacionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of actuacions to fetch.
     */
    orderBy?: Prisma.actuacionOrderByWithRelationInput | Prisma.actuacionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for actuacions.
     */
    cursor?: Prisma.actuacionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` actuacions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` actuacions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of actuacions.
     */
    distinct?: Prisma.ActuacionScalarFieldEnum | Prisma.ActuacionScalarFieldEnum[];
};
/**
 * actuacion findFirstOrThrow
 */
export type actuacionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which actuacion to fetch.
     */
    where?: Prisma.actuacionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of actuacions to fetch.
     */
    orderBy?: Prisma.actuacionOrderByWithRelationInput | Prisma.actuacionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for actuacions.
     */
    cursor?: Prisma.actuacionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` actuacions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` actuacions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of actuacions.
     */
    distinct?: Prisma.ActuacionScalarFieldEnum | Prisma.ActuacionScalarFieldEnum[];
};
/**
 * actuacion findMany
 */
export type actuacionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which actuacions to fetch.
     */
    where?: Prisma.actuacionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of actuacions to fetch.
     */
    orderBy?: Prisma.actuacionOrderByWithRelationInput | Prisma.actuacionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing actuacions.
     */
    cursor?: Prisma.actuacionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` actuacions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` actuacions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of actuacions.
     */
    distinct?: Prisma.ActuacionScalarFieldEnum | Prisma.ActuacionScalarFieldEnum[];
};
/**
 * actuacion create
 */
export type actuacionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a actuacion.
     */
    data: Prisma.XOR<Prisma.actuacionCreateInput, Prisma.actuacionUncheckedCreateInput>;
};
/**
 * actuacion createMany
 */
export type actuacionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many actuacions.
     */
    data: Prisma.actuacionCreateManyInput | Prisma.actuacionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * actuacion update
 */
export type actuacionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a actuacion.
     */
    data: Prisma.XOR<Prisma.actuacionUpdateInput, Prisma.actuacionUncheckedUpdateInput>;
    /**
     * Choose, which actuacion to update.
     */
    where: Prisma.actuacionWhereUniqueInput;
};
/**
 * actuacion updateMany
 */
export type actuacionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update actuacions.
     */
    data: Prisma.XOR<Prisma.actuacionUpdateManyMutationInput, Prisma.actuacionUncheckedUpdateManyInput>;
    /**
     * Filter which actuacions to update
     */
    where?: Prisma.actuacionWhereInput;
    /**
     * Limit how many actuacions to update.
     */
    limit?: number;
};
/**
 * actuacion upsert
 */
export type actuacionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the actuacion to update in case it exists.
     */
    where: Prisma.actuacionWhereUniqueInput;
    /**
     * In case the actuacion found by the `where` argument doesn't exist, create a new actuacion with this data.
     */
    create: Prisma.XOR<Prisma.actuacionCreateInput, Prisma.actuacionUncheckedCreateInput>;
    /**
     * In case the actuacion was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.actuacionUpdateInput, Prisma.actuacionUncheckedUpdateInput>;
};
/**
 * actuacion delete
 */
export type actuacionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which actuacion to delete.
     */
    where: Prisma.actuacionWhereUniqueInput;
};
/**
 * actuacion deleteMany
 */
export type actuacionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which actuacions to delete
     */
    where?: Prisma.actuacionWhereInput;
    /**
     * Limit how many actuacions to delete.
     */
    limit?: number;
};
/**
 * actuacion.contratacion
 */
export type actuacion$contratacionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * actuacion.actuacionagrupacion
 */
export type actuacion$actuacionagrupacionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actuacionagrupacion
     */
    select?: Prisma.actuacionagrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the actuacionagrupacion
     */
    omit?: Prisma.actuacionagrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.actuacionagrupacionInclude<ExtArgs> | null;
    where?: Prisma.actuacionagrupacionWhereInput;
    orderBy?: Prisma.actuacionagrupacionOrderByWithRelationInput | Prisma.actuacionagrupacionOrderByWithRelationInput[];
    cursor?: Prisma.actuacionagrupacionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActuacionagrupacionScalarFieldEnum | Prisma.ActuacionagrupacionScalarFieldEnum[];
};
/**
 * actuacion.asistencia
 */
export type actuacion$asistenciaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asistencia
     */
    select?: Prisma.asistenciaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the asistencia
     */
    omit?: Prisma.asistenciaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.asistenciaInclude<ExtArgs> | null;
    where?: Prisma.asistenciaWhereInput;
    orderBy?: Prisma.asistenciaOrderByWithRelationInput | Prisma.asistenciaOrderByWithRelationInput[];
    cursor?: Prisma.asistenciaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AsistenciaScalarFieldEnum | Prisma.AsistenciaScalarFieldEnum[];
};
/**
 * actuacion.facturacliente
 */
export type actuacion$facturaclienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * actuacion.facturaproveedor
 */
export type actuacion$facturaproveedorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * actuacion without action
 */
export type actuacionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=actuacion.d.ts.map