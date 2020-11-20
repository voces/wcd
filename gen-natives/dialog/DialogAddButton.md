---
title: DialogAddButton
types:
  - button
  - dialog
  - integer
  - string
---

# DialogAddButton

## Declaration

```
native DialogAddButton takes dialog whichDialog, string buttonText, integer hotkey returns button
```

## Parameters
<dl>
  <dt>whichDialog `dialog`</dt>
  <dd></dd>

  <dt>buttonText `string`</dt>
  <dd></dd>

  <dt>hotkey `integer`</dt>
  <dd></dd>
</dl>

## Notes 
When adding a hotkey use the uppercase, e.g.`'F'`instead of`'f'`as itdoes not work with lowercased keys. The button still gets triggered when the playerpresses a lowercased letter.