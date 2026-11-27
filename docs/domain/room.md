[Map](../../.claude/CLAUDE.md) › Domain › Room

# Room

> Draft v0, not settled. Source: the SAMS Notion workspace (Domain glossary, User Flows).

A bounded space inside a [building](building.md), with a purpose, such as "Home", "Work" or "Finance".

## Three jobs at once

A room currently does three jobs:

1. **Spatial container:** where things are.
2. **Functional grouping:** what they're for.
3. **Permission boundary:** who may enter.

Notion says this may be fine (it is arguably the elegant part of the idea), but it must be a deliberate choice.

## In the user flows

- **Bind an MCP server as an object:** the user places the new [object](object.md) in a room.
- **Create an agent:** the new [agent](agent.md) appears in a room.
- **Grant permission:** the user can drag an agent into a room to give it access. The grant is confirmed spatially, for example a door unlocks.
- **Milestone 1** is "one robot, one room, one object."

## Open decisions

- [Do agents roam the building, or stay in one room?](open-decisions.md#2-roaming-agents)
- [Is the room a permission boundary, or is permission per object?](open-decisions.md#3-room-vs-object-permissions)
- How much of a room editor v1 needs just to place an object. See [raised by the user flows](open-decisions.md#raised-by-the-user-flows).

## Related

[Building](building.md) · [Object](object.md) · [Agent](agent.md) · [Permission](permission.md)

## In code

Not built yet. The test scene in `apps/desktop/src/renderer/src/App.tsx` (a grid and a sphere) is a stand-in.
