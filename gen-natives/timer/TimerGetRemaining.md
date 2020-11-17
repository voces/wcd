---
layout: default
parent: Unit
grand_parent: Natives
types:
  - real
  - timer
---

# TimerGetRemaining

## Declaration

```
native TimerGetRemaining takes timer whichTimer returns real
```

## Parameters
<dl>
  <dt>whichTimer `timer`</dt>
  <dd></dd>
</dl>

## Bugs 
This might not return the correct value if the timer was paused andrestarted at one point. See<http://www.wc3c.net/showthread.php?t=95756>.