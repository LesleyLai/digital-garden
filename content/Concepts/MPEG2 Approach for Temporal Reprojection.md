---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

#computer/graphics/RayTracing #computer/graphics/AntiAliasing/TAA 
Using the color of pixel (x, y), search the neighborhood for a similar color (Problem: requires color of pixel (x, y), which (for path tracing) is noisy in the current and the previous frames)

Alternative, using additional data: using the world space position of the primary intersection point, search the neighborhood for the same position
		- (we need to store a worldspace position per pixel)
		- (We may need to store a worldspace positions per sample) (think about things like anti-aliasing and motion-blur)
## Reference
New Fast Binary Pyramid Motion Estimation for MPEG-2