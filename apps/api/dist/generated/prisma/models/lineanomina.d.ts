import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model lineanomina
 *
 */
export type lineanominaModel = runtime.Types.Result.DefaultSelection<Prisma.$lineanominaPayload>;
export type AggregateLineanomina = {
    _count: LineanominaCountAggregateOutputType | null;
    _avg: LineanominaAvgAggregateOutputType | null;
    _sum: LineanominaSumAggregateOutputType | null;
    _min: LineanominaMinAggregateOutputType | null;
    _max: LineanominaMaxAggregateOutputType | null;
};
export type LineanominaAvgAggregateOutputType = {
    importe: runtime.Decimal | null;
};
export type LineanominaSumAggregateOutputType = {
    importe: runtime.Decimal | null;
};
export type LineanominaMinAggregateOutputType = {
    id: string | null;
    nominaId: string | null;
    tipo: $Enums.lineanomina_tipo | null;
    descripcion: string | null;
    importe: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LineanominaMaxAggregateOutputType = {
    id: string | null;
    nominaId: string | null;
    tipo: $Enums.lineanomina_tipo | null;
    descripcion: string | null;
    importe: runtime.Decimal | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LineanominaCountAggregateOutputType = {
    id: number;
    nominaId: number;
    tipo: number;
    descripcion: number;
    importe: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LineanominaAvgAggregateInputType = {
    importe?: true;
};
export type LineanominaSumAggregateInputType = {
    importe?: true;
};
export type LineanominaMinAggregateInputType = {
    id?: true;
    nominaId?: true;
    tipo?: true;
    descripcion?: true;
    importe?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LineanominaMaxAggregateInputType = {
    id?: true;
    nominaId?: true;
    tipo?: true;
    descripcion?: true;
    importe?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LineanominaCountAggregateInputType = {
    id?: true;
    nominaId?: true;
    tipo?: true;
    descripcion?: true;
    importe?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LineanominaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which lineanomina to aggregate.
     */
    where?: Prisma.lineanominaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lineanominas to fetch.
     */
    orderBy?: Prisma.lineanominaOrderByWithRelationInput | Prisma.lineanominaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.lineanominaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lineanominas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lineanominas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned lineanominas
    **/
    _count?: true | LineanominaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LineanominaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LineanominaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LineanominaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LineanominaMaxAggregateInputType;
};
export type GetLineanominaAggregateType<T extends LineanominaAggregateArgs> = {
    [P in keyof T & keyof AggregateLineanomina]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLineanomina[P]> : Prisma.GetScalarType<T[P], AggregateLineanomina[P]>;
};
export type lineanominaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lineanominaWhereInput;
    orderBy?: Prisma.lineanominaOrderByWithAggregationInput | Prisma.lineanominaOrderByWithAggregationInput[];
    by: Prisma.LineanominaScalarFieldEnum[] | Prisma.LineanominaScalarFieldEnum;
    having?: Prisma.lineanominaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LineanominaCountAggregateInputType | true;
    _avg?: LineanominaAvgAggregateInputType;
    _sum?: LineanominaSumAggregateInputType;
    _min?: LineanominaMinAggregateInputType;
    _max?: LineanominaMaxAggregateInputType;
};
export type LineanominaGroupByOutputType = {
    id: string;
    nominaId: string;
    tipo: $Enums.lineanomina_tipo;
    descripcion: string;
    importe: runtime.Decimal;
    createdAt: Date;
    updatedAt: Date;
    _count: LineanominaCountAggregateOutputType | null;
    _avg: LineanominaAvgAggregateOutputType | null;
    _sum: LineanominaSumAggregateOutputType | null;
    _min: LineanominaMinAggregateOutputType | null;
    _max: LineanominaMaxAggregateOutputType | null;
};
export type GetLineanominaGroupByPayload<T extends lineanominaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LineanominaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LineanominaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LineanominaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LineanominaGroupByOutputType[P]>;
}>>;
export type lineanominaWhereInput = {
    AND?: Prisma.lineanominaWhereInput | Prisma.lineanominaWhereInput[];
    OR?: Prisma.lineanominaWhereInput[];
    NOT?: Prisma.lineanominaWhereInput | Prisma.lineanominaWhereInput[];
    id?: Prisma.StringFilter<"lineanomina"> | string;
    nominaId?: Prisma.StringFilter<"lineanomina"> | string;
    tipo?: Prisma.Enumlineanomina_tipoFilter<"lineanomina"> | $Enums.lineanomina_tipo;
    descripcion?: Prisma.StringFilter<"lineanomina"> | string;
    importe?: Prisma.DecimalFilter<"lineanomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"lineanomina"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"lineanomina"> | Date | string;
    nomina?: Prisma.XOR<Prisma.NominaScalarRelationFilter, Prisma.nominaWhereInput>;
};
export type lineanominaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nominaId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    nomina?: Prisma.nominaOrderByWithRelationInput;
    _relevance?: Prisma.lineanominaOrderByRelevanceInput;
};
export type lineanominaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.lineanominaWhereInput | Prisma.lineanominaWhereInput[];
    OR?: Prisma.lineanominaWhereInput[];
    NOT?: Prisma.lineanominaWhereInput | Prisma.lineanominaWhereInput[];
    nominaId?: Prisma.StringFilter<"lineanomina"> | string;
    tipo?: Prisma.Enumlineanomina_tipoFilter<"lineanomina"> | $Enums.lineanomina_tipo;
    descripcion?: Prisma.StringFilter<"lineanomina"> | string;
    importe?: Prisma.DecimalFilter<"lineanomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"lineanomina"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"lineanomina"> | Date | string;
    nomina?: Prisma.XOR<Prisma.NominaScalarRelationFilter, Prisma.nominaWhereInput>;
}, "id">;
export type lineanominaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nominaId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.lineanominaCountOrderByAggregateInput;
    _avg?: Prisma.lineanominaAvgOrderByAggregateInput;
    _max?: Prisma.lineanominaMaxOrderByAggregateInput;
    _min?: Prisma.lineanominaMinOrderByAggregateInput;
    _sum?: Prisma.lineanominaSumOrderByAggregateInput;
};
export type lineanominaScalarWhereWithAggregatesInput = {
    AND?: Prisma.lineanominaScalarWhereWithAggregatesInput | Prisma.lineanominaScalarWhereWithAggregatesInput[];
    OR?: Prisma.lineanominaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.lineanominaScalarWhereWithAggregatesInput | Prisma.lineanominaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"lineanomina"> | string;
    nominaId?: Prisma.StringWithAggregatesFilter<"lineanomina"> | string;
    tipo?: Prisma.Enumlineanomina_tipoWithAggregatesFilter<"lineanomina"> | $Enums.lineanomina_tipo;
    descripcion?: Prisma.StringWithAggregatesFilter<"lineanomina"> | string;
    importe?: Prisma.DecimalWithAggregatesFilter<"lineanomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"lineanomina"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"lineanomina"> | Date | string;
};
export type lineanominaCreateInput = {
    id: string;
    tipo: $Enums.lineanomina_tipo;
    descripcion: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt: Date | string;
    nomina: Prisma.nominaCreateNestedOneWithoutLineanominaInput;
};
export type lineanominaUncheckedCreateInput = {
    id: string;
    nominaId: string;
    tipo: $Enums.lineanomina_tipo;
    descripcion: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type lineanominaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumlineanomina_tipoFieldUpdateOperationsInput | $Enums.lineanomina_tipo;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    nomina?: Prisma.nominaUpdateOneRequiredWithoutLineanominaNestedInput;
};
export type lineanominaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nominaId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumlineanomina_tipoFieldUpdateOperationsInput | $Enums.lineanomina_tipo;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type lineanominaCreateManyInput = {
    id: string;
    nominaId: string;
    tipo: $Enums.lineanomina_tipo;
    descripcion: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type lineanominaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumlineanomina_tipoFieldUpdateOperationsInput | $Enums.lineanomina_tipo;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type lineanominaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    nominaId?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumlineanomina_tipoFieldUpdateOperationsInput | $Enums.lineanomina_tipo;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type lineanominaOrderByRelevanceInput = {
    fields: Prisma.lineanominaOrderByRelevanceFieldEnum | Prisma.lineanominaOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type lineanominaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nominaId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type lineanominaAvgOrderByAggregateInput = {
    importe?: Prisma.SortOrder;
};
export type lineanominaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nominaId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type lineanominaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nominaId?: Prisma.SortOrder;
    tipo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type lineanominaSumOrderByAggregateInput = {
    importe?: Prisma.SortOrder;
};
export type LineanominaListRelationFilter = {
    every?: Prisma.lineanominaWhereInput;
    some?: Prisma.lineanominaWhereInput;
    none?: Prisma.lineanominaWhereInput;
};
export type lineanominaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Enumlineanomina_tipoFieldUpdateOperationsInput = {
    set?: $Enums.lineanomina_tipo;
};
export type lineanominaCreateNestedManyWithoutNominaInput = {
    create?: Prisma.XOR<Prisma.lineanominaCreateWithoutNominaInput, Prisma.lineanominaUncheckedCreateWithoutNominaInput> | Prisma.lineanominaCreateWithoutNominaInput[] | Prisma.lineanominaUncheckedCreateWithoutNominaInput[];
    connectOrCreate?: Prisma.lineanominaCreateOrConnectWithoutNominaInput | Prisma.lineanominaCreateOrConnectWithoutNominaInput[];
    createMany?: Prisma.lineanominaCreateManyNominaInputEnvelope;
    connect?: Prisma.lineanominaWhereUniqueInput | Prisma.lineanominaWhereUniqueInput[];
};
export type lineanominaUncheckedCreateNestedManyWithoutNominaInput = {
    create?: Prisma.XOR<Prisma.lineanominaCreateWithoutNominaInput, Prisma.lineanominaUncheckedCreateWithoutNominaInput> | Prisma.lineanominaCreateWithoutNominaInput[] | Prisma.lineanominaUncheckedCreateWithoutNominaInput[];
    connectOrCreate?: Prisma.lineanominaCreateOrConnectWithoutNominaInput | Prisma.lineanominaCreateOrConnectWithoutNominaInput[];
    createMany?: Prisma.lineanominaCreateManyNominaInputEnvelope;
    connect?: Prisma.lineanominaWhereUniqueInput | Prisma.lineanominaWhereUniqueInput[];
};
export type lineanominaUpdateManyWithoutNominaNestedInput = {
    create?: Prisma.XOR<Prisma.lineanominaCreateWithoutNominaInput, Prisma.lineanominaUncheckedCreateWithoutNominaInput> | Prisma.lineanominaCreateWithoutNominaInput[] | Prisma.lineanominaUncheckedCreateWithoutNominaInput[];
    connectOrCreate?: Prisma.lineanominaCreateOrConnectWithoutNominaInput | Prisma.lineanominaCreateOrConnectWithoutNominaInput[];
    upsert?: Prisma.lineanominaUpsertWithWhereUniqueWithoutNominaInput | Prisma.lineanominaUpsertWithWhereUniqueWithoutNominaInput[];
    createMany?: Prisma.lineanominaCreateManyNominaInputEnvelope;
    set?: Prisma.lineanominaWhereUniqueInput | Prisma.lineanominaWhereUniqueInput[];
    disconnect?: Prisma.lineanominaWhereUniqueInput | Prisma.lineanominaWhereUniqueInput[];
    delete?: Prisma.lineanominaWhereUniqueInput | Prisma.lineanominaWhereUniqueInput[];
    connect?: Prisma.lineanominaWhereUniqueInput | Prisma.lineanominaWhereUniqueInput[];
    update?: Prisma.lineanominaUpdateWithWhereUniqueWithoutNominaInput | Prisma.lineanominaUpdateWithWhereUniqueWithoutNominaInput[];
    updateMany?: Prisma.lineanominaUpdateManyWithWhereWithoutNominaInput | Prisma.lineanominaUpdateManyWithWhereWithoutNominaInput[];
    deleteMany?: Prisma.lineanominaScalarWhereInput | Prisma.lineanominaScalarWhereInput[];
};
export type lineanominaUncheckedUpdateManyWithoutNominaNestedInput = {
    create?: Prisma.XOR<Prisma.lineanominaCreateWithoutNominaInput, Prisma.lineanominaUncheckedCreateWithoutNominaInput> | Prisma.lineanominaCreateWithoutNominaInput[] | Prisma.lineanominaUncheckedCreateWithoutNominaInput[];
    connectOrCreate?: Prisma.lineanominaCreateOrConnectWithoutNominaInput | Prisma.lineanominaCreateOrConnectWithoutNominaInput[];
    upsert?: Prisma.lineanominaUpsertWithWhereUniqueWithoutNominaInput | Prisma.lineanominaUpsertWithWhereUniqueWithoutNominaInput[];
    createMany?: Prisma.lineanominaCreateManyNominaInputEnvelope;
    set?: Prisma.lineanominaWhereUniqueInput | Prisma.lineanominaWhereUniqueInput[];
    disconnect?: Prisma.lineanominaWhereUniqueInput | Prisma.lineanominaWhereUniqueInput[];
    delete?: Prisma.lineanominaWhereUniqueInput | Prisma.lineanominaWhereUniqueInput[];
    connect?: Prisma.lineanominaWhereUniqueInput | Prisma.lineanominaWhereUniqueInput[];
    update?: Prisma.lineanominaUpdateWithWhereUniqueWithoutNominaInput | Prisma.lineanominaUpdateWithWhereUniqueWithoutNominaInput[];
    updateMany?: Prisma.lineanominaUpdateManyWithWhereWithoutNominaInput | Prisma.lineanominaUpdateManyWithWhereWithoutNominaInput[];
    deleteMany?: Prisma.lineanominaScalarWhereInput | Prisma.lineanominaScalarWhereInput[];
};
export type lineanominaCreateWithoutNominaInput = {
    id: string;
    tipo: $Enums.lineanomina_tipo;
    descripcion: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type lineanominaUncheckedCreateWithoutNominaInput = {
    id: string;
    tipo: $Enums.lineanomina_tipo;
    descripcion: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type lineanominaCreateOrConnectWithoutNominaInput = {
    where: Prisma.lineanominaWhereUniqueInput;
    create: Prisma.XOR<Prisma.lineanominaCreateWithoutNominaInput, Prisma.lineanominaUncheckedCreateWithoutNominaInput>;
};
export type lineanominaCreateManyNominaInputEnvelope = {
    data: Prisma.lineanominaCreateManyNominaInput | Prisma.lineanominaCreateManyNominaInput[];
    skipDuplicates?: boolean;
};
export type lineanominaUpsertWithWhereUniqueWithoutNominaInput = {
    where: Prisma.lineanominaWhereUniqueInput;
    update: Prisma.XOR<Prisma.lineanominaUpdateWithoutNominaInput, Prisma.lineanominaUncheckedUpdateWithoutNominaInput>;
    create: Prisma.XOR<Prisma.lineanominaCreateWithoutNominaInput, Prisma.lineanominaUncheckedCreateWithoutNominaInput>;
};
export type lineanominaUpdateWithWhereUniqueWithoutNominaInput = {
    where: Prisma.lineanominaWhereUniqueInput;
    data: Prisma.XOR<Prisma.lineanominaUpdateWithoutNominaInput, Prisma.lineanominaUncheckedUpdateWithoutNominaInput>;
};
export type lineanominaUpdateManyWithWhereWithoutNominaInput = {
    where: Prisma.lineanominaScalarWhereInput;
    data: Prisma.XOR<Prisma.lineanominaUpdateManyMutationInput, Prisma.lineanominaUncheckedUpdateManyWithoutNominaInput>;
};
export type lineanominaScalarWhereInput = {
    AND?: Prisma.lineanominaScalarWhereInput | Prisma.lineanominaScalarWhereInput[];
    OR?: Prisma.lineanominaScalarWhereInput[];
    NOT?: Prisma.lineanominaScalarWhereInput | Prisma.lineanominaScalarWhereInput[];
    id?: Prisma.StringFilter<"lineanomina"> | string;
    nominaId?: Prisma.StringFilter<"lineanomina"> | string;
    tipo?: Prisma.Enumlineanomina_tipoFilter<"lineanomina"> | $Enums.lineanomina_tipo;
    descripcion?: Prisma.StringFilter<"lineanomina"> | string;
    importe?: Prisma.DecimalFilter<"lineanomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFilter<"lineanomina"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"lineanomina"> | Date | string;
};
export type lineanominaCreateManyNominaInput = {
    id: string;
    tipo: $Enums.lineanomina_tipo;
    descripcion: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type lineanominaUpdateWithoutNominaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumlineanomina_tipoFieldUpdateOperationsInput | $Enums.lineanomina_tipo;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type lineanominaUncheckedUpdateWithoutNominaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumlineanomina_tipoFieldUpdateOperationsInput | $Enums.lineanomina_tipo;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type lineanominaUncheckedUpdateManyWithoutNominaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo?: Prisma.Enumlineanomina_tipoFieldUpdateOperationsInput | $Enums.lineanomina_tipo;
    descripcion?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type lineanominaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nominaId?: boolean;
    tipo?: boolean;
    descripcion?: boolean;
    importe?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    nomina?: boolean | Prisma.nominaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lineanomina"]>;
export type lineanominaSelectScalar = {
    id?: boolean;
    nominaId?: boolean;
    tipo?: boolean;
    descripcion?: boolean;
    importe?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type lineanominaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nominaId" | "tipo" | "descripcion" | "importe" | "createdAt" | "updatedAt", ExtArgs["result"]["lineanomina"]>;
export type lineanominaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    nomina?: boolean | Prisma.nominaDefaultArgs<ExtArgs>;
};
export type $lineanominaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "lineanomina";
    objects: {
        nomina: Prisma.$nominaPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        nominaId: string;
        tipo: $Enums.lineanomina_tipo;
        descripcion: string;
        importe: runtime.Decimal;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["lineanomina"]>;
    composites: {};
};
export type lineanominaGetPayload<S extends boolean | null | undefined | lineanominaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$lineanominaPayload, S>;
export type lineanominaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<lineanominaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LineanominaCountAggregateInputType | true;
};
export interface lineanominaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['lineanomina'];
        meta: {
            name: 'lineanomina';
        };
    };
    /**
     * Find zero or one Lineanomina that matches the filter.
     * @param {lineanominaFindUniqueArgs} args - Arguments to find a Lineanomina
     * @example
     * // Get one Lineanomina
     * const lineanomina = await prisma.lineanomina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends lineanominaFindUniqueArgs>(args: Prisma.SelectSubset<T, lineanominaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__lineanominaClient<runtime.Types.Result.GetResult<Prisma.$lineanominaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Lineanomina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {lineanominaFindUniqueOrThrowArgs} args - Arguments to find a Lineanomina
     * @example
     * // Get one Lineanomina
     * const lineanomina = await prisma.lineanomina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends lineanominaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, lineanominaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__lineanominaClient<runtime.Types.Result.GetResult<Prisma.$lineanominaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Lineanomina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lineanominaFindFirstArgs} args - Arguments to find a Lineanomina
     * @example
     * // Get one Lineanomina
     * const lineanomina = await prisma.lineanomina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends lineanominaFindFirstArgs>(args?: Prisma.SelectSubset<T, lineanominaFindFirstArgs<ExtArgs>>): Prisma.Prisma__lineanominaClient<runtime.Types.Result.GetResult<Prisma.$lineanominaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Lineanomina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lineanominaFindFirstOrThrowArgs} args - Arguments to find a Lineanomina
     * @example
     * // Get one Lineanomina
     * const lineanomina = await prisma.lineanomina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends lineanominaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, lineanominaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__lineanominaClient<runtime.Types.Result.GetResult<Prisma.$lineanominaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Lineanominas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lineanominaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lineanominas
     * const lineanominas = await prisma.lineanomina.findMany()
     *
     * // Get first 10 Lineanominas
     * const lineanominas = await prisma.lineanomina.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const lineanominaWithIdOnly = await prisma.lineanomina.findMany({ select: { id: true } })
     *
     */
    findMany<T extends lineanominaFindManyArgs>(args?: Prisma.SelectSubset<T, lineanominaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lineanominaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Lineanomina.
     * @param {lineanominaCreateArgs} args - Arguments to create a Lineanomina.
     * @example
     * // Create one Lineanomina
     * const Lineanomina = await prisma.lineanomina.create({
     *   data: {
     *     // ... data to create a Lineanomina
     *   }
     * })
     *
     */
    create<T extends lineanominaCreateArgs>(args: Prisma.SelectSubset<T, lineanominaCreateArgs<ExtArgs>>): Prisma.Prisma__lineanominaClient<runtime.Types.Result.GetResult<Prisma.$lineanominaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Lineanominas.
     * @param {lineanominaCreateManyArgs} args - Arguments to create many Lineanominas.
     * @example
     * // Create many Lineanominas
     * const lineanomina = await prisma.lineanomina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends lineanominaCreateManyArgs>(args?: Prisma.SelectSubset<T, lineanominaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Lineanomina.
     * @param {lineanominaDeleteArgs} args - Arguments to delete one Lineanomina.
     * @example
     * // Delete one Lineanomina
     * const Lineanomina = await prisma.lineanomina.delete({
     *   where: {
     *     // ... filter to delete one Lineanomina
     *   }
     * })
     *
     */
    delete<T extends lineanominaDeleteArgs>(args: Prisma.SelectSubset<T, lineanominaDeleteArgs<ExtArgs>>): Prisma.Prisma__lineanominaClient<runtime.Types.Result.GetResult<Prisma.$lineanominaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Lineanomina.
     * @param {lineanominaUpdateArgs} args - Arguments to update one Lineanomina.
     * @example
     * // Update one Lineanomina
     * const lineanomina = await prisma.lineanomina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends lineanominaUpdateArgs>(args: Prisma.SelectSubset<T, lineanominaUpdateArgs<ExtArgs>>): Prisma.Prisma__lineanominaClient<runtime.Types.Result.GetResult<Prisma.$lineanominaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Lineanominas.
     * @param {lineanominaDeleteManyArgs} args - Arguments to filter Lineanominas to delete.
     * @example
     * // Delete a few Lineanominas
     * const { count } = await prisma.lineanomina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends lineanominaDeleteManyArgs>(args?: Prisma.SelectSubset<T, lineanominaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Lineanominas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lineanominaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lineanominas
     * const lineanomina = await prisma.lineanomina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends lineanominaUpdateManyArgs>(args: Prisma.SelectSubset<T, lineanominaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Lineanomina.
     * @param {lineanominaUpsertArgs} args - Arguments to update or create a Lineanomina.
     * @example
     * // Update or create a Lineanomina
     * const lineanomina = await prisma.lineanomina.upsert({
     *   create: {
     *     // ... data to create a Lineanomina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lineanomina we want to update
     *   }
     * })
     */
    upsert<T extends lineanominaUpsertArgs>(args: Prisma.SelectSubset<T, lineanominaUpsertArgs<ExtArgs>>): Prisma.Prisma__lineanominaClient<runtime.Types.Result.GetResult<Prisma.$lineanominaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Lineanominas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lineanominaCountArgs} args - Arguments to filter Lineanominas to count.
     * @example
     * // Count the number of Lineanominas
     * const count = await prisma.lineanomina.count({
     *   where: {
     *     // ... the filter for the Lineanominas we want to count
     *   }
     * })
    **/
    count<T extends lineanominaCountArgs>(args?: Prisma.Subset<T, lineanominaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LineanominaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Lineanomina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LineanominaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LineanominaAggregateArgs>(args: Prisma.Subset<T, LineanominaAggregateArgs>): Prisma.PrismaPromise<GetLineanominaAggregateType<T>>;
    /**
     * Group by Lineanomina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {lineanominaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends lineanominaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: lineanominaGroupByArgs['orderBy'];
    } : {
        orderBy?: lineanominaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, lineanominaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLineanominaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the lineanomina model
     */
    readonly fields: lineanominaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for lineanomina.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__lineanominaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    nomina<T extends Prisma.nominaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.nominaDefaultArgs<ExtArgs>>): Prisma.Prisma__nominaClient<runtime.Types.Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the lineanomina model
 */
export interface lineanominaFieldRefs {
    readonly id: Prisma.FieldRef<"lineanomina", 'String'>;
    readonly nominaId: Prisma.FieldRef<"lineanomina", 'String'>;
    readonly tipo: Prisma.FieldRef<"lineanomina", 'lineanomina_tipo'>;
    readonly descripcion: Prisma.FieldRef<"lineanomina", 'String'>;
    readonly importe: Prisma.FieldRef<"lineanomina", 'Decimal'>;
    readonly createdAt: Prisma.FieldRef<"lineanomina", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"lineanomina", 'DateTime'>;
}
/**
 * lineanomina findUnique
 */
export type lineanominaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineanomina
     */
    select?: Prisma.lineanominaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineanomina
     */
    omit?: Prisma.lineanominaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineanominaInclude<ExtArgs> | null;
    /**
     * Filter, which lineanomina to fetch.
     */
    where: Prisma.lineanominaWhereUniqueInput;
};
/**
 * lineanomina findUniqueOrThrow
 */
export type lineanominaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineanomina
     */
    select?: Prisma.lineanominaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineanomina
     */
    omit?: Prisma.lineanominaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineanominaInclude<ExtArgs> | null;
    /**
     * Filter, which lineanomina to fetch.
     */
    where: Prisma.lineanominaWhereUniqueInput;
};
/**
 * lineanomina findFirst
 */
export type lineanominaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineanomina
     */
    select?: Prisma.lineanominaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineanomina
     */
    omit?: Prisma.lineanominaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineanominaInclude<ExtArgs> | null;
    /**
     * Filter, which lineanomina to fetch.
     */
    where?: Prisma.lineanominaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lineanominas to fetch.
     */
    orderBy?: Prisma.lineanominaOrderByWithRelationInput | Prisma.lineanominaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for lineanominas.
     */
    cursor?: Prisma.lineanominaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lineanominas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lineanominas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of lineanominas.
     */
    distinct?: Prisma.LineanominaScalarFieldEnum | Prisma.LineanominaScalarFieldEnum[];
};
/**
 * lineanomina findFirstOrThrow
 */
export type lineanominaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineanomina
     */
    select?: Prisma.lineanominaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineanomina
     */
    omit?: Prisma.lineanominaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineanominaInclude<ExtArgs> | null;
    /**
     * Filter, which lineanomina to fetch.
     */
    where?: Prisma.lineanominaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lineanominas to fetch.
     */
    orderBy?: Prisma.lineanominaOrderByWithRelationInput | Prisma.lineanominaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for lineanominas.
     */
    cursor?: Prisma.lineanominaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lineanominas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lineanominas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of lineanominas.
     */
    distinct?: Prisma.LineanominaScalarFieldEnum | Prisma.LineanominaScalarFieldEnum[];
};
/**
 * lineanomina findMany
 */
export type lineanominaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineanomina
     */
    select?: Prisma.lineanominaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineanomina
     */
    omit?: Prisma.lineanominaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineanominaInclude<ExtArgs> | null;
    /**
     * Filter, which lineanominas to fetch.
     */
    where?: Prisma.lineanominaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of lineanominas to fetch.
     */
    orderBy?: Prisma.lineanominaOrderByWithRelationInput | Prisma.lineanominaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing lineanominas.
     */
    cursor?: Prisma.lineanominaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` lineanominas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` lineanominas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of lineanominas.
     */
    distinct?: Prisma.LineanominaScalarFieldEnum | Prisma.LineanominaScalarFieldEnum[];
};
/**
 * lineanomina create
 */
export type lineanominaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineanomina
     */
    select?: Prisma.lineanominaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineanomina
     */
    omit?: Prisma.lineanominaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineanominaInclude<ExtArgs> | null;
    /**
     * The data needed to create a lineanomina.
     */
    data: Prisma.XOR<Prisma.lineanominaCreateInput, Prisma.lineanominaUncheckedCreateInput>;
};
/**
 * lineanomina createMany
 */
export type lineanominaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many lineanominas.
     */
    data: Prisma.lineanominaCreateManyInput | Prisma.lineanominaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * lineanomina update
 */
export type lineanominaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineanomina
     */
    select?: Prisma.lineanominaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineanomina
     */
    omit?: Prisma.lineanominaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineanominaInclude<ExtArgs> | null;
    /**
     * The data needed to update a lineanomina.
     */
    data: Prisma.XOR<Prisma.lineanominaUpdateInput, Prisma.lineanominaUncheckedUpdateInput>;
    /**
     * Choose, which lineanomina to update.
     */
    where: Prisma.lineanominaWhereUniqueInput;
};
/**
 * lineanomina updateMany
 */
export type lineanominaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update lineanominas.
     */
    data: Prisma.XOR<Prisma.lineanominaUpdateManyMutationInput, Prisma.lineanominaUncheckedUpdateManyInput>;
    /**
     * Filter which lineanominas to update
     */
    where?: Prisma.lineanominaWhereInput;
    /**
     * Limit how many lineanominas to update.
     */
    limit?: number;
};
/**
 * lineanomina upsert
 */
export type lineanominaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineanomina
     */
    select?: Prisma.lineanominaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineanomina
     */
    omit?: Prisma.lineanominaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineanominaInclude<ExtArgs> | null;
    /**
     * The filter to search for the lineanomina to update in case it exists.
     */
    where: Prisma.lineanominaWhereUniqueInput;
    /**
     * In case the lineanomina found by the `where` argument doesn't exist, create a new lineanomina with this data.
     */
    create: Prisma.XOR<Prisma.lineanominaCreateInput, Prisma.lineanominaUncheckedCreateInput>;
    /**
     * In case the lineanomina was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.lineanominaUpdateInput, Prisma.lineanominaUncheckedUpdateInput>;
};
/**
 * lineanomina delete
 */
export type lineanominaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineanomina
     */
    select?: Prisma.lineanominaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineanomina
     */
    omit?: Prisma.lineanominaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineanominaInclude<ExtArgs> | null;
    /**
     * Filter which lineanomina to delete.
     */
    where: Prisma.lineanominaWhereUniqueInput;
};
/**
 * lineanomina deleteMany
 */
export type lineanominaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which lineanominas to delete
     */
    where?: Prisma.lineanominaWhereInput;
    /**
     * Limit how many lineanominas to delete.
     */
    limit?: number;
};
/**
 * lineanomina without action
 */
export type lineanominaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineanomina
     */
    select?: Prisma.lineanominaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineanomina
     */
    omit?: Prisma.lineanominaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.lineanominaInclude<ExtArgs> | null;
};
//# sourceMappingURL=lineanomina.d.ts.map