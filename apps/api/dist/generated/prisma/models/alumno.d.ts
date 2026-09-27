import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model alumno
 *
 */
export type alumnoModel = runtime.Types.Result.DefaultSelection<Prisma.$alumnoPayload>;
export type AggregateAlumno = {
    _count: AlumnoCountAggregateOutputType | null;
    _min: AlumnoMinAggregateOutputType | null;
    _max: AlumnoMaxAggregateOutputType | null;
};
export type AlumnoMinAggregateOutputType = {
    id: string | null;
    personaId: string | null;
    fechaAlta: Date | null;
    fechaBaja: Date | null;
    motivoBaja: $Enums.alumno_motivoBaja | null;
    activo: boolean | null;
    observaciones: string | null;
};
export type AlumnoMaxAggregateOutputType = {
    id: string | null;
    personaId: string | null;
    fechaAlta: Date | null;
    fechaBaja: Date | null;
    motivoBaja: $Enums.alumno_motivoBaja | null;
    activo: boolean | null;
    observaciones: string | null;
};
export type AlumnoCountAggregateOutputType = {
    id: number;
    personaId: number;
    fechaAlta: number;
    fechaBaja: number;
    motivoBaja: number;
    activo: number;
    observaciones: number;
    _all: number;
};
export type AlumnoMinAggregateInputType = {
    id?: true;
    personaId?: true;
    fechaAlta?: true;
    fechaBaja?: true;
    motivoBaja?: true;
    activo?: true;
    observaciones?: true;
};
export type AlumnoMaxAggregateInputType = {
    id?: true;
    personaId?: true;
    fechaAlta?: true;
    fechaBaja?: true;
    motivoBaja?: true;
    activo?: true;
    observaciones?: true;
};
export type AlumnoCountAggregateInputType = {
    id?: true;
    personaId?: true;
    fechaAlta?: true;
    fechaBaja?: true;
    motivoBaja?: true;
    activo?: true;
    observaciones?: true;
    _all?: true;
};
export type AlumnoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which alumno to aggregate.
     */
    where?: Prisma.alumnoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnos to fetch.
     */
    orderBy?: Prisma.alumnoOrderByWithRelationInput | Prisma.alumnoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.alumnoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned alumnos
    **/
    _count?: true | AlumnoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AlumnoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AlumnoMaxAggregateInputType;
};
export type GetAlumnoAggregateType<T extends AlumnoAggregateArgs> = {
    [P in keyof T & keyof AggregateAlumno]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAlumno[P]> : Prisma.GetScalarType<T[P], AggregateAlumno[P]>;
};
export type alumnoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.alumnoWhereInput;
    orderBy?: Prisma.alumnoOrderByWithAggregationInput | Prisma.alumnoOrderByWithAggregationInput[];
    by: Prisma.AlumnoScalarFieldEnum[] | Prisma.AlumnoScalarFieldEnum;
    having?: Prisma.alumnoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AlumnoCountAggregateInputType | true;
    _min?: AlumnoMinAggregateInputType;
    _max?: AlumnoMaxAggregateInputType;
};
export type AlumnoGroupByOutputType = {
    id: string;
    personaId: string;
    fechaAlta: Date;
    fechaBaja: Date | null;
    motivoBaja: $Enums.alumno_motivoBaja | null;
    activo: boolean;
    observaciones: string | null;
    _count: AlumnoCountAggregateOutputType | null;
    _min: AlumnoMinAggregateOutputType | null;
    _max: AlumnoMaxAggregateOutputType | null;
};
export type GetAlumnoGroupByPayload<T extends alumnoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AlumnoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AlumnoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AlumnoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AlumnoGroupByOutputType[P]>;
}>>;
export type alumnoWhereInput = {
    AND?: Prisma.alumnoWhereInput | Prisma.alumnoWhereInput[];
    OR?: Prisma.alumnoWhereInput[];
    NOT?: Prisma.alumnoWhereInput | Prisma.alumnoWhereInput[];
    id?: Prisma.StringFilter<"alumno"> | string;
    personaId?: Prisma.StringFilter<"alumno"> | string;
    fechaAlta?: Prisma.DateTimeFilter<"alumno"> | Date | string;
    fechaBaja?: Prisma.DateTimeNullableFilter<"alumno"> | Date | string | null;
    motivoBaja?: Prisma.Enumalumno_motivoBajaNullableFilter<"alumno"> | $Enums.alumno_motivoBaja | null;
    activo?: Prisma.BoolFilter<"alumno"> | boolean;
    observaciones?: Prisma.StringNullableFilter<"alumno"> | string | null;
    persona?: Prisma.XOR<Prisma.PersonaScalarRelationFilter, Prisma.personaWhereInput>;
    alumnoperiodo?: Prisma.AlumnoperiodoListRelationFilter;
    clase?: Prisma.ClaseListRelationFilter;
    condicioncuota?: Prisma.CondicioncuotaListRelationFilter;
    cuota?: Prisma.CuotaListRelationFilter;
};
export type alumnoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    persona?: Prisma.personaOrderByWithRelationInput;
    alumnoperiodo?: Prisma.alumnoperiodoOrderByRelationAggregateInput;
    clase?: Prisma.claseOrderByRelationAggregateInput;
    condicioncuota?: Prisma.condicioncuotaOrderByRelationAggregateInput;
    cuota?: Prisma.cuotaOrderByRelationAggregateInput;
    _relevance?: Prisma.alumnoOrderByRelevanceInput;
};
export type alumnoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    personaId?: string;
    AND?: Prisma.alumnoWhereInput | Prisma.alumnoWhereInput[];
    OR?: Prisma.alumnoWhereInput[];
    NOT?: Prisma.alumnoWhereInput | Prisma.alumnoWhereInput[];
    fechaAlta?: Prisma.DateTimeFilter<"alumno"> | Date | string;
    fechaBaja?: Prisma.DateTimeNullableFilter<"alumno"> | Date | string | null;
    motivoBaja?: Prisma.Enumalumno_motivoBajaNullableFilter<"alumno"> | $Enums.alumno_motivoBaja | null;
    activo?: Prisma.BoolFilter<"alumno"> | boolean;
    observaciones?: Prisma.StringNullableFilter<"alumno"> | string | null;
    persona?: Prisma.XOR<Prisma.PersonaScalarRelationFilter, Prisma.personaWhereInput>;
    alumnoperiodo?: Prisma.AlumnoperiodoListRelationFilter;
    clase?: Prisma.ClaseListRelationFilter;
    condicioncuota?: Prisma.CondicioncuotaListRelationFilter;
    cuota?: Prisma.CuotaListRelationFilter;
}, "id" | "personaId">;
export type alumnoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.alumnoCountOrderByAggregateInput;
    _max?: Prisma.alumnoMaxOrderByAggregateInput;
    _min?: Prisma.alumnoMinOrderByAggregateInput;
};
export type alumnoScalarWhereWithAggregatesInput = {
    AND?: Prisma.alumnoScalarWhereWithAggregatesInput | Prisma.alumnoScalarWhereWithAggregatesInput[];
    OR?: Prisma.alumnoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.alumnoScalarWhereWithAggregatesInput | Prisma.alumnoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"alumno"> | string;
    personaId?: Prisma.StringWithAggregatesFilter<"alumno"> | string;
    fechaAlta?: Prisma.DateTimeWithAggregatesFilter<"alumno"> | Date | string;
    fechaBaja?: Prisma.DateTimeNullableWithAggregatesFilter<"alumno"> | Date | string | null;
    motivoBaja?: Prisma.Enumalumno_motivoBajaNullableWithAggregatesFilter<"alumno"> | $Enums.alumno_motivoBaja | null;
    activo?: Prisma.BoolWithAggregatesFilter<"alumno"> | boolean;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"alumno"> | string | null;
};
export type alumnoCreateInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.alumno_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    persona: Prisma.personaCreateNestedOneWithoutAlumnoInput;
    alumnoperiodo?: Prisma.alumnoperiodoCreateNestedManyWithoutAlumnoInput;
    clase?: Prisma.claseCreateNestedManyWithoutAlumnoInput;
    condicioncuota?: Prisma.condicioncuotaCreateNestedManyWithoutAlumnoInput;
    cuota?: Prisma.cuotaCreateNestedManyWithoutAlumnoInput;
};
export type alumnoUncheckedCreateInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.alumno_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    alumnoperiodo?: Prisma.alumnoperiodoUncheckedCreateNestedManyWithoutAlumnoInput;
    clase?: Prisma.claseUncheckedCreateNestedManyWithoutAlumnoInput;
    condicioncuota?: Prisma.condicioncuotaUncheckedCreateNestedManyWithoutAlumnoInput;
    cuota?: Prisma.cuotaUncheckedCreateNestedManyWithoutAlumnoInput;
};
export type alumnoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumalumno_motivoBajaFieldUpdateOperationsInput | $Enums.alumno_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    persona?: Prisma.personaUpdateOneRequiredWithoutAlumnoNestedInput;
    alumnoperiodo?: Prisma.alumnoperiodoUpdateManyWithoutAlumnoNestedInput;
    clase?: Prisma.claseUpdateManyWithoutAlumnoNestedInput;
    condicioncuota?: Prisma.condicioncuotaUpdateManyWithoutAlumnoNestedInput;
    cuota?: Prisma.cuotaUpdateManyWithoutAlumnoNestedInput;
};
export type alumnoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumalumno_motivoBajaFieldUpdateOperationsInput | $Enums.alumno_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    alumnoperiodo?: Prisma.alumnoperiodoUncheckedUpdateManyWithoutAlumnoNestedInput;
    clase?: Prisma.claseUncheckedUpdateManyWithoutAlumnoNestedInput;
    condicioncuota?: Prisma.condicioncuotaUncheckedUpdateManyWithoutAlumnoNestedInput;
    cuota?: Prisma.cuotaUncheckedUpdateManyWithoutAlumnoNestedInput;
};
export type alumnoCreateManyInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.alumno_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
};
export type alumnoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumalumno_motivoBajaFieldUpdateOperationsInput | $Enums.alumno_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type alumnoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumalumno_motivoBajaFieldUpdateOperationsInput | $Enums.alumno_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type alumnoOrderByRelevanceInput = {
    fields: Prisma.alumnoOrderByRelevanceFieldEnum | Prisma.alumnoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type alumnoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
};
export type alumnoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
};
export type alumnoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrder;
    motivoBaja?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
};
export type AlumnoScalarRelationFilter = {
    is?: Prisma.alumnoWhereInput;
    isNot?: Prisma.alumnoWhereInput;
};
export type AlumnoNullableScalarRelationFilter = {
    is?: Prisma.alumnoWhereInput | null;
    isNot?: Prisma.alumnoWhereInput | null;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableEnumalumno_motivoBajaFieldUpdateOperationsInput = {
    set?: $Enums.alumno_motivoBaja | null;
};
export type alumnoCreateNestedOneWithoutClaseInput = {
    create?: Prisma.XOR<Prisma.alumnoCreateWithoutClaseInput, Prisma.alumnoUncheckedCreateWithoutClaseInput>;
    connectOrCreate?: Prisma.alumnoCreateOrConnectWithoutClaseInput;
    connect?: Prisma.alumnoWhereUniqueInput;
};
export type alumnoUpdateOneRequiredWithoutClaseNestedInput = {
    create?: Prisma.XOR<Prisma.alumnoCreateWithoutClaseInput, Prisma.alumnoUncheckedCreateWithoutClaseInput>;
    connectOrCreate?: Prisma.alumnoCreateOrConnectWithoutClaseInput;
    upsert?: Prisma.alumnoUpsertWithoutClaseInput;
    connect?: Prisma.alumnoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.alumnoUpdateToOneWithWhereWithoutClaseInput, Prisma.alumnoUpdateWithoutClaseInput>, Prisma.alumnoUncheckedUpdateWithoutClaseInput>;
};
export type alumnoCreateNestedOneWithoutCondicioncuotaInput = {
    create?: Prisma.XOR<Prisma.alumnoCreateWithoutCondicioncuotaInput, Prisma.alumnoUncheckedCreateWithoutCondicioncuotaInput>;
    connectOrCreate?: Prisma.alumnoCreateOrConnectWithoutCondicioncuotaInput;
    connect?: Prisma.alumnoWhereUniqueInput;
};
export type alumnoUpdateOneRequiredWithoutCondicioncuotaNestedInput = {
    create?: Prisma.XOR<Prisma.alumnoCreateWithoutCondicioncuotaInput, Prisma.alumnoUncheckedCreateWithoutCondicioncuotaInput>;
    connectOrCreate?: Prisma.alumnoCreateOrConnectWithoutCondicioncuotaInput;
    upsert?: Prisma.alumnoUpsertWithoutCondicioncuotaInput;
    connect?: Prisma.alumnoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.alumnoUpdateToOneWithWhereWithoutCondicioncuotaInput, Prisma.alumnoUpdateWithoutCondicioncuotaInput>, Prisma.alumnoUncheckedUpdateWithoutCondicioncuotaInput>;
};
export type alumnoCreateNestedOneWithoutCuotaInput = {
    create?: Prisma.XOR<Prisma.alumnoCreateWithoutCuotaInput, Prisma.alumnoUncheckedCreateWithoutCuotaInput>;
    connectOrCreate?: Prisma.alumnoCreateOrConnectWithoutCuotaInput;
    connect?: Prisma.alumnoWhereUniqueInput;
};
export type alumnoUpdateOneRequiredWithoutCuotaNestedInput = {
    create?: Prisma.XOR<Prisma.alumnoCreateWithoutCuotaInput, Prisma.alumnoUncheckedCreateWithoutCuotaInput>;
    connectOrCreate?: Prisma.alumnoCreateOrConnectWithoutCuotaInput;
    upsert?: Prisma.alumnoUpsertWithoutCuotaInput;
    connect?: Prisma.alumnoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.alumnoUpdateToOneWithWhereWithoutCuotaInput, Prisma.alumnoUpdateWithoutCuotaInput>, Prisma.alumnoUncheckedUpdateWithoutCuotaInput>;
};
export type alumnoCreateNestedOneWithoutPersonaInput = {
    create?: Prisma.XOR<Prisma.alumnoCreateWithoutPersonaInput, Prisma.alumnoUncheckedCreateWithoutPersonaInput>;
    connectOrCreate?: Prisma.alumnoCreateOrConnectWithoutPersonaInput;
    connect?: Prisma.alumnoWhereUniqueInput;
};
export type alumnoUncheckedCreateNestedOneWithoutPersonaInput = {
    create?: Prisma.XOR<Prisma.alumnoCreateWithoutPersonaInput, Prisma.alumnoUncheckedCreateWithoutPersonaInput>;
    connectOrCreate?: Prisma.alumnoCreateOrConnectWithoutPersonaInput;
    connect?: Prisma.alumnoWhereUniqueInput;
};
export type alumnoUpdateOneWithoutPersonaNestedInput = {
    create?: Prisma.XOR<Prisma.alumnoCreateWithoutPersonaInput, Prisma.alumnoUncheckedCreateWithoutPersonaInput>;
    connectOrCreate?: Prisma.alumnoCreateOrConnectWithoutPersonaInput;
    upsert?: Prisma.alumnoUpsertWithoutPersonaInput;
    disconnect?: Prisma.alumnoWhereInput | boolean;
    delete?: Prisma.alumnoWhereInput | boolean;
    connect?: Prisma.alumnoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.alumnoUpdateToOneWithWhereWithoutPersonaInput, Prisma.alumnoUpdateWithoutPersonaInput>, Prisma.alumnoUncheckedUpdateWithoutPersonaInput>;
};
export type alumnoUncheckedUpdateOneWithoutPersonaNestedInput = {
    create?: Prisma.XOR<Prisma.alumnoCreateWithoutPersonaInput, Prisma.alumnoUncheckedCreateWithoutPersonaInput>;
    connectOrCreate?: Prisma.alumnoCreateOrConnectWithoutPersonaInput;
    upsert?: Prisma.alumnoUpsertWithoutPersonaInput;
    disconnect?: Prisma.alumnoWhereInput | boolean;
    delete?: Prisma.alumnoWhereInput | boolean;
    connect?: Prisma.alumnoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.alumnoUpdateToOneWithWhereWithoutPersonaInput, Prisma.alumnoUpdateWithoutPersonaInput>, Prisma.alumnoUncheckedUpdateWithoutPersonaInput>;
};
export type alumnoCreateNestedOneWithoutAlumnoperiodoInput = {
    create?: Prisma.XOR<Prisma.alumnoCreateWithoutAlumnoperiodoInput, Prisma.alumnoUncheckedCreateWithoutAlumnoperiodoInput>;
    connectOrCreate?: Prisma.alumnoCreateOrConnectWithoutAlumnoperiodoInput;
    connect?: Prisma.alumnoWhereUniqueInput;
};
export type alumnoUpdateOneRequiredWithoutAlumnoperiodoNestedInput = {
    create?: Prisma.XOR<Prisma.alumnoCreateWithoutAlumnoperiodoInput, Prisma.alumnoUncheckedCreateWithoutAlumnoperiodoInput>;
    connectOrCreate?: Prisma.alumnoCreateOrConnectWithoutAlumnoperiodoInput;
    upsert?: Prisma.alumnoUpsertWithoutAlumnoperiodoInput;
    connect?: Prisma.alumnoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.alumnoUpdateToOneWithWhereWithoutAlumnoperiodoInput, Prisma.alumnoUpdateWithoutAlumnoperiodoInput>, Prisma.alumnoUncheckedUpdateWithoutAlumnoperiodoInput>;
};
export type alumnoCreateWithoutClaseInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.alumno_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    persona: Prisma.personaCreateNestedOneWithoutAlumnoInput;
    alumnoperiodo?: Prisma.alumnoperiodoCreateNestedManyWithoutAlumnoInput;
    condicioncuota?: Prisma.condicioncuotaCreateNestedManyWithoutAlumnoInput;
    cuota?: Prisma.cuotaCreateNestedManyWithoutAlumnoInput;
};
export type alumnoUncheckedCreateWithoutClaseInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.alumno_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    alumnoperiodo?: Prisma.alumnoperiodoUncheckedCreateNestedManyWithoutAlumnoInput;
    condicioncuota?: Prisma.condicioncuotaUncheckedCreateNestedManyWithoutAlumnoInput;
    cuota?: Prisma.cuotaUncheckedCreateNestedManyWithoutAlumnoInput;
};
export type alumnoCreateOrConnectWithoutClaseInput = {
    where: Prisma.alumnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.alumnoCreateWithoutClaseInput, Prisma.alumnoUncheckedCreateWithoutClaseInput>;
};
export type alumnoUpsertWithoutClaseInput = {
    update: Prisma.XOR<Prisma.alumnoUpdateWithoutClaseInput, Prisma.alumnoUncheckedUpdateWithoutClaseInput>;
    create: Prisma.XOR<Prisma.alumnoCreateWithoutClaseInput, Prisma.alumnoUncheckedCreateWithoutClaseInput>;
    where?: Prisma.alumnoWhereInput;
};
export type alumnoUpdateToOneWithWhereWithoutClaseInput = {
    where?: Prisma.alumnoWhereInput;
    data: Prisma.XOR<Prisma.alumnoUpdateWithoutClaseInput, Prisma.alumnoUncheckedUpdateWithoutClaseInput>;
};
export type alumnoUpdateWithoutClaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumalumno_motivoBajaFieldUpdateOperationsInput | $Enums.alumno_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    persona?: Prisma.personaUpdateOneRequiredWithoutAlumnoNestedInput;
    alumnoperiodo?: Prisma.alumnoperiodoUpdateManyWithoutAlumnoNestedInput;
    condicioncuota?: Prisma.condicioncuotaUpdateManyWithoutAlumnoNestedInput;
    cuota?: Prisma.cuotaUpdateManyWithoutAlumnoNestedInput;
};
export type alumnoUncheckedUpdateWithoutClaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumalumno_motivoBajaFieldUpdateOperationsInput | $Enums.alumno_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    alumnoperiodo?: Prisma.alumnoperiodoUncheckedUpdateManyWithoutAlumnoNestedInput;
    condicioncuota?: Prisma.condicioncuotaUncheckedUpdateManyWithoutAlumnoNestedInput;
    cuota?: Prisma.cuotaUncheckedUpdateManyWithoutAlumnoNestedInput;
};
export type alumnoCreateWithoutCondicioncuotaInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.alumno_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    persona: Prisma.personaCreateNestedOneWithoutAlumnoInput;
    alumnoperiodo?: Prisma.alumnoperiodoCreateNestedManyWithoutAlumnoInput;
    clase?: Prisma.claseCreateNestedManyWithoutAlumnoInput;
    cuota?: Prisma.cuotaCreateNestedManyWithoutAlumnoInput;
};
export type alumnoUncheckedCreateWithoutCondicioncuotaInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.alumno_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    alumnoperiodo?: Prisma.alumnoperiodoUncheckedCreateNestedManyWithoutAlumnoInput;
    clase?: Prisma.claseUncheckedCreateNestedManyWithoutAlumnoInput;
    cuota?: Prisma.cuotaUncheckedCreateNestedManyWithoutAlumnoInput;
};
export type alumnoCreateOrConnectWithoutCondicioncuotaInput = {
    where: Prisma.alumnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.alumnoCreateWithoutCondicioncuotaInput, Prisma.alumnoUncheckedCreateWithoutCondicioncuotaInput>;
};
export type alumnoUpsertWithoutCondicioncuotaInput = {
    update: Prisma.XOR<Prisma.alumnoUpdateWithoutCondicioncuotaInput, Prisma.alumnoUncheckedUpdateWithoutCondicioncuotaInput>;
    create: Prisma.XOR<Prisma.alumnoCreateWithoutCondicioncuotaInput, Prisma.alumnoUncheckedCreateWithoutCondicioncuotaInput>;
    where?: Prisma.alumnoWhereInput;
};
export type alumnoUpdateToOneWithWhereWithoutCondicioncuotaInput = {
    where?: Prisma.alumnoWhereInput;
    data: Prisma.XOR<Prisma.alumnoUpdateWithoutCondicioncuotaInput, Prisma.alumnoUncheckedUpdateWithoutCondicioncuotaInput>;
};
export type alumnoUpdateWithoutCondicioncuotaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumalumno_motivoBajaFieldUpdateOperationsInput | $Enums.alumno_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    persona?: Prisma.personaUpdateOneRequiredWithoutAlumnoNestedInput;
    alumnoperiodo?: Prisma.alumnoperiodoUpdateManyWithoutAlumnoNestedInput;
    clase?: Prisma.claseUpdateManyWithoutAlumnoNestedInput;
    cuota?: Prisma.cuotaUpdateManyWithoutAlumnoNestedInput;
};
export type alumnoUncheckedUpdateWithoutCondicioncuotaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumalumno_motivoBajaFieldUpdateOperationsInput | $Enums.alumno_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    alumnoperiodo?: Prisma.alumnoperiodoUncheckedUpdateManyWithoutAlumnoNestedInput;
    clase?: Prisma.claseUncheckedUpdateManyWithoutAlumnoNestedInput;
    cuota?: Prisma.cuotaUncheckedUpdateManyWithoutAlumnoNestedInput;
};
export type alumnoCreateWithoutCuotaInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.alumno_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    persona: Prisma.personaCreateNestedOneWithoutAlumnoInput;
    alumnoperiodo?: Prisma.alumnoperiodoCreateNestedManyWithoutAlumnoInput;
    clase?: Prisma.claseCreateNestedManyWithoutAlumnoInput;
    condicioncuota?: Prisma.condicioncuotaCreateNestedManyWithoutAlumnoInput;
};
export type alumnoUncheckedCreateWithoutCuotaInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.alumno_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    alumnoperiodo?: Prisma.alumnoperiodoUncheckedCreateNestedManyWithoutAlumnoInput;
    clase?: Prisma.claseUncheckedCreateNestedManyWithoutAlumnoInput;
    condicioncuota?: Prisma.condicioncuotaUncheckedCreateNestedManyWithoutAlumnoInput;
};
export type alumnoCreateOrConnectWithoutCuotaInput = {
    where: Prisma.alumnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.alumnoCreateWithoutCuotaInput, Prisma.alumnoUncheckedCreateWithoutCuotaInput>;
};
export type alumnoUpsertWithoutCuotaInput = {
    update: Prisma.XOR<Prisma.alumnoUpdateWithoutCuotaInput, Prisma.alumnoUncheckedUpdateWithoutCuotaInput>;
    create: Prisma.XOR<Prisma.alumnoCreateWithoutCuotaInput, Prisma.alumnoUncheckedCreateWithoutCuotaInput>;
    where?: Prisma.alumnoWhereInput;
};
export type alumnoUpdateToOneWithWhereWithoutCuotaInput = {
    where?: Prisma.alumnoWhereInput;
    data: Prisma.XOR<Prisma.alumnoUpdateWithoutCuotaInput, Prisma.alumnoUncheckedUpdateWithoutCuotaInput>;
};
export type alumnoUpdateWithoutCuotaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumalumno_motivoBajaFieldUpdateOperationsInput | $Enums.alumno_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    persona?: Prisma.personaUpdateOneRequiredWithoutAlumnoNestedInput;
    alumnoperiodo?: Prisma.alumnoperiodoUpdateManyWithoutAlumnoNestedInput;
    clase?: Prisma.claseUpdateManyWithoutAlumnoNestedInput;
    condicioncuota?: Prisma.condicioncuotaUpdateManyWithoutAlumnoNestedInput;
};
export type alumnoUncheckedUpdateWithoutCuotaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumalumno_motivoBajaFieldUpdateOperationsInput | $Enums.alumno_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    alumnoperiodo?: Prisma.alumnoperiodoUncheckedUpdateManyWithoutAlumnoNestedInput;
    clase?: Prisma.claseUncheckedUpdateManyWithoutAlumnoNestedInput;
    condicioncuota?: Prisma.condicioncuotaUncheckedUpdateManyWithoutAlumnoNestedInput;
};
export type alumnoCreateWithoutPersonaInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.alumno_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    alumnoperiodo?: Prisma.alumnoperiodoCreateNestedManyWithoutAlumnoInput;
    clase?: Prisma.claseCreateNestedManyWithoutAlumnoInput;
    condicioncuota?: Prisma.condicioncuotaCreateNestedManyWithoutAlumnoInput;
    cuota?: Prisma.cuotaCreateNestedManyWithoutAlumnoInput;
};
export type alumnoUncheckedCreateWithoutPersonaInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.alumno_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    alumnoperiodo?: Prisma.alumnoperiodoUncheckedCreateNestedManyWithoutAlumnoInput;
    clase?: Prisma.claseUncheckedCreateNestedManyWithoutAlumnoInput;
    condicioncuota?: Prisma.condicioncuotaUncheckedCreateNestedManyWithoutAlumnoInput;
    cuota?: Prisma.cuotaUncheckedCreateNestedManyWithoutAlumnoInput;
};
export type alumnoCreateOrConnectWithoutPersonaInput = {
    where: Prisma.alumnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.alumnoCreateWithoutPersonaInput, Prisma.alumnoUncheckedCreateWithoutPersonaInput>;
};
export type alumnoUpsertWithoutPersonaInput = {
    update: Prisma.XOR<Prisma.alumnoUpdateWithoutPersonaInput, Prisma.alumnoUncheckedUpdateWithoutPersonaInput>;
    create: Prisma.XOR<Prisma.alumnoCreateWithoutPersonaInput, Prisma.alumnoUncheckedCreateWithoutPersonaInput>;
    where?: Prisma.alumnoWhereInput;
};
export type alumnoUpdateToOneWithWhereWithoutPersonaInput = {
    where?: Prisma.alumnoWhereInput;
    data: Prisma.XOR<Prisma.alumnoUpdateWithoutPersonaInput, Prisma.alumnoUncheckedUpdateWithoutPersonaInput>;
};
export type alumnoUpdateWithoutPersonaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumalumno_motivoBajaFieldUpdateOperationsInput | $Enums.alumno_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    alumnoperiodo?: Prisma.alumnoperiodoUpdateManyWithoutAlumnoNestedInput;
    clase?: Prisma.claseUpdateManyWithoutAlumnoNestedInput;
    condicioncuota?: Prisma.condicioncuotaUpdateManyWithoutAlumnoNestedInput;
    cuota?: Prisma.cuotaUpdateManyWithoutAlumnoNestedInput;
};
export type alumnoUncheckedUpdateWithoutPersonaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumalumno_motivoBajaFieldUpdateOperationsInput | $Enums.alumno_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    alumnoperiodo?: Prisma.alumnoperiodoUncheckedUpdateManyWithoutAlumnoNestedInput;
    clase?: Prisma.claseUncheckedUpdateManyWithoutAlumnoNestedInput;
    condicioncuota?: Prisma.condicioncuotaUncheckedUpdateManyWithoutAlumnoNestedInput;
    cuota?: Prisma.cuotaUncheckedUpdateManyWithoutAlumnoNestedInput;
};
export type alumnoCreateWithoutAlumnoperiodoInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.alumno_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    persona: Prisma.personaCreateNestedOneWithoutAlumnoInput;
    clase?: Prisma.claseCreateNestedManyWithoutAlumnoInput;
    condicioncuota?: Prisma.condicioncuotaCreateNestedManyWithoutAlumnoInput;
    cuota?: Prisma.cuotaCreateNestedManyWithoutAlumnoInput;
};
export type alumnoUncheckedCreateWithoutAlumnoperiodoInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    motivoBaja?: $Enums.alumno_motivoBaja | null;
    activo?: boolean;
    observaciones?: string | null;
    clase?: Prisma.claseUncheckedCreateNestedManyWithoutAlumnoInput;
    condicioncuota?: Prisma.condicioncuotaUncheckedCreateNestedManyWithoutAlumnoInput;
    cuota?: Prisma.cuotaUncheckedCreateNestedManyWithoutAlumnoInput;
};
export type alumnoCreateOrConnectWithoutAlumnoperiodoInput = {
    where: Prisma.alumnoWhereUniqueInput;
    create: Prisma.XOR<Prisma.alumnoCreateWithoutAlumnoperiodoInput, Prisma.alumnoUncheckedCreateWithoutAlumnoperiodoInput>;
};
export type alumnoUpsertWithoutAlumnoperiodoInput = {
    update: Prisma.XOR<Prisma.alumnoUpdateWithoutAlumnoperiodoInput, Prisma.alumnoUncheckedUpdateWithoutAlumnoperiodoInput>;
    create: Prisma.XOR<Prisma.alumnoCreateWithoutAlumnoperiodoInput, Prisma.alumnoUncheckedCreateWithoutAlumnoperiodoInput>;
    where?: Prisma.alumnoWhereInput;
};
export type alumnoUpdateToOneWithWhereWithoutAlumnoperiodoInput = {
    where?: Prisma.alumnoWhereInput;
    data: Prisma.XOR<Prisma.alumnoUpdateWithoutAlumnoperiodoInput, Prisma.alumnoUncheckedUpdateWithoutAlumnoperiodoInput>;
};
export type alumnoUpdateWithoutAlumnoperiodoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumalumno_motivoBajaFieldUpdateOperationsInput | $Enums.alumno_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    persona?: Prisma.personaUpdateOneRequiredWithoutAlumnoNestedInput;
    clase?: Prisma.claseUpdateManyWithoutAlumnoNestedInput;
    condicioncuota?: Prisma.condicioncuotaUpdateManyWithoutAlumnoNestedInput;
    cuota?: Prisma.cuotaUpdateManyWithoutAlumnoNestedInput;
};
export type alumnoUncheckedUpdateWithoutAlumnoperiodoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoBaja?: Prisma.NullableEnumalumno_motivoBajaFieldUpdateOperationsInput | $Enums.alumno_motivoBaja | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    clase?: Prisma.claseUncheckedUpdateManyWithoutAlumnoNestedInput;
    condicioncuota?: Prisma.condicioncuotaUncheckedUpdateManyWithoutAlumnoNestedInput;
    cuota?: Prisma.cuotaUncheckedUpdateManyWithoutAlumnoNestedInput;
};
/**
 * Count Type AlumnoCountOutputType
 */
export type AlumnoCountOutputType = {
    alumnoperiodo: number;
    clase: number;
    condicioncuota: number;
    cuota: number;
};
export type AlumnoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    alumnoperiodo?: boolean | AlumnoCountOutputTypeCountAlumnoperiodoArgs;
    clase?: boolean | AlumnoCountOutputTypeCountClaseArgs;
    condicioncuota?: boolean | AlumnoCountOutputTypeCountCondicioncuotaArgs;
    cuota?: boolean | AlumnoCountOutputTypeCountCuotaArgs;
};
/**
 * AlumnoCountOutputType without action
 */
export type AlumnoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlumnoCountOutputType
     */
    select?: Prisma.AlumnoCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AlumnoCountOutputType without action
 */
export type AlumnoCountOutputTypeCountAlumnoperiodoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.alumnoperiodoWhereInput;
};
/**
 * AlumnoCountOutputType without action
 */
export type AlumnoCountOutputTypeCountClaseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.claseWhereInput;
};
/**
 * AlumnoCountOutputType without action
 */
export type AlumnoCountOutputTypeCountCondicioncuotaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.condicioncuotaWhereInput;
};
/**
 * AlumnoCountOutputType without action
 */
export type AlumnoCountOutputTypeCountCuotaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cuotaWhereInput;
};
export type alumnoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    personaId?: boolean;
    fechaAlta?: boolean;
    fechaBaja?: boolean;
    motivoBaja?: boolean;
    activo?: boolean;
    observaciones?: boolean;
    persona?: boolean | Prisma.personaDefaultArgs<ExtArgs>;
    alumnoperiodo?: boolean | Prisma.alumno$alumnoperiodoArgs<ExtArgs>;
    clase?: boolean | Prisma.alumno$claseArgs<ExtArgs>;
    condicioncuota?: boolean | Prisma.alumno$condicioncuotaArgs<ExtArgs>;
    cuota?: boolean | Prisma.alumno$cuotaArgs<ExtArgs>;
    _count?: boolean | Prisma.AlumnoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["alumno"]>;
export type alumnoSelectScalar = {
    id?: boolean;
    personaId?: boolean;
    fechaAlta?: boolean;
    fechaBaja?: boolean;
    motivoBaja?: boolean;
    activo?: boolean;
    observaciones?: boolean;
};
export type alumnoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "personaId" | "fechaAlta" | "fechaBaja" | "motivoBaja" | "activo" | "observaciones", ExtArgs["result"]["alumno"]>;
export type alumnoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    persona?: boolean | Prisma.personaDefaultArgs<ExtArgs>;
    alumnoperiodo?: boolean | Prisma.alumno$alumnoperiodoArgs<ExtArgs>;
    clase?: boolean | Prisma.alumno$claseArgs<ExtArgs>;
    condicioncuota?: boolean | Prisma.alumno$condicioncuotaArgs<ExtArgs>;
    cuota?: boolean | Prisma.alumno$cuotaArgs<ExtArgs>;
    _count?: boolean | Prisma.AlumnoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $alumnoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "alumno";
    objects: {
        persona: Prisma.$personaPayload<ExtArgs>;
        alumnoperiodo: Prisma.$alumnoperiodoPayload<ExtArgs>[];
        clase: Prisma.$clasePayload<ExtArgs>[];
        condicioncuota: Prisma.$condicioncuotaPayload<ExtArgs>[];
        cuota: Prisma.$cuotaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        personaId: string;
        fechaAlta: Date;
        fechaBaja: Date | null;
        motivoBaja: $Enums.alumno_motivoBaja | null;
        activo: boolean;
        observaciones: string | null;
    }, ExtArgs["result"]["alumno"]>;
    composites: {};
};
export type alumnoGetPayload<S extends boolean | null | undefined | alumnoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$alumnoPayload, S>;
export type alumnoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<alumnoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AlumnoCountAggregateInputType | true;
};
export interface alumnoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['alumno'];
        meta: {
            name: 'alumno';
        };
    };
    /**
     * Find zero or one Alumno that matches the filter.
     * @param {alumnoFindUniqueArgs} args - Arguments to find a Alumno
     * @example
     * // Get one Alumno
     * const alumno = await prisma.alumno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends alumnoFindUniqueArgs>(args: Prisma.SelectSubset<T, alumnoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__alumnoClient<runtime.Types.Result.GetResult<Prisma.$alumnoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Alumno that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {alumnoFindUniqueOrThrowArgs} args - Arguments to find a Alumno
     * @example
     * // Get one Alumno
     * const alumno = await prisma.alumno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends alumnoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, alumnoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__alumnoClient<runtime.Types.Result.GetResult<Prisma.$alumnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Alumno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnoFindFirstArgs} args - Arguments to find a Alumno
     * @example
     * // Get one Alumno
     * const alumno = await prisma.alumno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends alumnoFindFirstArgs>(args?: Prisma.SelectSubset<T, alumnoFindFirstArgs<ExtArgs>>): Prisma.Prisma__alumnoClient<runtime.Types.Result.GetResult<Prisma.$alumnoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Alumno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnoFindFirstOrThrowArgs} args - Arguments to find a Alumno
     * @example
     * // Get one Alumno
     * const alumno = await prisma.alumno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends alumnoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, alumnoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__alumnoClient<runtime.Types.Result.GetResult<Prisma.$alumnoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Alumnos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alumnos
     * const alumnos = await prisma.alumno.findMany()
     *
     * // Get first 10 Alumnos
     * const alumnos = await prisma.alumno.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const alumnoWithIdOnly = await prisma.alumno.findMany({ select: { id: true } })
     *
     */
    findMany<T extends alumnoFindManyArgs>(args?: Prisma.SelectSubset<T, alumnoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$alumnoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Alumno.
     * @param {alumnoCreateArgs} args - Arguments to create a Alumno.
     * @example
     * // Create one Alumno
     * const Alumno = await prisma.alumno.create({
     *   data: {
     *     // ... data to create a Alumno
     *   }
     * })
     *
     */
    create<T extends alumnoCreateArgs>(args: Prisma.SelectSubset<T, alumnoCreateArgs<ExtArgs>>): Prisma.Prisma__alumnoClient<runtime.Types.Result.GetResult<Prisma.$alumnoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Alumnos.
     * @param {alumnoCreateManyArgs} args - Arguments to create many Alumnos.
     * @example
     * // Create many Alumnos
     * const alumno = await prisma.alumno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends alumnoCreateManyArgs>(args?: Prisma.SelectSubset<T, alumnoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Alumno.
     * @param {alumnoDeleteArgs} args - Arguments to delete one Alumno.
     * @example
     * // Delete one Alumno
     * const Alumno = await prisma.alumno.delete({
     *   where: {
     *     // ... filter to delete one Alumno
     *   }
     * })
     *
     */
    delete<T extends alumnoDeleteArgs>(args: Prisma.SelectSubset<T, alumnoDeleteArgs<ExtArgs>>): Prisma.Prisma__alumnoClient<runtime.Types.Result.GetResult<Prisma.$alumnoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Alumno.
     * @param {alumnoUpdateArgs} args - Arguments to update one Alumno.
     * @example
     * // Update one Alumno
     * const alumno = await prisma.alumno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends alumnoUpdateArgs>(args: Prisma.SelectSubset<T, alumnoUpdateArgs<ExtArgs>>): Prisma.Prisma__alumnoClient<runtime.Types.Result.GetResult<Prisma.$alumnoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Alumnos.
     * @param {alumnoDeleteManyArgs} args - Arguments to filter Alumnos to delete.
     * @example
     * // Delete a few Alumnos
     * const { count } = await prisma.alumno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends alumnoDeleteManyArgs>(args?: Prisma.SelectSubset<T, alumnoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Alumnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alumnos
     * const alumno = await prisma.alumno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends alumnoUpdateManyArgs>(args: Prisma.SelectSubset<T, alumnoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Alumno.
     * @param {alumnoUpsertArgs} args - Arguments to update or create a Alumno.
     * @example
     * // Update or create a Alumno
     * const alumno = await prisma.alumno.upsert({
     *   create: {
     *     // ... data to create a Alumno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alumno we want to update
     *   }
     * })
     */
    upsert<T extends alumnoUpsertArgs>(args: Prisma.SelectSubset<T, alumnoUpsertArgs<ExtArgs>>): Prisma.Prisma__alumnoClient<runtime.Types.Result.GetResult<Prisma.$alumnoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Alumnos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnoCountArgs} args - Arguments to filter Alumnos to count.
     * @example
     * // Count the number of Alumnos
     * const count = await prisma.alumno.count({
     *   where: {
     *     // ... the filter for the Alumnos we want to count
     *   }
     * })
    **/
    count<T extends alumnoCountArgs>(args?: Prisma.Subset<T, alumnoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AlumnoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Alumno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlumnoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlumnoAggregateArgs>(args: Prisma.Subset<T, AlumnoAggregateArgs>): Prisma.PrismaPromise<GetAlumnoAggregateType<T>>;
    /**
     * Group by Alumno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alumnoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends alumnoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: alumnoGroupByArgs['orderBy'];
    } : {
        orderBy?: alumnoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, alumnoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlumnoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the alumno model
     */
    readonly fields: alumnoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for alumno.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__alumnoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    persona<T extends Prisma.personaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.personaDefaultArgs<ExtArgs>>): Prisma.Prisma__personaClient<runtime.Types.Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    alumnoperiodo<T extends Prisma.alumno$alumnoperiodoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.alumno$alumnoperiodoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$alumnoperiodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    clase<T extends Prisma.alumno$claseArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.alumno$claseArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$clasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    condicioncuota<T extends Prisma.alumno$condicioncuotaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.alumno$condicioncuotaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$condicioncuotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cuota<T extends Prisma.alumno$cuotaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.alumno$cuotaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cuotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the alumno model
 */
export interface alumnoFieldRefs {
    readonly id: Prisma.FieldRef<"alumno", 'String'>;
    readonly personaId: Prisma.FieldRef<"alumno", 'String'>;
    readonly fechaAlta: Prisma.FieldRef<"alumno", 'DateTime'>;
    readonly fechaBaja: Prisma.FieldRef<"alumno", 'DateTime'>;
    readonly motivoBaja: Prisma.FieldRef<"alumno", 'alumno_motivoBaja'>;
    readonly activo: Prisma.FieldRef<"alumno", 'Boolean'>;
    readonly observaciones: Prisma.FieldRef<"alumno", 'String'>;
}
/**
 * alumno findUnique
 */
export type alumnoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumno
     */
    select?: Prisma.alumnoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumno
     */
    omit?: Prisma.alumnoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.alumnoInclude<ExtArgs> | null;
    /**
     * Filter, which alumno to fetch.
     */
    where: Prisma.alumnoWhereUniqueInput;
};
/**
 * alumno findUniqueOrThrow
 */
export type alumnoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumno
     */
    select?: Prisma.alumnoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumno
     */
    omit?: Prisma.alumnoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.alumnoInclude<ExtArgs> | null;
    /**
     * Filter, which alumno to fetch.
     */
    where: Prisma.alumnoWhereUniqueInput;
};
/**
 * alumno findFirst
 */
export type alumnoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumno
     */
    select?: Prisma.alumnoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumno
     */
    omit?: Prisma.alumnoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.alumnoInclude<ExtArgs> | null;
    /**
     * Filter, which alumno to fetch.
     */
    where?: Prisma.alumnoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnos to fetch.
     */
    orderBy?: Prisma.alumnoOrderByWithRelationInput | Prisma.alumnoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for alumnos.
     */
    cursor?: Prisma.alumnoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of alumnos.
     */
    distinct?: Prisma.AlumnoScalarFieldEnum | Prisma.AlumnoScalarFieldEnum[];
};
/**
 * alumno findFirstOrThrow
 */
export type alumnoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumno
     */
    select?: Prisma.alumnoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumno
     */
    omit?: Prisma.alumnoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.alumnoInclude<ExtArgs> | null;
    /**
     * Filter, which alumno to fetch.
     */
    where?: Prisma.alumnoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnos to fetch.
     */
    orderBy?: Prisma.alumnoOrderByWithRelationInput | Prisma.alumnoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for alumnos.
     */
    cursor?: Prisma.alumnoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of alumnos.
     */
    distinct?: Prisma.AlumnoScalarFieldEnum | Prisma.AlumnoScalarFieldEnum[];
};
/**
 * alumno findMany
 */
export type alumnoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumno
     */
    select?: Prisma.alumnoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumno
     */
    omit?: Prisma.alumnoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.alumnoInclude<ExtArgs> | null;
    /**
     * Filter, which alumnos to fetch.
     */
    where?: Prisma.alumnoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of alumnos to fetch.
     */
    orderBy?: Prisma.alumnoOrderByWithRelationInput | Prisma.alumnoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing alumnos.
     */
    cursor?: Prisma.alumnoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` alumnos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` alumnos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of alumnos.
     */
    distinct?: Prisma.AlumnoScalarFieldEnum | Prisma.AlumnoScalarFieldEnum[];
};
/**
 * alumno create
 */
export type alumnoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumno
     */
    select?: Prisma.alumnoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumno
     */
    omit?: Prisma.alumnoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.alumnoInclude<ExtArgs> | null;
    /**
     * The data needed to create a alumno.
     */
    data: Prisma.XOR<Prisma.alumnoCreateInput, Prisma.alumnoUncheckedCreateInput>;
};
/**
 * alumno createMany
 */
export type alumnoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many alumnos.
     */
    data: Prisma.alumnoCreateManyInput | Prisma.alumnoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * alumno update
 */
export type alumnoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumno
     */
    select?: Prisma.alumnoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumno
     */
    omit?: Prisma.alumnoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.alumnoInclude<ExtArgs> | null;
    /**
     * The data needed to update a alumno.
     */
    data: Prisma.XOR<Prisma.alumnoUpdateInput, Prisma.alumnoUncheckedUpdateInput>;
    /**
     * Choose, which alumno to update.
     */
    where: Prisma.alumnoWhereUniqueInput;
};
/**
 * alumno updateMany
 */
export type alumnoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update alumnos.
     */
    data: Prisma.XOR<Prisma.alumnoUpdateManyMutationInput, Prisma.alumnoUncheckedUpdateManyInput>;
    /**
     * Filter which alumnos to update
     */
    where?: Prisma.alumnoWhereInput;
    /**
     * Limit how many alumnos to update.
     */
    limit?: number;
};
/**
 * alumno upsert
 */
export type alumnoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumno
     */
    select?: Prisma.alumnoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumno
     */
    omit?: Prisma.alumnoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.alumnoInclude<ExtArgs> | null;
    /**
     * The filter to search for the alumno to update in case it exists.
     */
    where: Prisma.alumnoWhereUniqueInput;
    /**
     * In case the alumno found by the `where` argument doesn't exist, create a new alumno with this data.
     */
    create: Prisma.XOR<Prisma.alumnoCreateInput, Prisma.alumnoUncheckedCreateInput>;
    /**
     * In case the alumno was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.alumnoUpdateInput, Prisma.alumnoUncheckedUpdateInput>;
};
/**
 * alumno delete
 */
export type alumnoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumno
     */
    select?: Prisma.alumnoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumno
     */
    omit?: Prisma.alumnoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.alumnoInclude<ExtArgs> | null;
    /**
     * Filter which alumno to delete.
     */
    where: Prisma.alumnoWhereUniqueInput;
};
/**
 * alumno deleteMany
 */
export type alumnoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which alumnos to delete
     */
    where?: Prisma.alumnoWhereInput;
    /**
     * Limit how many alumnos to delete.
     */
    limit?: number;
};
/**
 * alumno.alumnoperiodo
 */
export type alumno$alumnoperiodoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumnoperiodo
     */
    select?: Prisma.alumnoperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumnoperiodo
     */
    omit?: Prisma.alumnoperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.alumnoperiodoInclude<ExtArgs> | null;
    where?: Prisma.alumnoperiodoWhereInput;
    orderBy?: Prisma.alumnoperiodoOrderByWithRelationInput | Prisma.alumnoperiodoOrderByWithRelationInput[];
    cursor?: Prisma.alumnoperiodoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AlumnoperiodoScalarFieldEnum | Prisma.AlumnoperiodoScalarFieldEnum[];
};
/**
 * alumno.clase
 */
export type alumno$claseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * alumno.condicioncuota
 */
export type alumno$condicioncuotaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the condicioncuota
     */
    select?: Prisma.condicioncuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the condicioncuota
     */
    omit?: Prisma.condicioncuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.condicioncuotaInclude<ExtArgs> | null;
    where?: Prisma.condicioncuotaWhereInput;
    orderBy?: Prisma.condicioncuotaOrderByWithRelationInput | Prisma.condicioncuotaOrderByWithRelationInput[];
    cursor?: Prisma.condicioncuotaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CondicioncuotaScalarFieldEnum | Prisma.CondicioncuotaScalarFieldEnum[];
};
/**
 * alumno.cuota
 */
export type alumno$cuotaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuota
     */
    select?: Prisma.cuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cuota
     */
    omit?: Prisma.cuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cuotaInclude<ExtArgs> | null;
    where?: Prisma.cuotaWhereInput;
    orderBy?: Prisma.cuotaOrderByWithRelationInput | Prisma.cuotaOrderByWithRelationInput[];
    cursor?: Prisma.cuotaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CuotaScalarFieldEnum | Prisma.CuotaScalarFieldEnum[];
};
/**
 * alumno without action
 */
export type alumnoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the alumno
     */
    select?: Prisma.alumnoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the alumno
     */
    omit?: Prisma.alumnoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.alumnoInclude<ExtArgs> | null;
};
//# sourceMappingURL=alumno.d.ts.map