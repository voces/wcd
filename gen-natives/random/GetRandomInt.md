---
title: GetRandomInt
types:
  - integer
---

# GetRandomInt
Returns a random integer in the range [lowBound, highBound].

## Declaration

```jass
native GetRandomInt takes integer lowBound, integer highBound returns integer
```

## Parameters
`integer lowBound`{!language=jass}
: The inclusive lower bound of the random number returned

`integer highBound`{!language=jass}
: The inclusive higher bound of the random number returned

## Notes 
If lowBound>highBound then it just swaps the values.
See<http://hiveworkshop.com/threads/random.286109#post-3073222>for an overview of the algorithm used.

## Bugs 
If you call`GetRandomInt(INT_MIN, INT_MAX)`or`GetRandomInt(INT_MAX, INT_MIN)`it will always return the same value, namely`INT_MIN`or`INT_MAX`.
