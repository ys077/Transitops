# TransitOps — Team Workflow (4 members, no-conflict setup)

## Ownership map

| Member | Role | Owns (folders) |
|---|---|---|
| **Yuvan** | Backend Core | `backend/src/modules/auth/`, `/vehicles/`, `/drivers/`, `backend/src/prisma/` |
| **Ashwin** | Backend Operations | `backend/src/modules/trips/`, `/maintenance/`, `/fuel-expenses/`, `/reports/` |
| **Kirubalan** | Frontend | `frontend/` (entire folder) |
| **Surya** | AI + DevOps | `backend/src/modules/ai/`, `docker-compose.yml`, `.github/`, `docs/` |

Every module folder has an `OWNER.md` inside it stating exactly what it owns and what it exports for others to use. **Read the OWNER.md of any module before importing from it.**

## The one rule that prevents 90% of merge conflicts

> **Each person's commits should only ever touch files inside their own folder — plus, occasionally, a single new line in `backend/src/shared/types/` or `backend/src/server.ts`.**

If you find yourself editing a file inside someone else's module folder, stop — either the interface you need is missing (add a note, ping them) or you're duplicating logic that already exists (check their `OWNER.md`'s "Exports" section first).

## Branching strategy

```
main
 ├─ yuvan/backend-core
 ├─ ashwin/backend-ops
 ├─ kirubalan/frontend
 └─ surya/ai-devops
```

- Everyone branches off `main`, works only inside their folder, commits often.
- Open a PR back into `main` early and often (every 1–2 hours), not one giant PR at the end — small PRs are fast to review and don't have time to drift into conflict.
- `CODEOWNERS` is already set up so GitHub auto-requests the right reviewer.
- **Never `git push --force` to `main`.**

## The two shared files — handle with care

1. **`backend/src/prisma/schema.prisma`** — owned by Yuvan, but everyone's data model lives here.
   - **Freeze this by end of Hour 1.** Get the full schema (already drafted in `docs/TransitOps_Winning_Blueprint.md`, Section 7) agreed and committed before anyone starts writing services against it.
   - After Hour 1, only Yuvan edits this file. If you need a field added, ask Yuvan — don't edit it yourself.

2. **`backend/src/server.ts`** — the route registration file.
   - Each module owner adds exactly **one line** here to mount their router (e.g. `app.use('/api/trips', tripsRouter)`).
   - Because each person's addition is a single independent line, conflicts here are rare and trivial to resolve even if they happen.

## Integration checkpoints (don't skip these)

- **Hour 1:** Schema frozen, all 4 members can see it, `shared/types/` populated to match.
- **Hour 4–5 (mid-point):** Everyone merges into `main` and runs the full stack together (`docker-compose up`) — catch integration issues with 3+ hours left, not 10 minutes before demo.
- **Hour 7:** Final merge freeze — no new features after this, only bug fixes, and every fix still goes through a PR review from the relevant `CODEOWNERS` reviewer.

## Quick start per member

```bash
git clone <repo-url>
git checkout -b yuvan/backend-core   # (or m2/, m3/, m4/ — your branch)
cd backend && npm install         # Yuvan, Ashwin, Surya
cd frontend && npm install        # Kirubalan
docker-compose up -d postgres     # spin up local DB
```
