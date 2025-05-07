---
parent:
  - "[[Writings/index|index]]"
tags:
  - writing
  - opinion
created: 2025-05-07
modified: 2025-05-07
publish: true
---
Today in social media, I saw someone post something along the line of "why people say that index out-of-bound and dangling pointers are big problems? It is easy for me to fix." We experienced programmers know how to use debuggers, and fixing those problem _usually_ are not a big deal.

However, since these problems happen at runtime, they can easily go undetected during testing. If the bug happen on someone else's machine or in a server, it is much harder for us to spin a debugger for it. The characteristic of [[undefined behavior|undefined behavior]] also means that the problem may manifest somewhere far away from the bug, or the program will just silently run with wrong result.