---
title: DefineStartLocationLoc
types:
  - integer
  - location
---

# DefineStartLocationLoc
Defines a player's start location at the specified location. The startlocation determines where the camera is initially positioned. For melee maps,it will also determine where the player's first town hall structure will be placed.

## Declaration

```jass
native DefineStartLocationLoc takes integer whichStartLoc, location whichLocation returns nothing
```

## Parameters
`integer whichStartLoc`{!language=jass}
: The ID of the player for the starting location. See`GetPlayerStartLocation`.

`location whichLocation`{!language=jass}
: The location of the start location.

## Notes 
It is only recommended to use this in the`config`function in the war3map.j.Using it elsewhere will affect the returned values of`GetStartLocationX`and`GetStartLocationY`, but will have no effect on the camera's initial position andthe melee starting positions.
