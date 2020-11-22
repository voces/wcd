---
title: IsUnitType
types:
  - boolean
  - unit
  - unittype
---

# IsUnitType

## Declaration

```jass
constant native IsUnitType takes unit whichUnit, unittype whichUnitType returns boolean
```

## Parameters
whichUnit `unit`
: 

whichUnitType `unittype`
: 

## Notes 
This native returns a boolean, which when typecasted to integer mightbe greater than 1. It's probably implemented via a bitset.
In past patches this native bugged when used in conditionfuncs.The fix back then was to compare with true (`==true`).I cannot reproduce the faulty behaviour in patch 1.27 so this is only a note.
