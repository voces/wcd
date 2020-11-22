---
title: CreateDestructableZ
types:
  - destructable
  - integer
  - real
---

# CreateDestructableZ
Creates a destructable at the coordinates ( x , y ).

## Declaration

```jass
native CreateDestructableZ takes integer objectid, real x, real y, real z, real face, real scale, integer variation returns destructable
```

## Parameters
objectid `integer`
: The rawcode of the destructable to be created.

x `real`
: The x-coordinate of the destructable.

y `real`
: The y-coordinate of the destructable.

z `real`
: 

face `real`
: The facing of the destructable.

scale `real`
: The X-Y-Z scaling value of the destructable.

variation `integer`
: The integer representing the variation of the destructable to be created.
