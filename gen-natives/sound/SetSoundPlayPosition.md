---
layout: default
parent: Unit
grand_parent: Natives
types:
  - integer
  - sound
---

# SetSoundPlayPosition

## Declaration

```
native SetSoundPlayPosition takes sound soundHandle, integer millisecs returns nothing
```

## Parameters
<dl>
  <dt>soundHandle `sound`</dt>
  <dd></dd>

  <dt>millisecs `integer`</dt>
  <dd></dd>
</dl>

## Notes 
Must be called immediately after calling StartSound.