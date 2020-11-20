---
title: SetUnitVertexColor
types:
  - integer
  - unit
---

# SetUnitVertexColor
Sets the unit's color to the color defined by (red,green,blue,alpha).

## Declaration

```
native SetUnitVertexColor takes unit whichUnit, integer red, integer green, integer blue, integer alpha returns nothing
```

## Parameters
<dl>
  <dt>whichUnit `unit`</dt>
  <dd>The unit the indicator will be applied to.</dd>

  <dt>red `integer`</dt>
  <dd>An integer from 0-255 determining the amount of red color.</dd>

  <dt>green `integer`</dt>
  <dd>An integer from 0-255 determining the amount of green color.</dd>

  <dt>blue `integer`</dt>
  <dd>An integer from 0-255 determining the amount of blue color.</dd>

  <dt>alpha `integer`</dt>
  <dd>An integer from 0-255 determining the transparency. A value of 0 is complete transparency while a value of 255 is complete opacity.</dd>
</dl>