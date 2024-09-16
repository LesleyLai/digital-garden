---
Aliases:
  - python -m pip vs pip
  - Why we need `python -m pip`
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# Why We Need `python -m pip`
Running `python -m pip` (compare to running `pip` directly) can guarantee to run a version of `pip` with the same python version as the `python` command.

This is particular useful when there are multiple versions of Python installed on the system.

---
parent: [[./pip|pip]]
tags: #computer/python/pip #computer/ci