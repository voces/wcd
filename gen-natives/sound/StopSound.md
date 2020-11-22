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
`sound soundHandle`{!language=jass}
: The sound to stop

`boolean killWhenDone`{!language=jass}
: The sound gets destroyed if true.

`boolean fadeOut`{!language=jass}
: turns down the volume with`fadeOutRate`as stated in constructor.
