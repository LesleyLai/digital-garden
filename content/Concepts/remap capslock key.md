---
parent:
  - "[[life hacks|life hacks]]"
tags:
  - life/tips
created: 2024-10-14
modified: 2024-10-14
publish: true
---
## Windows
Use PowerToys -> Keyboard Manager

## Linux
```shell
setxkbmap -option caps:escape
```
This will only make the change temporarily. It can be added to `~/.profile` to make permanent.

Another way is to use `dconf-editor`:
- select `org.gnome.desktop.input-sources`
- Change `xkb-options` to `['caps:escape']`