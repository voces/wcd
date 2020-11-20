---
title: S2R
types:
  - real
  - string
pure: true
---

# S2R
Converts a string of digits to the represented number.Returns`0`in case of an error.

## Declaration

```
native S2R takes string s returns real
```

## Parameters
<dl>
  <dt>s `string`</dt>
  <dd>The string to be converted</dd>
</dl>

## Notes 
This function only works for decimal strings. Hexadecimal or octal stringsare not supported.
If the input string starts with some valid input but ends in invalid inputthis will return the conversion of the valid part:`S2R(".123asd") == 0.123`.