
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  passwordHash: 'passwordHash',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.VehicleScalarFieldEnum = {
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

exports.Prisma.DriverScalarFieldEnum = {
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

exports.Prisma.TripScalarFieldEnum = {
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

exports.Prisma.MaintenanceLogScalarFieldEnum = {
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

exports.Prisma.FuelLogScalarFieldEnum = {
  id: 'id',
  vehicleId: 'vehicleId',
  tripId: 'tripId',
  liters: 'liters',
  cost: 'cost',
  date: 'date',
  createdAt: 'createdAt'
};

exports.Prisma.ExpenseScalarFieldEnum = {
  id: 'id',
  vehicleId: 'vehicleId',
  tripId: 'tripId',
  category: 'category',
  amount: 'amount',
  date: 'date',
  notes: 'notes',
  createdAt: 'createdAt'
};

exports.Prisma.AuditLogScalarFieldEnum = {
  id: 'id',
  entityType: 'entityType',
  entityId: 'entityId',
  action: 'action',
  oldValue: 'oldValue',
  newValue: 'newValue',
  performedBy: 'performedBy',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};
exports.UserRole = exports.$Enums.UserRole = {
  fleet_manager: 'fleet_manager',
  driver: 'driver',
  safety_officer: 'safety_officer',
  financial_analyst: 'financial_analyst'
};

exports.VehicleStatus = exports.$Enums.VehicleStatus = {
  available: 'available',
  on_trip: 'on_trip',
  in_shop: 'in_shop',
  retired: 'retired'
};

exports.DriverStatus = exports.$Enums.DriverStatus = {
  available: 'available',
  on_trip: 'on_trip',
  off_duty: 'off_duty',
  suspended: 'suspended'
};

exports.TripStatus = exports.$Enums.TripStatus = {
  draft: 'draft',
  dispatched: 'dispatched',
  completed: 'completed',
  cancelled: 'cancelled'
};

exports.MaintenanceStatus = exports.$Enums.MaintenanceStatus = {
  active: 'active',
  closed: 'closed'
};

exports.Prisma.ModelName = {
  User: 'User',
  Vehicle: 'Vehicle',
  Driver: 'Driver',
  Trip: 'Trip',
  MaintenanceLog: 'MaintenanceLog',
  FuelLog: 'FuelLog',
  Expense: 'Expense',
  AuditLog: 'AuditLog'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\ADMIN\\Music\\Projects\\Transitops\\backend\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "D:\\ADMIN\\Music\\Projects\\Transitops\\backend\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../src/generated/prisma\"\n  previewFeatures = [\"driverAdapters\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\n// ENUMS\nenum UserRole {\n  fleet_manager\n  driver\n  safety_officer\n  financial_analyst\n}\n\nenum VehicleStatus {\n  available\n  on_trip\n  in_shop\n  retired\n}\n\nenum DriverStatus {\n  available\n  on_trip\n  off_duty\n  suspended\n}\n\nenum TripStatus {\n  draft\n  dispatched\n  completed\n  cancelled\n}\n\nenum MaintenanceStatus {\n  active\n  closed\n}\n\n// MODELS\nmodel User {\n  id           String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  name         String\n  email        String   @unique\n  passwordHash String\n  role         UserRole\n  createdAt    DateTime @default(now())\n  updatedAt    DateTime @updatedAt\n\n  drivers      Driver[]\n  createdTrips Trip[]     @relation(\"TripCreator\")\n  auditLogs    AuditLog[]\n}\n\nmodel Vehicle {\n  id                 String        @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  registrationNumber String        @unique\n  nameModel          String?\n  type               String?\n  maxLoadCapacityKg  Decimal?      @db.Decimal(10, 2)\n  odometerKm         Decimal?      @db.Decimal(10, 2)\n  acquisitionCost    Decimal?      @db.Decimal(10, 2)\n  status             VehicleStatus @default(available)\n  region             String?\n  createdAt          DateTime      @default(now())\n  updatedAt          DateTime      @updatedAt\n\n  trips           Trip[]\n  maintenanceLogs MaintenanceLog[]\n  fuelLogs        FuelLog[]\n  expenses        Expense[]\n\n  @@index([status])\n}\n\nmodel Driver {\n  id                String       @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  userId            String?      @db.Uuid\n  name              String\n  licenseNumber     String       @unique\n  licenseCategory   String?\n  licenseExpiryDate DateTime     @db.Date\n  contactNumber     String?\n  safetyScore       Int          @default(100)\n  status            DriverStatus @default(available)\n  createdAt         DateTime     @default(now())\n  updatedAt         DateTime     @updatedAt\n\n  user  User?  @relation(fields: [userId], references: [id])\n  trips Trip[]\n\n  @@index([status, licenseExpiryDate])\n}\n\nmodel Trip {\n  id                 String     @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  source             String\n  destination        String\n  vehicleId          String     @db.Uuid\n  driverId           String     @db.Uuid\n  cargoWeightKg      Decimal?   @db.Decimal(10, 2)\n  plannedDistanceKm  Decimal?   @db.Decimal(10, 2)\n  actualDistanceKm   Decimal?   @db.Decimal(10, 2)\n  fuelConsumedLiters Decimal?   @db.Decimal(10, 2)\n  status             TripStatus @default(draft)\n  dispatchedAt       DateTime?\n  completedAt        DateTime?\n  aiRecommended      Boolean    @default(false)\n  createdBy          String     @db.Uuid\n  createdAt          DateTime   @default(now())\n  updatedAt          DateTime   @updatedAt\n\n  vehicle  Vehicle   @relation(fields: [vehicleId], references: [id])\n  driver   Driver    @relation(fields: [driverId], references: [id])\n  creator  User      @relation(\"TripCreator\", fields: [createdBy], references: [id])\n  fuelLogs FuelLog[]\n  expenses Expense[]\n\n  @@index([status])\n}\n\nmodel MaintenanceLog {\n  id                String            @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  vehicleId         String            @db.Uuid\n  type              String\n  description       String?\n  cost              Decimal?          @db.Decimal(10, 2)\n  status            MaintenanceStatus @default(active)\n  scheduledDate     DateTime          @db.Date\n  closedDate        DateTime?         @db.Date\n  odometerAtService Decimal?          @db.Decimal(10, 2)\n  createdAt         DateTime          @default(now())\n  updatedAt         DateTime          @updatedAt\n\n  vehicle Vehicle @relation(fields: [vehicleId], references: [id])\n\n  @@index([vehicleId, status])\n}\n\nmodel FuelLog {\n  id        String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  vehicleId String   @db.Uuid\n  tripId    String?  @db.Uuid\n  liters    Decimal  @db.Decimal(10, 2)\n  cost      Decimal  @db.Decimal(10, 2)\n  date      DateTime @db.Date\n  createdAt DateTime @default(now())\n\n  vehicle Vehicle @relation(fields: [vehicleId], references: [id])\n  trip    Trip?   @relation(fields: [tripId], references: [id])\n}\n\nmodel Expense {\n  id        String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  vehicleId String?  @db.Uuid\n  tripId    String?  @db.Uuid\n  category  String\n  amount    Decimal  @db.Decimal(10, 2)\n  date      DateTime @db.Date\n  notes     String?\n  createdAt DateTime @default(now())\n\n  vehicle Vehicle? @relation(fields: [vehicleId], references: [id])\n  trip    Trip?    @relation(fields: [tripId], references: [id])\n}\n\nmodel AuditLog {\n  id          String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  entityType  String\n  entityId    String   @db.Uuid\n  action      String\n  oldValue    Json?\n  newValue    Json?\n  performedBy String   @db.Uuid\n  createdAt   DateTime @default(now())\n\n  user User @relation(fields: [performedBy], references: [id])\n}\n",
  "inlineSchemaHash": "6cd70117d5a33617400abe0d30ea66716023d205fe1c93e4250835184d17b733",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"passwordHash\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"UserRole\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"drivers\",\"kind\":\"object\",\"type\":\"Driver\",\"relationName\":\"DriverToUser\"},{\"name\":\"createdTrips\",\"kind\":\"object\",\"type\":\"Trip\",\"relationName\":\"TripCreator\"},{\"name\":\"auditLogs\",\"kind\":\"object\",\"type\":\"AuditLog\",\"relationName\":\"AuditLogToUser\"}],\"dbName\":null},\"Vehicle\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"registrationNumber\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nameModel\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"maxLoadCapacityKg\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"odometerKm\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"acquisitionCost\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"VehicleStatus\"},{\"name\":\"region\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"trips\",\"kind\":\"object\",\"type\":\"Trip\",\"relationName\":\"TripToVehicle\"},{\"name\":\"maintenanceLogs\",\"kind\":\"object\",\"type\":\"MaintenanceLog\",\"relationName\":\"MaintenanceLogToVehicle\"},{\"name\":\"fuelLogs\",\"kind\":\"object\",\"type\":\"FuelLog\",\"relationName\":\"FuelLogToVehicle\"},{\"name\":\"expenses\",\"kind\":\"object\",\"type\":\"Expense\",\"relationName\":\"ExpenseToVehicle\"}],\"dbName\":null},\"Driver\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"licenseNumber\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"licenseCategory\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"licenseExpiryDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"contactNumber\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"safetyScore\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"DriverStatus\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"DriverToUser\"},{\"name\":\"trips\",\"kind\":\"object\",\"type\":\"Trip\",\"relationName\":\"DriverToTrip\"}],\"dbName\":null},\"Trip\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"source\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"destination\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"vehicleId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"driverId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"cargoWeightKg\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"plannedDistanceKm\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"actualDistanceKm\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"fuelConsumedLiters\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"TripStatus\"},{\"name\":\"dispatchedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"completedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"aiRecommended\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"vehicle\",\"kind\":\"object\",\"type\":\"Vehicle\",\"relationName\":\"TripToVehicle\"},{\"name\":\"driver\",\"kind\":\"object\",\"type\":\"Driver\",\"relationName\":\"DriverToTrip\"},{\"name\":\"creator\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"TripCreator\"},{\"name\":\"fuelLogs\",\"kind\":\"object\",\"type\":\"FuelLog\",\"relationName\":\"FuelLogToTrip\"},{\"name\":\"expenses\",\"kind\":\"object\",\"type\":\"Expense\",\"relationName\":\"ExpenseToTrip\"}],\"dbName\":null},\"MaintenanceLog\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"vehicleId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"cost\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"MaintenanceStatus\"},{\"name\":\"scheduledDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"closedDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"odometerAtService\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"vehicle\",\"kind\":\"object\",\"type\":\"Vehicle\",\"relationName\":\"MaintenanceLogToVehicle\"}],\"dbName\":null},\"FuelLog\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"vehicleId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tripId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"liters\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"cost\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"date\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"vehicle\",\"kind\":\"object\",\"type\":\"Vehicle\",\"relationName\":\"FuelLogToVehicle\"},{\"name\":\"trip\",\"kind\":\"object\",\"type\":\"Trip\",\"relationName\":\"FuelLogToTrip\"}],\"dbName\":null},\"Expense\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"vehicleId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tripId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"category\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"amount\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"date\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"notes\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"vehicle\",\"kind\":\"object\",\"type\":\"Vehicle\",\"relationName\":\"ExpenseToVehicle\"},{\"name\":\"trip\",\"kind\":\"object\",\"type\":\"Trip\",\"relationName\":\"ExpenseToTrip\"}],\"dbName\":null},\"AuditLog\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"entityType\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"entityId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"action\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"oldValue\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"newValue\",\"kind\":\"scalar\",\"type\":\"Json\"},{\"name\":\"performedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"AuditLogToUser\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

