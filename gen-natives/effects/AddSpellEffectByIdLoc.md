---
title: AddSpellEffectByIdLoc
types:
  - effect
  - effecttype
  - integer
  - where
  - undefined
---

# AddSpellEffectByIdLoc
Creates the special effect in location where with Z = 0 using the model filefrom the Object Editor field of type t from the ability, unit or buff (workswith all these types, though the name states it's ability-only function) withraw code abilityId. If this field has more than one effect inside, it will onlycreate the first effect stated in the field, ignoring all others.

## Declaration

```jass
native AddSpellEffectByIdLoc takes integer abilityId, effecttype t,location where returns effect
```

## Parameters
`integer abilityId`{!language=jass}
: 

`effecttype tlocation`{!language=jass}
: 

`where returns`{!language=jass}
: 

`effect undefined`{!language=jass}
: 

## Notes 
To create an effect with a z-position not zero see<http://www.hiveworkshop.com/forums/1561722-post10.html>.
