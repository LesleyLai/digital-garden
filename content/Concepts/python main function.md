---
parent:
  - "[[Python|Python]]"
tags:
  - computing/python
created: 2025-03-11
modified: 2025-03-11
publish: true
---
```python
def main():
    pass # do stuff here

if __name__ == "__main__":
    main()
```

> [!info] When a Python module is imported, `__name__` is set to the module’s filename (without the `.py` extension). This check ensures that `main()` runs only when the script is executed directly, not when it's imported as a module.