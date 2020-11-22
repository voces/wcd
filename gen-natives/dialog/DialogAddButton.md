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
`dialog whichDialog`{!language=jass}
: 

`string buttonText`{!language=jass}
: 

`integer hotkey`{!language=jass}
: 

## Notes 
When adding a hotkey use the uppercase, e.g.`'F'`instead of`'f'`as itdoes not work with lowercased keys. The button still gets triggered when the playerpresses a lowercased letter.
