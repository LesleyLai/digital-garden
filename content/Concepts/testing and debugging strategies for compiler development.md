---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#computing/compiler"
  - computing/testing
---

Debugging a compiler that output incorrect program is hard.

[[How we make the Futhark compiler crash|futhark developers]] use the strategy of type checking their [[IR|IR]] after each pass to help debugging their compiler. They enabled type checking by default. This strategy forces them to think carefully about the semantics of their IR, though it does have a small (10%) performance overhead.