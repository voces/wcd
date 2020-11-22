---
title: CameraSetupApplyForceDurationWithZ
types:
  - camerasetup
  - real
---

# CameraSetupApplyForceDurationWithZ
Applies the camerasetup over a certain duration with a custom z-offset value,altering the current camera's fields to match those of the camera setup.The z-offset input will override the z-offset specified by`CameraSetupSetField`.

## Declaration

```jass
native CameraSetupApplyForceDurationWithZ takes camerasetup whichSetup, real zDestOffset, real forceDuration returns nothing
```

## Parameters
whichSetup `camerasetup`
: The camerasetup to apply.

zDestOffset `real`
: The camera's z-offset will gradually change to this value over the specified duration.

forceDuration `real`
: The duration it will take to apply all the camera fields.It will ignore the times set by CameraSetupSetField.
