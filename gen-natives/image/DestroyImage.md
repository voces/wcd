---
layout: default
parent: Unit
grand_parent: Natives
types:
  - image
---

# DestroyImage
This function destroys the image specified and recycles the handle ID of thatimage instantly (no ref counting for images).

## Declaration

```
native DestroyImage takes image whichImage returns nothing
```

## Parameters
<dl>
  <dt>whichImage `image`</dt>
  <dd>Which image to destroy.</dd>
</dl>

## Bugs 
May crash the game if an invalid image is used (null, before the first image is created).