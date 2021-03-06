---
title: CreateFogModifierRadiusLoc
types:
  - boolean
  - fogmodifier
  - fogstate
  - location
  - player
  - real
---

# CreateFogModifierRadiusLoc
Creates an object that modifies the fog in a circular radius for a specific player.

## Declaration

```jass
native CreateFogModifierRadiusLoc takes player forWhichPlayer, fogstate whichState, location center, real radius, boolean useSharedVision, boolean afterUnits returns fogmodifier
```

## Parameters
`player forWhichPlayer`{!language=jass}
: 

`fogstate whichState`{!language=jass}
: Determines what type of fog the area is being modified to.

`location center`{!language=jass}
: The location where the fog modifier begins.

`real radius`{!language=jass}
: Determines the extent that the fog travels (expanding from the location`center`).

`boolean useSharedVision`{!language=jass}
: Determines whether or not the fog modifier will be applied to allied players with shared vision.

`boolean afterUnits`{!language=jass}
: Will determine whether or not units in that area will be masked by the fog. If it is set to true and the fogstate is masked, it will hide all the units in the fog modifier's radius and mask the area. If set to false, it will only mask the areas that are not visible to the units.

## Notes 
You must use`FogModifierStart`to enable the fog modifier.
