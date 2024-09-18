---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

#computer/cpp 
# C++ "Swap And iterate" Pattern
This pattern prevents invocation of callback invalidates the iterators in the loop (by modifying `callbacks`)
```cpp
// All events are dispatched when we call process
void process() {
    std::vector<Callback> tmp{};
    using std::swap; // the "std::swap" two-step
    swap(tmp, callbacks_);
    for (const auto& callback : tmp) {
        std::invoke(callback);
    }
}
```

The boilerplates can be reduced by using `std::exchange`:
```cpp
void process() {
    for (const auto& callback : std::exchange(callbacks_, {})) {
        std::invoke(callback);
    }
}
```

This pattern also extends to multi-threading setting with locks.