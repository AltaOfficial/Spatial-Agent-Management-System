[Map](../../.claude/CLAUDE.md) › Domain › Building

# Building

> Draft v0, not settled. Source: the SAMS Notion workspace (Domain glossary, Overview, User Flows).

The top-level container. One deployment, one install, for one org or one person. A building contains [rooms](room.md).

## In the user flows

- **First run:** the app opens on a prebuilt starter building, with the camera resting on a single room. One [agent](agent.md) is already there, idle, and at least one [object](object.md) is already bound and working. Notion calls an empty first run "the worst possible first-run answer."
- **Investigate what happened:** the user opens a timeline, scrubs backward, and the building replays what agents did. See [activity](activity.md).

## In the milestones

- **Milestone 2, "a building":** proves that rooms compose.
- **Milestone 3, "multiple users in a building":** proves roles and permissions.
- **Milestone 5, "user avatars in the building":** proves presence.

## Notes

- The planned client shell includes navigation between buildings, so one client may show more than one building.

## Related

[Room](room.md) · [Agent](agent.md) · [Activity](activity.md)

## In code

Not built yet. The "New Building" button in `app/src/renderer/src/components/RandomComponent.tsx` is a placeholder with no behaviour.
