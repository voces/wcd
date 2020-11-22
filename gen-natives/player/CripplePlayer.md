---
title: CripplePlayer
types:
  - boolean
  - force
  - player
---

# CripplePlayer
Reveals a player's remaining buildings to a force. The black mask over thebuildings will be removed as if the territory had been discovered

## Declaration

```jass
native CripplePlayer takes player whichPlayer, force toWhichPlayers, boolean flag returns nothing
```

## Parameters
whichPlayer `player`
: The player to reveal.

toWhichPlayers `force`
: The players who will see whichPlayer's buildings.

flag `boolean`
: If true, the buildings will be revealed. If false, the buildingswill not be revealed. Note that if you set it to false, it will not hide the buildings with a black mask.

## Notes 
his function will not check whether the player has a town hall before revealing.
