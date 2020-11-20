---
title: CreateCorpse
types:
  - integer
  - player
  - real
  - unit
---

# CreateCorpse
Creates the corpse of a specific unit for a player at the coordinates ( x , y ).The unit will die upon spawning and play their decay animation, therefore theywill not necessarily be a corpse immediately after this function call. If theunit corresponding to the rawcode cannot have a corpse, then the returned value is null.

## Declaration

```
native CreateCorpse takes player whichPlayer, integer unitid, real x, real y, real face returns unit
```

## Parameters
<dl>
  <dt>whichPlayer `player`</dt>
  <dd>The owner of the corpse.</dd>

  <dt>unitid `integer`</dt>
  <dd>The rawcode of the unit for the corpse.</dd>

  <dt>x `real`</dt>
  <dd>The x-coordinate of the corpse.</dd>

  <dt>y `real`</dt>
  <dd>The y-coordinate of the corpse.</dd>

  <dt>face `real`</dt>
  <dd>Unit facing in degrees.</dd>
</dl>