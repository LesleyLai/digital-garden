---
parent:
  - "[[geometry|geometry]]"
tags:
  - math/geometry
aliases:
  - Voronoi tessellation
  - Voronoi decomposition
  - Voronoi partition
  - Dirichlet tessellation
  - Voronoi cell
publish: true
created: 2024-11-05
modified: 2024-11-05
---
A **Voronoi diagram** is a partition of a plane into regions close to each of a given set of objects. Those objects are often points (called _seeds_ or _sites_). A Voronoi diagram partitions the space so that each region (called **Voronoi cell**) contains all the points closer to one specific seed than to any other seed.

![[../assets/Euclidean_Voronoi_diagram.svg|300]]

The boundaries between cells have equal distances from their neighboring points.
## Generalizations

Voronoi diagrams aren't limited to just points as seeds, and we can use whatever shapes we want: [^1]
![[../assets/Voronoi shape seeds.png|400]]

We can also use a different metrics other than the [[Euclidean distance|Euclidean distance]] for distance. For example, if we use the [[./Manhattan distance|Manhattan distance]], we get a diagram as the following:
![[../assets/Manhattan_Voronoi_Diagram.svg|300]]

## Creation

A brute-force way to create the Voronoi diagram is to loop through each pixel, and for each pixel loop though each object to see which one is the closest.

The [[jump flooding algorithm|jump flooding algorithm]] is a way to generate a fast approximation of the Voronoi diagram.

## Applications
Voronoi diagrams is widely applicable in Computer Graphics:
- It is useful in [[pathfinding|pathfinding]] as it is dual to [[./Delaunay triangulation|Delaunay triangulation]] [^1]
- It is also useful in [[procedural generation|generating procedural contents]] [^1]

## Related
- [[./Delaunay triangulation|Delaunay triangulation]]

[^1]: [Fast Voronoi Diagrams and Distance Field Textures on the GPU With the Jump Flooding Algorithm « The blog at the bottom of the sea](https://blog.demofox.org/2016/02/29/fast-voronoi-diagrams-and-distance-dield-textures-on-the-gpu-with-the-jump-flooding-algorithm/)