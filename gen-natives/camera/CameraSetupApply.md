---
title: CameraSetupApply
types:
  - boolean
  - camerasetup
---

# CameraSetupApply
Applies the camerasetup, altering the current camera's fields to match those of the camera setup.

## Declaration

```jass
native CameraSetupApply takes camerasetup whichSetup, boolean doPan, boolean panTimed returns nothing
```

## Parameters
`camerasetup whichSetup`{!language=jass}
: The camerasetup to apply.

`boolean doPan`{!language=jass}
: If set to true, it will move the current camera's target coordinates to thecamera setup's target coordinates. If false, the camera will not movecoordinates, but will still apply the other fields.

`boolean panTimed`{!language=jass}
: If set to true, then it will change the camera's properties over the times specified in CameraSetupSetField.
