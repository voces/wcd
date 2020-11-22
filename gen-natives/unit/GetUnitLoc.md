---
title: GetUnitLoc
types:
  - location
  - unit
---

# GetUnitLoc

## Declaration

```jass
constant native GetUnitLoc takes unit whichUnit returns location
```

## Parameters
whichUnit `unit`
: 

## Bugs 
If the unit is loaded into a zeppelin this will not return the positionof the zeppelin but the last position of the unit before it was loaded intothe zeppelin.
