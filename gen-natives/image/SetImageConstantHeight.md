---
layout: default
parent: Unit
grand_parent: Natives
types:
  - boolean
  - image
  - real
---

# SetImageConstantHeight
Untested, but if its decription can account for anthing, it locks the Z positionto the given height, if the flag is true. After a bit of testing i concludedthat this is the only function thats able to modify an images Z offset.

## Declaration

```
native SetImageConstantHeight takes image whichImage, boolean flag, real height returns nothing
```

## Parameters
<dl>
  <dt>whichImage `image`</dt>
  <dd></dd>

  <dt>flag `boolean`</dt>
  <dd></dd>

  <dt>height `real`</dt>
  <dd></dd>
</dl>