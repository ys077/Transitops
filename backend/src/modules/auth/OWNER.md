# Module: Auth & RBAC
**Owner: Yuvan — Backend Core**

## Scope
- POST /api/auth/register, /login, /refresh, GET /me
- JWT issuing + verification, RBAC middleware
- User model (Prisma)

## Exports other modules depend on
- middleware/requireAuth, middleware/requireRole(role)
- types/AuthUser (id, email, role)

## Do NOT edit outside this folder except:
- backend/src/middleware/ (shared auth middleware — coordinate before editing)
- backend/src/prisma/schema.prisma (User/Role models only — PR review required)
