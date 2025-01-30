---
created: 2023-05-30
modified: 2024-03-14
---
# Value-Oriented Programming

Date Read: Feb 1, 2023
Author: [[Lucian Radu Teodorescu|Lucian Radu Teodorescu]]
Link: [Value-Oriented Programming](https://accu.org/journals/overload/31/173/teodorescu/#FN01)
Tags: #Literature/Articles

---
[[./content/Concepts/value-oriented programming|Value-oriented programming]] that the [[./content/Concepts/The Hylo Programming Language|The Hylo Programming Language]] programming language proposes can improve safety and local reasoning.

## Existing [[programming paradigms|programming paradigms]]
- [[modular programming|modular programming]]
- [[structured programming|structured programming]]
- [[object-oriented programming|object-oriented programming]]
  - Discourage uses of function pointers to achieve polymorphism
- [[functional programming|functional programming]]

## Locally and Globally Detectable Undefined Behavior
- Locally detectable can be fixed by runtime checks
- Globally detectable need analysis
  
## Value-oriented Programming
### Ban First-class References

### Consequences
- spooky action at a distance cannot happen anymore;
- *[[./content/Concepts/law of exclusivity|law of exclusivity]]* is imposed, which guarantees exclusivity of access when performing mutation
- [[./content/Concepts/aggregation vs composition|aggregation is eliminated; to be replaced by composition.]]
  
Safe by default

### Thread Safety
- [[./content/Concepts/synchronization quadrant|synchronization quadrant]]
- With law of exclusivity we don't have shared mutable data
  - so we don't need explicit synchronization and cannot have [[data race|data race]] issues

### Whole-part Relations
- No "incidental data structures"
- [[./content/Concepts/object composition|Composition]] is also called a *whole-part* relationship
  - Using only whole-part relationships, all the objects in a program form a [[forest in graph theory|forest]] (set of disjoint trees).
  - Impact of changing objects is always local

### Changing Mental Model
- Reference data structures like graphs need to be implemented with indices

## The Val Programming Language
see: [[./content/Concepts/The Hylo Programming Language|The Hylo Programming Language]]
Val is based on [[./content/Concepts/Swift|Swift]], but enforce value semantics by disallowing features like classes (which is ref counted) and closures with mutable capture.