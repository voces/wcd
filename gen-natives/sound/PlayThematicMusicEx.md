---
layout: default
parent: Unit
grand_parent: Natives
types:
  - integer
  - string
---

# PlayThematicMusicEx
The thematic music does not play repeatedly, but interrupts the PlayMusic-music.

## Declaration

```
native PlayThematicMusicEx takes string musicFileName, integer frommsecs returns nothing
```

## Parameters
<dl>
  <dt>musicFileName `string`</dt>
  <dd>The path to the music file.</dd>

  <dt>frommsecs `integer`</dt>
  <dd>At what offset the music starts. In milliseconds.</dd>
</dl>

## Notes 
Only one thematic music at a time, cancels the previous one
Probably meant for boss fights and similar where the sound should go in foreground