---
title: CreateCorpse
types:
  - integer
  - player
  - real
  - unit
---

# CreateCorpse
Creates the corpse of a specific unit for a player at the coordinates ( x , y ).The unit will die upon spawning and play their decay animation, therefore theywill not necessarily be a corpse immediately after this function call. If theunit corresponding to the rawcode cannot have a corpse, then the returned value is null.

## Declaration

```jass
native CreateCorpse takes player whichPlayer, integer unitid, real x, real y, real face returns unit
```

## Parameters
whichPlayer `player`
: The owner of the corpse.

unitid `integer`
: The rawcode of the unit for the corpse.

x `real`
: The x-coordinate of the corpse.

y `real`
: The y-coordinate of the corpse.

face `real`
: Unit facing in degrees.
