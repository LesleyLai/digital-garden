---
created: 2024-05-30
modified: 2024-05-30
parent:
  - "[[Rust concurrency|Rust concurrency]]"
  - "[[message passing|message passing]]"
publish: true
tags:
  - computer/Rust/concurrency
---

# Rust Message Passing

Rust implements [[message passing|message passing]] between threads via channels. For example:

```rust
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();

    thread::spawn(move || {
        let val = String::from("hi");
        tx.send(val).unwrap();
    });

    let received = rx.recv().unwrap();
    println!("Got: {}", received);
}
```

## See Also
- [[actor model|actor model]]
- [[active object|active object]]

## References
- [Using Message Passing to Transfer Data Between Threads - The Rust Programming Language](https://rust-book.cs.brown.edu/ch16-02-message-passing.html)