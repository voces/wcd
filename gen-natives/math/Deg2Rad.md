---
title: Deg2Rad
types:
  - real
pure: true
---

# Deg2Rad
Converts degrees into radians. This is similar to multiplying the degree value by pi / 2.

## Declaration

```
native Deg2Rad takes real degrees returns real
```

## Parameters
<dl>
  <dt>degrees `real`</dt>
  <dd>The degree input.</dd>
</dl>

## Notes 
This is slightly more accurate than multiplying the degree valueby`bj_PI / 2`.`bj_PI`has a value of 3.14159. This native uses a pi value closer to 3.141592496.