---
layout: default
parent: Unit
grand_parent: Natives
types:
  - real
---

# CameraSetTargetNoise
Causes the camera's target to sway(the camera's target, not the camera's perspective).The higher the magnitude, the higher the range of swaying.The higher the velocity, the more rapidly the swaying occurs.

## Declaration

```
native CameraSetTargetNoise takes real mag, real velocity returns nothing
```

## Parameters
<dl>
  <dt>mag `real`</dt>
  <dd>The magnitude of the swaying.</dd>

  <dt>velocity `real`</dt>
  <dd>The speed of the swaying.</dd>
</dl>