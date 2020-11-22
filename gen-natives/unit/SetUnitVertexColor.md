---
title: SetUnitVertexColor
types:
  - integer
  - unit
---

# SetUnitVertexColor
Sets the unit's color to the color defined by (red,green,blue,alpha).

## Declaration

```jass
native SetUnitVertexColor takes unit whichUnit, integer red, integer green, integer blue, integer alpha returns nothing
```

## Parameters
`unit whichUnit`{!language=jass}
: The unit the indicator will be applied to.

`integer red`{!language=jass}
: An integer from 0-255 determining the amount of red color.

`integer green`{!language=jass}
: An integer from 0-255 determining the amount of green color.

`integer blue`{!language=jass}
: An integer from 0-255 determining the amount of blue color.

`integer alpha`{!language=jass}
: An integer from 0-255 determining the transparency. A value of 0 is complete transparency while a value of 255 is complete opacity.
