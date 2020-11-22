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
`camerasetup whichSetup`{!language=jass}
: The camera setup.

`camerafield whichField`{!language=jass}
: The field of the camerasetup.

`real value`{!language=jass}
: The value to assign to the field.

`real duration`{!language=jass}
: The duration over which the field will be set. If the duration is greaterthan 0, the changes will be made gradually once the camera setup is applied.
