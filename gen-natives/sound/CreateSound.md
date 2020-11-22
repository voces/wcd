---
title: CreateSound
types:
  - boolean
  - integer
  - sound
  - string
---

# CreateSound
Creates a sound handle.

## Declaration

```jass
native CreateSound takes string fileName, boolean looping, boolean is3D, boolean stopwhenoutofrange, integer fadeInRate, integer fadeOutRate, string eaxSetting returns sound
```

## Parameters
`string fileName`{!language=jass}
: The path to the file.

`boolean looping`{!language=jass}
: Looping sounds will restart once the sound duration has finished.

`boolean is3D`{!language=jass}
: 3D Sounds can be played on particular areas of the map. They are attheir loudest when the camera is close to the sound's coordinates.

`boolean stopwhenoutofrange`{!language=jass}
: 

`integer fadeInRate`{!language=jass}
: How quickly the sound fades in. The higher the number, thefaster the sound fades in. Maximum number is 127.

`integer fadeOutRate`{!language=jass}
: How quickly the sound fades out. The higher the number, thefaster the sound fades out. Maximum number is 127.

`string eaxSetting`{!language=jass}
: EAX is an acronym for environmental audio extensions. In thesound editor, this corresponds to the "Effect" setting.The known settings available in Warcraft III are:| Value              |  Setting               ||--------------------| ---------------------- ||`"CombatSoundsEAX"`| combat                 ||`"KotoDrumsEAX"`| drums                  ||`"SpellsEAX"`| spells                 ||`"MissilesEAX"`| missiles               ||`"HeroAcksEAX"`| hero acknowledgements  ||`"DoodadsEAX"`| doodads                ||`"DefaultEAXON"`| default                |

## Notes 
You can only play the same sound handle once.
You can only play the same sound filepath four times.
Sounds of the same filepath (on different sound handles) must have a delayof at least 0.1 seconds inbetween them to be played.You can overcome this by starting one earlier and then using`SetSoundPosition`.
You can only play 16 sounds in general.
