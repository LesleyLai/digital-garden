---
created: 2024-02-16
modified: 2024-03-14
parent:
  - "[[map of concepts]]"
tags:
  - learning/NoteTaking/organization/MOC
publish: true
---
One of a quick way to create a MOC in [[Obsidian MOC|Obsidian]] is to make a single-line [[Obsidian Dataview|dataview]] query as the following:

```md
    ```dataview
    list from [[]] and !outgoing([[]])
    ```
```

This query generates an inbox of items that are open for further manipulation. The clever aspect is that once an outgoing link to an item is created, it is automatically removed from this list.

We can also add tags. This will often include the current page, so we need to explicitly exclude that:

```md
    ```dataview
    list from [[]] or \#tag and !outgoing([[]])
    WHERE file.name != this.file.name
    ```
```