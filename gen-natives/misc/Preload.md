---
title: Preload
types:
  - string
---

# Preload
Adds a string to the preload buffer.

## Declaration

```jass
native Preload takes string filename returns nothing
```

## Parameters
`string filename`{!language=jass}
: The string to be added to the buffer.Should probably not be named`filename`.

## Notes 
The data will be put into the file like this:````call Preload("<data here>")````So to put any executable code in the file you have to close the string and thenput your code onto a new line, like this:````call Preload("\")\n call your_stuff_here()")````
Also see the documentation for`Preloader`for more info on the generated files.
