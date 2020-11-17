---
layout: default
parent: Unit
grand_parent: Natives
types:
  - integer
  - multiboard
---

# MultiboardSetRowCount

## Declaration

```
native MultiboardSetRowCount takes multiboard lb, integer count returns nothing
```

## Parameters
<dl>
  <dt>lb `multiboard`</dt>
  <dd></dd>

  <dt>count `integer`</dt>
  <dd></dd>
</dl>

## Bugs 
It is only safe to change the row count by one. Use multiple calls for bigger values.<http://www.hiveworkshop.com/forums/l-715/m-250775/><http://www.hiveworkshop.com/forums/t-269/w-234897/>