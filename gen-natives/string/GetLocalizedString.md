---
title: GetLocalizedString
types:
  - string
async: true
---

# GetLocalizedString
Reads a string out of some files and returns the result.The result can differ between players with different languages.Possible sources are the .fdf files and the war3map.wts file.Returns source if no entry was found.

## Declaration

```jass
native GetLocalizedString takes string source returns string
```

## Parameters
source `string`
: 

## Bugs 
Cannot assign it to a constant variable as it will crash the game.`constant string foo = GetLocalizedString("bar")`
