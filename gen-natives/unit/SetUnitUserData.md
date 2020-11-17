---
layout: default
parent: Unit
grand_parent: Natives
types:
  - integer
  - unit
---

# SetUnitUserData
Sets a single custom integer for a unit.

## Declaration

```
native SetUnitUserData takes unit whichUnit, integer data returns nothing
```

## Parameters
<dl>
  <dt>whichUnit `unit`</dt>
  <dd></dd>

  <dt>data `integer`</dt>
  <dd></dd>
</dl>

## Notes 
This value is not used by any standard mechanisms in Warcraft III norin the blizzard.j, so it is free to be harnessed.Besides`GetHandleId`, this is an excellent possibility to assign a uniqueinteger id to a unit, which can serve as an index in other data structures.