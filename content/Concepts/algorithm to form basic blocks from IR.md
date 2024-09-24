---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[control flow graph|control flow graph]]"
publish: true
tags:
  - "#computing/compiler/optimizations"
---
See: [[./basic blocks|basic blocks]]

Here is the pseudocode:
``` scala
type Block = Vector<Instruction>

def instructions_to_blocks(instructions: Vector<Instruction>) {
  var current_block: Block = []
  for (instr <- instructions) {
    if (instr is label) {
      // End the current block
      if current_block is not empty {
        yield current_block
      }

      // Start a new block with this label
      current_block = [instr]
    } else { // is normal instruction
      // Add the instruction to the new block
      current_block.push(instr)
      
      // If it is a terminator, finish the current block
      if (instr is terminator) {
        yield current_block
        current_block = []
      }
    }
  }
  // yield final block
  if current_block is not empty {
    yield current_block;
  }
}
```

Lesley's remark: This code can be simplify if we have [[generator|generators]]

We can also compute a "label to basic block" map structure in this process.