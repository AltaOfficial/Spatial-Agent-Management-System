# SAMS — Spatial Agentic Management System

SAMS is an open-core 3D control plane for AI agents. Instead of reading logs, you watch your agents inside a building: each agent occupies a room, every capability it can use is a physical object, and actions play back as movement.

Early development. Nothing here is ready for use yet.

## Repository

| Path            | What it is                                |
| --------------- | ----------------------------------------- |
| `apps/desktop`  | Electron desktop client                   |
| `apps/server`   | SAMS server (NestJS)                      |
| `apps/platform` | Platform API for the marketplace (NestJS) |
| `apps/web`      | Website (Next.js)                         |
| `packages/ui`   | Storybook workshop for overlay UI         |

## Getting started

Requires Node (see `.nvmrc`) and pnpm.

```bash
pnpm install
pnpm dev:desktop    # desktop app
pnpm dev:server     # SAMS server on port 8000
pnpm dev:platform   # platform API on port 8001
pnpm dev:web        # website
```

## License

[AGPL-3.0-only](LICENSE)
