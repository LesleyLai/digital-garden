---
tags:
  - learning/NoteTaking/softwares
  - opinion/softwareReview
aliases:
  - 思源
link: https://b3log.org/siyuan/
publish: true
created: 2024-04-01
modified: 2024-04-01
---
# SiYuan

An note-taking tool that shares a lot of looks and feels of [[./Obsidian MOC|Obsidian]]. 

Some major differences:
- based on content blocks rather than files
- WYSIWYG editor

SiYuan has an unusual multi-process architecture:
> The architecture of SiYuan, as I’ve learned from chatting with the author, is based on a Go-lang “kernel” process, which is responsible for parsing the markdown files, and indexing them. The electron app communicates with the “kernel” process via WebSocket and is used solely for input and display, using an HTML-based WYSIWYG editor they started working on a few years ago for their forum software. [^1]

## My Evaluation Compare to Obsidian
### Pros
- Open Source

### Cons
- "Content-block" based model means it is not so easy to migrate data

[^1]: [Is Obsidian a Fork of SiYuan? - Help - Obsidian Forum](https://forum.obsidian.md/t/is-obsidian-a-fork-of-siyuan/12157/3)