---
title: PlayMusicEx
types:
  - integer
  - string
---

# PlayMusicEx
Sets the file as the current music for the map, and plays it.

## Declaration

```jass
native PlayMusicEx takes string musicName, integer frommsecs, integer fadeinmsecs returns nothing
```

## Parameters
`string musicName`{!language=jass}
: The path to the music file.

`integer frommsecs`{!language=jass}
: At what offset the music starts. In milliseconds.

`integer fadeinmsecs`{!language=jass}
: How long the music is faded in. In milliseconds.

## Notes 
Music is on its own channel and can be toggled on and off within the Warcraft III game menu.
Should work with mp3s, midis and wavs.

## Bugs 
This native may cause a short lag spike as soon as the music starts. To circumvent this lag, stop the current music without fadeout before calling this function (`call StopMusic(false)`).
