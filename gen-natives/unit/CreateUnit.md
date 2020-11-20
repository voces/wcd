---
title: CreateUnit
types:
  - integer
  - player
  - real
  - unit
---

# CreateUnit

## Declaration

```
native CreateUnit takes player id, integer unitid, real x, real y, real face returns unit
```

## Parameters
<dl>
  <dt>id `player`</dt>
  <dd>The owner of the unit.</dd>

  <dt>unitid `integer`</dt>
  <dd>The rawcode of the unit.</dd>

  <dt>x `real`</dt>
  <dd>The x-coordinate of the unit.</dd>

  <dt>y `real`</dt>
  <dd>The y-coordinate of the unit.</dd>

  <dt>face `real`</dt>
  <dd>Unit facing in degrees.</dd>
</dl>