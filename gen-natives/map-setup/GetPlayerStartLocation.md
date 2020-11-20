---
title: GetPlayerStartLocation
types:
  - integer
  - player
---

# GetPlayerStartLocation
Returns an integer representation of a player's start location. If the playehas a start location on the map (regardless of whether that player slot is filled),it will return the player's ID (e.g. Player 1 (red) will return 0, Player 2 (blue)will return 1, and so forth). If the player does not have a start locationon the map, it will return -1.

## Declaration

```
native GetPlayerStartLocation takes player whichPlayer returns integer
```

## Parameters
<dl>
  <dt>whichPlayer `player`</dt>
  <dd>The player of which to return the starting location.</dd>
</dl>