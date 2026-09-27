import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model asiento
 *
 */
export type asientoModel = runtime.Types.Result.DefaultSelection<Prisma.$asientoPayload>;
export type AggregateAsiento = {
    _count: AsientoCountAggregateOutputType | null;
    _avg: AsientoAvgAggregateOutputType | null;
    _sum: AsientoSumAggregateOutputType | null;
    _min: AsientoMinAggregateOutputType | null;
    _max: AsientoMaxAggregateOutputType | null;
};
export type AsientoAvgAggregateOutputType = {
    numero: number | null;
};
export type AsientoSumAggregateOutputType = {
    numero: number | null;
};
export type AsientoMinAggregateOutputType = {
    id: string | null;
    numero: number | null;
    ejercicioId: string | null;
    periodoContableId: string | null;
    fechaContabilizacion: Date | null;
    concepto: string | null;
    createdAt: Date | null;
};
export type AsientoMaxAggregateOutputType = {
    id: string | null;
    numero: number | null;
    ejercicioId: string | null;
    periodoContableId: string | null;
    fechaContabilizacion: Date | null;
    concepto: string | null;
    createdAt: Date | null;
};
export type AsientoCountAggregateOutputType = {
    id: number;
    numero: number;
    ejercicioId: number;
    periodoContableId: number;
    fechaContabilizacion: number;
    concepto: number;
    createdAt: number;
    _all: number;
};
export type AsientoAvgAggregateInputType = {
    numero?: true;
};
export type AsientoSumAggregateInputType = {
    numero?: true;
};
export type AsientoMinAggregateInputType = {
    id?: true;
    numero?: true;
    ejercicioId?: true;
    periodoContableId?: true;
    fechaContabilizacion?: true;
    concepto?: true;
    createdAt?: true;
};
export type AsientoMaxAggregateInputType = {
    id?: true;
    numero?: true;
    ejercicioId?: true;
    periodoContableId?: true;
    fechaContabilizacion?: true;
    concepto?: true;
    createdAt?: true;
};
export type AsientoCountAggregateInputType = {
    id?: true;
    numero?: true;
    ejercicioId?: true;
    periodoContableId?: true;
    fechaContabilizacion?: true;
    concepto?: true;
    createdAt?: true;
    _all?: true;
};
export type AsientoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which asiento to aggregate.
     */
    where?: Prisma.asientoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of asientos to fetch.
     */
    orderBy?: Prisma.asientoOrderByWithRelationInput | Prisma.asientoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.asientoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` asientos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` asientos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned asientos
    **/
    _count?: true | AsientoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AsientoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AsientoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AsientoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AsientoMaxAggregateInputType;
};
export type GetAsientoAggregateType<T extends AsientoAggregateArgs> = {
    [P in keyof T & keyof AggregateAsiento]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAsiento[P]> : Prisma.GetScalarType<T[P], AggregateAsiento[P]>;
};
export type asientoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.asientoWhereInput;
    orderBy?: Prisma.asientoOrderByWithAggregationInput | Prisma.asientoOrderByWithAggregationInput[];
    by: Prisma.AsientoScalarFieldEnum[] | Prisma.AsientoScalarFieldEnum;
    having?: Prisma.asientoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AsientoCountAggregateInputType | true;
    _avg?: AsientoAvgAggregateInputType;
    _sum?: AsientoSumAggregateInputType;
    _min?: AsientoMinAggregateInputType;
    _max?: AsientoMaxAggregateInputType;
};
export type AsientoGroupByOutputType = {
    id: string;
    numero: number;
    ejercicioId: string;
    periodoContableId: string | null;
    fechaContabilizacion: Date;
    concepto: string | null;
    createdAt: Date;
    _count: AsientoCountAggregateOutputType | null;
    _avg: AsientoAvgAggregateOutputType | null;
    _sum: AsientoSumAggregateOutputType | null;
    _min: AsientoMinAggregateOutputType | null;
    _max: AsientoMaxAggregateOutputType | null;
};
export type GetAsientoGroupByPayload<T extends asientoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AsientoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AsientoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AsientoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AsientoGroupByOutputType[P]>;
}>>;
export type asientoWhereInput = {
    AND?: Prisma.asientoWhereInput | Prisma.asientoWhereInput[];
    OR?: Prisma.asientoWhereInput[];
    NOT?: Prisma.asientoWhereInput | Prisma.asientoWhereInput[];
    id?: Prisma.StringFilter<"asiento"> | string;
    numero?: Prisma.IntFilter<"asiento"> | number;
    ejercicioId?: Prisma.StringFilter<"asiento"> | string;
    periodoContableId?: Prisma.StringNullableFilter<"asiento"> | string | null;
    fechaContabilizacion?: Prisma.DateTimeFilter<"asiento"> | Date | string;
    concepto?: Prisma.StringNullableFilter<"asiento"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"asiento"> | Date | string;
    ejercicio?: Prisma.XOR<Prisma.EjercicioScalarRelationFilter, Prisma.ejercicioWhereInput>;
    periodocontable?: Prisma.XOR<Prisma.PeriodocontableNullableScalarRelationFilter, Prisma.periodocontableWhereInput> | null;
    asientomovimiento?: Prisma.AsientomovimientoListRelationFilter;
    lineaasiento?: Prisma.LineaasientoListRelationFilter;
};
export type asientoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    periodoContableId?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaContabilizacion?: Prisma.SortOrder;
    concepto?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    ejercicio?: Prisma.ejercicioOrderByWithRelationInput;
    periodocontable?: Prisma.periodocontableOrderByWithRelationInput;
    asientomovimiento?: Prisma.asientomovimientoOrderByRelationAggregateInput;
    lineaasiento?: Prisma.lineaasientoOrderByRelationAggregateInput;
    _relevance?: Prisma.asientoOrderByRelevanceInput;
};
export type asientoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    ejercicioId_numero?: Prisma.asientoEjercicioIdNumeroCompoundUniqueInput;
    AND?: Prisma.asientoWhereInput | Prisma.asientoWhereInput[];
    OR?: Prisma.asientoWhereInput[];
    NOT?: Prisma.asientoWhereInput | Prisma.asientoWhereInput[];
    numero?: Prisma.IntFilter<"asiento"> | number;
    ejercicioId?: Prisma.StringFilter<"asiento"> | string;
    periodoContableId?: Prisma.StringNullableFilter<"asiento"> | string | null;
    fechaContabilizacion?: Prisma.DateTimeFilter<"asiento"> | Date | string;
    concepto?: Prisma.StringNullableFilter<"asiento"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"asiento"> | Date | string;
    ejercicio?: Prisma.XOR<Prisma.EjercicioScalarRelationFilter, Prisma.ejercicioWhereInput>;
    periodocontable?: Prisma.XOR<Prisma.PeriodocontableNullableScalarRelationFilter, Prisma.periodocontableWhereInput> | null;
    asientomovimiento?: Prisma.AsientomovimientoListRelationFilter;
    lineaasiento?: Prisma.LineaasientoListRelationFilter;
}, "id" | "ejercicioId_numero">;
export type asientoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    periodoContableId?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaContabilizacion?: Prisma.SortOrder;
    concepto?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.asientoCountOrderByAggregateInput;
    _avg?: Prisma.asientoAvgOrderByAggregateInput;
    _max?: Prisma.asientoMaxOrderByAggregateInput;
    _min?: Prisma.asientoMinOrderByAggregateInput;
    _sum?: Prisma.asientoSumOrderByAggregateInput;
};
export type asientoScalarWhereWithAggregatesInput = {
    AND?: Prisma.asientoScalarWhereWithAggregatesInput | Prisma.asientoScalarWhereWithAggregatesInput[];
    OR?: Prisma.asientoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.asientoScalarWhereWithAggregatesInput | Prisma.asientoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"asiento"> | string;
    numero?: Prisma.IntWithAggregatesFilter<"asiento"> | number;
    ejercicioId?: Prisma.StringWithAggregatesFilter<"asiento"> | string;
    periodoContableId?: Prisma.StringNullableWithAggregatesFilter<"asiento"> | string | null;
    fechaContabilizacion?: Prisma.DateTimeWithAggregatesFilter<"asiento"> | Date | string;
    concepto?: Prisma.StringNullableWithAggregatesFilter<"asiento"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"asiento"> | Date | string;
};
export type asientoCreateInput = {
    id: string;
    numero: number;
    fechaContabilizacion: Date | string;
    concepto?: string | null;
    createdAt?: Date | string;
    ejercicio: Prisma.ejercicioCreateNestedOneWithoutAsientoInput;
    periodocontable?: Prisma.periodocontableCreateNestedOneWithoutAsientoInput;
    asientomovimiento?: Prisma.asientomovimientoCreateNestedManyWithoutAsientoInput;
    lineaasiento?: Prisma.lineaasientoCreateNestedManyWithoutAsientoInput;
};
export type asientoUncheckedCreateInput = {
    id: string;
    numero: number;
    ejercicioId: string;
    periodoContableId?: string | null;
    fechaContabilizacion: Date | string;
    concepto?: string | null;
    createdAt?: Date | string;
    asientomovimiento?: Prisma.asientomovimientoUncheckedCreateNestedManyWithoutAsientoInput;
    lineaasiento?: Prisma.lineaasientoUncheckedCreateNestedManyWithoutAsientoInput;
};
export type asientoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaContabilizacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ejercicio?: Prisma.ejercicioUpdateOneRequiredWithoutAsientoNestedInput;
    periodocontable?: Prisma.periodocontableUpdateOneWithoutAsientoNestedInput;
    asientomovimiento?: Prisma.asientomovimientoUpdateManyWithoutAsientoNestedInput;
    lineaasiento?: Prisma.lineaasientoUpdateManyWithoutAsientoNestedInput;
};
export type asientoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    periodoContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaContabilizacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asientomovimiento?: Prisma.asientomovimientoUncheckedUpdateManyWithoutAsientoNestedInput;
    lineaasiento?: Prisma.lineaasientoUncheckedUpdateManyWithoutAsientoNestedInput;
};
export type asientoCreateManyInput = {
    id: string;
    numero: number;
    ejercicioId: string;
    periodoContableId?: string | null;
    fechaContabilizacion: Date | string;
    concepto?: string | null;
    createdAt?: Date | string;
};
export type asientoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaContabilizacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type asientoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    periodoContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaContabilizacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type asientoOrderByRelevanceInput = {
    fields: Prisma.asientoOrderByRelevanceFieldEnum | Prisma.asientoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type asientoEjercicioIdNumeroCompoundUniqueInput = {
    ejercicioId: string;
    numero: number;
};
export type asientoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    periodoContableId?: Prisma.SortOrder;
    fechaContabilizacion?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type asientoAvgOrderByAggregateInput = {
    numero?: Prisma.SortOrder;
};
export type asientoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    periodoContableId?: Prisma.SortOrder;
    fechaContabilizacion?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type asientoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    numero?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    periodoContableId?: Prisma.SortOrder;
    fechaContabilizacion?: Prisma.SortOrder;
    concepto?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type asientoSumOrderByAggregateInput = {
    numero?: Prisma.SortOrder;
};
export type AsientoScalarRelationFilter = {
    is?: Prisma.asientoWhereInput;
    isNot?: Prisma.asientoWhereInput;
};
export type AsientoListRelationFilter = {
    every?: Prisma.asientoWhereInput;
    some?: Prisma.asientoWhereInput;
    none?: Prisma.asientoWhereInput;
};
export type asientoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type asientoCreateNestedOneWithoutAsientomovimientoInput = {
    create?: Prisma.XOR<Prisma.asientoCreateWithoutAsientomovimientoInput, Prisma.asientoUncheckedCreateWithoutAsientomovimientoInput>;
    connectOrCreate?: Prisma.asientoCreateOrConnectWithoutAsientomovimientoInput;
    connect?: Prisma.asientoWhereUniqueInput;
};
export type asientoUpdateOneRequiredWithoutAsientomovimientoNestedInput = {
    create?: Prisma.XOR<Prisma.asientoCreateWithoutAsientomovimientoInput, Prisma.asientoUncheckedCreateWithoutAsientomovimientoInput>;
    connectOrCreate?: Prisma.asientoCreateOrConnectWithoutAsientomovimientoInput;
    upsert?: Prisma.asientoUpsertWithoutAsientomovimientoInput;
    connect?: Prisma.asientoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.asientoUpdateToOneWithWhereWithoutAsientomovimientoInput, Prisma.asientoUpdateWithoutAsientomovimientoInput>, Prisma.asientoUncheckedUpdateWithoutAsientomovimientoInput>;
};
export type asientoCreateNestedManyWithoutEjercicioInput = {
    create?: Prisma.XOR<Prisma.asientoCreateWithoutEjercicioInput, Prisma.asientoUncheckedCreateWithoutEjercicioInput> | Prisma.asientoCreateWithoutEjercicioInput[] | Prisma.asientoUncheckedCreateWithoutEjercicioInput[];
    connectOrCreate?: Prisma.asientoCreateOrConnectWithoutEjercicioInput | Prisma.asientoCreateOrConnectWithoutEjercicioInput[];
    createMany?: Prisma.asientoCreateManyEjercicioInputEnvelope;
    connect?: Prisma.asientoWhereUniqueInput | Prisma.asientoWhereUniqueInput[];
};
export type asientoUncheckedCreateNestedManyWithoutEjercicioInput = {
    create?: Prisma.XOR<Prisma.asientoCreateWithoutEjercicioInput, Prisma.asientoUncheckedCreateWithoutEjercicioInput> | Prisma.asientoCreateWithoutEjercicioInput[] | Prisma.asientoUncheckedCreateWithoutEjercicioInput[];
    connectOrCreate?: Prisma.asientoCreateOrConnectWithoutEjercicioInput | Prisma.asientoCreateOrConnectWithoutEjercicioInput[];
    createMany?: Prisma.asientoCreateManyEjercicioInputEnvelope;
    connect?: Prisma.asientoWhereUniqueInput | Prisma.asientoWhereUniqueInput[];
};
export type asientoUpdateManyWithoutEjercicioNestedInput = {
    create?: Prisma.XOR<Prisma.asientoCreateWithoutEjercicioInput, Prisma.asientoUncheckedCreateWithoutEjercicioInput> | Prisma.asientoCreateWithoutEjercicioInput[] | Prisma.asientoUncheckedCreateWithoutEjercicioInput[];
    connectOrCreate?: Prisma.asientoCreateOrConnectWithoutEjercicioInput | Prisma.asientoCreateOrConnectWithoutEjercicioInput[];
    upsert?: Prisma.asientoUpsertWithWhereUniqueWithoutEjercicioInput | Prisma.asientoUpsertWithWhereUniqueWithoutEjercicioInput[];
    createMany?: Prisma.asientoCreateManyEjercicioInputEnvelope;
    set?: Prisma.asientoWhereUniqueInput | Prisma.asientoWhereUniqueInput[];
    disconnect?: Prisma.asientoWhereUniqueInput | Prisma.asientoWhereUniqueInput[];
    delete?: Prisma.asientoWhereUniqueInput | Prisma.asientoWhereUniqueInput[];
    connect?: Prisma.asientoWhereUniqueInput | Prisma.asientoWhereUniqueInput[];
    update?: Prisma.asientoUpdateWithWhereUniqueWithoutEjercicioInput | Prisma.asientoUpdateWithWhereUniqueWithoutEjercicioInput[];
    updateMany?: Prisma.asientoUpdateManyWithWhereWithoutEjercicioInput | Prisma.asientoUpdateManyWithWhereWithoutEjercicioInput[];
    deleteMany?: Prisma.asientoScalarWhereInput | Prisma.asientoScalarWhereInput[];
};
export type asientoUncheckedUpdateManyWithoutEjercicioNestedInput = {
    create?: Prisma.XOR<Prisma.asientoCreateWithoutEjercicioInput, Prisma.asientoUncheckedCreateWithoutEjercicioInput> | Prisma.asientoCreateWithoutEjercicioInput[] | Prisma.asientoUncheckedCreateWithoutEjercicioInput[];
    connectOrCreate?: Prisma.asientoCreateOrConnectWithoutEjercicioInput | Prisma.asientoCreateOrConnectWithoutEjercicioInput[];
    upsert?: Prisma.asientoUpsertWithWhereUniqueWithoutEjercicioInput | Prisma.asientoUpsertWithWhereUniqueWithoutEjercicioInput[];
    createMany?: Prisma.asientoCreateManyEjercicioInputEnvelope;
    set?: Prisma.asientoWhereUniqueInput | Prisma.asientoWhereUniqueInput[];
    disconnect?: Prisma.asientoWhereUniqueInput | Prisma.asientoWhereUniqueInput[];
    delete?: Prisma.asientoWhereUniqueInput | Prisma.asientoWhereUniqueInput[];
    connect?: Prisma.asientoWhereUniqueInput | Prisma.asientoWhereUniqueInput[];
    update?: Prisma.asientoUpdateWithWhereUniqueWithoutEjercicioInput | Prisma.asientoUpdateWithWhereUniqueWithoutEjercicioInput[];
    updateMany?: Prisma.asientoUpdateManyWithWhereWithoutEjercicioInput | Prisma.asientoUpdateManyWithWhereWithoutEjercicioInput[];
    deleteMany?: Prisma.asientoScalarWhereInput | Prisma.asientoScalarWhereInput[];
};
export type asientoCreateNestedOneWithoutLineaasientoInput = {
    create?: Prisma.XOR<Prisma.asientoCreateWithoutLineaasientoInput, Prisma.asientoUncheckedCreateWithoutLineaasientoInput>;
    connectOrCreate?: Prisma.asientoCreateOrConnectWithoutLineaasientoInput;
    connect?: Prisma.asientoWhereUniqueInput;
};
export type asientoUpdateOneRequiredWithoutLineaasientoNestedInput = {
    create?: Prisma.XOR<Prisma.asientoCreateWithoutLineaasientoInput, Prisma.asientoUncheckedCreateWithoutLineaasientoInput>;
    connectOrCreate?: Prisma.asientoCreateOrConnectWithoutLineaasientoInput;
    upsert?: Prisma.asientoUpsertWithoutLineaasientoInput;
    connect?: Prisma.asientoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.asientoUpdateToOneWithWhereWithoutLineaasientoInput, Prisma.asientoUpdateWithoutLineaasientoInput>, Prisma.asientoUncheckedUpdateWithoutLineaasientoInput>;
};
export type asientoCreateNestedManyWithoutPeriodocontableInput = {
    create?: Prisma.XOR<Prisma.asientoCreateWithoutPeriodocontableInput, Prisma.asientoUncheckedCreateWithoutPeriodocontableInput> | Prisma.asientoCreateWithoutPeriodocontableInput[] | Prisma.asientoUncheckedCreateWithoutPeriodocontableInput[];
    connectOrCreate?: Prisma.asientoCreateOrConnectWithoutPeriodocontableInput | Prisma.asientoCreateOrConnectWithoutPeriodocontableInput[];
    createMany?: Prisma.asientoCreateManyPeriodocontableInputEnvelope;
    connect?: Prisma.asientoWhereUniqueInput | Prisma.asientoWhereUniqueInput[];
};
export type asientoUncheckedCreateNestedManyWithoutPeriodocontableInput = {
    create?: Prisma.XOR<Prisma.asientoCreateWithoutPeriodocontableInput, Prisma.asientoUncheckedCreateWithoutPeriodocontableInput> | Prisma.asientoCreateWithoutPeriodocontableInput[] | Prisma.asientoUncheckedCreateWithoutPeriodocontableInput[];
    connectOrCreate?: Prisma.asientoCreateOrConnectWithoutPeriodocontableInput | Prisma.asientoCreateOrConnectWithoutPeriodocontableInput[];
    createMany?: Prisma.asientoCreateManyPeriodocontableInputEnvelope;
    connect?: Prisma.asientoWhereUniqueInput | Prisma.asientoWhereUniqueInput[];
};
export type asientoUpdateManyWithoutPeriodocontableNestedInput = {
    create?: Prisma.XOR<Prisma.asientoCreateWithoutPeriodocontableInput, Prisma.asientoUncheckedCreateWithoutPeriodocontableInput> | Prisma.asientoCreateWithoutPeriodocontableInput[] | Prisma.asientoUncheckedCreateWithoutPeriodocontableInput[];
    connectOrCreate?: Prisma.asientoCreateOrConnectWithoutPeriodocontableInput | Prisma.asientoCreateOrConnectWithoutPeriodocontableInput[];
    upsert?: Prisma.asientoUpsertWithWhereUniqueWithoutPeriodocontableInput | Prisma.asientoUpsertWithWhereUniqueWithoutPeriodocontableInput[];
    createMany?: Prisma.asientoCreateManyPeriodocontableInputEnvelope;
    set?: Prisma.asientoWhereUniqueInput | Prisma.asientoWhereUniqueInput[];
    disconnect?: Prisma.asientoWhereUniqueInput | Prisma.asientoWhereUniqueInput[];
    delete?: Prisma.asientoWhereUniqueInput | Prisma.asientoWhereUniqueInput[];
    connect?: Prisma.asientoWhereUniqueInput | Prisma.asientoWhereUniqueInput[];
    update?: Prisma.asientoUpdateWithWhereUniqueWithoutPeriodocontableInput | Prisma.asientoUpdateWithWhereUniqueWithoutPeriodocontableInput[];
    updateMany?: Prisma.asientoUpdateManyWithWhereWithoutPeriodocontableInput | Prisma.asientoUpdateManyWithWhereWithoutPeriodocontableInput[];
    deleteMany?: Prisma.asientoScalarWhereInput | Prisma.asientoScalarWhereInput[];
};
export type asientoUncheckedUpdateManyWithoutPeriodocontableNestedInput = {
    create?: Prisma.XOR<Prisma.asientoCreateWithoutPeriodocontableInput, Prisma.asientoUncheckedCreateWithoutPeriodocontableInput> | Prisma.asientoCreateWithoutPeriodocontableInput[] | Prisma.asientoUncheckedCreateWithoutPeriodocontableInput[];
    connectOrCreate?: Prisma.asientoCreateOrConnectWithoutPeriodocontableInput | Prisma.asientoCreateOrConnectWithoutPeriodocontableInput[];
    upsert?: Prisma.asientoUpsertWithWhereUniqueWithoutPeriodocontableInput | Prisma.asientoUpsertWithWhereUniqueWithoutPeriodocontableInput[];
    createMany?: Prisma.asientoCreateManyPeriodocontableInputEnvelope;
    set?: Prisma.asientoWhereUniqueInput | Prisma.asientoWhereUniqueInput[];
    disconnect?: Prisma.asientoWhereUniqueInput | Prisma.asientoWhereUniqueInput[];
    delete?: Prisma.asientoWhereUniqueInput | Prisma.asientoWhereUniqueInput[];
    connect?: Prisma.asientoWhereUniqueInput | Prisma.asientoWhereUniqueInput[];
    update?: Prisma.asientoUpdateWithWhereUniqueWithoutPeriodocontableInput | Prisma.asientoUpdateWithWhereUniqueWithoutPeriodocontableInput[];
    updateMany?: Prisma.asientoUpdateManyWithWhereWithoutPeriodocontableInput | Prisma.asientoUpdateManyWithWhereWithoutPeriodocontableInput[];
    deleteMany?: Prisma.asientoScalarWhereInput | Prisma.asientoScalarWhereInput[];
};
export type asientoCreateWithoutAsientomovimientoInput = {
    id: string;
    numero: number;
    fechaContabilizacion: Date | string;
    concepto?: string | null;
    createdAt?: Date | string;
    ejercicio: Prisma.ejercicioCreateNestedOneWithoutAsientoInput;
    periodocontable?: Prisma.periodocontableCreateNestedOneWithoutAsientoInput;
    lineaasiento?: Prisma.lineaasientoCreateNestedManyWithoutAsientoInput;
};
export type asientoUncheckedCreateWithoutAsientomovimientoInput = {
    id: string;
    numero: number;
    ejercicioId: string;
    periodoContableId?: string | null;
    fechaContabilizacion: Date | string;
    concepto?: string | null;
    createdAt?: Date | string;
    lineaasiento?: Prisma.lineaasientoUncheckedCreateNestedManyWithoutAsientoInput;
};
export type asientoCreateOrConnectWithoutAsientomovimientoInput = {
    where: Prisma.asientoWhereUniqueInput;
    create: Prisma.XOR<Prisma.asientoCreateWithoutAsientomovimientoInput, Prisma.asientoUncheckedCreateWithoutAsientomovimientoInput>;
};
export type asientoUpsertWithoutAsientomovimientoInput = {
    update: Prisma.XOR<Prisma.asientoUpdateWithoutAsientomovimientoInput, Prisma.asientoUncheckedUpdateWithoutAsientomovimientoInput>;
    create: Prisma.XOR<Prisma.asientoCreateWithoutAsientomovimientoInput, Prisma.asientoUncheckedCreateWithoutAsientomovimientoInput>;
    where?: Prisma.asientoWhereInput;
};
export type asientoUpdateToOneWithWhereWithoutAsientomovimientoInput = {
    where?: Prisma.asientoWhereInput;
    data: Prisma.XOR<Prisma.asientoUpdateWithoutAsientomovimientoInput, Prisma.asientoUncheckedUpdateWithoutAsientomovimientoInput>;
};
export type asientoUpdateWithoutAsientomovimientoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaContabilizacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ejercicio?: Prisma.ejercicioUpdateOneRequiredWithoutAsientoNestedInput;
    periodocontable?: Prisma.periodocontableUpdateOneWithoutAsientoNestedInput;
    lineaasiento?: Prisma.lineaasientoUpdateManyWithoutAsientoNestedInput;
};
export type asientoUncheckedUpdateWithoutAsientomovimientoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    periodoContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaContabilizacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineaasiento?: Prisma.lineaasientoUncheckedUpdateManyWithoutAsientoNestedInput;
};
export type asientoCreateWithoutEjercicioInput = {
    id: string;
    numero: number;
    fechaContabilizacion: Date | string;
    concepto?: string | null;
    createdAt?: Date | string;
    periodocontable?: Prisma.periodocontableCreateNestedOneWithoutAsientoInput;
    asientomovimiento?: Prisma.asientomovimientoCreateNestedManyWithoutAsientoInput;
    lineaasiento?: Prisma.lineaasientoCreateNestedManyWithoutAsientoInput;
};
export type asientoUncheckedCreateWithoutEjercicioInput = {
    id: string;
    numero: number;
    periodoContableId?: string | null;
    fechaContabilizacion: Date | string;
    concepto?: string | null;
    createdAt?: Date | string;
    asientomovimiento?: Prisma.asientomovimientoUncheckedCreateNestedManyWithoutAsientoInput;
    lineaasiento?: Prisma.lineaasientoUncheckedCreateNestedManyWithoutAsientoInput;
};
export type asientoCreateOrConnectWithoutEjercicioInput = {
    where: Prisma.asientoWhereUniqueInput;
    create: Prisma.XOR<Prisma.asientoCreateWithoutEjercicioInput, Prisma.asientoUncheckedCreateWithoutEjercicioInput>;
};
export type asientoCreateManyEjercicioInputEnvelope = {
    data: Prisma.asientoCreateManyEjercicioInput | Prisma.asientoCreateManyEjercicioInput[];
    skipDuplicates?: boolean;
};
export type asientoUpsertWithWhereUniqueWithoutEjercicioInput = {
    where: Prisma.asientoWhereUniqueInput;
    update: Prisma.XOR<Prisma.asientoUpdateWithoutEjercicioInput, Prisma.asientoUncheckedUpdateWithoutEjercicioInput>;
    create: Prisma.XOR<Prisma.asientoCreateWithoutEjercicioInput, Prisma.asientoUncheckedCreateWithoutEjercicioInput>;
};
export type asientoUpdateWithWhereUniqueWithoutEjercicioInput = {
    where: Prisma.asientoWhereUniqueInput;
    data: Prisma.XOR<Prisma.asientoUpdateWithoutEjercicioInput, Prisma.asientoUncheckedUpdateWithoutEjercicioInput>;
};
export type asientoUpdateManyWithWhereWithoutEjercicioInput = {
    where: Prisma.asientoScalarWhereInput;
    data: Prisma.XOR<Prisma.asientoUpdateManyMutationInput, Prisma.asientoUncheckedUpdateManyWithoutEjercicioInput>;
};
export type asientoScalarWhereInput = {
    AND?: Prisma.asientoScalarWhereInput | Prisma.asientoScalarWhereInput[];
    OR?: Prisma.asientoScalarWhereInput[];
    NOT?: Prisma.asientoScalarWhereInput | Prisma.asientoScalarWhereInput[];
    id?: Prisma.StringFilter<"asiento"> | string;
    numero?: Prisma.IntFilter<"asiento"> | number;
    ejercicioId?: Prisma.StringFilter<"asiento"> | string;
    periodoContableId?: Prisma.StringNullableFilter<"asiento"> | string | null;
    fechaContabilizacion?: Prisma.DateTimeFilter<"asiento"> | Date | string;
    concepto?: Prisma.StringNullableFilter<"asiento"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"asiento"> | Date | string;
};
export type asientoCreateWithoutLineaasientoInput = {
    id: string;
    numero: number;
    fechaContabilizacion: Date | string;
    concepto?: string | null;
    createdAt?: Date | string;
    ejercicio: Prisma.ejercicioCreateNestedOneWithoutAsientoInput;
    periodocontable?: Prisma.periodocontableCreateNestedOneWithoutAsientoInput;
    asientomovimiento?: Prisma.asientomovimientoCreateNestedManyWithoutAsientoInput;
};
export type asientoUncheckedCreateWithoutLineaasientoInput = {
    id: string;
    numero: number;
    ejercicioId: string;
    periodoContableId?: string | null;
    fechaContabilizacion: Date | string;
    concepto?: string | null;
    createdAt?: Date | string;
    asientomovimiento?: Prisma.asientomovimientoUncheckedCreateNestedManyWithoutAsientoInput;
};
export type asientoCreateOrConnectWithoutLineaasientoInput = {
    where: Prisma.asientoWhereUniqueInput;
    create: Prisma.XOR<Prisma.asientoCreateWithoutLineaasientoInput, Prisma.asientoUncheckedCreateWithoutLineaasientoInput>;
};
export type asientoUpsertWithoutLineaasientoInput = {
    update: Prisma.XOR<Prisma.asientoUpdateWithoutLineaasientoInput, Prisma.asientoUncheckedUpdateWithoutLineaasientoInput>;
    create: Prisma.XOR<Prisma.asientoCreateWithoutLineaasientoInput, Prisma.asientoUncheckedCreateWithoutLineaasientoInput>;
    where?: Prisma.asientoWhereInput;
};
export type asientoUpdateToOneWithWhereWithoutLineaasientoInput = {
    where?: Prisma.asientoWhereInput;
    data: Prisma.XOR<Prisma.asientoUpdateWithoutLineaasientoInput, Prisma.asientoUncheckedUpdateWithoutLineaasientoInput>;
};
export type asientoUpdateWithoutLineaasientoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaContabilizacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ejercicio?: Prisma.ejercicioUpdateOneRequiredWithoutAsientoNestedInput;
    periodocontable?: Prisma.periodocontableUpdateOneWithoutAsientoNestedInput;
    asientomovimiento?: Prisma.asientomovimientoUpdateManyWithoutAsientoNestedInput;
};
export type asientoUncheckedUpdateWithoutLineaasientoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    periodoContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaContabilizacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asientomovimiento?: Prisma.asientomovimientoUncheckedUpdateManyWithoutAsientoNestedInput;
};
export type asientoCreateWithoutPeriodocontableInput = {
    id: string;
    numero: number;
    fechaContabilizacion: Date | string;
    concepto?: string | null;
    createdAt?: Date | string;
    ejercicio: Prisma.ejercicioCreateNestedOneWithoutAsientoInput;
    asientomovimiento?: Prisma.asientomovimientoCreateNestedManyWithoutAsientoInput;
    lineaasiento?: Prisma.lineaasientoCreateNestedManyWithoutAsientoInput;
};
export type asientoUncheckedCreateWithoutPeriodocontableInput = {
    id: string;
    numero: number;
    ejercicioId: string;
    fechaContabilizacion: Date | string;
    concepto?: string | null;
    createdAt?: Date | string;
    asientomovimiento?: Prisma.asientomovimientoUncheckedCreateNestedManyWithoutAsientoInput;
    lineaasiento?: Prisma.lineaasientoUncheckedCreateNestedManyWithoutAsientoInput;
};
export type asientoCreateOrConnectWithoutPeriodocontableInput = {
    where: Prisma.asientoWhereUniqueInput;
    create: Prisma.XOR<Prisma.asientoCreateWithoutPeriodocontableInput, Prisma.asientoUncheckedCreateWithoutPeriodocontableInput>;
};
export type asientoCreateManyPeriodocontableInputEnvelope = {
    data: Prisma.asientoCreateManyPeriodocontableInput | Prisma.asientoCreateManyPeriodocontableInput[];
    skipDuplicates?: boolean;
};
export type asientoUpsertWithWhereUniqueWithoutPeriodocontableInput = {
    where: Prisma.asientoWhereUniqueInput;
    update: Prisma.XOR<Prisma.asientoUpdateWithoutPeriodocontableInput, Prisma.asientoUncheckedUpdateWithoutPeriodocontableInput>;
    create: Prisma.XOR<Prisma.asientoCreateWithoutPeriodocontableInput, Prisma.asientoUncheckedCreateWithoutPeriodocontableInput>;
};
export type asientoUpdateWithWhereUniqueWithoutPeriodocontableInput = {
    where: Prisma.asientoWhereUniqueInput;
    data: Prisma.XOR<Prisma.asientoUpdateWithoutPeriodocontableInput, Prisma.asientoUncheckedUpdateWithoutPeriodocontableInput>;
};
export type asientoUpdateManyWithWhereWithoutPeriodocontableInput = {
    where: Prisma.asientoScalarWhereInput;
    data: Prisma.XOR<Prisma.asientoUpdateManyMutationInput, Prisma.asientoUncheckedUpdateManyWithoutPeriodocontableInput>;
};
export type asientoCreateManyEjercicioInput = {
    id: string;
    numero: number;
    periodoContableId?: string | null;
    fechaContabilizacion: Date | string;
    concepto?: string | null;
    createdAt?: Date | string;
};
export type asientoUpdateWithoutEjercicioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaContabilizacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodocontable?: Prisma.periodocontableUpdateOneWithoutAsientoNestedInput;
    asientomovimiento?: Prisma.asientomovimientoUpdateManyWithoutAsientoNestedInput;
    lineaasiento?: Prisma.lineaasientoUpdateManyWithoutAsientoNestedInput;
};
export type asientoUncheckedUpdateWithoutEjercicioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    periodoContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaContabilizacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asientomovimiento?: Prisma.asientomovimientoUncheckedUpdateManyWithoutAsientoNestedInput;
    lineaasiento?: Prisma.lineaasientoUncheckedUpdateManyWithoutAsientoNestedInput;
};
export type asientoUncheckedUpdateManyWithoutEjercicioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    periodoContableId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaContabilizacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type asientoCreateManyPeriodocontableInput = {
    id: string;
    numero: number;
    ejercicioId: string;
    fechaContabilizacion: Date | string;
    concepto?: string | null;
    createdAt?: Date | string;
};
export type asientoUpdateWithoutPeriodocontableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    fechaContabilizacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ejercicio?: Prisma.ejercicioUpdateOneRequiredWithoutAsientoNestedInput;
    asientomovimiento?: Prisma.asientomovimientoUpdateManyWithoutAsientoNestedInput;
    lineaasiento?: Prisma.lineaasientoUpdateManyWithoutAsientoNestedInput;
};
export type asientoUncheckedUpdateWithoutPeriodocontableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaContabilizacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asientomovimiento?: Prisma.asientomovimientoUncheckedUpdateManyWithoutAsientoNestedInput;
    lineaasiento?: Prisma.lineaasientoUncheckedUpdateManyWithoutAsientoNestedInput;
};
export type asientoUncheckedUpdateManyWithoutPeriodocontableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    numero?: Prisma.IntFieldUpdateOperationsInput | number;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaContabilizacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    concepto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type AsientoCountOutputType
 */
export type AsientoCountOutputType = {
    asientomovimiento: number;
    lineaasiento: number;
};
export type AsientoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asientomovimiento?: boolean | AsientoCountOutputTypeCountAsientomovimientoArgs;
    lineaasiento?: boolean | AsientoCountOutputTypeCountLineaasientoArgs;
};
/**
 * AsientoCountOutputType without action
 */
export type AsientoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsientoCountOutputType
     */
    select?: Prisma.AsientoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AsientoCountOutputType without action
 */
export type AsientoCountOutputTypeCountAsientomovimientoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.asientomovimientoWhereInput;
};
/**
 * AsientoCountOutputType without action
 */
export type AsientoCountOutputTypeCountLineaasientoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lineaasientoWhereInput;
};
export type asientoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    numero?: boolean;
    ejercicioId?: boolean;
    periodoContableId?: boolean;
    fechaContabilizacion?: boolean;
    concepto?: boolean;
    createdAt?: boolean;
    ejercicio?: boolean | Prisma.ejercicioDefaultArgs<ExtArgs>;
    periodocontable?: boolean | Prisma.asiento$periodocontableArgs<ExtArgs>;
    asientomovimiento?: boolean | Prisma.asiento$asientomovimientoArgs<ExtArgs>;
    lineaasiento?: boolean | Prisma.asiento$lineaasientoArgs<ExtArgs>;
    _count?: boolean | Prisma.AsientoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["asiento"]>;
export type asientoSelectScalar = {
    id?: boolean;
    numero?: boolean;
    ejercicioId?: boolean;
    periodoContableId?: boolean;
    fechaContabilizacion?: boolean;
    concepto?: boolean;
    createdAt?: boolean;
};
export type asientoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "numero" | "ejercicioId" | "periodoContableId" | "fechaContabilizacion" | "concepto" | "createdAt", ExtArgs["result"]["asiento"]>;
export type asientoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ejercicio?: boolean | Prisma.ejercicioDefaultArgs<ExtArgs>;
    periodocontable?: boolean | Prisma.asiento$periodocontableArgs<ExtArgs>;
    asientomovimiento?: boolean | Prisma.asiento$asientomovimientoArgs<ExtArgs>;
    lineaasiento?: boolean | Prisma.asiento$lineaasientoArgs<ExtArgs>;
    _count?: boolean | Prisma.AsientoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $asientoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "asiento";
    objects: {
        ejercicio: Prisma.$ejercicioPayload<ExtArgs>;
        periodocontable: Prisma.$periodocontablePayload<ExtArgs> | null;
        asientomovimiento: Prisma.$asientomovimientoPayload<ExtArgs>[];
        lineaasiento: Prisma.$lineaasientoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        numero: number;
        ejercicioId: string;
        periodoContableId: string | null;
        fechaContabilizacion: Date;
        concepto: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["asiento"]>;
    composites: {};
};
export type asientoGetPayload<S extends boolean | null | undefined | asientoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$asientoPayload, S>;
export type asientoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<asientoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AsientoCountAggregateInputType | true;
};
export interface asientoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['asiento'];
        meta: {
            name: 'asiento';
        };
    };
    /**
     * Find zero or one Asiento that matches the filter.
     * @param {asientoFindUniqueArgs} args - Arguments to find a Asiento
     * @example
     * // Get one Asiento
     * const asiento = await prisma.asiento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends asientoFindUniqueArgs>(args: Prisma.SelectSubset<T, asientoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__asientoClient<runtime.Types.Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Asiento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {asientoFindUniqueOrThrowArgs} args - Arguments to find a Asiento
     * @example
     * // Get one Asiento
     * const asiento = await prisma.asiento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends asientoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, asientoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__asientoClient<runtime.Types.Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Asiento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asientoFindFirstArgs} args - Arguments to find a Asiento
     * @example
     * // Get one Asiento
     * const asiento = await prisma.asiento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends asientoFindFirstArgs>(args?: Prisma.SelectSubset<T, asientoFindFirstArgs<ExtArgs>>): Prisma.Prisma__asientoClient<runtime.Types.Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Asiento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asientoFindFirstOrThrowArgs} args - Arguments to find a Asiento
     * @example
     * // Get one Asiento
     * const asiento = await prisma.asiento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends asientoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, asientoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__asientoClient<runtime.Types.Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Asientos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asientoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asientos
     * const asientos = await prisma.asiento.findMany()
     *
     * // Get first 10 Asientos
     * const asientos = await prisma.asiento.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const asientoWithIdOnly = await prisma.asiento.findMany({ select: { id: true } })
     *
     */
    findMany<T extends asientoFindManyArgs>(args?: Prisma.SelectSubset<T, asientoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Asiento.
     * @param {asientoCreateArgs} args - Arguments to create a Asiento.
     * @example
     * // Create one Asiento
     * const Asiento = await prisma.asiento.create({
     *   data: {
     *     // ... data to create a Asiento
     *   }
     * })
     *
     */
    create<T extends asientoCreateArgs>(args: Prisma.SelectSubset<T, asientoCreateArgs<ExtArgs>>): Prisma.Prisma__asientoClient<runtime.Types.Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Asientos.
     * @param {asientoCreateManyArgs} args - Arguments to create many Asientos.
     * @example
     * // Create many Asientos
     * const asiento = await prisma.asiento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends asientoCreateManyArgs>(args?: Prisma.SelectSubset<T, asientoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Asiento.
     * @param {asientoDeleteArgs} args - Arguments to delete one Asiento.
     * @example
     * // Delete one Asiento
     * const Asiento = await prisma.asiento.delete({
     *   where: {
     *     // ... filter to delete one Asiento
     *   }
     * })
     *
     */
    delete<T extends asientoDeleteArgs>(args: Prisma.SelectSubset<T, asientoDeleteArgs<ExtArgs>>): Prisma.Prisma__asientoClient<runtime.Types.Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Asiento.
     * @param {asientoUpdateArgs} args - Arguments to update one Asiento.
     * @example
     * // Update one Asiento
     * const asiento = await prisma.asiento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends asientoUpdateArgs>(args: Prisma.SelectSubset<T, asientoUpdateArgs<ExtArgs>>): Prisma.Prisma__asientoClient<runtime.Types.Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Asientos.
     * @param {asientoDeleteManyArgs} args - Arguments to filter Asientos to delete.
     * @example
     * // Delete a few Asientos
     * const { count } = await prisma.asiento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends asientoDeleteManyArgs>(args?: Prisma.SelectSubset<T, asientoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Asientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asientoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asientos
     * const asiento = await prisma.asiento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends asientoUpdateManyArgs>(args: Prisma.SelectSubset<T, asientoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Asiento.
     * @param {asientoUpsertArgs} args - Arguments to update or create a Asiento.
     * @example
     * // Update or create a Asiento
     * const asiento = await prisma.asiento.upsert({
     *   create: {
     *     // ... data to create a Asiento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asiento we want to update
     *   }
     * })
     */
    upsert<T extends asientoUpsertArgs>(args: Prisma.SelectSubset<T, asientoUpsertArgs<ExtArgs>>): Prisma.Prisma__asientoClient<runtime.Types.Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Asientos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asientoCountArgs} args - Arguments to filter Asientos to count.
     * @example
     * // Count the number of Asientos
     * const count = await prisma.asiento.count({
     *   where: {
     *     // ... the filter for the Asientos we want to count
     *   }
     * })
    **/
    count<T extends asientoCountArgs>(args?: Prisma.Subset<T, asientoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AsientoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Asiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsientoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AsientoAggregateArgs>(args: Prisma.Subset<T, AsientoAggregateArgs>): Prisma.PrismaPromise<GetAsientoAggregateType<T>>;
    /**
     * Group by Asiento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asientoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends asientoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: asientoGroupByArgs['orderBy'];
    } : {
        orderBy?: asientoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, asientoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsientoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the asiento model
     */
    readonly fields: asientoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for asiento.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__asientoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ejercicio<T extends Prisma.ejercicioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ejercicioDefaultArgs<ExtArgs>>): Prisma.Prisma__ejercicioClient<runtime.Types.Result.GetResult<Prisma.$ejercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    periodocontable<T extends Prisma.asiento$periodocontableArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.asiento$periodocontableArgs<ExtArgs>>): Prisma.Prisma__periodocontableClient<runtime.Types.Result.GetResult<Prisma.$periodocontablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    asientomovimiento<T extends Prisma.asiento$asientomovimientoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.asiento$asientomovimientoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$asientomovimientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    lineaasiento<T extends Prisma.asiento$lineaasientoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.asiento$lineaasientoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lineaasientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the asiento model
 */
export interface asientoFieldRefs {
    readonly id: Prisma.FieldRef<"asiento", 'String'>;
    readonly numero: Prisma.FieldRef<"asiento", 'Int'>;
    readonly ejercicioId: Prisma.FieldRef<"asiento", 'String'>;
    readonly periodoContableId: Prisma.FieldRef<"asiento", 'String'>;
    readonly fechaContabilizacion: Prisma.FieldRef<"asiento", 'DateTime'>;
    readonly concepto: Prisma.FieldRef<"asiento", 'String'>;
    readonly createdAt: Prisma.FieldRef<"asiento", 'DateTime'>;
}
/**
 * asiento findUnique
 */
export type asientoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: Prisma.asientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the asiento
     */
    omit?: Prisma.asientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.asientoInclude<ExtArgs> | null;
    /**
     * Filter, which asiento to fetch.
     */
    where: Prisma.asientoWhereUniqueInput;
};
/**
 * asiento findUniqueOrThrow
 */
export type asientoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: Prisma.asientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the asiento
     */
    omit?: Prisma.asientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.asientoInclude<ExtArgs> | null;
    /**
     * Filter, which asiento to fetch.
     */
    where: Prisma.asientoWhereUniqueInput;
};
/**
 * asiento findFirst
 */
export type asientoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: Prisma.asientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the asiento
     */
    omit?: Prisma.asientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.asientoInclude<ExtArgs> | null;
    /**
     * Filter, which asiento to fetch.
     */
    where?: Prisma.asientoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of asientos to fetch.
     */
    orderBy?: Prisma.asientoOrderByWithRelationInput | Prisma.asientoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for asientos.
     */
    cursor?: Prisma.asientoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` asientos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` asientos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of asientos.
     */
    distinct?: Prisma.AsientoScalarFieldEnum | Prisma.AsientoScalarFieldEnum[];
};
/**
 * asiento findFirstOrThrow
 */
export type asientoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: Prisma.asientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the asiento
     */
    omit?: Prisma.asientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.asientoInclude<ExtArgs> | null;
    /**
     * Filter, which asiento to fetch.
     */
    where?: Prisma.asientoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of asientos to fetch.
     */
    orderBy?: Prisma.asientoOrderByWithRelationInput | Prisma.asientoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for asientos.
     */
    cursor?: Prisma.asientoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` asientos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` asientos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of asientos.
     */
    distinct?: Prisma.AsientoScalarFieldEnum | Prisma.AsientoScalarFieldEnum[];
};
/**
 * asiento findMany
 */
export type asientoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: Prisma.asientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the asiento
     */
    omit?: Prisma.asientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.asientoInclude<ExtArgs> | null;
    /**
     * Filter, which asientos to fetch.
     */
    where?: Prisma.asientoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of asientos to fetch.
     */
    orderBy?: Prisma.asientoOrderByWithRelationInput | Prisma.asientoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing asientos.
     */
    cursor?: Prisma.asientoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` asientos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` asientos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of asientos.
     */
    distinct?: Prisma.AsientoScalarFieldEnum | Prisma.AsientoScalarFieldEnum[];
};
/**
 * asiento create
 */
export type asientoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: Prisma.asientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the asiento
     */
    omit?: Prisma.asientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.asientoInclude<ExtArgs> | null;
    /**
     * The data needed to create a asiento.
     */
    data: Prisma.XOR<Prisma.asientoCreateInput, Prisma.asientoUncheckedCreateInput>;
};
/**
 * asiento createMany
 */
export type asientoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many asientos.
     */
    data: Prisma.asientoCreateManyInput | Prisma.asientoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * asiento update
 */
export type asientoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: Prisma.asientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the asiento
     */
    omit?: Prisma.asientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.asientoInclude<ExtArgs> | null;
    /**
     * The data needed to update a asiento.
     */
    data: Prisma.XOR<Prisma.asientoUpdateInput, Prisma.asientoUncheckedUpdateInput>;
    /**
     * Choose, which asiento to update.
     */
    where: Prisma.asientoWhereUniqueInput;
};
/**
 * asiento updateMany
 */
export type asientoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update asientos.
     */
    data: Prisma.XOR<Prisma.asientoUpdateManyMutationInput, Prisma.asientoUncheckedUpdateManyInput>;
    /**
     * Filter which asientos to update
     */
    where?: Prisma.asientoWhereInput;
    /**
     * Limit how many asientos to update.
     */
    limit?: number;
};
/**
 * asiento upsert
 */
export type asientoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: Prisma.asientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the asiento
     */
    omit?: Prisma.asientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.asientoInclude<ExtArgs> | null;
    /**
     * The filter to search for the asiento to update in case it exists.
     */
    where: Prisma.asientoWhereUniqueInput;
    /**
     * In case the asiento found by the `where` argument doesn't exist, create a new asiento with this data.
     */
    create: Prisma.XOR<Prisma.asientoCreateInput, Prisma.asientoUncheckedCreateInput>;
    /**
     * In case the asiento was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.asientoUpdateInput, Prisma.asientoUncheckedUpdateInput>;
};
/**
 * asiento delete
 */
export type asientoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: Prisma.asientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the asiento
     */
    omit?: Prisma.asientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.asientoInclude<ExtArgs> | null;
    /**
     * Filter which asiento to delete.
     */
    where: Prisma.asientoWhereUniqueInput;
};
/**
 * asiento deleteMany
 */
export type asientoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which asientos to delete
     */
    where?: Prisma.asientoWhereInput;
    /**
     * Limit how many asientos to delete.
     */
    limit?: number;
};
/**
 * asiento.periodocontable
 */
export type asiento$periodocontableArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the periodocontable
     */
    select?: Prisma.periodocontableSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the periodocontable
     */
    omit?: Prisma.periodocontableOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.periodocontableInclude<ExtArgs> | null;
    where?: Prisma.periodocontableWhereInput;
};
/**
 * asiento.asientomovimiento
 */
export type asiento$asientomovimientoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asientomovimiento
     */
    select?: Prisma.asientomovimientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the asientomovimiento
     */
    omit?: Prisma.asientomovimientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.asientomovimientoInclude<ExtArgs> | null;
    where?: Prisma.asientomovimientoWhereInput;
    orderBy?: Prisma.asientomovimientoOrderByWithRelationInput | Prisma.asientomovimientoOrderByWithRelationInput[];
    cursor?: Prisma.asientomovimientoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AsientomovimientoScalarFieldEnum | Prisma.AsientomovimientoScalarFieldEnum[];
};
/**
 * asiento.lineaasiento
 */
export type asiento$lineaasientoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineaasiento
     */
    select?: Prisma.lineaasientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineaasiento
     */
    omit?: Prisma.lineaasientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineaasientoInclude<ExtArgs> | null;
    where?: Prisma.lineaasientoWhereInput;
    orderBy?: Prisma.lineaasientoOrderByWithRelationInput | Prisma.lineaasientoOrderByWithRelationInput[];
    cursor?: Prisma.lineaasientoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LineaasientoScalarFieldEnum | Prisma.LineaasientoScalarFieldEnum[];
};
/**
 * asiento without action
 */
export type asientoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the asiento
     */
    select?: Prisma.asientoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the asiento
     */
    omit?: Prisma.asientoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.asientoInclude<ExtArgs> | null;
};
//# sourceMappingURL=asiento.d.ts.map