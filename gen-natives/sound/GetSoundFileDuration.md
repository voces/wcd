---
title: GetSoundFileDuration
types:
  - integer
  - string
async: true
---

# GetSoundFileDuration
Returns length of the sound file under the path in milliseconds.

## Declaration

```jass
native GetSoundFileDuration takes string musicFileName returns integer
```

## Parameters
musicFileName `string`
: 

## Notes 
Beweare that this might return different values for different playersif you use native wc3-sounds as these can have different length in different languages.This can cause desyncs if you use the duration for non-local stuff.
