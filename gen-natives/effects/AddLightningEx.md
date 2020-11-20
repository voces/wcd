---
title: AddLightningEx
types:
  - boolean
  - lightning
  - real
  - string
---

# AddLightningEx
Adds the lightning of type codeName between two points with coordinates (x1;y1;z1)and (x2;y2;z2). The checkVisibility parameter allows to toggle lightning'svisibility in fog of war and black mask: true will force it to show in the fogof war and black mask when false is the reverse operation.

## Declaration

```
native AddLightningEx takes string codeName, boolean checkVisibility, real x1, real y1, real z1, real x2, real y2, real z2 returns lightning
```

## Parameters
<dl>
  <dt>codeName `string`</dt>
  <dd></dd>

  <dt>checkVisibility `boolean`</dt>
  <dd></dd>

  <dt>x1 `real`</dt>
  <dd></dd>

  <dt>y1 `real`</dt>
  <dd></dd>

  <dt>z1 `real`</dt>
  <dd></dd>

  <dt>x2 `real`</dt>
  <dd></dd>

  <dt>y2 `real`</dt>
  <dd></dd>

  <dt>z2 `real`</dt>
  <dd></dd>
</dl>