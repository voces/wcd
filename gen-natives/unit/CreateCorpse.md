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
`player whichPlayer`{!language=jass}
: The owner of the corpse.

`integer unitid`{!language=jass}
: The rawcode of the unit for the corpse.

`real x`{!language=jass}
: The x-coordinate of the corpse.

`real y`{!language=jass}
: The y-coordinate of the corpse.

`real face`{!language=jass}
: Unit facing in degrees.
