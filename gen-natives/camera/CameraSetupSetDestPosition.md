---
layout: default
parent: Unit
grand_parent: Natives
types:
  - camerasetup
  - real
---

# CameraSetupSetDestPosition
Sets the target coordinates for a camerasetup over a duration. The coordinatechange will only be applied when`CameraSetupApply`(or some other variant) is ran.

## Declaration

```
native CameraSetupSetDestPosition takes camerasetup whichSetup, real x, real y, real duration returns nothing
```

## Parameters
<dl>
  <dt>whichSetup `camerasetup`</dt>
  <dd>The camera setup.</dd>

  <dt>x `real`</dt>
  <dd>The target x-coordinate.</dd>

  <dt>y `real`</dt>
  <dd>The target y-coordinate.</dd>

  <dt>duration `real`</dt>
  <dd>The coordinates will be applied over this duration once the camera setup is applied.</dd>
</dl>