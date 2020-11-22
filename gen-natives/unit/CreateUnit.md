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

```jass
native CreateUnit takes player id, integer unitid, real x, real y, real face returns unit
```

## Parameters
id `player`
: The owner of the unit.

unitid `integer`
: The rawcode of the unit.

x `real`
: The x-coordinate of the unit.

y `real`
: The y-coordinate of the unit.

face `real`
: Unit facing in degrees.
