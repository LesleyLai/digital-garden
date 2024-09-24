---
tags:
  - computing/R
created: 2024-09-24
modified: 2024-09-24
publish: true
parent:
  - "[[R language|R]]"
---

A **data frame** in R can be understood as tables with rows/columns.

Some R libraries such as [[ggplot2|ggplot2]] only accept data frames, and we can use `data.frame` to convert a vector to a data frame:
```r
data.frame(v)
```

The code above creates a data frame with a single column, but we can also use `data.frame` to create data frames with multiple columns. For instance:
```r
month = 1:12
year = rep(2024, 12)
df = data.frame(month, year);
```

```txt
   month year
1      1 2024
2      2 2024
3      3 2024
4      4 2024
5      5 2024
6      6 2024
7      7 2024
8      8 2024
9      9 2024
10    10 2024
11    11 2024
12    12 2024
```
