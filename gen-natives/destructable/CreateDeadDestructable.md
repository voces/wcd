---
title: CreateDeadDestructable
types:
  - destructable
  - integer
  - real
---

# CreateDeadDestructable
Creates the dead version of a destructable at the coordinates ( x , y ).If the destructable has no animations, it will show the destructable's defaultform. If it has a death animation, but no decay animation, then the object willbe created in memory but will not visibly appear.

## Declaration

```
native CreateDeadDestructable takes integer objectid, real x, real y, real face, real scale, integer variation returns destructable
```

## Parameters
<dl>
  <dt>objectid `integer`</dt>
  <dd>The rawcode of the destructable to be created.</dd>

  <dt>x `real`</dt>
  <dd>The x-coordinate of the destructable.</dd>

  <dt>y `real`</dt>
  <dd>The y-coordinate of the destructable.</dd>

  <dt>face `real`</dt>
  <dd>The facing of the destructable.</dd>

  <dt>scale `real`</dt>
  <dd>The X-Y-Z scaling value of the destructable.</dd>

  <dt>variation `integer`</dt>
  <dd>The integer representing the variation of the destructable to be created.</dd>
</dl>