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

```
native DisplayTimedTextFromPlayer takes player toPlayer, real x, real y, real duration, string message returns nothing
```

## Parameters
<dl>
  <dt>toPlayer `player`</dt>
  <dd></dd>

  <dt>x `real`</dt>
  <dd></dd>

  <dt>y `real`</dt>
  <dd></dd>

  <dt>duration `real`</dt>
  <dd></dd>

  <dt>message `string`</dt>
  <dd></dd>
</dl>

## Notes 
A better name for the parameter`toPlayer`would be`fromPlayer`.

## Bugs 
Only the first "%s" will be replaced correctly. Following "%s" will beprinted as garbage.
Using formatters like "%i" will also print garbage and following "%s" wontwork either.