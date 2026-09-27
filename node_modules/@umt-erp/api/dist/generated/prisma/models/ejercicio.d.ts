import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model ejercicio
 *
 */
export type ejercicioModel = runtime.Types.Result.DefaultSelection<Prisma.$ejercicioPayload>;
export type AggregateEjercicio = {
    _count: EjercicioCountAggregateOutputType | null;
    _min: EjercicioMinAggregateOutputType | null;
    _max: EjercicioMaxAggregateOutputType | null;
};
export type EjercicioMinAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    estado: $Enums.ejercicio_estado | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EjercicioMaxAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    estado: $Enums.ejercicio_estado | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type EjercicioCountAggregateOutputType = {
    id: number;
    nombre: number;
    fechaInicio: number;
    fechaFin: number;
    estado: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type EjercicioMinAggregateInputType = {
    id?: true;
    nombre?: true;
    fechaInicio?: true;
    fechaFin?: true;
    estado?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EjercicioMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    fechaInicio?: true;
    fechaFin?: true;
    estado?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type EjercicioCountAggregateInputType = {
    id?: true;
    nombre?: true;
    fechaInicio?: true;
    fechaFin?: true;
    estado?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type EjercicioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ejercicio to aggregate.
     */
    where?: Prisma.ejercicioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ejercicios to fetch.
     */
    orderBy?: Prisma.ejercicioOrderByWithRelationInput | Prisma.ejercicioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ejercicioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ejercicios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ejercicios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ejercicios
    **/
    _count?: true | EjercicioCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EjercicioMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EjercicioMaxAggregateInputType;
};
export type GetEjercicioAggregateType<T extends EjercicioAggregateArgs> = {
    [P in keyof T & keyof AggregateEjercicio]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEjercicio[P]> : Prisma.GetScalarType<T[P], AggregateEjercicio[P]>;
};
export type ejercicioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ejercicioWhereInput;
    orderBy?: Prisma.ejercicioOrderByWithAggregationInput | Prisma.ejercicioOrderByWithAggregationInput[];
    by: Prisma.EjercicioScalarFieldEnum[] | Prisma.EjercicioScalarFieldEnum;
    having?: Prisma.ejercicioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EjercicioCountAggregateInputType | true;
    _min?: EjercicioMinAggregateInputType;
    _max?: EjercicioMaxAggregateInputType;
};
export type EjercicioGroupByOutputType = {
    id: string;
    nombre: string;
    fechaInicio: Date;
    fechaFin: Date;
    estado: $Enums.ejercicio_estado;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: EjercicioCountAggregateOutputType | null;
    _min: EjercicioMinAggregateOutputType | null;
    _max: EjercicioMaxAggregateOutputType | null;
};
export type GetEjercicioGroupByPayload<T extends ejercicioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EjercicioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EjercicioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EjercicioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EjercicioGroupByOutputType[P]>;
}>>;
export type ejercicioWhereInput = {
    AND?: Prisma.ejercicioWhereInput | Prisma.ejercicioWhereInput[];
    OR?: Prisma.ejercicioWhereInput[];
    NOT?: Prisma.ejercicioWhereInput | Prisma.ejercicioWhereInput[];
    id?: Prisma.StringFilter<"ejercicio"> | string;
    nombre?: Prisma.StringFilter<"ejercicio"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"ejercicio"> | Date | string;
    fechaFin?: Prisma.DateTimeFilter<"ejercicio"> | Date | string;
    estado?: Prisma.Enumejercicio_estadoFilter<"ejercicio"> | $Enums.ejercicio_estado;
    observaciones?: Prisma.StringNullableFilter<"ejercicio"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ejercicio"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ejercicio"> | Date | string;
    actuacion?: Prisma.ActuacionListRelationFilter;
    asiento?: Prisma.AsientoListRelationFilter;
    obligacioneconomica?: Prisma.ObligacioneconomicaListRelationFilter;
    periodocontable?: Prisma.PeriodocontableListRelationFilter;
    reparto?: Prisma.RepartoListRelationFilter;
};
export type ejercicioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    actuacion?: Prisma.actuacionOrderByRelationAggregateInput;
    asiento?: Prisma.asientoOrderByRelationAggregateInput;
    obligacioneconomica?: Prisma.obligacioneconomicaOrderByRelationAggregateInput;
    periodocontable?: Prisma.periodocontableOrderByRelationAggregateInput;
    reparto?: Prisma.repartoOrderByRelationAggregateInput;
    _relevance?: Prisma.ejercicioOrderByRelevanceInput;
};
export type ejercicioWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ejercicioWhereInput | Prisma.ejercicioWhereInput[];
    OR?: Prisma.ejercicioWhereInput[];
    NOT?: Prisma.ejercicioWhereInput | Prisma.ejercicioWhereInput[];
    nombre?: Prisma.StringFilter<"ejercicio"> | string;
    fechaInicio?: Prisma.DateTimeFilter<"ejercicio"> | Date | string;
    fechaFin?: Prisma.DateTimeFilter<"ejercicio"> | Date | string;
    estado?: Prisma.Enumejercicio_estadoFilter<"ejercicio"> | $Enums.ejercicio_estado;
    observaciones?: Prisma.StringNullableFilter<"ejercicio"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"ejercicio"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"ejercicio"> | Date | string;
    actuacion?: Prisma.ActuacionListRelationFilter;
    asiento?: Prisma.AsientoListRelationFilter;
    obligacioneconomica?: Prisma.ObligacioneconomicaListRelationFilter;
    periodocontable?: Prisma.PeriodocontableListRelationFilter;
    reparto?: Prisma.RepartoListRelationFilter;
}, "id">;
export type ejercicioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ejercicioCountOrderByAggregateInput;
    _max?: Prisma.ejercicioMaxOrderByAggregateInput;
    _min?: Prisma.ejercicioMinOrderByAggregateInput;
};
export type ejercicioScalarWhereWithAggregatesInput = {
    AND?: Prisma.ejercicioScalarWhereWithAggregatesInput | Prisma.ejercicioScalarWhereWithAggregatesInput[];
    OR?: Prisma.ejercicioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ejercicioScalarWhereWithAggregatesInput | Prisma.ejercicioScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"ejercicio"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"ejercicio"> | string;
    fechaInicio?: Prisma.DateTimeWithAggregatesFilter<"ejercicio"> | Date | string;
    fechaFin?: Prisma.DateTimeWithAggregatesFilter<"ejercicio"> | Date | string;
    estado?: Prisma.Enumejercicio_estadoWithAggregatesFilter<"ejercicio"> | $Enums.ejercicio_estado;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"ejercicio"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ejercicio"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ejercicio"> | Date | string;
};
export type ejercicioCreateInput = {
    id: string;
    nombre: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: $Enums.ejercicio_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionCreateNestedManyWithoutEjercicioInput;
    asiento?: Prisma.asientoCreateNestedManyWithoutEjercicioInput;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedManyWithoutEjercicioInput;
    periodocontable?: Prisma.periodocontableCreateNestedManyWithoutEjercicioInput;
    reparto?: Prisma.repartoCreateNestedManyWithoutEjercicioInput;
};
export type ejercicioUncheckedCreateInput = {
    id: string;
    nombre: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: $Enums.ejercicio_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionUncheckedCreateNestedManyWithoutEjercicioInput;
    asiento?: Prisma.asientoUncheckedCreateNestedManyWithoutEjercicioInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedManyWithoutEjercicioInput;
    periodocontable?: Prisma.periodocontableUncheckedCreateNestedManyWithoutEjercicioInput;
    reparto?: Prisma.repartoUncheckedCreateNestedManyWithoutEjercicioInput;
};
export type ejercicioUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumejercicio_estadoFieldUpdateOperationsInput | $Enums.ejercicio_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUpdateManyWithoutEjercicioNestedInput;
    asiento?: Prisma.asientoUpdateManyWithoutEjercicioNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateManyWithoutEjercicioNestedInput;
    periodocontable?: Prisma.periodocontableUpdateManyWithoutEjercicioNestedInput;
    reparto?: Prisma.repartoUpdateManyWithoutEjercicioNestedInput;
};
export type ejercicioUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumejercicio_estadoFieldUpdateOperationsInput | $Enums.ejercicio_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUncheckedUpdateManyWithoutEjercicioNestedInput;
    asiento?: Prisma.asientoUncheckedUpdateManyWithoutEjercicioNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateManyWithoutEjercicioNestedInput;
    periodocontable?: Prisma.periodocontableUncheckedUpdateManyWithoutEjercicioNestedInput;
    reparto?: Prisma.repartoUncheckedUpdateManyWithoutEjercicioNestedInput;
};
export type ejercicioCreateManyInput = {
    id: string;
    nombre: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: $Enums.ejercicio_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type ejercicioUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumejercicio_estadoFieldUpdateOperationsInput | $Enums.ejercicio_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ejercicioUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumejercicio_estadoFieldUpdateOperationsInput | $Enums.ejercicio_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EjercicioScalarRelationFilter = {
    is?: Prisma.ejercicioWhereInput;
    isNot?: Prisma.ejercicioWhereInput;
};
export type ejercicioOrderByRelevanceInput = {
    fields: Prisma.ejercicioOrderByRelevanceFieldEnum | Prisma.ejercicioOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type ejercicioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ejercicioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ejercicioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ejercicioCreateNestedOneWithoutActuacionInput = {
    create?: Prisma.XOR<Prisma.ejercicioCreateWithoutActuacionInput, Prisma.ejercicioUncheckedCreateWithoutActuacionInput>;
    connectOrCreate?: Prisma.ejercicioCreateOrConnectWithoutActuacionInput;
    connect?: Prisma.ejercicioWhereUniqueInput;
};
export type ejercicioUpdateOneRequiredWithoutActuacionNestedInput = {
    create?: Prisma.XOR<Prisma.ejercicioCreateWithoutActuacionInput, Prisma.ejercicioUncheckedCreateWithoutActuacionInput>;
    connectOrCreate?: Prisma.ejercicioCreateOrConnectWithoutActuacionInput;
    upsert?: Prisma.ejercicioUpsertWithoutActuacionInput;
    connect?: Prisma.ejercicioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ejercicioUpdateToOneWithWhereWithoutActuacionInput, Prisma.ejercicioUpdateWithoutActuacionInput>, Prisma.ejercicioUncheckedUpdateWithoutActuacionInput>;
};
export type ejercicioCreateNestedOneWithoutAsientoInput = {
    create?: Prisma.XOR<Prisma.ejercicioCreateWithoutAsientoInput, Prisma.ejercicioUncheckedCreateWithoutAsientoInput>;
    connectOrCreate?: Prisma.ejercicioCreateOrConnectWithoutAsientoInput;
    connect?: Prisma.ejercicioWhereUniqueInput;
};
export type ejercicioUpdateOneRequiredWithoutAsientoNestedInput = {
    create?: Prisma.XOR<Prisma.ejercicioCreateWithoutAsientoInput, Prisma.ejercicioUncheckedCreateWithoutAsientoInput>;
    connectOrCreate?: Prisma.ejercicioCreateOrConnectWithoutAsientoInput;
    upsert?: Prisma.ejercicioUpsertWithoutAsientoInput;
    connect?: Prisma.ejercicioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ejercicioUpdateToOneWithWhereWithoutAsientoInput, Prisma.ejercicioUpdateWithoutAsientoInput>, Prisma.ejercicioUncheckedUpdateWithoutAsientoInput>;
};
export type Enumejercicio_estadoFieldUpdateOperationsInput = {
    set?: $Enums.ejercicio_estado;
};
export type ejercicioCreateNestedOneWithoutObligacioneconomicaInput = {
    create?: Prisma.XOR<Prisma.ejercicioCreateWithoutObligacioneconomicaInput, Prisma.ejercicioUncheckedCreateWithoutObligacioneconomicaInput>;
    connectOrCreate?: Prisma.ejercicioCreateOrConnectWithoutObligacioneconomicaInput;
    connect?: Prisma.ejercicioWhereUniqueInput;
};
export type ejercicioUpdateOneRequiredWithoutObligacioneconomicaNestedInput = {
    create?: Prisma.XOR<Prisma.ejercicioCreateWithoutObligacioneconomicaInput, Prisma.ejercicioUncheckedCreateWithoutObligacioneconomicaInput>;
    connectOrCreate?: Prisma.ejercicioCreateOrConnectWithoutObligacioneconomicaInput;
    upsert?: Prisma.ejercicioUpsertWithoutObligacioneconomicaInput;
    connect?: Prisma.ejercicioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ejercicioUpdateToOneWithWhereWithoutObligacioneconomicaInput, Prisma.ejercicioUpdateWithoutObligacioneconomicaInput>, Prisma.ejercicioUncheckedUpdateWithoutObligacioneconomicaInput>;
};
export type ejercicioCreateNestedOneWithoutPeriodocontableInput = {
    create?: Prisma.XOR<Prisma.ejercicioCreateWithoutPeriodocontableInput, Prisma.ejercicioUncheckedCreateWithoutPeriodocontableInput>;
    connectOrCreate?: Prisma.ejercicioCreateOrConnectWithoutPeriodocontableInput;
    connect?: Prisma.ejercicioWhereUniqueInput;
};
export type ejercicioUpdateOneRequiredWithoutPeriodocontableNestedInput = {
    create?: Prisma.XOR<Prisma.ejercicioCreateWithoutPeriodocontableInput, Prisma.ejercicioUncheckedCreateWithoutPeriodocontableInput>;
    connectOrCreate?: Prisma.ejercicioCreateOrConnectWithoutPeriodocontableInput;
    upsert?: Prisma.ejercicioUpsertWithoutPeriodocontableInput;
    connect?: Prisma.ejercicioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ejercicioUpdateToOneWithWhereWithoutPeriodocontableInput, Prisma.ejercicioUpdateWithoutPeriodocontableInput>, Prisma.ejercicioUncheckedUpdateWithoutPeriodocontableInput>;
};
export type ejercicioCreateNestedOneWithoutRepartoInput = {
    create?: Prisma.XOR<Prisma.ejercicioCreateWithoutRepartoInput, Prisma.ejercicioUncheckedCreateWithoutRepartoInput>;
    connectOrCreate?: Prisma.ejercicioCreateOrConnectWithoutRepartoInput;
    connect?: Prisma.ejercicioWhereUniqueInput;
};
export type ejercicioUpdateOneRequiredWithoutRepartoNestedInput = {
    create?: Prisma.XOR<Prisma.ejercicioCreateWithoutRepartoInput, Prisma.ejercicioUncheckedCreateWithoutRepartoInput>;
    connectOrCreate?: Prisma.ejercicioCreateOrConnectWithoutRepartoInput;
    upsert?: Prisma.ejercicioUpsertWithoutRepartoInput;
    connect?: Prisma.ejercicioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ejercicioUpdateToOneWithWhereWithoutRepartoInput, Prisma.ejercicioUpdateWithoutRepartoInput>, Prisma.ejercicioUncheckedUpdateWithoutRepartoInput>;
};
export type ejercicioCreateWithoutActuacionInput = {
    id: string;
    nombre: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: $Enums.ejercicio_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    asiento?: Prisma.asientoCreateNestedManyWithoutEjercicioInput;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedManyWithoutEjercicioInput;
    periodocontable?: Prisma.periodocontableCreateNestedManyWithoutEjercicioInput;
    reparto?: Prisma.repartoCreateNestedManyWithoutEjercicioInput;
};
export type ejercicioUncheckedCreateWithoutActuacionInput = {
    id: string;
    nombre: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: $Enums.ejercicio_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    asiento?: Prisma.asientoUncheckedCreateNestedManyWithoutEjercicioInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedManyWithoutEjercicioInput;
    periodocontable?: Prisma.periodocontableUncheckedCreateNestedManyWithoutEjercicioInput;
    reparto?: Prisma.repartoUncheckedCreateNestedManyWithoutEjercicioInput;
};
export type ejercicioCreateOrConnectWithoutActuacionInput = {
    where: Prisma.ejercicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ejercicioCreateWithoutActuacionInput, Prisma.ejercicioUncheckedCreateWithoutActuacionInput>;
};
export type ejercicioUpsertWithoutActuacionInput = {
    update: Prisma.XOR<Prisma.ejercicioUpdateWithoutActuacionInput, Prisma.ejercicioUncheckedUpdateWithoutActuacionInput>;
    create: Prisma.XOR<Prisma.ejercicioCreateWithoutActuacionInput, Prisma.ejercicioUncheckedCreateWithoutActuacionInput>;
    where?: Prisma.ejercicioWhereInput;
};
export type ejercicioUpdateToOneWithWhereWithoutActuacionInput = {
    where?: Prisma.ejercicioWhereInput;
    data: Prisma.XOR<Prisma.ejercicioUpdateWithoutActuacionInput, Prisma.ejercicioUncheckedUpdateWithoutActuacionInput>;
};
export type ejercicioUpdateWithoutActuacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumejercicio_estadoFieldUpdateOperationsInput | $Enums.ejercicio_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asiento?: Prisma.asientoUpdateManyWithoutEjercicioNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateManyWithoutEjercicioNestedInput;
    periodocontable?: Prisma.periodocontableUpdateManyWithoutEjercicioNestedInput;
    reparto?: Prisma.repartoUpdateManyWithoutEjercicioNestedInput;
};
export type ejercicioUncheckedUpdateWithoutActuacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumejercicio_estadoFieldUpdateOperationsInput | $Enums.ejercicio_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    asiento?: Prisma.asientoUncheckedUpdateManyWithoutEjercicioNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateManyWithoutEjercicioNestedInput;
    periodocontable?: Prisma.periodocontableUncheckedUpdateManyWithoutEjercicioNestedInput;
    reparto?: Prisma.repartoUncheckedUpdateManyWithoutEjercicioNestedInput;
};
export type ejercicioCreateWithoutAsientoInput = {
    id: string;
    nombre: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: $Enums.ejercicio_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionCreateNestedManyWithoutEjercicioInput;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedManyWithoutEjercicioInput;
    periodocontable?: Prisma.periodocontableCreateNestedManyWithoutEjercicioInput;
    reparto?: Prisma.repartoCreateNestedManyWithoutEjercicioInput;
};
export type ejercicioUncheckedCreateWithoutAsientoInput = {
    id: string;
    nombre: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: $Enums.ejercicio_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionUncheckedCreateNestedManyWithoutEjercicioInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedManyWithoutEjercicioInput;
    periodocontable?: Prisma.periodocontableUncheckedCreateNestedManyWithoutEjercicioInput;
    reparto?: Prisma.repartoUncheckedCreateNestedManyWithoutEjercicioInput;
};
export type ejercicioCreateOrConnectWithoutAsientoInput = {
    where: Prisma.ejercicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ejercicioCreateWithoutAsientoInput, Prisma.ejercicioUncheckedCreateWithoutAsientoInput>;
};
export type ejercicioUpsertWithoutAsientoInput = {
    update: Prisma.XOR<Prisma.ejercicioUpdateWithoutAsientoInput, Prisma.ejercicioUncheckedUpdateWithoutAsientoInput>;
    create: Prisma.XOR<Prisma.ejercicioCreateWithoutAsientoInput, Prisma.ejercicioUncheckedCreateWithoutAsientoInput>;
    where?: Prisma.ejercicioWhereInput;
};
export type ejercicioUpdateToOneWithWhereWithoutAsientoInput = {
    where?: Prisma.ejercicioWhereInput;
    data: Prisma.XOR<Prisma.ejercicioUpdateWithoutAsientoInput, Prisma.ejercicioUncheckedUpdateWithoutAsientoInput>;
};
export type ejercicioUpdateWithoutAsientoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumejercicio_estadoFieldUpdateOperationsInput | $Enums.ejercicio_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUpdateManyWithoutEjercicioNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateManyWithoutEjercicioNestedInput;
    periodocontable?: Prisma.periodocontableUpdateManyWithoutEjercicioNestedInput;
    reparto?: Prisma.repartoUpdateManyWithoutEjercicioNestedInput;
};
export type ejercicioUncheckedUpdateWithoutAsientoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumejercicio_estadoFieldUpdateOperationsInput | $Enums.ejercicio_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUncheckedUpdateManyWithoutEjercicioNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateManyWithoutEjercicioNestedInput;
    periodocontable?: Prisma.periodocontableUncheckedUpdateManyWithoutEjercicioNestedInput;
    reparto?: Prisma.repartoUncheckedUpdateManyWithoutEjercicioNestedInput;
};
export type ejercicioCreateWithoutObligacioneconomicaInput = {
    id: string;
    nombre: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: $Enums.ejercicio_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionCreateNestedManyWithoutEjercicioInput;
    asiento?: Prisma.asientoCreateNestedManyWithoutEjercicioInput;
    periodocontable?: Prisma.periodocontableCreateNestedManyWithoutEjercicioInput;
    reparto?: Prisma.repartoCreateNestedManyWithoutEjercicioInput;
};
export type ejercicioUncheckedCreateWithoutObligacioneconomicaInput = {
    id: string;
    nombre: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: $Enums.ejercicio_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionUncheckedCreateNestedManyWithoutEjercicioInput;
    asiento?: Prisma.asientoUncheckedCreateNestedManyWithoutEjercicioInput;
    periodocontable?: Prisma.periodocontableUncheckedCreateNestedManyWithoutEjercicioInput;
    reparto?: Prisma.repartoUncheckedCreateNestedManyWithoutEjercicioInput;
};
export type ejercicioCreateOrConnectWithoutObligacioneconomicaInput = {
    where: Prisma.ejercicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ejercicioCreateWithoutObligacioneconomicaInput, Prisma.ejercicioUncheckedCreateWithoutObligacioneconomicaInput>;
};
export type ejercicioUpsertWithoutObligacioneconomicaInput = {
    update: Prisma.XOR<Prisma.ejercicioUpdateWithoutObligacioneconomicaInput, Prisma.ejercicioUncheckedUpdateWithoutObligacioneconomicaInput>;
    create: Prisma.XOR<Prisma.ejercicioCreateWithoutObligacioneconomicaInput, Prisma.ejercicioUncheckedCreateWithoutObligacioneconomicaInput>;
    where?: Prisma.ejercicioWhereInput;
};
export type ejercicioUpdateToOneWithWhereWithoutObligacioneconomicaInput = {
    where?: Prisma.ejercicioWhereInput;
    data: Prisma.XOR<Prisma.ejercicioUpdateWithoutObligacioneconomicaInput, Prisma.ejercicioUncheckedUpdateWithoutObligacioneconomicaInput>;
};
export type ejercicioUpdateWithoutObligacioneconomicaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumejercicio_estadoFieldUpdateOperationsInput | $Enums.ejercicio_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUpdateManyWithoutEjercicioNestedInput;
    asiento?: Prisma.asientoUpdateManyWithoutEjercicioNestedInput;
    periodocontable?: Prisma.periodocontableUpdateManyWithoutEjercicioNestedInput;
    reparto?: Prisma.repartoUpdateManyWithoutEjercicioNestedInput;
};
export type ejercicioUncheckedUpdateWithoutObligacioneconomicaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumejercicio_estadoFieldUpdateOperationsInput | $Enums.ejercicio_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUncheckedUpdateManyWithoutEjercicioNestedInput;
    asiento?: Prisma.asientoUncheckedUpdateManyWithoutEjercicioNestedInput;
    periodocontable?: Prisma.periodocontableUncheckedUpdateManyWithoutEjercicioNestedInput;
    reparto?: Prisma.repartoUncheckedUpdateManyWithoutEjercicioNestedInput;
};
export type ejercicioCreateWithoutPeriodocontableInput = {
    id: string;
    nombre: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: $Enums.ejercicio_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionCreateNestedManyWithoutEjercicioInput;
    asiento?: Prisma.asientoCreateNestedManyWithoutEjercicioInput;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedManyWithoutEjercicioInput;
    reparto?: Prisma.repartoCreateNestedManyWithoutEjercicioInput;
};
export type ejercicioUncheckedCreateWithoutPeriodocontableInput = {
    id: string;
    nombre: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: $Enums.ejercicio_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionUncheckedCreateNestedManyWithoutEjercicioInput;
    asiento?: Prisma.asientoUncheckedCreateNestedManyWithoutEjercicioInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedManyWithoutEjercicioInput;
    reparto?: Prisma.repartoUncheckedCreateNestedManyWithoutEjercicioInput;
};
export type ejercicioCreateOrConnectWithoutPeriodocontableInput = {
    where: Prisma.ejercicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ejercicioCreateWithoutPeriodocontableInput, Prisma.ejercicioUncheckedCreateWithoutPeriodocontableInput>;
};
export type ejercicioUpsertWithoutPeriodocontableInput = {
    update: Prisma.XOR<Prisma.ejercicioUpdateWithoutPeriodocontableInput, Prisma.ejercicioUncheckedUpdateWithoutPeriodocontableInput>;
    create: Prisma.XOR<Prisma.ejercicioCreateWithoutPeriodocontableInput, Prisma.ejercicioUncheckedCreateWithoutPeriodocontableInput>;
    where?: Prisma.ejercicioWhereInput;
};
export type ejercicioUpdateToOneWithWhereWithoutPeriodocontableInput = {
    where?: Prisma.ejercicioWhereInput;
    data: Prisma.XOR<Prisma.ejercicioUpdateWithoutPeriodocontableInput, Prisma.ejercicioUncheckedUpdateWithoutPeriodocontableInput>;
};
export type ejercicioUpdateWithoutPeriodocontableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumejercicio_estadoFieldUpdateOperationsInput | $Enums.ejercicio_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUpdateManyWithoutEjercicioNestedInput;
    asiento?: Prisma.asientoUpdateManyWithoutEjercicioNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateManyWithoutEjercicioNestedInput;
    reparto?: Prisma.repartoUpdateManyWithoutEjercicioNestedInput;
};
export type ejercicioUncheckedUpdateWithoutPeriodocontableInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumejercicio_estadoFieldUpdateOperationsInput | $Enums.ejercicio_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUncheckedUpdateManyWithoutEjercicioNestedInput;
    asiento?: Prisma.asientoUncheckedUpdateManyWithoutEjercicioNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateManyWithoutEjercicioNestedInput;
    reparto?: Prisma.repartoUncheckedUpdateManyWithoutEjercicioNestedInput;
};
export type ejercicioCreateWithoutRepartoInput = {
    id: string;
    nombre: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: $Enums.ejercicio_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionCreateNestedManyWithoutEjercicioInput;
    asiento?: Prisma.asientoCreateNestedManyWithoutEjercicioInput;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedManyWithoutEjercicioInput;
    periodocontable?: Prisma.periodocontableCreateNestedManyWithoutEjercicioInput;
};
export type ejercicioUncheckedCreateWithoutRepartoInput = {
    id: string;
    nombre: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    estado?: $Enums.ejercicio_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion?: Prisma.actuacionUncheckedCreateNestedManyWithoutEjercicioInput;
    asiento?: Prisma.asientoUncheckedCreateNestedManyWithoutEjercicioInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedManyWithoutEjercicioInput;
    periodocontable?: Prisma.periodocontableUncheckedCreateNestedManyWithoutEjercicioInput;
};
export type ejercicioCreateOrConnectWithoutRepartoInput = {
    where: Prisma.ejercicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.ejercicioCreateWithoutRepartoInput, Prisma.ejercicioUncheckedCreateWithoutRepartoInput>;
};
export type ejercicioUpsertWithoutRepartoInput = {
    update: Prisma.XOR<Prisma.ejercicioUpdateWithoutRepartoInput, Prisma.ejercicioUncheckedUpdateWithoutRepartoInput>;
    create: Prisma.XOR<Prisma.ejercicioCreateWithoutRepartoInput, Prisma.ejercicioUncheckedCreateWithoutRepartoInput>;
    where?: Prisma.ejercicioWhereInput;
};
export type ejercicioUpdateToOneWithWhereWithoutRepartoInput = {
    where?: Prisma.ejercicioWhereInput;
    data: Prisma.XOR<Prisma.ejercicioUpdateWithoutRepartoInput, Prisma.ejercicioUncheckedUpdateWithoutRepartoInput>;
};
export type ejercicioUpdateWithoutRepartoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumejercicio_estadoFieldUpdateOperationsInput | $Enums.ejercicio_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUpdateManyWithoutEjercicioNestedInput;
    asiento?: Prisma.asientoUpdateManyWithoutEjercicioNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateManyWithoutEjercicioNestedInput;
    periodocontable?: Prisma.periodocontableUpdateManyWithoutEjercicioNestedInput;
};
export type ejercicioUncheckedUpdateWithoutRepartoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumejercicio_estadoFieldUpdateOperationsInput | $Enums.ejercicio_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUncheckedUpdateManyWithoutEjercicioNestedInput;
    asiento?: Prisma.asientoUncheckedUpdateManyWithoutEjercicioNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateManyWithoutEjercicioNestedInput;
    periodocontable?: Prisma.periodocontableUncheckedUpdateManyWithoutEjercicioNestedInput;
};
/**
 * Count Type EjercicioCountOutputType
 */
export type EjercicioCountOutputType = {
    actuacion: number;
    asiento: number;
    obligacioneconomica: number;
    periodocontable: number;
    reparto: number;
};
export type EjercicioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actuacion?: boolean | EjercicioCountOutputTypeCountActuacionArgs;
    asiento?: boolean | EjercicioCountOutputTypeCountAsientoArgs;
    obligacioneconomica?: boolean | EjercicioCountOutputTypeCountObligacioneconomicaArgs;
    periodocontable?: boolean | EjercicioCountOutputTypeCountPeriodocontableArgs;
    reparto?: boolean | EjercicioCountOutputTypeCountRepartoArgs;
};
/**
 * EjercicioCountOutputType without action
 */
export type EjercicioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EjercicioCountOutputType
     */
    select?: Prisma.EjercicioCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * EjercicioCountOutputType without action
 */
export type EjercicioCountOutputTypeCountActuacionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.actuacionWhereInput;
};
/**
 * EjercicioCountOutputType without action
 */
export type EjercicioCountOutputTypeCountAsientoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.asientoWhereInput;
};
/**
 * EjercicioCountOutputType without action
 */
export type EjercicioCountOutputTypeCountObligacioneconomicaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.obligacioneconomicaWhereInput;
};
/**
 * EjercicioCountOutputType without action
 */
export type EjercicioCountOutputTypeCountPeriodocontableArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.periodocontableWhereInput;
};
/**
 * EjercicioCountOutputType without action
 */
export type EjercicioCountOutputTypeCountRepartoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.repartoWhereInput;
};
export type ejercicioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    estado?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    actuacion?: boolean | Prisma.ejercicio$actuacionArgs<ExtArgs>;
    asiento?: boolean | Prisma.ejercicio$asientoArgs<ExtArgs>;
    obligacioneconomica?: boolean | Prisma.ejercicio$obligacioneconomicaArgs<ExtArgs>;
    periodocontable?: boolean | Prisma.ejercicio$periodocontableArgs<ExtArgs>;
    reparto?: boolean | Prisma.ejercicio$repartoArgs<ExtArgs>;
    _count?: boolean | Prisma.EjercicioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ejercicio"]>;
export type ejercicioSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    estado?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ejercicioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "fechaInicio" | "fechaFin" | "estado" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["ejercicio"]>;
export type ejercicioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actuacion?: boolean | Prisma.ejercicio$actuacionArgs<ExtArgs>;
    asiento?: boolean | Prisma.ejercicio$asientoArgs<ExtArgs>;
    obligacioneconomica?: boolean | Prisma.ejercicio$obligacioneconomicaArgs<ExtArgs>;
    periodocontable?: boolean | Prisma.ejercicio$periodocontableArgs<ExtArgs>;
    reparto?: boolean | Prisma.ejercicio$repartoArgs<ExtArgs>;
    _count?: boolean | Prisma.EjercicioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ejercicioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ejercicio";
    objects: {
        actuacion: Prisma.$actuacionPayload<ExtArgs>[];
        asiento: Prisma.$asientoPayload<ExtArgs>[];
        obligacioneconomica: Prisma.$obligacioneconomicaPayload<ExtArgs>[];
        periodocontable: Prisma.$periodocontablePayload<ExtArgs>[];
        reparto: Prisma.$repartoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nombre: string;
        fechaInicio: Date;
        fechaFin: Date;
        estado: $Enums.ejercicio_estado;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["ejercicio"]>;
    composites: {};
};
export type ejercicioGetPayload<S extends boolean | null | undefined | ejercicioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ejercicioPayload, S>;
export type ejercicioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ejercicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EjercicioCountAggregateInputType | true;
};
export interface ejercicioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ejercicio'];
        meta: {
            name: 'ejercicio';
        };
    };
    /**
     * Find zero or one Ejercicio that matches the filter.
     * @param {ejercicioFindUniqueArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ejercicioFindUniqueArgs>(args: Prisma.SelectSubset<T, ejercicioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ejercicioClient<runtime.Types.Result.GetResult<Prisma.$ejercicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Ejercicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ejercicioFindUniqueOrThrowArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ejercicioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ejercicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ejercicioClient<runtime.Types.Result.GetResult<Prisma.$ejercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Ejercicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ejercicioFindFirstArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ejercicioFindFirstArgs>(args?: Prisma.SelectSubset<T, ejercicioFindFirstArgs<ExtArgs>>): Prisma.Prisma__ejercicioClient<runtime.Types.Result.GetResult<Prisma.$ejercicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Ejercicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ejercicioFindFirstOrThrowArgs} args - Arguments to find a Ejercicio
     * @example
     * // Get one Ejercicio
     * const ejercicio = await prisma.ejercicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ejercicioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ejercicioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ejercicioClient<runtime.Types.Result.GetResult<Prisma.$ejercicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Ejercicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ejercicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ejercicios
     * const ejercicios = await prisma.ejercicio.findMany()
     *
     * // Get first 10 Ejercicios
     * const ejercicios = await prisma.ejercicio.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ejercicioWithIdOnly = await prisma.ejercicio.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ejercicioFindManyArgs>(args?: Prisma.SelectSubset<T, ejercicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ejercicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Ejercicio.
     * @param {ejercicioCreateArgs} args - Arguments to create a Ejercicio.
     * @example
     * // Create one Ejercicio
     * const Ejercicio = await prisma.ejercicio.create({
     *   data: {
     *     // ... data to create a Ejercicio
     *   }
     * })
     *
     */
    create<T extends ejercicioCreateArgs>(args: Prisma.SelectSubset<T, ejercicioCreateArgs<ExtArgs>>): Prisma.Prisma__ejercicioClient<runtime.Types.Result.GetResult<Prisma.$ejercicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Ejercicios.
     * @param {ejercicioCreateManyArgs} args - Arguments to create many Ejercicios.
     * @example
     * // Create many Ejercicios
     * const ejercicio = await prisma.ejercicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ejercicioCreateManyArgs>(args?: Prisma.SelectSubset<T, ejercicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Ejercicio.
     * @param {ejercicioDeleteArgs} args - Arguments to delete one Ejercicio.
     * @example
     * // Delete one Ejercicio
     * const Ejercicio = await prisma.ejercicio.delete({
     *   where: {
     *     // ... filter to delete one Ejercicio
     *   }
     * })
     *
     */
    delete<T extends ejercicioDeleteArgs>(args: Prisma.SelectSubset<T, ejercicioDeleteArgs<ExtArgs>>): Prisma.Prisma__ejercicioClient<runtime.Types.Result.GetResult<Prisma.$ejercicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Ejercicio.
     * @param {ejercicioUpdateArgs} args - Arguments to update one Ejercicio.
     * @example
     * // Update one Ejercicio
     * const ejercicio = await prisma.ejercicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ejercicioUpdateArgs>(args: Prisma.SelectSubset<T, ejercicioUpdateArgs<ExtArgs>>): Prisma.Prisma__ejercicioClient<runtime.Types.Result.GetResult<Prisma.$ejercicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Ejercicios.
     * @param {ejercicioDeleteManyArgs} args - Arguments to filter Ejercicios to delete.
     * @example
     * // Delete a few Ejercicios
     * const { count } = await prisma.ejercicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ejercicioDeleteManyArgs>(args?: Prisma.SelectSubset<T, ejercicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ejercicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ejercicios
     * const ejercicio = await prisma.ejercicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ejercicioUpdateManyArgs>(args: Prisma.SelectSubset<T, ejercicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Ejercicio.
     * @param {ejercicioUpsertArgs} args - Arguments to update or create a Ejercicio.
     * @example
     * // Update or create a Ejercicio
     * const ejercicio = await prisma.ejercicio.upsert({
     *   create: {
     *     // ... data to create a Ejercicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ejercicio we want to update
     *   }
     * })
     */
    upsert<T extends ejercicioUpsertArgs>(args: Prisma.SelectSubset<T, ejercicioUpsertArgs<ExtArgs>>): Prisma.Prisma__ejercicioClient<runtime.Types.Result.GetResult<Prisma.$ejercicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Ejercicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ejercicioCountArgs} args - Arguments to filter Ejercicios to count.
     * @example
     * // Count the number of Ejercicios
     * const count = await prisma.ejercicio.count({
     *   where: {
     *     // ... the filter for the Ejercicios we want to count
     *   }
     * })
    **/
    count<T extends ejercicioCountArgs>(args?: Prisma.Subset<T, ejercicioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EjercicioCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Ejercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EjercicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EjercicioAggregateArgs>(args: Prisma.Subset<T, EjercicioAggregateArgs>): Prisma.PrismaPromise<GetEjercicioAggregateType<T>>;
    /**
     * Group by Ejercicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ejercicioGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ejercicioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ejercicioGroupByArgs['orderBy'];
    } : {
        orderBy?: ejercicioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ejercicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEjercicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ejercicio model
     */
    readonly fields: ejercicioFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ejercicio.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ejercicioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    actuacion<T extends Prisma.ejercicio$actuacionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ejercicio$actuacionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$actuacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    asiento<T extends Prisma.ejercicio$asientoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ejercicio$asientoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$asientoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    obligacioneconomica<T extends Prisma.ejercicio$obligacioneconomicaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ejercicio$obligacioneconomicaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$obligacioneconomicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    periodocontable<T extends Prisma.ejercicio$periodocontableArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ejercicio$periodocontableArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$periodocontablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reparto<T extends Prisma.ejercicio$repartoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ejercicio$repartoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$repartoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the ejercicio model
 */
export interface ejercicioFieldRefs {
    readonly id: Prisma.FieldRef<"ejercicio", 'String'>;
    readonly nombre: Prisma.FieldRef<"ejercicio", 'String'>;
    readonly fechaInicio: Prisma.FieldRef<"ejercicio", 'DateTime'>;
    readonly fechaFin: Prisma.FieldRef<"ejercicio", 'DateTime'>;
    readonly estado: Prisma.FieldRef<"ejercicio", 'ejercicio_estado'>;
    readonly observaciones: Prisma.FieldRef<"ejercicio", 'String'>;
    readonly createdAt: Prisma.FieldRef<"ejercicio", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"ejercicio", 'DateTime'>;
}
/**
 * ejercicio findUnique
 */
export type ejercicioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicio
     */
    select?: Prisma.ejercicioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ejercicio
     */
    omit?: Prisma.ejercicioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ejercicioInclude<ExtArgs> | null;
    /**
     * Filter, which ejercicio to fetch.
     */
    where: Prisma.ejercicioWhereUniqueInput;
};
/**
 * ejercicio findUniqueOrThrow
 */
export type ejercicioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicio
     */
    select?: Prisma.ejercicioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ejercicio
     */
    omit?: Prisma.ejercicioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ejercicioInclude<ExtArgs> | null;
    /**
     * Filter, which ejercicio to fetch.
     */
    where: Prisma.ejercicioWhereUniqueInput;
};
/**
 * ejercicio findFirst
 */
export type ejercicioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicio
     */
    select?: Prisma.ejercicioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ejercicio
     */
    omit?: Prisma.ejercicioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ejercicioInclude<ExtArgs> | null;
    /**
     * Filter, which ejercicio to fetch.
     */
    where?: Prisma.ejercicioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ejercicios to fetch.
     */
    orderBy?: Prisma.ejercicioOrderByWithRelationInput | Prisma.ejercicioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ejercicios.
     */
    cursor?: Prisma.ejercicioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ejercicios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ejercicios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ejercicios.
     */
    distinct?: Prisma.EjercicioScalarFieldEnum | Prisma.EjercicioScalarFieldEnum[];
};
/**
 * ejercicio findFirstOrThrow
 */
export type ejercicioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicio
     */
    select?: Prisma.ejercicioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ejercicio
     */
    omit?: Prisma.ejercicioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ejercicioInclude<ExtArgs> | null;
    /**
     * Filter, which ejercicio to fetch.
     */
    where?: Prisma.ejercicioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ejercicios to fetch.
     */
    orderBy?: Prisma.ejercicioOrderByWithRelationInput | Prisma.ejercicioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ejercicios.
     */
    cursor?: Prisma.ejercicioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ejercicios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ejercicios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ejercicios.
     */
    distinct?: Prisma.EjercicioScalarFieldEnum | Prisma.EjercicioScalarFieldEnum[];
};
/**
 * ejercicio findMany
 */
export type ejercicioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicio
     */
    select?: Prisma.ejercicioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ejercicio
     */
    omit?: Prisma.ejercicioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ejercicioInclude<ExtArgs> | null;
    /**
     * Filter, which ejercicios to fetch.
     */
    where?: Prisma.ejercicioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ejercicios to fetch.
     */
    orderBy?: Prisma.ejercicioOrderByWithRelationInput | Prisma.ejercicioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ejercicios.
     */
    cursor?: Prisma.ejercicioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ejercicios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ejercicios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ejercicios.
     */
    distinct?: Prisma.EjercicioScalarFieldEnum | Prisma.EjercicioScalarFieldEnum[];
};
/**
 * ejercicio create
 */
export type ejercicioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicio
     */
    select?: Prisma.ejercicioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ejercicio
     */
    omit?: Prisma.ejercicioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ejercicioInclude<ExtArgs> | null;
    /**
     * The data needed to create a ejercicio.
     */
    data: Prisma.XOR<Prisma.ejercicioCreateInput, Prisma.ejercicioUncheckedCreateInput>;
};
/**
 * ejercicio createMany
 */
export type ejercicioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ejercicios.
     */
    data: Prisma.ejercicioCreateManyInput | Prisma.ejercicioCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ejercicio update
 */
export type ejercicioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicio
     */
    select?: Prisma.ejercicioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ejercicio
     */
    omit?: Prisma.ejercicioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ejercicioInclude<ExtArgs> | null;
    /**
     * The data needed to update a ejercicio.
     */
    data: Prisma.XOR<Prisma.ejercicioUpdateInput, Prisma.ejercicioUncheckedUpdateInput>;
    /**
     * Choose, which ejercicio to update.
     */
    where: Prisma.ejercicioWhereUniqueInput;
};
/**
 * ejercicio updateMany
 */
export type ejercicioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ejercicios.
     */
    data: Prisma.XOR<Prisma.ejercicioUpdateManyMutationInput, Prisma.ejercicioUncheckedUpdateManyInput>;
    /**
     * Filter which ejercicios to update
     */
    where?: Prisma.ejercicioWhereInput;
    /**
     * Limit how many ejercicios to update.
     */
    limit?: number;
};
/**
 * ejercicio upsert
 */
export type ejercicioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicio
     */
    select?: Prisma.ejercicioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ejercicio
     */
    omit?: Prisma.ejercicioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ejercicioInclude<ExtArgs> | null;
    /**
     * The filter to search for the ejercicio to update in case it exists.
     */
    where: Prisma.ejercicioWhereUniqueInput;
    /**
     * In case the ejercicio found by the `where` argument doesn't exist, create a new ejercicio with this data.
     */
    create: Prisma.XOR<Prisma.ejercicioCreateInput, Prisma.ejercicioUncheckedCreateInput>;
    /**
     * In case the ejercicio was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ejercicioUpdateInput, Prisma.ejercicioUncheckedUpdateInput>;
};
/**
 * ejercicio delete
 */
export type ejercicioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicio
     */
    select?: Prisma.ejercicioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ejercicio
     */
    omit?: Prisma.ejercicioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ejercicioInclude<ExtArgs> | null;
    /**
     * Filter which ejercicio to delete.
     */
    where: Prisma.ejercicioWhereUniqueInput;
};
/**
 * ejercicio deleteMany
 */
export type ejercicioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ejercicios to delete
     */
    where?: Prisma.ejercicioWhereInput;
    /**
     * Limit how many ejercicios to delete.
     */
    limit?: number;
};
/**
 * ejercicio.actuacion
 */
export type ejercicio$actuacionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actuacion
     */
    select?: Prisma.actuacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the actuacion
     */
    omit?: Prisma.actuacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.actuacionInclude<ExtArgs> | null;
    where?: Prisma.actuacionWhereInput;
    orderBy?: Prisma.actuacionOrderByWithRelationInput | Prisma.actuacionOrderByWithRelationInput[];
    cursor?: Prisma.actuacionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActuacionScalarFieldEnum | Prisma.ActuacionScalarFieldEnum[];
};
/**
 * ejercicio.asiento
 */
export type ejercicio$asientoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ejercicio.obligacioneconomica
 */
export type ejercicio$obligacioneconomicaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.obligacioneconomicaOrderByWithRelationInput | Prisma.obligacioneconomicaOrderByWithRelationInput[];
    cursor?: Prisma.obligacioneconomicaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ObligacioneconomicaScalarFieldEnum | Prisma.ObligacioneconomicaScalarFieldEnum[];
};
/**
 * ejercicio.periodocontable
 */
export type ejercicio$periodocontableArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    orderBy?: Prisma.periodocontableOrderByWithRelationInput | Prisma.periodocontableOrderByWithRelationInput[];
    cursor?: Prisma.periodocontableWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PeriodocontableScalarFieldEnum | Prisma.PeriodocontableScalarFieldEnum[];
};
/**
 * ejercicio.reparto
 */
export type ejercicio$repartoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.repartoWhereInput;
    orderBy?: Prisma.repartoOrderByWithRelationInput | Prisma.repartoOrderByWithRelationInput[];
    cursor?: Prisma.repartoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RepartoScalarFieldEnum | Prisma.RepartoScalarFieldEnum[];
};
/**
 * ejercicio without action
 */
export type ejercicioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ejercicio
     */
    select?: Prisma.ejercicioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ejercicio
     */
    omit?: Prisma.ejercicioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ejercicioInclude<ExtArgs> | null;
};
//# sourceMappingURL=ejercicio.d.ts.map