
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model Driver
 * 
 */
export type Driver = $Result.DefaultSelection<Prisma.$DriverPayload>
/**
 * Model Trip
 * 
 */
export type Trip = $Result.DefaultSelection<Prisma.$TripPayload>
/**
 * Model MaintenanceLog
 * 
 */
export type MaintenanceLog = $Result.DefaultSelection<Prisma.$MaintenanceLogPayload>
/**
 * Model FuelLog
 * 
 */
export type FuelLog = $Result.DefaultSelection<Prisma.$FuelLogPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  fleet_manager: 'fleet_manager',
  driver: 'driver',
  safety_officer: 'safety_officer',
  financial_analyst: 'financial_analyst'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const VehicleStatus: {
  available: 'available',
  on_trip: 'on_trip',
  in_shop: 'in_shop',
  retired: 'retired'
};

export type VehicleStatus = (typeof VehicleStatus)[keyof typeof VehicleStatus]


export const DriverStatus: {
  available: 'available',
  on_trip: 'on_trip',
  off_duty: 'off_duty',
  suspended: 'suspended'
};

export type DriverStatus = (typeof DriverStatus)[keyof typeof DriverStatus]


export const TripStatus: {
  draft: 'draft',
  dispatched: 'dispatched',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type TripStatus = (typeof TripStatus)[keyof typeof TripStatus]


export const MaintenanceStatus: {
  active: 'active',
  closed: 'closed'
};

export type MaintenanceStatus = (typeof MaintenanceStatus)[keyof typeof MaintenanceStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type VehicleStatus = $Enums.VehicleStatus

export const VehicleStatus: typeof $Enums.VehicleStatus

export type DriverStatus = $Enums.DriverStatus

export const DriverStatus: typeof $Enums.DriverStatus

export type TripStatus = $Enums.TripStatus

export const TripStatus: typeof $Enums.TripStatus

export type MaintenanceStatus = $Enums.MaintenanceStatus

export const MaintenanceStatus: typeof $Enums.MaintenanceStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driver`: Exposes CRUD operations for the **Driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.DriverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenanceLog`: Exposes CRUD operations for the **MaintenanceLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenanceLogs
    * const maintenanceLogs = await prisma.maintenanceLog.findMany()
    * ```
    */
  get maintenanceLog(): Prisma.MaintenanceLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fuelLog`: Exposes CRUD operations for the **FuelLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FuelLogs
    * const fuelLogs = await prisma.fuelLog.findMany()
    * ```
    */
  get fuelLog(): Prisma.FuelLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Vehicle: 'Vehicle',
    Driver: 'Driver',
    Trip: 'Trip',
    MaintenanceLog: 'MaintenanceLog',
    FuelLog: 'FuelLog',
    Expense: 'Expense',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "vehicle" | "driver" | "trip" | "maintenanceLog" | "fuelLog" | "expense" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      Driver: {
        payload: Prisma.$DriverPayload<ExtArgs>
        fields: Prisma.DriverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findFirst: {
            args: Prisma.DriverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findMany: {
            args: Prisma.DriverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          create: {
            args: Prisma.DriverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          createMany: {
            args: Prisma.DriverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          delete: {
            args: Prisma.DriverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          update: {
            args: Prisma.DriverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          deleteMany: {
            args: Prisma.DriverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DriverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          upsert: {
            args: Prisma.DriverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.DriverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
          }
        }
      }
      Trip: {
        payload: Prisma.$TripPayload<ExtArgs>
        fields: Prisma.TripFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TripFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TripFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findFirst: {
            args: Prisma.TripFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TripFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          findMany: {
            args: Prisma.TripFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          create: {
            args: Prisma.TripCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          createMany: {
            args: Prisma.TripCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TripCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          delete: {
            args: Prisma.TripDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          update: {
            args: Prisma.TripUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          deleteMany: {
            args: Prisma.TripDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TripUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TripUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>[]
          }
          upsert: {
            args: Prisma.TripUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TripPayload>
          }
          aggregate: {
            args: Prisma.TripAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrip>
          }
          groupBy: {
            args: Prisma.TripGroupByArgs<ExtArgs>
            result: $Utils.Optional<TripGroupByOutputType>[]
          }
          count: {
            args: Prisma.TripCountArgs<ExtArgs>
            result: $Utils.Optional<TripCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceLog: {
        payload: Prisma.$MaintenanceLogPayload<ExtArgs>
        fields: Prisma.MaintenanceLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          findFirst: {
            args: Prisma.MaintenanceLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          findMany: {
            args: Prisma.MaintenanceLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>[]
          }
          create: {
            args: Prisma.MaintenanceLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          createMany: {
            args: Prisma.MaintenanceLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>[]
          }
          delete: {
            args: Prisma.MaintenanceLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          update: {
            args: Prisma.MaintenanceLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaintenanceLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>[]
          }
          upsert: {
            args: Prisma.MaintenanceLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceLogPayload>
          }
          aggregate: {
            args: Prisma.MaintenanceLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceLog>
          }
          groupBy: {
            args: Prisma.MaintenanceLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceLogCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceLogCountAggregateOutputType> | number
          }
        }
      }
      FuelLog: {
        payload: Prisma.$FuelLogPayload<ExtArgs>
        fields: Prisma.FuelLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuelLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuelLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelLogPayload>
          }
          findFirst: {
            args: Prisma.FuelLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuelLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelLogPayload>
          }
          findMany: {
            args: Prisma.FuelLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelLogPayload>[]
          }
          create: {
            args: Prisma.FuelLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelLogPayload>
          }
          createMany: {
            args: Prisma.FuelLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FuelLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelLogPayload>[]
          }
          delete: {
            args: Prisma.FuelLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelLogPayload>
          }
          update: {
            args: Prisma.FuelLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelLogPayload>
          }
          deleteMany: {
            args: Prisma.FuelLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuelLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FuelLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelLogPayload>[]
          }
          upsert: {
            args: Prisma.FuelLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuelLogPayload>
          }
          aggregate: {
            args: Prisma.FuelLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuelLog>
          }
          groupBy: {
            args: Prisma.FuelLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuelLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuelLogCountArgs<ExtArgs>
            result: $Utils.Optional<FuelLogCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    omit?: Prisma.GlobalOmitConfig
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
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    vehicle?: VehicleOmit
    driver?: DriverOmit
    trip?: TripOmit
    maintenanceLog?: MaintenanceLogOmit
    fuelLog?: FuelLogOmit
    expense?: ExpenseOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    drivers: number
    createdTrips: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drivers?: boolean | UserCountOutputTypeCountDriversArgs
    createdTrips?: boolean | UserCountOutputTypeCountCreatedTripsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDriversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    trips: number
    maintenanceLogs: number
    fuelLogs: number
    expenses: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | VehicleCountOutputTypeCountTripsArgs
    maintenanceLogs?: boolean | VehicleCountOutputTypeCountMaintenanceLogsArgs
    fuelLogs?: boolean | VehicleCountOutputTypeCountFuelLogsArgs
    expenses?: boolean | VehicleCountOutputTypeCountExpensesArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountMaintenanceLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceLogWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountFuelLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuelLogWhereInput
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }


  /**
   * Count Type DriverCountOutputType
   */

  export type DriverCountOutputType = {
    trips: number
  }

  export type DriverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | DriverCountOutputTypeCountTripsArgs
  }

  // Custom InputTypes
  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverCountOutputType
     */
    select?: DriverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
  }


  /**
   * Count Type TripCountOutputType
   */

  export type TripCountOutputType = {
    fuelLogs: number
    expenses: number
  }

  export type TripCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fuelLogs?: boolean | TripCountOutputTypeCountFuelLogsArgs
    expenses?: boolean | TripCountOutputTypeCountExpensesArgs
  }

  // Custom InputTypes
  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     */
    select?: TripCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountFuelLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuelLogWhereInput
  }

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    drivers?: boolean | User$driversArgs<ExtArgs>
    createdTrips?: boolean | User$createdTripsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drivers?: boolean | User$driversArgs<ExtArgs>
    createdTrips?: boolean | User$createdTripsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      drivers: Prisma.$DriverPayload<ExtArgs>[]
      createdTrips: Prisma.$TripPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drivers<T extends User$driversArgs<ExtArgs> = {}>(args?: Subset<T, User$driversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdTrips<T extends User$createdTripsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdTripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.drivers
   */
  export type User$driversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    cursor?: DriverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * User.createdTrips
   */
  export type User$createdTripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    maxLoadCapacityKg: Decimal | null
    odometerKm: Decimal | null
    acquisitionCost: Decimal | null
  }

  export type VehicleSumAggregateOutputType = {
    maxLoadCapacityKg: Decimal | null
    odometerKm: Decimal | null
    acquisitionCost: Decimal | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    registrationNumber: string | null
    nameModel: string | null
    type: string | null
    maxLoadCapacityKg: Decimal | null
    odometerKm: Decimal | null
    acquisitionCost: Decimal | null
    status: $Enums.VehicleStatus | null
    region: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    registrationNumber: string | null
    nameModel: string | null
    type: string | null
    maxLoadCapacityKg: Decimal | null
    odometerKm: Decimal | null
    acquisitionCost: Decimal | null
    status: $Enums.VehicleStatus | null
    region: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    registrationNumber: number
    nameModel: number
    type: number
    maxLoadCapacityKg: number
    odometerKm: number
    acquisitionCost: number
    status: number
    region: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    maxLoadCapacityKg?: true
    odometerKm?: true
    acquisitionCost?: true
  }

  export type VehicleSumAggregateInputType = {
    maxLoadCapacityKg?: true
    odometerKm?: true
    acquisitionCost?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    registrationNumber?: true
    nameModel?: true
    type?: true
    maxLoadCapacityKg?: true
    odometerKm?: true
    acquisitionCost?: true
    status?: true
    region?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    registrationNumber?: true
    nameModel?: true
    type?: true
    maxLoadCapacityKg?: true
    odometerKm?: true
    acquisitionCost?: true
    status?: true
    region?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    registrationNumber?: true
    nameModel?: true
    type?: true
    maxLoadCapacityKg?: true
    odometerKm?: true
    acquisitionCost?: true
    status?: true
    region?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    registrationNumber: string
    nameModel: string | null
    type: string | null
    maxLoadCapacityKg: Decimal | null
    odometerKm: Decimal | null
    acquisitionCost: Decimal | null
    status: $Enums.VehicleStatus
    region: string | null
    createdAt: Date
    updatedAt: Date
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationNumber?: boolean
    nameModel?: boolean
    type?: boolean
    maxLoadCapacityKg?: boolean
    odometerKm?: boolean
    acquisitionCost?: boolean
    status?: boolean
    region?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trips?: boolean | Vehicle$tripsArgs<ExtArgs>
    maintenanceLogs?: boolean | Vehicle$maintenanceLogsArgs<ExtArgs>
    fuelLogs?: boolean | Vehicle$fuelLogsArgs<ExtArgs>
    expenses?: boolean | Vehicle$expensesArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationNumber?: boolean
    nameModel?: boolean
    type?: boolean
    maxLoadCapacityKg?: boolean
    odometerKm?: boolean
    acquisitionCost?: boolean
    status?: boolean
    region?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrationNumber?: boolean
    nameModel?: boolean
    type?: boolean
    maxLoadCapacityKg?: boolean
    odometerKm?: boolean
    acquisitionCost?: boolean
    status?: boolean
    region?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    registrationNumber?: boolean
    nameModel?: boolean
    type?: boolean
    maxLoadCapacityKg?: boolean
    odometerKm?: boolean
    acquisitionCost?: boolean
    status?: boolean
    region?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "registrationNumber" | "nameModel" | "type" | "maxLoadCapacityKg" | "odometerKm" | "acquisitionCost" | "status" | "region" | "createdAt" | "updatedAt", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trips?: boolean | Vehicle$tripsArgs<ExtArgs>
    maintenanceLogs?: boolean | Vehicle$maintenanceLogsArgs<ExtArgs>
    fuelLogs?: boolean | Vehicle$fuelLogsArgs<ExtArgs>
    expenses?: boolean | Vehicle$expensesArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      trips: Prisma.$TripPayload<ExtArgs>[]
      maintenanceLogs: Prisma.$MaintenanceLogPayload<ExtArgs>[]
      fuelLogs: Prisma.$FuelLogPayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      registrationNumber: string
      nameModel: string | null
      type: string | null
      maxLoadCapacityKg: Prisma.Decimal | null
      odometerKm: Prisma.Decimal | null
      acquisitionCost: Prisma.Decimal | null
      status: $Enums.VehicleStatus
      region: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trips<T extends Vehicle$tripsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$tripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    maintenanceLogs<T extends Vehicle$maintenanceLogsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$maintenanceLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fuelLogs<T extends Vehicle$fuelLogsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$fuelLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends Vehicle$expensesArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly registrationNumber: FieldRef<"Vehicle", 'String'>
    readonly nameModel: FieldRef<"Vehicle", 'String'>
    readonly type: FieldRef<"Vehicle", 'String'>
    readonly maxLoadCapacityKg: FieldRef<"Vehicle", 'Decimal'>
    readonly odometerKm: FieldRef<"Vehicle", 'Decimal'>
    readonly acquisitionCost: FieldRef<"Vehicle", 'Decimal'>
    readonly status: FieldRef<"Vehicle", 'VehicleStatus'>
    readonly region: FieldRef<"Vehicle", 'String'>
    readonly createdAt: FieldRef<"Vehicle", 'DateTime'>
    readonly updatedAt: FieldRef<"Vehicle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.trips
   */
  export type Vehicle$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Vehicle.maintenanceLogs
   */
  export type Vehicle$maintenanceLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    where?: MaintenanceLogWhereInput
    orderBy?: MaintenanceLogOrderByWithRelationInput | MaintenanceLogOrderByWithRelationInput[]
    cursor?: MaintenanceLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceLogScalarFieldEnum | MaintenanceLogScalarFieldEnum[]
  }

  /**
   * Vehicle.fuelLogs
   */
  export type Vehicle$fuelLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    where?: FuelLogWhereInput
    orderBy?: FuelLogOrderByWithRelationInput | FuelLogOrderByWithRelationInput[]
    cursor?: FuelLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuelLogScalarFieldEnum | FuelLogScalarFieldEnum[]
  }

  /**
   * Vehicle.expenses
   */
  export type Vehicle$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model Driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverAvgAggregateOutputType = {
    safetyScore: number | null
  }

  export type DriverSumAggregateOutputType = {
    safetyScore: number | null
  }

  export type DriverMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    licenseNumber: string | null
    licenseCategory: string | null
    licenseExpiryDate: Date | null
    contactNumber: string | null
    safetyScore: number | null
    status: $Enums.DriverStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    licenseNumber: string | null
    licenseCategory: string | null
    licenseExpiryDate: Date | null
    contactNumber: string | null
    safetyScore: number | null
    status: $Enums.DriverStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    licenseNumber: number
    licenseCategory: number
    licenseExpiryDate: number
    contactNumber: number
    safetyScore: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DriverAvgAggregateInputType = {
    safetyScore?: true
  }

  export type DriverSumAggregateInputType = {
    safetyScore?: true
  }

  export type DriverMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    licenseNumber?: true
    licenseCategory?: true
    licenseExpiryDate?: true
    contactNumber?: true
    safetyScore?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    licenseNumber?: true
    licenseCategory?: true
    licenseExpiryDate?: true
    contactNumber?: true
    safetyScore?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    licenseNumber?: true
    licenseCategory?: true
    licenseExpiryDate?: true
    contactNumber?: true
    safetyScore?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Driver to aggregate.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type DriverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithAggregationInput | DriverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: DriverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _avg?: DriverAvgAggregateInputType
    _sum?: DriverSumAggregateInputType
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    id: string
    userId: string | null
    name: string
    licenseNumber: string
    licenseCategory: string | null
    licenseExpiryDate: Date
    contactNumber: string | null
    safetyScore: number
    status: $Enums.DriverStatus
    createdAt: Date
    updatedAt: Date
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends DriverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type DriverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    licenseNumber?: boolean
    licenseCategory?: boolean
    licenseExpiryDate?: boolean
    contactNumber?: boolean
    safetyScore?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Driver$userArgs<ExtArgs>
    trips?: boolean | Driver$tripsArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    licenseNumber?: boolean
    licenseCategory?: boolean
    licenseExpiryDate?: boolean
    contactNumber?: boolean
    safetyScore?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Driver$userArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    licenseNumber?: boolean
    licenseCategory?: boolean
    licenseExpiryDate?: boolean
    contactNumber?: boolean
    safetyScore?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Driver$userArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    licenseNumber?: boolean
    licenseCategory?: boolean
    licenseExpiryDate?: boolean
    contactNumber?: boolean
    safetyScore?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DriverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "licenseNumber" | "licenseCategory" | "licenseExpiryDate" | "contactNumber" | "safetyScore" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["driver"]>
  export type DriverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Driver$userArgs<ExtArgs>
    trips?: boolean | Driver$tripsArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DriverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Driver$userArgs<ExtArgs>
  }
  export type DriverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Driver$userArgs<ExtArgs>
  }

  export type $DriverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Driver"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      trips: Prisma.$TripPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      name: string
      licenseNumber: string
      licenseCategory: string | null
      licenseExpiryDate: Date
      contactNumber: string | null
      safetyScore: number
      status: $Enums.DriverStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["driver"]>
    composites: {}
  }

  type DriverGetPayload<S extends boolean | null | undefined | DriverDefaultArgs> = $Result.GetResult<Prisma.$DriverPayload, S>

  type DriverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface DriverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Driver'], meta: { name: 'Driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {DriverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverFindUniqueArgs>(args: SelectSubset<T, DriverFindUniqueArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverFindFirstArgs>(args?: SelectSubset<T, DriverFindFirstArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWithIdOnly = await prisma.driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverFindManyArgs>(args?: SelectSubset<T, DriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Driver.
     * @param {DriverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends DriverCreateArgs>(args: SelectSubset<T, DriverCreateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {DriverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverCreateManyArgs>(args?: SelectSubset<T, DriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drivers and returns the data saved in the database.
     * @param {DriverCreateManyAndReturnArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriverCreateManyAndReturnArgs>(args?: SelectSubset<T, DriverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Driver.
     * @param {DriverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends DriverDeleteArgs>(args: SelectSubset<T, DriverDeleteArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Driver.
     * @param {DriverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverUpdateArgs>(args: SelectSubset<T, DriverUpdateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {DriverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverDeleteManyArgs>(args?: SelectSubset<T, DriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverUpdateManyArgs>(args: SelectSubset<T, DriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers and returns the data updated in the database.
     * @param {DriverUpdateManyAndReturnArgs} args - Arguments to update many Drivers.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DriverUpdateManyAndReturnArgs>(args: SelectSubset<T, DriverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Driver.
     * @param {DriverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends DriverUpsertArgs>(args: SelectSubset<T, DriverUpsertArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends DriverCountArgs>(
      args?: Subset<T, DriverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends DriverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverGroupByArgs['orderBy'] }
        : { orderBy?: DriverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Driver model
   */
  readonly fields: DriverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Driver$userArgs<ExtArgs> = {}>(args?: Subset<T, Driver$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    trips<T extends Driver$tripsArgs<ExtArgs> = {}>(args?: Subset<T, Driver$tripsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Driver model
   */
  interface DriverFieldRefs {
    readonly id: FieldRef<"Driver", 'String'>
    readonly userId: FieldRef<"Driver", 'String'>
    readonly name: FieldRef<"Driver", 'String'>
    readonly licenseNumber: FieldRef<"Driver", 'String'>
    readonly licenseCategory: FieldRef<"Driver", 'String'>
    readonly licenseExpiryDate: FieldRef<"Driver", 'DateTime'>
    readonly contactNumber: FieldRef<"Driver", 'String'>
    readonly safetyScore: FieldRef<"Driver", 'Int'>
    readonly status: FieldRef<"Driver", 'DriverStatus'>
    readonly createdAt: FieldRef<"Driver", 'DateTime'>
    readonly updatedAt: FieldRef<"Driver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Driver findUnique
   */
  export type DriverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findUniqueOrThrow
   */
  export type DriverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findFirst
   */
  export type DriverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findFirstOrThrow
   */
  export type DriverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findMany
   */
  export type DriverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver create
   */
  export type DriverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to create a Driver.
     */
    data: XOR<DriverCreateInput, DriverUncheckedCreateInput>
  }

  /**
   * Driver createMany
   */
  export type DriverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Driver createManyAndReturn
   */
  export type DriverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Driver update
   */
  export type DriverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to update a Driver.
     */
    data: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
    /**
     * Choose, which Driver to update.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver updateMany
   */
  export type DriverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
  }

  /**
   * Driver updateManyAndReturn
   */
  export type DriverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Driver upsert
   */
  export type DriverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The filter to search for the Driver to update in case it exists.
     */
    where: DriverWhereUniqueInput
    /**
     * In case the Driver found by the `where` argument doesn't exist, create a new Driver with this data.
     */
    create: XOR<DriverCreateInput, DriverUncheckedCreateInput>
    /**
     * In case the Driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
  }

  /**
   * Driver delete
   */
  export type DriverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter which Driver to delete.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver deleteMany
   */
  export type DriverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers to delete
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to delete.
     */
    limit?: number
  }

  /**
   * Driver.user
   */
  export type Driver$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Driver.trips
   */
  export type Driver$tripsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Driver without action
   */
  export type DriverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
  }


  /**
   * Model Trip
   */

  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    cargoWeightKg: Decimal | null
    plannedDistanceKm: Decimal | null
    actualDistanceKm: Decimal | null
    fuelConsumedLiters: Decimal | null
  }

  export type TripSumAggregateOutputType = {
    cargoWeightKg: Decimal | null
    plannedDistanceKm: Decimal | null
    actualDistanceKm: Decimal | null
    fuelConsumedLiters: Decimal | null
  }

  export type TripMinAggregateOutputType = {
    id: string | null
    source: string | null
    destination: string | null
    vehicleId: string | null
    driverId: string | null
    cargoWeightKg: Decimal | null
    plannedDistanceKm: Decimal | null
    actualDistanceKm: Decimal | null
    fuelConsumedLiters: Decimal | null
    status: $Enums.TripStatus | null
    dispatchedAt: Date | null
    completedAt: Date | null
    aiRecommended: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripMaxAggregateOutputType = {
    id: string | null
    source: string | null
    destination: string | null
    vehicleId: string | null
    driverId: string | null
    cargoWeightKg: Decimal | null
    plannedDistanceKm: Decimal | null
    actualDistanceKm: Decimal | null
    fuelConsumedLiters: Decimal | null
    status: $Enums.TripStatus | null
    dispatchedAt: Date | null
    completedAt: Date | null
    aiRecommended: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    source: number
    destination: number
    vehicleId: number
    driverId: number
    cargoWeightKg: number
    plannedDistanceKm: number
    actualDistanceKm: number
    fuelConsumedLiters: number
    status: number
    dispatchedAt: number
    completedAt: number
    aiRecommended: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    cargoWeightKg?: true
    plannedDistanceKm?: true
    actualDistanceKm?: true
    fuelConsumedLiters?: true
  }

  export type TripSumAggregateInputType = {
    cargoWeightKg?: true
    plannedDistanceKm?: true
    actualDistanceKm?: true
    fuelConsumedLiters?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    source?: true
    destination?: true
    vehicleId?: true
    driverId?: true
    cargoWeightKg?: true
    plannedDistanceKm?: true
    actualDistanceKm?: true
    fuelConsumedLiters?: true
    status?: true
    dispatchedAt?: true
    completedAt?: true
    aiRecommended?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    source?: true
    destination?: true
    vehicleId?: true
    driverId?: true
    cargoWeightKg?: true
    plannedDistanceKm?: true
    actualDistanceKm?: true
    fuelConsumedLiters?: true
    status?: true
    dispatchedAt?: true
    completedAt?: true
    aiRecommended?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    source?: true
    destination?: true
    vehicleId?: true
    driverId?: true
    cargoWeightKg?: true
    plannedDistanceKm?: true
    actualDistanceKm?: true
    fuelConsumedLiters?: true
    status?: true
    dispatchedAt?: true
    completedAt?: true
    aiRecommended?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TripAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trip to aggregate.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TripWhereInput
    orderBy?: TripOrderByWithAggregationInput | TripOrderByWithAggregationInput[]
    by: TripScalarFieldEnum[] | TripScalarFieldEnum
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }

  export type TripGroupByOutputType = {
    id: string
    source: string
    destination: string
    vehicleId: string
    driverId: string
    cargoWeightKg: Decimal | null
    plannedDistanceKm: Decimal | null
    actualDistanceKm: Decimal | null
    fuelConsumedLiters: Decimal | null
    status: $Enums.TripStatus
    dispatchedAt: Date | null
    completedAt: Date | null
    aiRecommended: boolean
    createdBy: string
    createdAt: Date
    updatedAt: Date
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    destination?: boolean
    vehicleId?: boolean
    driverId?: boolean
    cargoWeightKg?: boolean
    plannedDistanceKm?: boolean
    actualDistanceKm?: boolean
    fuelConsumedLiters?: boolean
    status?: boolean
    dispatchedAt?: boolean
    completedAt?: boolean
    aiRecommended?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    fuelLogs?: boolean | Trip$fuelLogsArgs<ExtArgs>
    expenses?: boolean | Trip$expensesArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    destination?: boolean
    vehicleId?: boolean
    driverId?: boolean
    cargoWeightKg?: boolean
    plannedDistanceKm?: boolean
    actualDistanceKm?: boolean
    fuelConsumedLiters?: boolean
    status?: boolean
    dispatchedAt?: boolean
    completedAt?: boolean
    aiRecommended?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    source?: boolean
    destination?: boolean
    vehicleId?: boolean
    driverId?: boolean
    cargoWeightKg?: boolean
    plannedDistanceKm?: boolean
    actualDistanceKm?: boolean
    fuelConsumedLiters?: boolean
    status?: boolean
    dispatchedAt?: boolean
    completedAt?: boolean
    aiRecommended?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trip"]>

  export type TripSelectScalar = {
    id?: boolean
    source?: boolean
    destination?: boolean
    vehicleId?: boolean
    driverId?: boolean
    cargoWeightKg?: boolean
    plannedDistanceKm?: boolean
    actualDistanceKm?: boolean
    fuelConsumedLiters?: boolean
    status?: boolean
    dispatchedAt?: boolean
    completedAt?: boolean
    aiRecommended?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TripOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "source" | "destination" | "vehicleId" | "driverId" | "cargoWeightKg" | "plannedDistanceKm" | "actualDistanceKm" | "fuelConsumedLiters" | "status" | "dispatchedAt" | "completedAt" | "aiRecommended" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["trip"]>
  export type TripInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    fuelLogs?: boolean | Trip$fuelLogsArgs<ExtArgs>
    expenses?: boolean | Trip$expensesArgs<ExtArgs>
    _count?: boolean | TripCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TripIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TripIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TripPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trip"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      driver: Prisma.$DriverPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      fuelLogs: Prisma.$FuelLogPayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      source: string
      destination: string
      vehicleId: string
      driverId: string
      cargoWeightKg: Prisma.Decimal | null
      plannedDistanceKm: Prisma.Decimal | null
      actualDistanceKm: Prisma.Decimal | null
      fuelConsumedLiters: Prisma.Decimal | null
      status: $Enums.TripStatus
      dispatchedAt: Date | null
      completedAt: Date | null
      aiRecommended: boolean
      createdBy: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["trip"]>
    composites: {}
  }

  type TripGetPayload<S extends boolean | null | undefined | TripDefaultArgs> = $Result.GetResult<Prisma.$TripPayload, S>

  type TripCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TripFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TripCountAggregateInputType | true
    }

  export interface TripDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trip'], meta: { name: 'Trip' } }
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TripFindUniqueArgs>(args: SelectSubset<T, TripFindUniqueArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trip that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(args: SelectSubset<T, TripFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TripFindFirstArgs>(args?: SelectSubset<T, TripFindFirstArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trip that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(args?: SelectSubset<T, TripFindFirstOrThrowArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TripFindManyArgs>(args?: SelectSubset<T, TripFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
     */
    create<T extends TripCreateArgs>(args: SelectSubset<T, TripCreateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trips.
     * @param {TripCreateManyArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TripCreateManyArgs>(args?: SelectSubset<T, TripCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trips and returns the data saved in the database.
     * @param {TripCreateManyAndReturnArgs} args - Arguments to create many Trips.
     * @example
     * // Create many Trips
     * const trip = await prisma.trip.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TripCreateManyAndReturnArgs>(args?: SelectSubset<T, TripCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
     */
    delete<T extends TripDeleteArgs>(args: SelectSubset<T, TripDeleteArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TripUpdateArgs>(args: SelectSubset<T, TripUpdateArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TripDeleteManyArgs>(args?: SelectSubset<T, TripDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TripUpdateManyArgs>(args: SelectSubset<T, TripUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips and returns the data updated in the database.
     * @param {TripUpdateManyAndReturnArgs} args - Arguments to update many Trips.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trips and only return the `id`
     * const tripWithIdOnly = await prisma.trip.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TripUpdateManyAndReturnArgs>(args: SelectSubset<T, TripUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
     */
    upsert<T extends TripUpsertArgs>(args: SelectSubset<T, TripUpsertArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): Prisma.PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trip model
   */
  readonly fields: TripFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TripClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fuelLogs<T extends Trip$fuelLogsArgs<ExtArgs> = {}>(args?: Subset<T, Trip$fuelLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends Trip$expensesArgs<ExtArgs> = {}>(args?: Subset<T, Trip$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trip model
   */
  interface TripFieldRefs {
    readonly id: FieldRef<"Trip", 'String'>
    readonly source: FieldRef<"Trip", 'String'>
    readonly destination: FieldRef<"Trip", 'String'>
    readonly vehicleId: FieldRef<"Trip", 'String'>
    readonly driverId: FieldRef<"Trip", 'String'>
    readonly cargoWeightKg: FieldRef<"Trip", 'Decimal'>
    readonly plannedDistanceKm: FieldRef<"Trip", 'Decimal'>
    readonly actualDistanceKm: FieldRef<"Trip", 'Decimal'>
    readonly fuelConsumedLiters: FieldRef<"Trip", 'Decimal'>
    readonly status: FieldRef<"Trip", 'TripStatus'>
    readonly dispatchedAt: FieldRef<"Trip", 'DateTime'>
    readonly completedAt: FieldRef<"Trip", 'DateTime'>
    readonly aiRecommended: FieldRef<"Trip", 'Boolean'>
    readonly createdBy: FieldRef<"Trip", 'String'>
    readonly createdAt: FieldRef<"Trip", 'DateTime'>
    readonly updatedAt: FieldRef<"Trip", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Trip findUnique
   */
  export type TripFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip findFirst
   */
  export type TripFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trip to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip findMany
   */
  export type TripFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter, which Trips to fetch.
     */
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     */
    orderBy?: TripOrderByWithRelationInput | TripOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     */
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     */
    distinct?: TripScalarFieldEnum | TripScalarFieldEnum[]
  }

  /**
   * Trip create
   */
  export type TripCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to create a Trip.
     */
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }

  /**
   * Trip createMany
   */
  export type TripCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trip createManyAndReturn
   */
  export type TripCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to create many Trips.
     */
    data: TripCreateManyInput | TripCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip update
   */
  export type TripUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The data needed to update a Trip.
     */
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
  }

  /**
   * Trip updateManyAndReturn
   */
  export type TripUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * The data used to update Trips.
     */
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trip upsert
   */
  export type TripUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * The filter to search for the Trip to update in case it exists.
     */
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     */
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }

  /**
   * Trip delete
   */
  export type TripDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    /**
     * Filter which Trip to delete.
     */
    where: TripWhereUniqueInput
  }

  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trips to delete
     */
    where?: TripWhereInput
    /**
     * Limit how many Trips to delete.
     */
    limit?: number
  }

  /**
   * Trip.fuelLogs
   */
  export type Trip$fuelLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    where?: FuelLogWhereInput
    orderBy?: FuelLogOrderByWithRelationInput | FuelLogOrderByWithRelationInput[]
    cursor?: FuelLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuelLogScalarFieldEnum | FuelLogScalarFieldEnum[]
  }

  /**
   * Trip.expenses
   */
  export type Trip$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Trip without action
   */
  export type TripDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
  }


  /**
   * Model MaintenanceLog
   */

  export type AggregateMaintenanceLog = {
    _count: MaintenanceLogCountAggregateOutputType | null
    _avg: MaintenanceLogAvgAggregateOutputType | null
    _sum: MaintenanceLogSumAggregateOutputType | null
    _min: MaintenanceLogMinAggregateOutputType | null
    _max: MaintenanceLogMaxAggregateOutputType | null
  }

  export type MaintenanceLogAvgAggregateOutputType = {
    cost: Decimal | null
    odometerAtService: Decimal | null
  }

  export type MaintenanceLogSumAggregateOutputType = {
    cost: Decimal | null
    odometerAtService: Decimal | null
  }

  export type MaintenanceLogMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    type: string | null
    description: string | null
    cost: Decimal | null
    status: $Enums.MaintenanceStatus | null
    scheduledDate: Date | null
    closedDate: Date | null
    odometerAtService: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaintenanceLogMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    type: string | null
    description: string | null
    cost: Decimal | null
    status: $Enums.MaintenanceStatus | null
    scheduledDate: Date | null
    closedDate: Date | null
    odometerAtService: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaintenanceLogCountAggregateOutputType = {
    id: number
    vehicleId: number
    type: number
    description: number
    cost: number
    status: number
    scheduledDate: number
    closedDate: number
    odometerAtService: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaintenanceLogAvgAggregateInputType = {
    cost?: true
    odometerAtService?: true
  }

  export type MaintenanceLogSumAggregateInputType = {
    cost?: true
    odometerAtService?: true
  }

  export type MaintenanceLogMinAggregateInputType = {
    id?: true
    vehicleId?: true
    type?: true
    description?: true
    cost?: true
    status?: true
    scheduledDate?: true
    closedDate?: true
    odometerAtService?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaintenanceLogMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    type?: true
    description?: true
    cost?: true
    status?: true
    scheduledDate?: true
    closedDate?: true
    odometerAtService?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaintenanceLogCountAggregateInputType = {
    id?: true
    vehicleId?: true
    type?: true
    description?: true
    cost?: true
    status?: true
    scheduledDate?: true
    closedDate?: true
    odometerAtService?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaintenanceLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceLog to aggregate.
     */
    where?: MaintenanceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceLogs to fetch.
     */
    orderBy?: MaintenanceLogOrderByWithRelationInput | MaintenanceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenanceLogs
    **/
    _count?: true | MaintenanceLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintenanceLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintenanceLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceLogMaxAggregateInputType
  }

  export type GetMaintenanceLogAggregateType<T extends MaintenanceLogAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenanceLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceLog[P]>
      : GetScalarType<T[P], AggregateMaintenanceLog[P]>
  }




  export type MaintenanceLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceLogWhereInput
    orderBy?: MaintenanceLogOrderByWithAggregationInput | MaintenanceLogOrderByWithAggregationInput[]
    by: MaintenanceLogScalarFieldEnum[] | MaintenanceLogScalarFieldEnum
    having?: MaintenanceLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceLogCountAggregateInputType | true
    _avg?: MaintenanceLogAvgAggregateInputType
    _sum?: MaintenanceLogSumAggregateInputType
    _min?: MaintenanceLogMinAggregateInputType
    _max?: MaintenanceLogMaxAggregateInputType
  }

  export type MaintenanceLogGroupByOutputType = {
    id: string
    vehicleId: string
    type: string
    description: string | null
    cost: Decimal | null
    status: $Enums.MaintenanceStatus
    scheduledDate: Date
    closedDate: Date | null
    odometerAtService: Decimal | null
    createdAt: Date
    updatedAt: Date
    _count: MaintenanceLogCountAggregateOutputType | null
    _avg: MaintenanceLogAvgAggregateOutputType | null
    _sum: MaintenanceLogSumAggregateOutputType | null
    _min: MaintenanceLogMinAggregateOutputType | null
    _max: MaintenanceLogMaxAggregateOutputType | null
  }

  type GetMaintenanceLogGroupByPayload<T extends MaintenanceLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceLogGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceLogGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    type?: boolean
    description?: boolean
    cost?: boolean
    status?: boolean
    scheduledDate?: boolean
    closedDate?: boolean
    odometerAtService?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceLog"]>

  export type MaintenanceLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    type?: boolean
    description?: boolean
    cost?: boolean
    status?: boolean
    scheduledDate?: boolean
    closedDate?: boolean
    odometerAtService?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceLog"]>

  export type MaintenanceLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    type?: boolean
    description?: boolean
    cost?: boolean
    status?: boolean
    scheduledDate?: boolean
    closedDate?: boolean
    odometerAtService?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceLog"]>

  export type MaintenanceLogSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    type?: boolean
    description?: boolean
    cost?: boolean
    status?: boolean
    scheduledDate?: boolean
    closedDate?: boolean
    odometerAtService?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MaintenanceLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "type" | "description" | "cost" | "status" | "scheduledDate" | "closedDate" | "odometerAtService" | "createdAt" | "updatedAt", ExtArgs["result"]["maintenanceLog"]>
  export type MaintenanceLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type MaintenanceLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type MaintenanceLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $MaintenanceLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenanceLog"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      type: string
      description: string | null
      cost: Prisma.Decimal | null
      status: $Enums.MaintenanceStatus
      scheduledDate: Date
      closedDate: Date | null
      odometerAtService: Prisma.Decimal | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["maintenanceLog"]>
    composites: {}
  }

  type MaintenanceLogGetPayload<S extends boolean | null | undefined | MaintenanceLogDefaultArgs> = $Result.GetResult<Prisma.$MaintenanceLogPayload, S>

  type MaintenanceLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceLogCountAggregateInputType | true
    }

  export interface MaintenanceLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceLog'], meta: { name: 'MaintenanceLog' } }
    /**
     * Find zero or one MaintenanceLog that matches the filter.
     * @param {MaintenanceLogFindUniqueArgs} args - Arguments to find a MaintenanceLog
     * @example
     * // Get one MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceLogFindUniqueArgs>(args: SelectSubset<T, MaintenanceLogFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaintenanceLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceLogFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceLog
     * @example
     * // Get one MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceLogFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogFindFirstArgs} args - Arguments to find a MaintenanceLog
     * @example
     * // Get one MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceLogFindFirstArgs>(args?: SelectSubset<T, MaintenanceLogFindFirstArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogFindFirstOrThrowArgs} args - Arguments to find a MaintenanceLog
     * @example
     * // Get one MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceLogFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaintenanceLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceLogs
     * const maintenanceLogs = await prisma.maintenanceLog.findMany()
     * 
     * // Get first 10 MaintenanceLogs
     * const maintenanceLogs = await prisma.maintenanceLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceLogWithIdOnly = await prisma.maintenanceLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceLogFindManyArgs>(args?: SelectSubset<T, MaintenanceLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaintenanceLog.
     * @param {MaintenanceLogCreateArgs} args - Arguments to create a MaintenanceLog.
     * @example
     * // Create one MaintenanceLog
     * const MaintenanceLog = await prisma.maintenanceLog.create({
     *   data: {
     *     // ... data to create a MaintenanceLog
     *   }
     * })
     * 
     */
    create<T extends MaintenanceLogCreateArgs>(args: SelectSubset<T, MaintenanceLogCreateArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaintenanceLogs.
     * @param {MaintenanceLogCreateManyArgs} args - Arguments to create many MaintenanceLogs.
     * @example
     * // Create many MaintenanceLogs
     * const maintenanceLog = await prisma.maintenanceLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceLogCreateManyArgs>(args?: SelectSubset<T, MaintenanceLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaintenanceLogs and returns the data saved in the database.
     * @param {MaintenanceLogCreateManyAndReturnArgs} args - Arguments to create many MaintenanceLogs.
     * @example
     * // Create many MaintenanceLogs
     * const maintenanceLog = await prisma.maintenanceLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaintenanceLogs and only return the `id`
     * const maintenanceLogWithIdOnly = await prisma.maintenanceLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenanceLogCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenanceLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaintenanceLog.
     * @param {MaintenanceLogDeleteArgs} args - Arguments to delete one MaintenanceLog.
     * @example
     * // Delete one MaintenanceLog
     * const MaintenanceLog = await prisma.maintenanceLog.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceLog
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceLogDeleteArgs>(args: SelectSubset<T, MaintenanceLogDeleteArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaintenanceLog.
     * @param {MaintenanceLogUpdateArgs} args - Arguments to update one MaintenanceLog.
     * @example
     * // Update one MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceLogUpdateArgs>(args: SelectSubset<T, MaintenanceLogUpdateArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaintenanceLogs.
     * @param {MaintenanceLogDeleteManyArgs} args - Arguments to filter MaintenanceLogs to delete.
     * @example
     * // Delete a few MaintenanceLogs
     * const { count } = await prisma.maintenanceLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceLogDeleteManyArgs>(args?: SelectSubset<T, MaintenanceLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceLogs
     * const maintenanceLog = await prisma.maintenanceLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceLogUpdateManyArgs>(args: SelectSubset<T, MaintenanceLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceLogs and returns the data updated in the database.
     * @param {MaintenanceLogUpdateManyAndReturnArgs} args - Arguments to update many MaintenanceLogs.
     * @example
     * // Update many MaintenanceLogs
     * const maintenanceLog = await prisma.maintenanceLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaintenanceLogs and only return the `id`
     * const maintenanceLogWithIdOnly = await prisma.maintenanceLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaintenanceLogUpdateManyAndReturnArgs>(args: SelectSubset<T, MaintenanceLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaintenanceLog.
     * @param {MaintenanceLogUpsertArgs} args - Arguments to update or create a MaintenanceLog.
     * @example
     * // Update or create a MaintenanceLog
     * const maintenanceLog = await prisma.maintenanceLog.upsert({
     *   create: {
     *     // ... data to create a MaintenanceLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceLog we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceLogUpsertArgs>(args: SelectSubset<T, MaintenanceLogUpsertArgs<ExtArgs>>): Prisma__MaintenanceLogClient<$Result.GetResult<Prisma.$MaintenanceLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaintenanceLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogCountArgs} args - Arguments to filter MaintenanceLogs to count.
     * @example
     * // Count the number of MaintenanceLogs
     * const count = await prisma.maintenanceLog.count({
     *   where: {
     *     // ... the filter for the MaintenanceLogs we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceLogCountArgs>(
      args?: Subset<T, MaintenanceLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaintenanceLogAggregateArgs>(args: Subset<T, MaintenanceLogAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceLogAggregateType<T>>

    /**
     * Group by MaintenanceLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceLogGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends MaintenanceLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceLogGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaintenanceLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenanceLog model
   */
  readonly fields: MaintenanceLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MaintenanceLog model
   */
  interface MaintenanceLogFieldRefs {
    readonly id: FieldRef<"MaintenanceLog", 'String'>
    readonly vehicleId: FieldRef<"MaintenanceLog", 'String'>
    readonly type: FieldRef<"MaintenanceLog", 'String'>
    readonly description: FieldRef<"MaintenanceLog", 'String'>
    readonly cost: FieldRef<"MaintenanceLog", 'Decimal'>
    readonly status: FieldRef<"MaintenanceLog", 'MaintenanceStatus'>
    readonly scheduledDate: FieldRef<"MaintenanceLog", 'DateTime'>
    readonly closedDate: FieldRef<"MaintenanceLog", 'DateTime'>
    readonly odometerAtService: FieldRef<"MaintenanceLog", 'Decimal'>
    readonly createdAt: FieldRef<"MaintenanceLog", 'DateTime'>
    readonly updatedAt: FieldRef<"MaintenanceLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaintenanceLog findUnique
   */
  export type MaintenanceLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceLog to fetch.
     */
    where: MaintenanceLogWhereUniqueInput
  }

  /**
   * MaintenanceLog findUniqueOrThrow
   */
  export type MaintenanceLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceLog to fetch.
     */
    where: MaintenanceLogWhereUniqueInput
  }

  /**
   * MaintenanceLog findFirst
   */
  export type MaintenanceLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceLog to fetch.
     */
    where?: MaintenanceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceLogs to fetch.
     */
    orderBy?: MaintenanceLogOrderByWithRelationInput | MaintenanceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceLogs.
     */
    cursor?: MaintenanceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceLogs.
     */
    distinct?: MaintenanceLogScalarFieldEnum | MaintenanceLogScalarFieldEnum[]
  }

  /**
   * MaintenanceLog findFirstOrThrow
   */
  export type MaintenanceLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceLog to fetch.
     */
    where?: MaintenanceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceLogs to fetch.
     */
    orderBy?: MaintenanceLogOrderByWithRelationInput | MaintenanceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceLogs.
     */
    cursor?: MaintenanceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceLogs.
     */
    distinct?: MaintenanceLogScalarFieldEnum | MaintenanceLogScalarFieldEnum[]
  }

  /**
   * MaintenanceLog findMany
   */
  export type MaintenanceLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceLogs to fetch.
     */
    where?: MaintenanceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceLogs to fetch.
     */
    orderBy?: MaintenanceLogOrderByWithRelationInput | MaintenanceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenanceLogs.
     */
    cursor?: MaintenanceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceLogs.
     */
    distinct?: MaintenanceLogScalarFieldEnum | MaintenanceLogScalarFieldEnum[]
  }

  /**
   * MaintenanceLog create
   */
  export type MaintenanceLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceLog.
     */
    data: XOR<MaintenanceLogCreateInput, MaintenanceLogUncheckedCreateInput>
  }

  /**
   * MaintenanceLog createMany
   */
  export type MaintenanceLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenanceLogs.
     */
    data: MaintenanceLogCreateManyInput | MaintenanceLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenanceLog createManyAndReturn
   */
  export type MaintenanceLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * The data used to create many MaintenanceLogs.
     */
    data: MaintenanceLogCreateManyInput | MaintenanceLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceLog update
   */
  export type MaintenanceLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceLog.
     */
    data: XOR<MaintenanceLogUpdateInput, MaintenanceLogUncheckedUpdateInput>
    /**
     * Choose, which MaintenanceLog to update.
     */
    where: MaintenanceLogWhereUniqueInput
  }

  /**
   * MaintenanceLog updateMany
   */
  export type MaintenanceLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenanceLogs.
     */
    data: XOR<MaintenanceLogUpdateManyMutationInput, MaintenanceLogUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceLogs to update
     */
    where?: MaintenanceLogWhereInput
    /**
     * Limit how many MaintenanceLogs to update.
     */
    limit?: number
  }

  /**
   * MaintenanceLog updateManyAndReturn
   */
  export type MaintenanceLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * The data used to update MaintenanceLogs.
     */
    data: XOR<MaintenanceLogUpdateManyMutationInput, MaintenanceLogUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceLogs to update
     */
    where?: MaintenanceLogWhereInput
    /**
     * Limit how many MaintenanceLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceLog upsert
   */
  export type MaintenanceLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceLog to update in case it exists.
     */
    where: MaintenanceLogWhereUniqueInput
    /**
     * In case the MaintenanceLog found by the `where` argument doesn't exist, create a new MaintenanceLog with this data.
     */
    create: XOR<MaintenanceLogCreateInput, MaintenanceLogUncheckedCreateInput>
    /**
     * In case the MaintenanceLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceLogUpdateInput, MaintenanceLogUncheckedUpdateInput>
  }

  /**
   * MaintenanceLog delete
   */
  export type MaintenanceLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
    /**
     * Filter which MaintenanceLog to delete.
     */
    where: MaintenanceLogWhereUniqueInput
  }

  /**
   * MaintenanceLog deleteMany
   */
  export type MaintenanceLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceLogs to delete
     */
    where?: MaintenanceLogWhereInput
    /**
     * Limit how many MaintenanceLogs to delete.
     */
    limit?: number
  }

  /**
   * MaintenanceLog without action
   */
  export type MaintenanceLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceLog
     */
    select?: MaintenanceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceLog
     */
    omit?: MaintenanceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceLogInclude<ExtArgs> | null
  }


  /**
   * Model FuelLog
   */

  export type AggregateFuelLog = {
    _count: FuelLogCountAggregateOutputType | null
    _avg: FuelLogAvgAggregateOutputType | null
    _sum: FuelLogSumAggregateOutputType | null
    _min: FuelLogMinAggregateOutputType | null
    _max: FuelLogMaxAggregateOutputType | null
  }

  export type FuelLogAvgAggregateOutputType = {
    liters: Decimal | null
    cost: Decimal | null
  }

  export type FuelLogSumAggregateOutputType = {
    liters: Decimal | null
    cost: Decimal | null
  }

  export type FuelLogMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    tripId: string | null
    liters: Decimal | null
    cost: Decimal | null
    date: Date | null
    createdAt: Date | null
  }

  export type FuelLogMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    tripId: string | null
    liters: Decimal | null
    cost: Decimal | null
    date: Date | null
    createdAt: Date | null
  }

  export type FuelLogCountAggregateOutputType = {
    id: number
    vehicleId: number
    tripId: number
    liters: number
    cost: number
    date: number
    createdAt: number
    _all: number
  }


  export type FuelLogAvgAggregateInputType = {
    liters?: true
    cost?: true
  }

  export type FuelLogSumAggregateInputType = {
    liters?: true
    cost?: true
  }

  export type FuelLogMinAggregateInputType = {
    id?: true
    vehicleId?: true
    tripId?: true
    liters?: true
    cost?: true
    date?: true
    createdAt?: true
  }

  export type FuelLogMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    tripId?: true
    liters?: true
    cost?: true
    date?: true
    createdAt?: true
  }

  export type FuelLogCountAggregateInputType = {
    id?: true
    vehicleId?: true
    tripId?: true
    liters?: true
    cost?: true
    date?: true
    createdAt?: true
    _all?: true
  }

  export type FuelLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FuelLog to aggregate.
     */
    where?: FuelLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuelLogs to fetch.
     */
    orderBy?: FuelLogOrderByWithRelationInput | FuelLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuelLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuelLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuelLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FuelLogs
    **/
    _count?: true | FuelLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuelLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuelLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuelLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuelLogMaxAggregateInputType
  }

  export type GetFuelLogAggregateType<T extends FuelLogAggregateArgs> = {
        [P in keyof T & keyof AggregateFuelLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuelLog[P]>
      : GetScalarType<T[P], AggregateFuelLog[P]>
  }




  export type FuelLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuelLogWhereInput
    orderBy?: FuelLogOrderByWithAggregationInput | FuelLogOrderByWithAggregationInput[]
    by: FuelLogScalarFieldEnum[] | FuelLogScalarFieldEnum
    having?: FuelLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuelLogCountAggregateInputType | true
    _avg?: FuelLogAvgAggregateInputType
    _sum?: FuelLogSumAggregateInputType
    _min?: FuelLogMinAggregateInputType
    _max?: FuelLogMaxAggregateInputType
  }

  export type FuelLogGroupByOutputType = {
    id: string
    vehicleId: string
    tripId: string | null
    liters: Decimal
    cost: Decimal
    date: Date
    createdAt: Date
    _count: FuelLogCountAggregateOutputType | null
    _avg: FuelLogAvgAggregateOutputType | null
    _sum: FuelLogSumAggregateOutputType | null
    _min: FuelLogMinAggregateOutputType | null
    _max: FuelLogMaxAggregateOutputType | null
  }

  type GetFuelLogGroupByPayload<T extends FuelLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuelLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuelLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuelLogGroupByOutputType[P]>
            : GetScalarType<T[P], FuelLogGroupByOutputType[P]>
        }
      >
    >


  export type FuelLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    tripId?: boolean
    liters?: boolean
    cost?: boolean
    date?: boolean
    createdAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    trip?: boolean | FuelLog$tripArgs<ExtArgs>
  }, ExtArgs["result"]["fuelLog"]>

  export type FuelLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    tripId?: boolean
    liters?: boolean
    cost?: boolean
    date?: boolean
    createdAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    trip?: boolean | FuelLog$tripArgs<ExtArgs>
  }, ExtArgs["result"]["fuelLog"]>

  export type FuelLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    tripId?: boolean
    liters?: boolean
    cost?: boolean
    date?: boolean
    createdAt?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    trip?: boolean | FuelLog$tripArgs<ExtArgs>
  }, ExtArgs["result"]["fuelLog"]>

  export type FuelLogSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    tripId?: boolean
    liters?: boolean
    cost?: boolean
    date?: boolean
    createdAt?: boolean
  }

  export type FuelLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "tripId" | "liters" | "cost" | "date" | "createdAt", ExtArgs["result"]["fuelLog"]>
  export type FuelLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    trip?: boolean | FuelLog$tripArgs<ExtArgs>
  }
  export type FuelLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    trip?: boolean | FuelLog$tripArgs<ExtArgs>
  }
  export type FuelLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    trip?: boolean | FuelLog$tripArgs<ExtArgs>
  }

  export type $FuelLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FuelLog"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      trip: Prisma.$TripPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string
      tripId: string | null
      liters: Prisma.Decimal
      cost: Prisma.Decimal
      date: Date
      createdAt: Date
    }, ExtArgs["result"]["fuelLog"]>
    composites: {}
  }

  type FuelLogGetPayload<S extends boolean | null | undefined | FuelLogDefaultArgs> = $Result.GetResult<Prisma.$FuelLogPayload, S>

  type FuelLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuelLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuelLogCountAggregateInputType | true
    }

  export interface FuelLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FuelLog'], meta: { name: 'FuelLog' } }
    /**
     * Find zero or one FuelLog that matches the filter.
     * @param {FuelLogFindUniqueArgs} args - Arguments to find a FuelLog
     * @example
     * // Get one FuelLog
     * const fuelLog = await prisma.fuelLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuelLogFindUniqueArgs>(args: SelectSubset<T, FuelLogFindUniqueArgs<ExtArgs>>): Prisma__FuelLogClient<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FuelLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuelLogFindUniqueOrThrowArgs} args - Arguments to find a FuelLog
     * @example
     * // Get one FuelLog
     * const fuelLog = await prisma.fuelLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuelLogFindUniqueOrThrowArgs>(args: SelectSubset<T, FuelLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuelLogClient<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FuelLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelLogFindFirstArgs} args - Arguments to find a FuelLog
     * @example
     * // Get one FuelLog
     * const fuelLog = await prisma.fuelLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuelLogFindFirstArgs>(args?: SelectSubset<T, FuelLogFindFirstArgs<ExtArgs>>): Prisma__FuelLogClient<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FuelLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelLogFindFirstOrThrowArgs} args - Arguments to find a FuelLog
     * @example
     * // Get one FuelLog
     * const fuelLog = await prisma.fuelLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuelLogFindFirstOrThrowArgs>(args?: SelectSubset<T, FuelLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuelLogClient<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FuelLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FuelLogs
     * const fuelLogs = await prisma.fuelLog.findMany()
     * 
     * // Get first 10 FuelLogs
     * const fuelLogs = await prisma.fuelLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fuelLogWithIdOnly = await prisma.fuelLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FuelLogFindManyArgs>(args?: SelectSubset<T, FuelLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FuelLog.
     * @param {FuelLogCreateArgs} args - Arguments to create a FuelLog.
     * @example
     * // Create one FuelLog
     * const FuelLog = await prisma.fuelLog.create({
     *   data: {
     *     // ... data to create a FuelLog
     *   }
     * })
     * 
     */
    create<T extends FuelLogCreateArgs>(args: SelectSubset<T, FuelLogCreateArgs<ExtArgs>>): Prisma__FuelLogClient<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FuelLogs.
     * @param {FuelLogCreateManyArgs} args - Arguments to create many FuelLogs.
     * @example
     * // Create many FuelLogs
     * const fuelLog = await prisma.fuelLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuelLogCreateManyArgs>(args?: SelectSubset<T, FuelLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FuelLogs and returns the data saved in the database.
     * @param {FuelLogCreateManyAndReturnArgs} args - Arguments to create many FuelLogs.
     * @example
     * // Create many FuelLogs
     * const fuelLog = await prisma.fuelLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FuelLogs and only return the `id`
     * const fuelLogWithIdOnly = await prisma.fuelLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FuelLogCreateManyAndReturnArgs>(args?: SelectSubset<T, FuelLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FuelLog.
     * @param {FuelLogDeleteArgs} args - Arguments to delete one FuelLog.
     * @example
     * // Delete one FuelLog
     * const FuelLog = await prisma.fuelLog.delete({
     *   where: {
     *     // ... filter to delete one FuelLog
     *   }
     * })
     * 
     */
    delete<T extends FuelLogDeleteArgs>(args: SelectSubset<T, FuelLogDeleteArgs<ExtArgs>>): Prisma__FuelLogClient<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FuelLog.
     * @param {FuelLogUpdateArgs} args - Arguments to update one FuelLog.
     * @example
     * // Update one FuelLog
     * const fuelLog = await prisma.fuelLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuelLogUpdateArgs>(args: SelectSubset<T, FuelLogUpdateArgs<ExtArgs>>): Prisma__FuelLogClient<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FuelLogs.
     * @param {FuelLogDeleteManyArgs} args - Arguments to filter FuelLogs to delete.
     * @example
     * // Delete a few FuelLogs
     * const { count } = await prisma.fuelLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuelLogDeleteManyArgs>(args?: SelectSubset<T, FuelLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FuelLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FuelLogs
     * const fuelLog = await prisma.fuelLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuelLogUpdateManyArgs>(args: SelectSubset<T, FuelLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FuelLogs and returns the data updated in the database.
     * @param {FuelLogUpdateManyAndReturnArgs} args - Arguments to update many FuelLogs.
     * @example
     * // Update many FuelLogs
     * const fuelLog = await prisma.fuelLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FuelLogs and only return the `id`
     * const fuelLogWithIdOnly = await prisma.fuelLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FuelLogUpdateManyAndReturnArgs>(args: SelectSubset<T, FuelLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FuelLog.
     * @param {FuelLogUpsertArgs} args - Arguments to update or create a FuelLog.
     * @example
     * // Update or create a FuelLog
     * const fuelLog = await prisma.fuelLog.upsert({
     *   create: {
     *     // ... data to create a FuelLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FuelLog we want to update
     *   }
     * })
     */
    upsert<T extends FuelLogUpsertArgs>(args: SelectSubset<T, FuelLogUpsertArgs<ExtArgs>>): Prisma__FuelLogClient<$Result.GetResult<Prisma.$FuelLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FuelLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelLogCountArgs} args - Arguments to filter FuelLogs to count.
     * @example
     * // Count the number of FuelLogs
     * const count = await prisma.fuelLog.count({
     *   where: {
     *     // ... the filter for the FuelLogs we want to count
     *   }
     * })
    **/
    count<T extends FuelLogCountArgs>(
      args?: Subset<T, FuelLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuelLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FuelLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuelLogAggregateArgs>(args: Subset<T, FuelLogAggregateArgs>): Prisma.PrismaPromise<GetFuelLogAggregateType<T>>

    /**
     * Group by FuelLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuelLogGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends FuelLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuelLogGroupByArgs['orderBy'] }
        : { orderBy?: FuelLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FuelLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuelLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FuelLog model
   */
  readonly fields: FuelLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FuelLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuelLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    trip<T extends FuelLog$tripArgs<ExtArgs> = {}>(args?: Subset<T, FuelLog$tripArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FuelLog model
   */
  interface FuelLogFieldRefs {
    readonly id: FieldRef<"FuelLog", 'String'>
    readonly vehicleId: FieldRef<"FuelLog", 'String'>
    readonly tripId: FieldRef<"FuelLog", 'String'>
    readonly liters: FieldRef<"FuelLog", 'Decimal'>
    readonly cost: FieldRef<"FuelLog", 'Decimal'>
    readonly date: FieldRef<"FuelLog", 'DateTime'>
    readonly createdAt: FieldRef<"FuelLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FuelLog findUnique
   */
  export type FuelLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    /**
     * Filter, which FuelLog to fetch.
     */
    where: FuelLogWhereUniqueInput
  }

  /**
   * FuelLog findUniqueOrThrow
   */
  export type FuelLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    /**
     * Filter, which FuelLog to fetch.
     */
    where: FuelLogWhereUniqueInput
  }

  /**
   * FuelLog findFirst
   */
  export type FuelLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    /**
     * Filter, which FuelLog to fetch.
     */
    where?: FuelLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuelLogs to fetch.
     */
    orderBy?: FuelLogOrderByWithRelationInput | FuelLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FuelLogs.
     */
    cursor?: FuelLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuelLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuelLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FuelLogs.
     */
    distinct?: FuelLogScalarFieldEnum | FuelLogScalarFieldEnum[]
  }

  /**
   * FuelLog findFirstOrThrow
   */
  export type FuelLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    /**
     * Filter, which FuelLog to fetch.
     */
    where?: FuelLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuelLogs to fetch.
     */
    orderBy?: FuelLogOrderByWithRelationInput | FuelLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FuelLogs.
     */
    cursor?: FuelLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuelLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuelLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FuelLogs.
     */
    distinct?: FuelLogScalarFieldEnum | FuelLogScalarFieldEnum[]
  }

  /**
   * FuelLog findMany
   */
  export type FuelLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    /**
     * Filter, which FuelLogs to fetch.
     */
    where?: FuelLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FuelLogs to fetch.
     */
    orderBy?: FuelLogOrderByWithRelationInput | FuelLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FuelLogs.
     */
    cursor?: FuelLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FuelLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FuelLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FuelLogs.
     */
    distinct?: FuelLogScalarFieldEnum | FuelLogScalarFieldEnum[]
  }

  /**
   * FuelLog create
   */
  export type FuelLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    /**
     * The data needed to create a FuelLog.
     */
    data: XOR<FuelLogCreateInput, FuelLogUncheckedCreateInput>
  }

  /**
   * FuelLog createMany
   */
  export type FuelLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FuelLogs.
     */
    data: FuelLogCreateManyInput | FuelLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FuelLog createManyAndReturn
   */
  export type FuelLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * The data used to create many FuelLogs.
     */
    data: FuelLogCreateManyInput | FuelLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FuelLog update
   */
  export type FuelLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    /**
     * The data needed to update a FuelLog.
     */
    data: XOR<FuelLogUpdateInput, FuelLogUncheckedUpdateInput>
    /**
     * Choose, which FuelLog to update.
     */
    where: FuelLogWhereUniqueInput
  }

  /**
   * FuelLog updateMany
   */
  export type FuelLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FuelLogs.
     */
    data: XOR<FuelLogUpdateManyMutationInput, FuelLogUncheckedUpdateManyInput>
    /**
     * Filter which FuelLogs to update
     */
    where?: FuelLogWhereInput
    /**
     * Limit how many FuelLogs to update.
     */
    limit?: number
  }

  /**
   * FuelLog updateManyAndReturn
   */
  export type FuelLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * The data used to update FuelLogs.
     */
    data: XOR<FuelLogUpdateManyMutationInput, FuelLogUncheckedUpdateManyInput>
    /**
     * Filter which FuelLogs to update
     */
    where?: FuelLogWhereInput
    /**
     * Limit how many FuelLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FuelLog upsert
   */
  export type FuelLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    /**
     * The filter to search for the FuelLog to update in case it exists.
     */
    where: FuelLogWhereUniqueInput
    /**
     * In case the FuelLog found by the `where` argument doesn't exist, create a new FuelLog with this data.
     */
    create: XOR<FuelLogCreateInput, FuelLogUncheckedCreateInput>
    /**
     * In case the FuelLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuelLogUpdateInput, FuelLogUncheckedUpdateInput>
  }

  /**
   * FuelLog delete
   */
  export type FuelLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
    /**
     * Filter which FuelLog to delete.
     */
    where: FuelLogWhereUniqueInput
  }

  /**
   * FuelLog deleteMany
   */
  export type FuelLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FuelLogs to delete
     */
    where?: FuelLogWhereInput
    /**
     * Limit how many FuelLogs to delete.
     */
    limit?: number
  }

  /**
   * FuelLog.trip
   */
  export type FuelLog$tripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
  }

  /**
   * FuelLog without action
   */
  export type FuelLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuelLog
     */
    select?: FuelLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FuelLog
     */
    omit?: FuelLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuelLogInclude<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type ExpenseSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    tripId: string | null
    category: string | null
    amount: Decimal | null
    date: Date | null
    notes: string | null
    createdAt: Date | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    vehicleId: string | null
    tripId: string | null
    category: string | null
    amount: Decimal | null
    date: Date | null
    notes: string | null
    createdAt: Date | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    vehicleId: number
    tripId: number
    category: number
    amount: number
    date: number
    notes: number
    createdAt: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    amount?: true
  }

  export type ExpenseSumAggregateInputType = {
    amount?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    vehicleId?: true
    tripId?: true
    category?: true
    amount?: true
    date?: true
    notes?: true
    createdAt?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    vehicleId?: true
    tripId?: true
    category?: true
    amount?: true
    date?: true
    notes?: true
    createdAt?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    vehicleId?: true
    tripId?: true
    category?: true
    amount?: true
    date?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: string
    vehicleId: string | null
    tripId: string | null
    category: string
    amount: Decimal
    date: Date
    notes: string | null
    createdAt: Date
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    tripId?: boolean
    category?: boolean
    amount?: boolean
    date?: boolean
    notes?: boolean
    createdAt?: boolean
    vehicle?: boolean | Expense$vehicleArgs<ExtArgs>
    trip?: boolean | Expense$tripArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    tripId?: boolean
    category?: boolean
    amount?: boolean
    date?: boolean
    notes?: boolean
    createdAt?: boolean
    vehicle?: boolean | Expense$vehicleArgs<ExtArgs>
    trip?: boolean | Expense$tripArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleId?: boolean
    tripId?: boolean
    category?: boolean
    amount?: boolean
    date?: boolean
    notes?: boolean
    createdAt?: boolean
    vehicle?: boolean | Expense$vehicleArgs<ExtArgs>
    trip?: boolean | Expense$tripArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    vehicleId?: boolean
    tripId?: boolean
    category?: boolean
    amount?: boolean
    date?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleId" | "tripId" | "category" | "amount" | "date" | "notes" | "createdAt", ExtArgs["result"]["expense"]>
  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | Expense$vehicleArgs<ExtArgs>
    trip?: boolean | Expense$tripArgs<ExtArgs>
  }
  export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | Expense$vehicleArgs<ExtArgs>
    trip?: boolean | Expense$tripArgs<ExtArgs>
  }
  export type ExpenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | Expense$vehicleArgs<ExtArgs>
    trip?: boolean | Expense$tripArgs<ExtArgs>
  }

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs> | null
      trip: Prisma.$TripPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleId: string | null
      tripId: string | null
      category: string
      amount: Prisma.Decimal
      date: Date
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends Expense$vehicleArgs<ExtArgs> = {}>(args?: Subset<T, Expense$vehicleArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    trip<T extends Expense$tripArgs<ExtArgs> = {}>(args?: Subset<T, Expense$tripArgs<ExtArgs>>): Prisma__TripClient<$Result.GetResult<Prisma.$TripPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'String'>
    readonly vehicleId: FieldRef<"Expense", 'String'>
    readonly tripId: FieldRef<"Expense", 'String'>
    readonly category: FieldRef<"Expense", 'String'>
    readonly amount: FieldRef<"Expense", 'Decimal'>
    readonly date: FieldRef<"Expense", 'DateTime'>
    readonly notes: FieldRef<"Expense", 'String'>
    readonly createdAt: FieldRef<"Expense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense updateManyAndReturn
   */
  export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense.vehicle
   */
  export type Expense$vehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
  }

  /**
   * Expense.trip
   */
  export type Expense$tripArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trip
     */
    select?: TripSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trip
     */
    omit?: TripOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TripInclude<ExtArgs> | null
    where?: TripWhereInput
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    entityType: string | null
    entityId: string | null
    action: string | null
    performedBy: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    entityType: string | null
    entityId: string | null
    action: string | null
    performedBy: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    entityType: number
    entityId: number
    action: number
    oldValue: number
    newValue: number
    performedBy: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    entityType?: true
    entityId?: true
    action?: true
    performedBy?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    entityType?: true
    entityId?: true
    action?: true
    performedBy?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    entityType?: true
    entityId?: true
    action?: true
    oldValue?: true
    newValue?: true
    performedBy?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    entityType: string
    entityId: string
    action: string
    oldValue: JsonValue | null
    newValue: JsonValue | null
    performedBy: string
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    oldValue?: boolean
    newValue?: boolean
    performedBy?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    oldValue?: boolean
    newValue?: boolean
    performedBy?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    oldValue?: boolean
    newValue?: boolean
    performedBy?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    entityType?: boolean
    entityId?: boolean
    action?: boolean
    oldValue?: boolean
    newValue?: boolean
    performedBy?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "entityType" | "entityId" | "action" | "oldValue" | "newValue" | "performedBy" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      entityType: string
      entityId: string
      action: string
      oldValue: Prisma.JsonValue | null
      newValue: Prisma.JsonValue | null
      performedBy: string
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly entityType: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly oldValue: FieldRef<"AuditLog", 'Json'>
    readonly newValue: FieldRef<"AuditLog", 'Json'>
    readonly performedBy: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    registrationNumber: 'registrationNumber',
    nameModel: 'nameModel',
    type: 'type',
    maxLoadCapacityKg: 'maxLoadCapacityKg',
    odometerKm: 'odometerKm',
    acquisitionCost: 'acquisitionCost',
    status: 'status',
    region: 'region',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const DriverScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    licenseNumber: 'licenseNumber',
    licenseCategory: 'licenseCategory',
    licenseExpiryDate: 'licenseExpiryDate',
    contactNumber: 'contactNumber',
    safetyScore: 'safetyScore',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


  export const TripScalarFieldEnum: {
    id: 'id',
    source: 'source',
    destination: 'destination',
    vehicleId: 'vehicleId',
    driverId: 'driverId',
    cargoWeightKg: 'cargoWeightKg',
    plannedDistanceKm: 'plannedDistanceKm',
    actualDistanceKm: 'actualDistanceKm',
    fuelConsumedLiters: 'fuelConsumedLiters',
    status: 'status',
    dispatchedAt: 'dispatchedAt',
    completedAt: 'completedAt',
    aiRecommended: 'aiRecommended',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const MaintenanceLogScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    type: 'type',
    description: 'description',
    cost: 'cost',
    status: 'status',
    scheduledDate: 'scheduledDate',
    closedDate: 'closedDate',
    odometerAtService: 'odometerAtService',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaintenanceLogScalarFieldEnum = (typeof MaintenanceLogScalarFieldEnum)[keyof typeof MaintenanceLogScalarFieldEnum]


  export const FuelLogScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    tripId: 'tripId',
    liters: 'liters',
    cost: 'cost',
    date: 'date',
    createdAt: 'createdAt'
  };

  export type FuelLogScalarFieldEnum = (typeof FuelLogScalarFieldEnum)[keyof typeof FuelLogScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    vehicleId: 'vehicleId',
    tripId: 'tripId',
    category: 'category',
    amount: 'amount',
    date: 'date',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    entityType: 'entityType',
    entityId: 'entityId',
    action: 'action',
    oldValue: 'oldValue',
    newValue: 'newValue',
    performedBy: 'performedBy',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'VehicleStatus'
   */
  export type EnumVehicleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleStatus'>
    


  /**
   * Reference to a field of type 'VehicleStatus[]'
   */
  export type ListEnumVehicleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VehicleStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DriverStatus'
   */
  export type EnumDriverStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DriverStatus'>
    


  /**
   * Reference to a field of type 'DriverStatus[]'
   */
  export type ListEnumDriverStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DriverStatus[]'>
    


  /**
   * Reference to a field of type 'TripStatus'
   */
  export type EnumTripStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TripStatus'>
    


  /**
   * Reference to a field of type 'TripStatus[]'
   */
  export type ListEnumTripStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TripStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'MaintenanceStatus'
   */
  export type EnumMaintenanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaintenanceStatus'>
    


  /**
   * Reference to a field of type 'MaintenanceStatus[]'
   */
  export type ListEnumMaintenanceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MaintenanceStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    drivers?: DriverListRelationFilter
    createdTrips?: TripListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    drivers?: DriverOrderByRelationAggregateInput
    createdTrips?: TripOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    drivers?: DriverListRelationFilter
    createdTrips?: TripListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: UuidFilter<"Vehicle"> | string
    registrationNumber?: StringFilter<"Vehicle"> | string
    nameModel?: StringNullableFilter<"Vehicle"> | string | null
    type?: StringNullableFilter<"Vehicle"> | string | null
    maxLoadCapacityKg?: DecimalNullableFilter<"Vehicle"> | Decimal | DecimalJsLike | number | string | null
    odometerKm?: DecimalNullableFilter<"Vehicle"> | Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: DecimalNullableFilter<"Vehicle"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus
    region?: StringNullableFilter<"Vehicle"> | string | null
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    trips?: TripListRelationFilter
    maintenanceLogs?: MaintenanceLogListRelationFilter
    fuelLogs?: FuelLogListRelationFilter
    expenses?: ExpenseListRelationFilter
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    registrationNumber?: SortOrder
    nameModel?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    maxLoadCapacityKg?: SortOrderInput | SortOrder
    odometerKm?: SortOrderInput | SortOrder
    acquisitionCost?: SortOrderInput | SortOrder
    status?: SortOrder
    region?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trips?: TripOrderByRelationAggregateInput
    maintenanceLogs?: MaintenanceLogOrderByRelationAggregateInput
    fuelLogs?: FuelLogOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    registrationNumber?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    nameModel?: StringNullableFilter<"Vehicle"> | string | null
    type?: StringNullableFilter<"Vehicle"> | string | null
    maxLoadCapacityKg?: DecimalNullableFilter<"Vehicle"> | Decimal | DecimalJsLike | number | string | null
    odometerKm?: DecimalNullableFilter<"Vehicle"> | Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: DecimalNullableFilter<"Vehicle"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumVehicleStatusFilter<"Vehicle"> | $Enums.VehicleStatus
    region?: StringNullableFilter<"Vehicle"> | string | null
    createdAt?: DateTimeFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeFilter<"Vehicle"> | Date | string
    trips?: TripListRelationFilter
    maintenanceLogs?: MaintenanceLogListRelationFilter
    fuelLogs?: FuelLogListRelationFilter
    expenses?: ExpenseListRelationFilter
  }, "id" | "registrationNumber">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    registrationNumber?: SortOrder
    nameModel?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    maxLoadCapacityKg?: SortOrderInput | SortOrder
    odometerKm?: SortOrderInput | SortOrder
    acquisitionCost?: SortOrderInput | SortOrder
    status?: SortOrder
    region?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Vehicle"> | string
    registrationNumber?: StringWithAggregatesFilter<"Vehicle"> | string
    nameModel?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    type?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    maxLoadCapacityKg?: DecimalNullableWithAggregatesFilter<"Vehicle"> | Decimal | DecimalJsLike | number | string | null
    odometerKm?: DecimalNullableWithAggregatesFilter<"Vehicle"> | Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: DecimalNullableWithAggregatesFilter<"Vehicle"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumVehicleStatusWithAggregatesFilter<"Vehicle"> | $Enums.VehicleStatus
    region?: StringNullableWithAggregatesFilter<"Vehicle"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vehicle"> | Date | string
  }

  export type DriverWhereInput = {
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    id?: UuidFilter<"Driver"> | string
    userId?: UuidNullableFilter<"Driver"> | string | null
    name?: StringFilter<"Driver"> | string
    licenseNumber?: StringFilter<"Driver"> | string
    licenseCategory?: StringNullableFilter<"Driver"> | string | null
    licenseExpiryDate?: DateTimeFilter<"Driver"> | Date | string
    contactNumber?: StringNullableFilter<"Driver"> | string | null
    safetyScore?: IntFilter<"Driver"> | number
    status?: EnumDriverStatusFilter<"Driver"> | $Enums.DriverStatus
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    trips?: TripListRelationFilter
  }

  export type DriverOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    licenseNumber?: SortOrder
    licenseCategory?: SortOrderInput | SortOrder
    licenseExpiryDate?: SortOrder
    contactNumber?: SortOrderInput | SortOrder
    safetyScore?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    trips?: TripOrderByRelationAggregateInput
  }

  export type DriverWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    licenseNumber?: string
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    userId?: UuidNullableFilter<"Driver"> | string | null
    name?: StringFilter<"Driver"> | string
    licenseCategory?: StringNullableFilter<"Driver"> | string | null
    licenseExpiryDate?: DateTimeFilter<"Driver"> | Date | string
    contactNumber?: StringNullableFilter<"Driver"> | string | null
    safetyScore?: IntFilter<"Driver"> | number
    status?: EnumDriverStatusFilter<"Driver"> | $Enums.DriverStatus
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    trips?: TripListRelationFilter
  }, "id" | "licenseNumber">

  export type DriverOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrder
    licenseNumber?: SortOrder
    licenseCategory?: SortOrderInput | SortOrder
    licenseExpiryDate?: SortOrder
    contactNumber?: SortOrderInput | SortOrder
    safetyScore?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DriverCountOrderByAggregateInput
    _avg?: DriverAvgOrderByAggregateInput
    _max?: DriverMaxOrderByAggregateInput
    _min?: DriverMinOrderByAggregateInput
    _sum?: DriverSumOrderByAggregateInput
  }

  export type DriverScalarWhereWithAggregatesInput = {
    AND?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    OR?: DriverScalarWhereWithAggregatesInput[]
    NOT?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Driver"> | string
    userId?: UuidNullableWithAggregatesFilter<"Driver"> | string | null
    name?: StringWithAggregatesFilter<"Driver"> | string
    licenseNumber?: StringWithAggregatesFilter<"Driver"> | string
    licenseCategory?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    licenseExpiryDate?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    contactNumber?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    safetyScore?: IntWithAggregatesFilter<"Driver"> | number
    status?: EnumDriverStatusWithAggregatesFilter<"Driver"> | $Enums.DriverStatus
    createdAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
  }

  export type TripWhereInput = {
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    id?: UuidFilter<"Trip"> | string
    source?: StringFilter<"Trip"> | string
    destination?: StringFilter<"Trip"> | string
    vehicleId?: UuidFilter<"Trip"> | string
    driverId?: UuidFilter<"Trip"> | string
    cargoWeightKg?: DecimalNullableFilter<"Trip"> | Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: DecimalNullableFilter<"Trip"> | Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: DecimalNullableFilter<"Trip"> | Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: DecimalNullableFilter<"Trip"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumTripStatusFilter<"Trip"> | $Enums.TripStatus
    dispatchedAt?: DateTimeNullableFilter<"Trip"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Trip"> | Date | string | null
    aiRecommended?: BoolFilter<"Trip"> | boolean
    createdBy?: UuidFilter<"Trip"> | string
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    fuelLogs?: FuelLogListRelationFilter
    expenses?: ExpenseListRelationFilter
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    cargoWeightKg?: SortOrderInput | SortOrder
    plannedDistanceKm?: SortOrderInput | SortOrder
    actualDistanceKm?: SortOrderInput | SortOrder
    fuelConsumedLiters?: SortOrderInput | SortOrder
    status?: SortOrder
    dispatchedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    aiRecommended?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    driver?: DriverOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    fuelLogs?: FuelLogOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
  }

  export type TripWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TripWhereInput | TripWhereInput[]
    OR?: TripWhereInput[]
    NOT?: TripWhereInput | TripWhereInput[]
    source?: StringFilter<"Trip"> | string
    destination?: StringFilter<"Trip"> | string
    vehicleId?: UuidFilter<"Trip"> | string
    driverId?: UuidFilter<"Trip"> | string
    cargoWeightKg?: DecimalNullableFilter<"Trip"> | Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: DecimalNullableFilter<"Trip"> | Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: DecimalNullableFilter<"Trip"> | Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: DecimalNullableFilter<"Trip"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumTripStatusFilter<"Trip"> | $Enums.TripStatus
    dispatchedAt?: DateTimeNullableFilter<"Trip"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Trip"> | Date | string | null
    aiRecommended?: BoolFilter<"Trip"> | boolean
    createdBy?: UuidFilter<"Trip"> | string
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    fuelLogs?: FuelLogListRelationFilter
    expenses?: ExpenseListRelationFilter
  }, "id">

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    cargoWeightKg?: SortOrderInput | SortOrder
    plannedDistanceKm?: SortOrderInput | SortOrder
    actualDistanceKm?: SortOrderInput | SortOrder
    fuelConsumedLiters?: SortOrderInput | SortOrder
    status?: SortOrder
    dispatchedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    aiRecommended?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TripCountOrderByAggregateInput
    _avg?: TripAvgOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
    _sum?: TripSumOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    OR?: TripScalarWhereWithAggregatesInput[]
    NOT?: TripScalarWhereWithAggregatesInput | TripScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Trip"> | string
    source?: StringWithAggregatesFilter<"Trip"> | string
    destination?: StringWithAggregatesFilter<"Trip"> | string
    vehicleId?: UuidWithAggregatesFilter<"Trip"> | string
    driverId?: UuidWithAggregatesFilter<"Trip"> | string
    cargoWeightKg?: DecimalNullableWithAggregatesFilter<"Trip"> | Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: DecimalNullableWithAggregatesFilter<"Trip"> | Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: DecimalNullableWithAggregatesFilter<"Trip"> | Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: DecimalNullableWithAggregatesFilter<"Trip"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumTripStatusWithAggregatesFilter<"Trip"> | $Enums.TripStatus
    dispatchedAt?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Trip"> | Date | string | null
    aiRecommended?: BoolWithAggregatesFilter<"Trip"> | boolean
    createdBy?: UuidWithAggregatesFilter<"Trip"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Trip"> | Date | string
  }

  export type MaintenanceLogWhereInput = {
    AND?: MaintenanceLogWhereInput | MaintenanceLogWhereInput[]
    OR?: MaintenanceLogWhereInput[]
    NOT?: MaintenanceLogWhereInput | MaintenanceLogWhereInput[]
    id?: UuidFilter<"MaintenanceLog"> | string
    vehicleId?: UuidFilter<"MaintenanceLog"> | string
    type?: StringFilter<"MaintenanceLog"> | string
    description?: StringNullableFilter<"MaintenanceLog"> | string | null
    cost?: DecimalNullableFilter<"MaintenanceLog"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumMaintenanceStatusFilter<"MaintenanceLog"> | $Enums.MaintenanceStatus
    scheduledDate?: DateTimeFilter<"MaintenanceLog"> | Date | string
    closedDate?: DateTimeNullableFilter<"MaintenanceLog"> | Date | string | null
    odometerAtService?: DecimalNullableFilter<"MaintenanceLog"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"MaintenanceLog"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceLog"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }

  export type MaintenanceLogOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    cost?: SortOrderInput | SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    closedDate?: SortOrderInput | SortOrder
    odometerAtService?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
  }

  export type MaintenanceLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaintenanceLogWhereInput | MaintenanceLogWhereInput[]
    OR?: MaintenanceLogWhereInput[]
    NOT?: MaintenanceLogWhereInput | MaintenanceLogWhereInput[]
    vehicleId?: UuidFilter<"MaintenanceLog"> | string
    type?: StringFilter<"MaintenanceLog"> | string
    description?: StringNullableFilter<"MaintenanceLog"> | string | null
    cost?: DecimalNullableFilter<"MaintenanceLog"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumMaintenanceStatusFilter<"MaintenanceLog"> | $Enums.MaintenanceStatus
    scheduledDate?: DateTimeFilter<"MaintenanceLog"> | Date | string
    closedDate?: DateTimeNullableFilter<"MaintenanceLog"> | Date | string | null
    odometerAtService?: DecimalNullableFilter<"MaintenanceLog"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"MaintenanceLog"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceLog"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
  }, "id">

  export type MaintenanceLogOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    description?: SortOrderInput | SortOrder
    cost?: SortOrderInput | SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    closedDate?: SortOrderInput | SortOrder
    odometerAtService?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MaintenanceLogCountOrderByAggregateInput
    _avg?: MaintenanceLogAvgOrderByAggregateInput
    _max?: MaintenanceLogMaxOrderByAggregateInput
    _min?: MaintenanceLogMinOrderByAggregateInput
    _sum?: MaintenanceLogSumOrderByAggregateInput
  }

  export type MaintenanceLogScalarWhereWithAggregatesInput = {
    AND?: MaintenanceLogScalarWhereWithAggregatesInput | MaintenanceLogScalarWhereWithAggregatesInput[]
    OR?: MaintenanceLogScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceLogScalarWhereWithAggregatesInput | MaintenanceLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MaintenanceLog"> | string
    vehicleId?: UuidWithAggregatesFilter<"MaintenanceLog"> | string
    type?: StringWithAggregatesFilter<"MaintenanceLog"> | string
    description?: StringNullableWithAggregatesFilter<"MaintenanceLog"> | string | null
    cost?: DecimalNullableWithAggregatesFilter<"MaintenanceLog"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumMaintenanceStatusWithAggregatesFilter<"MaintenanceLog"> | $Enums.MaintenanceStatus
    scheduledDate?: DateTimeWithAggregatesFilter<"MaintenanceLog"> | Date | string
    closedDate?: DateTimeNullableWithAggregatesFilter<"MaintenanceLog"> | Date | string | null
    odometerAtService?: DecimalNullableWithAggregatesFilter<"MaintenanceLog"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MaintenanceLog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MaintenanceLog"> | Date | string
  }

  export type FuelLogWhereInput = {
    AND?: FuelLogWhereInput | FuelLogWhereInput[]
    OR?: FuelLogWhereInput[]
    NOT?: FuelLogWhereInput | FuelLogWhereInput[]
    id?: UuidFilter<"FuelLog"> | string
    vehicleId?: UuidFilter<"FuelLog"> | string
    tripId?: UuidNullableFilter<"FuelLog"> | string | null
    liters?: DecimalFilter<"FuelLog"> | Decimal | DecimalJsLike | number | string
    cost?: DecimalFilter<"FuelLog"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"FuelLog"> | Date | string
    createdAt?: DateTimeFilter<"FuelLog"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    trip?: XOR<TripNullableScalarRelationFilter, TripWhereInput> | null
  }

  export type FuelLogOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    tripId?: SortOrderInput | SortOrder
    liters?: SortOrder
    cost?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    trip?: TripOrderByWithRelationInput
  }

  export type FuelLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FuelLogWhereInput | FuelLogWhereInput[]
    OR?: FuelLogWhereInput[]
    NOT?: FuelLogWhereInput | FuelLogWhereInput[]
    vehicleId?: UuidFilter<"FuelLog"> | string
    tripId?: UuidNullableFilter<"FuelLog"> | string | null
    liters?: DecimalFilter<"FuelLog"> | Decimal | DecimalJsLike | number | string
    cost?: DecimalFilter<"FuelLog"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"FuelLog"> | Date | string
    createdAt?: DateTimeFilter<"FuelLog"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    trip?: XOR<TripNullableScalarRelationFilter, TripWhereInput> | null
  }, "id">

  export type FuelLogOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    tripId?: SortOrderInput | SortOrder
    liters?: SortOrder
    cost?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
    _count?: FuelLogCountOrderByAggregateInput
    _avg?: FuelLogAvgOrderByAggregateInput
    _max?: FuelLogMaxOrderByAggregateInput
    _min?: FuelLogMinOrderByAggregateInput
    _sum?: FuelLogSumOrderByAggregateInput
  }

  export type FuelLogScalarWhereWithAggregatesInput = {
    AND?: FuelLogScalarWhereWithAggregatesInput | FuelLogScalarWhereWithAggregatesInput[]
    OR?: FuelLogScalarWhereWithAggregatesInput[]
    NOT?: FuelLogScalarWhereWithAggregatesInput | FuelLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"FuelLog"> | string
    vehicleId?: UuidWithAggregatesFilter<"FuelLog"> | string
    tripId?: UuidNullableWithAggregatesFilter<"FuelLog"> | string | null
    liters?: DecimalWithAggregatesFilter<"FuelLog"> | Decimal | DecimalJsLike | number | string
    cost?: DecimalWithAggregatesFilter<"FuelLog"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeWithAggregatesFilter<"FuelLog"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"FuelLog"> | Date | string
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: UuidFilter<"Expense"> | string
    vehicleId?: UuidNullableFilter<"Expense"> | string | null
    tripId?: UuidNullableFilter<"Expense"> | string | null
    category?: StringFilter<"Expense"> | string
    amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"Expense"> | Date | string
    notes?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    vehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
    trip?: XOR<TripNullableScalarRelationFilter, TripWhereInput> | null
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    vehicleId?: SortOrderInput | SortOrder
    tripId?: SortOrderInput | SortOrder
    category?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    trip?: TripOrderByWithRelationInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    vehicleId?: UuidNullableFilter<"Expense"> | string | null
    tripId?: UuidNullableFilter<"Expense"> | string | null
    category?: StringFilter<"Expense"> | string
    amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"Expense"> | Date | string
    notes?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    vehicle?: XOR<VehicleNullableScalarRelationFilter, VehicleWhereInput> | null
    trip?: XOR<TripNullableScalarRelationFilter, TripWhereInput> | null
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleId?: SortOrderInput | SortOrder
    tripId?: SortOrderInput | SortOrder
    category?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Expense"> | string
    vehicleId?: UuidNullableWithAggregatesFilter<"Expense"> | string | null
    tripId?: UuidNullableWithAggregatesFilter<"Expense"> | string | null
    category?: StringWithAggregatesFilter<"Expense"> | string
    amount?: DecimalWithAggregatesFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: UuidFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: UuidFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    oldValue?: JsonNullableFilter<"AuditLog">
    newValue?: JsonNullableFilter<"AuditLog">
    performedBy?: UuidFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    performedBy?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: UuidFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    oldValue?: JsonNullableFilter<"AuditLog">
    newValue?: JsonNullableFilter<"AuditLog">
    performedBy?: UuidFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    performedBy?: SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"AuditLog"> | string
    entityType?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: UuidWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    oldValue?: JsonNullableWithAggregatesFilter<"AuditLog">
    newValue?: JsonNullableWithAggregatesFilter<"AuditLog">
    performedBy?: UuidWithAggregatesFilter<"AuditLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    drivers?: DriverCreateNestedManyWithoutUserInput
    createdTrips?: TripCreateNestedManyWithoutCreatorInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    drivers?: DriverUncheckedCreateNestedManyWithoutUserInput
    createdTrips?: TripUncheckedCreateNestedManyWithoutCreatorInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drivers?: DriverUpdateManyWithoutUserNestedInput
    createdTrips?: TripUpdateManyWithoutCreatorNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drivers?: DriverUncheckedUpdateManyWithoutUserNestedInput
    createdTrips?: TripUncheckedUpdateManyWithoutCreatorNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateInput = {
    id?: string
    registrationNumber: string
    nameModel?: string | null
    type?: string | null
    maxLoadCapacityKg?: Decimal | DecimalJsLike | number | string | null
    odometerKm?: Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.VehicleStatus
    region?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutVehicleInput
    fuelLogs?: FuelLogCreateNestedManyWithoutVehicleInput
    expenses?: ExpenseCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    registrationNumber: string
    nameModel?: string | null
    type?: string | null
    maxLoadCapacityKg?: Decimal | DecimalJsLike | number | string | null
    odometerKm?: Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.VehicleStatus
    region?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutVehicleInput
    fuelLogs?: FuelLogUncheckedCreateNestedManyWithoutVehicleInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    nameModel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    maxLoadCapacityKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    odometerKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutVehicleNestedInput
    fuelLogs?: FuelLogUpdateManyWithoutVehicleNestedInput
    expenses?: ExpenseUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    nameModel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    maxLoadCapacityKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    odometerKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutVehicleNestedInput
    fuelLogs?: FuelLogUncheckedUpdateManyWithoutVehicleNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    registrationNumber: string
    nameModel?: string | null
    type?: string | null
    maxLoadCapacityKg?: Decimal | DecimalJsLike | number | string | null
    odometerKm?: Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.VehicleStatus
    region?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    nameModel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    maxLoadCapacityKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    odometerKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    nameModel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    maxLoadCapacityKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    odometerKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverCreateInput = {
    id?: string
    name: string
    licenseNumber: string
    licenseCategory?: string | null
    licenseExpiryDate: Date | string
    contactNumber?: string | null
    safetyScore?: number
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutDriversInput
    trips?: TripCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateInput = {
    id?: string
    userId?: string | null
    name: string
    licenseNumber: string
    licenseCategory?: string | null
    licenseExpiryDate: Date | string
    contactNumber?: string | null
    safetyScore?: number
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: IntFieldUpdateOperationsInput | number
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutDriversNestedInput
    trips?: TripUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: IntFieldUpdateOperationsInput | number
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverCreateManyInput = {
    id?: string
    userId?: string | null
    name: string
    licenseNumber: string
    licenseCategory?: string | null
    licenseExpiryDate: Date | string
    contactNumber?: string | null
    safetyScore?: number
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: IntFieldUpdateOperationsInput | number
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: IntFieldUpdateOperationsInput | number
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateInput = {
    id?: string
    source: string
    destination: string
    cargoWeightKg?: Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.TripStatus
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    aiRecommended?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutTripsInput
    driver: DriverCreateNestedOneWithoutTripsInput
    creator: UserCreateNestedOneWithoutCreatedTripsInput
    fuelLogs?: FuelLogCreateNestedManyWithoutTripInput
    expenses?: ExpenseCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateInput = {
    id?: string
    source: string
    destination: string
    vehicleId: string
    driverId: string
    cargoWeightKg?: Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.TripStatus
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    aiRecommended?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fuelLogs?: FuelLogUncheckedCreateNestedManyWithoutTripInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    cargoWeightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiRecommended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    driver?: DriverUpdateOneRequiredWithoutTripsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedTripsNestedInput
    fuelLogs?: FuelLogUpdateManyWithoutTripNestedInput
    expenses?: ExpenseUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    cargoWeightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiRecommended?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fuelLogs?: FuelLogUncheckedUpdateManyWithoutTripNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyInput = {
    id?: string
    source: string
    destination: string
    vehicleId: string
    driverId: string
    cargoWeightKg?: Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.TripStatus
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    aiRecommended?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    cargoWeightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiRecommended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    cargoWeightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiRecommended?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogCreateInput = {
    id?: string
    type: string
    description?: string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.MaintenanceStatus
    scheduledDate: Date | string
    closedDate?: Date | string | null
    odometerAtService?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutMaintenanceLogsInput
  }

  export type MaintenanceLogUncheckedCreateInput = {
    id?: string
    vehicleId: string
    type: string
    description?: string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.MaintenanceStatus
    scheduledDate: Date | string
    closedDate?: Date | string | null
    odometerAtService?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    odometerAtService?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutMaintenanceLogsNestedInput
  }

  export type MaintenanceLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    odometerAtService?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogCreateManyInput = {
    id?: string
    vehicleId: string
    type: string
    description?: string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.MaintenanceStatus
    scheduledDate: Date | string
    closedDate?: Date | string | null
    odometerAtService?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    odometerAtService?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    odometerAtService?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelLogCreateInput = {
    id?: string
    liters: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    date: Date | string
    createdAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutFuelLogsInput
    trip?: TripCreateNestedOneWithoutFuelLogsInput
  }

  export type FuelLogUncheckedCreateInput = {
    id?: string
    vehicleId: string
    tripId?: string | null
    liters: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    date: Date | string
    createdAt?: Date | string
  }

  export type FuelLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    liters?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutFuelLogsNestedInput
    trip?: TripUpdateOneWithoutFuelLogsNestedInput
  }

  export type FuelLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    liters?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelLogCreateManyInput = {
    id?: string
    vehicleId: string
    tripId?: string | null
    liters: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    date: Date | string
    createdAt?: Date | string
  }

  export type FuelLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    liters?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    liters?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateInput = {
    id?: string
    category: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    notes?: string | null
    createdAt?: Date | string
    vehicle?: VehicleCreateNestedOneWithoutExpensesInput
    trip?: TripCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateInput = {
    id?: string
    vehicleId?: string | null
    tripId?: string | null
    category: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type ExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneWithoutExpensesNestedInput
    trip?: TripUpdateOneWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateManyInput = {
    id?: string
    vehicleId?: string | null
    tripId?: string | null
    category: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type ExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    entityType: string
    entityId: string
    action: string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    entityType: string
    entityId: string
    action: string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    performedBy: string
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    entityType: string
    entityId: string
    action: string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    performedBy: string
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    performedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DriverListRelationFilter = {
    every?: DriverWhereInput
    some?: DriverWhereInput
    none?: DriverWhereInput
  }

  export type TripListRelationFilter = {
    every?: TripWhereInput
    some?: TripWhereInput
    none?: TripWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type DriverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumVehicleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusFilter<$PrismaModel> | $Enums.VehicleStatus
  }

  export type MaintenanceLogListRelationFilter = {
    every?: MaintenanceLogWhereInput
    some?: MaintenanceLogWhereInput
    none?: MaintenanceLogWhereInput
  }

  export type FuelLogListRelationFilter = {
    every?: FuelLogWhereInput
    some?: FuelLogWhereInput
    none?: FuelLogWhereInput
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MaintenanceLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FuelLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    registrationNumber?: SortOrder
    nameModel?: SortOrder
    type?: SortOrder
    maxLoadCapacityKg?: SortOrder
    odometerKm?: SortOrder
    acquisitionCost?: SortOrder
    status?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    maxLoadCapacityKg?: SortOrder
    odometerKm?: SortOrder
    acquisitionCost?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    registrationNumber?: SortOrder
    nameModel?: SortOrder
    type?: SortOrder
    maxLoadCapacityKg?: SortOrder
    odometerKm?: SortOrder
    acquisitionCost?: SortOrder
    status?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    registrationNumber?: SortOrder
    nameModel?: SortOrder
    type?: SortOrder
    maxLoadCapacityKg?: SortOrder
    odometerKm?: SortOrder
    acquisitionCost?: SortOrder
    status?: SortOrder
    region?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    maxLoadCapacityKg?: SortOrder
    odometerKm?: SortOrder
    acquisitionCost?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumVehicleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumDriverStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DriverStatus | EnumDriverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDriverStatusFilter<$PrismaModel> | $Enums.DriverStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DriverCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    licenseNumber?: SortOrder
    licenseCategory?: SortOrder
    licenseExpiryDate?: SortOrder
    contactNumber?: SortOrder
    safetyScore?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverAvgOrderByAggregateInput = {
    safetyScore?: SortOrder
  }

  export type DriverMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    licenseNumber?: SortOrder
    licenseCategory?: SortOrder
    licenseExpiryDate?: SortOrder
    contactNumber?: SortOrder
    safetyScore?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    licenseNumber?: SortOrder
    licenseCategory?: SortOrder
    licenseExpiryDate?: SortOrder
    contactNumber?: SortOrder
    safetyScore?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverSumOrderByAggregateInput = {
    safetyScore?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumDriverStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DriverStatus | EnumDriverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDriverStatusWithAggregatesFilter<$PrismaModel> | $Enums.DriverStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDriverStatusFilter<$PrismaModel>
    _max?: NestedEnumDriverStatusFilter<$PrismaModel>
  }

  export type EnumTripStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTripStatusFilter<$PrismaModel> | $Enums.TripStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type DriverScalarRelationFilter = {
    is?: DriverWhereInput
    isNot?: DriverWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    cargoWeightKg?: SortOrder
    plannedDistanceKm?: SortOrder
    actualDistanceKm?: SortOrder
    fuelConsumedLiters?: SortOrder
    status?: SortOrder
    dispatchedAt?: SortOrder
    completedAt?: SortOrder
    aiRecommended?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripAvgOrderByAggregateInput = {
    cargoWeightKg?: SortOrder
    plannedDistanceKm?: SortOrder
    actualDistanceKm?: SortOrder
    fuelConsumedLiters?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    cargoWeightKg?: SortOrder
    plannedDistanceKm?: SortOrder
    actualDistanceKm?: SortOrder
    fuelConsumedLiters?: SortOrder
    status?: SortOrder
    dispatchedAt?: SortOrder
    completedAt?: SortOrder
    aiRecommended?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    source?: SortOrder
    destination?: SortOrder
    vehicleId?: SortOrder
    driverId?: SortOrder
    cargoWeightKg?: SortOrder
    plannedDistanceKm?: SortOrder
    actualDistanceKm?: SortOrder
    fuelConsumedLiters?: SortOrder
    status?: SortOrder
    dispatchedAt?: SortOrder
    completedAt?: SortOrder
    aiRecommended?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TripSumOrderByAggregateInput = {
    cargoWeightKg?: SortOrder
    plannedDistanceKm?: SortOrder
    actualDistanceKm?: SortOrder
    fuelConsumedLiters?: SortOrder
  }

  export type EnumTripStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTripStatusWithAggregatesFilter<$PrismaModel> | $Enums.TripStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTripStatusFilter<$PrismaModel>
    _max?: NestedEnumTripStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumMaintenanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceStatus | EnumMaintenanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaintenanceStatusFilter<$PrismaModel> | $Enums.MaintenanceStatus
  }

  export type MaintenanceLogCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    closedDate?: SortOrder
    odometerAtService?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceLogAvgOrderByAggregateInput = {
    cost?: SortOrder
    odometerAtService?: SortOrder
  }

  export type MaintenanceLogMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    closedDate?: SortOrder
    odometerAtService?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceLogMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    status?: SortOrder
    scheduledDate?: SortOrder
    closedDate?: SortOrder
    odometerAtService?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaintenanceLogSumOrderByAggregateInput = {
    cost?: SortOrder
    odometerAtService?: SortOrder
  }

  export type EnumMaintenanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceStatus | EnumMaintenanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaintenanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaintenanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaintenanceStatusFilter<$PrismaModel>
    _max?: NestedEnumMaintenanceStatusFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type TripNullableScalarRelationFilter = {
    is?: TripWhereInput | null
    isNot?: TripWhereInput | null
  }

  export type FuelLogCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    tripId?: SortOrder
    liters?: SortOrder
    cost?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type FuelLogAvgOrderByAggregateInput = {
    liters?: SortOrder
    cost?: SortOrder
  }

  export type FuelLogMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    tripId?: SortOrder
    liters?: SortOrder
    cost?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type FuelLogMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    tripId?: SortOrder
    liters?: SortOrder
    cost?: SortOrder
    date?: SortOrder
    createdAt?: SortOrder
  }

  export type FuelLogSumOrderByAggregateInput = {
    liters?: SortOrder
    cost?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type VehicleNullableScalarRelationFilter = {
    is?: VehicleWhereInput | null
    isNot?: VehicleWhereInput | null
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    tripId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    tripId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleId?: SortOrder
    tripId?: SortOrder
    category?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    amount?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    performedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    performedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    action?: SortOrder
    performedBy?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DriverCreateNestedManyWithoutUserInput = {
    create?: XOR<DriverCreateWithoutUserInput, DriverUncheckedCreateWithoutUserInput> | DriverCreateWithoutUserInput[] | DriverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutUserInput | DriverCreateOrConnectWithoutUserInput[]
    createMany?: DriverCreateManyUserInputEnvelope
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
  }

  export type TripCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TripCreateWithoutCreatorInput, TripUncheckedCreateWithoutCreatorInput> | TripCreateWithoutCreatorInput[] | TripUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TripCreateOrConnectWithoutCreatorInput | TripCreateOrConnectWithoutCreatorInput[]
    createMany?: TripCreateManyCreatorInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type DriverUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DriverCreateWithoutUserInput, DriverUncheckedCreateWithoutUserInput> | DriverCreateWithoutUserInput[] | DriverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutUserInput | DriverCreateOrConnectWithoutUserInput[]
    createMany?: DriverCreateManyUserInputEnvelope
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<TripCreateWithoutCreatorInput, TripUncheckedCreateWithoutCreatorInput> | TripCreateWithoutCreatorInput[] | TripUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TripCreateOrConnectWithoutCreatorInput | TripCreateOrConnectWithoutCreatorInput[]
    createMany?: TripCreateManyCreatorInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DriverUpdateManyWithoutUserNestedInput = {
    create?: XOR<DriverCreateWithoutUserInput, DriverUncheckedCreateWithoutUserInput> | DriverCreateWithoutUserInput[] | DriverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutUserInput | DriverCreateOrConnectWithoutUserInput[]
    upsert?: DriverUpsertWithWhereUniqueWithoutUserInput | DriverUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DriverCreateManyUserInputEnvelope
    set?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    disconnect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    delete?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    update?: DriverUpdateWithWhereUniqueWithoutUserInput | DriverUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DriverUpdateManyWithWhereWithoutUserInput | DriverUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DriverScalarWhereInput | DriverScalarWhereInput[]
  }

  export type TripUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TripCreateWithoutCreatorInput, TripUncheckedCreateWithoutCreatorInput> | TripCreateWithoutCreatorInput[] | TripUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TripCreateOrConnectWithoutCreatorInput | TripCreateOrConnectWithoutCreatorInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutCreatorInput | TripUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TripCreateManyCreatorInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutCreatorInput | TripUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TripUpdateManyWithWhereWithoutCreatorInput | TripUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type DriverUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DriverCreateWithoutUserInput, DriverUncheckedCreateWithoutUserInput> | DriverCreateWithoutUserInput[] | DriverUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutUserInput | DriverCreateOrConnectWithoutUserInput[]
    upsert?: DriverUpsertWithWhereUniqueWithoutUserInput | DriverUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DriverCreateManyUserInputEnvelope
    set?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    disconnect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    delete?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    update?: DriverUpdateWithWhereUniqueWithoutUserInput | DriverUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DriverUpdateManyWithWhereWithoutUserInput | DriverUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DriverScalarWhereInput | DriverScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<TripCreateWithoutCreatorInput, TripUncheckedCreateWithoutCreatorInput> | TripCreateWithoutCreatorInput[] | TripUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: TripCreateOrConnectWithoutCreatorInput | TripCreateOrConnectWithoutCreatorInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutCreatorInput | TripUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: TripCreateManyCreatorInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutCreatorInput | TripUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: TripUpdateManyWithWhereWithoutCreatorInput | TripUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type TripCreateNestedManyWithoutVehicleInput = {
    create?: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput> | TripCreateWithoutVehicleInput[] | TripUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutVehicleInput | TripCreateOrConnectWithoutVehicleInput[]
    createMany?: TripCreateManyVehicleInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type MaintenanceLogCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceLogCreateWithoutVehicleInput, MaintenanceLogUncheckedCreateWithoutVehicleInput> | MaintenanceLogCreateWithoutVehicleInput[] | MaintenanceLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceLogCreateOrConnectWithoutVehicleInput | MaintenanceLogCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceLogCreateManyVehicleInputEnvelope
    connect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
  }

  export type FuelLogCreateNestedManyWithoutVehicleInput = {
    create?: XOR<FuelLogCreateWithoutVehicleInput, FuelLogUncheckedCreateWithoutVehicleInput> | FuelLogCreateWithoutVehicleInput[] | FuelLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: FuelLogCreateOrConnectWithoutVehicleInput | FuelLogCreateOrConnectWithoutVehicleInput[]
    createMany?: FuelLogCreateManyVehicleInputEnvelope
    connect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ExpenseCreateWithoutVehicleInput, ExpenseUncheckedCreateWithoutVehicleInput> | ExpenseCreateWithoutVehicleInput[] | ExpenseUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutVehicleInput | ExpenseCreateOrConnectWithoutVehicleInput[]
    createMany?: ExpenseCreateManyVehicleInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput> | TripCreateWithoutVehicleInput[] | TripUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutVehicleInput | TripCreateOrConnectWithoutVehicleInput[]
    createMany?: TripCreateManyVehicleInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type MaintenanceLogUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<MaintenanceLogCreateWithoutVehicleInput, MaintenanceLogUncheckedCreateWithoutVehicleInput> | MaintenanceLogCreateWithoutVehicleInput[] | MaintenanceLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceLogCreateOrConnectWithoutVehicleInput | MaintenanceLogCreateOrConnectWithoutVehicleInput[]
    createMany?: MaintenanceLogCreateManyVehicleInputEnvelope
    connect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
  }

  export type FuelLogUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<FuelLogCreateWithoutVehicleInput, FuelLogUncheckedCreateWithoutVehicleInput> | FuelLogCreateWithoutVehicleInput[] | FuelLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: FuelLogCreateOrConnectWithoutVehicleInput | FuelLogCreateOrConnectWithoutVehicleInput[]
    createMany?: FuelLogCreateManyVehicleInputEnvelope
    connect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<ExpenseCreateWithoutVehicleInput, ExpenseUncheckedCreateWithoutVehicleInput> | ExpenseCreateWithoutVehicleInput[] | ExpenseUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutVehicleInput | ExpenseCreateOrConnectWithoutVehicleInput[]
    createMany?: ExpenseCreateManyVehicleInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumVehicleStatusFieldUpdateOperationsInput = {
    set?: $Enums.VehicleStatus
  }

  export type TripUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput> | TripCreateWithoutVehicleInput[] | TripUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutVehicleInput | TripCreateOrConnectWithoutVehicleInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutVehicleInput | TripUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: TripCreateManyVehicleInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutVehicleInput | TripUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: TripUpdateManyWithWhereWithoutVehicleInput | TripUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type MaintenanceLogUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceLogCreateWithoutVehicleInput, MaintenanceLogUncheckedCreateWithoutVehicleInput> | MaintenanceLogCreateWithoutVehicleInput[] | MaintenanceLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceLogCreateOrConnectWithoutVehicleInput | MaintenanceLogCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceLogUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceLogUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceLogCreateManyVehicleInputEnvelope
    set?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    disconnect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    delete?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    connect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    update?: MaintenanceLogUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceLogUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceLogUpdateManyWithWhereWithoutVehicleInput | MaintenanceLogUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceLogScalarWhereInput | MaintenanceLogScalarWhereInput[]
  }

  export type FuelLogUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<FuelLogCreateWithoutVehicleInput, FuelLogUncheckedCreateWithoutVehicleInput> | FuelLogCreateWithoutVehicleInput[] | FuelLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: FuelLogCreateOrConnectWithoutVehicleInput | FuelLogCreateOrConnectWithoutVehicleInput[]
    upsert?: FuelLogUpsertWithWhereUniqueWithoutVehicleInput | FuelLogUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: FuelLogCreateManyVehicleInputEnvelope
    set?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    disconnect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    delete?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    connect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    update?: FuelLogUpdateWithWhereUniqueWithoutVehicleInput | FuelLogUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: FuelLogUpdateManyWithWhereWithoutVehicleInput | FuelLogUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: FuelLogScalarWhereInput | FuelLogScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ExpenseCreateWithoutVehicleInput, ExpenseUncheckedCreateWithoutVehicleInput> | ExpenseCreateWithoutVehicleInput[] | ExpenseUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutVehicleInput | ExpenseCreateOrConnectWithoutVehicleInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutVehicleInput | ExpenseUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ExpenseCreateManyVehicleInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutVehicleInput | ExpenseUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutVehicleInput | ExpenseUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput> | TripCreateWithoutVehicleInput[] | TripUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: TripCreateOrConnectWithoutVehicleInput | TripCreateOrConnectWithoutVehicleInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutVehicleInput | TripUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: TripCreateManyVehicleInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutVehicleInput | TripUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: TripUpdateManyWithWhereWithoutVehicleInput | TripUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type MaintenanceLogUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<MaintenanceLogCreateWithoutVehicleInput, MaintenanceLogUncheckedCreateWithoutVehicleInput> | MaintenanceLogCreateWithoutVehicleInput[] | MaintenanceLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: MaintenanceLogCreateOrConnectWithoutVehicleInput | MaintenanceLogCreateOrConnectWithoutVehicleInput[]
    upsert?: MaintenanceLogUpsertWithWhereUniqueWithoutVehicleInput | MaintenanceLogUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: MaintenanceLogCreateManyVehicleInputEnvelope
    set?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    disconnect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    delete?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    connect?: MaintenanceLogWhereUniqueInput | MaintenanceLogWhereUniqueInput[]
    update?: MaintenanceLogUpdateWithWhereUniqueWithoutVehicleInput | MaintenanceLogUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: MaintenanceLogUpdateManyWithWhereWithoutVehicleInput | MaintenanceLogUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: MaintenanceLogScalarWhereInput | MaintenanceLogScalarWhereInput[]
  }

  export type FuelLogUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<FuelLogCreateWithoutVehicleInput, FuelLogUncheckedCreateWithoutVehicleInput> | FuelLogCreateWithoutVehicleInput[] | FuelLogUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: FuelLogCreateOrConnectWithoutVehicleInput | FuelLogCreateOrConnectWithoutVehicleInput[]
    upsert?: FuelLogUpsertWithWhereUniqueWithoutVehicleInput | FuelLogUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: FuelLogCreateManyVehicleInputEnvelope
    set?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    disconnect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    delete?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    connect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    update?: FuelLogUpdateWithWhereUniqueWithoutVehicleInput | FuelLogUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: FuelLogUpdateManyWithWhereWithoutVehicleInput | FuelLogUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: FuelLogScalarWhereInput | FuelLogScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<ExpenseCreateWithoutVehicleInput, ExpenseUncheckedCreateWithoutVehicleInput> | ExpenseCreateWithoutVehicleInput[] | ExpenseUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutVehicleInput | ExpenseCreateOrConnectWithoutVehicleInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutVehicleInput | ExpenseUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: ExpenseCreateManyVehicleInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutVehicleInput | ExpenseUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutVehicleInput | ExpenseUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDriversInput = {
    create?: XOR<UserCreateWithoutDriversInput, UserUncheckedCreateWithoutDriversInput>
    connectOrCreate?: UserCreateOrConnectWithoutDriversInput
    connect?: UserWhereUniqueInput
  }

  export type TripCreateNestedManyWithoutDriverInput = {
    create?: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput> | TripCreateWithoutDriverInput[] | TripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDriverInput | TripCreateOrConnectWithoutDriverInput[]
    createMany?: TripCreateManyDriverInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type TripUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput> | TripCreateWithoutDriverInput[] | TripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDriverInput | TripCreateOrConnectWithoutDriverInput[]
    createMany?: TripCreateManyDriverInputEnvelope
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDriverStatusFieldUpdateOperationsInput = {
    set?: $Enums.DriverStatus
  }

  export type UserUpdateOneWithoutDriversNestedInput = {
    create?: XOR<UserCreateWithoutDriversInput, UserUncheckedCreateWithoutDriversInput>
    connectOrCreate?: UserCreateOrConnectWithoutDriversInput
    upsert?: UserUpsertWithoutDriversInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDriversInput, UserUpdateWithoutDriversInput>, UserUncheckedUpdateWithoutDriversInput>
  }

  export type TripUpdateManyWithoutDriverNestedInput = {
    create?: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput> | TripCreateWithoutDriverInput[] | TripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDriverInput | TripCreateOrConnectWithoutDriverInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutDriverInput | TripUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: TripCreateManyDriverInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutDriverInput | TripUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: TripUpdateManyWithWhereWithoutDriverInput | TripUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type TripUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput> | TripCreateWithoutDriverInput[] | TripUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TripCreateOrConnectWithoutDriverInput | TripCreateOrConnectWithoutDriverInput[]
    upsert?: TripUpsertWithWhereUniqueWithoutDriverInput | TripUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: TripCreateManyDriverInputEnvelope
    set?: TripWhereUniqueInput | TripWhereUniqueInput[]
    disconnect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    delete?: TripWhereUniqueInput | TripWhereUniqueInput[]
    connect?: TripWhereUniqueInput | TripWhereUniqueInput[]
    update?: TripUpdateWithWhereUniqueWithoutDriverInput | TripUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: TripUpdateManyWithWhereWithoutDriverInput | TripUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: TripScalarWhereInput | TripScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutTripsInput = {
    create?: XOR<VehicleCreateWithoutTripsInput, VehicleUncheckedCreateWithoutTripsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutTripsInput
    connect?: VehicleWhereUniqueInput
  }

  export type DriverCreateNestedOneWithoutTripsInput = {
    create?: XOR<DriverCreateWithoutTripsInput, DriverUncheckedCreateWithoutTripsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutTripsInput
    connect?: DriverWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedTripsInput = {
    create?: XOR<UserCreateWithoutCreatedTripsInput, UserUncheckedCreateWithoutCreatedTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTripsInput
    connect?: UserWhereUniqueInput
  }

  export type FuelLogCreateNestedManyWithoutTripInput = {
    create?: XOR<FuelLogCreateWithoutTripInput, FuelLogUncheckedCreateWithoutTripInput> | FuelLogCreateWithoutTripInput[] | FuelLogUncheckedCreateWithoutTripInput[]
    connectOrCreate?: FuelLogCreateOrConnectWithoutTripInput | FuelLogCreateOrConnectWithoutTripInput[]
    createMany?: FuelLogCreateManyTripInputEnvelope
    connect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutTripInput = {
    create?: XOR<ExpenseCreateWithoutTripInput, ExpenseUncheckedCreateWithoutTripInput> | ExpenseCreateWithoutTripInput[] | ExpenseUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutTripInput | ExpenseCreateOrConnectWithoutTripInput[]
    createMany?: ExpenseCreateManyTripInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type FuelLogUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<FuelLogCreateWithoutTripInput, FuelLogUncheckedCreateWithoutTripInput> | FuelLogCreateWithoutTripInput[] | FuelLogUncheckedCreateWithoutTripInput[]
    connectOrCreate?: FuelLogCreateOrConnectWithoutTripInput | FuelLogCreateOrConnectWithoutTripInput[]
    createMany?: FuelLogCreateManyTripInputEnvelope
    connect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<ExpenseCreateWithoutTripInput, ExpenseUncheckedCreateWithoutTripInput> | ExpenseCreateWithoutTripInput[] | ExpenseUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutTripInput | ExpenseCreateOrConnectWithoutTripInput[]
    createMany?: ExpenseCreateManyTripInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type EnumTripStatusFieldUpdateOperationsInput = {
    set?: $Enums.TripStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VehicleUpdateOneRequiredWithoutTripsNestedInput = {
    create?: XOR<VehicleCreateWithoutTripsInput, VehicleUncheckedCreateWithoutTripsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutTripsInput
    upsert?: VehicleUpsertWithoutTripsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutTripsInput, VehicleUpdateWithoutTripsInput>, VehicleUncheckedUpdateWithoutTripsInput>
  }

  export type DriverUpdateOneRequiredWithoutTripsNestedInput = {
    create?: XOR<DriverCreateWithoutTripsInput, DriverUncheckedCreateWithoutTripsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutTripsInput
    upsert?: DriverUpsertWithoutTripsInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutTripsInput, DriverUpdateWithoutTripsInput>, DriverUncheckedUpdateWithoutTripsInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedTripsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedTripsInput, UserUncheckedCreateWithoutCreatedTripsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedTripsInput
    upsert?: UserUpsertWithoutCreatedTripsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedTripsInput, UserUpdateWithoutCreatedTripsInput>, UserUncheckedUpdateWithoutCreatedTripsInput>
  }

  export type FuelLogUpdateManyWithoutTripNestedInput = {
    create?: XOR<FuelLogCreateWithoutTripInput, FuelLogUncheckedCreateWithoutTripInput> | FuelLogCreateWithoutTripInput[] | FuelLogUncheckedCreateWithoutTripInput[]
    connectOrCreate?: FuelLogCreateOrConnectWithoutTripInput | FuelLogCreateOrConnectWithoutTripInput[]
    upsert?: FuelLogUpsertWithWhereUniqueWithoutTripInput | FuelLogUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: FuelLogCreateManyTripInputEnvelope
    set?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    disconnect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    delete?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    connect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    update?: FuelLogUpdateWithWhereUniqueWithoutTripInput | FuelLogUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: FuelLogUpdateManyWithWhereWithoutTripInput | FuelLogUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: FuelLogScalarWhereInput | FuelLogScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutTripNestedInput = {
    create?: XOR<ExpenseCreateWithoutTripInput, ExpenseUncheckedCreateWithoutTripInput> | ExpenseCreateWithoutTripInput[] | ExpenseUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutTripInput | ExpenseCreateOrConnectWithoutTripInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutTripInput | ExpenseUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: ExpenseCreateManyTripInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutTripInput | ExpenseUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutTripInput | ExpenseUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type FuelLogUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<FuelLogCreateWithoutTripInput, FuelLogUncheckedCreateWithoutTripInput> | FuelLogCreateWithoutTripInput[] | FuelLogUncheckedCreateWithoutTripInput[]
    connectOrCreate?: FuelLogCreateOrConnectWithoutTripInput | FuelLogCreateOrConnectWithoutTripInput[]
    upsert?: FuelLogUpsertWithWhereUniqueWithoutTripInput | FuelLogUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: FuelLogCreateManyTripInputEnvelope
    set?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    disconnect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    delete?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    connect?: FuelLogWhereUniqueInput | FuelLogWhereUniqueInput[]
    update?: FuelLogUpdateWithWhereUniqueWithoutTripInput | FuelLogUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: FuelLogUpdateManyWithWhereWithoutTripInput | FuelLogUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: FuelLogScalarWhereInput | FuelLogScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<ExpenseCreateWithoutTripInput, ExpenseUncheckedCreateWithoutTripInput> | ExpenseCreateWithoutTripInput[] | ExpenseUncheckedCreateWithoutTripInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutTripInput | ExpenseCreateOrConnectWithoutTripInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutTripInput | ExpenseUpsertWithWhereUniqueWithoutTripInput[]
    createMany?: ExpenseCreateManyTripInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutTripInput | ExpenseUpdateWithWhereUniqueWithoutTripInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutTripInput | ExpenseUpdateManyWithWhereWithoutTripInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutMaintenanceLogsInput = {
    create?: XOR<VehicleCreateWithoutMaintenanceLogsInput, VehicleUncheckedCreateWithoutMaintenanceLogsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenanceLogsInput
    connect?: VehicleWhereUniqueInput
  }

  export type EnumMaintenanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.MaintenanceStatus
  }

  export type VehicleUpdateOneRequiredWithoutMaintenanceLogsNestedInput = {
    create?: XOR<VehicleCreateWithoutMaintenanceLogsInput, VehicleUncheckedCreateWithoutMaintenanceLogsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutMaintenanceLogsInput
    upsert?: VehicleUpsertWithoutMaintenanceLogsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutMaintenanceLogsInput, VehicleUpdateWithoutMaintenanceLogsInput>, VehicleUncheckedUpdateWithoutMaintenanceLogsInput>
  }

  export type VehicleCreateNestedOneWithoutFuelLogsInput = {
    create?: XOR<VehicleCreateWithoutFuelLogsInput, VehicleUncheckedCreateWithoutFuelLogsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutFuelLogsInput
    connect?: VehicleWhereUniqueInput
  }

  export type TripCreateNestedOneWithoutFuelLogsInput = {
    create?: XOR<TripCreateWithoutFuelLogsInput, TripUncheckedCreateWithoutFuelLogsInput>
    connectOrCreate?: TripCreateOrConnectWithoutFuelLogsInput
    connect?: TripWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type VehicleUpdateOneRequiredWithoutFuelLogsNestedInput = {
    create?: XOR<VehicleCreateWithoutFuelLogsInput, VehicleUncheckedCreateWithoutFuelLogsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutFuelLogsInput
    upsert?: VehicleUpsertWithoutFuelLogsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutFuelLogsInput, VehicleUpdateWithoutFuelLogsInput>, VehicleUncheckedUpdateWithoutFuelLogsInput>
  }

  export type TripUpdateOneWithoutFuelLogsNestedInput = {
    create?: XOR<TripCreateWithoutFuelLogsInput, TripUncheckedCreateWithoutFuelLogsInput>
    connectOrCreate?: TripCreateOrConnectWithoutFuelLogsInput
    upsert?: TripUpsertWithoutFuelLogsInput
    disconnect?: TripWhereInput | boolean
    delete?: TripWhereInput | boolean
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutFuelLogsInput, TripUpdateWithoutFuelLogsInput>, TripUncheckedUpdateWithoutFuelLogsInput>
  }

  export type VehicleCreateNestedOneWithoutExpensesInput = {
    create?: XOR<VehicleCreateWithoutExpensesInput, VehicleUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutExpensesInput
    connect?: VehicleWhereUniqueInput
  }

  export type TripCreateNestedOneWithoutExpensesInput = {
    create?: XOR<TripCreateWithoutExpensesInput, TripUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: TripCreateOrConnectWithoutExpensesInput
    connect?: TripWhereUniqueInput
  }

  export type VehicleUpdateOneWithoutExpensesNestedInput = {
    create?: XOR<VehicleCreateWithoutExpensesInput, VehicleUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutExpensesInput
    upsert?: VehicleUpsertWithoutExpensesInput
    disconnect?: VehicleWhereInput | boolean
    delete?: VehicleWhereInput | boolean
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutExpensesInput, VehicleUpdateWithoutExpensesInput>, VehicleUncheckedUpdateWithoutExpensesInput>
  }

  export type TripUpdateOneWithoutExpensesNestedInput = {
    create?: XOR<TripCreateWithoutExpensesInput, TripUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: TripCreateOrConnectWithoutExpensesInput
    upsert?: TripUpsertWithoutExpensesInput
    disconnect?: TripWhereInput | boolean
    delete?: TripWhereInput | boolean
    connect?: TripWhereUniqueInput
    update?: XOR<XOR<TripUpdateToOneWithWhereWithoutExpensesInput, TripUpdateWithoutExpensesInput>, TripUncheckedUpdateWithoutExpensesInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumVehicleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusFilter<$PrismaModel> | $Enums.VehicleStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VehicleStatus | EnumVehicleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VehicleStatus[] | ListEnumVehicleStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVehicleStatusWithAggregatesFilter<$PrismaModel> | $Enums.VehicleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVehicleStatusFilter<$PrismaModel>
    _max?: NestedEnumVehicleStatusFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumDriverStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DriverStatus | EnumDriverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDriverStatusFilter<$PrismaModel> | $Enums.DriverStatus
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumDriverStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DriverStatus | EnumDriverStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DriverStatus[] | ListEnumDriverStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDriverStatusWithAggregatesFilter<$PrismaModel> | $Enums.DriverStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDriverStatusFilter<$PrismaModel>
    _max?: NestedEnumDriverStatusFilter<$PrismaModel>
  }

  export type NestedEnumTripStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTripStatusFilter<$PrismaModel> | $Enums.TripStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumTripStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TripStatus | EnumTripStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TripStatus[] | ListEnumTripStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTripStatusWithAggregatesFilter<$PrismaModel> | $Enums.TripStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTripStatusFilter<$PrismaModel>
    _max?: NestedEnumTripStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumMaintenanceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceStatus | EnumMaintenanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaintenanceStatusFilter<$PrismaModel> | $Enums.MaintenanceStatus
  }

  export type NestedEnumMaintenanceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MaintenanceStatus | EnumMaintenanceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MaintenanceStatus[] | ListEnumMaintenanceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMaintenanceStatusWithAggregatesFilter<$PrismaModel> | $Enums.MaintenanceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMaintenanceStatusFilter<$PrismaModel>
    _max?: NestedEnumMaintenanceStatusFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DriverCreateWithoutUserInput = {
    id?: string
    name: string
    licenseNumber: string
    licenseCategory?: string | null
    licenseExpiryDate: Date | string
    contactNumber?: string | null
    safetyScore?: number
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    licenseNumber: string
    licenseCategory?: string | null
    licenseExpiryDate: Date | string
    contactNumber?: string | null
    safetyScore?: number
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutUserInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutUserInput, DriverUncheckedCreateWithoutUserInput>
  }

  export type DriverCreateManyUserInputEnvelope = {
    data: DriverCreateManyUserInput | DriverCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TripCreateWithoutCreatorInput = {
    id?: string
    source: string
    destination: string
    cargoWeightKg?: Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.TripStatus
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    aiRecommended?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutTripsInput
    driver: DriverCreateNestedOneWithoutTripsInput
    fuelLogs?: FuelLogCreateNestedManyWithoutTripInput
    expenses?: ExpenseCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutCreatorInput = {
    id?: string
    source: string
    destination: string
    vehicleId: string
    driverId: string
    cargoWeightKg?: Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.TripStatus
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    aiRecommended?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    fuelLogs?: FuelLogUncheckedCreateNestedManyWithoutTripInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutCreatorInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutCreatorInput, TripUncheckedCreateWithoutCreatorInput>
  }

  export type TripCreateManyCreatorInputEnvelope = {
    data: TripCreateManyCreatorInput | TripCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    entityType: string
    entityId: string
    action: string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    entityType: string
    entityId: string
    action: string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DriverUpsertWithWhereUniqueWithoutUserInput = {
    where: DriverWhereUniqueInput
    update: XOR<DriverUpdateWithoutUserInput, DriverUncheckedUpdateWithoutUserInput>
    create: XOR<DriverCreateWithoutUserInput, DriverUncheckedCreateWithoutUserInput>
  }

  export type DriverUpdateWithWhereUniqueWithoutUserInput = {
    where: DriverWhereUniqueInput
    data: XOR<DriverUpdateWithoutUserInput, DriverUncheckedUpdateWithoutUserInput>
  }

  export type DriverUpdateManyWithWhereWithoutUserInput = {
    where: DriverScalarWhereInput
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyWithoutUserInput>
  }

  export type DriverScalarWhereInput = {
    AND?: DriverScalarWhereInput | DriverScalarWhereInput[]
    OR?: DriverScalarWhereInput[]
    NOT?: DriverScalarWhereInput | DriverScalarWhereInput[]
    id?: UuidFilter<"Driver"> | string
    userId?: UuidNullableFilter<"Driver"> | string | null
    name?: StringFilter<"Driver"> | string
    licenseNumber?: StringFilter<"Driver"> | string
    licenseCategory?: StringNullableFilter<"Driver"> | string | null
    licenseExpiryDate?: DateTimeFilter<"Driver"> | Date | string
    contactNumber?: StringNullableFilter<"Driver"> | string | null
    safetyScore?: IntFilter<"Driver"> | number
    status?: EnumDriverStatusFilter<"Driver"> | $Enums.DriverStatus
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
  }

  export type TripUpsertWithWhereUniqueWithoutCreatorInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutCreatorInput, TripUncheckedUpdateWithoutCreatorInput>
    create: XOR<TripCreateWithoutCreatorInput, TripUncheckedCreateWithoutCreatorInput>
  }

  export type TripUpdateWithWhereUniqueWithoutCreatorInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutCreatorInput, TripUncheckedUpdateWithoutCreatorInput>
  }

  export type TripUpdateManyWithWhereWithoutCreatorInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutCreatorInput>
  }

  export type TripScalarWhereInput = {
    AND?: TripScalarWhereInput | TripScalarWhereInput[]
    OR?: TripScalarWhereInput[]
    NOT?: TripScalarWhereInput | TripScalarWhereInput[]
    id?: UuidFilter<"Trip"> | string
    source?: StringFilter<"Trip"> | string
    destination?: StringFilter<"Trip"> | string
    vehicleId?: UuidFilter<"Trip"> | string
    driverId?: UuidFilter<"Trip"> | string
    cargoWeightKg?: DecimalNullableFilter<"Trip"> | Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: DecimalNullableFilter<"Trip"> | Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: DecimalNullableFilter<"Trip"> | Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: DecimalNullableFilter<"Trip"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumTripStatusFilter<"Trip"> | $Enums.TripStatus
    dispatchedAt?: DateTimeNullableFilter<"Trip"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Trip"> | Date | string | null
    aiRecommended?: BoolFilter<"Trip"> | boolean
    createdBy?: UuidFilter<"Trip"> | string
    createdAt?: DateTimeFilter<"Trip"> | Date | string
    updatedAt?: DateTimeFilter<"Trip"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: UuidFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: UuidFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    oldValue?: JsonNullableFilter<"AuditLog">
    newValue?: JsonNullableFilter<"AuditLog">
    performedBy?: UuidFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type TripCreateWithoutVehicleInput = {
    id?: string
    source: string
    destination: string
    cargoWeightKg?: Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.TripStatus
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    aiRecommended?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    driver: DriverCreateNestedOneWithoutTripsInput
    creator: UserCreateNestedOneWithoutCreatedTripsInput
    fuelLogs?: FuelLogCreateNestedManyWithoutTripInput
    expenses?: ExpenseCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutVehicleInput = {
    id?: string
    source: string
    destination: string
    driverId: string
    cargoWeightKg?: Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.TripStatus
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    aiRecommended?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fuelLogs?: FuelLogUncheckedCreateNestedManyWithoutTripInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutVehicleInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput>
  }

  export type TripCreateManyVehicleInputEnvelope = {
    data: TripCreateManyVehicleInput | TripCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceLogCreateWithoutVehicleInput = {
    id?: string
    type: string
    description?: string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.MaintenanceStatus
    scheduledDate: Date | string
    closedDate?: Date | string | null
    odometerAtService?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceLogUncheckedCreateWithoutVehicleInput = {
    id?: string
    type: string
    description?: string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.MaintenanceStatus
    scheduledDate: Date | string
    closedDate?: Date | string | null
    odometerAtService?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceLogCreateOrConnectWithoutVehicleInput = {
    where: MaintenanceLogWhereUniqueInput
    create: XOR<MaintenanceLogCreateWithoutVehicleInput, MaintenanceLogUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceLogCreateManyVehicleInputEnvelope = {
    data: MaintenanceLogCreateManyVehicleInput | MaintenanceLogCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type FuelLogCreateWithoutVehicleInput = {
    id?: string
    liters: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    date: Date | string
    createdAt?: Date | string
    trip?: TripCreateNestedOneWithoutFuelLogsInput
  }

  export type FuelLogUncheckedCreateWithoutVehicleInput = {
    id?: string
    tripId?: string | null
    liters: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    date: Date | string
    createdAt?: Date | string
  }

  export type FuelLogCreateOrConnectWithoutVehicleInput = {
    where: FuelLogWhereUniqueInput
    create: XOR<FuelLogCreateWithoutVehicleInput, FuelLogUncheckedCreateWithoutVehicleInput>
  }

  export type FuelLogCreateManyVehicleInputEnvelope = {
    data: FuelLogCreateManyVehicleInput | FuelLogCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutVehicleInput = {
    id?: string
    category: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    notes?: string | null
    createdAt?: Date | string
    trip?: TripCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateWithoutVehicleInput = {
    id?: string
    tripId?: string | null
    category: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type ExpenseCreateOrConnectWithoutVehicleInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutVehicleInput, ExpenseUncheckedCreateWithoutVehicleInput>
  }

  export type ExpenseCreateManyVehicleInputEnvelope = {
    data: ExpenseCreateManyVehicleInput | ExpenseCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type TripUpsertWithWhereUniqueWithoutVehicleInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutVehicleInput, TripUncheckedUpdateWithoutVehicleInput>
    create: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput>
  }

  export type TripUpdateWithWhereUniqueWithoutVehicleInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutVehicleInput, TripUncheckedUpdateWithoutVehicleInput>
  }

  export type TripUpdateManyWithWhereWithoutVehicleInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutVehicleInput>
  }

  export type MaintenanceLogUpsertWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceLogWhereUniqueInput
    update: XOR<MaintenanceLogUpdateWithoutVehicleInput, MaintenanceLogUncheckedUpdateWithoutVehicleInput>
    create: XOR<MaintenanceLogCreateWithoutVehicleInput, MaintenanceLogUncheckedCreateWithoutVehicleInput>
  }

  export type MaintenanceLogUpdateWithWhereUniqueWithoutVehicleInput = {
    where: MaintenanceLogWhereUniqueInput
    data: XOR<MaintenanceLogUpdateWithoutVehicleInput, MaintenanceLogUncheckedUpdateWithoutVehicleInput>
  }

  export type MaintenanceLogUpdateManyWithWhereWithoutVehicleInput = {
    where: MaintenanceLogScalarWhereInput
    data: XOR<MaintenanceLogUpdateManyMutationInput, MaintenanceLogUncheckedUpdateManyWithoutVehicleInput>
  }

  export type MaintenanceLogScalarWhereInput = {
    AND?: MaintenanceLogScalarWhereInput | MaintenanceLogScalarWhereInput[]
    OR?: MaintenanceLogScalarWhereInput[]
    NOT?: MaintenanceLogScalarWhereInput | MaintenanceLogScalarWhereInput[]
    id?: UuidFilter<"MaintenanceLog"> | string
    vehicleId?: UuidFilter<"MaintenanceLog"> | string
    type?: StringFilter<"MaintenanceLog"> | string
    description?: StringNullableFilter<"MaintenanceLog"> | string | null
    cost?: DecimalNullableFilter<"MaintenanceLog"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumMaintenanceStatusFilter<"MaintenanceLog"> | $Enums.MaintenanceStatus
    scheduledDate?: DateTimeFilter<"MaintenanceLog"> | Date | string
    closedDate?: DateTimeNullableFilter<"MaintenanceLog"> | Date | string | null
    odometerAtService?: DecimalNullableFilter<"MaintenanceLog"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"MaintenanceLog"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceLog"> | Date | string
  }

  export type FuelLogUpsertWithWhereUniqueWithoutVehicleInput = {
    where: FuelLogWhereUniqueInput
    update: XOR<FuelLogUpdateWithoutVehicleInput, FuelLogUncheckedUpdateWithoutVehicleInput>
    create: XOR<FuelLogCreateWithoutVehicleInput, FuelLogUncheckedCreateWithoutVehicleInput>
  }

  export type FuelLogUpdateWithWhereUniqueWithoutVehicleInput = {
    where: FuelLogWhereUniqueInput
    data: XOR<FuelLogUpdateWithoutVehicleInput, FuelLogUncheckedUpdateWithoutVehicleInput>
  }

  export type FuelLogUpdateManyWithWhereWithoutVehicleInput = {
    where: FuelLogScalarWhereInput
    data: XOR<FuelLogUpdateManyMutationInput, FuelLogUncheckedUpdateManyWithoutVehicleInput>
  }

  export type FuelLogScalarWhereInput = {
    AND?: FuelLogScalarWhereInput | FuelLogScalarWhereInput[]
    OR?: FuelLogScalarWhereInput[]
    NOT?: FuelLogScalarWhereInput | FuelLogScalarWhereInput[]
    id?: UuidFilter<"FuelLog"> | string
    vehicleId?: UuidFilter<"FuelLog"> | string
    tripId?: UuidNullableFilter<"FuelLog"> | string | null
    liters?: DecimalFilter<"FuelLog"> | Decimal | DecimalJsLike | number | string
    cost?: DecimalFilter<"FuelLog"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"FuelLog"> | Date | string
    createdAt?: DateTimeFilter<"FuelLog"> | Date | string
  }

  export type ExpenseUpsertWithWhereUniqueWithoutVehicleInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutVehicleInput, ExpenseUncheckedUpdateWithoutVehicleInput>
    create: XOR<ExpenseCreateWithoutVehicleInput, ExpenseUncheckedCreateWithoutVehicleInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutVehicleInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutVehicleInput, ExpenseUncheckedUpdateWithoutVehicleInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutVehicleInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutVehicleInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    id?: UuidFilter<"Expense"> | string
    vehicleId?: UuidNullableFilter<"Expense"> | string | null
    tripId?: UuidNullableFilter<"Expense"> | string | null
    category?: StringFilter<"Expense"> | string
    amount?: DecimalFilter<"Expense"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"Expense"> | Date | string
    notes?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
  }

  export type UserCreateWithoutDriversInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdTrips?: TripCreateNestedManyWithoutCreatorInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDriversInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdTrips?: TripUncheckedCreateNestedManyWithoutCreatorInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDriversInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDriversInput, UserUncheckedCreateWithoutDriversInput>
  }

  export type TripCreateWithoutDriverInput = {
    id?: string
    source: string
    destination: string
    cargoWeightKg?: Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.TripStatus
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    aiRecommended?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutTripsInput
    creator: UserCreateNestedOneWithoutCreatedTripsInput
    fuelLogs?: FuelLogCreateNestedManyWithoutTripInput
    expenses?: ExpenseCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutDriverInput = {
    id?: string
    source: string
    destination: string
    vehicleId: string
    cargoWeightKg?: Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.TripStatus
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    aiRecommended?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fuelLogs?: FuelLogUncheckedCreateNestedManyWithoutTripInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutDriverInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput>
  }

  export type TripCreateManyDriverInputEnvelope = {
    data: TripCreateManyDriverInput | TripCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDriversInput = {
    update: XOR<UserUpdateWithoutDriversInput, UserUncheckedUpdateWithoutDriversInput>
    create: XOR<UserCreateWithoutDriversInput, UserUncheckedCreateWithoutDriversInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDriversInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDriversInput, UserUncheckedUpdateWithoutDriversInput>
  }

  export type UserUpdateWithoutDriversInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTrips?: TripUpdateManyWithoutCreatorNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDriversInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdTrips?: TripUncheckedUpdateManyWithoutCreatorNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TripUpsertWithWhereUniqueWithoutDriverInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutDriverInput, TripUncheckedUpdateWithoutDriverInput>
    create: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput>
  }

  export type TripUpdateWithWhereUniqueWithoutDriverInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutDriverInput, TripUncheckedUpdateWithoutDriverInput>
  }

  export type TripUpdateManyWithWhereWithoutDriverInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutDriverInput>
  }

  export type VehicleCreateWithoutTripsInput = {
    id?: string
    registrationNumber: string
    nameModel?: string | null
    type?: string | null
    maxLoadCapacityKg?: Decimal | DecimalJsLike | number | string | null
    odometerKm?: Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.VehicleStatus
    region?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutVehicleInput
    fuelLogs?: FuelLogCreateNestedManyWithoutVehicleInput
    expenses?: ExpenseCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutTripsInput = {
    id?: string
    registrationNumber: string
    nameModel?: string | null
    type?: string | null
    maxLoadCapacityKg?: Decimal | DecimalJsLike | number | string | null
    odometerKm?: Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.VehicleStatus
    region?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutVehicleInput
    fuelLogs?: FuelLogUncheckedCreateNestedManyWithoutVehicleInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutTripsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutTripsInput, VehicleUncheckedCreateWithoutTripsInput>
  }

  export type DriverCreateWithoutTripsInput = {
    id?: string
    name: string
    licenseNumber: string
    licenseCategory?: string | null
    licenseExpiryDate: Date | string
    contactNumber?: string | null
    safetyScore?: number
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutDriversInput
  }

  export type DriverUncheckedCreateWithoutTripsInput = {
    id?: string
    userId?: string | null
    name: string
    licenseNumber: string
    licenseCategory?: string | null
    licenseExpiryDate: Date | string
    contactNumber?: string | null
    safetyScore?: number
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverCreateOrConnectWithoutTripsInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutTripsInput, DriverUncheckedCreateWithoutTripsInput>
  }

  export type UserCreateWithoutCreatedTripsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    drivers?: DriverCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedTripsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    drivers?: DriverUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedTripsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedTripsInput, UserUncheckedCreateWithoutCreatedTripsInput>
  }

  export type FuelLogCreateWithoutTripInput = {
    id?: string
    liters: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    date: Date | string
    createdAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutFuelLogsInput
  }

  export type FuelLogUncheckedCreateWithoutTripInput = {
    id?: string
    vehicleId: string
    liters: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    date: Date | string
    createdAt?: Date | string
  }

  export type FuelLogCreateOrConnectWithoutTripInput = {
    where: FuelLogWhereUniqueInput
    create: XOR<FuelLogCreateWithoutTripInput, FuelLogUncheckedCreateWithoutTripInput>
  }

  export type FuelLogCreateManyTripInputEnvelope = {
    data: FuelLogCreateManyTripInput | FuelLogCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type ExpenseCreateWithoutTripInput = {
    id?: string
    category: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    notes?: string | null
    createdAt?: Date | string
    vehicle?: VehicleCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateWithoutTripInput = {
    id?: string
    vehicleId?: string | null
    category: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type ExpenseCreateOrConnectWithoutTripInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutTripInput, ExpenseUncheckedCreateWithoutTripInput>
  }

  export type ExpenseCreateManyTripInputEnvelope = {
    data: ExpenseCreateManyTripInput | ExpenseCreateManyTripInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithoutTripsInput = {
    update: XOR<VehicleUpdateWithoutTripsInput, VehicleUncheckedUpdateWithoutTripsInput>
    create: XOR<VehicleCreateWithoutTripsInput, VehicleUncheckedCreateWithoutTripsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutTripsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutTripsInput, VehicleUncheckedUpdateWithoutTripsInput>
  }

  export type VehicleUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    nameModel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    maxLoadCapacityKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    odometerKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutVehicleNestedInput
    fuelLogs?: FuelLogUpdateManyWithoutVehicleNestedInput
    expenses?: ExpenseUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    nameModel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    maxLoadCapacityKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    odometerKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutVehicleNestedInput
    fuelLogs?: FuelLogUncheckedUpdateManyWithoutVehicleNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type DriverUpsertWithoutTripsInput = {
    update: XOR<DriverUpdateWithoutTripsInput, DriverUncheckedUpdateWithoutTripsInput>
    create: XOR<DriverCreateWithoutTripsInput, DriverUncheckedCreateWithoutTripsInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutTripsInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutTripsInput, DriverUncheckedUpdateWithoutTripsInput>
  }

  export type DriverUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: IntFieldUpdateOperationsInput | number
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutDriversNestedInput
  }

  export type DriverUncheckedUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: IntFieldUpdateOperationsInput | number
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutCreatedTripsInput = {
    update: XOR<UserUpdateWithoutCreatedTripsInput, UserUncheckedUpdateWithoutCreatedTripsInput>
    create: XOR<UserCreateWithoutCreatedTripsInput, UserUncheckedCreateWithoutCreatedTripsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedTripsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedTripsInput, UserUncheckedUpdateWithoutCreatedTripsInput>
  }

  export type UserUpdateWithoutCreatedTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drivers?: DriverUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drivers?: DriverUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FuelLogUpsertWithWhereUniqueWithoutTripInput = {
    where: FuelLogWhereUniqueInput
    update: XOR<FuelLogUpdateWithoutTripInput, FuelLogUncheckedUpdateWithoutTripInput>
    create: XOR<FuelLogCreateWithoutTripInput, FuelLogUncheckedCreateWithoutTripInput>
  }

  export type FuelLogUpdateWithWhereUniqueWithoutTripInput = {
    where: FuelLogWhereUniqueInput
    data: XOR<FuelLogUpdateWithoutTripInput, FuelLogUncheckedUpdateWithoutTripInput>
  }

  export type FuelLogUpdateManyWithWhereWithoutTripInput = {
    where: FuelLogScalarWhereInput
    data: XOR<FuelLogUpdateManyMutationInput, FuelLogUncheckedUpdateManyWithoutTripInput>
  }

  export type ExpenseUpsertWithWhereUniqueWithoutTripInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutTripInput, ExpenseUncheckedUpdateWithoutTripInput>
    create: XOR<ExpenseCreateWithoutTripInput, ExpenseUncheckedCreateWithoutTripInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutTripInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutTripInput, ExpenseUncheckedUpdateWithoutTripInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutTripInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutTripInput>
  }

  export type VehicleCreateWithoutMaintenanceLogsInput = {
    id?: string
    registrationNumber: string
    nameModel?: string | null
    type?: string | null
    maxLoadCapacityKg?: Decimal | DecimalJsLike | number | string | null
    odometerKm?: Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.VehicleStatus
    region?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutVehicleInput
    fuelLogs?: FuelLogCreateNestedManyWithoutVehicleInput
    expenses?: ExpenseCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutMaintenanceLogsInput = {
    id?: string
    registrationNumber: string
    nameModel?: string | null
    type?: string | null
    maxLoadCapacityKg?: Decimal | DecimalJsLike | number | string | null
    odometerKm?: Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.VehicleStatus
    region?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutVehicleInput
    fuelLogs?: FuelLogUncheckedCreateNestedManyWithoutVehicleInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutMaintenanceLogsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutMaintenanceLogsInput, VehicleUncheckedCreateWithoutMaintenanceLogsInput>
  }

  export type VehicleUpsertWithoutMaintenanceLogsInput = {
    update: XOR<VehicleUpdateWithoutMaintenanceLogsInput, VehicleUncheckedUpdateWithoutMaintenanceLogsInput>
    create: XOR<VehicleCreateWithoutMaintenanceLogsInput, VehicleUncheckedCreateWithoutMaintenanceLogsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutMaintenanceLogsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutMaintenanceLogsInput, VehicleUncheckedUpdateWithoutMaintenanceLogsInput>
  }

  export type VehicleUpdateWithoutMaintenanceLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    nameModel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    maxLoadCapacityKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    odometerKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutVehicleNestedInput
    fuelLogs?: FuelLogUpdateManyWithoutVehicleNestedInput
    expenses?: ExpenseUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutMaintenanceLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    nameModel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    maxLoadCapacityKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    odometerKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutVehicleNestedInput
    fuelLogs?: FuelLogUncheckedUpdateManyWithoutVehicleNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateWithoutFuelLogsInput = {
    id?: string
    registrationNumber: string
    nameModel?: string | null
    type?: string | null
    maxLoadCapacityKg?: Decimal | DecimalJsLike | number | string | null
    odometerKm?: Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.VehicleStatus
    region?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutVehicleInput
    expenses?: ExpenseCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutFuelLogsInput = {
    id?: string
    registrationNumber: string
    nameModel?: string | null
    type?: string | null
    maxLoadCapacityKg?: Decimal | DecimalJsLike | number | string | null
    odometerKm?: Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.VehicleStatus
    region?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutVehicleInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutFuelLogsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutFuelLogsInput, VehicleUncheckedCreateWithoutFuelLogsInput>
  }

  export type TripCreateWithoutFuelLogsInput = {
    id?: string
    source: string
    destination: string
    cargoWeightKg?: Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.TripStatus
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    aiRecommended?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutTripsInput
    driver: DriverCreateNestedOneWithoutTripsInput
    creator: UserCreateNestedOneWithoutCreatedTripsInput
    expenses?: ExpenseCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutFuelLogsInput = {
    id?: string
    source: string
    destination: string
    vehicleId: string
    driverId: string
    cargoWeightKg?: Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.TripStatus
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    aiRecommended?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expenses?: ExpenseUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutFuelLogsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutFuelLogsInput, TripUncheckedCreateWithoutFuelLogsInput>
  }

  export type VehicleUpsertWithoutFuelLogsInput = {
    update: XOR<VehicleUpdateWithoutFuelLogsInput, VehicleUncheckedUpdateWithoutFuelLogsInput>
    create: XOR<VehicleCreateWithoutFuelLogsInput, VehicleUncheckedCreateWithoutFuelLogsInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutFuelLogsInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutFuelLogsInput, VehicleUncheckedUpdateWithoutFuelLogsInput>
  }

  export type VehicleUpdateWithoutFuelLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    nameModel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    maxLoadCapacityKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    odometerKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutVehicleNestedInput
    expenses?: ExpenseUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutFuelLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    nameModel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    maxLoadCapacityKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    odometerKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutVehicleNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type TripUpsertWithoutFuelLogsInput = {
    update: XOR<TripUpdateWithoutFuelLogsInput, TripUncheckedUpdateWithoutFuelLogsInput>
    create: XOR<TripCreateWithoutFuelLogsInput, TripUncheckedCreateWithoutFuelLogsInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutFuelLogsInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutFuelLogsInput, TripUncheckedUpdateWithoutFuelLogsInput>
  }

  export type TripUpdateWithoutFuelLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    cargoWeightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiRecommended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    driver?: DriverUpdateOneRequiredWithoutTripsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedTripsNestedInput
    expenses?: ExpenseUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutFuelLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    cargoWeightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiRecommended?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: ExpenseUncheckedUpdateManyWithoutTripNestedInput
  }

  export type VehicleCreateWithoutExpensesInput = {
    id?: string
    registrationNumber: string
    nameModel?: string | null
    type?: string | null
    maxLoadCapacityKg?: Decimal | DecimalJsLike | number | string | null
    odometerKm?: Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.VehicleStatus
    region?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogCreateNestedManyWithoutVehicleInput
    fuelLogs?: FuelLogCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutExpensesInput = {
    id?: string
    registrationNumber: string
    nameModel?: string | null
    type?: string | null
    maxLoadCapacityKg?: Decimal | DecimalJsLike | number | string | null
    odometerKm?: Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.VehicleStatus
    region?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trips?: TripUncheckedCreateNestedManyWithoutVehicleInput
    maintenanceLogs?: MaintenanceLogUncheckedCreateNestedManyWithoutVehicleInput
    fuelLogs?: FuelLogUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutExpensesInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutExpensesInput, VehicleUncheckedCreateWithoutExpensesInput>
  }

  export type TripCreateWithoutExpensesInput = {
    id?: string
    source: string
    destination: string
    cargoWeightKg?: Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.TripStatus
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    aiRecommended?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicle: VehicleCreateNestedOneWithoutTripsInput
    driver: DriverCreateNestedOneWithoutTripsInput
    creator: UserCreateNestedOneWithoutCreatedTripsInput
    fuelLogs?: FuelLogCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutExpensesInput = {
    id?: string
    source: string
    destination: string
    vehicleId: string
    driverId: string
    cargoWeightKg?: Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.TripStatus
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    aiRecommended?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
    fuelLogs?: FuelLogUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutExpensesInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutExpensesInput, TripUncheckedCreateWithoutExpensesInput>
  }

  export type VehicleUpsertWithoutExpensesInput = {
    update: XOR<VehicleUpdateWithoutExpensesInput, VehicleUncheckedUpdateWithoutExpensesInput>
    create: XOR<VehicleCreateWithoutExpensesInput, VehicleUncheckedCreateWithoutExpensesInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutExpensesInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutExpensesInput, VehicleUncheckedUpdateWithoutExpensesInput>
  }

  export type VehicleUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    nameModel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    maxLoadCapacityKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    odometerKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUpdateManyWithoutVehicleNestedInput
    fuelLogs?: FuelLogUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrationNumber?: StringFieldUpdateOperationsInput | string
    nameModel?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    maxLoadCapacityKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    odometerKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    acquisitionCost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumVehicleStatusFieldUpdateOperationsInput | $Enums.VehicleStatus
    region?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutVehicleNestedInput
    maintenanceLogs?: MaintenanceLogUncheckedUpdateManyWithoutVehicleNestedInput
    fuelLogs?: FuelLogUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type TripUpsertWithoutExpensesInput = {
    update: XOR<TripUpdateWithoutExpensesInput, TripUncheckedUpdateWithoutExpensesInput>
    create: XOR<TripCreateWithoutExpensesInput, TripUncheckedCreateWithoutExpensesInput>
    where?: TripWhereInput
  }

  export type TripUpdateToOneWithWhereWithoutExpensesInput = {
    where?: TripWhereInput
    data: XOR<TripUpdateWithoutExpensesInput, TripUncheckedUpdateWithoutExpensesInput>
  }

  export type TripUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    cargoWeightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiRecommended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    driver?: DriverUpdateOneRequiredWithoutTripsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedTripsNestedInput
    fuelLogs?: FuelLogUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    cargoWeightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiRecommended?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fuelLogs?: FuelLogUncheckedUpdateManyWithoutTripNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    drivers?: DriverCreateNestedManyWithoutUserInput
    createdTrips?: TripCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    drivers?: DriverUncheckedCreateNestedManyWithoutUserInput
    createdTrips?: TripUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drivers?: DriverUpdateManyWithoutUserNestedInput
    createdTrips?: TripUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    drivers?: DriverUncheckedUpdateManyWithoutUserNestedInput
    createdTrips?: TripUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type DriverCreateManyUserInput = {
    id?: string
    name: string
    licenseNumber: string
    licenseCategory?: string | null
    licenseExpiryDate: Date | string
    contactNumber?: string | null
    safetyScore?: number
    status?: $Enums.DriverStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripCreateManyCreatorInput = {
    id?: string
    source: string
    destination: string
    vehicleId: string
    driverId: string
    cargoWeightKg?: Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.TripStatus
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    aiRecommended?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    entityType: string
    entityId: string
    action: string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DriverUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: IntFieldUpdateOperationsInput | number
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: IntFieldUpdateOperationsInput | number
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trips?: TripUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    licenseCategory?: NullableStringFieldUpdateOperationsInput | string | null
    licenseExpiryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    contactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    safetyScore?: IntFieldUpdateOperationsInput | number
    status?: EnumDriverStatusFieldUpdateOperationsInput | $Enums.DriverStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    cargoWeightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiRecommended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    driver?: DriverUpdateOneRequiredWithoutTripsNestedInput
    fuelLogs?: FuelLogUpdateManyWithoutTripNestedInput
    expenses?: ExpenseUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    cargoWeightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiRecommended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fuelLogs?: FuelLogUncheckedUpdateManyWithoutTripNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    cargoWeightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiRecommended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateManyVehicleInput = {
    id?: string
    source: string
    destination: string
    driverId: string
    cargoWeightKg?: Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.TripStatus
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    aiRecommended?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MaintenanceLogCreateManyVehicleInput = {
    id?: string
    type: string
    description?: string | null
    cost?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.MaintenanceStatus
    scheduledDate: Date | string
    closedDate?: Date | string | null
    odometerAtService?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FuelLogCreateManyVehicleInput = {
    id?: string
    tripId?: string | null
    liters: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    date: Date | string
    createdAt?: Date | string
  }

  export type ExpenseCreateManyVehicleInput = {
    id?: string
    tripId?: string | null
    category: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type TripUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    cargoWeightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiRecommended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneRequiredWithoutTripsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedTripsNestedInput
    fuelLogs?: FuelLogUpdateManyWithoutTripNestedInput
    expenses?: ExpenseUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    cargoWeightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiRecommended?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fuelLogs?: FuelLogUncheckedUpdateManyWithoutTripNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    cargoWeightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiRecommended?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    odometerAtService?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    odometerAtService?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceLogUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumMaintenanceStatusFieldUpdateOperationsInput | $Enums.MaintenanceStatus
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    odometerAtService?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelLogUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    liters?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneWithoutFuelLogsNestedInput
  }

  export type FuelLogUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    liters?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelLogUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    liters?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trip?: TripUpdateOneWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateManyDriverInput = {
    id?: string
    source: string
    destination: string
    vehicleId: string
    cargoWeightKg?: Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.TripStatus
    dispatchedAt?: Date | string | null
    completedAt?: Date | string | null
    aiRecommended?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TripUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    cargoWeightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiRecommended?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    creator?: UserUpdateOneRequiredWithoutCreatedTripsNestedInput
    fuelLogs?: FuelLogUpdateManyWithoutTripNestedInput
    expenses?: ExpenseUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    cargoWeightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiRecommended?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fuelLogs?: FuelLogUncheckedUpdateManyWithoutTripNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    destination?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    cargoWeightKg?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    plannedDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actualDistanceKm?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    fuelConsumedLiters?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumTripStatusFieldUpdateOperationsInput | $Enums.TripStatus
    dispatchedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    aiRecommended?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelLogCreateManyTripInput = {
    id?: string
    vehicleId: string
    liters: Decimal | DecimalJsLike | number | string
    cost: Decimal | DecimalJsLike | number | string
    date: Date | string
    createdAt?: Date | string
  }

  export type ExpenseCreateManyTripInput = {
    id?: string
    vehicleId?: string | null
    category: string
    amount: Decimal | DecimalJsLike | number | string
    date: Date | string
    notes?: string | null
    createdAt?: Date | string
  }

  export type FuelLogUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    liters?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutFuelLogsNestedInput
  }

  export type FuelLogUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    liters?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FuelLogUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: StringFieldUpdateOperationsInput | string
    liters?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}