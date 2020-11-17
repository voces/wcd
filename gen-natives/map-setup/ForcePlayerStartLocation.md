---
layout: default
parent: Unit
grand_parent: Natives
types:
  - integer
  - player
---

# ForcePlayerStartLocation
Forces player to have the specified start loc and marks the start loc as occupiedwhich removes it from consideration for subsequently placed players( i.e. you can use this to put people in a fixed loc and thenuse random placement for any unplaced players etc. ).

## Declaration

```
native ForcePlayerStartLocation takes player whichPlayer, integer startLocIndex returns nothing 
```

## Parameters
<dl>
  <dt>whichPlayer `player`</dt>
  <dd></dd>

  <dt>startLocIndex `integer`</dt>
  <dd></dd>
</dl>