---
title: OrderId2String
types:
  - integer
  - string
pure: true
---

# OrderId2String

## Declaration

```
constant native OrderId2String takes integer orderId returns string
```

## Parameters
<dl>
  <dt>orderId `integer`</dt>
  <dd></dd>
</dl>

## Bugs 
Do not use this in a global initialisation as it returns null there.