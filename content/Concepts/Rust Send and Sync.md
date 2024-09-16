---
created: 2024-05-30
modified: 2024-05-30
parent:
  - "[[Rust concurrency|Rust concurrency]]"
publish: true
tags:
  - computer/Rust/concurrency
---

# Rust Send and Sync
`Send` and `Sync` are `std::marker` traits to support concurrency.

## Send
`Send` is a marker indicating the data can be transferred across thread. Almost all Rust types are `Send`, but there are exceptions like `Rc<T>`.

## Sync
`Sync` is a marker indicating that the data can be safely referenced from another thread. In other words, any type `T` is `Sync` if `&T` (an immutable reference to `T`) is `Send`. Primitive types are `Sync`, and any Rust types composed of only `Sync` types are `Sync`.

`Sync` is the most similar concept in Rust to the colloquial meaning of the phrase "thread-safe".

## Common Types
- `Rc` is neither `Send` nor `Sync`. Sending an `Rc` across thread means multiple threads can access to the reference counter non-atomically
- The `RefCell<T>` and `Cell<T>` types are `Send` (if `T: Send`), but they are not `Sync`. A `RefCell` can be sent across a thread boundary, but not accessed concurrently because the implementation of borrow checking that `RefCell<T>` does at runtime is not thread-safe.
- `Mutex<T>` is `Send` and `Sync`
- The type `MutexGuard<'a, T>` that is returned by `Mutex::lock` is `Sync` (if `T: Sync`) but not `Send`. It is specifically not `Send` because [some platforms mandate that mutexes are unlocked by the same thread that locked them](https://github.com/rust-lang/rust/issues/23465#issuecomment-82730326).

## References
- [Extensible Concurrency with the Sync and Send Traits - The Rust Programming Language](https://rust-book.cs.brown.edu/ch16-04-extensible-concurrency-sync-and-send.html)