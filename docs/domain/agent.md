[Map](../../.claude/CLAUDE.md) › Domain › Agent

# Agent

> Draft v0, not settled. Source: the SAMS Notion workspace (Domain glossary, User Flows, Architecture).

A persistent actor with an identity, a set of [permissions](permission.md), and a location in the [building](building.md). Agents move, act on [objects](object.md), and produce [activity](activity.md).

In the current architecture draft (not decided), agents run on a server, so they keep running with no client open.

## In the user flows

- **Create an agent:**
  1. The user clicks "new agent."
  2. They name it and pick an appearance.
  3. They describe what it does. Notion calls this step "the whole product's time-to-value." A config file, a structured form and natural language would be three very different products.
  4. They set what wakes it up: a schedule, an event, a manual start, or another agent.
  5. They grant it access to specific objects.
  6. The agent appears in a room.
- **Watch an agent work (the core loop):**
  1. A trigger fires.
  2. The agent stands and walks toward the object it needs.
  3. It reaches the object, and an animation plays that matches the verb.
  4. The result surfaces, such as a drafted post, a message or a notification.
  5. The agent returns to idle.

  Notion calls this loop "the entire product in one interaction."

- **First run:** clicking an agent opens an inspector that shows who it is, what it may touch, and what it did recently.

## Open decisions

- [Do agents roam the building, or stay in one room?](open-decisions.md#2-roaming-agents)
- How agents are authored, the trigger model, and what happens when several agents act at once. See [raised by the user flows](open-decisions.md#raised-by-the-user-flows).

## Related

[Task](task.md) · [Permission](permission.md) · [Object](object.md) · [Activity](activity.md) · [Room](room.md)

## In code

Not built yet. The planned 3D look for an agent is the [robot](../assets/robot.md).
