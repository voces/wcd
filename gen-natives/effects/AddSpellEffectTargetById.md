---
title: AddSpellEffectTargetById
types:
  - effect
  - effecttype
  - integer
  - string
  - widget
---

# AddSpellEffectTargetById
Attaches the special effect to the attachment point attachPointName of thetarget widget, using the model file from the Object Editor field of type t fromthe ability, unit or buff (works with all these types, though the name statesit's ability-only function) with raw code abilityId. If this field has more thanone effect inside, it will only create the first effect stated in the field,ignoring all others.

## Declaration

```jass
native AddSpellEffectTargetById takes integer abilityId, effecttype t, widget targetWidget, string attachPoint returns effect
```

## Parameters
abilityId `integer`
: 

t `effecttype`
: 

targetWidget `widget`
: 

attachPoint `string`
: 
