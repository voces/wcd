---
title: OrderId
types:
  - integer
  - string
pure: true
---

# OrderId

## Declaration

```jass
constant native OrderId takes string orderIdString returns integer
```

## Parameters
orderIdString `string`
: 

## Bugs 
Do not use this in a global initialisation as it returns 0 there.
