---
title: AddLightning
types:
  - boolean
  - lightning
  - real
  - string
---

# AddLightning
Adds the lightning of type codeName between two points with coordinates (x1;y1)and (x2;y2). The checkVisibility parameter allows to toggle lightning'svisibility in fog of war and black mask: true will force it to show in the fogof war and black mask when false is the reverse operation. This function ismaking Z coordinates of both lightning edges equal to 0.

## Declaration

```jass
native AddLightning takes string codeName, boolean checkVisibility, real x1, real y1, real x2, real y2 returns lightning
```

## Parameters
`string codeName`{!language=jass}
: 

`boolean checkVisibility`{!language=jass}
: 

`real x1`{!language=jass}
: 

`real y1`{!language=jass}
: 

`real x2`{!language=jass}
: 

`real y2`{!language=jass}
: 
