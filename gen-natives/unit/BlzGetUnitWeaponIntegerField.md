---
title: BlzGetUnitWeaponIntegerField
types:
  - integer
  - unit
  - unitweaponintegerfield
patch: 1.31
---

# BlzGetUnitWeaponIntegerField

## Declaration

```
native BlzGetUnitWeaponIntegerField takes unit whichUnit, unitweaponintegerfield whichField, integer index returns integer
```

## Parameters
<dl>
  <dt>whichUnit `unit`</dt>
  <dd></dd>

  <dt>whichField `unitweaponintegerfield`</dt>
  <dd></dd>

  <dt>index `integer`</dt>
  <dd></dd>
</dl>

## Bugs 
Might crash the game when called on a unit with no attack.