# Module: Vehicles
**Owner: Yuvan — Backend Core**

## Scope
- Vehicle CRUD, GET /api/vehicles/available (dispatch pool filter)
- Status enum: available, on_trip, in_shop, retired

## Exports other modules depend on
- types/Vehicle
- services/vehicleService.setStatus(vehicleId, status) — called by Trips & Maintenance modules, do not duplicate this logic elsewhere
