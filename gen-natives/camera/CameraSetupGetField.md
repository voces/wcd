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

```jass
native CameraSetupGetField takes camerasetup whichSetup, camerafield whichField returns real
```

## Parameters
whichSetup `camerasetup`
: The camera setup.

whichField `camerafield`
: The field of the camerasetup.

## Notes 
The angle of attack, field of view, roll, and rotation are all returned in degrees.
