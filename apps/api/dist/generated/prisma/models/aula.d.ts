import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model aula
 *
 */
export type aulaModel = runtime.Types.Result.DefaultSelection<Prisma.$aulaPayload>;
export type AggregateAula = {
    _count: AulaCountAggregateOutputType | null;
    _avg: AulaAvgAggregateOutputType | null;
    _sum: AulaSumAggregateOutputType | null;
    _min: AulaMinAggregateOutputType | null;
    _max: AulaMaxAggregateOutputType | null;
};
export type AulaAvgAggregateOutputType = {
    capacidad: number | null;
};
export type AulaSumAggregateOutputType = {
    capacidad: number | null;
};
export type AulaMinAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    descripcion: string | null;
    capacidad: number | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AulaMaxAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    descripcion: string | null;
    capacidad: number | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AulaCountAggregateOutputType = {
    id: number;
    nombre: number;
    descripcion: number;
    capacidad: number;
    activo: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AulaAvgAggregateInputType = {
    capacidad?: true;
};
export type AulaSumAggregateInputType = {
    capacidad?: true;
};
export type AulaMinAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    capacidad?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AulaMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    capacidad?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AulaCountAggregateInputType = {
    id?: true;
    nombre?: true;
    descripcion?: true;
    capacidad?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AulaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which aula to aggregate.
     */
    where?: Prisma.aulaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of aulas to fetch.
     */
    orderBy?: Prisma.aulaOrderByWithRelationInput | Prisma.aulaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.aulaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` aulas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` aulas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned aulas
    **/
    _count?: true | AulaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AulaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AulaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AulaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AulaMaxAggregateInputType;
};
export type GetAulaAggregateType<T extends AulaAggregateArgs> = {
    [P in keyof T & keyof AggregateAula]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAula[P]> : Prisma.GetScalarType<T[P], AggregateAula[P]>;
};
export type aulaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.aulaWhereInput;
    orderBy?: Prisma.aulaOrderByWithAggregationInput | Prisma.aulaOrderByWithAggregationInput[];
    by: Prisma.AulaScalarFieldEnum[] | Prisma.AulaScalarFieldEnum;
    having?: Prisma.aulaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AulaCountAggregateInputType | true;
    _avg?: AulaAvgAggregateInputType;
    _sum?: AulaSumAggregateInputType;
    _min?: AulaMinAggregateInputType;
    _max?: AulaMaxAggregateInputType;
};
export type AulaGroupByOutputType = {
    id: string;
    nombre: string;
    descripcion: string | null;
    capacidad: number | null;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: AulaCountAggregateOutputType | null;
    _avg: AulaAvgAggregateOutputType | null;
    _sum: AulaSumAggregateOutputType | null;
    _min: AulaMinAggregateOutputType | null;
    _max: AulaMaxAggregateOutputType | null;
};
export type GetAulaGroupByPayload<T extends aulaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AulaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AulaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AulaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AulaGroupByOutputType[P]>;
}>>;
export type aulaWhereInput = {
    AND?: Prisma.aulaWhereInput | Prisma.aulaWhereInput[];
    OR?: Prisma.aulaWhereInput[];
    NOT?: Prisma.aulaWhereInput | Prisma.aulaWhereInput[];
    id?: Prisma.StringFilter<"aula"> | string;
    nombre?: Prisma.StringFilter<"aula"> | string;
    descripcion?: Prisma.StringNullableFilter<"aula"> | string | null;
    capacidad?: Prisma.IntNullableFilter<"aula"> | number | null;
    activo?: Prisma.BoolFilter<"aula"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"aula"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"aula"> | Date | string;
    clase?: Prisma.ClaseListRelationFilter;
};
export type aulaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    capacidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    clase?: Prisma.claseOrderByRelationAggregateInput;
    _relevance?: Prisma.aulaOrderByRelevanceInput;
};
export type aulaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.aulaWhereInput | Prisma.aulaWhereInput[];
    OR?: Prisma.aulaWhereInput[];
    NOT?: Prisma.aulaWhereInput | Prisma.aulaWhereInput[];
    nombre?: Prisma.StringFilter<"aula"> | string;
    descripcion?: Prisma.StringNullableFilter<"aula"> | string | null;
    capacidad?: Prisma.IntNullableFilter<"aula"> | number | null;
    activo?: Prisma.BoolFilter<"aula"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"aula"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"aula"> | Date | string;
    clase?: Prisma.ClaseListRelationFilter;
}, "id">;
export type aulaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    capacidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.aulaCountOrderByAggregateInput;
    _avg?: Prisma.aulaAvgOrderByAggregateInput;
    _max?: Prisma.aulaMaxOrderByAggregateInput;
    _min?: Prisma.aulaMinOrderByAggregateInput;
    _sum?: Prisma.aulaSumOrderByAggregateInput;
};
export type aulaScalarWhereWithAggregatesInput = {
    AND?: Prisma.aulaScalarWhereWithAggregatesInput | Prisma.aulaScalarWhereWithAggregatesInput[];
    OR?: Prisma.aulaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.aulaScalarWhereWithAggregatesInput | Prisma.aulaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"aula"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"aula"> | string;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"aula"> | string | null;
    capacidad?: Prisma.IntNullableWithAggregatesFilter<"aula"> | number | null;
    activo?: Prisma.BoolWithAggregatesFilter<"aula"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"aula"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"aula"> | Date | string;
};
export type aulaCreateInput = {
    id: string;
    nombre: string;
    descripcion?: string | null;
    capacidad?: number | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    clase?: Prisma.claseCreateNestedManyWithoutAulaInput;
};
export type aulaUncheckedCreateInput = {
    id: string;
    nombre: string;
    descripcion?: string | null;
    capacidad?: number | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    clase?: Prisma.claseUncheckedCreateNestedManyWithoutAulaInput;
};
export type aulaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clase?: Prisma.claseUpdateManyWithoutAulaNestedInput;
};
export type aulaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clase?: Prisma.claseUncheckedUpdateManyWithoutAulaNestedInput;
};
export type aulaCreateManyInput = {
    id: string;
    nombre: string;
    descripcion?: string | null;
    capacidad?: number | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type aulaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type aulaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type aulaOrderByRelevanceInput = {
    fields: Prisma.aulaOrderByRelevanceFieldEnum | Prisma.aulaOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type aulaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    capacidad?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type aulaAvgOrderByAggregateInput = {
    capacidad?: Prisma.SortOrder;
};
export type aulaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    capacidad?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type aulaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    capacidad?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type aulaSumOrderByAggregateInput = {
    capacidad?: Prisma.SortOrder;
};
export type AulaScalarRelationFilter = {
    is?: Prisma.aulaWhereInput;
    isNot?: Prisma.aulaWhereInput;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type aulaCreateNestedOneWithoutClaseInput = {
    create?: Prisma.XOR<Prisma.aulaCreateWithoutClaseInput, Prisma.aulaUncheckedCreateWithoutClaseInput>;
    connectOrCreate?: Prisma.aulaCreateOrConnectWithoutClaseInput;
    connect?: Prisma.aulaWhereUniqueInput;
};
export type aulaUpdateOneRequiredWithoutClaseNestedInput = {
    create?: Prisma.XOR<Prisma.aulaCreateWithoutClaseInput, Prisma.aulaUncheckedCreateWithoutClaseInput>;
    connectOrCreate?: Prisma.aulaCreateOrConnectWithoutClaseInput;
    upsert?: Prisma.aulaUpsertWithoutClaseInput;
    connect?: Prisma.aulaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.aulaUpdateToOneWithWhereWithoutClaseInput, Prisma.aulaUpdateWithoutClaseInput>, Prisma.aulaUncheckedUpdateWithoutClaseInput>;
};
export type aulaCreateWithoutClaseInput = {
    id: string;
    nombre: string;
    descripcion?: string | null;
    capacidad?: number | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type aulaUncheckedCreateWithoutClaseInput = {
    id: string;
    nombre: string;
    descripcion?: string | null;
    capacidad?: number | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type aulaCreateOrConnectWithoutClaseInput = {
    where: Prisma.aulaWhereUniqueInput;
    create: Prisma.XOR<Prisma.aulaCreateWithoutClaseInput, Prisma.aulaUncheckedCreateWithoutClaseInput>;
};
export type aulaUpsertWithoutClaseInput = {
    update: Prisma.XOR<Prisma.aulaUpdateWithoutClaseInput, Prisma.aulaUncheckedUpdateWithoutClaseInput>;
    create: Prisma.XOR<Prisma.aulaCreateWithoutClaseInput, Prisma.aulaUncheckedCreateWithoutClaseInput>;
    where?: Prisma.aulaWhereInput;
};
export type aulaUpdateToOneWithWhereWithoutClaseInput = {
    where?: Prisma.aulaWhereInput;
    data: Prisma.XOR<Prisma.aulaUpdateWithoutClaseInput, Prisma.aulaUncheckedUpdateWithoutClaseInput>;
};
export type aulaUpdateWithoutClaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type aulaUncheckedUpdateWithoutClaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type AulaCountOutputType
 */
export type AulaCountOutputType = {
    clase: number;
};
export type AulaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clase?: boolean | AulaCountOutputTypeCountClaseArgs;
};
/**
 * AulaCountOutputType without action
 */
export type AulaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AulaCountOutputType
     */
    select?: Prisma.AulaCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AulaCountOutputType without action
 */
export type AulaCountOutputTypeCountClaseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.claseWhereInput;
};
export type aulaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    capacidad?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clase?: boolean | Prisma.aula$claseArgs<ExtArgs>;
    _count?: boolean | Prisma.AulaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aula"]>;
export type aulaSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    descripcion?: boolean;
    capacidad?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type aulaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "descripcion" | "capacidad" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["aula"]>;
export type aulaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clase?: boolean | Prisma.aula$claseArgs<ExtArgs>;
    _count?: boolean | Prisma.AulaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $aulaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "aula";
    objects: {
        clase: Prisma.$clasePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nombre: string;
        descripcion: string | null;
        capacidad: number | null;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["aula"]>;
    composites: {};
};
export type aulaGetPayload<S extends boolean | null | undefined | aulaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$aulaPayload, S>;
export type aulaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<aulaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AulaCountAggregateInputType | true;
};
export interface aulaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['aula'];
        meta: {
            name: 'aula';
        };
    };
    /**
     * Find zero or one Aula that matches the filter.
     * @param {aulaFindUniqueArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends aulaFindUniqueArgs>(args: Prisma.SelectSubset<T, aulaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__aulaClient<runtime.Types.Result.GetResult<Prisma.$aulaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Aula that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {aulaFindUniqueOrThrowArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends aulaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, aulaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__aulaClient<runtime.Types.Result.GetResult<Prisma.$aulaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Aula that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulaFindFirstArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends aulaFindFirstArgs>(args?: Prisma.SelectSubset<T, aulaFindFirstArgs<ExtArgs>>): Prisma.Prisma__aulaClient<runtime.Types.Result.GetResult<Prisma.$aulaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Aula that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulaFindFirstOrThrowArgs} args - Arguments to find a Aula
     * @example
     * // Get one Aula
     * const aula = await prisma.aula.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends aulaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, aulaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__aulaClient<runtime.Types.Result.GetResult<Prisma.$aulaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Aulas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aulas
     * const aulas = await prisma.aula.findMany()
     *
     * // Get first 10 Aulas
     * const aulas = await prisma.aula.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const aulaWithIdOnly = await prisma.aula.findMany({ select: { id: true } })
     *
     */
    findMany<T extends aulaFindManyArgs>(args?: Prisma.SelectSubset<T, aulaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$aulaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Aula.
     * @param {aulaCreateArgs} args - Arguments to create a Aula.
     * @example
     * // Create one Aula
     * const Aula = await prisma.aula.create({
     *   data: {
     *     // ... data to create a Aula
     *   }
     * })
     *
     */
    create<T extends aulaCreateArgs>(args: Prisma.SelectSubset<T, aulaCreateArgs<ExtArgs>>): Prisma.Prisma__aulaClient<runtime.Types.Result.GetResult<Prisma.$aulaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Aulas.
     * @param {aulaCreateManyArgs} args - Arguments to create many Aulas.
     * @example
     * // Create many Aulas
     * const aula = await prisma.aula.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends aulaCreateManyArgs>(args?: Prisma.SelectSubset<T, aulaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Aula.
     * @param {aulaDeleteArgs} args - Arguments to delete one Aula.
     * @example
     * // Delete one Aula
     * const Aula = await prisma.aula.delete({
     *   where: {
     *     // ... filter to delete one Aula
     *   }
     * })
     *
     */
    delete<T extends aulaDeleteArgs>(args: Prisma.SelectSubset<T, aulaDeleteArgs<ExtArgs>>): Prisma.Prisma__aulaClient<runtime.Types.Result.GetResult<Prisma.$aulaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Aula.
     * @param {aulaUpdateArgs} args - Arguments to update one Aula.
     * @example
     * // Update one Aula
     * const aula = await prisma.aula.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends aulaUpdateArgs>(args: Prisma.SelectSubset<T, aulaUpdateArgs<ExtArgs>>): Prisma.Prisma__aulaClient<runtime.Types.Result.GetResult<Prisma.$aulaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Aulas.
     * @param {aulaDeleteManyArgs} args - Arguments to filter Aulas to delete.
     * @example
     * // Delete a few Aulas
     * const { count } = await prisma.aula.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends aulaDeleteManyArgs>(args?: Prisma.SelectSubset<T, aulaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aulas
     * const aula = await prisma.aula.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends aulaUpdateManyArgs>(args: Prisma.SelectSubset<T, aulaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Aula.
     * @param {aulaUpsertArgs} args - Arguments to update or create a Aula.
     * @example
     * // Update or create a Aula
     * const aula = await prisma.aula.upsert({
     *   create: {
     *     // ... data to create a Aula
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aula we want to update
     *   }
     * })
     */
    upsert<T extends aulaUpsertArgs>(args: Prisma.SelectSubset<T, aulaUpsertArgs<ExtArgs>>): Prisma.Prisma__aulaClient<runtime.Types.Result.GetResult<Prisma.$aulaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Aulas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulaCountArgs} args - Arguments to filter Aulas to count.
     * @example
     * // Count the number of Aulas
     * const count = await prisma.aula.count({
     *   where: {
     *     // ... the filter for the Aulas we want to count
     *   }
     * })
    **/
    count<T extends aulaCountArgs>(args?: Prisma.Subset<T, aulaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AulaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Aula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AulaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AulaAggregateArgs>(args: Prisma.Subset<T, AulaAggregateArgs>): Prisma.PrismaPromise<GetAulaAggregateType<T>>;
    /**
     * Group by Aula.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {aulaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends aulaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: aulaGroupByArgs['orderBy'];
    } : {
        orderBy?: aulaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, aulaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAulaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the aula model
     */
    readonly fields: aulaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for aula.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__aulaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    clase<T extends Prisma.aula$claseArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.aula$claseArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$clasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the aula model
 */
export interface aulaFieldRefs {
    readonly id: Prisma.FieldRef<"aula", 'String'>;
    readonly nombre: Prisma.FieldRef<"aula", 'String'>;
    readonly descripcion: Prisma.FieldRef<"aula", 'String'>;
    readonly capacidad: Prisma.FieldRef<"aula", 'Int'>;
    readonly activo: Prisma.FieldRef<"aula", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"aula", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"aula", 'DateTime'>;
}
/**
 * aula findUnique
 */
export type aulaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aula
     */
    select?: Prisma.aulaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the aula
     */
    omit?: Prisma.aulaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.aulaInclude<ExtArgs> | null;
    /**
     * Filter, which aula to fetch.
     */
    where: Prisma.aulaWhereUniqueInput;
};
/**
 * aula findUniqueOrThrow
 */
export type aulaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aula
     */
    select?: Prisma.aulaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the aula
     */
    omit?: Prisma.aulaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.aulaInclude<ExtArgs> | null;
    /**
     * Filter, which aula to fetch.
     */
    where: Prisma.aulaWhereUniqueInput;
};
/**
 * aula findFirst
 */
export type aulaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aula
     */
    select?: Prisma.aulaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the aula
     */
    omit?: Prisma.aulaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.aulaInclude<ExtArgs> | null;
    /**
     * Filter, which aula to fetch.
     */
    where?: Prisma.aulaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of aulas to fetch.
     */
    orderBy?: Prisma.aulaOrderByWithRelationInput | Prisma.aulaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for aulas.
     */
    cursor?: Prisma.aulaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` aulas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` aulas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of aulas.
     */
    distinct?: Prisma.AulaScalarFieldEnum | Prisma.AulaScalarFieldEnum[];
};
/**
 * aula findFirstOrThrow
 */
export type aulaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aula
     */
    select?: Prisma.aulaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the aula
     */
    omit?: Prisma.aulaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.aulaInclude<ExtArgs> | null;
    /**
     * Filter, which aula to fetch.
     */
    where?: Prisma.aulaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of aulas to fetch.
     */
    orderBy?: Prisma.aulaOrderByWithRelationInput | Prisma.aulaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for aulas.
     */
    cursor?: Prisma.aulaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` aulas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` aulas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of aulas.
     */
    distinct?: Prisma.AulaScalarFieldEnum | Prisma.AulaScalarFieldEnum[];
};
/**
 * aula findMany
 */
export type aulaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aula
     */
    select?: Prisma.aulaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the aula
     */
    omit?: Prisma.aulaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.aulaInclude<ExtArgs> | null;
    /**
     * Filter, which aulas to fetch.
     */
    where?: Prisma.aulaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of aulas to fetch.
     */
    orderBy?: Prisma.aulaOrderByWithRelationInput | Prisma.aulaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing aulas.
     */
    cursor?: Prisma.aulaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` aulas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` aulas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of aulas.
     */
    distinct?: Prisma.AulaScalarFieldEnum | Prisma.AulaScalarFieldEnum[];
};
/**
 * aula create
 */
export type aulaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aula
     */
    select?: Prisma.aulaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the aula
     */
    omit?: Prisma.aulaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.aulaInclude<ExtArgs> | null;
    /**
     * The data needed to create a aula.
     */
    data: Prisma.XOR<Prisma.aulaCreateInput, Prisma.aulaUncheckedCreateInput>;
};
/**
 * aula createMany
 */
export type aulaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many aulas.
     */
    data: Prisma.aulaCreateManyInput | Prisma.aulaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * aula update
 */
export type aulaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aula
     */
    select?: Prisma.aulaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the aula
     */
    omit?: Prisma.aulaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.aulaInclude<ExtArgs> | null;
    /**
     * The data needed to update a aula.
     */
    data: Prisma.XOR<Prisma.aulaUpdateInput, Prisma.aulaUncheckedUpdateInput>;
    /**
     * Choose, which aula to update.
     */
    where: Prisma.aulaWhereUniqueInput;
};
/**
 * aula updateMany
 */
export type aulaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update aulas.
     */
    data: Prisma.XOR<Prisma.aulaUpdateManyMutationInput, Prisma.aulaUncheckedUpdateManyInput>;
    /**
     * Filter which aulas to update
     */
    where?: Prisma.aulaWhereInput;
    /**
     * Limit how many aulas to update.
     */
    limit?: number;
};
/**
 * aula upsert
 */
export type aulaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aula
     */
    select?: Prisma.aulaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the aula
     */
    omit?: Prisma.aulaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.aulaInclude<ExtArgs> | null;
    /**
     * The filter to search for the aula to update in case it exists.
     */
    where: Prisma.aulaWhereUniqueInput;
    /**
     * In case the aula found by the `where` argument doesn't exist, create a new aula with this data.
     */
    create: Prisma.XOR<Prisma.aulaCreateInput, Prisma.aulaUncheckedCreateInput>;
    /**
     * In case the aula was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.aulaUpdateInput, Prisma.aulaUncheckedUpdateInput>;
};
/**
 * aula delete
 */
export type aulaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aula
     */
    select?: Prisma.aulaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the aula
     */
    omit?: Prisma.aulaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.aulaInclude<ExtArgs> | null;
    /**
     * Filter which aula to delete.
     */
    where: Prisma.aulaWhereUniqueInput;
};
/**
 * aula deleteMany
 */
export type aulaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which aulas to delete
     */
    where?: Prisma.aulaWhereInput;
    /**
     * Limit how many aulas to delete.
     */
    limit?: number;
};
/**
 * aula.clase
 */
export type aula$claseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * aula without action
 */
export type aulaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the aula
     */
    select?: Prisma.aulaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the aula
     */
    omit?: Prisma.aulaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.aulaInclude<ExtArgs> | null;
};
//# sourceMappingURL=aula.d.ts.map