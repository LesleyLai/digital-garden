---
created: 2024-06-02
modified: 2024-06-02
parent:
  - "[[CMake|CMake]]"
publish: true
tags:
  - computer/cpp/cmake
---

# CMake Presets

**CMake Presets** are json files to store build configurations for CMake. IDEs such as [[VS Code|VS Code]] or CLion can utilize those file.

There are two files:
- `CMakePresets.json` for project-wise builds
- `CMakeUserPresets.json` for developers' own local builds. This file should not be checked into VCS.
Both files have the same format and should be located in a project's root directory.