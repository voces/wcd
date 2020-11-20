---
title: GroupEnumUnitsOfTypeCounted
types:
  - boolexpr
  - group
  - integer
  - string
---

# GroupEnumUnitsOfTypeCounted

## Declaration

```
native GroupEnumUnitsOfTypeCounted takes group whichGroup, string unitname, boolexpr filter, integer countLimit returns nothing
```

## Parameters
<dl>
  <dt>whichGroup `group`</dt>
  <dd></dd>

  <dt>unitname `string`</dt>
  <dd></dd>

  <dt>filter `boolexpr`</dt>
  <dd></dd>

  <dt>countLimit `integer`</dt>
  <dd></dd>
</dl>

## Bugs 
Causes irregular behavior when used with large numbers