---
created: 2024-07-29
modified: 2024-07-29
parent:
  - "[[./confounding variable|confounding variables]]"
publish: true
tags:
  - statistics
---

**Simpson’s paradox** is a phenomenon in which a trend appears in several groups of data but disappears or reverses when the groups are combined. It is caused by [[./confounding variable|confounding variables]].

## Example
A famous [study](http://rinobellocco.altervista.org/wp/wp-content/uploads/2017/courses/other/modena/ignoringacovariate.appleton.amerstat.1996.pdf) shows Simpson’s Paradox in analyzing the effect of smoking on mortality rates in women. The combined data seems to suggest that smoker has *less* mortality than non-smokers.

![[../assets/Simpsons Paradox 1.png|Simpsons Paradox 1.png]]
When we split the sample by age groups, the trend reversed, and we see that smokers have higher mortality rates for virtually every age group!

![[../assets/Simpsons Paradox 2.png|Simpsons Paradox 2.png]]

The confounding variables here is the age. As there are **more young women who smoked** than older women, and as younger women are expected to live longer than older women, adding all the groups together makes smoking **appear** to be beneficial.

## Related
- [[./aliasing|aliasing]]