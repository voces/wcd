---
layout: default
parent: Unit
grand_parent: Natives
types:
  - boolexpr
  - group
  - integer
  - location
  - real
---

# GroupEnumUnitsInRangeOfLocCounted

## Declaration

```
native GroupEnumUnitsInRangeOfLocCounted takes group whichGroup, location whichLocation, real radius, boolexpr filter, integer countLimit returns nothing
```

## Parameters
<dl>
  <dt>whichGroup `group`</dt>
  <dd></dd>

  <dt>whichLocation `location`</dt>
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