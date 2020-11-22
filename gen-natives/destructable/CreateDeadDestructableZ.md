---
title: CreateDeadDestructableZ
types:
  - destructable
  - integer
  - real
---

# CreateDeadDestructableZ
Creates the dead version of a destructable at the coordinates ( x , y , z ).If the destructable has no animations, it will show the destructable's defaultform. If it has a death animation, but no decay animation, then the object willbe created in memory but will not visibly appear.

## Declaration

```jass
native CreateDeadDestructableZ takes integer objectid, real x, real y, real z, real face, real scale, integer variation returns destructable
```

## Parameters
`integer objectid`{!language=jass}
: The rawcode of the destructable to be created.

`real x`{!language=jass}
: The x-coordinate of the destructable.

`real y`{!language=jass}
: The y-coordinate of the destructable.

`real z`{!language=jass}
: The z-coordinate of the destructable.

`real face`{!language=jass}
: The facing of the destructable.

`real scale`{!language=jass}
: The X-Y-Z scaling value of the destructable.

`integer variation`{!language=jass}
: The integer representing the variation of the destructable to be created.
