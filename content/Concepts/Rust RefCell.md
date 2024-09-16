---
created: 2024-04-29
modified: 2024-04-29
parent:
  - "[[Rust smart pointers|Rust smart pointers]]"
publish: true
tags:
  - computer/Rust/smart_pointers
---

# Rust `RefCell`

`RefCell` is a Rust's smart pointer type to implement [[./Rust interior mutability|interior mutability]]. `RefCell` is single-threaded, and its multi-threaded alternative is [[Rust Mutex|Mutex]].

With regular reference, we have `&` and `mut &` to borrow the underlying data. With `RefCell`, we use `borrow` and `borrow_mut` methods. `borrow` method returns a `Ref<T>`, and `borrow_mut` returns a `RefMut<T>`. `RefCell<T>` keeps track of how many `Ref<T>` and `RefMut<T>` instances are active at runtime.

## Combine `RefCell` with `Rc`
`RefCell` is often combined with [[./Rust Rc and Arc|Rc]]. `Rc` only hold immutable values, we need to add `RefCell` change the values inside.

```rust
let shared_map: Rc<RefCell<_>> = Rc::new(RefCell::new(HashMap::new()));

{
    // note we limit the scope of this borrowing
    let mut map: RefMut<'_, _> = shared_map.borrow_mut();
    map.insert("africa", 92388);
    map.insert("kyoto", 11837);
    map.insert("piccadilly", 11826);
    map.insert("marbles", 38);
}

let total: i32 = shared_map.borrow().values().sum();
```

## Related
- [[Rust Mutex|Mutex]] - Similar to `RefCell` but also works in concurrent environment
- [[Rust RwLock|RwLock]]
- [[Rust OnceCell|OnceCell]]
- [[Rust Cell|Cell]] - do not give out a mutable reference to the inner value, but instead give methods to manipulating those values in place