---
parent:
  - "[[x86 assembly|x86]]"
tags:
  - computing/x86
created: 2025-01-02
modified: 2025-01-02
publish: true
aliases:
  - x86 condition codes
---
CPU usually has some **status flags** that stored in a "flags register." On x86-64, the status is stored in a 64 bit `rflags` register. It has a 32 bit counterpart, `eflags`.

While we can't directly write to `rflags`, there are specific instructions that allow manipulation of the flags register. The CPU updates `rflags` automatically after executing most instructions, with different instructions affecting different flags

Below are some of the most commonly used flags:

| Flag   | Name          | Bit # | Meaning                                                                                                                                |
| ------ | ------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **CF** | Carry flag    | 0     | Set to 1 if the last operation resulted in a carry out of the most significant bit, and 0 otherwise                                    |
| **PF** | Parity flag   | 2     | Set to 1 if the least significant byte of the result contains an even number of 1 bits, and 0 otherwise                                |
| **ZF** | Zero flag     | 6     | Set to 1 if the result of the last instruction was 0 and 0 otherwise                                                                   |
| **SF** | Sign flag     | 7     | Set to 1 if the most significant bit of the last result was 1 ([[twos complement\|two's complement]] negative number), and 0 otherwise |
| **OF** | Overflow flag | 11    | Set to 1 if the last instruction resulted in signed integer overflow, and 0 otherwise                                                  |
It's worth noting that the `rflags` register contains additional flags beyond these status flags.