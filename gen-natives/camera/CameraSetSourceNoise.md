---
title: CameraSetSourceNoise
types:
  - real
---

# CameraSetSourceNoise
Causes the camera's source to sway (the camera's perspective, not the camera's target).The higher the magnitude, the higher the range of swaying.The higher the velocity, the more rapidly the swaying occurs.This will not affect the camera's target coordinates.

## Declaration

```jass
native CameraSetSourceNoise takes real mag, real velocity returns nothing
```

## Parameters
mag `real`
: The magnitude of the swaying.

velocity `real`
: The speed of the swaying.
