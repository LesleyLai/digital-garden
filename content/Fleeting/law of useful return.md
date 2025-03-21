---
parent:
  - "[[API design|API design]]"
tags:
  - computing/API_design
created: 2025-03-20
modified: 2025-03-20
publish: true
---
"Law of useful return" is a programming principle coined by [[Alexander Stepanov|Alexander Stepanov]] [^1]:

> [!quote] If you’ve already done the work to get some useful result, don’t throw it away. Return it to the caller

Stepanov uses the example of division and remainder, noting that although most processors have a single instruction to compute both, many programming languages provide separate operations instead.

This law is particularly relevant in API design, especially when the designer cannot predict how users will utilize the API. In the C++ community, it is sometimes cited as a justification for certain design choices (e.g., [[../Concepts/C++ ranges|C++ ranges]] adhere to this principle) or as a critique of APIs that do not follow it [^2].


[^1]: [[From Mathematics to Generic Programming|From Mathematics to Generic Programming]], 4.6
[^2]: [malloc() and free() are a bad API](https://www.foonathan.net/2022/08/malloc-interface/)