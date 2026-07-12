export class MaintenanceValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MaintenanceValidationError';
  }
}

export class ActiveMaintenanceExistsError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ActiveMaintenanceExistsError';
  }
}

export class MaintenanceNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'MaintenanceNotFoundError';
  }
}

export class InvalidMaintenanceTransitionError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidMaintenanceTransitionError';
  }
}
