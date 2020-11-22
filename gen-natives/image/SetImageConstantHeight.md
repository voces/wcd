---
title: SetImageConstantHeight
types:
  - boolean
  - image
  - real
---

# SetImageConstantHeight
Untested, but if its decription can account for anthing, it locks the Z positionto the given height, if the flag is true. After a bit of testing i concludedthat this is the only function thats able to modify an images Z offset.

## Declaration

```jass
native SetImageConstantHeight takes image whichImage, boolean flag, real height returns nothing
```

## Parameters
whichImage `image`
: 

flag `boolean`
: 

height `real`
: 
