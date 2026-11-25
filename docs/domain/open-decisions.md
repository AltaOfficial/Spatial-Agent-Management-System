[Map](../../.claude/CLAUDE.md) › Domain › Open decisions

# Open decisions

> Source: the SAMS Notion workspace (Domain glossary, User Flows). None of these are settled. Don't build code that quietly picks an answer. Ask first.

## 1. Object granularity

**How fine-grained is an [object](object.md)?** A password-manager MCP server might expose eight tools: read, write, list, rotate, share, delete, and so on.

| Option                                       | Trade-off                                                                                                          |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| One object, many verbs                       | The safe is one thing an agent opens, and verbs are permissions on it. Clean visually, but permissions are coarse. |
| One object per tool                          | Eight separate objects. Precise permissions, but cluttered, and the room stops looking like a room.                |
| One object per server, verbs as interactions | Notion's likely answer. The object's animation changes with the verb.                                              |

This decision feeds into the data model, the permission engine, the extension API and the visual language. Notion calls it the highest-consequence open item in the glossary.

## 2. Roaming agents

**Do [agents](agent.md) live in one [room](room.md), or roam the [building](building.md)?**

- **Bound to a room:** rooms become meaningful boundaries, and the view stays easy to read.
- **Roaming:** the walking becomes the story, and rooms are just geography.

The safe example implies roaming. The "each room has its own purpose" framing implies binding.

## 3. Room vs. object permissions

**Is the room a [permission](permission.md) boundary, or is permission per object?** If both, they can contradict each other, for example an agent denied the room but allowed an object inside it. That needs an explicit rule for which wins, or one of the two has to go.

## 4. Stored activity

**Is [activity](activity.md) a stored record, or only rendering?**

- **Stored:** there is history, replay and audit, which is most of the value.
- **Only rendered:** SAMS shows the present and forgets.

Notion says stored is almost certainly right, which means an event log exists in the data model from day one.

## Raised by the user flows

Smaller questions the user flows surfaced:

- **First run:** is the inspector panel a 2D overlay or something in the 3D world? What is the default camera?
- **Binding objects:** where do credentials live, and who can see them? How much room editor does v1 need just to place an object?
- **Creating agents:** is an agent written as a config file, a structured form or natural language? Notion calls this the biggest factor in whether anyone gets past install. What is the trigger model?
- **Granting permission:** how fine-grained are verbs? Is the spatial grant actually faster than editing a config file?
- **Watching agents work:** does the camera follow the agent, or does the user choose where to look? What happens when three agents act at once?
- **Denial:** does the [task](task.md) fail, retry or wait for approval? Is the denial recorded as activity?
- **Investigating:** how long is activity kept?

## Terms not defined yet

- **Recipe:** listed as a primitive in Notion's Foundation layers and Data model pages, but never defined. Don't guess what it means.
