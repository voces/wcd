---
title: OrderId2String
types:
  - integer
  - string
pure: true
---

# OrderId2String

## Declaration

```jass
constant native OrderId2String takes integer orderId returns string
```

## Parameters
orderId `integer`
: 

## Bugs 
Do not use this in a global initialisation as it returns null there.
