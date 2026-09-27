import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model musicoperiodo
 *
 */
export type musicoperiodoModel = runtime.Types.Result.DefaultSelection<Prisma.$musicoperiodoPayload>;
export type AggregateMusicoperiodo = {
    _count: MusicoperiodoCountAggregateOutputType | null;
    _min: MusicoperiodoMinAggregateOutputType | null;
    _max: MusicoperiodoMaxAggregateOutputType | null;
};
export type MusicoperiodoMinAggregateOutputType = {
    id: string | null;
    musicoId: string | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    motivoBaja: $Enums.musicoperiodo_motivoBaja | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MusicoperiodoMaxAggregateOutputType = {
    id: string | null;
    musicoId: string | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    motivoBaja: $Enums.musicoperiodo_motivoBaja | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MusicoperiodoCountAggregateOutputType = {
    id: number;
    musicoId: number;
    fechaInicio: number;
    fechaFin: number;
    motivoBaja: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MusicoperiodoMinAggregateInputType = {
    id?: true;
    musicoId?: true;
    fechaInicio?: true;
    fechaFin?: true;
    motivoBaja?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MusicoperiodoMaxAggregateInputType = {
    id?: true;
    musicoId?: true;
    fechaInicio?: true;
    fechaFin?: true;
    motivoBaja?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MusicoperiodoCountAggregateInputType = {
    id?: true;
    musicoId?: true;
    fechaInicio?: true;
    fechaFin?: true;
    motivoBaja?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MusicoperiodoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which musicoperiodo to aggregate.
     */
    where?: Prisma.musicoperiodoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of musicoperiodos to fetch.
     */
    orderBy?: Prisma.musicoperiodoOrderByWithRelationInput | Prisma.musicoperiodoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.musicoperiodoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` musicoperiodos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` musicoperiodos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned musicoperiodos
    **/
    _count?: true | MusicoperiodoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MusicoperiodoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MusicoperiodoMaxAggregateInputType;
};
export type GetMusicoperiodoAggregateType<T extends MusicoperiodoAggregateArgs> = {
    [P in keyof T & keyof AggregateMusicoperiodo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMusicoperiodo[P]> : Prisma.GetScalarType<T[P], AggregateMusicoperiodo[P]>;
};
export type musicoperiodoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.musicoperiodoWhereInput;
    orderBy?: Prisma.musicoperiodoOrderByWithAggregationInput | Prisma.musicoperiodoOrderByWithAggregationInput[];
    by: Prisma.MusicoperiodoScalarFieldEnum[] | Prisma.MusicoperiodoScalarFieldEnum;
    having?: Prisma.musicoperiodoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MusicoperiodoCountAggregateInputType | true;
    _min?: MusicoperiodoMinAggregateInputType;
    _max?: MusicoperiodoMaxAggregateInputType;
};
export type MusicoperiodoGroupByOutputType = {
    id: string;
    musicoId: string;
    fechaInicio: Date;
    fechaFin: Date | null;
    motivoBaja: $Enums.musicoperiodo_motivoBaja | null;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: MusicoperiodoCountAggregateOutputType | null;
    _min: MusicoperiodoMinAggregateOutputType | null;
    _max: MusicoperiodoMaxAggregateOutputType | null;
};
export type GetMusicoperiodoGroupByPayload<T extends musicoperiodoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MusicoperiodoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MusicoperiodoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MusicoperiodoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MusicoperiodoGroupByOutputType[P]>;
}>>;
export type musicoperiodoWhereInput = {
    AND?: Prisma.musicoperiodoWhereInput | Prisma.musicoperiodoWhereInput[];
    OR?: Prisma.musicoperiodoWhereInput[];
    NOT?: Prisma.musicoperiodoWhereInput | Prisma.musicoperiodoWhereInput[];
    id?: Prisma.StringFilter<"musicoperiodo"> | string;
    musicoId?: Prisma.StringFilter<"musicoperiodo"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"musicoperiodo"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"musicoperiodo"> | Date | string | null;
    motivoBaja?: Prisma.Enummusicoperiodo_motivoBajaNullableFilter<"musicoperiodo"> | $Enums.musicoperiodo_motivoBaja | null;
    observaciones?: Prisma.StringNullableFilter<"musicoperiodo"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"musicoperiodo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"musicoperiodo"> | Date | string;
    musico?: Prisma.XOR<Prisma.MusicoScalarRelationFilter, Prisma.musicoWhereInput>;
};
export type musicoperiodoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    musicoId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    musico?: Prisma.musicoOrderByWithRelationInput;
    _relevance?: Prisma.musicoperiodoOrderByRelevanceInput;
};
export type musicoperiodoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.musicoperiodoWhereInput | Prisma.musicoperiodoWhereInput[];
    OR?: Prisma.musicoperiodoWhereInput[];
    NOT?: Prisma.musicoperiodoWhereInput | Prisma.musicoperiodoWhereInput[];
    musicoId?: Prisma.StringFilter<"musicoperiodo"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"musicoperiodo"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"musicoperiodo"> | Date | string | null;
    motivoBaja?: Prisma.Enummusicoperiodo_motivoBajaNullableFilter<"musicoperiodo"> | $Enums.musicoperiodo_motivoBaja | null;
    observaciones?: Prisma.StringNullableFilter<"musicoperiodo"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"musicoperiodo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"musicoperiodo"> | Date | string;
    musico?: Prisma.XOR<Prisma.MusicoScalarRelationFilter, Prisma.musicoWhereInput>;
}, "id">;
export type musicoperiodoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    musicoId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.musicoperiodoCountOrderByAggregateInput;
    _max?: Prisma.musicoperiodoMaxOrderByAggregateInput;
    _min?: Prisma.musicoperiodoMinOrderByAggregateInput;
};
export type musicoperiodoScalarWhereWithAggregatesInput = {
    AND?: Prisma.musicoperiodoScalarWhereWithAggregatesInput | Prisma.musicoperiodoScalarWhereWithAggregatesInput[];
    OR?: Prisma.musicoperiodoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.musicoperiodoScalarWhereWithAggregatesInput | Prisma.musicoperiodoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"musicoperiodo"> | string;
    musicoId?: Prisma.StringWithAggregatesFilter<"musicoperiodo"> | string;
    fechaInicio?: Prisma.DateTimeWithAggregatesFilter<"musicoperiodo"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableWithAggregatesFilter<"musicoperiodo"> | Date | string | null;
    motivoBaja?: Prisma.Enummusicoperiodo_motivoBajaNullableWithAggregatesFilter<"musicoperiodo"> | $Enums.musicoperiodo_motivoBaja | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"musicoperiodo"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"musicoperiodo"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"musicoperiodo"> | Date | string;
};
export type musicoperiodoCreateInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.musicoperiodo_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    musico: Prisma.musicoCreateNestedOneWithoutMusicoperiodoInput;
};
export type musicoperiodoUncheckedCreateInput = {
    id: string;
    musicoId: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.musicoperiodo_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type musicoperiodoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnummusicoperiodo_motivoBajaFieldUpdateOperationsInput | $Enums.musicoperiodo_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    musico?: Prisma.musicoUpdateOneRequiredWithoutMusicoperiodoNestedInput;
};
export type musicoperiodoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    musicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnummusicoperiodo_motivoBajaFieldUpdateOperationsInput | $Enums.musicoperiodo_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type musicoperiodoCreateManyInput = {
    id: string;
    musicoId: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.musicoperiodo_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type musicoperiodoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnummusicoperiodo_motivoBajaFieldUpdateOperationsInput | $Enums.musicoperiodo_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type musicoperiodoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    musicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnummusicoperiodo_motivoBajaFieldUpdateOperationsInput | $Enums.musicoperiodo_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MusicoperiodoListRelationFilter = {
    every?: Prisma.musicoperiodoWhereInput;
    some?: Prisma.musicoperiodoWhereInput;
    none?: Prisma.musicoperiodoWhereInput;
};
export type musicoperiodoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type musicoperiodoOrderByRelevanceInput = {
    fields: Prisma.musicoperiodoOrderByRelevanceFieldEnum | Prisma.musicoperiodoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type musicoperiodoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    musicoId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type musicoperiodoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    musicoId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type musicoperiodoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    musicoId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type musicoperiodoCreateNestedManyWithoutMusicoInput = {
    create?: Prisma.XOR<Prisma.musicoperiodoCreateWithoutMusicoInput, Prisma.musicoperiodoUncheckedCreateWithoutMusicoInput> | Prisma.musicoperiodoCreateWithoutMusicoInput[] | Prisma.musicoperiodoUncheckedCreateWithoutMusicoInput[];
    connectOrCreate?: Prisma.musicoperiodoCreateOrConnectWithoutMusicoInput | Prisma.musicoperiodoCreateOrConnectWithoutMusicoInput[];
    createMany?: Prisma.musicoperiodoCreateManyMusicoInputEnvelope;
    connect?: Prisma.musicoperiodoWhereUniqueInput | Prisma.musicoperiodoWhereUniqueInput[];
};
export type musicoperiodoUncheckedCreateNestedManyWithoutMusicoInput = {
    create?: Prisma.XOR<Prisma.musicoperiodoCreateWithoutMusicoInput, Prisma.musicoperiodoUncheckedCreateWithoutMusicoInput> | Prisma.musicoperiodoCreateWithoutMusicoInput[] | Prisma.musicoperiodoUncheckedCreateWithoutMusicoInput[];
    connectOrCreate?: Prisma.musicoperiodoCreateOrConnectWithoutMusicoInput | Prisma.musicoperiodoCreateOrConnectWithoutMusicoInput[];
    createMany?: Prisma.musicoperiodoCreateManyMusicoInputEnvelope;
    connect?: Prisma.musicoperiodoWhereUniqueInput | Prisma.musicoperiodoWhereUniqueInput[];
};
export type musicoperiodoUpdateManyWithoutMusicoNestedInput = {
    create?: Prisma.XOR<Prisma.musicoperiodoCreateWithoutMusicoInput, Prisma.musicoperiodoUncheckedCreateWithoutMusicoInput> | Prisma.musicoperiodoCreateWithoutMusicoInput[] | Prisma.musicoperiodoUncheckedCreateWithoutMusicoInput[];
    connectOrCreate?: Prisma.musicoperiodoCreateOrConnectWithoutMusicoInput | Prisma.musicoperiodoCreateOrConnectWithoutMusicoInput[];
    upsert?: Prisma.musicoperiodoUpsertWithWhereUniqueWithoutMusicoInput | Prisma.musicoperiodoUpsertWithWhereUniqueWithoutMusicoInput[];
    createMany?: Prisma.musicoperiodoCreateManyMusicoInputEnvelope;
    set?: Prisma.musicoperiodoWhereUniqueInput | Prisma.musicoperiodoWhereUniqueInput[];
    disconnect?: Prisma.musicoperiodoWhereUniqueInput | Prisma.musicoperiodoWhereUniqueInput[];
    delete?: Prisma.musicoperiodoWhereUniqueInput | Prisma.musicoperiodoWhereUniqueInput[];
    connect?: Prisma.musicoperiodoWhereUniqueInput | Prisma.musicoperiodoWhereUniqueInput[];
    update?: Prisma.musicoperiodoUpdateWithWhereUniqueWithoutMusicoInput | Prisma.musicoperiodoUpdateWithWhereUniqueWithoutMusicoInput[];
    updateMany?: Prisma.musicoperiodoUpdateManyWithWhereWithoutMusicoInput | Prisma.musicoperiodoUpdateManyWithWhereWithoutMusicoInput[];
    deleteMany?: Prisma.musicoperiodoScalarWhereInput | Prisma.musicoperiodoScalarWhereInput[];
};
export type musicoperiodoUncheckedUpdateManyWithoutMusicoNestedInput = {
    create?: Prisma.XOR<Prisma.musicoperiodoCreateWithoutMusicoInput, Prisma.musicoperiodoUncheckedCreateWithoutMusicoInput> | Prisma.musicoperiodoCreateWithoutMusicoInput[] | Prisma.musicoperiodoUncheckedCreateWithoutMusicoInput[];
    connectOrCreate?: Prisma.musicoperiodoCreateOrConnectWithoutMusicoInput | Prisma.musicoperiodoCreateOrConnectWithoutMusicoInput[];
    upsert?: Prisma.musicoperiodoUpsertWithWhereUniqueWithoutMusicoInput | Prisma.musicoperiodoUpsertWithWhereUniqueWithoutMusicoInput[];
    createMany?: Prisma.musicoperiodoCreateManyMusicoInputEnvelope;
    set?: Prisma.musicoperiodoWhereUniqueInput | Prisma.musicoperiodoWhereUniqueInput[];
    disconnect?: Prisma.musicoperiodoWhereUniqueInput | Prisma.musicoperiodoWhereUniqueInput[];
    delete?: Prisma.musicoperiodoWhereUniqueInput | Prisma.musicoperiodoWhereUniqueInput[];
    connect?: Prisma.musicoperiodoWhereUniqueInput | Prisma.musicoperiodoWhereUniqueInput[];
    update?: Prisma.musicoperiodoUpdateWithWhereUniqueWithoutMusicoInput | Prisma.musicoperiodoUpdateWithWhereUniqueWithoutMusicoInput[];
    updateMany?: Prisma.musicoperiodoUpdateManyWithWhereWithoutMusicoInput | Prisma.musicoperiodoUpdateManyWithWhereWithoutMusicoInput[];
    deleteMany?: Prisma.musicoperiodoScalarWhereInput | Prisma.musicoperiodoScalarWhereInput[];
};
export type NullableEnummusicoperiodo_motivoBajaFieldUpdateOperationsInput = {
    set?: $Enums.musicoperiodo_motivoBaja | null;
};
export type musicoperiodoCreateWithoutMusicoInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.musicoperiodo_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type musicoperiodoUncheckedCreateWithoutMusicoInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.musicoperiodo_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type musicoperiodoCreateOrConnectWithoutMusicoInput = {
    where: Prisma.musicoperiodoWhereUniqueInput;
    create: Prisma.XOR<Prisma.musicoperiodoCreateWithoutMusicoInput, Prisma.musicoperiodoUncheckedCreateWithoutMusicoInput>;
};
export type musicoperiodoCreateManyMusicoInputEnvelope = {
    data: Prisma.musicoperiodoCreateManyMusicoInput | Prisma.musicoperiodoCreateManyMusicoInput[];
    skipDuplicates?: boolean;
};
export type musicoperiodoUpsertWithWhereUniqueWithoutMusicoInput = {
    where: Prisma.musicoperiodoWhereUniqueInput;
    update: Prisma.XOR<Prisma.musicoperiodoUpdateWithoutMusicoInput, Prisma.musicoperiodoUncheckedUpdateWithoutMusicoInput>;
    create: Prisma.XOR<Prisma.musicoperiodoCreateWithoutMusicoInput, Prisma.musicoperiodoUncheckedCreateWithoutMusicoInput>;
};
export type musicoperiodoUpdateWithWhereUniqueWithoutMusicoInput = {
    where: Prisma.musicoperiodoWhereUniqueInput;
    data: Prisma.XOR<Prisma.musicoperiodoUpdateWithoutMusicoInput, Prisma.musicoperiodoUncheckedUpdateWithoutMusicoInput>;
};
export type musicoperiodoUpdateManyWithWhereWithoutMusicoInput = {
    where: Prisma.musicoperiodoScalarWhereInput;
    data: Prisma.XOR<Prisma.musicoperiodoUpdateManyMutationInput, Prisma.musicoperiodoUncheckedUpdateManyWithoutMusicoInput>;
};
export type musicoperiodoScalarWhereInput = {
    AND?: Prisma.musicoperiodoScalarWhereInput | Prisma.musicoperiodoScalarWhereInput[];
    OR?: Prisma.musicoperiodoScalarWhereInput[];
    NOT?: Prisma.musicoperiodoScalarWhereInput | Prisma.musicoperiodoScalarWhereInput[];
    id?: Prisma.StringFilter<"musicoperiodo"> | string;
    musicoId?: Prisma.StringFilter<"musicoperiodo"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"musicoperiodo"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"musicoperiodo"> | Date | string | null;
    motivoBaja?: Prisma.Enummusicoperiodo_motivoBajaNullableFilter<"musicoperiodo"> | $Enums.musicoperiodo_motivoBaja | null;
    observaciones?: Prisma.StringNullableFilter<"musicoperiodo"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"musicoperiodo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"musicoperiodo"> | Date | string;
};
export type musicoperiodoCreateManyMusicoInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.musicoperiodo_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type musicoperiodoUpdateWithoutMusicoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnummusicoperiodo_motivoBajaFieldUpdateOperationsInput | $Enums.musicoperiodo_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type musicoperiodoUncheckedUpdateWithoutMusicoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnummusicoperiodo_motivoBajaFieldUpdateOperationsInput | $Enums.musicoperiodo_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type musicoperiodoUncheckedUpdateManyWithoutMusicoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnummusicoperiodo_motivoBajaFieldUpdateOperationsInput | $Enums.musicoperiodo_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type musicoperiodoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    musicoId?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    motivoBaja?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    musico?: boolean | Prisma.musicoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["musicoperiodo"]>;
export type musicoperiodoSelectScalar = {
    id?: boolean;
    musicoId?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    motivoBaja?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type musicoperiodoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "musicoId" | "fechaInicio" | "fechaFin" | "motivoBaja" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["musicoperiodo"]>;
export type musicoperiodoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    musico?: boolean | Prisma.musicoDefaultArgs<ExtArgs>;
};
export type $musicoperiodoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "musicoperiodo";
    objects: {
        musico: Prisma.$musicoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        musicoId: string;
        fechaInicio: Date;
        fechaFin: Date | null;
        motivoBaja: $Enums.musicoperiodo_motivoBaja | null;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["musicoperiodo"]>;
    composites: {};
};
export type musicoperiodoGetPayload<S extends boolean | null | undefined | musicoperiodoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$musicoperiodoPayload, S>;
export type musicoperiodoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<musicoperiodoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MusicoperiodoCountAggregateInputType | true;
};
export interface musicoperiodoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['musicoperiodo'];
        meta: {
            name: 'musicoperiodo';
        };
    };
    /**
     * Find zero or one Musicoperiodo that matches the filter.
     * @param {musicoperiodoFindUniqueArgs} args - Arguments to find a Musicoperiodo
     * @example
     * // Get one Musicoperiodo
     * const musicoperiodo = await prisma.musicoperiodo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends musicoperiodoFindUniqueArgs>(args: Prisma.SelectSubset<T, musicoperiodoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__musicoperiodoClient<runtime.Types.Result.GetResult<Prisma.$musicoperiodoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Musicoperiodo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {musicoperiodoFindUniqueOrThrowArgs} args - Arguments to find a Musicoperiodo
     * @example
     * // Get one Musicoperiodo
     * const musicoperiodo = await prisma.musicoperiodo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends musicoperiodoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, musicoperiodoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__musicoperiodoClient<runtime.Types.Result.GetResult<Prisma.$musicoperiodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Musicoperiodo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicoperiodoFindFirstArgs} args - Arguments to find a Musicoperiodo
     * @example
     * // Get one Musicoperiodo
     * const musicoperiodo = await prisma.musicoperiodo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends musicoperiodoFindFirstArgs>(args?: Prisma.SelectSubset<T, musicoperiodoFindFirstArgs<ExtArgs>>): Prisma.Prisma__musicoperiodoClient<runtime.Types.Result.GetResult<Prisma.$musicoperiodoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Musicoperiodo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicoperiodoFindFirstOrThrowArgs} args - Arguments to find a Musicoperiodo
     * @example
     * // Get one Musicoperiodo
     * const musicoperiodo = await prisma.musicoperiodo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends musicoperiodoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, musicoperiodoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__musicoperiodoClient<runtime.Types.Result.GetResult<Prisma.$musicoperiodoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Musicoperiodos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicoperiodoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Musicoperiodos
     * const musicoperiodos = await prisma.musicoperiodo.findMany()
     *
     * // Get first 10 Musicoperiodos
     * const musicoperiodos = await prisma.musicoperiodo.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const musicoperiodoWithIdOnly = await prisma.musicoperiodo.findMany({ select: { id: true } })
     *
     */
    findMany<T extends musicoperiodoFindManyArgs>(args?: Prisma.SelectSubset<T, musicoperiodoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$musicoperiodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Musicoperiodo.
     * @param {musicoperiodoCreateArgs} args - Arguments to create a Musicoperiodo.
     * @example
     * // Create one Musicoperiodo
     * const Musicoperiodo = await prisma.musicoperiodo.create({
     *   data: {
     *     // ... data to create a Musicoperiodo
     *   }
     * })
     *
     */
    create<T extends musicoperiodoCreateArgs>(args: Prisma.SelectSubset<T, musicoperiodoCreateArgs<ExtArgs>>): Prisma.Prisma__musicoperiodoClient<runtime.Types.Result.GetResult<Prisma.$musicoperiodoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Musicoperiodos.
     * @param {musicoperiodoCreateManyArgs} args - Arguments to create many Musicoperiodos.
     * @example
     * // Create many Musicoperiodos
     * const musicoperiodo = await prisma.musicoperiodo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends musicoperiodoCreateManyArgs>(args?: Prisma.SelectSubset<T, musicoperiodoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Musicoperiodo.
     * @param {musicoperiodoDeleteArgs} args - Arguments to delete one Musicoperiodo.
     * @example
     * // Delete one Musicoperiodo
     * const Musicoperiodo = await prisma.musicoperiodo.delete({
     *   where: {
     *     // ... filter to delete one Musicoperiodo
     *   }
     * })
     *
     */
    delete<T extends musicoperiodoDeleteArgs>(args: Prisma.SelectSubset<T, musicoperiodoDeleteArgs<ExtArgs>>): Prisma.Prisma__musicoperiodoClient<runtime.Types.Result.GetResult<Prisma.$musicoperiodoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Musicoperiodo.
     * @param {musicoperiodoUpdateArgs} args - Arguments to update one Musicoperiodo.
     * @example
     * // Update one Musicoperiodo
     * const musicoperiodo = await prisma.musicoperiodo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends musicoperiodoUpdateArgs>(args: Prisma.SelectSubset<T, musicoperiodoUpdateArgs<ExtArgs>>): Prisma.Prisma__musicoperiodoClient<runtime.Types.Result.GetResult<Prisma.$musicoperiodoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Musicoperiodos.
     * @param {musicoperiodoDeleteManyArgs} args - Arguments to filter Musicoperiodos to delete.
     * @example
     * // Delete a few Musicoperiodos
     * const { count } = await prisma.musicoperiodo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends musicoperiodoDeleteManyArgs>(args?: Prisma.SelectSubset<T, musicoperiodoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Musicoperiodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicoperiodoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Musicoperiodos
     * const musicoperiodo = await prisma.musicoperiodo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends musicoperiodoUpdateManyArgs>(args: Prisma.SelectSubset<T, musicoperiodoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Musicoperiodo.
     * @param {musicoperiodoUpsertArgs} args - Arguments to update or create a Musicoperiodo.
     * @example
     * // Update or create a Musicoperiodo
     * const musicoperiodo = await prisma.musicoperiodo.upsert({
     *   create: {
     *     // ... data to create a Musicoperiodo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Musicoperiodo we want to update
     *   }
     * })
     */
    upsert<T extends musicoperiodoUpsertArgs>(args: Prisma.SelectSubset<T, musicoperiodoUpsertArgs<ExtArgs>>): Prisma.Prisma__musicoperiodoClient<runtime.Types.Result.GetResult<Prisma.$musicoperiodoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Musicoperiodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicoperiodoCountArgs} args - Arguments to filter Musicoperiodos to count.
     * @example
     * // Count the number of Musicoperiodos
     * const count = await prisma.musicoperiodo.count({
     *   where: {
     *     // ... the filter for the Musicoperiodos we want to count
     *   }
     * })
    **/
    count<T extends musicoperiodoCountArgs>(args?: Prisma.Subset<T, musicoperiodoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MusicoperiodoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Musicoperiodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicoperiodoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MusicoperiodoAggregateArgs>(args: Prisma.Subset<T, MusicoperiodoAggregateArgs>): Prisma.PrismaPromise<GetMusicoperiodoAggregateType<T>>;
    /**
     * Group by Musicoperiodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicoperiodoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends musicoperiodoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: musicoperiodoGroupByArgs['orderBy'];
    } : {
        orderBy?: musicoperiodoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, musicoperiodoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMusicoperiodoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the musicoperiodo model
     */
    readonly fields: musicoperiodoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for musicoperiodo.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__musicoperiodoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    musico<T extends Prisma.musicoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.musicoDefaultArgs<ExtArgs>>): Prisma.Prisma__musicoClient<runtime.Types.Result.GetResult<Prisma.$musicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the musicoperiodo model
 */
export interface musicoperiodoFieldRefs {
    readonly id: Prisma.FieldRef<"musicoperiodo", 'String'>;
    readonly musicoId: Prisma.FieldRef<"musicoperiodo", 'String'>;
    readonly fechaInicio: Prisma.FieldRef<"musicoperiodo", 'DateTime'>;
    readonly fechaFin: Prisma.FieldRef<"musicoperiodo", 'DateTime'>;
    readonly motivoBaja: Prisma.FieldRef<"musicoperiodo", 'musicoperiodo_motivoBaja'>;
    readonly observaciones: Prisma.FieldRef<"musicoperiodo", 'String'>;
    readonly createdAt: Prisma.FieldRef<"musicoperiodo", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"musicoperiodo", 'DateTime'>;
}
/**
 * musicoperiodo findUnique
 */
export type musicoperiodoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musicoperiodo
     */
    select?: Prisma.musicoperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the musicoperiodo
     */
    omit?: Prisma.musicoperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.musicoperiodoInclude<ExtArgs> | null;
    /**
     * Filter, which musicoperiodo to fetch.
     */
    where: Prisma.musicoperiodoWhereUniqueInput;
};
/**
 * musicoperiodo findUniqueOrThrow
 */
export type musicoperiodoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musicoperiodo
     */
    select?: Prisma.musicoperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the musicoperiodo
     */
    omit?: Prisma.musicoperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.musicoperiodoInclude<ExtArgs> | null;
    /**
     * Filter, which musicoperiodo to fetch.
     */
    where: Prisma.musicoperiodoWhereUniqueInput;
};
/**
 * musicoperiodo findFirst
 */
export type musicoperiodoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musicoperiodo
     */
    select?: Prisma.musicoperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the musicoperiodo
     */
    omit?: Prisma.musicoperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.musicoperiodoInclude<ExtArgs> | null;
    /**
     * Filter, which musicoperiodo to fetch.
     */
    where?: Prisma.musicoperiodoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of musicoperiodos to fetch.
     */
    orderBy?: Prisma.musicoperiodoOrderByWithRelationInput | Prisma.musicoperiodoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for musicoperiodos.
     */
    cursor?: Prisma.musicoperiodoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` musicoperiodos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` musicoperiodos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of musicoperiodos.
     */
    distinct?: Prisma.MusicoperiodoScalarFieldEnum | Prisma.MusicoperiodoScalarFieldEnum[];
};
/**
 * musicoperiodo findFirstOrThrow
 */
export type musicoperiodoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musicoperiodo
     */
    select?: Prisma.musicoperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the musicoperiodo
     */
    omit?: Prisma.musicoperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.musicoperiodoInclude<ExtArgs> | null;
    /**
     * Filter, which musicoperiodo to fetch.
     */
    where?: Prisma.musicoperiodoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of musicoperiodos to fetch.
     */
    orderBy?: Prisma.musicoperiodoOrderByWithRelationInput | Prisma.musicoperiodoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for musicoperiodos.
     */
    cursor?: Prisma.musicoperiodoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` musicoperiodos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` musicoperiodos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of musicoperiodos.
     */
    distinct?: Prisma.MusicoperiodoScalarFieldEnum | Prisma.MusicoperiodoScalarFieldEnum[];
};
/**
 * musicoperiodo findMany
 */
export type musicoperiodoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musicoperiodo
     */
    select?: Prisma.musicoperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the musicoperiodo
     */
    omit?: Prisma.musicoperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.musicoperiodoInclude<ExtArgs> | null;
    /**
     * Filter, which musicoperiodos to fetch.
     */
    where?: Prisma.musicoperiodoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of musicoperiodos to fetch.
     */
    orderBy?: Prisma.musicoperiodoOrderByWithRelationInput | Prisma.musicoperiodoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing musicoperiodos.
     */
    cursor?: Prisma.musicoperiodoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` musicoperiodos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` musicoperiodos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of musicoperiodos.
     */
    distinct?: Prisma.MusicoperiodoScalarFieldEnum | Prisma.MusicoperiodoScalarFieldEnum[];
};
/**
 * musicoperiodo create
 */
export type musicoperiodoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musicoperiodo
     */
    select?: Prisma.musicoperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the musicoperiodo
     */
    omit?: Prisma.musicoperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.musicoperiodoInclude<ExtArgs> | null;
    /**
     * The data needed to create a musicoperiodo.
     */
    data: Prisma.XOR<Prisma.musicoperiodoCreateInput, Prisma.musicoperiodoUncheckedCreateInput>;
};
/**
 * musicoperiodo createMany
 */
export type musicoperiodoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many musicoperiodos.
     */
    data: Prisma.musicoperiodoCreateManyInput | Prisma.musicoperiodoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * musicoperiodo update
 */
export type musicoperiodoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musicoperiodo
     */
    select?: Prisma.musicoperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the musicoperiodo
     */
    omit?: Prisma.musicoperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.musicoperiodoInclude<ExtArgs> | null;
    /**
     * The data needed to update a musicoperiodo.
     */
    data: Prisma.XOR<Prisma.musicoperiodoUpdateInput, Prisma.musicoperiodoUncheckedUpdateInput>;
    /**
     * Choose, which musicoperiodo to update.
     */
    where: Prisma.musicoperiodoWhereUniqueInput;
};
/**
 * musicoperiodo updateMany
 */
export type musicoperiodoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update musicoperiodos.
     */
    data: Prisma.XOR<Prisma.musicoperiodoUpdateManyMutationInput, Prisma.musicoperiodoUncheckedUpdateManyInput>;
    /**
     * Filter which musicoperiodos to update
     */
    where?: Prisma.musicoperiodoWhereInput;
    /**
     * Limit how many musicoperiodos to update.
     */
    limit?: number;
};
/**
 * musicoperiodo upsert
 */
export type musicoperiodoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musicoperiodo
     */
    select?: Prisma.musicoperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the musicoperiodo
     */
    omit?: Prisma.musicoperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.musicoperiodoInclude<ExtArgs> | null;
    /**
     * The filter to search for the musicoperiodo to update in case it exists.
     */
    where: Prisma.musicoperiodoWhereUniqueInput;
    /**
     * In case the musicoperiodo found by the `where` argument doesn't exist, create a new musicoperiodo with this data.
     */
    create: Prisma.XOR<Prisma.musicoperiodoCreateInput, Prisma.musicoperiodoUncheckedCreateInput>;
    /**
     * In case the musicoperiodo was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.musicoperiodoUpdateInput, Prisma.musicoperiodoUncheckedUpdateInput>;
};
/**
 * musicoperiodo delete
 */
export type musicoperiodoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musicoperiodo
     */
    select?: Prisma.musicoperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the musicoperiodo
     */
    omit?: Prisma.musicoperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.musicoperiodoInclude<ExtArgs> | null;
    /**
     * Filter which musicoperiodo to delete.
     */
    where: Prisma.musicoperiodoWhereUniqueInput;
};
/**
 * musicoperiodo deleteMany
 */
export type musicoperiodoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which musicoperiodos to delete
     */
    where?: Prisma.musicoperiodoWhereInput;
    /**
     * Limit how many musicoperiodos to delete.
     */
    limit?: number;
};
/**
 * musicoperiodo without action
 */
export type musicoperiodoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musicoperiodo
     */
    select?: Prisma.musicoperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the musicoperiodo
     */
    omit?: Prisma.musicoperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.musicoperiodoInclude<ExtArgs> | null;
};
//# sourceMappingURL=musicoperiodo.d.ts.map