---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

#computer/Rust/generic 
`std::clone::Clone` is explicit with a `.clone()` method, while [[./Rust Copy trait|Copy]] is implicit.

Many types in Rust can't have `Copy`. `Copy` need to guarantee to be cheap, and `Copy` can't handle [[Rust references|references]] correctly (naive copy can cause two [[./Rust ownership|owners]] of the same object).