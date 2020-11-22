---
title: SetUnitY
types:
  - real
  - unit
---

# SetUnitY

## Declaration

```jass
native SetUnitY takes unit whichUnit, real newY returns nothing
```

## Parameters
`unit whichUnit`{!language=jass}
: 

`real newY`{!language=jass}
: 

## Notes 
If the unit has movementspeed of zero the unit will be moved but the modelof the unit will not move.
This does not cancel orders of the unit.`SetUnitPosition`does cancel orders.
