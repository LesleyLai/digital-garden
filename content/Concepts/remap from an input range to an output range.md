---
created: 2024-02-15
modified: 2024-03-14
parent:
  - "[[./lerp|lerp]]"
publish: true
tags:
  - math/interpolation/lerp
---

`remap` is a useful function that takes a value from an input range to an output range. Its implementation combines an [[./inverse lerp|inverse lerp]] and a [[./lerp|lerp]].

```cpp
float remap(float i_min, float i_max, float o_min, float o_max, float v) {
  float t = inverse_lerp(i_min, i_max, v);
  return lerp(o_min, o_max, t);
}
```

## References
- [Inverse Lerp - a super useful yet often overlooked function](https://gamedev.net/tutorials/programming/general-and-gameplay-programming/inverse-lerp-a-super-useful-yet-often-overlooked-function-r5230/)