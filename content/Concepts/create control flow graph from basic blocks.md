---
created: 2023-05-30
modified: 2024-03-14
parent:
  - "[[control flow graph|control flow graph]]"
  - "[[basic blocks|basic blocks]]"
publish: true
tags:
  - "#computing/compiler/optimizations"
---
```scala
def blocks_to_cfg(labels_to_blocks: Map<Label, Block>) {
  // CFG contains mapping from the label of a block to label of its successor blocks
  var cfg : Map<Label, List of Labels> = {}
  for (i, (label, block) <- enumerate(label_to_blocks)) {
    cfg[label] = []
    if (i != label_to_blocks.size() - 1) // not the last block
    {
      // Need to calculate next_block some way :-(
      cfg[label].push_back(next_block)
    }
    if (block.last() is terminator) {
      adds where the block will jump to to cfg[label]
    }
  }
}
```