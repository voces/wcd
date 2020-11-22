---
title: AddWeatherEffect
types:
  - integer
  - rect
  - weathereffect
---

# AddWeatherEffect
Adds the weather effect with id effectID to the rect where.

## Declaration

```jass
native AddWeatherEffect takes rect where, integer effectID returns weathereffect
```

## Parameters
where `rect`
: The rect to apply the weathereffect to.

effectID `integer`
: Which effect to apply.

## Notes 
To understand more about weather effects nature, I advise to readAmmorth's article about weather effects:<http://www.wc3c.net/showthread.php?t=91176>.
To get an idea on how to add your own weather effects, you may readCryoniC's article about custom weather effects:<http://www.wc3c.net/showthread.php?t=67949>.
