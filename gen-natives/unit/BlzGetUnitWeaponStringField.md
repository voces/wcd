---
layout: default
parent: Unit
grand_parent: Natives
types:
  - integer
  - string
  - unit
  - unitweaponstringfield
patch: 1.31
---

# BlzGetUnitWeaponStringField

## Declaration

```
native BlzGetUnitWeaponStringField takes unit whichUnit, unitweaponstringfield whichField, integer index returns string
```

## Parameters
<dl>
  <dt>whichUnit `unit`</dt>
  <dd></dd>

  <dt>whichField `unitweaponstringfield`</dt>
  <dd></dd>

  <dt>index `integer`</dt>
  <dd></dd>
</dl>

## Bugs 
Might crash the game when called on a unit with no attack.