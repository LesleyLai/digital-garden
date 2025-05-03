---
aliases:
  - exclusvie disjunction
  - XOR
created: 2024-04-27
modified: 2024-08-17
parent:
  - "[[./logical connective|logical operator]]"
publish: true
tags:
  - logic
---
**Exclusive or**, or **exclusvie disjunction**, abbreviated as **XOR**, is a [[./logical connective|logical operator]] with the following truth table:

| $A$ | $B$ | $A \oplus B$ |
| --- | --- | ------------ |
| F   | F   | F            |
| F   | T   | T            |
| T   | F   | T            |
| T   | T   | F            |

Symbols used to represent exclusive or including $\oplus$ (`\oplus`) and $\veebar$ (`\veebar`).

One way to understand the xor operator is "addition modulo 2".

## XOR in Cryptography
see also: [[XOR cipher|XOR cipher]]

The XOR operation doesn't leak information about the original plaintext (sometimes called "perfectly balanced"). In other words, knowing the result of an XOR operation doesn't allow us to infer whether the original bit was more likely 0 or 1."

It also has the property of [[./involution|being its own inverse]]:
$$
(A \oplus B) \oplus B = A
$$

These properties makes it useful in both encryption and decryption.
