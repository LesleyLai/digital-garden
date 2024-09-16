---
parent:
  - "[[Git plumbing commands|Git plumbing commands]]"
publish: true
tags:
  - tools/git/commands/plumbing
---

# git ls-tree
The `git ls-tree` command is used to inspect a [[./git tree object|tree object]].

For a directory structure like this:
```
  your_repo/
    - file1
    - dir1/
      - file_in_dir_1
      - file_in_dir_2
    - dir2/
      - file_in_dir_3
```

The output of `git ls-tree` would look like this:
```bash
  $ git ls-tree <tree_sha>
  040000 tree <tree_sha_1>    dir1
  040000 tree <tree_sha_2>    dir2
  100644 blob <blob_sha_1>    file1
```