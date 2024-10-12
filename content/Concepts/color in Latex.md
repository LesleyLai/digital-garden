---
parent:
  - "[[latex|latex]]"
tags:
  - tools/latex
created: 2024-10-12
modified: 2024-10-12
publish: true
---
Using color can significantly enhance the readability of mathematical equations in LaTeX. To apply color, use the `\color` command. For instance, `\color{blue} x^2` renders as $\color{blue} x^2$.

By default, the color will "leak" into subsequent parts of the equation. To limit the scope of a color, wrap the relevant part in curly braces. For example:
```latex
{\color{blue} x^2} + \color{red} y^2
```
This will display as ${\color{blue} x^2} + \color{red} y^2$, with the `+` symbol remaining uncolored.