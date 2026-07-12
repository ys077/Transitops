# Module: AI Layer
**Owner: Surya — AI + DevOps**

## Scope
- POST /api/ai/dispatch-recommendation
- GET /api/ai/maintenance-predictions
- GET /api/ai/compliance-risks
- POST /api/ai/ask
- GET /api/ai/executive-summary

## Rule
Every AI feature MUST have a deterministic fallback if the LLM API call fails —
never let this module break a live demo. Reads other modules' data via their
service exports, never queries their tables directly.
