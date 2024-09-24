---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

#computing/graphics/RayTracing #computing/graphics/AntiAliasing/TAA 
Converging in Path Tracing requires a stationary image. Otherwise, if we accumulate result when the camera is moving, we can see ghost image. An alternative approach is **temporal reprojection**, where we approximate where is the location of the current pixel last frame and project the result from that location of previous frame to the current pixel.

There are multiple approach for temporal reprojection, including
- [[./MPEG2 Approach for Temporal Reprojection|MPEG2 Approach for Temporal Reprojection]]
- [[./Using MVP matrix and motion vectors for temporal reprojection|Using MVP matrix and motion vectors for temporal reprojection]]
- [[./Using Camera matrix for temporal reprojection|Using Camera matrix for temporal reprojection]]

Sometimes we won't have history information of the last pixel. Examples includes when
- the location was offscreen last frame 
- the location was occuluded last frame
- the location is on a specular surface with view-dependent BRDF
- the location was in shadow of a moving light in the previous frame, now it isn't
In case one, we can only drop all the samples. And in all other cases, we clip.

## Reference
- [Lecture 14 TAA and ReSTIR](Lecture%2014%20TAA%20and%20ReSTIR.md)
- [[A Survey of Temporal Antialiasing Techniques|A Survey of Temporal Antialiasing Techniques]]