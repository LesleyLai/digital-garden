---
aliases:
  - color model
  - color space
created: 2023-05-30
modified: 2024-05-29
publish: true
tags:
  - color
---

# Color Space and Color Model
There are a lot of ways to specify colors. In general, we want to specify colors from a **color space** using a **color model**.

**Color space** decides the range of color to draw from while **color model** decides how the color is represented.

For example, the [[./RGB color|RGB color model]] can used to represent colors in different color spaces such as [[sRGB|sRGB]].

Color spaces can be visualized by [[./Chromaticity|chromaticity diagram]]. It is usually draw from the [[./tristimulus theory of color|tristimulus theory of color]].

There are a lot of color models besides RGB, such as
-   [[HSV color model|HSV]]
    -   hue, saturation, value
    -   more intuitive than RGB/CMYK
-   [[SML color model|SML]]
    - physiological model
    -   corresponds to stimulus of cones
    -   not practical for most color work
-   [[./XYZ color space|XYZ]]
    - perceptually-driven model
    -   Y captures _luminance_ (intensity)
    -   X, Z capture chromaticity (color)
    -   related to, but different from, SML
-   Lab - "perceptually uniform" modification of XYZ