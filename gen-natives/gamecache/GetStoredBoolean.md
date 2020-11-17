---
layout: default
parent: Unit
grand_parent: Natives
types:
  - boolean
  - gamecache
  - string
---

# GetStoredBoolean
Returns false if the specified value's data is not found in the cache.

## Declaration

```
native GetStoredBoolean takes gamecache cache, string missionKey, string key returns boolean
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