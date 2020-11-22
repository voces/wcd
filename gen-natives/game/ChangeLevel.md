---
title: ChangeLevel
types:
  - boolean
  - string
---

# ChangeLevel
Loads the next level for all players. Note that this function is asynchronous,so each player will be sent to their own map. If the boolean is set to true,the score screen will appear before the user progresses to the next level.

## Declaration

```jass
native ChangeLevel takes string newLevel, boolean doScoreScreen returns nothing
```

## Parameters
newLevel `string`
: The path of the next level. The path is relative to the Warcraft III folder.

doScoreScreen `boolean`
: If set to true, the score screen will appear before the user progresses to the next level.
