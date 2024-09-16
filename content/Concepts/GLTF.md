---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - computer/graphics/scene
---

# GLTF
We have a list of scenes
Each _scene_ has multiple _nodes_
Each _node_ contains a `mesh` index for `mesh` array
Data of the scene are stored in _buffers_, and each section of a buffer is described in _buffer view_
An _accessor_ points into a buffer view by defining the type, offset, and size of the data
Each entry of the mesh array is composed of one or more _mesh primitives_
_material_ array contains texture and other material properties
Each _texture_ is defined by an image and a sampler