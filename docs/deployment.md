# TransitOps — Deployment Guide

## Shared Infrastructure

| Resource | Provider | Plan |
|----------|----------|------|
| Database | **Supabase** (PostgreSQL) | Free |
| Backend API | **Render** | Free Web Service |
| Frontend | **Vercel** | Free (Hobby) |

All services share the same Supabase PostgreSQL database via `DATABASE_URL`.

---

## 1. Database (Supabase — already provisioned)

The database is hosted on Supabase. Connection details are in `backend/.env`.

- **Pooler URL** (for the app, via PgBouncer):
  `postgresql://postgres.<ref>:<password>@aws-1-ap-northeast-2.pooler.supabase.com:6543/postgres?pgbouncer=true`
- **Direct URL** (for Prisma migrations):
  `postgresql://postgres.<ref>:<password>@aws-1-ap-northeast-2.pooler.supabase.com:5432/postgres`

> [!IMPORTANT]
> Use the **IPv4 Pooler URLs** (shown above), not the `db.*.supabase.co` direct host — the latter requires IPv6 which many environments don't support.

---

## 2. Backend → Render

### Option A: Deploy via `render.yaml` (recommended)

1. Push `render.yaml` (at repo root) to GitHub.
2. Go to [Render Dashboard](https://dashboard.render.com) → **New** → **Blueprint**.
3. Connect the `ys077/Transitops` repo.
4. Render reads `render.yaml` and creates the service automatically.
5. In the Render dashboard, set the secret env vars:
   - `DATABASE_URL` — the pooler connection string (with password)
   - `DIRECT_URL` — the direct connection string (with password)
   - `JWT_SECRET` — a strong random string (e.g. `openssl rand -hex 32`)
   - `LLM_API_KEY` — your LLM provider API key

### Option B: Manual setup

1. **New Web Service** → connect `ys077/Transitops` repo.
2. Settings:
   - **Root Directory**: `backend`
   - **Build Command**: `npm ci && npm run build`
   - **Start Command**: `npm start`
   - **Runtime**: Node
   - **Plan**: Free
3. Add the same env vars listed above.

### What `npm run build` does

```
npx prisma generate   →  generates the Prisma client from schema.prisma
tsc                    →  compiles TypeScript to dist/
```

### What `npm start` does

```
node dist/server.js    →  runs the compiled Express server
```

---

## 3. Frontend → Vercel

> [!NOTE]
> The frontend has not been scaffolded yet (Kirubalan's task). Once it's set up with Vite, follow these steps.

1. Go to [vercel.com](https://vercel.com) → **Add New Project**.
2. Import the `ys077/Transitops` repo.
3. Settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build` (Vite default)
   - **Output Directory**: `dist` (Vite default)
4. Add environment variable:
   - `VITE_API_URL` → the Render backend URL (e.g. `https://transitops-backend.onrender.com`)

### Expected frontend scripts (in `frontend/package.json`)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  }
}
```

---

## 4. Environment Variables Summary

| Variable | Where | Description |
|----------|-------|-------------|
| `DATABASE_URL` | Backend (Render) | Supabase pooler connection string |
| `DIRECT_URL` | Backend (Render) | Supabase direct connection (migrations) |
| `JWT_SECRET` | Backend (Render) | JWT signing secret |
| `LLM_API_KEY` | Backend (Render) | LLM provider API key |
| `NODE_ENV` | Backend (Render) | `production` |
| `PORT` | Backend (Render) | Set by Render automatically |
| `VITE_API_URL` | Frontend (Vercel) | Backend API base URL |

> [!CAUTION]
> Never commit `.env` to git. The `.gitignore` already excludes it. Use each platform's env var UI to set secrets.

---

## 5. Post-Deploy Checklist

- [ ] Run `npx prisma migrate deploy` against the production DB (once schema is finalized)
- [ ] Run the seed script to populate demo data
- [ ] Verify `GET /api/ai/maintenance-predictions` returns data
- [ ] Verify `GET /api/ai/compliance-risks` returns data
- [ ] Confirm frontend can reach backend (no CORS issues — add origin to Express CORS config)
- [ ] Test the full demo flow end-to-end on the deployed URLs

---

## 6. Quick Local Run (for reference)

```bash
# Backend
cd backend
cp .env.example .env        # fill in real values
npm install
npx prisma generate
npx prisma migrate dev       # once schema is ready
npm run dev                  # starts on localhost:3000

# Frontend (once scaffolded)
cd frontend
npm install
npm run dev                  # starts on localhost:5173
```
