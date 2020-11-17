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

# CreateSoundFilenameWithLabel
Creates a sound but applies default settings to the sound, which are foundunder the label from the following SLK-files:UI\SoundInfo\AbilitySounds.slkUI\SoundInfo\AmbienceSounds.slkUI\SoundInfo\AnimSounds.slkUI\SoundInfo\DialogSounds.slkUI\SoundInfo\UISounds.slkUI\SoundInfo\UnitAckSounds.slkUI\SoundInfo\UnitCombatSounds.slk

## Declaration

```
native CreateSoundFilenameWithLabel takes string fileName, boolean looping, boolean is3D, boolean stopwhenoutofrange, integer fadeInRate, integer fadeOutRate, string SLKEntryName returns sound
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
  <dd>How quickly the sound fades in. The higher the number,the faster the sound fades in. Maximum number is 127.</dd>

  <dt>fadeOutRate `integer`</dt>
  <dd>How quickly the sound fades out. The higher the number,the faster the sound fades out. Maximum number is 127. used, e.g. values likevolume, pitch, pitch variance, priority, channel, min distance, max distance, distance cutoff or eax.</dd>

  <dt>SLKEntryName `string`</dt>
  <dd>the label out of one of the SLK-files, whose settings should be</dd>
</dl>

## Notes 
You can only play the same sound handle once.
You can only play the same sound filepath four times.
Sounds of the same filepath (on different sound handles) must have a delayof at least 0.1 seconds inbetween them to be played.You can overcome this by starting one earlier and then using`SetSoundPosition`.
You can only play 16 sounds in general.