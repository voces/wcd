---
title: SetUnitScale
types:
  - real
  - unit
---

# SetUnitScale

## Declaration

```jass
native SetUnitScale takes unit whichUnit, real scaleX, real scaleY, real scaleZ returns nothing
```

## Parameters
`unit whichUnit`{!language=jass}
: 

`real scaleX`{!language=jass}
: This is actually the scale for *all* dimensions

`real scaleY`{!language=jass}
: This parameter is not taken into account

`real scaleZ`{!language=jass}
: This parameter is not taken into account

## Bugs 
Only takes scaleX into account and uses scaleX for all three dimensions.
