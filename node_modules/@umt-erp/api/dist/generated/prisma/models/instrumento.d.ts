import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model instrumento
 *
 */
export type instrumentoModel = runtime.Types.Result.DefaultSelection<Prisma.$instrumentoPayload>;
export type AggregateInstrumento = {
    _count: InstrumentoCountAggregateOutputType | null;
    _min: InstrumentoMinAggregateOutputType | null;
    _max: InstrumentoMaxAggregateOutputType | null;
};
export type InstrumentoMinAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    seccionId: string | null;
    descripcion: string | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type InstrumentoMaxAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    seccionId: string | null;
    descripcion: string | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type InstrumentoCountAggregateOutputType = {
    id: number;
    nombre: number;
    seccionId: number;
    descripcion: number;
    activo: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type InstrumentoMinAggregateInputType = {
    id?: true;
    nombre?: true;
    seccionId?: true;
    descripcion?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type InstrumentoMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    seccionId?: true;
    descripcion?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type InstrumentoCountAggregateInputType = {
    id?: true;
    nombre?: true;
    seccionId?: true;
    descripcion?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type InstrumentoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which instrumento to aggregate.
     */
    where?: Prisma.instrumentoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of instrumentos to fetch.
     */
    orderBy?: Prisma.instrumentoOrderByWithRelationInput | Prisma.instrumentoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.instrumentoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` instrumentos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` instrumentos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned instrumentos
    **/
    _count?: true | InstrumentoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: InstrumentoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: InstrumentoMaxAggregateInputType;
};
export type GetInstrumentoAggregateType<T extends InstrumentoAggregateArgs> = {
    [P in keyof T & keyof AggregateInstrumento]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInstrumento[P]> : Prisma.GetScalarType<T[P], AggregateInstrumento[P]>;
};
export type instrumentoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.instrumentoWhereInput;
    orderBy?: Prisma.instrumentoOrderByWithAggregationInput | Prisma.instrumentoOrderByWithAggregationInput[];
    by: Prisma.InstrumentoScalarFieldEnum[] | Prisma.InstrumentoScalarFieldEnum;
    having?: Prisma.instrumentoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InstrumentoCountAggregateInputType | true;
    _min?: InstrumentoMinAggregateInputType;
    _max?: InstrumentoMaxAggregateInputType;
};
export type InstrumentoGroupByOutputType = {
    id: string;
    nombre: string;
    seccionId: string;
    descripcion: string | null;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: InstrumentoCountAggregateOutputType | null;
    _min: InstrumentoMinAggregateOutputType | null;
    _max: InstrumentoMaxAggregateOutputType | null;
};
export type GetInstrumentoGroupByPayload<T extends instrumentoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InstrumentoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InstrumentoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InstrumentoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InstrumentoGroupByOutputType[P]>;
}>>;
export type instrumentoWhereInput = {
    AND?: Prisma.instrumentoWhereInput | Prisma.instrumentoWhereInput[];
    OR?: Prisma.instrumentoWhereInput[];
    NOT?: Prisma.instrumentoWhereInput | Prisma.instrumentoWhereInput[];
    id?: Prisma.StringFilter<"instrumento"> | string;
    nombre?: Prisma.StringFilter<"instrumento"> | string;
    seccionId?: Prisma.StringFilter<"instrumento"> | string;
    descripcion?: Prisma.StringNullableFilter<"instrumento"> | string | null;
    activo?: Prisma.BoolFilter<"instrumento"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"instrumento"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"instrumento"> | Date | string;
    seccion?: Prisma.XOR<Prisma.SeccionScalarRelationFilter, Prisma.seccionWhereInput>;
    personainstrumento?: Prisma.PersonainstrumentoListRelationFilter;
};
export type instrumentoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    seccionId?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    seccion?: Prisma.seccionOrderByWithRelationInput;
    personainstrumento?: Prisma.personainstrumentoOrderByRelationAggregateInput;
    _relevance?: Prisma.instrumentoOrderByRelevanceInput;
};
export type instrumentoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    seccionId_nombre?: Prisma.instrumentoSeccionIdNombreCompoundUniqueInput;
    AND?: Prisma.instrumentoWhereInput | Prisma.instrumentoWhereInput[];
    OR?: Prisma.instrumentoWhereInput[];
    NOT?: Prisma.instrumentoWhereInput | Prisma.instrumentoWhereInput[];
    nombre?: Prisma.StringFilter<"instrumento"> | string;
    seccionId?: Prisma.StringFilter<"instrumento"> | string;
    descripcion?: Prisma.StringNullableFilter<"instrumento"> | string | null;
    activo?: Prisma.BoolFilter<"instrumento"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"instrumento"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"instrumento"> | Date | string;
    seccion?: Prisma.XOR<Prisma.SeccionScalarRelationFilter, Prisma.seccionWhereInput>;
    personainstrumento?: Prisma.PersonainstrumentoListRelationFilter;
}, "id" | "seccionId_nombre">;
export type instrumentoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    seccionId?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.instrumentoCountOrderByAggregateInput;
    _max?: Prisma.instrumentoMaxOrderByAggregateInput;
    _min?: Prisma.instrumentoMinOrderByAggregateInput;
};
export type instrumentoScalarWhereWithAggregatesInput = {
    AND?: Prisma.instrumentoScalarWhereWithAggregatesInput | Prisma.instrumentoScalarWhereWithAggregatesInput[];
    OR?: Prisma.instrumentoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.instrumentoScalarWhereWithAggregatesInput | Prisma.instrumentoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"instrumento"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"instrumento"> | string;
    seccionId?: Prisma.StringWithAggregatesFilter<"instrumento"> | string;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"instrumento"> | string | null;
    activo?: Prisma.BoolWithAggregatesFilter<"instrumento"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"instrumento"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"instrumento"> | Date | string;
};
export type instrumentoCreateInput = {
    id: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    seccion: Prisma.seccionCreateNestedOneWithoutInstrumentoInput;
    personainstrumento?: Prisma.personainstrumentoCreateNestedManyWithoutInstrumentoInput;
};
export type instrumentoUncheckedCreateInput = {
    id: string;
    nombre: string;
    seccionId: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    personainstrumento?: Prisma.personainstrumentoUncheckedCreateNestedManyWithoutInstrumentoInput;
};
export type instrumentoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    seccion?: Prisma.seccionUpdateOneRequiredWithoutInstrumentoNestedInput;
    personainstrumento?: Prisma.personainstrumentoUpdateManyWithoutInstrumentoNestedInput;
};
export type instrumentoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    seccionId?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personainstrumento?: Prisma.personainstrumentoUncheckedUpdateManyWithoutInstrumentoNestedInput;
};
export type instrumentoCreateManyInput = {
    id: string;
    nombre: string;
    seccionId: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type instrumentoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type instrumentoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    seccionId?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type InstrumentoListRelationFilter = {
    every?: Prisma.instrumentoWhereInput;
    some?: Prisma.instrumentoWhereInput;
    none?: Prisma.instrumentoWhereInput;
};
export type instrumentoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type instrumentoOrderByRelevanceInput = {
    fields: Prisma.instrumentoOrderByRelevanceFieldEnum | Prisma.instrumentoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type instrumentoSeccionIdNombreCompoundUniqueInput = {
    seccionId: string;
    nombre: string;
};
export type instrumentoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    seccionId?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type instrumentoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    seccionId?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type instrumentoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    seccionId?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type InstrumentoScalarRelationFilter = {
    is?: Prisma.instrumentoWhereInput;
    isNot?: Prisma.instrumentoWhereInput;
};
export type instrumentoCreateNestedManyWithoutSeccionInput = {
    create?: Prisma.XOR<Prisma.instrumentoCreateWithoutSeccionInput, Prisma.instrumentoUncheckedCreateWithoutSeccionInput> | Prisma.instrumentoCreateWithoutSeccionInput[] | Prisma.instrumentoUncheckedCreateWithoutSeccionInput[];
    connectOrCreate?: Prisma.instrumentoCreateOrConnectWithoutSeccionInput | Prisma.instrumentoCreateOrConnectWithoutSeccionInput[];
    createMany?: Prisma.instrumentoCreateManySeccionInputEnvelope;
    connect?: Prisma.instrumentoWhereUniqueInput | Prisma.instrumentoWhereUniqueInput[];
};
export type instrumentoUncheckedCreateNestedManyWithoutSeccionInput = {
    create?: Prisma.XOR<Prisma.instrumentoCreateWithoutSeccionInput, Prisma.instrumentoUncheckedCreateWithoutSeccionInput> | Prisma.instrumentoCreateWithoutSeccionInput[] | Prisma.instrumentoUncheckedCreateWithoutSeccionInput[];
    connectOrCreate?: Prisma.instrumentoCreateOrConnectWithoutSeccionInput | Prisma.instrumentoCreateOrConnectWithoutSeccionInput[];
    createMany?: Prisma.instrumentoCreateManySeccionInputEnvelope;
    connect?: Prisma.instrumentoWhereUniqueInput | Prisma.instrumentoWhereUniqueInput[];
};
export type instrumentoUpdateManyWithoutSeccionNestedInput = {
    create?: Prisma.XOR<Prisma.instrumentoCreateWithoutSeccionInput, Prisma.instrumentoUncheckedCreateWithoutSeccionInput> | Prisma.instrumentoCreateWithoutSeccionInput[] | Prisma.instrumentoUncheckedCreateWithoutSeccionInput[];
    connectOrCreate?: Prisma.instrumentoCreateOrConnectWithoutSeccionInput | Prisma.instrumentoCreateOrConnectWithoutSeccionInput[];
    upsert?: Prisma.instrumentoUpsertWithWhereUniqueWithoutSeccionInput | Prisma.instrumentoUpsertWithWhereUniqueWithoutSeccionInput[];
    createMany?: Prisma.instrumentoCreateManySeccionInputEnvelope;
    set?: Prisma.instrumentoWhereUniqueInput | Prisma.instrumentoWhereUniqueInput[];
    disconnect?: Prisma.instrumentoWhereUniqueInput | Prisma.instrumentoWhereUniqueInput[];
    delete?: Prisma.instrumentoWhereUniqueInput | Prisma.instrumentoWhereUniqueInput[];
    connect?: Prisma.instrumentoWhereUniqueInput | Prisma.instrumentoWhereUniqueInput[];
    update?: Prisma.instrumentoUpdateWithWhereUniqueWithoutSeccionInput | Prisma.instrumentoUpdateWithWhereUniqueWithoutSeccionInput[];
    updateMany?: Prisma.instrumentoUpdateManyWithWhereWithoutSeccionInput | Prisma.instrumentoUpdateManyWithWhereWithoutSeccionInput[];
    deleteMany?: Prisma.instrumentoScalarWhereInput | Prisma.instrumentoScalarWhereInput[];
};
export type instrumentoUncheckedUpdateManyWithoutSeccionNestedInput = {
    create?: Prisma.XOR<Prisma.instrumentoCreateWithoutSeccionInput, Prisma.instrumentoUncheckedCreateWithoutSeccionInput> | Prisma.instrumentoCreateWithoutSeccionInput[] | Prisma.instrumentoUncheckedCreateWithoutSeccionInput[];
    connectOrCreate?: Prisma.instrumentoCreateOrConnectWithoutSeccionInput | Prisma.instrumentoCreateOrConnectWithoutSeccionInput[];
    upsert?: Prisma.instrumentoUpsertWithWhereUniqueWithoutSeccionInput | Prisma.instrumentoUpsertWithWhereUniqueWithoutSeccionInput[];
    createMany?: Prisma.instrumentoCreateManySeccionInputEnvelope;
    set?: Prisma.instrumentoWhereUniqueInput | Prisma.instrumentoWhereUniqueInput[];
    disconnect?: Prisma.instrumentoWhereUniqueInput | Prisma.instrumentoWhereUniqueInput[];
    delete?: Prisma.instrumentoWhereUniqueInput | Prisma.instrumentoWhereUniqueInput[];
    connect?: Prisma.instrumentoWhereUniqueInput | Prisma.instrumentoWhereUniqueInput[];
    update?: Prisma.instrumentoUpdateWithWhereUniqueWithoutSeccionInput | Prisma.instrumentoUpdateWithWhereUniqueWithoutSeccionInput[];
    updateMany?: Prisma.instrumentoUpdateManyWithWhereWithoutSeccionInput | Prisma.instrumentoUpdateManyWithWhereWithoutSeccionInput[];
    deleteMany?: Prisma.instrumentoScalarWhereInput | Prisma.instrumentoScalarWhereInput[];
};
export type instrumentoCreateNestedOneWithoutPersonainstrumentoInput = {
    create?: Prisma.XOR<Prisma.instrumentoCreateWithoutPersonainstrumentoInput, Prisma.instrumentoUncheckedCreateWithoutPersonainstrumentoInput>;
    connectOrCreate?: Prisma.instrumentoCreateOrConnectWithoutPersonainstrumentoInput;
    connect?: Prisma.instrumentoWhereUniqueInput;
};
export type instrumentoUpdateOneRequiredWithoutPersonainstrumentoNestedInput = {
    create?: Prisma.XOR<Prisma.instrumentoCreateWithoutPersonainstrumentoInput, Prisma.instrumentoUncheckedCreateWithoutPersonainstrumentoInput>;
    connectOrCreate?: Prisma.instrumentoCreateOrConnectWithoutPersonainstrumentoInput;
    upsert?: Prisma.instrumentoUpsertWithoutPersonainstrumentoInput;
    connect?: Prisma.instrumentoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.instrumentoUpdateToOneWithWhereWithoutPersonainstrumentoInput, Prisma.instrumentoUpdateWithoutPersonainstrumentoInput>, Prisma.instrumentoUncheckedUpdateWithoutPersonainstrumentoInput>;
};
export type instrumentoCreateWithoutSeccionInput = {
    id: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    personainstrumento?: Prisma.personainstrumentoCreateNestedManyWithoutInstrumentoInput;
};
export type instrumentoUncheckedCreateWithoutSeccionInput = {
    id: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    personainstrumento?: Prisma.personainstrumentoUncheckedCreateNestedManyWithoutInstrumentoInput;
};
export type instrumentoCreateOrConnectWithoutSeccionInput = {
    where: Prisma.instrumentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.instrumentoCreateWithoutSeccionInput, Prisma.instrumentoUncheckedCreateWithoutSeccionInput>;
};
export type instrumentoCreateManySeccionInputEnvelope = {
    data: Prisma.instrumentoCreateManySeccionInput | Prisma.instrumentoCreateManySeccionInput[];
    skipDuplicates?: boolean;
};
export type instrumentoUpsertWithWhereUniqueWithoutSeccionInput = {
    where: Prisma.instrumentoWhereUniqueInput;
    update: Prisma.XOR<Prisma.instrumentoUpdateWithoutSeccionInput, Prisma.instrumentoUncheckedUpdateWithoutSeccionInput>;
    create: Prisma.XOR<Prisma.instrumentoCreateWithoutSeccionInput, Prisma.instrumentoUncheckedCreateWithoutSeccionInput>;
};
export type instrumentoUpdateWithWhereUniqueWithoutSeccionInput = {
    where: Prisma.instrumentoWhereUniqueInput;
    data: Prisma.XOR<Prisma.instrumentoUpdateWithoutSeccionInput, Prisma.instrumentoUncheckedUpdateWithoutSeccionInput>;
};
export type instrumentoUpdateManyWithWhereWithoutSeccionInput = {
    where: Prisma.instrumentoScalarWhereInput;
    data: Prisma.XOR<Prisma.instrumentoUpdateManyMutationInput, Prisma.instrumentoUncheckedUpdateManyWithoutSeccionInput>;
};
export type instrumentoScalarWhereInput = {
    AND?: Prisma.instrumentoScalarWhereInput | Prisma.instrumentoScalarWhereInput[];
    OR?: Prisma.instrumentoScalarWhereInput[];
    NOT?: Prisma.instrumentoScalarWhereInput | Prisma.instrumentoScalarWhereInput[];
    id?: Prisma.StringFilter<"instrumento"> | string;
    nombre?: Prisma.StringFilter<"instrumento"> | string;
    seccionId?: Prisma.StringFilter<"instrumento"> | string;
    descripcion?: Prisma.StringNullableFilter<"instrumento"> | string | null;
    activo?: Prisma.BoolFilter<"instrumento"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"instrumento"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"instrumento"> | Date | string;
};
export type instrumentoCreateWithoutPersonainstrumentoInput = {
    id: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    seccion: Prisma.seccionCreateNestedOneWithoutInstrumentoInput;
};
export type instrumentoUncheckedCreateWithoutPersonainstrumentoInput = {
    id: string;
    nombre: string;
    seccionId: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type instrumentoCreateOrConnectWithoutPersonainstrumentoInput = {
    where: Prisma.instrumentoWhereUniqueInput;
    create: Prisma.XOR<Prisma.instrumentoCreateWithoutPersonainstrumentoInput, Prisma.instrumentoUncheckedCreateWithoutPersonainstrumentoInput>;
};
export type instrumentoUpsertWithoutPersonainstrumentoInput = {
    update: Prisma.XOR<Prisma.instrumentoUpdateWithoutPersonainstrumentoInput, Prisma.instrumentoUncheckedUpdateWithoutPersonainstrumentoInput>;
    create: Prisma.XOR<Prisma.instrumentoCreateWithoutPersonainstrumentoInput, Prisma.instrumentoUncheckedCreateWithoutPersonainstrumentoInput>;
    where?: Prisma.instrumentoWhereInput;
};
export type instrumentoUpdateToOneWithWhereWithoutPersonainstrumentoInput = {
    where?: Prisma.instrumentoWhereInput;
    data: Prisma.XOR<Prisma.instrumentoUpdateWithoutPersonainstrumentoInput, Prisma.instrumentoUncheckedUpdateWithoutPersonainstrumentoInput>;
};
export type instrumentoUpdateWithoutPersonainstrumentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    seccion?: Prisma.seccionUpdateOneRequiredWithoutInstrumentoNestedInput;
};
export type instrumentoUncheckedUpdateWithoutPersonainstrumentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    seccionId?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type instrumentoCreateManySeccionInput = {
    id: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type instrumentoUpdateWithoutSeccionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personainstrumento?: Prisma.personainstrumentoUpdateManyWithoutInstrumentoNestedInput;
};
export type instrumentoUncheckedUpdateWithoutSeccionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personainstrumento?: Prisma.personainstrumentoUncheckedUpdateManyWithoutInstrumentoNestedInput;
};
export type instrumentoUncheckedUpdateManyWithoutSeccionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type InstrumentoCountOutputType
 */
export type InstrumentoCountOutputType = {
    personainstrumento: number;
};
export type InstrumentoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    personainstrumento?: boolean | InstrumentoCountOutputTypeCountPersonainstrumentoArgs;
};
/**
 * InstrumentoCountOutputType without action
 */
export type InstrumentoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstrumentoCountOutputType
     */
    select?: Prisma.InstrumentoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * InstrumentoCountOutputType without action
 */
export type InstrumentoCountOutputTypeCountPersonainstrumentoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.personainstrumentoWhereInput;
};
export type instrumentoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    seccionId?: boolean;
    descripcion?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    seccion?: boolean | Prisma.seccionDefaultArgs<ExtArgs>;
    personainstrumento?: boolean | Prisma.instrumento$personainstrumentoArgs<ExtArgs>;
    _count?: boolean | Prisma.InstrumentoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["instrumento"]>;
export type instrumentoSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    seccionId?: boolean;
    descripcion?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type instrumentoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "seccionId" | "descripcion" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["instrumento"]>;
export type instrumentoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    seccion?: boolean | Prisma.seccionDefaultArgs<ExtArgs>;
    personainstrumento?: boolean | Prisma.instrumento$personainstrumentoArgs<ExtArgs>;
    _count?: boolean | Prisma.InstrumentoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $instrumentoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "instrumento";
    objects: {
        seccion: Prisma.$seccionPayload<ExtArgs>;
        personainstrumento: Prisma.$personainstrumentoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nombre: string;
        seccionId: string;
        descripcion: string | null;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["instrumento"]>;
    composites: {};
};
export type instrumentoGetPayload<S extends boolean | null | undefined | instrumentoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$instrumentoPayload, S>;
export type instrumentoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<instrumentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InstrumentoCountAggregateInputType | true;
};
export interface instrumentoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['instrumento'];
        meta: {
            name: 'instrumento';
        };
    };
    /**
     * Find zero or one Instrumento that matches the filter.
     * @param {instrumentoFindUniqueArgs} args - Arguments to find a Instrumento
     * @example
     * // Get one Instrumento
     * const instrumento = await prisma.instrumento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends instrumentoFindUniqueArgs>(args: Prisma.SelectSubset<T, instrumentoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__instrumentoClient<runtime.Types.Result.GetResult<Prisma.$instrumentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Instrumento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {instrumentoFindUniqueOrThrowArgs} args - Arguments to find a Instrumento
     * @example
     * // Get one Instrumento
     * const instrumento = await prisma.instrumento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends instrumentoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, instrumentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__instrumentoClient<runtime.Types.Result.GetResult<Prisma.$instrumentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Instrumento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instrumentoFindFirstArgs} args - Arguments to find a Instrumento
     * @example
     * // Get one Instrumento
     * const instrumento = await prisma.instrumento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends instrumentoFindFirstArgs>(args?: Prisma.SelectSubset<T, instrumentoFindFirstArgs<ExtArgs>>): Prisma.Prisma__instrumentoClient<runtime.Types.Result.GetResult<Prisma.$instrumentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Instrumento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instrumentoFindFirstOrThrowArgs} args - Arguments to find a Instrumento
     * @example
     * // Get one Instrumento
     * const instrumento = await prisma.instrumento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends instrumentoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, instrumentoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__instrumentoClient<runtime.Types.Result.GetResult<Prisma.$instrumentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Instrumentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instrumentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Instrumentos
     * const instrumentos = await prisma.instrumento.findMany()
     *
     * // Get first 10 Instrumentos
     * const instrumentos = await prisma.instrumento.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const instrumentoWithIdOnly = await prisma.instrumento.findMany({ select: { id: true } })
     *
     */
    findMany<T extends instrumentoFindManyArgs>(args?: Prisma.SelectSubset<T, instrumentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$instrumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Instrumento.
     * @param {instrumentoCreateArgs} args - Arguments to create a Instrumento.
     * @example
     * // Create one Instrumento
     * const Instrumento = await prisma.instrumento.create({
     *   data: {
     *     // ... data to create a Instrumento
     *   }
     * })
     *
     */
    create<T extends instrumentoCreateArgs>(args: Prisma.SelectSubset<T, instrumentoCreateArgs<ExtArgs>>): Prisma.Prisma__instrumentoClient<runtime.Types.Result.GetResult<Prisma.$instrumentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Instrumentos.
     * @param {instrumentoCreateManyArgs} args - Arguments to create many Instrumentos.
     * @example
     * // Create many Instrumentos
     * const instrumento = await prisma.instrumento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends instrumentoCreateManyArgs>(args?: Prisma.SelectSubset<T, instrumentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Instrumento.
     * @param {instrumentoDeleteArgs} args - Arguments to delete one Instrumento.
     * @example
     * // Delete one Instrumento
     * const Instrumento = await prisma.instrumento.delete({
     *   where: {
     *     // ... filter to delete one Instrumento
     *   }
     * })
     *
     */
    delete<T extends instrumentoDeleteArgs>(args: Prisma.SelectSubset<T, instrumentoDeleteArgs<ExtArgs>>): Prisma.Prisma__instrumentoClient<runtime.Types.Result.GetResult<Prisma.$instrumentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Instrumento.
     * @param {instrumentoUpdateArgs} args - Arguments to update one Instrumento.
     * @example
     * // Update one Instrumento
     * const instrumento = await prisma.instrumento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends instrumentoUpdateArgs>(args: Prisma.SelectSubset<T, instrumentoUpdateArgs<ExtArgs>>): Prisma.Prisma__instrumentoClient<runtime.Types.Result.GetResult<Prisma.$instrumentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Instrumentos.
     * @param {instrumentoDeleteManyArgs} args - Arguments to filter Instrumentos to delete.
     * @example
     * // Delete a few Instrumentos
     * const { count } = await prisma.instrumento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends instrumentoDeleteManyArgs>(args?: Prisma.SelectSubset<T, instrumentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Instrumentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instrumentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Instrumentos
     * const instrumento = await prisma.instrumento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends instrumentoUpdateManyArgs>(args: Prisma.SelectSubset<T, instrumentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Instrumento.
     * @param {instrumentoUpsertArgs} args - Arguments to update or create a Instrumento.
     * @example
     * // Update or create a Instrumento
     * const instrumento = await prisma.instrumento.upsert({
     *   create: {
     *     // ... data to create a Instrumento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Instrumento we want to update
     *   }
     * })
     */
    upsert<T extends instrumentoUpsertArgs>(args: Prisma.SelectSubset<T, instrumentoUpsertArgs<ExtArgs>>): Prisma.Prisma__instrumentoClient<runtime.Types.Result.GetResult<Prisma.$instrumentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Instrumentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instrumentoCountArgs} args - Arguments to filter Instrumentos to count.
     * @example
     * // Count the number of Instrumentos
     * const count = await prisma.instrumento.count({
     *   where: {
     *     // ... the filter for the Instrumentos we want to count
     *   }
     * })
    **/
    count<T extends instrumentoCountArgs>(args?: Prisma.Subset<T, instrumentoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InstrumentoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Instrumento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstrumentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstrumentoAggregateArgs>(args: Prisma.Subset<T, InstrumentoAggregateArgs>): Prisma.PrismaPromise<GetInstrumentoAggregateType<T>>;
    /**
     * Group by Instrumento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {instrumentoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends instrumentoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: instrumentoGroupByArgs['orderBy'];
    } : {
        orderBy?: instrumentoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, instrumentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstrumentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the instrumento model
     */
    readonly fields: instrumentoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for instrumento.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__instrumentoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    seccion<T extends Prisma.seccionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.seccionDefaultArgs<ExtArgs>>): Prisma.Prisma__seccionClient<runtime.Types.Result.GetResult<Prisma.$seccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    personainstrumento<T extends Prisma.instrumento$personainstrumentoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.instrumento$personainstrumentoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$personainstrumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the instrumento model
 */
export interface instrumentoFieldRefs {
    readonly id: Prisma.FieldRef<"instrumento", 'String'>;
    readonly nombre: Prisma.FieldRef<"instrumento", 'String'>;
    readonly seccionId: Prisma.FieldRef<"instrumento", 'String'>;
    readonly descripcion: Prisma.FieldRef<"instrumento", 'String'>;
    readonly activo: Prisma.FieldRef<"instrumento", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"instrumento", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"instrumento", 'DateTime'>;
}
/**
 * instrumento findUnique
 */
export type instrumentoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instrumento
     */
    select?: Prisma.instrumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the instrumento
     */
    omit?: Prisma.instrumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.instrumentoInclude<ExtArgs> | null;
    /**
     * Filter, which instrumento to fetch.
     */
    where: Prisma.instrumentoWhereUniqueInput;
};
/**
 * instrumento findUniqueOrThrow
 */
export type instrumentoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instrumento
     */
    select?: Prisma.instrumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the instrumento
     */
    omit?: Prisma.instrumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.instrumentoInclude<ExtArgs> | null;
    /**
     * Filter, which instrumento to fetch.
     */
    where: Prisma.instrumentoWhereUniqueInput;
};
/**
 * instrumento findFirst
 */
export type instrumentoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instrumento
     */
    select?: Prisma.instrumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the instrumento
     */
    omit?: Prisma.instrumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.instrumentoInclude<ExtArgs> | null;
    /**
     * Filter, which instrumento to fetch.
     */
    where?: Prisma.instrumentoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of instrumentos to fetch.
     */
    orderBy?: Prisma.instrumentoOrderByWithRelationInput | Prisma.instrumentoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for instrumentos.
     */
    cursor?: Prisma.instrumentoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` instrumentos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` instrumentos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of instrumentos.
     */
    distinct?: Prisma.InstrumentoScalarFieldEnum | Prisma.InstrumentoScalarFieldEnum[];
};
/**
 * instrumento findFirstOrThrow
 */
export type instrumentoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instrumento
     */
    select?: Prisma.instrumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the instrumento
     */
    omit?: Prisma.instrumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.instrumentoInclude<ExtArgs> | null;
    /**
     * Filter, which instrumento to fetch.
     */
    where?: Prisma.instrumentoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of instrumentos to fetch.
     */
    orderBy?: Prisma.instrumentoOrderByWithRelationInput | Prisma.instrumentoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for instrumentos.
     */
    cursor?: Prisma.instrumentoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` instrumentos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` instrumentos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of instrumentos.
     */
    distinct?: Prisma.InstrumentoScalarFieldEnum | Prisma.InstrumentoScalarFieldEnum[];
};
/**
 * instrumento findMany
 */
export type instrumentoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instrumento
     */
    select?: Prisma.instrumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the instrumento
     */
    omit?: Prisma.instrumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.instrumentoInclude<ExtArgs> | null;
    /**
     * Filter, which instrumentos to fetch.
     */
    where?: Prisma.instrumentoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of instrumentos to fetch.
     */
    orderBy?: Prisma.instrumentoOrderByWithRelationInput | Prisma.instrumentoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing instrumentos.
     */
    cursor?: Prisma.instrumentoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` instrumentos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` instrumentos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of instrumentos.
     */
    distinct?: Prisma.InstrumentoScalarFieldEnum | Prisma.InstrumentoScalarFieldEnum[];
};
/**
 * instrumento create
 */
export type instrumentoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instrumento
     */
    select?: Prisma.instrumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the instrumento
     */
    omit?: Prisma.instrumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.instrumentoInclude<ExtArgs> | null;
    /**
     * The data needed to create a instrumento.
     */
    data: Prisma.XOR<Prisma.instrumentoCreateInput, Prisma.instrumentoUncheckedCreateInput>;
};
/**
 * instrumento createMany
 */
export type instrumentoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many instrumentos.
     */
    data: Prisma.instrumentoCreateManyInput | Prisma.instrumentoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * instrumento update
 */
export type instrumentoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instrumento
     */
    select?: Prisma.instrumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the instrumento
     */
    omit?: Prisma.instrumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.instrumentoInclude<ExtArgs> | null;
    /**
     * The data needed to update a instrumento.
     */
    data: Prisma.XOR<Prisma.instrumentoUpdateInput, Prisma.instrumentoUncheckedUpdateInput>;
    /**
     * Choose, which instrumento to update.
     */
    where: Prisma.instrumentoWhereUniqueInput;
};
/**
 * instrumento updateMany
 */
export type instrumentoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update instrumentos.
     */
    data: Prisma.XOR<Prisma.instrumentoUpdateManyMutationInput, Prisma.instrumentoUncheckedUpdateManyInput>;
    /**
     * Filter which instrumentos to update
     */
    where?: Prisma.instrumentoWhereInput;
    /**
     * Limit how many instrumentos to update.
     */
    limit?: number;
};
/**
 * instrumento upsert
 */
export type instrumentoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instrumento
     */
    select?: Prisma.instrumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the instrumento
     */
    omit?: Prisma.instrumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.instrumentoInclude<ExtArgs> | null;
    /**
     * The filter to search for the instrumento to update in case it exists.
     */
    where: Prisma.instrumentoWhereUniqueInput;
    /**
     * In case the instrumento found by the `where` argument doesn't exist, create a new instrumento with this data.
     */
    create: Prisma.XOR<Prisma.instrumentoCreateInput, Prisma.instrumentoUncheckedCreateInput>;
    /**
     * In case the instrumento was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.instrumentoUpdateInput, Prisma.instrumentoUncheckedUpdateInput>;
};
/**
 * instrumento delete
 */
export type instrumentoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instrumento
     */
    select?: Prisma.instrumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the instrumento
     */
    omit?: Prisma.instrumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.instrumentoInclude<ExtArgs> | null;
    /**
     * Filter which instrumento to delete.
     */
    where: Prisma.instrumentoWhereUniqueInput;
};
/**
 * instrumento deleteMany
 */
export type instrumentoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which instrumentos to delete
     */
    where?: Prisma.instrumentoWhereInput;
    /**
     * Limit how many instrumentos to delete.
     */
    limit?: number;
};
/**
 * instrumento.personainstrumento
 */
export type instrumento$personainstrumentoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.personainstrumentoWhereInput;
    orderBy?: Prisma.personainstrumentoOrderByWithRelationInput | Prisma.personainstrumentoOrderByWithRelationInput[];
    cursor?: Prisma.personainstrumentoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PersonainstrumentoScalarFieldEnum | Prisma.PersonainstrumentoScalarFieldEnum[];
};
/**
 * instrumento without action
 */
export type instrumentoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instrumento
     */
    select?: Prisma.instrumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the instrumento
     */
    omit?: Prisma.instrumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.instrumentoInclude<ExtArgs> | null;
};
//# sourceMappingURL=instrumento.d.ts.map