import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model asistencia
 *
 */
export type asistenciaModel = runtime.Types.Result.DefaultSelection<Prisma.$asistenciaPayload>;
export type AggregateAsistencia = {
    _count: AsistenciaCountAggregateOutputType | null;
    _min: AsistenciaMinAggregateOutputType | null;
    _max: AsistenciaMaxAggregateOutputType | null;
};
export type AsistenciaMinAggregateOutputType = {
    id: string | null;
    actuacionId: string | null;
    musicoId: string | null;
    tipoActividad: $Enums.asistencia_tipoActividad | null;
    estado: $Enums.asistencia_estado | null;
    fechaRegistro: Date | null;
    origen: string | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AsistenciaMaxAggregateOutputType = {
    id: string | null;
    actuacionId: string | null;
    musicoId: string | null;
    tipoActividad: $Enums.asistencia_tipoActividad | null;
    estado: $Enums.asistencia_estado | null;
    fechaRegistro: Date | null;
    origen: string | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AsistenciaCountAggregateOutputType = {
    id: number;
    actuacionId: number;
    musicoId: number;
    tipoActividad: number;
    estado: number;
    fechaRegistro: number;
    origen: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AsistenciaMinAggregateInputType = {
    id?: true;
    actuacionId?: true;
    musicoId?: true;
    tipoActividad?: true;
    estado?: true;
    fechaRegistro?: true;
    origen?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AsistenciaMaxAggregateInputType = {
    id?: true;
    actuacionId?: true;
    musicoId?: true;
    tipoActividad?: true;
    estado?: true;
    fechaRegistro?: true;
    origen?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AsistenciaCountAggregateInputType = {
    id?: true;
    actuacionId?: true;
    musicoId?: true;
    tipoActividad?: true;
    estado?: true;
    fechaRegistro?: true;
    origen?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AsistenciaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which asistencia to aggregate.
     */
    where?: Prisma.asistenciaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of asistencias to fetch.
     */
    orderBy?: Prisma.asistenciaOrderByWithRelationInput | Prisma.asistenciaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.asistenciaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` asistencias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` asistencias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned asistencias
    **/
    _count?: true | AsistenciaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AsistenciaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AsistenciaMaxAggregateInputType;
};
export type GetAsistenciaAggregateType<T extends AsistenciaAggregateArgs> = {
    [P in keyof T & keyof AggregateAsistencia]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAsistencia[P]> : Prisma.GetScalarType<T[P], AggregateAsistencia[P]>;
};
export type asistenciaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.asistenciaWhereInput;
    orderBy?: Prisma.asistenciaOrderByWithAggregationInput | Prisma.asistenciaOrderByWithAggregationInput[];
    by: Prisma.AsistenciaScalarFieldEnum[] | Prisma.AsistenciaScalarFieldEnum;
    having?: Prisma.asistenciaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AsistenciaCountAggregateInputType | true;
    _min?: AsistenciaMinAggregateInputType;
    _max?: AsistenciaMaxAggregateInputType;
};
export type AsistenciaGroupByOutputType = {
    id: string;
    actuacionId: string;
    musicoId: string;
    tipoActividad: $Enums.asistencia_tipoActividad;
    estado: $Enums.asistencia_estado;
    fechaRegistro: Date;
    origen: string | null;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: AsistenciaCountAggregateOutputType | null;
    _min: AsistenciaMinAggregateOutputType | null;
    _max: AsistenciaMaxAggregateOutputType | null;
};
export type GetAsistenciaGroupByPayload<T extends asistenciaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AsistenciaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AsistenciaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AsistenciaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AsistenciaGroupByOutputType[P]>;
}>>;
export type asistenciaWhereInput = {
    AND?: Prisma.asistenciaWhereInput | Prisma.asistenciaWhereInput[];
    OR?: Prisma.asistenciaWhereInput[];
    NOT?: Prisma.asistenciaWhereInput | Prisma.asistenciaWhereInput[];
    id?: Prisma.StringFilter<"asistencia"> | string;
    actuacionId?: Prisma.StringFilter<"asistencia"> | string;
    musicoId?: Prisma.StringFilter<"asistencia"> | string;
    tipoActividad?: Prisma.Enumasistencia_tipoActividadFilter<"asistencia"> | $Enums.asistencia_tipoActividad;
    estado?: Prisma.Enumasistencia_estadoFilter<"asistencia"> | $Enums.asistencia_estado;
    fechaRegistro?: Prisma.DateTimeFilter<"asistencia"> | Date | string;
    origen?: Prisma.StringNullableFilter<"asistencia"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"asistencia"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"asistencia"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"asistencia"> | Date | string;
    actuacion?: Prisma.XOR<Prisma.ActuacionScalarRelationFilter, Prisma.actuacionWhereInput>;
    musico?: Prisma.XOR<Prisma.MusicoScalarRelationFilter, Prisma.musicoWhereInput>;
};
export type asistenciaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    actuacionId?: Prisma.SortOrder;
    musicoId?: Prisma.SortOrder;
    tipoActividad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaRegistro?: Prisma.SortOrder;
    origen?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    actuacion?: Prisma.actuacionOrderByWithRelationInput;
    musico?: Prisma.musicoOrderByWithRelationInput;
    _relevance?: Prisma.asistenciaOrderByRelevanceInput;
};
export type asistenciaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    actuacionId_musicoId?: Prisma.asistenciaActuacionIdMusicoIdCompoundUniqueInput;
    AND?: Prisma.asistenciaWhereInput | Prisma.asistenciaWhereInput[];
    OR?: Prisma.asistenciaWhereInput[];
    NOT?: Prisma.asistenciaWhereInput | Prisma.asistenciaWhereInput[];
    actuacionId?: Prisma.StringFilter<"asistencia"> | string;
    musicoId?: Prisma.StringFilter<"asistencia"> | string;
    tipoActividad?: Prisma.Enumasistencia_tipoActividadFilter<"asistencia"> | $Enums.asistencia_tipoActividad;
    estado?: Prisma.Enumasistencia_estadoFilter<"asistencia"> | $Enums.asistencia_estado;
    fechaRegistro?: Prisma.DateTimeFilter<"asistencia"> | Date | string;
    origen?: Prisma.StringNullableFilter<"asistencia"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"asistencia"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"asistencia"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"asistencia"> | Date | string;
    actuacion?: Prisma.XOR<Prisma.ActuacionScalarRelationFilter, Prisma.actuacionWhereInput>;
    musico?: Prisma.XOR<Prisma.MusicoScalarRelationFilter, Prisma.musicoWhereInput>;
}, "id" | "actuacionId_musicoId">;
export type asistenciaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    actuacionId?: Prisma.SortOrder;
    musicoId?: Prisma.SortOrder;
    tipoActividad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaRegistro?: Prisma.SortOrder;
    origen?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.asistenciaCountOrderByAggregateInput;
    _max?: Prisma.asistenciaMaxOrderByAggregateInput;
    _min?: Prisma.asistenciaMinOrderByAggregateInput;
};
export type asistenciaScalarWhereWithAggregatesInput = {
    AND?: Prisma.asistenciaScalarWhereWithAggregatesInput | Prisma.asistenciaScalarWhereWithAggregatesInput[];
    OR?: Prisma.asistenciaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.asistenciaScalarWhereWithAggregatesInput | Prisma.asistenciaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"asistencia"> | string;
    actuacionId?: Prisma.StringWithAggregatesFilter<"asistencia"> | string;
    musicoId?: Prisma.StringWithAggregatesFilter<"asistencia"> | string;
    tipoActividad?: Prisma.Enumasistencia_tipoActividadWithAggregatesFilter<"asistencia"> | $Enums.asistencia_tipoActividad;
    estado?: Prisma.Enumasistencia_estadoWithAggregatesFilter<"asistencia"> | $Enums.asistencia_estado;
    fechaRegistro?: Prisma.DateTimeWithAggregatesFilter<"asistencia"> | Date | string;
    origen?: Prisma.StringNullableWithAggregatesFilter<"asistencia"> | string | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"asistencia"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"asistencia"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"asistencia"> | Date | string;
};
export type asistenciaCreateInput = {
    id: string;
    tipoActividad: $Enums.asistencia_tipoActividad;
    estado?: $Enums.asistencia_estado;
    fechaRegistro: Date | string;
    origen?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion: Prisma.actuacionCreateNestedOneWithoutAsistenciaInput;
    musico: Prisma.musicoCreateNestedOneWithoutAsistenciaInput;
};
export type asistenciaUncheckedCreateInput = {
    id: string;
    actuacionId: string;
    musicoId: string;
    tipoActividad: $Enums.asistencia_tipoActividad;
    estado?: $Enums.asistencia_estado;
    fechaRegistro: Date | string;
    origen?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type asistenciaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoActividad?: Prisma.Enumasistencia_tipoActividadFieldUpdateOperationsInput | $Enums.asistencia_tipoActividad;
    estado?: Prisma.Enumasistencia_estadoFieldUpdateOperationsInput | $Enums.asistencia_estado;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUpdateOneRequiredWithoutAsistenciaNestedInput;
    musico?: Prisma.musicoUpdateOneRequiredWithoutAsistenciaNestedInput;
};
export type asistenciaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actuacionId?: Prisma.StringFieldUpdateOperationsInput | string;
    musicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoActividad?: Prisma.Enumasistencia_tipoActividadFieldUpdateOperationsInput | $Enums.asistencia_tipoActividad;
    estado?: Prisma.Enumasistencia_estadoFieldUpdateOperationsInput | $Enums.asistencia_estado;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type asistenciaCreateManyInput = {
    id: string;
    actuacionId: string;
    musicoId: string;
    tipoActividad: $Enums.asistencia_tipoActividad;
    estado?: $Enums.asistencia_estado;
    fechaRegistro: Date | string;
    origen?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type asistenciaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoActividad?: Prisma.Enumasistencia_tipoActividadFieldUpdateOperationsInput | $Enums.asistencia_tipoActividad;
    estado?: Prisma.Enumasistencia_estadoFieldUpdateOperationsInput | $Enums.asistencia_estado;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type asistenciaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actuacionId?: Prisma.StringFieldUpdateOperationsInput | string;
    musicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoActividad?: Prisma.Enumasistencia_tipoActividadFieldUpdateOperationsInput | $Enums.asistencia_tipoActividad;
    estado?: Prisma.Enumasistencia_estadoFieldUpdateOperationsInput | $Enums.asistencia_estado;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AsistenciaListRelationFilter = {
    every?: Prisma.asistenciaWhereInput;
    some?: Prisma.asistenciaWhereInput;
    none?: Prisma.asistenciaWhereInput;
};
export type asistenciaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type asistenciaOrderByRelevanceInput = {
    fields: Prisma.asistenciaOrderByRelevanceFieldEnum | Prisma.asistenciaOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type asistenciaActuacionIdMusicoIdCompoundUniqueInput = {
    actuacionId: string;
    musicoId: string;
};
export type asistenciaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    actuacionId?: Prisma.SortOrder;
    musicoId?: Prisma.SortOrder;
    tipoActividad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaRegistro?: Prisma.SortOrder;
    origen?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type asistenciaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    actuacionId?: Prisma.SortOrder;
    musicoId?: Prisma.SortOrder;
    tipoActividad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaRegistro?: Prisma.SortOrder;
    origen?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type asistenciaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    actuacionId?: Prisma.SortOrder;
    musicoId?: Prisma.SortOrder;
    tipoActividad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaRegistro?: Prisma.SortOrder;
    origen?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type asistenciaCreateNestedManyWithoutActuacionInput = {
    create?: Prisma.XOR<Prisma.asistenciaCreateWithoutActuacionInput, Prisma.asistenciaUncheckedCreateWithoutActuacionInput> | Prisma.asistenciaCreateWithoutActuacionInput[] | Prisma.asistenciaUncheckedCreateWithoutActuacionInput[];
    connectOrCreate?: Prisma.asistenciaCreateOrConnectWithoutActuacionInput | Prisma.asistenciaCreateOrConnectWithoutActuacionInput[];
    createMany?: Prisma.asistenciaCreateManyActuacionInputEnvelope;
    connect?: Prisma.asistenciaWhereUniqueInput | Prisma.asistenciaWhereUniqueInput[];
};
export type asistenciaUncheckedCreateNestedManyWithoutActuacionInput = {
    create?: Prisma.XOR<Prisma.asistenciaCreateWithoutActuacionInput, Prisma.asistenciaUncheckedCreateWithoutActuacionInput> | Prisma.asistenciaCreateWithoutActuacionInput[] | Prisma.asistenciaUncheckedCreateWithoutActuacionInput[];
    connectOrCreate?: Prisma.asistenciaCreateOrConnectWithoutActuacionInput | Prisma.asistenciaCreateOrConnectWithoutActuacionInput[];
    createMany?: Prisma.asistenciaCreateManyActuacionInputEnvelope;
    connect?: Prisma.asistenciaWhereUniqueInput | Prisma.asistenciaWhereUniqueInput[];
};
export type asistenciaUpdateManyWithoutActuacionNestedInput = {
    create?: Prisma.XOR<Prisma.asistenciaCreateWithoutActuacionInput, Prisma.asistenciaUncheckedCreateWithoutActuacionInput> | Prisma.asistenciaCreateWithoutActuacionInput[] | Prisma.asistenciaUncheckedCreateWithoutActuacionInput[];
    connectOrCreate?: Prisma.asistenciaCreateOrConnectWithoutActuacionInput | Prisma.asistenciaCreateOrConnectWithoutActuacionInput[];
    upsert?: Prisma.asistenciaUpsertWithWhereUniqueWithoutActuacionInput | Prisma.asistenciaUpsertWithWhereUniqueWithoutActuacionInput[];
    createMany?: Prisma.asistenciaCreateManyActuacionInputEnvelope;
    set?: Prisma.asistenciaWhereUniqueInput | Prisma.asistenciaWhereUniqueInput[];
    disconnect?: Prisma.asistenciaWhereUniqueInput | Prisma.asistenciaWhereUniqueInput[];
    delete?: Prisma.asistenciaWhereUniqueInput | Prisma.asistenciaWhereUniqueInput[];
    connect?: Prisma.asistenciaWhereUniqueInput | Prisma.asistenciaWhereUniqueInput[];
    update?: Prisma.asistenciaUpdateWithWhereUniqueWithoutActuacionInput | Prisma.asistenciaUpdateWithWhereUniqueWithoutActuacionInput[];
    updateMany?: Prisma.asistenciaUpdateManyWithWhereWithoutActuacionInput | Prisma.asistenciaUpdateManyWithWhereWithoutActuacionInput[];
    deleteMany?: Prisma.asistenciaScalarWhereInput | Prisma.asistenciaScalarWhereInput[];
};
export type asistenciaUncheckedUpdateManyWithoutActuacionNestedInput = {
    create?: Prisma.XOR<Prisma.asistenciaCreateWithoutActuacionInput, Prisma.asistenciaUncheckedCreateWithoutActuacionInput> | Prisma.asistenciaCreateWithoutActuacionInput[] | Prisma.asistenciaUncheckedCreateWithoutActuacionInput[];
    connectOrCreate?: Prisma.asistenciaCreateOrConnectWithoutActuacionInput | Prisma.asistenciaCreateOrConnectWithoutActuacionInput[];
    upsert?: Prisma.asistenciaUpsertWithWhereUniqueWithoutActuacionInput | Prisma.asistenciaUpsertWithWhereUniqueWithoutActuacionInput[];
    createMany?: Prisma.asistenciaCreateManyActuacionInputEnvelope;
    set?: Prisma.asistenciaWhereUniqueInput | Prisma.asistenciaWhereUniqueInput[];
    disconnect?: Prisma.asistenciaWhereUniqueInput | Prisma.asistenciaWhereUniqueInput[];
    delete?: Prisma.asistenciaWhereUniqueInput | Prisma.asistenciaWhereUniqueInput[];
    connect?: Prisma.asistenciaWhereUniqueInput | Prisma.asistenciaWhereUniqueInput[];
    update?: Prisma.asistenciaUpdateWithWhereUniqueWithoutActuacionInput | Prisma.asistenciaUpdateWithWhereUniqueWithoutActuacionInput[];
    updateMany?: Prisma.asistenciaUpdateManyWithWhereWithoutActuacionInput | Prisma.asistenciaUpdateManyWithWhereWithoutActuacionInput[];
    deleteMany?: Prisma.asistenciaScalarWhereInput | Prisma.asistenciaScalarWhereInput[];
};
export type Enumasistencia_tipoActividadFieldUpdateOperationsInput = {
    set?: $Enums.asistencia_tipoActividad;
};
export type Enumasistencia_estadoFieldUpdateOperationsInput = {
    set?: $Enums.asistencia_estado;
};
export type asistenciaCreateNestedManyWithoutMusicoInput = {
    create?: Prisma.XOR<Prisma.asistenciaCreateWithoutMusicoInput, Prisma.asistenciaUncheckedCreateWithoutMusicoInput> | Prisma.asistenciaCreateWithoutMusicoInput[] | Prisma.asistenciaUncheckedCreateWithoutMusicoInput[];
    connectOrCreate?: Prisma.asistenciaCreateOrConnectWithoutMusicoInput | Prisma.asistenciaCreateOrConnectWithoutMusicoInput[];
    createMany?: Prisma.asistenciaCreateManyMusicoInputEnvelope;
    connect?: Prisma.asistenciaWhereUniqueInput | Prisma.asistenciaWhereUniqueInput[];
};
export type asistenciaUncheckedCreateNestedManyWithoutMusicoInput = {
    create?: Prisma.XOR<Prisma.asistenciaCreateWithoutMusicoInput, Prisma.asistenciaUncheckedCreateWithoutMusicoInput> | Prisma.asistenciaCreateWithoutMusicoInput[] | Prisma.asistenciaUncheckedCreateWithoutMusicoInput[];
    connectOrCreate?: Prisma.asistenciaCreateOrConnectWithoutMusicoInput | Prisma.asistenciaCreateOrConnectWithoutMusicoInput[];
    createMany?: Prisma.asistenciaCreateManyMusicoInputEnvelope;
    connect?: Prisma.asistenciaWhereUniqueInput | Prisma.asistenciaWhereUniqueInput[];
};
export type asistenciaUpdateManyWithoutMusicoNestedInput = {
    create?: Prisma.XOR<Prisma.asistenciaCreateWithoutMusicoInput, Prisma.asistenciaUncheckedCreateWithoutMusicoInput> | Prisma.asistenciaCreateWithoutMusicoInput[] | Prisma.asistenciaUncheckedCreateWithoutMusicoInput[];
    connectOrCreate?: Prisma.asistenciaCreateOrConnectWithoutMusicoInput | Prisma.asistenciaCreateOrConnectWithoutMusicoInput[];
    upsert?: Prisma.asistenciaUpsertWithWhereUniqueWithoutMusicoInput | Prisma.asistenciaUpsertWithWhereUniqueWithoutMusicoInput[];
    createMany?: Prisma.asistenciaCreateManyMusicoInputEnvelope;
    set?: Prisma.asistenciaWhereUniqueInput | Prisma.asistenciaWhereUniqueInput[];
    disconnect?: Prisma.asistenciaWhereUniqueInput | Prisma.asistenciaWhereUniqueInput[];
    delete?: Prisma.asistenciaWhereUniqueInput | Prisma.asistenciaWhereUniqueInput[];
    connect?: Prisma.asistenciaWhereUniqueInput | Prisma.asistenciaWhereUniqueInput[];
    update?: Prisma.asistenciaUpdateWithWhereUniqueWithoutMusicoInput | Prisma.asistenciaUpdateWithWhereUniqueWithoutMusicoInput[];
    updateMany?: Prisma.asistenciaUpdateManyWithWhereWithoutMusicoInput | Prisma.asistenciaUpdateManyWithWhereWithoutMusicoInput[];
    deleteMany?: Prisma.asistenciaScalarWhereInput | Prisma.asistenciaScalarWhereInput[];
};
export type asistenciaUncheckedUpdateManyWithoutMusicoNestedInput = {
    create?: Prisma.XOR<Prisma.asistenciaCreateWithoutMusicoInput, Prisma.asistenciaUncheckedCreateWithoutMusicoInput> | Prisma.asistenciaCreateWithoutMusicoInput[] | Prisma.asistenciaUncheckedCreateWithoutMusicoInput[];
    connectOrCreate?: Prisma.asistenciaCreateOrConnectWithoutMusicoInput | Prisma.asistenciaCreateOrConnectWithoutMusicoInput[];
    upsert?: Prisma.asistenciaUpsertWithWhereUniqueWithoutMusicoInput | Prisma.asistenciaUpsertWithWhereUniqueWithoutMusicoInput[];
    createMany?: Prisma.asistenciaCreateManyMusicoInputEnvelope;
    set?: Prisma.asistenciaWhereUniqueInput | Prisma.asistenciaWhereUniqueInput[];
    disconnect?: Prisma.asistenciaWhereUniqueInput | Prisma.asistenciaWhereUniqueInput[];
    delete?: Prisma.asistenciaWhereUniqueInput | Prisma.asistenciaWhereUniqueInput[];
    connect?: Prisma.asistenciaWhereUniqueInput | Prisma.asistenciaWhereUniqueInput[];
    update?: Prisma.asistenciaUpdateWithWhereUniqueWithoutMusicoInput | Prisma.asistenciaUpdateWithWhereUniqueWithoutMusicoInput[];
    updateMany?: Prisma.asistenciaUpdateManyWithWhereWithoutMusicoInput | Prisma.asistenciaUpdateManyWithWhereWithoutMusicoInput[];
    deleteMany?: Prisma.asistenciaScalarWhereInput | Prisma.asistenciaScalarWhereInput[];
};
export type asistenciaCreateWithoutActuacionInput = {
    id: string;
    tipoActividad: $Enums.asistencia_tipoActividad;
    estado?: $Enums.asistencia_estado;
    fechaRegistro: Date | string;
    origen?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    musico: Prisma.musicoCreateNestedOneWithoutAsistenciaInput;
};
export type asistenciaUncheckedCreateWithoutActuacionInput = {
    id: string;
    musicoId: string;
    tipoActividad: $Enums.asistencia_tipoActividad;
    estado?: $Enums.asistencia_estado;
    fechaRegistro: Date | string;
    origen?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type asistenciaCreateOrConnectWithoutActuacionInput = {
    where: Prisma.asistenciaWhereUniqueInput;
    create: Prisma.XOR<Prisma.asistenciaCreateWithoutActuacionInput, Prisma.asistenciaUncheckedCreateWithoutActuacionInput>;
};
export type asistenciaCreateManyActuacionInputEnvelope = {
    data: Prisma.asistenciaCreateManyActuacionInput | Prisma.asistenciaCreateManyActuacionInput[];
    skipDuplicates?: boolean;
};
export type asistenciaUpsertWithWhereUniqueWithoutActuacionInput = {
    where: Prisma.asistenciaWhereUniqueInput;
    update: Prisma.XOR<Prisma.asistenciaUpdateWithoutActuacionInput, Prisma.asistenciaUncheckedUpdateWithoutActuacionInput>;
    create: Prisma.XOR<Prisma.asistenciaCreateWithoutActuacionInput, Prisma.asistenciaUncheckedCreateWithoutActuacionInput>;
};
export type asistenciaUpdateWithWhereUniqueWithoutActuacionInput = {
    where: Prisma.asistenciaWhereUniqueInput;
    data: Prisma.XOR<Prisma.asistenciaUpdateWithoutActuacionInput, Prisma.asistenciaUncheckedUpdateWithoutActuacionInput>;
};
export type asistenciaUpdateManyWithWhereWithoutActuacionInput = {
    where: Prisma.asistenciaScalarWhereInput;
    data: Prisma.XOR<Prisma.asistenciaUpdateManyMutationInput, Prisma.asistenciaUncheckedUpdateManyWithoutActuacionInput>;
};
export type asistenciaScalarWhereInput = {
    AND?: Prisma.asistenciaScalarWhereInput | Prisma.asistenciaScalarWhereInput[];
    OR?: Prisma.asistenciaScalarWhereInput[];
    NOT?: Prisma.asistenciaScalarWhereInput | Prisma.asistenciaScalarWhereInput[];
    id?: Prisma.StringFilter<"asistencia"> | string;
    actuacionId?: Prisma.StringFilter<"asistencia"> | string;
    musicoId?: Prisma.StringFilter<"asistencia"> | string;
    tipoActividad?: Prisma.Enumasistencia_tipoActividadFilter<"asistencia"> | $Enums.asistencia_tipoActividad;
    estado?: Prisma.Enumasistencia_estadoFilter<"asistencia"> | $Enums.asistencia_estado;
    fechaRegistro?: Prisma.DateTimeFilter<"asistencia"> | Date | string;
    origen?: Prisma.StringNullableFilter<"asistencia"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"asistencia"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"asistencia"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"asistencia"> | Date | string;
};
export type asistenciaCreateWithoutMusicoInput = {
    id: string;
    tipoActividad: $Enums.asistencia_tipoActividad;
    estado?: $Enums.asistencia_estado;
    fechaRegistro: Date | string;
    origen?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacion: Prisma.actuacionCreateNestedOneWithoutAsistenciaInput;
};
export type asistenciaUncheckedCreateWithoutMusicoInput = {
    id: string;
    actuacionId: string;
    tipoActividad: $Enums.asistencia_tipoActividad;
    estado?: $Enums.asistencia_estado;
    fechaRegistro: Date | string;
    origen?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type asistenciaCreateOrConnectWithoutMusicoInput = {
    where: Prisma.asistenciaWhereUniqueInput;
    create: Prisma.XOR<Prisma.asistenciaCreateWithoutMusicoInput, Prisma.asistenciaUncheckedCreateWithoutMusicoInput>;
};
export type asistenciaCreateManyMusicoInputEnvelope = {
    data: Prisma.asistenciaCreateManyMusicoInput | Prisma.asistenciaCreateManyMusicoInput[];
    skipDuplicates?: boolean;
};
export type asistenciaUpsertWithWhereUniqueWithoutMusicoInput = {
    where: Prisma.asistenciaWhereUniqueInput;
    update: Prisma.XOR<Prisma.asistenciaUpdateWithoutMusicoInput, Prisma.asistenciaUncheckedUpdateWithoutMusicoInput>;
    create: Prisma.XOR<Prisma.asistenciaCreateWithoutMusicoInput, Prisma.asistenciaUncheckedCreateWithoutMusicoInput>;
};
export type asistenciaUpdateWithWhereUniqueWithoutMusicoInput = {
    where: Prisma.asistenciaWhereUniqueInput;
    data: Prisma.XOR<Prisma.asistenciaUpdateWithoutMusicoInput, Prisma.asistenciaUncheckedUpdateWithoutMusicoInput>;
};
export type asistenciaUpdateManyWithWhereWithoutMusicoInput = {
    where: Prisma.asistenciaScalarWhereInput;
    data: Prisma.XOR<Prisma.asistenciaUpdateManyMutationInput, Prisma.asistenciaUncheckedUpdateManyWithoutMusicoInput>;
};
export type asistenciaCreateManyActuacionInput = {
    id: string;
    musicoId: string;
    tipoActividad: $Enums.asistencia_tipoActividad;
    estado?: $Enums.asistencia_estado;
    fechaRegistro: Date | string;
    origen?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type asistenciaUpdateWithoutActuacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoActividad?: Prisma.Enumasistencia_tipoActividadFieldUpdateOperationsInput | $Enums.asistencia_tipoActividad;
    estado?: Prisma.Enumasistencia_estadoFieldUpdateOperationsInput | $Enums.asistencia_estado;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    musico?: Prisma.musicoUpdateOneRequiredWithoutAsistenciaNestedInput;
};
export type asistenciaUncheckedUpdateWithoutActuacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    musicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoActividad?: Prisma.Enumasistencia_tipoActividadFieldUpdateOperationsInput | $Enums.asistencia_tipoActividad;
    estado?: Prisma.Enumasistencia_estadoFieldUpdateOperationsInput | $Enums.asistencia_estado;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type asistenciaUncheckedUpdateManyWithoutActuacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    musicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoActividad?: Prisma.Enumasistencia_tipoActividadFieldUpdateOperationsInput | $Enums.asistencia_tipoActividad;
    estado?: Prisma.Enumasistencia_estadoFieldUpdateOperationsInput | $Enums.asistencia_estado;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type asistenciaCreateManyMusicoInput = {
    id: string;
    actuacionId: string;
    tipoActividad: $Enums.asistencia_tipoActividad;
    estado?: $Enums.asistencia_estado;
    fechaRegistro: Date | string;
    origen?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type asistenciaUpdateWithoutMusicoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoActividad?: Prisma.Enumasistencia_tipoActividadFieldUpdateOperationsInput | $Enums.asistencia_tipoActividad;
    estado?: Prisma.Enumasistencia_estadoFieldUpdateOperationsInput | $Enums.asistencia_estado;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacion?: Prisma.actuacionUpdateOneRequiredWithoutAsistenciaNestedInput;
};
export type asistenciaUncheckedUpdateWithoutMusicoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actuacionId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoActividad?: Prisma.Enumasistencia_tipoActividadFieldUpdateOperationsInput | $Enums.asistencia_tipoActividad;
    estado?: Prisma.Enumasistencia_estadoFieldUpdateOperationsInput | $Enums.asistencia_estado;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type asistenciaUncheckedUpdateManyWithoutMusicoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actuacionId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipoActividad?: Prisma.Enumasistencia_tipoActividadFieldUpdateOperationsInput | $Enums.asistencia_tipoActividad;
    estado?: Prisma.Enumasistencia_estadoFieldUpdateOperationsInput | $Enums.asistencia_estado;
    fechaRegistro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type asistenciaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    actuacionId?: boolean;
    musicoId?: boolean;
    tipoActividad?: boolean;
    estado?: boolean;
    fechaRegistro?: boolean;
    origen?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    actuacion?: boolean | Prisma.actuacionDefaultArgs<ExtArgs>;
    musico?: boolean | Prisma.musicoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["asistencia"]>;
export type asistenciaSelectScalar = {
    id?: boolean;
    actuacionId?: boolean;
    musicoId?: boolean;
    tipoActividad?: boolean;
    estado?: boolean;
    fechaRegistro?: boolean;
    origen?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type asistenciaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "actuacionId" | "musicoId" | "tipoActividad" | "estado" | "fechaRegistro" | "origen" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["asistencia"]>;
export type asistenciaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actuacion?: boolean | Prisma.actuacionDefaultArgs<ExtArgs>;
    musico?: boolean | Prisma.musicoDefaultArgs<ExtArgs>;
};
export type $asistenciaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "asistencia";
    objects: {
        actuacion: Prisma.$actuacionPayload<ExtArgs>;
        musico: Prisma.$musicoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        actuacionId: string;
        musicoId: string;
        tipoActividad: $Enums.asistencia_tipoActividad;
        estado: $Enums.asistencia_estado;
        fechaRegistro: Date;
        origen: string | null;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["asistencia"]>;
    composites: {};
};
export type asistenciaGetPayload<S extends boolean | null | undefined | asistenciaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$asistenciaPayload, S>;
export type asistenciaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<asistenciaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AsistenciaCountAggregateInputType | true;
};
export interface asistenciaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['asistencia'];
        meta: {
            name: 'asistencia';
        };
    };
    /**
     * Find zero or one Asistencia that matches the filter.
     * @param {asistenciaFindUniqueArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends asistenciaFindUniqueArgs>(args: Prisma.SelectSubset<T, asistenciaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__asistenciaClient<runtime.Types.Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Asistencia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {asistenciaFindUniqueOrThrowArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends asistenciaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, asistenciaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__asistenciaClient<runtime.Types.Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Asistencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaFindFirstArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends asistenciaFindFirstArgs>(args?: Prisma.SelectSubset<T, asistenciaFindFirstArgs<ExtArgs>>): Prisma.Prisma__asistenciaClient<runtime.Types.Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Asistencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaFindFirstOrThrowArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends asistenciaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, asistenciaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__asistenciaClient<runtime.Types.Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Asistencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asistencias
     * const asistencias = await prisma.asistencia.findMany()
     *
     * // Get first 10 Asistencias
     * const asistencias = await prisma.asistencia.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const asistenciaWithIdOnly = await prisma.asistencia.findMany({ select: { id: true } })
     *
     */
    findMany<T extends asistenciaFindManyArgs>(args?: Prisma.SelectSubset<T, asistenciaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Asistencia.
     * @param {asistenciaCreateArgs} args - Arguments to create a Asistencia.
     * @example
     * // Create one Asistencia
     * const Asistencia = await prisma.asistencia.create({
     *   data: {
     *     // ... data to create a Asistencia
     *   }
     * })
     *
     */
    create<T extends asistenciaCreateArgs>(args: Prisma.SelectSubset<T, asistenciaCreateArgs<ExtArgs>>): Prisma.Prisma__asistenciaClient<runtime.Types.Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Asistencias.
     * @param {asistenciaCreateManyArgs} args - Arguments to create many Asistencias.
     * @example
     * // Create many Asistencias
     * const asistencia = await prisma.asistencia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends asistenciaCreateManyArgs>(args?: Prisma.SelectSubset<T, asistenciaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Asistencia.
     * @param {asistenciaDeleteArgs} args - Arguments to delete one Asistencia.
     * @example
     * // Delete one Asistencia
     * const Asistencia = await prisma.asistencia.delete({
     *   where: {
     *     // ... filter to delete one Asistencia
     *   }
     * })
     *
     */
    delete<T extends asistenciaDeleteArgs>(args: Prisma.SelectSubset<T, asistenciaDeleteArgs<ExtArgs>>): Prisma.Prisma__asistenciaClient<runtime.Types.Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Asistencia.
     * @param {asistenciaUpdateArgs} args - Arguments to update one Asistencia.
     * @example
     * // Update one Asistencia
     * const asistencia = await prisma.asistencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends asistenciaUpdateArgs>(args: Prisma.SelectSubset<T, asistenciaUpdateArgs<ExtArgs>>): Prisma.Prisma__asistenciaClient<runtime.Types.Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Asistencias.
     * @param {asistenciaDeleteManyArgs} args - Arguments to filter Asistencias to delete.
     * @example
     * // Delete a few Asistencias
     * const { count } = await prisma.asistencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends asistenciaDeleteManyArgs>(args?: Prisma.SelectSubset<T, asistenciaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asistencias
     * const asistencia = await prisma.asistencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends asistenciaUpdateManyArgs>(args: Prisma.SelectSubset<T, asistenciaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Asistencia.
     * @param {asistenciaUpsertArgs} args - Arguments to update or create a Asistencia.
     * @example
     * // Update or create a Asistencia
     * const asistencia = await prisma.asistencia.upsert({
     *   create: {
     *     // ... data to create a Asistencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asistencia we want to update
     *   }
     * })
     */
    upsert<T extends asistenciaUpsertArgs>(args: Prisma.SelectSubset<T, asistenciaUpsertArgs<ExtArgs>>): Prisma.Prisma__asistenciaClient<runtime.Types.Result.GetResult<Prisma.$asistenciaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaCountArgs} args - Arguments to filter Asistencias to count.
     * @example
     * // Count the number of Asistencias
     * const count = await prisma.asistencia.count({
     *   where: {
     *     // ... the filter for the Asistencias we want to count
     *   }
     * })
    **/
    count<T extends asistenciaCountArgs>(args?: Prisma.Subset<T, asistenciaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AsistenciaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Asistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AsistenciaAggregateArgs>(args: Prisma.Subset<T, AsistenciaAggregateArgs>): Prisma.PrismaPromise<GetAsistenciaAggregateType<T>>;
    /**
     * Group by Asistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {asistenciaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends asistenciaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: asistenciaGroupByArgs['orderBy'];
    } : {
        orderBy?: asistenciaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, asistenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsistenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the asistencia model
     */
    readonly fields: asistenciaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for asistencia.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__asistenciaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    actuacion<T extends Prisma.actuacionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.actuacionDefaultArgs<ExtArgs>>): Prisma.Prisma__actuacionClient<runtime.Types.Result.GetResult<Prisma.$actuacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    musico<T extends Prisma.musicoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.musicoDefaultArgs<ExtArgs>>): Prisma.Prisma__musicoClient<runtime.Types.Result.GetResult<Prisma.$musicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the asistencia model
 */
export interface asistenciaFieldRefs {
    readonly id: Prisma.FieldRef<"asistencia", 'String'>;
    readonly actuacionId: Prisma.FieldRef<"asistencia", 'String'>;
    readonly musicoId: Prisma.FieldRef<"asistencia", 'String'>;
    readonly tipoActividad: Prisma.FieldRef<"asistencia", 'asistencia_tipoActividad'>;
    readonly estado: Prisma.FieldRef<"asistencia", 'asistencia_estado'>;
    readonly fechaRegistro: Prisma.FieldRef<"asistencia", 'DateTime'>;
    readonly origen: Prisma.FieldRef<"asistencia", 'String'>;
    readonly observaciones: Prisma.FieldRef<"asistencia", 'String'>;
    readonly createdAt: Prisma.FieldRef<"asistencia", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"asistencia", 'DateTime'>;
}
/**
 * asistencia findUnique
 */
export type asistenciaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which asistencia to fetch.
     */
    where: Prisma.asistenciaWhereUniqueInput;
};
/**
 * asistencia findUniqueOrThrow
 */
export type asistenciaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which asistencia to fetch.
     */
    where: Prisma.asistenciaWhereUniqueInput;
};
/**
 * asistencia findFirst
 */
export type asistenciaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which asistencia to fetch.
     */
    where?: Prisma.asistenciaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of asistencias to fetch.
     */
    orderBy?: Prisma.asistenciaOrderByWithRelationInput | Prisma.asistenciaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for asistencias.
     */
    cursor?: Prisma.asistenciaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` asistencias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` asistencias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of asistencias.
     */
    distinct?: Prisma.AsistenciaScalarFieldEnum | Prisma.AsistenciaScalarFieldEnum[];
};
/**
 * asistencia findFirstOrThrow
 */
export type asistenciaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which asistencia to fetch.
     */
    where?: Prisma.asistenciaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of asistencias to fetch.
     */
    orderBy?: Prisma.asistenciaOrderByWithRelationInput | Prisma.asistenciaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for asistencias.
     */
    cursor?: Prisma.asistenciaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` asistencias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` asistencias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of asistencias.
     */
    distinct?: Prisma.AsistenciaScalarFieldEnum | Prisma.AsistenciaScalarFieldEnum[];
};
/**
 * asistencia findMany
 */
export type asistenciaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which asistencias to fetch.
     */
    where?: Prisma.asistenciaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of asistencias to fetch.
     */
    orderBy?: Prisma.asistenciaOrderByWithRelationInput | Prisma.asistenciaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing asistencias.
     */
    cursor?: Prisma.asistenciaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` asistencias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` asistencias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of asistencias.
     */
    distinct?: Prisma.AsistenciaScalarFieldEnum | Prisma.AsistenciaScalarFieldEnum[];
};
/**
 * asistencia create
 */
export type asistenciaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a asistencia.
     */
    data: Prisma.XOR<Prisma.asistenciaCreateInput, Prisma.asistenciaUncheckedCreateInput>;
};
/**
 * asistencia createMany
 */
export type asistenciaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many asistencias.
     */
    data: Prisma.asistenciaCreateManyInput | Prisma.asistenciaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * asistencia update
 */
export type asistenciaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a asistencia.
     */
    data: Prisma.XOR<Prisma.asistenciaUpdateInput, Prisma.asistenciaUncheckedUpdateInput>;
    /**
     * Choose, which asistencia to update.
     */
    where: Prisma.asistenciaWhereUniqueInput;
};
/**
 * asistencia updateMany
 */
export type asistenciaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update asistencias.
     */
    data: Prisma.XOR<Prisma.asistenciaUpdateManyMutationInput, Prisma.asistenciaUncheckedUpdateManyInput>;
    /**
     * Filter which asistencias to update
     */
    where?: Prisma.asistenciaWhereInput;
    /**
     * Limit how many asistencias to update.
     */
    limit?: number;
};
/**
 * asistencia upsert
 */
export type asistenciaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the asistencia to update in case it exists.
     */
    where: Prisma.asistenciaWhereUniqueInput;
    /**
     * In case the asistencia found by the `where` argument doesn't exist, create a new asistencia with this data.
     */
    create: Prisma.XOR<Prisma.asistenciaCreateInput, Prisma.asistenciaUncheckedCreateInput>;
    /**
     * In case the asistencia was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.asistenciaUpdateInput, Prisma.asistenciaUncheckedUpdateInput>;
};
/**
 * asistencia delete
 */
export type asistenciaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which asistencia to delete.
     */
    where: Prisma.asistenciaWhereUniqueInput;
};
/**
 * asistencia deleteMany
 */
export type asistenciaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which asistencias to delete
     */
    where?: Prisma.asistenciaWhereInput;
    /**
     * Limit how many asistencias to delete.
     */
    limit?: number;
};
/**
 * asistencia without action
 */
export type asistenciaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=asistencia.d.ts.map