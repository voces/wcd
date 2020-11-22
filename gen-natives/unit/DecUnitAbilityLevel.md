---
title: DecUnitAbilityLevel
types:
  - integer
  - unit
---

# DecUnitAbilityLevel
Decreases the level of a unit's ability by 1. The level will not go below 1.Returns the new ability level.

## Declaration

```jass
native DecUnitAbilityLevel takes unit whichUnit, integer abilcode returns integer
```

## Parameters
whichUnit `unit`
: The unit with the ability.

abilcode `integer`
: The four digit rawcode representation of the ability.
