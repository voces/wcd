---
title: CameraSetupApplyForceDuration
types:
  - boolean
  - camerasetup
  - real
---

# CameraSetupApplyForceDuration
Applies the camerasetup over a certain duration, altering the currentcamera's fields to match those of the camera setup.

## Declaration

```jass
native CameraSetupApplyForceDuration takes camerasetup whichSetup, boolean doPan, real forceDuration returns nothing
```

## Parameters
`camerasetup whichSetup`{!language=jass}
: The camerasetup to apply.

`boolean doPan`{!language=jass}
: If set to true, it will move the current camera's target coordinates to thecamera setup's target coordinates. If false, the camera will not movecoordinates, but will still apply the other fields.

`real forceDuration`{!language=jass}
: The duration it will take to apply all the camera fields.It will ignore the times set by CameraSetupSetField.
