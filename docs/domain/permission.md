[Map](../../.claude/CLAUDE.md) › Domain › Permission

# Permission

> Draft v0, not settled. Source: the SAMS Notion workspace (Domain glossary, User Flows, Architecture).

A rule binding an [agent](agent.md) to what it may do. Two shapes are being considered:

- **Room access:** agent → may enter [room](room.md)
- **Object verb:** agent → may perform verb on [object](object.md)

In the current architecture draft (not decided), the server owns the permission engine.

## In the user flows

- **Create an agent:** the user grants the new agent access to specific objects.
- **Grant permission:**
  1. The user selects an agent.
  2. They either drag it into a room, or click an object and pick who may use it.
  3. They choose which verbs are allowed.
  4. The grant is confirmed spatially, for example a door unlocks or an object changes state.

  Notion says the product's differentiator depends on this being faster than editing a config file.

- **Denial:**
  1. An agent walks toward an object it has no permission for.
  2. The object refuses, visibly and audibly.
  3. The user gets a notification with a "grant access" button.

  Notion calls this "the money shot": the single frame that proves permissions are real.

## Notes

- Roles for teams come in v2. Milestone 3, "multiple users in a building," proves roles and permissions.

## Open decisions

- [Is the room a permission boundary, or is permission per object?](open-decisions.md#3-room-vs-object-permissions) If both, there needs to be a rule for which wins.
- [How fine-grained is an object?](open-decisions.md#1-object-granularity) Verb granularity is the other half of this question.
- Whether a denial is recorded as [activity](activity.md). See [raised by the user flows](open-decisions.md#raised-by-the-user-flows).

## Related

[Agent](agent.md) · [Object](object.md) · [Room](room.md) · [Activity](activity.md)

## In code

Not built yet.
