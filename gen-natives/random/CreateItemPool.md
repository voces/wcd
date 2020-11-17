---
layout: default
parent: Unit
grand_parent: Natives
types:
  - itempool
---

# CreateItemPool
Creates an empty itempool handle.Item pools are initially empty, but can have item-types addedto them via`ItemPoolAddItemType`. Item pools only serve for random itemplacing, via`PlaceRandomItem`.

## Declaration

```
native CreateItemPool takes nothing returns itempool
```