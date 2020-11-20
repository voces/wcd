---
title: SetUnitPosition
types:
  - real
  - unit
---

# SetUnitPosition

## Declaration

```
native SetUnitPosition takes unit whichUnit, real newX, real newY returns nothing
```

## Parameters
<dl>
  <dt>whichUnit `unit`</dt>
  <dd></dd>

  <dt>newX `real`</dt>
  <dd></dd>

  <dt>newY `real`</dt>
  <dd></dd>
</dl>

## Notes 
This cancels the orders of the unit. If you want to move a unit withoutcanceling its orders use`SetUnitX`/`SetUnitY`.