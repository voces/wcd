---
layout: default
parent: Unit
grand_parent: Natives
types:
  - integer
---

# GetRandomInt
Returns a random integer in the range [lowBound, highBound].

## Declaration

```
native GetRandomInt takes integer lowBound, integer highBound returns integer
```

## Parameters
<dl>
  <dt>lowBound `integer`</dt>
  <dd>The inclusive lower bound of the random number returned</dd>

  <dt>highBound `integer`</dt>
  <dd>The inclusive higher bound of the random number returned</dd>
</dl>

## Notes 
If lowBound>highBound then it just swaps the values.
See<http://hiveworkshop.com/threads/random.286109#post-3073222>for an overview of the algorithm used.

## Bugs 
If you call`GetRandomInt(INT_MIN, INT_MAX)`or`GetRandomInt(INT_MAX, INT_MIN)`it will always return the same value, namely`INT_MIN`or`INT_MAX`.