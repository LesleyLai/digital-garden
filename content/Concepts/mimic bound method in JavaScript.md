---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

# Mimic Bound Method in JavaScript

Because [[JavaScript this|this keyword]] is weird and JavaScript doesn't have [[bound method|bound method]], we often need to [[./JavaScript bind()|bind]] methods to instances manually. Without it, the following code can fail:

```javascript
const ron = new Person("Ron");

// Oops: `this` got rebound to undefined when calling `greet`
setTimeout(ron.greet, 1000);
```

Here are three ways to fix the problem.

## Manually Bind Pattern
One way to work around this problem is to use the following pattern:
```typescript
class Person {
    constructor(name) {
        this.name = name;
        // manually bind greet with a fixed this
        this.greet = this.greet.bind(this);
    }

    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
```

## Arrow Function as Method
Alternatively, we can make `greet` a property with arrow function to ensure `this` isn't rebound when `greet` is used
```javascript
class Person {
    name;
    constructor(name) {
        this.name = name;
    }

    greet = () => {
        console.log(`Hello, my name is ${this.name}.`);
    };
}
```

## Decorator
We can also make a `bound` [[./javascript decorators|decorator]] to solve this issue:
```js
function bound(value, {kind, name, addInitializer}) {
  if (kind === 'method') {
    addInitializer(function () { // (B)
      this[name] = value.bind(this); // (C)
    });
  }
}
```
In here, `bound` isn't return anything, so when decorating it will leave the original method along. Instead, it uses `addInitializer` to replace the method in the class with a function bound by a fixed `this`.

And here it is in action:
```javascript
class Person {
    name;
    constructor(name) {
        this.name = name;
    }

    @bound
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}
```

---
parent: [[./JavaScript bind()|bind]]
tags: #computer/javascript