---
parent:
  - "[[Git plumbing commands|Git plumbing commands]]"
publish: true
tags:
  - tools/git/internals
  - tools/git/commands/plumbing
created: 2024-03-29
modified: 2024-03-29
---
`git hash-object` is used to compute the SHA hash of a Git object
```bash
$ echo "hello world" > test.txt

$ git hash-object test.txt
3b18e512dba79e4c8300dd08aeb37f8e728b8dad
```

When using with `-w`, it also writes the object to `.git/objects`
```bash
$ git hash-object -w test.txt

# Verify that the file was written to .git/objects
$ file .git/objects/3b/18e512dba79e4c8300dd08aeb37f8e728b8dad
.git/objects/3b/18e512dba79e4c8300dd08aeb37f8e728b8dad: zlib compressed data
```

## Related
- [[./git cat-file|git cat-file]]: view content of a git object