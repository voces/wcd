---
layout: default
parent: Unit
grand_parent: Natives
types:
  - location
  - real
async: true
---

# GetLocationZ

## Declaration

```
native GetLocationZ takes location whichLocation returns real
```

## Parameters
<dl>
  <dt>whichLocation `location`</dt>
  <dd></dd>
</dl>

## Notes 
This function is asynchronous. The values it returns are not guaranteed synchronous between each player.If you attempt to use it in a synchronous manner, it may cause a desync.
Reasons for returning different values might be terrain-deformationscaused by spells/abilities and different graphic settings.Other reasons could be the rendering state of destructables and visibility differences.