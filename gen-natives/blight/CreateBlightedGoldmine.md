---
title: CreateBlightedGoldmine
types:
  - player
  - real
  - unit
---

# CreateBlightedGoldmine
Creates a new, undead blighted gold mine unit at the specified coordinates for the player. The haunted gold mine will create blight around the area, and will become a normal gold mine when destroyed. The amount of gold in the mine is determined by the Data - Max Gold field for the ability Gold Mine ability ('Agld').

## Declaration

```
native CreateBlightedGoldmine takes player id, real x, real y, real face returns unit
```

## Parameters
<dl>
  <dt>id `player`</dt>
  <dd>The player to create the goldmine for.</dd>

  <dt>x `real`</dt>
  <dd>The x-coordinate of the goldmine</dd>

  <dt>y `real`</dt>
  <dd>The y-coordinate of the goldmine</dd>

  <dt>face `real`</dt>
  <dd>The facing of the goldmine in degrees</dd>
</dl>