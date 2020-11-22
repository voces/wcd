---
title: UnitModifySkillPoints
types:
  - boolean
  - integer
  - unit
---

# UnitModifySkillPoints
Adds the amount to the units available skill points. Calling with a negativenumber reduces the skill points by that amount.Returns false if the amount of available skill points is already zero andif it's called with any non-positive number.Returns true in any other case.

## Declaration

```jass
native UnitModifySkillPoints takes unit whichHero, integer skillPointDelta returns boolean
```

## Parameters
`unit whichHero`{!language=jass}
: 

`integer skillPointDelta`{!language=jass}
: 

## Notes 
If`skillPointDelta`is greater than the amount of skillpoints the heroactually can spend (like 9 for three 3-level abilities) only that amount willbe added. Negative`skillPointDelta`works as expected.
