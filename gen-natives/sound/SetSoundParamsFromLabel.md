---
layout: default
parent: Unit
grand_parent: Natives
types:
  - sound
  - string
---

# SetSoundParamsFromLabel
Applies default settings to the sound, which are found under the label from the following SLK-files:UI\SoundInfo\AbilitySounds.slkUI\SoundInfo\AmbienceSounds.slkUI\SoundInfo\AnimSounds.slkUI\SoundInfo\DialogSounds.slkUI\SoundInfo\UISounds.slkUI\SoundInfo\UnitAckSounds.slkUI\SoundInfo\UnitCombatSounds.slk

## Declaration

```
native SetSoundParamsFromLabel takes sound soundHandle, string soundLabel returns nothing
```

## Parameters
<dl>
  <dt>soundHandle `sound`</dt>
  <dd>The sound to configure.</dd>

  <dt>soundLabel `string`</dt>
  <dd>the label out of one of the SLK-files, whose settings should beused, e.g. values like volume, pitch, pitch variance, priority, channel, min distance, max distance, distance cutoff or eax.</dd>
</dl>