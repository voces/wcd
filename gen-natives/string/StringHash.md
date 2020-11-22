---
title: StringHash
types:
  - integer
  - string
patch: 1.24b
pure: true
---

# StringHash
Case and slash insensitive hash function.`StringHash("\\") == StringHash("/")``StringHash("AB") == StringHash("ab")`

## Declaration

```jass
native StringHash takes string s returns integer
```

## Parameters
`string s`{!language=jass}
: 

## Notes 
See<http://www.hiveworkshop.com/forums/w-277/b-213272/>for the source-code of StringHash.
