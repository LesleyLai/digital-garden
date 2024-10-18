---
parent:
  - "[[cybersecurity|cybersecurity]]"
tags:
  - computing/security
created: 2024-10-18
modified: 2024-10-18
publish: true
---
**Return-oriented programming (ROP)** is an exploit technique that populates the stack with return addresses, each returns to an existing code fragment (known as a _gadget_) that executes a few instructions before performing a return instruction. Chaining together, these gadgets allow attackers to perform arbitrary operations on a machine.

Return-oriented programming is more powerful than more primitive [[buffer overflow|buffer overflow]] exploits because it bypasses the usual OS and hardware restriction of [[executable-space protection|not allowing the stack to be executable]].