---
title: CameraSetupSetDestPosition
types:
  - camerasetup
  - real
---

# CameraSetupSetDestPosition
Sets the target coordinates for a camerasetup over a duration. The coordinatechange will only be applied when`CameraSetupApply`(or some other variant) is ran.

## Declaration

```jass
native CameraSetupSetDestPosition takes camerasetup whichSetup, real x, real y, real duration returns nothing
```

## Parameters
whichSetup `camerasetup`
: The camera setup.

x `real`
: The target x-coordinate.

y `real`
: The target y-coordinate.

duration `real`
: The coordinates will be applied over this duration once the camera setup is applied.
