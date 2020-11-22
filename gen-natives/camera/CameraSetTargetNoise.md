---
title: CameraSetTargetNoise
types:
  - real
---

# CameraSetTargetNoise
Causes the camera's target to sway(the camera's target, not the camera's perspective).The higher the magnitude, the higher the range of swaying.The higher the velocity, the more rapidly the swaying occurs.

## Declaration

```jass
native CameraSetTargetNoise takes real mag, real velocity returns nothing
```

## Parameters
`real mag`{!language=jass}
: The magnitude of the swaying.

`real velocity`{!language=jass}
: The speed of the swaying.
