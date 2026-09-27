import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model musico
 *
 */
export type musicoModel = runtime.Types.Result.DefaultSelection<Prisma.$musicoPayload>;
export type AggregateMusico = {
    _count: MusicoCountAggregateOutputType | null;
    _min: MusicoMinAggregateOutputType | null;
    _max: MusicoMaxAggregateOutputType | null;
};
export type MusicoMinAggregateOutputType = {
    id: string | null;
    personaId: string | null;
    fechaAlta: Date | null;
    fechaBaja: Date | null;
    activo: boolean | null;
    observaciones: string | null;
};
export type MusicoMaxAggregateOutputType = {
    id: string | null;
    personaId: string | null;
    fechaAlta: Date | null;
    fechaBaja: Date | null;
    activo: boolean | null;
    observaciones: string | null;
};
export type MusicoCountAggregateOutputType = {
    id: number;
    personaId: number;
    fechaAlta: number;
    fechaBaja: number;
    activo: number;
    observaciones: number;
    _all: number;
};
export type MusicoMinAggregateInputType = {
    id?: true;
    personaId?: true;
    fechaAlta?: true;
    fechaBaja?: true;
    activo?: true;
    observaciones?: true;
};
export type MusicoMaxAggregateInputType = {
    id?: true;
    personaId?: true;
    fechaAlta?: true;
    fechaBaja?: true;
    activo?: true;
    observaciones?: true;
};
export type MusicoCountAggregateInputType = {
    id?: true;
    personaId?: true;
    fechaAlta?: true;
    fechaBaja?: true;
    activo?: true;
    observaciones?: true;
    _all?: true;
};
export type MusicoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which musico to aggregate.
     */
    where?: Prisma.musicoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of musicos to fetch.
     */
    orderBy?: Prisma.musicoOrderByWithRelationInput | Prisma.musicoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.musicoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` musicos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` musicos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned musicos
    **/
    _count?: true | MusicoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MusicoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MusicoMaxAggregateInputType;
};
export type GetMusicoAggregateType<T extends MusicoAggregateArgs> = {
    [P in keyof T & keyof AggregateMusico]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMusico[P]> : Prisma.GetScalarType<T[P], AggregateMusico[P]>;
};
export type musicoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.musicoWhereInput;
    orderBy?: Prisma.musicoOrderByWithAggregationInput | Prisma.musicoOrderByWithAggregationInput[];
    by: Prisma.MusicoScalarFieldEnum[] | Prisma.MusicoScalarFieldEnum;
    having?: Prisma.musicoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MusicoCountAggregateInputType | true;
    _min?: MusicoMinAggregateInputType;
    _max?: MusicoMaxAggregateInputType;
};
export type MusicoGroupByOutputType = {
    id: string;
    personaId: string;
    fechaAlta: Date;
    fechaBaja: Date | null;
    activo: boolean;
    observaciones: string | null;
    _count: MusicoCountAggregateOutputType | null;
    _min: MusicoMinAggregateOutputType | null;
    _max: MusicoMaxAggregateOutputType | null;
};
export type GetMusicoGroupByPayload<T extends musicoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MusicoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MusicoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MusicoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MusicoGroupByOutputType[P]>;
}>>;
export type musicoWhereInput = {
    AND?: Prisma.musicoWhereInput | Prisma.musicoWhereInput[];
    OR?: Prisma.musicoWhereInput[];
    NOT?: Prisma.musicoWhereInput | Prisma.musicoWhereInput[];
    id?: Prisma.StringFilter<"musico"> | string;
    personaId?: Prisma.StringFilter<"musico"> | string;
    fechaAlta?: Prisma.DateTimeFilter<"musico"> | Date | string;
    fechaBaja?: Prisma.DateTimeNullableFilter<"musico"> | Date | string | null;
    activo?: Prisma.BoolFilter<"musico"> | boolean;
    observaciones?: Prisma.StringNullableFilter<"musico"> | string | null;
    asistencia?: Prisma.AsistenciaListRelationFilter;
    lineareparto?: Prisma.LinearepartoListRelationFilter;
    persona?: Prisma.XOR<Prisma.PersonaScalarRelationFilter, Prisma.personaWhereInput>;
    musicoperiodo?: Prisma.MusicoperiodoListRelationFilter;
};
export type musicoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    asistencia?: Prisma.asistenciaOrderByRelationAggregateInput;
    lineareparto?: Prisma.linearepartoOrderByRelationAggregateInput;
    persona?: Prisma.personaOrderByWithRelationInput;
    musicoperiodo?: Prisma.musicoperiodoOrderByRelationAggregateInput;
    _relevance?: Prisma.musicoOrderByRelevanceInput;
};
export type musicoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    personaId?: string;
    AND?: Prisma.musicoWhereInput | Prisma.musicoWhereInput[];
    OR?: Prisma.musicoWhereInput[];
    NOT?: Prisma.musicoWhereInput | Prisma.musicoWhereInput[];
    fechaAlta?: Prisma.DateTimeFilter<"musico"> | Date | string;
    fechaBaja?: Prisma.DateTimeNullableFilter<"musico"> | Date | string | null;
    activo?: Prisma.BoolFilter<"musico"> | boolean;
    observaciones?: Prisma.StringNullableFilter<"musico"> | string | null;
    asistencia?: Prisma.AsistenciaListRelationFilter;
    lineareparto?: Prisma.LinearepartoListRelationFilter;
    persona?: Prisma.XOR<Prisma.PersonaScalarRelationFilter, Prisma.personaWhereInput>;
    musicoperiodo?: Prisma.MusicoperiodoListRelationFilter;
}, "id" | "personaId">;
export type musicoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.musicoCountOrderByAggregateInput;
    _max?: Prisma.musicoMaxOrderByAggregateInput;
    _min?: Prisma.musicoMinOrderByAggregateInput;
};
export type musicoScalarWhereWithAggregatesInput = {
    AND?: Prisma.musicoScalarWhereWithAggregatesInput | Prisma.musicoScalarWhereWithAggregatesInput[];
    OR?: Prisma.musicoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.musicoScalarWhereWithAggregatesInput | Prisma.musicoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"musico"> | string;
    personaId?: Prisma.StringWithAggregatesFilter<"musico"> | string;
    fechaAlta?: Prisma.DateTimeWithAggregatesFilter<"musico"> | Date | string;
    fechaBaja?: Prisma.DateTimeNullableWithAggregatesFilter<"musico"> | Date | string | null;
    activo?: Prisma.BoolWithAggregatesFilter<"musico"> | boolean;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"musico"> | string | null;
};
export type musicoCreateInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    asistencia?: Prisma.asistenciaCreateNestedManyWithoutMusicoInput;
    lineareparto?: Prisma.linearepartoCreateNestedManyWithoutMusicoInput;
    persona: Prisma.personaCreateNestedOneWithoutMusicoInput;
    musicoperiodo?: Prisma.musicoperiodoCreateNestedManyWithoutMusicoInput;
};
export type musicoUncheckedCreateInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    asistencia?: Prisma.asistenciaUncheckedCreateNestedManyWithoutMusicoInput;
    lineareparto?: Prisma.linearepartoUncheckedCreateNestedManyWithoutMusicoInput;
    musicoperiodo?: Prisma.musicoperiodoUncheckedCreateNestedManyWithoutMusicoInput;
};
export type musicoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asistencia?: Prisma.asistenciaUpdateManyWithoutMusicoNestedInput;
    lineareparto?: Prisma.linearepartoUpdateManyWithoutMusicoNestedInput;
    persona?: Prisma.personaUpdateOneRequiredWithoutMusicoNestedInput;
    musicoperiodo?: Prisma.musicoperiodoUpdateManyWithoutMusicoNestedInput;
};
export type musicoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asistencia?: Prisma.asistenciaUncheckedUpdateManyWithoutMusicoNestedInput;
    lineareparto?: Prisma.linearepartoUncheckedUpdateManyWithoutMusicoNestedInput;
    musicoperiodo?: Prisma.musicoperiodoUncheckedUpdateManyWithoutMusicoNestedInput;
};
export type musicoCreateManyInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
};
export type musicoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type musicoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MusicoScalarRelationFilter = {
    is?: Prisma.musicoWhereInput;
    isNot?: Prisma.musicoWhereInput;
};
export type musicoOrderByRelevanceInput = {
    fields: Prisma.musicoOrderByRelevanceFieldEnum | Prisma.musicoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type musicoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
};
export type musicoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
};
export type musicoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
};
export type MusicoNullableScalarRelationFilter = {
    is?: Prisma.musicoWhereInput | null;
    isNot?: Prisma.musicoWhereInput | null;
};
export type musicoCreateNestedOneWithoutAsistenciaInput = {
    create?: Prisma.XOR<Prisma.musicoCreateWithoutAsistenciaInput, Prisma.musicoUncheckedCreateWithoutAsistenciaInput>;
    connectOrCreate?: Prisma.musicoCreateOrConnectWithoutAsistenciaInput;
    connect?: Prisma.musicoWhereUniqueInput;
};
export type musicoUpdateOneRequiredWithoutAsistenciaNestedInput = {
    create?: Prisma.XOR<Prisma.musicoCreateWithoutAsistenciaInput, Prisma.musicoUncheckedCreateWithoutAsistenciaInput>;
    connectOrCreate?: Prisma.musicoCreateOrConnectWithoutAsistenciaInput;
    upsert?: Prisma.musicoUpsertWithoutAsistenciaInput;
    connect?: Prisma.musicoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.musicoUpdateToOneWithWhereWithoutAsistenciaInput, Prisma.musicoUpdateWithoutAsistenciaInput>, Prisma.musicoUncheckedUpdateWithoutAsistenciaInput>;
};
export type musicoCreateNestedOneWithoutLinearepartoInput = {
    create?: Prisma.XOR<Prisma.musicoCreateWithoutLinearepartoInput, Prisma.musicoUncheckedCreateWithoutLinearepartoInput>;
    connectOrCreate?: Prisma.musicoCreateOrConnectWithoutLinearepartoInput;
    connect?: Prisma.musicoWhereUniqueInput;
};
export type musicoUpdateOneRequiredWithoutLinearepartoNestedInput = {
    create?: Prisma.XOR<Prisma.musicoCreateWithoutLinearepartoInput, Prisma.musicoUncheckedCreateWithoutLinearepartoInput>;
    connectOrCreate?: Prisma.musicoCreateOrConnectWithoutLinearepartoInput;
    upsert?: Prisma.musicoUpsertWithoutLinearepartoInput;
    connect?: Prisma.musicoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.musicoUpdateToOneWithWhereWithoutLinearepartoInput, Prisma.musicoUpdateWithoutLinearepartoInput>, Prisma.musicoUncheckedUpdateWithoutLinearepartoInput>;
};
export type musicoCreateNestedOneWithoutPersonaInput = {
    create?: Prisma.XOR<Prisma.musicoCreateWithoutPersonaInput, Prisma.musicoUncheckedCreateWithoutPersonaInput>;
    connectOrCreate?: Prisma.musicoCreateOrConnectWithoutPersonaInput;
    connect?: Prisma.musicoWhereUniqueInput;
};
export type musicoUncheckedCreateNestedOneWithoutPersonaInput = {
    create?: Prisma.XOR<Prisma.musicoCreateWithoutPersonaInput, Prisma.musicoUncheckedCreateWithoutPersonaInput>;
    connectOrCreate?: Prisma.musicoCreateOrConnectWithoutPersonaInput;
    connect?: Prisma.musicoWhereUniqueInput;
};
export type musicoUpdateOneWithoutPersonaNestedInput = {
    create?: Prisma.XOR<Prisma.musicoCreateWithoutPersonaInput, Prisma.musicoUncheckedCreateWithoutPersonaInput>;
    connectOrCreate?: Prisma.musicoCreateOrConnectWithoutPersonaInput;
    upsert?: Prisma.musicoUpsertWithoutPersonaInput;
    disconnect?: Prisma.musicoWhereInput | boolean;
    delete?: Prisma.musicoWhereInput | boolean;
    connect?: Prisma.musicoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.musicoUpdateToOneWithWhereWithoutPersonaInput, Prisma.musicoUpdateWithoutPersonaInput>, Prisma.musicoUncheckedUpdateWithoutPersonaInput>;
};
export type musicoUncheckedUpdateOneWithoutPersonaNestedInput = {
    create?: Prisma.XOR<Prisma.musicoCreateWithoutPersonaInput, Prisma.musicoUncheckedCreateWithoutPersonaInput>;
    connectOrCreate?: Prisma.musicoCreateOrConnectWithoutPersonaInput;
    upsert?: Prisma.musicoUpsertWithoutPersonaInput;
    disconnect?: Prisma.musicoWhereInput | boolean;
    delete?: Prisma.musicoWhereInput | boolean;
    connect?: Prisma.musicoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.musicoUpdateToOneWithWhereWithoutPersonaInput, Prisma.musicoUpdateWithoutPersonaInput>, Prisma.musicoUncheckedUpdateWithoutPersonaInput>;
};
export type musicoCreateNestedOneWithoutMusicoperiodoInput = {
    create?: Prisma.XOR<Prisma.musicoCreateWithoutMusicoperiodoInput, Prisma.musicoUncheckedCreateWithoutMusicoperiodoInput>;
    connectOrCreate?: Prisma.musicoCreateOrConnectWithoutMusicoperiodoInput;
    connect?: Prisma.musicoWhereUniqueInput;
};
export type musicoUpdateOneRequiredWithoutMusicoperiodoNestedInput = {
    create?: Prisma.XOR<Prisma.musicoCreateWithoutMusicoperiodoInput, Prisma.musicoUncheckedCreateWithoutMusicoperiodoInput>;
    connectOrCreate?: Prisma.musicoCreateOrConnectWithoutMusicoperiodoInput;
    upsert?: Prisma.musicoUpsertWithoutMusicoperiodoInput;
    connect?: Prisma.musicoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.musicoUpdateToOneWithWhereWithoutMusicoperiodoInput, Prisma.musicoUpdateWithoutMusicoperiodoInput>, Prisma.musicoUncheckedUpdateWithoutMusicoperiodoInput>;
};
export type musicoCreateWithoutAsistenciaInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    lineareparto?: Prisma.linearepartoCreateNestedManyWithoutMusicoInput;
    persona: Prisma.personaCreateNestedOneWithoutMusicoInput;
    musicoperiodo?: Prisma.musicoperiodoCreateNestedManyWithoutMusicoInput;
};
export type musicoUncheckedCreateWithoutAsistenciaInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    lineareparto?: Prisma.linearepartoUncheckedCreateNestedManyWithoutMusicoInput;
    musicoperiodo?: Prisma.musicoperiodoUncheckedCreateNestedManyWithoutMusicoInput;
};
export type musicoCreateOrConnectWithoutAsistenciaInput = {
    where: Prisma.musicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.musicoCreateWithoutAsistenciaInput, Prisma.musicoUncheckedCreateWithoutAsistenciaInput>;
};
export type musicoUpsertWithoutAsistenciaInput = {
    update: Prisma.XOR<Prisma.musicoUpdateWithoutAsistenciaInput, Prisma.musicoUncheckedUpdateWithoutAsistenciaInput>;
    create: Prisma.XOR<Prisma.musicoCreateWithoutAsistenciaInput, Prisma.musicoUncheckedCreateWithoutAsistenciaInput>;
    where?: Prisma.musicoWhereInput;
};
export type musicoUpdateToOneWithWhereWithoutAsistenciaInput = {
    where?: Prisma.musicoWhereInput;
    data: Prisma.XOR<Prisma.musicoUpdateWithoutAsistenciaInput, Prisma.musicoUncheckedUpdateWithoutAsistenciaInput>;
};
export type musicoUpdateWithoutAsistenciaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lineareparto?: Prisma.linearepartoUpdateManyWithoutMusicoNestedInput;
    persona?: Prisma.personaUpdateOneRequiredWithoutMusicoNestedInput;
    musicoperiodo?: Prisma.musicoperiodoUpdateManyWithoutMusicoNestedInput;
};
export type musicoUncheckedUpdateWithoutAsistenciaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lineareparto?: Prisma.linearepartoUncheckedUpdateManyWithoutMusicoNestedInput;
    musicoperiodo?: Prisma.musicoperiodoUncheckedUpdateManyWithoutMusicoNestedInput;
};
export type musicoCreateWithoutLinearepartoInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    asistencia?: Prisma.asistenciaCreateNestedManyWithoutMusicoInput;
    persona: Prisma.personaCreateNestedOneWithoutMusicoInput;
    musicoperiodo?: Prisma.musicoperiodoCreateNestedManyWithoutMusicoInput;
};
export type musicoUncheckedCreateWithoutLinearepartoInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    asistencia?: Prisma.asistenciaUncheckedCreateNestedManyWithoutMusicoInput;
    musicoperiodo?: Prisma.musicoperiodoUncheckedCreateNestedManyWithoutMusicoInput;
};
export type musicoCreateOrConnectWithoutLinearepartoInput = {
    where: Prisma.musicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.musicoCreateWithoutLinearepartoInput, Prisma.musicoUncheckedCreateWithoutLinearepartoInput>;
};
export type musicoUpsertWithoutLinearepartoInput = {
    update: Prisma.XOR<Prisma.musicoUpdateWithoutLinearepartoInput, Prisma.musicoUncheckedUpdateWithoutLinearepartoInput>;
    create: Prisma.XOR<Prisma.musicoCreateWithoutLinearepartoInput, Prisma.musicoUncheckedCreateWithoutLinearepartoInput>;
    where?: Prisma.musicoWhereInput;
};
export type musicoUpdateToOneWithWhereWithoutLinearepartoInput = {
    where?: Prisma.musicoWhereInput;
    data: Prisma.XOR<Prisma.musicoUpdateWithoutLinearepartoInput, Prisma.musicoUncheckedUpdateWithoutLinearepartoInput>;
};
export type musicoUpdateWithoutLinearepartoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asistencia?: Prisma.asistenciaUpdateManyWithoutMusicoNestedInput;
    persona?: Prisma.personaUpdateOneRequiredWithoutMusicoNestedInput;
    musicoperiodo?: Prisma.musicoperiodoUpdateManyWithoutMusicoNestedInput;
};
export type musicoUncheckedUpdateWithoutLinearepartoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asistencia?: Prisma.asistenciaUncheckedUpdateManyWithoutMusicoNestedInput;
    musicoperiodo?: Prisma.musicoperiodoUncheckedUpdateManyWithoutMusicoNestedInput;
};
export type musicoCreateWithoutPersonaInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    asistencia?: Prisma.asistenciaCreateNestedManyWithoutMusicoInput;
    lineareparto?: Prisma.linearepartoCreateNestedManyWithoutMusicoInput;
    musicoperiodo?: Prisma.musicoperiodoCreateNestedManyWithoutMusicoInput;
};
export type musicoUncheckedCreateWithoutPersonaInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    asistencia?: Prisma.asistenciaUncheckedCreateNestedManyWithoutMusicoInput;
    lineareparto?: Prisma.linearepartoUncheckedCreateNestedManyWithoutMusicoInput;
    musicoperiodo?: Prisma.musicoperiodoUncheckedCreateNestedManyWithoutMusicoInput;
};
export type musicoCreateOrConnectWithoutPersonaInput = {
    where: Prisma.musicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.musicoCreateWithoutPersonaInput, Prisma.musicoUncheckedCreateWithoutPersonaInput>;
};
export type musicoUpsertWithoutPersonaInput = {
    update: Prisma.XOR<Prisma.musicoUpdateWithoutPersonaInput, Prisma.musicoUncheckedUpdateWithoutPersonaInput>;
    create: Prisma.XOR<Prisma.musicoCreateWithoutPersonaInput, Prisma.musicoUncheckedCreateWithoutPersonaInput>;
    where?: Prisma.musicoWhereInput;
};
export type musicoUpdateToOneWithWhereWithoutPersonaInput = {
    where?: Prisma.musicoWhereInput;
    data: Prisma.XOR<Prisma.musicoUpdateWithoutPersonaInput, Prisma.musicoUncheckedUpdateWithoutPersonaInput>;
};
export type musicoUpdateWithoutPersonaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asistencia?: Prisma.asistenciaUpdateManyWithoutMusicoNestedInput;
    lineareparto?: Prisma.linearepartoUpdateManyWithoutMusicoNestedInput;
    musicoperiodo?: Prisma.musicoperiodoUpdateManyWithoutMusicoNestedInput;
};
export type musicoUncheckedUpdateWithoutPersonaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asistencia?: Prisma.asistenciaUncheckedUpdateManyWithoutMusicoNestedInput;
    lineareparto?: Prisma.linearepartoUncheckedUpdateManyWithoutMusicoNestedInput;
    musicoperiodo?: Prisma.musicoperiodoUncheckedUpdateManyWithoutMusicoNestedInput;
};
export type musicoCreateWithoutMusicoperiodoInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    asistencia?: Prisma.asistenciaCreateNestedManyWithoutMusicoInput;
    lineareparto?: Prisma.linearepartoCreateNestedManyWithoutMusicoInput;
    persona: Prisma.personaCreateNestedOneWithoutMusicoInput;
};
export type musicoUncheckedCreateWithoutMusicoperiodoInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    asistencia?: Prisma.asistenciaUncheckedCreateNestedManyWithoutMusicoInput;
    lineareparto?: Prisma.linearepartoUncheckedCreateNestedManyWithoutMusicoInput;
};
export type musicoCreateOrConnectWithoutMusicoperiodoInput = {
    where: Prisma.musicoWhereUniqueInput;
    create: Prisma.XOR<Prisma.musicoCreateWithoutMusicoperiodoInput, Prisma.musicoUncheckedCreateWithoutMusicoperiodoInput>;
};
export type musicoUpsertWithoutMusicoperiodoInput = {
    update: Prisma.XOR<Prisma.musicoUpdateWithoutMusicoperiodoInput, Prisma.musicoUncheckedUpdateWithoutMusicoperiodoInput>;
    create: Prisma.XOR<Prisma.musicoCreateWithoutMusicoperiodoInput, Prisma.musicoUncheckedCreateWithoutMusicoperiodoInput>;
    where?: Prisma.musicoWhereInput;
};
export type musicoUpdateToOneWithWhereWithoutMusicoperiodoInput = {
    where?: Prisma.musicoWhereInput;
    data: Prisma.XOR<Prisma.musicoUpdateWithoutMusicoperiodoInput, Prisma.musicoUncheckedUpdateWithoutMusicoperiodoInput>;
};
export type musicoUpdateWithoutMusicoperiodoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asistencia?: Prisma.asistenciaUpdateManyWithoutMusicoNestedInput;
    lineareparto?: Prisma.linearepartoUpdateManyWithoutMusicoNestedInput;
    persona?: Prisma.personaUpdateOneRequiredWithoutMusicoNestedInput;
};
export type musicoUncheckedUpdateWithoutMusicoperiodoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    asistencia?: Prisma.asistenciaUncheckedUpdateManyWithoutMusicoNestedInput;
    lineareparto?: Prisma.linearepartoUncheckedUpdateManyWithoutMusicoNestedInput;
};
/**
 * Count Type MusicoCountOutputType
 */
export type MusicoCountOutputType = {
    asistencia: number;
    lineareparto: number;
    musicoperiodo: number;
};
export type MusicoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asistencia?: boolean | MusicoCountOutputTypeCountAsistenciaArgs;
    lineareparto?: boolean | MusicoCountOutputTypeCountLinearepartoArgs;
    musicoperiodo?: boolean | MusicoCountOutputTypeCountMusicoperiodoArgs;
};
/**
 * MusicoCountOutputType without action
 */
export type MusicoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicoCountOutputType
     */
    select?: Prisma.MusicoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MusicoCountOutputType without action
 */
export type MusicoCountOutputTypeCountAsistenciaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.asistenciaWhereInput;
};
/**
 * MusicoCountOutputType without action
 */
export type MusicoCountOutputTypeCountLinearepartoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.linearepartoWhereInput;
};
/**
 * MusicoCountOutputType without action
 */
export type MusicoCountOutputTypeCountMusicoperiodoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.musicoperiodoWhereInput;
};
export type musicoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    personaId?: boolean;
    fechaAlta?: boolean;
    fechaBaja?: boolean;
    activo?: boolean;
    observaciones?: boolean;
    asistencia?: boolean | Prisma.musico$asistenciaArgs<ExtArgs>;
    lineareparto?: boolean | Prisma.musico$linearepartoArgs<ExtArgs>;
    persona?: boolean | Prisma.personaDefaultArgs<ExtArgs>;
    musicoperiodo?: boolean | Prisma.musico$musicoperiodoArgs<ExtArgs>;
    _count?: boolean | Prisma.MusicoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["musico"]>;
export type musicoSelectScalar = {
    id?: boolean;
    personaId?: boolean;
    fechaAlta?: boolean;
    fechaBaja?: boolean;
    activo?: boolean;
    observaciones?: boolean;
};
export type musicoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "personaId" | "fechaAlta" | "fechaBaja" | "activo" | "observaciones", ExtArgs["result"]["musico"]>;
export type musicoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asistencia?: boolean | Prisma.musico$asistenciaArgs<ExtArgs>;
    lineareparto?: boolean | Prisma.musico$linearepartoArgs<ExtArgs>;
    persona?: boolean | Prisma.personaDefaultArgs<ExtArgs>;
    musicoperiodo?: boolean | Prisma.musico$musicoperiodoArgs<ExtArgs>;
    _count?: boolean | Prisma.MusicoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $musicoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "musico";
    objects: {
        asistencia: Prisma.$asistenciaPayload<ExtArgs>[];
        lineareparto: Prisma.$linearepartoPayload<ExtArgs>[];
        persona: Prisma.$personaPayload<ExtArgs>;
        musicoperiodo: Prisma.$musicoperiodoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        personaId: string;
        fechaAlta: Date;
        fechaBaja: Date | null;
        activo: boolean;
        observaciones: string | null;
    }, ExtArgs["result"]["musico"]>;
    composites: {};
};
export type musicoGetPayload<S extends boolean | null | undefined | musicoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$musicoPayload, S>;
export type musicoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<musicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MusicoCountAggregateInputType | true;
};
export interface musicoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['musico'];
        meta: {
            name: 'musico';
        };
    };
    /**
     * Find zero or one Musico that matches the filter.
     * @param {musicoFindUniqueArgs} args - Arguments to find a Musico
     * @example
     * // Get one Musico
     * const musico = await prisma.musico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends musicoFindUniqueArgs>(args: Prisma.SelectSubset<T, musicoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__musicoClient<runtime.Types.Result.GetResult<Prisma.$musicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Musico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {musicoFindUniqueOrThrowArgs} args - Arguments to find a Musico
     * @example
     * // Get one Musico
     * const musico = await prisma.musico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends musicoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, musicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__musicoClient<runtime.Types.Result.GetResult<Prisma.$musicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Musico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicoFindFirstArgs} args - Arguments to find a Musico
     * @example
     * // Get one Musico
     * const musico = await prisma.musico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends musicoFindFirstArgs>(args?: Prisma.SelectSubset<T, musicoFindFirstArgs<ExtArgs>>): Prisma.Prisma__musicoClient<runtime.Types.Result.GetResult<Prisma.$musicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Musico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicoFindFirstOrThrowArgs} args - Arguments to find a Musico
     * @example
     * // Get one Musico
     * const musico = await prisma.musico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends musicoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, musicoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__musicoClient<runtime.Types.Result.GetResult<Prisma.$musicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Musicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Musicos
     * const musicos = await prisma.musico.findMany()
     *
     * // Get first 10 Musicos
     * const musicos = await prisma.musico.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const musicoWithIdOnly = await prisma.musico.findMany({ select: { id: true } })
     *
     */
    findMany<T extends musicoFindManyArgs>(args?: Prisma.SelectSubset<T, musicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$musicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Musico.
     * @param {musicoCreateArgs} args - Arguments to create a Musico.
     * @example
     * // Create one Musico
     * const Musico = await prisma.musico.create({
     *   data: {
     *     // ... data to create a Musico
     *   }
     * })
     *
     */
    create<T extends musicoCreateArgs>(args: Prisma.SelectSubset<T, musicoCreateArgs<ExtArgs>>): Prisma.Prisma__musicoClient<runtime.Types.Result.GetResult<Prisma.$musicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Musicos.
     * @param {musicoCreateManyArgs} args - Arguments to create many Musicos.
     * @example
     * // Create many Musicos
     * const musico = await prisma.musico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends musicoCreateManyArgs>(args?: Prisma.SelectSubset<T, musicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Musico.
     * @param {musicoDeleteArgs} args - Arguments to delete one Musico.
     * @example
     * // Delete one Musico
     * const Musico = await prisma.musico.delete({
     *   where: {
     *     // ... filter to delete one Musico
     *   }
     * })
     *
     */
    delete<T extends musicoDeleteArgs>(args: Prisma.SelectSubset<T, musicoDeleteArgs<ExtArgs>>): Prisma.Prisma__musicoClient<runtime.Types.Result.GetResult<Prisma.$musicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Musico.
     * @param {musicoUpdateArgs} args - Arguments to update one Musico.
     * @example
     * // Update one Musico
     * const musico = await prisma.musico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends musicoUpdateArgs>(args: Prisma.SelectSubset<T, musicoUpdateArgs<ExtArgs>>): Prisma.Prisma__musicoClient<runtime.Types.Result.GetResult<Prisma.$musicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Musicos.
     * @param {musicoDeleteManyArgs} args - Arguments to filter Musicos to delete.
     * @example
     * // Delete a few Musicos
     * const { count } = await prisma.musico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends musicoDeleteManyArgs>(args?: Prisma.SelectSubset<T, musicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Musicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Musicos
     * const musico = await prisma.musico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends musicoUpdateManyArgs>(args: Prisma.SelectSubset<T, musicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Musico.
     * @param {musicoUpsertArgs} args - Arguments to update or create a Musico.
     * @example
     * // Update or create a Musico
     * const musico = await prisma.musico.upsert({
     *   create: {
     *     // ... data to create a Musico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Musico we want to update
     *   }
     * })
     */
    upsert<T extends musicoUpsertArgs>(args: Prisma.SelectSubset<T, musicoUpsertArgs<ExtArgs>>): Prisma.Prisma__musicoClient<runtime.Types.Result.GetResult<Prisma.$musicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Musicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicoCountArgs} args - Arguments to filter Musicos to count.
     * @example
     * // Count the number of Musicos
     * const count = await prisma.musico.count({
     *   where: {
     *     // ... the filter for the Musicos we want to count
     *   }
     * })
    **/
    count<T extends musicoCountArgs>(args?: Prisma.Subset<T, musicoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MusicoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Musico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MusicoAggregateArgs>(args: Prisma.Subset<T, MusicoAggregateArgs>): Prisma.PrismaPromise<GetMusicoAggregateType<T>>;
    /**
     * Group by Musico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {musicoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends musicoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: musicoGroupByArgs['orderBy'];
    } : {
        orderBy?: musicoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, musicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMusicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the musico model
     */
    readonly fields: musicoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for musico.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__musicoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    asistencia<T extends Prisma.musico$asistenciaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.musico$asistenciaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    lineareparto<T extends Prisma.musico$linearepartoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.musico$linearepartoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$linearepartoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    persona<T extends Prisma.personaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.personaDefaultArgs<ExtArgs>>): Prisma.Prisma__personaClient<runtime.Types.Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    musicoperiodo<T extends Prisma.musico$musicoperiodoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.musico$musicoperiodoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$musicoperiodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the musico model
 */
export interface musicoFieldRefs {
    readonly id: Prisma.FieldRef<"musico", 'String'>;
    readonly personaId: Prisma.FieldRef<"musico", 'String'>;
    readonly fechaAlta: Prisma.FieldRef<"musico", 'DateTime'>;
    readonly fechaBaja: Prisma.FieldRef<"musico", 'DateTime'>;
    readonly activo: Prisma.FieldRef<"musico", 'Boolean'>;
    readonly observaciones: Prisma.FieldRef<"musico", 'String'>;
}
/**
 * musico findUnique
 */
export type musicoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musico
     */
    select?: Prisma.musicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the musico
     */
    omit?: Prisma.musicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.musicoInclude<ExtArgs> | null;
    /**
     * Filter, which musico to fetch.
     */
    where: Prisma.musicoWhereUniqueInput;
};
/**
 * musico findUniqueOrThrow
 */
export type musicoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musico
     */
    select?: Prisma.musicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the musico
     */
    omit?: Prisma.musicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.musicoInclude<ExtArgs> | null;
    /**
     * Filter, which musico to fetch.
     */
    where: Prisma.musicoWhereUniqueInput;
};
/**
 * musico findFirst
 */
export type musicoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musico
     */
    select?: Prisma.musicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the musico
     */
    omit?: Prisma.musicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.musicoInclude<ExtArgs> | null;
    /**
     * Filter, which musico to fetch.
     */
    where?: Prisma.musicoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of musicos to fetch.
     */
    orderBy?: Prisma.musicoOrderByWithRelationInput | Prisma.musicoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for musicos.
     */
    cursor?: Prisma.musicoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` musicos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` musicos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of musicos.
     */
    distinct?: Prisma.MusicoScalarFieldEnum | Prisma.MusicoScalarFieldEnum[];
};
/**
 * musico findFirstOrThrow
 */
export type musicoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musico
     */
    select?: Prisma.musicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the musico
     */
    omit?: Prisma.musicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.musicoInclude<ExtArgs> | null;
    /**
     * Filter, which musico to fetch.
     */
    where?: Prisma.musicoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of musicos to fetch.
     */
    orderBy?: Prisma.musicoOrderByWithRelationInput | Prisma.musicoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for musicos.
     */
    cursor?: Prisma.musicoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` musicos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` musicos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of musicos.
     */
    distinct?: Prisma.MusicoScalarFieldEnum | Prisma.MusicoScalarFieldEnum[];
};
/**
 * musico findMany
 */
export type musicoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musico
     */
    select?: Prisma.musicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the musico
     */
    omit?: Prisma.musicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.musicoInclude<ExtArgs> | null;
    /**
     * Filter, which musicos to fetch.
     */
    where?: Prisma.musicoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of musicos to fetch.
     */
    orderBy?: Prisma.musicoOrderByWithRelationInput | Prisma.musicoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing musicos.
     */
    cursor?: Prisma.musicoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` musicos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` musicos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of musicos.
     */
    distinct?: Prisma.MusicoScalarFieldEnum | Prisma.MusicoScalarFieldEnum[];
};
/**
 * musico create
 */
export type musicoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musico
     */
    select?: Prisma.musicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the musico
     */
    omit?: Prisma.musicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.musicoInclude<ExtArgs> | null;
    /**
     * The data needed to create a musico.
     */
    data: Prisma.XOR<Prisma.musicoCreateInput, Prisma.musicoUncheckedCreateInput>;
};
/**
 * musico createMany
 */
export type musicoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many musicos.
     */
    data: Prisma.musicoCreateManyInput | Prisma.musicoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * musico update
 */
export type musicoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musico
     */
    select?: Prisma.musicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the musico
     */
    omit?: Prisma.musicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.musicoInclude<ExtArgs> | null;
    /**
     * The data needed to update a musico.
     */
    data: Prisma.XOR<Prisma.musicoUpdateInput, Prisma.musicoUncheckedUpdateInput>;
    /**
     * Choose, which musico to update.
     */
    where: Prisma.musicoWhereUniqueInput;
};
/**
 * musico updateMany
 */
export type musicoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update musicos.
     */
    data: Prisma.XOR<Prisma.musicoUpdateManyMutationInput, Prisma.musicoUncheckedUpdateManyInput>;
    /**
     * Filter which musicos to update
     */
    where?: Prisma.musicoWhereInput;
    /**
     * Limit how many musicos to update.
     */
    limit?: number;
};
/**
 * musico upsert
 */
export type musicoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musico
     */
    select?: Prisma.musicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the musico
     */
    omit?: Prisma.musicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.musicoInclude<ExtArgs> | null;
    /**
     * The filter to search for the musico to update in case it exists.
     */
    where: Prisma.musicoWhereUniqueInput;
    /**
     * In case the musico found by the `where` argument doesn't exist, create a new musico with this data.
     */
    create: Prisma.XOR<Prisma.musicoCreateInput, Prisma.musicoUncheckedCreateInput>;
    /**
     * In case the musico was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.musicoUpdateInput, Prisma.musicoUncheckedUpdateInput>;
};
/**
 * musico delete
 */
export type musicoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musico
     */
    select?: Prisma.musicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the musico
     */
    omit?: Prisma.musicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.musicoInclude<ExtArgs> | null;
    /**
     * Filter which musico to delete.
     */
    where: Prisma.musicoWhereUniqueInput;
};
/**
 * musico deleteMany
 */
export type musicoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which musicos to delete
     */
    where?: Prisma.musicoWhereInput;
    /**
     * Limit how many musicos to delete.
     */
    limit?: number;
};
/**
 * musico.asistencia
 */
export type musico$asistenciaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * musico.lineareparto
 */
export type musico$linearepartoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineareparto
     */
    select?: Prisma.linearepartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineareparto
     */
    omit?: Prisma.linearepartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.linearepartoInclude<ExtArgs> | null;
    where?: Prisma.linearepartoWhereInput;
    orderBy?: Prisma.linearepartoOrderByWithRelationInput | Prisma.linearepartoOrderByWithRelationInput[];
    cursor?: Prisma.linearepartoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LinearepartoScalarFieldEnum | Prisma.LinearepartoScalarFieldEnum[];
};
/**
 * musico.musicoperiodo
 */
export type musico$musicoperiodoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.musicoperiodoWhereInput;
    orderBy?: Prisma.musicoperiodoOrderByWithRelationInput | Prisma.musicoperiodoOrderByWithRelationInput[];
    cursor?: Prisma.musicoperiodoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MusicoperiodoScalarFieldEnum | Prisma.MusicoperiodoScalarFieldEnum[];
};
/**
 * musico without action
 */
export type musicoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the musico
     */
    select?: Prisma.musicoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the musico
     */
    omit?: Prisma.musicoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.musicoInclude<ExtArgs> | null;
};
//# sourceMappingURL=musico.d.ts.map