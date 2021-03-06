---
title: AddIndicator
types:
  - integer
  - widget
---

# AddIndicator
Adds a blinking circle around widget with the color (red,green,blue,alpha).The circle blinks twice. This function is commonly used for cinematic modesand is seen in`TransmissionFromUnitWithNameBJ`.

## Declaration

```jass
native AddIndicator takes widget whichWidget, integer red, integer green, integer blue, integer alpha returns nothing
```

## Parameters
`widget whichWidget`{!language=jass}
: The widget the indicator will be applied to.

`integer red`{!language=jass}
: An integer from 0-255 determining the amount of red color in the indicator.

`integer green`{!language=jass}
: An integer from 0-255 determining the amount of green color in the indicator.

`integer blue`{!language=jass}
: An integer from 0-255 determining the amount of blue color in the indicator.

`integer alpha`{!language=jass}
: An integer from 0-255 determining the transparency of the indicator. A value of 0 is complete transparency while a value of 255 is complete opacity.

## Notes 
The size of the indicator depends on a widget's selection size. To modifythis, you must edit the object editor field of the widget listed as "Art - Selection Size".
