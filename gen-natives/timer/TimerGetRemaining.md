---
title: TimerGetRemaining
types:
  - real
  - timer
---

# TimerGetRemaining

## Declaration

```jass
native TimerGetRemaining takes timer whichTimer returns real
```

## Parameters
`timer whichTimer`{!language=jass}
: 

## Bugs 
This might not return the correct value if the timer was paused andrestarted at one point. See<http://www.wc3c.net/showthread.php?t=95756>.
