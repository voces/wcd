---
title: GetUnitX
types:
  - real
  - unit
---

# GetUnitX

## Declaration

```jass
constant native GetUnitX takes unit whichUnit returns real
```

## Parameters
whichUnit `unit`
: 

## Bugs 
If the unit is loaded into a zeppelin this will not return the positionof the zeppelin but the last position of the unit before it was loaded intothe zeppelin.
