---
layout: default
parent: Frames
permalink: /frames/FDF
---

# FDF

An FDF (**F**rame **D**efinition **F**ile) primarily defines complex frames that are built from a set of primitive frames. An FDF can secondarily define StringLists, which used used for localization.

## Syntax

A single FDF can define many frames and/or many StringLists. FDFs can also import other FDFs, allowing for extending existing complex frames. All statements must end with commas; blocks are not statements and do not require commas.

### IncludeFile

#### Syntax:
```
IncludeFile "<path_to_file">,
```

#### Example:
```
IncludeFile "UI\FrameDef\UI\EscMenuTemplates.fdf",
```

Paths are not case sensitive.

### StringList

#### Syntax:
```
StringList {
    <key1> "<value1>",
    <key2> "<value2>",
}
```

#### Example:
```
StringList {
    minimap_signal_title "Minimap Signal",
    minimap_signal_description "This option will allow you to send a minimap signal notification to all your allies.

Targeting a position on the minimap or in the game world will display a signal at that location on your allies' minimaps.

Alternatively, you can hold down Alt and left-click on the minimap or game world to perform the same action",
}
```

### Frame

#### Syntax:
```
Frame "<type>" "<name>" [INHERITS [WITHCHILDREN] "<base_name>"] {
  <action1>, <arg1>,
  Frame "BACKDROP" "FrameNameB" {
    <action2>, <arg1>, <arg2>,
 }
}
```

#### Example:
```
Frame "FRAME" "MyButtonF" {
    Width 0.1,
    Height 0.1,
    LayerStyle "IGNORETRACKEVENTS",
    Frame "BUTTON" "MyButton1" INHERITS WITHCHILDREN "EscMenuButtonTemplate" {
        SetPoint TOP, "MyButtonF", TOP, 0, 0,
    }
    Frame "BUTTON" "MyButton2" INHERITS WITHCHILDREN "EscMenuButtonTemplate" {
        SetPoint TOP, "MyButton1", BOTTOM, 0, 0,      
    }
}
```

Frames can be deeply nested, but only the main frame can be created by natives:
```
call BlzCreateFrame("MyButtonF", BlzGetOriginFrame(ORIGIN_FRAME_GAME_UI, 0), 0, 0)
```
