---
title: R2SW
types:
  - integer
  - real
  - string
pure: true
---

# R2SW
Formats the real r into a string with supplied precision and width.

## Declaration

```jass
native R2SW takes real r, integer width, integer precision returns string
```

## Parameters
r `real`
: The number to be converted

width `integer`
: The width of the string. If the width of the resulting conversionis too small the string will be filled with spaces.Use 0 for no padding.

precision `integer`
: The amount of decimal places.
