---
title: DestroyTrigger
types:
  - trigger
---

# DestroyTrigger

## Declaration

```jass
native DestroyTrigger takes trigger whichTrigger returns nothing
```

## Parameters
`trigger whichTrigger`{!language=jass}
: 

## Bugs 
Do not destroy the current running Trigger (when waits are involved) asit can cause handle stack corruption as documented [here](http://www.wc3c.net/showthread.php?t=110519).
