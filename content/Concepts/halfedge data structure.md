---
aliases:
  - halfedge
  - Half-Edge
created: 2024-01-25
modified: 2024-03-14
parent: []
publish: true
tags:
  - "#computing/graphics/geometry"
---

# Half-Edge Data Structure
Halfedge data structure is an edge centered data structure to store [[polygon mesh|polygon mesh]].

The key idea is to split every edge into two *half edges*. Halfedge act as "glue" between mesh elements, and each vertex and edge face points to just one of its halfedges.

![[../assets/halfedge.png|halfedge.png]]


Halfedge makes mesh traversal easy since we can use "twin" and "next" pointers to move around edges, and use "vertex," "edge," and "face" pointers to grab elements.

For example, to visit all vertices of a triangle, we can do the following:
![[../assets/halfedge vertices traversal.png|600]]


  To visit all neighbors of a vertex, we can do the following:
![[../assets/halfedge neighbors traversal.png|halfedge neighbors traversal.png]]

## Halfedge Connectivity is Always Manifold
   To make a halfedge data structure valid, it must satisfy some "common-sense" conditions:
   - `this->twin->twin == this`
   - `this->twin != this`
   - Every halfedge is someone's "next"

Those three conditions also guarantee that a polygon mesh is [[./manifold|manifold]].
Since
 - keep following "next," and we get faces
 - following "twin" and we get edges
 - keep following "next->twin" and we get vertices

## Alternatives to Halfedge
- Many very similar data structures
   - [[winged edge|winged edge]]
   - [[corner table data structure|corner table]]
   - [[quad-edge data structure|quad-edge]]
 - Each stores local neighborhood information
 - Similar tradeoffs relative to simple polygon list
   - Cons: additional storage, incoherent memory access
   - Pros: better access time for individual elements, intuitive traversal of local neighborhoods

## See also
   - [Geometry Central Library](http://geometry-central.net/)
   - [An intro to geometry central library](https://www.youtube.com/watch?v=mw5Xz9CFZ7A)