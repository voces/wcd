---
layout: default
parent: Unit
grand_parent: Natives
types:
  - real
  - unit
---

# GetUnitY

## Declaration

```
constant native GetUnitY takes unit whichUnit returns real
```

## Parameters
<dl>
  <dt>whichUnit `unit`</dt>
  <dd></dd>
</dl>

## Bugs 
If the unit is loaded into a zeppelin this will not return the positionof the zeppelin but the last position of the unit before it was loaded intothe zeppelin.