---
layout: default
parent: Unit
grand_parent: Natives
types:
  - real
  - unit
---

# SetUnitX

## Declaration

```
native SetUnitX takes unit whichUnit, real newX returns nothing
```

## Parameters
<dl>
  <dt>whichUnit `unit`</dt>
  <dd></dd>

  <dt>newX `real`</dt>
  <dd></dd>
</dl>

## Notes 
If the unit has movementspeed of zero the unit will be moved but the modelof the unit will not move.
This does not cancel orders of the unit.`SetUnitPosition`does cancel orders.