---
created: 2024-05-09
modified: 2024-05-09
publish: true
tags:
  - "#computing/SystemAdmin"
---

## On Linux
Monitor file changes in a folder
```shell
inotifywait -mr -e create -e delete -e move <folder>
```