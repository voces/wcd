---
title: GroupEnumUnitsInRangeOfLocCounted
types:
  - boolexpr
  - group
  - integer
  - location
  - real
---

# GroupEnumUnitsInRangeOfLocCounted

## Declaration

```jass
native GroupEnumUnitsInRangeOfLocCounted takes group whichGroup, location whichLocation, real radius, boolexpr filter, integer countLimit returns nothing
```

## Parameters
whichGroup `group`
: 

whichLocation `location`
: 

radius `real`
: 

filter `boolexpr`
: 

countLimit `integer`
: 

## Bugs 
Causes irregular behavior when used with large numbers
