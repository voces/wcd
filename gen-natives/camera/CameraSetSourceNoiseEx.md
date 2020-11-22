---
title: CameraSetSourceNoiseEx
types:
  - boolean
  - real
---

# CameraSetSourceNoiseEx
Causes the camera to sway in the same fashion as`CameraSetSourceNoise`.

## Declaration

```jass
native CameraSetSourceNoiseEx takes real mag, real velocity, boolean vertOnly returns nothing
```

## Parameters
mag `real`
: The magnitude of the swaying.

velocity `real`
: The speed of the swaying.

vertOnly `boolean`
: Stands for "vertical only". If true, then only the angle of attack, target distance, and z-offset of the camera will be modified. (the rotation will not be modified)
