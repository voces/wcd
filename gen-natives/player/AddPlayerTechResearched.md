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
`player whichPlayer`{!language=jass}
: The player who the upgrade will be researched for.

`integer techid`{!language=jass}
: The four digit rawcode ID of the upgrade.

`integer levels`{!language=jass}
: The number of levels to add to the current research level of the upgrade.
