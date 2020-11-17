---
layout: default
parent: Unit
grand_parent: Natives
types:
  - integer
  - sound
---

# SetSoundVolume
Sets the sounds volume

## Declaration

```
native SetSoundVolume takes sound soundHandle, integer volume returns nothing
```

## Parameters
<dl>
  <dt>soundHandle `sound`</dt>
  <dd>which sound</dd>

  <dt>volume `integer`</dt>
  <dd>Volume, between 0 and 127.</dd>
</dl>