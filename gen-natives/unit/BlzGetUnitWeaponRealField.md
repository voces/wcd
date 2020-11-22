---
title: BlzGetUnitWeaponRealField
types:
  - integer
  - real
  - unit
  - unitweaponrealfield
patch: 1.31
---

# BlzGetUnitWeaponRealField

## Declaration

```jass
native BlzGetUnitWeaponRealField takes unit whichUnit, unitweaponrealfield whichField, integer index returns real
```

## Parameters
whichUnit `unit`
: 

whichField `unitweaponrealfield`
: 

index `integer`
: 

## Bugs 
Might crash the game when called on a unit with no attack.
