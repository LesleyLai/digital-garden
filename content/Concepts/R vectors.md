---
parent:
  - "[[R language|R]]"
tags:
  - computing/R
title: R Vectors
created: 2024-09-20
modified: 2024-09-24
publish: true
---
Vectors in R can be created as the following:
```r
v <- c(1, 4, 9, 16, 25)
```

## Generate Vectors
Generate consecutive integers using the `:` notation
```r
1:10 # a vector from 1 to 10
```
Generate regular sequence of numbers
```r
seq(from = 1, to = 9, by = 2) # count up by 2
```
Repeat an element for x times
```r
rep(42, 5) # repeat 42 for 5 times
```
## Extract Elements
We can get the elements of a vector with the index operator (note that R indices start from 1)
```r
v[1] # 1
```
We can also extract multiple elements at once by passing a vector of indices to the index operator
```r
v[c(1, 3)] # 1 9
```
Or we can extract a range of values using the `:` notation.
```r
v[2:4] # 4 9 16
```

## Vectorized Operations
Most of the R operations are vectorized so we can operate on all the elements at once:
```r
v * 5 - 3 # 2  17  42  77 122
```

## Filter
We can filter a vector by passing a condition to the index operator
```r
v[v %% 2 == 0]
```
(Note that this works because `v %% 2 == 0` returns a vector of `TRUE` and `FALSE`)