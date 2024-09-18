---
parent:
  - "[[statistic graphics|statistic graphics]]"
tags:
  - statisticsAndDataScience/graphics
aliases:
  - box plot
created: 2024-09-18
modified: 2024-09-18
publish: true
---
**Boxplots** are used to represent quantitative data. Compare to [[histogram|histograms]], boxplots are effective for identifying [[outliers|outliers]] and **comparing distributions across subgroups**.

![[../comparative boxplot.jpeg|comparative boxplot.jpeg]]

A boxplots follow the 5-data summary:
- min (except outliers)
- first quartile (i.e. 25% [[percentile|percentile]])
- median
- third quartile (75% percentile)
- max (except outliers)

## Outliers
[[outliers|Outliers]] (data outsides the *fences*) are labeled in boxplot as dots. they are calculated using the [[interquartile range|interquartile range]] (IQR):  
**Lower Fence:** Q1 - 1.5 * IQR
**Upper Fence:** Q3 + 1.5 * IQR
Any data point below the lower fence or above the upper fence is considered an outlier.
![[../boxplot_IQR.png|boxplot_IQR.png]]