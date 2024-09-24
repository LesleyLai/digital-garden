---
created: 2024-01-14
modified: 2024-03-14
parent:
  - "[[CUDA|CUDA]]"
publish: true
tags:
  - computing/cuda
---

# CUDA Atomics
## Compare and Swap
```cpp
int atomicCAS(int* address, int compare, int val);
```

Its semantics is like this
```cpp
__device__ int atomicCAS(int* address, int compare, int val) {
  __lock(address) {
    int old = *address;
    if (old == compare) { *address = val; }
    return old;
  }
}
```

> [!example]+ Example: Implement atomic add with `atomicCAS`
>```cpp
>__device__ int atomicAdd(int* address, int val) {
>  int old = *address;
>  int assumed;
>  do {
>    // If the value at *address didn't change, imcrement it
>    assumed = old;
>    old = atomicCAS(address, assumed, val + assumed);
>  }
>  return old;
>}
>```