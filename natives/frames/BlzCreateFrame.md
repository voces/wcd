---
layout: default
parent: Frame natives
grand_parent: Natives
types:
  - string
  - framehandle
  - integer
permalink: /natives/frames/BlzCreateFrame
---

# BlzCreateFrame

The `BlzCreateFrame` native is used to create main frames defined in an [FDF](../../frames/FDF) that has to be loaded into the game with [TOC](../../frames/TOC). Subframes are accessible by using `BlzGetFrameByName` or [`BlzFrameGetChild`](BlzFrameGetChild).

## Declaration

```
native BlzCreateFrame takes string name, framehandle owner, integer priority, integer createContext returns framehandle
```

## Parameters
<dl>
  <dt><code>name</code></dt>
  <dd>The name of the frame defined in an FDF.</dd>

  <dt><code>owner</code></dt>
  <dd>The parent the frame is to be created under. This should not be a simple frame.</dd>
  
  <dt><code>priority</code></dt>
  <dd>TODO</dd>
  
  <dt><code>createContext</code></dt>
  <dd>The index of the created frame. For use by other natives like <code>BlzGetFrameByName</code>.</dd>
</dl>
