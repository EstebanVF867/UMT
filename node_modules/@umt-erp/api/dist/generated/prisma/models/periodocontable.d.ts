import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model periodocontable
 *
 */
export type periodocontableModel = runtime.Types.Result.DefaultSelection<Prisma.$periodocontablePayload>;
export type AggregatePeriodocontable = {
    _count: PeriodocontableCountAggregateOutputType | null;
    _min: PeriodocontableMinAggregateOutputType | null;
    _max: PeriodocontableMaxAggregateOutputType | null;
};
export type PeriodocontableMinAggregateOutputType = {
    id: string | null;
    ejercicioId: string | null;
    nombre: string | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    estado: $Enums.periodocontable_estado | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PeriodocontableMaxAggregateOutputType = {
    id: string | null;
    ejercicioId: string | null;
    nombre: string | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    estado: $Enums.periodocontable_estado | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PeriodocontableCountAggregateOutputType = {
    id: number;
    ejercicioId: number;
    nombre: number;
    fechaInicio: number;
    fechaFin: number;
    estado: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PeriodocontableMinAggregateInputType = {
    id?: true;
    ejercicioId?: true;
    nombre?: true;
    fechaInicio?: true;
    fechaFin?: true;
    estado?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PeriodocontableMaxAggregateInputType = {
    id?: true;
    ejercicioId?: true;
    nombre?: true;
    fechaInicio?: true;
    fechaFin?: true;
    estado?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PeriodocontableCountAggregateInputType = {
    id?: true;
    ejercicioId?: true;
    nombre?: true;
    fechaInicio?: true;
    fechaFin?: true;
    estado?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PeriodocontableAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which periodocontable to aggregate.
     */
    where?: Prisma.periodocontableWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of periodocontables to fetch.
     */
    orderBy?: Prisma.periodocontableOrderByWithRelationInput | Prisma.periodocontableOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.periodocontableWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` periodocontables from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` periodocontables.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned periodocontables
    **/
    _count?: true | PeriodocontableCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PeriodocontableMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PeriodocontableMaxAggregateInputType;
};
export type GetPeriodocontableAggregateType<T extends PeriodocontableAggregateArgs> = {
    [P in keyof T & keyof AggregatePeriodocontable]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePeriodocontable[P]> : Prisma.GetScalarType<T[P], AggregatePeriodocontable[P]>;
};
export type periodocontableGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.periodocontableWhereInput;
    orderBy?: Prisma.periodocontableOrderByWithAggregationInput | Prisma.periodocontableOrderByWithAggregationInput[];
    by: Prisma.PeriodocontableScalarFieldEnum[] | Prisma.PeriodocontableScalarFieldEnum;
    having?: Prisma.periodocontableScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PeriodocontableCountAggregateInputType | true;
    _min?: PeriodocontableMinAggregateInputType;
    _max?: PeriodocontableMaxAggregateInputType;
};
export type PeriodocontableGroupByOutputType = {
    id: string;
    ejercicioId: string;
    nombre: string;
    fechaInicio: Date;
    fechaFin: Date;
    estado: $Enums.periodocontable_estado;
    createdAt: Date;
    updatedAt: Date;
    _count: PeriodocontableCountAggregateOutputType | null;
    _min: PeriodocontableMinAggregateOutputType | null;
    _max: PeriodocontableMaxAggregateOutputType | null;
};
export type GetPeriodocontableGroupByPayload<T extends periodocontableGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PeriodocontableGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PeriodocontableGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PeriodocontableGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PeriodocontableGroupByOutputType[P]>;
}>>;
export type periodocontableWhereInput = {
    AND?: Prisma.periodocontableWhereInput | Prisma.periodocontableWhereInput[];
    OR?: Prisma.periodocontableWhereInput[];
    NOT?: Prisma.periodocontableWhereInput | Prisma.periodocontableWhereInput[];
    id?: Prisma.StringFilter<"periodocontable"> | string;
    ejercicioId?: Prisma.StringFilter<"periodocontable"> | string;
    nombre?: Prisma.StringFilter<"periodocontable"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"periodocontable"> | Date | string;
    fechaFin?: Prisma.DateTimeFilter<"periodocontable"> | Date | string;
    estado?: Prisma.Enumperiodocontable_estadoFilter<"periodocontable"> | $Enums.periodocontable_estado;
    createdAt?: Prisma.DateTimeFilter<"periodocontable"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"periodocontable"> | Date | string;
    asiento?: Prisma.AsientoListRelationFilter;
    ejercicio?: Prisma.XOR<Prisma.EjercicioScalarRelationFilter, Prisma.ejercicioWhereInput>;
};
export type periodocontableOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    asiento?: Prisma.asientoOrderByRelationAggregateInput;
    ejercicio?: Prisma.ejercicioOrderByWithRelationInput;
    _relevance?: Prisma.periodocontableOrderByRelevanceInput;
};
export type periodocontableWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.periodocontableWhereInput | Prisma.periodocontableWhereInput[];
    OR?: Prisma.periodocontableWhereInput[];
    NOT?: Prisma.periodocontableWhereInput | Prisma.periodocontableWhereInput[];
    ejercicioId?: Prisma.StringFilter<"periodocontable"> | string;
    nombre?: Prisma.StringFilter<"periodocontable"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"periodocontable"> | Date | string;
    fechaFin?: Prisma.DateTimeFilter<"periodocontable"> | Date | string;
    estado?: Prisma.Enumperiodocontable_estadoFilter<"periodocontable"> | $Enums.periodocontable_estado;
    createdAt?: Prisma.DateTimeFilter<"periodocontable"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"periodocontable"> | Date | string;
    asiento?: Prisma.AsientoListRelationFilter;
    ejercicio?: Prisma.XOR<Prisma.EjercicioScalarRelationFilter, Prisma.ejercicioWhereInput>;
}, "id">;
export type periodocontableOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.periodocontableCountOrderByAggregateInput;
    _max?: Prisma.periodocontableMaxOrderByAggregateInput;
    _min?: Prisma.periodocontableMinOrderByAggregateInput;
};
export type periodocontableScalarWhereWithAggregatesInput = {
    AND?: Prisma.periodocontableScalarWhereWithAggregatesInput | Prisma.periodocontableScalarWhereWithAggregatesInput[];
    OR?: Prisma.periodocontableScalarWhereWithAggregatesInput[];
    NOT?: Prisma.periodocontableScalarWhereWithAggregatesInput | Prisma.periodocontableScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"periodocontable"> | string;
    ejercicioId?: Prisma.StringWithAggregatesFilter<"periodocontable"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"periodocontable"> | string;
    fechaInicio?: Prisma.DateTimeWithAggregatesFilter<"periodocontable"> | Date | string;
    fechaFin?: Prisma.DateTimeWithAggregatesFilter<"periodocontable"> | Date | string;
    estado?: Prisma.Enumperiodocontable_estadoWithAggregatesFilter<"periodocontable"> | $Enums.periodocontable_estado;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"periodocontable"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"periodocontable"> | Date | string;
};
export type periodocontableCreateInput = {
    id: string;
    nombre: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: $Enums.periodocontable_estado;
    createdAt?: Date | string;
    updatedAt: Date | string;
    asiento?: Prisma.asientoCreateNestedManyWithoutPeriodocontableInput;
    ejercicio: Prisma.ejercicioCreateNestedOneWithoutPeriodocontableInput;
};
export type periodocontableUncheckedCreateInput = {
    id: string;
    ejercicioId: string;
    nombre: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: $Enums.periodocontable_estado;
    createdAt?: Date | string;
    updatedAt: Date | string;
    asiento?: Prisma.asientoUncheckedCreateNestedManyWithoutPeriodocontableInput;
};
export type periodocontableUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumperiodocontable_estadoFieldUpdateOperationsInput | $Enums.periodocontable_estado;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asiento?: Prisma.asientoUpdateManyWithoutPeriodocontableNestedInput;
    ejercicio?: Prisma.ejercicioUpdateOneRequiredWithoutPeriodocontableNestedInput;
};
export type periodocontableUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumperiodocontable_estadoFieldUpdateOperationsInput | $Enums.periodocontable_estado;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asiento?: Prisma.asientoUncheckedUpdateManyWithoutPeriodocontableNestedInput;
};
export type periodocontableCreateManyInput = {
    id: string;
    ejercicioId: string;
    nombre: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: $Enums.periodocontable_estado;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type periodocontableUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumperiodocontable_estadoFieldUpdateOperationsInput | $Enums.periodocontable_estado;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type periodocontableUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumperiodocontable_estadoFieldUpdateOperationsInput | $Enums.periodocontable_estado;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PeriodocontableNullableScalarRelationFilter = {
    is?: Prisma.periodocontableWhereInput | null;
    isNot?: Prisma.periodocontableWhereInput | null;
};
export type PeriodocontableListRelationFilter = {
    every?: Prisma.periodocontableWhereInput;
    some?: Prisma.periodocontableWhereInput;
    none?: Prisma.periodocontableWhereInput;
};
export type periodocontableOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type periodocontableOrderByRelevanceInput = {
    fields: Prisma.periodocontableOrderByRelevanceFieldEnum | Prisma.periodocontableOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type periodocontableCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type periodocontableMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type periodocontableMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type periodocontableCreateNestedOneWithoutAsientoInput = {
    create?: Prisma.XOR<Prisma.periodocontableCreateWithoutAsientoInput, Prisma.periodocontableUncheckedCreateWithoutAsientoInput>;
    connectOrCreate?: Prisma.periodocontableCreateOrConnectWithoutAsientoInput;
    connect?: Prisma.periodocontableWhereUniqueInput;
};
export type periodocontableUpdateOneWithoutAsientoNestedInput = {
    create?: Prisma.XOR<Prisma.periodocontableCreateWithoutAsientoInput, Prisma.periodocontableUncheckedCreateWithoutAsientoInput>;
    connectOrCreate?: Prisma.periodocontableCreateOrConnectWithoutAsientoInput;
    upsert?: Prisma.periodocontableUpsertWithoutAsientoInput;
    disconnect?: Prisma.periodocontableWhereInput | boolean;
    delete?: Prisma.periodocontableWhereInput | boolean;
    connect?: Prisma.periodocontableWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.periodocontableUpdateToOneWithWhereWithoutAsientoInput, Prisma.periodocontableUpdateWithoutAsientoInput>, Prisma.periodocontableUncheckedUpdateWithoutAsientoInput>;
};
export type periodocontableCreateNestedManyWithoutEjercicioInput = {
    create?: Prisma.XOR<Prisma.periodocontableCreateWithoutEjercicioInput, Prisma.periodocontableUncheckedCreateWithoutEjercicioInput> | Prisma.periodocontableCreateWithoutEjercicioInput[] | Prisma.periodocontableUncheckedCreateWithoutEjercicioInput[];
    connectOrCreate?: Prisma.periodocontableCreateOrConnectWithoutEjercicioInput | Prisma.periodocontableCreateOrConnectWithoutEjercicioInput[];
    createMany?: Prisma.periodocontableCreateManyEjercicioInputEnvelope;
    connect?: Prisma.periodocontableWhereUniqueInput | Prisma.periodocontableWhereUniqueInput[];
};
export type periodocontableUncheckedCreateNestedManyWithoutEjercicioInput = {
    create?: Prisma.XOR<Prisma.periodocontableCreateWithoutEjercicioInput, Prisma.periodocontableUncheckedCreateWithoutEjercicioInput> | Prisma.periodocontableCreateWithoutEjercicioInput[] | Prisma.periodocontableUncheckedCreateWithoutEjercicioInput[];
    connectOrCreate?: Prisma.periodocontableCreateOrConnectWithoutEjercicioInput | Prisma.periodocontableCreateOrConnectWithoutEjercicioInput[];
    createMany?: Prisma.periodocontableCreateManyEjercicioInputEnvelope;
    connect?: Prisma.periodocontableWhereUniqueInput | Prisma.periodocontableWhereUniqueInput[];
};
export type periodocontableUpdateManyWithoutEjercicioNestedInput = {
    create?: Prisma.XOR<Prisma.periodocontableCreateWithoutEjercicioInput, Prisma.periodocontableUncheckedCreateWithoutEjercicioInput> | Prisma.periodocontableCreateWithoutEjercicioInput[] | Prisma.periodocontableUncheckedCreateWithoutEjercicioInput[];
    connectOrCreate?: Prisma.periodocontableCreateOrConnectWithoutEjercicioInput | Prisma.periodocontableCreateOrConnectWithoutEjercicioInput[];
    upsert?: Prisma.periodocontableUpsertWithWhereUniqueWithoutEjercicioInput | Prisma.periodocontableUpsertWithWhereUniqueWithoutEjercicioInput[];
    createMany?: Prisma.periodocontableCreateManyEjercicioInputEnvelope;
    set?: Prisma.periodocontableWhereUniqueInput | Prisma.periodocontableWhereUniqueInput[];
    disconnect?: Prisma.periodocontableWhereUniqueInput | Prisma.periodocontableWhereUniqueInput[];
    delete?: Prisma.periodocontableWhereUniqueInput | Prisma.periodocontableWhereUniqueInput[];
    connect?: Prisma.periodocontableWhereUniqueInput | Prisma.periodocontableWhereUniqueInput[];
    update?: Prisma.periodocontableUpdateWithWhereUniqueWithoutEjercicioInput | Prisma.periodocontableUpdateWithWhereUniqueWithoutEjercicioInput[];
    updateMany?: Prisma.periodocontableUpdateManyWithWhereWithoutEjercicioInput | Prisma.periodocontableUpdateManyWithWhereWithoutEjercicioInput[];
    deleteMany?: Prisma.periodocontableScalarWhereInput | Prisma.periodocontableScalarWhereInput[];
};
export type periodocontableUncheckedUpdateManyWithoutEjercicioNestedInput = {
    create?: Prisma.XOR<Prisma.periodocontableCreateWithoutEjercicioInput, Prisma.periodocontableUncheckedCreateWithoutEjercicioInput> | Prisma.periodocontableCreateWithoutEjercicioInput[] | Prisma.periodocontableUncheckedCreateWithoutEjercicioInput[];
    connectOrCreate?: Prisma.periodocontableCreateOrConnectWithoutEjercicioInput | Prisma.periodocontableCreateOrConnectWithoutEjercicioInput[];
    upsert?: Prisma.periodocontableUpsertWithWhereUniqueWithoutEjercicioInput | Prisma.periodocontableUpsertWithWhereUniqueWithoutEjercicioInput[];
    createMany?: Prisma.periodocontableCreateManyEjercicioInputEnvelope;
    set?: Prisma.periodocontableWhereUniqueInput | Prisma.periodocontableWhereUniqueInput[];
    disconnect?: Prisma.periodocontableWhereUniqueInput | Prisma.periodocontableWhereUniqueInput[];
    delete?: Prisma.periodocontableWhereUniqueInput | Prisma.periodocontableWhereUniqueInput[];
    connect?: Prisma.periodocontableWhereUniqueInput | Prisma.periodocontableWhereUniqueInput[];
    update?: Prisma.periodocontableUpdateWithWhereUniqueWithoutEjercicioInput | Prisma.periodocontableUpdateWithWhereUniqueWithoutEjercicioInput[];
    updateMany?: Prisma.periodocontableUpdateManyWithWhereWithoutEjercicioInput | Prisma.periodocontableUpdateManyWithWhereWithoutEjercicioInput[];
    deleteMany?: Prisma.periodocontableScalarWhereInput | Prisma.periodocontableScalarWhereInput[];
};
export type Enumperiodocontable_estadoFieldUpdateOperationsInput = {
    set?: $Enums.periodocontable_estado;
};
export type periodocontableCreateWithoutAsientoInput = {
    id: string;
    nombre: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: $Enums.periodocontable_estado;
    createdAt?: Date | string;
    updatedAt: Date | string;
    ejercicio: Prisma.ejercicioCreateNestedOneWithoutPeriodocontableInput;
};
export type periodocontableUncheckedCreateWithoutAsientoInput = {
    id: string;
    ejercicioId: string;
    nombre: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: $Enums.periodocontable_estado;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type periodocontableCreateOrConnectWithoutAsientoInput = {
    where: Prisma.periodocontableWhereUniqueInput;
    create: Prisma.XOR<Prisma.periodocontableCreateWithoutAsientoInput, Prisma.periodocontableUncheckedCreateWithoutAsientoInput>;
};
export type periodocontableUpsertWithoutAsientoInput = {
    update: Prisma.XOR<Prisma.periodocontableUpdateWithoutAsientoInput, Prisma.periodocontableUncheckedUpdateWithoutAsientoInput>;
    create: Prisma.XOR<Prisma.periodocontableCreateWithoutAsientoInput, Prisma.periodocontableUncheckedCreateWithoutAsientoInput>;
    where?: Prisma.periodocontableWhereInput;
};
export type periodocontableUpdateToOneWithWhereWithoutAsientoInput = {
    where?: Prisma.periodocontableWhereInput;
    data: Prisma.XOR<Prisma.periodocontableUpdateWithoutAsientoInput, Prisma.periodocontableUncheckedUpdateWithoutAsientoInput>;
};
export type periodocontableUpdateWithoutAsientoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumperiodocontable_estadoFieldUpdateOperationsInput | $Enums.periodocontable_estado;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ejercicio?: Prisma.ejercicioUpdateOneRequiredWithoutPeriodocontableNestedInput;
};
export type periodocontableUncheckedUpdateWithoutAsientoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumperiodocontable_estadoFieldUpdateOperationsInput | $Enums.periodocontable_estado;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type periodocontableCreateWithoutEjercicioInput = {
    id: string;
    nombre: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: $Enums.periodocontable_estado;
    createdAt?: Date | string;
    updatedAt: Date | string;
    asiento?: Prisma.asientoCreateNestedManyWithoutPeriodocontableInput;
};
export type periodocontableUncheckedCreateWithoutEjercicioInput = {
    id: string;
    nombre: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: $Enums.periodocontable_estado;
    createdAt?: Date | string;
    updatedAt: Date | string;
    asiento?: Prisma.asientoUncheckedCreateNestedManyWithoutPeriodocontableInput;
};
export type periodocontableCreateOrConnectWithoutEjercicioInput = {
    where: Prisma.periodocontableWhereUniqueInput;
    create: Prisma.XOR<Prisma.periodocontableCreateWithoutEjercicioInput, Prisma.periodocontableUncheckedCreateWithoutEjercicioInput>;
};
export type periodocontableCreateManyEjercicioInputEnvelope = {
    data: Prisma.periodocontableCreateManyEjercicioInput | Prisma.periodocontableCreateManyEjercicioInput[];
    skipDuplicates?: boolean;
};
export type periodocontableUpsertWithWhereUniqueWithoutEjercicioInput = {
    where: Prisma.periodocontableWhereUniqueInput;
    update: Prisma.XOR<Prisma.periodocontableUpdateWithoutEjercicioInput, Prisma.periodocontableUncheckedUpdateWithoutEjercicioInput>;
    create: Prisma.XOR<Prisma.periodocontableCreateWithoutEjercicioInput, Prisma.periodocontableUncheckedCreateWithoutEjercicioInput>;
};
export type periodocontableUpdateWithWhereUniqueWithoutEjercicioInput = {
    where: Prisma.periodocontableWhereUniqueInput;
    data: Prisma.XOR<Prisma.periodocontableUpdateWithoutEjercicioInput, Prisma.periodocontableUncheckedUpdateWithoutEjercicioInput>;
};
export type periodocontableUpdateManyWithWhereWithoutEjercicioInput = {
    where: Prisma.periodocontableScalarWhereInput;
    data: Prisma.XOR<Prisma.periodocontableUpdateManyMutationInput, Prisma.periodocontableUncheckedUpdateManyWithoutEjercicioInput>;
};
export type periodocontableScalarWhereInput = {
    AND?: Prisma.periodocontableScalarWhereInput | Prisma.periodocontableScalarWhereInput[];
    OR?: Prisma.periodocontableScalarWhereInput[];
    NOT?: Prisma.periodocontableScalarWhereInput | Prisma.periodocontableScalarWhereInput[];
    id?: Prisma.StringFilter<"periodocontable"> | string;
    ejercicioId?: Prisma.StringFilter<"periodocontable"> | string;
    nombre?: Prisma.StringFilter<"periodocontable"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"periodocontable"> | Date | string;
    fechaFin?: Prisma.DateTimeFilter<"periodocontable"> | Date | string;
    estado?: Prisma.Enumperiodocontable_estadoFilter<"periodocontable"> | $Enums.periodocontable_estado;
    createdAt?: Prisma.DateTimeFilter<"periodocontable"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"periodocontable"> | Date | string;
};
export type periodocontableCreateManyEjercicioInput = {
    id: string;
    nombre: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: $Enums.periodocontable_estado;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type periodocontableUpdateWithoutEjercicioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumperiodocontable_estadoFieldUpdateOperationsInput | $Enums.periodocontable_estado;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asiento?: Prisma.asientoUpdateManyWithoutPeriodocontableNestedInput;
};
export type periodocontableUncheckedUpdateWithoutEjercicioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumperiodocontable_estadoFieldUpdateOperationsInput | $Enums.periodocontable_estado;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asiento?: Prisma.asientoUncheckedUpdateManyWithoutPeriodocontableNestedInput;
};
export type periodocontableUncheckedUpdateManyWithoutEjercicioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumperiodocontable_estadoFieldUpdateOperationsInput | $Enums.periodocontable_estado;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type PeriodocontableCountOutputType
 */
export type PeriodocontableCountOutputType = {
    asiento: number;
};
export type PeriodocontableCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asiento?: boolean | PeriodocontableCountOutputTypeCountAsientoArgs;
};
/**
 * PeriodocontableCountOutputType without action
 */
export type PeriodocontableCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodocontableCountOutputType
     */
    select?: Prisma.PeriodocontableCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PeriodocontableCountOutputType without action
 */
export type PeriodocontableCountOutputTypeCountAsientoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.asientoWhereInput;
};
export type periodocontableSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ejercicioId?: boolean;
    nombre?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    estado?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    asiento?: boolean | Prisma.periodocontable$asientoArgs<ExtArgs>;
    ejercicio?: boolean | Prisma.ejercicioDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.PeriodocontableCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["periodocontable"]>;
export type periodocontableSelectScalar = {
    id?: boolean;
    ejercicioId?: boolean;
    nombre?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    estado?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type periodocontableOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ejercicioId" | "nombre" | "fechaInicio" | "fechaFin" | "estado" | "createdAt" | "updatedAt", ExtArgs["result"]["periodocontable"]>;
export type periodocontableInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    asiento?: boolean | Prisma.periodocontable$asientoArgs<ExtArgs>;
    ejercicio?: boolean | Prisma.ejercicioDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.PeriodocontableCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $periodocontablePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "periodocontable";
    objects: {
        asiento: Prisma.$asientoPayload<ExtArgs>[];
        ejercicio: Prisma.$ejercicioPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ejercicioId: string;
        nombre: string;
        fechaInicio: Date;
        fechaFin: Date;
        estado: $Enums.periodocontable_estado;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["periodocontable"]>;
    composites: {};
};
export type periodocontableGetPayload<S extends boolean | null | undefined | periodocontableDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$periodocontablePayload, S>;
export type periodocontableCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<periodocontableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PeriodocontableCountAggregateInputType | true;
};
export interface periodocontableDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['periodocontable'];
        meta: {
            name: 'periodocontable';
        };
    };
    /**
     * Find zero or one Periodocontable that matches the filter.
     * @param {periodocontableFindUniqueArgs} args - Arguments to find a Periodocontable
     * @example
     * // Get one Periodocontable
     * const periodocontable = await prisma.periodocontable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends periodocontableFindUniqueArgs>(args: Prisma.SelectSubset<T, periodocontableFindUniqueArgs<ExtArgs>>): Prisma.Prisma__periodocontableClient<runtime.Types.Result.GetResult<Prisma.$periodocontablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Periodocontable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {periodocontableFindUniqueOrThrowArgs} args - Arguments to find a Periodocontable
     * @example
     * // Get one Periodocontable
     * const periodocontable = await prisma.periodocontable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends periodocontableFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, periodocontableFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__periodocontableClient<runtime.Types.Result.GetResult<Prisma.$periodocontablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Periodocontable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {periodocontableFindFirstArgs} args - Arguments to find a Periodocontable
     * @example
     * // Get one Periodocontable
     * const periodocontable = await prisma.periodocontable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends periodocontableFindFirstArgs>(args?: Prisma.SelectSubset<T, periodocontableFindFirstArgs<ExtArgs>>): Prisma.Prisma__periodocontableClient<runtime.Types.Result.GetResult<Prisma.$periodocontablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Periodocontable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {periodocontableFindFirstOrThrowArgs} args - Arguments to find a Periodocontable
     * @example
     * // Get one Periodocontable
     * const periodocontable = await prisma.periodocontable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends periodocontableFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, periodocontableFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__periodocontableClient<runtime.Types.Result.GetResult<Prisma.$periodocontablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Periodocontables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {periodocontableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Periodocontables
     * const periodocontables = await prisma.periodocontable.findMany()
     *
     * // Get first 10 Periodocontables
     * const periodocontables = await prisma.periodocontable.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const periodocontableWithIdOnly = await prisma.periodocontable.findMany({ select: { id: true } })
     *
     */
    findMany<T extends periodocontableFindManyArgs>(args?: Prisma.SelectSubset<T, periodocontableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$periodocontablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Periodocontable.
     * @param {periodocontableCreateArgs} args - Arguments to create a Periodocontable.
     * @example
     * // Create one Periodocontable
     * const Periodocontable = await prisma.periodocontable.create({
     *   data: {
     *     // ... data to create a Periodocontable
     *   }
     * })
     *
     */
    create<T extends periodocontableCreateArgs>(args: Prisma.SelectSubset<T, periodocontableCreateArgs<ExtArgs>>): Prisma.Prisma__periodocontableClient<runtime.Types.Result.GetResult<Prisma.$periodocontablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Periodocontables.
     * @param {periodocontableCreateManyArgs} args - Arguments to create many Periodocontables.
     * @example
     * // Create many Periodocontables
     * const periodocontable = await prisma.periodocontable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends periodocontableCreateManyArgs>(args?: Prisma.SelectSubset<T, periodocontableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Periodocontable.
     * @param {periodocontableDeleteArgs} args - Arguments to delete one Periodocontable.
     * @example
     * // Delete one Periodocontable
     * const Periodocontable = await prisma.periodocontable.delete({
     *   where: {
     *     // ... filter to delete one Periodocontable
     *   }
     * })
     *
     */
    delete<T extends periodocontableDeleteArgs>(args: Prisma.SelectSubset<T, periodocontableDeleteArgs<ExtArgs>>): Prisma.Prisma__periodocontableClient<runtime.Types.Result.GetResult<Prisma.$periodocontablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Periodocontable.
     * @param {periodocontableUpdateArgs} args - Arguments to update one Periodocontable.
     * @example
     * // Update one Periodocontable
     * const periodocontable = await prisma.periodocontable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends periodocontableUpdateArgs>(args: Prisma.SelectSubset<T, periodocontableUpdateArgs<ExtArgs>>): Prisma.Prisma__periodocontableClient<runtime.Types.Result.GetResult<Prisma.$periodocontablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Periodocontables.
     * @param {periodocontableDeleteManyArgs} args - Arguments to filter Periodocontables to delete.
     * @example
     * // Delete a few Periodocontables
     * const { count } = await prisma.periodocontable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends periodocontableDeleteManyArgs>(args?: Prisma.SelectSubset<T, periodocontableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Periodocontables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {periodocontableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Periodocontables
     * const periodocontable = await prisma.periodocontable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends periodocontableUpdateManyArgs>(args: Prisma.SelectSubset<T, periodocontableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Periodocontable.
     * @param {periodocontableUpsertArgs} args - Arguments to update or create a Periodocontable.
     * @example
     * // Update or create a Periodocontable
     * const periodocontable = await prisma.periodocontable.upsert({
     *   create: {
     *     // ... data to create a Periodocontable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Periodocontable we want to update
     *   }
     * })
     */
    upsert<T extends periodocontableUpsertArgs>(args: Prisma.SelectSubset<T, periodocontableUpsertArgs<ExtArgs>>): Prisma.Prisma__periodocontableClient<runtime.Types.Result.GetResult<Prisma.$periodocontablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Periodocontables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {periodocontableCountArgs} args - Arguments to filter Periodocontables to count.
     * @example
     * // Count the number of Periodocontables
     * const count = await prisma.periodocontable.count({
     *   where: {
     *     // ... the filter for the Periodocontables we want to count
     *   }
     * })
    **/
    count<T extends periodocontableCountArgs>(args?: Prisma.Subset<T, periodocontableCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PeriodocontableCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Periodocontable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodocontableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PeriodocontableAggregateArgs>(args: Prisma.Subset<T, PeriodocontableAggregateArgs>): Prisma.PrismaPromise<GetPeriodocontableAggregateType<T>>;
    /**
     * Group by Periodocontable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {periodocontableGroupByArgs} args - Group by arguments.
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
    groupBy<T extends periodocontableGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: periodocontableGroupByArgs['orderBy'];
    } : {
        orderBy?: periodocontableGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, periodocontableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeriodocontableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the periodocontable model
     */
    readonly fields: periodocontableFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for periodocontable.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__periodocontableClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    asiento<T extends Prisma.periodocontable$asientoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.periodocontable$asientoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the periodocontable model
 */
export interface periodocontableFieldRefs {
    readonly id: Prisma.FieldRef<"periodocontable", 'String'>;
    readonly ejercicioId: Prisma.FieldRef<"periodocontable", 'String'>;
    readonly nombre: Prisma.FieldRef<"periodocontable", 'String'>;
    readonly fechaInicio: Prisma.FieldRef<"periodocontable", 'DateTime'>;
    readonly fechaFin: Prisma.FieldRef<"periodocontable", 'DateTime'>;
    readonly estado: Prisma.FieldRef<"periodocontable", 'periodocontable_estado'>;
    readonly createdAt: Prisma.FieldRef<"periodocontable", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"periodocontable", 'DateTime'>;
}
/**
 * periodocontable findUnique
 */
export type periodocontableFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which periodocontable to fetch.
     */
    where: Prisma.periodocontableWhereUniqueInput;
};
/**
 * periodocontable findUniqueOrThrow
 */
export type periodocontableFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which periodocontable to fetch.
     */
    where: Prisma.periodocontableWhereUniqueInput;
};
/**
 * periodocontable findFirst
 */
export type periodocontableFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which periodocontable to fetch.
     */
    where?: Prisma.periodocontableWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of periodocontables to fetch.
     */
    orderBy?: Prisma.periodocontableOrderByWithRelationInput | Prisma.periodocontableOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for periodocontables.
     */
    cursor?: Prisma.periodocontableWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` periodocontables from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` periodocontables.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of periodocontables.
     */
    distinct?: Prisma.PeriodocontableScalarFieldEnum | Prisma.PeriodocontableScalarFieldEnum[];
};
/**
 * periodocontable findFirstOrThrow
 */
export type periodocontableFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which periodocontable to fetch.
     */
    where?: Prisma.periodocontableWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of periodocontables to fetch.
     */
    orderBy?: Prisma.periodocontableOrderByWithRelationInput | Prisma.periodocontableOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for periodocontables.
     */
    cursor?: Prisma.periodocontableWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` periodocontables from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` periodocontables.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of periodocontables.
     */
    distinct?: Prisma.PeriodocontableScalarFieldEnum | Prisma.PeriodocontableScalarFieldEnum[];
};
/**
 * periodocontable findMany
 */
export type periodocontableFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which periodocontables to fetch.
     */
    where?: Prisma.periodocontableWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of periodocontables to fetch.
     */
    orderBy?: Prisma.periodocontableOrderByWithRelationInput | Prisma.periodocontableOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing periodocontables.
     */
    cursor?: Prisma.periodocontableWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` periodocontables from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` periodocontables.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of periodocontables.
     */
    distinct?: Prisma.PeriodocontableScalarFieldEnum | Prisma.PeriodocontableScalarFieldEnum[];
};
/**
 * periodocontable create
 */
export type periodocontableCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a periodocontable.
     */
    data: Prisma.XOR<Prisma.periodocontableCreateInput, Prisma.periodocontableUncheckedCreateInput>;
};
/**
 * periodocontable createMany
 */
export type periodocontableCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many periodocontables.
     */
    data: Prisma.periodocontableCreateManyInput | Prisma.periodocontableCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * periodocontable update
 */
export type periodocontableUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a periodocontable.
     */
    data: Prisma.XOR<Prisma.periodocontableUpdateInput, Prisma.periodocontableUncheckedUpdateInput>;
    /**
     * Choose, which periodocontable to update.
     */
    where: Prisma.periodocontableWhereUniqueInput;
};
/**
 * periodocontable updateMany
 */
export type periodocontableUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update periodocontables.
     */
    data: Prisma.XOR<Prisma.periodocontableUpdateManyMutationInput, Prisma.periodocontableUncheckedUpdateManyInput>;
    /**
     * Filter which periodocontables to update
     */
    where?: Prisma.periodocontableWhereInput;
    /**
     * Limit how many periodocontables to update.
     */
    limit?: number;
};
/**
 * periodocontable upsert
 */
export type periodocontableUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the periodocontable to update in case it exists.
     */
    where: Prisma.periodocontableWhereUniqueInput;
    /**
     * In case the periodocontable found by the `where` argument doesn't exist, create a new periodocontable with this data.
     */
    create: Prisma.XOR<Prisma.periodocontableCreateInput, Prisma.periodocontableUncheckedCreateInput>;
    /**
     * In case the periodocontable was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.periodocontableUpdateInput, Prisma.periodocontableUncheckedUpdateInput>;
};
/**
 * periodocontable delete
 */
export type periodocontableDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which periodocontable to delete.
     */
    where: Prisma.periodocontableWhereUniqueInput;
};
/**
 * periodocontable deleteMany
 */
export type periodocontableDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which periodocontables to delete
     */
    where?: Prisma.periodocontableWhereInput;
    /**
     * Limit how many periodocontables to delete.
     */
    limit?: number;
};
/**
 * periodocontable.asiento
 */
export type periodocontable$asientoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.asientoWhereInput;
    orderBy?: Prisma.asientoOrderByWithRelationInput | Prisma.asientoOrderByWithRelationInput[];
    cursor?: Prisma.asientoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AsientoScalarFieldEnum | Prisma.AsientoScalarFieldEnum[];
};
/**
 * periodocontable without action
 */
export type periodocontableDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=periodocontable.d.ts.map