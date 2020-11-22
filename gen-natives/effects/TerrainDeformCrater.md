---
title: TerrainDeformCrater
types:
  - boolean
  - integer
  - real
  - terraindeformation
---

# TerrainDeformCrater
Create a crater at the given coordinates.

## Declaration

```jass
native TerrainDeformCrater takes real x, real y, real radius, real depth, integer duration, boolean permanent returns terraindeformation
```

## Parameters
x `real`
: The x coordinate of the craters center

y `real`
: The y coordinate of the craters center

radius `real`
: The radius of the crater

depth `real`
: The depth of the crater

duration `integer`
: The duration in milliseconds.

permanent `boolean`
: Make the deformation permanent.

## Notes 
To approximate the resulting height of a point`distance`units away from thecenter point`(x, y)`you can use the following formula:`Cos(bj_PI/2 * distance / radius) * -depth`. See this [issue](https://github.com/lep/jassdoc/issues/31) for some more information.
Not every player might display those transformations due to graphicssettings. Thus reading data like terrain height might lead to async values.See the other note on a way to compute an appropiate height to use instead.
Permanent terrain deformations are not present in saved game files.
