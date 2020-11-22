---
title: DestroyFilter
types:
  - filterfunc
---

# DestroyFilter

## Declaration

```jass
native DestroyFilter takes filterfunc f returns nothing
```

## Parameters
`filterfunc f`{!language=jass}
: 

## Notes 
Only call this on filterfunc created via`And`,`Or`,`Not`.
