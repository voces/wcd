---
layout: default
parent: Unit
grand_parent: Natives
types:
  - camerafield
  - camerasetup
  - real
---

# CameraSetupSetField
Assigns a value to the specified field for a camerasetup. The input angles should be in degrees.

## Declaration

```
native CameraSetupSetField takes camerasetup whichSetup, camerafield whichField, real value, real duration returns nothing
```

## Parameters
<dl>
  <dt>whichSetup `camerasetup`</dt>
  <dd>The camera setup.</dd>

  <dt>whichField `camerafield`</dt>
  <dd>The field of the camerasetup.</dd>

  <dt>value `real`</dt>
  <dd>The value to assign to the field.</dd>

  <dt>duration `real`</dt>
  <dd>The duration over which the field will be set. If the duration is greaterthan 0, the changes will be made gradually once the camera setup is applied.</dd>
</dl>