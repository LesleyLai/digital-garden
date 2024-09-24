---
created: 2024-02-15
modified: 2024-03-14
parent:
  - "[[lerp|lerp]]"
publish: true
tags:
  - math/interpolation/lerp
---
# Inverse Lerp

```js
lerp( a, b, t ) = value
inv_lerp( a, b, value ) = t
```
Inverse lerp returns a number $t \in [0, 1]$ base on a value between $a$ and $b$. 

![[../assets/inverse_lerp.gif|400]]

It can be implemented as the following:
```cpp
float inverse_lerp(float a, float b, float v) {
  return (v - a) / (b - a);
}
```

A useful function based on lerp and inverse lerp is [[./remap from an input range to an output range|remap]], which maps a value from an input range to an output range.
## References
[Inverse Lerp - a super useful yet often overlooked function](https://gamedev.net/tutorials/programming/general-and-gameplay-programming/inverse-lerp-a-super-useful-yet-often-overlooked-function-r5230/)