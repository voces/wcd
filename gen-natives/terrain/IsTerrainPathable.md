---
layout: default
parent: Unit
grand_parent: Natives
types:
  - boolean
  - pathingtype
  - real
---

# IsTerrainPathable
Returns if a specific pathingtype is set at the location.

## Declaration

```
native IsTerrainPathable takes real x, real y, pathingtype t returns boolean
```

## Parameters
<dl>
  <dt>x `real`</dt>
  <dd></dd>

  <dt>y `real`</dt>
  <dd></dd>

  <dt>t `pathingtype`</dt>
  <dd></dd>
</dl>

## Notes 
Returns true if the pathingtype is *not* set, false if it *is* set.