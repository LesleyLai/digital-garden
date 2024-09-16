---
parent:
  - "[[Git objects|Git objects]]"
publish: true
tags:
  - tools/git/internals
---

# Git Blob Object
The format of a blob object looks like the following:
```
blob <size>\0<content>
```