---
title: AttachSoundToUnit
types:
  - sound
  - unit
---

# AttachSoundToUnit
Attaches the sound soundHandle to unit whichUnit. Attaching sound to unit meansthat the more far away the player stays from the unit to which the sound is attached, the lessloud the sound plays (the volume of the attached sound decreases with increasing distance).

## Declaration

```
native AttachSoundToUnit takes sound soundHandle, unit whichUnit returns nothing
```

## Parameters
<dl>
  <dt>soundHandle `sound`</dt>
  <dd>The 3D sound to play.</dd>

  <dt>whichUnit `unit`</dt>
  <dd>The unit to attach the sound to.</dd>
</dl>

## Notes 
This call is only valid if the sound was created with 3d enabled