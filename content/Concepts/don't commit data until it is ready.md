---
created: 2023-05-30
modified: 2024-03-14
publish: true
tags:
  - "#computing/best_practices"
  - "#computing/database"
---

# Don't Commit Data until it is Ready
If we commit data when we are only performs an operation partially, we run the risk of being interrupted and need to rewind existing operations. For example, database transactions should be [[atomic transaction|atomic]]. And in programming languages with exceptions, we need to particularly focus on cleaning up partially constructed objects.

## Related
- [[exception safety|exception safety]]