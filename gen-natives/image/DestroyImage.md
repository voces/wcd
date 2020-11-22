---
title: DestroyImage
types:
  - image
---

# DestroyImage
This function destroys the image specified and recycles the handle ID of thatimage instantly (no ref counting for images).

## Declaration

```jass
native DestroyImage takes image whichImage returns nothing
```

## Parameters
`image whichImage`{!language=jass}
: Which image to destroy.

## Bugs 
May crash the game if an invalid image is used (null, before the first image is created).
