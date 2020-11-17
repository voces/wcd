---
layout: default
parent: Unit
grand_parent: Natives
types:
  - player
---

# CachePlayerHeroData
Used to store hero level data for the scorescreen, before units are movedto neutral passive in melee games.

## Declaration

```
native CachePlayerHeroData takes player whichPlayer returns nothing
```

## Parameters
<dl>
  <dt>whichPlayer `player`</dt>
  <dd>The player to store hero data for.</dd>
</dl>