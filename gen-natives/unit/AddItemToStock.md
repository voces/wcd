---
title: AddItemToStock
types:
  - integer
  - unit
---

# AddItemToStock
Adds an item of the type itemId with current stock of currentStock and max stockof stockMax to the specific shop whichUnit.

## Declaration

```jass
native AddItemToStock takes unit whichUnit, integer itemId, integer currentStock, integer stockMax returns nothing
```

## Parameters
whichUnit `unit`
: 

itemId `integer`
: 

currentStock `integer`
: 

stockMax `integer`
: 

## Notes 
Some issues with default Blizzard initialization and that function were met.See<http://www.hiveworkshop.com/forums/l-715/a-251815/>for details.
