---
title: CameraSetSourceNoise
types:
  - real
---

# CameraSetSourceNoise
Causes the camera's source to sway (the camera's perspective, not the camera's target).The higher the magnitude, the higher the range of swaying.The higher the velocity, the more rapidly the swaying occurs.This will not affect the camera's target coordinates.

## Declaration

```
native CameraSetSourceNoise takes real mag, real velocity returns nothing
```

## Parameters
<dl>
  <dt>mag `real`</dt>
  <dd>The magnitude of the swaying.</dd>

  <dt>velocity `real`</dt>
  <dd>The speed of the swaying.</dd>
</dl>