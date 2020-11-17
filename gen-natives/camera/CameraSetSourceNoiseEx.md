---
layout: default
parent: Unit
grand_parent: Natives
types:
  - boolean
  - real
---

# CameraSetSourceNoiseEx
Causes the camera to sway in the same fashion as`CameraSetSourceNoise`.

## Declaration

```
native CameraSetSourceNoiseEx takes real mag, real velocity, boolean vertOnly returns nothing
```

## Parameters
<dl>
  <dt>mag `real`</dt>
  <dd>The magnitude of the swaying.</dd>

  <dt>velocity `real`</dt>
  <dd>The speed of the swaying.</dd>

  <dt>vertOnly `boolean`</dt>
  <dd>Stands for "vertical only". If true, then only the angle of attack, target distance, and z-offset of the camera will be modified. (the rotation will not be modified)</dd>
</dl>