---
title: FirstOfGroup
types:
  - group
  - unit
---

# FirstOfGroup

## Declaration

```jass
native FirstOfGroup takes group whichGroup returns unit
```

## Parameters
whichGroup `group`
: 

## Bugs 
May return`null`even if there are still units in the group.This happens when a unit in the group dies and decays since the group stillholds a reference to that unit but that unit is pretty much null.See<http://wc3c.net/showthread.php?t=104464>.
