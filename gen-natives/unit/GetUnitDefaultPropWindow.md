---
title: GetUnitDefaultPropWindow
types:
  - real
  - unit
---

# GetUnitDefaultPropWindow
Returns a unit's default propulsion window angle in degrees.

## Declaration

```jass
native GetUnitDefaultPropWindow takes unit whichUnit returns real
```

## Parameters
whichUnit `unit`
: The unit of which to return the default prop window

## Notes 
This native is the odd case in the asymmetric prop window API, since theother prop window natives use radians. Therefore, to reset a unit's prop windowyou need the explicit conversion, i.e.`SetUnitPropWindow(u, GetUnitDefaultPropWindow(u) * bj_DEGTORAD)`
