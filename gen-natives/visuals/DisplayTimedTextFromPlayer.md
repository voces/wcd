---
title: DisplayTimedTextFromPlayer
types:
  - player
  - real
  - string
---

# DisplayTimedTextFromPlayer
Displays the message to *all* players but the first "%s" in the message willbe replaced by`GetPlayerName(toPlayer)`.

## Declaration

```jass
native DisplayTimedTextFromPlayer takes player toPlayer, real x, real y, real duration, string message returns nothing
```

## Parameters
`player toPlayer`{!language=jass}
: 

`real x`{!language=jass}
: 

`real y`{!language=jass}
: 

`real duration`{!language=jass}
: 

`string message`{!language=jass}
: 

## Notes 
A better name for the parameter`toPlayer`would be`fromPlayer`.

## Bugs 
Only the first "%s" will be replaced correctly. Following "%s" will beprinted as garbage.
Using formatters like "%i" will also print garbage and following "%s" wontwork either.
