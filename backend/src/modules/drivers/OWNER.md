# Module: Drivers
**Owner: Yuvan — Backend Core**

## Scope
- Driver CRUD, GET /api/drivers/available (valid license + not suspended)
- Status enum: available, on_trip, off_duty, suspended

## Exports other modules depend on
- types/Driver
- services/driverService.setStatus(driverId, status) — called by Trips module
