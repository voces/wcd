---
layout: default
parent: Unit
grand_parent: Natives
types:
  - camerasetup
  - real
---

# CameraSetupApplyWithZ
Applies the camerasetup with a custom z-offset, altering the current camera'sfields to match those of the camera setup. The z-offset input will overridethe z-offset specified by the camerasetup through`CameraSetupSetField`.

## Declaration

```
native CameraSetupApplyWithZ takes camerasetup whichSetup, real zDestOffset returns nothing
```

## Parameters
<dl>
  <dt>whichSetup `camerasetup`</dt>
  <dd>The camerasetup to apply.</dd>

  <dt>zDestOffset `real`</dt>
  <dd>The camera's z-offset will gradually change to this value over the specified duration.</dd>
</dl>

## Bugs 
If a player pauses the game after the camerasetup has been applied, thez-offset of the game camera will change to the z-offset of the camerasetup for that player.