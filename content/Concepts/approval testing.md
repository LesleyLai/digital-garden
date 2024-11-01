---
aliases:
  - snapshot testing
  - "#computing/testing/approval"
created: 2024-04-18
modified: 2024-11-01
parent:
  - "[[Software Testing|Software Testing]]"
publish: true
tags:
  - computing/testing/approval
---
**Approval test**, also called **snapshot test**, takes a snapshot of the results and confirms that they have not changed. Compared to normal assertion-based unit tests, approval testing frees programmers from constructing complex objects by hand.

Of course, the downside is that if the original snapshot is wrong and not detected by the programmer, approval tests will only confirm the subsequent wrong results. Additionally, there are also people complaining that their colleagues blindly updating snapshots without verifying whether the new snapshot is correct.

## Libraries
- [ApprovalTests.cpp](https://github.com/approvals/ApprovalTests.cpp/tree/master)
- [[./Snapshot Test in Rust|Snapshot Test in Rust]]
- JavaScript's Jest framework is able to perform snapshot testing

## Applications
This kind of test is commonly used in programming language and compiler development since the result can be extremely time-consuming to construct by hand.
- [Cram](https://bitheap.org/cram/)
- [LLVM lit](https://llvm.org/docs/CommandGuide/lit.html)
- [turnt](https://pypi.org/project/turnt/)

A variation of the approval test performs image comparison using algorithms like the [[FLIP algorithm|FLIP]], which is used to test rendering quality.
