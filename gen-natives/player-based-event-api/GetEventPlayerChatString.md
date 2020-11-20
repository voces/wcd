---
title: GetEventPlayerChatString
types:
  - string
---

# GetEventPlayerChatString
Returns the actual string they typed in ( same as what you registered forif you required exact match )

## Declaration

```
constant native GetEventPlayerChatString takes nothing returns string
```

## Bugs 
This function only returns`""`when called in response to`EVENT_PLAYER_CHAT`.