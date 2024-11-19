---
parent:
  - "[[binomial coefficient|binomial coefficient]]"
tags:
  - math/combinatorics
aliases:
  - Pascal's triangle
created: 2024-11-19
modified: 2024-11-19
publish: true
---
The **Pascal's rule** states that for any positive [[natural numbers|natural numbers]] $n$ and $k$,
$$
{n \choose k} = {n - 1 \choose k - 1} + {n - 1 \choose k}
$$
We can visualize the above [[./difference equations|recurrence relation]] by the **Pascal's triangle**
![[../assets/Pascal's triangle.webp|200]]  ![[../assets/Pascal's triangle binomial.webp|250]]
where each entry corresponds to a binomial coefficient.

## Relation with the Vandermonde's Identity
We can view the Pascal's rule as a special case of the [[./Vandermonde's identity|Vandermonde's identity]]
$$
{m+n \choose r}=\sum_{k=0}^r{m \choose k}{n \choose r-k}
$$
When $m = 1$, we get
$$
\begin{align}
{n + 1 \choose r} &=\sum_{k=0}^r{1 \choose k}{n \choose r-k} \\
&= {n \choose r-k}\biggr\rvert_{k = 0} + {n \choose r-k}\biggr\rvert_{k = 1} \\
&= {n \choose r} + {n \choose r - 1}
\end{align}
$$
because ${1 \choose 0} = {1 \choose 1} = 1$, and ${1 \choose k} = 0$ for $k > 1$.

## See Also
- [[./Vandermonde's identity|Vandermonde's identity]]: ${m+n \choose r}=\sum_{k=0}^r{m \choose k}{n \choose r-k}$