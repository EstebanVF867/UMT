import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 7.10.0
 * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: runtime.DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: runtime.JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * Resolved type of the argument passed to the `PrismaClient` constructor.
 *
 * When called without a narrower options type (the common case), this resolves
 * to `PrismaClientOptions` directly, which produces a clear TypeScript error
 * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
 * the argument is missing or incomplete. When the user supplies a narrower
 * options type (e.g. via a literal), it falls back to `Subset` to keep
 * filtering out unknown properties.
 */
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly actuacion: "actuacion";
    readonly actuacionagrupacion: "actuacionagrupacion";
    readonly agrupacion: "agrupacion";
    readonly alumno: "alumno";
    readonly asiento: "asiento";
    readonly asientomovimiento: "asientomovimiento";
    readonly asistencia: "asistencia";
    readonly auditlog: "auditlog";
    readonly aula: "aula";
    readonly centroanalitico: "centroanalitico";
    readonly clase: "clase";
    readonly cliente: "cliente";
    readonly cobro: "cobro";
    readonly condicioncuota: "condicioncuota";
    readonly contratacion: "contratacion";
    readonly contrato: "contrato";
    readonly cuentacontable: "cuentacontable";
    readonly cuentafinanciera: "cuentafinanciera";
    readonly cuota: "cuota";
    readonly derechocobro: "derechocobro";
    readonly director: "director";
    readonly ejercicio: "ejercicio";
    readonly facturacliente: "facturacliente";
    readonly facturaproveedor: "facturaproveedor";
    readonly facturarectificativacliente: "facturarectificativacliente";
    readonly facturarectificativaproveedor: "facturarectificativaproveedor";
    readonly familia: "familia";
    readonly seccion: "seccion";
    readonly instrumento: "instrumento";
    readonly integracionnextcloud: "integracionnextcloud";
    readonly lineaasiento: "lineaasiento";
    readonly lineanomina: "lineanomina";
    readonly lineareparto: "lineareparto";
    readonly liquidacioncobro: "liquidacioncobro";
    readonly liquidacionpago: "liquidacionpago";
    readonly materia: "materia";
    readonly movimientofinanciero: "movimientofinanciero";
    readonly musico: "musico";
    readonly nomina: "nomina";
    readonly obligacioneconomica: "obligacioneconomica";
    readonly pago: "pago";
    readonly parametrosistema: "parametrosistema";
    readonly periodocontable: "periodocontable";
    readonly persona: "persona";
    readonly personaagrupacion: "personaagrupacion";
    readonly personainstrumento: "personainstrumento";
    readonly personarolfuncional: "personarolfuncional";
    readonly profesor: "profesor";
    readonly proveedor: "proveedor";
    readonly remesa: "remesa";
    readonly remesacuota: "remesacuota";
    readonly reparto: "reparto";
    readonly rolfuncional: "rolfuncional";
    readonly sesion: "sesion";
    readonly tarifa: "tarifa";
    readonly usuario: "usuario";
    readonly musicoperiodo: "musicoperiodo";
    readonly alumnoperiodo: "alumnoperiodo";
    readonly profesorperiodo: "profesorperiodo";
    readonly directorperiodo: "directorperiodo";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "actuacion" | "actuacionagrupacion" | "agrupacion" | "alumno" | "asiento" | "asientomovimiento" | "asistencia" | "auditlog" | "aula" | "centroanalitico" | "clase" | "cliente" | "cobro" | "condicioncuota" | "contratacion" | "contrato" | "cuentacontable" | "cuentafinanciera" | "cuota" | "derechocobro" | "director" | "ejercicio" | "facturacliente" | "facturaproveedor" | "facturarectificativacliente" | "facturarectificativaproveedor" | "familia" | "seccion" | "instrumento" | "integracionnextcloud" | "lineaasiento" | "lineanomina" | "lineareparto" | "liquidacioncobro" | "liquidacionpago" | "materia" | "movimientofinanciero" | "musico" | "nomina" | "obligacioneconomica" | "pago" | "parametrosistema" | "periodocontable" | "persona" | "personaagrupacion" | "personainstrumento" | "personarolfuncional" | "profesor" | "proveedor" | "remesa" | "remesacuota" | "reparto" | "rolfuncional" | "sesion" | "tarifa" | "usuario" | "musicoperiodo" | "alumnoperiodo" | "profesorperiodo" | "directorperiodo";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        actuacion: {
            payload: Prisma.$actuacionPayload<ExtArgs>;
            fields: Prisma.actuacionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.actuacionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actuacionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.actuacionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actuacionPayload>;
                };
                findFirst: {
                    args: Prisma.actuacionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actuacionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.actuacionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actuacionPayload>;
                };
                findMany: {
                    args: Prisma.actuacionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actuacionPayload>[];
                };
                create: {
                    args: Prisma.actuacionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actuacionPayload>;
                };
                createMany: {
                    args: Prisma.actuacionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.actuacionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actuacionPayload>;
                };
                update: {
                    args: Prisma.actuacionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actuacionPayload>;
                };
                deleteMany: {
                    args: Prisma.actuacionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.actuacionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.actuacionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actuacionPayload>;
                };
                aggregate: {
                    args: Prisma.ActuacionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateActuacion>;
                };
                groupBy: {
                    args: Prisma.actuacionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ActuacionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.actuacionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ActuacionCountAggregateOutputType> | number;
                };
            };
        };
        actuacionagrupacion: {
            payload: Prisma.$actuacionagrupacionPayload<ExtArgs>;
            fields: Prisma.actuacionagrupacionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.actuacionagrupacionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actuacionagrupacionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.actuacionagrupacionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actuacionagrupacionPayload>;
                };
                findFirst: {
                    args: Prisma.actuacionagrupacionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actuacionagrupacionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.actuacionagrupacionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actuacionagrupacionPayload>;
                };
                findMany: {
                    args: Prisma.actuacionagrupacionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actuacionagrupacionPayload>[];
                };
                create: {
                    args: Prisma.actuacionagrupacionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actuacionagrupacionPayload>;
                };
                createMany: {
                    args: Prisma.actuacionagrupacionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.actuacionagrupacionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actuacionagrupacionPayload>;
                };
                update: {
                    args: Prisma.actuacionagrupacionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actuacionagrupacionPayload>;
                };
                deleteMany: {
                    args: Prisma.actuacionagrupacionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.actuacionagrupacionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.actuacionagrupacionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$actuacionagrupacionPayload>;
                };
                aggregate: {
                    args: Prisma.ActuacionagrupacionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateActuacionagrupacion>;
                };
                groupBy: {
                    args: Prisma.actuacionagrupacionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ActuacionagrupacionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.actuacionagrupacionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ActuacionagrupacionCountAggregateOutputType> | number;
                };
            };
        };
        agrupacion: {
            payload: Prisma.$agrupacionPayload<ExtArgs>;
            fields: Prisma.agrupacionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.agrupacionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agrupacionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.agrupacionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agrupacionPayload>;
                };
                findFirst: {
                    args: Prisma.agrupacionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agrupacionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.agrupacionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agrupacionPayload>;
                };
                findMany: {
                    args: Prisma.agrupacionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agrupacionPayload>[];
                };
                create: {
                    args: Prisma.agrupacionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agrupacionPayload>;
                };
                createMany: {
                    args: Prisma.agrupacionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.agrupacionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agrupacionPayload>;
                };
                update: {
                    args: Prisma.agrupacionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agrupacionPayload>;
                };
                deleteMany: {
                    args: Prisma.agrupacionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.agrupacionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.agrupacionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$agrupacionPayload>;
                };
                aggregate: {
                    args: Prisma.AgrupacionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAgrupacion>;
                };
                groupBy: {
                    args: Prisma.agrupacionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AgrupacionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.agrupacionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AgrupacionCountAggregateOutputType> | number;
                };
            };
        };
        alumno: {
            payload: Prisma.$alumnoPayload<ExtArgs>;
            fields: Prisma.alumnoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.alumnoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.alumnoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnoPayload>;
                };
                findFirst: {
                    args: Prisma.alumnoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.alumnoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnoPayload>;
                };
                findMany: {
                    args: Prisma.alumnoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnoPayload>[];
                };
                create: {
                    args: Prisma.alumnoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnoPayload>;
                };
                createMany: {
                    args: Prisma.alumnoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.alumnoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnoPayload>;
                };
                update: {
                    args: Prisma.alumnoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnoPayload>;
                };
                deleteMany: {
                    args: Prisma.alumnoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.alumnoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.alumnoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnoPayload>;
                };
                aggregate: {
                    args: Prisma.AlumnoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAlumno>;
                };
                groupBy: {
                    args: Prisma.alumnoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AlumnoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.alumnoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AlumnoCountAggregateOutputType> | number;
                };
            };
        };
        asiento: {
            payload: Prisma.$asientoPayload<ExtArgs>;
            fields: Prisma.asientoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.asientoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asientoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.asientoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asientoPayload>;
                };
                findFirst: {
                    args: Prisma.asientoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asientoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.asientoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asientoPayload>;
                };
                findMany: {
                    args: Prisma.asientoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asientoPayload>[];
                };
                create: {
                    args: Prisma.asientoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asientoPayload>;
                };
                createMany: {
                    args: Prisma.asientoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.asientoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asientoPayload>;
                };
                update: {
                    args: Prisma.asientoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asientoPayload>;
                };
                deleteMany: {
                    args: Prisma.asientoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.asientoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.asientoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asientoPayload>;
                };
                aggregate: {
                    args: Prisma.AsientoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAsiento>;
                };
                groupBy: {
                    args: Prisma.asientoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AsientoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.asientoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AsientoCountAggregateOutputType> | number;
                };
            };
        };
        asientomovimiento: {
            payload: Prisma.$asientomovimientoPayload<ExtArgs>;
            fields: Prisma.asientomovimientoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.asientomovimientoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asientomovimientoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.asientomovimientoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asientomovimientoPayload>;
                };
                findFirst: {
                    args: Prisma.asientomovimientoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asientomovimientoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.asientomovimientoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asientomovimientoPayload>;
                };
                findMany: {
                    args: Prisma.asientomovimientoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asientomovimientoPayload>[];
                };
                create: {
                    args: Prisma.asientomovimientoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asientomovimientoPayload>;
                };
                createMany: {
                    args: Prisma.asientomovimientoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.asientomovimientoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asientomovimientoPayload>;
                };
                update: {
                    args: Prisma.asientomovimientoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asientomovimientoPayload>;
                };
                deleteMany: {
                    args: Prisma.asientomovimientoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.asientomovimientoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.asientomovimientoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asientomovimientoPayload>;
                };
                aggregate: {
                    args: Prisma.AsientomovimientoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAsientomovimiento>;
                };
                groupBy: {
                    args: Prisma.asientomovimientoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AsientomovimientoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.asientomovimientoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AsientomovimientoCountAggregateOutputType> | number;
                };
            };
        };
        asistencia: {
            payload: Prisma.$asistenciaPayload<ExtArgs>;
            fields: Prisma.asistenciaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.asistenciaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asistenciaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.asistenciaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asistenciaPayload>;
                };
                findFirst: {
                    args: Prisma.asistenciaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asistenciaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.asistenciaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asistenciaPayload>;
                };
                findMany: {
                    args: Prisma.asistenciaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asistenciaPayload>[];
                };
                create: {
                    args: Prisma.asistenciaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asistenciaPayload>;
                };
                createMany: {
                    args: Prisma.asistenciaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.asistenciaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asistenciaPayload>;
                };
                update: {
                    args: Prisma.asistenciaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asistenciaPayload>;
                };
                deleteMany: {
                    args: Prisma.asistenciaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.asistenciaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.asistenciaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$asistenciaPayload>;
                };
                aggregate: {
                    args: Prisma.AsistenciaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAsistencia>;
                };
                groupBy: {
                    args: Prisma.asistenciaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AsistenciaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.asistenciaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AsistenciaCountAggregateOutputType> | number;
                };
            };
        };
        auditlog: {
            payload: Prisma.$auditlogPayload<ExtArgs>;
            fields: Prisma.auditlogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.auditlogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auditlogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.auditlogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auditlogPayload>;
                };
                findFirst: {
                    args: Prisma.auditlogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auditlogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.auditlogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auditlogPayload>;
                };
                findMany: {
                    args: Prisma.auditlogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auditlogPayload>[];
                };
                create: {
                    args: Prisma.auditlogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auditlogPayload>;
                };
                createMany: {
                    args: Prisma.auditlogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.auditlogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auditlogPayload>;
                };
                update: {
                    args: Prisma.auditlogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auditlogPayload>;
                };
                deleteMany: {
                    args: Prisma.auditlogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.auditlogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.auditlogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$auditlogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditlogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditlog>;
                };
                groupBy: {
                    args: Prisma.auditlogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditlogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.auditlogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditlogCountAggregateOutputType> | number;
                };
            };
        };
        aula: {
            payload: Prisma.$aulaPayload<ExtArgs>;
            fields: Prisma.aulaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.aulaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$aulaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.aulaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$aulaPayload>;
                };
                findFirst: {
                    args: Prisma.aulaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$aulaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.aulaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$aulaPayload>;
                };
                findMany: {
                    args: Prisma.aulaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$aulaPayload>[];
                };
                create: {
                    args: Prisma.aulaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$aulaPayload>;
                };
                createMany: {
                    args: Prisma.aulaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.aulaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$aulaPayload>;
                };
                update: {
                    args: Prisma.aulaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$aulaPayload>;
                };
                deleteMany: {
                    args: Prisma.aulaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.aulaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.aulaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$aulaPayload>;
                };
                aggregate: {
                    args: Prisma.AulaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAula>;
                };
                groupBy: {
                    args: Prisma.aulaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AulaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.aulaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AulaCountAggregateOutputType> | number;
                };
            };
        };
        centroanalitico: {
            payload: Prisma.$centroanaliticoPayload<ExtArgs>;
            fields: Prisma.centroanaliticoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.centroanaliticoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$centroanaliticoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.centroanaliticoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$centroanaliticoPayload>;
                };
                findFirst: {
                    args: Prisma.centroanaliticoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$centroanaliticoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.centroanaliticoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$centroanaliticoPayload>;
                };
                findMany: {
                    args: Prisma.centroanaliticoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$centroanaliticoPayload>[];
                };
                create: {
                    args: Prisma.centroanaliticoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$centroanaliticoPayload>;
                };
                createMany: {
                    args: Prisma.centroanaliticoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.centroanaliticoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$centroanaliticoPayload>;
                };
                update: {
                    args: Prisma.centroanaliticoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$centroanaliticoPayload>;
                };
                deleteMany: {
                    args: Prisma.centroanaliticoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.centroanaliticoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.centroanaliticoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$centroanaliticoPayload>;
                };
                aggregate: {
                    args: Prisma.CentroanaliticoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCentroanalitico>;
                };
                groupBy: {
                    args: Prisma.centroanaliticoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CentroanaliticoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.centroanaliticoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CentroanaliticoCountAggregateOutputType> | number;
                };
            };
        };
        clase: {
            payload: Prisma.$clasePayload<ExtArgs>;
            fields: Prisma.claseFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.claseFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clasePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.claseFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clasePayload>;
                };
                findFirst: {
                    args: Prisma.claseFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clasePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.claseFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clasePayload>;
                };
                findMany: {
                    args: Prisma.claseFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clasePayload>[];
                };
                create: {
                    args: Prisma.claseCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clasePayload>;
                };
                createMany: {
                    args: Prisma.claseCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.claseDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clasePayload>;
                };
                update: {
                    args: Prisma.claseUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clasePayload>;
                };
                deleteMany: {
                    args: Prisma.claseDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.claseUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.claseUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clasePayload>;
                };
                aggregate: {
                    args: Prisma.ClaseAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClase>;
                };
                groupBy: {
                    args: Prisma.claseGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClaseGroupByOutputType>[];
                };
                count: {
                    args: Prisma.claseCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClaseCountAggregateOutputType> | number;
                };
            };
        };
        cliente: {
            payload: Prisma.$clientePayload<ExtArgs>;
            fields: Prisma.clienteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.clienteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.clienteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientePayload>;
                };
                findFirst: {
                    args: Prisma.clienteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.clienteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientePayload>;
                };
                findMany: {
                    args: Prisma.clienteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientePayload>[];
                };
                create: {
                    args: Prisma.clienteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientePayload>;
                };
                createMany: {
                    args: Prisma.clienteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.clienteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientePayload>;
                };
                update: {
                    args: Prisma.clienteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientePayload>;
                };
                deleteMany: {
                    args: Prisma.clienteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.clienteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.clienteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientePayload>;
                };
                aggregate: {
                    args: Prisma.ClienteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCliente>;
                };
                groupBy: {
                    args: Prisma.clienteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClienteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.clienteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClienteCountAggregateOutputType> | number;
                };
            };
        };
        cobro: {
            payload: Prisma.$cobroPayload<ExtArgs>;
            fields: Prisma.cobroFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.cobroFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cobroPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.cobroFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cobroPayload>;
                };
                findFirst: {
                    args: Prisma.cobroFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cobroPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.cobroFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cobroPayload>;
                };
                findMany: {
                    args: Prisma.cobroFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cobroPayload>[];
                };
                create: {
                    args: Prisma.cobroCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cobroPayload>;
                };
                createMany: {
                    args: Prisma.cobroCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.cobroDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cobroPayload>;
                };
                update: {
                    args: Prisma.cobroUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cobroPayload>;
                };
                deleteMany: {
                    args: Prisma.cobroDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.cobroUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.cobroUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cobroPayload>;
                };
                aggregate: {
                    args: Prisma.CobroAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCobro>;
                };
                groupBy: {
                    args: Prisma.cobroGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CobroGroupByOutputType>[];
                };
                count: {
                    args: Prisma.cobroCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CobroCountAggregateOutputType> | number;
                };
            };
        };
        condicioncuota: {
            payload: Prisma.$condicioncuotaPayload<ExtArgs>;
            fields: Prisma.condicioncuotaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.condicioncuotaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$condicioncuotaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.condicioncuotaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$condicioncuotaPayload>;
                };
                findFirst: {
                    args: Prisma.condicioncuotaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$condicioncuotaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.condicioncuotaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$condicioncuotaPayload>;
                };
                findMany: {
                    args: Prisma.condicioncuotaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$condicioncuotaPayload>[];
                };
                create: {
                    args: Prisma.condicioncuotaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$condicioncuotaPayload>;
                };
                createMany: {
                    args: Prisma.condicioncuotaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.condicioncuotaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$condicioncuotaPayload>;
                };
                update: {
                    args: Prisma.condicioncuotaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$condicioncuotaPayload>;
                };
                deleteMany: {
                    args: Prisma.condicioncuotaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.condicioncuotaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.condicioncuotaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$condicioncuotaPayload>;
                };
                aggregate: {
                    args: Prisma.CondicioncuotaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCondicioncuota>;
                };
                groupBy: {
                    args: Prisma.condicioncuotaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CondicioncuotaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.condicioncuotaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CondicioncuotaCountAggregateOutputType> | number;
                };
            };
        };
        contratacion: {
            payload: Prisma.$contratacionPayload<ExtArgs>;
            fields: Prisma.contratacionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.contratacionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratacionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.contratacionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratacionPayload>;
                };
                findFirst: {
                    args: Prisma.contratacionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratacionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.contratacionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratacionPayload>;
                };
                findMany: {
                    args: Prisma.contratacionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratacionPayload>[];
                };
                create: {
                    args: Prisma.contratacionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratacionPayload>;
                };
                createMany: {
                    args: Prisma.contratacionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.contratacionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratacionPayload>;
                };
                update: {
                    args: Prisma.contratacionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratacionPayload>;
                };
                deleteMany: {
                    args: Prisma.contratacionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.contratacionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.contratacionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratacionPayload>;
                };
                aggregate: {
                    args: Prisma.ContratacionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContratacion>;
                };
                groupBy: {
                    args: Prisma.contratacionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContratacionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.contratacionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContratacionCountAggregateOutputType> | number;
                };
            };
        };
        contrato: {
            payload: Prisma.$contratoPayload<ExtArgs>;
            fields: Prisma.contratoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.contratoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.contratoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratoPayload>;
                };
                findFirst: {
                    args: Prisma.contratoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.contratoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratoPayload>;
                };
                findMany: {
                    args: Prisma.contratoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratoPayload>[];
                };
                create: {
                    args: Prisma.contratoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratoPayload>;
                };
                createMany: {
                    args: Prisma.contratoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.contratoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratoPayload>;
                };
                update: {
                    args: Prisma.contratoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratoPayload>;
                };
                deleteMany: {
                    args: Prisma.contratoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.contratoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.contratoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratoPayload>;
                };
                aggregate: {
                    args: Prisma.ContratoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContrato>;
                };
                groupBy: {
                    args: Prisma.contratoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContratoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.contratoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContratoCountAggregateOutputType> | number;
                };
            };
        };
        cuentacontable: {
            payload: Prisma.$cuentacontablePayload<ExtArgs>;
            fields: Prisma.cuentacontableFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.cuentacontableFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuentacontablePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.cuentacontableFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuentacontablePayload>;
                };
                findFirst: {
                    args: Prisma.cuentacontableFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuentacontablePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.cuentacontableFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuentacontablePayload>;
                };
                findMany: {
                    args: Prisma.cuentacontableFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuentacontablePayload>[];
                };
                create: {
                    args: Prisma.cuentacontableCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuentacontablePayload>;
                };
                createMany: {
                    args: Prisma.cuentacontableCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.cuentacontableDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuentacontablePayload>;
                };
                update: {
                    args: Prisma.cuentacontableUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuentacontablePayload>;
                };
                deleteMany: {
                    args: Prisma.cuentacontableDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.cuentacontableUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.cuentacontableUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuentacontablePayload>;
                };
                aggregate: {
                    args: Prisma.CuentacontableAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCuentacontable>;
                };
                groupBy: {
                    args: Prisma.cuentacontableGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CuentacontableGroupByOutputType>[];
                };
                count: {
                    args: Prisma.cuentacontableCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CuentacontableCountAggregateOutputType> | number;
                };
            };
        };
        cuentafinanciera: {
            payload: Prisma.$cuentafinancieraPayload<ExtArgs>;
            fields: Prisma.cuentafinancieraFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.cuentafinancieraFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuentafinancieraPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.cuentafinancieraFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuentafinancieraPayload>;
                };
                findFirst: {
                    args: Prisma.cuentafinancieraFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuentafinancieraPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.cuentafinancieraFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuentafinancieraPayload>;
                };
                findMany: {
                    args: Prisma.cuentafinancieraFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuentafinancieraPayload>[];
                };
                create: {
                    args: Prisma.cuentafinancieraCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuentafinancieraPayload>;
                };
                createMany: {
                    args: Prisma.cuentafinancieraCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.cuentafinancieraDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuentafinancieraPayload>;
                };
                update: {
                    args: Prisma.cuentafinancieraUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuentafinancieraPayload>;
                };
                deleteMany: {
                    args: Prisma.cuentafinancieraDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.cuentafinancieraUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.cuentafinancieraUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuentafinancieraPayload>;
                };
                aggregate: {
                    args: Prisma.CuentafinancieraAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCuentafinanciera>;
                };
                groupBy: {
                    args: Prisma.cuentafinancieraGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CuentafinancieraGroupByOutputType>[];
                };
                count: {
                    args: Prisma.cuentafinancieraCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CuentafinancieraCountAggregateOutputType> | number;
                };
            };
        };
        cuota: {
            payload: Prisma.$cuotaPayload<ExtArgs>;
            fields: Prisma.cuotaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.cuotaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuotaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.cuotaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuotaPayload>;
                };
                findFirst: {
                    args: Prisma.cuotaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuotaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.cuotaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuotaPayload>;
                };
                findMany: {
                    args: Prisma.cuotaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuotaPayload>[];
                };
                create: {
                    args: Prisma.cuotaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuotaPayload>;
                };
                createMany: {
                    args: Prisma.cuotaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.cuotaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuotaPayload>;
                };
                update: {
                    args: Prisma.cuotaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuotaPayload>;
                };
                deleteMany: {
                    args: Prisma.cuotaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.cuotaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.cuotaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cuotaPayload>;
                };
                aggregate: {
                    args: Prisma.CuotaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCuota>;
                };
                groupBy: {
                    args: Prisma.cuotaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CuotaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.cuotaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CuotaCountAggregateOutputType> | number;
                };
            };
        };
        derechocobro: {
            payload: Prisma.$derechocobroPayload<ExtArgs>;
            fields: Prisma.derechocobroFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.derechocobroFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$derechocobroPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.derechocobroFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$derechocobroPayload>;
                };
                findFirst: {
                    args: Prisma.derechocobroFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$derechocobroPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.derechocobroFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$derechocobroPayload>;
                };
                findMany: {
                    args: Prisma.derechocobroFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$derechocobroPayload>[];
                };
                create: {
                    args: Prisma.derechocobroCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$derechocobroPayload>;
                };
                createMany: {
                    args: Prisma.derechocobroCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.derechocobroDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$derechocobroPayload>;
                };
                update: {
                    args: Prisma.derechocobroUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$derechocobroPayload>;
                };
                deleteMany: {
                    args: Prisma.derechocobroDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.derechocobroUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.derechocobroUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$derechocobroPayload>;
                };
                aggregate: {
                    args: Prisma.DerechocobroAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDerechocobro>;
                };
                groupBy: {
                    args: Prisma.derechocobroGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DerechocobroGroupByOutputType>[];
                };
                count: {
                    args: Prisma.derechocobroCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DerechocobroCountAggregateOutputType> | number;
                };
            };
        };
        director: {
            payload: Prisma.$directorPayload<ExtArgs>;
            fields: Prisma.directorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.directorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$directorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.directorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$directorPayload>;
                };
                findFirst: {
                    args: Prisma.directorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$directorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.directorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$directorPayload>;
                };
                findMany: {
                    args: Prisma.directorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$directorPayload>[];
                };
                create: {
                    args: Prisma.directorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$directorPayload>;
                };
                createMany: {
                    args: Prisma.directorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.directorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$directorPayload>;
                };
                update: {
                    args: Prisma.directorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$directorPayload>;
                };
                deleteMany: {
                    args: Prisma.directorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.directorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.directorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$directorPayload>;
                };
                aggregate: {
                    args: Prisma.DirectorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDirector>;
                };
                groupBy: {
                    args: Prisma.directorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DirectorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.directorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DirectorCountAggregateOutputType> | number;
                };
            };
        };
        ejercicio: {
            payload: Prisma.$ejercicioPayload<ExtArgs>;
            fields: Prisma.ejercicioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ejercicioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ejercicioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ejercicioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ejercicioPayload>;
                };
                findFirst: {
                    args: Prisma.ejercicioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ejercicioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ejercicioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ejercicioPayload>;
                };
                findMany: {
                    args: Prisma.ejercicioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ejercicioPayload>[];
                };
                create: {
                    args: Prisma.ejercicioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ejercicioPayload>;
                };
                createMany: {
                    args: Prisma.ejercicioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.ejercicioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ejercicioPayload>;
                };
                update: {
                    args: Prisma.ejercicioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ejercicioPayload>;
                };
                deleteMany: {
                    args: Prisma.ejercicioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ejercicioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.ejercicioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ejercicioPayload>;
                };
                aggregate: {
                    args: Prisma.EjercicioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEjercicio>;
                };
                groupBy: {
                    args: Prisma.ejercicioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EjercicioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ejercicioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EjercicioCountAggregateOutputType> | number;
                };
            };
        };
        facturacliente: {
            payload: Prisma.$facturaclientePayload<ExtArgs>;
            fields: Prisma.facturaclienteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.facturaclienteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaclientePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.facturaclienteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaclientePayload>;
                };
                findFirst: {
                    args: Prisma.facturaclienteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaclientePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.facturaclienteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaclientePayload>;
                };
                findMany: {
                    args: Prisma.facturaclienteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaclientePayload>[];
                };
                create: {
                    args: Prisma.facturaclienteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaclientePayload>;
                };
                createMany: {
                    args: Prisma.facturaclienteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.facturaclienteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaclientePayload>;
                };
                update: {
                    args: Prisma.facturaclienteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaclientePayload>;
                };
                deleteMany: {
                    args: Prisma.facturaclienteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.facturaclienteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.facturaclienteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaclientePayload>;
                };
                aggregate: {
                    args: Prisma.FacturaclienteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFacturacliente>;
                };
                groupBy: {
                    args: Prisma.facturaclienteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FacturaclienteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.facturaclienteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FacturaclienteCountAggregateOutputType> | number;
                };
            };
        };
        facturaproveedor: {
            payload: Prisma.$facturaproveedorPayload<ExtArgs>;
            fields: Prisma.facturaproveedorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.facturaproveedorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaproveedorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.facturaproveedorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaproveedorPayload>;
                };
                findFirst: {
                    args: Prisma.facturaproveedorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaproveedorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.facturaproveedorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaproveedorPayload>;
                };
                findMany: {
                    args: Prisma.facturaproveedorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaproveedorPayload>[];
                };
                create: {
                    args: Prisma.facturaproveedorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaproveedorPayload>;
                };
                createMany: {
                    args: Prisma.facturaproveedorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.facturaproveedorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaproveedorPayload>;
                };
                update: {
                    args: Prisma.facturaproveedorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaproveedorPayload>;
                };
                deleteMany: {
                    args: Prisma.facturaproveedorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.facturaproveedorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.facturaproveedorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaproveedorPayload>;
                };
                aggregate: {
                    args: Prisma.FacturaproveedorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFacturaproveedor>;
                };
                groupBy: {
                    args: Prisma.facturaproveedorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FacturaproveedorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.facturaproveedorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FacturaproveedorCountAggregateOutputType> | number;
                };
            };
        };
        facturarectificativacliente: {
            payload: Prisma.$facturarectificativaclientePayload<ExtArgs>;
            fields: Prisma.facturarectificativaclienteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.facturarectificativaclienteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturarectificativaclientePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.facturarectificativaclienteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturarectificativaclientePayload>;
                };
                findFirst: {
                    args: Prisma.facturarectificativaclienteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturarectificativaclientePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.facturarectificativaclienteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturarectificativaclientePayload>;
                };
                findMany: {
                    args: Prisma.facturarectificativaclienteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturarectificativaclientePayload>[];
                };
                create: {
                    args: Prisma.facturarectificativaclienteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturarectificativaclientePayload>;
                };
                createMany: {
                    args: Prisma.facturarectificativaclienteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.facturarectificativaclienteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturarectificativaclientePayload>;
                };
                update: {
                    args: Prisma.facturarectificativaclienteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturarectificativaclientePayload>;
                };
                deleteMany: {
                    args: Prisma.facturarectificativaclienteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.facturarectificativaclienteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.facturarectificativaclienteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturarectificativaclientePayload>;
                };
                aggregate: {
                    args: Prisma.FacturarectificativaclienteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFacturarectificativacliente>;
                };
                groupBy: {
                    args: Prisma.facturarectificativaclienteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FacturarectificativaclienteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.facturarectificativaclienteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FacturarectificativaclienteCountAggregateOutputType> | number;
                };
            };
        };
        facturarectificativaproveedor: {
            payload: Prisma.$facturarectificativaproveedorPayload<ExtArgs>;
            fields: Prisma.facturarectificativaproveedorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.facturarectificativaproveedorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturarectificativaproveedorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.facturarectificativaproveedorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturarectificativaproveedorPayload>;
                };
                findFirst: {
                    args: Prisma.facturarectificativaproveedorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturarectificativaproveedorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.facturarectificativaproveedorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturarectificativaproveedorPayload>;
                };
                findMany: {
                    args: Prisma.facturarectificativaproveedorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturarectificativaproveedorPayload>[];
                };
                create: {
                    args: Prisma.facturarectificativaproveedorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturarectificativaproveedorPayload>;
                };
                createMany: {
                    args: Prisma.facturarectificativaproveedorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.facturarectificativaproveedorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturarectificativaproveedorPayload>;
                };
                update: {
                    args: Prisma.facturarectificativaproveedorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturarectificativaproveedorPayload>;
                };
                deleteMany: {
                    args: Prisma.facturarectificativaproveedorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.facturarectificativaproveedorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.facturarectificativaproveedorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturarectificativaproveedorPayload>;
                };
                aggregate: {
                    args: Prisma.FacturarectificativaproveedorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFacturarectificativaproveedor>;
                };
                groupBy: {
                    args: Prisma.facturarectificativaproveedorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FacturarectificativaproveedorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.facturarectificativaproveedorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FacturarectificativaproveedorCountAggregateOutputType> | number;
                };
            };
        };
        familia: {
            payload: Prisma.$familiaPayload<ExtArgs>;
            fields: Prisma.familiaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.familiaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$familiaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.familiaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$familiaPayload>;
                };
                findFirst: {
                    args: Prisma.familiaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$familiaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.familiaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$familiaPayload>;
                };
                findMany: {
                    args: Prisma.familiaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$familiaPayload>[];
                };
                create: {
                    args: Prisma.familiaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$familiaPayload>;
                };
                createMany: {
                    args: Prisma.familiaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.familiaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$familiaPayload>;
                };
                update: {
                    args: Prisma.familiaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$familiaPayload>;
                };
                deleteMany: {
                    args: Prisma.familiaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.familiaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.familiaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$familiaPayload>;
                };
                aggregate: {
                    args: Prisma.FamiliaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFamilia>;
                };
                groupBy: {
                    args: Prisma.familiaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FamiliaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.familiaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FamiliaCountAggregateOutputType> | number;
                };
            };
        };
        seccion: {
            payload: Prisma.$seccionPayload<ExtArgs>;
            fields: Prisma.seccionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.seccionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$seccionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.seccionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$seccionPayload>;
                };
                findFirst: {
                    args: Prisma.seccionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$seccionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.seccionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$seccionPayload>;
                };
                findMany: {
                    args: Prisma.seccionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$seccionPayload>[];
                };
                create: {
                    args: Prisma.seccionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$seccionPayload>;
                };
                createMany: {
                    args: Prisma.seccionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.seccionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$seccionPayload>;
                };
                update: {
                    args: Prisma.seccionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$seccionPayload>;
                };
                deleteMany: {
                    args: Prisma.seccionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.seccionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.seccionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$seccionPayload>;
                };
                aggregate: {
                    args: Prisma.SeccionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSeccion>;
                };
                groupBy: {
                    args: Prisma.seccionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SeccionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.seccionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SeccionCountAggregateOutputType> | number;
                };
            };
        };
        instrumento: {
            payload: Prisma.$instrumentoPayload<ExtArgs>;
            fields: Prisma.instrumentoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.instrumentoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$instrumentoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.instrumentoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$instrumentoPayload>;
                };
                findFirst: {
                    args: Prisma.instrumentoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$instrumentoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.instrumentoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$instrumentoPayload>;
                };
                findMany: {
                    args: Prisma.instrumentoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$instrumentoPayload>[];
                };
                create: {
                    args: Prisma.instrumentoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$instrumentoPayload>;
                };
                createMany: {
                    args: Prisma.instrumentoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.instrumentoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$instrumentoPayload>;
                };
                update: {
                    args: Prisma.instrumentoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$instrumentoPayload>;
                };
                deleteMany: {
                    args: Prisma.instrumentoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.instrumentoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.instrumentoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$instrumentoPayload>;
                };
                aggregate: {
                    args: Prisma.InstrumentoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInstrumento>;
                };
                groupBy: {
                    args: Prisma.instrumentoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InstrumentoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.instrumentoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InstrumentoCountAggregateOutputType> | number;
                };
            };
        };
        integracionnextcloud: {
            payload: Prisma.$integracionnextcloudPayload<ExtArgs>;
            fields: Prisma.integracionnextcloudFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.integracionnextcloudFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$integracionnextcloudPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.integracionnextcloudFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$integracionnextcloudPayload>;
                };
                findFirst: {
                    args: Prisma.integracionnextcloudFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$integracionnextcloudPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.integracionnextcloudFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$integracionnextcloudPayload>;
                };
                findMany: {
                    args: Prisma.integracionnextcloudFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$integracionnextcloudPayload>[];
                };
                create: {
                    args: Prisma.integracionnextcloudCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$integracionnextcloudPayload>;
                };
                createMany: {
                    args: Prisma.integracionnextcloudCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.integracionnextcloudDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$integracionnextcloudPayload>;
                };
                update: {
                    args: Prisma.integracionnextcloudUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$integracionnextcloudPayload>;
                };
                deleteMany: {
                    args: Prisma.integracionnextcloudDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.integracionnextcloudUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.integracionnextcloudUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$integracionnextcloudPayload>;
                };
                aggregate: {
                    args: Prisma.IntegracionnextcloudAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIntegracionnextcloud>;
                };
                groupBy: {
                    args: Prisma.integracionnextcloudGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IntegracionnextcloudGroupByOutputType>[];
                };
                count: {
                    args: Prisma.integracionnextcloudCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IntegracionnextcloudCountAggregateOutputType> | number;
                };
            };
        };
        lineaasiento: {
            payload: Prisma.$lineaasientoPayload<ExtArgs>;
            fields: Prisma.lineaasientoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.lineaasientoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lineaasientoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.lineaasientoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lineaasientoPayload>;
                };
                findFirst: {
                    args: Prisma.lineaasientoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lineaasientoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.lineaasientoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lineaasientoPayload>;
                };
                findMany: {
                    args: Prisma.lineaasientoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lineaasientoPayload>[];
                };
                create: {
                    args: Prisma.lineaasientoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lineaasientoPayload>;
                };
                createMany: {
                    args: Prisma.lineaasientoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.lineaasientoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lineaasientoPayload>;
                };
                update: {
                    args: Prisma.lineaasientoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lineaasientoPayload>;
                };
                deleteMany: {
                    args: Prisma.lineaasientoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.lineaasientoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.lineaasientoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lineaasientoPayload>;
                };
                aggregate: {
                    args: Prisma.LineaasientoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLineaasiento>;
                };
                groupBy: {
                    args: Prisma.lineaasientoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LineaasientoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.lineaasientoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LineaasientoCountAggregateOutputType> | number;
                };
            };
        };
        lineanomina: {
            payload: Prisma.$lineanominaPayload<ExtArgs>;
            fields: Prisma.lineanominaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.lineanominaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lineanominaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.lineanominaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lineanominaPayload>;
                };
                findFirst: {
                    args: Prisma.lineanominaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lineanominaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.lineanominaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lineanominaPayload>;
                };
                findMany: {
                    args: Prisma.lineanominaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lineanominaPayload>[];
                };
                create: {
                    args: Prisma.lineanominaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lineanominaPayload>;
                };
                createMany: {
                    args: Prisma.lineanominaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.lineanominaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lineanominaPayload>;
                };
                update: {
                    args: Prisma.lineanominaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lineanominaPayload>;
                };
                deleteMany: {
                    args: Prisma.lineanominaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.lineanominaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.lineanominaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lineanominaPayload>;
                };
                aggregate: {
                    args: Prisma.LineanominaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLineanomina>;
                };
                groupBy: {
                    args: Prisma.lineanominaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LineanominaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.lineanominaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LineanominaCountAggregateOutputType> | number;
                };
            };
        };
        lineareparto: {
            payload: Prisma.$linearepartoPayload<ExtArgs>;
            fields: Prisma.linearepartoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.linearepartoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$linearepartoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.linearepartoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$linearepartoPayload>;
                };
                findFirst: {
                    args: Prisma.linearepartoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$linearepartoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.linearepartoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$linearepartoPayload>;
                };
                findMany: {
                    args: Prisma.linearepartoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$linearepartoPayload>[];
                };
                create: {
                    args: Prisma.linearepartoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$linearepartoPayload>;
                };
                createMany: {
                    args: Prisma.linearepartoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.linearepartoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$linearepartoPayload>;
                };
                update: {
                    args: Prisma.linearepartoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$linearepartoPayload>;
                };
                deleteMany: {
                    args: Prisma.linearepartoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.linearepartoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.linearepartoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$linearepartoPayload>;
                };
                aggregate: {
                    args: Prisma.LinearepartoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLineareparto>;
                };
                groupBy: {
                    args: Prisma.linearepartoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LinearepartoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.linearepartoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LinearepartoCountAggregateOutputType> | number;
                };
            };
        };
        liquidacioncobro: {
            payload: Prisma.$liquidacioncobroPayload<ExtArgs>;
            fields: Prisma.liquidacioncobroFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.liquidacioncobroFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$liquidacioncobroPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.liquidacioncobroFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$liquidacioncobroPayload>;
                };
                findFirst: {
                    args: Prisma.liquidacioncobroFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$liquidacioncobroPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.liquidacioncobroFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$liquidacioncobroPayload>;
                };
                findMany: {
                    args: Prisma.liquidacioncobroFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$liquidacioncobroPayload>[];
                };
                create: {
                    args: Prisma.liquidacioncobroCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$liquidacioncobroPayload>;
                };
                createMany: {
                    args: Prisma.liquidacioncobroCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.liquidacioncobroDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$liquidacioncobroPayload>;
                };
                update: {
                    args: Prisma.liquidacioncobroUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$liquidacioncobroPayload>;
                };
                deleteMany: {
                    args: Prisma.liquidacioncobroDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.liquidacioncobroUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.liquidacioncobroUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$liquidacioncobroPayload>;
                };
                aggregate: {
                    args: Prisma.LiquidacioncobroAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLiquidacioncobro>;
                };
                groupBy: {
                    args: Prisma.liquidacioncobroGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LiquidacioncobroGroupByOutputType>[];
                };
                count: {
                    args: Prisma.liquidacioncobroCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LiquidacioncobroCountAggregateOutputType> | number;
                };
            };
        };
        liquidacionpago: {
            payload: Prisma.$liquidacionpagoPayload<ExtArgs>;
            fields: Prisma.liquidacionpagoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.liquidacionpagoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$liquidacionpagoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.liquidacionpagoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$liquidacionpagoPayload>;
                };
                findFirst: {
                    args: Prisma.liquidacionpagoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$liquidacionpagoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.liquidacionpagoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$liquidacionpagoPayload>;
                };
                findMany: {
                    args: Prisma.liquidacionpagoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$liquidacionpagoPayload>[];
                };
                create: {
                    args: Prisma.liquidacionpagoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$liquidacionpagoPayload>;
                };
                createMany: {
                    args: Prisma.liquidacionpagoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.liquidacionpagoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$liquidacionpagoPayload>;
                };
                update: {
                    args: Prisma.liquidacionpagoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$liquidacionpagoPayload>;
                };
                deleteMany: {
                    args: Prisma.liquidacionpagoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.liquidacionpagoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.liquidacionpagoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$liquidacionpagoPayload>;
                };
                aggregate: {
                    args: Prisma.LiquidacionpagoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLiquidacionpago>;
                };
                groupBy: {
                    args: Prisma.liquidacionpagoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LiquidacionpagoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.liquidacionpagoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LiquidacionpagoCountAggregateOutputType> | number;
                };
            };
        };
        materia: {
            payload: Prisma.$materiaPayload<ExtArgs>;
            fields: Prisma.materiaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.materiaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$materiaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.materiaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$materiaPayload>;
                };
                findFirst: {
                    args: Prisma.materiaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$materiaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.materiaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$materiaPayload>;
                };
                findMany: {
                    args: Prisma.materiaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$materiaPayload>[];
                };
                create: {
                    args: Prisma.materiaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$materiaPayload>;
                };
                createMany: {
                    args: Prisma.materiaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.materiaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$materiaPayload>;
                };
                update: {
                    args: Prisma.materiaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$materiaPayload>;
                };
                deleteMany: {
                    args: Prisma.materiaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.materiaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.materiaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$materiaPayload>;
                };
                aggregate: {
                    args: Prisma.MateriaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMateria>;
                };
                groupBy: {
                    args: Prisma.materiaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MateriaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.materiaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MateriaCountAggregateOutputType> | number;
                };
            };
        };
        movimientofinanciero: {
            payload: Prisma.$movimientofinancieroPayload<ExtArgs>;
            fields: Prisma.movimientofinancieroFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.movimientofinancieroFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$movimientofinancieroPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.movimientofinancieroFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$movimientofinancieroPayload>;
                };
                findFirst: {
                    args: Prisma.movimientofinancieroFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$movimientofinancieroPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.movimientofinancieroFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$movimientofinancieroPayload>;
                };
                findMany: {
                    args: Prisma.movimientofinancieroFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$movimientofinancieroPayload>[];
                };
                create: {
                    args: Prisma.movimientofinancieroCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$movimientofinancieroPayload>;
                };
                createMany: {
                    args: Prisma.movimientofinancieroCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.movimientofinancieroDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$movimientofinancieroPayload>;
                };
                update: {
                    args: Prisma.movimientofinancieroUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$movimientofinancieroPayload>;
                };
                deleteMany: {
                    args: Prisma.movimientofinancieroDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.movimientofinancieroUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.movimientofinancieroUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$movimientofinancieroPayload>;
                };
                aggregate: {
                    args: Prisma.MovimientofinancieroAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMovimientofinanciero>;
                };
                groupBy: {
                    args: Prisma.movimientofinancieroGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MovimientofinancieroGroupByOutputType>[];
                };
                count: {
                    args: Prisma.movimientofinancieroCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MovimientofinancieroCountAggregateOutputType> | number;
                };
            };
        };
        musico: {
            payload: Prisma.$musicoPayload<ExtArgs>;
            fields: Prisma.musicoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.musicoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$musicoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.musicoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$musicoPayload>;
                };
                findFirst: {
                    args: Prisma.musicoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$musicoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.musicoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$musicoPayload>;
                };
                findMany: {
                    args: Prisma.musicoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$musicoPayload>[];
                };
                create: {
                    args: Prisma.musicoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$musicoPayload>;
                };
                createMany: {
                    args: Prisma.musicoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.musicoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$musicoPayload>;
                };
                update: {
                    args: Prisma.musicoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$musicoPayload>;
                };
                deleteMany: {
                    args: Prisma.musicoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.musicoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.musicoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$musicoPayload>;
                };
                aggregate: {
                    args: Prisma.MusicoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMusico>;
                };
                groupBy: {
                    args: Prisma.musicoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MusicoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.musicoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MusicoCountAggregateOutputType> | number;
                };
            };
        };
        nomina: {
            payload: Prisma.$nominaPayload<ExtArgs>;
            fields: Prisma.nominaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.nominaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$nominaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.nominaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$nominaPayload>;
                };
                findFirst: {
                    args: Prisma.nominaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$nominaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.nominaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$nominaPayload>;
                };
                findMany: {
                    args: Prisma.nominaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$nominaPayload>[];
                };
                create: {
                    args: Prisma.nominaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$nominaPayload>;
                };
                createMany: {
                    args: Prisma.nominaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.nominaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$nominaPayload>;
                };
                update: {
                    args: Prisma.nominaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$nominaPayload>;
                };
                deleteMany: {
                    args: Prisma.nominaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.nominaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.nominaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$nominaPayload>;
                };
                aggregate: {
                    args: Prisma.NominaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNomina>;
                };
                groupBy: {
                    args: Prisma.nominaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NominaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.nominaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NominaCountAggregateOutputType> | number;
                };
            };
        };
        obligacioneconomica: {
            payload: Prisma.$obligacioneconomicaPayload<ExtArgs>;
            fields: Prisma.obligacioneconomicaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.obligacioneconomicaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$obligacioneconomicaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.obligacioneconomicaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$obligacioneconomicaPayload>;
                };
                findFirst: {
                    args: Prisma.obligacioneconomicaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$obligacioneconomicaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.obligacioneconomicaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$obligacioneconomicaPayload>;
                };
                findMany: {
                    args: Prisma.obligacioneconomicaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$obligacioneconomicaPayload>[];
                };
                create: {
                    args: Prisma.obligacioneconomicaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$obligacioneconomicaPayload>;
                };
                createMany: {
                    args: Prisma.obligacioneconomicaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.obligacioneconomicaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$obligacioneconomicaPayload>;
                };
                update: {
                    args: Prisma.obligacioneconomicaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$obligacioneconomicaPayload>;
                };
                deleteMany: {
                    args: Prisma.obligacioneconomicaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.obligacioneconomicaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.obligacioneconomicaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$obligacioneconomicaPayload>;
                };
                aggregate: {
                    args: Prisma.ObligacioneconomicaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateObligacioneconomica>;
                };
                groupBy: {
                    args: Prisma.obligacioneconomicaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ObligacioneconomicaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.obligacioneconomicaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ObligacioneconomicaCountAggregateOutputType> | number;
                };
            };
        };
        pago: {
            payload: Prisma.$pagoPayload<ExtArgs>;
            fields: Prisma.pagoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.pagoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.pagoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagoPayload>;
                };
                findFirst: {
                    args: Prisma.pagoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.pagoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagoPayload>;
                };
                findMany: {
                    args: Prisma.pagoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagoPayload>[];
                };
                create: {
                    args: Prisma.pagoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagoPayload>;
                };
                createMany: {
                    args: Prisma.pagoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.pagoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagoPayload>;
                };
                update: {
                    args: Prisma.pagoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagoPayload>;
                };
                deleteMany: {
                    args: Prisma.pagoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.pagoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.pagoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagoPayload>;
                };
                aggregate: {
                    args: Prisma.PagoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePago>;
                };
                groupBy: {
                    args: Prisma.pagoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PagoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.pagoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PagoCountAggregateOutputType> | number;
                };
            };
        };
        parametrosistema: {
            payload: Prisma.$parametrosistemaPayload<ExtArgs>;
            fields: Prisma.parametrosistemaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.parametrosistemaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$parametrosistemaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.parametrosistemaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$parametrosistemaPayload>;
                };
                findFirst: {
                    args: Prisma.parametrosistemaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$parametrosistemaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.parametrosistemaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$parametrosistemaPayload>;
                };
                findMany: {
                    args: Prisma.parametrosistemaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$parametrosistemaPayload>[];
                };
                create: {
                    args: Prisma.parametrosistemaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$parametrosistemaPayload>;
                };
                createMany: {
                    args: Prisma.parametrosistemaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.parametrosistemaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$parametrosistemaPayload>;
                };
                update: {
                    args: Prisma.parametrosistemaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$parametrosistemaPayload>;
                };
                deleteMany: {
                    args: Prisma.parametrosistemaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.parametrosistemaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.parametrosistemaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$parametrosistemaPayload>;
                };
                aggregate: {
                    args: Prisma.ParametrosistemaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateParametrosistema>;
                };
                groupBy: {
                    args: Prisma.parametrosistemaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParametrosistemaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.parametrosistemaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ParametrosistemaCountAggregateOutputType> | number;
                };
            };
        };
        periodocontable: {
            payload: Prisma.$periodocontablePayload<ExtArgs>;
            fields: Prisma.periodocontableFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.periodocontableFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$periodocontablePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.periodocontableFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$periodocontablePayload>;
                };
                findFirst: {
                    args: Prisma.periodocontableFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$periodocontablePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.periodocontableFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$periodocontablePayload>;
                };
                findMany: {
                    args: Prisma.periodocontableFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$periodocontablePayload>[];
                };
                create: {
                    args: Prisma.periodocontableCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$periodocontablePayload>;
                };
                createMany: {
                    args: Prisma.periodocontableCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.periodocontableDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$periodocontablePayload>;
                };
                update: {
                    args: Prisma.periodocontableUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$periodocontablePayload>;
                };
                deleteMany: {
                    args: Prisma.periodocontableDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.periodocontableUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.periodocontableUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$periodocontablePayload>;
                };
                aggregate: {
                    args: Prisma.PeriodocontableAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePeriodocontable>;
                };
                groupBy: {
                    args: Prisma.periodocontableGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PeriodocontableGroupByOutputType>[];
                };
                count: {
                    args: Prisma.periodocontableCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PeriodocontableCountAggregateOutputType> | number;
                };
            };
        };
        persona: {
            payload: Prisma.$personaPayload<ExtArgs>;
            fields: Prisma.personaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.personaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.personaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personaPayload>;
                };
                findFirst: {
                    args: Prisma.personaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.personaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personaPayload>;
                };
                findMany: {
                    args: Prisma.personaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personaPayload>[];
                };
                create: {
                    args: Prisma.personaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personaPayload>;
                };
                createMany: {
                    args: Prisma.personaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.personaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personaPayload>;
                };
                update: {
                    args: Prisma.personaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personaPayload>;
                };
                deleteMany: {
                    args: Prisma.personaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.personaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.personaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personaPayload>;
                };
                aggregate: {
                    args: Prisma.PersonaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePersona>;
                };
                groupBy: {
                    args: Prisma.personaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PersonaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.personaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PersonaCountAggregateOutputType> | number;
                };
            };
        };
        personaagrupacion: {
            payload: Prisma.$personaagrupacionPayload<ExtArgs>;
            fields: Prisma.personaagrupacionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.personaagrupacionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personaagrupacionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.personaagrupacionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personaagrupacionPayload>;
                };
                findFirst: {
                    args: Prisma.personaagrupacionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personaagrupacionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.personaagrupacionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personaagrupacionPayload>;
                };
                findMany: {
                    args: Prisma.personaagrupacionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personaagrupacionPayload>[];
                };
                create: {
                    args: Prisma.personaagrupacionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personaagrupacionPayload>;
                };
                createMany: {
                    args: Prisma.personaagrupacionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.personaagrupacionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personaagrupacionPayload>;
                };
                update: {
                    args: Prisma.personaagrupacionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personaagrupacionPayload>;
                };
                deleteMany: {
                    args: Prisma.personaagrupacionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.personaagrupacionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.personaagrupacionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personaagrupacionPayload>;
                };
                aggregate: {
                    args: Prisma.PersonaagrupacionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePersonaagrupacion>;
                };
                groupBy: {
                    args: Prisma.personaagrupacionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PersonaagrupacionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.personaagrupacionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PersonaagrupacionCountAggregateOutputType> | number;
                };
            };
        };
        personainstrumento: {
            payload: Prisma.$personainstrumentoPayload<ExtArgs>;
            fields: Prisma.personainstrumentoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.personainstrumentoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personainstrumentoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.personainstrumentoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personainstrumentoPayload>;
                };
                findFirst: {
                    args: Prisma.personainstrumentoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personainstrumentoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.personainstrumentoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personainstrumentoPayload>;
                };
                findMany: {
                    args: Prisma.personainstrumentoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personainstrumentoPayload>[];
                };
                create: {
                    args: Prisma.personainstrumentoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personainstrumentoPayload>;
                };
                createMany: {
                    args: Prisma.personainstrumentoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.personainstrumentoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personainstrumentoPayload>;
                };
                update: {
                    args: Prisma.personainstrumentoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personainstrumentoPayload>;
                };
                deleteMany: {
                    args: Prisma.personainstrumentoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.personainstrumentoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.personainstrumentoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personainstrumentoPayload>;
                };
                aggregate: {
                    args: Prisma.PersonainstrumentoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePersonainstrumento>;
                };
                groupBy: {
                    args: Prisma.personainstrumentoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PersonainstrumentoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.personainstrumentoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PersonainstrumentoCountAggregateOutputType> | number;
                };
            };
        };
        personarolfuncional: {
            payload: Prisma.$personarolfuncionalPayload<ExtArgs>;
            fields: Prisma.personarolfuncionalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.personarolfuncionalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personarolfuncionalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.personarolfuncionalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personarolfuncionalPayload>;
                };
                findFirst: {
                    args: Prisma.personarolfuncionalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personarolfuncionalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.personarolfuncionalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personarolfuncionalPayload>;
                };
                findMany: {
                    args: Prisma.personarolfuncionalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personarolfuncionalPayload>[];
                };
                create: {
                    args: Prisma.personarolfuncionalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personarolfuncionalPayload>;
                };
                createMany: {
                    args: Prisma.personarolfuncionalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.personarolfuncionalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personarolfuncionalPayload>;
                };
                update: {
                    args: Prisma.personarolfuncionalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personarolfuncionalPayload>;
                };
                deleteMany: {
                    args: Prisma.personarolfuncionalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.personarolfuncionalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.personarolfuncionalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$personarolfuncionalPayload>;
                };
                aggregate: {
                    args: Prisma.PersonarolfuncionalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePersonarolfuncional>;
                };
                groupBy: {
                    args: Prisma.personarolfuncionalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PersonarolfuncionalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.personarolfuncionalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PersonarolfuncionalCountAggregateOutputType> | number;
                };
            };
        };
        profesor: {
            payload: Prisma.$profesorPayload<ExtArgs>;
            fields: Prisma.profesorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.profesorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$profesorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.profesorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$profesorPayload>;
                };
                findFirst: {
                    args: Prisma.profesorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$profesorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.profesorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$profesorPayload>;
                };
                findMany: {
                    args: Prisma.profesorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$profesorPayload>[];
                };
                create: {
                    args: Prisma.profesorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$profesorPayload>;
                };
                createMany: {
                    args: Prisma.profesorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.profesorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$profesorPayload>;
                };
                update: {
                    args: Prisma.profesorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$profesorPayload>;
                };
                deleteMany: {
                    args: Prisma.profesorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.profesorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.profesorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$profesorPayload>;
                };
                aggregate: {
                    args: Prisma.ProfesorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProfesor>;
                };
                groupBy: {
                    args: Prisma.profesorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfesorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.profesorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfesorCountAggregateOutputType> | number;
                };
            };
        };
        proveedor: {
            payload: Prisma.$proveedorPayload<ExtArgs>;
            fields: Prisma.proveedorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.proveedorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$proveedorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.proveedorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$proveedorPayload>;
                };
                findFirst: {
                    args: Prisma.proveedorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$proveedorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.proveedorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$proveedorPayload>;
                };
                findMany: {
                    args: Prisma.proveedorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$proveedorPayload>[];
                };
                create: {
                    args: Prisma.proveedorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$proveedorPayload>;
                };
                createMany: {
                    args: Prisma.proveedorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.proveedorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$proveedorPayload>;
                };
                update: {
                    args: Prisma.proveedorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$proveedorPayload>;
                };
                deleteMany: {
                    args: Prisma.proveedorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.proveedorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.proveedorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$proveedorPayload>;
                };
                aggregate: {
                    args: Prisma.ProveedorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProveedor>;
                };
                groupBy: {
                    args: Prisma.proveedorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProveedorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.proveedorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProveedorCountAggregateOutputType> | number;
                };
            };
        };
        remesa: {
            payload: Prisma.$remesaPayload<ExtArgs>;
            fields: Prisma.remesaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.remesaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$remesaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.remesaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$remesaPayload>;
                };
                findFirst: {
                    args: Prisma.remesaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$remesaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.remesaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$remesaPayload>;
                };
                findMany: {
                    args: Prisma.remesaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$remesaPayload>[];
                };
                create: {
                    args: Prisma.remesaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$remesaPayload>;
                };
                createMany: {
                    args: Prisma.remesaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.remesaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$remesaPayload>;
                };
                update: {
                    args: Prisma.remesaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$remesaPayload>;
                };
                deleteMany: {
                    args: Prisma.remesaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.remesaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.remesaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$remesaPayload>;
                };
                aggregate: {
                    args: Prisma.RemesaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRemesa>;
                };
                groupBy: {
                    args: Prisma.remesaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RemesaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.remesaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RemesaCountAggregateOutputType> | number;
                };
            };
        };
        remesacuota: {
            payload: Prisma.$remesacuotaPayload<ExtArgs>;
            fields: Prisma.remesacuotaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.remesacuotaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$remesacuotaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.remesacuotaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$remesacuotaPayload>;
                };
                findFirst: {
                    args: Prisma.remesacuotaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$remesacuotaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.remesacuotaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$remesacuotaPayload>;
                };
                findMany: {
                    args: Prisma.remesacuotaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$remesacuotaPayload>[];
                };
                create: {
                    args: Prisma.remesacuotaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$remesacuotaPayload>;
                };
                createMany: {
                    args: Prisma.remesacuotaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.remesacuotaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$remesacuotaPayload>;
                };
                update: {
                    args: Prisma.remesacuotaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$remesacuotaPayload>;
                };
                deleteMany: {
                    args: Prisma.remesacuotaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.remesacuotaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.remesacuotaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$remesacuotaPayload>;
                };
                aggregate: {
                    args: Prisma.RemesacuotaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRemesacuota>;
                };
                groupBy: {
                    args: Prisma.remesacuotaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RemesacuotaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.remesacuotaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RemesacuotaCountAggregateOutputType> | number;
                };
            };
        };
        reparto: {
            payload: Prisma.$repartoPayload<ExtArgs>;
            fields: Prisma.repartoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.repartoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$repartoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.repartoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$repartoPayload>;
                };
                findFirst: {
                    args: Prisma.repartoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$repartoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.repartoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$repartoPayload>;
                };
                findMany: {
                    args: Prisma.repartoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$repartoPayload>[];
                };
                create: {
                    args: Prisma.repartoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$repartoPayload>;
                };
                createMany: {
                    args: Prisma.repartoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.repartoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$repartoPayload>;
                };
                update: {
                    args: Prisma.repartoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$repartoPayload>;
                };
                deleteMany: {
                    args: Prisma.repartoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.repartoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.repartoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$repartoPayload>;
                };
                aggregate: {
                    args: Prisma.RepartoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReparto>;
                };
                groupBy: {
                    args: Prisma.repartoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RepartoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.repartoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RepartoCountAggregateOutputType> | number;
                };
            };
        };
        rolfuncional: {
            payload: Prisma.$rolfuncionalPayload<ExtArgs>;
            fields: Prisma.rolfuncionalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.rolfuncionalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolfuncionalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.rolfuncionalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolfuncionalPayload>;
                };
                findFirst: {
                    args: Prisma.rolfuncionalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolfuncionalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.rolfuncionalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolfuncionalPayload>;
                };
                findMany: {
                    args: Prisma.rolfuncionalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolfuncionalPayload>[];
                };
                create: {
                    args: Prisma.rolfuncionalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolfuncionalPayload>;
                };
                createMany: {
                    args: Prisma.rolfuncionalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.rolfuncionalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolfuncionalPayload>;
                };
                update: {
                    args: Prisma.rolfuncionalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolfuncionalPayload>;
                };
                deleteMany: {
                    args: Prisma.rolfuncionalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.rolfuncionalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.rolfuncionalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolfuncionalPayload>;
                };
                aggregate: {
                    args: Prisma.RolfuncionalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRolfuncional>;
                };
                groupBy: {
                    args: Prisma.rolfuncionalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolfuncionalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.rolfuncionalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolfuncionalCountAggregateOutputType> | number;
                };
            };
        };
        sesion: {
            payload: Prisma.$sesionPayload<ExtArgs>;
            fields: Prisma.sesionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.sesionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sesionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.sesionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sesionPayload>;
                };
                findFirst: {
                    args: Prisma.sesionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sesionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.sesionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sesionPayload>;
                };
                findMany: {
                    args: Prisma.sesionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sesionPayload>[];
                };
                create: {
                    args: Prisma.sesionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sesionPayload>;
                };
                createMany: {
                    args: Prisma.sesionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.sesionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sesionPayload>;
                };
                update: {
                    args: Prisma.sesionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sesionPayload>;
                };
                deleteMany: {
                    args: Prisma.sesionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.sesionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.sesionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sesionPayload>;
                };
                aggregate: {
                    args: Prisma.SesionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSesion>;
                };
                groupBy: {
                    args: Prisma.sesionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SesionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.sesionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SesionCountAggregateOutputType> | number;
                };
            };
        };
        tarifa: {
            payload: Prisma.$tarifaPayload<ExtArgs>;
            fields: Prisma.tarifaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.tarifaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tarifaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.tarifaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tarifaPayload>;
                };
                findFirst: {
                    args: Prisma.tarifaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tarifaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.tarifaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tarifaPayload>;
                };
                findMany: {
                    args: Prisma.tarifaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tarifaPayload>[];
                };
                create: {
                    args: Prisma.tarifaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tarifaPayload>;
                };
                createMany: {
                    args: Prisma.tarifaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.tarifaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tarifaPayload>;
                };
                update: {
                    args: Prisma.tarifaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tarifaPayload>;
                };
                deleteMany: {
                    args: Prisma.tarifaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.tarifaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.tarifaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tarifaPayload>;
                };
                aggregate: {
                    args: Prisma.TarifaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTarifa>;
                };
                groupBy: {
                    args: Prisma.tarifaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TarifaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.tarifaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TarifaCountAggregateOutputType> | number;
                };
            };
        };
        usuario: {
            payload: Prisma.$usuarioPayload<ExtArgs>;
            fields: Prisma.usuarioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usuarioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>;
                };
                findFirst: {
                    args: Prisma.usuarioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>;
                };
                findMany: {
                    args: Prisma.usuarioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>[];
                };
                create: {
                    args: Prisma.usuarioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>;
                };
                createMany: {
                    args: Prisma.usuarioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.usuarioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>;
                };
                update: {
                    args: Prisma.usuarioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>;
                };
                deleteMany: {
                    args: Prisma.usuarioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usuarioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.usuarioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>;
                };
                aggregate: {
                    args: Prisma.UsuarioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsuario>;
                };
                groupBy: {
                    args: Prisma.usuarioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usuarioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioCountAggregateOutputType> | number;
                };
            };
        };
        musicoperiodo: {
            payload: Prisma.$musicoperiodoPayload<ExtArgs>;
            fields: Prisma.musicoperiodoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.musicoperiodoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$musicoperiodoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.musicoperiodoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$musicoperiodoPayload>;
                };
                findFirst: {
                    args: Prisma.musicoperiodoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$musicoperiodoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.musicoperiodoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$musicoperiodoPayload>;
                };
                findMany: {
                    args: Prisma.musicoperiodoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$musicoperiodoPayload>[];
                };
                create: {
                    args: Prisma.musicoperiodoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$musicoperiodoPayload>;
                };
                createMany: {
                    args: Prisma.musicoperiodoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.musicoperiodoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$musicoperiodoPayload>;
                };
                update: {
                    args: Prisma.musicoperiodoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$musicoperiodoPayload>;
                };
                deleteMany: {
                    args: Prisma.musicoperiodoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.musicoperiodoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.musicoperiodoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$musicoperiodoPayload>;
                };
                aggregate: {
                    args: Prisma.MusicoperiodoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMusicoperiodo>;
                };
                groupBy: {
                    args: Prisma.musicoperiodoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MusicoperiodoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.musicoperiodoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MusicoperiodoCountAggregateOutputType> | number;
                };
            };
        };
        alumnoperiodo: {
            payload: Prisma.$alumnoperiodoPayload<ExtArgs>;
            fields: Prisma.alumnoperiodoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.alumnoperiodoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnoperiodoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.alumnoperiodoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnoperiodoPayload>;
                };
                findFirst: {
                    args: Prisma.alumnoperiodoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnoperiodoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.alumnoperiodoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnoperiodoPayload>;
                };
                findMany: {
                    args: Prisma.alumnoperiodoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnoperiodoPayload>[];
                };
                create: {
                    args: Prisma.alumnoperiodoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnoperiodoPayload>;
                };
                createMany: {
                    args: Prisma.alumnoperiodoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.alumnoperiodoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnoperiodoPayload>;
                };
                update: {
                    args: Prisma.alumnoperiodoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnoperiodoPayload>;
                };
                deleteMany: {
                    args: Prisma.alumnoperiodoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.alumnoperiodoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.alumnoperiodoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$alumnoperiodoPayload>;
                };
                aggregate: {
                    args: Prisma.AlumnoperiodoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAlumnoperiodo>;
                };
                groupBy: {
                    args: Prisma.alumnoperiodoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AlumnoperiodoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.alumnoperiodoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AlumnoperiodoCountAggregateOutputType> | number;
                };
            };
        };
        profesorperiodo: {
            payload: Prisma.$profesorperiodoPayload<ExtArgs>;
            fields: Prisma.profesorperiodoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.profesorperiodoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$profesorperiodoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.profesorperiodoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$profesorperiodoPayload>;
                };
                findFirst: {
                    args: Prisma.profesorperiodoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$profesorperiodoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.profesorperiodoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$profesorperiodoPayload>;
                };
                findMany: {
                    args: Prisma.profesorperiodoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$profesorperiodoPayload>[];
                };
                create: {
                    args: Prisma.profesorperiodoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$profesorperiodoPayload>;
                };
                createMany: {
                    args: Prisma.profesorperiodoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.profesorperiodoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$profesorperiodoPayload>;
                };
                update: {
                    args: Prisma.profesorperiodoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$profesorperiodoPayload>;
                };
                deleteMany: {
                    args: Prisma.profesorperiodoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.profesorperiodoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.profesorperiodoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$profesorperiodoPayload>;
                };
                aggregate: {
                    args: Prisma.ProfesorperiodoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProfesorperiodo>;
                };
                groupBy: {
                    args: Prisma.profesorperiodoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfesorperiodoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.profesorperiodoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfesorperiodoCountAggregateOutputType> | number;
                };
            };
        };
        directorperiodo: {
            payload: Prisma.$directorperiodoPayload<ExtArgs>;
            fields: Prisma.directorperiodoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.directorperiodoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$directorperiodoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.directorperiodoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$directorperiodoPayload>;
                };
                findFirst: {
                    args: Prisma.directorperiodoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$directorperiodoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.directorperiodoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$directorperiodoPayload>;
                };
                findMany: {
                    args: Prisma.directorperiodoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$directorperiodoPayload>[];
                };
                create: {
                    args: Prisma.directorperiodoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$directorperiodoPayload>;
                };
                createMany: {
                    args: Prisma.directorperiodoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.directorperiodoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$directorperiodoPayload>;
                };
                update: {
                    args: Prisma.directorperiodoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$directorperiodoPayload>;
                };
                deleteMany: {
                    args: Prisma.directorperiodoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.directorperiodoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.directorperiodoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$directorperiodoPayload>;
                };
                aggregate: {
                    args: Prisma.DirectorperiodoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDirectorperiodo>;
                };
                groupBy: {
                    args: Prisma.directorperiodoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DirectorperiodoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.directorperiodoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DirectorperiodoCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ActuacionScalarFieldEnum: {
    readonly id: "id";
    readonly ejercicioId: "ejercicioId";
    readonly contratacionId: "contratacionId";
    readonly fecha: "fecha";
    readonly nombre: "nombre";
    readonly lugar: "lugar";
    readonly importeAcordado: "importeAcordado";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ActuacionScalarFieldEnum = (typeof ActuacionScalarFieldEnum)[keyof typeof ActuacionScalarFieldEnum];
export declare const ActuacionagrupacionScalarFieldEnum: {
    readonly id: "id";
    readonly actuacionId: "actuacionId";
    readonly agrupacionId: "agrupacionId";
    readonly createdAt: "createdAt";
};
export type ActuacionagrupacionScalarFieldEnum = (typeof ActuacionagrupacionScalarFieldEnum)[keyof typeof ActuacionagrupacionScalarFieldEnum];
export declare const AgrupacionScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AgrupacionScalarFieldEnum = (typeof AgrupacionScalarFieldEnum)[keyof typeof AgrupacionScalarFieldEnum];
export declare const AlumnoScalarFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly fechaAlta: "fechaAlta";
    readonly fechaBaja: "fechaBaja";
    readonly motivoBaja: "motivoBaja";
    readonly activo: "activo";
    readonly observaciones: "observaciones";
};
export type AlumnoScalarFieldEnum = (typeof AlumnoScalarFieldEnum)[keyof typeof AlumnoScalarFieldEnum];
export declare const AsientoScalarFieldEnum: {
    readonly id: "id";
    readonly numero: "numero";
    readonly ejercicioId: "ejercicioId";
    readonly periodoContableId: "periodoContableId";
    readonly fechaContabilizacion: "fechaContabilizacion";
    readonly concepto: "concepto";
    readonly createdAt: "createdAt";
};
export type AsientoScalarFieldEnum = (typeof AsientoScalarFieldEnum)[keyof typeof AsientoScalarFieldEnum];
export declare const AsientomovimientoScalarFieldEnum: {
    readonly id: "id";
    readonly asientoId: "asientoId";
    readonly movimientoFinancieroId: "movimientoFinancieroId";
    readonly createdAt: "createdAt";
};
export type AsientomovimientoScalarFieldEnum = (typeof AsientomovimientoScalarFieldEnum)[keyof typeof AsientomovimientoScalarFieldEnum];
export declare const AsistenciaScalarFieldEnum: {
    readonly id: "id";
    readonly actuacionId: "actuacionId";
    readonly musicoId: "musicoId";
    readonly tipoActividad: "tipoActividad";
    readonly estado: "estado";
    readonly fechaRegistro: "fechaRegistro";
    readonly origen: "origen";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AsistenciaScalarFieldEnum = (typeof AsistenciaScalarFieldEnum)[keyof typeof AsistenciaScalarFieldEnum];
export declare const AuditlogScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly action: "action";
    readonly entity: "entity";
    readonly entityId: "entityId";
    readonly description: "description";
    readonly metadata: "metadata";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly createdAt: "createdAt";
};
export type AuditlogScalarFieldEnum = (typeof AuditlogScalarFieldEnum)[keyof typeof AuditlogScalarFieldEnum];
export declare const AulaScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly capacidad: "capacidad";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AulaScalarFieldEnum = (typeof AulaScalarFieldEnum)[keyof typeof AulaScalarFieldEnum];
export declare const CentroanaliticoScalarFieldEnum: {
    readonly id: "id";
    readonly codigo: "codigo";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CentroanaliticoScalarFieldEnum = (typeof CentroanaliticoScalarFieldEnum)[keyof typeof CentroanaliticoScalarFieldEnum];
export declare const ClaseScalarFieldEnum: {
    readonly id: "id";
    readonly alumnoId: "alumnoId";
    readonly profesorId: "profesorId";
    readonly materiaId: "materiaId";
    readonly aulaId: "aulaId";
    readonly diaSemana: "diaSemana";
    readonly horaInicio: "horaInicio";
    readonly horaFin: "horaFin";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly estado: "estado";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClaseScalarFieldEnum = (typeof ClaseScalarFieldEnum)[keyof typeof ClaseScalarFieldEnum];
export declare const ClienteScalarFieldEnum: {
    readonly id: "id";
    readonly nombreRazonSocial: "nombreRazonSocial";
    readonly nifCif: "nifCif";
    readonly tipoCliente: "tipoCliente";
    readonly personaContacto: "personaContacto";
    readonly telefono: "telefono";
    readonly email: "email";
    readonly direccionFiscal: "direccionFiscal";
    readonly codigoPostal: "codigoPostal";
    readonly localidad: "localidad";
    readonly provincia: "provincia";
    readonly pais: "pais";
    readonly iban: "iban";
    readonly formaCobro: "formaCobro";
    readonly plazoCobro: "plazoCobro";
    readonly observacionesCobro: "observacionesCobro";
    readonly activo: "activo";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum];
export declare const CobroScalarFieldEnum: {
    readonly id: "id";
    readonly fechaCobro: "fechaCobro";
    readonly clienteId: "clienteId";
    readonly importeTotal: "importeTotal";
    readonly cuentaFinancieraId: "cuentaFinancieraId";
    readonly medioPago: "medioPago";
    readonly concepto: "concepto";
    readonly referencia: "referencia";
    readonly observaciones: "observaciones";
    readonly movimientoFinancieroId: "movimientoFinancieroId";
    readonly asientoId: "asientoId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CobroScalarFieldEnum = (typeof CobroScalarFieldEnum)[keyof typeof CobroScalarFieldEnum];
export declare const CondicioncuotaScalarFieldEnum: {
    readonly id: "id";
    readonly alumnoId: "alumnoId";
    readonly tipo: "tipo";
    readonly valor: "valor";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly motivo: "motivo";
    readonly observaciones: "observaciones";
    readonly activa: "activa";
    readonly autorizadaPor: "autorizadaPor";
    readonly fechaAutorizacion: "fechaAutorizacion";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CondicioncuotaScalarFieldEnum = (typeof CondicioncuotaScalarFieldEnum)[keyof typeof CondicioncuotaScalarFieldEnum];
export declare const ContratacionScalarFieldEnum: {
    readonly id: "id";
    readonly clienteId: "clienteId";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly descripcion: "descripcion";
    readonly importeAcordado: "importeAcordado";
    readonly estado: "estado";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ContratacionScalarFieldEnum = (typeof ContratacionScalarFieldEnum)[keyof typeof ContratacionScalarFieldEnum];
export declare const ContratoScalarFieldEnum: {
    readonly id: "id";
    readonly profesorId: "profesorId";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly salarioHora: "salarioHora";
    readonly periodicidad: "periodicidad";
    readonly estado: "estado";
    readonly observaciones: "observaciones";
    readonly nextcloudReferencia: "nextcloudReferencia";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ContratoScalarFieldEnum = (typeof ContratoScalarFieldEnum)[keyof typeof ContratoScalarFieldEnum];
export declare const CuentacontableScalarFieldEnum: {
    readonly id: "id";
    readonly codigo: "codigo";
    readonly nombre: "nombre";
    readonly tipo: "tipo";
    readonly naturaleza: "naturaleza";
    readonly nivel: "nivel";
    readonly agrupadora: "agrupadora";
    readonly movimiento: "movimiento";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly activa: "activa";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CuentacontableScalarFieldEnum = (typeof CuentacontableScalarFieldEnum)[keyof typeof CuentacontableScalarFieldEnum];
export declare const CuentafinancieraScalarFieldEnum: {
    readonly id: "id";
    readonly tipo: "tipo";
    readonly nombre: "nombre";
    readonly banco: "banco";
    readonly iban: "iban";
    readonly moneda: "moneda";
    readonly fechaApertura: "fechaApertura";
    readonly fechaCierre: "fechaCierre";
    readonly activa: "activa";
    readonly cuentaContableId: "cuentaContableId";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CuentafinancieraScalarFieldEnum = (typeof CuentafinancieraScalarFieldEnum)[keyof typeof CuentafinancieraScalarFieldEnum];
export declare const CuotaScalarFieldEnum: {
    readonly id: "id";
    readonly alumnoId: "alumnoId";
    readonly tarifaId: "tarifaId";
    readonly fecha: "fecha";
    readonly importeBase: "importeBase";
    readonly ajuste: "ajuste";
    readonly importeFinal: "importeFinal";
    readonly motivoAjuste: "motivoAjuste";
    readonly estado: "estado";
    readonly fechaEnvioBanco: "fechaEnvioBanco";
    readonly motivoDevolucion: "motivoDevolucion";
    readonly asientoId: "asientoId";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CuotaScalarFieldEnum = (typeof CuotaScalarFieldEnum)[keyof typeof CuotaScalarFieldEnum];
export declare const DerechocobroScalarFieldEnum: {
    readonly id: "id";
    readonly facturaClienteId: "facturaClienteId";
    readonly importe: "importe";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DerechocobroScalarFieldEnum = (typeof DerechocobroScalarFieldEnum)[keyof typeof DerechocobroScalarFieldEnum];
export declare const DirectorScalarFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly fechaAlta: "fechaAlta";
    readonly fechaBaja: "fechaBaja";
    readonly activo: "activo";
    readonly observaciones: "observaciones";
};
export type DirectorScalarFieldEnum = (typeof DirectorScalarFieldEnum)[keyof typeof DirectorScalarFieldEnum];
export declare const EjercicioScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly estado: "estado";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type EjercicioScalarFieldEnum = (typeof EjercicioScalarFieldEnum)[keyof typeof EjercicioScalarFieldEnum];
export declare const FacturaclienteScalarFieldEnum: {
    readonly id: "id";
    readonly clienteId: "clienteId";
    readonly contratacionId: "contratacionId";
    readonly actuacionId: "actuacionId";
    readonly numero: "numero";
    readonly fechaFactura: "fechaFactura";
    readonly vencimiento: "vencimiento";
    readonly concepto: "concepto";
    readonly base: "base";
    readonly iva: "iva";
    readonly total: "total";
    readonly estado: "estado";
    readonly asientoId: "asientoId";
    readonly cuentaContableId: "cuentaContableId";
    readonly centroAnaliticoId: "centroAnaliticoId";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FacturaclienteScalarFieldEnum = (typeof FacturaclienteScalarFieldEnum)[keyof typeof FacturaclienteScalarFieldEnum];
export declare const FacturaproveedorScalarFieldEnum: {
    readonly id: "id";
    readonly proveedorId: "proveedorId";
    readonly numero: "numero";
    readonly fechaFactura: "fechaFactura";
    readonly fechaRegistro: "fechaRegistro";
    readonly vencimiento: "vencimiento";
    readonly concepto: "concepto";
    readonly base: "base";
    readonly iva: "iva";
    readonly total: "total";
    readonly estado: "estado";
    readonly asientoId: "asientoId";
    readonly cuentaContableId: "cuentaContableId";
    readonly centroAnaliticoId: "centroAnaliticoId";
    readonly proyecto: "proyecto";
    readonly actuacionId: "actuacionId";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FacturaproveedorScalarFieldEnum = (typeof FacturaproveedorScalarFieldEnum)[keyof typeof FacturaproveedorScalarFieldEnum];
export declare const FacturarectificativaclienteScalarFieldEnum: {
    readonly id: "id";
    readonly facturaOriginalId: "facturaOriginalId";
    readonly numero: "numero";
    readonly fechaFactura: "fechaFactura";
    readonly concepto: "concepto";
    readonly base: "base";
    readonly iva: "iva";
    readonly total: "total";
    readonly asientoId: "asientoId";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FacturarectificativaclienteScalarFieldEnum = (typeof FacturarectificativaclienteScalarFieldEnum)[keyof typeof FacturarectificativaclienteScalarFieldEnum];
export declare const FacturarectificativaproveedorScalarFieldEnum: {
    readonly id: "id";
    readonly facturaOriginalId: "facturaOriginalId";
    readonly numero: "numero";
    readonly fechaFactura: "fechaFactura";
    readonly concepto: "concepto";
    readonly base: "base";
    readonly iva: "iva";
    readonly total: "total";
    readonly asientoId: "asientoId";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FacturarectificativaproveedorScalarFieldEnum = (typeof FacturarectificativaproveedorScalarFieldEnum)[keyof typeof FacturarectificativaproveedorScalarFieldEnum];
export declare const FamiliaScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FamiliaScalarFieldEnum = (typeof FamiliaScalarFieldEnum)[keyof typeof FamiliaScalarFieldEnum];
export declare const SeccionScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly familiaId: "familiaId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SeccionScalarFieldEnum = (typeof SeccionScalarFieldEnum)[keyof typeof SeccionScalarFieldEnum];
export declare const InstrumentoScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly seccionId: "seccionId";
    readonly descripcion: "descripcion";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type InstrumentoScalarFieldEnum = (typeof InstrumentoScalarFieldEnum)[keyof typeof InstrumentoScalarFieldEnum];
export declare const IntegracionnextcloudScalarFieldEnum: {
    readonly id: "id";
    readonly serverUrl: "serverUrl";
    readonly estado: "estado";
    readonly mensajeEstado: "mensajeEstado";
    readonly ultimaComprobacionAt: "ultimaComprobacionAt";
    readonly activa: "activa";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type IntegracionnextcloudScalarFieldEnum = (typeof IntegracionnextcloudScalarFieldEnum)[keyof typeof IntegracionnextcloudScalarFieldEnum];
export declare const LineaasientoScalarFieldEnum: {
    readonly id: "id";
    readonly asientoId: "asientoId";
    readonly cuentaContableId: "cuentaContableId";
    readonly concepto: "concepto";
    readonly debe: "debe";
    readonly haber: "haber";
    readonly centroAnaliticoId: "centroAnaliticoId";
    readonly referencia: "referencia";
    readonly createdAt: "createdAt";
};
export type LineaasientoScalarFieldEnum = (typeof LineaasientoScalarFieldEnum)[keyof typeof LineaasientoScalarFieldEnum];
export declare const LineanominaScalarFieldEnum: {
    readonly id: "id";
    readonly nominaId: "nominaId";
    readonly tipo: "tipo";
    readonly descripcion: "descripcion";
    readonly importe: "importe";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LineanominaScalarFieldEnum = (typeof LineanominaScalarFieldEnum)[keyof typeof LineanominaScalarFieldEnum];
export declare const LinearepartoScalarFieldEnum: {
    readonly id: "id";
    readonly repartoId: "repartoId";
    readonly musicoId: "musicoId";
    readonly actuacionesComputadas: "actuacionesComputadas";
    readonly importeBruto: "importeBruto";
    readonly porcentajeUMT: "porcentajeUMT";
    readonly complementos: "complementos";
    readonly deducciones: "deducciones";
    readonly importeFinal: "importeFinal";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LinearepartoScalarFieldEnum = (typeof LinearepartoScalarFieldEnum)[keyof typeof LinearepartoScalarFieldEnum];
export declare const LiquidacioncobroScalarFieldEnum: {
    readonly id: "id";
    readonly derechoCobroId: "derechoCobroId";
    readonly cobroId: "cobroId";
    readonly importe: "importe";
    readonly createdAt: "createdAt";
};
export type LiquidacioncobroScalarFieldEnum = (typeof LiquidacioncobroScalarFieldEnum)[keyof typeof LiquidacioncobroScalarFieldEnum];
export declare const LiquidacionpagoScalarFieldEnum: {
    readonly id: "id";
    readonly obligationId: "obligationId";
    readonly paymentId: "paymentId";
    readonly importe: "importe";
    readonly createdAt: "createdAt";
};
export type LiquidacionpagoScalarFieldEnum = (typeof LiquidacionpagoScalarFieldEnum)[keyof typeof LiquidacionpagoScalarFieldEnum];
export declare const MateriaScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly tipo: "tipo";
    readonly descripcion: "descripcion";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MateriaScalarFieldEnum = (typeof MateriaScalarFieldEnum)[keyof typeof MateriaScalarFieldEnum];
export declare const MovimientofinancieroScalarFieldEnum: {
    readonly id: "id";
    readonly cuentaFinancieraId: "cuentaFinancieraId";
    readonly fecha: "fecha";
    readonly tipo: "tipo";
    readonly concepto: "concepto";
    readonly importe: "importe";
    readonly referencia: "referencia";
    readonly conciliacion: "conciliacion";
    readonly fechaConciliacion: "fechaConciliacion";
    readonly conciliadoPor: "conciliadoPor";
    readonly grupoTransferencia: "grupoTransferencia";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MovimientofinancieroScalarFieldEnum = (typeof MovimientofinancieroScalarFieldEnum)[keyof typeof MovimientofinancieroScalarFieldEnum];
export declare const MusicoScalarFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly fechaAlta: "fechaAlta";
    readonly fechaBaja: "fechaBaja";
    readonly activo: "activo";
    readonly observaciones: "observaciones";
};
export type MusicoScalarFieldEnum = (typeof MusicoScalarFieldEnum)[keyof typeof MusicoScalarFieldEnum];
export declare const NominaScalarFieldEnum: {
    readonly id: "id";
    readonly profesorId: "profesorId";
    readonly contratoId: "contratoId";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly fechaPago: "fechaPago";
    readonly salarioBruto: "salarioBruto";
    readonly irpf: "irpf";
    readonly ssTrabajador: "ssTrabajador";
    readonly ssUMT: "ssUMT";
    readonly totalNeto: "totalNeto";
    readonly estado: "estado";
    readonly asientoId: "asientoId";
    readonly origenCalculo: "origenCalculo";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type NominaScalarFieldEnum = (typeof NominaScalarFieldEnum)[keyof typeof NominaScalarFieldEnum];
export declare const ObligacioneconomicaScalarFieldEnum: {
    readonly id: "id";
    readonly ejercicioId: "ejercicioId";
    readonly cuotaId: "cuotaId";
    readonly facturaProveedorId: "facturaProveedorId";
    readonly nominaId: "nominaId";
    readonly repartoId: "repartoId";
    readonly importe: "importe";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ObligacioneconomicaScalarFieldEnum = (typeof ObligacioneconomicaScalarFieldEnum)[keyof typeof ObligacioneconomicaScalarFieldEnum];
export declare const PagoScalarFieldEnum: {
    readonly id: "id";
    readonly fechaPago: "fechaPago";
    readonly proveedorId: "proveedorId";
    readonly importeTotal: "importeTotal";
    readonly cuentaFinancieraId: "cuentaFinancieraId";
    readonly medioPago: "medioPago";
    readonly concepto: "concepto";
    readonly referencia: "referencia";
    readonly observaciones: "observaciones";
    readonly movimientoFinancieroId: "movimientoFinancieroId";
    readonly asientoId: "asientoId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PagoScalarFieldEnum = (typeof PagoScalarFieldEnum)[keyof typeof PagoScalarFieldEnum];
export declare const ParametrosistemaScalarFieldEnum: {
    readonly id: "id";
    readonly codigo: "codigo";
    readonly nombre: "nombre";
    readonly tipo: "tipo";
    readonly valor: "valor";
    readonly descripcion: "descripcion";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ParametrosistemaScalarFieldEnum = (typeof ParametrosistemaScalarFieldEnum)[keyof typeof ParametrosistemaScalarFieldEnum];
export declare const PeriodocontableScalarFieldEnum: {
    readonly id: "id";
    readonly ejercicioId: "ejercicioId";
    readonly nombre: "nombre";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly estado: "estado";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PeriodocontableScalarFieldEnum = (typeof PeriodocontableScalarFieldEnum)[keyof typeof PeriodocontableScalarFieldEnum];
export declare const PersonaScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly apellidos: "apellidos";
    readonly dni: "dni";
    readonly fechaNacimiento: "fechaNacimiento";
    readonly email: "email";
    readonly telefono: "telefono";
    readonly observaciones: "observaciones";
    readonly activo: "activo";
    readonly fechaBaja: "fechaBaja";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PersonaScalarFieldEnum = (typeof PersonaScalarFieldEnum)[keyof typeof PersonaScalarFieldEnum];
export declare const PersonaagrupacionScalarFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly agrupacionId: "agrupacionId";
    readonly fechaAlta: "fechaAlta";
    readonly fechaBaja: "fechaBaja";
    readonly activo: "activo";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PersonaagrupacionScalarFieldEnum = (typeof PersonaagrupacionScalarFieldEnum)[keyof typeof PersonaagrupacionScalarFieldEnum];
export declare const PersonainstrumentoScalarFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly instrumentoId: "instrumentoId";
    readonly principal: "principal";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PersonainstrumentoScalarFieldEnum = (typeof PersonainstrumentoScalarFieldEnum)[keyof typeof PersonainstrumentoScalarFieldEnum];
export declare const PersonarolfuncionalScalarFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly rolFuncionalId: "rolFuncionalId";
};
export type PersonarolfuncionalScalarFieldEnum = (typeof PersonarolfuncionalScalarFieldEnum)[keyof typeof PersonarolfuncionalScalarFieldEnum];
export declare const ProfesorScalarFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly fechaAlta: "fechaAlta";
    readonly fechaBaja: "fechaBaja";
    readonly motivoBaja: "motivoBaja";
    readonly activo: "activo";
    readonly observaciones: "observaciones";
};
export type ProfesorScalarFieldEnum = (typeof ProfesorScalarFieldEnum)[keyof typeof ProfesorScalarFieldEnum];
export declare const ProveedorScalarFieldEnum: {
    readonly id: "id";
    readonly nombreRazonSocial: "nombreRazonSocial";
    readonly nifCif: "nifCif";
    readonly tipoProveedor: "tipoProveedor";
    readonly personaContacto: "personaContacto";
    readonly telefono: "telefono";
    readonly email: "email";
    readonly direccionFiscal: "direccionFiscal";
    readonly codigoPostal: "codigoPostal";
    readonly localidad: "localidad";
    readonly provincia: "provincia";
    readonly pais: "pais";
    readonly iban: "iban";
    readonly formaPago: "formaPago";
    readonly plazoPago: "plazoPago";
    readonly observacionesPago: "observacionesPago";
    readonly activo: "activo";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProveedorScalarFieldEnum = (typeof ProveedorScalarFieldEnum)[keyof typeof ProveedorScalarFieldEnum];
export declare const RemesaScalarFieldEnum: {
    readonly id: "id";
    readonly fecha: "fecha";
    readonly estado: "estado";
    readonly referencia: "referencia";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RemesaScalarFieldEnum = (typeof RemesaScalarFieldEnum)[keyof typeof RemesaScalarFieldEnum];
export declare const RemesacuotaScalarFieldEnum: {
    readonly id: "id";
    readonly remesaId: "remesaId";
    readonly cuotaId: "cuotaId";
    readonly importe: "importe";
    readonly createdAt: "createdAt";
};
export type RemesacuotaScalarFieldEnum = (typeof RemesacuotaScalarFieldEnum)[keyof typeof RemesacuotaScalarFieldEnum];
export declare const RepartoScalarFieldEnum: {
    readonly id: "id";
    readonly ejercicioId: "ejercicioId";
    readonly fechaCierre: "fechaCierre";
    readonly estado: "estado";
    readonly porcentajeUMT: "porcentajeUMT";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RepartoScalarFieldEnum = (typeof RepartoScalarFieldEnum)[keyof typeof RepartoScalarFieldEnum];
export declare const RolfuncionalScalarFieldEnum: {
    readonly id: "id";
    readonly codigo: "codigo";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
    readonly activo: "activo";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RolfuncionalScalarFieldEnum = (typeof RolfuncionalScalarFieldEnum)[keyof typeof RolfuncionalScalarFieldEnum];
export declare const SesionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly tokenHash: "tokenHash";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly lastUsedAt: "lastUsedAt";
    readonly revokedAt: "revokedAt";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
};
export type SesionScalarFieldEnum = (typeof SesionScalarFieldEnum)[keyof typeof SesionScalarFieldEnum];
export declare const TarifaScalarFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly importe: "importe";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly activa: "activa";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TarifaScalarFieldEnum = (typeof TarifaScalarFieldEnum)[keyof typeof TarifaScalarFieldEnum];
export declare const UsuarioScalarFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly username: "username";
    readonly passwordHash: "passwordHash";
    readonly activo: "activo";
    readonly ultimoAccesoAt: "ultimoAccesoAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum];
export declare const MusicoperiodoScalarFieldEnum: {
    readonly id: "id";
    readonly musicoId: "musicoId";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly motivoBaja: "motivoBaja";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MusicoperiodoScalarFieldEnum = (typeof MusicoperiodoScalarFieldEnum)[keyof typeof MusicoperiodoScalarFieldEnum];
export declare const AlumnoperiodoScalarFieldEnum: {
    readonly id: "id";
    readonly alumnoId: "alumnoId";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly motivoBaja: "motivoBaja";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AlumnoperiodoScalarFieldEnum = (typeof AlumnoperiodoScalarFieldEnum)[keyof typeof AlumnoperiodoScalarFieldEnum];
export declare const ProfesorperiodoScalarFieldEnum: {
    readonly id: "id";
    readonly profesorId: "profesorId";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly motivoBaja: "motivoBaja";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProfesorperiodoScalarFieldEnum = (typeof ProfesorperiodoScalarFieldEnum)[keyof typeof ProfesorperiodoScalarFieldEnum];
export declare const DirectorperiodoScalarFieldEnum: {
    readonly id: "id";
    readonly directorId: "directorId";
    readonly fechaInicio: "fechaInicio";
    readonly fechaFin: "fechaFin";
    readonly motivoBaja: "motivoBaja";
    readonly observaciones: "observaciones";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DirectorperiodoScalarFieldEnum = (typeof DirectorperiodoScalarFieldEnum)[keyof typeof DirectorperiodoScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const actuacionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly ejercicioId: "ejercicioId";
    readonly contratacionId: "contratacionId";
    readonly nombre: "nombre";
    readonly lugar: "lugar";
    readonly observaciones: "observaciones";
};
export type actuacionOrderByRelevanceFieldEnum = (typeof actuacionOrderByRelevanceFieldEnum)[keyof typeof actuacionOrderByRelevanceFieldEnum];
export declare const actuacionagrupacionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly actuacionId: "actuacionId";
    readonly agrupacionId: "agrupacionId";
};
export type actuacionagrupacionOrderByRelevanceFieldEnum = (typeof actuacionagrupacionOrderByRelevanceFieldEnum)[keyof typeof actuacionagrupacionOrderByRelevanceFieldEnum];
export declare const agrupacionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
};
export type agrupacionOrderByRelevanceFieldEnum = (typeof agrupacionOrderByRelevanceFieldEnum)[keyof typeof agrupacionOrderByRelevanceFieldEnum];
export declare const alumnoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly observaciones: "observaciones";
};
export type alumnoOrderByRelevanceFieldEnum = (typeof alumnoOrderByRelevanceFieldEnum)[keyof typeof alumnoOrderByRelevanceFieldEnum];
export declare const asientoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly ejercicioId: "ejercicioId";
    readonly periodoContableId: "periodoContableId";
    readonly concepto: "concepto";
};
export type asientoOrderByRelevanceFieldEnum = (typeof asientoOrderByRelevanceFieldEnum)[keyof typeof asientoOrderByRelevanceFieldEnum];
export declare const asientomovimientoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly asientoId: "asientoId";
    readonly movimientoFinancieroId: "movimientoFinancieroId";
};
export type asientomovimientoOrderByRelevanceFieldEnum = (typeof asientomovimientoOrderByRelevanceFieldEnum)[keyof typeof asientomovimientoOrderByRelevanceFieldEnum];
export declare const asistenciaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly actuacionId: "actuacionId";
    readonly musicoId: "musicoId";
    readonly origen: "origen";
    readonly observaciones: "observaciones";
};
export type asistenciaOrderByRelevanceFieldEnum = (typeof asistenciaOrderByRelevanceFieldEnum)[keyof typeof asistenciaOrderByRelevanceFieldEnum];
export declare const auditlogOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly entity: "entity";
    readonly entityId: "entityId";
    readonly description: "description";
    readonly metadata: "metadata";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
};
export type auditlogOrderByRelevanceFieldEnum = (typeof auditlogOrderByRelevanceFieldEnum)[keyof typeof auditlogOrderByRelevanceFieldEnum];
export declare const aulaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
};
export type aulaOrderByRelevanceFieldEnum = (typeof aulaOrderByRelevanceFieldEnum)[keyof typeof aulaOrderByRelevanceFieldEnum];
export declare const centroanaliticoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly codigo: "codigo";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
};
export type centroanaliticoOrderByRelevanceFieldEnum = (typeof centroanaliticoOrderByRelevanceFieldEnum)[keyof typeof centroanaliticoOrderByRelevanceFieldEnum];
export declare const claseOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly alumnoId: "alumnoId";
    readonly profesorId: "profesorId";
    readonly materiaId: "materiaId";
    readonly aulaId: "aulaId";
    readonly observaciones: "observaciones";
};
export type claseOrderByRelevanceFieldEnum = (typeof claseOrderByRelevanceFieldEnum)[keyof typeof claseOrderByRelevanceFieldEnum];
export declare const clienteOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombreRazonSocial: "nombreRazonSocial";
    readonly nifCif: "nifCif";
    readonly tipoCliente: "tipoCliente";
    readonly personaContacto: "personaContacto";
    readonly telefono: "telefono";
    readonly email: "email";
    readonly direccionFiscal: "direccionFiscal";
    readonly codigoPostal: "codigoPostal";
    readonly localidad: "localidad";
    readonly provincia: "provincia";
    readonly pais: "pais";
    readonly iban: "iban";
    readonly formaCobro: "formaCobro";
    readonly plazoCobro: "plazoCobro";
    readonly observacionesCobro: "observacionesCobro";
    readonly observaciones: "observaciones";
};
export type clienteOrderByRelevanceFieldEnum = (typeof clienteOrderByRelevanceFieldEnum)[keyof typeof clienteOrderByRelevanceFieldEnum];
export declare const cobroOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly clienteId: "clienteId";
    readonly cuentaFinancieraId: "cuentaFinancieraId";
    readonly concepto: "concepto";
    readonly referencia: "referencia";
    readonly observaciones: "observaciones";
    readonly movimientoFinancieroId: "movimientoFinancieroId";
    readonly asientoId: "asientoId";
};
export type cobroOrderByRelevanceFieldEnum = (typeof cobroOrderByRelevanceFieldEnum)[keyof typeof cobroOrderByRelevanceFieldEnum];
export declare const condicioncuotaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly alumnoId: "alumnoId";
    readonly observaciones: "observaciones";
    readonly autorizadaPor: "autorizadaPor";
};
export type condicioncuotaOrderByRelevanceFieldEnum = (typeof condicioncuotaOrderByRelevanceFieldEnum)[keyof typeof condicioncuotaOrderByRelevanceFieldEnum];
export declare const contratacionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly clienteId: "clienteId";
    readonly descripcion: "descripcion";
    readonly estado: "estado";
    readonly observaciones: "observaciones";
};
export type contratacionOrderByRelevanceFieldEnum = (typeof contratacionOrderByRelevanceFieldEnum)[keyof typeof contratacionOrderByRelevanceFieldEnum];
export declare const contratoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly profesorId: "profesorId";
    readonly observaciones: "observaciones";
    readonly nextcloudReferencia: "nextcloudReferencia";
};
export type contratoOrderByRelevanceFieldEnum = (typeof contratoOrderByRelevanceFieldEnum)[keyof typeof contratoOrderByRelevanceFieldEnum];
export declare const cuentacontableOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly codigo: "codigo";
    readonly nombre: "nombre";
    readonly observaciones: "observaciones";
};
export type cuentacontableOrderByRelevanceFieldEnum = (typeof cuentacontableOrderByRelevanceFieldEnum)[keyof typeof cuentacontableOrderByRelevanceFieldEnum];
export declare const cuentafinancieraOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly banco: "banco";
    readonly iban: "iban";
    readonly moneda: "moneda";
    readonly cuentaContableId: "cuentaContableId";
    readonly observaciones: "observaciones";
};
export type cuentafinancieraOrderByRelevanceFieldEnum = (typeof cuentafinancieraOrderByRelevanceFieldEnum)[keyof typeof cuentafinancieraOrderByRelevanceFieldEnum];
export declare const cuotaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly alumnoId: "alumnoId";
    readonly tarifaId: "tarifaId";
    readonly motivoAjuste: "motivoAjuste";
    readonly asientoId: "asientoId";
    readonly observaciones: "observaciones";
};
export type cuotaOrderByRelevanceFieldEnum = (typeof cuotaOrderByRelevanceFieldEnum)[keyof typeof cuotaOrderByRelevanceFieldEnum];
export declare const derechocobroOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly facturaClienteId: "facturaClienteId";
    readonly observaciones: "observaciones";
};
export type derechocobroOrderByRelevanceFieldEnum = (typeof derechocobroOrderByRelevanceFieldEnum)[keyof typeof derechocobroOrderByRelevanceFieldEnum];
export declare const directorOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly observaciones: "observaciones";
};
export type directorOrderByRelevanceFieldEnum = (typeof directorOrderByRelevanceFieldEnum)[keyof typeof directorOrderByRelevanceFieldEnum];
export declare const ejercicioOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly observaciones: "observaciones";
};
export type ejercicioOrderByRelevanceFieldEnum = (typeof ejercicioOrderByRelevanceFieldEnum)[keyof typeof ejercicioOrderByRelevanceFieldEnum];
export declare const facturaclienteOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly clienteId: "clienteId";
    readonly contratacionId: "contratacionId";
    readonly actuacionId: "actuacionId";
    readonly numero: "numero";
    readonly concepto: "concepto";
    readonly asientoId: "asientoId";
    readonly cuentaContableId: "cuentaContableId";
    readonly centroAnaliticoId: "centroAnaliticoId";
    readonly observaciones: "observaciones";
};
export type facturaclienteOrderByRelevanceFieldEnum = (typeof facturaclienteOrderByRelevanceFieldEnum)[keyof typeof facturaclienteOrderByRelevanceFieldEnum];
export declare const facturaproveedorOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly proveedorId: "proveedorId";
    readonly numero: "numero";
    readonly concepto: "concepto";
    readonly asientoId: "asientoId";
    readonly cuentaContableId: "cuentaContableId";
    readonly centroAnaliticoId: "centroAnaliticoId";
    readonly proyecto: "proyecto";
    readonly actuacionId: "actuacionId";
    readonly observaciones: "observaciones";
};
export type facturaproveedorOrderByRelevanceFieldEnum = (typeof facturaproveedorOrderByRelevanceFieldEnum)[keyof typeof facturaproveedorOrderByRelevanceFieldEnum];
export declare const facturarectificativaclienteOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly facturaOriginalId: "facturaOriginalId";
    readonly numero: "numero";
    readonly concepto: "concepto";
    readonly asientoId: "asientoId";
    readonly observaciones: "observaciones";
};
export type facturarectificativaclienteOrderByRelevanceFieldEnum = (typeof facturarectificativaclienteOrderByRelevanceFieldEnum)[keyof typeof facturarectificativaclienteOrderByRelevanceFieldEnum];
export declare const facturarectificativaproveedorOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly facturaOriginalId: "facturaOriginalId";
    readonly numero: "numero";
    readonly concepto: "concepto";
    readonly asientoId: "asientoId";
    readonly observaciones: "observaciones";
};
export type facturarectificativaproveedorOrderByRelevanceFieldEnum = (typeof facturarectificativaproveedorOrderByRelevanceFieldEnum)[keyof typeof facturarectificativaproveedorOrderByRelevanceFieldEnum];
export declare const familiaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
};
export type familiaOrderByRelevanceFieldEnum = (typeof familiaOrderByRelevanceFieldEnum)[keyof typeof familiaOrderByRelevanceFieldEnum];
export declare const seccionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly familiaId: "familiaId";
};
export type seccionOrderByRelevanceFieldEnum = (typeof seccionOrderByRelevanceFieldEnum)[keyof typeof seccionOrderByRelevanceFieldEnum];
export declare const instrumentoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly seccionId: "seccionId";
    readonly descripcion: "descripcion";
};
export type instrumentoOrderByRelevanceFieldEnum = (typeof instrumentoOrderByRelevanceFieldEnum)[keyof typeof instrumentoOrderByRelevanceFieldEnum];
export declare const integracionnextcloudOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly serverUrl: "serverUrl";
    readonly mensajeEstado: "mensajeEstado";
};
export type integracionnextcloudOrderByRelevanceFieldEnum = (typeof integracionnextcloudOrderByRelevanceFieldEnum)[keyof typeof integracionnextcloudOrderByRelevanceFieldEnum];
export declare const lineaasientoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly asientoId: "asientoId";
    readonly cuentaContableId: "cuentaContableId";
    readonly concepto: "concepto";
    readonly centroAnaliticoId: "centroAnaliticoId";
    readonly referencia: "referencia";
};
export type lineaasientoOrderByRelevanceFieldEnum = (typeof lineaasientoOrderByRelevanceFieldEnum)[keyof typeof lineaasientoOrderByRelevanceFieldEnum];
export declare const lineanominaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nominaId: "nominaId";
    readonly descripcion: "descripcion";
};
export type lineanominaOrderByRelevanceFieldEnum = (typeof lineanominaOrderByRelevanceFieldEnum)[keyof typeof lineanominaOrderByRelevanceFieldEnum];
export declare const linearepartoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly repartoId: "repartoId";
    readonly musicoId: "musicoId";
    readonly observaciones: "observaciones";
};
export type linearepartoOrderByRelevanceFieldEnum = (typeof linearepartoOrderByRelevanceFieldEnum)[keyof typeof linearepartoOrderByRelevanceFieldEnum];
export declare const liquidacioncobroOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly derechoCobroId: "derechoCobroId";
    readonly cobroId: "cobroId";
};
export type liquidacioncobroOrderByRelevanceFieldEnum = (typeof liquidacioncobroOrderByRelevanceFieldEnum)[keyof typeof liquidacioncobroOrderByRelevanceFieldEnum];
export declare const liquidacionpagoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly obligationId: "obligationId";
    readonly paymentId: "paymentId";
};
export type liquidacionpagoOrderByRelevanceFieldEnum = (typeof liquidacionpagoOrderByRelevanceFieldEnum)[keyof typeof liquidacionpagoOrderByRelevanceFieldEnum];
export declare const materiaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
};
export type materiaOrderByRelevanceFieldEnum = (typeof materiaOrderByRelevanceFieldEnum)[keyof typeof materiaOrderByRelevanceFieldEnum];
export declare const movimientofinancieroOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly cuentaFinancieraId: "cuentaFinancieraId";
    readonly concepto: "concepto";
    readonly referencia: "referencia";
    readonly conciliadoPor: "conciliadoPor";
    readonly grupoTransferencia: "grupoTransferencia";
    readonly observaciones: "observaciones";
};
export type movimientofinancieroOrderByRelevanceFieldEnum = (typeof movimientofinancieroOrderByRelevanceFieldEnum)[keyof typeof movimientofinancieroOrderByRelevanceFieldEnum];
export declare const musicoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly observaciones: "observaciones";
};
export type musicoOrderByRelevanceFieldEnum = (typeof musicoOrderByRelevanceFieldEnum)[keyof typeof musicoOrderByRelevanceFieldEnum];
export declare const nominaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly profesorId: "profesorId";
    readonly contratoId: "contratoId";
    readonly asientoId: "asientoId";
    readonly origenCalculo: "origenCalculo";
    readonly observaciones: "observaciones";
};
export type nominaOrderByRelevanceFieldEnum = (typeof nominaOrderByRelevanceFieldEnum)[keyof typeof nominaOrderByRelevanceFieldEnum];
export declare const obligacioneconomicaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly ejercicioId: "ejercicioId";
    readonly cuotaId: "cuotaId";
    readonly facturaProveedorId: "facturaProveedorId";
    readonly nominaId: "nominaId";
    readonly repartoId: "repartoId";
    readonly observaciones: "observaciones";
};
export type obligacioneconomicaOrderByRelevanceFieldEnum = (typeof obligacioneconomicaOrderByRelevanceFieldEnum)[keyof typeof obligacioneconomicaOrderByRelevanceFieldEnum];
export declare const pagoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly proveedorId: "proveedorId";
    readonly cuentaFinancieraId: "cuentaFinancieraId";
    readonly concepto: "concepto";
    readonly referencia: "referencia";
    readonly observaciones: "observaciones";
    readonly movimientoFinancieroId: "movimientoFinancieroId";
    readonly asientoId: "asientoId";
};
export type pagoOrderByRelevanceFieldEnum = (typeof pagoOrderByRelevanceFieldEnum)[keyof typeof pagoOrderByRelevanceFieldEnum];
export declare const parametrosistemaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly codigo: "codigo";
    readonly nombre: "nombre";
    readonly valor: "valor";
    readonly descripcion: "descripcion";
};
export type parametrosistemaOrderByRelevanceFieldEnum = (typeof parametrosistemaOrderByRelevanceFieldEnum)[keyof typeof parametrosistemaOrderByRelevanceFieldEnum];
export declare const periodocontableOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly ejercicioId: "ejercicioId";
    readonly nombre: "nombre";
};
export type periodocontableOrderByRelevanceFieldEnum = (typeof periodocontableOrderByRelevanceFieldEnum)[keyof typeof periodocontableOrderByRelevanceFieldEnum];
export declare const personaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly apellidos: "apellidos";
    readonly dni: "dni";
    readonly email: "email";
    readonly telefono: "telefono";
    readonly observaciones: "observaciones";
};
export type personaOrderByRelevanceFieldEnum = (typeof personaOrderByRelevanceFieldEnum)[keyof typeof personaOrderByRelevanceFieldEnum];
export declare const personaagrupacionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly agrupacionId: "agrupacionId";
    readonly observaciones: "observaciones";
};
export type personaagrupacionOrderByRelevanceFieldEnum = (typeof personaagrupacionOrderByRelevanceFieldEnum)[keyof typeof personaagrupacionOrderByRelevanceFieldEnum];
export declare const personainstrumentoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly instrumentoId: "instrumentoId";
    readonly observaciones: "observaciones";
};
export type personainstrumentoOrderByRelevanceFieldEnum = (typeof personainstrumentoOrderByRelevanceFieldEnum)[keyof typeof personainstrumentoOrderByRelevanceFieldEnum];
export declare const personarolfuncionalOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly rolFuncionalId: "rolFuncionalId";
};
export type personarolfuncionalOrderByRelevanceFieldEnum = (typeof personarolfuncionalOrderByRelevanceFieldEnum)[keyof typeof personarolfuncionalOrderByRelevanceFieldEnum];
export declare const profesorOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly observaciones: "observaciones";
};
export type profesorOrderByRelevanceFieldEnum = (typeof profesorOrderByRelevanceFieldEnum)[keyof typeof profesorOrderByRelevanceFieldEnum];
export declare const proveedorOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombreRazonSocial: "nombreRazonSocial";
    readonly nifCif: "nifCif";
    readonly tipoProveedor: "tipoProveedor";
    readonly personaContacto: "personaContacto";
    readonly telefono: "telefono";
    readonly email: "email";
    readonly direccionFiscal: "direccionFiscal";
    readonly codigoPostal: "codigoPostal";
    readonly localidad: "localidad";
    readonly provincia: "provincia";
    readonly pais: "pais";
    readonly iban: "iban";
    readonly formaPago: "formaPago";
    readonly plazoPago: "plazoPago";
    readonly observacionesPago: "observacionesPago";
    readonly observaciones: "observaciones";
};
export type proveedorOrderByRelevanceFieldEnum = (typeof proveedorOrderByRelevanceFieldEnum)[keyof typeof proveedorOrderByRelevanceFieldEnum];
export declare const remesaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly referencia: "referencia";
    readonly observaciones: "observaciones";
};
export type remesaOrderByRelevanceFieldEnum = (typeof remesaOrderByRelevanceFieldEnum)[keyof typeof remesaOrderByRelevanceFieldEnum];
export declare const remesacuotaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly remesaId: "remesaId";
    readonly cuotaId: "cuotaId";
};
export type remesacuotaOrderByRelevanceFieldEnum = (typeof remesacuotaOrderByRelevanceFieldEnum)[keyof typeof remesacuotaOrderByRelevanceFieldEnum];
export declare const repartoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly ejercicioId: "ejercicioId";
    readonly observaciones: "observaciones";
};
export type repartoOrderByRelevanceFieldEnum = (typeof repartoOrderByRelevanceFieldEnum)[keyof typeof repartoOrderByRelevanceFieldEnum];
export declare const rolfuncionalOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly codigo: "codigo";
    readonly nombre: "nombre";
    readonly descripcion: "descripcion";
};
export type rolfuncionalOrderByRelevanceFieldEnum = (typeof rolfuncionalOrderByRelevanceFieldEnum)[keyof typeof rolfuncionalOrderByRelevanceFieldEnum];
export declare const sesionOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly tokenHash: "tokenHash";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
};
export type sesionOrderByRelevanceFieldEnum = (typeof sesionOrderByRelevanceFieldEnum)[keyof typeof sesionOrderByRelevanceFieldEnum];
export declare const tarifaOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly nombre: "nombre";
    readonly observaciones: "observaciones";
};
export type tarifaOrderByRelevanceFieldEnum = (typeof tarifaOrderByRelevanceFieldEnum)[keyof typeof tarifaOrderByRelevanceFieldEnum];
export declare const usuarioOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly personaId: "personaId";
    readonly username: "username";
    readonly passwordHash: "passwordHash";
};
export type usuarioOrderByRelevanceFieldEnum = (typeof usuarioOrderByRelevanceFieldEnum)[keyof typeof usuarioOrderByRelevanceFieldEnum];
export declare const musicoperiodoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly musicoId: "musicoId";
    readonly observaciones: "observaciones";
};
export type musicoperiodoOrderByRelevanceFieldEnum = (typeof musicoperiodoOrderByRelevanceFieldEnum)[keyof typeof musicoperiodoOrderByRelevanceFieldEnum];
export declare const alumnoperiodoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly alumnoId: "alumnoId";
    readonly observaciones: "observaciones";
};
export type alumnoperiodoOrderByRelevanceFieldEnum = (typeof alumnoperiodoOrderByRelevanceFieldEnum)[keyof typeof alumnoperiodoOrderByRelevanceFieldEnum];
export declare const profesorperiodoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly profesorId: "profesorId";
    readonly observaciones: "observaciones";
};
export type profesorperiodoOrderByRelevanceFieldEnum = (typeof profesorperiodoOrderByRelevanceFieldEnum)[keyof typeof profesorperiodoOrderByRelevanceFieldEnum];
export declare const directorperiodoOrderByRelevanceFieldEnum: {
    readonly id: "id";
    readonly directorId: "directorId";
    readonly observaciones: "observaciones";
};
export type directorperiodoOrderByRelevanceFieldEnum = (typeof directorperiodoOrderByRelevanceFieldEnum)[keyof typeof directorperiodoOrderByRelevanceFieldEnum];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'Decimal'
 */
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'alumno_motivoBaja'
 */
export type Enumalumno_motivoBajaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'alumno_motivoBaja'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'asistencia_tipoActividad'
 */
export type Enumasistencia_tipoActividadFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'asistencia_tipoActividad'>;
/**
 * Reference to a field of type 'asistencia_estado'
 */
export type Enumasistencia_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'asistencia_estado'>;
/**
 * Reference to a field of type 'auditlog_action'
 */
export type Enumauditlog_actionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'auditlog_action'>;
/**
 * Reference to a field of type 'clase_estado'
 */
export type Enumclase_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'clase_estado'>;
/**
 * Reference to a field of type 'cobro_medioPago'
 */
export type Enumcobro_medioPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cobro_medioPago'>;
/**
 * Reference to a field of type 'condicioncuota_tipo'
 */
export type Enumcondicioncuota_tipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'condicioncuota_tipo'>;
/**
 * Reference to a field of type 'condicioncuota_motivo'
 */
export type Enumcondicioncuota_motivoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'condicioncuota_motivo'>;
/**
 * Reference to a field of type 'contrato_periodicidad'
 */
export type Enumcontrato_periodicidadFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'contrato_periodicidad'>;
/**
 * Reference to a field of type 'contrato_estado'
 */
export type Enumcontrato_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'contrato_estado'>;
/**
 * Reference to a field of type 'cuentacontable_tipo'
 */
export type Enumcuentacontable_tipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cuentacontable_tipo'>;
/**
 * Reference to a field of type 'cuentacontable_naturaleza'
 */
export type Enumcuentacontable_naturalezaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cuentacontable_naturaleza'>;
/**
 * Reference to a field of type 'cuentafinanciera_tipo'
 */
export type Enumcuentafinanciera_tipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cuentafinanciera_tipo'>;
/**
 * Reference to a field of type 'cuota_estado'
 */
export type Enumcuota_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cuota_estado'>;
/**
 * Reference to a field of type 'cuota_motivoDevolucion'
 */
export type Enumcuota_motivoDevolucionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cuota_motivoDevolucion'>;
/**
 * Reference to a field of type 'ejercicio_estado'
 */
export type Enumejercicio_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ejercicio_estado'>;
/**
 * Reference to a field of type 'facturacliente_estado'
 */
export type Enumfacturacliente_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'facturacliente_estado'>;
/**
 * Reference to a field of type 'facturaproveedor_estado'
 */
export type Enumfacturaproveedor_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'facturaproveedor_estado'>;
/**
 * Reference to a field of type 'integracionnextcloud_estado'
 */
export type Enumintegracionnextcloud_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'integracionnextcloud_estado'>;
/**
 * Reference to a field of type 'lineanomina_tipo'
 */
export type Enumlineanomina_tipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'lineanomina_tipo'>;
/**
 * Reference to a field of type 'materia_tipo'
 */
export type Enummateria_tipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'materia_tipo'>;
/**
 * Reference to a field of type 'movimientofinanciero_tipo'
 */
export type Enummovimientofinanciero_tipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'movimientofinanciero_tipo'>;
/**
 * Reference to a field of type 'movimientofinanciero_conciliacion'
 */
export type Enummovimientofinanciero_conciliacionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'movimientofinanciero_conciliacion'>;
/**
 * Reference to a field of type 'nomina_estado'
 */
export type Enumnomina_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'nomina_estado'>;
/**
 * Reference to a field of type 'pago_medioPago'
 */
export type Enumpago_medioPagoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'pago_medioPago'>;
/**
 * Reference to a field of type 'parametrosistema_tipo'
 */
export type Enumparametrosistema_tipoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'parametrosistema_tipo'>;
/**
 * Reference to a field of type 'periodocontable_estado'
 */
export type Enumperiodocontable_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'periodocontable_estado'>;
/**
 * Reference to a field of type 'profesor_motivoBaja'
 */
export type Enumprofesor_motivoBajaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'profesor_motivoBaja'>;
/**
 * Reference to a field of type 'remesa_estado'
 */
export type Enumremesa_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'remesa_estado'>;
/**
 * Reference to a field of type 'reparto_estado'
 */
export type Enumreparto_estadoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'reparto_estado'>;
/**
 * Reference to a field of type 'musicoperiodo_motivoBaja'
 */
export type Enummusicoperiodo_motivoBajaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'musicoperiodo_motivoBaja'>;
/**
 * Reference to a field of type 'directorperiodo_motivoBaja'
 */
export type Enumdirectorperiodo_motivoBajaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'directorperiodo_motivoBaja'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
/**
 * Options common to all variants of `PrismaClientOptions`, regardless of whether you connect to your database through a driver adapter or through Prisma Accelerate.
 */
export interface PrismaClientBaseOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
    /**
     * Optional maximum size for the query plan cache. If not provided, a default size will be used.
     * A value of `0` can be used to disable the cache entirely. A higher cache size can improve
     * performance for applications that execute a large number of unique queries, while a smaller
     * cache size can reduce memory usage.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   queryPlanCacheMaxSize: 100,
     * })
     * ```
     */
    queryPlanCacheMaxSize?: number;
}
/**
 * `PrismaClient` options for connecting to your database through Prisma Accelerate instead of a driver adapter.
 *
 * Learn more: https://pris.ly/d/accelerate
 */
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     *
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl: string;
    adapter?: never;
}
/**
 * `PrismaClient` options for connecting to your database through a driver adapter. This is the common case in Prisma 7.
 *
 * Learn more: https://pris.ly/d/driver-adapters
 */
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     *
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     *
     * Learn more: https://pris.ly/d/driver-adapters
     *
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     *
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
/**
 * Options passed to the `PrismaClient` constructor.
 *
 * A driver adapter (or, alternatively, a Prisma Accelerate URL) is **required**. See {@link PrismaClientOptionsWithAdapter} and {@link PrismaClientOptionsWithAccelerateUrl} for the two variants. All other properties live in {@link PrismaClientBaseOptions} and are optional.
 *
 * Learn more about driver adapters: https://pris.ly/d/driver-adapters
 */
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    actuacion?: Prisma.actuacionOmit;
    actuacionagrupacion?: Prisma.actuacionagrupacionOmit;
    agrupacion?: Prisma.agrupacionOmit;
    alumno?: Prisma.alumnoOmit;
    asiento?: Prisma.asientoOmit;
    asientomovimiento?: Prisma.asientomovimientoOmit;
    asistencia?: Prisma.asistenciaOmit;
    auditlog?: Prisma.auditlogOmit;
    aula?: Prisma.aulaOmit;
    centroanalitico?: Prisma.centroanaliticoOmit;
    clase?: Prisma.claseOmit;
    cliente?: Prisma.clienteOmit;
    cobro?: Prisma.cobroOmit;
    condicioncuota?: Prisma.condicioncuotaOmit;
    contratacion?: Prisma.contratacionOmit;
    contrato?: Prisma.contratoOmit;
    cuentacontable?: Prisma.cuentacontableOmit;
    cuentafinanciera?: Prisma.cuentafinancieraOmit;
    cuota?: Prisma.cuotaOmit;
    derechocobro?: Prisma.derechocobroOmit;
    director?: Prisma.directorOmit;
    ejercicio?: Prisma.ejercicioOmit;
    facturacliente?: Prisma.facturaclienteOmit;
    facturaproveedor?: Prisma.facturaproveedorOmit;
    facturarectificativacliente?: Prisma.facturarectificativaclienteOmit;
    facturarectificativaproveedor?: Prisma.facturarectificativaproveedorOmit;
    familia?: Prisma.familiaOmit;
    seccion?: Prisma.seccionOmit;
    instrumento?: Prisma.instrumentoOmit;
    integracionnextcloud?: Prisma.integracionnextcloudOmit;
    lineaasiento?: Prisma.lineaasientoOmit;
    lineanomina?: Prisma.lineanominaOmit;
    lineareparto?: Prisma.linearepartoOmit;
    liquidacioncobro?: Prisma.liquidacioncobroOmit;
    liquidacionpago?: Prisma.liquidacionpagoOmit;
    materia?: Prisma.materiaOmit;
    movimientofinanciero?: Prisma.movimientofinancieroOmit;
    musico?: Prisma.musicoOmit;
    nomina?: Prisma.nominaOmit;
    obligacioneconomica?: Prisma.obligacioneconomicaOmit;
    pago?: Prisma.pagoOmit;
    parametrosistema?: Prisma.parametrosistemaOmit;
    periodocontable?: Prisma.periodocontableOmit;
    persona?: Prisma.personaOmit;
    personaagrupacion?: Prisma.personaagrupacionOmit;
    personainstrumento?: Prisma.personainstrumentoOmit;
    personarolfuncional?: Prisma.personarolfuncionalOmit;
    profesor?: Prisma.profesorOmit;
    proveedor?: Prisma.proveedorOmit;
    remesa?: Prisma.remesaOmit;
    remesacuota?: Prisma.remesacuotaOmit;
    reparto?: Prisma.repartoOmit;
    rolfuncional?: Prisma.rolfuncionalOmit;
    sesion?: Prisma.sesionOmit;
    tarifa?: Prisma.tarifaOmit;
    usuario?: Prisma.usuarioOmit;
    musicoperiodo?: Prisma.musicoperiodoOmit;
    alumnoperiodo?: Prisma.alumnoperiodoOmit;
    profesorperiodo?: Prisma.profesorperiodoOmit;
    directorperiodo?: Prisma.directorperiodoOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map