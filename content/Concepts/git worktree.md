---
created: 2024-05-16
modified: 2024-10-05
parent:
  - "[[Git|Git]]"
publish: true
tags:
  - tools/git/commands
---
`git worktree` let us to work on more than one branch at a time. It provides a new working directory for each branch.

## Create a Worktree
To create a worktree base on an existing branch, we do
```sh
git worktree add ../folder <branch-name>
```

To create a new branch and create a new worktree for it, we can do:
```sh
git worktree add ../folder -b <branch-name>
```

## List Worktrees
```sh
git worktree list
```

## Remove a Worktree
To remove a worktree, first we remove the folder and `prune` the worktree: [^1]
```shell
rm -r ../folder
git worktree prune
```
Then we can remove the branch for that worktree:
```sh
git branch -D <branch-name>
```


[^1]: [Why does git worktree add create a branch, and can I delete it? - Stack Overflow](https://stackoverflow.com/questions/39707402/why-does-git-worktree-add-create-a-branch-and-can-i-delete-it)