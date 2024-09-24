---
parent:
  - "[[Concepts/R language|Concepts/R language]]"
tags:
  - computing/R
created: 2024-09-17
modified: 2024-09-20
publish: true
---
To define a function in R
```r
circumference <- function(r){
    2*pi*r
}
```

If the function body only contain one statement, we can drop the curly braces
```r
sum_two_nums <- function(x, y) x + y
```

An R function automatically returns the last evaluated expression in the function body. We can use an `return()` statement for an early return:
```r
is_leap_year <- function(year) {
  if (year %% 400 == 0) {
    return(TRUE)
  }

  if (year %% 100 == 0) {
    return(FALSE)
  }

  if (year %% 4 == 0) {
    return(TRUE)
  }

  FALSE
}
```