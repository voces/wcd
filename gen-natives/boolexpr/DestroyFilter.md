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
f `filterfunc`
: 

## Notes 
Only call this on filterfunc created via`And`,`Or`,`Not`.
