import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model alumnoperiodo
 *
 */
export type alumnoperiodoModel = runtime.Types.Result.DefaultSelection<Prisma.$alumnoperiodoPayload>;
export type AggregateAlumnoperiodo = {
    _count: AlumnoperiodoCountAggregateOutputType | null;
    _min: AlumnoperiodoMinAggregateOutputType | null;
    _max: AlumnoperiodoMaxAggregateOutputType | null;
};
export type AlumnoperiodoMinAggregateOutputType = {
    id: string | null;
    alumnoId: string | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    motivoBaja: $Enums.alumno_motivoBaja | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AlumnoperiodoMaxAggregateOutputType = {
    id: string | null;
    alumnoId: string | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    motivoBaja: $Enums.alumno_motivoBaja | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AlumnoperiodoCountAggregateOutputType = {
    id: number;
    alumnoId: number;
    fechaInicio: number;
    fechaFin: number;
    motivoBaja: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AlumnoperiodoMinAggregateInputType = {
    id?: true;
    alumnoId?: true;
    fechaInicio?: true;
    fechaFin?: true;
    motivoBaja?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AlumnoperiodoMaxAggregateInputType = {
    id?: true;
    alumnoId?: true;
    fechaInicio?: true;
    fechaFin?: true;
    motivoBaja?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AlumnoperiodoCountAggregateInputType = {
    id?: true;
    alumnoId?: true;
    fechaInicio?: true;
    fechaFin?: true;
    motivoBaja?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AlumnoperiodoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which alumnoperiodo to aggregate.
     */
    where?: Prisma.alumnoperiodoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnoperiodos to fetch.
     */
    orderBy?: Prisma.alumnoperiodoOrderByWithRelationInput | Prisma.alumnoperiodoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.alumnoperiodoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnoperiodos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnoperiodos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned alumnoperiodos
    **/
    _count?: true | AlumnoperiodoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AlumnoperiodoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AlumnoperiodoMaxAggregateInputType;
};
export type GetAlumnoperiodoAggregateType<T extends AlumnoperiodoAggregateArgs> = {
    [P in keyof T & keyof AggregateAlumnoperiodo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAlumnoperiodo[P]> : Prisma.GetScalarType<T[P], AggregateAlumnoperiodo[P]>;
};
export type alumnoperiodoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.alumnoperiodoWhereInput;
    orderBy?: Prisma.alumnoperiodoOrderByWithAggregationInput | Prisma.alumnoperiodoOrderByWithAggregationInput[];
    by: Prisma.AlumnoperiodoScalarFieldEnum[] | Prisma.AlumnoperiodoScalarFieldEnum;
    having?: Prisma.alumnoperiodoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AlumnoperiodoCountAggregateInputType | true;
    _min?: AlumnoperiodoMinAggregateInputType;
    _max?: AlumnoperiodoMaxAggregateInputType;
};
export type AlumnoperiodoGroupByOutputType = {
    id: string;
    alumnoId: string;
    fechaInicio: Date;
    fechaFin: Date | null;
    motivoBaja: $Enums.alumno_motivoBaja | null;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AlumnoperiodoCountAggregateOutputType | null;
    _min: AlumnoperiodoMinAggregateOutputType | null;
    _max: AlumnoperiodoMaxAggregateOutputType | null;
};
export type GetAlumnoperiodoGroupByPayload<T extends alumnoperiodoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AlumnoperiodoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AlumnoperiodoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AlumnoperiodoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AlumnoperiodoGroupByOutputType[P]>;
}>>;
export type alumnoperiodoWhereInput = {
    AND?: Prisma.alumnoperiodoWhereInput | Prisma.alumnoperiodoWhereInput[];
    OR?: Prisma.alumnoperiodoWhereInput[];
    NOT?: Prisma.alumnoperiodoWhereInput | Prisma.alumnoperiodoWhereInput[];
    id?: Prisma.StringFilter<"alumnoperiodo"> | string;
    alumnoId?: Prisma.StringFilter<"alumnoperiodo"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"alumnoperiodo"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"alumnoperiodo"> | Date | string | null;
    motivoBaja?: Prisma.Enumalumno_motivoBajaNullableFilter<"alumnoperiodo"> | $Enums.alumno_motivoBaja | null;
    observaciones?: Prisma.StringNullableFilter<"alumnoperiodo"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"alumnoperiodo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"alumnoperiodo"> | Date | string;
    alumno?: Prisma.XOR<Prisma.AlumnoScalarRelationFilter, Prisma.alumnoWhereInput>;
};
export type alumnoperiodoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    alumnoId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    alumno?: Prisma.alumnoOrderByWithRelationInput;
    _relevance?: Prisma.alumnoperiodoOrderByRelevanceInput;
};
export type alumnoperiodoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.alumnoperiodoWhereInput | Prisma.alumnoperiodoWhereInput[];
    OR?: Prisma.alumnoperiodoWhereInput[];
    NOT?: Prisma.alumnoperiodoWhereInput | Prisma.alumnoperiodoWhereInput[];
    alumnoId?: Prisma.StringFilter<"alumnoperiodo"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"alumnoperiodo"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"alumnoperiodo"> | Date | string | null;
    motivoBaja?: Prisma.Enumalumno_motivoBajaNullableFilter<"alumnoperiodo"> | $Enums.alumno_motivoBaja | null;
    observaciones?: Prisma.StringNullableFilter<"alumnoperiodo"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"alumnoperiodo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"alumnoperiodo"> | Date | string;
    alumno?: Prisma.XOR<Prisma.AlumnoScalarRelationFilter, Prisma.alumnoWhereInput>;
}, "id">;
export type alumnoperiodoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    alumnoId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.alumnoperiodoCountOrderByAggregateInput;
    _max?: Prisma.alumnoperiodoMaxOrderByAggregateInput;
    _min?: Prisma.alumnoperiodoMinOrderByAggregateInput;
};
export type alumnoperiodoScalarWhereWithAggregatesInput = {
    AND?: Prisma.alumnoperiodoScalarWhereWithAggregatesInput | Prisma.alumnoperiodoScalarWhereWithAggregatesInput[];
    OR?: Prisma.alumnoperiodoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.alumnoperiodoScalarWhereWithAggregatesInput | Prisma.alumnoperiodoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"alumnoperiodo"> | string;
    alumnoId?: Prisma.StringWithAggregatesFilter<"alumnoperiodo"> | string;
    fechaInicio?: Prisma.DateTimeWithAggregatesFilter<"alumnoperiodo"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableWithAggregatesFilter<"alumnoperiodo"> | Date | string | null;
    motivoBaja?: Prisma.Enumalumno_motivoBajaNullableWithAggregatesFilter<"alumnoperiodo"> | $Enums.alumno_motivoBaja | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"alumnoperiodo"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"alumnoperiodo"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"alumnoperiodo"> | Date | string;
};
export type alumnoperiodoCreateInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.alumno_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno: Prisma.alumnoCreateNestedOneWithoutAlumnoperiodoInput;
};
export type alumnoperiodoUncheckedCreateInput = {
    id: string;
    alumnoId: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.alumno_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type alumnoperiodoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumalumno_motivoBajaFieldUpdateOperationsInput | $Enums.alumno_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUpdateOneRequiredWithoutAlumnoperiodoNestedInput;
};
export type alumnoperiodoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alumnoId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumalumno_motivoBajaFieldUpdateOperationsInput | $Enums.alumno_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type alumnoperiodoCreateManyInput = {
    id: string;
    alumnoId: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.alumno_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type alumnoperiodoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumalumno_motivoBajaFieldUpdateOperationsInput | $Enums.alumno_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type alumnoperiodoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alumnoId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumalumno_motivoBajaFieldUpdateOperationsInput | $Enums.alumno_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AlumnoperiodoListRelationFilter = {
    every?: Prisma.alumnoperiodoWhereInput;
    some?: Prisma.alumnoperiodoWhereInput;
    none?: Prisma.alumnoperiodoWhereInput;
};
export type alumnoperiodoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type alumnoperiodoOrderByRelevanceInput = {
    fields: Prisma.alumnoperiodoOrderByRelevanceFieldEnum | Prisma.alumnoperiodoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type alumnoperiodoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alumnoId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type alumnoperiodoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alumnoId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type alumnoperiodoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alumnoId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type alumnoperiodoCreateNestedManyWithoutAlumnoInput = {
    create?: Prisma.XOR<Prisma.alumnoperiodoCreateWithoutAlumnoInput, Prisma.alumnoperiodoUncheckedCreateWithoutAlumnoInput> | Prisma.alumnoperiodoCreateWithoutAlumnoInput[] | Prisma.alumnoperiodoUncheckedCreateWithoutAlumnoInput[];
    connectOrCreate?: Prisma.alumnoperiodoCreateOrConnectWithoutAlumnoInput | Prisma.alumnoperiodoCreateOrConnectWithoutAlumnoInput[];
    createMany?: Prisma.alumnoperiodoCreateManyAlumnoInputEnvelope;
    connect?: Prisma.alumnoperiodoWhereUniqueInput | Prisma.alumnoperiodoWhereUniqueInput[];
};
export type alumnoperiodoUncheckedCreateNestedManyWithoutAlumnoInput = {
    create?: Prisma.XOR<Prisma.alumnoperiodoCreateWithoutAlumnoInput, Prisma.alumnoperiodoUncheckedCreateWithoutAlumnoInput> | Prisma.alumnoperiodoCreateWithoutAlumnoInput[] | Prisma.alumnoperiodoUncheckedCreateWithoutAlumnoInput[];
    connectOrCreate?: Prisma.alumnoperiodoCreateOrConnectWithoutAlumnoInput | Prisma.alumnoperiodoCreateOrConnectWithoutAlumnoInput[];
    createMany?: Prisma.alumnoperiodoCreateManyAlumnoInputEnvelope;
    connect?: Prisma.alumnoperiodoWhereUniqueInput | Prisma.alumnoperiodoWhereUniqueInput[];
};
export type alumnoperiodoUpdateManyWithoutAlumnoNestedInput = {
    create?: Prisma.XOR<Prisma.alumnoperiodoCreateWithoutAlumnoInput, Prisma.alumnoperiodoUncheckedCreateWithoutAlumnoInput> | Prisma.alumnoperiodoCreateWithoutAlumnoInput[] | Prisma.alumnoperiodoUncheckedCreateWithoutAlumnoInput[];
    connectOrCreate?: Prisma.alumnoperiodoCreateOrConnectWithoutAlumnoInput | Prisma.alumnoperiodoCreateOrConnectWithoutAlumnoInput[];
    upsert?: Prisma.alumnoperiodoUpsertWithWhereUniqueWithoutAlumnoInput | Prisma.alumnoperiodoUpsertWithWhereUniqueWithoutAlumnoInput[];
    createMany?: Prisma.alumnoperiodoCreateManyAlumnoInputEnvelope;
    set?: Prisma.alumnoperiodoWhereUniqueInput | Prisma.alumnoperiodoWhereUniqueInput[];
    disconnect?: Prisma.alumnoperiodoWhereUniqueInput | Prisma.alumnoperiodoWhereUniqueInput[];
    delete?: Prisma.alumnoperiodoWhereUniqueInput | Prisma.alumnoperiodoWhereUniqueInput[];
    connect?: Prisma.alumnoperiodoWhereUniqueInput | Prisma.alumnoperiodoWhereUniqueInput[];
    update?: Prisma.alumnoperiodoUpdateWithWhereUniqueWithoutAlumnoInput | Prisma.alumnoperiodoUpdateWithWhereUniqueWithoutAlumnoInput[];
    updateMany?: Prisma.alumnoperiodoUpdateManyWithWhereWithoutAlumnoInput | Prisma.alumnoperiodoUpdateManyWithWhereWithoutAlumnoInput[];
    deleteMany?: Prisma.alumnoperiodoScalarWhereInput | Prisma.alumnoperiodoScalarWhereInput[];
};
export type alumnoperiodoUncheckedUpdateManyWithoutAlumnoNestedInput = {
    create?: Prisma.XOR<Prisma.alumnoperiodoCreateWithoutAlumnoInput, Prisma.alumnoperiodoUncheckedCreateWithoutAlumnoInput> | Prisma.alumnoperiodoCreateWithoutAlumnoInput[] | Prisma.alumnoperiodoUncheckedCreateWithoutAlumnoInput[];
    connectOrCreate?: Prisma.alumnoperiodoCreateOrConnectWithoutAlumnoInput | Prisma.alumnoperiodoCreateOrConnectWithoutAlumnoInput[];
    upsert?: Prisma.alumnoperiodoUpsertWithWhereUniqueWithoutAlumnoInput | Prisma.alumnoperiodoUpsertWithWhereUniqueWithoutAlumnoInput[];
    createMany?: Prisma.alumnoperiodoCreateManyAlumnoInputEnvelope;
    set?: Prisma.alumnoperiodoWhereUniqueInput | Prisma.alumnoperiodoWhereUniqueInput[];
    disconnect?: Prisma.alumnoperiodoWhereUniqueInput | Prisma.alumnoperiodoWhereUniqueInput[];
    delete?: Prisma.alumnoperiodoWhereUniqueInput | Prisma.alumnoperiodoWhereUniqueInput[];
    connect?: Prisma.alumnoperiodoWhereUniqueInput | Prisma.alumnoperiodoWhereUniqueInput[];
    update?: Prisma.alumnoperiodoUpdateWithWhereUniqueWithoutAlumnoInput | Prisma.alumnoperiodoUpdateWithWhereUniqueWithoutAlumnoInput[];
    updateMany?: Prisma.alumnoperiodoUpdateManyWithWhereWithoutAlumnoInput | Prisma.alumnoperiodoUpdateManyWithWhereWithoutAlumnoInput[];
    deleteMany?: Prisma.alumnoperiodoScalarWhereInput | Prisma.alumnoperiodoScalarWhereInput[];
};
export type alumnoperiodoCreateWithoutAlumnoInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.alumno_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type alumnoperiodoUncheckedCreateWithoutAlumnoInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.alumno_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type alumnoperiodoCreateOrConnectWithoutAlumnoInput = {
    where: Prisma.alumnoperiodoWhereUniqueInput;
    create: Prisma.XOR<Prisma.alumnoperiodoCreateWithoutAlumnoInput, Prisma.alumnoperiodoUncheckedCreateWithoutAlumnoInput>;
};
export type alumnoperiodoCreateManyAlumnoInputEnvelope = {
    data: Prisma.alumnoperiodoCreateManyAlumnoInput | Prisma.alumnoperiodoCreateManyAlumnoInput[];
    skipDuplicates?: boolean;
};
export type alumnoperiodoUpsertWithWhereUniqueWithoutAlumnoInput = {
    where: Prisma.alumnoperiodoWhereUniqueInput;
    update: Prisma.XOR<Prisma.alumnoperiodoUpdateWithoutAlumnoInput, Prisma.alumnoperiodoUncheckedUpdateWithoutAlumnoInput>;
    create: Prisma.XOR<Prisma.alumnoperiodoCreateWithoutAlumnoInput, Prisma.alumnoperiodoUncheckedCreateWithoutAlumnoInput>;
};
export type alumnoperiodoUpdateWithWhereUniqueWithoutAlumnoInput = {
    where: Prisma.alumnoperiodoWhereUniqueInput;
    data: Prisma.XOR<Prisma.alumnoperiodoUpdateWithoutAlumnoInput, Prisma.alumnoperiodoUncheckedUpdateWithoutAlumnoInput>;
};
export type alumnoperiodoUpdateManyWithWhereWithoutAlumnoInput = {
    where: Prisma.alumnoperiodoScalarWhereInput;
    data: Prisma.XOR<Prisma.alumnoperiodoUpdateManyMutationInput, Prisma.alumnoperiodoUncheckedUpdateManyWithoutAlumnoInput>;
};
export type alumnoperiodoScalarWhereInput = {
    AND?: Prisma.alumnoperiodoScalarWhereInput | Prisma.alumnoperiodoScalarWhereInput[];
    OR?: Prisma.alumnoperiodoScalarWhereInput[];
    NOT?: Prisma.alumnoperiodoScalarWhereInput | Prisma.alumnoperiodoScalarWhereInput[];
    id?: Prisma.StringFilter<"alumnoperiodo"> | string;
    alumnoId?: Prisma.StringFilter<"alumnoperiodo"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"alumnoperiodo"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"alumnoperiodo"> | Date | string | null;
    motivoBaja?: Prisma.Enumalumno_motivoBajaNullableFilter<"alumnoperiodo"> | $Enums.alumno_motivoBaja | null;
    observaciones?: Prisma.StringNullableFilter<"alumnoperiodo"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"alumnoperiodo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"alumnoperiodo"> | Date | string;
};
export type alumnoperiodoCreateManyAlumnoInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    motivoBaja?: $Enums.alumno_motivoBaja | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type alumnoperiodoUpdateWithoutAlumnoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumalumno_motivoBajaFieldUpdateOperationsInput | $Enums.alumno_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type alumnoperiodoUncheckedUpdateWithoutAlumnoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumalumno_motivoBajaFieldUpdateOperationsInput | $Enums.alumno_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type alumnoperiodoUncheckedUpdateManyWithoutAlumnoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumalumno_motivoBajaFieldUpdateOperationsInput | $Enums.alumno_motivoBaja | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type alumnoperiodoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    alumnoId?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    motivoBaja?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    alumno?: boolean | Prisma.alumnoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["alumnoperiodo"]>;
export type alumnoperiodoSelectScalar = {
    id?: boolean;
    alumnoId?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    motivoBaja?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type alumnoperiodoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "alumnoId" | "fechaInicio" | "fechaFin" | "motivoBaja" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["alumnoperiodo"]>;
export type alumnoperiodoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    alumno?: boolean | Prisma.alumnoDefaultArgs<ExtArgs>;
};
export type $alumnoperiodoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "alumnoperiodo";
    objects: {
        alumno: Prisma.$alumnoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        alumnoId: string;
        fechaInicio: Date;
        fechaFin: Date | null;
        motivoBaja: $Enums.alumno_motivoBaja | null;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["alumnoperiodo"]>;
    composites: {};
};
export type alumnoperiodoGetPayload<S extends boolean | null | undefined | alumnoperiodoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$alumnoperiodoPayload, S>;
export type alumnoperiodoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<alumnoperiodoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AlumnoperiodoCountAggregateInputType | true;
};
export interface alumnoperiodoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['alumnoperiodo'];
        meta: {
            name: 'alumnoperiodo';
        };
    };
    /**
     * Find zero or one Alumnoperiodo that matches the filter.
     * @param {alumnoperiodoFindUniqueArgs} args - Arguments to find a Alumnoperiodo
     * @example
     * // Get one Alumnoperiodo
     * const alumnoperiodo = await prisma.alumnoperiodo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alumnoperiodoFindUniqueArgs>(args: Prisma.SelectSubset<T, alumnoperiodoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__alumnoperiodoClient<runtime.Types.Result.GetResult<Prisma.$alumnoperiodoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Alumnoperiodo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alumnoperiodoFindUniqueOrThrowArgs} args - Arguments to find a Alumnoperiodo
     * @example
     * // Get one Alumnoperiodo
     * const alumnoperiodo = await prisma.alumnoperiodo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alumnoperiodoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, alumnoperiodoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__alumnoperiodoClient<runtime.Types.Result.GetResult<Prisma.$alumnoperiodoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Alumnoperiodo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnoperiodoFindFirstArgs} args - Arguments to find a Alumnoperiodo
     * @example
     * // Get one Alumnoperiodo
     * const alumnoperiodo = await prisma.alumnoperiodo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alumnoperiodoFindFirstArgs>(args?: Prisma.SelectSubset<T, alumnoperiodoFindFirstArgs<ExtArgs>>): Prisma.Prisma__alumnoperiodoClient<runtime.Types.Result.GetResult<Prisma.$alumnoperiodoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Alumnoperiodo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnoperiodoFindFirstOrThrowArgs} args - Arguments to find a Alumnoperiodo
     * @example
     * // Get one Alumnoperiodo
     * const alumnoperiodo = await prisma.alumnoperiodo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alumnoperiodoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, alumnoperiodoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__alumnoperiodoClient<runtime.Types.Result.GetResult<Prisma.$alumnoperiodoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Alumnoperiodos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnoperiodoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alumnoperiodos
     * const alumnoperiodos = await prisma.alumnoperiodo.findMany()
     *
     * // Get first 10 Alumnoperiodos
     * const alumnoperiodos = await prisma.alumnoperiodo.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const alumnoperiodoWithIdOnly = await prisma.alumnoperiodo.findMany({ select: { id: true } })
     *
     */
    findMany<T extends alumnoperiodoFindManyArgs>(args?: Prisma.SelectSubset<T, alumnoperiodoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$alumnoperiodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Alumnoperiodo.
     * @param {alumnoperiodoCreateArgs} args - Arguments to create a Alumnoperiodo.
     * @example
     * // Create one Alumnoperiodo
     * const Alumnoperiodo = await prisma.alumnoperiodo.create({
     *   data: {
     *     // ... data to create a Alumnoperiodo
     *   }
     * })
     *
     */
    create<T extends alumnoperiodoCreateArgs>(args: Prisma.SelectSubset<T, alumnoperiodoCreateArgs<ExtArgs>>): Prisma.Prisma__alumnoperiodoClient<runtime.Types.Result.GetResult<Prisma.$alumnoperiodoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Alumnoperiodos.
     * @param {alumnoperiodoCreateManyArgs} args - Arguments to create many Alumnoperiodos.
     * @example
     * // Create many Alumnoperiodos
     * const alumnoperiodo = await prisma.alumnoperiodo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends alumnoperiodoCreateManyArgs>(args?: Prisma.SelectSubset<T, alumnoperiodoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Alumnoperiodo.
     * @param {alumnoperiodoDeleteArgs} args - Arguments to delete one Alumnoperiodo.
     * @example
     * // Delete one Alumnoperiodo
     * const Alumnoperiodo = await prisma.alumnoperiodo.delete({
     *   where: {
     *     // ... filter to delete one Alumnoperiodo
     *   }
     * })
     *
     */
    delete<T extends alumnoperiodoDeleteArgs>(args: Prisma.SelectSubset<T, alumnoperiodoDeleteArgs<ExtArgs>>): Prisma.Prisma__alumnoperiodoClient<runtime.Types.Result.GetResult<Prisma.$alumnoperiodoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Alumnoperiodo.
     * @param {alumnoperiodoUpdateArgs} args - Arguments to update one Alumnoperiodo.
     * @example
     * // Update one Alumnoperiodo
     * const alumnoperiodo = await prisma.alumnoperiodo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends alumnoperiodoUpdateArgs>(args: Prisma.SelectSubset<T, alumnoperiodoUpdateArgs<ExtArgs>>): Prisma.Prisma__alumnoperiodoClient<runtime.Types.Result.GetResult<Prisma.$alumnoperiodoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Alumnoperiodos.
     * @param {alumnoperiodoDeleteManyArgs} args - Arguments to filter Alumnoperiodos to delete.
     * @example
     * // Delete a few Alumnoperiodos
     * const { count } = await prisma.alumnoperiodo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends alumnoperiodoDeleteManyArgs>(args?: Prisma.SelectSubset<T, alumnoperiodoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Alumnoperiodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnoperiodoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alumnoperiodos
     * const alumnoperiodo = await prisma.alumnoperiodo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends alumnoperiodoUpdateManyArgs>(args: Prisma.SelectSubset<T, alumnoperiodoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Alumnoperiodo.
     * @param {alumnoperiodoUpsertArgs} args - Arguments to update or create a Alumnoperiodo.
     * @example
     * // Update or create a Alumnoperiodo
     * const alumnoperiodo = await prisma.alumnoperiodo.upsert({
     *   create: {
     *     // ... data to create a Alumnoperiodo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alumnoperiodo we want to update
     *   }
     * })
     */
    upsert<T extends alumnoperiodoUpsertArgs>(args: Prisma.SelectSubset<T, alumnoperiodoUpsertArgs<ExtArgs>>): Prisma.Prisma__alumnoperiodoClient<runtime.Types.Result.GetResult<Prisma.$alumnoperiodoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Alumnoperiodos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnoperiodoCountArgs} args - Arguments to filter Alumnoperiodos to count.
     * @example
     * // Count the number of Alumnoperiodos
     * const count = await prisma.alumnoperiodo.count({
     *   where: {
     *     // ... the filter for the Alumnoperiodos we want to count
     *   }
     * })
    **/
    count<T extends alumnoperiodoCountArgs>(args?: Prisma.Subset<T, alumnoperiodoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AlumnoperiodoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Alumnoperiodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoperiodoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlumnoperiodoAggregateArgs>(args: Prisma.Subset<T, AlumnoperiodoAggregateArgs>): Prisma.PrismaPromise<GetAlumnoperiodoAggregateType<T>>;
    /**
     * Group by Alumnoperiodo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnoperiodoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends alumnoperiodoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: alumnoperiodoGroupByArgs['orderBy'];
    } : {
        orderBy?: alumnoperiodoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, alumnoperiodoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlumnoperiodoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the alumnoperiodo model
     */
    readonly fields: alumnoperiodoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for alumnoperiodo.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__alumnoperiodoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    alumno<T extends Prisma.alumnoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.alumnoDefaultArgs<ExtArgs>>): Prisma.Prisma__alumnoClient<runtime.Types.Result.GetResult<Prisma.$alumnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the alumnoperiodo model
 */
export interface alumnoperiodoFieldRefs {
    readonly id: Prisma.FieldRef<"alumnoperiodo", 'String'>;
    readonly alumnoId: Prisma.FieldRef<"alumnoperiodo", 'String'>;
    readonly fechaInicio: Prisma.FieldRef<"alumnoperiodo", 'DateTime'>;
    readonly fechaFin: Prisma.FieldRef<"alumnoperiodo", 'DateTime'>;
    readonly motivoBaja: Prisma.FieldRef<"alumnoperiodo", 'alumno_motivoBaja'>;
    readonly observaciones: Prisma.FieldRef<"alumnoperiodo", 'String'>;
    readonly createdAt: Prisma.FieldRef<"alumnoperiodo", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"alumnoperiodo", 'DateTime'>;
}
/**
 * alumnoperiodo findUnique
 */
export type alumnoperiodoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnoperiodo
     */
    select?: Prisma.alumnoperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnoperiodo
     */
    omit?: Prisma.alumnoperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.alumnoperiodoInclude<ExtArgs> | null;
    /**
     * Filter, which alumnoperiodo to fetch.
     */
    where: Prisma.alumnoperiodoWhereUniqueInput;
};
/**
 * alumnoperiodo findUniqueOrThrow
 */
export type alumnoperiodoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnoperiodo
     */
    select?: Prisma.alumnoperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnoperiodo
     */
    omit?: Prisma.alumnoperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.alumnoperiodoInclude<ExtArgs> | null;
    /**
     * Filter, which alumnoperiodo to fetch.
     */
    where: Prisma.alumnoperiodoWhereUniqueInput;
};
/**
 * alumnoperiodo findFirst
 */
export type alumnoperiodoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnoperiodo
     */
    select?: Prisma.alumnoperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnoperiodo
     */
    omit?: Prisma.alumnoperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.alumnoperiodoInclude<ExtArgs> | null;
    /**
     * Filter, which alumnoperiodo to fetch.
     */
    where?: Prisma.alumnoperiodoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnoperiodos to fetch.
     */
    orderBy?: Prisma.alumnoperiodoOrderByWithRelationInput | Prisma.alumnoperiodoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for alumnoperiodos.
     */
    cursor?: Prisma.alumnoperiodoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnoperiodos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnoperiodos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of alumnoperiodos.
     */
    distinct?: Prisma.AlumnoperiodoScalarFieldEnum | Prisma.AlumnoperiodoScalarFieldEnum[];
};
/**
 * alumnoperiodo findFirstOrThrow
 */
export type alumnoperiodoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnoperiodo
     */
    select?: Prisma.alumnoperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnoperiodo
     */
    omit?: Prisma.alumnoperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.alumnoperiodoInclude<ExtArgs> | null;
    /**
     * Filter, which alumnoperiodo to fetch.
     */
    where?: Prisma.alumnoperiodoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnoperiodos to fetch.
     */
    orderBy?: Prisma.alumnoperiodoOrderByWithRelationInput | Prisma.alumnoperiodoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for alumnoperiodos.
     */
    cursor?: Prisma.alumnoperiodoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnoperiodos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnoperiodos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of alumnoperiodos.
     */
    distinct?: Prisma.AlumnoperiodoScalarFieldEnum | Prisma.AlumnoperiodoScalarFieldEnum[];
};
/**
 * alumnoperiodo findMany
 */
export type alumnoperiodoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnoperiodo
     */
    select?: Prisma.alumnoperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnoperiodo
     */
    omit?: Prisma.alumnoperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.alumnoperiodoInclude<ExtArgs> | null;
    /**
     * Filter, which alumnoperiodos to fetch.
     */
    where?: Prisma.alumnoperiodoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnoperiodos to fetch.
     */
    orderBy?: Prisma.alumnoperiodoOrderByWithRelationInput | Prisma.alumnoperiodoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing alumnoperiodos.
     */
    cursor?: Prisma.alumnoperiodoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnoperiodos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnoperiodos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of alumnoperiodos.
     */
    distinct?: Prisma.AlumnoperiodoScalarFieldEnum | Prisma.AlumnoperiodoScalarFieldEnum[];
};
/**
 * alumnoperiodo create
 */
export type alumnoperiodoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnoperiodo
     */
    select?: Prisma.alumnoperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnoperiodo
     */
    omit?: Prisma.alumnoperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.alumnoperiodoInclude<ExtArgs> | null;
    /**
     * The data needed to create a alumnoperiodo.
     */
    data: Prisma.XOR<Prisma.alumnoperiodoCreateInput, Prisma.alumnoperiodoUncheckedCreateInput>;
};
/**
 * alumnoperiodo createMany
 */
export type alumnoperiodoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many alumnoperiodos.
     */
    data: Prisma.alumnoperiodoCreateManyInput | Prisma.alumnoperiodoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * alumnoperiodo update
 */
export type alumnoperiodoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnoperiodo
     */
    select?: Prisma.alumnoperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnoperiodo
     */
    omit?: Prisma.alumnoperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.alumnoperiodoInclude<ExtArgs> | null;
    /**
     * The data needed to update a alumnoperiodo.
     */
    data: Prisma.XOR<Prisma.alumnoperiodoUpdateInput, Prisma.alumnoperiodoUncheckedUpdateInput>;
    /**
     * Choose, which alumnoperiodo to update.
     */
    where: Prisma.alumnoperiodoWhereUniqueInput;
};
/**
 * alumnoperiodo updateMany
 */
export type alumnoperiodoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update alumnoperiodos.
     */
    data: Prisma.XOR<Prisma.alumnoperiodoUpdateManyMutationInput, Prisma.alumnoperiodoUncheckedUpdateManyInput>;
    /**
     * Filter which alumnoperiodos to update
     */
    where?: Prisma.alumnoperiodoWhereInput;
    /**
     * Limit how many alumnoperiodos to update.
     */
    limit?: number;
};
/**
 * alumnoperiodo upsert
 */
export type alumnoperiodoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnoperiodo
     */
    select?: Prisma.alumnoperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnoperiodo
     */
    omit?: Prisma.alumnoperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.alumnoperiodoInclude<ExtArgs> | null;
    /**
     * The filter to search for the alumnoperiodo to update in case it exists.
     */
    where: Prisma.alumnoperiodoWhereUniqueInput;
    /**
     * In case the alumnoperiodo found by the `where` argument doesn't exist, create a new alumnoperiodo with this data.
     */
    create: Prisma.XOR<Prisma.alumnoperiodoCreateInput, Prisma.alumnoperiodoUncheckedCreateInput>;
    /**
     * In case the alumnoperiodo was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.alumnoperiodoUpdateInput, Prisma.alumnoperiodoUncheckedUpdateInput>;
};
/**
 * alumnoperiodo delete
 */
export type alumnoperiodoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnoperiodo
     */
    select?: Prisma.alumnoperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnoperiodo
     */
    omit?: Prisma.alumnoperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.alumnoperiodoInclude<ExtArgs> | null;
    /**
     * Filter which alumnoperiodo to delete.
     */
    where: Prisma.alumnoperiodoWhereUniqueInput;
};
/**
 * alumnoperiodo deleteMany
 */
export type alumnoperiodoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which alumnoperiodos to delete
     */
    where?: Prisma.alumnoperiodoWhereInput;
    /**
     * Limit how many alumnoperiodos to delete.
     */
    limit?: number;
};
/**
 * alumnoperiodo without action
 */
export type alumnoperiodoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnoperiodo
     */
    select?: Prisma.alumnoperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnoperiodo
     */
    omit?: Prisma.alumnoperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.alumnoperiodoInclude<ExtArgs> | null;
};
//# sourceMappingURL=alumnoperiodo.d.ts.map