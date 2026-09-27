import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model profesorperiodo
 *
 */
export type profesorperiodoModel = runtime.Types.Result.DefaultSelection<Prisma.$profesorperiodoPayload>;
export type AggregateProfesorperiodo = {
    _count: ProfesorperiodoCountAggregateOutputType | null;
    _min: ProfesorperiodoMinAggregateOutputType | null;
    _max: ProfesorperiodoMaxAggregateOutputType | null;
};
export type ProfesorperiodoMinAggregateOutputType = {
    id: string | null;
    profesorId: string | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    motivoBaja: $Enums.profesor_motivoBaja | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProfesorperiodoMaxAggregateOutputType = {
    id: string | null;
    profesorId: string | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    motivoBaja: $Enums.profesor_motivoBaja | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProfesorperiodoCountAggregateOutputType = {
    id: number;
    profesorId: number;
    fechaInicio: number;
    fechaFin: number;
    motivoBaja: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProfesorperiodoMinAggregateInputType = {
    id?: true;
    profesorId?: true;
    fechaInicio?: true;
    fechaFin?: true;
    motivoBaja?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProfesorperiodoMaxAggregateInputType = {
    id?: true;
    profesorId?: true;
    fechaInicio?: true;
    fechaFin?: true;
    motivoBaja?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProfesorperiodoCountAggregateInputType = {
    id?: true;
    profesorId?: true;
    fechaInicio?: true;
    fechaFin?: true;
    motivoBaja?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProfesorperiodoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which profesorperiodo to aggregate.
     */
    where?: Prisma.profesorperiodoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of profesorperiodos to fetch.
     */
    orderBy?: Prisma.profesorperiodoOrderByWithRelationInput | Prisma.profesorperiodoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.profesorperiodoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` profesorperiodos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` profesorperiodos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned profesorperiodos
    **/
    _count?: true | ProfesorperiodoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProfesorperiodoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProfesorperiodoMaxAggregateInputType;
};
export type GetProfesorperiodoAggregateType<T extends ProfesorperiodoAggregateArgs> = {
    [P in keyof T & keyof AggregateProfesorperiodo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProfesorperiodo[P]> : Prisma.GetScalarType<T[P], AggregateProfesorperiodo[P]>;
};
export type profesorperiodoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.profesorperiodoWhereInput;
    orderBy?: Prisma.profesorperiodoOrderByWithAggregationInput | Prisma.profesorperiodoOrderByWithAggregationInput[];
    by: Prisma.ProfesorperiodoScalarFieldEnum[] | Prisma.ProfesorperiodoScalarFieldEnum;
    having?: Prisma.profesorperiodoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfesorperiodoCountAggregateInputType | true;
    _min?: ProfesorperiodoMinAggregateInputType;
    _max?: ProfesorperiodoMaxAggregateInputType;
};
export type ProfesorperiodoGroupByOutputType = {
    id: string;
    profesorId: string;
    fechaInicio: Date;
    fechaFin: Date | null;
    motivoBaja: $Enums.profesor_motivoBaja | null;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ProfesorperiodoCountAggregateOutputType | null;
    _min: ProfesorperiodoMinAggregateOutputType | null;
    _max: ProfesorperiodoMaxAggregateOutputType | null;
};
export type GetProfesorperiodoGroupByPayload<T extends profesorperiodoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProfesorperiodoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProfesorperiodoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProfesorperiodoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProfesorperiodoGroupByOutputType[P]>;
}>>;
export type profesorperiodoWhereInput = {
    AND?: Prisma.profesorperiodoWhereInput | Prisma.profesorperiodoWhereInput[];
    OR?: Prisma.profesorperiodoWhereInput[];
    NOT?: Prisma.profesorperiodoWhereInput | Prisma.profesorperiodoWhereInput[];
    id?: Prisma.StringFilter<"profesorperiodo"> | string;
    profesorId?: Prisma.StringFilter<"profesorperiodo"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"profesorperiodo"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"profesorperiodo"> | Date | string | null;
    motivoBaja?: Prisma.Enumprofesor_motivoBajaNullableFilter<"profesorperiodo"> | $Enums.profesor_motivoBaja | null;
    observaciones?: Prisma.StringNullableFilter<"profesorperiodo"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"profesorperiodo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"profesorperiodo"> | Date | string;
    profesor?: Prisma.XOR<Prisma.ProfesorScalarRelationFilter, Prisma.profesorWhereInput>;
};
export type profesorperiodoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    profesorId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    profesor?: Prisma.profesorOrderByWithRelationInput;
    _relevance?: Prisma.profesorperiodoOrderByRelevanceInput;
};
export type profesorperiodoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.profesorperiodoWhereInput | Prisma.profesorperiodoWhereInput[];
    OR?: Prisma.profesorperiodoWhereInput[];
    NOT?: Prisma.profesorperiodoWhereInput | Prisma.profesorperiodoWhereInput[];
    profesorId?: Prisma.StringFilter<"profesorperiodo"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"profesorperiodo"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"profesorperiodo"> | Date | string | null;
    motivoBaja?: Prisma.Enumprofesor_motivoBajaNullableFilter<"profesorperiodo"> | $Enums.profesor_motivoBaja | null;
    observaciones?: Prisma.StringNullableFilter<"profesorperiodo"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"profesorperiodo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"profesorperiodo"> | Date | string;
    profesor?: Prisma.XOR<Prisma.ProfesorScalarRelationFilter, Prisma.profesorWhereInput>;
}, "id">;
export type profesorperiodoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    profesorId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.profesorperiodoCountOrderByAggregateInput;
    _max?: Prisma.profesorperiodoMaxOrderByAggregateInput;
    _min?: Prisma.profesorperiodoMinOrderByAggregateInput;
};
export type profesorperiodoScalarWhereWithAggregatesInput = {
    AND?: Prisma.profesorperiodoScalarWhereWithAggregatesInput | Prisma.profesorperiodoScalarWhereWithAggregatesInput[];
    OR?: Prisma.profesorperiodoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.profesorperiodoScalarWhereWithAggregatesInput | Prisma.profesorperiodoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"profesorperiodo"> | string;
    profesorId?: Prisma.StringWithAggregatesFilter<"profesorperiodo"> | string;
    fechaInicio?: Prisma.DateTimeWithAggregatesFilter<"profesorperiodo"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableWithAggregatesFilter<"profesorperiodo"> | Date | string | null;
    motivoBaja?: Prisma.Enumprofesor_motivoBajaNullableWithAggregatesFilter<"profesorperiodo"> | $Enums.profesor_motivoBaja | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"profesorperiodo"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"profesorperiodo"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"profesorperiodo"> | Date | string;
};
export type profesorperiodoCreateInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.profesor_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    profesor: Prisma.profesorCreateNestedOneWithoutProfesorperiodoInput;
};
export type profesorperiodoUncheckedCreateInput = {
    id: string;
    profesorId: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.profesor_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type profesorperiodoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput | $Enums.profesor_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profesor?: Prisma.profesorUpdateOneRequiredWithoutProfesorperiodoNestedInput;
};
export type profesorperiodoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profesorId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput | $Enums.profesor_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type profesorperiodoCreateManyInput = {
    id: string;
    profesorId: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.profesor_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type profesorperiodoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput | $Enums.profesor_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type profesorperiodoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profesorId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput | $Enums.profesor_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfesorperiodoListRelationFilter = {
    every?: Prisma.profesorperiodoWhereInput;
    some?: Prisma.profesorperiodoWhereInput;
    none?: Prisma.profesorperiodoWhereInput;
};
export type profesorperiodoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type profesorperiodoOrderByRelevanceInput = {
    fields: Prisma.profesorperiodoOrderByRelevanceFieldEnum | Prisma.profesorperiodoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type profesorperiodoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profesorId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type profesorperiodoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profesorId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type profesorperiodoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profesorId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type profesorperiodoCreateNestedManyWithoutProfesorInput = {
    create?: Prisma.XOR<Prisma.profesorperiodoCreateWithoutProfesorInput, Prisma.profesorperiodoUncheckedCreateWithoutProfesorInput> | Prisma.profesorperiodoCreateWithoutProfesorInput[] | Prisma.profesorperiodoUncheckedCreateWithoutProfesorInput[];
    connectOrCreate?: Prisma.profesorperiodoCreateOrConnectWithoutProfesorInput | Prisma.profesorperiodoCreateOrConnectWithoutProfesorInput[];
    createMany?: Prisma.profesorperiodoCreateManyProfesorInputEnvelope;
    connect?: Prisma.profesorperiodoWhereUniqueInput | Prisma.profesorperiodoWhereUniqueInput[];
};
export type profesorperiodoUncheckedCreateNestedManyWithoutProfesorInput = {
    create?: Prisma.XOR<Prisma.profesorperiodoCreateWithoutProfesorInput, Prisma.profesorperiodoUncheckedCreateWithoutProfesorInput> | Prisma.profesorperiodoCreateWithoutProfesorInput[] | Prisma.profesorperiodoUncheckedCreateWithoutProfesorInput[];
    connectOrCreate?: Prisma.profesorperiodoCreateOrConnectWithoutProfesorInput | Prisma.profesorperiodoCreateOrConnectWithoutProfesorInput[];
    createMany?: Prisma.profesorperiodoCreateManyProfesorInputEnvelope;
    connect?: Prisma.profesorperiodoWhereUniqueInput | Prisma.profesorperiodoWhereUniqueInput[];
};
export type profesorperiodoUpdateManyWithoutProfesorNestedInput = {
    create?: Prisma.XOR<Prisma.profesorperiodoCreateWithoutProfesorInput, Prisma.profesorperiodoUncheckedCreateWithoutProfesorInput> | Prisma.profesorperiodoCreateWithoutProfesorInput[] | Prisma.profesorperiodoUncheckedCreateWithoutProfesorInput[];
    connectOrCreate?: Prisma.profesorperiodoCreateOrConnectWithoutProfesorInput | Prisma.profesorperiodoCreateOrConnectWithoutProfesorInput[];
    upsert?: Prisma.profesorperiodoUpsertWithWhereUniqueWithoutProfesorInput | Prisma.profesorperiodoUpsertWithWhereUniqueWithoutProfesorInput[];
    createMany?: Prisma.profesorperiodoCreateManyProfesorInputEnvelope;
    set?: Prisma.profesorperiodoWhereUniqueInput | Prisma.profesorperiodoWhereUniqueInput[];
    disconnect?: Prisma.profesorperiodoWhereUniqueInput | Prisma.profesorperiodoWhereUniqueInput[];
    delete?: Prisma.profesorperiodoWhereUniqueInput | Prisma.profesorperiodoWhereUniqueInput[];
    connect?: Prisma.profesorperiodoWhereUniqueInput | Prisma.profesorperiodoWhereUniqueInput[];
    update?: Prisma.profesorperiodoUpdateWithWhereUniqueWithoutProfesorInput | Prisma.profesorperiodoUpdateWithWhereUniqueWithoutProfesorInput[];
    updateMany?: Prisma.profesorperiodoUpdateManyWithWhereWithoutProfesorInput | Prisma.profesorperiodoUpdateManyWithWhereWithoutProfesorInput[];
    deleteMany?: Prisma.profesorperiodoScalarWhereInput | Prisma.profesorperiodoScalarWhereInput[];
};
export type profesorperiodoUncheckedUpdateManyWithoutProfesorNestedInput = {
    create?: Prisma.XOR<Prisma.profesorperiodoCreateWithoutProfesorInput, Prisma.profesorperiodoUncheckedCreateWithoutProfesorInput> | Prisma.profesorperiodoCreateWithoutProfesorInput[] | Prisma.profesorperiodoUncheckedCreateWithoutProfesorInput[];
    connectOrCreate?: Prisma.profesorperiodoCreateOrConnectWithoutProfesorInput | Prisma.profesorperiodoCreateOrConnectWithoutProfesorInput[];
    upsert?: Prisma.profesorperiodoUpsertWithWhereUniqueWithoutProfesorInput | Prisma.profesorperiodoUpsertWithWhereUniqueWithoutProfesorInput[];
    createMany?: Prisma.profesorperiodoCreateManyProfesorInputEnvelope;
    set?: Prisma.profesorperiodoWhereUniqueInput | Prisma.profesorperiodoWhereUniqueInput[];
    disconnect?: Prisma.profesorperiodoWhereUniqueInput | Prisma.profesorperiodoWhereUniqueInput[];
    delete?: Prisma.profesorperiodoWhereUniqueInput | Prisma.profesorperiodoWhereUniqueInput[];
    connect?: Prisma.profesorperiodoWhereUniqueInput | Prisma.profesorperiodoWhereUniqueInput[];
    update?: Prisma.profesorperiodoUpdateWithWhereUniqueWithoutProfesorInput | Prisma.profesorperiodoUpdateWithWhereUniqueWithoutProfesorInput[];
    updateMany?: Prisma.profesorperiodoUpdateManyWithWhereWithoutProfesorInput | Prisma.profesorperiodoUpdateManyWithWhereWithoutProfesorInput[];
    deleteMany?: Prisma.profesorperiodoScalarWhereInput | Prisma.profesorperiodoScalarWhereInput[];
};
export type profesorperiodoCreateWithoutProfesorInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.profesor_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type profesorperiodoUncheckedCreateWithoutProfesorInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.profesor_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type profesorperiodoCreateOrConnectWithoutProfesorInput = {
    where: Prisma.profesorperiodoWhereUniqueInput;
    create: Prisma.XOR<Prisma.profesorperiodoCreateWithoutProfesorInput, Prisma.profesorperiodoUncheckedCreateWithoutProfesorInput>;
};
export type profesorperiodoCreateManyProfesorInputEnvelope = {
    data: Prisma.profesorperiodoCreateManyProfesorInput | Prisma.profesorperiodoCreateManyProfesorInput[];
    skipDuplicates?: boolean;
};
export type profesorperiodoUpsertWithWhereUniqueWithoutProfesorInput = {
    where: Prisma.profesorperiodoWhereUniqueInput;
    update: Prisma.XOR<Prisma.profesorperiodoUpdateWithoutProfesorInput, Prisma.profesorperiodoUncheckedUpdateWithoutProfesorInput>;
    create: Prisma.XOR<Prisma.profesorperiodoCreateWithoutProfesorInput, Prisma.profesorperiodoUncheckedCreateWithoutProfesorInput>;
};
export type profesorperiodoUpdateWithWhereUniqueWithoutProfesorInput = {
    where: Prisma.profesorperiodoWhereUniqueInput;
    data: Prisma.XOR<Prisma.profesorperiodoUpdateWithoutProfesorInput, Prisma.profesorperiodoUncheckedUpdateWithoutProfesorInput>;
};
export type profesorperiodoUpdateManyWithWhereWithoutProfesorInput = {
    where: Prisma.profesorperiodoScalarWhereInput;
    data: Prisma.XOR<Prisma.profesorperiodoUpdateManyMutationInput, Prisma.profesorperiodoUncheckedUpdateManyWithoutProfesorInput>;
};
export type profesorperiodoScalarWhereInput = {
    AND?: Prisma.profesorperiodoScalarWhereInput | Prisma.profesorperiodoScalarWhereInput[];
    OR?: Prisma.profesorperiodoScalarWhereInput[];
    NOT?: Prisma.profesorperiodoScalarWhereInput | Prisma.profesorperiodoScalarWhereInput[];
    id?: Prisma.StringFilter<"profesorperiodo"> | string;
    profesorId?: Prisma.StringFilter<"profesorperiodo"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"profesorperiodo"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"profesorperiodo"> | Date | string | null;
    motivoBaja?: Prisma.Enumprofesor_motivoBajaNullableFilter<"profesorperiodo"> | $Enums.profesor_motivoBaja | null;
    observaciones?: Prisma.StringNullableFilter<"profesorperiodo"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"profesorperiodo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"profesorperiodo"> | Date | string;
};
export type profesorperiodoCreateManyProfesorInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.profesor_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type profesorperiodoUpdateWithoutProfesorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput | $Enums.profesor_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type profesorperiodoUncheckedUpdateWithoutProfesorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput | $Enums.profesor_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type profesorperiodoUncheckedUpdateManyWithoutProfesorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput | $Enums.profesor_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type profesorperiodoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profesorId?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    motivoBaja?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    profesor?: boolean | Prisma.profesorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profesorperiodo"]>;
export type profesorperiodoSelectScalar = {
    id?: boolean;
    profesorId?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    motivoBaja?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type profesorperiodoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "profesorId" | "fechaInicio" | "fechaFin" | "motivoBaja" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["profesorperiodo"]>;
export type profesorperiodoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profesor?: boolean | Prisma.profesorDefaultArgs<ExtArgs>;
};
export type $profesorperiodoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "profesorperiodo";
    objects: {
        profesor: Prisma.$profesorPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        profesorId: string;
        fechaInicio: Date;
        fechaFin: Date | null;
        motivoBaja: $Enums.profesor_motivoBaja | null;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["profesorperiodo"]>;
    composites: {};
};
export type profesorperiodoGetPayload<S extends boolean | null | undefined | profesorperiodoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$profesorperiodoPayload, S>;
export type profesorperiodoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<profesorperiodoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfesorperiodoCountAggregateInputType | true;
};
export interface profesorperiodoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['profesorperiodo'];
        meta: {
            name: 'profesorperiodo';
        };
    };
    /**
     * Find zero or one Profesorperiodo that matches the filter.
     * @param {profesorperiodoFindUniqueArgs} args - Arguments to find a Profesorperiodo
     * @example
     * // Get one Profesorperiodo
     * const profesorperiodo = await prisma.profesorperiodo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profesorperiodoFindUniqueArgs>(args: Prisma.SelectSubset<T, profesorperiodoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__profesorperiodoClient<runtime.Types.Result.GetResult<Prisma.$profesorperiodoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Profesorperiodo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profesorperiodoFindUniqueOrThrowArgs} args - Arguments to find a Profesorperiodo
     * @example
     * // Get one Profesorperiodo
     * const profesorperiodo = await prisma.profesorperiodo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profesorperiodoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, profesorperiodoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__profesorperiodoClient<runtime.Types.Result.GetResult<Prisma.$profesorperiodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Profesorperiodo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profesorperiodoFindFirstArgs} args - Arguments to find a Profesorperiodo
     * @example
     * // Get one Profesorperiodo
     * const profesorperiodo = await prisma.profesorperiodo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profesorperiodoFindFirstArgs>(args?: Prisma.SelectSubset<T, profesorperiodoFindFirstArgs<ExtArgs>>): Prisma.Prisma__profesorperiodoClient<runtime.Types.Result.GetResult<Prisma.$profesorperiodoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Profesorperiodo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profesorperiodoFindFirstOrThrowArgs} args - Arguments to find a Profesorperiodo
     * @example
     * // Get one Profesorperiodo
     * const profesorperiodo = await prisma.profesorperiodo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profesorperiodoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, profesorperiodoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__profesorperiodoClient<runtime.Types.Result.GetResult<Prisma.$profesorperiodoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Profesorperiodos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profesorperiodoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profesorperiodos
     * const profesorperiodos = await prisma.profesorperiodo.findMany()
     *
     * // Get first 10 Profesorperiodos
     * const profesorperiodos = await prisma.profesorperiodo.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const profesorperiodoWithIdOnly = await prisma.profesorperiodo.findMany({ select: { id: true } })
     *
     */
    findMany<T extends profesorperiodoFindManyArgs>(args?: Prisma.SelectSubset<T, profesorperiodoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$profesorperiodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Profesorperiodo.
     * @param {profesorperiodoCreateArgs} args - Arguments to create a Profesorperiodo.
     * @example
     * // Create one Profesorperiodo
     * const Profesorperiodo = await prisma.profesorperiodo.create({
     *   data: {
     *     // ... data to create a Profesorperiodo
     *   }
     * })
     *
     */
    create<T extends profesorperiodoCreateArgs>(args: Prisma.SelectSubset<T, profesorperiodoCreateArgs<ExtArgs>>): Prisma.Prisma__profesorperiodoClient<runtime.Types.Result.GetResult<Prisma.$profesorperiodoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Profesorperiodos.
     * @param {profesorperiodoCreateManyArgs} args - Arguments to create many Profesorperiodos.
     * @example
     * // Create many Profesorperiodos
     * const profesorperiodo = await prisma.profesorperiodo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends profesorperiodoCreateManyArgs>(args?: Prisma.SelectSubset<T, profesorperiodoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Profesorperiodo.
     * @param {profesorperiodoDeleteArgs} args - Arguments to delete one Profesorperiodo.
     * @example
     * // Delete one Profesorperiodo
     * const Profesorperiodo = await prisma.profesorperiodo.delete({
     *   where: {
     *     // ... filter to delete one Profesorperiodo
     *   }
     * })
     *
     */
    delete<T extends profesorperiodoDeleteArgs>(args: Prisma.SelectSubset<T, profesorperiodoDeleteArgs<ExtArgs>>): Prisma.Prisma__profesorperiodoClient<runtime.Types.Result.GetResult<Prisma.$profesorperiodoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Profesorperiodo.
     * @param {profesorperiodoUpdateArgs} args - Arguments to update one Profesorperiodo.
     * @example
     * // Update one Profesorperiodo
     * const profesorperiodo = await prisma.profesorperiodo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends profesorperiodoUpdateArgs>(args: Prisma.SelectSubset<T, profesorperiodoUpdateArgs<ExtArgs>>): Prisma.Prisma__profesorperiodoClient<runtime.Types.Result.GetResult<Prisma.$profesorperiodoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Profesorperiodos.
     * @param {profesorperiodoDeleteManyArgs} args - Arguments to filter Profesorperiodos to delete.
     * @example
     * // Delete a few Profesorperiodos
     * const { count } = await prisma.profesorperiodo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends profesorperiodoDeleteManyArgs>(args?: Prisma.SelectSubset<T, profesorperiodoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Profesorperiodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profesorperiodoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profesorperiodos
     * const profesorperiodo = await prisma.profesorperiodo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends profesorperiodoUpdateManyArgs>(args: Prisma.SelectSubset<T, profesorperiodoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Profesorperiodo.
     * @param {profesorperiodoUpsertArgs} args - Arguments to update or create a Profesorperiodo.
     * @example
     * // Update or create a Profesorperiodo
     * const profesorperiodo = await prisma.profesorperiodo.upsert({
     *   create: {
     *     // ... data to create a Profesorperiodo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profesorperiodo we want to update
     *   }
     * })
     */
    upsert<T extends profesorperiodoUpsertArgs>(args: Prisma.SelectSubset<T, profesorperiodoUpsertArgs<ExtArgs>>): Prisma.Prisma__profesorperiodoClient<runtime.Types.Result.GetResult<Prisma.$profesorperiodoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Profesorperiodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profesorperiodoCountArgs} args - Arguments to filter Profesorperiodos to count.
     * @example
     * // Count the number of Profesorperiodos
     * const count = await prisma.profesorperiodo.count({
     *   where: {
     *     // ... the filter for the Profesorperiodos we want to count
     *   }
     * })
    **/
    count<T extends profesorperiodoCountArgs>(args?: Prisma.Subset<T, profesorperiodoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProfesorperiodoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Profesorperiodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorperiodoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfesorperiodoAggregateArgs>(args: Prisma.Subset<T, ProfesorperiodoAggregateArgs>): Prisma.PrismaPromise<GetProfesorperiodoAggregateType<T>>;
    /**
     * Group by Profesorperiodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profesorperiodoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends profesorperiodoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: profesorperiodoGroupByArgs['orderBy'];
    } : {
        orderBy?: profesorperiodoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, profesorperiodoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfesorperiodoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the profesorperiodo model
     */
    readonly fields: profesorperiodoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for profesorperiodo.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__profesorperiodoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profesor<T extends Prisma.profesorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.profesorDefaultArgs<ExtArgs>>): Prisma.Prisma__profesorClient<runtime.Types.Result.GetResult<Prisma.$profesorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the profesorperiodo model
 */
export interface profesorperiodoFieldRefs {
    readonly id: Prisma.FieldRef<"profesorperiodo", 'String'>;
    readonly profesorId: Prisma.FieldRef<"profesorperiodo", 'String'>;
    readonly fechaInicio: Prisma.FieldRef<"profesorperiodo", 'DateTime'>;
    readonly fechaFin: Prisma.FieldRef<"profesorperiodo", 'DateTime'>;
    readonly motivoBaja: Prisma.FieldRef<"profesorperiodo", 'profesor_motivoBaja'>;
    readonly observaciones: Prisma.FieldRef<"profesorperiodo", 'String'>;
    readonly createdAt: Prisma.FieldRef<"profesorperiodo", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"profesorperiodo", 'DateTime'>;
}
/**
 * profesorperiodo findUnique
 */
export type profesorperiodoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profesorperiodo
     */
    select?: Prisma.profesorperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profesorperiodo
     */
    omit?: Prisma.profesorperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.profesorperiodoInclude<ExtArgs> | null;
    /**
     * Filter, which profesorperiodo to fetch.
     */
    where: Prisma.profesorperiodoWhereUniqueInput;
};
/**
 * profesorperiodo findUniqueOrThrow
 */
export type profesorperiodoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profesorperiodo
     */
    select?: Prisma.profesorperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profesorperiodo
     */
    omit?: Prisma.profesorperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.profesorperiodoInclude<ExtArgs> | null;
    /**
     * Filter, which profesorperiodo to fetch.
     */
    where: Prisma.profesorperiodoWhereUniqueInput;
};
/**
 * profesorperiodo findFirst
 */
export type profesorperiodoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profesorperiodo
     */
    select?: Prisma.profesorperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profesorperiodo
     */
    omit?: Prisma.profesorperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.profesorperiodoInclude<ExtArgs> | null;
    /**
     * Filter, which profesorperiodo to fetch.
     */
    where?: Prisma.profesorperiodoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of profesorperiodos to fetch.
     */
    orderBy?: Prisma.profesorperiodoOrderByWithRelationInput | Prisma.profesorperiodoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for profesorperiodos.
     */
    cursor?: Prisma.profesorperiodoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` profesorperiodos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` profesorperiodos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of profesorperiodos.
     */
    distinct?: Prisma.ProfesorperiodoScalarFieldEnum | Prisma.ProfesorperiodoScalarFieldEnum[];
};
/**
 * profesorperiodo findFirstOrThrow
 */
export type profesorperiodoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profesorperiodo
     */
    select?: Prisma.profesorperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profesorperiodo
     */
    omit?: Prisma.profesorperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.profesorperiodoInclude<ExtArgs> | null;
    /**
     * Filter, which profesorperiodo to fetch.
     */
    where?: Prisma.profesorperiodoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of profesorperiodos to fetch.
     */
    orderBy?: Prisma.profesorperiodoOrderByWithRelationInput | Prisma.profesorperiodoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for profesorperiodos.
     */
    cursor?: Prisma.profesorperiodoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` profesorperiodos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` profesorperiodos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of profesorperiodos.
     */
    distinct?: Prisma.ProfesorperiodoScalarFieldEnum | Prisma.ProfesorperiodoScalarFieldEnum[];
};
/**
 * profesorperiodo findMany
 */
export type profesorperiodoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profesorperiodo
     */
    select?: Prisma.profesorperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profesorperiodo
     */
    omit?: Prisma.profesorperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.profesorperiodoInclude<ExtArgs> | null;
    /**
     * Filter, which profesorperiodos to fetch.
     */
    where?: Prisma.profesorperiodoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of profesorperiodos to fetch.
     */
    orderBy?: Prisma.profesorperiodoOrderByWithRelationInput | Prisma.profesorperiodoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing profesorperiodos.
     */
    cursor?: Prisma.profesorperiodoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` profesorperiodos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` profesorperiodos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of profesorperiodos.
     */
    distinct?: Prisma.ProfesorperiodoScalarFieldEnum | Prisma.ProfesorperiodoScalarFieldEnum[];
};
/**
 * profesorperiodo create
 */
export type profesorperiodoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profesorperiodo
     */
    select?: Prisma.profesorperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profesorperiodo
     */
    omit?: Prisma.profesorperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.profesorperiodoInclude<ExtArgs> | null;
    /**
     * The data needed to create a profesorperiodo.
     */
    data: Prisma.XOR<Prisma.profesorperiodoCreateInput, Prisma.profesorperiodoUncheckedCreateInput>;
};
/**
 * profesorperiodo createMany
 */
export type profesorperiodoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many profesorperiodos.
     */
    data: Prisma.profesorperiodoCreateManyInput | Prisma.profesorperiodoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * profesorperiodo update
 */
export type profesorperiodoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profesorperiodo
     */
    select?: Prisma.profesorperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profesorperiodo
     */
    omit?: Prisma.profesorperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.profesorperiodoInclude<ExtArgs> | null;
    /**
     * The data needed to update a profesorperiodo.
     */
    data: Prisma.XOR<Prisma.profesorperiodoUpdateInput, Prisma.profesorperiodoUncheckedUpdateInput>;
    /**
     * Choose, which profesorperiodo to update.
     */
    where: Prisma.profesorperiodoWhereUniqueInput;
};
/**
 * profesorperiodo updateMany
 */
export type profesorperiodoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update profesorperiodos.
     */
    data: Prisma.XOR<Prisma.profesorperiodoUpdateManyMutationInput, Prisma.profesorperiodoUncheckedUpdateManyInput>;
    /**
     * Filter which profesorperiodos to update
     */
    where?: Prisma.profesorperiodoWhereInput;
    /**
     * Limit how many profesorperiodos to update.
     */
    limit?: number;
};
/**
 * profesorperiodo upsert
 */
export type profesorperiodoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profesorperiodo
     */
    select?: Prisma.profesorperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profesorperiodo
     */
    omit?: Prisma.profesorperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.profesorperiodoInclude<ExtArgs> | null;
    /**
     * The filter to search for the profesorperiodo to update in case it exists.
     */
    where: Prisma.profesorperiodoWhereUniqueInput;
    /**
     * In case the profesorperiodo found by the `where` argument doesn't exist, create a new profesorperiodo with this data.
     */
    create: Prisma.XOR<Prisma.profesorperiodoCreateInput, Prisma.profesorperiodoUncheckedCreateInput>;
    /**
     * In case the profesorperiodo was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.profesorperiodoUpdateInput, Prisma.profesorperiodoUncheckedUpdateInput>;
};
/**
 * profesorperiodo delete
 */
export type profesorperiodoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profesorperiodo
     */
    select?: Prisma.profesorperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profesorperiodo
     */
    omit?: Prisma.profesorperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.profesorperiodoInclude<ExtArgs> | null;
    /**
     * Filter which profesorperiodo to delete.
     */
    where: Prisma.profesorperiodoWhereUniqueInput;
};
/**
 * profesorperiodo deleteMany
 */
export type profesorperiodoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which profesorperiodos to delete
     */
    where?: Prisma.profesorperiodoWhereInput;
    /**
     * Limit how many profesorperiodos to delete.
     */
    limit?: number;
};
/**
 * profesorperiodo without action
 */
export type profesorperiodoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profesorperiodo
     */
    select?: Prisma.profesorperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profesorperiodo
     */
    omit?: Prisma.profesorperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.profesorperiodoInclude<ExtArgs> | null;
};
//# sourceMappingURL=profesorperiodo.d.ts.map