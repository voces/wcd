---
title: SetSoundPitch
types:
  - real
  - sound
---

# SetSoundPitch
Tones the pitch of the sound, default value is 1. Increasing it you get the chipmunkversion and the sound becomes shorter, when decremented the sound becomes low-pitched and longer.

## Declaration

```jass
native SetSoundPitch takes sound soundHandle, real pitch returns nothing
```

## Parameters
`sound soundHandle`{!language=jass}
: 

`real pitch`{!language=jass}
: 

## Bugs 
This native has very weird behaviour.See [this](http://www.hiveworkshop.com/threads/setsoundpitch-weirdness.215743/#post-2145419) for an explenationand [this](http://www.hiveworkshop.com/threads/snippet-rapidsound.258991/#post-2611724) for a non-bugged implementation.
