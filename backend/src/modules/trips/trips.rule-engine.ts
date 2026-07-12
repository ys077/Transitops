import { RuleViolation } from './trips.errors';

export type VehicleStatus = 'available' | 'on_trip' | 'in_shop' | 'retired';
export type DriverStatus = 'available' | 'on_trip' | 'off_duty' | 'suspended';

export interface TripCreationRuleInput {
  cargoWeightKg: number | string;
  vehicle: {
    status: VehicleStatus;
    maxLoadCapacityKg: number | string;
  };
  driver: {
    status: DriverStatus;
    licenseExpiryDate: Date | string;
  };
  referenceDate?: Date | string;
}

function normalizeNumber(value: number | string): number {
  const result = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(result) ? result : NaN;
}

function normalizeDate(value: Date | string): Date {
  if (value instanceof Date) {
    return new Date(value.toISOString().slice(0, 10));
  }
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error('Invalid date supplied to the trip rule engine.');
  }
  return new Date(parsed.toISOString().slice(0, 10));
}

export function evaluateTripCreationRules(input: TripCreationRuleInput): RuleViolation[] {
  const vehicleStatus = input.vehicle.status;
  const driverStatus = input.driver.status;
  const cargoWeightKg = normalizeNumber(input.cargoWeightKg);
  const maxLoadCapacityKg = normalizeNumber(input.vehicle.maxLoadCapacityKg);
  const referenceDate = normalizeDate(input.referenceDate ?? new Date());
  const licenseExpiryDate = normalizeDate(input.driver.licenseExpiryDate);

  if (!Number.isFinite(cargoWeightKg) || !Number.isFinite(maxLoadCapacityKg)) {
    throw new Error('Invalid numeric values supplied to the trip rule engine.');
  }

  const violations: RuleViolation[] = [];

  if (cargoWeightKg > maxLoadCapacityKg) {
    violations.push({
      code: 'CARGO_EXCEEDS_CAPACITY',
      message: `Cargo weight ${cargoWeightKg}kg exceeds vehicle capacity of ${maxLoadCapacityKg}kg.`,
    });
  }

  if (vehicleStatus !== 'available') {
    violations.push({
      code: 'VEHICLE_NOT_AVAILABLE',
      message: `Vehicle status is ${vehicleStatus}; only AVAILABLE vehicles may be assigned.`,
    });
  }

  if (driverStatus !== 'available') {
    violations.push({
      code: 'DRIVER_NOT_AVAILABLE',
      message: `Driver status is ${driverStatus}; only AVAILABLE drivers may be assigned.`,
    });
  }

  if (licenseExpiryDate < referenceDate) {
    violations.push({
      code: 'DRIVER_LICENSE_EXPIRED',
      message: `Driver license expired on ${licenseExpiryDate.toISOString().split('T')[0]}.`,
    });
  }

  return violations;
}
