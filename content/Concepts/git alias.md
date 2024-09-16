---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[Git|Git]]"
publish: true
tags:
  - "#tools/git"
  - "#cheatsheet"
---

Git Aliases can be set as following:
```shell
git config --global alias.unstage 'reset HEAD --'
```

This makes the following two commands equivalent:

```shell
$ git unstage fileA
$ git reset HEAD -- fileA
```

To use a non-git command, prefix it with a `!`:
```shell
git config --global alias.visual '!gitk'
```

To list all aliases, we can use
```shell
git config --get-regexp ^alias
```

## Some aliases that I use

| alias            | command                                        |
| ---------------- | ---------------------------------------------- |
| `unstage <file>` | `reset HEAD -- <file>`                         |
| `amend`          | `git stage -A && git commit --amend --no-edit` |
| `force-push`     | `git push --force-with-lease`                  |