---
title: SetImagePosition
types:
  - image
  - real
---

# SetImagePosition
Sets the X/Y position of the provided image.This is the bottom left corner of the image, unless you used valuesform originX/Y/Z in the constructor other than 0, in which case the bottomleft corner is moved further into negative X/Y/Z direction.

## Declaration

```
native SetImagePosition takes image whichImage, real x, real y, real z returns nothing
```

## Parameters
<dl>
  <dt>whichImage `image`</dt>
  <dd></dd>

  <dt>x `real`</dt>
  <dd></dd>

  <dt>y `real`</dt>
  <dd></dd>

  <dt>z `real`</dt>
  <dd></dd>
</dl>