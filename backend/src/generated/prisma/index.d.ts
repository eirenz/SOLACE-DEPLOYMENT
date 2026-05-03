
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
 * Model CounselorProfile
 * 
 */
export type CounselorProfile = $Result.DefaultSelection<Prisma.$CounselorProfilePayload>
/**
 * Model MoodCheckin
 * 
 */
export type MoodCheckin = $Result.DefaultSelection<Prisma.$MoodCheckinPayload>
/**
 * Model JournalEntry
 * 
 */
export type JournalEntry = $Result.DefaultSelection<Prisma.$JournalEntryPayload>
/**
 * Model CommunityPost
 * 
 */
export type CommunityPost = $Result.DefaultSelection<Prisma.$CommunityPostPayload>
/**
 * Model PostLike
 * 
 */
export type PostLike = $Result.DefaultSelection<Prisma.$PostLikePayload>
/**
 * Model PostReply
 * 
 */
export type PostReply = $Result.DefaultSelection<Prisma.$PostReplyPayload>
/**
 * Model PostReport
 * 
 */
export type PostReport = $Result.DefaultSelection<Prisma.$PostReportPayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model VentMessage
 * 
 */
export type VentMessage = $Result.DefaultSelection<Prisma.$VentMessagePayload>
/**
 * Model ChatSession
 * 
 */
export type ChatSession = $Result.DefaultSelection<Prisma.$ChatSessionPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  STUDENT: 'STUDENT',
  COUNSELOR: 'COUNSELOR',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  INACTIVE: 'INACTIVE'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const Mood: {
  HAPPY: 'HAPPY',
  SAD: 'SAD',
  NEUTRAL: 'NEUTRAL',
  STRESSED: 'STRESSED',
  ANGRY: 'ANGRY'
};

export type Mood = (typeof Mood)[keyof typeof Mood]


export const AppointmentMode: {
  LISTEN_ONLY: 'LISTEN_ONLY',
  ADVICE_RECOVERY: 'ADVICE_RECOVERY'
};

export type AppointmentMode = (typeof AppointmentMode)[keyof typeof AppointmentMode]


export const AppointmentStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const ChatSessionStatus: {
  ACTIVE: 'ACTIVE',
  CLOSED: 'CLOSED'
};

export type ChatSessionStatus = (typeof ChatSessionStatus)[keyof typeof ChatSessionStatus]


export const ReportStatus: {
  PENDING: 'PENDING',
  REVIEWED: 'REVIEWED',
  DISMISSED: 'DISMISSED'
};

export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus]


export const VentStatus: {
  UNREAD: 'UNREAD',
  READ: 'READ',
  REACTED: 'REACTED'
};

export type VentStatus = (typeof VentStatus)[keyof typeof VentStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type Mood = $Enums.Mood

export const Mood: typeof $Enums.Mood

export type AppointmentMode = $Enums.AppointmentMode

export const AppointmentMode: typeof $Enums.AppointmentMode

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type ChatSessionStatus = $Enums.ChatSessionStatus

export const ChatSessionStatus: typeof $Enums.ChatSessionStatus

export type ReportStatus = $Enums.ReportStatus

export const ReportStatus: typeof $Enums.ReportStatus

export type VentStatus = $Enums.VentStatus

export const VentStatus: typeof $Enums.VentStatus

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.counselorProfile`: Exposes CRUD operations for the **CounselorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CounselorProfiles
    * const counselorProfiles = await prisma.counselorProfile.findMany()
    * ```
    */
  get counselorProfile(): Prisma.CounselorProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.moodCheckin`: Exposes CRUD operations for the **MoodCheckin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MoodCheckins
    * const moodCheckins = await prisma.moodCheckin.findMany()
    * ```
    */
  get moodCheckin(): Prisma.MoodCheckinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.journalEntry`: Exposes CRUD operations for the **JournalEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JournalEntries
    * const journalEntries = await prisma.journalEntry.findMany()
    * ```
    */
  get journalEntry(): Prisma.JournalEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.communityPost`: Exposes CRUD operations for the **CommunityPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CommunityPosts
    * const communityPosts = await prisma.communityPost.findMany()
    * ```
    */
  get communityPost(): Prisma.CommunityPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postLike`: Exposes CRUD operations for the **PostLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostLikes
    * const postLikes = await prisma.postLike.findMany()
    * ```
    */
  get postLike(): Prisma.PostLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postReply`: Exposes CRUD operations for the **PostReply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostReplies
    * const postReplies = await prisma.postReply.findMany()
    * ```
    */
  get postReply(): Prisma.PostReplyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postReport`: Exposes CRUD operations for the **PostReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostReports
    * const postReports = await prisma.postReport.findMany()
    * ```
    */
  get postReport(): Prisma.PostReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ventMessage`: Exposes CRUD operations for the **VentMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VentMessages
    * const ventMessages = await prisma.ventMessage.findMany()
    * ```
    */
  get ventMessage(): Prisma.VentMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatSession`: Exposes CRUD operations for the **ChatSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatSessions
    * const chatSessions = await prisma.chatSession.findMany()
    * ```
    */
  get chatSession(): Prisma.ChatSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
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
    CounselorProfile: 'CounselorProfile',
    MoodCheckin: 'MoodCheckin',
    JournalEntry: 'JournalEntry',
    CommunityPost: 'CommunityPost',
    PostLike: 'PostLike',
    PostReply: 'PostReply',
    PostReport: 'PostReport',
    Appointment: 'Appointment',
    VentMessage: 'VentMessage',
    ChatSession: 'ChatSession',
    ChatMessage: 'ChatMessage'
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
      modelProps: "user" | "counselorProfile" | "moodCheckin" | "journalEntry" | "communityPost" | "postLike" | "postReply" | "postReport" | "appointment" | "ventMessage" | "chatSession" | "chatMessage"
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
      CounselorProfile: {
        payload: Prisma.$CounselorProfilePayload<ExtArgs>
        fields: Prisma.CounselorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CounselorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CounselorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselorProfilePayload>
          }
          findFirst: {
            args: Prisma.CounselorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CounselorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselorProfilePayload>
          }
          findMany: {
            args: Prisma.CounselorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselorProfilePayload>[]
          }
          create: {
            args: Prisma.CounselorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselorProfilePayload>
          }
          createMany: {
            args: Prisma.CounselorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CounselorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselorProfilePayload>[]
          }
          delete: {
            args: Prisma.CounselorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselorProfilePayload>
          }
          update: {
            args: Prisma.CounselorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselorProfilePayload>
          }
          deleteMany: {
            args: Prisma.CounselorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CounselorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CounselorProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselorProfilePayload>[]
          }
          upsert: {
            args: Prisma.CounselorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounselorProfilePayload>
          }
          aggregate: {
            args: Prisma.CounselorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCounselorProfile>
          }
          groupBy: {
            args: Prisma.CounselorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CounselorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CounselorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<CounselorProfileCountAggregateOutputType> | number
          }
        }
      }
      MoodCheckin: {
        payload: Prisma.$MoodCheckinPayload<ExtArgs>
        fields: Prisma.MoodCheckinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoodCheckinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodCheckinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoodCheckinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodCheckinPayload>
          }
          findFirst: {
            args: Prisma.MoodCheckinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodCheckinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoodCheckinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodCheckinPayload>
          }
          findMany: {
            args: Prisma.MoodCheckinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodCheckinPayload>[]
          }
          create: {
            args: Prisma.MoodCheckinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodCheckinPayload>
          }
          createMany: {
            args: Prisma.MoodCheckinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoodCheckinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodCheckinPayload>[]
          }
          delete: {
            args: Prisma.MoodCheckinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodCheckinPayload>
          }
          update: {
            args: Prisma.MoodCheckinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodCheckinPayload>
          }
          deleteMany: {
            args: Prisma.MoodCheckinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoodCheckinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoodCheckinUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodCheckinPayload>[]
          }
          upsert: {
            args: Prisma.MoodCheckinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoodCheckinPayload>
          }
          aggregate: {
            args: Prisma.MoodCheckinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMoodCheckin>
          }
          groupBy: {
            args: Prisma.MoodCheckinGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoodCheckinGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoodCheckinCountArgs<ExtArgs>
            result: $Utils.Optional<MoodCheckinCountAggregateOutputType> | number
          }
        }
      }
      JournalEntry: {
        payload: Prisma.$JournalEntryPayload<ExtArgs>
        fields: Prisma.JournalEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JournalEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JournalEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          findFirst: {
            args: Prisma.JournalEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JournalEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          findMany: {
            args: Prisma.JournalEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>[]
          }
          create: {
            args: Prisma.JournalEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          createMany: {
            args: Prisma.JournalEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JournalEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>[]
          }
          delete: {
            args: Prisma.JournalEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          update: {
            args: Prisma.JournalEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          deleteMany: {
            args: Prisma.JournalEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JournalEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JournalEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>[]
          }
          upsert: {
            args: Prisma.JournalEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JournalEntryPayload>
          }
          aggregate: {
            args: Prisma.JournalEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJournalEntry>
          }
          groupBy: {
            args: Prisma.JournalEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<JournalEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.JournalEntryCountArgs<ExtArgs>
            result: $Utils.Optional<JournalEntryCountAggregateOutputType> | number
          }
        }
      }
      CommunityPost: {
        payload: Prisma.$CommunityPostPayload<ExtArgs>
        fields: Prisma.CommunityPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommunityPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommunityPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          findFirst: {
            args: Prisma.CommunityPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommunityPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          findMany: {
            args: Prisma.CommunityPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>[]
          }
          create: {
            args: Prisma.CommunityPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          createMany: {
            args: Prisma.CommunityPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommunityPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>[]
          }
          delete: {
            args: Prisma.CommunityPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          update: {
            args: Prisma.CommunityPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          deleteMany: {
            args: Prisma.CommunityPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommunityPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommunityPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>[]
          }
          upsert: {
            args: Prisma.CommunityPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommunityPostPayload>
          }
          aggregate: {
            args: Prisma.CommunityPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunityPost>
          }
          groupBy: {
            args: Prisma.CommunityPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunityPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommunityPostCountArgs<ExtArgs>
            result: $Utils.Optional<CommunityPostCountAggregateOutputType> | number
          }
        }
      }
      PostLike: {
        payload: Prisma.$PostLikePayload<ExtArgs>
        fields: Prisma.PostLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          findFirst: {
            args: Prisma.PostLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          findMany: {
            args: Prisma.PostLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>[]
          }
          create: {
            args: Prisma.PostLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          createMany: {
            args: Prisma.PostLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>[]
          }
          delete: {
            args: Prisma.PostLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          update: {
            args: Prisma.PostLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          deleteMany: {
            args: Prisma.PostLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>[]
          }
          upsert: {
            args: Prisma.PostLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostLikePayload>
          }
          aggregate: {
            args: Prisma.PostLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostLike>
          }
          groupBy: {
            args: Prisma.PostLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostLikeCountArgs<ExtArgs>
            result: $Utils.Optional<PostLikeCountAggregateOutputType> | number
          }
        }
      }
      PostReply: {
        payload: Prisma.$PostReplyPayload<ExtArgs>
        fields: Prisma.PostReplyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostReplyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReplyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostReplyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReplyPayload>
          }
          findFirst: {
            args: Prisma.PostReplyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReplyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostReplyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReplyPayload>
          }
          findMany: {
            args: Prisma.PostReplyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReplyPayload>[]
          }
          create: {
            args: Prisma.PostReplyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReplyPayload>
          }
          createMany: {
            args: Prisma.PostReplyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostReplyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReplyPayload>[]
          }
          delete: {
            args: Prisma.PostReplyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReplyPayload>
          }
          update: {
            args: Prisma.PostReplyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReplyPayload>
          }
          deleteMany: {
            args: Prisma.PostReplyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostReplyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostReplyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReplyPayload>[]
          }
          upsert: {
            args: Prisma.PostReplyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReplyPayload>
          }
          aggregate: {
            args: Prisma.PostReplyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostReply>
          }
          groupBy: {
            args: Prisma.PostReplyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostReplyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostReplyCountArgs<ExtArgs>
            result: $Utils.Optional<PostReplyCountAggregateOutputType> | number
          }
        }
      }
      PostReport: {
        payload: Prisma.$PostReportPayload<ExtArgs>
        fields: Prisma.PostReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReportPayload>
          }
          findFirst: {
            args: Prisma.PostReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReportPayload>
          }
          findMany: {
            args: Prisma.PostReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReportPayload>[]
          }
          create: {
            args: Prisma.PostReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReportPayload>
          }
          createMany: {
            args: Prisma.PostReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReportPayload>[]
          }
          delete: {
            args: Prisma.PostReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReportPayload>
          }
          update: {
            args: Prisma.PostReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReportPayload>
          }
          deleteMany: {
            args: Prisma.PostReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReportPayload>[]
          }
          upsert: {
            args: Prisma.PostReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostReportPayload>
          }
          aggregate: {
            args: Prisma.PostReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostReport>
          }
          groupBy: {
            args: Prisma.PostReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostReportCountArgs<ExtArgs>
            result: $Utils.Optional<PostReportCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      VentMessage: {
        payload: Prisma.$VentMessagePayload<ExtArgs>
        fields: Prisma.VentMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VentMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VentMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentMessagePayload>
          }
          findFirst: {
            args: Prisma.VentMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VentMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentMessagePayload>
          }
          findMany: {
            args: Prisma.VentMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentMessagePayload>[]
          }
          create: {
            args: Prisma.VentMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentMessagePayload>
          }
          createMany: {
            args: Prisma.VentMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VentMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentMessagePayload>[]
          }
          delete: {
            args: Prisma.VentMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentMessagePayload>
          }
          update: {
            args: Prisma.VentMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentMessagePayload>
          }
          deleteMany: {
            args: Prisma.VentMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VentMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VentMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentMessagePayload>[]
          }
          upsert: {
            args: Prisma.VentMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VentMessagePayload>
          }
          aggregate: {
            args: Prisma.VentMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVentMessage>
          }
          groupBy: {
            args: Prisma.VentMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<VentMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.VentMessageCountArgs<ExtArgs>
            result: $Utils.Optional<VentMessageCountAggregateOutputType> | number
          }
        }
      }
      ChatSession: {
        payload: Prisma.$ChatSessionPayload<ExtArgs>
        fields: Prisma.ChatSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findFirst: {
            args: Prisma.ChatSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          findMany: {
            args: Prisma.ChatSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          create: {
            args: Prisma.ChatSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          createMany: {
            args: Prisma.ChatSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          delete: {
            args: Prisma.ChatSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          update: {
            args: Prisma.ChatSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          deleteMany: {
            args: Prisma.ChatSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>[]
          }
          upsert: {
            args: Prisma.ChatSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatSessionPayload>
          }
          aggregate: {
            args: Prisma.ChatSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatSession>
          }
          groupBy: {
            args: Prisma.ChatSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ChatSessionCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
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
    counselorProfile?: CounselorProfileOmit
    moodCheckin?: MoodCheckinOmit
    journalEntry?: JournalEntryOmit
    communityPost?: CommunityPostOmit
    postLike?: PostLikeOmit
    postReply?: PostReplyOmit
    postReport?: PostReportOmit
    appointment?: AppointmentOmit
    ventMessage?: VentMessageOmit
    chatSession?: ChatSessionOmit
    chatMessage?: ChatMessageOmit
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
    moodCheckins: number
    journalEntries: number
    communityPosts: number
    postLikes: number
    postReplies: number
    postReports: number
    studentAppointments: number
    ventMessages: number
    studentChatSessions: number
    sentMessages: number
    counselorAppointments: number
    counselorVents: number
    counselorChatSessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    moodCheckins?: boolean | UserCountOutputTypeCountMoodCheckinsArgs
    journalEntries?: boolean | UserCountOutputTypeCountJournalEntriesArgs
    communityPosts?: boolean | UserCountOutputTypeCountCommunityPostsArgs
    postLikes?: boolean | UserCountOutputTypeCountPostLikesArgs
    postReplies?: boolean | UserCountOutputTypeCountPostRepliesArgs
    postReports?: boolean | UserCountOutputTypeCountPostReportsArgs
    studentAppointments?: boolean | UserCountOutputTypeCountStudentAppointmentsArgs
    ventMessages?: boolean | UserCountOutputTypeCountVentMessagesArgs
    studentChatSessions?: boolean | UserCountOutputTypeCountStudentChatSessionsArgs
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    counselorAppointments?: boolean | UserCountOutputTypeCountCounselorAppointmentsArgs
    counselorVents?: boolean | UserCountOutputTypeCountCounselorVentsArgs
    counselorChatSessions?: boolean | UserCountOutputTypeCountCounselorChatSessionsArgs
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
  export type UserCountOutputTypeCountMoodCheckinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodCheckinWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJournalEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommunityPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostReplyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudentAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudentChatSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCounselorAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCounselorVentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentMessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCounselorChatSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
  }


  /**
   * Count Type CommunityPostCountOutputType
   */

  export type CommunityPostCountOutputType = {
    likes: number
    replies: number
    reports: number
  }

  export type CommunityPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | CommunityPostCountOutputTypeCountLikesArgs
    replies?: boolean | CommunityPostCountOutputTypeCountRepliesArgs
    reports?: boolean | CommunityPostCountOutputTypeCountReportsArgs
  }

  // Custom InputTypes
  /**
   * CommunityPostCountOutputType without action
   */
  export type CommunityPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPostCountOutputType
     */
    select?: CommunityPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommunityPostCountOutputType without action
   */
  export type CommunityPostCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikeWhereInput
  }

  /**
   * CommunityPostCountOutputType without action
   */
  export type CommunityPostCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostReplyWhereInput
  }

  /**
   * CommunityPostCountOutputType without action
   */
  export type CommunityPostCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostReportWhereInput
  }


  /**
   * Count Type ChatSessionCountOutputType
   */

  export type ChatSessionCountOutputType = {
    messages: number
  }

  export type ChatSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatSessionCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSessionCountOutputType
     */
    select?: ChatSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatSessionCountOutputType without action
   */
  export type ChatSessionCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
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
    fullName: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    alias: string | null
    status: $Enums.UserStatus | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    resetOtp: string | null
    resetOtpExpiry: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    alias: string | null
    status: $Enums.UserStatus | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    resetOtp: string | null
    resetOtpExpiry: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    passwordHash: number
    role: number
    alias: number
    status: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    resetOtp: number
    resetOtpExpiry: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    passwordHash?: true
    role?: true
    alias?: true
    status?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    resetOtp?: true
    resetOtpExpiry?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    passwordHash?: true
    role?: true
    alias?: true
    status?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    resetOtp?: true
    resetOtpExpiry?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    passwordHash?: true
    role?: true
    alias?: true
    status?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    resetOtp?: true
    resetOtpExpiry?: true
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
    fullName: string
    email: string
    passwordHash: string
    role: $Enums.Role
    alias: string | null
    status: $Enums.UserStatus
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    resetOtp: string | null
    resetOtpExpiry: Date | null
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
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    alias?: boolean
    status?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetOtp?: boolean
    resetOtpExpiry?: boolean
    counselorProfile?: boolean | User$counselorProfileArgs<ExtArgs>
    moodCheckins?: boolean | User$moodCheckinsArgs<ExtArgs>
    journalEntries?: boolean | User$journalEntriesArgs<ExtArgs>
    communityPosts?: boolean | User$communityPostsArgs<ExtArgs>
    postLikes?: boolean | User$postLikesArgs<ExtArgs>
    postReplies?: boolean | User$postRepliesArgs<ExtArgs>
    postReports?: boolean | User$postReportsArgs<ExtArgs>
    studentAppointments?: boolean | User$studentAppointmentsArgs<ExtArgs>
    ventMessages?: boolean | User$ventMessagesArgs<ExtArgs>
    studentChatSessions?: boolean | User$studentChatSessionsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    counselorAppointments?: boolean | User$counselorAppointmentsArgs<ExtArgs>
    counselorVents?: boolean | User$counselorVentsArgs<ExtArgs>
    counselorChatSessions?: boolean | User$counselorChatSessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    alias?: boolean
    status?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetOtp?: boolean
    resetOtpExpiry?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    alias?: boolean
    status?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetOtp?: boolean
    resetOtpExpiry?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    alias?: boolean
    status?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetOtp?: boolean
    resetOtpExpiry?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "passwordHash" | "role" | "alias" | "status" | "avatarUrl" | "createdAt" | "updatedAt" | "resetOtp" | "resetOtpExpiry", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    counselorProfile?: boolean | User$counselorProfileArgs<ExtArgs>
    moodCheckins?: boolean | User$moodCheckinsArgs<ExtArgs>
    journalEntries?: boolean | User$journalEntriesArgs<ExtArgs>
    communityPosts?: boolean | User$communityPostsArgs<ExtArgs>
    postLikes?: boolean | User$postLikesArgs<ExtArgs>
    postReplies?: boolean | User$postRepliesArgs<ExtArgs>
    postReports?: boolean | User$postReportsArgs<ExtArgs>
    studentAppointments?: boolean | User$studentAppointmentsArgs<ExtArgs>
    ventMessages?: boolean | User$ventMessagesArgs<ExtArgs>
    studentChatSessions?: boolean | User$studentChatSessionsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    counselorAppointments?: boolean | User$counselorAppointmentsArgs<ExtArgs>
    counselorVents?: boolean | User$counselorVentsArgs<ExtArgs>
    counselorChatSessions?: boolean | User$counselorChatSessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      counselorProfile: Prisma.$CounselorProfilePayload<ExtArgs> | null
      moodCheckins: Prisma.$MoodCheckinPayload<ExtArgs>[]
      journalEntries: Prisma.$JournalEntryPayload<ExtArgs>[]
      communityPosts: Prisma.$CommunityPostPayload<ExtArgs>[]
      postLikes: Prisma.$PostLikePayload<ExtArgs>[]
      postReplies: Prisma.$PostReplyPayload<ExtArgs>[]
      postReports: Prisma.$PostReportPayload<ExtArgs>[]
      studentAppointments: Prisma.$AppointmentPayload<ExtArgs>[]
      ventMessages: Prisma.$VentMessagePayload<ExtArgs>[]
      studentChatSessions: Prisma.$ChatSessionPayload<ExtArgs>[]
      sentMessages: Prisma.$ChatMessagePayload<ExtArgs>[]
      counselorAppointments: Prisma.$AppointmentPayload<ExtArgs>[]
      counselorVents: Prisma.$VentMessagePayload<ExtArgs>[]
      counselorChatSessions: Prisma.$ChatSessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      passwordHash: string
      role: $Enums.Role
      alias: string | null
      status: $Enums.UserStatus
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
      resetOtp: string | null
      resetOtpExpiry: Date | null
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
    counselorProfile<T extends User$counselorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$counselorProfileArgs<ExtArgs>>): Prisma__CounselorProfileClient<$Result.GetResult<Prisma.$CounselorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    moodCheckins<T extends User$moodCheckinsArgs<ExtArgs> = {}>(args?: Subset<T, User$moodCheckinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodCheckinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    journalEntries<T extends User$journalEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$journalEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    communityPosts<T extends User$communityPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$communityPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postLikes<T extends User$postLikesArgs<ExtArgs> = {}>(args?: Subset<T, User$postLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postReplies<T extends User$postRepliesArgs<ExtArgs> = {}>(args?: Subset<T, User$postRepliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postReports<T extends User$postReportsArgs<ExtArgs> = {}>(args?: Subset<T, User$postReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studentAppointments<T extends User$studentAppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$studentAppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ventMessages<T extends User$ventMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$ventMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studentChatSessions<T extends User$studentChatSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$studentChatSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    counselorAppointments<T extends User$counselorAppointmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$counselorAppointmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    counselorVents<T extends User$counselorVentsArgs<ExtArgs> = {}>(args?: Subset<T, User$counselorVentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    counselorChatSessions<T extends User$counselorChatSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$counselorChatSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly alias: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly resetOtp: FieldRef<"User", 'String'>
    readonly resetOtpExpiry: FieldRef<"User", 'DateTime'>
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
   * User.counselorProfile
   */
  export type User$counselorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselorProfile
     */
    select?: CounselorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CounselorProfile
     */
    omit?: CounselorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounselorProfileInclude<ExtArgs> | null
    where?: CounselorProfileWhereInput
  }

  /**
   * User.moodCheckins
   */
  export type User$moodCheckinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodCheckin
     */
    select?: MoodCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodCheckin
     */
    omit?: MoodCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodCheckinInclude<ExtArgs> | null
    where?: MoodCheckinWhereInput
    orderBy?: MoodCheckinOrderByWithRelationInput | MoodCheckinOrderByWithRelationInput[]
    cursor?: MoodCheckinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoodCheckinScalarFieldEnum | MoodCheckinScalarFieldEnum[]
  }

  /**
   * User.journalEntries
   */
  export type User$journalEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    where?: JournalEntryWhereInput
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    cursor?: JournalEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * User.communityPosts
   */
  export type User$communityPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    where?: CommunityPostWhereInput
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    cursor?: CommunityPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommunityPostScalarFieldEnum | CommunityPostScalarFieldEnum[]
  }

  /**
   * User.postLikes
   */
  export type User$postLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    where?: PostLikeWhereInput
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    cursor?: PostLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * User.postReplies
   */
  export type User$postRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReply
     */
    select?: PostReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReply
     */
    omit?: PostReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReplyInclude<ExtArgs> | null
    where?: PostReplyWhereInput
    orderBy?: PostReplyOrderByWithRelationInput | PostReplyOrderByWithRelationInput[]
    cursor?: PostReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostReplyScalarFieldEnum | PostReplyScalarFieldEnum[]
  }

  /**
   * User.postReports
   */
  export type User$postReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReport
     */
    select?: PostReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReport
     */
    omit?: PostReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReportInclude<ExtArgs> | null
    where?: PostReportWhereInput
    orderBy?: PostReportOrderByWithRelationInput | PostReportOrderByWithRelationInput[]
    cursor?: PostReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostReportScalarFieldEnum | PostReportScalarFieldEnum[]
  }

  /**
   * User.studentAppointments
   */
  export type User$studentAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.ventMessages
   */
  export type User$ventMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentMessage
     */
    select?: VentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentMessage
     */
    omit?: VentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentMessageInclude<ExtArgs> | null
    where?: VentMessageWhereInput
    orderBy?: VentMessageOrderByWithRelationInput | VentMessageOrderByWithRelationInput[]
    cursor?: VentMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentMessageScalarFieldEnum | VentMessageScalarFieldEnum[]
  }

  /**
   * User.studentChatSessions
   */
  export type User$studentChatSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    cursor?: ChatSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * User.counselorAppointments
   */
  export type User$counselorAppointmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    cursor?: AppointmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * User.counselorVents
   */
  export type User$counselorVentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentMessage
     */
    select?: VentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentMessage
     */
    omit?: VentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentMessageInclude<ExtArgs> | null
    where?: VentMessageWhereInput
    orderBy?: VentMessageOrderByWithRelationInput | VentMessageOrderByWithRelationInput[]
    cursor?: VentMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VentMessageScalarFieldEnum | VentMessageScalarFieldEnum[]
  }

  /**
   * User.counselorChatSessions
   */
  export type User$counselorChatSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    cursor?: ChatSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
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
   * Model CounselorProfile
   */

  export type AggregateCounselorProfile = {
    _count: CounselorProfileCountAggregateOutputType | null
    _min: CounselorProfileMinAggregateOutputType | null
    _max: CounselorProfileMaxAggregateOutputType | null
  }

  export type CounselorProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    employeeId: string | null
    workPhone: string | null
    license: string | null
    specialization: string | null
    officeLocation: string | null
    experience: string | null
  }

  export type CounselorProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    employeeId: string | null
    workPhone: string | null
    license: string | null
    specialization: string | null
    officeLocation: string | null
    experience: string | null
  }

  export type CounselorProfileCountAggregateOutputType = {
    id: number
    userId: number
    employeeId: number
    workPhone: number
    license: number
    specialization: number
    officeLocation: number
    experience: number
    _all: number
  }


  export type CounselorProfileMinAggregateInputType = {
    id?: true
    userId?: true
    employeeId?: true
    workPhone?: true
    license?: true
    specialization?: true
    officeLocation?: true
    experience?: true
  }

  export type CounselorProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    employeeId?: true
    workPhone?: true
    license?: true
    specialization?: true
    officeLocation?: true
    experience?: true
  }

  export type CounselorProfileCountAggregateInputType = {
    id?: true
    userId?: true
    employeeId?: true
    workPhone?: true
    license?: true
    specialization?: true
    officeLocation?: true
    experience?: true
    _all?: true
  }

  export type CounselorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CounselorProfile to aggregate.
     */
    where?: CounselorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CounselorProfiles to fetch.
     */
    orderBy?: CounselorProfileOrderByWithRelationInput | CounselorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CounselorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CounselorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CounselorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CounselorProfiles
    **/
    _count?: true | CounselorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CounselorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CounselorProfileMaxAggregateInputType
  }

  export type GetCounselorProfileAggregateType<T extends CounselorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCounselorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCounselorProfile[P]>
      : GetScalarType<T[P], AggregateCounselorProfile[P]>
  }




  export type CounselorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CounselorProfileWhereInput
    orderBy?: CounselorProfileOrderByWithAggregationInput | CounselorProfileOrderByWithAggregationInput[]
    by: CounselorProfileScalarFieldEnum[] | CounselorProfileScalarFieldEnum
    having?: CounselorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CounselorProfileCountAggregateInputType | true
    _min?: CounselorProfileMinAggregateInputType
    _max?: CounselorProfileMaxAggregateInputType
  }

  export type CounselorProfileGroupByOutputType = {
    id: string
    userId: string
    employeeId: string | null
    workPhone: string | null
    license: string | null
    specialization: string | null
    officeLocation: string | null
    experience: string | null
    _count: CounselorProfileCountAggregateOutputType | null
    _min: CounselorProfileMinAggregateOutputType | null
    _max: CounselorProfileMaxAggregateOutputType | null
  }

  type GetCounselorProfileGroupByPayload<T extends CounselorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CounselorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CounselorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CounselorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], CounselorProfileGroupByOutputType[P]>
        }
      >
    >


  export type CounselorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    employeeId?: boolean
    workPhone?: boolean
    license?: boolean
    specialization?: boolean
    officeLocation?: boolean
    experience?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["counselorProfile"]>

  export type CounselorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    employeeId?: boolean
    workPhone?: boolean
    license?: boolean
    specialization?: boolean
    officeLocation?: boolean
    experience?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["counselorProfile"]>

  export type CounselorProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    employeeId?: boolean
    workPhone?: boolean
    license?: boolean
    specialization?: boolean
    officeLocation?: boolean
    experience?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["counselorProfile"]>

  export type CounselorProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    employeeId?: boolean
    workPhone?: boolean
    license?: boolean
    specialization?: boolean
    officeLocation?: boolean
    experience?: boolean
  }

  export type CounselorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "employeeId" | "workPhone" | "license" | "specialization" | "officeLocation" | "experience", ExtArgs["result"]["counselorProfile"]>
  export type CounselorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CounselorProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CounselorProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CounselorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CounselorProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      employeeId: string | null
      workPhone: string | null
      license: string | null
      specialization: string | null
      officeLocation: string | null
      experience: string | null
    }, ExtArgs["result"]["counselorProfile"]>
    composites: {}
  }

  type CounselorProfileGetPayload<S extends boolean | null | undefined | CounselorProfileDefaultArgs> = $Result.GetResult<Prisma.$CounselorProfilePayload, S>

  type CounselorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CounselorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CounselorProfileCountAggregateInputType | true
    }

  export interface CounselorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CounselorProfile'], meta: { name: 'CounselorProfile' } }
    /**
     * Find zero or one CounselorProfile that matches the filter.
     * @param {CounselorProfileFindUniqueArgs} args - Arguments to find a CounselorProfile
     * @example
     * // Get one CounselorProfile
     * const counselorProfile = await prisma.counselorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CounselorProfileFindUniqueArgs>(args: SelectSubset<T, CounselorProfileFindUniqueArgs<ExtArgs>>): Prisma__CounselorProfileClient<$Result.GetResult<Prisma.$CounselorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CounselorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CounselorProfileFindUniqueOrThrowArgs} args - Arguments to find a CounselorProfile
     * @example
     * // Get one CounselorProfile
     * const counselorProfile = await prisma.counselorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CounselorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, CounselorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CounselorProfileClient<$Result.GetResult<Prisma.$CounselorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CounselorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounselorProfileFindFirstArgs} args - Arguments to find a CounselorProfile
     * @example
     * // Get one CounselorProfile
     * const counselorProfile = await prisma.counselorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CounselorProfileFindFirstArgs>(args?: SelectSubset<T, CounselorProfileFindFirstArgs<ExtArgs>>): Prisma__CounselorProfileClient<$Result.GetResult<Prisma.$CounselorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CounselorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounselorProfileFindFirstOrThrowArgs} args - Arguments to find a CounselorProfile
     * @example
     * // Get one CounselorProfile
     * const counselorProfile = await prisma.counselorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CounselorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, CounselorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CounselorProfileClient<$Result.GetResult<Prisma.$CounselorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CounselorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounselorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CounselorProfiles
     * const counselorProfiles = await prisma.counselorProfile.findMany()
     * 
     * // Get first 10 CounselorProfiles
     * const counselorProfiles = await prisma.counselorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const counselorProfileWithIdOnly = await prisma.counselorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CounselorProfileFindManyArgs>(args?: SelectSubset<T, CounselorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CounselorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CounselorProfile.
     * @param {CounselorProfileCreateArgs} args - Arguments to create a CounselorProfile.
     * @example
     * // Create one CounselorProfile
     * const CounselorProfile = await prisma.counselorProfile.create({
     *   data: {
     *     // ... data to create a CounselorProfile
     *   }
     * })
     * 
     */
    create<T extends CounselorProfileCreateArgs>(args: SelectSubset<T, CounselorProfileCreateArgs<ExtArgs>>): Prisma__CounselorProfileClient<$Result.GetResult<Prisma.$CounselorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CounselorProfiles.
     * @param {CounselorProfileCreateManyArgs} args - Arguments to create many CounselorProfiles.
     * @example
     * // Create many CounselorProfiles
     * const counselorProfile = await prisma.counselorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CounselorProfileCreateManyArgs>(args?: SelectSubset<T, CounselorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CounselorProfiles and returns the data saved in the database.
     * @param {CounselorProfileCreateManyAndReturnArgs} args - Arguments to create many CounselorProfiles.
     * @example
     * // Create many CounselorProfiles
     * const counselorProfile = await prisma.counselorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CounselorProfiles and only return the `id`
     * const counselorProfileWithIdOnly = await prisma.counselorProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CounselorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, CounselorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CounselorProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CounselorProfile.
     * @param {CounselorProfileDeleteArgs} args - Arguments to delete one CounselorProfile.
     * @example
     * // Delete one CounselorProfile
     * const CounselorProfile = await prisma.counselorProfile.delete({
     *   where: {
     *     // ... filter to delete one CounselorProfile
     *   }
     * })
     * 
     */
    delete<T extends CounselorProfileDeleteArgs>(args: SelectSubset<T, CounselorProfileDeleteArgs<ExtArgs>>): Prisma__CounselorProfileClient<$Result.GetResult<Prisma.$CounselorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CounselorProfile.
     * @param {CounselorProfileUpdateArgs} args - Arguments to update one CounselorProfile.
     * @example
     * // Update one CounselorProfile
     * const counselorProfile = await prisma.counselorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CounselorProfileUpdateArgs>(args: SelectSubset<T, CounselorProfileUpdateArgs<ExtArgs>>): Prisma__CounselorProfileClient<$Result.GetResult<Prisma.$CounselorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CounselorProfiles.
     * @param {CounselorProfileDeleteManyArgs} args - Arguments to filter CounselorProfiles to delete.
     * @example
     * // Delete a few CounselorProfiles
     * const { count } = await prisma.counselorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CounselorProfileDeleteManyArgs>(args?: SelectSubset<T, CounselorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CounselorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounselorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CounselorProfiles
     * const counselorProfile = await prisma.counselorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CounselorProfileUpdateManyArgs>(args: SelectSubset<T, CounselorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CounselorProfiles and returns the data updated in the database.
     * @param {CounselorProfileUpdateManyAndReturnArgs} args - Arguments to update many CounselorProfiles.
     * @example
     * // Update many CounselorProfiles
     * const counselorProfile = await prisma.counselorProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CounselorProfiles and only return the `id`
     * const counselorProfileWithIdOnly = await prisma.counselorProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends CounselorProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, CounselorProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CounselorProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CounselorProfile.
     * @param {CounselorProfileUpsertArgs} args - Arguments to update or create a CounselorProfile.
     * @example
     * // Update or create a CounselorProfile
     * const counselorProfile = await prisma.counselorProfile.upsert({
     *   create: {
     *     // ... data to create a CounselorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CounselorProfile we want to update
     *   }
     * })
     */
    upsert<T extends CounselorProfileUpsertArgs>(args: SelectSubset<T, CounselorProfileUpsertArgs<ExtArgs>>): Prisma__CounselorProfileClient<$Result.GetResult<Prisma.$CounselorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CounselorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounselorProfileCountArgs} args - Arguments to filter CounselorProfiles to count.
     * @example
     * // Count the number of CounselorProfiles
     * const count = await prisma.counselorProfile.count({
     *   where: {
     *     // ... the filter for the CounselorProfiles we want to count
     *   }
     * })
    **/
    count<T extends CounselorProfileCountArgs>(
      args?: Subset<T, CounselorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CounselorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CounselorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounselorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CounselorProfileAggregateArgs>(args: Subset<T, CounselorProfileAggregateArgs>): Prisma.PrismaPromise<GetCounselorProfileAggregateType<T>>

    /**
     * Group by CounselorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounselorProfileGroupByArgs} args - Group by arguments.
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
      T extends CounselorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CounselorProfileGroupByArgs['orderBy'] }
        : { orderBy?: CounselorProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CounselorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCounselorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CounselorProfile model
   */
  readonly fields: CounselorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CounselorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CounselorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CounselorProfile model
   */
  interface CounselorProfileFieldRefs {
    readonly id: FieldRef<"CounselorProfile", 'String'>
    readonly userId: FieldRef<"CounselorProfile", 'String'>
    readonly employeeId: FieldRef<"CounselorProfile", 'String'>
    readonly workPhone: FieldRef<"CounselorProfile", 'String'>
    readonly license: FieldRef<"CounselorProfile", 'String'>
    readonly specialization: FieldRef<"CounselorProfile", 'String'>
    readonly officeLocation: FieldRef<"CounselorProfile", 'String'>
    readonly experience: FieldRef<"CounselorProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CounselorProfile findUnique
   */
  export type CounselorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselorProfile
     */
    select?: CounselorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CounselorProfile
     */
    omit?: CounselorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounselorProfileInclude<ExtArgs> | null
    /**
     * Filter, which CounselorProfile to fetch.
     */
    where: CounselorProfileWhereUniqueInput
  }

  /**
   * CounselorProfile findUniqueOrThrow
   */
  export type CounselorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselorProfile
     */
    select?: CounselorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CounselorProfile
     */
    omit?: CounselorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounselorProfileInclude<ExtArgs> | null
    /**
     * Filter, which CounselorProfile to fetch.
     */
    where: CounselorProfileWhereUniqueInput
  }

  /**
   * CounselorProfile findFirst
   */
  export type CounselorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselorProfile
     */
    select?: CounselorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CounselorProfile
     */
    omit?: CounselorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounselorProfileInclude<ExtArgs> | null
    /**
     * Filter, which CounselorProfile to fetch.
     */
    where?: CounselorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CounselorProfiles to fetch.
     */
    orderBy?: CounselorProfileOrderByWithRelationInput | CounselorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CounselorProfiles.
     */
    cursor?: CounselorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CounselorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CounselorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CounselorProfiles.
     */
    distinct?: CounselorProfileScalarFieldEnum | CounselorProfileScalarFieldEnum[]
  }

  /**
   * CounselorProfile findFirstOrThrow
   */
  export type CounselorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselorProfile
     */
    select?: CounselorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CounselorProfile
     */
    omit?: CounselorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounselorProfileInclude<ExtArgs> | null
    /**
     * Filter, which CounselorProfile to fetch.
     */
    where?: CounselorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CounselorProfiles to fetch.
     */
    orderBy?: CounselorProfileOrderByWithRelationInput | CounselorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CounselorProfiles.
     */
    cursor?: CounselorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CounselorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CounselorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CounselorProfiles.
     */
    distinct?: CounselorProfileScalarFieldEnum | CounselorProfileScalarFieldEnum[]
  }

  /**
   * CounselorProfile findMany
   */
  export type CounselorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselorProfile
     */
    select?: CounselorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CounselorProfile
     */
    omit?: CounselorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounselorProfileInclude<ExtArgs> | null
    /**
     * Filter, which CounselorProfiles to fetch.
     */
    where?: CounselorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CounselorProfiles to fetch.
     */
    orderBy?: CounselorProfileOrderByWithRelationInput | CounselorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CounselorProfiles.
     */
    cursor?: CounselorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CounselorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CounselorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CounselorProfiles.
     */
    distinct?: CounselorProfileScalarFieldEnum | CounselorProfileScalarFieldEnum[]
  }

  /**
   * CounselorProfile create
   */
  export type CounselorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselorProfile
     */
    select?: CounselorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CounselorProfile
     */
    omit?: CounselorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounselorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a CounselorProfile.
     */
    data: XOR<CounselorProfileCreateInput, CounselorProfileUncheckedCreateInput>
  }

  /**
   * CounselorProfile createMany
   */
  export type CounselorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CounselorProfiles.
     */
    data: CounselorProfileCreateManyInput | CounselorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CounselorProfile createManyAndReturn
   */
  export type CounselorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselorProfile
     */
    select?: CounselorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CounselorProfile
     */
    omit?: CounselorProfileOmit<ExtArgs> | null
    /**
     * The data used to create many CounselorProfiles.
     */
    data: CounselorProfileCreateManyInput | CounselorProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounselorProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CounselorProfile update
   */
  export type CounselorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselorProfile
     */
    select?: CounselorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CounselorProfile
     */
    omit?: CounselorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounselorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a CounselorProfile.
     */
    data: XOR<CounselorProfileUpdateInput, CounselorProfileUncheckedUpdateInput>
    /**
     * Choose, which CounselorProfile to update.
     */
    where: CounselorProfileWhereUniqueInput
  }

  /**
   * CounselorProfile updateMany
   */
  export type CounselorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CounselorProfiles.
     */
    data: XOR<CounselorProfileUpdateManyMutationInput, CounselorProfileUncheckedUpdateManyInput>
    /**
     * Filter which CounselorProfiles to update
     */
    where?: CounselorProfileWhereInput
    /**
     * Limit how many CounselorProfiles to update.
     */
    limit?: number
  }

  /**
   * CounselorProfile updateManyAndReturn
   */
  export type CounselorProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselorProfile
     */
    select?: CounselorProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CounselorProfile
     */
    omit?: CounselorProfileOmit<ExtArgs> | null
    /**
     * The data used to update CounselorProfiles.
     */
    data: XOR<CounselorProfileUpdateManyMutationInput, CounselorProfileUncheckedUpdateManyInput>
    /**
     * Filter which CounselorProfiles to update
     */
    where?: CounselorProfileWhereInput
    /**
     * Limit how many CounselorProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounselorProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CounselorProfile upsert
   */
  export type CounselorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselorProfile
     */
    select?: CounselorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CounselorProfile
     */
    omit?: CounselorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounselorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the CounselorProfile to update in case it exists.
     */
    where: CounselorProfileWhereUniqueInput
    /**
     * In case the CounselorProfile found by the `where` argument doesn't exist, create a new CounselorProfile with this data.
     */
    create: XOR<CounselorProfileCreateInput, CounselorProfileUncheckedCreateInput>
    /**
     * In case the CounselorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CounselorProfileUpdateInput, CounselorProfileUncheckedUpdateInput>
  }

  /**
   * CounselorProfile delete
   */
  export type CounselorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselorProfile
     */
    select?: CounselorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CounselorProfile
     */
    omit?: CounselorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounselorProfileInclude<ExtArgs> | null
    /**
     * Filter which CounselorProfile to delete.
     */
    where: CounselorProfileWhereUniqueInput
  }

  /**
   * CounselorProfile deleteMany
   */
  export type CounselorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CounselorProfiles to delete
     */
    where?: CounselorProfileWhereInput
    /**
     * Limit how many CounselorProfiles to delete.
     */
    limit?: number
  }

  /**
   * CounselorProfile without action
   */
  export type CounselorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounselorProfile
     */
    select?: CounselorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CounselorProfile
     */
    omit?: CounselorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounselorProfileInclude<ExtArgs> | null
  }


  /**
   * Model MoodCheckin
   */

  export type AggregateMoodCheckin = {
    _count: MoodCheckinCountAggregateOutputType | null
    _min: MoodCheckinMinAggregateOutputType | null
    _max: MoodCheckinMaxAggregateOutputType | null
  }

  export type MoodCheckinMinAggregateOutputType = {
    id: string | null
    userId: string | null
    mood: $Enums.Mood | null
    quote: string | null
    createdAt: Date | null
  }

  export type MoodCheckinMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    mood: $Enums.Mood | null
    quote: string | null
    createdAt: Date | null
  }

  export type MoodCheckinCountAggregateOutputType = {
    id: number
    userId: number
    mood: number
    quote: number
    tasks: number
    createdAt: number
    _all: number
  }


  export type MoodCheckinMinAggregateInputType = {
    id?: true
    userId?: true
    mood?: true
    quote?: true
    createdAt?: true
  }

  export type MoodCheckinMaxAggregateInputType = {
    id?: true
    userId?: true
    mood?: true
    quote?: true
    createdAt?: true
  }

  export type MoodCheckinCountAggregateInputType = {
    id?: true
    userId?: true
    mood?: true
    quote?: true
    tasks?: true
    createdAt?: true
    _all?: true
  }

  export type MoodCheckinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoodCheckin to aggregate.
     */
    where?: MoodCheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodCheckins to fetch.
     */
    orderBy?: MoodCheckinOrderByWithRelationInput | MoodCheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoodCheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodCheckins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodCheckins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MoodCheckins
    **/
    _count?: true | MoodCheckinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoodCheckinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoodCheckinMaxAggregateInputType
  }

  export type GetMoodCheckinAggregateType<T extends MoodCheckinAggregateArgs> = {
        [P in keyof T & keyof AggregateMoodCheckin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMoodCheckin[P]>
      : GetScalarType<T[P], AggregateMoodCheckin[P]>
  }




  export type MoodCheckinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoodCheckinWhereInput
    orderBy?: MoodCheckinOrderByWithAggregationInput | MoodCheckinOrderByWithAggregationInput[]
    by: MoodCheckinScalarFieldEnum[] | MoodCheckinScalarFieldEnum
    having?: MoodCheckinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoodCheckinCountAggregateInputType | true
    _min?: MoodCheckinMinAggregateInputType
    _max?: MoodCheckinMaxAggregateInputType
  }

  export type MoodCheckinGroupByOutputType = {
    id: string
    userId: string
    mood: $Enums.Mood
    quote: string | null
    tasks: string[]
    createdAt: Date
    _count: MoodCheckinCountAggregateOutputType | null
    _min: MoodCheckinMinAggregateOutputType | null
    _max: MoodCheckinMaxAggregateOutputType | null
  }

  type GetMoodCheckinGroupByPayload<T extends MoodCheckinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoodCheckinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoodCheckinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoodCheckinGroupByOutputType[P]>
            : GetScalarType<T[P], MoodCheckinGroupByOutputType[P]>
        }
      >
    >


  export type MoodCheckinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mood?: boolean
    quote?: boolean
    tasks?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodCheckin"]>

  export type MoodCheckinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mood?: boolean
    quote?: boolean
    tasks?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodCheckin"]>

  export type MoodCheckinSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mood?: boolean
    quote?: boolean
    tasks?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["moodCheckin"]>

  export type MoodCheckinSelectScalar = {
    id?: boolean
    userId?: boolean
    mood?: boolean
    quote?: boolean
    tasks?: boolean
    createdAt?: boolean
  }

  export type MoodCheckinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "mood" | "quote" | "tasks" | "createdAt", ExtArgs["result"]["moodCheckin"]>
  export type MoodCheckinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MoodCheckinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MoodCheckinIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MoodCheckinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MoodCheckin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      mood: $Enums.Mood
      quote: string | null
      tasks: string[]
      createdAt: Date
    }, ExtArgs["result"]["moodCheckin"]>
    composites: {}
  }

  type MoodCheckinGetPayload<S extends boolean | null | undefined | MoodCheckinDefaultArgs> = $Result.GetResult<Prisma.$MoodCheckinPayload, S>

  type MoodCheckinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoodCheckinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoodCheckinCountAggregateInputType | true
    }

  export interface MoodCheckinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MoodCheckin'], meta: { name: 'MoodCheckin' } }
    /**
     * Find zero or one MoodCheckin that matches the filter.
     * @param {MoodCheckinFindUniqueArgs} args - Arguments to find a MoodCheckin
     * @example
     * // Get one MoodCheckin
     * const moodCheckin = await prisma.moodCheckin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoodCheckinFindUniqueArgs>(args: SelectSubset<T, MoodCheckinFindUniqueArgs<ExtArgs>>): Prisma__MoodCheckinClient<$Result.GetResult<Prisma.$MoodCheckinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MoodCheckin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoodCheckinFindUniqueOrThrowArgs} args - Arguments to find a MoodCheckin
     * @example
     * // Get one MoodCheckin
     * const moodCheckin = await prisma.moodCheckin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoodCheckinFindUniqueOrThrowArgs>(args: SelectSubset<T, MoodCheckinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoodCheckinClient<$Result.GetResult<Prisma.$MoodCheckinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoodCheckin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodCheckinFindFirstArgs} args - Arguments to find a MoodCheckin
     * @example
     * // Get one MoodCheckin
     * const moodCheckin = await prisma.moodCheckin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoodCheckinFindFirstArgs>(args?: SelectSubset<T, MoodCheckinFindFirstArgs<ExtArgs>>): Prisma__MoodCheckinClient<$Result.GetResult<Prisma.$MoodCheckinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MoodCheckin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodCheckinFindFirstOrThrowArgs} args - Arguments to find a MoodCheckin
     * @example
     * // Get one MoodCheckin
     * const moodCheckin = await prisma.moodCheckin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoodCheckinFindFirstOrThrowArgs>(args?: SelectSubset<T, MoodCheckinFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoodCheckinClient<$Result.GetResult<Prisma.$MoodCheckinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MoodCheckins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodCheckinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MoodCheckins
     * const moodCheckins = await prisma.moodCheckin.findMany()
     * 
     * // Get first 10 MoodCheckins
     * const moodCheckins = await prisma.moodCheckin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moodCheckinWithIdOnly = await prisma.moodCheckin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoodCheckinFindManyArgs>(args?: SelectSubset<T, MoodCheckinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodCheckinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MoodCheckin.
     * @param {MoodCheckinCreateArgs} args - Arguments to create a MoodCheckin.
     * @example
     * // Create one MoodCheckin
     * const MoodCheckin = await prisma.moodCheckin.create({
     *   data: {
     *     // ... data to create a MoodCheckin
     *   }
     * })
     * 
     */
    create<T extends MoodCheckinCreateArgs>(args: SelectSubset<T, MoodCheckinCreateArgs<ExtArgs>>): Prisma__MoodCheckinClient<$Result.GetResult<Prisma.$MoodCheckinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MoodCheckins.
     * @param {MoodCheckinCreateManyArgs} args - Arguments to create many MoodCheckins.
     * @example
     * // Create many MoodCheckins
     * const moodCheckin = await prisma.moodCheckin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoodCheckinCreateManyArgs>(args?: SelectSubset<T, MoodCheckinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MoodCheckins and returns the data saved in the database.
     * @param {MoodCheckinCreateManyAndReturnArgs} args - Arguments to create many MoodCheckins.
     * @example
     * // Create many MoodCheckins
     * const moodCheckin = await prisma.moodCheckin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MoodCheckins and only return the `id`
     * const moodCheckinWithIdOnly = await prisma.moodCheckin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoodCheckinCreateManyAndReturnArgs>(args?: SelectSubset<T, MoodCheckinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodCheckinPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MoodCheckin.
     * @param {MoodCheckinDeleteArgs} args - Arguments to delete one MoodCheckin.
     * @example
     * // Delete one MoodCheckin
     * const MoodCheckin = await prisma.moodCheckin.delete({
     *   where: {
     *     // ... filter to delete one MoodCheckin
     *   }
     * })
     * 
     */
    delete<T extends MoodCheckinDeleteArgs>(args: SelectSubset<T, MoodCheckinDeleteArgs<ExtArgs>>): Prisma__MoodCheckinClient<$Result.GetResult<Prisma.$MoodCheckinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MoodCheckin.
     * @param {MoodCheckinUpdateArgs} args - Arguments to update one MoodCheckin.
     * @example
     * // Update one MoodCheckin
     * const moodCheckin = await prisma.moodCheckin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoodCheckinUpdateArgs>(args: SelectSubset<T, MoodCheckinUpdateArgs<ExtArgs>>): Prisma__MoodCheckinClient<$Result.GetResult<Prisma.$MoodCheckinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MoodCheckins.
     * @param {MoodCheckinDeleteManyArgs} args - Arguments to filter MoodCheckins to delete.
     * @example
     * // Delete a few MoodCheckins
     * const { count } = await prisma.moodCheckin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoodCheckinDeleteManyArgs>(args?: SelectSubset<T, MoodCheckinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoodCheckins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodCheckinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MoodCheckins
     * const moodCheckin = await prisma.moodCheckin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoodCheckinUpdateManyArgs>(args: SelectSubset<T, MoodCheckinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MoodCheckins and returns the data updated in the database.
     * @param {MoodCheckinUpdateManyAndReturnArgs} args - Arguments to update many MoodCheckins.
     * @example
     * // Update many MoodCheckins
     * const moodCheckin = await prisma.moodCheckin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MoodCheckins and only return the `id`
     * const moodCheckinWithIdOnly = await prisma.moodCheckin.updateManyAndReturn({
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
    updateManyAndReturn<T extends MoodCheckinUpdateManyAndReturnArgs>(args: SelectSubset<T, MoodCheckinUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoodCheckinPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MoodCheckin.
     * @param {MoodCheckinUpsertArgs} args - Arguments to update or create a MoodCheckin.
     * @example
     * // Update or create a MoodCheckin
     * const moodCheckin = await prisma.moodCheckin.upsert({
     *   create: {
     *     // ... data to create a MoodCheckin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MoodCheckin we want to update
     *   }
     * })
     */
    upsert<T extends MoodCheckinUpsertArgs>(args: SelectSubset<T, MoodCheckinUpsertArgs<ExtArgs>>): Prisma__MoodCheckinClient<$Result.GetResult<Prisma.$MoodCheckinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MoodCheckins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodCheckinCountArgs} args - Arguments to filter MoodCheckins to count.
     * @example
     * // Count the number of MoodCheckins
     * const count = await prisma.moodCheckin.count({
     *   where: {
     *     // ... the filter for the MoodCheckins we want to count
     *   }
     * })
    **/
    count<T extends MoodCheckinCountArgs>(
      args?: Subset<T, MoodCheckinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoodCheckinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MoodCheckin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodCheckinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoodCheckinAggregateArgs>(args: Subset<T, MoodCheckinAggregateArgs>): Prisma.PrismaPromise<GetMoodCheckinAggregateType<T>>

    /**
     * Group by MoodCheckin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoodCheckinGroupByArgs} args - Group by arguments.
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
      T extends MoodCheckinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoodCheckinGroupByArgs['orderBy'] }
        : { orderBy?: MoodCheckinGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MoodCheckinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoodCheckinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MoodCheckin model
   */
  readonly fields: MoodCheckinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MoodCheckin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoodCheckinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MoodCheckin model
   */
  interface MoodCheckinFieldRefs {
    readonly id: FieldRef<"MoodCheckin", 'String'>
    readonly userId: FieldRef<"MoodCheckin", 'String'>
    readonly mood: FieldRef<"MoodCheckin", 'Mood'>
    readonly quote: FieldRef<"MoodCheckin", 'String'>
    readonly tasks: FieldRef<"MoodCheckin", 'String[]'>
    readonly createdAt: FieldRef<"MoodCheckin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MoodCheckin findUnique
   */
  export type MoodCheckinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodCheckin
     */
    select?: MoodCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodCheckin
     */
    omit?: MoodCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodCheckinInclude<ExtArgs> | null
    /**
     * Filter, which MoodCheckin to fetch.
     */
    where: MoodCheckinWhereUniqueInput
  }

  /**
   * MoodCheckin findUniqueOrThrow
   */
  export type MoodCheckinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodCheckin
     */
    select?: MoodCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodCheckin
     */
    omit?: MoodCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodCheckinInclude<ExtArgs> | null
    /**
     * Filter, which MoodCheckin to fetch.
     */
    where: MoodCheckinWhereUniqueInput
  }

  /**
   * MoodCheckin findFirst
   */
  export type MoodCheckinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodCheckin
     */
    select?: MoodCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodCheckin
     */
    omit?: MoodCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodCheckinInclude<ExtArgs> | null
    /**
     * Filter, which MoodCheckin to fetch.
     */
    where?: MoodCheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodCheckins to fetch.
     */
    orderBy?: MoodCheckinOrderByWithRelationInput | MoodCheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoodCheckins.
     */
    cursor?: MoodCheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodCheckins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodCheckins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodCheckins.
     */
    distinct?: MoodCheckinScalarFieldEnum | MoodCheckinScalarFieldEnum[]
  }

  /**
   * MoodCheckin findFirstOrThrow
   */
  export type MoodCheckinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodCheckin
     */
    select?: MoodCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodCheckin
     */
    omit?: MoodCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodCheckinInclude<ExtArgs> | null
    /**
     * Filter, which MoodCheckin to fetch.
     */
    where?: MoodCheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodCheckins to fetch.
     */
    orderBy?: MoodCheckinOrderByWithRelationInput | MoodCheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MoodCheckins.
     */
    cursor?: MoodCheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodCheckins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodCheckins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodCheckins.
     */
    distinct?: MoodCheckinScalarFieldEnum | MoodCheckinScalarFieldEnum[]
  }

  /**
   * MoodCheckin findMany
   */
  export type MoodCheckinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodCheckin
     */
    select?: MoodCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodCheckin
     */
    omit?: MoodCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodCheckinInclude<ExtArgs> | null
    /**
     * Filter, which MoodCheckins to fetch.
     */
    where?: MoodCheckinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MoodCheckins to fetch.
     */
    orderBy?: MoodCheckinOrderByWithRelationInput | MoodCheckinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MoodCheckins.
     */
    cursor?: MoodCheckinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MoodCheckins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MoodCheckins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MoodCheckins.
     */
    distinct?: MoodCheckinScalarFieldEnum | MoodCheckinScalarFieldEnum[]
  }

  /**
   * MoodCheckin create
   */
  export type MoodCheckinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodCheckin
     */
    select?: MoodCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodCheckin
     */
    omit?: MoodCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodCheckinInclude<ExtArgs> | null
    /**
     * The data needed to create a MoodCheckin.
     */
    data: XOR<MoodCheckinCreateInput, MoodCheckinUncheckedCreateInput>
  }

  /**
   * MoodCheckin createMany
   */
  export type MoodCheckinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MoodCheckins.
     */
    data: MoodCheckinCreateManyInput | MoodCheckinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MoodCheckin createManyAndReturn
   */
  export type MoodCheckinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodCheckin
     */
    select?: MoodCheckinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoodCheckin
     */
    omit?: MoodCheckinOmit<ExtArgs> | null
    /**
     * The data used to create many MoodCheckins.
     */
    data: MoodCheckinCreateManyInput | MoodCheckinCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodCheckinIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoodCheckin update
   */
  export type MoodCheckinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodCheckin
     */
    select?: MoodCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodCheckin
     */
    omit?: MoodCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodCheckinInclude<ExtArgs> | null
    /**
     * The data needed to update a MoodCheckin.
     */
    data: XOR<MoodCheckinUpdateInput, MoodCheckinUncheckedUpdateInput>
    /**
     * Choose, which MoodCheckin to update.
     */
    where: MoodCheckinWhereUniqueInput
  }

  /**
   * MoodCheckin updateMany
   */
  export type MoodCheckinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MoodCheckins.
     */
    data: XOR<MoodCheckinUpdateManyMutationInput, MoodCheckinUncheckedUpdateManyInput>
    /**
     * Filter which MoodCheckins to update
     */
    where?: MoodCheckinWhereInput
    /**
     * Limit how many MoodCheckins to update.
     */
    limit?: number
  }

  /**
   * MoodCheckin updateManyAndReturn
   */
  export type MoodCheckinUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodCheckin
     */
    select?: MoodCheckinSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MoodCheckin
     */
    omit?: MoodCheckinOmit<ExtArgs> | null
    /**
     * The data used to update MoodCheckins.
     */
    data: XOR<MoodCheckinUpdateManyMutationInput, MoodCheckinUncheckedUpdateManyInput>
    /**
     * Filter which MoodCheckins to update
     */
    where?: MoodCheckinWhereInput
    /**
     * Limit how many MoodCheckins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodCheckinIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MoodCheckin upsert
   */
  export type MoodCheckinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodCheckin
     */
    select?: MoodCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodCheckin
     */
    omit?: MoodCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodCheckinInclude<ExtArgs> | null
    /**
     * The filter to search for the MoodCheckin to update in case it exists.
     */
    where: MoodCheckinWhereUniqueInput
    /**
     * In case the MoodCheckin found by the `where` argument doesn't exist, create a new MoodCheckin with this data.
     */
    create: XOR<MoodCheckinCreateInput, MoodCheckinUncheckedCreateInput>
    /**
     * In case the MoodCheckin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoodCheckinUpdateInput, MoodCheckinUncheckedUpdateInput>
  }

  /**
   * MoodCheckin delete
   */
  export type MoodCheckinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodCheckin
     */
    select?: MoodCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodCheckin
     */
    omit?: MoodCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodCheckinInclude<ExtArgs> | null
    /**
     * Filter which MoodCheckin to delete.
     */
    where: MoodCheckinWhereUniqueInput
  }

  /**
   * MoodCheckin deleteMany
   */
  export type MoodCheckinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MoodCheckins to delete
     */
    where?: MoodCheckinWhereInput
    /**
     * Limit how many MoodCheckins to delete.
     */
    limit?: number
  }

  /**
   * MoodCheckin without action
   */
  export type MoodCheckinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoodCheckin
     */
    select?: MoodCheckinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MoodCheckin
     */
    omit?: MoodCheckinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoodCheckinInclude<ExtArgs> | null
  }


  /**
   * Model JournalEntry
   */

  export type AggregateJournalEntry = {
    _count: JournalEntryCountAggregateOutputType | null
    _min: JournalEntryMinAggregateOutputType | null
    _max: JournalEntryMaxAggregateOutputType | null
  }

  export type JournalEntryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    content: string | null
    mood: $Enums.Mood | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JournalEntryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    content: string | null
    mood: $Enums.Mood | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JournalEntryCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    content: number
    mood: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JournalEntryMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    mood?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JournalEntryMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    mood?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JournalEntryCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    content?: true
    mood?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JournalEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JournalEntry to aggregate.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JournalEntries
    **/
    _count?: true | JournalEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JournalEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JournalEntryMaxAggregateInputType
  }

  export type GetJournalEntryAggregateType<T extends JournalEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateJournalEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJournalEntry[P]>
      : GetScalarType<T[P], AggregateJournalEntry[P]>
  }




  export type JournalEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JournalEntryWhereInput
    orderBy?: JournalEntryOrderByWithAggregationInput | JournalEntryOrderByWithAggregationInput[]
    by: JournalEntryScalarFieldEnum[] | JournalEntryScalarFieldEnum
    having?: JournalEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JournalEntryCountAggregateInputType | true
    _min?: JournalEntryMinAggregateInputType
    _max?: JournalEntryMaxAggregateInputType
  }

  export type JournalEntryGroupByOutputType = {
    id: string
    userId: string
    title: string
    content: string
    mood: $Enums.Mood
    createdAt: Date
    updatedAt: Date
    _count: JournalEntryCountAggregateOutputType | null
    _min: JournalEntryMinAggregateOutputType | null
    _max: JournalEntryMaxAggregateOutputType | null
  }

  type GetJournalEntryGroupByPayload<T extends JournalEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JournalEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JournalEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JournalEntryGroupByOutputType[P]>
            : GetScalarType<T[P], JournalEntryGroupByOutputType[P]>
        }
      >
    >


  export type JournalEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    mood?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journalEntry"]>

  export type JournalEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    mood?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journalEntry"]>

  export type JournalEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    mood?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["journalEntry"]>

  export type JournalEntrySelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    content?: boolean
    mood?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JournalEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "content" | "mood" | "createdAt" | "updatedAt", ExtArgs["result"]["journalEntry"]>
  export type JournalEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JournalEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JournalEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JournalEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JournalEntry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      content: string
      mood: $Enums.Mood
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["journalEntry"]>
    composites: {}
  }

  type JournalEntryGetPayload<S extends boolean | null | undefined | JournalEntryDefaultArgs> = $Result.GetResult<Prisma.$JournalEntryPayload, S>

  type JournalEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JournalEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JournalEntryCountAggregateInputType | true
    }

  export interface JournalEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JournalEntry'], meta: { name: 'JournalEntry' } }
    /**
     * Find zero or one JournalEntry that matches the filter.
     * @param {JournalEntryFindUniqueArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JournalEntryFindUniqueArgs>(args: SelectSubset<T, JournalEntryFindUniqueArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JournalEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JournalEntryFindUniqueOrThrowArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JournalEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, JournalEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JournalEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryFindFirstArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JournalEntryFindFirstArgs>(args?: SelectSubset<T, JournalEntryFindFirstArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JournalEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryFindFirstOrThrowArgs} args - Arguments to find a JournalEntry
     * @example
     * // Get one JournalEntry
     * const journalEntry = await prisma.journalEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JournalEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, JournalEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JournalEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JournalEntries
     * const journalEntries = await prisma.journalEntry.findMany()
     * 
     * // Get first 10 JournalEntries
     * const journalEntries = await prisma.journalEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const journalEntryWithIdOnly = await prisma.journalEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JournalEntryFindManyArgs>(args?: SelectSubset<T, JournalEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JournalEntry.
     * @param {JournalEntryCreateArgs} args - Arguments to create a JournalEntry.
     * @example
     * // Create one JournalEntry
     * const JournalEntry = await prisma.journalEntry.create({
     *   data: {
     *     // ... data to create a JournalEntry
     *   }
     * })
     * 
     */
    create<T extends JournalEntryCreateArgs>(args: SelectSubset<T, JournalEntryCreateArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JournalEntries.
     * @param {JournalEntryCreateManyArgs} args - Arguments to create many JournalEntries.
     * @example
     * // Create many JournalEntries
     * const journalEntry = await prisma.journalEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JournalEntryCreateManyArgs>(args?: SelectSubset<T, JournalEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JournalEntries and returns the data saved in the database.
     * @param {JournalEntryCreateManyAndReturnArgs} args - Arguments to create many JournalEntries.
     * @example
     * // Create many JournalEntries
     * const journalEntry = await prisma.journalEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JournalEntries and only return the `id`
     * const journalEntryWithIdOnly = await prisma.journalEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JournalEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, JournalEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JournalEntry.
     * @param {JournalEntryDeleteArgs} args - Arguments to delete one JournalEntry.
     * @example
     * // Delete one JournalEntry
     * const JournalEntry = await prisma.journalEntry.delete({
     *   where: {
     *     // ... filter to delete one JournalEntry
     *   }
     * })
     * 
     */
    delete<T extends JournalEntryDeleteArgs>(args: SelectSubset<T, JournalEntryDeleteArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JournalEntry.
     * @param {JournalEntryUpdateArgs} args - Arguments to update one JournalEntry.
     * @example
     * // Update one JournalEntry
     * const journalEntry = await prisma.journalEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JournalEntryUpdateArgs>(args: SelectSubset<T, JournalEntryUpdateArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JournalEntries.
     * @param {JournalEntryDeleteManyArgs} args - Arguments to filter JournalEntries to delete.
     * @example
     * // Delete a few JournalEntries
     * const { count } = await prisma.journalEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JournalEntryDeleteManyArgs>(args?: SelectSubset<T, JournalEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JournalEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JournalEntries
     * const journalEntry = await prisma.journalEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JournalEntryUpdateManyArgs>(args: SelectSubset<T, JournalEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JournalEntries and returns the data updated in the database.
     * @param {JournalEntryUpdateManyAndReturnArgs} args - Arguments to update many JournalEntries.
     * @example
     * // Update many JournalEntries
     * const journalEntry = await prisma.journalEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JournalEntries and only return the `id`
     * const journalEntryWithIdOnly = await prisma.journalEntry.updateManyAndReturn({
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
    updateManyAndReturn<T extends JournalEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, JournalEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JournalEntry.
     * @param {JournalEntryUpsertArgs} args - Arguments to update or create a JournalEntry.
     * @example
     * // Update or create a JournalEntry
     * const journalEntry = await prisma.journalEntry.upsert({
     *   create: {
     *     // ... data to create a JournalEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JournalEntry we want to update
     *   }
     * })
     */
    upsert<T extends JournalEntryUpsertArgs>(args: SelectSubset<T, JournalEntryUpsertArgs<ExtArgs>>): Prisma__JournalEntryClient<$Result.GetResult<Prisma.$JournalEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JournalEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryCountArgs} args - Arguments to filter JournalEntries to count.
     * @example
     * // Count the number of JournalEntries
     * const count = await prisma.journalEntry.count({
     *   where: {
     *     // ... the filter for the JournalEntries we want to count
     *   }
     * })
    **/
    count<T extends JournalEntryCountArgs>(
      args?: Subset<T, JournalEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JournalEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JournalEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JournalEntryAggregateArgs>(args: Subset<T, JournalEntryAggregateArgs>): Prisma.PrismaPromise<GetJournalEntryAggregateType<T>>

    /**
     * Group by JournalEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JournalEntryGroupByArgs} args - Group by arguments.
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
      T extends JournalEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JournalEntryGroupByArgs['orderBy'] }
        : { orderBy?: JournalEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, JournalEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJournalEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JournalEntry model
   */
  readonly fields: JournalEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JournalEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JournalEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the JournalEntry model
   */
  interface JournalEntryFieldRefs {
    readonly id: FieldRef<"JournalEntry", 'String'>
    readonly userId: FieldRef<"JournalEntry", 'String'>
    readonly title: FieldRef<"JournalEntry", 'String'>
    readonly content: FieldRef<"JournalEntry", 'String'>
    readonly mood: FieldRef<"JournalEntry", 'Mood'>
    readonly createdAt: FieldRef<"JournalEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"JournalEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JournalEntry findUnique
   */
  export type JournalEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry findUniqueOrThrow
   */
  export type JournalEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry findFirst
   */
  export type JournalEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JournalEntries.
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JournalEntries.
     */
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry findFirstOrThrow
   */
  export type JournalEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntry to fetch.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JournalEntries.
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JournalEntries.
     */
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry findMany
   */
  export type JournalEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter, which JournalEntries to fetch.
     */
    where?: JournalEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JournalEntries to fetch.
     */
    orderBy?: JournalEntryOrderByWithRelationInput | JournalEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JournalEntries.
     */
    cursor?: JournalEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JournalEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JournalEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JournalEntries.
     */
    distinct?: JournalEntryScalarFieldEnum | JournalEntryScalarFieldEnum[]
  }

  /**
   * JournalEntry create
   */
  export type JournalEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a JournalEntry.
     */
    data: XOR<JournalEntryCreateInput, JournalEntryUncheckedCreateInput>
  }

  /**
   * JournalEntry createMany
   */
  export type JournalEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JournalEntries.
     */
    data: JournalEntryCreateManyInput | JournalEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JournalEntry createManyAndReturn
   */
  export type JournalEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * The data used to create many JournalEntries.
     */
    data: JournalEntryCreateManyInput | JournalEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * JournalEntry update
   */
  export type JournalEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a JournalEntry.
     */
    data: XOR<JournalEntryUpdateInput, JournalEntryUncheckedUpdateInput>
    /**
     * Choose, which JournalEntry to update.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry updateMany
   */
  export type JournalEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JournalEntries.
     */
    data: XOR<JournalEntryUpdateManyMutationInput, JournalEntryUncheckedUpdateManyInput>
    /**
     * Filter which JournalEntries to update
     */
    where?: JournalEntryWhereInput
    /**
     * Limit how many JournalEntries to update.
     */
    limit?: number
  }

  /**
   * JournalEntry updateManyAndReturn
   */
  export type JournalEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * The data used to update JournalEntries.
     */
    data: XOR<JournalEntryUpdateManyMutationInput, JournalEntryUncheckedUpdateManyInput>
    /**
     * Filter which JournalEntries to update
     */
    where?: JournalEntryWhereInput
    /**
     * Limit how many JournalEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * JournalEntry upsert
   */
  export type JournalEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the JournalEntry to update in case it exists.
     */
    where: JournalEntryWhereUniqueInput
    /**
     * In case the JournalEntry found by the `where` argument doesn't exist, create a new JournalEntry with this data.
     */
    create: XOR<JournalEntryCreateInput, JournalEntryUncheckedCreateInput>
    /**
     * In case the JournalEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JournalEntryUpdateInput, JournalEntryUncheckedUpdateInput>
  }

  /**
   * JournalEntry delete
   */
  export type JournalEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
    /**
     * Filter which JournalEntry to delete.
     */
    where: JournalEntryWhereUniqueInput
  }

  /**
   * JournalEntry deleteMany
   */
  export type JournalEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JournalEntries to delete
     */
    where?: JournalEntryWhereInput
    /**
     * Limit how many JournalEntries to delete.
     */
    limit?: number
  }

  /**
   * JournalEntry without action
   */
  export type JournalEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JournalEntry
     */
    select?: JournalEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the JournalEntry
     */
    omit?: JournalEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JournalEntryInclude<ExtArgs> | null
  }


  /**
   * Model CommunityPost
   */

  export type AggregateCommunityPost = {
    _count: CommunityPostCountAggregateOutputType | null
    _min: CommunityPostMinAggregateOutputType | null
    _max: CommunityPostMaxAggregateOutputType | null
  }

  export type CommunityPostMinAggregateOutputType = {
    id: string | null
    authorId: string | null
    title: string | null
    content: string | null
    isReported: boolean | null
    createdAt: Date | null
  }

  export type CommunityPostMaxAggregateOutputType = {
    id: string | null
    authorId: string | null
    title: string | null
    content: string | null
    isReported: boolean | null
    createdAt: Date | null
  }

  export type CommunityPostCountAggregateOutputType = {
    id: number
    authorId: number
    title: number
    content: number
    tags: number
    isReported: number
    createdAt: number
    _all: number
  }


  export type CommunityPostMinAggregateInputType = {
    id?: true
    authorId?: true
    title?: true
    content?: true
    isReported?: true
    createdAt?: true
  }

  export type CommunityPostMaxAggregateInputType = {
    id?: true
    authorId?: true
    title?: true
    content?: true
    isReported?: true
    createdAt?: true
  }

  export type CommunityPostCountAggregateInputType = {
    id?: true
    authorId?: true
    title?: true
    content?: true
    tags?: true
    isReported?: true
    createdAt?: true
    _all?: true
  }

  export type CommunityPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityPost to aggregate.
     */
    where?: CommunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityPosts to fetch.
     */
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CommunityPosts
    **/
    _count?: true | CommunityPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunityPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunityPostMaxAggregateInputType
  }

  export type GetCommunityPostAggregateType<T extends CommunityPostAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunityPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunityPost[P]>
      : GetScalarType<T[P], AggregateCommunityPost[P]>
  }




  export type CommunityPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommunityPostWhereInput
    orderBy?: CommunityPostOrderByWithAggregationInput | CommunityPostOrderByWithAggregationInput[]
    by: CommunityPostScalarFieldEnum[] | CommunityPostScalarFieldEnum
    having?: CommunityPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunityPostCountAggregateInputType | true
    _min?: CommunityPostMinAggregateInputType
    _max?: CommunityPostMaxAggregateInputType
  }

  export type CommunityPostGroupByOutputType = {
    id: string
    authorId: string
    title: string
    content: string
    tags: string[]
    isReported: boolean
    createdAt: Date
    _count: CommunityPostCountAggregateOutputType | null
    _min: CommunityPostMinAggregateOutputType | null
    _max: CommunityPostMaxAggregateOutputType | null
  }

  type GetCommunityPostGroupByPayload<T extends CommunityPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunityPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunityPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunityPostGroupByOutputType[P]>
            : GetScalarType<T[P], CommunityPostGroupByOutputType[P]>
        }
      >
    >


  export type CommunityPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    isReported?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    likes?: boolean | CommunityPost$likesArgs<ExtArgs>
    replies?: boolean | CommunityPost$repliesArgs<ExtArgs>
    reports?: boolean | CommunityPost$reportsArgs<ExtArgs>
    _count?: boolean | CommunityPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityPost"]>

  export type CommunityPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    isReported?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityPost"]>

  export type CommunityPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    authorId?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    isReported?: boolean
    createdAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["communityPost"]>

  export type CommunityPostSelectScalar = {
    id?: boolean
    authorId?: boolean
    title?: boolean
    content?: boolean
    tags?: boolean
    isReported?: boolean
    createdAt?: boolean
  }

  export type CommunityPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "authorId" | "title" | "content" | "tags" | "isReported" | "createdAt", ExtArgs["result"]["communityPost"]>
  export type CommunityPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    likes?: boolean | CommunityPost$likesArgs<ExtArgs>
    replies?: boolean | CommunityPost$repliesArgs<ExtArgs>
    reports?: boolean | CommunityPost$reportsArgs<ExtArgs>
    _count?: boolean | CommunityPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommunityPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommunityPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommunityPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CommunityPost"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      likes: Prisma.$PostLikePayload<ExtArgs>[]
      replies: Prisma.$PostReplyPayload<ExtArgs>[]
      reports: Prisma.$PostReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      authorId: string
      title: string
      content: string
      tags: string[]
      isReported: boolean
      createdAt: Date
    }, ExtArgs["result"]["communityPost"]>
    composites: {}
  }

  type CommunityPostGetPayload<S extends boolean | null | undefined | CommunityPostDefaultArgs> = $Result.GetResult<Prisma.$CommunityPostPayload, S>

  type CommunityPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommunityPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommunityPostCountAggregateInputType | true
    }

  export interface CommunityPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CommunityPost'], meta: { name: 'CommunityPost' } }
    /**
     * Find zero or one CommunityPost that matches the filter.
     * @param {CommunityPostFindUniqueArgs} args - Arguments to find a CommunityPost
     * @example
     * // Get one CommunityPost
     * const communityPost = await prisma.communityPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommunityPostFindUniqueArgs>(args: SelectSubset<T, CommunityPostFindUniqueArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CommunityPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommunityPostFindUniqueOrThrowArgs} args - Arguments to find a CommunityPost
     * @example
     * // Get one CommunityPost
     * const communityPost = await prisma.communityPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommunityPostFindUniqueOrThrowArgs>(args: SelectSubset<T, CommunityPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostFindFirstArgs} args - Arguments to find a CommunityPost
     * @example
     * // Get one CommunityPost
     * const communityPost = await prisma.communityPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommunityPostFindFirstArgs>(args?: SelectSubset<T, CommunityPostFindFirstArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CommunityPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostFindFirstOrThrowArgs} args - Arguments to find a CommunityPost
     * @example
     * // Get one CommunityPost
     * const communityPost = await prisma.communityPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommunityPostFindFirstOrThrowArgs>(args?: SelectSubset<T, CommunityPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CommunityPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CommunityPosts
     * const communityPosts = await prisma.communityPost.findMany()
     * 
     * // Get first 10 CommunityPosts
     * const communityPosts = await prisma.communityPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const communityPostWithIdOnly = await prisma.communityPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommunityPostFindManyArgs>(args?: SelectSubset<T, CommunityPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CommunityPost.
     * @param {CommunityPostCreateArgs} args - Arguments to create a CommunityPost.
     * @example
     * // Create one CommunityPost
     * const CommunityPost = await prisma.communityPost.create({
     *   data: {
     *     // ... data to create a CommunityPost
     *   }
     * })
     * 
     */
    create<T extends CommunityPostCreateArgs>(args: SelectSubset<T, CommunityPostCreateArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CommunityPosts.
     * @param {CommunityPostCreateManyArgs} args - Arguments to create many CommunityPosts.
     * @example
     * // Create many CommunityPosts
     * const communityPost = await prisma.communityPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommunityPostCreateManyArgs>(args?: SelectSubset<T, CommunityPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CommunityPosts and returns the data saved in the database.
     * @param {CommunityPostCreateManyAndReturnArgs} args - Arguments to create many CommunityPosts.
     * @example
     * // Create many CommunityPosts
     * const communityPost = await prisma.communityPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CommunityPosts and only return the `id`
     * const communityPostWithIdOnly = await prisma.communityPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommunityPostCreateManyAndReturnArgs>(args?: SelectSubset<T, CommunityPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CommunityPost.
     * @param {CommunityPostDeleteArgs} args - Arguments to delete one CommunityPost.
     * @example
     * // Delete one CommunityPost
     * const CommunityPost = await prisma.communityPost.delete({
     *   where: {
     *     // ... filter to delete one CommunityPost
     *   }
     * })
     * 
     */
    delete<T extends CommunityPostDeleteArgs>(args: SelectSubset<T, CommunityPostDeleteArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CommunityPost.
     * @param {CommunityPostUpdateArgs} args - Arguments to update one CommunityPost.
     * @example
     * // Update one CommunityPost
     * const communityPost = await prisma.communityPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommunityPostUpdateArgs>(args: SelectSubset<T, CommunityPostUpdateArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CommunityPosts.
     * @param {CommunityPostDeleteManyArgs} args - Arguments to filter CommunityPosts to delete.
     * @example
     * // Delete a few CommunityPosts
     * const { count } = await prisma.communityPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommunityPostDeleteManyArgs>(args?: SelectSubset<T, CommunityPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CommunityPosts
     * const communityPost = await prisma.communityPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommunityPostUpdateManyArgs>(args: SelectSubset<T, CommunityPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CommunityPosts and returns the data updated in the database.
     * @param {CommunityPostUpdateManyAndReturnArgs} args - Arguments to update many CommunityPosts.
     * @example
     * // Update many CommunityPosts
     * const communityPost = await prisma.communityPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CommunityPosts and only return the `id`
     * const communityPostWithIdOnly = await prisma.communityPost.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommunityPostUpdateManyAndReturnArgs>(args: SelectSubset<T, CommunityPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CommunityPost.
     * @param {CommunityPostUpsertArgs} args - Arguments to update or create a CommunityPost.
     * @example
     * // Update or create a CommunityPost
     * const communityPost = await prisma.communityPost.upsert({
     *   create: {
     *     // ... data to create a CommunityPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CommunityPost we want to update
     *   }
     * })
     */
    upsert<T extends CommunityPostUpsertArgs>(args: SelectSubset<T, CommunityPostUpsertArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CommunityPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostCountArgs} args - Arguments to filter CommunityPosts to count.
     * @example
     * // Count the number of CommunityPosts
     * const count = await prisma.communityPost.count({
     *   where: {
     *     // ... the filter for the CommunityPosts we want to count
     *   }
     * })
    **/
    count<T extends CommunityPostCountArgs>(
      args?: Subset<T, CommunityPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunityPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CommunityPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommunityPostAggregateArgs>(args: Subset<T, CommunityPostAggregateArgs>): Prisma.PrismaPromise<GetCommunityPostAggregateType<T>>

    /**
     * Group by CommunityPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunityPostGroupByArgs} args - Group by arguments.
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
      T extends CommunityPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommunityPostGroupByArgs['orderBy'] }
        : { orderBy?: CommunityPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommunityPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunityPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CommunityPost model
   */
  readonly fields: CommunityPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CommunityPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommunityPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    likes<T extends CommunityPost$likesArgs<ExtArgs> = {}>(args?: Subset<T, CommunityPost$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    replies<T extends CommunityPost$repliesArgs<ExtArgs> = {}>(args?: Subset<T, CommunityPost$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reports<T extends CommunityPost$reportsArgs<ExtArgs> = {}>(args?: Subset<T, CommunityPost$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CommunityPost model
   */
  interface CommunityPostFieldRefs {
    readonly id: FieldRef<"CommunityPost", 'String'>
    readonly authorId: FieldRef<"CommunityPost", 'String'>
    readonly title: FieldRef<"CommunityPost", 'String'>
    readonly content: FieldRef<"CommunityPost", 'String'>
    readonly tags: FieldRef<"CommunityPost", 'String[]'>
    readonly isReported: FieldRef<"CommunityPost", 'Boolean'>
    readonly createdAt: FieldRef<"CommunityPost", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CommunityPost findUnique
   */
  export type CommunityPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPost to fetch.
     */
    where: CommunityPostWhereUniqueInput
  }

  /**
   * CommunityPost findUniqueOrThrow
   */
  export type CommunityPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPost to fetch.
     */
    where: CommunityPostWhereUniqueInput
  }

  /**
   * CommunityPost findFirst
   */
  export type CommunityPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPost to fetch.
     */
    where?: CommunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityPosts to fetch.
     */
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityPosts.
     */
    cursor?: CommunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityPosts.
     */
    distinct?: CommunityPostScalarFieldEnum | CommunityPostScalarFieldEnum[]
  }

  /**
   * CommunityPost findFirstOrThrow
   */
  export type CommunityPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPost to fetch.
     */
    where?: CommunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityPosts to fetch.
     */
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CommunityPosts.
     */
    cursor?: CommunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityPosts.
     */
    distinct?: CommunityPostScalarFieldEnum | CommunityPostScalarFieldEnum[]
  }

  /**
   * CommunityPost findMany
   */
  export type CommunityPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter, which CommunityPosts to fetch.
     */
    where?: CommunityPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CommunityPosts to fetch.
     */
    orderBy?: CommunityPostOrderByWithRelationInput | CommunityPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CommunityPosts.
     */
    cursor?: CommunityPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CommunityPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CommunityPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CommunityPosts.
     */
    distinct?: CommunityPostScalarFieldEnum | CommunityPostScalarFieldEnum[]
  }

  /**
   * CommunityPost create
   */
  export type CommunityPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * The data needed to create a CommunityPost.
     */
    data: XOR<CommunityPostCreateInput, CommunityPostUncheckedCreateInput>
  }

  /**
   * CommunityPost createMany
   */
  export type CommunityPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CommunityPosts.
     */
    data: CommunityPostCreateManyInput | CommunityPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CommunityPost createManyAndReturn
   */
  export type CommunityPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * The data used to create many CommunityPosts.
     */
    data: CommunityPostCreateManyInput | CommunityPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunityPost update
   */
  export type CommunityPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * The data needed to update a CommunityPost.
     */
    data: XOR<CommunityPostUpdateInput, CommunityPostUncheckedUpdateInput>
    /**
     * Choose, which CommunityPost to update.
     */
    where: CommunityPostWhereUniqueInput
  }

  /**
   * CommunityPost updateMany
   */
  export type CommunityPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CommunityPosts.
     */
    data: XOR<CommunityPostUpdateManyMutationInput, CommunityPostUncheckedUpdateManyInput>
    /**
     * Filter which CommunityPosts to update
     */
    where?: CommunityPostWhereInput
    /**
     * Limit how many CommunityPosts to update.
     */
    limit?: number
  }

  /**
   * CommunityPost updateManyAndReturn
   */
  export type CommunityPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * The data used to update CommunityPosts.
     */
    data: XOR<CommunityPostUpdateManyMutationInput, CommunityPostUncheckedUpdateManyInput>
    /**
     * Filter which CommunityPosts to update
     */
    where?: CommunityPostWhereInput
    /**
     * Limit how many CommunityPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CommunityPost upsert
   */
  export type CommunityPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * The filter to search for the CommunityPost to update in case it exists.
     */
    where: CommunityPostWhereUniqueInput
    /**
     * In case the CommunityPost found by the `where` argument doesn't exist, create a new CommunityPost with this data.
     */
    create: XOR<CommunityPostCreateInput, CommunityPostUncheckedCreateInput>
    /**
     * In case the CommunityPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommunityPostUpdateInput, CommunityPostUncheckedUpdateInput>
  }

  /**
   * CommunityPost delete
   */
  export type CommunityPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
    /**
     * Filter which CommunityPost to delete.
     */
    where: CommunityPostWhereUniqueInput
  }

  /**
   * CommunityPost deleteMany
   */
  export type CommunityPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CommunityPosts to delete
     */
    where?: CommunityPostWhereInput
    /**
     * Limit how many CommunityPosts to delete.
     */
    limit?: number
  }

  /**
   * CommunityPost.likes
   */
  export type CommunityPost$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    where?: PostLikeWhereInput
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    cursor?: PostLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * CommunityPost.replies
   */
  export type CommunityPost$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReply
     */
    select?: PostReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReply
     */
    omit?: PostReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReplyInclude<ExtArgs> | null
    where?: PostReplyWhereInput
    orderBy?: PostReplyOrderByWithRelationInput | PostReplyOrderByWithRelationInput[]
    cursor?: PostReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostReplyScalarFieldEnum | PostReplyScalarFieldEnum[]
  }

  /**
   * CommunityPost.reports
   */
  export type CommunityPost$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReport
     */
    select?: PostReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReport
     */
    omit?: PostReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReportInclude<ExtArgs> | null
    where?: PostReportWhereInput
    orderBy?: PostReportOrderByWithRelationInput | PostReportOrderByWithRelationInput[]
    cursor?: PostReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostReportScalarFieldEnum | PostReportScalarFieldEnum[]
  }

  /**
   * CommunityPost without action
   */
  export type CommunityPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommunityPost
     */
    select?: CommunityPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CommunityPost
     */
    omit?: CommunityPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommunityPostInclude<ExtArgs> | null
  }


  /**
   * Model PostLike
   */

  export type AggregatePostLike = {
    _count: PostLikeCountAggregateOutputType | null
    _min: PostLikeMinAggregateOutputType | null
    _max: PostLikeMaxAggregateOutputType | null
  }

  export type PostLikeMinAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type PostLikeMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type PostLikeCountAggregateOutputType = {
    id: number
    postId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type PostLikeMinAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
  }

  export type PostLikeMaxAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
  }

  export type PostLikeCountAggregateInputType = {
    id?: true
    postId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type PostLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostLike to aggregate.
     */
    where?: PostLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostLikes
    **/
    _count?: true | PostLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostLikeMaxAggregateInputType
  }

  export type GetPostLikeAggregateType<T extends PostLikeAggregateArgs> = {
        [P in keyof T & keyof AggregatePostLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostLike[P]>
      : GetScalarType<T[P], AggregatePostLike[P]>
  }




  export type PostLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostLikeWhereInput
    orderBy?: PostLikeOrderByWithAggregationInput | PostLikeOrderByWithAggregationInput[]
    by: PostLikeScalarFieldEnum[] | PostLikeScalarFieldEnum
    having?: PostLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostLikeCountAggregateInputType | true
    _min?: PostLikeMinAggregateInputType
    _max?: PostLikeMaxAggregateInputType
  }

  export type PostLikeGroupByOutputType = {
    id: string
    postId: string
    userId: string
    createdAt: Date
    _count: PostLikeCountAggregateOutputType | null
    _min: PostLikeMinAggregateOutputType | null
    _max: PostLikeMaxAggregateOutputType | null
  }

  type GetPostLikeGroupByPayload<T extends PostLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostLikeGroupByOutputType[P]>
            : GetScalarType<T[P], PostLikeGroupByOutputType[P]>
        }
      >
    >


  export type PostLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    post?: boolean | CommunityPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLike"]>

  export type PostLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    post?: boolean | CommunityPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLike"]>

  export type PostLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
    post?: boolean | CommunityPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postLike"]>

  export type PostLikeSelectScalar = {
    id?: boolean
    postId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type PostLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "userId" | "createdAt", ExtArgs["result"]["postLike"]>
  export type PostLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | CommunityPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | CommunityPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | CommunityPostDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostLike"
    objects: {
      post: Prisma.$CommunityPostPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["postLike"]>
    composites: {}
  }

  type PostLikeGetPayload<S extends boolean | null | undefined | PostLikeDefaultArgs> = $Result.GetResult<Prisma.$PostLikePayload, S>

  type PostLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostLikeCountAggregateInputType | true
    }

  export interface PostLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostLike'], meta: { name: 'PostLike' } }
    /**
     * Find zero or one PostLike that matches the filter.
     * @param {PostLikeFindUniqueArgs} args - Arguments to find a PostLike
     * @example
     * // Get one PostLike
     * const postLike = await prisma.postLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostLikeFindUniqueArgs>(args: SelectSubset<T, PostLikeFindUniqueArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostLikeFindUniqueOrThrowArgs} args - Arguments to find a PostLike
     * @example
     * // Get one PostLike
     * const postLike = await prisma.postLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, PostLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeFindFirstArgs} args - Arguments to find a PostLike
     * @example
     * // Get one PostLike
     * const postLike = await prisma.postLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostLikeFindFirstArgs>(args?: SelectSubset<T, PostLikeFindFirstArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeFindFirstOrThrowArgs} args - Arguments to find a PostLike
     * @example
     * // Get one PostLike
     * const postLike = await prisma.postLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, PostLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostLikes
     * const postLikes = await prisma.postLike.findMany()
     * 
     * // Get first 10 PostLikes
     * const postLikes = await prisma.postLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postLikeWithIdOnly = await prisma.postLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostLikeFindManyArgs>(args?: SelectSubset<T, PostLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostLike.
     * @param {PostLikeCreateArgs} args - Arguments to create a PostLike.
     * @example
     * // Create one PostLike
     * const PostLike = await prisma.postLike.create({
     *   data: {
     *     // ... data to create a PostLike
     *   }
     * })
     * 
     */
    create<T extends PostLikeCreateArgs>(args: SelectSubset<T, PostLikeCreateArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostLikes.
     * @param {PostLikeCreateManyArgs} args - Arguments to create many PostLikes.
     * @example
     * // Create many PostLikes
     * const postLike = await prisma.postLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostLikeCreateManyArgs>(args?: SelectSubset<T, PostLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostLikes and returns the data saved in the database.
     * @param {PostLikeCreateManyAndReturnArgs} args - Arguments to create many PostLikes.
     * @example
     * // Create many PostLikes
     * const postLike = await prisma.postLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostLikes and only return the `id`
     * const postLikeWithIdOnly = await prisma.postLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, PostLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostLike.
     * @param {PostLikeDeleteArgs} args - Arguments to delete one PostLike.
     * @example
     * // Delete one PostLike
     * const PostLike = await prisma.postLike.delete({
     *   where: {
     *     // ... filter to delete one PostLike
     *   }
     * })
     * 
     */
    delete<T extends PostLikeDeleteArgs>(args: SelectSubset<T, PostLikeDeleteArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostLike.
     * @param {PostLikeUpdateArgs} args - Arguments to update one PostLike.
     * @example
     * // Update one PostLike
     * const postLike = await prisma.postLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostLikeUpdateArgs>(args: SelectSubset<T, PostLikeUpdateArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostLikes.
     * @param {PostLikeDeleteManyArgs} args - Arguments to filter PostLikes to delete.
     * @example
     * // Delete a few PostLikes
     * const { count } = await prisma.postLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostLikeDeleteManyArgs>(args?: SelectSubset<T, PostLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostLikes
     * const postLike = await prisma.postLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostLikeUpdateManyArgs>(args: SelectSubset<T, PostLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostLikes and returns the data updated in the database.
     * @param {PostLikeUpdateManyAndReturnArgs} args - Arguments to update many PostLikes.
     * @example
     * // Update many PostLikes
     * const postLike = await prisma.postLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostLikes and only return the `id`
     * const postLikeWithIdOnly = await prisma.postLike.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, PostLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostLike.
     * @param {PostLikeUpsertArgs} args - Arguments to update or create a PostLike.
     * @example
     * // Update or create a PostLike
     * const postLike = await prisma.postLike.upsert({
     *   create: {
     *     // ... data to create a PostLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostLike we want to update
     *   }
     * })
     */
    upsert<T extends PostLikeUpsertArgs>(args: SelectSubset<T, PostLikeUpsertArgs<ExtArgs>>): Prisma__PostLikeClient<$Result.GetResult<Prisma.$PostLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeCountArgs} args - Arguments to filter PostLikes to count.
     * @example
     * // Count the number of PostLikes
     * const count = await prisma.postLike.count({
     *   where: {
     *     // ... the filter for the PostLikes we want to count
     *   }
     * })
    **/
    count<T extends PostLikeCountArgs>(
      args?: Subset<T, PostLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostLikeAggregateArgs>(args: Subset<T, PostLikeAggregateArgs>): Prisma.PrismaPromise<GetPostLikeAggregateType<T>>

    /**
     * Group by PostLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostLikeGroupByArgs} args - Group by arguments.
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
      T extends PostLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostLikeGroupByArgs['orderBy'] }
        : { orderBy?: PostLikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostLike model
   */
  readonly fields: PostLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends CommunityPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityPostDefaultArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PostLike model
   */
  interface PostLikeFieldRefs {
    readonly id: FieldRef<"PostLike", 'String'>
    readonly postId: FieldRef<"PostLike", 'String'>
    readonly userId: FieldRef<"PostLike", 'String'>
    readonly createdAt: FieldRef<"PostLike", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostLike findUnique
   */
  export type PostLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLike to fetch.
     */
    where: PostLikeWhereUniqueInput
  }

  /**
   * PostLike findUniqueOrThrow
   */
  export type PostLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLike to fetch.
     */
    where: PostLikeWhereUniqueInput
  }

  /**
   * PostLike findFirst
   */
  export type PostLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLike to fetch.
     */
    where?: PostLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostLikes.
     */
    cursor?: PostLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostLikes.
     */
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * PostLike findFirstOrThrow
   */
  export type PostLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLike to fetch.
     */
    where?: PostLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostLikes.
     */
    cursor?: PostLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostLikes.
     */
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * PostLike findMany
   */
  export type PostLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter, which PostLikes to fetch.
     */
    where?: PostLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostLikes to fetch.
     */
    orderBy?: PostLikeOrderByWithRelationInput | PostLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostLikes.
     */
    cursor?: PostLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostLikes.
     */
    distinct?: PostLikeScalarFieldEnum | PostLikeScalarFieldEnum[]
  }

  /**
   * PostLike create
   */
  export type PostLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a PostLike.
     */
    data: XOR<PostLikeCreateInput, PostLikeUncheckedCreateInput>
  }

  /**
   * PostLike createMany
   */
  export type PostLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostLikes.
     */
    data: PostLikeCreateManyInput | PostLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostLike createManyAndReturn
   */
  export type PostLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * The data used to create many PostLikes.
     */
    data: PostLikeCreateManyInput | PostLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostLike update
   */
  export type PostLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a PostLike.
     */
    data: XOR<PostLikeUpdateInput, PostLikeUncheckedUpdateInput>
    /**
     * Choose, which PostLike to update.
     */
    where: PostLikeWhereUniqueInput
  }

  /**
   * PostLike updateMany
   */
  export type PostLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostLikes.
     */
    data: XOR<PostLikeUpdateManyMutationInput, PostLikeUncheckedUpdateManyInput>
    /**
     * Filter which PostLikes to update
     */
    where?: PostLikeWhereInput
    /**
     * Limit how many PostLikes to update.
     */
    limit?: number
  }

  /**
   * PostLike updateManyAndReturn
   */
  export type PostLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * The data used to update PostLikes.
     */
    data: XOR<PostLikeUpdateManyMutationInput, PostLikeUncheckedUpdateManyInput>
    /**
     * Filter which PostLikes to update
     */
    where?: PostLikeWhereInput
    /**
     * Limit how many PostLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostLike upsert
   */
  export type PostLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the PostLike to update in case it exists.
     */
    where: PostLikeWhereUniqueInput
    /**
     * In case the PostLike found by the `where` argument doesn't exist, create a new PostLike with this data.
     */
    create: XOR<PostLikeCreateInput, PostLikeUncheckedCreateInput>
    /**
     * In case the PostLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostLikeUpdateInput, PostLikeUncheckedUpdateInput>
  }

  /**
   * PostLike delete
   */
  export type PostLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
    /**
     * Filter which PostLike to delete.
     */
    where: PostLikeWhereUniqueInput
  }

  /**
   * PostLike deleteMany
   */
  export type PostLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostLikes to delete
     */
    where?: PostLikeWhereInput
    /**
     * Limit how many PostLikes to delete.
     */
    limit?: number
  }

  /**
   * PostLike without action
   */
  export type PostLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostLike
     */
    select?: PostLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostLike
     */
    omit?: PostLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostLikeInclude<ExtArgs> | null
  }


  /**
   * Model PostReply
   */

  export type AggregatePostReply = {
    _count: PostReplyCountAggregateOutputType | null
    _min: PostReplyMinAggregateOutputType | null
    _max: PostReplyMaxAggregateOutputType | null
  }

  export type PostReplyMinAggregateOutputType = {
    id: string | null
    postId: string | null
    authorId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type PostReplyMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    authorId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type PostReplyCountAggregateOutputType = {
    id: number
    postId: number
    authorId: number
    content: number
    createdAt: number
    _all: number
  }


  export type PostReplyMinAggregateInputType = {
    id?: true
    postId?: true
    authorId?: true
    content?: true
    createdAt?: true
  }

  export type PostReplyMaxAggregateInputType = {
    id?: true
    postId?: true
    authorId?: true
    content?: true
    createdAt?: true
  }

  export type PostReplyCountAggregateInputType = {
    id?: true
    postId?: true
    authorId?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type PostReplyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostReply to aggregate.
     */
    where?: PostReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostReplies to fetch.
     */
    orderBy?: PostReplyOrderByWithRelationInput | PostReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostReplies
    **/
    _count?: true | PostReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostReplyMaxAggregateInputType
  }

  export type GetPostReplyAggregateType<T extends PostReplyAggregateArgs> = {
        [P in keyof T & keyof AggregatePostReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostReply[P]>
      : GetScalarType<T[P], AggregatePostReply[P]>
  }




  export type PostReplyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostReplyWhereInput
    orderBy?: PostReplyOrderByWithAggregationInput | PostReplyOrderByWithAggregationInput[]
    by: PostReplyScalarFieldEnum[] | PostReplyScalarFieldEnum
    having?: PostReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostReplyCountAggregateInputType | true
    _min?: PostReplyMinAggregateInputType
    _max?: PostReplyMaxAggregateInputType
  }

  export type PostReplyGroupByOutputType = {
    id: string
    postId: string
    authorId: string
    content: string
    createdAt: Date
    _count: PostReplyCountAggregateOutputType | null
    _min: PostReplyMinAggregateOutputType | null
    _max: PostReplyMaxAggregateOutputType | null
  }

  type GetPostReplyGroupByPayload<T extends PostReplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostReplyGroupByOutputType[P]>
            : GetScalarType<T[P], PostReplyGroupByOutputType[P]>
        }
      >
    >


  export type PostReplySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    authorId?: boolean
    content?: boolean
    createdAt?: boolean
    post?: boolean | CommunityPostDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postReply"]>

  export type PostReplySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    authorId?: boolean
    content?: boolean
    createdAt?: boolean
    post?: boolean | CommunityPostDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postReply"]>

  export type PostReplySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    authorId?: boolean
    content?: boolean
    createdAt?: boolean
    post?: boolean | CommunityPostDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postReply"]>

  export type PostReplySelectScalar = {
    id?: boolean
    postId?: boolean
    authorId?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type PostReplyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "authorId" | "content" | "createdAt", ExtArgs["result"]["postReply"]>
  export type PostReplyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | CommunityPostDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostReplyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | CommunityPostDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostReplyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | CommunityPostDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostReplyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostReply"
    objects: {
      post: Prisma.$CommunityPostPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      authorId: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["postReply"]>
    composites: {}
  }

  type PostReplyGetPayload<S extends boolean | null | undefined | PostReplyDefaultArgs> = $Result.GetResult<Prisma.$PostReplyPayload, S>

  type PostReplyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostReplyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostReplyCountAggregateInputType | true
    }

  export interface PostReplyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostReply'], meta: { name: 'PostReply' } }
    /**
     * Find zero or one PostReply that matches the filter.
     * @param {PostReplyFindUniqueArgs} args - Arguments to find a PostReply
     * @example
     * // Get one PostReply
     * const postReply = await prisma.postReply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostReplyFindUniqueArgs>(args: SelectSubset<T, PostReplyFindUniqueArgs<ExtArgs>>): Prisma__PostReplyClient<$Result.GetResult<Prisma.$PostReplyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostReply that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostReplyFindUniqueOrThrowArgs} args - Arguments to find a PostReply
     * @example
     * // Get one PostReply
     * const postReply = await prisma.postReply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostReplyFindUniqueOrThrowArgs>(args: SelectSubset<T, PostReplyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostReplyClient<$Result.GetResult<Prisma.$PostReplyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostReply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReplyFindFirstArgs} args - Arguments to find a PostReply
     * @example
     * // Get one PostReply
     * const postReply = await prisma.postReply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostReplyFindFirstArgs>(args?: SelectSubset<T, PostReplyFindFirstArgs<ExtArgs>>): Prisma__PostReplyClient<$Result.GetResult<Prisma.$PostReplyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostReply that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReplyFindFirstOrThrowArgs} args - Arguments to find a PostReply
     * @example
     * // Get one PostReply
     * const postReply = await prisma.postReply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostReplyFindFirstOrThrowArgs>(args?: SelectSubset<T, PostReplyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostReplyClient<$Result.GetResult<Prisma.$PostReplyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostReplies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReplyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostReplies
     * const postReplies = await prisma.postReply.findMany()
     * 
     * // Get first 10 PostReplies
     * const postReplies = await prisma.postReply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postReplyWithIdOnly = await prisma.postReply.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostReplyFindManyArgs>(args?: SelectSubset<T, PostReplyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostReplyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostReply.
     * @param {PostReplyCreateArgs} args - Arguments to create a PostReply.
     * @example
     * // Create one PostReply
     * const PostReply = await prisma.postReply.create({
     *   data: {
     *     // ... data to create a PostReply
     *   }
     * })
     * 
     */
    create<T extends PostReplyCreateArgs>(args: SelectSubset<T, PostReplyCreateArgs<ExtArgs>>): Prisma__PostReplyClient<$Result.GetResult<Prisma.$PostReplyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostReplies.
     * @param {PostReplyCreateManyArgs} args - Arguments to create many PostReplies.
     * @example
     * // Create many PostReplies
     * const postReply = await prisma.postReply.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostReplyCreateManyArgs>(args?: SelectSubset<T, PostReplyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostReplies and returns the data saved in the database.
     * @param {PostReplyCreateManyAndReturnArgs} args - Arguments to create many PostReplies.
     * @example
     * // Create many PostReplies
     * const postReply = await prisma.postReply.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostReplies and only return the `id`
     * const postReplyWithIdOnly = await prisma.postReply.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostReplyCreateManyAndReturnArgs>(args?: SelectSubset<T, PostReplyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostReplyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostReply.
     * @param {PostReplyDeleteArgs} args - Arguments to delete one PostReply.
     * @example
     * // Delete one PostReply
     * const PostReply = await prisma.postReply.delete({
     *   where: {
     *     // ... filter to delete one PostReply
     *   }
     * })
     * 
     */
    delete<T extends PostReplyDeleteArgs>(args: SelectSubset<T, PostReplyDeleteArgs<ExtArgs>>): Prisma__PostReplyClient<$Result.GetResult<Prisma.$PostReplyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostReply.
     * @param {PostReplyUpdateArgs} args - Arguments to update one PostReply.
     * @example
     * // Update one PostReply
     * const postReply = await prisma.postReply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostReplyUpdateArgs>(args: SelectSubset<T, PostReplyUpdateArgs<ExtArgs>>): Prisma__PostReplyClient<$Result.GetResult<Prisma.$PostReplyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostReplies.
     * @param {PostReplyDeleteManyArgs} args - Arguments to filter PostReplies to delete.
     * @example
     * // Delete a few PostReplies
     * const { count } = await prisma.postReply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostReplyDeleteManyArgs>(args?: SelectSubset<T, PostReplyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostReplies
     * const postReply = await prisma.postReply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostReplyUpdateManyArgs>(args: SelectSubset<T, PostReplyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostReplies and returns the data updated in the database.
     * @param {PostReplyUpdateManyAndReturnArgs} args - Arguments to update many PostReplies.
     * @example
     * // Update many PostReplies
     * const postReply = await prisma.postReply.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostReplies and only return the `id`
     * const postReplyWithIdOnly = await prisma.postReply.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostReplyUpdateManyAndReturnArgs>(args: SelectSubset<T, PostReplyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostReplyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostReply.
     * @param {PostReplyUpsertArgs} args - Arguments to update or create a PostReply.
     * @example
     * // Update or create a PostReply
     * const postReply = await prisma.postReply.upsert({
     *   create: {
     *     // ... data to create a PostReply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostReply we want to update
     *   }
     * })
     */
    upsert<T extends PostReplyUpsertArgs>(args: SelectSubset<T, PostReplyUpsertArgs<ExtArgs>>): Prisma__PostReplyClient<$Result.GetResult<Prisma.$PostReplyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReplyCountArgs} args - Arguments to filter PostReplies to count.
     * @example
     * // Count the number of PostReplies
     * const count = await prisma.postReply.count({
     *   where: {
     *     // ... the filter for the PostReplies we want to count
     *   }
     * })
    **/
    count<T extends PostReplyCountArgs>(
      args?: Subset<T, PostReplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostReplyAggregateArgs>(args: Subset<T, PostReplyAggregateArgs>): Prisma.PrismaPromise<GetPostReplyAggregateType<T>>

    /**
     * Group by PostReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReplyGroupByArgs} args - Group by arguments.
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
      T extends PostReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostReplyGroupByArgs['orderBy'] }
        : { orderBy?: PostReplyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostReply model
   */
  readonly fields: PostReplyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostReply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostReplyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends CommunityPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityPostDefaultArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PostReply model
   */
  interface PostReplyFieldRefs {
    readonly id: FieldRef<"PostReply", 'String'>
    readonly postId: FieldRef<"PostReply", 'String'>
    readonly authorId: FieldRef<"PostReply", 'String'>
    readonly content: FieldRef<"PostReply", 'String'>
    readonly createdAt: FieldRef<"PostReply", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostReply findUnique
   */
  export type PostReplyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReply
     */
    select?: PostReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReply
     */
    omit?: PostReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReplyInclude<ExtArgs> | null
    /**
     * Filter, which PostReply to fetch.
     */
    where: PostReplyWhereUniqueInput
  }

  /**
   * PostReply findUniqueOrThrow
   */
  export type PostReplyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReply
     */
    select?: PostReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReply
     */
    omit?: PostReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReplyInclude<ExtArgs> | null
    /**
     * Filter, which PostReply to fetch.
     */
    where: PostReplyWhereUniqueInput
  }

  /**
   * PostReply findFirst
   */
  export type PostReplyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReply
     */
    select?: PostReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReply
     */
    omit?: PostReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReplyInclude<ExtArgs> | null
    /**
     * Filter, which PostReply to fetch.
     */
    where?: PostReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostReplies to fetch.
     */
    orderBy?: PostReplyOrderByWithRelationInput | PostReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostReplies.
     */
    cursor?: PostReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostReplies.
     */
    distinct?: PostReplyScalarFieldEnum | PostReplyScalarFieldEnum[]
  }

  /**
   * PostReply findFirstOrThrow
   */
  export type PostReplyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReply
     */
    select?: PostReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReply
     */
    omit?: PostReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReplyInclude<ExtArgs> | null
    /**
     * Filter, which PostReply to fetch.
     */
    where?: PostReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostReplies to fetch.
     */
    orderBy?: PostReplyOrderByWithRelationInput | PostReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostReplies.
     */
    cursor?: PostReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostReplies.
     */
    distinct?: PostReplyScalarFieldEnum | PostReplyScalarFieldEnum[]
  }

  /**
   * PostReply findMany
   */
  export type PostReplyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReply
     */
    select?: PostReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReply
     */
    omit?: PostReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReplyInclude<ExtArgs> | null
    /**
     * Filter, which PostReplies to fetch.
     */
    where?: PostReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostReplies to fetch.
     */
    orderBy?: PostReplyOrderByWithRelationInput | PostReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostReplies.
     */
    cursor?: PostReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostReplies.
     */
    distinct?: PostReplyScalarFieldEnum | PostReplyScalarFieldEnum[]
  }

  /**
   * PostReply create
   */
  export type PostReplyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReply
     */
    select?: PostReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReply
     */
    omit?: PostReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReplyInclude<ExtArgs> | null
    /**
     * The data needed to create a PostReply.
     */
    data: XOR<PostReplyCreateInput, PostReplyUncheckedCreateInput>
  }

  /**
   * PostReply createMany
   */
  export type PostReplyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostReplies.
     */
    data: PostReplyCreateManyInput | PostReplyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostReply createManyAndReturn
   */
  export type PostReplyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReply
     */
    select?: PostReplySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostReply
     */
    omit?: PostReplyOmit<ExtArgs> | null
    /**
     * The data used to create many PostReplies.
     */
    data: PostReplyCreateManyInput | PostReplyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReplyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostReply update
   */
  export type PostReplyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReply
     */
    select?: PostReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReply
     */
    omit?: PostReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReplyInclude<ExtArgs> | null
    /**
     * The data needed to update a PostReply.
     */
    data: XOR<PostReplyUpdateInput, PostReplyUncheckedUpdateInput>
    /**
     * Choose, which PostReply to update.
     */
    where: PostReplyWhereUniqueInput
  }

  /**
   * PostReply updateMany
   */
  export type PostReplyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostReplies.
     */
    data: XOR<PostReplyUpdateManyMutationInput, PostReplyUncheckedUpdateManyInput>
    /**
     * Filter which PostReplies to update
     */
    where?: PostReplyWhereInput
    /**
     * Limit how many PostReplies to update.
     */
    limit?: number
  }

  /**
   * PostReply updateManyAndReturn
   */
  export type PostReplyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReply
     */
    select?: PostReplySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostReply
     */
    omit?: PostReplyOmit<ExtArgs> | null
    /**
     * The data used to update PostReplies.
     */
    data: XOR<PostReplyUpdateManyMutationInput, PostReplyUncheckedUpdateManyInput>
    /**
     * Filter which PostReplies to update
     */
    where?: PostReplyWhereInput
    /**
     * Limit how many PostReplies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReplyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostReply upsert
   */
  export type PostReplyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReply
     */
    select?: PostReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReply
     */
    omit?: PostReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReplyInclude<ExtArgs> | null
    /**
     * The filter to search for the PostReply to update in case it exists.
     */
    where: PostReplyWhereUniqueInput
    /**
     * In case the PostReply found by the `where` argument doesn't exist, create a new PostReply with this data.
     */
    create: XOR<PostReplyCreateInput, PostReplyUncheckedCreateInput>
    /**
     * In case the PostReply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostReplyUpdateInput, PostReplyUncheckedUpdateInput>
  }

  /**
   * PostReply delete
   */
  export type PostReplyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReply
     */
    select?: PostReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReply
     */
    omit?: PostReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReplyInclude<ExtArgs> | null
    /**
     * Filter which PostReply to delete.
     */
    where: PostReplyWhereUniqueInput
  }

  /**
   * PostReply deleteMany
   */
  export type PostReplyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostReplies to delete
     */
    where?: PostReplyWhereInput
    /**
     * Limit how many PostReplies to delete.
     */
    limit?: number
  }

  /**
   * PostReply without action
   */
  export type PostReplyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReply
     */
    select?: PostReplySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReply
     */
    omit?: PostReplyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReplyInclude<ExtArgs> | null
  }


  /**
   * Model PostReport
   */

  export type AggregatePostReport = {
    _count: PostReportCountAggregateOutputType | null
    _min: PostReportMinAggregateOutputType | null
    _max: PostReportMaxAggregateOutputType | null
  }

  export type PostReportMinAggregateOutputType = {
    id: string | null
    postId: string | null
    reporterId: string | null
    reason: string | null
    status: $Enums.ReportStatus | null
    createdAt: Date | null
  }

  export type PostReportMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    reporterId: string | null
    reason: string | null
    status: $Enums.ReportStatus | null
    createdAt: Date | null
  }

  export type PostReportCountAggregateOutputType = {
    id: number
    postId: number
    reporterId: number
    reason: number
    status: number
    createdAt: number
    _all: number
  }


  export type PostReportMinAggregateInputType = {
    id?: true
    postId?: true
    reporterId?: true
    reason?: true
    status?: true
    createdAt?: true
  }

  export type PostReportMaxAggregateInputType = {
    id?: true
    postId?: true
    reporterId?: true
    reason?: true
    status?: true
    createdAt?: true
  }

  export type PostReportCountAggregateInputType = {
    id?: true
    postId?: true
    reporterId?: true
    reason?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PostReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostReport to aggregate.
     */
    where?: PostReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostReports to fetch.
     */
    orderBy?: PostReportOrderByWithRelationInput | PostReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostReports
    **/
    _count?: true | PostReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostReportMaxAggregateInputType
  }

  export type GetPostReportAggregateType<T extends PostReportAggregateArgs> = {
        [P in keyof T & keyof AggregatePostReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostReport[P]>
      : GetScalarType<T[P], AggregatePostReport[P]>
  }




  export type PostReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostReportWhereInput
    orderBy?: PostReportOrderByWithAggregationInput | PostReportOrderByWithAggregationInput[]
    by: PostReportScalarFieldEnum[] | PostReportScalarFieldEnum
    having?: PostReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostReportCountAggregateInputType | true
    _min?: PostReportMinAggregateInputType
    _max?: PostReportMaxAggregateInputType
  }

  export type PostReportGroupByOutputType = {
    id: string
    postId: string
    reporterId: string
    reason: string
    status: $Enums.ReportStatus
    createdAt: Date
    _count: PostReportCountAggregateOutputType | null
    _min: PostReportMinAggregateOutputType | null
    _max: PostReportMaxAggregateOutputType | null
  }

  type GetPostReportGroupByPayload<T extends PostReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostReportGroupByOutputType[P]>
            : GetScalarType<T[P], PostReportGroupByOutputType[P]>
        }
      >
    >


  export type PostReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    reporterId?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    post?: boolean | CommunityPostDefaultArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postReport"]>

  export type PostReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    reporterId?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    post?: boolean | CommunityPostDefaultArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postReport"]>

  export type PostReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    reporterId?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    post?: boolean | CommunityPostDefaultArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postReport"]>

  export type PostReportSelectScalar = {
    id?: boolean
    postId?: boolean
    reporterId?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type PostReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "reporterId" | "reason" | "status" | "createdAt", ExtArgs["result"]["postReport"]>
  export type PostReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | CommunityPostDefaultArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | CommunityPostDefaultArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | CommunityPostDefaultArgs<ExtArgs>
    reporter?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostReport"
    objects: {
      post: Prisma.$CommunityPostPayload<ExtArgs>
      reporter: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      reporterId: string
      reason: string
      status: $Enums.ReportStatus
      createdAt: Date
    }, ExtArgs["result"]["postReport"]>
    composites: {}
  }

  type PostReportGetPayload<S extends boolean | null | undefined | PostReportDefaultArgs> = $Result.GetResult<Prisma.$PostReportPayload, S>

  type PostReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostReportCountAggregateInputType | true
    }

  export interface PostReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostReport'], meta: { name: 'PostReport' } }
    /**
     * Find zero or one PostReport that matches the filter.
     * @param {PostReportFindUniqueArgs} args - Arguments to find a PostReport
     * @example
     * // Get one PostReport
     * const postReport = await prisma.postReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostReportFindUniqueArgs>(args: SelectSubset<T, PostReportFindUniqueArgs<ExtArgs>>): Prisma__PostReportClient<$Result.GetResult<Prisma.$PostReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostReportFindUniqueOrThrowArgs} args - Arguments to find a PostReport
     * @example
     * // Get one PostReport
     * const postReport = await prisma.postReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostReportFindUniqueOrThrowArgs>(args: SelectSubset<T, PostReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostReportClient<$Result.GetResult<Prisma.$PostReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReportFindFirstArgs} args - Arguments to find a PostReport
     * @example
     * // Get one PostReport
     * const postReport = await prisma.postReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostReportFindFirstArgs>(args?: SelectSubset<T, PostReportFindFirstArgs<ExtArgs>>): Prisma__PostReportClient<$Result.GetResult<Prisma.$PostReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReportFindFirstOrThrowArgs} args - Arguments to find a PostReport
     * @example
     * // Get one PostReport
     * const postReport = await prisma.postReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostReportFindFirstOrThrowArgs>(args?: SelectSubset<T, PostReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostReportClient<$Result.GetResult<Prisma.$PostReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostReports
     * const postReports = await prisma.postReport.findMany()
     * 
     * // Get first 10 PostReports
     * const postReports = await prisma.postReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postReportWithIdOnly = await prisma.postReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostReportFindManyArgs>(args?: SelectSubset<T, PostReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostReport.
     * @param {PostReportCreateArgs} args - Arguments to create a PostReport.
     * @example
     * // Create one PostReport
     * const PostReport = await prisma.postReport.create({
     *   data: {
     *     // ... data to create a PostReport
     *   }
     * })
     * 
     */
    create<T extends PostReportCreateArgs>(args: SelectSubset<T, PostReportCreateArgs<ExtArgs>>): Prisma__PostReportClient<$Result.GetResult<Prisma.$PostReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostReports.
     * @param {PostReportCreateManyArgs} args - Arguments to create many PostReports.
     * @example
     * // Create many PostReports
     * const postReport = await prisma.postReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostReportCreateManyArgs>(args?: SelectSubset<T, PostReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostReports and returns the data saved in the database.
     * @param {PostReportCreateManyAndReturnArgs} args - Arguments to create many PostReports.
     * @example
     * // Create many PostReports
     * const postReport = await prisma.postReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostReports and only return the `id`
     * const postReportWithIdOnly = await prisma.postReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostReportCreateManyAndReturnArgs>(args?: SelectSubset<T, PostReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostReport.
     * @param {PostReportDeleteArgs} args - Arguments to delete one PostReport.
     * @example
     * // Delete one PostReport
     * const PostReport = await prisma.postReport.delete({
     *   where: {
     *     // ... filter to delete one PostReport
     *   }
     * })
     * 
     */
    delete<T extends PostReportDeleteArgs>(args: SelectSubset<T, PostReportDeleteArgs<ExtArgs>>): Prisma__PostReportClient<$Result.GetResult<Prisma.$PostReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostReport.
     * @param {PostReportUpdateArgs} args - Arguments to update one PostReport.
     * @example
     * // Update one PostReport
     * const postReport = await prisma.postReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostReportUpdateArgs>(args: SelectSubset<T, PostReportUpdateArgs<ExtArgs>>): Prisma__PostReportClient<$Result.GetResult<Prisma.$PostReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostReports.
     * @param {PostReportDeleteManyArgs} args - Arguments to filter PostReports to delete.
     * @example
     * // Delete a few PostReports
     * const { count } = await prisma.postReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostReportDeleteManyArgs>(args?: SelectSubset<T, PostReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostReports
     * const postReport = await prisma.postReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostReportUpdateManyArgs>(args: SelectSubset<T, PostReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostReports and returns the data updated in the database.
     * @param {PostReportUpdateManyAndReturnArgs} args - Arguments to update many PostReports.
     * @example
     * // Update many PostReports
     * const postReport = await prisma.postReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostReports and only return the `id`
     * const postReportWithIdOnly = await prisma.postReport.updateManyAndReturn({
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
    updateManyAndReturn<T extends PostReportUpdateManyAndReturnArgs>(args: SelectSubset<T, PostReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostReport.
     * @param {PostReportUpsertArgs} args - Arguments to update or create a PostReport.
     * @example
     * // Update or create a PostReport
     * const postReport = await prisma.postReport.upsert({
     *   create: {
     *     // ... data to create a PostReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostReport we want to update
     *   }
     * })
     */
    upsert<T extends PostReportUpsertArgs>(args: SelectSubset<T, PostReportUpsertArgs<ExtArgs>>): Prisma__PostReportClient<$Result.GetResult<Prisma.$PostReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReportCountArgs} args - Arguments to filter PostReports to count.
     * @example
     * // Count the number of PostReports
     * const count = await prisma.postReport.count({
     *   where: {
     *     // ... the filter for the PostReports we want to count
     *   }
     * })
    **/
    count<T extends PostReportCountArgs>(
      args?: Subset<T, PostReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostReportAggregateArgs>(args: Subset<T, PostReportAggregateArgs>): Prisma.PrismaPromise<GetPostReportAggregateType<T>>

    /**
     * Group by PostReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostReportGroupByArgs} args - Group by arguments.
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
      T extends PostReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostReportGroupByArgs['orderBy'] }
        : { orderBy?: PostReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostReport model
   */
  readonly fields: PostReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends CommunityPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommunityPostDefaultArgs<ExtArgs>>): Prisma__CommunityPostClient<$Result.GetResult<Prisma.$CommunityPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reporter<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PostReport model
   */
  interface PostReportFieldRefs {
    readonly id: FieldRef<"PostReport", 'String'>
    readonly postId: FieldRef<"PostReport", 'String'>
    readonly reporterId: FieldRef<"PostReport", 'String'>
    readonly reason: FieldRef<"PostReport", 'String'>
    readonly status: FieldRef<"PostReport", 'ReportStatus'>
    readonly createdAt: FieldRef<"PostReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostReport findUnique
   */
  export type PostReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReport
     */
    select?: PostReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReport
     */
    omit?: PostReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReportInclude<ExtArgs> | null
    /**
     * Filter, which PostReport to fetch.
     */
    where: PostReportWhereUniqueInput
  }

  /**
   * PostReport findUniqueOrThrow
   */
  export type PostReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReport
     */
    select?: PostReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReport
     */
    omit?: PostReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReportInclude<ExtArgs> | null
    /**
     * Filter, which PostReport to fetch.
     */
    where: PostReportWhereUniqueInput
  }

  /**
   * PostReport findFirst
   */
  export type PostReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReport
     */
    select?: PostReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReport
     */
    omit?: PostReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReportInclude<ExtArgs> | null
    /**
     * Filter, which PostReport to fetch.
     */
    where?: PostReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostReports to fetch.
     */
    orderBy?: PostReportOrderByWithRelationInput | PostReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostReports.
     */
    cursor?: PostReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostReports.
     */
    distinct?: PostReportScalarFieldEnum | PostReportScalarFieldEnum[]
  }

  /**
   * PostReport findFirstOrThrow
   */
  export type PostReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReport
     */
    select?: PostReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReport
     */
    omit?: PostReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReportInclude<ExtArgs> | null
    /**
     * Filter, which PostReport to fetch.
     */
    where?: PostReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostReports to fetch.
     */
    orderBy?: PostReportOrderByWithRelationInput | PostReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostReports.
     */
    cursor?: PostReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostReports.
     */
    distinct?: PostReportScalarFieldEnum | PostReportScalarFieldEnum[]
  }

  /**
   * PostReport findMany
   */
  export type PostReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReport
     */
    select?: PostReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReport
     */
    omit?: PostReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReportInclude<ExtArgs> | null
    /**
     * Filter, which PostReports to fetch.
     */
    where?: PostReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostReports to fetch.
     */
    orderBy?: PostReportOrderByWithRelationInput | PostReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostReports.
     */
    cursor?: PostReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostReports.
     */
    distinct?: PostReportScalarFieldEnum | PostReportScalarFieldEnum[]
  }

  /**
   * PostReport create
   */
  export type PostReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReport
     */
    select?: PostReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReport
     */
    omit?: PostReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReportInclude<ExtArgs> | null
    /**
     * The data needed to create a PostReport.
     */
    data: XOR<PostReportCreateInput, PostReportUncheckedCreateInput>
  }

  /**
   * PostReport createMany
   */
  export type PostReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostReports.
     */
    data: PostReportCreateManyInput | PostReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostReport createManyAndReturn
   */
  export type PostReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReport
     */
    select?: PostReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostReport
     */
    omit?: PostReportOmit<ExtArgs> | null
    /**
     * The data used to create many PostReports.
     */
    data: PostReportCreateManyInput | PostReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostReport update
   */
  export type PostReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReport
     */
    select?: PostReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReport
     */
    omit?: PostReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReportInclude<ExtArgs> | null
    /**
     * The data needed to update a PostReport.
     */
    data: XOR<PostReportUpdateInput, PostReportUncheckedUpdateInput>
    /**
     * Choose, which PostReport to update.
     */
    where: PostReportWhereUniqueInput
  }

  /**
   * PostReport updateMany
   */
  export type PostReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostReports.
     */
    data: XOR<PostReportUpdateManyMutationInput, PostReportUncheckedUpdateManyInput>
    /**
     * Filter which PostReports to update
     */
    where?: PostReportWhereInput
    /**
     * Limit how many PostReports to update.
     */
    limit?: number
  }

  /**
   * PostReport updateManyAndReturn
   */
  export type PostReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReport
     */
    select?: PostReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostReport
     */
    omit?: PostReportOmit<ExtArgs> | null
    /**
     * The data used to update PostReports.
     */
    data: XOR<PostReportUpdateManyMutationInput, PostReportUncheckedUpdateManyInput>
    /**
     * Filter which PostReports to update
     */
    where?: PostReportWhereInput
    /**
     * Limit how many PostReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostReport upsert
   */
  export type PostReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReport
     */
    select?: PostReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReport
     */
    omit?: PostReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReportInclude<ExtArgs> | null
    /**
     * The filter to search for the PostReport to update in case it exists.
     */
    where: PostReportWhereUniqueInput
    /**
     * In case the PostReport found by the `where` argument doesn't exist, create a new PostReport with this data.
     */
    create: XOR<PostReportCreateInput, PostReportUncheckedCreateInput>
    /**
     * In case the PostReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostReportUpdateInput, PostReportUncheckedUpdateInput>
  }

  /**
   * PostReport delete
   */
  export type PostReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReport
     */
    select?: PostReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReport
     */
    omit?: PostReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReportInclude<ExtArgs> | null
    /**
     * Filter which PostReport to delete.
     */
    where: PostReportWhereUniqueInput
  }

  /**
   * PostReport deleteMany
   */
  export type PostReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostReports to delete
     */
    where?: PostReportWhereInput
    /**
     * Limit how many PostReports to delete.
     */
    limit?: number
  }

  /**
   * PostReport without action
   */
  export type PostReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostReport
     */
    select?: PostReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostReport
     */
    omit?: PostReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostReportInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    counselorId: string | null
    alias: string | null
    date: Date | null
    timeSlot: string | null
    mode: $Enums.AppointmentMode | null
    status: $Enums.AppointmentStatus | null
    notes: string | null
    createdAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    counselorId: string | null
    alias: string | null
    date: Date | null
    timeSlot: string | null
    mode: $Enums.AppointmentMode | null
    status: $Enums.AppointmentStatus | null
    notes: string | null
    createdAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    studentId: number
    counselorId: number
    alias: number
    date: number
    timeSlot: number
    mode: number
    status: number
    notes: number
    createdAt: number
    _all: number
  }


  export type AppointmentMinAggregateInputType = {
    id?: true
    studentId?: true
    counselorId?: true
    alias?: true
    date?: true
    timeSlot?: true
    mode?: true
    status?: true
    notes?: true
    createdAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    studentId?: true
    counselorId?: true
    alias?: true
    date?: true
    timeSlot?: true
    mode?: true
    status?: true
    notes?: true
    createdAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    studentId?: true
    counselorId?: true
    alias?: true
    date?: true
    timeSlot?: true
    mode?: true
    status?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    studentId: string
    counselorId: string
    alias: string
    date: Date
    timeSlot: string
    mode: $Enums.AppointmentMode
    status: $Enums.AppointmentStatus
    notes: string | null
    createdAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    counselorId?: boolean
    alias?: boolean
    date?: boolean
    timeSlot?: boolean
    mode?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    counselor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    counselorId?: boolean
    alias?: boolean
    date?: boolean
    timeSlot?: boolean
    mode?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    counselor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    counselorId?: boolean
    alias?: boolean
    date?: boolean
    timeSlot?: boolean
    mode?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    counselor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    studentId?: boolean
    counselorId?: boolean
    alias?: boolean
    date?: boolean
    timeSlot?: boolean
    mode?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "counselorId" | "alias" | "date" | "timeSlot" | "mode" | "status" | "notes" | "createdAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    counselor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    counselor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    counselor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      counselor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      counselorId: string
      alias: string
      date: Date
      timeSlot: string
      mode: $Enums.AppointmentMode
      status: $Enums.AppointmentStatus
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
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
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    counselor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly studentId: FieldRef<"Appointment", 'String'>
    readonly counselorId: FieldRef<"Appointment", 'String'>
    readonly alias: FieldRef<"Appointment", 'String'>
    readonly date: FieldRef<"Appointment", 'DateTime'>
    readonly timeSlot: FieldRef<"Appointment", 'String'>
    readonly mode: FieldRef<"Appointment", 'AppointmentMode'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly notes: FieldRef<"Appointment", 'String'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model VentMessage
   */

  export type AggregateVentMessage = {
    _count: VentMessageCountAggregateOutputType | null
    _min: VentMessageMinAggregateOutputType | null
    _max: VentMessageMaxAggregateOutputType | null
  }

  export type VentMessageMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    counselorId: string | null
    content: string | null
    status: $Enums.VentStatus | null
    createdAt: Date | null
  }

  export type VentMessageMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    counselorId: string | null
    content: string | null
    status: $Enums.VentStatus | null
    createdAt: Date | null
  }

  export type VentMessageCountAggregateOutputType = {
    id: number
    studentId: number
    counselorId: number
    content: number
    reactions: number
    status: number
    createdAt: number
    _all: number
  }


  export type VentMessageMinAggregateInputType = {
    id?: true
    studentId?: true
    counselorId?: true
    content?: true
    status?: true
    createdAt?: true
  }

  export type VentMessageMaxAggregateInputType = {
    id?: true
    studentId?: true
    counselorId?: true
    content?: true
    status?: true
    createdAt?: true
  }

  export type VentMessageCountAggregateInputType = {
    id?: true
    studentId?: true
    counselorId?: true
    content?: true
    reactions?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type VentMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VentMessage to aggregate.
     */
    where?: VentMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VentMessages to fetch.
     */
    orderBy?: VentMessageOrderByWithRelationInput | VentMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VentMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VentMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VentMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VentMessages
    **/
    _count?: true | VentMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VentMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VentMessageMaxAggregateInputType
  }

  export type GetVentMessageAggregateType<T extends VentMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateVentMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVentMessage[P]>
      : GetScalarType<T[P], AggregateVentMessage[P]>
  }




  export type VentMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VentMessageWhereInput
    orderBy?: VentMessageOrderByWithAggregationInput | VentMessageOrderByWithAggregationInput[]
    by: VentMessageScalarFieldEnum[] | VentMessageScalarFieldEnum
    having?: VentMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VentMessageCountAggregateInputType | true
    _min?: VentMessageMinAggregateInputType
    _max?: VentMessageMaxAggregateInputType
  }

  export type VentMessageGroupByOutputType = {
    id: string
    studentId: string
    counselorId: string | null
    content: string
    reactions: string[]
    status: $Enums.VentStatus
    createdAt: Date
    _count: VentMessageCountAggregateOutputType | null
    _min: VentMessageMinAggregateOutputType | null
    _max: VentMessageMaxAggregateOutputType | null
  }

  type GetVentMessageGroupByPayload<T extends VentMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VentMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VentMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VentMessageGroupByOutputType[P]>
            : GetScalarType<T[P], VentMessageGroupByOutputType[P]>
        }
      >
    >


  export type VentMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    counselorId?: boolean
    content?: boolean
    reactions?: boolean
    status?: boolean
    createdAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    counselor?: boolean | VentMessage$counselorArgs<ExtArgs>
  }, ExtArgs["result"]["ventMessage"]>

  export type VentMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    counselorId?: boolean
    content?: boolean
    reactions?: boolean
    status?: boolean
    createdAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    counselor?: boolean | VentMessage$counselorArgs<ExtArgs>
  }, ExtArgs["result"]["ventMessage"]>

  export type VentMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    counselorId?: boolean
    content?: boolean
    reactions?: boolean
    status?: boolean
    createdAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    counselor?: boolean | VentMessage$counselorArgs<ExtArgs>
  }, ExtArgs["result"]["ventMessage"]>

  export type VentMessageSelectScalar = {
    id?: boolean
    studentId?: boolean
    counselorId?: boolean
    content?: boolean
    reactions?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type VentMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "counselorId" | "content" | "reactions" | "status" | "createdAt", ExtArgs["result"]["ventMessage"]>
  export type VentMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    counselor?: boolean | VentMessage$counselorArgs<ExtArgs>
  }
  export type VentMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    counselor?: boolean | VentMessage$counselorArgs<ExtArgs>
  }
  export type VentMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    counselor?: boolean | VentMessage$counselorArgs<ExtArgs>
  }

  export type $VentMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VentMessage"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      counselor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      counselorId: string | null
      content: string
      reactions: string[]
      status: $Enums.VentStatus
      createdAt: Date
    }, ExtArgs["result"]["ventMessage"]>
    composites: {}
  }

  type VentMessageGetPayload<S extends boolean | null | undefined | VentMessageDefaultArgs> = $Result.GetResult<Prisma.$VentMessagePayload, S>

  type VentMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VentMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VentMessageCountAggregateInputType | true
    }

  export interface VentMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VentMessage'], meta: { name: 'VentMessage' } }
    /**
     * Find zero or one VentMessage that matches the filter.
     * @param {VentMessageFindUniqueArgs} args - Arguments to find a VentMessage
     * @example
     * // Get one VentMessage
     * const ventMessage = await prisma.ventMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VentMessageFindUniqueArgs>(args: SelectSubset<T, VentMessageFindUniqueArgs<ExtArgs>>): Prisma__VentMessageClient<$Result.GetResult<Prisma.$VentMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VentMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VentMessageFindUniqueOrThrowArgs} args - Arguments to find a VentMessage
     * @example
     * // Get one VentMessage
     * const ventMessage = await prisma.ventMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VentMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, VentMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VentMessageClient<$Result.GetResult<Prisma.$VentMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VentMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentMessageFindFirstArgs} args - Arguments to find a VentMessage
     * @example
     * // Get one VentMessage
     * const ventMessage = await prisma.ventMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VentMessageFindFirstArgs>(args?: SelectSubset<T, VentMessageFindFirstArgs<ExtArgs>>): Prisma__VentMessageClient<$Result.GetResult<Prisma.$VentMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VentMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentMessageFindFirstOrThrowArgs} args - Arguments to find a VentMessage
     * @example
     * // Get one VentMessage
     * const ventMessage = await prisma.ventMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VentMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, VentMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__VentMessageClient<$Result.GetResult<Prisma.$VentMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VentMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VentMessages
     * const ventMessages = await prisma.ventMessage.findMany()
     * 
     * // Get first 10 VentMessages
     * const ventMessages = await prisma.ventMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ventMessageWithIdOnly = await prisma.ventMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VentMessageFindManyArgs>(args?: SelectSubset<T, VentMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VentMessage.
     * @param {VentMessageCreateArgs} args - Arguments to create a VentMessage.
     * @example
     * // Create one VentMessage
     * const VentMessage = await prisma.ventMessage.create({
     *   data: {
     *     // ... data to create a VentMessage
     *   }
     * })
     * 
     */
    create<T extends VentMessageCreateArgs>(args: SelectSubset<T, VentMessageCreateArgs<ExtArgs>>): Prisma__VentMessageClient<$Result.GetResult<Prisma.$VentMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VentMessages.
     * @param {VentMessageCreateManyArgs} args - Arguments to create many VentMessages.
     * @example
     * // Create many VentMessages
     * const ventMessage = await prisma.ventMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VentMessageCreateManyArgs>(args?: SelectSubset<T, VentMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VentMessages and returns the data saved in the database.
     * @param {VentMessageCreateManyAndReturnArgs} args - Arguments to create many VentMessages.
     * @example
     * // Create many VentMessages
     * const ventMessage = await prisma.ventMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VentMessages and only return the `id`
     * const ventMessageWithIdOnly = await prisma.ventMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VentMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, VentMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VentMessage.
     * @param {VentMessageDeleteArgs} args - Arguments to delete one VentMessage.
     * @example
     * // Delete one VentMessage
     * const VentMessage = await prisma.ventMessage.delete({
     *   where: {
     *     // ... filter to delete one VentMessage
     *   }
     * })
     * 
     */
    delete<T extends VentMessageDeleteArgs>(args: SelectSubset<T, VentMessageDeleteArgs<ExtArgs>>): Prisma__VentMessageClient<$Result.GetResult<Prisma.$VentMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VentMessage.
     * @param {VentMessageUpdateArgs} args - Arguments to update one VentMessage.
     * @example
     * // Update one VentMessage
     * const ventMessage = await prisma.ventMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VentMessageUpdateArgs>(args: SelectSubset<T, VentMessageUpdateArgs<ExtArgs>>): Prisma__VentMessageClient<$Result.GetResult<Prisma.$VentMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VentMessages.
     * @param {VentMessageDeleteManyArgs} args - Arguments to filter VentMessages to delete.
     * @example
     * // Delete a few VentMessages
     * const { count } = await prisma.ventMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VentMessageDeleteManyArgs>(args?: SelectSubset<T, VentMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VentMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VentMessages
     * const ventMessage = await prisma.ventMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VentMessageUpdateManyArgs>(args: SelectSubset<T, VentMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VentMessages and returns the data updated in the database.
     * @param {VentMessageUpdateManyAndReturnArgs} args - Arguments to update many VentMessages.
     * @example
     * // Update many VentMessages
     * const ventMessage = await prisma.ventMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VentMessages and only return the `id`
     * const ventMessageWithIdOnly = await prisma.ventMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends VentMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, VentMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VentMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VentMessage.
     * @param {VentMessageUpsertArgs} args - Arguments to update or create a VentMessage.
     * @example
     * // Update or create a VentMessage
     * const ventMessage = await prisma.ventMessage.upsert({
     *   create: {
     *     // ... data to create a VentMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VentMessage we want to update
     *   }
     * })
     */
    upsert<T extends VentMessageUpsertArgs>(args: SelectSubset<T, VentMessageUpsertArgs<ExtArgs>>): Prisma__VentMessageClient<$Result.GetResult<Prisma.$VentMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VentMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentMessageCountArgs} args - Arguments to filter VentMessages to count.
     * @example
     * // Count the number of VentMessages
     * const count = await prisma.ventMessage.count({
     *   where: {
     *     // ... the filter for the VentMessages we want to count
     *   }
     * })
    **/
    count<T extends VentMessageCountArgs>(
      args?: Subset<T, VentMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VentMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VentMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VentMessageAggregateArgs>(args: Subset<T, VentMessageAggregateArgs>): Prisma.PrismaPromise<GetVentMessageAggregateType<T>>

    /**
     * Group by VentMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VentMessageGroupByArgs} args - Group by arguments.
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
      T extends VentMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VentMessageGroupByArgs['orderBy'] }
        : { orderBy?: VentMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VentMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVentMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VentMessage model
   */
  readonly fields: VentMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VentMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VentMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    counselor<T extends VentMessage$counselorArgs<ExtArgs> = {}>(args?: Subset<T, VentMessage$counselorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the VentMessage model
   */
  interface VentMessageFieldRefs {
    readonly id: FieldRef<"VentMessage", 'String'>
    readonly studentId: FieldRef<"VentMessage", 'String'>
    readonly counselorId: FieldRef<"VentMessage", 'String'>
    readonly content: FieldRef<"VentMessage", 'String'>
    readonly reactions: FieldRef<"VentMessage", 'String[]'>
    readonly status: FieldRef<"VentMessage", 'VentStatus'>
    readonly createdAt: FieldRef<"VentMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VentMessage findUnique
   */
  export type VentMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentMessage
     */
    select?: VentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentMessage
     */
    omit?: VentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentMessageInclude<ExtArgs> | null
    /**
     * Filter, which VentMessage to fetch.
     */
    where: VentMessageWhereUniqueInput
  }

  /**
   * VentMessage findUniqueOrThrow
   */
  export type VentMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentMessage
     */
    select?: VentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentMessage
     */
    omit?: VentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentMessageInclude<ExtArgs> | null
    /**
     * Filter, which VentMessage to fetch.
     */
    where: VentMessageWhereUniqueInput
  }

  /**
   * VentMessage findFirst
   */
  export type VentMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentMessage
     */
    select?: VentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentMessage
     */
    omit?: VentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentMessageInclude<ExtArgs> | null
    /**
     * Filter, which VentMessage to fetch.
     */
    where?: VentMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VentMessages to fetch.
     */
    orderBy?: VentMessageOrderByWithRelationInput | VentMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VentMessages.
     */
    cursor?: VentMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VentMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VentMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VentMessages.
     */
    distinct?: VentMessageScalarFieldEnum | VentMessageScalarFieldEnum[]
  }

  /**
   * VentMessage findFirstOrThrow
   */
  export type VentMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentMessage
     */
    select?: VentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentMessage
     */
    omit?: VentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentMessageInclude<ExtArgs> | null
    /**
     * Filter, which VentMessage to fetch.
     */
    where?: VentMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VentMessages to fetch.
     */
    orderBy?: VentMessageOrderByWithRelationInput | VentMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VentMessages.
     */
    cursor?: VentMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VentMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VentMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VentMessages.
     */
    distinct?: VentMessageScalarFieldEnum | VentMessageScalarFieldEnum[]
  }

  /**
   * VentMessage findMany
   */
  export type VentMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentMessage
     */
    select?: VentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentMessage
     */
    omit?: VentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentMessageInclude<ExtArgs> | null
    /**
     * Filter, which VentMessages to fetch.
     */
    where?: VentMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VentMessages to fetch.
     */
    orderBy?: VentMessageOrderByWithRelationInput | VentMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VentMessages.
     */
    cursor?: VentMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VentMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VentMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VentMessages.
     */
    distinct?: VentMessageScalarFieldEnum | VentMessageScalarFieldEnum[]
  }

  /**
   * VentMessage create
   */
  export type VentMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentMessage
     */
    select?: VentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentMessage
     */
    omit?: VentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a VentMessage.
     */
    data: XOR<VentMessageCreateInput, VentMessageUncheckedCreateInput>
  }

  /**
   * VentMessage createMany
   */
  export type VentMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VentMessages.
     */
    data: VentMessageCreateManyInput | VentMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VentMessage createManyAndReturn
   */
  export type VentMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentMessage
     */
    select?: VentMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VentMessage
     */
    omit?: VentMessageOmit<ExtArgs> | null
    /**
     * The data used to create many VentMessages.
     */
    data: VentMessageCreateManyInput | VentMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VentMessage update
   */
  export type VentMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentMessage
     */
    select?: VentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentMessage
     */
    omit?: VentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a VentMessage.
     */
    data: XOR<VentMessageUpdateInput, VentMessageUncheckedUpdateInput>
    /**
     * Choose, which VentMessage to update.
     */
    where: VentMessageWhereUniqueInput
  }

  /**
   * VentMessage updateMany
   */
  export type VentMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VentMessages.
     */
    data: XOR<VentMessageUpdateManyMutationInput, VentMessageUncheckedUpdateManyInput>
    /**
     * Filter which VentMessages to update
     */
    where?: VentMessageWhereInput
    /**
     * Limit how many VentMessages to update.
     */
    limit?: number
  }

  /**
   * VentMessage updateManyAndReturn
   */
  export type VentMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentMessage
     */
    select?: VentMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VentMessage
     */
    omit?: VentMessageOmit<ExtArgs> | null
    /**
     * The data used to update VentMessages.
     */
    data: XOR<VentMessageUpdateManyMutationInput, VentMessageUncheckedUpdateManyInput>
    /**
     * Filter which VentMessages to update
     */
    where?: VentMessageWhereInput
    /**
     * Limit how many VentMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VentMessage upsert
   */
  export type VentMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentMessage
     */
    select?: VentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentMessage
     */
    omit?: VentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the VentMessage to update in case it exists.
     */
    where: VentMessageWhereUniqueInput
    /**
     * In case the VentMessage found by the `where` argument doesn't exist, create a new VentMessage with this data.
     */
    create: XOR<VentMessageCreateInput, VentMessageUncheckedCreateInput>
    /**
     * In case the VentMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VentMessageUpdateInput, VentMessageUncheckedUpdateInput>
  }

  /**
   * VentMessage delete
   */
  export type VentMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentMessage
     */
    select?: VentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentMessage
     */
    omit?: VentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentMessageInclude<ExtArgs> | null
    /**
     * Filter which VentMessage to delete.
     */
    where: VentMessageWhereUniqueInput
  }

  /**
   * VentMessage deleteMany
   */
  export type VentMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VentMessages to delete
     */
    where?: VentMessageWhereInput
    /**
     * Limit how many VentMessages to delete.
     */
    limit?: number
  }

  /**
   * VentMessage.counselor
   */
  export type VentMessage$counselorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * VentMessage without action
   */
  export type VentMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VentMessage
     */
    select?: VentMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VentMessage
     */
    omit?: VentMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VentMessageInclude<ExtArgs> | null
  }


  /**
   * Model ChatSession
   */

  export type AggregateChatSession = {
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  export type ChatSessionMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    counselorId: string | null
    mode: $Enums.AppointmentMode | null
    status: $Enums.ChatSessionStatus | null
    createdAt: Date | null
  }

  export type ChatSessionMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    counselorId: string | null
    mode: $Enums.AppointmentMode | null
    status: $Enums.ChatSessionStatus | null
    createdAt: Date | null
  }

  export type ChatSessionCountAggregateOutputType = {
    id: number
    studentId: number
    counselorId: number
    mode: number
    status: number
    createdAt: number
    _all: number
  }


  export type ChatSessionMinAggregateInputType = {
    id?: true
    studentId?: true
    counselorId?: true
    mode?: true
    status?: true
    createdAt?: true
  }

  export type ChatSessionMaxAggregateInputType = {
    id?: true
    studentId?: true
    counselorId?: true
    mode?: true
    status?: true
    createdAt?: true
  }

  export type ChatSessionCountAggregateInputType = {
    id?: true
    studentId?: true
    counselorId?: true
    mode?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ChatSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSession to aggregate.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatSessions
    **/
    _count?: true | ChatSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatSessionMaxAggregateInputType
  }

  export type GetChatSessionAggregateType<T extends ChatSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateChatSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatSession[P]>
      : GetScalarType<T[P], AggregateChatSession[P]>
  }




  export type ChatSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatSessionWhereInput
    orderBy?: ChatSessionOrderByWithAggregationInput | ChatSessionOrderByWithAggregationInput[]
    by: ChatSessionScalarFieldEnum[] | ChatSessionScalarFieldEnum
    having?: ChatSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatSessionCountAggregateInputType | true
    _min?: ChatSessionMinAggregateInputType
    _max?: ChatSessionMaxAggregateInputType
  }

  export type ChatSessionGroupByOutputType = {
    id: string
    studentId: string
    counselorId: string
    mode: $Enums.AppointmentMode
    status: $Enums.ChatSessionStatus
    createdAt: Date
    _count: ChatSessionCountAggregateOutputType | null
    _min: ChatSessionMinAggregateOutputType | null
    _max: ChatSessionMaxAggregateOutputType | null
  }

  type GetChatSessionGroupByPayload<T extends ChatSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ChatSessionGroupByOutputType[P]>
        }
      >
    >


  export type ChatSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    counselorId?: boolean
    mode?: boolean
    status?: boolean
    createdAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    counselor?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | ChatSession$messagesArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    counselorId?: boolean
    mode?: boolean
    status?: boolean
    createdAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    counselor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    counselorId?: boolean
    mode?: boolean
    status?: boolean
    createdAt?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    counselor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatSession"]>

  export type ChatSessionSelectScalar = {
    id?: boolean
    studentId?: boolean
    counselorId?: boolean
    mode?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ChatSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "counselorId" | "mode" | "status" | "createdAt", ExtArgs["result"]["chatSession"]>
  export type ChatSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    counselor?: boolean | UserDefaultArgs<ExtArgs>
    messages?: boolean | ChatSession$messagesArgs<ExtArgs>
    _count?: boolean | ChatSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    counselor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    counselor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatSession"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      counselor: Prisma.$UserPayload<ExtArgs>
      messages: Prisma.$ChatMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      counselorId: string
      mode: $Enums.AppointmentMode
      status: $Enums.ChatSessionStatus
      createdAt: Date
    }, ExtArgs["result"]["chatSession"]>
    composites: {}
  }

  type ChatSessionGetPayload<S extends boolean | null | undefined | ChatSessionDefaultArgs> = $Result.GetResult<Prisma.$ChatSessionPayload, S>

  type ChatSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatSessionCountAggregateInputType | true
    }

  export interface ChatSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatSession'], meta: { name: 'ChatSession' } }
    /**
     * Find zero or one ChatSession that matches the filter.
     * @param {ChatSessionFindUniqueArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatSessionFindUniqueArgs>(args: SelectSubset<T, ChatSessionFindUniqueArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatSessionFindUniqueOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatSessionFindFirstArgs>(args?: SelectSubset<T, ChatSessionFindFirstArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindFirstOrThrowArgs} args - Arguments to find a ChatSession
     * @example
     * // Get one ChatSession
     * const chatSession = await prisma.chatSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatSessions
     * const chatSessions = await prisma.chatSession.findMany()
     * 
     * // Get first 10 ChatSessions
     * const chatSessions = await prisma.chatSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatSessionFindManyArgs>(args?: SelectSubset<T, ChatSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatSession.
     * @param {ChatSessionCreateArgs} args - Arguments to create a ChatSession.
     * @example
     * // Create one ChatSession
     * const ChatSession = await prisma.chatSession.create({
     *   data: {
     *     // ... data to create a ChatSession
     *   }
     * })
     * 
     */
    create<T extends ChatSessionCreateArgs>(args: SelectSubset<T, ChatSessionCreateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatSessions.
     * @param {ChatSessionCreateManyArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatSessionCreateManyArgs>(args?: SelectSubset<T, ChatSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatSessions and returns the data saved in the database.
     * @param {ChatSessionCreateManyAndReturnArgs} args - Arguments to create many ChatSessions.
     * @example
     * // Create many ChatSessions
     * const chatSession = await prisma.chatSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatSession.
     * @param {ChatSessionDeleteArgs} args - Arguments to delete one ChatSession.
     * @example
     * // Delete one ChatSession
     * const ChatSession = await prisma.chatSession.delete({
     *   where: {
     *     // ... filter to delete one ChatSession
     *   }
     * })
     * 
     */
    delete<T extends ChatSessionDeleteArgs>(args: SelectSubset<T, ChatSessionDeleteArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatSession.
     * @param {ChatSessionUpdateArgs} args - Arguments to update one ChatSession.
     * @example
     * // Update one ChatSession
     * const chatSession = await prisma.chatSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatSessionUpdateArgs>(args: SelectSubset<T, ChatSessionUpdateArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatSessions.
     * @param {ChatSessionDeleteManyArgs} args - Arguments to filter ChatSessions to delete.
     * @example
     * // Delete a few ChatSessions
     * const { count } = await prisma.chatSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatSessionDeleteManyArgs>(args?: SelectSubset<T, ChatSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatSessionUpdateManyArgs>(args: SelectSubset<T, ChatSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatSessions and returns the data updated in the database.
     * @param {ChatSessionUpdateManyAndReturnArgs} args - Arguments to update many ChatSessions.
     * @example
     * // Update many ChatSessions
     * const chatSession = await prisma.chatSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatSessions and only return the `id`
     * const chatSessionWithIdOnly = await prisma.chatSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatSession.
     * @param {ChatSessionUpsertArgs} args - Arguments to update or create a ChatSession.
     * @example
     * // Update or create a ChatSession
     * const chatSession = await prisma.chatSession.upsert({
     *   create: {
     *     // ... data to create a ChatSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatSession we want to update
     *   }
     * })
     */
    upsert<T extends ChatSessionUpsertArgs>(args: SelectSubset<T, ChatSessionUpsertArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionCountArgs} args - Arguments to filter ChatSessions to count.
     * @example
     * // Count the number of ChatSessions
     * const count = await prisma.chatSession.count({
     *   where: {
     *     // ... the filter for the ChatSessions we want to count
     *   }
     * })
    **/
    count<T extends ChatSessionCountArgs>(
      args?: Subset<T, ChatSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatSessionAggregateArgs>(args: Subset<T, ChatSessionAggregateArgs>): Prisma.PrismaPromise<GetChatSessionAggregateType<T>>

    /**
     * Group by ChatSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatSessionGroupByArgs} args - Group by arguments.
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
      T extends ChatSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatSessionGroupByArgs['orderBy'] }
        : { orderBy?: ChatSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatSession model
   */
  readonly fields: ChatSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    counselor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends ChatSession$messagesArgs<ExtArgs> = {}>(args?: Subset<T, ChatSession$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ChatSession model
   */
  interface ChatSessionFieldRefs {
    readonly id: FieldRef<"ChatSession", 'String'>
    readonly studentId: FieldRef<"ChatSession", 'String'>
    readonly counselorId: FieldRef<"ChatSession", 'String'>
    readonly mode: FieldRef<"ChatSession", 'AppointmentMode'>
    readonly status: FieldRef<"ChatSession", 'ChatSessionStatus'>
    readonly createdAt: FieldRef<"ChatSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatSession findUnique
   */
  export type ChatSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findUniqueOrThrow
   */
  export type ChatSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession findFirst
   */
  export type ChatSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findFirstOrThrow
   */
  export type ChatSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSession to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession findMany
   */
  export type ChatSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter, which ChatSessions to fetch.
     */
    where?: ChatSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatSessions to fetch.
     */
    orderBy?: ChatSessionOrderByWithRelationInput | ChatSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatSessions.
     */
    cursor?: ChatSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatSessions.
     */
    distinct?: ChatSessionScalarFieldEnum | ChatSessionScalarFieldEnum[]
  }

  /**
   * ChatSession create
   */
  export type ChatSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatSession.
     */
    data: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
  }

  /**
   * ChatSession createMany
   */
  export type ChatSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatSession createManyAndReturn
   */
  export type ChatSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ChatSessions.
     */
    data: ChatSessionCreateManyInput | ChatSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatSession update
   */
  export type ChatSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatSession.
     */
    data: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
    /**
     * Choose, which ChatSession to update.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession updateMany
   */
  export type ChatSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
  }

  /**
   * ChatSession updateManyAndReturn
   */
  export type ChatSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * The data used to update ChatSessions.
     */
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyInput>
    /**
     * Filter which ChatSessions to update
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatSession upsert
   */
  export type ChatSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatSession to update in case it exists.
     */
    where: ChatSessionWhereUniqueInput
    /**
     * In case the ChatSession found by the `where` argument doesn't exist, create a new ChatSession with this data.
     */
    create: XOR<ChatSessionCreateInput, ChatSessionUncheckedCreateInput>
    /**
     * In case the ChatSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatSessionUpdateInput, ChatSessionUncheckedUpdateInput>
  }

  /**
   * ChatSession delete
   */
  export type ChatSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
    /**
     * Filter which ChatSession to delete.
     */
    where: ChatSessionWhereUniqueInput
  }

  /**
   * ChatSession deleteMany
   */
  export type ChatSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatSessions to delete
     */
    where?: ChatSessionWhereInput
    /**
     * Limit how many ChatSessions to delete.
     */
    limit?: number
  }

  /**
   * ChatSession.messages
   */
  export type ChatSession$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    cursor?: ChatMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatSession without action
   */
  export type ChatSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatSession
     */
    select?: ChatSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatSession
     */
    omit?: ChatSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatSessionInclude<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    senderId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    senderId: string | null
    content: string | null
    createdAt: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    sessionId: number
    senderId: number
    content: number
    createdAt: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    sessionId?: true
    senderId?: true
    content?: true
    createdAt?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    sessionId?: true
    senderId?: true
    content?: true
    createdAt?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    sessionId?: true
    senderId?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    sessionId: string
    senderId: string
    content: string
    createdAt: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    senderId?: boolean
    content?: boolean
    createdAt?: boolean
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    senderId?: boolean
    content?: boolean
    createdAt?: boolean
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    senderId?: boolean
    content?: boolean
    createdAt?: boolean
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    sessionId?: boolean
    senderId?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "senderId" | "content" | "createdAt", ExtArgs["result"]["chatMessage"]>
  export type ChatMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ChatMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | ChatSessionDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {
      session: Prisma.$ChatSessionPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      senderId: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
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
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends ChatSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatSessionDefaultArgs<ExtArgs>>): Prisma__ChatSessionClient<$Result.GetResult<Prisma.$ChatSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly sessionId: FieldRef<"ChatMessage", 'String'>
    readonly senderId: FieldRef<"ChatMessage", 'String'>
    readonly content: FieldRef<"ChatMessage", 'String'>
    readonly createdAt: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMessageInclude<ExtArgs> | null
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
    fullName: 'fullName',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    alias: 'alias',
    status: 'status',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    resetOtp: 'resetOtp',
    resetOtpExpiry: 'resetOtpExpiry'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CounselorProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    employeeId: 'employeeId',
    workPhone: 'workPhone',
    license: 'license',
    specialization: 'specialization',
    officeLocation: 'officeLocation',
    experience: 'experience'
  };

  export type CounselorProfileScalarFieldEnum = (typeof CounselorProfileScalarFieldEnum)[keyof typeof CounselorProfileScalarFieldEnum]


  export const MoodCheckinScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    mood: 'mood',
    quote: 'quote',
    tasks: 'tasks',
    createdAt: 'createdAt'
  };

  export type MoodCheckinScalarFieldEnum = (typeof MoodCheckinScalarFieldEnum)[keyof typeof MoodCheckinScalarFieldEnum]


  export const JournalEntryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    content: 'content',
    mood: 'mood',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JournalEntryScalarFieldEnum = (typeof JournalEntryScalarFieldEnum)[keyof typeof JournalEntryScalarFieldEnum]


  export const CommunityPostScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    title: 'title',
    content: 'content',
    tags: 'tags',
    isReported: 'isReported',
    createdAt: 'createdAt'
  };

  export type CommunityPostScalarFieldEnum = (typeof CommunityPostScalarFieldEnum)[keyof typeof CommunityPostScalarFieldEnum]


  export const PostLikeScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type PostLikeScalarFieldEnum = (typeof PostLikeScalarFieldEnum)[keyof typeof PostLikeScalarFieldEnum]


  export const PostReplyScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    authorId: 'authorId',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type PostReplyScalarFieldEnum = (typeof PostReplyScalarFieldEnum)[keyof typeof PostReplyScalarFieldEnum]


  export const PostReportScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    reporterId: 'reporterId',
    reason: 'reason',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PostReportScalarFieldEnum = (typeof PostReportScalarFieldEnum)[keyof typeof PostReportScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    counselorId: 'counselorId',
    alias: 'alias',
    date: 'date',
    timeSlot: 'timeSlot',
    mode: 'mode',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const VentMessageScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    counselorId: 'counselorId',
    content: 'content',
    reactions: 'reactions',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type VentMessageScalarFieldEnum = (typeof VentMessageScalarFieldEnum)[keyof typeof VentMessageScalarFieldEnum]


  export const ChatSessionScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    counselorId: 'counselorId',
    mode: 'mode',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ChatSessionScalarFieldEnum = (typeof ChatSessionScalarFieldEnum)[keyof typeof ChatSessionScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    senderId: 'senderId',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Mood'
   */
  export type EnumMoodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Mood'>
    


  /**
   * Reference to a field of type 'Mood[]'
   */
  export type ListEnumMoodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Mood[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ReportStatus'
   */
  export type EnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus'>
    


  /**
   * Reference to a field of type 'ReportStatus[]'
   */
  export type ListEnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus[]'>
    


  /**
   * Reference to a field of type 'AppointmentMode'
   */
  export type EnumAppointmentModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentMode'>
    


  /**
   * Reference to a field of type 'AppointmentMode[]'
   */
  export type ListEnumAppointmentModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentMode[]'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'VentStatus'
   */
  export type EnumVentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VentStatus'>
    


  /**
   * Reference to a field of type 'VentStatus[]'
   */
  export type ListEnumVentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VentStatus[]'>
    


  /**
   * Reference to a field of type 'ChatSessionStatus'
   */
  export type EnumChatSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChatSessionStatus'>
    


  /**
   * Reference to a field of type 'ChatSessionStatus[]'
   */
  export type ListEnumChatSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ChatSessionStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    alias?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resetOtp?: StringNullableFilter<"User"> | string | null
    resetOtpExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    counselorProfile?: XOR<CounselorProfileNullableScalarRelationFilter, CounselorProfileWhereInput> | null
    moodCheckins?: MoodCheckinListRelationFilter
    journalEntries?: JournalEntryListRelationFilter
    communityPosts?: CommunityPostListRelationFilter
    postLikes?: PostLikeListRelationFilter
    postReplies?: PostReplyListRelationFilter
    postReports?: PostReportListRelationFilter
    studentAppointments?: AppointmentListRelationFilter
    ventMessages?: VentMessageListRelationFilter
    studentChatSessions?: ChatSessionListRelationFilter
    sentMessages?: ChatMessageListRelationFilter
    counselorAppointments?: AppointmentListRelationFilter
    counselorVents?: VentMessageListRelationFilter
    counselorChatSessions?: ChatSessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    alias?: SortOrderInput | SortOrder
    status?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetOtp?: SortOrderInput | SortOrder
    resetOtpExpiry?: SortOrderInput | SortOrder
    counselorProfile?: CounselorProfileOrderByWithRelationInput
    moodCheckins?: MoodCheckinOrderByRelationAggregateInput
    journalEntries?: JournalEntryOrderByRelationAggregateInput
    communityPosts?: CommunityPostOrderByRelationAggregateInput
    postLikes?: PostLikeOrderByRelationAggregateInput
    postReplies?: PostReplyOrderByRelationAggregateInput
    postReports?: PostReportOrderByRelationAggregateInput
    studentAppointments?: AppointmentOrderByRelationAggregateInput
    ventMessages?: VentMessageOrderByRelationAggregateInput
    studentChatSessions?: ChatSessionOrderByRelationAggregateInput
    sentMessages?: ChatMessageOrderByRelationAggregateInput
    counselorAppointments?: AppointmentOrderByRelationAggregateInput
    counselorVents?: VentMessageOrderByRelationAggregateInput
    counselorChatSessions?: ChatSessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    alias?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resetOtp?: StringNullableFilter<"User"> | string | null
    resetOtpExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    counselorProfile?: XOR<CounselorProfileNullableScalarRelationFilter, CounselorProfileWhereInput> | null
    moodCheckins?: MoodCheckinListRelationFilter
    journalEntries?: JournalEntryListRelationFilter
    communityPosts?: CommunityPostListRelationFilter
    postLikes?: PostLikeListRelationFilter
    postReplies?: PostReplyListRelationFilter
    postReports?: PostReportListRelationFilter
    studentAppointments?: AppointmentListRelationFilter
    ventMessages?: VentMessageListRelationFilter
    studentChatSessions?: ChatSessionListRelationFilter
    sentMessages?: ChatMessageListRelationFilter
    counselorAppointments?: AppointmentListRelationFilter
    counselorVents?: VentMessageListRelationFilter
    counselorChatSessions?: ChatSessionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    alias?: SortOrderInput | SortOrder
    status?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetOtp?: SortOrderInput | SortOrder
    resetOtpExpiry?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    alias?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    resetOtp?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetOtpExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type CounselorProfileWhereInput = {
    AND?: CounselorProfileWhereInput | CounselorProfileWhereInput[]
    OR?: CounselorProfileWhereInput[]
    NOT?: CounselorProfileWhereInput | CounselorProfileWhereInput[]
    id?: StringFilter<"CounselorProfile"> | string
    userId?: StringFilter<"CounselorProfile"> | string
    employeeId?: StringNullableFilter<"CounselorProfile"> | string | null
    workPhone?: StringNullableFilter<"CounselorProfile"> | string | null
    license?: StringNullableFilter<"CounselorProfile"> | string | null
    specialization?: StringNullableFilter<"CounselorProfile"> | string | null
    officeLocation?: StringNullableFilter<"CounselorProfile"> | string | null
    experience?: StringNullableFilter<"CounselorProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CounselorProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    workPhone?: SortOrderInput | SortOrder
    license?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    officeLocation?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type CounselorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CounselorProfileWhereInput | CounselorProfileWhereInput[]
    OR?: CounselorProfileWhereInput[]
    NOT?: CounselorProfileWhereInput | CounselorProfileWhereInput[]
    employeeId?: StringNullableFilter<"CounselorProfile"> | string | null
    workPhone?: StringNullableFilter<"CounselorProfile"> | string | null
    license?: StringNullableFilter<"CounselorProfile"> | string | null
    specialization?: StringNullableFilter<"CounselorProfile"> | string | null
    officeLocation?: StringNullableFilter<"CounselorProfile"> | string | null
    experience?: StringNullableFilter<"CounselorProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type CounselorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrderInput | SortOrder
    workPhone?: SortOrderInput | SortOrder
    license?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    officeLocation?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    _count?: CounselorProfileCountOrderByAggregateInput
    _max?: CounselorProfileMaxOrderByAggregateInput
    _min?: CounselorProfileMinOrderByAggregateInput
  }

  export type CounselorProfileScalarWhereWithAggregatesInput = {
    AND?: CounselorProfileScalarWhereWithAggregatesInput | CounselorProfileScalarWhereWithAggregatesInput[]
    OR?: CounselorProfileScalarWhereWithAggregatesInput[]
    NOT?: CounselorProfileScalarWhereWithAggregatesInput | CounselorProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CounselorProfile"> | string
    userId?: StringWithAggregatesFilter<"CounselorProfile"> | string
    employeeId?: StringNullableWithAggregatesFilter<"CounselorProfile"> | string | null
    workPhone?: StringNullableWithAggregatesFilter<"CounselorProfile"> | string | null
    license?: StringNullableWithAggregatesFilter<"CounselorProfile"> | string | null
    specialization?: StringNullableWithAggregatesFilter<"CounselorProfile"> | string | null
    officeLocation?: StringNullableWithAggregatesFilter<"CounselorProfile"> | string | null
    experience?: StringNullableWithAggregatesFilter<"CounselorProfile"> | string | null
  }

  export type MoodCheckinWhereInput = {
    AND?: MoodCheckinWhereInput | MoodCheckinWhereInput[]
    OR?: MoodCheckinWhereInput[]
    NOT?: MoodCheckinWhereInput | MoodCheckinWhereInput[]
    id?: StringFilter<"MoodCheckin"> | string
    userId?: StringFilter<"MoodCheckin"> | string
    mood?: EnumMoodFilter<"MoodCheckin"> | $Enums.Mood
    quote?: StringNullableFilter<"MoodCheckin"> | string | null
    tasks?: StringNullableListFilter<"MoodCheckin">
    createdAt?: DateTimeFilter<"MoodCheckin"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MoodCheckinOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    mood?: SortOrder
    quote?: SortOrderInput | SortOrder
    tasks?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MoodCheckinWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MoodCheckinWhereInput | MoodCheckinWhereInput[]
    OR?: MoodCheckinWhereInput[]
    NOT?: MoodCheckinWhereInput | MoodCheckinWhereInput[]
    userId?: StringFilter<"MoodCheckin"> | string
    mood?: EnumMoodFilter<"MoodCheckin"> | $Enums.Mood
    quote?: StringNullableFilter<"MoodCheckin"> | string | null
    tasks?: StringNullableListFilter<"MoodCheckin">
    createdAt?: DateTimeFilter<"MoodCheckin"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MoodCheckinOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    mood?: SortOrder
    quote?: SortOrderInput | SortOrder
    tasks?: SortOrder
    createdAt?: SortOrder
    _count?: MoodCheckinCountOrderByAggregateInput
    _max?: MoodCheckinMaxOrderByAggregateInput
    _min?: MoodCheckinMinOrderByAggregateInput
  }

  export type MoodCheckinScalarWhereWithAggregatesInput = {
    AND?: MoodCheckinScalarWhereWithAggregatesInput | MoodCheckinScalarWhereWithAggregatesInput[]
    OR?: MoodCheckinScalarWhereWithAggregatesInput[]
    NOT?: MoodCheckinScalarWhereWithAggregatesInput | MoodCheckinScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MoodCheckin"> | string
    userId?: StringWithAggregatesFilter<"MoodCheckin"> | string
    mood?: EnumMoodWithAggregatesFilter<"MoodCheckin"> | $Enums.Mood
    quote?: StringNullableWithAggregatesFilter<"MoodCheckin"> | string | null
    tasks?: StringNullableListFilter<"MoodCheckin">
    createdAt?: DateTimeWithAggregatesFilter<"MoodCheckin"> | Date | string
  }

  export type JournalEntryWhereInput = {
    AND?: JournalEntryWhereInput | JournalEntryWhereInput[]
    OR?: JournalEntryWhereInput[]
    NOT?: JournalEntryWhereInput | JournalEntryWhereInput[]
    id?: StringFilter<"JournalEntry"> | string
    userId?: StringFilter<"JournalEntry"> | string
    title?: StringFilter<"JournalEntry"> | string
    content?: StringFilter<"JournalEntry"> | string
    mood?: EnumMoodFilter<"JournalEntry"> | $Enums.Mood
    createdAt?: DateTimeFilter<"JournalEntry"> | Date | string
    updatedAt?: DateTimeFilter<"JournalEntry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type JournalEntryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    mood?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type JournalEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JournalEntryWhereInput | JournalEntryWhereInput[]
    OR?: JournalEntryWhereInput[]
    NOT?: JournalEntryWhereInput | JournalEntryWhereInput[]
    userId?: StringFilter<"JournalEntry"> | string
    title?: StringFilter<"JournalEntry"> | string
    content?: StringFilter<"JournalEntry"> | string
    mood?: EnumMoodFilter<"JournalEntry"> | $Enums.Mood
    createdAt?: DateTimeFilter<"JournalEntry"> | Date | string
    updatedAt?: DateTimeFilter<"JournalEntry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type JournalEntryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    mood?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JournalEntryCountOrderByAggregateInput
    _max?: JournalEntryMaxOrderByAggregateInput
    _min?: JournalEntryMinOrderByAggregateInput
  }

  export type JournalEntryScalarWhereWithAggregatesInput = {
    AND?: JournalEntryScalarWhereWithAggregatesInput | JournalEntryScalarWhereWithAggregatesInput[]
    OR?: JournalEntryScalarWhereWithAggregatesInput[]
    NOT?: JournalEntryScalarWhereWithAggregatesInput | JournalEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JournalEntry"> | string
    userId?: StringWithAggregatesFilter<"JournalEntry"> | string
    title?: StringWithAggregatesFilter<"JournalEntry"> | string
    content?: StringWithAggregatesFilter<"JournalEntry"> | string
    mood?: EnumMoodWithAggregatesFilter<"JournalEntry"> | $Enums.Mood
    createdAt?: DateTimeWithAggregatesFilter<"JournalEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JournalEntry"> | Date | string
  }

  export type CommunityPostWhereInput = {
    AND?: CommunityPostWhereInput | CommunityPostWhereInput[]
    OR?: CommunityPostWhereInput[]
    NOT?: CommunityPostWhereInput | CommunityPostWhereInput[]
    id?: StringFilter<"CommunityPost"> | string
    authorId?: StringFilter<"CommunityPost"> | string
    title?: StringFilter<"CommunityPost"> | string
    content?: StringFilter<"CommunityPost"> | string
    tags?: StringNullableListFilter<"CommunityPost">
    isReported?: BoolFilter<"CommunityPost"> | boolean
    createdAt?: DateTimeFilter<"CommunityPost"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    likes?: PostLikeListRelationFilter
    replies?: PostReplyListRelationFilter
    reports?: PostReportListRelationFilter
  }

  export type CommunityPostOrderByWithRelationInput = {
    id?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    isReported?: SortOrder
    createdAt?: SortOrder
    author?: UserOrderByWithRelationInput
    likes?: PostLikeOrderByRelationAggregateInput
    replies?: PostReplyOrderByRelationAggregateInput
    reports?: PostReportOrderByRelationAggregateInput
  }

  export type CommunityPostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommunityPostWhereInput | CommunityPostWhereInput[]
    OR?: CommunityPostWhereInput[]
    NOT?: CommunityPostWhereInput | CommunityPostWhereInput[]
    authorId?: StringFilter<"CommunityPost"> | string
    title?: StringFilter<"CommunityPost"> | string
    content?: StringFilter<"CommunityPost"> | string
    tags?: StringNullableListFilter<"CommunityPost">
    isReported?: BoolFilter<"CommunityPost"> | boolean
    createdAt?: DateTimeFilter<"CommunityPost"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    likes?: PostLikeListRelationFilter
    replies?: PostReplyListRelationFilter
    reports?: PostReportListRelationFilter
  }, "id">

  export type CommunityPostOrderByWithAggregationInput = {
    id?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    isReported?: SortOrder
    createdAt?: SortOrder
    _count?: CommunityPostCountOrderByAggregateInput
    _max?: CommunityPostMaxOrderByAggregateInput
    _min?: CommunityPostMinOrderByAggregateInput
  }

  export type CommunityPostScalarWhereWithAggregatesInput = {
    AND?: CommunityPostScalarWhereWithAggregatesInput | CommunityPostScalarWhereWithAggregatesInput[]
    OR?: CommunityPostScalarWhereWithAggregatesInput[]
    NOT?: CommunityPostScalarWhereWithAggregatesInput | CommunityPostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CommunityPost"> | string
    authorId?: StringWithAggregatesFilter<"CommunityPost"> | string
    title?: StringWithAggregatesFilter<"CommunityPost"> | string
    content?: StringWithAggregatesFilter<"CommunityPost"> | string
    tags?: StringNullableListFilter<"CommunityPost">
    isReported?: BoolWithAggregatesFilter<"CommunityPost"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CommunityPost"> | Date | string
  }

  export type PostLikeWhereInput = {
    AND?: PostLikeWhereInput | PostLikeWhereInput[]
    OR?: PostLikeWhereInput[]
    NOT?: PostLikeWhereInput | PostLikeWhereInput[]
    id?: StringFilter<"PostLike"> | string
    postId?: StringFilter<"PostLike"> | string
    userId?: StringFilter<"PostLike"> | string
    createdAt?: DateTimeFilter<"PostLike"> | Date | string
    post?: XOR<CommunityPostScalarRelationFilter, CommunityPostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostLikeOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    post?: CommunityPostOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PostLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    postId_userId?: PostLikePostIdUserIdCompoundUniqueInput
    AND?: PostLikeWhereInput | PostLikeWhereInput[]
    OR?: PostLikeWhereInput[]
    NOT?: PostLikeWhereInput | PostLikeWhereInput[]
    postId?: StringFilter<"PostLike"> | string
    userId?: StringFilter<"PostLike"> | string
    createdAt?: DateTimeFilter<"PostLike"> | Date | string
    post?: XOR<CommunityPostScalarRelationFilter, CommunityPostWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "postId_userId">

  export type PostLikeOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: PostLikeCountOrderByAggregateInput
    _max?: PostLikeMaxOrderByAggregateInput
    _min?: PostLikeMinOrderByAggregateInput
  }

  export type PostLikeScalarWhereWithAggregatesInput = {
    AND?: PostLikeScalarWhereWithAggregatesInput | PostLikeScalarWhereWithAggregatesInput[]
    OR?: PostLikeScalarWhereWithAggregatesInput[]
    NOT?: PostLikeScalarWhereWithAggregatesInput | PostLikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostLike"> | string
    postId?: StringWithAggregatesFilter<"PostLike"> | string
    userId?: StringWithAggregatesFilter<"PostLike"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PostLike"> | Date | string
  }

  export type PostReplyWhereInput = {
    AND?: PostReplyWhereInput | PostReplyWhereInput[]
    OR?: PostReplyWhereInput[]
    NOT?: PostReplyWhereInput | PostReplyWhereInput[]
    id?: StringFilter<"PostReply"> | string
    postId?: StringFilter<"PostReply"> | string
    authorId?: StringFilter<"PostReply"> | string
    content?: StringFilter<"PostReply"> | string
    createdAt?: DateTimeFilter<"PostReply"> | Date | string
    post?: XOR<CommunityPostScalarRelationFilter, CommunityPostWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostReplyOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    post?: CommunityPostOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
  }

  export type PostReplyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostReplyWhereInput | PostReplyWhereInput[]
    OR?: PostReplyWhereInput[]
    NOT?: PostReplyWhereInput | PostReplyWhereInput[]
    postId?: StringFilter<"PostReply"> | string
    authorId?: StringFilter<"PostReply"> | string
    content?: StringFilter<"PostReply"> | string
    createdAt?: DateTimeFilter<"PostReply"> | Date | string
    post?: XOR<CommunityPostScalarRelationFilter, CommunityPostWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostReplyOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: PostReplyCountOrderByAggregateInput
    _max?: PostReplyMaxOrderByAggregateInput
    _min?: PostReplyMinOrderByAggregateInput
  }

  export type PostReplyScalarWhereWithAggregatesInput = {
    AND?: PostReplyScalarWhereWithAggregatesInput | PostReplyScalarWhereWithAggregatesInput[]
    OR?: PostReplyScalarWhereWithAggregatesInput[]
    NOT?: PostReplyScalarWhereWithAggregatesInput | PostReplyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostReply"> | string
    postId?: StringWithAggregatesFilter<"PostReply"> | string
    authorId?: StringWithAggregatesFilter<"PostReply"> | string
    content?: StringWithAggregatesFilter<"PostReply"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PostReply"> | Date | string
  }

  export type PostReportWhereInput = {
    AND?: PostReportWhereInput | PostReportWhereInput[]
    OR?: PostReportWhereInput[]
    NOT?: PostReportWhereInput | PostReportWhereInput[]
    id?: StringFilter<"PostReport"> | string
    postId?: StringFilter<"PostReport"> | string
    reporterId?: StringFilter<"PostReport"> | string
    reason?: StringFilter<"PostReport"> | string
    status?: EnumReportStatusFilter<"PostReport"> | $Enums.ReportStatus
    createdAt?: DateTimeFilter<"PostReport"> | Date | string
    post?: XOR<CommunityPostScalarRelationFilter, CommunityPostWhereInput>
    reporter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostReportOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    reporterId?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    post?: CommunityPostOrderByWithRelationInput
    reporter?: UserOrderByWithRelationInput
  }

  export type PostReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostReportWhereInput | PostReportWhereInput[]
    OR?: PostReportWhereInput[]
    NOT?: PostReportWhereInput | PostReportWhereInput[]
    postId?: StringFilter<"PostReport"> | string
    reporterId?: StringFilter<"PostReport"> | string
    reason?: StringFilter<"PostReport"> | string
    status?: EnumReportStatusFilter<"PostReport"> | $Enums.ReportStatus
    createdAt?: DateTimeFilter<"PostReport"> | Date | string
    post?: XOR<CommunityPostScalarRelationFilter, CommunityPostWhereInput>
    reporter?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostReportOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    reporterId?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PostReportCountOrderByAggregateInput
    _max?: PostReportMaxOrderByAggregateInput
    _min?: PostReportMinOrderByAggregateInput
  }

  export type PostReportScalarWhereWithAggregatesInput = {
    AND?: PostReportScalarWhereWithAggregatesInput | PostReportScalarWhereWithAggregatesInput[]
    OR?: PostReportScalarWhereWithAggregatesInput[]
    NOT?: PostReportScalarWhereWithAggregatesInput | PostReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostReport"> | string
    postId?: StringWithAggregatesFilter<"PostReport"> | string
    reporterId?: StringWithAggregatesFilter<"PostReport"> | string
    reason?: StringWithAggregatesFilter<"PostReport"> | string
    status?: EnumReportStatusWithAggregatesFilter<"PostReport"> | $Enums.ReportStatus
    createdAt?: DateTimeWithAggregatesFilter<"PostReport"> | Date | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    studentId?: StringFilter<"Appointment"> | string
    counselorId?: StringFilter<"Appointment"> | string
    alias?: StringFilter<"Appointment"> | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    timeSlot?: StringFilter<"Appointment"> | string
    mode?: EnumAppointmentModeFilter<"Appointment"> | $Enums.AppointmentMode
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    notes?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    counselor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    counselorId?: SortOrder
    alias?: SortOrder
    date?: SortOrder
    timeSlot?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    student?: UserOrderByWithRelationInput
    counselor?: UserOrderByWithRelationInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    studentId?: StringFilter<"Appointment"> | string
    counselorId?: StringFilter<"Appointment"> | string
    alias?: StringFilter<"Appointment"> | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    timeSlot?: StringFilter<"Appointment"> | string
    mode?: EnumAppointmentModeFilter<"Appointment"> | $Enums.AppointmentMode
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    notes?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    counselor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    counselorId?: SortOrder
    alias?: SortOrder
    date?: SortOrder
    timeSlot?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    studentId?: StringWithAggregatesFilter<"Appointment"> | string
    counselorId?: StringWithAggregatesFilter<"Appointment"> | string
    alias?: StringWithAggregatesFilter<"Appointment"> | string
    date?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    timeSlot?: StringWithAggregatesFilter<"Appointment"> | string
    mode?: EnumAppointmentModeWithAggregatesFilter<"Appointment"> | $Enums.AppointmentMode
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    notes?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type VentMessageWhereInput = {
    AND?: VentMessageWhereInput | VentMessageWhereInput[]
    OR?: VentMessageWhereInput[]
    NOT?: VentMessageWhereInput | VentMessageWhereInput[]
    id?: StringFilter<"VentMessage"> | string
    studentId?: StringFilter<"VentMessage"> | string
    counselorId?: StringNullableFilter<"VentMessage"> | string | null
    content?: StringFilter<"VentMessage"> | string
    reactions?: StringNullableListFilter<"VentMessage">
    status?: EnumVentStatusFilter<"VentMessage"> | $Enums.VentStatus
    createdAt?: DateTimeFilter<"VentMessage"> | Date | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    counselor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type VentMessageOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    counselorId?: SortOrderInput | SortOrder
    content?: SortOrder
    reactions?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    student?: UserOrderByWithRelationInput
    counselor?: UserOrderByWithRelationInput
  }

  export type VentMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VentMessageWhereInput | VentMessageWhereInput[]
    OR?: VentMessageWhereInput[]
    NOT?: VentMessageWhereInput | VentMessageWhereInput[]
    studentId?: StringFilter<"VentMessage"> | string
    counselorId?: StringNullableFilter<"VentMessage"> | string | null
    content?: StringFilter<"VentMessage"> | string
    reactions?: StringNullableListFilter<"VentMessage">
    status?: EnumVentStatusFilter<"VentMessage"> | $Enums.VentStatus
    createdAt?: DateTimeFilter<"VentMessage"> | Date | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    counselor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type VentMessageOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    counselorId?: SortOrderInput | SortOrder
    content?: SortOrder
    reactions?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: VentMessageCountOrderByAggregateInput
    _max?: VentMessageMaxOrderByAggregateInput
    _min?: VentMessageMinOrderByAggregateInput
  }

  export type VentMessageScalarWhereWithAggregatesInput = {
    AND?: VentMessageScalarWhereWithAggregatesInput | VentMessageScalarWhereWithAggregatesInput[]
    OR?: VentMessageScalarWhereWithAggregatesInput[]
    NOT?: VentMessageScalarWhereWithAggregatesInput | VentMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VentMessage"> | string
    studentId?: StringWithAggregatesFilter<"VentMessage"> | string
    counselorId?: StringNullableWithAggregatesFilter<"VentMessage"> | string | null
    content?: StringWithAggregatesFilter<"VentMessage"> | string
    reactions?: StringNullableListFilter<"VentMessage">
    status?: EnumVentStatusWithAggregatesFilter<"VentMessage"> | $Enums.VentStatus
    createdAt?: DateTimeWithAggregatesFilter<"VentMessage"> | Date | string
  }

  export type ChatSessionWhereInput = {
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    id?: StringFilter<"ChatSession"> | string
    studentId?: StringFilter<"ChatSession"> | string
    counselorId?: StringFilter<"ChatSession"> | string
    mode?: EnumAppointmentModeFilter<"ChatSession"> | $Enums.AppointmentMode
    status?: EnumChatSessionStatusFilter<"ChatSession"> | $Enums.ChatSessionStatus
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    counselor?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: ChatMessageListRelationFilter
  }

  export type ChatSessionOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    counselorId?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    student?: UserOrderByWithRelationInput
    counselor?: UserOrderByWithRelationInput
    messages?: ChatMessageOrderByRelationAggregateInput
  }

  export type ChatSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatSessionWhereInput | ChatSessionWhereInput[]
    OR?: ChatSessionWhereInput[]
    NOT?: ChatSessionWhereInput | ChatSessionWhereInput[]
    studentId?: StringFilter<"ChatSession"> | string
    counselorId?: StringFilter<"ChatSession"> | string
    mode?: EnumAppointmentModeFilter<"ChatSession"> | $Enums.AppointmentMode
    status?: EnumChatSessionStatusFilter<"ChatSession"> | $Enums.ChatSessionStatus
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
    counselor?: XOR<UserScalarRelationFilter, UserWhereInput>
    messages?: ChatMessageListRelationFilter
  }, "id">

  export type ChatSessionOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    counselorId?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ChatSessionCountOrderByAggregateInput
    _max?: ChatSessionMaxOrderByAggregateInput
    _min?: ChatSessionMinOrderByAggregateInput
  }

  export type ChatSessionScalarWhereWithAggregatesInput = {
    AND?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    OR?: ChatSessionScalarWhereWithAggregatesInput[]
    NOT?: ChatSessionScalarWhereWithAggregatesInput | ChatSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatSession"> | string
    studentId?: StringWithAggregatesFilter<"ChatSession"> | string
    counselorId?: StringWithAggregatesFilter<"ChatSession"> | string
    mode?: EnumAppointmentModeWithAggregatesFilter<"ChatSession"> | $Enums.AppointmentMode
    status?: EnumChatSessionStatusWithAggregatesFilter<"ChatSession"> | $Enums.ChatSessionStatus
    createdAt?: DateTimeWithAggregatesFilter<"ChatSession"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    sessionId?: StringFilter<"ChatMessage"> | string
    senderId?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    session?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    session?: ChatSessionOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    sessionId?: StringFilter<"ChatMessage"> | string
    senderId?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
    session?: XOR<ChatSessionScalarRelationFilter, ChatSessionWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    sessionId?: StringWithAggregatesFilter<"ChatMessage"> | string
    senderId?: StringWithAggregatesFilter<"ChatMessage"> | string
    content?: StringWithAggregatesFilter<"ChatMessage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    postReplies?: PostReplyCreateNestedManyWithoutAuthorInput
    postReports?: PostReportCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionCreateNestedManyWithoutCounselorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileUncheckedCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    postReplies?: PostReplyUncheckedCreateNestedManyWithoutAuthorInput
    postReports?: PostReportUncheckedCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentUncheckedCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageUncheckedCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentUncheckedCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageUncheckedCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutCounselorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUpdateManyWithoutCounselorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUncheckedUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUncheckedUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUncheckedUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUncheckedUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUncheckedUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUncheckedUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUncheckedUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUncheckedUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUncheckedUpdateManyWithoutCounselorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CounselorProfileCreateInput = {
    id?: string
    employeeId?: string | null
    workPhone?: string | null
    license?: string | null
    specialization?: string | null
    officeLocation?: string | null
    experience?: string | null
    user: UserCreateNestedOneWithoutCounselorProfileInput
  }

  export type CounselorProfileUncheckedCreateInput = {
    id?: string
    userId: string
    employeeId?: string | null
    workPhone?: string | null
    license?: string | null
    specialization?: string | null
    officeLocation?: string | null
    experience?: string | null
  }

  export type CounselorProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    workPhone?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    officeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCounselorProfileNestedInput
  }

  export type CounselorProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    workPhone?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    officeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CounselorProfileCreateManyInput = {
    id?: string
    userId: string
    employeeId?: string | null
    workPhone?: string | null
    license?: string | null
    specialization?: string | null
    officeLocation?: string | null
    experience?: string | null
  }

  export type CounselorProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    workPhone?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    officeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CounselorProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    workPhone?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    officeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MoodCheckinCreateInput = {
    id?: string
    mood: $Enums.Mood
    quote?: string | null
    tasks?: MoodCheckinCreatetasksInput | string[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutMoodCheckinsInput
  }

  export type MoodCheckinUncheckedCreateInput = {
    id?: string
    userId: string
    mood: $Enums.Mood
    quote?: string | null
    tasks?: MoodCheckinCreatetasksInput | string[]
    createdAt?: Date | string
  }

  export type MoodCheckinUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    quote?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: MoodCheckinUpdatetasksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMoodCheckinsNestedInput
  }

  export type MoodCheckinUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    quote?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: MoodCheckinUpdatetasksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodCheckinCreateManyInput = {
    id?: string
    userId: string
    mood: $Enums.Mood
    quote?: string | null
    tasks?: MoodCheckinCreatetasksInput | string[]
    createdAt?: Date | string
  }

  export type MoodCheckinUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    quote?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: MoodCheckinUpdatetasksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodCheckinUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    quote?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: MoodCheckinUpdatetasksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryCreateInput = {
    id?: string
    title: string
    content: string
    mood?: $Enums.Mood
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutJournalEntriesInput
  }

  export type JournalEntryUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    content: string
    mood?: $Enums.Mood
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJournalEntriesNestedInput
  }

  export type JournalEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryCreateManyInput = {
    id?: string
    userId: string
    title: string
    content: string
    mood?: $Enums.Mood
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostCreateInput = {
    id?: string
    title: string
    content: string
    tags?: CommunityPostCreatetagsInput | string[]
    isReported?: boolean
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutCommunityPostsInput
    likes?: PostLikeCreateNestedManyWithoutPostInput
    replies?: PostReplyCreateNestedManyWithoutPostInput
    reports?: PostReportCreateNestedManyWithoutPostInput
  }

  export type CommunityPostUncheckedCreateInput = {
    id?: string
    authorId: string
    title: string
    content: string
    tags?: CommunityPostCreatetagsInput | string[]
    isReported?: boolean
    createdAt?: Date | string
    likes?: PostLikeUncheckedCreateNestedManyWithoutPostInput
    replies?: PostReplyUncheckedCreateNestedManyWithoutPostInput
    reports?: PostReportUncheckedCreateNestedManyWithoutPostInput
  }

  export type CommunityPostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: CommunityPostUpdatetagsInput | string[]
    isReported?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommunityPostsNestedInput
    likes?: PostLikeUpdateManyWithoutPostNestedInput
    replies?: PostReplyUpdateManyWithoutPostNestedInput
    reports?: PostReportUpdateManyWithoutPostNestedInput
  }

  export type CommunityPostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: CommunityPostUpdatetagsInput | string[]
    isReported?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: PostLikeUncheckedUpdateManyWithoutPostNestedInput
    replies?: PostReplyUncheckedUpdateManyWithoutPostNestedInput
    reports?: PostReportUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CommunityPostCreateManyInput = {
    id?: string
    authorId: string
    title: string
    content: string
    tags?: CommunityPostCreatetagsInput | string[]
    isReported?: boolean
    createdAt?: Date | string
  }

  export type CommunityPostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: CommunityPostUpdatetagsInput | string[]
    isReported?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: CommunityPostUpdatetagsInput | string[]
    isReported?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikeCreateInput = {
    id?: string
    createdAt?: Date | string
    post: CommunityPostCreateNestedOneWithoutLikesInput
    user: UserCreateNestedOneWithoutPostLikesInput
  }

  export type PostLikeUncheckedCreateInput = {
    id?: string
    postId: string
    userId: string
    createdAt?: Date | string
  }

  export type PostLikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: CommunityPostUpdateOneRequiredWithoutLikesNestedInput
    user?: UserUpdateOneRequiredWithoutPostLikesNestedInput
  }

  export type PostLikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikeCreateManyInput = {
    id?: string
    postId: string
    userId: string
    createdAt?: Date | string
  }

  export type PostLikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReplyCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    post: CommunityPostCreateNestedOneWithoutRepliesInput
    author: UserCreateNestedOneWithoutPostRepliesInput
  }

  export type PostReplyUncheckedCreateInput = {
    id?: string
    postId: string
    authorId: string
    content: string
    createdAt?: Date | string
  }

  export type PostReplyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: CommunityPostUpdateOneRequiredWithoutRepliesNestedInput
    author?: UserUpdateOneRequiredWithoutPostRepliesNestedInput
  }

  export type PostReplyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReplyCreateManyInput = {
    id?: string
    postId: string
    authorId: string
    content: string
    createdAt?: Date | string
  }

  export type PostReplyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReplyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReportCreateInput = {
    id?: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    post: CommunityPostCreateNestedOneWithoutReportsInput
    reporter: UserCreateNestedOneWithoutPostReportsInput
  }

  export type PostReportUncheckedCreateInput = {
    id?: string
    postId: string
    reporterId: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
  }

  export type PostReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: CommunityPostUpdateOneRequiredWithoutReportsNestedInput
    reporter?: UserUpdateOneRequiredWithoutPostReportsNestedInput
  }

  export type PostReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReportCreateManyInput = {
    id?: string
    postId: string
    reporterId: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
  }

  export type PostReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateInput = {
    id?: string
    alias: string
    date: Date | string
    timeSlot: string
    mode: $Enums.AppointmentMode
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    student: UserCreateNestedOneWithoutStudentAppointmentsInput
    counselor: UserCreateNestedOneWithoutCounselorAppointmentsInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    studentId: string
    counselorId: string
    alias: string
    date: Date | string
    timeSlot: string
    mode: $Enums.AppointmentMode
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutStudentAppointmentsNestedInput
    counselor?: UserUpdateOneRequiredWithoutCounselorAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    counselorId?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateManyInput = {
    id?: string
    studentId: string
    counselorId: string
    alias: string
    date: Date | string
    timeSlot: string
    mode: $Enums.AppointmentMode
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    counselorId?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentMessageCreateInput = {
    id?: string
    content: string
    reactions?: VentMessageCreatereactionsInput | string[]
    status?: $Enums.VentStatus
    createdAt?: Date | string
    student: UserCreateNestedOneWithoutVentMessagesInput
    counselor?: UserCreateNestedOneWithoutCounselorVentsInput
  }

  export type VentMessageUncheckedCreateInput = {
    id?: string
    studentId: string
    counselorId?: string | null
    content: string
    reactions?: VentMessageCreatereactionsInput | string[]
    status?: $Enums.VentStatus
    createdAt?: Date | string
  }

  export type VentMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reactions?: VentMessageUpdatereactionsInput | string[]
    status?: EnumVentStatusFieldUpdateOperationsInput | $Enums.VentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutVentMessagesNestedInput
    counselor?: UserUpdateOneWithoutCounselorVentsNestedInput
  }

  export type VentMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    counselorId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    reactions?: VentMessageUpdatereactionsInput | string[]
    status?: EnumVentStatusFieldUpdateOperationsInput | $Enums.VentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentMessageCreateManyInput = {
    id?: string
    studentId: string
    counselorId?: string | null
    content: string
    reactions?: VentMessageCreatereactionsInput | string[]
    status?: $Enums.VentStatus
    createdAt?: Date | string
  }

  export type VentMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reactions?: VentMessageUpdatereactionsInput | string[]
    status?: EnumVentStatusFieldUpdateOperationsInput | $Enums.VentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    counselorId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    reactions?: VentMessageUpdatereactionsInput | string[]
    status?: EnumVentStatusFieldUpdateOperationsInput | $Enums.VentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionCreateInput = {
    id?: string
    mode?: $Enums.AppointmentMode
    status?: $Enums.ChatSessionStatus
    createdAt?: Date | string
    student: UserCreateNestedOneWithoutStudentChatSessionsInput
    counselor: UserCreateNestedOneWithoutCounselorChatSessionsInput
    messages?: ChatMessageCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUncheckedCreateInput = {
    id?: string
    studentId: string
    counselorId: string
    mode?: $Enums.AppointmentMode
    status?: $Enums.ChatSessionStatus
    createdAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumChatSessionStatusFieldUpdateOperationsInput | $Enums.ChatSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutStudentChatSessionsNestedInput
    counselor?: UserUpdateOneRequiredWithoutCounselorChatSessionsNestedInput
    messages?: ChatMessageUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    counselorId?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumChatSessionStatusFieldUpdateOperationsInput | $Enums.ChatSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionCreateManyInput = {
    id?: string
    studentId: string
    counselorId: string
    mode?: $Enums.AppointmentMode
    status?: $Enums.ChatSessionStatus
    createdAt?: Date | string
  }

  export type ChatSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumChatSessionStatusFieldUpdateOperationsInput | $Enums.ChatSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    counselorId?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumChatSessionStatusFieldUpdateOperationsInput | $Enums.ChatSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    session: ChatSessionCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    sessionId: string
    senderId: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: ChatSessionUpdateOneRequiredWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    sessionId: string
    senderId: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
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

  export type CounselorProfileNullableScalarRelationFilter = {
    is?: CounselorProfileWhereInput | null
    isNot?: CounselorProfileWhereInput | null
  }

  export type MoodCheckinListRelationFilter = {
    every?: MoodCheckinWhereInput
    some?: MoodCheckinWhereInput
    none?: MoodCheckinWhereInput
  }

  export type JournalEntryListRelationFilter = {
    every?: JournalEntryWhereInput
    some?: JournalEntryWhereInput
    none?: JournalEntryWhereInput
  }

  export type CommunityPostListRelationFilter = {
    every?: CommunityPostWhereInput
    some?: CommunityPostWhereInput
    none?: CommunityPostWhereInput
  }

  export type PostLikeListRelationFilter = {
    every?: PostLikeWhereInput
    some?: PostLikeWhereInput
    none?: PostLikeWhereInput
  }

  export type PostReplyListRelationFilter = {
    every?: PostReplyWhereInput
    some?: PostReplyWhereInput
    none?: PostReplyWhereInput
  }

  export type PostReportListRelationFilter = {
    every?: PostReportWhereInput
    some?: PostReportWhereInput
    none?: PostReportWhereInput
  }

  export type AppointmentListRelationFilter = {
    every?: AppointmentWhereInput
    some?: AppointmentWhereInput
    none?: AppointmentWhereInput
  }

  export type VentMessageListRelationFilter = {
    every?: VentMessageWhereInput
    some?: VentMessageWhereInput
    none?: VentMessageWhereInput
  }

  export type ChatSessionListRelationFilter = {
    every?: ChatSessionWhereInput
    some?: ChatSessionWhereInput
    none?: ChatSessionWhereInput
  }

  export type ChatMessageListRelationFilter = {
    every?: ChatMessageWhereInput
    some?: ChatMessageWhereInput
    none?: ChatMessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MoodCheckinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JournalEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommunityPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VentMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    alias?: SortOrder
    status?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetOtp?: SortOrder
    resetOtpExpiry?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    alias?: SortOrder
    status?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetOtp?: SortOrder
    resetOtpExpiry?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    alias?: SortOrder
    status?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetOtp?: SortOrder
    resetOtpExpiry?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CounselorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    workPhone?: SortOrder
    license?: SortOrder
    specialization?: SortOrder
    officeLocation?: SortOrder
    experience?: SortOrder
  }

  export type CounselorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    workPhone?: SortOrder
    license?: SortOrder
    specialization?: SortOrder
    officeLocation?: SortOrder
    experience?: SortOrder
  }

  export type CounselorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    employeeId?: SortOrder
    workPhone?: SortOrder
    license?: SortOrder
    specialization?: SortOrder
    officeLocation?: SortOrder
    experience?: SortOrder
  }

  export type EnumMoodFilter<$PrismaModel = never> = {
    equals?: $Enums.Mood | EnumMoodFieldRefInput<$PrismaModel>
    in?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    not?: NestedEnumMoodFilter<$PrismaModel> | $Enums.Mood
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MoodCheckinCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mood?: SortOrder
    quote?: SortOrder
    tasks?: SortOrder
    createdAt?: SortOrder
  }

  export type MoodCheckinMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mood?: SortOrder
    quote?: SortOrder
    createdAt?: SortOrder
  }

  export type MoodCheckinMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mood?: SortOrder
    quote?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMoodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Mood | EnumMoodFieldRefInput<$PrismaModel>
    in?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    not?: NestedEnumMoodWithAggregatesFilter<$PrismaModel> | $Enums.Mood
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMoodFilter<$PrismaModel>
    _max?: NestedEnumMoodFilter<$PrismaModel>
  }

  export type JournalEntryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    mood?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    mood?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JournalEntryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    mood?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CommunityPostCountOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    tags?: SortOrder
    isReported?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityPostMaxOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isReported?: SortOrder
    createdAt?: SortOrder
  }

  export type CommunityPostMinOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isReported?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CommunityPostScalarRelationFilter = {
    is?: CommunityPostWhereInput
    isNot?: CommunityPostWhereInput
  }

  export type PostLikePostIdUserIdCompoundUniqueInput = {
    postId: string
    userId: string
  }

  export type PostLikeCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostLikeMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PostReplyCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type PostReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type PostReplyMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type PostReportCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    reporterId?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PostReportMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    reporterId?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PostReportMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    reporterId?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }

  export type EnumAppointmentModeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentMode | EnumAppointmentModeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentMode[] | ListEnumAppointmentModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentMode[] | ListEnumAppointmentModeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentModeFilter<$PrismaModel> | $Enums.AppointmentMode
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    counselorId?: SortOrder
    alias?: SortOrder
    date?: SortOrder
    timeSlot?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    counselorId?: SortOrder
    alias?: SortOrder
    date?: SortOrder
    timeSlot?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    counselorId?: SortOrder
    alias?: SortOrder
    date?: SortOrder
    timeSlot?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAppointmentModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentMode | EnumAppointmentModeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentMode[] | ListEnumAppointmentModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentMode[] | ListEnumAppointmentModeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentModeWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentModeFilter<$PrismaModel>
    _max?: NestedEnumAppointmentModeFilter<$PrismaModel>
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type EnumVentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VentStatus | EnumVentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VentStatus[] | ListEnumVentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VentStatus[] | ListEnumVentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVentStatusFilter<$PrismaModel> | $Enums.VentStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type VentMessageCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    counselorId?: SortOrder
    content?: SortOrder
    reactions?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type VentMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    counselorId?: SortOrder
    content?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type VentMessageMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    counselorId?: SortOrder
    content?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumVentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VentStatus | EnumVentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VentStatus[] | ListEnumVentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VentStatus[] | ListEnumVentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVentStatusWithAggregatesFilter<$PrismaModel> | $Enums.VentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVentStatusFilter<$PrismaModel>
    _max?: NestedEnumVentStatusFilter<$PrismaModel>
  }

  export type EnumChatSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatSessionStatus | EnumChatSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChatSessionStatus[] | ListEnumChatSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatSessionStatus[] | ListEnumChatSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChatSessionStatusFilter<$PrismaModel> | $Enums.ChatSessionStatus
  }

  export type ChatSessionCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    counselorId?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    counselorId?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatSessionMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    counselorId?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumChatSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatSessionStatus | EnumChatSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChatSessionStatus[] | ListEnumChatSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatSessionStatus[] | ListEnumChatSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChatSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChatSessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumChatSessionStatusFilter<$PrismaModel>
  }

  export type ChatSessionScalarRelationFilter = {
    is?: ChatSessionWhereInput
    isNot?: ChatSessionWhereInput
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    senderId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type CounselorProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<CounselorProfileCreateWithoutUserInput, CounselorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CounselorProfileCreateOrConnectWithoutUserInput
    connect?: CounselorProfileWhereUniqueInput
  }

  export type MoodCheckinCreateNestedManyWithoutUserInput = {
    create?: XOR<MoodCheckinCreateWithoutUserInput, MoodCheckinUncheckedCreateWithoutUserInput> | MoodCheckinCreateWithoutUserInput[] | MoodCheckinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodCheckinCreateOrConnectWithoutUserInput | MoodCheckinCreateOrConnectWithoutUserInput[]
    createMany?: MoodCheckinCreateManyUserInputEnvelope
    connect?: MoodCheckinWhereUniqueInput | MoodCheckinWhereUniqueInput[]
  }

  export type JournalEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput> | JournalEntryCreateWithoutUserInput[] | JournalEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JournalEntryCreateOrConnectWithoutUserInput | JournalEntryCreateOrConnectWithoutUserInput[]
    createMany?: JournalEntryCreateManyUserInputEnvelope
    connect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
  }

  export type CommunityPostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommunityPostCreateWithoutAuthorInput, CommunityPostUncheckedCreateWithoutAuthorInput> | CommunityPostCreateWithoutAuthorInput[] | CommunityPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutAuthorInput | CommunityPostCreateOrConnectWithoutAuthorInput[]
    createMany?: CommunityPostCreateManyAuthorInputEnvelope
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
  }

  export type PostLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput> | PostLikeCreateWithoutUserInput[] | PostLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput | PostLikeCreateOrConnectWithoutUserInput[]
    createMany?: PostLikeCreateManyUserInputEnvelope
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
  }

  export type PostReplyCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostReplyCreateWithoutAuthorInput, PostReplyUncheckedCreateWithoutAuthorInput> | PostReplyCreateWithoutAuthorInput[] | PostReplyUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostReplyCreateOrConnectWithoutAuthorInput | PostReplyCreateOrConnectWithoutAuthorInput[]
    createMany?: PostReplyCreateManyAuthorInputEnvelope
    connect?: PostReplyWhereUniqueInput | PostReplyWhereUniqueInput[]
  }

  export type PostReportCreateNestedManyWithoutReporterInput = {
    create?: XOR<PostReportCreateWithoutReporterInput, PostReportUncheckedCreateWithoutReporterInput> | PostReportCreateWithoutReporterInput[] | PostReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: PostReportCreateOrConnectWithoutReporterInput | PostReportCreateOrConnectWithoutReporterInput[]
    createMany?: PostReportCreateManyReporterInputEnvelope
    connect?: PostReportWhereUniqueInput | PostReportWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutStudentInput = {
    create?: XOR<AppointmentCreateWithoutStudentInput, AppointmentUncheckedCreateWithoutStudentInput> | AppointmentCreateWithoutStudentInput[] | AppointmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutStudentInput | AppointmentCreateOrConnectWithoutStudentInput[]
    createMany?: AppointmentCreateManyStudentInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type VentMessageCreateNestedManyWithoutStudentInput = {
    create?: XOR<VentMessageCreateWithoutStudentInput, VentMessageUncheckedCreateWithoutStudentInput> | VentMessageCreateWithoutStudentInput[] | VentMessageUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: VentMessageCreateOrConnectWithoutStudentInput | VentMessageCreateOrConnectWithoutStudentInput[]
    createMany?: VentMessageCreateManyStudentInputEnvelope
    connect?: VentMessageWhereUniqueInput | VentMessageWhereUniqueInput[]
  }

  export type ChatSessionCreateNestedManyWithoutStudentInput = {
    create?: XOR<ChatSessionCreateWithoutStudentInput, ChatSessionUncheckedCreateWithoutStudentInput> | ChatSessionCreateWithoutStudentInput[] | ChatSessionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutStudentInput | ChatSessionCreateOrConnectWithoutStudentInput[]
    createMany?: ChatSessionCreateManyStudentInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type ChatMessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type AppointmentCreateNestedManyWithoutCounselorInput = {
    create?: XOR<AppointmentCreateWithoutCounselorInput, AppointmentUncheckedCreateWithoutCounselorInput> | AppointmentCreateWithoutCounselorInput[] | AppointmentUncheckedCreateWithoutCounselorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCounselorInput | AppointmentCreateOrConnectWithoutCounselorInput[]
    createMany?: AppointmentCreateManyCounselorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type VentMessageCreateNestedManyWithoutCounselorInput = {
    create?: XOR<VentMessageCreateWithoutCounselorInput, VentMessageUncheckedCreateWithoutCounselorInput> | VentMessageCreateWithoutCounselorInput[] | VentMessageUncheckedCreateWithoutCounselorInput[]
    connectOrCreate?: VentMessageCreateOrConnectWithoutCounselorInput | VentMessageCreateOrConnectWithoutCounselorInput[]
    createMany?: VentMessageCreateManyCounselorInputEnvelope
    connect?: VentMessageWhereUniqueInput | VentMessageWhereUniqueInput[]
  }

  export type ChatSessionCreateNestedManyWithoutCounselorInput = {
    create?: XOR<ChatSessionCreateWithoutCounselorInput, ChatSessionUncheckedCreateWithoutCounselorInput> | ChatSessionCreateWithoutCounselorInput[] | ChatSessionUncheckedCreateWithoutCounselorInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutCounselorInput | ChatSessionCreateOrConnectWithoutCounselorInput[]
    createMany?: ChatSessionCreateManyCounselorInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type CounselorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CounselorProfileCreateWithoutUserInput, CounselorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CounselorProfileCreateOrConnectWithoutUserInput
    connect?: CounselorProfileWhereUniqueInput
  }

  export type MoodCheckinUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MoodCheckinCreateWithoutUserInput, MoodCheckinUncheckedCreateWithoutUserInput> | MoodCheckinCreateWithoutUserInput[] | MoodCheckinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodCheckinCreateOrConnectWithoutUserInput | MoodCheckinCreateOrConnectWithoutUserInput[]
    createMany?: MoodCheckinCreateManyUserInputEnvelope
    connect?: MoodCheckinWhereUniqueInput | MoodCheckinWhereUniqueInput[]
  }

  export type JournalEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput> | JournalEntryCreateWithoutUserInput[] | JournalEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JournalEntryCreateOrConnectWithoutUserInput | JournalEntryCreateOrConnectWithoutUserInput[]
    createMany?: JournalEntryCreateManyUserInputEnvelope
    connect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
  }

  export type CommunityPostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommunityPostCreateWithoutAuthorInput, CommunityPostUncheckedCreateWithoutAuthorInput> | CommunityPostCreateWithoutAuthorInput[] | CommunityPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutAuthorInput | CommunityPostCreateOrConnectWithoutAuthorInput[]
    createMany?: CommunityPostCreateManyAuthorInputEnvelope
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
  }

  export type PostLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput> | PostLikeCreateWithoutUserInput[] | PostLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput | PostLikeCreateOrConnectWithoutUserInput[]
    createMany?: PostLikeCreateManyUserInputEnvelope
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
  }

  export type PostReplyUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostReplyCreateWithoutAuthorInput, PostReplyUncheckedCreateWithoutAuthorInput> | PostReplyCreateWithoutAuthorInput[] | PostReplyUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostReplyCreateOrConnectWithoutAuthorInput | PostReplyCreateOrConnectWithoutAuthorInput[]
    createMany?: PostReplyCreateManyAuthorInputEnvelope
    connect?: PostReplyWhereUniqueInput | PostReplyWhereUniqueInput[]
  }

  export type PostReportUncheckedCreateNestedManyWithoutReporterInput = {
    create?: XOR<PostReportCreateWithoutReporterInput, PostReportUncheckedCreateWithoutReporterInput> | PostReportCreateWithoutReporterInput[] | PostReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: PostReportCreateOrConnectWithoutReporterInput | PostReportCreateOrConnectWithoutReporterInput[]
    createMany?: PostReportCreateManyReporterInputEnvelope
    connect?: PostReportWhereUniqueInput | PostReportWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AppointmentCreateWithoutStudentInput, AppointmentUncheckedCreateWithoutStudentInput> | AppointmentCreateWithoutStudentInput[] | AppointmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutStudentInput | AppointmentCreateOrConnectWithoutStudentInput[]
    createMany?: AppointmentCreateManyStudentInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type VentMessageUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<VentMessageCreateWithoutStudentInput, VentMessageUncheckedCreateWithoutStudentInput> | VentMessageCreateWithoutStudentInput[] | VentMessageUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: VentMessageCreateOrConnectWithoutStudentInput | VentMessageCreateOrConnectWithoutStudentInput[]
    createMany?: VentMessageCreateManyStudentInputEnvelope
    connect?: VentMessageWhereUniqueInput | VentMessageWhereUniqueInput[]
  }

  export type ChatSessionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ChatSessionCreateWithoutStudentInput, ChatSessionUncheckedCreateWithoutStudentInput> | ChatSessionCreateWithoutStudentInput[] | ChatSessionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutStudentInput | ChatSessionCreateOrConnectWithoutStudentInput[]
    createMany?: ChatSessionCreateManyStudentInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type AppointmentUncheckedCreateNestedManyWithoutCounselorInput = {
    create?: XOR<AppointmentCreateWithoutCounselorInput, AppointmentUncheckedCreateWithoutCounselorInput> | AppointmentCreateWithoutCounselorInput[] | AppointmentUncheckedCreateWithoutCounselorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCounselorInput | AppointmentCreateOrConnectWithoutCounselorInput[]
    createMany?: AppointmentCreateManyCounselorInputEnvelope
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
  }

  export type VentMessageUncheckedCreateNestedManyWithoutCounselorInput = {
    create?: XOR<VentMessageCreateWithoutCounselorInput, VentMessageUncheckedCreateWithoutCounselorInput> | VentMessageCreateWithoutCounselorInput[] | VentMessageUncheckedCreateWithoutCounselorInput[]
    connectOrCreate?: VentMessageCreateOrConnectWithoutCounselorInput | VentMessageCreateOrConnectWithoutCounselorInput[]
    createMany?: VentMessageCreateManyCounselorInputEnvelope
    connect?: VentMessageWhereUniqueInput | VentMessageWhereUniqueInput[]
  }

  export type ChatSessionUncheckedCreateNestedManyWithoutCounselorInput = {
    create?: XOR<ChatSessionCreateWithoutCounselorInput, ChatSessionUncheckedCreateWithoutCounselorInput> | ChatSessionCreateWithoutCounselorInput[] | ChatSessionUncheckedCreateWithoutCounselorInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutCounselorInput | ChatSessionCreateOrConnectWithoutCounselorInput[]
    createMany?: ChatSessionCreateManyCounselorInputEnvelope
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CounselorProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<CounselorProfileCreateWithoutUserInput, CounselorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CounselorProfileCreateOrConnectWithoutUserInput
    upsert?: CounselorProfileUpsertWithoutUserInput
    disconnect?: CounselorProfileWhereInput | boolean
    delete?: CounselorProfileWhereInput | boolean
    connect?: CounselorProfileWhereUniqueInput
    update?: XOR<XOR<CounselorProfileUpdateToOneWithWhereWithoutUserInput, CounselorProfileUpdateWithoutUserInput>, CounselorProfileUncheckedUpdateWithoutUserInput>
  }

  export type MoodCheckinUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoodCheckinCreateWithoutUserInput, MoodCheckinUncheckedCreateWithoutUserInput> | MoodCheckinCreateWithoutUserInput[] | MoodCheckinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodCheckinCreateOrConnectWithoutUserInput | MoodCheckinCreateOrConnectWithoutUserInput[]
    upsert?: MoodCheckinUpsertWithWhereUniqueWithoutUserInput | MoodCheckinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoodCheckinCreateManyUserInputEnvelope
    set?: MoodCheckinWhereUniqueInput | MoodCheckinWhereUniqueInput[]
    disconnect?: MoodCheckinWhereUniqueInput | MoodCheckinWhereUniqueInput[]
    delete?: MoodCheckinWhereUniqueInput | MoodCheckinWhereUniqueInput[]
    connect?: MoodCheckinWhereUniqueInput | MoodCheckinWhereUniqueInput[]
    update?: MoodCheckinUpdateWithWhereUniqueWithoutUserInput | MoodCheckinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoodCheckinUpdateManyWithWhereWithoutUserInput | MoodCheckinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoodCheckinScalarWhereInput | MoodCheckinScalarWhereInput[]
  }

  export type JournalEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput> | JournalEntryCreateWithoutUserInput[] | JournalEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JournalEntryCreateOrConnectWithoutUserInput | JournalEntryCreateOrConnectWithoutUserInput[]
    upsert?: JournalEntryUpsertWithWhereUniqueWithoutUserInput | JournalEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JournalEntryCreateManyUserInputEnvelope
    set?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    disconnect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    delete?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    connect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    update?: JournalEntryUpdateWithWhereUniqueWithoutUserInput | JournalEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JournalEntryUpdateManyWithWhereWithoutUserInput | JournalEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JournalEntryScalarWhereInput | JournalEntryScalarWhereInput[]
  }

  export type CommunityPostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommunityPostCreateWithoutAuthorInput, CommunityPostUncheckedCreateWithoutAuthorInput> | CommunityPostCreateWithoutAuthorInput[] | CommunityPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutAuthorInput | CommunityPostCreateOrConnectWithoutAuthorInput[]
    upsert?: CommunityPostUpsertWithWhereUniqueWithoutAuthorInput | CommunityPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommunityPostCreateManyAuthorInputEnvelope
    set?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    disconnect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    delete?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    update?: CommunityPostUpdateWithWhereUniqueWithoutAuthorInput | CommunityPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommunityPostUpdateManyWithWhereWithoutAuthorInput | CommunityPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
  }

  export type PostLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput> | PostLikeCreateWithoutUserInput[] | PostLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput | PostLikeCreateOrConnectWithoutUserInput[]
    upsert?: PostLikeUpsertWithWhereUniqueWithoutUserInput | PostLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostLikeCreateManyUserInputEnvelope
    set?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    disconnect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    delete?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    update?: PostLikeUpdateWithWhereUniqueWithoutUserInput | PostLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostLikeUpdateManyWithWhereWithoutUserInput | PostLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
  }

  export type PostReplyUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostReplyCreateWithoutAuthorInput, PostReplyUncheckedCreateWithoutAuthorInput> | PostReplyCreateWithoutAuthorInput[] | PostReplyUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostReplyCreateOrConnectWithoutAuthorInput | PostReplyCreateOrConnectWithoutAuthorInput[]
    upsert?: PostReplyUpsertWithWhereUniqueWithoutAuthorInput | PostReplyUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostReplyCreateManyAuthorInputEnvelope
    set?: PostReplyWhereUniqueInput | PostReplyWhereUniqueInput[]
    disconnect?: PostReplyWhereUniqueInput | PostReplyWhereUniqueInput[]
    delete?: PostReplyWhereUniqueInput | PostReplyWhereUniqueInput[]
    connect?: PostReplyWhereUniqueInput | PostReplyWhereUniqueInput[]
    update?: PostReplyUpdateWithWhereUniqueWithoutAuthorInput | PostReplyUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostReplyUpdateManyWithWhereWithoutAuthorInput | PostReplyUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostReplyScalarWhereInput | PostReplyScalarWhereInput[]
  }

  export type PostReportUpdateManyWithoutReporterNestedInput = {
    create?: XOR<PostReportCreateWithoutReporterInput, PostReportUncheckedCreateWithoutReporterInput> | PostReportCreateWithoutReporterInput[] | PostReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: PostReportCreateOrConnectWithoutReporterInput | PostReportCreateOrConnectWithoutReporterInput[]
    upsert?: PostReportUpsertWithWhereUniqueWithoutReporterInput | PostReportUpsertWithWhereUniqueWithoutReporterInput[]
    createMany?: PostReportCreateManyReporterInputEnvelope
    set?: PostReportWhereUniqueInput | PostReportWhereUniqueInput[]
    disconnect?: PostReportWhereUniqueInput | PostReportWhereUniqueInput[]
    delete?: PostReportWhereUniqueInput | PostReportWhereUniqueInput[]
    connect?: PostReportWhereUniqueInput | PostReportWhereUniqueInput[]
    update?: PostReportUpdateWithWhereUniqueWithoutReporterInput | PostReportUpdateWithWhereUniqueWithoutReporterInput[]
    updateMany?: PostReportUpdateManyWithWhereWithoutReporterInput | PostReportUpdateManyWithWhereWithoutReporterInput[]
    deleteMany?: PostReportScalarWhereInput | PostReportScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AppointmentCreateWithoutStudentInput, AppointmentUncheckedCreateWithoutStudentInput> | AppointmentCreateWithoutStudentInput[] | AppointmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutStudentInput | AppointmentCreateOrConnectWithoutStudentInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutStudentInput | AppointmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AppointmentCreateManyStudentInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutStudentInput | AppointmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutStudentInput | AppointmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type VentMessageUpdateManyWithoutStudentNestedInput = {
    create?: XOR<VentMessageCreateWithoutStudentInput, VentMessageUncheckedCreateWithoutStudentInput> | VentMessageCreateWithoutStudentInput[] | VentMessageUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: VentMessageCreateOrConnectWithoutStudentInput | VentMessageCreateOrConnectWithoutStudentInput[]
    upsert?: VentMessageUpsertWithWhereUniqueWithoutStudentInput | VentMessageUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: VentMessageCreateManyStudentInputEnvelope
    set?: VentMessageWhereUniqueInput | VentMessageWhereUniqueInput[]
    disconnect?: VentMessageWhereUniqueInput | VentMessageWhereUniqueInput[]
    delete?: VentMessageWhereUniqueInput | VentMessageWhereUniqueInput[]
    connect?: VentMessageWhereUniqueInput | VentMessageWhereUniqueInput[]
    update?: VentMessageUpdateWithWhereUniqueWithoutStudentInput | VentMessageUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: VentMessageUpdateManyWithWhereWithoutStudentInput | VentMessageUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: VentMessageScalarWhereInput | VentMessageScalarWhereInput[]
  }

  export type ChatSessionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ChatSessionCreateWithoutStudentInput, ChatSessionUncheckedCreateWithoutStudentInput> | ChatSessionCreateWithoutStudentInput[] | ChatSessionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutStudentInput | ChatSessionCreateOrConnectWithoutStudentInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutStudentInput | ChatSessionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ChatSessionCreateManyStudentInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutStudentInput | ChatSessionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutStudentInput | ChatSessionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type ChatMessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSenderInput | ChatMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSenderInput | ChatMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSenderInput | ChatMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type AppointmentUpdateManyWithoutCounselorNestedInput = {
    create?: XOR<AppointmentCreateWithoutCounselorInput, AppointmentUncheckedCreateWithoutCounselorInput> | AppointmentCreateWithoutCounselorInput[] | AppointmentUncheckedCreateWithoutCounselorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCounselorInput | AppointmentCreateOrConnectWithoutCounselorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutCounselorInput | AppointmentUpsertWithWhereUniqueWithoutCounselorInput[]
    createMany?: AppointmentCreateManyCounselorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutCounselorInput | AppointmentUpdateWithWhereUniqueWithoutCounselorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutCounselorInput | AppointmentUpdateManyWithWhereWithoutCounselorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type VentMessageUpdateManyWithoutCounselorNestedInput = {
    create?: XOR<VentMessageCreateWithoutCounselorInput, VentMessageUncheckedCreateWithoutCounselorInput> | VentMessageCreateWithoutCounselorInput[] | VentMessageUncheckedCreateWithoutCounselorInput[]
    connectOrCreate?: VentMessageCreateOrConnectWithoutCounselorInput | VentMessageCreateOrConnectWithoutCounselorInput[]
    upsert?: VentMessageUpsertWithWhereUniqueWithoutCounselorInput | VentMessageUpsertWithWhereUniqueWithoutCounselorInput[]
    createMany?: VentMessageCreateManyCounselorInputEnvelope
    set?: VentMessageWhereUniqueInput | VentMessageWhereUniqueInput[]
    disconnect?: VentMessageWhereUniqueInput | VentMessageWhereUniqueInput[]
    delete?: VentMessageWhereUniqueInput | VentMessageWhereUniqueInput[]
    connect?: VentMessageWhereUniqueInput | VentMessageWhereUniqueInput[]
    update?: VentMessageUpdateWithWhereUniqueWithoutCounselorInput | VentMessageUpdateWithWhereUniqueWithoutCounselorInput[]
    updateMany?: VentMessageUpdateManyWithWhereWithoutCounselorInput | VentMessageUpdateManyWithWhereWithoutCounselorInput[]
    deleteMany?: VentMessageScalarWhereInput | VentMessageScalarWhereInput[]
  }

  export type ChatSessionUpdateManyWithoutCounselorNestedInput = {
    create?: XOR<ChatSessionCreateWithoutCounselorInput, ChatSessionUncheckedCreateWithoutCounselorInput> | ChatSessionCreateWithoutCounselorInput[] | ChatSessionUncheckedCreateWithoutCounselorInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutCounselorInput | ChatSessionCreateOrConnectWithoutCounselorInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutCounselorInput | ChatSessionUpsertWithWhereUniqueWithoutCounselorInput[]
    createMany?: ChatSessionCreateManyCounselorInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutCounselorInput | ChatSessionUpdateWithWhereUniqueWithoutCounselorInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutCounselorInput | ChatSessionUpdateManyWithWhereWithoutCounselorInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type CounselorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CounselorProfileCreateWithoutUserInput, CounselorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CounselorProfileCreateOrConnectWithoutUserInput
    upsert?: CounselorProfileUpsertWithoutUserInput
    disconnect?: CounselorProfileWhereInput | boolean
    delete?: CounselorProfileWhereInput | boolean
    connect?: CounselorProfileWhereUniqueInput
    update?: XOR<XOR<CounselorProfileUpdateToOneWithWhereWithoutUserInput, CounselorProfileUpdateWithoutUserInput>, CounselorProfileUncheckedUpdateWithoutUserInput>
  }

  export type MoodCheckinUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoodCheckinCreateWithoutUserInput, MoodCheckinUncheckedCreateWithoutUserInput> | MoodCheckinCreateWithoutUserInput[] | MoodCheckinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoodCheckinCreateOrConnectWithoutUserInput | MoodCheckinCreateOrConnectWithoutUserInput[]
    upsert?: MoodCheckinUpsertWithWhereUniqueWithoutUserInput | MoodCheckinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoodCheckinCreateManyUserInputEnvelope
    set?: MoodCheckinWhereUniqueInput | MoodCheckinWhereUniqueInput[]
    disconnect?: MoodCheckinWhereUniqueInput | MoodCheckinWhereUniqueInput[]
    delete?: MoodCheckinWhereUniqueInput | MoodCheckinWhereUniqueInput[]
    connect?: MoodCheckinWhereUniqueInput | MoodCheckinWhereUniqueInput[]
    update?: MoodCheckinUpdateWithWhereUniqueWithoutUserInput | MoodCheckinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoodCheckinUpdateManyWithWhereWithoutUserInput | MoodCheckinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoodCheckinScalarWhereInput | MoodCheckinScalarWhereInput[]
  }

  export type JournalEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput> | JournalEntryCreateWithoutUserInput[] | JournalEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JournalEntryCreateOrConnectWithoutUserInput | JournalEntryCreateOrConnectWithoutUserInput[]
    upsert?: JournalEntryUpsertWithWhereUniqueWithoutUserInput | JournalEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JournalEntryCreateManyUserInputEnvelope
    set?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    disconnect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    delete?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    connect?: JournalEntryWhereUniqueInput | JournalEntryWhereUniqueInput[]
    update?: JournalEntryUpdateWithWhereUniqueWithoutUserInput | JournalEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JournalEntryUpdateManyWithWhereWithoutUserInput | JournalEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JournalEntryScalarWhereInput | JournalEntryScalarWhereInput[]
  }

  export type CommunityPostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommunityPostCreateWithoutAuthorInput, CommunityPostUncheckedCreateWithoutAuthorInput> | CommunityPostCreateWithoutAuthorInput[] | CommunityPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommunityPostCreateOrConnectWithoutAuthorInput | CommunityPostCreateOrConnectWithoutAuthorInput[]
    upsert?: CommunityPostUpsertWithWhereUniqueWithoutAuthorInput | CommunityPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommunityPostCreateManyAuthorInputEnvelope
    set?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    disconnect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    delete?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    connect?: CommunityPostWhereUniqueInput | CommunityPostWhereUniqueInput[]
    update?: CommunityPostUpdateWithWhereUniqueWithoutAuthorInput | CommunityPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommunityPostUpdateManyWithWhereWithoutAuthorInput | CommunityPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
  }

  export type PostLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput> | PostLikeCreateWithoutUserInput[] | PostLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutUserInput | PostLikeCreateOrConnectWithoutUserInput[]
    upsert?: PostLikeUpsertWithWhereUniqueWithoutUserInput | PostLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostLikeCreateManyUserInputEnvelope
    set?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    disconnect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    delete?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    update?: PostLikeUpdateWithWhereUniqueWithoutUserInput | PostLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostLikeUpdateManyWithWhereWithoutUserInput | PostLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
  }

  export type PostReplyUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostReplyCreateWithoutAuthorInput, PostReplyUncheckedCreateWithoutAuthorInput> | PostReplyCreateWithoutAuthorInput[] | PostReplyUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostReplyCreateOrConnectWithoutAuthorInput | PostReplyCreateOrConnectWithoutAuthorInput[]
    upsert?: PostReplyUpsertWithWhereUniqueWithoutAuthorInput | PostReplyUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostReplyCreateManyAuthorInputEnvelope
    set?: PostReplyWhereUniqueInput | PostReplyWhereUniqueInput[]
    disconnect?: PostReplyWhereUniqueInput | PostReplyWhereUniqueInput[]
    delete?: PostReplyWhereUniqueInput | PostReplyWhereUniqueInput[]
    connect?: PostReplyWhereUniqueInput | PostReplyWhereUniqueInput[]
    update?: PostReplyUpdateWithWhereUniqueWithoutAuthorInput | PostReplyUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostReplyUpdateManyWithWhereWithoutAuthorInput | PostReplyUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostReplyScalarWhereInput | PostReplyScalarWhereInput[]
  }

  export type PostReportUncheckedUpdateManyWithoutReporterNestedInput = {
    create?: XOR<PostReportCreateWithoutReporterInput, PostReportUncheckedCreateWithoutReporterInput> | PostReportCreateWithoutReporterInput[] | PostReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: PostReportCreateOrConnectWithoutReporterInput | PostReportCreateOrConnectWithoutReporterInput[]
    upsert?: PostReportUpsertWithWhereUniqueWithoutReporterInput | PostReportUpsertWithWhereUniqueWithoutReporterInput[]
    createMany?: PostReportCreateManyReporterInputEnvelope
    set?: PostReportWhereUniqueInput | PostReportWhereUniqueInput[]
    disconnect?: PostReportWhereUniqueInput | PostReportWhereUniqueInput[]
    delete?: PostReportWhereUniqueInput | PostReportWhereUniqueInput[]
    connect?: PostReportWhereUniqueInput | PostReportWhereUniqueInput[]
    update?: PostReportUpdateWithWhereUniqueWithoutReporterInput | PostReportUpdateWithWhereUniqueWithoutReporterInput[]
    updateMany?: PostReportUpdateManyWithWhereWithoutReporterInput | PostReportUpdateManyWithWhereWithoutReporterInput[]
    deleteMany?: PostReportScalarWhereInput | PostReportScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AppointmentCreateWithoutStudentInput, AppointmentUncheckedCreateWithoutStudentInput> | AppointmentCreateWithoutStudentInput[] | AppointmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutStudentInput | AppointmentCreateOrConnectWithoutStudentInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutStudentInput | AppointmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AppointmentCreateManyStudentInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutStudentInput | AppointmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutStudentInput | AppointmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type VentMessageUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<VentMessageCreateWithoutStudentInput, VentMessageUncheckedCreateWithoutStudentInput> | VentMessageCreateWithoutStudentInput[] | VentMessageUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: VentMessageCreateOrConnectWithoutStudentInput | VentMessageCreateOrConnectWithoutStudentInput[]
    upsert?: VentMessageUpsertWithWhereUniqueWithoutStudentInput | VentMessageUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: VentMessageCreateManyStudentInputEnvelope
    set?: VentMessageWhereUniqueInput | VentMessageWhereUniqueInput[]
    disconnect?: VentMessageWhereUniqueInput | VentMessageWhereUniqueInput[]
    delete?: VentMessageWhereUniqueInput | VentMessageWhereUniqueInput[]
    connect?: VentMessageWhereUniqueInput | VentMessageWhereUniqueInput[]
    update?: VentMessageUpdateWithWhereUniqueWithoutStudentInput | VentMessageUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: VentMessageUpdateManyWithWhereWithoutStudentInput | VentMessageUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: VentMessageScalarWhereInput | VentMessageScalarWhereInput[]
  }

  export type ChatSessionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ChatSessionCreateWithoutStudentInput, ChatSessionUncheckedCreateWithoutStudentInput> | ChatSessionCreateWithoutStudentInput[] | ChatSessionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutStudentInput | ChatSessionCreateOrConnectWithoutStudentInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutStudentInput | ChatSessionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ChatSessionCreateManyStudentInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutStudentInput | ChatSessionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutStudentInput | ChatSessionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput> | ChatMessageCreateWithoutSenderInput[] | ChatMessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSenderInput | ChatMessageCreateOrConnectWithoutSenderInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSenderInput | ChatMessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: ChatMessageCreateManySenderInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSenderInput | ChatMessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSenderInput | ChatMessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type AppointmentUncheckedUpdateManyWithoutCounselorNestedInput = {
    create?: XOR<AppointmentCreateWithoutCounselorInput, AppointmentUncheckedCreateWithoutCounselorInput> | AppointmentCreateWithoutCounselorInput[] | AppointmentUncheckedCreateWithoutCounselorInput[]
    connectOrCreate?: AppointmentCreateOrConnectWithoutCounselorInput | AppointmentCreateOrConnectWithoutCounselorInput[]
    upsert?: AppointmentUpsertWithWhereUniqueWithoutCounselorInput | AppointmentUpsertWithWhereUniqueWithoutCounselorInput[]
    createMany?: AppointmentCreateManyCounselorInputEnvelope
    set?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    disconnect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    delete?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    connect?: AppointmentWhereUniqueInput | AppointmentWhereUniqueInput[]
    update?: AppointmentUpdateWithWhereUniqueWithoutCounselorInput | AppointmentUpdateWithWhereUniqueWithoutCounselorInput[]
    updateMany?: AppointmentUpdateManyWithWhereWithoutCounselorInput | AppointmentUpdateManyWithWhereWithoutCounselorInput[]
    deleteMany?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
  }

  export type VentMessageUncheckedUpdateManyWithoutCounselorNestedInput = {
    create?: XOR<VentMessageCreateWithoutCounselorInput, VentMessageUncheckedCreateWithoutCounselorInput> | VentMessageCreateWithoutCounselorInput[] | VentMessageUncheckedCreateWithoutCounselorInput[]
    connectOrCreate?: VentMessageCreateOrConnectWithoutCounselorInput | VentMessageCreateOrConnectWithoutCounselorInput[]
    upsert?: VentMessageUpsertWithWhereUniqueWithoutCounselorInput | VentMessageUpsertWithWhereUniqueWithoutCounselorInput[]
    createMany?: VentMessageCreateManyCounselorInputEnvelope
    set?: VentMessageWhereUniqueInput | VentMessageWhereUniqueInput[]
    disconnect?: VentMessageWhereUniqueInput | VentMessageWhereUniqueInput[]
    delete?: VentMessageWhereUniqueInput | VentMessageWhereUniqueInput[]
    connect?: VentMessageWhereUniqueInput | VentMessageWhereUniqueInput[]
    update?: VentMessageUpdateWithWhereUniqueWithoutCounselorInput | VentMessageUpdateWithWhereUniqueWithoutCounselorInput[]
    updateMany?: VentMessageUpdateManyWithWhereWithoutCounselorInput | VentMessageUpdateManyWithWhereWithoutCounselorInput[]
    deleteMany?: VentMessageScalarWhereInput | VentMessageScalarWhereInput[]
  }

  export type ChatSessionUncheckedUpdateManyWithoutCounselorNestedInput = {
    create?: XOR<ChatSessionCreateWithoutCounselorInput, ChatSessionUncheckedCreateWithoutCounselorInput> | ChatSessionCreateWithoutCounselorInput[] | ChatSessionUncheckedCreateWithoutCounselorInput[]
    connectOrCreate?: ChatSessionCreateOrConnectWithoutCounselorInput | ChatSessionCreateOrConnectWithoutCounselorInput[]
    upsert?: ChatSessionUpsertWithWhereUniqueWithoutCounselorInput | ChatSessionUpsertWithWhereUniqueWithoutCounselorInput[]
    createMany?: ChatSessionCreateManyCounselorInputEnvelope
    set?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    disconnect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    delete?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    connect?: ChatSessionWhereUniqueInput | ChatSessionWhereUniqueInput[]
    update?: ChatSessionUpdateWithWhereUniqueWithoutCounselorInput | ChatSessionUpdateWithWhereUniqueWithoutCounselorInput[]
    updateMany?: ChatSessionUpdateManyWithWhereWithoutCounselorInput | ChatSessionUpdateManyWithWhereWithoutCounselorInput[]
    deleteMany?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCounselorProfileInput = {
    create?: XOR<UserCreateWithoutCounselorProfileInput, UserUncheckedCreateWithoutCounselorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCounselorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCounselorProfileNestedInput = {
    create?: XOR<UserCreateWithoutCounselorProfileInput, UserUncheckedCreateWithoutCounselorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCounselorProfileInput
    upsert?: UserUpsertWithoutCounselorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCounselorProfileInput, UserUpdateWithoutCounselorProfileInput>, UserUncheckedUpdateWithoutCounselorProfileInput>
  }

  export type MoodCheckinCreatetasksInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutMoodCheckinsInput = {
    create?: XOR<UserCreateWithoutMoodCheckinsInput, UserUncheckedCreateWithoutMoodCheckinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoodCheckinsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMoodFieldUpdateOperationsInput = {
    set?: $Enums.Mood
  }

  export type MoodCheckinUpdatetasksInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutMoodCheckinsNestedInput = {
    create?: XOR<UserCreateWithoutMoodCheckinsInput, UserUncheckedCreateWithoutMoodCheckinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoodCheckinsInput
    upsert?: UserUpsertWithoutMoodCheckinsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMoodCheckinsInput, UserUpdateWithoutMoodCheckinsInput>, UserUncheckedUpdateWithoutMoodCheckinsInput>
  }

  export type UserCreateNestedOneWithoutJournalEntriesInput = {
    create?: XOR<UserCreateWithoutJournalEntriesInput, UserUncheckedCreateWithoutJournalEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutJournalEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutJournalEntriesNestedInput = {
    create?: XOR<UserCreateWithoutJournalEntriesInput, UserUncheckedCreateWithoutJournalEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutJournalEntriesInput
    upsert?: UserUpsertWithoutJournalEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJournalEntriesInput, UserUpdateWithoutJournalEntriesInput>, UserUncheckedUpdateWithoutJournalEntriesInput>
  }

  export type CommunityPostCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutCommunityPostsInput = {
    create?: XOR<UserCreateWithoutCommunityPostsInput, UserUncheckedCreateWithoutCommunityPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunityPostsInput
    connect?: UserWhereUniqueInput
  }

  export type PostLikeCreateNestedManyWithoutPostInput = {
    create?: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput> | PostLikeCreateWithoutPostInput[] | PostLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutPostInput | PostLikeCreateOrConnectWithoutPostInput[]
    createMany?: PostLikeCreateManyPostInputEnvelope
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
  }

  export type PostReplyCreateNestedManyWithoutPostInput = {
    create?: XOR<PostReplyCreateWithoutPostInput, PostReplyUncheckedCreateWithoutPostInput> | PostReplyCreateWithoutPostInput[] | PostReplyUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostReplyCreateOrConnectWithoutPostInput | PostReplyCreateOrConnectWithoutPostInput[]
    createMany?: PostReplyCreateManyPostInputEnvelope
    connect?: PostReplyWhereUniqueInput | PostReplyWhereUniqueInput[]
  }

  export type PostReportCreateNestedManyWithoutPostInput = {
    create?: XOR<PostReportCreateWithoutPostInput, PostReportUncheckedCreateWithoutPostInput> | PostReportCreateWithoutPostInput[] | PostReportUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostReportCreateOrConnectWithoutPostInput | PostReportCreateOrConnectWithoutPostInput[]
    createMany?: PostReportCreateManyPostInputEnvelope
    connect?: PostReportWhereUniqueInput | PostReportWhereUniqueInput[]
  }

  export type PostLikeUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput> | PostLikeCreateWithoutPostInput[] | PostLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutPostInput | PostLikeCreateOrConnectWithoutPostInput[]
    createMany?: PostLikeCreateManyPostInputEnvelope
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
  }

  export type PostReplyUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostReplyCreateWithoutPostInput, PostReplyUncheckedCreateWithoutPostInput> | PostReplyCreateWithoutPostInput[] | PostReplyUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostReplyCreateOrConnectWithoutPostInput | PostReplyCreateOrConnectWithoutPostInput[]
    createMany?: PostReplyCreateManyPostInputEnvelope
    connect?: PostReplyWhereUniqueInput | PostReplyWhereUniqueInput[]
  }

  export type PostReportUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostReportCreateWithoutPostInput, PostReportUncheckedCreateWithoutPostInput> | PostReportCreateWithoutPostInput[] | PostReportUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostReportCreateOrConnectWithoutPostInput | PostReportCreateOrConnectWithoutPostInput[]
    createMany?: PostReportCreateManyPostInputEnvelope
    connect?: PostReportWhereUniqueInput | PostReportWhereUniqueInput[]
  }

  export type CommunityPostUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutCommunityPostsNestedInput = {
    create?: XOR<UserCreateWithoutCommunityPostsInput, UserUncheckedCreateWithoutCommunityPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommunityPostsInput
    upsert?: UserUpsertWithoutCommunityPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommunityPostsInput, UserUpdateWithoutCommunityPostsInput>, UserUncheckedUpdateWithoutCommunityPostsInput>
  }

  export type PostLikeUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput> | PostLikeCreateWithoutPostInput[] | PostLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutPostInput | PostLikeCreateOrConnectWithoutPostInput[]
    upsert?: PostLikeUpsertWithWhereUniqueWithoutPostInput | PostLikeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostLikeCreateManyPostInputEnvelope
    set?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    disconnect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    delete?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    update?: PostLikeUpdateWithWhereUniqueWithoutPostInput | PostLikeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostLikeUpdateManyWithWhereWithoutPostInput | PostLikeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
  }

  export type PostReplyUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostReplyCreateWithoutPostInput, PostReplyUncheckedCreateWithoutPostInput> | PostReplyCreateWithoutPostInput[] | PostReplyUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostReplyCreateOrConnectWithoutPostInput | PostReplyCreateOrConnectWithoutPostInput[]
    upsert?: PostReplyUpsertWithWhereUniqueWithoutPostInput | PostReplyUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostReplyCreateManyPostInputEnvelope
    set?: PostReplyWhereUniqueInput | PostReplyWhereUniqueInput[]
    disconnect?: PostReplyWhereUniqueInput | PostReplyWhereUniqueInput[]
    delete?: PostReplyWhereUniqueInput | PostReplyWhereUniqueInput[]
    connect?: PostReplyWhereUniqueInput | PostReplyWhereUniqueInput[]
    update?: PostReplyUpdateWithWhereUniqueWithoutPostInput | PostReplyUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostReplyUpdateManyWithWhereWithoutPostInput | PostReplyUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostReplyScalarWhereInput | PostReplyScalarWhereInput[]
  }

  export type PostReportUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostReportCreateWithoutPostInput, PostReportUncheckedCreateWithoutPostInput> | PostReportCreateWithoutPostInput[] | PostReportUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostReportCreateOrConnectWithoutPostInput | PostReportCreateOrConnectWithoutPostInput[]
    upsert?: PostReportUpsertWithWhereUniqueWithoutPostInput | PostReportUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostReportCreateManyPostInputEnvelope
    set?: PostReportWhereUniqueInput | PostReportWhereUniqueInput[]
    disconnect?: PostReportWhereUniqueInput | PostReportWhereUniqueInput[]
    delete?: PostReportWhereUniqueInput | PostReportWhereUniqueInput[]
    connect?: PostReportWhereUniqueInput | PostReportWhereUniqueInput[]
    update?: PostReportUpdateWithWhereUniqueWithoutPostInput | PostReportUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostReportUpdateManyWithWhereWithoutPostInput | PostReportUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostReportScalarWhereInput | PostReportScalarWhereInput[]
  }

  export type PostLikeUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput> | PostLikeCreateWithoutPostInput[] | PostLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostLikeCreateOrConnectWithoutPostInput | PostLikeCreateOrConnectWithoutPostInput[]
    upsert?: PostLikeUpsertWithWhereUniqueWithoutPostInput | PostLikeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostLikeCreateManyPostInputEnvelope
    set?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    disconnect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    delete?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    connect?: PostLikeWhereUniqueInput | PostLikeWhereUniqueInput[]
    update?: PostLikeUpdateWithWhereUniqueWithoutPostInput | PostLikeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostLikeUpdateManyWithWhereWithoutPostInput | PostLikeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
  }

  export type PostReplyUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostReplyCreateWithoutPostInput, PostReplyUncheckedCreateWithoutPostInput> | PostReplyCreateWithoutPostInput[] | PostReplyUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostReplyCreateOrConnectWithoutPostInput | PostReplyCreateOrConnectWithoutPostInput[]
    upsert?: PostReplyUpsertWithWhereUniqueWithoutPostInput | PostReplyUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostReplyCreateManyPostInputEnvelope
    set?: PostReplyWhereUniqueInput | PostReplyWhereUniqueInput[]
    disconnect?: PostReplyWhereUniqueInput | PostReplyWhereUniqueInput[]
    delete?: PostReplyWhereUniqueInput | PostReplyWhereUniqueInput[]
    connect?: PostReplyWhereUniqueInput | PostReplyWhereUniqueInput[]
    update?: PostReplyUpdateWithWhereUniqueWithoutPostInput | PostReplyUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostReplyUpdateManyWithWhereWithoutPostInput | PostReplyUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostReplyScalarWhereInput | PostReplyScalarWhereInput[]
  }

  export type PostReportUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostReportCreateWithoutPostInput, PostReportUncheckedCreateWithoutPostInput> | PostReportCreateWithoutPostInput[] | PostReportUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostReportCreateOrConnectWithoutPostInput | PostReportCreateOrConnectWithoutPostInput[]
    upsert?: PostReportUpsertWithWhereUniqueWithoutPostInput | PostReportUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostReportCreateManyPostInputEnvelope
    set?: PostReportWhereUniqueInput | PostReportWhereUniqueInput[]
    disconnect?: PostReportWhereUniqueInput | PostReportWhereUniqueInput[]
    delete?: PostReportWhereUniqueInput | PostReportWhereUniqueInput[]
    connect?: PostReportWhereUniqueInput | PostReportWhereUniqueInput[]
    update?: PostReportUpdateWithWhereUniqueWithoutPostInput | PostReportUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostReportUpdateManyWithWhereWithoutPostInput | PostReportUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostReportScalarWhereInput | PostReportScalarWhereInput[]
  }

  export type CommunityPostCreateNestedOneWithoutLikesInput = {
    create?: XOR<CommunityPostCreateWithoutLikesInput, CommunityPostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: CommunityPostCreateOrConnectWithoutLikesInput
    connect?: CommunityPostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPostLikesInput = {
    create?: XOR<UserCreateWithoutPostLikesInput, UserUncheckedCreateWithoutPostLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostLikesInput
    connect?: UserWhereUniqueInput
  }

  export type CommunityPostUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<CommunityPostCreateWithoutLikesInput, CommunityPostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: CommunityPostCreateOrConnectWithoutLikesInput
    upsert?: CommunityPostUpsertWithoutLikesInput
    connect?: CommunityPostWhereUniqueInput
    update?: XOR<XOR<CommunityPostUpdateToOneWithWhereWithoutLikesInput, CommunityPostUpdateWithoutLikesInput>, CommunityPostUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateOneRequiredWithoutPostLikesNestedInput = {
    create?: XOR<UserCreateWithoutPostLikesInput, UserUncheckedCreateWithoutPostLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostLikesInput
    upsert?: UserUpsertWithoutPostLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostLikesInput, UserUpdateWithoutPostLikesInput>, UserUncheckedUpdateWithoutPostLikesInput>
  }

  export type CommunityPostCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommunityPostCreateWithoutRepliesInput, CommunityPostUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommunityPostCreateOrConnectWithoutRepliesInput
    connect?: CommunityPostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPostRepliesInput = {
    create?: XOR<UserCreateWithoutPostRepliesInput, UserUncheckedCreateWithoutPostRepliesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostRepliesInput
    connect?: UserWhereUniqueInput
  }

  export type CommunityPostUpdateOneRequiredWithoutRepliesNestedInput = {
    create?: XOR<CommunityPostCreateWithoutRepliesInput, CommunityPostUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommunityPostCreateOrConnectWithoutRepliesInput
    upsert?: CommunityPostUpsertWithoutRepliesInput
    connect?: CommunityPostWhereUniqueInput
    update?: XOR<XOR<CommunityPostUpdateToOneWithWhereWithoutRepliesInput, CommunityPostUpdateWithoutRepliesInput>, CommunityPostUncheckedUpdateWithoutRepliesInput>
  }

  export type UserUpdateOneRequiredWithoutPostRepliesNestedInput = {
    create?: XOR<UserCreateWithoutPostRepliesInput, UserUncheckedCreateWithoutPostRepliesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostRepliesInput
    upsert?: UserUpsertWithoutPostRepliesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostRepliesInput, UserUpdateWithoutPostRepliesInput>, UserUncheckedUpdateWithoutPostRepliesInput>
  }

  export type CommunityPostCreateNestedOneWithoutReportsInput = {
    create?: XOR<CommunityPostCreateWithoutReportsInput, CommunityPostUncheckedCreateWithoutReportsInput>
    connectOrCreate?: CommunityPostCreateOrConnectWithoutReportsInput
    connect?: CommunityPostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPostReportsInput = {
    create?: XOR<UserCreateWithoutPostReportsInput, UserUncheckedCreateWithoutPostReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostReportsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumReportStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReportStatus
  }

  export type CommunityPostUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<CommunityPostCreateWithoutReportsInput, CommunityPostUncheckedCreateWithoutReportsInput>
    connectOrCreate?: CommunityPostCreateOrConnectWithoutReportsInput
    upsert?: CommunityPostUpsertWithoutReportsInput
    connect?: CommunityPostWhereUniqueInput
    update?: XOR<XOR<CommunityPostUpdateToOneWithWhereWithoutReportsInput, CommunityPostUpdateWithoutReportsInput>, CommunityPostUncheckedUpdateWithoutReportsInput>
  }

  export type UserUpdateOneRequiredWithoutPostReportsNestedInput = {
    create?: XOR<UserCreateWithoutPostReportsInput, UserUncheckedCreateWithoutPostReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostReportsInput
    upsert?: UserUpsertWithoutPostReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostReportsInput, UserUpdateWithoutPostReportsInput>, UserUncheckedUpdateWithoutPostReportsInput>
  }

  export type UserCreateNestedOneWithoutStudentAppointmentsInput = {
    create?: XOR<UserCreateWithoutStudentAppointmentsInput, UserUncheckedCreateWithoutStudentAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCounselorAppointmentsInput = {
    create?: XOR<UserCreateWithoutCounselorAppointmentsInput, UserUncheckedCreateWithoutCounselorAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCounselorAppointmentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAppointmentModeFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentMode
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type UserUpdateOneRequiredWithoutStudentAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutStudentAppointmentsInput, UserUncheckedCreateWithoutStudentAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentAppointmentsInput
    upsert?: UserUpsertWithoutStudentAppointmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentAppointmentsInput, UserUpdateWithoutStudentAppointmentsInput>, UserUncheckedUpdateWithoutStudentAppointmentsInput>
  }

  export type UserUpdateOneRequiredWithoutCounselorAppointmentsNestedInput = {
    create?: XOR<UserCreateWithoutCounselorAppointmentsInput, UserUncheckedCreateWithoutCounselorAppointmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCounselorAppointmentsInput
    upsert?: UserUpsertWithoutCounselorAppointmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCounselorAppointmentsInput, UserUpdateWithoutCounselorAppointmentsInput>, UserUncheckedUpdateWithoutCounselorAppointmentsInput>
  }

  export type VentMessageCreatereactionsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutVentMessagesInput = {
    create?: XOR<UserCreateWithoutVentMessagesInput, UserUncheckedCreateWithoutVentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCounselorVentsInput = {
    create?: XOR<UserCreateWithoutCounselorVentsInput, UserUncheckedCreateWithoutCounselorVentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCounselorVentsInput
    connect?: UserWhereUniqueInput
  }

  export type VentMessageUpdatereactionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EnumVentStatusFieldUpdateOperationsInput = {
    set?: $Enums.VentStatus
  }

  export type UserUpdateOneRequiredWithoutVentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutVentMessagesInput, UserUncheckedCreateWithoutVentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVentMessagesInput
    upsert?: UserUpsertWithoutVentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVentMessagesInput, UserUpdateWithoutVentMessagesInput>, UserUncheckedUpdateWithoutVentMessagesInput>
  }

  export type UserUpdateOneWithoutCounselorVentsNestedInput = {
    create?: XOR<UserCreateWithoutCounselorVentsInput, UserUncheckedCreateWithoutCounselorVentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCounselorVentsInput
    upsert?: UserUpsertWithoutCounselorVentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCounselorVentsInput, UserUpdateWithoutCounselorVentsInput>, UserUncheckedUpdateWithoutCounselorVentsInput>
  }

  export type UserCreateNestedOneWithoutStudentChatSessionsInput = {
    create?: XOR<UserCreateWithoutStudentChatSessionsInput, UserUncheckedCreateWithoutStudentChatSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentChatSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCounselorChatSessionsInput = {
    create?: XOR<UserCreateWithoutCounselorChatSessionsInput, UserUncheckedCreateWithoutCounselorChatSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCounselorChatSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatMessageCreateNestedManyWithoutSessionInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type ChatMessageUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
  }

  export type EnumChatSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.ChatSessionStatus
  }

  export type UserUpdateOneRequiredWithoutStudentChatSessionsNestedInput = {
    create?: XOR<UserCreateWithoutStudentChatSessionsInput, UserUncheckedCreateWithoutStudentChatSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentChatSessionsInput
    upsert?: UserUpsertWithoutStudentChatSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentChatSessionsInput, UserUpdateWithoutStudentChatSessionsInput>, UserUncheckedUpdateWithoutStudentChatSessionsInput>
  }

  export type UserUpdateOneRequiredWithoutCounselorChatSessionsNestedInput = {
    create?: XOR<UserCreateWithoutCounselorChatSessionsInput, UserUncheckedCreateWithoutCounselorChatSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCounselorChatSessionsInput
    upsert?: UserUpsertWithoutCounselorChatSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCounselorChatSessionsInput, UserUpdateWithoutCounselorChatSessionsInput>, UserUncheckedUpdateWithoutCounselorChatSessionsInput>
  }

  export type ChatMessageUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSessionInput | ChatMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSessionInput | ChatMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSessionInput | ChatMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatMessageUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput> | ChatMessageCreateWithoutSessionInput[] | ChatMessageUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatMessageCreateOrConnectWithoutSessionInput | ChatMessageCreateOrConnectWithoutSessionInput[]
    upsert?: ChatMessageUpsertWithWhereUniqueWithoutSessionInput | ChatMessageUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ChatMessageCreateManySessionInputEnvelope
    set?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    disconnect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    delete?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    connect?: ChatMessageWhereUniqueInput | ChatMessageWhereUniqueInput[]
    update?: ChatMessageUpdateWithWhereUniqueWithoutSessionInput | ChatMessageUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ChatMessageUpdateManyWithWhereWithoutSessionInput | ChatMessageUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
  }

  export type ChatSessionCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutMessagesInput
    connect?: ChatSessionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type ChatSessionUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatSessionCreateOrConnectWithoutMessagesInput
    upsert?: ChatSessionUpsertWithoutMessagesInput
    connect?: ChatSessionWhereUniqueInput
    update?: XOR<XOR<ChatSessionUpdateToOneWithWhereWithoutMessagesInput, ChatSessionUpdateWithoutMessagesInput>, ChatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
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

  export type NestedEnumMoodFilter<$PrismaModel = never> = {
    equals?: $Enums.Mood | EnumMoodFieldRefInput<$PrismaModel>
    in?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    not?: NestedEnumMoodFilter<$PrismaModel> | $Enums.Mood
  }

  export type NestedEnumMoodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Mood | EnumMoodFieldRefInput<$PrismaModel>
    in?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    notIn?: $Enums.Mood[] | ListEnumMoodFieldRefInput<$PrismaModel>
    not?: NestedEnumMoodWithAggregatesFilter<$PrismaModel> | $Enums.Mood
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMoodFilter<$PrismaModel>
    _max?: NestedEnumMoodFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type NestedEnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentModeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentMode | EnumAppointmentModeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentMode[] | ListEnumAppointmentModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentMode[] | ListEnumAppointmentModeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentModeFilter<$PrismaModel> | $Enums.AppointmentMode
  }

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedEnumAppointmentModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentMode | EnumAppointmentModeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentMode[] | ListEnumAppointmentModeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentMode[] | ListEnumAppointmentModeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentModeWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentModeFilter<$PrismaModel>
    _max?: NestedEnumAppointmentModeFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumVentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VentStatus | EnumVentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VentStatus[] | ListEnumVentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VentStatus[] | ListEnumVentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVentStatusFilter<$PrismaModel> | $Enums.VentStatus
  }

  export type NestedEnumVentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VentStatus | EnumVentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VentStatus[] | ListEnumVentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.VentStatus[] | ListEnumVentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumVentStatusWithAggregatesFilter<$PrismaModel> | $Enums.VentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVentStatusFilter<$PrismaModel>
    _max?: NestedEnumVentStatusFilter<$PrismaModel>
  }

  export type NestedEnumChatSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatSessionStatus | EnumChatSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChatSessionStatus[] | ListEnumChatSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatSessionStatus[] | ListEnumChatSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChatSessionStatusFilter<$PrismaModel> | $Enums.ChatSessionStatus
  }

  export type NestedEnumChatSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ChatSessionStatus | EnumChatSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ChatSessionStatus[] | ListEnumChatSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ChatSessionStatus[] | ListEnumChatSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumChatSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.ChatSessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumChatSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumChatSessionStatusFilter<$PrismaModel>
  }

  export type CounselorProfileCreateWithoutUserInput = {
    id?: string
    employeeId?: string | null
    workPhone?: string | null
    license?: string | null
    specialization?: string | null
    officeLocation?: string | null
    experience?: string | null
  }

  export type CounselorProfileUncheckedCreateWithoutUserInput = {
    id?: string
    employeeId?: string | null
    workPhone?: string | null
    license?: string | null
    specialization?: string | null
    officeLocation?: string | null
    experience?: string | null
  }

  export type CounselorProfileCreateOrConnectWithoutUserInput = {
    where: CounselorProfileWhereUniqueInput
    create: XOR<CounselorProfileCreateWithoutUserInput, CounselorProfileUncheckedCreateWithoutUserInput>
  }

  export type MoodCheckinCreateWithoutUserInput = {
    id?: string
    mood: $Enums.Mood
    quote?: string | null
    tasks?: MoodCheckinCreatetasksInput | string[]
    createdAt?: Date | string
  }

  export type MoodCheckinUncheckedCreateWithoutUserInput = {
    id?: string
    mood: $Enums.Mood
    quote?: string | null
    tasks?: MoodCheckinCreatetasksInput | string[]
    createdAt?: Date | string
  }

  export type MoodCheckinCreateOrConnectWithoutUserInput = {
    where: MoodCheckinWhereUniqueInput
    create: XOR<MoodCheckinCreateWithoutUserInput, MoodCheckinUncheckedCreateWithoutUserInput>
  }

  export type MoodCheckinCreateManyUserInputEnvelope = {
    data: MoodCheckinCreateManyUserInput | MoodCheckinCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type JournalEntryCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    mood?: $Enums.Mood
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalEntryUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    content: string
    mood?: $Enums.Mood
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JournalEntryCreateOrConnectWithoutUserInput = {
    where: JournalEntryWhereUniqueInput
    create: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput>
  }

  export type JournalEntryCreateManyUserInputEnvelope = {
    data: JournalEntryCreateManyUserInput | JournalEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CommunityPostCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    tags?: CommunityPostCreatetagsInput | string[]
    isReported?: boolean
    createdAt?: Date | string
    likes?: PostLikeCreateNestedManyWithoutPostInput
    replies?: PostReplyCreateNestedManyWithoutPostInput
    reports?: PostReportCreateNestedManyWithoutPostInput
  }

  export type CommunityPostUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    content: string
    tags?: CommunityPostCreatetagsInput | string[]
    isReported?: boolean
    createdAt?: Date | string
    likes?: PostLikeUncheckedCreateNestedManyWithoutPostInput
    replies?: PostReplyUncheckedCreateNestedManyWithoutPostInput
    reports?: PostReportUncheckedCreateNestedManyWithoutPostInput
  }

  export type CommunityPostCreateOrConnectWithoutAuthorInput = {
    where: CommunityPostWhereUniqueInput
    create: XOR<CommunityPostCreateWithoutAuthorInput, CommunityPostUncheckedCreateWithoutAuthorInput>
  }

  export type CommunityPostCreateManyAuthorInputEnvelope = {
    data: CommunityPostCreateManyAuthorInput | CommunityPostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PostLikeCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    post: CommunityPostCreateNestedOneWithoutLikesInput
  }

  export type PostLikeUncheckedCreateWithoutUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
  }

  export type PostLikeCreateOrConnectWithoutUserInput = {
    where: PostLikeWhereUniqueInput
    create: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput>
  }

  export type PostLikeCreateManyUserInputEnvelope = {
    data: PostLikeCreateManyUserInput | PostLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostReplyCreateWithoutAuthorInput = {
    id?: string
    content: string
    createdAt?: Date | string
    post: CommunityPostCreateNestedOneWithoutRepliesInput
  }

  export type PostReplyUncheckedCreateWithoutAuthorInput = {
    id?: string
    postId: string
    content: string
    createdAt?: Date | string
  }

  export type PostReplyCreateOrConnectWithoutAuthorInput = {
    where: PostReplyWhereUniqueInput
    create: XOR<PostReplyCreateWithoutAuthorInput, PostReplyUncheckedCreateWithoutAuthorInput>
  }

  export type PostReplyCreateManyAuthorInputEnvelope = {
    data: PostReplyCreateManyAuthorInput | PostReplyCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PostReportCreateWithoutReporterInput = {
    id?: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    post: CommunityPostCreateNestedOneWithoutReportsInput
  }

  export type PostReportUncheckedCreateWithoutReporterInput = {
    id?: string
    postId: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
  }

  export type PostReportCreateOrConnectWithoutReporterInput = {
    where: PostReportWhereUniqueInput
    create: XOR<PostReportCreateWithoutReporterInput, PostReportUncheckedCreateWithoutReporterInput>
  }

  export type PostReportCreateManyReporterInputEnvelope = {
    data: PostReportCreateManyReporterInput | PostReportCreateManyReporterInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutStudentInput = {
    id?: string
    alias: string
    date: Date | string
    timeSlot: string
    mode: $Enums.AppointmentMode
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    counselor: UserCreateNestedOneWithoutCounselorAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutStudentInput = {
    id?: string
    counselorId: string
    alias: string
    date: Date | string
    timeSlot: string
    mode: $Enums.AppointmentMode
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutStudentInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutStudentInput, AppointmentUncheckedCreateWithoutStudentInput>
  }

  export type AppointmentCreateManyStudentInputEnvelope = {
    data: AppointmentCreateManyStudentInput | AppointmentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type VentMessageCreateWithoutStudentInput = {
    id?: string
    content: string
    reactions?: VentMessageCreatereactionsInput | string[]
    status?: $Enums.VentStatus
    createdAt?: Date | string
    counselor?: UserCreateNestedOneWithoutCounselorVentsInput
  }

  export type VentMessageUncheckedCreateWithoutStudentInput = {
    id?: string
    counselorId?: string | null
    content: string
    reactions?: VentMessageCreatereactionsInput | string[]
    status?: $Enums.VentStatus
    createdAt?: Date | string
  }

  export type VentMessageCreateOrConnectWithoutStudentInput = {
    where: VentMessageWhereUniqueInput
    create: XOR<VentMessageCreateWithoutStudentInput, VentMessageUncheckedCreateWithoutStudentInput>
  }

  export type VentMessageCreateManyStudentInputEnvelope = {
    data: VentMessageCreateManyStudentInput | VentMessageCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ChatSessionCreateWithoutStudentInput = {
    id?: string
    mode?: $Enums.AppointmentMode
    status?: $Enums.ChatSessionStatus
    createdAt?: Date | string
    counselor: UserCreateNestedOneWithoutCounselorChatSessionsInput
    messages?: ChatMessageCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUncheckedCreateWithoutStudentInput = {
    id?: string
    counselorId: string
    mode?: $Enums.AppointmentMode
    status?: $Enums.ChatSessionStatus
    createdAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionCreateOrConnectWithoutStudentInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutStudentInput, ChatSessionUncheckedCreateWithoutStudentInput>
  }

  export type ChatSessionCreateManyStudentInputEnvelope = {
    data: ChatSessionCreateManyStudentInput | ChatSessionCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ChatMessageCreateWithoutSenderInput = {
    id?: string
    content: string
    createdAt?: Date | string
    session: ChatSessionCreateNestedOneWithoutMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutSenderInput = {
    id?: string
    sessionId: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput>
  }

  export type ChatMessageCreateManySenderInputEnvelope = {
    data: ChatMessageCreateManySenderInput | ChatMessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentCreateWithoutCounselorInput = {
    id?: string
    alias: string
    date: Date | string
    timeSlot: string
    mode: $Enums.AppointmentMode
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
    student: UserCreateNestedOneWithoutStudentAppointmentsInput
  }

  export type AppointmentUncheckedCreateWithoutCounselorInput = {
    id?: string
    studentId: string
    alias: string
    date: Date | string
    timeSlot: string
    mode: $Enums.AppointmentMode
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type AppointmentCreateOrConnectWithoutCounselorInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutCounselorInput, AppointmentUncheckedCreateWithoutCounselorInput>
  }

  export type AppointmentCreateManyCounselorInputEnvelope = {
    data: AppointmentCreateManyCounselorInput | AppointmentCreateManyCounselorInput[]
    skipDuplicates?: boolean
  }

  export type VentMessageCreateWithoutCounselorInput = {
    id?: string
    content: string
    reactions?: VentMessageCreatereactionsInput | string[]
    status?: $Enums.VentStatus
    createdAt?: Date | string
    student: UserCreateNestedOneWithoutVentMessagesInput
  }

  export type VentMessageUncheckedCreateWithoutCounselorInput = {
    id?: string
    studentId: string
    content: string
    reactions?: VentMessageCreatereactionsInput | string[]
    status?: $Enums.VentStatus
    createdAt?: Date | string
  }

  export type VentMessageCreateOrConnectWithoutCounselorInput = {
    where: VentMessageWhereUniqueInput
    create: XOR<VentMessageCreateWithoutCounselorInput, VentMessageUncheckedCreateWithoutCounselorInput>
  }

  export type VentMessageCreateManyCounselorInputEnvelope = {
    data: VentMessageCreateManyCounselorInput | VentMessageCreateManyCounselorInput[]
    skipDuplicates?: boolean
  }

  export type ChatSessionCreateWithoutCounselorInput = {
    id?: string
    mode?: $Enums.AppointmentMode
    status?: $Enums.ChatSessionStatus
    createdAt?: Date | string
    student: UserCreateNestedOneWithoutStudentChatSessionsInput
    messages?: ChatMessageCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionUncheckedCreateWithoutCounselorInput = {
    id?: string
    studentId: string
    mode?: $Enums.AppointmentMode
    status?: $Enums.ChatSessionStatus
    createdAt?: Date | string
    messages?: ChatMessageUncheckedCreateNestedManyWithoutSessionInput
  }

  export type ChatSessionCreateOrConnectWithoutCounselorInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutCounselorInput, ChatSessionUncheckedCreateWithoutCounselorInput>
  }

  export type ChatSessionCreateManyCounselorInputEnvelope = {
    data: ChatSessionCreateManyCounselorInput | ChatSessionCreateManyCounselorInput[]
    skipDuplicates?: boolean
  }

  export type CounselorProfileUpsertWithoutUserInput = {
    update: XOR<CounselorProfileUpdateWithoutUserInput, CounselorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<CounselorProfileCreateWithoutUserInput, CounselorProfileUncheckedCreateWithoutUserInput>
    where?: CounselorProfileWhereInput
  }

  export type CounselorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: CounselorProfileWhereInput
    data: XOR<CounselorProfileUpdateWithoutUserInput, CounselorProfileUncheckedUpdateWithoutUserInput>
  }

  export type CounselorProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    workPhone?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    officeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CounselorProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeId?: NullableStringFieldUpdateOperationsInput | string | null
    workPhone?: NullableStringFieldUpdateOperationsInput | string | null
    license?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    officeLocation?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MoodCheckinUpsertWithWhereUniqueWithoutUserInput = {
    where: MoodCheckinWhereUniqueInput
    update: XOR<MoodCheckinUpdateWithoutUserInput, MoodCheckinUncheckedUpdateWithoutUserInput>
    create: XOR<MoodCheckinCreateWithoutUserInput, MoodCheckinUncheckedCreateWithoutUserInput>
  }

  export type MoodCheckinUpdateWithWhereUniqueWithoutUserInput = {
    where: MoodCheckinWhereUniqueInput
    data: XOR<MoodCheckinUpdateWithoutUserInput, MoodCheckinUncheckedUpdateWithoutUserInput>
  }

  export type MoodCheckinUpdateManyWithWhereWithoutUserInput = {
    where: MoodCheckinScalarWhereInput
    data: XOR<MoodCheckinUpdateManyMutationInput, MoodCheckinUncheckedUpdateManyWithoutUserInput>
  }

  export type MoodCheckinScalarWhereInput = {
    AND?: MoodCheckinScalarWhereInput | MoodCheckinScalarWhereInput[]
    OR?: MoodCheckinScalarWhereInput[]
    NOT?: MoodCheckinScalarWhereInput | MoodCheckinScalarWhereInput[]
    id?: StringFilter<"MoodCheckin"> | string
    userId?: StringFilter<"MoodCheckin"> | string
    mood?: EnumMoodFilter<"MoodCheckin"> | $Enums.Mood
    quote?: StringNullableFilter<"MoodCheckin"> | string | null
    tasks?: StringNullableListFilter<"MoodCheckin">
    createdAt?: DateTimeFilter<"MoodCheckin"> | Date | string
  }

  export type JournalEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: JournalEntryWhereUniqueInput
    update: XOR<JournalEntryUpdateWithoutUserInput, JournalEntryUncheckedUpdateWithoutUserInput>
    create: XOR<JournalEntryCreateWithoutUserInput, JournalEntryUncheckedCreateWithoutUserInput>
  }

  export type JournalEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: JournalEntryWhereUniqueInput
    data: XOR<JournalEntryUpdateWithoutUserInput, JournalEntryUncheckedUpdateWithoutUserInput>
  }

  export type JournalEntryUpdateManyWithWhereWithoutUserInput = {
    where: JournalEntryScalarWhereInput
    data: XOR<JournalEntryUpdateManyMutationInput, JournalEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type JournalEntryScalarWhereInput = {
    AND?: JournalEntryScalarWhereInput | JournalEntryScalarWhereInput[]
    OR?: JournalEntryScalarWhereInput[]
    NOT?: JournalEntryScalarWhereInput | JournalEntryScalarWhereInput[]
    id?: StringFilter<"JournalEntry"> | string
    userId?: StringFilter<"JournalEntry"> | string
    title?: StringFilter<"JournalEntry"> | string
    content?: StringFilter<"JournalEntry"> | string
    mood?: EnumMoodFilter<"JournalEntry"> | $Enums.Mood
    createdAt?: DateTimeFilter<"JournalEntry"> | Date | string
    updatedAt?: DateTimeFilter<"JournalEntry"> | Date | string
  }

  export type CommunityPostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommunityPostWhereUniqueInput
    update: XOR<CommunityPostUpdateWithoutAuthorInput, CommunityPostUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommunityPostCreateWithoutAuthorInput, CommunityPostUncheckedCreateWithoutAuthorInput>
  }

  export type CommunityPostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommunityPostWhereUniqueInput
    data: XOR<CommunityPostUpdateWithoutAuthorInput, CommunityPostUncheckedUpdateWithoutAuthorInput>
  }

  export type CommunityPostUpdateManyWithWhereWithoutAuthorInput = {
    where: CommunityPostScalarWhereInput
    data: XOR<CommunityPostUpdateManyMutationInput, CommunityPostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CommunityPostScalarWhereInput = {
    AND?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
    OR?: CommunityPostScalarWhereInput[]
    NOT?: CommunityPostScalarWhereInput | CommunityPostScalarWhereInput[]
    id?: StringFilter<"CommunityPost"> | string
    authorId?: StringFilter<"CommunityPost"> | string
    title?: StringFilter<"CommunityPost"> | string
    content?: StringFilter<"CommunityPost"> | string
    tags?: StringNullableListFilter<"CommunityPost">
    isReported?: BoolFilter<"CommunityPost"> | boolean
    createdAt?: DateTimeFilter<"CommunityPost"> | Date | string
  }

  export type PostLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: PostLikeWhereUniqueInput
    update: XOR<PostLikeUpdateWithoutUserInput, PostLikeUncheckedUpdateWithoutUserInput>
    create: XOR<PostLikeCreateWithoutUserInput, PostLikeUncheckedCreateWithoutUserInput>
  }

  export type PostLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: PostLikeWhereUniqueInput
    data: XOR<PostLikeUpdateWithoutUserInput, PostLikeUncheckedUpdateWithoutUserInput>
  }

  export type PostLikeUpdateManyWithWhereWithoutUserInput = {
    where: PostLikeScalarWhereInput
    data: XOR<PostLikeUpdateManyMutationInput, PostLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type PostLikeScalarWhereInput = {
    AND?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
    OR?: PostLikeScalarWhereInput[]
    NOT?: PostLikeScalarWhereInput | PostLikeScalarWhereInput[]
    id?: StringFilter<"PostLike"> | string
    postId?: StringFilter<"PostLike"> | string
    userId?: StringFilter<"PostLike"> | string
    createdAt?: DateTimeFilter<"PostLike"> | Date | string
  }

  export type PostReplyUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostReplyWhereUniqueInput
    update: XOR<PostReplyUpdateWithoutAuthorInput, PostReplyUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostReplyCreateWithoutAuthorInput, PostReplyUncheckedCreateWithoutAuthorInput>
  }

  export type PostReplyUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostReplyWhereUniqueInput
    data: XOR<PostReplyUpdateWithoutAuthorInput, PostReplyUncheckedUpdateWithoutAuthorInput>
  }

  export type PostReplyUpdateManyWithWhereWithoutAuthorInput = {
    where: PostReplyScalarWhereInput
    data: XOR<PostReplyUpdateManyMutationInput, PostReplyUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostReplyScalarWhereInput = {
    AND?: PostReplyScalarWhereInput | PostReplyScalarWhereInput[]
    OR?: PostReplyScalarWhereInput[]
    NOT?: PostReplyScalarWhereInput | PostReplyScalarWhereInput[]
    id?: StringFilter<"PostReply"> | string
    postId?: StringFilter<"PostReply"> | string
    authorId?: StringFilter<"PostReply"> | string
    content?: StringFilter<"PostReply"> | string
    createdAt?: DateTimeFilter<"PostReply"> | Date | string
  }

  export type PostReportUpsertWithWhereUniqueWithoutReporterInput = {
    where: PostReportWhereUniqueInput
    update: XOR<PostReportUpdateWithoutReporterInput, PostReportUncheckedUpdateWithoutReporterInput>
    create: XOR<PostReportCreateWithoutReporterInput, PostReportUncheckedCreateWithoutReporterInput>
  }

  export type PostReportUpdateWithWhereUniqueWithoutReporterInput = {
    where: PostReportWhereUniqueInput
    data: XOR<PostReportUpdateWithoutReporterInput, PostReportUncheckedUpdateWithoutReporterInput>
  }

  export type PostReportUpdateManyWithWhereWithoutReporterInput = {
    where: PostReportScalarWhereInput
    data: XOR<PostReportUpdateManyMutationInput, PostReportUncheckedUpdateManyWithoutReporterInput>
  }

  export type PostReportScalarWhereInput = {
    AND?: PostReportScalarWhereInput | PostReportScalarWhereInput[]
    OR?: PostReportScalarWhereInput[]
    NOT?: PostReportScalarWhereInput | PostReportScalarWhereInput[]
    id?: StringFilter<"PostReport"> | string
    postId?: StringFilter<"PostReport"> | string
    reporterId?: StringFilter<"PostReport"> | string
    reason?: StringFilter<"PostReport"> | string
    status?: EnumReportStatusFilter<"PostReport"> | $Enums.ReportStatus
    createdAt?: DateTimeFilter<"PostReport"> | Date | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutStudentInput, AppointmentUncheckedUpdateWithoutStudentInput>
    create: XOR<AppointmentCreateWithoutStudentInput, AppointmentUncheckedCreateWithoutStudentInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutStudentInput, AppointmentUncheckedUpdateWithoutStudentInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutStudentInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutStudentInput>
  }

  export type AppointmentScalarWhereInput = {
    AND?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    OR?: AppointmentScalarWhereInput[]
    NOT?: AppointmentScalarWhereInput | AppointmentScalarWhereInput[]
    id?: StringFilter<"Appointment"> | string
    studentId?: StringFilter<"Appointment"> | string
    counselorId?: StringFilter<"Appointment"> | string
    alias?: StringFilter<"Appointment"> | string
    date?: DateTimeFilter<"Appointment"> | Date | string
    timeSlot?: StringFilter<"Appointment"> | string
    mode?: EnumAppointmentModeFilter<"Appointment"> | $Enums.AppointmentMode
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    notes?: StringNullableFilter<"Appointment"> | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
  }

  export type VentMessageUpsertWithWhereUniqueWithoutStudentInput = {
    where: VentMessageWhereUniqueInput
    update: XOR<VentMessageUpdateWithoutStudentInput, VentMessageUncheckedUpdateWithoutStudentInput>
    create: XOR<VentMessageCreateWithoutStudentInput, VentMessageUncheckedCreateWithoutStudentInput>
  }

  export type VentMessageUpdateWithWhereUniqueWithoutStudentInput = {
    where: VentMessageWhereUniqueInput
    data: XOR<VentMessageUpdateWithoutStudentInput, VentMessageUncheckedUpdateWithoutStudentInput>
  }

  export type VentMessageUpdateManyWithWhereWithoutStudentInput = {
    where: VentMessageScalarWhereInput
    data: XOR<VentMessageUpdateManyMutationInput, VentMessageUncheckedUpdateManyWithoutStudentInput>
  }

  export type VentMessageScalarWhereInput = {
    AND?: VentMessageScalarWhereInput | VentMessageScalarWhereInput[]
    OR?: VentMessageScalarWhereInput[]
    NOT?: VentMessageScalarWhereInput | VentMessageScalarWhereInput[]
    id?: StringFilter<"VentMessage"> | string
    studentId?: StringFilter<"VentMessage"> | string
    counselorId?: StringNullableFilter<"VentMessage"> | string | null
    content?: StringFilter<"VentMessage"> | string
    reactions?: StringNullableListFilter<"VentMessage">
    status?: EnumVentStatusFilter<"VentMessage"> | $Enums.VentStatus
    createdAt?: DateTimeFilter<"VentMessage"> | Date | string
  }

  export type ChatSessionUpsertWithWhereUniqueWithoutStudentInput = {
    where: ChatSessionWhereUniqueInput
    update: XOR<ChatSessionUpdateWithoutStudentInput, ChatSessionUncheckedUpdateWithoutStudentInput>
    create: XOR<ChatSessionCreateWithoutStudentInput, ChatSessionUncheckedCreateWithoutStudentInput>
  }

  export type ChatSessionUpdateWithWhereUniqueWithoutStudentInput = {
    where: ChatSessionWhereUniqueInput
    data: XOR<ChatSessionUpdateWithoutStudentInput, ChatSessionUncheckedUpdateWithoutStudentInput>
  }

  export type ChatSessionUpdateManyWithWhereWithoutStudentInput = {
    where: ChatSessionScalarWhereInput
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyWithoutStudentInput>
  }

  export type ChatSessionScalarWhereInput = {
    AND?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    OR?: ChatSessionScalarWhereInput[]
    NOT?: ChatSessionScalarWhereInput | ChatSessionScalarWhereInput[]
    id?: StringFilter<"ChatSession"> | string
    studentId?: StringFilter<"ChatSession"> | string
    counselorId?: StringFilter<"ChatSession"> | string
    mode?: EnumAppointmentModeFilter<"ChatSession"> | $Enums.AppointmentMode
    status?: EnumChatSessionStatusFilter<"ChatSession"> | $Enums.ChatSessionStatus
    createdAt?: DateTimeFilter<"ChatSession"> | Date | string
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutSenderInput, ChatMessageUncheckedUpdateWithoutSenderInput>
    create: XOR<ChatMessageCreateWithoutSenderInput, ChatMessageUncheckedCreateWithoutSenderInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutSenderInput, ChatMessageUncheckedUpdateWithoutSenderInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutSenderInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type ChatMessageScalarWhereInput = {
    AND?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    OR?: ChatMessageScalarWhereInput[]
    NOT?: ChatMessageScalarWhereInput | ChatMessageScalarWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    sessionId?: StringFilter<"ChatMessage"> | string
    senderId?: StringFilter<"ChatMessage"> | string
    content?: StringFilter<"ChatMessage"> | string
    createdAt?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type AppointmentUpsertWithWhereUniqueWithoutCounselorInput = {
    where: AppointmentWhereUniqueInput
    update: XOR<AppointmentUpdateWithoutCounselorInput, AppointmentUncheckedUpdateWithoutCounselorInput>
    create: XOR<AppointmentCreateWithoutCounselorInput, AppointmentUncheckedCreateWithoutCounselorInput>
  }

  export type AppointmentUpdateWithWhereUniqueWithoutCounselorInput = {
    where: AppointmentWhereUniqueInput
    data: XOR<AppointmentUpdateWithoutCounselorInput, AppointmentUncheckedUpdateWithoutCounselorInput>
  }

  export type AppointmentUpdateManyWithWhereWithoutCounselorInput = {
    where: AppointmentScalarWhereInput
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyWithoutCounselorInput>
  }

  export type VentMessageUpsertWithWhereUniqueWithoutCounselorInput = {
    where: VentMessageWhereUniqueInput
    update: XOR<VentMessageUpdateWithoutCounselorInput, VentMessageUncheckedUpdateWithoutCounselorInput>
    create: XOR<VentMessageCreateWithoutCounselorInput, VentMessageUncheckedCreateWithoutCounselorInput>
  }

  export type VentMessageUpdateWithWhereUniqueWithoutCounselorInput = {
    where: VentMessageWhereUniqueInput
    data: XOR<VentMessageUpdateWithoutCounselorInput, VentMessageUncheckedUpdateWithoutCounselorInput>
  }

  export type VentMessageUpdateManyWithWhereWithoutCounselorInput = {
    where: VentMessageScalarWhereInput
    data: XOR<VentMessageUpdateManyMutationInput, VentMessageUncheckedUpdateManyWithoutCounselorInput>
  }

  export type ChatSessionUpsertWithWhereUniqueWithoutCounselorInput = {
    where: ChatSessionWhereUniqueInput
    update: XOR<ChatSessionUpdateWithoutCounselorInput, ChatSessionUncheckedUpdateWithoutCounselorInput>
    create: XOR<ChatSessionCreateWithoutCounselorInput, ChatSessionUncheckedCreateWithoutCounselorInput>
  }

  export type ChatSessionUpdateWithWhereUniqueWithoutCounselorInput = {
    where: ChatSessionWhereUniqueInput
    data: XOR<ChatSessionUpdateWithoutCounselorInput, ChatSessionUncheckedUpdateWithoutCounselorInput>
  }

  export type ChatSessionUpdateManyWithWhereWithoutCounselorInput = {
    where: ChatSessionScalarWhereInput
    data: XOR<ChatSessionUpdateManyMutationInput, ChatSessionUncheckedUpdateManyWithoutCounselorInput>
  }

  export type UserCreateWithoutCounselorProfileInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    moodCheckins?: MoodCheckinCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    postReplies?: PostReplyCreateNestedManyWithoutAuthorInput
    postReports?: PostReportCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionCreateNestedManyWithoutCounselorInput
  }

  export type UserUncheckedCreateWithoutCounselorProfileInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    moodCheckins?: MoodCheckinUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    postReplies?: PostReplyUncheckedCreateNestedManyWithoutAuthorInput
    postReports?: PostReportUncheckedCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentUncheckedCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageUncheckedCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentUncheckedCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageUncheckedCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutCounselorInput
  }

  export type UserCreateOrConnectWithoutCounselorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCounselorProfileInput, UserUncheckedCreateWithoutCounselorProfileInput>
  }

  export type UserUpsertWithoutCounselorProfileInput = {
    update: XOR<UserUpdateWithoutCounselorProfileInput, UserUncheckedUpdateWithoutCounselorProfileInput>
    create: XOR<UserCreateWithoutCounselorProfileInput, UserUncheckedCreateWithoutCounselorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCounselorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCounselorProfileInput, UserUncheckedUpdateWithoutCounselorProfileInput>
  }

  export type UserUpdateWithoutCounselorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moodCheckins?: MoodCheckinUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUpdateManyWithoutCounselorNestedInput
  }

  export type UserUncheckedUpdateWithoutCounselorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moodCheckins?: MoodCheckinUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUncheckedUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUncheckedUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUncheckedUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUncheckedUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUncheckedUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUncheckedUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUncheckedUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUncheckedUpdateManyWithoutCounselorNestedInput
  }

  export type UserCreateWithoutMoodCheckinsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileCreateNestedOneWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    postReplies?: PostReplyCreateNestedManyWithoutAuthorInput
    postReports?: PostReportCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionCreateNestedManyWithoutCounselorInput
  }

  export type UserUncheckedCreateWithoutMoodCheckinsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileUncheckedCreateNestedOneWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    postReplies?: PostReplyUncheckedCreateNestedManyWithoutAuthorInput
    postReports?: PostReportUncheckedCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentUncheckedCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageUncheckedCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentUncheckedCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageUncheckedCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutCounselorInput
  }

  export type UserCreateOrConnectWithoutMoodCheckinsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMoodCheckinsInput, UserUncheckedCreateWithoutMoodCheckinsInput>
  }

  export type UserUpsertWithoutMoodCheckinsInput = {
    update: XOR<UserUpdateWithoutMoodCheckinsInput, UserUncheckedUpdateWithoutMoodCheckinsInput>
    create: XOR<UserCreateWithoutMoodCheckinsInput, UserUncheckedCreateWithoutMoodCheckinsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMoodCheckinsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMoodCheckinsInput, UserUncheckedUpdateWithoutMoodCheckinsInput>
  }

  export type UserUpdateWithoutMoodCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUpdateOneWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUpdateManyWithoutCounselorNestedInput
  }

  export type UserUncheckedUpdateWithoutMoodCheckinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUncheckedUpdateOneWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUncheckedUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUncheckedUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUncheckedUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUncheckedUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUncheckedUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUncheckedUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUncheckedUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUncheckedUpdateManyWithoutCounselorNestedInput
  }

  export type UserCreateWithoutJournalEntriesInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    postReplies?: PostReplyCreateNestedManyWithoutAuthorInput
    postReports?: PostReportCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionCreateNestedManyWithoutCounselorInput
  }

  export type UserUncheckedCreateWithoutJournalEntriesInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileUncheckedCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    postReplies?: PostReplyUncheckedCreateNestedManyWithoutAuthorInput
    postReports?: PostReportUncheckedCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentUncheckedCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageUncheckedCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentUncheckedCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageUncheckedCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutCounselorInput
  }

  export type UserCreateOrConnectWithoutJournalEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJournalEntriesInput, UserUncheckedCreateWithoutJournalEntriesInput>
  }

  export type UserUpsertWithoutJournalEntriesInput = {
    update: XOR<UserUpdateWithoutJournalEntriesInput, UserUncheckedUpdateWithoutJournalEntriesInput>
    create: XOR<UserCreateWithoutJournalEntriesInput, UserUncheckedCreateWithoutJournalEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJournalEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJournalEntriesInput, UserUncheckedUpdateWithoutJournalEntriesInput>
  }

  export type UserUpdateWithoutJournalEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUpdateManyWithoutCounselorNestedInput
  }

  export type UserUncheckedUpdateWithoutJournalEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUncheckedUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUncheckedUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUncheckedUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUncheckedUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUncheckedUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUncheckedUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUncheckedUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUncheckedUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUncheckedUpdateManyWithoutCounselorNestedInput
  }

  export type UserCreateWithoutCommunityPostsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    postReplies?: PostReplyCreateNestedManyWithoutAuthorInput
    postReports?: PostReportCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionCreateNestedManyWithoutCounselorInput
  }

  export type UserUncheckedCreateWithoutCommunityPostsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileUncheckedCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    postReplies?: PostReplyUncheckedCreateNestedManyWithoutAuthorInput
    postReports?: PostReportUncheckedCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentUncheckedCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageUncheckedCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentUncheckedCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageUncheckedCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutCounselorInput
  }

  export type UserCreateOrConnectWithoutCommunityPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommunityPostsInput, UserUncheckedCreateWithoutCommunityPostsInput>
  }

  export type PostLikeCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPostLikesInput
  }

  export type PostLikeUncheckedCreateWithoutPostInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type PostLikeCreateOrConnectWithoutPostInput = {
    where: PostLikeWhereUniqueInput
    create: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput>
  }

  export type PostLikeCreateManyPostInputEnvelope = {
    data: PostLikeCreateManyPostInput | PostLikeCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostReplyCreateWithoutPostInput = {
    id?: string
    content: string
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutPostRepliesInput
  }

  export type PostReplyUncheckedCreateWithoutPostInput = {
    id?: string
    authorId: string
    content: string
    createdAt?: Date | string
  }

  export type PostReplyCreateOrConnectWithoutPostInput = {
    where: PostReplyWhereUniqueInput
    create: XOR<PostReplyCreateWithoutPostInput, PostReplyUncheckedCreateWithoutPostInput>
  }

  export type PostReplyCreateManyPostInputEnvelope = {
    data: PostReplyCreateManyPostInput | PostReplyCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostReportCreateWithoutPostInput = {
    id?: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    reporter: UserCreateNestedOneWithoutPostReportsInput
  }

  export type PostReportUncheckedCreateWithoutPostInput = {
    id?: string
    reporterId: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
  }

  export type PostReportCreateOrConnectWithoutPostInput = {
    where: PostReportWhereUniqueInput
    create: XOR<PostReportCreateWithoutPostInput, PostReportUncheckedCreateWithoutPostInput>
  }

  export type PostReportCreateManyPostInputEnvelope = {
    data: PostReportCreateManyPostInput | PostReportCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCommunityPostsInput = {
    update: XOR<UserUpdateWithoutCommunityPostsInput, UserUncheckedUpdateWithoutCommunityPostsInput>
    create: XOR<UserCreateWithoutCommunityPostsInput, UserUncheckedCreateWithoutCommunityPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommunityPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommunityPostsInput, UserUncheckedUpdateWithoutCommunityPostsInput>
  }

  export type UserUpdateWithoutCommunityPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUpdateManyWithoutCounselorNestedInput
  }

  export type UserUncheckedUpdateWithoutCommunityPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUncheckedUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUncheckedUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUncheckedUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUncheckedUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUncheckedUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUncheckedUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUncheckedUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUncheckedUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUncheckedUpdateManyWithoutCounselorNestedInput
  }

  export type PostLikeUpsertWithWhereUniqueWithoutPostInput = {
    where: PostLikeWhereUniqueInput
    update: XOR<PostLikeUpdateWithoutPostInput, PostLikeUncheckedUpdateWithoutPostInput>
    create: XOR<PostLikeCreateWithoutPostInput, PostLikeUncheckedCreateWithoutPostInput>
  }

  export type PostLikeUpdateWithWhereUniqueWithoutPostInput = {
    where: PostLikeWhereUniqueInput
    data: XOR<PostLikeUpdateWithoutPostInput, PostLikeUncheckedUpdateWithoutPostInput>
  }

  export type PostLikeUpdateManyWithWhereWithoutPostInput = {
    where: PostLikeScalarWhereInput
    data: XOR<PostLikeUpdateManyMutationInput, PostLikeUncheckedUpdateManyWithoutPostInput>
  }

  export type PostReplyUpsertWithWhereUniqueWithoutPostInput = {
    where: PostReplyWhereUniqueInput
    update: XOR<PostReplyUpdateWithoutPostInput, PostReplyUncheckedUpdateWithoutPostInput>
    create: XOR<PostReplyCreateWithoutPostInput, PostReplyUncheckedCreateWithoutPostInput>
  }

  export type PostReplyUpdateWithWhereUniqueWithoutPostInput = {
    where: PostReplyWhereUniqueInput
    data: XOR<PostReplyUpdateWithoutPostInput, PostReplyUncheckedUpdateWithoutPostInput>
  }

  export type PostReplyUpdateManyWithWhereWithoutPostInput = {
    where: PostReplyScalarWhereInput
    data: XOR<PostReplyUpdateManyMutationInput, PostReplyUncheckedUpdateManyWithoutPostInput>
  }

  export type PostReportUpsertWithWhereUniqueWithoutPostInput = {
    where: PostReportWhereUniqueInput
    update: XOR<PostReportUpdateWithoutPostInput, PostReportUncheckedUpdateWithoutPostInput>
    create: XOR<PostReportCreateWithoutPostInput, PostReportUncheckedCreateWithoutPostInput>
  }

  export type PostReportUpdateWithWhereUniqueWithoutPostInput = {
    where: PostReportWhereUniqueInput
    data: XOR<PostReportUpdateWithoutPostInput, PostReportUncheckedUpdateWithoutPostInput>
  }

  export type PostReportUpdateManyWithWhereWithoutPostInput = {
    where: PostReportScalarWhereInput
    data: XOR<PostReportUpdateManyMutationInput, PostReportUncheckedUpdateManyWithoutPostInput>
  }

  export type CommunityPostCreateWithoutLikesInput = {
    id?: string
    title: string
    content: string
    tags?: CommunityPostCreatetagsInput | string[]
    isReported?: boolean
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutCommunityPostsInput
    replies?: PostReplyCreateNestedManyWithoutPostInput
    reports?: PostReportCreateNestedManyWithoutPostInput
  }

  export type CommunityPostUncheckedCreateWithoutLikesInput = {
    id?: string
    authorId: string
    title: string
    content: string
    tags?: CommunityPostCreatetagsInput | string[]
    isReported?: boolean
    createdAt?: Date | string
    replies?: PostReplyUncheckedCreateNestedManyWithoutPostInput
    reports?: PostReportUncheckedCreateNestedManyWithoutPostInput
  }

  export type CommunityPostCreateOrConnectWithoutLikesInput = {
    where: CommunityPostWhereUniqueInput
    create: XOR<CommunityPostCreateWithoutLikesInput, CommunityPostUncheckedCreateWithoutLikesInput>
  }

  export type UserCreateWithoutPostLikesInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutAuthorInput
    postReplies?: PostReplyCreateNestedManyWithoutAuthorInput
    postReports?: PostReportCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionCreateNestedManyWithoutCounselorInput
  }

  export type UserUncheckedCreateWithoutPostLikesInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileUncheckedCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutAuthorInput
    postReplies?: PostReplyUncheckedCreateNestedManyWithoutAuthorInput
    postReports?: PostReportUncheckedCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentUncheckedCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageUncheckedCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentUncheckedCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageUncheckedCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutCounselorInput
  }

  export type UserCreateOrConnectWithoutPostLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostLikesInput, UserUncheckedCreateWithoutPostLikesInput>
  }

  export type CommunityPostUpsertWithoutLikesInput = {
    update: XOR<CommunityPostUpdateWithoutLikesInput, CommunityPostUncheckedUpdateWithoutLikesInput>
    create: XOR<CommunityPostCreateWithoutLikesInput, CommunityPostUncheckedCreateWithoutLikesInput>
    where?: CommunityPostWhereInput
  }

  export type CommunityPostUpdateToOneWithWhereWithoutLikesInput = {
    where?: CommunityPostWhereInput
    data: XOR<CommunityPostUpdateWithoutLikesInput, CommunityPostUncheckedUpdateWithoutLikesInput>
  }

  export type CommunityPostUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: CommunityPostUpdatetagsInput | string[]
    isReported?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommunityPostsNestedInput
    replies?: PostReplyUpdateManyWithoutPostNestedInput
    reports?: PostReportUpdateManyWithoutPostNestedInput
  }

  export type CommunityPostUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: CommunityPostUpdatetagsInput | string[]
    isReported?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: PostReplyUncheckedUpdateManyWithoutPostNestedInput
    reports?: PostReportUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutPostLikesInput = {
    update: XOR<UserUpdateWithoutPostLikesInput, UserUncheckedUpdateWithoutPostLikesInput>
    create: XOR<UserCreateWithoutPostLikesInput, UserUncheckedCreateWithoutPostLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostLikesInput, UserUncheckedUpdateWithoutPostLikesInput>
  }

  export type UserUpdateWithoutPostLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutAuthorNestedInput
    postReplies?: PostReplyUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUpdateManyWithoutCounselorNestedInput
  }

  export type UserUncheckedUpdateWithoutPostLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUncheckedUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutAuthorNestedInput
    postReplies?: PostReplyUncheckedUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUncheckedUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUncheckedUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUncheckedUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUncheckedUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUncheckedUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUncheckedUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUncheckedUpdateManyWithoutCounselorNestedInput
  }

  export type CommunityPostCreateWithoutRepliesInput = {
    id?: string
    title: string
    content: string
    tags?: CommunityPostCreatetagsInput | string[]
    isReported?: boolean
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutCommunityPostsInput
    likes?: PostLikeCreateNestedManyWithoutPostInput
    reports?: PostReportCreateNestedManyWithoutPostInput
  }

  export type CommunityPostUncheckedCreateWithoutRepliesInput = {
    id?: string
    authorId: string
    title: string
    content: string
    tags?: CommunityPostCreatetagsInput | string[]
    isReported?: boolean
    createdAt?: Date | string
    likes?: PostLikeUncheckedCreateNestedManyWithoutPostInput
    reports?: PostReportUncheckedCreateNestedManyWithoutPostInput
  }

  export type CommunityPostCreateOrConnectWithoutRepliesInput = {
    where: CommunityPostWhereUniqueInput
    create: XOR<CommunityPostCreateWithoutRepliesInput, CommunityPostUncheckedCreateWithoutRepliesInput>
  }

  export type UserCreateWithoutPostRepliesInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    postReports?: PostReportCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionCreateNestedManyWithoutCounselorInput
  }

  export type UserUncheckedCreateWithoutPostRepliesInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileUncheckedCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    postReports?: PostReportUncheckedCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentUncheckedCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageUncheckedCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentUncheckedCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageUncheckedCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutCounselorInput
  }

  export type UserCreateOrConnectWithoutPostRepliesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostRepliesInput, UserUncheckedCreateWithoutPostRepliesInput>
  }

  export type CommunityPostUpsertWithoutRepliesInput = {
    update: XOR<CommunityPostUpdateWithoutRepliesInput, CommunityPostUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommunityPostCreateWithoutRepliesInput, CommunityPostUncheckedCreateWithoutRepliesInput>
    where?: CommunityPostWhereInput
  }

  export type CommunityPostUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommunityPostWhereInput
    data: XOR<CommunityPostUpdateWithoutRepliesInput, CommunityPostUncheckedUpdateWithoutRepliesInput>
  }

  export type CommunityPostUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: CommunityPostUpdatetagsInput | string[]
    isReported?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommunityPostsNestedInput
    likes?: PostLikeUpdateManyWithoutPostNestedInput
    reports?: PostReportUpdateManyWithoutPostNestedInput
  }

  export type CommunityPostUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: CommunityPostUpdatetagsInput | string[]
    isReported?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: PostLikeUncheckedUpdateManyWithoutPostNestedInput
    reports?: PostReportUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutPostRepliesInput = {
    update: XOR<UserUpdateWithoutPostRepliesInput, UserUncheckedUpdateWithoutPostRepliesInput>
    create: XOR<UserCreateWithoutPostRepliesInput, UserUncheckedCreateWithoutPostRepliesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostRepliesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostRepliesInput, UserUncheckedUpdateWithoutPostRepliesInput>
  }

  export type UserUpdateWithoutPostRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    postReports?: PostReportUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUpdateManyWithoutCounselorNestedInput
  }

  export type UserUncheckedUpdateWithoutPostRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUncheckedUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    postReports?: PostReportUncheckedUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUncheckedUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUncheckedUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUncheckedUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUncheckedUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUncheckedUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUncheckedUpdateManyWithoutCounselorNestedInput
  }

  export type CommunityPostCreateWithoutReportsInput = {
    id?: string
    title: string
    content: string
    tags?: CommunityPostCreatetagsInput | string[]
    isReported?: boolean
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutCommunityPostsInput
    likes?: PostLikeCreateNestedManyWithoutPostInput
    replies?: PostReplyCreateNestedManyWithoutPostInput
  }

  export type CommunityPostUncheckedCreateWithoutReportsInput = {
    id?: string
    authorId: string
    title: string
    content: string
    tags?: CommunityPostCreatetagsInput | string[]
    isReported?: boolean
    createdAt?: Date | string
    likes?: PostLikeUncheckedCreateNestedManyWithoutPostInput
    replies?: PostReplyUncheckedCreateNestedManyWithoutPostInput
  }

  export type CommunityPostCreateOrConnectWithoutReportsInput = {
    where: CommunityPostWhereUniqueInput
    create: XOR<CommunityPostCreateWithoutReportsInput, CommunityPostUncheckedCreateWithoutReportsInput>
  }

  export type UserCreateWithoutPostReportsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    postReplies?: PostReplyCreateNestedManyWithoutAuthorInput
    studentAppointments?: AppointmentCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionCreateNestedManyWithoutCounselorInput
  }

  export type UserUncheckedCreateWithoutPostReportsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileUncheckedCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    postReplies?: PostReplyUncheckedCreateNestedManyWithoutAuthorInput
    studentAppointments?: AppointmentUncheckedCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageUncheckedCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentUncheckedCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageUncheckedCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutCounselorInput
  }

  export type UserCreateOrConnectWithoutPostReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostReportsInput, UserUncheckedCreateWithoutPostReportsInput>
  }

  export type CommunityPostUpsertWithoutReportsInput = {
    update: XOR<CommunityPostUpdateWithoutReportsInput, CommunityPostUncheckedUpdateWithoutReportsInput>
    create: XOR<CommunityPostCreateWithoutReportsInput, CommunityPostUncheckedCreateWithoutReportsInput>
    where?: CommunityPostWhereInput
  }

  export type CommunityPostUpdateToOneWithWhereWithoutReportsInput = {
    where?: CommunityPostWhereInput
    data: XOR<CommunityPostUpdateWithoutReportsInput, CommunityPostUncheckedUpdateWithoutReportsInput>
  }

  export type CommunityPostUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: CommunityPostUpdatetagsInput | string[]
    isReported?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommunityPostsNestedInput
    likes?: PostLikeUpdateManyWithoutPostNestedInput
    replies?: PostReplyUpdateManyWithoutPostNestedInput
  }

  export type CommunityPostUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: CommunityPostUpdatetagsInput | string[]
    isReported?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: PostLikeUncheckedUpdateManyWithoutPostNestedInput
    replies?: PostReplyUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutPostReportsInput = {
    update: XOR<UserUpdateWithoutPostReportsInput, UserUncheckedUpdateWithoutPostReportsInput>
    create: XOR<UserCreateWithoutPostReportsInput, UserUncheckedCreateWithoutPostReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostReportsInput, UserUncheckedUpdateWithoutPostReportsInput>
  }

  export type UserUpdateWithoutPostReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUpdateManyWithoutAuthorNestedInput
    studentAppointments?: AppointmentUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUpdateManyWithoutCounselorNestedInput
  }

  export type UserUncheckedUpdateWithoutPostReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUncheckedUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUncheckedUpdateManyWithoutAuthorNestedInput
    studentAppointments?: AppointmentUncheckedUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUncheckedUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUncheckedUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUncheckedUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUncheckedUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUncheckedUpdateManyWithoutCounselorNestedInput
  }

  export type UserCreateWithoutStudentAppointmentsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    postReplies?: PostReplyCreateNestedManyWithoutAuthorInput
    postReports?: PostReportCreateNestedManyWithoutReporterInput
    ventMessages?: VentMessageCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionCreateNestedManyWithoutCounselorInput
  }

  export type UserUncheckedCreateWithoutStudentAppointmentsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileUncheckedCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    postReplies?: PostReplyUncheckedCreateNestedManyWithoutAuthorInput
    postReports?: PostReportUncheckedCreateNestedManyWithoutReporterInput
    ventMessages?: VentMessageUncheckedCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentUncheckedCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageUncheckedCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutCounselorInput
  }

  export type UserCreateOrConnectWithoutStudentAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentAppointmentsInput, UserUncheckedCreateWithoutStudentAppointmentsInput>
  }

  export type UserCreateWithoutCounselorAppointmentsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    postReplies?: PostReplyCreateNestedManyWithoutAuthorInput
    postReports?: PostReportCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    counselorVents?: VentMessageCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionCreateNestedManyWithoutCounselorInput
  }

  export type UserUncheckedCreateWithoutCounselorAppointmentsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileUncheckedCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    postReplies?: PostReplyUncheckedCreateNestedManyWithoutAuthorInput
    postReports?: PostReportUncheckedCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentUncheckedCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageUncheckedCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    counselorVents?: VentMessageUncheckedCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutCounselorInput
  }

  export type UserCreateOrConnectWithoutCounselorAppointmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCounselorAppointmentsInput, UserUncheckedCreateWithoutCounselorAppointmentsInput>
  }

  export type UserUpsertWithoutStudentAppointmentsInput = {
    update: XOR<UserUpdateWithoutStudentAppointmentsInput, UserUncheckedUpdateWithoutStudentAppointmentsInput>
    create: XOR<UserCreateWithoutStudentAppointmentsInput, UserUncheckedCreateWithoutStudentAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentAppointmentsInput, UserUncheckedUpdateWithoutStudentAppointmentsInput>
  }

  export type UserUpdateWithoutStudentAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUpdateManyWithoutReporterNestedInput
    ventMessages?: VentMessageUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUpdateManyWithoutCounselorNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUncheckedUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUncheckedUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUncheckedUpdateManyWithoutReporterNestedInput
    ventMessages?: VentMessageUncheckedUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUncheckedUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUncheckedUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUncheckedUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUncheckedUpdateManyWithoutCounselorNestedInput
  }

  export type UserUpsertWithoutCounselorAppointmentsInput = {
    update: XOR<UserUpdateWithoutCounselorAppointmentsInput, UserUncheckedUpdateWithoutCounselorAppointmentsInput>
    create: XOR<UserCreateWithoutCounselorAppointmentsInput, UserUncheckedCreateWithoutCounselorAppointmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCounselorAppointmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCounselorAppointmentsInput, UserUncheckedUpdateWithoutCounselorAppointmentsInput>
  }

  export type UserUpdateWithoutCounselorAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    counselorVents?: VentMessageUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUpdateManyWithoutCounselorNestedInput
  }

  export type UserUncheckedUpdateWithoutCounselorAppointmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUncheckedUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUncheckedUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUncheckedUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUncheckedUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUncheckedUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUncheckedUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    counselorVents?: VentMessageUncheckedUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUncheckedUpdateManyWithoutCounselorNestedInput
  }

  export type UserCreateWithoutVentMessagesInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    postReplies?: PostReplyCreateNestedManyWithoutAuthorInput
    postReports?: PostReportCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionCreateNestedManyWithoutCounselorInput
  }

  export type UserUncheckedCreateWithoutVentMessagesInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileUncheckedCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    postReplies?: PostReplyUncheckedCreateNestedManyWithoutAuthorInput
    postReports?: PostReportUncheckedCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentUncheckedCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentUncheckedCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageUncheckedCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutCounselorInput
  }

  export type UserCreateOrConnectWithoutVentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVentMessagesInput, UserUncheckedCreateWithoutVentMessagesInput>
  }

  export type UserCreateWithoutCounselorVentsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    postReplies?: PostReplyCreateNestedManyWithoutAuthorInput
    postReports?: PostReportCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionCreateNestedManyWithoutCounselorInput
  }

  export type UserUncheckedCreateWithoutCounselorVentsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileUncheckedCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    postReplies?: PostReplyUncheckedCreateNestedManyWithoutAuthorInput
    postReports?: PostReportUncheckedCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentUncheckedCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageUncheckedCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentUncheckedCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutCounselorInput
  }

  export type UserCreateOrConnectWithoutCounselorVentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCounselorVentsInput, UserUncheckedCreateWithoutCounselorVentsInput>
  }

  export type UserUpsertWithoutVentMessagesInput = {
    update: XOR<UserUpdateWithoutVentMessagesInput, UserUncheckedUpdateWithoutVentMessagesInput>
    create: XOR<UserCreateWithoutVentMessagesInput, UserUncheckedCreateWithoutVentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVentMessagesInput, UserUncheckedUpdateWithoutVentMessagesInput>
  }

  export type UserUpdateWithoutVentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUpdateManyWithoutCounselorNestedInput
  }

  export type UserUncheckedUpdateWithoutVentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUncheckedUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUncheckedUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUncheckedUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUncheckedUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUncheckedUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUncheckedUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUncheckedUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUncheckedUpdateManyWithoutCounselorNestedInput
  }

  export type UserUpsertWithoutCounselorVentsInput = {
    update: XOR<UserUpdateWithoutCounselorVentsInput, UserUncheckedUpdateWithoutCounselorVentsInput>
    create: XOR<UserCreateWithoutCounselorVentsInput, UserUncheckedCreateWithoutCounselorVentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCounselorVentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCounselorVentsInput, UserUncheckedUpdateWithoutCounselorVentsInput>
  }

  export type UserUpdateWithoutCounselorVentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUpdateManyWithoutCounselorNestedInput
  }

  export type UserUncheckedUpdateWithoutCounselorVentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUncheckedUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUncheckedUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUncheckedUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUncheckedUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUncheckedUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUncheckedUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUncheckedUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUncheckedUpdateManyWithoutCounselorNestedInput
  }

  export type UserCreateWithoutStudentChatSessionsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    postReplies?: PostReplyCreateNestedManyWithoutAuthorInput
    postReports?: PostReportCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionCreateNestedManyWithoutCounselorInput
  }

  export type UserUncheckedCreateWithoutStudentChatSessionsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileUncheckedCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    postReplies?: PostReplyUncheckedCreateNestedManyWithoutAuthorInput
    postReports?: PostReportUncheckedCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentUncheckedCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageUncheckedCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentUncheckedCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageUncheckedCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutCounselorInput
  }

  export type UserCreateOrConnectWithoutStudentChatSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentChatSessionsInput, UserUncheckedCreateWithoutStudentChatSessionsInput>
  }

  export type UserCreateWithoutCounselorChatSessionsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    postReplies?: PostReplyCreateNestedManyWithoutAuthorInput
    postReports?: PostReportCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageCreateNestedManyWithoutCounselorInput
  }

  export type UserUncheckedCreateWithoutCounselorChatSessionsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileUncheckedCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    postReplies?: PostReplyUncheckedCreateNestedManyWithoutAuthorInput
    postReports?: PostReportUncheckedCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentUncheckedCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageUncheckedCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutStudentInput
    sentMessages?: ChatMessageUncheckedCreateNestedManyWithoutSenderInput
    counselorAppointments?: AppointmentUncheckedCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageUncheckedCreateNestedManyWithoutCounselorInput
  }

  export type UserCreateOrConnectWithoutCounselorChatSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCounselorChatSessionsInput, UserUncheckedCreateWithoutCounselorChatSessionsInput>
  }

  export type ChatMessageCreateWithoutSessionInput = {
    id?: string
    content: string
    createdAt?: Date | string
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type ChatMessageUncheckedCreateWithoutSessionInput = {
    id?: string
    senderId: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageCreateOrConnectWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    create: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput>
  }

  export type ChatMessageCreateManySessionInputEnvelope = {
    data: ChatMessageCreateManySessionInput | ChatMessageCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStudentChatSessionsInput = {
    update: XOR<UserUpdateWithoutStudentChatSessionsInput, UserUncheckedUpdateWithoutStudentChatSessionsInput>
    create: XOR<UserCreateWithoutStudentChatSessionsInput, UserUncheckedCreateWithoutStudentChatSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentChatSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentChatSessionsInput, UserUncheckedUpdateWithoutStudentChatSessionsInput>
  }

  export type UserUpdateWithoutStudentChatSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUpdateManyWithoutCounselorNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentChatSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUncheckedUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUncheckedUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUncheckedUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUncheckedUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUncheckedUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUncheckedUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUncheckedUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUncheckedUpdateManyWithoutCounselorNestedInput
  }

  export type UserUpsertWithoutCounselorChatSessionsInput = {
    update: XOR<UserUpdateWithoutCounselorChatSessionsInput, UserUncheckedUpdateWithoutCounselorChatSessionsInput>
    create: XOR<UserCreateWithoutCounselorChatSessionsInput, UserUncheckedCreateWithoutCounselorChatSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCounselorChatSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCounselorChatSessionsInput, UserUncheckedUpdateWithoutCounselorChatSessionsInput>
  }

  export type UserUpdateWithoutCounselorChatSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUpdateManyWithoutCounselorNestedInput
  }

  export type UserUncheckedUpdateWithoutCounselorChatSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUncheckedUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUncheckedUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUncheckedUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUncheckedUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUncheckedUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUncheckedUpdateManyWithoutStudentNestedInput
    sentMessages?: ChatMessageUncheckedUpdateManyWithoutSenderNestedInput
    counselorAppointments?: AppointmentUncheckedUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUncheckedUpdateManyWithoutCounselorNestedInput
  }

  export type ChatMessageUpsertWithWhereUniqueWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    update: XOR<ChatMessageUpdateWithoutSessionInput, ChatMessageUncheckedUpdateWithoutSessionInput>
    create: XOR<ChatMessageCreateWithoutSessionInput, ChatMessageUncheckedCreateWithoutSessionInput>
  }

  export type ChatMessageUpdateWithWhereUniqueWithoutSessionInput = {
    where: ChatMessageWhereUniqueInput
    data: XOR<ChatMessageUpdateWithoutSessionInput, ChatMessageUncheckedUpdateWithoutSessionInput>
  }

  export type ChatMessageUpdateManyWithWhereWithoutSessionInput = {
    where: ChatMessageScalarWhereInput
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyWithoutSessionInput>
  }

  export type ChatSessionCreateWithoutMessagesInput = {
    id?: string
    mode?: $Enums.AppointmentMode
    status?: $Enums.ChatSessionStatus
    createdAt?: Date | string
    student: UserCreateNestedOneWithoutStudentChatSessionsInput
    counselor: UserCreateNestedOneWithoutCounselorChatSessionsInput
  }

  export type ChatSessionUncheckedCreateWithoutMessagesInput = {
    id?: string
    studentId: string
    counselorId: string
    mode?: $Enums.AppointmentMode
    status?: $Enums.ChatSessionStatus
    createdAt?: Date | string
  }

  export type ChatSessionCreateOrConnectWithoutMessagesInput = {
    where: ChatSessionWhereUniqueInput
    create: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutSentMessagesInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeCreateNestedManyWithoutUserInput
    postReplies?: PostReplyCreateNestedManyWithoutAuthorInput
    postReports?: PostReportCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionCreateNestedManyWithoutStudentInput
    counselorAppointments?: AppointmentCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionCreateNestedManyWithoutCounselorInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    role?: $Enums.Role
    alias?: string | null
    status?: $Enums.UserStatus
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetOtp?: string | null
    resetOtpExpiry?: Date | string | null
    counselorProfile?: CounselorProfileUncheckedCreateNestedOneWithoutUserInput
    moodCheckins?: MoodCheckinUncheckedCreateNestedManyWithoutUserInput
    journalEntries?: JournalEntryUncheckedCreateNestedManyWithoutUserInput
    communityPosts?: CommunityPostUncheckedCreateNestedManyWithoutAuthorInput
    postLikes?: PostLikeUncheckedCreateNestedManyWithoutUserInput
    postReplies?: PostReplyUncheckedCreateNestedManyWithoutAuthorInput
    postReports?: PostReportUncheckedCreateNestedManyWithoutReporterInput
    studentAppointments?: AppointmentUncheckedCreateNestedManyWithoutStudentInput
    ventMessages?: VentMessageUncheckedCreateNestedManyWithoutStudentInput
    studentChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutStudentInput
    counselorAppointments?: AppointmentUncheckedCreateNestedManyWithoutCounselorInput
    counselorVents?: VentMessageUncheckedCreateNestedManyWithoutCounselorInput
    counselorChatSessions?: ChatSessionUncheckedCreateNestedManyWithoutCounselorInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type ChatSessionUpsertWithoutMessagesInput = {
    update: XOR<ChatSessionUpdateWithoutMessagesInput, ChatSessionUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatSessionCreateWithoutMessagesInput, ChatSessionUncheckedCreateWithoutMessagesInput>
    where?: ChatSessionWhereInput
  }

  export type ChatSessionUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatSessionWhereInput
    data: XOR<ChatSessionUpdateWithoutMessagesInput, ChatSessionUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatSessionUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumChatSessionStatusFieldUpdateOperationsInput | $Enums.ChatSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutStudentChatSessionsNestedInput
    counselor?: UserUpdateOneRequiredWithoutCounselorChatSessionsNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    counselorId?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumChatSessionStatusFieldUpdateOperationsInput | $Enums.ChatSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUpdateManyWithoutStudentNestedInput
    counselorAppointments?: AppointmentUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUpdateManyWithoutCounselorNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    alias?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetOtp?: NullableStringFieldUpdateOperationsInput | string | null
    resetOtpExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    counselorProfile?: CounselorProfileUncheckedUpdateOneWithoutUserNestedInput
    moodCheckins?: MoodCheckinUncheckedUpdateManyWithoutUserNestedInput
    journalEntries?: JournalEntryUncheckedUpdateManyWithoutUserNestedInput
    communityPosts?: CommunityPostUncheckedUpdateManyWithoutAuthorNestedInput
    postLikes?: PostLikeUncheckedUpdateManyWithoutUserNestedInput
    postReplies?: PostReplyUncheckedUpdateManyWithoutAuthorNestedInput
    postReports?: PostReportUncheckedUpdateManyWithoutReporterNestedInput
    studentAppointments?: AppointmentUncheckedUpdateManyWithoutStudentNestedInput
    ventMessages?: VentMessageUncheckedUpdateManyWithoutStudentNestedInput
    studentChatSessions?: ChatSessionUncheckedUpdateManyWithoutStudentNestedInput
    counselorAppointments?: AppointmentUncheckedUpdateManyWithoutCounselorNestedInput
    counselorVents?: VentMessageUncheckedUpdateManyWithoutCounselorNestedInput
    counselorChatSessions?: ChatSessionUncheckedUpdateManyWithoutCounselorNestedInput
  }

  export type MoodCheckinCreateManyUserInput = {
    id?: string
    mood: $Enums.Mood
    quote?: string | null
    tasks?: MoodCheckinCreatetasksInput | string[]
    createdAt?: Date | string
  }

  export type JournalEntryCreateManyUserInput = {
    id?: string
    title: string
    content: string
    mood?: $Enums.Mood
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommunityPostCreateManyAuthorInput = {
    id?: string
    title: string
    content: string
    tags?: CommunityPostCreatetagsInput | string[]
    isReported?: boolean
    createdAt?: Date | string
  }

  export type PostLikeCreateManyUserInput = {
    id?: string
    postId: string
    createdAt?: Date | string
  }

  export type PostReplyCreateManyAuthorInput = {
    id?: string
    postId: string
    content: string
    createdAt?: Date | string
  }

  export type PostReportCreateManyReporterInput = {
    id?: string
    postId: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
  }

  export type AppointmentCreateManyStudentInput = {
    id?: string
    counselorId: string
    alias: string
    date: Date | string
    timeSlot: string
    mode: $Enums.AppointmentMode
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type VentMessageCreateManyStudentInput = {
    id?: string
    counselorId?: string | null
    content: string
    reactions?: VentMessageCreatereactionsInput | string[]
    status?: $Enums.VentStatus
    createdAt?: Date | string
  }

  export type ChatSessionCreateManyStudentInput = {
    id?: string
    counselorId: string
    mode?: $Enums.AppointmentMode
    status?: $Enums.ChatSessionStatus
    createdAt?: Date | string
  }

  export type ChatMessageCreateManySenderInput = {
    id?: string
    sessionId: string
    content: string
    createdAt?: Date | string
  }

  export type AppointmentCreateManyCounselorInput = {
    id?: string
    studentId: string
    alias: string
    date: Date | string
    timeSlot: string
    mode: $Enums.AppointmentMode
    status?: $Enums.AppointmentStatus
    notes?: string | null
    createdAt?: Date | string
  }

  export type VentMessageCreateManyCounselorInput = {
    id?: string
    studentId: string
    content: string
    reactions?: VentMessageCreatereactionsInput | string[]
    status?: $Enums.VentStatus
    createdAt?: Date | string
  }

  export type ChatSessionCreateManyCounselorInput = {
    id?: string
    studentId: string
    mode?: $Enums.AppointmentMode
    status?: $Enums.ChatSessionStatus
    createdAt?: Date | string
  }

  export type MoodCheckinUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    quote?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: MoodCheckinUpdatetasksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodCheckinUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    quote?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: MoodCheckinUpdatetasksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoodCheckinUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    quote?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: MoodCheckinUpdatetasksInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JournalEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    mood?: EnumMoodFieldUpdateOperationsInput | $Enums.Mood
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommunityPostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: CommunityPostUpdatetagsInput | string[]
    isReported?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: PostLikeUpdateManyWithoutPostNestedInput
    replies?: PostReplyUpdateManyWithoutPostNestedInput
    reports?: PostReportUpdateManyWithoutPostNestedInput
  }

  export type CommunityPostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: CommunityPostUpdatetagsInput | string[]
    isReported?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: PostLikeUncheckedUpdateManyWithoutPostNestedInput
    replies?: PostReplyUncheckedUpdateManyWithoutPostNestedInput
    reports?: PostReportUncheckedUpdateManyWithoutPostNestedInput
  }

  export type CommunityPostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    tags?: CommunityPostUpdatetagsInput | string[]
    isReported?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: CommunityPostUpdateOneRequiredWithoutLikesNestedInput
  }

  export type PostLikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReplyUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: CommunityPostUpdateOneRequiredWithoutRepliesNestedInput
  }

  export type PostReplyUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReplyUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReportUpdateWithoutReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: CommunityPostUpdateOneRequiredWithoutReportsNestedInput
  }

  export type PostReportUncheckedUpdateWithoutReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReportUncheckedUpdateManyWithoutReporterInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    counselor?: UserUpdateOneRequiredWithoutCounselorAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    counselorId?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    counselorId?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentMessageUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reactions?: VentMessageUpdatereactionsInput | string[]
    status?: EnumVentStatusFieldUpdateOperationsInput | $Enums.VentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    counselor?: UserUpdateOneWithoutCounselorVentsNestedInput
  }

  export type VentMessageUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    counselorId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    reactions?: VentMessageUpdatereactionsInput | string[]
    status?: EnumVentStatusFieldUpdateOperationsInput | $Enums.VentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentMessageUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    counselorId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    reactions?: VentMessageUpdatereactionsInput | string[]
    status?: EnumVentStatusFieldUpdateOperationsInput | $Enums.VentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumChatSessionStatusFieldUpdateOperationsInput | $Enums.ChatSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    counselor?: UserUpdateOneRequiredWithoutCounselorChatSessionsNestedInput
    messages?: ChatMessageUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    counselorId?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumChatSessionStatusFieldUpdateOperationsInput | $Enums.ChatSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    counselorId?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumChatSessionStatusFieldUpdateOperationsInput | $Enums.ChatSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: ChatSessionUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUpdateWithoutCounselorInput = {
    id?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutStudentAppointmentsNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutCounselorInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyWithoutCounselorInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    alias?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    timeSlot?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentMessageUpdateWithoutCounselorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reactions?: VentMessageUpdatereactionsInput | string[]
    status?: EnumVentStatusFieldUpdateOperationsInput | $Enums.VentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutVentMessagesNestedInput
  }

  export type VentMessageUncheckedUpdateWithoutCounselorInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reactions?: VentMessageUpdatereactionsInput | string[]
    status?: EnumVentStatusFieldUpdateOperationsInput | $Enums.VentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VentMessageUncheckedUpdateManyWithoutCounselorInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    reactions?: VentMessageUpdatereactionsInput | string[]
    status?: EnumVentStatusFieldUpdateOperationsInput | $Enums.VentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatSessionUpdateWithoutCounselorInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumChatSessionStatusFieldUpdateOperationsInput | $Enums.ChatSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutStudentChatSessionsNestedInput
    messages?: ChatMessageUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateWithoutCounselorInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumChatSessionStatusFieldUpdateOperationsInput | $Enums.ChatSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: ChatMessageUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type ChatSessionUncheckedUpdateManyWithoutCounselorInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    mode?: EnumAppointmentModeFieldUpdateOperationsInput | $Enums.AppointmentMode
    status?: EnumChatSessionStatusFieldUpdateOperationsInput | $Enums.ChatSessionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikeCreateManyPostInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type PostReplyCreateManyPostInput = {
    id?: string
    authorId: string
    content: string
    createdAt?: Date | string
  }

  export type PostReportCreateManyPostInput = {
    id?: string
    reporterId: string
    reason: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
  }

  export type PostLikeUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPostLikesNestedInput
  }

  export type PostLikeUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostLikeUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReplyUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostRepliesNestedInput
  }

  export type PostReplyUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReplyUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReportUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporter?: UserUpdateOneRequiredWithoutPostReportsNestedInput
  }

  export type PostReportUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostReportUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    reporterId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManySessionInput = {
    id?: string
    senderId: string
    content: string
    createdAt?: Date | string
  }

  export type ChatMessageUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type ChatMessageUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
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