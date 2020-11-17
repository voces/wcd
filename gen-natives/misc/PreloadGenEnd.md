---
layout: default
parent: Unit
grand_parent: Natives
types:
  - string
---

# PreloadGenEnd
Writes the preload buffer to the specific file.

## Declaration

```
native PreloadGenEnd takes string filename returns nothing
```

## Parameters
<dl>
  <dt>filename `string`</dt>
  <dd>The filepath to be written to.</dd>
</dl>

## Notes 
In earlier versions you could give any path to write to, butnowadays they will be put into your`game-folder/CustomMapData/`.