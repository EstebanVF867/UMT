import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model lineareparto
 *
 */
export type linearepartoModel = runtime.Types.Result.DefaultSelection<Prisma.$linearepartoPayload>;
export type AggregateLineareparto = {
    _count: LinearepartoCountAggregateOutputType | null;
    _avg: LinearepartoAvgAggregateOutputType | null;
    _sum: LinearepartoSumAggregateOutputType | null;
    _min: LinearepartoMinAggregateOutputType | null;
    _max: LinearepartoMaxAggregateOutputType | null;
};
export type LinearepartoAvgAggregateOutputType = {
    actuacionesComputadas: number | null;
    importeBruto: runtime.Decimal | null;
    porcentajeUMT: runtime.Decimal | null;
    complementos: runtime.Decimal | null;
    deducciones: runtime.Decimal | null;
    importeFinal: runtime.Decimal | null;
};
export type LinearepartoSumAggregateOutputType = {
    actuacionesComputadas: number | null;
    importeBruto: runtime.Decimal | null;
    porcentajeUMT: runtime.Decimal | null;
    complementos: runtime.Decimal | null;
    deducciones: runtime.Decimal | null;
    importeFinal: runtime.Decimal | null;
};
export type LinearepartoMinAggregateOutputType = {
    id: string | null;
    repartoId: string | null;
    musicoId: string | null;
    actuacionesComputadas: number | null;
    importeBruto: runtime.Decimal | null;
    porcentajeUMT: runtime.Decimal | null;
    complementos: runtime.Decimal | null;
    deducciones: runtime.Decimal | null;
    importeFinal: runtime.Decimal | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LinearepartoMaxAggregateOutputType = {
    id: string | null;
    repartoId: string | null;
    musicoId: string | null;
    actuacionesComputadas: number | null;
    importeBruto: runtime.Decimal | null;
    porcentajeUMT: runtime.Decimal | null;
    complementos: runtime.Decimal | null;
    deducciones: runtime.Decimal | null;
    importeFinal: runtime.Decimal | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LinearepartoCountAggregateOutputType = {
    id: number;
    repartoId: number;
    musicoId: number;
    actuacionesComputadas: number;
    importeBruto: number;
    porcentajeUMT: number;
    complementos: number;
    deducciones: number;
    importeFinal: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LinearepartoAvgAggregateInputType = {
    actuacionesComputadas?: true;
    importeBruto?: true;
    porcentajeUMT?: true;
    complementos?: true;
    deducciones?: true;
    importeFinal?: true;
};
export type LinearepartoSumAggregateInputType = {
    actuacionesComputadas?: true;
    importeBruto?: true;
    porcentajeUMT?: true;
    complementos?: true;
    deducciones?: true;
    importeFinal?: true;
};
export type LinearepartoMinAggregateInputType = {
    id?: true;
    repartoId?: true;
    musicoId?: true;
    actuacionesComputadas?: true;
    importeBruto?: true;
    porcentajeUMT?: true;
    complementos?: true;
    deducciones?: true;
    importeFinal?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LinearepartoMaxAggregateInputType = {
    id?: true;
    repartoId?: true;
    musicoId?: true;
    actuacionesComputadas?: true;
    importeBruto?: true;
    porcentajeUMT?: true;
    complementos?: true;
    deducciones?: true;
    importeFinal?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LinearepartoCountAggregateInputType = {
    id?: true;
    repartoId?: true;
    musicoId?: true;
    actuacionesComputadas?: true;
    importeBruto?: true;
    porcentajeUMT?: true;
    complementos?: true;
    deducciones?: true;
    importeFinal?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LinearepartoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which lineareparto to aggregate.
     */
    where?: Prisma.linearepartoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of linearepartos to fetch.
     */
    orderBy?: Prisma.linearepartoOrderByWithRelationInput | Prisma.linearepartoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.linearepartoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` linearepartos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` linearepartos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned linearepartos
    **/
    _count?: true | LinearepartoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: LinearepartoAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: LinearepartoSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: LinearepartoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: LinearepartoMaxAggregateInputType;
};
export type GetLinearepartoAggregateType<T extends LinearepartoAggregateArgs> = {
    [P in keyof T & keyof AggregateLineareparto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLineareparto[P]> : Prisma.GetScalarType<T[P], AggregateLineareparto[P]>;
};
export type linearepartoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.linearepartoWhereInput;
    orderBy?: Prisma.linearepartoOrderByWithAggregationInput | Prisma.linearepartoOrderByWithAggregationInput[];
    by: Prisma.LinearepartoScalarFieldEnum[] | Prisma.LinearepartoScalarFieldEnum;
    having?: Prisma.linearepartoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LinearepartoCountAggregateInputType | true;
    _avg?: LinearepartoAvgAggregateInputType;
    _sum?: LinearepartoSumAggregateInputType;
    _min?: LinearepartoMinAggregateInputType;
    _max?: LinearepartoMaxAggregateInputType;
};
export type LinearepartoGroupByOutputType = {
    id: string;
    repartoId: string;
    musicoId: string;
    actuacionesComputadas: number;
    importeBruto: runtime.Decimal;
    porcentajeUMT: runtime.Decimal;
    complementos: runtime.Decimal;
    deducciones: runtime.Decimal;
    importeFinal: runtime.Decimal;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: LinearepartoCountAggregateOutputType | null;
    _avg: LinearepartoAvgAggregateOutputType | null;
    _sum: LinearepartoSumAggregateOutputType | null;
    _min: LinearepartoMinAggregateOutputType | null;
    _max: LinearepartoMaxAggregateOutputType | null;
};
export type GetLinearepartoGroupByPayload<T extends linearepartoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LinearepartoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LinearepartoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LinearepartoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LinearepartoGroupByOutputType[P]>;
}>>;
export type linearepartoWhereInput = {
    AND?: Prisma.linearepartoWhereInput | Prisma.linearepartoWhereInput[];
    OR?: Prisma.linearepartoWhereInput[];
    NOT?: Prisma.linearepartoWhereInput | Prisma.linearepartoWhereInput[];
    id?: Prisma.StringFilter<"lineareparto"> | string;
    repartoId?: Prisma.StringFilter<"lineareparto"> | string;
    musicoId?: Prisma.StringFilter<"lineareparto"> | string;
    actuacionesComputadas?: Prisma.IntFilter<"lineareparto"> | number;
    importeBruto?: Prisma.DecimalFilter<"lineareparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT?: Prisma.DecimalFilter<"lineareparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: Prisma.DecimalFilter<"lineareparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: Prisma.DecimalFilter<"lineareparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFilter<"lineareparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.StringNullableFilter<"lineareparto"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"lineareparto"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"lineareparto"> | Date | string;
    musico?: Prisma.XOR<Prisma.MusicoScalarRelationFilter, Prisma.musicoWhereInput>;
    reparto?: Prisma.XOR<Prisma.RepartoScalarRelationFilter, Prisma.repartoWhereInput>;
};
export type linearepartoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    repartoId?: Prisma.SortOrder;
    musicoId?: Prisma.SortOrder;
    actuacionesComputadas?: Prisma.SortOrder;
    importeBruto?: Prisma.SortOrder;
    porcentajeUMT?: Prisma.SortOrder;
    complementos?: Prisma.SortOrder;
    deducciones?: Prisma.SortOrder;
    importeFinal?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    musico?: Prisma.musicoOrderByWithRelationInput;
    reparto?: Prisma.repartoOrderByWithRelationInput;
    _relevance?: Prisma.linearepartoOrderByRelevanceInput;
};
export type linearepartoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    repartoId_musicoId?: Prisma.linearepartoRepartoIdMusicoIdCompoundUniqueInput;
    AND?: Prisma.linearepartoWhereInput | Prisma.linearepartoWhereInput[];
    OR?: Prisma.linearepartoWhereInput[];
    NOT?: Prisma.linearepartoWhereInput | Prisma.linearepartoWhereInput[];
    repartoId?: Prisma.StringFilter<"lineareparto"> | string;
    musicoId?: Prisma.StringFilter<"lineareparto"> | string;
    actuacionesComputadas?: Prisma.IntFilter<"lineareparto"> | number;
    importeBruto?: Prisma.DecimalFilter<"lineareparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT?: Prisma.DecimalFilter<"lineareparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: Prisma.DecimalFilter<"lineareparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: Prisma.DecimalFilter<"lineareparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFilter<"lineareparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.StringNullableFilter<"lineareparto"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"lineareparto"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"lineareparto"> | Date | string;
    musico?: Prisma.XOR<Prisma.MusicoScalarRelationFilter, Prisma.musicoWhereInput>;
    reparto?: Prisma.XOR<Prisma.RepartoScalarRelationFilter, Prisma.repartoWhereInput>;
}, "id" | "repartoId_musicoId">;
export type linearepartoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    repartoId?: Prisma.SortOrder;
    musicoId?: Prisma.SortOrder;
    actuacionesComputadas?: Prisma.SortOrder;
    importeBruto?: Prisma.SortOrder;
    porcentajeUMT?: Prisma.SortOrder;
    complementos?: Prisma.SortOrder;
    deducciones?: Prisma.SortOrder;
    importeFinal?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.linearepartoCountOrderByAggregateInput;
    _avg?: Prisma.linearepartoAvgOrderByAggregateInput;
    _max?: Prisma.linearepartoMaxOrderByAggregateInput;
    _min?: Prisma.linearepartoMinOrderByAggregateInput;
    _sum?: Prisma.linearepartoSumOrderByAggregateInput;
};
export type linearepartoScalarWhereWithAggregatesInput = {
    AND?: Prisma.linearepartoScalarWhereWithAggregatesInput | Prisma.linearepartoScalarWhereWithAggregatesInput[];
    OR?: Prisma.linearepartoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.linearepartoScalarWhereWithAggregatesInput | Prisma.linearepartoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"lineareparto"> | string;
    repartoId?: Prisma.StringWithAggregatesFilter<"lineareparto"> | string;
    musicoId?: Prisma.StringWithAggregatesFilter<"lineareparto"> | string;
    actuacionesComputadas?: Prisma.IntWithAggregatesFilter<"lineareparto"> | number;
    importeBruto?: Prisma.DecimalWithAggregatesFilter<"lineareparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT?: Prisma.DecimalWithAggregatesFilter<"lineareparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: Prisma.DecimalWithAggregatesFilter<"lineareparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: Prisma.DecimalWithAggregatesFilter<"lineareparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalWithAggregatesFilter<"lineareparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"lineareparto"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"lineareparto"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"lineareparto"> | Date | string;
};
export type linearepartoCreateInput = {
    id: string;
    actuacionesComputadas: number;
    importeBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT: runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    musico: Prisma.musicoCreateNestedOneWithoutLinearepartoInput;
    reparto: Prisma.repartoCreateNestedOneWithoutLinearepartoInput;
};
export type linearepartoUncheckedCreateInput = {
    id: string;
    repartoId: string;
    musicoId: string;
    actuacionesComputadas: number;
    importeBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT: runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type linearepartoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actuacionesComputadas?: Prisma.IntFieldUpdateOperationsInput | number;
    importeBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    musico?: Prisma.musicoUpdateOneRequiredWithoutLinearepartoNestedInput;
    reparto?: Prisma.repartoUpdateOneRequiredWithoutLinearepartoNestedInput;
};
export type linearepartoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repartoId?: Prisma.StringFieldUpdateOperationsInput | string;
    musicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    actuacionesComputadas?: Prisma.IntFieldUpdateOperationsInput | number;
    importeBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type linearepartoCreateManyInput = {
    id: string;
    repartoId: string;
    musicoId: string;
    actuacionesComputadas: number;
    importeBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT: runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type linearepartoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actuacionesComputadas?: Prisma.IntFieldUpdateOperationsInput | number;
    importeBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type linearepartoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repartoId?: Prisma.StringFieldUpdateOperationsInput | string;
    musicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    actuacionesComputadas?: Prisma.IntFieldUpdateOperationsInput | number;
    importeBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type linearepartoOrderByRelevanceInput = {
    fields: Prisma.linearepartoOrderByRelevanceFieldEnum | Prisma.linearepartoOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type linearepartoRepartoIdMusicoIdCompoundUniqueInput = {
    repartoId: string;
    musicoId: string;
};
export type linearepartoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    repartoId?: Prisma.SortOrder;
    musicoId?: Prisma.SortOrder;
    actuacionesComputadas?: Prisma.SortOrder;
    importeBruto?: Prisma.SortOrder;
    porcentajeUMT?: Prisma.SortOrder;
    complementos?: Prisma.SortOrder;
    deducciones?: Prisma.SortOrder;
    importeFinal?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type linearepartoAvgOrderByAggregateInput = {
    actuacionesComputadas?: Prisma.SortOrder;
    importeBruto?: Prisma.SortOrder;
    porcentajeUMT?: Prisma.SortOrder;
    complementos?: Prisma.SortOrder;
    deducciones?: Prisma.SortOrder;
    importeFinal?: Prisma.SortOrder;
};
export type linearepartoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    repartoId?: Prisma.SortOrder;
    musicoId?: Prisma.SortOrder;
    actuacionesComputadas?: Prisma.SortOrder;
    importeBruto?: Prisma.SortOrder;
    porcentajeUMT?: Prisma.SortOrder;
    complementos?: Prisma.SortOrder;
    deducciones?: Prisma.SortOrder;
    importeFinal?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type linearepartoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    repartoId?: Prisma.SortOrder;
    musicoId?: Prisma.SortOrder;
    actuacionesComputadas?: Prisma.SortOrder;
    importeBruto?: Prisma.SortOrder;
    porcentajeUMT?: Prisma.SortOrder;
    complementos?: Prisma.SortOrder;
    deducciones?: Prisma.SortOrder;
    importeFinal?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type linearepartoSumOrderByAggregateInput = {
    actuacionesComputadas?: Prisma.SortOrder;
    importeBruto?: Prisma.SortOrder;
    porcentajeUMT?: Prisma.SortOrder;
    complementos?: Prisma.SortOrder;
    deducciones?: Prisma.SortOrder;
    importeFinal?: Prisma.SortOrder;
};
export type LinearepartoListRelationFilter = {
    every?: Prisma.linearepartoWhereInput;
    some?: Prisma.linearepartoWhereInput;
    none?: Prisma.linearepartoWhereInput;
};
export type linearepartoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type linearepartoCreateNestedManyWithoutMusicoInput = {
    create?: Prisma.XOR<Prisma.linearepartoCreateWithoutMusicoInput, Prisma.linearepartoUncheckedCreateWithoutMusicoInput> | Prisma.linearepartoCreateWithoutMusicoInput[] | Prisma.linearepartoUncheckedCreateWithoutMusicoInput[];
    connectOrCreate?: Prisma.linearepartoCreateOrConnectWithoutMusicoInput | Prisma.linearepartoCreateOrConnectWithoutMusicoInput[];
    createMany?: Prisma.linearepartoCreateManyMusicoInputEnvelope;
    connect?: Prisma.linearepartoWhereUniqueInput | Prisma.linearepartoWhereUniqueInput[];
};
export type linearepartoUncheckedCreateNestedManyWithoutMusicoInput = {
    create?: Prisma.XOR<Prisma.linearepartoCreateWithoutMusicoInput, Prisma.linearepartoUncheckedCreateWithoutMusicoInput> | Prisma.linearepartoCreateWithoutMusicoInput[] | Prisma.linearepartoUncheckedCreateWithoutMusicoInput[];
    connectOrCreate?: Prisma.linearepartoCreateOrConnectWithoutMusicoInput | Prisma.linearepartoCreateOrConnectWithoutMusicoInput[];
    createMany?: Prisma.linearepartoCreateManyMusicoInputEnvelope;
    connect?: Prisma.linearepartoWhereUniqueInput | Prisma.linearepartoWhereUniqueInput[];
};
export type linearepartoUpdateManyWithoutMusicoNestedInput = {
    create?: Prisma.XOR<Prisma.linearepartoCreateWithoutMusicoInput, Prisma.linearepartoUncheckedCreateWithoutMusicoInput> | Prisma.linearepartoCreateWithoutMusicoInput[] | Prisma.linearepartoUncheckedCreateWithoutMusicoInput[];
    connectOrCreate?: Prisma.linearepartoCreateOrConnectWithoutMusicoInput | Prisma.linearepartoCreateOrConnectWithoutMusicoInput[];
    upsert?: Prisma.linearepartoUpsertWithWhereUniqueWithoutMusicoInput | Prisma.linearepartoUpsertWithWhereUniqueWithoutMusicoInput[];
    createMany?: Prisma.linearepartoCreateManyMusicoInputEnvelope;
    set?: Prisma.linearepartoWhereUniqueInput | Prisma.linearepartoWhereUniqueInput[];
    disconnect?: Prisma.linearepartoWhereUniqueInput | Prisma.linearepartoWhereUniqueInput[];
    delete?: Prisma.linearepartoWhereUniqueInput | Prisma.linearepartoWhereUniqueInput[];
    connect?: Prisma.linearepartoWhereUniqueInput | Prisma.linearepartoWhereUniqueInput[];
    update?: Prisma.linearepartoUpdateWithWhereUniqueWithoutMusicoInput | Prisma.linearepartoUpdateWithWhereUniqueWithoutMusicoInput[];
    updateMany?: Prisma.linearepartoUpdateManyWithWhereWithoutMusicoInput | Prisma.linearepartoUpdateManyWithWhereWithoutMusicoInput[];
    deleteMany?: Prisma.linearepartoScalarWhereInput | Prisma.linearepartoScalarWhereInput[];
};
export type linearepartoUncheckedUpdateManyWithoutMusicoNestedInput = {
    create?: Prisma.XOR<Prisma.linearepartoCreateWithoutMusicoInput, Prisma.linearepartoUncheckedCreateWithoutMusicoInput> | Prisma.linearepartoCreateWithoutMusicoInput[] | Prisma.linearepartoUncheckedCreateWithoutMusicoInput[];
    connectOrCreate?: Prisma.linearepartoCreateOrConnectWithoutMusicoInput | Prisma.linearepartoCreateOrConnectWithoutMusicoInput[];
    upsert?: Prisma.linearepartoUpsertWithWhereUniqueWithoutMusicoInput | Prisma.linearepartoUpsertWithWhereUniqueWithoutMusicoInput[];
    createMany?: Prisma.linearepartoCreateManyMusicoInputEnvelope;
    set?: Prisma.linearepartoWhereUniqueInput | Prisma.linearepartoWhereUniqueInput[];
    disconnect?: Prisma.linearepartoWhereUniqueInput | Prisma.linearepartoWhereUniqueInput[];
    delete?: Prisma.linearepartoWhereUniqueInput | Prisma.linearepartoWhereUniqueInput[];
    connect?: Prisma.linearepartoWhereUniqueInput | Prisma.linearepartoWhereUniqueInput[];
    update?: Prisma.linearepartoUpdateWithWhereUniqueWithoutMusicoInput | Prisma.linearepartoUpdateWithWhereUniqueWithoutMusicoInput[];
    updateMany?: Prisma.linearepartoUpdateManyWithWhereWithoutMusicoInput | Prisma.linearepartoUpdateManyWithWhereWithoutMusicoInput[];
    deleteMany?: Prisma.linearepartoScalarWhereInput | Prisma.linearepartoScalarWhereInput[];
};
export type linearepartoCreateNestedManyWithoutRepartoInput = {
    create?: Prisma.XOR<Prisma.linearepartoCreateWithoutRepartoInput, Prisma.linearepartoUncheckedCreateWithoutRepartoInput> | Prisma.linearepartoCreateWithoutRepartoInput[] | Prisma.linearepartoUncheckedCreateWithoutRepartoInput[];
    connectOrCreate?: Prisma.linearepartoCreateOrConnectWithoutRepartoInput | Prisma.linearepartoCreateOrConnectWithoutRepartoInput[];
    createMany?: Prisma.linearepartoCreateManyRepartoInputEnvelope;
    connect?: Prisma.linearepartoWhereUniqueInput | Prisma.linearepartoWhereUniqueInput[];
};
export type linearepartoUncheckedCreateNestedManyWithoutRepartoInput = {
    create?: Prisma.XOR<Prisma.linearepartoCreateWithoutRepartoInput, Prisma.linearepartoUncheckedCreateWithoutRepartoInput> | Prisma.linearepartoCreateWithoutRepartoInput[] | Prisma.linearepartoUncheckedCreateWithoutRepartoInput[];
    connectOrCreate?: Prisma.linearepartoCreateOrConnectWithoutRepartoInput | Prisma.linearepartoCreateOrConnectWithoutRepartoInput[];
    createMany?: Prisma.linearepartoCreateManyRepartoInputEnvelope;
    connect?: Prisma.linearepartoWhereUniqueInput | Prisma.linearepartoWhereUniqueInput[];
};
export type linearepartoUpdateManyWithoutRepartoNestedInput = {
    create?: Prisma.XOR<Prisma.linearepartoCreateWithoutRepartoInput, Prisma.linearepartoUncheckedCreateWithoutRepartoInput> | Prisma.linearepartoCreateWithoutRepartoInput[] | Prisma.linearepartoUncheckedCreateWithoutRepartoInput[];
    connectOrCreate?: Prisma.linearepartoCreateOrConnectWithoutRepartoInput | Prisma.linearepartoCreateOrConnectWithoutRepartoInput[];
    upsert?: Prisma.linearepartoUpsertWithWhereUniqueWithoutRepartoInput | Prisma.linearepartoUpsertWithWhereUniqueWithoutRepartoInput[];
    createMany?: Prisma.linearepartoCreateManyRepartoInputEnvelope;
    set?: Prisma.linearepartoWhereUniqueInput | Prisma.linearepartoWhereUniqueInput[];
    disconnect?: Prisma.linearepartoWhereUniqueInput | Prisma.linearepartoWhereUniqueInput[];
    delete?: Prisma.linearepartoWhereUniqueInput | Prisma.linearepartoWhereUniqueInput[];
    connect?: Prisma.linearepartoWhereUniqueInput | Prisma.linearepartoWhereUniqueInput[];
    update?: Prisma.linearepartoUpdateWithWhereUniqueWithoutRepartoInput | Prisma.linearepartoUpdateWithWhereUniqueWithoutRepartoInput[];
    updateMany?: Prisma.linearepartoUpdateManyWithWhereWithoutRepartoInput | Prisma.linearepartoUpdateManyWithWhereWithoutRepartoInput[];
    deleteMany?: Prisma.linearepartoScalarWhereInput | Prisma.linearepartoScalarWhereInput[];
};
export type linearepartoUncheckedUpdateManyWithoutRepartoNestedInput = {
    create?: Prisma.XOR<Prisma.linearepartoCreateWithoutRepartoInput, Prisma.linearepartoUncheckedCreateWithoutRepartoInput> | Prisma.linearepartoCreateWithoutRepartoInput[] | Prisma.linearepartoUncheckedCreateWithoutRepartoInput[];
    connectOrCreate?: Prisma.linearepartoCreateOrConnectWithoutRepartoInput | Prisma.linearepartoCreateOrConnectWithoutRepartoInput[];
    upsert?: Prisma.linearepartoUpsertWithWhereUniqueWithoutRepartoInput | Prisma.linearepartoUpsertWithWhereUniqueWithoutRepartoInput[];
    createMany?: Prisma.linearepartoCreateManyRepartoInputEnvelope;
    set?: Prisma.linearepartoWhereUniqueInput | Prisma.linearepartoWhereUniqueInput[];
    disconnect?: Prisma.linearepartoWhereUniqueInput | Prisma.linearepartoWhereUniqueInput[];
    delete?: Prisma.linearepartoWhereUniqueInput | Prisma.linearepartoWhereUniqueInput[];
    connect?: Prisma.linearepartoWhereUniqueInput | Prisma.linearepartoWhereUniqueInput[];
    update?: Prisma.linearepartoUpdateWithWhereUniqueWithoutRepartoInput | Prisma.linearepartoUpdateWithWhereUniqueWithoutRepartoInput[];
    updateMany?: Prisma.linearepartoUpdateManyWithWhereWithoutRepartoInput | Prisma.linearepartoUpdateManyWithWhereWithoutRepartoInput[];
    deleteMany?: Prisma.linearepartoScalarWhereInput | Prisma.linearepartoScalarWhereInput[];
};
export type linearepartoCreateWithoutMusicoInput = {
    id: string;
    actuacionesComputadas: number;
    importeBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT: runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    reparto: Prisma.repartoCreateNestedOneWithoutLinearepartoInput;
};
export type linearepartoUncheckedCreateWithoutMusicoInput = {
    id: string;
    repartoId: string;
    actuacionesComputadas: number;
    importeBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT: runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type linearepartoCreateOrConnectWithoutMusicoInput = {
    where: Prisma.linearepartoWhereUniqueInput;
    create: Prisma.XOR<Prisma.linearepartoCreateWithoutMusicoInput, Prisma.linearepartoUncheckedCreateWithoutMusicoInput>;
};
export type linearepartoCreateManyMusicoInputEnvelope = {
    data: Prisma.linearepartoCreateManyMusicoInput | Prisma.linearepartoCreateManyMusicoInput[];
    skipDuplicates?: boolean;
};
export type linearepartoUpsertWithWhereUniqueWithoutMusicoInput = {
    where: Prisma.linearepartoWhereUniqueInput;
    update: Prisma.XOR<Prisma.linearepartoUpdateWithoutMusicoInput, Prisma.linearepartoUncheckedUpdateWithoutMusicoInput>;
    create: Prisma.XOR<Prisma.linearepartoCreateWithoutMusicoInput, Prisma.linearepartoUncheckedCreateWithoutMusicoInput>;
};
export type linearepartoUpdateWithWhereUniqueWithoutMusicoInput = {
    where: Prisma.linearepartoWhereUniqueInput;
    data: Prisma.XOR<Prisma.linearepartoUpdateWithoutMusicoInput, Prisma.linearepartoUncheckedUpdateWithoutMusicoInput>;
};
export type linearepartoUpdateManyWithWhereWithoutMusicoInput = {
    where: Prisma.linearepartoScalarWhereInput;
    data: Prisma.XOR<Prisma.linearepartoUpdateManyMutationInput, Prisma.linearepartoUncheckedUpdateManyWithoutMusicoInput>;
};
export type linearepartoScalarWhereInput = {
    AND?: Prisma.linearepartoScalarWhereInput | Prisma.linearepartoScalarWhereInput[];
    OR?: Prisma.linearepartoScalarWhereInput[];
    NOT?: Prisma.linearepartoScalarWhereInput | Prisma.linearepartoScalarWhereInput[];
    id?: Prisma.StringFilter<"lineareparto"> | string;
    repartoId?: Prisma.StringFilter<"lineareparto"> | string;
    musicoId?: Prisma.StringFilter<"lineareparto"> | string;
    actuacionesComputadas?: Prisma.IntFilter<"lineareparto"> | number;
    importeBruto?: Prisma.DecimalFilter<"lineareparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT?: Prisma.DecimalFilter<"lineareparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: Prisma.DecimalFilter<"lineareparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: Prisma.DecimalFilter<"lineareparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFilter<"lineareparto"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.StringNullableFilter<"lineareparto"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"lineareparto"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"lineareparto"> | Date | string;
};
export type linearepartoCreateWithoutRepartoInput = {
    id: string;
    actuacionesComputadas: number;
    importeBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT: runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    musico: Prisma.musicoCreateNestedOneWithoutLinearepartoInput;
};
export type linearepartoUncheckedCreateWithoutRepartoInput = {
    id: string;
    musicoId: string;
    actuacionesComputadas: number;
    importeBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT: runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type linearepartoCreateOrConnectWithoutRepartoInput = {
    where: Prisma.linearepartoWhereUniqueInput;
    create: Prisma.XOR<Prisma.linearepartoCreateWithoutRepartoInput, Prisma.linearepartoUncheckedCreateWithoutRepartoInput>;
};
export type linearepartoCreateManyRepartoInputEnvelope = {
    data: Prisma.linearepartoCreateManyRepartoInput | Prisma.linearepartoCreateManyRepartoInput[];
    skipDuplicates?: boolean;
};
export type linearepartoUpsertWithWhereUniqueWithoutRepartoInput = {
    where: Prisma.linearepartoWhereUniqueInput;
    update: Prisma.XOR<Prisma.linearepartoUpdateWithoutRepartoInput, Prisma.linearepartoUncheckedUpdateWithoutRepartoInput>;
    create: Prisma.XOR<Prisma.linearepartoCreateWithoutRepartoInput, Prisma.linearepartoUncheckedCreateWithoutRepartoInput>;
};
export type linearepartoUpdateWithWhereUniqueWithoutRepartoInput = {
    where: Prisma.linearepartoWhereUniqueInput;
    data: Prisma.XOR<Prisma.linearepartoUpdateWithoutRepartoInput, Prisma.linearepartoUncheckedUpdateWithoutRepartoInput>;
};
export type linearepartoUpdateManyWithWhereWithoutRepartoInput = {
    where: Prisma.linearepartoScalarWhereInput;
    data: Prisma.XOR<Prisma.linearepartoUpdateManyMutationInput, Prisma.linearepartoUncheckedUpdateManyWithoutRepartoInput>;
};
export type linearepartoCreateManyMusicoInput = {
    id: string;
    repartoId: string;
    actuacionesComputadas: number;
    importeBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT: runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type linearepartoUpdateWithoutMusicoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actuacionesComputadas?: Prisma.IntFieldUpdateOperationsInput | number;
    importeBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reparto?: Prisma.repartoUpdateOneRequiredWithoutLinearepartoNestedInput;
};
export type linearepartoUncheckedUpdateWithoutMusicoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repartoId?: Prisma.StringFieldUpdateOperationsInput | string;
    actuacionesComputadas?: Prisma.IntFieldUpdateOperationsInput | number;
    importeBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type linearepartoUncheckedUpdateManyWithoutMusicoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    repartoId?: Prisma.StringFieldUpdateOperationsInput | string;
    actuacionesComputadas?: Prisma.IntFieldUpdateOperationsInput | number;
    importeBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type linearepartoCreateManyRepartoInput = {
    id: string;
    musicoId: string;
    actuacionesComputadas: number;
    importeBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT: runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type linearepartoUpdateWithoutRepartoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    actuacionesComputadas?: Prisma.IntFieldUpdateOperationsInput | number;
    importeBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    musico?: Prisma.musicoUpdateOneRequiredWithoutLinearepartoNestedInput;
};
export type linearepartoUncheckedUpdateWithoutRepartoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    musicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    actuacionesComputadas?: Prisma.IntFieldUpdateOperationsInput | number;
    importeBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type linearepartoUncheckedUpdateManyWithoutRepartoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    musicoId?: Prisma.StringFieldUpdateOperationsInput | string;
    actuacionesComputadas?: Prisma.IntFieldUpdateOperationsInput | number;
    importeBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    porcentajeUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    complementos?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    deducciones?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type linearepartoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    repartoId?: boolean;
    musicoId?: boolean;
    actuacionesComputadas?: boolean;
    importeBruto?: boolean;
    porcentajeUMT?: boolean;
    complementos?: boolean;
    deducciones?: boolean;
    importeFinal?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    musico?: boolean | Prisma.musicoDefaultArgs<ExtArgs>;
    reparto?: boolean | Prisma.repartoDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["lineareparto"]>;
export type linearepartoSelectScalar = {
    id?: boolean;
    repartoId?: boolean;
    musicoId?: boolean;
    actuacionesComputadas?: boolean;
    importeBruto?: boolean;
    porcentajeUMT?: boolean;
    complementos?: boolean;
    deducciones?: boolean;
    importeFinal?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type linearepartoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "repartoId" | "musicoId" | "actuacionesComputadas" | "importeBruto" | "porcentajeUMT" | "complementos" | "deducciones" | "importeFinal" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["lineareparto"]>;
export type linearepartoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    musico?: boolean | Prisma.musicoDefaultArgs<ExtArgs>;
    reparto?: boolean | Prisma.repartoDefaultArgs<ExtArgs>;
};
export type $linearepartoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "lineareparto";
    objects: {
        musico: Prisma.$musicoPayload<ExtArgs>;
        reparto: Prisma.$repartoPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        repartoId: string;
        musicoId: string;
        actuacionesComputadas: number;
        importeBruto: runtime.Decimal;
        porcentajeUMT: runtime.Decimal;
        complementos: runtime.Decimal;
        deducciones: runtime.Decimal;
        importeFinal: runtime.Decimal;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["lineareparto"]>;
    composites: {};
};
export type linearepartoGetPayload<S extends boolean | null | undefined | linearepartoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$linearepartoPayload, S>;
export type linearepartoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<linearepartoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LinearepartoCountAggregateInputType | true;
};
export interface linearepartoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['lineareparto'];
        meta: {
            name: 'lineareparto';
        };
    };
    /**
     * Find zero or one Lineareparto that matches the filter.
     * @param {linearepartoFindUniqueArgs} args - Arguments to find a Lineareparto
     * @example
     * // Get one Lineareparto
     * const lineareparto = await prisma.lineareparto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends linearepartoFindUniqueArgs>(args: Prisma.SelectSubset<T, linearepartoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__linearepartoClient<runtime.Types.Result.GetResult<Prisma.$linearepartoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Lineareparto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {linearepartoFindUniqueOrThrowArgs} args - Arguments to find a Lineareparto
     * @example
     * // Get one Lineareparto
     * const lineareparto = await prisma.lineareparto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends linearepartoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, linearepartoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__linearepartoClient<runtime.Types.Result.GetResult<Prisma.$linearepartoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Lineareparto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linearepartoFindFirstArgs} args - Arguments to find a Lineareparto
     * @example
     * // Get one Lineareparto
     * const lineareparto = await prisma.lineareparto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends linearepartoFindFirstArgs>(args?: Prisma.SelectSubset<T, linearepartoFindFirstArgs<ExtArgs>>): Prisma.Prisma__linearepartoClient<runtime.Types.Result.GetResult<Prisma.$linearepartoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Lineareparto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linearepartoFindFirstOrThrowArgs} args - Arguments to find a Lineareparto
     * @example
     * // Get one Lineareparto
     * const lineareparto = await prisma.lineareparto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends linearepartoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, linearepartoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__linearepartoClient<runtime.Types.Result.GetResult<Prisma.$linearepartoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Linearepartos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linearepartoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Linearepartos
     * const linearepartos = await prisma.lineareparto.findMany()
     *
     * // Get first 10 Linearepartos
     * const linearepartos = await prisma.lineareparto.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const linearepartoWithIdOnly = await prisma.lineareparto.findMany({ select: { id: true } })
     *
     */
    findMany<T extends linearepartoFindManyArgs>(args?: Prisma.SelectSubset<T, linearepartoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$linearepartoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Lineareparto.
     * @param {linearepartoCreateArgs} args - Arguments to create a Lineareparto.
     * @example
     * // Create one Lineareparto
     * const Lineareparto = await prisma.lineareparto.create({
     *   data: {
     *     // ... data to create a Lineareparto
     *   }
     * })
     *
     */
    create<T extends linearepartoCreateArgs>(args: Prisma.SelectSubset<T, linearepartoCreateArgs<ExtArgs>>): Prisma.Prisma__linearepartoClient<runtime.Types.Result.GetResult<Prisma.$linearepartoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Linearepartos.
     * @param {linearepartoCreateManyArgs} args - Arguments to create many Linearepartos.
     * @example
     * // Create many Linearepartos
     * const lineareparto = await prisma.lineareparto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends linearepartoCreateManyArgs>(args?: Prisma.SelectSubset<T, linearepartoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Lineareparto.
     * @param {linearepartoDeleteArgs} args - Arguments to delete one Lineareparto.
     * @example
     * // Delete one Lineareparto
     * const Lineareparto = await prisma.lineareparto.delete({
     *   where: {
     *     // ... filter to delete one Lineareparto
     *   }
     * })
     *
     */
    delete<T extends linearepartoDeleteArgs>(args: Prisma.SelectSubset<T, linearepartoDeleteArgs<ExtArgs>>): Prisma.Prisma__linearepartoClient<runtime.Types.Result.GetResult<Prisma.$linearepartoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Lineareparto.
     * @param {linearepartoUpdateArgs} args - Arguments to update one Lineareparto.
     * @example
     * // Update one Lineareparto
     * const lineareparto = await prisma.lineareparto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends linearepartoUpdateArgs>(args: Prisma.SelectSubset<T, linearepartoUpdateArgs<ExtArgs>>): Prisma.Prisma__linearepartoClient<runtime.Types.Result.GetResult<Prisma.$linearepartoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Linearepartos.
     * @param {linearepartoDeleteManyArgs} args - Arguments to filter Linearepartos to delete.
     * @example
     * // Delete a few Linearepartos
     * const { count } = await prisma.lineareparto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends linearepartoDeleteManyArgs>(args?: Prisma.SelectSubset<T, linearepartoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Linearepartos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linearepartoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Linearepartos
     * const lineareparto = await prisma.lineareparto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends linearepartoUpdateManyArgs>(args: Prisma.SelectSubset<T, linearepartoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Lineareparto.
     * @param {linearepartoUpsertArgs} args - Arguments to update or create a Lineareparto.
     * @example
     * // Update or create a Lineareparto
     * const lineareparto = await prisma.lineareparto.upsert({
     *   create: {
     *     // ... data to create a Lineareparto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lineareparto we want to update
     *   }
     * })
     */
    upsert<T extends linearepartoUpsertArgs>(args: Prisma.SelectSubset<T, linearepartoUpsertArgs<ExtArgs>>): Prisma.Prisma__linearepartoClient<runtime.Types.Result.GetResult<Prisma.$linearepartoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Linearepartos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linearepartoCountArgs} args - Arguments to filter Linearepartos to count.
     * @example
     * // Count the number of Linearepartos
     * const count = await prisma.lineareparto.count({
     *   where: {
     *     // ... the filter for the Linearepartos we want to count
     *   }
     * })
    **/
    count<T extends linearepartoCountArgs>(args?: Prisma.Subset<T, linearepartoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LinearepartoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Lineareparto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinearepartoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LinearepartoAggregateArgs>(args: Prisma.Subset<T, LinearepartoAggregateArgs>): Prisma.PrismaPromise<GetLinearepartoAggregateType<T>>;
    /**
     * Group by Lineareparto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {linearepartoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends linearepartoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: linearepartoGroupByArgs['orderBy'];
    } : {
        orderBy?: linearepartoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, linearepartoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinearepartoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the lineareparto model
     */
    readonly fields: linearepartoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for lineareparto.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__linearepartoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    musico<T extends Prisma.musicoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.musicoDefaultArgs<ExtArgs>>): Prisma.Prisma__musicoClient<runtime.Types.Result.GetResult<Prisma.$musicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reparto<T extends Prisma.repartoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.repartoDefaultArgs<ExtArgs>>): Prisma.Prisma__repartoClient<runtime.Types.Result.GetResult<Prisma.$repartoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the lineareparto model
 */
export interface linearepartoFieldRefs {
    readonly id: Prisma.FieldRef<"lineareparto", 'String'>;
    readonly repartoId: Prisma.FieldRef<"lineareparto", 'String'>;
    readonly musicoId: Prisma.FieldRef<"lineareparto", 'String'>;
    readonly actuacionesComputadas: Prisma.FieldRef<"lineareparto", 'Int'>;
    readonly importeBruto: Prisma.FieldRef<"lineareparto", 'Decimal'>;
    readonly porcentajeUMT: Prisma.FieldRef<"lineareparto", 'Decimal'>;
    readonly complementos: Prisma.FieldRef<"lineareparto", 'Decimal'>;
    readonly deducciones: Prisma.FieldRef<"lineareparto", 'Decimal'>;
    readonly importeFinal: Prisma.FieldRef<"lineareparto", 'Decimal'>;
    readonly observaciones: Prisma.FieldRef<"lineareparto", 'String'>;
    readonly createdAt: Prisma.FieldRef<"lineareparto", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"lineareparto", 'DateTime'>;
}
/**
 * lineareparto findUnique
 */
export type linearepartoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineareparto
     */
    select?: Prisma.linearepartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineareparto
     */
    omit?: Prisma.linearepartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.linearepartoInclude<ExtArgs> | null;
    /**
     * Filter, which lineareparto to fetch.
     */
    where: Prisma.linearepartoWhereUniqueInput;
};
/**
 * lineareparto findUniqueOrThrow
 */
export type linearepartoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineareparto
     */
    select?: Prisma.linearepartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineareparto
     */
    omit?: Prisma.linearepartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.linearepartoInclude<ExtArgs> | null;
    /**
     * Filter, which lineareparto to fetch.
     */
    where: Prisma.linearepartoWhereUniqueInput;
};
/**
 * lineareparto findFirst
 */
export type linearepartoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineareparto
     */
    select?: Prisma.linearepartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineareparto
     */
    omit?: Prisma.linearepartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.linearepartoInclude<ExtArgs> | null;
    /**
     * Filter, which lineareparto to fetch.
     */
    where?: Prisma.linearepartoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of linearepartos to fetch.
     */
    orderBy?: Prisma.linearepartoOrderByWithRelationInput | Prisma.linearepartoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for linearepartos.
     */
    cursor?: Prisma.linearepartoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` linearepartos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` linearepartos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of linearepartos.
     */
    distinct?: Prisma.LinearepartoScalarFieldEnum | Prisma.LinearepartoScalarFieldEnum[];
};
/**
 * lineareparto findFirstOrThrow
 */
export type linearepartoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineareparto
     */
    select?: Prisma.linearepartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineareparto
     */
    omit?: Prisma.linearepartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.linearepartoInclude<ExtArgs> | null;
    /**
     * Filter, which lineareparto to fetch.
     */
    where?: Prisma.linearepartoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of linearepartos to fetch.
     */
    orderBy?: Prisma.linearepartoOrderByWithRelationInput | Prisma.linearepartoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for linearepartos.
     */
    cursor?: Prisma.linearepartoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` linearepartos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` linearepartos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of linearepartos.
     */
    distinct?: Prisma.LinearepartoScalarFieldEnum | Prisma.LinearepartoScalarFieldEnum[];
};
/**
 * lineareparto findMany
 */
export type linearepartoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineareparto
     */
    select?: Prisma.linearepartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineareparto
     */
    omit?: Prisma.linearepartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.linearepartoInclude<ExtArgs> | null;
    /**
     * Filter, which linearepartos to fetch.
     */
    where?: Prisma.linearepartoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of linearepartos to fetch.
     */
    orderBy?: Prisma.linearepartoOrderByWithRelationInput | Prisma.linearepartoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing linearepartos.
     */
    cursor?: Prisma.linearepartoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` linearepartos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` linearepartos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of linearepartos.
     */
    distinct?: Prisma.LinearepartoScalarFieldEnum | Prisma.LinearepartoScalarFieldEnum[];
};
/**
 * lineareparto create
 */
export type linearepartoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineareparto
     */
    select?: Prisma.linearepartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineareparto
     */
    omit?: Prisma.linearepartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.linearepartoInclude<ExtArgs> | null;
    /**
     * The data needed to create a lineareparto.
     */
    data: Prisma.XOR<Prisma.linearepartoCreateInput, Prisma.linearepartoUncheckedCreateInput>;
};
/**
 * lineareparto createMany
 */
export type linearepartoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many linearepartos.
     */
    data: Prisma.linearepartoCreateManyInput | Prisma.linearepartoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * lineareparto update
 */
export type linearepartoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineareparto
     */
    select?: Prisma.linearepartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineareparto
     */
    omit?: Prisma.linearepartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.linearepartoInclude<ExtArgs> | null;
    /**
     * The data needed to update a lineareparto.
     */
    data: Prisma.XOR<Prisma.linearepartoUpdateInput, Prisma.linearepartoUncheckedUpdateInput>;
    /**
     * Choose, which lineareparto to update.
     */
    where: Prisma.linearepartoWhereUniqueInput;
};
/**
 * lineareparto updateMany
 */
export type linearepartoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update linearepartos.
     */
    data: Prisma.XOR<Prisma.linearepartoUpdateManyMutationInput, Prisma.linearepartoUncheckedUpdateManyInput>;
    /**
     * Filter which linearepartos to update
     */
    where?: Prisma.linearepartoWhereInput;
    /**
     * Limit how many linearepartos to update.
     */
    limit?: number;
};
/**
 * lineareparto upsert
 */
export type linearepartoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineareparto
     */
    select?: Prisma.linearepartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineareparto
     */
    omit?: Prisma.linearepartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.linearepartoInclude<ExtArgs> | null;
    /**
     * The filter to search for the lineareparto to update in case it exists.
     */
    where: Prisma.linearepartoWhereUniqueInput;
    /**
     * In case the lineareparto found by the `where` argument doesn't exist, create a new lineareparto with this data.
     */
    create: Prisma.XOR<Prisma.linearepartoCreateInput, Prisma.linearepartoUncheckedCreateInput>;
    /**
     * In case the lineareparto was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.linearepartoUpdateInput, Prisma.linearepartoUncheckedUpdateInput>;
};
/**
 * lineareparto delete
 */
export type linearepartoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineareparto
     */
    select?: Prisma.linearepartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineareparto
     */
    omit?: Prisma.linearepartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.linearepartoInclude<ExtArgs> | null;
    /**
     * Filter which lineareparto to delete.
     */
    where: Prisma.linearepartoWhereUniqueInput;
};
/**
 * lineareparto deleteMany
 */
export type linearepartoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which linearepartos to delete
     */
    where?: Prisma.linearepartoWhereInput;
    /**
     * Limit how many linearepartos to delete.
     */
    limit?: number;
};
/**
 * lineareparto without action
 */
export type linearepartoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the lineareparto
     */
    select?: Prisma.linearepartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the lineareparto
     */
    omit?: Prisma.linearepartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.linearepartoInclude<ExtArgs> | null;
};
//# sourceMappingURL=lineareparto.d.ts.map