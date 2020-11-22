---
title: AddPlayerTechResearched
types:
  - integer
  - player
---

# AddPlayerTechResearched
In upgrades that have multiple levels, it will research the upgrade by thenumber of levels specified. (it adds the number of levels to the currentresearch level, see`SetPlayerTechResearched`to set the research level)

## Declaration

```jass
constant native AddPlayerTechResearched takes player whichPlayer, integer techid, integer levels returns nothing
```

## Parameters
whichPlayer `player`
: The player who the upgrade will be researched for.

techid `integer`
: The four digit rawcode ID of the upgrade.

levels `integer`
: The number of levels to add to the current research level of the upgrade.
