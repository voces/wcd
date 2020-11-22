---
title: GetLocationZ
types:
  - location
  - real
async: true
---

# GetLocationZ

## Declaration

```jass
native GetLocationZ takes location whichLocation returns real
```

## Parameters
`location whichLocation`{!language=jass}
: 

## Notes 
This function is asynchronous. The values it returns are not guaranteed synchronous between each player.If you attempt to use it in a synchronous manner, it may cause a desync.
Reasons for returning different values might be terrain-deformationscaused by spells/abilities and different graphic settings.Other reasons could be the rendering state of destructables and visibility differences.
