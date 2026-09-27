import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model materia
 *
 */
export type materiaModel = runtime.Types.Result.DefaultSelection<Prisma.$materiaPayload>;
export type AggregateMateria = {
    _count: MateriaCountAggregateOutputType | null;
    _min: MateriaMinAggregateOutputType | null;
    _max: MateriaMaxAggregateOutputType | null;
};
export type MateriaMinAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    tipo: $Enums.materia_tipo | null;
    descripcion: string | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MateriaMaxAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    tipo: $Enums.materia_tipo | null;
    descripcion: string | null;
    activo: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MateriaCountAggregateOutputType = {
    id: number;
    nombre: number;
    tipo: number;
    descripcion: number;
    activo: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MateriaMinAggregateInputType = {
    id?: true;
    nombre?: true;
    tipo?: true;
    descripcion?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MateriaMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    tipo?: true;
    descripcion?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MateriaCountAggregateInputType = {
    id?: true;
    nombre?: true;
    tipo?: true;
    descripcion?: true;
    activo?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MateriaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which materia to aggregate.
     */
    where?: Prisma.materiaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of materias to fetch.
     */
    orderBy?: Prisma.materiaOrderByWithRelationInput | Prisma.materiaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.materiaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` materias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` materias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned materias
    **/
    _count?: true | MateriaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MateriaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MateriaMaxAggregateInputType;
};
export type GetMateriaAggregateType<T extends MateriaAggregateArgs> = {
    [P in keyof T & keyof AggregateMateria]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMateria[P]> : Prisma.GetScalarType<T[P], AggregateMateria[P]>;
};
export type materiaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.materiaWhereInput;
    orderBy?: Prisma.materiaOrderByWithAggregationInput | Prisma.materiaOrderByWithAggregationInput[];
    by: Prisma.MateriaScalarFieldEnum[] | Prisma.MateriaScalarFieldEnum;
    having?: Prisma.materiaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MateriaCountAggregateInputType | true;
    _min?: MateriaMinAggregateInputType;
    _max?: MateriaMaxAggregateInputType;
};
export type MateriaGroupByOutputType = {
    id: string;
    nombre: string;
    tipo: $Enums.materia_tipo;
    descripcion: string | null;
    activo: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: MateriaCountAggregateOutputType | null;
    _min: MateriaMinAggregateOutputType | null;
    _max: MateriaMaxAggregateOutputType | null;
};
export type GetMateriaGroupByPayload<T extends materiaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MateriaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MateriaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MateriaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MateriaGroupByOutputType[P]>;
}>>;
export type materiaWhereInput = {
    AND?: Prisma.materiaWhereInput | Prisma.materiaWhereInput[];
    OR?: Prisma.materiaWhereInput[];
    NOT?: Prisma.materiaWhereInput | Prisma.materiaWhereInput[];
    id?: Prisma.StringFilter<"materia"> | string;
    nombre?: Prisma.StringFilter<"materia"> | string;
    tipo?: Prisma.Enummateria_tipoFilter<"materia"> | $Enums.materia_tipo;
    descripcion?: Prisma.StringNullableFilter<"materia"> | string | null;
    activo?: Prisma.BoolFilter<"materia"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"materia"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"materia"> | Date | string;
    clase?: Prisma.ClaseListRelationFilter;
};
export type materiaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    clase?: Prisma.claseOrderByRelationAggregateInput;
    _relevance?: Prisma.materiaOrderByRelevanceInput;
};
export type materiaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.materiaWhereInput | Prisma.materiaWhereInput[];
    OR?: Prisma.materiaWhereInput[];
    NOT?: Prisma.materiaWhereInput | Prisma.materiaWhereInput[];
    nombre?: Prisma.StringFilter<"materia"> | string;
    tipo?: Prisma.Enummateria_tipoFilter<"materia"> | $Enums.materia_tipo;
    descripcion?: Prisma.StringNullableFilter<"materia"> | string | null;
    activo?: Prisma.BoolFilter<"materia"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"materia"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"materia"> | Date | string;
    clase?: Prisma.ClaseListRelationFilter;
}, "id">;
export type materiaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.materiaCountOrderByAggregateInput;
    _max?: Prisma.materiaMaxOrderByAggregateInput;
    _min?: Prisma.materiaMinOrderByAggregateInput;
};
export type materiaScalarWhereWithAggregatesInput = {
    AND?: Prisma.materiaScalarWhereWithAggregatesInput | Prisma.materiaScalarWhereWithAggregatesInput[];
    OR?: Prisma.materiaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.materiaScalarWhereWithAggregatesInput | Prisma.materiaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"materia"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"materia"> | string;
    tipo?: Prisma.Enummateria_tipoWithAggregatesFilter<"materia"> | $Enums.materia_tipo;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"materia"> | string | null;
    activo?: Prisma.BoolWithAggregatesFilter<"materia"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"materia"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"materia"> | Date | string;
};
export type materiaCreateInput = {
    id: string;
    nombre: string;
    tipo: $Enums.materia_tipo;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    clase?: Prisma.claseCreateNestedManyWithoutMateriaInput;
};
export type materiaUncheckedCreateInput = {
    id: string;
    nombre: string;
    tipo: $Enums.materia_tipo;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
    clase?: Prisma.claseUncheckedCreateNestedManyWithoutMateriaInput;
};
export type materiaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enummateria_tipoFieldUpdateOperationsInput | $Enums.materia_tipo;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clase?: Prisma.claseUpdateManyWithoutMateriaNestedInput;
};
export type materiaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enummateria_tipoFieldUpdateOperationsInput | $Enums.materia_tipo;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    clase?: Prisma.claseUncheckedUpdateManyWithoutMateriaNestedInput;
};
export type materiaCreateManyInput = {
    id: string;
    nombre: string;
    tipo: $Enums.materia_tipo;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type materiaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enummateria_tipoFieldUpdateOperationsInput | $Enums.materia_tipo;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type materiaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enummateria_tipoFieldUpdateOperationsInput | $Enums.materia_tipo;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MateriaScalarRelationFilter = {
    is?: Prisma.materiaWhereInput;
    isNot?: Prisma.materiaWhereInput;
};
export type materiaOrderByRelevanceInput = {
    fields: Prisma.materiaOrderByRelevanceFieldEnum | Prisma.materiaOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type materiaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type materiaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type materiaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type materiaCreateNestedOneWithoutClaseInput = {
    create?: Prisma.XOR<Prisma.materiaCreateWithoutClaseInput, Prisma.materiaUncheckedCreateWithoutClaseInput>;
    connectOrCreate?: Prisma.materiaCreateOrConnectWithoutClaseInput;
    connect?: Prisma.materiaWhereUniqueInput;
};
export type materiaUpdateOneRequiredWithoutClaseNestedInput = {
    create?: Prisma.XOR<Prisma.materiaCreateWithoutClaseInput, Prisma.materiaUncheckedCreateWithoutClaseInput>;
    connectOrCreate?: Prisma.materiaCreateOrConnectWithoutClaseInput;
    upsert?: Prisma.materiaUpsertWithoutClaseInput;
    connect?: Prisma.materiaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.materiaUpdateToOneWithWhereWithoutClaseInput, Prisma.materiaUpdateWithoutClaseInput>, Prisma.materiaUncheckedUpdateWithoutClaseInput>;
};
export type Enummateria_tipoFieldUpdateOperationsInput = {
    set?: $Enums.materia_tipo;
};
export type materiaCreateWithoutClaseInput = {
    id: string;
    nombre: string;
    tipo: $Enums.materia_tipo;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type materiaUncheckedCreateWithoutClaseInput = {
    id: string;
    nombre: string;
    tipo: $Enums.materia_tipo;
    descripcion?: string | null;
    activo?: boolean;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type materiaCreateOrConnectWithoutClaseInput = {
    where: Prisma.materiaWhereUniqueInput;
    create: Prisma.XOR<Prisma.materiaCreateWithoutClaseInput, Prisma.materiaUncheckedCreateWithoutClaseInput>;
};
export type materiaUpsertWithoutClaseInput = {
    update: Prisma.XOR<Prisma.materiaUpdateWithoutClaseInput, Prisma.materiaUncheckedUpdateWithoutClaseInput>;
    create: Prisma.XOR<Prisma.materiaCreateWithoutClaseInput, Prisma.materiaUncheckedCreateWithoutClaseInput>;
    where?: Prisma.materiaWhereInput;
};
export type materiaUpdateToOneWithWhereWithoutClaseInput = {
    where?: Prisma.materiaWhereInput;
    data: Prisma.XOR<Prisma.materiaUpdateWithoutClaseInput, Prisma.materiaUncheckedUpdateWithoutClaseInput>;
};
export type materiaUpdateWithoutClaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enummateria_tipoFieldUpdateOperationsInput | $Enums.materia_tipo;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type materiaUncheckedUpdateWithoutClaseInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enummateria_tipoFieldUpdateOperationsInput | $Enums.materia_tipo;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type MateriaCountOutputType
 */
export type MateriaCountOutputType = {
    clase: number;
};
export type MateriaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clase?: boolean | MateriaCountOutputTypeCountClaseArgs;
};
/**
 * MateriaCountOutputType without action
 */
export type MateriaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MateriaCountOutputType
     */
    select?: Prisma.MateriaCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MateriaCountOutputType without action
 */
export type MateriaCountOutputTypeCountClaseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.claseWhereInput;
};
export type materiaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    tipo?: boolean;
    descripcion?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    clase?: boolean | Prisma.materia$claseArgs<ExtArgs>;
    _count?: boolean | Prisma.MateriaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["materia"]>;
export type materiaSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    tipo?: boolean;
    descripcion?: boolean;
    activo?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type materiaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "tipo" | "descripcion" | "activo" | "createdAt" | "updatedAt", ExtArgs["result"]["materia"]>;
export type materiaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    clase?: boolean | Prisma.materia$claseArgs<ExtArgs>;
    _count?: boolean | Prisma.MateriaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $materiaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "materia";
    objects: {
        clase: Prisma.$clasePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nombre: string;
        tipo: $Enums.materia_tipo;
        descripcion: string | null;
        activo: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["materia"]>;
    composites: {};
};
export type materiaGetPayload<S extends boolean | null | undefined | materiaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$materiaPayload, S>;
export type materiaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<materiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MateriaCountAggregateInputType | true;
};
export interface materiaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['materia'];
        meta: {
            name: 'materia';
        };
    };
    /**
     * Find zero or one Materia that matches the filter.
     * @param {materiaFindUniqueArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends materiaFindUniqueArgs>(args: Prisma.SelectSubset<T, materiaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__materiaClient<runtime.Types.Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Materia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {materiaFindUniqueOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends materiaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, materiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__materiaClient<runtime.Types.Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Materia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materiaFindFirstArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends materiaFindFirstArgs>(args?: Prisma.SelectSubset<T, materiaFindFirstArgs<ExtArgs>>): Prisma.Prisma__materiaClient<runtime.Types.Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Materia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materiaFindFirstOrThrowArgs} args - Arguments to find a Materia
     * @example
     * // Get one Materia
     * const materia = await prisma.materia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends materiaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, materiaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__materiaClient<runtime.Types.Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Materias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materias
     * const materias = await prisma.materia.findMany()
     *
     * // Get first 10 Materias
     * const materias = await prisma.materia.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const materiaWithIdOnly = await prisma.materia.findMany({ select: { id: true } })
     *
     */
    findMany<T extends materiaFindManyArgs>(args?: Prisma.SelectSubset<T, materiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Materia.
     * @param {materiaCreateArgs} args - Arguments to create a Materia.
     * @example
     * // Create one Materia
     * const Materia = await prisma.materia.create({
     *   data: {
     *     // ... data to create a Materia
     *   }
     * })
     *
     */
    create<T extends materiaCreateArgs>(args: Prisma.SelectSubset<T, materiaCreateArgs<ExtArgs>>): Prisma.Prisma__materiaClient<runtime.Types.Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Materias.
     * @param {materiaCreateManyArgs} args - Arguments to create many Materias.
     * @example
     * // Create many Materias
     * const materia = await prisma.materia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends materiaCreateManyArgs>(args?: Prisma.SelectSubset<T, materiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Materia.
     * @param {materiaDeleteArgs} args - Arguments to delete one Materia.
     * @example
     * // Delete one Materia
     * const Materia = await prisma.materia.delete({
     *   where: {
     *     // ... filter to delete one Materia
     *   }
     * })
     *
     */
    delete<T extends materiaDeleteArgs>(args: Prisma.SelectSubset<T, materiaDeleteArgs<ExtArgs>>): Prisma.Prisma__materiaClient<runtime.Types.Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Materia.
     * @param {materiaUpdateArgs} args - Arguments to update one Materia.
     * @example
     * // Update one Materia
     * const materia = await prisma.materia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends materiaUpdateArgs>(args: Prisma.SelectSubset<T, materiaUpdateArgs<ExtArgs>>): Prisma.Prisma__materiaClient<runtime.Types.Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Materias.
     * @param {materiaDeleteManyArgs} args - Arguments to filter Materias to delete.
     * @example
     * // Delete a few Materias
     * const { count } = await prisma.materia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends materiaDeleteManyArgs>(args?: Prisma.SelectSubset<T, materiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materias
     * const materia = await prisma.materia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends materiaUpdateManyArgs>(args: Prisma.SelectSubset<T, materiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Materia.
     * @param {materiaUpsertArgs} args - Arguments to update or create a Materia.
     * @example
     * // Update or create a Materia
     * const materia = await prisma.materia.upsert({
     *   create: {
     *     // ... data to create a Materia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materia we want to update
     *   }
     * })
     */
    upsert<T extends materiaUpsertArgs>(args: Prisma.SelectSubset<T, materiaUpsertArgs<ExtArgs>>): Prisma.Prisma__materiaClient<runtime.Types.Result.GetResult<Prisma.$materiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Materias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materiaCountArgs} args - Arguments to filter Materias to count.
     * @example
     * // Count the number of Materias
     * const count = await prisma.materia.count({
     *   where: {
     *     // ... the filter for the Materias we want to count
     *   }
     * })
    **/
    count<T extends materiaCountArgs>(args?: Prisma.Subset<T, materiaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MateriaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MateriaAggregateArgs>(args: Prisma.Subset<T, MateriaAggregateArgs>): Prisma.PrismaPromise<GetMateriaAggregateType<T>>;
    /**
     * Group by Materia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {materiaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends materiaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: materiaGroupByArgs['orderBy'];
    } : {
        orderBy?: materiaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, materiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the materia model
     */
    readonly fields: materiaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for materia.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__materiaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    clase<T extends Prisma.materia$claseArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.materia$claseArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$clasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the materia model
 */
export interface materiaFieldRefs {
    readonly id: Prisma.FieldRef<"materia", 'String'>;
    readonly nombre: Prisma.FieldRef<"materia", 'String'>;
    readonly tipo: Prisma.FieldRef<"materia", 'materia_tipo'>;
    readonly descripcion: Prisma.FieldRef<"materia", 'String'>;
    readonly activo: Prisma.FieldRef<"materia", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"materia", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"materia", 'DateTime'>;
}
/**
 * materia findUnique
 */
export type materiaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: Prisma.materiaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the materia
     */
    omit?: Prisma.materiaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.materiaInclude<ExtArgs> | null;
    /**
     * Filter, which materia to fetch.
     */
    where: Prisma.materiaWhereUniqueInput;
};
/**
 * materia findUniqueOrThrow
 */
export type materiaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: Prisma.materiaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the materia
     */
    omit?: Prisma.materiaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.materiaInclude<ExtArgs> | null;
    /**
     * Filter, which materia to fetch.
     */
    where: Prisma.materiaWhereUniqueInput;
};
/**
 * materia findFirst
 */
export type materiaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: Prisma.materiaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the materia
     */
    omit?: Prisma.materiaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.materiaInclude<ExtArgs> | null;
    /**
     * Filter, which materia to fetch.
     */
    where?: Prisma.materiaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of materias to fetch.
     */
    orderBy?: Prisma.materiaOrderByWithRelationInput | Prisma.materiaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for materias.
     */
    cursor?: Prisma.materiaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` materias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` materias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of materias.
     */
    distinct?: Prisma.MateriaScalarFieldEnum | Prisma.MateriaScalarFieldEnum[];
};
/**
 * materia findFirstOrThrow
 */
export type materiaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: Prisma.materiaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the materia
     */
    omit?: Prisma.materiaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.materiaInclude<ExtArgs> | null;
    /**
     * Filter, which materia to fetch.
     */
    where?: Prisma.materiaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of materias to fetch.
     */
    orderBy?: Prisma.materiaOrderByWithRelationInput | Prisma.materiaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for materias.
     */
    cursor?: Prisma.materiaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` materias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` materias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of materias.
     */
    distinct?: Prisma.MateriaScalarFieldEnum | Prisma.MateriaScalarFieldEnum[];
};
/**
 * materia findMany
 */
export type materiaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: Prisma.materiaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the materia
     */
    omit?: Prisma.materiaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.materiaInclude<ExtArgs> | null;
    /**
     * Filter, which materias to fetch.
     */
    where?: Prisma.materiaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of materias to fetch.
     */
    orderBy?: Prisma.materiaOrderByWithRelationInput | Prisma.materiaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing materias.
     */
    cursor?: Prisma.materiaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` materias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` materias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of materias.
     */
    distinct?: Prisma.MateriaScalarFieldEnum | Prisma.MateriaScalarFieldEnum[];
};
/**
 * materia create
 */
export type materiaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: Prisma.materiaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the materia
     */
    omit?: Prisma.materiaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.materiaInclude<ExtArgs> | null;
    /**
     * The data needed to create a materia.
     */
    data: Prisma.XOR<Prisma.materiaCreateInput, Prisma.materiaUncheckedCreateInput>;
};
/**
 * materia createMany
 */
export type materiaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many materias.
     */
    data: Prisma.materiaCreateManyInput | Prisma.materiaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * materia update
 */
export type materiaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: Prisma.materiaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the materia
     */
    omit?: Prisma.materiaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.materiaInclude<ExtArgs> | null;
    /**
     * The data needed to update a materia.
     */
    data: Prisma.XOR<Prisma.materiaUpdateInput, Prisma.materiaUncheckedUpdateInput>;
    /**
     * Choose, which materia to update.
     */
    where: Prisma.materiaWhereUniqueInput;
};
/**
 * materia updateMany
 */
export type materiaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update materias.
     */
    data: Prisma.XOR<Prisma.materiaUpdateManyMutationInput, Prisma.materiaUncheckedUpdateManyInput>;
    /**
     * Filter which materias to update
     */
    where?: Prisma.materiaWhereInput;
    /**
     * Limit how many materias to update.
     */
    limit?: number;
};
/**
 * materia upsert
 */
export type materiaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: Prisma.materiaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the materia
     */
    omit?: Prisma.materiaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.materiaInclude<ExtArgs> | null;
    /**
     * The filter to search for the materia to update in case it exists.
     */
    where: Prisma.materiaWhereUniqueInput;
    /**
     * In case the materia found by the `where` argument doesn't exist, create a new materia with this data.
     */
    create: Prisma.XOR<Prisma.materiaCreateInput, Prisma.materiaUncheckedCreateInput>;
    /**
     * In case the materia was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.materiaUpdateInput, Prisma.materiaUncheckedUpdateInput>;
};
/**
 * materia delete
 */
export type materiaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: Prisma.materiaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the materia
     */
    omit?: Prisma.materiaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.materiaInclude<ExtArgs> | null;
    /**
     * Filter which materia to delete.
     */
    where: Prisma.materiaWhereUniqueInput;
};
/**
 * materia deleteMany
 */
export type materiaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which materias to delete
     */
    where?: Prisma.materiaWhereInput;
    /**
     * Limit how many materias to delete.
     */
    limit?: number;
};
/**
 * materia.clase
 */
export type materia$claseArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * materia without action
 */
export type materiaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the materia
     */
    select?: Prisma.materiaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the materia
     */
    omit?: Prisma.materiaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.materiaInclude<ExtArgs> | null;
};
//# sourceMappingURL=materia.d.ts.map