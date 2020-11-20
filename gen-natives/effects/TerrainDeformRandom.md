---
title: TerrainDeformRandom
types:
  - integer
  - real
  - terraindeformation
---

# TerrainDeformRandom

## Declaration

```
native TerrainDeformRandom takes real x, real y, real radius, real minDelta, real maxDelta, integer duration, integer updateInterval returns terraindeformation
```

## Parameters
<dl>
  <dt>x `real`</dt>
  <dd></dd>

  <dt>y `real`</dt>
  <dd></dd>

  <dt>radius `real`</dt>
  <dd></dd>

  <dt>minDelta `real`</dt>
  <dd></dd>

  <dt>maxDelta `real`</dt>
  <dd></dd>

  <dt>duration `integer`</dt>
  <dd>The duration in milliseconds.</dd>

  <dt>updateInterval `integer`</dt>
  <dd></dd>
</dl>

## Notes 
Permanent terrain deformations are not present in saved game files.