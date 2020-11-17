---
layout: default
parent: Unit
grand_parent: Natives
types:
  - attacktype
  - integer
pure: true
---

# ConvertAttackType

## Declaration

```
constant native ConvertAttackType takes integer i returns attacktype
```

## Parameters
<dl>
  <dt>i `integer`</dt>
  <dd></dd>
</dl>

## Notes 
Blizzard only defined attack-types 0 to 6 but there is a hidden one:`ConvertAttackType(7)`.<http://www.hiveworkshop.com/forums/t-269/h-227993/>