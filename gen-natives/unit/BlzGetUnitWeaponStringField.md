---
title: BlzGetUnitWeaponStringField
types:
  - integer
  - string
  - unit
  - unitweaponstringfield
patch: 1.31
---

# BlzGetUnitWeaponStringField

## Declaration

```jass
native BlzGetUnitWeaponStringField takes unit whichUnit, unitweaponstringfield whichField, integer index returns string
```

## Parameters
whichUnit `unit`
: 

whichField `unitweaponstringfield`
: 

index `integer`
: 

## Bugs 
Might crash the game when called on a unit with no attack.
