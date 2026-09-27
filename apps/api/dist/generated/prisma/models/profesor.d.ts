import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model profesor
 *
 */
export type profesorModel = runtime.Types.Result.DefaultSelection<Prisma.$profesorPayload>;
export type AggregateProfesor = {
    _count: ProfesorCountAggregateOutputType | null;
    _min: ProfesorMinAggregateOutputType | null;
    _max: ProfesorMaxAggregateOutputType | null;
};
export type ProfesorMinAggregateOutputType = {
    id: string | null;
    personaId: string | null;
    fechaAlta: Date | null;
    fechaBaja: Date | null;
    motivoBaja: $Enums.profesor_motivoBaja | null;
    activo: boolean | null;
    observaciones: string | null;
};
export type ProfesorMaxAggregateOutputType = {
    id: string | null;
    personaId: string | null;
    fechaAlta: Date | null;
    fechaBaja: Date | null;
    motivoBaja: $Enums.profesor_motivoBaja | null;
    activo: boolean | null;
    observaciones: string | null;
};
export type ProfesorCountAggregateOutputType = {
    id: number;
    personaId: number;
    fechaAlta: number;
    fechaBaja: number;
    motivoBaja: number;
    activo: number;
    observaciones: number;
    _all: number;
};
export type ProfesorMinAggregateInputType = {
    id?: true;
    personaId?: true;
    fechaAlta?: true;
    fechaBaja?: true;
    motivoBaja?: true;
    activo?: true;
    observaciones?: true;
};
export type ProfesorMaxAggregateInputType = {
    id?: true;
    personaId?: true;
    fechaAlta?: true;
    fechaBaja?: true;
    motivoBaja?: true;
    activo?: true;
    observaciones?: true;
};
export type ProfesorCountAggregateInputType = {
    id?: true;
    personaId?: true;
    fechaAlta?: true;
    fechaBaja?: true;
    motivoBaja?: true;
    activo?: true;
    observaciones?: true;
    _all?: true;
};
export type ProfesorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which profesor to aggregate.
     */
    where?: Prisma.profesorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of profesors to fetch.
     */
    orderBy?: Prisma.profesorOrderByWithRelationInput | Prisma.profesorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.profesorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` profesors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` profesors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned profesors
    **/
    _count?: true | ProfesorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProfesorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProfesorMaxAggregateInputType;
};
export type GetProfesorAggregateType<T extends ProfesorAggregateArgs> = {
    [P in keyof T & keyof AggregateProfesor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProfesor[P]> : Prisma.GetScalarType<T[P], AggregateProfesor[P]>;
};
export type profesorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.profesorWhereInput;
    orderBy?: Prisma.profesorOrderByWithAggregationInput | Prisma.profesorOrderByWithAggregationInput[];
    by: Prisma.ProfesorScalarFieldEnum[] | Prisma.ProfesorScalarFieldEnum;
    having?: Prisma.profesorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfesorCountAggregateInputType | true;
    _min?: ProfesorMinAggregateInputType;
    _max?: ProfesorMaxAggregateInputType;
};
export type ProfesorGroupByOutputType = {
    id: string;
    personaId: string;
    fechaAlta: Date;
    fechaBaja: Date | null;
    motivoBaja: $Enums.profesor_motivoBaja | null;
    activo: boolean;
    observaciones: string | null;
    _count: ProfesorCountAggregateOutputType | null;
    _min: ProfesorMinAggregateOutputType | null;
    _max: ProfesorMaxAggregateOutputType | null;
};
export type GetProfesorGroupByPayload<T extends profesorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProfesorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProfesorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProfesorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProfesorGroupByOutputType[P]>;
}>>;
export type profesorWhereInput = {
    AND?: Prisma.profesorWhereInput | Prisma.profesorWhereInput[];
    OR?: Prisma.profesorWhereInput[];
    NOT?: Prisma.profesorWhereInput | Prisma.profesorWhereInput[];
    id?: Prisma.StringFilter<"profesor"> | string;
    personaId?: Prisma.StringFilter<"profesor"> | string;
    fechaAlta?: Prisma.DateTimeFilter<"profesor"> | Date | string;
    fechaBaja?: Prisma.DateTimeNullableFilter<"profesor"> | Date | string | null;
    motivoBaja?: Prisma.Enumprofesor_motivoBajaNullableFilter<"profesor"> | $Enums.profesor_motivoBaja | null;
    activo?: Prisma.BoolFilter<"profesor"> | boolean;
    observaciones?: Prisma.StringNullableFilter<"profesor"> | string | null;
    clase?: Prisma.ClaseListRelationFilter;
    contrato?: Prisma.ContratoListRelationFilter;
    nomina?: Prisma.NominaListRelationFilter;
    persona?: Prisma.XOR<Prisma.PersonaScalarRelationFilter, Prisma.personaWhereInput>;
    profesorperiodo?: Prisma.ProfesorperiodoListRelationFilter;
};
export type profesorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    clase?: Prisma.claseOrderByRelationAggregateInput;
    contrato?: Prisma.contratoOrderByRelationAggregateInput;
    nomina?: Prisma.nominaOrderByRelationAggregateInput;
    persona?: Prisma.personaOrderByWithRelationInput;
    profesorperiodo?: Prisma.profesorperiodoOrderByRelationAggregateInput;
    _relevance?: Prisma.profesorOrderByRelevanceInput;
};
export type profesorWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    personaId?: string;
    AND?: Prisma.profesorWhereInput | Prisma.profesorWhereInput[];
    OR?: Prisma.profesorWhereInput[];
    NOT?: Prisma.profesorWhereInput | Prisma.profesorWhereInput[];
    fechaAlta?: Prisma.DateTimeFilter<"profesor"> | Date | string;
    fechaBaja?: Prisma.DateTimeNullableFilter<"profesor"> | Date | string | null;
    motivoBaja?: Prisma.Enumprofesor_motivoBajaNullableFilter<"profesor"> | $Enums.profesor_motivoBaja | null;
    activo?: Prisma.BoolFilter<"profesor"> | boolean;
    observaciones?: Prisma.StringNullableFilter<"profesor"> | string | null;
    clase?: Prisma.ClaseListRelationFilter;
    contrato?: Prisma.ContratoListRelationFilter;
    nomina?: Prisma.NominaListRelationFilter;
    persona?: Prisma.XOR<Prisma.PersonaScalarRelationFilter, Prisma.personaWhereInput>;
    profesorperiodo?: Prisma.ProfesorperiodoListRelationFilter;
}, "id" | "personaId">;
export type profesorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.profesorCountOrderByAggregateInput;
    _max?: Prisma.profesorMaxOrderByAggregateInput;
    _min?: Prisma.profesorMinOrderByAggregateInput;
};
export type profesorScalarWhereWithAggregatesInput = {
    AND?: Prisma.profesorScalarWhereWithAggregatesInput | Prisma.profesorScalarWhereWithAggregatesInput[];
    OR?: Prisma.profesorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.profesorScalarWhereWithAggregatesInput | Prisma.profesorScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"profesor"> | string;
    personaId?: Prisma.StringWithAggregatesFilter<"profesor"> | string;
    fechaAlta?: Prisma.DateTimeWithAggregatesFilter<"profesor"> | Date | string;
    fechaBaja?: Prisma.DateTimeNullableWithAggregatesFilter<"profesor"> | Date | string | null;
    motivoBaja?: Prisma.Enumprofesor_motivoBajaNullableWithAggregatesFilter<"profesor"> | $Enums.profesor_motivoBaja | null;
    activo?: Prisma.BoolWithAggregatesFilter<"profesor"> | boolean;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"profesor"> | string | null;
};
export type profesorCreateInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.profesor_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    clase?: Prisma.claseCreateNestedManyWithoutProfesorInput;
    contrato?: Prisma.contratoCreateNestedManyWithoutProfesorInput;
    nomina?: Prisma.nominaCreateNestedManyWithoutProfesorInput;
    persona: Prisma.personaCreateNestedOneWithoutProfesorInput;
    profesorperiodo?: Prisma.profesorperiodoCreateNestedManyWithoutProfesorInput;
};
export type profesorUncheckedCreateInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.profesor_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    clase?: Prisma.claseUncheckedCreateNestedManyWithoutProfesorInput;
    contrato?: Prisma.contratoUncheckedCreateNestedManyWithoutProfesorInput;
    nomina?: Prisma.nominaUncheckedCreateNestedManyWithoutProfesorInput;
    profesorperiodo?: Prisma.profesorperiodoUncheckedCreateNestedManyWithoutProfesorInput;
};
export type profesorUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput | $Enums.profesor_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clase?: Prisma.claseUpdateManyWithoutProfesorNestedInput;
    contrato?: Prisma.contratoUpdateManyWithoutProfesorNestedInput;
    nomina?: Prisma.nominaUpdateManyWithoutProfesorNestedInput;
    persona?: Prisma.personaUpdateOneRequiredWithoutProfesorNestedInput;
    profesorperiodo?: Prisma.profesorperiodoUpdateManyWithoutProfesorNestedInput;
};
export type profesorUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput | $Enums.profesor_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clase?: Prisma.claseUncheckedUpdateManyWithoutProfesorNestedInput;
    contrato?: Prisma.contratoUncheckedUpdateManyWithoutProfesorNestedInput;
    nomina?: Prisma.nominaUncheckedUpdateManyWithoutProfesorNestedInput;
    profesorperiodo?: Prisma.profesorperiodoUncheckedUpdateManyWithoutProfesorNestedInput;
};
export type profesorCreateManyInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.profesor_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
};
export type profesorUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput | $Enums.profesor_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type profesorUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput | $Enums.profesor_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ProfesorScalarRelationFilter = {
    is?: Prisma.profesorWhereInput;
    isNot?: Prisma.profesorWhereInput;
};
export type ProfesorNullableScalarRelationFilter = {
    is?: Prisma.profesorWhereInput | null;
    isNot?: Prisma.profesorWhereInput | null;
};
export type profesorOrderByRelevanceInput = {
    fields: Prisma.profesorOrderByRelevanceFieldEnum | Prisma.profesorOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type profesorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
};
export type profesorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
};
export type profesorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
};
export type profesorCreateNestedOneWithoutClaseInput = {
    create?: Prisma.XOR<Prisma.profesorCreateWithoutClaseInput, Prisma.profesorUncheckedCreateWithoutClaseInput>;
    connectOrCreate?: Prisma.profesorCreateOrConnectWithoutClaseInput;
    connect?: Prisma.profesorWhereUniqueInput;
};
export type profesorUpdateOneRequiredWithoutClaseNestedInput = {
    create?: Prisma.XOR<Prisma.profesorCreateWithoutClaseInput, Prisma.profesorUncheckedCreateWithoutClaseInput>;
    connectOrCreate?: Prisma.profesorCreateOrConnectWithoutClaseInput;
    upsert?: Prisma.profesorUpsertWithoutClaseInput;
    connect?: Prisma.profesorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.profesorUpdateToOneWithWhereWithoutClaseInput, Prisma.profesorUpdateWithoutClaseInput>, Prisma.profesorUncheckedUpdateWithoutClaseInput>;
};
export type profesorCreateNestedOneWithoutContratoInput = {
    create?: Prisma.XOR<Prisma.profesorCreateWithoutContratoInput, Prisma.profesorUncheckedCreateWithoutContratoInput>;
    connectOrCreate?: Prisma.profesorCreateOrConnectWithoutContratoInput;
    connect?: Prisma.profesorWhereUniqueInput;
};
export type profesorUpdateOneRequiredWithoutContratoNestedInput = {
    create?: Prisma.XOR<Prisma.profesorCreateWithoutContratoInput, Prisma.profesorUncheckedCreateWithoutContratoInput>;
    connectOrCreate?: Prisma.profesorCreateOrConnectWithoutContratoInput;
    upsert?: Prisma.profesorUpsertWithoutContratoInput;
    connect?: Prisma.profesorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.profesorUpdateToOneWithWhereWithoutContratoInput, Prisma.profesorUpdateWithoutContratoInput>, Prisma.profesorUncheckedUpdateWithoutContratoInput>;
};
export type profesorCreateNestedOneWithoutNominaInput = {
    create?: Prisma.XOR<Prisma.profesorCreateWithoutNominaInput, Prisma.profesorUncheckedCreateWithoutNominaInput>;
    connectOrCreate?: Prisma.profesorCreateOrConnectWithoutNominaInput;
    connect?: Prisma.profesorWhereUniqueInput;
};
export type profesorUpdateOneRequiredWithoutNominaNestedInput = {
    create?: Prisma.XOR<Prisma.profesorCreateWithoutNominaInput, Prisma.profesorUncheckedCreateWithoutNominaInput>;
    connectOrCreate?: Prisma.profesorCreateOrConnectWithoutNominaInput;
    upsert?: Prisma.profesorUpsertWithoutNominaInput;
    connect?: Prisma.profesorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.profesorUpdateToOneWithWhereWithoutNominaInput, Prisma.profesorUpdateWithoutNominaInput>, Prisma.profesorUncheckedUpdateWithoutNominaInput>;
};
export type profesorCreateNestedOneWithoutPersonaInput = {
    create?: Prisma.XOR<Prisma.profesorCreateWithoutPersonaInput, Prisma.profesorUncheckedCreateWithoutPersonaInput>;
    connectOrCreate?: Prisma.profesorCreateOrConnectWithoutPersonaInput;
    connect?: Prisma.profesorWhereUniqueInput;
};
export type profesorUncheckedCreateNestedOneWithoutPersonaInput = {
    create?: Prisma.XOR<Prisma.profesorCreateWithoutPersonaInput, Prisma.profesorUncheckedCreateWithoutPersonaInput>;
    connectOrCreate?: Prisma.profesorCreateOrConnectWithoutPersonaInput;
    connect?: Prisma.profesorWhereUniqueInput;
};
export type profesorUpdateOneWithoutPersonaNestedInput = {
    create?: Prisma.XOR<Prisma.profesorCreateWithoutPersonaInput, Prisma.profesorUncheckedCreateWithoutPersonaInput>;
    connectOrCreate?: Prisma.profesorCreateOrConnectWithoutPersonaInput;
    upsert?: Prisma.profesorUpsertWithoutPersonaInput;
    disconnect?: Prisma.profesorWhereInput | boolean;
    delete?: Prisma.profesorWhereInput | boolean;
    connect?: Prisma.profesorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.profesorUpdateToOneWithWhereWithoutPersonaInput, Prisma.profesorUpdateWithoutPersonaInput>, Prisma.profesorUncheckedUpdateWithoutPersonaInput>;
};
export type profesorUncheckedUpdateOneWithoutPersonaNestedInput = {
    create?: Prisma.XOR<Prisma.profesorCreateWithoutPersonaInput, Prisma.profesorUncheckedCreateWithoutPersonaInput>;
    connectOrCreate?: Prisma.profesorCreateOrConnectWithoutPersonaInput;
    upsert?: Prisma.profesorUpsertWithoutPersonaInput;
    disconnect?: Prisma.profesorWhereInput | boolean;
    delete?: Prisma.profesorWhereInput | boolean;
    connect?: Prisma.profesorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.profesorUpdateToOneWithWhereWithoutPersonaInput, Prisma.profesorUpdateWithoutPersonaInput>, Prisma.profesorUncheckedUpdateWithoutPersonaInput>;
};
export type NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput = {
    set?: $Enums.profesor_motivoBaja | null;
};
export type profesorCreateNestedOneWithoutProfesorperiodoInput = {
    create?: Prisma.XOR<Prisma.profesorCreateWithoutProfesorperiodoInput, Prisma.profesorUncheckedCreateWithoutProfesorperiodoInput>;
    connectOrCreate?: Prisma.profesorCreateOrConnectWithoutProfesorperiodoInput;
    connect?: Prisma.profesorWhereUniqueInput;
};
export type profesorUpdateOneRequiredWithoutProfesorperiodoNestedInput = {
    create?: Prisma.XOR<Prisma.profesorCreateWithoutProfesorperiodoInput, Prisma.profesorUncheckedCreateWithoutProfesorperiodoInput>;
    connectOrCreate?: Prisma.profesorCreateOrConnectWithoutProfesorperiodoInput;
    upsert?: Prisma.profesorUpsertWithoutProfesorperiodoInput;
    connect?: Prisma.profesorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.profesorUpdateToOneWithWhereWithoutProfesorperiodoInput, Prisma.profesorUpdateWithoutProfesorperiodoInput>, Prisma.profesorUncheckedUpdateWithoutProfesorperiodoInput>;
};
export type profesorCreateWithoutClaseInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.profesor_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    contrato?: Prisma.contratoCreateNestedManyWithoutProfesorInput;
    nomina?: Prisma.nominaCreateNestedManyWithoutProfesorInput;
    persona: Prisma.personaCreateNestedOneWithoutProfesorInput;
    profesorperiodo?: Prisma.profesorperiodoCreateNestedManyWithoutProfesorInput;
};
export type profesorUncheckedCreateWithoutClaseInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.profesor_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    contrato?: Prisma.contratoUncheckedCreateNestedManyWithoutProfesorInput;
    nomina?: Prisma.nominaUncheckedCreateNestedManyWithoutProfesorInput;
    profesorperiodo?: Prisma.profesorperiodoUncheckedCreateNestedManyWithoutProfesorInput;
};
export type profesorCreateOrConnectWithoutClaseInput = {
    where: Prisma.profesorWhereUniqueInput;
    create: Prisma.XOR<Prisma.profesorCreateWithoutClaseInput, Prisma.profesorUncheckedCreateWithoutClaseInput>;
};
export type profesorUpsertWithoutClaseInput = {
    update: Prisma.XOR<Prisma.profesorUpdateWithoutClaseInput, Prisma.profesorUncheckedUpdateWithoutClaseInput>;
    create: Prisma.XOR<Prisma.profesorCreateWithoutClaseInput, Prisma.profesorUncheckedCreateWithoutClaseInput>;
    where?: Prisma.profesorWhereInput;
};
export type profesorUpdateToOneWithWhereWithoutClaseInput = {
    where?: Prisma.profesorWhereInput;
    data: Prisma.XOR<Prisma.profesorUpdateWithoutClaseInput, Prisma.profesorUncheckedUpdateWithoutClaseInput>;
};
export type profesorUpdateWithoutClaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput | $Enums.profesor_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contrato?: Prisma.contratoUpdateManyWithoutProfesorNestedInput;
    nomina?: Prisma.nominaUpdateManyWithoutProfesorNestedInput;
    persona?: Prisma.personaUpdateOneRequiredWithoutProfesorNestedInput;
    profesorperiodo?: Prisma.profesorperiodoUpdateManyWithoutProfesorNestedInput;
};
export type profesorUncheckedUpdateWithoutClaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput | $Enums.profesor_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contrato?: Prisma.contratoUncheckedUpdateManyWithoutProfesorNestedInput;
    nomina?: Prisma.nominaUncheckedUpdateManyWithoutProfesorNestedInput;
    profesorperiodo?: Prisma.profesorperiodoUncheckedUpdateManyWithoutProfesorNestedInput;
};
export type profesorCreateWithoutContratoInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.profesor_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    clase?: Prisma.claseCreateNestedManyWithoutProfesorInput;
    nomina?: Prisma.nominaCreateNestedManyWithoutProfesorInput;
    persona: Prisma.personaCreateNestedOneWithoutProfesorInput;
    profesorperiodo?: Prisma.profesorperiodoCreateNestedManyWithoutProfesorInput;
};
export type profesorUncheckedCreateWithoutContratoInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.profesor_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    clase?: Prisma.claseUncheckedCreateNestedManyWithoutProfesorInput;
    nomina?: Prisma.nominaUncheckedCreateNestedManyWithoutProfesorInput;
    profesorperiodo?: Prisma.profesorperiodoUncheckedCreateNestedManyWithoutProfesorInput;
};
export type profesorCreateOrConnectWithoutContratoInput = {
    where: Prisma.profesorWhereUniqueInput;
    create: Prisma.XOR<Prisma.profesorCreateWithoutContratoInput, Prisma.profesorUncheckedCreateWithoutContratoInput>;
};
export type profesorUpsertWithoutContratoInput = {
    update: Prisma.XOR<Prisma.profesorUpdateWithoutContratoInput, Prisma.profesorUncheckedUpdateWithoutContratoInput>;
    create: Prisma.XOR<Prisma.profesorCreateWithoutContratoInput, Prisma.profesorUncheckedCreateWithoutContratoInput>;
    where?: Prisma.profesorWhereInput;
};
export type profesorUpdateToOneWithWhereWithoutContratoInput = {
    where?: Prisma.profesorWhereInput;
    data: Prisma.XOR<Prisma.profesorUpdateWithoutContratoInput, Prisma.profesorUncheckedUpdateWithoutContratoInput>;
};
export type profesorUpdateWithoutContratoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput | $Enums.profesor_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clase?: Prisma.claseUpdateManyWithoutProfesorNestedInput;
    nomina?: Prisma.nominaUpdateManyWithoutProfesorNestedInput;
    persona?: Prisma.personaUpdateOneRequiredWithoutProfesorNestedInput;
    profesorperiodo?: Prisma.profesorperiodoUpdateManyWithoutProfesorNestedInput;
};
export type profesorUncheckedUpdateWithoutContratoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput | $Enums.profesor_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clase?: Prisma.claseUncheckedUpdateManyWithoutProfesorNestedInput;
    nomina?: Prisma.nominaUncheckedUpdateManyWithoutProfesorNestedInput;
    profesorperiodo?: Prisma.profesorperiodoUncheckedUpdateManyWithoutProfesorNestedInput;
};
export type profesorCreateWithoutNominaInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.profesor_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    clase?: Prisma.claseCreateNestedManyWithoutProfesorInput;
    contrato?: Prisma.contratoCreateNestedManyWithoutProfesorInput;
    persona: Prisma.personaCreateNestedOneWithoutProfesorInput;
    profesorperiodo?: Prisma.profesorperiodoCreateNestedManyWithoutProfesorInput;
};
export type profesorUncheckedCreateWithoutNominaInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.profesor_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    clase?: Prisma.claseUncheckedCreateNestedManyWithoutProfesorInput;
    contrato?: Prisma.contratoUncheckedCreateNestedManyWithoutProfesorInput;
    profesorperiodo?: Prisma.profesorperiodoUncheckedCreateNestedManyWithoutProfesorInput;
};
export type profesorCreateOrConnectWithoutNominaInput = {
    where: Prisma.profesorWhereUniqueInput;
    create: Prisma.XOR<Prisma.profesorCreateWithoutNominaInput, Prisma.profesorUncheckedCreateWithoutNominaInput>;
};
export type profesorUpsertWithoutNominaInput = {
    update: Prisma.XOR<Prisma.profesorUpdateWithoutNominaInput, Prisma.profesorUncheckedUpdateWithoutNominaInput>;
    create: Prisma.XOR<Prisma.profesorCreateWithoutNominaInput, Prisma.profesorUncheckedCreateWithoutNominaInput>;
    where?: Prisma.profesorWhereInput;
};
export type profesorUpdateToOneWithWhereWithoutNominaInput = {
    where?: Prisma.profesorWhereInput;
    data: Prisma.XOR<Prisma.profesorUpdateWithoutNominaInput, Prisma.profesorUncheckedUpdateWithoutNominaInput>;
};
export type profesorUpdateWithoutNominaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput | $Enums.profesor_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clase?: Prisma.claseUpdateManyWithoutProfesorNestedInput;
    contrato?: Prisma.contratoUpdateManyWithoutProfesorNestedInput;
    persona?: Prisma.personaUpdateOneRequiredWithoutProfesorNestedInput;
    profesorperiodo?: Prisma.profesorperiodoUpdateManyWithoutProfesorNestedInput;
};
export type profesorUncheckedUpdateWithoutNominaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput | $Enums.profesor_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clase?: Prisma.claseUncheckedUpdateManyWithoutProfesorNestedInput;
    contrato?: Prisma.contratoUncheckedUpdateManyWithoutProfesorNestedInput;
    profesorperiodo?: Prisma.profesorperiodoUncheckedUpdateManyWithoutProfesorNestedInput;
};
export type profesorCreateWithoutPersonaInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.profesor_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    clase?: Prisma.claseCreateNestedManyWithoutProfesorInput;
    contrato?: Prisma.contratoCreateNestedManyWithoutProfesorInput;
    nomina?: Prisma.nominaCreateNestedManyWithoutProfesorInput;
    profesorperiodo?: Prisma.profesorperiodoCreateNestedManyWithoutProfesorInput;
};
export type profesorUncheckedCreateWithoutPersonaInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.profesor_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    clase?: Prisma.claseUncheckedCreateNestedManyWithoutProfesorInput;
    contrato?: Prisma.contratoUncheckedCreateNestedManyWithoutProfesorInput;
    nomina?: Prisma.nominaUncheckedCreateNestedManyWithoutProfesorInput;
    profesorperiodo?: Prisma.profesorperiodoUncheckedCreateNestedManyWithoutProfesorInput;
};
export type profesorCreateOrConnectWithoutPersonaInput = {
    where: Prisma.profesorWhereUniqueInput;
    create: Prisma.XOR<Prisma.profesorCreateWithoutPersonaInput, Prisma.profesorUncheckedCreateWithoutPersonaInput>;
};
export type profesorUpsertWithoutPersonaInput = {
    update: Prisma.XOR<Prisma.profesorUpdateWithoutPersonaInput, Prisma.profesorUncheckedUpdateWithoutPersonaInput>;
    create: Prisma.XOR<Prisma.profesorCreateWithoutPersonaInput, Prisma.profesorUncheckedCreateWithoutPersonaInput>;
    where?: Prisma.profesorWhereInput;
};
export type profesorUpdateToOneWithWhereWithoutPersonaInput = {
    where?: Prisma.profesorWhereInput;
    data: Prisma.XOR<Prisma.profesorUpdateWithoutPersonaInput, Prisma.profesorUncheckedUpdateWithoutPersonaInput>;
};
export type profesorUpdateWithoutPersonaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput | $Enums.profesor_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clase?: Prisma.claseUpdateManyWithoutProfesorNestedInput;
    contrato?: Prisma.contratoUpdateManyWithoutProfesorNestedInput;
    nomina?: Prisma.nominaUpdateManyWithoutProfesorNestedInput;
    profesorperiodo?: Prisma.profesorperiodoUpdateManyWithoutProfesorNestedInput;
};
export type profesorUncheckedUpdateWithoutPersonaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput | $Enums.profesor_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clase?: Prisma.claseUncheckedUpdateManyWithoutProfesorNestedInput;
    contrato?: Prisma.contratoUncheckedUpdateManyWithoutProfesorNestedInput;
    nomina?: Prisma.nominaUncheckedUpdateManyWithoutProfesorNestedInput;
    profesorperiodo?: Prisma.profesorperiodoUncheckedUpdateManyWithoutProfesorNestedInput;
};
export type profesorCreateWithoutProfesorperiodoInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.profesor_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    clase?: Prisma.claseCreateNestedManyWithoutProfesorInput;
    contrato?: Prisma.contratoCreateNestedManyWithoutProfesorInput;
    nomina?: Prisma.nominaCreateNestedManyWithoutProfesorInput;
    persona: Prisma.personaCreateNestedOneWithoutProfesorInput;
};
export type profesorUncheckedCreateWithoutProfesorperiodoInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.profesor_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    clase?: Prisma.claseUncheckedCreateNestedManyWithoutProfesorInput;
    contrato?: Prisma.contratoUncheckedCreateNestedManyWithoutProfesorInput;
    nomina?: Prisma.nominaUncheckedCreateNestedManyWithoutProfesorInput;
};
export type profesorCreateOrConnectWithoutProfesorperiodoInput = {
    where: Prisma.profesorWhereUniqueInput;
    create: Prisma.XOR<Prisma.profesorCreateWithoutProfesorperiodoInput, Prisma.profesorUncheckedCreateWithoutProfesorperiodoInput>;
};
export type profesorUpsertWithoutProfesorperiodoInput = {
    update: Prisma.XOR<Prisma.profesorUpdateWithoutProfesorperiodoInput, Prisma.profesorUncheckedUpdateWithoutProfesorperiodoInput>;
    create: Prisma.XOR<Prisma.profesorCreateWithoutProfesorperiodoInput, Prisma.profesorUncheckedCreateWithoutProfesorperiodoInput>;
    where?: Prisma.profesorWhereInput;
};
export type profesorUpdateToOneWithWhereWithoutProfesorperiodoInput = {
    where?: Prisma.profesorWhereInput;
    data: Prisma.XOR<Prisma.profesorUpdateWithoutProfesorperiodoInput, Prisma.profesorUncheckedUpdateWithoutProfesorperiodoInput>;
};
export type profesorUpdateWithoutProfesorperiodoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput | $Enums.profesor_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clase?: Prisma.claseUpdateManyWithoutProfesorNestedInput;
    contrato?: Prisma.contratoUpdateManyWithoutProfesorNestedInput;
    nomina?: Prisma.nominaUpdateManyWithoutProfesorNestedInput;
    persona?: Prisma.personaUpdateOneRequiredWithoutProfesorNestedInput;
};
export type profesorUncheckedUpdateWithoutProfesorperiodoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumprofesor_motivoBajaFieldUpdateOperationsInput | $Enums.profesor_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clase?: Prisma.claseUncheckedUpdateManyWithoutProfesorNestedInput;
    contrato?: Prisma.contratoUncheckedUpdateManyWithoutProfesorNestedInput;
    nomina?: Prisma.nominaUncheckedUpdateManyWithoutProfesorNestedInput;
};
/**
 * Count Type ProfesorCountOutputType
 */
export type ProfesorCountOutputType = {
    clase: number;
    contrato: number;
    nomina: number;
    profesorperiodo: number;
};
export type ProfesorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clase?: boolean | ProfesorCountOutputTypeCountClaseArgs;
    contrato?: boolean | ProfesorCountOutputTypeCountContratoArgs;
    nomina?: boolean | ProfesorCountOutputTypeCountNominaArgs;
    profesorperiodo?: boolean | ProfesorCountOutputTypeCountProfesorperiodoArgs;
};
/**
 * ProfesorCountOutputType without action
 */
export type ProfesorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfesorCountOutputType
     */
    select?: Prisma.ProfesorCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProfesorCountOutputType without action
 */
export type ProfesorCountOutputTypeCountClaseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.claseWhereInput;
};
/**
 * ProfesorCountOutputType without action
 */
export type ProfesorCountOutputTypeCountContratoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contratoWhereInput;
};
/**
 * ProfesorCountOutputType without action
 */
export type ProfesorCountOutputTypeCountNominaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.nominaWhereInput;
};
/**
 * ProfesorCountOutputType without action
 */
export type ProfesorCountOutputTypeCountProfesorperiodoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.profesorperiodoWhereInput;
};
export type profesorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    personaId?: boolean;
    fechaAlta?: boolean;
    fechaBaja?: boolean;
    motivoBaja?: boolean;
    activo?: boolean;
    observaciones?: boolean;
    clase?: boolean | Prisma.profesor$claseArgs<ExtArgs>;
    contrato?: boolean | Prisma.profesor$contratoArgs<ExtArgs>;
    nomina?: boolean | Prisma.profesor$nominaArgs<ExtArgs>;
    persona?: boolean | Prisma.personaDefaultArgs<ExtArgs>;
    profesorperiodo?: boolean | Prisma.profesor$profesorperiodoArgs<ExtArgs>;
    _count?: boolean | Prisma.ProfesorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profesor"]>;
export type profesorSelectScalar = {
    id?: boolean;
    personaId?: boolean;
    fechaAlta?: boolean;
    fechaBaja?: boolean;
    motivoBaja?: boolean;
    activo?: boolean;
    observaciones?: boolean;
};
export type profesorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "personaId" | "fechaAlta" | "fechaBaja" | "motivoBaja" | "activo" | "observaciones", ExtArgs["result"]["profesor"]>;
export type profesorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clase?: boolean | Prisma.profesor$claseArgs<ExtArgs>;
    contrato?: boolean | Prisma.profesor$contratoArgs<ExtArgs>;
    nomina?: boolean | Prisma.profesor$nominaArgs<ExtArgs>;
    persona?: boolean | Prisma.personaDefaultArgs<ExtArgs>;
    profesorperiodo?: boolean | Prisma.profesor$profesorperiodoArgs<ExtArgs>;
    _count?: boolean | Prisma.ProfesorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $profesorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "profesor";
    objects: {
        clase: Prisma.$clasePayload<ExtArgs>[];
        contrato: Prisma.$contratoPayload<ExtArgs>[];
        nomina: Prisma.$nominaPayload<ExtArgs>[];
        persona: Prisma.$personaPayload<ExtArgs>;
        profesorperiodo: Prisma.$profesorperiodoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        personaId: string;
        fechaAlta: Date;
        fechaBaja: Date | null;
        motivoBaja: $Enums.profesor_motivoBaja | null;
        activo: boolean;
        observaciones: string | null;
    }, ExtArgs["result"]["profesor"]>;
    composites: {};
};
export type profesorGetPayload<S extends boolean | null | undefined | profesorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$profesorPayload, S>;
export type profesorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<profesorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfesorCountAggregateInputType | true;
};
export interface profesorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['profesor'];
        meta: {
            name: 'profesor';
        };
    };
    /**
     * Find zero or one Profesor that matches the filter.
     * @param {profesorFindUniqueArgs} args - Arguments to find a Profesor
     * @example
     * // Get one Profesor
     * const profesor = await prisma.profesor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profesorFindUniqueArgs>(args: Prisma.SelectSubset<T, profesorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__profesorClient<runtime.Types.Result.GetResult<Prisma.$profesorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Profesor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profesorFindUniqueOrThrowArgs} args - Arguments to find a Profesor
     * @example
     * // Get one Profesor
     * const profesor = await prisma.profesor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profesorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, profesorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__profesorClient<runtime.Types.Result.GetResult<Prisma.$profesorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Profesor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profesorFindFirstArgs} args - Arguments to find a Profesor
     * @example
     * // Get one Profesor
     * const profesor = await prisma.profesor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profesorFindFirstArgs>(args?: Prisma.SelectSubset<T, profesorFindFirstArgs<ExtArgs>>): Prisma.Prisma__profesorClient<runtime.Types.Result.GetResult<Prisma.$profesorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Profesor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profesorFindFirstOrThrowArgs} args - Arguments to find a Profesor
     * @example
     * // Get one Profesor
     * const profesor = await prisma.profesor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profesorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, profesorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__profesorClient<runtime.Types.Result.GetResult<Prisma.$profesorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Profesors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profesorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profesors
     * const profesors = await prisma.profesor.findMany()
     *
     * // Get first 10 Profesors
     * const profesors = await prisma.profesor.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const profesorWithIdOnly = await prisma.profesor.findMany({ select: { id: true } })
     *
     */
    findMany<T extends profesorFindManyArgs>(args?: Prisma.SelectSubset<T, profesorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$profesorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Profesor.
     * @param {profesorCreateArgs} args - Arguments to create a Profesor.
     * @example
     * // Create one Profesor
     * const Profesor = await prisma.profesor.create({
     *   data: {
     *     // ... data to create a Profesor
     *   }
     * })
     *
     */
    create<T extends profesorCreateArgs>(args: Prisma.SelectSubset<T, profesorCreateArgs<ExtArgs>>): Prisma.Prisma__profesorClient<runtime.Types.Result.GetResult<Prisma.$profesorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Profesors.
     * @param {profesorCreateManyArgs} args - Arguments to create many Profesors.
     * @example
     * // Create many Profesors
     * const profesor = await prisma.profesor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends profesorCreateManyArgs>(args?: Prisma.SelectSubset<T, profesorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Profesor.
     * @param {profesorDeleteArgs} args - Arguments to delete one Profesor.
     * @example
     * // Delete one Profesor
     * const Profesor = await prisma.profesor.delete({
     *   where: {
     *     // ... filter to delete one Profesor
     *   }
     * })
     *
     */
    delete<T extends profesorDeleteArgs>(args: Prisma.SelectSubset<T, profesorDeleteArgs<ExtArgs>>): Prisma.Prisma__profesorClient<runtime.Types.Result.GetResult<Prisma.$profesorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Profesor.
     * @param {profesorUpdateArgs} args - Arguments to update one Profesor.
     * @example
     * // Update one Profesor
     * const profesor = await prisma.profesor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends profesorUpdateArgs>(args: Prisma.SelectSubset<T, profesorUpdateArgs<ExtArgs>>): Prisma.Prisma__profesorClient<runtime.Types.Result.GetResult<Prisma.$profesorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Profesors.
     * @param {profesorDeleteManyArgs} args - Arguments to filter Profesors to delete.
     * @example
     * // Delete a few Profesors
     * const { count } = await prisma.profesor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends profesorDeleteManyArgs>(args?: Prisma.SelectSubset<T, profesorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Profesors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profesorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profesors
     * const profesor = await prisma.profesor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends profesorUpdateManyArgs>(args: Prisma.SelectSubset<T, profesorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Profesor.
     * @param {profesorUpsertArgs} args - Arguments to update or create a Profesor.
     * @example
     * // Update or create a Profesor
     * const profesor = await prisma.profesor.upsert({
     *   create: {
     *     // ... data to create a Profesor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profesor we want to update
     *   }
     * })
     */
    upsert<T extends profesorUpsertArgs>(args: Prisma.SelectSubset<T, profesorUpsertArgs<ExtArgs>>): Prisma.Prisma__profesorClient<runtime.Types.Result.GetResult<Prisma.$profesorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Profesors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profesorCountArgs} args - Arguments to filter Profesors to count.
     * @example
     * // Count the number of Profesors
     * const count = await prisma.profesor.count({
     *   where: {
     *     // ... the filter for the Profesors we want to count
     *   }
     * })
    **/
    count<T extends profesorCountArgs>(args?: Prisma.Subset<T, profesorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProfesorCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Profesor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfesorAggregateArgs>(args: Prisma.Subset<T, ProfesorAggregateArgs>): Prisma.PrismaPromise<GetProfesorAggregateType<T>>;
    /**
     * Group by Profesor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profesorGroupByArgs} args - Group by arguments.
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
    groupBy<T extends profesorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: profesorGroupByArgs['orderBy'];
    } : {
        orderBy?: profesorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, profesorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfesorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the profesor model
     */
    readonly fields: profesorFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for profesor.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__profesorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    clase<T extends Prisma.profesor$claseArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.profesor$claseArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$clasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    contrato<T extends Prisma.profesor$contratoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.profesor$contratoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    nomina<T extends Prisma.profesor$nominaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.profesor$nominaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    persona<T extends Prisma.personaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.personaDefaultArgs<ExtArgs>>): Prisma.Prisma__personaClient<runtime.Types.Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    profesorperiodo<T extends Prisma.profesor$profesorperiodoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.profesor$profesorperiodoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$profesorperiodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the profesor model
 */
export interface profesorFieldRefs {
    readonly id: Prisma.FieldRef<"profesor", 'String'>;
    readonly personaId: Prisma.FieldRef<"profesor", 'String'>;
    readonly fechaAlta: Prisma.FieldRef<"profesor", 'DateTime'>;
    readonly fechaBaja: Prisma.FieldRef<"profesor", 'DateTime'>;
    readonly motivoBaja: Prisma.FieldRef<"profesor", 'profesor_motivoBaja'>;
    readonly activo: Prisma.FieldRef<"profesor", 'Boolean'>;
    readonly observaciones: Prisma.FieldRef<"profesor", 'String'>;
}
/**
 * profesor findUnique
 */
export type profesorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profesor
     */
    select?: Prisma.profesorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profesor
     */
    omit?: Prisma.profesorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.profesorInclude<ExtArgs> | null;
    /**
     * Filter, which profesor to fetch.
     */
    where: Prisma.profesorWhereUniqueInput;
};
/**
 * profesor findUniqueOrThrow
 */
export type profesorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profesor
     */
    select?: Prisma.profesorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profesor
     */
    omit?: Prisma.profesorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.profesorInclude<ExtArgs> | null;
    /**
     * Filter, which profesor to fetch.
     */
    where: Prisma.profesorWhereUniqueInput;
};
/**
 * profesor findFirst
 */
export type profesorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profesor
     */
    select?: Prisma.profesorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profesor
     */
    omit?: Prisma.profesorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.profesorInclude<ExtArgs> | null;
    /**
     * Filter, which profesor to fetch.
     */
    where?: Prisma.profesorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of profesors to fetch.
     */
    orderBy?: Prisma.profesorOrderByWithRelationInput | Prisma.profesorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for profesors.
     */
    cursor?: Prisma.profesorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` profesors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` profesors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of profesors.
     */
    distinct?: Prisma.ProfesorScalarFieldEnum | Prisma.ProfesorScalarFieldEnum[];
};
/**
 * profesor findFirstOrThrow
 */
export type profesorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profesor
     */
    select?: Prisma.profesorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profesor
     */
    omit?: Prisma.profesorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.profesorInclude<ExtArgs> | null;
    /**
     * Filter, which profesor to fetch.
     */
    where?: Prisma.profesorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of profesors to fetch.
     */
    orderBy?: Prisma.profesorOrderByWithRelationInput | Prisma.profesorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for profesors.
     */
    cursor?: Prisma.profesorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` profesors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` profesors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of profesors.
     */
    distinct?: Prisma.ProfesorScalarFieldEnum | Prisma.ProfesorScalarFieldEnum[];
};
/**
 * profesor findMany
 */
export type profesorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profesor
     */
    select?: Prisma.profesorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profesor
     */
    omit?: Prisma.profesorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.profesorInclude<ExtArgs> | null;
    /**
     * Filter, which profesors to fetch.
     */
    where?: Prisma.profesorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of profesors to fetch.
     */
    orderBy?: Prisma.profesorOrderByWithRelationInput | Prisma.profesorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing profesors.
     */
    cursor?: Prisma.profesorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` profesors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` profesors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of profesors.
     */
    distinct?: Prisma.ProfesorScalarFieldEnum | Prisma.ProfesorScalarFieldEnum[];
};
/**
 * profesor create
 */
export type profesorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profesor
     */
    select?: Prisma.profesorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profesor
     */
    omit?: Prisma.profesorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.profesorInclude<ExtArgs> | null;
    /**
     * The data needed to create a profesor.
     */
    data: Prisma.XOR<Prisma.profesorCreateInput, Prisma.profesorUncheckedCreateInput>;
};
/**
 * profesor createMany
 */
export type profesorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many profesors.
     */
    data: Prisma.profesorCreateManyInput | Prisma.profesorCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * profesor update
 */
export type profesorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profesor
     */
    select?: Prisma.profesorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profesor
     */
    omit?: Prisma.profesorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.profesorInclude<ExtArgs> | null;
    /**
     * The data needed to update a profesor.
     */
    data: Prisma.XOR<Prisma.profesorUpdateInput, Prisma.profesorUncheckedUpdateInput>;
    /**
     * Choose, which profesor to update.
     */
    where: Prisma.profesorWhereUniqueInput;
};
/**
 * profesor updateMany
 */
export type profesorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update profesors.
     */
    data: Prisma.XOR<Prisma.profesorUpdateManyMutationInput, Prisma.profesorUncheckedUpdateManyInput>;
    /**
     * Filter which profesors to update
     */
    where?: Prisma.profesorWhereInput;
    /**
     * Limit how many profesors to update.
     */
    limit?: number;
};
/**
 * profesor upsert
 */
export type profesorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profesor
     */
    select?: Prisma.profesorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profesor
     */
    omit?: Prisma.profesorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.profesorInclude<ExtArgs> | null;
    /**
     * The filter to search for the profesor to update in case it exists.
     */
    where: Prisma.profesorWhereUniqueInput;
    /**
     * In case the profesor found by the `where` argument doesn't exist, create a new profesor with this data.
     */
    create: Prisma.XOR<Prisma.profesorCreateInput, Prisma.profesorUncheckedCreateInput>;
    /**
     * In case the profesor was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.profesorUpdateInput, Prisma.profesorUncheckedUpdateInput>;
};
/**
 * profesor delete
 */
export type profesorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profesor
     */
    select?: Prisma.profesorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profesor
     */
    omit?: Prisma.profesorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.profesorInclude<ExtArgs> | null;
    /**
     * Filter which profesor to delete.
     */
    where: Prisma.profesorWhereUniqueInput;
};
/**
 * profesor deleteMany
 */
export type profesorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which profesors to delete
     */
    where?: Prisma.profesorWhereInput;
    /**
     * Limit how many profesors to delete.
     */
    limit?: number;
};
/**
 * profesor.clase
 */
export type profesor$claseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clase
     */
    select?: Prisma.claseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the clase
     */
    omit?: Prisma.claseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.claseInclude<ExtArgs> | null;
    where?: Prisma.claseWhereInput;
    orderBy?: Prisma.claseOrderByWithRelationInput | Prisma.claseOrderByWithRelationInput[];
    cursor?: Prisma.claseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClaseScalarFieldEnum | Prisma.ClaseScalarFieldEnum[];
};
/**
 * profesor.contrato
 */
export type profesor$contratoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contrato
     */
    select?: Prisma.contratoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contrato
     */
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contratoInclude<ExtArgs> | null;
    where?: Prisma.contratoWhereInput;
    orderBy?: Prisma.contratoOrderByWithRelationInput | Prisma.contratoOrderByWithRelationInput[];
    cursor?: Prisma.contratoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContratoScalarFieldEnum | Prisma.ContratoScalarFieldEnum[];
};
/**
 * profesor.nomina
 */
export type profesor$nominaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nomina
     */
    select?: Prisma.nominaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the nomina
     */
    omit?: Prisma.nominaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.nominaInclude<ExtArgs> | null;
    where?: Prisma.nominaWhereInput;
    orderBy?: Prisma.nominaOrderByWithRelationInput | Prisma.nominaOrderByWithRelationInput[];
    cursor?: Prisma.nominaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NominaScalarFieldEnum | Prisma.NominaScalarFieldEnum[];
};
/**
 * profesor.profesorperiodo
 */
export type profesor$profesorperiodoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.profesorperiodoWhereInput;
    orderBy?: Prisma.profesorperiodoOrderByWithRelationInput | Prisma.profesorperiodoOrderByWithRelationInput[];
    cursor?: Prisma.profesorperiodoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfesorperiodoScalarFieldEnum | Prisma.ProfesorperiodoScalarFieldEnum[];
};
/**
 * profesor without action
 */
export type profesorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profesor
     */
    select?: Prisma.profesorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the profesor
     */
    omit?: Prisma.profesorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.profesorInclude<ExtArgs> | null;
};
//# sourceMappingURL=profesor.d.ts.map