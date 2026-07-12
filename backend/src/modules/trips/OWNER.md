# Module: Trips (Rule Engine core)
**Owner: Ashwin — Backend Operations**

## Scope
- POST /api/trips, /:id/dispatch, /:id/complete, /:id/cancel
- THE Rule Engine: capacity check, availability check, license/suspension check, atomic status transitions on vehicle + driver

## Depends on (import, do not reimplement)
- modules/vehicles/services/vehicleService.setStatus
- modules/drivers/services/driverService.setStatus

## Exports
- types/Trip
