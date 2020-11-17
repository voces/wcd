---
layout: default
parent: Unit
grand_parent: Natives
types:
  - integer
  - string
async: true
---

# GetSoundFileDuration
Returns length of the sound file under the path in milliseconds.

## Declaration

```
native GetSoundFileDuration takes string musicFileName returns integer
```

## Parameters
<dl>
  <dt>musicFileName `string`</dt>
  <dd></dd>
</dl>

## Notes 
Beweare that this might return different values for different playersif you use native wc3-sounds as these can have different length in different languages.This can cause desyncs if you use the duration for non-local stuff.