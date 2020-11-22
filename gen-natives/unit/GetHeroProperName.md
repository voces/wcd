---
title: GetHeroProperName
types:
  - string
  - unit
---

# GetHeroProperName
Returns the hero's "Proper Name", which is the name displayed above the level bar.

## Declaration

```jass
native GetHeroProperName takes unit whichHero returns string
```

## Parameters
`unit whichHero`{!language=jass}
: 

## Notes 
Will return 'null' on non-hero units.
