---
title: StartSound
types:
  - sound
---

# StartSound
Starts the sound.

## Declaration

```jass
native StartSound takes sound soundHandle returns nothing
```

## Parameters
`sound soundHandle`{!language=jass}
: 

## Notes 
You can only play the same sound handle once.
You can only play 16 sounds in general.
Sounds of the same filepath (on different sound handles) must have a delayof at least 0.1 seconds inbetween them to be played.You can overcome this by starting one earlier and then using`SetSoundPosition`.
