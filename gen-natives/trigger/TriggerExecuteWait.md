---
title: TriggerExecuteWait
types:
  - trigger
---

# TriggerExecuteWait
Does the same as`TriggerExecute`but if the caller has been marked with`TriggerWaitOnSleeps`before itsexecution, it will additionally wait for`TriggerSleepAction`s of the callee, so this really ensures thatthe callee has finished. If there was a`TriggerSleepAction`, there will be a short delay before returning.

## Declaration

```
native TriggerExecuteWait takes trigger whichTrigger returns nothing
```

## Parameters
<dl>
  <dt>whichTrigger `trigger`</dt>
  <dd></dd>
</dl>