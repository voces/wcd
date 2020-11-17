---
layout: default
parent: Unit
grand_parent: Natives
types:
  - code
  - conditionfunc
pure: true
---

# Condition

## Declaration

```
native Condition takes code func returns conditionfunc
```

## Parameters
<dl>
  <dt>func `code`</dt>
  <dd></dd>
</dl>

## Notes 
Do not destroy conditionfuncs created with`Condition`because this functiondoes not create a new handle (`Condition(function foo) == Condition(function foo)`).In the best case it does nothing but in the worst case it affects some internals.