---
title: SetUnitX
types:
  - real
  - unit
---

# SetUnitX

## Declaration

```jass
native SetUnitX takes unit whichUnit, real newX returns nothing
```

## Parameters
`unit whichUnit`{!language=jass}
: 

`real newX`{!language=jass}
: 

## Notes 
If the unit has movementspeed of zero the unit will be moved but the modelof the unit will not move.
This does not cancel orders of the unit.`SetUnitPosition`does cancel orders.
