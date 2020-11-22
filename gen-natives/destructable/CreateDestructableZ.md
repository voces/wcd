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
`integer objectid`{!language=jass}
: The rawcode of the destructable to be created.

`real x`{!language=jass}
: The x-coordinate of the destructable.

`real y`{!language=jass}
: The y-coordinate of the destructable.

`real z`{!language=jass}
: 

`real face`{!language=jass}
: The facing of the destructable.

`real scale`{!language=jass}
: The X-Y-Z scaling value of the destructable.

`integer variation`{!language=jass}
: The integer representing the variation of the destructable to be created.
