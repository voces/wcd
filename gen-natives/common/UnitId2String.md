---
layout: default
parent: Unit
grand_parent: Natives
types:
  - integer
  - string
---

# UnitId2String

## Declaration

```
constant native UnitId2String takes integer unitId returns string
```

## Parameters
<dl>
  <dt>unitId `integer`</dt>
  <dd></dd>
</dl>

## Bugs 
Always returns null after the game is loaded/if the game is a replay.
Do not use this in a global initialisation as it returns null there.