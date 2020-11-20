---
title: AddItemToStock
types:
  - integer
  - unit
---

# AddItemToStock
Adds an item of the type itemId with current stock of currentStock and max stockof stockMax to the specific shop whichUnit.

## Declaration

```
native AddItemToStock takes unit whichUnit, integer itemId, integer currentStock, integer stockMax returns nothing
```

## Parameters
<dl>
  <dt>whichUnit `unit`</dt>
  <dd></dd>

  <dt>itemId `integer`</dt>
  <dd></dd>

  <dt>currentStock `integer`</dt>
  <dd></dd>

  <dt>stockMax `integer`</dt>
  <dd></dd>
</dl>

## Notes 
Some issues with default Blizzard initialization and that function were met.See<http://www.hiveworkshop.com/forums/l-715/a-251815/>for details.