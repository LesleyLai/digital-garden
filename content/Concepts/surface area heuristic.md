---
parent:
  - "[[BVH|BVH]]"
tags:
  - computing/graphics/RayTracing/BVH
created: 2024-08-22
modified: 2024-12-05
aliases:
  - SAH
publish: true
---
**Surface area heuristic (SAH)** is a heuristic commonly used in various spatial partitioning schemes, particularly in ray tracing acceleration structures.

The core idea of SAH is the assumption that the probability of a random ray intersecting with an object within a bounding volume is proportional to the ratio of the object's surface area to the surface area of the bounding volume.

>[!example]
> ![[../assets/SAH.webp|354]]
> 
> If a bounding box with surface area $\operatorname{SA}(A)$ is split into two children with surface areas $\operatorname{SA}(B)$ and $\operatorname{SA}(C)$, the probabilities that a ray passing through $A$ also passes through $B$ and $C$ is given by $\operatorname{SA}(B)/\operatorname{SA}(A)$ and $\operatorname{SA}(C)/\operatorname{SA}(A)$, respectively [^1]

## Cost Function

The quality of an acceleration structure can be estimated in terms of the expected number of operations need to finding the nearest intersection with a given ray. The cost with root $N$ is given by the [[./difference equations|recurrence relation]]:
$$
c(N) = \begin{cases}
c_T + \sum_{N_c} P(N_c|N) c(N_c) & \text{if interior node} \\
c_I |N| & \text{if leaf node}
\end{cases}
$$
where
- $c(N)$ is the cost of the subtree with root $N$
- $c_T$ is the cost of traversing the node (usually a ray-box intersection)
- $c_I$ is the cost of a ray-primitive intersection
- $|N|$ is the number of primitives in the node $N$
- $N_c$ are children of $N$
- $P(N_c|N)$ is the [[./conditional probability|conditional probability]] of traversing child node $N_c$ given that $N$ is intersected

The constants $c_T$ and $c_I$ are usually rough approximations. In practice, their ratio is more important than their absolute values. This ratio impacts leaf sizes. Although traversal cost is typically much smaller than ray-primitive intersection cost, PBRT intentionally undertone a ratio $c_I:c_T$ of 2:1 to avoid very deep BVHs, which can harm data locality. [^1]

The surface area heuristic express the above conditional probability as the proportion of surface areas:
$$
P(N_c|N)^{SAH} = \frac{\operatorname{SA}(N_c)}{\operatorname{SA}(N)}
$$
where $SA(N)$ is the surface area of the bounding box of node $N$. Substituting back into the cost function, we get
$$
c(N)^{SAH} = \begin{cases}
c_T + \sum_{N_c} \frac{\operatorname{SA}(N_c)}{\operatorname{SA}(N)} c(N_c) & \text{if interior node} \\
c_I |N| & \text{if leaf node}
\end{cases}
$$
By unrolling, we can remove the recurrence
$$
c(N)^{SAH} = \frac{1}{\operatorname{SA}(N)} \left[ c_T \sum_{N_i} \operatorname{SA}(N_i) + c_I \sum_{N_l} \operatorname{SA}(N_l)|N_l| \right]
$$
where
- $N_i$ and $N_l$ denotes the interior and the leaf nodes of a subtree with root $N$, respectively

## In Practice and Performance

In practice, we typically begin by selecting an axis to split and then apply a greedy algorithm to determine the split plane that minimizes the cost for the leaves. [^1] 

Given n primitives, there are n-1 possible ways to split objects across an axis. A naive approach would use an O(n²) algorithm to compute the cost of each potential split: [^3]
```cpp
const int split_count = primitive_count - 1;
std::vector<float> cost(split_cost);

for (int i = 0; i < split_count: ++i) {
    Bounds3f b0, b1;
    int count0 = 0, count1 = 0;
    for (int j = 0; j <= i; ++j) {
        b0 = bound_union(b0, primitives[j].bounds);
        count0 += primitives[j].count;
    }
    for (int j = i+1; j < primitive_count; ++j) {
        b1 = bound_union(b1, primitives[j].bounds);
        count1 += primitives[j].count;
    }
    cost[i] = traversing_cost 
      + (count0 * b0.surface_area() + count1 * b1.surface_area())
        / bounds.surface_area();
}
```

PBRT v4 improved this approach by using a forward scan followed by a backward scan ($\mathcal{O}(n)$ in total), which drastically improved the performance despite they already use [[binned BVH building|binned BVH building]] with a small $n$. [^1] 
```cpp
// forward scan
int count_below = 0;
Bounds3f bound_below;
for (int i = 0; i < split_count; ++i) {
    bound_below = bound_union(bound_below, primitives[i].bounds);
    count_below += buckets[i].count;
    costs[i] += count_below * bound_below.surface_area();
}

// backward scan
int count_above = 0;
Bounds3f bound_above;
for (int i = split_count; i >= 1; --i) {
    bound_above = bound_union(bound_above, primitives[i].bounds);
    count_above += buckets[i].count;
    costs[i - 1] += count_above * bound_above.surface_area();
}

// Finalize costs
for (int i = 0; i < split_count; ++i) {
    costs[i] = traversal_cost + costs[i] / bounds.surface_area();
}
```

[[binned BVH building|Binned BVH building]] (PBRT calls it "buckets") is another optimization that can be performed. Instead of testing splits between every primitive (a very large number), we group them into a fixed number of bins to drastically reduce the number of splits to check. This can still produce reasonably high-quality results.

![[../assets/binned BVH.webp|263]]

With all of that done, we can use a simple linear search over the potential splits to find the one with minimum cost. If the minimum cost is still higher than the cost of traversing all the primitives, we just create a leaf node instead of splitting.

[^1]: [PBRT V4 7.3.2 The Surface Area Heuristic](https://pbr-book.org/4ed/Primitives_and_Intersection_Acceleration/Bounding_Volume_Hierarchies#TheSurfaceAreaHeuristic)
[^2]: [A Survey on Bounding Volume Hierarchies for Ray Tracing](https://meistdan.github.io/publications/bvh_star/paper.pdf) ([[A Survey on Bounding Volume Hierarchies for Ray Tracing|note]])
[^3]: [PBRT V3 4.3.2 The Surface Area Heuristic](https://pbr-book.org/3ed-2018/Primitives_and_Intersection_Acceleration/Bounding_Volume_Hierarchies#TheSurfaceAreaHeuristic)