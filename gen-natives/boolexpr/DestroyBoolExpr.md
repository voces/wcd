---
layout: default
parent: Unit
grand_parent: Natives
types:
  - boolexpr
---

# DestroyBoolExpr

## Declaration

```
native DestroyBoolExpr takes boolexpr e returns nothing
```

## Parameters
<dl>
  <dt>e `boolexpr`</dt>
  <dd></dd>
</dl>

## Notes 
Only call this on boolexpr created via`And`,`Or`,`Not`.