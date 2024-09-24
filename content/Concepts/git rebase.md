---
created: 2024-04-15
modified: 2024-04-15
parent:
  - "[[Git|Git]]"
publish: true
tags:
  - tools/git/commands
---

# Git Rebase
Each commit (except the initial commit) in git has a parent commit, and we can call that one the base commit. And **Rebasing** can be view as move a commit to a different base. Note that when rebasing, actually the whole set of commits under rebase will get recreated.
![[../assets/git-rebase.png|400]]