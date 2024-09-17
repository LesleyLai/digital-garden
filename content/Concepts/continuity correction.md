---
parent:
  - "[[./normal approximation|approximate a discrete distribution by the Normal distribution]]"
tags:
  - statisticsAndDataScience
publish: true
created: 2024-09-15
modified: 2024-09-17
---
# Continuity Correction

A **continuity correction** is an adjustment made when a discrete [[./random variable|random variable]] is approximated using a continuous random variable.

For example, to [[./normal approximation|approximate a discrete distribution by the Normal distribution]], we need to adjust the end points by 0.5. To work out whether to add or minus 0.5, draw a sketch of the histogram.
![[../without continuity correction.png|without continuity correction.png]]

![[../with continuity correction.png|with continuity correction.png]]