---
layout: default
parent: Unit
grand_parent: Natives
types:
  - effect
  - location
  - string
---

# AddSpecialEffectLoc
Creates the special effect in the stated location where with Z = 0 using themodel file with a path modelName.

## Declaration

```
native AddSpecialEffectLoc takes string modelName, location where returns effect
```

## Parameters
<dl>
  <dt>modelName `string`</dt>
  <dd></dd>

  <dt>where `location`</dt>
  <dd></dd>
</dl>

## Notes 
To create an effect with a z-position not zero see<http://www.hiveworkshop.com/forums/1561722-post10.html>.
To create an effect only visible to one player see<https://www.hiveworkshop.com/threads/gs.300430/#post-3209073>