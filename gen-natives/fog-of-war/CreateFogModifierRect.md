---
title: CreateFogModifierRect
types:
  - boolean
  - fogmodifier
  - fogstate
  - player
  - rect
---

# CreateFogModifierRect
Creates an object that modifies the fog in a rect for a specific player.

## Declaration

```jass
native CreateFogModifierRect takes player forWhichPlayer, fogstate whichState, rect where, boolean useSharedVision, boolean afterUnits returns fogmodifier
```

## Parameters
`player forWhichPlayer`{!language=jass}
: 

`fogstate whichState`{!language=jass}
: Determines what type of fog the area is being modified to.

`rect where`{!language=jass}
: The rect where the fog is

`boolean useSharedVision`{!language=jass}
: Determines whether or not the fog modifier will be applied to allied players with shared vision.

`boolean afterUnits`{!language=jass}
: Will determine whether or not units in that area will be masked by the fog. If it is set to true and the fogstate is masked, it will hide all the units in the fog modifier's radius and mask the area. If set to false, it will only mask the areas that are not visible to the units.
