---
title: PauseUnit
types:
  - boolean
  - unit
---

# PauseUnit
Pauses a unit. A paused unit has the following properties:Buffs/effects are suspendedOrders are stored when paused and fired on unpauseThe paused unit does not accept powerups.`UnitAddItem`returns true butthe item is not picked up

## Declaration

```
native PauseUnit takes unit whichUnit, boolean flag returns nothing
```

## Parameters
<dl>
  <dt>whichUnit `unit`</dt>
  <dd></dd>

  <dt>flag `boolean`</dt>
  <dd></dd>
</dl>