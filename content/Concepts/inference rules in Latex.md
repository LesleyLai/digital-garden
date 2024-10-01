---
parent:
  - "[[latex|latex]]"
tags:
  - tools/latex
aliases:
  - logical argument in latex
publish: true
created: 2024-04-18
modified: 2024-04-18
---
There are multiple ways to write [[./argument|logical argument]] or [[./inference rules|inference rules]] in Latex, but [bussproofs](https://ctan.org/pkg/bussproofs) is a great package that also works with [[MathJax|MathJax]].

> [!example]-
> ```latex
> \newcommand\inf[2]{$\langle#1,[]\rangle\rightarrow #2$}
> \begin{prooftree}
>   \AXC{}\RL{num}
>   \UIC{\inf{1}{1}}
>   \AXC{}\RL{var}
>   \UIC{\inf{x}{0}}\RL{gt}
>   \BIC{\inf{x>1}{false}}
>   \AXC{}\RL{skip}
>   \UIC{\inf{skip()}{[]}}\RL{if}
>   \BIC{\inf{if(x>1)then(x:=10)else(skip())}{[]}}
> \end{prooftree}
> ```
>
> $$
> \newcommand\inf[2]{$\langle#1,[]\rangle\rightarrow #2$}
> \begin{prooftree}
>   \AXC{}\RL{num}
>   \UIC{\inf{1}{1}}
>   \AXC{}\RL{var}
>   \UIC{\inf{x}{0}}\RL{gt}
>   \BIC{\inf{x>1}{false}}
>   \AXC{}\RL{skip}
>   \UIC{\inf{skip()}{[]}}\RL{if}
>   \BIC{\inf{if(x>1)then(x:=10)else(skip())}{[]}}
> \end{prooftree}
> $$

## References
- [pdftex - Compact way to write inference rule with bussproofs - TeX - LaTeX Stack Exchange](https://tex.stackexchange.com/questions/600824/compact-way-to-write-inference-rule-with-bussproofs)
- [bussproofs — MathJax 3.2 documentation](https://docs.mathjax.org/en/latest/input/tex/extensions/bussproofs.html)