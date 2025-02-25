---
created: 2024-02-18
modified: 2025-02-25
parent:
  - "[[Git|Git]]"
publish: true
tags:
  - tools/git
  - cheatsheet
---
## Find the Location of Global Git Configuration File
```sh
git config --list --global --show-origin
```

## Popular Configurations
### Better Branch Listing
```shell
git config --global column.ui auto
git config --global branch.sort -committerdate
```

### Default to `main` rather than `master`
`init.defaultBranch main`

### Better Diff Algorithm
```shell
git config --global diff.algorithm histogram
```
### Better Git Conflict with Three-way Diff
`merge.conflictstyle zdiff3`

### Simpler Push
```shell
git config --global push.default simple # (default since 2.0)
git config --global push.autoSetupRemote true
git config --global push.followTags true
```

### Better Fetching
```shell
git config --global fetch.prune true
git config --global fetch.pruneTags true
git config --global fetch.all true
```
### Separate Git Configs for Personal and Work
```
[includeIf "gitdir:~/projects/work/"]
path = "~/projects/work/.gitconfig"
```
### Better Submodules
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
- [How Core Git Developers Configure Git](https://blog.gitbutler.com/how-git-core-devs-configure-git/)