---
title: ChooseRandomItem
types:
  - integer
---

# ChooseRandomItem
Returns the rawcode ID of a random item of the specified level. Passing a levelof -1 will return an item of any level. If there are no items of the specifiedlevel, the id returned will be 0.

## Declaration

```jass
native ChooseRandomItem takes integer level returns integer
```

## Parameters
level `integer`
: The level of the items to choose from. Passing a level of -1 is equivalent to any level.

## Notes 
The item returned is not chosen from preplaced items on the map, but rather any item of that level.
