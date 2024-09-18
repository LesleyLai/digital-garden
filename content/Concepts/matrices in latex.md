---
created: 2024-04-18
modified: 2024-04-18
parent:
  - "[[latex|latex]]"
publish: true
tags:
  - tools/latex
  - cheatsheet
---

See: [Matrices - Overleaf, Online LaTeX Editor](https://www.overleaf.com/learn/latex/Matrices)

| Type         | LaTeX markup                                                | Renders as                                                  |
| ------------ | ----------------------------------------------------------- | ----------------------------------------------------------- |
| Plain        | `\begin{matrix}   1 & 2 & 3\\   a & b & c   \end{matrix}`   | $\begin{matrix}   1 & 2 & 3\\   a & b & c   \end{matrix}$   |
| Parentheses  | `\begin{pmatrix}   1 & 2 & 3\\   a & b & c   \end{pmatrix}` | $\begin{pmatrix}   1 & 2 & 3\\   a & b & c   \end{pmatrix}$ |
| Brackets     | `\begin{bmatrix}   1 & 2 & 3\\   a & b & c   \end{bmatrix}` | $\begin{bmatrix}   1 & 2 & 3\\   a & b & c   \end{bmatrix}$ |
| Braces       | `\begin{Bmatrix}   1 & 2 & 3\\   a & b & c   \end{Bmatrix}` | $\begin{Bmatrix}   1 & 2 & 3\\   a & b & c   \end{Bmatrix}$ |
| Pipes        | `\begin{vmatrix}   1 & 2 & 3\\   a & b & c   \end{vmatrix}` | $\begin{vmatrix}   1 & 2 & 3\\   a & b & c   \end{vmatrix}$ |
| Double pipes | `\begin{Vmatrix}   1 & 2 & 3\\   a & b & c   \end{Vmatrix}` | $\begin{Vmatrix}   1 & 2 & 3\\   a & b & c   \end{Vmatrix}$ |

## Inline matrices
We can write small matrices with `smallmatrix`

| LaTeX                                                          | Result                                                         |
| -------------------------------------------------------------- | -------------------------------------------------------------- |
| `\begin{pmatrix} a & b\\   c & d \end{pmatrix}`                | $\begin{pmatrix} a & b\\   c & d \end{pmatrix}$                |
| `\big(\begin{smallmatrix} a & b\\ c & d\end{smallmatrix}\big)` | $\big(\begin{smallmatrix} a & b\\ c & d\end{smallmatrix}\big)$ |