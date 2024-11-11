---
parent:
  - "[[numerical summaries of data|numerical summaries of data]]"
tags:
  - math/statistics
created: 2024-08-28
modified: 2024-09-25
aliases:
  - RMS Error
publish: true
---
The **root mean square error** (**RMS Error**), or **root mean square deviation**, is a measure of the differences between predicted values and observed values.

$$
\text{RMS}_{\text{error}} = \sqrt{ \frac{\sum_{i=1}^n e_i^2}{n} }
$$
where $e_i$ are the [[residual (statistics)|residuals]] (difference between the observed value and the estimated value) for each data point.

> [!hint] 
> Similar to [[./variance|variance]], RMS error use the mean of the squared residuals. Using just the mean of the residuals in linear regression would always result in zero.

> [!example]+ Given data of size 2, where the 2 values have residuals of 9 and 6, what is the population RMS error?
>$$
>\text{RMS error} = \sqrt{\frac{e_1^2 + e_2^2}{2}} = \sqrt{\frac{9^2 + 6^2}{2}} \approx 7.65
>$$

## RMS Error in Linear Regression
In [[linear regression|linear regression]], a quick formula to calculate the RMS Error is
$$
\text{RMS}_{\text{error}} = \sqrt{ 1-r^2 } \ \text{SD}_{y}
$$
where $r$ is the [[./Pearson correlation coefficient|correlation coefficient]].

We can see that with perfect correlation (i.e. $r = \pm1$), RMS Error is 0. And when $r = 0$, RMS Error is the standard deviation of the dependent variable.