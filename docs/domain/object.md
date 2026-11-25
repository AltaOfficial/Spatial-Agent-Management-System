[Map](../../.claude/CLAUDE.md) › Domain › Object

# Object

> Draft v0, not settled. Source: the SAMS Notion workspace (Domain glossary, Overview, User Flows).

A placed, interactive thing inside a [room](room.md), backed by something real. Objects are how capability becomes visible.

| Object         | Backed by        |
| -------------- | ---------------- |
| Safe           | Credential store |
| Filing cabinet | Filesystem       |
| Mail slot      | Inbox            |

Permissions are assigned by object.

## In the user flows

- **Bind an MCP server as an object:**
  1. The user opens "add object."
  2. They pick a type from the catalog, such as a safe, cabinet or mail slot.
  3. They supply the MCP connection details and any secrets.
  4. They place the object in a room.
  5. The object shows its state: **connected**, **unbound** or **erroring**.
- **Watch an agent work:** when an [agent](agent.md) reaches the object, an animation plays that matches the verb. Opening a safe looks different from filing a document.
- **Denial:** if the agent lacks [permission](permission.md), the object refuses, visibly and audibly.

## Notes

- New object types come from [extensions](extension.md). Milestone 4, "third-party objects," proves this.
- Where secrets live is not decided. The current architecture draft puts them on the server. Who can see them is also open.

## Open decisions

- [How fine-grained is an object?](open-decisions.md#1-object-granularity) Notion calls this the highest-consequence open item in the glossary.

## Related

[Room](room.md) · [Permission](permission.md) · [Extension](extension.md) · [Activity](activity.md)

## In code

Not built yet. The clickable sphere in `app/src/renderer/src/App.tsx` is the closest stand-in.
