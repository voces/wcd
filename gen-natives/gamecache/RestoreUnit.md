---
layout: default
parent: Unit
grand_parent: Natives
types:
  - gamecache
  - player
  - real
  - string
  - unit
---

# RestoreUnit
Returns null if the specified value's data is not found in the cache.

## Declaration

```
native RestoreUnit takes gamecache cache, string missionKey, string key, player forWhichPlayer, real x, real y, real facing returns unit
```

## Parameters
<dl>
  <dt>cache `gamecache`</dt>
  <dd></dd>

  <dt>missionKey `string`</dt>
  <dd></dd>

  <dt>key `string`</dt>
  <dd></dd>

  <dt>forWhichPlayer `player`</dt>
  <dd></dd>

  <dt>x `real`</dt>
  <dd></dd>

  <dt>y `real`</dt>
  <dd></dd>

  <dt>facing `real`</dt>
  <dd></dd>
</dl>