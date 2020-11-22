---
title: GetObjectName
types:
  - integer
  - string
async: true
pure: true
---

# GetObjectName
Looks up the "name" field for any object (unit, item, ability)

## Declaration

```jass
constant native GetObjectName takes integer objectId returns string
```

## Parameters
`integer objectId`{!language=jass}
: 

## Bugs 
Do not use this in a global initialisation as it crashes the game there.
