---
title: AddResourceAmount
types:
  - integer
  - unit
---

# AddResourceAmount
Adds the amount more gold to the whichUnit gold mine.

## Declaration

```jass
native AddResourceAmount takes unit whichUnit, integer amount returns nothing
```

## Parameters
`unit whichUnit`{!language=jass}
: The unit who receives the added resource amount.

`integer amount`{!language=jass}
: The amount of resources to add to the unit.

## Bugs 
If the value after adding negative amount will be less than zero, then itwill display negative resource amount, but if some peasant or peon will try togather resources from such a mine, he will bring back 0 gold and the mine willbe auto-destroyed.
