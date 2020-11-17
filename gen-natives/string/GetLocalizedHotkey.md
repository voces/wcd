---
layout: default
parent: Unit
grand_parent: Natives
types:
  - integer
  - string
async: true
---

# GetLocalizedHotkey
Returns the`integer`hotkey for a specific game action à la`"GAMEOVER_QUIT_GAME"`.You can look up potential values in`UI\FrameDef\GlobalStrings.fdf`.

## Declaration

```
native GetLocalizedHotkey takes string source returns integer
```

## Parameters
<dl>
  <dt>source `string`</dt>
  <dd></dd>
</dl>