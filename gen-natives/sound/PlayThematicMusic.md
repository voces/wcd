---
title: PlayThematicMusic
types:
  - string
---

# PlayThematicMusic
The thematic music does not play repeatedly, but interrupts the PlayMusic-music.

## Declaration

```jass
native PlayThematicMusic takes string musicFileName returns nothing
```

## Parameters
musicFileName `string`
: The path to the music file.

## Notes 
Only one thematic music at a time, cancels the previous one
Probably meant for boss fights and similar where the sound should go in foreground
