---
title: PreloadGenEnd
types:
  - string
---

# PreloadGenEnd
Writes the preload buffer to the specific file.

## Declaration

```jass
native PreloadGenEnd takes string filename returns nothing
```

## Parameters
`string filename`{!language=jass}
: The filepath to be written to.

## Notes 
In earlier versions you could give any path to write to, butnowadays they will be put into your`game-folder/CustomMapData/`.
