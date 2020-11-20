---
title: CameraSetupApply
types:
  - boolean
  - camerasetup
---

# CameraSetupApply
Applies the camerasetup, altering the current camera's fields to match those of the camera setup.

## Declaration

```
native CameraSetupApply takes camerasetup whichSetup, boolean doPan, boolean panTimed returns nothing
```

## Parameters
<dl>
  <dt>whichSetup `camerasetup`</dt>
  <dd>The camerasetup to apply.</dd>

  <dt>doPan `boolean`</dt>
  <dd>If set to true, it will move the current camera's target coordinates to thecamera setup's target coordinates. If false, the camera will not movecoordinates, but will still apply the other fields.</dd>

  <dt>panTimed `boolean`</dt>
  <dd>If set to true, then it will change the camera's properties over the times specified in CameraSetupSetField.</dd>
</dl>