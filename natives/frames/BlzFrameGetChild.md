---
layout: default
parent: Frame natives
grandparent: Natives
types:
  - string
  - framehandle
  - integer
---

# `BlzFrameGetChild`

The `BlzFrameGetChild` native grabs the nth child of the passed frame. The total number of children can be retrieve using `BlzFrameGetChildrenCount`.

## Declaration

```
native BlzFrameGetChild takes framehandle frame, integer index returns framehandle
```

## Parameters
<dl>
  <dt><code>frame</code></dt>
  <dd>The parent whose children are being indexed.</dd>

  <dt><code>index</code></dt>
  <dd>The index of the child being fetched. Starts at 0.</dd>
</dl>
