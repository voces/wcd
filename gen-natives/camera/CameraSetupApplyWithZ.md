---
title: CameraSetupApplyWithZ
types:
  - camerasetup
  - real
---

# CameraSetupApplyWithZ
Applies the camerasetup with a custom z-offset, altering the current camera'sfields to match those of the camera setup. The z-offset input will overridethe z-offset specified by the camerasetup through`CameraSetupSetField`.

## Declaration

```jass
native CameraSetupApplyWithZ takes camerasetup whichSetup, real zDestOffset returns nothing
```

## Parameters
`camerasetup whichSetup`{!language=jass}
: The camerasetup to apply.

`real zDestOffset`{!language=jass}
: The camera's z-offset will gradually change to this value over the specified duration.

## Bugs 
If a player pauses the game after the camerasetup has been applied, thez-offset of the game camera will change to the z-offset of the camerasetup for that player.
