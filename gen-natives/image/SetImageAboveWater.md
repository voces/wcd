---
layout: default
parent: Unit
grand_parent: Natives
types:
  - boolean
  - image
---

# SetImageAboveWater
Draws the specified image above the water if the flag is true. The secondboolean (useWaterAlpha) doesnt seem to do much. Every imagetype other than 1doesnt seem to appear above water.

## Declaration

```
native SetImageAboveWater takes image whichImage, boolean flag, boolean useWaterAlpha returns nothing
```

## Parameters
<dl>
  <dt>whichImage `image`</dt>
  <dd></dd>

  <dt>flag `boolean`</dt>
  <dd></dd>

  <dt>useWaterAlpha `boolean`</dt>
  <dd></dd>
</dl>