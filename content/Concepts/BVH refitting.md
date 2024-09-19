---
parent:
  - "[[./BVH|BVH]]"
tags:
  - computer/graphics/RayTracing/BVH
created: 2024-09-19
modified: 2024-09-19
publish: true
---
**BVH Refitting** updates a [[./BVH|BVH]] structure to accommodate changes in the geometry of a scene without fulling rebuild the BVH from scratch. This technique is usually much faster than rebuilding, but can result in poorer quality BVH. It is commonly used in real-time rendering and animation.

## Algorithm
BVH refitting simply updates the _bounds_ of each nodes without changing the structure of the BVH. The process start at the leaf nodes, where after changing the triangle positions, we update the node bounding box. We then propagate the update back to parent nodes.

This sounds like a recursive algorithm, but if we build BVH in a flat array with the invariant that parent nodes are _always_ before child nodes, we can just iterate array in reverse order:

```cpp
for (int i = nodesUsed - 1; i >= 0; i--) {
    if (i != 1) { 
        BVHNode& node = bvhNode[i];
        if (node.isLeaf())  {
            // leaf node: adjust bounds to contained triangles
            UpdateNodeBounds( i );
            continue;
        }
        // interior node: adjust bounds to child node bounds
        BVHNode& leftChild = bvhNode[node.leftFirst];
        BVHNode& rightChild = bvhNode[node.leftFirst + 1];
        node.aabbMin = fminf( leftChild.aabbMin, rightChild.aabbMin );
        node.aabbMax = fmaxf( leftChild.aabbMax, rightChild.aabbMax );
    }
}
```
[^1]
## Limitations
Consider the following situation: we move one of the small objects from the left group to the right. If we refit the top-left box to include the moved object, the resulting box will become enormous, almost completely overlapping the right box.

![[../bad BVH refitting.jpg|bad BVH refitting.jpg]]Refitting works best when there are subtle animations and the overall shape of objects remains relatively unchanged. We can also combine refitting and rebuilding by refitting every frame and rebuilding every few frames to prevent the BVH from degrading too much. [^1]


[^1]: [How to build a BVH – part 4: Animation – Jacco’s Blog](https://jacco.ompf2.com/2022/04/26/how-to-build-a-bvh-part-4-animation/)