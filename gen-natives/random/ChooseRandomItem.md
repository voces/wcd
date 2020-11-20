---
title: ChooseRandomItem
types:
  - integer
---

# ChooseRandomItem
Returns the rawcode ID of a random item of the specified level. Passing a levelof -1 will return an item of any level. If there are no items of the specifiedlevel, the id returned will be 0.

## Declaration

```
native ChooseRandomItem takes integer level returns integer
```

## Parameters
<dl>
  <dt>level `integer`</dt>
  <dd>The level of the items to choose from. Passing a level of -1 is equivalent to any level.</dd>
</dl>

## Notes 
The item returned is not chosen from preplaced items on the map, but rather any item of that level.