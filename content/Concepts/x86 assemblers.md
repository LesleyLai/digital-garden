---
parent:
  - "[[x86 assembly|x86 assembly]]"
tags:
  - computing/x86
  - tools/assembly
aliases:
  - GAS
  - GNU Assembler
  - NASM
  - YASM
  - MASM
publish: true
created: 2024-12-15
modified: 2024-12-15
---
Besides the difference between [[Intel and AT&T syntax|Intel and AT&T syntax]], different assemblers also have other subtle syntax differences.

## GNU Assembler (GAS)
```sh
as -c <assembly file> -o <object file>
```

GAS uses AT&T syntax by default. We can making it to use Intel syntax by adding `.intel_syntax noprefix` directive to assembly or pass `-msyntax=intel` command line argument.

GCC's inline assembly uses the syntax of GAS.

## LLVM
[[LLVM|LLVM]]'s assembler is designed to be compatible with the GNU one.

## Microsoft Macro Assembler (MASM)
A popular assembler for Windows

## Netwide Assembler (NASM)
NASM is a widely used cross-platform assembler that supports various object file formats. 8
. It uses a syntax similar to Intel's, but with changes to make it simple and easy to understand [^1] As of 2024, NASM remains actively developed. [^2]

## YASM
YASM is a complete rewrite of the NASM assembler, designed to support multiple syntaxes (NASM, GAS, etc.). It's also cross-platform and aims to be more modular and maintainable than NASM.

[^1]: [NASM - The Netwide Assembler](https://www.nasm.us/xdoc/2.14rc6/html/nasmdoc1.html)
[^2]: [NASM or YASM in the modern era (or something else)](https://forum.nasm.us/index.php?topic=3909.0)