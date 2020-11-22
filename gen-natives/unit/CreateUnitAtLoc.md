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
id `player`
: The owner of the unit.

unitid `integer`
: The rawcode of the unit.

whichLocation `location`
: The position of the unit.

face `real`
: Unit facing in degrees.
