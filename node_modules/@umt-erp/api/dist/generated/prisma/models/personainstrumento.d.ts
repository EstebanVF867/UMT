import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model personainstrumento
 *
 */
export type personainstrumentoModel = runtime.Types.Result.DefaultSelection<Prisma.$personainstrumentoPayload>;
export type AggregatePersonainstrumento = {
    _count: PersonainstrumentoCountAggregateOutputType | null;
    _min: PersonainstrumentoMinAggregateOutputType | null;
    _max: PersonainstrumentoMaxAggregateOutputType | null;
};
export type PersonainstrumentoMinAggregateOutputType = {
    id: string | null;
    personaId: string | null;
    instrumentoId: string | null;
    principal: boolean | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PersonainstrumentoMaxAggregateOutputType = {
    id: string | null;
    personaId: string | null;
    instrumentoId: string | null;
    principal: boolean | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PersonainstrumentoCountAggregateOutputType = {
    id: number;
    personaId: number;
    instrumentoId: number;
    principal: number;
    fechaInicio: number;
    fechaFin: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PersonainstrumentoMinAggregateInputType = {
    id?: true;
    personaId?: true;
    instrumentoId?: true;
    principal?: true;
    fechaInicio?: true;
    fechaFin?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PersonainstrumentoMaxAggregateInputType = {
    id?: true;
    personaId?: true;
    instrumentoId?: true;
    principal?: true;
    fechaInicio?: true;
    fechaFin?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PersonainstrumentoCountAggregateInputType = {
    id?: true;
    personaId?: true;
    instrumentoId?: true;
    principal?: true;
    fechaInicio?: true;
    fechaFin?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PersonainstrumentoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which personainstrumento to aggregate.
     */
    where?: Prisma.personainstrumentoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of personainstrumentos to fetch.
     */
    orderBy?: Prisma.personainstrumentoOrderByWithRelationInput | Prisma.personainstrumentoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.personainstrumentoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` personainstrumentos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` personainstrumentos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned personainstrumentos
    **/
    _count?: true | PersonainstrumentoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PersonainstrumentoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PersonainstrumentoMaxAggregateInputType;
};
export type GetPersonainstrumentoAggregateType<T extends PersonainstrumentoAggregateArgs> = {
    [P in keyof T & keyof AggregatePersonainstrumento]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePersonainstrumento[P]> : Prisma.GetScalarType<T[P], AggregatePersonainstrumento[P]>;
};
export type personainstrumentoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.personainstrumentoWhereInput;
    orderBy?: Prisma.personainstrumentoOrderByWithAggregationInput | Prisma.personainstrumentoOrderByWithAggregationInput[];
    by: Prisma.PersonainstrumentoScalarFieldEnum[] | Prisma.PersonainstrumentoScalarFieldEnum;
    having?: Prisma.personainstrumentoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PersonainstrumentoCountAggregateInputType | true;
    _min?: PersonainstrumentoMinAggregateInputType;
    _max?: PersonainstrumentoMaxAggregateInputType;
};
export type PersonainstrumentoGroupByOutputType = {
    id: string;
    personaId: string;
    instrumentoId: string;
    principal: boolean;
    fechaInicio: Date;
    fechaFin: Date | null;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PersonainstrumentoCountAggregateOutputType | null;
    _min: PersonainstrumentoMinAggregateOutputType | null;
    _max: PersonainstrumentoMaxAggregateOutputType | null;
};
export type GetPersonainstrumentoGroupByPayload<T extends personainstrumentoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PersonainstrumentoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PersonainstrumentoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PersonainstrumentoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PersonainstrumentoGroupByOutputType[P]>;
}>>;
export type personainstrumentoWhereInput = {
    AND?: Prisma.personainstrumentoWhereInput | Prisma.personainstrumentoWhereInput[];
    OR?: Prisma.personainstrumentoWhereInput[];
    NOT?: Prisma.personainstrumentoWhereInput | Prisma.personainstrumentoWhereInput[];
    id?: Prisma.StringFilter<"personainstrumento"> | string;
    personaId?: Prisma.StringFilter<"personainstrumento"> | string;
    instrumentoId?: Prisma.StringFilter<"personainstrumento"> | string;
    principal?: Prisma.BoolFilter<"personainstrumento"> | boolean;
    fechaInicio?: Prisma.DateTimeFilter<"personainstrumento"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"personainstrumento"> | Date | string | null;
    observaciones?: Prisma.StringNullableFilter<"personainstrumento"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"personainstrumento"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"personainstrumento"> | Date | string;
    instrumento?: Prisma.XOR<Prisma.InstrumentoScalarRelationFilter, Prisma.instrumentoWhereInput>;
    persona?: Prisma.XOR<Prisma.PersonaScalarRelationFilter, Prisma.personaWhereInput>;
};
export type personainstrumentoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    instrumentoId?: Prisma.SortOrder;
    principal?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    instrumento?: Prisma.instrumentoOrderByWithRelationInput;
    persona?: Prisma.personaOrderByWithRelationInput;
    _relevance?: Prisma.personainstrumentoOrderByRelevanceInput;
};
export type personainstrumentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.personainstrumentoWhereInput | Prisma.personainstrumentoWhereInput[];
    OR?: Prisma.personainstrumentoWhereInput[];
    NOT?: Prisma.personainstrumentoWhereInput | Prisma.personainstrumentoWhereInput[];
    personaId?: Prisma.StringFilter<"personainstrumento"> | string;
    instrumentoId?: Prisma.StringFilter<"personainstrumento"> | string;
    principal?: Prisma.BoolFilter<"personainstrumento"> | boolean;
    fechaInicio?: Prisma.DateTimeFilter<"personainstrumento"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"personainstrumento"> | Date | string | null;
    observaciones?: Prisma.StringNullableFilter<"personainstrumento"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"personainstrumento"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"personainstrumento"> | Date | string;
    instrumento?: Prisma.XOR<Prisma.InstrumentoScalarRelationFilter, Prisma.instrumentoWhereInput>;
    persona?: Prisma.XOR<Prisma.PersonaScalarRelationFilter, Prisma.personaWhereInput>;
}, "id">;
export type personainstrumentoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    instrumentoId?: Prisma.SortOrder;
    principal?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.personainstrumentoCountOrderByAggregateInput;
    _max?: Prisma.personainstrumentoMaxOrderByAggregateInput;
    _min?: Prisma.personainstrumentoMinOrderByAggregateInput;
};
export type personainstrumentoScalarWhereWithAggregatesInput = {
    AND?: Prisma.personainstrumentoScalarWhereWithAggregatesInput | Prisma.personainstrumentoScalarWhereWithAggregatesInput[];
    OR?: Prisma.personainstrumentoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.personainstrumentoScalarWhereWithAggregatesInput | Prisma.personainstrumentoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"personainstrumento"> | string;
    personaId?: Prisma.StringWithAggregatesFilter<"personainstrumento"> | string;
    instrumentoId?: Prisma.StringWithAggregatesFilter<"personainstrumento"> | string;
    principal?: Prisma.BoolWithAggregatesFilter<"personainstrumento"> | boolean;
    fechaInicio?: Prisma.DateTimeWithAggregatesFilter<"personainstrumento"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableWithAggregatesFilter<"personainstrumento"> | Date | string | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"personainstrumento"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"personainstrumento"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"personainstrumento"> | Date | string;
};
export type personainstrumentoCreateInput = {
    id: string;
    principal?: boolean;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    instrumento: Prisma.instrumentoCreateNestedOneWithoutPersonainstrumentoInput;
    persona: Prisma.personaCreateNestedOneWithoutPersonainstrumentoInput;
};
export type personainstrumentoUncheckedCreateInput = {
    id: string;
    personaId: string;
    instrumentoId: string;
    principal?: boolean;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type personainstrumentoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    instrumento?: Prisma.instrumentoUpdateOneRequiredWithoutPersonainstrumentoNestedInput;
    persona?: Prisma.personaUpdateOneRequiredWithoutPersonainstrumentoNestedInput;
};
export type personainstrumentoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    instrumentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type personainstrumentoCreateManyInput = {
    id: string;
    personaId: string;
    instrumentoId: string;
    principal?: boolean;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type personainstrumentoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type personainstrumentoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    instrumentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PersonainstrumentoListRelationFilter = {
    every?: Prisma.personainstrumentoWhereInput;
    some?: Prisma.personainstrumentoWhereInput;
    none?: Prisma.personainstrumentoWhereInput;
};
export type personainstrumentoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type personainstrumentoOrderByRelevanceInput = {
    fields: Prisma.personainstrumentoOrderByRelevanceFieldEnum | Prisma.personainstrumentoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type personainstrumentoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    instrumentoId?: Prisma.SortOrder;
    principal?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type personainstrumentoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    instrumentoId?: Prisma.SortOrder;
    principal?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type personainstrumentoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    instrumentoId?: Prisma.SortOrder;
    principal?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type personainstrumentoCreateNestedManyWithoutInstrumentoInput = {
    create?: Prisma.XOR<Prisma.personainstrumentoCreateWithoutInstrumentoInput, Prisma.personainstrumentoUncheckedCreateWithoutInstrumentoInput> | Prisma.personainstrumentoCreateWithoutInstrumentoInput[] | Prisma.personainstrumentoUncheckedCreateWithoutInstrumentoInput[];
    connectOrCreate?: Prisma.personainstrumentoCreateOrConnectWithoutInstrumentoInput | Prisma.personainstrumentoCreateOrConnectWithoutInstrumentoInput[];
    createMany?: Prisma.personainstrumentoCreateManyInstrumentoInputEnvelope;
    connect?: Prisma.personainstrumentoWhereUniqueInput | Prisma.personainstrumentoWhereUniqueInput[];
};
export type personainstrumentoUncheckedCreateNestedManyWithoutInstrumentoInput = {
    create?: Prisma.XOR<Prisma.personainstrumentoCreateWithoutInstrumentoInput, Prisma.personainstrumentoUncheckedCreateWithoutInstrumentoInput> | Prisma.personainstrumentoCreateWithoutInstrumentoInput[] | Prisma.personainstrumentoUncheckedCreateWithoutInstrumentoInput[];
    connectOrCreate?: Prisma.personainstrumentoCreateOrConnectWithoutInstrumentoInput | Prisma.personainstrumentoCreateOrConnectWithoutInstrumentoInput[];
    createMany?: Prisma.personainstrumentoCreateManyInstrumentoInputEnvelope;
    connect?: Prisma.personainstrumentoWhereUniqueInput | Prisma.personainstrumentoWhereUniqueInput[];
};
export type personainstrumentoUpdateManyWithoutInstrumentoNestedInput = {
    create?: Prisma.XOR<Prisma.personainstrumentoCreateWithoutInstrumentoInput, Prisma.personainstrumentoUncheckedCreateWithoutInstrumentoInput> | Prisma.personainstrumentoCreateWithoutInstrumentoInput[] | Prisma.personainstrumentoUncheckedCreateWithoutInstrumentoInput[];
    connectOrCreate?: Prisma.personainstrumentoCreateOrConnectWithoutInstrumentoInput | Prisma.personainstrumentoCreateOrConnectWithoutInstrumentoInput[];
    upsert?: Prisma.personainstrumentoUpsertWithWhereUniqueWithoutInstrumentoInput | Prisma.personainstrumentoUpsertWithWhereUniqueWithoutInstrumentoInput[];
    createMany?: Prisma.personainstrumentoCreateManyInstrumentoInputEnvelope;
    set?: Prisma.personainstrumentoWhereUniqueInput | Prisma.personainstrumentoWhereUniqueInput[];
    disconnect?: Prisma.personainstrumentoWhereUniqueInput | Prisma.personainstrumentoWhereUniqueInput[];
    delete?: Prisma.personainstrumentoWhereUniqueInput | Prisma.personainstrumentoWhereUniqueInput[];
    connect?: Prisma.personainstrumentoWhereUniqueInput | Prisma.personainstrumentoWhereUniqueInput[];
    update?: Prisma.personainstrumentoUpdateWithWhereUniqueWithoutInstrumentoInput | Prisma.personainstrumentoUpdateWithWhereUniqueWithoutInstrumentoInput[];
    updateMany?: Prisma.personainstrumentoUpdateManyWithWhereWithoutInstrumentoInput | Prisma.personainstrumentoUpdateManyWithWhereWithoutInstrumentoInput[];
    deleteMany?: Prisma.personainstrumentoScalarWhereInput | Prisma.personainstrumentoScalarWhereInput[];
};
export type personainstrumentoUncheckedUpdateManyWithoutInstrumentoNestedInput = {
    create?: Prisma.XOR<Prisma.personainstrumentoCreateWithoutInstrumentoInput, Prisma.personainstrumentoUncheckedCreateWithoutInstrumentoInput> | Prisma.personainstrumentoCreateWithoutInstrumentoInput[] | Prisma.personainstrumentoUncheckedCreateWithoutInstrumentoInput[];
    connectOrCreate?: Prisma.personainstrumentoCreateOrConnectWithoutInstrumentoInput | Prisma.personainstrumentoCreateOrConnectWithoutInstrumentoInput[];
    upsert?: Prisma.personainstrumentoUpsertWithWhereUniqueWithoutInstrumentoInput | Prisma.personainstrumentoUpsertWithWhereUniqueWithoutInstrumentoInput[];
    createMany?: Prisma.personainstrumentoCreateManyInstrumentoInputEnvelope;
    set?: Prisma.personainstrumentoWhereUniqueInput | Prisma.personainstrumentoWhereUniqueInput[];
    disconnect?: Prisma.personainstrumentoWhereUniqueInput | Prisma.personainstrumentoWhereUniqueInput[];
    delete?: Prisma.personainstrumentoWhereUniqueInput | Prisma.personainstrumentoWhereUniqueInput[];
    connect?: Prisma.personainstrumentoWhereUniqueInput | Prisma.personainstrumentoWhereUniqueInput[];
    update?: Prisma.personainstrumentoUpdateWithWhereUniqueWithoutInstrumentoInput | Prisma.personainstrumentoUpdateWithWhereUniqueWithoutInstrumentoInput[];
    updateMany?: Prisma.personainstrumentoUpdateManyWithWhereWithoutInstrumentoInput | Prisma.personainstrumentoUpdateManyWithWhereWithoutInstrumentoInput[];
    deleteMany?: Prisma.personainstrumentoScalarWhereInput | Prisma.personainstrumentoScalarWhereInput[];
};
export type personainstrumentoCreateNestedManyWithoutPersonaInput = {
    create?: Prisma.XOR<Prisma.personainstrumentoCreateWithoutPersonaInput, Prisma.personainstrumentoUncheckedCreateWithoutPersonaInput> | Prisma.personainstrumentoCreateWithoutPersonaInput[] | Prisma.personainstrumentoUncheckedCreateWithoutPersonaInput[];
    connectOrCreate?: Prisma.personainstrumentoCreateOrConnectWithoutPersonaInput | Prisma.personainstrumentoCreateOrConnectWithoutPersonaInput[];
    createMany?: Prisma.personainstrumentoCreateManyPersonaInputEnvelope;
    connect?: Prisma.personainstrumentoWhereUniqueInput | Prisma.personainstrumentoWhereUniqueInput[];
};
export type personainstrumentoUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: Prisma.XOR<Prisma.personainstrumentoCreateWithoutPersonaInput, Prisma.personainstrumentoUncheckedCreateWithoutPersonaInput> | Prisma.personainstrumentoCreateWithoutPersonaInput[] | Prisma.personainstrumentoUncheckedCreateWithoutPersonaInput[];
    connectOrCreate?: Prisma.personainstrumentoCreateOrConnectWithoutPersonaInput | Prisma.personainstrumentoCreateOrConnectWithoutPersonaInput[];
    createMany?: Prisma.personainstrumentoCreateManyPersonaInputEnvelope;
    connect?: Prisma.personainstrumentoWhereUniqueInput | Prisma.personainstrumentoWhereUniqueInput[];
};
export type personainstrumentoUpdateManyWithoutPersonaNestedInput = {
    create?: Prisma.XOR<Prisma.personainstrumentoCreateWithoutPersonaInput, Prisma.personainstrumentoUncheckedCreateWithoutPersonaInput> | Prisma.personainstrumentoCreateWithoutPersonaInput[] | Prisma.personainstrumentoUncheckedCreateWithoutPersonaInput[];
    connectOrCreate?: Prisma.personainstrumentoCreateOrConnectWithoutPersonaInput | Prisma.personainstrumentoCreateOrConnectWithoutPersonaInput[];
    upsert?: Prisma.personainstrumentoUpsertWithWhereUniqueWithoutPersonaInput | Prisma.personainstrumentoUpsertWithWhereUniqueWithoutPersonaInput[];
    createMany?: Prisma.personainstrumentoCreateManyPersonaInputEnvelope;
    set?: Prisma.personainstrumentoWhereUniqueInput | Prisma.personainstrumentoWhereUniqueInput[];
    disconnect?: Prisma.personainstrumentoWhereUniqueInput | Prisma.personainstrumentoWhereUniqueInput[];
    delete?: Prisma.personainstrumentoWhereUniqueInput | Prisma.personainstrumentoWhereUniqueInput[];
    connect?: Prisma.personainstrumentoWhereUniqueInput | Prisma.personainstrumentoWhereUniqueInput[];
    update?: Prisma.personainstrumentoUpdateWithWhereUniqueWithoutPersonaInput | Prisma.personainstrumentoUpdateWithWhereUniqueWithoutPersonaInput[];
    updateMany?: Prisma.personainstrumentoUpdateManyWithWhereWithoutPersonaInput | Prisma.personainstrumentoUpdateManyWithWhereWithoutPersonaInput[];
    deleteMany?: Prisma.personainstrumentoScalarWhereInput | Prisma.personainstrumentoScalarWhereInput[];
};
export type personainstrumentoUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: Prisma.XOR<Prisma.personainstrumentoCreateWithoutPersonaInput, Prisma.personainstrumentoUncheckedCreateWithoutPersonaInput> | Prisma.personainstrumentoCreateWithoutPersonaInput[] | Prisma.personainstrumentoUncheckedCreateWithoutPersonaInput[];
    connectOrCreate?: Prisma.personainstrumentoCreateOrConnectWithoutPersonaInput | Prisma.personainstrumentoCreateOrConnectWithoutPersonaInput[];
    upsert?: Prisma.personainstrumentoUpsertWithWhereUniqueWithoutPersonaInput | Prisma.personainstrumentoUpsertWithWhereUniqueWithoutPersonaInput[];
    createMany?: Prisma.personainstrumentoCreateManyPersonaInputEnvelope;
    set?: Prisma.personainstrumentoWhereUniqueInput | Prisma.personainstrumentoWhereUniqueInput[];
    disconnect?: Prisma.personainstrumentoWhereUniqueInput | Prisma.personainstrumentoWhereUniqueInput[];
    delete?: Prisma.personainstrumentoWhereUniqueInput | Prisma.personainstrumentoWhereUniqueInput[];
    connect?: Prisma.personainstrumentoWhereUniqueInput | Prisma.personainstrumentoWhereUniqueInput[];
    update?: Prisma.personainstrumentoUpdateWithWhereUniqueWithoutPersonaInput | Prisma.personainstrumentoUpdateWithWhereUniqueWithoutPersonaInput[];
    updateMany?: Prisma.personainstrumentoUpdateManyWithWhereWithoutPersonaInput | Prisma.personainstrumentoUpdateManyWithWhereWithoutPersonaInput[];
    deleteMany?: Prisma.personainstrumentoScalarWhereInput | Prisma.personainstrumentoScalarWhereInput[];
};
export type personainstrumentoCreateWithoutInstrumentoInput = {
    id: string;
    principal?: boolean;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    persona: Prisma.personaCreateNestedOneWithoutPersonainstrumentoInput;
};
export type personainstrumentoUncheckedCreateWithoutInstrumentoInput = {
    id: string;
    personaId: string;
    principal?: boolean;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type personainstrumentoCreateOrConnectWithoutInstrumentoInput = {
    where: Prisma.personainstrumentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.personainstrumentoCreateWithoutInstrumentoInput, Prisma.personainstrumentoUncheckedCreateWithoutInstrumentoInput>;
};
export type personainstrumentoCreateManyInstrumentoInputEnvelope = {
    data: Prisma.personainstrumentoCreateManyInstrumentoInput | Prisma.personainstrumentoCreateManyInstrumentoInput[];
    skipDuplicates?: boolean;
};
export type personainstrumentoUpsertWithWhereUniqueWithoutInstrumentoInput = {
    where: Prisma.personainstrumentoWhereUniqueInput;
    update: Prisma.XOR<Prisma.personainstrumentoUpdateWithoutInstrumentoInput, Prisma.personainstrumentoUncheckedUpdateWithoutInstrumentoInput>;
    create: Prisma.XOR<Prisma.personainstrumentoCreateWithoutInstrumentoInput, Prisma.personainstrumentoUncheckedCreateWithoutInstrumentoInput>;
};
export type personainstrumentoUpdateWithWhereUniqueWithoutInstrumentoInput = {
    where: Prisma.personainstrumentoWhereUniqueInput;
    data: Prisma.XOR<Prisma.personainstrumentoUpdateWithoutInstrumentoInput, Prisma.personainstrumentoUncheckedUpdateWithoutInstrumentoInput>;
};
export type personainstrumentoUpdateManyWithWhereWithoutInstrumentoInput = {
    where: Prisma.personainstrumentoScalarWhereInput;
    data: Prisma.XOR<Prisma.personainstrumentoUpdateManyMutationInput, Prisma.personainstrumentoUncheckedUpdateManyWithoutInstrumentoInput>;
};
export type personainstrumentoScalarWhereInput = {
    AND?: Prisma.personainstrumentoScalarWhereInput | Prisma.personainstrumentoScalarWhereInput[];
    OR?: Prisma.personainstrumentoScalarWhereInput[];
    NOT?: Prisma.personainstrumentoScalarWhereInput | Prisma.personainstrumentoScalarWhereInput[];
    id?: Prisma.StringFilter<"personainstrumento"> | string;
    personaId?: Prisma.StringFilter<"personainstrumento"> | string;
    instrumentoId?: Prisma.StringFilter<"personainstrumento"> | string;
    principal?: Prisma.BoolFilter<"personainstrumento"> | boolean;
    fechaInicio?: Prisma.DateTimeFilter<"personainstrumento"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"personainstrumento"> | Date | string | null;
    observaciones?: Prisma.StringNullableFilter<"personainstrumento"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"personainstrumento"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"personainstrumento"> | Date | string;
};
export type personainstrumentoCreateWithoutPersonaInput = {
    id: string;
    principal?: boolean;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    instrumento: Prisma.instrumentoCreateNestedOneWithoutPersonainstrumentoInput;
};
export type personainstrumentoUncheckedCreateWithoutPersonaInput = {
    id: string;
    instrumentoId: string;
    principal?: boolean;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type personainstrumentoCreateOrConnectWithoutPersonaInput = {
    where: Prisma.personainstrumentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.personainstrumentoCreateWithoutPersonaInput, Prisma.personainstrumentoUncheckedCreateWithoutPersonaInput>;
};
export type personainstrumentoCreateManyPersonaInputEnvelope = {
    data: Prisma.personainstrumentoCreateManyPersonaInput | Prisma.personainstrumentoCreateManyPersonaInput[];
    skipDuplicates?: boolean;
};
export type personainstrumentoUpsertWithWhereUniqueWithoutPersonaInput = {
    where: Prisma.personainstrumentoWhereUniqueInput;
    update: Prisma.XOR<Prisma.personainstrumentoUpdateWithoutPersonaInput, Prisma.personainstrumentoUncheckedUpdateWithoutPersonaInput>;
    create: Prisma.XOR<Prisma.personainstrumentoCreateWithoutPersonaInput, Prisma.personainstrumentoUncheckedCreateWithoutPersonaInput>;
};
export type personainstrumentoUpdateWithWhereUniqueWithoutPersonaInput = {
    where: Prisma.personainstrumentoWhereUniqueInput;
    data: Prisma.XOR<Prisma.personainstrumentoUpdateWithoutPersonaInput, Prisma.personainstrumentoUncheckedUpdateWithoutPersonaInput>;
};
export type personainstrumentoUpdateManyWithWhereWithoutPersonaInput = {
    where: Prisma.personainstrumentoScalarWhereInput;
    data: Prisma.XOR<Prisma.personainstrumentoUpdateManyMutationInput, Prisma.personainstrumentoUncheckedUpdateManyWithoutPersonaInput>;
};
export type personainstrumentoCreateManyInstrumentoInput = {
    id: string;
    personaId: string;
    principal?: boolean;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type personainstrumentoUpdateWithoutInstrumentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    persona?: Prisma.personaUpdateOneRequiredWithoutPersonainstrumentoNestedInput;
};
export type personainstrumentoUncheckedUpdateWithoutInstrumentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type personainstrumentoUncheckedUpdateManyWithoutInstrumentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type personainstrumentoCreateManyPersonaInput = {
    id: string;
    instrumentoId: string;
    principal?: boolean;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type personainstrumentoUpdateWithoutPersonaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    instrumento?: Prisma.instrumentoUpdateOneRequiredWithoutPersonainstrumentoNestedInput;
};
export type personainstrumentoUncheckedUpdateWithoutPersonaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    instrumentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type personainstrumentoUncheckedUpdateManyWithoutPersonaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    instrumentoId?: Prisma.StringFieldUpdateOperationsInput | string;
    principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type personainstrumentoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    personaId?: boolean;
    instrumentoId?: boolean;
    principal?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    instrumento?: boolean | Prisma.instrumentoDefaultArgs<ExtArgs>;
    persona?: boolean | Prisma.personaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["personainstrumento"]>;
export type personainstrumentoSelectScalar = {
    id?: boolean;
    personaId?: boolean;
    instrumentoId?: boolean;
    principal?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type personainstrumentoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "personaId" | "instrumentoId" | "principal" | "fechaInicio" | "fechaFin" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["personainstrumento"]>;
export type personainstrumentoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    instrumento?: boolean | Prisma.instrumentoDefaultArgs<ExtArgs>;
    persona?: boolean | Prisma.personaDefaultArgs<ExtArgs>;
};
export type $personainstrumentoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "personainstrumento";
    objects: {
        instrumento: Prisma.$instrumentoPayload<ExtArgs>;
        persona: Prisma.$personaPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        personaId: string;
        instrumentoId: string;
        principal: boolean;
        fechaInicio: Date;
        fechaFin: Date | null;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["personainstrumento"]>;
    composites: {};
};
export type personainstrumentoGetPayload<S extends boolean | null | undefined | personainstrumentoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$personainstrumentoPayload, S>;
export type personainstrumentoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<personainstrumentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PersonainstrumentoCountAggregateInputType | true;
};
export interface personainstrumentoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['personainstrumento'];
        meta: {
            name: 'personainstrumento';
        };
    };
    /**
     * Find zero or one Personainstrumento that matches the filter.
     * @param {personainstrumentoFindUniqueArgs} args - Arguments to find a Personainstrumento
     * @example
     * // Get one Personainstrumento
     * const personainstrumento = await prisma.personainstrumento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends personainstrumentoFindUniqueArgs>(args: Prisma.SelectSubset<T, personainstrumentoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__personainstrumentoClient<runtime.Types.Result.GetResult<Prisma.$personainstrumentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Personainstrumento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {personainstrumentoFindUniqueOrThrowArgs} args - Arguments to find a Personainstrumento
     * @example
     * // Get one Personainstrumento
     * const personainstrumento = await prisma.personainstrumento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends personainstrumentoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, personainstrumentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__personainstrumentoClient<runtime.Types.Result.GetResult<Prisma.$personainstrumentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Personainstrumento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personainstrumentoFindFirstArgs} args - Arguments to find a Personainstrumento
     * @example
     * // Get one Personainstrumento
     * const personainstrumento = await prisma.personainstrumento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends personainstrumentoFindFirstArgs>(args?: Prisma.SelectSubset<T, personainstrumentoFindFirstArgs<ExtArgs>>): Prisma.Prisma__personainstrumentoClient<runtime.Types.Result.GetResult<Prisma.$personainstrumentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Personainstrumento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personainstrumentoFindFirstOrThrowArgs} args - Arguments to find a Personainstrumento
     * @example
     * // Get one Personainstrumento
     * const personainstrumento = await prisma.personainstrumento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends personainstrumentoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, personainstrumentoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__personainstrumentoClient<runtime.Types.Result.GetResult<Prisma.$personainstrumentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Personainstrumentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personainstrumentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personainstrumentos
     * const personainstrumentos = await prisma.personainstrumento.findMany()
     *
     * // Get first 10 Personainstrumentos
     * const personainstrumentos = await prisma.personainstrumento.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const personainstrumentoWithIdOnly = await prisma.personainstrumento.findMany({ select: { id: true } })
     *
     */
    findMany<T extends personainstrumentoFindManyArgs>(args?: Prisma.SelectSubset<T, personainstrumentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$personainstrumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Personainstrumento.
     * @param {personainstrumentoCreateArgs} args - Arguments to create a Personainstrumento.
     * @example
     * // Create one Personainstrumento
     * const Personainstrumento = await prisma.personainstrumento.create({
     *   data: {
     *     // ... data to create a Personainstrumento
     *   }
     * })
     *
     */
    create<T extends personainstrumentoCreateArgs>(args: Prisma.SelectSubset<T, personainstrumentoCreateArgs<ExtArgs>>): Prisma.Prisma__personainstrumentoClient<runtime.Types.Result.GetResult<Prisma.$personainstrumentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Personainstrumentos.
     * @param {personainstrumentoCreateManyArgs} args - Arguments to create many Personainstrumentos.
     * @example
     * // Create many Personainstrumentos
     * const personainstrumento = await prisma.personainstrumento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends personainstrumentoCreateManyArgs>(args?: Prisma.SelectSubset<T, personainstrumentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Personainstrumento.
     * @param {personainstrumentoDeleteArgs} args - Arguments to delete one Personainstrumento.
     * @example
     * // Delete one Personainstrumento
     * const Personainstrumento = await prisma.personainstrumento.delete({
     *   where: {
     *     // ... filter to delete one Personainstrumento
     *   }
     * })
     *
     */
    delete<T extends personainstrumentoDeleteArgs>(args: Prisma.SelectSubset<T, personainstrumentoDeleteArgs<ExtArgs>>): Prisma.Prisma__personainstrumentoClient<runtime.Types.Result.GetResult<Prisma.$personainstrumentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Personainstrumento.
     * @param {personainstrumentoUpdateArgs} args - Arguments to update one Personainstrumento.
     * @example
     * // Update one Personainstrumento
     * const personainstrumento = await prisma.personainstrumento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends personainstrumentoUpdateArgs>(args: Prisma.SelectSubset<T, personainstrumentoUpdateArgs<ExtArgs>>): Prisma.Prisma__personainstrumentoClient<runtime.Types.Result.GetResult<Prisma.$personainstrumentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Personainstrumentos.
     * @param {personainstrumentoDeleteManyArgs} args - Arguments to filter Personainstrumentos to delete.
     * @example
     * // Delete a few Personainstrumentos
     * const { count } = await prisma.personainstrumento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends personainstrumentoDeleteManyArgs>(args?: Prisma.SelectSubset<T, personainstrumentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Personainstrumentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personainstrumentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personainstrumentos
     * const personainstrumento = await prisma.personainstrumento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends personainstrumentoUpdateManyArgs>(args: Prisma.SelectSubset<T, personainstrumentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Personainstrumento.
     * @param {personainstrumentoUpsertArgs} args - Arguments to update or create a Personainstrumento.
     * @example
     * // Update or create a Personainstrumento
     * const personainstrumento = await prisma.personainstrumento.upsert({
     *   create: {
     *     // ... data to create a Personainstrumento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Personainstrumento we want to update
     *   }
     * })
     */
    upsert<T extends personainstrumentoUpsertArgs>(args: Prisma.SelectSubset<T, personainstrumentoUpsertArgs<ExtArgs>>): Prisma.Prisma__personainstrumentoClient<runtime.Types.Result.GetResult<Prisma.$personainstrumentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Personainstrumentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personainstrumentoCountArgs} args - Arguments to filter Personainstrumentos to count.
     * @example
     * // Count the number of Personainstrumentos
     * const count = await prisma.personainstrumento.count({
     *   where: {
     *     // ... the filter for the Personainstrumentos we want to count
     *   }
     * })
    **/
    count<T extends personainstrumentoCountArgs>(args?: Prisma.Subset<T, personainstrumentoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PersonainstrumentoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Personainstrumento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonainstrumentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonainstrumentoAggregateArgs>(args: Prisma.Subset<T, PersonainstrumentoAggregateArgs>): Prisma.PrismaPromise<GetPersonainstrumentoAggregateType<T>>;
    /**
     * Group by Personainstrumento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personainstrumentoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends personainstrumentoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: personainstrumentoGroupByArgs['orderBy'];
    } : {
        orderBy?: personainstrumentoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, personainstrumentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonainstrumentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the personainstrumento model
     */
    readonly fields: personainstrumentoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for personainstrumento.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__personainstrumentoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    instrumento<T extends Prisma.instrumentoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.instrumentoDefaultArgs<ExtArgs>>): Prisma.Prisma__instrumentoClient<runtime.Types.Result.GetResult<Prisma.$instrumentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the personainstrumento model
 */
export interface personainstrumentoFieldRefs {
    readonly id: Prisma.FieldRef<"personainstrumento", 'String'>;
    readonly personaId: Prisma.FieldRef<"personainstrumento", 'String'>;
    readonly instrumentoId: Prisma.FieldRef<"personainstrumento", 'String'>;
    readonly principal: Prisma.FieldRef<"personainstrumento", 'Boolean'>;
    readonly fechaInicio: Prisma.FieldRef<"personainstrumento", 'DateTime'>;
    readonly fechaFin: Prisma.FieldRef<"personainstrumento", 'DateTime'>;
    readonly observaciones: Prisma.FieldRef<"personainstrumento", 'String'>;
    readonly createdAt: Prisma.FieldRef<"personainstrumento", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"personainstrumento", 'DateTime'>;
}
/**
 * personainstrumento findUnique
 */
export type personainstrumentoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personainstrumento
     */
    select?: Prisma.personainstrumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personainstrumento
     */
    omit?: Prisma.personainstrumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personainstrumentoInclude<ExtArgs> | null;
    /**
     * Filter, which personainstrumento to fetch.
     */
    where: Prisma.personainstrumentoWhereUniqueInput;
};
/**
 * personainstrumento findUniqueOrThrow
 */
export type personainstrumentoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personainstrumento
     */
    select?: Prisma.personainstrumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personainstrumento
     */
    omit?: Prisma.personainstrumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personainstrumentoInclude<ExtArgs> | null;
    /**
     * Filter, which personainstrumento to fetch.
     */
    where: Prisma.personainstrumentoWhereUniqueInput;
};
/**
 * personainstrumento findFirst
 */
export type personainstrumentoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personainstrumento
     */
    select?: Prisma.personainstrumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personainstrumento
     */
    omit?: Prisma.personainstrumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personainstrumentoInclude<ExtArgs> | null;
    /**
     * Filter, which personainstrumento to fetch.
     */
    where?: Prisma.personainstrumentoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of personainstrumentos to fetch.
     */
    orderBy?: Prisma.personainstrumentoOrderByWithRelationInput | Prisma.personainstrumentoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for personainstrumentos.
     */
    cursor?: Prisma.personainstrumentoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` personainstrumentos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` personainstrumentos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of personainstrumentos.
     */
    distinct?: Prisma.PersonainstrumentoScalarFieldEnum | Prisma.PersonainstrumentoScalarFieldEnum[];
};
/**
 * personainstrumento findFirstOrThrow
 */
export type personainstrumentoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personainstrumento
     */
    select?: Prisma.personainstrumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personainstrumento
     */
    omit?: Prisma.personainstrumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personainstrumentoInclude<ExtArgs> | null;
    /**
     * Filter, which personainstrumento to fetch.
     */
    where?: Prisma.personainstrumentoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of personainstrumentos to fetch.
     */
    orderBy?: Prisma.personainstrumentoOrderByWithRelationInput | Prisma.personainstrumentoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for personainstrumentos.
     */
    cursor?: Prisma.personainstrumentoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` personainstrumentos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` personainstrumentos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of personainstrumentos.
     */
    distinct?: Prisma.PersonainstrumentoScalarFieldEnum | Prisma.PersonainstrumentoScalarFieldEnum[];
};
/**
 * personainstrumento findMany
 */
export type personainstrumentoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personainstrumento
     */
    select?: Prisma.personainstrumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personainstrumento
     */
    omit?: Prisma.personainstrumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personainstrumentoInclude<ExtArgs> | null;
    /**
     * Filter, which personainstrumentos to fetch.
     */
    where?: Prisma.personainstrumentoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of personainstrumentos to fetch.
     */
    orderBy?: Prisma.personainstrumentoOrderByWithRelationInput | Prisma.personainstrumentoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing personainstrumentos.
     */
    cursor?: Prisma.personainstrumentoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` personainstrumentos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` personainstrumentos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of personainstrumentos.
     */
    distinct?: Prisma.PersonainstrumentoScalarFieldEnum | Prisma.PersonainstrumentoScalarFieldEnum[];
};
/**
 * personainstrumento create
 */
export type personainstrumentoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personainstrumento
     */
    select?: Prisma.personainstrumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personainstrumento
     */
    omit?: Prisma.personainstrumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personainstrumentoInclude<ExtArgs> | null;
    /**
     * The data needed to create a personainstrumento.
     */
    data: Prisma.XOR<Prisma.personainstrumentoCreateInput, Prisma.personainstrumentoUncheckedCreateInput>;
};
/**
 * personainstrumento createMany
 */
export type personainstrumentoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many personainstrumentos.
     */
    data: Prisma.personainstrumentoCreateManyInput | Prisma.personainstrumentoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * personainstrumento update
 */
export type personainstrumentoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personainstrumento
     */
    select?: Prisma.personainstrumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personainstrumento
     */
    omit?: Prisma.personainstrumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personainstrumentoInclude<ExtArgs> | null;
    /**
     * The data needed to update a personainstrumento.
     */
    data: Prisma.XOR<Prisma.personainstrumentoUpdateInput, Prisma.personainstrumentoUncheckedUpdateInput>;
    /**
     * Choose, which personainstrumento to update.
     */
    where: Prisma.personainstrumentoWhereUniqueInput;
};
/**
 * personainstrumento updateMany
 */
export type personainstrumentoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update personainstrumentos.
     */
    data: Prisma.XOR<Prisma.personainstrumentoUpdateManyMutationInput, Prisma.personainstrumentoUncheckedUpdateManyInput>;
    /**
     * Filter which personainstrumentos to update
     */
    where?: Prisma.personainstrumentoWhereInput;
    /**
     * Limit how many personainstrumentos to update.
     */
    limit?: number;
};
/**
 * personainstrumento upsert
 */
export type personainstrumentoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personainstrumento
     */
    select?: Prisma.personainstrumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personainstrumento
     */
    omit?: Prisma.personainstrumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personainstrumentoInclude<ExtArgs> | null;
    /**
     * The filter to search for the personainstrumento to update in case it exists.
     */
    where: Prisma.personainstrumentoWhereUniqueInput;
    /**
     * In case the personainstrumento found by the `where` argument doesn't exist, create a new personainstrumento with this data.
     */
    create: Prisma.XOR<Prisma.personainstrumentoCreateInput, Prisma.personainstrumentoUncheckedCreateInput>;
    /**
     * In case the personainstrumento was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.personainstrumentoUpdateInput, Prisma.personainstrumentoUncheckedUpdateInput>;
};
/**
 * personainstrumento delete
 */
export type personainstrumentoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personainstrumento
     */
    select?: Prisma.personainstrumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personainstrumento
     */
    omit?: Prisma.personainstrumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personainstrumentoInclude<ExtArgs> | null;
    /**
     * Filter which personainstrumento to delete.
     */
    where: Prisma.personainstrumentoWhereUniqueInput;
};
/**
 * personainstrumento deleteMany
 */
export type personainstrumentoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which personainstrumentos to delete
     */
    where?: Prisma.personainstrumentoWhereInput;
    /**
     * Limit how many personainstrumentos to delete.
     */
    limit?: number;
};
/**
 * personainstrumento without action
 */
export type personainstrumentoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personainstrumento
     */
    select?: Prisma.personainstrumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personainstrumento
     */
    omit?: Prisma.personainstrumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personainstrumentoInclude<ExtArgs> | null;
};
//# sourceMappingURL=personainstrumento.d.ts.map