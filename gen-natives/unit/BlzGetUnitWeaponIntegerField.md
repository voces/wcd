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
`unit whichUnit`{!language=jass}
: 

`unitweaponintegerfield whichField`{!language=jass}
: 

`integer index`{!language=jass}
: 

## Bugs 
Might crash the game when called on a unit with no attack.
