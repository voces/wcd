---
title: UnitId2String
types:
  - integer
  - string
---

# UnitId2String

## Declaration

```jass
constant native UnitId2String takes integer unitId returns string
```

## Parameters
`integer unitId`{!language=jass}
: 

## Bugs 
Always returns null after the game is loaded/if the game is a replay.
Do not use this in a global initialisation as it returns null there.
