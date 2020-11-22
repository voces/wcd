---
title: Filter
types:
  - code
  - filterfunc
pure: true
---

# Filter

## Declaration

```jass
native Filter takes code func returns filterfunc
```

## Parameters
`code func`{!language=jass}
: 

## Notes 
Do not destroy filterfuncs created with`Filter`because this functiondoes not create a new handle (`Filter(function foo) == Filter(function foo)`).In the best case it does nothing but in the worst case it affects some internals.
