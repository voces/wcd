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

# TerrainDeformCrater
Create a crater at the given coordinates.

## Declaration

```
native TerrainDeformCrater takes real x, real y, real radius, real depth, integer duration, boolean permanent returns terraindeformation
```

## Parameters
<dl>
  <dt>x `real`</dt>
  <dd>The x coordinate of the craters center</dd>

  <dt>y `real`</dt>
  <dd>The y coordinate of the craters center</dd>

  <dt>radius `real`</dt>
  <dd>The radius of the crater</dd>

  <dt>depth `real`</dt>
  <dd>The depth of the crater</dd>

  <dt>duration `integer`</dt>
  <dd>The duration in milliseconds.</dd>

  <dt>permanent `boolean`</dt>
  <dd>Make the deformation permanent.</dd>
</dl>

## Notes 
To approximate the resulting height of a point`distance`units away from thecenter point`(x, y)`you can use the following formula:`Cos(bj_PI/2 * distance / radius) * -depth`. See this [issue](https://github.com/lep/jassdoc/issues/31) for some more information.
Not every player might display those transformations due to graphicssettings. Thus reading data like terrain height might lead to async values.See the other note on a way to compute an appropiate height to use instead.
Permanent terrain deformations are not present in saved game files.