---
created: 2024-04-21
modified: 2024-04-23
parent:
  - "[[Git|Git]]"
publish: true
tags:
  - tools/git/commands
---

# `git reset`

## Mix Reset
By default, git performs a `--mixed` reset, which revert back index alone with `HEAD`. The main difference with `--soft` is that `reset --soft` won't revert the index.
```bash
$ git add foo.c  # add changes to the index as a new blob
$ git reset HEAD  # delete any changes staged in the index
$ git add foo.c  # made a mistake, add it back
```
## Soft Reset
The following two commands are equivalent
```bash
$ git reset --soft HEAD^     # backup HEAD to its parent,
                             # effectively ignoring the last commit
$ git update-ref HEAD HEAD^  # does the same thing, albeit manually
```

## Hard Reset
A hard reset (the `--hard` option) is very dangerous. It can do two different things.

First, if hard reset against `HEAD`, it will erase every changes inside the working tree. When the [[./Git index|staging area]] is empty, `git checkout` and hard reset do the same thing. Otherwise, it forces your working tree to match the index.

If hard reset against an earlier commit, it is the same as first do a soft reset to that commit and then perform a hard reset on `HEAD`. So the following two are equavalent:
```bash
$ git reset --hard HEAD~3  # Go back in time, throwing away changes

$ git reset --soft HEAD~3  # Set HEAD to point to an earlier commit
$ git reset --hard  # Wipe out differences in the working tree
```

> [!warning]
> With hard reset, it is possible to loss changes permanently in the work tree!

> [!tip]
> To be safe, we can always perform a `stash` before a hard reset
> ```bash
>$ git stash  # because it's always a good thing to do
$ git reset --hard HEAD~3  # go back in time
$ git reset --hard HEAD@{1}  # oops, that was a mistake, undo it!
$ git stash apply  # and bring back my working tree changes
> ```

## References
- [Reset | Git from the Bottom Up](https://jwiegley.github.io/git-from-the-bottom-up/3-Reset/1-to-reset-or-not-to-reset.html)