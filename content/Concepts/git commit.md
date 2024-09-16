---
created: 2024-04-21
modified: 2024-04-22
parent:
  - "[[Git|Git]]"
publish: true
tags:
  - "#tools/git/commands"
---

# Git Commit
One `git commit` command can be seen as a sequence of [[./git write-tree|git write-tree]], [[git commit-tree|git commit-tree]], and `git update-ref`.

```sh
$ git write-tree # record the contents of the index in a tree
0563f77d884e4f79ce95117e2d686d7d6e282887

$ echo "Initial commit" | git commit-tree 0563f77
5f1bc85745dcccce6121494fdd37658cb4ad441f

# Update ref pointed by HEAD
$ git update-ref refs/heads/head 5f1bc857
```


## References
- [How trees are made | Git from the Bottom Up](https://jwiegley.github.io/git-from-the-bottom-up/1-Repository/4-how-trees-are-made.html)