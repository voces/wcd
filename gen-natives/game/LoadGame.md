---
layout: default
parent: Unit
grand_parent: Natives
types:
  - boolean
  - string
---

# LoadGame

## Declaration

```
native LoadGame takes string saveFileName, boolean doScoreScreen returns nothing
```

## Parameters
<dl>
  <dt>saveFileName `string`</dt>
  <dd></dd>

  <dt>doScoreScreen `boolean`</dt>
  <dd></dd>
</dl>

## Bugs 
The filename seems to have some limitations:- No underscores in campaign names.- Shorter file names for savegames.- Probably no dots in savegames or campaign names.For more info see<http://www.hiveworkshop.com/threads/map-transition-does-not-work-when-loading-a-custom-savegame.286927/>