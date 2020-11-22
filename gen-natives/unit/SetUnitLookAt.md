---
title: SetUnitLookAt
types:
  - real
  - string
  - unit
---

# SetUnitLookAt
Locks a unit's bone to face the target until ResetUnitLookAt is called.The offset coordinates ( X, Y, Z ) are taken from the target's origin.The bones will lock to the lookAtTarget, offset by those coordinates. You can'thave both the head and the chest locked to the target at the same time.

## Declaration

```jass
native SetUnitLookAt takes unit whichUnit, string whichBone, unit lookAtTarget, real offsetX, real offsetY, real offsetZ returns nothing
```

## Parameters
`unit whichUnit`{!language=jass}
: The unit that will have its bone locked to face the target.

`string whichBone`{!language=jass}
: The bone to lock onto the target. The engine only supportslocking the head and the chest. To lock the head, you can put in any inputexcept a null string. To lock the chest, the string must start with`"bone_chest"`.All leading spaces are ignored, it is case insensitive, and anything after thefirst non-leading space will be ignored.

`unit lookAtTarget`{!language=jass}
: The bone will be locked to face this unit.

`real offsetX`{!language=jass}
: The x-offset from lookAtTarget's origin point.

`real offsetY`{!language=jass}
: The y-offset from lookAtTarget's origin point.

`real offsetZ`{!language=jass}
: The z-offset from lookAtTarget's origin point (this already factors in the terrain Z).

## Notes 
The parameter`whichBone`can only move the head bones and the chest bones.All other input will default to the head bone. However, the function only looksfor the helper named`"Bone_Head"`(or`"Bone_Chest"`) in the MDL, so you can justrename a helper so that it will move that set of bones instead.
SetUnitLookAt is affected by animation speed and blend time.
[How to instantly set a unit's facing](http://www.wc3c.net/showthread.php?t=105830)
