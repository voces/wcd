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
`unit whichUnit`{!language=jass}
: 

`unitweaponbooleanfield whichField`{!language=jass}
: 

`integer index`{!language=jass}
: 

## Bugs 
Might crash the game when called on a unit with no attack.
