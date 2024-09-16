---
aliases:
  - Rust Doctest
created: 2024-06-24
modified: 2024-07-08
parent:
  - "[[Testing in Rust|Testing in Rust]]"
  - "[[Documentation in Rust|Documentation in Rust]]"
publish: true
tags:
  - computer/Rust/Testing
---

# Doc Tests in Rust

All the Rust code samples in documentation are tested by default.
```rust
/// Manipulate a number by magic
///
/// # Examples
///
/// ```rust
/// assert_eq!(min( 0,   14),    0);
/// assert_eq!(min( 0, -127), -127);
/// assert_eq!(min(42,  666),   42);
/// ```
fn min(lhs: i32, rhs: i32) -> i32 {
	if lhs < rhs { lhs } else { rhs }
}
```

To compile but not run a code block, use **no_run**:

```rust
/// Example
///
/// ```no_run
/// use std::fs::File;
///
/// let mut f = File::open("some_file.txt").expect("failed");
/// ```
pub fn item() {}
```

If you want a code block to considered as a **Rust** one (for the syntax highlighting) but don't want to compile it, you can use **ignore**:
```rust
/// Example
///
/// ```ignore
/// hello!
/// ```
pub fn item() {}
```

To show a code example that fails to compile, use **compile_fail**.

## Hide Lines
We can hide some lines from code example display by using `#`:

```rust
/// Example
///
/// ```no_run
/// use std::fs::File;
///
/// # fn foo() -> std::io::Result<()> {
/// let mut f = File::create("foo.txt")?;
/// # Ok(())
/// # }
/// ```
pub fn item() {}
```

The code example will look like this:

```rust
use std::fs::File;

let mut f = File::create("foo.txt")?;
```
## Reference
- [Guide on how to write documentation for a Rust crate](https://blog.guillaume-gomez.fr/articles/2020-03-12+Guide+on+how+to+write+documentation+for+a+Rust+crate)