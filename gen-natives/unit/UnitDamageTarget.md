---
title: UnitDamageTarget
types:
  - attacktype
  - boolean
  - damagetype
  - real
  - unit
  - weapontype
  - widget
---

# UnitDamageTarget
Deals damage to target widget from a source unit.

## Declaration

```jass
native UnitDamageTarget takes unit whichUnit, widget target, real amount, boolean attack, boolean ranged, attacktype attackType, damagetype damageType, weapontype weaponType returns boolean
```

## Parameters
whichUnit `unit`
: The source of the damage. To actual deal damage it should benot`null`.

target `widget`
: The target being damaged.

amount `real`
: How much damage is being dealt.

attack `boolean`
: Consider the damage dealt as being an attack.

ranged `boolean`
: Consider the damage dealt as being from a ranged source.

attackType `attacktype`
: 

damageType `damagetype`
: 

weaponType `weapontype`
: 

## Notes 
For some insight about the different configurations of the differenttypes see [this post](http://www.wc3c.net/showpost.php?p=1030046&postcount=19).
