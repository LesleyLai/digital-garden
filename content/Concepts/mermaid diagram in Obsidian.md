---
created: 2024-02-23
modified: 2024-03-14
parent:
  - "[[Obsidian MOC|Obsidian]]"
publish: true
tags:
  - tools/obsidian
---

We can add [[mermaid diagram|mermaid diagrams]] in Obsidian by a adding `mermaid` codeblocks.

For example,

````md
```mermaid
sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!
```
````

gives

```mermaid
sequenceDiagram
    Alice->>+John: Hello John, how are you?
    Alice->>+John: John, can you hear me?
    John-->>-Alice: Hi Alice, I can hear you!
    John-->>-Alice: I feel great!
```

## Reference
[Advanced formatting syntax - Obsidian Help](https://help.obsidian.md/Editing+and+formatting/Advanced+formatting+syntax#Diagram)