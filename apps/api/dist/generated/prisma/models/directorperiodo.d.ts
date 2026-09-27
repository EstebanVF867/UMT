import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model directorperiodo
 *
 */
export type directorperiodoModel = runtime.Types.Result.DefaultSelection<Prisma.$directorperiodoPayload>;
export type AggregateDirectorperiodo = {
    _count: DirectorperiodoCountAggregateOutputType | null;
    _min: DirectorperiodoMinAggregateOutputType | null;
    _max: DirectorperiodoMaxAggregateOutputType | null;
};
export type DirectorperiodoMinAggregateOutputType = {
    id: string | null;
    directorId: string | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    motivoBaja: $Enums.directorperiodo_motivoBaja | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DirectorperiodoMaxAggregateOutputType = {
    id: string | null;
    directorId: string | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    motivoBaja: $Enums.directorperiodo_motivoBaja | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DirectorperiodoCountAggregateOutputType = {
    id: number;
    directorId: number;
    fechaInicio: number;
    fechaFin: number;
    motivoBaja: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DirectorperiodoMinAggregateInputType = {
    id?: true;
    directorId?: true;
    fechaInicio?: true;
    fechaFin?: true;
    motivoBaja?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DirectorperiodoMaxAggregateInputType = {
    id?: true;
    directorId?: true;
    fechaInicio?: true;
    fechaFin?: true;
    motivoBaja?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DirectorperiodoCountAggregateInputType = {
    id?: true;
    directorId?: true;
    fechaInicio?: true;
    fechaFin?: true;
    motivoBaja?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DirectorperiodoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which directorperiodo to aggregate.
     */
    where?: Prisma.directorperiodoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of directorperiodos to fetch.
     */
    orderBy?: Prisma.directorperiodoOrderByWithRelationInput | Prisma.directorperiodoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.directorperiodoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` directorperiodos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` directorperiodos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned directorperiodos
    **/
    _count?: true | DirectorperiodoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DirectorperiodoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DirectorperiodoMaxAggregateInputType;
};
export type GetDirectorperiodoAggregateType<T extends DirectorperiodoAggregateArgs> = {
    [P in keyof T & keyof AggregateDirectorperiodo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDirectorperiodo[P]> : Prisma.GetScalarType<T[P], AggregateDirectorperiodo[P]>;
};
export type directorperiodoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.directorperiodoWhereInput;
    orderBy?: Prisma.directorperiodoOrderByWithAggregationInput | Prisma.directorperiodoOrderByWithAggregationInput[];
    by: Prisma.DirectorperiodoScalarFieldEnum[] | Prisma.DirectorperiodoScalarFieldEnum;
    having?: Prisma.directorperiodoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DirectorperiodoCountAggregateInputType | true;
    _min?: DirectorperiodoMinAggregateInputType;
    _max?: DirectorperiodoMaxAggregateInputType;
};
export type DirectorperiodoGroupByOutputType = {
    id: string;
    directorId: string;
    fechaInicio: Date;
    fechaFin: Date | null;
    motivoBaja: $Enums.directorperiodo_motivoBaja | null;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: DirectorperiodoCountAggregateOutputType | null;
    _min: DirectorperiodoMinAggregateOutputType | null;
    _max: DirectorperiodoMaxAggregateOutputType | null;
};
export type GetDirectorperiodoGroupByPayload<T extends directorperiodoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DirectorperiodoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DirectorperiodoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DirectorperiodoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DirectorperiodoGroupByOutputType[P]>;
}>>;
export type directorperiodoWhereInput = {
    AND?: Prisma.directorperiodoWhereInput | Prisma.directorperiodoWhereInput[];
    OR?: Prisma.directorperiodoWhereInput[];
    NOT?: Prisma.directorperiodoWhereInput | Prisma.directorperiodoWhereInput[];
    id?: Prisma.StringFilter<"directorperiodo"> | string;
    directorId?: Prisma.StringFilter<"directorperiodo"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"directorperiodo"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"directorperiodo"> | Date | string | null;
    motivoBaja?: Prisma.Enumdirectorperiodo_motivoBajaNullableFilter<"directorperiodo"> | $Enums.directorperiodo_motivoBaja | null;
    observaciones?: Prisma.StringNullableFilter<"directorperiodo"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"directorperiodo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"directorperiodo"> | Date | string;
    director?: Prisma.XOR<Prisma.DirectorScalarRelationFilter, Prisma.directorWhereInput>;
};
export type directorperiodoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    directorId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    director?: Prisma.directorOrderByWithRelationInput;
    _relevance?: Prisma.directorperiodoOrderByRelevanceInput;
};
export type directorperiodoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.directorperiodoWhereInput | Prisma.directorperiodoWhereInput[];
    OR?: Prisma.directorperiodoWhereInput[];
    NOT?: Prisma.directorperiodoWhereInput | Prisma.directorperiodoWhereInput[];
    directorId?: Prisma.StringFilter<"directorperiodo"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"directorperiodo"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"directorperiodo"> | Date | string | null;
    motivoBaja?: Prisma.Enumdirectorperiodo_motivoBajaNullableFilter<"directorperiodo"> | $Enums.directorperiodo_motivoBaja | null;
    observaciones?: Prisma.StringNullableFilter<"directorperiodo"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"directorperiodo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"directorperiodo"> | Date | string;
    director?: Prisma.XOR<Prisma.DirectorScalarRelationFilter, Prisma.directorWhereInput>;
}, "id">;
export type directorperiodoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    directorId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.directorperiodoCountOrderByAggregateInput;
    _max?: Prisma.directorperiodoMaxOrderByAggregateInput;
    _min?: Prisma.directorperiodoMinOrderByAggregateInput;
};
export type directorperiodoScalarWhereWithAggregatesInput = {
    AND?: Prisma.directorperiodoScalarWhereWithAggregatesInput | Prisma.directorperiodoScalarWhereWithAggregatesInput[];
    OR?: Prisma.directorperiodoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.directorperiodoScalarWhereWithAggregatesInput | Prisma.directorperiodoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"directorperiodo"> | string;
    directorId?: Prisma.StringWithAggregatesFilter<"directorperiodo"> | string;
    fechaInicio?: Prisma.DateTimeWithAggregatesFilter<"directorperiodo"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableWithAggregatesFilter<"directorperiodo"> | Date | string | null;
    motivoBaja?: Prisma.Enumdirectorperiodo_motivoBajaNullableWithAggregatesFilter<"directorperiodo"> | $Enums.directorperiodo_motivoBaja | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"directorperiodo"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"directorperiodo"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"directorperiodo"> | Date | string;
};
export type directorperiodoCreateInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.directorperiodo_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    director: Prisma.directorCreateNestedOneWithoutDirectorperiodoInput;
};
export type directorperiodoUncheckedCreateInput = {
    id: string;
    directorId: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.directorperiodo_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type directorperiodoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumdirectorperiodo_motivoBajaFieldUpdateOperationsInput | $Enums.directorperiodo_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    director?: Prisma.directorUpdateOneRequiredWithoutDirectorperiodoNestedInput;
};
export type directorperiodoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    directorId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumdirectorperiodo_motivoBajaFieldUpdateOperationsInput | $Enums.directorperiodo_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type directorperiodoCreateManyInput = {
    id: string;
    directorId: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.directorperiodo_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type directorperiodoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumdirectorperiodo_motivoBajaFieldUpdateOperationsInput | $Enums.directorperiodo_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type directorperiodoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    directorId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumdirectorperiodo_motivoBajaFieldUpdateOperationsInput | $Enums.directorperiodo_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DirectorperiodoListRelationFilter = {
    every?: Prisma.directorperiodoWhereInput;
    some?: Prisma.directorperiodoWhereInput;
    none?: Prisma.directorperiodoWhereInput;
};
export type directorperiodoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type directorperiodoOrderByRelevanceInput = {
    fields: Prisma.directorperiodoOrderByRelevanceFieldEnum | Prisma.directorperiodoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type directorperiodoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    directorId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type directorperiodoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    directorId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type directorperiodoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    directorId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type directorperiodoCreateNestedManyWithoutDirectorInput = {
    create?: Prisma.XOR<Prisma.directorperiodoCreateWithoutDirectorInput, Prisma.directorperiodoUncheckedCreateWithoutDirectorInput> | Prisma.directorperiodoCreateWithoutDirectorInput[] | Prisma.directorperiodoUncheckedCreateWithoutDirectorInput[];
    connectOrCreate?: Prisma.directorperiodoCreateOrConnectWithoutDirectorInput | Prisma.directorperiodoCreateOrConnectWithoutDirectorInput[];
    createMany?: Prisma.directorperiodoCreateManyDirectorInputEnvelope;
    connect?: Prisma.directorperiodoWhereUniqueInput | Prisma.directorperiodoWhereUniqueInput[];
};
export type directorperiodoUncheckedCreateNestedManyWithoutDirectorInput = {
    create?: Prisma.XOR<Prisma.directorperiodoCreateWithoutDirectorInput, Prisma.directorperiodoUncheckedCreateWithoutDirectorInput> | Prisma.directorperiodoCreateWithoutDirectorInput[] | Prisma.directorperiodoUncheckedCreateWithoutDirectorInput[];
    connectOrCreate?: Prisma.directorperiodoCreateOrConnectWithoutDirectorInput | Prisma.directorperiodoCreateOrConnectWithoutDirectorInput[];
    createMany?: Prisma.directorperiodoCreateManyDirectorInputEnvelope;
    connect?: Prisma.directorperiodoWhereUniqueInput | Prisma.directorperiodoWhereUniqueInput[];
};
export type directorperiodoUpdateManyWithoutDirectorNestedInput = {
    create?: Prisma.XOR<Prisma.directorperiodoCreateWithoutDirectorInput, Prisma.directorperiodoUncheckedCreateWithoutDirectorInput> | Prisma.directorperiodoCreateWithoutDirectorInput[] | Prisma.directorperiodoUncheckedCreateWithoutDirectorInput[];
    connectOrCreate?: Prisma.directorperiodoCreateOrConnectWithoutDirectorInput | Prisma.directorperiodoCreateOrConnectWithoutDirectorInput[];
    upsert?: Prisma.directorperiodoUpsertWithWhereUniqueWithoutDirectorInput | Prisma.directorperiodoUpsertWithWhereUniqueWithoutDirectorInput[];
    createMany?: Prisma.directorperiodoCreateManyDirectorInputEnvelope;
    set?: Prisma.directorperiodoWhereUniqueInput | Prisma.directorperiodoWhereUniqueInput[];
    disconnect?: Prisma.directorperiodoWhereUniqueInput | Prisma.directorperiodoWhereUniqueInput[];
    delete?: Prisma.directorperiodoWhereUniqueInput | Prisma.directorperiodoWhereUniqueInput[];
    connect?: Prisma.directorperiodoWhereUniqueInput | Prisma.directorperiodoWhereUniqueInput[];
    update?: Prisma.directorperiodoUpdateWithWhereUniqueWithoutDirectorInput | Prisma.directorperiodoUpdateWithWhereUniqueWithoutDirectorInput[];
    updateMany?: Prisma.directorperiodoUpdateManyWithWhereWithoutDirectorInput | Prisma.directorperiodoUpdateManyWithWhereWithoutDirectorInput[];
    deleteMany?: Prisma.directorperiodoScalarWhereInput | Prisma.directorperiodoScalarWhereInput[];
};
export type directorperiodoUncheckedUpdateManyWithoutDirectorNestedInput = {
    create?: Prisma.XOR<Prisma.directorperiodoCreateWithoutDirectorInput, Prisma.directorperiodoUncheckedCreateWithoutDirectorInput> | Prisma.directorperiodoCreateWithoutDirectorInput[] | Prisma.directorperiodoUncheckedCreateWithoutDirectorInput[];
    connectOrCreate?: Prisma.directorperiodoCreateOrConnectWithoutDirectorInput | Prisma.directorperiodoCreateOrConnectWithoutDirectorInput[];
    upsert?: Prisma.directorperiodoUpsertWithWhereUniqueWithoutDirectorInput | Prisma.directorperiodoUpsertWithWhereUniqueWithoutDirectorInput[];
    createMany?: Prisma.directorperiodoCreateManyDirectorInputEnvelope;
    set?: Prisma.directorperiodoWhereUniqueInput | Prisma.directorperiodoWhereUniqueInput[];
    disconnect?: Prisma.directorperiodoWhereUniqueInput | Prisma.directorperiodoWhereUniqueInput[];
    delete?: Prisma.directorperiodoWhereUniqueInput | Prisma.directorperiodoWhereUniqueInput[];
    connect?: Prisma.directorperiodoWhereUniqueInput | Prisma.directorperiodoWhereUniqueInput[];
    update?: Prisma.directorperiodoUpdateWithWhereUniqueWithoutDirectorInput | Prisma.directorperiodoUpdateWithWhereUniqueWithoutDirectorInput[];
    updateMany?: Prisma.directorperiodoUpdateManyWithWhereWithoutDirectorInput | Prisma.directorperiodoUpdateManyWithWhereWithoutDirectorInput[];
    deleteMany?: Prisma.directorperiodoScalarWhereInput | Prisma.directorperiodoScalarWhereInput[];
};
export type NullableEnumdirectorperiodo_motivoBajaFieldUpdateOperationsInput = {
    set?: $Enums.directorperiodo_motivoBaja | null;
};
export type directorperiodoCreateWithoutDirectorInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.directorperiodo_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type directorperiodoUncheckedCreateWithoutDirectorInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.directorperiodo_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type directorperiodoCreateOrConnectWithoutDirectorInput = {
    where: Prisma.directorperiodoWhereUniqueInput;
    create: Prisma.XOR<Prisma.directorperiodoCreateWithoutDirectorInput, Prisma.directorperiodoUncheckedCreateWithoutDirectorInput>;
};
export type directorperiodoCreateManyDirectorInputEnvelope = {
    data: Prisma.directorperiodoCreateManyDirectorInput | Prisma.directorperiodoCreateManyDirectorInput[];
    skipDuplicates?: boolean;
};
export type directorperiodoUpsertWithWhereUniqueWithoutDirectorInput = {
    where: Prisma.directorperiodoWhereUniqueInput;
    update: Prisma.XOR<Prisma.directorperiodoUpdateWithoutDirectorInput, Prisma.directorperiodoUncheckedUpdateWithoutDirectorInput>;
    create: Prisma.XOR<Prisma.directorperiodoCreateWithoutDirectorInput, Prisma.directorperiodoUncheckedCreateWithoutDirectorInput>;
};
export type directorperiodoUpdateWithWhereUniqueWithoutDirectorInput = {
    where: Prisma.directorperiodoWhereUniqueInput;
    data: Prisma.XOR<Prisma.directorperiodoUpdateWithoutDirectorInput, Prisma.directorperiodoUncheckedUpdateWithoutDirectorInput>;
};
export type directorperiodoUpdateManyWithWhereWithoutDirectorInput = {
    where: Prisma.directorperiodoScalarWhereInput;
    data: Prisma.XOR<Prisma.directorperiodoUpdateManyMutationInput, Prisma.directorperiodoUncheckedUpdateManyWithoutDirectorInput>;
};
export type directorperiodoScalarWhereInput = {
    AND?: Prisma.directorperiodoScalarWhereInput | Prisma.directorperiodoScalarWhereInput[];
    OR?: Prisma.directorperiodoScalarWhereInput[];
    NOT?: Prisma.directorperiodoScalarWhereInput | Prisma.directorperiodoScalarWhereInput[];
    id?: Prisma.StringFilter<"directorperiodo"> | string;
    directorId?: Prisma.StringFilter<"directorperiodo"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"directorperiodo"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"directorperiodo"> | Date | string | null;
    motivoBaja?: Prisma.Enumdirectorperiodo_motivoBajaNullableFilter<"directorperiodo"> | $Enums.directorperiodo_motivoBaja | null;
    observaciones?: Prisma.StringNullableFilter<"directorperiodo"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"directorperiodo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"directorperiodo"> | Date | string;
};
export type directorperiodoCreateManyDirectorInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.directorperiodo_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type directorperiodoUpdateWithoutDirectorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumdirectorperiodo_motivoBajaFieldUpdateOperationsInput | $Enums.directorperiodo_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type directorperiodoUncheckedUpdateWithoutDirectorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumdirectorperiodo_motivoBajaFieldUpdateOperationsInput | $Enums.directorperiodo_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type directorperiodoUncheckedUpdateManyWithoutDirectorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumdirectorperiodo_motivoBajaFieldUpdateOperationsInput | $Enums.directorperiodo_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type directorperiodoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    directorId?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    motivoBaja?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    director?: boolean | Prisma.directorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["directorperiodo"]>;
export type directorperiodoSelectScalar = {
    id?: boolean;
    directorId?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    motivoBaja?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type directorperiodoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "directorId" | "fechaInicio" | "fechaFin" | "motivoBaja" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["directorperiodo"]>;
export type directorperiodoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    director?: boolean | Prisma.directorDefaultArgs<ExtArgs>;
};
export type $directorperiodoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "directorperiodo";
    objects: {
        director: Prisma.$directorPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        directorId: string;
        fechaInicio: Date;
        fechaFin: Date | null;
        motivoBaja: $Enums.directorperiodo_motivoBaja | null;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["directorperiodo"]>;
    composites: {};
};
export type directorperiodoGetPayload<S extends boolean | null | undefined | directorperiodoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$directorperiodoPayload, S>;
export type directorperiodoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<directorperiodoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DirectorperiodoCountAggregateInputType | true;
};
export interface directorperiodoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['directorperiodo'];
        meta: {
            name: 'directorperiodo';
        };
    };
    /**
     * Find zero or one Directorperiodo that matches the filter.
     * @param {directorperiodoFindUniqueArgs} args - Arguments to find a Directorperiodo
     * @example
     * // Get one Directorperiodo
     * const directorperiodo = await prisma.directorperiodo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends directorperiodoFindUniqueArgs>(args: Prisma.SelectSubset<T, directorperiodoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__directorperiodoClient<runtime.Types.Result.GetResult<Prisma.$directorperiodoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Directorperiodo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {directorperiodoFindUniqueOrThrowArgs} args - Arguments to find a Directorperiodo
     * @example
     * // Get one Directorperiodo
     * const directorperiodo = await prisma.directorperiodo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends directorperiodoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, directorperiodoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__directorperiodoClient<runtime.Types.Result.GetResult<Prisma.$directorperiodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Directorperiodo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorperiodoFindFirstArgs} args - Arguments to find a Directorperiodo
     * @example
     * // Get one Directorperiodo
     * const directorperiodo = await prisma.directorperiodo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends directorperiodoFindFirstArgs>(args?: Prisma.SelectSubset<T, directorperiodoFindFirstArgs<ExtArgs>>): Prisma.Prisma__directorperiodoClient<runtime.Types.Result.GetResult<Prisma.$directorperiodoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Directorperiodo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorperiodoFindFirstOrThrowArgs} args - Arguments to find a Directorperiodo
     * @example
     * // Get one Directorperiodo
     * const directorperiodo = await prisma.directorperiodo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends directorperiodoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, directorperiodoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__directorperiodoClient<runtime.Types.Result.GetResult<Prisma.$directorperiodoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Directorperiodos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorperiodoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Directorperiodos
     * const directorperiodos = await prisma.directorperiodo.findMany()
     *
     * // Get first 10 Directorperiodos
     * const directorperiodos = await prisma.directorperiodo.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const directorperiodoWithIdOnly = await prisma.directorperiodo.findMany({ select: { id: true } })
     *
     */
    findMany<T extends directorperiodoFindManyArgs>(args?: Prisma.SelectSubset<T, directorperiodoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$directorperiodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Directorperiodo.
     * @param {directorperiodoCreateArgs} args - Arguments to create a Directorperiodo.
     * @example
     * // Create one Directorperiodo
     * const Directorperiodo = await prisma.directorperiodo.create({
     *   data: {
     *     // ... data to create a Directorperiodo
     *   }
     * })
     *
     */
    create<T extends directorperiodoCreateArgs>(args: Prisma.SelectSubset<T, directorperiodoCreateArgs<ExtArgs>>): Prisma.Prisma__directorperiodoClient<runtime.Types.Result.GetResult<Prisma.$directorperiodoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Directorperiodos.
     * @param {directorperiodoCreateManyArgs} args - Arguments to create many Directorperiodos.
     * @example
     * // Create many Directorperiodos
     * const directorperiodo = await prisma.directorperiodo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends directorperiodoCreateManyArgs>(args?: Prisma.SelectSubset<T, directorperiodoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Directorperiodo.
     * @param {directorperiodoDeleteArgs} args - Arguments to delete one Directorperiodo.
     * @example
     * // Delete one Directorperiodo
     * const Directorperiodo = await prisma.directorperiodo.delete({
     *   where: {
     *     // ... filter to delete one Directorperiodo
     *   }
     * })
     *
     */
    delete<T extends directorperiodoDeleteArgs>(args: Prisma.SelectSubset<T, directorperiodoDeleteArgs<ExtArgs>>): Prisma.Prisma__directorperiodoClient<runtime.Types.Result.GetResult<Prisma.$directorperiodoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Directorperiodo.
     * @param {directorperiodoUpdateArgs} args - Arguments to update one Directorperiodo.
     * @example
     * // Update one Directorperiodo
     * const directorperiodo = await prisma.directorperiodo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends directorperiodoUpdateArgs>(args: Prisma.SelectSubset<T, directorperiodoUpdateArgs<ExtArgs>>): Prisma.Prisma__directorperiodoClient<runtime.Types.Result.GetResult<Prisma.$directorperiodoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Directorperiodos.
     * @param {directorperiodoDeleteManyArgs} args - Arguments to filter Directorperiodos to delete.
     * @example
     * // Delete a few Directorperiodos
     * const { count } = await prisma.directorperiodo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends directorperiodoDeleteManyArgs>(args?: Prisma.SelectSubset<T, directorperiodoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Directorperiodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorperiodoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Directorperiodos
     * const directorperiodo = await prisma.directorperiodo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends directorperiodoUpdateManyArgs>(args: Prisma.SelectSubset<T, directorperiodoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Directorperiodo.
     * @param {directorperiodoUpsertArgs} args - Arguments to update or create a Directorperiodo.
     * @example
     * // Update or create a Directorperiodo
     * const directorperiodo = await prisma.directorperiodo.upsert({
     *   create: {
     *     // ... data to create a Directorperiodo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Directorperiodo we want to update
     *   }
     * })
     */
    upsert<T extends directorperiodoUpsertArgs>(args: Prisma.SelectSubset<T, directorperiodoUpsertArgs<ExtArgs>>): Prisma.Prisma__directorperiodoClient<runtime.Types.Result.GetResult<Prisma.$directorperiodoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Directorperiodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorperiodoCountArgs} args - Arguments to filter Directorperiodos to count.
     * @example
     * // Count the number of Directorperiodos
     * const count = await prisma.directorperiodo.count({
     *   where: {
     *     // ... the filter for the Directorperiodos we want to count
     *   }
     * })
    **/
    count<T extends directorperiodoCountArgs>(args?: Prisma.Subset<T, directorperiodoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DirectorperiodoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Directorperiodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorperiodoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DirectorperiodoAggregateArgs>(args: Prisma.Subset<T, DirectorperiodoAggregateArgs>): Prisma.PrismaPromise<GetDirectorperiodoAggregateType<T>>;
    /**
     * Group by Directorperiodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorperiodoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends directorperiodoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: directorperiodoGroupByArgs['orderBy'];
    } : {
        orderBy?: directorperiodoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, directorperiodoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectorperiodoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the directorperiodo model
     */
    readonly fields: directorperiodoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for directorperiodo.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__directorperiodoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    director<T extends Prisma.directorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.directorDefaultArgs<ExtArgs>>): Prisma.Prisma__directorClient<runtime.Types.Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the directorperiodo model
 */
export interface directorperiodoFieldRefs {
    readonly id: Prisma.FieldRef<"directorperiodo", 'String'>;
    readonly directorId: Prisma.FieldRef<"directorperiodo", 'String'>;
    readonly fechaInicio: Prisma.FieldRef<"directorperiodo", 'DateTime'>;
    readonly fechaFin: Prisma.FieldRef<"directorperiodo", 'DateTime'>;
    readonly motivoBaja: Prisma.FieldRef<"directorperiodo", 'directorperiodo_motivoBaja'>;
    readonly observaciones: Prisma.FieldRef<"directorperiodo", 'String'>;
    readonly createdAt: Prisma.FieldRef<"directorperiodo", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"directorperiodo", 'DateTime'>;
}
/**
 * directorperiodo findUnique
 */
export type directorperiodoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directorperiodo
     */
    select?: Prisma.directorperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the directorperiodo
     */
    omit?: Prisma.directorperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.directorperiodoInclude<ExtArgs> | null;
    /**
     * Filter, which directorperiodo to fetch.
     */
    where: Prisma.directorperiodoWhereUniqueInput;
};
/**
 * directorperiodo findUniqueOrThrow
 */
export type directorperiodoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directorperiodo
     */
    select?: Prisma.directorperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the directorperiodo
     */
    omit?: Prisma.directorperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.directorperiodoInclude<ExtArgs> | null;
    /**
     * Filter, which directorperiodo to fetch.
     */
    where: Prisma.directorperiodoWhereUniqueInput;
};
/**
 * directorperiodo findFirst
 */
export type directorperiodoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directorperiodo
     */
    select?: Prisma.directorperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the directorperiodo
     */
    omit?: Prisma.directorperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.directorperiodoInclude<ExtArgs> | null;
    /**
     * Filter, which directorperiodo to fetch.
     */
    where?: Prisma.directorperiodoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of directorperiodos to fetch.
     */
    orderBy?: Prisma.directorperiodoOrderByWithRelationInput | Prisma.directorperiodoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for directorperiodos.
     */
    cursor?: Prisma.directorperiodoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` directorperiodos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` directorperiodos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of directorperiodos.
     */
    distinct?: Prisma.DirectorperiodoScalarFieldEnum | Prisma.DirectorperiodoScalarFieldEnum[];
};
/**
 * directorperiodo findFirstOrThrow
 */
export type directorperiodoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directorperiodo
     */
    select?: Prisma.directorperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the directorperiodo
     */
    omit?: Prisma.directorperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.directorperiodoInclude<ExtArgs> | null;
    /**
     * Filter, which directorperiodo to fetch.
     */
    where?: Prisma.directorperiodoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of directorperiodos to fetch.
     */
    orderBy?: Prisma.directorperiodoOrderByWithRelationInput | Prisma.directorperiodoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for directorperiodos.
     */
    cursor?: Prisma.directorperiodoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` directorperiodos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` directorperiodos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of directorperiodos.
     */
    distinct?: Prisma.DirectorperiodoScalarFieldEnum | Prisma.DirectorperiodoScalarFieldEnum[];
};
/**
 * directorperiodo findMany
 */
export type directorperiodoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directorperiodo
     */
    select?: Prisma.directorperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the directorperiodo
     */
    omit?: Prisma.directorperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.directorperiodoInclude<ExtArgs> | null;
    /**
     * Filter, which directorperiodos to fetch.
     */
    where?: Prisma.directorperiodoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of directorperiodos to fetch.
     */
    orderBy?: Prisma.directorperiodoOrderByWithRelationInput | Prisma.directorperiodoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing directorperiodos.
     */
    cursor?: Prisma.directorperiodoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` directorperiodos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` directorperiodos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of directorperiodos.
     */
    distinct?: Prisma.DirectorperiodoScalarFieldEnum | Prisma.DirectorperiodoScalarFieldEnum[];
};
/**
 * directorperiodo create
 */
export type directorperiodoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directorperiodo
     */
    select?: Prisma.directorperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the directorperiodo
     */
    omit?: Prisma.directorperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.directorperiodoInclude<ExtArgs> | null;
    /**
     * The data needed to create a directorperiodo.
     */
    data: Prisma.XOR<Prisma.directorperiodoCreateInput, Prisma.directorperiodoUncheckedCreateInput>;
};
/**
 * directorperiodo createMany
 */
export type directorperiodoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many directorperiodos.
     */
    data: Prisma.directorperiodoCreateManyInput | Prisma.directorperiodoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * directorperiodo update
 */
export type directorperiodoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directorperiodo
     */
    select?: Prisma.directorperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the directorperiodo
     */
    omit?: Prisma.directorperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.directorperiodoInclude<ExtArgs> | null;
    /**
     * The data needed to update a directorperiodo.
     */
    data: Prisma.XOR<Prisma.directorperiodoUpdateInput, Prisma.directorperiodoUncheckedUpdateInput>;
    /**
     * Choose, which directorperiodo to update.
     */
    where: Prisma.directorperiodoWhereUniqueInput;
};
/**
 * directorperiodo updateMany
 */
export type directorperiodoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update directorperiodos.
     */
    data: Prisma.XOR<Prisma.directorperiodoUpdateManyMutationInput, Prisma.directorperiodoUncheckedUpdateManyInput>;
    /**
     * Filter which directorperiodos to update
     */
    where?: Prisma.directorperiodoWhereInput;
    /**
     * Limit how many directorperiodos to update.
     */
    limit?: number;
};
/**
 * directorperiodo upsert
 */
export type directorperiodoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directorperiodo
     */
    select?: Prisma.directorperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the directorperiodo
     */
    omit?: Prisma.directorperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.directorperiodoInclude<ExtArgs> | null;
    /**
     * The filter to search for the directorperiodo to update in case it exists.
     */
    where: Prisma.directorperiodoWhereUniqueInput;
    /**
     * In case the directorperiodo found by the `where` argument doesn't exist, create a new directorperiodo with this data.
     */
    create: Prisma.XOR<Prisma.directorperiodoCreateInput, Prisma.directorperiodoUncheckedCreateInput>;
    /**
     * In case the directorperiodo was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.directorperiodoUpdateInput, Prisma.directorperiodoUncheckedUpdateInput>;
};
/**
 * directorperiodo delete
 */
export type directorperiodoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directorperiodo
     */
    select?: Prisma.directorperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the directorperiodo
     */
    omit?: Prisma.directorperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.directorperiodoInclude<ExtArgs> | null;
    /**
     * Filter which directorperiodo to delete.
     */
    where: Prisma.directorperiodoWhereUniqueInput;
};
/**
 * directorperiodo deleteMany
 */
export type directorperiodoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which directorperiodos to delete
     */
    where?: Prisma.directorperiodoWhereInput;
    /**
     * Limit how many directorperiodos to delete.
     */
    limit?: number;
};
/**
 * directorperiodo without action
 */
export type directorperiodoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directorperiodo
     */
    select?: Prisma.directorperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the directorperiodo
     */
    omit?: Prisma.directorperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.directorperiodoInclude<ExtArgs> | null;
};
//# sourceMappingURL=directorperiodo.d.ts.map