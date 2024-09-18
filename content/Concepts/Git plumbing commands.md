---
aliases:
  - tools/git/commands/plumbing
created: 2023-05-30
modified: 2024-03-21
parent:
  - "[[Git internals|Git internals]]"
publish: true
tags:
  - "#tools/git/internals"
---

**Plumbings** command are a low level commands which give access to the inner workings of Git (in contrast to more user friendly "*porcelain*" commands)

## manipulators
- [[./git hash-object|git hash-object]]: compute the SHA hash of a Git object. When used with `-w`, also write the object into `.git/objects`
- [[./git write-tree|git write-tree]]: creates a tree object from staging area
- [[git commit-tree|git commit-tree]]: creates a commit object from a tree object and a message

## interrogators
- [[./git cat-file|git cat-file]]: view an git object file
- [[./git ls-tree|git ls-tree]]: inspect a tree object