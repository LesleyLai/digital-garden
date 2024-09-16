---
created: 2024-05-16
modified: 2024-05-17
parent:
  - "[[Git|Git]]"
publish: true
tags:
  - tools/git/commands
---

`git maintenance start`
Adds the following to `.git/config`
```
[maintenance]
  auto = false
  strategy = incremental
```
A crone job to do maintenance job such as prefetch. Make a lot's of things faster