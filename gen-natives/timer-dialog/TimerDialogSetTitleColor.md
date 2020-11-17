---
layout: default
parent: Unit
grand_parent: Natives
types:
  - integer
  - timerdialog
---

# TimerDialogSetTitleColor
Sets the timer-dialogs color.

## Declaration

```
native TimerDialogSetTitleColor takes timerdialog whichDialog, integer red, integer green, integer blue, integer alpha returns nothing
```

## Parameters
<dl>
  <dt>whichDialog `timerdialog`</dt>
  <dd>The timerdialog</dd>

  <dt>red `integer`</dt>
  <dd>An integer from 0-255 determining the amount of red color.</dd>

  <dt>green `integer`</dt>
  <dd>An integer from 0-255 determining the amount of green color.</dd>

  <dt>blue `integer`</dt>
  <dd>An integer from 0-255 determining the amount of blue color.</dd>

  <dt>alpha `integer`</dt>
  <dd>An integer from 0-255 determining the transparency. A value of 0 is complete transparency while a value of 255 is complete opacity.</dd>
</dl>