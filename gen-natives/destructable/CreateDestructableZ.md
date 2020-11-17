---
layout: default
parent: Unit
grand_parent: Natives
types:
  - destructable
  - integer
  - real
---

# CreateDestructableZ
Creates a destructable at the coordinates ( x , y ).

## Declaration

```
native CreateDestructableZ takes integer objectid, real x, real y, real z, real face, real scale, integer variation returns destructable
```

## Parameters
<dl>
  <dt>objectid `integer`</dt>
  <dd>The rawcode of the destructable to be created.</dd>

  <dt>x `real`</dt>
  <dd>The x-coordinate of the destructable.</dd>

  <dt>y `real`</dt>
  <dd>The y-coordinate of the destructable.</dd>

  <dt>z `real`</dt>
  <dd></dd>

  <dt>face `real`</dt>
  <dd>The facing of the destructable.</dd>

  <dt>scale `real`</dt>
  <dd>The X-Y-Z scaling value of the destructable.</dd>

  <dt>variation `integer`</dt>
  <dd>The integer representing the variation of the destructable to be created.</dd>
</dl>