---
title: ChooseRandomCreep
types:
  - integer
---

# ChooseRandomCreep
Returns the rawcode ID of a random unit of the specified level. The unit chosenwill come from the set of units that include or are assigned to the base tilesetof the map. Passing a level of -1 is equivalent to picking a creep of any level.If there are no units of the specified level, the returned value is 0.

## Declaration

```jass
native ChooseRandomCreep takes integer level returns integer
```

## Parameters
level `integer`
: The level of the units to choose from.
