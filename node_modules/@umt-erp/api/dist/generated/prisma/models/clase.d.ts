import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model clase
 *
 */
export type claseModel = runtime.Types.Result.DefaultSelection<Prisma.$clasePayload>;
export type AggregateClase = {
    _count: ClaseCountAggregateOutputType | null;
    _avg: ClaseAvgAggregateOutputType | null;
    _sum: ClaseSumAggregateOutputType | null;
    _min: ClaseMinAggregateOutputType | null;
    _max: ClaseMaxAggregateOutputType | null;
};
export type ClaseAvgAggregateOutputType = {
    diaSemana: number | null;
};
export type ClaseSumAggregateOutputType = {
    diaSemana: number | null;
};
export type ClaseMinAggregateOutputType = {
    id: string | null;
    alumnoId: string | null;
    profesorId: string | null;
    materiaId: string | null;
    aulaId: string | null;
    diaSemana: number | null;
    horaInicio: Date | null;
    horaFin: Date | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    estado: $Enums.clase_estado | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClaseMaxAggregateOutputType = {
    id: string | null;
    alumnoId: string | null;
    profesorId: string | null;
    materiaId: string | null;
    aulaId: string | null;
    diaSemana: number | null;
    horaInicio: Date | null;
    horaFin: Date | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    estado: $Enums.clase_estado | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ClaseCountAggregateOutputType = {
    id: number;
    alumnoId: number;
    profesorId: number;
    materiaId: number;
    aulaId: number;
    diaSemana: number;
    horaInicio: number;
    horaFin: number;
    fechaInicio: number;
    fechaFin: number;
    estado: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ClaseAvgAggregateInputType = {
    diaSemana?: true;
};
export type ClaseSumAggregateInputType = {
    diaSemana?: true;
};
export type ClaseMinAggregateInputType = {
    id?: true;
    alumnoId?: true;
    profesorId?: true;
    materiaId?: true;
    aulaId?: true;
    diaSemana?: true;
    horaInicio?: true;
    horaFin?: true;
    fechaInicio?: true;
    fechaFin?: true;
    estado?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClaseMaxAggregateInputType = {
    id?: true;
    alumnoId?: true;
    profesorId?: true;
    materiaId?: true;
    aulaId?: true;
    diaSemana?: true;
    horaInicio?: true;
    horaFin?: true;
    fechaInicio?: true;
    fechaFin?: true;
    estado?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ClaseCountAggregateInputType = {
    id?: true;
    alumnoId?: true;
    profesorId?: true;
    materiaId?: true;
    aulaId?: true;
    diaSemana?: true;
    horaInicio?: true;
    horaFin?: true;
    fechaInicio?: true;
    fechaFin?: true;
    estado?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ClaseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which clase to aggregate.
     */
    where?: Prisma.claseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clases to fetch.
     */
    orderBy?: Prisma.claseOrderByWithRelationInput | Prisma.claseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.claseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned clases
    **/
    _count?: true | ClaseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ClaseAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ClaseSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ClaseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ClaseMaxAggregateInputType;
};
export type GetClaseAggregateType<T extends ClaseAggregateArgs> = {
    [P in keyof T & keyof AggregateClase]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClase[P]> : Prisma.GetScalarType<T[P], AggregateClase[P]>;
};
export type claseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.claseWhereInput;
    orderBy?: Prisma.claseOrderByWithAggregationInput | Prisma.claseOrderByWithAggregationInput[];
    by: Prisma.ClaseScalarFieldEnum[] | Prisma.ClaseScalarFieldEnum;
    having?: Prisma.claseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClaseCountAggregateInputType | true;
    _avg?: ClaseAvgAggregateInputType;
    _sum?: ClaseSumAggregateInputType;
    _min?: ClaseMinAggregateInputType;
    _max?: ClaseMaxAggregateInputType;
};
export type ClaseGroupByOutputType = {
    id: string;
    alumnoId: string;
    profesorId: string;
    materiaId: string;
    aulaId: string;
    diaSemana: number;
    horaInicio: Date;
    horaFin: Date;
    fechaInicio: Date;
    fechaFin: Date | null;
    estado: $Enums.clase_estado;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ClaseCountAggregateOutputType | null;
    _avg: ClaseAvgAggregateOutputType | null;
    _sum: ClaseSumAggregateOutputType | null;
    _min: ClaseMinAggregateOutputType | null;
    _max: ClaseMaxAggregateOutputType | null;
};
export type GetClaseGroupByPayload<T extends claseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClaseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClaseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClaseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClaseGroupByOutputType[P]>;
}>>;
export type claseWhereInput = {
    AND?: Prisma.claseWhereInput | Prisma.claseWhereInput[];
    OR?: Prisma.claseWhereInput[];
    NOT?: Prisma.claseWhereInput | Prisma.claseWhereInput[];
    id?: Prisma.StringFilter<"clase"> | string;
    alumnoId?: Prisma.StringFilter<"clase"> | string;
    profesorId?: Prisma.StringFilter<"clase"> | string;
    materiaId?: Prisma.StringFilter<"clase"> | string;
    aulaId?: Prisma.StringFilter<"clase"> | string;
    diaSemana?: Prisma.IntFilter<"clase"> | number;
    horaInicio?: Prisma.DateTimeFilter<"clase"> | Date | string;
    horaFin?: Prisma.DateTimeFilter<"clase"> | Date | string;
    fechaInicio?: Prisma.DateTimeFilter<"clase"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"clase"> | Date | string | null;
    estado?: Prisma.Enumclase_estadoFilter<"clase"> | $Enums.clase_estado;
    observaciones?: Prisma.StringNullableFilter<"clase"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"clase"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"clase"> | Date | string;
    alumno?: Prisma.XOR<Prisma.AlumnoScalarRelationFilter, Prisma.alumnoWhereInput>;
    aula?: Prisma.XOR<Prisma.AulaScalarRelationFilter, Prisma.aulaWhereInput>;
    materia?: Prisma.XOR<Prisma.MateriaScalarRelationFilter, Prisma.materiaWhereInput>;
    profesor?: Prisma.XOR<Prisma.ProfesorScalarRelationFilter, Prisma.profesorWhereInput>;
};
export type claseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    alumnoId?: Prisma.SortOrder;
    profesorId?: Prisma.SortOrder;
    materiaId?: Prisma.SortOrder;
    aulaId?: Prisma.SortOrder;
    diaSemana?: Prisma.SortOrder;
    horaInicio?: Prisma.SortOrder;
    horaFin?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    alumno?: Prisma.alumnoOrderByWithRelationInput;
    aula?: Prisma.aulaOrderByWithRelationInput;
    materia?: Prisma.materiaOrderByWithRelationInput;
    profesor?: Prisma.profesorOrderByWithRelationInput;
    _relevance?: Prisma.claseOrderByRelevanceInput;
};
export type claseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.claseWhereInput | Prisma.claseWhereInput[];
    OR?: Prisma.claseWhereInput[];
    NOT?: Prisma.claseWhereInput | Prisma.claseWhereInput[];
    alumnoId?: Prisma.StringFilter<"clase"> | string;
    profesorId?: Prisma.StringFilter<"clase"> | string;
    materiaId?: Prisma.StringFilter<"clase"> | string;
    aulaId?: Prisma.StringFilter<"clase"> | string;
    diaSemana?: Prisma.IntFilter<"clase"> | number;
    horaInicio?: Prisma.DateTimeFilter<"clase"> | Date | string;
    horaFin?: Prisma.DateTimeFilter<"clase"> | Date | string;
    fechaInicio?: Prisma.DateTimeFilter<"clase"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"clase"> | Date | string | null;
    estado?: Prisma.Enumclase_estadoFilter<"clase"> | $Enums.clase_estado;
    observaciones?: Prisma.StringNullableFilter<"clase"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"clase"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"clase"> | Date | string;
    alumno?: Prisma.XOR<Prisma.AlumnoScalarRelationFilter, Prisma.alumnoWhereInput>;
    aula?: Prisma.XOR<Prisma.AulaScalarRelationFilter, Prisma.aulaWhereInput>;
    materia?: Prisma.XOR<Prisma.MateriaScalarRelationFilter, Prisma.materiaWhereInput>;
    profesor?: Prisma.XOR<Prisma.ProfesorScalarRelationFilter, Prisma.profesorWhereInput>;
}, "id">;
export type claseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    alumnoId?: Prisma.SortOrder;
    profesorId?: Prisma.SortOrder;
    materiaId?: Prisma.SortOrder;
    aulaId?: Prisma.SortOrder;
    diaSemana?: Prisma.SortOrder;
    horaInicio?: Prisma.SortOrder;
    horaFin?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.claseCountOrderByAggregateInput;
    _avg?: Prisma.claseAvgOrderByAggregateInput;
    _max?: Prisma.claseMaxOrderByAggregateInput;
    _min?: Prisma.claseMinOrderByAggregateInput;
    _sum?: Prisma.claseSumOrderByAggregateInput;
};
export type claseScalarWhereWithAggregatesInput = {
    AND?: Prisma.claseScalarWhereWithAggregatesInput | Prisma.claseScalarWhereWithAggregatesInput[];
    OR?: Prisma.claseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.claseScalarWhereWithAggregatesInput | Prisma.claseScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"clase"> | string;
    alumnoId?: Prisma.StringWithAggregatesFilter<"clase"> | string;
    profesorId?: Prisma.StringWithAggregatesFilter<"clase"> | string;
    materiaId?: Prisma.StringWithAggregatesFilter<"clase"> | string;
    aulaId?: Prisma.StringWithAggregatesFilter<"clase"> | string;
    diaSemana?: Prisma.IntWithAggregatesFilter<"clase"> | number;
    horaInicio?: Prisma.DateTimeWithAggregatesFilter<"clase"> | Date | string;
    horaFin?: Prisma.DateTimeWithAggregatesFilter<"clase"> | Date | string;
    fechaInicio?: Prisma.DateTimeWithAggregatesFilter<"clase"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableWithAggregatesFilter<"clase"> | Date | string | null;
    estado?: Prisma.Enumclase_estadoWithAggregatesFilter<"clase"> | $Enums.clase_estado;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"clase"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"clase"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"clase"> | Date | string;
};
export type claseCreateInput = {
    id: string;
    diaSemana: number;
    horaInicio: Date | string;
    horaFin: Date | string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    estado?: $Enums.clase_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno: Prisma.alumnoCreateNestedOneWithoutClaseInput;
    aula: Prisma.aulaCreateNestedOneWithoutClaseInput;
    materia: Prisma.materiaCreateNestedOneWithoutClaseInput;
    profesor: Prisma.profesorCreateNestedOneWithoutClaseInput;
};
export type claseUncheckedCreateInput = {
    id: string;
    alumnoId: string;
    profesorId: string;
    materiaId: string;
    aulaId: string;
    diaSemana: number;
    horaInicio: Date | string;
    horaFin: Date | string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    estado?: $Enums.clase_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type claseUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.IntFieldUpdateOperationsInput | number;
    horaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumclase_estadoFieldUpdateOperationsInput | $Enums.clase_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUpdateOneRequiredWithoutClaseNestedInput;
    aula?: Prisma.aulaUpdateOneRequiredWithoutClaseNestedInput;
    materia?: Prisma.materiaUpdateOneRequiredWithoutClaseNestedInput;
    profesor?: Prisma.profesorUpdateOneRequiredWithoutClaseNestedInput;
};
export type claseUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alumnoId?: Prisma.StringFieldUpdateOperationsInput | string;
    profesorId?: Prisma.StringFieldUpdateOperationsInput | string;
    materiaId?: Prisma.StringFieldUpdateOperationsInput | string;
    aulaId?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.IntFieldUpdateOperationsInput | number;
    horaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumclase_estadoFieldUpdateOperationsInput | $Enums.clase_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type claseCreateManyInput = {
    id: string;
    alumnoId: string;
    profesorId: string;
    materiaId: string;
    aulaId: string;
    diaSemana: number;
    horaInicio: Date | string;
    horaFin: Date | string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    estado?: $Enums.clase_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type claseUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.IntFieldUpdateOperationsInput | number;
    horaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumclase_estadoFieldUpdateOperationsInput | $Enums.clase_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type claseUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alumnoId?: Prisma.StringFieldUpdateOperationsInput | string;
    profesorId?: Prisma.StringFieldUpdateOperationsInput | string;
    materiaId?: Prisma.StringFieldUpdateOperationsInput | string;
    aulaId?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.IntFieldUpdateOperationsInput | number;
    horaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumclase_estadoFieldUpdateOperationsInput | $Enums.clase_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClaseListRelationFilter = {
    every?: Prisma.claseWhereInput;
    some?: Prisma.claseWhereInput;
    none?: Prisma.claseWhereInput;
};
export type claseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type claseOrderByRelevanceInput = {
    fields: Prisma.claseOrderByRelevanceFieldEnum | Prisma.claseOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type claseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alumnoId?: Prisma.SortOrder;
    profesorId?: Prisma.SortOrder;
    materiaId?: Prisma.SortOrder;
    aulaId?: Prisma.SortOrder;
    diaSemana?: Prisma.SortOrder;
    horaInicio?: Prisma.SortOrder;
    horaFin?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type claseAvgOrderByAggregateInput = {
    diaSemana?: Prisma.SortOrder;
};
export type claseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alumnoId?: Prisma.SortOrder;
    profesorId?: Prisma.SortOrder;
    materiaId?: Prisma.SortOrder;
    aulaId?: Prisma.SortOrder;
    diaSemana?: Prisma.SortOrder;
    horaInicio?: Prisma.SortOrder;
    horaFin?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type claseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alumnoId?: Prisma.SortOrder;
    profesorId?: Prisma.SortOrder;
    materiaId?: Prisma.SortOrder;
    aulaId?: Prisma.SortOrder;
    diaSemana?: Prisma.SortOrder;
    horaInicio?: Prisma.SortOrder;
    horaFin?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type claseSumOrderByAggregateInput = {
    diaSemana?: Prisma.SortOrder;
};
export type claseCreateNestedManyWithoutAlumnoInput = {
    create?: Prisma.XOR<Prisma.claseCreateWithoutAlumnoInput, Prisma.claseUncheckedCreateWithoutAlumnoInput> | Prisma.claseCreateWithoutAlumnoInput[] | Prisma.claseUncheckedCreateWithoutAlumnoInput[];
    connectOrCreate?: Prisma.claseCreateOrConnectWithoutAlumnoInput | Prisma.claseCreateOrConnectWithoutAlumnoInput[];
    createMany?: Prisma.claseCreateManyAlumnoInputEnvelope;
    connect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
};
export type claseUncheckedCreateNestedManyWithoutAlumnoInput = {
    create?: Prisma.XOR<Prisma.claseCreateWithoutAlumnoInput, Prisma.claseUncheckedCreateWithoutAlumnoInput> | Prisma.claseCreateWithoutAlumnoInput[] | Prisma.claseUncheckedCreateWithoutAlumnoInput[];
    connectOrCreate?: Prisma.claseCreateOrConnectWithoutAlumnoInput | Prisma.claseCreateOrConnectWithoutAlumnoInput[];
    createMany?: Prisma.claseCreateManyAlumnoInputEnvelope;
    connect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
};
export type claseUpdateManyWithoutAlumnoNestedInput = {
    create?: Prisma.XOR<Prisma.claseCreateWithoutAlumnoInput, Prisma.claseUncheckedCreateWithoutAlumnoInput> | Prisma.claseCreateWithoutAlumnoInput[] | Prisma.claseUncheckedCreateWithoutAlumnoInput[];
    connectOrCreate?: Prisma.claseCreateOrConnectWithoutAlumnoInput | Prisma.claseCreateOrConnectWithoutAlumnoInput[];
    upsert?: Prisma.claseUpsertWithWhereUniqueWithoutAlumnoInput | Prisma.claseUpsertWithWhereUniqueWithoutAlumnoInput[];
    createMany?: Prisma.claseCreateManyAlumnoInputEnvelope;
    set?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    disconnect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    delete?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    connect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    update?: Prisma.claseUpdateWithWhereUniqueWithoutAlumnoInput | Prisma.claseUpdateWithWhereUniqueWithoutAlumnoInput[];
    updateMany?: Prisma.claseUpdateManyWithWhereWithoutAlumnoInput | Prisma.claseUpdateManyWithWhereWithoutAlumnoInput[];
    deleteMany?: Prisma.claseScalarWhereInput | Prisma.claseScalarWhereInput[];
};
export type claseUncheckedUpdateManyWithoutAlumnoNestedInput = {
    create?: Prisma.XOR<Prisma.claseCreateWithoutAlumnoInput, Prisma.claseUncheckedCreateWithoutAlumnoInput> | Prisma.claseCreateWithoutAlumnoInput[] | Prisma.claseUncheckedCreateWithoutAlumnoInput[];
    connectOrCreate?: Prisma.claseCreateOrConnectWithoutAlumnoInput | Prisma.claseCreateOrConnectWithoutAlumnoInput[];
    upsert?: Prisma.claseUpsertWithWhereUniqueWithoutAlumnoInput | Prisma.claseUpsertWithWhereUniqueWithoutAlumnoInput[];
    createMany?: Prisma.claseCreateManyAlumnoInputEnvelope;
    set?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    disconnect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    delete?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    connect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    update?: Prisma.claseUpdateWithWhereUniqueWithoutAlumnoInput | Prisma.claseUpdateWithWhereUniqueWithoutAlumnoInput[];
    updateMany?: Prisma.claseUpdateManyWithWhereWithoutAlumnoInput | Prisma.claseUpdateManyWithWhereWithoutAlumnoInput[];
    deleteMany?: Prisma.claseScalarWhereInput | Prisma.claseScalarWhereInput[];
};
export type claseCreateNestedManyWithoutAulaInput = {
    create?: Prisma.XOR<Prisma.claseCreateWithoutAulaInput, Prisma.claseUncheckedCreateWithoutAulaInput> | Prisma.claseCreateWithoutAulaInput[] | Prisma.claseUncheckedCreateWithoutAulaInput[];
    connectOrCreate?: Prisma.claseCreateOrConnectWithoutAulaInput | Prisma.claseCreateOrConnectWithoutAulaInput[];
    createMany?: Prisma.claseCreateManyAulaInputEnvelope;
    connect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
};
export type claseUncheckedCreateNestedManyWithoutAulaInput = {
    create?: Prisma.XOR<Prisma.claseCreateWithoutAulaInput, Prisma.claseUncheckedCreateWithoutAulaInput> | Prisma.claseCreateWithoutAulaInput[] | Prisma.claseUncheckedCreateWithoutAulaInput[];
    connectOrCreate?: Prisma.claseCreateOrConnectWithoutAulaInput | Prisma.claseCreateOrConnectWithoutAulaInput[];
    createMany?: Prisma.claseCreateManyAulaInputEnvelope;
    connect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
};
export type claseUpdateManyWithoutAulaNestedInput = {
    create?: Prisma.XOR<Prisma.claseCreateWithoutAulaInput, Prisma.claseUncheckedCreateWithoutAulaInput> | Prisma.claseCreateWithoutAulaInput[] | Prisma.claseUncheckedCreateWithoutAulaInput[];
    connectOrCreate?: Prisma.claseCreateOrConnectWithoutAulaInput | Prisma.claseCreateOrConnectWithoutAulaInput[];
    upsert?: Prisma.claseUpsertWithWhereUniqueWithoutAulaInput | Prisma.claseUpsertWithWhereUniqueWithoutAulaInput[];
    createMany?: Prisma.claseCreateManyAulaInputEnvelope;
    set?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    disconnect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    delete?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    connect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    update?: Prisma.claseUpdateWithWhereUniqueWithoutAulaInput | Prisma.claseUpdateWithWhereUniqueWithoutAulaInput[];
    updateMany?: Prisma.claseUpdateManyWithWhereWithoutAulaInput | Prisma.claseUpdateManyWithWhereWithoutAulaInput[];
    deleteMany?: Prisma.claseScalarWhereInput | Prisma.claseScalarWhereInput[];
};
export type claseUncheckedUpdateManyWithoutAulaNestedInput = {
    create?: Prisma.XOR<Prisma.claseCreateWithoutAulaInput, Prisma.claseUncheckedCreateWithoutAulaInput> | Prisma.claseCreateWithoutAulaInput[] | Prisma.claseUncheckedCreateWithoutAulaInput[];
    connectOrCreate?: Prisma.claseCreateOrConnectWithoutAulaInput | Prisma.claseCreateOrConnectWithoutAulaInput[];
    upsert?: Prisma.claseUpsertWithWhereUniqueWithoutAulaInput | Prisma.claseUpsertWithWhereUniqueWithoutAulaInput[];
    createMany?: Prisma.claseCreateManyAulaInputEnvelope;
    set?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    disconnect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    delete?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    connect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    update?: Prisma.claseUpdateWithWhereUniqueWithoutAulaInput | Prisma.claseUpdateWithWhereUniqueWithoutAulaInput[];
    updateMany?: Prisma.claseUpdateManyWithWhereWithoutAulaInput | Prisma.claseUpdateManyWithWhereWithoutAulaInput[];
    deleteMany?: Prisma.claseScalarWhereInput | Prisma.claseScalarWhereInput[];
};
export type Enumclase_estadoFieldUpdateOperationsInput = {
    set?: $Enums.clase_estado;
};
export type claseCreateNestedManyWithoutMateriaInput = {
    create?: Prisma.XOR<Prisma.claseCreateWithoutMateriaInput, Prisma.claseUncheckedCreateWithoutMateriaInput> | Prisma.claseCreateWithoutMateriaInput[] | Prisma.claseUncheckedCreateWithoutMateriaInput[];
    connectOrCreate?: Prisma.claseCreateOrConnectWithoutMateriaInput | Prisma.claseCreateOrConnectWithoutMateriaInput[];
    createMany?: Prisma.claseCreateManyMateriaInputEnvelope;
    connect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
};
export type claseUncheckedCreateNestedManyWithoutMateriaInput = {
    create?: Prisma.XOR<Prisma.claseCreateWithoutMateriaInput, Prisma.claseUncheckedCreateWithoutMateriaInput> | Prisma.claseCreateWithoutMateriaInput[] | Prisma.claseUncheckedCreateWithoutMateriaInput[];
    connectOrCreate?: Prisma.claseCreateOrConnectWithoutMateriaInput | Prisma.claseCreateOrConnectWithoutMateriaInput[];
    createMany?: Prisma.claseCreateManyMateriaInputEnvelope;
    connect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
};
export type claseUpdateManyWithoutMateriaNestedInput = {
    create?: Prisma.XOR<Prisma.claseCreateWithoutMateriaInput, Prisma.claseUncheckedCreateWithoutMateriaInput> | Prisma.claseCreateWithoutMateriaInput[] | Prisma.claseUncheckedCreateWithoutMateriaInput[];
    connectOrCreate?: Prisma.claseCreateOrConnectWithoutMateriaInput | Prisma.claseCreateOrConnectWithoutMateriaInput[];
    upsert?: Prisma.claseUpsertWithWhereUniqueWithoutMateriaInput | Prisma.claseUpsertWithWhereUniqueWithoutMateriaInput[];
    createMany?: Prisma.claseCreateManyMateriaInputEnvelope;
    set?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    disconnect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    delete?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    connect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    update?: Prisma.claseUpdateWithWhereUniqueWithoutMateriaInput | Prisma.claseUpdateWithWhereUniqueWithoutMateriaInput[];
    updateMany?: Prisma.claseUpdateManyWithWhereWithoutMateriaInput | Prisma.claseUpdateManyWithWhereWithoutMateriaInput[];
    deleteMany?: Prisma.claseScalarWhereInput | Prisma.claseScalarWhereInput[];
};
export type claseUncheckedUpdateManyWithoutMateriaNestedInput = {
    create?: Prisma.XOR<Prisma.claseCreateWithoutMateriaInput, Prisma.claseUncheckedCreateWithoutMateriaInput> | Prisma.claseCreateWithoutMateriaInput[] | Prisma.claseUncheckedCreateWithoutMateriaInput[];
    connectOrCreate?: Prisma.claseCreateOrConnectWithoutMateriaInput | Prisma.claseCreateOrConnectWithoutMateriaInput[];
    upsert?: Prisma.claseUpsertWithWhereUniqueWithoutMateriaInput | Prisma.claseUpsertWithWhereUniqueWithoutMateriaInput[];
    createMany?: Prisma.claseCreateManyMateriaInputEnvelope;
    set?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    disconnect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    delete?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    connect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    update?: Prisma.claseUpdateWithWhereUniqueWithoutMateriaInput | Prisma.claseUpdateWithWhereUniqueWithoutMateriaInput[];
    updateMany?: Prisma.claseUpdateManyWithWhereWithoutMateriaInput | Prisma.claseUpdateManyWithWhereWithoutMateriaInput[];
    deleteMany?: Prisma.claseScalarWhereInput | Prisma.claseScalarWhereInput[];
};
export type claseCreateNestedManyWithoutProfesorInput = {
    create?: Prisma.XOR<Prisma.claseCreateWithoutProfesorInput, Prisma.claseUncheckedCreateWithoutProfesorInput> | Prisma.claseCreateWithoutProfesorInput[] | Prisma.claseUncheckedCreateWithoutProfesorInput[];
    connectOrCreate?: Prisma.claseCreateOrConnectWithoutProfesorInput | Prisma.claseCreateOrConnectWithoutProfesorInput[];
    createMany?: Prisma.claseCreateManyProfesorInputEnvelope;
    connect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
};
export type claseUncheckedCreateNestedManyWithoutProfesorInput = {
    create?: Prisma.XOR<Prisma.claseCreateWithoutProfesorInput, Prisma.claseUncheckedCreateWithoutProfesorInput> | Prisma.claseCreateWithoutProfesorInput[] | Prisma.claseUncheckedCreateWithoutProfesorInput[];
    connectOrCreate?: Prisma.claseCreateOrConnectWithoutProfesorInput | Prisma.claseCreateOrConnectWithoutProfesorInput[];
    createMany?: Prisma.claseCreateManyProfesorInputEnvelope;
    connect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
};
export type claseUpdateManyWithoutProfesorNestedInput = {
    create?: Prisma.XOR<Prisma.claseCreateWithoutProfesorInput, Prisma.claseUncheckedCreateWithoutProfesorInput> | Prisma.claseCreateWithoutProfesorInput[] | Prisma.claseUncheckedCreateWithoutProfesorInput[];
    connectOrCreate?: Prisma.claseCreateOrConnectWithoutProfesorInput | Prisma.claseCreateOrConnectWithoutProfesorInput[];
    upsert?: Prisma.claseUpsertWithWhereUniqueWithoutProfesorInput | Prisma.claseUpsertWithWhereUniqueWithoutProfesorInput[];
    createMany?: Prisma.claseCreateManyProfesorInputEnvelope;
    set?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    disconnect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    delete?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    connect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    update?: Prisma.claseUpdateWithWhereUniqueWithoutProfesorInput | Prisma.claseUpdateWithWhereUniqueWithoutProfesorInput[];
    updateMany?: Prisma.claseUpdateManyWithWhereWithoutProfesorInput | Prisma.claseUpdateManyWithWhereWithoutProfesorInput[];
    deleteMany?: Prisma.claseScalarWhereInput | Prisma.claseScalarWhereInput[];
};
export type claseUncheckedUpdateManyWithoutProfesorNestedInput = {
    create?: Prisma.XOR<Prisma.claseCreateWithoutProfesorInput, Prisma.claseUncheckedCreateWithoutProfesorInput> | Prisma.claseCreateWithoutProfesorInput[] | Prisma.claseUncheckedCreateWithoutProfesorInput[];
    connectOrCreate?: Prisma.claseCreateOrConnectWithoutProfesorInput | Prisma.claseCreateOrConnectWithoutProfesorInput[];
    upsert?: Prisma.claseUpsertWithWhereUniqueWithoutProfesorInput | Prisma.claseUpsertWithWhereUniqueWithoutProfesorInput[];
    createMany?: Prisma.claseCreateManyProfesorInputEnvelope;
    set?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    disconnect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    delete?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    connect?: Prisma.claseWhereUniqueInput | Prisma.claseWhereUniqueInput[];
    update?: Prisma.claseUpdateWithWhereUniqueWithoutProfesorInput | Prisma.claseUpdateWithWhereUniqueWithoutProfesorInput[];
    updateMany?: Prisma.claseUpdateManyWithWhereWithoutProfesorInput | Prisma.claseUpdateManyWithWhereWithoutProfesorInput[];
    deleteMany?: Prisma.claseScalarWhereInput | Prisma.claseScalarWhereInput[];
};
export type claseCreateWithoutAlumnoInput = {
    id: string;
    diaSemana: number;
    horaInicio: Date | string;
    horaFin: Date | string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    estado?: $Enums.clase_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    aula: Prisma.aulaCreateNestedOneWithoutClaseInput;
    materia: Prisma.materiaCreateNestedOneWithoutClaseInput;
    profesor: Prisma.profesorCreateNestedOneWithoutClaseInput;
};
export type claseUncheckedCreateWithoutAlumnoInput = {
    id: string;
    profesorId: string;
    materiaId: string;
    aulaId: string;
    diaSemana: number;
    horaInicio: Date | string;
    horaFin: Date | string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    estado?: $Enums.clase_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type claseCreateOrConnectWithoutAlumnoInput = {
    where: Prisma.claseWhereUniqueInput;
    create: Prisma.XOR<Prisma.claseCreateWithoutAlumnoInput, Prisma.claseUncheckedCreateWithoutAlumnoInput>;
};
export type claseCreateManyAlumnoInputEnvelope = {
    data: Prisma.claseCreateManyAlumnoInput | Prisma.claseCreateManyAlumnoInput[];
    skipDuplicates?: boolean;
};
export type claseUpsertWithWhereUniqueWithoutAlumnoInput = {
    where: Prisma.claseWhereUniqueInput;
    update: Prisma.XOR<Prisma.claseUpdateWithoutAlumnoInput, Prisma.claseUncheckedUpdateWithoutAlumnoInput>;
    create: Prisma.XOR<Prisma.claseCreateWithoutAlumnoInput, Prisma.claseUncheckedCreateWithoutAlumnoInput>;
};
export type claseUpdateWithWhereUniqueWithoutAlumnoInput = {
    where: Prisma.claseWhereUniqueInput;
    data: Prisma.XOR<Prisma.claseUpdateWithoutAlumnoInput, Prisma.claseUncheckedUpdateWithoutAlumnoInput>;
};
export type claseUpdateManyWithWhereWithoutAlumnoInput = {
    where: Prisma.claseScalarWhereInput;
    data: Prisma.XOR<Prisma.claseUpdateManyMutationInput, Prisma.claseUncheckedUpdateManyWithoutAlumnoInput>;
};
export type claseScalarWhereInput = {
    AND?: Prisma.claseScalarWhereInput | Prisma.claseScalarWhereInput[];
    OR?: Prisma.claseScalarWhereInput[];
    NOT?: Prisma.claseScalarWhereInput | Prisma.claseScalarWhereInput[];
    id?: Prisma.StringFilter<"clase"> | string;
    alumnoId?: Prisma.StringFilter<"clase"> | string;
    profesorId?: Prisma.StringFilter<"clase"> | string;
    materiaId?: Prisma.StringFilter<"clase"> | string;
    aulaId?: Prisma.StringFilter<"clase"> | string;
    diaSemana?: Prisma.IntFilter<"clase"> | number;
    horaInicio?: Prisma.DateTimeFilter<"clase"> | Date | string;
    horaFin?: Prisma.DateTimeFilter<"clase"> | Date | string;
    fechaInicio?: Prisma.DateTimeFilter<"clase"> | Date | string;
    fechaFin?: Prisma.DateTimeNullableFilter<"clase"> | Date | string | null;
    estado?: Prisma.Enumclase_estadoFilter<"clase"> | $Enums.clase_estado;
    observaciones?: Prisma.StringNullableFilter<"clase"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"clase"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"clase"> | Date | string;
};
export type claseCreateWithoutAulaInput = {
    id: string;
    diaSemana: number;
    horaInicio: Date | string;
    horaFin: Date | string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    estado?: $Enums.clase_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno: Prisma.alumnoCreateNestedOneWithoutClaseInput;
    materia: Prisma.materiaCreateNestedOneWithoutClaseInput;
    profesor: Prisma.profesorCreateNestedOneWithoutClaseInput;
};
export type claseUncheckedCreateWithoutAulaInput = {
    id: string;
    alumnoId: string;
    profesorId: string;
    materiaId: string;
    diaSemana: number;
    horaInicio: Date | string;
    horaFin: Date | string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    estado?: $Enums.clase_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type claseCreateOrConnectWithoutAulaInput = {
    where: Prisma.claseWhereUniqueInput;
    create: Prisma.XOR<Prisma.claseCreateWithoutAulaInput, Prisma.claseUncheckedCreateWithoutAulaInput>;
};
export type claseCreateManyAulaInputEnvelope = {
    data: Prisma.claseCreateManyAulaInput | Prisma.claseCreateManyAulaInput[];
    skipDuplicates?: boolean;
};
export type claseUpsertWithWhereUniqueWithoutAulaInput = {
    where: Prisma.claseWhereUniqueInput;
    update: Prisma.XOR<Prisma.claseUpdateWithoutAulaInput, Prisma.claseUncheckedUpdateWithoutAulaInput>;
    create: Prisma.XOR<Prisma.claseCreateWithoutAulaInput, Prisma.claseUncheckedCreateWithoutAulaInput>;
};
export type claseUpdateWithWhereUniqueWithoutAulaInput = {
    where: Prisma.claseWhereUniqueInput;
    data: Prisma.XOR<Prisma.claseUpdateWithoutAulaInput, Prisma.claseUncheckedUpdateWithoutAulaInput>;
};
export type claseUpdateManyWithWhereWithoutAulaInput = {
    where: Prisma.claseScalarWhereInput;
    data: Prisma.XOR<Prisma.claseUpdateManyMutationInput, Prisma.claseUncheckedUpdateManyWithoutAulaInput>;
};
export type claseCreateWithoutMateriaInput = {
    id: string;
    diaSemana: number;
    horaInicio: Date | string;
    horaFin: Date | string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    estado?: $Enums.clase_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno: Prisma.alumnoCreateNestedOneWithoutClaseInput;
    aula: Prisma.aulaCreateNestedOneWithoutClaseInput;
    profesor: Prisma.profesorCreateNestedOneWithoutClaseInput;
};
export type claseUncheckedCreateWithoutMateriaInput = {
    id: string;
    alumnoId: string;
    profesorId: string;
    aulaId: string;
    diaSemana: number;
    horaInicio: Date | string;
    horaFin: Date | string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    estado?: $Enums.clase_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type claseCreateOrConnectWithoutMateriaInput = {
    where: Prisma.claseWhereUniqueInput;
    create: Prisma.XOR<Prisma.claseCreateWithoutMateriaInput, Prisma.claseUncheckedCreateWithoutMateriaInput>;
};
export type claseCreateManyMateriaInputEnvelope = {
    data: Prisma.claseCreateManyMateriaInput | Prisma.claseCreateManyMateriaInput[];
    skipDuplicates?: boolean;
};
export type claseUpsertWithWhereUniqueWithoutMateriaInput = {
    where: Prisma.claseWhereUniqueInput;
    update: Prisma.XOR<Prisma.claseUpdateWithoutMateriaInput, Prisma.claseUncheckedUpdateWithoutMateriaInput>;
    create: Prisma.XOR<Prisma.claseCreateWithoutMateriaInput, Prisma.claseUncheckedCreateWithoutMateriaInput>;
};
export type claseUpdateWithWhereUniqueWithoutMateriaInput = {
    where: Prisma.claseWhereUniqueInput;
    data: Prisma.XOR<Prisma.claseUpdateWithoutMateriaInput, Prisma.claseUncheckedUpdateWithoutMateriaInput>;
};
export type claseUpdateManyWithWhereWithoutMateriaInput = {
    where: Prisma.claseScalarWhereInput;
    data: Prisma.XOR<Prisma.claseUpdateManyMutationInput, Prisma.claseUncheckedUpdateManyWithoutMateriaInput>;
};
export type claseCreateWithoutProfesorInput = {
    id: string;
    diaSemana: number;
    horaInicio: Date | string;
    horaFin: Date | string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    estado?: $Enums.clase_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno: Prisma.alumnoCreateNestedOneWithoutClaseInput;
    aula: Prisma.aulaCreateNestedOneWithoutClaseInput;
    materia: Prisma.materiaCreateNestedOneWithoutClaseInput;
};
export type claseUncheckedCreateWithoutProfesorInput = {
    id: string;
    alumnoId: string;
    materiaId: string;
    aulaId: string;
    diaSemana: number;
    horaInicio: Date | string;
    horaFin: Date | string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    estado?: $Enums.clase_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type claseCreateOrConnectWithoutProfesorInput = {
    where: Prisma.claseWhereUniqueInput;
    create: Prisma.XOR<Prisma.claseCreateWithoutProfesorInput, Prisma.claseUncheckedCreateWithoutProfesorInput>;
};
export type claseCreateManyProfesorInputEnvelope = {
    data: Prisma.claseCreateManyProfesorInput | Prisma.claseCreateManyProfesorInput[];
    skipDuplicates?: boolean;
};
export type claseUpsertWithWhereUniqueWithoutProfesorInput = {
    where: Prisma.claseWhereUniqueInput;
    update: Prisma.XOR<Prisma.claseUpdateWithoutProfesorInput, Prisma.claseUncheckedUpdateWithoutProfesorInput>;
    create: Prisma.XOR<Prisma.claseCreateWithoutProfesorInput, Prisma.claseUncheckedCreateWithoutProfesorInput>;
};
export type claseUpdateWithWhereUniqueWithoutProfesorInput = {
    where: Prisma.claseWhereUniqueInput;
    data: Prisma.XOR<Prisma.claseUpdateWithoutProfesorInput, Prisma.claseUncheckedUpdateWithoutProfesorInput>;
};
export type claseUpdateManyWithWhereWithoutProfesorInput = {
    where: Prisma.claseScalarWhereInput;
    data: Prisma.XOR<Prisma.claseUpdateManyMutationInput, Prisma.claseUncheckedUpdateManyWithoutProfesorInput>;
};
export type claseCreateManyAlumnoInput = {
    id: string;
    profesorId: string;
    materiaId: string;
    aulaId: string;
    diaSemana: number;
    horaInicio: Date | string;
    horaFin: Date | string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    estado?: $Enums.clase_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type claseUpdateWithoutAlumnoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.IntFieldUpdateOperationsInput | number;
    horaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumclase_estadoFieldUpdateOperationsInput | $Enums.clase_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    aula?: Prisma.aulaUpdateOneRequiredWithoutClaseNestedInput;
    materia?: Prisma.materiaUpdateOneRequiredWithoutClaseNestedInput;
    profesor?: Prisma.profesorUpdateOneRequiredWithoutClaseNestedInput;
};
export type claseUncheckedUpdateWithoutAlumnoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profesorId?: Prisma.StringFieldUpdateOperationsInput | string;
    materiaId?: Prisma.StringFieldUpdateOperationsInput | string;
    aulaId?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.IntFieldUpdateOperationsInput | number;
    horaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumclase_estadoFieldUpdateOperationsInput | $Enums.clase_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type claseUncheckedUpdateManyWithoutAlumnoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profesorId?: Prisma.StringFieldUpdateOperationsInput | string;
    materiaId?: Prisma.StringFieldUpdateOperationsInput | string;
    aulaId?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.IntFieldUpdateOperationsInput | number;
    horaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumclase_estadoFieldUpdateOperationsInput | $Enums.clase_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type claseCreateManyAulaInput = {
    id: string;
    alumnoId: string;
    profesorId: string;
    materiaId: string;
    diaSemana: number;
    horaInicio: Date | string;
    horaFin: Date | string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    estado?: $Enums.clase_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type claseUpdateWithoutAulaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.IntFieldUpdateOperationsInput | number;
    horaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumclase_estadoFieldUpdateOperationsInput | $Enums.clase_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUpdateOneRequiredWithoutClaseNestedInput;
    materia?: Prisma.materiaUpdateOneRequiredWithoutClaseNestedInput;
    profesor?: Prisma.profesorUpdateOneRequiredWithoutClaseNestedInput;
};
export type claseUncheckedUpdateWithoutAulaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alumnoId?: Prisma.StringFieldUpdateOperationsInput | string;
    profesorId?: Prisma.StringFieldUpdateOperationsInput | string;
    materiaId?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.IntFieldUpdateOperationsInput | number;
    horaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumclase_estadoFieldUpdateOperationsInput | $Enums.clase_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type claseUncheckedUpdateManyWithoutAulaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alumnoId?: Prisma.StringFieldUpdateOperationsInput | string;
    profesorId?: Prisma.StringFieldUpdateOperationsInput | string;
    materiaId?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.IntFieldUpdateOperationsInput | number;
    horaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumclase_estadoFieldUpdateOperationsInput | $Enums.clase_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type claseCreateManyMateriaInput = {
    id: string;
    alumnoId: string;
    profesorId: string;
    aulaId: string;
    diaSemana: number;
    horaInicio: Date | string;
    horaFin: Date | string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    estado?: $Enums.clase_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type claseUpdateWithoutMateriaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.IntFieldUpdateOperationsInput | number;
    horaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumclase_estadoFieldUpdateOperationsInput | $Enums.clase_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUpdateOneRequiredWithoutClaseNestedInput;
    aula?: Prisma.aulaUpdateOneRequiredWithoutClaseNestedInput;
    profesor?: Prisma.profesorUpdateOneRequiredWithoutClaseNestedInput;
};
export type claseUncheckedUpdateWithoutMateriaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alumnoId?: Prisma.StringFieldUpdateOperationsInput | string;
    profesorId?: Prisma.StringFieldUpdateOperationsInput | string;
    aulaId?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.IntFieldUpdateOperationsInput | number;
    horaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumclase_estadoFieldUpdateOperationsInput | $Enums.clase_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type claseUncheckedUpdateManyWithoutMateriaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alumnoId?: Prisma.StringFieldUpdateOperationsInput | string;
    profesorId?: Prisma.StringFieldUpdateOperationsInput | string;
    aulaId?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.IntFieldUpdateOperationsInput | number;
    horaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumclase_estadoFieldUpdateOperationsInput | $Enums.clase_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type claseCreateManyProfesorInput = {
    id: string;
    alumnoId: string;
    materiaId: string;
    aulaId: string;
    diaSemana: number;
    horaInicio: Date | string;
    horaFin: Date | string;
    fechaInicio: Date | string;
    fechaFin?: Date | string | null;
    estado?: $Enums.clase_estado;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type claseUpdateWithoutProfesorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.IntFieldUpdateOperationsInput | number;
    horaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumclase_estadoFieldUpdateOperationsInput | $Enums.clase_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUpdateOneRequiredWithoutClaseNestedInput;
    aula?: Prisma.aulaUpdateOneRequiredWithoutClaseNestedInput;
    materia?: Prisma.materiaUpdateOneRequiredWithoutClaseNestedInput;
};
export type claseUncheckedUpdateWithoutProfesorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alumnoId?: Prisma.StringFieldUpdateOperationsInput | string;
    materiaId?: Prisma.StringFieldUpdateOperationsInput | string;
    aulaId?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.IntFieldUpdateOperationsInput | number;
    horaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumclase_estadoFieldUpdateOperationsInput | $Enums.clase_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type claseUncheckedUpdateManyWithoutProfesorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alumnoId?: Prisma.StringFieldUpdateOperationsInput | string;
    materiaId?: Prisma.StringFieldUpdateOperationsInput | string;
    aulaId?: Prisma.StringFieldUpdateOperationsInput | string;
    diaSemana?: Prisma.IntFieldUpdateOperationsInput | number;
    horaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    horaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.Enumclase_estadoFieldUpdateOperationsInput | $Enums.clase_estado;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type claseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    alumnoId?: boolean;
    profesorId?: boolean;
    materiaId?: boolean;
    aulaId?: boolean;
    diaSemana?: boolean;
    horaInicio?: boolean;
    horaFin?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    estado?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    alumno?: boolean | Prisma.alumnoDefaultArgs<ExtArgs>;
    aula?: boolean | Prisma.aulaDefaultArgs<ExtArgs>;
    materia?: boolean | Prisma.materiaDefaultArgs<ExtArgs>;
    profesor?: boolean | Prisma.profesorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["clase"]>;
export type claseSelectScalar = {
    id?: boolean;
    alumnoId?: boolean;
    profesorId?: boolean;
    materiaId?: boolean;
    aulaId?: boolean;
    diaSemana?: boolean;
    horaInicio?: boolean;
    horaFin?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    estado?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type claseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "alumnoId" | "profesorId" | "materiaId" | "aulaId" | "diaSemana" | "horaInicio" | "horaFin" | "fechaInicio" | "fechaFin" | "estado" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["clase"]>;
export type claseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    alumno?: boolean | Prisma.alumnoDefaultArgs<ExtArgs>;
    aula?: boolean | Prisma.aulaDefaultArgs<ExtArgs>;
    materia?: boolean | Prisma.materiaDefaultArgs<ExtArgs>;
    profesor?: boolean | Prisma.profesorDefaultArgs<ExtArgs>;
};
export type $clasePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "clase";
    objects: {
        alumno: Prisma.$alumnoPayload<ExtArgs>;
        aula: Prisma.$aulaPayload<ExtArgs>;
        materia: Prisma.$materiaPayload<ExtArgs>;
        profesor: Prisma.$profesorPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        alumnoId: string;
        profesorId: string;
        materiaId: string;
        aulaId: string;
        diaSemana: number;
        horaInicio: Date;
        horaFin: Date;
        fechaInicio: Date;
        fechaFin: Date | null;
        estado: $Enums.clase_estado;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["clase"]>;
    composites: {};
};
export type claseGetPayload<S extends boolean | null | undefined | claseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$clasePayload, S>;
export type claseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<claseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClaseCountAggregateInputType | true;
};
export interface claseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['clase'];
        meta: {
            name: 'clase';
        };
    };
    /**
     * Find zero or one Clase that matches the filter.
     * @param {claseFindUniqueArgs} args - Arguments to find a Clase
     * @example
     * // Get one Clase
     * const clase = await prisma.clase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends claseFindUniqueArgs>(args: Prisma.SelectSubset<T, claseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__claseClient<runtime.Types.Result.GetResult<Prisma.$clasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Clase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {claseFindUniqueOrThrowArgs} args - Arguments to find a Clase
     * @example
     * // Get one Clase
     * const clase = await prisma.clase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends claseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, claseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__claseClient<runtime.Types.Result.GetResult<Prisma.$clasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Clase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claseFindFirstArgs} args - Arguments to find a Clase
     * @example
     * // Get one Clase
     * const clase = await prisma.clase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends claseFindFirstArgs>(args?: Prisma.SelectSubset<T, claseFindFirstArgs<ExtArgs>>): Prisma.Prisma__claseClient<runtime.Types.Result.GetResult<Prisma.$clasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Clase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claseFindFirstOrThrowArgs} args - Arguments to find a Clase
     * @example
     * // Get one Clase
     * const clase = await prisma.clase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends claseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, claseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__claseClient<runtime.Types.Result.GetResult<Prisma.$clasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Clases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clases
     * const clases = await prisma.clase.findMany()
     *
     * // Get first 10 Clases
     * const clases = await prisma.clase.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const claseWithIdOnly = await prisma.clase.findMany({ select: { id: true } })
     *
     */
    findMany<T extends claseFindManyArgs>(args?: Prisma.SelectSubset<T, claseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$clasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Clase.
     * @param {claseCreateArgs} args - Arguments to create a Clase.
     * @example
     * // Create one Clase
     * const Clase = await prisma.clase.create({
     *   data: {
     *     // ... data to create a Clase
     *   }
     * })
     *
     */
    create<T extends claseCreateArgs>(args: Prisma.SelectSubset<T, claseCreateArgs<ExtArgs>>): Prisma.Prisma__claseClient<runtime.Types.Result.GetResult<Prisma.$clasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Clases.
     * @param {claseCreateManyArgs} args - Arguments to create many Clases.
     * @example
     * // Create many Clases
     * const clase = await prisma.clase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends claseCreateManyArgs>(args?: Prisma.SelectSubset<T, claseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Clase.
     * @param {claseDeleteArgs} args - Arguments to delete one Clase.
     * @example
     * // Delete one Clase
     * const Clase = await prisma.clase.delete({
     *   where: {
     *     // ... filter to delete one Clase
     *   }
     * })
     *
     */
    delete<T extends claseDeleteArgs>(args: Prisma.SelectSubset<T, claseDeleteArgs<ExtArgs>>): Prisma.Prisma__claseClient<runtime.Types.Result.GetResult<Prisma.$clasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Clase.
     * @param {claseUpdateArgs} args - Arguments to update one Clase.
     * @example
     * // Update one Clase
     * const clase = await prisma.clase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends claseUpdateArgs>(args: Prisma.SelectSubset<T, claseUpdateArgs<ExtArgs>>): Prisma.Prisma__claseClient<runtime.Types.Result.GetResult<Prisma.$clasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Clases.
     * @param {claseDeleteManyArgs} args - Arguments to filter Clases to delete.
     * @example
     * // Delete a few Clases
     * const { count } = await prisma.clase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends claseDeleteManyArgs>(args?: Prisma.SelectSubset<T, claseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Clases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clases
     * const clase = await prisma.clase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends claseUpdateManyArgs>(args: Prisma.SelectSubset<T, claseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Clase.
     * @param {claseUpsertArgs} args - Arguments to update or create a Clase.
     * @example
     * // Update or create a Clase
     * const clase = await prisma.clase.upsert({
     *   create: {
     *     // ... data to create a Clase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clase we want to update
     *   }
     * })
     */
    upsert<T extends claseUpsertArgs>(args: Prisma.SelectSubset<T, claseUpsertArgs<ExtArgs>>): Prisma.Prisma__claseClient<runtime.Types.Result.GetResult<Prisma.$clasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Clases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claseCountArgs} args - Arguments to filter Clases to count.
     * @example
     * // Count the number of Clases
     * const count = await prisma.clase.count({
     *   where: {
     *     // ... the filter for the Clases we want to count
     *   }
     * })
    **/
    count<T extends claseCountArgs>(args?: Prisma.Subset<T, claseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClaseCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Clase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClaseAggregateArgs>(args: Prisma.Subset<T, ClaseAggregateArgs>): Prisma.PrismaPromise<GetClaseAggregateType<T>>;
    /**
     * Group by Clase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {claseGroupByArgs} args - Group by arguments.
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
    groupBy<T extends claseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: claseGroupByArgs['orderBy'];
    } : {
        orderBy?: claseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, claseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the clase model
     */
    readonly fields: claseFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for clase.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__claseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    alumno<T extends Prisma.alumnoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.alumnoDefaultArgs<ExtArgs>>): Prisma.Prisma__alumnoClient<runtime.Types.Result.GetResult<Prisma.$alumnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    aula<T extends Prisma.aulaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.aulaDefaultArgs<ExtArgs>>): Prisma.Prisma__aulaClient<runtime.Types.Result.GetResult<Prisma.$aulaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    materia<T extends Prisma.materiaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.materiaDefaultArgs<ExtArgs>>): Prisma.Prisma__materiaClient<runtime.Types.Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    profesor<T extends Prisma.profesorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.profesorDefaultArgs<ExtArgs>>): Prisma.Prisma__profesorClient<runtime.Types.Result.GetResult<Prisma.$profesorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the clase model
 */
export interface claseFieldRefs {
    readonly id: Prisma.FieldRef<"clase", 'String'>;
    readonly alumnoId: Prisma.FieldRef<"clase", 'String'>;
    readonly profesorId: Prisma.FieldRef<"clase", 'String'>;
    readonly materiaId: Prisma.FieldRef<"clase", 'String'>;
    readonly aulaId: Prisma.FieldRef<"clase", 'String'>;
    readonly diaSemana: Prisma.FieldRef<"clase", 'Int'>;
    readonly horaInicio: Prisma.FieldRef<"clase", 'DateTime'>;
    readonly horaFin: Prisma.FieldRef<"clase", 'DateTime'>;
    readonly fechaInicio: Prisma.FieldRef<"clase", 'DateTime'>;
    readonly fechaFin: Prisma.FieldRef<"clase", 'DateTime'>;
    readonly estado: Prisma.FieldRef<"clase", 'clase_estado'>;
    readonly observaciones: Prisma.FieldRef<"clase", 'String'>;
    readonly createdAt: Prisma.FieldRef<"clase", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"clase", 'DateTime'>;
}
/**
 * clase findUnique
 */
export type claseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which clase to fetch.
     */
    where: Prisma.claseWhereUniqueInput;
};
/**
 * clase findUniqueOrThrow
 */
export type claseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which clase to fetch.
     */
    where: Prisma.claseWhereUniqueInput;
};
/**
 * clase findFirst
 */
export type claseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which clase to fetch.
     */
    where?: Prisma.claseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clases to fetch.
     */
    orderBy?: Prisma.claseOrderByWithRelationInput | Prisma.claseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for clases.
     */
    cursor?: Prisma.claseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of clases.
     */
    distinct?: Prisma.ClaseScalarFieldEnum | Prisma.ClaseScalarFieldEnum[];
};
/**
 * clase findFirstOrThrow
 */
export type claseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which clase to fetch.
     */
    where?: Prisma.claseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clases to fetch.
     */
    orderBy?: Prisma.claseOrderByWithRelationInput | Prisma.claseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for clases.
     */
    cursor?: Prisma.claseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of clases.
     */
    distinct?: Prisma.ClaseScalarFieldEnum | Prisma.ClaseScalarFieldEnum[];
};
/**
 * clase findMany
 */
export type claseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which clases to fetch.
     */
    where?: Prisma.claseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clases to fetch.
     */
    orderBy?: Prisma.claseOrderByWithRelationInput | Prisma.claseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing clases.
     */
    cursor?: Prisma.claseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clases from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clases.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of clases.
     */
    distinct?: Prisma.ClaseScalarFieldEnum | Prisma.ClaseScalarFieldEnum[];
};
/**
 * clase create
 */
export type claseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a clase.
     */
    data: Prisma.XOR<Prisma.claseCreateInput, Prisma.claseUncheckedCreateInput>;
};
/**
 * clase createMany
 */
export type claseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many clases.
     */
    data: Prisma.claseCreateManyInput | Prisma.claseCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * clase update
 */
export type claseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a clase.
     */
    data: Prisma.XOR<Prisma.claseUpdateInput, Prisma.claseUncheckedUpdateInput>;
    /**
     * Choose, which clase to update.
     */
    where: Prisma.claseWhereUniqueInput;
};
/**
 * clase updateMany
 */
export type claseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update clases.
     */
    data: Prisma.XOR<Prisma.claseUpdateManyMutationInput, Prisma.claseUncheckedUpdateManyInput>;
    /**
     * Filter which clases to update
     */
    where?: Prisma.claseWhereInput;
    /**
     * Limit how many clases to update.
     */
    limit?: number;
};
/**
 * clase upsert
 */
export type claseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the clase to update in case it exists.
     */
    where: Prisma.claseWhereUniqueInput;
    /**
     * In case the clase found by the `where` argument doesn't exist, create a new clase with this data.
     */
    create: Prisma.XOR<Prisma.claseCreateInput, Prisma.claseUncheckedCreateInput>;
    /**
     * In case the clase was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.claseUpdateInput, Prisma.claseUncheckedUpdateInput>;
};
/**
 * clase delete
 */
export type claseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which clase to delete.
     */
    where: Prisma.claseWhereUniqueInput;
};
/**
 * clase deleteMany
 */
export type claseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which clases to delete
     */
    where?: Prisma.claseWhereInput;
    /**
     * Limit how many clases to delete.
     */
    limit?: number;
};
/**
 * clase without action
 */
export type claseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=clase.d.ts.map