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

```jass
native DialogAddButton takes dialog whichDialog, string buttonText, integer hotkey returns button
```

## Parameters
whichDialog `dialog`
: 

buttonText `string`
: 

hotkey `integer`
: 

## Notes 
When adding a hotkey use the uppercase, e.g.`'F'`instead of`'f'`as itdoes not work with lowercased keys. The button still gets triggered when the playerpresses a lowercased letter.
