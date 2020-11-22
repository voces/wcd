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
whichSetup `camerasetup`
: The camerasetup to apply.

doPan `boolean`
: If set to true, it will move the current camera's target coordinates to thecamera setup's target coordinates. If false, the camera will not movecoordinates, but will still apply the other fields.

panTimed `boolean`
: If set to true, then it will change the camera's properties over the times specified in CameraSetupSetField.
