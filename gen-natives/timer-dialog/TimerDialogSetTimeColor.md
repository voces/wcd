---
title: TimerDialogSetTimeColor
types:
  - integer
  - timerdialog
---

# TimerDialogSetTimeColor
Sets the timer-dialogs time color.

## Declaration

```jass
native TimerDialogSetTimeColor takes timerdialog whichDialog, integer red, integer green, integer blue, integer alpha returns nothing
```

## Parameters
whichDialog `timerdialog`
: The timerdialog

red `integer`
: An integer from 0-255 determining the amount of red color.

green `integer`
: An integer from 0-255 determining the amount of green color.

blue `integer`
: An integer from 0-255 determining the amount of blue color.

alpha `integer`
: An integer from 0-255 determining the transparency. A value of 0 is complete transparency while a value of 255 is complete opacity.
