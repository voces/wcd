---
title: DestroyFilter
types:
  - filterfunc
---

# DestroyFilter

## Declaration

```
native DestroyFilter takes filterfunc f returns nothing
```

## Parameters
<dl>
  <dt>f `filterfunc`</dt>
  <dd></dd>
</dl>

## Notes 
Only call this on filterfunc created via`And`,`Or`,`Not`.