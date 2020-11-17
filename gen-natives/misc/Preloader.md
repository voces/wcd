---
layout: default
parent: Unit
grand_parent: Natives
types:
  - string
---

# Preloader
Executes the preload-file.

## Declaration

```
native Preloader takes string filename returns nothing
```

## Parameters
<dl>
  <dt>filename `string`</dt>
  <dd>The file to execute.</dd>
</dl>

## Notes 
This only works if you have enable the usage of local files in your registry.The registry key is`HKEY_CURRENT_USER\\Software\\Blizzard Entertainment\\Warcraft III\\Allow Local Files\`
Here are some ways to get the data out of the preload file into your map:To store multiple integers you can use`SetPlayerTechMaxAllowed`to have a good2d-array. Read via`GetPlayerTechMaxAllowed`.For strings`SetPlayerName`is suited. To read use`GetPlayerName`.Inside the preload script you can also use`ExecuteFunc`to call your map-definedfunctions and interleave the preload script with your functions.
If you use`Preloader`to load some values into your map, these valuesare very likely to be different for each player (since the player might noteven have local files enabled), so treat them as async values.
Also see the documentation of`Preload`to see how to properly get the datainto the preload script.