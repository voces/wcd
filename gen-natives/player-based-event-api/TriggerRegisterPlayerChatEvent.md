---
title: TriggerRegisterPlayerChatEvent
types:
  - boolean
  - event
  - player
  - string
  - trigger
---

# TriggerRegisterPlayerChatEvent
Registers a chat event.

## Declaration

```jass
native TriggerRegisterPlayerChatEvent takes trigger whichTrigger, player whichPlayer, string chatMessageToDetect, boolean exactMatchOnly returns event
```

## Parameters
`trigger whichTrigger`{!language=jass}
: The trigger to which register the event.

`player whichPlayer`{!language=jass}
: The player on which chat-messages to react to.

`string chatMessageToDetect`{!language=jass}
: The message to react to. Pass`""`to react to any message.

`boolean exactMatchOnly`{!language=jass}
: `true`if only the exact string in`chatMessageToDetect`should fire the trigger.`false`will trigger if the`chatMessageToDetect`appearsanywhere in the entered string.

## Notes 
The callback event will not have the`EVENT_PLAYER_CHAT`eventid,instead`ConvertPlayerEvent(96)`which has no attached global in common.j
