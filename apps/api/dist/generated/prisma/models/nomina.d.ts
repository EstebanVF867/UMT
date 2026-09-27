import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model nomina
 *
 */
export type nominaModel = runtime.Types.Result.DefaultSelection<Prisma.$nominaPayload>;
export type AggregateNomina = {
    _count: NominaCountAggregateOutputType | null;
    _avg: NominaAvgAggregateOutputType | null;
    _sum: NominaSumAggregateOutputType | null;
    _min: NominaMinAggregateOutputType | null;
    _max: NominaMaxAggregateOutputType | null;
};
export type NominaAvgAggregateOutputType = {
    salarioBruto: runtime.Decimal | null;
    irpf: runtime.Decimal | null;
    ssTrabajador: runtime.Decimal | null;
    ssUMT: runtime.Decimal | null;
    totalNeto: runtime.Decimal | null;
};
export type NominaSumAggregateOutputType = {
    salarioBruto: runtime.Decimal | null;
    irpf: runtime.Decimal | null;
    ssTrabajador: runtime.Decimal | null;
    ssUMT: runtime.Decimal | null;
    totalNeto: runtime.Decimal | null;
};
export type NominaMinAggregateOutputType = {
    id: string | null;
    profesorId: string | null;
    contratoId: string | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    fechaPago: Date | null;
    salarioBruto: runtime.Decimal | null;
    irpf: runtime.Decimal | null;
    ssTrabajador: runtime.Decimal | null;
    ssUMT: runtime.Decimal | null;
    totalNeto: runtime.Decimal | null;
    estado: $Enums.nomina_estado | null;
    asientoId: string | null;
    origenCalculo: string | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type NominaMaxAggregateOutputType = {
    id: string | null;
    profesorId: string | null;
    contratoId: string | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    fechaPago: Date | null;
    salarioBruto: runtime.Decimal | null;
    irpf: runtime.Decimal | null;
    ssTrabajador: runtime.Decimal | null;
    ssUMT: runtime.Decimal | null;
    totalNeto: runtime.Decimal | null;
    estado: $Enums.nomina_estado | null;
    asientoId: string | null;
    origenCalculo: string | null;
    observaciones: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type NominaCountAggregateOutputType = {
    id: number;
    profesorId: number;
    contratoId: number;
    fechaInicio: number;
    fechaFin: number;
    fechaPago: number;
    salarioBruto: number;
    irpf: number;
    ssTrabajador: number;
    ssUMT: number;
    totalNeto: number;
    estado: number;
    asientoId: number;
    origenCalculo: number;
    observaciones: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type NominaAvgAggregateInputType = {
    salarioBruto?: true;
    irpf?: true;
    ssTrabajador?: true;
    ssUMT?: true;
    totalNeto?: true;
};
export type NominaSumAggregateInputType = {
    salarioBruto?: true;
    irpf?: true;
    ssTrabajador?: true;
    ssUMT?: true;
    totalNeto?: true;
};
export type NominaMinAggregateInputType = {
    id?: true;
    profesorId?: true;
    contratoId?: true;
    fechaInicio?: true;
    fechaFin?: true;
    fechaPago?: true;
    salarioBruto?: true;
    irpf?: true;
    ssTrabajador?: true;
    ssUMT?: true;
    totalNeto?: true;
    estado?: true;
    asientoId?: true;
    origenCalculo?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type NominaMaxAggregateInputType = {
    id?: true;
    profesorId?: true;
    contratoId?: true;
    fechaInicio?: true;
    fechaFin?: true;
    fechaPago?: true;
    salarioBruto?: true;
    irpf?: true;
    ssTrabajador?: true;
    ssUMT?: true;
    totalNeto?: true;
    estado?: true;
    asientoId?: true;
    origenCalculo?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type NominaCountAggregateInputType = {
    id?: true;
    profesorId?: true;
    contratoId?: true;
    fechaInicio?: true;
    fechaFin?: true;
    fechaPago?: true;
    salarioBruto?: true;
    irpf?: true;
    ssTrabajador?: true;
    ssUMT?: true;
    totalNeto?: true;
    estado?: true;
    asientoId?: true;
    origenCalculo?: true;
    observaciones?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type NominaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which nomina to aggregate.
     */
    where?: Prisma.nominaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of nominas to fetch.
     */
    orderBy?: Prisma.nominaOrderByWithRelationInput | Prisma.nominaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.nominaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` nominas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` nominas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned nominas
    **/
    _count?: true | NominaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: NominaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: NominaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: NominaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: NominaMaxAggregateInputType;
};
export type GetNominaAggregateType<T extends NominaAggregateArgs> = {
    [P in keyof T & keyof AggregateNomina]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNomina[P]> : Prisma.GetScalarType<T[P], AggregateNomina[P]>;
};
export type nominaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.nominaWhereInput;
    orderBy?: Prisma.nominaOrderByWithAggregationInput | Prisma.nominaOrderByWithAggregationInput[];
    by: Prisma.NominaScalarFieldEnum[] | Prisma.NominaScalarFieldEnum;
    having?: Prisma.nominaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NominaCountAggregateInputType | true;
    _avg?: NominaAvgAggregateInputType;
    _sum?: NominaSumAggregateInputType;
    _min?: NominaMinAggregateInputType;
    _max?: NominaMaxAggregateInputType;
};
export type NominaGroupByOutputType = {
    id: string;
    profesorId: string;
    contratoId: string | null;
    fechaInicio: Date;
    fechaFin: Date;
    fechaPago: Date | null;
    salarioBruto: runtime.Decimal;
    irpf: runtime.Decimal;
    ssTrabajador: runtime.Decimal;
    ssUMT: runtime.Decimal;
    totalNeto: runtime.Decimal;
    estado: $Enums.nomina_estado;
    asientoId: string | null;
    origenCalculo: string | null;
    observaciones: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: NominaCountAggregateOutputType | null;
    _avg: NominaAvgAggregateOutputType | null;
    _sum: NominaSumAggregateOutputType | null;
    _min: NominaMinAggregateOutputType | null;
    _max: NominaMaxAggregateOutputType | null;
};
export type GetNominaGroupByPayload<T extends nominaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NominaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NominaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NominaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NominaGroupByOutputType[P]>;
}>>;
export type nominaWhereInput = {
    AND?: Prisma.nominaWhereInput | Prisma.nominaWhereInput[];
    OR?: Prisma.nominaWhereInput[];
    NOT?: Prisma.nominaWhereInput | Prisma.nominaWhereInput[];
    id?: Prisma.StringFilter<"nomina"> | string;
    profesorId?: Prisma.StringFilter<"nomina"> | string;
    contratoId?: Prisma.StringNullableFilter<"nomina"> | string | null;
    fechaInicio?: Prisma.DateTimeFilter<"nomina"> | Date | string;
    fechaFin?: Prisma.DateTimeFilter<"nomina"> | Date | string;
    fechaPago?: Prisma.DateTimeNullableFilter<"nomina"> | Date | string | null;
    salarioBruto?: Prisma.DecimalFilter<"nomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: Prisma.DecimalFilter<"nomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: Prisma.DecimalFilter<"nomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: Prisma.DecimalFilter<"nomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto?: Prisma.DecimalFilter<"nomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumnomina_estadoFilter<"nomina"> | $Enums.nomina_estado;
    asientoId?: Prisma.StringNullableFilter<"nomina"> | string | null;
    origenCalculo?: Prisma.StringNullableFilter<"nomina"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"nomina"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"nomina"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"nomina"> | Date | string;
    lineanomina?: Prisma.LineanominaListRelationFilter;
    contrato?: Prisma.XOR<Prisma.ContratoNullableScalarRelationFilter, Prisma.contratoWhereInput> | null;
    profesor?: Prisma.XOR<Prisma.ProfesorScalarRelationFilter, Prisma.profesorWhereInput>;
    obligacioneconomica?: Prisma.XOR<Prisma.ObligacioneconomicaNullableScalarRelationFilter, Prisma.obligacioneconomicaWhereInput> | null;
};
export type nominaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    profesorId?: Prisma.SortOrder;
    contratoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    fechaPago?: Prisma.SortOrderInput | Prisma.SortOrder;
    salarioBruto?: Prisma.SortOrder;
    irpf?: Prisma.SortOrder;
    ssTrabajador?: Prisma.SortOrder;
    ssUMT?: Prisma.SortOrder;
    totalNeto?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    origenCalculo?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    lineanomina?: Prisma.lineanominaOrderByRelationAggregateInput;
    contrato?: Prisma.contratoOrderByWithRelationInput;
    profesor?: Prisma.profesorOrderByWithRelationInput;
    obligacioneconomica?: Prisma.obligacioneconomicaOrderByWithRelationInput;
    _relevance?: Prisma.nominaOrderByRelevanceInput;
};
export type nominaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.nominaWhereInput | Prisma.nominaWhereInput[];
    OR?: Prisma.nominaWhereInput[];
    NOT?: Prisma.nominaWhereInput | Prisma.nominaWhereInput[];
    profesorId?: Prisma.StringFilter<"nomina"> | string;
    contratoId?: Prisma.StringNullableFilter<"nomina"> | string | null;
    fechaInicio?: Prisma.DateTimeFilter<"nomina"> | Date | string;
    fechaFin?: Prisma.DateTimeFilter<"nomina"> | Date | string;
    fechaPago?: Prisma.DateTimeNullableFilter<"nomina"> | Date | string | null;
    salarioBruto?: Prisma.DecimalFilter<"nomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: Prisma.DecimalFilter<"nomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: Prisma.DecimalFilter<"nomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: Prisma.DecimalFilter<"nomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto?: Prisma.DecimalFilter<"nomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumnomina_estadoFilter<"nomina"> | $Enums.nomina_estado;
    asientoId?: Prisma.StringNullableFilter<"nomina"> | string | null;
    origenCalculo?: Prisma.StringNullableFilter<"nomina"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"nomina"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"nomina"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"nomina"> | Date | string;
    lineanomina?: Prisma.LineanominaListRelationFilter;
    contrato?: Prisma.XOR<Prisma.ContratoNullableScalarRelationFilter, Prisma.contratoWhereInput> | null;
    profesor?: Prisma.XOR<Prisma.ProfesorScalarRelationFilter, Prisma.profesorWhereInput>;
    obligacioneconomica?: Prisma.XOR<Prisma.ObligacioneconomicaNullableScalarRelationFilter, Prisma.obligacioneconomicaWhereInput> | null;
}, "id">;
export type nominaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    profesorId?: Prisma.SortOrder;
    contratoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    fechaPago?: Prisma.SortOrderInput | Prisma.SortOrder;
    salarioBruto?: Prisma.SortOrder;
    irpf?: Prisma.SortOrder;
    ssTrabajador?: Prisma.SortOrder;
    ssUMT?: Prisma.SortOrder;
    totalNeto?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrderInput | Prisma.SortOrder;
    origenCalculo?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.nominaCountOrderByAggregateInput;
    _avg?: Prisma.nominaAvgOrderByAggregateInput;
    _max?: Prisma.nominaMaxOrderByAggregateInput;
    _min?: Prisma.nominaMinOrderByAggregateInput;
    _sum?: Prisma.nominaSumOrderByAggregateInput;
};
export type nominaScalarWhereWithAggregatesInput = {
    AND?: Prisma.nominaScalarWhereWithAggregatesInput | Prisma.nominaScalarWhereWithAggregatesInput[];
    OR?: Prisma.nominaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.nominaScalarWhereWithAggregatesInput | Prisma.nominaScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"nomina"> | string;
    profesorId?: Prisma.StringWithAggregatesFilter<"nomina"> | string;
    contratoId?: Prisma.StringNullableWithAggregatesFilter<"nomina"> | string | null;
    fechaInicio?: Prisma.DateTimeWithAggregatesFilter<"nomina"> | Date | string;
    fechaFin?: Prisma.DateTimeWithAggregatesFilter<"nomina"> | Date | string;
    fechaPago?: Prisma.DateTimeNullableWithAggregatesFilter<"nomina"> | Date | string | null;
    salarioBruto?: Prisma.DecimalWithAggregatesFilter<"nomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: Prisma.DecimalWithAggregatesFilter<"nomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: Prisma.DecimalWithAggregatesFilter<"nomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: Prisma.DecimalWithAggregatesFilter<"nomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto?: Prisma.DecimalWithAggregatesFilter<"nomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumnomina_estadoWithAggregatesFilter<"nomina"> | $Enums.nomina_estado;
    asientoId?: Prisma.StringNullableWithAggregatesFilter<"nomina"> | string | null;
    origenCalculo?: Prisma.StringNullableWithAggregatesFilter<"nomina"> | string | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"nomina"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"nomina"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"nomina"> | Date | string;
};
export type nominaCreateInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    fechaPago?: Date | string | null;
    salarioBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.nomina_estado;
    asientoId?: string | null;
    origenCalculo?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    lineanomina?: Prisma.lineanominaCreateNestedManyWithoutNominaInput;
    contrato?: Prisma.contratoCreateNestedOneWithoutNominaInput;
    profesor: Prisma.profesorCreateNestedOneWithoutNominaInput;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedOneWithoutNominaInput;
};
export type nominaUncheckedCreateInput = {
    id: string;
    profesorId: string;
    contratoId?: string | null;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    fechaPago?: Date | string | null;
    salarioBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.nomina_estado;
    asientoId?: string | null;
    origenCalculo?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    lineanomina?: Prisma.lineanominaUncheckedCreateNestedManyWithoutNominaInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedOneWithoutNominaInput;
};
export type nominaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaPago?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumnomina_estadoFieldUpdateOperationsInput | $Enums.nomina_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    origenCalculo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineanomina?: Prisma.lineanominaUpdateManyWithoutNominaNestedInput;
    contrato?: Prisma.contratoUpdateOneWithoutNominaNestedInput;
    profesor?: Prisma.profesorUpdateOneRequiredWithoutNominaNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateOneWithoutNominaNestedInput;
};
export type nominaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profesorId?: Prisma.StringFieldUpdateOperationsInput | string;
    contratoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaPago?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumnomina_estadoFieldUpdateOperationsInput | $Enums.nomina_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    origenCalculo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineanomina?: Prisma.lineanominaUncheckedUpdateManyWithoutNominaNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateOneWithoutNominaNestedInput;
};
export type nominaCreateManyInput = {
    id: string;
    profesorId: string;
    contratoId?: string | null;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    fechaPago?: Date | string | null;
    salarioBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.nomina_estado;
    asientoId?: string | null;
    origenCalculo?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type nominaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaPago?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumnomina_estadoFieldUpdateOperationsInput | $Enums.nomina_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    origenCalculo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type nominaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profesorId?: Prisma.StringFieldUpdateOperationsInput | string;
    contratoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaPago?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumnomina_estadoFieldUpdateOperationsInput | $Enums.nomina_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    origenCalculo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NominaListRelationFilter = {
    every?: Prisma.nominaWhereInput;
    some?: Prisma.nominaWhereInput;
    none?: Prisma.nominaWhereInput;
};
export type nominaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NominaScalarRelationFilter = {
    is?: Prisma.nominaWhereInput;
    isNot?: Prisma.nominaWhereInput;
};
export type nominaOrderByRelevanceInput = {
    fields: Prisma.nominaOrderByRelevanceFieldEnum | Prisma.nominaOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type nominaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profesorId?: Prisma.SortOrder;
    contratoId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    fechaPago?: Prisma.SortOrder;
    salarioBruto?: Prisma.SortOrder;
    irpf?: Prisma.SortOrder;
    ssTrabajador?: Prisma.SortOrder;
    ssUMT?: Prisma.SortOrder;
    totalNeto?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    origenCalculo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type nominaAvgOrderByAggregateInput = {
    salarioBruto?: Prisma.SortOrder;
    irpf?: Prisma.SortOrder;
    ssTrabajador?: Prisma.SortOrder;
    ssUMT?: Prisma.SortOrder;
    totalNeto?: Prisma.SortOrder;
};
export type nominaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profesorId?: Prisma.SortOrder;
    contratoId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    fechaPago?: Prisma.SortOrder;
    salarioBruto?: Prisma.SortOrder;
    irpf?: Prisma.SortOrder;
    ssTrabajador?: Prisma.SortOrder;
    ssUMT?: Prisma.SortOrder;
    totalNeto?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    origenCalculo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type nominaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profesorId?: Prisma.SortOrder;
    contratoId?: Prisma.SortOrder;
    fechaInicio?: Prisma.SortOrder;
    fechaFin?: Prisma.SortOrder;
    fechaPago?: Prisma.SortOrder;
    salarioBruto?: Prisma.SortOrder;
    irpf?: Prisma.SortOrder;
    ssTrabajador?: Prisma.SortOrder;
    ssUMT?: Prisma.SortOrder;
    totalNeto?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    asientoId?: Prisma.SortOrder;
    origenCalculo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type nominaSumOrderByAggregateInput = {
    salarioBruto?: Prisma.SortOrder;
    irpf?: Prisma.SortOrder;
    ssTrabajador?: Prisma.SortOrder;
    ssUMT?: Prisma.SortOrder;
    totalNeto?: Prisma.SortOrder;
};
export type NominaNullableScalarRelationFilter = {
    is?: Prisma.nominaWhereInput | null;
    isNot?: Prisma.nominaWhereInput | null;
};
export type nominaCreateNestedManyWithoutContratoInput = {
    create?: Prisma.XOR<Prisma.nominaCreateWithoutContratoInput, Prisma.nominaUncheckedCreateWithoutContratoInput> | Prisma.nominaCreateWithoutContratoInput[] | Prisma.nominaUncheckedCreateWithoutContratoInput[];
    connectOrCreate?: Prisma.nominaCreateOrConnectWithoutContratoInput | Prisma.nominaCreateOrConnectWithoutContratoInput[];
    createMany?: Prisma.nominaCreateManyContratoInputEnvelope;
    connect?: Prisma.nominaWhereUniqueInput | Prisma.nominaWhereUniqueInput[];
};
export type nominaUncheckedCreateNestedManyWithoutContratoInput = {
    create?: Prisma.XOR<Prisma.nominaCreateWithoutContratoInput, Prisma.nominaUncheckedCreateWithoutContratoInput> | Prisma.nominaCreateWithoutContratoInput[] | Prisma.nominaUncheckedCreateWithoutContratoInput[];
    connectOrCreate?: Prisma.nominaCreateOrConnectWithoutContratoInput | Prisma.nominaCreateOrConnectWithoutContratoInput[];
    createMany?: Prisma.nominaCreateManyContratoInputEnvelope;
    connect?: Prisma.nominaWhereUniqueInput | Prisma.nominaWhereUniqueInput[];
};
export type nominaUpdateManyWithoutContratoNestedInput = {
    create?: Prisma.XOR<Prisma.nominaCreateWithoutContratoInput, Prisma.nominaUncheckedCreateWithoutContratoInput> | Prisma.nominaCreateWithoutContratoInput[] | Prisma.nominaUncheckedCreateWithoutContratoInput[];
    connectOrCreate?: Prisma.nominaCreateOrConnectWithoutContratoInput | Prisma.nominaCreateOrConnectWithoutContratoInput[];
    upsert?: Prisma.nominaUpsertWithWhereUniqueWithoutContratoInput | Prisma.nominaUpsertWithWhereUniqueWithoutContratoInput[];
    createMany?: Prisma.nominaCreateManyContratoInputEnvelope;
    set?: Prisma.nominaWhereUniqueInput | Prisma.nominaWhereUniqueInput[];
    disconnect?: Prisma.nominaWhereUniqueInput | Prisma.nominaWhereUniqueInput[];
    delete?: Prisma.nominaWhereUniqueInput | Prisma.nominaWhereUniqueInput[];
    connect?: Prisma.nominaWhereUniqueInput | Prisma.nominaWhereUniqueInput[];
    update?: Prisma.nominaUpdateWithWhereUniqueWithoutContratoInput | Prisma.nominaUpdateWithWhereUniqueWithoutContratoInput[];
    updateMany?: Prisma.nominaUpdateManyWithWhereWithoutContratoInput | Prisma.nominaUpdateManyWithWhereWithoutContratoInput[];
    deleteMany?: Prisma.nominaScalarWhereInput | Prisma.nominaScalarWhereInput[];
};
export type nominaUncheckedUpdateManyWithoutContratoNestedInput = {
    create?: Prisma.XOR<Prisma.nominaCreateWithoutContratoInput, Prisma.nominaUncheckedCreateWithoutContratoInput> | Prisma.nominaCreateWithoutContratoInput[] | Prisma.nominaUncheckedCreateWithoutContratoInput[];
    connectOrCreate?: Prisma.nominaCreateOrConnectWithoutContratoInput | Prisma.nominaCreateOrConnectWithoutContratoInput[];
    upsert?: Prisma.nominaUpsertWithWhereUniqueWithoutContratoInput | Prisma.nominaUpsertWithWhereUniqueWithoutContratoInput[];
    createMany?: Prisma.nominaCreateManyContratoInputEnvelope;
    set?: Prisma.nominaWhereUniqueInput | Prisma.nominaWhereUniqueInput[];
    disconnect?: Prisma.nominaWhereUniqueInput | Prisma.nominaWhereUniqueInput[];
    delete?: Prisma.nominaWhereUniqueInput | Prisma.nominaWhereUniqueInput[];
    connect?: Prisma.nominaWhereUniqueInput | Prisma.nominaWhereUniqueInput[];
    update?: Prisma.nominaUpdateWithWhereUniqueWithoutContratoInput | Prisma.nominaUpdateWithWhereUniqueWithoutContratoInput[];
    updateMany?: Prisma.nominaUpdateManyWithWhereWithoutContratoInput | Prisma.nominaUpdateManyWithWhereWithoutContratoInput[];
    deleteMany?: Prisma.nominaScalarWhereInput | Prisma.nominaScalarWhereInput[];
};
export type nominaCreateNestedOneWithoutLineanominaInput = {
    create?: Prisma.XOR<Prisma.nominaCreateWithoutLineanominaInput, Prisma.nominaUncheckedCreateWithoutLineanominaInput>;
    connectOrCreate?: Prisma.nominaCreateOrConnectWithoutLineanominaInput;
    connect?: Prisma.nominaWhereUniqueInput;
};
export type nominaUpdateOneRequiredWithoutLineanominaNestedInput = {
    create?: Prisma.XOR<Prisma.nominaCreateWithoutLineanominaInput, Prisma.nominaUncheckedCreateWithoutLineanominaInput>;
    connectOrCreate?: Prisma.nominaCreateOrConnectWithoutLineanominaInput;
    upsert?: Prisma.nominaUpsertWithoutLineanominaInput;
    connect?: Prisma.nominaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.nominaUpdateToOneWithWhereWithoutLineanominaInput, Prisma.nominaUpdateWithoutLineanominaInput>, Prisma.nominaUncheckedUpdateWithoutLineanominaInput>;
};
export type Enumnomina_estadoFieldUpdateOperationsInput = {
    set?: $Enums.nomina_estado;
};
export type nominaCreateNestedOneWithoutObligacioneconomicaInput = {
    create?: Prisma.XOR<Prisma.nominaCreateWithoutObligacioneconomicaInput, Prisma.nominaUncheckedCreateWithoutObligacioneconomicaInput>;
    connectOrCreate?: Prisma.nominaCreateOrConnectWithoutObligacioneconomicaInput;
    connect?: Prisma.nominaWhereUniqueInput;
};
export type nominaUpdateOneWithoutObligacioneconomicaNestedInput = {
    create?: Prisma.XOR<Prisma.nominaCreateWithoutObligacioneconomicaInput, Prisma.nominaUncheckedCreateWithoutObligacioneconomicaInput>;
    connectOrCreate?: Prisma.nominaCreateOrConnectWithoutObligacioneconomicaInput;
    upsert?: Prisma.nominaUpsertWithoutObligacioneconomicaInput;
    disconnect?: Prisma.nominaWhereInput | boolean;
    delete?: Prisma.nominaWhereInput | boolean;
    connect?: Prisma.nominaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.nominaUpdateToOneWithWhereWithoutObligacioneconomicaInput, Prisma.nominaUpdateWithoutObligacioneconomicaInput>, Prisma.nominaUncheckedUpdateWithoutObligacioneconomicaInput>;
};
export type nominaCreateNestedManyWithoutProfesorInput = {
    create?: Prisma.XOR<Prisma.nominaCreateWithoutProfesorInput, Prisma.nominaUncheckedCreateWithoutProfesorInput> | Prisma.nominaCreateWithoutProfesorInput[] | Prisma.nominaUncheckedCreateWithoutProfesorInput[];
    connectOrCreate?: Prisma.nominaCreateOrConnectWithoutProfesorInput | Prisma.nominaCreateOrConnectWithoutProfesorInput[];
    createMany?: Prisma.nominaCreateManyProfesorInputEnvelope;
    connect?: Prisma.nominaWhereUniqueInput | Prisma.nominaWhereUniqueInput[];
};
export type nominaUncheckedCreateNestedManyWithoutProfesorInput = {
    create?: Prisma.XOR<Prisma.nominaCreateWithoutProfesorInput, Prisma.nominaUncheckedCreateWithoutProfesorInput> | Prisma.nominaCreateWithoutProfesorInput[] | Prisma.nominaUncheckedCreateWithoutProfesorInput[];
    connectOrCreate?: Prisma.nominaCreateOrConnectWithoutProfesorInput | Prisma.nominaCreateOrConnectWithoutProfesorInput[];
    createMany?: Prisma.nominaCreateManyProfesorInputEnvelope;
    connect?: Prisma.nominaWhereUniqueInput | Prisma.nominaWhereUniqueInput[];
};
export type nominaUpdateManyWithoutProfesorNestedInput = {
    create?: Prisma.XOR<Prisma.nominaCreateWithoutProfesorInput, Prisma.nominaUncheckedCreateWithoutProfesorInput> | Prisma.nominaCreateWithoutProfesorInput[] | Prisma.nominaUncheckedCreateWithoutProfesorInput[];
    connectOrCreate?: Prisma.nominaCreateOrConnectWithoutProfesorInput | Prisma.nominaCreateOrConnectWithoutProfesorInput[];
    upsert?: Prisma.nominaUpsertWithWhereUniqueWithoutProfesorInput | Prisma.nominaUpsertWithWhereUniqueWithoutProfesorInput[];
    createMany?: Prisma.nominaCreateManyProfesorInputEnvelope;
    set?: Prisma.nominaWhereUniqueInput | Prisma.nominaWhereUniqueInput[];
    disconnect?: Prisma.nominaWhereUniqueInput | Prisma.nominaWhereUniqueInput[];
    delete?: Prisma.nominaWhereUniqueInput | Prisma.nominaWhereUniqueInput[];
    connect?: Prisma.nominaWhereUniqueInput | Prisma.nominaWhereUniqueInput[];
    update?: Prisma.nominaUpdateWithWhereUniqueWithoutProfesorInput | Prisma.nominaUpdateWithWhereUniqueWithoutProfesorInput[];
    updateMany?: Prisma.nominaUpdateManyWithWhereWithoutProfesorInput | Prisma.nominaUpdateManyWithWhereWithoutProfesorInput[];
    deleteMany?: Prisma.nominaScalarWhereInput | Prisma.nominaScalarWhereInput[];
};
export type nominaUncheckedUpdateManyWithoutProfesorNestedInput = {
    create?: Prisma.XOR<Prisma.nominaCreateWithoutProfesorInput, Prisma.nominaUncheckedCreateWithoutProfesorInput> | Prisma.nominaCreateWithoutProfesorInput[] | Prisma.nominaUncheckedCreateWithoutProfesorInput[];
    connectOrCreate?: Prisma.nominaCreateOrConnectWithoutProfesorInput | Prisma.nominaCreateOrConnectWithoutProfesorInput[];
    upsert?: Prisma.nominaUpsertWithWhereUniqueWithoutProfesorInput | Prisma.nominaUpsertWithWhereUniqueWithoutProfesorInput[];
    createMany?: Prisma.nominaCreateManyProfesorInputEnvelope;
    set?: Prisma.nominaWhereUniqueInput | Prisma.nominaWhereUniqueInput[];
    disconnect?: Prisma.nominaWhereUniqueInput | Prisma.nominaWhereUniqueInput[];
    delete?: Prisma.nominaWhereUniqueInput | Prisma.nominaWhereUniqueInput[];
    connect?: Prisma.nominaWhereUniqueInput | Prisma.nominaWhereUniqueInput[];
    update?: Prisma.nominaUpdateWithWhereUniqueWithoutProfesorInput | Prisma.nominaUpdateWithWhereUniqueWithoutProfesorInput[];
    updateMany?: Prisma.nominaUpdateManyWithWhereWithoutProfesorInput | Prisma.nominaUpdateManyWithWhereWithoutProfesorInput[];
    deleteMany?: Prisma.nominaScalarWhereInput | Prisma.nominaScalarWhereInput[];
};
export type nominaCreateWithoutContratoInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    fechaPago?: Date | string | null;
    salarioBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.nomina_estado;
    asientoId?: string | null;
    origenCalculo?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    lineanomina?: Prisma.lineanominaCreateNestedManyWithoutNominaInput;
    profesor: Prisma.profesorCreateNestedOneWithoutNominaInput;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedOneWithoutNominaInput;
};
export type nominaUncheckedCreateWithoutContratoInput = {
    id: string;
    profesorId: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    fechaPago?: Date | string | null;
    salarioBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.nomina_estado;
    asientoId?: string | null;
    origenCalculo?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    lineanomina?: Prisma.lineanominaUncheckedCreateNestedManyWithoutNominaInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedOneWithoutNominaInput;
};
export type nominaCreateOrConnectWithoutContratoInput = {
    where: Prisma.nominaWhereUniqueInput;
    create: Prisma.XOR<Prisma.nominaCreateWithoutContratoInput, Prisma.nominaUncheckedCreateWithoutContratoInput>;
};
export type nominaCreateManyContratoInputEnvelope = {
    data: Prisma.nominaCreateManyContratoInput | Prisma.nominaCreateManyContratoInput[];
    skipDuplicates?: boolean;
};
export type nominaUpsertWithWhereUniqueWithoutContratoInput = {
    where: Prisma.nominaWhereUniqueInput;
    update: Prisma.XOR<Prisma.nominaUpdateWithoutContratoInput, Prisma.nominaUncheckedUpdateWithoutContratoInput>;
    create: Prisma.XOR<Prisma.nominaCreateWithoutContratoInput, Prisma.nominaUncheckedCreateWithoutContratoInput>;
};
export type nominaUpdateWithWhereUniqueWithoutContratoInput = {
    where: Prisma.nominaWhereUniqueInput;
    data: Prisma.XOR<Prisma.nominaUpdateWithoutContratoInput, Prisma.nominaUncheckedUpdateWithoutContratoInput>;
};
export type nominaUpdateManyWithWhereWithoutContratoInput = {
    where: Prisma.nominaScalarWhereInput;
    data: Prisma.XOR<Prisma.nominaUpdateManyMutationInput, Prisma.nominaUncheckedUpdateManyWithoutContratoInput>;
};
export type nominaScalarWhereInput = {
    AND?: Prisma.nominaScalarWhereInput | Prisma.nominaScalarWhereInput[];
    OR?: Prisma.nominaScalarWhereInput[];
    NOT?: Prisma.nominaScalarWhereInput | Prisma.nominaScalarWhereInput[];
    id?: Prisma.StringFilter<"nomina"> | string;
    profesorId?: Prisma.StringFilter<"nomina"> | string;
    contratoId?: Prisma.StringNullableFilter<"nomina"> | string | null;
    fechaInicio?: Prisma.DateTimeFilter<"nomina"> | Date | string;
    fechaFin?: Prisma.DateTimeFilter<"nomina"> | Date | string;
    fechaPago?: Prisma.DateTimeNullableFilter<"nomina"> | Date | string | null;
    salarioBruto?: Prisma.DecimalFilter<"nomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: Prisma.DecimalFilter<"nomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: Prisma.DecimalFilter<"nomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: Prisma.DecimalFilter<"nomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto?: Prisma.DecimalFilter<"nomina"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumnomina_estadoFilter<"nomina"> | $Enums.nomina_estado;
    asientoId?: Prisma.StringNullableFilter<"nomina"> | string | null;
    origenCalculo?: Prisma.StringNullableFilter<"nomina"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"nomina"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"nomina"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"nomina"> | Date | string;
};
export type nominaCreateWithoutLineanominaInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    fechaPago?: Date | string | null;
    salarioBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.nomina_estado;
    asientoId?: string | null;
    origenCalculo?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    contrato?: Prisma.contratoCreateNestedOneWithoutNominaInput;
    profesor: Prisma.profesorCreateNestedOneWithoutNominaInput;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedOneWithoutNominaInput;
};
export type nominaUncheckedCreateWithoutLineanominaInput = {
    id: string;
    profesorId: string;
    contratoId?: string | null;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    fechaPago?: Date | string | null;
    salarioBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.nomina_estado;
    asientoId?: string | null;
    origenCalculo?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedOneWithoutNominaInput;
};
export type nominaCreateOrConnectWithoutLineanominaInput = {
    where: Prisma.nominaWhereUniqueInput;
    create: Prisma.XOR<Prisma.nominaCreateWithoutLineanominaInput, Prisma.nominaUncheckedCreateWithoutLineanominaInput>;
};
export type nominaUpsertWithoutLineanominaInput = {
    update: Prisma.XOR<Prisma.nominaUpdateWithoutLineanominaInput, Prisma.nominaUncheckedUpdateWithoutLineanominaInput>;
    create: Prisma.XOR<Prisma.nominaCreateWithoutLineanominaInput, Prisma.nominaUncheckedCreateWithoutLineanominaInput>;
    where?: Prisma.nominaWhereInput;
};
export type nominaUpdateToOneWithWhereWithoutLineanominaInput = {
    where?: Prisma.nominaWhereInput;
    data: Prisma.XOR<Prisma.nominaUpdateWithoutLineanominaInput, Prisma.nominaUncheckedUpdateWithoutLineanominaInput>;
};
export type nominaUpdateWithoutLineanominaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaPago?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumnomina_estadoFieldUpdateOperationsInput | $Enums.nomina_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    origenCalculo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contrato?: Prisma.contratoUpdateOneWithoutNominaNestedInput;
    profesor?: Prisma.profesorUpdateOneRequiredWithoutNominaNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateOneWithoutNominaNestedInput;
};
export type nominaUncheckedUpdateWithoutLineanominaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profesorId?: Prisma.StringFieldUpdateOperationsInput | string;
    contratoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaPago?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumnomina_estadoFieldUpdateOperationsInput | $Enums.nomina_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    origenCalculo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateOneWithoutNominaNestedInput;
};
export type nominaCreateWithoutObligacioneconomicaInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    fechaPago?: Date | string | null;
    salarioBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.nomina_estado;
    asientoId?: string | null;
    origenCalculo?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    lineanomina?: Prisma.lineanominaCreateNestedManyWithoutNominaInput;
    contrato?: Prisma.contratoCreateNestedOneWithoutNominaInput;
    profesor: Prisma.profesorCreateNestedOneWithoutNominaInput;
};
export type nominaUncheckedCreateWithoutObligacioneconomicaInput = {
    id: string;
    profesorId: string;
    contratoId?: string | null;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    fechaPago?: Date | string | null;
    salarioBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.nomina_estado;
    asientoId?: string | null;
    origenCalculo?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    lineanomina?: Prisma.lineanominaUncheckedCreateNestedManyWithoutNominaInput;
};
export type nominaCreateOrConnectWithoutObligacioneconomicaInput = {
    where: Prisma.nominaWhereUniqueInput;
    create: Prisma.XOR<Prisma.nominaCreateWithoutObligacioneconomicaInput, Prisma.nominaUncheckedCreateWithoutObligacioneconomicaInput>;
};
export type nominaUpsertWithoutObligacioneconomicaInput = {
    update: Prisma.XOR<Prisma.nominaUpdateWithoutObligacioneconomicaInput, Prisma.nominaUncheckedUpdateWithoutObligacioneconomicaInput>;
    create: Prisma.XOR<Prisma.nominaCreateWithoutObligacioneconomicaInput, Prisma.nominaUncheckedCreateWithoutObligacioneconomicaInput>;
    where?: Prisma.nominaWhereInput;
};
export type nominaUpdateToOneWithWhereWithoutObligacioneconomicaInput = {
    where?: Prisma.nominaWhereInput;
    data: Prisma.XOR<Prisma.nominaUpdateWithoutObligacioneconomicaInput, Prisma.nominaUncheckedUpdateWithoutObligacioneconomicaInput>;
};
export type nominaUpdateWithoutObligacioneconomicaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaPago?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumnomina_estadoFieldUpdateOperationsInput | $Enums.nomina_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    origenCalculo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineanomina?: Prisma.lineanominaUpdateManyWithoutNominaNestedInput;
    contrato?: Prisma.contratoUpdateOneWithoutNominaNestedInput;
    profesor?: Prisma.profesorUpdateOneRequiredWithoutNominaNestedInput;
};
export type nominaUncheckedUpdateWithoutObligacioneconomicaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profesorId?: Prisma.StringFieldUpdateOperationsInput | string;
    contratoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaPago?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumnomina_estadoFieldUpdateOperationsInput | $Enums.nomina_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    origenCalculo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineanomina?: Prisma.lineanominaUncheckedUpdateManyWithoutNominaNestedInput;
};
export type nominaCreateWithoutProfesorInput = {
    id: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    fechaPago?: Date | string | null;
    salarioBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.nomina_estado;
    asientoId?: string | null;
    origenCalculo?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    lineanomina?: Prisma.lineanominaCreateNestedManyWithoutNominaInput;
    contrato?: Prisma.contratoCreateNestedOneWithoutNominaInput;
    obligacioneconomica?: Prisma.obligacioneconomicaCreateNestedOneWithoutNominaInput;
};
export type nominaUncheckedCreateWithoutProfesorInput = {
    id: string;
    contratoId?: string | null;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    fechaPago?: Date | string | null;
    salarioBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.nomina_estado;
    asientoId?: string | null;
    origenCalculo?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    lineanomina?: Prisma.lineanominaUncheckedCreateNestedManyWithoutNominaInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedCreateNestedOneWithoutNominaInput;
};
export type nominaCreateOrConnectWithoutProfesorInput = {
    where: Prisma.nominaWhereUniqueInput;
    create: Prisma.XOR<Prisma.nominaCreateWithoutProfesorInput, Prisma.nominaUncheckedCreateWithoutProfesorInput>;
};
export type nominaCreateManyProfesorInputEnvelope = {
    data: Prisma.nominaCreateManyProfesorInput | Prisma.nominaCreateManyProfesorInput[];
    skipDuplicates?: boolean;
};
export type nominaUpsertWithWhereUniqueWithoutProfesorInput = {
    where: Prisma.nominaWhereUniqueInput;
    update: Prisma.XOR<Prisma.nominaUpdateWithoutProfesorInput, Prisma.nominaUncheckedUpdateWithoutProfesorInput>;
    create: Prisma.XOR<Prisma.nominaCreateWithoutProfesorInput, Prisma.nominaUncheckedCreateWithoutProfesorInput>;
};
export type nominaUpdateWithWhereUniqueWithoutProfesorInput = {
    where: Prisma.nominaWhereUniqueInput;
    data: Prisma.XOR<Prisma.nominaUpdateWithoutProfesorInput, Prisma.nominaUncheckedUpdateWithoutProfesorInput>;
};
export type nominaUpdateManyWithWhereWithoutProfesorInput = {
    where: Prisma.nominaScalarWhereInput;
    data: Prisma.XOR<Prisma.nominaUpdateManyMutationInput, Prisma.nominaUncheckedUpdateManyWithoutProfesorInput>;
};
export type nominaCreateManyContratoInput = {
    id: string;
    profesorId: string;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    fechaPago?: Date | string | null;
    salarioBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.nomina_estado;
    asientoId?: string | null;
    origenCalculo?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type nominaUpdateWithoutContratoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaPago?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumnomina_estadoFieldUpdateOperationsInput | $Enums.nomina_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    origenCalculo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineanomina?: Prisma.lineanominaUpdateManyWithoutNominaNestedInput;
    profesor?: Prisma.profesorUpdateOneRequiredWithoutNominaNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateOneWithoutNominaNestedInput;
};
export type nominaUncheckedUpdateWithoutContratoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profesorId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaPago?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumnomina_estadoFieldUpdateOperationsInput | $Enums.nomina_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    origenCalculo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineanomina?: Prisma.lineanominaUncheckedUpdateManyWithoutNominaNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateOneWithoutNominaNestedInput;
};
export type nominaUncheckedUpdateManyWithoutContratoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profesorId?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaPago?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumnomina_estadoFieldUpdateOperationsInput | $Enums.nomina_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    origenCalculo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type nominaCreateManyProfesorInput = {
    id: string;
    contratoId?: string | null;
    fechaInicio: Date | string;
    fechaFin: Date | string;
    fechaPago?: Date | string | null;
    salarioBruto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: $Enums.nomina_estado;
    asientoId?: string | null;
    origenCalculo?: string | null;
    observaciones?: string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type nominaUpdateWithoutProfesorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaPago?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumnomina_estadoFieldUpdateOperationsInput | $Enums.nomina_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    origenCalculo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineanomina?: Prisma.lineanominaUpdateManyWithoutNominaNestedInput;
    contrato?: Prisma.contratoUpdateOneWithoutNominaNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUpdateOneWithoutNominaNestedInput;
};
export type nominaUncheckedUpdateWithoutProfesorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contratoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaPago?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumnomina_estadoFieldUpdateOperationsInput | $Enums.nomina_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    origenCalculo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    lineanomina?: Prisma.lineanominaUncheckedUpdateManyWithoutNominaNestedInput;
    obligacioneconomica?: Prisma.obligacioneconomicaUncheckedUpdateOneWithoutNominaNestedInput;
};
export type nominaUncheckedUpdateManyWithoutProfesorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    contratoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fechaInicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaFin?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fechaPago?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    salarioBruto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    irpf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssTrabajador?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    ssUMT?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    totalNeto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    estado?: Prisma.Enumnomina_estadoFieldUpdateOperationsInput | $Enums.nomina_estado;
    asientoId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    origenCalculo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type NominaCountOutputType
 */
export type NominaCountOutputType = {
    lineanomina: number;
};
export type NominaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lineanomina?: boolean | NominaCountOutputTypeCountLineanominaArgs;
};
/**
 * NominaCountOutputType without action
 */
export type NominaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NominaCountOutputType
     */
    select?: Prisma.NominaCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * NominaCountOutputType without action
 */
export type NominaCountOutputTypeCountLineanominaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lineanominaWhereInput;
};
export type nominaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profesorId?: boolean;
    contratoId?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    fechaPago?: boolean;
    salarioBruto?: boolean;
    irpf?: boolean;
    ssTrabajador?: boolean;
    ssUMT?: boolean;
    totalNeto?: boolean;
    estado?: boolean;
    asientoId?: boolean;
    origenCalculo?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    lineanomina?: boolean | Prisma.nomina$lineanominaArgs<ExtArgs>;
    contrato?: boolean | Prisma.nomina$contratoArgs<ExtArgs>;
    profesor?: boolean | Prisma.profesorDefaultArgs<ExtArgs>;
    obligacioneconomica?: boolean | Prisma.nomina$obligacioneconomicaArgs<ExtArgs>;
    _count?: boolean | Prisma.NominaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["nomina"]>;
export type nominaSelectScalar = {
    id?: boolean;
    profesorId?: boolean;
    contratoId?: boolean;
    fechaInicio?: boolean;
    fechaFin?: boolean;
    fechaPago?: boolean;
    salarioBruto?: boolean;
    irpf?: boolean;
    ssTrabajador?: boolean;
    ssUMT?: boolean;
    totalNeto?: boolean;
    estado?: boolean;
    asientoId?: boolean;
    origenCalculo?: boolean;
    observaciones?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type nominaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "profesorId" | "contratoId" | "fechaInicio" | "fechaFin" | "fechaPago" | "salarioBruto" | "irpf" | "ssTrabajador" | "ssUMT" | "totalNeto" | "estado" | "asientoId" | "origenCalculo" | "observaciones" | "createdAt" | "updatedAt", ExtArgs["result"]["nomina"]>;
export type nominaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lineanomina?: boolean | Prisma.nomina$lineanominaArgs<ExtArgs>;
    contrato?: boolean | Prisma.nomina$contratoArgs<ExtArgs>;
    profesor?: boolean | Prisma.profesorDefaultArgs<ExtArgs>;
    obligacioneconomica?: boolean | Prisma.nomina$obligacioneconomicaArgs<ExtArgs>;
    _count?: boolean | Prisma.NominaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $nominaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "nomina";
    objects: {
        lineanomina: Prisma.$lineanominaPayload<ExtArgs>[];
        contrato: Prisma.$contratoPayload<ExtArgs> | null;
        profesor: Prisma.$profesorPayload<ExtArgs>;
        obligacioneconomica: Prisma.$obligacioneconomicaPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        profesorId: string;
        contratoId: string | null;
        fechaInicio: Date;
        fechaFin: Date;
        fechaPago: Date | null;
        salarioBruto: runtime.Decimal;
        irpf: runtime.Decimal;
        ssTrabajador: runtime.Decimal;
        ssUMT: runtime.Decimal;
        totalNeto: runtime.Decimal;
        estado: $Enums.nomina_estado;
        asientoId: string | null;
        origenCalculo: string | null;
        observaciones: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["nomina"]>;
    composites: {};
};
export type nominaGetPayload<S extends boolean | null | undefined | nominaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$nominaPayload, S>;
export type nominaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<nominaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NominaCountAggregateInputType | true;
};
export interface nominaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['nomina'];
        meta: {
            name: 'nomina';
        };
    };
    /**
     * Find zero or one Nomina that matches the filter.
     * @param {nominaFindUniqueArgs} args - Arguments to find a Nomina
     * @example
     * // Get one Nomina
     * const nomina = await prisma.nomina.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends nominaFindUniqueArgs>(args: Prisma.SelectSubset<T, nominaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__nominaClient<runtime.Types.Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Nomina that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {nominaFindUniqueOrThrowArgs} args - Arguments to find a Nomina
     * @example
     * // Get one Nomina
     * const nomina = await prisma.nomina.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends nominaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, nominaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__nominaClient<runtime.Types.Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Nomina that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nominaFindFirstArgs} args - Arguments to find a Nomina
     * @example
     * // Get one Nomina
     * const nomina = await prisma.nomina.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends nominaFindFirstArgs>(args?: Prisma.SelectSubset<T, nominaFindFirstArgs<ExtArgs>>): Prisma.Prisma__nominaClient<runtime.Types.Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Nomina that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nominaFindFirstOrThrowArgs} args - Arguments to find a Nomina
     * @example
     * // Get one Nomina
     * const nomina = await prisma.nomina.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends nominaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, nominaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__nominaClient<runtime.Types.Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Nominas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nominaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nominas
     * const nominas = await prisma.nomina.findMany()
     *
     * // Get first 10 Nominas
     * const nominas = await prisma.nomina.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const nominaWithIdOnly = await prisma.nomina.findMany({ select: { id: true } })
     *
     */
    findMany<T extends nominaFindManyArgs>(args?: Prisma.SelectSubset<T, nominaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Nomina.
     * @param {nominaCreateArgs} args - Arguments to create a Nomina.
     * @example
     * // Create one Nomina
     * const Nomina = await prisma.nomina.create({
     *   data: {
     *     // ... data to create a Nomina
     *   }
     * })
     *
     */
    create<T extends nominaCreateArgs>(args: Prisma.SelectSubset<T, nominaCreateArgs<ExtArgs>>): Prisma.Prisma__nominaClient<runtime.Types.Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Nominas.
     * @param {nominaCreateManyArgs} args - Arguments to create many Nominas.
     * @example
     * // Create many Nominas
     * const nomina = await prisma.nomina.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends nominaCreateManyArgs>(args?: Prisma.SelectSubset<T, nominaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Nomina.
     * @param {nominaDeleteArgs} args - Arguments to delete one Nomina.
     * @example
     * // Delete one Nomina
     * const Nomina = await prisma.nomina.delete({
     *   where: {
     *     // ... filter to delete one Nomina
     *   }
     * })
     *
     */
    delete<T extends nominaDeleteArgs>(args: Prisma.SelectSubset<T, nominaDeleteArgs<ExtArgs>>): Prisma.Prisma__nominaClient<runtime.Types.Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Nomina.
     * @param {nominaUpdateArgs} args - Arguments to update one Nomina.
     * @example
     * // Update one Nomina
     * const nomina = await prisma.nomina.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends nominaUpdateArgs>(args: Prisma.SelectSubset<T, nominaUpdateArgs<ExtArgs>>): Prisma.Prisma__nominaClient<runtime.Types.Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Nominas.
     * @param {nominaDeleteManyArgs} args - Arguments to filter Nominas to delete.
     * @example
     * // Delete a few Nominas
     * const { count } = await prisma.nomina.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends nominaDeleteManyArgs>(args?: Prisma.SelectSubset<T, nominaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Nominas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nominaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nominas
     * const nomina = await prisma.nomina.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends nominaUpdateManyArgs>(args: Prisma.SelectSubset<T, nominaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Nomina.
     * @param {nominaUpsertArgs} args - Arguments to update or create a Nomina.
     * @example
     * // Update or create a Nomina
     * const nomina = await prisma.nomina.upsert({
     *   create: {
     *     // ... data to create a Nomina
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nomina we want to update
     *   }
     * })
     */
    upsert<T extends nominaUpsertArgs>(args: Prisma.SelectSubset<T, nominaUpsertArgs<ExtArgs>>): Prisma.Prisma__nominaClient<runtime.Types.Result.GetResult<Prisma.$nominaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Nominas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nominaCountArgs} args - Arguments to filter Nominas to count.
     * @example
     * // Count the number of Nominas
     * const count = await prisma.nomina.count({
     *   where: {
     *     // ... the filter for the Nominas we want to count
     *   }
     * })
    **/
    count<T extends nominaCountArgs>(args?: Prisma.Subset<T, nominaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NominaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Nomina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NominaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NominaAggregateArgs>(args: Prisma.Subset<T, NominaAggregateArgs>): Prisma.PrismaPromise<GetNominaAggregateType<T>>;
    /**
     * Group by Nomina.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nominaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends nominaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: nominaGroupByArgs['orderBy'];
    } : {
        orderBy?: nominaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, nominaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNominaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the nomina model
     */
    readonly fields: nominaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for nomina.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__nominaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    lineanomina<T extends Prisma.nomina$lineanominaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.nomina$lineanominaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lineanominaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    contrato<T extends Prisma.nomina$contratoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.nomina$contratoArgs<ExtArgs>>): Prisma.Prisma__contratoClient<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    profesor<T extends Prisma.profesorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.profesorDefaultArgs<ExtArgs>>): Prisma.Prisma__profesorClient<runtime.Types.Result.GetResult<Prisma.$profesorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    obligacioneconomica<T extends Prisma.nomina$obligacioneconomicaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.nomina$obligacioneconomicaArgs<ExtArgs>>): Prisma.Prisma__obligacioneconomicaClient<runtime.Types.Result.GetResult<Prisma.$obligacioneconomicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the nomina model
 */
export interface nominaFieldRefs {
    readonly id: Prisma.FieldRef<"nomina", 'String'>;
    readonly profesorId: Prisma.FieldRef<"nomina", 'String'>;
    readonly contratoId: Prisma.FieldRef<"nomina", 'String'>;
    readonly fechaInicio: Prisma.FieldRef<"nomina", 'DateTime'>;
    readonly fechaFin: Prisma.FieldRef<"nomina", 'DateTime'>;
    readonly fechaPago: Prisma.FieldRef<"nomina", 'DateTime'>;
    readonly salarioBruto: Prisma.FieldRef<"nomina", 'Decimal'>;
    readonly irpf: Prisma.FieldRef<"nomina", 'Decimal'>;
    readonly ssTrabajador: Prisma.FieldRef<"nomina", 'Decimal'>;
    readonly ssUMT: Prisma.FieldRef<"nomina", 'Decimal'>;
    readonly totalNeto: Prisma.FieldRef<"nomina", 'Decimal'>;
    readonly estado: Prisma.FieldRef<"nomina", 'nomina_estado'>;
    readonly asientoId: Prisma.FieldRef<"nomina", 'String'>;
    readonly origenCalculo: Prisma.FieldRef<"nomina", 'String'>;
    readonly observaciones: Prisma.FieldRef<"nomina", 'String'>;
    readonly createdAt: Prisma.FieldRef<"nomina", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"nomina", 'DateTime'>;
}
/**
 * nomina findUnique
 */
export type nominaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which nomina to fetch.
     */
    where: Prisma.nominaWhereUniqueInput;
};
/**
 * nomina findUniqueOrThrow
 */
export type nominaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which nomina to fetch.
     */
    where: Prisma.nominaWhereUniqueInput;
};
/**
 * nomina findFirst
 */
export type nominaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which nomina to fetch.
     */
    where?: Prisma.nominaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of nominas to fetch.
     */
    orderBy?: Prisma.nominaOrderByWithRelationInput | Prisma.nominaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for nominas.
     */
    cursor?: Prisma.nominaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` nominas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` nominas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of nominas.
     */
    distinct?: Prisma.NominaScalarFieldEnum | Prisma.NominaScalarFieldEnum[];
};
/**
 * nomina findFirstOrThrow
 */
export type nominaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which nomina to fetch.
     */
    where?: Prisma.nominaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of nominas to fetch.
     */
    orderBy?: Prisma.nominaOrderByWithRelationInput | Prisma.nominaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for nominas.
     */
    cursor?: Prisma.nominaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` nominas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` nominas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of nominas.
     */
    distinct?: Prisma.NominaScalarFieldEnum | Prisma.NominaScalarFieldEnum[];
};
/**
 * nomina findMany
 */
export type nominaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which nominas to fetch.
     */
    where?: Prisma.nominaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of nominas to fetch.
     */
    orderBy?: Prisma.nominaOrderByWithRelationInput | Prisma.nominaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing nominas.
     */
    cursor?: Prisma.nominaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` nominas from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` nominas.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of nominas.
     */
    distinct?: Prisma.NominaScalarFieldEnum | Prisma.NominaScalarFieldEnum[];
};
/**
 * nomina create
 */
export type nominaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a nomina.
     */
    data: Prisma.XOR<Prisma.nominaCreateInput, Prisma.nominaUncheckedCreateInput>;
};
/**
 * nomina createMany
 */
export type nominaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many nominas.
     */
    data: Prisma.nominaCreateManyInput | Prisma.nominaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * nomina update
 */
export type nominaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a nomina.
     */
    data: Prisma.XOR<Prisma.nominaUpdateInput, Prisma.nominaUncheckedUpdateInput>;
    /**
     * Choose, which nomina to update.
     */
    where: Prisma.nominaWhereUniqueInput;
};
/**
 * nomina updateMany
 */
export type nominaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update nominas.
     */
    data: Prisma.XOR<Prisma.nominaUpdateManyMutationInput, Prisma.nominaUncheckedUpdateManyInput>;
    /**
     * Filter which nominas to update
     */
    where?: Prisma.nominaWhereInput;
    /**
     * Limit how many nominas to update.
     */
    limit?: number;
};
/**
 * nomina upsert
 */
export type nominaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the nomina to update in case it exists.
     */
    where: Prisma.nominaWhereUniqueInput;
    /**
     * In case the nomina found by the `where` argument doesn't exist, create a new nomina with this data.
     */
    create: Prisma.XOR<Prisma.nominaCreateInput, Prisma.nominaUncheckedCreateInput>;
    /**
     * In case the nomina was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.nominaUpdateInput, Prisma.nominaUncheckedUpdateInput>;
};
/**
 * nomina delete
 */
export type nominaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which nomina to delete.
     */
    where: Prisma.nominaWhereUniqueInput;
};
/**
 * nomina deleteMany
 */
export type nominaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which nominas to delete
     */
    where?: Prisma.nominaWhereInput;
    /**
     * Limit how many nominas to delete.
     */
    limit?: number;
};
/**
 * nomina.lineanomina
 */
export type nomina$lineanominaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.lineanominaWhereInput;
    orderBy?: Prisma.lineanominaOrderByWithRelationInput | Prisma.lineanominaOrderByWithRelationInput[];
    cursor?: Prisma.lineanominaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LineanominaScalarFieldEnum | Prisma.LineanominaScalarFieldEnum[];
};
/**
 * nomina.contrato
 */
export type nomina$contratoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contrato
     */
    select?: Prisma.contratoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the contrato
     */
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.contratoInclude<ExtArgs> | null;
    where?: Prisma.contratoWhereInput;
};
/**
 * nomina.obligacioneconomica
 */
export type nomina$obligacioneconomicaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * nomina without action
 */
export type nominaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=nomina.d.ts.map