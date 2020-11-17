---
layout: default
parent: Unit
grand_parent: Natives
types:
  - integer
  - location
  - player
  - real
  - unit
---

# CreateUnitAtLoc

## Declaration

```
native CreateUnitAtLoc takes player id, integer unitid, location whichLocation, real face returns unit
```

## Parameters
<dl>
  <dt>id `player`</dt>
  <dd>The owner of the unit.</dd>

  <dt>unitid `integer`</dt>
  <dd>The rawcode of the unit.</dd>

  <dt>whichLocation `location`</dt>
  <dd>The position of the unit.</dd>

  <dt>face `real`</dt>
  <dd>Unit facing in degrees.</dd>
</dl>