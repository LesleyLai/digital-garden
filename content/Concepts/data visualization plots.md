---
aliases:
  - "#statistics/dataviz"
created: 2024-08-07
modified: 2024-09-23
parent:
  - "[[statistics|statistics]]"
  - "[[data visualization|data visualization]]"
publish: true
tags:
  - statistics/dataviz
---
## Types
- [[bar plot|bar plot]]
- [[histogram|histogram]]
- [[./boxplot|boxplot]] and [[./strip plot|strip plot]]
- [[scatter plot|scatter plot]]

## When to Use what

| Variables                      | Plot                                                                                                                                                             | Numerical Summary Format                       |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 1 Qualitative                  | Simple Barplot<br>![[../assets/simple bar plot.png|simple bar plot.png]]                                                                                                                       | Frequency table<br><br>Most popular category   |
| 2 Qualitative                  | Double barplot![[../assets/double bar plot.png|double bar plot.png]]                                                                                                                           | Contingency table<br><br>Most popular category |
| 1 Quantitative                 | histogram & boxplot<br>![[../assets/simple histogram.png|simple histogram.png]]<br>![[../assets/simple box plot.png|simple box plot.png]]                                                                                     | Mean, median, SD, IQR, range                   |
| 2 Quantitative                 | Simple scatterplot<br>![[../assets/simple scatterplot.png|simple scatterplot.png]]                                                                                                                | Correlation coefficient<br><br>Linear model    |
| 1 Qualitative + 1 Quantitative | Comparative [[./boxplot|boxplot]] & [[./strip plot|strip plot]] & Filtered histogram![[../assets/comparative boxplot.jpeg|comparative boxplot.jpeg]]<br>![[../assets/jittered-strip-plot.webp\|300]]<br>![[../assets/filtered histogram.jpeg|filtered histogram.jpeg]] |                                                |
| 2 Quantitative+                | Filtered scatterplot<br>![[../assets/filtered scatterplot.jpeg|filtered scatterplot.jpeg]]                                                                                                           |                                                |

## Further Reading
- [The R Graph Gallery – Help and inspiration for R charts](https://r-graph-gallery.com/)