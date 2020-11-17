---
layout: default
parent: Unit
grand_parent: Natives
types:
  - real
---

# CameraSetSmoothingFactor
Sets the game camera's smoothing factor for scrolling with the mouse/keyboard. The default smoothing factor for the standard game camera is 0, where upon scrolling, the camera will immediately come to a stop. As the factor increases, the camera eases into a stop more and more gradually.

## Declaration

```
native CameraSetSmoothingFactor takes real factor returns nothing
```

## Parameters
<dl>
  <dt>factor `real`</dt>
  <dd>The smoothing factor. It is 0 by default.</dd>
</dl>