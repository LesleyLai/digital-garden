---
parent:
  - "[[Git objects|Git objects]]"
publish: true
tags:
  - tools/git/internals
created: 2024-03-29
modified: 2024-03-29
---
# Git Tree Object
The format of tree object looks like the following (after Zlib decompression):
```
  tree <size>\0
  <mode> <name>\0<20_byte_sha>
  <mode> <name>\0<20_byte_sha>
```
(note the actual file doesn't contain new line. The above snippet only contains newline for readability purpose.)

## Related
- [[./git ls-tree|git ls-tree]] - inspect a tree
- [[./git write-tree|git write-tree]] - create a tree object from the current staging area
- [[git commit-tree|git commit-tree]]: creates a [[git commits object|commit object]] from a tree object and a message