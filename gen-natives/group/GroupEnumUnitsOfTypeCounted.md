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

```jass
native GroupEnumUnitsOfTypeCounted takes group whichGroup, string unitname, boolexpr filter, integer countLimit returns nothing
```

## Parameters
whichGroup `group`
: 

unitname `string`
: 

filter `boolexpr`
: 

countLimit `integer`
: 

## Bugs 
Causes irregular behavior when used with large numbers
