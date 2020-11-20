---
title: BlzGetAbsorbingItem
types:
  - item
patch: 1.32.3
---

# BlzGetAbsorbingItem
For EVENT_PLAYER_UNIT_PICKUP_ITEM, returns the item absorbing the picked up item in case it is stacking.Returns null if the item was a powerup and not a stacking item.

## Declaration

```
constant native BlzGetAbsorbingItem takes nothing returns item
```