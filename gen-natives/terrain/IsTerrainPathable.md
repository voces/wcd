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
`real x`{!language=jass}
: 

`real y`{!language=jass}
: 

`pathingtype t`{!language=jass}
: 

## Notes 
Returns true if the pathingtype is *not* set, false if it *is* set.
