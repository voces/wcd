---
layout: default
parent: Unit
grand_parent: Natives
types:
  - boolean
  - real
---

# CameraSetTargetNoiseEx
Causes the camera's target to sway, just like CameraSetTargetNoise. (the camera's target, not the camera's perspective) The higher the magnitude, the higher the range of swaying. The higher the velocity, the more rapidly the swaying occurs.Causes the camera's source to sway (the camera's perspective, not the camera's target).The higher the magnitude, the higher the range of swaying.The higher the velocity, the more rapidly the swaying occurs.This will not affect the camera's target coordinates.

## Declaration

```
native CameraSetTargetNoiseEx takes real mag, real velocity, boolean vertOnly returns nothing
```

## Parameters
<dl>
  <dt>mag `real`</dt>
  <dd>The magnitude of the swaying.</dd>

  <dt>velocity `real`</dt>
  <dd>The speed of the swaying.</dd>

  <dt>vertOnly `boolean`</dt>
  <dd>Stands for "vertical only". If set to true, then the swaying will only modify target distance and z-offset.</dd>
</dl>