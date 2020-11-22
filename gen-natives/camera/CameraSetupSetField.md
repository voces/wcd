---
title: CameraSetupSetField
types:
  - camerafield
  - camerasetup
  - real
---

# CameraSetupSetField
Assigns a value to the specified field for a camerasetup. The input angles should be in degrees.

## Declaration

```jass
native CameraSetupSetField takes camerasetup whichSetup, camerafield whichField, real value, real duration returns nothing
```

## Parameters
whichSetup `camerasetup`
: The camera setup.

whichField `camerafield`
: The field of the camerasetup.

value `real`
: The value to assign to the field.

duration `real`
: The duration over which the field will be set. If the duration is greaterthan 0, the changes will be made gradually once the camera setup is applied.
