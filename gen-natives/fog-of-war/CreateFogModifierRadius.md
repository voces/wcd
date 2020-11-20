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

```
native CreateFogModifierRadius takes player forWhichPlayer, fogstate whichState, real centerx, real centerY, real radius, boolean useSharedVision, boolean afterUnits returns fogmodifier
```

## Parameters
<dl>
  <dt>forWhichPlayer `player`</dt>
  <dd></dd>

  <dt>whichState `fogstate`</dt>
  <dd>Determines what type of fog the area is being modified to.</dd>

  <dt>centerx `real`</dt>
  <dd>The x-coordinate where the fog modifier begins.</dd>

  <dt>centerY `real`</dt>
  <dd>The y-coordinate where the fog modifier begins.</dd>

  <dt>radius `real`</dt>
  <dd>Determines the extent that the fog travels (expanding from the coordinates ( centerx , centerY )).</dd>

  <dt>useSharedVision `boolean`</dt>
  <dd>Determines whether or not the fog modifier will be applied to allied players with shared vision.</dd>

  <dt>afterUnits `boolean`</dt>
  <dd>Will determine whether or not units in that area will be masked by the fog. If it is set to true and the fogstate is masked, it will hide all the units in the fog modifier's radius and mask the area. If set to false, it will only mask the areas that are not visible to the units.</dd>
</dl>

## Notes 
You must use FogModifierStart to enable the fog modifier.