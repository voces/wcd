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
`itempool whichItemPool`{!language=jass}
: The itempool to add the item to

`integer itemId`{!language=jass}
: The rawcode of the item

`real weight`{!language=jass}
: The weight of the itemThe weight determines how likely it is for the item to be chose by`PlaceRandomItem`.
