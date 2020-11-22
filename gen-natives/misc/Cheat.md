---
title: Cheat
types:
  - string
---

# Cheat
Applies the specified cheat, but only if the game is single player. There are afew cheats that can be toggled on or off. If the cheat is enabled, entering thecheat again will disable it. If the cheat is disabled, entering the cheat willenable it again. Upon entering, the text "Cheat Enabled!" will be displayed.

## Declaration

```jass
native Cheat takes string cheatStr returns nothing
```

## Parameters
`string cheatStr`{!language=jass}
: The cheat to enter.

## Notes 
For a list of all cheats see<http://classic.battle.net/war3/cheatcodes.shtml>.
