import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model usuario
 *
 */
export type usuarioModel = runtime.Types.Result.DefaultSelection<Prisma.$usuarioPayload>;
export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
export type UsuarioMinAggregateOutputType = {
    id: string | null;
    personaId: string | null;
    username: string | null;
    passwordHash: string | null;
    activo: boolean | null;
    ultimoAccesoAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UsuarioMaxAggregateOutputType = {
    id: string | null;
    personaId: string | null;
    username: string | null;
    passwordHash: string | null;
    activo: boolean | null;
    ultimoAccesoAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UsuarioCountAggregateOutputType = {
    id: number;
    personaId: number;
    username: number;
    passwordHash: number;
    activo: number;
    ultimoAccesoAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UsuarioMinAggregateInputType = {
    id?: true;
    personaId?: true;
    username?: true;
    passwordHash?: true;
    activo?: true;
    ultimoAccesoAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UsuarioMaxAggregateInputType = {
    id?: true;
    personaId?: true;
    username?: true;
    passwordHash?: true;
    activo?: true;
    ultimoAccesoAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UsuarioCountAggregateInputType = {
    id?: true;
    personaId?: true;
    username?: true;
    passwordHash?: true;
    activo?: true;
    ultimoAccesoAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UsuarioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: Prisma.usuarioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of usuarios to fetch.
     */
    orderBy?: Prisma.usuarioOrderByWithRelationInput | Prisma.usuarioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.usuarioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` usuarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType;
};
export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsuario[P]> : Prisma.GetScalarType<T[P], AggregateUsuario[P]>;
};
export type usuarioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usuarioWhereInput;
    orderBy?: Prisma.usuarioOrderByWithAggregationInput | Prisma.usuarioOrderByWithAggregationInput[];
    by: Prisma.UsuarioScalarFieldEnum[] | Prisma.UsuarioScalarFieldEnum;
    having?: Prisma.usuarioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsuarioCountAggregateInputType | true;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
};
export type UsuarioGroupByOutputType = {
    id: string;
    personaId: string;
    username: string;
    passwordHash: string;
    activo: boolean;
    ultimoAccesoAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UsuarioCountAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
export type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsuarioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]>;
}>>;
export type usuarioWhereInput = {
    AND?: Prisma.usuarioWhereInput | Prisma.usuarioWhereInput[];
    OR?: Prisma.usuarioWhereInput[];
    NOT?: Prisma.usuarioWhereInput | Prisma.usuarioWhereInput[];
    id?: Prisma.StringFilter<"usuario"> | string;
    personaId?: Prisma.StringFilter<"usuario"> | string;
    username?: Prisma.StringFilter<"usuario"> | string;
    passwordHash?: Prisma.StringFilter<"usuario"> | string;
    activo?: Prisma.BoolFilter<"usuario"> | boolean;
    ultimoAccesoAt?: Prisma.DateTimeNullableFilter<"usuario"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"usuario"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"usuario"> | Date | string;
    auditlog?: Prisma.AuditlogListRelationFilter;
    sesion?: Prisma.SesionListRelationFilter;
    persona?: Prisma.XOR<Prisma.PersonaScalarRelationFilter, Prisma.personaWhereInput>;
};
export type usuarioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    ultimoAccesoAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    auditlog?: Prisma.auditlogOrderByRelationAggregateInput;
    sesion?: Prisma.sesionOrderByRelationAggregateInput;
    persona?: Prisma.personaOrderByWithRelationInput;
    _relevance?: Prisma.usuarioOrderByRelevanceInput;
};
export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    personaId?: string;
    username?: string;
    AND?: Prisma.usuarioWhereInput | Prisma.usuarioWhereInput[];
    OR?: Prisma.usuarioWhereInput[];
    NOT?: Prisma.usuarioWhereInput | Prisma.usuarioWhereInput[];
    passwordHash?: Prisma.StringFilter<"usuario"> | string;
    activo?: Prisma.BoolFilter<"usuario"> | boolean;
    ultimoAccesoAt?: Prisma.DateTimeNullableFilter<"usuario"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"usuario"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"usuario"> | Date | string;
    auditlog?: Prisma.AuditlogListRelationFilter;
    sesion?: Prisma.SesionListRelationFilter;
    persona?: Prisma.XOR<Prisma.PersonaScalarRelationFilter, Prisma.personaWhereInput>;
}, "id" | "personaId" | "username">;
export type usuarioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    ultimoAccesoAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.usuarioCountOrderByAggregateInput;
    _max?: Prisma.usuarioMaxOrderByAggregateInput;
    _min?: Prisma.usuarioMinOrderByAggregateInput;
};
export type usuarioScalarWhereWithAggregatesInput = {
    AND?: Prisma.usuarioScalarWhereWithAggregatesInput | Prisma.usuarioScalarWhereWithAggregatesInput[];
    OR?: Prisma.usuarioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.usuarioScalarWhereWithAggregatesInput | Prisma.usuarioScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"usuario"> | string;
    personaId?: Prisma.StringWithAggregatesFilter<"usuario"> | string;
    username?: Prisma.StringWithAggregatesFilter<"usuario"> | string;
    passwordHash?: Prisma.StringWithAggregatesFilter<"usuario"> | string;
    activo?: Prisma.BoolWithAggregatesFilter<"usuario"> | boolean;
    ultimoAccesoAt?: Prisma.DateTimeNullableWithAggregatesFilter<"usuario"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"usuario"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"usuario"> | Date | string;
};
export type usuarioCreateInput = {
    id: string;
    username: string;
    passwordHash: string;
    activo?: boolean;
    ultimoAccesoAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    auditlog?: Prisma.auditlogCreateNestedManyWithoutUsuarioInput;
    sesion?: Prisma.sesionCreateNestedManyWithoutUsuarioInput;
    persona: Prisma.personaCreateNestedOneWithoutUsuarioInput;
};
export type usuarioUncheckedCreateInput = {
    id: string;
    personaId: string;
    username: string;
    passwordHash: string;
    activo?: boolean;
    ultimoAccesoAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    auditlog?: Prisma.auditlogUncheckedCreateNestedManyWithoutUsuarioInput;
    sesion?: Prisma.sesionUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type usuarioUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ultimoAccesoAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    auditlog?: Prisma.auditlogUpdateManyWithoutUsuarioNestedInput;
    sesion?: Prisma.sesionUpdateManyWithoutUsuarioNestedInput;
    persona?: Prisma.personaUpdateOneRequiredWithoutUsuarioNestedInput;
};
export type usuarioUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ultimoAccesoAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    auditlog?: Prisma.auditlogUncheckedUpdateManyWithoutUsuarioNestedInput;
    sesion?: Prisma.sesionUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type usuarioCreateManyInput = {
    id: string;
    personaId: string;
    username: string;
    passwordHash: string;
    activo?: boolean;
    ultimoAccesoAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
};
export type usuarioUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ultimoAccesoAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type usuarioUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ultimoAccesoAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsuarioNullableScalarRelationFilter = {
    is?: Prisma.usuarioWhereInput | null;
    isNot?: Prisma.usuarioWhereInput | null;
};
export type UsuarioScalarRelationFilter = {
    is?: Prisma.usuarioWhereInput;
    isNot?: Prisma.usuarioWhereInput;
};
export type usuarioOrderByRelevanceInput = {
    fields: Prisma.usuarioOrderByRelevanceFieldEnum | Prisma.usuarioOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type usuarioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    ultimoAccesoAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type usuarioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    ultimoAccesoAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type usuarioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    personaId?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    ultimoAccesoAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type usuarioCreateNestedOneWithoutAuditlogInput = {
    create?: Prisma.XOR<Prisma.usuarioCreateWithoutAuditlogInput, Prisma.usuarioUncheckedCreateWithoutAuditlogInput>;
    connectOrCreate?: Prisma.usuarioCreateOrConnectWithoutAuditlogInput;
    connect?: Prisma.usuarioWhereUniqueInput;
};
export type usuarioUpdateOneWithoutAuditlogNestedInput = {
    create?: Prisma.XOR<Prisma.usuarioCreateWithoutAuditlogInput, Prisma.usuarioUncheckedCreateWithoutAuditlogInput>;
    connectOrCreate?: Prisma.usuarioCreateOrConnectWithoutAuditlogInput;
    upsert?: Prisma.usuarioUpsertWithoutAuditlogInput;
    disconnect?: Prisma.usuarioWhereInput | boolean;
    delete?: Prisma.usuarioWhereInput | boolean;
    connect?: Prisma.usuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usuarioUpdateToOneWithWhereWithoutAuditlogInput, Prisma.usuarioUpdateWithoutAuditlogInput>, Prisma.usuarioUncheckedUpdateWithoutAuditlogInput>;
};
export type usuarioCreateNestedOneWithoutPersonaInput = {
    create?: Prisma.XOR<Prisma.usuarioCreateWithoutPersonaInput, Prisma.usuarioUncheckedCreateWithoutPersonaInput>;
    connectOrCreate?: Prisma.usuarioCreateOrConnectWithoutPersonaInput;
    connect?: Prisma.usuarioWhereUniqueInput;
};
export type usuarioUncheckedCreateNestedOneWithoutPersonaInput = {
    create?: Prisma.XOR<Prisma.usuarioCreateWithoutPersonaInput, Prisma.usuarioUncheckedCreateWithoutPersonaInput>;
    connectOrCreate?: Prisma.usuarioCreateOrConnectWithoutPersonaInput;
    connect?: Prisma.usuarioWhereUniqueInput;
};
export type usuarioUpdateOneWithoutPersonaNestedInput = {
    create?: Prisma.XOR<Prisma.usuarioCreateWithoutPersonaInput, Prisma.usuarioUncheckedCreateWithoutPersonaInput>;
    connectOrCreate?: Prisma.usuarioCreateOrConnectWithoutPersonaInput;
    upsert?: Prisma.usuarioUpsertWithoutPersonaInput;
    disconnect?: Prisma.usuarioWhereInput | boolean;
    delete?: Prisma.usuarioWhereInput | boolean;
    connect?: Prisma.usuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usuarioUpdateToOneWithWhereWithoutPersonaInput, Prisma.usuarioUpdateWithoutPersonaInput>, Prisma.usuarioUncheckedUpdateWithoutPersonaInput>;
};
export type usuarioUncheckedUpdateOneWithoutPersonaNestedInput = {
    create?: Prisma.XOR<Prisma.usuarioCreateWithoutPersonaInput, Prisma.usuarioUncheckedCreateWithoutPersonaInput>;
    connectOrCreate?: Prisma.usuarioCreateOrConnectWithoutPersonaInput;
    upsert?: Prisma.usuarioUpsertWithoutPersonaInput;
    disconnect?: Prisma.usuarioWhereInput | boolean;
    delete?: Prisma.usuarioWhereInput | boolean;
    connect?: Prisma.usuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usuarioUpdateToOneWithWhereWithoutPersonaInput, Prisma.usuarioUpdateWithoutPersonaInput>, Prisma.usuarioUncheckedUpdateWithoutPersonaInput>;
};
export type usuarioCreateNestedOneWithoutSesionInput = {
    create?: Prisma.XOR<Prisma.usuarioCreateWithoutSesionInput, Prisma.usuarioUncheckedCreateWithoutSesionInput>;
    connectOrCreate?: Prisma.usuarioCreateOrConnectWithoutSesionInput;
    connect?: Prisma.usuarioWhereUniqueInput;
};
export type usuarioUpdateOneRequiredWithoutSesionNestedInput = {
    create?: Prisma.XOR<Prisma.usuarioCreateWithoutSesionInput, Prisma.usuarioUncheckedCreateWithoutSesionInput>;
    connectOrCreate?: Prisma.usuarioCreateOrConnectWithoutSesionInput;
    upsert?: Prisma.usuarioUpsertWithoutSesionInput;
    connect?: Prisma.usuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usuarioUpdateToOneWithWhereWithoutSesionInput, Prisma.usuarioUpdateWithoutSesionInput>, Prisma.usuarioUncheckedUpdateWithoutSesionInput>;
};
export type usuarioCreateWithoutAuditlogInput = {
    id: string;
    username: string;
    passwordHash: string;
    activo?: boolean;
    ultimoAccesoAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    sesion?: Prisma.sesionCreateNestedManyWithoutUsuarioInput;
    persona: Prisma.personaCreateNestedOneWithoutUsuarioInput;
};
export type usuarioUncheckedCreateWithoutAuditlogInput = {
    id: string;
    personaId: string;
    username: string;
    passwordHash: string;
    activo?: boolean;
    ultimoAccesoAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    sesion?: Prisma.sesionUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type usuarioCreateOrConnectWithoutAuditlogInput = {
    where: Prisma.usuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.usuarioCreateWithoutAuditlogInput, Prisma.usuarioUncheckedCreateWithoutAuditlogInput>;
};
export type usuarioUpsertWithoutAuditlogInput = {
    update: Prisma.XOR<Prisma.usuarioUpdateWithoutAuditlogInput, Prisma.usuarioUncheckedUpdateWithoutAuditlogInput>;
    create: Prisma.XOR<Prisma.usuarioCreateWithoutAuditlogInput, Prisma.usuarioUncheckedCreateWithoutAuditlogInput>;
    where?: Prisma.usuarioWhereInput;
};
export type usuarioUpdateToOneWithWhereWithoutAuditlogInput = {
    where?: Prisma.usuarioWhereInput;
    data: Prisma.XOR<Prisma.usuarioUpdateWithoutAuditlogInput, Prisma.usuarioUncheckedUpdateWithoutAuditlogInput>;
};
export type usuarioUpdateWithoutAuditlogInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ultimoAccesoAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sesion?: Prisma.sesionUpdateManyWithoutUsuarioNestedInput;
    persona?: Prisma.personaUpdateOneRequiredWithoutUsuarioNestedInput;
};
export type usuarioUncheckedUpdateWithoutAuditlogInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ultimoAccesoAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sesion?: Prisma.sesionUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type usuarioCreateWithoutPersonaInput = {
    id: string;
    username: string;
    passwordHash: string;
    activo?: boolean;
    ultimoAccesoAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    auditlog?: Prisma.auditlogCreateNestedManyWithoutUsuarioInput;
    sesion?: Prisma.sesionCreateNestedManyWithoutUsuarioInput;
};
export type usuarioUncheckedCreateWithoutPersonaInput = {
    id: string;
    username: string;
    passwordHash: string;
    activo?: boolean;
    ultimoAccesoAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    auditlog?: Prisma.auditlogUncheckedCreateNestedManyWithoutUsuarioInput;
    sesion?: Prisma.sesionUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type usuarioCreateOrConnectWithoutPersonaInput = {
    where: Prisma.usuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.usuarioCreateWithoutPersonaInput, Prisma.usuarioUncheckedCreateWithoutPersonaInput>;
};
export type usuarioUpsertWithoutPersonaInput = {
    update: Prisma.XOR<Prisma.usuarioUpdateWithoutPersonaInput, Prisma.usuarioUncheckedUpdateWithoutPersonaInput>;
    create: Prisma.XOR<Prisma.usuarioCreateWithoutPersonaInput, Prisma.usuarioUncheckedCreateWithoutPersonaInput>;
    where?: Prisma.usuarioWhereInput;
};
export type usuarioUpdateToOneWithWhereWithoutPersonaInput = {
    where?: Prisma.usuarioWhereInput;
    data: Prisma.XOR<Prisma.usuarioUpdateWithoutPersonaInput, Prisma.usuarioUncheckedUpdateWithoutPersonaInput>;
};
export type usuarioUpdateWithoutPersonaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ultimoAccesoAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    auditlog?: Prisma.auditlogUpdateManyWithoutUsuarioNestedInput;
    sesion?: Prisma.sesionUpdateManyWithoutUsuarioNestedInput;
};
export type usuarioUncheckedUpdateWithoutPersonaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ultimoAccesoAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    auditlog?: Prisma.auditlogUncheckedUpdateManyWithoutUsuarioNestedInput;
    sesion?: Prisma.sesionUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type usuarioCreateWithoutSesionInput = {
    id: string;
    username: string;
    passwordHash: string;
    activo?: boolean;
    ultimoAccesoAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    auditlog?: Prisma.auditlogCreateNestedManyWithoutUsuarioInput;
    persona: Prisma.personaCreateNestedOneWithoutUsuarioInput;
};
export type usuarioUncheckedCreateWithoutSesionInput = {
    id: string;
    personaId: string;
    username: string;
    passwordHash: string;
    activo?: boolean;
    ultimoAccesoAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt: Date | string;
    auditlog?: Prisma.auditlogUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type usuarioCreateOrConnectWithoutSesionInput = {
    where: Prisma.usuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.usuarioCreateWithoutSesionInput, Prisma.usuarioUncheckedCreateWithoutSesionInput>;
};
export type usuarioUpsertWithoutSesionInput = {
    update: Prisma.XOR<Prisma.usuarioUpdateWithoutSesionInput, Prisma.usuarioUncheckedUpdateWithoutSesionInput>;
    create: Prisma.XOR<Prisma.usuarioCreateWithoutSesionInput, Prisma.usuarioUncheckedCreateWithoutSesionInput>;
    where?: Prisma.usuarioWhereInput;
};
export type usuarioUpdateToOneWithWhereWithoutSesionInput = {
    where?: Prisma.usuarioWhereInput;
    data: Prisma.XOR<Prisma.usuarioUpdateWithoutSesionInput, Prisma.usuarioUncheckedUpdateWithoutSesionInput>;
};
export type usuarioUpdateWithoutSesionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ultimoAccesoAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    auditlog?: Prisma.auditlogUpdateManyWithoutUsuarioNestedInput;
    persona?: Prisma.personaUpdateOneRequiredWithoutUsuarioNestedInput;
};
export type usuarioUncheckedUpdateWithoutSesionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    personaId?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ultimoAccesoAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    auditlog?: Prisma.auditlogUncheckedUpdateManyWithoutUsuarioNestedInput;
};
/**
 * Count Type UsuarioCountOutputType
 */
export type UsuarioCountOutputType = {
    auditlog: number;
    sesion: number;
};
export type UsuarioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    auditlog?: boolean | UsuarioCountOutputTypeCountAuditlogArgs;
    sesion?: boolean | UsuarioCountOutputTypeCountSesionArgs;
};
/**
 * UsuarioCountOutputType without action
 */
export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: Prisma.UsuarioCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * UsuarioCountOutputType without action
 */
export type UsuarioCountOutputTypeCountAuditlogArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.auditlogWhereInput;
};
/**
 * UsuarioCountOutputType without action
 */
export type UsuarioCountOutputTypeCountSesionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.sesionWhereInput;
};
export type usuarioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    personaId?: boolean;
    username?: boolean;
    passwordHash?: boolean;
    activo?: boolean;
    ultimoAccesoAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    auditlog?: boolean | Prisma.usuario$auditlogArgs<ExtArgs>;
    sesion?: boolean | Prisma.usuario$sesionArgs<ExtArgs>;
    persona?: boolean | Prisma.personaDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuario"]>;
export type usuarioSelectScalar = {
    id?: boolean;
    personaId?: boolean;
    username?: boolean;
    passwordHash?: boolean;
    activo?: boolean;
    ultimoAccesoAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type usuarioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "personaId" | "username" | "passwordHash" | "activo" | "ultimoAccesoAt" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>;
export type usuarioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    auditlog?: boolean | Prisma.usuario$auditlogArgs<ExtArgs>;
    sesion?: boolean | Prisma.usuario$sesionArgs<ExtArgs>;
    persona?: boolean | Prisma.personaDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $usuarioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "usuario";
    objects: {
        auditlog: Prisma.$auditlogPayload<ExtArgs>[];
        sesion: Prisma.$sesionPayload<ExtArgs>[];
        persona: Prisma.$personaPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        personaId: string;
        username: string;
        passwordHash: string;
        activo: boolean;
        ultimoAccesoAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["usuario"]>;
    composites: {};
};
export type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$usuarioPayload, S>;
export type usuarioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsuarioCountAggregateInputType | true;
};
export interface usuarioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['usuario'];
        meta: {
            name: 'usuario';
        };
    };
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: Prisma.SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: Prisma.SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     *
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     *
     */
    findMany<T extends usuarioFindManyArgs>(args?: Prisma.SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     *
     */
    create<T extends usuarioCreateArgs>(args: Prisma.SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends usuarioCreateManyArgs>(args?: Prisma.SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     *
     */
    delete<T extends usuarioDeleteArgs>(args: Prisma.SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends usuarioUpdateArgs>(args: Prisma.SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: Prisma.SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: Prisma.SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: Prisma.SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(args?: Prisma.Subset<T, usuarioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsuarioCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Prisma.Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>;
    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
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
    groupBy<T extends usuarioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: usuarioGroupByArgs['orderBy'];
    } : {
        orderBy?: usuarioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the usuario model
     */
    readonly fields: usuarioFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for usuario.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    auditlog<T extends Prisma.usuario$auditlogArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usuario$auditlogArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$auditlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sesion<T extends Prisma.usuario$sesionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usuario$sesionArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$sesionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    persona<T extends Prisma.personaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.personaDefaultArgs<ExtArgs>>): Prisma.Prisma__personaClient<runtime.Types.Result.GetResult<Prisma.$personaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the usuario model
 */
export interface usuarioFieldRefs {
    readonly id: Prisma.FieldRef<"usuario", 'String'>;
    readonly personaId: Prisma.FieldRef<"usuario", 'String'>;
    readonly username: Prisma.FieldRef<"usuario", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"usuario", 'String'>;
    readonly activo: Prisma.FieldRef<"usuario", 'Boolean'>;
    readonly ultimoAccesoAt: Prisma.FieldRef<"usuario", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"usuario", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"usuario", 'DateTime'>;
}
/**
 * usuario findUnique
 */
export type usuarioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the usuario
     */
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    /**
     * Filter, which usuario to fetch.
     */
    where: Prisma.usuarioWhereUniqueInput;
};
/**
 * usuario findUniqueOrThrow
 */
export type usuarioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the usuario
     */
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    /**
     * Filter, which usuario to fetch.
     */
    where: Prisma.usuarioWhereUniqueInput;
};
/**
 * usuario findFirst
 */
export type usuarioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the usuario
     */
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    /**
     * Filter, which usuario to fetch.
     */
    where?: Prisma.usuarioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of usuarios to fetch.
     */
    orderBy?: Prisma.usuarioOrderByWithRelationInput | Prisma.usuarioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for usuarios.
     */
    cursor?: Prisma.usuarioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` usuarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of usuarios.
     */
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
/**
 * usuario findFirstOrThrow
 */
export type usuarioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the usuario
     */
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    /**
     * Filter, which usuario to fetch.
     */
    where?: Prisma.usuarioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of usuarios to fetch.
     */
    orderBy?: Prisma.usuarioOrderByWithRelationInput | Prisma.usuarioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for usuarios.
     */
    cursor?: Prisma.usuarioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` usuarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of usuarios.
     */
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
/**
 * usuario findMany
 */
export type usuarioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the usuario
     */
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    /**
     * Filter, which usuarios to fetch.
     */
    where?: Prisma.usuarioWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of usuarios to fetch.
     */
    orderBy?: Prisma.usuarioOrderByWithRelationInput | Prisma.usuarioOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing usuarios.
     */
    cursor?: Prisma.usuarioWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` usuarios.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of usuarios.
     */
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
/**
 * usuario create
 */
export type usuarioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the usuario
     */
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    /**
     * The data needed to create a usuario.
     */
    data: Prisma.XOR<Prisma.usuarioCreateInput, Prisma.usuarioUncheckedCreateInput>;
};
/**
 * usuario createMany
 */
export type usuarioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: Prisma.usuarioCreateManyInput | Prisma.usuarioCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * usuario update
 */
export type usuarioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the usuario
     */
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    /**
     * The data needed to update a usuario.
     */
    data: Prisma.XOR<Prisma.usuarioUpdateInput, Prisma.usuarioUncheckedUpdateInput>;
    /**
     * Choose, which usuario to update.
     */
    where: Prisma.usuarioWhereUniqueInput;
};
/**
 * usuario updateMany
 */
export type usuarioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: Prisma.XOR<Prisma.usuarioUpdateManyMutationInput, Prisma.usuarioUncheckedUpdateManyInput>;
    /**
     * Filter which usuarios to update
     */
    where?: Prisma.usuarioWhereInput;
    /**
     * Limit how many usuarios to update.
     */
    limit?: number;
};
/**
 * usuario upsert
 */
export type usuarioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the usuario
     */
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: Prisma.usuarioWhereUniqueInput;
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: Prisma.XOR<Prisma.usuarioCreateInput, Prisma.usuarioUncheckedCreateInput>;
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.usuarioUpdateInput, Prisma.usuarioUncheckedUpdateInput>;
};
/**
 * usuario delete
 */
export type usuarioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the usuario
     */
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    /**
     * Filter which usuario to delete.
     */
    where: Prisma.usuarioWhereUniqueInput;
};
/**
 * usuario deleteMany
 */
export type usuarioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: Prisma.usuarioWhereInput;
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number;
};
/**
 * usuario.auditlog
 */
export type usuario$auditlogArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auditlog
     */
    select?: Prisma.auditlogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the auditlog
     */
    omit?: Prisma.auditlogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.auditlogInclude<ExtArgs> | null;
    where?: Prisma.auditlogWhereInput;
    orderBy?: Prisma.auditlogOrderByWithRelationInput | Prisma.auditlogOrderByWithRelationInput[];
    cursor?: Prisma.auditlogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditlogScalarFieldEnum | Prisma.AuditlogScalarFieldEnum[];
};
/**
 * usuario.sesion
 */
export type usuario$sesionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sesion
     */
    select?: Prisma.sesionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the sesion
     */
    omit?: Prisma.sesionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.sesionInclude<ExtArgs> | null;
    where?: Prisma.sesionWhereInput;
    orderBy?: Prisma.sesionOrderByWithRelationInput | Prisma.sesionOrderByWithRelationInput[];
    cursor?: Prisma.sesionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SesionScalarFieldEnum | Prisma.SesionScalarFieldEnum[];
};
/**
 * usuario without action
 */
export type usuarioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the usuario
     */
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.usuarioInclude<ExtArgs> | null;
};
//# sourceMappingURL=usuario.d.ts.map