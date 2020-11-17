---
layout: default
parent: Unit
grand_parent: Natives
types:
  - boolean
  - integer
  - unit
---

# AddHeroXP
Adds the input value of experience to the hero unit specified.If the experience added exceeds the amount required for the hero to gain a level,then it will force the unit to gain a level and the remaining experience willspill over for the next level.

## Declaration

```
native AddHeroXP takes unit whichHero, integer xpToAdd, boolean showEyeCandy returns nothing
```

## Parameters
<dl>
  <dt>whichHero `unit`</dt>
  <dd>The hero unit to add experience to.</dd>

  <dt>xpToAdd `integer`</dt>
  <dd>The amount of experience to add to the hero unit.</dd>

  <dt>showEyeCandy `boolean`</dt>
  <dd>If the boolean input is true, then the hero-level-gaineffect will be shown if the hero gains a level from the added experience.</dd>
</dl>

## Bugs 
Adding negative value to experience will decrease itby the stated value, but won't lower the level even if the experience valueafter deduction is lower than the lower bound of the experience required to getthe stated level.
If the value will become lower than zero, the experience won'tbe negative, instead of it it'll be equalto`4294967296+(supposed_negative_experience_value)`which actually provesthat WarCraft III uses unsigned int type for storing experience points.