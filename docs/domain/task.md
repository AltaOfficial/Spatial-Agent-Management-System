[Map](../../.claude/CLAUDE.md) › Domain › Task

# Task

> Draft v0, not settled. Source: the SAMS Notion workspace (Domain glossary, User Flows).

A unit of work assigned to an [agent](agent.md).

## Lifecycle

```
assigned → in progress → done
                       → failed
```

## In the user flows

- **Denial:** when an agent is refused by an [object](object.md), it is not decided what happens to the task. It could fail, retry, or wait until someone approves access.

## Open decisions

- What a denial does to a task. See [raised by the user flows](open-decisions.md#raised-by-the-user-flows).

## Related

[Agent](agent.md) · [Permission](permission.md) · [Activity](activity.md)

## In code

Not built yet.
