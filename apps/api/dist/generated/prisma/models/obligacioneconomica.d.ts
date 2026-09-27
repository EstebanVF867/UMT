import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model obligacioneconomica
 *
 */
export type obligacioneconomicaModel = runtime.Types.Result.DefaultSelection<Prisma.$obligacioneconomicaPayload>;
export type AggregateObligacioneconomica = {
    _count: ObligacioneconomicaCountAggregateOutputType | null;
    _avg: ObligacioneconomicaAvgAggregateOutputType | null;
    _sum: ObligacioneconomicaSumAggregateOutputType | null;
    _min: ObligacioneconomicaMinAggregateOutputType | null;
    _max: ObligacioneconomicaMaxAggregateOutputType | null;
};
export type ObligacioneconomicaAvgAggregateOutputType = {
    importe: runtime.Decimal | null;
};
export type ObligacioneconomicaSumAggregateOutputType = {
    importe: runtime.Decimal | null;
};
export type ObligacioneconomicaMinAggregateOutputType = {
    id: string | null;
    ejercicioId: string | null;
    cuotaId: string | null;
    facturaProveedorId: string | null;
    nominaId: string | null;
    repartoId: string | null;
    importe: runtime.Decimal | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ObligacioneconomicaMaxAggregateOutputType = {
    id: string | null;
    ejercicioId: string | null;
    cuotaId: string | null;
    facturaProveedorId: string | null;
    nominaId: string | null;
    repartoId: string | null;
    importe: runtime.Decimal | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ObligacioneconomicaCountAggregateOutputType = {
    id: number;
    ejercicioId: number;
    cuotaId: number;
    facturaProveedorId: number;
    nominaId: number;
    repartoId: number;
    importe: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ObligacioneconomicaAvgAggregateInputType = {
    importe?: true;
};
export type ObligacioneconomicaSumAggregateInputType = {
    importe?: true;
};
export type ObligacioneconomicaMinAggregateInputType = {
    id?: true;
    ejercicioId?: true;
    cuotaId?: true;
    facturaProveedorId?: true;
    nominaId?: true;
    repartoId?: true;
    importe?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ObligacioneconomicaMaxAggregateInputType = {
    id?: true;
    ejercicioId?: true;
    cuotaId?: true;
    facturaProveedorId?: true;
    nominaId?: true;
    repartoId?: true;
    importe?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ObligacioneconomicaCountAggregateInputType = {
    id?: true;
    ejercicioId?: true;
    cuotaId?: true;
    facturaProveedorId?: true;
    nominaId?: true;
    repartoId?: true;
    importe?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ObligacioneconomicaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which obligacioneconomica to aggregate.
     */
    where?: Prisma.obligacioneconomicaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of obligacioneconomicas to fetch.
     */
    orderBy?: Prisma.obligacioneconomicaOrderByWithRelationInput | Prisma.obligacioneconomicaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.obligacioneconomicaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` obligacioneconomicas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` obligacioneconomicas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned obligacioneconomicas
    **/
    _count?: true | ObligacioneconomicaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ObligacioneconomicaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ObligacioneconomicaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ObligacioneconomicaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ObligacioneconomicaMaxAggregateInputType;
};
export type GetObligacioneconomicaAggregateType<T extends ObligacioneconomicaAggregateArgs> = {
    [P in keyof T & keyof AggregateObligacioneconomica]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateObligacioneconomica[P]> : Prisma.GetScalarType<T[P], AggregateObligacioneconomica[P]>;
};
export type obligacioneconomicaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.obligacioneconomicaWhereInput;
    orderBy?: Prisma.obligacioneconomicaOrderByWithAggregationInput | Prisma.obligacioneconomicaOrderByWithAggregationInput[];
    by: Prisma.ObligacioneconomicaScalarFieldEnum[] | Prisma.ObligacioneconomicaScalarFieldEnum;
    having?: Prisma.obligacioneconomicaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ObligacioneconomicaCountAggregateInputType | true;
    _avg?: ObligacioneconomicaAvgAggregateInputType;
    _sum?: ObligacioneconomicaSumAggregateInputType;
    _min?: ObligacioneconomicaMinAggregateInputType;
    _max?: ObligacioneconomicaMaxAggregateInputType;
};
export type ObligacioneconomicaGroupByOutputType = {
    id: string;
    ejercicioId: string;
    cuotaId: string | null;
    facturaProveedorId: string | null;
    nominaId: string | null;
    repartoId: string | null;
    importe: runtime.Decimal;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: ObligacioneconomicaCountAggregateOutputType | null;
    _avg: ObligacioneconomicaAvgAggregateOutputType | null;
    _sum: ObligacioneconomicaSumAggregateOutputType | null;
    _min: ObligacioneconomicaMinAggregateOutputType | null;
    _max: ObligacioneconomicaMaxAggregateOutputType | null;
};
export type GetObligacioneconomicaGroupByPayload<T extends obligacioneconomicaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ObligacioneconomicaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ObligacioneconomicaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ObligacioneconomicaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ObligacioneconomicaGroupByOutputType[P]>;
}>>;
export type obligacioneconomicaWhereInput = {
    AND?: Prisma.obligacioneconomicaWhereInput | Prisma.obligacioneconomicaWhereInput[];
    OR?: Prisma.obligacioneconomicaWhereInput[];
    NOT?: Prisma.obligacioneconomicaWhereInput | Prisma.obligacioneconomicaWhereInput[];
    id?: Prisma.StringFilter<"obligacioneconomica"> | string;
    ejercicioId?: Prisma.StringFilter<"obligacioneconomica"> | string;
    cuotaId?: Prisma.StringNullableFilter<"obligacioneconomica"> | string | null;
    facturaProveedorId?: Prisma.StringNullableFilter<"obligacioneconomica"> | string | null;
    nominaId?: Prisma.StringNullableFilter<"obligacioneconomica"> | string | null;
    repartoId?: Prisma.StringNullableFilter<"obligacioneconomica"> | string | null;
    importe?: Prisma.DecimalFilter<"obligacioneconomica"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.StringNullableFilter<"obligacioneconomica"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"obligacioneconomica"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"obligacioneconomica"> | Date | string;
    liquidacionpago?: Prisma.LiquidacionpagoListRelationFilter;
    cuota?: Prisma.XOR<Prisma.CuotaNullableScalarRelationFilter, Prisma.cuotaWhereInput> | null;
    ejercicio?: Prisma.XOR<Prisma.EjercicioScalarRelationFilter, Prisma.ejercicioWhereInput>;
    facturaproveedor?: Prisma.XOR<Prisma.FacturaproveedorNullableScalarRelationFilter, Prisma.facturaproveedorWhereInput> | null;
    nomina?: Prisma.XOR<Prisma.NominaNullableScalarRelationFilter, Prisma.nominaWhereInput> | null;
    reparto?: Prisma.XOR<Prisma.RepartoNullableScalarRelationFilter, Prisma.repartoWhereInput> | null;
};
export type obligacioneconomicaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    cuotaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    facturaProveedorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    nominaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    repartoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    liquidacionpago?: Prisma.liquidacionpagoOrderByRelationAggregateInput;
    cuota?: Prisma.cuotaOrderByWithRelationInput;
    ejercicio?: Prisma.ejercicioOrderByWithRelationInput;
    facturaproveedor?: Prisma.facturaproveedorOrderByWithRelationInput;
    nomina?: Prisma.nominaOrderByWithRelationInput;
    reparto?: Prisma.repartoOrderByWithRelationInput;
    _relevance?: Prisma.obligacioneconomicaOrderByRelevanceInput;
};
export type obligacioneconomicaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    cuotaId?: string;
    facturaProveedorId?: string;
    nominaId?: string;
    repartoId?: string;
    AND?: Prisma.obligacioneconomicaWhereInput | Prisma.obligacioneconomicaWhereInput[];
    OR?: Prisma.obligacioneconomicaWhereInput[];
    NOT?: Prisma.obligacioneconomicaWhereInput | Prisma.obligacioneconomicaWhereInput[];
    ejercicioId?: Prisma.StringFilter<"obligacioneconomica"> | string;
    importe?: Prisma.DecimalFilter<"obligacioneconomica"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.StringNullableFilter<"obligacioneconomica"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"obligacioneconomica"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"obligacioneconomica"> | Date | string;
    liquidacionpago?: Prisma.LiquidacionpagoListRelationFilter;
    cuota?: Prisma.XOR<Prisma.CuotaNullableScalarRelationFilter, Prisma.cuotaWhereInput> | null;
    ejercicio?: Prisma.XOR<Prisma.EjercicioScalarRelationFilter, Prisma.ejercicioWhereInput>;
    facturaproveedor?: Prisma.XOR<Prisma.FacturaproveedorNullableScalarRelationFilter, Prisma.facturaproveedorWhereInput> | null;
    nomina?: Prisma.XOR<Prisma.NominaNullableScalarRelationFilter, Prisma.nominaWhereInput> | null;
    reparto?: Prisma.XOR<Prisma.RepartoNullableScalarRelationFilter, Prisma.repartoWhereInput> | null;
}, "id" | "cuotaId" | "facturaProveedorId" | "nominaId" | "repartoId">;
export type obligacioneconomicaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    cuotaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    facturaProveedorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    nominaId?: Prisma.SortOrderInput | Prisma.SortOrder;
    repartoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.obligacioneconomicaCountOrderByAggregateInput;
    _avg?: Prisma.obligacioneconomicaAvgOrderByAggregateInput;
    _max?: Prisma.obligacioneconomicaMaxOrderByAggregateInput;
    _min?: Prisma.obligacioneconomicaMinOrderByAggregateInput;
    _sum?: Prisma.obligacioneconomicaSumOrderByAggregateInput;
};
export type obligacioneconomicaScalarWhereWithAggregatesInput = {
    AND?: Prisma.obligacioneconomicaScalarWhereWithAggregatesInput | Prisma.obligacioneconomicaScalarWhereWithAggregatesInput[];
    OR?: Prisma.obligacioneconomicaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.obligacioneconomicaScalarWhereWithAggregatesInput | Prisma.obligacioneconomicaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"obligacioneconomica"> | string;
    ejercicioId?: Prisma.StringWithAggregatesFilter<"obligacioneconomica"> | string;
    cuotaId?: Prisma.StringNullableWithAggregatesFilter<"obligacioneconomica"> | string | null;
    facturaProveedorId?: Prisma.StringNullableWithAggregatesFilter<"obligacioneconomica"> | string | null;
    nominaId?: Prisma.StringNullableWithAggregatesFilter<"obligacioneconomica"> | string | null;
    repartoId?: Prisma.StringNullableWithAggregatesFilter<"obligacioneconomica"> | string | null;
    importe?: Prisma.DecimalWithAggregatesFilter<"obligacioneconomica"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"obligacioneconomica"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"obligacioneconomica"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"obligacioneconomica"> | Date | string;
};
export type obligacioneconomicaCreateInput = {
    id: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacionpago?: Prisma.liquidacionpagoCreateNestedManyWithoutObligacioneconomicaInput;
    cuota?: Prisma.cuotaCreateNestedOneWithoutObligacioneconomicaInput;
    ejercicio: Prisma.ejercicioCreateNestedOneWithoutObligacioneconomicaInput;
    facturaproveedor?: Prisma.facturaproveedorCreateNestedOneWithoutObligacioneconomicaInput;
    nomina?: Prisma.nominaCreateNestedOneWithoutObligacioneconomicaInput;
    reparto?: Prisma.repartoCreateNestedOneWithoutObligacioneconomicaInput;
};
export type obligacioneconomicaUncheckedCreateInput = {
    id: string;
    ejercicioId: string;
    cuotaId?: string | null;
    facturaProveedorId?: string | null;
    nominaId?: string | null;
    repartoId?: string | null;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUncheckedCreateNestedManyWithoutObligacioneconomicaInput;
};
export type obligacioneconomicaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUpdateManyWithoutObligacioneconomicaNestedInput;
    cuota?: Prisma.cuotaUpdateOneWithoutObligacioneconomicaNestedInput;
    ejercicio?: Prisma.ejercicioUpdateOneRequiredWithoutObligacioneconomicaNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUpdateOneWithoutObligacioneconomicaNestedInput;
    nomina?: Prisma.nominaUpdateOneWithoutObligacioneconomicaNestedInput;
    reparto?: Prisma.repartoUpdateOneWithoutObligacioneconomicaNestedInput;
};
export type obligacioneconomicaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    cuotaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    facturaProveedorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nominaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    repartoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUncheckedUpdateManyWithoutObligacioneconomicaNestedInput;
};
export type obligacioneconomicaCreateManyInput = {
    id: string;
    ejercicioId: string;
    cuotaId?: string | null;
    facturaProveedorId?: string | null;
    nominaId?: string | null;
    repartoId?: string | null;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type obligacioneconomicaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type obligacioneconomicaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    cuotaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    facturaProveedorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nominaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    repartoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ObligacioneconomicaNullableScalarRelationFilter = {
    is?: Prisma.obligacioneconomicaWhereInput | null;
    isNot?: Prisma.obligacioneconomicaWhereInput | null;
};
export type ObligacioneconomicaListRelationFilter = {
    every?: Prisma.obligacioneconomicaWhereInput;
    some?: Prisma.obligacioneconomicaWhereInput;
    none?: Prisma.obligacioneconomicaWhereInput;
};
export type obligacioneconomicaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ObligacioneconomicaScalarRelationFilter = {
    is?: Prisma.obligacioneconomicaWhereInput;
    isNot?: Prisma.obligacioneconomicaWhereInput;
};
export type obligacioneconomicaOrderByRelevanceInput = {
    fields: Prisma.obligacioneconomicaOrderByRelevanceFieldEnum | Prisma.obligacioneconomicaOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type obligacioneconomicaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    cuotaId?: Prisma.SortOrder;
    facturaProveedorId?: Prisma.SortOrder;
    nominaId?: Prisma.SortOrder;
    repartoId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type obligacioneconomicaAvgOrderByAggregateInput = {
    importe?: Prisma.SortOrder;
};
export type obligacioneconomicaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    cuotaId?: Prisma.SortOrder;
    facturaProveedorId?: Prisma.SortOrder;
    nominaId?: Prisma.SortOrder;
    repartoId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type obligacioneconomicaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ejercicioId?: Prisma.SortOrder;
    cuotaId?: Prisma.SortOrder;
    facturaProveedorId?: Prisma.SortOrder;
    nominaId?: Prisma.SortOrder;
    repartoId?: Prisma.SortOrder;
    importe?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type obligacioneconomicaSumOrderByAggregateInput = {
    importe?: Prisma.SortOrder;
};
export type obligacioneconomicaCreateNestedOneWithoutCuotaInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutCuotaInput, Prisma.obligacioneconomicaUncheckedCreateWithoutCuotaInput>;
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutCuotaInput;
    connect?: Prisma.obligacioneconomicaWhereUniqueInput;
};
export type obligacioneconomicaUncheckedCreateNestedOneWithoutCuotaInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutCuotaInput, Prisma.obligacioneconomicaUncheckedCreateWithoutCuotaInput>;
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutCuotaInput;
    connect?: Prisma.obligacioneconomicaWhereUniqueInput;
};
export type obligacioneconomicaUpdateOneWithoutCuotaNestedInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutCuotaInput, Prisma.obligacioneconomicaUncheckedCreateWithoutCuotaInput>;
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutCuotaInput;
    upsert?: Prisma.obligacioneconomicaUpsertWithoutCuotaInput;
    disconnect?: Prisma.obligacioneconomicaWhereInput | boolean;
    delete?: Prisma.obligacioneconomicaWhereInput | boolean;
    connect?: Prisma.obligacioneconomicaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.obligacioneconomicaUpdateToOneWithWhereWithoutCuotaInput, Prisma.obligacioneconomicaUpdateWithoutCuotaInput>, Prisma.obligacioneconomicaUncheckedUpdateWithoutCuotaInput>;
};
export type obligacioneconomicaUncheckedUpdateOneWithoutCuotaNestedInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutCuotaInput, Prisma.obligacioneconomicaUncheckedCreateWithoutCuotaInput>;
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutCuotaInput;
    upsert?: Prisma.obligacioneconomicaUpsertWithoutCuotaInput;
    disconnect?: Prisma.obligacioneconomicaWhereInput | boolean;
    delete?: Prisma.obligacioneconomicaWhereInput | boolean;
    connect?: Prisma.obligacioneconomicaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.obligacioneconomicaUpdateToOneWithWhereWithoutCuotaInput, Prisma.obligacioneconomicaUpdateWithoutCuotaInput>, Prisma.obligacioneconomicaUncheckedUpdateWithoutCuotaInput>;
};
export type obligacioneconomicaCreateNestedManyWithoutEjercicioInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutEjercicioInput, Prisma.obligacioneconomicaUncheckedCreateWithoutEjercicioInput> | Prisma.obligacioneconomicaCreateWithoutEjercicioInput[] | Prisma.obligacioneconomicaUncheckedCreateWithoutEjercicioInput[];
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutEjercicioInput | Prisma.obligacioneconomicaCreateOrConnectWithoutEjercicioInput[];
    createMany?: Prisma.obligacioneconomicaCreateManyEjercicioInputEnvelope;
    connect?: Prisma.obligacioneconomicaWhereUniqueInput | Prisma.obligacioneconomicaWhereUniqueInput[];
};
export type obligacioneconomicaUncheckedCreateNestedManyWithoutEjercicioInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutEjercicioInput, Prisma.obligacioneconomicaUncheckedCreateWithoutEjercicioInput> | Prisma.obligacioneconomicaCreateWithoutEjercicioInput[] | Prisma.obligacioneconomicaUncheckedCreateWithoutEjercicioInput[];
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutEjercicioInput | Prisma.obligacioneconomicaCreateOrConnectWithoutEjercicioInput[];
    createMany?: Prisma.obligacioneconomicaCreateManyEjercicioInputEnvelope;
    connect?: Prisma.obligacioneconomicaWhereUniqueInput | Prisma.obligacioneconomicaWhereUniqueInput[];
};
export type obligacioneconomicaUpdateManyWithoutEjercicioNestedInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutEjercicioInput, Prisma.obligacioneconomicaUncheckedCreateWithoutEjercicioInput> | Prisma.obligacioneconomicaCreateWithoutEjercicioInput[] | Prisma.obligacioneconomicaUncheckedCreateWithoutEjercicioInput[];
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutEjercicioInput | Prisma.obligacioneconomicaCreateOrConnectWithoutEjercicioInput[];
    upsert?: Prisma.obligacioneconomicaUpsertWithWhereUniqueWithoutEjercicioInput | Prisma.obligacioneconomicaUpsertWithWhereUniqueWithoutEjercicioInput[];
    createMany?: Prisma.obligacioneconomicaCreateManyEjercicioInputEnvelope;
    set?: Prisma.obligacioneconomicaWhereUniqueInput | Prisma.obligacioneconomicaWhereUniqueInput[];
    disconnect?: Prisma.obligacioneconomicaWhereUniqueInput | Prisma.obligacioneconomicaWhereUniqueInput[];
    delete?: Prisma.obligacioneconomicaWhereUniqueInput | Prisma.obligacioneconomicaWhereUniqueInput[];
    connect?: Prisma.obligacioneconomicaWhereUniqueInput | Prisma.obligacioneconomicaWhereUniqueInput[];
    update?: Prisma.obligacioneconomicaUpdateWithWhereUniqueWithoutEjercicioInput | Prisma.obligacioneconomicaUpdateWithWhereUniqueWithoutEjercicioInput[];
    updateMany?: Prisma.obligacioneconomicaUpdateManyWithWhereWithoutEjercicioInput | Prisma.obligacioneconomicaUpdateManyWithWhereWithoutEjercicioInput[];
    deleteMany?: Prisma.obligacioneconomicaScalarWhereInput | Prisma.obligacioneconomicaScalarWhereInput[];
};
export type obligacioneconomicaUncheckedUpdateManyWithoutEjercicioNestedInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutEjercicioInput, Prisma.obligacioneconomicaUncheckedCreateWithoutEjercicioInput> | Prisma.obligacioneconomicaCreateWithoutEjercicioInput[] | Prisma.obligacioneconomicaUncheckedCreateWithoutEjercicioInput[];
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutEjercicioInput | Prisma.obligacioneconomicaCreateOrConnectWithoutEjercicioInput[];
    upsert?: Prisma.obligacioneconomicaUpsertWithWhereUniqueWithoutEjercicioInput | Prisma.obligacioneconomicaUpsertWithWhereUniqueWithoutEjercicioInput[];
    createMany?: Prisma.obligacioneconomicaCreateManyEjercicioInputEnvelope;
    set?: Prisma.obligacioneconomicaWhereUniqueInput | Prisma.obligacioneconomicaWhereUniqueInput[];
    disconnect?: Prisma.obligacioneconomicaWhereUniqueInput | Prisma.obligacioneconomicaWhereUniqueInput[];
    delete?: Prisma.obligacioneconomicaWhereUniqueInput | Prisma.obligacioneconomicaWhereUniqueInput[];
    connect?: Prisma.obligacioneconomicaWhereUniqueInput | Prisma.obligacioneconomicaWhereUniqueInput[];
    update?: Prisma.obligacioneconomicaUpdateWithWhereUniqueWithoutEjercicioInput | Prisma.obligacioneconomicaUpdateWithWhereUniqueWithoutEjercicioInput[];
    updateMany?: Prisma.obligacioneconomicaUpdateManyWithWhereWithoutEjercicioInput | Prisma.obligacioneconomicaUpdateManyWithWhereWithoutEjercicioInput[];
    deleteMany?: Prisma.obligacioneconomicaScalarWhereInput | Prisma.obligacioneconomicaScalarWhereInput[];
};
export type obligacioneconomicaCreateNestedOneWithoutFacturaproveedorInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutFacturaproveedorInput, Prisma.obligacioneconomicaUncheckedCreateWithoutFacturaproveedorInput>;
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutFacturaproveedorInput;
    connect?: Prisma.obligacioneconomicaWhereUniqueInput;
};
export type obligacioneconomicaUncheckedCreateNestedOneWithoutFacturaproveedorInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutFacturaproveedorInput, Prisma.obligacioneconomicaUncheckedCreateWithoutFacturaproveedorInput>;
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutFacturaproveedorInput;
    connect?: Prisma.obligacioneconomicaWhereUniqueInput;
};
export type obligacioneconomicaUpdateOneWithoutFacturaproveedorNestedInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutFacturaproveedorInput, Prisma.obligacioneconomicaUncheckedCreateWithoutFacturaproveedorInput>;
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutFacturaproveedorInput;
    upsert?: Prisma.obligacioneconomicaUpsertWithoutFacturaproveedorInput;
    disconnect?: Prisma.obligacioneconomicaWhereInput | boolean;
    delete?: Prisma.obligacioneconomicaWhereInput | boolean;
    connect?: Prisma.obligacioneconomicaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.obligacioneconomicaUpdateToOneWithWhereWithoutFacturaproveedorInput, Prisma.obligacioneconomicaUpdateWithoutFacturaproveedorInput>, Prisma.obligacioneconomicaUncheckedUpdateWithoutFacturaproveedorInput>;
};
export type obligacioneconomicaUncheckedUpdateOneWithoutFacturaproveedorNestedInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutFacturaproveedorInput, Prisma.obligacioneconomicaUncheckedCreateWithoutFacturaproveedorInput>;
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutFacturaproveedorInput;
    upsert?: Prisma.obligacioneconomicaUpsertWithoutFacturaproveedorInput;
    disconnect?: Prisma.obligacioneconomicaWhereInput | boolean;
    delete?: Prisma.obligacioneconomicaWhereInput | boolean;
    connect?: Prisma.obligacioneconomicaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.obligacioneconomicaUpdateToOneWithWhereWithoutFacturaproveedorInput, Prisma.obligacioneconomicaUpdateWithoutFacturaproveedorInput>, Prisma.obligacioneconomicaUncheckedUpdateWithoutFacturaproveedorInput>;
};
export type obligacioneconomicaCreateNestedOneWithoutLiquidacionpagoInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutLiquidacionpagoInput, Prisma.obligacioneconomicaUncheckedCreateWithoutLiquidacionpagoInput>;
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutLiquidacionpagoInput;
    connect?: Prisma.obligacioneconomicaWhereUniqueInput;
};
export type obligacioneconomicaUpdateOneRequiredWithoutLiquidacionpagoNestedInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutLiquidacionpagoInput, Prisma.obligacioneconomicaUncheckedCreateWithoutLiquidacionpagoInput>;
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutLiquidacionpagoInput;
    upsert?: Prisma.obligacioneconomicaUpsertWithoutLiquidacionpagoInput;
    connect?: Prisma.obligacioneconomicaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.obligacioneconomicaUpdateToOneWithWhereWithoutLiquidacionpagoInput, Prisma.obligacioneconomicaUpdateWithoutLiquidacionpagoInput>, Prisma.obligacioneconomicaUncheckedUpdateWithoutLiquidacionpagoInput>;
};
export type obligacioneconomicaCreateNestedOneWithoutNominaInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutNominaInput, Prisma.obligacioneconomicaUncheckedCreateWithoutNominaInput>;
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutNominaInput;
    connect?: Prisma.obligacioneconomicaWhereUniqueInput;
};
export type obligacioneconomicaUncheckedCreateNestedOneWithoutNominaInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutNominaInput, Prisma.obligacioneconomicaUncheckedCreateWithoutNominaInput>;
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutNominaInput;
    connect?: Prisma.obligacioneconomicaWhereUniqueInput;
};
export type obligacioneconomicaUpdateOneWithoutNominaNestedInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutNominaInput, Prisma.obligacioneconomicaUncheckedCreateWithoutNominaInput>;
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutNominaInput;
    upsert?: Prisma.obligacioneconomicaUpsertWithoutNominaInput;
    disconnect?: Prisma.obligacioneconomicaWhereInput | boolean;
    delete?: Prisma.obligacioneconomicaWhereInput | boolean;
    connect?: Prisma.obligacioneconomicaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.obligacioneconomicaUpdateToOneWithWhereWithoutNominaInput, Prisma.obligacioneconomicaUpdateWithoutNominaInput>, Prisma.obligacioneconomicaUncheckedUpdateWithoutNominaInput>;
};
export type obligacioneconomicaUncheckedUpdateOneWithoutNominaNestedInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutNominaInput, Prisma.obligacioneconomicaUncheckedCreateWithoutNominaInput>;
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutNominaInput;
    upsert?: Prisma.obligacioneconomicaUpsertWithoutNominaInput;
    disconnect?: Prisma.obligacioneconomicaWhereInput | boolean;
    delete?: Prisma.obligacioneconomicaWhereInput | boolean;
    connect?: Prisma.obligacioneconomicaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.obligacioneconomicaUpdateToOneWithWhereWithoutNominaInput, Prisma.obligacioneconomicaUpdateWithoutNominaInput>, Prisma.obligacioneconomicaUncheckedUpdateWithoutNominaInput>;
};
export type obligacioneconomicaCreateNestedOneWithoutRepartoInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutRepartoInput, Prisma.obligacioneconomicaUncheckedCreateWithoutRepartoInput>;
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutRepartoInput;
    connect?: Prisma.obligacioneconomicaWhereUniqueInput;
};
export type obligacioneconomicaUncheckedCreateNestedOneWithoutRepartoInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutRepartoInput, Prisma.obligacioneconomicaUncheckedCreateWithoutRepartoInput>;
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutRepartoInput;
    connect?: Prisma.obligacioneconomicaWhereUniqueInput;
};
export type obligacioneconomicaUpdateOneWithoutRepartoNestedInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutRepartoInput, Prisma.obligacioneconomicaUncheckedCreateWithoutRepartoInput>;
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutRepartoInput;
    upsert?: Prisma.obligacioneconomicaUpsertWithoutRepartoInput;
    disconnect?: Prisma.obligacioneconomicaWhereInput | boolean;
    delete?: Prisma.obligacioneconomicaWhereInput | boolean;
    connect?: Prisma.obligacioneconomicaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.obligacioneconomicaUpdateToOneWithWhereWithoutRepartoInput, Prisma.obligacioneconomicaUpdateWithoutRepartoInput>, Prisma.obligacioneconomicaUncheckedUpdateWithoutRepartoInput>;
};
export type obligacioneconomicaUncheckedUpdateOneWithoutRepartoNestedInput = {
    create?: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutRepartoInput, Prisma.obligacioneconomicaUncheckedCreateWithoutRepartoInput>;
    connectOrCreate?: Prisma.obligacioneconomicaCreateOrConnectWithoutRepartoInput;
    upsert?: Prisma.obligacioneconomicaUpsertWithoutRepartoInput;
    disconnect?: Prisma.obligacioneconomicaWhereInput | boolean;
    delete?: Prisma.obligacioneconomicaWhereInput | boolean;
    connect?: Prisma.obligacioneconomicaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.obligacioneconomicaUpdateToOneWithWhereWithoutRepartoInput, Prisma.obligacioneconomicaUpdateWithoutRepartoInput>, Prisma.obligacioneconomicaUncheckedUpdateWithoutRepartoInput>;
};
export type obligacioneconomicaCreateWithoutCuotaInput = {
    id: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacionpago?: Prisma.liquidacionpagoCreateNestedManyWithoutObligacioneconomicaInput;
    ejercicio: Prisma.ejercicioCreateNestedOneWithoutObligacioneconomicaInput;
    facturaproveedor?: Prisma.facturaproveedorCreateNestedOneWithoutObligacioneconomicaInput;
    nomina?: Prisma.nominaCreateNestedOneWithoutObligacioneconomicaInput;
    reparto?: Prisma.repartoCreateNestedOneWithoutObligacioneconomicaInput;
};
export type obligacioneconomicaUncheckedCreateWithoutCuotaInput = {
    id: string;
    ejercicioId: string;
    facturaProveedorId?: string | null;
    nominaId?: string | null;
    repartoId?: string | null;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUncheckedCreateNestedManyWithoutObligacioneconomicaInput;
};
export type obligacioneconomicaCreateOrConnectWithoutCuotaInput = {
    where: Prisma.obligacioneconomicaWhereUniqueInput;
    create: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutCuotaInput, Prisma.obligacioneconomicaUncheckedCreateWithoutCuotaInput>;
};
export type obligacioneconomicaUpsertWithoutCuotaInput = {
    update: Prisma.XOR<Prisma.obligacioneconomicaUpdateWithoutCuotaInput, Prisma.obligacioneconomicaUncheckedUpdateWithoutCuotaInput>;
    create: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutCuotaInput, Prisma.obligacioneconomicaUncheckedCreateWithoutCuotaInput>;
    where?: Prisma.obligacioneconomicaWhereInput;
};
export type obligacioneconomicaUpdateToOneWithWhereWithoutCuotaInput = {
    where?: Prisma.obligacioneconomicaWhereInput;
    data: Prisma.XOR<Prisma.obligacioneconomicaUpdateWithoutCuotaInput, Prisma.obligacioneconomicaUncheckedUpdateWithoutCuotaInput>;
};
export type obligacioneconomicaUpdateWithoutCuotaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUpdateManyWithoutObligacioneconomicaNestedInput;
    ejercicio?: Prisma.ejercicioUpdateOneRequiredWithoutObligacioneconomicaNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUpdateOneWithoutObligacioneconomicaNestedInput;
    nomina?: Prisma.nominaUpdateOneWithoutObligacioneconomicaNestedInput;
    reparto?: Prisma.repartoUpdateOneWithoutObligacioneconomicaNestedInput;
};
export type obligacioneconomicaUncheckedUpdateWithoutCuotaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    facturaProveedorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nominaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    repartoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUncheckedUpdateManyWithoutObligacioneconomicaNestedInput;
};
export type obligacioneconomicaCreateWithoutEjercicioInput = {
    id: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacionpago?: Prisma.liquidacionpagoCreateNestedManyWithoutObligacioneconomicaInput;
    cuota?: Prisma.cuotaCreateNestedOneWithoutObligacioneconomicaInput;
    facturaproveedor?: Prisma.facturaproveedorCreateNestedOneWithoutObligacioneconomicaInput;
    nomina?: Prisma.nominaCreateNestedOneWithoutObligacioneconomicaInput;
    reparto?: Prisma.repartoCreateNestedOneWithoutObligacioneconomicaInput;
};
export type obligacioneconomicaUncheckedCreateWithoutEjercicioInput = {
    id: string;
    cuotaId?: string | null;
    facturaProveedorId?: string | null;
    nominaId?: string | null;
    repartoId?: string | null;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUncheckedCreateNestedManyWithoutObligacioneconomicaInput;
};
export type obligacioneconomicaCreateOrConnectWithoutEjercicioInput = {
    where: Prisma.obligacioneconomicaWhereUniqueInput;
    create: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutEjercicioInput, Prisma.obligacioneconomicaUncheckedCreateWithoutEjercicioInput>;
};
export type obligacioneconomicaCreateManyEjercicioInputEnvelope = {
    data: Prisma.obligacioneconomicaCreateManyEjercicioInput | Prisma.obligacioneconomicaCreateManyEjercicioInput[];
    skipDuplicates?: boolean;
};
export type obligacioneconomicaUpsertWithWhereUniqueWithoutEjercicioInput = {
    where: Prisma.obligacioneconomicaWhereUniqueInput;
    update: Prisma.XOR<Prisma.obligacioneconomicaUpdateWithoutEjercicioInput, Prisma.obligacioneconomicaUncheckedUpdateWithoutEjercicioInput>;
    create: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutEjercicioInput, Prisma.obligacioneconomicaUncheckedCreateWithoutEjercicioInput>;
};
export type obligacioneconomicaUpdateWithWhereUniqueWithoutEjercicioInput = {
    where: Prisma.obligacioneconomicaWhereUniqueInput;
    data: Prisma.XOR<Prisma.obligacioneconomicaUpdateWithoutEjercicioInput, Prisma.obligacioneconomicaUncheckedUpdateWithoutEjercicioInput>;
};
export type obligacioneconomicaUpdateManyWithWhereWithoutEjercicioInput = {
    where: Prisma.obligacioneconomicaScalarWhereInput;
    data: Prisma.XOR<Prisma.obligacioneconomicaUpdateManyMutationInput, Prisma.obligacioneconomicaUncheckedUpdateManyWithoutEjercicioInput>;
};
export type obligacioneconomicaScalarWhereInput = {
    AND?: Prisma.obligacioneconomicaScalarWhereInput | Prisma.obligacioneconomicaScalarWhereInput[];
    OR?: Prisma.obligacioneconomicaScalarWhereInput[];
    NOT?: Prisma.obligacioneconomicaScalarWhereInput | Prisma.obligacioneconomicaScalarWhereInput[];
    id?: Prisma.StringFilter<"obligacioneconomica"> | string;
    ejercicioId?: Prisma.StringFilter<"obligacioneconomica"> | string;
    cuotaId?: Prisma.StringNullableFilter<"obligacioneconomica"> | string | null;
    facturaProveedorId?: Prisma.StringNullableFilter<"obligacioneconomica"> | string | null;
    nominaId?: Prisma.StringNullableFilter<"obligacioneconomica"> | string | null;
    repartoId?: Prisma.StringNullableFilter<"obligacioneconomica"> | string | null;
    importe?: Prisma.DecimalFilter<"obligacioneconomica"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.StringNullableFilter<"obligacioneconomica"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"obligacioneconomica"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"obligacioneconomica"> | Date | string;
};
export type obligacioneconomicaCreateWithoutFacturaproveedorInput = {
    id: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacionpago?: Prisma.liquidacionpagoCreateNestedManyWithoutObligacioneconomicaInput;
    cuota?: Prisma.cuotaCreateNestedOneWithoutObligacioneconomicaInput;
    ejercicio: Prisma.ejercicioCreateNestedOneWithoutObligacioneconomicaInput;
    nomina?: Prisma.nominaCreateNestedOneWithoutObligacioneconomicaInput;
    reparto?: Prisma.repartoCreateNestedOneWithoutObligacioneconomicaInput;
};
export type obligacioneconomicaUncheckedCreateWithoutFacturaproveedorInput = {
    id: string;
    ejercicioId: string;
    cuotaId?: string | null;
    nominaId?: string | null;
    repartoId?: string | null;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUncheckedCreateNestedManyWithoutObligacioneconomicaInput;
};
export type obligacioneconomicaCreateOrConnectWithoutFacturaproveedorInput = {
    where: Prisma.obligacioneconomicaWhereUniqueInput;
    create: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutFacturaproveedorInput, Prisma.obligacioneconomicaUncheckedCreateWithoutFacturaproveedorInput>;
};
export type obligacioneconomicaUpsertWithoutFacturaproveedorInput = {
    update: Prisma.XOR<Prisma.obligacioneconomicaUpdateWithoutFacturaproveedorInput, Prisma.obligacioneconomicaUncheckedUpdateWithoutFacturaproveedorInput>;
    create: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutFacturaproveedorInput, Prisma.obligacioneconomicaUncheckedCreateWithoutFacturaproveedorInput>;
    where?: Prisma.obligacioneconomicaWhereInput;
};
export type obligacioneconomicaUpdateToOneWithWhereWithoutFacturaproveedorInput = {
    where?: Prisma.obligacioneconomicaWhereInput;
    data: Prisma.XOR<Prisma.obligacioneconomicaUpdateWithoutFacturaproveedorInput, Prisma.obligacioneconomicaUncheckedUpdateWithoutFacturaproveedorInput>;
};
export type obligacioneconomicaUpdateWithoutFacturaproveedorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUpdateManyWithoutObligacioneconomicaNestedInput;
    cuota?: Prisma.cuotaUpdateOneWithoutObligacioneconomicaNestedInput;
    ejercicio?: Prisma.ejercicioUpdateOneRequiredWithoutObligacioneconomicaNestedInput;
    nomina?: Prisma.nominaUpdateOneWithoutObligacioneconomicaNestedInput;
    reparto?: Prisma.repartoUpdateOneWithoutObligacioneconomicaNestedInput;
};
export type obligacioneconomicaUncheckedUpdateWithoutFacturaproveedorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    cuotaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nominaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    repartoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUncheckedUpdateManyWithoutObligacioneconomicaNestedInput;
};
export type obligacioneconomicaCreateWithoutLiquidacionpagoInput = {
    id: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    cuota?: Prisma.cuotaCreateNestedOneWithoutObligacioneconomicaInput;
    ejercicio: Prisma.ejercicioCreateNestedOneWithoutObligacioneconomicaInput;
    facturaproveedor?: Prisma.facturaproveedorCreateNestedOneWithoutObligacioneconomicaInput;
    nomina?: Prisma.nominaCreateNestedOneWithoutObligacioneconomicaInput;
    reparto?: Prisma.repartoCreateNestedOneWithoutObligacioneconomicaInput;
};
export type obligacioneconomicaUncheckedCreateWithoutLiquidacionpagoInput = {
    id: string;
    ejercicioId: string;
    cuotaId?: string | null;
    facturaProveedorId?: string | null;
    nominaId?: string | null;
    repartoId?: string | null;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type obligacioneconomicaCreateOrConnectWithoutLiquidacionpagoInput = {
    where: Prisma.obligacioneconomicaWhereUniqueInput;
    create: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutLiquidacionpagoInput, Prisma.obligacioneconomicaUncheckedCreateWithoutLiquidacionpagoInput>;
};
export type obligacioneconomicaUpsertWithoutLiquidacionpagoInput = {
    update: Prisma.XOR<Prisma.obligacioneconomicaUpdateWithoutLiquidacionpagoInput, Prisma.obligacioneconomicaUncheckedUpdateWithoutLiquidacionpagoInput>;
    create: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutLiquidacionpagoInput, Prisma.obligacioneconomicaUncheckedCreateWithoutLiquidacionpagoInput>;
    where?: Prisma.obligacioneconomicaWhereInput;
};
export type obligacioneconomicaUpdateToOneWithWhereWithoutLiquidacionpagoInput = {
    where?: Prisma.obligacioneconomicaWhereInput;
    data: Prisma.XOR<Prisma.obligacioneconomicaUpdateWithoutLiquidacionpagoInput, Prisma.obligacioneconomicaUncheckedUpdateWithoutLiquidacionpagoInput>;
};
export type obligacioneconomicaUpdateWithoutLiquidacionpagoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cuota?: Prisma.cuotaUpdateOneWithoutObligacioneconomicaNestedInput;
    ejercicio?: Prisma.ejercicioUpdateOneRequiredWithoutObligacioneconomicaNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUpdateOneWithoutObligacioneconomicaNestedInput;
    nomina?: Prisma.nominaUpdateOneWithoutObligacioneconomicaNestedInput;
    reparto?: Prisma.repartoUpdateOneWithoutObligacioneconomicaNestedInput;
};
export type obligacioneconomicaUncheckedUpdateWithoutLiquidacionpagoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    cuotaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    facturaProveedorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nominaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    repartoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type obligacioneconomicaCreateWithoutNominaInput = {
    id: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacionpago?: Prisma.liquidacionpagoCreateNestedManyWithoutObligacioneconomicaInput;
    cuota?: Prisma.cuotaCreateNestedOneWithoutObligacioneconomicaInput;
    ejercicio: Prisma.ejercicioCreateNestedOneWithoutObligacioneconomicaInput;
    facturaproveedor?: Prisma.facturaproveedorCreateNestedOneWithoutObligacioneconomicaInput;
    reparto?: Prisma.repartoCreateNestedOneWithoutObligacioneconomicaInput;
};
export type obligacioneconomicaUncheckedCreateWithoutNominaInput = {
    id: string;
    ejercicioId: string;
    cuotaId?: string | null;
    facturaProveedorId?: string | null;
    repartoId?: string | null;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUncheckedCreateNestedManyWithoutObligacioneconomicaInput;
};
export type obligacioneconomicaCreateOrConnectWithoutNominaInput = {
    where: Prisma.obligacioneconomicaWhereUniqueInput;
    create: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutNominaInput, Prisma.obligacioneconomicaUncheckedCreateWithoutNominaInput>;
};
export type obligacioneconomicaUpsertWithoutNominaInput = {
    update: Prisma.XOR<Prisma.obligacioneconomicaUpdateWithoutNominaInput, Prisma.obligacioneconomicaUncheckedUpdateWithoutNominaInput>;
    create: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutNominaInput, Prisma.obligacioneconomicaUncheckedCreateWithoutNominaInput>;
    where?: Prisma.obligacioneconomicaWhereInput;
};
export type obligacioneconomicaUpdateToOneWithWhereWithoutNominaInput = {
    where?: Prisma.obligacioneconomicaWhereInput;
    data: Prisma.XOR<Prisma.obligacioneconomicaUpdateWithoutNominaInput, Prisma.obligacioneconomicaUncheckedUpdateWithoutNominaInput>;
};
export type obligacioneconomicaUpdateWithoutNominaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUpdateManyWithoutObligacioneconomicaNestedInput;
    cuota?: Prisma.cuotaUpdateOneWithoutObligacioneconomicaNestedInput;
    ejercicio?: Prisma.ejercicioUpdateOneRequiredWithoutObligacioneconomicaNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUpdateOneWithoutObligacioneconomicaNestedInput;
    reparto?: Prisma.repartoUpdateOneWithoutObligacioneconomicaNestedInput;
};
export type obligacioneconomicaUncheckedUpdateWithoutNominaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    cuotaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    facturaProveedorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    repartoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUncheckedUpdateManyWithoutObligacioneconomicaNestedInput;
};
export type obligacioneconomicaCreateWithoutRepartoInput = {
    id: string;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacionpago?: Prisma.liquidacionpagoCreateNestedManyWithoutObligacioneconomicaInput;
    cuota?: Prisma.cuotaCreateNestedOneWithoutObligacioneconomicaInput;
    ejercicio: Prisma.ejercicioCreateNestedOneWithoutObligacioneconomicaInput;
    facturaproveedor?: Prisma.facturaproveedorCreateNestedOneWithoutObligacioneconomicaInput;
    nomina?: Prisma.nominaCreateNestedOneWithoutObligacioneconomicaInput;
};
export type obligacioneconomicaUncheckedCreateWithoutRepartoInput = {
    id: string;
    ejercicioId: string;
    cuotaId?: string | null;
    facturaProveedorId?: string | null;
    nominaId?: string | null;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUncheckedCreateNestedManyWithoutObligacioneconomicaInput;
};
export type obligacioneconomicaCreateOrConnectWithoutRepartoInput = {
    where: Prisma.obligacioneconomicaWhereUniqueInput;
    create: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutRepartoInput, Prisma.obligacioneconomicaUncheckedCreateWithoutRepartoInput>;
};
export type obligacioneconomicaUpsertWithoutRepartoInput = {
    update: Prisma.XOR<Prisma.obligacioneconomicaUpdateWithoutRepartoInput, Prisma.obligacioneconomicaUncheckedUpdateWithoutRepartoInput>;
    create: Prisma.XOR<Prisma.obligacioneconomicaCreateWithoutRepartoInput, Prisma.obligacioneconomicaUncheckedCreateWithoutRepartoInput>;
    where?: Prisma.obligacioneconomicaWhereInput;
};
export type obligacioneconomicaUpdateToOneWithWhereWithoutRepartoInput = {
    where?: Prisma.obligacioneconomicaWhereInput;
    data: Prisma.XOR<Prisma.obligacioneconomicaUpdateWithoutRepartoInput, Prisma.obligacioneconomicaUncheckedUpdateWithoutRepartoInput>;
};
export type obligacioneconomicaUpdateWithoutRepartoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUpdateManyWithoutObligacioneconomicaNestedInput;
    cuota?: Prisma.cuotaUpdateOneWithoutObligacioneconomicaNestedInput;
    ejercicio?: Prisma.ejercicioUpdateOneRequiredWithoutObligacioneconomicaNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUpdateOneWithoutObligacioneconomicaNestedInput;
    nomina?: Prisma.nominaUpdateOneWithoutObligacioneconomicaNestedInput;
};
export type obligacioneconomicaUncheckedUpdateWithoutRepartoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ejercicioId?: Prisma.StringFieldUpdateOperationsInput | string;
    cuotaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    facturaProveedorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nominaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUncheckedUpdateManyWithoutObligacioneconomicaNestedInput;
};
export type obligacioneconomicaCreateManyEjercicioInput = {
    id: string;
    cuotaId?: string | null;
    facturaProveedorId?: string | null;
    nominaId?: string | null;
    repartoId?: string | null;
    importe: runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type obligacioneconomicaUpdateWithoutEjercicioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUpdateManyWithoutObligacioneconomicaNestedInput;
    cuota?: Prisma.cuotaUpdateOneWithoutObligacioneconomicaNestedInput;
    facturaproveedor?: Prisma.facturaproveedorUpdateOneWithoutObligacioneconomicaNestedInput;
    nomina?: Prisma.nominaUpdateOneWithoutObligacioneconomicaNestedInput;
    reparto?: Prisma.repartoUpdateOneWithoutObligacioneconomicaNestedInput;
};
export type obligacioneconomicaUncheckedUpdateWithoutEjercicioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cuotaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    facturaProveedorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nominaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    repartoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    liquidacionpago?: Prisma.liquidacionpagoUncheckedUpdateManyWithoutObligacioneconomicaNestedInput;
};
export type obligacioneconomicaUncheckedUpdateManyWithoutEjercicioInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cuotaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    facturaProveedorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nominaId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    repartoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    importe?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ObligacioneconomicaCountOutputType
 */
export type ObligacioneconomicaCountOutputType = {
    liquidacionpago: number;
};
export type ObligacioneconomicaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    liquidacionpago?: boolean | ObligacioneconomicaCountOutputTypeCountLiquidacionpagoArgs;
};
/**
 * ObligacioneconomicaCountOutputType without action
 */
export type ObligacioneconomicaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObligacioneconomicaCountOutputType
     */
    select?: Prisma.ObligacioneconomicaCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ObligacioneconomicaCountOutputType without action
 */
export type ObligacioneconomicaCountOutputTypeCountLiquidacionpagoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.liquidacionpagoWhereInput;
};
export type obligacioneconomicaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ejercicioId?: boolean;
    cuotaId?: boolean;
    facturaProveedorId?: boolean;
    nominaId?: boolean;
    repartoId?: boolean;
    importe?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    liquidacionpago?: boolean | Prisma.obligacioneconomica$liquidacionpagoArgs<ExtArgs>;
    cuota?: boolean | Prisma.obligacioneconomica$cuotaArgs<ExtArgs>;
    ejercicio?: boolean | Prisma.ejercicioDefaultArgs<ExtArgs>;
    facturaproveedor?: boolean | Prisma.obligacioneconomica$facturaproveedorArgs<ExtArgs>;
    nomina?: boolean | Prisma.obligacioneconomica$nominaArgs<ExtArgs>;
    reparto?: boolean | Prisma.obligacioneconomica$repartoArgs<ExtArgs>;
    _count?: boolean | Prisma.ObligacioneconomicaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["obligacioneconomica"]>;
export type obligacioneconomicaSelectScalar = {
    id?: boolean;
    ejercicioId?: boolean;
    cuotaId?: boolean;
    facturaProveedorId?: boolean;
    nominaId?: boolean;
    repartoId?: boolean;
    importe?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type obligacioneconomicaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ejercicioId" | "cuotaId" | "facturaProveedorId" | "nominaId" | "repartoId" | "importe" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["obligacioneconomica"]>;
export type obligacioneconomicaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    liquidacionpago?: boolean | Prisma.obligacioneconomica$liquidacionpagoArgs<ExtArgs>;
    cuota?: boolean | Prisma.obligacioneconomica$cuotaArgs<ExtArgs>;
    ejercicio?: boolean | Prisma.ejercicioDefaultArgs<ExtArgs>;
    facturaproveedor?: boolean | Prisma.obligacioneconomica$facturaproveedorArgs<ExtArgs>;
    nomina?: boolean | Prisma.obligacioneconomica$nominaArgs<ExtArgs>;
    reparto?: boolean | Prisma.obligacioneconomica$repartoArgs<ExtArgs>;
    _count?: boolean | Prisma.ObligacioneconomicaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $obligacioneconomicaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "obligacioneconomica";
    objects: {
        liquidacionpago: Prisma.$liquidacionpagoPayload<ExtArgs>[];
        cuota: Prisma.$cuotaPayload<ExtArgs> | null;
        ejercicio: Prisma.$ejercicioPayload<ExtArgs>;
        facturaproveedor: Prisma.$facturaproveedorPayload<ExtArgs> | null;
        nomina: Prisma.$nominaPayload<ExtArgs> | null;
        reparto: Prisma.$repartoPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        ejercicioId: string;
        cuotaId: string | null;
        facturaProveedorId: string | null;
        nominaId: string | null;
        repartoId: string | null;
        importe: runtime.Decimal;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["obligacioneconomica"]>;
    composites: {};
};
export type obligacioneconomicaGetPayload<S extends boolean | null | undefined | obligacioneconomicaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$obligacioneconomicaPayload, S>;
export type obligacioneconomicaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<obligacioneconomicaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ObligacioneconomicaCountAggregateInputType | true;
};
export interface obligacioneconomicaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['obligacioneconomica'];
        meta: {
            name: 'obligacioneconomica';
        };
    };
    /**
     * Find zero or one Obligacioneconomica that matches the filter.
     * @param {obligacioneconomicaFindUniqueArgs} args - Arguments to find a Obligacioneconomica
     * @example
     * // Get one Obligacioneconomica
     * const obligacioneconomica = await prisma.obligacioneconomica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends obligacioneconomicaFindUniqueArgs>(args: Prisma.SelectSubset<T, obligacioneconomicaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__obligacioneconomicaClient<runtime.Types.Result.GetResult<Prisma.$obligacioneconomicaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Obligacioneconomica that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {obligacioneconomicaFindUniqueOrThrowArgs} args - Arguments to find a Obligacioneconomica
     * @example
     * // Get one Obligacioneconomica
     * const obligacioneconomica = await prisma.obligacioneconomica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends obligacioneconomicaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, obligacioneconomicaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__obligacioneconomicaClient<runtime.Types.Result.GetResult<Prisma.$obligacioneconomicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Obligacioneconomica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {obligacioneconomicaFindFirstArgs} args - Arguments to find a Obligacioneconomica
     * @example
     * // Get one Obligacioneconomica
     * const obligacioneconomica = await prisma.obligacioneconomica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends obligacioneconomicaFindFirstArgs>(args?: Prisma.SelectSubset<T, obligacioneconomicaFindFirstArgs<ExtArgs>>): Prisma.Prisma__obligacioneconomicaClient<runtime.Types.Result.GetResult<Prisma.$obligacioneconomicaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Obligacioneconomica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {obligacioneconomicaFindFirstOrThrowArgs} args - Arguments to find a Obligacioneconomica
     * @example
     * // Get one Obligacioneconomica
     * const obligacioneconomica = await prisma.obligacioneconomica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends obligacioneconomicaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, obligacioneconomicaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__obligacioneconomicaClient<runtime.Types.Result.GetResult<Prisma.$obligacioneconomicaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Obligacioneconomicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {obligacioneconomicaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Obligacioneconomicas
     * const obligacioneconomicas = await prisma.obligacioneconomica.findMany()
     *
     * // Get first 10 Obligacioneconomicas
     * const obligacioneconomicas = await prisma.obligacioneconomica.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const obligacioneconomicaWithIdOnly = await prisma.obligacioneconomica.findMany({ select: { id: true } })
     *
     */
    findMany<T extends obligacioneconomicaFindManyArgs>(args?: Prisma.SelectSubset<T, obligacioneconomicaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$obligacioneconomicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Obligacioneconomica.
     * @param {obligacioneconomicaCreateArgs} args - Arguments to create a Obligacioneconomica.
     * @example
     * // Create one Obligacioneconomica
     * const Obligacioneconomica = await prisma.obligacioneconomica.create({
     *   data: {
     *     // ... data to create a Obligacioneconomica
     *   }
     * })
     *
     */
    create<T extends obligacioneconomicaCreateArgs>(args: Prisma.SelectSubset<T, obligacioneconomicaCreateArgs<ExtArgs>>): Prisma.Prisma__obligacioneconomicaClient<runtime.Types.Result.GetResult<Prisma.$obligacioneconomicaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Obligacioneconomicas.
     * @param {obligacioneconomicaCreateManyArgs} args - Arguments to create many Obligacioneconomicas.
     * @example
     * // Create many Obligacioneconomicas
     * const obligacioneconomica = await prisma.obligacioneconomica.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends obligacioneconomicaCreateManyArgs>(args?: Prisma.SelectSubset<T, obligacioneconomicaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Obligacioneconomica.
     * @param {obligacioneconomicaDeleteArgs} args - Arguments to delete one Obligacioneconomica.
     * @example
     * // Delete one Obligacioneconomica
     * const Obligacioneconomica = await prisma.obligacioneconomica.delete({
     *   where: {
     *     // ... filter to delete one Obligacioneconomica
     *   }
     * })
     *
     */
    delete<T extends obligacioneconomicaDeleteArgs>(args: Prisma.SelectSubset<T, obligacioneconomicaDeleteArgs<ExtArgs>>): Prisma.Prisma__obligacioneconomicaClient<runtime.Types.Result.GetResult<Prisma.$obligacioneconomicaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Obligacioneconomica.
     * @param {obligacioneconomicaUpdateArgs} args - Arguments to update one Obligacioneconomica.
     * @example
     * // Update one Obligacioneconomica
     * const obligacioneconomica = await prisma.obligacioneconomica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends obligacioneconomicaUpdateArgs>(args: Prisma.SelectSubset<T, obligacioneconomicaUpdateArgs<ExtArgs>>): Prisma.Prisma__obligacioneconomicaClient<runtime.Types.Result.GetResult<Prisma.$obligacioneconomicaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Obligacioneconomicas.
     * @param {obligacioneconomicaDeleteManyArgs} args - Arguments to filter Obligacioneconomicas to delete.
     * @example
     * // Delete a few Obligacioneconomicas
     * const { count } = await prisma.obligacioneconomica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends obligacioneconomicaDeleteManyArgs>(args?: Prisma.SelectSubset<T, obligacioneconomicaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Obligacioneconomicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {obligacioneconomicaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Obligacioneconomicas
     * const obligacioneconomica = await prisma.obligacioneconomica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends obligacioneconomicaUpdateManyArgs>(args: Prisma.SelectSubset<T, obligacioneconomicaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Obligacioneconomica.
     * @param {obligacioneconomicaUpsertArgs} args - Arguments to update or create a Obligacioneconomica.
     * @example
     * // Update or create a Obligacioneconomica
     * const obligacioneconomica = await prisma.obligacioneconomica.upsert({
     *   create: {
     *     // ... data to create a Obligacioneconomica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Obligacioneconomica we want to update
     *   }
     * })
     */
    upsert<T extends obligacioneconomicaUpsertArgs>(args: Prisma.SelectSubset<T, obligacioneconomicaUpsertArgs<ExtArgs>>): Prisma.Prisma__obligacioneconomicaClient<runtime.Types.Result.GetResult<Prisma.$obligacioneconomicaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Obligacioneconomicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {obligacioneconomicaCountArgs} args - Arguments to filter Obligacioneconomicas to count.
     * @example
     * // Count the number of Obligacioneconomicas
     * const count = await prisma.obligacioneconomica.count({
     *   where: {
     *     // ... the filter for the Obligacioneconomicas we want to count
     *   }
     * })
    **/
    count<T extends obligacioneconomicaCountArgs>(args?: Prisma.Subset<T, obligacioneconomicaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ObligacioneconomicaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Obligacioneconomica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObligacioneconomicaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ObligacioneconomicaAggregateArgs>(args: Prisma.Subset<T, ObligacioneconomicaAggregateArgs>): Prisma.PrismaPromise<GetObligacioneconomicaAggregateType<T>>;
    /**
     * Group by Obligacioneconomica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {obligacioneconomicaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends obligacioneconomicaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: obligacioneconomicaGroupByArgs['orderBy'];
    } : {
        orderBy?: obligacioneconomicaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, obligacioneconomicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObligacioneconomicaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the obligacioneconomica model
     */
    readonly fields: obligacioneconomicaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for obligacioneconomica.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__obligacioneconomicaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    liquidacionpago<T extends Prisma.obligacioneconomica$liquidacionpagoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.obligacioneconomica$liquidacionpagoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$liquidacionpagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cuota<T extends Prisma.obligacioneconomica$cuotaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.obligacioneconomica$cuotaArgs<ExtArgs>>): Prisma.Prisma__cuotaClient<runtime.Types.Result.GetResult<Prisma.$cuotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    ejercicio<T extends Prisma.ejercicioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ejercicioDefaultArgs<ExtArgs>>): Prisma.Prisma__ejercicioClient<runtime.Types.Result.GetResult<Prisma.$ejercicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    facturaproveedor<T extends Prisma.obligacioneconomica$facturaproveedorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.obligacioneconomica$facturaproveedorArgs<ExtArgs>>): Prisma.Prisma__facturaproveedorClient<runtime.Types.Result.GetResult<Prisma.$facturaproveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    nomina<T extends Prisma.obligacioneconomica$nominaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.obligacioneconomica$nominaArgs<ExtArgs>>): Prisma.Prisma__nominaClient<runtime.Types.Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    reparto<T extends Prisma.obligacioneconomica$repartoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.obligacioneconomica$repartoArgs<ExtArgs>>): Prisma.Prisma__repartoClient<runtime.Types.Result.GetResult<Prisma.$repartoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the obligacioneconomica model
 */
export interface obligacioneconomicaFieldRefs {
    readonly id: Prisma.FieldRef<"obligacioneconomica", 'String'>;
    readonly ejercicioId: Prisma.FieldRef<"obligacioneconomica", 'String'>;
    readonly cuotaId: Prisma.FieldRef<"obligacioneconomica", 'String'>;
    readonly facturaProveedorId: Prisma.FieldRef<"obligacioneconomica", 'String'>;
    readonly nominaId: Prisma.FieldRef<"obligacioneconomica", 'String'>;
    readonly repartoId: Prisma.FieldRef<"obligacioneconomica", 'String'>;
    readonly importe: Prisma.FieldRef<"obligacioneconomica", 'Decimal'>;
    readonly observaciones: Prisma.FieldRef<"obligacioneconomica", 'String'>;
    readonly createdAt: Prisma.FieldRef<"obligacioneconomica", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"obligacioneconomica", 'DateTime'>;
}
/**
 * obligacioneconomica findUnique
 */
export type obligacioneconomicaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obligacioneconomica
     */
    select?: Prisma.obligacioneconomicaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the obligacioneconomica
     */
    omit?: Prisma.obligacioneconomicaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.obligacioneconomicaInclude<ExtArgs> | null;
    /**
     * Filter, which obligacioneconomica to fetch.
     */
    where: Prisma.obligacioneconomicaWhereUniqueInput;
};
/**
 * obligacioneconomica findUniqueOrThrow
 */
export type obligacioneconomicaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obligacioneconomica
     */
    select?: Prisma.obligacioneconomicaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the obligacioneconomica
     */
    omit?: Prisma.obligacioneconomicaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.obligacioneconomicaInclude<ExtArgs> | null;
    /**
     * Filter, which obligacioneconomica to fetch.
     */
    where: Prisma.obligacioneconomicaWhereUniqueInput;
};
/**
 * obligacioneconomica findFirst
 */
export type obligacioneconomicaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obligacioneconomica
     */
    select?: Prisma.obligacioneconomicaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the obligacioneconomica
     */
    omit?: Prisma.obligacioneconomicaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.obligacioneconomicaInclude<ExtArgs> | null;
    /**
     * Filter, which obligacioneconomica to fetch.
     */
    where?: Prisma.obligacioneconomicaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of obligacioneconomicas to fetch.
     */
    orderBy?: Prisma.obligacioneconomicaOrderByWithRelationInput | Prisma.obligacioneconomicaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for obligacioneconomicas.
     */
    cursor?: Prisma.obligacioneconomicaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` obligacioneconomicas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` obligacioneconomicas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of obligacioneconomicas.
     */
    distinct?: Prisma.ObligacioneconomicaScalarFieldEnum | Prisma.ObligacioneconomicaScalarFieldEnum[];
};
/**
 * obligacioneconomica findFirstOrThrow
 */
export type obligacioneconomicaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obligacioneconomica
     */
    select?: Prisma.obligacioneconomicaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the obligacioneconomica
     */
    omit?: Prisma.obligacioneconomicaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.obligacioneconomicaInclude<ExtArgs> | null;
    /**
     * Filter, which obligacioneconomica to fetch.
     */
    where?: Prisma.obligacioneconomicaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of obligacioneconomicas to fetch.
     */
    orderBy?: Prisma.obligacioneconomicaOrderByWithRelationInput | Prisma.obligacioneconomicaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for obligacioneconomicas.
     */
    cursor?: Prisma.obligacioneconomicaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` obligacioneconomicas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` obligacioneconomicas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of obligacioneconomicas.
     */
    distinct?: Prisma.ObligacioneconomicaScalarFieldEnum | Prisma.ObligacioneconomicaScalarFieldEnum[];
};
/**
 * obligacioneconomica findMany
 */
export type obligacioneconomicaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obligacioneconomica
     */
    select?: Prisma.obligacioneconomicaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the obligacioneconomica
     */
    omit?: Prisma.obligacioneconomicaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.obligacioneconomicaInclude<ExtArgs> | null;
    /**
     * Filter, which obligacioneconomicas to fetch.
     */
    where?: Prisma.obligacioneconomicaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of obligacioneconomicas to fetch.
     */
    orderBy?: Prisma.obligacioneconomicaOrderByWithRelationInput | Prisma.obligacioneconomicaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing obligacioneconomicas.
     */
    cursor?: Prisma.obligacioneconomicaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` obligacioneconomicas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` obligacioneconomicas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of obligacioneconomicas.
     */
    distinct?: Prisma.ObligacioneconomicaScalarFieldEnum | Prisma.ObligacioneconomicaScalarFieldEnum[];
};
/**
 * obligacioneconomica create
 */
export type obligacioneconomicaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obligacioneconomica
     */
    select?: Prisma.obligacioneconomicaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the obligacioneconomica
     */
    omit?: Prisma.obligacioneconomicaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.obligacioneconomicaInclude<ExtArgs> | null;
    /**
     * The data needed to create a obligacioneconomica.
     */
    data: Prisma.XOR<Prisma.obligacioneconomicaCreateInput, Prisma.obligacioneconomicaUncheckedCreateInput>;
};
/**
 * obligacioneconomica createMany
 */
export type obligacioneconomicaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many obligacioneconomicas.
     */
    data: Prisma.obligacioneconomicaCreateManyInput | Prisma.obligacioneconomicaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * obligacioneconomica update
 */
export type obligacioneconomicaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obligacioneconomica
     */
    select?: Prisma.obligacioneconomicaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the obligacioneconomica
     */
    omit?: Prisma.obligacioneconomicaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.obligacioneconomicaInclude<ExtArgs> | null;
    /**
     * The data needed to update a obligacioneconomica.
     */
    data: Prisma.XOR<Prisma.obligacioneconomicaUpdateInput, Prisma.obligacioneconomicaUncheckedUpdateInput>;
    /**
     * Choose, which obligacioneconomica to update.
     */
    where: Prisma.obligacioneconomicaWhereUniqueInput;
};
/**
 * obligacioneconomica updateMany
 */
export type obligacioneconomicaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update obligacioneconomicas.
     */
    data: Prisma.XOR<Prisma.obligacioneconomicaUpdateManyMutationInput, Prisma.obligacioneconomicaUncheckedUpdateManyInput>;
    /**
     * Filter which obligacioneconomicas to update
     */
    where?: Prisma.obligacioneconomicaWhereInput;
    /**
     * Limit how many obligacioneconomicas to update.
     */
    limit?: number;
};
/**
 * obligacioneconomica upsert
 */
export type obligacioneconomicaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obligacioneconomica
     */
    select?: Prisma.obligacioneconomicaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the obligacioneconomica
     */
    omit?: Prisma.obligacioneconomicaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.obligacioneconomicaInclude<ExtArgs> | null;
    /**
     * The filter to search for the obligacioneconomica to update in case it exists.
     */
    where: Prisma.obligacioneconomicaWhereUniqueInput;
    /**
     * In case the obligacioneconomica found by the `where` argument doesn't exist, create a new obligacioneconomica with this data.
     */
    create: Prisma.XOR<Prisma.obligacioneconomicaCreateInput, Prisma.obligacioneconomicaUncheckedCreateInput>;
    /**
     * In case the obligacioneconomica was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.obligacioneconomicaUpdateInput, Prisma.obligacioneconomicaUncheckedUpdateInput>;
};
/**
 * obligacioneconomica delete
 */
export type obligacioneconomicaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obligacioneconomica
     */
    select?: Prisma.obligacioneconomicaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the obligacioneconomica
     */
    omit?: Prisma.obligacioneconomicaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.obligacioneconomicaInclude<ExtArgs> | null;
    /**
     * Filter which obligacioneconomica to delete.
     */
    where: Prisma.obligacioneconomicaWhereUniqueInput;
};
/**
 * obligacioneconomica deleteMany
 */
export type obligacioneconomicaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which obligacioneconomicas to delete
     */
    where?: Prisma.obligacioneconomicaWhereInput;
    /**
     * Limit how many obligacioneconomicas to delete.
     */
    limit?: number;
};
/**
 * obligacioneconomica.liquidacionpago
 */
export type obligacioneconomica$liquidacionpagoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the liquidacionpago
     */
    select?: Prisma.liquidacionpagoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the liquidacionpago
     */
    omit?: Prisma.liquidacionpagoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.liquidacionpagoInclude<ExtArgs> | null;
    where?: Prisma.liquidacionpagoWhereInput;
    orderBy?: Prisma.liquidacionpagoOrderByWithRelationInput | Prisma.liquidacionpagoOrderByWithRelationInput[];
    cursor?: Prisma.liquidacionpagoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LiquidacionpagoScalarFieldEnum | Prisma.LiquidacionpagoScalarFieldEnum[];
};
/**
 * obligacioneconomica.cuota
 */
export type obligacioneconomica$cuotaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cuota
     */
    select?: Prisma.cuotaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the cuota
     */
    omit?: Prisma.cuotaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.cuotaInclude<ExtArgs> | null;
    where?: Prisma.cuotaWhereInput;
};
/**
 * obligacioneconomica.facturaproveedor
 */
export type obligacioneconomica$facturaproveedorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the facturaproveedor
     */
    select?: Prisma.facturaproveedorSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the facturaproveedor
     */
    omit?: Prisma.facturaproveedorOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.facturaproveedorInclude<ExtArgs> | null;
    where?: Prisma.facturaproveedorWhereInput;
};
/**
 * obligacioneconomica.nomina
 */
export type obligacioneconomica$nominaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nomina
     */
    select?: Prisma.nominaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the nomina
     */
    omit?: Prisma.nominaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.nominaInclude<ExtArgs> | null;
    where?: Prisma.nominaWhereInput;
};
/**
 * obligacioneconomica.reparto
 */
export type obligacioneconomica$repartoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the reparto
     */
    select?: Prisma.repartoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the reparto
     */
    omit?: Prisma.repartoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.repartoInclude<ExtArgs> | null;
    where?: Prisma.repartoWhereInput;
};
/**
 * obligacioneconomica without action
 */
export type obligacioneconomicaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the obligacioneconomica
     */
    select?: Prisma.obligacioneconomicaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the obligacioneconomica
     */
    omit?: Prisma.obligacioneconomicaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.obligacioneconomicaInclude<ExtArgs> | null;
};
//# sourceMappingURL=obligacioneconomica.d.ts.map