---
title: PreloadGenStart
types:

---

# PreloadGenStart
Starts a new timer. In the generated file from`PreloadGenEnd`will be a linelike`call PreloadEnd( 0.123 )`. The argument to`PreloadEnd`is the time elapsedbetween the calls of`PreloadGenStart`and`PreloadGenEnd`.

## Declaration

```
native PreloadGenStart takes nothing returns nothing
```