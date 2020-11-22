---
title: CreateImage
types:
  - image
  - integer
  - real
  - string
---

# CreateImage
This returns a new image, the first ID given being 0 and then counting upwards (0, 1, 2, 3, ...).

## Declaration

```jass
native CreateImage takes string file, real sizeX, real sizeY, real sizeZ, real posX, real posY, real posZ, real originX, real originY, real originZ, integer imageType returns image
```

## Parameters
`string file`{!language=jass}
: The path to the image. The image itself should have its border alpha-ed outcompletely. If an invalid path is specified CreateImage returns image(-1).

`real sizeX`{!language=jass}
: The x-dimensions of the image.

`real sizeY`{!language=jass}
: The y-dimensions of the image.

`real sizeZ`{!language=jass}
: The z-dimensions of the image.

`real posX`{!language=jass}
: The x-cooridnate of where to create the image. This is the bottom left corner of the image.

`real posY`{!language=jass}
: The y-cooridnate of where to create the image. This is the bottom left corner of the image.

`real posZ`{!language=jass}
: The z-cooridnate of where to create the image.

`real originX`{!language=jass}
: Moves the origin (bottom left corner) of the image from posX in negative X-direction.

`real originY`{!language=jass}
: Moves the origin (bottom left corner) of the image from posY in negative Y-direction.

`real originZ`{!language=jass}
: Moves the origin (bottom left corner) of the image from posZ in negative Z-direction.

`integer imageType`{!language=jass}
: Working values range from 1 to 4 (4 and 1 included).Using 0 causes CreateImage to return image(-1). Every other value will simplycause WC3 to not display the image.imageTypes also influence the order in which images are drawn above one another:| Value | Name           | Description ||-------|----------------|-------------|| 1     | Selection      | Drawn above all other imageTypes. || 2     | Indicator      | Drawn above imageType 4, but below 1 and 3. || 3     | Occlusion Mask | Drawn above imageType 4 and 2 and below imageType 1. || 4     | Ubersplat      | Drawn below every other type. Images of this type are additionally affected by time of day and the fog of war (only for tinting). |Multiple images with the same type are drawn in their order of creation,meaning that the image created first is drawn below the image created after.
