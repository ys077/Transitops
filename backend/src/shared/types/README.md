# Shared Types (contracts between modules/teams)

This is the ONLY backend folder everyone may edit — but only to ADD a type,
never to change one someone else owns, without a heads-up in the team chat.

Put here: Vehicle, Driver, Trip, MaintenanceLog, FuelLog, Expense, AuthUser
interfaces that both frontend and backend need to agree on.

Freeze these in Hour 0-1 of the hackathon based on the Prisma schema
(docs/TransitOps_Winning_Blueprint.md Section 7). Changing a shared type
after Hour 2 requires pinging whoever depends on it.
