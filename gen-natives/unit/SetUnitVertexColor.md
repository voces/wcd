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
whichUnit `unit`
: The unit the indicator will be applied to.

red `integer`
: An integer from 0-255 determining the amount of red color.

green `integer`
: An integer from 0-255 determining the amount of green color.

blue `integer`
: An integer from 0-255 determining the amount of blue color.

alpha `integer`
: An integer from 0-255 determining the transparency. A value of 0 is complete transparency while a value of 255 is complete opacity.
