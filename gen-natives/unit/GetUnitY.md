---
title: GetUnitY
types:
  - real
  - unit
---

# GetUnitY

## Declaration

```jass
constant native GetUnitY takes unit whichUnit returns real
```

## Parameters
`unit whichUnit`{!language=jass}
: 

## Bugs 
If the unit is loaded into a zeppelin this will not return the positionof the zeppelin but the last position of the unit before it was loaded intothe zeppelin.
