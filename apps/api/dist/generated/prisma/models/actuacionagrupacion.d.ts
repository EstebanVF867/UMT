import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model actuacionagrupacion
 *
 */
export type actuacionagrupacionModel = runtime.Types.Result.DefaultSelection<Prisma.$actuacionagrupacionPayload>;
export type AggregateActuacionagrupacion = {
    _count: ActuacionagrupacionCountAggregateOutputType | null;
    _min: ActuacionagrupacionMinAggregateOutputType | null;
    _max: ActuacionagrupacionMaxAggregateOutputType | null;
};
export type ActuacionagrupacionMinAggregateOutputType = {
    id: string | null;
    actuacionId: string | null;
    agrupacionId: string | null;
    createdAt: Date | null;
};
export type ActuacionagrupacionMaxAggregateOutputType = {
    id: string | null;
    actuacionId: string | null;
    agrupacionId: string | null;
    createdAt: Date | null;
};
export type ActuacionagrupacionCountAggregateOutputType = {
    id: number;
    actuacionId: number;
    agrupacionId: number;
    createdAt: number;
    _all: number;
};
export type ActuacionagrupacionMinAggregateInputType = {
    id?: true;
    actuacionId?: true;
    agrupacionId?: true;
    createdAt?: true;
};
export type ActuacionagrupacionMaxAggregateInputType = {
    id?: true;
    actuacionId?: true;
    agrupacionId?: true;
    createdAt?: true;
};
export type ActuacionagrupacionCountAggregateInputType = {
    id?: true;
    actuacionId?: true;
    agrupacionId?: true;
    createdAt?: true;
    _all?: true;
};
export type ActuacionagrupacionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which actuacionagrupacion to aggregate.
     */
    where?: Prisma.actuacionagrupacionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of actuacionagrupacions to fetch.
     */
    orderBy?: Prisma.actuacionagrupacionOrderByWithRelationInput | Prisma.actuacionagrupacionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.actuacionagrupacionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` actuacionagrupacions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` actuacionagrupacions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned actuacionagrupacions
    **/
    _count?: true | ActuacionagrupacionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ActuacionagrupacionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ActuacionagrupacionMaxAggregateInputType;
};
export type GetActuacionagrupacionAggregateType<T extends ActuacionagrupacionAggregateArgs> = {
    [P in keyof T & keyof AggregateActuacionagrupacion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateActuacionagrupacion[P]> : Prisma.GetScalarType<T[P], AggregateActuacionagrupacion[P]>;
};
export type actuacionagrupacionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.actuacionagrupacionWhereInput;
    orderBy?: Prisma.actuacionagrupacionOrderByWithAggregationInput | Prisma.actuacionagrupacionOrderByWithAggregationInput[];
    by: Prisma.ActuacionagrupacionScalarFieldEnum[] | Prisma.ActuacionagrupacionScalarFieldEnum;
    having?: Prisma.actuacionagrupacionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ActuacionagrupacionCountAggregateInputType | true;
    _min?: ActuacionagrupacionMinAggregateInputType;
    _max?: ActuacionagrupacionMaxAggregateInputType;
};
export type ActuacionagrupacionGroupByOutputType = {
    id: string;
    actuacionId: string;
    agrupacionId: string;
    createdAt: Date;
    _count: ActuacionagrupacionCountAggregateOutputType | null;
    _min: ActuacionagrupacionMinAggregateOutputType | null;
    _max: ActuacionagrupacionMaxAggregateOutputType | null;
};
export type GetActuacionagrupacionGroupByPayload<T extends actuacionagrupacionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ActuacionagrupacionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ActuacionagrupacionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ActuacionagrupacionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ActuacionagrupacionGroupByOutputType[P]>;
}>>;
export type actuacionagrupacionWhereInput = {
    AND?: Prisma.actuacionagrupacionWhereInput | Prisma.actuacionagrupacionWhereInput[];
    OR?: Prisma.actuacionagrupacionWhereInput[];
    NOT?: Prisma.actuacionagrupacionWhereInput | Prisma.actuacionagrupacionWhereInput[];
    id?: Prisma.StringFilter<"actuacionagrupacion"> | string;
    actuacionId?: Prisma.StringFilter<"actuacionagrupacion"> | string;
    agrupacionId?: Prisma.StringFilter<"actuacionagrupacion"> | string;
    createdAt?: Prisma.DateTimeFilter<"actuacionagrupacion"> | Date | string;
    actuacion?: Prisma.XOR<Prisma.ActuacionScalarRelationFilter, Prisma.actuacionWhereInput>;
    agrupacion?: Prisma.XOR<Prisma.AgrupacionScalarRelationFilter, Prisma.agrupacionWhereInput>;
};
export type actuacionagrupacionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    actuacionId?: Prisma.SortOrder;
    agrupacionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    actuacion?: Prisma.actuacionOrderByWithRelationInput;
    agrupacion?: Prisma.agrupacionOrderByWithRelationInput;
    _relevance?: Prisma.actuacionagrupacionOrderByRelevanceInput;
};
export type actuacionagrupacionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    actuacionId_agrupacionId?: Prisma.actuacionagrupacionActuacionIdAgrupacionIdCompoundUniqueInput;
    AND?: Prisma.actuacionagrupacionWhereInput | Prisma.actuacionagrupacionWhereInput[];
    OR?: Prisma.actuacionagrupacionWhereInput[];
    NOT?: Prisma.actuacionagrupacionWhereInput | Prisma.actuacionagrupacionWhereInput[];
    actuacionId?: Prisma.StringFilter<"actuacionagrupacion"> | string;
    agrupacionId?: Prisma.StringFilter<"actuacionagrupacion"> | string;
    createdAt?: Prisma.DateTimeFilter<"actuacionagrupacion"> | Date | string;
    actuacion?: Prisma.XOR<Prisma.ActuacionScalarRelationFilter, Prisma.actuacionWhereInput>;
    agrupacion?: Prisma.XOR<Prisma.AgrupacionScalarRelationFilter, Prisma.agrupacionWhereInput>;
}, "id" | "actuacionId_agrupacionId">;
export type actuacionagrupacionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    actuacionId?: Prisma.SortOrder;
    agrupacionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.actuacionagrupacionCountOrderByAggregateInput;
    _max?: Prisma.actuacionagrupacionMaxOrderByAggregateInput;
    _min?: Prisma.actuacionagrupacionMinOrderByAggregateInput;
};
export type actuacionagrupacionScalarWhereWithAggregatesInput = {
    AND?: Prisma.actuacionagrupacionScalarWhereWithAggregatesInput | Prisma.actuacionagrupacionScalarWhereWithAggregatesInput[];
    OR?: Prisma.actuacionagrupacionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.actuacionagrupacionScalarWhereWithAggregatesInput | Prisma.actuacionagrupacionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"actuacionagrupacion"> | string;
    actuacionId?: Prisma.StringWithAggregatesFilter<"actuacionagrupacion"> | string;
    agrupacionId?: Prisma.StringWithAggregatesFilter<"actuacionagrupacion"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"actuacionagrupacion"> | Date | string;
};
export type actuacionagrupacionCreateInput = {
    id: string;
    createdAt?: Date | string;
    actuacion: Prisma.actuacionCreateNestedOneWithoutActuacionagrupacionInput;
    agrupacion: Prisma.agrupacionCreateNestedOneWithoutActuacionagrupacionInput;
};
export type actuacionagrupacionUncheckedCreateInput = {
    id: string;
    actuacionId: string;
    agrupacionId: string;
    createdAt?: Date | string;
};
export type actuacionagrupacionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUpdateOneRequiredWithoutActuacionagrupacionNestedInput;
    agrupacion?: Prisma.agrupacionUpdateOneRequiredWithoutActuacionagrupacionNestedInput;
};
export type actuacionagrupacionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actuacionId?: Prisma.StringFieldUpdateOperationsInput | string;
    agrupacionId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type actuacionagrupacionCreateManyInput = {
    id: string;
    actuacionId: string;
    agrupacionId: string;
    createdAt?: Date | string;
};
export type actuacionagrupacionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type actuacionagrupacionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actuacionId?: Prisma.StringFieldUpdateOperationsInput | string;
    agrupacionId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActuacionagrupacionListRelationFilter = {
    every?: Prisma.actuacionagrupacionWhereInput;
    some?: Prisma.actuacionagrupacionWhereInput;
    none?: Prisma.actuacionagrupacionWhereInput;
};
export type actuacionagrupacionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type actuacionagrupacionOrderByRelevanceInput = {
    fields: Prisma.actuacionagrupacionOrderByRelevanceFieldEnum | Prisma.actuacionagrupacionOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type actuacionagrupacionActuacionIdAgrupacionIdCompoundUniqueInput = {
    actuacionId: string;
    agrupacionId: string;
};
export type actuacionagrupacionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    actuacionId?: Prisma.SortOrder;
    agrupacionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type actuacionagrupacionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    actuacionId?: Prisma.SortOrder;
    agrupacionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type actuacionagrupacionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    actuacionId?: Prisma.SortOrder;
    agrupacionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type actuacionagrupacionCreateNestedManyWithoutActuacionInput = {
    create?: Prisma.XOR<Prisma.actuacionagrupacionCreateWithoutActuacionInput, Prisma.actuacionagrupacionUncheckedCreateWithoutActuacionInput> | Prisma.actuacionagrupacionCreateWithoutActuacionInput[] | Prisma.actuacionagrupacionUncheckedCreateWithoutActuacionInput[];
    connectOrCreate?: Prisma.actuacionagrupacionCreateOrConnectWithoutActuacionInput | Prisma.actuacionagrupacionCreateOrConnectWithoutActuacionInput[];
    createMany?: Prisma.actuacionagrupacionCreateManyActuacionInputEnvelope;
    connect?: Prisma.actuacionagrupacionWhereUniqueInput | Prisma.actuacionagrupacionWhereUniqueInput[];
};
export type actuacionagrupacionUncheckedCreateNestedManyWithoutActuacionInput = {
    create?: Prisma.XOR<Prisma.actuacionagrupacionCreateWithoutActuacionInput, Prisma.actuacionagrupacionUncheckedCreateWithoutActuacionInput> | Prisma.actuacionagrupacionCreateWithoutActuacionInput[] | Prisma.actuacionagrupacionUncheckedCreateWithoutActuacionInput[];
    connectOrCreate?: Prisma.actuacionagrupacionCreateOrConnectWithoutActuacionInput | Prisma.actuacionagrupacionCreateOrConnectWithoutActuacionInput[];
    createMany?: Prisma.actuacionagrupacionCreateManyActuacionInputEnvelope;
    connect?: Prisma.actuacionagrupacionWhereUniqueInput | Prisma.actuacionagrupacionWhereUniqueInput[];
};
export type actuacionagrupacionUpdateManyWithoutActuacionNestedInput = {
    create?: Prisma.XOR<Prisma.actuacionagrupacionCreateWithoutActuacionInput, Prisma.actuacionagrupacionUncheckedCreateWithoutActuacionInput> | Prisma.actuacionagrupacionCreateWithoutActuacionInput[] | Prisma.actuacionagrupacionUncheckedCreateWithoutActuacionInput[];
    connectOrCreate?: Prisma.actuacionagrupacionCreateOrConnectWithoutActuacionInput | Prisma.actuacionagrupacionCreateOrConnectWithoutActuacionInput[];
    upsert?: Prisma.actuacionagrupacionUpsertWithWhereUniqueWithoutActuacionInput | Prisma.actuacionagrupacionUpsertWithWhereUniqueWithoutActuacionInput[];
    createMany?: Prisma.actuacionagrupacionCreateManyActuacionInputEnvelope;
    set?: Prisma.actuacionagrupacionWhereUniqueInput | Prisma.actuacionagrupacionWhereUniqueInput[];
    disconnect?: Prisma.actuacionagrupacionWhereUniqueInput | Prisma.actuacionagrupacionWhereUniqueInput[];
    delete?: Prisma.actuacionagrupacionWhereUniqueInput | Prisma.actuacionagrupacionWhereUniqueInput[];
    connect?: Prisma.actuacionagrupacionWhereUniqueInput | Prisma.actuacionagrupacionWhereUniqueInput[];
    update?: Prisma.actuacionagrupacionUpdateWithWhereUniqueWithoutActuacionInput | Prisma.actuacionagrupacionUpdateWithWhereUniqueWithoutActuacionInput[];
    updateMany?: Prisma.actuacionagrupacionUpdateManyWithWhereWithoutActuacionInput | Prisma.actuacionagrupacionUpdateManyWithWhereWithoutActuacionInput[];
    deleteMany?: Prisma.actuacionagrupacionScalarWhereInput | Prisma.actuacionagrupacionScalarWhereInput[];
};
export type actuacionagrupacionUncheckedUpdateManyWithoutActuacionNestedInput = {
    create?: Prisma.XOR<Prisma.actuacionagrupacionCreateWithoutActuacionInput, Prisma.actuacionagrupacionUncheckedCreateWithoutActuacionInput> | Prisma.actuacionagrupacionCreateWithoutActuacionInput[] | Prisma.actuacionagrupacionUncheckedCreateWithoutActuacionInput[];
    connectOrCreate?: Prisma.actuacionagrupacionCreateOrConnectWithoutActuacionInput | Prisma.actuacionagrupacionCreateOrConnectWithoutActuacionInput[];
    upsert?: Prisma.actuacionagrupacionUpsertWithWhereUniqueWithoutActuacionInput | Prisma.actuacionagrupacionUpsertWithWhereUniqueWithoutActuacionInput[];
    createMany?: Prisma.actuacionagrupacionCreateManyActuacionInputEnvelope;
    set?: Prisma.actuacionagrupacionWhereUniqueInput | Prisma.actuacionagrupacionWhereUniqueInput[];
    disconnect?: Prisma.actuacionagrupacionWhereUniqueInput | Prisma.actuacionagrupacionWhereUniqueInput[];
    delete?: Prisma.actuacionagrupacionWhereUniqueInput | Prisma.actuacionagrupacionWhereUniqueInput[];
    connect?: Prisma.actuacionagrupacionWhereUniqueInput | Prisma.actuacionagrupacionWhereUniqueInput[];
    update?: Prisma.actuacionagrupacionUpdateWithWhereUniqueWithoutActuacionInput | Prisma.actuacionagrupacionUpdateWithWhereUniqueWithoutActuacionInput[];
    updateMany?: Prisma.actuacionagrupacionUpdateManyWithWhereWithoutActuacionInput | Prisma.actuacionagrupacionUpdateManyWithWhereWithoutActuacionInput[];
    deleteMany?: Prisma.actuacionagrupacionScalarWhereInput | Prisma.actuacionagrupacionScalarWhereInput[];
};
export type actuacionagrupacionCreateNestedManyWithoutAgrupacionInput = {
    create?: Prisma.XOR<Prisma.actuacionagrupacionCreateWithoutAgrupacionInput, Prisma.actuacionagrupacionUncheckedCreateWithoutAgrupacionInput> | Prisma.actuacionagrupacionCreateWithoutAgrupacionInput[] | Prisma.actuacionagrupacionUncheckedCreateWithoutAgrupacionInput[];
    connectOrCreate?: Prisma.actuacionagrupacionCreateOrConnectWithoutAgrupacionInput | Prisma.actuacionagrupacionCreateOrConnectWithoutAgrupacionInput[];
    createMany?: Prisma.actuacionagrupacionCreateManyAgrupacionInputEnvelope;
    connect?: Prisma.actuacionagrupacionWhereUniqueInput | Prisma.actuacionagrupacionWhereUniqueInput[];
};
export type actuacionagrupacionUncheckedCreateNestedManyWithoutAgrupacionInput = {
    create?: Prisma.XOR<Prisma.actuacionagrupacionCreateWithoutAgrupacionInput, Prisma.actuacionagrupacionUncheckedCreateWithoutAgrupacionInput> | Prisma.actuacionagrupacionCreateWithoutAgrupacionInput[] | Prisma.actuacionagrupacionUncheckedCreateWithoutAgrupacionInput[];
    connectOrCreate?: Prisma.actuacionagrupacionCreateOrConnectWithoutAgrupacionInput | Prisma.actuacionagrupacionCreateOrConnectWithoutAgrupacionInput[];
    createMany?: Prisma.actuacionagrupacionCreateManyAgrupacionInputEnvelope;
    connect?: Prisma.actuacionagrupacionWhereUniqueInput | Prisma.actuacionagrupacionWhereUniqueInput[];
};
export type actuacionagrupacionUpdateManyWithoutAgrupacionNestedInput = {
    create?: Prisma.XOR<Prisma.actuacionagrupacionCreateWithoutAgrupacionInput, Prisma.actuacionagrupacionUncheckedCreateWithoutAgrupacionInput> | Prisma.actuacionagrupacionCreateWithoutAgrupacionInput[] | Prisma.actuacionagrupacionUncheckedCreateWithoutAgrupacionInput[];
    connectOrCreate?: Prisma.actuacionagrupacionCreateOrConnectWithoutAgrupacionInput | Prisma.actuacionagrupacionCreateOrConnectWithoutAgrupacionInput[];
    upsert?: Prisma.actuacionagrupacionUpsertWithWhereUniqueWithoutAgrupacionInput | Prisma.actuacionagrupacionUpsertWithWhereUniqueWithoutAgrupacionInput[];
    createMany?: Prisma.actuacionagrupacionCreateManyAgrupacionInputEnvelope;
    set?: Prisma.actuacionagrupacionWhereUniqueInput | Prisma.actuacionagrupacionWhereUniqueInput[];
    disconnect?: Prisma.actuacionagrupacionWhereUniqueInput | Prisma.actuacionagrupacionWhereUniqueInput[];
    delete?: Prisma.actuacionagrupacionWhereUniqueInput | Prisma.actuacionagrupacionWhereUniqueInput[];
    connect?: Prisma.actuacionagrupacionWhereUniqueInput | Prisma.actuacionagrupacionWhereUniqueInput[];
    update?: Prisma.actuacionagrupacionUpdateWithWhereUniqueWithoutAgrupacionInput | Prisma.actuacionagrupacionUpdateWithWhereUniqueWithoutAgrupacionInput[];
    updateMany?: Prisma.actuacionagrupacionUpdateManyWithWhereWithoutAgrupacionInput | Prisma.actuacionagrupacionUpdateManyWithWhereWithoutAgrupacionInput[];
    deleteMany?: Prisma.actuacionagrupacionScalarWhereInput | Prisma.actuacionagrupacionScalarWhereInput[];
};
export type actuacionagrupacionUncheckedUpdateManyWithoutAgrupacionNestedInput = {
    create?: Prisma.XOR<Prisma.actuacionagrupacionCreateWithoutAgrupacionInput, Prisma.actuacionagrupacionUncheckedCreateWithoutAgrupacionInput> | Prisma.actuacionagrupacionCreateWithoutAgrupacionInput[] | Prisma.actuacionagrupacionUncheckedCreateWithoutAgrupacionInput[];
    connectOrCreate?: Prisma.actuacionagrupacionCreateOrConnectWithoutAgrupacionInput | Prisma.actuacionagrupacionCreateOrConnectWithoutAgrupacionInput[];
    upsert?: Prisma.actuacionagrupacionUpsertWithWhereUniqueWithoutAgrupacionInput | Prisma.actuacionagrupacionUpsertWithWhereUniqueWithoutAgrupacionInput[];
    createMany?: Prisma.actuacionagrupacionCreateManyAgrupacionInputEnvelope;
    set?: Prisma.actuacionagrupacionWhereUniqueInput | Prisma.actuacionagrupacionWhereUniqueInput[];
    disconnect?: Prisma.actuacionagrupacionWhereUniqueInput | Prisma.actuacionagrupacionWhereUniqueInput[];
    delete?: Prisma.actuacionagrupacionWhereUniqueInput | Prisma.actuacionagrupacionWhereUniqueInput[];
    connect?: Prisma.actuacionagrupacionWhereUniqueInput | Prisma.actuacionagrupacionWhereUniqueInput[];
    update?: Prisma.actuacionagrupacionUpdateWithWhereUniqueWithoutAgrupacionInput | Prisma.actuacionagrupacionUpdateWithWhereUniqueWithoutAgrupacionInput[];
    updateMany?: Prisma.actuacionagrupacionUpdateManyWithWhereWithoutAgrupacionInput | Prisma.actuacionagrupacionUpdateManyWithWhereWithoutAgrupacionInput[];
    deleteMany?: Prisma.actuacionagrupacionScalarWhereInput | Prisma.actuacionagrupacionScalarWhereInput[];
};
export type actuacionagrupacionCreateWithoutActuacionInput = {
    id: string;
    createdAt?: Date | string;
    agrupacion: Prisma.agrupacionCreateNestedOneWithoutActuacionagrupacionInput;
};
export type actuacionagrupacionUncheckedCreateWithoutActuacionInput = {
    id: string;
    agrupacionId: string;
    createdAt?: Date | string;
};
export type actuacionagrupacionCreateOrConnectWithoutActuacionInput = {
    where: Prisma.actuacionagrupacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.actuacionagrupacionCreateWithoutActuacionInput, Prisma.actuacionagrupacionUncheckedCreateWithoutActuacionInput>;
};
export type actuacionagrupacionCreateManyActuacionInputEnvelope = {
    data: Prisma.actuacionagrupacionCreateManyActuacionInput | Prisma.actuacionagrupacionCreateManyActuacionInput[];
    skipDuplicates?: boolean;
};
export type actuacionagrupacionUpsertWithWhereUniqueWithoutActuacionInput = {
    where: Prisma.actuacionagrupacionWhereUniqueInput;
    update: Prisma.XOR<Prisma.actuacionagrupacionUpdateWithoutActuacionInput, Prisma.actuacionagrupacionUncheckedUpdateWithoutActuacionInput>;
    create: Prisma.XOR<Prisma.actuacionagrupacionCreateWithoutActuacionInput, Prisma.actuacionagrupacionUncheckedCreateWithoutActuacionInput>;
};
export type actuacionagrupacionUpdateWithWhereUniqueWithoutActuacionInput = {
    where: Prisma.actuacionagrupacionWhereUniqueInput;
    data: Prisma.XOR<Prisma.actuacionagrupacionUpdateWithoutActuacionInput, Prisma.actuacionagrupacionUncheckedUpdateWithoutActuacionInput>;
};
export type actuacionagrupacionUpdateManyWithWhereWithoutActuacionInput = {
    where: Prisma.actuacionagrupacionScalarWhereInput;
    data: Prisma.XOR<Prisma.actuacionagrupacionUpdateManyMutationInput, Prisma.actuacionagrupacionUncheckedUpdateManyWithoutActuacionInput>;
};
export type actuacionagrupacionScalarWhereInput = {
    AND?: Prisma.actuacionagrupacionScalarWhereInput | Prisma.actuacionagrupacionScalarWhereInput[];
    OR?: Prisma.actuacionagrupacionScalarWhereInput[];
    NOT?: Prisma.actuacionagrupacionScalarWhereInput | Prisma.actuacionagrupacionScalarWhereInput[];
    id?: Prisma.StringFilter<"actuacionagrupacion"> | string;
    actuacionId?: Prisma.StringFilter<"actuacionagrupacion"> | string;
    agrupacionId?: Prisma.StringFilter<"actuacionagrupacion"> | string;
    createdAt?: Prisma.DateTimeFilter<"actuacionagrupacion"> | Date | string;
};
export type actuacionagrupacionCreateWithoutAgrupacionInput = {
    id: string;
    createdAt?: Date | string;
    actuacion: Prisma.actuacionCreateNestedOneWithoutActuacionagrupacionInput;
};
export type actuacionagrupacionUncheckedCreateWithoutAgrupacionInput = {
    id: string;
    actuacionId: string;
    createdAt?: Date | string;
};
export type actuacionagrupacionCreateOrConnectWithoutAgrupacionInput = {
    where: Prisma.actuacionagrupacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.actuacionagrupacionCreateWithoutAgrupacionInput, Prisma.actuacionagrupacionUncheckedCreateWithoutAgrupacionInput>;
};
export type actuacionagrupacionCreateManyAgrupacionInputEnvelope = {
    data: Prisma.actuacionagrupacionCreateManyAgrupacionInput | Prisma.actuacionagrupacionCreateManyAgrupacionInput[];
    skipDuplicates?: boolean;
};
export type actuacionagrupacionUpsertWithWhereUniqueWithoutAgrupacionInput = {
    where: Prisma.actuacionagrupacionWhereUniqueInput;
    update: Prisma.XOR<Prisma.actuacionagrupacionUpdateWithoutAgrupacionInput, Prisma.actuacionagrupacionUncheckedUpdateWithoutAgrupacionInput>;
    create: Prisma.XOR<Prisma.actuacionagrupacionCreateWithoutAgrupacionInput, Prisma.actuacionagrupacionUncheckedCreateWithoutAgrupacionInput>;
};
export type actuacionagrupacionUpdateWithWhereUniqueWithoutAgrupacionInput = {
    where: Prisma.actuacionagrupacionWhereUniqueInput;
    data: Prisma.XOR<Prisma.actuacionagrupacionUpdateWithoutAgrupacionInput, Prisma.actuacionagrupacionUncheckedUpdateWithoutAgrupacionInput>;
};
export type actuacionagrupacionUpdateManyWithWhereWithoutAgrupacionInput = {
    where: Prisma.actuacionagrupacionScalarWhereInput;
    data: Prisma.XOR<Prisma.actuacionagrupacionUpdateManyMutationInput, Prisma.actuacionagrupacionUncheckedUpdateManyWithoutAgrupacionInput>;
};
export type actuacionagrupacionCreateManyActuacionInput = {
    id: string;
    agrupacionId: string;
    createdAt?: Date | string;
};
export type actuacionagrupacionUpdateWithoutActuacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    agrupacion?: Prisma.agrupacionUpdateOneRequiredWithoutActuacionagrupacionNestedInput;
};
export type actuacionagrupacionUncheckedUpdateWithoutActuacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    agrupacionId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type actuacionagrupacionUncheckedUpdateManyWithoutActuacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    agrupacionId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type actuacionagrupacionCreateManyAgrupacionInput = {
    id: string;
    actuacionId: string;
    createdAt?: Date | string;
};
export type actuacionagrupacionUpdateWithoutAgrupacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUpdateOneRequiredWithoutActuacionagrupacionNestedInput;
};
export type actuacionagrupacionUncheckedUpdateWithoutAgrupacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actuacionId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type actuacionagrupacionUncheckedUpdateManyWithoutAgrupacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actuacionId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type actuacionagrupacionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    actuacionId?: boolean;
    agrupacionId?: boolean;
    createdAt?: boolean;
    actuacion?: boolean | Prisma.actuacionDefaultArgs<ExtArgs>;
    agrupacion?: boolean | Prisma.agrupacionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["actuacionagrupacion"]>;
export type actuacionagrupacionSelectScalar = {
    id?: boolean;
    actuacionId?: boolean;
    agrupacionId?: boolean;
    createdAt?: boolean;
};
export type actuacionagrupacionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "actuacionId" | "agrupacionId" | "createdAt", ExtArgs["result"]["actuacionagrupacion"]>;
export type actuacionagrupacionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actuacion?: boolean | Prisma.actuacionDefaultArgs<ExtArgs>;
    agrupacion?: boolean | Prisma.agrupacionDefaultArgs<ExtArgs>;
};
export type $actuacionagrupacionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "actuacionagrupacion";
    objects: {
        actuacion: Prisma.$actuacionPayload<ExtArgs>;
        agrupacion: Prisma.$agrupacionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        actuacionId: string;
        agrupacionId: string;
        createdAt: Date;
    }, ExtArgs["result"]["actuacionagrupacion"]>;
    composites: {};
};
export type actuacionagrupacionGetPayload<S extends boolean | null | undefined | actuacionagrupacionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$actuacionagrupacionPayload, S>;
export type actuacionagrupacionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<actuacionagrupacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ActuacionagrupacionCountAggregateInputType | true;
};
export interface actuacionagrupacionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['actuacionagrupacion'];
        meta: {
            name: 'actuacionagrupacion';
        };
    };
    /**
     * Find zero or one Actuacionagrupacion that matches the filter.
     * @param {actuacionagrupacionFindUniqueArgs} args - Arguments to find a Actuacionagrupacion
     * @example
     * // Get one Actuacionagrupacion
     * const actuacionagrupacion = await prisma.actuacionagrupacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends actuacionagrupacionFindUniqueArgs>(args: Prisma.SelectSubset<T, actuacionagrupacionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__actuacionagrupacionClient<runtime.Types.Result.GetResult<Prisma.$actuacionagrupacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Actuacionagrupacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {actuacionagrupacionFindUniqueOrThrowArgs} args - Arguments to find a Actuacionagrupacion
     * @example
     * // Get one Actuacionagrupacion
     * const actuacionagrupacion = await prisma.actuacionagrupacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends actuacionagrupacionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, actuacionagrupacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__actuacionagrupacionClient<runtime.Types.Result.GetResult<Prisma.$actuacionagrupacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Actuacionagrupacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actuacionagrupacionFindFirstArgs} args - Arguments to find a Actuacionagrupacion
     * @example
     * // Get one Actuacionagrupacion
     * const actuacionagrupacion = await prisma.actuacionagrupacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends actuacionagrupacionFindFirstArgs>(args?: Prisma.SelectSubset<T, actuacionagrupacionFindFirstArgs<ExtArgs>>): Prisma.Prisma__actuacionagrupacionClient<runtime.Types.Result.GetResult<Prisma.$actuacionagrupacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Actuacionagrupacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actuacionagrupacionFindFirstOrThrowArgs} args - Arguments to find a Actuacionagrupacion
     * @example
     * // Get one Actuacionagrupacion
     * const actuacionagrupacion = await prisma.actuacionagrupacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends actuacionagrupacionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, actuacionagrupacionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__actuacionagrupacionClient<runtime.Types.Result.GetResult<Prisma.$actuacionagrupacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Actuacionagrupacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actuacionagrupacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actuacionagrupacions
     * const actuacionagrupacions = await prisma.actuacionagrupacion.findMany()
     *
     * // Get first 10 Actuacionagrupacions
     * const actuacionagrupacions = await prisma.actuacionagrupacion.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const actuacionagrupacionWithIdOnly = await prisma.actuacionagrupacion.findMany({ select: { id: true } })
     *
     */
    findMany<T extends actuacionagrupacionFindManyArgs>(args?: Prisma.SelectSubset<T, actuacionagrupacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$actuacionagrupacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Actuacionagrupacion.
     * @param {actuacionagrupacionCreateArgs} args - Arguments to create a Actuacionagrupacion.
     * @example
     * // Create one Actuacionagrupacion
     * const Actuacionagrupacion = await prisma.actuacionagrupacion.create({
     *   data: {
     *     // ... data to create a Actuacionagrupacion
     *   }
     * })
     *
     */
    create<T extends actuacionagrupacionCreateArgs>(args: Prisma.SelectSubset<T, actuacionagrupacionCreateArgs<ExtArgs>>): Prisma.Prisma__actuacionagrupacionClient<runtime.Types.Result.GetResult<Prisma.$actuacionagrupacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Actuacionagrupacions.
     * @param {actuacionagrupacionCreateManyArgs} args - Arguments to create many Actuacionagrupacions.
     * @example
     * // Create many Actuacionagrupacions
     * const actuacionagrupacion = await prisma.actuacionagrupacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends actuacionagrupacionCreateManyArgs>(args?: Prisma.SelectSubset<T, actuacionagrupacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Actuacionagrupacion.
     * @param {actuacionagrupacionDeleteArgs} args - Arguments to delete one Actuacionagrupacion.
     * @example
     * // Delete one Actuacionagrupacion
     * const Actuacionagrupacion = await prisma.actuacionagrupacion.delete({
     *   where: {
     *     // ... filter to delete one Actuacionagrupacion
     *   }
     * })
     *
     */
    delete<T extends actuacionagrupacionDeleteArgs>(args: Prisma.SelectSubset<T, actuacionagrupacionDeleteArgs<ExtArgs>>): Prisma.Prisma__actuacionagrupacionClient<runtime.Types.Result.GetResult<Prisma.$actuacionagrupacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Actuacionagrupacion.
     * @param {actuacionagrupacionUpdateArgs} args - Arguments to update one Actuacionagrupacion.
     * @example
     * // Update one Actuacionagrupacion
     * const actuacionagrupacion = await prisma.actuacionagrupacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends actuacionagrupacionUpdateArgs>(args: Prisma.SelectSubset<T, actuacionagrupacionUpdateArgs<ExtArgs>>): Prisma.Prisma__actuacionagrupacionClient<runtime.Types.Result.GetResult<Prisma.$actuacionagrupacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Actuacionagrupacions.
     * @param {actuacionagrupacionDeleteManyArgs} args - Arguments to filter Actuacionagrupacions to delete.
     * @example
     * // Delete a few Actuacionagrupacions
     * const { count } = await prisma.actuacionagrupacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends actuacionagrupacionDeleteManyArgs>(args?: Prisma.SelectSubset<T, actuacionagrupacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Actuacionagrupacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actuacionagrupacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actuacionagrupacions
     * const actuacionagrupacion = await prisma.actuacionagrupacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends actuacionagrupacionUpdateManyArgs>(args: Prisma.SelectSubset<T, actuacionagrupacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Actuacionagrupacion.
     * @param {actuacionagrupacionUpsertArgs} args - Arguments to update or create a Actuacionagrupacion.
     * @example
     * // Update or create a Actuacionagrupacion
     * const actuacionagrupacion = await prisma.actuacionagrupacion.upsert({
     *   create: {
     *     // ... data to create a Actuacionagrupacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actuacionagrupacion we want to update
     *   }
     * })
     */
    upsert<T extends actuacionagrupacionUpsertArgs>(args: Prisma.SelectSubset<T, actuacionagrupacionUpsertArgs<ExtArgs>>): Prisma.Prisma__actuacionagrupacionClient<runtime.Types.Result.GetResult<Prisma.$actuacionagrupacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Actuacionagrupacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actuacionagrupacionCountArgs} args - Arguments to filter Actuacionagrupacions to count.
     * @example
     * // Count the number of Actuacionagrupacions
     * const count = await prisma.actuacionagrupacion.count({
     *   where: {
     *     // ... the filter for the Actuacionagrupacions we want to count
     *   }
     * })
    **/
    count<T extends actuacionagrupacionCountArgs>(args?: Prisma.Subset<T, actuacionagrupacionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ActuacionagrupacionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Actuacionagrupacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActuacionagrupacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActuacionagrupacionAggregateArgs>(args: Prisma.Subset<T, ActuacionagrupacionAggregateArgs>): Prisma.PrismaPromise<GetActuacionagrupacionAggregateType<T>>;
    /**
     * Group by Actuacionagrupacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actuacionagrupacionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends actuacionagrupacionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: actuacionagrupacionGroupByArgs['orderBy'];
    } : {
        orderBy?: actuacionagrupacionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, actuacionagrupacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActuacionagrupacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the actuacionagrupacion model
     */
    readonly fields: actuacionagrupacionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for actuacionagrupacion.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__actuacionagrupacionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    actuacion<T extends Prisma.actuacionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.actuacionDefaultArgs<ExtArgs>>): Prisma.Prisma__actuacionClient<runtime.Types.Result.GetResult<Prisma.$actuacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    agrupacion<T extends Prisma.agrupacionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.agrupacionDefaultArgs<ExtArgs>>): Prisma.Prisma__agrupacionClient<runtime.Types.Result.GetResult<Prisma.$agrupacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the actuacionagrupacion model
 */
export interface actuacionagrupacionFieldRefs {
    readonly id: Prisma.FieldRef<"actuacionagrupacion", 'String'>;
    readonly actuacionId: Prisma.FieldRef<"actuacionagrupacion", 'String'>;
    readonly agrupacionId: Prisma.FieldRef<"actuacionagrupacion", 'String'>;
    readonly createdAt: Prisma.FieldRef<"actuacionagrupacion", 'DateTime'>;
}
/**
 * actuacionagrupacion findUnique
 */
export type actuacionagrupacionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which actuacionagrupacion to fetch.
     */
    where: Prisma.actuacionagrupacionWhereUniqueInput;
};
/**
 * actuacionagrupacion findUniqueOrThrow
 */
export type actuacionagrupacionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which actuacionagrupacion to fetch.
     */
    where: Prisma.actuacionagrupacionWhereUniqueInput;
};
/**
 * actuacionagrupacion findFirst
 */
export type actuacionagrupacionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which actuacionagrupacion to fetch.
     */
    where?: Prisma.actuacionagrupacionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of actuacionagrupacions to fetch.
     */
    orderBy?: Prisma.actuacionagrupacionOrderByWithRelationInput | Prisma.actuacionagrupacionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for actuacionagrupacions.
     */
    cursor?: Prisma.actuacionagrupacionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` actuacionagrupacions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` actuacionagrupacions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of actuacionagrupacions.
     */
    distinct?: Prisma.ActuacionagrupacionScalarFieldEnum | Prisma.ActuacionagrupacionScalarFieldEnum[];
};
/**
 * actuacionagrupacion findFirstOrThrow
 */
export type actuacionagrupacionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which actuacionagrupacion to fetch.
     */
    where?: Prisma.actuacionagrupacionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of actuacionagrupacions to fetch.
     */
    orderBy?: Prisma.actuacionagrupacionOrderByWithRelationInput | Prisma.actuacionagrupacionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for actuacionagrupacions.
     */
    cursor?: Prisma.actuacionagrupacionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` actuacionagrupacions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` actuacionagrupacions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of actuacionagrupacions.
     */
    distinct?: Prisma.ActuacionagrupacionScalarFieldEnum | Prisma.ActuacionagrupacionScalarFieldEnum[];
};
/**
 * actuacionagrupacion findMany
 */
export type actuacionagrupacionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which actuacionagrupacions to fetch.
     */
    where?: Prisma.actuacionagrupacionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of actuacionagrupacions to fetch.
     */
    orderBy?: Prisma.actuacionagrupacionOrderByWithRelationInput | Prisma.actuacionagrupacionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing actuacionagrupacions.
     */
    cursor?: Prisma.actuacionagrupacionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` actuacionagrupacions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` actuacionagrupacions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of actuacionagrupacions.
     */
    distinct?: Prisma.ActuacionagrupacionScalarFieldEnum | Prisma.ActuacionagrupacionScalarFieldEnum[];
};
/**
 * actuacionagrupacion create
 */
export type actuacionagrupacionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a actuacionagrupacion.
     */
    data: Prisma.XOR<Prisma.actuacionagrupacionCreateInput, Prisma.actuacionagrupacionUncheckedCreateInput>;
};
/**
 * actuacionagrupacion createMany
 */
export type actuacionagrupacionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many actuacionagrupacions.
     */
    data: Prisma.actuacionagrupacionCreateManyInput | Prisma.actuacionagrupacionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * actuacionagrupacion update
 */
export type actuacionagrupacionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a actuacionagrupacion.
     */
    data: Prisma.XOR<Prisma.actuacionagrupacionUpdateInput, Prisma.actuacionagrupacionUncheckedUpdateInput>;
    /**
     * Choose, which actuacionagrupacion to update.
     */
    where: Prisma.actuacionagrupacionWhereUniqueInput;
};
/**
 * actuacionagrupacion updateMany
 */
export type actuacionagrupacionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update actuacionagrupacions.
     */
    data: Prisma.XOR<Prisma.actuacionagrupacionUpdateManyMutationInput, Prisma.actuacionagrupacionUncheckedUpdateManyInput>;
    /**
     * Filter which actuacionagrupacions to update
     */
    where?: Prisma.actuacionagrupacionWhereInput;
    /**
     * Limit how many actuacionagrupacions to update.
     */
    limit?: number;
};
/**
 * actuacionagrupacion upsert
 */
export type actuacionagrupacionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the actuacionagrupacion to update in case it exists.
     */
    where: Prisma.actuacionagrupacionWhereUniqueInput;
    /**
     * In case the actuacionagrupacion found by the `where` argument doesn't exist, create a new actuacionagrupacion with this data.
     */
    create: Prisma.XOR<Prisma.actuacionagrupacionCreateInput, Prisma.actuacionagrupacionUncheckedCreateInput>;
    /**
     * In case the actuacionagrupacion was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.actuacionagrupacionUpdateInput, Prisma.actuacionagrupacionUncheckedUpdateInput>;
};
/**
 * actuacionagrupacion delete
 */
export type actuacionagrupacionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which actuacionagrupacion to delete.
     */
    where: Prisma.actuacionagrupacionWhereUniqueInput;
};
/**
 * actuacionagrupacion deleteMany
 */
export type actuacionagrupacionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which actuacionagrupacions to delete
     */
    where?: Prisma.actuacionagrupacionWhereInput;
    /**
     * Limit how many actuacionagrupacions to delete.
     */
    limit?: number;
};
/**
 * actuacionagrupacion without action
 */
export type actuacionagrupacionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=actuacionagrupacion.d.ts.map