---
title: DefineStartLocation
types:
  - integer
  - real
---

# DefineStartLocation
Defines a player's start location at the specified coordinates. The startlocation determines where the camera is initially positioned. For melee maps,it will also determine where the player's first town hall structure will be placed.

## Declaration

```jass
native DefineStartLocation takes integer whichStartLoc, real x, real y returns nothing
```

## Parameters
`integer whichStartLoc`{!language=jass}
: The ID of the player for the starting location. See`GetPlayerStartLocation`.

`real x`{!language=jass}
: The x-coordinate of the start location.

`real y`{!language=jass}
: The y-coordinate of the start location.

## Notes 
It is only recommended to use this in the`config`function in the war3map.j.Using it elsewhere will affect the returned values of`GetStartLocationX`and`GetStartLocationY`, but will have no effect on the camera's initial position andthe melee starting positions.
