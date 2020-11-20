---
title: SetUnitScale
types:
  - real
  - unit
---

# SetUnitScale

## Declaration

```
native SetUnitScale takes unit whichUnit, real scaleX, real scaleY, real scaleZ returns nothing
```

## Parameters
<dl>
  <dt>whichUnit `unit`</dt>
  <dd></dd>

  <dt>scaleX `real`</dt>
  <dd>This is actually the scale for *all* dimensions</dd>

  <dt>scaleY `real`</dt>
  <dd>This parameter is not taken into account</dd>

  <dt>scaleZ `real`</dt>
  <dd>This parameter is not taken into account</dd>
</dl>

## Bugs 
Only takes scaleX into account and uses scaleX for all three dimensions.