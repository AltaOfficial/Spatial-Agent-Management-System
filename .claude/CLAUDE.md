# SAMS — Spatial Agentic Management System

SAMS is an open-core 3D control plane for AI agents. Instead of reading logs, you watch your agents inside a building. Each agent occupies a room, and every capability it can use is a physical object: a credential store is a safe, the filesystem is a cabinet, an inbox is a mail slot. Actions play back as movement, and denied actions play back as refusals. Permissions are assigned per object.

SAMS is an observability and permissions layer that happens to be spatial. It is not a 3D environment that also runs agents.

## How to use this file

This file is the top of a map. Read the overview, then follow a glossary link only when you need more depth on that term. Each linked doc covers one term, and can link further down to more detailed docs.

- Links are relative to this file, so `../docs/` is the `docs/` folder at the repo root.
- Each glossary section matches a folder in `docs/` (for example, Domain → `docs/domain/`).
- Many docs are not written yet. If a link leads nowhere, read the code path next to the term instead.
- Product decisions (vision, roadmap, open questions) are kept in the "SAMS" workspace in Notion. The docs here cover what the code needs.
- The architecture and setup are still being worked out. Describe the current code as it is, but don't treat any architecture or stack choice as final, and ask before building on one.

## Current state

Early scaffold. The pieces exist but are not connected yet.

| Folder | What's there now |
| --- | --- |
| `app/` | Electron desktop client showing a test 3D scene: an infinite grid, a sphere that changes colour when clicked, an orbit camera, and a "New Building" button that does nothing yet. |
| `backend/` | NestJS starter. One `GET /` route that returns "Hello World!" on port 3000. The app does not call it yet. |
| `blender/` | Reserved for 3D source models. Empty. |
| `docs/` | The deeper levels of this map. Empty so far. |

`app/` and `backend/` are separate npm packages, each with its own `node_modules` and lockfile. There is no root `package.json`, so run commands from inside the package folder.

## Commands

From `app/`:

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the app with hot reload |
| `npm run build` | Typecheck, then build |
| `npm run build:win` | Build a Windows installer |
| `npm run typecheck` | Typecheck the main/preload and renderer code |
| `npm run lint` / `npm run format` | ESLint / Prettier |
| `npm run storybook` | Start Storybook on port 6006 |
| `npx vitest` | Run every story as a test in headless Chromium |

From `backend/`:

| Command | What it does |
| --- | --- |
| `npm run start:dev` | Start the server in watch mode (port 3000, or `PORT`) |
| `npm test` / `npm run test:e2e` | Jest unit tests / end-to-end tests |

## Glossary

### Product — `docs/product/`

- **SAMS** — the product described at the top of this file. → [overview](../docs/product/overview.md)
- **Open-core** — the core is free and self-hostable; a hosted offering funds the project. Self-hosted and hosted keep feature parity. → [business-model](../docs/product/business-model.md)
- **Milestones** — five vertical slices, each demoable on video: (1) one robot, one room, one object; (2) a building; (3) multiple users in a building; (4) third-party objects; (5) user avatars in the building. → [milestones](../docs/product/milestones.md)

### Domain — `docs/domain/`

Draft v0, not settled. These words are the data model, the API vocabulary and the UI labels, so use them exactly and don't invent synonyms.

- **Building** — the top-level container. One install, for one org or one person. Contains rooms. → [building](../docs/domain/building.md)
- **Room** — a bounded space in a building with a purpose, such as "Home", "Work" or "Finance". It currently does three jobs: space, grouping and permission boundary. → [room](../docs/domain/room.md)
- **Object** — a placed, interactive thing in a room, backed by a real capability (for example an MCP server). Objects are how capability becomes visible. → [object](../docs/domain/object.md)
- **Agent** — a persistent actor with an identity, permissions and a location in the building. Agents move, act on objects and produce activity. → [agent](../docs/domain/agent.md)
- **Task** — a unit of work given to an agent: assigned → in progress → done or failed. → [task](../docs/domain/task.md)
- **Permission** — a rule for what an agent may do. Shape not decided: "may enter room" or "may perform verb on object". → [permission](../docs/domain/permission.md)
- **Activity** — a record of something an agent did. This is what gets shown in space instead of logged, and is likely the core entity. → [activity](../docs/domain/activity.md)
- **Extension** — a package that adds new object types and binds them to real capabilities. Post-MVP. → [extension](../docs/domain/extension.md)
- **Open decisions** — how fine-grained an object is, whether agents roam or stay in one room, room vs. object permissions, and whether activity is stored or only rendered. → [open-decisions](../docs/domain/open-decisions.md)

### Architecture — `docs/architecture/`

Not decided. This is the current direction from Notion, and the setup is still being worked out. Treat it as a proposal, not a rule.

- **Client/server split** — the client only presents. The server owns all state and execution, so agents keep running with no client open. → [client-server](../docs/architecture/client-server.md)
- **Deployment modes** — local, self-hosted or hosted. They differ only in where the server runs. → [deployment-modes](../docs/architecture/deployment-modes.md)
- **Foundation layers** — the build order, from things that can't be changed later (name, license) down to swappable display (robot model, room art). → [foundation-layers](../docs/architecture/foundation-layers.md)
- **MCP** — Model Context Protocol. Objects are expected to be backed by MCP servers. In the draft, the server hosts those connections. → [mcp](../docs/architecture/mcp.md)

### App (client) — `docs/app/`

- **App** — `app/`. An Electron desktop shell around a React 19 + TypeScript web client. → [app](../docs/app/app.md)
- **Main process** — `app/src/main/index.ts`. The Node side of Electron: creates the window and handles IPC. → [main-process](../docs/app/main-process.md)
- **Preload** — `app/src/preload/`. The bridge that exposes `window.electron` and `window.api` (empty for now) to the renderer. → [preload](../docs/app/preload.md)
- **Renderer** — `app/src/renderer/`. The React UI inside the window. Entry is `main.tsx` → `App.tsx`. Import from it with the `@renderer` alias. → [renderer](../docs/app/renderer.md)
- **IPC** — messages between the renderer and the main process. Only a test `ping` channel exists. → [ipc](../docs/app/ipc.md)
- **Scene** — the R3F `<Canvas>` in `App.tsx`. A test scene now; will become the building view. → [scene](../docs/app/scene.md)
- **React Three Fiber (R3F)** — a React renderer for three.js. Drei adds helpers such as `Grid` and `OrbitControls`. → [r3f](../docs/app/r3f.md)
- **Overlay UI** — HTML components positioned on top of the canvas, in `app/src/renderer/src/components/`. → [overlay-ui](../docs/app/overlay-ui.md)
- **Client shell** — planned: navigation between buildings, an inspector panel and a chat panel. Not built yet. → [client-shell](../docs/app/client-shell.md)
- **Tailwind** — v4 through `@tailwindcss/vite`, loaded in `app/src/renderer/src/assets/main.css`. → [tailwind](../docs/app/tailwind.md)
- **State** — Zustand. Installed, not used yet. → [state](../docs/app/state.md)
- **Routing** — TanStack Router. Installed, not used yet. → [routing](../docs/app/routing.md)
- **Packaging** — electron-builder, configured in `app/electron-builder.yml`. Still has starter placeholders such as `com.electron.app` and `example.com`. → [packaging](../docs/app/packaging.md)

### Backend (server) — `docs/backend/`

- **Server** — `backend/`, currently the NestJS 11 starter. In the architecture draft, the server owns agent execution, MCP connections, the permission engine, the activity log, storage, secrets and the API. → [server](../docs/backend/server.md)
- **Runtime** — in the draft, the headless part of the server that triggers and runs agents. Needs no graphics. → [runtime](../docs/backend/runtime.md)
- **API** — in the draft, the API every client talks to, treated as a public surface. Not designed yet. → [api](../docs/backend/api.md)
- **Nest basics** — modules wire controllers (routes) to services (logic). See `backend/src/app.module.ts`. → [nest-basics](../docs/backend/nest-basics.md)

### Assets — `docs/assets/`

- **Blender** — `blender/`. Source `.blend` files for 3D models. Blender backup files (`.blend1`, `.blend2`) are git-ignored. → [blender](../docs/assets/blender.md)
- **Asset pipeline** — Blender → glTF → R3F. Every model goes through it. Not set up yet. → [pipeline](../docs/assets/pipeline.md)
- **Robot** — the planned 3D model for an agent. Display only, so it can be swapped freely. → [robot](../docs/assets/robot.md)

### Tooling — `docs/tooling/`

- **electron-vite** — builds the main, preload and renderer code from `app/electron.vite.config.ts`. → [electron-vite](../docs/tooling/electron-vite.md)
- **Storybook** — `app/.storybook/`. A component workshop using `@storybook/tanstack-react`. The stories in `app/src/stories/` are starter examples. Tailwind is not wired into Storybook yet. → [storybook](../docs/tooling/storybook.md)
- **Vitest** — `app/vitest.config.ts` runs each story as a test in headless Chromium through Playwright. → [vitest](../docs/tooling/vitest.md)
- **Code style** — ESLint and Prettier in each package. `app/`: single quotes, semicolons, 100-character lines, no trailing commas. `backend/`: single quotes, trailing commas. → [code-style](../docs/tooling/code-style.md)
