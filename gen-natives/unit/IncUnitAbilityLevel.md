---
title: IncUnitAbilityLevel
types:
  - integer
  - unit
---

# IncUnitAbilityLevel
Increases the level of a unit's ability by 1.Returns the new ability level.

## Declaration

```
native IncUnitAbilityLevel takes unit whichUnit, integer abilcode returns integer
```

## Parameters
<dl>
  <dt>whichUnit `unit`</dt>
  <dd>The unit with the ability.</dd>

  <dt>abilcode `integer`</dt>
  <dd>The four digit rawcode representation of the ability.</dd>
</dl>

## Notes 
`IncUnitAbilityLevel`can increase an abilities level to maxlevel+1.On maxlevel+1 all ability fields are 0.See<http://www.wc3c.net/showthread.php?p=1029039#post1029039>and<http://www.hiveworkshop.com/forums/lab-715/silenceex-everything-you-dont-know-about-silence-274351/>.