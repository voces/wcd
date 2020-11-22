---
title: TriggerWaitOnSleeps
types:
  - boolean
  - trigger
---

# TriggerWaitOnSleeps
Marks the given trigger to wait/no longer wait for`TriggerSleepAction`s in sub trigger executions started via`TriggerExecuteWait`.Since this is an attribute of the execution rather than the trigger object, this affects future runs of the given trigger, and notthose already started.

## Declaration

```jass
native TriggerWaitOnSleeps takes trigger whichTrigger, boolean flag returns nothing
```

## Parameters
`trigger whichTrigger`{!language=jass}
: 

`boolean flag`{!language=jass}
: 
