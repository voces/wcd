---
title: MultiboardDisplay
types:
  - boolean
  - multiboard
---

# MultiboardDisplay

## Declaration

```jass
native MultiboardDisplay takes multiboard lb, boolean show returns nothing
```

## Parameters
`multiboard lb`{!language=jass}
: 

`boolean show`{!language=jass}
: 

## Notes 
Multiboars can not be shown at map-init. Use a wait or a zero-timer todisplay as soon as possible.

## Bugs 
`MultiboardDisplay(mb,false)`, where mb is an arbitrary non-null multiboardwill close any open multiboard, regardless of whether it's`mb`or not.<http://www.wc3c.net/showthread.php?p=971681#post971681>
