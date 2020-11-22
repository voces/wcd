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
`camerasetup whichSetup`{!language=jass}
: The camerasetup to apply.

`real zDestOffset`{!language=jass}
: The camera's z-offset will gradually change to this value over the specified duration.

`real forceDuration`{!language=jass}
: The duration it will take to apply all the camera fields.It will ignore the times set by CameraSetupSetField.
