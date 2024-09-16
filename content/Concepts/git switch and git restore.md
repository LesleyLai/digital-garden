---
aliases:
  - git switch
  - git restore
  - git-switch
  - git-restore
created: 2024-02-22
modified: 2024-03-14
parent:
  - "[[Git|Git]]"
publish: true
tags:
  - tools/git
---

# Git Switch and Git Restore

`git switch` and `git restore` are two relatively new git command to clarify different use cases of [[git-checkout|git-checkout]].

| new | old | functionality |
| ---- | ---- | ---- |
| `git switch b` | `git checkout b` | switch to a branch |
| `git restore -- file` | `git checkout -- file` | restore a file from another branch or source |

## Additional Cheatsheet
| new | old | functionality |
| ---- | ---- | ---- |
| `git switch -c new_branch` | `git checkout -b new_branch` | create and switch to a branch |

## Reference
- [What's the difference between 'git switch' and 'git checkout' \<branch\>? - Stack Overflow](https://stackoverflow.com/questions/57265785/whats-the-difference-between-git-switch-and-git-checkout-branch#57266005)