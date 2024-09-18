---
created: 2024-02-18
modified: 2024-03-14
parent:
  - "[[Git|Git]]"
publish: true
tags:
  - tools/git
  - cheatsheet
---

## Default to `main` rather than `master`
`init.defaultBranch main`
## Better Git Conflict with Three-way Diff
`merge.conflictstyle zdiff3`

## Separate Git Configs for Personal and Work
```
[includeIf "gitdir:~/projects/work/"]
path = "~/projects/work/.gitconfig"
```

## Better Submodules
```
status.submoduleSummary true
diff.submodule log
submodule.recurse true
```

### Use Another Diff Tool
`diff.tool difftastic`

### ReReRe
See: [[git rerere|git rerere]]
REuse REcorded REsolution
```
git config --global rerere.enabled true
```
"Remember this git conflict, and remember how I fixed it"

## References
- [Popular git config options](https://jvns.ca/blog/2024/02/16/popular-git-config-options)