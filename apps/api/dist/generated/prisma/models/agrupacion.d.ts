import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model agrupacion
 *
 */
export type agrupacionModel = runtime.Types.Result.DefaultSelection<Prisma.$agrupacionPayload>;
export type AggregateAgrupacion = {
    _count: AgrupacionCountAggregateOutputType | null;
    _min: AgrupacionMinAggregateOutputType | null;
    _max: AgrupacionMaxAggregateOutputType | null;
};
export type AgrupacionMinAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    descripcion: string | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AgrupacionMaxAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    descripcion: string | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AgrupacionCountAggregateOutputType = {
    id: number;
    nombre: number;
    descripcion: number;
    activo: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AgrupacionMinAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AgrupacionMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AgrupacionCountAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AgrupacionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which agrupacion to aggregate.
     */
    where?: Prisma.agrupacionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agrupacions to fetch.
     */
    orderBy?: Prisma.agrupacionOrderByWithRelationInput | Prisma.agrupacionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.agrupacionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agrupacions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agrupacions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned agrupacions
    **/
    _count?: true | AgrupacionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AgrupacionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AgrupacionMaxAggregateInputType;
};
export type GetAgrupacionAggregateType<T extends AgrupacionAggregateArgs> = {
    [P in keyof T & keyof AggregateAgrupacion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAgrupacion[P]> : Prisma.GetScalarType<T[P], AggregateAgrupacion[P]>;
};
export type agrupacionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.agrupacionWhereInput;
    orderBy?: Prisma.agrupacionOrderByWithAggregationInput | Prisma.agrupacionOrderByWithAggregationInput[];
    by: Prisma.AgrupacionScalarFieldEnum[] | Prisma.AgrupacionScalarFieldEnum;
    having?: Prisma.agrupacionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AgrupacionCountAggregateInputType | true;
    _min?: AgrupacionMinAggregateInputType;
    _max?: AgrupacionMaxAggregateInputType;
};
export type AgrupacionGroupByOutputType = {
    id: string;
    nombre: string;
    descripcion: string | null;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: AgrupacionCountAggregateOutputType | null;
    _min: AgrupacionMinAggregateOutputType | null;
    _max: AgrupacionMaxAggregateOutputType | null;
};
export type GetAgrupacionGroupByPayload<T extends agrupacionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AgrupacionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AgrupacionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AgrupacionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AgrupacionGroupByOutputType[P]>;
}>>;
export type agrupacionWhereInput = {
    AND?: Prisma.agrupacionWhereInput | Prisma.agrupacionWhereInput[];
    OR?: Prisma.agrupacionWhereInput[];
    NOT?: Prisma.agrupacionWhereInput | Prisma.agrupacionWhereInput[];
    id?: Prisma.StringFilter<"agrupacion"> | string;
    nombre?: Prisma.StringFilter<"agrupacion"> | string;
    descripcion?: Prisma.StringNullableFilter<"agrupacion"> | string | null;
    activo?: Prisma.BoolFilter<"agrupacion"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"agrupacion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"agrupacion"> | Date | string;
    actuacionagrupacion?: Prisma.ActuacionagrupacionListRelationFilter;
    personaagrupacion?: Prisma.PersonaagrupacionListRelationFilter;
};
export type agrupacionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    actuacionagrupacion?: Prisma.actuacionagrupacionOrderByRelationAggregateInput;
    personaagrupacion?: Prisma.personaagrupacionOrderByRelationAggregateInput;
    _relevance?: Prisma.agrupacionOrderByRelevanceInput;
};
export type agrupacionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.agrupacionWhereInput | Prisma.agrupacionWhereInput[];
    OR?: Prisma.agrupacionWhereInput[];
    NOT?: Prisma.agrupacionWhereInput | Prisma.agrupacionWhereInput[];
    nombre?: Prisma.StringFilter<"agrupacion"> | string;
    descripcion?: Prisma.StringNullableFilter<"agrupacion"> | string | null;
    activo?: Prisma.BoolFilter<"agrupacion"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"agrupacion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"agrupacion"> | Date | string;
    actuacionagrupacion?: Prisma.ActuacionagrupacionListRelationFilter;
    personaagrupacion?: Prisma.PersonaagrupacionListRelationFilter;
}, "id">;
export type agrupacionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.agrupacionCountOrderByAggregateInput;
    _max?: Prisma.agrupacionMaxOrderByAggregateInput;
    _min?: Prisma.agrupacionMinOrderByAggregateInput;
};
export type agrupacionScalarWhereWithAggregatesInput = {
    AND?: Prisma.agrupacionScalarWhereWithAggregatesInput | Prisma.agrupacionScalarWhereWithAggregatesInput[];
    OR?: Prisma.agrupacionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.agrupacionScalarWhereWithAggregatesInput | Prisma.agrupacionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"agrupacion"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"agrupacion"> | string;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"agrupacion"> | string | null;
    activo?: Prisma.BoolWithAggregatesFilter<"agrupacion"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"agrupacion"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"agrupacion"> | Date | string;
};
export type agrupacionCreateInput = {
    id: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacionagrupacion?: Prisma.actuacionagrupacionCreateNestedManyWithoutAgrupacionInput;
    personaagrupacion?: Prisma.personaagrupacionCreateNestedManyWithoutAgrupacionInput;
};
export type agrupacionUncheckedCreateInput = {
    id: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacionagrupacion?: Prisma.actuacionagrupacionUncheckedCreateNestedManyWithoutAgrupacionInput;
    personaagrupacion?: Prisma.personaagrupacionUncheckedCreateNestedManyWithoutAgrupacionInput;
};
export type agrupacionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacionagrupacion?: Prisma.actuacionagrupacionUpdateManyWithoutAgrupacionNestedInput;
    personaagrupacion?: Prisma.personaagrupacionUpdateManyWithoutAgrupacionNestedInput;
};
export type agrupacionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacionagrupacion?: Prisma.actuacionagrupacionUncheckedUpdateManyWithoutAgrupacionNestedInput;
    personaagrupacion?: Prisma.personaagrupacionUncheckedUpdateManyWithoutAgrupacionNestedInput;
};
export type agrupacionCreateManyInput = {
    id: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type agrupacionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type agrupacionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AgrupacionScalarRelationFilter = {
    is?: Prisma.agrupacionWhereInput;
    isNot?: Prisma.agrupacionWhereInput;
};
export type agrupacionOrderByRelevanceInput = {
    fields: Prisma.agrupacionOrderByRelevanceFieldEnum | Prisma.agrupacionOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type agrupacionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type agrupacionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type agrupacionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type agrupacionCreateNestedOneWithoutActuacionagrupacionInput = {
    create?: Prisma.XOR<Prisma.agrupacionCreateWithoutActuacionagrupacionInput, Prisma.agrupacionUncheckedCreateWithoutActuacionagrupacionInput>;
    connectOrCreate?: Prisma.agrupacionCreateOrConnectWithoutActuacionagrupacionInput;
    connect?: Prisma.agrupacionWhereUniqueInput;
};
export type agrupacionUpdateOneRequiredWithoutActuacionagrupacionNestedInput = {
    create?: Prisma.XOR<Prisma.agrupacionCreateWithoutActuacionagrupacionInput, Prisma.agrupacionUncheckedCreateWithoutActuacionagrupacionInput>;
    connectOrCreate?: Prisma.agrupacionCreateOrConnectWithoutActuacionagrupacionInput;
    upsert?: Prisma.agrupacionUpsertWithoutActuacionagrupacionInput;
    connect?: Prisma.agrupacionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.agrupacionUpdateToOneWithWhereWithoutActuacionagrupacionInput, Prisma.agrupacionUpdateWithoutActuacionagrupacionInput>, Prisma.agrupacionUncheckedUpdateWithoutActuacionagrupacionInput>;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type agrupacionCreateNestedOneWithoutPersonaagrupacionInput = {
    create?: Prisma.XOR<Prisma.agrupacionCreateWithoutPersonaagrupacionInput, Prisma.agrupacionUncheckedCreateWithoutPersonaagrupacionInput>;
    connectOrCreate?: Prisma.agrupacionCreateOrConnectWithoutPersonaagrupacionInput;
    connect?: Prisma.agrupacionWhereUniqueInput;
};
export type agrupacionUpdateOneRequiredWithoutPersonaagrupacionNestedInput = {
    create?: Prisma.XOR<Prisma.agrupacionCreateWithoutPersonaagrupacionInput, Prisma.agrupacionUncheckedCreateWithoutPersonaagrupacionInput>;
    connectOrCreate?: Prisma.agrupacionCreateOrConnectWithoutPersonaagrupacionInput;
    upsert?: Prisma.agrupacionUpsertWithoutPersonaagrupacionInput;
    connect?: Prisma.agrupacionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.agrupacionUpdateToOneWithWhereWithoutPersonaagrupacionInput, Prisma.agrupacionUpdateWithoutPersonaagrupacionInput>, Prisma.agrupacionUncheckedUpdateWithoutPersonaagrupacionInput>;
};
export type agrupacionCreateWithoutActuacionagrupacionInput = {
    id: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    personaagrupacion?: Prisma.personaagrupacionCreateNestedManyWithoutAgrupacionInput;
};
export type agrupacionUncheckedCreateWithoutActuacionagrupacionInput = {
    id: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    personaagrupacion?: Prisma.personaagrupacionUncheckedCreateNestedManyWithoutAgrupacionInput;
};
export type agrupacionCreateOrConnectWithoutActuacionagrupacionInput = {
    where: Prisma.agrupacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.agrupacionCreateWithoutActuacionagrupacionInput, Prisma.agrupacionUncheckedCreateWithoutActuacionagrupacionInput>;
};
export type agrupacionUpsertWithoutActuacionagrupacionInput = {
    update: Prisma.XOR<Prisma.agrupacionUpdateWithoutActuacionagrupacionInput, Prisma.agrupacionUncheckedUpdateWithoutActuacionagrupacionInput>;
    create: Prisma.XOR<Prisma.agrupacionCreateWithoutActuacionagrupacionInput, Prisma.agrupacionUncheckedCreateWithoutActuacionagrupacionInput>;
    where?: Prisma.agrupacionWhereInput;
};
export type agrupacionUpdateToOneWithWhereWithoutActuacionagrupacionInput = {
    where?: Prisma.agrupacionWhereInput;
    data: Prisma.XOR<Prisma.agrupacionUpdateWithoutActuacionagrupacionInput, Prisma.agrupacionUncheckedUpdateWithoutActuacionagrupacionInput>;
};
export type agrupacionUpdateWithoutActuacionagrupacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personaagrupacion?: Prisma.personaagrupacionUpdateManyWithoutAgrupacionNestedInput;
};
export type agrupacionUncheckedUpdateWithoutActuacionagrupacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personaagrupacion?: Prisma.personaagrupacionUncheckedUpdateManyWithoutAgrupacionNestedInput;
};
export type agrupacionCreateWithoutPersonaagrupacionInput = {
    id: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacionagrupacion?: Prisma.actuacionagrupacionCreateNestedManyWithoutAgrupacionInput;
};
export type agrupacionUncheckedCreateWithoutPersonaagrupacionInput = {
    id: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    actuacionagrupacion?: Prisma.actuacionagrupacionUncheckedCreateNestedManyWithoutAgrupacionInput;
};
export type agrupacionCreateOrConnectWithoutPersonaagrupacionInput = {
    where: Prisma.agrupacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.agrupacionCreateWithoutPersonaagrupacionInput, Prisma.agrupacionUncheckedCreateWithoutPersonaagrupacionInput>;
};
export type agrupacionUpsertWithoutPersonaagrupacionInput = {
    update: Prisma.XOR<Prisma.agrupacionUpdateWithoutPersonaagrupacionInput, Prisma.agrupacionUncheckedUpdateWithoutPersonaagrupacionInput>;
    create: Prisma.XOR<Prisma.agrupacionCreateWithoutPersonaagrupacionInput, Prisma.agrupacionUncheckedCreateWithoutPersonaagrupacionInput>;
    where?: Prisma.agrupacionWhereInput;
};
export type agrupacionUpdateToOneWithWhereWithoutPersonaagrupacionInput = {
    where?: Prisma.agrupacionWhereInput;
    data: Prisma.XOR<Prisma.agrupacionUpdateWithoutPersonaagrupacionInput, Prisma.agrupacionUncheckedUpdateWithoutPersonaagrupacionInput>;
};
export type agrupacionUpdateWithoutPersonaagrupacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacionagrupacion?: Prisma.actuacionagrupacionUpdateManyWithoutAgrupacionNestedInput;
};
export type agrupacionUncheckedUpdateWithoutPersonaagrupacionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    actuacionagrupacion?: Prisma.actuacionagrupacionUncheckedUpdateManyWithoutAgrupacionNestedInput;
};
/**
 * Count Type AgrupacionCountOutputType
 */
export type AgrupacionCountOutputType = {
    actuacionagrupacion: number;
    personaagrupacion: number;
};
export type AgrupacionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actuacionagrupacion?: boolean | AgrupacionCountOutputTypeCountActuacionagrupacionArgs;
    personaagrupacion?: boolean | AgrupacionCountOutputTypeCountPersonaagrupacionArgs;
};
/**
 * AgrupacionCountOutputType without action
 */
export type AgrupacionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgrupacionCountOutputType
     */
    select?: Prisma.AgrupacionCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AgrupacionCountOutputType without action
 */
export type AgrupacionCountOutputTypeCountActuacionagrupacionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.actuacionagrupacionWhereInput;
};
/**
 * AgrupacionCountOutputType without action
 */
export type AgrupacionCountOutputTypeCountPersonaagrupacionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.personaagrupacionWhereInput;
};
export type agrupacionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    actuacionagrupacion?: boolean | Prisma.agrupacion$actuacionagrupacionArgs<ExtArgs>;
    personaagrupacion?: boolean | Prisma.agrupacion$personaagrupacionArgs<ExtArgs>;
    _count?: boolean | Prisma.AgrupacionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["agrupacion"]>;
export type agrupacionSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type agrupacionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "descripcion" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["agrupacion"]>;
export type agrupacionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    actuacionagrupacion?: boolean | Prisma.agrupacion$actuacionagrupacionArgs<ExtArgs>;
    personaagrupacion?: boolean | Prisma.agrupacion$personaagrupacionArgs<ExtArgs>;
    _count?: boolean | Prisma.AgrupacionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $agrupacionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "agrupacion";
    objects: {
        actuacionagrupacion: Prisma.$actuacionagrupacionPayload<ExtArgs>[];
        personaagrupacion: Prisma.$personaagrupacionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nombre: string;
        descripcion: string | null;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["agrupacion"]>;
    composites: {};
};
export type agrupacionGetPayload<S extends boolean | null | undefined | agrupacionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$agrupacionPayload, S>;
export type agrupacionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<agrupacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AgrupacionCountAggregateInputType | true;
};
export interface agrupacionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['agrupacion'];
        meta: {
            name: 'agrupacion';
        };
    };
    /**
     * Find zero or one Agrupacion that matches the filter.
     * @param {agrupacionFindUniqueArgs} args - Arguments to find a Agrupacion
     * @example
     * // Get one Agrupacion
     * const agrupacion = await prisma.agrupacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends agrupacionFindUniqueArgs>(args: Prisma.SelectSubset<T, agrupacionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__agrupacionClient<runtime.Types.Result.GetResult<Prisma.$agrupacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Agrupacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {agrupacionFindUniqueOrThrowArgs} args - Arguments to find a Agrupacion
     * @example
     * // Get one Agrupacion
     * const agrupacion = await prisma.agrupacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends agrupacionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, agrupacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__agrupacionClient<runtime.Types.Result.GetResult<Prisma.$agrupacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Agrupacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agrupacionFindFirstArgs} args - Arguments to find a Agrupacion
     * @example
     * // Get one Agrupacion
     * const agrupacion = await prisma.agrupacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends agrupacionFindFirstArgs>(args?: Prisma.SelectSubset<T, agrupacionFindFirstArgs<ExtArgs>>): Prisma.Prisma__agrupacionClient<runtime.Types.Result.GetResult<Prisma.$agrupacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Agrupacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agrupacionFindFirstOrThrowArgs} args - Arguments to find a Agrupacion
     * @example
     * // Get one Agrupacion
     * const agrupacion = await prisma.agrupacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends agrupacionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, agrupacionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__agrupacionClient<runtime.Types.Result.GetResult<Prisma.$agrupacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Agrupacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agrupacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agrupacions
     * const agrupacions = await prisma.agrupacion.findMany()
     *
     * // Get first 10 Agrupacions
     * const agrupacions = await prisma.agrupacion.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const agrupacionWithIdOnly = await prisma.agrupacion.findMany({ select: { id: true } })
     *
     */
    findMany<T extends agrupacionFindManyArgs>(args?: Prisma.SelectSubset<T, agrupacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$agrupacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Agrupacion.
     * @param {agrupacionCreateArgs} args - Arguments to create a Agrupacion.
     * @example
     * // Create one Agrupacion
     * const Agrupacion = await prisma.agrupacion.create({
     *   data: {
     *     // ... data to create a Agrupacion
     *   }
     * })
     *
     */
    create<T extends agrupacionCreateArgs>(args: Prisma.SelectSubset<T, agrupacionCreateArgs<ExtArgs>>): Prisma.Prisma__agrupacionClient<runtime.Types.Result.GetResult<Prisma.$agrupacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Agrupacions.
     * @param {agrupacionCreateManyArgs} args - Arguments to create many Agrupacions.
     * @example
     * // Create many Agrupacions
     * const agrupacion = await prisma.agrupacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends agrupacionCreateManyArgs>(args?: Prisma.SelectSubset<T, agrupacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Agrupacion.
     * @param {agrupacionDeleteArgs} args - Arguments to delete one Agrupacion.
     * @example
     * // Delete one Agrupacion
     * const Agrupacion = await prisma.agrupacion.delete({
     *   where: {
     *     // ... filter to delete one Agrupacion
     *   }
     * })
     *
     */
    delete<T extends agrupacionDeleteArgs>(args: Prisma.SelectSubset<T, agrupacionDeleteArgs<ExtArgs>>): Prisma.Prisma__agrupacionClient<runtime.Types.Result.GetResult<Prisma.$agrupacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Agrupacion.
     * @param {agrupacionUpdateArgs} args - Arguments to update one Agrupacion.
     * @example
     * // Update one Agrupacion
     * const agrupacion = await prisma.agrupacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends agrupacionUpdateArgs>(args: Prisma.SelectSubset<T, agrupacionUpdateArgs<ExtArgs>>): Prisma.Prisma__agrupacionClient<runtime.Types.Result.GetResult<Prisma.$agrupacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Agrupacions.
     * @param {agrupacionDeleteManyArgs} args - Arguments to filter Agrupacions to delete.
     * @example
     * // Delete a few Agrupacions
     * const { count } = await prisma.agrupacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends agrupacionDeleteManyArgs>(args?: Prisma.SelectSubset<T, agrupacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Agrupacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agrupacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agrupacions
     * const agrupacion = await prisma.agrupacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends agrupacionUpdateManyArgs>(args: Prisma.SelectSubset<T, agrupacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Agrupacion.
     * @param {agrupacionUpsertArgs} args - Arguments to update or create a Agrupacion.
     * @example
     * // Update or create a Agrupacion
     * const agrupacion = await prisma.agrupacion.upsert({
     *   create: {
     *     // ... data to create a Agrupacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agrupacion we want to update
     *   }
     * })
     */
    upsert<T extends agrupacionUpsertArgs>(args: Prisma.SelectSubset<T, agrupacionUpsertArgs<ExtArgs>>): Prisma.Prisma__agrupacionClient<runtime.Types.Result.GetResult<Prisma.$agrupacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Agrupacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agrupacionCountArgs} args - Arguments to filter Agrupacions to count.
     * @example
     * // Count the number of Agrupacions
     * const count = await prisma.agrupacion.count({
     *   where: {
     *     // ... the filter for the Agrupacions we want to count
     *   }
     * })
    **/
    count<T extends agrupacionCountArgs>(args?: Prisma.Subset<T, agrupacionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AgrupacionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Agrupacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgrupacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgrupacionAggregateArgs>(args: Prisma.Subset<T, AgrupacionAggregateArgs>): Prisma.PrismaPromise<GetAgrupacionAggregateType<T>>;
    /**
     * Group by Agrupacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agrupacionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends agrupacionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: agrupacionGroupByArgs['orderBy'];
    } : {
        orderBy?: agrupacionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, agrupacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgrupacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the agrupacion model
     */
    readonly fields: agrupacionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for agrupacion.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__agrupacionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    actuacionagrupacion<T extends Prisma.agrupacion$actuacionagrupacionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.agrupacion$actuacionagrupacionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$actuacionagrupacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    personaagrupacion<T extends Prisma.agrupacion$personaagrupacionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.agrupacion$personaagrupacionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$personaagrupacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the agrupacion model
 */
export interface agrupacionFieldRefs {
    readonly id: Prisma.FieldRef<"agrupacion", 'String'>;
    readonly nombre: Prisma.FieldRef<"agrupacion", 'String'>;
    readonly descripcion: Prisma.FieldRef<"agrupacion", 'String'>;
    readonly activo: Prisma.FieldRef<"agrupacion", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"agrupacion", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"agrupacion", 'DateTime'>;
}
/**
 * agrupacion findUnique
 */
export type agrupacionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agrupacion
     */
    select?: Prisma.agrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the agrupacion
     */
    omit?: Prisma.agrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.agrupacionInclude<ExtArgs> | null;
    /**
     * Filter, which agrupacion to fetch.
     */
    where: Prisma.agrupacionWhereUniqueInput;
};
/**
 * agrupacion findUniqueOrThrow
 */
export type agrupacionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agrupacion
     */
    select?: Prisma.agrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the agrupacion
     */
    omit?: Prisma.agrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.agrupacionInclude<ExtArgs> | null;
    /**
     * Filter, which agrupacion to fetch.
     */
    where: Prisma.agrupacionWhereUniqueInput;
};
/**
 * agrupacion findFirst
 */
export type agrupacionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agrupacion
     */
    select?: Prisma.agrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the agrupacion
     */
    omit?: Prisma.agrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.agrupacionInclude<ExtArgs> | null;
    /**
     * Filter, which agrupacion to fetch.
     */
    where?: Prisma.agrupacionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agrupacions to fetch.
     */
    orderBy?: Prisma.agrupacionOrderByWithRelationInput | Prisma.agrupacionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for agrupacions.
     */
    cursor?: Prisma.agrupacionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agrupacions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agrupacions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of agrupacions.
     */
    distinct?: Prisma.AgrupacionScalarFieldEnum | Prisma.AgrupacionScalarFieldEnum[];
};
/**
 * agrupacion findFirstOrThrow
 */
export type agrupacionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agrupacion
     */
    select?: Prisma.agrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the agrupacion
     */
    omit?: Prisma.agrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.agrupacionInclude<ExtArgs> | null;
    /**
     * Filter, which agrupacion to fetch.
     */
    where?: Prisma.agrupacionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agrupacions to fetch.
     */
    orderBy?: Prisma.agrupacionOrderByWithRelationInput | Prisma.agrupacionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for agrupacions.
     */
    cursor?: Prisma.agrupacionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agrupacions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agrupacions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of agrupacions.
     */
    distinct?: Prisma.AgrupacionScalarFieldEnum | Prisma.AgrupacionScalarFieldEnum[];
};
/**
 * agrupacion findMany
 */
export type agrupacionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agrupacion
     */
    select?: Prisma.agrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the agrupacion
     */
    omit?: Prisma.agrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.agrupacionInclude<ExtArgs> | null;
    /**
     * Filter, which agrupacions to fetch.
     */
    where?: Prisma.agrupacionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agrupacions to fetch.
     */
    orderBy?: Prisma.agrupacionOrderByWithRelationInput | Prisma.agrupacionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing agrupacions.
     */
    cursor?: Prisma.agrupacionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agrupacions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agrupacions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of agrupacions.
     */
    distinct?: Prisma.AgrupacionScalarFieldEnum | Prisma.AgrupacionScalarFieldEnum[];
};
/**
 * agrupacion create
 */
export type agrupacionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agrupacion
     */
    select?: Prisma.agrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the agrupacion
     */
    omit?: Prisma.agrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.agrupacionInclude<ExtArgs> | null;
    /**
     * The data needed to create a agrupacion.
     */
    data: Prisma.XOR<Prisma.agrupacionCreateInput, Prisma.agrupacionUncheckedCreateInput>;
};
/**
 * agrupacion createMany
 */
export type agrupacionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many agrupacions.
     */
    data: Prisma.agrupacionCreateManyInput | Prisma.agrupacionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * agrupacion update
 */
export type agrupacionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agrupacion
     */
    select?: Prisma.agrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the agrupacion
     */
    omit?: Prisma.agrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.agrupacionInclude<ExtArgs> | null;
    /**
     * The data needed to update a agrupacion.
     */
    data: Prisma.XOR<Prisma.agrupacionUpdateInput, Prisma.agrupacionUncheckedUpdateInput>;
    /**
     * Choose, which agrupacion to update.
     */
    where: Prisma.agrupacionWhereUniqueInput;
};
/**
 * agrupacion updateMany
 */
export type agrupacionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update agrupacions.
     */
    data: Prisma.XOR<Prisma.agrupacionUpdateManyMutationInput, Prisma.agrupacionUncheckedUpdateManyInput>;
    /**
     * Filter which agrupacions to update
     */
    where?: Prisma.agrupacionWhereInput;
    /**
     * Limit how many agrupacions to update.
     */
    limit?: number;
};
/**
 * agrupacion upsert
 */
export type agrupacionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agrupacion
     */
    select?: Prisma.agrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the agrupacion
     */
    omit?: Prisma.agrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.agrupacionInclude<ExtArgs> | null;
    /**
     * The filter to search for the agrupacion to update in case it exists.
     */
    where: Prisma.agrupacionWhereUniqueInput;
    /**
     * In case the agrupacion found by the `where` argument doesn't exist, create a new agrupacion with this data.
     */
    create: Prisma.XOR<Prisma.agrupacionCreateInput, Prisma.agrupacionUncheckedCreateInput>;
    /**
     * In case the agrupacion was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.agrupacionUpdateInput, Prisma.agrupacionUncheckedUpdateInput>;
};
/**
 * agrupacion delete
 */
export type agrupacionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agrupacion
     */
    select?: Prisma.agrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the agrupacion
     */
    omit?: Prisma.agrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.agrupacionInclude<ExtArgs> | null;
    /**
     * Filter which agrupacion to delete.
     */
    where: Prisma.agrupacionWhereUniqueInput;
};
/**
 * agrupacion deleteMany
 */
export type agrupacionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which agrupacions to delete
     */
    where?: Prisma.agrupacionWhereInput;
    /**
     * Limit how many agrupacions to delete.
     */
    limit?: number;
};
/**
 * agrupacion.actuacionagrupacion
 */
export type agrupacion$actuacionagrupacionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actuacionagrupacion
     */
    select?: Prisma.actuacionagrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the actuacionagrupacion
     */
    omit?: Prisma.actuacionagrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.actuacionagrupacionInclude<ExtArgs> | null;
    where?: Prisma.actuacionagrupacionWhereInput;
    orderBy?: Prisma.actuacionagrupacionOrderByWithRelationInput | Prisma.actuacionagrupacionOrderByWithRelationInput[];
    cursor?: Prisma.actuacionagrupacionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActuacionagrupacionScalarFieldEnum | Prisma.ActuacionagrupacionScalarFieldEnum[];
};
/**
 * agrupacion.personaagrupacion
 */
export type agrupacion$personaagrupacionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * agrupacion without action
 */
export type agrupacionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agrupacion
     */
    select?: Prisma.agrupacionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the agrupacion
     */
    omit?: Prisma.agrupacionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.agrupacionInclude<ExtArgs> | null;
};
//# sourceMappingURL=agrupacion.d.ts.map