---
title: SetUnitPosition
types:
  - real
  - unit
---

# SetUnitPosition

## Declaration

```jass
native SetUnitPosition takes unit whichUnit, real newX, real newY returns nothing
```

## Parameters
`unit whichUnit`{!language=jass}
: 

`real newX`{!language=jass}
: 

`real newY`{!language=jass}
: 

## Notes 
This cancels the orders of the unit. If you want to move a unit withoutcanceling its orders use`SetUnitX`/`SetUnitY`.
