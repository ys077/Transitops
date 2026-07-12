export type RuleViolation = {
  code: string;
  message: string;
};

export class TripRuleViolationError extends Error {
  public readonly statusCode = 422;
  public readonly violations: RuleViolation[];

  constructor(violations: RuleViolation[]) {
    super('Trip request violates one or more business rules.');
    this.name = 'TripRuleViolationError';
    this.violations = violations;
  }
}

export class InvalidTripTransitionError extends Error {
  public readonly statusCode = 409;

  constructor(message: string) {
    super(message);
    this.name = 'InvalidTripTransitionError';
  }
}

export class ResourceUnavailableError extends Error {
  public readonly statusCode = 409;

  constructor(message: string) {
    super(message);
    this.name = 'ResourceUnavailableError';
  }
}

export class TripNotFoundError extends Error {
  public readonly statusCode = 404;

  constructor(id: string) {
    super(`Trip with id ${id} was not found.`);
    this.name = 'TripNotFoundError';
  }
}
