---
layout: default
parent: Unit
grand_parent: Natives
types:
  - integer
  - string
patch: 1.24b
pure: true
---

# StringHash
Case and slash insensitive hash function.`StringHash("\\") == StringHash("/")``StringHash("AB") == StringHash("ab")`

## Declaration

```
native StringHash takes string s returns integer
```

## Parameters
<dl>
  <dt>s `string`</dt>
  <dd></dd>
</dl>

## Notes 
See<http://www.hiveworkshop.com/forums/w-277/b-213272/>for the source-code of StringHash.