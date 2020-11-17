---
layout: default
parent: Unit
grand_parent: Natives
types:
  - integer
  - string
pure: true
---

# OrderId

## Declaration

```
constant native OrderId takes string orderIdString returns integer
```

## Parameters
<dl>
  <dt>orderIdString `string`</dt>
  <dd></dd>
</dl>

## Bugs 
Do not use this in a global initialisation as it returns 0 there.