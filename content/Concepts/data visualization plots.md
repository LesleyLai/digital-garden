---
aliases:
  - "#statisticsAndDataScience/dataviz"
created: 2024-08-07
modified: 2024-09-23
parent:
  - "[[statistics|statistics]]"
publish: true
tags:
  - statisticsAndDataScience/dataviz
---
## Types
- [[bar plot|bar plot]]
- [[histogram|histogram]]
- [[./boxplot|boxplot]] and [[./strip plot|strip plot]]
- [[scatter plot|scatter plot]]

## When to Use what

| Variables                      | Plot                                                                                                                                                             | Numerical Summary Format                       |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 1 Qualitative                  | Simple Barplot<br>![[../simple bar plot.png|simple bar plot.png]]                                                                                                                       | Frequency table<br><br>Most popular category   |
| 2 Qualitative                  | Double barplot![[../double bar plot.png|double bar plot.png]]                                                                                                                           | Contingency table<br><br>Most popular category |
| 1 Quantitative                 | histogram & boxplot<br>![[../simple histogram.png|simple histogram.png]]<br>![[../simple box plot.png|simple box plot.png]]                                                                                     | Mean, median, SD, IQR, range                   |
| 2 Quantitative                 | Simple scatterplot<br>![[../simple scatterplot.png|simple scatterplot.png]]                                                                                                                | Correlation coefficient<br><br>Linear model    |
| 1 Qualitative + 1 Quantitative | Comparative [[./boxplot|boxplot]] & [[./strip plot|strip plot]] & Filtered histogram![[../comparative boxplot.jpeg|comparative boxplot.jpeg]]<br>![[../jittered-strip-plot.webp\|300]]<br>![[../filtered histogram.jpeg|filtered histogram.jpeg]] |                                                |
| 2 Quantitative+                | Filtered scatterplot<br>![[../filtered scatterplot.jpeg|filtered scatterplot.jpeg]]                                                                                                           |                                                |

## Further Reading
- [The R Graph Gallery – Help and inspiration for R charts](https://r-graph-gallery.com/)