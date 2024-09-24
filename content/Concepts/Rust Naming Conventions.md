---
parent:
  - "[[Rust|Rust]]"
tags:
  - computing/Rust/BestPractice
created: 2024-06-24
modified: 2024-06-24
publish: true
---
# Rust Naming Conventions
- [RFC 199](https://github.com/rust-lang/rfcs/blob/1f5d3a9512ba08390a2226aa71a5fe9e277954fb/text/0199-ownership-variants.md): use `mut`, `move`, or `ref` as suffixes to differentiate methods based on the mutability of their parameters.
- [RFC 344](https://github.com/rust-lang/rfcs/blob/1f5d3a9512ba08390a2226aa71a5fe9e277954fb/text/0344-conventions-galore.md) :
    - how to refer to types in method names (e.g., `&mut [T]` becomes `mut_slice`, and `*mut T` becomes `mut_ptr`)
- [RFC 445](https://github.com/rust-lang/rfcs/blob/1f5d3a9512ba08390a2226aa71a5fe9e277954fb/text/0445-extension-trait-conventions.md): add an `Ext` suffix to extension traits

## Method Naming Conventions
|Method name|Parameters|Notes|Examples|
|---|---|---|---|
|`new`|no self, usually ≥ 1[1](https://deterministic.space/elegant-apis-in-rust.html#fn:new)|Constructor, also cf. [`Default`](https://doc.rust-lang.org/std/default/trait.Default.html)|`Box::new`, `std::net::Ipv4Addr::new`|
|`with_...`|no self, ≥ 1|Alternative constructors|`Vec::with_capacity`, `regex::Regex::with_size_limit`|
|`from_...`|1|cf. [conversion traits](https://deterministic.space/elegant-apis-in-rust.html#use-conversion-traits)|`String::from_utf8_lossy`|
|`as_...`|`&self`|Free conversion, gives a view into data|`str::as_bytes`, `uuid::Uuid::as_bytes`|
|`to_...`|`&self`|Expensive conversion|`str::to_string`, `std::path::Path::to_str`|
|`into_...`|`self` (_consumes_)|Potentially expensive conversion, cf. [conversion traits](https://deterministic.space/elegant-apis-in-rust.html#use-conversion-traits)|`std::fs::File::into_raw_fd`|
|`is_...`|`&self` (or none)|Should probably return a `bool`|`slice::is_empty`, `Result::is_ok`, `std::path::Path::is_file`|
|`has_...`|`&self` (or none)|Should probably return a `bool`|`regex_syntax::Expr::has_bytes`|
## References
- [Elegant Library APIs in Rust - Pascal’s Scribbles](https://deterministic.space/elegant-apis-in-rust.html#what-makes-an-api-elegant)