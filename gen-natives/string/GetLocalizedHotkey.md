---
title: GetLocalizedHotkey
types:
  - integer
  - string
async: true
---

# GetLocalizedHotkey
Returns the`integer`hotkey for a specific game action à la`"GAMEOVER_QUIT_GAME"`.You can look up potential values in`UI\FrameDef\GlobalStrings.fdf`.

## Declaration

```jass
native GetLocalizedHotkey takes string source returns integer
```

## Parameters
`string source`{!language=jass}
: 
