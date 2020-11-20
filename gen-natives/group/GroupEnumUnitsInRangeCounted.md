---
title: GroupEnumUnitsInRangeCounted
types:
  - boolexpr
  - group
  - integer
  - real
---

# GroupEnumUnitsInRangeCounted

## Declaration

```
native GroupEnumUnitsInRangeCounted takes group whichGroup, real x, real y, real radius, boolexpr filter, integer countLimit returns nothing
```

## Parameters
<dl>
  <dt>whichGroup `group`</dt>
  <dd></dd>

  <dt>x `real`</dt>
  <dd></dd>

  <dt>y `real`</dt>
  <dd></dd>

  <dt>radius `real`</dt>
  <dd></dd>

  <dt>filter `boolexpr`</dt>
  <dd></dd>

  <dt>countLimit `integer`</dt>
  <dd></dd>
</dl>

## Bugs 
Causes irregular behavior when used with large numbers