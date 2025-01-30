---
created: 2023-05-30
modified: 2024-03-14
---
# Rust for Rustaceans

Author: Jon Gjengset
Link: https://rust-for-rustaceans.com
Tags: #Literature/Books

---

# The Book in 3 Sentences

# Impressions

## How I Discovered It

## Who Should Read It?

## How the Book Changed Me

How my life / behaviour / thoughts / ideas have changed as a result of reading the book.

# Summary

# Notes
## Chapter 1
value: combination of a type and an element in that type's domain 
> A value can be turned into a sequence of bytes using its type’s representation (but on it's own a value is not bytes)

A value is stored in a place. The most common place to store a value is _variable_, which is a named value slot on the stack.

> A pointer is a value that holds the address of a region of memory, so the pointer points to a place. A pointer can be dereferenced to access the value stored in the memory location it points to. We can store the same pointer in more than one variable and therefore have multiple variables that indirectly refer to the same location in memory and thus the same underlying value.

### Variables in Depth
#### High-level Model
- As name given to value as they are instantiated
- can't have variables without value 

To do: something something about flow 
#### Low Level Model
Same as C and C++
### Memory Regions
- Stack
  - registers can be seen as optimization
- Heap
- Static memory
  - special lifetime `'static'`

### Ownership
main: [[./content/Concepts/Rust ownership|Rust ownership]]
- [[./content/Concepts/Rust drop order|Rust drop order]]

### Interior Mutability
main: [[./content/Concepts/Rust interior mutability|Rust interior mutability]]

### Lifetime
main: [[./content/Concepts/Rust lifetime|Rust lifetime]]

#### Lifetimes and the Borrow Checker
main: [[./content/Concepts/Rust borrow checker|Rust borrow checker]]
The Rust borrow checker checks the "data flow" of reference does not conflict with other flows.

TODO

#### Generic Lifetimes
TODO

#### Lifetime Variance
main: [[./content/Concepts/Rust lifetime variance|Rust lifetime variance]]


## Chapter 2: Types
Skips the besics described in [[The Rust Programming Language|The Rust Programming Language]].

### Types in Memory
#### Alignment
dictates where the bytes for a type can be stored
all values must be byte-aligned since pointers only point to bytes
CPU's word size: 
  e.g. on 64 bit system, most values are accessed in chunk of 8 bytes
misaligned access: operations on data that is not aligned
  poor performance and concurrency problems

#### Layout
Rust repr attribute
  - repr(C)
  - repr(transparent) (garantees that the layout of outer type is the same as the repr of theinner type)
  - repr(packed) (may cause misaligned access)
  - repr(align(n)): give a particularfield or type a larger alignment than it requires (can be useful to prevent [[false sharing|false sharing]])
  - False sharkng happens when two different CPU access different values that share a cache line (Contend the same cache line)

#### Complex Types
##### Dynamically Sized Types and Wide Pointers
[[Rust dynamically sized types|Rust dynamically sized types]]
most types in Rust implement `Sized` automatically, but trait objects and slices do not.

Every single type bound includes `T: Sized` by default unless it is `T: ?Sized` (? here means maybe)

wide pointer (also called fat pointer) bridge the gap of sized and unsized type
When taking a reference of dynamically-sized typez the compiler automatically create a wide-pointer

### Traits and Trait Bound
#### Compilation and Dispatch
The combination of a type that implements a trait and its vtable is called a trait object.

Most traits can be turned into a trait object, but not all.
(e.g. Clone, because the compiler won't know the return type of `.clone()`)
TODO: Extend
To be object-safe
- none of methods can be generic or use the `Self` type
- The trait can't have static method (since we don't know which concrete method to call)

trait bound `Self: Sized` implies that `Self` is not used through a trait object (since it would then be `!Sized`). Todo: usage

static dispatch for library and dynamic dispatch for binary

### Generic Traits
todo