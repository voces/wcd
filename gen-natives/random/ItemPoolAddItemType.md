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

```jass
native ItemPoolAddItemType takes itempool whichItemPool, integer itemId, real weight returns nothing
```

## Parameters
whichItemPool `itempool`
: The itempool to add the item to

itemId `integer`
: The rawcode of the item

weight `real`
: The weight of the itemThe weight determines how likely it is for the item to be chose by`PlaceRandomItem`.
