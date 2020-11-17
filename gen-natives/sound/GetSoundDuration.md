---
layout: default
parent: Unit
grand_parent: Natives
types:
  - integer
  - sound
async: true
---

# GetSoundDuration
Returns sound length in milliseconds.

## Declaration

```
native GetSoundDuration takes sound soundHandle returns integer
```

## Parameters
<dl>
  <dt>soundHandle `sound`</dt>
  <dd></dd>
</dl>

## Notes 
Beweare that this might return different values for different playersif you use native wc3-sounds as these can have different length in different languages.This can cause desyncs if you use the duration for non-local stuff.