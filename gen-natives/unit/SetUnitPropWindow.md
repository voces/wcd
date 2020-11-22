---
title: SetUnitPropWindow
types:
  - real
  - unit
---

# SetUnitPropWindow
Sets a unit's propulsion window to the specified angle (in radians).The propulsion window determines at which facing angle difference to the targetcommand's location (move, attack, patrol, smart) a unit will begin to move ifmovement is required to fulfil the command, or if it will turn without movement.A propulsion window of 0 makes the unit unable to move at all.A propulsion window of 180 will force it to start moving as soon as the commandis given (if movement is required). In practice, this means that setting aunit's prop window to 0 will prevent it from attacking.<http://www.hiveworkshop.com/forums/2391397-post20.html>

## Declaration

```jass
native SetUnitPropWindow takes unit whichUnit, real newPropWindowAngle returns nothing
```

## Parameters
whichUnit `unit`
: The function will modify this unit's propulsion window.

newPropWindowAngle `real`
: The propulsion window angle to assign. Should be in radians.
