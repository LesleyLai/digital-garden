---
parent:
  - "[[Git internals|Git internals]]"
tags:
  - tools/git/internals
aliases:
  - .git directory
created: 2024-03-29
modified: 2024-03-29
publish: true
---
# `.git` directory
At bare minimum, the `.git` directory need to contain the following:
```
.git/
├── objects/
├── refs/
├── HEAD
```

- `objects/`: contains [[./Git objects|Git objects]]
- `refs/`: contains [[Git references|Git references]]
- `HEAD`: contains a reference to the current [[Git HEAD|HEAD]]

## Some additional data
```
.git/
├── config
├── objects/
    ├── pack/
├── hooks/
├── info/
```
- `config`: per-repository configurations
- `objects/pack`: for storing objects in optimized (packed) format
- `info/`: additional metadata
## After a commit
After a single commit, the `.git` folder will have more information:
```
.git/
├── COMMIT_EDITMSG
├── index
├── logs/
├── refs/
    ├── head/main
```
- `COMMIT_EDITMSG`: If you don't use `-m`, this file is what git open the editor for
- `index`
- `logs/`
- `refs/heads/main`: record the commit at top of `main` branch