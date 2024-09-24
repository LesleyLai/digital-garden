---
created: 2024-01-08
modified: 2024-03-14
parent:
  - "[[CUDA|CUDA]]"
publish: true
tags:
  - computing/cuda
---

# CUDA Stream
**Stream** is a series of operation that are executed in issued order.
They allow multiple CUDA kernels to launch concurrently.

There is always one _default stream_.

There can be no execution in any non-default streams at the same time as any execution in the default stream. Or in other word, _default stream cannot overlap with non-default stream_.

Many CUDA runtime functions takes a stream argument (which default to 0)

Kernels can be launched with non-default streams using the 4th launch configuration argument:
```cpp
kernel<<<grid, block, shared_memory, stream>>>
```

## API
Creation
```cpp
cudaStream_t stream;
cudaStreamCreate(&stream);
```

destruction
```cpp
cudaStreamDestroy(stream);
```