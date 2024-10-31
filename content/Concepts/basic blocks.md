---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#computing/compiler/optimizations"
---
When [[./create control flow graph from basic blocks|constructing]] [[./control flow graph|control flow graph]], a **basic block** combines a sequence of instructions so that
- jumps and branches only happen at the end of a basic block 
- we can only jump to the top of a basic block
Those properties implies that *if any instruction in a basic block execute, all instructions must execute*.

Branch or jump instructions that end the basic block are called "*terminators*".