import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model persona
 *
 */
export type personaModel = runtime.Types.Result.DefaultSelection<Prisma.$personaPayload>;
export type AggregatePersona = {
    _count: PersonaCountAggregateOutputType | null;
    _min: PersonaMinAggregateOutputType | null;
    _max: PersonaMaxAggregateOutputType | null;
};
export type PersonaMinAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    apellidos: string | null;
    dni: string | null;
    fechaNacimiento: Date | null;
    email: string | null;
    telefono: string | null;
    observaciones: string | null;
    activo: boolean | null;
    fechaBaja: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PersonaMaxAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    apellidos: string | null;
    dni: string | null;
    fechaNacimiento: Date | null;
    email: string | null;
    telefono: string | null;
    observaciones: string | null;
    activo: boolean | null;
    fechaBaja: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type PersonaCountAggregateOutputType = {
    id: number;
    nombre: number;
    apellidos: number;
    dni: number;
    fechaNacimiento: number;
    email: number;
    telefono: number;
    observaciones: number;
    activo: number;
    fechaBaja: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type PersonaMinAggregateInputType = {
    id?: true;
    nombre?: true;
    apellidos?: true;
    dni?: true;
    fechaNacimiento?: true;
    email?: true;
    telefono?: true;
    observaciones?: true;
    activo?: true;
    fechaBaja?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PersonaMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    apellidos?: true;
    dni?: true;
    fechaNacimiento?: true;
    email?: true;
    telefono?: true;
    observaciones?: true;
    activo?: true;
    fechaBaja?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type PersonaCountAggregateInputType = {
    id?: true;
    nombre?: true;
    apellidos?: true;
    dni?: true;
    fechaNacimiento?: true;
    email?: true;
    telefono?: true;
    observaciones?: true;
    activo?: true;
    fechaBaja?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type PersonaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which persona to aggregate.
     */
    where?: Prisma.personaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of personas to fetch.
     */
    orderBy?: Prisma.personaOrderByWithRelationInput | Prisma.personaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.personaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` personas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` personas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned personas
    **/
    _count?: true | PersonaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PersonaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PersonaMaxAggregateInputType;
};
export type GetPersonaAggregateType<T extends PersonaAggregateArgs> = {
    [P in keyof T & keyof AggregatePersona]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePersona[P]> : Prisma.GetScalarType<T[P], AggregatePersona[P]>;
};
export type personaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.personaWhereInput;
    orderBy?: Prisma.personaOrderByWithAggregationInput | Prisma.personaOrderByWithAggregationInput[];
    by: Prisma.PersonaScalarFieldEnum[] | Prisma.PersonaScalarFieldEnum;
    having?: Prisma.personaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PersonaCountAggregateInputType | true;
    _min?: PersonaMinAggregateInputType;
    _max?: PersonaMaxAggregateInputType;
};
export type PersonaGroupByOutputType = {
    id: string;
    nombre: string;
    apellidos: string;
    dni: string | null;
    fechaNacimiento: Date | null;
    email: string | null;
    telefono: string | null;
    observaciones: string | null;
    activo: boolean;
    fechaBaja: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PersonaCountAggregateOutputType | null;
    _min: PersonaMinAggregateOutputType | null;
    _max: PersonaMaxAggregateOutputType | null;
};
export type GetPersonaGroupByPayload<T extends personaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PersonaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PersonaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PersonaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PersonaGroupByOutputType[P]>;
}>>;
export type personaWhereInput = {
    AND?: Prisma.personaWhereInput | Prisma.personaWhereInput[];
    OR?: Prisma.personaWhereInput[];
    NOT?: Prisma.personaWhereInput | Prisma.personaWhereInput[];
    id?: Prisma.StringFilter<"persona"> | string;
    nombre?: Prisma.StringFilter<"persona"> | string;
    apellidos?: Prisma.StringFilter<"persona"> | string;
    dni?: Prisma.StringNullableFilter<"persona"> | string | null;
    fechaNacimiento?: Prisma.DateTimeNullableFilter<"persona"> | Date | string | null;
    email?: Prisma.StringNullableFilter<"persona"> | string | null;
    telefono?: Prisma.StringNullableFilter<"persona"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"persona"> | string | null;
    activo?: Prisma.BoolFilter<"persona"> | boolean;
    fechaBaja?: Prisma.DateTimeNullableFilter<"persona"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"persona"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"persona"> | Date | string;
    alumno?: Prisma.XOR<Prisma.AlumnoNullableScalarRelationFilter, Prisma.alumnoWhereInput> | null;
    director?: Prisma.XOR<Prisma.DirectorNullableScalarRelationFilter, Prisma.directorWhereInput> | null;
    musico?: Prisma.XOR<Prisma.MusicoNullableScalarRelationFilter, Prisma.musicoWhereInput> | null;
    personaagrupacion?: Prisma.PersonaagrupacionListRelationFilter;
    personainstrumento?: Prisma.PersonainstrumentoListRelationFilter;
    personarolfuncional?: Prisma.PersonarolfuncionalListRelationFilter;
    profesor?: Prisma.XOR<Prisma.ProfesorNullableScalarRelationFilter, Prisma.profesorWhereInput> | null;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
};
export type personaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellidos?: Prisma.SortOrder;
    dni?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaNacimiento?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    alumno?: Prisma.alumnoOrderByWithRelationInput;
    director?: Prisma.directorOrderByWithRelationInput;
    musico?: Prisma.musicoOrderByWithRelationInput;
    personaagrupacion?: Prisma.personaagrupacionOrderByRelationAggregateInput;
    personainstrumento?: Prisma.personainstrumentoOrderByRelationAggregateInput;
    personarolfuncional?: Prisma.personarolfuncionalOrderByRelationAggregateInput;
    profesor?: Prisma.profesorOrderByWithRelationInput;
    usuario?: Prisma.usuarioOrderByWithRelationInput;
    _relevance?: Prisma.personaOrderByRelevanceInput;
};
export type personaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.personaWhereInput | Prisma.personaWhereInput[];
    OR?: Prisma.personaWhereInput[];
    NOT?: Prisma.personaWhereInput | Prisma.personaWhereInput[];
    nombre?: Prisma.StringFilter<"persona"> | string;
    apellidos?: Prisma.StringFilter<"persona"> | string;
    dni?: Prisma.StringNullableFilter<"persona"> | string | null;
    fechaNacimiento?: Prisma.DateTimeNullableFilter<"persona"> | Date | string | null;
    email?: Prisma.StringNullableFilter<"persona"> | string | null;
    telefono?: Prisma.StringNullableFilter<"persona"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"persona"> | string | null;
    activo?: Prisma.BoolFilter<"persona"> | boolean;
    fechaBaja?: Prisma.DateTimeNullableFilter<"persona"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"persona"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"persona"> | Date | string;
    alumno?: Prisma.XOR<Prisma.AlumnoNullableScalarRelationFilter, Prisma.alumnoWhereInput> | null;
    director?: Prisma.XOR<Prisma.DirectorNullableScalarRelationFilter, Prisma.directorWhereInput> | null;
    musico?: Prisma.XOR<Prisma.MusicoNullableScalarRelationFilter, Prisma.musicoWhereInput> | null;
    personaagrupacion?: Prisma.PersonaagrupacionListRelationFilter;
    personainstrumento?: Prisma.PersonainstrumentoListRelationFilter;
    personarolfuncional?: Prisma.PersonarolfuncionalListRelationFilter;
    profesor?: Prisma.XOR<Prisma.ProfesorNullableScalarRelationFilter, Prisma.profesorWhereInput> | null;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
}, "id">;
export type personaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellidos?: Prisma.SortOrder;
    dni?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaNacimiento?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.personaCountOrderByAggregateInput;
    _max?: Prisma.personaMaxOrderByAggregateInput;
    _min?: Prisma.personaMinOrderByAggregateInput;
};
export type personaScalarWhereWithAggregatesInput = {
    AND?: Prisma.personaScalarWhereWithAggregatesInput | Prisma.personaScalarWhereWithAggregatesInput[];
    OR?: Prisma.personaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.personaScalarWhereWithAggregatesInput | Prisma.personaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"persona"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"persona"> | string;
    apellidos?: Prisma.StringWithAggregatesFilter<"persona"> | string;
    dni?: Prisma.StringNullableWithAggregatesFilter<"persona"> | string | null;
    fechaNacimiento?: Prisma.DateTimeNullableWithAggregatesFilter<"persona"> | Date | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"persona"> | string | null;
    telefono?: Prisma.StringNullableWithAggregatesFilter<"persona"> | string | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"persona"> | string | null;
    activo?: Prisma.BoolWithAggregatesFilter<"persona"> | boolean;
    fechaBaja?: Prisma.DateTimeNullableWithAggregatesFilter<"persona"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"persona"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"persona"> | Date | string;
};
export type personaCreateInput = {
    id: string;
    nombre: string;
    apellidos: string;
    dni?: string | null;
    fechaNacimiento?: Date | string | null;
    email?: string | null;
    telefono?: string | null;
    observaciones?: string | null;
    activo?: boolean;
    fechaBaja?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno?: Prisma.alumnoCreateNestedOneWithoutPersonaInput;
    director?: Prisma.directorCreateNestedOneWithoutPersonaInput;
    musico?: Prisma.musicoCreateNestedOneWithoutPersonaInput;
    personaagrupacion?: Prisma.personaagrupacionCreateNestedManyWithoutPersonaInput;
    personainstrumento?: Prisma.personainstrumentoCreateNestedManyWithoutPersonaInput;
    personarolfuncional?: Prisma.personarolfuncionalCreateNestedManyWithoutPersonaInput;
    profesor?: Prisma.profesorCreateNestedOneWithoutPersonaInput;
    usuario?: Prisma.usuarioCreateNestedOneWithoutPersonaInput;
};
export type personaUncheckedCreateInput = {
    id: string;
    nombre: string;
    apellidos: string;
    dni?: string | null;
    fechaNacimiento?: Date | string | null;
    email?: string | null;
    telefono?: string | null;
    observaciones?: string | null;
    activo?: boolean;
    fechaBaja?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno?: Prisma.alumnoUncheckedCreateNestedOneWithoutPersonaInput;
    director?: Prisma.directorUncheckedCreateNestedOneWithoutPersonaInput;
    musico?: Prisma.musicoUncheckedCreateNestedOneWithoutPersonaInput;
    personaagrupacion?: Prisma.personaagrupacionUncheckedCreateNestedManyWithoutPersonaInput;
    personainstrumento?: Prisma.personainstrumentoUncheckedCreateNestedManyWithoutPersonaInput;
    personarolfuncional?: Prisma.personarolfuncionalUncheckedCreateNestedManyWithoutPersonaInput;
    profesor?: Prisma.profesorUncheckedCreateNestedOneWithoutPersonaInput;
    usuario?: Prisma.usuarioUncheckedCreateNestedOneWithoutPersonaInput;
};
export type personaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUpdateOneWithoutPersonaNestedInput;
    director?: Prisma.directorUpdateOneWithoutPersonaNestedInput;
    musico?: Prisma.musicoUpdateOneWithoutPersonaNestedInput;
    personaagrupacion?: Prisma.personaagrupacionUpdateManyWithoutPersonaNestedInput;
    personainstrumento?: Prisma.personainstrumentoUpdateManyWithoutPersonaNestedInput;
    personarolfuncional?: Prisma.personarolfuncionalUpdateManyWithoutPersonaNestedInput;
    profesor?: Prisma.profesorUpdateOneWithoutPersonaNestedInput;
    usuario?: Prisma.usuarioUpdateOneWithoutPersonaNestedInput;
};
export type personaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUncheckedUpdateOneWithoutPersonaNestedInput;
    director?: Prisma.directorUncheckedUpdateOneWithoutPersonaNestedInput;
    musico?: Prisma.musicoUncheckedUpdateOneWithoutPersonaNestedInput;
    personaagrupacion?: Prisma.personaagrupacionUncheckedUpdateManyWithoutPersonaNestedInput;
    personainstrumento?: Prisma.personainstrumentoUncheckedUpdateManyWithoutPersonaNestedInput;
    personarolfuncional?: Prisma.personarolfuncionalUncheckedUpdateManyWithoutPersonaNestedInput;
    profesor?: Prisma.profesorUncheckedUpdateOneWithoutPersonaNestedInput;
    usuario?: Prisma.usuarioUncheckedUpdateOneWithoutPersonaNestedInput;
};
export type personaCreateManyInput = {
    id: string;
    nombre: string;
    apellidos: string;
    dni?: string | null;
    fechaNacimiento?: Date | string | null;
    email?: string | null;
    telefono?: string | null;
    observaciones?: string | null;
    activo?: boolean;
    fechaBaja?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type personaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type personaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PersonaScalarRelationFilter = {
    is?: Prisma.personaWhereInput;
    isNot?: Prisma.personaWhereInput;
};
export type personaOrderByRelevanceInput = {
    fields: Prisma.personaOrderByRelevanceFieldEnum | Prisma.personaOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type personaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellidos?: Prisma.SortOrder;
    dni?: Prisma.SortOrder;
    fechaNacimiento?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type personaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellidos?: Prisma.SortOrder;
    dni?: Prisma.SortOrder;
    fechaNacimiento?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type personaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    apellidos?: Prisma.SortOrder;
    dni?: Prisma.SortOrder;
    fechaNacimiento?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type personaCreateNestedOneWithoutAlumnoInput = {
    create?: Prisma.XOR<Prisma.personaCreateWithoutAlumnoInput, Prisma.personaUncheckedCreateWithoutAlumnoInput>;
    connectOrCreate?: Prisma.personaCreateOrConnectWithoutAlumnoInput;
    connect?: Prisma.personaWhereUniqueInput;
};
export type personaUpdateOneRequiredWithoutAlumnoNestedInput = {
    create?: Prisma.XOR<Prisma.personaCreateWithoutAlumnoInput, Prisma.personaUncheckedCreateWithoutAlumnoInput>;
    connectOrCreate?: Prisma.personaCreateOrConnectWithoutAlumnoInput;
    upsert?: Prisma.personaUpsertWithoutAlumnoInput;
    connect?: Prisma.personaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.personaUpdateToOneWithWhereWithoutAlumnoInput, Prisma.personaUpdateWithoutAlumnoInput>, Prisma.personaUncheckedUpdateWithoutAlumnoInput>;
};
export type personaCreateNestedOneWithoutDirectorInput = {
    create?: Prisma.XOR<Prisma.personaCreateWithoutDirectorInput, Prisma.personaUncheckedCreateWithoutDirectorInput>;
    connectOrCreate?: Prisma.personaCreateOrConnectWithoutDirectorInput;
    connect?: Prisma.personaWhereUniqueInput;
};
export type personaUpdateOneRequiredWithoutDirectorNestedInput = {
    create?: Prisma.XOR<Prisma.personaCreateWithoutDirectorInput, Prisma.personaUncheckedCreateWithoutDirectorInput>;
    connectOrCreate?: Prisma.personaCreateOrConnectWithoutDirectorInput;
    upsert?: Prisma.personaUpsertWithoutDirectorInput;
    connect?: Prisma.personaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.personaUpdateToOneWithWhereWithoutDirectorInput, Prisma.personaUpdateWithoutDirectorInput>, Prisma.personaUncheckedUpdateWithoutDirectorInput>;
};
export type personaCreateNestedOneWithoutMusicoInput = {
    create?: Prisma.XOR<Prisma.personaCreateWithoutMusicoInput, Prisma.personaUncheckedCreateWithoutMusicoInput>;
    connectOrCreate?: Prisma.personaCreateOrConnectWithoutMusicoInput;
    connect?: Prisma.personaWhereUniqueInput;
};
export type personaUpdateOneRequiredWithoutMusicoNestedInput = {
    create?: Prisma.XOR<Prisma.personaCreateWithoutMusicoInput, Prisma.personaUncheckedCreateWithoutMusicoInput>;
    connectOrCreate?: Prisma.personaCreateOrConnectWithoutMusicoInput;
    upsert?: Prisma.personaUpsertWithoutMusicoInput;
    connect?: Prisma.personaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.personaUpdateToOneWithWhereWithoutMusicoInput, Prisma.personaUpdateWithoutMusicoInput>, Prisma.personaUncheckedUpdateWithoutMusicoInput>;
};
export type personaCreateNestedOneWithoutPersonaagrupacionInput = {
    create?: Prisma.XOR<Prisma.personaCreateWithoutPersonaagrupacionInput, Prisma.personaUncheckedCreateWithoutPersonaagrupacionInput>;
    connectOrCreate?: Prisma.personaCreateOrConnectWithoutPersonaagrupacionInput;
    connect?: Prisma.personaWhereUniqueInput;
};
export type personaUpdateOneRequiredWithoutPersonaagrupacionNestedInput = {
    create?: Prisma.XOR<Prisma.personaCreateWithoutPersonaagrupacionInput, Prisma.personaUncheckedCreateWithoutPersonaagrupacionInput>;
    connectOrCreate?: Prisma.personaCreateOrConnectWithoutPersonaagrupacionInput;
    upsert?: Prisma.personaUpsertWithoutPersonaagrupacionInput;
    connect?: Prisma.personaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.personaUpdateToOneWithWhereWithoutPersonaagrupacionInput, Prisma.personaUpdateWithoutPersonaagrupacionInput>, Prisma.personaUncheckedUpdateWithoutPersonaagrupacionInput>;
};
export type personaCreateNestedOneWithoutPersonainstrumentoInput = {
    create?: Prisma.XOR<Prisma.personaCreateWithoutPersonainstrumentoInput, Prisma.personaUncheckedCreateWithoutPersonainstrumentoInput>;
    connectOrCreate?: Prisma.personaCreateOrConnectWithoutPersonainstrumentoInput;
    connect?: Prisma.personaWhereUniqueInput;
};
export type personaUpdateOneRequiredWithoutPersonainstrumentoNestedInput = {
    create?: Prisma.XOR<Prisma.personaCreateWithoutPersonainstrumentoInput, Prisma.personaUncheckedCreateWithoutPersonainstrumentoInput>;
    connectOrCreate?: Prisma.personaCreateOrConnectWithoutPersonainstrumentoInput;
    upsert?: Prisma.personaUpsertWithoutPersonainstrumentoInput;
    connect?: Prisma.personaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.personaUpdateToOneWithWhereWithoutPersonainstrumentoInput, Prisma.personaUpdateWithoutPersonainstrumentoInput>, Prisma.personaUncheckedUpdateWithoutPersonainstrumentoInput>;
};
export type personaCreateNestedOneWithoutPersonarolfuncionalInput = {
    create?: Prisma.XOR<Prisma.personaCreateWithoutPersonarolfuncionalInput, Prisma.personaUncheckedCreateWithoutPersonarolfuncionalInput>;
    connectOrCreate?: Prisma.personaCreateOrConnectWithoutPersonarolfuncionalInput;
    connect?: Prisma.personaWhereUniqueInput;
};
export type personaUpdateOneRequiredWithoutPersonarolfuncionalNestedInput = {
    create?: Prisma.XOR<Prisma.personaCreateWithoutPersonarolfuncionalInput, Prisma.personaUncheckedCreateWithoutPersonarolfuncionalInput>;
    connectOrCreate?: Prisma.personaCreateOrConnectWithoutPersonarolfuncionalInput;
    upsert?: Prisma.personaUpsertWithoutPersonarolfuncionalInput;
    connect?: Prisma.personaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.personaUpdateToOneWithWhereWithoutPersonarolfuncionalInput, Prisma.personaUpdateWithoutPersonarolfuncionalInput>, Prisma.personaUncheckedUpdateWithoutPersonarolfuncionalInput>;
};
export type personaCreateNestedOneWithoutProfesorInput = {
    create?: Prisma.XOR<Prisma.personaCreateWithoutProfesorInput, Prisma.personaUncheckedCreateWithoutProfesorInput>;
    connectOrCreate?: Prisma.personaCreateOrConnectWithoutProfesorInput;
    connect?: Prisma.personaWhereUniqueInput;
};
export type personaUpdateOneRequiredWithoutProfesorNestedInput = {
    create?: Prisma.XOR<Prisma.personaCreateWithoutProfesorInput, Prisma.personaUncheckedCreateWithoutProfesorInput>;
    connectOrCreate?: Prisma.personaCreateOrConnectWithoutProfesorInput;
    upsert?: Prisma.personaUpsertWithoutProfesorInput;
    connect?: Prisma.personaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.personaUpdateToOneWithWhereWithoutProfesorInput, Prisma.personaUpdateWithoutProfesorInput>, Prisma.personaUncheckedUpdateWithoutProfesorInput>;
};
export type personaCreateNestedOneWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.personaCreateWithoutUsuarioInput, Prisma.personaUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.personaCreateOrConnectWithoutUsuarioInput;
    connect?: Prisma.personaWhereUniqueInput;
};
export type personaUpdateOneRequiredWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.personaCreateWithoutUsuarioInput, Prisma.personaUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.personaCreateOrConnectWithoutUsuarioInput;
    upsert?: Prisma.personaUpsertWithoutUsuarioInput;
    connect?: Prisma.personaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.personaUpdateToOneWithWhereWithoutUsuarioInput, Prisma.personaUpdateWithoutUsuarioInput>, Prisma.personaUncheckedUpdateWithoutUsuarioInput>;
};
export type personaCreateWithoutAlumnoInput = {
    id: string;
    nombre: string;
    apellidos: string;
    dni?: string | null;
    fechaNacimiento?: Date | string | null;
    email?: string | null;
    telefono?: string | null;
    observaciones?: string | null;
    activo?: boolean;
    fechaBaja?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    director?: Prisma.directorCreateNestedOneWithoutPersonaInput;
    musico?: Prisma.musicoCreateNestedOneWithoutPersonaInput;
    personaagrupacion?: Prisma.personaagrupacionCreateNestedManyWithoutPersonaInput;
    personainstrumento?: Prisma.personainstrumentoCreateNestedManyWithoutPersonaInput;
    personarolfuncional?: Prisma.personarolfuncionalCreateNestedManyWithoutPersonaInput;
    profesor?: Prisma.profesorCreateNestedOneWithoutPersonaInput;
    usuario?: Prisma.usuarioCreateNestedOneWithoutPersonaInput;
};
export type personaUncheckedCreateWithoutAlumnoInput = {
    id: string;
    nombre: string;
    apellidos: string;
    dni?: string | null;
    fechaNacimiento?: Date | string | null;
    email?: string | null;
    telefono?: string | null;
    observaciones?: string | null;
    activo?: boolean;
    fechaBaja?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    director?: Prisma.directorUncheckedCreateNestedOneWithoutPersonaInput;
    musico?: Prisma.musicoUncheckedCreateNestedOneWithoutPersonaInput;
    personaagrupacion?: Prisma.personaagrupacionUncheckedCreateNestedManyWithoutPersonaInput;
    personainstrumento?: Prisma.personainstrumentoUncheckedCreateNestedManyWithoutPersonaInput;
    personarolfuncional?: Prisma.personarolfuncionalUncheckedCreateNestedManyWithoutPersonaInput;
    profesor?: Prisma.profesorUncheckedCreateNestedOneWithoutPersonaInput;
    usuario?: Prisma.usuarioUncheckedCreateNestedOneWithoutPersonaInput;
};
export type personaCreateOrConnectWithoutAlumnoInput = {
    where: Prisma.personaWhereUniqueInput;
    create: Prisma.XOR<Prisma.personaCreateWithoutAlumnoInput, Prisma.personaUncheckedCreateWithoutAlumnoInput>;
};
export type personaUpsertWithoutAlumnoInput = {
    update: Prisma.XOR<Prisma.personaUpdateWithoutAlumnoInput, Prisma.personaUncheckedUpdateWithoutAlumnoInput>;
    create: Prisma.XOR<Prisma.personaCreateWithoutAlumnoInput, Prisma.personaUncheckedCreateWithoutAlumnoInput>;
    where?: Prisma.personaWhereInput;
};
export type personaUpdateToOneWithWhereWithoutAlumnoInput = {
    where?: Prisma.personaWhereInput;
    data: Prisma.XOR<Prisma.personaUpdateWithoutAlumnoInput, Prisma.personaUncheckedUpdateWithoutAlumnoInput>;
};
export type personaUpdateWithoutAlumnoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    director?: Prisma.directorUpdateOneWithoutPersonaNestedInput;
    musico?: Prisma.musicoUpdateOneWithoutPersonaNestedInput;
    personaagrupacion?: Prisma.personaagrupacionUpdateManyWithoutPersonaNestedInput;
    personainstrumento?: Prisma.personainstrumentoUpdateManyWithoutPersonaNestedInput;
    personarolfuncional?: Prisma.personarolfuncionalUpdateManyWithoutPersonaNestedInput;
    profesor?: Prisma.profesorUpdateOneWithoutPersonaNestedInput;
    usuario?: Prisma.usuarioUpdateOneWithoutPersonaNestedInput;
};
export type personaUncheckedUpdateWithoutAlumnoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    director?: Prisma.directorUncheckedUpdateOneWithoutPersonaNestedInput;
    musico?: Prisma.musicoUncheckedUpdateOneWithoutPersonaNestedInput;
    personaagrupacion?: Prisma.personaagrupacionUncheckedUpdateManyWithoutPersonaNestedInput;
    personainstrumento?: Prisma.personainstrumentoUncheckedUpdateManyWithoutPersonaNestedInput;
    personarolfuncional?: Prisma.personarolfuncionalUncheckedUpdateManyWithoutPersonaNestedInput;
    profesor?: Prisma.profesorUncheckedUpdateOneWithoutPersonaNestedInput;
    usuario?: Prisma.usuarioUncheckedUpdateOneWithoutPersonaNestedInput;
};
export type personaCreateWithoutDirectorInput = {
    id: string;
    nombre: string;
    apellidos: string;
    dni?: string | null;
    fechaNacimiento?: Date | string | null;
    email?: string | null;
    telefono?: string | null;
    observaciones?: string | null;
    activo?: boolean;
    fechaBaja?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno?: Prisma.alumnoCreateNestedOneWithoutPersonaInput;
    musico?: Prisma.musicoCreateNestedOneWithoutPersonaInput;
    personaagrupacion?: Prisma.personaagrupacionCreateNestedManyWithoutPersonaInput;
    personainstrumento?: Prisma.personainstrumentoCreateNestedManyWithoutPersonaInput;
    personarolfuncional?: Prisma.personarolfuncionalCreateNestedManyWithoutPersonaInput;
    profesor?: Prisma.profesorCreateNestedOneWithoutPersonaInput;
    usuario?: Prisma.usuarioCreateNestedOneWithoutPersonaInput;
};
export type personaUncheckedCreateWithoutDirectorInput = {
    id: string;
    nombre: string;
    apellidos: string;
    dni?: string | null;
    fechaNacimiento?: Date | string | null;
    email?: string | null;
    telefono?: string | null;
    observaciones?: string | null;
    activo?: boolean;
    fechaBaja?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno?: Prisma.alumnoUncheckedCreateNestedOneWithoutPersonaInput;
    musico?: Prisma.musicoUncheckedCreateNestedOneWithoutPersonaInput;
    personaagrupacion?: Prisma.personaagrupacionUncheckedCreateNestedManyWithoutPersonaInput;
    personainstrumento?: Prisma.personainstrumentoUncheckedCreateNestedManyWithoutPersonaInput;
    personarolfuncional?: Prisma.personarolfuncionalUncheckedCreateNestedManyWithoutPersonaInput;
    profesor?: Prisma.profesorUncheckedCreateNestedOneWithoutPersonaInput;
    usuario?: Prisma.usuarioUncheckedCreateNestedOneWithoutPersonaInput;
};
export type personaCreateOrConnectWithoutDirectorInput = {
    where: Prisma.personaWhereUniqueInput;
    create: Prisma.XOR<Prisma.personaCreateWithoutDirectorInput, Prisma.personaUncheckedCreateWithoutDirectorInput>;
};
export type personaUpsertWithoutDirectorInput = {
    update: Prisma.XOR<Prisma.personaUpdateWithoutDirectorInput, Prisma.personaUncheckedUpdateWithoutDirectorInput>;
    create: Prisma.XOR<Prisma.personaCreateWithoutDirectorInput, Prisma.personaUncheckedCreateWithoutDirectorInput>;
    where?: Prisma.personaWhereInput;
};
export type personaUpdateToOneWithWhereWithoutDirectorInput = {
    where?: Prisma.personaWhereInput;
    data: Prisma.XOR<Prisma.personaUpdateWithoutDirectorInput, Prisma.personaUncheckedUpdateWithoutDirectorInput>;
};
export type personaUpdateWithoutDirectorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUpdateOneWithoutPersonaNestedInput;
    musico?: Prisma.musicoUpdateOneWithoutPersonaNestedInput;
    personaagrupacion?: Prisma.personaagrupacionUpdateManyWithoutPersonaNestedInput;
    personainstrumento?: Prisma.personainstrumentoUpdateManyWithoutPersonaNestedInput;
    personarolfuncional?: Prisma.personarolfuncionalUpdateManyWithoutPersonaNestedInput;
    profesor?: Prisma.profesorUpdateOneWithoutPersonaNestedInput;
    usuario?: Prisma.usuarioUpdateOneWithoutPersonaNestedInput;
};
export type personaUncheckedUpdateWithoutDirectorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUncheckedUpdateOneWithoutPersonaNestedInput;
    musico?: Prisma.musicoUncheckedUpdateOneWithoutPersonaNestedInput;
    personaagrupacion?: Prisma.personaagrupacionUncheckedUpdateManyWithoutPersonaNestedInput;
    personainstrumento?: Prisma.personainstrumentoUncheckedUpdateManyWithoutPersonaNestedInput;
    personarolfuncional?: Prisma.personarolfuncionalUncheckedUpdateManyWithoutPersonaNestedInput;
    profesor?: Prisma.profesorUncheckedUpdateOneWithoutPersonaNestedInput;
    usuario?: Prisma.usuarioUncheckedUpdateOneWithoutPersonaNestedInput;
};
export type personaCreateWithoutMusicoInput = {
    id: string;
    nombre: string;
    apellidos: string;
    dni?: string | null;
    fechaNacimiento?: Date | string | null;
    email?: string | null;
    telefono?: string | null;
    observaciones?: string | null;
    activo?: boolean;
    fechaBaja?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno?: Prisma.alumnoCreateNestedOneWithoutPersonaInput;
    director?: Prisma.directorCreateNestedOneWithoutPersonaInput;
    personaagrupacion?: Prisma.personaagrupacionCreateNestedManyWithoutPersonaInput;
    personainstrumento?: Prisma.personainstrumentoCreateNestedManyWithoutPersonaInput;
    personarolfuncional?: Prisma.personarolfuncionalCreateNestedManyWithoutPersonaInput;
    profesor?: Prisma.profesorCreateNestedOneWithoutPersonaInput;
    usuario?: Prisma.usuarioCreateNestedOneWithoutPersonaInput;
};
export type personaUncheckedCreateWithoutMusicoInput = {
    id: string;
    nombre: string;
    apellidos: string;
    dni?: string | null;
    fechaNacimiento?: Date | string | null;
    email?: string | null;
    telefono?: string | null;
    observaciones?: string | null;
    activo?: boolean;
    fechaBaja?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno?: Prisma.alumnoUncheckedCreateNestedOneWithoutPersonaInput;
    director?: Prisma.directorUncheckedCreateNestedOneWithoutPersonaInput;
    personaagrupacion?: Prisma.personaagrupacionUncheckedCreateNestedManyWithoutPersonaInput;
    personainstrumento?: Prisma.personainstrumentoUncheckedCreateNestedManyWithoutPersonaInput;
    personarolfuncional?: Prisma.personarolfuncionalUncheckedCreateNestedManyWithoutPersonaInput;
    profesor?: Prisma.profesorUncheckedCreateNestedOneWithoutPersonaInput;
    usuario?: Prisma.usuarioUncheckedCreateNestedOneWithoutPersonaInput;
};
export type personaCreateOrConnectWithoutMusicoInput = {
    where: Prisma.personaWhereUniqueInput;
    create: Prisma.XOR<Prisma.personaCreateWithoutMusicoInput, Prisma.personaUncheckedCreateWithoutMusicoInput>;
};
export type personaUpsertWithoutMusicoInput = {
    update: Prisma.XOR<Prisma.personaUpdateWithoutMusicoInput, Prisma.personaUncheckedUpdateWithoutMusicoInput>;
    create: Prisma.XOR<Prisma.personaCreateWithoutMusicoInput, Prisma.personaUncheckedCreateWithoutMusicoInput>;
    where?: Prisma.personaWhereInput;
};
export type personaUpdateToOneWithWhereWithoutMusicoInput = {
    where?: Prisma.personaWhereInput;
    data: Prisma.XOR<Prisma.personaUpdateWithoutMusicoInput, Prisma.personaUncheckedUpdateWithoutMusicoInput>;
};
export type personaUpdateWithoutMusicoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUpdateOneWithoutPersonaNestedInput;
    director?: Prisma.directorUpdateOneWithoutPersonaNestedInput;
    personaagrupacion?: Prisma.personaagrupacionUpdateManyWithoutPersonaNestedInput;
    personainstrumento?: Prisma.personainstrumentoUpdateManyWithoutPersonaNestedInput;
    personarolfuncional?: Prisma.personarolfuncionalUpdateManyWithoutPersonaNestedInput;
    profesor?: Prisma.profesorUpdateOneWithoutPersonaNestedInput;
    usuario?: Prisma.usuarioUpdateOneWithoutPersonaNestedInput;
};
export type personaUncheckedUpdateWithoutMusicoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUncheckedUpdateOneWithoutPersonaNestedInput;
    director?: Prisma.directorUncheckedUpdateOneWithoutPersonaNestedInput;
    personaagrupacion?: Prisma.personaagrupacionUncheckedUpdateManyWithoutPersonaNestedInput;
    personainstrumento?: Prisma.personainstrumentoUncheckedUpdateManyWithoutPersonaNestedInput;
    personarolfuncional?: Prisma.personarolfuncionalUncheckedUpdateManyWithoutPersonaNestedInput;
    profesor?: Prisma.profesorUncheckedUpdateOneWithoutPersonaNestedInput;
    usuario?: Prisma.usuarioUncheckedUpdateOneWithoutPersonaNestedInput;
};
export type personaCreateWithoutPersonaagrupacionInput = {
    id: string;
    nombre: string;
    apellidos: string;
    dni?: string | null;
    fechaNacimiento?: Date | string | null;
    email?: string | null;
    telefono?: string | null;
    observaciones?: string | null;
    activo?: boolean;
    fechaBaja?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno?: Prisma.alumnoCreateNestedOneWithoutPersonaInput;
    director?: Prisma.directorCreateNestedOneWithoutPersonaInput;
    musico?: Prisma.musicoCreateNestedOneWithoutPersonaInput;
    personainstrumento?: Prisma.personainstrumentoCreateNestedManyWithoutPersonaInput;
    personarolfuncional?: Prisma.personarolfuncionalCreateNestedManyWithoutPersonaInput;
    profesor?: Prisma.profesorCreateNestedOneWithoutPersonaInput;
    usuario?: Prisma.usuarioCreateNestedOneWithoutPersonaInput;
};
export type personaUncheckedCreateWithoutPersonaagrupacionInput = {
    id: string;
    nombre: string;
    apellidos: string;
    dni?: string | null;
    fechaNacimiento?: Date | string | null;
    email?: string | null;
    telefono?: string | null;
    observaciones?: string | null;
    activo?: boolean;
    fechaBaja?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno?: Prisma.alumnoUncheckedCreateNestedOneWithoutPersonaInput;
    director?: Prisma.directorUncheckedCreateNestedOneWithoutPersonaInput;
    musico?: Prisma.musicoUncheckedCreateNestedOneWithoutPersonaInput;
    personainstrumento?: Prisma.personainstrumentoUncheckedCreateNestedManyWithoutPersonaInput;
    personarolfuncional?: Prisma.personarolfuncionalUncheckedCreateNestedManyWithoutPersonaInput;
    profesor?: Prisma.profesorUncheckedCreateNestedOneWithoutPersonaInput;
    usuario?: Prisma.usuarioUncheckedCreateNestedOneWithoutPersonaInput;
};
export type personaCreateOrConnectWithoutPersonaagrupacionInput = {
    where: Prisma.personaWhereUniqueInput;
    create: Prisma.XOR<Prisma.personaCreateWithoutPersonaagrupacionInput, Prisma.personaUncheckedCreateWithoutPersonaagrupacionInput>;
};
export type personaUpsertWithoutPersonaagrupacionInput = {
    update: Prisma.XOR<Prisma.personaUpdateWithoutPersonaagrupacionInput, Prisma.personaUncheckedUpdateWithoutPersonaagrupacionInput>;
    create: Prisma.XOR<Prisma.personaCreateWithoutPersonaagrupacionInput, Prisma.personaUncheckedCreateWithoutPersonaagrupacionInput>;
    where?: Prisma.personaWhereInput;
};
export type personaUpdateToOneWithWhereWithoutPersonaagrupacionInput = {
    where?: Prisma.personaWhereInput;
    data: Prisma.XOR<Prisma.personaUpdateWithoutPersonaagrupacionInput, Prisma.personaUncheckedUpdateWithoutPersonaagrupacionInput>;
};
export type personaUpdateWithoutPersonaagrupacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUpdateOneWithoutPersonaNestedInput;
    director?: Prisma.directorUpdateOneWithoutPersonaNestedInput;
    musico?: Prisma.musicoUpdateOneWithoutPersonaNestedInput;
    personainstrumento?: Prisma.personainstrumentoUpdateManyWithoutPersonaNestedInput;
    personarolfuncional?: Prisma.personarolfuncionalUpdateManyWithoutPersonaNestedInput;
    profesor?: Prisma.profesorUpdateOneWithoutPersonaNestedInput;
    usuario?: Prisma.usuarioUpdateOneWithoutPersonaNestedInput;
};
export type personaUncheckedUpdateWithoutPersonaagrupacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUncheckedUpdateOneWithoutPersonaNestedInput;
    director?: Prisma.directorUncheckedUpdateOneWithoutPersonaNestedInput;
    musico?: Prisma.musicoUncheckedUpdateOneWithoutPersonaNestedInput;
    personainstrumento?: Prisma.personainstrumentoUncheckedUpdateManyWithoutPersonaNestedInput;
    personarolfuncional?: Prisma.personarolfuncionalUncheckedUpdateManyWithoutPersonaNestedInput;
    profesor?: Prisma.profesorUncheckedUpdateOneWithoutPersonaNestedInput;
    usuario?: Prisma.usuarioUncheckedUpdateOneWithoutPersonaNestedInput;
};
export type personaCreateWithoutPersonainstrumentoInput = {
    id: string;
    nombre: string;
    apellidos: string;
    dni?: string | null;
    fechaNacimiento?: Date | string | null;
    email?: string | null;
    telefono?: string | null;
    observaciones?: string | null;
    activo?: boolean;
    fechaBaja?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno?: Prisma.alumnoCreateNestedOneWithoutPersonaInput;
    director?: Prisma.directorCreateNestedOneWithoutPersonaInput;
    musico?: Prisma.musicoCreateNestedOneWithoutPersonaInput;
    personaagrupacion?: Prisma.personaagrupacionCreateNestedManyWithoutPersonaInput;
    personarolfuncional?: Prisma.personarolfuncionalCreateNestedManyWithoutPersonaInput;
    profesor?: Prisma.profesorCreateNestedOneWithoutPersonaInput;
    usuario?: Prisma.usuarioCreateNestedOneWithoutPersonaInput;
};
export type personaUncheckedCreateWithoutPersonainstrumentoInput = {
    id: string;
    nombre: string;
    apellidos: string;
    dni?: string | null;
    fechaNacimiento?: Date | string | null;
    email?: string | null;
    telefono?: string | null;
    observaciones?: string | null;
    activo?: boolean;
    fechaBaja?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno?: Prisma.alumnoUncheckedCreateNestedOneWithoutPersonaInput;
    director?: Prisma.directorUncheckedCreateNestedOneWithoutPersonaInput;
    musico?: Prisma.musicoUncheckedCreateNestedOneWithoutPersonaInput;
    personaagrupacion?: Prisma.personaagrupacionUncheckedCreateNestedManyWithoutPersonaInput;
    personarolfuncional?: Prisma.personarolfuncionalUncheckedCreateNestedManyWithoutPersonaInput;
    profesor?: Prisma.profesorUncheckedCreateNestedOneWithoutPersonaInput;
    usuario?: Prisma.usuarioUncheckedCreateNestedOneWithoutPersonaInput;
};
export type personaCreateOrConnectWithoutPersonainstrumentoInput = {
    where: Prisma.personaWhereUniqueInput;
    create: Prisma.XOR<Prisma.personaCreateWithoutPersonainstrumentoInput, Prisma.personaUncheckedCreateWithoutPersonainstrumentoInput>;
};
export type personaUpsertWithoutPersonainstrumentoInput = {
    update: Prisma.XOR<Prisma.personaUpdateWithoutPersonainstrumentoInput, Prisma.personaUncheckedUpdateWithoutPersonainstrumentoInput>;
    create: Prisma.XOR<Prisma.personaCreateWithoutPersonainstrumentoInput, Prisma.personaUncheckedCreateWithoutPersonainstrumentoInput>;
    where?: Prisma.personaWhereInput;
};
export type personaUpdateToOneWithWhereWithoutPersonainstrumentoInput = {
    where?: Prisma.personaWhereInput;
    data: Prisma.XOR<Prisma.personaUpdateWithoutPersonainstrumentoInput, Prisma.personaUncheckedUpdateWithoutPersonainstrumentoInput>;
};
export type personaUpdateWithoutPersonainstrumentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUpdateOneWithoutPersonaNestedInput;
    director?: Prisma.directorUpdateOneWithoutPersonaNestedInput;
    musico?: Prisma.musicoUpdateOneWithoutPersonaNestedInput;
    personaagrupacion?: Prisma.personaagrupacionUpdateManyWithoutPersonaNestedInput;
    personarolfuncional?: Prisma.personarolfuncionalUpdateManyWithoutPersonaNestedInput;
    profesor?: Prisma.profesorUpdateOneWithoutPersonaNestedInput;
    usuario?: Prisma.usuarioUpdateOneWithoutPersonaNestedInput;
};
export type personaUncheckedUpdateWithoutPersonainstrumentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUncheckedUpdateOneWithoutPersonaNestedInput;
    director?: Prisma.directorUncheckedUpdateOneWithoutPersonaNestedInput;
    musico?: Prisma.musicoUncheckedUpdateOneWithoutPersonaNestedInput;
    personaagrupacion?: Prisma.personaagrupacionUncheckedUpdateManyWithoutPersonaNestedInput;
    personarolfuncional?: Prisma.personarolfuncionalUncheckedUpdateManyWithoutPersonaNestedInput;
    profesor?: Prisma.profesorUncheckedUpdateOneWithoutPersonaNestedInput;
    usuario?: Prisma.usuarioUncheckedUpdateOneWithoutPersonaNestedInput;
};
export type personaCreateWithoutPersonarolfuncionalInput = {
    id: string;
    nombre: string;
    apellidos: string;
    dni?: string | null;
    fechaNacimiento?: Date | string | null;
    email?: string | null;
    telefono?: string | null;
    observaciones?: string | null;
    activo?: boolean;
    fechaBaja?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno?: Prisma.alumnoCreateNestedOneWithoutPersonaInput;
    director?: Prisma.directorCreateNestedOneWithoutPersonaInput;
    musico?: Prisma.musicoCreateNestedOneWithoutPersonaInput;
    personaagrupacion?: Prisma.personaagrupacionCreateNestedManyWithoutPersonaInput;
    personainstrumento?: Prisma.personainstrumentoCreateNestedManyWithoutPersonaInput;
    profesor?: Prisma.profesorCreateNestedOneWithoutPersonaInput;
    usuario?: Prisma.usuarioCreateNestedOneWithoutPersonaInput;
};
export type personaUncheckedCreateWithoutPersonarolfuncionalInput = {
    id: string;
    nombre: string;
    apellidos: string;
    dni?: string | null;
    fechaNacimiento?: Date | string | null;
    email?: string | null;
    telefono?: string | null;
    observaciones?: string | null;
    activo?: boolean;
    fechaBaja?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno?: Prisma.alumnoUncheckedCreateNestedOneWithoutPersonaInput;
    director?: Prisma.directorUncheckedCreateNestedOneWithoutPersonaInput;
    musico?: Prisma.musicoUncheckedCreateNestedOneWithoutPersonaInput;
    personaagrupacion?: Prisma.personaagrupacionUncheckedCreateNestedManyWithoutPersonaInput;
    personainstrumento?: Prisma.personainstrumentoUncheckedCreateNestedManyWithoutPersonaInput;
    profesor?: Prisma.profesorUncheckedCreateNestedOneWithoutPersonaInput;
    usuario?: Prisma.usuarioUncheckedCreateNestedOneWithoutPersonaInput;
};
export type personaCreateOrConnectWithoutPersonarolfuncionalInput = {
    where: Prisma.personaWhereUniqueInput;
    create: Prisma.XOR<Prisma.personaCreateWithoutPersonarolfuncionalInput, Prisma.personaUncheckedCreateWithoutPersonarolfuncionalInput>;
};
export type personaUpsertWithoutPersonarolfuncionalInput = {
    update: Prisma.XOR<Prisma.personaUpdateWithoutPersonarolfuncionalInput, Prisma.personaUncheckedUpdateWithoutPersonarolfuncionalInput>;
    create: Prisma.XOR<Prisma.personaCreateWithoutPersonarolfuncionalInput, Prisma.personaUncheckedCreateWithoutPersonarolfuncionalInput>;
    where?: Prisma.personaWhereInput;
};
export type personaUpdateToOneWithWhereWithoutPersonarolfuncionalInput = {
    where?: Prisma.personaWhereInput;
    data: Prisma.XOR<Prisma.personaUpdateWithoutPersonarolfuncionalInput, Prisma.personaUncheckedUpdateWithoutPersonarolfuncionalInput>;
};
export type personaUpdateWithoutPersonarolfuncionalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUpdateOneWithoutPersonaNestedInput;
    director?: Prisma.directorUpdateOneWithoutPersonaNestedInput;
    musico?: Prisma.musicoUpdateOneWithoutPersonaNestedInput;
    personaagrupacion?: Prisma.personaagrupacionUpdateManyWithoutPersonaNestedInput;
    personainstrumento?: Prisma.personainstrumentoUpdateManyWithoutPersonaNestedInput;
    profesor?: Prisma.profesorUpdateOneWithoutPersonaNestedInput;
    usuario?: Prisma.usuarioUpdateOneWithoutPersonaNestedInput;
};
export type personaUncheckedUpdateWithoutPersonarolfuncionalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUncheckedUpdateOneWithoutPersonaNestedInput;
    director?: Prisma.directorUncheckedUpdateOneWithoutPersonaNestedInput;
    musico?: Prisma.musicoUncheckedUpdateOneWithoutPersonaNestedInput;
    personaagrupacion?: Prisma.personaagrupacionUncheckedUpdateManyWithoutPersonaNestedInput;
    personainstrumento?: Prisma.personainstrumentoUncheckedUpdateManyWithoutPersonaNestedInput;
    profesor?: Prisma.profesorUncheckedUpdateOneWithoutPersonaNestedInput;
    usuario?: Prisma.usuarioUncheckedUpdateOneWithoutPersonaNestedInput;
};
export type personaCreateWithoutProfesorInput = {
    id: string;
    nombre: string;
    apellidos: string;
    dni?: string | null;
    fechaNacimiento?: Date | string | null;
    email?: string | null;
    telefono?: string | null;
    observaciones?: string | null;
    activo?: boolean;
    fechaBaja?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno?: Prisma.alumnoCreateNestedOneWithoutPersonaInput;
    director?: Prisma.directorCreateNestedOneWithoutPersonaInput;
    musico?: Prisma.musicoCreateNestedOneWithoutPersonaInput;
    personaagrupacion?: Prisma.personaagrupacionCreateNestedManyWithoutPersonaInput;
    personainstrumento?: Prisma.personainstrumentoCreateNestedManyWithoutPersonaInput;
    personarolfuncional?: Prisma.personarolfuncionalCreateNestedManyWithoutPersonaInput;
    usuario?: Prisma.usuarioCreateNestedOneWithoutPersonaInput;
};
export type personaUncheckedCreateWithoutProfesorInput = {
    id: string;
    nombre: string;
    apellidos: string;
    dni?: string | null;
    fechaNacimiento?: Date | string | null;
    email?: string | null;
    telefono?: string | null;
    observaciones?: string | null;
    activo?: boolean;
    fechaBaja?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno?: Prisma.alumnoUncheckedCreateNestedOneWithoutPersonaInput;
    director?: Prisma.directorUncheckedCreateNestedOneWithoutPersonaInput;
    musico?: Prisma.musicoUncheckedCreateNestedOneWithoutPersonaInput;
    personaagrupacion?: Prisma.personaagrupacionUncheckedCreateNestedManyWithoutPersonaInput;
    personainstrumento?: Prisma.personainstrumentoUncheckedCreateNestedManyWithoutPersonaInput;
    personarolfuncional?: Prisma.personarolfuncionalUncheckedCreateNestedManyWithoutPersonaInput;
    usuario?: Prisma.usuarioUncheckedCreateNestedOneWithoutPersonaInput;
};
export type personaCreateOrConnectWithoutProfesorInput = {
    where: Prisma.personaWhereUniqueInput;
    create: Prisma.XOR<Prisma.personaCreateWithoutProfesorInput, Prisma.personaUncheckedCreateWithoutProfesorInput>;
};
export type personaUpsertWithoutProfesorInput = {
    update: Prisma.XOR<Prisma.personaUpdateWithoutProfesorInput, Prisma.personaUncheckedUpdateWithoutProfesorInput>;
    create: Prisma.XOR<Prisma.personaCreateWithoutProfesorInput, Prisma.personaUncheckedCreateWithoutProfesorInput>;
    where?: Prisma.personaWhereInput;
};
export type personaUpdateToOneWithWhereWithoutProfesorInput = {
    where?: Prisma.personaWhereInput;
    data: Prisma.XOR<Prisma.personaUpdateWithoutProfesorInput, Prisma.personaUncheckedUpdateWithoutProfesorInput>;
};
export type personaUpdateWithoutProfesorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUpdateOneWithoutPersonaNestedInput;
    director?: Prisma.directorUpdateOneWithoutPersonaNestedInput;
    musico?: Prisma.musicoUpdateOneWithoutPersonaNestedInput;
    personaagrupacion?: Prisma.personaagrupacionUpdateManyWithoutPersonaNestedInput;
    personainstrumento?: Prisma.personainstrumentoUpdateManyWithoutPersonaNestedInput;
    personarolfuncional?: Prisma.personarolfuncionalUpdateManyWithoutPersonaNestedInput;
    usuario?: Prisma.usuarioUpdateOneWithoutPersonaNestedInput;
};
export type personaUncheckedUpdateWithoutProfesorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUncheckedUpdateOneWithoutPersonaNestedInput;
    director?: Prisma.directorUncheckedUpdateOneWithoutPersonaNestedInput;
    musico?: Prisma.musicoUncheckedUpdateOneWithoutPersonaNestedInput;
    personaagrupacion?: Prisma.personaagrupacionUncheckedUpdateManyWithoutPersonaNestedInput;
    personainstrumento?: Prisma.personainstrumentoUncheckedUpdateManyWithoutPersonaNestedInput;
    personarolfuncional?: Prisma.personarolfuncionalUncheckedUpdateManyWithoutPersonaNestedInput;
    usuario?: Prisma.usuarioUncheckedUpdateOneWithoutPersonaNestedInput;
};
export type personaCreateWithoutUsuarioInput = {
    id: string;
    nombre: string;
    apellidos: string;
    dni?: string | null;
    fechaNacimiento?: Date | string | null;
    email?: string | null;
    telefono?: string | null;
    observaciones?: string | null;
    activo?: boolean;
    fechaBaja?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno?: Prisma.alumnoCreateNestedOneWithoutPersonaInput;
    director?: Prisma.directorCreateNestedOneWithoutPersonaInput;
    musico?: Prisma.musicoCreateNestedOneWithoutPersonaInput;
    personaagrupacion?: Prisma.personaagrupacionCreateNestedManyWithoutPersonaInput;
    personainstrumento?: Prisma.personainstrumentoCreateNestedManyWithoutPersonaInput;
    personarolfuncional?: Prisma.personarolfuncionalCreateNestedManyWithoutPersonaInput;
    profesor?: Prisma.profesorCreateNestedOneWithoutPersonaInput;
};
export type personaUncheckedCreateWithoutUsuarioInput = {
    id: string;
    nombre: string;
    apellidos: string;
    dni?: string | null;
    fechaNacimiento?: Date | string | null;
    email?: string | null;
    telefono?: string | null;
    observaciones?: string | null;
    activo?: boolean;
    fechaBaja?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno?: Prisma.alumnoUncheckedCreateNestedOneWithoutPersonaInput;
    director?: Prisma.directorUncheckedCreateNestedOneWithoutPersonaInput;
    musico?: Prisma.musicoUncheckedCreateNestedOneWithoutPersonaInput;
    personaagrupacion?: Prisma.personaagrupacionUncheckedCreateNestedManyWithoutPersonaInput;
    personainstrumento?: Prisma.personainstrumentoUncheckedCreateNestedManyWithoutPersonaInput;
    personarolfuncional?: Prisma.personarolfuncionalUncheckedCreateNestedManyWithoutPersonaInput;
    profesor?: Prisma.profesorUncheckedCreateNestedOneWithoutPersonaInput;
};
export type personaCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.personaWhereUniqueInput;
    create: Prisma.XOR<Prisma.personaCreateWithoutUsuarioInput, Prisma.personaUncheckedCreateWithoutUsuarioInput>;
};
export type personaUpsertWithoutUsuarioInput = {
    update: Prisma.XOR<Prisma.personaUpdateWithoutUsuarioInput, Prisma.personaUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.personaCreateWithoutUsuarioInput, Prisma.personaUncheckedCreateWithoutUsuarioInput>;
    where?: Prisma.personaWhereInput;
};
export type personaUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: Prisma.personaWhereInput;
    data: Prisma.XOR<Prisma.personaUpdateWithoutUsuarioInput, Prisma.personaUncheckedUpdateWithoutUsuarioInput>;
};
export type personaUpdateWithoutUsuarioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUpdateOneWithoutPersonaNestedInput;
    director?: Prisma.directorUpdateOneWithoutPersonaNestedInput;
    musico?: Prisma.musicoUpdateOneWithoutPersonaNestedInput;
    personaagrupacion?: Prisma.personaagrupacionUpdateManyWithoutPersonaNestedInput;
    personainstrumento?: Prisma.personainstrumentoUpdateManyWithoutPersonaNestedInput;
    personarolfuncional?: Prisma.personarolfuncionalUpdateManyWithoutPersonaNestedInput;
    profesor?: Prisma.profesorUpdateOneWithoutPersonaNestedInput;
};
export type personaUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    apellidos?: Prisma.StringFieldUpdateOperationsInput | string;
    dni?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaNacimiento?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUncheckedUpdateOneWithoutPersonaNestedInput;
    director?: Prisma.directorUncheckedUpdateOneWithoutPersonaNestedInput;
    musico?: Prisma.musicoUncheckedUpdateOneWithoutPersonaNestedInput;
    personaagrupacion?: Prisma.personaagrupacionUncheckedUpdateManyWithoutPersonaNestedInput;
    personainstrumento?: Prisma.personainstrumentoUncheckedUpdateManyWithoutPersonaNestedInput;
    personarolfuncional?: Prisma.personarolfuncionalUncheckedUpdateManyWithoutPersonaNestedInput;
    profesor?: Prisma.profesorUncheckedUpdateOneWithoutPersonaNestedInput;
};
/**
 * Count Type PersonaCountOutputType
 */
export type PersonaCountOutputType = {
    personaagrupacion: number;
    personainstrumento: number;
    personarolfuncional: number;
};
export type PersonaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    personaagrupacion?: boolean | PersonaCountOutputTypeCountPersonaagrupacionArgs;
    personainstrumento?: boolean | PersonaCountOutputTypeCountPersonainstrumentoArgs;
    personarolfuncional?: boolean | PersonaCountOutputTypeCountPersonarolfuncionalArgs;
};
/**
 * PersonaCountOutputType without action
 */
export type PersonaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonaCountOutputType
     */
    select?: Prisma.PersonaCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PersonaCountOutputType without action
 */
export type PersonaCountOutputTypeCountPersonaagrupacionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.personaagrupacionWhereInput;
};
/**
 * PersonaCountOutputType without action
 */
export type PersonaCountOutputTypeCountPersonainstrumentoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.personainstrumentoWhereInput;
};
/**
 * PersonaCountOutputType without action
 */
export type PersonaCountOutputTypeCountPersonarolfuncionalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.personarolfuncionalWhereInput;
};
export type personaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    apellidos?: boolean;
    dni?: boolean;
    fechaNacimiento?: boolean;
    email?: boolean;
    telefono?: boolean;
    observaciones?: boolean;
    activo?: boolean;
    fechaBaja?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    alumno?: boolean | Prisma.persona$alumnoArgs<ExtArgs>;
    director?: boolean | Prisma.persona$directorArgs<ExtArgs>;
    musico?: boolean | Prisma.persona$musicoArgs<ExtArgs>;
    personaagrupacion?: boolean | Prisma.persona$personaagrupacionArgs<ExtArgs>;
    personainstrumento?: boolean | Prisma.persona$personainstrumentoArgs<ExtArgs>;
    personarolfuncional?: boolean | Prisma.persona$personarolfuncionalArgs<ExtArgs>;
    profesor?: boolean | Prisma.persona$profesorArgs<ExtArgs>;
    usuario?: boolean | Prisma.persona$usuarioArgs<ExtArgs>;
    _count?: boolean | Prisma.PersonaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["persona"]>;
export type personaSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    apellidos?: boolean;
    dni?: boolean;
    fechaNacimiento?: boolean;
    email?: boolean;
    telefono?: boolean;
    observaciones?: boolean;
    activo?: boolean;
    fechaBaja?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type personaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "apellidos" | "dni" | "fechaNacimiento" | "email" | "telefono" | "observaciones" | "activo" | "fechaBaja" | "createdAt" | "updatedAt", ExtArgs["result"]["persona"]>;
export type personaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    alumno?: boolean | Prisma.persona$alumnoArgs<ExtArgs>;
    director?: boolean | Prisma.persona$directorArgs<ExtArgs>;
    musico?: boolean | Prisma.persona$musicoArgs<ExtArgs>;
    personaagrupacion?: boolean | Prisma.persona$personaagrupacionArgs<ExtArgs>;
    personainstrumento?: boolean | Prisma.persona$personainstrumentoArgs<ExtArgs>;
    personarolfuncional?: boolean | Prisma.persona$personarolfuncionalArgs<ExtArgs>;
    profesor?: boolean | Prisma.persona$profesorArgs<ExtArgs>;
    usuario?: boolean | Prisma.persona$usuarioArgs<ExtArgs>;
    _count?: boolean | Prisma.PersonaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $personaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "persona";
    objects: {
        alumno: Prisma.$alumnoPayload<ExtArgs> | null;
        director: Prisma.$directorPayload<ExtArgs> | null;
        musico: Prisma.$musicoPayload<ExtArgs> | null;
        personaagrupacion: Prisma.$personaagrupacionPayload<ExtArgs>[];
        personainstrumento: Prisma.$personainstrumentoPayload<ExtArgs>[];
        personarolfuncional: Prisma.$personarolfuncionalPayload<ExtArgs>[];
        profesor: Prisma.$profesorPayload<ExtArgs> | null;
        usuario: Prisma.$usuarioPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nombre: string;
        apellidos: string;
        dni: string | null;
        fechaNacimiento: Date | null;
        email: string | null;
        telefono: string | null;
        observaciones: string | null;
        activo: boolean;
        fechaBaja: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["persona"]>;
    composites: {};
};
export type personaGetPayload<S extends boolean | null | undefined | personaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$personaPayload, S>;
export type personaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<personaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PersonaCountAggregateInputType | true;
};
export interface personaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['persona'];
        meta: {
            name: 'persona';
        };
    };
    /**
     * Find zero or one Persona that matches the filter.
     * @param {personaFindUniqueArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends personaFindUniqueArgs>(args: Prisma.SelectSubset<T, personaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__personaClient<runtime.Types.Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Persona that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {personaFindUniqueOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends personaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, personaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__personaClient<runtime.Types.Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Persona that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaFindFirstArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends personaFindFirstArgs>(args?: Prisma.SelectSubset<T, personaFindFirstArgs<ExtArgs>>): Prisma.Prisma__personaClient<runtime.Types.Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Persona that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaFindFirstOrThrowArgs} args - Arguments to find a Persona
     * @example
     * // Get one Persona
     * const persona = await prisma.persona.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends personaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, personaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__personaClient<runtime.Types.Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Personas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Personas
     * const personas = await prisma.persona.findMany()
     *
     * // Get first 10 Personas
     * const personas = await prisma.persona.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const personaWithIdOnly = await prisma.persona.findMany({ select: { id: true } })
     *
     */
    findMany<T extends personaFindManyArgs>(args?: Prisma.SelectSubset<T, personaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Persona.
     * @param {personaCreateArgs} args - Arguments to create a Persona.
     * @example
     * // Create one Persona
     * const Persona = await prisma.persona.create({
     *   data: {
     *     // ... data to create a Persona
     *   }
     * })
     *
     */
    create<T extends personaCreateArgs>(args: Prisma.SelectSubset<T, personaCreateArgs<ExtArgs>>): Prisma.Prisma__personaClient<runtime.Types.Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Personas.
     * @param {personaCreateManyArgs} args - Arguments to create many Personas.
     * @example
     * // Create many Personas
     * const persona = await prisma.persona.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends personaCreateManyArgs>(args?: Prisma.SelectSubset<T, personaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Persona.
     * @param {personaDeleteArgs} args - Arguments to delete one Persona.
     * @example
     * // Delete one Persona
     * const Persona = await prisma.persona.delete({
     *   where: {
     *     // ... filter to delete one Persona
     *   }
     * })
     *
     */
    delete<T extends personaDeleteArgs>(args: Prisma.SelectSubset<T, personaDeleteArgs<ExtArgs>>): Prisma.Prisma__personaClient<runtime.Types.Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Persona.
     * @param {personaUpdateArgs} args - Arguments to update one Persona.
     * @example
     * // Update one Persona
     * const persona = await prisma.persona.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends personaUpdateArgs>(args: Prisma.SelectSubset<T, personaUpdateArgs<ExtArgs>>): Prisma.Prisma__personaClient<runtime.Types.Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Personas.
     * @param {personaDeleteManyArgs} args - Arguments to filter Personas to delete.
     * @example
     * // Delete a few Personas
     * const { count } = await prisma.persona.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends personaDeleteManyArgs>(args?: Prisma.SelectSubset<T, personaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Personas
     * const persona = await prisma.persona.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends personaUpdateManyArgs>(args: Prisma.SelectSubset<T, personaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Persona.
     * @param {personaUpsertArgs} args - Arguments to update or create a Persona.
     * @example
     * // Update or create a Persona
     * const persona = await prisma.persona.upsert({
     *   create: {
     *     // ... data to create a Persona
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Persona we want to update
     *   }
     * })
     */
    upsert<T extends personaUpsertArgs>(args: Prisma.SelectSubset<T, personaUpsertArgs<ExtArgs>>): Prisma.Prisma__personaClient<runtime.Types.Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaCountArgs} args - Arguments to filter Personas to count.
     * @example
     * // Count the number of Personas
     * const count = await prisma.persona.count({
     *   where: {
     *     // ... the filter for the Personas we want to count
     *   }
     * })
    **/
    count<T extends personaCountArgs>(args?: Prisma.Subset<T, personaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PersonaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PersonaAggregateArgs>(args: Prisma.Subset<T, PersonaAggregateArgs>): Prisma.PrismaPromise<GetPersonaAggregateType<T>>;
    /**
     * Group by Persona.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {personaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends personaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: personaGroupByArgs['orderBy'];
    } : {
        orderBy?: personaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, personaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the persona model
     */
    readonly fields: personaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for persona.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__personaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    alumno<T extends Prisma.persona$alumnoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.persona$alumnoArgs<ExtArgs>>): Prisma.Prisma__alumnoClient<runtime.Types.Result.GetResult<Prisma.$alumnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    director<T extends Prisma.persona$directorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.persona$directorArgs<ExtArgs>>): Prisma.Prisma__directorClient<runtime.Types.Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    musico<T extends Prisma.persona$musicoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.persona$musicoArgs<ExtArgs>>): Prisma.Prisma__musicoClient<runtime.Types.Result.GetResult<Prisma.$musicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    personaagrupacion<T extends Prisma.persona$personaagrupacionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.persona$personaagrupacionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$personaagrupacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    personainstrumento<T extends Prisma.persona$personainstrumentoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.persona$personainstrumentoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$personainstrumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    personarolfuncional<T extends Prisma.persona$personarolfuncionalArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.persona$personarolfuncionalArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$personarolfuncionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    profesor<T extends Prisma.persona$profesorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.persona$profesorArgs<ExtArgs>>): Prisma.Prisma__profesorClient<runtime.Types.Result.GetResult<Prisma.$profesorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    usuario<T extends Prisma.persona$usuarioArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.persona$usuarioArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the persona model
 */
export interface personaFieldRefs {
    readonly id: Prisma.FieldRef<"persona", 'String'>;
    readonly nombre: Prisma.FieldRef<"persona", 'String'>;
    readonly apellidos: Prisma.FieldRef<"persona", 'String'>;
    readonly dni: Prisma.FieldRef<"persona", 'String'>;
    readonly fechaNacimiento: Prisma.FieldRef<"persona", 'DateTime'>;
    readonly email: Prisma.FieldRef<"persona", 'String'>;
    readonly telefono: Prisma.FieldRef<"persona", 'String'>;
    readonly observaciones: Prisma.FieldRef<"persona", 'String'>;
    readonly activo: Prisma.FieldRef<"persona", 'Boolean'>;
    readonly fechaBaja: Prisma.FieldRef<"persona", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"persona", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"persona", 'DateTime'>;
}
/**
 * persona findUnique
 */
export type personaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: Prisma.personaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the persona
     */
    omit?: Prisma.personaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personaInclude<ExtArgs> | null;
    /**
     * Filter, which persona to fetch.
     */
    where: Prisma.personaWhereUniqueInput;
};
/**
 * persona findUniqueOrThrow
 */
export type personaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: Prisma.personaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the persona
     */
    omit?: Prisma.personaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personaInclude<ExtArgs> | null;
    /**
     * Filter, which persona to fetch.
     */
    where: Prisma.personaWhereUniqueInput;
};
/**
 * persona findFirst
 */
export type personaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: Prisma.personaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the persona
     */
    omit?: Prisma.personaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personaInclude<ExtArgs> | null;
    /**
     * Filter, which persona to fetch.
     */
    where?: Prisma.personaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of personas to fetch.
     */
    orderBy?: Prisma.personaOrderByWithRelationInput | Prisma.personaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for personas.
     */
    cursor?: Prisma.personaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` personas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` personas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of personas.
     */
    distinct?: Prisma.PersonaScalarFieldEnum | Prisma.PersonaScalarFieldEnum[];
};
/**
 * persona findFirstOrThrow
 */
export type personaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: Prisma.personaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the persona
     */
    omit?: Prisma.personaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personaInclude<ExtArgs> | null;
    /**
     * Filter, which persona to fetch.
     */
    where?: Prisma.personaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of personas to fetch.
     */
    orderBy?: Prisma.personaOrderByWithRelationInput | Prisma.personaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for personas.
     */
    cursor?: Prisma.personaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` personas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` personas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of personas.
     */
    distinct?: Prisma.PersonaScalarFieldEnum | Prisma.PersonaScalarFieldEnum[];
};
/**
 * persona findMany
 */
export type personaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: Prisma.personaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the persona
     */
    omit?: Prisma.personaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personaInclude<ExtArgs> | null;
    /**
     * Filter, which personas to fetch.
     */
    where?: Prisma.personaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of personas to fetch.
     */
    orderBy?: Prisma.personaOrderByWithRelationInput | Prisma.personaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing personas.
     */
    cursor?: Prisma.personaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` personas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` personas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of personas.
     */
    distinct?: Prisma.PersonaScalarFieldEnum | Prisma.PersonaScalarFieldEnum[];
};
/**
 * persona create
 */
export type personaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: Prisma.personaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the persona
     */
    omit?: Prisma.personaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personaInclude<ExtArgs> | null;
    /**
     * The data needed to create a persona.
     */
    data: Prisma.XOR<Prisma.personaCreateInput, Prisma.personaUncheckedCreateInput>;
};
/**
 * persona createMany
 */
export type personaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many personas.
     */
    data: Prisma.personaCreateManyInput | Prisma.personaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * persona update
 */
export type personaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: Prisma.personaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the persona
     */
    omit?: Prisma.personaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personaInclude<ExtArgs> | null;
    /**
     * The data needed to update a persona.
     */
    data: Prisma.XOR<Prisma.personaUpdateInput, Prisma.personaUncheckedUpdateInput>;
    /**
     * Choose, which persona to update.
     */
    where: Prisma.personaWhereUniqueInput;
};
/**
 * persona updateMany
 */
export type personaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update personas.
     */
    data: Prisma.XOR<Prisma.personaUpdateManyMutationInput, Prisma.personaUncheckedUpdateManyInput>;
    /**
     * Filter which personas to update
     */
    where?: Prisma.personaWhereInput;
    /**
     * Limit how many personas to update.
     */
    limit?: number;
};
/**
 * persona upsert
 */
export type personaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: Prisma.personaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the persona
     */
    omit?: Prisma.personaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personaInclude<ExtArgs> | null;
    /**
     * The filter to search for the persona to update in case it exists.
     */
    where: Prisma.personaWhereUniqueInput;
    /**
     * In case the persona found by the `where` argument doesn't exist, create a new persona with this data.
     */
    create: Prisma.XOR<Prisma.personaCreateInput, Prisma.personaUncheckedCreateInput>;
    /**
     * In case the persona was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.personaUpdateInput, Prisma.personaUncheckedUpdateInput>;
};
/**
 * persona delete
 */
export type personaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: Prisma.personaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the persona
     */
    omit?: Prisma.personaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personaInclude<ExtArgs> | null;
    /**
     * Filter which persona to delete.
     */
    where: Prisma.personaWhereUniqueInput;
};
/**
 * persona deleteMany
 */
export type personaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which personas to delete
     */
    where?: Prisma.personaWhereInput;
    /**
     * Limit how many personas to delete.
     */
    limit?: number;
};
/**
 * persona.alumno
 */
export type persona$alumnoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.alumnoWhereInput;
};
/**
 * persona.director
 */
export type persona$directorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the director
     */
    select?: Prisma.directorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the director
     */
    omit?: Prisma.directorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.directorInclude<ExtArgs> | null;
    where?: Prisma.directorWhereInput;
};
/**
 * persona.musico
 */
export type persona$musicoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.musicoWhereInput;
};
/**
 * persona.personaagrupacion
 */
export type persona$personaagrupacionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personaagrupacion
     */
    select?: Prisma.personaagrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personaagrupacion
     */
    omit?: Prisma.personaagrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personaagrupacionInclude<ExtArgs> | null;
    where?: Prisma.personaagrupacionWhereInput;
    orderBy?: Prisma.personaagrupacionOrderByWithRelationInput | Prisma.personaagrupacionOrderByWithRelationInput[];
    cursor?: Prisma.personaagrupacionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PersonaagrupacionScalarFieldEnum | Prisma.PersonaagrupacionScalarFieldEnum[];
};
/**
 * persona.personainstrumento
 */
export type persona$personainstrumentoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * persona.personarolfuncional
 */
export type persona$personarolfuncionalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the personarolfuncional
     */
    select?: Prisma.personarolfuncionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the personarolfuncional
     */
    omit?: Prisma.personarolfuncionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personarolfuncionalInclude<ExtArgs> | null;
    where?: Prisma.personarolfuncionalWhereInput;
    orderBy?: Prisma.personarolfuncionalOrderByWithRelationInput | Prisma.personarolfuncionalOrderByWithRelationInput[];
    cursor?: Prisma.personarolfuncionalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PersonarolfuncionalScalarFieldEnum | Prisma.PersonarolfuncionalScalarFieldEnum[];
};
/**
 * persona.profesor
 */
export type persona$profesorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.profesorWhereInput;
};
/**
 * persona.usuario
 */
export type persona$usuarioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the usuario
     */
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    where?: Prisma.usuarioWhereInput;
};
/**
 * persona without action
 */
export type personaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the persona
     */
    select?: Prisma.personaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the persona
     */
    omit?: Prisma.personaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.personaInclude<ExtArgs> | null;
};
//# sourceMappingURL=persona.d.ts.map