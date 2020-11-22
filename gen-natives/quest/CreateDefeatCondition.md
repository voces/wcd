---
title: CreateDefeatCondition
types:
  - defeatcondition
---

# CreateDefeatCondition
Defeat conditions tell players what conditions would warrant a defeat.They are shown above all quest descriptions. Note that this function will onlydisplay text. To put the condition in effect, you would need additionaltriggering (i.e. registering when a unit dies to end the game). This updatesall quests with the list of defeat condition descriptions.To actually set the text use`DefeatConditionSetDescription`.

## Declaration

```jass
native CreateDefeatCondition takes nothing returns defeatcondition
```

## Notes 
Each defeat condition has a hyphen "-" symbol appended to the front.
