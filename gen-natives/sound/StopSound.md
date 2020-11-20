---
title: StopSound
types:
  - boolean
  - sound
---

# StopSound
Stops the sound.

## Declaration

```
native StopSound takes sound soundHandle, boolean killWhenDone, boolean fadeOut returns nothing
```

## Parameters
<dl>
  <dt>soundHandle `sound`</dt>
  <dd>The sound to stop</dd>

  <dt>killWhenDone `boolean`</dt>
  <dd>The sound gets destroyed if true.</dd>

  <dt>fadeOut `boolean`</dt>
  <dd>turns down the volume with`fadeOutRate`as stated in constructor.</dd>
</dl>