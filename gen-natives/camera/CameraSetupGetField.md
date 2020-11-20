---
title: CameraSetupGetField
types:
  - camerafield
  - camerasetup
  - real
---

# CameraSetupGetField
Returns the value of the specified field for a camerasetup. The angle of attack,field of view, roll, and rotation are all returned in degrees, unlike`GetCameraField`.

## Declaration

```
native CameraSetupGetField takes camerasetup whichSetup, camerafield whichField returns real
```

## Parameters
<dl>
  <dt>whichSetup `camerasetup`</dt>
  <dd>The camera setup.</dd>

  <dt>whichField `camerafield`</dt>
  <dd>The field of the camerasetup.</dd>
</dl>

## Notes 
The angle of attack, field of view, roll, and rotation are all returned in degrees.