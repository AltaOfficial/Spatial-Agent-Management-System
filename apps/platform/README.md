# @sams/platform

The platform API (NestJS 11): the centrally operated service behind the extension marketplace. Deployed continuously, not versioned with SAMS.

Currently the Nest starter: one `GET /` route returning "Hello World!".

## Commands

Run from this folder, or from the root with `pnpm --filter @sams/platform <script>`.

| Command          | What it does                                 |
| ---------------- | -------------------------------------------- |
| `pnpm start:dev` | Start in watch mode on port 8001 (or `PORT`) |
| `pnpm build`     | Compile to `dist/`                           |
| `pnpm test`      | Jest unit tests                              |
| `pnpm test:e2e`  | Jest end-to-end tests                        |
| `pnpm lint`      | ESLint                                       |
