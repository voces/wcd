---
title: DecUnitAbilityLevel
types:
  - integer
  - unit
---

# DecUnitAbilityLevel
Decreases the level of a unit's ability by 1. The level will not go below 1.Returns the new ability level.

## Declaration

```
native DecUnitAbilityLevel takes unit whichUnit, integer abilcode returns integer
```

## Parameters
<dl>
  <dt>whichUnit `unit`</dt>
  <dd>The unit with the ability.</dd>

  <dt>abilcode `integer`</dt>
  <dd>The four digit rawcode representation of the ability.</dd>
</dl>