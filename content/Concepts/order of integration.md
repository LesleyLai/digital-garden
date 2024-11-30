---
parent:
  - "[[calculus|calculus]]"
tags:
  - math/calculus/integration
created: 2024-11-29
modified: 2024-11-29
publish: true
---
Interchange of the **order of integration** can often makes integration easier, though it is not always valid to do so.

When dealing with integrals that have variable bounds, care must be taken when swapping the order of integration. Visualizing the region by drawing diagrams can be extremely helpful.

> [!example]- Example: integrate $\int_{x = 0}^1 \int_{y = x}^{\sqrt{x }} \frac{e^y}{y} \, dy  \, dx$
> Note: there are **no way** to integrate $\int_{y = x}^{\sqrt{x }} \frac{e^y}{y} \, dy$ directly
> 
> We can compute the new bound by drawing a graph
> ![[../assets/exchange order of integration example.webp|300]]
>
> $$
> \begin{align}
> &\int_{x = 0}^1 \int_{x}^{\sqrt{x }} \frac{e^y}{y} \, dy  \, dx  \\
> &= \int_{y = 0}^1 \int_{x = y^2}^{y} \frac{e^y}{y} \, dx  \, dy \\
> &= \int_{y = 0}^1 \left[ \frac{e^y}{y}x \right]_{x = y^2}^y \, dx  \, dy \\
> &= \int_{y = 0}^1 e^y - ye^y \, dy \\
> &= -ye^y + 2e^y
> \end{align}
> $$

> [!example]- Example: Integrate $\int_{t = 0}^{1/4} \int_{u = \sqrt{ t }}^{1/2} \frac{e^u}{u} \, du  \, dt$
> First we draw a graph:
> ![[../assets/20241129_094856.webp|300]]
> $$
> \begin{align}
> & \int_{t = 0}^{1/4} \int_{u = \sqrt{ t }}^{1/2} \frac{e^u}{u} \, du  \, dt \\
> &= \int_{u = 0}^{1/2} \int_{t = 0}^{u^2}  \frac{e^u}{u} \, dt  \, du & \text{(switch integration order)} \\
> &= \int_{u = 0}^{1/2} \frac{e^u}{u}t \Biggr\rvert_{t = 0}^{u^2} \, du \\
> &= \int_{u = 0}^{1/2} e^u u \, du \\
> &= e^u u \Biggr\rvert_{u = 0}^{1/2} - \int_{u = 0}^{\frac{1}{2}} e^u \, du & \text{(integration by parts)} \\
> &= \frac{1}{2}e^{1/2} - e^{1/2} + e^0 \\
> &= 1 - \frac{1}{2} e^{1/2}
> \end{align}
> $$