import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model integracionnextcloud
 *
 */
export type integracionnextcloudModel = runtime.Types.Result.DefaultSelection<Prisma.$integracionnextcloudPayload>;
export type AggregateIntegracionnextcloud = {
    _count: IntegracionnextcloudCountAggregateOutputType | null;
    _min: IntegracionnextcloudMinAggregateOutputType | null;
    _max: IntegracionnextcloudMaxAggregateOutputType | null;
};
export type IntegracionnextcloudMinAggregateOutputType = {
    id: string | null;
    serverUrl: string | null;
    estado: $Enums.integracionnextcloud_estado | null;
    mensajeEstado: string | null;
    ultimaComprobacionAt: Date | null;
    activa: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type IntegracionnextcloudMaxAggregateOutputType = {
    id: string | null;
    serverUrl: string | null;
    estado: $Enums.integracionnextcloud_estado | null;
    mensajeEstado: string | null;
    ultimaComprobacionAt: Date | null;
    activa: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type IntegracionnextcloudCountAggregateOutputType = {
    id: number;
    serverUrl: number;
    estado: number;
    mensajeEstado: number;
    ultimaComprobacionAt: number;
    activa: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type IntegracionnextcloudMinAggregateInputType = {
    id?: true;
    serverUrl?: true;
    estado?: true;
    mensajeEstado?: true;
    ultimaComprobacionAt?: true;
    activa?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type IntegracionnextcloudMaxAggregateInputType = {
    id?: true;
    serverUrl?: true;
    estado?: true;
    mensajeEstado?: true;
    ultimaComprobacionAt?: true;
    activa?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type IntegracionnextcloudCountAggregateInputType = {
    id?: true;
    serverUrl?: true;
    estado?: true;
    mensajeEstado?: true;
    ultimaComprobacionAt?: true;
    activa?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type IntegracionnextcloudAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which integracionnextcloud to aggregate.
     */
    where?: Prisma.integracionnextcloudWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of integracionnextclouds to fetch.
     */
    orderBy?: Prisma.integracionnextcloudOrderByWithRelationInput | Prisma.integracionnextcloudOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.integracionnextcloudWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` integracionnextclouds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` integracionnextclouds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned integracionnextclouds
    **/
    _count?: true | IntegracionnextcloudCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: IntegracionnextcloudMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: IntegracionnextcloudMaxAggregateInputType;
};
export type GetIntegracionnextcloudAggregateType<T extends IntegracionnextcloudAggregateArgs> = {
    [P in keyof T & keyof AggregateIntegracionnextcloud]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIntegracionnextcloud[P]> : Prisma.GetScalarType<T[P], AggregateIntegracionnextcloud[P]>;
};
export type integracionnextcloudGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.integracionnextcloudWhereInput;
    orderBy?: Prisma.integracionnextcloudOrderByWithAggregationInput | Prisma.integracionnextcloudOrderByWithAggregationInput[];
    by: Prisma.IntegracionnextcloudScalarFieldEnum[] | Prisma.IntegracionnextcloudScalarFieldEnum;
    having?: Prisma.integracionnextcloudScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IntegracionnextcloudCountAggregateInputType | true;
    _min?: IntegracionnextcloudMinAggregateInputType;
    _max?: IntegracionnextcloudMaxAggregateInputType;
};
export type IntegracionnextcloudGroupByOutputType = {
    id: string;
    serverUrl: string;
    estado: $Enums.integracionnextcloud_estado;
    mensajeEstado: string | null;
    ultimaComprobacionAt: Date | null;
    activa: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: IntegracionnextcloudCountAggregateOutputType | null;
    _min: IntegracionnextcloudMinAggregateOutputType | null;
    _max: IntegracionnextcloudMaxAggregateOutputType | null;
};
export type GetIntegracionnextcloudGroupByPayload<T extends integracionnextcloudGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<IntegracionnextcloudGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof IntegracionnextcloudGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], IntegracionnextcloudGroupByOutputType[P]> : Prisma.GetScalarType<T[P], IntegracionnextcloudGroupByOutputType[P]>;
}>>;
export type integracionnextcloudWhereInput = {
    AND?: Prisma.integracionnextcloudWhereInput | Prisma.integracionnextcloudWhereInput[];
    OR?: Prisma.integracionnextcloudWhereInput[];
    NOT?: Prisma.integracionnextcloudWhereInput | Prisma.integracionnextcloudWhereInput[];
    id?: Prisma.StringFilter<"integracionnextcloud"> | string;
    serverUrl?: Prisma.StringFilter<"integracionnextcloud"> | string;
    estado?: Prisma.Enumintegracionnextcloud_estadoFilter<"integracionnextcloud"> | $Enums.integracionnextcloud_estado;
    mensajeEstado?: Prisma.StringNullableFilter<"integracionnextcloud"> | string | null;
    ultimaComprobacionAt?: Prisma.DateTimeNullableFilter<"integracionnextcloud"> | Date | string | null;
    activa?: Prisma.BoolFilter<"integracionnextcloud"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"integracionnextcloud"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"integracionnextcloud"> | Date | string;
};
export type integracionnextcloudOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    serverUrl?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    mensajeEstado?: Prisma.SortOrderInput | Prisma.SortOrder;
    ultimaComprobacionAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _relevance?: Prisma.integracionnextcloudOrderByRelevanceInput;
};
export type integracionnextcloudWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.integracionnextcloudWhereInput | Prisma.integracionnextcloudWhereInput[];
    OR?: Prisma.integracionnextcloudWhereInput[];
    NOT?: Prisma.integracionnextcloudWhereInput | Prisma.integracionnextcloudWhereInput[];
    serverUrl?: Prisma.StringFilter<"integracionnextcloud"> | string;
    estado?: Prisma.Enumintegracionnextcloud_estadoFilter<"integracionnextcloud"> | $Enums.integracionnextcloud_estado;
    mensajeEstado?: Prisma.StringNullableFilter<"integracionnextcloud"> | string | null;
    ultimaComprobacionAt?: Prisma.DateTimeNullableFilter<"integracionnextcloud"> | Date | string | null;
    activa?: Prisma.BoolFilter<"integracionnextcloud"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"integracionnextcloud"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"integracionnextcloud"> | Date | string;
}, "id">;
export type integracionnextcloudOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    serverUrl?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    mensajeEstado?: Prisma.SortOrderInput | Prisma.SortOrder;
    ultimaComprobacionAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.integracionnextcloudCountOrderByAggregateInput;
    _max?: Prisma.integracionnextcloudMaxOrderByAggregateInput;
    _min?: Prisma.integracionnextcloudMinOrderByAggregateInput;
};
export type integracionnextcloudScalarWhereWithAggregatesInput = {
    AND?: Prisma.integracionnextcloudScalarWhereWithAggregatesInput | Prisma.integracionnextcloudScalarWhereWithAggregatesInput[];
    OR?: Prisma.integracionnextcloudScalarWhereWithAggregatesInput[];
    NOT?: Prisma.integracionnextcloudScalarWhereWithAggregatesInput | Prisma.integracionnextcloudScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"integracionnextcloud"> | string;
    serverUrl?: Prisma.StringWithAggregatesFilter<"integracionnextcloud"> | string;
    estado?: Prisma.Enumintegracionnextcloud_estadoWithAggregatesFilter<"integracionnextcloud"> | $Enums.integracionnextcloud_estado;
    mensajeEstado?: Prisma.StringNullableWithAggregatesFilter<"integracionnextcloud"> | string | null;
    ultimaComprobacionAt?: Prisma.DateTimeNullableWithAggregatesFilter<"integracionnextcloud"> | Date | string | null;
    activa?: Prisma.BoolWithAggregatesFilter<"integracionnextcloud"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"integracionnextcloud"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"integracionnextcloud"> | Date | string;
};
export type integracionnextcloudCreateInput = {
    id: string;
    serverUrl: string;
    estado?: $Enums.integracionnextcloud_estado;
    mensajeEstado?: string | null;
    ultimaComprobacionAt?: Date | string | null;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type integracionnextcloudUncheckedCreateInput = {
    id: string;
    serverUrl: string;
    estado?: $Enums.integracionnextcloud_estado;
    mensajeEstado?: string | null;
    ultimaComprobacionAt?: Date | string | null;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type integracionnextcloudUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serverUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.Enumintegracionnextcloud_estadoFieldUpdateOperationsInput | $Enums.integracionnextcloud_estado;
    mensajeEstado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ultimaComprobacionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type integracionnextcloudUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serverUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.Enumintegracionnextcloud_estadoFieldUpdateOperationsInput | $Enums.integracionnextcloud_estado;
    mensajeEstado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ultimaComprobacionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type integracionnextcloudCreateManyInput = {
    id: string;
    serverUrl: string;
    estado?: $Enums.integracionnextcloud_estado;
    mensajeEstado?: string | null;
    ultimaComprobacionAt?: Date | string | null;
    activa?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type integracionnextcloudUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serverUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.Enumintegracionnextcloud_estadoFieldUpdateOperationsInput | $Enums.integracionnextcloud_estado;
    mensajeEstado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ultimaComprobacionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type integracionnextcloudUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    serverUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.Enumintegracionnextcloud_estadoFieldUpdateOperationsInput | $Enums.integracionnextcloud_estado;
    mensajeEstado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ultimaComprobacionAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type integracionnextcloudOrderByRelevanceInput = {
    fields: Prisma.integracionnextcloudOrderByRelevanceFieldEnum | Prisma.integracionnextcloudOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type integracionnextcloudCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serverUrl?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    mensajeEstado?: Prisma.SortOrder;
    ultimaComprobacionAt?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type integracionnextcloudMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serverUrl?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    mensajeEstado?: Prisma.SortOrder;
    ultimaComprobacionAt?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type integracionnextcloudMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serverUrl?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    mensajeEstado?: Prisma.SortOrder;
    ultimaComprobacionAt?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type Enumintegracionnextcloud_estadoFieldUpdateOperationsInput = {
    set?: $Enums.integracionnextcloud_estado;
};
export type integracionnextcloudSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    serverUrl?: boolean;
    estado?: boolean;
    mensajeEstado?: boolean;
    ultimaComprobacionAt?: boolean;
    activa?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["integracionnextcloud"]>;
export type integracionnextcloudSelectScalar = {
    id?: boolean;
    serverUrl?: boolean;
    estado?: boolean;
    mensajeEstado?: boolean;
    ultimaComprobacionAt?: boolean;
    activa?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type integracionnextcloudOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "serverUrl" | "estado" | "mensajeEstado" | "ultimaComprobacionAt" | "activa" | "createdAt" | "updatedAt", ExtArgs["result"]["integracionnextcloud"]>;
export type $integracionnextcloudPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "integracionnextcloud";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        serverUrl: string;
        estado: $Enums.integracionnextcloud_estado;
        mensajeEstado: string | null;
        ultimaComprobacionAt: Date | null;
        activa: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["integracionnextcloud"]>;
    composites: {};
};
export type integracionnextcloudGetPayload<S extends boolean | null | undefined | integracionnextcloudDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$integracionnextcloudPayload, S>;
export type integracionnextcloudCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<integracionnextcloudFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: IntegracionnextcloudCountAggregateInputType | true;
};
export interface integracionnextcloudDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['integracionnextcloud'];
        meta: {
            name: 'integracionnextcloud';
        };
    };
    /**
     * Find zero or one Integracionnextcloud that matches the filter.
     * @param {integracionnextcloudFindUniqueArgs} args - Arguments to find a Integracionnextcloud
     * @example
     * // Get one Integracionnextcloud
     * const integracionnextcloud = await prisma.integracionnextcloud.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends integracionnextcloudFindUniqueArgs>(args: Prisma.SelectSubset<T, integracionnextcloudFindUniqueArgs<ExtArgs>>): Prisma.Prisma__integracionnextcloudClient<runtime.Types.Result.GetResult<Prisma.$integracionnextcloudPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Integracionnextcloud that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {integracionnextcloudFindUniqueOrThrowArgs} args - Arguments to find a Integracionnextcloud
     * @example
     * // Get one Integracionnextcloud
     * const integracionnextcloud = await prisma.integracionnextcloud.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends integracionnextcloudFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, integracionnextcloudFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__integracionnextcloudClient<runtime.Types.Result.GetResult<Prisma.$integracionnextcloudPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Integracionnextcloud that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {integracionnextcloudFindFirstArgs} args - Arguments to find a Integracionnextcloud
     * @example
     * // Get one Integracionnextcloud
     * const integracionnextcloud = await prisma.integracionnextcloud.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends integracionnextcloudFindFirstArgs>(args?: Prisma.SelectSubset<T, integracionnextcloudFindFirstArgs<ExtArgs>>): Prisma.Prisma__integracionnextcloudClient<runtime.Types.Result.GetResult<Prisma.$integracionnextcloudPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Integracionnextcloud that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {integracionnextcloudFindFirstOrThrowArgs} args - Arguments to find a Integracionnextcloud
     * @example
     * // Get one Integracionnextcloud
     * const integracionnextcloud = await prisma.integracionnextcloud.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends integracionnextcloudFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, integracionnextcloudFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__integracionnextcloudClient<runtime.Types.Result.GetResult<Prisma.$integracionnextcloudPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Integracionnextclouds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {integracionnextcloudFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Integracionnextclouds
     * const integracionnextclouds = await prisma.integracionnextcloud.findMany()
     *
     * // Get first 10 Integracionnextclouds
     * const integracionnextclouds = await prisma.integracionnextcloud.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const integracionnextcloudWithIdOnly = await prisma.integracionnextcloud.findMany({ select: { id: true } })
     *
     */
    findMany<T extends integracionnextcloudFindManyArgs>(args?: Prisma.SelectSubset<T, integracionnextcloudFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$integracionnextcloudPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Integracionnextcloud.
     * @param {integracionnextcloudCreateArgs} args - Arguments to create a Integracionnextcloud.
     * @example
     * // Create one Integracionnextcloud
     * const Integracionnextcloud = await prisma.integracionnextcloud.create({
     *   data: {
     *     // ... data to create a Integracionnextcloud
     *   }
     * })
     *
     */
    create<T extends integracionnextcloudCreateArgs>(args: Prisma.SelectSubset<T, integracionnextcloudCreateArgs<ExtArgs>>): Prisma.Prisma__integracionnextcloudClient<runtime.Types.Result.GetResult<Prisma.$integracionnextcloudPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Integracionnextclouds.
     * @param {integracionnextcloudCreateManyArgs} args - Arguments to create many Integracionnextclouds.
     * @example
     * // Create many Integracionnextclouds
     * const integracionnextcloud = await prisma.integracionnextcloud.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends integracionnextcloudCreateManyArgs>(args?: Prisma.SelectSubset<T, integracionnextcloudCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Integracionnextcloud.
     * @param {integracionnextcloudDeleteArgs} args - Arguments to delete one Integracionnextcloud.
     * @example
     * // Delete one Integracionnextcloud
     * const Integracionnextcloud = await prisma.integracionnextcloud.delete({
     *   where: {
     *     // ... filter to delete one Integracionnextcloud
     *   }
     * })
     *
     */
    delete<T extends integracionnextcloudDeleteArgs>(args: Prisma.SelectSubset<T, integracionnextcloudDeleteArgs<ExtArgs>>): Prisma.Prisma__integracionnextcloudClient<runtime.Types.Result.GetResult<Prisma.$integracionnextcloudPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Integracionnextcloud.
     * @param {integracionnextcloudUpdateArgs} args - Arguments to update one Integracionnextcloud.
     * @example
     * // Update one Integracionnextcloud
     * const integracionnextcloud = await prisma.integracionnextcloud.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends integracionnextcloudUpdateArgs>(args: Prisma.SelectSubset<T, integracionnextcloudUpdateArgs<ExtArgs>>): Prisma.Prisma__integracionnextcloudClient<runtime.Types.Result.GetResult<Prisma.$integracionnextcloudPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Integracionnextclouds.
     * @param {integracionnextcloudDeleteManyArgs} args - Arguments to filter Integracionnextclouds to delete.
     * @example
     * // Delete a few Integracionnextclouds
     * const { count } = await prisma.integracionnextcloud.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends integracionnextcloudDeleteManyArgs>(args?: Prisma.SelectSubset<T, integracionnextcloudDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Integracionnextclouds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {integracionnextcloudUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Integracionnextclouds
     * const integracionnextcloud = await prisma.integracionnextcloud.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends integracionnextcloudUpdateManyArgs>(args: Prisma.SelectSubset<T, integracionnextcloudUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Integracionnextcloud.
     * @param {integracionnextcloudUpsertArgs} args - Arguments to update or create a Integracionnextcloud.
     * @example
     * // Update or create a Integracionnextcloud
     * const integracionnextcloud = await prisma.integracionnextcloud.upsert({
     *   create: {
     *     // ... data to create a Integracionnextcloud
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Integracionnextcloud we want to update
     *   }
     * })
     */
    upsert<T extends integracionnextcloudUpsertArgs>(args: Prisma.SelectSubset<T, integracionnextcloudUpsertArgs<ExtArgs>>): Prisma.Prisma__integracionnextcloudClient<runtime.Types.Result.GetResult<Prisma.$integracionnextcloudPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Integracionnextclouds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {integracionnextcloudCountArgs} args - Arguments to filter Integracionnextclouds to count.
     * @example
     * // Count the number of Integracionnextclouds
     * const count = await prisma.integracionnextcloud.count({
     *   where: {
     *     // ... the filter for the Integracionnextclouds we want to count
     *   }
     * })
    **/
    count<T extends integracionnextcloudCountArgs>(args?: Prisma.Subset<T, integracionnextcloudCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], IntegracionnextcloudCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Integracionnextcloud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegracionnextcloudAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IntegracionnextcloudAggregateArgs>(args: Prisma.Subset<T, IntegracionnextcloudAggregateArgs>): Prisma.PrismaPromise<GetIntegracionnextcloudAggregateType<T>>;
    /**
     * Group by Integracionnextcloud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {integracionnextcloudGroupByArgs} args - Group by arguments.
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
    groupBy<T extends integracionnextcloudGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: integracionnextcloudGroupByArgs['orderBy'];
    } : {
        orderBy?: integracionnextcloudGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, integracionnextcloudGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegracionnextcloudGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the integracionnextcloud model
     */
    readonly fields: integracionnextcloudFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for integracionnextcloud.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__integracionnextcloudClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the integracionnextcloud model
 */
export interface integracionnextcloudFieldRefs {
    readonly id: Prisma.FieldRef<"integracionnextcloud", 'String'>;
    readonly serverUrl: Prisma.FieldRef<"integracionnextcloud", 'String'>;
    readonly estado: Prisma.FieldRef<"integracionnextcloud", 'integracionnextcloud_estado'>;
    readonly mensajeEstado: Prisma.FieldRef<"integracionnextcloud", 'String'>;
    readonly ultimaComprobacionAt: Prisma.FieldRef<"integracionnextcloud", 'DateTime'>;
    readonly activa: Prisma.FieldRef<"integracionnextcloud", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"integracionnextcloud", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"integracionnextcloud", 'DateTime'>;
}
/**
 * integracionnextcloud findUnique
 */
export type integracionnextcloudFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integracionnextcloud
     */
    select?: Prisma.integracionnextcloudSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the integracionnextcloud
     */
    omit?: Prisma.integracionnextcloudOmit<ExtArgs> | null;
    /**
     * Filter, which integracionnextcloud to fetch.
     */
    where: Prisma.integracionnextcloudWhereUniqueInput;
};
/**
 * integracionnextcloud findUniqueOrThrow
 */
export type integracionnextcloudFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integracionnextcloud
     */
    select?: Prisma.integracionnextcloudSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the integracionnextcloud
     */
    omit?: Prisma.integracionnextcloudOmit<ExtArgs> | null;
    /**
     * Filter, which integracionnextcloud to fetch.
     */
    where: Prisma.integracionnextcloudWhereUniqueInput;
};
/**
 * integracionnextcloud findFirst
 */
export type integracionnextcloudFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integracionnextcloud
     */
    select?: Prisma.integracionnextcloudSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the integracionnextcloud
     */
    omit?: Prisma.integracionnextcloudOmit<ExtArgs> | null;
    /**
     * Filter, which integracionnextcloud to fetch.
     */
    where?: Prisma.integracionnextcloudWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of integracionnextclouds to fetch.
     */
    orderBy?: Prisma.integracionnextcloudOrderByWithRelationInput | Prisma.integracionnextcloudOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for integracionnextclouds.
     */
    cursor?: Prisma.integracionnextcloudWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` integracionnextclouds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` integracionnextclouds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of integracionnextclouds.
     */
    distinct?: Prisma.IntegracionnextcloudScalarFieldEnum | Prisma.IntegracionnextcloudScalarFieldEnum[];
};
/**
 * integracionnextcloud findFirstOrThrow
 */
export type integracionnextcloudFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integracionnextcloud
     */
    select?: Prisma.integracionnextcloudSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the integracionnextcloud
     */
    omit?: Prisma.integracionnextcloudOmit<ExtArgs> | null;
    /**
     * Filter, which integracionnextcloud to fetch.
     */
    where?: Prisma.integracionnextcloudWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of integracionnextclouds to fetch.
     */
    orderBy?: Prisma.integracionnextcloudOrderByWithRelationInput | Prisma.integracionnextcloudOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for integracionnextclouds.
     */
    cursor?: Prisma.integracionnextcloudWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` integracionnextclouds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` integracionnextclouds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of integracionnextclouds.
     */
    distinct?: Prisma.IntegracionnextcloudScalarFieldEnum | Prisma.IntegracionnextcloudScalarFieldEnum[];
};
/**
 * integracionnextcloud findMany
 */
export type integracionnextcloudFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integracionnextcloud
     */
    select?: Prisma.integracionnextcloudSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the integracionnextcloud
     */
    omit?: Prisma.integracionnextcloudOmit<ExtArgs> | null;
    /**
     * Filter, which integracionnextclouds to fetch.
     */
    where?: Prisma.integracionnextcloudWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of integracionnextclouds to fetch.
     */
    orderBy?: Prisma.integracionnextcloudOrderByWithRelationInput | Prisma.integracionnextcloudOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing integracionnextclouds.
     */
    cursor?: Prisma.integracionnextcloudWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` integracionnextclouds from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` integracionnextclouds.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of integracionnextclouds.
     */
    distinct?: Prisma.IntegracionnextcloudScalarFieldEnum | Prisma.IntegracionnextcloudScalarFieldEnum[];
};
/**
 * integracionnextcloud create
 */
export type integracionnextcloudCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integracionnextcloud
     */
    select?: Prisma.integracionnextcloudSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the integracionnextcloud
     */
    omit?: Prisma.integracionnextcloudOmit<ExtArgs> | null;
    /**
     * The data needed to create a integracionnextcloud.
     */
    data: Prisma.XOR<Prisma.integracionnextcloudCreateInput, Prisma.integracionnextcloudUncheckedCreateInput>;
};
/**
 * integracionnextcloud createMany
 */
export type integracionnextcloudCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many integracionnextclouds.
     */
    data: Prisma.integracionnextcloudCreateManyInput | Prisma.integracionnextcloudCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * integracionnextcloud update
 */
export type integracionnextcloudUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integracionnextcloud
     */
    select?: Prisma.integracionnextcloudSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the integracionnextcloud
     */
    omit?: Prisma.integracionnextcloudOmit<ExtArgs> | null;
    /**
     * The data needed to update a integracionnextcloud.
     */
    data: Prisma.XOR<Prisma.integracionnextcloudUpdateInput, Prisma.integracionnextcloudUncheckedUpdateInput>;
    /**
     * Choose, which integracionnextcloud to update.
     */
    where: Prisma.integracionnextcloudWhereUniqueInput;
};
/**
 * integracionnextcloud updateMany
 */
export type integracionnextcloudUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update integracionnextclouds.
     */
    data: Prisma.XOR<Prisma.integracionnextcloudUpdateManyMutationInput, Prisma.integracionnextcloudUncheckedUpdateManyInput>;
    /**
     * Filter which integracionnextclouds to update
     */
    where?: Prisma.integracionnextcloudWhereInput;
    /**
     * Limit how many integracionnextclouds to update.
     */
    limit?: number;
};
/**
 * integracionnextcloud upsert
 */
export type integracionnextcloudUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integracionnextcloud
     */
    select?: Prisma.integracionnextcloudSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the integracionnextcloud
     */
    omit?: Prisma.integracionnextcloudOmit<ExtArgs> | null;
    /**
     * The filter to search for the integracionnextcloud to update in case it exists.
     */
    where: Prisma.integracionnextcloudWhereUniqueInput;
    /**
     * In case the integracionnextcloud found by the `where` argument doesn't exist, create a new integracionnextcloud with this data.
     */
    create: Prisma.XOR<Prisma.integracionnextcloudCreateInput, Prisma.integracionnextcloudUncheckedCreateInput>;
    /**
     * In case the integracionnextcloud was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.integracionnextcloudUpdateInput, Prisma.integracionnextcloudUncheckedUpdateInput>;
};
/**
 * integracionnextcloud delete
 */
export type integracionnextcloudDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integracionnextcloud
     */
    select?: Prisma.integracionnextcloudSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the integracionnextcloud
     */
    omit?: Prisma.integracionnextcloudOmit<ExtArgs> | null;
    /**
     * Filter which integracionnextcloud to delete.
     */
    where: Prisma.integracionnextcloudWhereUniqueInput;
};
/**
 * integracionnextcloud deleteMany
 */
export type integracionnextcloudDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which integracionnextclouds to delete
     */
    where?: Prisma.integracionnextcloudWhereInput;
    /**
     * Limit how many integracionnextclouds to delete.
     */
    limit?: number;
};
/**
 * integracionnextcloud without action
 */
export type integracionnextcloudDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the integracionnextcloud
     */
    select?: Prisma.integracionnextcloudSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the integracionnextcloud
     */
    omit?: Prisma.integracionnextcloudOmit<ExtArgs> | null;
};
//# sourceMappingURL=integracionnextcloud.d.ts.map