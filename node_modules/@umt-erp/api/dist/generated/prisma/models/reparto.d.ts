import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model reparto
 *
 */
export type repartoModel = runtime.Types.Result.DefaultSelection<Prisma.$repartoPayload>;
export type AggregateReparto = {
    _count: RepartoCountAggregateOutputType | null;
    _avg: RepartoAvgAggregateOutputType | null;
    _sum: RepartoSumAggregateOutputType | null;
    _min: RepartoMinAggregateOutputType | null;
    _max: RepartoMaxAggregateOutputType | null;
};
export type RepartoAvgAggregateOutputType = {
    porcentajeUMT: runtime.Decimal | null;
};
export type RepartoSumAggregateOutputType = {
    porcentajeUMT: runtime.Decimal | null;
};
export type RepartoMinAggregateOutputType = {
    id: string | null;
    ejercicioId: string | null;
    fechaCierre: Date | null;
    estado: $Enums.reparto_estado | null;
    porcentajeUMT: runtime.Decimal | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RepartoMaxAggregateOutputType = {
    id: string | null;
    ejercicioId: string | null;
    fechaCierre: Date | null;
    estado: $Enums.reparto_estado | null;
    porcentajeUMT: runtime.Decimal | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RepartoCountAggregateOutputType = {
    id: number;
    ejercicioId: number;
    fechaCierre: number;
    estado: number;
    porcentajeUMT: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RepartoAvgAggregateInputType = {
    porcentajeUMT?: true;
};
export type RepartoSumAggregateInputType = {
    porcentajeUMT?: true;
};
export type RepartoMinAggregateInputType = {
    id?: true;
    ejercicioId?: true;
    fechaCierre?: true;
    estado?: true;
    porcentajeUMT?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RepartoMaxAggregateInputType = {
    id?: true;
    ejercicioId?: true;
    fechaCierre?: true;
    estado?: true;
    porcentajeUMT?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RepartoCountAggregateInputType = {
    id?: true;
    ejercicioId?: true;
    fechaCierre?: true;
    estado?: true;
    porcentajeUMT?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RepartoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which reparto to aggregate.
     */
    where?: Prisma.repartoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of repartos to fetch.
     */
    orderBy?: Prisma.repartoOrderByWithRelationInput | Prisma.repartoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.repartoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` repartos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` repartos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned repartos
    **/
    _count?: true | RepartoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: RepartoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: RepartoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RepartoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RepartoMaxAggregateInputType;
};
export type GetRepartoAggregateType<T extends RepartoAggregateArgs> = {
    [P in keyof T & keyof AggregateReparto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReparto[P]> : Prisma.GetScalarType<T[P], AggregateReparto[P]>;
};
export type repartoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.repartoWhereInput;
    orderBy?: Prisma.repartoOrderByWithAggregationInput | Prisma.repartoOrderByWithAggregationInput[];
    by: Prisma.RepartoScalarFieldEnum[] | Prisma.RepartoScalarFieldEnum;
    having?: Prisma.repartoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RepartoCountAggregateInputType | true;
    _avg?: RepartoAvgAggregateInputType;
    _sum?: RepartoSumAggregateInputType;
    _min?: RepartoMinAggregateInputType;
    _max?: RepartoMaxAggregateInputType;
};
export type RepartoGroupByOutputType = {
    id: string;
    ejercicioId: string;
    fechaCierre: Date | null;
    estado: $Enums.reparto_estado;
    porcentajeUMT: runtime.Decimal | null;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: RepartoCountAggregateOutputType | null;
    _avg: RepartoAvgAggregateOutputType | null;
    _sum: RepartoSumAggregateOutputType | null;
    _min: RepartoMinAggregateOutputType | null;
    _max: RepartoMaxAggregateOutputType | null;
};
export type GetRepartoGroupByPayload<T extends repartoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RepartoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RepartoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RepartoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RepartoGroupByOutputType[P]>;
}>>;
export type repartoWhereInput = {
    AND?: Prisma.repartoWhereInput | Prisma.repartoWhereInput[];
    OR?: Prisma.repartoWhereInput[];
    NOT?: Prisma.repartoWhereInput | Prisma.repartoWhereInput[];
    id?: Prisma.StringFilter<"reparto"> | string;
    ejercicioId?: Prisma.StringFilter<"reparto"> | string;
    fechaCierre?: Prisma.DateTimeNullableFilter<"reparto"> | Date | string | null;
    estado?: Prisma.Enumreparto_estadoFilter<"reparto"> | $Enums.reparto_estado;
    porcentajeUMT?: Prisma.DecimalNullableFilter<"reparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.StringNullableFilter<"reparto"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"reparto"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"reparto"> | Date | string;
    lineareparto?: Prisma.LinearepartoListRelationFilter;
    obligacioneconomica?: Prisma.XOR<Prisma.ObligacioneconomicaNullableScalarRelationFilter, Prisma.obligacioneconomicaWhereInput> | null;
    ejercicio?: Prisma.XOR<Prisma.EjercicioScalarRelationFilter, Prisma.ejercicioWhereInput>;
};
export type repartoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    porcentajeUMT?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    lineareparto?: Prisma.linearepartoOrderByRelationAggregateInput;
    obligacioneconomica?: Prisma.obligacioneconomicaOrderByWithRelationInput;
    ejercicio?: Prisma.ejercicioOrderByWithRelationInput;
    _relevance?: Prisma.repartoOrderByRelevanceInput;
};
export type repartoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.repartoWhereInput | Prisma.repartoWhereInput[];
    OR?: Prisma.repartoWhereInput[];
    NOT?: Prisma.repartoWhereInput | Prisma.repartoWhereInput[];
    ejercicioId?: Prisma.StringFilter<"reparto"> | string;
    fechaCierre?: Prisma.DateTimeNullableFilter<"reparto"> | Date | string | null;
    estado?: Prisma.Enumreparto_estadoFilter<"reparto"> | $Enums.reparto_estado;
    porcentajeUMT?: Prisma.DecimalNullableFilter<"reparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.StringNullableFilter<"reparto"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"reparto"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"reparto"> | Date | string;
    lineareparto?: Prisma.LinearepartoListRelationFilter;
    obligacioneconomica?: Prisma.XOR<Prisma.ObligacioneconomicaNullableScalarRelationFilter, Prisma.obligacioneconomicaWhereInput> | null;
    ejercicio?: Prisma.XOR<Prisma.EjercicioScalarRelationFilter, Prisma.ejercicioWhereInput>;
}, "id">;
export type repartoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    porcentajeUMT?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.repartoCountOrderByAggregateInput;
    _avg?: Prisma.repartoAvgOrderByAggregateInput;
    _max?: Prisma.repartoMaxOrderByAggregateInput;
    _min?: Prisma.repartoMinOrderByAggregateInput;
    _sum?: Prisma.repartoSumOrderByAggregateInput;
};
export type repartoScalarWhereWithAggregatesInput = {
    AND?: Prisma.repartoScalarWhereWithAggregatesInput | Prisma.repartoScalarWhereWithAggregatesInput[];
    OR?: Prisma.repartoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.repartoScalarWhereWithAggregatesInput | Prisma.repartoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"reparto"> | string;
    ejercicioId?: Prisma.StringWithAggregatesFilter<"reparto"> | string;
    fechaCierre?: Prisma.DateTimeNullableWithAggregatesFilter<"reparto"> | Date | string | null;
    estado?: Prisma.Enumreparto_estadoWithAggregatesFilter<"reparto"> | $Enums.reparto_estado;
    porcentajeUMT?: Prisma.DecimalNullableWithAggregatesFilter<"reparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"reparto"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"reparto"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"reparto"> | Date | string;
};
export type repartoCreateInput = {
    id: string;
    fechaCierre?: Date | string | null;
    estado?: $Enums.reparto_estado;
    porcentajeUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    lineareparto?: Prisma.linearepartoCreateNestedManyWithoutRepartoInput;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedOneWithoutRepartoInput;
    ejercicio: Prisma.ejercicioCreateNestedOneWithoutRepartoInput;
};
export type repartoUncheckedCreateInput = {
    id: string;
    ejercicioId: string;
    fechaCierre?: Date | string | null;
    estado?: $Enums.reparto_estado;
    porcentajeUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    lineareparto?: Prisma.linearepartoUncheckedCreateNestedManyWithoutRepartoInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedOneWithoutRepartoInput;
};
export type repartoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumreparto_estadoFieldUpdateOperationsInput | $Enums.reparto_estado;
    porcentajeUMT?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineareparto?: Prisma.linearepartoUpdateManyWithoutRepartoNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateOneWithoutRepartoNestedInput;
    ejercicio?: Prisma.ejercicioUpdateOneRequiredWithoutRepartoNestedInput;
};
export type repartoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumreparto_estadoFieldUpdateOperationsInput | $Enums.reparto_estado;
    porcentajeUMT?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineareparto?: Prisma.linearepartoUncheckedUpdateManyWithoutRepartoNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateOneWithoutRepartoNestedInput;
};
export type repartoCreateManyInput = {
    id: string;
    ejercicioId: string;
    fechaCierre?: Date | string | null;
    estado?: $Enums.reparto_estado;
    porcentajeUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type repartoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumreparto_estadoFieldUpdateOperationsInput | $Enums.reparto_estado;
    porcentajeUMT?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type repartoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumreparto_estadoFieldUpdateOperationsInput | $Enums.reparto_estado;
    porcentajeUMT?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RepartoListRelationFilter = {
    every?: Prisma.repartoWhereInput;
    some?: Prisma.repartoWhereInput;
    none?: Prisma.repartoWhereInput;
};
export type repartoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RepartoScalarRelationFilter = {
    is?: Prisma.repartoWhereInput;
    isNot?: Prisma.repartoWhereInput;
};
export type RepartoNullableScalarRelationFilter = {
    is?: Prisma.repartoWhereInput | null;
    isNot?: Prisma.repartoWhereInput | null;
};
export type repartoOrderByRelevanceInput = {
    fields: Prisma.repartoOrderByRelevanceFieldEnum | Prisma.repartoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type repartoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    porcentajeUMT?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type repartoAvgOrderByAggregateInput = {
    porcentajeUMT?: Prisma.SortOrder;
};
export type repartoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    porcentajeUMT?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type repartoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    fechaCierre?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    porcentajeUMT?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type repartoSumOrderByAggregateInput = {
    porcentajeUMT?: Prisma.SortOrder;
};
export type repartoCreateNestedManyWithoutEjercicioInput = {
    create?: Prisma.XOR<Prisma.repartoCreateWithoutEjercicioInput, Prisma.repartoUncheckedCreateWithoutEjercicioInput> | Prisma.repartoCreateWithoutEjercicioInput[] | Prisma.repartoUncheckedCreateWithoutEjercicioInput[];
    connectOrCreate?: Prisma.repartoCreateOrConnectWithoutEjercicioInput | Prisma.repartoCreateOrConnectWithoutEjercicioInput[];
    createMany?: Prisma.repartoCreateManyEjercicioInputEnvelope;
    connect?: Prisma.repartoWhereUniqueInput | Prisma.repartoWhereUniqueInput[];
};
export type repartoUncheckedCreateNestedManyWithoutEjercicioInput = {
    create?: Prisma.XOR<Prisma.repartoCreateWithoutEjercicioInput, Prisma.repartoUncheckedCreateWithoutEjercicioInput> | Prisma.repartoCreateWithoutEjercicioInput[] | Prisma.repartoUncheckedCreateWithoutEjercicioInput[];
    connectOrCreate?: Prisma.repartoCreateOrConnectWithoutEjercicioInput | Prisma.repartoCreateOrConnectWithoutEjercicioInput[];
    createMany?: Prisma.repartoCreateManyEjercicioInputEnvelope;
    connect?: Prisma.repartoWhereUniqueInput | Prisma.repartoWhereUniqueInput[];
};
export type repartoUpdateManyWithoutEjercicioNestedInput = {
    create?: Prisma.XOR<Prisma.repartoCreateWithoutEjercicioInput, Prisma.repartoUncheckedCreateWithoutEjercicioInput> | Prisma.repartoCreateWithoutEjercicioInput[] | Prisma.repartoUncheckedCreateWithoutEjercicioInput[];
    connectOrCreate?: Prisma.repartoCreateOrConnectWithoutEjercicioInput | Prisma.repartoCreateOrConnectWithoutEjercicioInput[];
    upsert?: Prisma.repartoUpsertWithWhereUniqueWithoutEjercicioInput | Prisma.repartoUpsertWithWhereUniqueWithoutEjercicioInput[];
    createMany?: Prisma.repartoCreateManyEjercicioInputEnvelope;
    set?: Prisma.repartoWhereUniqueInput | Prisma.repartoWhereUniqueInput[];
    disconnect?: Prisma.repartoWhereUniqueInput | Prisma.repartoWhereUniqueInput[];
    delete?: Prisma.repartoWhereUniqueInput | Prisma.repartoWhereUniqueInput[];
    connect?: Prisma.repartoWhereUniqueInput | Prisma.repartoWhereUniqueInput[];
    update?: Prisma.repartoUpdateWithWhereUniqueWithoutEjercicioInput | Prisma.repartoUpdateWithWhereUniqueWithoutEjercicioInput[];
    updateMany?: Prisma.repartoUpdateManyWithWhereWithoutEjercicioInput | Prisma.repartoUpdateManyWithWhereWithoutEjercicioInput[];
    deleteMany?: Prisma.repartoScalarWhereInput | Prisma.repartoScalarWhereInput[];
};
export type repartoUncheckedUpdateManyWithoutEjercicioNestedInput = {
    create?: Prisma.XOR<Prisma.repartoCreateWithoutEjercicioInput, Prisma.repartoUncheckedCreateWithoutEjercicioInput> | Prisma.repartoCreateWithoutEjercicioInput[] | Prisma.repartoUncheckedCreateWithoutEjercicioInput[];
    connectOrCreate?: Prisma.repartoCreateOrConnectWithoutEjercicioInput | Prisma.repartoCreateOrConnectWithoutEjercicioInput[];
    upsert?: Prisma.repartoUpsertWithWhereUniqueWithoutEjercicioInput | Prisma.repartoUpsertWithWhereUniqueWithoutEjercicioInput[];
    createMany?: Prisma.repartoCreateManyEjercicioInputEnvelope;
    set?: Prisma.repartoWhereUniqueInput | Prisma.repartoWhereUniqueInput[];
    disconnect?: Prisma.repartoWhereUniqueInput | Prisma.repartoWhereUniqueInput[];
    delete?: Prisma.repartoWhereUniqueInput | Prisma.repartoWhereUniqueInput[];
    connect?: Prisma.repartoWhereUniqueInput | Prisma.repartoWhereUniqueInput[];
    update?: Prisma.repartoUpdateWithWhereUniqueWithoutEjercicioInput | Prisma.repartoUpdateWithWhereUniqueWithoutEjercicioInput[];
    updateMany?: Prisma.repartoUpdateManyWithWhereWithoutEjercicioInput | Prisma.repartoUpdateManyWithWhereWithoutEjercicioInput[];
    deleteMany?: Prisma.repartoScalarWhereInput | Prisma.repartoScalarWhereInput[];
};
export type repartoCreateNestedOneWithoutLinearepartoInput = {
    create?: Prisma.XOR<Prisma.repartoCreateWithoutLinearepartoInput, Prisma.repartoUncheckedCreateWithoutLinearepartoInput>;
    connectOrCreate?: Prisma.repartoCreateOrConnectWithoutLinearepartoInput;
    connect?: Prisma.repartoWhereUniqueInput;
};
export type repartoUpdateOneRequiredWithoutLinearepartoNestedInput = {
    create?: Prisma.XOR<Prisma.repartoCreateWithoutLinearepartoInput, Prisma.repartoUncheckedCreateWithoutLinearepartoInput>;
    connectOrCreate?: Prisma.repartoCreateOrConnectWithoutLinearepartoInput;
    upsert?: Prisma.repartoUpsertWithoutLinearepartoInput;
    connect?: Prisma.repartoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.repartoUpdateToOneWithWhereWithoutLinearepartoInput, Prisma.repartoUpdateWithoutLinearepartoInput>, Prisma.repartoUncheckedUpdateWithoutLinearepartoInput>;
};
export type repartoCreateNestedOneWithoutObligacioneconomicaInput = {
    create?: Prisma.XOR<Prisma.repartoCreateWithoutObligacioneconomicaInput, Prisma.repartoUncheckedCreateWithoutObligacioneconomicaInput>;
    connectOrCreate?: Prisma.repartoCreateOrConnectWithoutObligacioneconomicaInput;
    connect?: Prisma.repartoWhereUniqueInput;
};
export type repartoUpdateOneWithoutObligacioneconomicaNestedInput = {
    create?: Prisma.XOR<Prisma.repartoCreateWithoutObligacioneconomicaInput, Prisma.repartoUncheckedCreateWithoutObligacioneconomicaInput>;
    connectOrCreate?: Prisma.repartoCreateOrConnectWithoutObligacioneconomicaInput;
    upsert?: Prisma.repartoUpsertWithoutObligacioneconomicaInput;
    disconnect?: Prisma.repartoWhereInput | boolean;
    delete?: Prisma.repartoWhereInput | boolean;
    connect?: Prisma.repartoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.repartoUpdateToOneWithWhereWithoutObligacioneconomicaInput, Prisma.repartoUpdateWithoutObligacioneconomicaInput>, Prisma.repartoUncheckedUpdateWithoutObligacioneconomicaInput>;
};
export type Enumreparto_estadoFieldUpdateOperationsInput = {
    set?: $Enums.reparto_estado;
};
export type repartoCreateWithoutEjercicioInput = {
    id: string;
    fechaCierre?: Date | string | null;
    estado?: $Enums.reparto_estado;
    porcentajeUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    lineareparto?: Prisma.linearepartoCreateNestedManyWithoutRepartoInput;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedOneWithoutRepartoInput;
};
export type repartoUncheckedCreateWithoutEjercicioInput = {
    id: string;
    fechaCierre?: Date | string | null;
    estado?: $Enums.reparto_estado;
    porcentajeUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    lineareparto?: Prisma.linearepartoUncheckedCreateNestedManyWithoutRepartoInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedOneWithoutRepartoInput;
};
export type repartoCreateOrConnectWithoutEjercicioInput = {
    where: Prisma.repartoWhereUniqueInput;
    create: Prisma.XOR<Prisma.repartoCreateWithoutEjercicioInput, Prisma.repartoUncheckedCreateWithoutEjercicioInput>;
};
export type repartoCreateManyEjercicioInputEnvelope = {
    data: Prisma.repartoCreateManyEjercicioInput | Prisma.repartoCreateManyEjercicioInput[];
    skipDuplicates?: boolean;
};
export type repartoUpsertWithWhereUniqueWithoutEjercicioInput = {
    where: Prisma.repartoWhereUniqueInput;
    update: Prisma.XOR<Prisma.repartoUpdateWithoutEjercicioInput, Prisma.repartoUncheckedUpdateWithoutEjercicioInput>;
    create: Prisma.XOR<Prisma.repartoCreateWithoutEjercicioInput, Prisma.repartoUncheckedCreateWithoutEjercicioInput>;
};
export type repartoUpdateWithWhereUniqueWithoutEjercicioInput = {
    where: Prisma.repartoWhereUniqueInput;
    data: Prisma.XOR<Prisma.repartoUpdateWithoutEjercicioInput, Prisma.repartoUncheckedUpdateWithoutEjercicioInput>;
};
export type repartoUpdateManyWithWhereWithoutEjercicioInput = {
    where: Prisma.repartoScalarWhereInput;
    data: Prisma.XOR<Prisma.repartoUpdateManyMutationInput, Prisma.repartoUncheckedUpdateManyWithoutEjercicioInput>;
};
export type repartoScalarWhereInput = {
    AND?: Prisma.repartoScalarWhereInput | Prisma.repartoScalarWhereInput[];
    OR?: Prisma.repartoScalarWhereInput[];
    NOT?: Prisma.repartoScalarWhereInput | Prisma.repartoScalarWhereInput[];
    id?: Prisma.StringFilter<"reparto"> | string;
    ejercicioId?: Prisma.StringFilter<"reparto"> | string;
    fechaCierre?: Prisma.DateTimeNullableFilter<"reparto"> | Date | string | null;
    estado?: Prisma.Enumreparto_estadoFilter<"reparto"> | $Enums.reparto_estado;
    porcentajeUMT?: Prisma.DecimalNullableFilter<"reparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.StringNullableFilter<"reparto"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"reparto"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"reparto"> | Date | string;
};
export type repartoCreateWithoutLinearepartoInput = {
    id: string;
    fechaCierre?: Date | string | null;
    estado?: $Enums.reparto_estado;
    porcentajeUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedOneWithoutRepartoInput;
    ejercicio: Prisma.ejercicioCreateNestedOneWithoutRepartoInput;
};
export type repartoUncheckedCreateWithoutLinearepartoInput = {
    id: string;
    ejercicioId: string;
    fechaCierre?: Date | string | null;
    estado?: $Enums.reparto_estado;
    porcentajeUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedOneWithoutRepartoInput;
};
export type repartoCreateOrConnectWithoutLinearepartoInput = {
    where: Prisma.repartoWhereUniqueInput;
    create: Prisma.XOR<Prisma.repartoCreateWithoutLinearepartoInput, Prisma.repartoUncheckedCreateWithoutLinearepartoInput>;
};
export type repartoUpsertWithoutLinearepartoInput = {
    update: Prisma.XOR<Prisma.repartoUpdateWithoutLinearepartoInput, Prisma.repartoUncheckedUpdateWithoutLinearepartoInput>;
    create: Prisma.XOR<Prisma.repartoCreateWithoutLinearepartoInput, Prisma.repartoUncheckedCreateWithoutLinearepartoInput>;
    where?: Prisma.repartoWhereInput;
};
export type repartoUpdateToOneWithWhereWithoutLinearepartoInput = {
    where?: Prisma.repartoWhereInput;
    data: Prisma.XOR<Prisma.repartoUpdateWithoutLinearepartoInput, Prisma.repartoUncheckedUpdateWithoutLinearepartoInput>;
};
export type repartoUpdateWithoutLinearepartoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumreparto_estadoFieldUpdateOperationsInput | $Enums.reparto_estado;
    porcentajeUMT?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateOneWithoutRepartoNestedInput;
    ejercicio?: Prisma.ejercicioUpdateOneRequiredWithoutRepartoNestedInput;
};
export type repartoUncheckedUpdateWithoutLinearepartoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumreparto_estadoFieldUpdateOperationsInput | $Enums.reparto_estado;
    porcentajeUMT?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateOneWithoutRepartoNestedInput;
};
export type repartoCreateWithoutObligacioneconomicaInput = {
    id: string;
    fechaCierre?: Date | string | null;
    estado?: $Enums.reparto_estado;
    porcentajeUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    lineareparto?: Prisma.linearepartoCreateNestedManyWithoutRepartoInput;
    ejercicio: Prisma.ejercicioCreateNestedOneWithoutRepartoInput;
};
export type repartoUncheckedCreateWithoutObligacioneconomicaInput = {
    id: string;
    ejercicioId: string;
    fechaCierre?: Date | string | null;
    estado?: $Enums.reparto_estado;
    porcentajeUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    lineareparto?: Prisma.linearepartoUncheckedCreateNestedManyWithoutRepartoInput;
};
export type repartoCreateOrConnectWithoutObligacioneconomicaInput = {
    where: Prisma.repartoWhereUniqueInput;
    create: Prisma.XOR<Prisma.repartoCreateWithoutObligacioneconomicaInput, Prisma.repartoUncheckedCreateWithoutObligacioneconomicaInput>;
};
export type repartoUpsertWithoutObligacioneconomicaInput = {
    update: Prisma.XOR<Prisma.repartoUpdateWithoutObligacioneconomicaInput, Prisma.repartoUncheckedUpdateWithoutObligacioneconomicaInput>;
    create: Prisma.XOR<Prisma.repartoCreateWithoutObligacioneconomicaInput, Prisma.repartoUncheckedCreateWithoutObligacioneconomicaInput>;
    where?: Prisma.repartoWhereInput;
};
export type repartoUpdateToOneWithWhereWithoutObligacioneconomicaInput = {
    where?: Prisma.repartoWhereInput;
    data: Prisma.XOR<Prisma.repartoUpdateWithoutObligacioneconomicaInput, Prisma.repartoUncheckedUpdateWithoutObligacioneconomicaInput>;
};
export type repartoUpdateWithoutObligacioneconomicaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumreparto_estadoFieldUpdateOperationsInput | $Enums.reparto_estado;
    porcentajeUMT?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineareparto?: Prisma.linearepartoUpdateManyWithoutRepartoNestedInput;
    ejercicio?: Prisma.ejercicioUpdateOneRequiredWithoutRepartoNestedInput;
};
export type repartoUncheckedUpdateWithoutObligacioneconomicaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumreparto_estadoFieldUpdateOperationsInput | $Enums.reparto_estado;
    porcentajeUMT?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineareparto?: Prisma.linearepartoUncheckedUpdateManyWithoutRepartoNestedInput;
};
export type repartoCreateManyEjercicioInput = {
    id: string;
    fechaCierre?: Date | string | null;
    estado?: $Enums.reparto_estado;
    porcentajeUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type repartoUpdateWithoutEjercicioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumreparto_estadoFieldUpdateOperationsInput | $Enums.reparto_estado;
    porcentajeUMT?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineareparto?: Prisma.linearepartoUpdateManyWithoutRepartoNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateOneWithoutRepartoNestedInput;
};
export type repartoUncheckedUpdateWithoutEjercicioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumreparto_estadoFieldUpdateOperationsInput | $Enums.reparto_estado;
    porcentajeUMT?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineareparto?: Prisma.linearepartoUncheckedUpdateManyWithoutRepartoNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateOneWithoutRepartoNestedInput;
};
export type repartoUncheckedUpdateManyWithoutEjercicioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaCierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumreparto_estadoFieldUpdateOperationsInput | $Enums.reparto_estado;
    porcentajeUMT?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type RepartoCountOutputType
 */
export type RepartoCountOutputType = {
    lineareparto: number;
};
export type RepartoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lineareparto?: boolean | RepartoCountOutputTypeCountLinearepartoArgs;
};
/**
 * RepartoCountOutputType without action
 */
export type RepartoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepartoCountOutputType
     */
    select?: Prisma.RepartoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * RepartoCountOutputType without action
 */
export type RepartoCountOutputTypeCountLinearepartoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.linearepartoWhereInput;
};
export type repartoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ejercicioId?: boolean;
    fechaCierre?: boolean;
    estado?: boolean;
    porcentajeUMT?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    lineareparto?: boolean | Prisma.reparto$linearepartoArgs<ExtArgs>;
    obligacioneconomica?: boolean | Prisma.reparto$obligacioneconomicaArgs<ExtArgs>;
    ejercicio?: boolean | Prisma.ejercicioDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.RepartoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reparto"]>;
export type repartoSelectScalar = {
    id?: boolean;
    ejercicioId?: boolean;
    fechaCierre?: boolean;
    estado?: boolean;
    porcentajeUMT?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type repartoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ejercicioId" | "fechaCierre" | "estado" | "porcentajeUMT" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["reparto"]>;
export type repartoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lineareparto?: boolean | Prisma.reparto$linearepartoArgs<ExtArgs>;
    obligacioneconomica?: boolean | Prisma.reparto$obligacioneconomicaArgs<ExtArgs>;
    ejercicio?: boolean | Prisma.ejercicioDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.RepartoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $repartoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "reparto";
    objects: {
        lineareparto: Prisma.$linearepartoPayload<ExtArgs>[];
        obligacioneconomica: Prisma.$obligacioneconomicaPayload<ExtArgs> | null;
        ejercicio: Prisma.$ejercicioPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ejercicioId: string;
        fechaCierre: Date | null;
        estado: $Enums.reparto_estado;
        porcentajeUMT: runtime.Decimal | null;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["reparto"]>;
    composites: {};
};
export type repartoGetPayload<S extends boolean | null | undefined | repartoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$repartoPayload, S>;
export type repartoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<repartoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RepartoCountAggregateInputType | true;
};
export interface repartoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['reparto'];
        meta: {
            name: 'reparto';
        };
    };
    /**
     * Find zero or one Reparto that matches the filter.
     * @param {repartoFindUniqueArgs} args - Arguments to find a Reparto
     * @example
     * // Get one Reparto
     * const reparto = await prisma.reparto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends repartoFindUniqueArgs>(args: Prisma.SelectSubset<T, repartoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__repartoClient<runtime.Types.Result.GetResult<Prisma.$repartoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Reparto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {repartoFindUniqueOrThrowArgs} args - Arguments to find a Reparto
     * @example
     * // Get one Reparto
     * const reparto = await prisma.reparto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends repartoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, repartoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__repartoClient<runtime.Types.Result.GetResult<Prisma.$repartoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Reparto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repartoFindFirstArgs} args - Arguments to find a Reparto
     * @example
     * // Get one Reparto
     * const reparto = await prisma.reparto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends repartoFindFirstArgs>(args?: Prisma.SelectSubset<T, repartoFindFirstArgs<ExtArgs>>): Prisma.Prisma__repartoClient<runtime.Types.Result.GetResult<Prisma.$repartoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Reparto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repartoFindFirstOrThrowArgs} args - Arguments to find a Reparto
     * @example
     * // Get one Reparto
     * const reparto = await prisma.reparto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends repartoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, repartoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__repartoClient<runtime.Types.Result.GetResult<Prisma.$repartoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Repartos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repartoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repartos
     * const repartos = await prisma.reparto.findMany()
     *
     * // Get first 10 Repartos
     * const repartos = await prisma.reparto.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const repartoWithIdOnly = await prisma.reparto.findMany({ select: { id: true } })
     *
     */
    findMany<T extends repartoFindManyArgs>(args?: Prisma.SelectSubset<T, repartoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$repartoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Reparto.
     * @param {repartoCreateArgs} args - Arguments to create a Reparto.
     * @example
     * // Create one Reparto
     * const Reparto = await prisma.reparto.create({
     *   data: {
     *     // ... data to create a Reparto
     *   }
     * })
     *
     */
    create<T extends repartoCreateArgs>(args: Prisma.SelectSubset<T, repartoCreateArgs<ExtArgs>>): Prisma.Prisma__repartoClient<runtime.Types.Result.GetResult<Prisma.$repartoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Repartos.
     * @param {repartoCreateManyArgs} args - Arguments to create many Repartos.
     * @example
     * // Create many Repartos
     * const reparto = await prisma.reparto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends repartoCreateManyArgs>(args?: Prisma.SelectSubset<T, repartoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Reparto.
     * @param {repartoDeleteArgs} args - Arguments to delete one Reparto.
     * @example
     * // Delete one Reparto
     * const Reparto = await prisma.reparto.delete({
     *   where: {
     *     // ... filter to delete one Reparto
     *   }
     * })
     *
     */
    delete<T extends repartoDeleteArgs>(args: Prisma.SelectSubset<T, repartoDeleteArgs<ExtArgs>>): Prisma.Prisma__repartoClient<runtime.Types.Result.GetResult<Prisma.$repartoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Reparto.
     * @param {repartoUpdateArgs} args - Arguments to update one Reparto.
     * @example
     * // Update one Reparto
     * const reparto = await prisma.reparto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends repartoUpdateArgs>(args: Prisma.SelectSubset<T, repartoUpdateArgs<ExtArgs>>): Prisma.Prisma__repartoClient<runtime.Types.Result.GetResult<Prisma.$repartoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Repartos.
     * @param {repartoDeleteManyArgs} args - Arguments to filter Repartos to delete.
     * @example
     * // Delete a few Repartos
     * const { count } = await prisma.reparto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends repartoDeleteManyArgs>(args?: Prisma.SelectSubset<T, repartoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Repartos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repartoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repartos
     * const reparto = await prisma.reparto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends repartoUpdateManyArgs>(args: Prisma.SelectSubset<T, repartoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Reparto.
     * @param {repartoUpsertArgs} args - Arguments to update or create a Reparto.
     * @example
     * // Update or create a Reparto
     * const reparto = await prisma.reparto.upsert({
     *   create: {
     *     // ... data to create a Reparto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reparto we want to update
     *   }
     * })
     */
    upsert<T extends repartoUpsertArgs>(args: Prisma.SelectSubset<T, repartoUpsertArgs<ExtArgs>>): Prisma.Prisma__repartoClient<runtime.Types.Result.GetResult<Prisma.$repartoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Repartos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repartoCountArgs} args - Arguments to filter Repartos to count.
     * @example
     * // Count the number of Repartos
     * const count = await prisma.reparto.count({
     *   where: {
     *     // ... the filter for the Repartos we want to count
     *   }
     * })
    **/
    count<T extends repartoCountArgs>(args?: Prisma.Subset<T, repartoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RepartoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Reparto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepartoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RepartoAggregateArgs>(args: Prisma.Subset<T, RepartoAggregateArgs>): Prisma.PrismaPromise<GetRepartoAggregateType<T>>;
    /**
     * Group by Reparto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {repartoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends repartoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: repartoGroupByArgs['orderBy'];
    } : {
        orderBy?: repartoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, repartoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepartoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the reparto model
     */
    readonly fields: repartoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for reparto.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__repartoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    lineareparto<T extends Prisma.reparto$linearepartoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.reparto$linearepartoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$linearepartoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    obligacioneconomica<T extends Prisma.reparto$obligacioneconomicaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.reparto$obligacioneconomicaArgs<ExtArgs>>): Prisma.Prisma__obligacioneconomicaClient<runtime.Types.Result.GetResult<Prisma.$obligacioneconomicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    ejercicio<T extends Prisma.ejercicioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ejercicioDefaultArgs<ExtArgs>>): Prisma.Prisma__ejercicioClient<runtime.Types.Result.GetResult<Prisma.$ejercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the reparto model
 */
export interface repartoFieldRefs {
    readonly id: Prisma.FieldRef<"reparto", 'String'>;
    readonly ejercicioId: Prisma.FieldRef<"reparto", 'String'>;
    readonly fechaCierre: Prisma.FieldRef<"reparto", 'DateTime'>;
    readonly estado: Prisma.FieldRef<"reparto", 'reparto_estado'>;
    readonly porcentajeUMT: Prisma.FieldRef<"reparto", 'Decimal'>;
    readonly observaciones: Prisma.FieldRef<"reparto", 'String'>;
    readonly createdAt: Prisma.FieldRef<"reparto", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"reparto", 'DateTime'>;
}
/**
 * reparto findUnique
 */
export type repartoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reparto
     */
    select?: Prisma.repartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reparto
     */
    omit?: Prisma.repartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.repartoInclude<ExtArgs> | null;
    /**
     * Filter, which reparto to fetch.
     */
    where: Prisma.repartoWhereUniqueInput;
};
/**
 * reparto findUniqueOrThrow
 */
export type repartoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reparto
     */
    select?: Prisma.repartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reparto
     */
    omit?: Prisma.repartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.repartoInclude<ExtArgs> | null;
    /**
     * Filter, which reparto to fetch.
     */
    where: Prisma.repartoWhereUniqueInput;
};
/**
 * reparto findFirst
 */
export type repartoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reparto
     */
    select?: Prisma.repartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reparto
     */
    omit?: Prisma.repartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.repartoInclude<ExtArgs> | null;
    /**
     * Filter, which reparto to fetch.
     */
    where?: Prisma.repartoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of repartos to fetch.
     */
    orderBy?: Prisma.repartoOrderByWithRelationInput | Prisma.repartoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for repartos.
     */
    cursor?: Prisma.repartoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` repartos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` repartos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of repartos.
     */
    distinct?: Prisma.RepartoScalarFieldEnum | Prisma.RepartoScalarFieldEnum[];
};
/**
 * reparto findFirstOrThrow
 */
export type repartoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reparto
     */
    select?: Prisma.repartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reparto
     */
    omit?: Prisma.repartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.repartoInclude<ExtArgs> | null;
    /**
     * Filter, which reparto to fetch.
     */
    where?: Prisma.repartoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of repartos to fetch.
     */
    orderBy?: Prisma.repartoOrderByWithRelationInput | Prisma.repartoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for repartos.
     */
    cursor?: Prisma.repartoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` repartos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` repartos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of repartos.
     */
    distinct?: Prisma.RepartoScalarFieldEnum | Prisma.RepartoScalarFieldEnum[];
};
/**
 * reparto findMany
 */
export type repartoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reparto
     */
    select?: Prisma.repartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reparto
     */
    omit?: Prisma.repartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.repartoInclude<ExtArgs> | null;
    /**
     * Filter, which repartos to fetch.
     */
    where?: Prisma.repartoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of repartos to fetch.
     */
    orderBy?: Prisma.repartoOrderByWithRelationInput | Prisma.repartoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing repartos.
     */
    cursor?: Prisma.repartoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` repartos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` repartos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of repartos.
     */
    distinct?: Prisma.RepartoScalarFieldEnum | Prisma.RepartoScalarFieldEnum[];
};
/**
 * reparto create
 */
export type repartoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reparto
     */
    select?: Prisma.repartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reparto
     */
    omit?: Prisma.repartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.repartoInclude<ExtArgs> | null;
    /**
     * The data needed to create a reparto.
     */
    data: Prisma.XOR<Prisma.repartoCreateInput, Prisma.repartoUncheckedCreateInput>;
};
/**
 * reparto createMany
 */
export type repartoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many repartos.
     */
    data: Prisma.repartoCreateManyInput | Prisma.repartoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * reparto update
 */
export type repartoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reparto
     */
    select?: Prisma.repartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reparto
     */
    omit?: Prisma.repartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.repartoInclude<ExtArgs> | null;
    /**
     * The data needed to update a reparto.
     */
    data: Prisma.XOR<Prisma.repartoUpdateInput, Prisma.repartoUncheckedUpdateInput>;
    /**
     * Choose, which reparto to update.
     */
    where: Prisma.repartoWhereUniqueInput;
};
/**
 * reparto updateMany
 */
export type repartoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update repartos.
     */
    data: Prisma.XOR<Prisma.repartoUpdateManyMutationInput, Prisma.repartoUncheckedUpdateManyInput>;
    /**
     * Filter which repartos to update
     */
    where?: Prisma.repartoWhereInput;
    /**
     * Limit how many repartos to update.
     */
    limit?: number;
};
/**
 * reparto upsert
 */
export type repartoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reparto
     */
    select?: Prisma.repartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reparto
     */
    omit?: Prisma.repartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.repartoInclude<ExtArgs> | null;
    /**
     * The filter to search for the reparto to update in case it exists.
     */
    where: Prisma.repartoWhereUniqueInput;
    /**
     * In case the reparto found by the `where` argument doesn't exist, create a new reparto with this data.
     */
    create: Prisma.XOR<Prisma.repartoCreateInput, Prisma.repartoUncheckedCreateInput>;
    /**
     * In case the reparto was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.repartoUpdateInput, Prisma.repartoUncheckedUpdateInput>;
};
/**
 * reparto delete
 */
export type repartoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reparto
     */
    select?: Prisma.repartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reparto
     */
    omit?: Prisma.repartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.repartoInclude<ExtArgs> | null;
    /**
     * Filter which reparto to delete.
     */
    where: Prisma.repartoWhereUniqueInput;
};
/**
 * reparto deleteMany
 */
export type repartoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which repartos to delete
     */
    where?: Prisma.repartoWhereInput;
    /**
     * Limit how many repartos to delete.
     */
    limit?: number;
};
/**
 * reparto.lineareparto
 */
export type reparto$linearepartoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * reparto.obligacioneconomica
 */
export type reparto$obligacioneconomicaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obligacioneconomica
     */
    select?: Prisma.obligacioneconomicaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the obligacioneconomica
     */
    omit?: Prisma.obligacioneconomicaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.obligacioneconomicaInclude<ExtArgs> | null;
    where?: Prisma.obligacioneconomicaWhereInput;
};
/**
 * reparto without action
 */
export type repartoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reparto
     */
    select?: Prisma.repartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reparto
     */
    omit?: Prisma.repartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.repartoInclude<ExtArgs> | null;
};
//# sourceMappingURL=reparto.d.ts.map