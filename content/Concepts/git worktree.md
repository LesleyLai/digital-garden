---
created: 2024-05-16
modified: 2024-05-16
parent:
  - "[[Git|Git]]"
publish: true
tags:
  - tools/git/commands
---

`git worktree` let us to work on more than one branch at a time. It provides a new working directory for each branch:

```sh
git worktree add -b bugfix ../project-branches/bugfix
```