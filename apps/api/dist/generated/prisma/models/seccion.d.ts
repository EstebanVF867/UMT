import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model seccion
 *
 */
export type seccionModel = runtime.Types.Result.DefaultSelection<Prisma.$seccionPayload>;
export type AggregateSeccion = {
    _count: SeccionCountAggregateOutputType | null;
    _min: SeccionMinAggregateOutputType | null;
    _max: SeccionMaxAggregateOutputType | null;
};
export type SeccionMinAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    familiaId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SeccionMaxAggregateOutputType = {
    id: string | null;
    nombre: string | null;
    familiaId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SeccionCountAggregateOutputType = {
    id: number;
    nombre: number;
    familiaId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SeccionMinAggregateInputType = {
    id?: true;
    nombre?: true;
    familiaId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SeccionMaxAggregateInputType = {
    id?: true;
    nombre?: true;
    familiaId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SeccionCountAggregateInputType = {
    id?: true;
    nombre?: true;
    familiaId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SeccionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which seccion to aggregate.
     */
    where?: Prisma.seccionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of seccions to fetch.
     */
    orderBy?: Prisma.seccionOrderByWithRelationInput | Prisma.seccionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.seccionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` seccions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` seccions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned seccions
    **/
    _count?: true | SeccionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SeccionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SeccionMaxAggregateInputType;
};
export type GetSeccionAggregateType<T extends SeccionAggregateArgs> = {
    [P in keyof T & keyof AggregateSeccion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSeccion[P]> : Prisma.GetScalarType<T[P], AggregateSeccion[P]>;
};
export type seccionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.seccionWhereInput;
    orderBy?: Prisma.seccionOrderByWithAggregationInput | Prisma.seccionOrderByWithAggregationInput[];
    by: Prisma.SeccionScalarFieldEnum[] | Prisma.SeccionScalarFieldEnum;
    having?: Prisma.seccionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SeccionCountAggregateInputType | true;
    _min?: SeccionMinAggregateInputType;
    _max?: SeccionMaxAggregateInputType;
};
export type SeccionGroupByOutputType = {
    id: string;
    nombre: string;
    familiaId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: SeccionCountAggregateOutputType | null;
    _min: SeccionMinAggregateOutputType | null;
    _max: SeccionMaxAggregateOutputType | null;
};
export type GetSeccionGroupByPayload<T extends seccionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SeccionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SeccionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SeccionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SeccionGroupByOutputType[P]>;
}>>;
export type seccionWhereInput = {
    AND?: Prisma.seccionWhereInput | Prisma.seccionWhereInput[];
    OR?: Prisma.seccionWhereInput[];
    NOT?: Prisma.seccionWhereInput | Prisma.seccionWhereInput[];
    id?: Prisma.StringFilter<"seccion"> | string;
    nombre?: Prisma.StringFilter<"seccion"> | string;
    familiaId?: Prisma.StringFilter<"seccion"> | string;
    createdAt?: Prisma.DateTimeFilter<"seccion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"seccion"> | Date | string;
    familia?: Prisma.XOR<Prisma.FamiliaScalarRelationFilter, Prisma.familiaWhereInput>;
    instrumento?: Prisma.InstrumentoListRelationFilter;
};
export type seccionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    familiaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    familia?: Prisma.familiaOrderByWithRelationInput;
    instrumento?: Prisma.instrumentoOrderByRelationAggregateInput;
    _relevance?: Prisma.seccionOrderByRelevanceInput;
};
export type seccionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    familiaId_nombre?: Prisma.seccionFamiliaIdNombreCompoundUniqueInput;
    AND?: Prisma.seccionWhereInput | Prisma.seccionWhereInput[];
    OR?: Prisma.seccionWhereInput[];
    NOT?: Prisma.seccionWhereInput | Prisma.seccionWhereInput[];
    nombre?: Prisma.StringFilter<"seccion"> | string;
    familiaId?: Prisma.StringFilter<"seccion"> | string;
    createdAt?: Prisma.DateTimeFilter<"seccion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"seccion"> | Date | string;
    familia?: Prisma.XOR<Prisma.FamiliaScalarRelationFilter, Prisma.familiaWhereInput>;
    instrumento?: Prisma.InstrumentoListRelationFilter;
}, "id" | "familiaId_nombre">;
export type seccionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    familiaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.seccionCountOrderByAggregateInput;
    _max?: Prisma.seccionMaxOrderByAggregateInput;
    _min?: Prisma.seccionMinOrderByAggregateInput;
};
export type seccionScalarWhereWithAggregatesInput = {
    AND?: Prisma.seccionScalarWhereWithAggregatesInput | Prisma.seccionScalarWhereWithAggregatesInput[];
    OR?: Prisma.seccionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.seccionScalarWhereWithAggregatesInput | Prisma.seccionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"seccion"> | string;
    nombre?: Prisma.StringWithAggregatesFilter<"seccion"> | string;
    familiaId?: Prisma.StringWithAggregatesFilter<"seccion"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"seccion"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"seccion"> | Date | string;
};
export type seccionCreateInput = {
    id: string;
    nombre: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
    familia: Prisma.familiaCreateNestedOneWithoutSeccionInput;
    instrumento?: Prisma.instrumentoCreateNestedManyWithoutSeccionInput;
};
export type seccionUncheckedCreateInput = {
    id: string;
    nombre: string;
    familiaId: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
    instrumento?: Prisma.instrumentoUncheckedCreateNestedManyWithoutSeccionInput;
};
export type seccionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    familia?: Prisma.familiaUpdateOneRequiredWithoutSeccionNestedInput;
    instrumento?: Prisma.instrumentoUpdateManyWithoutSeccionNestedInput;
};
export type seccionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    familiaId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    instrumento?: Prisma.instrumentoUncheckedUpdateManyWithoutSeccionNestedInput;
};
export type seccionCreateManyInput = {
    id: string;
    nombre: string;
    familiaId: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type seccionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type seccionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    familiaId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SeccionListRelationFilter = {
    every?: Prisma.seccionWhereInput;
    some?: Prisma.seccionWhereInput;
    none?: Prisma.seccionWhereInput;
};
export type seccionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type seccionOrderByRelevanceInput = {
    fields: Prisma.seccionOrderByRelevanceFieldEnum | Prisma.seccionOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type seccionFamiliaIdNombreCompoundUniqueInput = {
    familiaId: string;
    nombre: string;
};
export type seccionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    familiaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type seccionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    familiaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type seccionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    familiaId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SeccionScalarRelationFilter = {
    is?: Prisma.seccionWhereInput;
    isNot?: Prisma.seccionWhereInput;
};
export type seccionCreateNestedManyWithoutFamiliaInput = {
    create?: Prisma.XOR<Prisma.seccionCreateWithoutFamiliaInput, Prisma.seccionUncheckedCreateWithoutFamiliaInput> | Prisma.seccionCreateWithoutFamiliaInput[] | Prisma.seccionUncheckedCreateWithoutFamiliaInput[];
    connectOrCreate?: Prisma.seccionCreateOrConnectWithoutFamiliaInput | Prisma.seccionCreateOrConnectWithoutFamiliaInput[];
    createMany?: Prisma.seccionCreateManyFamiliaInputEnvelope;
    connect?: Prisma.seccionWhereUniqueInput | Prisma.seccionWhereUniqueInput[];
};
export type seccionUncheckedCreateNestedManyWithoutFamiliaInput = {
    create?: Prisma.XOR<Prisma.seccionCreateWithoutFamiliaInput, Prisma.seccionUncheckedCreateWithoutFamiliaInput> | Prisma.seccionCreateWithoutFamiliaInput[] | Prisma.seccionUncheckedCreateWithoutFamiliaInput[];
    connectOrCreate?: Prisma.seccionCreateOrConnectWithoutFamiliaInput | Prisma.seccionCreateOrConnectWithoutFamiliaInput[];
    createMany?: Prisma.seccionCreateManyFamiliaInputEnvelope;
    connect?: Prisma.seccionWhereUniqueInput | Prisma.seccionWhereUniqueInput[];
};
export type seccionUpdateManyWithoutFamiliaNestedInput = {
    create?: Prisma.XOR<Prisma.seccionCreateWithoutFamiliaInput, Prisma.seccionUncheckedCreateWithoutFamiliaInput> | Prisma.seccionCreateWithoutFamiliaInput[] | Prisma.seccionUncheckedCreateWithoutFamiliaInput[];
    connectOrCreate?: Prisma.seccionCreateOrConnectWithoutFamiliaInput | Prisma.seccionCreateOrConnectWithoutFamiliaInput[];
    upsert?: Prisma.seccionUpsertWithWhereUniqueWithoutFamiliaInput | Prisma.seccionUpsertWithWhereUniqueWithoutFamiliaInput[];
    createMany?: Prisma.seccionCreateManyFamiliaInputEnvelope;
    set?: Prisma.seccionWhereUniqueInput | Prisma.seccionWhereUniqueInput[];
    disconnect?: Prisma.seccionWhereUniqueInput | Prisma.seccionWhereUniqueInput[];
    delete?: Prisma.seccionWhereUniqueInput | Prisma.seccionWhereUniqueInput[];
    connect?: Prisma.seccionWhereUniqueInput | Prisma.seccionWhereUniqueInput[];
    update?: Prisma.seccionUpdateWithWhereUniqueWithoutFamiliaInput | Prisma.seccionUpdateWithWhereUniqueWithoutFamiliaInput[];
    updateMany?: Prisma.seccionUpdateManyWithWhereWithoutFamiliaInput | Prisma.seccionUpdateManyWithWhereWithoutFamiliaInput[];
    deleteMany?: Prisma.seccionScalarWhereInput | Prisma.seccionScalarWhereInput[];
};
export type seccionUncheckedUpdateManyWithoutFamiliaNestedInput = {
    create?: Prisma.XOR<Prisma.seccionCreateWithoutFamiliaInput, Prisma.seccionUncheckedCreateWithoutFamiliaInput> | Prisma.seccionCreateWithoutFamiliaInput[] | Prisma.seccionUncheckedCreateWithoutFamiliaInput[];
    connectOrCreate?: Prisma.seccionCreateOrConnectWithoutFamiliaInput | Prisma.seccionCreateOrConnectWithoutFamiliaInput[];
    upsert?: Prisma.seccionUpsertWithWhereUniqueWithoutFamiliaInput | Prisma.seccionUpsertWithWhereUniqueWithoutFamiliaInput[];
    createMany?: Prisma.seccionCreateManyFamiliaInputEnvelope;
    set?: Prisma.seccionWhereUniqueInput | Prisma.seccionWhereUniqueInput[];
    disconnect?: Prisma.seccionWhereUniqueInput | Prisma.seccionWhereUniqueInput[];
    delete?: Prisma.seccionWhereUniqueInput | Prisma.seccionWhereUniqueInput[];
    connect?: Prisma.seccionWhereUniqueInput | Prisma.seccionWhereUniqueInput[];
    update?: Prisma.seccionUpdateWithWhereUniqueWithoutFamiliaInput | Prisma.seccionUpdateWithWhereUniqueWithoutFamiliaInput[];
    updateMany?: Prisma.seccionUpdateManyWithWhereWithoutFamiliaInput | Prisma.seccionUpdateManyWithWhereWithoutFamiliaInput[];
    deleteMany?: Prisma.seccionScalarWhereInput | Prisma.seccionScalarWhereInput[];
};
export type seccionCreateNestedOneWithoutInstrumentoInput = {
    create?: Prisma.XOR<Prisma.seccionCreateWithoutInstrumentoInput, Prisma.seccionUncheckedCreateWithoutInstrumentoInput>;
    connectOrCreate?: Prisma.seccionCreateOrConnectWithoutInstrumentoInput;
    connect?: Prisma.seccionWhereUniqueInput;
};
export type seccionUpdateOneRequiredWithoutInstrumentoNestedInput = {
    create?: Prisma.XOR<Prisma.seccionCreateWithoutInstrumentoInput, Prisma.seccionUncheckedCreateWithoutInstrumentoInput>;
    connectOrCreate?: Prisma.seccionCreateOrConnectWithoutInstrumentoInput;
    upsert?: Prisma.seccionUpsertWithoutInstrumentoInput;
    connect?: Prisma.seccionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.seccionUpdateToOneWithWhereWithoutInstrumentoInput, Prisma.seccionUpdateWithoutInstrumentoInput>, Prisma.seccionUncheckedUpdateWithoutInstrumentoInput>;
};
export type seccionCreateWithoutFamiliaInput = {
    id: string;
    nombre: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
    instrumento?: Prisma.instrumentoCreateNestedManyWithoutSeccionInput;
};
export type seccionUncheckedCreateWithoutFamiliaInput = {
    id: string;
    nombre: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
    instrumento?: Prisma.instrumentoUncheckedCreateNestedManyWithoutSeccionInput;
};
export type seccionCreateOrConnectWithoutFamiliaInput = {
    where: Prisma.seccionWhereUniqueInput;
    create: Prisma.XOR<Prisma.seccionCreateWithoutFamiliaInput, Prisma.seccionUncheckedCreateWithoutFamiliaInput>;
};
export type seccionCreateManyFamiliaInputEnvelope = {
    data: Prisma.seccionCreateManyFamiliaInput | Prisma.seccionCreateManyFamiliaInput[];
    skipDuplicates?: boolean;
};
export type seccionUpsertWithWhereUniqueWithoutFamiliaInput = {
    where: Prisma.seccionWhereUniqueInput;
    update: Prisma.XOR<Prisma.seccionUpdateWithoutFamiliaInput, Prisma.seccionUncheckedUpdateWithoutFamiliaInput>;
    create: Prisma.XOR<Prisma.seccionCreateWithoutFamiliaInput, Prisma.seccionUncheckedCreateWithoutFamiliaInput>;
};
export type seccionUpdateWithWhereUniqueWithoutFamiliaInput = {
    where: Prisma.seccionWhereUniqueInput;
    data: Prisma.XOR<Prisma.seccionUpdateWithoutFamiliaInput, Prisma.seccionUncheckedUpdateWithoutFamiliaInput>;
};
export type seccionUpdateManyWithWhereWithoutFamiliaInput = {
    where: Prisma.seccionScalarWhereInput;
    data: Prisma.XOR<Prisma.seccionUpdateManyMutationInput, Prisma.seccionUncheckedUpdateManyWithoutFamiliaInput>;
};
export type seccionScalarWhereInput = {
    AND?: Prisma.seccionScalarWhereInput | Prisma.seccionScalarWhereInput[];
    OR?: Prisma.seccionScalarWhereInput[];
    NOT?: Prisma.seccionScalarWhereInput | Prisma.seccionScalarWhereInput[];
    id?: Prisma.StringFilter<"seccion"> | string;
    nombre?: Prisma.StringFilter<"seccion"> | string;
    familiaId?: Prisma.StringFilter<"seccion"> | string;
    createdAt?: Prisma.DateTimeFilter<"seccion"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"seccion"> | Date | string;
};
export type seccionCreateWithoutInstrumentoInput = {
    id: string;
    nombre: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
    familia: Prisma.familiaCreateNestedOneWithoutSeccionInput;
};
export type seccionUncheckedCreateWithoutInstrumentoInput = {
    id: string;
    nombre: string;
    familiaId: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type seccionCreateOrConnectWithoutInstrumentoInput = {
    where: Prisma.seccionWhereUniqueInput;
    create: Prisma.XOR<Prisma.seccionCreateWithoutInstrumentoInput, Prisma.seccionUncheckedCreateWithoutInstrumentoInput>;
};
export type seccionUpsertWithoutInstrumentoInput = {
    update: Prisma.XOR<Prisma.seccionUpdateWithoutInstrumentoInput, Prisma.seccionUncheckedUpdateWithoutInstrumentoInput>;
    create: Prisma.XOR<Prisma.seccionCreateWithoutInstrumentoInput, Prisma.seccionUncheckedCreateWithoutInstrumentoInput>;
    where?: Prisma.seccionWhereInput;
};
export type seccionUpdateToOneWithWhereWithoutInstrumentoInput = {
    where?: Prisma.seccionWhereInput;
    data: Prisma.XOR<Prisma.seccionUpdateWithoutInstrumentoInput, Prisma.seccionUncheckedUpdateWithoutInstrumentoInput>;
};
export type seccionUpdateWithoutInstrumentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    familia?: Prisma.familiaUpdateOneRequiredWithoutSeccionNestedInput;
};
export type seccionUncheckedUpdateWithoutInstrumentoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    familiaId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type seccionCreateManyFamiliaInput = {
    id: string;
    nombre: string;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type seccionUpdateWithoutFamiliaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    instrumento?: Prisma.instrumentoUpdateManyWithoutSeccionNestedInput;
};
export type seccionUncheckedUpdateWithoutFamiliaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    instrumento?: Prisma.instrumentoUncheckedUpdateManyWithoutSeccionNestedInput;
};
export type seccionUncheckedUpdateManyWithoutFamiliaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type SeccionCountOutputType
 */
export type SeccionCountOutputType = {
    instrumento: number;
};
export type SeccionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    instrumento?: boolean | SeccionCountOutputTypeCountInstrumentoArgs;
};
/**
 * SeccionCountOutputType without action
 */
export type SeccionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeccionCountOutputType
     */
    select?: Prisma.SeccionCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * SeccionCountOutputType without action
 */
export type SeccionCountOutputTypeCountInstrumentoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.instrumentoWhereInput;
};
export type seccionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre?: boolean;
    familiaId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    familia?: boolean | Prisma.familiaDefaultArgs<ExtArgs>;
    instrumento?: boolean | Prisma.seccion$instrumentoArgs<ExtArgs>;
    _count?: boolean | Prisma.SeccionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["seccion"]>;
export type seccionSelectScalar = {
    id?: boolean;
    nombre?: boolean;
    familiaId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type seccionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre" | "familiaId" | "createdAt" | "updatedAt", ExtArgs["result"]["seccion"]>;
export type seccionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    familia?: boolean | Prisma.familiaDefaultArgs<ExtArgs>;
    instrumento?: boolean | Prisma.seccion$instrumentoArgs<ExtArgs>;
    _count?: boolean | Prisma.SeccionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $seccionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "seccion";
    objects: {
        familia: Prisma.$familiaPayload<ExtArgs>;
        instrumento: Prisma.$instrumentoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nombre: string;
        familiaId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["seccion"]>;
    composites: {};
};
export type seccionGetPayload<S extends boolean | null | undefined | seccionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$seccionPayload, S>;
export type seccionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<seccionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SeccionCountAggregateInputType | true;
};
export interface seccionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['seccion'];
        meta: {
            name: 'seccion';
        };
    };
    /**
     * Find zero or one Seccion that matches the filter.
     * @param {seccionFindUniqueArgs} args - Arguments to find a Seccion
     * @example
     * // Get one Seccion
     * const seccion = await prisma.seccion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends seccionFindUniqueArgs>(args: Prisma.SelectSubset<T, seccionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__seccionClient<runtime.Types.Result.GetResult<Prisma.$seccionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Seccion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {seccionFindUniqueOrThrowArgs} args - Arguments to find a Seccion
     * @example
     * // Get one Seccion
     * const seccion = await prisma.seccion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends seccionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, seccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__seccionClient<runtime.Types.Result.GetResult<Prisma.$seccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Seccion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seccionFindFirstArgs} args - Arguments to find a Seccion
     * @example
     * // Get one Seccion
     * const seccion = await prisma.seccion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends seccionFindFirstArgs>(args?: Prisma.SelectSubset<T, seccionFindFirstArgs<ExtArgs>>): Prisma.Prisma__seccionClient<runtime.Types.Result.GetResult<Prisma.$seccionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Seccion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seccionFindFirstOrThrowArgs} args - Arguments to find a Seccion
     * @example
     * // Get one Seccion
     * const seccion = await prisma.seccion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends seccionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, seccionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__seccionClient<runtime.Types.Result.GetResult<Prisma.$seccionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Seccions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seccionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seccions
     * const seccions = await prisma.seccion.findMany()
     *
     * // Get first 10 Seccions
     * const seccions = await prisma.seccion.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const seccionWithIdOnly = await prisma.seccion.findMany({ select: { id: true } })
     *
     */
    findMany<T extends seccionFindManyArgs>(args?: Prisma.SelectSubset<T, seccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$seccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Seccion.
     * @param {seccionCreateArgs} args - Arguments to create a Seccion.
     * @example
     * // Create one Seccion
     * const Seccion = await prisma.seccion.create({
     *   data: {
     *     // ... data to create a Seccion
     *   }
     * })
     *
     */
    create<T extends seccionCreateArgs>(args: Prisma.SelectSubset<T, seccionCreateArgs<ExtArgs>>): Prisma.Prisma__seccionClient<runtime.Types.Result.GetResult<Prisma.$seccionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Seccions.
     * @param {seccionCreateManyArgs} args - Arguments to create many Seccions.
     * @example
     * // Create many Seccions
     * const seccion = await prisma.seccion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends seccionCreateManyArgs>(args?: Prisma.SelectSubset<T, seccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Seccion.
     * @param {seccionDeleteArgs} args - Arguments to delete one Seccion.
     * @example
     * // Delete one Seccion
     * const Seccion = await prisma.seccion.delete({
     *   where: {
     *     // ... filter to delete one Seccion
     *   }
     * })
     *
     */
    delete<T extends seccionDeleteArgs>(args: Prisma.SelectSubset<T, seccionDeleteArgs<ExtArgs>>): Prisma.Prisma__seccionClient<runtime.Types.Result.GetResult<Prisma.$seccionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Seccion.
     * @param {seccionUpdateArgs} args - Arguments to update one Seccion.
     * @example
     * // Update one Seccion
     * const seccion = await prisma.seccion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends seccionUpdateArgs>(args: Prisma.SelectSubset<T, seccionUpdateArgs<ExtArgs>>): Prisma.Prisma__seccionClient<runtime.Types.Result.GetResult<Prisma.$seccionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Seccions.
     * @param {seccionDeleteManyArgs} args - Arguments to filter Seccions to delete.
     * @example
     * // Delete a few Seccions
     * const { count } = await prisma.seccion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends seccionDeleteManyArgs>(args?: Prisma.SelectSubset<T, seccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Seccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seccionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seccions
     * const seccion = await prisma.seccion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends seccionUpdateManyArgs>(args: Prisma.SelectSubset<T, seccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Seccion.
     * @param {seccionUpsertArgs} args - Arguments to update or create a Seccion.
     * @example
     * // Update or create a Seccion
     * const seccion = await prisma.seccion.upsert({
     *   create: {
     *     // ... data to create a Seccion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seccion we want to update
     *   }
     * })
     */
    upsert<T extends seccionUpsertArgs>(args: Prisma.SelectSubset<T, seccionUpsertArgs<ExtArgs>>): Prisma.Prisma__seccionClient<runtime.Types.Result.GetResult<Prisma.$seccionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Seccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seccionCountArgs} args - Arguments to filter Seccions to count.
     * @example
     * // Count the number of Seccions
     * const count = await prisma.seccion.count({
     *   where: {
     *     // ... the filter for the Seccions we want to count
     *   }
     * })
    **/
    count<T extends seccionCountArgs>(args?: Prisma.Subset<T, seccionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SeccionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Seccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeccionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SeccionAggregateArgs>(args: Prisma.Subset<T, SeccionAggregateArgs>): Prisma.PrismaPromise<GetSeccionAggregateType<T>>;
    /**
     * Group by Seccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {seccionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends seccionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: seccionGroupByArgs['orderBy'];
    } : {
        orderBy?: seccionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, seccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the seccion model
     */
    readonly fields: seccionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for seccion.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__seccionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    familia<T extends Prisma.familiaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.familiaDefaultArgs<ExtArgs>>): Prisma.Prisma__familiaClient<runtime.Types.Result.GetResult<Prisma.$familiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    instrumento<T extends Prisma.seccion$instrumentoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.seccion$instrumentoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$instrumentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the seccion model
 */
export interface seccionFieldRefs {
    readonly id: Prisma.FieldRef<"seccion", 'String'>;
    readonly nombre: Prisma.FieldRef<"seccion", 'String'>;
    readonly familiaId: Prisma.FieldRef<"seccion", 'String'>;
    readonly createdAt: Prisma.FieldRef<"seccion", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"seccion", 'DateTime'>;
}
/**
 * seccion findUnique
 */
export type seccionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which seccion to fetch.
     */
    where: Prisma.seccionWhereUniqueInput;
};
/**
 * seccion findUniqueOrThrow
 */
export type seccionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which seccion to fetch.
     */
    where: Prisma.seccionWhereUniqueInput;
};
/**
 * seccion findFirst
 */
export type seccionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which seccion to fetch.
     */
    where?: Prisma.seccionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of seccions to fetch.
     */
    orderBy?: Prisma.seccionOrderByWithRelationInput | Prisma.seccionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for seccions.
     */
    cursor?: Prisma.seccionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` seccions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` seccions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of seccions.
     */
    distinct?: Prisma.SeccionScalarFieldEnum | Prisma.SeccionScalarFieldEnum[];
};
/**
 * seccion findFirstOrThrow
 */
export type seccionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which seccion to fetch.
     */
    where?: Prisma.seccionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of seccions to fetch.
     */
    orderBy?: Prisma.seccionOrderByWithRelationInput | Prisma.seccionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for seccions.
     */
    cursor?: Prisma.seccionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` seccions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` seccions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of seccions.
     */
    distinct?: Prisma.SeccionScalarFieldEnum | Prisma.SeccionScalarFieldEnum[];
};
/**
 * seccion findMany
 */
export type seccionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which seccions to fetch.
     */
    where?: Prisma.seccionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of seccions to fetch.
     */
    orderBy?: Prisma.seccionOrderByWithRelationInput | Prisma.seccionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing seccions.
     */
    cursor?: Prisma.seccionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` seccions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` seccions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of seccions.
     */
    distinct?: Prisma.SeccionScalarFieldEnum | Prisma.SeccionScalarFieldEnum[];
};
/**
 * seccion create
 */
export type seccionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a seccion.
     */
    data: Prisma.XOR<Prisma.seccionCreateInput, Prisma.seccionUncheckedCreateInput>;
};
/**
 * seccion createMany
 */
export type seccionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many seccions.
     */
    data: Prisma.seccionCreateManyInput | Prisma.seccionCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * seccion update
 */
export type seccionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a seccion.
     */
    data: Prisma.XOR<Prisma.seccionUpdateInput, Prisma.seccionUncheckedUpdateInput>;
    /**
     * Choose, which seccion to update.
     */
    where: Prisma.seccionWhereUniqueInput;
};
/**
 * seccion updateMany
 */
export type seccionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update seccions.
     */
    data: Prisma.XOR<Prisma.seccionUpdateManyMutationInput, Prisma.seccionUncheckedUpdateManyInput>;
    /**
     * Filter which seccions to update
     */
    where?: Prisma.seccionWhereInput;
    /**
     * Limit how many seccions to update.
     */
    limit?: number;
};
/**
 * seccion upsert
 */
export type seccionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the seccion to update in case it exists.
     */
    where: Prisma.seccionWhereUniqueInput;
    /**
     * In case the seccion found by the `where` argument doesn't exist, create a new seccion with this data.
     */
    create: Prisma.XOR<Prisma.seccionCreateInput, Prisma.seccionUncheckedCreateInput>;
    /**
     * In case the seccion was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.seccionUpdateInput, Prisma.seccionUncheckedUpdateInput>;
};
/**
 * seccion delete
 */
export type seccionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which seccion to delete.
     */
    where: Prisma.seccionWhereUniqueInput;
};
/**
 * seccion deleteMany
 */
export type seccionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which seccions to delete
     */
    where?: Prisma.seccionWhereInput;
    /**
     * Limit how many seccions to delete.
     */
    limit?: number;
};
/**
 * seccion.instrumento
 */
export type seccion$instrumentoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the instrumento
     */
    select?: Prisma.instrumentoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the instrumento
     */
    omit?: Prisma.instrumentoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.instrumentoInclude<ExtArgs> | null;
    where?: Prisma.instrumentoWhereInput;
    orderBy?: Prisma.instrumentoOrderByWithRelationInput | Prisma.instrumentoOrderByWithRelationInput[];
    cursor?: Prisma.instrumentoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InstrumentoScalarFieldEnum | Prisma.InstrumentoScalarFieldEnum[];
};
/**
 * seccion without action
 */
export type seccionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=seccion.d.ts.map