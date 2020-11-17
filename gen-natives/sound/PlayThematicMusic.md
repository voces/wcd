---
layout: default
parent: Unit
grand_parent: Natives
types:
  - string
---

# PlayThematicMusic
The thematic music does not play repeatedly, but interrupts the PlayMusic-music.

## Declaration

```
native PlayThematicMusic takes string musicFileName returns nothing
```

## Parameters
<dl>
  <dt>musicFileName `string`</dt>
  <dd>The path to the music file.</dd>
</dl>

## Notes 
Only one thematic music at a time, cancels the previous one
Probably meant for boss fights and similar where the sound should go in foreground