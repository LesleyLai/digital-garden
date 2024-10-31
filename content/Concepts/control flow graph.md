---
aliases:
  - CFG
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#computing/compiler/optimizations"
---
The control flow graph is a [[directed graph|directed graph]] where each vertex is an instruction and each edge indicates a *possible* flow of control. It has exactly *one entry* vertex and *one exit* vertex.

We can combine sequence of instructions without label or jump into [[./basic blocks|basic blocks]]. We can only jump to top of a basic block and won't be able to jump until the end of it.

## Examples
Examples are in [[./Bril|Bril]]

### Example 1
```bril
@main {
  v: int = const 5;
  print v;
}
```

can be represented as a graph

```
v: int = const 5;
print v;
```

### Example 2
```
@main {
  v: int = const 4;
  jmp .somewhere;
  v: int = const 2;
.somewhere:
  print v;
}
```

``` text
v: int = const 4;
jmp .somewhere;
      |
      |
      v
print v;  <----- v: int = const 2;
```

### Example 3
``` bril
@main {
  v: int = const 4;
  b: bool = const false;
  br b . there .here;
.here:
  v: int = const 2;
.there:
  print v;
}
```

```bril
v: int = const 4;
b: bool = const false;
br b . there .here; ----o
     |                  |
     |false             | true
     v                  |
v: int = const 2;       |
     |                  |
     |                  |
     o------------------o
     |
     v
print v;
```

## Algorithm to Create CFG
   Basic idea:
   1. [[./form basic blocks from IR|Form basic blocks from IR]]
   2. Associate basic block with labels (if no label, generate one)
   3. [[./create control flow graph from basic blocks|generate CFG from basic blocks]]