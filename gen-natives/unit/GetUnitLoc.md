---
layout: default
parent: Unit
grand_parent: Natives
types:
  - location
  - unit
---

# GetUnitLoc

## Declaration

```
constant native GetUnitLoc takes unit whichUnit returns location
```

## Parameters
<dl>
  <dt>whichUnit `unit`</dt>
  <dd></dd>
</dl>

## Bugs 
If the unit is loaded into a zeppelin this will not return the positionof the zeppelin but the last position of the unit before it was loaded intothe zeppelin.