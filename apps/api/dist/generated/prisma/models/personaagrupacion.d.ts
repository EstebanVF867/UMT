import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model personaagrupacion
 *
 */
export type personaagrupacionModel = runtime.Types.Result.DefaultSelection<Prisma.$personaagrupacionPayload>;
export type AggregatePersonaagrupacion = {
    _count: PersonaagrupacionCountAggregateOutputType | null;
    _min: PersonaagrupacionMinAggregateOutputType | null;
    _max: PersonaagrupacionMaxAggregateOutputType | null;
};
export type PersonaagrupacionMinAggregateOutputType = {
    id: string | null;
    personaId: string | null;
    agrupacionId: string | null;
    fechaAlta: Date | null;
    fechaBaja: Date | null;
    activo: boolean | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PersonaagrupacionMaxAggregateOutputType = {
    id: string | null;
    personaId: string | null;
    agrupacionId: string | null;
    fechaAlta: Date | null;
    fechaBaja: Date | null;
    activo: boolean | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PersonaagrupacionCountAggregateOutputType = {
    id: number;
    personaId: number;
    agrupacionId: number;
    fechaAlta: number;
    fechaBaja: number;
    activo: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PersonaagrupacionMinAggregateInputType = {
    id?: true;
    personaId?: true;
    agrupacionId?: true;
    fechaAlta?: true;
    fechaBaja?: true;
    activo?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PersonaagrupacionMaxAggregateInputType = {
    id?: true;
    personaId?: true;
    agrupacionId?: true;
    fechaAlta?: true;
    fechaBaja?: true;
    activo?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PersonaagrupacionCountAggregateInputType = {
    id?: true;
    personaId?: true;
    agrupacionId?: true;
    fechaAlta?: true;
    fechaBaja?: true;
    activo?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PersonaagrupacionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which personaagrupacion to aggregate.
     */
    where?: Prisma.personaagrupacionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of personaagrupacions to fetch.
     */
    orderBy?: Prisma.personaagrupacionOrderByWithRelationInput | Prisma.personaagrupacionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.personaagrupacionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` personaagrupacions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` personaagrupacions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned personaagrupacions
    **/
    _count?: true | PersonaagrupacionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PersonaagrupacionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PersonaagrupacionMaxAggregateInputType;
};
export type GetPersonaagrupacionAggregateType<T extends PersonaagrupacionAggregateArgs> = {
    [P in keyof T & keyof AggregatePersonaagrupacion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePersonaagrupacion[P]> : Prisma.GetScalarType<T[P], AggregatePersonaagrupacion[P]>;
};
export type personaagrupacionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.personaagrupacionWhereInput;
    orderBy?: Prisma.personaagrupacionOrderByWithAggregationInput | Prisma.personaagrupacionOrderByWithAggregationInput[];
    by: Prisma.PersonaagrupacionScalarFieldEnum[] | Prisma.PersonaagrupacionScalarFieldEnum;
    having?: Prisma.personaagrupacionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PersonaagrupacionCountAggregateInputType | true;
    _min?: PersonaagrupacionMinAggregateInputType;
    _max?: PersonaagrupacionMaxAggregateInputType;
};
export type PersonaagrupacionGroupByOutputType = {
    id: string;
    personaId: string;
    agrupacionId: string;
    fechaAlta: Date;
    fechaBaja: Date | null;
    activo: boolean;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PersonaagrupacionCountAggregateOutputType | null;
    _min: PersonaagrupacionMinAggregateOutputType | null;
    _max: PersonaagrupacionMaxAggregateOutputType | null;
};
export type GetPersonaagrupacionGroupByPayload<T extends personaagrupacionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PersonaagrupacionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PersonaagrupacionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PersonaagrupacionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PersonaagrupacionGroupByOutputType[P]>;
}>>;
export type personaagrupacionWhereInput = {
    AND?: Prisma.personaagrupacionWhereInput | Prisma.personaagrupacionWhereInput[];
    OR?: Prisma.personaagrupacionWhereInput[];
    NOT?: Prisma.personaagrupacionWhereInput | Prisma.personaagrupacionWhereInput[];
    id?: Prisma.StringFilter<"personaagrupacion"> | string;
    personaId?: Prisma.StringFilter<"personaagrupacion"> | string;
    agrupacionId?: Prisma.StringFilter<"personaagrupacion"> | string;
    fechaAlta?: Prisma.DateTimeFilter<"personaagrupacion"> | Date | string;
    fechaBaja?: Prisma.DateTimeNullableFilter<"personaagrupacion"> | Date | string | null;
    activo?: Prisma.BoolFilter<"personaagrupacion"> | boolean;
    observaciones?: Prisma.StringNullableFilter<"personaagrupacion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"personaagrupacion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"personaagrupacion"> | Date | string;
    agrupacion?: Prisma.XOR<Prisma.AgrupacionScalarRelationFilter, Prisma.agrupacionWhereInput>;
    persona?: Prisma.XOR<Prisma.PersonaScalarRelationFilter, Prisma.personaWhereInput>;
};
export type personaagrupacionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    agrupacionId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    agrupacion?: Prisma.agrupacionOrderByWithRelationInput;
    persona?: Prisma.personaOrderByWithRelationInput;
    _relevance?: Prisma.personaagrupacionOrderByRelevanceInput;
};
export type personaagrupacionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.personaagrupacionWhereInput | Prisma.personaagrupacionWhereInput[];
    OR?: Prisma.personaagrupacionWhereInput[];
    NOT?: Prisma.personaagrupacionWhereInput | Prisma.personaagrupacionWhereInput[];
    personaId?: Prisma.StringFilter<"personaagrupacion"> | string;
    agrupacionId?: Prisma.StringFilter<"personaagrupacion"> | string;
    fechaAlta?: Prisma.DateTimeFilter<"personaagrupacion"> | Date | string;
    fechaBaja?: Prisma.DateTimeNullableFilter<"personaagrupacion"> | Date | string | null;
    activo?: Prisma.BoolFilter<"personaagrupacion"> | boolean;
    observaciones?: Prisma.StringNullableFilter<"personaagrupacion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"personaagrupacion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"personaagrupacion"> | Date | string;
    agrupacion?: Prisma.XOR<Prisma.AgrupacionScalarRelationFilter, Prisma.agrupacionWhereInput>;
    persona?: Prisma.XOR<Prisma.PersonaScalarRelationFilter, Prisma.personaWhereInput>;
}, "id">;
export type personaagrupacionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    agrupacionId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.personaagrupacionCountOrderByAggregateInput;
    _max?: Prisma.personaagrupacionMaxOrderByAggregateInput;
    _min?: Prisma.personaagrupacionMinOrderByAggregateInput;
};
export type personaagrupacionScalarWhereWithAggregatesInput = {
    AND?: Prisma.personaagrupacionScalarWhereWithAggregatesInput | Prisma.personaagrupacionScalarWhereWithAggregatesInput[];
    OR?: Prisma.personaagrupacionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.personaagrupacionScalarWhereWithAggregatesInput | Prisma.personaagrupacionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"personaagrupacion"> | string;
    personaId?: Prisma.StringWithAggregatesFilter<"personaagrupacion"> | string;
    agrupacionId?: Prisma.StringWithAggregatesFilter<"personaagrupacion"> | string;
    fechaAlta?: Prisma.DateTimeWithAggregatesFilter<"personaagrupacion"> | Date | string;
    fechaBaja?: Prisma.DateTimeNullableWithAggregatesFilter<"personaagrupacion"> | Date | string | null;
    activo?: Prisma.BoolWithAggregatesFilter<"personaagrupacion"> | boolean;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"personaagrupacion"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"personaagrupacion"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"personaagrupacion"> | Date | string;
};
export type personaagrupacionCreateInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    agrupacion: Prisma.agrupacionCreateNestedOneWithoutPersonaagrupacionInput;
    persona: Prisma.personaCreateNestedOneWithoutPersonaagrupacionInput;
};
export type personaagrupacionUncheckedCreateInput = {
    id: string;
    personaId: string;
    agrupacionId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type personaagrupacionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    agrupacion?: Prisma.agrupacionUpdateOneRequiredWithoutPersonaagrupacionNestedInput;
    persona?: Prisma.personaUpdateOneRequiredWithoutPersonaagrupacionNestedInput;
};
export type personaagrupacionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    agrupacionId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type personaagrupacionCreateManyInput = {
    id: string;
    personaId: string;
    agrupacionId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type personaagrupacionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type personaagrupacionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    agrupacionId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PersonaagrupacionListRelationFilter = {
    every?: Prisma.personaagrupacionWhereInput;
    some?: Prisma.personaagrupacionWhereInput;
    none?: Prisma.personaagrupacionWhereInput;
};
export type personaagrupacionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type personaagrupacionOrderByRelevanceInput = {
    fields: Prisma.personaagrupacionOrderByRelevanceFieldEnum | Prisma.personaagrupacionOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type personaagrupacionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    agrupacionId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type personaagrupacionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    agrupacionId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type personaagrupacionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    agrupacionId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type personaagrupacionCreateNestedManyWithoutAgrupacionInput = {
    create?: Prisma.XOR<Prisma.personaagrupacionCreateWithoutAgrupacionInput, Prisma.personaagrupacionUncheckedCreateWithoutAgrupacionInput> | Prisma.personaagrupacionCreateWithoutAgrupacionInput[] | Prisma.personaagrupacionUncheckedCreateWithoutAgrupacionInput[];
    connectOrCreate?: Prisma.personaagrupacionCreateOrConnectWithoutAgrupacionInput | Prisma.personaagrupacionCreateOrConnectWithoutAgrupacionInput[];
    createMany?: Prisma.personaagrupacionCreateManyAgrupacionInputEnvelope;
    connect?: Prisma.personaagrupacionWhereUniqueInput | Prisma.personaagrupacionWhereUniqueInput[];
};
export type personaagrupacionUncheckedCreateNestedManyWithoutAgrupacionInput = {
    create?: Prisma.XOR<Prisma.personaagrupacionCreateWithoutAgrupacionInput, Prisma.personaagrupacionUncheckedCreateWithoutAgrupacionInput> | Prisma.personaagrupacionCreateWithoutAgrupacionInput[] | Prisma.personaagrupacionUncheckedCreateWithoutAgrupacionInput[];
    connectOrCreate?: Prisma.personaagrupacionCreateOrConnectWithoutAgrupacionInput | Prisma.personaagrupacionCreateOrConnectWithoutAgrupacionInput[];
    createMany?: Prisma.personaagrupacionCreateManyAgrupacionInputEnvelope;
    connect?: Prisma.personaagrupacionWhereUniqueInput | Prisma.personaagrupacionWhereUniqueInput[];
};
export type personaagrupacionUpdateManyWithoutAgrupacionNestedInput = {
    create?: Prisma.XOR<Prisma.personaagrupacionCreateWithoutAgrupacionInput, Prisma.personaagrupacionUncheckedCreateWithoutAgrupacionInput> | Prisma.personaagrupacionCreateWithoutAgrupacionInput[] | Prisma.personaagrupacionUncheckedCreateWithoutAgrupacionInput[];
    connectOrCreate?: Prisma.personaagrupacionCreateOrConnectWithoutAgrupacionInput | Prisma.personaagrupacionCreateOrConnectWithoutAgrupacionInput[];
    upsert?: Prisma.personaagrupacionUpsertWithWhereUniqueWithoutAgrupacionInput | Prisma.personaagrupacionUpsertWithWhereUniqueWithoutAgrupacionInput[];
    createMany?: Prisma.personaagrupacionCreateManyAgrupacionInputEnvelope;
    set?: Prisma.personaagrupacionWhereUniqueInput | Prisma.personaagrupacionWhereUniqueInput[];
    disconnect?: Prisma.personaagrupacionWhereUniqueInput | Prisma.personaagrupacionWhereUniqueInput[];
    delete?: Prisma.personaagrupacionWhereUniqueInput | Prisma.personaagrupacionWhereUniqueInput[];
    connect?: Prisma.personaagrupacionWhereUniqueInput | Prisma.personaagrupacionWhereUniqueInput[];
    update?: Prisma.personaagrupacionUpdateWithWhereUniqueWithoutAgrupacionInput | Prisma.personaagrupacionUpdateWithWhereUniqueWithoutAgrupacionInput[];
    updateMany?: Prisma.personaagrupacionUpdateManyWithWhereWithoutAgrupacionInput | Prisma.personaagrupacionUpdateManyWithWhereWithoutAgrupacionInput[];
    deleteMany?: Prisma.personaagrupacionScalarWhereInput | Prisma.personaagrupacionScalarWhereInput[];
};
export type personaagrupacionUncheckedUpdateManyWithoutAgrupacionNestedInput = {
    create?: Prisma.XOR<Prisma.personaagrupacionCreateWithoutAgrupacionInput, Prisma.personaagrupacionUncheckedCreateWithoutAgrupacionInput> | Prisma.personaagrupacionCreateWithoutAgrupacionInput[] | Prisma.personaagrupacionUncheckedCreateWithoutAgrupacionInput[];
    connectOrCreate?: Prisma.personaagrupacionCreateOrConnectWithoutAgrupacionInput | Prisma.personaagrupacionCreateOrConnectWithoutAgrupacionInput[];
    upsert?: Prisma.personaagrupacionUpsertWithWhereUniqueWithoutAgrupacionInput | Prisma.personaagrupacionUpsertWithWhereUniqueWithoutAgrupacionInput[];
    createMany?: Prisma.personaagrupacionCreateManyAgrupacionInputEnvelope;
    set?: Prisma.personaagrupacionWhereUniqueInput | Prisma.personaagrupacionWhereUniqueInput[];
    disconnect?: Prisma.personaagrupacionWhereUniqueInput | Prisma.personaagrupacionWhereUniqueInput[];
    delete?: Prisma.personaagrupacionWhereUniqueInput | Prisma.personaagrupacionWhereUniqueInput[];
    connect?: Prisma.personaagrupacionWhereUniqueInput | Prisma.personaagrupacionWhereUniqueInput[];
    update?: Prisma.personaagrupacionUpdateWithWhereUniqueWithoutAgrupacionInput | Prisma.personaagrupacionUpdateWithWhereUniqueWithoutAgrupacionInput[];
    updateMany?: Prisma.personaagrupacionUpdateManyWithWhereWithoutAgrupacionInput | Prisma.personaagrupacionUpdateManyWithWhereWithoutAgrupacionInput[];
    deleteMany?: Prisma.personaagrupacionScalarWhereInput | Prisma.personaagrupacionScalarWhereInput[];
};
export type personaagrupacionCreateNestedManyWithoutPersonaInput = {
    create?: Prisma.XOR<Prisma.personaagrupacionCreateWithoutPersonaInput, Prisma.personaagrupacionUncheckedCreateWithoutPersonaInput> | Prisma.personaagrupacionCreateWithoutPersonaInput[] | Prisma.personaagrupacionUncheckedCreateWithoutPersonaInput[];
    connectOrCreate?: Prisma.personaagrupacionCreateOrConnectWithoutPersonaInput | Prisma.personaagrupacionCreateOrConnectWithoutPersonaInput[];
    createMany?: Prisma.personaagrupacionCreateManyPersonaInputEnvelope;
    connect?: Prisma.personaagrupacionWhereUniqueInput | Prisma.personaagrupacionWhereUniqueInput[];
};
export type personaagrupacionUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: Prisma.XOR<Prisma.personaagrupacionCreateWithoutPersonaInput, Prisma.personaagrupacionUncheckedCreateWithoutPersonaInput> | Prisma.personaagrupacionCreateWithoutPersonaInput[] | Prisma.personaagrupacionUncheckedCreateWithoutPersonaInput[];
    connectOrCreate?: Prisma.personaagrupacionCreateOrConnectWithoutPersonaInput | Prisma.personaagrupacionCreateOrConnectWithoutPersonaInput[];
    createMany?: Prisma.personaagrupacionCreateManyPersonaInputEnvelope;
    connect?: Prisma.personaagrupacionWhereUniqueInput | Prisma.personaagrupacionWhereUniqueInput[];
};
export type personaagrupacionUpdateManyWithoutPersonaNestedInput = {
    create?: Prisma.XOR<Prisma.personaagrupacionCreateWithoutPersonaInput, Prisma.personaagrupacionUncheckedCreateWithoutPersonaInput> | Prisma.personaagrupacionCreateWithoutPersonaInput[] | Prisma.personaagrupacionUncheckedCreateWithoutPersonaInput[];
    connectOrCreate?: Prisma.personaagrupacionCreateOrConnectWithoutPersonaInput | Prisma.personaagrupacionCreateOrConnectWithoutPersonaInput[];
    upsert?: Prisma.personaagrupacionUpsertWithWhereUniqueWithoutPersonaInput | Prisma.personaagrupacionUpsertWithWhereUniqueWithoutPersonaInput[];
    createMany?: Prisma.personaagrupacionCreateManyPersonaInputEnvelope;
    set?: Prisma.personaagrupacionWhereUniqueInput | Prisma.personaagrupacionWhereUniqueInput[];
    disconnect?: Prisma.personaagrupacionWhereUniqueInput | Prisma.personaagrupacionWhereUniqueInput[];
    delete?: Prisma.personaagrupacionWhereUniqueInput | Prisma.personaagrupacionWhereUniqueInput[];
    connect?: Prisma.personaagrupacionWhereUniqueInput | Prisma.personaagrupacionWhereUniqueInput[];
    update?: Prisma.personaagrupacionUpdateWithWhereUniqueWithoutPersonaInput | Prisma.personaagrupacionUpdateWithWhereUniqueWithoutPersonaInput[];
    updateMany?: Prisma.personaagrupacionUpdateManyWithWhereWithoutPersonaInput | Prisma.personaagrupacionUpdateManyWithWhereWithoutPersonaInput[];
    deleteMany?: Prisma.personaagrupacionScalarWhereInput | Prisma.personaagrupacionScalarWhereInput[];
};
export type personaagrupacionUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: Prisma.XOR<Prisma.personaagrupacionCreateWithoutPersonaInput, Prisma.personaagrupacionUncheckedCreateWithoutPersonaInput> | Prisma.personaagrupacionCreateWithoutPersonaInput[] | Prisma.personaagrupacionUncheckedCreateWithoutPersonaInput[];
    connectOrCreate?: Prisma.personaagrupacionCreateOrConnectWithoutPersonaInput | Prisma.personaagrupacionCreateOrConnectWithoutPersonaInput[];
    upsert?: Prisma.personaagrupacionUpsertWithWhereUniqueWithoutPersonaInput | Prisma.personaagrupacionUpsertWithWhereUniqueWithoutPersonaInput[];
    createMany?: Prisma.personaagrupacionCreateManyPersonaInputEnvelope;
    set?: Prisma.personaagrupacionWhereUniqueInput | Prisma.personaagrupacionWhereUniqueInput[];
    disconnect?: Prisma.personaagrupacionWhereUniqueInput | Prisma.personaagrupacionWhereUniqueInput[];
    delete?: Prisma.personaagrupacionWhereUniqueInput | Prisma.personaagrupacionWhereUniqueInput[];
    connect?: Prisma.personaagrupacionWhereUniqueInput | Prisma.personaagrupacionWhereUniqueInput[];
    update?: Prisma.personaagrupacionUpdateWithWhereUniqueWithoutPersonaInput | Prisma.personaagrupacionUpdateWithWhereUniqueWithoutPersonaInput[];
    updateMany?: Prisma.personaagrupacionUpdateManyWithWhereWithoutPersonaInput | Prisma.personaagrupacionUpdateManyWithWhereWithoutPersonaInput[];
    deleteMany?: Prisma.personaagrupacionScalarWhereInput | Prisma.personaagrupacionScalarWhereInput[];
};
export type personaagrupacionCreateWithoutAgrupacionInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    persona: Prisma.personaCreateNestedOneWithoutPersonaagrupacionInput;
};
export type personaagrupacionUncheckedCreateWithoutAgrupacionInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type personaagrupacionCreateOrConnectWithoutAgrupacionInput = {
    where: Prisma.personaagrupacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.personaagrupacionCreateWithoutAgrupacionInput, Prisma.personaagrupacionUncheckedCreateWithoutAgrupacionInput>;
};
export type personaagrupacionCreateManyAgrupacionInputEnvelope = {
    data: Prisma.personaagrupacionCreateManyAgrupacionInput | Prisma.personaagrupacionCreateManyAgrupacionInput[];
    skipDuplicates?: boolean;
};
export type personaagrupacionUpsertWithWhereUniqueWithoutAgrupacionInput = {
    where: Prisma.personaagrupacionWhereUniqueInput;
    update: Prisma.XOR<Prisma.personaagrupacionUpdateWithoutAgrupacionInput, Prisma.personaagrupacionUncheckedUpdateWithoutAgrupacionInput>;
    create: Prisma.XOR<Prisma.personaagrupacionCreateWithoutAgrupacionInput, Prisma.personaagrupacionUncheckedCreateWithoutAgrupacionInput>;
};
export type personaagrupacionUpdateWithWhereUniqueWithoutAgrupacionInput = {
    where: Prisma.personaagrupacionWhereUniqueInput;
    data: Prisma.XOR<Prisma.personaagrupacionUpdateWithoutAgrupacionInput, Prisma.personaagrupacionUncheckedUpdateWithoutAgrupacionInput>;
};
export type personaagrupacionUpdateManyWithWhereWithoutAgrupacionInput = {
    where: Prisma.personaagrupacionScalarWhereInput;
    data: Prisma.XOR<Prisma.personaagrupacionUpdateManyMutationInput, Prisma.personaagrupacionUncheckedUpdateManyWithoutAgrupacionInput>;
};
export type personaagrupacionScalarWhereInput = {
    AND?: Prisma.personaagrupacionScalarWhereInput | Prisma.personaagrupacionScalarWhereInput[];
    OR?: Prisma.personaagrupacionScalarWhereInput[];
    NOT?: Prisma.personaagrupacionScalarWhereInput | Prisma.personaagrupacionScalarWhereInput[];
    id?: Prisma.StringFilter<"personaagrupacion"> | string;
    personaId?: Prisma.StringFilter<"personaagrupacion"> | string;
    agrupacionId?: Prisma.StringFilter<"personaagrupacion"> | string;
    fechaAlta?: Prisma.DateTimeFilter<"personaagrupacion"> | Date | string;
    fechaBaja?: Prisma.DateTimeNullableFilter<"personaagrupacion"> | Date | string | null;
    activo?: Prisma.BoolFilter<"personaagrupacion"> | boolean;
    observaciones?: Prisma.StringNullableFilter<"personaagrupacion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"personaagrupacion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"personaagrupacion"> | Date | string;
};
export type personaagrupacionCreateWithoutPersonaInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    agrupacion: Prisma.agrupacionCreateNestedOneWithoutPersonaagrupacionInput;
};
export type personaagrupacionUncheckedCreateWithoutPersonaInput = {
    id: string;
    agrupacionId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type personaagrupacionCreateOrConnectWithoutPersonaInput = {
    where: Prisma.personaagrupacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.personaagrupacionCreateWithoutPersonaInput, Prisma.personaagrupacionUncheckedCreateWithoutPersonaInput>;
};
export type personaagrupacionCreateManyPersonaInputEnvelope = {
    data: Prisma.personaagrupacionCreateManyPersonaInput | Prisma.personaagrupacionCreateManyPersonaInput[];
    skipDuplicates?: boolean;
};
export type personaagrupacionUpsertWithWhereUniqueWithoutPersonaInput = {
    where: Prisma.personaagrupacionWhereUniqueInput;
    update: Prisma.XOR<Prisma.personaagrupacionUpdateWithoutPersonaInput, Prisma.personaagrupacionUncheckedUpdateWithoutPersonaInput>;
    create: Prisma.XOR<Prisma.personaagrupacionCreateWithoutPersonaInput, Prisma.personaagrupacionUncheckedCreateWithoutPersonaInput>;
};
export type personaagrupacionUpdateWithWhereUniqueWithoutPersonaInput = {
    where: Prisma.personaagrupacionWhereUniqueInput;
    data: Prisma.XOR<Prisma.personaagrupacionUpdateWithoutPersonaInput, Prisma.personaagrupacionUncheckedUpdateWithoutPersonaInput>;
};
export type personaagrupacionUpdateManyWithWhereWithoutPersonaInput = {
    where: Prisma.personaagrupacionScalarWhereInput;
    data: Prisma.XOR<Prisma.personaagrupacionUpdateManyMutationInput, Prisma.personaagrupacionUncheckedUpdateManyWithoutPersonaInput>;
};
export type personaagrupacionCreateManyAgrupacionInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type personaagrupacionUpdateWithoutAgrupacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    persona?: Prisma.personaUpdateOneRequiredWithoutPersonaagrupacionNestedInput;
};
export type personaagrupacionUncheckedUpdateWithoutAgrupacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type personaagrupacionUncheckedUpdateManyWithoutAgrupacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type personaagrupacionCreateManyPersonaInput = {
    id: string;
    agrupacionId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type personaagrupacionUpdateWithoutPersonaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    agrupacion?: Prisma.agrupacionUpdateOneRequiredWithoutPersonaagrupacionNestedInput;
};
export type personaagrupacionUncheckedUpdateWithoutPersonaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    agrupacionId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type personaagrupacionUncheckedUpdateManyWithoutPersonaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    agrupacionId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type personaagrupacionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    personaId?: boolean;
    agrupacionId?: boolean;
    fechaAlta?: boolean;
    fechaBaja?: boolean;
    activo?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    agrupacion?: boolean | Prisma.agrupacionDefaultArgs<ExtArgs>;
    persona?: boolean | Prisma.personaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["personaagrupacion"]>;
export type personaagrupacionSelectScalar = {
    id?: boolean;
    personaId?: boolean;
    agrupacionId?: boolean;
    fechaAlta?: boolean;
    fechaBaja?: boolean;
    activo?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type personaagrupacionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "personaId" | "agrupacionId" | "fechaAlta" | "fechaBaja" | "activo" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["personaagrupacion"]>;
export type personaagrupacionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    agrupacion?: boolean | Prisma.agrupacionDefaultArgs<ExtArgs>;
    persona?: boolean | Prisma.personaDefaultArgs<ExtArgs>;
};
export type $personaagrupacionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "personaagrupacion";
    objects: {
        agrupacion: Prisma.$agrupacionPayload<ExtArgs>;
        persona: Prisma.$personaPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        personaId: string;
        agrupacionId: string;
        fechaAlta: Date;
        fechaBaja: Date | null;
        activo: boolean;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["personaagrupacion"]>;
    composites: {};
};
export type personaagrupacionGetPayload<S extends boolean | null | undefined | personaagrupacionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$personaagrupacionPayload, S>;
export type personaagrupacionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<personaagrupacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PersonaagrupacionCountAggregateInputType | true;
};
export interface personaagrupacionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['personaagrupacion'];
        meta: {
            name: 'personaagrupacion';
        };
    };
    /**
     * Find zero or one Personaagrupacion that matches the filter.
     * @param {personaagrupacionFindUniqueArgs} args - Arguments to find a Personaagrupacion
     * @example
     * // Get one Personaagrupacion
     * const personaagrupacion = await prisma.personaagrupacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends personaagrupacionFindUniqueArgs>(args: Prisma.SelectSubset<T, personaagrupacionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__personaagrupacionClient<runtime.Types.Result.GetResult<Prisma.$personaagrupacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Personaagrupacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {personaagrupacionFindUniqueOrThrowArgs} args - Arguments to find a Personaagrupacion
     * @example
     * // Get one Personaagrupacion
     * const personaagrupacion = await prisma.personaagrupacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends personaagrupacionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, personaagrupacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__personaagrupacionClient<runtime.Types.Result.GetResult<Prisma.$personaagrupacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Personaagrupacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaagrupacionFindFirstArgs} args - Arguments to find a Personaagrupacion
     * @example
     * // Get one Personaagrupacion
     * const personaagrupacion = await prisma.personaagrupacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends personaagrupacionFindFirstArgs>(args?: Prisma.SelectSubset<T, personaagrupacionFindFirstArgs<ExtArgs>>): Prisma.Prisma__personaagrupacionClient<runtime.Types.Result.GetResult<Prisma.$personaagrupacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Personaagrupacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaagrupacionFindFirstOrThrowArgs} args - Arguments to find a Personaagrupacion
     * @example
     * // Get one Personaagrupacion
     * const personaagrupacion = await prisma.personaagrupacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends personaagrupacionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, personaagrupacionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__personaagrupacionClient<runtime.Types.Result.GetResult<Prisma.$personaagrupacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Personaagrupacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaagrupacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personaagrupacions
     * const personaagrupacions = await prisma.personaagrupacion.findMany()
     *
     * // Get first 10 Personaagrupacions
     * const personaagrupacions = await prisma.personaagrupacion.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const personaagrupacionWithIdOnly = await prisma.personaagrupacion.findMany({ select: { id: true } })
     *
     */
    findMany<T extends personaagrupacionFindManyArgs>(args?: Prisma.SelectSubset<T, personaagrupacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$personaagrupacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Personaagrupacion.
     * @param {personaagrupacionCreateArgs} args - Arguments to create a Personaagrupacion.
     * @example
     * // Create one Personaagrupacion
     * const Personaagrupacion = await prisma.personaagrupacion.create({
     *   data: {
     *     // ... data to create a Personaagrupacion
     *   }
     * })
     *
     */
    create<T extends personaagrupacionCreateArgs>(args: Prisma.SelectSubset<T, personaagrupacionCreateArgs<ExtArgs>>): Prisma.Prisma__personaagrupacionClient<runtime.Types.Result.GetResult<Prisma.$personaagrupacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Personaagrupacions.
     * @param {personaagrupacionCreateManyArgs} args - Arguments to create many Personaagrupacions.
     * @example
     * // Create many Personaagrupacions
     * const personaagrupacion = await prisma.personaagrupacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends personaagrupacionCreateManyArgs>(args?: Prisma.SelectSubset<T, personaagrupacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Personaagrupacion.
     * @param {personaagrupacionDeleteArgs} args - Arguments to delete one Personaagrupacion.
     * @example
     * // Delete one Personaagrupacion
     * const Personaagrupacion = await prisma.personaagrupacion.delete({
     *   where: {
     *     // ... filter to delete one Personaagrupacion
     *   }
     * })
     *
     */
    delete<T extends personaagrupacionDeleteArgs>(args: Prisma.SelectSubset<T, personaagrupacionDeleteArgs<ExtArgs>>): Prisma.Prisma__personaagrupacionClient<runtime.Types.Result.GetResult<Prisma.$personaagrupacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Personaagrupacion.
     * @param {personaagrupacionUpdateArgs} args - Arguments to update one Personaagrupacion.
     * @example
     * // Update one Personaagrupacion
     * const personaagrupacion = await prisma.personaagrupacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends personaagrupacionUpdateArgs>(args: Prisma.SelectSubset<T, personaagrupacionUpdateArgs<ExtArgs>>): Prisma.Prisma__personaagrupacionClient<runtime.Types.Result.GetResult<Prisma.$personaagrupacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Personaagrupacions.
     * @param {personaagrupacionDeleteManyArgs} args - Arguments to filter Personaagrupacions to delete.
     * @example
     * // Delete a few Personaagrupacions
     * const { count } = await prisma.personaagrupacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends personaagrupacionDeleteManyArgs>(args?: Prisma.SelectSubset<T, personaagrupacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Personaagrupacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaagrupacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personaagrupacions
     * const personaagrupacion = await prisma.personaagrupacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends personaagrupacionUpdateManyArgs>(args: Prisma.SelectSubset<T, personaagrupacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Personaagrupacion.
     * @param {personaagrupacionUpsertArgs} args - Arguments to update or create a Personaagrupacion.
     * @example
     * // Update or create a Personaagrupacion
     * const personaagrupacion = await prisma.personaagrupacion.upsert({
     *   create: {
     *     // ... data to create a Personaagrupacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personaagrupacion we want to update
     *   }
     * })
     */
    upsert<T extends personaagrupacionUpsertArgs>(args: Prisma.SelectSubset<T, personaagrupacionUpsertArgs<ExtArgs>>): Prisma.Prisma__personaagrupacionClient<runtime.Types.Result.GetResult<Prisma.$personaagrupacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Personaagrupacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaagrupacionCountArgs} args - Arguments to filter Personaagrupacions to count.
     * @example
     * // Count the number of Personaagrupacions
     * const count = await prisma.personaagrupacion.count({
     *   where: {
     *     // ... the filter for the Personaagrupacions we want to count
     *   }
     * })
    **/
    count<T extends personaagrupacionCountArgs>(args?: Prisma.Subset<T, personaagrupacionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PersonaagrupacionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Personaagrupacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaagrupacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonaagrupacionAggregateArgs>(args: Prisma.Subset<T, PersonaagrupacionAggregateArgs>): Prisma.PrismaPromise<GetPersonaagrupacionAggregateType<T>>;
    /**
     * Group by Personaagrupacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaagrupacionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends personaagrupacionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: personaagrupacionGroupByArgs['orderBy'];
    } : {
        orderBy?: personaagrupacionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, personaagrupacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonaagrupacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the personaagrupacion model
     */
    readonly fields: personaagrupacionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for personaagrupacion.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__personaagrupacionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    agrupacion<T extends Prisma.agrupacionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.agrupacionDefaultArgs<ExtArgs>>): Prisma.Prisma__agrupacionClient<runtime.Types.Result.GetResult<Prisma.$agrupacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    persona<T extends Prisma.personaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.personaDefaultArgs<ExtArgs>>): Prisma.Prisma__personaClient<runtime.Types.Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the personaagrupacion model
 */
export interface personaagrupacionFieldRefs {
    readonly id: Prisma.FieldRef<"personaagrupacion", 'String'>;
    readonly personaId: Prisma.FieldRef<"personaagrupacion", 'String'>;
    readonly agrupacionId: Prisma.FieldRef<"personaagrupacion", 'String'>;
    readonly fechaAlta: Prisma.FieldRef<"personaagrupacion", 'DateTime'>;
    readonly fechaBaja: Prisma.FieldRef<"personaagrupacion", 'DateTime'>;
    readonly activo: Prisma.FieldRef<"personaagrupacion", 'Boolean'>;
    readonly observaciones: Prisma.FieldRef<"personaagrupacion", 'String'>;
    readonly createdAt: Prisma.FieldRef<"personaagrupacion", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"personaagrupacion", 'DateTime'>;
}
/**
 * personaagrupacion findUnique
 */
export type personaagrupacionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personaagrupacion
     */
    select?: Prisma.personaagrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personaagrupacion
     */
    omit?: Prisma.personaagrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personaagrupacionInclude<ExtArgs> | null;
    /**
     * Filter, which personaagrupacion to fetch.
     */
    where: Prisma.personaagrupacionWhereUniqueInput;
};
/**
 * personaagrupacion findUniqueOrThrow
 */
export type personaagrupacionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personaagrupacion
     */
    select?: Prisma.personaagrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personaagrupacion
     */
    omit?: Prisma.personaagrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personaagrupacionInclude<ExtArgs> | null;
    /**
     * Filter, which personaagrupacion to fetch.
     */
    where: Prisma.personaagrupacionWhereUniqueInput;
};
/**
 * personaagrupacion findFirst
 */
export type personaagrupacionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personaagrupacion
     */
    select?: Prisma.personaagrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personaagrupacion
     */
    omit?: Prisma.personaagrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personaagrupacionInclude<ExtArgs> | null;
    /**
     * Filter, which personaagrupacion to fetch.
     */
    where?: Prisma.personaagrupacionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of personaagrupacions to fetch.
     */
    orderBy?: Prisma.personaagrupacionOrderByWithRelationInput | Prisma.personaagrupacionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for personaagrupacions.
     */
    cursor?: Prisma.personaagrupacionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` personaagrupacions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` personaagrupacions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of personaagrupacions.
     */
    distinct?: Prisma.PersonaagrupacionScalarFieldEnum | Prisma.PersonaagrupacionScalarFieldEnum[];
};
/**
 * personaagrupacion findFirstOrThrow
 */
export type personaagrupacionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personaagrupacion
     */
    select?: Prisma.personaagrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personaagrupacion
     */
    omit?: Prisma.personaagrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personaagrupacionInclude<ExtArgs> | null;
    /**
     * Filter, which personaagrupacion to fetch.
     */
    where?: Prisma.personaagrupacionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of personaagrupacions to fetch.
     */
    orderBy?: Prisma.personaagrupacionOrderByWithRelationInput | Prisma.personaagrupacionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for personaagrupacions.
     */
    cursor?: Prisma.personaagrupacionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` personaagrupacions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` personaagrupacions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of personaagrupacions.
     */
    distinct?: Prisma.PersonaagrupacionScalarFieldEnum | Prisma.PersonaagrupacionScalarFieldEnum[];
};
/**
 * personaagrupacion findMany
 */
export type personaagrupacionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personaagrupacion
     */
    select?: Prisma.personaagrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personaagrupacion
     */
    omit?: Prisma.personaagrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personaagrupacionInclude<ExtArgs> | null;
    /**
     * Filter, which personaagrupacions to fetch.
     */
    where?: Prisma.personaagrupacionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of personaagrupacions to fetch.
     */
    orderBy?: Prisma.personaagrupacionOrderByWithRelationInput | Prisma.personaagrupacionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing personaagrupacions.
     */
    cursor?: Prisma.personaagrupacionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` personaagrupacions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` personaagrupacions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of personaagrupacions.
     */
    distinct?: Prisma.PersonaagrupacionScalarFieldEnum | Prisma.PersonaagrupacionScalarFieldEnum[];
};
/**
 * personaagrupacion create
 */
export type personaagrupacionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personaagrupacion
     */
    select?: Prisma.personaagrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personaagrupacion
     */
    omit?: Prisma.personaagrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personaagrupacionInclude<ExtArgs> | null;
    /**
     * The data needed to create a personaagrupacion.
     */
    data: Prisma.XOR<Prisma.personaagrupacionCreateInput, Prisma.personaagrupacionUncheckedCreateInput>;
};
/**
 * personaagrupacion createMany
 */
export type personaagrupacionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many personaagrupacions.
     */
    data: Prisma.personaagrupacionCreateManyInput | Prisma.personaagrupacionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * personaagrupacion update
 */
export type personaagrupacionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personaagrupacion
     */
    select?: Prisma.personaagrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personaagrupacion
     */
    omit?: Prisma.personaagrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personaagrupacionInclude<ExtArgs> | null;
    /**
     * The data needed to update a personaagrupacion.
     */
    data: Prisma.XOR<Prisma.personaagrupacionUpdateInput, Prisma.personaagrupacionUncheckedUpdateInput>;
    /**
     * Choose, which personaagrupacion to update.
     */
    where: Prisma.personaagrupacionWhereUniqueInput;
};
/**
 * personaagrupacion updateMany
 */
export type personaagrupacionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update personaagrupacions.
     */
    data: Prisma.XOR<Prisma.personaagrupacionUpdateManyMutationInput, Prisma.personaagrupacionUncheckedUpdateManyInput>;
    /**
     * Filter which personaagrupacions to update
     */
    where?: Prisma.personaagrupacionWhereInput;
    /**
     * Limit how many personaagrupacions to update.
     */
    limit?: number;
};
/**
 * personaagrupacion upsert
 */
export type personaagrupacionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personaagrupacion
     */
    select?: Prisma.personaagrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personaagrupacion
     */
    omit?: Prisma.personaagrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personaagrupacionInclude<ExtArgs> | null;
    /**
     * The filter to search for the personaagrupacion to update in case it exists.
     */
    where: Prisma.personaagrupacionWhereUniqueInput;
    /**
     * In case the personaagrupacion found by the `where` argument doesn't exist, create a new personaagrupacion with this data.
     */
    create: Prisma.XOR<Prisma.personaagrupacionCreateInput, Prisma.personaagrupacionUncheckedCreateInput>;
    /**
     * In case the personaagrupacion was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.personaagrupacionUpdateInput, Prisma.personaagrupacionUncheckedUpdateInput>;
};
/**
 * personaagrupacion delete
 */
export type personaagrupacionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personaagrupacion
     */
    select?: Prisma.personaagrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personaagrupacion
     */
    omit?: Prisma.personaagrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personaagrupacionInclude<ExtArgs> | null;
    /**
     * Filter which personaagrupacion to delete.
     */
    where: Prisma.personaagrupacionWhereUniqueInput;
};
/**
 * personaagrupacion deleteMany
 */
export type personaagrupacionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which personaagrupacions to delete
     */
    where?: Prisma.personaagrupacionWhereInput;
    /**
     * Limit how many personaagrupacions to delete.
     */
    limit?: number;
};
/**
 * personaagrupacion without action
 */
export type personaagrupacionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personaagrupacion
     */
    select?: Prisma.personaagrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personaagrupacion
     */
    omit?: Prisma.personaagrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personaagrupacionInclude<ExtArgs> | null;
};
//# sourceMappingURL=personaagrupacion.d.ts.map