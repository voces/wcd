---
title: DialogDisplay
types:
  - boolean
  - dialog
  - player
---

# DialogDisplay

## Declaration

```jass
native DialogDisplay takes player whichPlayer, dialog whichDialog, boolean flag returns nothing
```

## Parameters
whichPlayer `player`
: 

whichDialog `dialog`
: 

flag `boolean`
: 

## Notes 
Dialogs can not be shown at map-init. Use a wait or a zero-timer todisplay as soon as possible.
