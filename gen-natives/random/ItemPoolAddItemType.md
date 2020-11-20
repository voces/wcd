---
title: ItemPoolAddItemType
types:
  - integer
  - itempool
  - real
---

# ItemPoolAddItemType
Adds an item-id to the itempool.

## Declaration

```
native ItemPoolAddItemType takes itempool whichItemPool, integer itemId, real weight returns nothing
```

## Parameters
<dl>
  <dt>whichItemPool `itempool`</dt>
  <dd>The itempool to add the item to</dd>

  <dt>itemId `integer`</dt>
  <dd>The rawcode of the item</dd>

  <dt>weight `real`</dt>
  <dd>The weight of the itemThe weight determines how likely it is for the item to be chose by`PlaceRandomItem`.</dd>
</dl>