---
title: CreateFogModifierRadius
types:
  - boolean
  - fogmodifier
  - fogstate
  - player
  - real
---

# CreateFogModifierRadius
Creates an object that modifies the fog in a circular radius for a specific player.

## Declaration

```jass
native CreateFogModifierRadius takes player forWhichPlayer, fogstate whichState, real centerx, real centerY, real radius, boolean useSharedVision, boolean afterUnits returns fogmodifier
```

## Parameters
forWhichPlayer `player`
: 

whichState `fogstate`
: Determines what type of fog the area is being modified to.

centerx `real`
: The x-coordinate where the fog modifier begins.

centerY `real`
: The y-coordinate where the fog modifier begins.

radius `real`
: Determines the extent that the fog travels (expanding from the coordinates ( centerx , centerY )).

useSharedVision `boolean`
: Determines whether or not the fog modifier will be applied to allied players with shared vision.

afterUnits `boolean`
: Will determine whether or not units in that area will be masked by the fog. If it is set to true and the fogstate is masked, it will hide all the units in the fog modifier's radius and mask the area. If set to false, it will only mask the areas that are not visible to the units.

## Notes 
You must use FogModifierStart to enable the fog modifier.
