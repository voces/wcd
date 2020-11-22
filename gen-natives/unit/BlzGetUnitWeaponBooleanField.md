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

```jass
native BlzGetUnitWeaponBooleanField takes unit whichUnit, unitweaponbooleanfield whichField, integer index returns boolean
```

## Parameters
whichUnit `unit`
: 

whichField `unitweaponbooleanfield`
: 

index `integer`
: 

## Bugs 
Might crash the game when called on a unit with no attack.
