---
title: SetUnitAcquireRange
types:
  - real
  - unit
---

# SetUnitAcquireRange
Sets a unit's acquire range.  This is the value that a unit uses to choose targets toengage with.  Note that this is not the attack range.  When acquisition range isgreater than attack range, the unit will attempt to move towards acquired targets, andthen attack.Setting acquisition range lower than attack range in the object editor limits theunit's attack range to the acquisition range, but changing a unit's acquisition rangewith this native does not change its attack range, nor the value displayed in the UI.

## Declaration

```jass
native SetUnitAcquireRange takes unit whichUnit, real newAcquireRange returns nothing
```

## Parameters
`unit whichUnit`{!language=jass}
: 

`real newAcquireRange`{!language=jass}
: 

## Notes 
It is a myth that reducing acquire range with this native can limit a unit'sattack range.
