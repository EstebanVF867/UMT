import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model parametrosistema
 *
 */
export type parametrosistemaModel = runtime.Types.Result.DefaultSelection<Prisma.$parametrosistemaPayload>;
export type AggregateParametrosistema = {
    _count: ParametrosistemaCountAggregateOutputType | null;
    _min: ParametrosistemaMinAggregateOutputType | null;
    _max: ParametrosistemaMaxAggregateOutputType | null;
};
export type ParametrosistemaMinAggregateOutputType = {
    id: string | null;
    codigo: string | null;
    nombre: string | null;
    tipo: $Enums.parametrosistema_tipo | null;
    valor: string | null;
    descripcion: string | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParametrosistemaMaxAggregateOutputType = {
    id: string | null;
    codigo: string | null;
    nombre: string | null;
    tipo: $Enums.parametrosistema_tipo | null;
    valor: string | null;
    descripcion: string | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ParametrosistemaCountAggregateOutputType = {
    id: number;
    codigo: number;
    nombre: number;
    tipo: number;
    valor: number;
    descripcion: number;
    activo: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ParametrosistemaMinAggregateInputType = {
    id?: true;
    codigo?: true;
    nombre?: true;
    tipo?: true;
    valor?: true;
    descripcion?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParametrosistemaMaxAggregateInputType = {
    id?: true;
    codigo?: true;
    nombre?: true;
    tipo?: true;
    valor?: true;
    descripcion?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ParametrosistemaCountAggregateInputType = {
    id?: true;
    codigo?: true;
    nombre?: true;
    tipo?: true;
    valor?: true;
    descripcion?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ParametrosistemaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which parametrosistema to aggregate.
     */
    where?: Prisma.parametrosistemaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of parametrosistemas to fetch.
     */
    orderBy?: Prisma.parametrosistemaOrderByWithRelationInput | Prisma.parametrosistemaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.parametrosistemaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` parametrosistemas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` parametrosistemas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned parametrosistemas
    **/
    _count?: true | ParametrosistemaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ParametrosistemaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ParametrosistemaMaxAggregateInputType;
};
export type GetParametrosistemaAggregateType<T extends ParametrosistemaAggregateArgs> = {
    [P in keyof T & keyof AggregateParametrosistema]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateParametrosistema[P]> : Prisma.GetScalarType<T[P], AggregateParametrosistema[P]>;
};
export type parametrosistemaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.parametrosistemaWhereInput;
    orderBy?: Prisma.parametrosistemaOrderByWithAggregationInput | Prisma.parametrosistemaOrderByWithAggregationInput[];
    by: Prisma.ParametrosistemaScalarFieldEnum[] | Prisma.ParametrosistemaScalarFieldEnum;
    having?: Prisma.parametrosistemaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParametrosistemaCountAggregateInputType | true;
    _min?: ParametrosistemaMinAggregateInputType;
    _max?: ParametrosistemaMaxAggregateInputType;
};
export type ParametrosistemaGroupByOutputType = {
    id: string;
    codigo: string;
    nombre: string;
    tipo: $Enums.parametrosistema_tipo;
    valor: string;
    descripcion: string | null;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: ParametrosistemaCountAggregateOutputType | null;
    _min: ParametrosistemaMinAggregateOutputType | null;
    _max: ParametrosistemaMaxAggregateOutputType | null;
};
export type GetParametrosistemaGroupByPayload<T extends parametrosistemaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ParametrosistemaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ParametrosistemaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ParametrosistemaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ParametrosistemaGroupByOutputType[P]>;
}>>;
export type parametrosistemaWhereInput = {
    AND?: Prisma.parametrosistemaWhereInput | Prisma.parametrosistemaWhereInput[];
    OR?: Prisma.parametrosistemaWhereInput[];
    NOT?: Prisma.parametrosistemaWhereInput | Prisma.parametrosistemaWhereInput[];
    id?: Prisma.StringFilter<"parametrosistema"> | string;
    codigo?: Prisma.StringFilter<"parametrosistema"> | string;
    nombre?: Prisma.StringFilter<"parametrosistema"> | string;
    tipo?: Prisma.Enumparametrosistema_tipoFilter<"parametrosistema"> | $Enums.parametrosistema_tipo;
    valor?: Prisma.StringFilter<"parametrosistema"> | string;
    descripcion?: Prisma.StringNullableFilter<"parametrosistema"> | string | null;
    activo?: Prisma.BoolFilter<"parametrosistema"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"parametrosistema"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"parametrosistema"> | Date | string;
};
export type parametrosistemaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _relevance?: Prisma.parametrosistemaOrderByRelevanceInput;
};
export type parametrosistemaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    codigo?: string;
    AND?: Prisma.parametrosistemaWhereInput | Prisma.parametrosistemaWhereInput[];
    OR?: Prisma.parametrosistemaWhereInput[];
    NOT?: Prisma.parametrosistemaWhereInput | Prisma.parametrosistemaWhereInput[];
    nombre?: Prisma.StringFilter<"parametrosistema"> | string;
    tipo?: Prisma.Enumparametrosistema_tipoFilter<"parametrosistema"> | $Enums.parametrosistema_tipo;
    valor?: Prisma.StringFilter<"parametrosistema"> | string;
    descripcion?: Prisma.StringNullableFilter<"parametrosistema"> | string | null;
    activo?: Prisma.BoolFilter<"parametrosistema"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"parametrosistema"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"parametrosistema"> | Date | string;
}, "id" | "codigo">;
export type parametrosistemaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.parametrosistemaCountOrderByAggregateInput;
    _max?: Prisma.parametrosistemaMaxOrderByAggregateInput;
    _min?: Prisma.parametrosistemaMinOrderByAggregateInput;
};
export type parametrosistemaScalarWhereWithAggregatesInput = {
    AND?: Prisma.parametrosistemaScalarWhereWithAggregatesInput | Prisma.parametrosistemaScalarWhereWithAggregatesInput[];
    OR?: Prisma.parametrosistemaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.parametrosistemaScalarWhereWithAggregatesInput | Prisma.parametrosistemaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"parametrosistema"> | string;
    codigo?: Prisma.StringWithAggregatesFilter<"parametrosistema"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"parametrosistema"> | string;
    tipo?: Prisma.Enumparametrosistema_tipoWithAggregatesFilter<"parametrosistema"> | $Enums.parametrosistema_tipo;
    valor?: Prisma.StringWithAggregatesFilter<"parametrosistema"> | string;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"parametrosistema"> | string | null;
    activo?: Prisma.BoolWithAggregatesFilter<"parametrosistema"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"parametrosistema"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"parametrosistema"> | Date | string;
};
export type parametrosistemaCreateInput = {
    id: string;
    codigo: string;
    nombre: string;
    tipo: $Enums.parametrosistema_tipo;
    valor: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type parametrosistemaUncheckedCreateInput = {
    id: string;
    codigo: string;
    nombre: string;
    tipo: $Enums.parametrosistema_tipo;
    valor: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type parametrosistemaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumparametrosistema_tipoFieldUpdateOperationsInput | $Enums.parametrosistema_tipo;
    valor?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type parametrosistemaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumparametrosistema_tipoFieldUpdateOperationsInput | $Enums.parametrosistema_tipo;
    valor?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type parametrosistemaCreateManyInput = {
    id: string;
    codigo: string;
    nombre: string;
    tipo: $Enums.parametrosistema_tipo;
    valor: string;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type parametrosistemaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumparametrosistema_tipoFieldUpdateOperationsInput | $Enums.parametrosistema_tipo;
    valor?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type parametrosistemaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    codigo?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumparametrosistema_tipoFieldUpdateOperationsInput | $Enums.parametrosistema_tipo;
    valor?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type parametrosistemaOrderByRelevanceInput = {
    fields: Prisma.parametrosistemaOrderByRelevanceFieldEnum | Prisma.parametrosistemaOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type parametrosistemaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type parametrosistemaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type parametrosistemaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    codigo?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    valor?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type Enumparametrosistema_tipoFieldUpdateOperationsInput = {
    set?: $Enums.parametrosistema_tipo;
};
export type parametrosistemaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    codigo?: boolean;
    nombre?: boolean;
    tipo?: boolean;
    valor?: boolean;
    descripcion?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["parametrosistema"]>;
export type parametrosistemaSelectScalar = {
    id?: boolean;
    codigo?: boolean;
    nombre?: boolean;
    tipo?: boolean;
    valor?: boolean;
    descripcion?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type parametrosistemaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "codigo" | "nombre" | "tipo" | "valor" | "descripcion" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["parametrosistema"]>;
export type $parametrosistemaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "parametrosistema";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        codigo: string;
        nombre: string;
        tipo: $Enums.parametrosistema_tipo;
        valor: string;
        descripcion: string | null;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["parametrosistema"]>;
    composites: {};
};
export type parametrosistemaGetPayload<S extends boolean | null | undefined | parametrosistemaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$parametrosistemaPayload, S>;
export type parametrosistemaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<parametrosistemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ParametrosistemaCountAggregateInputType | true;
};
export interface parametrosistemaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['parametrosistema'];
        meta: {
            name: 'parametrosistema';
        };
    };
    /**
     * Find zero or one Parametrosistema that matches the filter.
     * @param {parametrosistemaFindUniqueArgs} args - Arguments to find a Parametrosistema
     * @example
     * // Get one Parametrosistema
     * const parametrosistema = await prisma.parametrosistema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends parametrosistemaFindUniqueArgs>(args: Prisma.SelectSubset<T, parametrosistemaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__parametrosistemaClient<runtime.Types.Result.GetResult<Prisma.$parametrosistemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Parametrosistema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {parametrosistemaFindUniqueOrThrowArgs} args - Arguments to find a Parametrosistema
     * @example
     * // Get one Parametrosistema
     * const parametrosistema = await prisma.parametrosistema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends parametrosistemaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, parametrosistemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__parametrosistemaClient<runtime.Types.Result.GetResult<Prisma.$parametrosistemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Parametrosistema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parametrosistemaFindFirstArgs} args - Arguments to find a Parametrosistema
     * @example
     * // Get one Parametrosistema
     * const parametrosistema = await prisma.parametrosistema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends parametrosistemaFindFirstArgs>(args?: Prisma.SelectSubset<T, parametrosistemaFindFirstArgs<ExtArgs>>): Prisma.Prisma__parametrosistemaClient<runtime.Types.Result.GetResult<Prisma.$parametrosistemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Parametrosistema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parametrosistemaFindFirstOrThrowArgs} args - Arguments to find a Parametrosistema
     * @example
     * // Get one Parametrosistema
     * const parametrosistema = await prisma.parametrosistema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends parametrosistemaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, parametrosistemaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__parametrosistemaClient<runtime.Types.Result.GetResult<Prisma.$parametrosistemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Parametrosistemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parametrosistemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parametrosistemas
     * const parametrosistemas = await prisma.parametrosistema.findMany()
     *
     * // Get first 10 Parametrosistemas
     * const parametrosistemas = await prisma.parametrosistema.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const parametrosistemaWithIdOnly = await prisma.parametrosistema.findMany({ select: { id: true } })
     *
     */
    findMany<T extends parametrosistemaFindManyArgs>(args?: Prisma.SelectSubset<T, parametrosistemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$parametrosistemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Parametrosistema.
     * @param {parametrosistemaCreateArgs} args - Arguments to create a Parametrosistema.
     * @example
     * // Create one Parametrosistema
     * const Parametrosistema = await prisma.parametrosistema.create({
     *   data: {
     *     // ... data to create a Parametrosistema
     *   }
     * })
     *
     */
    create<T extends parametrosistemaCreateArgs>(args: Prisma.SelectSubset<T, parametrosistemaCreateArgs<ExtArgs>>): Prisma.Prisma__parametrosistemaClient<runtime.Types.Result.GetResult<Prisma.$parametrosistemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Parametrosistemas.
     * @param {parametrosistemaCreateManyArgs} args - Arguments to create many Parametrosistemas.
     * @example
     * // Create many Parametrosistemas
     * const parametrosistema = await prisma.parametrosistema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends parametrosistemaCreateManyArgs>(args?: Prisma.SelectSubset<T, parametrosistemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Parametrosistema.
     * @param {parametrosistemaDeleteArgs} args - Arguments to delete one Parametrosistema.
     * @example
     * // Delete one Parametrosistema
     * const Parametrosistema = await prisma.parametrosistema.delete({
     *   where: {
     *     // ... filter to delete one Parametrosistema
     *   }
     * })
     *
     */
    delete<T extends parametrosistemaDeleteArgs>(args: Prisma.SelectSubset<T, parametrosistemaDeleteArgs<ExtArgs>>): Prisma.Prisma__parametrosistemaClient<runtime.Types.Result.GetResult<Prisma.$parametrosistemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Parametrosistema.
     * @param {parametrosistemaUpdateArgs} args - Arguments to update one Parametrosistema.
     * @example
     * // Update one Parametrosistema
     * const parametrosistema = await prisma.parametrosistema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends parametrosistemaUpdateArgs>(args: Prisma.SelectSubset<T, parametrosistemaUpdateArgs<ExtArgs>>): Prisma.Prisma__parametrosistemaClient<runtime.Types.Result.GetResult<Prisma.$parametrosistemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Parametrosistemas.
     * @param {parametrosistemaDeleteManyArgs} args - Arguments to filter Parametrosistemas to delete.
     * @example
     * // Delete a few Parametrosistemas
     * const { count } = await prisma.parametrosistema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends parametrosistemaDeleteManyArgs>(args?: Prisma.SelectSubset<T, parametrosistemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Parametrosistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parametrosistemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parametrosistemas
     * const parametrosistema = await prisma.parametrosistema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends parametrosistemaUpdateManyArgs>(args: Prisma.SelectSubset<T, parametrosistemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Parametrosistema.
     * @param {parametrosistemaUpsertArgs} args - Arguments to update or create a Parametrosistema.
     * @example
     * // Update or create a Parametrosistema
     * const parametrosistema = await prisma.parametrosistema.upsert({
     *   create: {
     *     // ... data to create a Parametrosistema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parametrosistema we want to update
     *   }
     * })
     */
    upsert<T extends parametrosistemaUpsertArgs>(args: Prisma.SelectSubset<T, parametrosistemaUpsertArgs<ExtArgs>>): Prisma.Prisma__parametrosistemaClient<runtime.Types.Result.GetResult<Prisma.$parametrosistemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Parametrosistemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parametrosistemaCountArgs} args - Arguments to filter Parametrosistemas to count.
     * @example
     * // Count the number of Parametrosistemas
     * const count = await prisma.parametrosistema.count({
     *   where: {
     *     // ... the filter for the Parametrosistemas we want to count
     *   }
     * })
    **/
    count<T extends parametrosistemaCountArgs>(args?: Prisma.Subset<T, parametrosistemaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ParametrosistemaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Parametrosistema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParametrosistemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParametrosistemaAggregateArgs>(args: Prisma.Subset<T, ParametrosistemaAggregateArgs>): Prisma.PrismaPromise<GetParametrosistemaAggregateType<T>>;
    /**
     * Group by Parametrosistema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parametrosistemaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends parametrosistemaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: parametrosistemaGroupByArgs['orderBy'];
    } : {
        orderBy?: parametrosistemaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, parametrosistemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParametrosistemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the parametrosistema model
     */
    readonly fields: parametrosistemaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for parametrosistema.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__parametrosistemaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the parametrosistema model
 */
export interface parametrosistemaFieldRefs {
    readonly id: Prisma.FieldRef<"parametrosistema", 'String'>;
    readonly codigo: Prisma.FieldRef<"parametrosistema", 'String'>;
    readonly nombre: Prisma.FieldRef<"parametrosistema", 'String'>;
    readonly tipo: Prisma.FieldRef<"parametrosistema", 'parametrosistema_tipo'>;
    readonly valor: Prisma.FieldRef<"parametrosistema", 'String'>;
    readonly descripcion: Prisma.FieldRef<"parametrosistema", 'String'>;
    readonly activo: Prisma.FieldRef<"parametrosistema", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"parametrosistema", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"parametrosistema", 'DateTime'>;
}
/**
 * parametrosistema findUnique
 */
export type parametrosistemaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parametrosistema
     */
    select?: Prisma.parametrosistemaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the parametrosistema
     */
    omit?: Prisma.parametrosistemaOmit<ExtArgs> | null;
    /**
     * Filter, which parametrosistema to fetch.
     */
    where: Prisma.parametrosistemaWhereUniqueInput;
};
/**
 * parametrosistema findUniqueOrThrow
 */
export type parametrosistemaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parametrosistema
     */
    select?: Prisma.parametrosistemaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the parametrosistema
     */
    omit?: Prisma.parametrosistemaOmit<ExtArgs> | null;
    /**
     * Filter, which parametrosistema to fetch.
     */
    where: Prisma.parametrosistemaWhereUniqueInput;
};
/**
 * parametrosistema findFirst
 */
export type parametrosistemaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parametrosistema
     */
    select?: Prisma.parametrosistemaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the parametrosistema
     */
    omit?: Prisma.parametrosistemaOmit<ExtArgs> | null;
    /**
     * Filter, which parametrosistema to fetch.
     */
    where?: Prisma.parametrosistemaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of parametrosistemas to fetch.
     */
    orderBy?: Prisma.parametrosistemaOrderByWithRelationInput | Prisma.parametrosistemaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for parametrosistemas.
     */
    cursor?: Prisma.parametrosistemaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` parametrosistemas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` parametrosistemas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of parametrosistemas.
     */
    distinct?: Prisma.ParametrosistemaScalarFieldEnum | Prisma.ParametrosistemaScalarFieldEnum[];
};
/**
 * parametrosistema findFirstOrThrow
 */
export type parametrosistemaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parametrosistema
     */
    select?: Prisma.parametrosistemaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the parametrosistema
     */
    omit?: Prisma.parametrosistemaOmit<ExtArgs> | null;
    /**
     * Filter, which parametrosistema to fetch.
     */
    where?: Prisma.parametrosistemaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of parametrosistemas to fetch.
     */
    orderBy?: Prisma.parametrosistemaOrderByWithRelationInput | Prisma.parametrosistemaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for parametrosistemas.
     */
    cursor?: Prisma.parametrosistemaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` parametrosistemas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` parametrosistemas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of parametrosistemas.
     */
    distinct?: Prisma.ParametrosistemaScalarFieldEnum | Prisma.ParametrosistemaScalarFieldEnum[];
};
/**
 * parametrosistema findMany
 */
export type parametrosistemaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parametrosistema
     */
    select?: Prisma.parametrosistemaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the parametrosistema
     */
    omit?: Prisma.parametrosistemaOmit<ExtArgs> | null;
    /**
     * Filter, which parametrosistemas to fetch.
     */
    where?: Prisma.parametrosistemaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of parametrosistemas to fetch.
     */
    orderBy?: Prisma.parametrosistemaOrderByWithRelationInput | Prisma.parametrosistemaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing parametrosistemas.
     */
    cursor?: Prisma.parametrosistemaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` parametrosistemas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` parametrosistemas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of parametrosistemas.
     */
    distinct?: Prisma.ParametrosistemaScalarFieldEnum | Prisma.ParametrosistemaScalarFieldEnum[];
};
/**
 * parametrosistema create
 */
export type parametrosistemaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parametrosistema
     */
    select?: Prisma.parametrosistemaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the parametrosistema
     */
    omit?: Prisma.parametrosistemaOmit<ExtArgs> | null;
    /**
     * The data needed to create a parametrosistema.
     */
    data: Prisma.XOR<Prisma.parametrosistemaCreateInput, Prisma.parametrosistemaUncheckedCreateInput>;
};
/**
 * parametrosistema createMany
 */
export type parametrosistemaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many parametrosistemas.
     */
    data: Prisma.parametrosistemaCreateManyInput | Prisma.parametrosistemaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * parametrosistema update
 */
export type parametrosistemaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parametrosistema
     */
    select?: Prisma.parametrosistemaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the parametrosistema
     */
    omit?: Prisma.parametrosistemaOmit<ExtArgs> | null;
    /**
     * The data needed to update a parametrosistema.
     */
    data: Prisma.XOR<Prisma.parametrosistemaUpdateInput, Prisma.parametrosistemaUncheckedUpdateInput>;
    /**
     * Choose, which parametrosistema to update.
     */
    where: Prisma.parametrosistemaWhereUniqueInput;
};
/**
 * parametrosistema updateMany
 */
export type parametrosistemaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update parametrosistemas.
     */
    data: Prisma.XOR<Prisma.parametrosistemaUpdateManyMutationInput, Prisma.parametrosistemaUncheckedUpdateManyInput>;
    /**
     * Filter which parametrosistemas to update
     */
    where?: Prisma.parametrosistemaWhereInput;
    /**
     * Limit how many parametrosistemas to update.
     */
    limit?: number;
};
/**
 * parametrosistema upsert
 */
export type parametrosistemaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parametrosistema
     */
    select?: Prisma.parametrosistemaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the parametrosistema
     */
    omit?: Prisma.parametrosistemaOmit<ExtArgs> | null;
    /**
     * The filter to search for the parametrosistema to update in case it exists.
     */
    where: Prisma.parametrosistemaWhereUniqueInput;
    /**
     * In case the parametrosistema found by the `where` argument doesn't exist, create a new parametrosistema with this data.
     */
    create: Prisma.XOR<Prisma.parametrosistemaCreateInput, Prisma.parametrosistemaUncheckedCreateInput>;
    /**
     * In case the parametrosistema was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.parametrosistemaUpdateInput, Prisma.parametrosistemaUncheckedUpdateInput>;
};
/**
 * parametrosistema delete
 */
export type parametrosistemaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parametrosistema
     */
    select?: Prisma.parametrosistemaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the parametrosistema
     */
    omit?: Prisma.parametrosistemaOmit<ExtArgs> | null;
    /**
     * Filter which parametrosistema to delete.
     */
    where: Prisma.parametrosistemaWhereUniqueInput;
};
/**
 * parametrosistema deleteMany
 */
export type parametrosistemaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which parametrosistemas to delete
     */
    where?: Prisma.parametrosistemaWhereInput;
    /**
     * Limit how many parametrosistemas to delete.
     */
    limit?: number;
};
/**
 * parametrosistema without action
 */
export type parametrosistemaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parametrosistema
     */
    select?: Prisma.parametrosistemaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the parametrosistema
     */
    omit?: Prisma.parametrosistemaOmit<ExtArgs> | null;
};
//# sourceMappingURL=parametrosistema.d.ts.map