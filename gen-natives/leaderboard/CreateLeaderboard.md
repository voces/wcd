---
layout: default
parent: Unit
grand_parent: Natives
types:
  - leaderboard
---

# CreateLeaderboard
Creates a leaderboard handle.Leaderboards initially have 0 rows, 0 columns, and no label.

## Declaration

```
native CreateLeaderboard takes nothing returns leaderboard
```

## Bugs 
Do not use this in a global initialisation as it crashes the game there.