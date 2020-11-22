---
title: CreateBlightedGoldmine
types:
  - player
  - real
  - unit
---

# CreateBlightedGoldmine
Creates a new, undead blighted gold mine unit at the specified coordinates for the player. The haunted gold mine will create blight around the area, and will become a normal gold mine when destroyed. The amount of gold in the mine is determined by the Data - Max Gold field for the ability Gold Mine ability ('Agld').

## Declaration

```jass
native CreateBlightedGoldmine takes player id, real x, real y, real face returns unit
```

## Parameters
`player id`{!language=jass}
: The player to create the goldmine for.

`real x`{!language=jass}
: The x-coordinate of the goldmine

`real y`{!language=jass}
: The y-coordinate of the goldmine

`real face`{!language=jass}
: The facing of the goldmine in degrees
