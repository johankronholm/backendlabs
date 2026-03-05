# Copilot instructions for backendlabs

## Project snapshot
- This is a small Node.js + Express + MariaDB API using ESM modules (`"type": "module"` in `package.json`).
- Entry point is `app.js`, which starts Express and initializes DB connection via `DatabaseService.connect()`.
- Main runtime wiring: `app.js` -> `src/express.js` -> `src/routes/index.js`.

## Layered architecture (follow this flow)
- Routes only map HTTP paths to handlers (see `src/routes/tasks.js`, `src/routes/apiKey.js`).
- Controllers orchestrate request/response and call model methods (see `src/controller/taskController.js`).
- Models contain validation + SQL query definitions (see `src/model/taskModel.js`).
- DB access is centralized in singleton `DatabaseService` using `mysql2/promise` (see `src/service/databaseService.js`).

## Route conventions used here
- Root router mounts feature routers:
  - `/tasks` -> task routes
  - `/apikey` -> API key route
- Task endpoints currently are:
  - `GET /tasks/show`
  - `POST /tasks/create`
  - `DELETE /tasks/delete`
  - `PATCH /tasks/update`
- API key endpoint: `GET /apikey/key` reads `req.query.key` in middleware.

## Data/validation patterns to preserve
- Models return either DB result objects/arrays or plain string error messages; controllers pass these straight to `res.json(...)` (or status 200 messages for successful writes).
- Existing handlers read input from `req.body` for task operations, including `show`.
- SQL uses parameterized placeholders (`?`) with params arrays; keep this pattern for all new queries.

## Environment and startup
- Required env vars (used by `src/config/database.js`):
  - `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_SCHEMA`
  - `PORT` optional (defaults to `3000`)
- Start command: `npm start` (runs `nodemon --exec "node --env-file=.env" app.js`).
- `README.md` includes SQL to create/seed the `tasks` table; use that schema when testing DB behavior.

## Code style and repo-specific rules
- Use named object exports for modules in this repo (`export const router = Router();`, `export const controller = {}`, `export const model = {}`).
- Keep ESM import paths explicit with `.js` extension for local files.
- Keep changes minimal and in-layer: route concerns in routes, business/data checks in models.
- There is no test/lint script configured; validate changes by starting server and hitting endpoints manually.

## Quick examples for manual verification
- `GET http://localhost:3000/apikey/key?key=test123`
- `POST http://localhost:3000/tasks/create` with JSON body:
  `{ "description": "Example", "completed": "true" }`
