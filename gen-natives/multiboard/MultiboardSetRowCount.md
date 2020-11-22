---
title: MultiboardSetRowCount
types:
  - integer
  - multiboard
---

# MultiboardSetRowCount

## Declaration

```jass
native MultiboardSetRowCount takes multiboard lb, integer count returns nothing
```

## Parameters
lb `multiboard`
: 

count `integer`
: 

## Bugs 
It is only safe to change the row count by one. Use multiple calls for bigger values.<http://www.hiveworkshop.com/forums/l-715/m-250775/><http://www.hiveworkshop.com/forums/t-269/w-234897/>
