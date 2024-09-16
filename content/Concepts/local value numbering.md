---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[compiler optimizations|compiler optimizations]]"
publish: true
tags:
  - "#computer/compiler/optimizations"
---

# Local Value Numbering

**Local value numbering** is a way to perform compiler optimization locally in a control block. There is a global counterpart of local value numbering called [[global value numbering|global value numbering]].

## Motivation

Let's consider some challenges in local optimization. What do these different forms have in common?

> [!example]- Dead Code Elimination
> 
>```bril
> main {
 > a: int = const 100; // can be deleted
 > a: int = const 42;
 > print a;
>}
>```

> [!example]- Copy Propagation
>
>```bril
> main {
>   x: int = const 4;
>   copy1: int = id x;
>   copy2: int = id copy1;
>   copy3: int = id copy2;
>   print copy3; // can delete all the copies and print x
> }
> ```

> [!example]- Common Subexpression Elimination (CSE)
> ```bril
> main {
>   a: int = const 4;
>   b: int = const 2;
>   sum1: int = add a b;
>   sum2: int = add a b; // same as sum1
>   prod: int = mul sum1 sum2;
>   print prod;
> }
> ```

>[!answer]-
> All those redundancies in computation are caused by using **variables**. If we can look at the underlying **values** instead, the redundancies disappears.


## Value Numbering

Value numbering stores pairs of value and canonical variable name into a table. When building up values, we can refers to previous values by number in expression.

> [!example]
| number | value(expression) | Canonical Variable Name |
| ------ | ----------------- | ----------------------- |
| 1      |                   | x                       |
| 2      | `(+, #1, #1)`       | a                       |
| 3      | `(*, #2, #1)`       | d                       |
| 4      | `(+, #3, #2)`       | c                       |

We also need to interpret the basic block. Though unlike an actual interpreter, instead of calculating the actual values, we calculate values as the numbers shown above. (since we don't know the actual inputs)

> [!example]-
> Consider our common subexpression elimination example again:
> 
> ```bril
> main {
>   a: int = const 4;
>   b: int = const 2;
>   sum1: int = add a b;
>   sum2: int = add a b; // same as sum1
>   prod: int = mul sum1 sum2;
>   print prod;
> }
> ```
>
>It will generate LVN data structure like this
>
>| number | value         | Canonical Variable Name |
>| ------ | ------------- | ----------------------- |
>| 1      | `const 4`       | a                       |
>| 2      | `const 2`       | b                       |
>| 3      | `(add, #1, #2)` | sum1                    |
>| 4      | `(mul, #3, #3)` | prod                    |
>
> and a map from variables to numbers
>
>{ a -> 1, b -> 2, sum1 -> 3, sum2 -> 3, prod -> 4 }
>
>Notice that both `sum1` and `sum2` points to number 3.
>
>Every time when we processed on instruction, we will reconstruct the instruction base on the table. This process happens on-the-fly with the construction of the table. Thus, when the construction of the table is completed, we should get the following instructions
>
>```bril
main {
  a: int = const 4;
  b: int = const 2;
  sum1: int = add a b;
  sum2: int = id sum1; // Now sum2 is never used
  prod: int = mul sum1 sum1;
  print prod;
}
>```
>
> Now we can run the trivial [[./dead code elimination|dead code elimination]] pass to get rid of `sum2`.

### Extending LVN

While the basic version is already useful for common subexpression elimination, value numbering is a framework that we can extend with fancier optimizations.

#### Copy Propagation

For example, the basic implementation of LVN can't optimize out our **copy propagation** example. To make this example work, our LVN algorithm need to understand the **semantics** of the instructions. In this case, we can say that whenever we encounter the `id` instruction, we assign the value to the underlying value.

> [!example]-
>```bril
main {
  x: int = const 4;
  copy1: int = id x;
  copy2: int = id copy1;
  copy3: int = id copy2;
  print copy3; // can delete all the copies and print x
}
>```
>
>We can replace our original code with
>
>```bril
main {
  x: int = const 4;
  copy1: int = id x;
  copy2: int = id x;
  copy3: int = id x;
  print x;
>}
>```
>
>In this particular example, since we know the value of `x` as a constant, we can even apply _constant propagation_ and we can get
>
>```bril
main {
  x: int = const 4;
  copy1: int = const 4;
  copy2: int = const 4;
  copy3: int = const 4;
  print x;
}
>```

#### Commutativity

Another example is that we can also exploit _commutativity_ of integer arithmetic. This optimization enhance common subexpression elimination.

We can achieve that by _canonicalizing_ values in instruction.

> [!example]-
> ```bril
a: int = const 4;
b: int = const 2;
sum1: int = add a b;
sum2: int = add b a;
prod: int = mul sum1 sum2;
print prod;
>```
> can be transformed into
> ```bril
> a: int = const 4;
> b: int = const 2;
> sum1: int = add a b;
> prod: int = mul sum1 sum1;
> print prod;
>```

#### Constant Propagation
Constant propagation is just like copy propagation but we replace `id` with a `const` instruction.

> [!example]-
>```bril
>x: int = const 4;
>copy1: int = id x;
>copy2: int = id copy1;
>copy3: int = id copy2;
>print copy3;
>```
>transforms to
>```bril
>x: int = const 4;
>copy1: int = const 4;
>copy2: int = const 4;
>copy3: int = const 4;
>print x;
>```

#### Constant Folding

It is possible to achieve _constant folding_ with LVN by combining all the above extensions

> [!example]-
>```bril
@main {
  a: int = const 4;
  b: int = const 2;
>
  sum1: int = add a b;
  sum2: int = add a b;
  prod1: int = mul sum1 sum2;
>
  sum1: int = const 0;
  sum2: int = const 0;
>
  sum3: int = add a b;
  prod2: int = mul sum3 sum3;
>
  print prod2;
}
>```
>
>can be reduced into
>
>```bril
@main {
  prod2: int = const 36;
  print prod2;
}
>```

### Pseudocode for Basic LVN
Note: We need to define equality comparison for the structure that represent a value

```python
table = {} # mapping from value tuples to canonical variables,
  # with each row numbered
var2num = {} # mapping from variable names to their current
  # value numbers (i.e., rows in table)

for instr in block:
    value = (instr.op, var2num[instr.args[0]], ...)

    if value in table:
        # The value has been computed before; reuse it.
        num, var = table[value]
        replace instr with copy of var # a.k.a. dest = id var

    else:
        # A newly computed value.
        num = fresh value number

        # TODO: Can SSA make this redundent?
        # To handle mutation in cases like this
        # x = a + b
        # ...
        # x = c
        # ...
        # y = x
        # where we can rename the old variable to a different name
        # x' = a + b
        # ...
        # x = c
        # ...
        # y = x'
        if instr will be overwritten later:
             dest = fresh variable name
             instr.dest = dest
        else:
             dest = instr.dest

        # Add new entry to the table
        table[value] = num, dest

        # Use (canonical) variables in the table rather than old args
        for a in instr.args:
            replace a with table[var2num[a]].var

    # Always need to update the value of destination variable
    # The value is represented by number in the table
    var2num[instr.dest] = num
```

## See Also
- [[global value numbering|global value numbering]]