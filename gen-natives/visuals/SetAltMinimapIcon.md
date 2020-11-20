---
title: SetAltMinimapIcon
types:
  - string
---

# SetAltMinimapIcon
Sets the "alternative icon". You can display this icon for any unit via`UnitSetUsesAltIcon`.

## Declaration

```
native SetAltMinimapIcon takes string iconPath returns nothing
```

## Parameters
<dl>
  <dt>iconPath `string`</dt>
  <dd></dd>
</dl>

## Notes 
Only one icon can be the "alternative icon" but you can give eachplayer a different icon via`GetLocalPlayer`.