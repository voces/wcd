---
title: AddPlayerTechResearched
types:
  - integer
  - player
---

# AddPlayerTechResearched
In upgrades that have multiple levels, it will research the upgrade by thenumber of levels specified. (it adds the number of levels to the currentresearch level, see`SetPlayerTechResearched`to set the research level)

## Declaration

```
constant native AddPlayerTechResearched takes player whichPlayer, integer techid, integer levels returns nothing
```

## Parameters
<dl>
  <dt>whichPlayer `player`</dt>
  <dd>The player who the upgrade will be researched for.</dd>

  <dt>techid `integer`</dt>
  <dd>The four digit rawcode ID of the upgrade.</dd>

  <dt>levels `integer`</dt>
  <dd>The number of levels to add to the current research level of the upgrade.</dd>
</dl>