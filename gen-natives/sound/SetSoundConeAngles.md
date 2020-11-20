---
title: SetSoundConeAngles
types:
  - integer
  - real
  - sound
---

# SetSoundConeAngles

## Declaration

```
native SetSoundConeAngles takes sound soundHandle, real inside, real outside, integer outsideVolume returns nothing
```

## Parameters
<dl>
  <dt>soundHandle `sound`</dt>
  <dd></dd>

  <dt>inside `real`</dt>
  <dd></dd>

  <dt>outside `real`</dt>
  <dd></dd>

  <dt>outsideVolume `integer`</dt>
  <dd></dd>
</dl>

## Notes 
This call is only valid if the sound was created with 3d enabled