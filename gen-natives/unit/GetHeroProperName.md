---
layout: default
parent: Unit
grand_parent: Natives
types:
  - string
  - unit
---

# GetHeroProperName
Returns the hero's "Proper Name", which is the name displayed above the level bar.

## Declaration

```
native GetHeroProperName takes unit whichHero returns string
```

## Parameters
<dl>
  <dt>whichHero `unit`</dt>
  <dd></dd>
</dl>

## Notes 
Will return 'null' on non-hero units.