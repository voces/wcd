---
layout: default
parent: Unit
grand_parent: Natives
types:
  - image
  - integer
---

# SetImageType
Changes the specified images type.

## Declaration

```
native SetImageType takes image whichImage, integer imageType returns nothing
```

## Parameters
<dl>
  <dt>whichImage `image`</dt>
  <dd></dd>

  <dt>imageType `integer`</dt>
  <dd>Influence the order in which images are drawn above one another:| Value | Name           | Description ||-------|----------------|-------------|| 1     | Selection      | Drawn above all other imageTypes. || 2     | Indicator      | Drawn above imageType 4, but below 1 and 3. || 3     | Occlusion Mask | Drawn above imageType 4 and 2 and below imageType 1. || 4     | Ubersplat      | Drawn below every other type. Images of this type are additionally affected by time of day and the fog of war (only for tinting). |Multiple images with the same type are drawn in their order of creation,meaning that the image created first is drawn below the image created after.</dd>
</dl>