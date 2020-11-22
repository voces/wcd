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
itemId `integer`
: The item to add to the stock.

currentStock `integer`
: Determines the amount of that item in stock upon being addedto the buildings.

stockMax `integer`
: The item will grow in stock count up to the value of stockMax.The rate at which the item grows in stock is determined by its stock replenishinterval, which can be modified in the object editor.

## Notes 
Some issues with default Blizzard initialization and that function were met.See<http://www.hiveworkshop.com/forums/l-715/a-251815/>for details.
Adding an item which already is in stock for a building will replace itand refresh the interval and stock count.
