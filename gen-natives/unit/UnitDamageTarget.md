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
`unit whichUnit`{!language=jass}
: The source of the damage. To actual deal damage it should benot`null`.

`widget target`{!language=jass}
: The target being damaged.

`real amount`{!language=jass}
: How much damage is being dealt.

`boolean attack`{!language=jass}
: Consider the damage dealt as being an attack.

`boolean ranged`{!language=jass}
: Consider the damage dealt as being from a ranged source.

`attacktype attackType`{!language=jass}
: 

`damagetype damageType`{!language=jass}
: 

`weapontype weaponType`{!language=jass}
: 

## Notes 
For some insight about the different configurations of the differenttypes see [this post](http://www.wc3c.net/showpost.php?p=1030046&postcount=19).
