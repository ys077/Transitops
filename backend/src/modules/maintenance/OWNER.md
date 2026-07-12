# Module: Maintenance
**Owner: Ashwin — Backend Operations**

## Scope
- POST /api/maintenance (auto sets vehicle -> in_shop)
- PATCH /api/maintenance/:id/close (auto restores vehicle -> available, unless retired)

## Depends on
- modules/vehicles/services/vehicleService.setStatus
