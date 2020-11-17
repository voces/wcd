---
layout: default
parent: Unit
grand_parent: Natives
types:
  - integer
  - real
  - string
pure: true
---

# R2SW
Formats the real r into a string with supplied precision and width.

## Declaration

```
native R2SW takes real r, integer width, integer precision returns string
```

## Parameters
<dl>
  <dt>r `real`</dt>
  <dd>The number to be converted</dd>

  <dt>width `integer`</dt>
  <dd>The width of the string. If the width of the resulting conversionis too small the string will be filled with spaces.Use 0 for no padding.</dd>

  <dt>precision `integer`</dt>
  <dd>The amount of decimal places.</dd>
</dl>