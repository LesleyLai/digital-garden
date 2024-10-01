---
parent:
  - "[[CSS|CSS]]"
tags:
  - computing/css
  - cheatsheet
created: 2024-10-01
modified: 2024-10-01
publish: true
---
## Selector Combinations

| Syntax  | Example             | Explanation                                     |
| ------- | ------------------- | ----------------------------------------------- |
| `A B`   | `li a`              | Select all Bs that are descendants of A         |
| `AB`    | `.class1.class2`    | A and B                                         |
| `A, B`  | `.class1, .class2`  | A or B                                          |
| `A > B` | `li > a`            | Select all Bs that are direct child of A        |
| `A + B` | `.class1 + .class2` | Select the B which is immediately preceded by A |
| `A ~ B` | `ul ~ div`          | (Sibling) Select B which following a `A`        |
