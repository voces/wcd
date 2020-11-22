---
title: PauseUnit
types:
  - boolean
  - unit
---

# PauseUnit
Pauses a unit. A paused unit has the following properties:Buffs/effects are suspendedOrders are stored when paused and fired on unpauseThe paused unit does not accept powerups.`UnitAddItem`returns true butthe item is not picked up

## Declaration

```jass
native PauseUnit takes unit whichUnit, boolean flag returns nothing
```

## Parameters
whichUnit `unit`
: 

flag `boolean`
: 
