---
title: AddSpellEffectById
types:
  - effect
  - effecttype
  - integer
  - x
  - y
  - undefined
---

# AddSpellEffectById
Creates the special effect in point with coordinates (x;y) with Z = 0 using themodel file from the Object Editor field of type t from the ability, unit orbuff (works with all these types, though the name states it's ability-onlyfunction) with raw code abilityId. If this field has more than one effectinside, it will only create the first effect stated in the field, ignoringall others.

## Declaration

```jass
native AddSpellEffectById takes integer abilityId, effecttype t,real x, real y returns effect
```

## Parameters
abilityId `integer`
: 

treal `effecttype`
: 

real `x`
: 

returns `y`
: 

undefined `effect`
: 

## Notes 
To create an effect with a z-position not zero see<http://www.hiveworkshop.com/forums/1561722-post10.html>.
