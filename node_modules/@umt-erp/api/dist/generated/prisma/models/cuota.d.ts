import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model cuota
 *
 */
export type cuotaModel = runtime.Types.Result.DefaultSelection<Prisma.$cuotaPayload>;
export type AggregateCuota = {
    _count: CuotaCountAggregateOutputType | null;
    _avg: CuotaAvgAggregateOutputType | null;
    _sum: CuotaSumAggregateOutputType | null;
    _min: CuotaMinAggregateOutputType | null;
    _max: CuotaMaxAggregateOutputType | null;
};
export type CuotaAvgAggregateOutputType = {
    importeBase: runtime.Decimal | null;
    ajuste: runtime.Decimal | null;
    importeFinal: runtime.Decimal | null;
};
export type CuotaSumAggregateOutputType = {
    importeBase: runtime.Decimal | null;
    ajuste: runtime.Decimal | null;
    importeFinal: runtime.Decimal | null;
};
export type CuotaMinAggregateOutputType = {
    id: string | null;
    alumnoId: string | null;
    tarifaId: string | null;
    fecha: Date | null;
    importeBase: runtime.Decimal | null;
    ajuste: runtime.Decimal | null;
    importeFinal: runtime.Decimal | null;
    motivoAjuste: string | null;
    estado: $Enums.cuota_estado | null;
    fechaEnvioBanco: Date | null;
    motivoDevolucion: $Enums.cuota_motivoDevolucion | null;
    asientoId: string | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CuotaMaxAggregateOutputType = {
    id: string | null;
    alumnoId: string | null;
    tarifaId: string | null;
    fecha: Date | null;
    importeBase: runtime.Decimal | null;
    ajuste: runtime.Decimal | null;
    importeFinal: runtime.Decimal | null;
    motivoAjuste: string | null;
    estado: $Enums.cuota_estado | null;
    fechaEnvioBanco: Date | null;
    motivoDevolucion: $Enums.cuota_motivoDevolucion | null;
    asientoId: string | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CuotaCountAggregateOutputType = {
    id: number;
    alumnoId: number;
    tarifaId: number;
    fecha: number;
    importeBase: number;
    ajuste: number;
    importeFinal: number;
    motivoAjuste: number;
    estado: number;
    fechaEnvioBanco: number;
    motivoDevolucion: number;
    asientoId: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CuotaAvgAggregateInputType = {
    importeBase?: true;
    ajuste?: true;
    importeFinal?: true;
};
export type CuotaSumAggregateInputType = {
    importeBase?: true;
    ajuste?: true;
    importeFinal?: true;
};
export type CuotaMinAggregateInputType = {
    id?: true;
    alumnoId?: true;
    tarifaId?: true;
    fecha?: true;
    importeBase?: true;
    ajuste?: true;
    importeFinal?: true;
    motivoAjuste?: true;
    estado?: true;
    fechaEnvioBanco?: true;
    motivoDevolucion?: true;
    asientoId?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CuotaMaxAggregateInputType = {
    id?: true;
    alumnoId?: true;
    tarifaId?: true;
    fecha?: true;
    importeBase?: true;
    ajuste?: true;
    importeFinal?: true;
    motivoAjuste?: true;
    estado?: true;
    fechaEnvioBanco?: true;
    motivoDevolucion?: true;
    asientoId?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CuotaCountAggregateInputType = {
    id?: true;
    alumnoId?: true;
    tarifaId?: true;
    fecha?: true;
    importeBase?: true;
    ajuste?: true;
    importeFinal?: true;
    motivoAjuste?: true;
    estado?: true;
    fechaEnvioBanco?: true;
    motivoDevolucion?: true;
    asientoId?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CuotaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which cuota to aggregate.
     */
    where?: Prisma.cuotaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cuotas to fetch.
     */
    orderBy?: Prisma.cuotaOrderByWithRelationInput | Prisma.cuotaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.cuotaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cuotas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cuotas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned cuotas
    **/
    _count?: true | CuotaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CuotaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CuotaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CuotaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CuotaMaxAggregateInputType;
};
export type GetCuotaAggregateType<T extends CuotaAggregateArgs> = {
    [P in keyof T & keyof AggregateCuota]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCuota[P]> : Prisma.GetScalarType<T[P], AggregateCuota[P]>;
};
export type cuotaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cuotaWhereInput;
    orderBy?: Prisma.cuotaOrderByWithAggregationInput | Prisma.cuotaOrderByWithAggregationInput[];
    by: Prisma.CuotaScalarFieldEnum[] | Prisma.CuotaScalarFieldEnum;
    having?: Prisma.cuotaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CuotaCountAggregateInputType | true;
    _avg?: CuotaAvgAggregateInputType;
    _sum?: CuotaSumAggregateInputType;
    _min?: CuotaMinAggregateInputType;
    _max?: CuotaMaxAggregateInputType;
};
export type CuotaGroupByOutputType = {
    id: string;
    alumnoId: string;
    tarifaId: string;
    fecha: Date;
    importeBase: runtime.Decimal;
    ajuste: runtime.Decimal;
    importeFinal: runtime.Decimal;
    motivoAjuste: string | null;
    estado: $Enums.cuota_estado;
    fechaEnvioBanco: Date | null;
    motivoDevolucion: $Enums.cuota_motivoDevolucion | null;
    asientoId: string | null;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CuotaCountAggregateOutputType | null;
    _avg: CuotaAvgAggregateOutputType | null;
    _sum: CuotaSumAggregateOutputType | null;
    _min: CuotaMinAggregateOutputType | null;
    _max: CuotaMaxAggregateOutputType | null;
};
export type GetCuotaGroupByPayload<T extends cuotaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CuotaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CuotaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CuotaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CuotaGroupByOutputType[P]>;
}>>;
export type cuotaWhereInput = {
    AND?: Prisma.cuotaWhereInput | Prisma.cuotaWhereInput[];
    OR?: Prisma.cuotaWhereInput[];
    NOT?: Prisma.cuotaWhereInput | Prisma.cuotaWhereInput[];
    id?: Prisma.StringFilter<"cuota"> | string;
    alumnoId?: Prisma.StringFilter<"cuota"> | string;
    tarifaId?: Prisma.StringFilter<"cuota"> | string;
    fecha?: Prisma.DateTimeFilter<"cuota"> | Date | string;
    importeBase?: Prisma.DecimalFilter<"cuota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: Prisma.DecimalFilter<"cuota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFilter<"cuota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: Prisma.StringNullableFilter<"cuota"> | string | null;
    estado?: Prisma.Enumcuota_estadoFilter<"cuota"> | $Enums.cuota_estado;
    fechaEnvioBanco?: Prisma.DateTimeNullableFilter<"cuota"> | Date | string | null;
    motivoDevolucion?: Prisma.Enumcuota_motivoDevolucionNullableFilter<"cuota"> | $Enums.cuota_motivoDevolucion | null;
    asientoId?: Prisma.StringNullableFilter<"cuota"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"cuota"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"cuota"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"cuota"> | Date | string;
    alumno?: Prisma.XOR<Prisma.AlumnoScalarRelationFilter, Prisma.alumnoWhereInput>;
    tarifa?: Prisma.XOR<Prisma.TarifaScalarRelationFilter, Prisma.tarifaWhereInput>;
    obligacioneconomica?: Prisma.XOR<Prisma.ObligacioneconomicaNullableScalarRelationFilter, Prisma.obligacioneconomicaWhereInput> | null;
    remesacuota?: Prisma.RemesacuotaListRelationFilter;
};
export type cuotaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    alumnoId?: Prisma.SortOrder;
    tarifaId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    importeBase?: Prisma.SortOrder;
    ajuste?: Prisma.SortOrder;
    importeFinal?: Prisma.SortOrder;
    motivoAjuste?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaEnvioBanco?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivoDevolucion?: Prisma.SortOrderInput | Prisma.SortOrder;
    asientoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    alumno?: Prisma.alumnoOrderByWithRelationInput;
    tarifa?: Prisma.tarifaOrderByWithRelationInput;
    obligacioneconomica?: Prisma.obligacioneconomicaOrderByWithRelationInput;
    remesacuota?: Prisma.remesacuotaOrderByRelationAggregateInput;
    _relevance?: Prisma.cuotaOrderByRelevanceInput;
};
export type cuotaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.cuotaWhereInput | Prisma.cuotaWhereInput[];
    OR?: Prisma.cuotaWhereInput[];
    NOT?: Prisma.cuotaWhereInput | Prisma.cuotaWhereInput[];
    alumnoId?: Prisma.StringFilter<"cuota"> | string;
    tarifaId?: Prisma.StringFilter<"cuota"> | string;
    fecha?: Prisma.DateTimeFilter<"cuota"> | Date | string;
    importeBase?: Prisma.DecimalFilter<"cuota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: Prisma.DecimalFilter<"cuota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFilter<"cuota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: Prisma.StringNullableFilter<"cuota"> | string | null;
    estado?: Prisma.Enumcuota_estadoFilter<"cuota"> | $Enums.cuota_estado;
    fechaEnvioBanco?: Prisma.DateTimeNullableFilter<"cuota"> | Date | string | null;
    motivoDevolucion?: Prisma.Enumcuota_motivoDevolucionNullableFilter<"cuota"> | $Enums.cuota_motivoDevolucion | null;
    asientoId?: Prisma.StringNullableFilter<"cuota"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"cuota"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"cuota"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"cuota"> | Date | string;
    alumno?: Prisma.XOR<Prisma.AlumnoScalarRelationFilter, Prisma.alumnoWhereInput>;
    tarifa?: Prisma.XOR<Prisma.TarifaScalarRelationFilter, Prisma.tarifaWhereInput>;
    obligacioneconomica?: Prisma.XOR<Prisma.ObligacioneconomicaNullableScalarRelationFilter, Prisma.obligacioneconomicaWhereInput> | null;
    remesacuota?: Prisma.RemesacuotaListRelationFilter;
}, "id">;
export type cuotaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    alumnoId?: Prisma.SortOrder;
    tarifaId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    importeBase?: Prisma.SortOrder;
    ajuste?: Prisma.SortOrder;
    importeFinal?: Prisma.SortOrder;
    motivoAjuste?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaEnvioBanco?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivoDevolucion?: Prisma.SortOrderInput | Prisma.SortOrder;
    asientoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.cuotaCountOrderByAggregateInput;
    _avg?: Prisma.cuotaAvgOrderByAggregateInput;
    _max?: Prisma.cuotaMaxOrderByAggregateInput;
    _min?: Prisma.cuotaMinOrderByAggregateInput;
    _sum?: Prisma.cuotaSumOrderByAggregateInput;
};
export type cuotaScalarWhereWithAggregatesInput = {
    AND?: Prisma.cuotaScalarWhereWithAggregatesInput | Prisma.cuotaScalarWhereWithAggregatesInput[];
    OR?: Prisma.cuotaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.cuotaScalarWhereWithAggregatesInput | Prisma.cuotaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"cuota"> | string;
    alumnoId?: Prisma.StringWithAggregatesFilter<"cuota"> | string;
    tarifaId?: Prisma.StringWithAggregatesFilter<"cuota"> | string;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"cuota"> | Date | string;
    importeBase?: Prisma.DecimalWithAggregatesFilter<"cuota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: Prisma.DecimalWithAggregatesFilter<"cuota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalWithAggregatesFilter<"cuota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: Prisma.StringNullableWithAggregatesFilter<"cuota"> | string | null;
    estado?: Prisma.Enumcuota_estadoWithAggregatesFilter<"cuota"> | $Enums.cuota_estado;
    fechaEnvioBanco?: Prisma.DateTimeNullableWithAggregatesFilter<"cuota"> | Date | string | null;
    motivoDevolucion?: Prisma.Enumcuota_motivoDevolucionNullableWithAggregatesFilter<"cuota"> | $Enums.cuota_motivoDevolucion | null;
    asientoId?: Prisma.StringNullableWithAggregatesFilter<"cuota"> | string | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"cuota"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"cuota"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"cuota"> | Date | string;
};
export type cuotaCreateInput = {
    id: string;
    fecha: Date | string;
    importeBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: string | null;
    estado?: $Enums.cuota_estado;
    fechaEnvioBanco?: Date | string | null;
    motivoDevolucion?: $Enums.cuota_motivoDevolucion | null;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno: Prisma.alumnoCreateNestedOneWithoutCuotaInput;
    tarifa: Prisma.tarifaCreateNestedOneWithoutCuotaInput;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedOneWithoutCuotaInput;
    remesacuota?: Prisma.remesacuotaCreateNestedManyWithoutCuotaInput;
};
export type cuotaUncheckedCreateInput = {
    id: string;
    alumnoId: string;
    tarifaId: string;
    fecha: Date | string;
    importeBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: string | null;
    estado?: $Enums.cuota_estado;
    fechaEnvioBanco?: Date | string | null;
    motivoDevolucion?: $Enums.cuota_motivoDevolucion | null;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedOneWithoutCuotaInput;
    remesacuota?: Prisma.remesacuotaUncheckedCreateNestedManyWithoutCuotaInput;
};
export type cuotaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.Enumcuota_estadoFieldUpdateOperationsInput | $Enums.cuota_estado;
    fechaEnvioBanco?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoDevolucion?: Prisma.NullableEnumcuota_motivoDevolucionFieldUpdateOperationsInput | $Enums.cuota_motivoDevolucion | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUpdateOneRequiredWithoutCuotaNestedInput;
    tarifa?: Prisma.tarifaUpdateOneRequiredWithoutCuotaNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateOneWithoutCuotaNestedInput;
    remesacuota?: Prisma.remesacuotaUpdateManyWithoutCuotaNestedInput;
};
export type cuotaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alumnoId?: Prisma.StringFieldUpdateOperationsInput | string;
    tarifaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.Enumcuota_estadoFieldUpdateOperationsInput | $Enums.cuota_estado;
    fechaEnvioBanco?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoDevolucion?: Prisma.NullableEnumcuota_motivoDevolucionFieldUpdateOperationsInput | $Enums.cuota_motivoDevolucion | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateOneWithoutCuotaNestedInput;
    remesacuota?: Prisma.remesacuotaUncheckedUpdateManyWithoutCuotaNestedInput;
};
export type cuotaCreateManyInput = {
    id: string;
    alumnoId: string;
    tarifaId: string;
    fecha: Date | string;
    importeBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: string | null;
    estado?: $Enums.cuota_estado;
    fechaEnvioBanco?: Date | string | null;
    motivoDevolucion?: $Enums.cuota_motivoDevolucion | null;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type cuotaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.Enumcuota_estadoFieldUpdateOperationsInput | $Enums.cuota_estado;
    fechaEnvioBanco?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoDevolucion?: Prisma.NullableEnumcuota_motivoDevolucionFieldUpdateOperationsInput | $Enums.cuota_motivoDevolucion | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cuotaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alumnoId?: Prisma.StringFieldUpdateOperationsInput | string;
    tarifaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.Enumcuota_estadoFieldUpdateOperationsInput | $Enums.cuota_estado;
    fechaEnvioBanco?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoDevolucion?: Prisma.NullableEnumcuota_motivoDevolucionFieldUpdateOperationsInput | $Enums.cuota_motivoDevolucion | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CuotaListRelationFilter = {
    every?: Prisma.cuotaWhereInput;
    some?: Prisma.cuotaWhereInput;
    none?: Prisma.cuotaWhereInput;
};
export type cuotaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type cuotaOrderByRelevanceInput = {
    fields: Prisma.cuotaOrderByRelevanceFieldEnum | Prisma.cuotaOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type cuotaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alumnoId?: Prisma.SortOrder;
    tarifaId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    importeBase?: Prisma.SortOrder;
    ajuste?: Prisma.SortOrder;
    importeFinal?: Prisma.SortOrder;
    motivoAjuste?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaEnvioBanco?: Prisma.SortOrder;
    motivoDevolucion?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type cuotaAvgOrderByAggregateInput = {
    importeBase?: Prisma.SortOrder;
    ajuste?: Prisma.SortOrder;
    importeFinal?: Prisma.SortOrder;
};
export type cuotaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alumnoId?: Prisma.SortOrder;
    tarifaId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    importeBase?: Prisma.SortOrder;
    ajuste?: Prisma.SortOrder;
    importeFinal?: Prisma.SortOrder;
    motivoAjuste?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaEnvioBanco?: Prisma.SortOrder;
    motivoDevolucion?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type cuotaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    alumnoId?: Prisma.SortOrder;
    tarifaId?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    importeBase?: Prisma.SortOrder;
    ajuste?: Prisma.SortOrder;
    importeFinal?: Prisma.SortOrder;
    motivoAjuste?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fechaEnvioBanco?: Prisma.SortOrder;
    motivoDevolucion?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type cuotaSumOrderByAggregateInput = {
    importeBase?: Prisma.SortOrder;
    ajuste?: Prisma.SortOrder;
    importeFinal?: Prisma.SortOrder;
};
export type CuotaNullableScalarRelationFilter = {
    is?: Prisma.cuotaWhereInput | null;
    isNot?: Prisma.cuotaWhereInput | null;
};
export type CuotaScalarRelationFilter = {
    is?: Prisma.cuotaWhereInput;
    isNot?: Prisma.cuotaWhereInput;
};
export type cuotaCreateNestedManyWithoutAlumnoInput = {
    create?: Prisma.XOR<Prisma.cuotaCreateWithoutAlumnoInput, Prisma.cuotaUncheckedCreateWithoutAlumnoInput> | Prisma.cuotaCreateWithoutAlumnoInput[] | Prisma.cuotaUncheckedCreateWithoutAlumnoInput[];
    connectOrCreate?: Prisma.cuotaCreateOrConnectWithoutAlumnoInput | Prisma.cuotaCreateOrConnectWithoutAlumnoInput[];
    createMany?: Prisma.cuotaCreateManyAlumnoInputEnvelope;
    connect?: Prisma.cuotaWhereUniqueInput | Prisma.cuotaWhereUniqueInput[];
};
export type cuotaUncheckedCreateNestedManyWithoutAlumnoInput = {
    create?: Prisma.XOR<Prisma.cuotaCreateWithoutAlumnoInput, Prisma.cuotaUncheckedCreateWithoutAlumnoInput> | Prisma.cuotaCreateWithoutAlumnoInput[] | Prisma.cuotaUncheckedCreateWithoutAlumnoInput[];
    connectOrCreate?: Prisma.cuotaCreateOrConnectWithoutAlumnoInput | Prisma.cuotaCreateOrConnectWithoutAlumnoInput[];
    createMany?: Prisma.cuotaCreateManyAlumnoInputEnvelope;
    connect?: Prisma.cuotaWhereUniqueInput | Prisma.cuotaWhereUniqueInput[];
};
export type cuotaUpdateManyWithoutAlumnoNestedInput = {
    create?: Prisma.XOR<Prisma.cuotaCreateWithoutAlumnoInput, Prisma.cuotaUncheckedCreateWithoutAlumnoInput> | Prisma.cuotaCreateWithoutAlumnoInput[] | Prisma.cuotaUncheckedCreateWithoutAlumnoInput[];
    connectOrCreate?: Prisma.cuotaCreateOrConnectWithoutAlumnoInput | Prisma.cuotaCreateOrConnectWithoutAlumnoInput[];
    upsert?: Prisma.cuotaUpsertWithWhereUniqueWithoutAlumnoInput | Prisma.cuotaUpsertWithWhereUniqueWithoutAlumnoInput[];
    createMany?: Prisma.cuotaCreateManyAlumnoInputEnvelope;
    set?: Prisma.cuotaWhereUniqueInput | Prisma.cuotaWhereUniqueInput[];
    disconnect?: Prisma.cuotaWhereUniqueInput | Prisma.cuotaWhereUniqueInput[];
    delete?: Prisma.cuotaWhereUniqueInput | Prisma.cuotaWhereUniqueInput[];
    connect?: Prisma.cuotaWhereUniqueInput | Prisma.cuotaWhereUniqueInput[];
    update?: Prisma.cuotaUpdateWithWhereUniqueWithoutAlumnoInput | Prisma.cuotaUpdateWithWhereUniqueWithoutAlumnoInput[];
    updateMany?: Prisma.cuotaUpdateManyWithWhereWithoutAlumnoInput | Prisma.cuotaUpdateManyWithWhereWithoutAlumnoInput[];
    deleteMany?: Prisma.cuotaScalarWhereInput | Prisma.cuotaScalarWhereInput[];
};
export type cuotaUncheckedUpdateManyWithoutAlumnoNestedInput = {
    create?: Prisma.XOR<Prisma.cuotaCreateWithoutAlumnoInput, Prisma.cuotaUncheckedCreateWithoutAlumnoInput> | Prisma.cuotaCreateWithoutAlumnoInput[] | Prisma.cuotaUncheckedCreateWithoutAlumnoInput[];
    connectOrCreate?: Prisma.cuotaCreateOrConnectWithoutAlumnoInput | Prisma.cuotaCreateOrConnectWithoutAlumnoInput[];
    upsert?: Prisma.cuotaUpsertWithWhereUniqueWithoutAlumnoInput | Prisma.cuotaUpsertWithWhereUniqueWithoutAlumnoInput[];
    createMany?: Prisma.cuotaCreateManyAlumnoInputEnvelope;
    set?: Prisma.cuotaWhereUniqueInput | Prisma.cuotaWhereUniqueInput[];
    disconnect?: Prisma.cuotaWhereUniqueInput | Prisma.cuotaWhereUniqueInput[];
    delete?: Prisma.cuotaWhereUniqueInput | Prisma.cuotaWhereUniqueInput[];
    connect?: Prisma.cuotaWhereUniqueInput | Prisma.cuotaWhereUniqueInput[];
    update?: Prisma.cuotaUpdateWithWhereUniqueWithoutAlumnoInput | Prisma.cuotaUpdateWithWhereUniqueWithoutAlumnoInput[];
    updateMany?: Prisma.cuotaUpdateManyWithWhereWithoutAlumnoInput | Prisma.cuotaUpdateManyWithWhereWithoutAlumnoInput[];
    deleteMany?: Prisma.cuotaScalarWhereInput | Prisma.cuotaScalarWhereInput[];
};
export type Enumcuota_estadoFieldUpdateOperationsInput = {
    set?: $Enums.cuota_estado;
};
export type NullableEnumcuota_motivoDevolucionFieldUpdateOperationsInput = {
    set?: $Enums.cuota_motivoDevolucion | null;
};
export type cuotaCreateNestedOneWithoutObligacioneconomicaInput = {
    create?: Prisma.XOR<Prisma.cuotaCreateWithoutObligacioneconomicaInput, Prisma.cuotaUncheckedCreateWithoutObligacioneconomicaInput>;
    connectOrCreate?: Prisma.cuotaCreateOrConnectWithoutObligacioneconomicaInput;
    connect?: Prisma.cuotaWhereUniqueInput;
};
export type cuotaUpdateOneWithoutObligacioneconomicaNestedInput = {
    create?: Prisma.XOR<Prisma.cuotaCreateWithoutObligacioneconomicaInput, Prisma.cuotaUncheckedCreateWithoutObligacioneconomicaInput>;
    connectOrCreate?: Prisma.cuotaCreateOrConnectWithoutObligacioneconomicaInput;
    upsert?: Prisma.cuotaUpsertWithoutObligacioneconomicaInput;
    disconnect?: Prisma.cuotaWhereInput | boolean;
    delete?: Prisma.cuotaWhereInput | boolean;
    connect?: Prisma.cuotaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cuotaUpdateToOneWithWhereWithoutObligacioneconomicaInput, Prisma.cuotaUpdateWithoutObligacioneconomicaInput>, Prisma.cuotaUncheckedUpdateWithoutObligacioneconomicaInput>;
};
export type cuotaCreateNestedOneWithoutRemesacuotaInput = {
    create?: Prisma.XOR<Prisma.cuotaCreateWithoutRemesacuotaInput, Prisma.cuotaUncheckedCreateWithoutRemesacuotaInput>;
    connectOrCreate?: Prisma.cuotaCreateOrConnectWithoutRemesacuotaInput;
    connect?: Prisma.cuotaWhereUniqueInput;
};
export type cuotaUpdateOneRequiredWithoutRemesacuotaNestedInput = {
    create?: Prisma.XOR<Prisma.cuotaCreateWithoutRemesacuotaInput, Prisma.cuotaUncheckedCreateWithoutRemesacuotaInput>;
    connectOrCreate?: Prisma.cuotaCreateOrConnectWithoutRemesacuotaInput;
    upsert?: Prisma.cuotaUpsertWithoutRemesacuotaInput;
    connect?: Prisma.cuotaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cuotaUpdateToOneWithWhereWithoutRemesacuotaInput, Prisma.cuotaUpdateWithoutRemesacuotaInput>, Prisma.cuotaUncheckedUpdateWithoutRemesacuotaInput>;
};
export type cuotaCreateNestedManyWithoutTarifaInput = {
    create?: Prisma.XOR<Prisma.cuotaCreateWithoutTarifaInput, Prisma.cuotaUncheckedCreateWithoutTarifaInput> | Prisma.cuotaCreateWithoutTarifaInput[] | Prisma.cuotaUncheckedCreateWithoutTarifaInput[];
    connectOrCreate?: Prisma.cuotaCreateOrConnectWithoutTarifaInput | Prisma.cuotaCreateOrConnectWithoutTarifaInput[];
    createMany?: Prisma.cuotaCreateManyTarifaInputEnvelope;
    connect?: Prisma.cuotaWhereUniqueInput | Prisma.cuotaWhereUniqueInput[];
};
export type cuotaUncheckedCreateNestedManyWithoutTarifaInput = {
    create?: Prisma.XOR<Prisma.cuotaCreateWithoutTarifaInput, Prisma.cuotaUncheckedCreateWithoutTarifaInput> | Prisma.cuotaCreateWithoutTarifaInput[] | Prisma.cuotaUncheckedCreateWithoutTarifaInput[];
    connectOrCreate?: Prisma.cuotaCreateOrConnectWithoutTarifaInput | Prisma.cuotaCreateOrConnectWithoutTarifaInput[];
    createMany?: Prisma.cuotaCreateManyTarifaInputEnvelope;
    connect?: Prisma.cuotaWhereUniqueInput | Prisma.cuotaWhereUniqueInput[];
};
export type cuotaUpdateManyWithoutTarifaNestedInput = {
    create?: Prisma.XOR<Prisma.cuotaCreateWithoutTarifaInput, Prisma.cuotaUncheckedCreateWithoutTarifaInput> | Prisma.cuotaCreateWithoutTarifaInput[] | Prisma.cuotaUncheckedCreateWithoutTarifaInput[];
    connectOrCreate?: Prisma.cuotaCreateOrConnectWithoutTarifaInput | Prisma.cuotaCreateOrConnectWithoutTarifaInput[];
    upsert?: Prisma.cuotaUpsertWithWhereUniqueWithoutTarifaInput | Prisma.cuotaUpsertWithWhereUniqueWithoutTarifaInput[];
    createMany?: Prisma.cuotaCreateManyTarifaInputEnvelope;
    set?: Prisma.cuotaWhereUniqueInput | Prisma.cuotaWhereUniqueInput[];
    disconnect?: Prisma.cuotaWhereUniqueInput | Prisma.cuotaWhereUniqueInput[];
    delete?: Prisma.cuotaWhereUniqueInput | Prisma.cuotaWhereUniqueInput[];
    connect?: Prisma.cuotaWhereUniqueInput | Prisma.cuotaWhereUniqueInput[];
    update?: Prisma.cuotaUpdateWithWhereUniqueWithoutTarifaInput | Prisma.cuotaUpdateWithWhereUniqueWithoutTarifaInput[];
    updateMany?: Prisma.cuotaUpdateManyWithWhereWithoutTarifaInput | Prisma.cuotaUpdateManyWithWhereWithoutTarifaInput[];
    deleteMany?: Prisma.cuotaScalarWhereInput | Prisma.cuotaScalarWhereInput[];
};
export type cuotaUncheckedUpdateManyWithoutTarifaNestedInput = {
    create?: Prisma.XOR<Prisma.cuotaCreateWithoutTarifaInput, Prisma.cuotaUncheckedCreateWithoutTarifaInput> | Prisma.cuotaCreateWithoutTarifaInput[] | Prisma.cuotaUncheckedCreateWithoutTarifaInput[];
    connectOrCreate?: Prisma.cuotaCreateOrConnectWithoutTarifaInput | Prisma.cuotaCreateOrConnectWithoutTarifaInput[];
    upsert?: Prisma.cuotaUpsertWithWhereUniqueWithoutTarifaInput | Prisma.cuotaUpsertWithWhereUniqueWithoutTarifaInput[];
    createMany?: Prisma.cuotaCreateManyTarifaInputEnvelope;
    set?: Prisma.cuotaWhereUniqueInput | Prisma.cuotaWhereUniqueInput[];
    disconnect?: Prisma.cuotaWhereUniqueInput | Prisma.cuotaWhereUniqueInput[];
    delete?: Prisma.cuotaWhereUniqueInput | Prisma.cuotaWhereUniqueInput[];
    connect?: Prisma.cuotaWhereUniqueInput | Prisma.cuotaWhereUniqueInput[];
    update?: Prisma.cuotaUpdateWithWhereUniqueWithoutTarifaInput | Prisma.cuotaUpdateWithWhereUniqueWithoutTarifaInput[];
    updateMany?: Prisma.cuotaUpdateManyWithWhereWithoutTarifaInput | Prisma.cuotaUpdateManyWithWhereWithoutTarifaInput[];
    deleteMany?: Prisma.cuotaScalarWhereInput | Prisma.cuotaScalarWhereInput[];
};
export type cuotaCreateWithoutAlumnoInput = {
    id: string;
    fecha: Date | string;
    importeBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: string | null;
    estado?: $Enums.cuota_estado;
    fechaEnvioBanco?: Date | string | null;
    motivoDevolucion?: $Enums.cuota_motivoDevolucion | null;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    tarifa: Prisma.tarifaCreateNestedOneWithoutCuotaInput;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedOneWithoutCuotaInput;
    remesacuota?: Prisma.remesacuotaCreateNestedManyWithoutCuotaInput;
};
export type cuotaUncheckedCreateWithoutAlumnoInput = {
    id: string;
    tarifaId: string;
    fecha: Date | string;
    importeBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: string | null;
    estado?: $Enums.cuota_estado;
    fechaEnvioBanco?: Date | string | null;
    motivoDevolucion?: $Enums.cuota_motivoDevolucion | null;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedOneWithoutCuotaInput;
    remesacuota?: Prisma.remesacuotaUncheckedCreateNestedManyWithoutCuotaInput;
};
export type cuotaCreateOrConnectWithoutAlumnoInput = {
    where: Prisma.cuotaWhereUniqueInput;
    create: Prisma.XOR<Prisma.cuotaCreateWithoutAlumnoInput, Prisma.cuotaUncheckedCreateWithoutAlumnoInput>;
};
export type cuotaCreateManyAlumnoInputEnvelope = {
    data: Prisma.cuotaCreateManyAlumnoInput | Prisma.cuotaCreateManyAlumnoInput[];
    skipDuplicates?: boolean;
};
export type cuotaUpsertWithWhereUniqueWithoutAlumnoInput = {
    where: Prisma.cuotaWhereUniqueInput;
    update: Prisma.XOR<Prisma.cuotaUpdateWithoutAlumnoInput, Prisma.cuotaUncheckedUpdateWithoutAlumnoInput>;
    create: Prisma.XOR<Prisma.cuotaCreateWithoutAlumnoInput, Prisma.cuotaUncheckedCreateWithoutAlumnoInput>;
};
export type cuotaUpdateWithWhereUniqueWithoutAlumnoInput = {
    where: Prisma.cuotaWhereUniqueInput;
    data: Prisma.XOR<Prisma.cuotaUpdateWithoutAlumnoInput, Prisma.cuotaUncheckedUpdateWithoutAlumnoInput>;
};
export type cuotaUpdateManyWithWhereWithoutAlumnoInput = {
    where: Prisma.cuotaScalarWhereInput;
    data: Prisma.XOR<Prisma.cuotaUpdateManyMutationInput, Prisma.cuotaUncheckedUpdateManyWithoutAlumnoInput>;
};
export type cuotaScalarWhereInput = {
    AND?: Prisma.cuotaScalarWhereInput | Prisma.cuotaScalarWhereInput[];
    OR?: Prisma.cuotaScalarWhereInput[];
    NOT?: Prisma.cuotaScalarWhereInput | Prisma.cuotaScalarWhereInput[];
    id?: Prisma.StringFilter<"cuota"> | string;
    alumnoId?: Prisma.StringFilter<"cuota"> | string;
    tarifaId?: Prisma.StringFilter<"cuota"> | string;
    fecha?: Prisma.DateTimeFilter<"cuota"> | Date | string;
    importeBase?: Prisma.DecimalFilter<"cuota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: Prisma.DecimalFilter<"cuota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFilter<"cuota"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: Prisma.StringNullableFilter<"cuota"> | string | null;
    estado?: Prisma.Enumcuota_estadoFilter<"cuota"> | $Enums.cuota_estado;
    fechaEnvioBanco?: Prisma.DateTimeNullableFilter<"cuota"> | Date | string | null;
    motivoDevolucion?: Prisma.Enumcuota_motivoDevolucionNullableFilter<"cuota"> | $Enums.cuota_motivoDevolucion | null;
    asientoId?: Prisma.StringNullableFilter<"cuota"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"cuota"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"cuota"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"cuota"> | Date | string;
};
export type cuotaCreateWithoutObligacioneconomicaInput = {
    id: string;
    fecha: Date | string;
    importeBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: string | null;
    estado?: $Enums.cuota_estado;
    fechaEnvioBanco?: Date | string | null;
    motivoDevolucion?: $Enums.cuota_motivoDevolucion | null;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno: Prisma.alumnoCreateNestedOneWithoutCuotaInput;
    tarifa: Prisma.tarifaCreateNestedOneWithoutCuotaInput;
    remesacuota?: Prisma.remesacuotaCreateNestedManyWithoutCuotaInput;
};
export type cuotaUncheckedCreateWithoutObligacioneconomicaInput = {
    id: string;
    alumnoId: string;
    tarifaId: string;
    fecha: Date | string;
    importeBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: string | null;
    estado?: $Enums.cuota_estado;
    fechaEnvioBanco?: Date | string | null;
    motivoDevolucion?: $Enums.cuota_motivoDevolucion | null;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    remesacuota?: Prisma.remesacuotaUncheckedCreateNestedManyWithoutCuotaInput;
};
export type cuotaCreateOrConnectWithoutObligacioneconomicaInput = {
    where: Prisma.cuotaWhereUniqueInput;
    create: Prisma.XOR<Prisma.cuotaCreateWithoutObligacioneconomicaInput, Prisma.cuotaUncheckedCreateWithoutObligacioneconomicaInput>;
};
export type cuotaUpsertWithoutObligacioneconomicaInput = {
    update: Prisma.XOR<Prisma.cuotaUpdateWithoutObligacioneconomicaInput, Prisma.cuotaUncheckedUpdateWithoutObligacioneconomicaInput>;
    create: Prisma.XOR<Prisma.cuotaCreateWithoutObligacioneconomicaInput, Prisma.cuotaUncheckedCreateWithoutObligacioneconomicaInput>;
    where?: Prisma.cuotaWhereInput;
};
export type cuotaUpdateToOneWithWhereWithoutObligacioneconomicaInput = {
    where?: Prisma.cuotaWhereInput;
    data: Prisma.XOR<Prisma.cuotaUpdateWithoutObligacioneconomicaInput, Prisma.cuotaUncheckedUpdateWithoutObligacioneconomicaInput>;
};
export type cuotaUpdateWithoutObligacioneconomicaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.Enumcuota_estadoFieldUpdateOperationsInput | $Enums.cuota_estado;
    fechaEnvioBanco?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoDevolucion?: Prisma.NullableEnumcuota_motivoDevolucionFieldUpdateOperationsInput | $Enums.cuota_motivoDevolucion | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUpdateOneRequiredWithoutCuotaNestedInput;
    tarifa?: Prisma.tarifaUpdateOneRequiredWithoutCuotaNestedInput;
    remesacuota?: Prisma.remesacuotaUpdateManyWithoutCuotaNestedInput;
};
export type cuotaUncheckedUpdateWithoutObligacioneconomicaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alumnoId?: Prisma.StringFieldUpdateOperationsInput | string;
    tarifaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.Enumcuota_estadoFieldUpdateOperationsInput | $Enums.cuota_estado;
    fechaEnvioBanco?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoDevolucion?: Prisma.NullableEnumcuota_motivoDevolucionFieldUpdateOperationsInput | $Enums.cuota_motivoDevolucion | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    remesacuota?: Prisma.remesacuotaUncheckedUpdateManyWithoutCuotaNestedInput;
};
export type cuotaCreateWithoutRemesacuotaInput = {
    id: string;
    fecha: Date | string;
    importeBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: string | null;
    estado?: $Enums.cuota_estado;
    fechaEnvioBanco?: Date | string | null;
    motivoDevolucion?: $Enums.cuota_motivoDevolucion | null;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno: Prisma.alumnoCreateNestedOneWithoutCuotaInput;
    tarifa: Prisma.tarifaCreateNestedOneWithoutCuotaInput;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedOneWithoutCuotaInput;
};
export type cuotaUncheckedCreateWithoutRemesacuotaInput = {
    id: string;
    alumnoId: string;
    tarifaId: string;
    fecha: Date | string;
    importeBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: string | null;
    estado?: $Enums.cuota_estado;
    fechaEnvioBanco?: Date | string | null;
    motivoDevolucion?: $Enums.cuota_motivoDevolucion | null;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedOneWithoutCuotaInput;
};
export type cuotaCreateOrConnectWithoutRemesacuotaInput = {
    where: Prisma.cuotaWhereUniqueInput;
    create: Prisma.XOR<Prisma.cuotaCreateWithoutRemesacuotaInput, Prisma.cuotaUncheckedCreateWithoutRemesacuotaInput>;
};
export type cuotaUpsertWithoutRemesacuotaInput = {
    update: Prisma.XOR<Prisma.cuotaUpdateWithoutRemesacuotaInput, Prisma.cuotaUncheckedUpdateWithoutRemesacuotaInput>;
    create: Prisma.XOR<Prisma.cuotaCreateWithoutRemesacuotaInput, Prisma.cuotaUncheckedCreateWithoutRemesacuotaInput>;
    where?: Prisma.cuotaWhereInput;
};
export type cuotaUpdateToOneWithWhereWithoutRemesacuotaInput = {
    where?: Prisma.cuotaWhereInput;
    data: Prisma.XOR<Prisma.cuotaUpdateWithoutRemesacuotaInput, Prisma.cuotaUncheckedUpdateWithoutRemesacuotaInput>;
};
export type cuotaUpdateWithoutRemesacuotaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.Enumcuota_estadoFieldUpdateOperationsInput | $Enums.cuota_estado;
    fechaEnvioBanco?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoDevolucion?: Prisma.NullableEnumcuota_motivoDevolucionFieldUpdateOperationsInput | $Enums.cuota_motivoDevolucion | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUpdateOneRequiredWithoutCuotaNestedInput;
    tarifa?: Prisma.tarifaUpdateOneRequiredWithoutCuotaNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateOneWithoutCuotaNestedInput;
};
export type cuotaUncheckedUpdateWithoutRemesacuotaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alumnoId?: Prisma.StringFieldUpdateOperationsInput | string;
    tarifaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.Enumcuota_estadoFieldUpdateOperationsInput | $Enums.cuota_estado;
    fechaEnvioBanco?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoDevolucion?: Prisma.NullableEnumcuota_motivoDevolucionFieldUpdateOperationsInput | $Enums.cuota_motivoDevolucion | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateOneWithoutCuotaNestedInput;
};
export type cuotaCreateWithoutTarifaInput = {
    id: string;
    fecha: Date | string;
    importeBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: string | null;
    estado?: $Enums.cuota_estado;
    fechaEnvioBanco?: Date | string | null;
    motivoDevolucion?: $Enums.cuota_motivoDevolucion | null;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    alumno: Prisma.alumnoCreateNestedOneWithoutCuotaInput;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedOneWithoutCuotaInput;
    remesacuota?: Prisma.remesacuotaCreateNestedManyWithoutCuotaInput;
};
export type cuotaUncheckedCreateWithoutTarifaInput = {
    id: string;
    alumnoId: string;
    fecha: Date | string;
    importeBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: string | null;
    estado?: $Enums.cuota_estado;
    fechaEnvioBanco?: Date | string | null;
    motivoDevolucion?: $Enums.cuota_motivoDevolucion | null;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedOneWithoutCuotaInput;
    remesacuota?: Prisma.remesacuotaUncheckedCreateNestedManyWithoutCuotaInput;
};
export type cuotaCreateOrConnectWithoutTarifaInput = {
    where: Prisma.cuotaWhereUniqueInput;
    create: Prisma.XOR<Prisma.cuotaCreateWithoutTarifaInput, Prisma.cuotaUncheckedCreateWithoutTarifaInput>;
};
export type cuotaCreateManyTarifaInputEnvelope = {
    data: Prisma.cuotaCreateManyTarifaInput | Prisma.cuotaCreateManyTarifaInput[];
    skipDuplicates?: boolean;
};
export type cuotaUpsertWithWhereUniqueWithoutTarifaInput = {
    where: Prisma.cuotaWhereUniqueInput;
    update: Prisma.XOR<Prisma.cuotaUpdateWithoutTarifaInput, Prisma.cuotaUncheckedUpdateWithoutTarifaInput>;
    create: Prisma.XOR<Prisma.cuotaCreateWithoutTarifaInput, Prisma.cuotaUncheckedCreateWithoutTarifaInput>;
};
export type cuotaUpdateWithWhereUniqueWithoutTarifaInput = {
    where: Prisma.cuotaWhereUniqueInput;
    data: Prisma.XOR<Prisma.cuotaUpdateWithoutTarifaInput, Prisma.cuotaUncheckedUpdateWithoutTarifaInput>;
};
export type cuotaUpdateManyWithWhereWithoutTarifaInput = {
    where: Prisma.cuotaScalarWhereInput;
    data: Prisma.XOR<Prisma.cuotaUpdateManyMutationInput, Prisma.cuotaUncheckedUpdateManyWithoutTarifaInput>;
};
export type cuotaCreateManyAlumnoInput = {
    id: string;
    tarifaId: string;
    fecha: Date | string;
    importeBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: string | null;
    estado?: $Enums.cuota_estado;
    fechaEnvioBanco?: Date | string | null;
    motivoDevolucion?: $Enums.cuota_motivoDevolucion | null;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type cuotaUpdateWithoutAlumnoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.Enumcuota_estadoFieldUpdateOperationsInput | $Enums.cuota_estado;
    fechaEnvioBanco?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoDevolucion?: Prisma.NullableEnumcuota_motivoDevolucionFieldUpdateOperationsInput | $Enums.cuota_motivoDevolucion | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tarifa?: Prisma.tarifaUpdateOneRequiredWithoutCuotaNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateOneWithoutCuotaNestedInput;
    remesacuota?: Prisma.remesacuotaUpdateManyWithoutCuotaNestedInput;
};
export type cuotaUncheckedUpdateWithoutAlumnoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tarifaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.Enumcuota_estadoFieldUpdateOperationsInput | $Enums.cuota_estado;
    fechaEnvioBanco?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoDevolucion?: Prisma.NullableEnumcuota_motivoDevolucionFieldUpdateOperationsInput | $Enums.cuota_motivoDevolucion | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateOneWithoutCuotaNestedInput;
    remesacuota?: Prisma.remesacuotaUncheckedUpdateManyWithoutCuotaNestedInput;
};
export type cuotaUncheckedUpdateManyWithoutAlumnoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tarifaId?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.Enumcuota_estadoFieldUpdateOperationsInput | $Enums.cuota_estado;
    fechaEnvioBanco?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoDevolucion?: Prisma.NullableEnumcuota_motivoDevolucionFieldUpdateOperationsInput | $Enums.cuota_motivoDevolucion | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type cuotaCreateManyTarifaInput = {
    id: string;
    alumnoId: string;
    fecha: Date | string;
    importeBase: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal: runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: string | null;
    estado?: $Enums.cuota_estado;
    fechaEnvioBanco?: Date | string | null;
    motivoDevolucion?: $Enums.cuota_motivoDevolucion | null;
    asientoId?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type cuotaUpdateWithoutTarifaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.Enumcuota_estadoFieldUpdateOperationsInput | $Enums.cuota_estado;
    fechaEnvioBanco?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoDevolucion?: Prisma.NullableEnumcuota_motivoDevolucionFieldUpdateOperationsInput | $Enums.cuota_motivoDevolucion | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    alumno?: Prisma.alumnoUpdateOneRequiredWithoutCuotaNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateOneWithoutCuotaNestedInput;
    remesacuota?: Prisma.remesacuotaUpdateManyWithoutCuotaNestedInput;
};
export type cuotaUncheckedUpdateWithoutTarifaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alumnoId?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.Enumcuota_estadoFieldUpdateOperationsInput | $Enums.cuota_estado;
    fechaEnvioBanco?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoDevolucion?: Prisma.NullableEnumcuota_motivoDevolucionFieldUpdateOperationsInput | $Enums.cuota_motivoDevolucion | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateOneWithoutCuotaNestedInput;
    remesacuota?: Prisma.remesacuotaUncheckedUpdateManyWithoutCuotaNestedInput;
};
export type cuotaUncheckedUpdateManyWithoutTarifaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    alumnoId?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    importeBase?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ajuste?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    importeFinal?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    motivoAjuste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.Enumcuota_estadoFieldUpdateOperationsInput | $Enums.cuota_estado;
    fechaEnvioBanco?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    motivoDevolucion?: Prisma.NullableEnumcuota_motivoDevolucionFieldUpdateOperationsInput | $Enums.cuota_motivoDevolucion | null;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type CuotaCountOutputType
 */
export type CuotaCountOutputType = {
    remesacuota: number;
};
export type CuotaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    remesacuota?: boolean | CuotaCountOutputTypeCountRemesacuotaArgs;
};
/**
 * CuotaCountOutputType without action
 */
export type CuotaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CuotaCountOutputType
     */
    select?: Prisma.CuotaCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CuotaCountOutputType without action
 */
export type CuotaCountOutputTypeCountRemesacuotaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.remesacuotaWhereInput;
};
export type cuotaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    alumnoId?: boolean;
    tarifaId?: boolean;
    fecha?: boolean;
    importeBase?: boolean;
    ajuste?: boolean;
    importeFinal?: boolean;
    motivoAjuste?: boolean;
    estado?: boolean;
    fechaEnvioBanco?: boolean;
    motivoDevolucion?: boolean;
    asientoId?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    alumno?: boolean | Prisma.alumnoDefaultArgs<ExtArgs>;
    tarifa?: boolean | Prisma.tarifaDefaultArgs<ExtArgs>;
    obligacioneconomica?: boolean | Prisma.cuota$obligacioneconomicaArgs<ExtArgs>;
    remesacuota?: boolean | Prisma.cuota$remesacuotaArgs<ExtArgs>;
    _count?: boolean | Prisma.CuotaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cuota"]>;
export type cuotaSelectScalar = {
    id?: boolean;
    alumnoId?: boolean;
    tarifaId?: boolean;
    fecha?: boolean;
    importeBase?: boolean;
    ajuste?: boolean;
    importeFinal?: boolean;
    motivoAjuste?: boolean;
    estado?: boolean;
    fechaEnvioBanco?: boolean;
    motivoDevolucion?: boolean;
    asientoId?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type cuotaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "alumnoId" | "tarifaId" | "fecha" | "importeBase" | "ajuste" | "importeFinal" | "motivoAjuste" | "estado" | "fechaEnvioBanco" | "motivoDevolucion" | "asientoId" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["cuota"]>;
export type cuotaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    alumno?: boolean | Prisma.alumnoDefaultArgs<ExtArgs>;
    tarifa?: boolean | Prisma.tarifaDefaultArgs<ExtArgs>;
    obligacioneconomica?: boolean | Prisma.cuota$obligacioneconomicaArgs<ExtArgs>;
    remesacuota?: boolean | Prisma.cuota$remesacuotaArgs<ExtArgs>;
    _count?: boolean | Prisma.CuotaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $cuotaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "cuota";
    objects: {
        alumno: Prisma.$alumnoPayload<ExtArgs>;
        tarifa: Prisma.$tarifaPayload<ExtArgs>;
        obligacioneconomica: Prisma.$obligacioneconomicaPayload<ExtArgs> | null;
        remesacuota: Prisma.$remesacuotaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        alumnoId: string;
        tarifaId: string;
        fecha: Date;
        importeBase: runtime.Decimal;
        ajuste: runtime.Decimal;
        importeFinal: runtime.Decimal;
        motivoAjuste: string | null;
        estado: $Enums.cuota_estado;
        fechaEnvioBanco: Date | null;
        motivoDevolucion: $Enums.cuota_motivoDevolucion | null;
        asientoId: string | null;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["cuota"]>;
    composites: {};
};
export type cuotaGetPayload<S extends boolean | null | undefined | cuotaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$cuotaPayload, S>;
export type cuotaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<cuotaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CuotaCountAggregateInputType | true;
};
export interface cuotaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['cuota'];
        meta: {
            name: 'cuota';
        };
    };
    /**
     * Find zero or one Cuota that matches the filter.
     * @param {cuotaFindUniqueArgs} args - Arguments to find a Cuota
     * @example
     * // Get one Cuota
     * const cuota = await prisma.cuota.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cuotaFindUniqueArgs>(args: Prisma.SelectSubset<T, cuotaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__cuotaClient<runtime.Types.Result.GetResult<Prisma.$cuotaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Cuota that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cuotaFindUniqueOrThrowArgs} args - Arguments to find a Cuota
     * @example
     * // Get one Cuota
     * const cuota = await prisma.cuota.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cuotaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, cuotaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__cuotaClient<runtime.Types.Result.GetResult<Prisma.$cuotaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cuota that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuotaFindFirstArgs} args - Arguments to find a Cuota
     * @example
     * // Get one Cuota
     * const cuota = await prisma.cuota.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cuotaFindFirstArgs>(args?: Prisma.SelectSubset<T, cuotaFindFirstArgs<ExtArgs>>): Prisma.Prisma__cuotaClient<runtime.Types.Result.GetResult<Prisma.$cuotaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Cuota that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuotaFindFirstOrThrowArgs} args - Arguments to find a Cuota
     * @example
     * // Get one Cuota
     * const cuota = await prisma.cuota.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cuotaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, cuotaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__cuotaClient<runtime.Types.Result.GetResult<Prisma.$cuotaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Cuotas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuotaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cuotas
     * const cuotas = await prisma.cuota.findMany()
     *
     * // Get first 10 Cuotas
     * const cuotas = await prisma.cuota.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const cuotaWithIdOnly = await prisma.cuota.findMany({ select: { id: true } })
     *
     */
    findMany<T extends cuotaFindManyArgs>(args?: Prisma.SelectSubset<T, cuotaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cuotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Cuota.
     * @param {cuotaCreateArgs} args - Arguments to create a Cuota.
     * @example
     * // Create one Cuota
     * const Cuota = await prisma.cuota.create({
     *   data: {
     *     // ... data to create a Cuota
     *   }
     * })
     *
     */
    create<T extends cuotaCreateArgs>(args: Prisma.SelectSubset<T, cuotaCreateArgs<ExtArgs>>): Prisma.Prisma__cuotaClient<runtime.Types.Result.GetResult<Prisma.$cuotaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Cuotas.
     * @param {cuotaCreateManyArgs} args - Arguments to create many Cuotas.
     * @example
     * // Create many Cuotas
     * const cuota = await prisma.cuota.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends cuotaCreateManyArgs>(args?: Prisma.SelectSubset<T, cuotaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Cuota.
     * @param {cuotaDeleteArgs} args - Arguments to delete one Cuota.
     * @example
     * // Delete one Cuota
     * const Cuota = await prisma.cuota.delete({
     *   where: {
     *     // ... filter to delete one Cuota
     *   }
     * })
     *
     */
    delete<T extends cuotaDeleteArgs>(args: Prisma.SelectSubset<T, cuotaDeleteArgs<ExtArgs>>): Prisma.Prisma__cuotaClient<runtime.Types.Result.GetResult<Prisma.$cuotaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Cuota.
     * @param {cuotaUpdateArgs} args - Arguments to update one Cuota.
     * @example
     * // Update one Cuota
     * const cuota = await prisma.cuota.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends cuotaUpdateArgs>(args: Prisma.SelectSubset<T, cuotaUpdateArgs<ExtArgs>>): Prisma.Prisma__cuotaClient<runtime.Types.Result.GetResult<Prisma.$cuotaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Cuotas.
     * @param {cuotaDeleteManyArgs} args - Arguments to filter Cuotas to delete.
     * @example
     * // Delete a few Cuotas
     * const { count } = await prisma.cuota.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends cuotaDeleteManyArgs>(args?: Prisma.SelectSubset<T, cuotaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Cuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuotaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cuotas
     * const cuota = await prisma.cuota.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends cuotaUpdateManyArgs>(args: Prisma.SelectSubset<T, cuotaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Cuota.
     * @param {cuotaUpsertArgs} args - Arguments to update or create a Cuota.
     * @example
     * // Update or create a Cuota
     * const cuota = await prisma.cuota.upsert({
     *   create: {
     *     // ... data to create a Cuota
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cuota we want to update
     *   }
     * })
     */
    upsert<T extends cuotaUpsertArgs>(args: Prisma.SelectSubset<T, cuotaUpsertArgs<ExtArgs>>): Prisma.Prisma__cuotaClient<runtime.Types.Result.GetResult<Prisma.$cuotaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Cuotas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuotaCountArgs} args - Arguments to filter Cuotas to count.
     * @example
     * // Count the number of Cuotas
     * const count = await prisma.cuota.count({
     *   where: {
     *     // ... the filter for the Cuotas we want to count
     *   }
     * })
    **/
    count<T extends cuotaCountArgs>(args?: Prisma.Subset<T, cuotaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CuotaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Cuota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CuotaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CuotaAggregateArgs>(args: Prisma.Subset<T, CuotaAggregateArgs>): Prisma.PrismaPromise<GetCuotaAggregateType<T>>;
    /**
     * Group by Cuota.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cuotaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends cuotaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: cuotaGroupByArgs['orderBy'];
    } : {
        orderBy?: cuotaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, cuotaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCuotaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the cuota model
     */
    readonly fields: cuotaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for cuota.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__cuotaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    alumno<T extends Prisma.alumnoDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.alumnoDefaultArgs<ExtArgs>>): Prisma.Prisma__alumnoClient<runtime.Types.Result.GetResult<Prisma.$alumnoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tarifa<T extends Prisma.tarifaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tarifaDefaultArgs<ExtArgs>>): Prisma.Prisma__tarifaClient<runtime.Types.Result.GetResult<Prisma.$tarifaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    obligacioneconomica<T extends Prisma.cuota$obligacioneconomicaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cuota$obligacioneconomicaArgs<ExtArgs>>): Prisma.Prisma__obligacioneconomicaClient<runtime.Types.Result.GetResult<Prisma.$obligacioneconomicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    remesacuota<T extends Prisma.cuota$remesacuotaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cuota$remesacuotaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$remesacuotaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the cuota model
 */
export interface cuotaFieldRefs {
    readonly id: Prisma.FieldRef<"cuota", 'String'>;
    readonly alumnoId: Prisma.FieldRef<"cuota", 'String'>;
    readonly tarifaId: Prisma.FieldRef<"cuota", 'String'>;
    readonly fecha: Prisma.FieldRef<"cuota", 'DateTime'>;
    readonly importeBase: Prisma.FieldRef<"cuota", 'Decimal'>;
    readonly ajuste: Prisma.FieldRef<"cuota", 'Decimal'>;
    readonly importeFinal: Prisma.FieldRef<"cuota", 'Decimal'>;
    readonly motivoAjuste: Prisma.FieldRef<"cuota", 'String'>;
    readonly estado: Prisma.FieldRef<"cuota", 'cuota_estado'>;
    readonly fechaEnvioBanco: Prisma.FieldRef<"cuota", 'DateTime'>;
    readonly motivoDevolucion: Prisma.FieldRef<"cuota", 'cuota_motivoDevolucion'>;
    readonly asientoId: Prisma.FieldRef<"cuota", 'String'>;
    readonly observaciones: Prisma.FieldRef<"cuota", 'String'>;
    readonly createdAt: Prisma.FieldRef<"cuota", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"cuota", 'DateTime'>;
}
/**
 * cuota findUnique
 */
export type cuotaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which cuota to fetch.
     */
    where: Prisma.cuotaWhereUniqueInput;
};
/**
 * cuota findUniqueOrThrow
 */
export type cuotaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which cuota to fetch.
     */
    where: Prisma.cuotaWhereUniqueInput;
};
/**
 * cuota findFirst
 */
export type cuotaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which cuota to fetch.
     */
    where?: Prisma.cuotaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cuotas to fetch.
     */
    orderBy?: Prisma.cuotaOrderByWithRelationInput | Prisma.cuotaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cuotas.
     */
    cursor?: Prisma.cuotaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cuotas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cuotas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cuotas.
     */
    distinct?: Prisma.CuotaScalarFieldEnum | Prisma.CuotaScalarFieldEnum[];
};
/**
 * cuota findFirstOrThrow
 */
export type cuotaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which cuota to fetch.
     */
    where?: Prisma.cuotaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cuotas to fetch.
     */
    orderBy?: Prisma.cuotaOrderByWithRelationInput | Prisma.cuotaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for cuotas.
     */
    cursor?: Prisma.cuotaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cuotas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cuotas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cuotas.
     */
    distinct?: Prisma.CuotaScalarFieldEnum | Prisma.CuotaScalarFieldEnum[];
};
/**
 * cuota findMany
 */
export type cuotaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which cuotas to fetch.
     */
    where?: Prisma.cuotaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of cuotas to fetch.
     */
    orderBy?: Prisma.cuotaOrderByWithRelationInput | Prisma.cuotaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing cuotas.
     */
    cursor?: Prisma.cuotaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` cuotas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` cuotas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of cuotas.
     */
    distinct?: Prisma.CuotaScalarFieldEnum | Prisma.CuotaScalarFieldEnum[];
};
/**
 * cuota create
 */
export type cuotaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a cuota.
     */
    data: Prisma.XOR<Prisma.cuotaCreateInput, Prisma.cuotaUncheckedCreateInput>;
};
/**
 * cuota createMany
 */
export type cuotaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many cuotas.
     */
    data: Prisma.cuotaCreateManyInput | Prisma.cuotaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * cuota update
 */
export type cuotaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a cuota.
     */
    data: Prisma.XOR<Prisma.cuotaUpdateInput, Prisma.cuotaUncheckedUpdateInput>;
    /**
     * Choose, which cuota to update.
     */
    where: Prisma.cuotaWhereUniqueInput;
};
/**
 * cuota updateMany
 */
export type cuotaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update cuotas.
     */
    data: Prisma.XOR<Prisma.cuotaUpdateManyMutationInput, Prisma.cuotaUncheckedUpdateManyInput>;
    /**
     * Filter which cuotas to update
     */
    where?: Prisma.cuotaWhereInput;
    /**
     * Limit how many cuotas to update.
     */
    limit?: number;
};
/**
 * cuota upsert
 */
export type cuotaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the cuota to update in case it exists.
     */
    where: Prisma.cuotaWhereUniqueInput;
    /**
     * In case the cuota found by the `where` argument doesn't exist, create a new cuota with this data.
     */
    create: Prisma.XOR<Prisma.cuotaCreateInput, Prisma.cuotaUncheckedCreateInput>;
    /**
     * In case the cuota was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.cuotaUpdateInput, Prisma.cuotaUncheckedUpdateInput>;
};
/**
 * cuota delete
 */
export type cuotaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which cuota to delete.
     */
    where: Prisma.cuotaWhereUniqueInput;
};
/**
 * cuota deleteMany
 */
export type cuotaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which cuotas to delete
     */
    where?: Prisma.cuotaWhereInput;
    /**
     * Limit how many cuotas to delete.
     */
    limit?: number;
};
/**
 * cuota.obligacioneconomica
 */
export type cuota$obligacioneconomicaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.obligacioneconomicaWhereInput;
};
/**
 * cuota.remesacuota
 */
export type cuota$remesacuotaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * cuota without action
 */
export type cuotaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=cuota.d.ts.map