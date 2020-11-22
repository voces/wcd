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
`camerasetup whichSetup`{!language=jass}
: The camera setup.

`real x`{!language=jass}
: The target x-coordinate.

`real y`{!language=jass}
: The target y-coordinate.

`real duration`{!language=jass}
: The coordinates will be applied over this duration once the camera setup is applied.
