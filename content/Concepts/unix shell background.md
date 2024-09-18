---
aliases:
  - bash background
  - Linux shell background
created: 2024-06-09
modified: 2024-06-09
parent:
  - "[[Unix|Unix]]"
publish: true
tags:
  - computer/unix/shell
---

# Unix Shell Background
## Launch a Process to Background
adds an ` & ` after the command

> [!note] The program will still write to stdout
> We can use `command > /dev/null 2>&1 & ` to suppress that (redirect stdout to `/dev/null` and stderr to stdout)

## To Foreground the Process
We can use `fg`. To see a list of jobs, we can use `jobs`

## To Background a Currently Running Process
Press `Ctrl + Z` to put the current process on sleep and return to shell, then use `bg` to resume the job in background.

## References
- [bash - Run a shell script and immediately background it, however keep the ability to inspect its output - Stack Overflow](https://stackoverflow.com/questions/44222883/run-a-shell-script-and-immediately-background-it-however-keep-the-ability-to-in)