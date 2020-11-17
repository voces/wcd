---
layout: default
parent: Unit
grand_parent: Natives
types:
  - boolean
  - integer
  - real
  - terraindeformation
---

# TerrainDeformRipple

## Declaration

```
native TerrainDeformRipple takes real x, real y, real radius, real depth, integer duration, integer count, real spaceWaves, real timeWaves, real radiusStartPct, boolean limitNeg returns terraindeformation
```

## Parameters
<dl>
  <dt>x `real`</dt>
  <dd></dd>

  <dt>y `real`</dt>
  <dd></dd>

  <dt>radius `real`</dt>
  <dd></dd>

  <dt>depth `real`</dt>
  <dd></dd>

  <dt>duration `integer`</dt>
  <dd>The duration in milliseconds.</dd>

  <dt>count `integer`</dt>
  <dd></dd>

  <dt>spaceWaves `real`</dt>
  <dd></dd>

  <dt>timeWaves `real`</dt>
  <dd></dd>

  <dt>radiusStartPct `real`</dt>
  <dd></dd>

  <dt>limitNeg `boolean`</dt>
  <dd></dd>
</dl>

## Notes 
Permanent terrain deformations are not present in saved game files.