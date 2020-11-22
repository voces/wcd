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
`timerdialog whichDialog`{!language=jass}
: The timerdialog

`integer red`{!language=jass}
: An integer from 0-255 determining the amount of red color.

`integer green`{!language=jass}
: An integer from 0-255 determining the amount of green color.

`integer blue`{!language=jass}
: An integer from 0-255 determining the amount of blue color.

`integer alpha`{!language=jass}
: An integer from 0-255 determining the transparency. A value of 0 is complete transparency while a value of 255 is complete opacity.
