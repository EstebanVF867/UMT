import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model remesa
 *
 */
export type remesaModel = runtime.Types.Result.DefaultSelection<Prisma.$remesaPayload>;
export type AggregateRemesa = {
    _count: RemesaCountAggregateOutputType | null;
    _min: RemesaMinAggregateOutputType | null;
    _max: RemesaMaxAggregateOutputType | null;
};
export type RemesaMinAggregateOutputType = {
    id: string | null;
    fecha: Date | null;
    estado: $Enums.remesa_estado | null;
    referencia: string | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RemesaMaxAggregateOutputType = {
    id: string | null;
    fecha: Date | null;
    estado: $Enums.remesa_estado | null;
    referencia: string | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RemesaCountAggregateOutputType = {
    id: number;
    fecha: number;
    estado: number;
    referencia: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RemesaMinAggregateInputType = {
    id?: true;
    fecha?: true;
    estado?: true;
    referencia?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RemesaMaxAggregateInputType = {
    id?: true;
    fecha?: true;
    estado?: true;
    referencia?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RemesaCountAggregateInputType = {
    id?: true;
    fecha?: true;
    estado?: true;
    referencia?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RemesaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which remesa to aggregate.
     */
    where?: Prisma.remesaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of remesas to fetch.
     */
    orderBy?: Prisma.remesaOrderByWithRelationInput | Prisma.remesaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.remesaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` remesas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` remesas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned remesas
    **/
    _count?: true | RemesaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RemesaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RemesaMaxAggregateInputType;
};
export type GetRemesaAggregateType<T extends RemesaAggregateArgs> = {
    [P in keyof T & keyof AggregateRemesa]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRemesa[P]> : Prisma.GetScalarType<T[P], AggregateRemesa[P]>;
};
export type remesaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.remesaWhereInput;
    orderBy?: Prisma.remesaOrderByWithAggregationInput | Prisma.remesaOrderByWithAggregationInput[];
    by: Prisma.RemesaScalarFieldEnum[] | Prisma.RemesaScalarFieldEnum;
    having?: Prisma.remesaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RemesaCountAggregateInputType | true;
    _min?: RemesaMinAggregateInputType;
    _max?: RemesaMaxAggregateInputType;
};
export type RemesaGroupByOutputType = {
    id: string;
    fecha: Date;
    estado: $Enums.remesa_estado;
    referencia: string | null;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: RemesaCountAggregateOutputType | null;
    _min: RemesaMinAggregateOutputType | null;
    _max: RemesaMaxAggregateOutputType | null;
};
export type GetRemesaGroupByPayload<T extends remesaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RemesaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RemesaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RemesaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RemesaGroupByOutputType[P]>;
}>>;
export type remesaWhereInput = {
    AND?: Prisma.remesaWhereInput | Prisma.remesaWhereInput[];
    OR?: Prisma.remesaWhereInput[];
    NOT?: Prisma.remesaWhereInput | Prisma.remesaWhereInput[];
    id?: Prisma.StringFilter<"remesa"> | string;
    fecha?: Prisma.DateTimeFilter<"remesa"> | Date | string;
    estado?: Prisma.Enumremesa_estadoFilter<"remesa"> | $Enums.remesa_estado;
    referencia?: Prisma.StringNullableFilter<"remesa"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"remesa"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"remesa"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"remesa"> | Date | string;
    remesacuota?: Prisma.RemesacuotaListRelationFilter;
};
export type remesaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    referencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    remesacuota?: Prisma.remesacuotaOrderByRelationAggregateInput;
    _relevance?: Prisma.remesaOrderByRelevanceInput;
};
export type remesaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.remesaWhereInput | Prisma.remesaWhereInput[];
    OR?: Prisma.remesaWhereInput[];
    NOT?: Prisma.remesaWhereInput | Prisma.remesaWhereInput[];
    fecha?: Prisma.DateTimeFilter<"remesa"> | Date | string;
    estado?: Prisma.Enumremesa_estadoFilter<"remesa"> | $Enums.remesa_estado;
    referencia?: Prisma.StringNullableFilter<"remesa"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"remesa"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"remesa"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"remesa"> | Date | string;
    remesacuota?: Prisma.RemesacuotaListRelationFilter;
}, "id">;
export type remesaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    referencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.remesaCountOrderByAggregateInput;
    _max?: Prisma.remesaMaxOrderByAggregateInput;
    _min?: Prisma.remesaMinOrderByAggregateInput;
};
export type remesaScalarWhereWithAggregatesInput = {
    AND?: Prisma.remesaScalarWhereWithAggregatesInput | Prisma.remesaScalarWhereWithAggregatesInput[];
    OR?: Prisma.remesaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.remesaScalarWhereWithAggregatesInput | Prisma.remesaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"remesa"> | string;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"remesa"> | Date | string;
    estado?: Prisma.Enumremesa_estadoWithAggregatesFilter<"remesa"> | $Enums.remesa_estado;
    referencia?: Prisma.StringNullableWithAggregatesFilter<"remesa"> | string | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"remesa"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"remesa"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"remesa"> | Date | string;
};
export type remesaCreateInput = {
    id: string;
    fecha: Date | string;
    estado?: $Enums.remesa_estado;
    referencia?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    remesacuota?: Prisma.remesacuotaCreateNestedManyWithoutRemesaInput;
};
export type remesaUncheckedCreateInput = {
    id: string;
    fecha: Date | string;
    estado?: $Enums.remesa_estado;
    referencia?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    remesacuota?: Prisma.remesacuotaUncheckedCreateNestedManyWithoutRemesaInput;
};
export type remesaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumremesa_estadoFieldUpdateOperationsInput | $Enums.remesa_estado;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    remesacuota?: Prisma.remesacuotaUpdateManyWithoutRemesaNestedInput;
};
export type remesaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumremesa_estadoFieldUpdateOperationsInput | $Enums.remesa_estado;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    remesacuota?: Prisma.remesacuotaUncheckedUpdateManyWithoutRemesaNestedInput;
};
export type remesaCreateManyInput = {
    id: string;
    fecha: Date | string;
    estado?: $Enums.remesa_estado;
    referencia?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type remesaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumremesa_estadoFieldUpdateOperationsInput | $Enums.remesa_estado;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type remesaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumremesa_estadoFieldUpdateOperationsInput | $Enums.remesa_estado;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type remesaOrderByRelevanceInput = {
    fields: Prisma.remesaOrderByRelevanceFieldEnum | Prisma.remesaOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type remesaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    referencia?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type remesaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    referencia?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type remesaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    referencia?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RemesaScalarRelationFilter = {
    is?: Prisma.remesaWhereInput;
    isNot?: Prisma.remesaWhereInput;
};
export type Enumremesa_estadoFieldUpdateOperationsInput = {
    set?: $Enums.remesa_estado;
};
export type remesaCreateNestedOneWithoutRemesacuotaInput = {
    create?: Prisma.XOR<Prisma.remesaCreateWithoutRemesacuotaInput, Prisma.remesaUncheckedCreateWithoutRemesacuotaInput>;
    connectOrCreate?: Prisma.remesaCreateOrConnectWithoutRemesacuotaInput;
    connect?: Prisma.remesaWhereUniqueInput;
};
export type remesaUpdateOneRequiredWithoutRemesacuotaNestedInput = {
    create?: Prisma.XOR<Prisma.remesaCreateWithoutRemesacuotaInput, Prisma.remesaUncheckedCreateWithoutRemesacuotaInput>;
    connectOrCreate?: Prisma.remesaCreateOrConnectWithoutRemesacuotaInput;
    upsert?: Prisma.remesaUpsertWithoutRemesacuotaInput;
    connect?: Prisma.remesaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.remesaUpdateToOneWithWhereWithoutRemesacuotaInput, Prisma.remesaUpdateWithoutRemesacuotaInput>, Prisma.remesaUncheckedUpdateWithoutRemesacuotaInput>;
};
export type remesaCreateWithoutRemesacuotaInput = {
    id: string;
    fecha: Date | string;
    estado?: $Enums.remesa_estado;
    referencia?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type remesaUncheckedCreateWithoutRemesacuotaInput = {
    id: string;
    fecha: Date | string;
    estado?: $Enums.remesa_estado;
    referencia?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type remesaCreateOrConnectWithoutRemesacuotaInput = {
    where: Prisma.remesaWhereUniqueInput;
    create: Prisma.XOR<Prisma.remesaCreateWithoutRemesacuotaInput, Prisma.remesaUncheckedCreateWithoutRemesacuotaInput>;
};
export type remesaUpsertWithoutRemesacuotaInput = {
    update: Prisma.XOR<Prisma.remesaUpdateWithoutRemesacuotaInput, Prisma.remesaUncheckedUpdateWithoutRemesacuotaInput>;
    create: Prisma.XOR<Prisma.remesaCreateWithoutRemesacuotaInput, Prisma.remesaUncheckedCreateWithoutRemesacuotaInput>;
    where?: Prisma.remesaWhereInput;
};
export type remesaUpdateToOneWithWhereWithoutRemesacuotaInput = {
    where?: Prisma.remesaWhereInput;
    data: Prisma.XOR<Prisma.remesaUpdateWithoutRemesacuotaInput, Prisma.remesaUncheckedUpdateWithoutRemesacuotaInput>;
};
export type remesaUpdateWithoutRemesacuotaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumremesa_estadoFieldUpdateOperationsInput | $Enums.remesa_estado;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type remesaUncheckedUpdateWithoutRemesacuotaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.Enumremesa_estadoFieldUpdateOperationsInput | $Enums.remesa_estado;
    referencia?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type RemesaCountOutputType
 */
export type RemesaCountOutputType = {
    remesacuota: number;
};
export type RemesaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    remesacuota?: boolean | RemesaCountOutputTypeCountRemesacuotaArgs;
};
/**
 * RemesaCountOutputType without action
 */
export type RemesaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RemesaCountOutputType
     */
    select?: Prisma.RemesaCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * RemesaCountOutputType without action
 */
export type RemesaCountOutputTypeCountRemesacuotaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.remesacuotaWhereInput;
};
export type remesaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fecha?: boolean;
    estado?: boolean;
    referencia?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    remesacuota?: boolean | Prisma.remesa$remesacuotaArgs<ExtArgs>;
    _count?: boolean | Prisma.RemesaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["remesa"]>;
export type remesaSelectScalar = {
    id?: boolean;
    fecha?: boolean;
    estado?: boolean;
    referencia?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type remesaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fecha" | "estado" | "referencia" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["remesa"]>;
export type remesaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    remesacuota?: boolean | Prisma.remesa$remesacuotaArgs<ExtArgs>;
    _count?: boolean | Prisma.RemesaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $remesaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "remesa";
    objects: {
        remesacuota: Prisma.$remesacuotaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        fecha: Date;
        estado: $Enums.remesa_estado;
        referencia: string | null;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["remesa"]>;
    composites: {};
};
export type remesaGetPayload<S extends boolean | null | undefined | remesaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$remesaPayload, S>;
export type remesaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<remesaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RemesaCountAggregateInputType | true;
};
export interface remesaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['remesa'];
        meta: {
            name: 'remesa';
        };
    };
    /**
     * Find zero or one Remesa that matches the filter.
     * @param {remesaFindUniqueArgs} args - Arguments to find a Remesa
     * @example
     * // Get one Remesa
     * const remesa = await prisma.remesa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends remesaFindUniqueArgs>(args: Prisma.SelectSubset<T, remesaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__remesaClient<runtime.Types.Result.GetResult<Prisma.$remesaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Remesa that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {remesaFindUniqueOrThrowArgs} args - Arguments to find a Remesa
     * @example
     * // Get one Remesa
     * const remesa = await prisma.remesa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends remesaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, remesaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__remesaClient<runtime.Types.Result.GetResult<Prisma.$remesaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Remesa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remesaFindFirstArgs} args - Arguments to find a Remesa
     * @example
     * // Get one Remesa
     * const remesa = await prisma.remesa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends remesaFindFirstArgs>(args?: Prisma.SelectSubset<T, remesaFindFirstArgs<ExtArgs>>): Prisma.Prisma__remesaClient<runtime.Types.Result.GetResult<Prisma.$remesaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Remesa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remesaFindFirstOrThrowArgs} args - Arguments to find a Remesa
     * @example
     * // Get one Remesa
     * const remesa = await prisma.remesa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends remesaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, remesaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__remesaClient<runtime.Types.Result.GetResult<Prisma.$remesaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Remesas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remesaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Remesas
     * const remesas = await prisma.remesa.findMany()
     *
     * // Get first 10 Remesas
     * const remesas = await prisma.remesa.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const remesaWithIdOnly = await prisma.remesa.findMany({ select: { id: true } })
     *
     */
    findMany<T extends remesaFindManyArgs>(args?: Prisma.SelectSubset<T, remesaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$remesaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Remesa.
     * @param {remesaCreateArgs} args - Arguments to create a Remesa.
     * @example
     * // Create one Remesa
     * const Remesa = await prisma.remesa.create({
     *   data: {
     *     // ... data to create a Remesa
     *   }
     * })
     *
     */
    create<T extends remesaCreateArgs>(args: Prisma.SelectSubset<T, remesaCreateArgs<ExtArgs>>): Prisma.Prisma__remesaClient<runtime.Types.Result.GetResult<Prisma.$remesaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Remesas.
     * @param {remesaCreateManyArgs} args - Arguments to create many Remesas.
     * @example
     * // Create many Remesas
     * const remesa = await prisma.remesa.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends remesaCreateManyArgs>(args?: Prisma.SelectSubset<T, remesaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Remesa.
     * @param {remesaDeleteArgs} args - Arguments to delete one Remesa.
     * @example
     * // Delete one Remesa
     * const Remesa = await prisma.remesa.delete({
     *   where: {
     *     // ... filter to delete one Remesa
     *   }
     * })
     *
     */
    delete<T extends remesaDeleteArgs>(args: Prisma.SelectSubset<T, remesaDeleteArgs<ExtArgs>>): Prisma.Prisma__remesaClient<runtime.Types.Result.GetResult<Prisma.$remesaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Remesa.
     * @param {remesaUpdateArgs} args - Arguments to update one Remesa.
     * @example
     * // Update one Remesa
     * const remesa = await prisma.remesa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends remesaUpdateArgs>(args: Prisma.SelectSubset<T, remesaUpdateArgs<ExtArgs>>): Prisma.Prisma__remesaClient<runtime.Types.Result.GetResult<Prisma.$remesaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Remesas.
     * @param {remesaDeleteManyArgs} args - Arguments to filter Remesas to delete.
     * @example
     * // Delete a few Remesas
     * const { count } = await prisma.remesa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends remesaDeleteManyArgs>(args?: Prisma.SelectSubset<T, remesaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Remesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remesaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Remesas
     * const remesa = await prisma.remesa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends remesaUpdateManyArgs>(args: Prisma.SelectSubset<T, remesaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Remesa.
     * @param {remesaUpsertArgs} args - Arguments to update or create a Remesa.
     * @example
     * // Update or create a Remesa
     * const remesa = await prisma.remesa.upsert({
     *   create: {
     *     // ... data to create a Remesa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Remesa we want to update
     *   }
     * })
     */
    upsert<T extends remesaUpsertArgs>(args: Prisma.SelectSubset<T, remesaUpsertArgs<ExtArgs>>): Prisma.Prisma__remesaClient<runtime.Types.Result.GetResult<Prisma.$remesaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Remesas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remesaCountArgs} args - Arguments to filter Remesas to count.
     * @example
     * // Count the number of Remesas
     * const count = await prisma.remesa.count({
     *   where: {
     *     // ... the filter for the Remesas we want to count
     *   }
     * })
    **/
    count<T extends remesaCountArgs>(args?: Prisma.Subset<T, remesaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RemesaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Remesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemesaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RemesaAggregateArgs>(args: Prisma.Subset<T, RemesaAggregateArgs>): Prisma.PrismaPromise<GetRemesaAggregateType<T>>;
    /**
     * Group by Remesa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {remesaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends remesaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: remesaGroupByArgs['orderBy'];
    } : {
        orderBy?: remesaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, remesaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRemesaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the remesa model
     */
    readonly fields: remesaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for remesa.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__remesaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    remesacuota<T extends Prisma.remesa$remesacuotaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.remesa$remesacuotaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$remesacuotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the remesa model
 */
export interface remesaFieldRefs {
    readonly id: Prisma.FieldRef<"remesa", 'String'>;
    readonly fecha: Prisma.FieldRef<"remesa", 'DateTime'>;
    readonly estado: Prisma.FieldRef<"remesa", 'remesa_estado'>;
    readonly referencia: Prisma.FieldRef<"remesa", 'String'>;
    readonly observaciones: Prisma.FieldRef<"remesa", 'String'>;
    readonly createdAt: Prisma.FieldRef<"remesa", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"remesa", 'DateTime'>;
}
/**
 * remesa findUnique
 */
export type remesaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the remesa
     */
    select?: Prisma.remesaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the remesa
     */
    omit?: Prisma.remesaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.remesaInclude<ExtArgs> | null;
    /**
     * Filter, which remesa to fetch.
     */
    where: Prisma.remesaWhereUniqueInput;
};
/**
 * remesa findUniqueOrThrow
 */
export type remesaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the remesa
     */
    select?: Prisma.remesaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the remesa
     */
    omit?: Prisma.remesaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.remesaInclude<ExtArgs> | null;
    /**
     * Filter, which remesa to fetch.
     */
    where: Prisma.remesaWhereUniqueInput;
};
/**
 * remesa findFirst
 */
export type remesaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the remesa
     */
    select?: Prisma.remesaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the remesa
     */
    omit?: Prisma.remesaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.remesaInclude<ExtArgs> | null;
    /**
     * Filter, which remesa to fetch.
     */
    where?: Prisma.remesaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of remesas to fetch.
     */
    orderBy?: Prisma.remesaOrderByWithRelationInput | Prisma.remesaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for remesas.
     */
    cursor?: Prisma.remesaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` remesas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` remesas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of remesas.
     */
    distinct?: Prisma.RemesaScalarFieldEnum | Prisma.RemesaScalarFieldEnum[];
};
/**
 * remesa findFirstOrThrow
 */
export type remesaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the remesa
     */
    select?: Prisma.remesaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the remesa
     */
    omit?: Prisma.remesaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.remesaInclude<ExtArgs> | null;
    /**
     * Filter, which remesa to fetch.
     */
    where?: Prisma.remesaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of remesas to fetch.
     */
    orderBy?: Prisma.remesaOrderByWithRelationInput | Prisma.remesaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for remesas.
     */
    cursor?: Prisma.remesaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` remesas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` remesas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of remesas.
     */
    distinct?: Prisma.RemesaScalarFieldEnum | Prisma.RemesaScalarFieldEnum[];
};
/**
 * remesa findMany
 */
export type remesaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the remesa
     */
    select?: Prisma.remesaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the remesa
     */
    omit?: Prisma.remesaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.remesaInclude<ExtArgs> | null;
    /**
     * Filter, which remesas to fetch.
     */
    where?: Prisma.remesaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of remesas to fetch.
     */
    orderBy?: Prisma.remesaOrderByWithRelationInput | Prisma.remesaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing remesas.
     */
    cursor?: Prisma.remesaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` remesas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` remesas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of remesas.
     */
    distinct?: Prisma.RemesaScalarFieldEnum | Prisma.RemesaScalarFieldEnum[];
};
/**
 * remesa create
 */
export type remesaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the remesa
     */
    select?: Prisma.remesaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the remesa
     */
    omit?: Prisma.remesaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.remesaInclude<ExtArgs> | null;
    /**
     * The data needed to create a remesa.
     */
    data: Prisma.XOR<Prisma.remesaCreateInput, Prisma.remesaUncheckedCreateInput>;
};
/**
 * remesa createMany
 */
export type remesaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many remesas.
     */
    data: Prisma.remesaCreateManyInput | Prisma.remesaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * remesa update
 */
export type remesaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the remesa
     */
    select?: Prisma.remesaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the remesa
     */
    omit?: Prisma.remesaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.remesaInclude<ExtArgs> | null;
    /**
     * The data needed to update a remesa.
     */
    data: Prisma.XOR<Prisma.remesaUpdateInput, Prisma.remesaUncheckedUpdateInput>;
    /**
     * Choose, which remesa to update.
     */
    where: Prisma.remesaWhereUniqueInput;
};
/**
 * remesa updateMany
 */
export type remesaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update remesas.
     */
    data: Prisma.XOR<Prisma.remesaUpdateManyMutationInput, Prisma.remesaUncheckedUpdateManyInput>;
    /**
     * Filter which remesas to update
     */
    where?: Prisma.remesaWhereInput;
    /**
     * Limit how many remesas to update.
     */
    limit?: number;
};
/**
 * remesa upsert
 */
export type remesaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the remesa
     */
    select?: Prisma.remesaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the remesa
     */
    omit?: Prisma.remesaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.remesaInclude<ExtArgs> | null;
    /**
     * The filter to search for the remesa to update in case it exists.
     */
    where: Prisma.remesaWhereUniqueInput;
    /**
     * In case the remesa found by the `where` argument doesn't exist, create a new remesa with this data.
     */
    create: Prisma.XOR<Prisma.remesaCreateInput, Prisma.remesaUncheckedCreateInput>;
    /**
     * In case the remesa was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.remesaUpdateInput, Prisma.remesaUncheckedUpdateInput>;
};
/**
 * remesa delete
 */
export type remesaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the remesa
     */
    select?: Prisma.remesaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the remesa
     */
    omit?: Prisma.remesaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.remesaInclude<ExtArgs> | null;
    /**
     * Filter which remesa to delete.
     */
    where: Prisma.remesaWhereUniqueInput;
};
/**
 * remesa deleteMany
 */
export type remesaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which remesas to delete
     */
    where?: Prisma.remesaWhereInput;
    /**
     * Limit how many remesas to delete.
     */
    limit?: number;
};
/**
 * remesa.remesacuota
 */
export type remesa$remesacuotaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the remesacuota
     */
    select?: Prisma.remesacuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the remesacuota
     */
    omit?: Prisma.remesacuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.remesacuotaInclude<ExtArgs> | null;
    where?: Prisma.remesacuotaWhereInput;
    orderBy?: Prisma.remesacuotaOrderByWithRelationInput | Prisma.remesacuotaOrderByWithRelationInput[];
    cursor?: Prisma.remesacuotaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RemesacuotaScalarFieldEnum | Prisma.RemesacuotaScalarFieldEnum[];
};
/**
 * remesa without action
 */
export type remesaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the remesa
     */
    select?: Prisma.remesaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the remesa
     */
    omit?: Prisma.remesaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.remesaInclude<ExtArgs> | null;
};
//# sourceMappingURL=remesa.d.ts.map