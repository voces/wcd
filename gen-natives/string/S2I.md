---
title: S2I
types:
  - integer
  - string
pure: true
---

# S2I
Converts a string of digits to the represented number.Returns`0`in case of an error.

## Declaration

```jass
native S2I takes string s returns integer
```

## Parameters
s `string`
: The string to be converted

## Notes 
This function only works for decimal strings. Hexadecimal or octal stringsare not supported.
If the input string starts with some valid input but ends in invalid inputthis will return the conversion of the valid part:`S2I("123asd") == 123`.
