---
created: 2024-03-21
modified: 2024-04-18
parent:
  - "[[Git internals|Git internals]]"
publish: true
tags:
  - tools/git/internals
---
There are three kinds of git objects: blob, tree, and commit.
- [[./git blob object|Blob]]
  - analogous to a *file*
  - store file data
  - only store content of a file, not its name or permission (which is in tree)
- [[./git tree object|Tree]]
  - analogous to a *folder*
  - store directory structures
- [[git commits object|Commit]]
  - store commit data

All Git objects are identified by a [[SHA-1|SHA-1]] hash, also known as the "object hash". Git calculate object hash before compression. This is because there may be multiple output of the compression algorithm with the same input depending on settings

Git objects are stored in in the `.git/objects` directory with [[./git puts objects into directories named with the first two characters of the hash|with path derived from its hash]].

We can inspect the content of a git object by [[./git cat-file|git cat-file]]
## Related
- [[./git cat-file|git cat-file]]: inspect the content of an git object file
- [[./git hash-object|git hash-object]]: compute the git object hash of a file

## References
- [Git - Git Objects](https://git-scm.com/book/en/v2/Git-Internals-Git-Objects)