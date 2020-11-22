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
`real r`{!language=jass}
: The number to be converted

`integer width`{!language=jass}
: The width of the string. If the width of the resulting conversionis too small the string will be filled with spaces.Use 0 for no padding.

`integer precision`{!language=jass}
: The amount of decimal places.
