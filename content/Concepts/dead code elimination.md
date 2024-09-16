---
aliases:
  - trivial dead code elimination
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[compiler optimizations|compiler optimizations]]"
publish: true
tags:
  - "#computer/compiler/optimizations"
---

# Dead Code Elimination
## Trivial Dead Code Elimination

> [!example]+ Example: trivial dead code elimination
> Consider the following program
> ```bril
> main {
>   a: int = const 4;
>   b: int = const 2;
>   c: int = const 1;
>   d: int = add a b;
>   print d;
> }
> ```
> The value of `c` is never used so we can delete that line.

We can remove instructions that _assign to a variable_ which are _never used in the program_/and does _not have any side effect_.

Since we are inspecting *global properties* of instructions in this case, we need to look at the whole function rather than a single block.

pseudocode:
```python
used: Set<Var> = {}
for instr in func:
  used += instr.args

for instr in func:
  # This is ok since Bril instructions will not have
  # both distinations and side effect
  if instr.dest and instr.dest not in used:
    remove instr
```

### Iterate until Convergence

Our implementation does not delete dead code recursively. For example:

```bril
a = 4;
b = 2;
c = 1; // unused but not deleted
d = a + b;
e = c + d; // deleted
print d;
```

We can rectify this error by a simple loop. While the program changes, we can run the DCE again (until nothing changes). Pseudocode:

```python
new_instr = dead_code_elimination(instr)
while new_instr != instr:
  instr, new_instr = new_instr, dead_code_elimination(new_instr)
```

Iterating till convergence is a common theme in optimization.

## Local Dead Code Elimination

Our dead code elimination also does not understand the following code:

```bril
a: int = const 4;
a: int = const 42;
print 42;
```

This kind of dead code elimination can be much more difficult with [[./control flow graph|control flow]], for example:

```bril
  a = 4;
  jmp label;
  a = 42; // this, instead of the previous assign, should be eliminated
label:
  print 42;
```

However, if we only think locally without control flow, the problem is much simpler. We can keep track of variables that are assigned but never used, Pseudocode:

```python
# Variables that are defined but never used
last_def: Map<Var, Instr> = {}

for instr in block:
    # check for uses
    for arg in instr.args:
        last_def.remove(arg)

    # check for definitions
    if instr.dest in last_def:
        # remove last_def[instr.dest] from block (if exist)
        last_def[instr.dest] = instr
```

We can use the same while loop technique to wrap the analysis so we can iterate until convergence.

> [!tip] This kind of local dead-code elimination can also be done with [[./local value numbering|local value numbering]]

## References
- [CS 6120: Local Analysis & Optimization](https://www.cs.cornell.edu/courses/cs6120/2023fa/lesson/3/)