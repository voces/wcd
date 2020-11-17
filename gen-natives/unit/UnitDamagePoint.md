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
---

# UnitDamagePoint

## Declaration

```
native UnitDamagePoint takes unit whichUnit, real delay, real radius, real x, real y, real amount, boolean attack, boolean ranged, attacktype attackType, damagetype damageType, weapontype weaponType returns boolean
```

## Parameters
<dl>
  <dt>whichUnit `unit`</dt>
  <dd></dd>

  <dt>delay `real`</dt>
  <dd></dd>

  <dt>radius `real`</dt>
  <dd></dd>

  <dt>x `real`</dt>
  <dd></dd>

  <dt>y `real`</dt>
  <dd></dd>

  <dt>amount `real`</dt>
  <dd></dd>

  <dt>attack `boolean`</dt>
  <dd></dd>

  <dt>ranged `boolean`</dt>
  <dd></dd>

  <dt>attackType `attacktype`</dt>
  <dd></dd>

  <dt>damageType `damagetype`</dt>
  <dd></dd>

  <dt>weaponType `weapontype`</dt>
  <dd></dd>
</dl>

## Bugs 
Has been known to cause crashes in battle.net