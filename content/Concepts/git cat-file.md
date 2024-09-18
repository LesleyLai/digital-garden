---
created: 2024-03-29
modified: 2024-03-29
parent:
  - "[[Git plumbing commands|Git plumbing commands]]"
publish: true
tags:
  - tools/git/internals
  - tools/git/commands/plumbing
---

## git cat-file
Use to view the type of an [[./Git objects|object]], its size, and its content.

It is often used with the `-p` flag ("pretty printing")

```bash
git cat-file -p <object hash>
```

Without it, you need to specify the type of an object like the following:
```
git cat-file tree <object hash>
```

## Other useful flags
Show types
```sh
git cat-file -t <object hash>
```