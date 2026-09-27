import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model familia
 *
 */
export type familiaModel = runtime.Types.Result.DefaultSelection<Prisma.$familiaPayload>;
export type AggregateFamilia = {
    _count: FamiliaCountAggregateOutputType | null;
    _min: FamiliaMinAggregateOutputType | null;
    _max: FamiliaMaxAggregateOutputType | null;
};
export type FamiliaMinAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FamiliaMaxAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FamiliaCountAggregateOutputType = {
    id: number;
    nombre: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FamiliaMinAggregateInputType = {
    id?: true;
    nombre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FamiliaMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FamiliaCountAggregateInputType = {
    id?: true;
    nombre?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FamiliaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which familia to aggregate.
     */
    where?: Prisma.familiaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of familias to fetch.
     */
    orderBy?: Prisma.familiaOrderByWithRelationInput | Prisma.familiaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.familiaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` familias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` familias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned familias
    **/
    _count?: true | FamiliaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FamiliaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FamiliaMaxAggregateInputType;
};
export type GetFamiliaAggregateType<T extends FamiliaAggregateArgs> = {
    [P in keyof T & keyof AggregateFamilia]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFamilia[P]> : Prisma.GetScalarType<T[P], AggregateFamilia[P]>;
};
export type familiaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.familiaWhereInput;
    orderBy?: Prisma.familiaOrderByWithAggregationInput | Prisma.familiaOrderByWithAggregationInput[];
    by: Prisma.FamiliaScalarFieldEnum[] | Prisma.FamiliaScalarFieldEnum;
    having?: Prisma.familiaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FamiliaCountAggregateInputType | true;
    _min?: FamiliaMinAggregateInputType;
    _max?: FamiliaMaxAggregateInputType;
};
export type FamiliaGroupByOutputType = {
    id: string;
    nombre: string;
    createdAt: Date;
    updatedAt: Date;
    _count: FamiliaCountAggregateOutputType | null;
    _min: FamiliaMinAggregateOutputType | null;
    _max: FamiliaMaxAggregateOutputType | null;
};
export type GetFamiliaGroupByPayload<T extends familiaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FamiliaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FamiliaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FamiliaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FamiliaGroupByOutputType[P]>;
}>>;
export type familiaWhereInput = {
    AND?: Prisma.familiaWhereInput | Prisma.familiaWhereInput[];
    OR?: Prisma.familiaWhereInput[];
    NOT?: Prisma.familiaWhereInput | Prisma.familiaWhereInput[];
    id?: Prisma.StringFilter<"familia"> | string;
    nombre?: Prisma.StringFilter<"familia"> | string;
    createdAt?: Prisma.DateTimeFilter<"familia"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"familia"> | Date | string;
    seccion?: Prisma.SeccionListRelationFilter;
};
export type familiaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    seccion?: Prisma.seccionOrderByRelationAggregateInput;
    _relevance?: Prisma.familiaOrderByRelevanceInput;
};
export type familiaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    nombre?: string;
    AND?: Prisma.familiaWhereInput | Prisma.familiaWhereInput[];
    OR?: Prisma.familiaWhereInput[];
    NOT?: Prisma.familiaWhereInput | Prisma.familiaWhereInput[];
    createdAt?: Prisma.DateTimeFilter<"familia"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"familia"> | Date | string;
    seccion?: Prisma.SeccionListRelationFilter;
}, "id" | "nombre">;
export type familiaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.familiaCountOrderByAggregateInput;
    _max?: Prisma.familiaMaxOrderByAggregateInput;
    _min?: Prisma.familiaMinOrderByAggregateInput;
};
export type familiaScalarWhereWithAggregatesInput = {
    AND?: Prisma.familiaScalarWhereWithAggregatesInput | Prisma.familiaScalarWhereWithAggregatesInput[];
    OR?: Prisma.familiaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.familiaScalarWhereWithAggregatesInput | Prisma.familiaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"familia"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"familia"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"familia"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"familia"> | Date | string;
};
export type familiaCreateInput = {
    id: string;
    nombre: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
    seccion?: Prisma.seccionCreateNestedManyWithoutFamiliaInput;
};
export type familiaUncheckedCreateInput = {
    id: string;
    nombre: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
    seccion?: Prisma.seccionUncheckedCreateNestedManyWithoutFamiliaInput;
};
export type familiaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    seccion?: Prisma.seccionUpdateManyWithoutFamiliaNestedInput;
};
export type familiaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    seccion?: Prisma.seccionUncheckedUpdateManyWithoutFamiliaNestedInput;
};
export type familiaCreateManyInput = {
    id: string;
    nombre: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type familiaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type familiaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type familiaOrderByRelevanceInput = {
    fields: Prisma.familiaOrderByRelevanceFieldEnum | Prisma.familiaOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type familiaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type familiaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type familiaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FamiliaScalarRelationFilter = {
    is?: Prisma.familiaWhereInput;
    isNot?: Prisma.familiaWhereInput;
};
export type familiaCreateNestedOneWithoutSeccionInput = {
    create?: Prisma.XOR<Prisma.familiaCreateWithoutSeccionInput, Prisma.familiaUncheckedCreateWithoutSeccionInput>;
    connectOrCreate?: Prisma.familiaCreateOrConnectWithoutSeccionInput;
    connect?: Prisma.familiaWhereUniqueInput;
};
export type familiaUpdateOneRequiredWithoutSeccionNestedInput = {
    create?: Prisma.XOR<Prisma.familiaCreateWithoutSeccionInput, Prisma.familiaUncheckedCreateWithoutSeccionInput>;
    connectOrCreate?: Prisma.familiaCreateOrConnectWithoutSeccionInput;
    upsert?: Prisma.familiaUpsertWithoutSeccionInput;
    connect?: Prisma.familiaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.familiaUpdateToOneWithWhereWithoutSeccionInput, Prisma.familiaUpdateWithoutSeccionInput>, Prisma.familiaUncheckedUpdateWithoutSeccionInput>;
};
export type familiaCreateWithoutSeccionInput = {
    id: string;
    nombre: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type familiaUncheckedCreateWithoutSeccionInput = {
    id: string;
    nombre: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type familiaCreateOrConnectWithoutSeccionInput = {
    where: Prisma.familiaWhereUniqueInput;
    create: Prisma.XOR<Prisma.familiaCreateWithoutSeccionInput, Prisma.familiaUncheckedCreateWithoutSeccionInput>;
};
export type familiaUpsertWithoutSeccionInput = {
    update: Prisma.XOR<Prisma.familiaUpdateWithoutSeccionInput, Prisma.familiaUncheckedUpdateWithoutSeccionInput>;
    create: Prisma.XOR<Prisma.familiaCreateWithoutSeccionInput, Prisma.familiaUncheckedCreateWithoutSeccionInput>;
    where?: Prisma.familiaWhereInput;
};
export type familiaUpdateToOneWithWhereWithoutSeccionInput = {
    where?: Prisma.familiaWhereInput;
    data: Prisma.XOR<Prisma.familiaUpdateWithoutSeccionInput, Prisma.familiaUncheckedUpdateWithoutSeccionInput>;
};
export type familiaUpdateWithoutSeccionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type familiaUncheckedUpdateWithoutSeccionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type FamiliaCountOutputType
 */
export type FamiliaCountOutputType = {
    seccion: number;
};
export type FamiliaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    seccion?: boolean | FamiliaCountOutputTypeCountSeccionArgs;
};
/**
 * FamiliaCountOutputType without action
 */
export type FamiliaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FamiliaCountOutputType
     */
    select?: Prisma.FamiliaCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * FamiliaCountOutputType without action
 */
export type FamiliaCountOutputTypeCountSeccionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.seccionWhereInput;
};
export type familiaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    seccion?: boolean | Prisma.familia$seccionArgs<ExtArgs>;
    _count?: boolean | Prisma.FamiliaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["familia"]>;
export type familiaSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type familiaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "createdAt" | "updatedAt", ExtArgs["result"]["familia"]>;
export type familiaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    seccion?: boolean | Prisma.familia$seccionArgs<ExtArgs>;
    _count?: boolean | Prisma.FamiliaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $familiaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "familia";
    objects: {
        seccion: Prisma.$seccionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nombre: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["familia"]>;
    composites: {};
};
export type familiaGetPayload<S extends boolean | null | undefined | familiaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$familiaPayload, S>;
export type familiaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<familiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FamiliaCountAggregateInputType | true;
};
export interface familiaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['familia'];
        meta: {
            name: 'familia';
        };
    };
    /**
     * Find zero or one Familia that matches the filter.
     * @param {familiaFindUniqueArgs} args - Arguments to find a Familia
     * @example
     * // Get one Familia
     * const familia = await prisma.familia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends familiaFindUniqueArgs>(args: Prisma.SelectSubset<T, familiaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__familiaClient<runtime.Types.Result.GetResult<Prisma.$familiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Familia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {familiaFindUniqueOrThrowArgs} args - Arguments to find a Familia
     * @example
     * // Get one Familia
     * const familia = await prisma.familia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends familiaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, familiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__familiaClient<runtime.Types.Result.GetResult<Prisma.$familiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Familia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familiaFindFirstArgs} args - Arguments to find a Familia
     * @example
     * // Get one Familia
     * const familia = await prisma.familia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends familiaFindFirstArgs>(args?: Prisma.SelectSubset<T, familiaFindFirstArgs<ExtArgs>>): Prisma.Prisma__familiaClient<runtime.Types.Result.GetResult<Prisma.$familiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Familia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familiaFindFirstOrThrowArgs} args - Arguments to find a Familia
     * @example
     * // Get one Familia
     * const familia = await prisma.familia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends familiaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, familiaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__familiaClient<runtime.Types.Result.GetResult<Prisma.$familiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Familias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Familias
     * const familias = await prisma.familia.findMany()
     *
     * // Get first 10 Familias
     * const familias = await prisma.familia.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const familiaWithIdOnly = await prisma.familia.findMany({ select: { id: true } })
     *
     */
    findMany<T extends familiaFindManyArgs>(args?: Prisma.SelectSubset<T, familiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$familiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Familia.
     * @param {familiaCreateArgs} args - Arguments to create a Familia.
     * @example
     * // Create one Familia
     * const Familia = await prisma.familia.create({
     *   data: {
     *     // ... data to create a Familia
     *   }
     * })
     *
     */
    create<T extends familiaCreateArgs>(args: Prisma.SelectSubset<T, familiaCreateArgs<ExtArgs>>): Prisma.Prisma__familiaClient<runtime.Types.Result.GetResult<Prisma.$familiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Familias.
     * @param {familiaCreateManyArgs} args - Arguments to create many Familias.
     * @example
     * // Create many Familias
     * const familia = await prisma.familia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends familiaCreateManyArgs>(args?: Prisma.SelectSubset<T, familiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Familia.
     * @param {familiaDeleteArgs} args - Arguments to delete one Familia.
     * @example
     * // Delete one Familia
     * const Familia = await prisma.familia.delete({
     *   where: {
     *     // ... filter to delete one Familia
     *   }
     * })
     *
     */
    delete<T extends familiaDeleteArgs>(args: Prisma.SelectSubset<T, familiaDeleteArgs<ExtArgs>>): Prisma.Prisma__familiaClient<runtime.Types.Result.GetResult<Prisma.$familiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Familia.
     * @param {familiaUpdateArgs} args - Arguments to update one Familia.
     * @example
     * // Update one Familia
     * const familia = await prisma.familia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends familiaUpdateArgs>(args: Prisma.SelectSubset<T, familiaUpdateArgs<ExtArgs>>): Prisma.Prisma__familiaClient<runtime.Types.Result.GetResult<Prisma.$familiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Familias.
     * @param {familiaDeleteManyArgs} args - Arguments to filter Familias to delete.
     * @example
     * // Delete a few Familias
     * const { count } = await prisma.familia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends familiaDeleteManyArgs>(args?: Prisma.SelectSubset<T, familiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Familias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Familias
     * const familia = await prisma.familia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends familiaUpdateManyArgs>(args: Prisma.SelectSubset<T, familiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Familia.
     * @param {familiaUpsertArgs} args - Arguments to update or create a Familia.
     * @example
     * // Update or create a Familia
     * const familia = await prisma.familia.upsert({
     *   create: {
     *     // ... data to create a Familia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Familia we want to update
     *   }
     * })
     */
    upsert<T extends familiaUpsertArgs>(args: Prisma.SelectSubset<T, familiaUpsertArgs<ExtArgs>>): Prisma.Prisma__familiaClient<runtime.Types.Result.GetResult<Prisma.$familiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Familias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familiaCountArgs} args - Arguments to filter Familias to count.
     * @example
     * // Count the number of Familias
     * const count = await prisma.familia.count({
     *   where: {
     *     // ... the filter for the Familias we want to count
     *   }
     * })
    **/
    count<T extends familiaCountArgs>(args?: Prisma.Subset<T, familiaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FamiliaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Familia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FamiliaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FamiliaAggregateArgs>(args: Prisma.Subset<T, FamiliaAggregateArgs>): Prisma.PrismaPromise<GetFamiliaAggregateType<T>>;
    /**
     * Group by Familia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {familiaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends familiaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: familiaGroupByArgs['orderBy'];
    } : {
        orderBy?: familiaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, familiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFamiliaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the familia model
     */
    readonly fields: familiaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for familia.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__familiaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    seccion<T extends Prisma.familia$seccionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.familia$seccionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$seccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the familia model
 */
export interface familiaFieldRefs {
    readonly id: Prisma.FieldRef<"familia", 'String'>;
    readonly nombre: Prisma.FieldRef<"familia", 'String'>;
    readonly createdAt: Prisma.FieldRef<"familia", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"familia", 'DateTime'>;
}
/**
 * familia findUnique
 */
export type familiaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia
     */
    select?: Prisma.familiaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the familia
     */
    omit?: Prisma.familiaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.familiaInclude<ExtArgs> | null;
    /**
     * Filter, which familia to fetch.
     */
    where: Prisma.familiaWhereUniqueInput;
};
/**
 * familia findUniqueOrThrow
 */
export type familiaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia
     */
    select?: Prisma.familiaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the familia
     */
    omit?: Prisma.familiaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.familiaInclude<ExtArgs> | null;
    /**
     * Filter, which familia to fetch.
     */
    where: Prisma.familiaWhereUniqueInput;
};
/**
 * familia findFirst
 */
export type familiaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia
     */
    select?: Prisma.familiaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the familia
     */
    omit?: Prisma.familiaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.familiaInclude<ExtArgs> | null;
    /**
     * Filter, which familia to fetch.
     */
    where?: Prisma.familiaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of familias to fetch.
     */
    orderBy?: Prisma.familiaOrderByWithRelationInput | Prisma.familiaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for familias.
     */
    cursor?: Prisma.familiaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` familias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` familias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of familias.
     */
    distinct?: Prisma.FamiliaScalarFieldEnum | Prisma.FamiliaScalarFieldEnum[];
};
/**
 * familia findFirstOrThrow
 */
export type familiaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia
     */
    select?: Prisma.familiaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the familia
     */
    omit?: Prisma.familiaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.familiaInclude<ExtArgs> | null;
    /**
     * Filter, which familia to fetch.
     */
    where?: Prisma.familiaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of familias to fetch.
     */
    orderBy?: Prisma.familiaOrderByWithRelationInput | Prisma.familiaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for familias.
     */
    cursor?: Prisma.familiaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` familias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` familias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of familias.
     */
    distinct?: Prisma.FamiliaScalarFieldEnum | Prisma.FamiliaScalarFieldEnum[];
};
/**
 * familia findMany
 */
export type familiaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia
     */
    select?: Prisma.familiaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the familia
     */
    omit?: Prisma.familiaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.familiaInclude<ExtArgs> | null;
    /**
     * Filter, which familias to fetch.
     */
    where?: Prisma.familiaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of familias to fetch.
     */
    orderBy?: Prisma.familiaOrderByWithRelationInput | Prisma.familiaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing familias.
     */
    cursor?: Prisma.familiaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` familias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` familias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of familias.
     */
    distinct?: Prisma.FamiliaScalarFieldEnum | Prisma.FamiliaScalarFieldEnum[];
};
/**
 * familia create
 */
export type familiaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia
     */
    select?: Prisma.familiaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the familia
     */
    omit?: Prisma.familiaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.familiaInclude<ExtArgs> | null;
    /**
     * The data needed to create a familia.
     */
    data: Prisma.XOR<Prisma.familiaCreateInput, Prisma.familiaUncheckedCreateInput>;
};
/**
 * familia createMany
 */
export type familiaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many familias.
     */
    data: Prisma.familiaCreateManyInput | Prisma.familiaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * familia update
 */
export type familiaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia
     */
    select?: Prisma.familiaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the familia
     */
    omit?: Prisma.familiaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.familiaInclude<ExtArgs> | null;
    /**
     * The data needed to update a familia.
     */
    data: Prisma.XOR<Prisma.familiaUpdateInput, Prisma.familiaUncheckedUpdateInput>;
    /**
     * Choose, which familia to update.
     */
    where: Prisma.familiaWhereUniqueInput;
};
/**
 * familia updateMany
 */
export type familiaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update familias.
     */
    data: Prisma.XOR<Prisma.familiaUpdateManyMutationInput, Prisma.familiaUncheckedUpdateManyInput>;
    /**
     * Filter which familias to update
     */
    where?: Prisma.familiaWhereInput;
    /**
     * Limit how many familias to update.
     */
    limit?: number;
};
/**
 * familia upsert
 */
export type familiaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia
     */
    select?: Prisma.familiaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the familia
     */
    omit?: Prisma.familiaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.familiaInclude<ExtArgs> | null;
    /**
     * The filter to search for the familia to update in case it exists.
     */
    where: Prisma.familiaWhereUniqueInput;
    /**
     * In case the familia found by the `where` argument doesn't exist, create a new familia with this data.
     */
    create: Prisma.XOR<Prisma.familiaCreateInput, Prisma.familiaUncheckedCreateInput>;
    /**
     * In case the familia was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.familiaUpdateInput, Prisma.familiaUncheckedUpdateInput>;
};
/**
 * familia delete
 */
export type familiaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia
     */
    select?: Prisma.familiaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the familia
     */
    omit?: Prisma.familiaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.familiaInclude<ExtArgs> | null;
    /**
     * Filter which familia to delete.
     */
    where: Prisma.familiaWhereUniqueInput;
};
/**
 * familia deleteMany
 */
export type familiaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which familias to delete
     */
    where?: Prisma.familiaWhereInput;
    /**
     * Limit how many familias to delete.
     */
    limit?: number;
};
/**
 * familia.seccion
 */
export type familia$seccionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the seccion
     */
    select?: Prisma.seccionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the seccion
     */
    omit?: Prisma.seccionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.seccionInclude<ExtArgs> | null;
    where?: Prisma.seccionWhereInput;
    orderBy?: Prisma.seccionOrderByWithRelationInput | Prisma.seccionOrderByWithRelationInput[];
    cursor?: Prisma.seccionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SeccionScalarFieldEnum | Prisma.SeccionScalarFieldEnum[];
};
/**
 * familia without action
 */
export type familiaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the familia
     */
    select?: Prisma.familiaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the familia
     */
    omit?: Prisma.familiaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.familiaInclude<ExtArgs> | null;
};
//# sourceMappingURL=familia.d.ts.map