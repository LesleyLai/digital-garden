---
parent:
  - "[[data visualization plots|data visualization plots]]"
tags:
  - statisticsAndDataScience/dataviz
aliases:
  - box plot
created: 2024-09-18
modified: 2024-09-23
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

## Intuition

Box plot can be counter-intuitive. Keep in mind that in a box plot, longer box or whisker segments do _not_ indicate larger quantities; all four segments actually represent the _same_ amount of data. Also, counterintuitively, shorter segments in a box plot signify _higher densities_ of values.

![[../box-plot-vs-histogram-w-callouts.webp|box-plot-vs-histogram-w-callouts.webp]]

Critics argue that box plots are not intuitive and can overlook important details, and encourage the use of alternatives such as [[./strip plot|strip plot]] [^1]

[^1]: [I’ve Stopped Using Box Plots. Should You? | Nightingale](https://nightingaledvs.com/ive-stopped-using-box-plots-should-you/)