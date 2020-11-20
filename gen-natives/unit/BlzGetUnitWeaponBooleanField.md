---
title: BlzGetUnitWeaponBooleanField
types:
  - boolean
  - integer
  - unit
  - unitweaponbooleanfield
patch: 1.31
---

# BlzGetUnitWeaponBooleanField

## Declaration

```
native BlzGetUnitWeaponBooleanField takes unit whichUnit, unitweaponbooleanfield whichField, integer index returns boolean
```

## Parameters
<dl>
  <dt>whichUnit `unit`</dt>
  <dd></dd>

  <dt>whichField `unitweaponbooleanfield`</dt>
  <dd></dd>

  <dt>index `integer`</dt>
  <dd></dd>
</dl>

## Bugs 
Might crash the game when called on a unit with no attack.