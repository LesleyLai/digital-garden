---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[Obsidian MOC|Obsidian MOC]]"
publish: true
tags:
  - "#tools/obsidian"
---

**Callout** in Obsidian adds different types of panels to a page. To adds a callout, use `[!info]` in a blockquote where `info` is the type of callout. Adding text in the type identifier adds a title.

If we adds a `+` or `-` after type identifier (like `[!info]+`), it becomes foldable.

## Supported Types
### Note
> [!note] This is the title of this note
> ```
> > [!note] Note
> > blah blah blah
> ```

### Abstract
Aliases: `summary`, `tldr`
> [!abstract]
> ```
> > [!abstract]
> > Lorem ipsum dolor sit amet
> ```

### Info
> [!info]- Info
> ```
> > [!info] Info
> > blah blah blah
> ```

### Todo
> [!todo]
> ```md
> [!todo]
> Lorem ipsum dolor sit amet
> ```

### Tip
Aliases: `hit`, `important`
> [!tip]
> ```
> > [!tip]
> > Lorem ipsum dolor sit amet
> ```

### Success
Aliases: `check`, `done`
> [!success]
> ```
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

### Question
Aliases: `help`, `faq`
> [!question]
> ```
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

### Warning
Aliases: `caution`, `attention`
> [!warning]
> ```
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

### Failure
Aliases: `fail`, `missing`
> [!failure]
> ```
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

### Danger
Aliases: `error`
> [!danger]
> ```
> > [!danger]
> > Lorem ipsum dolor sit amet
> ```

### Bug
> [!bug]
> ```
> > [!bug]
> > Lorem ipsum dolor sit amet
> ```

### Example
> [!example]
> ```
> > [!example]
> > Lorem ipsum dolor sit amet
> ```

### Quote
Alias: `cite`
> [!quote]
> ```
> > [!quote]
> > Lorem ipsum dolor sit amet
> ```

## References
- [Callouts - Obsidian Help](https://help.obsidian.md/Editing+and+formatting/Callouts)