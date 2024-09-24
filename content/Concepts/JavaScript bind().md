---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# JavaScript bind()

## Losing This
JavaScript doesn't have [[bound method|bound method]] and we can easily lose `this` when we store or pass a method as a variable. We can use `bind` to fix this:
```javascript
const ron = new Person("Ron");
const greet = ron.greet;
greet(); // Oops, this is undefined
const greet2 = ron.greet.bind(ron);
greet2(); // ok
```
[[./mimic bound method in JavaScript|When writing our own classes, we can even add some boilerplate code to automate that]].

## See Also
- [[JavaScript this|this]]
- [[JavaScript call()|call()]]
- [[JavaScript apply()|apply()]]

---
parent: [[./JavaScript|JavaScript]]
tags: #computing/javascript