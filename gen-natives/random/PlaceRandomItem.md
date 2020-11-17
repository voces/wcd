---
layout: default
parent: Unit
grand_parent: Natives
types:
  - item
  - itempool
  - real
---

# PlaceRandomItem
Draws a random itemid from the itempool and creates the item.

## Declaration

```
native PlaceRandomItem takes itempool whichItemPool, real x, real y returns item
```

## Parameters
<dl>
  <dt>whichItemPool `itempool`</dt>
  <dd>The itempool to draw from</dd>

  <dt>x `real`</dt>
  <dd>The x-coordinate of the item</dd>

  <dt>y `real`</dt>
  <dd>The y-coordinate of the item</dd>
</dl>