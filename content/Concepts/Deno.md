---
created: 2023-05-30
modified: 2024-05-01
publish: true
tags:
  - computer/javascript
---

# Deno

Deno is a JS/TS runtime designed as an alternative to [[./nodejs|Node.js]]. It's design goal is to remove [[accidental complexity|accidental complexity]] of Node, and it has measures including
- trying hard to avoid [[./implicit dependencies|implicit dependencies]] and portability problem
- shipping high-value tools like code formatters and lsp server

Deno also has a [[./capability system|capability system]] where you must specify OS permissions. This is useful against [[supply chain attacks|supply chain attacks]].

## References
- [[a love letter to deno|a love letter to deno]]