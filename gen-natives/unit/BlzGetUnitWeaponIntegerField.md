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

```jass
native BlzGetUnitWeaponIntegerField takes unit whichUnit, unitweaponintegerfield whichField, integer index returns integer
```

## Parameters
whichUnit `unit`
: 

whichField `unitweaponintegerfield`
: 

index `integer`
: 

## Bugs 
Might crash the game when called on a unit with no attack.
