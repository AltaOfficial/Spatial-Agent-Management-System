# @sams/server

The SAMS server (NestJS 11). Ships with the desktop app under the SAMS version. Planned to own agent execution, MCP connections, permissions, the activity log and the API clients talk to.

Currently the Nest starter: one `GET /` route returning "Hello World!".

## Commands

Run from this folder, or from the root with `pnpm --filter @sams/server <script>`.

| Command          | What it does                                 |
| ---------------- | -------------------------------------------- |
| `pnpm start:dev` | Start in watch mode on port 8000 (or `PORT`) |
| `pnpm build`     | Compile to `dist/`                           |
| `pnpm test`      | Jest unit tests                              |
| `pnpm test:e2e`  | Jest end-to-end tests                        |
| `pnpm lint`      | ESLint                                       |
