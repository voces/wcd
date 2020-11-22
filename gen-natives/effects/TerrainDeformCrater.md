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
`real x`{!language=jass}
: The x coordinate of the craters center

`real y`{!language=jass}
: The y coordinate of the craters center

`real radius`{!language=jass}
: The radius of the crater

`real depth`{!language=jass}
: The depth of the crater

`integer duration`{!language=jass}
: The duration in milliseconds.

`boolean permanent`{!language=jass}
: Make the deformation permanent.

## Notes 
To approximate the resulting height of a point`distance`units away from thecenter point`(x, y)`you can use the following formula:`Cos(bj_PI/2 * distance / radius) * -depth`. See this [issue](https://github.com/lep/jassdoc/issues/31) for some more information.
Not every player might display those transformations due to graphicssettings. Thus reading data like terrain height might lead to async values.See the other note on a way to compute an appropiate height to use instead.
Permanent terrain deformations are not present in saved game files.
