---
title: AttachSoundToUnit
types:
  - sound
  - unit
---

# AttachSoundToUnit
Attaches the sound soundHandle to unit whichUnit. Attaching sound to unit meansthat the more far away the player stays from the unit to which the sound is attached, the lessloud the sound plays (the volume of the attached sound decreases with increasing distance).

## Declaration

```jass
native AttachSoundToUnit takes sound soundHandle, unit whichUnit returns nothing
```

## Parameters
`sound soundHandle`{!language=jass}
: The 3D sound to play.

`unit whichUnit`{!language=jass}
: The unit to attach the sound to.

## Notes 
This call is only valid if the sound was created with 3d enabled
