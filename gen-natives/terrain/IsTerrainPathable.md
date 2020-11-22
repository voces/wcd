---
title: IsTerrainPathable
types:
  - boolean
  - pathingtype
  - real
---

# IsTerrainPathable
Returns if a specific pathingtype is set at the location.

## Declaration

```jass
native IsTerrainPathable takes real x, real y, pathingtype t returns boolean
```

## Parameters
x `real`
: 

y `real`
: 

t `pathingtype`
: 

## Notes 
Returns true if the pathingtype is *not* set, false if it *is* set.
