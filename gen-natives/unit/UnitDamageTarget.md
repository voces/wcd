---
layout: default
parent: Unit
grand_parent: Natives
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

```
native UnitDamageTarget takes unit whichUnit, widget target, real amount, boolean attack, boolean ranged, attacktype attackType, damagetype damageType, weapontype weaponType returns boolean
```

## Parameters
<dl>
  <dt>whichUnit `unit`</dt>
  <dd>The source of the damage. To actual deal damage it should benot`null`.</dd>

  <dt>target `widget`</dt>
  <dd>The target being damaged.</dd>

  <dt>amount `real`</dt>
  <dd>How much damage is being dealt.</dd>

  <dt>attack `boolean`</dt>
  <dd>Consider the damage dealt as being an attack.</dd>

  <dt>ranged `boolean`</dt>
  <dd>Consider the damage dealt as being from a ranged source.</dd>

  <dt>attackType `attacktype`</dt>
  <dd></dd>

  <dt>damageType `damagetype`</dt>
  <dd></dd>

  <dt>weaponType `weapontype`</dt>
  <dd></dd>
</dl>

## Notes 
For some insight about the different configurations of the differenttypes see [this post](http://www.wc3c.net/showpost.php?p=1030046&postcount=19).