import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model rolfuncional
 *
 */
export type rolfuncionalModel = runtime.Types.Result.DefaultSelection<Prisma.$rolfuncionalPayload>;
export type AggregateRolfuncional = {
    _count: RolfuncionalCountAggregateOutputType | null;
    _min: RolfuncionalMinAggregateOutputType | null;
    _max: RolfuncionalMaxAggregateOutputType | null;
};
export type RolfuncionalMinAggregateOutputType = {
    id: string | null;
    codigo: string | null;
    nombre: string | null;
    descripcion: string | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RolfuncionalMaxAggregateOutputType = {
    id: string | null;
    codigo: string | null;
    nombre: string | null;
    descripcion: string | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RolfuncionalCountAggregateOutputType = {
    id: number;
    codigo: number;
    nombre: number;
    descripcion: number;
    activo: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RolfuncionalMinAggregateInputType = {
    id?: true;
    codigo?: true;
    nombre?: true;
    descripcion?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RolfuncionalMaxAggregateInputType = {
    id?: true;
    codigo?: true;
    nombre?: true;
    descripcion?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RolfuncionalCountAggregateInputType = {
    id?: true;
    codigo?: true;
    nombre?: true;
    descripcion?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RolfuncionalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which rolfuncional to aggregate.
     */
    where?: Prisma.rolfuncionalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rolfuncionals to fetch.
     */
    orderBy?: Prisma.rolfuncionalOrderByWithRelationInput | Prisma.rolfuncionalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.rolfuncionalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rolfuncionals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rolfuncionals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned rolfuncionals
    **/
    _count?: true | RolfuncionalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RolfuncionalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RolfuncionalMaxAggregateInputType;
};
export type GetRolfuncionalAggregateType<T extends RolfuncionalAggregateArgs> = {
    [P in keyof T & keyof AggregateRolfuncional]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRolfuncional[P]> : Prisma.GetScalarType<T[P], AggregateRolfuncional[P]>;
};
export type rolfuncionalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rolfuncionalWhereInput;
    orderBy?: Prisma.rolfuncionalOrderByWithAggregationInput | Prisma.rolfuncionalOrderByWithAggregationInput[];
    by: Prisma.RolfuncionalScalarFieldEnum[] | Prisma.RolfuncionalScalarFieldEnum;
    having?: Prisma.rolfuncionalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RolfuncionalCountAggregateInputType | true;
    _min?: RolfuncionalMinAggregateInputType;
    _max?: RolfuncionalMaxAggregateInputType;
};
export type RolfuncionalGroupByOutputType = {
    id: string;
    codigo: string;
    nombre: string;
    descripcion: string | null;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: RolfuncionalCountAggregateOutputType | null;
    _min: RolfuncionalMinAggregateOutputType | null;
    _max: RolfuncionalMaxAggregateOutputType | null;
};
export type GetRolfuncionalGroupByPayload<T extends rolfuncionalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RolfuncionalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RolfuncionalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RolfuncionalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RolfuncionalGroupByOutputType[P]>;
}>>;
export type rolfuncionalWhereInput = {
    AND?: Prisma.rolfuncionalWhereInput | Prisma.rolfuncionalWhereInput[];
    OR?: Prisma.rolfuncionalWhereInput[];
    NOT?: Prisma.rolfuncionalWhereInput | Prisma.rolfuncionalWhereInput[];
    id?: Prisma.StringFilter<"rolfuncional"> | string;
    codigo?: Prisma.StringFilter<"rolfuncional"> | string;
    nombre?: Prisma.StringFilter<"rolfuncional"> | string;
    descripcion?: Prisma.StringNullableFilter<"rolfuncional"> | string | null;
    activo?: Prisma.BoolFilter<"rolfuncional"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"rolfuncional"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"rolfuncional"> | Date | string;
    personarolfuncional?: Prisma.PersonarolfuncionalListRelationFilter;
};
export type rolfuncionalOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    personarolfuncional?: Prisma.personarolfuncionalOrderByRelationAggregateInput;
    _relevance?: Prisma.rolfuncionalOrderByRelevanceInput;
};
export type rolfuncionalWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    codigo?: string;
    AND?: Prisma.rolfuncionalWhereInput | Prisma.rolfuncionalWhereInput[];
    OR?: Prisma.rolfuncionalWhereInput[];
    NOT?: Prisma.rolfuncionalWhereInput | Prisma.rolfuncionalWhereInput[];
    nombre?: Prisma.StringFilter<"rolfuncional"> | string;
    descripcion?: Prisma.StringNullableFilter<"rolfuncional"> | string | null;
    activo?: Prisma.BoolFilter<"rolfuncional"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"rolfuncional"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"rolfuncional"> | Date | string;
    personarolfuncional?: Prisma.PersonarolfuncionalListRelationFilter;
}, "id" | "codigo">;
export type rolfuncionalOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.rolfuncionalCountOrderByAggregateInput;
    _max?: Prisma.rolfuncionalMaxOrderByAggregateInput;
    _min?: Prisma.rolfuncionalMinOrderByAggregateInput;
};
export type rolfuncionalScalarWhereWithAggregatesInput = {
    AND?: Prisma.rolfuncionalScalarWhereWithAggregatesInput | Prisma.rolfuncionalScalarWhereWithAggregatesInput[];
    OR?: Prisma.rolfuncionalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.rolfuncionalScalarWhereWithAggregatesInput | Prisma.rolfuncionalScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"rolfuncional"> | string;
    codigo?: Prisma.StringWithAggregatesFilter<"rolfuncional"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"rolfuncional"> | string;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"rolfuncional"> | string | null;
    activo?: Prisma.BoolWithAggregatesFilter<"rolfuncional"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"rolfuncional"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"rolfuncional"> | Date | string;
};
export type rolfuncionalCreateInput = {
    id: string;
    codigo: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    personarolfuncional?: Prisma.personarolfuncionalCreateNestedManyWithoutRolfuncionalInput;
};
export type rolfuncionalUncheckedCreateInput = {
    id: string;
    codigo: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    personarolfuncional?: Prisma.personarolfuncionalUncheckedCreateNestedManyWithoutRolfuncionalInput;
};
export type rolfuncionalUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personarolfuncional?: Prisma.personarolfuncionalUpdateManyWithoutRolfuncionalNestedInput;
};
export type rolfuncionalUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    personarolfuncional?: Prisma.personarolfuncionalUncheckedUpdateManyWithoutRolfuncionalNestedInput;
};
export type rolfuncionalCreateManyInput = {
    id: string;
    codigo: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type rolfuncionalUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type rolfuncionalUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RolfuncionalScalarRelationFilter = {
    is?: Prisma.rolfuncionalWhereInput;
    isNot?: Prisma.rolfuncionalWhereInput;
};
export type rolfuncionalOrderByRelevanceInput = {
    fields: Prisma.rolfuncionalOrderByRelevanceFieldEnum | Prisma.rolfuncionalOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type rolfuncionalCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type rolfuncionalMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type rolfuncionalMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type rolfuncionalCreateNestedOneWithoutPersonarolfuncionalInput = {
    create?: Prisma.XOR<Prisma.rolfuncionalCreateWithoutPersonarolfuncionalInput, Prisma.rolfuncionalUncheckedCreateWithoutPersonarolfuncionalInput>;
    connectOrCreate?: Prisma.rolfuncionalCreateOrConnectWithoutPersonarolfuncionalInput;
    connect?: Prisma.rolfuncionalWhereUniqueInput;
};
export type rolfuncionalUpdateOneRequiredWithoutPersonarolfuncionalNestedInput = {
    create?: Prisma.XOR<Prisma.rolfuncionalCreateWithoutPersonarolfuncionalInput, Prisma.rolfuncionalUncheckedCreateWithoutPersonarolfuncionalInput>;
    connectOrCreate?: Prisma.rolfuncionalCreateOrConnectWithoutPersonarolfuncionalInput;
    upsert?: Prisma.rolfuncionalUpsertWithoutPersonarolfuncionalInput;
    connect?: Prisma.rolfuncionalWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.rolfuncionalUpdateToOneWithWhereWithoutPersonarolfuncionalInput, Prisma.rolfuncionalUpdateWithoutPersonarolfuncionalInput>, Prisma.rolfuncionalUncheckedUpdateWithoutPersonarolfuncionalInput>;
};
export type rolfuncionalCreateWithoutPersonarolfuncionalInput = {
    id: string;
    codigo: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type rolfuncionalUncheckedCreateWithoutPersonarolfuncionalInput = {
    id: string;
    codigo: string;
    nombre: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type rolfuncionalCreateOrConnectWithoutPersonarolfuncionalInput = {
    where: Prisma.rolfuncionalWhereUniqueInput;
    create: Prisma.XOR<Prisma.rolfuncionalCreateWithoutPersonarolfuncionalInput, Prisma.rolfuncionalUncheckedCreateWithoutPersonarolfuncionalInput>;
};
export type rolfuncionalUpsertWithoutPersonarolfuncionalInput = {
    update: Prisma.XOR<Prisma.rolfuncionalUpdateWithoutPersonarolfuncionalInput, Prisma.rolfuncionalUncheckedUpdateWithoutPersonarolfuncionalInput>;
    create: Prisma.XOR<Prisma.rolfuncionalCreateWithoutPersonarolfuncionalInput, Prisma.rolfuncionalUncheckedCreateWithoutPersonarolfuncionalInput>;
    where?: Prisma.rolfuncionalWhereInput;
};
export type rolfuncionalUpdateToOneWithWhereWithoutPersonarolfuncionalInput = {
    where?: Prisma.rolfuncionalWhereInput;
    data: Prisma.XOR<Prisma.rolfuncionalUpdateWithoutPersonarolfuncionalInput, Prisma.rolfuncionalUncheckedUpdateWithoutPersonarolfuncionalInput>;
};
export type rolfuncionalUpdateWithoutPersonarolfuncionalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type rolfuncionalUncheckedUpdateWithoutPersonarolfuncionalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type RolfuncionalCountOutputType
 */
export type RolfuncionalCountOutputType = {
    personarolfuncional: number;
};
export type RolfuncionalCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    personarolfuncional?: boolean | RolfuncionalCountOutputTypeCountPersonarolfuncionalArgs;
};
/**
 * RolfuncionalCountOutputType without action
 */
export type RolfuncionalCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolfuncionalCountOutputType
     */
    select?: Prisma.RolfuncionalCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * RolfuncionalCountOutputType without action
 */
export type RolfuncionalCountOutputTypeCountPersonarolfuncionalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.personarolfuncionalWhereInput;
};
export type rolfuncionalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    codigo?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    personarolfuncional?: boolean | Prisma.rolfuncional$personarolfuncionalArgs<ExtArgs>;
    _count?: boolean | Prisma.RolfuncionalCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rolfuncional"]>;
export type rolfuncionalSelectScalar = {
    id?: boolean;
    codigo?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type rolfuncionalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "codigo" | "nombre" | "descripcion" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["rolfuncional"]>;
export type rolfuncionalInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    personarolfuncional?: boolean | Prisma.rolfuncional$personarolfuncionalArgs<ExtArgs>;
    _count?: boolean | Prisma.RolfuncionalCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $rolfuncionalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "rolfuncional";
    objects: {
        personarolfuncional: Prisma.$personarolfuncionalPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        codigo: string;
        nombre: string;
        descripcion: string | null;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["rolfuncional"]>;
    composites: {};
};
export type rolfuncionalGetPayload<S extends boolean | null | undefined | rolfuncionalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$rolfuncionalPayload, S>;
export type rolfuncionalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<rolfuncionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RolfuncionalCountAggregateInputType | true;
};
export interface rolfuncionalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['rolfuncional'];
        meta: {
            name: 'rolfuncional';
        };
    };
    /**
     * Find zero or one Rolfuncional that matches the filter.
     * @param {rolfuncionalFindUniqueArgs} args - Arguments to find a Rolfuncional
     * @example
     * // Get one Rolfuncional
     * const rolfuncional = await prisma.rolfuncional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolfuncionalFindUniqueArgs>(args: Prisma.SelectSubset<T, rolfuncionalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__rolfuncionalClient<runtime.Types.Result.GetResult<Prisma.$rolfuncionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Rolfuncional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolfuncionalFindUniqueOrThrowArgs} args - Arguments to find a Rolfuncional
     * @example
     * // Get one Rolfuncional
     * const rolfuncional = await prisma.rolfuncional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolfuncionalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, rolfuncionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__rolfuncionalClient<runtime.Types.Result.GetResult<Prisma.$rolfuncionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Rolfuncional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolfuncionalFindFirstArgs} args - Arguments to find a Rolfuncional
     * @example
     * // Get one Rolfuncional
     * const rolfuncional = await prisma.rolfuncional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolfuncionalFindFirstArgs>(args?: Prisma.SelectSubset<T, rolfuncionalFindFirstArgs<ExtArgs>>): Prisma.Prisma__rolfuncionalClient<runtime.Types.Result.GetResult<Prisma.$rolfuncionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Rolfuncional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolfuncionalFindFirstOrThrowArgs} args - Arguments to find a Rolfuncional
     * @example
     * // Get one Rolfuncional
     * const rolfuncional = await prisma.rolfuncional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolfuncionalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, rolfuncionalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__rolfuncionalClient<runtime.Types.Result.GetResult<Prisma.$rolfuncionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Rolfuncionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolfuncionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rolfuncionals
     * const rolfuncionals = await prisma.rolfuncional.findMany()
     *
     * // Get first 10 Rolfuncionals
     * const rolfuncionals = await prisma.rolfuncional.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const rolfuncionalWithIdOnly = await prisma.rolfuncional.findMany({ select: { id: true } })
     *
     */
    findMany<T extends rolfuncionalFindManyArgs>(args?: Prisma.SelectSubset<T, rolfuncionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rolfuncionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Rolfuncional.
     * @param {rolfuncionalCreateArgs} args - Arguments to create a Rolfuncional.
     * @example
     * // Create one Rolfuncional
     * const Rolfuncional = await prisma.rolfuncional.create({
     *   data: {
     *     // ... data to create a Rolfuncional
     *   }
     * })
     *
     */
    create<T extends rolfuncionalCreateArgs>(args: Prisma.SelectSubset<T, rolfuncionalCreateArgs<ExtArgs>>): Prisma.Prisma__rolfuncionalClient<runtime.Types.Result.GetResult<Prisma.$rolfuncionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Rolfuncionals.
     * @param {rolfuncionalCreateManyArgs} args - Arguments to create many Rolfuncionals.
     * @example
     * // Create many Rolfuncionals
     * const rolfuncional = await prisma.rolfuncional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends rolfuncionalCreateManyArgs>(args?: Prisma.SelectSubset<T, rolfuncionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Rolfuncional.
     * @param {rolfuncionalDeleteArgs} args - Arguments to delete one Rolfuncional.
     * @example
     * // Delete one Rolfuncional
     * const Rolfuncional = await prisma.rolfuncional.delete({
     *   where: {
     *     // ... filter to delete one Rolfuncional
     *   }
     * })
     *
     */
    delete<T extends rolfuncionalDeleteArgs>(args: Prisma.SelectSubset<T, rolfuncionalDeleteArgs<ExtArgs>>): Prisma.Prisma__rolfuncionalClient<runtime.Types.Result.GetResult<Prisma.$rolfuncionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Rolfuncional.
     * @param {rolfuncionalUpdateArgs} args - Arguments to update one Rolfuncional.
     * @example
     * // Update one Rolfuncional
     * const rolfuncional = await prisma.rolfuncional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends rolfuncionalUpdateArgs>(args: Prisma.SelectSubset<T, rolfuncionalUpdateArgs<ExtArgs>>): Prisma.Prisma__rolfuncionalClient<runtime.Types.Result.GetResult<Prisma.$rolfuncionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Rolfuncionals.
     * @param {rolfuncionalDeleteManyArgs} args - Arguments to filter Rolfuncionals to delete.
     * @example
     * // Delete a few Rolfuncionals
     * const { count } = await prisma.rolfuncional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends rolfuncionalDeleteManyArgs>(args?: Prisma.SelectSubset<T, rolfuncionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Rolfuncionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolfuncionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rolfuncionals
     * const rolfuncional = await prisma.rolfuncional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends rolfuncionalUpdateManyArgs>(args: Prisma.SelectSubset<T, rolfuncionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Rolfuncional.
     * @param {rolfuncionalUpsertArgs} args - Arguments to update or create a Rolfuncional.
     * @example
     * // Update or create a Rolfuncional
     * const rolfuncional = await prisma.rolfuncional.upsert({
     *   create: {
     *     // ... data to create a Rolfuncional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rolfuncional we want to update
     *   }
     * })
     */
    upsert<T extends rolfuncionalUpsertArgs>(args: Prisma.SelectSubset<T, rolfuncionalUpsertArgs<ExtArgs>>): Prisma.Prisma__rolfuncionalClient<runtime.Types.Result.GetResult<Prisma.$rolfuncionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Rolfuncionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolfuncionalCountArgs} args - Arguments to filter Rolfuncionals to count.
     * @example
     * // Count the number of Rolfuncionals
     * const count = await prisma.rolfuncional.count({
     *   where: {
     *     // ... the filter for the Rolfuncionals we want to count
     *   }
     * })
    **/
    count<T extends rolfuncionalCountArgs>(args?: Prisma.Subset<T, rolfuncionalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RolfuncionalCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Rolfuncional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolfuncionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolfuncionalAggregateArgs>(args: Prisma.Subset<T, RolfuncionalAggregateArgs>): Prisma.PrismaPromise<GetRolfuncionalAggregateType<T>>;
    /**
     * Group by Rolfuncional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolfuncionalGroupByArgs} args - Group by arguments.
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
    groupBy<T extends rolfuncionalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: rolfuncionalGroupByArgs['orderBy'];
    } : {
        orderBy?: rolfuncionalGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, rolfuncionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolfuncionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the rolfuncional model
     */
    readonly fields: rolfuncionalFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for rolfuncional.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__rolfuncionalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    personarolfuncional<T extends Prisma.rolfuncional$personarolfuncionalArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.rolfuncional$personarolfuncionalArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$personarolfuncionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the rolfuncional model
 */
export interface rolfuncionalFieldRefs {
    readonly id: Prisma.FieldRef<"rolfuncional", 'String'>;
    readonly codigo: Prisma.FieldRef<"rolfuncional", 'String'>;
    readonly nombre: Prisma.FieldRef<"rolfuncional", 'String'>;
    readonly descripcion: Prisma.FieldRef<"rolfuncional", 'String'>;
    readonly activo: Prisma.FieldRef<"rolfuncional", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"rolfuncional", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"rolfuncional", 'DateTime'>;
}
/**
 * rolfuncional findUnique
 */
export type rolfuncionalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rolfuncional
     */
    select?: Prisma.rolfuncionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rolfuncional
     */
    omit?: Prisma.rolfuncionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rolfuncionalInclude<ExtArgs> | null;
    /**
     * Filter, which rolfuncional to fetch.
     */
    where: Prisma.rolfuncionalWhereUniqueInput;
};
/**
 * rolfuncional findUniqueOrThrow
 */
export type rolfuncionalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rolfuncional
     */
    select?: Prisma.rolfuncionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rolfuncional
     */
    omit?: Prisma.rolfuncionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rolfuncionalInclude<ExtArgs> | null;
    /**
     * Filter, which rolfuncional to fetch.
     */
    where: Prisma.rolfuncionalWhereUniqueInput;
};
/**
 * rolfuncional findFirst
 */
export type rolfuncionalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rolfuncional
     */
    select?: Prisma.rolfuncionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rolfuncional
     */
    omit?: Prisma.rolfuncionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rolfuncionalInclude<ExtArgs> | null;
    /**
     * Filter, which rolfuncional to fetch.
     */
    where?: Prisma.rolfuncionalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rolfuncionals to fetch.
     */
    orderBy?: Prisma.rolfuncionalOrderByWithRelationInput | Prisma.rolfuncionalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for rolfuncionals.
     */
    cursor?: Prisma.rolfuncionalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rolfuncionals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rolfuncionals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rolfuncionals.
     */
    distinct?: Prisma.RolfuncionalScalarFieldEnum | Prisma.RolfuncionalScalarFieldEnum[];
};
/**
 * rolfuncional findFirstOrThrow
 */
export type rolfuncionalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rolfuncional
     */
    select?: Prisma.rolfuncionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rolfuncional
     */
    omit?: Prisma.rolfuncionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rolfuncionalInclude<ExtArgs> | null;
    /**
     * Filter, which rolfuncional to fetch.
     */
    where?: Prisma.rolfuncionalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rolfuncionals to fetch.
     */
    orderBy?: Prisma.rolfuncionalOrderByWithRelationInput | Prisma.rolfuncionalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for rolfuncionals.
     */
    cursor?: Prisma.rolfuncionalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rolfuncionals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rolfuncionals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rolfuncionals.
     */
    distinct?: Prisma.RolfuncionalScalarFieldEnum | Prisma.RolfuncionalScalarFieldEnum[];
};
/**
 * rolfuncional findMany
 */
export type rolfuncionalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rolfuncional
     */
    select?: Prisma.rolfuncionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rolfuncional
     */
    omit?: Prisma.rolfuncionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rolfuncionalInclude<ExtArgs> | null;
    /**
     * Filter, which rolfuncionals to fetch.
     */
    where?: Prisma.rolfuncionalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of rolfuncionals to fetch.
     */
    orderBy?: Prisma.rolfuncionalOrderByWithRelationInput | Prisma.rolfuncionalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing rolfuncionals.
     */
    cursor?: Prisma.rolfuncionalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` rolfuncionals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` rolfuncionals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of rolfuncionals.
     */
    distinct?: Prisma.RolfuncionalScalarFieldEnum | Prisma.RolfuncionalScalarFieldEnum[];
};
/**
 * rolfuncional create
 */
export type rolfuncionalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rolfuncional
     */
    select?: Prisma.rolfuncionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rolfuncional
     */
    omit?: Prisma.rolfuncionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rolfuncionalInclude<ExtArgs> | null;
    /**
     * The data needed to create a rolfuncional.
     */
    data: Prisma.XOR<Prisma.rolfuncionalCreateInput, Prisma.rolfuncionalUncheckedCreateInput>;
};
/**
 * rolfuncional createMany
 */
export type rolfuncionalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many rolfuncionals.
     */
    data: Prisma.rolfuncionalCreateManyInput | Prisma.rolfuncionalCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * rolfuncional update
 */
export type rolfuncionalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rolfuncional
     */
    select?: Prisma.rolfuncionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rolfuncional
     */
    omit?: Prisma.rolfuncionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rolfuncionalInclude<ExtArgs> | null;
    /**
     * The data needed to update a rolfuncional.
     */
    data: Prisma.XOR<Prisma.rolfuncionalUpdateInput, Prisma.rolfuncionalUncheckedUpdateInput>;
    /**
     * Choose, which rolfuncional to update.
     */
    where: Prisma.rolfuncionalWhereUniqueInput;
};
/**
 * rolfuncional updateMany
 */
export type rolfuncionalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update rolfuncionals.
     */
    data: Prisma.XOR<Prisma.rolfuncionalUpdateManyMutationInput, Prisma.rolfuncionalUncheckedUpdateManyInput>;
    /**
     * Filter which rolfuncionals to update
     */
    where?: Prisma.rolfuncionalWhereInput;
    /**
     * Limit how many rolfuncionals to update.
     */
    limit?: number;
};
/**
 * rolfuncional upsert
 */
export type rolfuncionalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rolfuncional
     */
    select?: Prisma.rolfuncionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rolfuncional
     */
    omit?: Prisma.rolfuncionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rolfuncionalInclude<ExtArgs> | null;
    /**
     * The filter to search for the rolfuncional to update in case it exists.
     */
    where: Prisma.rolfuncionalWhereUniqueInput;
    /**
     * In case the rolfuncional found by the `where` argument doesn't exist, create a new rolfuncional with this data.
     */
    create: Prisma.XOR<Prisma.rolfuncionalCreateInput, Prisma.rolfuncionalUncheckedCreateInput>;
    /**
     * In case the rolfuncional was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.rolfuncionalUpdateInput, Prisma.rolfuncionalUncheckedUpdateInput>;
};
/**
 * rolfuncional delete
 */
export type rolfuncionalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rolfuncional
     */
    select?: Prisma.rolfuncionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rolfuncional
     */
    omit?: Prisma.rolfuncionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rolfuncionalInclude<ExtArgs> | null;
    /**
     * Filter which rolfuncional to delete.
     */
    where: Prisma.rolfuncionalWhereUniqueInput;
};
/**
 * rolfuncional deleteMany
 */
export type rolfuncionalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which rolfuncionals to delete
     */
    where?: Prisma.rolfuncionalWhereInput;
    /**
     * Limit how many rolfuncionals to delete.
     */
    limit?: number;
};
/**
 * rolfuncional.personarolfuncional
 */
export type rolfuncional$personarolfuncionalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * rolfuncional without action
 */
export type rolfuncionalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rolfuncional
     */
    select?: Prisma.rolfuncionalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the rolfuncional
     */
    omit?: Prisma.rolfuncionalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.rolfuncionalInclude<ExtArgs> | null;
};
//# sourceMappingURL=rolfuncional.d.ts.map