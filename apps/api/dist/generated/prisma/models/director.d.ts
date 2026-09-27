import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model director
 *
 */
export type directorModel = runtime.Types.Result.DefaultSelection<Prisma.$directorPayload>;
export type AggregateDirector = {
    _count: DirectorCountAggregateOutputType | null;
    _min: DirectorMinAggregateOutputType | null;
    _max: DirectorMaxAggregateOutputType | null;
};
export type DirectorMinAggregateOutputType = {
    id: string | null;
    personaId: string | null;
    fechaAlta: Date | null;
    fechaBaja: Date | null;
    activo: boolean | null;
    observaciones: string | null;
};
export type DirectorMaxAggregateOutputType = {
    id: string | null;
    personaId: string | null;
    fechaAlta: Date | null;
    fechaBaja: Date | null;
    activo: boolean | null;
    observaciones: string | null;
};
export type DirectorCountAggregateOutputType = {
    id: number;
    personaId: number;
    fechaAlta: number;
    fechaBaja: number;
    activo: number;
    observaciones: number;
    _all: number;
};
export type DirectorMinAggregateInputType = {
    id?: true;
    personaId?: true;
    fechaAlta?: true;
    fechaBaja?: true;
    activo?: true;
    observaciones?: true;
};
export type DirectorMaxAggregateInputType = {
    id?: true;
    personaId?: true;
    fechaAlta?: true;
    fechaBaja?: true;
    activo?: true;
    observaciones?: true;
};
export type DirectorCountAggregateInputType = {
    id?: true;
    personaId?: true;
    fechaAlta?: true;
    fechaBaja?: true;
    activo?: true;
    observaciones?: true;
    _all?: true;
};
export type DirectorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which director to aggregate.
     */
    where?: Prisma.directorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of directors to fetch.
     */
    orderBy?: Prisma.directorOrderByWithRelationInput | Prisma.directorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.directorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` directors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` directors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned directors
    **/
    _count?: true | DirectorCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DirectorMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DirectorMaxAggregateInputType;
};
export type GetDirectorAggregateType<T extends DirectorAggregateArgs> = {
    [P in keyof T & keyof AggregateDirector]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDirector[P]> : Prisma.GetScalarType<T[P], AggregateDirector[P]>;
};
export type directorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.directorWhereInput;
    orderBy?: Prisma.directorOrderByWithAggregationInput | Prisma.directorOrderByWithAggregationInput[];
    by: Prisma.DirectorScalarFieldEnum[] | Prisma.DirectorScalarFieldEnum;
    having?: Prisma.directorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DirectorCountAggregateInputType | true;
    _min?: DirectorMinAggregateInputType;
    _max?: DirectorMaxAggregateInputType;
};
export type DirectorGroupByOutputType = {
    id: string;
    personaId: string;
    fechaAlta: Date;
    fechaBaja: Date | null;
    activo: boolean;
    observaciones: string | null;
    _count: DirectorCountAggregateOutputType | null;
    _min: DirectorMinAggregateOutputType | null;
    _max: DirectorMaxAggregateOutputType | null;
};
export type GetDirectorGroupByPayload<T extends directorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DirectorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DirectorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DirectorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DirectorGroupByOutputType[P]>;
}>>;
export type directorWhereInput = {
    AND?: Prisma.directorWhereInput | Prisma.directorWhereInput[];
    OR?: Prisma.directorWhereInput[];
    NOT?: Prisma.directorWhereInput | Prisma.directorWhereInput[];
    id?: Prisma.StringFilter<"director"> | string;
    personaId?: Prisma.StringFilter<"director"> | string;
    fechaAlta?: Prisma.DateTimeFilter<"director"> | Date | string;
    fechaBaja?: Prisma.DateTimeNullableFilter<"director"> | Date | string | null;
    activo?: Prisma.BoolFilter<"director"> | boolean;
    observaciones?: Prisma.StringNullableFilter<"director"> | string | null;
    persona?: Prisma.XOR<Prisma.PersonaScalarRelationFilter, Prisma.personaWhereInput>;
    directorperiodo?: Prisma.DirectorperiodoListRelationFilter;
};
export type directorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    persona?: Prisma.personaOrderByWithRelationInput;
    directorperiodo?: Prisma.directorperiodoOrderByRelationAggregateInput;
    _relevance?: Prisma.directorOrderByRelevanceInput;
};
export type directorWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    personaId?: string;
    AND?: Prisma.directorWhereInput | Prisma.directorWhereInput[];
    OR?: Prisma.directorWhereInput[];
    NOT?: Prisma.directorWhereInput | Prisma.directorWhereInput[];
    fechaAlta?: Prisma.DateTimeFilter<"director"> | Date | string;
    fechaBaja?: Prisma.DateTimeNullableFilter<"director"> | Date | string | null;
    activo?: Prisma.BoolFilter<"director"> | boolean;
    observaciones?: Prisma.StringNullableFilter<"director"> | string | null;
    persona?: Prisma.XOR<Prisma.PersonaScalarRelationFilter, Prisma.personaWhereInput>;
    directorperiodo?: Prisma.DirectorperiodoListRelationFilter;
}, "id" | "personaId">;
export type directorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.directorCountOrderByAggregateInput;
    _max?: Prisma.directorMaxOrderByAggregateInput;
    _min?: Prisma.directorMinOrderByAggregateInput;
};
export type directorScalarWhereWithAggregatesInput = {
    AND?: Prisma.directorScalarWhereWithAggregatesInput | Prisma.directorScalarWhereWithAggregatesInput[];
    OR?: Prisma.directorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.directorScalarWhereWithAggregatesInput | Prisma.directorScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"director"> | string;
    personaId?: Prisma.StringWithAggregatesFilter<"director"> | string;
    fechaAlta?: Prisma.DateTimeWithAggregatesFilter<"director"> | Date | string;
    fechaBaja?: Prisma.DateTimeNullableWithAggregatesFilter<"director"> | Date | string | null;
    activo?: Prisma.BoolWithAggregatesFilter<"director"> | boolean;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"director"> | string | null;
};
export type directorCreateInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    persona: Prisma.personaCreateNestedOneWithoutDirectorInput;
    directorperiodo?: Prisma.directorperiodoCreateNestedManyWithoutDirectorInput;
};
export type directorUncheckedCreateInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    directorperiodo?: Prisma.directorperiodoUncheckedCreateNestedManyWithoutDirectorInput;
};
export type directorUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    persona?: Prisma.personaUpdateOneRequiredWithoutDirectorNestedInput;
    directorperiodo?: Prisma.directorperiodoUpdateManyWithoutDirectorNestedInput;
};
export type directorUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    directorperiodo?: Prisma.directorperiodoUncheckedUpdateManyWithoutDirectorNestedInput;
};
export type directorCreateManyInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
};
export type directorUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type directorUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type directorOrderByRelevanceInput = {
    fields: Prisma.directorOrderByRelevanceFieldEnum | Prisma.directorOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type directorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
};
export type directorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
};
export type directorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    fechaAlta?: Prisma.SortOrder;
    fechaBaja?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
};
export type DirectorNullableScalarRelationFilter = {
    is?: Prisma.directorWhereInput | null;
    isNot?: Prisma.directorWhereInput | null;
};
export type DirectorScalarRelationFilter = {
    is?: Prisma.directorWhereInput;
    isNot?: Prisma.directorWhereInput;
};
export type directorCreateNestedOneWithoutPersonaInput = {
    create?: Prisma.XOR<Prisma.directorCreateWithoutPersonaInput, Prisma.directorUncheckedCreateWithoutPersonaInput>;
    connectOrCreate?: Prisma.directorCreateOrConnectWithoutPersonaInput;
    connect?: Prisma.directorWhereUniqueInput;
};
export type directorUncheckedCreateNestedOneWithoutPersonaInput = {
    create?: Prisma.XOR<Prisma.directorCreateWithoutPersonaInput, Prisma.directorUncheckedCreateWithoutPersonaInput>;
    connectOrCreate?: Prisma.directorCreateOrConnectWithoutPersonaInput;
    connect?: Prisma.directorWhereUniqueInput;
};
export type directorUpdateOneWithoutPersonaNestedInput = {
    create?: Prisma.XOR<Prisma.directorCreateWithoutPersonaInput, Prisma.directorUncheckedCreateWithoutPersonaInput>;
    connectOrCreate?: Prisma.directorCreateOrConnectWithoutPersonaInput;
    upsert?: Prisma.directorUpsertWithoutPersonaInput;
    disconnect?: Prisma.directorWhereInput | boolean;
    delete?: Prisma.directorWhereInput | boolean;
    connect?: Prisma.directorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.directorUpdateToOneWithWhereWithoutPersonaInput, Prisma.directorUpdateWithoutPersonaInput>, Prisma.directorUncheckedUpdateWithoutPersonaInput>;
};
export type directorUncheckedUpdateOneWithoutPersonaNestedInput = {
    create?: Prisma.XOR<Prisma.directorCreateWithoutPersonaInput, Prisma.directorUncheckedCreateWithoutPersonaInput>;
    connectOrCreate?: Prisma.directorCreateOrConnectWithoutPersonaInput;
    upsert?: Prisma.directorUpsertWithoutPersonaInput;
    disconnect?: Prisma.directorWhereInput | boolean;
    delete?: Prisma.directorWhereInput | boolean;
    connect?: Prisma.directorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.directorUpdateToOneWithWhereWithoutPersonaInput, Prisma.directorUpdateWithoutPersonaInput>, Prisma.directorUncheckedUpdateWithoutPersonaInput>;
};
export type directorCreateNestedOneWithoutDirectorperiodoInput = {
    create?: Prisma.XOR<Prisma.directorCreateWithoutDirectorperiodoInput, Prisma.directorUncheckedCreateWithoutDirectorperiodoInput>;
    connectOrCreate?: Prisma.directorCreateOrConnectWithoutDirectorperiodoInput;
    connect?: Prisma.directorWhereUniqueInput;
};
export type directorUpdateOneRequiredWithoutDirectorperiodoNestedInput = {
    create?: Prisma.XOR<Prisma.directorCreateWithoutDirectorperiodoInput, Prisma.directorUncheckedCreateWithoutDirectorperiodoInput>;
    connectOrCreate?: Prisma.directorCreateOrConnectWithoutDirectorperiodoInput;
    upsert?: Prisma.directorUpsertWithoutDirectorperiodoInput;
    connect?: Prisma.directorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.directorUpdateToOneWithWhereWithoutDirectorperiodoInput, Prisma.directorUpdateWithoutDirectorperiodoInput>, Prisma.directorUncheckedUpdateWithoutDirectorperiodoInput>;
};
export type directorCreateWithoutPersonaInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    directorperiodo?: Prisma.directorperiodoCreateNestedManyWithoutDirectorInput;
};
export type directorUncheckedCreateWithoutPersonaInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    directorperiodo?: Prisma.directorperiodoUncheckedCreateNestedManyWithoutDirectorInput;
};
export type directorCreateOrConnectWithoutPersonaInput = {
    where: Prisma.directorWhereUniqueInput;
    create: Prisma.XOR<Prisma.directorCreateWithoutPersonaInput, Prisma.directorUncheckedCreateWithoutPersonaInput>;
};
export type directorUpsertWithoutPersonaInput = {
    update: Prisma.XOR<Prisma.directorUpdateWithoutPersonaInput, Prisma.directorUncheckedUpdateWithoutPersonaInput>;
    create: Prisma.XOR<Prisma.directorCreateWithoutPersonaInput, Prisma.directorUncheckedCreateWithoutPersonaInput>;
    where?: Prisma.directorWhereInput;
};
export type directorUpdateToOneWithWhereWithoutPersonaInput = {
    where?: Prisma.directorWhereInput;
    data: Prisma.XOR<Prisma.directorUpdateWithoutPersonaInput, Prisma.directorUncheckedUpdateWithoutPersonaInput>;
};
export type directorUpdateWithoutPersonaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    directorperiodo?: Prisma.directorperiodoUpdateManyWithoutDirectorNestedInput;
};
export type directorUncheckedUpdateWithoutPersonaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    directorperiodo?: Prisma.directorperiodoUncheckedUpdateManyWithoutDirectorNestedInput;
};
export type directorCreateWithoutDirectorperiodoInput = {
    id: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
    persona: Prisma.personaCreateNestedOneWithoutDirectorInput;
};
export type directorUncheckedCreateWithoutDirectorperiodoInput = {
    id: string;
    personaId: string;
    fechaAlta: Date | string;
    fechaBaja?: Date | string | null;
    activo?: boolean;
    observaciones?: string | null;
};
export type directorCreateOrConnectWithoutDirectorperiodoInput = {
    where: Prisma.directorWhereUniqueInput;
    create: Prisma.XOR<Prisma.directorCreateWithoutDirectorperiodoInput, Prisma.directorUncheckedCreateWithoutDirectorperiodoInput>;
};
export type directorUpsertWithoutDirectorperiodoInput = {
    update: Prisma.XOR<Prisma.directorUpdateWithoutDirectorperiodoInput, Prisma.directorUncheckedUpdateWithoutDirectorperiodoInput>;
    create: Prisma.XOR<Prisma.directorCreateWithoutDirectorperiodoInput, Prisma.directorUncheckedCreateWithoutDirectorperiodoInput>;
    where?: Prisma.directorWhereInput;
};
export type directorUpdateToOneWithWhereWithoutDirectorperiodoInput = {
    where?: Prisma.directorWhereInput;
    data: Prisma.XOR<Prisma.directorUpdateWithoutDirectorperiodoInput, Prisma.directorUncheckedUpdateWithoutDirectorperiodoInput>;
};
export type directorUpdateWithoutDirectorperiodoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    persona?: Prisma.personaUpdateOneRequiredWithoutDirectorNestedInput;
};
export type directorUncheckedUpdateWithoutDirectorperiodoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaAlta?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaBaja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type DirectorCountOutputType
 */
export type DirectorCountOutputType = {
    directorperiodo: number;
};
export type DirectorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    directorperiodo?: boolean | DirectorCountOutputTypeCountDirectorperiodoArgs;
};
/**
 * DirectorCountOutputType without action
 */
export type DirectorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectorCountOutputType
     */
    select?: Prisma.DirectorCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * DirectorCountOutputType without action
 */
export type DirectorCountOutputTypeCountDirectorperiodoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.directorperiodoWhereInput;
};
export type directorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    personaId?: boolean;
    fechaAlta?: boolean;
    fechaBaja?: boolean;
    activo?: boolean;
    observaciones?: boolean;
    persona?: boolean | Prisma.personaDefaultArgs<ExtArgs>;
    directorperiodo?: boolean | Prisma.director$directorperiodoArgs<ExtArgs>;
    _count?: boolean | Prisma.DirectorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["director"]>;
export type directorSelectScalar = {
    id?: boolean;
    personaId?: boolean;
    fechaAlta?: boolean;
    fechaBaja?: boolean;
    activo?: boolean;
    observaciones?: boolean;
};
export type directorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "personaId" | "fechaAlta" | "fechaBaja" | "activo" | "observaciones", ExtArgs["result"]["director"]>;
export type directorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    persona?: boolean | Prisma.personaDefaultArgs<ExtArgs>;
    directorperiodo?: boolean | Prisma.director$directorperiodoArgs<ExtArgs>;
    _count?: boolean | Prisma.DirectorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $directorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "director";
    objects: {
        persona: Prisma.$personaPayload<ExtArgs>;
        directorperiodo: Prisma.$directorperiodoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        personaId: string;
        fechaAlta: Date;
        fechaBaja: Date | null;
        activo: boolean;
        observaciones: string | null;
    }, ExtArgs["result"]["director"]>;
    composites: {};
};
export type directorGetPayload<S extends boolean | null | undefined | directorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$directorPayload, S>;
export type directorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<directorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DirectorCountAggregateInputType | true;
};
export interface directorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['director'];
        meta: {
            name: 'director';
        };
    };
    /**
     * Find zero or one Director that matches the filter.
     * @param {directorFindUniqueArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends directorFindUniqueArgs>(args: Prisma.SelectSubset<T, directorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__directorClient<runtime.Types.Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Director that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {directorFindUniqueOrThrowArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends directorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, directorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__directorClient<runtime.Types.Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Director that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorFindFirstArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends directorFindFirstArgs>(args?: Prisma.SelectSubset<T, directorFindFirstArgs<ExtArgs>>): Prisma.Prisma__directorClient<runtime.Types.Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Director that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorFindFirstOrThrowArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends directorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, directorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__directorClient<runtime.Types.Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Directors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Directors
     * const directors = await prisma.director.findMany()
     *
     * // Get first 10 Directors
     * const directors = await prisma.director.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const directorWithIdOnly = await prisma.director.findMany({ select: { id: true } })
     *
     */
    findMany<T extends directorFindManyArgs>(args?: Prisma.SelectSubset<T, directorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Director.
     * @param {directorCreateArgs} args - Arguments to create a Director.
     * @example
     * // Create one Director
     * const Director = await prisma.director.create({
     *   data: {
     *     // ... data to create a Director
     *   }
     * })
     *
     */
    create<T extends directorCreateArgs>(args: Prisma.SelectSubset<T, directorCreateArgs<ExtArgs>>): Prisma.Prisma__directorClient<runtime.Types.Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Directors.
     * @param {directorCreateManyArgs} args - Arguments to create many Directors.
     * @example
     * // Create many Directors
     * const director = await prisma.director.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends directorCreateManyArgs>(args?: Prisma.SelectSubset<T, directorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Director.
     * @param {directorDeleteArgs} args - Arguments to delete one Director.
     * @example
     * // Delete one Director
     * const Director = await prisma.director.delete({
     *   where: {
     *     // ... filter to delete one Director
     *   }
     * })
     *
     */
    delete<T extends directorDeleteArgs>(args: Prisma.SelectSubset<T, directorDeleteArgs<ExtArgs>>): Prisma.Prisma__directorClient<runtime.Types.Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Director.
     * @param {directorUpdateArgs} args - Arguments to update one Director.
     * @example
     * // Update one Director
     * const director = await prisma.director.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends directorUpdateArgs>(args: Prisma.SelectSubset<T, directorUpdateArgs<ExtArgs>>): Prisma.Prisma__directorClient<runtime.Types.Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Directors.
     * @param {directorDeleteManyArgs} args - Arguments to filter Directors to delete.
     * @example
     * // Delete a few Directors
     * const { count } = await prisma.director.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends directorDeleteManyArgs>(args?: Prisma.SelectSubset<T, directorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Directors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Directors
     * const director = await prisma.director.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends directorUpdateManyArgs>(args: Prisma.SelectSubset<T, directorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Director.
     * @param {directorUpsertArgs} args - Arguments to update or create a Director.
     * @example
     * // Update or create a Director
     * const director = await prisma.director.upsert({
     *   create: {
     *     // ... data to create a Director
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Director we want to update
     *   }
     * })
     */
    upsert<T extends directorUpsertArgs>(args: Prisma.SelectSubset<T, directorUpsertArgs<ExtArgs>>): Prisma.Prisma__directorClient<runtime.Types.Result.GetResult<Prisma.$directorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Directors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorCountArgs} args - Arguments to filter Directors to count.
     * @example
     * // Count the number of Directors
     * const count = await prisma.director.count({
     *   where: {
     *     // ... the filter for the Directors we want to count
     *   }
     * })
    **/
    count<T extends directorCountArgs>(args?: Prisma.Subset<T, directorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DirectorCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Director.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DirectorAggregateArgs>(args: Prisma.Subset<T, DirectorAggregateArgs>): Prisma.PrismaPromise<GetDirectorAggregateType<T>>;
    /**
     * Group by Director.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {directorGroupByArgs} args - Group by arguments.
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
    groupBy<T extends directorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: directorGroupByArgs['orderBy'];
    } : {
        orderBy?: directorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, directorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the director model
     */
    readonly fields: directorFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for director.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__directorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    persona<T extends Prisma.personaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.personaDefaultArgs<ExtArgs>>): Prisma.Prisma__personaClient<runtime.Types.Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    directorperiodo<T extends Prisma.director$directorperiodoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.director$directorperiodoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$directorperiodoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the director model
 */
export interface directorFieldRefs {
    readonly id: Prisma.FieldRef<"director", 'String'>;
    readonly personaId: Prisma.FieldRef<"director", 'String'>;
    readonly fechaAlta: Prisma.FieldRef<"director", 'DateTime'>;
    readonly fechaBaja: Prisma.FieldRef<"director", 'DateTime'>;
    readonly activo: Prisma.FieldRef<"director", 'Boolean'>;
    readonly observaciones: Prisma.FieldRef<"director", 'String'>;
}
/**
 * director findUnique
 */
export type directorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which director to fetch.
     */
    where: Prisma.directorWhereUniqueInput;
};
/**
 * director findUniqueOrThrow
 */
export type directorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which director to fetch.
     */
    where: Prisma.directorWhereUniqueInput;
};
/**
 * director findFirst
 */
export type directorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which director to fetch.
     */
    where?: Prisma.directorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of directors to fetch.
     */
    orderBy?: Prisma.directorOrderByWithRelationInput | Prisma.directorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for directors.
     */
    cursor?: Prisma.directorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` directors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` directors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of directors.
     */
    distinct?: Prisma.DirectorScalarFieldEnum | Prisma.DirectorScalarFieldEnum[];
};
/**
 * director findFirstOrThrow
 */
export type directorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which director to fetch.
     */
    where?: Prisma.directorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of directors to fetch.
     */
    orderBy?: Prisma.directorOrderByWithRelationInput | Prisma.directorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for directors.
     */
    cursor?: Prisma.directorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` directors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` directors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of directors.
     */
    distinct?: Prisma.DirectorScalarFieldEnum | Prisma.DirectorScalarFieldEnum[];
};
/**
 * director findMany
 */
export type directorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which directors to fetch.
     */
    where?: Prisma.directorWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of directors to fetch.
     */
    orderBy?: Prisma.directorOrderByWithRelationInput | Prisma.directorOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing directors.
     */
    cursor?: Prisma.directorWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` directors from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` directors.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of directors.
     */
    distinct?: Prisma.DirectorScalarFieldEnum | Prisma.DirectorScalarFieldEnum[];
};
/**
 * director create
 */
export type directorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a director.
     */
    data: Prisma.XOR<Prisma.directorCreateInput, Prisma.directorUncheckedCreateInput>;
};
/**
 * director createMany
 */
export type directorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many directors.
     */
    data: Prisma.directorCreateManyInput | Prisma.directorCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * director update
 */
export type directorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a director.
     */
    data: Prisma.XOR<Prisma.directorUpdateInput, Prisma.directorUncheckedUpdateInput>;
    /**
     * Choose, which director to update.
     */
    where: Prisma.directorWhereUniqueInput;
};
/**
 * director updateMany
 */
export type directorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update directors.
     */
    data: Prisma.XOR<Prisma.directorUpdateManyMutationInput, Prisma.directorUncheckedUpdateManyInput>;
    /**
     * Filter which directors to update
     */
    where?: Prisma.directorWhereInput;
    /**
     * Limit how many directors to update.
     */
    limit?: number;
};
/**
 * director upsert
 */
export type directorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the director to update in case it exists.
     */
    where: Prisma.directorWhereUniqueInput;
    /**
     * In case the director found by the `where` argument doesn't exist, create a new director with this data.
     */
    create: Prisma.XOR<Prisma.directorCreateInput, Prisma.directorUncheckedCreateInput>;
    /**
     * In case the director was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.directorUpdateInput, Prisma.directorUncheckedUpdateInput>;
};
/**
 * director delete
 */
export type directorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which director to delete.
     */
    where: Prisma.directorWhereUniqueInput;
};
/**
 * director deleteMany
 */
export type directorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which directors to delete
     */
    where?: Prisma.directorWhereInput;
    /**
     * Limit how many directors to delete.
     */
    limit?: number;
};
/**
 * director.directorperiodo
 */
export type director$directorperiodoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the directorperiodo
     */
    select?: Prisma.directorperiodoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the directorperiodo
     */
    omit?: Prisma.directorperiodoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.directorperiodoInclude<ExtArgs> | null;
    where?: Prisma.directorperiodoWhereInput;
    orderBy?: Prisma.directorperiodoOrderByWithRelationInput | Prisma.directorperiodoOrderByWithRelationInput[];
    cursor?: Prisma.directorperiodoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DirectorperiodoScalarFieldEnum | Prisma.DirectorperiodoScalarFieldEnum[];
};
/**
 * director without action
 */
export type directorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=director.d.ts.map