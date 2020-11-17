---
layout: default
parent: Unit
grand_parent: Natives
types:
  - integer
  - itemtype
---

# ChooseRandomItemEx
Returns the rawcode ID of a random item of the specified level and item type.Passing a level of -1 will return an item of any level. If there are no itemsof the specified level, the id returned will be 0.

## Declaration

```
native ChooseRandomItemEx takes itemtype whichType, integer level returns integer
```

## Parameters
<dl>
  <dt>whichType `itemtype`</dt>
  <dd>The classification of items to choose from.</dd>

  <dt>level `integer`</dt>
  <dd>The level of the items to choose from. Passing a level of -1 is equivalent to any level.</dd>
</dl>

## Notes 
The item returned is not chosen from preplaced items on the map, but rather any item of that level.