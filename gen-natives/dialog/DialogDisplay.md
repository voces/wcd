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
`player whichPlayer`{!language=jass}
: 

`dialog whichDialog`{!language=jass}
: 

`boolean flag`{!language=jass}
: 

## Notes 
Dialogs can not be shown at map-init. Use a wait or a zero-timer todisplay as soon as possible.
