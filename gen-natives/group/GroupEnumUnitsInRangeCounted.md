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

```jass
native GroupEnumUnitsInRangeCounted takes group whichGroup, real x, real y, real radius, boolexpr filter, integer countLimit returns nothing
```

## Parameters
whichGroup `group`
: 

x `real`
: 

y `real`
: 

radius `real`
: 

filter `boolexpr`
: 

countLimit `integer`
: 

## Bugs 
Causes irregular behavior when used with large numbers
