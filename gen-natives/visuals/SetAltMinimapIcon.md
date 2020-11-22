---
title: SetAltMinimapIcon
types:
  - string
---

# SetAltMinimapIcon
Sets the "alternative icon". You can display this icon for any unit via`UnitSetUsesAltIcon`.

## Declaration

```jass
native SetAltMinimapIcon takes string iconPath returns nothing
```

## Parameters
`string iconPath`{!language=jass}
: 

## Notes 
Only one icon can be the "alternative icon" but you can give eachplayer a different icon via`GetLocalPlayer`.
