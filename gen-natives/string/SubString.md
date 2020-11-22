---
title: SubString
types:
  - integer
  - string
pure: true
---

# SubString

## Declaration

```jass
native SubString takes string source, integer start, integer end returns string
```

## Parameters
source `string`
: 

start `integer`
: 

end `integer`
: 

## Notes 
This function does bound-checking on the upper bound, e.g.`SubString("test", 0, 9999) == "test"`but not on the lower bound:````SubString("", -3, 0) == nullSubString(null, -3, 0) == nullSubString("non-empty/not-null", -3, 0) != ""SubString("non-empty/not-null", -3, 0) != null````<http://www.wc3c.net/showthread.php?p=1090749#post1090749>
