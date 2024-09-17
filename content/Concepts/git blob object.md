---
parent:
  - "[[Git objects|Git objects]]"
publish: true
tags:
  - tools/git/internals
created: 2024-03-29
modified: 2024-03-29
---
# Git Blob Object
The format of a blob object looks like the following:
```
blob <size>\0<content>
```