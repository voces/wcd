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

```
native TriggerRegisterPlayerChatEvent takes trigger whichTrigger, player whichPlayer, string chatMessageToDetect, boolean exactMatchOnly returns event
```

## Parameters
<dl>
  <dt>whichTrigger `trigger`</dt>
  <dd>The trigger to which register the event.</dd>

  <dt>whichPlayer `player`</dt>
  <dd>The player on which chat-messages to react to.</dd>

  <dt>chatMessageToDetect `string`</dt>
  <dd>The message to react to. Pass`""`to react to any message.</dd>

  <dt>exactMatchOnly `boolean`</dt>
  <dd>`true`if only the exact string in`chatMessageToDetect`should fire the trigger.`false`will trigger if the`chatMessageToDetect`appearsanywhere in the entered string.</dd>
</dl>

## Notes 
The callback event will not have the`EVENT_PLAYER_CHAT`eventid,instead`ConvertPlayerEvent(96)`which has no attached global in common.j