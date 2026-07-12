import { describe, expect, test } from 'vitest';
import { evaluateTripCreationRules } from './trips.rule-engine';

const baseVehicle = {
  status: 'available' as const,
  maxLoadCapacityKg: 1000,
};

const baseDriver = {
  status: 'available' as const,
  licenseExpiryDate: new Date('2099-01-01'),
};

describe('Trip creation rule engine', () => {
  test('passes when vehicle and driver are available and cargo is within capacity', () => {
    const violations = evaluateTripCreationRules({
      vehicle: baseVehicle,
      driver: baseDriver,
      cargoWeightKg: 500,
      referenceDate: new Date('2026-01-01'),
    });

    expect(violations).toEqual([]);
  });

  test('returns cargo, vehicle, driver, and license violations together', () => {
    const violations = evaluateTripCreationRules({
      vehicle: { ...baseVehicle, status: 'in_shop' },
      driver: { ...baseDriver, status: 'suspended', licenseExpiryDate: new Date('2000-01-01') },
      cargoWeightKg: 1500,
      referenceDate: new Date('2026-01-01'),
    });

    const codes = violations.map((violation) => violation.code);
    expect(codes).toEqual(
      expect.arrayContaining([
        'CARGO_EXCEEDS_CAPACITY',
        'VEHICLE_NOT_AVAILABLE',
        'DRIVER_NOT_AVAILABLE',
        'DRIVER_LICENSE_EXPIRED',
      ])
    );
    expect(violations).toHaveLength(4);
  });

  test('fails when vehicle status is ON_TRIP', () => {
    const violations = evaluateTripCreationRules({
      vehicle: { ...baseVehicle, status: 'on_trip' },
      driver: baseDriver,
      cargoWeightKg: 100,
      referenceDate: new Date('2026-01-01'),
    });

    expect(violations).toEqual([
      expect.objectContaining({ code: 'VEHICLE_NOT_AVAILABLE' }),
    ]);
  });

  test('fails when driver status is OFF_DUTY', () => {
    const violations = evaluateTripCreationRules({
      vehicle: baseVehicle,
      driver: { ...baseDriver, status: 'off_duty' },
      cargoWeightKg: 100,
      referenceDate: new Date('2026-01-01'),
    });

    expect(violations).toEqual([
      expect.objectContaining({ code: 'DRIVER_NOT_AVAILABLE' }),
    ]);
  });

  test('fails when driver license is expired before reference date', () => {
    const violations = evaluateTripCreationRules({
      vehicle: baseVehicle,
      driver: { ...baseDriver, licenseExpiryDate: new Date('2025-12-31') },
      cargoWeightKg: 100,
      referenceDate: new Date('2026-01-01'),
    });

    expect(violations).toEqual([
      expect.objectContaining({ code: 'DRIVER_LICENSE_EXPIRED' }),
    ]);
  });
});
