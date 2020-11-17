---
layout: default
parent: Unit
grand_parent: Natives
types:
  - code
  - filterfunc
pure: true
---

# Filter

## Declaration

```
native Filter takes code func returns filterfunc
```

## Parameters
<dl>
  <dt>func `code`</dt>
  <dd></dd>
</dl>

## Notes 
Do not destroy filterfuncs created with`Filter`because this functiondoes not create a new handle (`Filter(function foo) == Filter(function foo)`).In the best case it does nothing but in the worst case it affects some internals.