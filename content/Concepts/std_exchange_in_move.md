---
created: 2023-05-30
modified: 2024-03-14
publish: true
---

#computer/cpp 
# Use `std::exchange` in Move Operations
Example:
```cpp
  auto operator=(const UniqueResource& other) & noexcept
      -> UniqueResource& = delete;

  UniqueResource(UniqueResource&& other) noexcept
      : device_{std::exchange(other.device_, nullptr)},
        allocator_ptr_{std::exchange(other.allocator_ptr_, nullptr)},
        resource_{std::exchange(other.resource_, nullptr)}
  {
  }

  auto operator=(UniqueResource&& other) & noexcept -> UniqueResource&
  {
    if (resource_ != other.resource_) {
      delete_without_reset();
      device_ = std::exchange(other.device_, nullptr);
      allocator_ptr_ = std::exchange(other.allocator_ptr_, nullptr);
      resource_ = std::exchange(other.resource_, nullptr);
    }

    return *this;
  }
```