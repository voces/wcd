---
title: AddSpecialEffectTarget
types:
  - effect
  - string
  - widget
---

# AddSpecialEffectTarget
Attaches the special effect to the attachment point attachPointName of thetarget widget, using the model file with a path modelName.Upon creation, the effect will play its "birth" animation followed by its "stand" animation (once the birth animation has finished). If the model does not have animations, it will show up the way it appears by default. The effect will last indefinitely unless it is destroyed, even if the model seems to disappear. To destroy an effect, see DestroyEffect.

## Declaration

```jass
native AddSpecialEffectTarget takes string modelName, widget targetWidget, string attachPointName returns effect
```

## Parameters
`string modelName`{!language=jass}
: The path of the model. Use double backslashes when specifyinga directory, rather than single backslashes. See AddSpecialEffect for an example.

`widget targetWidget`{!language=jass}
: The widget to attach the effect to.

`string attachPointName`{!language=jass}
: The attachment point of the widget where the effect willbe placed. Attachment points are points in a model that can be referenced to asareas for effects to be attached, whether it be from a spell or this function.A list of common attachment points in in-game Warcraft 3 models can be seen below.If the attachment point does not exist, it will attach the effect to the model's origin.

## Notes 
Strings such as "Large" and "Medium" affect effects' sizes on the widgetit is attached to. You can add or remove these by going to the object editor andmodifying "Art - Required Animation Names - Attachments" for a particular unityou are attaching effects to.
To create an effect only visible to one player see<https://www.hiveworkshop.com/threads/gs.300430/#post-3209073>
