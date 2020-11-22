---
title: PlayThematicMusicEx
types:
  - integer
  - string
---

# PlayThematicMusicEx
The thematic music does not play repeatedly, but interrupts the PlayMusic-music.

## Declaration

```jass
native PlayThematicMusicEx takes string musicFileName, integer frommsecs returns nothing
```

## Parameters
`string musicFileName`{!language=jass}
: The path to the music file.

`integer frommsecs`{!language=jass}
: At what offset the music starts. In milliseconds.

## Notes 
Only one thematic music at a time, cancels the previous one
Probably meant for boss fights and similar where the sound should go in foreground
