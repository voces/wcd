---
title: DestructableRestoreLife
types:
  - boolean
  - destructable
  - real
---

# DestructableRestoreLife
Resurrects a destructable with the specified hit points.

## Declaration

```jass
native DestructableRestoreLife takes destructable d, real life, boolean birth returns nothing
```

## Parameters
`destructable d`{!language=jass}
: The destructable to resurrect. If it is not dead, there will be no effect.

`real life`{!language=jass}
: The amount of hit points the destructable will have when it isresurrected. A value of 0, or any value above the destructable's maximum HP,will give the destructable its maximum HP (as defined in the object editor).Any value below 0.5 will give the destructable 0.5 hit points.

`boolean birth`{!language=jass}
: If true, the destructable will play its birth animation upon resurrection.
