---
created: 2024-01-02
modified: 2024-03-14
parent: "[[performance MOC]]"
publish: true
tags:
  - computing/performance/branchless
---
Branches that can't be effectively [[branch prediction|predicted]] by CPU are costly because they can cause long [[./pipeline hazard|pipeline stall]].

### Related to Data Parallel Programming
- Branchless programming is important in [[SIMD|SIMD]] since it doesn't have branches in the first place
- Branchless is also important for GPU programming where [[branch divergence|branch divergence]] hurts performance a lot

## Resources
- [Branchless Programming - Algorithmica](https://en.algorithmica.org/hpc/pipelining/branchless/)