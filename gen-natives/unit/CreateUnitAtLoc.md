---
title: CreateUnitAtLoc
types:
  - integer
  - location
  - player
  - real
  - unit
---

# CreateUnitAtLoc

## Declaration

```jass
native CreateUnitAtLoc takes player id, integer unitid, location whichLocation, real face returns unit
```

## Parameters
`player id`{!language=jass}
: The owner of the unit.

`integer unitid`{!language=jass}
: The rawcode of the unit.

`location whichLocation`{!language=jass}
: The position of the unit.

`real face`{!language=jass}
: Unit facing in degrees.
