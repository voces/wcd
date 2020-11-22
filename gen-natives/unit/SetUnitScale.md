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
whichUnit `unit`
: 

scaleX `real`
: This is actually the scale for *all* dimensions

scaleY `real`
: This parameter is not taken into account

scaleZ `real`
: This parameter is not taken into account

## Bugs 
Only takes scaleX into account and uses scaleX for all three dimensions.
