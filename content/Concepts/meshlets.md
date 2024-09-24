---
created: 2024-07-16
modified: 2024-08-07
parent:
  - "[[mesh shader|mesh shader]]"
publish: true
tags:
  - computing/graphics/MeshShader
---

# Meshlet

## Meshlet Data Structure
When we generate meshlets from the original vertex buffer and index buffer, we will get the following data structures:
```cpp
struct Meshlet  
{  
    u32 vertex_offset;  
    u32 primitive_offset;  
  
    u32 vertex_count;  
    u32 primitive_count;  
};

std::vector<Meshlet> meshlets;
std::vector<u8> primitive_indices; // mostly triangles
std::vector<u32> vertex_indices;
```

The vertex buffer is left unchanged, and together, the information in the meshlet and the two new index buffers `primitive_indices` and `vertex_indices` can be used to retrieve the original index buffer.

### Why We Have Two Index Buffers?
The purpose of the two index buffers is better data compression.

Consider the following original index buffer of triangles:
```cpp
indices = { 4,5,6, 8,4,6, ...}
```

This will generate the following buffers:
```cpp
vertex_indices = { 4,5,6, 8, ...}
// For the second triangle only vertex 8 must be added
// and the other vertices are re-used.

primitive_indices = { 0,1,2,  3,0,2, ...}
// the primitive indices are local per meshlet
```

Because a meshlet can't have more than 256 vertices, `primitive_indices` only need to be stored in an `u8` rather than a `u32`.

Given a meshlet, here is how to get the original index from those two buffers:
```cpp
indices[i] = vertex_indices[primitive_indices[i] + meshlet.primitive_offset] + meshlet.vertex_offset
```

![[../assets/meshlets_data.png|meshlets_data.png]]
## References
- [Introduction to Turing Mesh Shaders | NVIDIA Technical Blog](https://developer.nvidia.com/blog/introduction-turing-mesh-shaders/)