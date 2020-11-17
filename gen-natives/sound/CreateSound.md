---
layout: default
parent: Unit
grand_parent: Natives
types:
  - boolean
  - integer
  - sound
  - string
---

# CreateSound
Creates a sound handle.

## Declaration

```
native CreateSound takes string fileName, boolean looping, boolean is3D, boolean stopwhenoutofrange, integer fadeInRate, integer fadeOutRate, string eaxSetting returns sound
```

## Parameters
<dl>
  <dt>fileName `string`</dt>
  <dd>The path to the file.</dd>

  <dt>looping `boolean`</dt>
  <dd>Looping sounds will restart once the sound duration has finished.</dd>

  <dt>is3D `boolean`</dt>
  <dd>3D Sounds can be played on particular areas of the map. They are attheir loudest when the camera is close to the sound's coordinates.</dd>

  <dt>stopwhenoutofrange `boolean`</dt>
  <dd></dd>

  <dt>fadeInRate `integer`</dt>
  <dd>How quickly the sound fades in. The higher the number, thefaster the sound fades in. Maximum number is 127.</dd>

  <dt>fadeOutRate `integer`</dt>
  <dd>How quickly the sound fades out. The higher the number, thefaster the sound fades out. Maximum number is 127.</dd>

  <dt>eaxSetting `string`</dt>
  <dd>EAX is an acronym for environmental audio extensions. In thesound editor, this corresponds to the "Effect" setting.The known settings available in Warcraft III are:| Value              |  Setting               ||--------------------| ---------------------- ||`"CombatSoundsEAX"`| combat                 ||`"KotoDrumsEAX"`| drums                  ||`"SpellsEAX"`| spells                 ||`"MissilesEAX"`| missiles               ||`"HeroAcksEAX"`| hero acknowledgements  ||`"DoodadsEAX"`| doodads                ||`"DefaultEAXON"`| default                |</dd>
</dl>

## Notes 
You can only play the same sound handle once.
You can only play the same sound filepath four times.
Sounds of the same filepath (on different sound handles) must have a delayof at least 0.1 seconds inbetween them to be played.You can overcome this by starting one earlier and then using`SetSoundPosition`.
You can only play 16 sounds in general.