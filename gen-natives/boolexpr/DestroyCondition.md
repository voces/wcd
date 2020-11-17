---
layout: default
parent: Unit
grand_parent: Natives
types:
  - conditionfunc
---

# DestroyCondition

## Declaration

```
native DestroyCondition takes conditionfunc c returns nothing
```

## Parameters
<dl>
  <dt>c `conditionfunc`</dt>
  <dd></dd>
</dl>

## Notes 
Only call this on conditionfuncs created via`And`,`Or`,`Not`.