---
parent:
  - "[[triangle mesh|triangle mesh]]"
tags:
  - computing/graphics/geometry
created: 2024-10-03
modified: 2024-10-03
publish: true
---
When determining whether a [[point in triangle test|point is inside a triangle]], a common approach is to check if the point is on the same side of all three edges of the triangle.

![[../assets/point in triangle test.png|point in triangle test.png]]

With code similar to the following:
```c
float sign(Point p1, Point p2, Point p3)
{
    return (p1.x - p3.x) * (p2.y - p3.y) - (p2.x - p3.x) * (p1.y - p3.y);
}

bool PointInTriangle (Point pt, Point v1, Point v2, Point v3)
{
    float d1, d2, d3;
    bool has_neg, has_pos;

    d1 = sign(pt, v1, v2);
    d2 = sign(pt, v2, v3);
    d3 = sign(pt, v3, v1);

    has_neg = (d1 < 0) || (d2 < 0) || (d3 < 0);
    has_pos = (d1 > 0) || (d2 > 0) || (d3 > 0);

    return !(has_neg && has_pos);
}

```

However, this approach can lead to incorrect results in the case of **degenerate triangles** when all three vertices lie on a single line. In that case, if we have an arbitrary point on the same line as the degenerate triangle, the edge test algorithm may incorrectly return true even when the point is far outside the actual extent of the degenerate triangle. [^2]

![[../assets/point in triangle test degenerated.png|point in triangle test degenerated.png]]

As a result, robust implementations of "point inside triangle" test need to specially handle the degenerate case. We can do that by calculating the area of the triangle and test whether it is zero: [^1]

```cpp
if (length_squared(cross(p2 - p0, p1 - p0)) == 0) {
  // degenerate triangle
}
```

[^1]: [Triangle Meshes](https://pbr-book.org/4ed/Shapes/Triangle_Meshes)
[^2]: [Final Fantasy VII: Degenerate Triangles Explained (World Map) - YouTube](https://www.youtube.com/watch?v=iEL7vzzT9bU)