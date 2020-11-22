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

```jass
native CreateDeadDestructable takes integer objectid, real x, real y, real face, real scale, integer variation returns destructable
```

## Parameters
objectid `integer`
: The rawcode of the destructable to be created.

x `real`
: The x-coordinate of the destructable.

y `real`
: The y-coordinate of the destructable.

face `real`
: The facing of the destructable.

scale `real`
: The X-Y-Z scaling value of the destructable.

variation `integer`
: The integer representing the variation of the destructable to be created.
