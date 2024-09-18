---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

#math/analysis #math/topology #math/calculus #math/continuity

---
# Uniform Continuity
**Uniform continuity** is a stronger version of [[./continuous functions|continuity of functions]]. In a metric space, $f: X \rightarrow Y$ is **uniformly continuous** if $\forall \varepsilon > 0 \ \exists \, \delta > 0$ such that $d_Y(f(x), f(x')) < \varepsilon$ whenever $d_X(x, x') < \delta$ for any $x, x' \in X$.

Unlike normal [[./continuous functions|continuity of functions]], the value of $\delta$ here cannot depend on the value of $x$.

Every uniformly continuous function is continuous, but not conversely. But if the domain $X$ is [[./compact metric space|compact]], then the two notions are equivalent.