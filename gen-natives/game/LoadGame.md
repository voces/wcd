---
title: LoadGame
types:
  - boolean
  - string
---

# LoadGame

## Declaration

```jass
native LoadGame takes string saveFileName, boolean doScoreScreen returns nothing
```

## Parameters
`string saveFileName`{!language=jass}
: 

`boolean doScoreScreen`{!language=jass}
: 

## Bugs 
The filename seems to have some limitations:- No underscores in campaign names.- Shorter file names for savegames.- Probably no dots in savegames or campaign names.For more info see<http://www.hiveworkshop.com/threads/map-transition-does-not-work-when-loading-a-custom-savegame.286927/>
