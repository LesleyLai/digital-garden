---
aliases:
  - Covariant arrays
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - computing/java
  - computing/c-sharp
  - computing/PL/covariance
title: Covariant Arrays in Java and C#
---
In Java and C#, arrays are [[./covariance and contravariance|covariant]].

As a result, the following code compiles but will throw an exception at runtime:
```java
Object[] stuff = new Integer[1];
stuff[0] = "not an int!"; // throw ArrayStoreException
```

In Java 1.0 era, covariant array was important since Java didn't have generic at that time.

The "Effective Java" book recommends people to use `ArrayList` instead of raw array to avoid this behavior.

Covariant array is widely considered a programming language design mistake. The best practice nowadays is that [[only immutable data structures should be made covariant|only immutable data structures should be made covariant]].