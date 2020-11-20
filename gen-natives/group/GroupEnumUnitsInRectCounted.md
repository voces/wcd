---
title: GroupEnumUnitsInRectCounted
types:
  - boolexpr
  - group
  - integer
  - rect
---

# GroupEnumUnitsInRectCounted

## Declaration

```
native GroupEnumUnitsInRectCounted takes group whichGroup, rect r, boolexpr filter, integer countLimit returns nothing
```

## Parameters
<dl>
  <dt>whichGroup `group`</dt>
  <dd></dd>

  <dt>r `rect`</dt>
  <dd></dd>

  <dt>filter `boolexpr`</dt>
  <dd></dd>

  <dt>countLimit `integer`</dt>
  <dd></dd>
</dl>

## Bugs 
Causes irregular behavior when used with large numbers