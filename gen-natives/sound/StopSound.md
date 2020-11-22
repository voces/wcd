---
title: StopSound
types:
  - boolean
  - sound
---

# StopSound
Stops the sound.

## Declaration

```jass
native StopSound takes sound soundHandle, boolean killWhenDone, boolean fadeOut returns nothing
```

## Parameters
soundHandle `sound`
: The sound to stop

killWhenDone `boolean`
: The sound gets destroyed if true.

fadeOut `boolean`
: turns down the volume with`fadeOutRate`as stated in constructor.
