import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model personarolfuncional
 *
 */
export type personarolfuncionalModel = runtime.Types.Result.DefaultSelection<Prisma.$personarolfuncionalPayload>;
export type AggregatePersonarolfuncional = {
    _count: PersonarolfuncionalCountAggregateOutputType | null;
    _min: PersonarolfuncionalMinAggregateOutputType | null;
    _max: PersonarolfuncionalMaxAggregateOutputType | null;
};
export type PersonarolfuncionalMinAggregateOutputType = {
    id: string | null;
    personaId: string | null;
    rolFuncionalId: string | null;
};
export type PersonarolfuncionalMaxAggregateOutputType = {
    id: string | null;
    personaId: string | null;
    rolFuncionalId: string | null;
};
export type PersonarolfuncionalCountAggregateOutputType = {
    id: number;
    personaId: number;
    rolFuncionalId: number;
    _all: number;
};
export type PersonarolfuncionalMinAggregateInputType = {
    id?: true;
    personaId?: true;
    rolFuncionalId?: true;
};
export type PersonarolfuncionalMaxAggregateInputType = {
    id?: true;
    personaId?: true;
    rolFuncionalId?: true;
};
export type PersonarolfuncionalCountAggregateInputType = {
    id?: true;
    personaId?: true;
    rolFuncionalId?: true;
    _all?: true;
};
export type PersonarolfuncionalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which personarolfuncional to aggregate.
     */
    where?: Prisma.personarolfuncionalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of personarolfuncionals to fetch.
     */
    orderBy?: Prisma.personarolfuncionalOrderByWithRelationInput | Prisma.personarolfuncionalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.personarolfuncionalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` personarolfuncionals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` personarolfuncionals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned personarolfuncionals
    **/
    _count?: true | PersonarolfuncionalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PersonarolfuncionalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PersonarolfuncionalMaxAggregateInputType;
};
export type GetPersonarolfuncionalAggregateType<T extends PersonarolfuncionalAggregateArgs> = {
    [P in keyof T & keyof AggregatePersonarolfuncional]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePersonarolfuncional[P]> : Prisma.GetScalarType<T[P], AggregatePersonarolfuncional[P]>;
};
export type personarolfuncionalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.personarolfuncionalWhereInput;
    orderBy?: Prisma.personarolfuncionalOrderByWithAggregationInput | Prisma.personarolfuncionalOrderByWithAggregationInput[];
    by: Prisma.PersonarolfuncionalScalarFieldEnum[] | Prisma.PersonarolfuncionalScalarFieldEnum;
    having?: Prisma.personarolfuncionalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PersonarolfuncionalCountAggregateInputType | true;
    _min?: PersonarolfuncionalMinAggregateInputType;
    _max?: PersonarolfuncionalMaxAggregateInputType;
};
export type PersonarolfuncionalGroupByOutputType = {
    id: string;
    personaId: string;
    rolFuncionalId: string;
    _count: PersonarolfuncionalCountAggregateOutputType | null;
    _min: PersonarolfuncionalMinAggregateOutputType | null;
    _max: PersonarolfuncionalMaxAggregateOutputType | null;
};
export type GetPersonarolfuncionalGroupByPayload<T extends personarolfuncionalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PersonarolfuncionalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PersonarolfuncionalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PersonarolfuncionalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PersonarolfuncionalGroupByOutputType[P]>;
}>>;
export type personarolfuncionalWhereInput = {
    AND?: Prisma.personarolfuncionalWhereInput | Prisma.personarolfuncionalWhereInput[];
    OR?: Prisma.personarolfuncionalWhereInput[];
    NOT?: Prisma.personarolfuncionalWhereInput | Prisma.personarolfuncionalWhereInput[];
    id?: Prisma.StringFilter<"personarolfuncional"> | string;
    personaId?: Prisma.StringFilter<"personarolfuncional"> | string;
    rolFuncionalId?: Prisma.StringFilter<"personarolfuncional"> | string;
    persona?: Prisma.XOR<Prisma.PersonaScalarRelationFilter, Prisma.personaWhereInput>;
    rolfuncional?: Prisma.XOR<Prisma.RolfuncionalScalarRelationFilter, Prisma.rolfuncionalWhereInput>;
};
export type personarolfuncionalOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    rolFuncionalId?: Prisma.SortOrder;
    persona?: Prisma.personaOrderByWithRelationInput;
    rolfuncional?: Prisma.rolfuncionalOrderByWithRelationInput;
    _relevance?: Prisma.personarolfuncionalOrderByRelevanceInput;
};
export type personarolfuncionalWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    personaId_rolFuncionalId?: Prisma.personarolfuncionalPersonaIdRolFuncionalIdCompoundUniqueInput;
    AND?: Prisma.personarolfuncionalWhereInput | Prisma.personarolfuncionalWhereInput[];
    OR?: Prisma.personarolfuncionalWhereInput[];
    NOT?: Prisma.personarolfuncionalWhereInput | Prisma.personarolfuncionalWhereInput[];
    personaId?: Prisma.StringFilter<"personarolfuncional"> | string;
    rolFuncionalId?: Prisma.StringFilter<"personarolfuncional"> | string;
    persona?: Prisma.XOR<Prisma.PersonaScalarRelationFilter, Prisma.personaWhereInput>;
    rolfuncional?: Prisma.XOR<Prisma.RolfuncionalScalarRelationFilter, Prisma.rolfuncionalWhereInput>;
}, "id" | "personaId_rolFuncionalId">;
export type personarolfuncionalOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    rolFuncionalId?: Prisma.SortOrder;
    _count?: Prisma.personarolfuncionalCountOrderByAggregateInput;
    _max?: Prisma.personarolfuncionalMaxOrderByAggregateInput;
    _min?: Prisma.personarolfuncionalMinOrderByAggregateInput;
};
export type personarolfuncionalScalarWhereWithAggregatesInput = {
    AND?: Prisma.personarolfuncionalScalarWhereWithAggregatesInput | Prisma.personarolfuncionalScalarWhereWithAggregatesInput[];
    OR?: Prisma.personarolfuncionalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.personarolfuncionalScalarWhereWithAggregatesInput | Prisma.personarolfuncionalScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"personarolfuncional"> | string;
    personaId?: Prisma.StringWithAggregatesFilter<"personarolfuncional"> | string;
    rolFuncionalId?: Prisma.StringWithAggregatesFilter<"personarolfuncional"> | string;
};
export type personarolfuncionalCreateInput = {
    id: string;
    persona: Prisma.personaCreateNestedOneWithoutPersonarolfuncionalInput;
    rolfuncional: Prisma.rolfuncionalCreateNestedOneWithoutPersonarolfuncionalInput;
};
export type personarolfuncionalUncheckedCreateInput = {
    id: string;
    personaId: string;
    rolFuncionalId: string;
};
export type personarolfuncionalUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    persona?: Prisma.personaUpdateOneRequiredWithoutPersonarolfuncionalNestedInput;
    rolfuncional?: Prisma.rolfuncionalUpdateOneRequiredWithoutPersonarolfuncionalNestedInput;
};
export type personarolfuncionalUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    rolFuncionalId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type personarolfuncionalCreateManyInput = {
    id: string;
    personaId: string;
    rolFuncionalId: string;
};
export type personarolfuncionalUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type personarolfuncionalUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    rolFuncionalId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type PersonarolfuncionalListRelationFilter = {
    every?: Prisma.personarolfuncionalWhereInput;
    some?: Prisma.personarolfuncionalWhereInput;
    none?: Prisma.personarolfuncionalWhereInput;
};
export type personarolfuncionalOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type personarolfuncionalOrderByRelevanceInput = {
    fields: Prisma.personarolfuncionalOrderByRelevanceFieldEnum | Prisma.personarolfuncionalOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type personarolfuncionalPersonaIdRolFuncionalIdCompoundUniqueInput = {
    personaId: string;
    rolFuncionalId: string;
};
export type personarolfuncionalCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    rolFuncionalId?: Prisma.SortOrder;
};
export type personarolfuncionalMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    rolFuncionalId?: Prisma.SortOrder;
};
export type personarolfuncionalMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    rolFuncionalId?: Prisma.SortOrder;
};
export type personarolfuncionalCreateNestedManyWithoutPersonaInput = {
    create?: Prisma.XOR<Prisma.personarolfuncionalCreateWithoutPersonaInput, Prisma.personarolfuncionalUncheckedCreateWithoutPersonaInput> | Prisma.personarolfuncionalCreateWithoutPersonaInput[] | Prisma.personarolfuncionalUncheckedCreateWithoutPersonaInput[];
    connectOrCreate?: Prisma.personarolfuncionalCreateOrConnectWithoutPersonaInput | Prisma.personarolfuncionalCreateOrConnectWithoutPersonaInput[];
    createMany?: Prisma.personarolfuncionalCreateManyPersonaInputEnvelope;
    connect?: Prisma.personarolfuncionalWhereUniqueInput | Prisma.personarolfuncionalWhereUniqueInput[];
};
export type personarolfuncionalUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: Prisma.XOR<Prisma.personarolfuncionalCreateWithoutPersonaInput, Prisma.personarolfuncionalUncheckedCreateWithoutPersonaInput> | Prisma.personarolfuncionalCreateWithoutPersonaInput[] | Prisma.personarolfuncionalUncheckedCreateWithoutPersonaInput[];
    connectOrCreate?: Prisma.personarolfuncionalCreateOrConnectWithoutPersonaInput | Prisma.personarolfuncionalCreateOrConnectWithoutPersonaInput[];
    createMany?: Prisma.personarolfuncionalCreateManyPersonaInputEnvelope;
    connect?: Prisma.personarolfuncionalWhereUniqueInput | Prisma.personarolfuncionalWhereUniqueInput[];
};
export type personarolfuncionalUpdateManyWithoutPersonaNestedInput = {
    create?: Prisma.XOR<Prisma.personarolfuncionalCreateWithoutPersonaInput, Prisma.personarolfuncionalUncheckedCreateWithoutPersonaInput> | Prisma.personarolfuncionalCreateWithoutPersonaInput[] | Prisma.personarolfuncionalUncheckedCreateWithoutPersonaInput[];
    connectOrCreate?: Prisma.personarolfuncionalCreateOrConnectWithoutPersonaInput | Prisma.personarolfuncionalCreateOrConnectWithoutPersonaInput[];
    upsert?: Prisma.personarolfuncionalUpsertWithWhereUniqueWithoutPersonaInput | Prisma.personarolfuncionalUpsertWithWhereUniqueWithoutPersonaInput[];
    createMany?: Prisma.personarolfuncionalCreateManyPersonaInputEnvelope;
    set?: Prisma.personarolfuncionalWhereUniqueInput | Prisma.personarolfuncionalWhereUniqueInput[];
    disconnect?: Prisma.personarolfuncionalWhereUniqueInput | Prisma.personarolfuncionalWhereUniqueInput[];
    delete?: Prisma.personarolfuncionalWhereUniqueInput | Prisma.personarolfuncionalWhereUniqueInput[];
    connect?: Prisma.personarolfuncionalWhereUniqueInput | Prisma.personarolfuncionalWhereUniqueInput[];
    update?: Prisma.personarolfuncionalUpdateWithWhereUniqueWithoutPersonaInput | Prisma.personarolfuncionalUpdateWithWhereUniqueWithoutPersonaInput[];
    updateMany?: Prisma.personarolfuncionalUpdateManyWithWhereWithoutPersonaInput | Prisma.personarolfuncionalUpdateManyWithWhereWithoutPersonaInput[];
    deleteMany?: Prisma.personarolfuncionalScalarWhereInput | Prisma.personarolfuncionalScalarWhereInput[];
};
export type personarolfuncionalUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: Prisma.XOR<Prisma.personarolfuncionalCreateWithoutPersonaInput, Prisma.personarolfuncionalUncheckedCreateWithoutPersonaInput> | Prisma.personarolfuncionalCreateWithoutPersonaInput[] | Prisma.personarolfuncionalUncheckedCreateWithoutPersonaInput[];
    connectOrCreate?: Prisma.personarolfuncionalCreateOrConnectWithoutPersonaInput | Prisma.personarolfuncionalCreateOrConnectWithoutPersonaInput[];
    upsert?: Prisma.personarolfuncionalUpsertWithWhereUniqueWithoutPersonaInput | Prisma.personarolfuncionalUpsertWithWhereUniqueWithoutPersonaInput[];
    createMany?: Prisma.personarolfuncionalCreateManyPersonaInputEnvelope;
    set?: Prisma.personarolfuncionalWhereUniqueInput | Prisma.personarolfuncionalWhereUniqueInput[];
    disconnect?: Prisma.personarolfuncionalWhereUniqueInput | Prisma.personarolfuncionalWhereUniqueInput[];
    delete?: Prisma.personarolfuncionalWhereUniqueInput | Prisma.personarolfuncionalWhereUniqueInput[];
    connect?: Prisma.personarolfuncionalWhereUniqueInput | Prisma.personarolfuncionalWhereUniqueInput[];
    update?: Prisma.personarolfuncionalUpdateWithWhereUniqueWithoutPersonaInput | Prisma.personarolfuncionalUpdateWithWhereUniqueWithoutPersonaInput[];
    updateMany?: Prisma.personarolfuncionalUpdateManyWithWhereWithoutPersonaInput | Prisma.personarolfuncionalUpdateManyWithWhereWithoutPersonaInput[];
    deleteMany?: Prisma.personarolfuncionalScalarWhereInput | Prisma.personarolfuncionalScalarWhereInput[];
};
export type personarolfuncionalCreateNestedManyWithoutRolfuncionalInput = {
    create?: Prisma.XOR<Prisma.personarolfuncionalCreateWithoutRolfuncionalInput, Prisma.personarolfuncionalUncheckedCreateWithoutRolfuncionalInput> | Prisma.personarolfuncionalCreateWithoutRolfuncionalInput[] | Prisma.personarolfuncionalUncheckedCreateWithoutRolfuncionalInput[];
    connectOrCreate?: Prisma.personarolfuncionalCreateOrConnectWithoutRolfuncionalInput | Prisma.personarolfuncionalCreateOrConnectWithoutRolfuncionalInput[];
    createMany?: Prisma.personarolfuncionalCreateManyRolfuncionalInputEnvelope;
    connect?: Prisma.personarolfuncionalWhereUniqueInput | Prisma.personarolfuncionalWhereUniqueInput[];
};
export type personarolfuncionalUncheckedCreateNestedManyWithoutRolfuncionalInput = {
    create?: Prisma.XOR<Prisma.personarolfuncionalCreateWithoutRolfuncionalInput, Prisma.personarolfuncionalUncheckedCreateWithoutRolfuncionalInput> | Prisma.personarolfuncionalCreateWithoutRolfuncionalInput[] | Prisma.personarolfuncionalUncheckedCreateWithoutRolfuncionalInput[];
    connectOrCreate?: Prisma.personarolfuncionalCreateOrConnectWithoutRolfuncionalInput | Prisma.personarolfuncionalCreateOrConnectWithoutRolfuncionalInput[];
    createMany?: Prisma.personarolfuncionalCreateManyRolfuncionalInputEnvelope;
    connect?: Prisma.personarolfuncionalWhereUniqueInput | Prisma.personarolfuncionalWhereUniqueInput[];
};
export type personarolfuncionalUpdateManyWithoutRolfuncionalNestedInput = {
    create?: Prisma.XOR<Prisma.personarolfuncionalCreateWithoutRolfuncionalInput, Prisma.personarolfuncionalUncheckedCreateWithoutRolfuncionalInput> | Prisma.personarolfuncionalCreateWithoutRolfuncionalInput[] | Prisma.personarolfuncionalUncheckedCreateWithoutRolfuncionalInput[];
    connectOrCreate?: Prisma.personarolfuncionalCreateOrConnectWithoutRolfuncionalInput | Prisma.personarolfuncionalCreateOrConnectWithoutRolfuncionalInput[];
    upsert?: Prisma.personarolfuncionalUpsertWithWhereUniqueWithoutRolfuncionalInput | Prisma.personarolfuncionalUpsertWithWhereUniqueWithoutRolfuncionalInput[];
    createMany?: Prisma.personarolfuncionalCreateManyRolfuncionalInputEnvelope;
    set?: Prisma.personarolfuncionalWhereUniqueInput | Prisma.personarolfuncionalWhereUniqueInput[];
    disconnect?: Prisma.personarolfuncionalWhereUniqueInput | Prisma.personarolfuncionalWhereUniqueInput[];
    delete?: Prisma.personarolfuncionalWhereUniqueInput | Prisma.personarolfuncionalWhereUniqueInput[];
    connect?: Prisma.personarolfuncionalWhereUniqueInput | Prisma.personarolfuncionalWhereUniqueInput[];
    update?: Prisma.personarolfuncionalUpdateWithWhereUniqueWithoutRolfuncionalInput | Prisma.personarolfuncionalUpdateWithWhereUniqueWithoutRolfuncionalInput[];
    updateMany?: Prisma.personarolfuncionalUpdateManyWithWhereWithoutRolfuncionalInput | Prisma.personarolfuncionalUpdateManyWithWhereWithoutRolfuncionalInput[];
    deleteMany?: Prisma.personarolfuncionalScalarWhereInput | Prisma.personarolfuncionalScalarWhereInput[];
};
export type personarolfuncionalUncheckedUpdateManyWithoutRolfuncionalNestedInput = {
    create?: Prisma.XOR<Prisma.personarolfuncionalCreateWithoutRolfuncionalInput, Prisma.personarolfuncionalUncheckedCreateWithoutRolfuncionalInput> | Prisma.personarolfuncionalCreateWithoutRolfuncionalInput[] | Prisma.personarolfuncionalUncheckedCreateWithoutRolfuncionalInput[];
    connectOrCreate?: Prisma.personarolfuncionalCreateOrConnectWithoutRolfuncionalInput | Prisma.personarolfuncionalCreateOrConnectWithoutRolfuncionalInput[];
    upsert?: Prisma.personarolfuncionalUpsertWithWhereUniqueWithoutRolfuncionalInput | Prisma.personarolfuncionalUpsertWithWhereUniqueWithoutRolfuncionalInput[];
    createMany?: Prisma.personarolfuncionalCreateManyRolfuncionalInputEnvelope;
    set?: Prisma.personarolfuncionalWhereUniqueInput | Prisma.personarolfuncionalWhereUniqueInput[];
    disconnect?: Prisma.personarolfuncionalWhereUniqueInput | Prisma.personarolfuncionalWhereUniqueInput[];
    delete?: Prisma.personarolfuncionalWhereUniqueInput | Prisma.personarolfuncionalWhereUniqueInput[];
    connect?: Prisma.personarolfuncionalWhereUniqueInput | Prisma.personarolfuncionalWhereUniqueInput[];
    update?: Prisma.personarolfuncionalUpdateWithWhereUniqueWithoutRolfuncionalInput | Prisma.personarolfuncionalUpdateWithWhereUniqueWithoutRolfuncionalInput[];
    updateMany?: Prisma.personarolfuncionalUpdateManyWithWhereWithoutRolfuncionalInput | Prisma.personarolfuncionalUpdateManyWithWhereWithoutRolfuncionalInput[];
    deleteMany?: Prisma.personarolfuncionalScalarWhereInput | Prisma.personarolfuncionalScalarWhereInput[];
};
export type personarolfuncionalCreateWithoutPersonaInput = {
    id: string;
    rolfuncional: Prisma.rolfuncionalCreateNestedOneWithoutPersonarolfuncionalInput;
};
export type personarolfuncionalUncheckedCreateWithoutPersonaInput = {
    id: string;
    rolFuncionalId: string;
};
export type personarolfuncionalCreateOrConnectWithoutPersonaInput = {
    where: Prisma.personarolfuncionalWhereUniqueInput;
    create: Prisma.XOR<Prisma.personarolfuncionalCreateWithoutPersonaInput, Prisma.personarolfuncionalUncheckedCreateWithoutPersonaInput>;
};
export type personarolfuncionalCreateManyPersonaInputEnvelope = {
    data: Prisma.personarolfuncionalCreateManyPersonaInput | Prisma.personarolfuncionalCreateManyPersonaInput[];
    skipDuplicates?: boolean;
};
export type personarolfuncionalUpsertWithWhereUniqueWithoutPersonaInput = {
    where: Prisma.personarolfuncionalWhereUniqueInput;
    update: Prisma.XOR<Prisma.personarolfuncionalUpdateWithoutPersonaInput, Prisma.personarolfuncionalUncheckedUpdateWithoutPersonaInput>;
    create: Prisma.XOR<Prisma.personarolfuncionalCreateWithoutPersonaInput, Prisma.personarolfuncionalUncheckedCreateWithoutPersonaInput>;
};
export type personarolfuncionalUpdateWithWhereUniqueWithoutPersonaInput = {
    where: Prisma.personarolfuncionalWhereUniqueInput;
    data: Prisma.XOR<Prisma.personarolfuncionalUpdateWithoutPersonaInput, Prisma.personarolfuncionalUncheckedUpdateWithoutPersonaInput>;
};
export type personarolfuncionalUpdateManyWithWhereWithoutPersonaInput = {
    where: Prisma.personarolfuncionalScalarWhereInput;
    data: Prisma.XOR<Prisma.personarolfuncionalUpdateManyMutationInput, Prisma.personarolfuncionalUncheckedUpdateManyWithoutPersonaInput>;
};
export type personarolfuncionalScalarWhereInput = {
    AND?: Prisma.personarolfuncionalScalarWhereInput | Prisma.personarolfuncionalScalarWhereInput[];
    OR?: Prisma.personarolfuncionalScalarWhereInput[];
    NOT?: Prisma.personarolfuncionalScalarWhereInput | Prisma.personarolfuncionalScalarWhereInput[];
    id?: Prisma.StringFilter<"personarolfuncional"> | string;
    personaId?: Prisma.StringFilter<"personarolfuncional"> | string;
    rolFuncionalId?: Prisma.StringFilter<"personarolfuncional"> | string;
};
export type personarolfuncionalCreateWithoutRolfuncionalInput = {
    id: string;
    persona: Prisma.personaCreateNestedOneWithoutPersonarolfuncionalInput;
};
export type personarolfuncionalUncheckedCreateWithoutRolfuncionalInput = {
    id: string;
    personaId: string;
};
export type personarolfuncionalCreateOrConnectWithoutRolfuncionalInput = {
    where: Prisma.personarolfuncionalWhereUniqueInput;
    create: Prisma.XOR<Prisma.personarolfuncionalCreateWithoutRolfuncionalInput, Prisma.personarolfuncionalUncheckedCreateWithoutRolfuncionalInput>;
};
export type personarolfuncionalCreateManyRolfuncionalInputEnvelope = {
    data: Prisma.personarolfuncionalCreateManyRolfuncionalInput | Prisma.personarolfuncionalCreateManyRolfuncionalInput[];
    skipDuplicates?: boolean;
};
export type personarolfuncionalUpsertWithWhereUniqueWithoutRolfuncionalInput = {
    where: Prisma.personarolfuncionalWhereUniqueInput;
    update: Prisma.XOR<Prisma.personarolfuncionalUpdateWithoutRolfuncionalInput, Prisma.personarolfuncionalUncheckedUpdateWithoutRolfuncionalInput>;
    create: Prisma.XOR<Prisma.personarolfuncionalCreateWithoutRolfuncionalInput, Prisma.personarolfuncionalUncheckedCreateWithoutRolfuncionalInput>;
};
export type personarolfuncionalUpdateWithWhereUniqueWithoutRolfuncionalInput = {
    where: Prisma.personarolfuncionalWhereUniqueInput;
    data: Prisma.XOR<Prisma.personarolfuncionalUpdateWithoutRolfuncionalInput, Prisma.personarolfuncionalUncheckedUpdateWithoutRolfuncionalInput>;
};
export type personarolfuncionalUpdateManyWithWhereWithoutRolfuncionalInput = {
    where: Prisma.personarolfuncionalScalarWhereInput;
    data: Prisma.XOR<Prisma.personarolfuncionalUpdateManyMutationInput, Prisma.personarolfuncionalUncheckedUpdateManyWithoutRolfuncionalInput>;
};
export type personarolfuncionalCreateManyPersonaInput = {
    id: string;
    rolFuncionalId: string;
};
export type personarolfuncionalUpdateWithoutPersonaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rolfuncional?: Prisma.rolfuncionalUpdateOneRequiredWithoutPersonarolfuncionalNestedInput;
};
export type personarolfuncionalUncheckedUpdateWithoutPersonaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rolFuncionalId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type personarolfuncionalUncheckedUpdateManyWithoutPersonaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    rolFuncionalId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type personarolfuncionalCreateManyRolfuncionalInput = {
    id: string;
    personaId: string;
};
export type personarolfuncionalUpdateWithoutRolfuncionalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    persona?: Prisma.personaUpdateOneRequiredWithoutPersonarolfuncionalNestedInput;
};
export type personarolfuncionalUncheckedUpdateWithoutRolfuncionalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type personarolfuncionalUncheckedUpdateManyWithoutRolfuncionalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type personarolfuncionalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    personaId?: boolean;
    rolFuncionalId?: boolean;
    persona?: boolean | Prisma.personaDefaultArgs<ExtArgs>;
    rolfuncional?: boolean | Prisma.rolfuncionalDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["personarolfuncional"]>;
export type personarolfuncionalSelectScalar = {
    id?: boolean;
    personaId?: boolean;
    rolFuncionalId?: boolean;
};
export type personarolfuncionalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "personaId" | "rolFuncionalId", ExtArgs["result"]["personarolfuncional"]>;
export type personarolfuncionalInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    persona?: boolean | Prisma.personaDefaultArgs<ExtArgs>;
    rolfuncional?: boolean | Prisma.rolfuncionalDefaultArgs<ExtArgs>;
};
export type $personarolfuncionalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "personarolfuncional";
    objects: {
        persona: Prisma.$personaPayload<ExtArgs>;
        rolfuncional: Prisma.$rolfuncionalPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        personaId: string;
        rolFuncionalId: string;
    }, ExtArgs["result"]["personarolfuncional"]>;
    composites: {};
};
export type personarolfuncionalGetPayload<S extends boolean | null | undefined | personarolfuncionalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$personarolfuncionalPayload, S>;
export type personarolfuncionalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<personarolfuncionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PersonarolfuncionalCountAggregateInputType | true;
};
export interface personarolfuncionalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['personarolfuncional'];
        meta: {
            name: 'personarolfuncional';
        };
    };
    /**
     * Find zero or one Personarolfuncional that matches the filter.
     * @param {personarolfuncionalFindUniqueArgs} args - Arguments to find a Personarolfuncional
     * @example
     * // Get one Personarolfuncional
     * const personarolfuncional = await prisma.personarolfuncional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends personarolfuncionalFindUniqueArgs>(args: Prisma.SelectSubset<T, personarolfuncionalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__personarolfuncionalClient<runtime.Types.Result.GetResult<Prisma.$personarolfuncionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Personarolfuncional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {personarolfuncionalFindUniqueOrThrowArgs} args - Arguments to find a Personarolfuncional
     * @example
     * // Get one Personarolfuncional
     * const personarolfuncional = await prisma.personarolfuncional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends personarolfuncionalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, personarolfuncionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__personarolfuncionalClient<runtime.Types.Result.GetResult<Prisma.$personarolfuncionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Personarolfuncional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personarolfuncionalFindFirstArgs} args - Arguments to find a Personarolfuncional
     * @example
     * // Get one Personarolfuncional
     * const personarolfuncional = await prisma.personarolfuncional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends personarolfuncionalFindFirstArgs>(args?: Prisma.SelectSubset<T, personarolfuncionalFindFirstArgs<ExtArgs>>): Prisma.Prisma__personarolfuncionalClient<runtime.Types.Result.GetResult<Prisma.$personarolfuncionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Personarolfuncional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personarolfuncionalFindFirstOrThrowArgs} args - Arguments to find a Personarolfuncional
     * @example
     * // Get one Personarolfuncional
     * const personarolfuncional = await prisma.personarolfuncional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends personarolfuncionalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, personarolfuncionalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__personarolfuncionalClient<runtime.Types.Result.GetResult<Prisma.$personarolfuncionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Personarolfuncionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personarolfuncionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personarolfuncionals
     * const personarolfuncionals = await prisma.personarolfuncional.findMany()
     *
     * // Get first 10 Personarolfuncionals
     * const personarolfuncionals = await prisma.personarolfuncional.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const personarolfuncionalWithIdOnly = await prisma.personarolfuncional.findMany({ select: { id: true } })
     *
     */
    findMany<T extends personarolfuncionalFindManyArgs>(args?: Prisma.SelectSubset<T, personarolfuncionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$personarolfuncionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Personarolfuncional.
     * @param {personarolfuncionalCreateArgs} args - Arguments to create a Personarolfuncional.
     * @example
     * // Create one Personarolfuncional
     * const Personarolfuncional = await prisma.personarolfuncional.create({
     *   data: {
     *     // ... data to create a Personarolfuncional
     *   }
     * })
     *
     */
    create<T extends personarolfuncionalCreateArgs>(args: Prisma.SelectSubset<T, personarolfuncionalCreateArgs<ExtArgs>>): Prisma.Prisma__personarolfuncionalClient<runtime.Types.Result.GetResult<Prisma.$personarolfuncionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Personarolfuncionals.
     * @param {personarolfuncionalCreateManyArgs} args - Arguments to create many Personarolfuncionals.
     * @example
     * // Create many Personarolfuncionals
     * const personarolfuncional = await prisma.personarolfuncional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends personarolfuncionalCreateManyArgs>(args?: Prisma.SelectSubset<T, personarolfuncionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Personarolfuncional.
     * @param {personarolfuncionalDeleteArgs} args - Arguments to delete one Personarolfuncional.
     * @example
     * // Delete one Personarolfuncional
     * const Personarolfuncional = await prisma.personarolfuncional.delete({
     *   where: {
     *     // ... filter to delete one Personarolfuncional
     *   }
     * })
     *
     */
    delete<T extends personarolfuncionalDeleteArgs>(args: Prisma.SelectSubset<T, personarolfuncionalDeleteArgs<ExtArgs>>): Prisma.Prisma__personarolfuncionalClient<runtime.Types.Result.GetResult<Prisma.$personarolfuncionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Personarolfuncional.
     * @param {personarolfuncionalUpdateArgs} args - Arguments to update one Personarolfuncional.
     * @example
     * // Update one Personarolfuncional
     * const personarolfuncional = await prisma.personarolfuncional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends personarolfuncionalUpdateArgs>(args: Prisma.SelectSubset<T, personarolfuncionalUpdateArgs<ExtArgs>>): Prisma.Prisma__personarolfuncionalClient<runtime.Types.Result.GetResult<Prisma.$personarolfuncionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Personarolfuncionals.
     * @param {personarolfuncionalDeleteManyArgs} args - Arguments to filter Personarolfuncionals to delete.
     * @example
     * // Delete a few Personarolfuncionals
     * const { count } = await prisma.personarolfuncional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends personarolfuncionalDeleteManyArgs>(args?: Prisma.SelectSubset<T, personarolfuncionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Personarolfuncionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personarolfuncionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personarolfuncionals
     * const personarolfuncional = await prisma.personarolfuncional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends personarolfuncionalUpdateManyArgs>(args: Prisma.SelectSubset<T, personarolfuncionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Personarolfuncional.
     * @param {personarolfuncionalUpsertArgs} args - Arguments to update or create a Personarolfuncional.
     * @example
     * // Update or create a Personarolfuncional
     * const personarolfuncional = await prisma.personarolfuncional.upsert({
     *   create: {
     *     // ... data to create a Personarolfuncional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personarolfuncional we want to update
     *   }
     * })
     */
    upsert<T extends personarolfuncionalUpsertArgs>(args: Prisma.SelectSubset<T, personarolfuncionalUpsertArgs<ExtArgs>>): Prisma.Prisma__personarolfuncionalClient<runtime.Types.Result.GetResult<Prisma.$personarolfuncionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Personarolfuncionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personarolfuncionalCountArgs} args - Arguments to filter Personarolfuncionals to count.
     * @example
     * // Count the number of Personarolfuncionals
     * const count = await prisma.personarolfuncional.count({
     *   where: {
     *     // ... the filter for the Personarolfuncionals we want to count
     *   }
     * })
    **/
    count<T extends personarolfuncionalCountArgs>(args?: Prisma.Subset<T, personarolfuncionalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PersonarolfuncionalCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Personarolfuncional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonarolfuncionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonarolfuncionalAggregateArgs>(args: Prisma.Subset<T, PersonarolfuncionalAggregateArgs>): Prisma.PrismaPromise<GetPersonarolfuncionalAggregateType<T>>;
    /**
     * Group by Personarolfuncional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personarolfuncionalGroupByArgs} args - Group by arguments.
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
    groupBy<T extends personarolfuncionalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: personarolfuncionalGroupByArgs['orderBy'];
    } : {
        orderBy?: personarolfuncionalGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, personarolfuncionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonarolfuncionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the personarolfuncional model
     */
    readonly fields: personarolfuncionalFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for personarolfuncional.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__personarolfuncionalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    persona<T extends Prisma.personaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.personaDefaultArgs<ExtArgs>>): Prisma.Prisma__personaClient<runtime.Types.Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    rolfuncional<T extends Prisma.rolfuncionalDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.rolfuncionalDefaultArgs<ExtArgs>>): Prisma.Prisma__rolfuncionalClient<runtime.Types.Result.GetResult<Prisma.$rolfuncionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the personarolfuncional model
 */
export interface personarolfuncionalFieldRefs {
    readonly id: Prisma.FieldRef<"personarolfuncional", 'String'>;
    readonly personaId: Prisma.FieldRef<"personarolfuncional", 'String'>;
    readonly rolFuncionalId: Prisma.FieldRef<"personarolfuncional", 'String'>;
}
/**
 * personarolfuncional findUnique
 */
export type personarolfuncionalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personarolfuncional
     */
    select?: Prisma.personarolfuncionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personarolfuncional
     */
    omit?: Prisma.personarolfuncionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personarolfuncionalInclude<ExtArgs> | null;
    /**
     * Filter, which personarolfuncional to fetch.
     */
    where: Prisma.personarolfuncionalWhereUniqueInput;
};
/**
 * personarolfuncional findUniqueOrThrow
 */
export type personarolfuncionalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personarolfuncional
     */
    select?: Prisma.personarolfuncionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personarolfuncional
     */
    omit?: Prisma.personarolfuncionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personarolfuncionalInclude<ExtArgs> | null;
    /**
     * Filter, which personarolfuncional to fetch.
     */
    where: Prisma.personarolfuncionalWhereUniqueInput;
};
/**
 * personarolfuncional findFirst
 */
export type personarolfuncionalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personarolfuncional
     */
    select?: Prisma.personarolfuncionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personarolfuncional
     */
    omit?: Prisma.personarolfuncionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personarolfuncionalInclude<ExtArgs> | null;
    /**
     * Filter, which personarolfuncional to fetch.
     */
    where?: Prisma.personarolfuncionalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of personarolfuncionals to fetch.
     */
    orderBy?: Prisma.personarolfuncionalOrderByWithRelationInput | Prisma.personarolfuncionalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for personarolfuncionals.
     */
    cursor?: Prisma.personarolfuncionalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` personarolfuncionals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` personarolfuncionals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of personarolfuncionals.
     */
    distinct?: Prisma.PersonarolfuncionalScalarFieldEnum | Prisma.PersonarolfuncionalScalarFieldEnum[];
};
/**
 * personarolfuncional findFirstOrThrow
 */
export type personarolfuncionalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personarolfuncional
     */
    select?: Prisma.personarolfuncionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personarolfuncional
     */
    omit?: Prisma.personarolfuncionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personarolfuncionalInclude<ExtArgs> | null;
    /**
     * Filter, which personarolfuncional to fetch.
     */
    where?: Prisma.personarolfuncionalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of personarolfuncionals to fetch.
     */
    orderBy?: Prisma.personarolfuncionalOrderByWithRelationInput | Prisma.personarolfuncionalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for personarolfuncionals.
     */
    cursor?: Prisma.personarolfuncionalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` personarolfuncionals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` personarolfuncionals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of personarolfuncionals.
     */
    distinct?: Prisma.PersonarolfuncionalScalarFieldEnum | Prisma.PersonarolfuncionalScalarFieldEnum[];
};
/**
 * personarolfuncional findMany
 */
export type personarolfuncionalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personarolfuncional
     */
    select?: Prisma.personarolfuncionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personarolfuncional
     */
    omit?: Prisma.personarolfuncionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personarolfuncionalInclude<ExtArgs> | null;
    /**
     * Filter, which personarolfuncionals to fetch.
     */
    where?: Prisma.personarolfuncionalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of personarolfuncionals to fetch.
     */
    orderBy?: Prisma.personarolfuncionalOrderByWithRelationInput | Prisma.personarolfuncionalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing personarolfuncionals.
     */
    cursor?: Prisma.personarolfuncionalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` personarolfuncionals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` personarolfuncionals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of personarolfuncionals.
     */
    distinct?: Prisma.PersonarolfuncionalScalarFieldEnum | Prisma.PersonarolfuncionalScalarFieldEnum[];
};
/**
 * personarolfuncional create
 */
export type personarolfuncionalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personarolfuncional
     */
    select?: Prisma.personarolfuncionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personarolfuncional
     */
    omit?: Prisma.personarolfuncionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personarolfuncionalInclude<ExtArgs> | null;
    /**
     * The data needed to create a personarolfuncional.
     */
    data: Prisma.XOR<Prisma.personarolfuncionalCreateInput, Prisma.personarolfuncionalUncheckedCreateInput>;
};
/**
 * personarolfuncional createMany
 */
export type personarolfuncionalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many personarolfuncionals.
     */
    data: Prisma.personarolfuncionalCreateManyInput | Prisma.personarolfuncionalCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * personarolfuncional update
 */
export type personarolfuncionalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personarolfuncional
     */
    select?: Prisma.personarolfuncionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personarolfuncional
     */
    omit?: Prisma.personarolfuncionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personarolfuncionalInclude<ExtArgs> | null;
    /**
     * The data needed to update a personarolfuncional.
     */
    data: Prisma.XOR<Prisma.personarolfuncionalUpdateInput, Prisma.personarolfuncionalUncheckedUpdateInput>;
    /**
     * Choose, which personarolfuncional to update.
     */
    where: Prisma.personarolfuncionalWhereUniqueInput;
};
/**
 * personarolfuncional updateMany
 */
export type personarolfuncionalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update personarolfuncionals.
     */
    data: Prisma.XOR<Prisma.personarolfuncionalUpdateManyMutationInput, Prisma.personarolfuncionalUncheckedUpdateManyInput>;
    /**
     * Filter which personarolfuncionals to update
     */
    where?: Prisma.personarolfuncionalWhereInput;
    /**
     * Limit how many personarolfuncionals to update.
     */
    limit?: number;
};
/**
 * personarolfuncional upsert
 */
export type personarolfuncionalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personarolfuncional
     */
    select?: Prisma.personarolfuncionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personarolfuncional
     */
    omit?: Prisma.personarolfuncionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personarolfuncionalInclude<ExtArgs> | null;
    /**
     * The filter to search for the personarolfuncional to update in case it exists.
     */
    where: Prisma.personarolfuncionalWhereUniqueInput;
    /**
     * In case the personarolfuncional found by the `where` argument doesn't exist, create a new personarolfuncional with this data.
     */
    create: Prisma.XOR<Prisma.personarolfuncionalCreateInput, Prisma.personarolfuncionalUncheckedCreateInput>;
    /**
     * In case the personarolfuncional was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.personarolfuncionalUpdateInput, Prisma.personarolfuncionalUncheckedUpdateInput>;
};
/**
 * personarolfuncional delete
 */
export type personarolfuncionalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personarolfuncional
     */
    select?: Prisma.personarolfuncionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personarolfuncional
     */
    omit?: Prisma.personarolfuncionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personarolfuncionalInclude<ExtArgs> | null;
    /**
     * Filter which personarolfuncional to delete.
     */
    where: Prisma.personarolfuncionalWhereUniqueInput;
};
/**
 * personarolfuncional deleteMany
 */
export type personarolfuncionalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which personarolfuncionals to delete
     */
    where?: Prisma.personarolfuncionalWhereInput;
    /**
     * Limit how many personarolfuncionals to delete.
     */
    limit?: number;
};
/**
 * personarolfuncional without action
 */
export type personarolfuncionalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personarolfuncional
     */
    select?: Prisma.personarolfuncionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personarolfuncional
     */
    omit?: Prisma.personarolfuncionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personarolfuncionalInclude<ExtArgs> | null;
};
//# sourceMappingURL=personarolfuncional.d.ts.map