---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[./Git objects|Git objects]]"
publish: true
tags:
  - "#tools/git/internals"
---

# Why Git put objects into directories named with the first two characters of a hash
All [[./Git objects|Git objects]] are stored in `.git/objects`, and opening this folder we will notice file structure like this
```txt
.git/objects
├─00
├─01
...
```

The path for the object with the hash `e88f7a929cd70b0274c4ea33b209c97fa845fdbc` would be:
```bash
  ./git/objects/e8/8f7a929cd70b0274c4ea33b209c97fa845fdbc
```

Why? The rationale lies in *efficiency*. Certain file systems are not optimized for handling a large number of files within the same directory.