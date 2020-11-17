---
layout: default
parent: Unit
grand_parent: Natives
types:
  - boolean
  - dialog
  - player
---

# DialogDisplay

## Declaration

```
native DialogDisplay takes player whichPlayer, dialog whichDialog, boolean flag returns nothing
```

## Parameters
<dl>
  <dt>whichPlayer `player`</dt>
  <dd></dd>

  <dt>whichDialog `dialog`</dt>
  <dd></dd>

  <dt>flag `boolean`</dt>
  <dd></dd>
</dl>

## Notes 
Dialogs can not be shown at map-init. Use a wait or a zero-timer todisplay as soon as possible.