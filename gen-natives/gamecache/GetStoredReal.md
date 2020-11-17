---
layout: default
parent: Unit
grand_parent: Natives
types:
  - gamecache
  - real
  - string
---

# GetStoredReal
Returns 0.0 if the specified value's data is not found in the cache.

## Declaration

```
native GetStoredReal takes gamecache cache, string missionKey, string key returns real
```

## Parameters
<dl>
  <dt>cache `gamecache`</dt>
  <dd></dd>

  <dt>missionKey `string`</dt>
  <dd></dd>

  <dt>key `string`</dt>
  <dd></dd>
</dl>