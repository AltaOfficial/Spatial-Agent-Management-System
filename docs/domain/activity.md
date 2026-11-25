[Map](../../.claude/CLAUDE.md) › Domain › Activity

# Activity

> Draft v0, not settled. Source: the SAMS Notion workspace (Domain glossary, User Flows, Architecture).

An observable record of something an [agent](agent.md) did. Activity is what gets shown in space instead of written to a log.

Notion calls it arguably the core entity of the whole product: an agent walking to the safe _is_ an activity being played back in space.

In the current architecture draft (not decided), the server owns the activity log.

## In the user flows

- **Watch an agent work:** each step the agent takes toward an [object](object.md), and the verb it performs there, is activity being played back.
- **Denial:** it is not decided whether a refused action is recorded as activity.
- **Investigate what happened:**
  1. The user opens a timeline.
  2. They scrub backward.
  3. The [building](building.md) replays what agents did.

  This flow is impossible if activity is only animation.

## Open decisions

- [Is activity stored, or only rendered?](open-decisions.md#4-stored-activity) Notion says stored is almost certainly right, which means an event log in the data model from day one.
- How long activity is kept, whether the camera follows the agent, and what happens when several agents act at once. See [raised by the user flows](open-decisions.md#raised-by-the-user-flows).

## Related

[Agent](agent.md) · [Object](object.md) · [Task](task.md) · [Permission](permission.md)

## In code

Not built yet.
