# TransitOps

AI-Powered Smart Transport Operations Platform — hackathon project.

- 📘 Full blueprint: [`docs/TransitOps_Winning_Blueprint.md`](docs/TransitOps_Winning_Blueprint.md)
- 👥 Team split, branching strategy, ownership map: [`TEAM_WORKFLOW.md`](TEAM_WORKFLOW.md)
- 🗂 Each module folder has its own `OWNER.md` explaining scope + what it exports

## Quick start

```bash
docker-compose up -d postgres
cd backend && npm install && npm run dev
cd frontend && npm install && npm run dev
```

## Folder structure

```
transitops/
├── TEAM_WORKFLOW.md        ← read this first if you're joining the team
├── CODEOWNERS
├── docker-compose.yml
├── docs/
│   └── TransitOps_Winning_Blueprint.md
├── frontend/                # Ashwin owns
└── backend/
    └── src/
        ├── modules/
        │   ├── auth/         # Yuvan owns
        │   ├── vehicles/     # Yuvan owns
        │   ├── drivers/      # Yuvan owns
        │   ├── trips/        # Kirubalan owns
        │   ├── maintenance/  # Kirubalan owns
        │   ├── fuel-expenses/# Kirubalan owns
        │   ├── reports/      # Kirubalan owns
        │   └── ai/           # Surya owns
        ├── prisma/           # Yuvan owns (freeze schema by Hour 1)
        └── shared/types/     # shared contracts — additive edits only
```
