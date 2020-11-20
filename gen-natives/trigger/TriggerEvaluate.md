---
title: TriggerEvaluate
types:
  - boolean
  - trigger
---

# TriggerEvaluate
Evaluates all functions that were added to the trigger via`TriggerAddCondition`.All return-values from all added condition-functions are`and`ed together as the final return-value.Returns the boolean value of the return value from the condition-function.So if 0/0.0/null would be returned in the condition-function,`TriggerEvaluate`would return false. Note that`""`would return`true`.

## Declaration

```
native TriggerEvaluate takes trigger whichTrigger returns boolean
```

## Parameters
<dl>
  <dt>whichTrigger `trigger`</dt>
  <dd></dd>
</dl>

## Notes 
If a condition-function crashes the thread or does not return any value`TriggerEvaluate`will return false.
If you want to return false for a condition-function that returnsstring (for whatever reason) return`null`instead of`""`
*All* functions added via`TriggerAddCondition`are run.There is no short-circuting. If you want short-circuting use`And`or`Or`.
All functions added via`TriggerAddCondition`are run in the order theywere added.