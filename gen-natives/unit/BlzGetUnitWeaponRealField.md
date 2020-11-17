---
layout: default
parent: Unit
grand_parent: Natives
types:
  - integer
  - real
  - unit
  - unitweaponrealfield
patch: 1.31
---

# BlzGetUnitWeaponRealField

## Declaration

```
native BlzGetUnitWeaponRealField takes unit whichUnit, unitweaponrealfield whichField, integer index returns real
```

## Parameters
<dl>
  <dt>whichUnit `unit`</dt>
  <dd></dd>

  <dt>whichField `unitweaponrealfield`</dt>
  <dd></dd>

  <dt>index `integer`</dt>
  <dd></dd>
</dl>

## Bugs 
Might crash the game when called on a unit with no attack.