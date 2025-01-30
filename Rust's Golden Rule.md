---
created: 2023-05-30
modified: 2024-05-04
tags:
  - Literature/articles
  - computing/Rust
link: https://steveklabnik.com/writing/rusts-golden-rule
author:
  - "[[Steve Klabnik|Steve Klabnik]]"
---
# Rust's Golden Rule

One of the design principle of Rust is "_if a function body contradict function's signature, function's signature is correct and the body is wrong_". Steve refers to this rule as "_the signature is the contract_."

An obvious result is that Rust can't infer function signature. However it does help creating better error messages that manifest closer to the actual errors rather than else where.

It also causes a pain called "[[./content/Concepts/Rust borrow splitting|borrow splitting]]"