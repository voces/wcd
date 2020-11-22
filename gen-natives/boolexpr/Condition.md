---
title: Condition
types:
  - code
  - conditionfunc
pure: true
---

# Condition

## Declaration

```jass
native Condition takes code func returns conditionfunc
```

## Parameters
`code func`{!language=jass}
: 

## Notes 
Do not destroy conditionfuncs created with`Condition`because this functiondoes not create a new handle (`Condition(function foo) == Condition(function foo)`).In the best case it does nothing but in the worst case it affects some internals.
