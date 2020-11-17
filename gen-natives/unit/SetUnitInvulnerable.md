---
layout: default
parent: Unit
grand_parent: Natives
types:
  - boolean
  - unit
---

# SetUnitInvulnerable
Renders a unit invulnerable/lifts that specific invulnerability.

## Declaration

```
native SetUnitInvulnerable takes unit whichUnit, boolean flag returns nothing
```

## Parameters
<dl>
  <dt>whichUnit `unit`</dt>
  <dd></dd>

  <dt>flag `boolean`</dt>
  <dd></dd>
</dl>

## Notes 
The native seems to employ the`'Avul'`ability, which is defined in thedefault AbilityData.slk.If there is no`'Avul'`defined, this will crash the game.