---
Aliases:
  - polymorphic typed lambda calculus
  - polymorphic lambda calculus
  - second-order lambda calculus
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# System F

**System F** is a kind of [[typed lambda calculus|typed lambda calculus]] that introduces [[universal quantification|universal quantification]] of types.

>  Girard under the name System F and by Reynolds under the name polymorphic typed λ-calculus

Girard wanted to design a language with termination guarantee but still be able to encode all kinds of types.

### Types
$$
\tau ::= \alpha \ | \ \tau_{1} \rightarrow \tau_{2} \ | \ \forall(\alpha.\tau)
$$
Where the syntax $\alpha.\tau$ is [[variable binder|variable binder]].

### Expressions
$$
e := x \ | \lambda \ (x:\tau).\ e \ | \ e_{1} (e_{2}) \ | \ \Lambda \ \tau. e \ | \ e(\tau)
$$
Note that $e_{1} (e_{2})$ and $e (\tau)$ looks similar and their only difference is the kind of parameter (expression vs type)

### Two Forms of Judgement
$$
\begin{align}
J ::= \ &\Gamma \vdash e : \tau \\
&\Theta \vdash \tau \ \text{type}
\end{align}
$$
Where $\Gamma$ is a list of variable mapping to types ($\{ x_{1}: \tau_{1},\  \cdots\}$), and $\Theta$ is a list of type variables.

### Typing Rule
$$
\frac{}{\Theta,\, \alpha \ \vdash \alpha \ \text{type}}
$$

$$
\frac{}{\Gamma,\, x: \tau \vdash x: \tau}
$$

Arrow:
$$
\frac{\Theta \vdash \tau_{1}  \ \text{type} \quad \Theta \vdash \tau_{2}  \ \text{type}}{\Theta \vdash \tau_{1} \rightarrow \tau_{2} \ \text{type}}
$$
For all is very much like arrow:
$$
\frac{\Theta,\,\alpha \vdash \tau \ \text{type}}{\Theta \vdash \forall(\alpha.\tau) \ \text{type}}
$$
Application
$$
\frac{\Theta \vdash e_{1}: \tau \rightarrow \tau' \quad \Theta \vdash e_{2}: \tau}{\Theta \vdash e_{1}(e_{2}): \tau'}
$$
Abstraction
$$
\frac{\Theta,\, x: \tau \vdash e: \tau'}{\Theta \vdash \lambda (x:\tau).\, e \ : \tau \rightarrow \tau'}
$$
Type Application
$$
\frac{\Theta;\Gamma \vdash e: \forall \alpha.\, \tau \quad \Theta \vdash \tau' \ \text{type}}{\Theta;\Gamma \vdash e(\tau'): \tau[\tau'/\alpha] }
$$
Type Abstraction
$$
\frac{\Theta, \alpha\,;\Gamma \ \vdash e: \tau }{\Theta;\Gamma \vdash \Lambda \, \alpha. e \, : \forall \alpha.\tau}
$$

## References
- [System F - Wikipedia](https://en.wikipedia.org/wiki/System_F)
- [[Practical Foundations for Programming Languages#Chapter 16: System F of Polymorphic Types|Practical Foundations for Programming Languages > Chapter 16: System F of Polymorphic Types]]
- [[Foundations of Programming Languages Polymorphic Lambda-Calculus|Foundations of Programming Languages Polymorphic Lambda-Calculus]]

---
parent: [[./type theory|type theory]]
tags: #computer/PL/TypeTheory