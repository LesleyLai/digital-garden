---
aliases:
  - SSA
created: 2023-05-30
modified: 2025-01-18
tags:
  - computing/compiler/optimizations
parent:
  - "[[compiler optimizations|compiler optimizations]]"
publish: true
---
A **static-single assignment** (**SSA**) form introduces a constraint to an [[IR|IR]] — all of its variables must be *assigned exactly once*. It makes various compiler optimizations and [[register allocation|register allocation]] easier to implement. [^1]

## Sub Notes
- [[phi node|phi node]] and [[basic block arguments|basic block arguments]] — two main ways to select values based on branches in an SSA representation

## Introduction
Consider the following pseudocode, which is not valid in SSA form:
```swift
func f(condition: bool) {
  var x = 0;
  if condition {
    x = 42;
  }
  return g(x);
}
```

To transform such a program into SSA form, we need to introduce a rule that
> [!info] whenever we have an assignment, we introduce a new version of a variable [^1]

With this rule, we have a program like the following:
```swift
func f(condition: bool) {
  let x_0 = 0;
  var x_1;
  if condition {
    x_1 = 42;
  }
  return g(x_1);
}
```

However, this transformation is incorrect. If `condition` is `false`, we do not want to use the value of `flags_1`, which remains uninitialized. Instead, we need to select the final value of `flags` based on which branch was taken. This is where the [[phi node|phi node]] comes into play: [^1]
```swift
func f(condition: bool) {
  let x_0 = 0;
  var x_1;
  if condition {
    x_1 = 42;
  }
  let flags_2 = phi(x_0, x_1); // phi node select value based on previous branch
  return g(x_2);
}
```

An alternative of phi node is to use [[basic block arguments|block arguments]], which also has several advantages and is employed by some newer IRs like [[MLIR|MLIR]]. [^2]


[^1]: [Understanding static single assignment forms](https://blog.yossarian.net/2020/10/23/Understanding-static-single-assignment-forms)
[^2]: [MLIR Rationale#Block Arguments vs PHI nodes](https://mlir.llvm.org/docs/Rationale/Rationale/#block-arguments-vs-phi-nodes)