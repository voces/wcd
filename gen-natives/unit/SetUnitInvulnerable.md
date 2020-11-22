---
title: SetUnitInvulnerable
types:
  - boolean
  - unit
---

# SetUnitInvulnerable
Renders a unit invulnerable/lifts that specific invulnerability.

## Declaration

```jass
native SetUnitInvulnerable takes unit whichUnit, boolean flag returns nothing
```

## Parameters
`unit whichUnit`{!language=jass}
: 

`boolean flag`{!language=jass}
: 

## Notes 
The native seems to employ the`'Avul'`ability, which is defined in thedefault AbilityData.slk.If there is no`'Avul'`defined, this will crash the game.
