---
title: AddItemToAllStock
types:
  - integer
---

# AddItemToAllStock
Adds an item of the type itemId with current stock of currentStock and max stockof stockMax to all shops in game.

## Declaration

```jass
native AddItemToAllStock takes integer itemId, integer currentStock, integer stockMax returns nothing
```

## Parameters
`integer itemId`{!language=jass}
: The item to add to the stock.

`integer currentStock`{!language=jass}
: Determines the amount of that item in stock upon being addedto the buildings.

`integer stockMax`{!language=jass}
: The item will grow in stock count up to the value of stockMax.The rate at which the item grows in stock is determined by its stock replenishinterval, which can be modified in the object editor.

## Notes 
Some issues with default Blizzard initialization and that function were met.See<http://www.hiveworkshop.com/forums/l-715/a-251815/>for details.
Adding an item which already is in stock for a building will replace itand refresh the interval and stock count.
