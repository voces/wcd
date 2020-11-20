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

```
native CripplePlayer takes player whichPlayer, force toWhichPlayers, boolean flag returns nothing
```

## Parameters
<dl>
  <dt>whichPlayer `player`</dt>
  <dd>The player to reveal.</dd>

  <dt>toWhichPlayers `force`</dt>
  <dd>The players who will see whichPlayer's buildings.</dd>

  <dt>flag `boolean`</dt>
  <dd>If true, the buildings will be revealed. If false, the buildingswill not be revealed. Note that if you set it to false, it will not hide the buildings with a black mask.</dd>
</dl>

## Notes 
his function will not check whether the player has a town hall before revealing.